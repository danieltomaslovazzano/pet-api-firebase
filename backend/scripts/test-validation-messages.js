/**
 * Test script for Priority 4: Validation Messages
 * This script tests validation error messages without creating new users
 * to avoid Firebase rate limiting issues
 */

const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Admin credentials from environment
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

/**
 * Get admin token for testing
 */
async function getAdminToken() {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    });
    return response.data.data.tokens.idToken;
  } catch (error) {
    console.error('Error getting admin token:', error.response?.data || error.message);
    throw error;
  }
}

/**
 * Test validation messages for conversation creation
 */
async function testConversationValidation() {
  const adminToken = await getAdminToken();
  const headers = { Authorization: `Bearer ${adminToken}` };
  
  console.log('🧪 Testing Conversation Validation Messages...\n');
  
  // Test 1: Missing participants
  try {
    await axios.post(`${API_URL}/conversations`, {
      title: 'Test Conversation'
    }, { headers });
    console.log('❌ Test 1 FAILED: Should have failed with missing participants');
  } catch (error) {
    const message = error.response?.data?.message;
    console.log(`✅ Test 1 - Missing participants: "${message}"`);
    if (message && (message.includes('participants') || message.includes('array'))) {
      console.log('✅ Contains expected keywords: ✓');
    } else {
      console.log('❌ Missing expected keywords (participants, array)');
    }
  }
  
  // Test 2: Invalid participants (not array)
  try {
    await axios.post(`${API_URL}/conversations`, {
      title: 'Test Conversation',
      participants: 'not-an-array'
    }, { headers });
    console.log('❌ Test 2 FAILED: Should have failed with invalid participants type');
  } catch (error) {
    const message = error.response?.data?.message;
    console.log(`✅ Test 2 - Invalid participants type: "${message}"`);
    if (message && (message.includes('participants') || message.includes('array'))) {
      console.log('✅ Contains expected keywords: ✓');
    } else {
      console.log('❌ Missing expected keywords (participants, array)');
    }
  }
  
  // Test 3: Insufficient participants
  try {
    await axios.post(`${API_URL}/conversations`, {
      title: 'Test Conversation',
      participants: ['single-user']
    }, { headers });
    console.log('❌ Test 3 FAILED: Should have failed with insufficient participants');
  } catch (error) {
    const message = error.response?.data?.message;
    console.log(`✅ Test 3 - Insufficient participants: "${message}"`);
    if (message && message.includes('participants')) {
      console.log('✅ Contains expected keywords: ✓');
    } else {
      console.log('❌ Missing expected keywords (participants)');
    }
  }
  
  console.log('\n');
}

/**
 * Test permission denied messages
 */
async function testPermissionMessages() {
  const adminToken = await getAdminToken();
  
  console.log('🔒 Testing Permission Denied Messages...\n');
  
  // Test: Access without token
  try {
    await axios.get(`${API_URL}/conversations`);
    console.log('❌ Test FAILED: Should have failed with missing token');
  } catch (error) {
    const message = error.response?.data?.message;
    console.log(`✅ Missing token test: "${message}"`);
    if (message === 'Token not provided') {
      console.log('✅ Correct standardized message: ✓');
    } else {
      console.log('❌ Expected: "Token not provided"');
    }
  }
  
  console.log('\n');
}

/**
 * Test not found messages
 */
async function testNotFoundMessages() {
  const adminToken = await getAdminToken();
  const headers = { Authorization: `Bearer ${adminToken}` };
  
  console.log('🔍 Testing Not Found Messages...\n');
  
  // Test: Non-existent conversation
  try {
    await axios.get(`${API_URL}/conversations/00000000-0000-0000-0000-000000000000`, { headers });
    console.log('❌ Test FAILED: Should have failed with conversation not found');
  } catch (error) {
    const message = error.response?.data?.message;
    console.log(`✅ Conversation not found test: "${message}"`);
    if (message === 'Conversation not found') {
      console.log('✅ Correct standardized message: ✓');
    } else {
      console.log('❌ Expected: "Conversation not found"');
    }
  }
  
  console.log('\n');
}

/**
 * Main test function
 */
async function runValidationTests() {
  console.log('🎯 Priority 4: Mensajes de Error - Validation Test\n');
  console.log('Testing standardized error messages without creating new users...\n');
  
  try {
    await testConversationValidation();
    await testPermissionMessages();
    await testNotFoundMessages();
    
    console.log('✅ All validation message tests completed!\n');
    console.log('Check the output above to verify that:');
    console.log('- Validation messages contain "participants" and "array" keywords');
    console.log('- Permission messages show "Permission denied" or "Token not provided"');
    console.log('- Not found messages show "Conversation not found"');
    
  } catch (error) {
    console.error('❌ Test execution failed:', error.message);
  }
}

// Run tests if script is executed directly
if (require.main === module) {
  runValidationTests().then(() => {
    process.exit(0);
  }).catch(error => {
    console.error('Script failed:', error);
    process.exit(1);
  });
}

module.exports = { runValidationTests }; 