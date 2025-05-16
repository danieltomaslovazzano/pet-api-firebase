/**
 * Permission Service
 * 
 * This service handles permission checking using the permission configuration.
 * It evaluates whether a user has permission to perform an action on a resource
 * based on their roles and various conditions.
 * 
 * @module services/permissionService
 */

const permissionRules = require('../config/permissionRules');
const admin = require('../config/firebase');
const { logAuthDebug, logAuthError } = require('../utils/loggerUtil');

/**
 * Custom error classes for more specific error handling
 */
class PermissionConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PermissionConfigError';
  }
}

class ResourceNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ResourceNotFoundError';
  }
}

/**
 * Check if a user has permission for an action on a resource
 * 
 * @param {Object} user - The user object from req.user
 * @param {String} resource - The resource type (e.g., 'pets')
 * @param {String} action - The action being performed (e.g., 'update')
 * @param {Object} context - Additional context (resourceObj, organization, etc.)
 * @returns {Boolean} Whether the user has permission
 * @throws {PermissionConfigError} If the permission configuration is invalid
 */
async function hasPermission(user, resource, action, context = {}) {
  try {
    // If permissions aren't defined for this resource or action, deny by default
    if (!permissionRules[resource]) {
      throw new PermissionConfigError(`Resource "${resource}" not defined in permission rules`);
    }
    
    if (!permissionRules[resource][action]) {
      throw new PermissionConfigError(`Action "${action}" not defined for resource "${resource}"`);
    }

    const resourcePermission = permissionRules[resource][action];
    
    // Log the check we're performing for debugging
    logAuthDebug({
      type: 'permission_check',
      user: user ? { uid: user.uid, role: user.role || 'user' } : null,
      resource,
      action,
      context: {
        resourceId: context.resourceObj?.id || context.params?.id,
        resourceOwnerId: context.resourceObj?.userId,
        params: context.params,
        options: context.options
      }
    });
    
    // Handle the special case of checking for specific roles
    if (resource === 'system' && action === 'access' && context.options?.requiredRoles) {
      const hasRequiredRole = hasRole(user, context.options.requiredRoles);
      logAuthDebug({
        type: hasRequiredRole ? 'permission_granted' : 'permission_denied',
        reason: 'specific_role_check',
        userRole: user?.role || 'user',
        requiredRoles: context.options.requiredRoles
      });
      return hasRequiredRole;
    }
    
    // Check if user has a role with direct access
    if (hasRole(user, resourcePermission.roles)) {
      logAuthDebug({
        type: 'permission_granted',
        reason: 'role_match',
        userRole: user?.role || 'user',
        allowedRoles: resourcePermission.roles
      });
      return true;
    }
    
    // Check if user meets any conditions for access
    const hasAccess = await meetsConditions(user, resourcePermission.conditions, context);
    
    if (hasAccess) {
      logAuthDebug({
        type: 'permission_granted',
        reason: 'condition_met'
      });
    } else {
      logAuthDebug({
        type: 'permission_denied',
        reason: 'no_matching_role_or_condition'
      });
    }
    
    return hasAccess;
  } catch (error) {
    // Handle and rethrow specific errors
    if (error instanceof PermissionConfigError) {
      logAuthError('Permission configuration error', { 
        error: error.message,
        resource,
        action 
      });
      throw error;
    }
    
    // For other errors, log and forward
    logAuthError('Error in permission check', {
      error: error.message,
      stack: error.stack,
      resource,
      action,
      userId: user?.uid
    });
    
    throw error;
  }
}

/**
 * Check if a user has any of the specified roles
 * 
 * @param {Object} user - The user object
 * @param {Array} allowedRoles - Roles that have permission
 * @returns {Boolean} Whether the user has one of the roles
 */
function hasRole(user, allowedRoles) {
  // If '*' is in allowedRoles, everyone has access
  if (allowedRoles.includes('*')) {
    return true;
  }
  
  // If no user or no roles defined, deny access
  if (!user) {
    return false;
  }
  
  // Default role is 'user' if not specified
  const userRole = user.role || 'user';
  
  // Check if user's role is in the allowed roles
  return allowedRoles.includes(userRole);
}

/**
 * Check if a user meets any conditions for access
 * 
 * @param {Object} user - The user object
 * @param {Array} conditions - Conditions to check
 * @param {Object} context - Context for evaluation
 * @returns {Boolean} Whether any condition is met
 */
async function meetsConditions(user, conditions, context) {
  // If no conditions, user doesn't meet any
  if (!conditions || conditions.length === 0) {
    return false;
  }
  
  // If no user, no conditions can be met
  if (!user) {
    return false;
  }
  
  // Check each condition
  for (const condition of conditions) {
    const conditionMet = await evaluateCondition(user, condition, context);
    if (conditionMet) {
      logAuthDebug({
        type: 'condition_met',
        conditionType: condition.type,
        requiredRole: condition.requiredRole
      });
      return true;
    }
  }
  
  return false;
}

/**
 * Evaluate a specific condition
 * 
 * @param {Object} user - The user object
 * @param {Object} condition - The condition to evaluate
 * @param {Object} context - Context for evaluation
 * @returns {Boolean} Whether the condition is met
 */
async function evaluateCondition(user, condition, context) {
  // If the condition requires a specific role, check that first
  if (condition.requiredRole && user.role !== condition.requiredRole) {
    logAuthDebug({
      type: 'condition_failed',
      reason: 'required_role_not_met',
      conditionType: condition.type,
      requiredRole: condition.requiredRole,
      userRole: user.role || 'user'
    });
    return false;
  }
  
  const resourceObj = context.resourceObj;
  const params = context.params || {};
  
  // Evaluate based on condition type
  switch (condition.type) {
    case 'isOwner':
      // Check if user is the owner of the resource
      const isOwner = resourceObj && resourceObj.userId === user.uid;
      logAuthDebug({
        type: 'is_owner_check',
        result: isOwner,
        userId: user.uid,
        resourceOwnerId: resourceObj?.userId
      });
      return isOwner;
      
    case 'isSelf':
      // Check if the resource is the user's own profile
      const isSelf = params.id === user.uid || params.userId === user.uid || resourceObj?.id === user.uid;
      logAuthDebug({
        type: 'is_self_check',
        result: isSelf,
        userId: user.uid,
        resourceId: resourceObj?.id || params.id || params.userId
      });
      return isSelf;
      
    case 'isSameOrganization':
      // Check if user and resource owner are in the same organization
      const isSameOrg = await checkSameOrganization(user, resourceObj);
      logAuthDebug({
        type: 'same_organization_check',
        result: isSameOrg,
        userId: user.uid,
        resourceOwnerId: resourceObj?.userId
      });
      return isSameOrg;
    
    case 'isOrgAdmin':
      // Check if user is an admin of the organization
      const orgId = params.orgId || params.organizationId || resourceObj?.organizationId;
      if (!orgId) {
        logAuthDebug({
          type: 'org_admin_check',
          result: false,
          reason: 'no_org_id'
        });
        return false;
      }
      
      const isOrgAdmin = await checkIsOrgAdmin(user.uid, orgId);
      logAuthDebug({
        type: 'org_admin_check',
        result: isOrgAdmin,
        userId: user.uid,
        orgId
      });
      return isOrgAdmin;
      
    case 'isOrgStaff':
      // Check if user is staff of the organization
      const orgIdForStaff = params.orgId || params.organizationId || resourceObj?.organizationId;
      if (!orgIdForStaff) {
        return false;
      }
      
      const isOrgStaff = await checkIsOrgStaff(user.uid, orgIdForStaff);
      logAuthDebug({
        type: 'org_staff_check',
        result: isOrgStaff,
        userId: user.uid,
        orgId: orgIdForStaff
      });
      return isOrgStaff;
      
    case 'isOrgMember':
      // Check if user is a member of the organization
      const orgIdForMember = params.orgId || params.organizationId || resourceObj?.organizationId;
      if (!orgIdForMember) {
        return false;
      }
      
      const isOrgMember = await checkIsOrgMember(user.uid, orgIdForMember);
      logAuthDebug({
        type: 'org_member_check',
        result: isOrgMember,
        userId: user.uid,
        orgId: orgIdForMember
      });
      return isOrgMember;
      
    case 'isOrgOwner':
      // Check if user is the owner of the organization
      const orgIdForOwner = params.orgId || params.organizationId || resourceObj?.organizationId;
      if (!orgIdForOwner) {
        return false;
      }
      
      const isOrgOwner = await checkIsOrgOwner(user.uid, orgIdForOwner);
      logAuthDebug({
        type: 'org_owner_check',
        result: isOrgOwner,
        userId: user.uid,
        orgId: orgIdForOwner
      });
      return isOrgOwner;
      
    case 'isPublic':
      // Check if the resource is marked as public
      const isPublic = resourceObj?.public === true || resourceObj?.isPublic === true;
      logAuthDebug({
        type: 'is_public_check',
        result: isPublic,
        resourceId: resourceObj?.id
      });
      return isPublic;
      
    default:
      // Unknown condition type
      logAuthError('Unknown condition type', { type: condition.type });
      return false;
  }
}

/**
 * Check if a user and resource owner are in the same organization
 * 
 * @param {Object} user - The user object
 * @param {Object} resource - The resource object
 * @returns {Boolean} Whether they're in the same organization
 */
async function checkSameOrganization(user, resource) {
  if (!resource || !resource.userId) {
    return false;
  }
  
  // Get the organizations for both users
  const userOrgs = await getUserOrganizations(user.uid);
  const resourceOwnerOrgs = await getUserOrganizations(resource.userId);
  
  if (!userOrgs.length || !resourceOwnerOrgs.length) {
    return false;
  }
  
  // Check if they share any organization
  const userOrgIds = userOrgs.map(org => org.id);
  const resourceOrgIds = resourceOwnerOrgs.map(org => org.id);
  
  // Return true if there's any overlap
  return userOrgIds.some(orgId => resourceOrgIds.includes(orgId));
}

/**
 * Check if a user is an admin of an organization
 * 
 * @param {String} userId - The user ID
 * @param {String} orgId - The organization ID
 * @returns {Boolean} Whether the user is an admin
 */
async function checkIsOrgAdmin(userId, orgId) {
  // [Firestore logic removed: All Firestore database operations have been removed as part of the migration to Prisma/Postgres. Firebase Auth logic is preserved.]
  return false;
}

/**
 * Check if a user is staff in an organization
 * 
 * @param {String} userId - The user ID
 * @param {String} orgId - The organization ID
 * @returns {Boolean} Whether the user is staff
 */
async function checkIsOrgStaff(userId, orgId) {
  // [Firestore logic removed: All Firestore database operations have been removed as part of the migration to Prisma/Postgres. Firebase Auth logic is preserved.]
  return false;
}

/**
 * Check if a user is a member of an organization
 * 
 * @param {String} userId - The user ID
 * @param {String} orgId - The organization ID
 * @returns {Boolean} Whether the user is a member
 */
async function checkIsOrgMember(userId, orgId) {
  // [Firestore logic removed: All Firestore database operations have been removed as part of the migration to Prisma/Postgres. Firebase Auth logic is preserved.]
  return false;
}

/**
 * Check if a user is the owner of an organization
 * 
 * @param {String} userId - The user ID
 * @param {String} orgId - The organization ID
 * @returns {Boolean} Whether the user is the owner
 */
async function checkIsOrgOwner(userId, orgId) {
  // [Firestore logic removed: All Firestore database operations have been removed as part of the migration to Prisma/Postgres. Firebase Auth logic is preserved.]
  return false;
}

/**
 * Get all organizations a user belongs to
 * 
 * @param {String} userId - The user ID
 * @returns {Array} Array of organization objects
 */
async function getUserOrganizations(userId) {
  // [Firestore logic removed: All Firestore database operations have been removed as part of the migration to Prisma/Postgres. Firebase Auth logic is preserved.]
  return [];
}

module.exports = {
  hasPermission,
  hasRole,
  // Export helper functions for testing
  _testing: {
    evaluateCondition,
    meetsConditions,
    checkSameOrganization,
    checkIsOrgAdmin,
    checkIsOrgStaff,
    checkIsOrgMember,
    checkIsOrgOwner,
    getUserOrganizations
  }
}; 