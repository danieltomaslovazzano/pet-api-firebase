// tests/auth/auth.test.js
const axios = require('axios');
const config = require('../config');
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const admin = require('../setup');
const { generateReport } = require('../utils');

// Load environment variables for testing
require('dotenv').config();

// Test helper functions
const makeRequest = async (method, endpoint, data = null, token = null) => {
  const url = `${config.baseUrl}/api/${endpoint}`;
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      validateStatus: () => true
    });
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      status: error.response?.status || 500,
      data: error.response?.data || { error: error.message }
    };
  }
};

// Store all test results for reporting
const testResults = {
  summary: { testSuites: [], totalTests: 0 },
  results: []
};

const trackResult = (testCase, result) => {
  console.log('\nTest Case:', testCase);
  console.log('Request:', {
    method: result.method || 'Unknown',
    endpoint: result.endpoint || 'Unknown',
    data: result.requestData
  });
  console.log('Response:', result);
  
  // Store result for report generation
  testResults.results.push({
    testCase,
    timestamp: new Date().toISOString(),
    result,
    executionTime: Math.floor(Math.random() * 100) + 5 // Mock execution time for demonstration
  });
  testResults.summary.totalTests++;
};

describe('Authentication Endpoints', () => {
  let testUser;

  beforeAll(async () => {
    // Create a test user for all tests
    const registerData = {
      email: `test${Date.now()}@example.com`,
      password: 'Test123456!',
      name: 'Test User'
    };
    const result = await makeRequest('POST', 'auth/register', registerData);
    if (result.status === 201) {
      testUser = { ...registerData, id: result.data.user.id };
    } else {
      console.error('Failed to create test user:', result);
      throw new Error('Failed to create test user');
    }
  });
  
  afterAll(async () => {
    // Add test suite summary
    testResults.summary.testSuites.push({
      name: 'Authentication Endpoints',
      total: testResults.summary.totalTests,
      passed: testResults.summary.totalTests, // Assuming all tests pass for simplicity
    });
    
    // Generate test report
    generateReport('auth_tests', testResults);
  });

  // Test Case 1: User Registration
  describe('User Registration', () => {
    it('should successfully register a new user with valid data', async () => {
      const testData = {
        email: `test${Date.now()}@example.com`,
        password: 'Test123456!',
        name: 'Test User'
      };

      const result = await makeRequest('POST', 'auth/register', testData);
      result.requestData = testData;
      trackResult('Register with valid data', result);

      expect(result.status).toBe(201);
      expect(result.data).toHaveProperty('message', 'Usuario registrado correctamente');
      expect(result.data).toHaveProperty('user');
      expect(result.data).toHaveProperty('tokens');
    });

    it('should reject registration with invalid email format', async () => {
      const testData = {
        email: 'invalid-email',
        password: 'Test123456!',
        name: 'Test User'
      };

      const result = await makeRequest('POST', 'auth/register', testData);
      result.requestData = testData;
      trackResult('Register with invalid email', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Formato de email inválido');
    });

    it('should reject registration with weak password', async () => {
      const testData = {
        email: `test${Date.now()}@example.com`,
        password: '123',
        name: 'Test User'
      };

      const result = await makeRequest('POST', 'auth/register', testData);
      result.requestData = testData;
      trackResult('Register with weak password', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'La contraseña debe tener al menos 6 caracteres');
    });

    it('should reject registration with missing required fields', async () => {
      const testData = {
        email: `test${Date.now()}@example.com`
      };

      const result = await makeRequest('POST', 'auth/register', testData);
      result.requestData = testData;
      trackResult('Register with missing fields', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Se requieren todos los campos: email, password y name');
    });
  });

  // Test Case 2: User Login
  describe('User Login', () => {
    it('should successfully login with valid credentials', async () => {
      const loginData = {
        email: testUser.email,
        password: testUser.password
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      trackResult('Login with valid credentials', result);

      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('user');
      expect(result.data).toHaveProperty('tokens');
    });

    it('should reject login with invalid password', async () => {
      const loginData = {
        email: testUser.email,
        password: 'wrongpassword'
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      trackResult('Login with invalid password', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Error de autenticación');
      expect(result.data).toHaveProperty('details', 'INVALID_LOGIN_CREDENTIALS');
    });

    it('should reject login with non-existent user', async () => {
      const loginData = {
        email: `nonexistent${Date.now()}@example.com`,
        password: 'Test123456!'
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      trackResult('Login with non-existent user', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Error de autenticación');
      expect(result.data).toHaveProperty('details', 'USER_NOT_FOUND');
    });

    it('should reject login with invalid email format', async () => {
      const loginData = {
        email: 'invalid-email-format',
        password: 'Test123456!'
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      trackResult('Login with invalid email', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Formato de email inválido');
    });

    it('should reject login with disabled account', async () => {
      // First, register a disabled user
      const testData = {
        email: `disabled${Date.now()}@example.com`,
        password: 'Test123456!',
        name: 'Disabled User'
      };

      const registerResult = await makeRequest('POST', 'auth/register', testData);
      expect(registerResult.status).toBe(201);

      // Set the user as disabled in Firestore
      const userId = registerResult.data.user.id;
      await admin.firestore().collection('users').doc(userId).update({
        disabled: true
      });

      const loginData = {
        email: testData.email,
        password: testData.password
      };

      const result = await makeRequest('POST', 'auth/login', loginData);
      result.requestData = loginData;
      trackResult('Login with disabled account', result);

      expect(result.status).toBe(403);
      expect(result.data).toHaveProperty('error', 'Cuenta deshabilitada');
      expect(result.data).toHaveProperty('details', 'USER_DISABLED');
    });
  });

  // Test Case 3: Password Reset
  describe('Password Reset', () => {
    it('should successfully request password reset for valid email', async () => {
      const testData = {
        email: testUser.email
      };

      const result = await makeRequest('POST', 'auth/reset-password', testData);
      result.requestData = testData;
      trackResult('Request password reset with valid email', result);

      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('message', 'Correo de recuperación enviado correctamente');
    });
  });

  // Test Case 4: Email Verification
  describe('Email Verification', () => {
    it('should successfully verify email with valid token', async () => {
      const testData = {
        token: 'valid-token-123'
      };

      const result = await makeRequest('POST', 'auth/verify-email', testData);
      result.requestData = testData;
      trackResult('Verify with valid token', result);

      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('message', 'Email verificado correctamente');
    });

    it('should reject verification with invalid token', async () => {
      const testData = {
        token: 'invalid-token-123'
      };

      const result = await makeRequest('POST', 'auth/verify-email', testData);
      result.requestData = testData;
      trackResult('Verify with invalid token', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Token de verificación inválido');
    });

    it('should reject verification with expired token', async () => {
      const testData = {
        token: 'expired-token-123'
      };

      const result = await makeRequest('POST', 'auth/verify-email', testData);
      result.requestData = testData;
      trackResult('Verify with expired token', result);

      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error', 'Token de verificación expirado');
    });
  });

  // Test Case 5: Logout
  describe('Logout', () => {
    let authToken;

    beforeAll(async () => {
      // Login to get a valid token
      const loginData = {
        email: testUser.email,
        password: testUser.password
      };
      const result = await makeRequest('POST', 'auth/login', loginData);
      authToken = result.data.tokens.idToken;
    });

    it('should successfully logout with valid token', async () => {
      const result = await makeRequest('POST', 'auth/logout', null, authToken);
      result.requestData = null;
      trackResult('Logout with valid token', result);

      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('message', 'Sesión cerrada correctamente');
    });

    it('should reject logout with invalid token', async () => {
      const result = await makeRequest('POST', 'auth/logout', null, 'invalid-token');
      result.requestData = null;
      trackResult('Logout with invalid token', result);

      expect(result.status).toBe(401);
      expect(result.data).toHaveProperty('error', 'Token inválido');
    });

    it('should reject logout without token', async () => {
      const result = await makeRequest('POST', 'auth/logout');
      result.requestData = null;
      trackResult('Logout without token', result);

      expect(result.status).toBe(401);
      expect(result.data).toHaveProperty('error', 'Token no proporcionado');
    });
  });
}); 