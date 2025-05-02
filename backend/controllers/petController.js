// controllers/petController.js
const petModel = require('../models/petModel');
// controllers/petController.js
const { compressImage } = require('../utils/imageUtils');
const { uploadImageToStorage } = require('../utils/storageUtils');
const axios = require('axios');

/**
 * Create a new pet
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.createPet = async (req, res) => {
  try {
    const petData = req.body;
    
    // Additional controller-level validation to ensure required fields are present
    // This is a backup in case middleware validation somehow fails
    const requiredFields = ['name', 'species', 'status', 'images'];
    const missingFields = requiredFields.filter(field => !petData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: missingFields.map(field => ({
          field,
          message: `${field} is required`
        }))
      });
    }
    
    // Type validation for critical fields
    if (!Array.isArray(petData.images) || petData.images.length === 0) {
      return res.status(400).json({
        error: 'Validation failed',
        details: [{
          field: 'images',
          message: 'At least one image URL is required'
        }]
      });
    }
    
    if (petData.age !== undefined && (isNaN(petData.age) || petData.age < 0)) {
      return res.status(400).json({
        error: 'Validation failed',
        details: [{
          field: 'age',
          message: 'Age must be a non-negative integer'
        }]
      });
    }
    
    // Process each external image URL
    const processedUrls = [];
    for (const url of petData.images) {
      try {
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
      } catch (imageError) {
        console.error('Error processing image URL:', imageError);
        return res.status(400).json({ 
          error: 'Failed to process image URL', 
          details: imageError.message,
          url 
        });
      }
    }

    // Replace the petData images array with the processed Firebase Storage URLs
    petData.images = processedUrls;
    
    // Add user ID from authenticated user
    if (req.user && req.user.uid) {
      petData.userId = req.user.uid;
    }

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

/**
 * Get all pets with optional filtering and sorting
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getPets = (req, res) => {
    // Extract filter and pagination parameters
    const { 
      species, status, breed, 
      page = 1, 
      limit = 10, 
      sort = 'createdAt'
    } = req.query;
    
    // Build filter object
    const filters = {};
    if (species) filters.species = species;
    if (status) filters.status = status;
    if (breed) filters.breed = breed;
    
    // Parse pagination parameters
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    
    // Call the model with filter, pagination and sorting options
    petModel.getPetsWithFilters(filters, pageNumber, pageSize, sort, (err, pets) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving pets', details: err.message });
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
    
    // Validate data types for critical fields if they are being updated
    if (petData.age !== undefined && (isNaN(petData.age) || petData.age < 0)) {
      return res.status(400).json({
        error: 'Validation failed',
        details: [{
          field: 'age',
          message: 'Age must be a non-negative integer'
        }]
      });
    }
    
    // Validate images array if it's being updated
    if (petData.images !== undefined) {
      if (!Array.isArray(petData.images) || petData.images.length === 0) {
        return res.status(400).json({
          error: 'Validation failed',
          details: [{
            field: 'images',
            message: 'At least one image URL is required'
          }]
        });
      }
    }
    
    // Validate status if it's being updated
    if (petData.status !== undefined) {
      const validStatuses = ['available', 'adopted', 'lost', 'found'];
      if (!validStatuses.includes(petData.status)) {
        return res.status(400).json({
          error: 'Validation failed',
          details: [{
            field: 'status',
            message: 'Status must be one of: available, adopted, lost, found'
          }]
        });
      }
    }
    
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

/**
 * Search pets based on query parameters
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.searchPets = (req, res) => {
    // Extract search parameters
    const { 
        name, species, status, breed,
        page = 1, 
        limit = 10, 
        sort = 'name' 
    } = req.query;
    
    // Build search criteria object
    const searchCriteria = {};
    if (name) searchCriteria.name = name;
    if (species) searchCriteria.species = species;
    if (status) searchCriteria.status = status;
    if (breed) searchCriteria.breed = breed;
    
    // Parse pagination parameters
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    
    // Call the model with search criteria
    petModel.searchPets(searchCriteria, pageNumber, pageSize, sort, (err, pets) => {
        if (err) {
            return res.status(500).json({ 
                error: 'Error searching pets', 
                details: err.message 
            });
        }
        
        res.status(200).json({
            results: pets,
            pagination: {
                page: pageNumber,
                limit: pageSize,
                total: pets.length, // In a production app, this would be a separate count query
                hasMore: pets.length === pageSize // Simple check if there might be more results
            }
        });
    });
};

exports.updatePetImage = async (req, res) => {
  try {
    const petId = req.params.id;
    const pet = req.resourceObj; // Now provided by the loadPetResource middleware
    
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
  } catch (error) {
    console.error('Error in updatePetImage:', error);
    res.status(500).json({ error: 'Failed to process image upload', details: error.message });
  }
};


exports.updatePetMultipleImages = async (req, res) => {
  try {
    const petId = req.params.id;
    const pet = req.resourceObj; // Now provided by the loadPetResource middleware
    
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
  } catch (error) {
    console.error('Error in updatePetMultipleImages:', error);
    res.status(500).json({ error: 'Failed to process multiple image upload', details: error.message });
  }
};

exports.removePetImage = (req, res) => {
  const petId = req.params.id;
  const { imageUrl } = req.body;
  
  petModel.removePetImage(petId, imageUrl, (err, updatedPet) => {
    if (err) {
      if (err.message.includes('A pet record must have at least one image')) {
        return res.status(400).json({ 
          error: 'Cannot remove the last image', 
          details: err.message 
        });
      }
      return res.status(500).json({ 
        error: 'Error removing pet image', 
        details: err.message 
      });
    }
    res.status(200).json({
      message: 'Image removed successfully',
      pet: updatedPet
    });
  });
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