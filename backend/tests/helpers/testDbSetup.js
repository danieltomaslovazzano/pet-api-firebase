/**
 * Test Database Setup Helper
 * 
 * This module provides utilities for setting up test databases,
 * including configuration for both Firebase and PostgreSQL testing.
 */

const { PrismaClient } = require('@prisma/client');
const { mockDeep, mockReset } = require('jest-mock-extended');

// Test data store for tracking test data
const testDataStore = {
  users: [],
  pets: [],
  organizations: [],
  memberships: [],
  conversations: [],
  messages: []
};

/**
 * Initialize the test environment
 * Sets up the proper database based on the environment variables
 */
async function initTestEnvironment() {
  // Use the env var to determine which database to use during tests
  const usePostgres = process.env.USE_POSTGRES === 'true';
  console.log(`[TEST] Using ${usePostgres ? 'PostgreSQL' : 'Firebase'} for tests`);
  
  // In test mode, we don't need to validate database connection
  // Just ensure we're using the test configuration
  if (usePostgres) {
    process.env.DATABASE_URL = process.env.DATABASE_URL || 'mock://localhost/test';
  }
}

/**
 * Mock cleanup of the PostgreSQL database 
 * This just clears the in-memory test data instead of using a real database
 */
async function cleanupPostgresDb() {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error('cleanupPostgresDb should only be run in test environment');
  }
  
  // Clear test data store
  Object.keys(testDataStore).forEach(key => {
    testDataStore[key] = [];
  });

  console.log('[TEST] Mock test database cleared successfully');
}

/**
 * Create test data in the appropriate database
 * @param {Object} testData - Data to be inserted for testing
 */
async function createTestData(testData) {
  const usePostgres = process.env.USE_POSTGRES === 'true';
  
  if (usePostgres) {
    return createPostgresTestData(testData);
  } else {
    return createFirebaseTestData(testData);
  }
}

/**
 * Create test data in mock PostgreSQL
 * @param {Object} testData - Data to be inserted in PostgreSQL
 */
async function createPostgresTestData(testData) {
  try {
    const createdData = {};
    
    // Create users if provided
    if (testData.users && testData.users.length > 0) {
      createdData.users = testData.users.map(userData => {
        const newUser = { ...userData };
        testDataStore.users.push(newUser);
        return newUser;
      });
    }
    
    // Create pets if provided
    if (testData.pets && testData.pets.length > 0) {
      createdData.pets = testData.pets.map(petData => {
        const newPet = { ...petData };
        testDataStore.pets.push(newPet);
        return newPet;
      });
    }
    
    return createdData;
  } catch (error) {
    console.error('Error creating test data:', error);
    throw error;
  }
}

/**
 * Create test data in Firebase
 * @param {Object} testData - Data to be inserted in Firebase
 */
async function createFirebaseTestData(testData) {
  throw new Error('Firebase test data creation not implemented');
}

/**
 * Close any open database connections
 */
async function closeDbConnections() {
  // No real connections to close in test environment
  console.log('[TEST] Mock database connections closed');
}

module.exports = {
  initTestEnvironment,
  cleanupPostgresDb,
  createTestData,
  closeDbConnections,
  testDataStore
}; 