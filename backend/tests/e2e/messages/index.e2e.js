/**
 * Messages E2E Tests - Test Suite Coordinator
 * 
 * This file coordinates the execution of all message-related E2E tests.
 * The original monolithic messages.e2e.js (1,077 lines) has been divided into:
 * - message-creation.e2e.js - Message creation and validation tests
 * - message-retrieval.e2e.js - Message retrieval and access tests  
 * - message-management.e2e.js - Message updates, deletion, and management
 * - message-admin.e2e.js - Admin operations and moderation tests
 * - message-multitenancy.e2e.js - Organization isolation and multitenancy
 * - message-edge-cases.e2e.js - Error handling and edge case tests
 */

// Import all divided test suites
require('./message-creation.e2e.js');
require('./message-retrieval.e2e.js');
require('./message-management.e2e.js');
require('./message-admin.e2e.js');
require('./message-multitenancy.e2e.js');
require('./message-edge-cases.e2e.js'); 