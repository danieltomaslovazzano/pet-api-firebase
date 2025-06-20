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

// Enhanced rate limiting configuration
const RATE_LIMIT_CONFIG = {
  // Detection patterns for different rate limiting scenarios
  DETECTION_PATTERNS: [
    'TOO_MANY_ATTEMPTS_TRY_LATER',
    'QUOTA_EXCEEDED',
    'RATE_LIMIT_EXCEEDED',
    'REQUESTS_THROTTLED',
    'FIREBASE_RATE_LIMIT'
  ],
  
  // Exponential backoff configuration
  BACKOFF: {
    BASE_DELAY: 2000,        // Start with 2 seconds
    MAX_DELAY: 30000,        // Max 30 seconds
    MULTIPLIER: 2,           // Double each time
    JITTER_MAX: 1000,        // Add random jitter up to 1s
    MAX_RETRIES: 6           // Maximum retry attempts
  },
  
  // Load distribution settings
  LOAD_DISTRIBUTION: {
    USER_POOL_ROTATION: true,
    REQUEST_SPACING: 100,     // 100ms between requests
    BATCH_SIZE: 3,           // Max 3 concurrent requests
    COOLDOWN_PERIOD: 5000    // 5s cooldown after rate limit
  }
};

// Track user usage to distribute load with enhanced rotation
let userPoolIndex = 0;
let lastRequestTime = 0;
let rateLimitCooldownUntil = 0;

// Enhanced cache for tokens with metadata
const tokenCache = new Map();
const requestMetrics = {
  totalRequests: 0,
  rateLimitHits: 0,
  cacheHits: 0,
  successfulLogins: 0
};

const clearTokenCache = () => {
  tokenCache.clear();
  console.log('[RATE_LIMIT] Token cache cleared');
};

/**
 * Enhanced rate limit detection
 * @param {Object} error - Error object from axios
 * @returns {boolean} True if rate limit detected
 */
const isRateLimitError = (error) => {
  const errorData = error.response?.data;
  const errorMessage = error.message || '';
  const statusCode = error.response?.status;
  
  // Check multiple rate limit indicators
  const indicators = [
    // Firebase specific
    errorData?.meta?.firebaseCode === 'TOO_MANY_ATTEMPTS_TRY_LATER',
    errorData?.details?.details === 'TOO_MANY_ATTEMPTS_TRY_LATER',
    errorData?.error?.message === 'TOO_MANY_ATTEMPTS_TRY_LATER',
    
    // HTTP status codes
    statusCode === 429,
    statusCode === 503,
    
    // Error message patterns
    RATE_LIMIT_CONFIG.DETECTION_PATTERNS.some(pattern => 
      errorMessage.includes(pattern) || 
      JSON.stringify(errorData).includes(pattern)
    )
  ];
  
  return indicators.some(indicator => indicator === true);
};

/**
 * Enhanced exponential backoff with jitter
 * @param {number} attempt - Current attempt number
 * @returns {number} Delay in milliseconds
 */
const calculateBackoffDelay = (attempt) => {
  const { BASE_DELAY, MAX_DELAY, MULTIPLIER, JITTER_MAX } = RATE_LIMIT_CONFIG.BACKOFF;
  
  // Exponential backoff: base * (multiplier ^ attempt)
  const exponentialDelay = BASE_DELAY * Math.pow(MULTIPLIER, attempt);
  
  // Add random jitter to prevent thundering herd
  const jitter = Math.random() * JITTER_MAX;
  
  // Cap at maximum delay
  const totalDelay = Math.min(exponentialDelay + jitter, MAX_DELAY);
  
  console.log(`[RATE_LIMIT] Calculated backoff delay: ${totalDelay}ms (attempt ${attempt + 1})`);
  return totalDelay;
};

/**
 * Smart request throttling to prevent rate limits
 * @returns {Promise<void>}
 */
const throttleRequest = async () => {
  const now = Date.now();
  const { REQUEST_SPACING, COOLDOWN_PERIOD } = RATE_LIMIT_CONFIG.LOAD_DISTRIBUTION;
  
  // Check if we're in cooldown period
  if (now < rateLimitCooldownUntil) {
    const cooldownRemaining = rateLimitCooldownUntil - now;
    console.log(`[RATE_LIMIT] In cooldown period, waiting ${cooldownRemaining}ms`);
    await new Promise(resolve => setTimeout(resolve, cooldownRemaining));
  }
  
  // Ensure minimum spacing between requests
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < REQUEST_SPACING) {
    const delay = REQUEST_SPACING - timeSinceLastRequest;
    console.log(`[RATE_LIMIT] Throttling request, waiting ${delay}ms`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  lastRequestTime = Date.now();
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
 * Enhanced user pool selection with load distribution
 * @param {Object} options - User preferences (role, specific user)
 * @returns {Object} Test user data
 */
const getTestUser = (options = {}) => {
  const { role = 'user', index = null, forceNew = false } = options;
  
  if (index !== null && USER_POOL[index]) {
    return USER_POOL[index];
  }
  
  // Filter by role if specified
  const filteredPool = role === 'any' ? USER_POOL : USER_POOL.filter(u => u.role === role);
  
  if (filteredPool.length === 0) {
    throw new Error(`No users found in pool with role: ${role}`);
  }
  
  // Enhanced round-robin selection with load distribution
  if (RATE_LIMIT_CONFIG.LOAD_DISTRIBUTION.USER_POOL_ROTATION || forceNew) {
    userPoolIndex = (userPoolIndex + 1) % filteredPool.length;
  }
  
  const user = filteredPool[userPoolIndex];
  
  console.log(`[USER_POOL] Selected user: ${user.email} (index: ${userPoolIndex}/${filteredPool.length})`);
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
 * Enhanced custom test user creation with improved rate limiting
 */
const createCustomTestUser = async (userData) => {
  const { MAX_RETRIES } = RATE_LIMIT_CONFIG.BACKOFF;
  
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      // Apply request throttling
      await throttleRequest();
      
      // Track request metrics
      requestMetrics.totalRequests++;
      
      // Create user through the API
      const response = await axios.post(`${API_URL}/auth/register`, {
        email: userData.email,
        password: userData.password,
        name: userData.displayName || userData.name
      });

      console.log(`[USER_CREATION] Successfully created user: ${userData.email}`);
      return response.data.data.user;
      
    } catch (error) {
      // Enhanced rate limit detection
      if (isRateLimitError(error) && attempt < MAX_RETRIES) {
        requestMetrics.rateLimitHits++;
        
        // Set cooldown period
        rateLimitCooldownUntil = Date.now() + RATE_LIMIT_CONFIG.LOAD_DISTRIBUTION.COOLDOWN_PERIOD;
        
        // Calculate enhanced backoff delay
        const delay = calculateBackoffDelay(attempt);
        
        console.log(`[USER_CREATION] Rate limit detected, backing off for ${delay}ms (attempt ${attempt + 1}/${MAX_RETRIES + 1})`);
        console.log(`[USER_CREATION] Rate limit stats: ${requestMetrics.rateLimitHits}/${requestMetrics.totalRequests} requests hit rate limit`);
        
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      // Enhanced error logging with metrics
      console.error('Error creating test user:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        errorData: error.response?.data,
        message: error.message,
        userData: { email: userData.email, name: userData.name },
        attempt: attempt + 1,
        isRateLimit: isRateLimitError(error),
        metrics: requestMetrics
      });
      throw error;
    }
  }
  
  throw new Error(`Failed to create test user after ${MAX_RETRIES + 1} attempts. Rate limit stats: ${requestMetrics.rateLimitHits}/${requestMetrics.totalRequests}`);
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
 * Enhanced authentication token retrieval with rate limiting and caching
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User data and token
 */
const getAuthToken = async (email, password) => {
  const cacheKey = `${email}:${password}`;
  
  // Check cache first
  const cachedEntry = tokenCache.get(cacheKey);
  if (cachedEntry && isTokenValid(cachedEntry)) {
    requestMetrics.cacheHits++;
    console.log(`[AUTH CACHE] Using cached token for ${email} (cache hit: ${requestMetrics.cacheHits})`);
    return {
      token: cachedEntry.token,
      user: cachedEntry.user
    };
  }

  const { MAX_RETRIES } = RATE_LIMIT_CONFIG.BACKOFF;
  
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      // Apply request throttling
      await throttleRequest();
      
      // Track request metrics
      requestMetrics.totalRequests++;
      
      console.log(`[AUTH CACHE] Fetching new token for ${email} (attempt ${attempt + 1})`);
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password
      });

      const result = {
        token: response.data.data.tokens.idToken,
        user: response.data.data.user
      };

      // Enhanced caching with extended expiry time (1 hour - 5 min buffer = 55 minutes)
      const expiresAt = Date.now() + (55 * 60 * 1000);
      tokenCache.set(cacheKey, {
        ...result,
        expiresAt,
        cachedAt: new Date().toISOString(),
        loginAttempts: attempt + 1
      });

      requestMetrics.successfulLogins++;
      console.log(`[AUTH CACHE] Token cached for ${email}, expires at ${new Date(expiresAt).toISOString()}`);
      console.log(`[AUTH METRICS] Success rate: ${requestMetrics.successfulLogins}/${requestMetrics.totalRequests} (${((requestMetrics.successfulLogins/requestMetrics.totalRequests)*100).toFixed(1)}%)`);
      
      return result;
      
    } catch (error) {
      // Enhanced rate limit detection
      if (isRateLimitError(error) && attempt < MAX_RETRIES) {
        requestMetrics.rateLimitHits++;
        
        // Set cooldown period
        rateLimitCooldownUntil = Date.now() + RATE_LIMIT_CONFIG.LOAD_DISTRIBUTION.COOLDOWN_PERIOD;
        
        // Calculate enhanced backoff delay
        const delay = calculateBackoffDelay(attempt);
        
        console.log(`[AUTH TOKEN] Rate limit detected for ${email}, backing off for ${delay}ms (attempt ${attempt + 1}/${MAX_RETRIES + 1})`);
        console.log(`[AUTH METRICS] Rate limit stats: ${requestMetrics.rateLimitHits}/${requestMetrics.totalRequests} requests hit rate limit`);
        
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      // Enhanced error logging with context
      console.error('Error getting auth token:', {
        email,
        status: error.response?.status,
        statusText: error.response?.statusText,
        errorData: error.response?.data,
        message: error.message,
        attempt: attempt + 1,
        isRateLimit: isRateLimitError(error),
        metrics: requestMetrics
      });
      throw error;
    }
  }
  
  throw new Error(`Failed to get auth token for ${email} after ${MAX_RETRIES + 1} attempts. Rate limit stats: ${requestMetrics.rateLimitHits}/${requestMetrics.totalRequests}`);
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

/**
 * Gets current rate limiting metrics and statistics
 * @returns {Object} Comprehensive metrics object
 */
const getRateLimitMetrics = () => {
  const cacheStats = {
    size: tokenCache.size,
    entries: Array.from(tokenCache.entries()).map(([key, value]) => ({
      user: key.split(':')[0],
      cachedAt: value.cachedAt,
      expiresAt: new Date(value.expiresAt).toISOString(),
      isValid: isTokenValid(value),
      loginAttempts: value.loginAttempts || 1
    }))
  };

  const rateLimitStats = {
    totalRequests: requestMetrics.totalRequests,
    rateLimitHits: requestMetrics.rateLimitHits,
    cacheHits: requestMetrics.cacheHits,
    successfulLogins: requestMetrics.successfulLogins,
    rateLimitRate: requestMetrics.totalRequests > 0 ? 
      ((requestMetrics.rateLimitHits / requestMetrics.totalRequests) * 100).toFixed(2) + '%' : '0%',
    cacheHitRate: requestMetrics.totalRequests > 0 ? 
      ((requestMetrics.cacheHits / requestMetrics.totalRequests) * 100).toFixed(2) + '%' : '0%',
    successRate: requestMetrics.totalRequests > 0 ? 
      ((requestMetrics.successfulLogins / requestMetrics.totalRequests) * 100).toFixed(2) + '%' : '0%'
  };

  const systemStatus = {
    inCooldown: Date.now() < rateLimitCooldownUntil,
    cooldownRemaining: Math.max(0, rateLimitCooldownUntil - Date.now()),
    currentUserPoolIndex: userPoolIndex,
    timeSinceLastRequest: Date.now() - lastRequestTime
  };

  return {
    cache: cacheStats,
    rateLimiting: rateLimitStats,
    system: systemStatus,
    config: RATE_LIMIT_CONFIG,
    userPool: {
      size: USER_POOL.length,
      users: USER_POOL.map(u => ({ email: u.email, role: u.role }))
    }
  };
};

/**
 * Resets rate limiting metrics (useful for testing)
 */
const resetRateLimitMetrics = () => {
  requestMetrics.totalRequests = 0;
  requestMetrics.rateLimitHits = 0;
  requestMetrics.cacheHits = 0;
  requestMetrics.successfulLogins = 0;
  userPoolIndex = 0;
  lastRequestTime = 0;
  rateLimitCooldownUntil = 0;
  clearTokenCache();
  console.log('[RATE_LIMIT] All metrics and caches reset');
};

/**
 * Logs comprehensive rate limiting diagnostics
 */
const logRateLimitDiagnostics = () => {
  const metrics = getRateLimitMetrics();
  
  console.log('\n=== RATE LIMITING DIAGNOSTICS ===');
  console.log('📊 Request Metrics:');
  console.log(`   Total Requests: ${metrics.rateLimiting.totalRequests}`);
  console.log(`   Rate Limit Hits: ${metrics.rateLimiting.rateLimitHits} (${metrics.rateLimiting.rateLimitRate})`);
  console.log(`   Cache Hits: ${metrics.rateLimiting.cacheHits} (${metrics.rateLimiting.cacheHitRate})`);
  console.log(`   Successful Logins: ${metrics.rateLimiting.successfulLogins} (${metrics.rateLimiting.successRate})`);
  
  console.log('\n🏪 Token Cache:');
  console.log(`   Cache Size: ${metrics.cache.size} entries`);
  console.log(`   Valid Tokens: ${metrics.cache.entries.filter(e => e.isValid).length}`);
  console.log(`   Expired Tokens: ${metrics.cache.entries.filter(e => !e.isValid).length}`);
  
  console.log('\n⚡ System Status:');
  console.log(`   In Cooldown: ${metrics.system.inCooldown}`);
  if (metrics.system.inCooldown) {
    console.log(`   Cooldown Remaining: ${metrics.system.cooldownRemaining}ms`);
  }
  console.log(`   Current User Pool Index: ${metrics.system.currentUserPoolIndex}/${metrics.userPool.size}`);
  console.log(`   Time Since Last Request: ${metrics.system.timeSinceLastRequest}ms`);
  
  console.log('\n👥 User Pool Status:');
  metrics.userPool.users.forEach((user, index) => {
    const isActive = index === metrics.system.currentUserPoolIndex;
    console.log(`   ${isActive ? '▶️' : '  '} ${user.email} (${user.role})`);
  });
  
  console.log('=== END DIAGNOSTICS ===\n');
};

/**
 * Performs a health check on the rate limiting system
 * @returns {Promise<Object>} Health check results
 */
const performRateLimitHealthCheck = async () => {
  console.log('[HEALTH_CHECK] Starting rate limiting system health check...');
  
  const healthCheck = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    issues: [],
    recommendations: []
  };
  
  // Check cache health
  const expiredTokens = Array.from(tokenCache.entries()).filter(([, value]) => !isTokenValid(value));
  if (expiredTokens.length > 0) {
    healthCheck.issues.push(`${expiredTokens.length} expired tokens in cache`);
    healthCheck.recommendations.push('Consider clearing expired tokens');
  }
  
  // Check rate limit frequency
  if (requestMetrics.totalRequests > 0) {
    const rateLimitPercentage = (requestMetrics.rateLimitHits / requestMetrics.totalRequests) * 100;
    if (rateLimitPercentage > 20) {
      healthCheck.status = 'warning';
      healthCheck.issues.push(`High rate limit hit rate: ${rateLimitPercentage.toFixed(1)}%`);
      healthCheck.recommendations.push('Consider increasing request spacing or reducing concurrent requests');
    }
  }
  
  // Check cooldown status
  if (Date.now() < rateLimitCooldownUntil) {
    healthCheck.status = 'cooldown';
    healthCheck.issues.push('System currently in rate limit cooldown');
    healthCheck.recommendations.push(`Wait ${rateLimitCooldownUntil - Date.now()}ms before making requests`);
  }
  
  // Test user pool access
  try {
    const testUser = getTestUser({ role: 'user' });
    if (!testUser) {
      healthCheck.status = 'error';
      healthCheck.issues.push('Unable to get user from pool');
    }
  } catch (error) {
    healthCheck.status = 'error';
    healthCheck.issues.push(`User pool error: ${error.message}`);
  }
  
  console.log(`[HEALTH_CHECK] Health check completed: ${healthCheck.status}`);
  if (healthCheck.issues.length > 0) {
    console.log(`[HEALTH_CHECK] Issues found: ${healthCheck.issues.join(', ')}`);
  }
  
  return healthCheck;
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
  USER_POOL,
  // Enhanced rate limiting utilities
  getRateLimitMetrics,
  resetRateLimitMetrics,
  logRateLimitDiagnostics,
  performRateLimitHealthCheck,
  isRateLimitError,
  RATE_LIMIT_CONFIG
}; 