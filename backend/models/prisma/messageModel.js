/**
 * Message Model - Prisma Implementation
 * 
 * This model handles message-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 * Now with multitenancy support through organizationId filtering.
 */

const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');

// Create Prisma client instance
const prisma = new PrismaClient();

/**
 * Create a new message
 * @param {Object} messageData - Message data to create
 * @returns {Promise<Object>} - Created message
 */
exports.createMessage = async (messageData) => {
  try {
    // Validate required fields
    if (!messageData.senderId) {
      throw new Error('Sender ID is required');
    }
    
    if (!messageData.conversationId) {
      throw new Error('Conversation ID is required');
    }
    
    if (!messageData.content && !messageData.media) {
      throw new Error('Message must have content or media');
    }
    
    // Generate a unique ID
    const id = uuidv4();
    
    // Create the message in Prisma
    const message = await prisma.message.create({
      data: {
        id,
        senderId: messageData.senderId,
        conversationId: messageData.conversationId,
        content: messageData.content || null,
        media: messageData.media || null,
        read: messageData.read || false,
        // Multitenancy: Include organization context
        organizationId: messageData.organizationId || null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    
    // Update the last message timestamp in the conversation
    await prisma.conversation.update({
      where: { id: messageData.conversationId },
      data: {
        lastMessageAt: new Date(),
        updatedAt: new Date()
      }
    });
    
    return message;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
};

/**
 * Get messages for a conversation
 * @param {String} conversationId - Conversation ID
 * @returns {Promise<Array>} - Messages for the conversation
 */
exports.getMessagesByConversation = async (conversationId) => {
  try {
    const messages = await prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' }
    });
    
    return messages;
  } catch (error) {
    console.error('Error getting messages by conversation:', error);
    throw error;
  }
};

/**
 * Get message by ID
 * @param {String} id - Message ID
 * @returns {Promise<Object>} - Message with the specified ID
 */
exports.getMessageById = async (id) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id }
    });
    
    if (!message) {
      throw new Error('Message not found');
    }
    
    return message;
  } catch (error) {
    console.error('Error getting message by ID:', error);
    throw error;
  }
};

/**
 * Get messages with filters
 * @param {Object} filters - Filter criteria
 * @returns {Promise<Array>} - Messages matching the filters
 */
exports.getMessages = async (filters) => {
  try {
    const whereClause = {};
    
    // Apply filters
    if (filters) {
      if (filters.conversationId) {
        whereClause.conversationId = filters.conversationId;
      }
      
      if (filters.userId) {
        whereClause.senderId = filters.userId;
      }
      
      // Date range filtering
      if (filters.startDate) {
        whereClause.createdAt = {
          ...(whereClause.createdAt || {}),
          gte: new Date(filters.startDate)
        };
      }
      
      if (filters.endDate) {
        whereClause.createdAt = {
          ...(whereClause.createdAt || {}),
          lte: new Date(filters.endDate)
        };
      }
      
      // Multitenancy: Add organization filter if provided
      if (filters.organizationId) {
        whereClause.organizationId = filters.organizationId;
      }
    }
    
    const messages = await prisma.message.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      take: 100 // Limit results for performance
    });
    
    return messages;
  } catch (error) {
    console.error('Error getting messages with filters:', error);
    throw error;
  }
};

/**
 * Delete a message by ID
 * @param {String} id - Message ID
 * @returns {Promise<Object>} - Result of the operation
 */
exports.deleteMessage = async (id) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id }
    });
    
    if (!message) {
      throw new Error('Message not found');
    }
    
    await prisma.message.delete({
      where: { id }
    });
    
    return { success: true, message: 'Message deleted successfully' };
  } catch (error) {
    console.error('Error deleting message:', error);
    throw error;
  }
};

module.exports = exports; 