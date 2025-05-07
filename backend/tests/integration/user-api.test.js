/**
 * User API Integration Tests
 * 
 * This test suite verifies that the user API endpoints work with the PostgreSQL implementation.
 */

// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

const request = require('supertest');
const app = require('../../index');
const { validUser, generateUsers } = require('../fixtures/userFixtures');
const { cleanupPostgresDb } = require('../helpers/testDbSetup');
const { userModel } = require('../../models/adapter');

// Mock the authentication middleware
jest.mock('../../middlewares/authMiddleware', () => ({
  requireAuth: (req, res, next) => {
    req.user = { id: 'test-user-id', role: 'admin' };
    next();
  },
  requireAdmin: (req, res, next) => {
    req.user = { id: 'test-user-id', role: 'admin' };
    next();
  }
}));

// Helper function to convert callback-style functions to Promises
const promisify = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

describe('User API Integration Tests', () => {
  // Clean the database before and after tests
  beforeAll(async () => {
    await cleanupPostgresDb();
  });

  afterAll(async () => {
    await cleanupPostgresDb();
  });

  describe('GET /api/users', () => {
    beforeEach(async () => {
      // Clean up before each test
      await cleanupPostgresDb();
      
      // Create test users
      const users = generateUsers(5);
      for (const user of users) {
        await promisify(userModel.createUser, user);
      }
    });

    it('should retrieve all users', async () => {
      // Act
      const response = await request(app).get('/api/users');
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(5);
    });

    it('should filter users by role', async () => {
      // Act
      const response = await request(app).get('/api/users?role=admin');
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      response.body.forEach(user => {
        expect(user.role).toBe('admin');
      });
    });

    it('should filter users by status', async () => {
      // Act
      const response = await request(app).get('/api/users?status=active');
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(Array.isArray(response.body)).toBe(true);
      response.body.forEach(user => {
        expect(user.status).toBe('active');
      });
    });
  });

  describe('GET /api/users/:id', () => {
    it('should retrieve a user by ID', async () => {
      // Arrange
      const userData = validUser();
      await promisify(userModel.createUser, userData);
      
      // Act
      const response = await request(app).get(`/api/users/${userData.id}`);
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.id).toBe(userData.id);
      expect(response.body.email).toBe(userData.email);
    });

    it('should return 404 for non-existent user ID', async () => {
      // Act
      const response = await request(app).get('/api/users/non-existent-id');
      
      // Assert
      expect(response.status).toBe(404);
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      // Arrange
      const userData = {
        id: 'new-test-user-id',
        email: 'newuser@example.com',
        name: 'New Test User',
        role: 'user'
      };
      
      // Act
      const response = await request(app)
        .post('/api/users')
        .send(userData);
      
      // Assert
      expect(response.status).toBe(201);
      expect(response.body).toBeDefined();
      expect(response.body.id).toBe(userData.id);
      expect(response.body.email).toBe(userData.email);
      
      // Verify in database
      const createdUser = await userModel.getUserById(userData.id);
      expect(createdUser).toBeDefined();
      expect(createdUser.email).toBe(userData.email);
    });

    it('should reject invalid user data', async () => {
      // Arrange
      const invalidUserData = {
        // Missing required fields
        name: 'Invalid User'
      };
      
      // Act
      const response = await request(app)
        .post('/api/users')
        .send(invalidUserData);
      
      // Assert
      expect(response.status).toBe(400);
    });
  });

  describe('PUT /api/users/:id', () => {
    it('should update an existing user', async () => {
      // Arrange
      const userData = validUser();
      await promisify(userModel.createUser, userData);
      
      const updateData = {
        name: 'Updated User Name',
        phone: '123-456-7890'
      };
      
      // Act
      const response = await request(app)
        .put(`/api/users/${userData.id}`)
        .send(updateData);
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.id).toBe(userData.id);
      expect(response.body.name).toBe(updateData.name);
      expect(response.body.phone).toBe(updateData.phone);
      
      // Verify in database
      const updatedUser = await userModel.getUserById(userData.id);
      expect(updatedUser.name).toBe(updateData.name);
    });

    it('should return 404 for non-existent user ID', async () => {
      // Act
      const response = await request(app)
        .put('/api/users/non-existent-id')
        .send({ name: 'Updated Name' });
      
      // Assert
      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/users/:id', () => {
    it('should delete an existing user', async () => {
      // Arrange
      const userData = validUser();
      await promisify(userModel.createUser, userData);
      
      // Act
      const response = await request(app).delete(`/api/users/${userData.id}`);
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.message).toContain('deleted successfully');
      
      // Verify in database
      const deletedUser = await userModel.getUserById(userData.id);
      expect(deletedUser).toBeNull();
    });

    it('should return 404 for non-existent user ID', async () => {
      // Act
      const response = await request(app).delete('/api/users/non-existent-id');
      
      // Assert
      expect(response.status).toBe(404);
    });
  });

  describe('POST /api/users/:id/block', () => {
    it('should block another user', async () => {
      // Arrange
      const userData = validUser();
      const targetUserData = validUser();
      await promisify(userModel.createUser, userData);
      await promisify(userModel.createUser, targetUserData);
      
      // Act
      const response = await request(app).post(`/api/users/${userData.id}/block`).send({
        targetUserId: targetUserData.id
      });
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.message).toContain('blocked');
      
      // Verify in database
      const updatedUser = await userModel.getUserById(userData.id);
      expect(updatedUser.blockedUsers).toContain(targetUserData.id);
    });
  });

  describe('POST /api/users/:id/unblock', () => {
    it('should unblock another user', async () => {
      // Arrange
      const userData = validUser();
      const targetUserData = validUser();
      await promisify(userModel.createUser, userData);
      await promisify(userModel.createUser, targetUserData);
      await promisify(userModel.blockUser, userData.id, targetUserData.id);
      
      // Act
      const response = await request(app).post(`/api/users/${userData.id}/unblock`).send({
        targetUserId: targetUserData.id
      });
      
      // Assert
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.message).toContain('unblocked');
      
      // Verify in database
      const updatedUser = await userModel.getUserById(userData.id);
      expect(updatedUser.blockedUsers).not.toContain(targetUserData.id);
    });
  });
}); 