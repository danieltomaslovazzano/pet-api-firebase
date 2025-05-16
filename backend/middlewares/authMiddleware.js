// authMiddleware.js
// This file exists for backward compatibility with tests
// New code should import from '../middlewares' directly

const { requireAuth } = require('./index');

module.exports = {
  requireAuth
}; 