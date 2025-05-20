/**
 * Jest configuration for the backend tests
 */
// require('dotenv').config({ path: '.env.test' });

module.exports = {
  // Set the test environment
  testEnvironment: 'node',
  
  // Define test file patterns
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  
  // Setup and teardown files
  // setupFilesAfterEnv: ['<rootDir>/tests/setup/jest.setup.js'],
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    'models/**/*.js',
    'controllers/**/*.js',
    'middlewares/**/*.js',
    'utils/**/*.js',
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
    NODE_ENV: 'test'
  },
  
  // Module directories
  moduleDirectories: ['node_modules', '<rootDir>'],
  
  // Transform configuration
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  
  // Babel configuration
  transformIgnorePatterns: [
    '/node_modules/(?!@babel).+\\.js$'
  ],
  
  // Module name mapper for ES modules
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },

  // Clear mocks between tests
  clearMocks: true,

  // Reset modules between tests
  resetModules: true,

  // Restore mocks between tests
  restoreMocks: true
}; 