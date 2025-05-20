// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { requireAuth } = require('../middlewares');

// Aplicar middleware de autenticación a todas las rutas
router.use(requireAuth);

// GET /users - Obtener todos los usuarios
router.get('/', userController.getUsers);

// POST /users - Crear un nuevo usuario
router.post('/', userController.createUser);

// GET /users/:id - Obtener un usuario específico
router.get('/:id', userController.getUserById);

// PUT /users/:id - Actualizar un usuario
router.put('/:id', userController.updateUser);

// DELETE /users/:id - Eliminar un usuario
router.delete('/:id', userController.deleteUser);

// POST /users/:id/block - Bloquear a un usuario
router.post('/:id/block', userController.blockUser);

// POST /users/:id/unblock - Desbloquear a un usuario
router.post('/:id/unblock', userController.unblockUser);

// GET /users/:id/organizations - Obtener organizaciones del usuario
router.get('/:id/organizations', userController.getUserOrganizations);

// GET /users/me - Obtener el perfil del usuario autenticado
router.get('/me', userController.me);

module.exports = router;