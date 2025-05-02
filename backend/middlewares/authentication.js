/**
 * Authentication Middleware
 * 
 * This middleware is focused solely on verifying user identity (authentication).
 * It does not handle permission checks or authorization decisions.
 */

const admin = require('firebase-admin');
const { logAuthDebug, logAuthError } = require('../utils/loggerUtil');

/**
 * Middleware to verify the Firebase token and establish req.user
 * This only confirms the user's identity, not their permissions
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.verifyToken = async (req, res, next) => {
  try {
    // Safe access to request properties
    const authHeader = req?.headers?.authorization;
    const path = req?.path || 'unknown';
    const method = req?.method || 'unknown';
    
    // Check if Authorization header exists and has correct format
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      logAuthError('Authentication token missing or invalid format', {
        path,
        method,
        headers: { authorization: authHeader ? 'Present but invalid' : 'Missing' }
      });
      
      return res.status(401).json({ error: 'Not authorized: Token not provided' });
    }

    const token = authHeader.split('Bearer ')[1];
    
    try {
      // Verify token with Firebase
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = decodedToken;
      
      logAuthDebug({
        type: 'token_verification_success',
        userId: decodedToken.uid,
        path,
        method
      });
      
      // Fetch additional user data from Firestore
      const db = admin.firestore();
      const userDoc = await db.collection('users').doc(decodedToken.uid).get();
      
      if (userDoc.exists) {
        // Add user data to the request object, including role
        const userData = userDoc.data();
        req.user = {
          ...req.user,
          ...userData
        };
        
        logAuthDebug({
          type: 'user_data_loaded',
          userId: decodedToken.uid,
          role: userData.role || 'user',
          hasUserData: true
        });
      } else {
        logAuthDebug({
          type: 'user_data_missing',
          userId: decodedToken.uid,
          message: 'User authenticated but no Firestore data found'
        });
      }
      
      next();
    } catch (error) {
      // Handle specific Firebase auth errors
      let errorMessage = 'Not authorized: Invalid token';
      let statusCode = 401;
      
      // Check for serious internal errors first
      if (error.name === 'FirebaseError' && error.code === 'internal-error') {
        statusCode = 500;
        errorMessage = 'Internal server error';
      }
      // Check specific auth errors
      else if (error.code === 'auth/id-token-expired') {
        errorMessage = 'Not authorized: Token expired';
      } else if (error.code === 'auth/id-token-revoked') {
        errorMessage = 'Not authorized: Token revoked';
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = 'Not authorized: User account disabled';
        statusCode = 403;
      }
      
      logAuthError('Token verification failed', {
        error: error.message,
        code: error.code,
        path,
        method
      });
      
      return res.status(statusCode).json({ error: errorMessage });
    }
  } catch (error) {
    logAuthError('Unexpected error in authentication middleware', {
      error: error.message,
      stack: error.stack,
      path: req?.path || 'unknown'
    });
    
    return res.status(500).json({ error: 'Internal server error' });
  }
}; 