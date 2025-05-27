const axios = require('axios');
const { performance } = require('perf_hooks');

// Estructura global para almacenar logs de requests/responses por test
if (!global.__E2E_REQUEST_LOGS__) {
  global.__E2E_REQUEST_LOGS__ = [];
}

function logRequestResponse({ testName, method, url, request, response, duration, error }) {
  global.__E2E_REQUEST_LOGS__.push({
    testName,
    method,
    url,
    request,
    response,
    duration,
    error
  });
}

// Helper para obtener el nombre del test actual (Jest)
function getCurrentTestName() {
  // Jest usa jasmine internamente, podemos acceder al spec actual
  try {
    if (global.jasmine && global.jasmine.currentSpec) {
      return global.jasmine.currentSpec.description || global.jasmine.currentSpec.fullName || 'unknown';
    }
    // Fallback: usar expect.getState() si está disponible
    if (typeof expect !== 'undefined' && expect.getState) {
      const state = expect.getState();
      return state.currentTestName || state.testPath || 'unknown';
    }
    return 'unknown';
  } catch (e) {
    console.log('[REQUEST WRAPPER] Error getting test name:', e.message);
    return 'unknown';
  }
}

// Wrapper para cada método HTTP de axios
const methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];

const requestWrapper = {};

methods.forEach(method => {
  requestWrapper[method] = async function (...args) {
    const start = performance.now();
    let url = args[0];
    let reqConfig = {};
    let reqData = undefined;
    if (['post', 'put', 'patch'].includes(method)) {
      reqData = args[1];
      reqConfig = args[2] || {};
    } else {
      reqConfig = args[1] || {};
    }
    const testName = getCurrentTestName();
    try {
      const res = await axios[method](...args);
      const duration = performance.now() - start;
      const logEntry = {
        testName,
        method: method.toUpperCase(),
        url,
        request: {
          headers: reqConfig.headers,
          data: reqData
        },
        response: {
          status: res.status,
          headers: res.headers,
          data: res.data
        },
        duration,
        error: null
      };
      logRequestResponse(logEntry);
      return res;
    } catch (err) {
      const duration = performance.now() - start;
      const logEntry = {
        testName,
        method: method.toUpperCase(),
        url,
        request: {
          headers: reqConfig.headers,
          data: reqData
        },
        response: err.response ? {
          status: err.response.status,
          headers: err.response.headers,
          data: err.response.data
        } : null,
        duration,
        error: err.message
      };
      logRequestResponse(logEntry);
      throw err;
    }
  };
});

// Proxy para exponer la API de axios (por si se usa axios.create, interceptors, etc.)
module.exports = new Proxy(requestWrapper, {
  get(target, prop) {
    if (prop in target) return target[prop];
    return axios[prop];
  }
}); 