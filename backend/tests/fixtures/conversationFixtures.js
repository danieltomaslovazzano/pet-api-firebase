/**
 * Conversation Test Fixtures
 * 
 * Provides functions to generate valid test data for conversation-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid conversation object for testing
 * @param {string} organizationId - ID of the organization
 * @param {Array} participantIds - Array of participant user IDs
 * @param {Object} overrides - Optional overrides for the default conversation data
 * @returns {Object} A valid conversation object
 */
function validConversation(organizationId, participantIds, overrides = {}) {
  const defaultConversation = {
    id: uuidv4(),
    organizationId,
    type: 'DIRECT',
    status: 'ACTIVE',
    createdAt: new Date(),
    updatedAt: new Date(),
    metadata: {
      lastMessageAt: new Date(),
      unreadCount: 0,
      isPinned: false
    },
    participants: participantIds.map(userId => ({
      id: uuidv4(),
      userId,
      role: 'MEMBER',
      joinedAt: new Date(),
      lastReadAt: new Date()
    }))
  };

  return { ...defaultConversation, ...overrides };
}

/**
 * Generate multiple valid conversation objects
 * @param {string} organizationId - ID of the organization
 * @param {Array} participantIds - Array of participant user IDs
 * @param {number} count - Number of conversations to generate
 * @param {Object} baseOverrides - Optional base overrides for all conversations
 * @returns {Array} Array of valid conversation objects
 */
function generateConversations(organizationId, participantIds, count = 1, baseOverrides = {}) {
  return Array.from({ length: count }, (_, index) => 
    validConversation(organizationId, participantIds, {
      ...baseOverrides,
      type: index % 2 === 0 ? 'DIRECT' : 'GROUP',
      metadata: {
        ...baseOverrides.metadata,
        isPinned: index % 3 === 0
      }
    })
  );
}

/**
 * Generate test data for conversation-related tests
 * @param {number} userCount - Number of users to generate
 * @param {number} orgCount - Number of organizations to generate
 * @param {number} conversationsPerOrg - Number of conversations per organization
 * @returns {Object} Object containing users, organizations, and conversations
 */
function generateConversationTestData(userCount = 3, orgCount = 2, conversationsPerOrg = 2) {
  const users = Array.from({ length: userCount }, (_, i) => ({
    id: uuidv4(),
    email: `user${i + 1}@test.com`,
    name: `Test User ${i + 1}`
  }));

  const organizations = Array.from({ length: orgCount }, (_, i) => ({
    id: uuidv4(),
    name: `Test Organization ${i + 1}`,
    email: `org${i + 1}@test.com`
  }));

  const conversations = [];
  
  // Create conversations for each organization
  organizations.forEach(org => {
    // Create direct conversations between pairs of users
    for (let i = 0; i < users.length; i++) {
      for (let j = i + 1; j < users.length; j++) {
        const directConversation = validConversation(
          org.id,
          [users[i].id, users[j].id],
          { type: 'DIRECT' }
        );
        conversations.push(directConversation);
      }
    }

    // Create group conversations with all users
    const groupConversation = validConversation(
      org.id,
      users.map(u => u.id),
      { type: 'GROUP' }
    );
    conversations.push(groupConversation);
  });

  return {
    users,
    organizations,
    conversations
  };
}

module.exports = {
  validConversation,
  generateConversations,
  generateConversationTestData
}; 