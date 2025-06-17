// controllers/messageController.js
const { messageModel, conversationModel, membershipModel } = require('../models/adapter');

exports.createMessage = async (req, res) => {
  try {
    const messageData = req.body;
    
    // Multitenancy: Verify conversation belongs to the organization context
    if (!messageData.conversationId) {
      return res.error('messages.conversation_id_required', 400);
    }
    
    // Get conversation to check context and permissions
    const conversation = await conversationModel.getConversationById(messageData.conversationId);
    
    if (!conversation) {
      return res.notFound('conversations.not_found');
    }
    
    // Super admin can send messages in any conversation
    if (!req.user.isSuperAdmin) {
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.forbidden('messages.forbidden_send_outside_organization');
      }
      
      // Check if user is a participant in the conversation
      if (!conversation.participants.includes(req.user.uid)) {
        return res.forbidden('messages.forbidden_send_not_participant');
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
    res.created('messages.sent', newMessage);
    
  } catch (error) {
    console.error('Error creating message:', error);
    
    // Handle specific validation errors as 400 Bad Request
    if (error.message === 'Message must have content or attachments' ||
        error.message === 'Sender ID is required' ||
        error.message === 'Conversation ID is required') {
      return res.error('messages.validation_error', 400, { error: error.message });
    }
    
    // Handle all other errors as 500 Internal Server Error
    res.serverError('messages.error_creating', { error: error.message });
  }
};

exports.getMessagesByConversation = async (req, res) => {
  try {
    // Support both parameter names: 'id' (from /conversations/:id/messages) and 'conversationId' (legacy)
    const conversationId = req.params.id || req.params.conversationId;
    
    if (!conversationId) {
      return res.error('conversations.id_required', 400);
    }
    
    // Get conversation to check access
    const conversation = await conversationModel.getConversationById(conversationId);
    
    if (!conversation) {
      return res.notFound('conversations.not_found');
    }
    
    // Super admin can access any conversation
    if (!req.user.isSuperAdmin) {
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.forbidden('messages.forbidden_access_outside_organization');
      }
      
      // Check if user is a participant in the conversation
      if (!conversation.participants.includes(req.user.uid)) {
        return res.forbidden('messages.forbidden_view_not_participant');
      }
    }
    
    // Get messages for the conversation
    const messages = await messageModel.getMessagesByConversation(conversationId);
    res.list(messages);
    
  } catch (error) {
    console.error('Error getting messages by conversation:', error);
    res.serverError('messages.error_retrieving', { error: error.message });
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
        return res.notFound('conversations.not_found');
      }
      
      // Organization context validation
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.forbidden('messages.forbidden_access_outside_organization');
      }
      
      // Check if user is a participant
      if (!conversation.participants.includes(req.user.uid)) {
        return res.forbidden('messages.forbidden_view_not_participant');
      }
    }
    
    // Get messages with filters
    const messages = await messageModel.getMessages(filters);
    res.list(messages);
    
  } catch (error) {
    console.error('Error getting messages:', error);
    res.serverError('messages.error_retrieving', { error: error.message });
  }
};

exports.getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format (basic UUID check)
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.error('messages.invalid_id_format', 400);
    }
    
    // Get the message
    const message = await messageModel.getMessageById(id);
    
    if (!message) {
      return res.notFound('messages.not_found');
    }
    
    // Super admin can access any message
    if (req.user.isSuperAdmin) {
      return res.data(message);
    }
    
    // Organization context validation
    if (req.organizationId && message.organizationId !== req.organizationId) {
      return res.forbidden('messages.forbidden_access_outside_organization');
    }
    
    // Check if user is a participant in the conversation
    const conversation = await conversationModel.getConversationById(message.conversationId);
    
    if (!conversation) {
      return res.notFound('conversations.not_found');
    }
    
    if (!conversation.participants.includes(req.user.uid)) {
      return res.forbidden('messages.forbidden_view_message');
    }
    
    res.data(message);
    
  } catch (error) {
    console.error('Error getting message by ID:', error);
    res.serverError('messages.error_retrieving', { error: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format (basic UUID check)
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.error('messages.invalid_id_format', 400);
    }
    
    // Get the message to check permissions
    const message = await messageModel.getMessageById(id);
    
    if (!message) {
      return res.notFound('messages.not_found');
    }
    
    // Super admin can delete any message
    if (req.user.isSuperAdmin) {
      const result = await messageModel.deleteMessage(id);
      return res.deleted('messages.deleted', result);
    }
    
    // Organization context validation
    if (req.organizationId && message.organizationId !== req.organizationId) {
      return res.forbidden('messages.forbidden_delete_outside_organization');
    }
    
    // Users can delete their own messages
    if (message.senderId === req.user.uid) {
      const result = await messageModel.deleteMessage(id);
      return res.deleted('messages.deleted', result);
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
        return res.forbidden('messages.forbidden_delete_permission');
      }
      
      const result = await messageModel.deleteMessage(id);
      return res.deleted('messages.deleted', result);
    } else {
      // Without org context, only allow global admin or message sender
      if (req.user.role === 'admin') {
        const result = await messageModel.deleteMessage(id);
        return res.deleted('messages.deleted', result);
      } else {
        return res.forbidden('messages.forbidden_delete_own_only');
      }
    }
    
  } catch (error) {
    console.error('Error deleting message:', error);
    res.serverError('messages.error_deleting', { error: error.message });
  }
};

// Nueva función: Update Message
exports.updateMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    // Validate ID format
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.error('messages.invalid_id_format', 400);
    }
    
    // Get the message to check permissions
    const message = await messageModel.getMessageById(id);
    
    if (!message) {
      return res.notFound('messages.not_found');
    }
    
    // Super admin can update any message
    if (req.user.isSuperAdmin) {
      const updatedMessage = await messageModel.updateMessage(id, updateData);
      return res.updated('messages.updated', updatedMessage);
    }
    
    // Organization context validation
    if (req.organizationId && message.organizationId !== req.organizationId) {
      return res.forbidden('messages.forbidden_update_outside_organization');
    }
    
    // Only the sender can update their own message
    if (message.senderId !== req.user.uid) {
      return res.forbidden('messages.forbidden_update_not_sender');
    }
    
    // Update the message
    const updatedMessage = await messageModel.updateMessage(id, updateData);
    res.updated('messages.updated', updatedMessage);
    
  } catch (error) {
    console.error('Error updating message:', error);
    res.serverError('messages.error_updating', { error: error.message });
  }
};

// Nueva función: Soft Delete Message
exports.softDeleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.error('messages.invalid_id_format', 400);
    }
    
    // Get the message to check permissions
    const message = await messageModel.getMessageById(id);
    
    if (!message) {
      return res.notFound('messages.not_found');
    }
    
    // Super admin can soft delete any message
    if (req.user.isSuperAdmin) {
      const result = await messageModel.softDeleteMessage(id, req.user.uid);
      return res.updated('messages.soft_deleted', result);
    }
    
    // Organization context validation
    if (req.organizationId && message.organizationId !== req.organizationId) {
      return res.forbidden('messages.forbidden_soft_delete_outside_organization');
    }
    
    // Users can soft delete their own messages
    if (message.senderId === req.user.uid) {
      const result = await messageModel.softDeleteMessage(id, req.user.uid);
      return res.updated('messages.soft_deleted', result);
    }
    
    // Organization moderators can soft delete messages in their organization
    if (req.organizationId) {
      const isModerator = await new Promise((resolve, reject) => {
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'moderator', (err, isMod) => {
          if (err) reject(err);
          else resolve(isMod);
        });
      });
      
      if (!isModerator) {
        return res.forbidden('messages.forbidden_soft_delete_permission');
      }
      
      const result = await messageModel.softDeleteMessage(id, req.user.uid);
      return res.updated('messages.soft_deleted', result);
    } else {
      return res.forbidden('messages.forbidden_soft_delete_own_only');
    }
    
  } catch (error) {
    console.error('Error soft deleting message:', error);
    res.serverError('messages.error_soft_deleting', { error: error.message });
  }
};

// Nueva función: Moderate Message
exports.moderateMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { action, reason } = req.body;
    
    // Validate ID format
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.error('messages.invalid_id_format', 400);
    }
    
    // Validate moderation action
    const validActions = ['approve', 'reject', 'flag', 'unflag', 'hide', 'unhide'];
    if (!action || !validActions.includes(action)) {
      return res.error('messages.invalid_moderation_action', 400);
    }
    
    // Get the message to check permissions
    const message = await messageModel.getMessageById(id);
    
    if (!message) {
      return res.notFound('messages.not_found');
    }
    
    // Only super admin or moderator/admin can moderate messages
    let canModerate = req.user.isSuperAdmin || req.user.role === 'admin';
    
    if (!canModerate && req.organizationId) {
      // Check if user is org moderator or admin with Promise-based approach
      try {
        const [isModerator, isAdmin] = await Promise.all([
          new Promise((resolve, reject) => {
            membershipModel.checkUserRole(req.user.uid, req.organizationId, 'moderator', (err, isMod) => {
              if (err) reject(err);
              else resolve(isMod);
            });
          }),
          new Promise((resolve, reject) => {
            membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
              if (err) reject(err);
              else resolve(isAdmin);
            });
          })
        ]);
        
        canModerate = isModerator || isAdmin;
      } catch (roleCheckError) {
        console.error('Error checking user roles:', roleCheckError);
        return res.serverError('messages.error_checking_permissions', { error: roleCheckError.message });
      }
    }
    
    if (!canModerate) {
      return res.forbidden('messages.forbidden_moderate_permission');
    }
    
    // Organization context validation for non-super admins
    if (!req.user.isSuperAdmin && req.organizationId && message.organizationId !== req.organizationId) {
      return res.forbidden('messages.forbidden_moderate_outside_organization');
    }
    
    // Moderate the message
    const moderationData = {
      action,
      reason,
      moderatedBy: req.user.uid,
      moderatedAt: new Date()
    };
    
    const result = await messageModel.moderateMessage(id, moderationData);
    res.updated('messages.moderated', result);
    
  } catch (error) {
    console.error('Error moderating message:', error);
    res.serverError('messages.error_moderating', { error: error.message });
  }
};
