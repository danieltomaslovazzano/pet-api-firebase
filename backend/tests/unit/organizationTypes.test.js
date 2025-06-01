/**
 * Organization Types Unit Tests
 * 
 * Tests for the organization types configuration and validation functions
 */

const {
  getAllOrganizationTypes,
  getOrganizationType,
  isValidOrganizationType,
  getValidOrganizationTypeIds,
  getOrganizationTypeFeatures,
  getOrganizationTypePermissions,
  validateOrganizationByType
} = require('../../config/organizationTypes');

describe('Organization Types Configuration', () => {
  
  describe('getAllOrganizationTypes', () => {
    test('should return all organization types', () => {
      const types = getAllOrganizationTypes();
      expect(types).toBeDefined();
      expect(typeof types).toBe('object');
      expect(types.shelter).toBeDefined();
    });

    test('should include shelter type with correct structure', () => {
      const types = getAllOrganizationTypes();
      const shelter = types.shelter;
      
      expect(shelter).toHaveProperty('id', 'shelter');
      expect(shelter).toHaveProperty('name');
      expect(shelter).toHaveProperty('description');
      expect(shelter).toHaveProperty('features');
      expect(shelter).toHaveProperty('permissions');
      expect(shelter).toHaveProperty('validation');
      expect(Array.isArray(shelter.features)).toBe(true);
    });
  });

  describe('getOrganizationType', () => {
    test('should return shelter type when requested', () => {
      const shelter = getOrganizationType('shelter');
      expect(shelter).toBeDefined();
      expect(shelter.id).toBe('shelter');
      expect(shelter.name).toBe('Protectora de Animales');
    });

    test('should return null for invalid type', () => {
      const invalid = getOrganizationType('invalid_type');
      expect(invalid).toBeNull();
    });

    test('should return null for undefined type', () => {
      const invalid = getOrganizationType();
      expect(invalid).toBeNull();
    });
  });

  describe('isValidOrganizationType', () => {
    test('should return true for shelter type', () => {
      expect(isValidOrganizationType('shelter')).toBe(true);
    });

    test('should return false for invalid type', () => {
      expect(isValidOrganizationType('invalid_type')).toBe(false);
    });

    test('should return false for null/undefined', () => {
      expect(isValidOrganizationType(null)).toBe(false);
      expect(isValidOrganizationType(undefined)).toBe(false);
      expect(isValidOrganizationType('')).toBe(false);
    });
  });

  describe('getValidOrganizationTypeIds', () => {
    test('should return array of valid type IDs', () => {
      const typeIds = getValidOrganizationTypeIds();
      expect(Array.isArray(typeIds)).toBe(true);
      expect(typeIds).toContain('shelter');
      expect(typeIds.length).toBeGreaterThan(0);
    });
  });

  describe('getOrganizationTypeFeatures', () => {
    test('should return features for shelter type', () => {
      const features = getOrganizationTypeFeatures('shelter');
      expect(Array.isArray(features)).toBe(true);
      expect(features).toContain('pet_adoption');
      expect(features).toContain('pet_rescue');
    });

    test('should return empty array for invalid type', () => {
      const features = getOrganizationTypeFeatures('invalid_type');
      expect(Array.isArray(features)).toBe(true);
      expect(features.length).toBe(0);
    });
  });

  describe('getOrganizationTypePermissions', () => {
    test('should return permissions for shelter type', () => {
      const permissions = getOrganizationTypePermissions('shelter');
      expect(typeof permissions).toBe('object');
      expect(permissions.pets).toBeDefined();
      expect(permissions.pets.create).toBe(true);
      expect(permissions.adoptions).toBeDefined();
    });

    test('should return empty object for invalid type', () => {
      const permissions = getOrganizationTypePermissions('invalid_type');
      expect(typeof permissions).toBe('object');
      expect(Object.keys(permissions).length).toBe(0);
    });
  });

  describe('validateOrganizationByType', () => {
    test('should validate shelter organization with all required fields', () => {
      const orgData = {
        name: 'Test Shelter',
        email: 'test@shelter.com',
        address: '123 Test St',
        phone: '+1234567890'
      };

      const result = validateOrganizationByType('shelter', orgData);
      expect(result.isValid).toBe(true);
      expect(result.errors.length).toBe(0);
    });

    test('should fail validation for shelter missing required fields', () => {
      const orgData = {
        name: 'Test Shelter'
        // Missing email, address, phone
      };

      const result = validateOrganizationByType('shelter', orgData);
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors.some(error => error.includes('email'))).toBe(true);
    });

    test('should fail validation for invalid organization type', () => {
      const orgData = {
        name: 'Test Org',
        email: 'test@org.com'
      };

      const result = validateOrganizationByType('invalid_type', orgData);
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBe(1);
      expect(result.errors[0]).toContain('Invalid organization type');
    });

    test('should handle empty string fields as invalid', () => {
      const orgData = {
        name: '',
        email: 'test@shelter.com',
        address: '123 Test St',
        phone: '+1234567890'
      };

      const result = validateOrganizationByType('shelter', orgData);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(error => error.includes('name'))).toBe(true);
    });

    test('should handle whitespace-only fields as invalid', () => {
      const orgData = {
        name: '   ',
        email: 'test@shelter.com',
        address: '123 Test St',
        phone: '+1234567890'
      };

      const result = validateOrganizationByType('shelter', orgData);
      expect(result.isValid).toBe(false);
      expect(result.errors.some(error => error.includes('name'))).toBe(true);
    });
  });
}); 