/**
 * Membership API Integration Tests
 * 
 * This test suite focuses on testing the Membership API endpoints.
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

describe('Membership API Integration Tests', () => {
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

  describe('POST /api/memberships', () => {
    it('should join an organization', async () => {
      const membershipData = {
        organizationId: testOrg.id,
        role: 'member'
      };

      const response = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send(membershipData);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.organizationId).toBe(testOrg.id);
      expect(response.body.userId).toBe(memberUser.id);
      expect(response.body.role).toBe('member');
    });

    it('should prevent joining with invalid role', async () => {
      const invalidMembershipData = {
        organizationId: testOrg.id,
        role: 'invalid-role'
      };

      const response = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send(invalidMembershipData);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('invalid role');
    });

    it('should prevent joining non-existent organization', async () => {
      const membershipData = {
        organizationId: 'non-existent-id',
        role: 'member'
      };

      const response = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send(membershipData);

      expect(response.status).toBe(404);
      expect(response.body.error).toContain('organization not found');
    });
  });

  describe('DELETE /api/memberships/:id', () => {
    it('should leave an organization', async () => {
      // First join the organization
      const joinResponse = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          organizationId: testOrg.id,
          role: 'member'
        });

      const membershipId = joinResponse.body.id;

      // Now leave the organization
      const response = await request(app)
        .delete(`/api/memberships/${membershipId}`)
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toContain('successfully left');

      // Verify membership is deleted
      const getResponse = await request(app)
        .get(`/api/memberships/${membershipId}`)
        .set('Authorization', `Bearer ${memberToken}`);

      expect(getResponse.status).toBe(404);
    });

    it('should prevent leaving with non-existent membership', async () => {
      const response = await request(app)
        .delete('/api/memberships/non-existent-id')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(404);
      expect(response.body.error).toContain('membership not found');
    });

    it('should prevent unauthorized leaving', async () => {
      // First join the organization
      const joinResponse = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          organizationId: testOrg.id,
          role: 'member'
        });

      const membershipId = joinResponse.body.id;

      // Try to leave with different user
      const otherUser = validUser();
      const otherUserToken = generateAuthToken(otherUser);

      const response = await request(app)
        .delete(`/api/memberships/${membershipId}`)
        .set('Authorization', `Bearer ${otherUserToken}`);

      expect(response.status).toBe(403);
    });
  });

  describe('PUT /api/memberships/:id/role', () => {
    it('should update member role', async () => {
      // First join the organization
      const joinResponse = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          organizationId: testOrg.id,
          role: 'member'
        });

      const membershipId = joinResponse.body.id;

      // Update the role
      const response = await request(app)
        .put(`/api/memberships/${membershipId}/role`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ role: 'admin' });

      expect(response.status).toBe(200);
      expect(response.body.role).toBe('admin');
    });

    it('should prevent invalid role updates', async () => {
      // First join the organization
      const joinResponse = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          organizationId: testOrg.id,
          role: 'member'
        });

      const membershipId = joinResponse.body.id;

      // Try to update with invalid role
      const response = await request(app)
        .put(`/api/memberships/${membershipId}/role`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ role: 'invalid-role' });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('invalid role');
    });

    it('should prevent unauthorized role updates', async () => {
      // First join the organization
      const joinResponse = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          organizationId: testOrg.id,
          role: 'member'
        });

      const membershipId = joinResponse.body.id;

      // Try to update role with non-admin user
      const response = await request(app)
        .put(`/api/memberships/${membershipId}/role`)
        .set('Authorization', `Bearer ${memberToken}`)
        .send({ role: 'admin' });

      expect(response.status).toBe(403);
    });
  });

  describe('GET /api/memberships', () => {
    it('should get user memberships', async () => {
      // Join multiple organizations
      const org2 = validOrganization({ name: 'Org 2' });
      const org3 = validOrganization({ name: 'Org 3' });
      testDataStore.organizations.push(org2, org3);

      await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({ organizationId: testOrg.id, role: 'member' });

      await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({ organizationId: org2.id, role: 'member' });

      await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({ organizationId: org3.id, role: 'member' });

      const response = await request(app)
        .get('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(3);
      expect(response.body.every(m => m.userId === memberUser.id)).toBe(true);
    });

    it('should support filtering by role', async () => {
      // Join organization as member
      await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({ organizationId: testOrg.id, role: 'member' });

      const response = await request(app)
        .get('/api/memberships?role=member')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.body[0].role).toBe('member');
    });

    it('should support pagination', async () => {
      // Create multiple organizations and join them
      const orgs = Array(15).fill().map((_, i) => 
        validOrganization({ name: `Org ${i + 1}` })
      );
      testDataStore.organizations.push(...orgs);

      for (const org of orgs) {
        await request(app)
          .post('/api/memberships')
          .set('Authorization', `Bearer ${memberToken}`)
          .send({ organizationId: org.id, role: 'member' });
      }

      const response = await request(app)
        .get('/api/memberships?page=1&limit=10')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(10);
    });
  });

  describe('GET /api/memberships/:id', () => {
    it('should get membership details', async () => {
      // First join the organization
      const joinResponse = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          organizationId: testOrg.id,
          role: 'member'
        });

      const membershipId = joinResponse.body.id;

      const response = await request(app)
        .get(`/api/memberships/${membershipId}`)
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(membershipId);
      expect(response.body.organizationId).toBe(testOrg.id);
      expect(response.body.userId).toBe(memberUser.id);
      expect(response.body.role).toBe('member');
    });

    it('should return 404 for non-existent membership', async () => {
      const response = await request(app)
        .get('/api/memberships/non-existent-id')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(404);
    });

    it('should prevent unauthorized access', async () => {
      // First join the organization
      const joinResponse = await request(app)
        .post('/api/memberships')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          organizationId: testOrg.id,
          role: 'member'
        });

      const membershipId = joinResponse.body.id;

      // Try to access with different user
      const otherUser = validUser();
      const otherUserToken = generateAuthToken(otherUser);

      const response = await request(app)
        .get(`/api/memberships/${membershipId}`)
        .set('Authorization', `Bearer ${otherUserToken}`);

      expect(response.status).toBe(403);
    });
  });
}); 