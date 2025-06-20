const axios = require('axios');
const { requestWrapper } = require('./request');

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Pre-created user pool to avoid rate limiting
const USER_POOL = [
  { email: 'test-user-01@example.com', password: 'TestPass123!', name: 'Test User 01', role: 'user' },
  { email: 'test-user-02@example.com', password: 'TestPass123!', name: 'Test User 02', role: 'user' },
  { email: 'test-user-03@example.com', password: 'TestPass123!', name: 'Test User 03', role: 'user' },
  { email: 'test-user-04@example.com', password: 'TestPass123!', name: 'Test User 04', role: 'user' },
  { email: 'test-user-05@example.com', password: 'TestPass123!', name: 'Test User 05', role: 'user' },
  { email: 'test-admin-01@example.com', password: 'TestPass123!', name: 'Test Admin 01', role: 'admin' },
  { email: 'test-admin-02@example.com', password: 'TestPass123!', name: 'Test Admin 02', role: 'admin' },
  { email: 'test-moderator-01@example.com', password: 'TestPass123!', name: 'Test Moderator 01', role: 'moderator' },
];

// Track user usage to distribute load
let userPoolIndex = 0;

// Cache for tokens
const tokenCache = new Map();

const clearTokenCache = () => {
  tokenCache.clear();
};

/**
 * Checks if a cached token is still valid
 * @param {Object} cachedEntry - Cached token entry
 * @returns {boolean} True if token is still valid
 */
const isTokenValid = (cachedEntry) => {
  return cachedEntry.expiresAt > Date.now();
};

/**
 * Gets a test user from the pre-created pool instead of creating new ones
 * This avoids Firebase rate limiting issues
 * @param {Object} options - User preferences (role, specific user)
 * @returns {Object} Test user data
 */
const getTestUser = (options = {}) => {
  const { role = 'user', index = null } = options;
  
  if (index !== null && USER_POOL[index]) {
    return USER_POOL[index];
  }
  
  // Filter by role if specified
  const filteredPool = role === 'any' ? USER_POOL : USER_POOL.filter(u => u.role === role);
  
  if (filteredPool.length === 0) {
    throw new Error(`No users found in pool with role: ${role}`);
  }
  
  // Round-robin selection to distribute load
  const user = filteredPool[userPoolIndex % filteredPool.length];
  userPoolIndex++;
  
  return user;
};

/**
 * Creates a test user (now uses pre-created pool)
 * @param {Object} userData - User data (optional, will use pool if not provided)
 * @returns {Promise<Object>} User data
 */
const createTestUser = async (userData = null) => {
  // If specific userData provided, try to create it (legacy support)
  if (userData && userData.email && !userData.email.includes('@example.com')) {
    return createCustomTestUser(userData);
  }
  
  // Use pre-created pool to avoid rate limiting
  const poolUser = getTestUser({ role: userData?.role || 'user' });
  
  console.log(`[USER POOL] Using pre-created user: ${poolUser.email}`);
  
  // Return in the expected format
  return {
    email: poolUser.email,
    name: poolUser.name,
    role: poolUser.role,
    uid: poolUser.email.replace('@example.com', '').replace(/[.-]/g, ''), // Mock UID
    id: poolUser.email.replace('@example.com', '').replace(/[.-]/g, ''), // Mock ID
    password: poolUser.password // For login
  };
};

/**
 * Creates a custom test user (fallback for special cases)
 */
const createCustomTestUser = async (userData) => {
  const maxRetries = 5;
  const baseDelay = 5000;
  
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
      if ((errorData?.meta?.firebaseCode === 'TOO_MANY_ATTEMPTS_TRY_LATER' || 
           errorData?.details?.details === 'TOO_MANY_ATTEMPTS_TRY_LATER') && 
           attempt < maxRetries) {
        const delay = baseDelay * Math.pow(2, attempt);
        console.log(`[USER CREATION] Rate limited, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries + 1})`);
        console.log(`[USER CREATION] Firebase rate limit detected, waiting longer delay for better success rate`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      // Enhanced error logging for Priority 4 debugging
      console.error('Error creating test user:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        errorData,
        message: error.message,
        userData: { email: userData.email, name: userData.name }
      });
      throw error;
    }
  }
  
  throw new Error(`Failed to create test user after ${maxRetries + 1} attempts due to persistent rate limiting`);
};

/**
 * Gets multiple test users from the pool
 * @param {number} count - Number of users needed
 * @param {string} role - Role filter (optional)
 * @returns {Array} Array of test users
 */
const getMultipleTestUsers = (count, role = 'user') => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = getTestUser({ role });
    users.push({
      email: user.email,
      name: user.name,
      role: user.role,
      uid: user.email.replace('@example.com', '').replace(/[.-]/g, ''),
      id: user.email.replace('@example.com', '').replace(/[.-]/g, ''),
      password: user.password
    });
  }
  return users;
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
  getTestUser,
  getMultipleTestUsers,
  deleteTestUser,
  getAuthToken,
  getAdminToken,
  loginAsAdmin,
  loginAsUser,
  cleanupTestData,
  cleanupTestUsers,
  clearTokenCache,
  USER_POOL
}; 