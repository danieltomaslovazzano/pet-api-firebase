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