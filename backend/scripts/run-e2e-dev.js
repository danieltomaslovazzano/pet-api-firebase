#!/usr/bin/env node

/**
 * Script to run E2E tests in development environment
 * Usage: 
 *   node scripts/run-e2e-dev.js                    # Run all tests
 *   node scripts/run-e2e-dev.js auth               # Run auth tests only
 *   node scripts/run-e2e-dev.js users              # Run users tests only
 *   node scripts/run-e2e-dev.js organizations      # Run organizations tests only
 *   node scripts/run-e2e-dev.js memberships        # Run memberships tests only
 *   node scripts/run-e2e-dev.js pets               # Run pets tests only
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env.dev
require('dotenv').config({ path: path.join(__dirname, '..', '.env.dev') });

// Test suite configurations
const TEST_SUITES = {
  auth: ['auth.e2e.js'],
  users: ['users.e2e.js'],
  organizations: ['organizations.e2e.js'],
  memberships: ['memberships.e2e.js'],
  pets: ['pets.e2e.js'],
  all: ['auth.e2e.js', 'users.e2e.js', 'organizations.e2e.js', 'memberships.e2e.js', 'pets.e2e.js']
};

const COLORS = {
  RESET: '\x1b[0m',
  BRIGHT: '\x1b[1m',
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  MAGENTA: '\x1b[35m',
  CYAN: '\x1b[36m'
};

function colorize(color, text) {
  return `${COLORS[color]}${text}${COLORS.RESET}`;
}

function logSection(title) {
  console.log('\n' + '='.repeat(60));
  console.log(colorize('CYAN', colorize('BRIGHT', `  ${title}`)));
  console.log('='.repeat(60));
}

function logInfo(message) {
  console.log(colorize('BLUE', `ℹ ${message}`));
}

function logSuccess(message) {
  console.log(colorize('GREEN', `✓ ${message}`));
}

function logWarning(message) {
  console.log(colorize('YELLOW', `⚠ ${message}`));
}

function logError(message) {
  console.log(colorize('RED', `✗ ${message}`));
}

function checkEnvironment() {
  logSection('CHECKING ENVIRONMENT');
  
  const requiredEnvVars = ['ADMIN_EMAIL', 'ADMIN_PASSWORD', 'DATABASE_URL'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    logError(`Missing required environment variables: ${missingVars.join(', ')}`);
    logInfo('Please set these in your .env.dev file:');
    missingVars.forEach(varName => {
      console.log(`  ${varName}=your_value`);
    });
    process.exit(1);
  }
  
  logSuccess('All required environment variables are set');
  logInfo(`Database URL: ${process.env.DATABASE_URL.substring(0, 50)}...`);
  logInfo(`API URL: ${process.env.API_URL}`);
  
  // Check if test files exist
  const testDir = path.join(__dirname, '..', 'tests', 'e2e');
  const requiredFiles = ['auth.e2e.js', 'users.e2e.js', 'organizations.e2e.js', 'memberships.e2e.js'];
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(testDir, file)));
  
  if (missingFiles.length > 0) {
    logWarning(`Some test files are missing: ${missingFiles.join(', ')}`);
  } else {
    logSuccess('All test files are present');
  }
}

function runTests(suite = 'all') {
  return new Promise((resolve, reject) => {
    logSection(`RUNNING E2E TESTS - ${suite.toUpperCase()}`);
    
    if (!TEST_SUITES[suite]) {
      logError(`Unknown test suite: ${suite}`);
      logInfo(`Available suites: ${Object.keys(TEST_SUITES).join(', ')}`);
      reject(new Error(`Unknown test suite: ${suite}`));
      return;
    }
    
    const testFiles = TEST_SUITES[suite];
    logInfo(`Running tests: ${testFiles.join(', ')}`);
    
    // Create full paths to test files
    const testDir = path.join(__dirname, '..', 'tests', 'e2e');
    const testFilePaths = testFiles.map(file => path.join(testDir, file));
    
    // Create Jest command for specific files using E2E config
    const jestArgs = [
      '--config', 'jest.e2e.config.js',
      '--detectOpenHandles',
      '--forceExit',
      '--verbose',
      '--testTimeout=30000',
      ...testFilePaths
    ];
    
    logInfo(`Jest command: npx jest ${jestArgs.join(' ')}`);
    
    const jest = spawn('npx', ['jest', ...jestArgs], {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..'),
      env: {
        ...process.env,
        NODE_ENV: 'development'
      }
    });
    
    jest.on('close', (code) => {
      if (code === 0) {
        logSuccess(`E2E tests completed successfully for suite: ${suite}`);
        resolve(code);
      } else {
        logError(`E2E tests failed with exit code: ${code}`);
        reject(new Error(`Tests failed with code ${code}`));
      }
    });
    
    jest.on('error', (error) => {
      logError(`Failed to start Jest: ${error.message}`);
      reject(error);
    });
  });
}

async function main() {
  const startTime = Date.now();
  const suite = process.argv[2] || 'all';
  
  try {
    logSection('E2E DEVELOPMENT TESTING');
    logInfo(`Test Suite: ${suite}`);
    logInfo(`Start Time: ${new Date().toLocaleString()}`);
    
    checkEnvironment();
    
    await runTests(suite);
    
    const endTime = Date.now();
    logSection('TEST COMPLETED SUCCESSFULLY');
    logSuccess(`Total duration: ${((endTime - startTime) / 1000).toFixed(2)} seconds`);
    logInfo('Detailed reports generated by individual test files in tests/e2e/reports/[test-name].e2e/');
    
  } catch (error) {
    const endTime = Date.now();
    logSection('TEST FAILED');
    logError(`Error: ${error.message}`);
    logError(`Total duration: ${((endTime - startTime) / 1000).toFixed(2)} seconds`);
    logInfo('Check detailed reports in tests/e2e/reports/[test-name].e2e/ for more information');
    
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logError(`Uncaught Exception: ${error.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logError(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
  process.exit(1);
});

if (require.main === module) {
  main();
} 