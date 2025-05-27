#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Load development environment variables
const devEnvPath = path.join(process.cwd(), '.env.dev');
if (!fs.existsSync(devEnvPath)) {
  console.error('\n❌ Error: .env.dev file not found');
  console.error('Please create a .env.dev file with your development environment variables.');
  process.exit(1);
}

// Load environment variables from .env.dev
dotenv.config({ path: devEnvPath });

// Configuration
const config = {
  apiUrl: process.env.API_URL || 'http://localhost:3000/api',
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
  testTimeout: process.env.TEST_TIMEOUT || 30000, // 30 seconds default timeout
  testFiles: process.argv.slice(2).length > 0 
    ? process.argv.slice(2) 
    : ['tests/e2e/auth.e2e.js', 'tests/e2e/users.e2e.js'] // Run both auth and users tests by default
};

// Validate required environment variables
function validateConfig() {
  const required = ['ADMIN_EMAIL', 'ADMIN_PASSWORD', 'API_URL'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('\n❌ Error: Missing required environment variables in .env.dev:');
    missing.forEach(key => console.error(`   - ${key}`));
    console.error('\nPlease set these variables in your .env.dev file.');
    process.exit(1);
  }

  // Validate API URL format
  try {
    new URL(config.apiUrl);
  } catch (error) {
    console.error('\n❌ Error: Invalid API_URL format in .env.dev');
    console.error('Please provide a valid URL (e.g., http://localhost:3000/api)');
    process.exit(1);
  }
}

// Create test environment file
function createTestEnv() {
  const envContent = `
# Test Environment Configuration (Generated from .env.dev)
NODE_ENV=development
API_URL=${config.apiUrl}
ADMIN_EMAIL=${config.adminEmail}
ADMIN_PASSWORD=${config.adminPassword}
TEST_TIMEOUT=${config.testTimeout}
  `.trim();

  const envPath = path.join(__dirname, '../tests/e2e/.env.test');
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created test environment file from .env.dev');
}

// Run tests with proper environment
function runTests() {
  console.log('\n🚀 Running E2E tests in development mode...\n');
  console.log(`📡 Using API URL: ${config.apiUrl}\n`);
  
  const testFiles = config.testFiles.map(file => 
    path.join(process.cwd(), file)
  ).join(' ');

  const testProcess = spawn('jest', [
    '--config', 'jest.e2e.config.js',
    '--testTimeout', config.testTimeout,
    '--runInBand', // Run tests serially
    '--detectOpenHandles', // Detect hanging handles
    '--forceExit', // Force exit after tests
    ...testFiles.split(' ')
  ], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'development'
    }
  });

  testProcess.on('exit', (code) => {
    if (code === 0) {
      console.log('\n✅ All tests completed successfully!\n');
    } else {
      console.error('\n❌ Tests failed with exit code:', code);
      process.exit(code);
    }
  });
}

// Main execution
try {
  console.log('🔧 Setting up E2E test environment...\n');
  
  validateConfig();
  createTestEnv();
  runTests();
} catch (error) {
  console.error('\n❌ Error running E2E tests:', error.message);
  process.exit(1);
} 