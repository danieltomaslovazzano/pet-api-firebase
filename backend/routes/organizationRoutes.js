// routes/organizationRoutes.js
const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const membershipController = require('../controllers/membershipController');
const { verifyToken } = require('../middlewares/auth');

// Aplicar middleware de autenticación a todas las rutas
router.use(verifyToken);

// Rutas para organizaciones
router.post('/', organizationController.createOrganization);
router.get('/:id', organizationController.getOrganizationById);
router.put('/:id', organizationController.updateOrganization);
router.delete('/:id', organizationController.deleteOrganization);
router.get('/:id/members', organizationController.getOrganizationMembers);

// Rutas para gestión de membresías
router.post('/memberships', membershipController.inviteUser);
router.put('/memberships/:id', membershipController.updateMemberRole);
router.delete('/memberships/:id', membershipController.removeMember);

module.exports = router;