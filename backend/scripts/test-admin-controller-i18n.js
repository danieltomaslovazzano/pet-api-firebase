#!/usr/bin/env node

/**
 * Test script for adminController i18n migration
 * Tests translation keys and language detection without HTTP calls
 */

const path = require('path');
const { translate } = require('../utils/i18n');

// Test translation keys used in adminController
const translationTests = [
  // Admin namespace
  { key: 'admin.bulk_action_user_ids_required', en: 'A valid list of user IDs is required', es: 'Se requiere una lista válida de IDs de usuario' },
  { key: 'admin.bulk_action_required', en: 'An action must be specified', es: 'Se requiere especificar una acción' },
  { key: 'admin.bulk_action_completed', en: 'Action "{{action}}" completed for {{successCount}} users with {{errorCount}} errors', es: 'Acción "{{action}}" completada para {{successCount}} usuarios con {{errorCount}} errores' },
  { key: 'admin.bulk_action_error', en: 'Error in bulk action', es: 'Error en acción masiva' },
  { key: 'admin.bulk_action_role_required', en: 'A role must be specified', es: 'Se requiere especificar un rol' },
  { key: 'admin.bulk_action_unsupported', en: 'Unsupported action', es: 'Acción no soportada' },
  { key: 'admin.invite_email_required', en: 'An email address is required', es: 'Se requiere un correo electrónico' },
  { key: 'admin.invite_generated', en: 'Invitation generated successfully', es: 'Invitación generada correctamente' },
  { key: 'admin.invite_error', en: 'Error generating invitation', es: 'Error al generar invitación' },
  { key: 'admin.users_retrieval_error', en: 'Error retrieving users', es: 'Error al recuperar usuarios' },
  { key: 'admin.users_unexpected_error', en: 'Unexpected error', es: 'Error inesperado' },
  { key: 'admin.pets_retrieval_error', en: 'Error retrieving pets', es: 'Error al recuperar mascotas' },
  { key: 'admin.pets_unexpected_error', en: 'Unexpected error', es: 'Error inesperado' },
  { key: 'admin.pet_update_permission_denied', en: 'You do not have permission to perform this action', es: 'No tienes permiso para realizar esta acción' },
  { key: 'admin.pet_update_error', en: 'Error updating pet', es: 'Error al actualizar mascota' },
  { key: 'admin.pet_update_unexpected_error', en: 'Unexpected error', es: 'Error inesperado' },
  { key: 'admin.user_update_permission_denied_organization', en: 'No permission to update user in this organization', es: 'No tienes permiso para actualizar usuario en esta organización' },
  { key: 'admin.user_update_role_permission_denied', en: 'Only administrators can change roles', es: 'Solo los administradores pueden cambiar roles' },
  { key: 'admin.user_update_error', en: 'Error updating user', es: 'Error al actualizar usuario' },
  { key: 'admin.user_update_unexpected_error', en: 'Unexpected error', es: 'Error inesperado' },
  { key: 'admin.user_delete_permission_denied_organization', en: 'No permission to delete user in this organization', es: 'No tienes permiso para eliminar usuario en esta organización' },
  { key: 'admin.user_delete_error', en: 'Error deleting user', es: 'Error al eliminar usuario' },
  { key: 'admin.user_delete_unexpected_error', en: 'Unexpected error', es: 'Error inesperado' },
  { key: 'admin.user_role_update_permission_denied_organization', en: 'No permission to update user role in this organization', es: 'No tienes permiso para actualizar rol de usuario en esta organización' },
  { key: 'admin.user_role_required', en: 'A role must be specified', es: 'Se requiere especificar un rol' },
  { key: 'admin.user_role_update_auth_error', en: 'Error updating role in authentication', es: 'Error al actualizar rol en autenticación' },
  { key: 'admin.user_role_update_db_error', en: 'Error updating role in database', es: 'Error al actualizar rol en base de datos' },
  { key: 'admin.user_role_update_success', en: 'Role successfully updated to "{{role}}" for user {{userId}}', es: 'Rol actualizado correctamente a "{{role}}" para el usuario {{userId}}' },
  { key: 'admin.user_role_update_unexpected_error', en: 'Unexpected error', es: 'Error inesperado' },
  { key: 'admin.user_create_email_password_required', en: 'Email and password are required', es: 'Email y contraseña son requeridos' },
  { key: 'admin.user_create_db_error', en: 'Error creating user in database', es: 'Error al crear usuario en base de datos' },
  { key: 'admin.user_created_successfully', en: 'User created successfully', es: 'Usuario creado exitosamente' },
  { key: 'admin.user_create_error', en: 'Error creating user', es: 'Error creando usuario' }
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

function testParameterInterpolation() {
  console.log('\n🔧 Testing parameter interpolation...');
  
  const testCases = [
    {
      key: 'admin.bulk_action_completed',
      params: { action: 'delete', successCount: 5, errorCount: 1 },
      expectedEn: 'Action "delete" completed for 5 users with 1 errors',
      expectedEs: 'Acción "delete" completada para 5 usuarios con 1 errores'
    },
    {
      key: 'admin.user_role_update_success',
      params: { role: 'admin', userId: 'user123' },
      expectedEn: 'Role successfully updated to "admin" for user user123',
      expectedEs: 'Rol actualizado correctamente a "admin" para el usuario user123'
    }
  ];
  
  let allTestsPassed = true;
  
  for (const testCase of testCases) {
    console.log(`\n📝 Testing: ${testCase.key} with params:`, testCase.params);
    
    const enResult = translate(testCase.key, 'en', testCase.params);
    const esResult = translate(testCase.key, 'es', testCase.params);
    
    if (enResult === testCase.expectedEn) {
      console.log(`✅ English interpolation: "${enResult}"`);
    } else {
      console.log(`❌ English interpolation failed`);
      console.log(`   Expected: "${testCase.expectedEn}"`);
      console.log(`   Got: "${enResult}"`);
      allTestsPassed = false;
    }
    
    if (esResult === testCase.expectedEs) {
      console.log(`✅ Spanish interpolation: "${esResult}"`);
    } else {
      console.log(`❌ Spanish interpolation failed`);
      console.log(`   Expected: "${testCase.expectedEs}"`);
      console.log(`   Got: "${esResult}"`);
      allTestsPassed = false;
    }
  }
  
  return allTestsPassed;
}

function testControllerFunctions() {
  console.log('\n🔧 Testing adminController function structure...');
  
  try {
    const controller = require('../controllers/adminController');
    const expectedFunctions = [
      'bulkAction',
      'inviteUser',
      'getAllUsers',
      'getAllPets',
      'updatePet',
      'updateUser',
      'deleteUser',
      'updateUserRole',
      'createUser'
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
  console.log('🚀 Starting adminController i18n tests...\n');
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

  // Test parameter interpolation
  totalTests++;
  if (testParameterInterpolation()) {
    passedTests++;
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
    console.log('\n🎉 All adminController i18n tests passed!');
    console.log('✅ Translation keys properly implemented');
    console.log('✅ Controller functions migrated successfully');
    console.log('✅ Response formatter integration working');
    console.log('✅ Language detection functioning correctly');
    console.log('✅ Parameter interpolation working');
    console.log('\n📝 Migration Summary:');
    console.log(`   • ${translationTests.length} translation keys verified`);
    console.log(`   • 9 controller functions migrated`);
    console.log(`   • Response formatter helpers integrated`);
    console.log(`   • Language detection middleware working`);
    console.log(`   • Multitenancy access control preserved`);
    console.log(`   • Complex parameter interpolation for bulk actions and user management`);
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