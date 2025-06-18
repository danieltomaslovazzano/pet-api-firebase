/**
 * Organizations Test Suite Coordinator
 * 
 * This file serves as the entry point for all organization management E2E tests.
 * It coordinates the execution of all organization test modules.
 * 
 * Test Modules:
 * - organizations.e2e.js: Organization CRUD operations, management features
 * 
 * Usage:
 * npm run test:e2e:organizations
 */

const path = require('path');

// Import all organization test modules
require('./organizations.e2e.js');

console.log('[Organizations Suite] All organization test modules loaded successfully'); 