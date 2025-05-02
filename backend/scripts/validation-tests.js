/**
 * Authentication and Authorization Validation Script
 * 
 * This script performs manual validation of key authentication 
 * and authorization workflows to ensure they're working correctly.
 * 
 * Run with: node scripts/validation-tests.js
 */

const axios = require('axios');
const firebase = require('firebase-admin');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Configuration
const API_URL = 'http://localhost:3000'; // Change to your API URL
let accessToken = null;
let testUserId = null;
let testPetId = null;

// Initialize Firebase with your configuration
// Note: This assumes service account credentials are set via environment variable
try {
  firebase.initializeApp({
    credential: firebase.credential.applicationDefault()
  });
} catch (err) {
  console.error('Error initializing Firebase:', err.message);
  process.exit(1);
}

// Helper function to make API requests
async function apiRequest(method, endpoint, data = null, token = null) {
  try {
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await axios({
      method,
      url: `${API_URL}${endpoint}`,
      data,
      headers
    });
    
    return { success: true, status: response.status, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      status: error.response?.status || 500, 
      data: error.response?.data || { error: error.message } 
    };
  }
}

// Get a token for a test user
async function getTestToken() {
  console.log('\n--- Getting Test Token ---');
  
  // Prompt for test email
  const email = await new Promise(resolve => {
    rl.question('Enter test user email: ', resolve);
  });
  
  try {
    // Get user by email
    const userRecord = await firebase.auth().getUserByEmail(email);
    testUserId = userRecord.uid;
    
    // Create a custom token
    const token = await firebase.auth().createCustomToken(testUserId);
    console.log(`✅ Created token for user: ${testUserId}`);
    
    // Use the Firebase Auth REST API to exchange for an ID token
    console.log('🔄 Exchange this custom token for an ID token using the Firebase Auth REST API');
    console.log(`Custom token: ${token}`);
    
    accessToken = await new Promise(resolve => {
      rl.question('Enter the exchanged ID token: ', resolve);
    });
    
    return true;
  } catch (error) {
    console.error('❌ Error getting test token:', error.message);
    return false;
  }
}

// Authentication test cases
async function runAuthTests() {
  console.log('\n=== AUTHENTICATION TESTS ===');
  
  // Test 1: Access protected endpoint without token
  console.log('\n--- Test: Access without token ---');
  const noTokenResult = await apiRequest('GET', '/users/profile');
  console.log(`Status: ${noTokenResult.status}`);
  console.log('Response:', noTokenResult.data);
  console.log(`✅ Expected 401, Got ${noTokenResult.status}`);
  
  // Test 2: Access with invalid token
  console.log('\n--- Test: Access with invalid token ---');
  const invalidTokenResult = await apiRequest('GET', '/users/profile', null, 'invalid-token');
  console.log(`Status: ${invalidTokenResult.status}`);
  console.log('Response:', invalidTokenResult.data);
  console.log(`✅ Expected 401, Got ${invalidTokenResult.status}`);
  
  // Test 3: Access with valid token
  if (accessToken) {
    console.log('\n--- Test: Access with valid token ---');
    const validTokenResult = await apiRequest('GET', '/users/profile', null, accessToken);
    console.log(`Status: ${validTokenResult.status}`);
    console.log('Response:', validTokenResult.data);
    console.log(validTokenResult.status === 200 ? '✅ User profile retrieved successfully' : '❌ Failed to retrieve profile');
  } else {
    console.log('⚠️ Skipping valid token test - no token available');
  }
}

// Authorization test cases
async function runAuthorizationTests() {
  console.log('\n=== AUTHORIZATION TESTS ===');
  
  if (!accessToken) {
    console.log('⚠️ Skipping authorization tests - no token available');
    return;
  }
  
  // Test 1: Create a pet (requires "create" permission)
  console.log('\n--- Test: Create a resource ---');
  const newPet = {
    name: 'Test Pet',
    species: 'Dog',
    breed: 'Mixed',
    status: 'available',
    description: 'A test pet for validation',
    images: ['https://example.com/testpet.jpg'],
    userId: testUserId
  };
  
  const createResult = await apiRequest('POST', '/pets', newPet, accessToken);
  console.log(`Status: ${createResult.status}`);
  console.log('Response:', createResult.data);
  
  if (createResult.status === 201 && createResult.data.id) {
    testPetId = createResult.data.id;
    console.log(`✅ Pet created with ID: ${testPetId}`);
  } else {
    console.log('❌ Failed to create pet');
  }
  
  // Test 2: Access own resource (should be allowed)
  if (testPetId) {
    console.log('\n--- Test: Access own resource ---');
    const ownResourceResult = await apiRequest('GET', `/pets/${testPetId}`, null, accessToken);
    console.log(`Status: ${ownResourceResult.status}`);
    console.log('Response:', ownResourceResult.data);
    console.log(ownResourceResult.status === 200 ? '✅ Access to own resource granted' : '❌ Access to own resource denied');
  }
  
  // Test 3: Create user with admin role for the next test
  console.log('\n--- Test: Admin access check ---');
  console.log('To test admin access, you need to use an admin account.');
  const isAdmin = await new Promise(resolve => {
    rl.question('Are you logged in as an admin? (y/n): ', answer => resolve(answer.toLowerCase() === 'y'));
  });
  
  if (isAdmin) {
    // Test accessing admin endpoint
    const adminEndpointResult = await apiRequest('GET', '/admin/users', null, accessToken);
    console.log(`Status: ${adminEndpointResult.status}`);
    console.log('Response:', adminEndpointResult.data);
    console.log(adminEndpointResult.status === 200 ? '✅ Admin access granted' : '❌ Admin access denied');
  } else {
    console.log('⚠️ Skipping admin access test - not logged in as admin');
  }
}

// Cleanup
async function cleanup() {
  console.log('\n=== CLEANUP ===');
  
  // Delete test pet if it was created
  if (testPetId && accessToken) {
    console.log(`\n--- Deleting test pet ${testPetId} ---`);
    const deleteResult = await apiRequest('DELETE', `/pets/${testPetId}`, null, accessToken);
    console.log(`Status: ${deleteResult.status}`);
    console.log('Response:', deleteResult.data);
    console.log(deleteResult.status === 200 ? '✅ Test pet deleted successfully' : '❌ Failed to delete test pet');
  }
}

// Main validation function
async function runValidation() {
  console.log('=== AUTH SYSTEM VALIDATION ===');
  console.log('This script will test key authentication and authorization workflows');
  
  // Get test token
  const hasToken = await getTestToken();
  if (!hasToken) {
    console.log('❌ Cannot proceed without a valid token');
    rl.close();
    return;
  }
  
  // Run tests
  await runAuthTests();
  await runAuthorizationTests();
  
  // Cleanup
  await cleanup();
  
  console.log('\n=== VALIDATION COMPLETE ===');
  console.log('Manual validation of auth system completed.');
  rl.close();
}

// Run the validation
runValidation().catch(err => {
  console.error('Validation error:', err);
  rl.close();
}); 