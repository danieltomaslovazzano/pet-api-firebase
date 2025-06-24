/**
 * Conversations E2E Tests - Test Suite Coordinator
 * 
 * This file coordinates the execution of all conversation-related E2E tests.
 * The original monolithic conversations.e2e.js (868 lines) has been divided into:
 * - conversation-creation.e2e.js - Conversation creation and validation tests
 * - conversation-retrieval.e2e.js - Conversation retrieval and access tests  
 * - conversation-management.e2e.js - Conversation management and moderation
 * - conversation-admin.e2e.js - Admin operations and oversight tests
 * - conversation-multitenancy.e2e.js - Organization isolation and multitenancy
 * - conversation-edge-cases.e2e.js - Error handling and edge case tests
 */

// Import all divided test suites
require('./conversation-creation.e2e.js');
require('./conversation-retrieval.e2e.js');
require('./conversation-management.e2e.js');
require('./conversation-admin.e2e.js');
require('./conversation-multitenancy.e2e.js');
require('./conversation-edge-cases.e2e.js');