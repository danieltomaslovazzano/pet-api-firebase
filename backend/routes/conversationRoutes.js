// routes/conversationRoutes.js
const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');
const messageController = require('../controllers/messageController');
const { requireAuth, requireRole } = require('../middlewares');

// Create a new conversation (authenticated)
router.post('/', requireAuth, conversationController.createConversation);

// Get a conversation by ID (authenticated)
router.get('/:id', requireAuth, conversationController.getConversationById);

// Get all messages for a specific conversation (authenticated)
router.get('/:id/messages', requireAuth, messageController.getMessagesByConversation);

// Get all conversations for a specific user (authenticated)
router.get('/user/:userId', requireAuth, conversationController.getConversationsForUser);

// Soft delete a conversation for a user (authenticated)
router.put('/:id/soft-delete', requireAuth, conversationController.softDeleteConversation);

// Permanent deletion (admin only)
router.delete('/:id', ...requireRole('admin'), conversationController.permanentDeleteConversation);

// Hide (archive) conversation (authenticated)
router.put('/:id/hide', requireAuth, conversationController.hideConversation);
router.put('/:id/unhide', requireAuth, conversationController.unhideConversation);

// Block conversation (only moderators and admins)
router.put('/:id/block', ...requireRole(['moderator', 'admin']), conversationController.blockConversation);
router.put('/:id/unblock', ...requireRole(['moderator', 'admin']), conversationController.unblockConversation);

module.exports = router;
