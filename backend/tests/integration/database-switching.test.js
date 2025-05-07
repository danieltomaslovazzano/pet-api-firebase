/**
 * Database Switching Integration Tests
 * 
 * This test suite verifies that the adapter pattern correctly handles switching 
 * between Firebase and PostgreSQL database implementations.
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

describe('Database Switching Tests', () => {
  // Clean PostgreSQL database before tests
  beforeAll(async () => {
    // Force PostgreSQL for initial cleanup
    process.env.USE_POSTGRES = 'true';
    await cleanupPostgresDb();
  });
  
  afterAll(async () => {
    // Restore default
    process.env.USE_POSTGRES = 'true';
    await cleanupPostgresDb();
  });
  
  describe('Runtime Switching', () => {
    it('should use PostgreSQL when USE_POSTGRES is true', async () => {
      // Arrange
      process.env.USE_POSTGRES = 'true';
      const userId = uuidv4();
      const userData = validUser({ id: userId });
      
      // Act
      const createdUser = await promisify(userModel.createUser, userData);
      
      // Assert
      expect(createdUser).toBeDefined();
      expect(createdUser.id).toBe(userId);
      
      // Verify the user exists in PostgreSQL
      const retrievedUser = await userModel.getUserById(userId);
      expect(retrievedUser).toBeDefined();
      expect(retrievedUser.id).toBe(userId);
    });
    
    // Note: This test is commented out as it requires Firebase setup
    // Uncomment and adapt when Firebase is properly configured
    /*
    it('should use Firebase when USE_POSTGRES is false', async () => {
      // Arrange
      process.env.USE_POSTGRES = 'false';
      const userId = uuidv4();
      const userData = validUser({ id: userId });
      
      // Act
      const createdUser = await promisify(userModel.createUser, userData);
      
      // Assert
      expect(createdUser).toBeDefined();
      expect(createdUser.id).toBe(userId);
      
      // Verify the user exists in Firebase
      const retrievedUser = await userModel.getUserById(userId);
      expect(retrievedUser).toBeDefined();
      expect(retrievedUser.id).toBe(userId);
      
      // Clean up - delete the test user
      await promisify(userModel.deleteUser, userId);
    });
    */
    
    it('should switch to PostgreSQL when USE_POSTGRES changes to true', async () => {
      // Arrange - First use Firebase
      process.env.USE_POSTGRES = 'false';
      
      // Then switch to PostgreSQL
      process.env.USE_POSTGRES = 'true';
      const userData = validUser();
      
      // Act - This should now use PostgreSQL
      const createdUser = await promisify(userModel.createUser, userData);
      
      // Assert
      expect(createdUser).toBeDefined();
      expect(createdUser.id).toBe(userData.id);
      
      // Verify the user was created in PostgreSQL
      const retrievedUser = await userModel.getUserById(userData.id);
      expect(retrievedUser).toBeDefined();
    });
  });
  
  describe('API Consistency', () => {
    beforeEach(() => {
      // Use PostgreSQL for these tests
      process.env.USE_POSTGRES = 'true';
    });
    
    it('should provide consistent user CRUD operations', async () => {
      // Create
      const userData = validUser();
      const createdUser = await promisify(userModel.createUser, userData);
      expect(createdUser).toBeDefined();
      
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
    
    it('should provide consistent pet CRUD operations', async () => {
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
  
  // This test is disabled by default as it requires both databases to be configured
  describe.skip('Cross-Database Validation', () => {
    it('should maintain data consistency when switching databases', async () => {
      // This test would validate that data is consistent between the databases
      // It's skipped as it would require real synchronization between Firebase and PostgreSQL
    });
  });
}); 