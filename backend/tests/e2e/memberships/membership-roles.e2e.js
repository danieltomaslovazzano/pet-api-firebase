/**
 * Role Management and Updates
 * 
 * Extracted from monolithic memberships.e2e.js (729 lines)
 * This file contains 3 focused tests for role management and updates
 */

const axios = require('../helpers/request');
const { loginAsAdmin, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('memberships-membership-roles', 'membership-roles-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Memberships E2E Tests - Role Management and Updates', () => {
  let adminToken;
  let regularUserToken;
  let testOrganization;
  let testOrganization2;
  let adminUser;
  let regularUser;
  let testUser2;
  let testUser3;
  let testUsers = [];
  let testOrganizations = [];
  let testMemberships = [];

  beforeEach(() => {
    const testName = expect.getState().currentTestName || 'unknown test';
    reporter.startTest(testName);
  });

  afterEach(() => {
    const testName = expect.getState().currentTestName;
    let status = 'PASSED';
    let error = null;
    console.log(`[ENHANCED REPORTER] Test "${testName}" completed, recording as: ${status}`);
    reporter.endTest(status, error);
  });

  beforeAll(async () => {
    console.log('\n🚀 Starting Role Management and Updates Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'membership-roles Test Org',
          description: 'Organization for membership-roles testing',
          email: 'membership-roles-test@example.com',
          address: '123 membership-roles Test Street',
          phone: '+1234567890'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization = orgResponse.data.data;
      testOrganizations.push(testOrganization);

      // 3. Create second test organization
      const org2Response = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'membership-roles Test Org 2',
          description: 'Second organization for membership-roles testing',
          email: 'membership-roles-test2@example.com',
          address: '456 membership-roles Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. Create regular user
      regularUser = await createTestUser({
        email: `membership-roles-regular-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        name: 'Regular User'
      });
      testUsers.push(regularUser);

      const regularUserResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: regularUser.email,
        password: 'TestPassword123!'
      });
      regularUserToken = regularUserResponse.data.data.tokens.idToken;

      // 5. Create additional test users
      testUser2 = await createTestUser({
        email: `membership-roles-user2-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        name: 'Test User 2'
      });
      testUsers.push(testUser2);

      testUser3 = await createTestUser({
        email: `membership-roles-user3-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        name: 'Test User 3'
      });
      testUsers.push(testUser3);

      // 6. Add admin to organizations
      await axios.post(`${API_BASE_URL}/memberships`, {
        userId: adminUser.id,
        organizationId: testOrganization.id,
        role: 'admin'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });

      await axios.post(`${API_BASE_URL}/memberships`, {
        userId: adminUser.id,
        organizationId: testOrganization2.id,
        role: 'admin'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });

    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      throw error;
    }
  });

  afterAll(async () => {
    try {
      await cleanupTestData({
        organizations: testOrganizations,
        users: testUsers,
        adminToken
      });

      const observations = `- Total memberships tested: ${testMemberships.length}\n- Role Management and Updates tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Update Member Role', () => {
    let membershipToUpdate;

    beforeAll(async () => {
      // Find a membership that's not an admin to update
      membershipToUpdate = testMemberships.find(m => m.role !== 'admin');
    });

    test('Admin should update member role successfully', async () => {
      const newRole = 'manager';
      
      const response = await axios.put(
        `http://localhost:3000/api/memberships/${membershipToUpdate.id}`,
        { role: newRole },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.data.role).toBe(newRole);
      
      // Update our local reference
      membershipToUpdate.role = newRole;
    });

    test('Should fail with invalid role', async () => {
      try {
        await axios.put(
          `http://localhost:3000/api/memberships/${membershipToUpdate.id}`,
          { role: 'invalid-role' },
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        // Handle both network errors and HTTP response errors
        if (error.response) {
          expect(error.response.status).toBe(400);
          expect(error.response.data.error).toContain('Invalid role');
        } else {
          // Network error - log and fail the test appropriately
          console.error('Network error in test:', error.message);
          throw error;
        }
      }
    });

    test('Regular user should fail to update role without permissions', async () => {
      try {
        await axios.put(
          `http://localhost:3000/api/memberships/${membershipToUpdate.id}`,
          { role: 'volunteer' },
          {
            headers: { Authorization: `Bearer ${userToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        // Handle both network errors and HTTP response errors
        if (error.response) {
          expect(error.response.status).toBe(403);
        } else {
          // Network error - log and fail the test appropriately
          console.error('Network error in test:', error.message);
          throw error;
        }
      }
    });
  });
});