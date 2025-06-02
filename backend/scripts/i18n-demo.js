#!/usr/bin/env node

/**
 * Script de demostración del sistema i18n
 * Muestra las capacidades de traducción, interpolación y detección de idioma
 */

const { translate, t, i18nManager } = require('../utils/i18n');
const { languageDetection, getLanguageFromSources } = require('../middlewares/languageDetection');

console.log('🌍 Demostración del Sistema de Internacionalización (i18n)\n');

// 1. Traducciones básicas
console.log('📝 1. Traducciones Básicas:');
console.log('   EN: common.success =>', translate('common.success', 'en'));
console.log('   ES: common.success =>', translate('common.success', 'es'));
console.log('   EN: validation.failed =>', translate('validation.failed', 'en'));
console.log('   ES: validation.failed =>', translate('validation.failed', 'es'));
console.log();

// 2. Interpolación de parámetros
console.log('🔧 2. Interpolación de Parámetros:');
console.log('   EN: validation.required =>', translate('validation.required', 'en', { field: 'Name' }));
console.log('   ES: validation.required =>', translate('validation.required', 'es', { field: 'Nombre' }));
console.log('   EN: validation.min_length =>', translate('validation.min_length', 'en', { field: 'Password', min: 8 }));
console.log('   ES: validation.min_length =>', translate('validation.min_length', 'es', { field: 'Contraseña', min: 8 }));
console.log();

// 3. Fallback mechanism
console.log('🔄 3. Mecanismo de Fallback:');
console.log('   Clave inexistente (EN) =>', translate('non.existent.key', 'en'));
console.log('   Idioma no soportado (FR) =>', translate('common.success', 'fr'));
console.log();

// 4. Función abreviada
console.log('⚡ 4. Función Abreviada (t):');
console.log('   t("common.error", "en") =>', t('common.error', 'en'));
console.log('   t("common.error", "es") =>', t('common.error', 'es'));
console.log();

// 5. Detección de idioma desde diferentes fuentes
console.log('🔍 5. Detección de Idioma:');

// Simular diferentes fuentes de idioma
const testCases = [
  {
    name: 'Query Parameter',
    sources: { queryLang: 'es', headerLang: 'en', userLang: 'fr', orgLang: 'de' }
  },
  {
    name: 'Header (sin query)',
    sources: { queryLang: null, headerLang: 'es', userLang: 'en', orgLang: 'fr' }
  },
  {
    name: 'User Preference (sin query/header)',
    sources: { queryLang: null, headerLang: null, userLang: 'es', orgLang: 'en' }
  },
  {
    name: 'Organization (sin otros)',
    sources: { queryLang: null, headerLang: null, userLang: null, orgLang: 'es' }
  },
  {
    name: 'Fallback (todos inválidos)',
    sources: { queryLang: 'fr', headerLang: 'de', userLang: 'it', orgLang: 'pt' }
  }
];

testCases.forEach(testCase => {
  const detectedLang = getLanguageFromSources(testCase.sources);
  console.log(`   ${testCase.name}: ${detectedLang}`);
});
console.log();

// 6. Middleware simulation
console.log('🔧 6. Simulación de Middleware:');

// Simular diferentes requests
const mockRequests = [
  {
    name: 'Request con ?lang=es',
    req: { query: { lang: 'es' }, headers: {}, user: null, organization: null }
  },
  {
    name: 'Request con Accept-Language: es',
    req: { query: {}, headers: { 'accept-language': 'es-ES,es;q=0.9,en;q=0.8' }, user: null, organization: null }
  },
  {
    name: 'Request con usuario español',
    req: { query: {}, headers: {}, user: { preferredLanguage: 'es' }, organization: null }
  },
  {
    name: 'Request con organización española',
    req: { query: {}, headers: {}, user: null, organization: { defaultLanguage: 'es' } }
  }
];

mockRequests.forEach(mockReq => {
  const req = { ...mockReq.req };
  const res = {};
  const next = () => {};
  
  languageDetection(req, res, next);
  
  console.log(`   ${mockReq.name}:`);
  console.log(`     Idioma detectado: ${req.language}`);
  console.log(`     Fuente: ${req.languageSource}`);
  console.log(`     Traducción: ${req.t('common.welcome')}`);
  console.log();
});

// 7. Estadísticas del sistema
console.log('📊 7. Estadísticas del Sistema:');
console.log(`   Idiomas cargados: ${Array.from(i18nManager.loadedLanguages).join(', ')}`);
console.log(`   Idiomas soportados: ${require('../config/i18n').supportedLanguages.join(', ')}`);
console.log(`   Idioma por defecto: ${require('../config/i18n').defaultLanguage}`);

// Mostrar claves faltantes si las hay
const missingKeys = i18nManager.getMissingKeys();
if (Object.keys(missingKeys).length > 0) {
  console.log('\n⚠️  Claves Faltantes:');
  Object.entries(missingKeys).forEach(([lang, keys]) => {
    console.log(`   ${lang}: ${keys.join(', ')}`);
  });
} else {
  console.log('\n✅ No hay claves faltantes registradas');
}

console.log('\n🎉 Demostración completada exitosamente!');
console.log('\n💡 Para usar el sistema en tu código:');
console.log('   const { translate, t } = require("./utils/i18n");');
console.log('   const { languageDetection } = require("./middlewares/languageDetection");');
console.log('\n   // En tus rutas:');
console.log('   app.use(languageDetection);');
console.log('\n   // En tus controladores:');
console.log('   res.json({ message: req.t("common.success") });'); 