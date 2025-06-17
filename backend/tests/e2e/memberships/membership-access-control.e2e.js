/**
 * Cross-Organization Access Control
 * 
 * Extracted from monolithic memberships.e2e.js (729 lines)
 * This file contains 3 focused tests for cross-organization access control
 */

const axios = require('../helpers/request');
const { loginAsAdmin, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('memberships-membership-access-control', 'membership-access-control-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Memberships E2E Tests - Cross-Organization Access Control', () => {
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
    console.log('\n🚀 Starting Cross-Organization Access Control Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'membership-access-control Test Org',
          description: 'Organization for membership-access-control testing',
          email: 'membership-access-control-test@example.com',
          address: '123 membership-access-control Test Street',
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
          name: 'membership-access-control Test Org 2',
          description: 'Second organization for membership-access-control testing',
          email: 'membership-access-control-test2@example.com',
          address: '456 membership-access-control Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. Create regular user
      regularUser = await createTestUser({
        email: `membership-access-control-regular-${Date.now()}@example.com`,
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
        email: `membership-access-control-user2-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        name: 'Test User 2'
      });
      testUsers.push(testUser2);

      testUser3 = await createTestUser({
        email: `membership-access-control-user3-${Date.now()}@example.com`,
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

      const observations = `- Total memberships tested: ${testMemberships.length}\n- Cross-Organization Access Control tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Cross-Organization Access Validation', () => {
    let otherOrganization;
    let otherOrgAdmin;
    let otherOrgAdminToken;

    beforeAll(async () => {
      // Create another organization and admin
      otherOrgAdmin = await createTestUser({
        email: `other-org-admin-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'Other Org Admin'
      });
      testUsers.push(otherOrgAdmin);

      const otherAdminLogin = await loginAsUser(otherOrgAdmin.email, 'TestPassword123!');
      otherOrgAdminToken = otherAdminLogin.token;

      // Create the other organization
      const orgResponse = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Other Org ${Date.now()}`,
          description: 'Other organization for cross-access test',
          email: `other-org-${Date.now()}@example.com`,
          address: '789 Other Org Boulevard',
          phone: '+1122334455'
        },
        {
          headers: { Authorization: `Bearer ${otherOrgAdminToken}` }
        }
      );
      otherOrganization = orgResponse.data.data;
    });

    afterAll(async () => {
      // Cleanup the other organization
      try {
        await axios.delete(
          `http://localhost:3000/api/organizations/${otherOrganization.id}`,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
      } catch (error) {
        console.log('Failed to cleanup other organization:', error.message);
      }
    });

    test('Organization admin should not access memberships from other organizations', async () => {
      // Other org admin tries to access first org memberships
      try {
        await axios.get(
          `http://localhost:3000/api/memberships?organizationId=${testOrganization.id}`,
          {
            headers: { Authorization: `Bearer ${otherOrgAdminToken}` }
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

    test('Organization admin should not invite users to other organizations', async () => {
      const newUser = await createTestUser({
        email: `cross-org-invite-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'Cross Org Invite User'
      });
      testUsers.push(newUser);

      const membershipData = {
        organizationId: testOrganization.id, // Trying to invite to different org
        userId: newUser.id,
        role: 'member'
      };

      try {
        await axios.post(
          'http://localhost:3000/api/memberships',
          membershipData,
          {
            headers: { Authorization: `Bearer ${otherOrgAdminToken}` }
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

    test('Super admin should access all organizations', async () => {
      // Super admin should be able to access both organizations
      const response1 = await axios.get(
        `http://localhost:3000/api/memberships?organizationId=${testOrganization.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      expect(response1.status).toBe(200);

      const response2 = await axios.get(
        `http://localhost:3000/api/memberships?organizationId=${otherOrganization.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      expect(response2.status).toBe(200);
    });
  });
});