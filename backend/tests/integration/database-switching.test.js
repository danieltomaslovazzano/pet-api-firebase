/**
 * Database Switching Integration Tests
 * 
 * This test suite verifies that the adapter pattern correctly handles database operations
 * with the Prisma implementation.
 */

const { userModel, petModel } = require('../../models/adapter');
const { validUser } = require('../fixtures/userFixtures');
const { validPet } = require('../fixtures/petFixtures');
const { cleanupPostgresDb } = require('../helpers/testDbSetup');
const { v4: uuidv4 } = require('uuid');

// Helper function to convert callback-style functions to Promises
const promisify = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

describe('Database Operations Tests', () => {
  // Clean PostgreSQL database before tests
  beforeAll(async () => {
    await cleanupPostgresDb();
  });
  
  afterAll(async () => {
    await cleanupPostgresDb();
  });
  
  describe('Basic CRUD Operations', () => {
    it('should perform user CRUD operations successfully', async () => {
      // Create
      const userData = validUser();
      const createdUser = await promisify(userModel.createUser, userData);
      expect(createdUser).toBeDefined();
      expect(createdUser.id).toBe(userData.id);
      
      // Read
      const readUser = await userModel.getUserById(userData.id);
      expect(readUser).toBeDefined();
      expect(readUser.id).toBe(userData.id);
      
      // Update
      const updatedUser = await promisify(userModel.updateUser, userData.id, { 
        name: 'Updated Name' 
      });
      expect(updatedUser.name).toBe('Updated Name');
      
      // Delete
      const deleteResult = await promisify(userModel.deleteUser, userData.id);
      expect(deleteResult).toBeDefined();
      expect(deleteResult.message).toContain('deleted successfully');
      
      // Verify deletion
      const deletedUser = await userModel.getUserById(userData.id);
      expect(deletedUser).toBeNull();
    });
    
    it('should perform pet CRUD operations successfully', async () => {
      // Create
      const petData = validPet();
      const createdPet = await promisify(petModel.createPet, petData);
      expect(createdPet).toBeDefined();
      
      // Read
      const readPet = await petModel.getPetById(petData.id);
      expect(readPet).toBeDefined();
      expect(readPet.id).toBe(petData.id);
      
      // Update
      const updatedPet = await promisify(petModel.updatePet, petData.id, { 
        name: 'Updated Pet Name' 
      });
      expect(updatedPet.name).toBe('Updated Pet Name');
      
      // Delete
      const deleteResult = await promisify(petModel.deletePet, petData.id);
      expect(deleteResult).toBeDefined();
      expect(deleteResult.message).toContain('deleted successfully');
      
      // Verify deletion
      const deletedPet = await petModel.getPetById(petData.id);
      expect(deletedPet).toBeNull();
    });
  });

  describe('Prisma-specific Features', () => {
    it('should handle transactions correctly', async () => {
      const userData = validUser();
      const petData = validPet({ ownerId: userData.id });

      // Create user and pet in a transaction
      const result = await userModel.createUserWithPet(userData, petData);
      expect(result).toBeDefined();
      expect(result.user.id).toBe(userData.id);
      expect(result.pet.ownerId).toBe(userData.id);

      // Verify both were created
      const user = await userModel.getUserById(userData.id);
      const pet = await petModel.getPetById(petData.id);
      expect(user).toBeDefined();
      expect(pet).toBeDefined();
      expect(pet.ownerId).toBe(user.id);
    });

    it('should handle relationships correctly', async () => {
      // Create a user
      const userData = validUser();
      const user = await promisify(userModel.createUser, userData);

      // Create pets for the user
      const pet1 = await promisify(petModel.createPet, validPet({ ownerId: user.id }));
      const pet2 = await promisify(petModel.createPet, validPet({ ownerId: user.id }));

      // Get user with pets
      const userWithPets = await userModel.getUserWithPets(user.id);
      expect(userWithPets).toBeDefined();
      expect(userWithPets.pets).toHaveLength(2);
      expect(userWithPets.pets[0].ownerId).toBe(user.id);
      expect(userWithPets.pets[1].ownerId).toBe(user.id);
    });

    it('should handle cascading deletes', async () => {
      // Create a user with pets
      const userData = validUser();
      const user = await promisify(userModel.createUser, userData);
      const pet = await promisify(petModel.createPet, validPet({ ownerId: user.id }));

      // Delete the user
      await promisify(userModel.deleteUser, user.id);

      // Verify pet was also deleted
      const deletedPet = await petModel.getPetById(pet.id);
      expect(deletedPet).toBeNull();
    });
  });
}); 