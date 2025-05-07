/**
 * Pet Test Fixtures
 * 
 * This module provides test data fixtures for pet-related tests.
 */

const { v4: uuidv4 } = require('uuid');

/**
 * Generate a valid pet object for testing
 * @param {Object} overrides - Override default properties
 * @returns {Object} Test pet object
 */
function validPet(overrides = {}) {
  const petId = overrides.id || uuidv4();
  
  return {
    id: petId,
    name: overrides.name || `Test Pet ${petId.substring(0, 4)}`,
    species: overrides.species || 'dog',
    breed: overrides.breed || 'Mixed',
    age: overrides.age !== undefined ? overrides.age : 3,
    gender: overrides.gender || 'male',
    size: overrides.size || 'medium',
    color: overrides.color || 'brown',
    status: overrides.status || 'available',
    description: overrides.description || 'A friendly test pet for unit testing',
    images: overrides.images || ['https://example.com/test-pet-image.jpg'],
    location: overrides.location || null,
    ownerId: overrides.ownerId || null,
    createdAt: overrides.createdAt || new Date(),
    updatedAt: overrides.updatedAt || new Date()
  };
}

/**
 * Generate a collection of test pets
 * @param {Number} count - Number of pets to generate
 * @param {Object} baseOverrides - Base overrides to apply to all pets
 * @returns {Array<Object>} Array of test pet objects
 */
function generatePets(count = 5, baseOverrides = {}) {
  const species = ['dog', 'cat', 'bird', 'rabbit', 'hamster'];
  const statuses = ['available', 'adopted', 'lost', 'found'];
  const genders = ['male', 'female'];
  const sizes = ['small', 'medium', 'large'];
  
  return Array.from({ length: count }, (_, index) => {
    const petOverrides = { ...baseOverrides };
    
    // Add index-based variations to make pets distinct
    petOverrides.species = species[index % species.length];
    petOverrides.status = statuses[index % statuses.length];
    petOverrides.gender = genders[index % genders.length];
    petOverrides.size = sizes[index % sizes.length];
    petOverrides.age = 1 + (index % 12); // Ages 1-12
    
    return validPet(petOverrides);
  });
}

/**
 * Predefined pet categories for different test scenarios
 */
const petCategories = {
  dogs: [
    validPet({ species: 'dog', breed: 'Labrador', name: 'Test Dog 1' }),
    validPet({ species: 'dog', breed: 'German Shepherd', name: 'Test Dog 2' })
  ],
  cats: [
    validPet({ species: 'cat', breed: 'Siamese', name: 'Test Cat 1' }),
    validPet({ species: 'cat', breed: 'Persian', name: 'Test Cat 2' })
  ],
  byStatus: {
    available: validPet({ status: 'available', name: 'Available Pet' }),
    adopted: validPet({ status: 'adopted', name: 'Adopted Pet' }),
    lost: validPet({ status: 'lost', name: 'Lost Pet' }),
    found: validPet({ status: 'found', name: 'Found Pet' })
  }
};

module.exports = {
  validPet,
  generatePets,
  petCategories
}; 