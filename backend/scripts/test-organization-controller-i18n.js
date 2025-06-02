#!/usr/bin/env node

/**
 * Test script for organizationController i18n migration
 * Tests translation keys and language detection without HTTP calls
 */

const path = require('path');
const { translate } = require('../utils/i18n');

// Test translation keys used in organizationController
const translationTests = [
  // Organizations namespace
  { key: 'organizations.created', en: 'Organization created successfully', es: 'Organización creada exitosamente' },
  { key: 'organizations.updated', en: 'Organization updated successfully', es: 'Organización actualizada exitosamente' },
  { key: 'organizations.deleted', en: 'Organization deleted successfully', es: 'Organización eliminada exitosamente' },
  { key: 'organizations.not_found', en: 'Organization not found', es: 'Organización no encontrada' },
  { key: 'organizations.invalid_type', en: 'Invalid organization type', es: 'Tipo de organización inválido' },
  { key: 'organizations.invalid_type_filter', en: 'Invalid organization type filter', es: 'Filtro de tipo de organización inválido' },
  { key: 'organizations.error_creating', en: 'Error creating organization', es: 'Error creando organización' },
  { key: 'organizations.error_updating', en: 'Error updating organization', es: 'Error actualizando organización' },
  { key: 'organizations.error_deleting', en: 'Error deleting organization', es: 'Error eliminando organización' },
  { key: 'organizations.error_retrieving', en: 'Error retrieving organizations', es: 'Error obteniendo organizaciones' },
  { key: 'organizations.error_retrieving_members', en: 'Error retrieving organization members', es: 'Error obteniendo miembros de organización' },
  { key: 'organizations.error_retrieving_types', en: 'Error retrieving organization types', es: 'Error obteniendo tipos de organización' },
  { key: 'organizations.error_retrieving_type', en: 'Error retrieving organization type', es: 'Error obteniendo tipo de organización' },
  { key: 'organizations.organization_type_not_found', en: 'Organization type not found', es: 'Tipo de organización no encontrado' },
  { key: 'organizations.unauthorized_view_organization', en: 'Unauthorized. You must be a member to view this organization.', es: 'No autorizado. Debes ser miembro para ver esta organización.' },
  { key: 'organizations.unauthorized_update', en: 'Unauthorized. Only admins can update organization details.', es: 'No autorizado. Solo los administradores pueden actualizar detalles de organización.' },
  { key: 'organizations.unauthorized_delete', en: 'Unauthorized. Only admins can delete organizations.', es: 'No autorizado. Solo los administradores pueden eliminar organizaciones.' },
  { key: 'organizations.unauthorized_view_members', en: 'Unauthorized. You must be a member to view organization members.', es: 'No autorizado. Debes ser miembro para ver los miembros de la organización.' }
];

function testTranslationKey(test) {
  console.log(`\n🧪 Testing key: ${test.key}`);
  
  let passed = true;
  
  // Test English
  const enTranslation = translate(test.key, 'en');
  if (enTranslation !== test.en) {
    console.log(`❌ English translation mismatch`);
    console.log(`   Expected: "${test.en}"`);
    console.log(`   Got: "${enTranslation}"`);
    passed = false;
  } else {
    console.log(`✅ English: "${enTranslation}"`);
  }
  
  // Test Spanish
  const esTranslation = translate(test.key, 'es');
  if (esTranslation !== test.es) {
    console.log(`❌ Spanish translation mismatch`);
    console.log(`   Expected: "${test.es}"`);
    console.log(`   Got: "${esTranslation}"`);
    passed = false;
  } else {
    console.log(`✅ Spanish: "${esTranslation}"`);
  }
  
  return passed;
}

function testControllerFunctions() {
  console.log('\n🔧 Testing organizationController function structure...');
  
  try {
    const controller = require('../controllers/organizationController');
    const expectedFunctions = [
      'createOrganization',
      'getOrganizationById', 
      'updateOrganization',
      'deleteOrganization',
      'getOrganizationMembers',
      'getOrganizations',
      'getOrganizationTypes',
      'getOrganizationTypeInfo'
    ];
    
    let allFunctionsExist = true;
    
    for (const funcName of expectedFunctions) {
      if (typeof controller[funcName] === 'function') {
        console.log(`✅ ${funcName} function exists`);
      } else {
        console.log(`❌ ${funcName} function missing`);
        allFunctionsExist = false;
      }
    }
    
    return allFunctionsExist;
  } catch (error) {
    console.log(`❌ Error loading controller: ${error.message}`);
    return false;
  }
}

function testResponseFormatterIntegration() {
  console.log('\n📝 Testing response formatter integration...');
  
  try {
    // Create a mock response object to test formatter methods
    const mockRes = {
      status: () => mockRes,
      json: () => mockRes,
      setHeader: () => mockRes
    };
    
    // Load and apply response formatter middleware
    const { responseFormatter } = require('../middlewares/responseFormatter');
    const mockReq = { 
      language: 'en',
      t: (key, params) => translate(key, 'en', params)
    };
    
    responseFormatter(mockReq, mockRes, () => {});
    
    // Check if formatter methods exist
    const expectedMethods = [
      'success', 'error', 'created', 'updated', 'deleted', 
      'notFound', 'forbidden', 'serverError', 'data', 'list'
    ];
    
    let allMethodsExist = true;
    
    for (const method of expectedMethods) {
      if (typeof mockRes[method] === 'function') {
        console.log(`✅ res.${method}() method available`);
      } else {
        console.log(`❌ res.${method}() method missing`);
        allMethodsExist = false;
      }
    }
    
    return allMethodsExist;
  } catch (error) {
    console.log(`❌ Error testing response formatter: ${error.message}`);
    return false;
  }
}

function testLanguageDetection() {
  console.log('\n🌍 Testing language detection...');
  
  try {
    const { languageDetection } = require('../middlewares/languageDetection');
    
    // Test with different Accept-Language headers
    const testCases = [
      { acceptLanguage: 'en', expected: 'en' },
      { acceptLanguage: 'es', expected: 'es' },
      { acceptLanguage: 'fr', expected: 'en' }, // Should fallback to en
      { acceptLanguage: 'es-ES,es;q=0.9,en;q=0.8', expected: 'es' },
      { acceptLanguage: 'en-US,en;q=0.9', expected: 'en' }
    ];
    
    let allTestsPassed = true;
    
    for (const testCase of testCases) {
      const mockReq = {
        headers: { 'accept-language': testCase.acceptLanguage },
        query: {},
        user: {}
      };
      const mockRes = { setHeader: () => {} };
      
      languageDetection(mockReq, mockRes, () => {});
      
      if (mockReq.language === testCase.expected) {
        console.log(`✅ "${testCase.acceptLanguage}" → "${mockReq.language}"`);
      } else {
        console.log(`❌ "${testCase.acceptLanguage}" → Expected: "${testCase.expected}", Got: "${mockReq.language}"`);
        allTestsPassed = false;
      }
    }
    
    return allTestsPassed;
  } catch (error) {
    console.log(`❌ Error testing language detection: ${error.message}`);
    return false;
  }
}

async function runAllTests() {
  console.log('🚀 Starting organizationController i18n tests...\n');
  console.log('📋 Testing translation keys, controller structure, and i18n integration');

  let totalTests = 0;
  let passedTests = 0;

  // Test translation keys
  console.log('\n📚 Testing translation keys...');
  for (const test of translationTests) {
    totalTests++;
    if (testTranslationKey(test)) {
      passedTests++;
    }
  }

  // Test controller functions
  totalTests++;
  if (testControllerFunctions()) {
    passedTests++;
  }

  // Test response formatter integration
  totalTests++;
  if (testResponseFormatterIntegration()) {
    passedTests++;
  }

  // Test language detection
  totalTests++;
  if (testLanguageDetection()) {
    passedTests++;
  }

  console.log('\n📊 Test Results:');
  console.log(`✅ Passed: ${passedTests}`);
  console.log(`❌ Failed: ${totalTests - passedTests}`);
  console.log(`📈 Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);

  if (passedTests === totalTests) {
    console.log('\n🎉 All organizationController i18n tests passed!');
    console.log('✅ Translation keys properly implemented');
    console.log('✅ Controller functions migrated successfully');
    console.log('✅ Response formatter integration working');
    console.log('✅ Language detection functioning correctly');
    console.log('\n📝 Migration Summary:');
    console.log(`   • ${translationTests.length} translation keys verified`);
    console.log(`   • 8 controller functions migrated`);
    console.log(`   • Response formatter helpers integrated`);
    console.log(`   • Language detection middleware working`);
  } else {
    console.log('\n⚠️  Some tests failed. Please check the implementation.');
  }

  return passedTests === totalTests;
}

// Handle script execution
if (require.main === module) {
  runAllTests()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('❌ Test runner failed:', error);
      process.exit(1);
    });
}

module.exports = { runAllTests, translationTests }; 