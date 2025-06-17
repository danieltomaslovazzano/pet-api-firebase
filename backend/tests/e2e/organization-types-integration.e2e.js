const axios = require('./helpers/request');
const { EnhancedReporter } = require('./helpers/report');
const { loginAsAdmin, loginAsUser, createTestUser, cleanupTestData } = require('./helpers/auth');
const { setupGlobalReporter, getGlobalReporter } = require('./helpers/report');

const API_URL = process.env.E2E_API_URL || 'http://localhost:3000/api';

// Initialize Enhanced Reporter
const reporter = new EnhancedReporter('organization-types-integration', 'organization-types-integration-tests');
describe('Organization Types Integration E2E Tests', () => {
  let adminToken, userToken;
  let adminUserId, regularUserId;
  let testOrganizations = [];
  let testUsers = [];
  let createdPets = [];

  beforeAll(async () => {
    // Login as admin/superadmin for setup
    const adminLogin = await loginAsAdmin();
    adminToken = adminLogin.token;
    adminUserId = adminLogin.user.id;

    // Create a test user
    const testUser = await createTestUser({
      email: `test-user-integration-${Date.now()}@example.com`,
      password: 'TestPassword123!',
      displayName: 'Test User for Integration'
    });
    testUsers.push(testUser);
    regularUserId = testUser.id;

    // Login as the test user
    const userLogin = await loginAsUser(testUser.email, 'TestPassword123!');
    userToken = userLogin.token;
  });

  afterAll(async () => {
    // Cleanup test data
    await cleanupTestData({
      organizations: testOrganizations,
      users: testUsers,
      adminToken
    });

    // Generate enhanced report
    const observations = `- Total organizations created: ${testOrganizations.length}\n- Total pets created: ${createdPets.length}\n- Integration tests completed\n- All test data cleaned up automatically`;
    reporter.writeReport(observations);
  });

  describe('Shelter Organizations with Pets Integration', () => {
    let shelterOrg;

    beforeAll(async () => {
      // Create a shelter organization
      const response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Integration Test Shelter ${Date.now()}`,
          type: 'shelter',
          description: 'Shelter for integration testing',
          address: '789 Integration Street',
          phone: '+1555123456',
          email: `integration-shelter-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      shelterOrg = response.data;
      testOrganizations.push(shelterOrg);

      // Add admin user to shelter as admin
      await axios.post(
        'http://localhost:3000/api/memberships',
        {
          organizationId: shelterOrg.id,
          userId: adminUserId,
          role: 'admin'
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
    });

    test('Shelter should be able to create pets for adoption', async () => {
      const petData = {
        name: 'Shelter Pet',
        species: 'dog',
        breed: 'Mixed Breed',
        age: 2,
        gender: 'male',
        size: 'medium',
        color: 'brown',
        status: 'available',
        description: 'Friendly shelter dog looking for a home',
        images: ['https://images.unsplash.com/photo-1552053831-71594a27632d?w=400']
      };

      const response = await axios.post(
        'http://localhost:3000/api/pets',
        petData,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': shelterOrg.id
          }
        }
      );

      expect(response.status).toBe(201);
      expect(response.data.data.organizationId).toBe(shelterOrg.id);
      expect(response.data.data.name).toBe(petData.name);
      
      createdPets.push(response.data.data);
    });

    test('Should verify shelter organization has correct type and features', async () => {
      // Get organization details
      const orgResponse = await axios.get(
        `http://localhost:3000/api/organizations/${shelterOrg.id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(orgResponse.data.type).toBe('shelter');

      // Get shelter type features
      const typeResponse = await axios.get(
        'http://localhost:3000/api/organizations/types/shelter',
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(typeResponse.data.features).toContain('pet_adoption');
      expect(typeResponse.data.features).toContain('pet_rescue');
      expect(typeResponse.data.permissions.pets.create).toBe(true);
      expect(typeResponse.data.permissions.pets.manage_adoption_status).toBe(true);
    });

    test('Should list pets filtered by shelter organization', async () => {
      const response = await axios.get(
        'http://localhost:3000/api/pets',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': shelterOrg.id
          }
        }
      );

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data.data)).toBe(true);
      
      // All pets should belong to the shelter organization
      response.data.forEach(pet => {
        expect(pet.organizationId).toBe(shelterOrg.id);
      });
    });
  });

  describe('Organization Type Permissions Validation', () => {
    let shelterOrg;
    let shelterMember;

    beforeAll(async () => {
      // Create shelter organization
      const orgResponse = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Permissions Test Shelter ${Date.now()}`,
          type: 'shelter',
          description: 'Shelter for permissions testing',
          address: '321 Permissions Ave',
          phone: '+1555987654',
          email: `permissions-shelter-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      shelterOrg = orgResponse.data;
      testOrganizations.push(shelterOrg);

      // Create a shelter member
      shelterMember = await createTestUser({
        email: `shelter-member-${Date.now()}@example.com`,
        password: 'TestPassword123!',
        displayName: 'Shelter Member'
      });
      testUsers.push(shelterMember);

      // Add member to shelter
      await axios.post(
        'http://localhost:3000/api/memberships',
        {
          organizationId: shelterOrg.id,
          userId: shelterMember.id,
          role: 'member'
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
    });

    test('Shelter members should have appropriate permissions', async () => {
      // Get shelter type permissions
      const typeResponse = await axios.get(
        'http://localhost:3000/api/organizations/types/shelter',
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      const permissions = typeResponse.data.permissions;
      
      // Verify shelter-specific permissions
      expect(permissions.pets.create).toBe(true);
      expect(permissions.pets.read).toBe(true);
      expect(permissions.pets.update).toBe(true);
      expect(permissions.pets.manage_adoption_status).toBe(true);
      expect(permissions.adoptions.process_applications).toBe(true);
      expect(permissions.adoptions.conduct_interviews).toBe(true);
      expect(permissions.adoptions.approve_adoptions).toBe(true);
    });

    test('Should validate required fields for shelter type', async () => {
      // Get shelter type validation rules
      const typeResponse = await axios.get(
        'http://localhost:3000/api/organizations/types/shelter',
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      const validation = typeResponse.data.validation;
      
      expect(validation.requiredFields).toContain('name');
      expect(validation.requiredFields).toContain('email');
      expect(validation.requiredFields).toContain('address');
      expect(validation.requiredFields).toContain('phone');
      expect(validation.optionalFields).toContain('description');
      expect(validation.optionalFields).toContain('logo');
    });
  });

  describe('Multi-Organization Type Scenarios', () => {
    test('Should handle multiple shelter organizations correctly', async () => {
      const shelters = [];

      // Create multiple shelter organizations
      for (let i = 0; i < 3; i++) {
        const response = await axios.post(
          'http://localhost:3000/api/organizations',
          {
            name: `Multi Shelter ${i + 1} ${Date.now()}`,
            type: 'shelter',
            description: `Shelter ${i + 1} for multi-org testing`,
            address: `${400 + i} Multi Street`,
            phone: `+155512345${i}`,
            email: `multi-shelter-${i}-${Date.now()}@example.com`
          },
          {
            headers: { Authorization: `Bearer ${adminToken}` }
          }
        );
        shelters.push(response.data);
        testOrganizations.push(response.data);
      }

      // Verify all are shelter type
      for (const shelter of shelters) {
        expect(shelter.type).toBe('shelter');
      }

      // Filter organizations by shelter type
      const filterResponse = await axios.get(
        'http://localhost:3000/api/organizations?type=shelter',
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      expect(filterResponse.status).toBe(200);
      expect(Array.isArray(filterResponse.data.data)).toBe(true);
      
      // Should include our created shelters
      const shelterIds = shelters.map(s => s.id);
      const returnedShelters = filterResponse.data.filter(org => shelterIds.includes(org.id));
      expect(returnedShelters.length).toBe(3);
    });

    test('Should maintain data isolation between organizations of same type', async () => {
      // Create two separate shelter organizations
      const shelter1Response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Isolation Shelter 1 ${Date.now()}`,
          type: 'shelter',
          description: 'First shelter for isolation testing',
          address: '100 Isolation St',
          phone: '+1555111111',
          email: `isolation-shelter-1-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      const shelter1 = shelter1Response.data;
      testOrganizations.push(shelter1);

      const shelter2Response = await axios.post(
        'http://localhost:3000/api/organizations',
        {
          name: `Isolation Shelter 2 ${Date.now()}`,
          type: 'shelter',
          description: 'Second shelter for isolation testing',
          address: '200 Isolation St',
          phone: '+1555222222',
          email: `isolation-shelter-2-${Date.now()}@example.com`
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      const shelter2 = shelter2Response.data;
      testOrganizations.push(shelter2);

      // Add admin to both shelters
      await axios.post(
        'http://localhost:3000/api/memberships',
        {
          organizationId: shelter1.id,
          userId: adminUserId,
          role: 'admin'
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      await axios.post(
        'http://localhost:3000/api/memberships',
        {
          organizationId: shelter2.id,
          userId: adminUserId,
          role: 'admin'
        },
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      // Test data isolation - create pets in different shelters
      const pet1Data = {
        name: 'Shelter 1 Pet',
        species: 'dog',
        breed: 'Labrador',
        age: 3,
        gender: 'male',
        size: 'large',
        color: 'black',
        status: 'available',
        description: 'Friendly dog from shelter 1',
        images: ['https://images.unsplash.com/photo-1552053831-71594a27632d?w=400']
      };

      const pet2Data = {
        name: 'Shelter 2 Pet',
        species: 'cat',
        breed: 'Persian',
        age: 2,
        gender: 'female',
        size: 'medium',
        color: 'white',
        status: 'available',
        description: 'Calm cat from shelter 2',
        images: ['https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400']
      };

      const pet1Response = await axios.post(
        'http://localhost:3000/api/pets',
        pet1Data,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': shelter1.id
          }
        }
      );

      const pet2Response = await axios.post(
        'http://localhost:3000/api/pets',
        pet2Data,
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': shelter2.id
          }
        }
      );

      expect(pet1Response.status).toBe(201);
      expect(pet2Response.status).toBe(201);
      expect(pet1Response.data.data.organizationId).toBe(shelter1.id);
      expect(pet2Response.data.data.organizationId).toBe(shelter2.id);

      // Verify data isolation - shelter1 should not see shelter2's pets
      const shelter1PetsResponse = await axios.get(
        'http://localhost:3000/api/pets',
        {
          headers: { 
            Authorization: `Bearer ${adminToken}`,
            'X-Organization-Id': shelter1.id
          }
        }
      );

      const shelter1Pets = shelter1PetsResponse.data.data || shelter1PetsResponse.data;
      const shelter1PetIds = shelter1Pets.map(pet => pet.id);
      
      expect(shelter1PetIds).toContain(pet1Response.data.data.id);  
      expect(shelter1PetIds).not.toContain(pet2Response.data.data.id);
    });
  });
});