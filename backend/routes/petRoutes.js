// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const { verifyToken } = require('../middlewares/authentication');
const { protectResource, requireAuth } = require('../middlewares');
const multer = require('multer');
const upload = multer();
const {
  validateCreatePet,
  validateUpdatePet,
  validatePetId,
  validatePetImage
} = require('../middlewares/validation/petValidation');

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

// Using the new middleware composition patterns
router.put('/:id', 
  validatePetId, 
  ...protectResource('pets', 'update'),
  validateUpdatePet,
  petController.updatePet
);

router.delete('/:id', 
  validatePetId, 
  ...protectResource('pets', 'delete'),
  petController.deletePet
);

// Endpoints for file upload with validation and authorization
router.put('/:id/image', 
  validatePetId, 
  ...protectResource('pets', 'updateImage'),
  upload.single('image'), 
  petController.updatePetImage
);

router.put('/:id/images/multiple', 
  validatePetId, 
  ...protectResource('pets', 'updateImage'),
  upload.array('images', 10), 
  petController.updatePetMultipleImages
);

router.delete('/:id/images', 
  validatePetId, 
  ...protectResource('pets', 'removeImage'),
  validatePetImage, 
  petController.removePetImage
);

module.exports = router;
