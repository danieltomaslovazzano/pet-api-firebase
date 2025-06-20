// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { requireAuth } = require('../middlewares');

// Protected endpoints for messages
router.post('/', requireAuth, messageController.createMessage);
router.get('/:conversationId', requireAuth, messageController.getMessagesByConversation);
router.get('/message/:id', requireAuth, messageController.getMessageById);
router.put('/:id', requireAuth, messageController.updateMessage);
router.delete('/:id', requireAuth, messageController.deleteMessage);

module.exports = router;
