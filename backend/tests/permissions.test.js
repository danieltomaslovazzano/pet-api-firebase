/**
 * Permission System Tests
 * 
 * Tests for the permission service and authorization middleware
 */

const { hasPermission, hasRole } = require('../services/permissionService');
const permissionRules = require('../config/permissionRules');

// Mock Firebase admin
jest.mock('../config/firebase', () => {
  return {
    firestore: () => ({
      collection: () => ({
        doc: () => ({
          get: () => Promise.resolve({
            exists: true,
            data: () => ({
              organizationIds: ['org1', 'org2']
            })
          })
        })
      })
    })
  };
});

describe('Permission Service', () => {
  describe('hasRole function', () => {
    test('should return true if user has a matching role', () => {
      const user = { uid: 'user123', role: 'admin' };
      const allowedRoles = ['admin', 'org-admin'];
      
      expect(hasRole(user, allowedRoles)).toBe(true);
    });
    
    test('should return false if user does not have a matching role', () => {
      const user = { uid: 'user123', role: 'user' };
      const allowedRoles = ['admin', 'org-admin'];
      
      expect(hasRole(user, allowedRoles)).toBe(false);
    });
    
    test('should default to "user" role if not specified', () => {
      const user = { uid: 'user123' }; // No role specified
      const allowedRoles = ['user'];
      
      expect(hasRole(user, allowedRoles)).toBe(true);
    });
    
    test('should return true if "*" is in allowed roles', () => {
      const user = { uid: 'user123', role: 'anything' };
      const allowedRoles = ['*'];
      
      expect(hasRole(user, allowedRoles)).toBe(true);
    });
  });
  
  describe('hasPermission function', () => {
    test('should grant access if user has a direct role', async () => {
      const user = { uid: 'user123', role: 'admin' };
      const access = await hasPermission(user, 'pets', 'update', {});
      
      expect(access).toBe(true);
    });
    
    test('should grant access if user is the owner', async () => {
      const user = { uid: 'user123', role: 'user' };
      const resource = 'pets';
      const action = 'update';
      const context = {
        resourceObj: {
          id: 'pet123',
          userId: 'user123' // Same as the user ID
        }
      };
      
      const result = await hasPermission(user, resource, action, context);
      expect(result).toBe(true);
    });
    
    test('should deny access if not owner and no matching role', async () => {
      const user = { uid: 'user123', role: 'user' };
      const resource = 'pets';
      const action = 'update';
      const context = {
        resourceObj: {
          id: 'pet123',
          userId: 'differentUser' // Different from the user ID
        }
      };
      
      const result = await hasPermission(user, resource, action, context);
      expect(result).toBe(false);
    });
    
    test('should check for same organization', async () => {
      // This relies on our mock implementation returning the same org IDs for both users
      const user = { uid: 'user123', role: 'org-admin' };
      const resource = 'pets';
      const action = 'delete';
      const context = {
        resourceObj: {
          id: 'pet123',
          userId: 'differentUser' // Different from the user ID
        }
      };
      
      const result = await hasPermission(user, resource, action, context);
      expect(result).toBe(true);
    });
  });
}); 