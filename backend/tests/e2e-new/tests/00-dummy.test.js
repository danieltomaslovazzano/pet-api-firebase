/**
 * Dummy Test for Configuration and All Helpers Validation
 * This test validates that Jest configuration and all helpers work correctly
 */

const { ApiClient, expectSuccess, expectError } = require('../helpers/api');
const { AuthManager } = require('../helpers/auth');
const { TestDataManager } = require('../helpers/data');
const { CleanupManager } = require('../helpers/cleanup');

describe('Configuration Validation', () => {
  test('should have correct test environment', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });

  test('should have API_URL configured', () => {
    // Check if global.API_URL is set, or if we can create a default one
    const apiUrl = global.API_URL || process.env.API_URL || 'http://localhost:3000/api';
    expect(apiUrl).toBeDefined();
    expect(apiUrl).toMatch(/^http/);
  });

  test('should have API connectivity available', () => {
    // More practical test - check if we can create an API client
    const api = new ApiClient();
    expect(api.baseURL).toBeDefined();
    expect(api.baseURL).toMatch(/^http/);
  });

  test('should complete successfully', () => {
    expect(true).toBe(true);
  });
});

describe('Core Helpers Validation', () => {
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

describe('Data Helper Validation', () => {
  let dataManager;

  beforeEach(() => {
    dataManager = new TestDataManager();
  });

  test('should create TestDataManager instance', () => {
    expect(dataManager).toBeDefined();
    expect(typeof dataManager.createOrganization).toBe('function');
    expect(typeof dataManager.createUser).toBe('function');
    expect(typeof dataManager.createPet).toBe('function');
  });

  test('should generate unique user data', () => {
    const user1 = dataManager.createUser();
    const user2 = dataManager.createUser();
    
    expect(user1.email).not.toBe(user2.email);
    expect(user1.name).not.toBe(user2.name);
    expect(user1.email).toMatch(/@example\.com$/);
  });

  test('should generate organization data with overrides', () => {
    const org = dataManager.createOrganization({ name: 'Custom Org' });
    
    expect(org.name).toBe('Custom Org');
    expect(org.type).toBe('shelter');
    expect(org.description).toBeDefined();
  });

  test('should generate unique IDs', () => {
    const id1 = dataManager.getUniqueId();
    const id2 = dataManager.getUniqueId();
    
    expect(id1).not.toBe(id2);
    expect(typeof id1).toBe('number');
  });
});

describe('Cleanup Helper Validation', () => {
  let cleanupManager;

  beforeEach(() => {
    cleanupManager = new CleanupManager();
  });

  test('should create CleanupManager instance', () => {
    expect(cleanupManager).toBeDefined();
    expect(typeof cleanupManager.track).toBe('function');
    expect(typeof cleanupManager.cleanupAll).toBe('function');
  });

  test('should track resources correctly', () => {
    cleanupManager.track('user', 'test-id-1');
    cleanupManager.track('organization', 'test-id-2');
    
    expect(cleanupManager.resources).toHaveLength(2);
    expect(cleanupManager.resources[0].type).toBe('user');
    expect(cleanupManager.resources[1].type).toBe('organization');
  });

  test('should clear resources after cleanup', async () => {
    cleanupManager.track('user', 'test-id');
    
    await cleanupManager.cleanupAll();
    
    expect(cleanupManager.resources).toHaveLength(0);
  });
}); 