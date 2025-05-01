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

    // Test Case 3: Non-existent User
    it('should reject login with non-existent user', async () => {
      const loginData = {
        email: `nonexistent${Date.now()}@example.com`,
        password: 'Test123456!'
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      result.endpoint = 'auth/login';
      trackResult('Login with non-existent user', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Error de autenticación');
      expect(result.data).toHaveProperty('details', 'USER_NOT_FOUND');
    });

    // Test Case 4: Invalid Email Format
    it('should reject login with invalid email format', async () => {
      const loginData = {
        email: 'invalid-email-format',
        password: 'Test123456!'
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      result.endpoint = 'auth/login';
      trackResult('Login with invalid email', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Formato de email inválido');
    });

    // Test Case 5: Disabled Account
    it('should reject login with disabled account', async () => {
      // First, create a test user
      const testData = {
        email: `disabled${Date.now()}@example.com`,
        password: 'Test123456!',
        name: 'Disabled User'
      };

      const registerResult = await makeRequest('POST', 'auth/register', testData);
      expect(registerResult.status).toBe(201);

      // Disable the user (this would typically be done through an admin endpoint)
      // For now, we'll simulate a disabled user response
      const loginData = {
        email: testData.email,
        password: testData.password
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      result.endpoint = 'auth/login';
      trackResult('Login with disabled account', result);

      expect(result.status).toBe(403);
      expect(result.data).toHaveProperty('error', 'Cuenta deshabilitada');
      expect(result.data).toHaveProperty('details', 'USER_DISABLED');
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

  // Test Suite: Email Verification
  describe('Email Verification', () => {
    // Test Case 1: Verify with Valid Token
    it('should successfully verify email with valid token', async () => {
      // First, register a new user
      const testData = {
        email: `verify${Date.now()}@example.com`,
        password: 'Test123456!',
        name: 'Verify User'
      };

      const registerResult = await makeRequest('POST', 'auth/register', testData);
      expect(registerResult.status).toBe(201);

      // Get the verification token from the registration response
      const verificationToken = registerResult.data.tokens.emailVerificationToken;

      const verifyData = {
        token: verificationToken
      };

      const result = await makeRequest('POST', 'auth/verify-email', verifyData);
      result.requestData = verifyData;
      result.endpoint = 'auth/verify-email';
      trackResult('Verify with valid token', result);

      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('message', 'Email verificado correctamente');
    });

    // Test Case 2: Verify with Invalid Token
    it('should reject verification with invalid token', async () => {
      const verifyData = {
        token: 'invalid-token-123'
      };

      const result = await makeRequest('POST', 'auth/verify-email', verifyData);
      result.requestData = verifyData;
      result.endpoint = 'auth/verify-email';
      trackResult('Verify with invalid token', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Token de verificación inválido');
    });

    // Test Case 3: Verify with Expired Token
    it('should reject verification with expired token', async () => {
      // Create an expired token (this would typically be done by waiting for token expiration)
      // For testing purposes, we'll use a mock expired token
      const verifyData = {
        token: 'expired-token-123'
      };

      const result = await makeRequest('POST', 'auth/verify-email', verifyData);
      result.requestData = verifyData;
      result.endpoint = 'auth/verify-email';
      trackResult('Verify with expired token', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Token de verificación expirado');
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

    // Test Case 2: Logout with Invalid Token
    it('should reject logout with invalid token', async () => {
      const invalidToken = 'invalid-token-123';
      const result = await makeRequest('POST', 'auth/logout', null, invalidToken);
      result.endpoint = 'auth/logout';
      trackResult('Logout with invalid token', result);

      expect(result.status).toBe(401);
      expect(result.data).toHaveProperty('error', 'Token inválido');
    });

    // Test Case 3: Logout without Token
    it('should reject logout without token', async () => {
      const result = await makeRequest('POST', 'auth/logout');
      result.endpoint = 'auth/logout';
      trackResult('Logout without token', result);

      expect(result.status).toBe(401);
      expect(result.data).toHaveProperty('error', 'Token no proporcionado');
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
            total: 5,
            passed: testResults.filter(r => r.testCase.includes('Login') && r.result.status >= 200 && r.result.status < 300).length
          },
          {
            name: 'Password Reset',
            total: 1,
            passed: testResults.filter(r => r.testCase.includes('reset') && r.result.status >= 200 && r.result.status < 300).length
          },
          {
            name: 'Email Verification',
            total: 3,
            passed: testResults.filter(r => r.testCase.includes('Verify') && r.result.status >= 200 && r.result.status < 300).length
          },
          {
            name: 'Logout',
            total: 3,
            passed: testResults.filter(r => r.testCase.includes('Logout') && r.result.status >= 200 && r.result.status < 300).length
          }
        ]
      },
      results: testResults
    });
    console.log(`\nTest report generated at: ${reportPath}`);
  });
}); 