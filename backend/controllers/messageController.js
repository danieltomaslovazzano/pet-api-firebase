// controllers/messageController.js
const { messageModel, conversationModel, membershipModel } = require('../models/adapter');

exports.createMessage = async (req, res) => {
  try {
    const messageData = req.body;
    
    // Multitenancy: Verify conversation belongs to the organization context
    if (!messageData.conversationId) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "messages.validation.failed"}], "messages.validation.error", { error: 'Conversation ID is required' });
    }
    
    // Get conversation to check context and permissions
    const conversation = await conversationModel.getConversationById(messageData.conversationId);
    
    if (!conversation) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    // Super admin can send messages in any conversation
    if (!req.user.isSuperAdmin) {
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.apiForbidden({ 
          error: 'Forbidden: Cannot send message to conversation outside your organization' 
        });
      }
      
      // Check if user is a participant in the conversation
      if (!conversation.participants.includes(req.user.uid)) {
        return res.apiForbidden({ 
          error: 'Forbidden: You must be a participant to send messages to this conversation' 
        });
      }
    }
    
    // Set organization context from conversation
    messageData.organizationId = conversation.organizationId;
    
    // Set sender ID if not provided
    if (!messageData.senderId) {
      messageData.senderId = req.user.uid;
    }
    
    // Create the message
    const newMessage = await messageModel.createMessage(messageData);
    res.apiCreated(newMessage);
    
  } catch (error) {
    console.error('Error creating message:', error);
    res.apiServerError({ error: 'Error creating message', details: error.message });
  }
};

exports.getMessagesByConversation = async (req, res) => {
  try {
    const { conversationId } = req.params;
    
    // Get conversation to check access
    const conversation = await conversationModel.getConversationById(conversationId);
    
    if (!conversation) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    // Super admin can access any conversation
    if (!req.user.isSuperAdmin) {
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.apiForbidden({ 
          error: 'Forbidden: Cannot access conversation outside your organization' 
        });
      }
      
      // Check if user is a participant in the conversation
      if (!conversation.participants.includes(req.user.uid)) {
        return res.apiForbidden({ 
          error: 'Forbidden: You must be a participant to view messages in this conversation' 
        });
      }
    }
    
    // Get messages for the conversation
    const messages = await messageModel.getMessagesByConversation(conversationId);
    res.apiSuccess(messages);
    
  } catch (error) {
    console.error('Error getting messages by conversation:', error);
    res.apiServerError({ error: 'Error retrieving messages', details: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    // Get query parameters for filtering
    const filters = {
      userId: req.query.userId,
      conversationId: req.query.conversationId,
      status: req.query.status,
      startDate: req.query.startDate,
      endDate: req.query.endDate
    };
    
    // Multitenancy: Add organization context for non-super admins
    if (!req.user.isSuperAdmin && req.organizationId) {
      filters.organizationId = req.organizationId;
    }
    
    // If conversationId is provided, verify access to that conversation
    if (filters.conversationId && !req.user.isSuperAdmin) {
      const conversation = await conversationModel.getConversationById(filters.conversationId);
      
      if (!conversation) {
        return res.apiNotFound({ error: 'Conversation not found' });
      }
      
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.apiForbidden({ 
          error: 'Forbidden: Cannot access conversation outside your organization' 
        });
      }
      
      // Check if user is a participant
      if (!conversation.participants.includes(req.user.uid)) {
        return res.apiForbidden({ 
          error: 'Forbidden: You must be a participant to view messages in this conversation' 
        });
      }
    }
    
    // Get messages with filters
    const messages = await messageModel.getMessages(filters);
    res.apiSuccess(messages);
    
  } catch (error) {
    console.error('Error getting messages:', error);
    res.apiServerError({ error: 'Error retrieving messages', details: error.message });
  }
};

exports.getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format (basic UUID check)
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "messages.validation.failed"}], "messages.validation.error", { error: 'Invalid message ID format' });
    }
    
    // Get the message
    const message = await messageModel.getMessageById(id);
    
    if (!message) {
      return res.apiNotFound({ error: 'Message not found' });
    }
    
    // Super admin can access any message
    if (req.user.isSuperAdmin) {
      return res.apiSuccess(message);
    }
    
    // Organization context validation
    if (req.organizationId && message.organizationId !== req.organizationId) {
      return res.apiForbidden({ 
        error: 'Forbidden: Cannot access message outside your organization' 
      });
    }
    
    // Check if user is a participant in the conversation
    const conversation = await conversationModel.getConversationById(message.conversationId);
    
    if (!conversation) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    if (!conversation.participants.includes(req.user.uid)) {
      return res.apiForbidden({ 
        error: 'Forbidden: You must be a participant to view this message' 
      });
    }
    
    res.apiSuccess(message);
    
  } catch (error) {
    console.error('Error getting message by ID:', error);
    res.apiServerError({ error: 'Error retrieving message', details: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format (basic UUID check)
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "messages.validation.failed"}], "messages.validation.error", { error: 'Invalid message ID format' });
    }
    
    // Get the message to check permissions
    const message = await messageModel.getMessageById(id);
    
    if (!message) {
      return res.apiNotFound({ error: 'Message not found' });
    }
    
    // Super admin can delete any message
    if (req.user.isSuperAdmin) {
      const result = await messageModel.deleteMessage(id);
      return res.apiSuccess(result);
    }
    
    // Organization context validation
    if (req.organizationId && message.organizationId !== req.organizationId) {
      return res.apiForbidden({ 
        error: 'Forbidden: Cannot delete message outside your organization' 
      });
    }
    
    // Users can delete their own messages
    if (message.senderId === req.user.uid) {
      const result = await messageModel.deleteMessage(id);
      return res.apiSuccess(result);
    }
    
    // Organization admins can delete messages in their organization
    if (req.organizationId) {
      const isAdmin = await new Promise((resolve, reject) => {
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err) reject(err);
          else resolve(isAdmin);
        });
      });
      
      if (!isAdmin) {
        return res.apiForbidden({ 
          error: 'Forbidden: Only message sender or organization admin can delete messages' 
        });
      }
      
      const result = await messageModel.deleteMessage(id);
      return res.apiSuccess(result);
    } else {
      // Without org context, only allow global admin or message sender
      if (req.user.role === 'admin') {
        const result = await messageModel.deleteMessage(id);
        return res.apiSuccess(result);
      } else {
        return res.apiForbidden({ 
          error: 'Forbidden: You can only delete your own messages' 
        });
      }
    }
    
  } catch (error) {
    console.error('Error deleting message:', error);
    res.apiServerError({ error: 'Error deleting message', details: error.message });
  }
};
