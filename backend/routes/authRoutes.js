// routes/authRoutes.js - Actualización completa del archivo
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { requireAuth, requireRole } = require('../middlewares');

// POST /auth/register
router.post('/register', authController.register);

// POST /auth/login
router.post('/login', authController.login);

// POST /auth/logout
router.post('/logout', requireAuth, authController.logout);

// POST /auth/verify-email
router.post('/verify-email', authController.verifyEmail);

// Nuevos endpoints
// POST /auth/reset-password - Enviar correo de reseteo de contraseña
router.post('/reset-password', authController.sendPasswordResetEmail);

// POST /auth/force-logout/:id - Forzar cierre de sesión para un usuario específico
router.post('/force-logout/:id', 
  ...requireRole(['admin', 'moderator']), 
  authController.forceLogout
);

// GET /auth/user-info/:uid - Obtener información adicional de usuarios desde Firebase Auth
router.get('/user-info/:uid', 
  ...requireRole(['admin', 'moderator']), 
  authController.getUserInfo
);

// PUT /auth/user-status/:id - Actualizar estado de la cuenta en Firebase Auth
router.put('/user-status/:id', 
  ...requireRole('admin'), 
  authController.updateUserStatus
);

module.exports = router;