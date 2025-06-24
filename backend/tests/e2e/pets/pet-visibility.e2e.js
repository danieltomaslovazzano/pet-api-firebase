const dotenv = require('dotenv');
const path = require('path');

// Load development environment variables for E2E tests
dotenv.config({ path: path.join(__dirname, '../../../.env.dev') });

const axios = require('../helpers/request');
const { EnhancedReporter } = require('../helpers/report');
const { loginAsAdmin, loginAsUser, createTestUser, cleanupTestData } = require('../helpers/auth');

const API_URL = process.env.E2E_API_URL || 'http://localhost:3000/api';

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('pets-visibility', 'pet-visibility-tests');

describe('Pet Visibility Management E2E Tests', () => {
  let adminToken, userToken;
  let adminUserId, regularUserId;
  let testOrganization;
  let testUsers = [];
  let testOrganizations = [];
  let createdPets = [];

  beforeAll(async () => {
    // Login as admin/superadmin for setup
    const adminLogin = await loginAsAdmin();
    adminToken = adminLogin.token;
    adminUserId = adminLogin.user.id;

    // Create test user
    const testUser = await createTestUser({
      email: `pet-visibility-user-${Date.now()}@test.com`,
      password: 'TestPassword123!',
      displayName: 'Pet Visibility Test User'
    });
    testUsers.push(testUser);
    regularUserId = testUser.id;
    
    // Login user
    const userLogin = await loginAsUser(testUser.email, 'TestPassword123!');
    userToken = userLogin.token;

    // Create test organization
    const orgResponse = await axios.post(
      'http://localhost:3000/api/organizations',
      {
        name: `Pet Visibility Test Org ${Date.now()}`,
        email: `pet-visibility-${Date.now()}@example.com`,
        description: 'Organization for pet visibility E2E testing',
        address: '123 Pet Visibility Street',
        phone: '+1234567890'
      },
      {
        headers: { Authorization: `Bearer ${adminToken}` }
      }
    );
    testOrganization = orgResponse.data.data;
    testOrganizations.push(testOrganization);

    // Add admin user to test organization as admin
    await axios.post(
      'http://localhost:3000/api/memberships',
      {
        organizationId: testOrganization.id,
        userId: adminUserId,
        role: 'admin'
      },
      {
        headers: { Authorization: `Bearer ${adminToken}` }
      }
    );

    // Add test user to test organization
    await axios.post(
      'http://localhost:3000/api/memberships',
      {
        organizationId: testOrganization.id,
        userId: testUser.id,
        role: 'member'
      },
      {
        headers: { Authorization: `Bearer ${adminToken}` }
      }
    );
  });

  afterAll(async () => {
    // Cleanup test data
    await cleanupTestData({
      organizations: testOrganizations,
      users: testUsers,
      adminToken
    });

    // Generate enhanced report
    const observations = `- Total pets tested for visibility: ${createdPets.length}\n- Pet visibility tests completed\n- All test data cleaned up automatically`;
    reporter.writeReport(observations);
  });

  describe('Pet Visibility Management', () => {
    let visibilityTestPet;

    beforeAll(async () => {
      // Create a test pet for visibility tests
      const petData = {
        name: 'Visibility Test Pet',
        species: 'dog',
        breed: 'Beagle',
        status: 'available',
        visibility: 'visible', // Explicitly set to visible
        description: 'Pet for testing visibility features',
        images: ['https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400']
      };

      const response = await axios.post(
        'http://localhost:3000/api/pets',
        petData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );
      visibilityTestPet = response.data.data;
      createdPets.push(visibilityTestPet);
    });

    test('Should create pet with default visibility as visible', async () => {
      const petData = {
        name: 'Default Visibility Pet',
        species: 'cat',
        status: 'available',
        images: ['https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400']
      };

      const response = await axios.post(
        'http://localhost:3000/api/pets',
        petData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(201);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data.data).toHaveProperty('id');
      expect(response.data.data).toHaveProperty('name', petData.name);
      expect(response.data.data).toHaveProperty('species', petData.species);
      expect(response.data.data).toHaveProperty('organizationId', testOrganization.id);
      expect(response.data.data).toHaveProperty('visibility', 'visible');
      
      createdPets.push(response.data.data);
    });

    test('Should create pet with explicit visibility setting', async () => {
      const petData = {
        name: 'Featured Pet',
        species: 'dog',
        status: 'available',
        visibility: 'featured',
        images: ['https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400']
      };

      const response = await axios.post(
        'http://localhost:3000/api/pets',
        petData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(201);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data.data).toHaveProperty('id');
      expect(response.data.data).toHaveProperty('name', petData.name);
      expect(response.data.data).toHaveProperty('species', petData.species);
      expect(response.data.data).toHaveProperty('organizationId', testOrganization.id);
      expect(response.data.data).toHaveProperty('visibility', 'featured');
      
      createdPets.push(response.data.data);
    });

    test('Should hide a pet successfully', async () => {
      const response = await axios.post(
        `http://localhost:3000/api/pets/${visibilityTestPet.id}/hide`,
        {},
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data.data.message).toContain('hidden');
      expect(response.data.data.pet.visibility).toBe('hidden');
    });

    test('Should show a hidden pet successfully', async () => {
      const response = await axios.post(
        `http://localhost:3000/api/pets/${visibilityTestPet.id}/show`,
        {},
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data.data.message).toContain('visible');
      expect(response.data.data.pet.visibility).toBe('visible');
    });

    test('Should feature a pet successfully', async () => {
      const response = await axios.post(
        `http://localhost:3000/api/pets/${visibilityTestPet.id}/feature`,
        {},
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data.data.message).toContain('featured');
      expect(response.data.data.pet.visibility).toBe('featured');
    });

    test('Should update pet visibility directly via PUT', async () => {
      const updateData = {
        visibility: 'hidden'
      };

      const response = await axios.put(
        `http://localhost:3000/api/pets/${visibilityTestPet.id}`,
        updateData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);expect(response.data.data.visibility).toBe('hidden');
    });

    test('Should fail with invalid visibility value', async () => {
      try {
        await axios.put(
          `http://localhost:3000/api/pets/${visibilityTestPet.id}`,
          { visibility: 'invalid' },
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Force test failure
      } catch (error) {
        if (error.response) {
          expect([400, 403]).toContain(error.response.status);
          expect(error.response.data.error).toContain('Validation failed');
        } else {
          console.error('Network error in test:', error.message);
          throw error;
        }
      }
    });

    test('Regular user should not access hidden pets in listings', async () => {
      // First hide the pet
      await axios.post(
        `http://localhost:3000/api/pets/${visibilityTestPet.id}/hide`,
        {},
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      // Regular user should not see hidden pets in listings
      const response = await axios.get(
        'http://localhost:3000/api/pets',
        {
          headers: { 
            Authorization: `Bearer ${userToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);const hiddenPets = response.data.data.filter(pet => pet.id === visibilityTestPet.id);
      expect(hiddenPets.length).toBe(0);
    });

    test('Admin should see hidden pets in listings', async () => {
      // Admin should see all pets including hidden ones
      const response = await axios.get(
        'http://localhost:3000/api/pets',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(response.status).toBe(200);
      
      expect(response.data).toHaveProperty('success', true);const hiddenPets = response.data.data.filter(pet => pet.id === visibilityTestPet.id);
      expect(hiddenPets.length).toBe(1);
      expect(hiddenPets[0].visibility).toBe('hidden');
    });

    test('Should filter pets by visibility', async () => {
      // Reset pet to visible for this test
      await axios.post(
        `http://localhost:3000/api/pets/${visibilityTestPet.id}/show`,
        {},
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      // Filter for visible pets
      const visibleResponse = await axios.get(
        'http://localhost:3000/api/pets?visibility=visible',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(visibleResponse.status).toBe(200);
      
      expect(visibleResponse.data).toHaveProperty('success', true);visibleResponse.data.data.forEach(pet => {
        expect(pet.visibility).toBe('visible');
      });

      // Filter for featured pets
      const featuredResponse = await axios.get(
        'http://localhost:3000/api/pets?visibility=featured',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(featuredResponse.status).toBe(200);
      
      expect(featuredResponse.data).toHaveProperty('success', true);featuredResponse.data.data.forEach(pet => {
        expect(pet.visibility).toBe('featured');
      });
    });

    test('Should demonstrate adopted pet with visible status for 7-day showcase', async () => {
      // Create a pet that was recently adopted but should remain visible
      const adoptedPetData = {
        name: 'Recently Adopted Pet',
        species: 'cat',
        status: 'adopted', // Pet is adopted
        visibility: 'visible', // But still visible for showcase
        description: 'This pet was recently adopted - congratulations to the new family!',
        images: ['https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400']
      };

      const createResponse = await axios.post(
        'http://localhost:3000/api/pets',
        adoptedPetData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      expect(createResponse.status).toBe(201);
      
      expect(createResponse.data).toHaveProperty('success', true);expect(createResponse.data.data.status).toBe('adopted');
      expect(createResponse.data.data.visibility).toBe('visible');
      
      createdPets.push(createResponse.data.data);

      // Verify that adopted but visible pets appear in public listings
      const listResponse = await axios.get(
        'http://localhost:3000/api/pets',
        {
          headers: { 
            Authorization: `Bearer ${userToken}`,
            'X-Organization-Id': testOrganization.id
          }
        }
      );

      const adoptedVisiblePets = listResponse.data.data.filter(pet => 
        pet.status === 'adopted' && pet.visibility === 'visible'
      );
      expect(adoptedVisiblePets.length).toBeGreaterThan(0);
    });

    test('Should fail visibility actions with invalid pet ID', async () => {
      try {
        await axios.post(
          'http://localhost:3000/api/pets/invalid-id/hide',
          {},
          {
            headers: { 
              Authorization: `Bearer ${adminToken}`,
              'X-Organization-Id': testOrganization.id
            }
          }
        );
        expect(true).toBe(false); // Force test failure
      } catch (error) {
        if (error.response) {
          expect([400, 403]).toContain(error.response.status);
        } else {
          console.error('Network error in test:', error.message);
          throw error;
        }
      }
    });
  });
});