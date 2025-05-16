// controllers/messageController.js
const { messageModel, conversationModel, membershipModel } = require('../models/adapter');

exports.createMessage = (req, res) => {
  const messageData = req.body;
  
  // Multitenancy: Verify conversation belongs to the organization context
  if (!messageData.conversationId) {
    return res.status(400).json({ error: 'Conversation ID is required' });
  }
  
  // Function to check conversation organization context
  const checkConversationContext = () => {
    conversationModel.getConversationById(messageData.conversationId, (err, conversation) => {
      if (err) {
        return res.status(404).json({ error: 'Conversation not found', details: err.message });
      }
      
      // Super admin can send messages in any conversation
      if (req.user.isSuperAdmin) {
        return createMessageRecord();
      }
      
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot send message to conversation outside your organization' 
        });
      }
      
      // Check if user is a participant in the conversation
      if (!conversation.participants.includes(req.user.uid)) {
        return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to send messages to this conversation' 
        });
      }
      
      // Set organization context from conversation
      messageData.organizationId = conversation.organizationId;
      
      // Set sender ID if not provided
      if (!messageData.senderId) {
        messageData.senderId = req.user.uid;
      }
      
      createMessageRecord();
    });
  };
  
  const createMessageRecord = () => {
    messageModel.createMessage(messageData, (err, newMessage) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating message', details: err.message });
      }
      res.status(201).json(newMessage);
    });
  };
  
  checkConversationContext();
};

exports.getMessagesByConversation = (req, res) => {
  const { conversationId } = req.params;
  
  // Multitenancy: Verify access to conversation
  const checkConversationAccess = () => {
    conversationModel.getConversationById(conversationId, (err, conversation) => {
      if (err) {
        return res.status(404).json({ error: 'Conversation not found', details: err.message });
      }
      
      // Super admin can access any conversation
      if (req.user.isSuperAdmin) {
        return fetchMessages();
      }
      
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization' 
        });
      }
      
      // Check if user is a participant in the conversation
      if (!conversation.participants.includes(req.user.uid)) {
        return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to view messages in this conversation' 
        });
      }
      
      fetchMessages();
    });
  };
  
  const fetchMessages = () => {
    messageModel.getMessagesByConversation(conversationId, (err, messages) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving messages', details: err.message });
      }
      res.status(200).json(messages);
    });
  };
  
  checkConversationAccess();
};

exports.getMessages = (req, res) => {
  // Get query parameters for filtering
  const filters = {
    userId: req.query.userId,
    conversationId: req.query.conversationId,
    startDate: req.query.startDate,
    endDate: req.query.endDate
  };
  
  // Multitenancy: Add organization context for non-super admins
  if (!req.user.isSuperAdmin && req.organizationId) {
    filters.organizationId = req.organizationId;
  }
  
  // If conversationId is provided, verify access to that conversation
  if (filters.conversationId && !req.user.isSuperAdmin) {
    conversationModel.getConversationById(filters.conversationId, (err, conversation) => {
      if (err) {
        return res.status(404).json({ error: 'Conversation not found', details: err.message });
      }
      
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization' 
        });
      }
      
      // Check if user is a participant
      if (!conversation.participants.includes(req.user.uid)) {
        return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to view messages in this conversation' 
        });
      }
      
      // Continue with the fetch
      fetchMessages();
    });
  } else {
    fetchMessages();
  }
  
  function fetchMessages() {
    messageModel.getMessages(filters, (err, messages) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving messages', details: err.message });
      }
      res.status(200).json(messages);
    });
  }
};

exports.getMessageById = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Check access to the message
  messageModel.getMessageById(id, (err, message) => {
    if (err) {
      return res.status(404).json({ error: 'Message not found', details: err.message });
    }
    
    // Super admin can access any message
    if (req.user.isSuperAdmin) {
      return res.status(200).json(message);
    }
    
    // Organization context validation
    if (req.organizationId && message.organizationId !== req.organizationId) {
      return res.status(403).json({ 
        error: 'Forbidden: Cannot access message outside your organization' 
      });
    }
    
    // Check if user is a participant in the conversation
    conversationModel.getConversationById(message.conversationId, (err, conversation) => {
      if (err) {
        return res.status(404).json({ error: 'Conversation not found', details: err.message });
      }
      
      if (!conversation.participants.includes(req.user.uid)) {
        return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to view this message' 
        });
      }
      
      res.status(200).json(message);
    });
  });
};

exports.deleteMessage = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Check access rights to delete the message
  messageModel.getMessageById(id, (err, message) => {
    if (err) {
      return res.status(404).json({ error: 'Message not found', details: err.message });
    }
    
    // Check deletion privileges
    const checkDeletionRights = () => {
      // Super admin can delete any message
      if (req.user.isSuperAdmin) {
        return performDelete();
      }
      
      // Organization context validation
      if (req.organizationId && message.organizationId !== req.organizationId) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot delete message outside your organization' 
        });
      }
      
      // Users can delete their own messages
      if (message.senderId === req.user.uid) {
        return performDelete();
      }
      
      // Organization admins can delete messages in their organization
      if (req.organizationId) {
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err || !isAdmin) {
            return res.status(403).json({ 
              error: 'Forbidden: Only message sender or organization admin can delete messages' 
            });
          }
          performDelete();
        });
      } else {
        // Without org context, only allow global admin or message sender
        if (req.user.role === 'admin') {
          performDelete();
        } else {
          return res.status(403).json({ 
            error: 'Forbidden: You can only delete your own messages' 
          });
        }
      }
    };
    
    const performDelete = () => {
      messageModel.deleteMessage(id, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Error deleting message', details: err.message });
        }
        res.status(200).json(result);
      });
    };
    
    checkDeletionRights();
  });
};
