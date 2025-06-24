module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/e2e/**/*.e2e.js',
    '**/tests/e2e/**/**/*.e2e.js'  // Include subdirectories
  ],
  testPathIgnorePatterns: [
    '/tests/e2e/legacy/'  // Exclude legacy folder
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/e2e/setup.js'],
  verbose: true,
  bail: false, // Continue running all tests even if some fail
  testTimeout: 30000,
  reporters: [
    'default',
    '<rootDir>/tests/e2e/helpers/jest-reporter.js',
    ['jest-junit', {
      outputDirectory: 'tests/e2e/reports/junit',
      outputName: 'junit.xml',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}'
    }]
  ],
  collectCoverage: true,
  coverageDirectory: 'tests/e2e/reports/coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/'
  ],
  globals: {
    NODE_ENV: 'test'
  }
}; 