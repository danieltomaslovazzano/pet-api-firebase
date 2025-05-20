module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/e2e/**/*.e2e.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/e2e/setup.js'],
  verbose: true,
  bail: true, // Stop on first failure
  testTimeout: 30000,
  reporters: [
    'default',
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
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  }
}; 