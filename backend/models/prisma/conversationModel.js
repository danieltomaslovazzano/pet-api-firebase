/**
 * Conversation Model - Prisma Implementation
 * 
 * This model handles conversation-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 */

const { prisma } = require('../../config/prisma');
const { v4: uuidv4 } = require('uuid');

/**
 * Create a new conversation
 * @param {Object} conversationData - Conversation data to create
 * @param {Function} callback - Callback function (error, conversation)
 */
exports.createConversation = async (conversationData, callback) => {
  try {
    const id = uuidv4();
    const now = new Date();
    
    // Create conversation in PostgreSQL using Prisma
    const newConversation = await prisma.conversation.create({
      data: {
        id,
        title: conversationData.title || null,
        status: conversationData.status || 'active',
        createdAt: now,
        lastMessageAt: now,
        // Connect participants through the many-to-many relationship
        participants: {
          connect: conversationData.participants.map(userId => ({ id: userId }))
        },
        // Store additional arrays as metadata in the JSON field
        metadata: {
          deletedBy: [],  // IDs of users who have soft-deleted the conversation
          hiddenBy: [],   // IDs of users who have hidden the conversation
          blockedBy: []   // IDs of users who have blocked the conversation
        }
      }
    });
    
    // We need to get the participants to match the Firebase return format
    const conversationWithParticipants = await prisma.conversation.findUnique({
      where: { id },
      include: {
        participants: true
      }
    });
    
    // Format to match Firebase response
    const result = {
      ...conversationWithParticipants,
      participants: conversationWithParticipants.participants.map(p => p.id),
      deletedBy: [],
      hiddenBy: [],
      blockedBy: []
    };
    
    callback(null, result);
  } catch (error) {
    console.error('Error creating conversation in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get a conversation by ID
 * @param {string} id - Conversation ID
 * @param {Function} callback - Callback function (error, conversation)
 */
exports.getConversationById = async (id, callback) => {
  try {
    const conversation = await prisma.conversation.findUnique({
      where: { id },
      include: {
        participants: true
      }
    });
    
    if (!conversation) {
      return callback(new Error('Conversation not found'));
    }
    
    // Format to match Firebase response
    const result = {
      ...conversation,
      participants: conversation.participants.map(p => p.id),
      deletedBy: conversation.metadata?.deletedBy || [],
      hiddenBy: conversation.metadata?.hiddenBy || [],
      blockedBy: conversation.metadata?.blockedBy || []
    };
    
    callback(null, result);
  } catch (error) {
    console.error('Error getting conversation from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get all conversations for a user (excluding those they've deleted)
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function (error, conversations)
 */
exports.getConversationsForUser = async (userId, callback) => {
  try {
    // Find conversations where the user is a participant
    const conversations = await prisma.conversation.findMany({
      where: {
        participants: {
          some: {
            id: userId
          }
        }
      },
      include: {
        participants: true
      }
    });
    
    // Filter out conversations the user has deleted
    const filteredConversations = conversations
      .filter(conv => !(conv.metadata?.deletedBy || []).includes(userId))
      .map(conv => ({
        ...conv,
        participants: conv.participants.map(p => p.id),
        deletedBy: conv.metadata?.deletedBy || [],
        hiddenBy: conv.metadata?.hiddenBy || [],
        blockedBy: conv.metadata?.blockedBy || []
      }));
    
    callback(null, filteredConversations);
  } catch (error) {
    console.error('Error getting conversations for user from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Soft delete a conversation for a user (adds userId to deletedBy)
 * @param {string} conversationId - Conversation ID
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.softDeleteConversation = async (conversationId, userId, callback) => {
  try {
    // Get current conversation to access metadata
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });
    
    if (!conversation) {
      return callback(new Error('Conversation not found'));
    }
    
    // Update deletedBy array
    const metadata = conversation.metadata || {};
    const deletedBy = metadata.deletedBy || [];
    
    if (!deletedBy.includes(userId)) {
      deletedBy.push(userId);
    }
    
    // Update the conversation
    await prisma.conversation.update({
      where: { id: conversationId },
      data: {
        metadata: {
          ...metadata,
          deletedBy
        },
        updatedAt: new Date()
      }
    });
    
    callback(null, { message: 'Conversation soft-deleted for user', conversationId, userId });
  } catch (error) {
    console.error('Error soft-deleting conversation in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Permanently delete a conversation (for admin)
 * @param {string} conversationId - Conversation ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.permanentDeleteConversation = async (conversationId, callback) => {
  try {
    // Using a transaction to ensure both the messages and conversation are deleted
    await prisma.$transaction([
      // Delete all messages in the conversation
      prisma.message.deleteMany({
        where: { conversationId }
      }),
      // Delete the conversation
      prisma.conversation.delete({
        where: { id: conversationId }
      })
    ]);
    
    callback(null, { message: 'Conversation permanently deleted', conversationId });
  } catch (error) {
    console.error('Error permanently deleting conversation from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Hide conversation for a user (adds userId to hiddenBy)
 * @param {string} conversationId - Conversation ID
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.hideConversation = async (conversationId, userId, callback) => {
  try {
    // Get current conversation to access metadata
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });
    
    if (!conversation) {
      return callback(new Error('Conversation not found'));
    }
    
    // Update hiddenBy array
    const metadata = conversation.metadata || {};
    const hiddenBy = metadata.hiddenBy || [];
    
    if (!hiddenBy.includes(userId)) {
      hiddenBy.push(userId);
    }
    
    // Update the conversation
    await prisma.conversation.update({
      where: { id: conversationId },
      data: {
        metadata: {
          ...metadata,
          hiddenBy
        },
        updatedAt: new Date()
      }
    });
    
    callback(null, { message: 'Conversation hidden for user', conversationId, userId });
  } catch (error) {
    console.error('Error hiding conversation in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Unhide conversation for a user (removes userId from hiddenBy)
 * @param {string} conversationId - Conversation ID
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.unhideConversation = async (conversationId, userId, callback) => {
  try {
    // Get current conversation to access metadata
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });
    
    if (!conversation) {
      return callback(new Error('Conversation not found'));
    }
    
    // Update hiddenBy array
    const metadata = conversation.metadata || {};
    const hiddenBy = (metadata.hiddenBy || []).filter(id => id !== userId);
    
    // Update the conversation
    await prisma.conversation.update({
      where: { id: conversationId },
      data: {
        metadata: {
          ...metadata,
          hiddenBy
        },
        updatedAt: new Date()
      }
    });
    
    callback(null, { message: 'Conversation unhidden for user', conversationId, userId });
  } catch (error) {
    console.error('Error unhiding conversation in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Block conversation for a user (adds userId to blockedBy)
 * @param {string} conversationId - Conversation ID
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.blockConversation = async (conversationId, userId, callback) => {
  try {
    // Get current conversation to access metadata
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });
    
    if (!conversation) {
      return callback(new Error('Conversation not found'));
    }
    
    // Update blockedBy array
    const metadata = conversation.metadata || {};
    const blockedBy = metadata.blockedBy || [];
    
    if (!blockedBy.includes(userId)) {
      blockedBy.push(userId);
    }
    
    // Update the conversation
    await prisma.conversation.update({
      where: { id: conversationId },
      data: {
        metadata: {
          ...metadata,
          blockedBy
        },
        updatedAt: new Date()
      }
    });
    
    callback(null, { message: 'Conversation blocked for user', conversationId, userId });
  } catch (error) {
    console.error('Error blocking conversation in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Unblock conversation for a user (removes userId from blockedBy)
 * @param {string} conversationId - Conversation ID
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.unblockConversation = async (conversationId, userId, callback) => {
  try {
    // Get current conversation to access metadata
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });
    
    if (!conversation) {
      return callback(new Error('Conversation not found'));
    }
    
    // Update blockedBy array
    const metadata = conversation.metadata || {};
    const blockedBy = (metadata.blockedBy || []).filter(id => id !== userId);
    
    // Update the conversation
    await prisma.conversation.update({
      where: { id: conversationId },
      data: {
        metadata: {
          ...metadata,
          blockedBy
        },
        updatedAt: new Date()
      }
    });
    
    callback(null, { message: 'Conversation unblocked for user', conversationId, userId });
  } catch (error) {
    console.error('Error unblocking conversation in PostgreSQL:', error);
    callback(error);
  }
};

module.exports = exports; 