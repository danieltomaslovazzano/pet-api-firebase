/**
 * Message Test Fixtures
 * 
 * Provides functions to generate valid test data for message-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid message object for testing
 * @param {string} conversationId - ID of the conversation
 * @param {string} senderId - ID of the message sender
 * @param {Object} overrides - Optional overrides for the default message data
 * @returns {Object} A valid message object
 */
function validMessage(conversationId, senderId, overrides = {}) {
  const defaultMessage = {
    id: uuidv4(),
    conversationId,
    senderId,
    content: 'Test message content',
    type: 'TEXT',
    status: 'SENT',
    createdAt: new Date(),
    updatedAt: new Date(),
    metadata: {
      readBy: [senderId],
      deliveredTo: [senderId],
      attachments: []
    }
  };

  return { ...defaultMessage, ...overrides };
}

/**
 * Generate multiple valid message objects
 * @param {string} conversationId - ID of the conversation
 * @param {Array} senderIds - Array of sender user IDs
 * @param {number} count - Number of messages to generate
 * @param {Object} baseOverrides - Optional base overrides for all messages
 * @returns {Array} Array of valid message objects
 */
function generateMessages(conversationId, senderIds, count = 1, baseOverrides = {}) {
  return Array.from({ length: count }, (_, index) => 
    validMessage(
      conversationId,
      senderIds[index % senderIds.length],
      {
        ...baseOverrides,
        content: `Test message ${index + 1}`,
        type: index % 2 === 0 ? 'TEXT' : 'IMAGE',
        metadata: {
          ...baseOverrides.metadata,
          attachments: index % 2 === 0 ? [] : [{ type: 'image', url: `https://example.com/image${index}.jpg` }]
        }
      }
    )
  );
}

/**
 * Generate test data for message-related tests
 * @param {number} userCount - Number of users to generate
 * @param {number} conversationCount - Number of conversations to generate
 * @param {number} messagesPerConversation - Number of messages per conversation
 * @returns {Object} Object containing users, conversations, and messages
 */
function generateMessageTestData(userCount = 3, conversationCount = 2, messagesPerConversation = 5) {
  const users = Array.from({ length: userCount }, (_, i) => ({
    id: uuidv4(),
    email: `user${i + 1}@test.com`,
    name: `Test User ${i + 1}`
  }));

  const conversations = Array.from({ length: conversationCount }, (_, i) => ({
    id: uuidv4(),
    type: i % 2 === 0 ? 'DIRECT' : 'GROUP',
    status: 'ACTIVE',
    participants: users.map(user => ({
      id: uuidv4(),
      userId: user.id,
      role: 'MEMBER'
    }))
  }));

  const messages = [];
  
  // Create messages for each conversation
  conversations.forEach(conversation => {
    const conversationMessages = generateMessages(
      conversation.id,
      users.map(u => u.id),
      messagesPerConversation
    );
    messages.push(...conversationMessages);
  });

  return {
    users,
    conversations,
    messages
  };
}

/**
 * Generate a message with attachments
 * @param {string} conversationId - ID of the conversation
 * @param {string} senderId - ID of the user sending the message
 * @param {Array<Object>} attachments - Array of attachment objects
 * @returns {Object} A message object with attachments
 */
const messageWithAttachments = (conversationId, senderId, attachments = []) => {
  return validMessage(conversationId, senderId, {
    attachments: attachments.map(attachment => ({
      type: attachment.type || 'image',
      url: attachment.url || `https://example.com/${uuidv4()}.jpg`,
      name: attachment.name || `attachment-${uuidv4()}`,
      size: attachment.size || 1024
    }))
  });
};

/**
 * Generate a message with location data
 * @param {string} conversationId - ID of the conversation
 * @param {string} senderId - ID of the user sending the message
 * @param {Object} location - Location data
 * @returns {Object} A message object with location data
 */
const messageWithLocation = (conversationId, senderId, location = {}) => {
  return validMessage(conversationId, senderId, {
    location: {
      latitude: location.latitude || 40.7128,
      longitude: location.longitude || -74.0060,
      name: location.name || 'New York City',
      ...location
    }
  });
};

module.exports = {
  validMessage,
  generateMessages,
  generateMessageTestData,
  messageWithAttachments,
  messageWithLocation
}; 