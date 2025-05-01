// models/petModel.js
const admin = require('../config/firebase');
const { v4: uuidv4 } = require('uuid');

// Get a reference to Firestore and the "pets" collection
const db = admin.firestore();
const petsCollection = db.collection('pets');

exports.createPet = async (petData, callback) => {
  try {
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
 * Get pets with filtering, sorting, and pagination
 * @param {Object} options - Query options
 * @param {string} options.name - Filter by partial name match
 * @param {string} options.species - Filter by species
 * @param {string} options.status - Filter by status
 * @param {number} options.minAge - Filter by minimum age
 * @param {number} options.maxAge - Filter by maximum age
 * @param {string} options.sort - Field to sort by
 * @param {string} options.order - Sort order ('asc' or 'desc')
 * @param {number} options.limit - Number of records per page
 * @param {number} options.page - Page number
 * @param {Function} callback - Callback function
 */
exports.getPets = async (options = {}, callback) => {
  try {
    let query = petsCollection;
    
    // Apply filters if provided
    if (options.species) {
      query = query.where('species', '==', options.species);
    }
    
    if (options.status) {
      query = query.where('status', '==', options.status);
    }
    
    // Get all data first for local filtering and pagination
    const snapshot = await query.get();
    let pets = [];
    
    snapshot.forEach(doc => {
      pets.push(doc.data());
    });
    
    // Apply additional filters that can't be done directly in Firestore query
    if (options.name) {
      const searchTerm = options.name.toLowerCase();
      pets = pets.filter(pet => 
        pet.name && pet.name.toLowerCase().includes(searchTerm)
      );
    }
    
    if (options.minAge !== undefined) {
      pets = pets.filter(pet => pet.age >= options.minAge);
    }
    
    if (options.maxAge !== undefined) {
      pets = pets.filter(pet => pet.age <= options.maxAge);
    }
    
    // Apply sorting
    if (options.sort) {
      const sortField = options.sort;
      const sortOrder = options.order === 'desc' ? -1 : 1;
      
      pets.sort((a, b) => {
        // Handle undefined values
        if (a[sortField] === undefined) return sortOrder;
        if (b[sortField] === undefined) return -sortOrder;
        
        // Compare values
        if (a[sortField] < b[sortField]) return -1 * sortOrder;
        if (a[sortField] > b[sortField]) return 1 * sortOrder;
        return 0;
      });
    }
    
    // Apply pagination
    const page = options.page || 1;
    const limit = options.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const paginationInfo = {
      total: pets.length,
      page: page,
      limit: limit,
      totalPages: Math.ceil(pets.length / limit)
    };
    
    // Slice the array for pagination
    const paginatedPets = pets.slice(startIndex, endIndex);
    
    callback(null, { pets: paginatedPets, pagination: paginationInfo });
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