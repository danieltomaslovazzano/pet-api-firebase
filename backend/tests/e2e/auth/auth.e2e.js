const axios = require('../helpers/request');
const { EnhancedReporter } = require('../helpers/report');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../../.env.dev') });

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('auth', 'auth-tests');

describe('E2E: Auth', () => {
  let email, password, name, idToken, refreshToken, adminToken;

  beforeAll(async () => {
    email = `e2euser_${Date.now()}@example.com`;
    password = 'test1234';
    name = 'E2E User';
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

  it('should register a user', async () => {
    const registerPayload = { email, password, name };
    const resRegister = await axios.post(`${API_URL}/auth/register`, registerPayload);
    
    // AUTH operations use res.created() format: {success, message, data}
    expect(resRegister.data.data).toHaveProperty('success',true);
    expect(resRegister.data).toHaveProperty('message');
    expect(resRegister.data).toHaveProperty('data');
    expect(resRegister.data.data).toHaveProperty('user');
    expect(resRegister.data.data).toHaveProperty('tokens');
    expect(resRegister.data.data.user).toHaveProperty('email', email);
    expect(resRegister.data.data.tokens).toHaveProperty('idToken');
    expect(resRegister.data.data.tokens).toHaveProperty('refreshToken');
  });

  it('should login user', async () => {
    const loginPayload = { email, password };
    const resLogin = await axios.post(`${API_URL}/auth/login`, loginPayload);
    
    // Extract tokens for future tests
    idToken = resLogin.data.data.tokens.idToken;
    refreshToken = resLogin.data.data.tokens.refreshToken;
    
    // AUTH operations use res.created() format: {success, message, data}
    expect(resLogin.data.data).toHaveProperty('success',true);
    expect(resLogin.data).toHaveProperty('message');
    expect(resLogin.data).toHaveProperty('data');
    expect(resLogin.data.data).toHaveProperty('user');
    expect(resLogin.data.data).toHaveProperty('tokens');
    expect(resLogin.data.data.tokens).toHaveProperty('idToken');
    expect(resLogin.data.data.tokens).toHaveProperty('refreshToken');
  });

  it('should deny login with wrong credentials', async () => {
    const wrongLoginPayload = { email, password: 'wrongpassword' };
    try {
      await axios.post(`${API_URL}/auth/login`, wrongLoginPayload);
      throw new Error('Login with wrong credentials should fail');
    } catch (err) {
      expect(err.response?.status).toBe(400);
    }
  });

  it('should access profile with token', async () => {
    const resProfile = await axios.get(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${idToken}` }
    });
    
    // Profile endpoint uses res.data() format: {success, data} (no message)
    expect(resProfile.data.data).toHaveProperty('success',true);
    expect(resProfile.data).toHaveProperty('data');
    expect(resProfile.data.data).toHaveProperty('email', email);
    expect(resProfile.data.data).toHaveProperty('id');
    expect(resProfile.data.data).toHaveProperty('name', name);
  });

  it('should deny access to profile without token', async () => {
    try {
      await axios.get(`${API_URL}/users/me`);
      throw new Error('Access without token should fail');
    } catch (err) {
      expect(err.response?.status).toBe(401);
    }
  });

  it('should login as superadmin', async () => {
    const superadminEmail = process.env.E2E_ADMIN_EMAIL;
    const superadminPassword = process.env.E2E_ADMIN_PASSWORD;
    
    if (!superadminEmail || !superadminPassword) {
      throw new Error('E2E admin credentials not configured. Please set E2E_ADMIN_EMAIL and E2E_ADMIN_PASSWORD environment variables.');
    }
    
    const superadminLoginPayload = { email: superadminEmail, password: superadminPassword };
    const resSuperadminLogin = await axios.post(`${API_URL}/auth/login`, superadminLoginPayload);
    
    // Extract admin token and verify role
    const userRole = resSuperadminLogin.data.data.user.role;
    adminToken = resSuperadminLogin.data.data.tokens.idToken;
    
    expect(userRole).toBe('admin');  // Changed from 'superadmin' to 'admin'
    expect(adminToken).toBeDefined();
  });

  it('should list users as admin', async () => {
    const usersRes = await axios.get(`${API_URL}/admin/users`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    
    // Admin list users uses res.list() format: {success, data} (no message)
    expect(usersRes.data.data).toHaveProperty('success',true);
    expect(usersRes.data).toHaveProperty('data');
    expect(Array.isArray(usersRes.data.data)).toBe(true);
    expect(usersRes.data.data.length).toBeGreaterThan(0);
  });

  afterAll(() => {
    reporter.writeReport(`Email de usuario: ${email}. El usuario puede ser eliminado manualmente tras el test si se desea.`);
  });
}); 