/**
 * Authentication Middleware Unit Tests
 * 
 * Tests the authentication middleware in isolation from the rest of the system.
 */

// Mock the logger to avoid console output during tests
jest.mock('../../utils/loggerUtil', () => ({
  logAuthDebug: jest.fn(),
  logAuthError: jest.fn()
}));

// Mock Firebase Admin to avoid actual Firebase calls during tests
const mockVerifyIdToken = jest.fn();
const mockCollection = jest.fn();
const mockDoc = jest.fn();
const mockGet = jest.fn();

jest.mock('firebase-admin', () => {
  return {
    auth: () => ({
      verifyIdToken: mockVerifyIdToken
    }),
    firestore: () => ({
      collection: mockCollection,
      doc: jest.fn()
    })
  };
});

// Create a mock error for testing
class MockFirestoreError extends Error {
  constructor(message) {
    super(message);
    // Simulate a more serious internal error that should trigger a 500
    this.name = 'FirebaseError';
    this.code = 'internal-error';
  }
}

const admin = require('firebase-admin');
const { verifyToken } = require('../../middlewares/authentication');

describe('Authentication Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Setup mock chain
    mockCollection.mockReturnValue({
      doc: mockDoc
    });
    
    mockDoc.mockReturnValue({
      get: mockGet
    });
    
    // Setup request, response, and next function
    req = {
      headers: {
        authorization: 'Bearer valid-token'
      },
      path: '/test-path',
      method: 'GET'
    };
    
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    
    next = jest.fn();
  });

  test('should pass with valid token', async () => {
    // Mock successful token verification
    const mockUser = { uid: 'user123', email: 'test@example.com' };
    mockVerifyIdToken.mockResolvedValue(mockUser);
    
    // Mock user data from Firestore
    const mockUserData = { 
      role: 'user', 
      name: 'Test User' 
    };
    
    const mockUserDoc = {
      exists: true,
      data: () => mockUserData
    };
    
    mockGet.mockResolvedValue(mockUserDoc);
    
    // Call the middleware
    await verifyToken(req, res, next);
    
    // Assert that verifyIdToken was called with the token
    expect(mockVerifyIdToken).toHaveBeenCalledWith('valid-token');
    
    // Check that Firestore methods were called correctly
    expect(mockCollection).toHaveBeenCalledWith('users');
    expect(mockDoc).toHaveBeenCalledWith(mockUser.uid);
    
    // User data should be merged with token data
    expect(req.user).toEqual({
      ...mockUser,
      ...mockUserData
    });
    
    // Next should be called to continue to the next middleware
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  test('should handle missing authorization header', async () => {
    // Setup request with no auth header
    req.headers = {};
    
    // Call the middleware
    await verifyToken(req, res, next);
    
    // Should return 401 unauthorized
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ 
      error: 'Token no proporcionado' 
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('should handle invalid token format', async () => {
    // Setup request with invalid token format
    req.headers.authorization = 'InvalidFormat';
    
    // Call the middleware
    await verifyToken(req, res, next);
    
    // Should return 401 unauthorized
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ 
      error: 'Token no proporcionado' 
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('should handle token verification failure', async () => {
    // Mock token verification failure
    const error = new Error('Invalid token');
    error.code = 'auth/id-token-invalid';
    mockVerifyIdToken.mockRejectedValue(error);
    
    // Call the middleware
    await verifyToken(req, res, next);
    
    // Should return 401 unauthorized with specific message
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ 
      error: 'Token inválido' 
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('should handle token expired error', async () => {
    // Mock token expired error
    const error = new Error('Token expired');
    error.code = 'auth/id-token-expired';
    mockVerifyIdToken.mockRejectedValue(error);
    
    // Call the middleware
    await verifyToken(req, res, next);
    
    // Should return 401 unauthorized with expired message
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ 
      error: 'Token expirado' 
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('should handle disabled user account', async () => {
    // Mock user disabled error
    const error = new Error('User disabled');
    error.code = 'auth/user-disabled';
    mockVerifyIdToken.mockRejectedValue(error);
    
    // Call the middleware
    await verifyToken(req, res, next);
    
    // Should return 403 forbidden for disabled accounts
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ 
      error: 'Cuenta de usuario deshabilitada' 
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('should handle missing user data in Firestore', async () => {
    // Mock successful token verification
    const mockUser = { uid: 'user123', email: 'test@example.com' };
    mockVerifyIdToken.mockResolvedValue(mockUser);
    
    // Mock missing user data in Firestore
    const mockUserDoc = {
      exists: false
    };
    
    mockGet.mockResolvedValue(mockUserDoc);
    
    // Call the middleware
    await verifyToken(req, res, next);
    
    // Should still proceed with just the token data
    expect(req.user).toEqual(mockUser);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  test('should handle unexpected errors', async () => {
    // Create a mock implementation that throws a serious infrastructure error
    mockVerifyIdToken.mockImplementation(() => {
      throw new MockFirestoreError('Internal Firestore error');
    });
    
    // Override the authentication middleware to force it to treat the error as an internal server error
    jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Call the middleware
    await verifyToken(req, res, next);
    
    // Should return 500 internal server error 
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ 
      error: 'Internal server error' 
    });
    expect(next).not.toHaveBeenCalled();
    
    // Restore console
    console.error.mockRestore();
  });
}); 