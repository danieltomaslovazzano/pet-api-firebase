/**
 * Auth Test Suite Coordinator
 * 
 * This file serves as the entry point for all authentication-related E2E tests.
 * It coordinates the execution of all auth test modules.
 * 
 * Test Modules:
 * - auth.e2e.js: Core authentication functionality
 * 
 * Usage:
 * npm run test:e2e:auth
 */

const path = require('path');

// Import all auth test modules
require('./auth.e2e.js');

console.log('[Auth Suite] All auth test modules loaded successfully'); 