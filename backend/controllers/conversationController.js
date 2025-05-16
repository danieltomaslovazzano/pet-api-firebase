/* controllers/conversationController.js */
const { conversationModel, membershipModel } = require('../models/adapter');

exports.createConversation = (req, res) => {
  const conversationData = req.body; // Se espera { participants: [ 'userId1', 'userId2', ... ] }
  
  // Multitenancy: Set organization context for the conversation
  if (req.organizationId) {
    conversationData.organizationId = req.organizationId;
  }
  
  // If in organization context, verify all participants are members of the organization
  if (req.organizationId && !req.user.isSuperAdmin) {
    const checkAllParticipantsInOrg = async () => {
      if (!conversationData.participants || !Array.isArray(conversationData.participants)) {
        return res.status(400).json({ error: 'Participants array is required' });
      }
      
      // Check all participants belong to the organization
      for (const participantId of conversationData.participants) {
        try {
          membershipModel.checkUserRole(participantId, req.organizationId, null, (err, isMember) => {
            if (err || !isMember) {
              return res.status(403).json({ 
                error: 'Forbidden: All conversation participants must belong to the organization',
                details: `User ${participantId} is not a member of this organization`
              });
            }
          });
        } catch (error) {
          return res.status(500).json({ 
            error: 'Error verifying organization membership', 
            details: error.message 
          });
        }
      }
      
      // All participants verified, create the conversation
      createConversationRecord();
    };
    
    checkAllParticipantsInOrg();
  } else {
    // No org context or super admin, proceed normally
    createConversationRecord();
  }
  
  function createConversationRecord() {
    conversationModel.createConversation(conversationData, (err, conversation) => {
      if (err) {
        return res.status(500).json({ error: 'Error creating conversation', details: err.message });
      }
      res.status(201).json(conversation);
    });
  }
};

exports.getConversationById = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Verify user has access to this conversation
  const checkAccess = () => {
    // Super admin can access any conversation
    if (req.user.isSuperAdmin) {
      return fetchConversation();
    }
    
    // Get the conversation first to check access
    conversationModel.getConversationById(id, (err, conversation) => {
      if (err) {
        return res.status(404).json({ error: 'Conversation not found', details: err.message });
      }
      
      // Org context: check if conversation belongs to this organization
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot access conversation outside your organization' 
        });
      }
      
      // Check if user is participant
      if (!conversation.participants.includes(req.user.uid)) {
        return res.status(403).json({ 
          error: 'Forbidden: You must be a participant to view this conversation' 
        });
      }
      
      // User has access, return the conversation
      res.status(200).json(conversation);
    });
  };
  
  const fetchConversation = () => {
    conversationModel.getConversationById(id, (err, conversation) => {
      if (err) {
        return res.status(404).json({ error: 'Conversation not found', details: err.message });
      }
      res.status(200).json(conversation);
    });
  };
  
  checkAccess();
};

exports.getConversationsForUser = (req, res) => {
  const { userId } = req.params;
  
  // Multitenancy: Check access to user data
  const checkAccess = () => {
    // Super admin can access any user's conversations
    if (req.user.isSuperAdmin) {
      return fetchConversations();
    }
    
    // Users can view their own conversations
    if (req.user.uid === userId) {
      return fetchConversations();
    }
    
    // With organization context, check if target user belongs to this org
    if (req.organizationId) {
      membershipModel.checkUserRole(userId, req.organizationId, null, (err, isMember) => {
        if (err || !isMember) {
          return res.status(403).json({ 
            error: 'Forbidden: Cannot access conversations for users outside your organization'
          });
        }
        
        // Check if current user is admin in this org
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err || !isAdmin) {
            return res.status(403).json({ 
              error: 'Forbidden: Only organization admins can view other users\' conversations'
            });
          }
          fetchConversations();
        });
      });
    } else {
      // Without organization context, only allow admin users
      if (req.user.role === 'admin') {
        fetchConversations();
      } else {
        return res.status(403).json({ 
          error: 'Forbidden: You can only view your own conversations'
        });
      }
    }
  };
  
  const fetchConversations = () => {
    // Add organization filter for non-super admins with org context
    const orgFilter = (!req.user.isSuperAdmin && req.organizationId) ? req.organizationId : null;
    
    conversationModel.getConversationsForUser(userId, orgFilter, (err, conversations) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving conversations', details: err.message });
      }
      res.status(200).json(conversations);
    });
  };
  
  checkAccess();
};

exports.softDeleteConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId || req.user.uid; // Use provided userId or default to authenticated user
  
  // Multitenancy: Verify user can modify this conversation
  checkConversationAccess(id, userId, () => {
    conversationModel.softDeleteConversation(id, userId, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error soft deleting conversation', details: err.message });
      }
      res.status(200).json(result);
    });
  });
};

exports.permanentDeleteConversation = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Only admins or super admins can permanently delete
  const checkAccess = () => {
    // Super admin can delete any conversation
    if (req.user.isSuperAdmin) {
      return performDelete();
    }
    
    // Get the conversation to check organization and access
    conversationModel.getConversationById(id, (err, conversation) => {
      if (err) {
        return res.status(404).json({ error: 'Conversation not found', details: err.message });
      }
      
      // Org context: check if conversation belongs to this organization
      if (req.organizationId && conversation.organizationId !== req.organizationId) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot delete conversation outside your organization' 
        });
      }
      
      // Check if user is admin in this org
      if (req.organizationId) {
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err || !isAdmin) {
            return res.status(403).json({ 
              error: 'Forbidden: Only organization admins can permanently delete conversations'
            });
          }
          performDelete();
        });
      } else {
        // Without organization context, only allow global admin
        if (req.user.role === 'admin') {
          performDelete();
        } else {
          return res.status(403).json({ 
            error: 'Forbidden: Only admins can permanently delete conversations'
          });
        }
      }
    });
  };
  
  const performDelete = () => {
    conversationModel.permanentDeleteConversation(id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error permanently deleting conversation', details: err.message });
      }
      res.status(200).json(result);
    });
  };
  
  checkAccess();
};

// Helper function to check access to a conversation
function checkConversationAccess(conversationId, userId, callback) {
  conversationModel.getConversationById(conversationId, (err, conversation) => {
    if (err) {
      return res.status(404).json({ error: 'Conversation not found', details: err.message });
    }
    
    // Super admin can access any conversation
    if (req.user.isSuperAdmin) {
      return callback();
    }
    
    // Org context: check if conversation belongs to this organization
    if (req.organizationId && conversation.organizationId !== req.organizationId) {
      return res.status(403).json({ 
        error: 'Forbidden: Cannot access conversation outside your organization' 
      });
    }
    
    // Check if user is participant
    if (!conversation.participants.includes(userId)) {
      return res.status(403).json({ 
        error: 'Forbidden: You must be a participant to modify this conversation' 
      });
    }
    
    callback();
  });
}

exports.hideConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId || req.user.uid;
  
  // Multitenancy: Verify user can modify this conversation
  checkConversationAccess(id, userId, () => {
    conversationModel.hideConversation(id, userId, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error hiding conversation', details: err.message });
      }
      res.status(200).json(result);
    });
  });
};

exports.unhideConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId || req.user.uid;
  
  // Multitenancy: Verify user can modify this conversation
  checkConversationAccess(id, userId, () => {
    conversationModel.unhideConversation(id, userId, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error un-hiding conversation', details: err.message });
      }
      res.status(200).json(result);
    });
  });
};

exports.blockConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId || req.user.uid;
  
  // Multitenancy: Verify user can modify this conversation
  checkConversationAccess(id, userId, () => {
    conversationModel.blockConversation(id, userId, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error blocking conversation', details: err.message });
      }
      res.status(200).json(result);
    });
  });
};

exports.unblockConversation = (req, res) => {
  const { id } = req.params;
  const userId = req.body.userId || req.user.uid;
  
  // Multitenancy: Verify user can modify this conversation
  checkConversationAccess(id, userId, () => {
    conversationModel.unblockConversation(id, userId, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error unblocking conversation', details: err.message });
      }
      res.status(200).json(result);
    });
  });
};

exports.getConversations = (req, res) => {
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

  conversationModel.getConversations(filters, (err, conversations) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving conversations', details: err.message });
    }
    res.status(200).json(conversations);
  });
};
