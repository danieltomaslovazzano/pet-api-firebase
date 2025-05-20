/**
 * Membership Model - Prisma Implementation
 * 
 * This model handles membership-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 */

const { prisma } = require('../../config/prisma');
const { v4: uuidv4 } = require('uuid');

/**
 * Create a new membership
 * @param {Object} membershipData - Membership data
 * @returns {Promise<Object>} - Created membership
 */
exports.createMembership = async (membershipData) => {
  try {
    // Check if a membership already exists for this user and organization
    const existingMembership = await prisma.membership.findFirst({
      where: {
        userId: membershipData.userId,
        organizationId: membershipData.organizationId
      }
    });
    
    if (existingMembership) {
      throw new Error('User is already a member of this organization');
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
    
    return newMembership;
  } catch (error) {
    console.error('Error creating membership in PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get a membership by ID
 * @param {String} id - Membership ID
 * @returns {Promise<Object>} - Membership object
 */
exports.getMembershipById = async (id) => {
  try {
    const membership = await prisma.membership.findUnique({
      where: { id }
    });
    
    if (!membership) {
      throw new Error('Membership not found');
    }
    
    return membership;
  } catch (error) {
    console.error('Error getting membership from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Update role or permissions
 * @param {string} id - Membership ID
 * @param {Object} membershipData - Membership data to update
 * @returns {Promise<Object>} - Updated membership
 */
exports.updateMembership = async (id, membershipData) => {
  try {
    const updatedMembership = await prisma.membership.update({
      where: { id },
      data: {
        ...membershipData,
        updatedAt: new Date()
      }
    });
    
    return updatedMembership;
  } catch (error) {
    console.error('Error updating membership in PostgreSQL:', error);
    throw error;
  }
};

/**
 * Delete membership (remove member)
 * @param {string} id - Membership ID
 * @returns {Promise<Object>} - Result of the operation
 */
exports.deleteMembership = async (id) => {
  try {
    await prisma.membership.delete({
      where: { id }
    });
    
    return { message: 'Membership successfully deleted' };
  } catch (error) {
    console.error('Error deleting membership from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Check if a user has a specific role in an organization
 * @param {string} userId - User ID
 * @param {string} organizationId - Organization ID
 * @param {string|null} role - Role to check (or null to just check membership)
 * @returns {Promise<boolean>} - True if the user has the role, false otherwise
 */
exports.checkUserRole = async (userId, organizationId, role) => {
  try {
    const membership = await prisma.membership.findFirst({
      where: {
        userId,
        organizationId
      }
    });
    
    if (!membership) {
      return false;
    }
    
    // If role is null, just check if the user is a member
    if (role === null) {
      return true;
    }
    
    const hasRole = membership.role === role;
    return hasRole;
  } catch (error) {
    console.error('Error checking user role in PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get a specific membership by user and organization
 * @param {string} userId - User ID
 * @param {string} organizationId - Organization ID
 * @returns {Promise<Object>} - Membership object
 */
exports.getMembershipByUserAndOrg = async (userId, organizationId) => {
  try {
    const membership = await prisma.membership.findFirst({
      where: {
        userId,
        organizationId
      }
    });
    
    if (!membership) {
      return null;
    }
    
    return membership;
  } catch (error) {
    console.error('Error getting membership by user and organization from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get all memberships for a user
 * @param {string} userId - User ID
 * @returns {Promise<Array>} - Array of memberships
 */
exports.getMembershipsByUser = async (userId) => {
  try {
    const memberships = await prisma.membership.findMany({
      where: { userId }
    });
    
    return memberships;
  } catch (error) {
    console.error('Error getting memberships by user from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get all memberships for an organization
 * @param {string} organizationId - Organization ID
 * @returns {Promise<Array>} - Array of memberships
 */
exports.getMembershipsByOrganization = async (organizationId) => {
  try {
    const memberships = await prisma.membership.findMany({
      where: { organizationId }
    });
    
    return memberships;
  } catch (error) {
    console.error('Error getting memberships by organization from PostgreSQL:', error);
    throw error;
  }
};

module.exports = exports; 