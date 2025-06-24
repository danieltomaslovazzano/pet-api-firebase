/**
 * E2E Tests - Conversations (Simplified)
 * Tests for conversation functionality using existing admin credentials
 */

const { ApiClient } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');
const { TestDataManager } = require('../helpers/data');
const { CleanupManager } = require('../helpers/cleanup');

describe('Conversations E2E Tests (Simplified)', () => {
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
  
  describe('Conversation Basic Tests', () => {
    test('should handle conversation validation errors', async () => {
      // Test empty participants validation
      const conversationData = dataManager.createConversation({
        participants: [] // Empty participants should fail
      });
      
      try {
        await api.post('/conversations', conversationData);
        fail('Should have thrown validation error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.success).toBe(false);
      }
    });
    
    test('should handle conversation not found', async () => {
      const fakeId = '123e4567-e89b-12d3-a456-426614174000';
      
      try {
        await api.get(`/conversations/${fakeId}`);
        fail('Should have thrown not found error');
      } catch (error) {
        expect(error.response.status).toBe(404);
        expect(error.response.data.success).toBe(false);
      }
    });
    
    test('should handle invalid conversation ID format', async () => {
      try {
        await api.get('/conversations/invalid-id');
        fail('Should have thrown validation error');
      } catch (error) {
        expect([400, 404]).toContain(error.response.status);
        expect(error.response.data.success).toBe(false);
      }
    });
  });
});
