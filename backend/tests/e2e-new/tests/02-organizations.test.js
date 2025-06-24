/**
 * Organizations Tests - Organization management E2E Tests
 * Tests for organization CRUD operations and organization types
 */

const { ApiClient, expectSuccess, expectError } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');
const { TestDataManager } = require('../helpers/data');
const { CleanupManager } = require('../helpers/cleanup');

describe('Organizations E2E Tests', () => {
  let api;
  let authManager;
  let dataManager;
  let cleanup;
  let adminToken;

  beforeAll(async () => {
    api = new ApiClient();
    authManager = new AuthManager();
    dataManager = new TestDataManager();
    cleanup = new CleanupManager();
    cleanup.setApiClient(api);

    // Login as admin for all tests
    const adminLogin = await authManager.loginAdmin();
    adminToken = adminLogin.token;
    api.setAuth(adminToken);
  });

  afterEach(async () => {
    await cleanup.cleanupAll();
  });

  afterAll(() => {
    authManager.clearTokens();
    api.setAuth(null);
  });

  describe('Organization CRUD Operations', () => {
    test('should create organization as admin', async () => {
      // Arrange
      const orgData = dataManager.createOrganization({
        name: 'Test Clinic E2E',
        type: 'shelter'
      });

      // Act
      const response = await api.post('/admin/organizations', orgData);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.name).toBe(orgData.name);
      expect(response.data.data.type).toBe(orgData.type);

      // Track for cleanup
      cleanup.track('organization', response.data.data.id);
    });

    test('should get organization details', async () => {
      // Arrange - Create organization first
      const orgData = dataManager.createOrganization();
      const createResponse = await api.post('/admin/organizations', orgData);
      const orgId = createResponse.data.data.id;
      cleanup.track('organization', orgId);

      // Act
      const response = await api.get(`/organizations/${orgId}`);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(response.data.data.id).toBe(orgId);
      expect(response.data.data.name).toBe(orgData.name);
      expect(response.data.data.type).toBe(orgData.type);
    });

    test('should update organization', async () => {
      // Arrange - Create organization first
      const orgData = dataManager.createOrganization();
      const createResponse = await api.post('/admin/organizations', orgData);
      const orgId = createResponse.data.data.id;
      cleanup.track('organization', orgId);

      const updateData = {
        name: 'Updated Clinic Name',
        description: 'Updated description for testing'
      };

      // Act
      const response = await api.put(`/admin/organizations/${orgId}`, updateData);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(response.data.data.name).toBe(updateData.name);
      expect(response.data.data.description).toBe(updateData.description);
    });

    test('should delete organization', async () => {
      // Arrange - Create organization first
      const orgData = dataManager.createOrganization();
      const createResponse = await api.post('/admin/organizations', orgData);
      const orgId = createResponse.data.data.id;

      // Act
      const response = await api.delete(`/admin/organizations/${orgId}`);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);

      // Verify organization is deleted
      try {
        await api.get(`/organizations/${orgId}`);
        fail('Should not be able to get deleted organization');
      } catch (error) {
        expectError(error, 404);
      }
    });

    test('should prevent non-admin from creating organization', async () => {
      // Arrange - Remove admin auth temporarily
      api.setAuth(null);
      const orgData = dataManager.createOrganization();

      // Act & Assert
      try {
        await api.post('/admin/organizations', orgData);
        fail('Should not allow non-admin to create organization');
      } catch (error) {
        expectError(error, 401);
        expect(error.response.data.success).toBe(false);
      } finally {
        // Restore admin auth
        api.setAuth(adminToken);
      }
    });
  });

  describe('Organization Types', () => {
    test('should get organization types (public endpoint)', async () => {
      // Arrange - Keep auth since this endpoint requires authentication
      // (removing auth comment as it's not actually public)

      // Act
      const response = await api.get('/organizations/types');

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(typeof response.data.data).toBe('object');
      expect(Object.keys(response.data.data).length).toBeGreaterThan(0);

      // Verify structure of organization types
      const types = response.data.data;
      expect(types).toHaveProperty('shelter');
      expect(types.shelter).toHaveProperty('id');
      expect(types.shelter).toHaveProperty('name');
      expect(types.shelter).toHaveProperty('description');

      // Common organization type should exist
      expect(types.shelter.name).toContain('Protectora');
    });
  });

  describe('Organization Validation', () => {
    test('should validate required fields when creating organization', async () => {
      // Arrange - Invalid data (missing required fields)
      // Keep auth since we need to test validation, not authentication
      const invalidData = {
        description: 'Test description without name'
        // name and email missing
      };

      // Act & Assert
      try {
        await api.post('/admin/organizations', invalidData);
        fail('Should validate required fields');
      } catch (error) {
        expectError(error, 400);
        expect(error.response.data.success).toBe(false);
      }
    });

    test('should validate organization type exists', async () => {
      // Arrange - Invalid organization type
      // Keep auth since we need to test validation, not authentication
      const invalidOrgData = dataManager.createOrganization({
        type: 'invalid_type_that_does_not_exist'
      });

      // Act & Assert
      try {
        await api.post('/admin/organizations', invalidOrgData);
        fail('Should validate organization type');
      } catch (error) {
        expectError(error, 400);
        expect(error.response.data.success).toBe(false);
      }
    });
  });
}); 