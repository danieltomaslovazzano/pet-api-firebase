// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const { verifyToken } = require('../middlewares/auth');
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

// Protected endpoint with validation
router.post('/', verifyToken, validateCreatePet, petController.createPet);
router.put('/:id', verifyToken, validatePetId, validateUpdatePet, petController.updatePet);
router.delete('/:id', verifyToken, validatePetId, petController.deletePet);

// Endpoints for file upload with validation
router.put('/:id/image', verifyToken, validatePetId, upload.single('image'), petController.updatePetImage);
router.put('/:id/images/multiple', verifyToken, validatePetId, upload.array('images', 10), petController.updatePetMultipleImages);
router.delete('/:id/images', verifyToken, validatePetId, validatePetImage, petController.removePetImage);

module.exports = router;
