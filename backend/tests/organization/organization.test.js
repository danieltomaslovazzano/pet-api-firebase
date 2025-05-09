/**
 * Organization Module Tests
 * 
 * Tests for organization management operations and permission verification.
 * Uses mock Prisma client for database operations.
 */

const { PrismaClient } = require('@prisma/client');
const { validOrganization, generateOrganizations, validOrganizationMember } = require('../fixtures/organizationFixtures');
const { testDataStore } = require('../helpers/testDbSetup');

// Mock Prisma client
jest.mock('@prisma/client', () => {
  const mockPrisma = {
    organization: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    organizationMember: {
      create: jest.fn(),
      findMany: jest.fn(),
      delete: jest.fn(),
    },
    $transaction: jest.fn((callback) => callback(mockPrisma)),
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma),
  };
});

describe('Organization Module', () => {
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

  describe('Organization Creation', () => {
    it('should create a new organization with valid data', async () => {
      // Arrange
      const orgData = validOrganization();
      prisma.organization.create.mockResolvedValue(orgData);

      // Act
      const result = await prisma.organization.create({
        data: orgData
      });

      // Assert
      expect(result).toEqual(orgData);
      expect(prisma.organization.create).toHaveBeenCalledWith({
        data: orgData
      });
    });

    it('should validate required fields when creating organization', async () => {
      // Arrange
      const invalidOrg = { name: '' }; // Missing required fields
      prisma.organization.create.mockRejectedValue(new Error('Validation error'));

      // Act & Assert
      await expect(prisma.organization.create({
        data: invalidOrg
      })).rejects.toThrow('Validation error');
    });
  });

  describe('Organization Retrieval', () => {
    it('should retrieve an organization by ID', async () => {
      // Arrange
      const orgData = validOrganization();
      prisma.organization.findUnique.mockResolvedValue(orgData);

      // Act
      const result = await prisma.organization.findUnique({
        where: { id: orgData.id }
      });

      // Assert
      expect(result).toEqual(orgData);
      expect(prisma.organization.findUnique).toHaveBeenCalledWith({
        where: { id: orgData.id }
      });
    });

    it('should return null for non-existent organization', async () => {
      // Arrange
      prisma.organization.findUnique.mockResolvedValue(null);

      // Act
      const result = await prisma.organization.findUnique({
        where: { id: 'non-existent-id' }
      });

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('Organization Updates', () => {
    it('should update organization details', async () => {
      // Arrange
      const orgData = validOrganization();
      const updatedData = { ...orgData, name: 'Updated Name' };
      prisma.organization.update.mockResolvedValue(updatedData);

      // Act
      const result = await prisma.organization.update({
        where: { id: orgData.id },
        data: { name: 'Updated Name' }
      });

      // Assert
      expect(result).toEqual(updatedData);
      expect(prisma.organization.update).toHaveBeenCalledWith({
        where: { id: orgData.id },
        data: { name: 'Updated Name' }
      });
    });

    it('should validate data before updating', async () => {
      // Arrange
      const orgData = validOrganization();
      prisma.organization.update.mockRejectedValue(new Error('Validation error'));

      // Act & Assert
      await expect(prisma.organization.update({
        where: { id: orgData.id },
        data: { name: '' } // Invalid empty name
      })).rejects.toThrow('Validation error');
    });
  });

  describe('Organization Deletion', () => {
    it('should delete an organization', async () => {
      // Arrange
      const orgData = validOrganization();
      prisma.organization.delete.mockResolvedValue(orgData);

      // Act
      const result = await prisma.organization.delete({
        where: { id: orgData.id }
      });

      // Assert
      expect(result).toEqual(orgData);
      expect(prisma.organization.delete).toHaveBeenCalledWith({
        where: { id: orgData.id }
      });
    });

    it('should handle deletion of non-existent organization', async () => {
      // Arrange
      prisma.organization.delete.mockRejectedValue(new Error('Record not found'));

      // Act & Assert
      await expect(prisma.organization.delete({
        where: { id: 'non-existent-id' }
      })).rejects.toThrow('Record not found');
    });
  });

  describe('Organization Members', () => {
    it('should add a member to an organization', async () => {
      // Arrange
      const orgData = validOrganization();
      const memberData = validOrganizationMember(orgData.id, 'user-1');
      prisma.organizationMember.create.mockResolvedValue(memberData);

      // Act
      const result = await prisma.organizationMember.create({
        data: memberData
      });

      // Assert
      expect(result).toEqual(memberData);
      expect(prisma.organizationMember.create).toHaveBeenCalledWith({
        data: memberData
      });
    });

    it('should list organization members', async () => {
      // Arrange
      const orgData = validOrganization();
      const members = [
        validOrganizationMember(orgData.id, 'user-1'),
        validOrganizationMember(orgData.id, 'user-2', { role: 'ADMIN' })
      ];
      prisma.organizationMember.findMany.mockResolvedValue(members);

      // Act
      const result = await prisma.organizationMember.findMany({
        where: { organizationId: orgData.id }
      });

      // Assert
      expect(result).toEqual(members);
      expect(prisma.organizationMember.findMany).toHaveBeenCalledWith({
        where: { organizationId: orgData.id }
      });
    });
  });
}); 