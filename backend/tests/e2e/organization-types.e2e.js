const axios = require('./helpers/request');
const { EnhancedReporter } = require('./helpers/report');
const { loginAsAdmin, loginAsUser, createTestUser, cleanupTestData } = require('./helpers/auth');
const { setupManualReporter, getGlobalReporter } = require('./helpers/report');
const { t } = require('../../utils/i18n');

// Setup global reporter for automatic test tracking
const reporter = setupManualReporter('organization-types', 'organization-types-tests');


// Initialize Enhanced Reporter
describe('Organization Types E2E Tests', () => {
  let adminToken, userToken;
  let adminUserId, regularUserId;
  let testOrganizations = [];
  let testUsers = [];
  let currentLanguage = 'en';

  beforeAll(async () => {
    // Login as admin/superadmin for setup
    const adminLogin = await loginAsAdmin();
    adminToken = adminLogin.token;
    adminUserId = adminLogin.user.id;

    // Create a test user
    const testUser = await createTestUser({
      email: `test-user-org-types-${Date.now()}@example.com`,
      password: 'TestPassword123!',
      displayName: 'Test User for Organization Types'
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
    const observations = `- Total organizations created: ${testOrganizations.length}\n- Total test users created: ${testUsers.length}\n- Organization types functionality tested\n- All test data cleaned up automatically`;
    reporter.writeReport(observations);
  });

  describe('Get Organization Types', () => {
    test('Should get all available organization types', async () => {
      const response = await axios.get(
        'http://localhost:3000/api/organizations/types',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'Accept-Language': currentLanguage
          }
        }
      );

      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('object');
      expect(response.data.shelter).toBeDefined();
      expect(response.data.shelter.id).toBe('shelter');
      expect(response.data.shelter.name).toBe(t('organizations.types.shelter.name', currentLanguage));
      expect(response.data.shelter.features).toBeDefined();
      expect(Array.isArray(response.data.shelter.features)).toBe(true);
      expect(response.data.shelter.permissions).toBeDefined();
      expect(response.data.shelter.validation).toBeDefined();
    });

    test('Regular user should also get organization types', async () => {
      const response = await axios.get(
        'http://localhost:3000/api/organizations/types',
        {
          headers: { 
            Authorization: `Bearer ${userToken}`,
            'Accept-Language': currentLanguage
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.shelter).toBeDefined();
    });

    test('Should fail without authentication', async () => {
      try {
        await axios.get('http://localhost:3000/api/organizations/types', {
          headers: { 'Accept-Language': currentLanguage }
        });
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(401);
        expect(error.response.data.error).toBe(t('auth.unauthorized', currentLanguage));
      }
    });
  });

  describe('Get Specific Organization Type', () => {
    test('Should get shelter type information', async () => {
      const response = await axios.get(
        'http://localhost:3000/api/organizations/types/shelter',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'Accept-Language': currentLanguage
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.data.data.id).toBe('shelter');
      expect(response.data.data.data.name).toBe(t('organizations.types.shelter.name', currentLanguage));
      expect(response.data.description).toContain(t('organizations.types.shelter.description', currentLanguage));
      expect(response.data.features).toContain('pet_adoption');
      expect(response.data.features).toContain('pet_rescue');
      expect(response.data.permissions.pets).toBeDefined();
      expect(response.data.permissions.pets.create).toBe(true);
      expect(response.data.validation.requiredFields).toContain('name');
      expect(response.data.validation.requiredFields).toContain('email');
    });

    test('Should fail for invalid organization type', async () => {
      try {
        await axios.get(
          'http://localhost:3000/api/organizations/types/invalid_type',
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'Accept-Language': currentLanguage
            }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.error).toBe(t('organizations.invalid_type', currentLanguage));
      }
    });

    test('Should fail without authentication', async () => {
      try {
        await axios.get('http://localhost:3000/api/organizations/types/shelter', {
          headers: { 'Accept-Language': currentLanguage }
        });
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(401);
        expect(error.response.data.error).toBe(t('auth.unauthorized', currentLanguage));
      }
    });
  });

  describe('Create Organization with Type', () => {
    test('Should create shelter organization successfully', async () => {
      const organizationData = {
        name: `Test Shelter ${Date.now()}`,
        type: 'shelter',
        description: 'Test shelter for E2E testing',
        address: '123 Shelter Street',
        phone: '+1234567890',
        email: `test-shelter-${Date.now()}@example.com`
      };

      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        organizationData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'Accept-Language': currentLanguage
          }
        }
      );

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.data.name).toBe(organizationData.name);
      expect(response.data.type).toBe('shelter');
      expect(response.data.createdBy).toBe(adminUserId);
      expect(response.data.message).toBe(t('organizations.created', currentLanguage));
      
      // Store for cleanup
      testOrganizations.push(response.data);
    });

    test('Should create organization with default type when not specified', async () => {
      const organizationData = {
        name: `Default Type Org ${Date.now()}`,
        description: 'Organization without explicit type',
        email: `default-type-${Date.now()}@example.com`,
        address: '123 Default Street',
        phone: '+1234567890'
      };

      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        organizationData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'Accept-Language': currentLanguage
          }
        }
      );

      expect(response.status).toBe(201);
      expect(response.data.type).toBe('shelter'); // Default type
      expect(response.data.message).toBe(t('organizations.created', currentLanguage));
      
      // Store for cleanup
      testOrganizations.push(response.data);
    });

    test('Should fail with invalid organization type', async () => {
      const organizationData = {
        name: 'Invalid Type Organization',
        type: 'invalid_type',
        description: 'This should fail',
        email: 'invalid-type@example.com'
      };

      try {
        await axios.post(
          'http://localhost:3000/api/organizations',
          organizationData,
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'Accept-Language': currentLanguage
            }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.error).toBe(t('organizations.invalid_type', currentLanguage));
        expect(error.response.data.details).toBeDefined();
        // Check that the details contain information about valid types including 'shelter'
        const detailsString = JSON.stringify(error.response.data.details);
        expect(detailsString).toContain('shelter');
      }
    });

    test('Should validate required fields for shelter type', async () => {
      const organizationData = {
        name: 'Incomplete Shelter',
        type: 'shelter'
        // Missing required fields: email, address, phone
      };

      try {
        await axios.post(
          'http://localhost:3000/api/organizations',
          organizationData,
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'Accept-Language': currentLanguage
            }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.error).toBe(t('organizations.validation_failed', currentLanguage));
        expect(error.response.data.details).toBeDefined();
        // Check that the details contain information about required email field
        const detailsString = JSON.stringify(error.response.data.details);
        expect(detailsString).toContain(t('organizations.email_required', currentLanguage));
      }
    });

    test('Should handle empty string type', async () => {
      const organizationData = {
        name: 'Empty Type Organization',
        type: '',
        description: 'Organization with empty type',
        email: 'empty-type@example.com',
        address: '123 Empty Street',
        phone: '+1234567890'
      };

      try {
        await axios.post(
          'http://localhost:3000/api/organizations',
          organizationData,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.error).toBe('Validation failed');
      }
    });
  });

  describe('Update Organization Type', () => {
    let testOrg;

    beforeAll(async () => {
      // Create a test organization
      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Update Type Test Org ${Date.now()}`,
          type: 'shelter',
          description: 'Organization for type update tests',
          address: '456 Update Street',
          phone: '+9876543210',
          email: `update-type-test-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      testOrg = response.data;
      testOrganizations.push(testOrg);
    });

    test('Should update organization type successfully', async () => {
      const updateData = {
        description: 'Updated description for shelter'
      };

      const response = await axios.put(
        `http://localhost:3000/api/organizations/${testOrg.id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.type).toBe('shelter'); // Should remain the same
      expect(response.data.description).toBe(updateData.description);
    });

    test('Should fail when updating to invalid type', async () => {
      const updateData = {
        type: 'invalid_type'
      };

      try {
        await axios.put(
          `http://localhost:3000/api/organizations/${testOrg.id}`,
          updateData,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.error).toBe('Validation failed');
        expect(error.response.data.details).toBeDefined();
      }
    });
  });

  describe('Filter Organizations by Type', () => {
    beforeAll(async () => {
      // Create multiple organizations with shelter type
      for (let i = 0; i < 3; i++) {
        const response = await axios.post(
          'http://localhost:3000/api/organizations',
          {
            name: `Filter Test Shelter ${i + 1} ${Date.now()}`,
            type: 'shelter',
            description: `Test shelter ${i + 1} for filtering`,
            address: `${100 + i} Filter Street`,
            phone: `+123456789${i}`,
            email: `filter-shelter-${i}-${Date.now()}@example.com`
          },
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        testOrganizations.push(response.data);
      }
    });

    test('Should filter organizations by shelter type', async () => {
      const response = await axios.get(
        'http://localhost:3000/api/organizations?type=shelter',
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data.data)).toBe(true);
      expect(response.data.data.data.length).toBeGreaterThan(0);
      
      // All returned organizations should be of type 'shelter'
      response.data.forEach(org => {
        expect(org.type).toBe('shelter');
      });
    });

    test('Should fail with invalid type filter', async () => {
      try {
        await axios.get(
          'http://localhost:3000/api/organizations?type=invalid_type',
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.error).toBe('Invalid query parameters');
      }
    });

    test('Should return all organizations when no type filter is applied', async () => {
      const response = await axios.get(
        'http://localhost:3000/api/organizations',
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data.data)).toBe(true);
      expect(response.data.data.data.length).toBeGreaterThan(0);
    });
  });

  describe('Organization Type Validation Edge Cases', () => {
    test('Should handle null type', async () => {
      const organizationData = {
        name: 'Null Type Organization',
        type: null,
        description: 'Organization with null type',
        email: 'null-type@example.com'
      };

      try {
        await axios.post(
          'http://localhost:3000/api/organizations',
          organizationData,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });

    test('Should handle case sensitivity', async () => {
      const organizationData = {
        name: 'Case Sensitive Type Organization',
        type: 'SHELTER', // Uppercase
        description: 'Organization with uppercase type',
        email: 'case-sensitive@example.com'
      };

      try {
        await axios.post(
          'http://localhost:3000/api/organizations',
          organizationData,
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        fail('Should have thrown an error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.error).toBe('Validation failed');
        expect(error.response.data.details).toBeDefined();
      }
    });
  });

  // Test language switching
  describe('Language Support', () => {
    test('Should support different languages', async () => {
      // Test in English
      currentLanguage = 'en';
      let response = await axios.get(
        'http://localhost:3000/api/organizations/types/shelter',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'Accept-Language': currentLanguage
          }
        }
      );
      expect(response.data.data.data.name).toBe(t('organizations.types.shelter.name', currentLanguage));

      // Test in Spanish
      currentLanguage = 'es';
      response = await axios.get(
        'http://localhost:3000/api/organizations/types/shelter',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'Accept-Language': currentLanguage
          }
        }
      );
      expect(response.data.data.data.name).toBe(t('organizations.types.shelter.name', currentLanguage));
    });
  });
}); 