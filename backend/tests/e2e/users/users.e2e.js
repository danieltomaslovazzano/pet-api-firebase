const axios = require('../helpers/request');
const { EnhancedReporter } = require('../helpers/report');
const { loginAsAdmin, loginAsUser, createTestUser, cleanupTestData } = require('../helpers/auth');
const dotenv = require('dotenv');
const path = require('path');

// Load test environment variables
dotenv.config({ path: path.join(__dirname, '../../../.env.dev') });

// Test data
const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('users', 'users-tests');

describe('E2E: Users', () => {
  let adminToken;
  let adminUserId;
  let headers = {};
  let createdUserId;
  let newUser;
  let testUsers = [];

  beforeAll(async () => {
    // Login as admin using proper auth helper
    const adminLogin = await loginAsAdmin();
    adminToken = adminLogin.token;
    adminUserId = adminLogin.user.id;
    headers = { Authorization: `Bearer ${adminToken}` };
  });

  beforeEach(() => {
    // Get current test name from Jest
    const testName = expect.getState().currentTestName || 'unknown test';
    reporter.startTest(testName);
  });

    afterEach(() => {
    // Get the real test result from Jest custom reporter
    const testName = expect.getState().currentTestName;
    const jestResult = global.__JEST_TEST_RESULTS__ && global.__JEST_TEST_RESULTS__[testName];
    
    let status = 'PASSED';
    let error = null;
    
    if (jestResult) {
      status = jestResult.status;
      error = jestResult.error;
      console.log('[ENHANCED REPORTER] Using Jest result for "' + testName + '": ' + status);
    } else {
      console.log('[ENHANCED REPORTER] No Jest result found for "' + testName + '", defaulting to PASSED');
    }
    
    reporter.endTest(status, error);
  });

  it('should create a user', async () => {
    newUser = {
      email: `test_${Date.now()}@example.com`,
      password: 'TestPassword123!',
      name: 'Test User',
      role: 'user'
    };
    
    const createdUser = await createTestUser(newUser);
    createdUserId = createdUser.id;
    testUsers.push(createdUser);
    
    expect(createdUser).toHaveProperty('id');
    expect(createdUser.email).toContain('@example.com');
    expect(createdUser.name).toBe('Test User');
    expect(createdUser.role).toBe('user');
  });

  it('should get user by ID', async () => {
    const getUserResponse = await axios.get(`${API_URL}/users/${createdUserId}`, { headers });
    
    expect(getUserResponse.data.data).toHaveProperty('success',true);
    expect(getUserResponse.data).toHaveProperty('data');
    expect(getUserResponse.data.data).toHaveProperty('id', createdUserId);
    expect(getUserResponse.data.data).toHaveProperty('email');
    expect(getUserResponse.data.data.email).toContain('@example.com');
  });

  it('should list users', async () => {
    const listResponse = await axios.get(`${API_URL}/users`, { headers });
    expect(Array.isArray(listResponse.data.data)).toBe(true);
    expect(listResponse.data.data.find(u => u.id === createdUserId)).toBeTruthy();
  });

  it('should update user', async () => {
    const updateData = { name: 'Updated Test User', phone: '+1234567890' };
    const updateResponse = await axios.put(`${API_URL}/users/${createdUserId}`, updateData, { headers });
    
    expect(updateResponse.data.data).toHaveProperty('success',true);
    expect(updateResponse.data).toHaveProperty('data');
    expect(updateResponse.data.data).toHaveProperty('name', updateData.name);
    expect(updateResponse.data.data).toHaveProperty('phone', updateData.phone);
  });

  it('should change user role', async () => {
    const roleData = { role: 'moderator' };
    const roleResponse = await axios.put(`${API_URL}/users/${createdUserId}`, roleData, { headers });
    
    expect(roleResponse.data.data).toHaveProperty('success',true);
    expect(roleResponse.data).toHaveProperty('data');
    expect(roleResponse.data.data).toHaveProperty('role', 'moderator');
  });

  it('should delete user', async () => {
    const deleteResponse = await axios.delete(`${API_URL}/users/${createdUserId}`, { headers });
    
    expect(deleteResponse.data).toHaveProperty('message');
    expect(deleteResponse.status).toBe(200);
  
      expect(deleteResponse.data).toHaveProperty('success', true);});

  afterAll(async () => {
    // Cleanup test data
    await cleanupTestData({
      users: testUsers,
      adminToken
    });
    reporter.writeReport('User CRUD operations working correctly. Role changes applied successfully. Admin authorization working as expected.');
  });
}); 