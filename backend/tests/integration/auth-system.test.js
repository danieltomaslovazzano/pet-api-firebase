/**
 * Auth System Integration Tests
 * 
 * These tests verify that the entire authentication and authorization
 * system works correctly together, from token verification to permission checking.
 */

const request = require('supertest');
const express = require('express');
const { requireAuth, requireRole, protectResource } = require('../../middlewares');
const { prisma } = require('../../config/prisma');

// Create mock resources and controllers for testing
const mockPet = { id: 'pet123', name: 'Fluffy', userId: 'user123' };
const mockUser = { id: 'user123', role: 'USER' };
const mockAdmin = { id: 'admin123', role: 'ADMIN' };

// Mock Prisma client
jest.mock('../../config/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      findFirst: jest.fn()
    },
    pet: {
      findUnique: jest.fn()
    },
    organization: {
      findUnique: jest.fn()
    },
    membership: {
      findFirst: jest.fn()
    }
  }
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
    app.get('/api/admin-only', ...requireRole('ADMIN'), (req, res) => {
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

    // Reset mocks
    jest.clearAllMocks();
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
      // Mock Prisma to return a user
      prisma.user.findUnique.mockResolvedValue(mockUser);

      const response = await request(app)
        .get('/api/authenticated')
        .set('Authorization', 'Bearer valid-token');
      
      expect(response.status).toBe(200);
      expect(response.body.user.id).toBe('user123');
    });
    
    test('should deny access with invalid token', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .get('/api/authenticated')
        .set('Authorization', 'Bearer invalid-token');
      
      expect(response.status).toBe(401);
    });
  });
  
  describe('Role-based Authorization', () => {
    test('should allow admin access to admin routes', async () => {
      prisma.user.findUnique.mockResolvedValue(mockAdmin);

      const response = await request(app)
        .get('/api/admin-only')
        .set('Authorization', 'Bearer admin-token');
      
      expect(response.status).toBe(200);
    });
    
    test('should deny regular user access to admin routes', async () => {
      prisma.user.findUnique.mockResolvedValue(mockUser);

      const response = await request(app)
        .get('/api/admin-only')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(403);
    });
  });
  
  describe('Resource Authorization', () => {
    test('should allow owner access to their resource', async () => {
      prisma.user.findUnique.mockResolvedValue(mockUser);
      prisma.pet.findUnique.mockResolvedValue(mockPet);

      const response = await request(app)
        .get('/api/pets/pet123')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(200);
      expect(response.body.pet.id).toBe('pet123');
    });
    
    test('should allow admin access to any resource', async () => {
      prisma.user.findUnique.mockResolvedValue(mockAdmin);
      prisma.pet.findUnique.mockResolvedValue(mockPet);

      const response = await request(app)
        .get('/api/pets/pet123')
        .set('Authorization', 'Bearer admin-token');
      
      expect(response.status).toBe(200);
    });
    
    test('should return 404 for non-existent resources', async () => {
      prisma.user.findUnique.mockResolvedValue(mockUser);
      prisma.pet.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .get('/api/pets/nonexistent')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(404);
    });
  });

  describe('Organization-based Authorization', () => {
    test('should allow organization member access to organization resources', async () => {
      const mockOrg = { id: 'org123', name: 'Test Org' };
      const mockMembership = { 
        id: 'mem123',
        userId: 'user123',
        organizationId: 'org123',
        role: 'MEMBER'
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);
      prisma.organization.findUnique.mockResolvedValue(mockOrg);
      prisma.membership.findFirst.mockResolvedValue(mockMembership);

      const response = await request(app)
        .get('/api/organizations/org123')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(200);
    });

    test('should deny access to non-members', async () => {
      const mockOrg = { id: 'org123', name: 'Test Org' };

      prisma.user.findUnique.mockResolvedValue(mockUser);
      prisma.organization.findUnique.mockResolvedValue(mockOrg);
      prisma.membership.findFirst.mockResolvedValue(null);

      const response = await request(app)
        .get('/api/organizations/org123')
        .set('Authorization', 'Bearer user-token');
      
      expect(response.status).toBe(403);
    });
  });
}); 