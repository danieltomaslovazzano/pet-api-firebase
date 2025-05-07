/**
 * Jest Setup File
 * 
 * This file runs before all test files to set up the test environment.
 */

// Configure environment for testing
process.env.NODE_ENV = 'test';

// Set default environment variables for tests if not already set
process.env.USE_POSTGRES = process.env.USE_POSTGRES || 'true';

// If testing with PostgreSQL, ensure we have a test database URL
if (process.env.USE_POSTGRES === 'true' && !process.env.DATABASE_URL) {
  process.env.DATABASE_URL = 'postgresql://postgres:postgres@localhost:5432/pet_api_test';
}

// Import Firebase mock configuration first
require('../config/mockFirebase');

// Import test helpers
const { initTestEnvironment, cleanupPostgresDb, closeDbConnections } = require('../helpers/testDbSetup');

// Before all tests run
beforeAll(async () => {
  console.log('Setting up test environment...');
  
  // Initialize the test environment
  await initTestEnvironment();
  
  // Clean up the database before starting tests
  if (process.env.USE_POSTGRES === 'true') {
    await cleanupPostgresDb();
  }
  
  console.log('Test environment setup complete.');
});

// After all tests run
afterAll(async () => {
  console.log('Cleaning up test environment...');
  
  // Close database connections
  await closeDbConnections();
  
  console.log('Test environment cleanup complete.');
});

// Configure global Jest settings
jest.setTimeout(30000); // 30 second timeout for tests

// Add global test utilities if needed
global.testUtils = {
  // Add utilities here as needed
};

// Mock the firebase-admin module if needed
jest.mock('firebase-admin', () => {
  return {
    // Mock the Firebase Admin SDK as needed
    auth: () => ({
      verifyIdToken: jest.fn().mockResolvedValue({ uid: 'test-user-id' }),
      getUser: jest.fn().mockResolvedValue({ uid: 'test-user-id', email: 'test@example.com' })
    }),
    firestore: () => ({
      // Mock Firestore methods as needed
    }),
    // Mock other Firebase services as needed
  };
});

const { mockDeep } = require('jest-mock-extended');

// Create mock Prisma client
const mockPrisma = mockDeep();

// Mock the Prisma client before any imports
jest.mock('../../config/prisma', () => {
  return {
    prisma: mockPrisma
  };
});

// Export the mock for use in tests
module.exports = { prismaMock: mockPrisma }; 