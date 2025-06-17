const dotenv = require('dotenv');
const path = require('path');

// Load development environment variables for E2E tests
dotenv.config({ path: path.join(__dirname, '../../.env.dev') });

console.log('[E2E SETUP] Loaded .env.dev configuration');
console.log('[E2E SETUP] Admin email configured:', !!process.env.ADMIN_EMAIL);
console.log('[E2E SETUP] Admin password configured:', !!process.env.ADMIN_PASSWORD);

module.exports = {};

// Global test timeout
jest.setTimeout(process.env.TEST_TIMEOUT || 30000);

// Global beforeAll
beforeAll(async () => {
  // Add any global setup here
  console.log('\n🔧 Setting up test environment...');
  console.log(`📡 Using API: ${process.env.API_URL}`);
  console.log(`🗄️ Database: ${process.env.DATABASE_URL ? 'Connected' : 'Not configured'}`);
});

// Global afterAll
afterAll(async () => {
  // Add any global cleanup here
  console.log('\n🧹 Cleaning up test environment...');
});

// Global error handling
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
  process.exit(1);
});

// Suppress console output during tests
global.console = {
  ...console,
  // Uncomment to suppress specific console methods
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  error: console.error,
}; 