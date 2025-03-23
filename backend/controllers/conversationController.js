/* controllers/conversationController.js */
const conversationModel = require('../models/conversationModel');

exports.createConversation = (req, res) => {
  const conversationData = req.body; // Se espera { participants: [ 'userId1', 'userId2', ... ] }
  conversationModel.createConversation(conversationData, (err, conversation) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating conversation', details: err.message });
    }
    res.status(201).json(conversation);
  });
};

exports.getConversationById = (req, res) => {
  const { id } = req.params;
  conversationModel.getConversationById(id, (err, conversation) => {
    if (err) {
      return res.status(404).json({ error: 'Conversation not found', details: err.message });
    }
    res.status(200).json(conversation);
  });
};

exports.getConversationsForUser = (req, res) => {
  const { userId } = req.params;
  conversationModel.getConversationsForUser(userId, (err, conversations) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving conversations', details: err.message });
    }
    res.status(200).json(conversations);
  });
};

exports.softDeleteConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId; // Se espera que el body incluya el userId
  conversationModel.softDeleteConversation(id, userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error soft deleting conversation', details: err.message });
    }
    res.status(200).json(result);
  });
};

exports.permanentDeleteConversation = (req, res) => {
  const { id } = req.params;
  conversationModel.permanentDeleteConversation(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error permanently deleting conversation', details: err.message });
    }
    res.status(200).json(result);
  });
};

exports.hideConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId;
  conversationModel.hideConversation(id, userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error hiding conversation', details: err.message });
    }
    res.status(200).json(result);
  });
};

exports.unhideConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId;
  conversationModel.unhideConversation(id, userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error un-hiding conversation', details: err.message });
    }
    res.status(200).json(result);
  });
};

exports.blockConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId;
  conversationModel.blockConversation(id, userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error blocking conversation', details: err.message });
    }
    res.status(200).json(result);
  });
};

exports.unblockConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId;
  conversationModel.unblockConversation(id, userId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error unblocking conversation', details: err.message });
    }
    res.status(200).json(result);
  });
};
