/**
 * Membership Test Fixtures
 * 
 * This file provides test data generators for membership-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid membership object
 * @param {string} userId - User ID
 * @param {string} organizationId - Organization ID
 * @param {string} role - Member role (default: 'member')
 * @param {Object} overrides - Properties to override the default values
 * @returns {Object} A valid membership object
 */
const validMembership = (userId, organizationId, role = 'member', overrides = {}) => ({
  id: uuidv4(),
  userId,
  organizationId,
  role,
  status: 'active',
  createdAt: new Date(),
  updatedAt: new Date(),
  ...overrides
});

/**
 * Generate multiple membership objects
 * @param {number} count - Number of memberships to generate
 * @param {string} organizationId - Organization ID
 * @param {Array<string>} userIds - Array of user IDs
 * @param {Object} baseOverrides - Base properties to override for all memberships
 * @returns {Array} Array of membership objects
 */
const generateMemberships = (count, organizationId, userIds, baseOverrides = {}) => {
  const memberships = [];
  const roles = ['member', 'admin', 'moderator'];
  
  for (let i = 0; i < count; i++) {
    const userId = userIds[i % userIds.length];
    const role = roles[i % roles.length];
    const status = i % 2 === 0 ? 'active' : 'inactive';
    
    memberships.push(validMembership(userId, organizationId, role, {
      ...baseOverrides,
      status
    }));
  }
  return memberships;
};

/**
 * Generate test data for membership operations
 * @param {number} userCount - Number of users to generate
 * @param {number} orgCount - Number of organizations to generate
 * @returns {Object} Object containing users, organizations, and memberships
 */
const generateMembershipTestData = (userCount = 5, orgCount = 2) => {
  const users = Array(userCount).fill().map(() => ({
    id: uuidv4(),
    name: `Test User ${Math.random().toString(36).substring(7)}`,
    email: `user${Math.random().toString(36).substring(7)}@test.com`
  }));

  const organizations = Array(orgCount).fill().map(() => ({
    id: uuidv4(),
    name: `Test Organization ${Math.random().toString(36).substring(7)}`,
    status: 'active'
  }));

  const memberships = [];
  organizations.forEach(org => {
    const orgMemberships = generateMemberships(
      Math.floor(userCount / orgCount),
      org.id,
      users.map(u => u.id)
    );
    memberships.push(...orgMemberships);
  });

  return { users, organizations, memberships };
};

module.exports = {
  validMembership,
  generateMemberships,
  generateMembershipTestData
}; 