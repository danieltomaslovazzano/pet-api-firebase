/**
 * Middleware Composition Utility
 * 
 * This file provides convenient middleware compositions for common
 * authorization patterns. It helps keep route definitions clean
 * while still applying all necessary middleware.
 * 
 * Key features:
 * - Clean, consistent interface for protecting routes
 * - Simplified route definitions with descriptive function names
 * - Automatic middleware chaining in the correct order
 * - Support for resource-specific and role-based permissions
 * - Built-in error handling through composed middleware
 * 
 * Usage benefits:
 * - Reduces boilerplate code in route definitions
 * - Ensures middleware is always applied in the correct sequence
 * - Makes permission requirements explicit in route definitions
 * - Centralizes authorization patterns for consistency
 * - Improves code readability and maintainability
 */

const { verifyToken } = require('./authentication');
const { 
  loadPetResource, 
  loadUserResource,
  loadOrganizationResource,
  loadMembershipResource,
  loadConversationResource,
  loadMessageResource
} = require('./resourceLoaders');
const { checkPermission } = require('./authorization');

/**
 * Require authentication
 * Simple middleware that only checks if user is authenticated
 */
exports.requireAuth = verifyToken;

/**
 * Protect a resource with standard permission checks
 * 
 * This is the primary method for protecting resource-specific routes.
 * It composes three middleware steps:
 * 1. Verify user identity (authentication)
 * 2. Load the specific resource by ID from the database
 * 3. Check if the user has the requested permission for the resource
 * 
 * @param {String} resource - Resource type (e.g., 'pets', 'users')
 * @param {String} action - Action being performed (e.g., 'read', 'update', 'delete')
 * @param {Object} options - Additional options for permission checking
 * @param {Boolean} options.skipResourceLoading - Skip loading resource (for special cases)
 * @param {Array} options.requiredRoles - Specific roles required for this action
 * @param {Boolean} options.ownerOrAdminOnly - Only resource owner or admin can proceed
 * @returns {Array} Array of middleware functions to be applied to the route
 * 
 * Usage examples:
 * ```
 * // Allow reading a pet if user has permission
 * router.get('/pets/:id', protectResource('pets', 'read'), petController.getPet);
 * 
 * // Only allow update with specific options
 * router.put('/pets/:id', protectResource('pets', 'update', { 
 *   ownerOrAdminOnly: true 
 * }), petController.updatePet);
 * ```
 */
exports.protectResource = (resource, action, options = {}) => {
  // Return appropriate middleware chain based on resource type
  switch(resource) {
    case 'pets':
      return [
        verifyToken,
        loadPetResource,
        checkPermission(resource, action, options)
      ];
      
    case 'users':
      return [
        verifyToken,
        loadUserResource,
        checkPermission(resource, action, options)
      ];
      
    case 'organizations':
      return [
        verifyToken,
        loadOrganizationResource,
        checkPermission(resource, action, options)
      ];
      
    case 'memberships':
      return [
        verifyToken,
        loadMembershipResource,
        checkPermission(resource, action, options)
      ];
      
    case 'conversations':
      return [
        verifyToken,
        loadConversationResource,
        checkPermission(resource, action, options)
      ];
      
    case 'messages':
      return [
        verifyToken,
        loadMessageResource,
        checkPermission(resource, action, options)
      ];
      
    // For resources without a loader yet
    default:
      if (options.skipResourceLoading) {
        return [
          verifyToken,
          checkPermission(resource, action, options)
        ];
      }
      throw new Error(`Unsupported resource type: ${resource}`);
  }
};

/**
 * Protect a collection resource (for list operations)
 * 
 * This is similar to protectResource but without loading a specific resource
 * instance, as these operations typically work on multiple resources.
 * 
 * @param {String} resource - Resource type (e.g., 'pets')
 * @param {String} action - Action being performed (e.g., 'readAll')
 * @param {Object} options - Additional options for permission checking
 * @returns {Array} Array of middleware functions
 */
exports.protectCollection = (resource, action, options = {}) => {
  return [
    verifyToken,
    checkPermission(resource, action, options)
  ];
};

/**
 * Protect a route that requires a specific organization context
 * 
 * @param {String} resource - Resource type (e.g., 'organizations')
 * @param {String} action - Action being performed (e.g., 'update')
 * @param {Object} options - Additional options for permission checking
 * @returns {Array} Array of middleware functions
 */
exports.protectOrganizationResource = (resource, action, options = {}) => {
  return [
    verifyToken,
    loadOrganizationResource,
    checkPermission(resource, action, options)
  ];
};

/**
 * Require a specific role
 * 
 * This middleware composition ensures that a user has one of the specified roles.
 * It's useful for protecting admin or role-specific functionality that isn't
 * tied to a particular resource.
 * 
 * Security benefits:
 * - Centralizes role-based access control
 * - Provides consistent role checking across the application
 * - Separates role checking from business logic
 * - Works with either a single role or an array of allowed roles
 * 
 * @param {String|Array} roles - Required role(s) for access
 * @returns {Array} Array of middleware functions
 * 
 * Usage examples:
 * ```
 * // Only admin can access this route
 * router.get('/admin/dashboard', requireRole('admin'), adminController.getDashboard);
 * 
 * // Either admin or moderator can access this route
 * router.get('/reports', requireRole(['admin', 'moderator']), reportController.getReports);
 * ```
 */
exports.requireRole = (roles) => {
  return [
    verifyToken,
    checkPermission('system', 'access', { requiredRoles: Array.isArray(roles) ? roles : [roles] })
  ];
};

/**
 * Require admin role
 * Convenience method for the common case of requiring admin access
 */
exports.requireAdmin = exports.requireRole('admin');

/**
 * Require org-admin role for a specific organization
 * 
 * @param {String} options - Additional options
 * @returns {Array} Array of middleware functions
 */
exports.requireOrgAdmin = (options = {}) => {
  return [
    verifyToken,
    loadOrganizationResource,
    checkPermission('organizations', 'access', { 
      ...options,
      requiredRoles: ['org-admin', 'admin'] 
    })
  ];
};

/**
 * Owner or admin check
 * Common case of allowing either the resource owner or an admin
 * 
 * @param {String} resource - Resource type
 * @returns {Array} Array of middleware functions
 */
exports.ownerOrAdmin = (resource) => {
  const loaderMap = {
    'pets': loadPetResource,
    'users': loadUserResource,
    'organizations': loadOrganizationResource,
    'memberships': loadMembershipResource,
    'conversations': loadConversationResource,
    'messages': loadMessageResource
  };
  
  const loader = loaderMap[resource];
  
  if (!loader) {
    throw new Error(`Unsupported resource type for ownerOrAdmin: ${resource}`);
  }
  
  return [
    verifyToken,
    loader,
    checkPermission(resource, 'update', { 
      ownerOrAdminOnly: true 
    })
  ];
}; 