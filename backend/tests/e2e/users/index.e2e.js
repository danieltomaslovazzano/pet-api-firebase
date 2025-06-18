/**
 * Users Test Suite Coordinator
 * 
 * This file serves as the entry point for all user management E2E tests.
 * It coordinates the execution of all user test modules.
 * 
 * Test Modules:
 * - users.e2e.js: User CRUD operations, profile management
 * 
 * Usage:
 * npm run test:e2e:users
 */

const path = require('path');

// Import all user test modules
require('./users.e2e.js');

console.log('[Users Suite] All user test modules loaded successfully'); 