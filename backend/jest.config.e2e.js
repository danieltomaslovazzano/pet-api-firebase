module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/e2e/**/*.e2e.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/e2e/setup.js'],
  testTimeout: 30000,
  verbose: true,
  reporters: [
    'default', // Keep Jest's default reporter
    ['<rootDir>/tests/e2e/helpers/jest-reporter.js', {}] // Add our custom reporter
  ],
  collectCoverage: false,
  forceExit: true,
  detectOpenHandles: true
}; 