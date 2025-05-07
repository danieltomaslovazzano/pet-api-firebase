/**
 * Conversation Test Fixtures
 * 
 * This file provides test data generators for conversation-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid conversation object
 * @param {Array<string>} participantIds - Array of user IDs participating in the conversation
 * @param {Object} overrides - Properties to override the default values
 * @returns {Object} A valid conversation object
 */
const validConversation = (participantIds = [], overrides = {}) => ({
  id: uuidv4(),
  title: `Test Conversation ${Math.random().toString(36).substring(7)}`,
  status: 'active',
  createdAt: new Date(),
  lastMessageAt: new Date(),
  participantIds,
  ...overrides
});

/**
 * Generate multiple conversation objects
 * @param {number} count - Number of conversations to generate
 * @param {Array<string>} participantIds - Array of user IDs to use as participants
 * @param {Object} baseOverrides - Base properties to override for all conversations
 * @returns {Array} Array of conversation objects
 */
const generateConversations = (count, participantIds, baseOverrides = {}) => {
  const conversations = [];
  const statuses = ['active', 'archived', 'deleted'];
  
  for (let i = 0; i < count; i++) {
    const status = statuses[i % statuses.length];
    const title = `Test Conversation ${i + 1}`;
    
    conversations.push(validConversation(participantIds, {
      ...baseOverrides,
      status,
      title
    }));
  }
  return conversations;
};

/**
 * Generate test data for conversation operations
 * @param {number} userCount - Number of users to generate
 * @param {number} conversationCount - Number of conversations to generate
 * @returns {Object} Object containing users and conversations
 */
const generateConversationTestData = (userCount = 5, conversationCount = 3) => {
  const users = Array(userCount).fill().map(() => ({
    id: uuidv4(),
    name: `Test User ${Math.random().toString(36).substring(7)}`,
    email: `user${Math.random().toString(36).substring(7)}@test.com`
  }));

  const conversations = generateConversations(
    conversationCount,
    users.map(u => u.id)
  );

  return { users, conversations };
};

/**
 * Generate a valid message object for a conversation
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
 * Generate multiple messages for a conversation
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
      status
    }));
  }
  return messages;
};

module.exports = {
  validConversation,
  generateConversations,
  generateConversationTestData,
  validMessage,
  generateMessages
}; 