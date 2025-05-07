/**
 * Membership Model - Prisma Implementation
 * 
 * This model handles membership-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 */

const { prisma } = require('../../config/prisma');
const { v4: uuidv4 } = require('uuid');

/**
 * Create a membership (invite a user)
 * @param {Object} membershipData - Membership data to create
 * @param {Function} callback - Callback function (error, membership)
 */
exports.createMembership = async (membershipData, callback) => {
  try {
    // Check if a membership already exists for this user and organization
    const existingMembership = await prisma.membership.findFirst({
      where: {
        userId: membershipData.userId,
        organizationId: membershipData.organizationId
      }
    });
    
    if (existingMembership) {
      return callback(new Error('User is already a member of this organization'));
    }
    
    // Create the membership
    const id = uuidv4();
    const now = new Date();
    
    const newMembership = await prisma.membership.create({
      data: {
        id,
        userId: membershipData.userId,
        organizationId: membershipData.organizationId,
        role: membershipData.role || 'member',
        status: membershipData.status || 'active',
        createdAt: now,
        updatedAt: now
      }
    });
    
    callback(null, newMembership);
  } catch (error) {
    console.error('Error creating membership in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get membership by ID
 * @param {string} id - Membership ID
 * @param {Function} callback - Callback function (error, membership)
 */
exports.getMembershipById = async (id, callback) => {
  try {
    const membership = await prisma.membership.findUnique({
      where: { id }
    });
    
    if (!membership) {
      return callback(new Error('Membership not found'));
    }
    
    callback(null, membership);
  } catch (error) {
    console.error('Error getting membership from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Update role or permissions
 * @param {string} id - Membership ID
 * @param {Object} membershipData - Membership data to update
 * @param {Function} callback - Callback function (error, membership)
 */
exports.updateMembership = async (id, membershipData, callback) => {
  try {
    const updatedMembership = await prisma.membership.update({
      where: { id },
      data: {
        ...membershipData,
        updatedAt: new Date()
      }
    });
    
    callback(null, updatedMembership);
  } catch (error) {
    console.error('Error updating membership in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Delete membership (remove member)
 * @param {string} id - Membership ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.deleteMembership = async (id, callback) => {
  try {
    await prisma.membership.delete({
      where: { id }
    });
    
    callback(null, { message: 'Membership successfully deleted' });
  } catch (error) {
    console.error('Error deleting membership from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Check if a user has a specific role in an organization
 * @param {string} userId - User ID
 * @param {string} organizationId - Organization ID
 * @param {string|null} role - Role to check (or null to just check membership)
 * @param {Function} callback - Callback function (error, boolean)
 */
exports.checkUserRole = async (userId, organizationId, role, callback) => {
  try {
    const membership = await prisma.membership.findFirst({
      where: {
        userId,
        organizationId
      }
    });
    
    if (!membership) {
      return callback(null, false);
    }
    
    // If role is null, just check if the user is a member
    if (role === null) {
      return callback(null, true);
    }
    
    const hasRole = membership.role === role;
    callback(null, hasRole);
  } catch (error) {
    console.error('Error checking user role in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get a specific membership by user and organization
 * @param {string} userId - User ID
 * @param {string} organizationId - Organization ID
 * @param {Function} callback - Callback function (error, membership)
 */
exports.getMembershipByUserAndOrg = async (userId, organizationId, callback) => {
  try {
    const membership = await prisma.membership.findFirst({
      where: {
        userId,
        organizationId
      }
    });
    
    if (!membership) {
      return callback(null, null);
    }
    
    callback(null, membership);
  } catch (error) {
    console.error('Error getting membership by user and organization from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get all memberships for a user
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function (error, memberships)
 */
exports.getMembershipsByUser = async (userId, callback) => {
  try {
    const memberships = await prisma.membership.findMany({
      where: { userId }
    });
    
    callback(null, memberships);
  } catch (error) {
    console.error('Error getting memberships by user from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get all memberships for an organization
 * @param {string} organizationId - Organization ID
 * @param {Function} callback - Callback function (error, memberships)
 */
exports.getMembershipsByOrganization = async (organizationId, callback) => {
  try {
    const memberships = await prisma.membership.findMany({
      where: { organizationId }
    });
    
    callback(null, memberships);
  } catch (error) {
    console.error('Error getting memberships by organization from PostgreSQL:', error);
    callback(error);
  }
};

module.exports = exports; 