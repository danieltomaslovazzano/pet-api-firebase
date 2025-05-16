/**
 * Jest Setup File
 * 
 * This file runs before all test files to set up the test environment.
 */

// Configure environment for testing
process.env.NODE_ENV = 'test';

// Import required modules
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const testConfig = require('../../config/test.config');

// Set environment variables from test config
process.env.PORT = testConfig.port;
process.env.DATABASE_URL = testConfig.database.url;
process.env.FIREBASE_PROJECT_ID = testConfig.firebase.projectId;
process.env.FIREBASE_PRIVATE_KEY = testConfig.firebase.privateKey;
process.env.FIREBASE_CLIENT_EMAIL = testConfig.firebase.clientEmail;
process.env.JWT_SECRET = testConfig.jwt.secret;
process.env.JWT_EXPIRES_IN = testConfig.jwt.expiresIn;
process.env.LOG_LEVEL = testConfig.logging.level;

// Import test helpers
const { initTestEnvironment, cleanupPostgresDb, closeDbConnections } = require('../helpers/testDbSetup');

// Before all tests run
beforeAll(async () => {
  console.log('Setting up test environment...');
  
  try {
    // Initialize the test environment
    await initTestEnvironment();
    
    // Clean up the database before starting tests
    await cleanupPostgresDb();
    
    console.log('Test environment setup complete.');
  } catch (error) {
    console.error('Error setting up test environment:', error);
    throw error;
  }
});

// Before each test
beforeEach(async () => {
  try {
    // Clean up the database before each test
    await cleanupPostgresDb();
  } catch (error) {
    console.error('Error cleaning up database:', error);
    throw error;
  }
});

// After all tests run
afterAll(async () => {
  console.log('Cleaning up test environment...');
  
  try {
    // Close database connections
    await closeDbConnections();
    await prisma.$disconnect();
    
    console.log('Test environment cleanup complete.');
  } catch (error) {
    console.error('Error cleaning up test environment:', error);
    throw error;
  }
});

// Configure global Jest settings
jest.setTimeout(30000); // 30 second timeout for tests

// Mock Firebase Admin for authentication and storage
jest.mock('firebase-admin', () => {
  return {
    auth: () => ({
      verifyIdToken: jest.fn().mockResolvedValue({ uid: 'test-user-id' }),
      getUser: jest.fn().mockResolvedValue({ uid: 'test-user-id', email: process.env.TEST_USER_EMAIL || 'test@example.com' }),
      createUser: jest.fn().mockResolvedValue({ uid: 'test-user-id', email: process.env.TEST_USER_EMAIL || 'test@example.com' }),
      updateUser: jest.fn().mockResolvedValue({ uid: 'test-user-id', email: process.env.TEST_USER_EMAIL || 'test@example.com' }),
      deleteUser: jest.fn().mockResolvedValue(),
      setCustomUserClaims: jest.fn().mockResolvedValue()
    }),
    storage: () => ({
      bucket: () => ({
        file: jest.fn().mockReturnValue({
          save: jest.fn().mockResolvedValue(),
          getSignedUrl: jest.fn().mockResolvedValue(['https://test-url.com']),
          delete: jest.fn().mockResolvedValue()
        })
      })
    })
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

// Export the mock and config for use in tests
module.exports = { 
  prismaMock: mockPrisma,
  testConfig
}; 