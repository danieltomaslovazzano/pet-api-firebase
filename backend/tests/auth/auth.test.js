// tests/auth/auth.test.js
const { makeRequest, generateReport, trackTest } = require('../utils');
const config = require('../config');
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');

// Load environment variables for testing
require('dotenv').config({ path: '.env.dev' });

// Set test environment
process.env.NODE_ENV = 'test';

describe('Authentication Endpoints', () => {
  let testResults = [];
  let authToken = null;
  let testUser = null;

  // Helper function to track test results
  const trackResult = (testCase, result) => {
    console.log(`\nTest Case: ${testCase}`);
    console.log('Request:', {
      method: result.requestData ? 'POST' : 'GET',
      endpoint: result.endpoint || 'auth/register',
      data: result.requestData
    });
    console.log('Response:', {
      status: result.status,
      data: result.data
    });
    testResults.push(trackTest('Authentication', testCase, result));
  };

  // Test Suite: User Registration
  describe('User Registration', () => {
    // Test Case 1: Successful Registration
    it('should successfully register a new user with valid data', async () => {
      const testData = {
        email: `test${Date.now()}@example.com`,
        password: 'Test123456!',
        name: 'Test User'
      };

      const result = await makeRequest('POST', 'auth/register', testData);
      result.requestData = testData;
      result.endpoint = 'auth/register';
      trackResult('Register with valid data', result);

      expect(result.status).toBe(201);
      expect(result.data).toHaveProperty('user');
      expect(result.data.user).toHaveProperty('email', testData.email);
      
      // Save user data for later tests
      testUser = result.data.user;
      authToken = result.data.tokens.idToken;
    });

    // Test Case 2: Invalid Email Format
    it('should reject registration with invalid email format', async () => {
      const testData = {
        email: 'invalid-email',
        password: 'Test123456!',
        name: 'Test User'
      };

      const result = await makeRequest('POST', 'auth/register', testData);
      result.requestData = testData;
      result.endpoint = 'auth/register';
      trackResult('Register with invalid email', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Formato de email inválido');
    });

    // Test Case 3: Weak Password
    it('should reject registration with weak password', async () => {
      const testData = {
        email: `test${Date.now()}@example.com`,
        password: '123',
        name: 'Test User'
      };

      const result = await makeRequest('POST', 'auth/register', testData);
      result.requestData = testData;
      result.endpoint = 'auth/register';
      trackResult('Register with weak password', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'La contraseña debe tener al menos 6 caracteres');
    });

    // Test Case 4: Missing Required Fields
    it('should reject registration with missing required fields', async () => {
      const testData = {
        email: `test${Date.now()}@example.com`
      };

      const result = await makeRequest('POST', 'auth/register', testData);
      result.requestData = testData;
      result.endpoint = 'auth/register';
      trackResult('Register with missing fields', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Se requieren todos los campos: email, password y name');
    });
  });

  // Test Suite: User Login
  describe('User Login', () => {
    // Test Case 1: Successful Login
    it('should successfully login with valid credentials', async () => {
      const loginData = {
        email: testUser.email,
        password: 'Test123456!'
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      result.endpoint = 'auth/login';
      trackResult('Login with valid credentials', result);

      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('tokens');
      expect(result.data.tokens).toHaveProperty('idToken');
      
      // Save token for other tests
      authToken = result.data.tokens.idToken;
    });

    // Test Case 2: Invalid Password
    it('should reject login with invalid password', async () => {
      const loginData = {
        email: testUser.email,
        password: 'wrongpassword'
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      result.endpoint = 'auth/login';
      trackResult('Login with invalid password', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Error de autenticación');
      expect(result.data).toHaveProperty('details', 'INVALID_LOGIN_CREDENTIALS');
    });
  });

  // Test Suite: Password Reset
  describe('Password Reset', () => {
    // Test Case 1: Request Password Reset
    it('should successfully request password reset for valid email', async () => {
      const resetData = {
        email: testUser.email
      };

      const result = await makeRequest('POST', 'auth/reset-password', resetData);
      result.requestData = resetData;
      result.endpoint = 'auth/reset-password';
      trackResult('Request password reset with valid email', result);

      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('message', 'Correo de recuperación enviado correctamente');
    });
  });

  // Test Suite: Logout
  describe('Logout', () => {
    // Test Case 1: Successful Logout
    it('should successfully logout with valid token', async () => {
      const result = await makeRequest('POST', 'auth/logout', null, authToken);
      result.endpoint = 'auth/logout';
      trackResult('Logout with valid token', result);

      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('message', 'Sesión cerrada correctamente');
    });
  });

  // Generate comprehensive test report after all tests
  afterAll(() => {
    const reportPath = generateReport('auth_tests', {
      summary: {
        totalTests: testResults.length,
        passed: testResults.filter(r => r.result.status >= 200 && r.result.status < 300).length,
        failed: testResults.filter(r => r.result.status >= 400).length,
        testSuites: [
          {
            name: 'User Registration',
            total: 4,
            passed: testResults.filter(r => r.testCase.includes('Register') && r.result.status >= 200 && r.result.status < 300).length
          },
          {
            name: 'User Login',
            total: 2,
            passed: testResults.filter(r => r.testCase.includes('Login') && r.result.status >= 200 && r.result.status < 300).length
          },
          {
            name: 'Password Reset',
            total: 1,
            passed: testResults.filter(r => r.testCase.includes('reset') && r.result.status >= 200 && r.result.status < 300).length
          },
          {
            name: 'Logout',
            total: 1,
            passed: testResults.filter(r => r.testCase.includes('Logout') && r.result.status >= 200 && r.result.status < 300).length
          }
        ]
      },
      results: testResults
    });
    console.log(`\nTest report generated at: ${reportPath}`);
  });
}); 