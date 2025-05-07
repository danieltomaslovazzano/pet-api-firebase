/**
 * Organization API Integration Tests
 * 
 * This test suite focuses on testing the Organization API endpoints.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

const request = require('supertest');
const app = require('../../app');
const { validUser, validOrganization } = require('../fixtures/userFixtures');
const { cleanupPostgresDb, testDataStore } = require('../helpers/testDbSetup');
const { generateAuthToken } = require('../helpers/authHelpers');

// Clean the test data store before tests
beforeEach(async () => {
  testDataStore.users = [];
  testDataStore.organizations = [];
  testDataStore.memberships = [];
});

describe('Organization API Integration Tests', () => {
  let adminToken;
  let memberToken;
  let adminUser;
  let memberUser;
  let testOrg;

  beforeEach(async () => {
    // Create admin user
    adminUser = validUser({ role: 'admin' });
    testDataStore.users.push(adminUser);
    adminToken = generateAuthToken(adminUser);

    // Create member user
    memberUser = validUser({ role: 'user' });
    testDataStore.users.push(memberUser);
    memberToken = generateAuthToken(memberUser);

    // Create test organization
    testOrg = validOrganization();
    testDataStore.organizations.push(testOrg);
  });

  describe('POST /api/organizations', () => {
    it('should create a new organization', async () => {
      const newOrg = validOrganization({
        name: 'New Test Organization',
        description: 'Test Description'
      });

      const response = await request(app)
        .post('/api/organizations')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(newOrg);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newOrg.name);
      expect(response.body.description).toBe(newOrg.description);
    });

    it('should validate required fields', async () => {
      const invalidOrg = {
        name: '', // Empty name
        description: 'Test Description'
      };

      const response = await request(app)
        .post('/api/organizations')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(invalidOrg);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/organizations/:id', () => {
    it('should get organization by ID', async () => {
      const response = await request(app)
        .get(`/api/organizations/${testOrg.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(testOrg.id);
      expect(response.body.name).toBe(testOrg.name);
    });

    it('should return 404 for non-existent organization', async () => {
      const response = await request(app)
        .get('/api/organizations/non-existent-id')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(404);
    });
  });

  describe('PUT /api/organizations/:id', () => {
    it('should update organization details', async () => {
      const updateData = {
        name: 'Updated Organization Name',
        description: 'Updated Description',
        status: 'active'
      };

      const response = await request(app)
        .put(`/api/organizations/${testOrg.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(updateData.name);
      expect(response.body.description).toBe(updateData.description);
      expect(response.body.status).toBe(updateData.status);
    });

    it('should prevent unauthorized updates', async () => {
      const response = await request(app)
        .put(`/api/organizations/${testOrg.id}`)
        .set('Authorization', `Bearer ${memberToken}`)
        .send({ name: 'Unauthorized Update' });

      expect(response.status).toBe(403);
    });
  });

  describe('DELETE /api/organizations/:id', () => {
    it('should delete organization', async () => {
      const response = await request(app)
        .delete(`/api/organizations/${testOrg.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toContain('deleted successfully');

      // Verify organization is deleted
      const getResponse = await request(app)
        .get(`/api/organizations/${testOrg.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(getResponse.status).toBe(404);
    });

    it('should prevent unauthorized deletion', async () => {
      const response = await request(app)
        .delete(`/api/organizations/${testOrg.id}`)
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(403);
    });
  });

  describe('GET /api/organizations', () => {
    it('should get all organizations', async () => {
      // Create additional organizations
      const org2 = validOrganization({ name: 'Org 2' });
      const org3 = validOrganization({ name: 'Org 3' });
      testDataStore.organizations.push(org2, org3);

      const response = await request(app)
        .get('/api/organizations')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(3);
    });

    it('should support pagination', async () => {
      // Create multiple organizations
      const orgs = Array(15).fill().map((_, i) => 
        validOrganization({ name: `Org ${i + 1}` })
      );
      testDataStore.organizations.push(...orgs);

      const response = await request(app)
        .get('/api/organizations?page=1&limit=10')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(10);
    });

    it('should support filtering by status', async () => {
      const activeOrg = validOrganization({ status: 'active' });
      const inactiveOrg = validOrganization({ status: 'inactive' });
      testDataStore.organizations.push(activeOrg, inactiveOrg);

      const response = await request(app)
        .get('/api/organizations?status=active')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.every(org => org.status === 'active')).toBe(true);
    });
  });

  describe('POST /api/organizations/:id/members', () => {
    it('should add a member to organization', async () => {
      const memberData = {
        userId: memberUser.id,
        role: 'member'
      };

      const response = await request(app)
        .post(`/api/organizations/${testOrg.id}/members`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(memberData);

      expect(response.status).toBe(200);
      expect(response.body.members).toContainEqual(
        expect.objectContaining({
          userId: memberUser.id,
          role: 'member'
        })
      );
    });

    it('should prevent duplicate member addition', async () => {
      // First add the member
      await request(app)
        .post(`/api/organizations/${testOrg.id}/members`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ userId: memberUser.id, role: 'member' });

      // Try to add the same member again
      const response = await request(app)
        .post(`/api/organizations/${testOrg.id}/members`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ userId: memberUser.id, role: 'member' });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('already exists');
    });
  });

  describe('PUT /api/organizations/:id/members/:userId', () => {
    it('should update member role', async () => {
      // First add the member
      await request(app)
        .post(`/api/organizations/${testOrg.id}/members`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ userId: memberUser.id, role: 'member' });

      // Update the role
      const response = await request(app)
        .put(`/api/organizations/${testOrg.id}/members/${memberUser.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ role: 'admin' });

      expect(response.status).toBe(200);
      expect(response.body.members).toContainEqual(
        expect.objectContaining({
          userId: memberUser.id,
          role: 'admin'
        })
      );
    });

    it('should prevent removing last admin', async () => {
      // First add the member as admin
      await request(app)
        .post(`/api/organizations/${testOrg.id}/members`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ userId: memberUser.id, role: 'admin' });

      // Try to remove the admin role
      const response = await request(app)
        .put(`/api/organizations/${testOrg.id}/members/${memberUser.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ role: 'member' });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('last admin');
    });
  });

  describe('DELETE /api/organizations/:id/members/:userId', () => {
    it('should remove member from organization', async () => {
      // First add the member
      await request(app)
        .post(`/api/organizations/${testOrg.id}/members`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ userId: memberUser.id, role: 'member' });

      // Remove the member
      const response = await request(app)
        .delete(`/api/organizations/${testOrg.id}/members/${memberUser.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.members).not.toContainEqual(
        expect.objectContaining({
          userId: memberUser.id
        })
      );
    });

    it('should prevent removing last admin', async () => {
      // First add the member as admin
      await request(app)
        .post(`/api/organizations/${testOrg.id}/members`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ userId: memberUser.id, role: 'admin' });

      // Try to remove the admin
      const response = await request(app)
        .delete(`/api/organizations/${testOrg.id}/members/${memberUser.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('last admin');
    });
  });
}); 