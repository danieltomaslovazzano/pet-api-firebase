/**
 * Membership Model Tests - Prisma Implementation
 * 
 * This test suite focuses on the Prisma implementation of the Membership model.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

// Import helpers and mock Firebase first
require('../../config/mockFirebase');

const { membershipModel } = require('../../../models/adapter');
const { validMembership, generateMemberships, generateMembershipTestData } = require('../../fixtures/membershipFixtures');
const { validUser } = require('../../fixtures/userFixtures');
const { validOrganization } = require('../../fixtures/organizationFixtures');
const { cleanupPostgresDb, testDataStore } = require('../../helpers/testDbSetup');

// Clean the test data store before tests
beforeEach(async () => {
  testDataStore.users = [];
  testDataStore.organizations = [];
  testDataStore.memberships = [];
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

describe('Membership Model - Prisma Implementation', () => {
  describe('Basic CRUD Operations', () => {
    it('should create a new membership', async () => {
      // Arrange
      const userData = validUser();
      const orgData = validOrganization();
      testDataStore.users.push(userData);
      testDataStore.organizations.push(orgData);
      
      const membershipData = validMembership(userData.id, orgData.id);
      
      // Act
      const newMembership = await promisify(membershipModel.createMembership, membershipData);
      
      // Assert
      expect(newMembership).toBeDefined();
      expect(newMembership.id).toBe(membershipData.id);
      expect(newMembership.userId).toBe(userData.id);
      expect(newMembership.organizationId).toBe(orgData.id);
      expect(newMembership.role).toBe('member');
      expect(newMembership.status).toBe('active');
    });

    it('should retrieve a membership by ID', async () => {
      // Arrange
      const userData = validUser();
      const orgData = validOrganization();
      testDataStore.users.push(userData);
      testDataStore.organizations.push(orgData);
      
      const membershipData = validMembership(userData.id, orgData.id);
      await promisify(membershipModel.createMembership, membershipData);
      
      // Act
      const retrievedMembership = await membershipModel.getMembershipById(membershipData.id);
      
      // Assert
      expect(retrievedMembership).toBeDefined();
      expect(retrievedMembership.id).toBe(membershipData.id);
      expect(retrievedMembership.userId).toBe(userData.id);
      expect(retrievedMembership.organizationId).toBe(orgData.id);
    });

    it('should update a membership', async () => {
      // Arrange
      const userData = validUser();
      const orgData = validOrganization();
      testDataStore.users.push(userData);
      testDataStore.organizations.push(orgData);
      
      const membershipData = validMembership(userData.id, orgData.id);
      await promisify(membershipModel.createMembership, membershipData);
      
      const updateData = { role: 'admin', status: 'inactive' };
      
      // Act
      const updatedMembership = await promisify(membershipModel.updateMembership, membershipData.id, updateData);
      
      // Assert
      expect(updatedMembership).toBeDefined();
      expect(updatedMembership.id).toBe(membershipData.id);
      expect(updatedMembership.role).toBe('admin');
      expect(updatedMembership.status).toBe('inactive');
    });

    it('should delete a membership', async () => {
      // Arrange
      const userData = validUser();
      const orgData = validOrganization();
      testDataStore.users.push(userData);
      testDataStore.organizations.push(orgData);
      
      const membershipData = validMembership(userData.id, orgData.id);
      await promisify(membershipModel.createMembership, membershipData);
      
      // Act
      const result = await promisify(membershipModel.deleteMembership, membershipData.id);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('deleted successfully');
      
      // Verify membership is deleted
      const deletedMembership = await membershipModel.getMembershipById(membershipData.id);
      expect(deletedMembership).toBeNull();
    });
  });

  describe('Role Management', () => {
    it('should validate role changes', async () => {
      // Arrange
      const userData = validUser();
      const orgData = validOrganization();
      testDataStore.users.push(userData);
      testDataStore.organizations.push(orgData);
      
      const membershipData = validMembership(userData.id, orgData.id);
      await promisify(membershipModel.createMembership, membershipData);
      
      // Act & Assert
      await expect(promisify(membershipModel.updateMembership, membershipData.id, { role: 'invalid-role' }))
        .rejects.toThrow('Invalid role');
    });

    it('should prevent removing the last admin', async () => {
      // Arrange
      const userData = validUser();
      const orgData = validOrganization();
      testDataStore.users.push(userData);
      testDataStore.organizations.push(orgData);
      
      const membershipData = validMembership(userData.id, orgData.id, 'admin');
      await promisify(membershipModel.createMembership, membershipData);
      
      // Act & Assert
      await expect(promisify(membershipModel.deleteMembership, membershipData.id))
        .rejects.toThrow('Cannot remove last admin');
    });
  });

  describe('Organization Association', () => {
    it('should get all memberships for an organization', async () => {
      // Arrange
      const { users, organizations, memberships } = generateMembershipTestData(5, 1);
      testDataStore.users.push(...users);
      testDataStore.organizations.push(...organizations);
      
      for (const membership of memberships) {
        await promisify(membershipModel.createMembership, membership);
      }
      
      // Act
      const orgMemberships = await promisify(membershipModel.getOrganizationMemberships, organizations[0].id);
      
      // Assert
      expect(orgMemberships).toBeDefined();
      expect(Array.isArray(orgMemberships)).toBe(true);
      expect(orgMemberships.length).toBeGreaterThan(0);
      orgMemberships.forEach(membership => {
        expect(membership.organizationId).toBe(organizations[0].id);
      });
    });

    it('should get memberships with pagination', async () => {
      // Arrange
      const { users, organizations, memberships } = generateMembershipTestData(10, 1);
      testDataStore.users.push(...users);
      testDataStore.organizations.push(...organizations);
      
      for (const membership of memberships) {
        await promisify(membershipModel.createMembership, membership);
      }
      
      // Act
      const firstPage = await promisify(membershipModel.getOrganizationMemberships, organizations[0].id, { limit: 5, offset: 0 });
      const secondPage = await promisify(membershipModel.getOrganizationMemberships, organizations[0].id, { limit: 5, offset: 5 });
      
      // Assert
      expect(firstPage.length).toBe(5);
      expect(secondPage.length).toBe(5);
      expect(firstPage[0].id).not.toBe(secondPage[0].id);
    });
  });

  describe('User Association', () => {
    it('should get all memberships for a user', async () => {
      // Arrange
      const { users, organizations, memberships } = generateMembershipTestData(1, 3);
      testDataStore.users.push(...users);
      testDataStore.organizations.push(...organizations);
      
      for (const membership of memberships) {
        await promisify(membershipModel.createMembership, membership);
      }
      
      // Act
      const userMemberships = await promisify(membershipModel.getUserMemberships, users[0].id);
      
      // Assert
      expect(userMemberships).toBeDefined();
      expect(Array.isArray(userMemberships)).toBe(true);
      expect(userMemberships.length).toBeGreaterThan(0);
      userMemberships.forEach(membership => {
        expect(membership.userId).toBe(users[0].id);
      });
    });

    it('should filter user memberships by status', async () => {
      // Arrange
      const { users, organizations, memberships } = generateMembershipTestData(1, 3);
      testDataStore.users.push(...users);
      testDataStore.organizations.push(...organizations);
      
      for (const membership of memberships) {
        await promisify(membershipModel.createMembership, membership);
      }
      
      // Act
      const activeMemberships = await promisify(membershipModel.getUserMemberships, users[0].id, { status: 'active' });
      
      // Assert
      expect(activeMemberships).toBeDefined();
      expect(Array.isArray(activeMemberships)).toBe(true);
      activeMemberships.forEach(membership => {
        expect(membership.status).toBe('active');
      });
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle invalid membership data', async () => {
      // Arrange
      const invalidMembership = {
        id: 'invalid-id',
        userId: 'non-existent-user',
        organizationId: 'non-existent-org',
        role: 'invalid-role'
      };
      
      // Act & Assert
      await expect(promisify(membershipModel.createMembership, invalidMembership))
        .rejects.toThrow('Invalid membership data');
    });

    it('should handle concurrent updates', async () => {
      // Arrange
      const userData = validUser();
      const orgData = validOrganization();
      testDataStore.users.push(userData);
      testDataStore.organizations.push(orgData);
      
      const membershipData = validMembership(userData.id, orgData.id);
      await promisify(membershipModel.createMembership, membershipData);
      
      // Act
      const update1 = promisify(membershipModel.updateMembership, membershipData.id, { role: 'admin' });
      const update2 = promisify(membershipModel.updateMembership, membershipData.id, { role: 'moderator' });
      
      // Assert
      await expect(Promise.all([update1, update2]))
        .rejects.toThrow('Concurrent update detected');
    });

    it('should handle non-existent membership', async () => {
      // Arrange
      const nonExistentId = 'non-existent-id';
      
      // Act & Assert
      await expect(promisify(membershipModel.getMembershipById, nonExistentId))
        .resolves.toBeNull();
    });
  });
}); 