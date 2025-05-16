/**
 * Organization Test Fixtures
 * 
 * Provides functions to generate valid test data for organization-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid organization object for testing
 * @param {Object} overrides - Optional overrides for the default organization data
 * @returns {Object} A valid organization object
 */
function validOrganization(overrides = {}) {
  const defaultOrg = {
    id: uuidv4(),
    name: `Test Organization ${Date.now()}`,
    description: 'A test organization',
    email: `org-${Date.now()}@test.com`,
    phone: '+1234567890',
    address: {
      street: '123 Test St',
      city: 'Test City',
      state: 'TS',
      zipCode: '12345',
      country: 'Test Country'
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'active',
    type: 'BUSINESS',
    settings: {
      allowMemberInvites: true,
      requireApproval: false,
      maxMembers: 100
    }
  };

  return { ...defaultOrg, ...overrides };
}

/**
 * Generate multiple valid organization objects
 * @param {number} count - Number of organizations to generate
 * @param {Object} baseOverrides - Optional base overrides for all organizations
 * @returns {Array} Array of valid organization objects
 */
function generateOrganizations(count = 5, baseOverrides = {}) {
  return Array.from({ length: count }, (_, index) => 
    validOrganization({
      ...baseOverrides,
      name: `Test Organization ${index + 1}`,
      email: `org-${index + 1}@test.com`
    })
  );
}

/**
 * Generate a valid organization member object
 * @param {string} organizationId - ID of the organization
 * @param {string} userId - ID of the user
 * @param {Object} overrides - Optional overrides for the member data
 * @returns {Object} A valid organization member object
 */
function validOrganizationMember(organizationId, userId, overrides = {}) {
  const defaultMember = {
    id: uuidv4(),
    organizationId,
    userId,
    role: 'member',
    joinedAt: new Date(),
    status: 'active',
    permissions: ['read', 'write']
  };

  return { ...defaultMember, ...overrides };
}

module.exports = {
  validOrganization,
  generateOrganizations,
  validOrganizationMember
}; 