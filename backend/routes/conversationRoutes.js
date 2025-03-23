// routes/conversationRoutes.js
const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');
const { verifyToken } = require('../middlewares/auth');
const { checkRoles } = require('../middlewares/role');

// Create a new conversation (authenticated)
router.post('/', verifyToken, conversationController.createConversation);

// Get a conversation by ID (authenticated)
router.get('/:id', verifyToken, conversationController.getConversationById);

// Get all conversations for a specific user (authenticated)
router.get('/user/:userId', verifyToken, conversationController.getConversationsForUser);

// Soft delete a conversation for a user (authenticated)
router.put('/:id/soft-delete', verifyToken, conversationController.softDeleteConversation);

// Permanent deletion (admin only)
router.delete('/:id', verifyToken, checkRoles(['admin']), conversationController.permanentDeleteConversation);

// Hide (archive) conversation (authenticated)
router.put('/:id/hide', verifyToken, conversationController.hideConversation);
router.put('/:id/unhide', verifyToken, conversationController.unhideConversation);

// Block conversation (only moderators and admins)
router.put('/:id/block', verifyToken, checkRoles(['moderator', 'admin']), conversationController.blockConversation);
router.put('/:id/unblock', verifyToken, checkRoles(['moderator', 'admin']), conversationController.unblockConversation);

module.exports = router;
