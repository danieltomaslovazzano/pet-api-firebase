// controllers/membershipController.js
const { membershipModel } = require('../models/adapter');

exports.getMemberships = (req, res) => {
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
    membershipModel.checkUserRole(req.user.uid, organizationId, 'admin', (err, isAdmin) => {
      if (err) {
        return res.status(500).json({ error: 'Error checking permissions', details: err.message });
      }
      
      if (!isAdmin && !isSuperAdmin) {
        return res.status(403).json({ 
          error: 'No tienes permisos para ver todas las membresías de la organización' 
        });
      }
      
      // User is admin or super admin, proceed to get all memberships for the organization
      membershipModel.getMembershipsByOrganization(organizationId, (err, memberships) => {
        if (err) {
          return res.status(500).json({ error: 'Error retrieving memberships', details: err.message });
        }
        res.status(200).json(memberships);
      });
    });
  } 
  // If requesting by userId, check if it's the current user or admin
  else if (userId) {
    // Multitenancy: Allow super admin, or same user, or organization admin 
    if (isSuperAdmin) {
      return fetchUserMemberships();
    }
    
    // Check if this is the authenticated user (always allowed to see own memberships)
    if (req.user.uid === userId) {
      return fetchUserMemberships();
    }
    
    // If organization context is set, verify admin role in that organization
    if (req.organizationId) {
      membershipModel.checkUserRole(req.user.uid, req.organizationId, 'admin', (err, isAdmin) => {
        if (err) {
          return res.status(500).json({ error: 'Error checking permissions', details: err.message });
        }
        
        if (!isAdmin) {
          return res.status(403).json({ 
            error: 'Forbidden: Only organization admins can view other users\' memberships'
          });
        }
        
        // Check if target user is in this organization
        membershipModel.checkUserRole(userId, req.organizationId, null, (err, isMember) => {
          if (err || !isMember) {
            return res.status(403).json({ 
              error: 'Forbidden: Cannot access memberships for users outside your organization'
            });
          }
          
          fetchUserMemberships();
        });
      });
    } else if (req.user.role === 'admin') { 
      // Global admin without org context
      fetchUserMemberships();
    } else {
      return res.status(403).json({ 
        error: 'You can only view your own memberships' 
      });
    }
  }
  
  function fetchUserMemberships() {
    // Apply organization filter for non-super admin with org context
    const orgFilter = (!isSuperAdmin && req.organizationId) ? req.organizationId : null;
    
    membershipModel.getMembershipsByUser(userId, orgFilter, (err, memberships) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving memberships', details: err.message });
      }
      res.status(200).json(memberships);
    });
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

exports.inviteUser = (req, res) => {
  const { organizationId, userId, role = 'member' } = req.body;
  
  // Multitenancy: Check organization context
  if (req.organizationId && organizationId !== req.organizationId && !req.user.isSuperAdmin) {
    return res.status(403).json({ 
      error: 'Forbidden: Cannot invite users to organizations outside your context'
    });
  }
  
  // Super admin can invite anyone
  if (req.user.isSuperAdmin) {
    createMembership();
    return;
  }
  
  // Verificar si el invitador tiene permiso para añadir miembros
  membershipModel.checkUserRole(req.user.uid, organizationId, 'admin', (err, isAdmin) => {
    if (err || !isAdmin) {
      return res.status(403).json({ error: 'Unauthorized. Only admins can invite users.' });
    }
    
    createMembership();
  });
  
  function createMembership() {
    const membershipData = {
      organizationId,
      userId,
      role,
      permissions: getPermissionsForRole(role),
      invitedBy: req.user.uid
    };
    
    membershipModel.createMembership(membershipData, (err, membership) => {
      if (err) {
        return res.status(500).json({ error: 'Error inviting user', details: err.message });
      }
      res.status(201).json(membership);
    });
  }
};

exports.updateMemberRole = (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  
  // Verificar que el rol sea válido
  if (!['admin', 'manager', 'moderator', 'volunteer', 'observer'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role' });
  }
  
  // Obtener la membresía para verificar la organización
  membershipModel.getMembershipById(id, (err, membership) => {
    if (err) {
      return res.status(404).json({ error: 'Membership not found', details: err.message });
    }
    
    // Multitenancy: Check organization context
    if (req.organizationId && membership.organizationId !== req.organizationId && !req.user.isSuperAdmin) {
      return res.status(403).json({ 
        error: 'Forbidden: Cannot modify membership outside your organization context'
      });
    }
    
    // Super admin can update any membership
    if (req.user.isSuperAdmin) {
      updateMembershipRole();
      return;
    }
    
    // Verificar si el modificador tiene permisos de admin en esta organización
    membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin', (err, isAdmin) => {
      if (err || !isAdmin) {
        return res.status(403).json({ error: 'Unauthorized. Only admins can modify roles.' });
      }
      
      updateMembershipRole();
    });
    
    function updateMembershipRole() {
      const updateData = {
        role,
        permissions: getPermissionsForRole(role)
      };
      
      membershipModel.updateMembership(id, updateData, (err, updatedMembership) => {
        if (err) {
          return res.status(500).json({ error: 'Error updating membership', details: err.message });
        }
        res.status(200).json(updatedMembership);
      });
    }
  });
};

exports.removeMember = (req, res) => {
  const { id } = req.params;
  
  // Obtener la membresía para verificar la organización
  membershipModel.getMembershipById(id, (err, membership) => {
    if (err) {
      return res.status(404).json({ error: 'Membership not found', details: err.message });
    }
    
    // Multitenancy: Check organization context
    if (req.organizationId && membership.organizationId !== req.organizationId && !req.user.isSuperAdmin) {
      return res.status(403).json({ 
        error: 'Forbidden: Cannot remove membership outside your organization context'
      });
    }
    
    // Super admin can remove any membership
    if (req.user.isSuperAdmin) {
      removeMembership();
      return;
    }
    
    // Verificar si el modificador tiene permisos de admin o si es el propio usuario abandonando
    if (req.user.uid === membership.userId) {
      // Usuario abandonando
      removeMembership('You have left the organization successfully');
    } else {
      // Admin removiendo a alguien
      membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin', (err, isAdmin) => {
        if (err || !isAdmin) {
          return res.status(403).json({ error: 'Unauthorized. Only admins can remove members.' });
        }
        
        removeMembership('Member removed successfully');
      });
    }
    
    function removeMembership(message = 'Membership removed successfully') {
      membershipModel.deleteMembership(id, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Error removing membership', details: err.message });
        }
        res.status(200).json({ message });
      });
    }
  });
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