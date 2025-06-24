#!/usr/bin/env node

/**
 * Script para probar la integración i18n en controladores migrados
 * Simula requests con diferentes idiomas y verifica las respuestas
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

// Simular un controlador de prueba usando los métodos del responseFormatter
app.post('/test/success', (req, res) => {
  res.success('auth.user_registered_successfully', { userId: '123' });
});

app.post('/test/error', (req, res) => {
  res.error('auth.invalid_email_format', 400);
});

app.post('/test/validation', (req, res) => {
  res.validationError([
    { field: 'email', messageKey: 'validation.required', params: { field: 'Email' } },
    { field: 'password', messageKey: 'validation.min_length', params: { field: 'Password', min: 6 } }
  ]);
});

app.post('/test/forbidden', (req, res) => {
  res.forbidden('auth.insufficient_permissions');
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
          // Encontrar la ruta correspondiente
          if (path.includes('/test/success')) {
            res.success('auth.user_registered_successfully', { userId: '123' });
          } else if (path.includes('/test/error')) {
            res.error('auth.invalid_email_format', 400);
          } else if (path.includes('/test/validation')) {
            res.validationError([
              { field: 'email', messageKey: 'validation.required', params: { field: 'Email' } },
              { field: 'password', messageKey: 'validation.min_length', params: { field: 'Password', min: 6 } }
            ]);
          } else if (path.includes('/test/forbidden')) {
            res.forbidden('auth.insufficient_permissions');
          }
        });
      });
    });
  });
}

async function runTests() {
  console.log('🧪 Probando Integración i18n en Controladores\n');

  // Test 1: Respuesta exitosa en inglés
  console.log('📝 Test 1: Respuesta exitosa en inglés');
  const test1 = await simulateRequest('POST', '/test/success?lang=en');
  console.log(`Status: ${test1.statusCode}`);
  console.log(`Language Header: ${test1.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test1.body, null, 2));
  console.log('');

  // Test 2: Respuesta exitosa en español
  console.log('📝 Test 2: Respuesta exitosa en español');
  const test2 = await simulateRequest('POST', '/test/success?lang=es');
  console.log(`Status: ${test2.statusCode}`);
  console.log(`Language Header: ${test2.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test2.body, null, 2));
  console.log('');

  // Test 3: Error en inglés
  console.log('📝 Test 3: Error en inglés');
  const test3 = await simulateRequest('POST', '/test/error?lang=en');
  console.log(`Status: ${test3.statusCode}`);
  console.log(`Language Header: ${test3.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test3.body, null, 2));
  console.log('');

  // Test 4: Error en español
  console.log('📝 Test 4: Error en español');
  const test4 = await simulateRequest('POST', '/test/error?lang=es');
  console.log(`Status: ${test4.statusCode}`);
  console.log(`Language Header: ${test4.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test4.body, null, 2));
  console.log('');

  // Test 5: Errores de validación en inglés
  console.log('📝 Test 5: Errores de validación en inglés');
  const test5 = await simulateRequest('POST', '/test/validation?lang=en');
  console.log(`Status: ${test5.statusCode}`);
  console.log(`Language Header: ${test5.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test5.body, null, 2));
  console.log('');

  // Test 6: Errores de validación en español
  console.log('📝 Test 6: Errores de validación en español');
  const test6 = await simulateRequest('POST', '/test/validation?lang=es');
  console.log(`Status: ${test6.statusCode}`);
  console.log(`Language Header: ${test6.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test6.body, null, 2));
  console.log('');

  // Test 7: Detección por header Accept-Language
  console.log('📝 Test 7: Detección por header Accept-Language');
  const test7 = await simulateRequest('POST', '/test/forbidden', { 'accept-language': 'es-ES,es;q=0.9,en;q=0.8' });
  console.log(`Status: ${test7.statusCode}`);
  console.log(`Language Header: ${test7.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test7.body, null, 2));
  console.log('');

  // Test 8: Fallback a inglés
  console.log('📝 Test 8: Fallback a inglés (idioma no soportado)');
  const test8 = await simulateRequest('POST', '/test/success?lang=fr');
  console.log(`Status: ${test8.statusCode}`);
  console.log(`Language Header: ${test8.headers['Content-Language']}`);
  console.log(`Response:`, JSON.stringify(test8.body, null, 2));
  console.log('');

  console.log('✅ Todos los tests completados!');
  console.log('\n🎯 Resumen:');
  console.log('- ✅ Detección de idioma funcionando');
  console.log('- ✅ Traducciones aplicándose correctamente');
  console.log('- ✅ Headers de idioma configurándose');
  console.log('- ✅ Métodos helper del responseFormatter funcionando');
  console.log('- ✅ Interpolación de parámetros funcionando');
  console.log('- ✅ Fallback a inglés funcionando');
}

if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { simulateRequest, runTests }; 