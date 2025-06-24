// controllers/organizationController.js
const { organizationModel, membershipModel } = require('../models/adapter');
const { 
  getAllOrganizationTypes, 
  getOrganizationType,
  isValidOrganizationType,
  validateOrganizationByType
} = require('../config/organizationTypes');

exports.createOrganization = async (req, res) => {
  // Añadir el ID del usuario actual como creador
  const orgData = {
    ...req.body,
    createdBy: req.user.uid
  };
  
  // Validar tipo de organización si se proporciona
  if (orgData.type && !isValidOrganizationType(orgData.type)) {
    return res.apiValidationError([{
      field: 'type',
      code: 'INVALID_TYPE',
      messageKey: 'organizations.type.invalid'
    }], 'organizations.create.validation_failed', {
      availableTypes: Object.keys(getAllOrganizationTypes())
    });
  }
  
  // Validate organization data based on its type
  const typeValidation = validateOrganizationByType(orgData.type, orgData);
  if (!typeValidation.isValid) {
    const validationErrors = typeValidation.errors.map(error => ({
      field: error.includes('email') ? 'email' : 
             error.includes('address') ? 'address' :
             error.includes('phone') ? 'phone' :
             error.includes('name') ? 'name' : 'general',
      code: 'REQUIRED_FIELD',
      message: error
    }));
    
    return res.apiValidationError(validationErrors, 'organizations.create.validation_failed');
  }
  
  // No need to set organizationId when creating an organization
  // The organization itself is the tenant, not part of another tenant
  
  try {
    const newOrg = await organizationModel.createOrganization(orgData);
    res.apiCreated(newOrg, 'organizations.create.success', {}, { organizationName: orgData.name });
  } catch (err) {
    return res.apiServerError('organizations.create.internal_error', { 
      originalError: err.message 
    });
  }
};

exports.getOrganizationById = async (req, res) => {
  const { id } = req.params;

  // Validar formato UUID antes de consultar
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(id)) {
    return res.apiNotFound('organizations.get.invalid_id');
  }

  // Multitenancy: ensure only members can view organization details unless super admin
  if (!req.user.isSuperAdmin && req.organizationId && id !== req.organizationId) {
    try {
      const isMember = await membershipModel.checkUserRole(req.user.uid, id, null);
      if (!isMember) {
        return res.apiForbidden('organizations.get.member_required');
      }
      await fetchOrganization();
    } catch (err) {
      return res.apiForbidden('organizations.get.member_required');
    }
  } else {
    // Super admin o user is requesting their current organization
    await fetchOrganization();
  }

  async function fetchOrganization() {
    try {
      const organization = await organizationModel.getOrganizationById(id);
      if (!organization) {
        return res.apiNotFound('organizations.get.not_found');
      }
      res.apiSuccess(organization, 'organizations.get.success', {}, { organizationId: id });
    } catch (err) {
      return res.apiNotFound('organizations.get.not_found', { 
        originalError: err.message 
      });
    }
  }
};

exports.updateOrganization = async (req, res) => {
  const { id } = req.params;
  const orgData = req.body;
  
  // Validar tipo de organización si se está actualizando
  if (orgData.type && !isValidOrganizationType(orgData.type)) {
    return res.apiValidationError([{
      field: 'type',
      code: 'INVALID_TYPE',
      messageKey: 'organizations.type.invalid'
    }], 'organizations.update.validation_failed', {
      availableTypes: Object.keys(getAllOrganizationTypes())
    });
  }
  
  // If type is being updated, validate the full organization data with the new type
  if (orgData.type) {
    try {
      // Get current organization data to merge with updates
      const currentOrg = await organizationModel.getOrganizationById(id);
      if (!currentOrg) {
        return res.apiNotFound('organizations.update.not_found');
      }
      
      // Merge current data with updates
      const mergedData = { ...currentOrg, ...orgData };
      
      // Validate merged data with the new type
      const typeValidation = validateOrganizationByType(orgData.type, mergedData);
      if (!typeValidation.isValid) {
        const validationErrors = typeValidation.errors.map(error => ({
          field: error.includes('email') ? 'email' : 
                 error.includes('address') ? 'address' :
                 error.includes('phone') ? 'phone' :
                 error.includes('name') ? 'name' : 'general',
          code: 'REQUIRED_FIELD',
          message: error
        }));
        
        return res.apiValidationError(validationErrors, 'organizations.update.validation_failed');
      }
    } catch (err) {
      return res.apiServerError('organizations.update.validation_error', { 
        originalError: err.message 
      });
    }
  }
  
  // Multitenancy: super admin can update any org, others must be admin of the org
  if (req.user.isSuperAdmin) {
    await performUpdate();
  } else {
    try {
      const isAdmin = await membershipModel.checkUserRole(req.user.uid, id, 'admin');
      if (!isAdmin) {
        return res.apiForbidden('organizations.update.admin_required');
      }
      await performUpdate();
    } catch (err) {
      return res.apiForbidden('organizations.update.admin_required');
    }
  }

  async function performUpdate() {
    try {
      const updatedOrg = await organizationModel.updateOrganization(id, orgData);
      res.apiSuccess(updatedOrg, 'organizations.update.success', {}, { organizationId: id });
    } catch (err) {
      if (err.message && err.message.includes('not found')) {
        return res.apiNotFound('organizations.update.not_found');
      }
      return res.apiServerError('organizations.update.internal_error', { 
        originalError: err.message 
      });
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
        return res.apiForbidden('organizations.delete.admin_required');
      }
      await performDelete();
    } catch (err) {
      return res.apiForbidden('organizations.delete.admin_required');
    }
  }

  async function performDelete() {
    try {
      await organizationModel.deleteOrganization(id);
      res.apiDeleted('organizations.delete.success', {}, { organizationId: id });
    } catch (err) {
      if (err.message && err.message.includes('not found')) {
        return res.apiNotFound('organizations.delete.not_found');
      }
      return res.apiServerError('organizations.delete.internal_error', { 
        originalError: err.message 
      });
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
        return res.apiForbidden('organizations.members.member_required');
      }
    } catch (err) {
      return res.apiForbidden('organizations.members.member_required');
    }
  }

  try {
    const members = await organizationModel.getOrganizationMembers(id);
    res.apiList(members, 'organizations.members.success', { 
      count: members.length 
    }, { organizationId: id });
  } catch (err) {
    return res.apiServerError('organizations.members.internal_error', { 
      originalError: err.message 
    });
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
    return res.apiValidationError([{
      field: 'type',
      code: 'INVALID_TYPE',
      messageKey: 'organizations.type.invalid'
    }], 'organizations.list.validation_failed', {
      availableTypes: Object.keys(getAllOrganizationTypes())
    });
  }

  // Multitenancy: filter by organizations the user is a member of, unless super admin
  if (!req.user.isSuperAdmin) {
    try {
      const memberships = await membershipModel.getUserMemberships(req.user.uid);
      const orgIds = memberships.map(m => m.organizationId);
      filters.id = orgIds; // Filter to only include orgs the user belongs to
      const organizations = await organizationModel.getOrganizations(filters);
      res.apiList(organizations, 'organizations.list.success', { 
        count: organizations.length,
        scope: 'user'
      });
    } catch (err) {
      return res.apiServerError('organizations.list.internal_error', { 
        originalError: err.message 
      });
    }
  } else {
    try {
      const organizations = await organizationModel.getOrganizations(filters);
      res.apiList(organizations, 'organizations.list.success', { 
        count: organizations.length,
        scope: 'admin'
      });
    } catch (err) {
      return res.apiServerError('organizations.list.internal_error', { 
        originalError: err.message 
      });
    }
  }
};

/**
 * Get available organization types
 */
exports.getOrganizationTypes = async (req, res) => {
  try {
    const types = getAllOrganizationTypes();
    res.apiSuccess(types, 'organizations.types.success', { 
      count: Object.keys(types).length 
    });
  } catch (err) {
    return res.apiServerError('organizations.types.internal_error', { 
      originalError: err.message 
    });
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
      return res.apiNotFound('organizations.type_info.not_found');
    }
    res.apiSuccess(orgType, 'organizations.type_info.success', {}, { type });
  } catch (err) {
    return res.apiServerError('organizations.type_info.internal_error', { 
      originalError: err.message 
    });
  }
};