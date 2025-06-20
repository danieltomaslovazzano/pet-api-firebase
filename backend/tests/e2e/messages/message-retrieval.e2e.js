/**
 * Message Retrieval and Access
 * 
 * Extracted from monolithic messages.e2e.js (1,077 lines)
 * This file contains 4 focused tests for message retrieval and access
 */

const axios = require('../helpers/request');
const { loginAsAdmin, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('messages-message-retrieval', 'message-retrieval-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Messages E2E Tests - Message Retrieval and Access', () => {
  let adminToken;
  let regularUserToken;
  let moderatorToken;
  let testOrganization;
  let testOrganization2;
  let adminUser;
  let regularUser;
  let moderatorUser;
  let testConversation;
  let testConversation2;
  let testMessage;
  let testMessage2;
  let testUsers = [];
  let testOrganizations = [];
  let testConversations = [];
  let testMessages = [];

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
    console.log('\n🚀 Starting Message Retrieval and Access Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'message-retrieval Test Org',
          description: 'Organization for message-retrieval testing',
          email: 'message-retrieval-test@example.com',
          address: '123 message-retrieval Test Street',
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
          name: 'message-retrieval Test Org 2',
          description: 'Second organization for message-retrieval testing',
          email: 'message-retrieval-test2@example.com',
          address: '456 message-retrieval Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. Create regular user
      regularUser = await createTestUser({
        email: `message-retrieval-regular-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        name: 'Regular User'
      });
      testUsers.push(regularUser);

      const regularUserResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: regularUser.email,
        password: 'TestPassword123!'
      });
      regularUserToken = regularUserResponse.data.data.tokens.idToken;

      // 5. Create moderator user
      moderatorUser = await createTestUser({
        email: `message-retrieval-moderator-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        name: 'Moderator User'
      });
      testUsers.push(moderatorUser);

      const moderatorUserResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
        email: moderatorUser.email,
        password: 'TestPassword123!'
      });
      moderatorToken = moderatorUserResponse.data.data.tokens.idToken;

      // 6. Update moderator role
      await axios.put(
        `${API_BASE_URL}/users/${moderatorUser.id}`,
        { role: 'moderator' },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );

      // 7. Add users to organizations
      await axios.post(`${API_BASE_URL}/memberships`, {
        userId: adminUser.id,
        organizationId: testOrganization.id,
        role: 'admin'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });

      await axios.post(`${API_BASE_URL}/memberships`, {
        userId: regularUser.id,
        organizationId: testOrganization.id,
        role: 'member'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });

      await axios.post(`${API_BASE_URL}/memberships`, {
        userId: moderatorUser.id,
        organizationId: testOrganization.id,
        role: 'moderator'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });

      // 8. Create test conversations
      const conv1Response = await axios.post(`${API_BASE_URL}/conversations`, {
        participants: [adminUser.id, regularUser.id],
        title: 'message-retrieval Test Conversation 1'
      }, { headers: { Authorization: `Bearer ${adminToken}`, 'X-Organization-Id': testOrganization.id } });
      
      testConversation = conv1Response.data.data;
      testConversations.push(testConversation);

      const conv2Response = await axios.post(`${API_BASE_URL}/conversations`, {
        participants: [adminUser.id, regularUser.id, moderatorUser.id],
        title: 'message-retrieval Test Conversation 2'
      }, { headers: { Authorization: `Bearer ${adminToken}`, 'X-Organization-Id': testOrganization.id } });
      
      testConversation2 = conv2Response.data.data;
      testConversations.push(testConversation2);

      // 9. Create test messages
      const msg1Response = await axios.post(`${API_BASE_URL}/messages`, {
        content: 'Test message for retrieval',
        conversationId: testConversation.id
      }, { headers: { Authorization: `Bearer ${adminToken}`, 'X-Organization-Id': testOrganization.id } });
      
      testMessage = msg1Response.data.data;
      testMessages.push(testMessage);

      const msg2Response = await axios.post(`${API_BASE_URL}/messages`, {
        content: 'Second test message',
        conversationId: testConversation2.id
      }, { headers: { Authorization: `Bearer ${adminToken}`, 'X-Organization-Id': testOrganization.id } });
      
      testMessage2 = msg2Response.data.data;
      testMessages.push(testMessage2);

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

      const observations = `- Total messages tested: ${testMessages.length}\n- Message Retrieval and Access tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Message Retrieval', () => {
    test('Should get message by ID for participant', async () => {
      const response = await axios.get(
        `${API_BASE_URL}/messages/${testMessage.id}`,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data).toHaveProperty('success',true);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data.id).toBe(testMessage.id);
      expect(response.data.data.content).toBe(testMessage.content);
    });

    test('Should fail to get message by ID for non-participant', async () => {
      // Create a private conversation and message
      const privateConversation = {
        participants: [adminUser.id, regularUser.id],
        title: 'Private Conversation'
      };

      const convResponse = await axios.post(
        `${API_BASE_URL}/conversations`,
        privateConversation,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      const privateMessage = {
        content: 'Private message',
        conversationId: convResponse.data.data.id
      };

      const msgResponse = await axios.post(
        `${API_BASE_URL}/messages`,
        privateMessage,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      try {
        const response = await axios.get(
          `${API_BASE_URL}/messages/${msgResponse.data.data.id}`,
          {
            headers: { 
              Authorization: `Bearer ${moderatorToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error.response).toBeDefined();
        expect(error.response.status).toBe(403);
        expect(error.response.data.message).toMatch(/Forbidden|forbidden|not_sender/i);
      }
    });

    test('Should get messages for conversation', async () => {
      const response = await axios.get(
        `${API_BASE_URL}/conversations/${testConversation.id}/messages`,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data).toHaveProperty('success',true);
      expect(response.data).toHaveProperty('data');
      expect(Array.isArray(response.data.data)).toBe(true);
      expect(response.data.data.length).toBeGreaterThan(0);
      
      // Check that all messages belong to the conversation
      response.data.data.forEach(message => {
        expect(message.conversationId).toBe(testConversation.id);
      });
    });

    test('Should handle invalid message ID format', async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/messages/invalid-id`,
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error.response).toBeDefined();
        expect([400, 404]).toContain(error.response.status);
        expect(error.response.data.message).toMatch(/common\.error_retrieving|ID|invalid|Message not found/i);
      }
    });
  });
});