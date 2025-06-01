const { body, param, query, validationResult } = require('express-validator');
const { isValidOrganizationType, getValidOrganizationTypeIds } = require('../../config/organizationTypes');

/**
 * Validates organization creation request data
 */
exports.validateCreateOrganization = [
  // Required fields
  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email must be valid'),
  
  // Optional type field with validation
  body('type')
    .optional()
    .isString().withMessage('Type must be a string')
    .custom((value) => {
      if (value && !isValidOrganizationType(value)) {
        const validTypes = getValidOrganizationTypeIds().join(', ');
        throw new Error(`Invalid organization type. Valid types are: ${validTypes}`);
      }
      return true;
    }),
  
  // Optional fields
  body('description')
    .optional()
    .isString().withMessage('Description must be a string')
    .isLength({ max: 500 }).withMessage('Description must be less than 500 characters'),
  
  body('address')
    .optional()
    .isString().withMessage('Address must be a string')
    .isLength({ max: 200 }).withMessage('Address must be less than 200 characters'),
  
  body('phone')
    .optional()
    .isString().withMessage('Phone must be a string')
    .matches(/^\+?[\d\s-()]{10,}$/).withMessage('Phone must be a valid phone number'),
  
  body('logo')
    .optional()
    .isURL().withMessage('Logo must be a valid URL'),
  
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
 * Validates organization update request data
 */
exports.validateUpdateOrganization = [
  // Optional fields (all fields are optional for updates)
  body('name')
    .optional()
    .isString().withMessage('Name must be a string')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .optional()
    .isEmail().withMessage('Email must be valid'),
  
  body('type')
    .optional()
    .isString().withMessage('Type must be a string')
    .custom((value) => {
      if (value && !isValidOrganizationType(value)) {
        const validTypes = getValidOrganizationTypeIds().join(', ');
        throw new Error(`Invalid organization type. Valid types are: ${validTypes}`);
      }
      return true;
    }),
  
  body('description')
    .optional()
    .isString().withMessage('Description must be a string')
    .isLength({ max: 500 }).withMessage('Description must be less than 500 characters'),
  
  body('address')
    .optional()
    .isString().withMessage('Address must be a string')
    .isLength({ max: 200 }).withMessage('Address must be less than 200 characters'),
  
  body('phone')
    .optional()
    .isString().withMessage('Phone must be a string')
    .matches(/^\+?[\d\s-()]{10,}$/).withMessage('Phone must be a valid phone number'),
  
  body('logo')
    .optional()
    .isURL().withMessage('Logo must be a valid URL'),
  
  body('status')
    .optional()
    .isString().withMessage('Status must be a string')
    .isIn(['active', 'inactive', 'pending']).withMessage('Status must be one of: active, inactive, pending'),
  
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
 * Validates organization ID parameter
 */
exports.validateOrganizationId = [
  param('id')
    .isUUID().withMessage('Organization ID must be a valid UUID'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid organization ID', 
        details: errors.array().map(err => err.msg)
      });
    }
    next();
  }
];

/**
 * Validates organization type parameter
 */
exports.validateOrganizationType = [
  param('type')
    .custom((value) => {
      if (!isValidOrganizationType(value)) {
        const validTypes = getValidOrganizationTypeIds().join(', ');
        throw new Error(`Invalid organization type. Valid types are: ${validTypes}`);
      }
      return true;
    }),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid organization type', 
        details: errors.array().map(err => err.msg)
      });
    }
    next();
  }
];

/**
 * Validates query parameters for organization listing
 */
exports.validateOrganizationQuery = [
  query('name')
    .optional()
    .isString().withMessage('Name filter must be a string')
    .isLength({ min: 1, max: 100 }).withMessage('Name filter must be between 1 and 100 characters'),
  
  query('type')
    .optional()
    .custom((value) => {
      if (value && !isValidOrganizationType(value)) {
        const validTypes = getValidOrganizationTypeIds().join(', ');
        throw new Error(`Invalid organization type filter. Valid types are: ${validTypes}`);
      }
      return true;
    }),
  
  query('status')
    .optional()
    .isIn(['active', 'inactive', 'pending']).withMessage('Status filter must be one of: active, inactive, pending'),
  
  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid query parameters', 
        details: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }
    next();
  }
]; 