const { body, param, query } = require('express-validator');
const { validateRequest } = require('./validateRequest');

// Validation rules for creating a conversation
const createConversationRules = [
  body('participants')
    .isArray()
    .withMessage('Participants must be an array')
    .notEmpty()
    .withMessage('Participants array cannot be empty')
    .custom((participants) => {
      if (participants.length < 2) {
        throw new Error('At least two participants are required');
      }
      return true;
    }),
  validateRequest
];

// Validation rules for listing conversations
const listConversationRules = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  validateRequest
];

// Validation rules for conversation ID parameter
const conversationIdRules = [
  param('id')
    .isUUID()
    .withMessage('Invalid conversation ID format'),
  validateRequest
];

// Validation rules for user ID parameter
const userIdRules = [
  param('userId')
    .isUUID()
    .withMessage('Invalid user ID format'),
  validateRequest
];

// Validation rules for updating a conversation
const updateConversationRules = [
  param('id')
    .isUUID()
    .withMessage('Invalid conversation ID format'),
  body('participants')
    .optional()
    .isArray()
    .withMessage('Participants must be an array')
    .custom((participants) => {
      if (participants && participants.length < 2) {
        throw new Error('At least two participants are required');
      }
      return true;
    }),
  validateRequest
];

module.exports = {
  createConversationRules,
  listConversationRules,
  conversationIdRules,
  userIdRules,
  updateConversationRules
}; 