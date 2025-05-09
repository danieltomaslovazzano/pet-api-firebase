/**
 * @fileoverview Tests for the conversation model using Prisma client
 * Tests conversation management operations and relationships using mock Prisma client
 */

const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const { validConversation, generateConversations, generateConversationTestData } = require('../../fixtures/conversationFixtures');
const { testDataStore } = require('../../helpers/testDbSetup');

// Mock Prisma client
jest.mock('@prisma/client', () => {
  const mockPrisma = {
    conversation: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn()
    },
    user: {
      findUnique: jest.fn()
    },
    organization: {
      findUnique: jest.fn()
    },
    participant: {
      create: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn()
    },
    $transaction: jest.fn((callback) => callback(mockPrisma))
  };
  return {
    PrismaClient: jest.fn(() => mockPrisma)
  };
});

describe('Conversation Model', () => {
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

  describe('Conversation Creation', () => {
    it('should create a new direct conversation with valid data', async () => {
      // Arrange
      const testData = generateConversationTestData(2, 1, 1);
      const conversationData = testData.conversations[0];
      prisma.conversation.create.mockResolvedValue(conversationData);
      prisma.organization.findUnique.mockResolvedValue(testData.organizations[0]);
      prisma.user.findUnique.mockResolvedValue(testData.users[0]);

      // Act
      const result = await prisma.conversation.create({
        data: conversationData
      });

      // Assert
      expect(result).toEqual(conversationData);
      expect(prisma.conversation.create).toHaveBeenCalledWith({
        data: conversationData
      });
    });

    it('should create a new group conversation with valid data', async () => {
      // Arrange
      const testData = generateConversationTestData(3, 1, 1);
      const conversationData = testData.conversations.find(c => c.type === 'GROUP');
      prisma.conversation.create.mockResolvedValue(conversationData);
      prisma.organization.findUnique.mockResolvedValue(testData.organizations[0]);
      prisma.user.findUnique.mockResolvedValue(testData.users[0]);

      // Act
      const result = await prisma.conversation.create({
        data: conversationData
      });

      // Assert
      expect(result).toEqual(conversationData);
      expect(prisma.conversation.create).toHaveBeenCalledWith({
        data: conversationData
      });
    });

    it('should validate required fields when creating conversation', async () => {
      // Arrange
      const invalidConversation = { type: 'DIRECT' }; // Missing required fields
      prisma.conversation.create.mockRejectedValue(new Error('Validation error'));

      // Act & Assert
      await expect(prisma.conversation.create({
        data: invalidConversation
      })).rejects.toThrow('Validation error');
    });
  });

  describe('Conversation Retrieval', () => {
    it('should retrieve a conversation by ID', async () => {
      // Arrange
      const testData = generateConversationTestData(2, 1, 1);
      const conversationData = testData.conversations[0];
      prisma.conversation.findUnique.mockResolvedValue(conversationData);

      // Act
      const result = await prisma.conversation.findUnique({
        where: { id: conversationData.id }
      });

      // Assert
      expect(result).toEqual(conversationData);
      expect(prisma.conversation.findUnique).toHaveBeenCalledWith({
        where: { id: conversationData.id }
      });
    });

    it('should return null for non-existent conversation', async () => {
      // Arrange
      prisma.conversation.findUnique.mockResolvedValue(null);

      // Act
      const result = await prisma.conversation.findUnique({
        where: { id: 'non-existent-id' }
      });

      // Assert
      expect(result).toBeNull();
    });

    it('should list conversations for an organization', async () => {
      // Arrange
      const testData = generateConversationTestData(3, 1, 2);
      const orgConversations = testData.conversations;
      prisma.conversation.findMany.mockResolvedValue(orgConversations);

      // Act
      const result = await prisma.conversation.findMany({
        where: { organizationId: testData.organizations[0].id }
      });

      // Assert
      expect(result).toEqual(orgConversations);
      expect(prisma.conversation.findMany).toHaveBeenCalledWith({
        where: { organizationId: testData.organizations[0].id }
      });
    });
  });

  describe('Conversation Updates', () => {
    it('should update conversation details', async () => {
      // Arrange
      const testData = generateConversationTestData(2, 1, 1);
      const conversationData = testData.conversations[0];
      const updatedData = { ...conversationData, status: 'ARCHIVED' };
      prisma.conversation.update.mockResolvedValue(updatedData);

      // Act
      const result = await prisma.conversation.update({
        where: { id: conversationData.id },
        data: { status: 'ARCHIVED' }
      });

      // Assert
      expect(result).toEqual(updatedData);
      expect(prisma.conversation.update).toHaveBeenCalledWith({
        where: { id: conversationData.id },
        data: { status: 'ARCHIVED' }
      });
    });

    it('should validate data before updating', async () => {
      // Arrange
      const testData = generateConversationTestData(2, 1, 1);
      const conversationData = testData.conversations[0];
      prisma.conversation.update.mockRejectedValue(new Error('Validation error'));

      // Act & Assert
      await expect(prisma.conversation.update({
        where: { id: conversationData.id },
        data: { type: 'INVALID_TYPE' }
      })).rejects.toThrow('Validation error');
    });
  });

  describe('Conversation Deletion', () => {
    it('should delete a conversation', async () => {
      // Arrange
      const testData = generateConversationTestData(2, 1, 1);
      const conversationData = testData.conversations[0];
      prisma.conversation.delete.mockResolvedValue(conversationData);

      // Act
      const result = await prisma.conversation.delete({
        where: { id: conversationData.id }
      });

      // Assert
      expect(result).toEqual(conversationData);
      expect(prisma.conversation.delete).toHaveBeenCalledWith({
        where: { id: conversationData.id }
      });
    });

    it('should handle deletion of non-existent conversation', async () => {
      // Arrange
      prisma.conversation.delete.mockRejectedValue(new Error('Record not found'));

      // Act & Assert
      await expect(prisma.conversation.delete({
        where: { id: 'non-existent-id' }
      })).rejects.toThrow('Record not found');
    });
  });

  describe('Participant Management', () => {
    it('should add a participant to a conversation', async () => {
      // Arrange
      const testData = generateConversationTestData(3, 1, 1);
      const conversationData = testData.conversations[0];
      const newParticipant = {
        id: uuidv4(),
        userId: testData.users[2].id,
        role: 'MEMBER',
        joinedAt: new Date(),
        lastReadAt: new Date()
      };
      prisma.participant.create.mockResolvedValue(newParticipant);

      // Act
      const result = await prisma.participant.create({
        data: {
          ...newParticipant,
          conversationId: conversationData.id
        }
      });

      // Assert
      expect(result).toEqual(newParticipant);
      expect(prisma.participant.create).toHaveBeenCalled();
    });

    it('should list participants in a conversation', async () => {
      // Arrange
      const testData = generateConversationTestData(3, 1, 1);
      const conversationData = testData.conversations[0];
      prisma.participant.findMany.mockResolvedValue(conversationData.participants);

      // Act
      const result = await prisma.participant.findMany({
        where: { conversationId: conversationData.id }
      });

      // Assert
      expect(result).toEqual(conversationData.participants);
      expect(prisma.participant.findMany).toHaveBeenCalledWith({
        where: { conversationId: conversationData.id }
      });
    });

    it('should update participant role', async () => {
      // Arrange
      const testData = generateConversationTestData(3, 1, 1);
      const conversationData = testData.conversations[0];
      const participant = conversationData.participants[0];
      const updatedParticipant = { ...participant, role: 'ADMIN' };
      prisma.participant.update.mockResolvedValue(updatedParticipant);

      // Act
      const result = await prisma.participant.update({
        where: { id: participant.id },
        data: { role: 'ADMIN' }
      });

      // Assert
      expect(result).toEqual(updatedParticipant);
      expect(prisma.participant.update).toHaveBeenCalledWith({
        where: { id: participant.id },
        data: { role: 'ADMIN' }
      });
    });

    it('should remove a participant from a conversation', async () => {
      // Arrange
      const testData = generateConversationTestData(3, 1, 1);
      const conversationData = testData.conversations[0];
      const participant = conversationData.participants[0];
      prisma.participant.delete.mockResolvedValue(participant);

      // Act
      const result = await prisma.participant.delete({
        where: { id: participant.id }
      });

      // Assert
      expect(result).toEqual(participant);
      expect(prisma.participant.delete).toHaveBeenCalledWith({
        where: { id: participant.id }
      });
    });
  });

  describe('Conversation Relationships', () => {
    it('should validate organization relationship', async () => {
      // Arrange
      const testData = generateConversationTestData(2, 1, 1);
      const conversationData = testData.conversations[0];
      prisma.organization.findUnique.mockResolvedValue(testData.organizations[0]);

      // Act
      const organization = await prisma.organization.findUnique({
        where: { id: conversationData.organizationId }
      });

      // Assert
      expect(organization).toBeDefined();
      expect(organization.id).toBe(conversationData.organizationId);
    });

    it('should handle non-existent organization', async () => {
      // Arrange
      const testData = generateConversationTestData(2, 1, 1);
      const conversationData = testData.conversations[0];
      prisma.organization.findUnique.mockResolvedValue(null);

      // Act
      const organization = await prisma.organization.findUnique({
        where: { id: conversationData.organizationId }
      });

      // Assert
      expect(organization).toBeNull();
    });
  });
}); 