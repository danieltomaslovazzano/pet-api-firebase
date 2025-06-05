// controllers/membershipController.js
const { membershipModel } = require('../models/adapter');

exports.getMemberships = async (req, res) => {
  const { userId, organizationId } = req.query;
  
  // At least one filter must be provided
  if (!userId && !organizationId) {
    return res.error('memberships.filter_required', 400);
  }
  
  // Multitenancy: Super admin can access any memberships
  const isSuperAdmin = req.user.isSuperAdmin;
  
  // If requesting by organizationId, check user permissions
  if (organizationId) {
    // Multitenancy: Apply organization context check
    if (req.organizationId && organizationId !== req.organizationId && !isSuperAdmin) {
      return res.forbidden('memberships.forbidden_access_outside_organization');
    }
    
    // Check if user is an admin of the organization
    const isAdmin = await membershipModel.checkUserRole(req.user.uid, organizationId, 'admin');
    
    if (!isAdmin && !isSuperAdmin) {
      return res.forbidden('memberships.forbidden_view_all_memberships');
    }
    
    // User is admin or super admin, proceed to get all memberships for the organization
    try {
      const memberships = await membershipModel.getMembershipsByOrganization(organizationId);
      res.list(memberships);
    } catch (error) {
      res.serverError('memberships.error_retrieving', { error: error.message });
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
        return res.list(memberships);
      } catch (error) {
        return res.serverError('memberships.error_retrieving', { error: error.message });
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
        return res.forbidden('memberships.forbidden_view_other_memberships');
      }
      
      // Check if target user is in this organization
      const isMember = await membershipModel.checkUserRole(userId, req.organizationId, null);
      
      if (!isMember) {
        return res.forbidden('memberships.forbidden_access_user_outside_organization');
      }
      
      return await fetchUserMemberships();
    } 
    // Global admin without org context
    else if (req.user.role === 'admin') { 
      return await fetchUserMemberships();
    } 
    // No permission
    else {
      return res.forbidden('memberships.view_own_memberships_only');
    }
  }
};

exports.getMembershipById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.error('memberships.missing_id', 400);
    }
    
    // Load the membership directly
    let membership;
    try {
      membership = await membershipModel.getMembershipById(id);
    } catch (error) {
      // If membership not found, return 404
      if (error.message === 'Membership not found') {
        return res.notFound('memberships.not_found');
      }
      throw error; // Re-throw other errors
    }
    
    // Multitenancy: Super admin can access any membership
    if (req.user.isSuperAdmin) {
      return res.data(membership);
    }
    
    // Multitenancy: Check organization context
    if (req.organizationId && membership.organizationId !== req.organizationId) {
      return res.forbidden('memberships.forbidden_access_outside_context');
    }
    
    // Check if the user has permission to view this membership
    if (req.user.uid !== membership.userId && req.user.role !== 'admin') {
      // Check if the user is an admin of the organization
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
      
      if (!isAdmin) {
        return res.forbidden('memberships.forbidden_view_membership');
      }
    }
    
    // User is either the member, a global admin, or an org admin
    res.data(membership);
  } catch (error) {
    console.error('Error in getMembershipById:', error);
    res.serverError('memberships.error_retrieving_single', { error: error.message });
  }
};

exports.inviteUser = async (req, res) => {
  const { organizationId, userId, role = 'member' } = req.body;
  
  // Multitenancy: Check organization context
  if (req.organizationId && organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.forbidden('memberships.forbidden_invite_outside_context');
  }

  async function createMembership() {
    const membershipData = {
      organizationId,
      userId,
      role
    };
    
    try {
      const membership = await membershipModel.createMembership(membershipData);
      return res.created('memberships.created', membership);
    } catch (error) {
      return res.serverError('memberships.error_inviting', { error: error.message });
    }
  }
  
  // Super admin can invite anyone
  if (req.user.isSuperAdmin) {
    return await createMembership();
  }
  
  // Verificar si el invitador tiene permiso para añadir miembros
  const isAdmin = await membershipModel.checkUserRole(req.user.uid, organizationId, 'admin');
  
  if (!isAdmin) {
    return res.forbidden('memberships.unauthorized_invite');
  }
  
  return await createMembership();
};

exports.updateMemberRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  
  // Verificar que el rol sea válido
  if (!['admin', 'manager', 'moderator', 'volunteer', 'observer'].includes(role)) {
    return res.error('memberships.invalid_role', 400);
  }
  
  // Obtener la membresía para verificar la organización
  const membership = await membershipModel.getMembershipById(id);
  
  if (req.organizationId && membership.organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.forbidden('memberships.forbidden_modify_outside_context');
  }

  async function updateMembershipRole() {
    const updateData = {
      role
    };
    
    try {
      const updatedMembership = await membershipModel.updateMembership(id, updateData);
      return res.updated('memberships.role_updated', updatedMembership, { role });
    } catch (error) {
      return res.serverError('memberships.error_updating', { error: error.message });
    }
  }
  
  // Super admin can update any membership
  if (req.user.isSuperAdmin) {
    return await updateMembershipRole();
  }
  
  // Verificar si el modificador tiene permisos de admin en esta organización
  const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
  
  if (!isAdmin) {
    return res.forbidden('memberships.unauthorized_modify');
  }
  
  return await updateMembershipRole();
};

exports.removeMember = async (req, res) => {
  const { id } = req.params;
  
  // Obtener la membresía para verificar la organización
  const membership = await membershipModel.getMembershipById(id);
  
  if (req.organizationId && membership.organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.forbidden('memberships.forbidden_remove_outside_context');
  }

  async function removeMembership(messageKey = 'memberships.member_removed_successfully') {
    try {
      await membershipModel.deleteMembership(id);
      return res.deleted(messageKey);
    } catch (error) {
      return res.serverError('memberships.error_removing', { error: error.message });
    }
  }
  
  // Super admin can remove any membership
  if (req.user.isSuperAdmin) {
    return await removeMembership();
  }
  
  // Verificar si el modificador tiene permisos de admin o si es el propio usuario abandonando
  if (req.user.uid === membership.userId) {
    // Usuario abandonando
    return await removeMembership('memberships.user_left_organization');
  } else {
    // Admin removiendo a alguien
    const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
    
    if (!isAdmin) {
      return res.forbidden('memberships.unauthorized_remove');
    }
    
    return await removeMembership('memberships.member_removed_successfully');
  }
};
