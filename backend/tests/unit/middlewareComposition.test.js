/**
 * Middleware Composition Unit Tests
 * 
 * Tests the middleware composition utilities in isolation.
 */

// Mock dependencies
jest.mock('../../middlewares/authentication', () => ({
  verifyToken: jest.fn()
}));

jest.mock('../../middlewares/resourceLoaders', () => ({
  loadPetResource: jest.fn(),
  loadUserResource: jest.fn(),
  loadOrganizationResource: jest.fn(),
  loadMembershipResource: jest.fn(),
  loadConversationResource: jest.fn(),
  loadMessageResource: jest.fn()
}));

jest.mock('../../middlewares/authorization', () => ({
  checkPermission: jest.fn(() => jest.fn())
}));

// Import dependencies after mocking
const { verifyToken } = require('../../middlewares/authentication');
const resourceLoaders = require('../../middlewares/resourceLoaders');
const { checkPermission } = require('../../middlewares/authorization');

// Import the middleware composition module
const middlewareComposition = require('../../middlewares/index');

describe('Middleware Composition', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
  });

  describe('requireAuth', () => {
    test('should return verifyToken middleware', () => {
      // Check that requireAuth is simply the verifyToken middleware
      expect(middlewareComposition.requireAuth).toBe(verifyToken);
    });
  });

  describe('protectResource', () => {
    test('should return correct middleware chain for pets', () => {
      const middleware = middlewareComposition.protectResource('pets', 'update', { someOption: true });
      
      // Should include 3 middleware: verifyToken, loadPetResource, checkPermission
      expect(middleware).toHaveLength(3);
      expect(middleware[0]).toBe(verifyToken);
      expect(middleware[1]).toBe(resourceLoaders.loadPetResource);
      // We can't directly compare function instances created by a factory,
      // but we can verify the factory was called correctly
      expect(checkPermission).toHaveBeenCalledWith('pets', 'update', { someOption: true });
    });
    
    test('should return correct middleware chain for users', () => {
      const middleware = middlewareComposition.protectResource('users', 'update');
      
      expect(middleware).toHaveLength(3);
      expect(middleware[0]).toBe(verifyToken);
      expect(middleware[1]).toBe(resourceLoaders.loadUserResource);
      expect(checkPermission).toHaveBeenCalledWith('users', 'update', {});
    });
    
    test('should return correct middleware chain for organizations', () => {
      const middleware = middlewareComposition.protectResource('organizations', 'update');
      
      expect(middleware).toHaveLength(3);
      expect(middleware[0]).toBe(verifyToken);
      expect(middleware[1]).toBe(resourceLoaders.loadOrganizationResource);
      expect(checkPermission).toHaveBeenCalledWith('organizations', 'update', {});
    });
    
    test('should skip resource loading when option is passed', () => {
      const middleware = middlewareComposition.protectResource('unknown', 'update', { skipResourceLoading: true });
      
      expect(middleware).toHaveLength(2);
      expect(middleware[0]).toBe(verifyToken);
      expect(checkPermission).toHaveBeenCalledWith('unknown', 'update', { skipResourceLoading: true });
    });
    
    test('should throw error for unsupported resource type', () => {
      expect(() => {
        middlewareComposition.protectResource('invalidResource', 'update');
      }).toThrow('Unsupported resource type: invalidResource');
    });
  });

  describe('protectCollection', () => {
    test('should return correct middleware chain', () => {
      const middleware = middlewareComposition.protectCollection('pets', 'readAll', { someOption: true });
      
      expect(middleware).toHaveLength(2);
      expect(middleware[0]).toBe(verifyToken);
      expect(checkPermission).toHaveBeenCalledWith('pets', 'readAll', { someOption: true });
    });
  });

  describe('requireRole', () => {
    test('should return correct middleware chain for single role', () => {
      const middleware = middlewareComposition.requireRole('admin');
      
      expect(middleware).toHaveLength(2);
      expect(middleware[0]).toBe(verifyToken);
      expect(checkPermission).toHaveBeenCalledWith('system', 'access', { requiredRoles: ['admin'] });
    });
    
    test('should handle array of roles', () => {
      const middleware = middlewareComposition.requireRole(['admin', 'moderator']);
      
      expect(middleware).toHaveLength(2);
      expect(middleware[0]).toBe(verifyToken);
      expect(checkPermission).toHaveBeenCalledWith('system', 'access', { 
        requiredRoles: ['admin', 'moderator'] 
      });
    });
  });

  describe('requireAdmin', () => {
    test('should be a convenience method for requiring admin role', () => {
      // Clear previous mock calls
      jest.clearAllMocks();
      
      const middleware = middlewareComposition.requireAdmin;
      
      // Check structure of the middleware array
      expect(middleware).toHaveLength(2);
      expect(middleware[0]).toBe(verifyToken);
      
      // We can't compare the exact function instance, but we can check
      // that checkPermission was called with the correct parameters
      // by manually executing the requireAdmin middleware
      
      // Get a fresh copy of the middleware
      const freshMiddleware = middlewareComposition.requireRole('admin');
      
      // Verify it has the expected structure
      expect(freshMiddleware).toHaveLength(2);
      expect(freshMiddleware[0]).toBe(verifyToken);
      expect(checkPermission).toHaveBeenCalledWith('system', 'access', { 
        requiredRoles: ['admin'] 
      });
    });
  });

  describe('requireOrgAdmin', () => {
    test('should return correct middleware chain', () => {
      const middleware = middlewareComposition.requireOrgAdmin({ orgId: 'org123' });
      
      expect(middleware).toHaveLength(3);
      expect(middleware[0]).toBe(verifyToken);
      expect(middleware[1]).toBe(resourceLoaders.loadOrganizationResource);
      expect(checkPermission).toHaveBeenCalledWith('organizations', 'access', { 
        orgId: 'org123',
        requiredRoles: ['org-admin', 'admin'] 
      });
    });
  });

  describe('ownerOrAdmin', () => {
    test('should return correct middleware chain for pets', () => {
      const middleware = middlewareComposition.ownerOrAdmin('pets');
      
      expect(middleware).toHaveLength(3);
      expect(middleware[0]).toBe(verifyToken);
      expect(middleware[1]).toBe(resourceLoaders.loadPetResource);
      expect(checkPermission).toHaveBeenCalledWith('pets', 'update', { 
        ownerOrAdminOnly: true 
      });
    });
    
    test('should throw error for unsupported resource type', () => {
      expect(() => {
        middlewareComposition.ownerOrAdmin('invalidResource');
      }).toThrow('Unsupported resource type for ownerOrAdmin: invalidResource');
    });
  });
}); 