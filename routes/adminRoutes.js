// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyToken } = require('../middlewares/auth');
const { checkRoles } = require('../middlewares/role');

// Apply authentication middleware globally
router.use(verifyToken);

// Endpoints accessible by moderators and admins
router.get('/pets', checkRoles(['moderator', 'admin']), adminController.getAllPets);
router.put('/pets/:id', checkRoles(['moderator', 'admin']), adminController.updatePet);
router.put('/users/:id', checkRoles(['moderator', 'admin']), adminController.updateUser);
router.delete('/users/:id', checkRoles(['moderator', 'admin']), adminController.deleteUser);

// Endpoint to update user role (accessible only by admins)
router.put('/roles/:id', checkRoles(['admin']), adminController.updateUserRole);

module.exports = router;
