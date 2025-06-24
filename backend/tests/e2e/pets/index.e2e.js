/**
 * Pet E2E Tests Suite - Index File
 * 
 * This file imports all pet-related E2E test suites.
 * Previously, these were all in one monolithic file (1229 lines).
 * Now split into focused, maintainable modules.
 * 
 * Run all pet tests with: npm run test:e2e tests/e2e/pets/
 * Run specific suite: npm run test:e2e tests/e2e/pets/pet-creation.e2e.js
 */

// Import all pet test suites
require('./pet-creation.e2e.js');
require('./pet-permissions.e2e.js');
require('./pet-visibility.e2e.js'); 