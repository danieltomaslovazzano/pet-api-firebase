/**
 * Pet Model Tests - Prisma Implementation
 * 
 * This test suite focuses on the Prisma implementation of the Pet model.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

// Import helpers and mock Firebase first
require('../../config/mockFirebase');

const petModel = require('../../../models/prisma/petModel');
const { cleanupPostgresDb, testDataStore, testDataGenerator } = require('../../helpers/testDbSetup');

// Helper function to promisify callback-based functions
const promisify = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
};

describe('Pet Model - Prisma Implementation', () => {
  beforeEach(async () => {
    await cleanupPostgresDb();
  });

  describe('createPet', () => {
    it('should create a new pet successfully', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();

      // Act
      const result = await promisify(petModel.createPet, petData);

      // Assert
      expect(result).toBeDefined();
      expect(result.id).toBe(petData.id);
      expect(result.name).toBe(petData.name);
      expect(result.species).toBe(petData.species);
      expect(result.status).toBe(petData.status);
    });

    it('should handle errors when creating a pet with duplicate ID', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();

      // Create first pet
      await promisify(petModel.createPet, petData);

      // Act & Assert
      await expect(promisify(petModel.createPet, petData))
        .rejects.toThrow('Pet with this ID already exists');
    });

    // Validation Rules
    it('should validate required fields', async () => {
      // Arrange
      const invalidPetData = {
        id: testDataGenerator.generateId(),
        // Missing required name
        species: 'dog'
      };

      // Act & Assert
      await expect(promisify(petModel.createPet, invalidPetData))
        .rejects.toThrow('Name is required');
    });

    it('should validate species values', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        species: 'invalid-species'
      });

      // Act & Assert
      await expect(promisify(petModel.createPet, petData))
        .rejects.toThrow('Invalid species value');
    });

    it('should validate status values', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        status: 'invalid-status'
      });

      // Act & Assert
      await expect(promisify(petModel.createPet, petData))
        .rejects.toThrow('Invalid status value');
    });

    it('should validate age values', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        age: -1
      });

      // Act & Assert
      await expect(promisify(petModel.createPet, petData))
        .rejects.toThrow('Age must be a positive number');
    });
  });

  describe('getPetById', () => {
    it('should retrieve a pet by ID', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      await promisify(petModel.createPet, petData);

      // Act
      const retrievedPet = await petModel.getPetById(petData.id);

      // Assert
      expect(retrievedPet).toBeDefined();
      expect(retrievedPet.id).toBe(petData.id);
      expect(retrievedPet.name).toBe(petData.name);
    });

    it('should return null for non-existent pet ID', async () => {
      // Act
      const retrievedPet = await petModel.getPetById('non-existent-id');

      // Assert
      expect(retrievedPet).toBeNull();
    });
  });

  describe('updatePet', () => {
    it('should update pet information', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      await promisify(petModel.createPet, petData);

      const updateData = {
        name: 'Updated Name',
        age: 3
      };

      // Act
      const updatedPet = await promisify(petModel.updatePet, petData.id, updateData);

      // Assert
      expect(updatedPet).toBeDefined();
      expect(updatedPet.name).toBe(updateData.name);
      expect(updatedPet.age).toBe(updateData.age);
    });

    it('should handle errors when updating non-existent pet', async () => {
      // Act & Assert
      await expect(promisify(petModel.updatePet, 'non-existent-id', { name: 'New Name' }))
        .rejects.toThrow('Pet not found');
    });

    // Validation Rules
    it('should validate species values on update', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      await promisify(petModel.createPet, petData);

      // Act & Assert
      await expect(promisify(petModel.updatePet, petData.id, { species: 'invalid-species' }))
        .rejects.toThrow('Invalid species value');
    });

    it('should validate status values on update', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      await promisify(petModel.createPet, petData);

      // Act & Assert
      await expect(promisify(petModel.updatePet, petData.id, { status: 'invalid-status' }))
        .rejects.toThrow('Invalid status value');
    });

    it('should validate age values on update', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      await promisify(petModel.createPet, petData);

      // Act & Assert
      await expect(promisify(petModel.updatePet, petData.id, { age: -1 }))
        .rejects.toThrow('Age must be a positive number');
    });
  });

  describe('deletePet', () => {
    it('should delete a pet successfully', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      await promisify(petModel.createPet, petData);

      // Act
      const result = await promisify(petModel.deletePet, petData.id);

      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('deleted successfully');

      // Verify pet is deleted
      const deletedPet = await petModel.getPetById(petData.id);
      expect(deletedPet).toBeNull();
    });

    it('should handle errors when deleting non-existent pet', async () => {
      // Act & Assert
      await expect(promisify(petModel.deletePet, 'non-existent-id'))
        .rejects.toThrow('Pet not found');
    });
  });

  // Relationship Tests
  describe('Pet Relationships', () => {
    it('should handle owner relationship', async () => {
      // Arrange
      const { user, pets } = testDataGenerator.generateUserWithPets(1);
      const pet = pets[0];
      await promisify(petModel.createPet, pet);

      // Act
      const petWithOwner = await petModel.getPetWithOwner(pet.id);

      // Assert
      expect(petWithOwner).toBeDefined();
      expect(petWithOwner.owner).toBeDefined();
      expect(petWithOwner.owner.id).toBe(user.id);
    });

    it('should handle image attachments', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        images: ['image1.jpg', 'image2.jpg']
      });
      await promisify(petModel.createPet, petData);

      // Act
      const petWithImages = await petModel.getPetById(petData.id);

      // Assert
      expect(petWithImages).toBeDefined();
      expect(petWithImages.images).toHaveLength(2);
      expect(petWithImages.images).toContain('image1.jpg');
    });

    it('should handle location data', async () => {
      // Arrange
      const locationData = {
        latitude: 37.7749,
        longitude: -122.4194,
        address: 'San Francisco, CA'
      };
      const petData = testDataGenerator.generatePet({
        location: locationData
      });
      await promisify(petModel.createPet, petData);

      // Act
      const petWithLocation = await petModel.getPetById(petData.id);

      // Assert
      expect(petWithLocation).toBeDefined();
      expect(petWithLocation.location).toEqual(locationData);
    });
  });

  // Error Cases
  describe('Error Cases', () => {
    it('should handle database connection errors', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      
      // Mock database error
      prismaMock.pet.create.mockRejectedValueOnce(new Error('Database connection error'));

      // Act & Assert
      await expect(promisify(petModel.createPet, petData))
        .rejects.toThrow('Database connection error');
    });

    it('should handle concurrent updates', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      await promisify(petModel.createPet, petData);

      // Act & Assert
      const updatePromises = [
        promisify(petModel.updatePet, petData.id, { name: 'Update 1' }),
        promisify(petModel.updatePet, petData.id, { name: 'Update 2' })
      ];

      await expect(Promise.all(updatePromises))
        .resolves.toBeDefined();
    });

    it('should handle invalid ID format', async () => {
      // Act & Assert
      await expect(petModel.getPetById('invalid-id-format'))
        .rejects.toThrow('Invalid ID format');
    });

    it('should handle missing required fields in update', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      await promisify(petModel.createPet, petData);

      // Act & Assert
      await expect(promisify(petModel.updatePet, petData.id, {}))
        .rejects.toThrow('No update data provided');
    });

    it('should handle invalid image URLs', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        images: ['invalid-url']
      });

      // Act & Assert
      await expect(promisify(petModel.createPet, petData))
        .rejects.toThrow('Invalid image URL format');
    });
  });
}); 