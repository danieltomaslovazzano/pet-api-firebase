/**
 * Organization Types Test Suite Coordinator
 * 
 * This file serves as the entry point for all organization types E2E tests.
 * It coordinates the execution of all organization type test modules.
 * 
 * Test Modules:
 * - organization-types.e2e.js: Organization type definitions and validations
 * - organization-types-integration.e2e.js: Integration tests with shelters and other types
 * 
 * Usage:
 * npm run test:e2e:organization-types
 */

const path = require('path');

// Import all organization type test modules
require('./organization-types.e2e.js');
require('./organization-types-integration.e2e.js');

console.log('[Organization Types Suite] All organization type test modules loaded successfully'); 