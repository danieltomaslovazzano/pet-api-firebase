
// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { verifyToken } = require('../middlewares/auth');

// Protected endpoints for messages
router.post('/', verifyToken, messageController.createMessage);
router.get('/:conversationId', verifyToken, messageController.getMessagesByConversation);

module.exports = router;
