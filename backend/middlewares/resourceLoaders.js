/**
 * Resource Loaders Middleware
 * 
 * This middleware handles loading resources that will be used
 * for authorization checks. It separates the concerns of
 * fetching resources from checking permissions on them.
 * 
 * Key features:
 * - Isolation of resource loading logic from permission checking
 * - Support for multiple resource types (pets, users, organizations, etc.)
 * - Consistent error handling with appropriate status codes
 * - Debug and error logging for troubleshooting
 * - Common interface for all resource types
 * 
 * Security considerations:
 * - Resource loaders do not perform authorization checks
 * - They only fetch resources for later authorization middleware
 * - Resource data is attached to req.resourceObj for subsequent middleware
 * - No resources are modified during the loading process
 * 
 * Usage pattern:
 * Resource loaders are typically used before the authorization middleware:
 * router.get('/resource/:id',
 *   verifyToken,              // 1. Authenticate user
 *   loadResourceLoader,       // 2. Load the resource
 *   checkPermission('read'),  // 3. Check permissions
 *   controller.getResource    // 4. Handle the request
 * );
 */

const petModel = require('../models/petModel');
const userModel = require('../models/userModel');
const organizationModel = require('../models/organizationModel');
const membershipModel = require('../models/membershipModel');
const conversationModel = require('../models/conversationModel');
const messageModel = require('../models/messageModel');
const { logAuthDebug, logAuthError } = require('../utils/loggerUtil');

/**
 * Load a pet resource by ID
 * This middleware loads the pet data and attaches it to the request
 * for use by the authorization middleware and controllers.
 */
exports.loadPetResource = (req, res, next) => {
  const { id } = req.params;
  
  logAuthDebug({
    type: 'loading_resource',
    resourceType: 'pet',
    resourceId: id,
    userId: req.user?.uid
  });
  
  petModel.getPetById(id, (err, pet) => {
    if (err) {
      logAuthError('Error loading pet resource', { id, error: err.message });
      
      if (err.message === 'Pet not found') {
        return res.status(404).json({ error: 'Pet not found' });
      }
      return res.status(500).json({ error: 'Error retrieving pet' });
    }
    
    logAuthDebug({
      type: 'resource_loaded',
      resourceType: 'pet',
      resourceId: id,
      resourceOwnerId: pet.userId
    });
    
    // Attach the pet data to the request
    req.resourceObj = pet;
    next();
  });
};

/**
 * Load a user resource by ID
 * This middleware loads the user data and attaches it to the request
 * for authorization checks and controllers.
 */
exports.loadUserResource = (req, res, next) => {
  const id = req.params.id || req.params.userId;
  
  if (!id) {
    return res.status(400).json({ error: 'Missing user ID in request parameters' });
  }
  
  logAuthDebug({
    type: 'loading_resource',
    resourceType: 'user',
    resourceId: id,
    userId: req.user?.uid
  });
  
  userModel.getUserById(id)
    .then(user => {
      if (!user) {
        logAuthError('User resource not found', { id });
        return res.status(404).json({ error: 'User not found' });
      }
      
      logAuthDebug({
        type: 'resource_loaded',
        resourceType: 'user',
        resourceId: id
      });
      
      // Attach the user data to the request
      req.resourceObj = user;
      next();
    })
    .catch(err => {
      logAuthError('Error loading user resource', { id, error: err.message });
      return res.status(500).json({ error: 'Error retrieving user' });
    });
};

/**
 * Load an organization resource by ID
 * This middleware loads the organization data and attaches it to the request
 * for authorization checks and controllers.
 */
exports.loadOrganizationResource = (req, res, next) => {
  const id = req.params.id || req.params.orgId || req.params.organizationId;
  
  if (!id) {
    return res.status(400).json({ error: 'Missing organization ID in request parameters' });
  }
  
  logAuthDebug({
    type: 'loading_resource',
    resourceType: 'organization',
    resourceId: id,
    userId: req.user?.uid
  });
  
  organizationModel.getOrganizationById(id, (err, organization) => {
    if (err) {
      logAuthError('Error loading organization resource', { id, error: err.message });
      
      if (err.message === 'Organization not found') {
        return res.status(404).json({ error: 'Organization not found' });
      }
      return res.status(500).json({ error: 'Error retrieving organization' });
    }
    
    logAuthDebug({
      type: 'resource_loaded',
      resourceType: 'organization',
      resourceId: id,
      ownerId: organization.ownerId || organization.createdBy
    });
    
    // Attach the organization data to the request
    req.resourceObj = organization;
    next();
  });
};

/**
 * Load a membership resource by ID
 * This middleware loads the membership data and attaches it to the request
 * for authorization checks and controllers.
 */
exports.loadMembershipResource = (req, res, next) => {
  const id = req.params.id || req.params.membershipId;
  
  if (!id) {
    return res.status(400).json({ error: 'Missing membership ID in request parameters' });
  }
  
  logAuthDebug({
    type: 'loading_resource',
    resourceType: 'membership',
    resourceId: id,
    userId: req.user?.uid
  });
  
  membershipModel.getMembershipById(id, (err, membership) => {
    if (err) {
      logAuthError('Error loading membership resource', { id, error: err.message });
      
      if (err.message === 'Membership not found') {
        return res.status(404).json({ error: 'Membership not found' });
      }
      return res.status(500).json({ error: 'Error retrieving membership' });
    }
    
    logAuthDebug({
      type: 'resource_loaded',
      resourceType: 'membership',
      resourceId: id,
      userId: membership.userId,
      organizationId: membership.organizationId
    });
    
    // Attach the membership data to the request
    req.resourceObj = membership;
    next();
  });
};

/**
 * Load a conversation resource by ID
 * This middleware loads the conversation data and attaches it to the request
 * for authorization checks and controllers.
 */
exports.loadConversationResource = (req, res, next) => {
  const id = req.params.id || req.params.conversationId;
  
  if (!id) {
    return res.status(400).json({ error: 'Missing conversation ID in request parameters' });
  }
  
  logAuthDebug({
    type: 'loading_resource',
    resourceType: 'conversation',
    resourceId: id,
    userId: req.user?.uid
  });
  
  conversationModel.getConversationById(id, (err, conversation) => {
    if (err) {
      logAuthError('Error loading conversation resource', { id, error: err.message });
      
      if (err.message === 'Conversation not found') {
        return res.status(404).json({ error: 'Conversation not found' });
      }
      return res.status(500).json({ error: 'Error retrieving conversation' });
    }
    
    logAuthDebug({
      type: 'resource_loaded',
      resourceType: 'conversation',
      resourceId: id,
      participants: conversation.participants
    });
    
    // Attach the conversation data to the request
    req.resourceObj = conversation;
    next();
  });
};

/**
 * Load a message resource by ID
 * This middleware loads the message data and attaches it to the request
 * for authorization checks and controllers.
 */
exports.loadMessageResource = (req, res, next) => {
  const id = req.params.id || req.params.messageId;
  
  if (!id) {
    return res.status(400).json({ error: 'Missing message ID in request parameters' });
  }
  
  logAuthDebug({
    type: 'loading_resource',
    resourceType: 'message',
    resourceId: id,
    userId: req.user?.uid
  });
  
  messageModel.getMessageById(id, (err, message) => {
    if (err) {
      logAuthError('Error loading message resource', { id, error: err.message });
      
      if (err.message === 'Message not found') {
        return res.status(404).json({ error: 'Message not found' });
      }
      return res.status(500).json({ error: 'Error retrieving message' });
    }
    
    logAuthDebug({
      type: 'resource_loaded',
      resourceType: 'message',
      resourceId: id,
      senderId: message.senderId,
      conversationId: message.conversationId
    });
    
    // Attach the message data to the request
    req.resourceObj = message;
    next();
  });
};

/**
 * Generic resource loader factory
 * Creates middleware to load any resource type
 * 
 * @param {String} resourceType - The type of resource to load (e.g. 'pet', 'user')
 * @param {Function} loadFunction - The function to load the resource from the database
 * @returns {Function} Express middleware function that loads the resource
 * 
 * Error handling:
 * - 400: Missing resource ID in request parameters
 * - 404: Resource not found
 * - 500: Database or other errors during resource loading
 * 
 * Security considerations:
 * - Validates resource ID existence before making database calls
 * - Logs all resource loading attempts for audit purposes
 * - Provides consistent error messages that don't expose internal details
 * 
 * Usage example:
 * ```
 * const customLoader = createResourceLoader('report', reportModel.getReportById);
 * router.get('/reports/:id', verifyToken, customLoader, checkPermission, reportController.getReport);
 * ```
 */
exports.createResourceLoader = (resourceType, loadFunction) => {
  return (req, res, next) => {
    const id = req.params.id || req.params[`${resourceType}Id`];
    
    if (!id) {
      return res.status(400).json({ 
        error: `Missing ${resourceType} ID in request parameters` 
      });
    }
    
    logAuthDebug({
      type: 'loading_resource',
      resourceType,
      resourceId: id,
      userId: req.user?.uid
    });
    
    loadFunction(id, (err, resource) => {
      if (err) {
        logAuthError(`Error loading ${resourceType} resource`, { 
          id, 
          error: err.message 
        });
        
        if (err.message === `${resourceType} not found`) {
          return res.status(404).json({ error: `${resourceType} not found` });
        }
        return res.status(500).json({ error: `Error retrieving ${resourceType}` });
      }
      
      logAuthDebug({
        type: 'resource_loaded',
        resourceType,
        resourceId: id,
        resourceOwnerId: resource.userId
      });
      
      // Attach the resource data to the request
      req.resourceObj = resource;
      next();
    });
  };
}; 