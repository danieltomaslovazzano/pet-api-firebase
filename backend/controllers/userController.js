// controllers/userController.js
const admin = require('firebase-admin');
const { userModel, membershipModel } = require('../models/adapter');

// Firestore eliminado: solo se usa Firebase para Auth y Storage.

exports.createUser = (req, res) => {
  const userData = req.body;
  
  // Multitenancy: set organization context if present
  if (req.organizationId) {
    userData.defaultOrganizationId = req.organizationId;
  }
  
  userModel.createUser(userData, (err, newUser) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating user', details: err.message });
    }
    
    // If organization context is present, create membership
    if (req.organizationId) {
      membershipModel.createMembership({
        userId: newUser.id,
        organizationId: req.organizationId,
        role: userData.orgRole || 'member' // Default to member if no specific role
      }, (membershipErr) => {
        if (membershipErr) {
          console.error('Error creating membership for new user:', membershipErr);
          // Continue anyway as user was created successfully
        }
        res.status(201).json(newUser);
      });
    } else {
      res.status(201).json(newUser);
    }
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Check if requesting user has access to target user
  const checkAccess = () => {
    // Super admin can access any user
    if (req.user.isSuperAdmin) {
      return fetchUser();
    }
    
    // Users can always access their own data
    if (req.user.uid === id) {
      return fetchUser();
    }
    
    // If organization context exists, check if both users belong to the same org
    if (req.organizationId) {
      membershipModel.checkUserRole(id, req.organizationId, null, (err, targetUserIsMember) => {
        if (err || !targetUserIsMember) {
          return res.status(403).json({ 
            error: 'Forbidden: Cannot access user outside your organization context'
          });
        }
        fetchUser();
      });
    } else {
      // Without organization context, only allow admin users or self-access
      if (req.user.role === 'admin' || req.user.role === 'moderator') {
        fetchUser();
      } else {
        return res.status(403).json({ 
          error: 'Forbidden: You can only access your own information'
        });
      }
    }
  };
  
  const fetchUser = () => {
    userModel.getUserById(id)
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500).json({ error: 'Error retrieving user', details: err.message });
      });
  };
  
  checkAccess();
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  
  // Multitenancy: Check access rules
  const checkAccess = () => {
    // Super admin can update any user
    if (req.user.isSuperAdmin) {
      return performUpdate();
    }
    
    // Users can update their own data
    if (req.user.uid === id) {
      return performUpdate();
    }
    
    // With organization context, admins can update users in their org
    if (req.organizationId) {
      // Check if target user belongs to this org
      membershipModel.checkUserRole(id, req.organizationId, null, (err, targetUserIsMember) => {
        if (err || !targetUserIsMember) {
          return res.status(403).json({ 
            error: 'Forbidden: Cannot update user outside your organization'
          });
        }
        
        // Check if current user is admin in this org
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err || !isAdmin) {
            return res.status(403).json({ 
              error: 'Forbidden: Only organization admins can update other users'
            });
          }
          performUpdate();
        });
      });
    } else {
      // Without organization context, only allow admin or moderator role users
      if (req.user.role === 'admin' || req.user.role === 'moderator') {
        performUpdate();
      } else {
        return res.status(403).json({ 
          error: 'Forbidden: You can only update your own information'
        });
      }
    }
  };
  
  const performUpdate = () => {
    userModel.updateUser(id, userData, (err, updatedUser) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating user', details: err.message });
      }
      res.status(200).json(updatedUser);
    });
  };
  
  checkAccess();
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Check access rules for delete
  const checkAccess = () => {
    // Super admin can delete any user
    if (req.user.isSuperAdmin) {
      return performDelete();
    }
    
    // With organization context, org admins can remove users from their org
    if (req.organizationId) {
      // Check if target user belongs to this org
      membershipModel.checkUserRole(id, req.organizationId, null, (err, targetUserIsMember) => {
        if (err || !targetUserIsMember) {
          return res.status(403).json({ 
            error: 'Forbidden: Cannot delete user outside your organization'
          });
        }
        
        // Check if current user is admin in this org
        membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
          if (err || !isAdmin) {
            return res.status(403).json({ 
              error: 'Forbidden: Only organization admins can delete users'
            });
          }
          performDelete();
        });
      });
    } else {
      // Without organization context, only allow admin role
      if (req.user.role === 'admin') {
        performDelete();
      } else {
        return res.status(403).json({ 
          error: 'Forbidden: Only admins can delete users'
        });
      }
    }
  };
  
  const performDelete = () => {
    userModel.deleteUser(id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting user', details: err.message });
      }
      res.status(200).json(result);
    });
  };
  
  checkAccess();
};

exports.getUsers = (req, res) => {
  // Extraer filtros de la query string
  // Ejemplo: GET /users?name=John&email=john@example.com&role=reporter
  const filters = {
    name: req.query.name,
    email: req.query.email,
    role: req.query.role,
    status: req.query.status,
    searchTerm: req.query.searchTerm
    // Puedes agregar más filtros aquí
  };

  // Remove undefined filters
  Object.keys(filters).forEach(key => filters[key] === undefined && delete filters[key]);

  // Multitenancy: Apply organization context if present
  if (req.organizationId && !req.user.isSuperAdmin) {
    // Get users who are members of this organization
    membershipModel.getOrganizationMembers(req.organizationId, (err, members) => {
      if (err) {
        return res.status(500).json({ 
          error: 'Error retrieving organization members', 
          details: err.message 
        });
      }
      
      // Extract user IDs from memberships
      const userIds = members.map(member => member.userId);
      filters.ids = userIds; // Add to filter criteria
      
      // Get users with filters applied
      userModel.getUsers(filters, (err, users) => {
        if (err) {
          return res.status(500).json({ error: 'Error retrieving users', details: err.message });
        }
        res.status(200).json(users);
      });
    });
  } else {
    // Super admin or no org context, get all users with filters
    userModel.getUsers(filters, (err, users) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving users', details: err.message });
      }
      res.status(200).json(users);
    });
  }
};

/* controllers/userController.js - Bloquear Usuario */
exports.blockUser = (req, res) => {
  const { id } = req.params;  // ID del usuario que realiza la acción
  const { blockedUserId } = req.body;
  
  // Multitenancy: Ensure user can only block users within their organization
  if (req.organizationId && !req.user.isSuperAdmin) {
    // Check if target user is in the same organization
    membershipModel.checkUserRole(blockedUserId, req.organizationId, null, (err, targetUserIsMember) => {
      if (err || !targetUserIsMember) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot block user outside your organization'
        });
      }
      
      // Proceed with block
      performBlock();
    });
  } else {
    performBlock();
  }
  
  function performBlock() {
    userModel.blockUser(id, blockedUserId, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error blocking user', details: err.message });
      }
      res.status(200).json(result);
    });
  }
};

// controllers/userController.js
exports.unblockUser = (req, res) => {
  const { id } = req.params;  // ID del usuario que realiza la acción
  const { blockedUserId } = req.body;
  
  // Multitenancy: Ensure user can only unblock users within their organization
  if (req.organizationId && !req.user.isSuperAdmin) {
    // Check if target user is in the same organization
    membershipModel.checkUserRole(blockedUserId, req.organizationId, null, (err, targetUserIsMember) => {
      if (err || !targetUserIsMember) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot unblock user outside your organization'
        });
      }
      
      // Proceed with unblock
      performUnblock();
    });
  } else {
    performUnblock();
  }
  
  function performUnblock() {
    userModel.unblockUser(id, blockedUserId, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error unblocking user', details: err.message });
      }
      res.status(200).json(result);
    });
  }
};

// Añadir nuevo método para obtener organizaciones del usuario
exports.getUserOrganizations = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Super admin can view any user's orgs, others only their own
  if (req.user.uid !== id && !req.user.isSuperAdmin) {
    // If in org context, check if requesting user is admin in this org
    if (req.organizationId) {
      membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
        if (err || !isAdmin) {
          return res.status(403).json({ 
            error: 'Forbidden: Only organization admins can view other users\' organizations'
          });
        }
        fetchOrganizations();
      });
    } else {
      return res.status(403).json({ 
        error: 'Forbidden: You can only view your own organizations'
      });
    }
  } else {
    fetchOrganizations();
  }
  
  function fetchOrganizations() {
    userModel.getUserOrganizations(id, (err, organizations) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving user organizations', details: err.message });
      }
      res.status(200).json(organizations);
    });
  }
};

exports.getAdminUserById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Multitenancy: Only super admin or org admin can access admin details
    if (!req.user.isSuperAdmin) {
      if (req.organizationId) {
        const isOrgAdmin = await new Promise((resolve) => {
          membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
            resolve(!err && isAdmin);
          });
        });
        
        if (!isOrgAdmin) {
          return res.status(403).json({ 
            error: 'Forbidden: Only organization admins can access detailed user information'
          });
        }
        
        // Check if target user belongs to this org
        const targetUserIsMember = await new Promise((resolve) => {
          membershipModel.checkUserRole(id, req.organizationId, null, (err, isMember) => {
            resolve(!err && isMember);
          });
        });
        
        if (!targetUserIsMember) {
          return res.status(403).json({ 
            error: 'Forbidden: Cannot access user outside your organization'
          });
        }
      } else if (req.user.uid !== id && req.user.role !== 'admin') {
        return res.status(403).json({ 
          error: 'Forbidden: Only admins can access detailed user information'
        });
      }
    }
    
    // Get user from Firebase Auth
    const userRecord = await admin.auth().getUser(id);
    
    // Get user from database using our model
    const user = await userModel.getUserById(id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found in database' });
    }
    
    // Combine data from both sources
    const userData = {
      ...user,
      uid: userRecord.uid,
      email: userRecord.email,
      emailVerified: userRecord.emailVerified,
      disabled: userRecord.disabled,
      metadata: {
        creationTime: userRecord.metadata.creationTime,
        lastSignInTime: userRecord.metadata.lastSignInTime
      },
      customClaims: userRecord.customClaims || {}
    };
    
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error getting admin user details:', error);
    if (error.code === 'auth/user-not-found') {
      return res.status(404).json({ error: 'User not found in Firebase Auth' });
    }
    res.status(500).json({ error: 'Error getting user details', details: error.message });
  }
};