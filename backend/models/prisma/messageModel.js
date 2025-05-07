/**
 * Message Model - Prisma Implementation
 * 
 * This model handles message-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 */

const { prisma } = require('../../config/prisma');
const { v4: uuidv4 } = require('uuid');

/**
 * Create a new message
 * @param {Object} messageData - Message data to create
 * @param {Function} callback - Callback function (error, message)
 */
exports.createMessage = async (messageData, callback) => {
  try {
    const id = uuidv4();
    const now = new Date();
    
    // Validate required fields
    if (!messageData.conversationId || !messageData.senderId || !messageData.content) {
      return callback(new Error('Missing required fields: conversationId, senderId, or content'));
    }
    
    // Format location and attachments if present
    const location = messageData.location || null;
    const attachments = messageData.attachments || null;
    
    // Create message in PostgreSQL using Prisma
    const newMessage = await prisma.message.create({
      data: {
        id,
        conversationId: messageData.conversationId,
        senderId: messageData.senderId,
        content: messageData.content,
        status: messageData.status || 'sent',
        timestamp: now,
        location,
        attachments
      }
    });
    
    // Update the conversation's lastMessageAt timestamp
    await prisma.conversation.update({
      where: { id: messageData.conversationId },
      data: { lastMessageAt: now }
    });
    
    callback(null, newMessage);
  } catch (error) {
    console.error('Error creating message in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get messages by conversation ID
 * @param {string} conversationId - Conversation ID
 * @param {Function} callback - Callback function (error, messages)
 */
exports.getMessagesByConversation = async (conversationId, callback) => {
  try {
    // Get messages for the conversation, ordered by timestamp
    const messages = await prisma.message.findMany({
      where: { conversationId },
      orderBy: { timestamp: 'asc' }
    });
    
    callback(null, messages);
  } catch (error) {
    console.error('Error getting messages from PostgreSQL:', error);
    callback(error);
  }
};

module.exports = exports; 