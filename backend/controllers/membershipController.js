// controllers/membershipController.js
const { membershipModel } = require('../models/adapter');

exports.getMemberships = async (req, res) => {
  const { userId, organizationId } = req.query;
  
  // At least one filter must be provided
  if (!userId && !organizationId) {
    return res.status(400).json({ error: 'Either userId or organizationId must be provided' });
  }
  
  // Multitenancy: Super admin can access any memberships
  const isSuperAdmin = req.user.isSuperAdmin;
  
  // If requesting by organizationId, check user permissions
  if (organizationId) {
    // Multitenancy: Apply organization context check
    if (req.organizationId && organizationId !== req.organizationId && !isSuperAdmin) {
      return res.status(403).json({ 
        error: 'Forbidden: Cannot access memberships outside your organization context' 
      });
    }
    
    // Check if user is an admin of the organization
    const isAdmin = await membershipModel.checkUserRole(req.user.uid, organizationId, 'admin');
    
    if (!isAdmin && !isSuperAdmin) {
      return res.status(403).json({ 
        error: 'No tienes permisos para ver todas las membresías de la organización' 
      });
    }
    
    // User is admin or super admin, proceed to get all memberships for the organization
    try {
      const memberships = await membershipModel.getMembershipsByOrganization(organizationId);
      res.status(200).json(memberships);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving memberships', details: error.message });
    }
  } 
  // If requesting by userId, check if it's the current user or admin
  else if (userId) {
    // Multitenancy: Allow super admin, or same user, or organization admin 
    if (isSuperAdmin) {
      await fetchUserMemberships();
    }
    
    // Check if this is the authenticated user (always allowed to see own memberships)
    if (req.user.uid === userId) {
      await fetchUserMemberships();
    }
    
    // If organization context is set, verify admin role in that organization
    if (req.organizationId) {
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin');
      
      if (!isAdmin) {
        return res.status(403).json({ 
          error: 'Forbidden: Only organization admins can view other users\' memberships'
        });
      }
      
      // Check if target user is in this organization
      const isMember = await membershipModel.checkUserRole(userId, req.organizationId, null);
      
      if (!isMember) {
        return res.status(403).json({ 
          error: 'Forbidden: Cannot access memberships for users outside your organization'
        });
      }
      
      await fetchUserMemberships();
    } else if (req.user.role === 'admin') { 
      // Global admin without org context
      await fetchUserMemberships();
    } else {
      return res.status(403).json({ 
        error: 'You can only view your own memberships' 
      });
    }
  }
  
  async function fetchUserMemberships() {
    // Apply organization filter for non-super admin with org context
    const orgFilter = (!isSuperAdmin && req.organizationId) ? req.organizationId : null;
    
    try {
      const memberships = await membershipModel.getMembershipsByUser(userId, orgFilter);
      res.status(200).json(memberships);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving memberships', details: error.message });
    }
  }
};

exports.getMembershipById = async (req, res) => {
  try {
    // The membership is already loaded in req.resourceObj by the loadMembershipResource middleware
    const membership = req.resourceObj;
    
    // Multitenancy: Super admin can access any membership
    if (req.user.isSuperAdmin) {
      return res.status(200).json(membership);
    }
    
    // Multitenancy: Check organization context
    if (req.organizationId && membership.organizationId !== req.organizationId) {
      return res.status(403).json({ 
        error: 'Forbidden: Cannot access membership outside your organization context'
      });
    }
    
    // Check if the user has permission to view this membership
    if (req.user.uid !== membership.userId && req.user.role !== 'admin') {
      // Check if the user is an admin of the organization
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
      
      if (!isAdmin) {
        return res.status(403).json({ error: 'You do not have permission to view this membership' });
      }
    }
    
    // User is either the member, a global admin, or an org admin
    res.status(200).json(membership);
  } catch (error) {
    console.error('Error in getMembershipById:', error);
    res.status(500).json({ error: 'Error retrieving membership', details: error.message });
  }
};

exports.inviteUser = async (req, res) => {
  const { organizationId, userId, role = 'member' } = req.body;
  
  // Multitenancy: Check organization context
  if (req.organizationId && organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.status(403).json({ 
      error: 'Forbidden: Cannot invite users to organizations outside your context'
    });
  }
  
  // Super admin can invite anyone
  if (req.user.isSuperAdmin) {
    await createMembership();
    return;
  }
  
  // Verificar si el invitador tiene permiso para añadir miembros
  const isAdmin = await membershipModel.checkUserRole(req.user.uid, organizationId, 'admin');
  
  if (!isAdmin) {
    return res.status(403).json({ error: 'Unauthorized. Only admins can invite users.' });
  }
  
  async function createMembership() {
    const membershipData = {
      organizationId,
      userId,
      role,
      permissions: getPermissionsForRole(role),
      invitedBy: req.user.uid
    };
    
    try {
      const membership = await membershipModel.createMembership(membershipData);
      res.status(201).json(membership);
    } catch (error) {
      res.status(500).json({ error: 'Error inviting user', details: error.message });
    }
  }
};

exports.updateMemberRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  
  // Verificar que el rol sea válido
  if (!['admin', 'manager', 'moderator', 'volunteer', 'observer'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role' });
  }
  
  // Obtener la membresía para verificar la organización
  const membership = await membershipModel.getMembershipById(id);
  
  if (req.organizationId && membership.organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.status(403).json({ 
      error: 'Forbidden: Cannot modify membership outside your organization context'
    });
  }
  
  // Super admin can update any membership
  if (req.user.isSuperAdmin) {
    await updateMembershipRole();
    return;
  }
  
  // Verificar si el modificador tiene permisos de admin en esta organización
  const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
  
  if (!isAdmin) {
    return res.status(403).json({ error: 'Unauthorized. Only admins can modify roles.' });
  }
  
  async function updateMembershipRole() {
    const updateData = {
      role,
      permissions: getPermissionsForRole(role)
    };
    
    try {
      const updatedMembership = await membershipModel.updateMembership(id, updateData);
      res.status(200).json(updatedMembership);
    } catch (error) {
      res.status(500).json({ error: 'Error updating membership', details: error.message });
    }
  }
};

exports.removeMember = async (req, res) => {
  const { id } = req.params;
  
  // Obtener la membresía para verificar la organización
  const membership = await membershipModel.getMembershipById(id);
  
  if (req.organizationId && membership.organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.status(403).json({ 
      error: 'Forbidden: Cannot remove membership outside your organization context'
    });
  }
  
  // Super admin can remove any membership
  if (req.user.isSuperAdmin) {
    await removeMembership();
    return;
  }
  
  // Verificar si el modificador tiene permisos de admin o si es el propio usuario abandonando
  if (req.user.uid === membership.userId) {
    // Usuario abandonando
    await removeMembership('You have left the organization successfully');
  } else {
    // Admin removiendo a alguien
    const isAdmin = await membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin');
    
    if (!isAdmin) {
      return res.status(403).json({ error: 'Unauthorized. Only admins can remove members.' });
    }
    
    await removeMembership('Member removed successfully');
  }
  
  async function removeMembership(message = 'Membership removed successfully') {
    try {
      await membershipModel.deleteMembership(id);
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ error: 'Error removing membership', details: error.message });
    }
  }
};

// Función de utilidad para asignar permisos según el rol
function getPermissionsForRole(role) {
  switch (role) {
    case 'admin':
      return ['all'];
    case 'manager':
      return ['create_pet', 'edit_pet', 'delete_pet', 'invite_member'];
    case 'moderator':
      return ['create_pet', 'edit_pet', 'approve_pet'];
    case 'volunteer':
      return ['create_pet', 'edit_own_pet'];
    case 'observer':
      return ['view'];
    default:
      return ['view'];
  }
}