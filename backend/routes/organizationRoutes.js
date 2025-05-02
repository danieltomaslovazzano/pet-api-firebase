// routes/organizationRoutes.js
const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const membershipController = require('../controllers/membershipController');
const { requireAuth, protectResource } = require('../middlewares');

// Aplicar middleware de autenticación a todas las rutas
router.use(requireAuth);

// Rutas para organizaciones
router.post('/', requireAuth, organizationController.createOrganization);
router.get('/:id', requireAuth, organizationController.getOrganizationById);

// Rutas protegidas por permisos de organización
router.put('/:id', 
  ...protectResource('organizations', 'update'),
  organizationController.updateOrganization
);

router.delete('/:id', 
  ...protectResource('organizations', 'delete'),
  organizationController.deleteOrganization
);

router.get('/:id/members', requireAuth, organizationController.getOrganizationMembers);

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