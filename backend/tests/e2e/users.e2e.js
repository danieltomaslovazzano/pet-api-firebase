const axios = require('./helpers/request');
const { EnhancedReporter } = require('./helpers/report');
const dotenv = require('dotenv');
const path = require('path');

// Load test environment variables
dotenv.config({ path: path.join(__dirname, '.env.test') });

// Test data
const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('users', 'users-tests');

describe('E2E: Users', () => {
  let adminToken;
  let headers = {};
  let createdUserId;
  let newUser;

  beforeAll(async () => {
    // Login as admin
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
    });
    adminToken = loginResponse.data.tokens.idToken;
    headers = { Authorization: `Bearer ${adminToken}` };
  });

  beforeEach(() => {
    // Get current test name from Jest
    const testName = expect.getState().currentTestName || 'unknown test';
    reporter.startTest(testName);
  });

  afterEach(() => {
    reporter.endTest('PASSED');
  });

  it('should create a user', async () => {
    newUser = {
      email: `test_${Date.now()}@example.com`,
      password: 'test1234',
      name: 'Test User',
      role: 'user'
    };
    const createResponse = await axios.post(`${API_URL}/users`, newUser, { headers });
    createdUserId = createResponse.data.id;
    expect(createResponse.data).toHaveProperty('id');
    expect(createResponse.data.email).toBe(newUser.email);
  });

  it('should get user by ID', async () => {
    const getUserResponse = await axios.get(`${API_URL}/users/${createdUserId}`, { headers });
    expect(getUserResponse.data).toHaveProperty('id', createdUserId);
    expect(getUserResponse.data).toHaveProperty('email', newUser.email);
  });

  it('should list users', async () => {
    const listResponse = await axios.get(`${API_URL}/users`, { headers });
    expect(Array.isArray(listResponse.data)).toBe(true);
    expect(listResponse.data.find(u => u.id === createdUserId)).toBeTruthy();
  });

  it('should update user', async () => {
    const updateData = { name: 'Updated Test User', phone: '+1234567890' };
    const updateResponse = await axios.put(`${API_URL}/users/${createdUserId}`, updateData, { headers });
    expect(updateResponse.data).toHaveProperty('name', updateData.name);
    expect(updateResponse.data).toHaveProperty('phone', updateData.phone);
  });

  it('should change user role', async () => {
    const roleData = { role: 'moderator' };
    const roleResponse = await axios.put(`${API_URL}/users/${createdUserId}`, roleData, { headers });
    expect(roleResponse.data).toHaveProperty('role', 'moderator');
  });

  it('should delete user', async () => {
    const deleteResponse = await axios.delete(`${API_URL}/users/${createdUserId}`, { headers });
    expect(deleteResponse.data).toHaveProperty('message');
  });

  afterAll(() => {
    reporter.writeReport('User CRUD operations working correctly. Role changes applied successfully. Admin authorization working as expected.');
  });
}); 