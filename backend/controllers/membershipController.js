// controllers/membershipController.js
const membershipModel = require('../models/membershipModel');

exports.getMemberships = (req, res) => {
  const { userId, organizationId } = req.query;
  
  // At least one filter must be provided
  if (!userId && !organizationId) {
    return res.status(400).json({ error: 'Either userId or organizationId must be provided' });
  }
  
  // If requesting by organizationId, check user permissions
  if (organizationId && !userId) {
    // Check if user is an admin of the organization
    membershipModel.checkUserRole(req.user.uid, organizationId, 'admin', (err, isAdmin) => {
      if (err) {
        return res.status(500).json({ error: 'Error checking permissions', details: err.message });
      }
      
      if (!isAdmin) {
        return res.status(403).json({ 
          error: 'No tienes permisos para ver todas las membresías de la organización' 
        });
      }
      
      // User is admin, proceed to get all memberships for the organization
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
    // Only allow users to see their own memberships unless they're an admin
    if (req.user.uid !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ 
        error: 'You can only view your own memberships' 
      });
    }
    
    membershipModel.getMembershipsByUser(userId, (err, memberships) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving memberships', details: err.message });
      }
      res.status(200).json(memberships);
    });
  }
};

exports.getMembershipById = (req, res) => {
  // The membership is already loaded in req.resourceObj by the loadMembershipResource middleware
  const membership = req.resourceObj;
  
  // Check if the user has permission to view this membership
  if (req.user.uid !== membership.userId && req.user.role !== 'admin') {
    // Check if the user is an admin of the organization
    membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin', (err, isAdmin) => {
      if (err || !isAdmin) {
        return res.status(403).json({ error: 'You do not have permission to view this membership' });
      }
      
      // User is admin of the organization, allow access
      res.status(200).json(membership);
    });
  } else {
    // User is either the member or a global admin
    res.status(200).json(membership);
  }
};

exports.inviteUser = (req, res) => {
  const { organizationId, userId, role = 'member' } = req.body;
  
  // Verificar si el invitador tiene permiso para añadir miembros
  membershipModel.checkUserRole(req.user.uid, organizationId, 'admin', (err, isAdmin) => {
    if (err || !isAdmin) {
      return res.status(403).json({ error: 'Unauthorized. Only admins can invite users.' });
    }
    
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
  });
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
    
    // Verificar si el modificador tiene permisos de admin en esta organización
    membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin', (err, isAdmin) => {
      if (err || !isAdmin) {
        return res.status(403).json({ error: 'Unauthorized. Only admins can modify roles.' });
      }
      
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
    });
  });
};

exports.removeMember = (req, res) => {
  const { id } = req.params;
  
  // Obtener la membresía para verificar la organización
  membershipModel.getMembershipById(id, (err, membership) => {
    if (err) {
      return res.status(404).json({ error: 'Membership not found', details: err.message });
    }
    
    // Verificar si el modificador tiene permisos de admin o si es el propio usuario abandonando
    if (req.user.uid === membership.userId) {
      // Usuario abandonando
      membershipModel.deleteMembership(id, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Error removing membership', details: err.message });
        }
        res.status(200).json({ message: 'You have left the organization successfully' });
      });
    } else {
      // Admin removiendo a alguien
      membershipModel.checkUserRole(req.user.uid, membership.organizationId, 'admin', (err, isAdmin) => {
        if (err || !isAdmin) {
          return res.status(403).json({ error: 'Unauthorized. Only admins can remove members.' });
        }
        
        membershipModel.deleteMembership(id, (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Error removing membership', details: err.message });
          }
          res.status(200).json({ message: 'Member removed successfully' });
        });
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