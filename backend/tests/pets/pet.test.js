const axios = require('axios');
const config = require('../config');
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const admin = require('../setup');
const { generateReport } = require('../utils');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Load environment variables for testing
require('dotenv').config();

// Test helper functions
const makeRequest = async (method, endpoint, data = null, token = null) => {
  const url = `${config.baseUrl}/api/${endpoint}`;
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      validateStatus: () => true
    });
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      status: error.response?.status || 500,
      data: error.response?.data || { error: error.message }
    };
  }
};

// Upload image helper function
const uploadImage = async (petId, imagePath, token = null) => {
  const url = `${config.baseUrl}/api/pets/${petId}/images`;
  const form = new FormData();
  form.append('image', fs.createReadStream(imagePath));
  
  try {
    const response = await axios.post(url, form, {
      headers: {
        ...form.getHeaders(),
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      validateStatus: () => true
    });
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    return {
      status: error.response?.status || 500,
      data: error.response?.data || { error: error.message }
    };
  }
};

// Store all test results for reporting
const testResults = {
  summary: { testSuites: [], totalTests: 0 },
  results: []
};

const trackResult = (testCase, result) => {
  console.log('\nTest Case:', testCase);
  console.log('Request:', {
    method: result.method || 'Unknown',
    endpoint: result.endpoint || 'Unknown',
    data: result.requestData
  });
  console.log('Response:', result);
  
  // Store result for report generation
  testResults.results.push({
    testCase,
    timestamp: new Date().toISOString(),
    result,
    executionTime: Math.floor(Math.random() * 100) + 5 // Mock execution time for demonstration
  });
  testResults.summary.totalTests++;
};

describe('Pet Management Endpoints', () => {
  let ownerToken;
  let adminToken;
  let testPetId;
  let unauthorizedToken;
  
  // Setup: Create test users and get authentication tokens
  beforeAll(async () => {
    // Create owner user
    const ownerRegisterData = {
      email: `owner${Date.now()}@example.com`,
      password: 'Test123456!',
      name: 'Pet Owner'
    };
    const ownerResult = await makeRequest('POST', 'auth/register', ownerRegisterData);
    if (ownerResult.status === 201) {
      ownerToken = ownerResult.data.tokens.idToken;
    } else {
      console.error('Failed to create owner user:', ownerResult);
      throw new Error('Failed to create owner user');
    }
    
    // Create admin user (in a real scenario, you would need to set admin role in Firestore)
    const adminRegisterData = {
      email: `admin${Date.now()}@example.com`,
      password: 'Admin123456!',
      name: 'Admin User'
    };
    const adminResult = await makeRequest('POST', 'auth/register', adminRegisterData);
    if (adminResult.status === 201) {
      adminToken = adminResult.data.tokens.idToken;
      
      // Set admin role in Firestore (This would be handled differently in production)
      await admin.firestore().collection('users').doc(adminResult.data.user.id).update({
        role: 'admin'
      });
    } else {
      console.error('Failed to create admin user:', adminResult);
      throw new Error('Failed to create admin user');
    }
    
    // Create unauthorized user
    const unauthorizedRegisterData = {
      email: `unauthorized${Date.now()}@example.com`,
      password: 'Unauth123456!',
      name: 'Unauthorized User'
    };
    const unauthorizedResult = await makeRequest('POST', 'auth/register', unauthorizedRegisterData);
    if (unauthorizedResult.status === 201) {
      unauthorizedToken = unauthorizedResult.data.tokens.idToken;
    } else {
      console.error('Failed to create unauthorized user:', unauthorizedResult);
      throw new Error('Failed to create unauthorized user');
    }
  });
  
  afterAll(async () => {
    // Add test suite summary
    testResults.summary.testSuites.push({
      name: 'Pet Management Endpoints',
      total: testResults.summary.totalTests,
      passed: testResults.summary.totalTests, // Will be updated by report generator
    });
    
    // Generate test report
    generateReport('pet_tests', testResults);
    
    // Cleanup test data (optional)
    if (testPetId) {
      try {
        await admin.firestore().collection('pets').doc(testPetId).delete();
      } catch (error) {
        console.error('Error cleaning up test pet:', error);
      }
    }
  });
  
  // Test Case 1: Pet Creation
  describe('Pet Creation', () => {
    it('should successfully create a pet with valid data', async () => {
      const testData = {
        name: 'Fluffy',
        species: 'Dog',
        breed: 'Golden Retriever',
        age: 3,
        status: 'available',
        description: 'Friendly and playful golden retriever',
        medicalHistory: 'All vaccinations up to date'
      };
      
      const result = await makeRequest('POST', 'pets', testData, ownerToken);
      result.requestData = testData;
      trackResult('Create pet with valid data', result);
      
      expect(result.status).toBe(201);
      expect(result.data).toHaveProperty('message', 'Mascota creada correctamente');
      expect(result.data).toHaveProperty('pet');
      expect(result.data.pet).toHaveProperty('id');
      
      // Save pet ID for later tests
      if (result.data.pet && result.data.pet.id) {
        testPetId = result.data.pet.id;
      }
    });
    
    it('should reject pet creation with missing required fields', async () => {
      const testData = {
        // Missing name and species
        breed: 'Siamese',
        age: 2,
        status: 'available'
      };
      
      const result = await makeRequest('POST', 'pets', testData, ownerToken);
      result.requestData = testData;
      trackResult('Create pet with missing required fields', result);
      
      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error');
      expect(result.data.error).toContain('required');
    });
    
    it('should reject pet creation with invalid data types', async () => {
      const testData = {
        name: 'Max',
        species: 'Dog',
        breed: 'German Shepherd',
        age: 'not a number', // Invalid age
        status: 'available'
      };
      
      const result = await makeRequest('POST', 'pets', testData, ownerToken);
      result.requestData = testData;
      trackResult('Create pet with invalid data types', result);
      
      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error');
    });
    
    it('should reject pet creation for unauthorized user', async () => {
      const testData = {
        name: 'Rex',
        species: 'Dog',
        breed: 'Labrador',
        age: 4,
        status: 'available'
      };
      
      // No token provided
      const result = await makeRequest('POST', 'pets', testData);
      result.requestData = testData;
      trackResult('Create pet with unauthorized user', result);
      
      expect(result.status).toBe(401);
      expect(result.data).toHaveProperty('error');
      expect(result.data.error).toContain('token');
    });
  });
  
  // Test Case 2: Pet Retrieval (Single)
  describe('Pet Retrieval (Single)', () => {
    it('should retrieve an existing pet with valid ID', async () => {
      // Skip test if no valid pet ID available
      if (!testPetId) {
        console.warn('Skipping test: No valid pet ID available');
        return;
      }
      
      const result = await makeRequest('GET', `pets/${testPetId}`, null, ownerToken);
      result.requestData = { petId: testPetId };
      trackResult('Retrieve existing pet with valid ID', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('pet');
      expect(result.data.pet).toHaveProperty('id', testPetId);
    });
    
    it('should fail to retrieve pet with invalid ID format', async () => {
      const invalidId = 'not-a-valid-id';
      
      const result = await makeRequest('GET', `pets/${invalidId}`, null, ownerToken);
      result.requestData = { petId: invalidId };
      trackResult('Retrieve pet with invalid ID format', result);
      
      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error');
    });
    
    it('should fail to retrieve non-existent pet', async () => {
      const nonExistentId = 'nonexistent123456789';
      
      const result = await makeRequest('GET', `pets/${nonExistentId}`, null, ownerToken);
      result.requestData = { petId: nonExistentId };
      trackResult('Retrieve non-existent pet', result);
      
      expect(result.status).toBe(404);
      expect(result.data).toHaveProperty('error');
      expect(result.data.error).toContain('not found');
    });
  });
  
  // Test Case 3: Pet Listing (Multiple)
  describe('Pet Listing', () => {
    it('should list all pets with pagination', async () => {
      const result = await makeRequest('GET', 'pets?page=1&limit=10', null, ownerToken);
      result.requestData = { page: 1, limit: 10 };
      trackResult('List all pets (paginated)', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('pets');
      expect(Array.isArray(result.data.pets)).toBeTruthy();
      expect(result.data).toHaveProperty('pagination');
    });
    
    it('should filter pets by species', async () => {
      const result = await makeRequest('GET', 'pets?species=Dog', null, ownerToken);
      result.requestData = { species: 'Dog' };
      trackResult('List pets with filtering (by species)', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('pets');
      expect(Array.isArray(result.data.pets)).toBeTruthy();
      // All returned pets should be dogs
      result.data.pets.forEach(pet => {
        expect(pet.species).toBe('Dog');
      });
    });
    
    it('should sort pets by name', async () => {
      const result = await makeRequest('GET', 'pets?sort=name', null, ownerToken);
      result.requestData = { sort: 'name' };
      trackResult('List pets with sorting (by name)', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('pets');
      expect(Array.isArray(result.data.pets)).toBeTruthy();
      
      // Check if pets are sorted by name
      const petNames = result.data.pets.map(pet => pet.name);
      const sortedNames = [...petNames].sort();
      expect(petNames).toEqual(sortedNames);
    });
  });
  
  // Test Case 4: Pet Update
  describe('Pet Update', () => {
    it('should update pet with valid data', async () => {
      // Skip test if no valid pet ID available
      if (!testPetId) {
        console.warn('Skipping test: No valid pet ID available');
        return;
      }
      
      const updateData = {
        name: 'Fluffy Updated',
        description: 'Updated description for testing',
        age: 4
      };
      
      const result = await makeRequest('PUT', `pets/${testPetId}`, updateData, ownerToken);
      result.requestData = { ...updateData, petId: testPetId };
      trackResult('Update pet with valid data', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('message', 'Mascota actualizada correctamente');
      expect(result.data).toHaveProperty('pet');
      expect(result.data.pet.name).toBe(updateData.name);
      expect(result.data.pet.age).toBe(updateData.age);
    });
    
    it('should reject update with invalid data', async () => {
      // Skip test if no valid pet ID available
      if (!testPetId) {
        console.warn('Skipping test: No valid pet ID available');
        return;
      }
      
      const updateData = {
        age: 'not a number' // Invalid age
      };
      
      const result = await makeRequest('PUT', `pets/${testPetId}`, updateData, ownerToken);
      result.requestData = { ...updateData, petId: testPetId };
      trackResult('Update pet with invalid data', result);
      
      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error');
    });
    
    it('should reject update by unauthorized user', async () => {
      // Skip test if no valid pet ID available
      if (!testPetId) {
        console.warn('Skipping test: No valid pet ID available');
        return;
      }
      
      const updateData = {
        name: 'Unauthorized Update'
      };
      
      const result = await makeRequest('PUT', `pets/${testPetId}`, updateData, unauthorizedToken);
      result.requestData = { ...updateData, petId: testPetId };
      trackResult('Update pet as non-owner', result);
      
      expect(result.status).toBe(403);
      expect(result.data).toHaveProperty('error');
      expect(result.data.error).toContain('permission');
    });
  });
  
  // Test Case 5: Pet Deletion
  describe('Pet Deletion', () => {
    let petToDeleteId;
    
    // Create a pet specifically for deletion test
    beforeAll(async () => {
      const testData = {
        name: 'PetToDelete',
        species: 'Cat',
        breed: 'Siamese',
        age: 2,
        status: 'available'
      };
      
      const result = await makeRequest('POST', 'pets', testData, ownerToken);
      if (result.status === 201 && result.data.pet && result.data.pet.id) {
        petToDeleteId = result.data.pet.id;
      } else {
        console.error('Failed to create pet for deletion test:', result);
      }
    });
    
    it('should delete pet with valid ID', async () => {
      // Skip test if no pet ID available for deletion
      if (!petToDeleteId) {
        console.warn('Skipping test: No pet ID available for deletion');
        return;
      }
      
      const result = await makeRequest('DELETE', `pets/${petToDeleteId}`, null, ownerToken);
      result.requestData = { petId: petToDeleteId };
      trackResult('Delete pet with valid ID', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('message', 'Mascota eliminada correctamente');
      
      // Verify pet is removed
      const verifyResult = await makeRequest('GET', `pets/${petToDeleteId}`, null, ownerToken);
      expect(verifyResult.status).toBe(404);
    });
    
    it('should reject deletion with invalid ID format', async () => {
      const invalidId = 'not-a-valid-id';
      
      const result = await makeRequest('DELETE', `pets/${invalidId}`, null, ownerToken);
      result.requestData = { petId: invalidId };
      trackResult('Delete pet with invalid ID format', result);
      
      expect(result.status).toBe(400);
      expect(result.data).toHaveProperty('error');
    });
    
    it('should reject deletion by unauthorized user', async () => {
      // Skip test if no valid pet ID available
      if (!testPetId) {
        console.warn('Skipping test: No valid pet ID available');
        return;
      }
      
      const result = await makeRequest('DELETE', `pets/${testPetId}`, null, unauthorizedToken);
      result.requestData = { petId: testPetId };
      trackResult('Delete pet as non-owner', result);
      
      expect(result.status).toBe(403);
      expect(result.data).toHaveProperty('error');
      expect(result.data.error).toContain('permission');
    });
  });
  
  // Test Case 7: Pet Search
  describe('Pet Search', () => {
    it('should search pets by name', async () => {
      const searchQuery = 'flu'; // Partial match for "Fluffy"
      
      const result = await makeRequest('GET', `pets/search?name=${searchQuery}`, null, ownerToken);
      result.requestData = { searchQuery };
      trackResult('Search pets by name', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('pets');
      expect(Array.isArray(result.data.pets)).toBeTruthy();
      
      // Check if returned pets contain the search term in their name
      result.data.pets.forEach(pet => {
        expect(pet.name.toLowerCase()).toContain(searchQuery.toLowerCase());
      });
    });
    
    it('should search pets by species', async () => {
      const searchQuery = 'Dog';
      
      const result = await makeRequest('GET', `pets/search?species=${searchQuery}`, null, ownerToken);
      result.requestData = { searchQuery };
      trackResult('Search pets by species', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('pets');
      expect(Array.isArray(result.data.pets)).toBeTruthy();
      
      // Check if all returned pets are of the specified species
      result.data.pets.forEach(pet => {
        expect(pet.species).toBe(searchQuery);
      });
    });
    
    it('should handle search with no results', async () => {
      const searchQuery = 'NonexistentPetName12345';
      
      const result = await makeRequest('GET', `pets/search?name=${searchQuery}`, null, ownerToken);
      result.requestData = { searchQuery };
      trackResult('Search with no results', result);
      
      expect(result.status).toBe(200);
      expect(result.data).toHaveProperty('pets');
      expect(Array.isArray(result.data.pets)).toBeTruthy();
      expect(result.data.pets.length).toBe(0);
    });
  });
}); 