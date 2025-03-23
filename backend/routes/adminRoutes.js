// routes/adminRoutes.js - Actualización completa del archivo
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const userController = require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Aplicar middleware de autenticación a todas las rutas
router.use(verifyToken);
router.use(isAdmin);

// Rutas de usuarios
router.get('/users', adminController.getAllUsers);
router.get('/users/:id/details', userController.getAdminUserById);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Rutas de roles
router.put('/roles/:id', adminController.updateUserRole);

// Acciones masivas e invitaciones
router.post('/bulk-action', adminController.bulkAction);
router.post('/invite', adminController.inviteUser);

module.exports = router;