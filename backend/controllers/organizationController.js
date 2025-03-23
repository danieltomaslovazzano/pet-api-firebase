// controllers/organizationController.js
const organizationModel = require('../models/organizationModel');
const membershipModel = require('../models/membershipModel');

exports.createOrganization = (req, res) => {
  // Añadir el ID del usuario actual como creador
  const orgData = {
    ...req.body,
    createdBy: req.user.uid
  };
  
  organizationModel.createOrganization(orgData, (err, newOrg) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating organization', details: err.message });
    }
    res.status(201).json(newOrg);
  });
};

exports.getOrganizationById = (req, res) => {
  const { id } = req.params;
  organizationModel.getOrganizationById(id, (err, organization) => {
    if (err) {
      return res.status(404).json({ error: 'Organization not found', details: err.message });
    }
    res.status(200).json(organization);
  });
};

exports.updateOrganization = (req, res) => {
  const { id } = req.params;
  const orgData = req.body;
  
  // Verificar si el usuario tiene permiso para actualizar esta organización
  membershipModel.checkUserRole(req.user.uid, id, 'admin', (err, isAdmin) => {
    if (err || !isAdmin) {
      return res.status(403).json({ error: 'Unauthorized. Only admins can update organization details.' });
    }
    
    organizationModel.updateOrganization(id, orgData, (err, updatedOrg) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating organization', details: err.message });
      }
      res.status(200).json(updatedOrg);
    });
  });
};

exports.deleteOrganization = (req, res) => {
  const { id } = req.params;
  
  // Verificar si el usuario tiene permiso para eliminar esta organización
  membershipModel.checkUserRole(req.user.uid, id, 'admin', (err, isAdmin) => {
    if (err || !isAdmin) {
      return res.status(403).json({ error: 'Unauthorized. Only admins can delete organizations.' });
    }
    
    organizationModel.deleteOrganization(id, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting organization', details: err.message });
      }
      res.status(200).json(result);
    });
  });
};

exports.getOrganizationMembers = (req, res) => {
  const { id } = req.params;
  
  // Verificar si el usuario pertenece a esta organización
  membershipModel.checkUserRole(req.user.uid, id, null, (err, isMember) => {
    if (err || !isMember) {
      return res.status(403).json({ error: 'Unauthorized. You must be a member to view organization members.' });
    }
    
    organizationModel.getOrganizationMembers(id, (err, members) => {
      if (err) {
        return res.status(500).json({ error: 'Error retrieving organization members', details: err.message });
      }
      res.status(200).json(members);
    });
  });
};