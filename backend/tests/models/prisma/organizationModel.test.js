/**
 * Organization Model Tests - Prisma Implementation
 * 
 * This test suite focuses on the Prisma implementation of the Organization model.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

// Import helpers and mock Firebase first
require('../../config/mockFirebase');

const { organizationModel } = require('../../../models/adapter');
const { validOrganization, generateOrganizations } = require('../../fixtures/organizationFixtures');
const { validUser } = require('../../fixtures/userFixtures');
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

describe('Organization Model - Prisma Implementation', () => {
  describe('createOrganization', () => {
    it('should create a new organization successfully', async () => {
      // Arrange
      const orgData = validOrganization();
      
      // Act
      const newOrg = await promisify(organizationModel.createOrganization, orgData);
      
      // Assert
      expect(newOrg).toBeDefined();
      expect(newOrg.id).toBe(orgData.id);
      expect(newOrg.name).toBe(orgData.name);
      expect(newOrg.status).toBe(orgData.status);
    });
    
    it('should handle errors when creating an organization with duplicate name', async () => {
      // Arrange
      const orgData = validOrganization();
      
      // Act
      await promisify(organizationModel.createOrganization, orgData);
      
      // Mock duplicate name error
      testDataStore.organizations.push({...orgData, id: 'different-id'});
      
      // Assert
      await expect(promisify(organizationModel.createOrganization, orgData))
        .rejects.toThrow();
    });
  });
  
  describe('getOrganizationById', () => {
    it('should retrieve an organization by ID', async () => {
      // Arrange
      const orgData = validOrganization();
      const createdOrg = await promisify(organizationModel.createOrganization, orgData);
      
      // Act
      const retrievedOrg = await organizationModel.getOrganizationById(orgData.id);
      
      // Assert
      expect(retrievedOrg).toBeDefined();
      expect(retrievedOrg.id).toBe(orgData.id);
      expect(retrievedOrg.name).toBe(orgData.name);
    });
    
    it('should return null for non-existent organization ID', async () => {
      // Arrange
      const nonExistentId = 'non-existent-id';
      
      // Act
      const result = await organizationModel.getOrganizationById(nonExistentId);
      
      // Assert
      expect(result).toBeNull();
    });
  });
  
  describe('updateOrganization', () => {
    it('should update organization information', async () => {
      // Arrange
      const orgData = validOrganization();
      await promisify(organizationModel.createOrganization, orgData);
      const updateData = { name: 'Updated Name', description: 'New description' };
      
      // Act
      const updatedOrg = await promisify(organizationModel.updateOrganization, orgData.id, updateData);
      
      // Assert
      expect(updatedOrg).toBeDefined();
      expect(updatedOrg.id).toBe(orgData.id);
      expect(updatedOrg.name).toBe(updateData.name);
      expect(updatedOrg.description).toBe(updateData.description);
    });
    
    it('should handle errors when updating non-existent organization', async () => {
      // Arrange
      const nonExistentId = 'non-existent-id';
      const updateData = { name: 'Updated Name' };
      
      // Act & Assert
      await expect(promisify(organizationModel.updateOrganization, nonExistentId, updateData))
        .rejects.toThrow();
    });
  });
  
  describe('deleteOrganization', () => {
    it('should delete an organization successfully', async () => {
      // Arrange
      const orgData = validOrganization();
      await promisify(organizationModel.createOrganization, orgData);
      
      // Act
      const result = await promisify(organizationModel.deleteOrganization, orgData.id);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('deleted successfully');
      
      // Verify organization is deleted
      const deletedOrg = await organizationModel.getOrganizationById(orgData.id);
      expect(deletedOrg).toBeNull();
    });
    
    it('should handle errors when deleting non-existent organization', async () => {
      // Arrange
      const nonExistentId = 'non-existent-id';
      
      // Act & Assert
      await expect(promisify(organizationModel.deleteOrganization, nonExistentId))
        .rejects.toThrow();
    });
  });
  
  describe('getOrganizations', () => {
    beforeEach(async () => {
      // Create test organizations with various statuses
      const orgs = generateOrganizations(5);
      for (const org of orgs) {
        await promisify(organizationModel.createOrganization, org);
      }
    });
    
    it('should retrieve all organizations without filters', async () => {
      // Act
      const orgs = await promisify(organizationModel.getOrganizations, {});
      
      // Assert
      expect(orgs).toBeDefined();
      expect(Array.isArray(orgs)).toBe(true);
      expect(orgs.length).toBe(5);
    });
    
    it('should filter organizations by status', async () => {
      // Act
      const activeOrgs = await promisify(organizationModel.getOrganizations, { status: 'active' });
      
      // Assert
      expect(activeOrgs).toBeDefined();
      expect(Array.isArray(activeOrgs)).toBe(true);
      expect(activeOrgs.length).toBeGreaterThan(0);
      activeOrgs.forEach(org => {
        expect(org.status).toBe('active');
      });
    });
    
    it('should search organizations by search term', async () => {
      // Arrange
      const searchOrg = validOrganization({ name: 'SearchableOrg', email: 'findme@example.com' });
      await promisify(organizationModel.createOrganization, searchOrg);
      
      // Act
      const searchResults = await promisify(organizationModel.getOrganizations, { searchTerm: 'findme' });
      
      // Assert
      expect(searchResults).toBeDefined();
      expect(Array.isArray(searchResults)).toBe(true);
      expect(searchResults.length).toBeGreaterThan(0);
      expect(searchResults.some(org => org.email === 'findme@example.com')).toBe(true);
    });
  });
  
  describe('Member Management', () => {
    it('should add a member to an organization', async () => {
      // Arrange
      const orgData = validOrganization();
      const userData = validUser();
      const org = await promisify(organizationModel.createOrganization, orgData);
      testDataStore.users.push(userData);
      
      // Act
      const result = await promisify(organizationModel.addMember, org.id, userData.id, 'member');
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('added successfully');
      
      // Verify membership
      const members = await promisify(organizationModel.getMembers, org.id);
      expect(members.some(m => m.userId === userData.id)).toBe(true);
    });
    
    it('should remove a member from an organization', async () => {
      // Arrange
      const orgData = validOrganization();
      const userData = validUser();
      const org = await promisify(organizationModel.createOrganization, orgData);
      testDataStore.users.push(userData);
      await promisify(organizationModel.addMember, org.id, userData.id, 'member');
      
      // Act
      const result = await promisify(organizationModel.removeMember, org.id, userData.id);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('removed successfully');
      
      // Verify membership is removed
      const members = await promisify(organizationModel.getMembers, org.id);
      expect(members.some(m => m.userId === userData.id)).toBe(false);
    });

    it('should not allow adding the same member twice', async () => {
      // Arrange
      const orgData = validOrganization();
      const userData = validUser();
      const org = await promisify(organizationModel.createOrganization, orgData);
      testDataStore.users.push(userData);
      await promisify(organizationModel.addMember, org.id, userData.id, 'member');
      
      // Act & Assert
      await expect(promisify(organizationModel.addMember, org.id, userData.id, 'member'))
        .rejects.toThrow('Member already exists');
    });

    it('should handle removing non-existent member gracefully', async () => {
      // Arrange
      const orgData = validOrganization();
      const userData = validUser();
      const org = await promisify(organizationModel.createOrganization, orgData);
      testDataStore.users.push(userData);
      
      // Act & Assert
      await expect(promisify(organizationModel.removeMember, org.id, userData.id))
        .rejects.toThrow('Member not found');
    });

    it('should get members with pagination', async () => {
      // Arrange
      const orgData = validOrganization();
      const org = await promisify(organizationModel.createOrganization, orgData);
      const users = Array(10).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      // Add 10 members
      for (const user of users) {
        await promisify(organizationModel.addMember, org.id, user.id, 'member');
      }
      
      // Act
      const firstPage = await promisify(organizationModel.getMembers, org.id, { limit: 5, offset: 0 });
      const secondPage = await promisify(organizationModel.getMembers, org.id, { limit: 5, offset: 5 });
      
      // Assert
      expect(firstPage.length).toBe(5);
      expect(secondPage.length).toBe(5);
      expect(firstPage[0].id).not.toBe(secondPage[0].id);
    });
  });
  
  describe('Role Management', () => {
    it('should update a member\'s role', async () => {
      // Arrange
      const orgData = validOrganization();
      const userData = validUser();
      const org = await promisify(organizationModel.createOrganization, orgData);
      testDataStore.users.push(userData);
      await promisify(organizationModel.addMember, org.id, userData.id, 'member');
      
      // Act
      const result = await promisify(organizationModel.updateMemberRole, org.id, userData.id, 'admin');
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('role updated');
      
      // Verify role update
      const members = await promisify(organizationModel.getMembers, org.id);
      const updatedMember = members.find(m => m.userId === userData.id);
      expect(updatedMember.role).toBe('admin');
    });

    it('should validate role changes', async () => {
      // Arrange
      const orgData = validOrganization();
      const userData = validUser();
      const org = await promisify(organizationModel.createOrganization, orgData);
      testDataStore.users.push(userData);
      await promisify(organizationModel.addMember, org.id, userData.id, 'member');
      
      // Act & Assert
      await expect(promisify(organizationModel.updateMemberRole, org.id, userData.id, 'invalid-role'))
        .rejects.toThrow('Invalid role');
    });

    it('should prevent removing the last admin', async () => {
      // Arrange
      const orgData = validOrganization();
      const userData = validUser();
      const org = await promisify(organizationModel.createOrganization, orgData);
      testDataStore.users.push(userData);
      await promisify(organizationModel.addMember, org.id, userData.id, 'admin');
      
      // Act & Assert
      await expect(promisify(organizationModel.removeMember, org.id, userData.id))
        .rejects.toThrow('Cannot remove last admin');
    });
  });

  describe('Search and Filtering', () => {
    beforeEach(async () => {
      // Create test organizations with various attributes
      const orgs = [
        validOrganization({ name: 'Alpha Corp', status: 'active', email: 'alpha@test.com' }),
        validOrganization({ name: 'Beta Inc', status: 'inactive', email: 'beta@test.com' }),
        validOrganization({ name: 'Gamma LLC', status: 'active', email: 'gamma@test.com' }),
        validOrganization({ name: 'Delta Co', status: 'active', email: 'delta@test.com' })
      ];
      
      for (const org of orgs) {
        await promisify(organizationModel.createOrganization, org);
      }
    });

    it('should search organizations by multiple criteria', async () => {
      // Act
      const results = await promisify(organizationModel.getOrganizations, {
        searchTerm: 'alpha',
        status: 'active'
      });
      
      // Assert
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Alpha Corp');
    });

    it('should filter organizations by date range', async () => {
      // Arrange
      const startDate = new Date(Date.now() - 86400000); // 24 hours ago
      const endDate = new Date();
      
      // Act
      const results = await promisify(organizationModel.getOrganizations, {
        startDate,
        endDate
      });
      
      // Assert
      expect(results.length).toBe(4);
      results.forEach(org => {
        expect(new Date(org.createdAt)).toBeGreaterThanOrEqual(startDate);
        expect(new Date(org.createdAt)).toBeLessThanOrEqual(endDate);
      });
    });

    it('should sort organizations by name', async () => {
      // Act
      const results = await promisify(organizationModel.getOrganizations, {
        sortBy: 'name',
        sortOrder: 'asc'
      });
      
      // Assert
      expect(results.length).toBe(4);
      expect(results[0].name).toBe('Alpha Corp');
      expect(results[1].name).toBe('Beta Inc');
      expect(results[2].name).toBe('Delta Co');
      expect(results[3].name).toBe('Gamma LLC');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle invalid organization data', async () => {
      // Arrange
      const invalidOrg = {
        id: 'invalid-id',
        name: '', // Empty name
        email: 'invalid-email' // Invalid email format
      };
      
      // Act & Assert
      await expect(promisify(organizationModel.createOrganization, invalidOrg))
        .rejects.toThrow('Invalid organization data');
    });

    it('should handle concurrent updates', async () => {
      // Arrange
      const orgData = validOrganization();
      const org = await promisify(organizationModel.createOrganization, orgData);
      
      // Act
      const update1 = promisify(organizationModel.updateOrganization, org.id, { name: 'Update 1' });
      const update2 = promisify(organizationModel.updateOrganization, org.id, { name: 'Update 2' });
      
      // Assert
      await expect(Promise.all([update1, update2]))
        .rejects.toThrow('Concurrent update detected');
    });

    it('should handle large data sets', async () => {
      // Arrange
      const orgs = generateOrganizations(100);
      for (const org of orgs) {
        await promisify(organizationModel.createOrganization, org);
      }
      
      // Act
      const results = await promisify(organizationModel.getOrganizations, {});
      
      // Assert
      expect(results.length).toBe(100);
    });
  });
}); 