/**
 * Conversation API Integration Tests
 * 
 * This test suite focuses on testing the Conversation API endpoints.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

const request = require('supertest');
const app = require('../../app');
const { validUser } = require('../fixtures/userFixtures');
const { cleanupPostgresDb, testDataStore } = require('../helpers/testDbSetup');
const { generateAuthToken } = require('../helpers/authHelpers');

// Clean the test data store before tests
beforeEach(async () => {
  testDataStore.users = [];
  testDataStore.conversations = [];
  testDataStore.messages = [];
});

describe('Conversation API Integration Tests', () => {
  let user1Token;
  let user2Token;
  let user3Token;
  let user1;
  let user2;
  let user3;
  let testConversation;

  beforeEach(async () => {
    // Create test users
    user1 = validUser({ name: 'User 1' });
    user2 = validUser({ name: 'User 2' });
    user3 = validUser({ name: 'User 3' });
    testDataStore.users.push(user1, user2, user3);
    
    user1Token = generateAuthToken(user1);
    user2Token = generateAuthToken(user2);
    user3Token = generateAuthToken(user3);
  });

  describe('POST /api/conversations', () => {
    it('should create a new conversation', async () => {
      const conversationData = {
        title: 'Test Conversation',
        participantIds: [user1.id, user2.id]
      };

      const response = await request(app)
        .post('/api/conversations')
        .set('Authorization', `Bearer ${user1Token}`)
        .send(conversationData);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.title).toBe(conversationData.title);
      expect(response.body.participants).toHaveLength(2);
      expect(response.body.participants.map(p => p.id)).toContain(user1.id);
      expect(response.body.participants.map(p => p.id)).toContain(user2.id);
    });

    it('should prevent creating conversation with invalid participants', async () => {
      const invalidData = {
        title: 'Test Conversation',
        participantIds: ['non-existent-id']
      };

      const response = await request(app)
        .post('/api/conversations')
        .set('Authorization', `Bearer ${user1Token}`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('invalid participants');
    });

    it('should prevent creating conversation without participants', async () => {
      const invalidData = {
        title: 'Test Conversation',
        participantIds: []
      };

      const response = await request(app)
        .post('/api/conversations')
        .set('Authorization', `Bearer ${user1Token}`)
        .send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('at least one participant');
    });
  });

  describe('GET /api/conversations/:id', () => {
    beforeEach(async () => {
      // Create a test conversation
      const createResponse = await request(app)
        .post('/api/conversations')
        .set('Authorization', `Bearer ${user1Token}`)
        .send({
          title: 'Test Conversation',
          participantIds: [user1.id, user2.id]
        });

      testConversation = createResponse.body;
    });

    it('should get conversation details', async () => {
      const response = await request(app)
        .get(`/api/conversations/${testConversation.id}`)
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(testConversation.id);
      expect(response.body.title).toBe(testConversation.title);
      expect(response.body.participants).toHaveLength(2);
    });

    it('should return 404 for non-existent conversation', async () => {
      const response = await request(app)
        .get('/api/conversations/non-existent-id')
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(404);
    });

    it('should prevent unauthorized access', async () => {
      const response = await request(app)
        .get(`/api/conversations/${testConversation.id}`)
        .set('Authorization', `Bearer ${user3Token}`);

      expect(response.status).toBe(403);
    });
  });

  describe('PUT /api/conversations/:id', () => {
    beforeEach(async () => {
      // Create a test conversation
      const createResponse = await request(app)
        .post('/api/conversations')
        .set('Authorization', `Bearer ${user1Token}`)
        .send({
          title: 'Test Conversation',
          participantIds: [user1.id, user2.id]
        });

      testConversation = createResponse.body;
    });

    it('should update conversation title', async () => {
      const updateData = {
        title: 'Updated Title'
      };

      const response = await request(app)
        .put(`/api/conversations/${testConversation.id}`)
        .set('Authorization', `Bearer ${user1Token}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.title).toBe(updateData.title);
    });

    it('should prevent unauthorized updates', async () => {
      const updateData = {
        title: 'Updated Title'
      };

      const response = await request(app)
        .put(`/api/conversations/${testConversation.id}`)
        .set('Authorization', `Bearer ${user3Token}`)
        .send(updateData);

      expect(response.status).toBe(403);
    });
  });

  describe('POST /api/conversations/:id/participants', () => {
    beforeEach(async () => {
      // Create a test conversation
      const createResponse = await request(app)
        .post('/api/conversations')
        .set('Authorization', `Bearer ${user1Token}`)
        .send({
          title: 'Test Conversation',
          participantIds: [user1.id, user2.id]
        });

      testConversation = createResponse.body;
    });

    it('should add a participant', async () => {
      const response = await request(app)
        .post(`/api/conversations/${testConversation.id}/participants`)
        .set('Authorization', `Bearer ${user1Token}`)
        .send({ userId: user3.id });

      expect(response.status).toBe(200);
      expect(response.body.participants).toHaveLength(3);
      expect(response.body.participants.map(p => p.id)).toContain(user3.id);
    });

    it('should prevent adding invalid participant', async () => {
      const response = await request(app)
        .post(`/api/conversations/${testConversation.id}/participants`)
        .set('Authorization', `Bearer ${user1Token}`)
        .send({ userId: 'non-existent-id' });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('invalid user');
    });

    it('should prevent unauthorized participant addition', async () => {
      const response = await request(app)
        .post(`/api/conversations/${testConversation.id}/participants`)
        .set('Authorization', `Bearer ${user3Token}`)
        .send({ userId: user3.id });

      expect(response.status).toBe(403);
    });
  });

  describe('DELETE /api/conversations/:id/participants/:userId', () => {
    beforeEach(async () => {
      // Create a test conversation
      const createResponse = await request(app)
        .post('/api/conversations')
        .set('Authorization', `Bearer ${user1Token}`)
        .send({
          title: 'Test Conversation',
          participantIds: [user1.id, user2.id, user3.id]
        });

      testConversation = createResponse.body;
    });

    it('should remove a participant', async () => {
      const response = await request(app)
        .delete(`/api/conversations/${testConversation.id}/participants/${user3.id}`)
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(200);
      expect(response.body.participants).toHaveLength(2);
      expect(response.body.participants.map(p => p.id)).not.toContain(user3.id);
    });

    it('should prevent removing the last participant', async () => {
      // First remove user2 and user3
      await request(app)
        .delete(`/api/conversations/${testConversation.id}/participants/${user2.id}`)
        .set('Authorization', `Bearer ${user1Token}`);

      await request(app)
        .delete(`/api/conversations/${testConversation.id}/participants/${user3.id}`)
        .set('Authorization', `Bearer ${user1Token}`);

      // Try to remove the last participant (user1)
      const response = await request(app)
        .delete(`/api/conversations/${testConversation.id}/participants/${user1.id}`)
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('last participant');
    });

    it('should prevent unauthorized participant removal', async () => {
      const response = await request(app)
        .delete(`/api/conversations/${testConversation.id}/participants/${user2.id}`)
        .set('Authorization', `Bearer ${user3Token}`);

      expect(response.status).toBe(403);
    });
  });

  describe('GET /api/conversations', () => {
    beforeEach(async () => {
      // Create multiple test conversations
      const conversations = [
        { title: 'Conversation 1', participants: [user1.id, user2.id] },
        { title: 'Conversation 2', participants: [user1.id, user3.id] },
        { title: 'Conversation 3', participants: [user2.id, user3.id] }
      ];

      for (const conv of conversations) {
        await request(app)
          .post('/api/conversations')
          .set('Authorization', `Bearer ${user1Token}`)
          .send({
            title: conv.title,
            participantIds: conv.participants
          });
      }
    });

    it('should get user conversations', async () => {
      const response = await request(app)
        .get('/api/conversations')
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2); // user1 is in 2 conversations
      expect(response.body.every(c => 
        c.participants.some(p => p.id === user1.id)
      )).toBe(true);
    });

    it('should support pagination', async () => {
      // Create more conversations
      for (let i = 4; i <= 15; i++) {
        await request(app)
          .post('/api/conversations')
          .set('Authorization', `Bearer ${user1Token}`)
          .send({
            title: `Conversation ${i}`,
            participantIds: [user1.id, user2.id]
          });
      }

      const response = await request(app)
        .get('/api/conversations?page=1&limit=10')
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(10);
    });

    it('should support filtering by title', async () => {
      const response = await request(app)
        .get('/api/conversations?title=Conversation 1')
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
      expect(response.body[0].title).toBe('Conversation 1');
    });
  });
}); 