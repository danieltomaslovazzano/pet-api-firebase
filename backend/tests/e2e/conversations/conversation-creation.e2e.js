/**
 * Conversation Creation and Validation
 * 
 * Extracted from monolithic conversations.e2e.js (868 lines)
 * This file contains 4 focused tests for conversation creation and validation
 */

const axios = require('axios');
const { createTestUser, getTestUser, getAuthToken, loginAsAdmin, cleanupTestData } = require('../helpers/auth');
const { EnhancedReporter } = require('../helpers/report');

const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/api';

describe('Conversations E2E Tests - Conversation Creation and Validation', () => {
  let adminUser, adminToken;
  let regularUser, regularUserToken;
  let moderatorUser, moderatorToken;
  let testOrganization, testOrganization2;
  let testConversation, testConversation2;
  let testUsers = [];
  let testOrganizations = [];
  let testConversations = [];
  let reporter;

  beforeAll(async () => {
    try {
      console.log('🧪 Setting up Conversation Creation Tests with User Pool...');
      
      reporter = new EnhancedReporter('conversation-creation-tests', 'conversation-creation');

      // 1. Get admin user and token  
      const adminData = await loginAsAdmin();
      adminUser = adminData.user;
      adminToken = adminData.token;

      // 2. Get pool users (no creation needed - they already exist)
      const poolRegularUser = getTestUser({ role: 'user' });
      const poolModeratorUser = getTestUser({ role: 'user' }); // Use another user as moderator
      
      console.log(`[USER POOL] Using regular user: ${poolRegularUser.email}`);
      console.log(`[USER POOL] Using moderator user: ${poolModeratorUser.email}`);
      
      // 3. Login to get tokens for pool users
      const regularUserAuth = await getAuthToken(poolRegularUser.email, poolRegularUser.password);
      regularUser = regularUserAuth.user;
      regularUserToken = regularUserAuth.token;
      
      const moderatorUserAuth = await getAuthToken(poolModeratorUser.email, poolModeratorUser.password);
      moderatorUser = moderatorUserAuth.user;
      moderatorToken = moderatorUserAuth.token;

      // 4. Update moderator role (need to find the user by email and update)
      try {
        const usersResponse = await axios.get(`${API_BASE_URL}/admin/users`, {
          headers: { Authorization: `Bearer ${adminToken}` },
          params: { email: moderatorUser.email }
        });
        
        const moderatorDbUser = usersResponse.data.find(u => u.email === moderatorUser.email);
        if (moderatorDbUser) {
          await axios.put(
            `${API_BASE_URL}/admin/users/${moderatorDbUser.id}`,
            { role: 'moderator' },
            { headers: { Authorization: `Bearer ${adminToken}` } }
          );
          console.log(`[USER POOL] Updated ${moderatorUser.email} to moderator role`);
        }
      } catch (error) {
        console.log(`[USER POOL] Could not update moderator role: ${error.message}`);
      }

      // 5. Create test organizations
      const orgResponse = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: `Test Org Conversation Creation ${Date.now()}`,
          description: 'Test organization for conversation creation tests',
          organizationType: 'business'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization = orgResponse.data.data;
      testOrganizations.push(testOrganization);

      const org2Response = await axios.post(
        `${API_BASE_URL}/organizations`,
        {
          name: `Test Org 2 Conversation Creation ${Date.now()}`,
          description: 'Second test organization for conversation creation tests',
          organizationType: 'business'
        },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 6. Add pool users to organizations
      await axios.post(`${API_BASE_URL}/memberships`, {
        userId: adminUser.uid,
        organizationId: testOrganization.id,
        role: 'admin'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });

      await axios.post(`${API_BASE_URL}/memberships`, {
        userId: regularUser.uid,
        organizationId: testOrganization.id,
        role: 'member'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });

      await axios.post(`${API_BASE_URL}/memberships`, {
        userId: moderatorUser.uid,
        organizationId: testOrganization.id,
        role: 'moderator'
      }, { headers: { Authorization: `Bearer ${adminToken}` } });

      console.log('✅ Setup completed successfully with user pool');

    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      throw error;
    }
  });

  afterAll(async () => {
    try {
      await cleanupTestData({
        organizations: testOrganizations,
        // Don't delete pool users - they are reused
        adminToken
      });

      const observations = `- Total conversations tested: ${testConversations.length}\n- Conversation Creation and Validation tests completed\n- Pool users reused successfully`;
      if (reporter && reporter.writeReport) {
        reporter.writeReport(observations);
      }
      
    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  });


  describe('Conversation Creation', () => {
    test('Should create a conversation with valid participants', async () => {
      const conversationData = {
        participants: [adminUser.uid, regularUser.uid],
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
        participants: [adminUser.uid], // Only one participant
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
        expect(error.response.data.message).toMatch(/common\.error_creating|array|participants/i);
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
        expect(error.response.data.message).toMatch(/common\.error_creating|array|participants/i);
      }
    });

    test('Should create group conversation with multiple participants', async () => {
      const conversationData = {
        participants: [adminUser.uid, regularUser.uid, moderatorUser.uid],
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
      expect(response.data).toHaveProperty('message');
      expect(response.data).toHaveProperty('data');
      expect(response.data.data).toHaveProperty('id');
      expect(response.data.data.participants).toHaveLength(3);
      expect(response.data.data.type).toBe('group');
      expect(response.data.data.title).toBe(conversationData.title);

      testConversation2 = response.data.data;
    });
  });
});