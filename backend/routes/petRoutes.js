// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const { verifyToken } = require('../middlewares/authentication');
const { 
  protectResource, 
  requireAuth, 
  ownerOrAdmin 
} = require('../middlewares');
const { loadPetResource } = require('../middlewares/resourceLoaders');
const { checkPermission } = require('../middlewares/authorization');
const multer = require('multer');
const upload = multer();
const {
  validateCreatePet,
  validateUpdatePet,
  validatePetId,
  validatePetImage,
  validateSearchQuery
} = require('../middlewares/validation/petValidation');

// Search endpoint - must come before /:id to avoid conflict
router.get('/search', validateSearchQuery, petController.searchPets);

// Public endpoints:
router.get('/', petController.getPets);
router.get('/:id', validatePetId, petController.getPetById);

// Protected endpoint with validation and authorization
router.post('/', 
  requireAuth, 
  validateCreatePet, 
  protectResource('pets', 'create'),
  petController.createPet
);

// Fix: Use ownerOrAdmin middleware for resource permission
router.put('/:id', 
  validatePetId, 
  ownerOrAdmin('pets'),
  validateUpdatePet,
  petController.updatePet
);

// Fix: Use ownerOrAdmin middleware for resource permission
router.delete('/:id', 
  validatePetId, 
  ownerOrAdmin('pets'),
  petController.deletePet
);

// Endpoints for file upload with validation and authorization
router.put('/:id/image', 
  validatePetId, 
  ownerOrAdmin('pets'),
  upload.single('image'), 
  petController.updatePetImage
);

router.put('/:id/images/multiple', 
  validatePetId, 
  ownerOrAdmin('pets'),
  upload.array('images', 10), 
  petController.updatePetMultipleImages
);

router.delete('/:id/images', 
  validatePetId, 
  ownerOrAdmin('pets'),
  validatePetImage, 
  petController.removePetImage
);

module.exports = router;
