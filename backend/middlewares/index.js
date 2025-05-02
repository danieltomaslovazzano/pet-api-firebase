/**
 * Middleware Composition Utility
 * 
 * This file provides convenient middleware compositions for common
 * authorization patterns. It helps keep route definitions clean
 * while still applying all necessary middleware.
 */

const { verifyToken } = require('./authentication');
const { loadPetResource, createResourceLoader } = require('./resourceLoaders');
const { checkPermission } = require('./authorization');

/**
 * Require authentication
 * Simple middleware that only checks if user is authenticated
 */
exports.requireAuth = verifyToken;

/**
 * Protect a resource with standard permission checks
 * 
 * @param {String} resource - Resource type (e.g., 'pets')
 * @param {String} action - Action being performed (e.g., 'update')
 * @returns {Array} Array of middleware functions
 */
exports.protectResource = (resource, action) => {
  // Return appropriate middleware chain based on resource type
  switch(resource) {
    case 'pets':
      return [
        verifyToken,
        loadPetResource,
        checkPermission(resource, action)
      ];
      
    case 'organizations':
      // For organization resources, we'll use the id parameter directly
      // No need for a separate loader since the resource ID is directly in the URL
      return [
        verifyToken,
        checkPermission(resource, action)
      ];
      
    // Add cases for other resource types
    default:
      throw new Error(`Unsupported resource type: ${resource}`);
  }
};

/**
 * Require a specific role
 * 
 * @param {String|Array} roles - Required role(s) 
 * @returns {Array} Array of middleware functions
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