/**
 * i18n Test Suite Coordinator
 * 
 * This file serves as the entry point for all internationalization E2E tests.
 * It coordinates the execution of all i18n test modules.
 * 
 * Test Modules:
 * - i18n-system.e2e.js: Language detection, translations, preferences
 * 
 * Usage:
 * npm run test:e2e:i18n
 */

const path = require('path');

// Import all i18n test modules
require('./i18n-system.e2e.js');

console.log('[i18n Suite] All i18n test modules loaded successfully'); 