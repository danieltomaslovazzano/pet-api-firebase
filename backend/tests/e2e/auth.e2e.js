const axios = require('./helpers/request');
const { EnhancedReporter } = require('./helpers/report');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env.test') });

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
    reporter.endTest('PASSED');
  });

  it('should register a user', async () => {
    const registerPayload = { email, password, name };
    const resRegister = await axios.post(`${API_URL}/auth/register`, registerPayload);
    expect(resRegister.data).toHaveProperty('success', true);
    expect(resRegister.data).toHaveProperty('data');
    expect(resRegister.data.data).toHaveProperty('user');
    expect(resRegister.data.data.user).toHaveProperty('email', email);
  });

  it('should login user', async () => {
    const loginPayload = { email, password };
    const resLogin = await axios.post(`${API_URL}/auth/login`, loginPayload);
    idToken = resLogin.data.data.tokens.idToken;
    refreshToken = resLogin.data.data.tokens.refreshToken;
    expect(resLogin.data).toHaveProperty('success', true);
    expect(resLogin.data.data).toHaveProperty('tokens');
    expect(resLogin.data.data.tokens).toHaveProperty('idToken');
  });

  it('should deny login with wrong credentials', async () => {
    const wrongLoginPayload = { email, password: 'wrongpassword' };
    try {
      await axios.post(`${API_URL}/auth/login`, wrongLoginPayload);
      throw new Error('Login with wrong credentials should fail');
    } catch (err) {
      expect(err.response?.status).toBe(401);
      expect(err.response.data).toHaveProperty('success', false);
    }
  });

  it('should access profile with token', async () => {
    const resProfile = await axios.get(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${idToken}` }
    });
    expect(resProfile.data).toHaveProperty('success', true);
    expect(resProfile.data.data).toHaveProperty('email', email);
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
    const superadminEmail = 'daniellovazzano+2@gmail.com';
    const superadminPassword = 'PC.103638dl';
    const superadminLoginPayload = { email: superadminEmail, password: superadminPassword };
    const resSuperadminLogin = await axios.post(`${API_URL}/auth/login`, superadminLoginPayload);
    const userRole = resSuperadminLogin.data.data?.user?.role;
    adminToken = resSuperadminLogin.data.data.tokens?.idToken;
    expect(userRole).toBe('superadmin');
  });

  it('should list users as admin', async () => {
    const usersRes = await axios.get(`${API_URL}/admin/users`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    expect(usersRes.data).toHaveProperty('success', true);
    expect(Array.isArray(usersRes.data.data)).toBe(true);
  });

  afterAll(() => {
    reporter.writeReport(`Email de usuario: ${email}. El usuario puede ser eliminado manualmente tras el test si se desea.`);
  });
}); 