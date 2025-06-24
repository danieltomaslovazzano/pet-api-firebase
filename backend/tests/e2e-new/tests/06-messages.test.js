/**
 * E2E Tests - Messages (Simplified)
 * Tests for message functionality using existing admin credentials
 */

const { ApiClient } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');
const { TestDataManager } = require('../helpers/data');
const { CleanupManager } = require('../helpers/cleanup');

describe('Messages E2E Tests (Simplified)', () => {
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
  
  describe('Message Basic Tests', () => {
    test('should handle message validation errors', async () => {
      // Test missing conversation ID validation
      const messageData = dataManager.createMessage({
        content: 'Message without conversation ID'
        // Missing conversationId
      });
      
      try {
        await api.post('/messages', messageData);
        fail('Should have thrown validation error');
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.success).toBe(false);
      }
    });
    
    test('should handle invalid conversation ID', async () => {
      const messageData = dataManager.createMessage({
        conversationId: '123e4567-e89b-12d3-a456-426614174000', // Non-existent
        content: 'Message for invalid conversation'
      });
      
      try {
        await api.post('/messages', messageData);
        fail('Should have thrown not found error');
      } catch (error) {
        expect([400, 404]).toContain(error.response.status);
        expect(error.response.data.success).toBe(false);
      }
    });
    
    test('should handle message not found', async () => {
      const fakeId = '123e4567-e89b-12d3-a456-426614174000';
      
      try {
        await api.get(`/messages/message/${fakeId}`);
        fail('Should have thrown not found error');
      } catch (error) {
        expect(error.response.status).toBe(404);
        expect(error.response.data.success).toBe(false);
      }
    });
    
    test('should handle invalid message ID format', async () => {
      try {
        await api.get('/messages/message/invalid-id');
        fail('Should have thrown validation error');
      } catch (error) {
        expect([400, 404]).toContain(error.response.status);
        expect(error.response.data.success).toBe(false);
      }
    });
  });
});
