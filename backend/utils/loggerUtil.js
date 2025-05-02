/**
 * Logger Utility
 * 
 * Simple logging utility for debugging authorization-related issues
 */

const DEBUG = process.env.NODE_ENV !== 'production';

/**
 * Log authorization details if in debug mode
 * 
 * @param {Object} details - Authorization details to log
 */
function logAuthDebug(details) {
  if (DEBUG) {
    console.log('=== AUTH DEBUG ===');
    console.log(JSON.stringify(details, null, 2));
    console.log('=== END AUTH DEBUG ===');
  }
}

/**
 * Log an authorization error
 * 
 * @param {String} message - Error message
 * @param {Object} details - Error details
 */
function logAuthError(message, details = {}) {
  console.error('AUTH ERROR:', message);
  if (Object.keys(details).length > 0) {
    console.error('Details:', JSON.stringify(details, null, 2));
  }
}

module.exports = {
  logAuthDebug,
  logAuthError
}; 