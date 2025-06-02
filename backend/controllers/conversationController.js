/* controllers/conversationController.js */
const { conversationModel, membershipModel } = require('../models/adapter');

exports.createConversation = async (req, res) => {
  try {
    const conversationData = req.body;
    
    // Validate participants
    if (!conversationData.participants || !Array.isArray(conversationData.participants) || conversationData.participants.length < 2) {
      return res.validationError('conversations.participants_required');
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
            return res.forbidden('conversations.participants_must_belong_to_organization', {
              details: req.t('conversations.participants_must_belong_to_organization', { userId: participantId })
            });
          }
        } catch (error) {
          return res.serverError('conversations.error_verifying_organization_membership', { 
            details: error.message 
          });
        }
      }
    }
    
    // Create the conversation
    const conversation = await conversationModel.createConversation(conversationData);
    res.created(conversation, 'conversations.created');
    
  } catch (error) {
    console.error('Error creating conversation:', error);
    res.serverError('common.error_creating', { details: error.message });
  }
};

exports.getConversationById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID format (basic UUID check)
    if (!id || !id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      return res.validationError('validation.invalid_conversation_id_format');
    }
    
    // Get the conversation
    const conversation = await conversationModel.getConversationById(id);
    
    if (!conversation) {
      return res.notFound('conversations.not_found');
    }
    
    // Super admin can access any conversation
    if (req.user.isSuperAdmin) {
      return res.success(conversation);
    }
    
    // Org context: check if conversation belongs to this organization
    if (req.organizationId && conversation.organizationId !== req.organizationId) {
      return res.forbidden('conversations.cannot_access_outside_organization');
    }
    
    // Check if user is participant (participants is now an array of IDs)
    const isParticipant = conversation.participants.includes(req.user.uid);
    if (!isParticipant) {
      return res.forbidden('conversations.must_be_participant_to_view');
    }
    
    // User has access, return the conversation
    res.success(conversation);
    
  } catch (error) {
    console.error('Error getting conversation by ID:', error);
    res.serverError('common.error_retrieving', { details: error.message });
  }
};

exports.getConversationsForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Super admin can access any user's conversations
    if (req.user.isSuperAdmin) {
      const orgFilter = req.organizationId || null;
      const conversations = await conversationModel.getConversationsForUser(userId, orgFilter);
      return res.success(conversations);
    }
    
    // Users can view their own conversations
    if (req.user.uid === userId) {
      const orgFilter = req.organizationId || null;
      const conversations = await conversationModel.getConversationsForUser(userId, orgFilter);
      return res.success(conversations);
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
        return res.forbidden('conversations.cannot_access_users_outside_organization');
      }
      
      // Check if current user is admin in this org
      const isAdmin = await new Promise((resolve, reject) => {
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err) reject(err);
          else resolve(isAdmin);
        });
      });
      
      if (!isAdmin) {
        return res.forbidden('conversations.only_admins_can_view_other_users');
      }
      
      const conversations = await conversationModel.getConversationsForUser(userId, req.organizationId);
      return res.success(conversations);
    } else {
      // Without organization context, only allow admin users
      if (req.user.role === 'admin') {
        const conversations = await conversationModel.getConversationsForUser(userId, null);
        return res.success(conversations);
      } else {
        return res.forbidden('conversations.can_only_view_own_conversations');
      }
    }
    
  } catch (error) {
    console.error('Error getting conversations for user:', error);
    res.serverError('common.error_retrieving', { details: error.message });
  }
};

exports.softDeleteConversation = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.userId || req.user.uid;
    
    // Get the conversation to check access
    const conversation = await conversationModel.getConversationById(id);
    
    if (!conversation) {
      return res.notFound('conversations.not_found');
    }
    
    // Super admin can access any conversation
    if (!req.user.isSuperAdmin) {
      // Org context: check if conversation belongs to this organization
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.forbidden('conversations.cannot_access_outside_organization');
      }
      
      // Check if user is participant (participants is now an array of IDs)
      const isParticipant = conversation.participants.includes(userId);
      if (!isParticipant) {
        return res.forbidden('conversations.must_be_participant_to_modify');
      }
    }
    
    // Perform soft delete
    const result = await conversationModel.softDeleteConversation(id, userId);
    res.success(result, 'conversations.deleted');
    
  } catch (error) {
    console.error('Error soft deleting conversation:', error);
    res.serverError('conversations.error_soft_deleting', { details: error.message });
  }
};

exports.permanentDeleteConversation = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Super admin can delete any conversation
    if (req.user.isSuperAdmin) {
      const result = await conversationModel.permanentDeleteConversation(id);
      return res.success(result, 'conversations.deleted');
    }
    
    // Get the conversation to check organization and access
    const conversation = await conversationModel.getConversationById(id);
    
    if (!conversation) {
      return res.notFound('conversations.not_found');
    }
    
    // Org context: check if conversation belongs to this organization
    if (req.organizationId && conversation.organizationId !== req.organizationId) {
      return res.forbidden('conversations.cannot_delete_outside_organization');
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
        return res.forbidden('conversations.insufficient_permissions_permanent_delete');
      }
    } else {
      // Without organization context, only allow global admin
      if (req.user.role !== 'admin') {
        return res.forbidden('conversations.insufficient_permissions_permanent_delete');
      }
    }
    
    // Perform permanent delete
    const result = await conversationModel.permanentDeleteConversation(id);
    res.success(result, 'conversations.deleted');
    
  } catch (error) {
    console.error('Error permanently deleting conversation:', error);
    res.serverError('conversations.error_permanently_deleting', { details: error.message });
  }
};

// Helper function to check access to a conversation
async function checkConversationAccess(conversationId, userId, req) {
  const conversation = await conversationModel.getConversationById(conversationId);
  
  if (!conversation) {
    const error = new Error(req.t('conversations.not_found'));
    error.statusCode = 404;
    throw error;
  }
  
  // Super admin can access any conversation
  if (req.user.isSuperAdmin) {
    return conversation;
  }
  
  // Org context: check if conversation belongs to this organization
  if (req.organizationId && conversation.organizationId !== req.organizationId) {
    const error = new Error(req.t('conversations.cannot_access_outside_organization'));
    error.statusCode = 403;
    throw error;
  }
  
  // Check if user is participant (participants is now an array of IDs)
  const isParticipant = conversation.participants.includes(userId);
  if (!isParticipant) {
    const error = new Error(req.t('conversations.must_be_participant_to_modify'));
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
      return res.notFound('conversations.not_found');
    }
    
    res.success(result, 'conversations.hidden');
    
  } catch (error) {
    console.error('Error hiding conversation:', error);
    const statusCode = error.statusCode || 500;
    if (statusCode === 404) {
      res.notFound(error.message);
    } else if (statusCode === 403) {
      res.forbidden(error.message);
    } else {
      res.serverError('conversations.error_hiding', { details: error.message });
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
      return res.notFound('conversations.not_found');
    }
    
    res.success(result, 'conversations.unhidden');
    
  } catch (error) {
    console.error('Error unhiding conversation:', error);
    const statusCode = error.statusCode || 500;
    if (statusCode === 404) {
      res.notFound(error.message);
    } else if (statusCode === 403) {
      res.forbidden(error.message);
    } else {
      res.serverError('conversations.error_unhiding', { details: error.message });
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
      return res.notFound('conversations.not_found');
    }
    
    res.success(result, 'conversations.blocked');
    
  } catch (error) {
    console.error('Error blocking conversation:', error);
    const statusCode = error.statusCode || 500;
    if (statusCode === 404) {
      res.notFound(error.message);
    } else if (statusCode === 403) {
      res.forbidden(error.message);
    } else {
      res.serverError('conversations.error_blocking', { details: error.message });
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
      return res.notFound('conversations.not_found');
    }
    
    res.success(result, 'conversations.unblocked');
    
  } catch (error) {
    console.error('Error unblocking conversation:', error);
    const statusCode = error.statusCode || 500;
    if (statusCode === 404) {
      res.notFound(error.message);
    } else if (statusCode === 403) {
      res.forbidden(error.message);
    } else {
      res.serverError('conversations.error_unblocking', { details: error.message });
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
    res.success(conversations);
    
  } catch (error) {
    console.error('Error getting conversations:', error);
    res.serverError('common.error_retrieving', { details: error.message });
  }
};
