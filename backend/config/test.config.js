/**
 * Test Environment Configuration
 * 
 * This file contains the configuration for the test environment.
 * It's used when NODE_ENV is set to 'test'.
 * 
 * Note: This file should NOT contain any real credentials or sensitive data.
 * All sensitive data should be loaded from environment variables.
 */

module.exports = {
  // Server Configuration
  port: process.env.PORT || 3001,
  nodeEnv: 'test',

  // Database Configuration
  database: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5433/pet_api_test'
  },

  // Firebase Configuration
  // Note: Real Firebase credentials should be loaded from environment variables
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID || 'test-project',
    // privateKey and clientEmail should be loaded from environment variables
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL
  },

  // Test User Configuration
  // Note: These are test users that will be created in the test database
  testUsers: {
    regular: {
      email: process.env.TEST_USER_EMAIL || 'test@example.com',
      password: process.env.TEST_USER_PASSWORD || 'test123456'
    },
    admin: {
      email: process.env.TEST_ADMIN_EMAIL || 'admin@example.com',
      password: process.env.TEST_ADMIN_PASSWORD || 'admin123456'
    }
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'test-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  },

  // Logging Configuration
  logging: {
    level: process.env.LOG_LEVEL || 'error'
  }
}; 