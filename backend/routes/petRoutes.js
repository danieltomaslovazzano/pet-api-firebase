// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const { verifyToken } = require('../middlewares/auth');
const multer = require('multer');
const upload = multer();

// Public endpoints:
router.get('/', petController.getPets);
// Search endpoint - uses the same controller function as the main listing
router.get('/search', petController.getPets);
router.get('/:id', petController.getPetById);

// Protected endpoint: Create pet record using external image URLs (processed automatically)
router.post('/', verifyToken, petController.createPet);
router.put('/:id', verifyToken, petController.updatePet);
router.delete('/:id', verifyToken, petController.deletePet);

// Endpoints for file upload remain available:
router.put('/:id/image', verifyToken, upload.single('image'), petController.updatePetImage);
// Add POST method for image upload to match test case expectations
router.post('/:id/images', verifyToken, upload.single('image'), petController.updatePetImage);
router.put('/:id/images/multiple', verifyToken, upload.array('images', 10), petController.updatePetMultipleImages);
router.delete('/:id/images', verifyToken, petController.removePetImage);

module.exports = router;
