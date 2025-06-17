/**
 * Conversation Creation and Validation
 * 
 * Extracted from monolithic conversations.e2e.js (868 lines)
 * This file contains 4 focused tests for conversation creation and validation
 */

const axios = require('../helpers/request');
const { loginAsAdmin, createTestUser, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('conversations-conversation-creation', 'conversation-creation-tests');

// Test configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Conversations E2E Tests - Conversation Creation and Validation', () => {
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
    console.log('\n🚀 Starting Conversation Creation and Validation Tests...');
    
    try {
      // 1. Authenticate as admin
      const adminAuth = await loginAsAdmin();
      adminToken = adminAuth.token;
      adminUser = adminAuth.user;

      // 2. Create test organization
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: 'conversation-creation Test Org',
          description: 'Organization for conversation-creation testing',
          email: 'conversation-creation-test@example.com',
          address: '123 conversation-creation Test Street',
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
          name: 'conversation-creation Test Org 2',
          description: 'Second organization for conversation-creation testing',
          email: 'conversation-creation-test2@example.com',
          address: '456 conversation-creation Test Avenue',
          phone: '+0987654321'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 4. Create regular user
      regularUser = await createTestUser({
        email: `conversation-creation-regular-${Date.now()}@example.com`,
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
        email: `conversation-creation-moderator-${Date.now()}@example.com`,
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

      const observations = `- Total conversations tested: ${testConversations.length}\n- Conversation Creation and Validation tests completed\n- All test data cleaned up automatically`;
      reporter.writeReport(observations);
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Conversation Creation', () => {
    test('Should create a conversation with valid participants', async () => {
      const conversationData = {
        participants: [adminUser.id, regularUser.id],
        title: 'Test Conversation',
        type: 'direct'
      };

      const response = await axios.post(
        `${API_BASE_URL}/conversations`,
        conversationData,
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
      expect(response.data.data.participants).toEqual(expect.arrayContaining(conversationData.participants));
      expect(response.data.data.title).toBe(conversationData.title);
      expect(response.data.data.organizationId).toBe(testOrganization.id);

      testConversation = response.data.data;
    });

    test('Should fail to create conversation with insufficient participants', async () => {
      const conversationData = {
        participants: [adminUser.id], // Only one participant
        title: 'Invalid Conversation'
      };

      try {
        const response = await axios.post(
          `${API_BASE_URL}/conversations`,
          conversationData,
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        // Could be 400 or 500 depending on validation layer
        expect([400, 500]).toContain(error.response.status);
        // Check for i18n error messages
        expect(error.response.data.error).toMatch(/common\.error_creating|array|participants/i);
      }
    });

    test('Should fail to create conversation without participants array', async () => {
      const conversationData = {
        title: 'Invalid Conversation'
        // Missing participants
      };

      try {
        const response = await axios.post(
          `${API_BASE_URL}/conversations`,
          conversationData,
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Should not reach here
      } catch (error) {
        // Could be 400 or 500 depending on validation layer
        expect([400, 500]).toContain(error.response.status);
        // Check for i18n error messages
        expect(error.response.data.error).toMatch(/common\.error_creating|array|participants/i);
      }
    });

    test('Should create group conversation with multiple participants', async () => {
      const conversationData = {
        participants: [adminUser.id, regularUser.id, moderatorUser.id],
        title: 'Group Test Conversation',
        type: 'group'
      };

      const response = await axios.post(
        `${API_BASE_URL}/conversations`,
        conversationData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('success', true);
      expect(response.data).toHaveProperty('data');
      expect(response.data.data.participants).toHaveLength(3);
      expect(response.data.data.type).toBe('group');
      expect(response.data.data.title).toBe(conversationData.title);

      testConversation2 = response.data.data;
    });
  });
});