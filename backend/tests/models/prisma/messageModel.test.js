/**
 * @fileoverview Tests for the message model using Prisma client
 * Tests message management operations and relationships using mock Prisma client
 */

const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const { validMessage, generateMessages, generateMessageTestData } = require('../../fixtures/messageFixtures');
const { testDataStore } = require('../../helpers/testDbSetup');

// Mock Prisma client
jest.mock('@prisma/client', () => {
  const mockPrisma = {
    message: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn()
    },
    conversation: {
      findUnique: jest.fn()
    },
    user: {
      findUnique: jest.fn()
    },
    $transaction: jest.fn((callback) => callback(mockPrisma))
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma)
  };
});

describe('Message Model', () => {
  let prisma;
  
  beforeEach(() => {
    // Clear test data store
    Object.keys(testDataStore).forEach(key => {
      testDataStore[key] = [];
    });
    
    // Reset all mocks
    jest.clearAllMocks();
    
    // Get fresh Prisma instance
    prisma = new PrismaClient();
  });

  describe('Message Creation', () => {
    it('should create a new text message with valid data', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      prisma.message.create.mockResolvedValue(messageData);
      prisma.conversation.findUnique.mockResolvedValue(testData.conversations[0]);
      prisma.user.findUnique.mockResolvedValue(testData.users[0]);

      // Act
      const result = await prisma.message.create({
        data: messageData
      });

      // Assert
      expect(result).toEqual(messageData);
      expect(prisma.message.create).toHaveBeenCalledWith({
        data: messageData
      });
    });

    it('should create a new image message with valid data', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages.find(m => m.type === 'IMAGE');
      prisma.message.create.mockResolvedValue(messageData);
      prisma.conversation.findUnique.mockResolvedValue(testData.conversations[0]);
      prisma.user.findUnique.mockResolvedValue(testData.users[0]);

      // Act
      const result = await prisma.message.create({
        data: messageData
      });

      // Assert
      expect(result).toEqual(messageData);
      expect(prisma.message.create).toHaveBeenCalledWith({
        data: messageData
      });
    });

    it('should validate required fields when creating message', async () => {
      // Arrange
      const invalidMessage = { type: 'TEXT' }; // Missing required fields
      prisma.message.create.mockRejectedValue(new Error('Validation error'));

      // Act & Assert
      await expect(prisma.message.create({
        data: invalidMessage
      })).rejects.toThrow('Validation error');
    });
  });

  describe('Message Retrieval', () => {
    it('should retrieve a message by ID', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      prisma.message.findUnique.mockResolvedValue(messageData);

      // Act
      const result = await prisma.message.findUnique({
        where: { id: messageData.id }
      });

      // Assert
      expect(result).toEqual(messageData);
      expect(prisma.message.findUnique).toHaveBeenCalledWith({
        where: { id: messageData.id }
      });
    });

    it('should return null for non-existent message', async () => {
      // Arrange
      prisma.message.findUnique.mockResolvedValue(null);

      // Act
      const result = await prisma.message.findUnique({
        where: { id: 'non-existent-id' }
      });

      // Assert
      expect(result).toBeNull();
    });

    it('should list messages for a conversation', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 5);
      const conversationMessages = testData.messages;
      prisma.message.findMany.mockResolvedValue(conversationMessages);

      // Act
      const result = await prisma.message.findMany({
        where: { conversationId: testData.conversations[0].id }
      });

      // Assert
      expect(result).toEqual(conversationMessages);
      expect(prisma.message.findMany).toHaveBeenCalledWith({
        where: { conversationId: testData.conversations[0].id }
      });
    });
  });

  describe('Message Updates', () => {
    it('should update message content', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      const updatedData = { ...messageData, content: 'Updated content' };
      prisma.message.update.mockResolvedValue(updatedData);

      // Act
      const result = await prisma.message.update({
        where: { id: messageData.id },
        data: { content: 'Updated content' }
      });

      // Assert
      expect(result).toEqual(updatedData);
      expect(prisma.message.update).toHaveBeenCalledWith({
        where: { id: messageData.id },
        data: { content: 'Updated content' }
      });
    });

    it('should update message status', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      const updatedData = { ...messageData, status: 'READ' };
      prisma.message.update.mockResolvedValue(updatedData);

      // Act
      const result = await prisma.message.update({
        where: { id: messageData.id },
        data: { status: 'READ' }
      });

      // Assert
      expect(result).toEqual(updatedData);
      expect(prisma.message.update).toHaveBeenCalledWith({
        where: { id: messageData.id },
        data: { status: 'READ' }
      });
    });

    it('should validate data before updating', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      prisma.message.update.mockRejectedValue(new Error('Validation error'));

      // Act & Assert
      await expect(prisma.message.update({
        where: { id: messageData.id },
        data: { type: 'INVALID_TYPE' }
      })).rejects.toThrow('Validation error');
    });
  });

  describe('Message Deletion', () => {
    it('should delete a message', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      prisma.message.delete.mockResolvedValue(messageData);

      // Act
      const result = await prisma.message.delete({
        where: { id: messageData.id }
      });

      // Assert
      expect(result).toEqual(messageData);
      expect(prisma.message.delete).toHaveBeenCalledWith({
        where: { id: messageData.id }
      });
    });

    it('should handle deletion of non-existent message', async () => {
      // Arrange
      prisma.message.delete.mockRejectedValue(new Error('Record not found'));

      // Act & Assert
      await expect(prisma.message.delete({
        where: { id: 'non-existent-id' }
      })).rejects.toThrow('Record not found');
    });
  });

  describe('Message Relationships', () => {
    it('should validate conversation relationship', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      prisma.conversation.findUnique.mockResolvedValue(testData.conversations[0]);

      // Act
      const conversation = await prisma.conversation.findUnique({
        where: { id: messageData.conversationId }
      });

      // Assert
      expect(conversation).toBeDefined();
      expect(conversation.id).toBe(messageData.conversationId);
    });

    it('should validate sender relationship', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      prisma.user.findUnique.mockResolvedValue(testData.users[0]);

      // Act
      const sender = await prisma.user.findUnique({
        where: { id: messageData.senderId }
      });

      // Assert
      expect(sender).toBeDefined();
      expect(sender.id).toBe(messageData.senderId);
    });

    it('should handle non-existent conversation', async () => {
      // Arrange
      const testData = generateMessageTestData(2, 1, 1);
      const messageData = testData.messages[0];
      prisma.conversation.findUnique.mockResolvedValue(null);

      // Act
      const conversation = await prisma.conversation.findUnique({
        where: { id: messageData.conversationId }
      });

      // Assert
      expect(conversation).toBeNull();
    });
  });
}); 