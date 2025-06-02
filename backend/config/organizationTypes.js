/**
 * Organization Types Configuration
 * 
 * This file defines all available organization types and their configurations.
 * Adding new organization types is as simple as adding a new entry to this configuration.
 * 
 * Each organization type can have:
 * - id: Unique identifier for the type
 * - name: Display name
 * - description: Description of the organization type
 * - features: Array of features/capabilities specific to this type
 * - permissions: Specific permissions for this organization type
 * - validation: Custom validation rules (optional)
 */

const ORGANIZATION_TYPES = {
  shelter: {
    id: 'shelter',
    name: 'Protectora de Animales',
    description: 'Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas',
    features: [
      'pet_adoption',
      'pet_rescue',
      'volunteer_management',
      'donation_tracking',
      'medical_records',
      'foster_care_coordination'
    ],
    permissions: {
      pets: {
        create: true,
        read: true,
        update: true,
        delete: true,
        manage_adoption_status: true
      },
      adoptions: {
        process_applications: true,
        conduct_interviews: true,
        approve_adoptions: true
      }
    },
    validation: {
      requiredFields: ['name', 'email', 'address', 'phone'],
      optionalFields: ['description', 'logo']
    }
  }
  // Future organization types will be added here:
  // veterinary_clinic: { ... },
  // rescue_organization: { ... },
  // training_center: { ... },
  // etc.
};

/**
 * Get all available organization types
 * @returns {Object} All organization types
 */
const getAllOrganizationTypes = () => {
  return ORGANIZATION_TYPES;
};

/**
 * Get a specific organization type by ID
 * @param {string} typeId - The organization type ID
 * @returns {Object|null} Organization type configuration or null if not found
 */
const getOrganizationType = (typeId) => {
  return ORGANIZATION_TYPES[typeId] || null;
};

/**
 * Check if an organization type is valid
 * @param {string} typeId - The organization type ID to validate
 * @returns {boolean} True if valid, false otherwise
 */
const isValidOrganizationType = (typeId) => {
  if (!typeId || typeof typeId !== 'string' || typeId.trim() === '') {
    return false;
  }
  return ORGANIZATION_TYPES.hasOwnProperty(typeId);
};

/**
 * Get array of valid organization type IDs
 * @returns {string[]} Array of valid type IDs
 */
const getValidOrganizationTypeIds = () => {
  return Object.keys(ORGANIZATION_TYPES);
};

/**
 * Get features for a specific organization type
 * @param {string} typeId - The organization type ID
 * @returns {string[]} Array of features for the organization type
 */
const getOrganizationTypeFeatures = (typeId) => {
  const orgType = getOrganizationType(typeId);
  return orgType ? orgType.features : [];
};

/**
 * Get permissions for a specific organization type
 * @param {string} typeId - The organization type ID
 * @returns {Object} Permissions object for the organization type
 */
const getOrganizationTypePermissions = (typeId) => {
  const orgType = getOrganizationType(typeId);
  return orgType ? orgType.permissions : {};
};

/**
 * Validate organization data based on its type
 * @param {string} typeId - The organization type ID
 * @param {Object} orgData - Organization data to validate
 * @returns {Object} Validation result with isValid boolean and errors array
 */
const validateOrganizationByType = (typeId, orgData) => {
  const orgType = getOrganizationType(typeId);
  
  if (!orgType) {
    return {
      isValid: false,
      errors: [`Invalid organization type: ${typeId}`]
    };
  }

  const errors = [];
  const validation = orgType.validation;

  if (validation && validation.requiredFields) {
    for (const field of validation.requiredFields) {
      if (!orgData[field] || (typeof orgData[field] === 'string' && orgData[field].trim() === '')) {
        errors.push(`${field} is required for ${orgType.name}`);
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = {
  ORGANIZATION_TYPES,
  getAllOrganizationTypes,
  getOrganizationType,
  isValidOrganizationType,
  getValidOrganizationTypeIds,
  getOrganizationTypeFeatures,
  getOrganizationTypePermissions,
  validateOrganizationByType
}; 