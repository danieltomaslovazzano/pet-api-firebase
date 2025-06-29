// controllers/petController.js
const { petModel } = require('../models/adapter');
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
    console.log('[createPet] Datos recibidos:', petData);
    // Multitenancy: set organizationId if present
    if (req.organizationId) {
      petData.organizationId = req.organizationId;
    }
    
    // Additional controller-level validation to ensure required fields are present
    // This is a backup in case middleware validation somehow fails
    const requiredFields = ['name', 'species', 'status', 'images'];
    const missingFields = requiredFields.filter(field => !petData[field]);
    
    if (missingFields.length > 0) {
      return res.apiValidationError(
        missingFields.map(field => ({
          field,
          code: 'REQUIRED',
          messageKey: `pets.${field}.required`
        })),
        'pets.create.validation_failed'
      );
    }
    
    // Type validation for critical fields
    if (!Array.isArray(petData.images) || petData.images.length === 0) {
      return res.apiValidationError([{
        field: 'images',
        code: 'REQUIRED_ARRAY',
        messageKey: 'pets.images.required'
      }], 'pets.create.validation_failed');
    }
    
    if (petData.age !== undefined && (isNaN(petData.age) || petData.age < 0)) {
      return res.apiValidationError([{
        field: 'age',
        code: 'INVALID_NUMBER',
        messageKey: 'pets.age.invalid'
      }], 'pets.create.validation_failed');
    }
    
    // Process each external image URL
    const processedUrls = [];
    for (const url of petData.images) {
      try {
        // Validate URL format
        if (!url || typeof url !== 'string' || !url.startsWith('http')) {
          throw new Error(`Invalid image URL format: ${url}`);
        }

        console.log(`Processing image URL: ${url}`);
        
        // Download the image from the external URL
        const response = await axios.get(url, { 
          responseType: 'arraybuffer',
          timeout: 5000 // 5 second timeout para forzar fallo rápido
        });
        
        // Check if we received a valid image
        const contentType = response.headers['content-type'];
        if (!contentType || !contentType.startsWith('image/')) {
          throw new Error(`URL did not return a valid image: ${url}, content-type: ${contentType}`);
        }
        
        const imageBuffer = Buffer.from(response.data, 'binary');
        console.log('[DEBUG] Buffer.isBuffer(imageBuffer):', Buffer.isBuffer(imageBuffer), 'length:', imageBuffer.length);
        if (!imageBuffer || imageBuffer.length === 0) {
          throw new Error(`Empty image data received from URL: ${url}`);
        }

        // Determine format based on content type
        let format = 'jpeg'; // Default
        let fileExtension = '.jpg'; // Default
        
        if (contentType === 'image/png') {
          format = 'png';
          fileExtension = '.png';
        } else if (contentType === 'image/gif') {
          format = 'gif';
          fileExtension = '.gif';
        } else if (contentType === 'image/webp') {
          format = 'webp';
          fileExtension = '.webp';
        }

        // Compress the image using format-specific settings
        const compressedBuffer = await compressImage(imageBuffer, 800, 800, 70, format);

        // Validar que el buffer es realmente un Buffer
        console.log('[DEBUG] Buffer.isBuffer(compressedBuffer):', Buffer.isBuffer(compressedBuffer));
        console.log('[DEBUG] compressedBuffer length:', compressedBuffer?.length);

        // Generate a unique filename (using timestamp and a random string)
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}${fileExtension}`;
        console.log(`[DEBUG] Subida de imagen: filename=${fileName}, mimetype=${contentType}, bufferLength=${compressedBuffer?.length}`);

        // Upload the compressed image to Firebase Storage and get its public URL
        let newUrl;
        try {
          newUrl = await uploadImageToStorage(fileName, compressedBuffer, contentType);
          console.log(`[DEBUG] Imagen subida correctamente: ${newUrl}`);
        } catch (err) {
          console.error('[DEBUG] Error en uploadImageToStorage:', {
            fileName,
            mimetype: contentType,
            bufferType: typeof compressedBuffer,
            bufferLength: compressedBuffer?.length,
            error: err
          });
          throw err;
        }

        processedUrls.push(newUrl);
      } catch (imageError) {
        console.error('Error processing image URL:', imageError);
        return res.apiValidationError([{
          field: 'images',
          code: 'INVALID_URL',
          messageKey: 'pets.images.processing_error'
        }], 'pets.create.image_processing_failed', { 
          url,
          originalError: imageError.message
        });
      }
    }

    // Replace the petData images array with the processed Firebase Storage URLs
    petData.images = processedUrls;
    
    // Add user ID from authenticated user
    if (req.user && req.user.uid) {
      petData.userId = req.user.uid;
    }
    console.log('[createPet] Datos finales a guardar:', petData);
    // Create the pet record in Firestore
    try {
      const newPet = await petModel.createPet(petData);
      console.log('[createPet] Mascota creada:', newPet);
      res.apiCreated(newPet, 'pets.create.success', {}, { petName: petData.name });
    } catch (err) {
      console.error('[createPet] Error creando mascota:', err);
      res.apiServerError('pets.create.database_error', { 
        originalError: err.message || 'Unknown error occurred'
      });
      }
  } catch (error) {
    console.error('[createPet] Error general:', error);
    res.apiServerError('pets.create.internal_error', { 
      originalError: error.message 
    });
  }
};

/**
 * Get all pets with optional filtering and sorting
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getPets = async (req, res) => {
    // Extract filter and pagination parameters
    const { 
      species, status, breed, visibility,
      page = 1, 
      limit = 10, 
      sort = 'createdAt'
    } = req.query;
    
    // Build filter object
    const filters = {};
    if (species) filters.species = species;
    if (status) filters.status = status;
    if (breed) filters.breed = breed;
    if (visibility) filters.visibility = visibility;
    
    // Multitenancy: filter by organizationId when provided
    // Super admins can still be scoped to a specific organization via header
    if (req.organizationId) {
      filters.organizationId = req.organizationId;
    }
    
    // Parse pagination parameters
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    
    // Determine if user can see hidden pets (admins and moderators)
    const includeHidden = req.user.role === 'admin' || req.user.role === 'moderator' || req.user.isSuperAdmin;
    
    // Call the model with filter, pagination and sorting options
    try {
      const pets = await petModel.getPetsWithFilters(filters, pageNumber, pageSize, sort, includeHidden);
      res.apiList(pets, 'pets.list.success', { 
        count: pets.length,
        page: pageNumber,
        limit: pageSize
      });
    } catch (err) {
      console.error('Error retrieving pets:', err);
      res.apiServerError('pets.list.internal_error', { 
        originalError: err.message 
      });
        }
};

exports.getPetById = async (req, res) => {
    const { id } = req.params;
    // Multitenancy: ensure pet belongs to org unless super admin
    if (!req.user.isSuperAdmin && req.organizationId) {
      // petModel.getPetById should check org context
    }
    console.log(`[getPetById] Attempting to retrieve pet with ID: ${id}`);
    
    try {
      const pet = await petModel.getPetById(id);
      console.log(`[getPetById] Successfully retrieved pet ID ${id}`);
      res.apiSuccess(pet, 'pets.get.success', {}, { petId: id });
    } catch (err) {
            console.error(`[getPetById] Error retrieving pet ID ${id}:`, err);
            if (err.message === 'Pet not found') {
                return res.apiNotFound('pets.get.not_found');
            }
      res.apiServerError('pets.get.internal_error', { 
        originalError: err.message 
      });
        }
};

exports.updatePet = async (req, res) => {
    const { id } = req.params;
    const petData = req.body;
    // Multitenancy: ensure pet belongs to org unless super admin
    if (!req.user.isSuperAdmin && req.organizationId) {
      // petModel.getPetById should check org context
    }
    
    // Validate data types for critical fields if they are being updated
    if (petData.age !== undefined && (isNaN(petData.age) || petData.age < 0)) {
      return res.apiValidationError([{
        field: 'age',
        code: 'INVALID_NUMBER',
        messageKey: 'pets.age.invalid'
      }], 'pets.update.validation_failed');
    }
    
    // Validate images array if it's being updated
    if (petData.images !== undefined) {
      if (!Array.isArray(petData.images) || petData.images.length === 0) {
        return res.apiValidationError([{
          field: 'images',
          code: 'REQUIRED_ARRAY',
          messageKey: 'pets.images.required'
        }], 'pets.update.validation_failed');
      }
    }
    
    // Validate status if it's being updated
    if (petData.status !== undefined) {
      const validStatuses = ['available', 'adopted', 'lost', 'found'];
      if (!validStatuses.includes(petData.status)) {
        return res.apiValidationError([{
          field: 'status',
          code: 'INVALID_VALUE',
          messageKey: 'pets.status.invalid'
        }], 'pets.update.validation_failed', {
          validStatuses
        });
      }
    }
    
    // Validate visibility if it's being updated
    if (petData.visibility !== undefined) {
      const validVisibility = ['visible', 'hidden', 'featured'];
      if (!validVisibility.includes(petData.visibility)) {
        return res.apiValidationError([{
          field: 'visibility',
          code: 'INVALID_VALUE',
          messageKey: 'pets.visibility.invalid'
        }], 'pets.update.validation_failed', {
          validVisibility
        });
      }
    }
    
    try {
      const updatedPet = await petModel.updatePet(id, petData);
      res.apiSuccess(updatedPet, "pets.update.success", {}, { petId: id });
    } catch (err) {
      console.error('Error updating pet:', err);
      res.apiServerError("pets.update.internal_error");
        }
};

exports.deletePet = async (req, res) => {
    const { id } = req.params;
    // Multitenancy: ensure pet belongs to org unless super admin
    if (!req.user.isSuperAdmin && req.organizationId) {
      // petModel.getPetById should check org context
    }
    try {
      await petModel.deletePet(id);
        res.apiSuccess({ message: `Pet ${id} deleted` });
    } catch (err) {
      console.error('Error deleting pet:', err);
      res.apiServerError({ error: 'Error deleting pet' });
    }
};

/**
 * Search pets based on query parameters
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.searchPets = async (req, res) => {
    // Extract search parameters
    const { 
        name, species, status, breed, visibility,
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
    if (visibility) searchCriteria.visibility = visibility;
    
    // Multitenancy: filter by organizationId when provided
    // Super admins can still be scoped to a specific organization via header
    if (req.organizationId) {
      searchCriteria.organizationId = req.organizationId;
    }
    
    // Parse pagination parameters
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    
    // Determine if user can see hidden pets (admins and moderators)
    const includeHidden = req.user?.role === 'admin' || req.user?.role === 'moderator' || req.user?.isSuperAdmin;
    
    // Call the model with search criteria
    try {
      const pets = await petModel.searchPets(searchCriteria, pageNumber, pageSize, sort, includeHidden);
        res.apiSuccess({
            results: pets,
            pagination: {
                page: pageNumber,
                limit: pageSize,
                total: pets.length, // In a production app, this would be a separate count query
                hasMore: pets.length === pageSize // Simple check if there might be more results
            }
        });
    } catch (err) {
      console.error('Error searching pets:', err);
      res.apiServerError({ 
        error: 'Error searching pets', 
        details: err.message 
    });
    }
};

exports.updatePetImage = async (req, res) => {
  try {
    const petId = req.params.id;
    const pet = req.resourceObj; // Now provided by the loadPetResource middleware
    
    // Ensure a file is provided (via multer)
    if (!req.file) {
      return res.apiValidationError([{field: "general", code: "INVALID", messageKey: "pets.validation.error"}], "pets.validation.failed", { error: 'No image file provided' });
    }
    
    // Compress the image using Sharp (our utility function)
    const compressedBuffer = await compressImage(req.file.buffer, 800, 800, 70);
    
    // Create a unique filename
    const fileName = `${petId}_${Date.now()}.jpg`;
    
    // Upload the compressed image to Firebase Storage
    const imageUrl = await uploadImageToStorage(fileName, compressedBuffer, req.file.mimetype);
    
    // Update the pet record by merging this new image URL with existing ones
    try {
      const updatedPet = await petModel.updatePetImages(petId, [imageUrl]);
      res.apiSuccess({
        message: 'Image uploaded and pet record updated successfully',
        pet: updatedPet,
        imageUrl: imageUrl
      });
    } catch (err) {
      console.error('Error updating pet record:', err);
      res.apiServerError({ error: 'Error updating pet record', details: err.message });
    }
  } catch (error) {
    console.error('Error in updatePetImage:', error);
    res.apiServerError({ error: 'Failed to process image upload', details: error.message });
  }
};


exports.updatePetMultipleImages = async (req, res) => {
  try {
    const petId = req.params.id;
    const pet = req.resourceObj; // Now provided by the loadPetResource middleware
    
    if (!req.files || req.files.length === 0) {
      return res.apiValidationError([{field: "general", code: "INVALID", messageKey: "pets.validation.error"}], "pets.validation.failed", { error: 'No image files provided' });
    }
    
    const uploadedUrls = [];
    
    for (const file of req.files) {
      const compressedBuffer = await compressImage(file.buffer, 800, 800, 70);
      const fileName = `${petId}_${Date.now()}_${Math.random().toString(36).substring(2,8)}.jpg`;
      const imageUrl = await uploadImageToStorage(fileName, compressedBuffer, file.mimetype);
      uploadedUrls.push(imageUrl);
    }
    
    // Merge new image URLs with the existing images in the pet record
    try {
      const updatedPet = await petModel.updatePetImages(petId, uploadedUrls);
      res.apiSuccess({
        message: 'Images uploaded and pet record updated successfully',
        pet: updatedPet,
        imageUrls: uploadedUrls
      });
    } catch (err) {
      console.error('Error updating pet images:', err);
      res.apiServerError({ error: 'Error updating pet images', details: err.message });
    }
  } catch (error) {
    console.error('Error in updatePetMultipleImages:', error);
    res.apiServerError({ error: 'Failed to process multiple image upload', details: error.message });
  }
};

exports.removePetImage = async (req, res) => {
  const petId = req.params.id;
  const { imageUrl } = req.body;
  
  try {
    const updatedPet = await petModel.removePetImage(petId, imageUrl);
    res.apiSuccess({
      message: 'Image removed successfully',
      pet: updatedPet
    });
  } catch (err) {
      if (err.message.includes('A pet record must have at least one image')) {
        return res.apiValidationError([{field: "general", code: "INVALID", messageKey: "pets.validation.error"}], "pets.validation.failed", { 
          error: 'Cannot remove the last image', 
          details: err.message 
        });
      }
      return res.apiServerError({ 
        error: 'Error removing pet image', 
        details: err.message 
      });
    }
};

exports.createPetFromUrls = async (req, res) => {
  try {
    const petData = req.body;
    
    // Validate that an array of external image URLs is provided
    if (!petData.images || !Array.isArray(petData.images) || petData.images.length === 0) {
      return res.apiValidationError([{field: "general", code: "INVALID", messageKey: "pets.validation.error"}], "pets.validation.failed", { error: 'At least one image URL must be provided in petData.images' });
    }
    
    const processedUrls = [];
    
    // Process each external image URL
    for (const url of petData.images) {
      // Download the image
      const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 5000 });
      const imageBuffer = Buffer.from(response.data, 'binary');
      console.log('[DEBUG] Buffer.isBuffer(imageBuffer):', Buffer.isBuffer(imageBuffer), 'length:', imageBuffer.length);
      
      // Compress the image using Sharp (via our utility function)
      const compressedBuffer = await compressImage(imageBuffer, 800, 800, 70);
      console.log('[DEBUG] Buffer.isBuffer(compressedBuffer):', Buffer.isBuffer(compressedBuffer), 'length:', compressedBuffer.length);
      
      // Generate a unique filename (using a timestamp and random string)
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.jpg`;
      
      // Upload the compressed image to Firebase Storage
      const newUrl = await uploadImageToStorage(fileName, compressedBuffer, response.headers['content-type']);
      
      processedUrls.push(newUrl);
    }
    
    // Replace the images field in petData with the new Firebase Storage URLs
    petData.images = processedUrls;
    
    // Create the pet record in Firestore
    try {
      const newPet = await petModel.createPet(petData);
      res.apiCreated(newPet);
    } catch (err) {
      console.error('Error creating pet record:', err);
      res.apiServerError({ error: 'Error creating pet record', details: err.message });
    }
  } catch (error) {
    console.error('Error in createPetFromUrls:', error);
    res.apiServerError({ error: 'Failed to create pet from URLs', details: error.message });
  }
};

/**
 * Hide a pet (set visibility to 'hidden')
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.hidePet = async (req, res) => {
  const { id } = req.params;
  
  try {
    const updatedPet = await petModel.updatePet(id, { visibility: 'hidden' });
    res.apiSuccess({
      message: 'Pet hidden successfully',
      pet: updatedPet
    });
  } catch (err) {
    console.error('Error hiding pet:', err);
    if (err.message === 'Pet not found') {
      return res.apiNotFound({ error: 'Pet not found' });
    }
    res.apiServerError({ error: 'Error hiding pet', details: err.message });
  }
};

/**
 * Show a pet (set visibility to 'visible')
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.showPet = async (req, res) => {
  const { id } = req.params;
  
  try {
    const updatedPet = await petModel.updatePet(id, { visibility: 'visible' });
    res.apiSuccess({
      message: 'Pet is now visible',
      pet: updatedPet
    });
  } catch (err) {
    console.error('Error showing pet:', err);
    if (err.message === 'Pet not found') {
      return res.apiNotFound({ error: 'Pet not found' });
    }
    res.apiServerError({ error: 'Error showing pet', details: err.message });
  }
};

/**
 * Feature a pet (set visibility to 'featured')
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.featurePet = async (req, res) => {
  const { id } = req.params;
  
  try {
    const updatedPet = await petModel.updatePet(id, { visibility: 'featured' });
    res.apiSuccess({
      message: 'Pet is now featured',
      pet: updatedPet
    });
  } catch (err) {
    console.error('Error featuring pet:', err);
    if (err.message === 'Pet not found') {
      return res.apiNotFound({ error: 'Pet not found' });
    }
    res.apiServerError({ error: 'Error featuring pet', details: err.message });
  }
};