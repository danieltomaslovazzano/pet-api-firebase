/**
 * Memberships E2E Tests - Test Suite Coordinator
 * 
 * This file coordinates the execution of all membership-related E2E tests.
 * The original monolithic memberships.e2e.js (729 lines) has been divided into:
 * - membership-invitations.e2e.js - User invitations and onboarding tests
 * - membership-retrieval.e2e.js - Membership retrieval and access tests  
 * - membership-details.e2e.js - Membership details and information
 * - membership-roles.e2e.js - Role management and updates tests
 * - membership-removal.e2e.js - Member removal and self-leave tests
 * - membership-access-control.e2e.js - Cross-organization access control
 */

// Import all divided test suites
require('./membership-invitations.e2e.js');
require('./membership-retrieval.e2e.js');
require('./membership-details.e2e.js');
require('./membership-roles.e2e.js');
require('./membership-removal.e2e.js');
require('./membership-access-control.e2e.js');