/**
 * Jest Configuration for New E2E Tests
 * Simple, focused configuration optimized for reliability
 */

module.exports = {
  // Test environment
  testEnvironment: 'node',
  
  // Test file matching
  testMatch: ['**/tests/**/*.test.js'],
  
  // Setup files - Fixed path to point to correct setup.js
  setupFilesAfterEnv: ['<rootDir>/tests/e2e-new/setup.js'],
  
  // Timeout configuration
  testTimeout: 10000, // 10 seconds per test
  
  // Execution configuration - Sequential for stability
  maxWorkers: 1, // Critical: Sequential execution to avoid concurrency issues
  
  // Output configuration
  verbose: true,
  bail: false, // Continue running tests after failures
  
  // Coverage (optional)
  collectCoverage: false, // Keep simple for now
  
  // Reporters - Enhanced with HTML and JUnit reports
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './tests/e2e-new/reports/html',
        filename: 'e2e-test-report.html',
        expand: true,
        hideIcon: false,
        pageTitle: 'E2E Test Report - Pet API',
        logoImgPath: undefined,
        includeFailureMsg: true,
        includeSuiteFailure: true,
        includeConsoleLog: true,
        theme: 'lightTheme',
        enableMergeData: true,
        dateMerge: true
      }
    ],
    [
      'jest-junit',
      {
        outputDirectory: './tests/e2e-new/reports/junit',
        outputName: 'e2e-test-results.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
        ancestorSeparator: ' › ',
        usePathForSuiteName: true,
        includeConsoleOutput: true,
        includeShortConsoleOutput: false
      }
    ]
  ],
  
  // Module resolution
  rootDir: process.cwd(),
  testPathIgnorePatterns: [
    '<rootDir>/tests/e2e/', // Ignore old E2E tests
    '<rootDir>/node_modules/'
  ]
}; 