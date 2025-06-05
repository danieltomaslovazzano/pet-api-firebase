const express = require('express');
const router = express.Router();
const languagePreferencesController = require('../controllers/languagePreferencesController');

// Rutas para usuarios
router.get('/user/preference', languagePreferencesController.getUserLanguagePreference);
router.put('/user/preference', languagePreferencesController.updateUserLanguagePreference);

// Rutas para organizaciones
router.get('/organization/:organizationId/preference', languagePreferencesController.getOrganizationLanguagePreference);
router.put('/organization/:organizationId/preference', languagePreferencesController.updateOrganizationLanguagePreference);

// Rutas de información general
router.get('/supported-languages', languagePreferencesController.getSupportedLanguages);
router.get('/statistics', languagePreferencesController.getLanguageStatistics);

module.exports = router; 