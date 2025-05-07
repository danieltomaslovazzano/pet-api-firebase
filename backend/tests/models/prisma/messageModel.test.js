/**
 * Message Model Tests - Prisma Implementation
 * 
 * This test suite focuses on the Prisma implementation of the Message model.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

// Import helpers and mock Firebase first
require('../../config/mockFirebase');

const { messageModel } = require('../../../models/adapter');
const { validMessage, generateMessages, generateMessageTestData, messageWithAttachments, messageWithLocation } = require('../../fixtures/messageFixtures');
const { validUser } = require('../../fixtures/userFixtures');
const { cleanupPostgresDb, testDataStore } = require('../../helpers/testDbSetup');

// Clean the test data store before tests
beforeEach(async () => {
  testDataStore.users = [];
  testDataStore.messages = [];
});

// Helper function to convert callback-style functions to Promises
const promisify = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

describe('Message Model - Prisma Implementation', () => {
  describe('Basic CRUD Operations', () => {
    it('should create a new message', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const messageData = validMessage('test-conversation', user.id);
      
      // Act
      const newMessage = await promisify(messageModel.createMessage, messageData);
      
      // Assert
      expect(newMessage).toBeDefined();
      expect(newMessage.id).toBe(messageData.id);
      expect(newMessage.conversationId).toBe(messageData.conversationId);
      expect(newMessage.senderId).toBe(user.id);
      expect(newMessage.content).toBe(messageData.content);
      expect(newMessage.status).toBe('sent');
    });

    it('should retrieve a message by ID', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const messageData = validMessage('test-conversation', user.id);
      await promisify(messageModel.createMessage, messageData);
      
      // Act
      const retrievedMessage = await messageModel.getMessageById(messageData.id);
      
      // Assert
      expect(retrievedMessage).toBeDefined();
      expect(retrievedMessage.id).toBe(messageData.id);
      expect(retrievedMessage.content).toBe(messageData.content);
      expect(retrievedMessage.senderId).toBe(user.id);
    });

    it('should update a message', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const messageData = validMessage('test-conversation', user.id);
      await promisify(messageModel.createMessage, messageData);
      
      const updateData = { content: 'Updated content', status: 'read' };
      
      // Act
      const updatedMessage = await promisify(messageModel.updateMessage, messageData.id, updateData);
      
      // Assert
      expect(updatedMessage).toBeDefined();
      expect(updatedMessage.id).toBe(messageData.id);
      expect(updatedMessage.content).toBe('Updated content');
      expect(updatedMessage.status).toBe('read');
    });

    it('should delete a message', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const messageData = validMessage('test-conversation', user.id);
      await promisify(messageModel.createMessage, messageData);
      
      // Act
      const result = await promisify(messageModel.deleteMessage, messageData.id);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('deleted successfully');
      
      // Verify message is deleted
      const deletedMessage = await messageModel.getMessageById(messageData.id);
      expect(deletedMessage).toBeNull();
    });
  });

  describe('Conversation Association', () => {
    it('should get all messages for a conversation', async () => {
      // Arrange
      const { users, conversationId, messages } = generateMessageTestData(3, 5);
      testDataStore.users.push(...users);
      
      for (const message of messages) {
        await promisify(messageModel.createMessage, message);
      }
      
      // Act
      const conversationMessages = await promisify(messageModel.getConversationMessages, conversationId);
      
      // Assert
      expect(conversationMessages.length).toBe(5);
      conversationMessages.forEach(message => {
        expect(message.conversationId).toBe(conversationId);
      });
    });

    it('should get messages with pagination', async () => {
      // Arrange
      const { users, conversationId, messages } = generateMessageTestData(3, 10);
      testDataStore.users.push(...users);
      
      for (const message of messages) {
        await promisify(messageModel.createMessage, message);
      }
      
      // Act
      const firstPage = await promisify(messageModel.getConversationMessages, conversationId, { limit: 5, offset: 0 });
      const secondPage = await promisify(messageModel.getConversationMessages, conversationId, { limit: 5, offset: 5 });
      
      // Assert
      expect(firstPage.length).toBe(5);
      expect(secondPage.length).toBe(5);
      expect(firstPage[0].id).not.toBe(secondPage[0].id);
    });
  });

  describe('Sender Association', () => {
    it('should get all messages from a specific sender', async () => {
      // Arrange
      const { users, conversationId, messages } = generateMessageTestData(3, 5);
      testDataStore.users.push(...users);
      
      for (const message of messages) {
        await promisify(messageModel.createMessage, message);
      }
      
      // Act
      const senderMessages = await promisify(messageModel.getUserMessages, users[0].id);
      
      // Assert
      expect(senderMessages.length).toBeGreaterThan(0);
      senderMessages.forEach(message => {
        expect(message.senderId).toBe(users[0].id);
      });
    });
  });

  describe('Attachment Handling', () => {
    it('should create a message with attachments', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const attachments = [
        { type: 'image', url: 'https://example.com/image1.jpg', name: 'image1.jpg', size: 1024 },
        { type: 'document', url: 'https://example.com/doc1.pdf', name: 'doc1.pdf', size: 2048 }
      ];
      
      const messageData = messageWithAttachments('test-conversation', user.id, attachments);
      
      // Act
      const newMessage = await promisify(messageModel.createMessage, messageData);
      
      // Assert
      expect(newMessage).toBeDefined();
      expect(newMessage.attachments).toHaveLength(2);
      expect(newMessage.attachments[0].type).toBe('image');
      expect(newMessage.attachments[1].type).toBe('document');
    });

    it('should update message attachments', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const messageData = messageWithAttachments('test-conversation', user.id);
      const message = await promisify(messageModel.createMessage, messageData);
      
      const newAttachments = [
        { type: 'image', url: 'https://example.com/new-image.jpg', name: 'new-image.jpg', size: 1024 }
      ];
      
      // Act
      const updatedMessage = await promisify(messageModel.updateMessage, message.id, {
        attachments: newAttachments
      });
      
      // Assert
      expect(updatedMessage.attachments).toHaveLength(1);
      expect(updatedMessage.attachments[0].url).toBe('https://example.com/new-image.jpg');
    });
  });

  describe('Location Handling', () => {
    it('should create a message with location data', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const location = {
        latitude: 40.7128,
        longitude: -74.0060,
        name: 'New York City'
      };
      
      const messageData = messageWithLocation('test-conversation', user.id, location);
      
      // Act
      const newMessage = await promisify(messageModel.createMessage, messageData);
      
      // Assert
      expect(newMessage).toBeDefined();
      expect(newMessage.location).toBeDefined();
      expect(newMessage.location.latitude).toBe(40.7128);
      expect(newMessage.location.longitude).toBe(-74.0060);
      expect(newMessage.location.name).toBe('New York City');
    });

    it('should update message location', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const messageData = messageWithLocation('test-conversation', user.id);
      const message = await promisify(messageModel.createMessage, messageData);
      
      const newLocation = {
        latitude: 51.5074,
        longitude: -0.1278,
        name: 'London'
      };
      
      // Act
      const updatedMessage = await promisify(messageModel.updateMessage, message.id, {
        location: newLocation
      });
      
      // Assert
      expect(updatedMessage.location).toBeDefined();
      expect(updatedMessage.location.latitude).toBe(51.5074);
      expect(updatedMessage.location.longitude).toBe(-0.1278);
      expect(updatedMessage.location.name).toBe('London');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle invalid message data', async () => {
      // Arrange
      const invalidMessage = {
        id: 'invalid-id',
        conversationId: 'test-conversation',
        senderId: 'test-user',
        content: '', // Empty content
        status: 'invalid-status'
      };
      
      // Act & Assert
      await expect(promisify(messageModel.createMessage, invalidMessage))
        .rejects.toThrow('Invalid message data');
    });

    it('should handle concurrent updates', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const messageData = validMessage('test-conversation', user.id);
      const message = await promisify(messageModel.createMessage, messageData);
      
      // Act
      const update1 = promisify(messageModel.updateMessage, message.id, { content: 'Update 1' });
      const update2 = promisify(messageModel.updateMessage, message.id, { content: 'Update 2' });
      
      // Assert
      await expect(Promise.all([update1, update2]))
        .rejects.toThrow('Concurrent update detected');
    });

    it('should handle non-existent message', async () => {
      // Arrange
      const nonExistentId = 'non-existent-id';
      
      // Act & Assert
      await expect(promisify(messageModel.getMessageById, nonExistentId))
        .resolves.toBeNull();
    });
  });
}); 