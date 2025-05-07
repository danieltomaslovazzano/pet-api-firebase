/**
 * Conversation Model Tests - Prisma Implementation
 * 
 * This test suite focuses on the Prisma implementation of the Conversation model.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

// Import helpers and mock Firebase first
require('../../config/mockFirebase');

const { conversationModel } = require('../../../models/adapter');
const { validConversation, generateConversations, generateConversationTestData, validMessage, generateMessages } = require('../../fixtures/conversationFixtures');
const { validUser } = require('../../fixtures/userFixtures');
const { cleanupPostgresDb, testDataStore } = require('../../helpers/testDbSetup');

// Clean the test data store before tests
beforeEach(async () => {
  testDataStore.users = [];
  testDataStore.conversations = [];
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

describe('Conversation Model - Prisma Implementation', () => {
  describe('Basic CRUD Operations', () => {
    it('should create a new conversation', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.map(u => u.id));
      
      // Act
      const newConversation = await promisify(conversationModel.createConversation, conversationData);
      
      // Assert
      expect(newConversation).toBeDefined();
      expect(newConversation.id).toBe(conversationData.id);
      expect(newConversation.title).toBe(conversationData.title);
      expect(newConversation.status).toBe('active');
      expect(newConversation.participantIds).toEqual(expect.arrayContaining(users.map(u => u.id)));
    });

    it('should retrieve a conversation by ID', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.map(u => u.id));
      await promisify(conversationModel.createConversation, conversationData);
      
      // Act
      const retrievedConversation = await conversationModel.getConversationById(conversationData.id);
      
      // Assert
      expect(retrievedConversation).toBeDefined();
      expect(retrievedConversation.id).toBe(conversationData.id);
      expect(retrievedConversation.title).toBe(conversationData.title);
      expect(retrievedConversation.participantIds).toEqual(expect.arrayContaining(users.map(u => u.id)));
    });

    it('should update a conversation', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.map(u => u.id));
      await promisify(conversationModel.createConversation, conversationData);
      
      const updateData = { title: 'Updated Title', status: 'archived' };
      
      // Act
      const updatedConversation = await promisify(conversationModel.updateConversation, conversationData.id, updateData);
      
      // Assert
      expect(updatedConversation).toBeDefined();
      expect(updatedConversation.id).toBe(conversationData.id);
      expect(updatedConversation.title).toBe('Updated Title');
      expect(updatedConversation.status).toBe('archived');
    });

    it('should delete a conversation', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.map(u => u.id));
      await promisify(conversationModel.createConversation, conversationData);
      
      // Act
      const result = await promisify(conversationModel.deleteConversation, conversationData.id);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('deleted successfully');
      
      // Verify conversation is deleted
      const deletedConversation = await conversationModel.getConversationById(conversationData.id);
      expect(deletedConversation).toBeNull();
    });
  });

  describe('Participant Management', () => {
    it('should add a participant to a conversation', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.slice(0, 2).map(u => u.id));
      const conversation = await promisify(conversationModel.createConversation, conversationData);
      
      // Act
      const result = await promisify(conversationModel.addParticipant, conversation.id, users[2].id);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('added successfully');
      
      // Verify participant was added
      const updatedConversation = await conversationModel.getConversationById(conversation.id);
      expect(updatedConversation.participantIds).toContain(users[2].id);
    });

    it('should remove a participant from a conversation', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.map(u => u.id));
      const conversation = await promisify(conversationModel.createConversation, conversationData);
      
      // Act
      const result = await promisify(conversationModel.removeParticipant, conversation.id, users[2].id);
      
      // Assert
      expect(result).toBeDefined();
      expect(result.message).toContain('removed successfully');
      
      // Verify participant was removed
      const updatedConversation = await conversationModel.getConversationById(conversation.id);
      expect(updatedConversation.participantIds).not.toContain(users[2].id);
    });

    it('should not allow removing the last participant', async () => {
      // Arrange
      const user = validUser();
      testDataStore.users.push(user);
      
      const conversationData = validConversation([user.id]);
      const conversation = await promisify(conversationModel.createConversation, conversationData);
      
      // Act & Assert
      await expect(promisify(conversationModel.removeParticipant, conversation.id, user.id))
        .rejects.toThrow('Cannot remove last participant');
    });
  });

  describe('Message Association', () => {
    it('should add a message to a conversation', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.map(u => u.id));
      const conversation = await promisify(conversationModel.createConversation, conversationData);
      
      const messageData = validMessage(conversation.id, users[0].id);
      
      // Act
      const newMessage = await promisify(conversationModel.addMessage, messageData);
      
      // Assert
      expect(newMessage).toBeDefined();
      expect(newMessage.id).toBe(messageData.id);
      expect(newMessage.conversationId).toBe(conversation.id);
      expect(newMessage.senderId).toBe(users[0].id);
      expect(newMessage.content).toBe(messageData.content);
    });

    it('should get messages for a conversation with pagination', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.map(u => u.id));
      const conversation = await promisify(conversationModel.createConversation, conversationData);
      
      const messages = generateMessages(10, conversation.id, users.map(u => u.id));
      for (const message of messages) {
        await promisify(conversationModel.addMessage, message);
      }
      
      // Act
      const firstPage = await promisify(conversationModel.getMessages, conversation.id, { limit: 5, offset: 0 });
      const secondPage = await promisify(conversationModel.getMessages, conversation.id, { limit: 5, offset: 5 });
      
      // Assert
      expect(firstPage.length).toBe(5);
      expect(secondPage.length).toBe(5);
      expect(firstPage[0].id).not.toBe(secondPage[0].id);
    });
  });

  describe('Search and Filtering', () => {
    beforeEach(async () => {
      // Create test conversations with various attributes
      const { users, conversations } = generateConversationTestData(5, 4);
      testDataStore.users.push(...users);
      
      for (const conversation of conversations) {
        await promisify(conversationModel.createConversation, conversation);
      }
    });

    it('should search conversations by title', async () => {
      // Act
      const results = await promisify(conversationModel.getConversations, {
        searchTerm: 'Test Conversation 1'
      });
      
      // Assert
      expect(results.length).toBe(1);
      expect(results[0].title).toBe('Test Conversation 1');
    });

    it('should filter conversations by status', async () => {
      // Act
      const results = await promisify(conversationModel.getConversations, {
        status: 'active'
      });
      
      // Assert
      expect(results.length).toBeGreaterThan(0);
      results.forEach(conversation => {
        expect(conversation.status).toBe('active');
      });
    });

    it('should get conversations for a user', async () => {
      // Arrange
      const user = testDataStore.users[0];
      
      // Act
      const results = await promisify(conversationModel.getUserConversations, user.id);
      
      // Assert
      expect(results.length).toBeGreaterThan(0);
      results.forEach(conversation => {
        expect(conversation.participantIds).toContain(user.id);
      });
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle invalid conversation data', async () => {
      // Arrange
      const invalidConversation = {
        id: 'invalid-id',
        title: '', // Empty title
        participantIds: [] // Empty participants
      };
      
      // Act & Assert
      await expect(promisify(conversationModel.createConversation, invalidConversation))
        .rejects.toThrow('Invalid conversation data');
    });

    it('should handle concurrent updates', async () => {
      // Arrange
      const users = Array(3).fill().map(() => validUser());
      testDataStore.users.push(...users);
      
      const conversationData = validConversation(users.map(u => u.id));
      const conversation = await promisify(conversationModel.createConversation, conversationData);
      
      // Act
      const update1 = promisify(conversationModel.updateConversation, conversation.id, { title: 'Update 1' });
      const update2 = promisify(conversationModel.updateConversation, conversation.id, { title: 'Update 2' });
      
      // Assert
      await expect(Promise.all([update1, update2]))
        .rejects.toThrow('Concurrent update detected');
    });

    it('should handle non-existent conversation', async () => {
      // Arrange
      const nonExistentId = 'non-existent-id';
      
      // Act & Assert
      await expect(promisify(conversationModel.getConversationById, nonExistentId))
        .resolves.toBeNull();
    });
  });
}); 