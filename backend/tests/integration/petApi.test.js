/**
 * Pet API Integration Tests
 * 
 * This test suite focuses on testing the Pet API endpoints.
 */

// Ensure test environment
process.env.NODE_ENV = 'test';
// Force PostgreSQL for these tests
process.env.USE_POSTGRES = 'true';

const request = require('supertest');
const app = require('../../app');
const { validUser, validPet } = require('../fixtures/userFixtures');
const { cleanupPostgresDb, testDataStore } = require('../helpers/testDbSetup');
const { generateAuthToken } = require('../helpers/authHelpers');

// Clean the test data store before tests
beforeEach(async () => {
  testDataStore.users = [];
  testDataStore.pets = [];
});

describe('Pet API Integration Tests', () => {
  let authToken;
  let testUser;
  let testPet;

  beforeEach(async () => {
    // Create test user and get auth token
    testUser = validUser();
    testDataStore.users.push(testUser);
    authToken = generateAuthToken(testUser);

    // Create test pet
    testPet = validPet(testUser.id);
    testDataStore.pets.push(testPet);
  });

  describe('POST /api/pets', () => {
    it('should create a new pet', async () => {
      const newPet = validPet(testUser.id, {
        name: 'New Test Pet',
        species: 'dog',
        breed: 'Golden Retriever'
      });

      const response = await request(app)
        .post('/api/pets')
        .set('Authorization', `Bearer ${authToken}`)
        .send(newPet);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newPet.name);
      expect(response.body.species).toBe(newPet.species);
      expect(response.body.breed).toBe(newPet.breed);
    });

    it('should validate required fields', async () => {
      const invalidPet = {
        name: '', // Empty name
        species: 'invalid-species'
      };

      const response = await request(app)
        .post('/api/pets')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidPet);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/pets/:id', () => {
    it('should get pet by ID', async () => {
      const response = await request(app)
        .get(`/api/pets/${testPet.id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(testPet.id);
      expect(response.body.name).toBe(testPet.name);
    });

    it('should return 404 for non-existent pet', async () => {
      const response = await request(app)
        .get('/api/pets/non-existent-id')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(404);
    });
  });

  describe('PUT /api/pets/:id', () => {
    it('should update pet details', async () => {
      const updateData = {
        name: 'Updated Pet Name',
        age: 5,
        breed: 'Updated Breed'
      };

      const response = await request(app)
        .put(`/api/pets/${testPet.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(updateData.name);
      expect(response.body.age).toBe(updateData.age);
      expect(response.body.breed).toBe(updateData.breed);
    });

    it('should prevent unauthorized updates', async () => {
      const otherUser = validUser();
      const otherUserToken = generateAuthToken(otherUser);

      const response = await request(app)
        .put(`/api/pets/${testPet.id}`)
        .set('Authorization', `Bearer ${otherUserToken}`)
        .send({ name: 'Unauthorized Update' });

      expect(response.status).toBe(403);
    });
  });

  describe('DELETE /api/pets/:id', () => {
    it('should delete pet', async () => {
      const response = await request(app)
        .delete(`/api/pets/${testPet.id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toContain('deleted successfully');

      // Verify pet is deleted
      const getResponse = await request(app)
        .get(`/api/pets/${testPet.id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(getResponse.status).toBe(404);
    });

    it('should prevent unauthorized deletion', async () => {
      const otherUser = validUser();
      const otherUserToken = generateAuthToken(otherUser);

      const response = await request(app)
        .delete(`/api/pets/${testPet.id}`)
        .set('Authorization', `Bearer ${otherUserToken}`);

      expect(response.status).toBe(403);
    });
  });

  describe('GET /api/pets', () => {
    it('should get all pets for user', async () => {
      // Create additional pets
      const pet2 = validPet(testUser.id, { name: 'Pet 2' });
      const pet3 = validPet(testUser.id, { name: 'Pet 3' });
      testDataStore.pets.push(pet2, pet3);

      const response = await request(app)
        .get('/api/pets')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(3);
    });

    it('should support pagination', async () => {
      // Create multiple pets
      const pets = Array(15).fill().map((_, i) => 
        validPet(testUser.id, { name: `Pet ${i + 1}` })
      );
      testDataStore.pets.push(...pets);

      const response = await request(app)
        .get('/api/pets?page=1&limit=10')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(10);
    });

    it('should support filtering by species', async () => {
      const dogPet = validPet(testUser.id, { species: 'dog' });
      const catPet = validPet(testUser.id, { species: 'cat' });
      testDataStore.pets.push(dogPet, catPet);

      const response = await request(app)
        .get('/api/pets?species=dog')
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.every(pet => pet.species === 'dog')).toBe(true);
    });
  });

  describe('POST /api/pets/:id/images', () => {
    it('should upload pet image', async () => {
      const imageData = {
        url: 'https://example.com/pet-image.jpg',
        type: 'profile'
      };

      const response = await request(app)
        .post(`/api/pets/${testPet.id}/images`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(imageData);

      expect(response.status).toBe(200);
      expect(response.body.images).toContainEqual(expect.objectContaining(imageData));
    });

    it('should validate image data', async () => {
      const invalidImageData = {
        url: 'invalid-url',
        type: 'invalid-type'
      };

      const response = await request(app)
        .post(`/api/pets/${testPet.id}/images`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidImageData);

      expect(response.status).toBe(400);
    });
  });
}); 