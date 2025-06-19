/**
 * Authorization Middleware
 * 
 * This middleware handles authorization checks using the permission service.
 * It focuses solely on determining if a user has permission to perform
 * specific operations, not on loading resources or verifying identity.
 * 
 * @module middlewares/authorization
 */

const { hasPermission } = require('../services/permissionService');
const { logAuthDebug, logAuthError } = require('../utils/loggerUtil');

/**
 * Check if the user has permission for an action on a resource
 * 
 * This middleware:
 * 1. Verifies that a user is authenticated
 * 2. Checks if the user has permission for the requested action on the resource
 * 3. Returns appropriate error responses or calls next() to proceed
 * 
 * @param {String} resource - The resource type (e.g., 'pets')
 * @param {String} action - The action being performed (e.g., 'update')
 * @param {Object} options - Additional options for permission checking
 * @returns {Function} Express middleware
 * 
 * @example
 * // Basic usage
 * router.put('/pets/:id', checkPermission('pets', 'update'), updatePetHandler);
 * 
 * // With options
 * router.put('/orgs/:orgId/members', 
 *   checkPermission('organizations', 'updateMember', { requireOrgAdmin: true }),
 *   updateMemberHandler
 * );
 */
const checkPermission = (resource, action, options = {}) => {
  if (!resource || !action) {
    throw new Error('Resource and action must be provided to checkPermission middleware');
  }
  
  return async (req, res, next) => {
    // If no authenticated user, deny access immediately
    if (!req.user) {
      logAuthError('Authentication required for protected resource', {
        resource,
        action,
        path: req.path,
        method: req.method
      });
      return res.apiUnauthorized('Authentication required');
    }
    
    try {
      logAuthDebug({
        type: 'authorization_check',
        resource,
        action,
        userId: req.user.uid,
        userRole: req.user.role || 'user',
        path: req.path
      });
      
      // Get the context for permission checking
      const context = {
        resourceObj: req.resourceObj,
        params: req.params,
        query: req.query, // Include query parameters for filtering-based permissions
        user: req.user, // Include the user object for reference
        options
      };
      
      // Check if user has permission
      const permitted = await hasPermission(req.user, resource, action, context);
      
      if (!permitted) {
        // Add more detailed information about why permission was denied
        const details = {
          userId: req.user.uid,
          resource,
          action,
          userRole: req.user.role || 'user',
          resourceId: req.resourceObj?.id || req.params.id || null,
          path: req.path
        };
        
        logAuthError('Permission denied', details);
        
        return res.status(403).json({ 
          error: 'Permission denied', 
          message: `You don't have permission to ${action} this ${resource}`
        });
      }
      
      logAuthDebug({
        type: 'authorization_success',
        resource,
        action,
        userId: req.user.uid,
        path: req.path
      });
      
      next();
    } catch (error) {
      // Log with more context to help debugging
      logAuthError('Error in authorization middleware', {
        error: error.message, 
        stack: error.stack,
        resource,
        action,
        userId: req.user.uid,
        resourceId: req.resourceObj?.id || req.params.id || null,
        path: req.path
      });
      
      // Provide a friendlier error message to the client
      let statusCode = 500;
      let errorMessage = 'Error checking permissions';
      
      // Handle specific error types
      if (error.name === 'ValidationError') {
        statusCode = 400;
        errorMessage = 'Invalid permission request format';
      } else if (error.name === 'ResourceNotFoundError') {
        statusCode = 404;
        errorMessage = `The requested ${resource} could not be found`;
      } else if (error.name === 'PermissionConfigError') {
        // Log this error as critical since it indicates a configuration issue
        logAuthError('Critical permission configuration error', {
          error: error.message,
          resource,
          action
        });
      }
      
      res.status(statusCode).json({ error: errorMessage });
    }
  };
};

module.exports = {
  checkPermission
}; 