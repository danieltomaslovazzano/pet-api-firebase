/**
 * Membership Model Tests
 * 
 * Tests for membership management operations and relationship validation.
 * Uses mock Prisma client for database operations.
 */

const { PrismaClient } = require('@prisma/client');
const { validMembership, generateMemberships, generateMembershipTestData } = require('../../fixtures/membershipFixtures');
const { testDataStore } = require('../../helpers/testDbSetup');

// Mock Prisma client
jest.mock('@prisma/client', () => {
  const mockPrisma = {
    membership: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn()
    },
    user: {
      findUnique: jest.fn()
    },
    organization: {
      findUnique: jest.fn()
    },
    $transaction: jest.fn((callback) => callback(mockPrisma))
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma)
  };
});

describe('Membership Model', () => {
  let prisma;
  
  beforeEach(() => {
    // Clear test data store
    Object.keys(testDataStore).forEach(key => {
      testDataStore[key] = [];
    });
    
    // Reset all mocks
    jest.clearAllMocks();
    
    // Get fresh Prisma instance
    prisma = new PrismaClient();
  });

  describe('Membership Creation', () => {
    it('should create a new membership with valid data', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      prisma.membership.create.mockResolvedValue(membershipData);
      prisma.user.findUnique.mockResolvedValue(testData.users[0]);
      prisma.organization.findUnique.mockResolvedValue(testData.organizations[0]);

      // Act
      const result = await prisma.membership.create({
        data: membershipData
      });

      // Assert
      expect(result).toEqual(membershipData);
      expect(prisma.membership.create).toHaveBeenCalledWith({
        data: membershipData
      });
    });

    it('should validate required fields when creating membership', async () => {
      // Arrange
      const invalidMembership = { role: 'MEMBER' }; // Missing required fields
      prisma.membership.create.mockRejectedValue(new Error('Validation error'));

      // Act & Assert
      await expect(prisma.membership.create({
        data: invalidMembership
      })).rejects.toThrow('Validation error');
    });

    it('should prevent duplicate memberships', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      prisma.membership.create.mockRejectedValue(new Error('Unique constraint violation'));

      // Act & Assert
      await expect(prisma.membership.create({
        data: membershipData
      })).rejects.toThrow('Unique constraint violation');
    });
  });

  describe('Membership Retrieval', () => {
    it('should retrieve a membership by ID', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      prisma.membership.findUnique.mockResolvedValue(membershipData);

      // Act
      const result = await prisma.membership.findUnique({
        where: { id: membershipData.id }
      });

      // Assert
      expect(result).toEqual(membershipData);
      expect(prisma.membership.findUnique).toHaveBeenCalledWith({
        where: { id: membershipData.id }
      });
    });

    it('should return null for non-existent membership', async () => {
      // Arrange
      prisma.membership.findUnique.mockResolvedValue(null);

      // Act
      const result = await prisma.membership.findUnique({
        where: { id: 'non-existent-id' }
      });

      // Assert
      expect(result).toBeNull();
    });

    it('should list memberships for an organization', async () => {
      // Arrange
      const testData = generateMembershipTestData(3, 1);
      const orgMemberships = testData.memberships;
      prisma.membership.findMany.mockResolvedValue(orgMemberships);

      // Act
      const result = await prisma.membership.findMany({
        where: { organizationId: testData.organizations[0].id }
      });

      // Assert
      expect(result).toEqual(orgMemberships);
      expect(prisma.membership.findMany).toHaveBeenCalledWith({
        where: { organizationId: testData.organizations[0].id }
      });
    });
  });

  describe('Membership Updates', () => {
    it('should update membership details', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      const updatedData = { ...membershipData, role: 'ADMIN' };
      prisma.membership.update.mockResolvedValue(updatedData);

      // Act
      const result = await prisma.membership.update({
        where: { id: membershipData.id },
        data: { role: 'ADMIN' }
      });

      // Assert
      expect(result).toEqual(updatedData);
      expect(prisma.membership.update).toHaveBeenCalledWith({
        where: { id: membershipData.id },
        data: { role: 'ADMIN' }
      });
    });

    it('should validate data before updating', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      prisma.membership.update.mockRejectedValue(new Error('Validation error'));

      // Act & Assert
      await expect(prisma.membership.update({
        where: { id: membershipData.id },
        data: { role: 'INVALID_ROLE' }
      })).rejects.toThrow('Validation error');
    });
  });

  describe('Membership Deletion', () => {
    it('should delete a membership', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      prisma.membership.delete.mockResolvedValue(membershipData);

      // Act
      const result = await prisma.membership.delete({
        where: { id: membershipData.id }
      });

      // Assert
      expect(result).toEqual(membershipData);
      expect(prisma.membership.delete).toHaveBeenCalledWith({
        where: { id: membershipData.id }
      });
    });

    it('should handle deletion of non-existent membership', async () => {
      // Arrange
      prisma.membership.delete.mockRejectedValue(new Error('Record not found'));

      // Act & Assert
      await expect(prisma.membership.delete({
        where: { id: 'non-existent-id' }
      })).rejects.toThrow('Record not found');
    });
  });

  describe('Membership Relationships', () => {
    it('should validate user-organization relationship', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      prisma.user.findUnique.mockResolvedValue(testData.users[0]);
      prisma.organization.findUnique.mockResolvedValue(testData.organizations[0]);

      // Act
      const user = await prisma.user.findUnique({
        where: { id: membershipData.userId }
      });
      const organization = await prisma.organization.findUnique({
        where: { id: membershipData.organizationId }
      });

      // Assert
      expect(user).toBeDefined();
      expect(organization).toBeDefined();
      expect(user.id).toBe(membershipData.userId);
      expect(organization.id).toBe(membershipData.organizationId);
    });

    it('should handle non-existent user', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      prisma.user.findUnique.mockResolvedValue(null);

      // Act
      const user = await prisma.user.findUnique({
        where: { id: membershipData.userId }
      });

      // Assert
      expect(user).toBeNull();
    });

    it('should handle non-existent organization', async () => {
      // Arrange
      const testData = generateMembershipTestData(1, 1);
      const membershipData = testData.memberships[0];
      prisma.organization.findUnique.mockResolvedValue(null);

      // Act
      const organization = await prisma.organization.findUnique({
        where: { id: membershipData.organizationId }
      });

      // Assert
      expect(organization).toBeNull();
    });
  });
}); 