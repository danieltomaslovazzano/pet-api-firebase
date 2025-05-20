// controllers/userController.js
const admin = require('firebase-admin');
const { userModel, membershipModel } = require('../models/adapter');

// Firestore eliminado: solo se usa Firebase para Auth y Storage.

exports.createUser = async (req, res) => {
  const userData = req.body;
  
  // Multitenancy: set organization context if present
  if (req.organizationId) {
    userData.defaultOrganizationId = req.organizationId;
  }
  
  try {
    const newUser = await userModel.createUser(userData);
    
    // If organization context is present, create membership
    if (req.organizationId) {
      await membershipModel.createMembership({
        userId: newUser.id,
        organizationId: req.organizationId,
        role: userData.orgRole || 'member' // Default to member if no specific role
      });
    }
    
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user', details: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Check if requesting user has access to target user
  const checkAccess = async () => {
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
      const targetUserIsMember = await membershipModel.checkUserRole(id, req.organizationId, null);
      if (!targetUserIsMember) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot access user outside your organization context'
        });
      }
      fetchUser();
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
  
  const fetchUser = async () => {
    try {
      const user = await userModel.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: 'Error retrieving user', details: err.message });
    }
  };
  
  await checkAccess();
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  
  // Multitenancy: Check access rules
  const checkAccess = async () => {
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
      const targetUserIsMember = await membershipModel.checkUserRole(id, req.organizationId, null);
      if (!targetUserIsMember) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot update user outside your organization'
        });
      }
      
      // Check if current user is admin in this org
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin');
      if (!isAdmin) {
        return res.status(403).json({ 
          error: 'Forbidden: Only organization admins can update other users'
        });
      }
      performUpdate();
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
  
  const performUpdate = async () => {
    try {
      const updatedUser = await userModel.updateUser(id, userData);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: 'Error updating user', details: err.message });
    }
  };
  
  await checkAccess();
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Check access rules for delete
  const checkAccess = async () => {
    // Super admin can delete any user
    if (req.user.isSuperAdmin) {
      return performDelete();
    }
    
    // With organization context, org admins can remove users from their org
    if (req.organizationId) {
      // Check if target user belongs to this org
      const targetUserIsMember = await membershipModel.checkUserRole(id, req.organizationId, null);
      if (!targetUserIsMember) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot delete user outside your organization'
        });
      }
      
      // Check if current user is admin in this org
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin');
      if (!isAdmin) {
        return res.status(403).json({ 
          error: 'Forbidden: Only organization admins can delete users'
        });
      }
      performDelete();
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
  
  const performDelete = async () => {
    try {
      const result = await userModel.deleteUser(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Error deleting user', details: err.message });
    }
  };
  
  await checkAccess();
};

exports.getUsers = async (req, res) => {
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
    const members = await membershipModel.getOrganizationMembers(req.organizationId);
    
    // Extract user IDs from memberships
    const userIds = members.map(member => member.userId);
    filters.ids = userIds; // Add to filter criteria
    
    // Get users with filters applied
    const users = await userModel.getUsers(filters);
    res.status(200).json(users);
  } else {
    // Super admin or no org context, get all users with filters
    const users = await userModel.getUsers(filters);
    res.status(200).json(users);
  }
};

/* controllers/userController.js - Bloquear Usuario */
exports.blockUser = async (req, res) => {
  const { id } = req.params;  // ID del usuario que realiza la acción
  const { blockedUserId } = req.body;
  
  // Multitenancy: Ensure user can only block users within their organization
  if (req.organizationId && !req.user.isSuperAdmin) {
    // Check if target user is in the same organization
    const targetUserIsMember = await membershipModel.checkUserRole(blockedUserId, req.organizationId, null);
    if (!targetUserIsMember) {
      return res.status(403).json({ 
        error: 'Forbidden: Cannot block user outside your organization'
      });
    }
    
    // Proceed with block
    await performBlock();
  } else {
    await performBlock();
  }
  
  async function performBlock() {
    try {
      const result = await userModel.blockUser(id, blockedUserId);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Error blocking user', details: err.message });
    }
  }
};

// controllers/userController.js
exports.unblockUser = async (req, res) => {
  const { id } = req.params;  // ID del usuario que realiza la acción
  const { blockedUserId } = req.body;
  
  // Multitenancy: Ensure user can only unblock users within their organization
  if (req.organizationId && !req.user.isSuperAdmin) {
    // Check if target user is in the same organization
    const targetUserIsMember = await membershipModel.checkUserRole(blockedUserId, req.organizationId, null);
    if (!targetUserIsMember) {
      return res.status(403).json({ 
        error: 'Forbidden: Cannot unblock user outside your organization'
      });
    }
    
    // Proceed with unblock
    await performUnblock();
  } else {
    await performUnblock();
  }
  
  async function performUnblock() {
    try {
      const result = await userModel.unblockUser(id, blockedUserId);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Error unblocking user', details: err.message });
    }
  }
};

// Añadir nuevo método para obtener organizaciones del usuario
exports.getUserOrganizations = async (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: Super admin can view any user's orgs, others only their own
  if (req.user.uid !== id && !req.user.isSuperAdmin) {
    // If in org context, check if requesting user is admin in this org
    if (req.organizationId) {
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin');
      if (!isAdmin) {
        return res.status(403).json({ 
          error: 'Forbidden: Only organization admins can view other users\' organizations'
        });
      }
      fetchOrganizations();
    } else {
      return res.status(403).json({ 
        error: 'Forbidden: You can only view your own organizations'
      });
    }
  } else {
    fetchOrganizations();
  }
  
  async function fetchOrganizations() {
    try {
      const organizations = await userModel.getUserOrganizations(id);
      res.status(200).json(organizations);
    } catch (err) {
      res.status(500).json({ error: 'Error retrieving user organizations', details: err.message });
    }
  }
};

exports.getAdminUserById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Multitenancy: Only super admin or org admin can access admin details
    if (!req.user.isSuperAdmin) {
      if (req.organizationId) {
        const isOrgAdmin = await membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin');
        
        if (!isOrgAdmin) {
          return res.status(403).json({ 
            error: 'Forbidden: Only organization admins can access detailed user information'
          });
        }
        
        // Check if target user belongs to this org
        const targetUserIsMember = await membershipModel.checkUserRole(id, req.organizationId, null);
        
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
      emailVerified: userRecord.emailVerified,
      disabled: userRecord.disabled,
      lastLoginAt: userRecord.metadata.lastSignInTime,
      creationTime: userRecord.metadata.creationTime
    };

    res.status(200).json(userData);
  } catch (err) {
    console.error('Error in getAdminUserById:', err);
    res.status(500).json({ 
      error: 'Error retrieving user details', 
      details: err.message 
    });
  }
};

exports.me = async (req, res) => {
  try {
    // req.user debe estar poblado por el middleware de autenticación
    const userId = req.user.id || req.user.uid;
    if (!userId) {
      return res.status(401).json({ error: 'No autenticado' });
    }
    // Buscar el usuario en la base de datos por id/uid
    const user = await userModel.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    // Puedes filtrar los campos que quieras exponer
    const { id, email, name, role, status, createdAt, updatedAt } = user;
    res.json({ id, email, name, role, status, createdAt, updatedAt });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};