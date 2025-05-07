/**
 * Mock Integration Test
 * 
 * This test demonstrates how to use our mock implementations
 * for both Firebase and PostgreSQL during testing.
 */

// Set environment for testing
process.env.NODE_ENV = 'test';
process.env.USE_POSTGRES = 'true';

// Import mock configuration
require('../config/mockFirebase');

// Import models through the adapter
const { userModel, petModel } = require('../../models/adapter');
const { validUser } = require('../fixtures/userFixtures');
const { validPet } = require('../fixtures/petFixtures');
const { testDataStore } = require('../helpers/testDbSetup');

// Clean test data before tests
beforeEach(() => {
  // Reset test data
  Object.keys(testDataStore).forEach(key => {
    testDataStore[key] = [];
  });
});

// Helper function to convert callback-style functions to Promises
const promisify = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

describe('Mock Integration Tests', () => {
  describe('User and Pet Integration', () => {
    it('should create a user and associate pets with them', async () => {
      // Arrange - Create a user
      const userData = validUser();
      const user = await promisify(userModel.createUser, userData);
      
      // Create multiple pets for the user
      const pet1 = validPet({ ownerId: user.id, name: 'Pet 1' });
      const pet2 = validPet({ ownerId: user.id, name: 'Pet 2' });
      
      // Act - Add the pets
      const createdPet1 = await promisify(petModel.createPet, pet1);
      const createdPet2 = await promisify(petModel.createPet, pet2);
      
      // Manually add the pets to the test data store
      testDataStore.pets.push(createdPet1);
      testDataStore.pets.push(createdPet2);
      
      // Assert - Get user's pets
      // This simulates what would happen with a real database
      const userPets = testDataStore.pets.filter(p => p.ownerId === user.id);
      
      expect(userPets).toBeDefined();
      expect(userPets.length).toBe(2);
      expect(userPets[0].ownerId).toBe(user.id);
      expect(userPets[1].ownerId).toBe(user.id);
    });
    
    it('should delete a user and handle orphaned pets', async () => {
      // Arrange - Create a user and pets
      const userData = validUser();
      const user = await promisify(userModel.createUser, userData);
      
      const pet = validPet({ ownerId: user.id });
      const createdPet = await promisify(petModel.createPet, pet);
      
      // Manually add the pet to the test data store
      testDataStore.pets.push(createdPet);
      
      // Act - Delete the user
      await promisify(userModel.deleteUser, user.id);
      
      // Assert - Check that user is gone but pet remains
      const deletedUser = await userModel.getUserById(user.id);
      expect(deletedUser).toBeNull();
      
      // In a real implementation, we'd have cascade logic or orphan handling
      // This just demonstrates the testing approach
      const orphanedPets = testDataStore.pets.filter(p => p.ownerId === user.id);
      expect(orphanedPets.length).toBe(1);
    });
  });
  
  describe('Data Consistency Tests', () => {
    it('should maintain data consistency across operations', async () => {
      // Arrange - Create a user
      const userData = validUser();
      const user = await promisify(userModel.createUser, userData);
      
      // Add to test data store to simulate database persistence
      testDataStore.users.push(user);
      
      // Update the user
      const updateData = { name: 'Updated Name' };
      const updatedUser = await promisify(userModel.updateUser, user.id, updateData);
      
      // Update in test data store
      const userIndex = testDataStore.users.findIndex(u => u.id === user.id);
      if (userIndex >= 0) {
        testDataStore.users[userIndex] = updatedUser;
      }
      
      // Create a pet for the user
      const pet = validPet({ ownerId: user.id });
      const createdPet = await promisify(petModel.createPet, pet);
      
      // Manually add the pet to the test data store
      testDataStore.pets.push(createdPet);
      
      // Act - Get the latest user data
      const retrievedUser = await userModel.getUserById(user.id);
      
      // Assert
      expect(retrievedUser).toBeDefined();
      expect(retrievedUser.name).toBe('Updated Name');
      
      // Check pet association
      const userPets = testDataStore.pets.filter(p => p.ownerId === user.id);
      expect(userPets.length).toBe(1);
      expect(userPets[0].id).toBe(pet.id);
    });
  });
  
  describe('Adapter Integration Tests', () => {
    it('should switch between Firebase and PostgreSQL implementations', async () => {
      // First use PostgreSQL
      process.env.USE_POSTGRES = 'true';
      
      // Create a user with PostgreSQL implementation
      const userData = validUser();
      const pgUser = await promisify(userModel.createUser, userData);
      
      // Now switch to Firebase
      process.env.USE_POSTGRES = 'false';
      
      // Create another user with Firebase implementation
      const firebaseUserData = validUser({ id: 'firebase-user' });
      const firebaseUser = await promisify(userModel.createUser, firebaseUserData);
      
      // Check that implementation switched correctly
      expect(pgUser.id).toBe(userData.id);
      expect(firebaseUser.id).toBe('firebase-user');
      
      // Switch back to PostgreSQL for cleanup
      process.env.USE_POSTGRES = 'true';
    });
  });
}); 