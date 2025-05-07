/**
 * Jest configuration for the backend tests
 */
module.exports = {
  // Set the test environment
  testEnvironment: 'node',
  
  // Define test file patterns
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  
  // Setup and teardown files
  setupFilesAfterEnv: ['<rootDir>/tests/setup/jest.setup.js'],
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'models/**/*.js',
    'controllers/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  
  // Test timeout
  testTimeout: 30000,
  
  // Ignore patterns
  testPathIgnorePatterns: ['/node_modules/'],
  
  // Advanced reporting
  verbose: true,
  
  // Control the test environment through env vars
  globals: {
    // Additional environment variables can be set here if needed
  },
  
  // Test suite timeout
  testTimeout: 60000,
  
  // Module directories
  moduleDirectories: ['node_modules', '<rootDir>'],
}; 