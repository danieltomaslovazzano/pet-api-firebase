// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { requireAuth } = require('../middlewares');

// Protected endpoints for messages

// Create a new message
router.post('/', requireAuth, messageController.createMessage);

// Get all messages (with optional filters) - Admin only
router.get('/', requireAuth, messageController.getMessages);

// Get specific message by ID
router.get('/:id', requireAuth, messageController.getMessageById);

// Update specific message by ID - NUEVA RUTA
router.put('/:id', requireAuth, messageController.updateMessage);

// Delete specific message by ID
router.delete('/:id', requireAuth, messageController.deleteMessage);

// Soft delete specific message by ID - NUEVA RUTA
router.put('/:id/soft-delete', requireAuth, messageController.softDeleteMessage);

// Moderate specific message by ID - NUEVA RUTA
router.put('/:id/moderate', requireAuth, messageController.moderateMessage);

// Get messages by conversation (legacy route - mantener para compatibilidad)
router.get('/conversation/:conversationId', requireAuth, messageController.getMessagesByConversation);

module.exports = router;
