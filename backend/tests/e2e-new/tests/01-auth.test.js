/**
 * Auth Tests - Authentication E2E Tests
 * Core authentication functionality testing
 */

const { ApiClient, expectSuccess, expectError } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');
const { TestDataManager } = require('../helpers/data');
const { CleanupManager } = require('../helpers/cleanup');

describe('Authentication E2E Tests', () => {
  let api;
  let authManager;
  let dataManager;
  let cleanup;

  beforeAll(() => {
    api = new ApiClient();
    authManager = new AuthManager();
    dataManager = new TestDataManager();
    cleanup = new CleanupManager();
    cleanup.setApiClient(api);
  });

  afterEach(async () => {
    // Clear auth tokens after each test
    authManager.clearTokens();
    api.setAuth(null);
    await cleanup.cleanupAll();
  });

  describe('Admin Login', () => {
    test('should login admin successfully', async () => {
      // Arrange
      const adminCredentials = {
        email: process.env.ADMIN_EMAIL || process.env.E2E_ADMIN_EMAIL || 'daniellovazzano@gmail.com',
        password: process.env.ADMIN_PASSWORD || process.env.E2E_ADMIN_PASSWORD || 'PC.103638dl'
      };

      // Act
      const response = await api.post('/auth/login', adminCredentials);

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(response.data.data).toHaveProperty('tokens');
      expect(response.data.data.tokens).toHaveProperty('idToken');
      expect(response.data.data).toHaveProperty('user');
      expect(response.data.data.user.email).toBe(adminCredentials.email);

      // Test token is valid
      const token = response.data.data.tokens.idToken;
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.length).toBeGreaterThan(10);
    });

    test('should use AuthManager for admin login', async () => {
      // Act
      const loginResult = await authManager.loginAdmin();

      // Assert
      expect(loginResult).toHaveProperty('token');
      expect(loginResult).toHaveProperty('user');
      expect(loginResult.token).toBeDefined();
      expect(loginResult.user.email).toBe(
        process.env.ADMIN_EMAIL || process.env.E2E_ADMIN_EMAIL || 'daniellovazzano@gmail.com'
      );

      // Verify token is cached
      const cachedToken = authManager.getToken('admin');
      expect(cachedToken).toBe(loginResult.token);
    });
  });

  describe('Invalid Credentials', () => {
    test('should fail with invalid credentials', async () => {
      // Arrange
      const invalidCredentials = {
        email: 'nonexistent@test.com',
        password: 'WrongPassword123!'
      };

      // Act & Assert
      try {
        await api.post('/auth/login', invalidCredentials);
        fail('Should have thrown an error for invalid credentials');
      } catch (error) {
        expectError(error, 401);
        expect(error.response.data.success).toBe(false);
        expect(error.response.data.message).toBeDefined();
      }
    });

    test('should fail with missing password', async () => {
      // Arrange
      const incompleteCredentials = {
        email: 'admin@test.com'
        // password missing
      };

      // Act & Assert
      try {
        await api.post('/auth/login', incompleteCredentials);
        fail('Should have thrown an error for missing password');
      } catch (error) {
        expectError(error, 400);
        expect(error.response.data.success).toBe(false);
      }
    });
  });

  describe('Token Validation', () => {
    test('should validate token correctly', async () => {
      // Arrange - Login first to get valid token
      const loginResult = await authManager.loginAdmin();
      api.setAuth(loginResult.token);

      // Act - Make authenticated request (using a real endpoint)
      const response = await api.get('/admin/users');

      // Assert
      expectSuccess(response);
      expect(response.data.success).toBe(true);
      expect(response.data.data).toBeDefined();
      expect(Array.isArray(response.data.data)).toBe(true);
    });

    test('should reject invalid token', async () => {
      // Arrange
      const invalidToken = 'invalid.token.here';
      api.setAuth(invalidToken);

      // Act & Assert
      try {
        await api.get('/admin/users');
        fail('Should have thrown an error for invalid token');
      } catch (error) {
        expectError(error, 401);
        expect(error.response.data.success).toBe(false);
      }
    });

    test('should reject missing token', async () => {
      // Arrange - No token set
      api.setAuth(null);

      // Act & Assert
      try {
        await api.get('/admin/users');
        fail('Should have thrown an error for missing token');
      } catch (error) {
        expectError(error, 401);
        expect(error.response.data.success).toBe(false);
      }
    });
  });

  describe('Session Management', () => {
    test('should logout and clear session', async () => {
      // Arrange - Login first
      const loginResult = await authManager.loginAdmin();
      api.setAuth(loginResult.token);

      // Verify we're logged in
      const beforeLogout = await api.get('/admin/users');
      expectSuccess(beforeLogout);

      // Act - Logout
      const logoutResponse = await api.post('/auth/logout');

      // Assert
      expectSuccess(logoutResponse);
      expect(logoutResponse.data.success).toBe(true);

      // Clear local token
      authManager.clearTokens();
      api.setAuth(null);

      // Verify we're logged out
      try {
        await api.get('/admin/users');
        fail('Should not be able to access protected route after logout');
      } catch (error) {
        expectError(error, 401);
      }
    });
  });
}); 