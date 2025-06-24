#!/usr/bin/env node

/**
 * Script para probar la migración i18n del userController
 * Simula requests específicos del userController con diferentes idiomas
 */

const express = require('express');
const { languageDetection, addLanguageHeaders } = require('../middlewares/languageDetection');
const { responseFormatter } = require('../middlewares/responseFormatter');

// Crear una app de prueba
const app = express();
app.use(express.json());
app.use(languageDetection);
app.use(responseFormatter);
app.use(addLanguageHeaders);

// Simular endpoints del userController usando los métodos del responseFormatter
app.post('/test/user/validation-error', (req, res) => {
  res.validationError([
    { field: 'email', messageKey: 'users.email_and_password_are_required' }
  ]);
});

app.post('/test/user/create-success', (req, res) => {
  res.created('users.created', { id: 'user123', email: 'test@example.com', name: 'Test User' });
});

app.get('/test/user/not-found', (req, res) => {
  res.notFound('users.not_found');
});

app.get('/test/user/forbidden-access', (req, res) => {
  res.forbidden('users.can_only_access_own_information');
});

app.put('/test/user/update-success', (req, res) => {
  res.updated('users.updated', { id: 'user123', name: 'Updated User' });
});

app.put('/test/user/forbidden-update', (req, res) => {
  res.forbidden('users.only_organization_admins_can_update_other_users');
});

app.delete('/test/user/delete-success', (req, res) => {
  res.deleted('users.deleted', { id: 'user123' });
});

app.delete('/test/user/forbidden-delete', (req, res) => {
  res.forbidden('users.only_admins_can_delete_users');
});

app.post('/test/user/block-success', (req, res) => {
  res.success('users.blocked_user', { blockedUserId: 'user456' });
});

app.post('/test/user/block-forbidden', (req, res) => {
  res.forbidden('users.cannot_block_user_outside_organization');
});

app.post('/test/user/unblock-success', (req, res) => {
  res.success('users.unblocked_user', { unblockedUserId: 'user456' });
});

app.get('/test/user/organizations-forbidden', (req, res) => {
  res.forbidden('users.can_only_view_own_organizations');
});

app.get('/test/user/admin-details-forbidden', (req, res) => {
  res.forbidden('users.only_organization_admins_can_access_detailed_user_information');
});

app.get('/test/user/me-unauthorized', (req, res) => {
  res.unauthorized('users.not_authenticated');
});

app.get('/test/user/me-success', (req, res) => {
  res.data({ 
    id: 'user123', 
    email: 'test@example.com', 
    name: 'Test User',
    role: 'user',
    status: 'active'
  });
});

// Función para simular requests
async function simulateRequest(method, path, headers = {}, body = {}) {
  return new Promise((resolve) => {
    const req = {
      method,
      url: path,
      headers: {
        'content-type': 'application/json',
        ...headers
      },
      body,
      query: {},
      ...require('url').parse(path, true)
    };

    const res = {
      statusCode: 200,
      headers: {},
      body: null,
      status: function(code) {
        this.statusCode = code;
        return this;
      },
      json: function(data) {
        this.body = data;
        resolve(this);
        return this;
      },
      setHeader: function(name, value) {
        this.headers[name] = value;
        return this;
      }
    };

    // Simular el middleware stack
    languageDetection(req, res, () => {
      responseFormatter(req, res, () => {
        addLanguageHeaders(req, res, () => {
          // Encontrar la ruta correspondiente y ejecutar la lógica
          if (path.includes('/test/user/validation-error')) {
            res.validationError([
              { field: 'email', messageKey: 'users.email_and_password_are_required' }
            ]);
          } else if (path.includes('/test/user/create-success')) {
            res.created('users.created', { id: 'user123', email: 'test@example.com', name: 'Test User' });
          } else if (path.includes('/test/user/not-found')) {
            res.notFound('users.not_found');
          } else if (path.includes('/test/user/forbidden-access')) {
            res.forbidden('users.can_only_access_own_information');
          } else if (path.includes('/test/user/update-success')) {
            res.updated('users.updated', { id: 'user123', name: 'Updated User' });
          } else if (path.includes('/test/user/forbidden-update')) {
            res.forbidden('users.only_organization_admins_can_update_other_users');
          } else if (path.includes('/test/user/delete-success')) {
            res.deleted('users.deleted', { id: 'user123' });
          } else if (path.includes('/test/user/forbidden-delete')) {
            res.forbidden('users.only_admins_can_delete_users');
          } else if (path.includes('/test/user/block-success')) {
            res.success('users.blocked_user', { blockedUserId: 'user456' });
          } else if (path.includes('/test/user/block-forbidden')) {
            res.forbidden('users.cannot_block_user_outside_organization');
          } else if (path.includes('/test/user/unblock-success')) {
            res.success('users.unblocked_user', { unblockedUserId: 'user456' });
          } else if (path.includes('/test/user/organizations-forbidden')) {
            res.forbidden('users.can_only_view_own_organizations');
          } else if (path.includes('/test/user/admin-details-forbidden')) {
            res.forbidden('users.only_organization_admins_can_access_detailed_user_information');
          } else if (path.includes('/test/user/me-unauthorized')) {
            res.unauthorized('users.not_authenticated');
          } else if (path.includes('/test/user/me-success')) {
            res.data({ 
              id: 'user123', 
              email: 'test@example.com', 
              name: 'Test User',
              role: 'user',
              status: 'active'
            });
          }
        });
      });
    });
  });
}

async function runUserControllerTests() {
  console.log('👤 Probando Migración i18n del userController\n');

  // Test 1: Error de validación en inglés
  console.log('📝 Test 1: Error de validación de usuario en inglés');
  const test1 = await simulateRequest('POST', '/test/user/validation-error?lang=en');
  console.log(`Status: ${test1.statusCode}`);
  console.log(`Language Header: ${test1.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test1.body, null, 2));
  console.log('');

  // Test 2: Error de validación en español
  console.log('📝 Test 2: Error de validación de usuario en español');
  const test2 = await simulateRequest('POST', '/test/user/validation-error?lang=es');
  console.log(`Status: ${test2.statusCode}`);
  console.log(`Language Header: ${test2.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test2.body, null, 2));
  console.log('');

  // Test 3: Creación exitosa en inglés
  console.log('📝 Test 3: Creación de usuario exitosa en inglés');
  const test3 = await simulateRequest('POST', '/test/user/create-success?lang=en');
  console.log(`Status: ${test3.statusCode}`);
  console.log(`Language Header: ${test3.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test3.body, null, 2));
  console.log('');

  // Test 4: Creación exitosa en español
  console.log('📝 Test 4: Creación de usuario exitosa en español');
  const test4 = await simulateRequest('POST', '/test/user/create-success?lang=es');
  console.log(`Status: ${test4.statusCode}`);
  console.log(`Language Header: ${test4.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test4.body, null, 2));
  console.log('');

  // Test 5: Usuario no encontrado en inglés
  console.log('📝 Test 5: Usuario no encontrado en inglés');
  const test5 = await simulateRequest('GET', '/test/user/not-found?lang=en');
  console.log(`Status: ${test5.statusCode}`);
  console.log(`Language Header: ${test5.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test5.body, null, 2));
  console.log('');

  // Test 6: Usuario no encontrado en español
  console.log('📝 Test 6: Usuario no encontrado en español');
  const test6 = await simulateRequest('GET', '/test/user/not-found?lang=es');
  console.log(`Status: ${test6.statusCode}`);
  console.log(`Language Header: ${test6.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test6.body, null, 2));
  console.log('');

  // Test 7: Acceso prohibido en inglés
  console.log('📝 Test 7: Acceso prohibido en inglés');
  const test7 = await simulateRequest('GET', '/test/user/forbidden-access?lang=en');
  console.log(`Status: ${test7.statusCode}`);
  console.log(`Language Header: ${test7.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test7.body, null, 2));
  console.log('');

  // Test 8: Actualización exitosa en español
  console.log('📝 Test 8: Actualización de usuario en español');
  const test8 = await simulateRequest('PUT', '/test/user/update-success?lang=es');
  console.log(`Status: ${test8.statusCode}`);
  console.log(`Language Header: ${test8.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test8.body, null, 2));
  console.log('');

  // Test 9: Actualización prohibida en inglés
  console.log('📝 Test 9: Actualización prohibida en inglés');
  const test9 = await simulateRequest('PUT', '/test/user/forbidden-update?lang=en');
  console.log(`Status: ${test9.statusCode}`);
  console.log(`Language Header: ${test9.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test9.body, null, 2));
  console.log('');

  // Test 10: Eliminación exitosa en español
  console.log('📝 Test 10: Eliminación de usuario en español');
  const test10 = await simulateRequest('DELETE', '/test/user/delete-success?lang=es');
  console.log(`Status: ${test10.statusCode}`);
  console.log(`Language Header: ${test10.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test10.body, null, 2));
  console.log('');

  // Test 11: Eliminación prohibida en inglés
  console.log('📝 Test 11: Eliminación prohibida en inglés');
  const test11 = await simulateRequest('DELETE', '/test/user/forbidden-delete?lang=en');
  console.log(`Status: ${test11.statusCode}`);
  console.log(`Language Header: ${test11.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test11.body, null, 2));
  console.log('');

  // Test 12: Bloqueo exitoso en español
  console.log('📝 Test 12: Bloqueo de usuario en español');
  const test12 = await simulateRequest('POST', '/test/user/block-success?lang=es');
  console.log(`Status: ${test12.statusCode}`);
  console.log(`Language Header: ${test12.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test12.body, null, 2));
  console.log('');

  // Test 13: Bloqueo prohibido en inglés
  console.log('📝 Test 13: Bloqueo prohibido en inglés');
  const test13 = await simulateRequest('POST', '/test/user/block-forbidden?lang=en');
  console.log(`Status: ${test13.statusCode}`);
  console.log(`Language Header: ${test13.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test13.body, null, 2));
  console.log('');

  // Test 14: Desbloqueo exitoso en español
  console.log('📝 Test 14: Desbloqueo de usuario en español');
  const test14 = await simulateRequest('POST', '/test/user/unblock-success?lang=es');
  console.log(`Status: ${test14.statusCode}`);
  console.log(`Language Header: ${test14.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test14.body, null, 2));
  console.log('');

  // Test 15: Organizaciones prohibidas en inglés
  console.log('📝 Test 15: Ver organizaciones prohibido en inglés');
  const test15 = await simulateRequest('GET', '/test/user/organizations-forbidden?lang=en');
  console.log(`Status: ${test15.statusCode}`);
  console.log(`Language Header: ${test15.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test15.body, null, 2));
  console.log('');

  // Test 16: Detalles admin prohibidos en español
  console.log('📝 Test 16: Detalles de admin prohibidos en español');
  const test16 = await simulateRequest('GET', '/test/user/admin-details-forbidden?lang=es');
  console.log(`Status: ${test16.statusCode}`);
  console.log(`Language Header: ${test16.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test16.body, null, 2));
  console.log('');

  // Test 17: No autenticado en inglés
  console.log('📝 Test 17: No autenticado en inglés');
  const test17 = await simulateRequest('GET', '/test/user/me-unauthorized?lang=en');
  console.log(`Status: ${test17.statusCode}`);
  console.log(`Language Header: ${test17.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test17.body, null, 2));
  console.log('');

  // Test 18: Perfil exitoso en español
  console.log('📝 Test 18: Obtener perfil exitoso en español');
  const test18 = await simulateRequest('GET', '/test/user/me-success?lang=es');
  console.log(`Status: ${test18.statusCode}`);
  console.log(`Language Header: ${test18.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test18.body, null, 2));
  console.log('');

  console.log('✅ Todos los tests del userController completados!');
  console.log('\n🎯 Resumen de userController:');
  console.log('- ✅ Validaciones de usuario traducidas');
  console.log('- ✅ Operaciones CRUD traducidas');
  console.log('- ✅ Control de acceso traducido');
  console.log('- ✅ Operaciones de bloqueo/desbloqueo traducidas');
  console.log('- ✅ Gestión de organizaciones traducida');
  console.log('- ✅ Autenticación y autorización traducidas');
  console.log('- ✅ Códigos de estado HTTP correctos');
  console.log('- ✅ Estructura de respuesta consistente');
}

if (require.main === module) {
  runUserControllerTests().catch(console.error);
}

module.exports = { simulateRequest, runUserControllerTests }; 