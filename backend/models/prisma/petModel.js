/**
 * Pet Model - Prisma Implementation
 * 
 * This model handles pet-related database operations using Prisma ORM
 * while maintaining the same API contract as the Firebase implementation.
 */

const { prisma } = require('../../config/prisma');
const { v4: uuidv4 } = require('uuid');

/**
 * Create a new pet
 * @param {Object} petData - Pet data to create
 * @param {Function} callback - Callback function (error, pet)
 */
exports.createPet = async (petData, callback) => {
  try {
    // Validate required fields
    const requiredFields = ['name', 'species', 'status', 'images'];
    for (const field of requiredFields) {
      if (!petData[field]) {
        return callback(new Error(`Missing required field: ${field}`));
      }
    }
    
    // Validate images is an array with at least one item
    if (!Array.isArray(petData.images) || petData.images.length === 0) {
      return callback(new Error('At least one image URL is required'));
    }
    
    // Validate status is one of the allowed values
    const validStatuses = ['available', 'adopted', 'lost', 'found'];
    if (!validStatuses.includes(petData.status)) {
      return callback(new Error('Status must be one of: available, adopted, lost, found'));
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
        description: petData.description || null,
        images: petData.images,
        location,
        ownerId: petData.userId || petData.ownerId || null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    
    callback(null, newPet);
  } catch (error) {
    console.error('Error creating pet in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get all pets, with optional pagination
 * @deprecated Use getPetsWithFilters instead
 * @param {Function} callback - Callback function (error, pets)
 */
exports.getPets = async (callback) => {
  try {
    const pets = await prisma.pet.findMany();
    callback(null, pets);
  } catch (error) {
    console.error('Error getting pets from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get pets with filtering, pagination, and sorting
 * @param {Object} filters - Filter criteria (species, status, breed, etc.)
 * @param {Number} page - Page number (1-based)
 * @param {Number} limit - Results per page
 * @param {String} sortField - Field to sort by
 * @param {Function} callback - Callback function (error, pets)
 */
exports.getPetsWithFilters = async (filters, page = 1, limit = 10, sortField = 'createdAt', callback) => {
  try {
    // Build where clause for Prisma query
    const where = {};
    
    if (filters) {
      if (filters.species) {
        where.species = { equals: filters.species, mode: 'insensitive' };
      }
      
      if (filters.status) {
        where.status = { equals: filters.status, mode: 'insensitive' };
      }
      
      if (filters.breed) {
        where.breed = { equals: filters.breed, mode: 'insensitive' };
      }
    }
    
    // Determine sort order
    const sortDirection = sortField.startsWith('-') ? 'desc' : 'asc';
    const actualField = sortField.startsWith('-') ? sortField.substring(1) : sortField;
    
    // Build orderBy object for Prisma
    const orderBy = { [actualField]: sortDirection };
    
    // Apply pagination
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100); // Cap at 100 for performance
    
    // Fetch pets with the constructed query
    const pets = await prisma.pet.findMany({
      where,
      orderBy,
      skip,
      take
    });
    
    callback(null, pets);
  } catch (error) {
    console.error('Error getting pets with filters from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Search for pets based on search criteria
 * @param {Object} searchCriteria - Search parameters
 * @param {Number} page - Page number (1-based)
 * @param {Number} limit - Results per page
 * @param {String} sortField - Field to sort by
 * @param {Function} callback - Callback function (error, pets)
 */
exports.searchPets = async (searchCriteria, page = 1, limit = 10, sortField = 'name', callback) => {
  try {
    // Build where clause for Prisma query using OR conditions
    const where = {};
    
    // Apply search criteria
    if (searchCriteria) {
      const conditions = [];
      
      for (const [field, value] of Object.entries(searchCriteria)) {
        // For string fields, use contains for case-insensitive search
        if (field === 'name' || field === 'species' || field === 'breed' || field === 'color' || field === 'description') {
          conditions.push({
            [field]: { contains: String(value), mode: 'insensitive' }
          });
        } 
        // For status, use equals for exact matching
        else if (field === 'status') {
          conditions.push({
            status: { equals: String(value), mode: 'insensitive' }
          });
        }
        // For numerical fields, use equals
        else if (field === 'age') {
          conditions.push({
            age: parseInt(value, 10)
          });
        }
        // For other fields, try direct matching
        else {
          conditions.push({
            [field]: String(value)
          });
        }
      }
      
      // Add OR conditions to where clause
      if (conditions.length > 0) {
        where.OR = conditions;
      }
    }
    
    // Determine sort order
    const sortDirection = sortField.startsWith('-') ? 'desc' : 'asc';
    const actualField = sortField.startsWith('-') ? sortField.substring(1) : sortField;
    
    // Build orderBy object for Prisma
    const orderBy = { [actualField]: sortDirection };
    
    // Apply pagination
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100); // Cap at 100 for performance
    
    // Fetch pets with the constructed query
    const pets = await prisma.pet.findMany({
      where,
      orderBy,
      skip,
      take
    });
    
    callback(null, pets);
  } catch (error) {
    console.error('Error searching pets in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get a pet by ID
 * @param {string} id - Pet ID
 * @param {Function} callback - Callback function (error, pet)
 */
exports.getPetById = async (id, callback) => {
  try {
    const pet = await prisma.pet.findUnique({
      where: { id }
    });
    
    if (!pet) {
      return callback(new Error('Pet not found'));
    }
    
    callback(null, pet);
  } catch (error) {
    console.error('Error getting pet by ID from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Update a pet
 * @param {string} id - Pet ID
 * @param {Object} petData - Pet data to update
 * @param {Function} callback - Callback function (error, pet)
 */
exports.updatePet = async (id, petData, callback) => {
  try {
    // Validate if the pet exists before updating
    const existingPet = await prisma.pet.findUnique({
      where: { id }
    });
    
    if (!existingPet) {
      return callback(new Error('Pet not found'));
    }
    
    // If updating status, validate it's one of the allowed values
    if (petData.status) {
      const validStatuses = ['available', 'adopted', 'lost', 'found'];
      if (!validStatuses.includes(petData.status)) {
        return callback(new Error('Status must be one of: available, adopted, lost, found'));
      }
    }
    
    // If updating images, validate it's an array with at least one item
    if (petData.images) {
      if (!Array.isArray(petData.images) || petData.images.length === 0) {
        return callback(new Error('At least one image URL is required'));
      }
    }
    
    // If updating age, validate it's a non-negative integer
    if (petData.age !== undefined) {
      if (isNaN(petData.age) || petData.age < 0) {
        return callback(new Error('Age must be a non-negative integer'));
      }
      
      // Convert to number to ensure proper storage
      petData.age = Number(petData.age);
    }
    
    // Format location data for PostgreSQL JSON field if it's being updated
    const location = petData.location ? petData.location : undefined;
    if (location !== undefined) {
      petData.location = location;
    }
    
    // Update the pet in PostgreSQL using Prisma
    const updatedPet = await prisma.pet.update({
      where: { id },
      data: {
        ...petData,
        updatedAt: new Date()
      }
    });
    
    callback(null, updatedPet);
  } catch (error) {
    console.error('Error updating pet in PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Delete a pet
 * @param {string} id - Pet ID
 * @param {Function} callback - Callback function (error, result)
 */
exports.deletePet = async (id, callback) => {
  try {
    // Validate if the pet exists before deleting
    const existingPet = await prisma.pet.findUnique({
      where: { id }
    });
    
    if (!existingPet) {
      return callback(new Error('Pet not found'));
    }
    
    // Delete the pet from PostgreSQL using Prisma
    await prisma.pet.delete({
      where: { id }
    });
    
    callback(null, { message: 'Pet deleted successfully' });
  } catch (error) {
    console.error('Error deleting pet from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get pets by owner ID
 * @param {string} ownerId - Owner/User ID
 * @param {Function} callback - Callback function (error, pets)
 */
exports.getPetsByOwner = async (ownerId, callback) => {
  try {
    const pets = await prisma.pet.findMany({
      where: { ownerId }
    });
    
    callback(null, pets);
  } catch (error) {
    console.error('Error getting pets by owner from PostgreSQL:', error);
    callback(error);
  }
};

/**
 * Get pet statistics
 * @param {Function} callback - Callback function (error, stats)
 */
exports.getPetStats = async (callback) => {
  try {
    // Get count of pets by status
    const statusStats = await prisma.pet.groupBy({
      by: ['status'],
      _count: true
    });
    
    // Get count of pets by species
    const speciesStats = await prisma.pet.groupBy({
      by: ['species'],
      _count: true
    });
    
    // Convert to the expected format
    const stats = {
      total: await prisma.pet.count(),
      byStatus: statusStats.reduce((acc, curr) => {
        acc[curr.status] = curr._count;
        return acc;
      }, {}),
      bySpecies: speciesStats.reduce((acc, curr) => {
        acc[curr.species] = curr._count;
        return acc;
      }, {})
    };
    
    callback(null, stats);
  } catch (error) {
    console.error('Error getting pet statistics from PostgreSQL:', error);
    callback(error);
  }
}; 