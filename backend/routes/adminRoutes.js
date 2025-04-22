// routes/adminRoutes.js - Actualización completa del archivo
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const userController = require('../controllers/userController');
const organizationController = require('../controllers/organizationController');
const conversationController = require('../controllers/conversationController');
const messageController = require('../controllers/messageController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

// Aplicar middleware de autenticación a todas las rutas
router.use(verifyToken);
router.use(isAdmin);

// Rutas de usuarios
router.get('/users', adminController.getAllUsers);
router.post('/users', adminController.createUser);
router.get('/users/:id/details', userController.getAdminUserById);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Rutas de roles
router.put('/roles/:id', adminController.updateUserRole);

// Rutas de organizaciones
router.get('/organizations', organizationController.getOrganizations);
router.post('/organizations', organizationController.createOrganization);
router.get('/organizations/:id', organizationController.getOrganizationById);
router.put('/organizations/:id', organizationController.updateOrganization);
router.delete('/organizations/:id', organizationController.deleteOrganization);

// Rutas de conversaciones
router.get('/conversations', conversationController.getConversations);
router.post('/conversations', conversationController.createConversation);
router.get('/conversations/:id', conversationController.getConversationById);
router.delete('/conversations/:id', conversationController.permanentDeleteConversation);

// Rutas de mensajes
router.get('/messages', messageController.getMessages);
router.post('/messages', messageController.createMessage);
router.get('/messages/:id/details', messageController.getMessageById);
router.get('/messages/conversation/:conversationId', messageController.getMessagesByConversation);
router.delete('/messages/:id', messageController.deleteMessage);

// Acciones masivas e invitaciones
router.post('/bulk-action', adminController.bulkAction);
router.post('/invite', adminController.inviteUser);

module.exports = router;