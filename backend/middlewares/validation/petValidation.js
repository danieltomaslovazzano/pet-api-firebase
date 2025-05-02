const { body, param, query, validationResult } = require('express-validator');

/**
 * Validates pet creation request data
 * Checks for required fields and proper data types
 */
exports.validateCreatePet = [
  // Required fields
  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string'),
  
  body('species')
    .notEmpty().withMessage('Species is required')
    .isString().withMessage('Species must be a string'),
  
  body('status')
    .notEmpty().withMessage('Status is required')
    .isString().withMessage('Status must be a string')
    .isIn(['available', 'adopted', 'lost', 'found']).withMessage('Status must be one of: available, adopted, lost, found'),
  
  // Optional fields with type validation
  body('age')
    .optional()
    .isInt({ min: 0 }).withMessage('Age must be a non-negative integer'),
  
  body('breed')
    .optional()
    .isString().withMessage('Breed must be a string'),
  
  body('description')
    .optional()
    .isString().withMessage('Description must be a string'),
  
  body('medicalHistory')
    .optional()
    .isString().withMessage('Medical history must be a string'),
  
  // Required array of images
  body('images')
    .notEmpty().withMessage('At least one image URL is required')
    .isArray().withMessage('Images must be an array of URLs')
    .custom(images => images.length > 0).withMessage('At least one image URL is required'),
  
  body('images.*')
    .isURL().withMessage('Image must be a valid URL'),
  
  // Validation handler middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    next();
  }
];

/**
 * Validates pet update request data
 * Similar to create but all fields are optional
 */
exports.validateUpdatePet = [
  // Optional fields
  body('name')
    .optional()
    .isString().withMessage('Name must be a string'),
  
  body('species')
    .optional()
    .isString().withMessage('Species must be a string'),
  
  body('status')
    .optional()
    .isString().withMessage('Status must be a string')
    .isIn(['available', 'adopted', 'lost', 'found']).withMessage('Status must be one of: available, adopted, lost, found'),
  
  body('age')
    .optional()
    .isInt({ min: 0 }).withMessage('Age must be a non-negative integer'),
  
  body('breed')
    .optional()
    .isString().withMessage('Breed must be a string'),
  
  body('description')
    .optional()
    .isString().withMessage('Description must be a string'),
  
  body('medicalHistory')
    .optional()
    .isString().withMessage('Medical history must be a string'),
  
  // Images validation - if provided, must be an array with at least one image
  body('images')
    .optional()
    .isArray().withMessage('Images must be an array of URLs')
    .custom(images => images && images.length > 0).withMessage('If provided, at least one image URL is required'),
  
  body('images.*')
    .optional()
    .isURL().withMessage('Image must be a valid URL'),
  
  // Validation handler middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    next();
  }
];

/**
 * Validates pet ID parameter
 */
exports.validatePetId = [
  param('id')
    .notEmpty().withMessage('Pet ID is required')
    .isString().withMessage('Pet ID must be a valid string')
    .isUUID().withMessage('Pet ID must be a valid UUID'),
  
  // Validation handler middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid pet ID', 
        details: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    next();
  }
];

/**
 * Validates pet image request data
 */
exports.validatePetImage = [
  body('imageUrl')
    .notEmpty().withMessage('Image URL is required')
    .isURL().withMessage('Image URL must be a valid URL'),
  
  // Validation handler middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid image URL', 
        details: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    next();
  }
];

/**
 * Validates search query parameters
 */
exports.validateSearchQuery = [
  query()
    .custom((value, { req }) => {
      // Ensure at least one search parameter is provided
      const hasSearchParam = req.query.name || req.query.species || req.query.status || req.query.breed;
      if (!hasSearchParam) {
        throw new Error('At least one search parameter is required (name, species, status, or breed)');
      }
      return true;
    }),
  
  // Optional search parameters validation
  query('name')
    .optional()
    .isString().withMessage('Name must be a string'),
  
  query('species')
    .optional()
    .isString().withMessage('Species must be a string'),
  
  query('status')
    .optional()
    .isString().withMessage('Status must be a string')
    .isIn(['available', 'adopted', 'lost', 'found']).withMessage('Status must be one of: available, adopted, lost, found'),
  
  query('breed')
    .optional()
    .isString().withMessage('Breed must be a string'),
  
  // Pagination and sorting params
  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  
  query('sort')
    .optional()
    .isString().withMessage('Sort must be a string'),
  
  // Validation handler middleware
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid search parameters', 
        details: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    next();
  }
]; 