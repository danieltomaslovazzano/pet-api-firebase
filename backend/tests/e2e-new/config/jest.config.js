/**
 * Jest Configuration for New E2E Tests
 * Simple, focused configuration optimized for reliability
 */

module.exports = {
  // Test environment
  testEnvironment: 'node',
  
  // Test file matching
  testMatch: ['**/tests/**/*.test.js'],
  
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/setup.js'],
  
  // Timeout configuration
  testTimeout: 10000, // 10 seconds per test
  
  // Execution configuration - Sequential for stability
  maxWorkers: 1, // Critical: Sequential execution to avoid concurrency issues
  
  // Output configuration
  verbose: true,
  bail: false, // Continue running tests after failures
  
  // Coverage (optional)
  collectCoverage: false, // Keep simple for now
  
  // Reporters - Keep simple for now
  reporters: ['default'],
  
  // Module resolution
  rootDir: '../',
  testPathIgnorePatterns: [
    '<rootDir>/tests/e2e/', // Ignore old E2E tests
    '<rootDir>/node_modules/'
  ]
}; 