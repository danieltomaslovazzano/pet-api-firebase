const admin = require('../../../config/firebase');
const { prisma } = require('../../../config/prisma');
const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

/**
 * Creates a real user for testing
 * @param {Object} userData - User data to create
 * @returns {Promise<Object>} Created user data
 */
const createTestUser = async (userData) => {
  try {
    // Create user through the API
    const response = await axios.post(`${API_URL}/auth/register`, {
      email: userData.email,
      password: userData.password,
      name: userData.name
    });

    return response.data.user;
  } catch (error) {
    console.error('Error creating test user:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Deletes a test user
 * @param {string} userId - User ID to delete
 */
const deleteTestUser = async (userId) => {
  try {
    // Get admin token
    const adminToken = await getAdminToken();
    
    // Delete user through the API
    await axios.delete(`${API_URL}/admin/users/${userId}`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
  } catch (error) {
    console.warn('Error deleting test user:', error.response?.data || error.message);
  }
};

/**
 * Gets an authentication token for a user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<string>} Authentication token
 */
const getAuthToken = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });

    return response.data.tokens.idToken;
  } catch (error) {
    console.error('Error getting auth token:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Gets an admin token for testing
 * @returns {Promise<string>} Admin authentication token
 */
const getAdminToken = async () => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('Admin credentials not configured');
  }

  return getAuthToken(adminEmail, adminPassword);
};

/**
 * Cleans up test users
 * @param {Array<string>} emails - Array of email addresses to clean up
 */
const cleanupTestUsers = async (emails) => {
  const adminToken = await getAdminToken();
  
  for (const email of emails) {
    try {
      // Find user by email
      const response = await axios.get(`${API_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${adminToken}` },
        params: { email }
      });

      const users = response.data;
      if (users && users.length > 0) {
        await deleteTestUser(users[0].id);
      }
    } catch (error) {
      console.warn(`Error cleaning up user ${email}:`, error.response?.data || error.message);
    }
  }
};

module.exports = {
  createTestUser,
  deleteTestUser,
  getAuthToken,
  getAdminToken,
  cleanupTestUsers
}; 