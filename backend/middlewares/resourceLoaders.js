/**
 * Resource Loaders Middleware
 * 
 * This middleware handles loading resources that will be used
 * for authorization checks. It separates the concerns of
 * fetching resources from checking permissions on them.
 */

const petModel = require('../models/petModel');
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
 * Generic resource loader factory
 * Creates middleware to load any resource type
 * 
 * @param {String} resourceType - The type of resource to load
 * @param {Function} loadFunction - The function to load the resource
 * @returns {Function} Express middleware 
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