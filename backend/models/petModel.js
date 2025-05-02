// models/petModel.js
const admin = require('../config/firebase');
const { v4: uuidv4 } = require('uuid');

// Get a reference to Firestore and the "pets" collection
const db = admin.firestore();
const petsCollection = db.collection('pets');

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
    
    const id = uuidv4();
    petData.id = id;
    petData.createdAt = admin.firestore.FieldValue.serverTimestamp();
    petData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    
    // Create a new document with the generated id
    await petsCollection.doc(id).set(petData);
    
    // Retrieve the document to return its data
    const doc = await petsCollection.doc(id).get();
    callback(null, doc.data());
  } catch (error) {
    callback(error);
  }
};

/**
 * Get all pets, with optional pagination
 * @deprecated Use getPetsWithFilters instead
 */
exports.getPets = async (callback) => {
  try {
    const snapshot = await petsCollection.get();
    const pets = [];
    snapshot.forEach(doc => {
      pets.push(doc.data());
    });
    callback(null, pets);
  } catch (error) {
    callback(error);
  }
};

/**
 * Get pets with filtering, pagination, and sorting
 * @param {Object} filters - Filter criteria (species, status, breed, etc.)
 * @param {Number} page - Page number (1-based)
 * @param {Number} limit - Results per page
 * @param {String} sortField - Field to sort by
 * @param {Function} callback - Callback function (err, pets)
 */
exports.getPetsWithFilters = async (filters, page = 1, limit = 10, sortField = 'createdAt', callback) => {
  try {
    // To avoid Firestore index requirements, we'll use a client-side filtering approach
    // This is not optimal for large datasets but works for our demo
    
    // Get all pets first
    const snapshot = await petsCollection.get();
    let pets = [];
    
    // Extract all pet data
    snapshot.forEach(doc => {
      pets.push(doc.data());
    });
    
    // Apply filters in memory
    if (filters) {
      if (filters.species) {
        // Case-insensitive filtering for species
        pets = pets.filter(pet => 
          pet.species && pet.species.toLowerCase() === filters.species.toLowerCase()
        );
      }
      
      if (filters.status) {
        pets = pets.filter(pet => 
          pet.status && pet.status.toLowerCase() === filters.status.toLowerCase()
        );
      }
      
      if (filters.breed) {
        // Case-insensitive filtering for breed
        pets = pets.filter(pet => 
          pet.breed && pet.breed.toLowerCase() === filters.breed.toLowerCase()
        );
      }
    }
    
    // Apply sorting
    if (sortField) {
      const sortDirection = sortField.startsWith('-') ? -1 : 1;
      const actualField = sortField.startsWith('-') ? sortField.substring(1) : sortField;
      
      pets.sort((a, b) => {
        // Handle different data types appropriately
        if (typeof a[actualField] === 'string' && typeof b[actualField] === 'string') {
          return a[actualField].localeCompare(b[actualField]) * sortDirection;
        } else {
          if (a[actualField] < b[actualField]) return -1 * sortDirection;
          if (a[actualField] > b[actualField]) return 1 * sortDirection;
          return 0;
        }
      });
    }
    
    // Apply pagination
    const pageSize = Math.min(limit, 100); // Cap at 100 for performance
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedPets = pets.slice(startIndex, endIndex);
    
    callback(null, paginatedPets);
  } catch (error) {
    callback(error);
  }
};

/**
 * Search for pets based on search criteria
 * @param {Object} searchCriteria - Search parameters
 * @param {Number} page - Page number (1-based)
 * @param {Number} limit - Results per page
 * @param {String} sortField - Field to sort by
 * @param {Function} callback - Callback function (err, pets)
 */
exports.searchPets = async (searchCriteria, page = 1, limit = 10, sortField = 'name', callback) => {
  try {
    // Since Firestore doesn't support full-text search, we'll implement a simple
    // search by getting all pets and filtering in memory
    // For production, consider using Algolia, Elasticsearch, or Firebase Extensions
    
    const snapshot = await petsCollection.get();
    let pets = [];
    
    // Collect all pets
    snapshot.forEach(doc => {
      pets.push(doc.data());
    });
    
    // Apply search filters - case insensitive string matching
    if (searchCriteria) {
      pets = pets.filter(pet => {
        // Check each search criterion
        for (const [field, value] of Object.entries(searchCriteria)) {
          if (!pet[field] || !String(pet[field]).toLowerCase().includes(String(value).toLowerCase())) {
            return false;
          }
        }
        return true;
      });
    }
    
    // Apply sorting
    if (sortField) {
      const sortDirection = sortField.startsWith('-') ? -1 : 1;
      const actualField = sortField.startsWith('-') ? sortField.substring(1) : sortField;
      
      pets.sort((a, b) => {
        // Handle different data types appropriately
        if (typeof a[actualField] === 'string' && typeof b[actualField] === 'string') {
          return a[actualField].localeCompare(b[actualField]) * sortDirection;
        } else {
          if (a[actualField] < b[actualField]) return -1 * sortDirection;
          if (a[actualField] > b[actualField]) return 1 * sortDirection;
          return 0;
        }
      });
    }
    
    // Apply pagination
    const pageSize = Math.min(limit, 100); // Cap at 100 for performance
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const paginatedPets = pets.slice(startIndex, endIndex);
    
    callback(null, paginatedPets);
  } catch (error) {
    callback(error);
  }
};

exports.getPetById = async (id, callback) => {
  try {
    const doc = await petsCollection.doc(id).get();
    if (!doc.exists) {
      return callback(new Error('Pet not found'));
    }
    callback(null, doc.data());
  } catch (error) {
    callback(error);
  }
};

exports.updatePet = async (id, petData, callback) => {
  try {
    // Validate if the pet exists before updating
    const petDoc = await petsCollection.doc(id).get();
    if (!petDoc.exists) {
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
    
    petData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    // Update only the provided fields (Firestore merges updates)
    await petsCollection.doc(id).update(petData);
    const doc = await petsCollection.doc(id).get();
    callback(null, doc.data());
  } catch (error) {
    callback(error);
  }
};

exports.deletePet = async (id, callback) => {
  try {
    await petsCollection.doc(id).delete();
    callback(null, { message: 'Pet deleted successfully' });
  } catch (error) {
    callback(error);
  }
};

exports.updatePetImages = async (petId, newImageUrls, callback) => {
  try {
    const docRef = petsCollection.doc(petId);
    const doc = await docRef.get();
    if (!doc.exists) {
      return callback(new Error('Pet not found'));
    }
    const petData = doc.data();
    const existingImages = petData.images || [];
    
    // Merge existing images with new ones
    let mergedImages = existingImages.concat(newImageUrls);
    
    // Limit to 10 images max
    if (mergedImages.length > 10) {
      mergedImages = mergedImages.slice(0, 10);
    }
    
    // Ensure at least one image remains
    if (mergedImages.length === 0) {
      return callback(new Error('A pet record must have at least one image.'));
    }
    
    await docRef.update({
      images: mergedImages,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    const updatedDoc = await docRef.get();
    callback(null, updatedDoc.data());
  } catch (error) {
    callback(error);
  }
};

/**
 * Removes an image URL from a pet record.
 * Ensures that after removal at least one image remains.
 * @param {string} petId - The ID of the pet document.
 * @param {string} imageUrl - The image URL to remove.
 * @param {Function} callback - Callback function (err, data).
 */
exports.removePetImage = async (petId, imageUrl, callback) => {
  try {
    const docRef = petsCollection.doc(petId);
    const doc = await docRef.get();
    if (!doc.exists) {
      return callback(new Error('Pet not found'));
    }
    const petData = doc.data();
    const existingImages = petData.images || [];
    
    // Filter out the image to remove
    const updatedImages = existingImages.filter(url => url !== imageUrl);
    
    // Ensure that at least one image remains
    if (updatedImages.length === 0) {
      return callback(new Error('A pet record must have at least one image.'));
    }
    
    // Update the pet document with the updated images array
    await docRef.update({
      images: updatedImages,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    
    const updatedDoc = await docRef.get();
    callback(null, updatedDoc.data());
  } catch (error) {
    callback(error);
  }
};