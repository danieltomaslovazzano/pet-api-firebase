/**
 * User Model - Prisma Implementation
 * 
 * This model handles user-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 */

const { prisma } = require('../../config/prisma');
const admin = require('firebase-admin');

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
      pets: []
    };
  }
}

const userModel = {
  /**
   * Create a new user
   * @param {Object} userData - User data to create
   * @returns {Promise<Object>} - Created user object
   */
  createUser: async (userData) => {
    try {
      // Validate required fields
      if (!userData.email) {
        throw new Error('Email is required');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.email)) {
        throw new Error('Invalid email format');
      }

      // Validate role
      const validRoles = ['user', 'admin'];
      if (userData.role && !validRoles.includes(userData.role)) {
        throw new Error('Invalid role value');
      }

      // Validate status
      const validStatuses = ['active', 'inactive', 'blocked'];
      if (userData.status && !validStatuses.includes(userData.status)) {
        throw new Error('Invalid status value');
      }

      // Check if user with email already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email }
      });

      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Create user in PostgreSQL using Prisma
      const newUser = await prisma.user.create({
        data: {
          id: userData.id || undefined,
          email: userData.email,
          name: userData.name,
          role: userData.role || 'user',
          status: userData.status || 'active',
          profileImage: userData.profileImage,
          phone: userData.phone,
          address: userData.address,
          blockedUsers: userData.blockedUsers || [],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      
      return newUser;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('User with this email already exists');
      }
      throw error;
    }
  },

  /**
   * Get user by ID
   * @param {string} userId - User ID
   * @returns {Promise<Object|null>} - User object or null if not found
   */
  getUserById: async (userId) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          pets: true,
          memberships: {
            include: {
              organization: true
            }
          }
        }
      });
      
      if (!user) {
        throw new Error('User not found');
      }
      
      return user;
    } catch (error) {
      console.error('Error getting user from PostgreSQL:', error);
      throw error;
    }
  },

  /**
   * Update user information
   * @param {string} id - User ID
   * @param {Object} userData - User data to update
   * @returns {Promise<Object>} - Updated user object
   */
  updateUser: async (id, userData) => {
    try {
      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { id }
      });

      if (!existingUser) {
        throw new Error('User not found');
      }

      // If email is being updated, check for duplicates
      if (userData.email && userData.email !== existingUser.email) {
        const emailExists = await prisma.user.findUnique({
          where: { email: userData.email }
        });

        if (emailExists) {
          throw new Error('Email already in use');
        }
      }

      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          ...userData,
          updatedAt: new Date()
        }
      });
      
      return updatedUser;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error('User not found');
      }
      throw error;
    }
  },

  /**
   * Delete a user
   * @param {string} id - User ID
   * @returns {Promise<Object>} - Deletion result
   */
  deleteUser: async (id) => {
    try {
      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { id }
      });

      if (!existingUser) {
        throw new Error('User not found');
      }

      // Using transaction to ensure all related data is deleted
      await prisma.$transaction([
        // Delete user's pets
        prisma.pet.deleteMany({
          where: { ownerId: id }
        }),
        // Delete user's memberships
        prisma.membership.deleteMany({
          where: { userId: id }
        }),
        // Delete user's messages
        prisma.message.deleteMany({
          where: { senderId: id }
        }),
        // Delete the user
        prisma.user.delete({
          where: { id }
        })
      ]);
      
      return { message: 'User and associated data deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error('User not found');
      }
      throw error;
    }
  },

  /**
   * Get users with filters
   * @param {Object} filters - Filters to apply
   * @returns {Promise<Array>} - Array of users
   */
  getUsers: async (filters = {}) => {
    try {
      const where = {};
      
      // Apply role filter
      if (filters.role) {
        where.role = filters.role;
      }
      
      // Apply status filter
      if (filters.status) {
        where.status = filters.status;
      }
      
      // Apply search filter
      if (filters.search) {
        where.OR = [
          { email: { contains: filters.search, mode: 'insensitive' } },
          { name: { contains: filters.search, mode: 'insensitive' } },
          { phone: { contains: filters.search, mode: 'insensitive' } }
        ];
      }
      
      const users = await prisma.user.findMany({
        where,
        skip: filters.skip,
        take: filters.take,
        orderBy: filters.orderBy || { createdAt: 'desc' }
      });
      
      return users;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get user with pets
   * @param {string} userId - User ID
   * @returns {Promise<Object>} - User with pets
   */
  getUserWithPets: async (userId) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          pets: true
        }
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get user with memberships
   * @param {string} userId - User ID
   * @returns {Promise<Object>} - User with memberships
   */
  getUserWithMemberships: async (userId) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          memberships: {
            include: {
              organization: true
            }
          }
        }
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get user with blocked users
   * @param {string} userId - User ID
   * @returns {Promise<Object>} - User with blocked users
   */
  getUserWithBlockedUsers: async (userId) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get user with conversations
   * @param {string} userId - User ID
   * @returns {Promise<Object>} - User with conversations
   */
  getUserWithConversations: async (userId) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          conversations: {
            include: {
              messages: true
            }
          }
        }
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Block a user
   * @param {string} userId - User ID doing the blocking
   * @param {string} blockedUserId - User ID to block
   * @param {Function} callback - Callback function (error, result)
   */
  blockUser: async (userId, blockedUserId, callback) => {
    try {
      // Check if both users exist
      const [user, blockedUser] = await Promise.all([
        prisma.user.findUnique({ where: { id: userId } }),
        prisma.user.findUnique({ where: { id: blockedUserId } })
      ]);

      if (!user) {
        return callback(new Error('User not found'));
      }

      if (!blockedUser) {
        return callback(new Error('User to block not found'));
      }

      // Add blockedUserId to the blockedUsers array if not already there
      const blockedUsers = user.blockedUsers || [];
      if (!blockedUsers.includes(blockedUserId)) {
        blockedUsers.push(blockedUserId);
      }

      // Update the user with the new blockedUsers array
      await prisma.user.update({
        where: { id: userId },
        data: { 
          blockedUsers,
          updatedAt: new Date()
        }
      });

      callback(null, { message: `User ${blockedUserId} blocked by ${userId}` });
    } catch (error) {
      console.error('Error blocking user in PostgreSQL:', error);
      callback(error);
    }
  },

  /**
   * Unblock a user
   * @param {string} userId - User ID doing the unblocking
   * @param {string} blockedUserId - User ID to unblock
   * @param {Function} callback - Callback function (error, result)
   */
  unblockUser: async (userId, blockedUserId, callback) => {
    try {
      // Check if both users exist
      const [user, blockedUser] = await Promise.all([
        prisma.user.findUnique({ where: { id: userId } }),
        prisma.user.findUnique({ where: { id: blockedUserId } })
      ]);

      if (!user) {
        return callback(new Error('User not found'));
      }

      if (!blockedUser) {
        return callback(new Error('User to unblock not found'));
      }

      // Remove blockedUserId from the blockedUsers array
      const blockedUsers = (user.blockedUsers || []).filter(id => id !== blockedUserId);

      // Update the user with the new blockedUsers array
      await prisma.user.update({
        where: { id: userId },
        data: { 
          blockedUsers,
          updatedAt: new Date()
        }
      });

      callback(null, { message: `User ${blockedUserId} unblocked by ${userId}` });
    } catch (error) {
      console.error('Error unblocking user in PostgreSQL:', error);
      callback(error);
    }
  },

  /**
   * Get organizations for a user
   * @param {string} userId - User ID
   * @param {Function} callback - Callback function (error, organizations)
   */
  getUserOrganizations: async (userId, callback) => {
    try {
      // Get memberships for the user
      const memberships = await prisma.membership.findMany({
        where: { userId },
        include: {
          organization: true
        }
      });

      // Format the result to match the expected output
      const organizations = memberships.map(membership => ({
        ...membership.organization,
        role: membership.role,
        membershipId: membership.id
      }));

      callback(null, organizations);
    } catch (error) {
      console.error('Error getting user organizations from PostgreSQL:', error);
      callback(error);
    }
  },

  /**
   * Update multiple users
   * @param {string[]} userIds - Array of user IDs to update
   * @param {Object} updateData - Data to update for all users
   * @param {Function} callback - Callback function (error, result)
   */
  updateMultipleUsers: async (userIds, updateData, callback) => {
    try {
      // Using Prisma transaction to ensure all updates succeed or fail together
      const updatePromises = userIds.map(userId => 
        prisma.user.update({
          where: { id: userId },
          data: {
            ...updateData,
            updatedAt: new Date()
          }
        })
      );

      // Execute all updates in a transaction
      await prisma.$transaction(updatePromises);

      callback(null, { message: `${userIds.length} users updated successfully` });
    } catch (error) {
      console.error('Error updating multiple users in PostgreSQL:', error);
      callback(error);
    }
  },

  /**
   * Delete multiple users
   * @param {string[]} userIds - Array of user IDs to delete
   * @param {Function} callback - Callback function (error, result)
   */
  deleteMultipleUsers: async (userIds, callback) => {
    try {
      // Using Prisma transaction to ensure all deletions succeed or fail together
      const deletePromises = userIds.map(userId => 
        prisma.user.delete({
          where: { id: userId }
        })
      );

      // Execute all deletions in a transaction
      await prisma.$transaction(deletePromises);

      callback(null, { message: `${userIds.length} users deleted successfully` });
    } catch (error) {
      console.error('Error deleting multiple users from PostgreSQL:', error);
      callback(error);
    }
  },

  /**
   * Get a user's blocked users list
   * @param {string} userId - User ID
   * @param {Function} callback - Callback function (error, blockedUsers)
   */
  getBlockedUsers: async (userId, callback) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { blockedUsers: true }
      });

      if (!user) {
        return callback(new Error('User not found'));
      }

      // Get details for each blocked user
      const blockedUserDetails = await prisma.user.findMany({
        where: {
          id: {
            in: user.blockedUsers || []
          }
        },
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true
        }
      });

      callback(null, blockedUserDetails);
    } catch (error) {
      console.error('Error getting blocked users from PostgreSQL:', error);
      callback(error);
    }
  }
};

module.exports = userModel; 