// controllers/membershipController.js
const { membershipModel } = require('../models/adapter');

exports.getMemberships = async (req, res) => {
  const { userId, organizationId } = req.query;
  
  // At least one filter must be provided
  if (!userId && !organizationId) {
    return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "memberships.validation.failed"}], "memberships.validation.error", { error: 'Either userId or organizationId must be provided' });
  }
  
  // Multitenancy: Super admin can access any memberships
  const isSuperAdmin = req.user.isSuperAdmin;
  
  // If requesting by organizationId, check user permissions
  if (organizationId) {
    // Multitenancy: Apply organization context check
    if (req.organizationId && organizationId !== req.organizationId && !isSuperAdmin) {
      return res.apiForbidden({ 
        error: 'Forbidden: Cannot access memberships outside your organization context' 
      });
    }
    
    // Check if user is an admin of the organization
    const isAdmin = await membershipModel.checkUserRole(req.user.uid, organizationId, 'admin');
    
    if (!isAdmin && !isSuperAdmin) {
      return res.apiForbidden({ 
        error: 'No tienes permisos para ver todas las membresías de la organización' 
      });
    }
    
    // User is admin or super admin, proceed to get all memberships for the organization
    try {
      const memberships = await membershipModel.getMembershipsByOrganization(organizationId);
      res.apiSuccess(memberships);
    } catch (error) {
      res.apiServerError({ error: 'Error retrieving memberships', details: error.message });
    }
  } 
  // If requesting by userId, check if it's the current user or admin
  else if (userId) {
    // Define the fetchUserMemberships function first
    async function fetchUserMemberships() {
      // Apply organization filter for non-super admin with org context
      const orgFilter = (!isSuperAdmin && req.organizationId) ? req.organizationId : null;
      
      try {
        const memberships = await membershipModel.getMembershipsByUser(userId, orgFilter);
        return res.apiSuccess(memberships);
      } catch (error) {
        return res.apiServerError({ error: 'Error retrieving memberships', details: error.message });
      }
    }

    // Multitenancy: Allow super admin (highest priority)
    if (isSuperAdmin) {
      return await fetchUserMemberships();
    }
    
    // Check if this is the authenticated user (always allowed to see own memberships)
    if (req.user.uid === userId) {
      return await fetchUserMemberships();
    }
    
    // If organization context is set, verify admin role in that organization
    if (req.organizationId) {
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin');
      
      if (!isAdmin) {
        return res.apiForbidden({ 
          error: 'Forbidden: Only organization admins can view other users\' memberships'
        });
      }
      
      // Check if target user is in this organization
      const isMember = await membershipModel.checkUserRole(userId, req.organizationId, null);
      
      if (!isMember) {
        return res.apiForbidden({ 
          error: 'Forbidden: Cannot access memberships for users outside your organization'
        });
      }
      
      return await fetchUserMemberships();
    } 
    // Global admin without org context
    else if (req.user.role === 'admin') { 
      return await fetchUserMemberships();
    } 
    // No permission
    else {
      return res.apiForbidden({ 
        error: 'You can only view your own memberships' 
      });
    }
  }
};

exports.getMembershipById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "memberships.validation.failed"}], "memberships.validation.error", { error: 'Missing membership ID in request parameters' });
    }
    
    // Load the membership directly
    let membership;
    try {
      membership = await membershipModel.getMembershipById(id);
    } catch (error) {
      // If membership not found, return 404
      if (error.message === 'Membership not found') {
        return res.apiNotFound({ error: 'Membership not found' });
      }
      throw error; // Re-throw other errors
    }
    
    // Multitenancy: Super admin can access any membership
    if (req.user.isSuperAdmin) {
      return res.apiSuccess(membership);
    }
    
    // Multitenancy: Check organization context
    if (req.organizationId && membership.organizationId !== req.organizationId) {
      return res.apiForbidden({ 
        error: 'Forbidden: Cannot access membership outside your organization context'
      });
    }
    
    // Check if the user has permission to view this membership
    if (req.user.uid !== membership.userId && req.user.role !== 'admin') {
      // Check if the user is an admin of the organization
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
      
      if (!isAdmin) {
        return res.apiForbidden({ error: 'You do not have permission to view this membership' });
      }
    }
    
    // User is either the member, a global admin, or an org admin
    res.apiSuccess(membership);
  } catch (error) {
    console.error('Error in getMembershipById:', error);
    res.apiServerError({ error: 'Error retrieving membership', details: error.message });
  }
};

exports.inviteUser = async (req, res) => {
  const { organizationId, userId, role = 'member' } = req.body;
  
  // Multitenancy: Check organization context
  if (req.organizationId && organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.apiForbidden({ 
      error: 'Forbidden: Cannot invite users to organizations outside your context'
    });
  }

  async function createMembership() {
    const membershipData = {
      organizationId,
      userId,
      role
    };
    
    try {
      const membership = await membershipModel.createMembership(membershipData);
      return res.apiCreated(membership);
    } catch (error) {
      return res.apiServerError({ error: 'Error inviting user', details: error.message });
    }
  }
  
  // Super admin can invite anyone
  if (req.user.isSuperAdmin) {
    return await createMembership();
  }
  
  // Verificar si el invitador tiene permiso para añadir miembros
  const isAdmin = await membershipModel.checkUserRole(req.user.uid, organizationId, 'admin');
  
  if (!isAdmin) {
    return res.apiForbidden({ error: 'Unauthorized. Only admins can invite users.' });
  }
  
  return await createMembership();
};

exports.updateMemberRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  
  // Verificar que el rol sea válido
  if (!['admin', 'manager', 'moderator', 'volunteer', 'observer'].includes(role)) {
    return res.apiValidationError([{field: "general", code: "VALIDATION_ERROR", messageKey: "memberships.validation.failed"}], "memberships.validation.error", { error: 'Invalid role' });
  }
  
  // Obtener la membresía para verificar la organización
  const membership = await membershipModel.getMembershipById(id);
  
  if (req.organizationId && membership.organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.apiForbidden({ 
      error: 'Forbidden: Cannot modify membership outside your organization context'
    });
  }

  async function updateMembershipRole() {
    const updateData = {
      role
    };
    
    try {
      const updatedMembership = await membershipModel.updateMembership(id, updateData);
      return res.apiSuccess(updatedMembership);
    } catch (error) {
      return res.apiServerError({ error: 'Error updating membership', details: error.message });
    }
  }
  
  // Super admin can update any membership
  if (req.user.isSuperAdmin) {
    return await updateMembershipRole();
  }
  
  // Verificar si el modificador tiene permisos de admin en esta organización
  const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
  
  if (!isAdmin) {
    return res.apiForbidden({ error: 'Unauthorized. Only admins can modify roles.' });
  }
  
  return await updateMembershipRole();
};

exports.removeMember = async (req, res) => {
  const { id } = req.params;
  
  // Obtener la membresía para verificar la organización
  const membership = await membershipModel.getMembershipById(id);
  
  if (req.organizationId && membership.organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.apiForbidden({ 
      error: 'Forbidden: Cannot remove membership outside your organization context'
    });
  }

  async function removeMembership(messageKey = 'memberships.remove.success') {
    try {
      await membershipModel.deleteMembership(id);
      return res.apiSuccess({ message });
    } catch (error) {
      return res.apiServerError({ error: 'Error removing membership', details: error.message });
    }
  }
  
  // Super admin can remove any membership
  if (req.user.isSuperAdmin) {
    return await removeMembership();
  }
  
  // Verificar si el modificador tiene permisos de admin o si es el propio usuario abandonando
  if (req.user.uid === membership.userId) {
    // Usuario abandonando
    return await removeMembership('memberships.leave.success');
  } else {
    // Admin removiendo a alguien
    const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
    
    if (!isAdmin) {
      return res.apiForbidden({ error: 'Unauthorized. Only admins can remove members.' });
    }
    
    return await removeMembership('memberships.remove.success');
  }
};
