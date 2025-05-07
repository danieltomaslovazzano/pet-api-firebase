/**
 * User Test Fixtures
 * 
 * This module provides test data fixtures for user-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid user object for testing
 * @param {Object} overrides - Override default properties
 * @returns {Object} Test user object
 */
function validUser(overrides = {}) {
  const userId = overrides.id || uuidv4();
  
  return {
    id: userId,
    email: overrides.email || `test-${userId.substring(0, 6)}@example.com`,
    name: overrides.name || 'Test User',
    role: overrides.role || 'user',
    status: overrides.status || 'active',
    profileImage: overrides.profileImage || null,
    phone: overrides.phone || null,
    address: overrides.address || null,
    blockedUsers: overrides.blockedUsers || [],
    createdAt: overrides.createdAt || new Date(),
    updatedAt: overrides.updatedAt || new Date()
  };
}

/**
 * Generate a collection of test users
 * @param {Number} count - Number of users to generate
 * @param {Object} baseOverrides - Base overrides to apply to all users
 * @returns {Array<Object>} Array of test user objects
 */
function generateUsers(count = 5, baseOverrides = {}) {
  return Array.from({ length: count }, (_, index) => {
    const userOverrides = { ...baseOverrides };
    
    // Add index-based variations to make users distinct
    if (index === 0) userOverrides.role = 'admin';
    if (index === 1) userOverrides.role = 'moderator';
    if (index === 2) userOverrides.status = 'inactive';
    
    return validUser(userOverrides);
  });
}

/**
 * Predefined user roles for testing various permission scenarios
 */
const userRoles = {
  admin: validUser({ role: 'admin', name: 'Admin User' }),
  moderator: validUser({ role: 'moderator', name: 'Moderator User' }),
  regular: validUser({ role: 'user', name: 'Regular User' }),
  blocked: validUser({ status: 'blocked', name: 'Blocked User' })
};

module.exports = {
  validUser,
  generateUsers,
  userRoles
}; 