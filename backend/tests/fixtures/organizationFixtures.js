/**
 * Organization Test Fixtures
 * 
 * This file provides test data generators for organization-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid organization object
 * @param {Object} overrides - Properties to override the default values
 * @returns {Object} A valid organization object
 */
const validOrganization = (overrides = {}) => ({
  id: uuidv4(),
  name: `Test Organization ${Math.random().toString(36).substring(7)}`,
  description: 'Test organization description',
  logo: 'https://example.com/logo.png',
  address: '123 Test St, Test City',
  phone: '123-456-7890',
  email: `test${Math.random().toString(36).substring(7)}@example.com`,
  status: 'active',
  createdAt: new Date(),
  updatedAt: new Date(),
  ...overrides
});

/**
 * Generate multiple organization objects
 * @param {number} count - Number of organizations to generate
 * @param {Object} baseOverrides - Base properties to override for all organizations
 * @returns {Array} Array of organization objects
 */
const generateOrganizations = (count, baseOverrides = {}) => {
  const organizations = [];
  for (let i = 0; i < count; i++) {
    const status = i % 2 === 0 ? 'active' : 'inactive';
    organizations.push(validOrganization({
      ...baseOverrides,
      status,
      name: `Test Organization ${i + 1}`,
      email: `org${i + 1}@example.com`
    }));
  }
  return organizations;
};

/**
 * Generate a valid membership object
 * @param {string} userId - User ID
 * @param {string} organizationId - Organization ID
 * @param {string} role - Member role
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

module.exports = {
  validOrganization,
  generateOrganizations,
  validMembership
}; 