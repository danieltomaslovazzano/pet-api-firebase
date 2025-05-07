/**
 * Authentication Middleware
 * 
 * This middleware is focused solely on verifying user identity (authentication).
 * It does not handle permission checks or authorization decisions.
 * 
 * Features:
 * - Firebase token verification
 * - User data loading from either Firestore or PostgreSQL (based on adapter)
 * - Detailed error handling for various token scenarios
 * - Security logging for authentication events
 * - Backward compatibility with legacy error messages
 * 
 * Security considerations:
 * - Tokens are verified using Firebase Admin SDK
 * - Different error types are handled with appropriate status codes
 * - Sensitive information is never exposed in error messages
 * - All authentication attempts are logged for audit purposes
 */

const admin = require('firebase-admin');
const { userModel } = require('../models/adapter');
const { logAuthDebug, logAuthError } = require('../utils/loggerUtil');

/**
 * Middleware to verify the Firebase token and establish req.user
 * This only confirms the user's identity, not their permissions
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * 
 * Error handling:
 * - 401: Missing token, invalid token, expired token
 * - 403: User account disabled 
 * - 500: Internal server errors during verification
 * 
 * Backward compatibility:
 * Uses the original error message format for compatibility with existing clients:
 * - "Token no proporcionado" - No token provided
 * - "Token inválido" - Invalid token format or verification failed
 * - "Token expirado" - Token has expired
 * - "Cuenta de usuario deshabilitada" - User account is disabled
 * - "Error interno del servidor" - Internal server error
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
      
      // Use backward-compatible error message
      return res.status(401).json({ error: 'Token no proporcionado' });
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
      
      // Fetch user data using our model adapter (will be from either Firebase or PostgreSQL)
      try {
        const userData = await userModel.getUserById(decodedToken.uid);
        
        if (userData) {
          // Add user data to the request object, including role
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
            message: 'User authenticated but no user data found'
          });
        }
      } catch (userDataError) {
        // Log the error but don't fail the request if we can't fetch user data
        // The token is still valid, we just don't have extra user info
        logAuthError('Error fetching user data', {
          userId: decodedToken.uid,
          error: userDataError.message
        });
      }
      
      next();
    } catch (error) {
      // Handle specific Firebase auth errors
      let errorMessage = 'Token inválido'; // Use backward-compatible error message
      let statusCode = 401;
      
      // Check for serious internal errors first
      if (error.name === 'FirebaseError' && error.code === 'internal-error') {
        statusCode = 500;
        errorMessage = 'Internal server error';
      }
      // Check specific auth errors
      else if (error.code === 'auth/id-token-expired') {
        errorMessage = 'Token expirado';
      } else if (error.code === 'auth/id-token-revoked') {
        errorMessage = 'Token revocado';
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = 'Cuenta de usuario deshabilitada';
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
    
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}; 