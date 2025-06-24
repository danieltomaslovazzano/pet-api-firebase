/**
 * E2E Tests - Users Management
 * Tests for user CRUD operations and management features
 */

const { ApiClient } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');
const { TestDataManager } = require('../helpers/data');
const { CleanupManager } = require('../helpers/cleanup');

describe('Users E2E Tests', () => {
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
  
  describe('User CRUD Operations', () => {
    test('should create user successfully', async () => {
      const userData = dataManager.createUser({
        name: 'Test New User',
        role: 'user'
      });
      
      const response = await api.post('/users', userData);
      
      expect(response.status).toBe(201);
      expect(response.data.success).toBe(true);
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.email).toBe(userData.email);
      expect(response.data.data.name).toBe(userData.name);
      
      cleanup.track('user', response.data.data.id);
    });
    
    test('should get users list', async () => {
      const response = await api.get('/users');
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(Array.isArray(response.data.data)).toBe(true);
    });
    
    test('should get user by ID', async () => {
      // Create a user first
      const userData = dataManager.createUser();
      const createResponse = await api.post('/users', userData);
      const userId = createResponse.data.data.id;
      cleanup.track('user', userId);
      
      // Get the user
      const response = await api.get(`/users/${userId}`);
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.data.id).toBe(userId);
      expect(response.data.data.email).toBe(userData.email);
    });
    
    test('should get current user profile', async () => {
      const response = await api.get('/users/me');
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data).toHaveProperty('email');
    });
    
    test('should update user information', async () => {
      // Create a user first
      const userData = dataManager.createUser();
      const createResponse = await api.post('/users', userData);
      const userId = createResponse.data.data.id;
      cleanup.track('user', userId);
      
      // Update the user
      const updateData = {
        name: 'Updated Test User',
        phone: '+1234567890'
      };
      
      const response = await api.put(`/users/${userId}`, updateData);
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.data.name).toBe(updateData.name);
    });
    
    test('should delete user', async () => {
      // Create a user first
      const userData = dataManager.createUser();
      const createResponse = await api.post('/users', userData);
      const userId = createResponse.data.data.id;
      
      // Delete the user
      const response = await api.delete(`/users/${userId}`);
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      
      // Verify user is deleted
      try {
        await api.get(`/users/${userId}`);
        fail('Should not be able to get deleted user');
      } catch (error) {
        expect([404, 500]).toContain(error.response.status);
      }
    });
  });
  
  describe('User Social Features', () => {
    test('should block user', async () => {
      // Create two users
      const user1Data = dataManager.createUser({ name: 'User 1' });
      const user2Data = dataManager.createUser({ name: 'User 2' });
      
      const user1Response = await api.post('/users', user1Data);
      const user2Response = await api.post('/users', user2Data);
      
      const user1Id = user1Response.data.data.id;
      const user2Id = user2Response.data.data.id;
      
      cleanup.track('user', user1Id);
      cleanup.track('user', user2Id);
      
      // Block user2 by user1
      const response = await api.post(`/users/${user1Id}/block`, {
        blockedUserId: user2Id
      });
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
    });
    
    test('should unblock user', async () => {
      // Create two users
      const user1Data = dataManager.createUser({ name: 'User 1' });
      const user2Data = dataManager.createUser({ name: 'User 2' });
      
      const user1Response = await api.post('/users', user1Data);
      const user2Response = await api.post('/users', user2Data);
      
      const user1Id = user1Response.data.data.id;
      const user2Id = user2Response.data.data.id;
      
      cleanup.track('user', user1Id);
      cleanup.track('user', user2Id);
      
      // First block, then unblock
      await api.post(`/users/${user1Id}/block`, { blockedUserId: user2Id });
      
      const response = await api.post(`/users/${user1Id}/unblock`, {
        blockedUserId: user2Id
      });
      
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
    });
  });
  
  describe('User Validation & Error Handling', () => {
    test('should validate required fields when creating user', async () => {
      const invalidData = {
        name: 'User without email and password'
        // Missing email and password
      };
      
      try {
        await api.post('/users', invalidData);
        fail('Should have thrown validation error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.success).toBe(false);
      }
    });
    
    test('should handle user not found', async () => {
      const fakeId = '123e4567-e89b-12d3-a456-426614174000';
      
      try {
        await api.get(`/users/${fakeId}`);
        fail('Should have thrown not found error');
      } catch (error) {
        expect([404, 500]).toContain(error.response.status);
        expect(error.response.data.success).toBe(false);
      }
    });
    
    test('should handle invalid user ID format', async () => {
      try {
        await api.get('/users/invalid-id');
        fail('Should have thrown validation error');
      } catch (error) {
        expect([400, 404, 500]).toContain(error.response.status);
        expect(error.response.data.success).toBe(false);
      }
    });
  });
});
