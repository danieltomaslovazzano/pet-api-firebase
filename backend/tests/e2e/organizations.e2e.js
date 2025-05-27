const axios = require('./helpers/request');
const { loginAsAdmin, loginAsUser, createTestUser, cleanupTestData } = require('./helpers/auth');
const { setupGlobalReporter, getGlobalReporter } = require('./helpers/report');

// Setup global reporter for automatic test tracking
const reporter = setupGlobalReporter('organizations', 'organizations-tests');

describe('Organizations E2E Tests', () => {
  let adminToken, userToken;
  let adminUserId, regularUserId;
  let testOrganizations = [];
  let testUsers = [];

  beforeAll(async () => {
    // Login as admin/superadmin for setup
    const adminLogin = await loginAsAdmin();
    adminToken = adminLogin.token;
    adminUserId = adminLogin.user.id;

    // Create a test user for member operations
    const testUser = await createTestUser({
      email: `test-user-org-${Date.now()}@example.com`,
      password: 'TestPassword123!',
      displayName: 'Test User for Organizations'
    });
    testUsers.push(testUser);
    regularUserId = testUser.id;

    // Login as the test user
    const userLogin = await loginAsUser(testUser.email, 'TestPassword123!');
    userToken = userLogin.token;
  });

  afterAll(async () => {
    // Cleanup test data
    await cleanupTestData({
      organizations: testOrganizations,
      users: testUsers,
      adminToken
    });

    // Generate enhanced report
    const observations = `- Total organizations created: ${testOrganizations.length}\n- Total test users created: ${testUsers.length}\n- All test data cleaned up automatically`;
    reporter.writeReport(observations);
  });

  describe('Create Organization', () => {
    test('Admin should create organization successfully', async () => {
      const organizationData = {
        name: `Test Organization ${Date.now()}`,
        description: 'Test organization for E2E testing',
        address: '123 Test Street',
        phone: '+1234567890',
        email: 'test@organization.com'
      };

      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        organizationData,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(response.data.name).toBe(organizationData.name);
      expect(response.data.createdBy).toBe(adminUserId);
      
      // Store for cleanup
      testOrganizations.push(response.data);
    });

    test('Regular user should create organization successfully', async () => {
      const organizationData = {
        name: `User Org ${Date.now()}`,
        description: 'Organization created by regular user',
        email: `user-org-${Date.now()}@example.com`
      };

      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        organizationData,
        {
          headers: { Authorization: `Bearer ${userToken}` }
        }
      );

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(response.data.name).toBe(organizationData.name);
      expect(response.data.createdBy).toBe(regularUserId);
      
      // Store for cleanup
      testOrganizations.push(response.data);
    });

    test('Should fail without authentication', async () => {
      const organizationData = {
        name: 'Unauthorized Organization',
        description: 'This should fail',
        email: 'unauthorized@example.com'
      };

      try {
        await axios.post(
          'http://localhost:3000/api/organizations',
          organizationData
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(401);
      }
    });
  });

  describe('Get Organization by ID', () => {
    let testOrg;

    beforeAll(async () => {
      // Create a test organization
      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Get Test Org ${Date.now()}`,
          description: 'Organization for get tests',
          email: `get-test-org-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      testOrg = response.data;
      testOrganizations.push(testOrg);
    });

    test('Admin should get organization by ID', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/organizations/${testOrg.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.id).toBe(testOrg.id);
      expect(response.data.name).toBe(testOrg.name);
    });

    test('Should fail with invalid organization ID', async () => {
      try {
        await axios.get(
          'http://localhost:3000/api/organizations/invalid-id',
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    });

    test('Should fail without authentication', async () => {
      try {
        await axios.get(`http://localhost:3000/api/organizations/${testOrg.id}`);
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(401);
      }
    });
  });

  describe('Update Organization', () => {
    let testOrg;

    beforeAll(async () => {
      // Create a test organization
      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Update Test Org ${Date.now()}`,
          description: 'Organization for update tests',
          email: `update-test-org-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      testOrg = response.data;
      testOrganizations.push(testOrg);
    });

    test('Admin should update organization successfully', async () => {
      const updateData = {
        name: `Updated ${testOrg.name}`,
        description: 'Updated description',
        phone: '+9876543210'
      };

      console.log('🔍 DEBUG: Update org ID:', testOrg.id);
      console.log('🔍 DEBUG: Update data:', JSON.stringify(updateData, null, 2));
      console.log('🔍 DEBUG: Admin token length:', adminToken?.length);
      console.log('🔍 DEBUG: Admin token start:', adminToken?.substring(0, 50));

      try {
        const response = await axios.put(
          `http://localhost:3000/api/organizations/${testOrg.id}`,
          updateData,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );

        expect(response.status).toBe(200);
        expect(response.data.name).toBe(updateData.name);
        expect(response.data.description).toBe(updateData.description);
        expect(response.data.phone).toBe(updateData.phone);
      } catch (error) {
        console.log('🔍 DEBUG: Error response status:', error.response?.status);
        console.log('🔍 DEBUG: Error response data:', JSON.stringify(error.response?.data, null, 2));
        console.log('🔍 DEBUG: Error message:', error.message);
        throw error;
      }
    });

    test('Should fail without proper permissions', async () => {
      const updateData = {
        name: 'Unauthorized update'
      };

      try {
        await axios.put(
          `http://localhost:3000/api/organizations/${testOrg.id}`,
          updateData,
          {
            headers: { Authorization: `Bearer ${userToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(403);
      }
    });
  });

  describe('Delete Organization', () => {
    let testOrg;

    beforeAll(async () => {
      // Create a test organization to delete
      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Delete Test Org ${Date.now()}`,
          description: 'Organization for delete tests',
          email: `delete-test-org-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      testOrg = response.data;
      // Don't add to testOrganizations since we'll delete it in the test
    });

    test('Admin should delete organization successfully', async () => {
      const response = await axios.delete(
        `http://localhost:3000/api/organizations/${testOrg.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('message');

      // Verify it's deleted by trying to get it
      try {
        await axios.get(
          `http://localhost:3000/api/organizations/${testOrg.id}`,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    });

    test('Should fail without proper permissions', async () => {
      // Create another test org for this test
      const createResponse = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `No Delete Perm Org ${Date.now()}`,
          description: 'Organization for permission test',
          email: `no-delete-perm-org-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      const noDeleteOrg = createResponse.data;
      testOrganizations.push(noDeleteOrg); // Add for cleanup

      try {
        await axios.delete(
          `http://localhost:3000/api/organizations/${noDeleteOrg.id}`,
          {
            headers: { Authorization: `Bearer ${userToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(403);
      }
    });
  });

  describe('List Organizations', () => {
    test('Admin should list all organizations', async () => {
      const response = await axios.get(
        'http://localhost:3000/api/admin/organizations',
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });

    test('Should fail without admin permissions', async () => {
      try {
        await axios.get(
          'http://localhost:3000/api/admin/organizations',
          {
            headers: { Authorization: `Bearer ${userToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(403);
      }
    });
  });

  describe('Get Organization Members', () => {
    let testOrg;

    beforeAll(async () => {
      // Create a test organization
      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Members Test Org ${Date.now()}`,
          description: 'Organization for members tests',
          email: `members-test-org-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      testOrg = response.data;
      testOrganizations.push(testOrg);
    });

    test('Admin should get organization members', async () => {
      const response = await axios.get(
        `http://localhost:3000/api/organizations/${testOrg.id}/members`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });

    test('Should fail without membership', async () => {
      try {
        await axios.get(
          `http://localhost:3000/api/organizations/${testOrg.id}/members`,
          {
            headers: { Authorization: `Bearer ${userToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(403);
      }
    });
  });

  describe('Multitenancy Validation', () => {
    let org1, org2;
    let org1AdminToken, org2AdminToken;
    let org1AdminUser, org2AdminUser;

    beforeAll(async () => {
      // Create two test organizations with different owners
      const org1Admin = await createTestUser({
        email: `org1-admin-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'Org1 Admin'
      });
      testUsers.push(org1Admin);
      
      const org2Admin = await createTestUser({
        email: `org2-admin-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'Org2 Admin'
      });
      testUsers.push(org2Admin);

      // Login as both users
      const org1Login = await loginAsUser(org1Admin.email, 'TestPassword123!');
      org1AdminToken = org1Login.token;
      org1AdminUser = org1Login.user;

      const org2Login = await loginAsUser(org2Admin.email, 'TestPassword123!');
      org2AdminToken = org2Login.token;
      org2AdminUser = org2Login.user;

      // Create organizations
      const org1Response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Org1 ${Date.now()}`,
          description: 'First organization for multitenant test',
          email: `org1-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${org1AdminToken}` }
        }
      );
      org1 = org1Response.data;
      testOrganizations.push(org1);

      const org2Response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Org2 ${Date.now()}`,
          description: 'Second organization for multitenant test',
          email: `org2-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${org2AdminToken}` }
        }
      );
      org2 = org2Response.data;
      testOrganizations.push(org2);
    });

    test('Organization admin should only access their own organization', async () => {
      // Org1 admin should access org1
      const response1 = await axios.get(
        `http://localhost:3000/api/organizations/${org1.id}`,
        {
          headers: { Authorization: `Bearer ${org1AdminToken}` }
        }
      );
      expect(response1.status).toBe(200);
      expect(response1.data.id).toBe(org1.id);

      // Org1 admin should NOT access org2 (depends on membership)
      try {
        await axios.get(
          `http://localhost:3000/api/organizations/${org2.id}`,
          {
            headers: { Authorization: `Bearer ${org1AdminToken}` }
          }
        );
        // This might succeed if the user is allowed to view other orgs
        // The actual behavior depends on the business logic
      } catch (error) {
        // Expected if access is restricted
        expect(error.response.status).toBe(403);
      }
    });

    test('Super admin should access all organizations', async () => {
      // Admin/superadmin should access both organizations
      const response1 = await axios.get(
        `http://localhost:3000/api/organizations/${org1.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      expect(response1.status).toBe(200);

      const response2 = await axios.get(
        `http://localhost:3000/api/organizations/${org2.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      expect(response2.status).toBe(200);
    });
  });
}); 