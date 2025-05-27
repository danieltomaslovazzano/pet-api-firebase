// routes/membershipRoutes.js
const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');
const { requireAuth, loadMembershipResource } = require('../middlewares');

// Apply authentication middleware to all routes
router.use(requireAuth);

/**
 * GET /memberships
 * Get memberships with optional filtering by userId or organizationId
 * Examples:
 * - GET /memberships?userId=123 - Get all memberships for a specific user
 * - GET /memberships?organizationId=456 - Get all memberships for a specific organization
 */
router.get('/', membershipController.getMemberships);

/**
 * GET /memberships/:id
 * Get a specific membership by its ID
 * Note: Membership loading and error handling is done in the controller
 */
router.get('/:id', membershipController.getMembershipById);

/**
 * POST /memberships
 * Create a new membership (invite a user to an organization)
 */
router.post('/', membershipController.inviteUser);

/**
 * PUT /memberships/:id
 * Update a membership (usually to change the member's role)
 * Note: Authorization is handled within the controller since it needs to check
 * organization permissions based on the membership's organizationId
 */
router.put('/:id', membershipController.updateMemberRole);

/**
 * DELETE /memberships/:id
 * Remove a membership (remove a member from an organization)
 * Note: Authorization is handled within the controller since it needs to check
 * organization permissions based on the membership's organizationId
 */
router.delete('/:id', membershipController.removeMember);

module.exports = router; 