/**
 * Authorization Tests
 * 
 * Tests the authorization middleware and permission service
 */

// Mock the logger to avoid console output during tests
jest.mock('../../utils/loggerUtil', () => ({
  logAuthDebug: jest.fn(),
  logAuthError: jest.fn()
}));

// Mock the Firebase admin SDK
jest.mock('../../config/firebase', () => {
  const firestoreMock = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    get: jest.fn()
  };
  
  return {
    firestore: () => firestoreMock
  };
});

// Create a ResourceNotFoundError to test with
class ResourceNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ResourceNotFoundError';
  }
}

// Import the actual modules before mocking
const { checkPermission } = require('../../middlewares/authorization');

// Mock the permission service
jest.mock('../../services/permissionService', () => ({
  hasPermission: jest.fn(),
  hasRole: jest.fn(),
  _testing: {
    evaluateCondition: jest.fn(),
    meetsConditions: jest.fn(),
    checkSameOrganization: jest.fn(),
    checkIsOrgAdmin: jest.fn(),
    checkIsOrgStaff: jest.fn(),
    checkIsOrgMember: jest.fn(),
    checkIsOrgOwner: jest.fn(),
    getUserOrganizations: jest.fn()
  }
}));

// Import the mocked permissionService after mocking it
const permissionService = require('../../services/permissionService');

// Mock the permission rules
jest.mock('../../config/permissionRules', () => ({
  pets: {
    create: {
      roles: ['user', 'admin'],
      conditions: []
    },
    read: {
      roles: ['*'],
      conditions: []
    },
    update: {
      roles: ['admin'],
      conditions: [
        { type: 'isOwner' }
      ]
    },
    delete: {
      roles: ['admin'],
      conditions: [
        { type: 'isOwner' },
        { type: 'isSameOrganization', requiredRole: 'org-admin' }
      ]
    }
  },
  organizations: {
    update: {
      roles: ['admin'],
      conditions: [
        { type: 'isOrgAdmin' }
      ]
    }
  },
  users: {
    read: {
      roles: ['*'],
      conditions: []
    },
    update: {
      roles: ['admin'],
      conditions: [
        { type: 'isSelf' }
      ]
    }
  },
  system: {
    access: {
      roles: ['*'],
      conditions: []
    }
  }
}));

// Create a ValidationError to test with
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

describe('Authorization Middleware', () => {
  let req, res, next;
  
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Setup request, response, and next function
    req = {
      user: {
        uid: 'user123',
        email: 'test@example.com',
        role: 'user'
      },
      params: {
        id: 'resource123'
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

  test('should call next() for allowed resource/action', async () => {
    // Mock hasPermission to return true
    permissionService.hasPermission.mockResolvedValue(true);
    
    // Create middleware and call it
    const middleware = checkPermission('pets', 'read');
    await middleware(req, res, next);
    
    // Check that the permission was checked
    expect(permissionService.hasPermission).toHaveBeenCalledWith(
      req.user, 
      'pets', 
      'read', 
      expect.objectContaining({ params: req.params })
    );
    
    // Check that next() was called
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
  
  test('should return 401 if user is not authenticated', async () => {
    // Create a request without a user
    req.user = null;
    
    // Create middleware and call it
    const middleware = checkPermission('pets', 'update');
    await middleware(req, res, next);
    
    // Check the response
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      error: 'Authentication required'
    }));
    expect(next).not.toHaveBeenCalled();
  });
  
  test('should return 403 if permission is denied', async () => {
    // Mock hasPermission to return false
    permissionService.hasPermission.mockResolvedValue(false);
    
    // Create middleware and call it
    const middleware = checkPermission('pets', 'delete');
    await middleware(req, res, next);
    
    // Check the response
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      error: 'Permission denied'
    }));
    expect(next).not.toHaveBeenCalled();
  });
  
  test('should return 500 if there is an unexpected error', async () => {
    // Mock hasPermission to throw an error
    const error = new Error('Unexpected error');
    permissionService.hasPermission.mockRejectedValue(error);
    
    // Create middleware and call it
    const middleware = checkPermission('pets', 'update');
    await middleware(req, res, next);
    
    // Check the response (assuming the middleware properly handles errors)
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      error: 'Error checking permissions'
    }));
    expect(next).not.toHaveBeenCalled();
  });
  
  test('should return 400 if there is a validation error', async () => {
    // Mock hasPermission to throw a validation error
    const validationError = new ValidationError('Validation error');
    permissionService.hasPermission.mockRejectedValue(validationError);
    
    // Create middleware and call it
    const middleware = checkPermission('pets', 'update');
    await middleware(req, res, next);
    
    // Check the response
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      error: 'Invalid permission request format'
    }));
    expect(next).not.toHaveBeenCalled();
  });
  
  test('should return 404 if the resource is not found', async () => {
    // Mock hasPermission to throw a resource not found error
    const resourceError = new ResourceNotFoundError('Resource not found');
    permissionService.hasPermission.mockRejectedValue(resourceError);
    
    // Create middleware and call it
    const middleware = checkPermission('pets', 'update');
    await middleware(req, res, next);
    
    // Check the response
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: 'The requested pets could not be found'
    });
    expect(next).not.toHaveBeenCalled();
  });
  
  test('should throw an error if resource or action is not provided', () => {
    // Expect an error to be thrown
    expect(() => checkPermission()).toThrow();
    expect(() => checkPermission('pets')).toThrow();
  });
}); 