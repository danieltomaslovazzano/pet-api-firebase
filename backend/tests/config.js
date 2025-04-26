// tests/config.js
require('dotenv').config({ path: '.env.dev' });

const config = {
  baseUrl: `http://localhost:${process.env.PORT || 3000}`,
  apiVersion: 'v1',
  testUser: {
    email: process.env.TEST_USER_EMAIL || 'test@example.com',
    password: process.env.TEST_USER_PASSWORD || 'test123456',
  },
  adminUser: {
    email: process.env.TEST_ADMIN_EMAIL || 'admin@example.com',
    password: process.env.TEST_ADMIN_PASSWORD || 'admin123456',
  },
  // Add more configuration as needed
};

module.exports = config; 