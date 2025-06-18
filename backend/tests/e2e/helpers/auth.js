const admin = require('../../../config/firebase');
const { prisma } = require('../../../config/prisma');
const axios = require('./request');

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Token cache to prevent rate limiting during mass test execution
const tokenCache = new Map();
const TOKEN_EXPIRY_BUFFER = 5 * 60 * 1000; // 5 minutes buffer before expiry

/**
 * Clears the token cache (useful for cleanup)
 */
const clearTokenCache = () => {
  tokenCache.clear();
  console.log('[AUTH CACHE] Token cache cleared');
};

/**
 * Checks if a cached token is still valid
 * @param {Object} cachedEntry - Cached token entry
 * @returns {boolean} True if token is still valid
 */
const isTokenValid = (cachedEntry) => {
  if (!cachedEntry || !cachedEntry.expiresAt) return false;
  return Date.now() < (cachedEntry.expiresAt - TOKEN_EXPIRY_BUFFER);
};

/**
 * Creates a real user for testing with retry logic for rate limiting
 * @param {Object} userData - User data to create
 * @returns {Promise<Object>} Created user data
 */
const createTestUser = async (userData) => {
  const maxRetries = 3;
  const baseDelay = 2000; // 2 seconds
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      // Create user through the API
      const response = await axios.post(`${API_URL}/auth/register`, {
        email: userData.email,
        password: userData.password,
        name: userData.displayName || userData.name
      });

      return response.data.data.user;
    } catch (error) {
      const errorData = error.response?.data;
      
      // Check if it's a rate limiting error
      if (errorData?.details?.details === 'TOO_MANY_ATTEMPTS_TRY_LATER' && attempt < maxRetries) {
        const delay = baseDelay * Math.pow(2, attempt); // Exponential backoff
        console.log(`[USER CREATION] Rate limited, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries + 1})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      console.error('Error creating test user:', errorData || error.message);
      throw error;
    }
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
 * Gets an authentication token for a user (with caching)
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User data and token
 */
const getAuthToken = async (email, password) => {
  const cacheKey = `${email}:${password}`;
  
  // Check cache first
  const cachedEntry = tokenCache.get(cacheKey);
  if (cachedEntry && isTokenValid(cachedEntry)) {
    console.log(`[AUTH CACHE] Using cached token for ${email}`);
    return {
      token: cachedEntry.token,
      user: cachedEntry.user
    };
  }

  try {
    console.log(`[AUTH CACHE] Fetching new token for ${email}`);
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });

    const result = {
      token: response.data.data.tokens.idToken,
      user: response.data.data.user
    };

    // Cache the token with expiry time (1 hour - 5 min buffer = 55 minutes)
    const expiresAt = Date.now() + (55 * 60 * 1000);
    tokenCache.set(cacheKey, {
      ...result,
      expiresAt,
      cachedAt: new Date().toISOString()
    });

    console.log(`[AUTH CACHE] Token cached for ${email}, expires at ${new Date(expiresAt).toISOString()}`);
    
    return result;
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

  const result = await getAuthToken(adminEmail, adminPassword);
  return result.token;
};

/**
 * Login as admin and return user data and token
 * @returns {Promise<Object>} Admin user data and token
 */
const loginAsAdmin = async () => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('Admin credentials not configured');
  }

  return getAuthToken(adminEmail, adminPassword);
};

/**
 * Login as a regular user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User data and token
 */
const loginAsUser = async (email, password) => {
  return getAuthToken(email, password);
};

/**
 * Comprehensive cleanup for test data
 * @param {Object} data - Object containing arrays of data to cleanup
 * @param {Array} data.users - Array of user objects to delete
 * @param {Array} data.organizations - Array of organization objects to delete
 * @param {Array} data.memberships - Array of membership objects to delete
 * @param {string} data.adminToken - Admin token for authorization
 */
const cleanupTestData = async (data) => {
  const { users = [], organizations = [], memberships = [], adminToken } = data;

  console.log('Starting cleanup of test data...');

  // Clean up memberships first (relationships)
  for (const membership of memberships) {
    try {
      await axios.delete(`${API_URL}/memberships/${membership.id}`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      console.log(`Cleaned up membership: ${membership.id}`);
    } catch (error) {
      console.warn(`Error cleaning up membership ${membership.id}:`, error.response?.data || error.message);
    }
  }

  // Clean up organizations
  for (const organization of organizations) {
    try {
      await axios.delete(`${API_URL}/organizations/${organization.id}`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      console.log(`Cleaned up organization: ${organization.name}`);
    } catch (error) {
      console.warn(`Error cleaning up organization ${organization.id}:`, error.response?.data || error.message);
    }
  }

  // Clean up users last
  for (const user of users) {
    try {
      await deleteTestUser(user.id || user.uid);
      console.log(`Cleaned up user: ${user.email}`);
    } catch (error) {
      console.warn(`Error cleaning up user ${user.email}:`, error.response?.data || error.message);
    }
  }

  console.log('Test data cleanup completed');
};

/**
 * Cleans up test users by email
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
  loginAsAdmin,
  loginAsUser,
  cleanupTestData,
  cleanupTestUsers,
  clearTokenCache
}; 