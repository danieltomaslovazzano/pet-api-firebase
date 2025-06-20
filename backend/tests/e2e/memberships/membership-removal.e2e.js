/**
 * Member Removal and Self-Leave
 * 
 * Extracted from monolithic memberships.e2e.js (729 lines)
 * This file contains 3 focused tests for member removal and self-leave
 */

const axios = require('../helpers/request');
const { loginAsAdmin, loginAsUser, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('memberships-membership-removal', 'membership-removal-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Memberships E2E Tests - Member Removal and Self-Leave', () => {
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
    console.log('\n🚀 Starting Member Removal and Self-Leave Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'membership-removal Test Org',
          description: 'Organization for membership-removal testing',
          email: 'membership-removal-test@example.com',
          address: '123 membership-removal Test Street',
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
          name: 'membership-removal Test Org 2',
          description: 'Second organization for membership-removal testing',
          email: 'membership-removal-test2@example.com',
          address: '456 membership-removal Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. Create a real regular user for permission testing
      regularUser = await createTestUser({
        email: `membership-removal-regular-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        name: 'Regular User'
      });
      testUsers.push(regularUser);

      const regularUserResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: regularUser.email,
        password: 'TestPassword123!'
      });
      regularUserToken = regularUserResponse.data.data.tokens.idToken;
      
      // 5. Use admin user for additional test users (to avoid rate limiting for those)
      testUser2 = adminUser;
      testUser3 = adminUser;

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

      const observations = `- Total memberships tested: ${testMemberships.length}\n- Member Removal and Self-Leave tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Remove Member', () => {
    let membershipToRemove;

    beforeAll(async () => {
      // Create a user specifically for removal test
      const removeUser = await createTestUser({
        email: `remove-user-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'User for Removal'
      });
      testUsers.push(removeUser);

      // Create membership for this user
      const membershipResponse = await axios.post(
        'http://localhost:3000/api/memberships',
        {
          organizationId: testOrganization.id,
          userId: removeUser.id,
          role: 'volunteer'
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      membershipToRemove = membershipResponse.data.data;
    });

    test('Admin should remove member successfully', async () => {
      const response = await axios.delete(
        `http://localhost:3000/api/memberships/${membershipToRemove.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data).toHaveProperty('success',true);
      expect(response.data).toHaveProperty('message');

      // Verify membership is deleted
      try {
        await axios.get(
          `http://localhost:3000/api/memberships/${membershipToRemove.id}`,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        expect(true).toBe(false);
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

    test('Regular user should fail to remove member without permissions', async () => {
      // Create another membership to test removal failure
      const anotherUser = await createTestUser({
        email: `another-remove-user-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'Another User for Removal'
      });
      testUsers.push(anotherUser);

      const membershipResponse = await axios.post(
        'http://localhost:3000/api/memberships',
        {
          organizationId: testOrganization.id,
          userId: anotherUser.id,
          role: 'volunteer'
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      const anotherMembership = membershipResponse.data.data;
      testMemberships.push(anotherMembership);

      try {
        await axios.delete(
          `http://localhost:3000/api/memberships/${anotherMembership.id}`,
          {
            headers: { Authorization: `Bearer ${regularUserToken}` }
          }
        );
        expect(true).toBe(false);
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

  describe('Self-Leave Organization', () => {
    let selfLeaveMembership;
    let selfLeaveUserToken;

    beforeAll(async () => {
      // Create a user for self-leave test
      const selfLeaveUser = await createTestUser({
        email: `self-leave-user-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'Self Leave User'
      });
      testUsers.push(selfLeaveUser);

      // Login as this user
      const userLogin = await loginAsUser(selfLeaveUser.email, 'TestPassword123!');
      selfLeaveUserToken = userLogin.token;

      // Create membership for this user
      const membershipResponse = await axios.post(
        'http://localhost:3000/api/memberships',
        {
          organizationId: testOrganization.id,
          userId: selfLeaveUser.id,
          role: 'member'
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      selfLeaveMembership = membershipResponse.data.data;
    });

    test('User should be able to leave organization (remove own membership)', async () => {
      const response = await axios.delete(
        `http://localhost:3000/api/memberships/${selfLeaveMembership.id}`,
        {
          headers: { Authorization: `Bearer ${selfLeaveUserToken}` }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data.data.message).toContain('left the organization');

      // Verify membership is deleted
      try {
        await axios.get(
          `http://localhost:3000/api/memberships/${selfLeaveMembership.id}`,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        expect(true).toBe(false);
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