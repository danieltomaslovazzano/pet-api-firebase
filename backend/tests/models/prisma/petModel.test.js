/**
 * Pet Model Tests - Prisma Implementation
 * 
 * This test suite focuses on the Prisma implementation of the Pet model.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

// Import test setup and mocks
const { prismaMock } = require('../../setup/jest.setup');
const petModel = require('../../../models/prisma/petModel');
const { testDataGenerator } = require('../../setup/testDataGenerator');

describe('Pet Model - Prisma Implementation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createPet', () => {
    it('should create a new pet successfully', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      prismaMock.pet.create.mockResolvedValue(petData);

      // Act
      const result = await new Promise((resolve, reject) => {
        petModel.createPet(petData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      });

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
      prismaMock.pet.create.mockRejectedValue(new Error('Pet with this ID already exists'));

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.createPet(petData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Pet with this ID already exists');
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
      await expect(new Promise((resolve, reject) => {
        petModel.createPet(invalidPetData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Name is required');
    });

    it('should validate species values', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        species: 'invalid-species'
      });

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.createPet(petData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Invalid species value');
    });

    it('should validate status values', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        status: 'invalid-status'
      });

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.createPet(petData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Invalid status value');
    });

    it('should validate age values', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        age: -1
      });

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.createPet(petData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Age must be a positive number');
    });
  });

  describe('getPetById', () => {
    it('should retrieve a pet by ID', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      prismaMock.pet.findUnique.mockResolvedValue(petData);

      // Act
      const result = await new Promise((resolve, reject) => {
        petModel.getPetById(petData.id, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      });

      // Assert
      expect(result).toBeDefined();
      expect(result.id).toBe(petData.id);
      expect(result.name).toBe(petData.name);
    });

    it('should return null for non-existent pet ID', async () => {
      // Arrange
      prismaMock.pet.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.getPetById('non-existent-id', (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Pet not found');
    });
  });

  describe('updatePet', () => {
    it('should update pet information', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      const updateData = {
        name: 'Updated Name',
        age: 3
      };
      prismaMock.pet.findUnique.mockResolvedValue(petData);
      prismaMock.pet.update.mockResolvedValue({ ...petData, ...updateData });

      // Act
      const result = await new Promise((resolve, reject) => {
        petModel.updatePet(petData.id, updateData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      });

      // Assert
      expect(result).toBeDefined();
      expect(result.name).toBe(updateData.name);
      expect(result.age).toBe(updateData.age);
    });

    it('should handle errors when updating non-existent pet', async () => {
      // Arrange
      prismaMock.pet.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.updatePet('non-existent-id', { name: 'New Name' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Pet not found');
    });

    // Validation Rules
    it('should validate species values on update', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      prismaMock.pet.findUnique.mockResolvedValue(petData);

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.updatePet(petData.id, { species: 'invalid-species' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Invalid species value');
    });

    it('should validate status values on update', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      prismaMock.pet.findUnique.mockResolvedValue(petData);

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.updatePet(petData.id, { status: 'invalid-status' }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Invalid status value');
    });

    it('should validate age values on update', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      prismaMock.pet.findUnique.mockResolvedValue(petData);

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.updatePet(petData.id, { age: -1 }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Age must be a positive number');
    });
  });

  describe('deletePet', () => {
    it('should delete a pet successfully', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      prismaMock.pet.findUnique.mockResolvedValue(petData);
      prismaMock.pet.delete.mockResolvedValue(petData);

      // Act
      const result = await new Promise((resolve, reject) => {
        petModel.deletePet(petData.id, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      });

      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('deleted successfully');
    });

    it('should handle errors when deleting non-existent pet', async () => {
      // Arrange
      prismaMock.pet.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.deletePet('non-existent-id', (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Pet not found');
    });
  });

  // Relationship Tests
  describe('Pet Relationships', () => {
    it('should handle owner relationship', async () => {
      // Arrange
      const { user, pets } = testDataGenerator.generateUserWithPets(1);
      const pet = pets[0];
      prismaMock.pet.findUnique.mockResolvedValue({
        ...pet,
        owner: user
      });

      // Act
      const result = await new Promise((resolve, reject) => {
        petModel.getPetWithOwner(pet.id, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      });

      // Assert
      expect(result).toBeDefined();
      expect(result.owner).toBeDefined();
      expect(result.owner.id).toBe(user.id);
    });

    it('should handle image attachments', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        images: ['image1.jpg', 'image2.jpg']
      });
      prismaMock.pet.findUnique.mockResolvedValue(petData);

      // Act
      const result = await new Promise((resolve, reject) => {
        petModel.getPetById(petData.id, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      });

      // Assert
      expect(result).toBeDefined();
      expect(result.images).toHaveLength(2);
      expect(result.images).toContain('image1.jpg');
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
      prismaMock.pet.findUnique.mockResolvedValue(petData);

      // Act
      const result = await new Promise((resolve, reject) => {
        petModel.getPetById(petData.id, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      });

      // Assert
      expect(result).toBeDefined();
      expect(result.location).toBeDefined();
      expect(result.location.latitude).toBe(locationData.latitude);
      expect(result.location.longitude).toBe(locationData.longitude);
    });
  });

  // Error Cases
  describe('Error Cases', () => {
    it('should handle database connection errors', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      prismaMock.pet.create.mockRejectedValue(new Error('Database connection error'));

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.createPet(petData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Database connection error');
    });

    it('should handle concurrent updates', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      const updateData = { name: 'Updated Name' };
      prismaMock.pet.findUnique.mockResolvedValue(petData);
      prismaMock.pet.update.mockResolvedValue({ ...petData, ...updateData });

      // Act & Assert
      const updatePromises = [
        new Promise((resolve, reject) => {
          petModel.updatePet(petData.id, { name: 'Update 1' }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          });
        }),
        new Promise((resolve, reject) => {
          petModel.updatePet(petData.id, { name: 'Update 2' }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          });
        })
      ];

      await expect(Promise.all(updatePromises)).resolves.toBeDefined();
    });

    it('should handle invalid ID format', async () => {
      // Arrange
      prismaMock.pet.findUnique.mockRejectedValue(new Error('Invalid ID format'));

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.getPetById('invalid-id-format', (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Invalid ID format');
    });

    it('should handle missing required fields in update', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet();
      prismaMock.pet.findUnique.mockResolvedValue(petData);
      prismaMock.pet.update.mockRejectedValue(new Error('Missing required fields'));

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.updatePet(petData.id, {}, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Missing required fields');
    });

    it('should handle invalid image URLs', async () => {
      // Arrange
      const petData = testDataGenerator.generatePet({
        images: ['invalid-url']
      });

      // Act & Assert
      await expect(new Promise((resolve, reject) => {
        petModel.createPet(petData, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      })).rejects.toThrow('Invalid image URL format');
    });
  });
}); 