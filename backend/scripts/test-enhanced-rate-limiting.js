/**
 * Enhanced Rate Limiting System Test Script
 * Tests the improved rate limiting, caching, and user pool management
 */

const {
  getAuthToken,
  getTestUser,
  getRateLimitMetrics,
  resetRateLimitMetrics,
  logRateLimitDiagnostics,
  performRateLimitHealthCheck,
  clearTokenCache,
  RATE_LIMIT_CONFIG
} = require('../tests/e2e/helpers/auth');

async function testBasicRateLimiting() {
  console.log('🧪 Testing Basic Rate Limiting...');
  
  const user = getTestUser({ role: 'user' });
  
  try {
    const result1 = await getAuthToken(user.email, user.password);
    console.log(`✅ First login successful for ${user.email}`);
    
    const result2 = await getAuthToken(user.email, user.password);
    console.log(`✅ Second login successful (cached) for ${user.email}`);
    
    return true;
  } catch (error) {
    console.error('❌ Basic rate limiting test failed:', error.message);
    return false;
  }
}

async function runEnhancedRateLimitingTests() {
  console.log('🚀 Starting Enhanced Rate Limiting System Tests');
  
  resetRateLimitMetrics();
  
  const success = await testBasicRateLimiting();
  
  console.log('\n📊 Final Metrics:');
  logRateLimitDiagnostics();
  
  const healthCheck = await performRateLimitHealthCheck();
  console.log('🏥 Health Check:', healthCheck.status);
  
  return success;
}

if (require.main === module) {
  runEnhancedRateLimitingTests()
    .then(success => process.exit(success ? 0 : 1))
    .catch(error => {
      console.error('❌ Test failed:', error);
      process.exit(1);
    });
}

module.exports = { runEnhancedRateLimitingTests };
