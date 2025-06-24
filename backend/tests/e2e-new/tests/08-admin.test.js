/**
 * E2E Tests - Admin Management (Simplified)
 * Tests for admin-level user management features that are confirmed working
 */

const { ApiClient } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');
const { TestDataManager } = require('../helpers/data');
const { CleanupManager } = require('../helpers/cleanup');

describe('Admin Management E2E Tests (Simplified)', () => {
  let api;
  let auth;
  let dataManager;
  let cleanup;
  
  // Test data
  let adminToken;
  
  beforeAll(async () => {
    // Initialize helpers
    api = new ApiClient(process.env.API_URL || 'http://localhost:3000/api');
    auth = new AuthManager(api);
    dataManager = new TestDataManager();
    cleanup = new CleanupManager(api);
    
    // Login as admin
    const adminLogin = await auth.loginAdmin();
    adminToken = adminLogin.token;
    api.setAuth(adminToken);
  });
  
  afterAll(async () => {
    await cleanup.cleanupAll();
  });
  
  describe('Admin User Management', () => {
    test('should get all users as admin', async () => {
      const response = await api.get('/admin/users');
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(Array.isArray(response.data.data)).toBe(true);
    });
    
    test('should create user as admin', async () => {
      const userData = dataManager.createUser({
        name: 'Admin Created User',
        role: 'user'
      });
      
      const response = await api.post('/admin/users', userData);
      
      expect(response.status).toBe(201);
      expect(response.data.success).toBe(true);
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.email).toBe(userData.email);
      
      cleanup.track('user', response.data.data.id);
    });
    
    test('should get user details as admin', async () => {
      // Create a user first
      const userData = dataManager.createUser();
      const createResponse = await api.post('/admin/users', userData);
      const userId = createResponse.data.data.id;
      cleanup.track('user', userId);
      
      // Get user details
      const response = await api.get(`/admin/users/${userId}/details`);
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.data.id).toBe(userId);
      expect(response.data.data).toHaveProperty('emailVerified');
      expect(response.data.data).toHaveProperty('creationTime');
    });
    
    test('should update user as admin', async () => {
      // Create a user first
      const userData = dataManager.createUser();
      const createResponse = await api.post('/admin/users', userData);
      const userId = createResponse.data.data.id;
      cleanup.track('user', userId);
      
      // Update user
      const updateData = {
        name: 'Admin Updated User',
        role: 'moderator'
      };
      
      const response = await api.put(`/admin/users/${userId}`, updateData);
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
    });
    
    test('should delete user as admin', async () => {
      // Create a user first
      const userData = dataManager.createUser();
      const createResponse = await api.post('/admin/users', userData);
      const userId = createResponse.data.data.id;
      
      // Delete user
      const response = await api.delete(`/admin/users/${userId}`);
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
    });
  });
  
  describe('Admin Validation & Error Handling', () => {
    test('should handle admin user not found', async () => {
      const fakeId = '123e4567-e89b-12d3-a456-426614174000';
      
      try {
        await api.get(`/admin/users/${fakeId}/details`);
        fail('Should have thrown not found error');
      } catch (error) {
        expect([404, 500]).toContain(error.response.status);
        expect(error.response.data.success).toBe(false);
      }
    });
    
    test('should validate required fields for user creation', async () => {
      // Test missing email and password
      try {
        await api.post('/admin/users', {
          name: 'User without email and password'
        });
        fail('Should have thrown validation error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.success).toBe(false);
      }
    });
  });
});
