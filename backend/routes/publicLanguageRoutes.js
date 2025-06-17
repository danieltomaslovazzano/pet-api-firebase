const express = require('express');
const router = express.Router();
const languagePreferencesController = require('../controllers/languagePreferencesController');

// Rutas públicas de información general sobre idiomas
router.get('/supported-languages', languagePreferencesController.getSupportedLanguages);

module.exports = router; 