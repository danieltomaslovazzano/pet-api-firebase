/**
 * Auth System Integration Tests
 * 
 * These tests verify that the entire authentication and authorization
 * system works correctly together, from token verification to permission checking.
 */

const request = require('supertest');
const express = require('express');
const { requireAuth, requireRole, protectResource } = require('../../middlewares');

// Create mock resources and controllers for testing
const mockPet = { id: 'pet123', name: 'Fluffy', userId: 'user123' };
const mockUser = { uid: 'user123', role: 'user' };
const mockAdmin = { uid: 'admin123', role: 'admin' };

// Mock models
jest.mock('../../models/petModel', () => ({
  getPetById: (id, callback) => {
    if (id === 'pet123') {
      callback(null, mockPet);
    } else {
      callback({ message: 'Pet not found' });
    }
  }
}));

// Mock Firebase admin
jest.mock('../../config/firebase', () => ({
  auth: () => ({
    verifyIdToken: (token) => {
      if (token === 'user-token') {
        return Promise.resolve(mockUser);
      } else if (token === 'admin-token') {
        return Promise.resolve(mockAdmin);
      } else {
        return Promise.reject(new Error('Invalid token'));
      }
    }
  }),
  firestore: () => ({
    collection: () => ({
      doc: () => ({
        get: () => Promise.resolve({
          exists: true,
          data: () => ({ role: 'user', organizationIds: ['org1'] })
        })
      })
    })
  })
}));

describe('Auth System Integration', () => {
  let app;
  
  beforeEach(() => {
    // Create a fresh Express app for each test
    app = express();
    app.use(express.json());
    
    // Set up test routes
    // Public route
    app.get('/api/public', (req, res) => {
      res.status(200).json({ message: 'Public API' });
    });
    
    // Routes with authentication only
    app.get('/api/authenticated', requireAuth, (req, res) => {
      res.status(200).json({ message: 'Authenticated API', user: req.user });
    });
    
    // Routes with role requirements
    app.get('/api/admin-only', ...requireRole('admin'), (req, res) => {
      res.status(200).json({ message: 'Admin API', user: req.user });
    });
    
    // Routes with resource protection
    app.get('/api/pets/:id', ...protectResource('pets', 'update'), (req, res) => {
      res.status(200).json({ 
        message: 'Resource API', 
        pet: req.resourceObj,
        user: req.user 
      });
    });
  });
  
  describe('Authentication', () => {
    test('should allow access to public routes without authentication', async () => {
      const response = await request(app).get('/api/public');
      expect(response.status).toBe(200);
    });
    
    test('should deny access to authenticated routes without token', async () => {
      const response = await request(app).get('/api/authenticated');
      expect(response.status).toBe(401);
    });
    
    test('should allow access to authenticated routes with valid token', async () => {
      const response = await request(app)
        .get('/api/authenticated')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(200);
      expect(response.body.user.uid).toBe('user123');
    });
    
    test('should deny access with invalid token', async () => {
      const response = await request(app)
        .get('/api/authenticated')
        .set('Authorization', 'Bearer invalid-token');
      
      expect(response.status).toBe(401);
    });
  });
  
  describe('Role-based Authorization', () => {
    test('should allow admin access to admin routes', async () => {
      const response = await request(app)
        .get('/api/admin-only')
        .set('Authorization', 'Bearer admin-token');
      
      expect(response.status).toBe(200);
    });
    
    test('should deny regular user access to admin routes', async () => {
      const response = await request(app)
        .get('/api/admin-only')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(403);
    });
  });
  
  describe('Resource Authorization', () => {
    test('should allow owner access to their resource', async () => {
      const response = await request(app)
        .get('/api/pets/pet123')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(200);
      expect(response.body.pet.id).toBe('pet123');
    });
    
    test('should allow admin access to any resource', async () => {
      const response = await request(app)
        .get('/api/pets/pet123')
        .set('Authorization', 'Bearer admin-token');
      
      expect(response.status).toBe(200);
    });
    
    test('should return 404 for non-existent resources', async () => {
      const response = await request(app)
        .get('/api/pets/nonexistent')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(404);
    });
  });
}); 