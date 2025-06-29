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
    
    if (!messageData.content && !messageData.attachments) {
      throw new Error('Message must have content or attachments');
    }
    
    // Generate a unique ID
    const id = uuidv4();
    
    // Create the message in Prisma (using schema field names)
    const message = await prisma.message.create({
      data: {
        id,
        senderId: messageData.senderId,
        conversationId: messageData.conversationId,
        content: messageData.content || '',
        status: messageData.status || 'sent',
        attachments: messageData.attachments || null,
        location: messageData.location || null,
        // Multitenancy: Include organization context
        organizationId: messageData.organizationId || null,
        timestamp: new Date()
      }
    });
    
    // Update the last message timestamp in the conversation
    await prisma.conversation.update({
      where: { id: messageData.conversationId },
      data: {
        lastMessageAt: new Date()
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
      orderBy: { timestamp: 'asc' }
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
 * @returns {Promise<Object|null>} - Message with the specified ID or null if not found
 */
exports.getMessageById = async (id) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id }
    });
    
    return message; // Return null if not found instead of throwing
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
      
      if (filters.status) {
        whereClause.status = filters.status;
      }
      
      // Date range filtering (using timestamp field from schema)
      if (filters.startDate) {
        whereClause.timestamp = {
          ...(whereClause.timestamp || {}),
          gte: new Date(filters.startDate)
        };
      }
      
      if (filters.endDate) {
        whereClause.timestamp = {
          ...(whereClause.timestamp || {}),
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
      orderBy: { timestamp: 'desc' },
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
 * @returns {Promise<Object|null>} - Result of the operation or null if not found
 */
exports.deleteMessage = async (id) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id }
    });
    
    if (!message) {
      return null; // Return null instead of throwing
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

/**
 * Update a message by ID
 * @param {String} id - Message ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object|null>} - Updated message or null if not found
 */
exports.updateMessage = async (id, updateData) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id }
    });
    
    if (!message) {
      return null; // Return null if not found
    }
    
    // Prepare update data (only allowed fields)
    const allowedFields = ['content', 'status', 'attachments', 'location'];
    const updateFields = {};
    
    Object.keys(updateData).forEach(key => {
      if (allowedFields.includes(key)) {
        updateFields[key] = updateData[key];
      }
    });
    
    // Add updated timestamp
    updateFields.updatedAt = new Date();
    
    const updatedMessage = await prisma.message.update({
      where: { id },
      data: updateFields
    });
    
    return updatedMessage;
  } catch (error) {
    console.error('Error updating message:', error);
    throw error;
  }
};

/**
 * Soft delete a message by ID
 * @param {String} id - Message ID
 * @param {String} deletedBy - User ID who deleted the message
 * @returns {Promise<Object|null>} - Result of the operation or null if not found
 */
exports.softDeleteMessage = async (id, deletedBy) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id }
    });
    
    if (!message) {
      return null; // Return null if not found
    }
    
    const updatedMessage = await prisma.message.update({
      where: { id },
      data: {
        status: 'deleted',
        deletedAt: new Date(),
        deletedBy: deletedBy,
        content: '[Message deleted]' // Replace content with placeholder
      }
    });
    
    return updatedMessage;
  } catch (error) {
    console.error('Error soft deleting message:', error);
    throw error;
  }
};

/**
 * Moderate a message by ID
 * @param {String} id - Message ID
 * @param {Object} moderationData - Moderation data
 * @returns {Promise<Object|null>} - Updated message or null if not found
 */
exports.moderateMessage = async (id, moderationData) => {
  try {
    const message = await prisma.message.findUnique({
      where: { id }
    });
    
    if (!message) {
      return null; // Return null if not found
    }
    
    // Prepare moderation update
    const updateFields = {
      moderationStatus: moderationData.action,
      moderatedAt: moderationData.moderatedAt,
      moderatedBy: moderationData.moderatedBy,
      moderationReason: moderationData.reason || null
    };
    
    // Handle specific moderation actions
    switch (moderationData.action) {
      case 'hide':
        updateFields.status = 'hidden';
        updateFields.content = '[Content hidden by moderator]';
        break;
      case 'flag':
        updateFields.status = 'flagged';
        break;
      case 'reject':
        updateFields.status = 'rejected';
        break;
      case 'approve':
        updateFields.status = 'sent';
        break;
      case 'unhide':
        // Note: This won't restore original content
        updateFields.status = 'sent';
        break;
      case 'unflag':
        updateFields.status = 'sent';
        break;
    }
    
    const updatedMessage = await prisma.message.update({
      where: { id },
      data: updateFields
    });
    
    return updatedMessage;
  } catch (error) {
    console.error('Error moderating message:', error);
    throw error;
  }
};

module.exports = exports; 