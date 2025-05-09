/**
 * Membership Test Fixtures
 * 
 * Provides functions to generate valid test data for membership-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid membership object for testing
 * @param {string} userId - ID of the user
 * @param {string} organizationId - ID of the organization
 * @param {Object} overrides - Optional overrides for the default membership data
 * @returns {Object} A valid membership object
 */
function validMembership(userId, organizationId, overrides = {}) {
  const defaultMembership = {
    id: uuidv4(),
    userId,
    organizationId,
    role: 'MEMBER',
    status: 'ACTIVE',
    createdAt: new Date(),
    updatedAt: new Date(),
    permissions: ['READ', 'WRITE'],
    metadata: {
      joinedAt: new Date(),
      invitedBy: null,
      lastActive: new Date()
    }
  };

  return { ...defaultMembership, ...overrides };
}

/**
 * Generate multiple valid membership objects
 * @param {Array} userIds - Array of user IDs
 * @param {string} organizationId - ID of the organization
 * @param {Object} baseOverrides - Optional base overrides for all memberships
 * @returns {Array} Array of valid membership objects
 */
function generateMemberships(userIds, organizationId, baseOverrides = {}) {
  return userIds.map((userId, index) => 
    validMembership(userId, organizationId, {
      ...baseOverrides,
      role: index === 0 ? 'ADMIN' : 'MEMBER', // First user is admin
      permissions: index === 0 ? ['READ', 'WRITE', 'ADMIN'] : ['READ', 'WRITE']
    })
  );
}

/**
 * Generate test data for membership-related tests
 * @param {number} userCount - Number of users to generate
 * @param {number} orgCount - Number of organizations to generate
 * @returns {Object} Object containing users, organizations, and memberships
 */
function generateMembershipTestData(userCount = 3, orgCount = 2) {
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

  const memberships = [];
  
  // Create memberships for each user in each organization
  organizations.forEach(org => {
    const orgMemberships = generateMemberships(
      users.map(u => u.id),
      org.id
    );
    memberships.push(...orgMemberships);
  });

  return {
    users,
    organizations,
    memberships
  };
}

module.exports = {
  validMembership,
  generateMemberships,
  generateMembershipTestData
}; 