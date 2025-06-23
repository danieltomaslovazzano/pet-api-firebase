/**
 * Global Setup for New E2E Tests
 * Simple setup without complex configurations
 */

// Load environment variables
require('dotenv').config({ 
  path: require('path').join(__dirname, 'config', 'test.env') 
});

// Global test configuration
global.API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Global timeout for all tests
jest.setTimeout(10000);

// Global setup
beforeAll(async () => {
  console.log('🚀 Starting New E2E Test Suite');
  console.log(`📡 API URL: ${global.API_URL}`);
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