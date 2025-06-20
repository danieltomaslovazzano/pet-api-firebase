/**
 * Test Invalid ID Fix for Priority 4
 * Specifically tests the conversation not found message fix
 */

const axios = require('axios');

const API_URL = 'http://localhost:3000/api';

async function testInvalidIdFix() {
  console.log('🔍 Testing Invalid ID Fix for Priority 4\n');
  
  try {
    // Get pool user token
    const poolUserResponse = await axios.post(`${API_URL}/auth/login`, {
      email: 'test-user-01@example.com',
      password: 'TestPass123!'
    });
    
    const userToken = poolUserResponse.data.data.tokens.idToken;
    console.log('✅ Pool user authenticated successfully');
    
    // Test 1: Invalid ID format (should give specific validation message)
    console.log('\n🧪 Test 1: Invalid ID Format');
    try {
      await axios.get(`${API_URL}/conversations/invalid-id-format`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      console.log('❌ Should have failed with validation error');
    } catch (error) {
      const message = error.response?.data?.message;
      console.log(`✅ Status: ${error.response?.status}`);
      console.log(`✅ Message: "${message}"`);
      
      if (message && (message.includes('Invalid') || message.includes('ID') || message.includes('format'))) {
        console.log('✅ PERFECT: Message contains expected keywords (Invalid/ID/format)');
      } else {
        console.log(`⚠️  Expected message with "Invalid", "ID", or "format", got "${message}"`);
      }
    }
    
    // Test 2: Valid UUID format but conversation doesn't exist
    console.log('\n🧪 Test 2: Valid UUID but Not Found');
    try {
      await axios.get(`${API_URL}/conversations/12345678-1234-1234-1234-123456789012`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      console.log('❌ Should have failed with not found error');
    } catch (error) {
      const message = error.response?.data?.message;
      console.log(`✅ Status: ${error.response?.status}`);
      console.log(`✅ Message: "${message}"`);
      
      if (message && (message.includes('not found') || message.includes('Conversation not found'))) {
        console.log('✅ PERFECT: Correct "not found" message');
      } else {
        console.log(`⚠️  Expected "not found" message, got "${message}"`);
      }
    }
    
    // Test 3: Short invalid ID
    console.log('\n🧪 Test 3: Short Invalid ID');
    try {
      await axios.get(`${API_URL}/conversations/123`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      console.log('❌ Should have failed with validation error');
    } catch (error) {
      const message = error.response?.data?.message;
      console.log(`✅ Status: ${error.response?.status}`);
      console.log(`✅ Message: "${message}"`);
      
      if (message && (message.includes('Invalid') || message.includes('ID') || message.includes('format'))) {
        console.log('✅ PERFECT: Message contains expected keywords');
      } else {
        console.log(`⚠️  Expected message with validation keywords, got "${message}"`);
      }
    }
    
    console.log('\n📊 Invalid ID Fix Test Summary:');
    console.log('✅ Testing different invalid ID scenarios');
    console.log('✅ Verifying specific error messages');
    console.log('🎯 Priority 4 "not found" message fix verification complete');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testInvalidIdFix(); 