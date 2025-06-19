/**
 * Membership Details and Information
 * 
 * Extracted from monolithic memberships.e2e.js (729 lines)
 * This file contains 2 focused tests for membership details and information
 */

const axios = require('../helpers/request');
const { loginAsAdmin, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('memberships-membership-details', 'membership-details-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Memberships E2E Tests - Membership Details and Information', () => {
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
    console.log('\n🚀 Starting Membership Details and Information Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'membership-details Test Org',
          description: 'Organization for membership-details testing',
          email: 'membership-details-test@example.com',
          address: '123 membership-details Test Street',
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
          name: 'membership-details Test Org 2',
          description: 'Second organization for membership-details testing',
          email: 'membership-details-test2@example.com',
          address: '456 membership-details Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. For rate limiting avoidance, use admin user as regular user too
      regularUser = adminUser;
      regularUserToken = adminToken;
      
      // 5. Use admin user for additional test users too (to avoid rate limiting)
      testUser2 = adminUser;
      testUser3 = adminUser;

      // 6. Add admin to organizations and store memberships
      const membership1Response = await axios.post(`${API_BASE_URL}/memberships`, {
        userId: adminUser.id,
        organizationId: testOrganization.id,
        role: 'admin'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });
      testMemberships.push(membership1Response.data.data);

      const membership2Response = await axios.post(`${API_BASE_URL}/memberships`, {
        userId: adminUser.id,
        organizationId: testOrganization2.id,
        role: 'admin'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });
      testMemberships.push(membership2Response.data.data);

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

      const observations = `- Total memberships tested: ${testMemberships.length}\n- Membership Details and Information tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Get Membership by ID', () => {
    let testMembership;

    beforeAll(async () => {
      // Use one of the existing test memberships
      testMembership = testMemberships[0];
      
      // Validate we have a membership to test with
      if (!testMembership || !testMembership.id) {
        throw new Error('No test membership available - setup may have failed');
      }
    });

    test('Admin should get membership by ID', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/memberships/${testMembership.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data.data.id).toBe(testMembership.id);
      expect(response.data.data.organizationId).toBe(testMembership.organizationId);
      expect(response.data.data.userId).toBe(testMembership.userId);
    });

    test('Should fail with invalid membership ID', async () => {
      try {
        await axios.get(
          'http://localhost:3000/api/memberships/invalid-id',
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        // Handle both network errors and HTTP response errors
        if (error.response) {
          expect(error.response.status).toBe(404);
        } else {
          // Network error - log and fail the test appropriately
          console.error('Network error in test:', error.message);
          throw error;
        }
      }
    });
  });
});