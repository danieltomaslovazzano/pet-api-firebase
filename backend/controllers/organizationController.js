// controllers/organizationController.js
const { organizationModel, membershipModel } = require('../models/adapter');

exports.createOrganization = (req, res) => {
  // Añadir el ID del usuario actual como creador
  const orgData = {
    ...req.body,
    createdBy: req.user.uid
  };
  
  // No need to set organizationId when creating an organization
  // The organization itself is the tenant, not part of another tenant
  
  organizationModel.createOrganization(orgData, (err, newOrg) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating organization', details: err.message });
    }
    res.status(201).json(newOrg);
  });
};

exports.getOrganizationById = (req, res) => {
  const { id } = req.params;

  // Multitenancy: ensure only members can view organization details unless super admin
  if (!req.user.isSuperAdmin && req.organizationId && id !== req.organizationId) {
    membershipModel.checkUserRole(req.user.uid, id, null, (err, isMember) => {
      if (err || !isMember) {
        return res.status(403).json({ error: 'Unauthorized. You must be a member to view this organization.' });
      }
      
      // Continue with fetching the organization
      fetchOrganization();
    });
  } else {
    // Super admin or user is requesting their current organization
    fetchOrganization();
  }

  function fetchOrganization() {
    organizationModel.getOrganizationById(id, (err, organization) => {
      if (err) {
        return res.status(404).json({ error: 'Organization not found', details: err.message });
      }
      res.status(200).json(organization);
    });
  }
};

exports.updateOrganization = (req, res) => {
  const { id } = req.params;
  const orgData = req.body;
  
  // Multitenancy: super admin can update any org, others must be admin of the org
  if (req.user.isSuperAdmin) {
    performUpdate();
  } else {
    // Verificar si el usuario tiene permiso para actualizar esta organización
    membershipModel.checkUserRole(req.user.uid, id, 'admin', (err, isAdmin) => {
      if (err || !isAdmin) {
        return res.status(403).json({ error: 'Unauthorized. Only admins can update organization details.' });
      }
      performUpdate();
    });
  }

  function performUpdate() {
    organizationModel.updateOrganization(id, orgData, (err, updatedOrg) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating organization', details: err.message });
      }
      res.status(200).json(updatedOrg);
    });
  }
};

exports.deleteOrganization = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: super admin can delete any org, others must be admin of the org
  if (req.user.isSuperAdmin) {
    performDelete();
  } else {
    // Verificar si el usuario tiene permiso para eliminar esta organización
    membershipModel.checkUserRole(req.user.uid, id, 'admin', (err, isAdmin) => {
      if (err || !isAdmin) {
        return res.status(403).json({ error: 'Unauthorized. Only admins can delete organizations.' });
      }
      performDelete();
    });
  }

  function performDelete() {
    organizationModel.deleteOrganization(id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting organization', details: err.message });
      }
      res.status(200).json(result);
    });
  }
};

exports.getOrganizationMembers = (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: super admin can view any org members, others must be a member of the org
  if (req.user.isSuperAdmin) {
    fetchMembers();
  } else {
    // Verificar si el usuario pertenece a esta organización
    membershipModel.checkUserRole(req.user.uid, id, null, (err, isMember) => {
      if (err || !isMember) {
        return res.status(403).json({ error: 'Unauthorized. You must be a member to view organization members.' });
      }
      fetchMembers();
    });
  }

  function fetchMembers() {
    organizationModel.getOrganizationMembers(id, (err, members) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving organization members', details: err.message });
      }
      res.status(200).json(members);
    });
  }
};

exports.getOrganizations = (req, res) => {
  // Get query parameters for filtering
  const filters = {
    name: req.query.name,
    type: req.query.type,
    status: req.query.status,
    createdBy: req.query.createdBy
  };

  // Multitenancy: filter by organizations the user is a member of, unless super admin
  if (!req.user.isSuperAdmin) {
    // Only show organizations the user is a member of
    membershipModel.getUserMemberships(req.user.uid, (err, memberships) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving memberships', details: err.message });
      }
      
      const orgIds = memberships.map(m => m.organizationId);
      filters.id = orgIds; // Filter to only include orgs the user belongs to
      
      organizationModel.getOrganizations(filters, (err, organizations) => {
        if (err) {
          return res.status(500).json({ error: 'Error retrieving organizations', details: err.message });
        }
        res.status(200).json(organizations);
      });
    });
  } else {
    // Super admin can see all organizations
    organizationModel.getOrganizations(filters, (err, organizations) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving organizations', details: err.message });
      }
      res.status(200).json(organizations);
    });
  }
};