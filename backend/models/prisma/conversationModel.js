/**
 * Conversation Model - Prisma Implementation
 * 
 * This model handles conversation-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 * Now with multitenancy support through organizationId filtering.
 */

const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');

// Create Prisma client instance
const prisma = new PrismaClient();

/**
 * Create a new conversation
 * @param {Object} data - Conversation data
 * @returns {Promise<Object>} - Created conversation
 */
exports.createConversation = async (data) => {
  try {
    // Validate required fields
    if (!data.participants || !Array.isArray(data.participants) || data.participants.length < 2) {
      throw new Error('At least two participants are required');
    }

    // Generate a unique ID
    const id = uuidv4();

    // Create the conversation in Prisma
    const conversation = await prisma.conversation.create({
      data: {
        id,
        // Multitenancy: Include organization context
        organizationId: data.organizationId || null,
        participants: data.participants,
        title: data.title || 'New Conversation',
        type: data.type || 'direct',
        lastMessage: data.lastMessage || null,
        lastMessageAt: data.lastMessageAt || new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    return conversation;
  } catch (error) {
    console.error('Error creating conversation:', error);
    throw error;
  }
};

/**
 * Get a conversation by ID
 * @param {String} id - Conversation ID
 * @returns {Promise<Object>} - Found conversation
 */
exports.getConversationById = async (id) => {
  try {
    const conversation = await prisma.conversation.findUnique({
      where: { id },
      include: {
        messages: {
          orderBy: { createdAt: 'asc' }
        }
      }
    });

    if (!conversation) {
      throw new Error('Conversation not found');
    }

    return conversation;
  } catch (error) {
    console.error('Error getting conversation by ID:', error);
    throw error;
  }
};

/**
 * Get conversations for a specific user
 * @param {String} userId - User ID
 * @param {String|null} organizationId - Optional organization ID filter
 * @returns {Promise<Array>} - Found conversations
 */
exports.getConversationsForUser = async (userId, organizationId) => {
  try {
    const whereClause = {
      participants: {
        has: userId
      }
    };

    // Multitenancy: Add organization filter if provided
    if (organizationId) {
      whereClause.organizationId = organizationId;
    }

    const conversations = await prisma.conversation.findMany({
      where: whereClause,
      orderBy: { lastMessageAt: 'desc' },
      include: {
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1 // Include just the last message
        }
      }
    });

    return conversations;
  } catch (error) {
    console.error('Error getting conversations for user:', error);
    throw error;
  }
};

/**
 * Get conversations with filters
 * @param {Object} filters - Filter criteria
 * @returns {Promise<Array>} - Found conversations
 */
exports.getConversations = async (filters) => {
  try {
    const whereClause = {};

    // Apply filters
    if (filters) {
      if (filters.userId) {
        whereClause.participants = { has: filters.userId };
      }

      if (filters.status) {
        whereClause.status = filters.status;
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

    const conversations = await prisma.conversation.findMany({
      where: whereClause,
      orderBy: { lastMessageAt: 'desc' },
      include: {
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1
        }
      }
    });

    return conversations;
  } catch (error) {
    console.error('Error getting conversations with filters:', error);
    throw error;
  }
};

/**
 * Soft delete a conversation for a specific user
 * @param {String} id - Conversation ID
 * @param {String} userId - User ID
 * @returns {Promise<Object>} - Result of the operation
 */
exports.softDeleteConversation = async (id, userId) => {
  try {
    // Get the current conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id }
    });

    if (!conversation) {
      throw new Error('Conversation not found');
    }

    // Check if user is a participant
    if (!conversation.participants.includes(userId)) {
      throw new Error('User is not a participant in this conversation');
    }

    // Add user to deletedFor array
    let deletedFor = conversation.deletedFor || [];
    if (!deletedFor.includes(userId)) {
      deletedFor.push(userId);
    }

    // Update the conversation
    await prisma.conversation.update({
      where: { id },
      data: {
        deletedFor,
        updatedAt: new Date()
      }
    });

    return { success: true, message: 'Conversation soft deleted' };
  } catch (error) {
    console.error('Error soft deleting conversation:', error);
    throw error;
  }
};

/**
 * Permanently delete a conversation
 * @param {String} id - Conversation ID
 * @returns {Promise<Object>} - Result of the operation
 */
exports.permanentDeleteConversation = async (id) => {
  try {
    // First, delete all messages in the conversation
    await prisma.message.deleteMany({
      where: { conversationId: id }
    });

    // Then delete the conversation itself
    await prisma.conversation.delete({
      where: { id }
    });

    return { success: true, message: 'Conversation permanently deleted' };
  } catch (error) {
    console.error('Error permanently deleting conversation:', error);
    throw error;
  }
};

/**
 * Hide a conversation for a specific user
 * @param {String} id - Conversation ID
 * @param {String} userId - User ID
 * @returns {Promise<Object>} - Result of the operation
 */
exports.hideConversation = async (id, userId) => {
  try {
    // Get the current conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id }
    });

    if (!conversation) {
      throw new Error('Conversation not found');
    }

    // Check if user is a participant
    if (!conversation.participants.includes(userId)) {
      throw new Error('User is not a participant in this conversation');
    }

    // Add user to hiddenFor array
    let hiddenFor = conversation.hiddenFor || [];
    if (!hiddenFor.includes(userId)) {
      hiddenFor.push(userId);
    }

    // Update the conversation
    await prisma.conversation.update({
      where: { id },
      data: {
        hiddenFor,
        updatedAt: new Date()
      }
    });

    return { success: true, message: 'Conversation hidden' };
  } catch (error) {
    console.error('Error hiding conversation:', error);
    throw error;
  }
};

/**
 * Unhide a conversation for a specific user
 * @param {String} id - Conversation ID
 * @param {String} userId - User ID
 * @returns {Promise<Object>} - Result of the operation
 */
exports.unhideConversation = async (id, userId) => {
  try {
    // Get the current conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id }
    });

    if (!conversation) {
      throw new Error('Conversation not found');
    }

    // Check if user is a participant
    if (!conversation.participants.includes(userId)) {
      throw new Error('User is not a participant in this conversation');
    }

    // Remove user from hiddenFor array
    let hiddenFor = conversation.hiddenFor || [];
    hiddenFor = hiddenFor.filter(uid => uid !== userId);

    // Update the conversation
    await prisma.conversation.update({
      where: { id },
      data: {
        hiddenFor,
        updatedAt: new Date()
      }
    });

    return { success: true, message: 'Conversation unhidden' };
  } catch (error) {
    console.error('Error unhiding conversation:', error);
    throw error;
  }
};

/**
 * Block a conversation for a specific user
 * @param {String} id - Conversation ID
 * @param {String} userId - User ID
 * @returns {Promise<Object>} - Result of the operation
 */
exports.blockConversation = async (id, userId) => {
  try {
    // Get the current conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id }
    });

    if (!conversation) {
      throw new Error('Conversation not found');
    }

    // Check if user is a participant
    if (!conversation.participants.includes(userId)) {
      throw new Error('User is not a participant in this conversation');
    }

    // Add user to blockedBy array
    let blockedBy = conversation.blockedBy || [];
    if (!blockedBy.includes(userId)) {
      blockedBy.push(userId);
    }

    // Update the conversation
    await prisma.conversation.update({
      where: { id },
      data: {
        blockedBy,
        updatedAt: new Date()
      }
    });

    return { success: true, message: 'Conversation blocked' };
  } catch (error) {
    console.error('Error blocking conversation:', error);
    throw error;
  }
};

/**
 * Unblock a conversation for a specific user
 * @param {String} id - Conversation ID
 * @param {String} userId - User ID
 * @returns {Promise<Object>} - Result of the operation
 */
exports.unblockConversation = async (id, userId) => {
  try {
    // Get the current conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id }
    });

    if (!conversation) {
      throw new Error('Conversation not found');
    }

    // Check if user is a participant
    if (!conversation.participants.includes(userId)) {
      throw new Error('User is not a participant in this conversation');
    }

    // Remove user from blockedBy array
    let blockedBy = conversation.blockedBy || [];
    blockedBy = blockedBy.filter(uid => uid !== userId);

    // Update the conversation
    await prisma.conversation.update({
      where: { id },
      data: {
        blockedBy,
        updatedAt: new Date()
      }
    });

    return { success: true, message: 'Conversation unblocked' };
  } catch (error) {
    console.error('Error unblocking conversation:', error);
    throw error;
  }
};

module.exports = exports; 