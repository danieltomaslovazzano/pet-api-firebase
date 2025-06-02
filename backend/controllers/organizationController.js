// controllers/organizationController.js
const { organizationModel, membershipModel } = require('../models/adapter');
const { 
  getAllOrganizationTypes, 
  getOrganizationType,
  isValidOrganizationType 
} = require('../config/organizationTypes');

exports.createOrganization = async (req, res) => {
  // Añadir el ID del usuario actual como creador
  const orgData = {
    ...req.body,
    createdBy: req.user.uid
  };
  
  // Validar tipo de organización si se proporciona
  if (orgData.type && !isValidOrganizationType(orgData.type)) {
    return res.error('organizations.invalid_type', 400, {
      type: orgData.type,
      availableTypes: Object.keys(getAllOrganizationTypes()).join(', ')
    });
  }
  
  // No need to set organizationId when creating an organization
  // The organization itself is the tenant, not part of another tenant
  
  try {
    const newOrg = await organizationModel.createOrganization(orgData);
    res.created('organizations.created', newOrg);
  } catch (err) {
    return res.serverError('organizations.error_creating', { error: err.message });
  }
};

exports.getOrganizationById = async (req, res) => {
  const { id } = req.params;

  // Validar formato UUID antes de consultar
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return res.notFound('organizations.not_found', { details: 'Invalid organization ID format' });
  }

  // Multitenancy: ensure only members can view organization details unless super admin
  if (!req.user.isSuperAdmin && req.organizationId && id !== req.organizationId) {
    try {
      const isMember = await membershipModel.checkUserRole(req.user.uid, id, null);
      if (!isMember) {
        return res.forbidden('organizations.unauthorized_view_organization');
      }
      await fetchOrganization();
    } catch (err) {
      return res.forbidden('organizations.unauthorized_view_organization');
    }
  } else {
    // Super admin o user is requesting their current organization
    await fetchOrganization();
  }

  async function fetchOrganization() {
    try {
      const organization = await organizationModel.getOrganizationById(id);
      if (!organization) {
        return res.notFound('organizations.not_found');
      }
      res.data(organization);
    } catch (err) {
      return res.notFound('organizations.not_found', { error: err.message });
    }
  }
};

exports.updateOrganization = async (req, res) => {
  const { id } = req.params;
  const orgData = req.body;
  
  // Validar tipo de organización si se está actualizando
  if (orgData.type && !isValidOrganizationType(orgData.type)) {
    return res.error('organizations.invalid_type', 400, {
      type: orgData.type,
      availableTypes: Object.keys(getAllOrganizationTypes()).join(', ')
    });
  }
  
  // Multitenancy: super admin can update any org, others must be admin of the org
  if (req.user.isSuperAdmin) {
    await performUpdate();
  } else {
    try {
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, id, 'admin');
      if (!isAdmin) {
        return res.forbidden('organizations.unauthorized_update');
      }
      await performUpdate();
    } catch (err) {
      return res.forbidden('organizations.unauthorized_update');
    }
  }

  async function performUpdate() {
    try {
      const updatedOrg = await organizationModel.updateOrganization(id, orgData);
      res.updated('organizations.updated', updatedOrg);
    } catch (err) {
      if (err.message && err.message.includes('not found')) {
        return res.notFound('organizations.not_found', { error: err.message });
      }
      return res.serverError('organizations.error_updating', { error: err.message });
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
        return res.forbidden('organizations.unauthorized_delete');
      }
      await performDelete();
    } catch (err) {
      return res.forbidden('organizations.unauthorized_delete');
    }
  }

  async function performDelete() {
    try {
      await organizationModel.deleteOrganization(id);
      res.deleted('organizations.deleted');
    } catch (err) {
      if (err.message && err.message.includes('not found')) {
        return res.notFound('organizations.not_found', { error: err.message });
      }
      return res.serverError('organizations.error_deleting', { error: err.message });
    }
  }
};

exports.getOrganizationMembers = async (req, res) => {
  const { id } = req.params;
  
  // Multitenancy: ensure only members can view organization members unless super admin
  if (!req.user.isSuperAdmin) {
    try {
      const isMember = await membershipModel.checkUserRole(req.user.uid, id, null);
      if (!isMember) {
        return res.forbidden('organizations.unauthorized_view_members');
      }
    } catch (err) {
      return res.forbidden('organizations.unauthorized_view_members');
    }
  }

  try {
    const members = await organizationModel.getOrganizationMembers(id);
    res.list(members);
  } catch (err) {
    return res.serverError('organizations.error_retrieving_members', { error: err.message });
  }
};

exports.getOrganizations = async (req, res) => {
  // Get query parameters for filtering
  const filters = {
    name: req.query.name,
    type: req.query.type, // Soporte para filtrar por tipo
    status: req.query.status,
    createdBy: req.query.createdBy
  };

  // Validar tipo si se proporciona en el filtro
  if (filters.type && !isValidOrganizationType(filters.type)) {
    return res.error('organizations.invalid_type_filter', 400, {
      type: filters.type,
      availableTypes: Object.keys(getAllOrganizationTypes()).join(', ')
    });
  }

  // Multitenancy: filter by organizations the user is a member of, unless super admin
  if (!req.user.isSuperAdmin) {
    try {
      const memberships = await membershipModel.getUserMemberships(req.user.uid);
      const orgIds = memberships.map(m => m.organizationId);
      filters.id = orgIds; // Filter to only include orgs the user belongs to
      const organizations = await organizationModel.getOrganizations(filters);
      res.list(organizations);
    } catch (err) {
      return res.serverError('organizations.error_retrieving', { error: err.message });
    }
  } else {
    try {
      const organizations = await organizationModel.getOrganizations(filters);
      res.list(organizations);
    } catch (err) {
      return res.serverError('organizations.error_retrieving', { error: err.message });
    }
  }
};

/**
 * Get available organization types
 */
exports.getOrganizationTypes = async (req, res) => {
  try {
    const types = getAllOrganizationTypes();
    res.data(types);
  } catch (err) {
    return res.serverError('organizations.error_retrieving_types', { error: err.message });
  }
};

/**
 * Get specific organization type information
 */
exports.getOrganizationTypeInfo = async (req, res) => {
  const { type } = req.params;
  
  try {
    const orgType = getOrganizationType(type);
    if (!orgType) {
      return res.notFound('organizations.organization_type_not_found');
    }
    res.data(orgType);
  } catch (err) {
    return res.serverError('organizations.error_retrieving_type', { error: err.message });
  }
};