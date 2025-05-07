/**
 * Organization Model - Prisma Implementation
 * 
 * This model handles organization-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 */

const { prisma } = require('../../config/prisma');
const { v4: uuidv4 } = require('uuid');

/**
 * Create a new organization
 * @param {Object} orgData - Organization data to create
 * @param {Function} callback - Callback function (error, organization)
 */
exports.createOrganization = async (orgData, callback) => {
  try {
    const id = uuidv4();
    const now = new Date();
    
    // Create organization in PostgreSQL using Prisma
    const newOrg = await prisma.organization.create({
      data: {
        id,
        name: orgData.name,
        description: orgData.description || null,
        logo: orgData.logo || null,
        address: orgData.address || null,
        phone: orgData.phone || null,
        email: orgData.email || null,
        status: orgData.status || 'active',
        createdAt: now,
        updatedAt: now,
      }
    });
    
    // Create first membership for creator as admin
    await prisma.membership.create({
      data: {
        userId: orgData.createdBy,
        organizationId: id,
        role: 'admin',
        status: 'active',
        createdAt: now,
        updatedAt: now
      }
    });
    
    callback(null, newOrg);
  } catch (error) {
    console.error('Error creating organization in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get organization by ID
 * @param {string} id - Organization ID
 * @param {Function} callback - Callback function (error, organization)
 */
exports.getOrganizationById = async (id, callback) => {
  try {
    const organization = await prisma.organization.findUnique({
      where: { id }
    });
    
    if (!organization) {
      return callback(new Error('Organization not found'));
    }
    
    callback(null, organization);
  } catch (error) {
    console.error('Error getting organization from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Update organization information
 * @param {string} id - Organization ID
 * @param {Object} orgData - Organization data to update
 * @param {Function} callback - Callback function (error, organization)
 */
exports.updateOrganization = async (id, orgData, callback) => {
  try {
    const updatedOrg = await prisma.organization.update({
      where: { id },
      data: {
        ...orgData,
        updatedAt: new Date()
      }
    });
    
    callback(null, updatedOrg);
  } catch (error) {
    console.error('Error updating organization in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Delete an organization
 * @param {string} id - Organization ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.deleteOrganization = async (id, callback) => {
  try {
    // Using Prisma transaction to ensure all operations succeed or fail together
    await prisma.$transaction([
      // Delete all memberships associated with this organization
      prisma.membership.deleteMany({
        where: { organizationId: id }
      }),
      // Delete the organization
      prisma.organization.delete({
        where: { id }
      })
    ]);
    
    callback(null, { message: 'Organization and associated memberships deleted successfully' });
  } catch (error) {
    console.error('Error deleting organization from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get organization members
 * @param {string} orgId - Organization ID
 * @param {Function} callback - Callback function (error, members)
 */
exports.getOrganizationMembers = async (orgId, callback) => {
  try {
    // Get memberships for the organization
    const memberships = await prisma.membership.findMany({
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
};

module.exports = exports; 