/**
 * User Model Tests - Prisma Implementation
 * 
 * This test suite focuses on the Prisma implementation of the User model.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

// Import test setup and mocks
const { prismaMock } = require('../../setup/jest.setup');
const userModel = require('../../../models/prisma/userModel');
const { testDataGenerator } = require('../../setup/testDataGenerator');

describe('User Model - Prisma Implementation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    it('should create a new user successfully', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser();
      prismaMock.user.findUnique.mockResolvedValue(null);
      prismaMock.user.create.mockResolvedValue(userData);

      // Act
      const result = await userModel.createUser(userData);

      // Assert
      expect(result).toBeDefined();
      expect(result.id).toBe(userData.id);
      expect(result.email).toBe(userData.email);
      expect(result.name).toBe(userData.name);
      expect(result.role).toBe(userData.role);
      expect(result.status).toBe(userData.status);
    });

    it('should handle errors when creating a user with duplicate email', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser();
      prismaMock.user.findUnique.mockResolvedValue(userData);

      // Act & Assert
      await expect(userModel.createUser(userData))
        .rejects.toThrow('User with this email already exists');
    });

    // Validation Rules
    it('should validate required fields', async () => {
      // Arrange
      const invalidUserData = {
        id: testDataGenerator.generateId(),
        // Missing required email
        name: 'Test User'
      };

      // Act & Assert
      await expect(userModel.createUser(invalidUserData))
        .rejects.toThrow('Email is required');
    });

    it('should validate email format', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser({
        email: 'invalid-email'
      });

      // Act & Assert
      await expect(userModel.createUser(userData))
        .rejects.toThrow('Invalid email format');
    });

    it('should validate role values', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser({
        role: 'invalid-role'
      });

      // Act & Assert
      await expect(userModel.createUser(userData))
        .rejects.toThrow('Invalid role value');
    });

    it('should validate status values', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser({
        status: 'invalid-status'
      });

      // Act & Assert
      await expect(userModel.createUser(userData))
        .rejects.toThrow('Invalid status value');
    });
  });

  describe('getUserById', () => {
    it('should retrieve a user by ID', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser();
      prismaMock.user.findUnique.mockResolvedValue(userData);

      // Act
      const result = await userModel.getUserById(userData.id);

      // Assert
      expect(result).toBeDefined();
      expect(result.id).toBe(userData.id);
      expect(result.email).toBe(userData.email);
    });

    it('should return null for non-existent user ID', async () => {
      // Arrange
      prismaMock.user.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(userModel.getUserById('non-existent-id'))
        .rejects.toThrow('User not found');
    });
  });

  describe('updateUser', () => {
    it('should update user information', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser();
      const updateData = {
        name: 'Updated Name',
        phone: '1234567890'
      };
      prismaMock.user.findUnique.mockResolvedValue(userData);
      prismaMock.user.update.mockResolvedValue({ ...userData, ...updateData });

      // Act
      const result = await userModel.updateUser(userData.id, updateData);

      // Assert
      expect(result).toBeDefined();
      expect(result.name).toBe(updateData.name);
      expect(result.phone).toBe(updateData.phone);
    });

    it('should handle errors when updating non-existent user', async () => {
      // Arrange
      prismaMock.user.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(userModel.updateUser('non-existent-id', { name: 'New Name' }))
        .rejects.toThrow('User not found');
    });
  });

  describe('deleteUser', () => {
    it('should delete a user successfully', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser();
      prismaMock.user.findUnique.mockResolvedValue(userData);
      prismaMock.$transaction.mockResolvedValue([
        { count: 0 }, // pets deleted
        { count: 0 }, // memberships deleted
        { count: 0 }, // messages deleted
        userData // user deleted
      ]);

      // Act
      const result = await userModel.deleteUser(userData.id);

      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('deleted successfully');
    });

    it('should handle errors when deleting non-existent user', async () => {
      // Arrange
      prismaMock.user.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(userModel.deleteUser('non-existent-id'))
        .rejects.toThrow('User not found');
    });
  });

  // Relationship Tests
  describe('User Relationships', () => {
    it('should handle pet relationships', async () => {
      // Arrange
      const { user, pets } = testDataGenerator.generateUserWithPets(2);
      prismaMock.user.findUnique.mockResolvedValue({
        ...user,
        pets
      });

      // Act
      const result = await userModel.getUserWithPets(user.id);

      // Assert
      expect(result).toBeDefined();
      expect(result.pets).toHaveLength(2);
      expect(result.pets[0].ownerId).toBe(user.id);
    });

    it('should handle organization memberships', async () => {
      // Arrange
      const { organization, members } = testDataGenerator.generateOrganizationWithMembers(1);
      const user = members[0].user;
      prismaMock.user.findUnique.mockResolvedValue({
        ...user,
        memberships: [{
          ...members[0],
          organization
        }]
      });

      // Act
      const result = await userModel.getUserWithMemberships(user.id);

      // Assert
      expect(result).toBeDefined();
      expect(result.memberships).toHaveLength(1);
      expect(result.memberships[0].organizationId).toBe(organization.id);
    });

    it('should handle blocked users', async () => {
      // Arrange
      const user = testDataGenerator.generateUser();
      const blockedUser = testDataGenerator.generateUser();
      prismaMock.user.findUnique.mockResolvedValue({
        ...user,
        blockedUsers: [blockedUser.id]
      });

      // Act
      const result = await userModel.getUserWithBlockedUsers(user.id);

      // Assert
      expect(result).toBeDefined();
      expect(result.blockedUsers).toContain(blockedUser.id);
    });

    it('should handle conversations', async () => {
      // Arrange
      const { conversation, messages } = testDataGenerator.generateConversationWithMessages(3);
      const user = testDataGenerator.generateUser();
      prismaMock.user.findUnique.mockResolvedValue({
        ...user,
        conversations: {
          ...conversation,
          messages
        }
      });

      // Act
      const result = await userModel.getUserWithConversations(user.id);

      // Assert
      expect(result).toBeDefined();
      expect(result.conversations).toBeDefined();
    });
  });

  // Error Cases
  describe('Error Cases', () => {
    it('should handle database connection errors', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser();
      prismaMock.user.findUnique.mockRejectedValue(new Error('Database connection error'));

      // Act & Assert
      await expect(userModel.createUser(userData))
        .rejects.toThrow('Database connection error');
    });

    it('should handle concurrent updates', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser();
      const updateData = { name: 'Updated Name' };
      prismaMock.user.findUnique.mockResolvedValue(userData);
      prismaMock.user.update.mockResolvedValue({ ...userData, ...updateData });

      // Act & Assert
      const updatePromises = [
        userModel.updateUser(userData.id, { name: 'Update 1' }),
        userModel.updateUser(userData.id, { name: 'Update 2' })
      ];

      await expect(Promise.all(updatePromises)).resolves.toBeDefined();
    });

    it('should handle invalid ID format', async () => {
      // Arrange
      prismaMock.user.findUnique.mockRejectedValue(new Error('Invalid ID format'));

      // Act & Assert
      await expect(userModel.getUserById('invalid-id-format'))
        .rejects.toThrow('Invalid ID format');
    });

    it('should handle missing required fields in update', async () => {
      // Arrange
      const userData = testDataGenerator.generateUser();
      prismaMock.user.findUnique.mockResolvedValue(userData);
      prismaMock.user.update.mockRejectedValue(new Error('Missing required fields'));

      // Act & Assert
      await expect(userModel.updateUser(userData.id, {}))
        .rejects.toThrow('Missing required fields');
    });
  });
}); 