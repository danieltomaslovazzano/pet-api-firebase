// controllers/petController.js
const petModel = require('../models/petModel');
// controllers/petController.js
const { compressImage } = require('../utils/imageUtils');
const { uploadImageToStorage } = require('../utils/storageUtils');
const axios = require('axios');


exports.createPet = async (req, res) => {
  try {
    const petData = req.body;

    // Validate that an array of external image URLs is provided
    if (!petData.images || !Array.isArray(petData.images) || petData.images.length === 0) {
      return res.status(400).json({ error: 'At least one image URL must be provided in petData.images' });
    }

    const processedUrls = [];
    // Process each external image URL
    for (const url of petData.images) {
      // Download the image from the external URL
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data, 'binary');

      // Compress the image using your utility (defaults: 800x800, quality 70)
      const compressedBuffer = await compressImage(imageBuffer, 800, 800, 70);

      // Generate a unique filename (using timestamp and a random string)
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.jpg`;

      // Upload the compressed image to Firebase Storage and get its public URL
      const newUrl = await uploadImageToStorage(compressedBuffer, fileName);

      processedUrls.push(newUrl);
    }

    // Replace the petData images array with the processed Firebase Storage URLs
    petData.images = processedUrls;

    // Create the pet record in Firestore
    petModel.createPet(petData, (err, newPet) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating pet record', details: err.message });
      }
      res.status(201).json(newPet);
    });
  } catch (error) {
    console.error('Error in createPet:', error);
    res.status(500).json({ error: 'Failed to create pet', details: error.message });
  }
};

exports.getPets = (req, res) => {
    petModel.getPets((err, pets) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving pets' });
        }
        res.status(200).json(pets);
    });
};

exports.getPetById = (req, res) => {
    const { id } = req.params;
    petModel.getPetById(id, (err, pet) => {
        if (err) {
            if (err.message === 'Pet not found') {
                return res.status(404).json({ error: 'Pet not found' });
            }
            return res.status(500).json({ error: 'Error retrieving pet' });
        }
        res.status(200).json(pet);
    });
};

exports.updatePet = (req, res) => {
    const { id } = req.params;
    const petData = req.body;
    petModel.updatePet(id, petData, (err, updatedPet) => {
        if (err) {
            return res.status(500).json({ error: 'Error updating pet' });
        }
        res.status(200).json(updatedPet);
    });
};

exports.deletePet = (req, res) => {
    const { id } = req.params;
    petModel.deletePet(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error deleting pet' });
        }
        res.status(200).json({ message: `Pet ${id} deleted` });
    });
};

exports.updatePetImage = async (req, res) => {
  try {
    const petId = req.params.id;
    
    // First, retrieve the pet record to check ownership
    petModel.getPetById(petId, async (err, petData) => {
      if (err || !petData) {
        return res.status(404).json({ error: 'Pet not found' });
      }
      // Check if the current user is the owner OR has moderator/admin privileges
      if (req.user.uid !== petData.userId && !['moderator', 'admin'].includes(req.user.role)) {
        return res.status(403).json({ error: 'Forbidden: You can only update your own pet record' });
      }
      
      // Ensure a file is provided (via multer)
      if (!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
      }
      
      // Compress the image using Sharp (our utility function)
      const compressedBuffer = await compressImage(req.file.buffer, 800, 800, 70);
      
      // Create a unique filename
      const fileName = `${petId}_${Date.now()}.jpg`;
      
      // Upload the compressed image to Firebase Storage
      const imageUrl = await uploadImageToStorage(compressedBuffer, fileName);
      
      // Update the pet record by merging this new image URL with existing ones
      petModel.updatePetImages(petId, [imageUrl], (err, updatedPet) => {
        if (err) {
          return res.status(500).json({ error: 'Error updating pet record', details: err.message });
        }
        res.status(200).json({
          message: 'Image uploaded and pet record updated successfully',
          pet: updatedPet,
          imageUrl: imageUrl
        });
      });
    });
  } catch (error) {
    console.error('Error in updatePetImage:', error);
    res.status(500).json({ error: 'Failed to process image upload', details: error.message });
  }
};


exports.updatePetMultipleImages = async (req, res) => {
  try {
    const petId = req.params.id;
    
    // Retrieve pet record to check ownership
    petModel.getPetById(petId, async (err, petData) => {
      if (err || !petData) {
        return res.status(404).json({ error: 'Pet not found' });
      }
      // Check if the current user is the owner OR has moderator/admin privileges
      if (req.user.uid !== petData.userId && !['moderator', 'admin'].includes(req.user.role)) {
        return res.status(403).json({ error: 'Forbidden: You can only update your own pet record' });
      }
      
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No image files provided' });
      }
      
      const uploadedUrls = [];
      
      for (const file of req.files) {
        const compressedBuffer = await compressImage(file.buffer, 800, 800, 70);
        const fileName = `${petId}_${Date.now()}_${Math.random().toString(36).substring(2,8)}.jpg`;
        const imageUrl = await uploadImageToStorage(compressedBuffer, fileName);
        uploadedUrls.push(imageUrl);
      }
      
      // Merge new image URLs with the existing images in the pet record
      petModel.updatePetImages(petId, uploadedUrls, (err, updatedPet) => {
        if (err) {
          return res.status(500).json({ error: 'Error updating pet images', details: err.message });
        }
        res.status(200).json({
          message: 'Images uploaded and pet record updated successfully',
          pet: updatedPet,
          imageUrls: uploadedUrls
        });
      });
    });
  } catch (error) {
    console.error('Error in updatePetMultipleImages:', error);
    res.status(500).json({ error: 'Failed to process multiple image upload', details: error.message });
  }
};


exports.removePetImage = async (req, res) => {
  try {
    const petId = req.params.id;
    const { imageUrl } = req.body;
    
    if (!imageUrl) {
      return res.status(400).json({ error: 'imageUrl must be provided in the request body' });
    }
    
    // Retrieve the pet record to check ownership
    petModel.getPetById(petId, (err, petData) => {
      if (err || !petData) {
        return res.status(404).json({ error: 'Pet not found' });
      }
      
      // Allow removal only if the user is the owner or has a moderator/admin role
      if (req.user.uid !== petData.userId && !['moderator', 'admin'].includes(req.user.role)) {
        return res.status(403).json({ error: 'Forbidden: You can only remove images from your own pet record' });
      }
      
      // Proceed to remove the image
      petModel.removePetImage(petId, imageUrl, (err, updatedPet) => {
        if (err) {
          return res.status(500).json({ error: 'Error removing pet image', details: err.message });
        }
        res.status(200).json({
          message: 'Image removed and pet record updated successfully',
          pet: updatedPet
        });
      });
    });
  } catch (error) {
    console.error('Error in removePetImage controller:', error);
    res.status(500).json({ error: 'Failed to remove image', details: error.message });
  }
};

exports.createPetFromUrls = async (req, res) => {
  try {
    const petData = req.body;
    
    // Validate that an array of external image URLs is provided
    if (!petData.images || !Array.isArray(petData.images) || petData.images.length === 0) {
      return res.status(400).json({ error: 'At least one image URL must be provided in petData.images' });
    }
    
    const processedUrls = [];
    
    // Process each external image URL
    for (const url of petData.images) {
      // Download the image
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data, 'binary');
      
      // Compress the image using Sharp (via our utility function)
      const compressedBuffer = await compressImage(imageBuffer, 800, 800, 70);
      
      // Generate a unique filename (using a timestamp and random string)
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.jpg`;
      
      // Upload the compressed image to Firebase Storage
      const newUrl = await uploadImageToStorage(compressedBuffer, fileName);
      
      processedUrls.push(newUrl);
    }
    
    // Replace the images field in petData with the new Firebase Storage URLs
    petData.images = processedUrls;
    
    // Create the pet record in Firestore
    petModel.createPet(petData, (err, newPet) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating pet record', details: err.message });
      }
      res.status(201).json(newPet);
    });
  } catch (error) {
    console.error('Error in createPetFromUrls:', error);
    res.status(500).json({ error: 'Failed to create pet from URLs', details: error.message });
  }
};