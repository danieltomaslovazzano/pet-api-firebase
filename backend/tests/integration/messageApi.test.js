/**
 * Message API Integration Tests
 * 
 * This test suite focuses on testing the Message API endpoints.
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

describe('Message API Integration Tests', () => {
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

  describe('POST /api/conversations/:id/messages', () => {
    it('should send a message', async () => {
      const messageData = {
        content: 'Hello, this is a test message',
        status: 'sent'
      };

      const response = await request(app)
        .post(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user1Token}`)
        .send(messageData);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.content).toBe(messageData.content);
      expect(response.body.senderId).toBe(user1.id);
      expect(response.body.conversationId).toBe(testConversation.id);
      expect(response.body.status).toBe(messageData.status);
    });

    it('should send a message with attachments', async () => {
      const messageData = {
        content: 'Message with attachments',
        status: 'sent',
        attachments: [
          {
            type: 'image',
            url: 'https://example.com/image.jpg',
            name: 'test-image.jpg'
          }
        ]
      };

      const response = await request(app)
        .post(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user1Token}`)
        .send(messageData);

      expect(response.status).toBe(201);
      expect(response.body.attachments).toHaveLength(1);
      expect(response.body.attachments[0].type).toBe('image');
      expect(response.body.attachments[0].url).toBe('https://example.com/image.jpg');
    });

    it('should send a message with location', async () => {
      const messageData = {
        content: 'Message with location',
        status: 'sent',
        location: {
          latitude: 37.7749,
          longitude: -122.4194,
          name: 'San Francisco'
        }
      };

      const response = await request(app)
        .post(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user1Token}`)
        .send(messageData);

      expect(response.status).toBe(201);
      expect(response.body.location).toBeDefined();
      expect(response.body.location.latitude).toBe(37.7749);
      expect(response.body.location.longitude).toBe(-122.4194);
      expect(response.body.location.name).toBe('San Francisco');
    });

    it('should prevent sending message to non-existent conversation', async () => {
      const messageData = {
        content: 'Test message',
        status: 'sent'
      };

      const response = await request(app)
        .post('/api/conversations/non-existent-id/messages')
        .set('Authorization', `Bearer ${user1Token}`)
        .send(messageData);

      expect(response.status).toBe(404);
      expect(response.body.error).toContain('conversation not found');
    });

    it('should prevent sending message by non-participant', async () => {
      const messageData = {
        content: 'Test message',
        status: 'sent'
      };

      const response = await request(app)
        .post(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user3Token}`)
        .send(messageData);

      expect(response.status).toBe(403);
      expect(response.body.error).toContain('not a participant');
    });
  });

  describe('GET /api/conversations/:id/messages', () => {
    beforeEach(async () => {
      // Send multiple test messages
      const messages = [
        { content: 'Message 1', senderId: user1.id },
        { content: 'Message 2', senderId: user2.id },
        { content: 'Message 3', senderId: user1.id }
      ];

      for (const msg of messages) {
        await request(app)
          .post(`/api/conversations/${testConversation.id}/messages`)
          .set('Authorization', `Bearer ${msg.senderId === user1.id ? user1Token : user2Token}`)
          .send({
            content: msg.content,
            status: 'sent'
          });
      }
    });

    it('should get conversation messages', async () => {
      const response = await request(app)
        .get(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(3);
      expect(response.body[0].content).toBe('Message 3'); // Most recent first
      expect(response.body[1].content).toBe('Message 2');
      expect(response.body[2].content).toBe('Message 1');
    });

    it('should support pagination', async () => {
      // Send more messages
      for (let i = 4; i <= 15; i++) {
        await request(app)
          .post(`/api/conversations/${testConversation.id}/messages`)
          .set('Authorization', `Bearer ${user1Token}`)
          .send({
            content: `Message ${i}`,
            status: 'sent'
          });
      }

      const response = await request(app)
        .get(`/api/conversations/${testConversation.id}/messages?page=1&limit=10`)
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(10);
    });

    it('should prevent unauthorized access', async () => {
      const response = await request(app)
        .get(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user3Token}`);

      expect(response.status).toBe(403);
    });
  });

  describe('PUT /api/messages/:id/status', () => {
    let testMessage;

    beforeEach(async () => {
      // Send a test message
      const messageResponse = await request(app)
        .post(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user1Token}`)
        .send({
          content: 'Test message',
          status: 'sent'
        });

      testMessage = messageResponse.body;
    });

    it('should update message status', async () => {
      const response = await request(app)
        .put(`/api/messages/${testMessage.id}/status`)
        .set('Authorization', `Bearer ${user2Token}`)
        .send({ status: 'read' });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('read');
    });

    it('should prevent invalid status updates', async () => {
      const response = await request(app)
        .put(`/api/messages/${testMessage.id}/status`)
        .set('Authorization', `Bearer ${user2Token}`)
        .send({ status: 'invalid-status' });

      expect(response.status).toBe(400);
      expect(response.body.error).toContain('invalid status');
    });

    it('should prevent unauthorized status updates', async () => {
      const response = await request(app)
        .put(`/api/messages/${testMessage.id}/status`)
        .set('Authorization', `Bearer ${user3Token}`)
        .send({ status: 'read' });

      expect(response.status).toBe(403);
    });
  });

  describe('DELETE /api/messages/:id', () => {
    let testMessage;

    beforeEach(async () => {
      // Send a test message
      const messageResponse = await request(app)
        .post(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user1Token}`)
        .send({
          content: 'Test message',
          status: 'sent'
        });

      testMessage = messageResponse.body;
    });

    it('should delete a message', async () => {
      const response = await request(app)
        .delete(`/api/messages/${testMessage.id}`)
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toContain('successfully deleted');

      // Verify message is deleted
      const getResponse = await request(app)
        .get(`/api/conversations/${testConversation.id}/messages`)
        .set('Authorization', `Bearer ${user1Token}`);

      expect(getResponse.body.find(m => m.id === testMessage.id)).toBeUndefined();
    });

    it('should prevent unauthorized deletion', async () => {
      const response = await request(app)
        .delete(`/api/messages/${testMessage.id}`)
        .set('Authorization', `Bearer ${user2Token}`);

      expect(response.status).toBe(403);
    });

    it('should return 404 for non-existent message', async () => {
      const response = await request(app)
        .delete('/api/messages/non-existent-id')
        .set('Authorization', `Bearer ${user1Token}`);

      expect(response.status).toBe(404);
    });
  });
}); 