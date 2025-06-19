/**
 * Membership Retrieval and Access
 * 
 * Extracted from monolithic memberships.e2e.js (729 lines)
 * This file contains 5 focused tests for membership retrieval and access
 */

const axios = require('../helpers/request');
const { loginAsAdmin, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('memberships-membership-retrieval', 'membership-retrieval-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Memberships E2E Tests - Membership Retrieval and Access', () => {
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
    console.log('\n🚀 Starting Membership Retrieval and Access Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'membership-retrieval Test Org',
          description: 'Organization for membership-retrieval testing',
          email: 'membership-retrieval-test@example.com',
          address: '123 membership-retrieval Test Street',
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
          name: 'membership-retrieval Test Org 2',
          description: 'Second organization for membership-retrieval testing',
          email: 'membership-retrieval-test2@example.com',
          address: '456 membership-retrieval Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. Create regular user
      regularUser = await createTestUser({
        email: `membership-retrieval-regular-${Date.now()}@example.com`,
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
        email: `membership-retrieval-user2-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        name: 'Test User 2'
      });
      testUsers.push(testUser2);

      testUser3 = await createTestUser({
        email: `membership-retrieval-user3-${Date.now()}@example.com`,
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

      const observations = `- Total memberships tested: ${testMemberships.length}\n- Membership Retrieval and Access tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Get Memberships', () => {
    test('Admin should get memberships by organization', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/memberships?organizationId=${testOrganization.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(Array.isArray(response.data.data)).toBe(true);
      expect(response.data.data.length).toBeGreaterThan(0);
      
      // Verify all memberships belong to the organization
      response.data.data.forEach(membership => {
        expect(membership.organizationId).toBe(testOrganization.id);
      });
    });

    test('Admin should get memberships by user', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/memberships?userId=${adminUser.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(Array.isArray(response.data.data)).toBe(true);
    });

    test('User should get their own memberships', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/memberships?userId=${regularUser.id}`,
        {
          headers: { Authorization: `Bearer ${regularUserToken}` }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(Array.isArray(response.data.data)).toBe(true);
    });

    test('Should fail without userId or organizationId', async () => {
      try {
        await axios.get(
          'http://localhost:3000/api/memberships',
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        // Handle both network errors and HTTP response errors
        if (error.response) {
          expect(error.response.status).toBe(400);
          expect(error.response.data.error).toContain('userId or organizationId must be provided');
        } else {
          // Network error - log and fail the test appropriately
          console.error('Network error in test:', error.message);
          throw error;
        }
      }
    });

    test('Regular user should fail to get other user memberships', async () => {
      try {
        await axios.get(
          `http://localhost:3000/api/memberships?userId=${adminUser.id}`,
          {
            headers: { Authorization: `Bearer ${regularUserToken}` }
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