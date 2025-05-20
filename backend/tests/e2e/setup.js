const dotenv = require('dotenv');
const path = require('path');

// Load test environment variables
dotenv.config({ path: path.join(__dirname, '.env.test') });

// Global test timeout
jest.setTimeout(process.env.TEST_TIMEOUT || 30000);

// Global beforeAll
beforeAll(async () => {
  // Add any global setup here
  console.log('\n🔧 Setting up test environment...');
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