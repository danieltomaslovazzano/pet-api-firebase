// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { requireAuth } = require('../middlewares');

// Protected endpoints for messages
router.post('/', requireAuth, messageController.createMessage);
router.get('/:conversationId', requireAuth, messageController.getMessagesByConversation);

module.exports = router;
