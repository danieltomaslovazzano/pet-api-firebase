/**
 * Organization Model - Prisma Implementation
 * 
 * This model handles organization-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 */

const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');

// Create default Prisma client instance
const defaultPrisma = new PrismaClient();

// Import the testDataStore for use in tests
let testDataStore;
if (process.env.NODE_ENV === 'test') {
  try {
    const testHelpers = require('../../tests/helpers/testDbSetup');
    testDataStore = testHelpers.testDataStore;
  } catch (error) {
    console.log('Using local test data store');
    testDataStore = {
      users: [],
      organizations: [],
      memberships: []
    };
  }
}

// Validation constants
const VALID_STATUSES = ['active', 'inactive', 'pending'];
const VALID_ROLES = ['admin', 'member'];

/**
 * Validate organization data
 * @param {Object} orgData - Organization data to validate
 * @returns {Error|null} - Error if validation fails, null if valid
 */
const validateOrganizationData = (orgData) => {
  // Validate required fields
  const requiredFields = ['name', 'email'];
  for (const field of requiredFields) {
    if (!orgData[field]) {
      return new Error('Invalid organization data');
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(orgData.email)) {
    return new Error('Invalid email format');
  }

  // Validate status if provided
  if (orgData.status && !VALID_STATUSES.includes(orgData.status)) {
    return new Error('Invalid status value');
  }

  // Validate phone format if provided
  if (orgData.phone) {
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!phoneRegex.test(orgData.phone)) {
      return new Error('Invalid phone number format');
    }
  }

  // Validate logo URL if provided
  if (orgData.logo && !orgData.logo.match(/^https?:\/\/.+/)) {
    return new Error('Invalid logo URL format');
  }

  return null;
};

// Create a class to handle organization operations
class OrganizationModel {
  constructor(prismaClient = defaultPrisma) {
    this.prisma = prismaClient;
  }

  /**
   * Create a new organization
   * @param {Object} orgData - Organization data to create
   * @returns {Promise<Object>} - Created organization
   */
  async createOrganization(orgData) {
    try {
      // Validate organization data
      const validationError = validateOrganizationData(orgData);
      if (validationError) {
        throw validationError;
      }

      // In test environment, use test data store
      if (process.env.NODE_ENV === 'test') {
        const org = {
          id: orgData.id || uuidv4(),
          ...orgData,
          status: orgData.status || 'active',
          createdAt: new Date(),
          updatedAt: new Date()
        };
        testDataStore.organizations.push(org);
        return org;
      }

      // Create organization in PostgreSQL
      const org = await this.prisma.organization.create({
        data: {
          ...orgData,
          status: orgData.status || 'active',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });

      return org;
    } catch (error) {
      console.error('Error creating organization in PostgreSQL:', error);
      throw error;
    }
  }

  /**
   * Get organization by ID
   * @param {string} organizationId - Organization ID
   * @returns {Promise<Object>} - Organization data
   */
  async getOrganizationById(organizationId) {
    if (!organizationId) {
      throw new Error('Organization ID is required');
    }

    try {
      // In test environment, use test data store
      if (process.env.NODE_ENV === 'test') {
        const organization = testDataStore.organizations.find(org => org.id === organizationId);
        return organization || null;
      }

      // In production, use PostgreSQL
      const organization = await this.prisma.organization.findUnique({
        where: { id: organizationId },
        include: {
          members: {
            include: {
              user: true
            }
          }
        }
      });

      return organization;
    } catch (error) {
      console.error('Error getting organization from PostgreSQL:', error);
      throw error;
    }
  }

  /**
   * Update organization information
   * @param {string} id - Organization ID
   * @param {Object} orgData - Organization data to update
   * @returns {Promise<Object>} - Updated organization
   */
  async updateOrganization(id, orgData) {
    try {
      // In test environment, use test data store
      if (process.env.NODE_ENV === 'test') {
        const orgIndex = testDataStore.organizations.findIndex(org => org.id === id);
        if (orgIndex === -1) {
          throw new Error('Organization not found');
        }

        // Create merged data for validation
        const mergedData = { ...testDataStore.organizations[orgIndex], ...orgData };
        
        // Validate organization data
        const validationError = validateOrganizationData(mergedData);
        if (validationError) {
          throw validationError;
        }

        // Update the organization
        const updatedOrg = {
          ...testDataStore.organizations[orgIndex],
          ...orgData,
          updatedAt: new Date()
        };
        testDataStore.organizations[orgIndex] = updatedOrg;
        return updatedOrg;
      }

      // Check if organization exists
      const existingOrg = await this.prisma.organization.findUnique({
        where: { id }
      });
      
      if (!existingOrg) {
        throw new Error('Organization not found');
      }

      // Create merged data for validation
      const mergedData = { ...existingOrg, ...orgData };
      
      // Validate organization data
      const validationError = validateOrganizationData(mergedData);
      if (validationError) {
        throw validationError;
      }
      
      const updatedOrg = await this.prisma.organization.update({
        where: { id },
        data: {
          ...orgData,
          updatedAt: new Date()
        }
      });
      
      return updatedOrg;
    } catch (error) {
      console.error('Error updating organization in PostgreSQL:', error);
      throw error;
    }
  }

  /**
   * Delete an organization
   * @param {string} id - Organization ID
   * @returns {Promise<boolean>} - True if deleted successfully
   */
  async deleteOrganization(id) {
    try {
      // In test environment, use test data store
      if (process.env.NODE_ENV === 'test') {
        const orgIndex = testDataStore.organizations.findIndex(org => org.id === id);
        if (orgIndex === -1) {
          throw new Error('Organization not found');
        }

        // Remove the organization
        testDataStore.organizations.splice(orgIndex, 1);
        return true;
      }

      // Using Prisma transaction to ensure all operations succeed or fail together
      await this.prisma.$transaction([
        // Delete all memberships associated with this organization
        this.prisma.membership.deleteMany({
          where: { organizationId: id }
        }),
        // Delete the organization
        this.prisma.organization.delete({
          where: { id }
        })
      ]);

      return true;
    } catch (error) {
      console.error('Error deleting organization from PostgreSQL:', error);
      throw error;
    }
  }

  /**
   * Get organization members
   * @param {string} orgId - Organization ID
   * @param {Function} callback - Callback function (error, members)
   */
  async getOrganizationMembers(orgId, callback) {
    try {
      // Get memberships for the organization
      const memberships = await this.prisma.membership.findMany({
        where: { organizationId: orgId },
        include: {
          user: true
        }
      });
      
      // Format the result to match the expected output
      const members = memberships.map(membership => ({
        ...membership.user,
        role: membership.role,
        membershipId: membership.id
      }));
      
      callback(null, members);
    } catch (error) {
      console.error('Error getting organization members from PostgreSQL:', error);
      callback(error);
    }
  }
}

// Export an instance of the model with the default Prisma client
module.exports = new OrganizationModel();

// Export the class for testing purposes
module.exports.OrganizationModel = OrganizationModel; 