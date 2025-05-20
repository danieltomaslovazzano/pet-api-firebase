// controllers/organizationController.js
const { organizationModel, membershipModel } = require('../models/adapter');

exports.createOrganization = async (req, res) => {
  // Añadir el ID del usuario actual como creador
  const orgData = {
    ...req.body,
    createdBy: req.user.uid
  };
  
  // No need to set organizationId when creating an organization
  // The organization itself is the tenant, not part of another tenant
  
  try {
    const newOrg = await organizationModel.createOrganization(orgData);
    res.status(201).json(newOrg);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating organization', details: err.message });
  }
};

exports.getOrganizationById = async (req, res) => {
  const { id } = req.params;

  // Multitenancy: ensure only members can view organization details unless super admin
  if (!req.user.isSuperAdmin && req.organizationId && id !== req.organizationId) {
    try {
      const isMember = await membershipModel.checkUserRole(req.user.uid, id, null);
      if (!isMember) {
        return res.status(403).json({ error: 'Unauthorized. You must be a member to view this organization.' });
      }
      await fetchOrganization();
    } catch (err) {
      return res.status(403).json({ error: 'Unauthorized. You must be a member to view this organization.' });
    }
  } else {
    // Super admin o user is requesting their current organization
    await fetchOrganization();
  }

  async function fetchOrganization() {
    try {
      const organization = await organizationModel.getOrganizationById(id);
      res.status(200).json(organization);
    } catch (err) {
      return res.status(404).json({ error: 'Organization not found', details: err.message });
    }
  }
};

exports.updateOrganization = async (req, res) => {
  const { id } = req.params;
  const orgData = req.body;
  
  // Multitenancy: super admin can update any org, others must be admin of the org
  if (req.user.isSuperAdmin) {
    await performUpdate();
  } else {
    try {
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, id, 'admin');
      if (!isAdmin) {
        return res.status(403).json({ error: 'Unauthorized. Only admins can update organization details.' });
      }
      await performUpdate();
    } catch (err) {
      return res.status(403).json({ error: 'Unauthorized. Only admins can update organization details.' });
    }
  }

  async function performUpdate() {
    try {
      const updatedOrg = await organizationModel.updateOrganization(id, orgData);
      res.status(200).json(updatedOrg);
    } catch (err) {
      return res.status(500).json({ error: 'Error updating organization', details: err.message });
    }
  }
};

exports.deleteOrganization = async (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: super admin can delete any org, others must be admin of the org
  if (req.user.isSuperAdmin) {
    await performDelete();
  } else {
    try {
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, id, 'admin');
      if (!isAdmin) {
        return res.status(403).json({ error: 'Unauthorized. Only admins can delete organizations.' });
      }
      await performDelete();
    } catch (err) {
      return res.status(403).json({ error: 'Unauthorized. Only admins can delete organizations.' });
    }
  }

  async function performDelete() {
    try {
      const result = await organizationModel.deleteOrganization(id);
      res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: 'Error deleting organization', details: err.message });
    }
  }
};

exports.getOrganizationMembers = async (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: super admin can view any org members, others must be a member of the org
  if (req.user.isSuperAdmin) {
    await fetchMembers();
  } else {
    try {
      const isMember = await membershipModel.checkUserRole(req.user.uid, id, null);
      if (!isMember) {
        return res.status(403).json({ error: 'Unauthorized. You must be a member to view organization members.' });
      }
      await fetchMembers();
    } catch (err) {
      return res.status(403).json({ error: 'Unauthorized. You must be a member to view organization members.' });
    }
  }

  async function fetchMembers() {
    try {
      const members = await organizationModel.getOrganizationMembers(id);
      res.status(200).json(members);
    } catch (err) {
      return res.status(500).json({ error: 'Error retrieving organization members', details: err.message });
    }
  }
};

exports.getOrganizations = async (req, res) => {
  // Get query parameters for filtering
  const filters = {
    name: req.query.name,
    type: req.query.type,
    status: req.query.status,
    createdBy: req.query.createdBy
  };

  // Multitenancy: filter by organizations the user is a member of, unless super admin
  if (!req.user.isSuperAdmin) {
    try {
      const memberships = await membershipModel.getUserMemberships(req.user.uid);
      const orgIds = memberships.map(m => m.organizationId);
      filters.id = orgIds; // Filter to only include orgs the user belongs to
      const organizations = await organizationModel.getOrganizations(filters);
      res.status(200).json(organizations);
    } catch (err) {
      return res.status(500).json({ error: 'Error retrieving organizations', details: err.message });
    }
  } else {
    try {
      const organizations = await organizationModel.getOrganizations(filters);
      res.status(200).json(organizations);
    } catch (err) {
      return res.status(500).json({ error: 'Error retrieving organizations', details: err.message });
    }
  }
};