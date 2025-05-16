/**
 * Organization Model Tests - Prisma Implementation
 * 
 * This test suite focuses on the Prisma implementation of the Organization model.
 */

// Import test setup and mocks
require('../../setup/jest.setup');

// Import dependencies
const { prisma } = require('../../../config/prisma');
const { organizationModel } = require('../../../models/adapter');
const { validOrganization } = require('../../fixtures/organizationFixtures');
const { validUser } = require('../../fixtures/userFixtures');
const { testDataStore } = require('../../helpers/testDbSetup');

describe('Organization Model - Prisma Implementation', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    await prisma.$transaction([
      prisma.membership.deleteMany(),
      prisma.organization.deleteMany(),
      prisma.user.deleteMany()
    ]);
    
    testDataStore.users = [];
    testDataStore.organizations = [];
    testDataStore.memberships = [];
  });

  it('should create and retrieve an organization', async () => {
    const orgData = validOrganization();
    const org = await organizationModel.createOrganization(orgData);
    expect(org).toBeDefined();
    expect(org.id).toBe(orgData.id);
    
    const retrieved = await organizationModel.getOrganizationById(org.id);
    expect(retrieved).toEqual(org);
  });

  it('should update an organization', async () => {
    const orgData = validOrganization();
    const org = await organizationModel.createOrganization(orgData);
    
    const updateData = { name: 'Updated Name', description: 'New description' };
    const updated = await organizationModel.updateOrganization(org.id, updateData, org.createdBy);
    expect(updated.name).toBe(updateData.name);
  });

  it('should delete an organization', async () => {
    const orgData = validOrganization();
    const org = await organizationModel.createOrganization(orgData);
    
    const deleted = await organizationModel.deleteOrganization(org.id, org.createdBy);
    expect(deleted).toBe(true);
    
    const afterDelete = await organizationModel.getOrganizationById(org.id);
    expect(afterDelete).toBeNull();
  });

  it('should handle validation errors', async () => {
    const invalidOrg = {
      name: '',
      email: 'invalid-email',
      status: 'invalid-status'
    };
    
    await expect(organizationModel.createOrganization(invalidOrg))
      .rejects.toThrow('Invalid organization data');
  });
}); 