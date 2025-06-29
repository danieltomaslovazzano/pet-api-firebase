/* controllers/conversationController.js */
const { conversationModel, membershipModel } = require('../models/adapter');

exports.createConversation = async (req, res) => {
  try {
    const conversationData = req.body;
    
    // Validate participants
    if (!conversationData.participants || !Array.isArray(conversationData.participants) || conversationData.participants.length < 2) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "conversations.validation.failed"}], "conversations.validation.error", { error: 'Participants must be an array with at least two participants' });
    }
    
    // Multitenancy: Set organization context for the conversation
    if (req.organizationId) {
      conversationData.organizationId = req.organizationId;
    }
    
    // If in organization context, verify all participants are members of the organization
    if (req.organizationId && !req.user.isSuperAdmin) {
      // Check all participants belong to the organization
      for (const participantId of conversationData.participants) {
        try {
          const isMember = await new Promise((resolve, reject) => {
            membershipModel.checkUserRole(participantId, req.organizationId, null, (err, isMember) => {
              if (err) reject(err);
              else resolve(isMember);
            });
          });
          
          if (!isMember) {
            return res.apiForbidden({ 
              error: 'Forbidden: All conversation participants must belong to the organization',
              details: `User ${participantId} is not a member of this organization`
            });
          }
        } catch (error) {
          return res.apiServerError({ 
            error: 'Error verifying organization membership', 
            details: error.message 
          });
        }
      }
    }
    
    // Create the conversation
    const conversation = await conversationModel.createConversation(conversationData);
    res.apiCreated(conversation);
    
  } catch (error) {
    console.error('Error creating conversation:', error);
    res.apiServerError({ error: 'Error creating conversation', details: error.message });
  }
};

exports.getConversationById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format (basic UUID check)
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "conversations.validation.failed"}], "conversations.validation.error", { error: 'Invalid conversation ID format' });
    }
    
    // Get the conversation
    const conversation = await conversationModel.getConversationById(id);
    
    if (!conversation) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    // Super admin can access any conversation
    if (req.user.isSuperAdmin) {
      return res.apiSuccess(conversation);
    }
    
    // Org context: check if conversation belongs to this organization
    if (req.organizationId && conversation.organizationId !== req.organizationId) {
      return res.apiForbidden({ 
        error: 'Forbidden: Cannot access conversation outside your organization' 
      });
    }
    
    // Check if user is participant (participants is now an array of IDs)
    const isParticipant = conversation.participants.includes(req.user.uid);
    if (!isParticipant) {
      return res.apiForbidden({ 
        error: 'Forbidden: You must be a participant to view this conversation' 
      });
    }
    
    // User has access, return the conversation
    res.apiSuccess(conversation);
    
  } catch (error) {
    console.error('Error getting conversation by ID:', error);
    res.apiServerError({ error: 'Error retrieving conversation', details: error.message });
  }
};

exports.getConversationsForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Super admin can access any user's conversations
    if (req.user.isSuperAdmin) {
      const orgFilter = req.organizationId || null;
      const conversations = await conversationModel.getConversationsForUser(userId, orgFilter);
      return res.apiSuccess(conversations);
    }
    
    // Users can view their own conversations
    if (req.user.uid === userId) {
      const orgFilter = req.organizationId || null;
      const conversations = await conversationModel.getConversationsForUser(userId, orgFilter);
      return res.apiSuccess(conversations);
    }
    
    // With organization context, check if target user belongs to this org
    if (req.organizationId) {
      const isMember = await new Promise((resolve, reject) => {
        membershipModel.checkUserRole(userId, req.organizationId, null, (err, isMember) => {
          if (err) reject(err);
          else resolve(isMember);
        });
      });
      
      if (!isMember) {
        return res.apiForbidden({ 
          error: 'Forbidden: Cannot access conversations for users outside your organization'
        });
      }
      
      // Check if current user is admin in this org
      const isAdmin = await new Promise((resolve, reject) => {
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err) reject(err);
          else resolve(isAdmin);
        });
      });
      
      if (!isAdmin) {
        return res.apiForbidden({ 
          error: 'Forbidden: Only organization admins can view other users\' conversations'
        });
      }
      
      const conversations = await conversationModel.getConversationsForUser(userId, req.organizationId);
      return res.apiSuccess(conversations);
    } else {
      // Without organization context, only allow admin users
      if (req.user.role === 'admin') {
        const conversations = await conversationModel.getConversationsForUser(userId, null);
        return res.apiSuccess(conversations);
      } else {
        return res.apiForbidden({ 
          error: 'Forbidden: You can only view your own conversations'
        });
      }
    }
    
  } catch (error) {
    console.error('Error getting conversations for user:', error);
    res.apiServerError({ error: 'Error retrieving conversations', details: error.message });
  }
};

exports.softDeleteConversation = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.userId || req.user.uid;
    
    // Get the conversation to check access
    const conversation = await conversationModel.getConversationById(id);
    
    if (!conversation) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    // Super admin can access any conversation
    if (!req.user.isSuperAdmin) {
      // Org context: check if conversation belongs to this organization
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.apiForbidden({ 
          error: 'Forbidden: Cannot access conversation outside your organization' 
        });
      }
      
      // Check if user is participant (participants is now an array of IDs)
      const isParticipant = conversation.participants.includes(userId);
      if (!isParticipant) {
        return res.apiForbidden({ 
          error: 'Forbidden: You must be a participant to modify this conversation' 
        });
      }
    }
    
    // Perform soft delete
    const result = await conversationModel.softDeleteConversation(id, userId);
    res.apiSuccess(result);
    
  } catch (error) {
    console.error('Error soft deleting conversation:', error);
    res.apiServerError({ error: 'Error soft deleting conversation', details: error.message });
  }
};

exports.permanentDeleteConversation = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Super admin can delete any conversation
    if (req.user.isSuperAdmin) {
      const result = await conversationModel.permanentDeleteConversation(id);
      return res.apiSuccess(result);
    }
    
    // Get the conversation to check organization and access
    const conversation = await conversationModel.getConversationById(id);
    
    if (!conversation) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    // Org context: check if conversation belongs to this organization
    if (req.organizationId && conversation.organizationId !== req.organizationId) {
      return res.apiForbidden({ 
        error: 'Forbidden: Cannot delete conversation outside your organization' 
      });
    }
    
    // Check if user is admin in this org
    if (req.organizationId) {
      const isAdmin = await new Promise((resolve, reject) => {
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err) reject(err);
          else resolve(isAdmin);
        });
      });
      
      if (!isAdmin) {
        return res.apiForbidden({ 
          error: 'Forbidden: Insufficient permissions to permanently delete conversations'
        });
      }
    } else {
      // Without organization context, only allow global admin
      if (req.user.role !== 'admin') {
        return res.apiForbidden({ 
          error: 'Forbidden: Insufficient permissions to permanently delete conversations'
        });
      }
    }
    
    // Perform permanent delete
    const result = await conversationModel.permanentDeleteConversation(id);
    res.apiSuccess(result);
    
  } catch (error) {
    console.error('Error permanently deleting conversation:', error);
    res.apiServerError({ error: 'Error permanently deleting conversation', details: error.message });
  }
};

// Helper function to check access to a conversation
async function checkConversationAccess(conversationId, userId, req) {
  const conversation = await conversationModel.getConversationById(conversationId);
  
  if (!conversation) {
    const error = new Error('Conversation not found');
    error.statusCode = 404;
    throw error;
  }
  
  // Super admin can access any conversation
  if (req.user.isSuperAdmin) {
    return conversation;
  }
  
  // Org context: check if conversation belongs to this organization
  if (req.organizationId && conversation.organizationId !== req.organizationId) {
    const error = new Error('Forbidden: Cannot access conversation outside your organization');
    error.statusCode = 403;
    throw error;
  }
  
  // Check if user is participant (participants is now an array of IDs)
  const isParticipant = conversation.participants.includes(userId);
  if (!isParticipant) {
    const error = new Error('Forbidden: You must be a participant to modify this conversation');
    error.statusCode = 403;
    throw error;
  }
  
  return conversation;
}

exports.hideConversation = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.userId || req.user.uid;
    
    // Check access to conversation
    await checkConversationAccess(id, userId, req);
    
    // Perform hide operation
    const result = await conversationModel.hideConversation(id, userId);
    
    if (!result) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    res.apiSuccess(result);
    
  } catch (error) {
    console.error('Error hiding conversation:', error);
    if (error.statusCode === 404) {
      return res.apiNotFound('conversations.not_found');
    } else if (error.statusCode === 403) {
      return res.apiForbidden('conversations.hide.forbidden');
    } else {
      return res.apiServerError('conversations.hide.error');
    }
  }
};

exports.unhideConversation = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.userId || req.user.uid;
    
    // Check access to conversation
    await checkConversationAccess(id, userId, req);
    
    // Perform unhide operation
    const result = await conversationModel.unhideConversation(id, userId);
    
    if (!result) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    res.apiSuccess(result);
    
  } catch (error) {
    console.error('Error unhiding conversation:', error);
    if (error.statusCode === 404) {
      return res.apiNotFound('conversations.not_found');
    } else if (error.statusCode === 403) {
      return res.apiForbidden('conversations.unhide.forbidden');
    } else {
      return res.apiServerError('conversations.unhide.error');
    }
  }
};

exports.blockConversation = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.userId || req.user.uid;
    
    // Check access to conversation
    await checkConversationAccess(id, userId, req);
    
    // Perform block operation
    const result = await conversationModel.blockConversation(id, userId);
    
    if (!result) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    res.apiSuccess(result);
    
  } catch (error) {
    console.error('Error blocking conversation:', error);
    if (error.statusCode === 404) {
      return res.apiNotFound('conversations.not_found');
    } else if (error.statusCode === 403) {
      return res.apiForbidden('conversations.block.forbidden');
    } else {
      return res.apiServerError('conversations.block.error');
    }
  }
};

exports.unblockConversation = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.userId || req.user.uid;
    
    // Check access to conversation
    await checkConversationAccess(id, userId, req);
    
    // Perform unblock operation
    const result = await conversationModel.unblockConversation(id, userId);
    
    if (!result) {
      return res.apiNotFound({ error: 'Conversation not found' });
    }
    
    res.apiSuccess(result);
    
  } catch (error) {
    console.error('Error unblocking conversation:', error);
    if (error.statusCode === 404) {
      return res.apiNotFound('conversations.not_found');
    } else if (error.statusCode === 403) {
      return res.apiForbidden('conversations.unblock.forbidden');
    } else {
      return res.apiServerError('conversations.unblock.error');
    }
  }
};

exports.getConversations = async (req, res) => {
  try {
    // Get query parameters for filtering
    const filters = {
      userId: req.query.userId,
      status: req.query.status,
      startDate: req.query.startDate,
      endDate: req.query.endDate
    };

    // Multitenancy: Add organization filter for non-super admins
    if (!req.user.isSuperAdmin && req.organizationId) {
      filters.organizationId = req.organizationId;
    }

    const conversations = await conversationModel.getConversations(filters);
    res.apiSuccess(conversations);
    
  } catch (error) {
    console.error('Error getting conversations:', error);
    res.apiServerError({ error: 'Error retrieving conversations', details: error.message });
  }
};
