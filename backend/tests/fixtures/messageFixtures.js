/**
 * Message Test Fixtures
 * 
 * This file provides test data generators for message-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid message object
 * @param {string} conversationId - ID of the conversation
 * @param {string} senderId - ID of the user sending the message
 * @param {Object} overrides - Properties to override the default values
 * @returns {Object} A valid message object
 */
const validMessage = (conversationId, senderId, overrides = {}) => ({
  id: uuidv4(),
  conversationId,
  senderId,
  content: `Test message ${Math.random().toString(36).substring(7)}`,
  status: 'sent',
  timestamp: new Date(),
  attachments: [],
  location: null,
  ...overrides
});

/**
 * Generate multiple messages
 * @param {number} count - Number of messages to generate
 * @param {string} conversationId - ID of the conversation
 * @param {Array<string>} senderIds - Array of user IDs to use as senders
 * @param {Object} baseOverrides - Base properties to override for all messages
 * @returns {Array} Array of message objects
 */
const generateMessages = (count, conversationId, senderIds, baseOverrides = {}) => {
  const messages = [];
  const statuses = ['sent', 'delivered', 'read'];
  
  for (let i = 0; i < count; i++) {
    const senderId = senderIds[i % senderIds.length];
    const status = statuses[i % statuses.length];
    
    messages.push(validMessage(conversationId, senderId, {
      ...baseOverrides,
      status,
      content: `Test message ${i + 1}`
    }));
  }
  return messages;
};

/**
 * Generate test data for message operations
 * @param {number} userCount - Number of users to generate
 * @param {number} messageCount - Number of messages to generate per conversation
 * @returns {Object} Object containing users, conversations, and messages
 */
const generateMessageTestData = (userCount = 3, messageCount = 5) => {
  const users = Array(userCount).fill().map(() => ({
    id: uuidv4(),
    name: `Test User ${Math.random().toString(36).substring(7)}`,
    email: `user${Math.random().toString(36).substring(7)}@test.com`
  }));

  const conversationId = uuidv4();
  const messages = generateMessages(messageCount, conversationId, users.map(u => u.id));

  return { users, conversationId, messages };
};

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