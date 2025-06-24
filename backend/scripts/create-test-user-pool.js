/**
 * Create Test User Pool Script
 * This script creates a pool of test users that can be reused across tests
 * to avoid Firebase rate limiting issues
 */

const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Pre-defined test users that will be created
const TEST_USER_POOL = [
  { email: 'test-user-01@example.com', password: 'TestPass123!', name: 'Test User 01', role: 'user' },
  { email: 'test-user-02@example.com', password: 'TestPass123!', name: 'Test User 02', role: 'user' },
  { email: 'test-user-03@example.com', password: 'TestPass123!', name: 'Test User 03', role: 'user' },
  { email: 'test-user-04@example.com', password: 'TestPass123!', name: 'Test User 04', role: 'user' },
  { email: 'test-user-05@example.com', password: 'TestPass123!', name: 'Test User 05', role: 'user' },
  { email: 'test-admin-01@example.com', password: 'TestPass123!', name: 'Test Admin 01', role: 'admin' },
  { email: 'test-admin-02@example.com', password: 'TestPass123!', name: 'Test Admin 02', role: 'admin' },
  { email: 'test-moderator-01@example.com', password: 'TestPass123!', name: 'Test Moderator 01', role: 'moderator' },
];

/**
 * Create a single test user with retry logic
 */
async function createTestUser(userData, retryCount = 0) {
  const maxRetries = 10;
  const baseDelay = 5000;
  
  try {
    console.log(`Creating user: ${userData.email}`);
    
    const response = await axios.post(`${API_URL}/auth/register`, {
      email: userData.email,
      password: userData.password,
      name: userData.name
    });

    console.log(`✅ Successfully created: ${userData.email}`);
    return {
      ...response.data.data.user,
      password: userData.password // Store for future logins
    };
    
  } catch (error) {
    const errorData = error.response?.data;
    
    // Check if user already exists
    if (errorData?.errors?.some(err => err.code === 'EMAIL_ALREADY_EXISTS')) {
      console.log(`ℹ️  User already exists: ${userData.email}`);
      return { email: userData.email, password: userData.password, exists: true };
    }
    
    // Check if it's a rate limiting error
    if ((errorData?.meta?.firebaseCode === 'TOO_MANY_ATTEMPTS_TRY_LATER' || 
         errorData?.details?.details === 'TOO_MANY_ATTEMPTS_TRY_LATER') && 
         retryCount < maxRetries) {
      
      const delay = baseDelay * Math.pow(1.5, retryCount); // Gentler exponential backoff
      console.log(`⏳ Rate limited for ${userData.email}, retrying in ${Math.round(delay/1000)}s (attempt ${retryCount + 1}/${maxRetries + 1})`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
      return createTestUser(userData, retryCount + 1);
    }
    
    console.error(`❌ Failed to create user ${userData.email}:`, errorData || error.message);
    throw error;
  }
}

/**
 * Create the entire test user pool
 */
async function createUserPool() {
  console.log('🏊‍♂️ Creating Test User Pool...\n');
  console.log(`Creating ${TEST_USER_POOL.length} test users to avoid rate limiting in future tests\n`);
  
  const results = [];
  let successCount = 0;
  let existsCount = 0;
  let failCount = 0;
  
  for (const userData of TEST_USER_POOL) {
    try {
      const result = await createTestUser(userData);
      results.push(result);
      
      if (result.exists) {
        existsCount++;
      } else {
        successCount++;
      }
      
      // Small delay between users to be respectful
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`Failed to create ${userData.email}:`, error.message);
      failCount++;
    }
  }
  
  console.log('\n📊 Test User Pool Creation Summary:');
  console.log(`✅ Successfully created: ${successCount}`);
  console.log(`ℹ️  Already existed: ${existsCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📝 Total users in pool: ${successCount + existsCount}`);
  
  if (successCount + existsCount >= 6) { // Minimum viable pool
    console.log('\n🎉 Test user pool is ready for use!');
    console.log('E2E tests can now use these pre-created users to avoid rate limiting.');
  } else {
    console.log('\n⚠️  Test user pool is incomplete. Some tests may still hit rate limits.');
  }
  
  return results;
}

/**
 * Test user pool by attempting to login with each user
 */
async function testUserPool() {
  console.log('\n🧪 Testing User Pool Login...\n');
  
  let loginSuccessCount = 0;
  
  for (const userData of TEST_USER_POOL) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: userData.email,
        password: userData.password
      });
      
      if (response.data.success) {
        console.log(`✅ Login test passed: ${userData.email}`);
        loginSuccessCount++;
      }
      
    } catch (error) {
      console.log(`❌ Login test failed: ${userData.email} - ${error.response?.data?.message || error.message}`);
    }
  }
  
  console.log(`\n📊 Login Test Results: ${loginSuccessCount}/${TEST_USER_POOL.length} successful logins`);
  
  if (loginSuccessCount >= 6) {
    console.log('✅ User pool is functional and ready for E2E tests!');
  } else {
    console.log('⚠️  Some users in pool have login issues');
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🎯 Test User Pool Creation for Rate Limit Avoidance\n');
  
  try {
    const results = await createUserPool();
    await testUserPool();
    
    console.log('\n🏁 User pool setup completed!');
    console.log('You can now run E2E tests with reduced rate limiting issues.');
    
  } catch (error) {
    console.error('❌ User pool creation failed:', error.message);
    process.exit(1);
  }
}

// Export user pool for use in tests
module.exports = { TEST_USER_POOL, createUserPool, testUserPool };

// Run if executed directly
if (require.main === module) {
  main().then(() => {
    process.exit(0);
  }).catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  });
} 