const axios = require('./helpers/request');
const { EnhancedReporter } = require('./helpers/report');
const { loginAsAdmin, loginAsUser, createTestUser, cleanupTestData } = require('./helpers/auth');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('memberships', 'memberships-tests');
describe('Memberships E2E Tests', () => {
  let adminToken, userToken;
  let adminUserId, regularUserId;
  let testOrganization;
  let testUsers = [];
  let testMemberships = [];

  beforeAll(async () => {
    // Login as admin/superadmin for setup
    const adminLogin = await loginAsAdmin();
    adminToken = adminLogin.token;
    adminUserId = adminLogin.user.id;

    // Create a test user
    const testUser = await createTestUser({
      email: `test-user-membership-${Date.now()}@example.com`,
      password: 'TestPassword123!',
      displayName: 'Test User for Memberships'
    });
    testUsers.push(testUser);
    regularUserId = testUser.id;

    // Login as the test user
    const userLogin = await loginAsUser(testUser.email, 'TestPassword123!');
    userToken = userLogin.token;

    // Create a test organization
    const orgResponse = await axios.post(
      'http://localhost:3000/api/organizations',
      {
        name: `Test Org for Memberships ${Date.now()}`,
        description: 'Organization for membership testing',
        email: `test-org-${Date.now()}@example.com`,
        address: '123 Membership Test Street',
        phone: '+1234567890'
      },
      {
        headers: { Authorization: `Bearer ${adminToken}` }
      }
    );
    testOrganization = orgResponse.data.data;
    // Verify default type is set
    expect(testOrganization.type).toBe('shelter');
  });

  beforeEach(() => {
    // Get current test name from Jest
    const testName = expect.getState().currentTestName || 'unknown test';
    reporter.startTest(testName);
  });

  afterEach(() => {
    // Get the real test result from Jest custom reporter
    const testName = expect.getState().currentTestName;
    const jestResult = global.__JEST_TEST_RESULTS__ && global.__JEST_TEST_RESULTS__[testName];
    
    let status = 'PASSED';
    let error = null;
    
    if (jestResult) {
      status = jestResult.status;
      error = jestResult.error;
      console.log('[ENHANCED REPORTER] Using Jest result for "' + testName + '": ' + status);
    } else {
      console.log('[ENHANCED REPORTER] No Jest result found for "' + testName + '", defaulting to PASSED');
    }
    
    reporter.endTest(status, error);
  });

  afterAll(async () => {
    // Cleanup test data
    await cleanupTestData({
      organizations: [testOrganization],
      users: testUsers,
      memberships: testMemberships,
      adminToken
    });

    // Wait a moment for Jest reporter to finish processing
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Sync Enhanced Reporter test results with real Jest results
    reporter.syncWithJestResults();

    // Generate enhanced report
    const observations = `- Test organization: ${testOrganization?.name}\n- Total memberships created: ${testMemberships.length}\n- Total test users created: ${testUsers.length}\n- All test data cleaned up automatically`;
    reporter.writeReport(observations);
  });

  describe('Invite User to Organization', () => {
    let inviteUser;

    beforeAll(async () => {
      // Create a user to invite
      inviteUser = await createTestUser({
        email: `invite-user-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'User to Invite'
      });
      testUsers.push(inviteUser);
    });

    test('Admin should invite user to organization successfully', async () => {
      const membershipData = {
        organizationId: testOrganization.id,
        userId: inviteUser.id,
        role: 'member'
      };

      const response = await axios.post(
        'http://localhost:3000/api/memberships',
        membershipData,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.organizationId).toBe(testOrganization.id);
      expect(response.data.data.userId).toBe(inviteUser.id);
      expect(response.data.data.role).toBe('member');
      
      // Store for cleanup
      testMemberships.push(response.data.data);
    });

    test('Should fail to invite same user twice', async () => {
      const membershipData = {
        organizationId: testOrganization.id,
        userId: inviteUser.id,
        role: 'volunteer'
      };

      try {
        await axios.post(
          'http://localhost:3000/api/memberships',
          membershipData,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        // Handle both network errors and HTTP response errors
        if (error.response) {
          expect(error.response.status).toBe(400);
          // Check for i18n key or translated message
          expect(error.response.data.error).toMatch(/already a member|user_already_member/);
        } else {
          // Network error - log and fail the test appropriately
          console.error('Network error in test:', error.message);
          throw error;
        }
      }
    });

    test('Regular user should fail to invite without admin permissions', async () => {
      const newUser = await createTestUser({
        email: `no-perm-invite-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'No Permission Invite'
      });
      testUsers.push(newUser);

      const membershipData = {
        organizationId: testOrganization.id,
        userId: newUser.id,
        role: 'member'
      };

      try {
        await axios.post(
          'http://localhost:3000/api/memberships',
          membershipData,
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

    test('Should invite user with different roles', async () => {
      const roles = ['admin', 'manager', 'moderator', 'volunteer', 'observer'];
      
      for (const role of roles) {
        const roleUser = await createTestUser({
          email: `${role}-user-${Date.now()}@example.com`,
          password: 'TestPassword123!',
          displayName: `${role.charAt(0).toUpperCase() + role.slice(1)} User`
        });
        testUsers.push(roleUser);

        const membershipData = {
          organizationId: testOrganization.id,
          userId: roleUser.id,
          role: role
        };

        const response = await axios.post(
          'http://localhost:3000/api/memberships',
          membershipData,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );

        expect(response.status).toBe(201);
        expect(response.data.data.role).toBe(role);
        testMemberships.push(response.data.data);
      }
    });
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
      expect(Array.isArray(response.data.data)).toBe(true);
      expect(response.data.data.length).toBeGreaterThan(0);
      
      // Verify all memberships belong to the organization
      response.data.data.forEach(membership => {
        expect(membership.organizationId).toBe(testOrganization.id);
      });
    });

    test('Admin should get memberships by user', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/memberships?userId=${adminUserId}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data.data)).toBe(true);
    });

    test('User should get their own memberships', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/memberships?userId=${regularUserId}`,
        {
          headers: { Authorization: `Bearer ${userToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data.data)).toBe(true);
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
          `http://localhost:3000/api/memberships?userId=${adminUserId}`,
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

  describe('Get Membership by ID', () => {
    let testMembership;

    beforeAll(async () => {
      // Use one of the existing test memberships
      testMembership = testMemberships[0];
    });

    test('Admin should get membership by ID', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/memberships/${testMembership.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.data.id).toBe(testMembership.id);
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
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('message');

      // Verify membership is deleted
      try {
        await axios.get(
          `http://localhost:3000/api/memberships/${membershipToRemove.id}`,
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
      expect(response.data.message).toContain('left the organization');

      // Verify membership is deleted
      try {
        await axios.get(
          `http://localhost:3000/api/memberships/${selfLeaveMembership.id}`,
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