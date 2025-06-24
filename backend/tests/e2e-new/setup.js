/**
 * Global Setup for New E2E Tests
 * Simple setup without complex configurations
 */

// Load environment variables with absolute path resolution
const path = require('path');
require('dotenv').config({ 
  path: path.resolve(__dirname, 'config', 'test.env') 
});

// Ensure API_URL is set in environment
if (!process.env.API_URL) {
  process.env.API_URL = 'http://localhost:3000/api';
}

// Global test configuration
global.API_URL = process.env.API_URL;

// Global timeout for all tests
jest.setTimeout(10000);

// Global setup
beforeAll(async () => {
  console.log('🚀 Starting New E2E Test Suite');
  console.log(`📡 API URL: ${global.API_URL}`);
  console.log(`🔧 Process ENV API_URL: ${process.env.API_URL}`);
});

// Global teardown
afterAll(async () => {
  console.log('✅ New E2E Test Suite Completed');
});

// Global error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

// Export configuration for tests
module.exports = {
  API_URL: global.API_URL
}; 