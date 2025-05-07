// controllers/messageController.js
const { messageModel } = require('../models/adapter');

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

exports.getMessages = (req, res) => {
  // Get query parameters for filtering
  const filters = {
    userId: req.query.userId,
    conversationId: req.query.conversationId,
    startDate: req.query.startDate,
    endDate: req.query.endDate
  };

  messageModel.getMessages(filters, (err, messages) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving messages', details: err.message });
    }
    res.status(200).json(messages);
  });
};

exports.getMessageById = (req, res) => {
  const { id } = req.params;
  messageModel.getMessageById(id, (err, message) => {
    if (err) {
      return res.status(404).json({ error: 'Message not found', details: err.message });
    }
    res.status(200).json(message);
  });
};

exports.deleteMessage = (req, res) => {
  const { id } = req.params;
  messageModel.deleteMessage(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error deleting message', details: err.message });
    }
    res.status(200).json(result);
  });
};
