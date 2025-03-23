// controllers/messageController.js
const messageModel = require('../models/messageModel');

exports.createMessage = (req, res) => {
  const messageData = req.body;
  messageModel.createMessage(messageData, (err, newMessage) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating message', details: err.message });
    }
    res.status(201).json(newMessage);
  });
};

exports.getMessagesByConversation = (req, res) => {
  const { conversationId } = req.params;
  messageModel.getMessagesByConversation(conversationId, (err, messages) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving messages', details: err.message });
    }
    res.status(200).json(messages);
  });
};
