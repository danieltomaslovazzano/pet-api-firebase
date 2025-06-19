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
    // 1. Create user in Firebase Auth
    if (!userData.email || !userData.password) {
      return res.apiValidationError([
        { field: 'email', code: 'REQUIRED', messageKey: 'users.email.required' },
        { field: 'password', code: 'REQUIRED', messageKey: 'users.password.required' }
      ].filter(error => {
        if (error.field === 'email' && !userData.email) return true;
        if (error.field === 'password' && !userData.password) return true;
        return false;
      }), 'users.create.validation_failed');
    }
    let userRecord;
    try {
      userRecord = await admin.auth().createUser({
        email: userData.email,
        password: userData.password,
        displayName: userData.name
      });
    } catch (firebaseError) {
      return res.apiServerError('users.create.firebase_error', { 
        originalError: firebaseError.message 
      });
    }

    // 2. Set custom claims for role
    try {
      await admin.auth().setCustomUserClaims(userRecord.uid, { role: userData.role || 'user' });
    } catch (claimsError) {
      // If setting claims fails, delete the Firebase user to avoid orphaned records
      await admin.auth().deleteUser(userRecord.uid);
      return res.apiServerError('users.create.claims_error', { 
        originalError: claimsError.message 
      });
    }

    // 3. Create user in DB with Firebase UID as id
    const dbUserData = {
      id: userRecord.uid,
      email: userData.email,
      name: userData.name,
      role: userData.role || 'user',
      status: userData.status || 'active',
      profileImage: userData.profileImage,
      phone: userData.phone,
      address: userData.address,
      blockedUsers: userData.blockedUsers || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    try {
      await userModel.createUser(dbUserData);
    } catch (dbError) {
      // If DB creation fails, delete the Firebase user to avoid orphaned records
      await admin.auth().deleteUser(userRecord.uid);
      return res.apiServerError('users.create.database_error', { 
        originalError: dbError.message 
      });
    }

    // 4. If organization context is present, create membership
    if (req.organizationId) {
      try {
        await membershipModel.createMembership({
          userId: userRecord.uid,
          organizationId: req.organizationId,
          role: userData.orgRole || 'member' // Default to member if no specific role
        });
      } catch (membershipError) {
        // Membership creation failed, but user is created; log and continue
        console.error('Error creating membership:', membershipError);
      }
    }

    // 5. Return created user (without password)
    const responseUser = { ...dbUserData };
    delete responseUser.password;
    res.apiCreated(responseUser, 'users.create.success', {}, { email: userData.email });
  } catch (err) {
    res.apiServerError('users.create.internal_error', { 
      originalError: err.message 
    });
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
        return res.apiForbidden('users.get.organization_access_denied');
      }
      fetchUser();
    } else {
      // Without organization context, only allow admin users or self-access
      if (req.user.role === 'admin' || req.user.role === 'moderator') {
        fetchUser();
      } else {
        return res.apiForbidden('users.get.self_access_only');
      }
    }
  };
  
  const fetchUser = async () => {
    try {
      const user = await userModel.getUserById(id);
      if (!user) {
        return res.apiNotFound('users.get.not_found');
      }
      res.apiSuccess(user, 'users.get.success', {}, { userId: id });
    } catch (err) {
      res.apiServerError('users.get.internal_error', { 
        originalError: err.message 
      });
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
        return res.apiForbidden('users.update.organization_access_denied');
      }
      
      // Check if current user is admin in this org
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin');
      if (!isAdmin) {
        return res.apiForbidden('users.update.admin_required');
      }
      performUpdate();
    } else {
      // Without organization context, only allow admin or moderator role users
      if (req.user.role === 'admin' || req.user.role === 'moderator') {
        performUpdate();
      } else {
        return res.apiForbidden('users.update.self_access_only');
      }
    }
  };
  
  const performUpdate = async () => {
    try {
      const updatedUser = await userModel.updateUser(id, userData);
      res.apiSuccess(updatedUser, 'users.update.success', {}, { userId: id });
    } catch (err) {
      res.apiServerError('users.update.internal_error', { 
        originalError: err.message 
      });
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
              return res.apiForbidden('users.delete.organization_access_denied');
      }
      
      // Check if current user is admin in this org
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin');
      if (!isAdmin) {
        return res.apiForbidden('users.delete.admin_required');
      }
      performDelete();
    } else {
      // Without organization context, only allow admin role
      if (req.user.role === 'admin') {
        performDelete();
      } else {
        return res.apiForbidden('users.delete.admin_only');
      }
    }
  };
  
  const performDelete = async () => {
    try {
      const result = await userModel.deleteUser(id);
      res.apiSuccess(result, 'users.delete.success', {}, { userId: id });
    } catch (err) {
      res.apiServerError('users.delete.internal_error', { 
        originalError: err.message 
      });
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
    res.apiList(users, 'users.list.success', { 
      count: users.length, 
      organizationId: req.organizationId 
    });
  } else {
    // Super admin or no org context, get all users with filters
    const users = await userModel.getUsers(filters);
    res.apiList(users, 'users.list.success', { 
      count: users.length, 
      scope: 'global' 
    });
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
      return res.apiForbidden('users.block.organization_access_denied');
    }
    
    // Proceed with block
    await performBlock();
  } else {
    await performBlock();
  }
  
  async function performBlock() {
    try {
      const result = await userModel.blockUser(id, blockedUserId);
      res.apiSuccess(result, 'users.block.success', {}, { userId: id, blockedUserId });
    } catch (err) {
      res.apiServerError('users.block.internal_error', { 
        originalError: err.message 
      });
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
      return res.apiForbidden('users.unblock.organization_access_denied');
    }
    
    // Proceed with unblock
    await performUnblock();
  } else {
    await performUnblock();
  }
  
  async function performUnblock() {
    try {
      const result = await userModel.unblockUser(id, blockedUserId);
      res.apiSuccess(result, 'users.unblock.success', {}, { userId: id, blockedUserId });
    } catch (err) {
      res.apiServerError('users.unblock.internal_error', { 
        originalError: err.message 
      });
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
        return res.apiForbidden('users.organizations.admin_required');
      }
      fetchOrganizations();
    } else {
      return res.apiForbidden('users.organizations.self_access_only');
    }
  } else {
    fetchOrganizations();
  }
  
  async function fetchOrganizations() {
    try {
      const organizations = await userModel.getUserOrganizations(id);
      res.apiList(organizations, 'users.organizations.success', { 
        count: organizations.length 
      }, { userId: id });
    } catch (err) {
      res.apiServerError('users.organizations.internal_error', { 
        originalError: err.message 
      });
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
          return res.apiForbidden('users.admin_get.organization_admin_required');
        }
        
        // Check if target user belongs to this org
        const targetUserIsMember = await membershipModel.checkUserRole(id, req.organizationId, null);
        
        if (!targetUserIsMember) {
          return res.apiForbidden('users.admin_get.organization_access_denied');
        }
      } else if (req.user.uid !== id && req.user.role !== 'admin') {
        return res.apiForbidden('users.admin_get.admin_required');
      }
    }
    
    // Get user from Firebase Auth
    const userRecord = await admin.auth().getUser(id);
    
    // Get user from database using our model
    const user = await userModel.getUserById(id);
    
    if (!user) {
      return res.apiNotFound('users.admin_get.not_found');
    }

    // Combine data from both sources
    const userData = {
      ...user,
      emailVerified: userRecord.emailVerified,
      disabled: userRecord.disabled,
      lastLoginAt: userRecord.metadata.lastSignInTime,
      creationTime: userRecord.metadata.creationTime
    };

    res.apiSuccess(userData, 'users.admin_get.success', {}, { userId: id });
  } catch (err) {
    console.error('Error in getAdminUserById:', err);
    res.apiServerError('users.admin_get.internal_error', { 
      originalError: err.message 
    });
  }
};

exports.me = async (req, res) => {
  try {
    // req.user debe estar poblado por el middleware de autenticación
    const userId = req.user.sub || req.user.uid; // Firebase uses 'sub' for user ID in JWT
    if (!userId) {
      return res.apiUnauthorized('users.me.not_authenticated');
    }
    // Buscar el usuario en la base de datos por id/uid
    const user = await userModel.getUserById(userId);
    if (!user) {
      return res.apiNotFound('users.me.not_found');
    }
    // Puedes filtrar los campos que quieras exponer
    const { id, email, name, role, status, createdAt, updatedAt } = user;
    const userData = { id, email, name, role, status, createdAt, updatedAt };
    res.apiSuccess(userData, 'users.me.success');
  } catch (error) {
    res.apiServerError('users.me.internal_error', { 
      originalError: error.message 
    });
  }
};