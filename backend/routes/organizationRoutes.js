// routes/organizationRoutes.js
const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const membershipController = require('../controllers/membershipController');
const { requireAuth, protectResource } = require('../middlewares');
const {
  validateCreateOrganization,
  validateUpdateOrganization,
  validateOrganizationId,
  validateOrganizationType,
  validateOrganizationQuery
} = require('../middlewares/validation/organizationValidation');

// Aplicar middleware de autenticación a todas las rutas
router.use(requireAuth);

// Rutas para listar organizaciones con filtros
router.get('/', validateOrganizationQuery, organizationController.getOrganizations);

// Rutas para organizaciones
router.post('/', validateCreateOrganization, organizationController.createOrganization);
router.get('/:id', validateOrganizationId, organizationController.getOrganizationById);

// Rutas protegidas por permisos de organización
router.put('/:id', 
  validateOrganizationId,
  validateUpdateOrganization,
  ...protectResource('organizations', 'update'),
  organizationController.updateOrganization
);

router.delete('/:id', 
  validateOrganizationId,
  ...protectResource('organizations', 'delete'),
  organizationController.deleteOrganization
);

router.get('/:id/members', validateOrganizationId, organizationController.getOrganizationMembers);

// Rutas para gestión de membresías
router.post('/memberships', requireAuth, membershipController.inviteUser);

router.put('/memberships/:id', 
  ...protectResource('organizations', 'updateMember'),
  membershipController.updateMemberRole
);

router.delete('/memberships/:id', 
  ...protectResource('organizations', 'removeMember'),
  membershipController.removeMember
);

module.exports = router;