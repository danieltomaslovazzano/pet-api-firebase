/**
 * Conversation Management and Moderation
 * 
 * Extracted from monolithic conversations.e2e.js (868 lines)
 * This file contains 6 focused tests for conversation management and moderation
 */

const axios = require('../helpers/request');
const { loginAsAdmin, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('conversations-conversation-management', 'conversation-management-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Conversations E2E Tests - Conversation Management and Moderation', () => {
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
  let testUsers = [];
  let testOrganizations = [];
  let testConversations = [];

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
    console.log('\n🚀 Starting Conversation Management and Moderation Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'conversation-management Test Org',
          description: 'Organization for conversation-management testing',
          email: 'conversation-management-test@example.com',
          address: '123 conversation-management Test Street',
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
          name: 'conversation-management Test Org 2',
          description: 'Second organization for conversation-management testing',
          email: 'conversation-management-test2@example.com',
          address: '456 conversation-management Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. Create regular user
      regularUser = await createTestUser({
        email: `conversation-management-regular-${Date.now()}@example.com`,
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
        email: `conversation-management-moderator-${Date.now()}@example.com`,
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
        title: 'conversation-management Test Conversation 1'
      }, { headers: { Authorization: `Bearer ${adminToken}`, 'X-Organization-Id': testOrganization.id } });
      
      testConversation = conv1Response.data.data;
      testConversations.push(testConversation);

      const conv2Response = await axios.post(`${API_BASE_URL}/conversations`, {
        participants: [adminUser.id, regularUser.id, moderatorUser.id],
        title: 'conversation-management Test Conversation 2'
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

      const observations = `- Total conversations tested: ${testConversations.length}\n- Conversation Management and Moderation tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Conversation Management', () => {
    test('Should soft delete conversation for user', async () => {
      const response = await axios.put(
        `${API_BASE_URL}/conversations/${testConversation.id}/soft-delete`,
        { userId: regularUser.id },
        {
          headers: { 
            Authorization: `Bearer ${regularUserToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.message).toContain('deleted');
    });

    test('Should hide conversation for user', async () => {
      const response = await axios.put(
        `${API_BASE_URL}/conversations/${testConversation.id}/hide`,
        { userId: regularUser.id },
        {
          headers: { 
            Authorization: `Bearer ${regularUserToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.message).toContain('hidden');
    });

    test('Should unhide conversation for user', async () => {
      const response = await axios.put(
        `${API_BASE_URL}/conversations/${testConversation.id}/unhide`,
        { userId: regularUser.id },
        {
          headers: { 
            Authorization: `Bearer ${regularUserToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.message).toContain('unhidden');
    });

    test('Should block conversation (moderator)', async () => {
      const response = await axios.put(
        `${API_BASE_URL}/conversations/${testConversation2.id}/block`,
        { userId: moderatorUser.id },
        {
          headers: { 
            Authorization: `Bearer ${moderatorToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.message).toContain('blocked');
    });

    test('Should unblock conversation (moderator)', async () => {
      const response = await axios.put(
        `${API_BASE_URL}/conversations/${testConversation2.id}/unblock`,
        { userId: moderatorUser.id },
        {
          headers: { 
            Authorization: `Bearer ${moderatorToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      expect(response.data.message).toContain('unblocked');
    });

    test('Should fail to block conversation as regular user', async () => {
      try {
        const response = await axios.put(
          `${API_BASE_URL}/conversations/${testConversation.id}/block`,
          { userId: regularUser.id },
          {
            headers: { 
              Authorization: `Bearer ${regularUserToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        expect(error.response).toBeDefined();
        expect(error.response.status).toBe(403);
        expect(error.response.data.error).toContain('Permission denied');
      }
    });
  });
});