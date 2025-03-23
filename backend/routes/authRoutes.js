// routes/authRoutes.js - Actualización completa del archivo
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middlewares/auth');
const { checkRoles } = require('../middlewares/role');

// POST /auth/login
router.post('/login', authController.login);

// POST /auth/logout
router.post('/logout', verifyToken, authController.logout);

// Nuevos endpoints
// POST /auth/reset-password - Enviar correo de reseteo de contraseña
router.post('/reset-password', authController.sendPasswordResetEmail);

// POST /auth/force-logout/:id - Forzar cierre de sesión para un usuario específico
router.post('/force-logout/:id', verifyToken, checkRoles(['admin', 'moderator']), authController.forceLogout);

// GET /auth/user-info/:uid - Obtener información adicional de usuarios desde Firebase Auth
router.get('/user-info/:uid', verifyToken, checkRoles(['admin', 'moderator']), authController.getUserInfo);

// PUT /auth/user-status/:id - Actualizar estado de la cuenta en Firebase Auth
router.put('/user-status/:id', verifyToken, checkRoles(['admin']), authController.updateUserStatus);

module.exports = router;