/**
 * Resource Loaders Middleware Unit Tests
 * 
 * Tests the resource loaders middleware in isolation.
 */

// Mock the logger to avoid console output during tests
jest.mock('../../utils/loggerUtil', () => ({
  logAuthDebug: jest.fn(),
  logAuthError: jest.fn()
}));

// Mock the models
jest.mock('../../models/petModel', () => ({
  getPetById: jest.fn()
}));

jest.mock('../../models/userModel', () => ({
  getUserById: jest.fn()
}));

jest.mock('../../models/organizationModel', () => ({
  getOrganizationById: jest.fn()
}));

jest.mock('../../models/membershipModel', () => ({
  getMembershipById: jest.fn()
}));

jest.mock('../../models/conversationModel', () => ({
  getConversationById: jest.fn()
}));

jest.mock('../../models/messageModel', () => ({
  getMessageById: jest.fn()
}));

// Import the models and resource loaders
const { 
  petModel,
  userModel,
  organizationModel,
  membershipModel,
  conversationModel,
  messageModel
} = require('../../models/adapter');
const resourceLoaders = require('../../middlewares/resourceLoaders');

describe('Resource Loaders Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Setup request, response, and next function
    req = {
      params: {
        id: 'resource123',
        petId: 'pet123',
        userId: 'user123',
        orgId: 'org123',
        membershipId: 'membership123',
        conversationId: 'conversation123',
        messageId: 'message123'
      },
      user: {
        uid: 'user123',
        role: 'user'
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

  describe('loadPetResource', () => {
    test('should load pet resource and call next', async () => {
      // Mock the pet model to return a pet
      const mockPet = { 
        id: 'pet123', 
        name: 'Fluffy',
        userId: 'user123'
      };
      
      petModel.getPetById.mockImplementation((id, callback) => {
        callback(null, mockPet);
      });
      
      // Call the middleware
      resourceLoaders.loadPetResource(req, res, next);
      
      // Assertions
      expect(petModel.getPetById).toHaveBeenCalledWith('resource123', expect.any(Function));
      expect(req.resourceObj).toEqual(mockPet);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    test('should return 404 if pet is not found', async () => {
      // Mock the pet model to return an error
      petModel.getPetById.mockImplementation((id, callback) => {
        callback(new Error('Pet not found'));
      });
      
      // Call the middleware
      resourceLoaders.loadPetResource(req, res, next);
      
      // Assertions
      expect(petModel.getPetById).toHaveBeenCalledWith('resource123', expect.any(Function));
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Pet not found' });
      expect(next).not.toHaveBeenCalled();
    });

    test('should return 500 for other errors', async () => {
      // Mock the pet model to return a different error
      petModel.getPetById.mockImplementation((id, callback) => {
        callback(new Error('Database error'));
      });
      
      // Call the middleware
      resourceLoaders.loadPetResource(req, res, next);
      
      // Assertions
      expect(petModel.getPetById).toHaveBeenCalledWith('resource123', expect.any(Function));
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Error retrieving pet' });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('loadUserResource', () => {
    test('should load user resource and call next', async () => {
      // Mock the user model to return a user
      const mockUser = { 
        id: 'user123', 
        name: 'John Doe',
        email: 'john@example.com'
      };
      
      userModel.getUserById.mockResolvedValue(mockUser);
      
      // Call the middleware
      await resourceLoaders.loadUserResource(req, res, next);
      
      // Assertions
      expect(userModel.getUserById).toHaveBeenCalledWith('resource123');
      expect(req.resourceObj).toEqual(mockUser);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    test('should return 404 if user is not found', async () => {
      // Mock the user model to return null
      userModel.getUserById.mockResolvedValue(null);
      
      // Call the middleware
      await resourceLoaders.loadUserResource(req, res, next);
      
      // Assertions
      expect(userModel.getUserById).toHaveBeenCalledWith('resource123');
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
      expect(next).not.toHaveBeenCalled();
    });

    test('should return 500 for other errors', done => {
      // Mock the user model to throw an error
      const error = new Error('Database error');
      userModel.getUserById.mockRejectedValue(error);
      
      // Override res.status and res.json for this test
      res.status = jest.fn().mockReturnThis();
      res.json = jest.fn(result => {
        // Assertions
        expect(userModel.getUserById).toHaveBeenCalledWith('resource123');
        expect(res.status).toHaveBeenCalledWith(500);
        expect(result).toEqual({ error: 'Error retrieving user' });
        expect(next).not.toHaveBeenCalled();
        done();
      });
      
      // Call the middleware
      resourceLoaders.loadUserResource(req, res, next);
    });
  });

  describe('loadOrganizationResource', () => {
    test('should load organization resource and call next', async () => {
      // Mock the organization model to return an organization
      const mockOrg = { 
        id: 'org123', 
        name: 'Test Organization',
        ownerId: 'user123'
      };
      
      organizationModel.getOrganizationById.mockImplementation((id, callback) => {
        callback(null, mockOrg);
      });
      
      // Call the middleware
      resourceLoaders.loadOrganizationResource(req, res, next);
      
      // Assertions
      expect(organizationModel.getOrganizationById).toHaveBeenCalledWith('resource123', expect.any(Function));
      expect(req.resourceObj).toEqual(mockOrg);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    test('should return 404 if organization is not found', async () => {
      // Mock the organization model to return an error
      organizationModel.getOrganizationById.mockImplementation((id, callback) => {
        callback(new Error('Organization not found'));
      });
      
      // Call the middleware
      resourceLoaders.loadOrganizationResource(req, res, next);
      
      // Assertions
      expect(organizationModel.getOrganizationById).toHaveBeenCalledWith('resource123', expect.any(Function));
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Organization not found' });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('createResourceLoader', () => {
    test('should create a resource loader middleware that works correctly', async () => {
      // Mock load function
      const mockLoadFn = jest.fn((id, callback) => {
        callback(null, { id, name: 'Test Resource' });
      });
      
      // Create a custom resource loader
      const customLoader = resourceLoaders.createResourceLoader('custom', mockLoadFn);
      
      // Call the middleware
      customLoader(req, res, next);
      
      // Assertions
      expect(mockLoadFn).toHaveBeenCalledWith('resource123', expect.any(Function));
      expect(req.resourceObj).toEqual({ id: 'resource123', name: 'Test Resource' });
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    test('should handle missing ID parameter', async () => {
      // Remove ID from request
      req.params = {};
      
      // Create a custom resource loader
      const mockLoadFn = jest.fn();
      const customLoader = resourceLoaders.createResourceLoader('custom', mockLoadFn);
      
      // Call the middleware
      customLoader(req, res, next);
      
      // Assertions
      expect(mockLoadFn).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ 
        error: 'Missing custom ID in request parameters' 
      });
      expect(next).not.toHaveBeenCalled();
    });
  });
}); 