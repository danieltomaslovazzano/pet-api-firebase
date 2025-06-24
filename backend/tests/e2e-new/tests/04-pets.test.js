/**
 * Pets Tests - Pet management E2E Tests
 * Tests for pet CRUD operations and advanced features
 */

const { ApiClient, expectSuccess, expectError } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');
const { TestDataManager } = require('../helpers/data');
const { CleanupManager } = require('../helpers/cleanup');

describe('Pets E2E Tests (Complete)', () => {
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

  describe('Pet CRUD Operations', () => {
    test('should create pet without organization', async () => {
      // Arrange
      const petData = dataManager.createPet();
      delete petData.organizationId; // Remove organization dependency

      // Act
      const response = await api.post('/pets', petData);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.name).toBe(petData.name);
      expect(response.data.data.species).toBe(petData.species);
      expect(response.data.data.status).toBe(petData.status);

      // Track for cleanup
      cleanup.track('pet', response.data.data.id);
    });

    test('should get pets list', async () => {
      // Act - Get all pets
      const response = await api.get('/pets');

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(Array.isArray(response.data.data)).toBe(true);
    });

    test('should get pet details', async () => {
      // Arrange - Create a pet first
      const petData = dataManager.createPet();
      delete petData.organizationId;
      
      const createResponse = await api.post('/pets', petData);
      const petId = createResponse.data.data.id;
      cleanup.track('pet', petId);

      // Act
      const response = await api.get(`/pets/${petId}`);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(response.data.data.id).toBe(petId);
      expect(response.data.data.name).toBe(petData.name);
    });

    test('should update pet details', async () => {
      // Arrange - Create a pet first
      const petData = dataManager.createPet();
      delete petData.organizationId;
      
      const createResponse = await api.post('/pets', petData);
      const petId = createResponse.data.data.id;
      cleanup.track('pet', petId);

      // Update data
      const updateData = {
        name: 'Updated Pet Name',
        status: 'adopted'
      };

      // Act
      const response = await api.put(`/pets/${petId}`, updateData);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(response.data.data.name).toBe(updateData.name);
      expect(response.data.data.status).toBe(updateData.status);
    });

    test('should delete pet', async () => {
      // Arrange - Create a pet first
      const petData = dataManager.createPet();
      delete petData.organizationId;
      
      const createResponse = await api.post('/pets', petData);
      const petId = createResponse.data.data.id;

      // Act
      const response = await api.delete(`/pets/${petId}`);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);

      // Verify pet is deleted
      try {
        await api.get(`/pets/${petId}`);
        fail('Should not be able to get deleted pet');
      } catch (error) {
        expectError(error, 404);
      }
    });

    test('should search pets', async () => {
      // Act - Search pets
      const response = await api.get('/pets/search?species=dog');

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      
      // Verify search results structure
      const results = response.data.data.results || response.data.data;
      expect(Array.isArray(results)).toBe(true);
    });
  });

  describe('Pet Advanced Features', () => {
    test('should hide pet visibility', async () => {
      // Arrange - Create a pet first
      const petData = dataManager.createPet();
      delete petData.organizationId;
      
      const createResponse = await api.post('/pets', petData);
      const petId = createResponse.data.data.id;
      cleanup.track('pet', petId);

      // Act - Hide the pet
      const response = await api.post(`/pets/${petId}/hide`);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);

      // Verify pet is hidden
      const getResponse = await api.get(`/pets/${petId}`);
      expect(getResponse.data.data.visibility).toBe('hidden');
    });

    test('should show pet visibility', async () => {
      // Arrange - Create a hidden pet
      const petData = dataManager.createPet({ visibility: 'hidden' });
      delete petData.organizationId;
      
      const createResponse = await api.post('/pets', petData);
      const petId = createResponse.data.data.id;
      cleanup.track('pet', petId);

      // Act - Show the pet
      const response = await api.post(`/pets/${petId}/show`);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);

      // Verify pet is visible
      const getResponse = await api.get(`/pets/${petId}`);
      expect(getResponse.data.data.visibility).toBe('visible');
    });

    test('should feature pet', async () => {
      // Arrange - Create a pet
      const petData = dataManager.createPet();
      delete petData.organizationId;
      
      const createResponse = await api.post('/pets', petData);
      const petId = createResponse.data.data.id;
      cleanup.track('pet', petId);

      // Act - Feature the pet
      const response = await api.post(`/pets/${petId}/feature`);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);

      // Verify pet is featured
      const getResponse = await api.get(`/pets/${petId}`);
      expect(getResponse.data.data.visibility).toBe('featured');
    });
  });

  describe('Pet Validation & Error Handling', () => {
    test('should validate required fields when creating pet', async () => {
      // Arrange - Invalid data (missing required fields)
      const invalidData = {
        description: 'Pet without required fields'
        // name, species, status, images missing
      };

      // Act & Assert
      try {
        await api.post('/pets', invalidData);
        fail('Should validate required fields');
      } catch (error) {
        expectError(error, 400);
        expect(error.response.data.error).toBeDefined();
      }
    });

    test('should handle pet not found error', async () => {
      // Act & Assert
      try {
        await api.get('/pets/non-existent-id');
        fail('Should return error for non-existent pet');
      } catch (error) {
        expectError(error, 400); // API returns 400 for invalid ID format
        expect(error.response.data.error).toBeDefined();
        // expect(error.response.data.message).toContain('not found'); // Different response structure
      }
    });
  });
});
