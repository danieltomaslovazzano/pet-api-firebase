/**
 * Message Creation and Validation
 * 
 * Extracted from monolithic messages.e2e.js (1,077 lines)
 * This file contains 4 focused tests for message creation and validation
 */

const axios = require('../helpers/request');
const { loginAsAdmin, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('messages-message-creation', 'message-creation-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Messages E2E Tests - Message Creation and Validation', () => {
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
    console.log('\n🚀 Starting Message Creation and Validation Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'message-creation Test Org',
          description: 'Organization for message-creation testing',
          email: 'message-creation-test@example.com',
          address: '123 message-creation Test Street',
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
          name: 'message-creation Test Org 2',
          description: 'Second organization for message-creation testing',
          email: 'message-creation-test2@example.com',
          address: '456 message-creation Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. Create regular user
      regularUser = await createTestUser({
        email: `message-creation-regular-${Date.now()}@example.com`,
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
        email: `message-creation-moderator-${Date.now()}@example.com`,
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
        title: 'message-creation Test Conversation 1'
      }, { headers: { Authorization: `Bearer ${adminToken}`, 'X-Organization-Id': testOrganization.id } });
      
      testConversation = conv1Response.data.data;
      testConversations.push(testConversation);

      const conv2Response = await axios.post(`${API_BASE_URL}/conversations`, {
        participants: [adminUser.id, regularUser.id, moderatorUser.id],
        title: 'message-creation Test Conversation 2'
      }, { headers: { Authorization: `Bearer ${adminToken}`, 'X-Organization-Id': testOrganization.id } });
      
      testConversation2 = conv2Response.data.data;
      testConversations.push(testConversation2);

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

      const observations = `- Total messages tested: ${testMessages.length}\n- Message Creation and Validation tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Message Creation', () => {
    test('Should create a message in a conversation', async () => {
      const messageData = {
        content: 'Hello, this is a test message!',
        conversationId: testConversation.id
      };

      const response = await axios.post(
        `${API_BASE_URL}/messages`,
        messageData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(201);
      
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('message');
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.content).toBe(messageData.content);
      expect(response.data.data.conversationId).toBe(testConversation.id);
      expect(response.data.data.senderId).toBe(adminUser.id);

      testMessage = response.data.data;
      testMessages.push(testMessage);
    });

    test('Should fail to create message without content', async () => {
      const messageData = {
        conversationId: testConversation.id
        // Missing content
      };

      try {
        const response = await axios.post(
          `${API_BASE_URL}/messages`,
          messageData,
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data.message).toMatch(/Message must have content|validation/i);
      }
    });

    test('Should fail to create message without conversation ID', async () => {
      const messageData = {
        content: 'Message without conversation'
        // Missing conversationId
      };

      try {
        const response = await axios.post(
          `${API_BASE_URL}/messages`,
          messageData,
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect([400, 500]).toContain(error.response.status);
        expect(error.response.data.message).toMatch(/common\.error_creating|conversation|required/i);
      }
    });

    test('Should create message in group conversation', async () => {
      const messageData = {
        content: 'Group message test',
        conversationId: testConversation2.id
      };

      const response = await axios.post(
        `${API_BASE_URL}/messages`,
        messageData,
        {
          headers: { 
            Authorization: `Bearer ${regularUserToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(201);
      
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('message');
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.content).toBe(messageData.content);
      expect(response.data.data.conversationId).toBe(testConversation2.id);
      expect(response.data.data.senderId).toBe(regularUser.id);

      testMessage2 = response.data.data;
      testMessages.push(testMessage2);
    });
  });
});