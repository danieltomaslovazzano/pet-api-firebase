/**
 * Dummy Test for Configuration and Helpers Validation
 * This test validates that Jest configuration and helpers work correctly
 */

const { ApiClient, expectSuccess, expectError } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');

describe('Configuration Validation', () => {
  test('should have correct test environment', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });

  test('should have API_URL configured', () => {
    expect(global.API_URL).toBeDefined();
    expect(global.API_URL).toMatch(/^http/);
  });

  test('should have required environment variables', () => {
    expect(process.env.API_URL).toBeDefined();
  });

  test('should complete successfully', () => {
    expect(true).toBe(true);
  });
});

describe('Helpers Validation', () => {
  test('should create ApiClient instance', () => {
    const api = new ApiClient();
    expect(api).toBeDefined();
    expect(api.baseURL).toBeDefined();
    expect(typeof api.get).toBe('function');
    expect(typeof api.post).toBe('function');
  });

  test('should create AuthManager instance', () => {
    const auth = new AuthManager();
    expect(auth).toBeDefined();
    expect(typeof auth.loginAdmin).toBe('function');
    expect(typeof auth.loginUser).toBe('function');
    expect(typeof auth.createTestUser).toBe('function');
  });

  test('should have utility functions available', () => {
    expect(typeof expectSuccess).toBe('function');
    expect(typeof expectError).toBe('function');
  });
}); 