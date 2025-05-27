/**
 * Pet Model - Prisma Implementation
 * 
 * This model handles pet-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 * Now with multitenancy support through organizationId filtering.
 */

const { prisma } = require('../../config/prisma');
const { v4: uuidv4 } = require('uuid');

// Validation constants
const VALID_SPECIES = ['dog', 'cat', 'bird', 'fish', 'reptile', 'other'];
const VALID_STATUSES = ['available', 'adopted', 'lost', 'found'];
const VALID_VISIBILITY = ['visible', 'hidden', 'featured'];

/**
 * Validate pet data
 * @param {Object} petData - Pet data to validate
 * @returns {Error|null} - Error if validation fails, null if valid
 */
const validatePetData = (petData) => {
  // Validate required fields
  const requiredFields = ['name', 'species', 'status', 'images'];
  for (const field of requiredFields) {
    if (!petData[field]) {
      return new Error(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
    }
  }

  // Validate species
  if (!VALID_SPECIES.includes(petData.species)) {
    return new Error('Invalid species value');
  }

  // Validate status
  if (!VALID_STATUSES.includes(petData.status)) {
    return new Error('Invalid status value');
  }

  // Validate visibility (optional field)
  if (petData.visibility && !VALID_VISIBILITY.includes(petData.visibility)) {
    return new Error('Invalid visibility value. Must be one of: visible, hidden, featured');
  }

  // Validate images
  if (!Array.isArray(petData.images) || petData.images.length === 0) {
    return new Error('At least one image URL is required');
  }

  // Validate image URLs
  for (const image of petData.images) {
    if (!image.match(/^https?:\/\/.+/)) {
      return new Error('Invalid image URL format');
    }
  }

  // Validate age
  if (petData.age !== undefined && petData.age !== null) {
    const age = Number(petData.age);
    if (isNaN(age) || age < 0) {
      return new Error('Age must be a positive number');
    }
  }

  return null;
};

/**
 * Create a new pet
 * @param {Object} petData - Pet data
 * @returns {Promise<Object>} - Created pet
 */
exports.createPet = async (petData) => {
  try {
    // Validate pet data
    const validationError = validatePetData(petData);
    if (validationError) {
      throw validationError;
    }

    // Generate a UUID for the pet
    const id = uuidv4();
    
    // Format location data for PostgreSQL JSON field
    const location = petData.location ? petData.location : null;
    
    // Create the pet in PostgreSQL using Prisma
    const newPet = await prisma.pet.create({
      data: {
        id,
        name: petData.name,
        species: petData.species,
        breed: petData.breed || null,
        age: petData.age ? parseInt(petData.age, 10) : null,
        gender: petData.gender || null,
        size: petData.size || null,
        color: petData.color || null,
        status: petData.status,
        visibility: petData.visibility || 'visible',
        description: petData.description || null,
        images: petData.images,
        location,
        // Multitenancy: Store owner and organization references
        ownerId: petData.userId || petData.ownerId || null,
        // Multitenancy: Include organization context
        organizationId: petData.organizationId || null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    
    return newPet;
  } catch (error) {
    console.error('Error creating pet in PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get all pets, with optional pagination
 * @deprecated Use getPetsWithFilters instead
 * @returns {Promise<Array>} - Array of pets
 */
exports.getPets = async () => {
  try {
    const pets = await prisma.pet.findMany();
    return pets;
  } catch (error) {
    console.error('Error getting pets from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get pets with filtering, pagination, and sorting
 * @param {Object} filters - Filter criteria (species, status, breed, organizationId, visibility, etc.)
 * @param {Number} page - Page number (1-based)
 * @param {Number} limit - Results per page
 * @param {String} sortField - Field to sort by
 * @param {Boolean} includeHidden - Whether to include hidden pets (for admin views)
 * @returns {Promise<Array>} - Array of pets
 */
exports.getPetsWithFilters = async (filters, page = 1, limit = 10, sortField = 'createdAt', includeHidden = false) => {
  try {
    const where = {};
    if (filters) {
      if (filters.species) where.species = { equals: filters.species, mode: 'insensitive' };
      if (filters.status) where.status = { equals: filters.status, mode: 'insensitive' };
      if (filters.breed) where.breed = { equals: filters.breed, mode: 'insensitive' };
      if (filters.organizationId) where.organizationId = filters.organizationId;
      if (filters.visibility) where.visibility = { equals: filters.visibility, mode: 'insensitive' };
    }
    
    // Default to only showing visible pets unless explicitly including hidden ones
    if (!includeHidden && !filters?.visibility) {
      where.visibility = { not: 'hidden' };
    }
    
    const sortDirection = sortField.startsWith('-') ? 'desc' : 'asc';
    const actualField = sortField.startsWith('-') ? sortField.substring(1) : sortField;
    const orderBy = { [actualField]: sortDirection };
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const pets = await prisma.pet.findMany({ where, orderBy, skip, take });
    return pets;
  } catch (error) {
    console.error('Error getting pets with filters from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Search for pets based on search criteria
 * @param {Object} searchCriteria - Search parameters
 * @param {Number} page - Page number (1-based)
 * @param {Number} limit - Results per page
 * @param {String} sortField - Field to sort by
 * @param {Boolean} includeHidden - Whether to include hidden pets (for admin views)
 * @returns {Promise<Array>} - Array of pets
 */
exports.searchPets = async (searchCriteria, page = 1, limit = 10, sortField = 'name', includeHidden = false) => {
  try {
    const where = {};
    const orConditions = [];
    
    if (searchCriteria) {
      for (const [field, value] of Object.entries(searchCriteria)) {
        if (field === 'organizationId') {
          where.organizationId = value;
          continue;
        }
        
        // Exact match fields (use AND logic)
        if (field === 'species') {
          where.species = { equals: value, mode: 'insensitive' };
        } else if (field === 'status') {
          where.status = { equals: value, mode: 'insensitive' };
        } else if (field === 'visibility') {
          where.visibility = { equals: value, mode: 'insensitive' };
        } else if (field === 'age') {
          const age = Number(value);
          if (!isNaN(age)) {
            where.age = { equals: age };
          }
        }
        // Text search fields (use OR logic for partial matches)
        else if (['name', 'breed', 'color', 'description'].includes(field)) {
          orConditions.push({ [field]: { contains: String(value), mode: 'insensitive' } });
        }
      }
    }
    
    // Add OR conditions only if we have text search criteria
    if (orConditions.length > 0) {
      where.OR = orConditions;
    }
    
    // Default to only showing visible pets unless explicitly including hidden ones
    if (!includeHidden && !searchCriteria?.visibility) {
      where.visibility = { not: 'hidden' };
    }
    
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const sortDirection = sortField.startsWith('-') ? 'desc' : 'asc';
    const actualField = sortField.startsWith('-') ? sortField.substring(1) : sortField;
    const pets = await prisma.pet.findMany({ where, orderBy: { [actualField]: sortDirection }, skip, take });
    return pets;
  } catch (error) {
    console.error('Error searching pets in PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get pet by ID
 * @param {String} id - Pet ID
 * @returns {Promise<Object>} - Pet object
 */
exports.getPetById = async (id) => {
  try {
    const pet = await prisma.pet.findUnique({ where: { id } });
    if (!pet) throw new Error('Pet not found');
    return pet;
  } catch (error) {
    console.error('Error getting pet by ID from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get pet by ID with organization context validation
 * @param {String} id - Pet ID
 * @param {String} organizationId - Organization ID for access control
 * @returns {Promise<Object>} - Pet object
 */
exports.getPetByIdWithOrgContext = async (id, organizationId) => {
  try {
    const pet = await prisma.pet.findUnique({ where: { id } });
    if (!pet) throw new Error('Pet not found');
    if (organizationId && pet.organizationId !== organizationId) {
      throw new Error('Pet does not belong to the specified organization');
    }
    return pet;
  } catch (error) {
    console.error('Error getting pet by ID from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Update a pet by ID
 * @param {String} id - Pet ID
 * @param {Object} petData - Updated pet data
 * @returns {Promise<Object>} - Updated pet object
 */
exports.updatePet = async (id, petData) => {
  try {
    const existingPet = await prisma.pet.findUnique({ where: { id } });
    if (!existingPet) throw new Error('Pet not found');
    if (petData.organizationId && existingPet.organizationId !== petData.organizationId) {
      throw new Error('Cannot change pet organization');
    }
    const mergedData = { ...existingPet, ...petData };
    const validationError = validatePetData(mergedData);
    if (validationError) throw validationError;
    let location = petData.location || existingPet.location;
    const updatedPet = await prisma.pet.update({
      where: { id },
      data: { ...petData, location, updatedAt: new Date() }
    });
    return updatedPet;
  } catch (error) {
    console.error('Error updating pet in PostgreSQL:', error);
    throw error;
  }
};

/**
 * Delete a pet
 * @param {string} id - Pet ID
 * @returns {Promise<Object>} - Deletion result
 */
exports.deletePet = async (id) => {
  try {
    const existingPet = await prisma.pet.findUnique({ where: { id } });
    if (!existingPet) throw new Error('Pet not found');
    await prisma.pet.delete({ where: { id } });
    return { message: 'Pet deleted successfully' };
  } catch (error) {
    console.error('Error deleting pet from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get pets by owner ID
 * @param {string} ownerId - Owner/User ID
 * @returns {Promise<Array>} - Array of pets
 */
exports.getPetsByOwner = async (ownerId) => {
  try {
    const pets = await prisma.pet.findMany({ where: { ownerId } });
    return pets;
  } catch (error) {
    console.error('Error getting pets by owner from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get pet statistics
 * @returns {Promise<Object>} - Pet statistics
 */
exports.getPetStats = async () => {
  try {
    const statusStats = await prisma.pet.groupBy({ by: ['status'], _count: true });
    const speciesStats = await prisma.pet.groupBy({ by: ['species'], _count: true });
    const stats = {
      total: await prisma.pet.count(),
      byStatus: statusStats.reduce((acc, curr) => { acc[curr.status] = curr._count; return acc; }, {}),
      bySpecies: speciesStats.reduce((acc, curr) => { acc[curr.species] = curr._count; return acc; }, {})
    };
    return stats;
  } catch (error) {
    console.error('Error getting pet statistics from PostgreSQL:', error);
    throw error;
  }
};

/**
 * Get a pet with its owner information
 * @param {string} id - Pet ID
 * @returns {Promise<Object>} - Pet with owner
 */
exports.getPetWithOwner = async (id) => {
  try {
    const pet = await prisma.pet.findUnique({ where: { id }, include: { owner: true } });
    if (!pet) throw new Error('Pet not found');
    return pet;
  } catch (error) {
    console.error('Error getting pet with owner from PostgreSQL:', error);
    throw error;
  }
}; 