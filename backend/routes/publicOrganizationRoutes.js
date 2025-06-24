const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const { validateOrganizationType } = require('../middlewares/validation/organizationValidation');

// Rutas públicas para tipos de organización (no requieren autenticación)

// Obtener todos los tipos de organización disponibles
router.get('/', organizationController.getOrganizationTypes);

// Obtener información de un tipo específico de organización
router.get('/:type', validateOrganizationType, organizationController.getOrganizationTypeInfo);

module.exports = router; 