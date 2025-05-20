const axios = require('axios');
const { writeReport } = require('./helpers/report');

const API_URL = process.env.E2E_API_URL || 'http://localhost:3000/api';

// Timeout global de 20 segundos para evitar cuelgues
const TIMEOUT_MS = 20000;
const timeout = setTimeout(() => {
  console.error('[TIMEOUT] El test superó los 20 segundos y fue abortado.');
  if (typeof writeReport === 'function') {
    writeReport({
      group: 'auth',
      testName: 'register-and-login',
      payloads: 'TIMEOUT',
      curls: '',
      responses: '',
      status: '- [ERR] Timeout global alcanzado',
      observations: 'El script fue abortado por superar el tiempo máximo de 20 segundos.'
    });
  }
  process.exit(1);
}, TIMEOUT_MS);

function randomEmail() {
  return `e2euser_${Date.now()}@example.com`;
}

async function main() {
  const email = randomEmail();
  const password = 'test1234';
  const name = 'E2E User';
  let reportData = {
    group: 'auth',
    testName: 'register-and-login',
    payloads: '',
    curls: '',
    responses: '',
    status: '',
    observations: ''
  };
  try {
    // Registro
    const registerPayload = { email, password, name };
    reportData.payloads += '### Registro\n\n```json\n' + JSON.stringify(registerPayload, null, 2) + '\n```\n';
    reportData.curls += '### Registro\n\n```bash\ncurl -X POST ' + API_URL + '/auth/register \\\n  -H "Content-Type: application/json" \\\n  -d \'"' + JSON.stringify(registerPayload) + "'\'\n```\n";
    const resRegister = await axios.post(`${API_URL}/auth/register`, registerPayload);
    reportData.responses += '### Registro\n\n```json\n' + JSON.stringify(resRegister.data, null, 2) + '\n```\n';

    // Login
    const loginPayload = { email, password };
    reportData.payloads += '\n### Login\n\n```json\n' + JSON.stringify(loginPayload, null, 2) + '\n```\n';
    reportData.curls += '\n### Login\n\n```bash\ncurl -X POST ' + API_URL + '/auth/login \\\n  -H "Content-Type: application/json" \\\n  -d \'"' + JSON.stringify(loginPayload) + "'\'\n```\n";
    const resLogin = await axios.post(`${API_URL}/auth/login`, loginPayload);
    reportData.responses += '\n### Login\n\n```json\n' + JSON.stringify(resLogin.data, null, 2) + '\n```\n';

    // --- Test: Login de superadmin ---
    const superadminEmail = 'daniellovazzano+2@gmail.com';
    const superadminPassword = 'PC.103638dl';
    const superadminLoginPayload = { email: superadminEmail, password: superadminPassword };
    reportData.payloads += '\n### Login Superadmin\n\n```json\n' + JSON.stringify(superadminLoginPayload, null, 2) + '\n```\n';
    reportData.curls += '\n### Login Superadmin\n\n```bash\ncurl -X POST ' + API_URL + '/auth/login \\\n  -H "Content-Type: application/json" \\\n  -d \'"' + JSON.stringify(superadminLoginPayload) + "'\'\n```\n";
    let resSuperadminLogin;
    try {
      resSuperadminLogin = await axios.post(`${API_URL}/auth/login`, superadminLoginPayload);
      // Imprimir y guardar la respuesta cruda del login
      console.log('[DEBUG] Respuesta login superadmin:', resSuperadminLogin.data);
      reportData.responses += '\n### Login Superadmin (respuesta cruda)\n\n```json\n' + JSON.stringify(resSuperadminLogin.data, null, 2) + '\n```\n';
      // Verificar rol superadmin
      const userRole = resSuperadminLogin.data?.user?.role || resSuperadminLogin.data?.role;
      if (userRole !== 'superadmin') {
        reportData.status += '\n- [ERR] Login superadmin: El usuario no tiene el rol superadmin';
        reportData.observations += '\n[Login superadmin] El usuario inició sesión pero su rol es: ' + userRole;
        throw new Error('El usuario no tiene el rol superadmin');
      } else {
        reportData.status += '\n- [x] Login superadmin exitoso';
        reportData.observations += '\n[Login superadmin] El usuario tiene el rol superadmin.';
      }
    } catch (err) {
      reportData.status += '\n- [ERR] Login superadmin fallido';
      reportData.observations += '\n[Login superadmin] Error: ' + (err.response?.data ? JSON.stringify(err.response.data) : err.message);
      console.error('[ERR] Error en login superadmin:', err.response?.data || err.message);
      process.exitCode = 1;
    }

    // --- Imprimir idToken para curl manual ---
    if (resSuperadminLogin && resSuperadminLogin.data && resSuperadminLogin.data.tokens && resSuperadminLogin.data.tokens.idToken) {
      console.log('\n[INFO] idToken para curl manual:\n');
      console.log(resSuperadminLogin.data.tokens.idToken);
    }

    // --- Test: Listar usuarios como admin ---
    let adminToken;
    try {
      // Login como admin (usando el mismo usuario superadmin)
      const adminLoginRes = await axios.post(`${API_URL}/auth/login`, {
        email: superadminEmail,
        password: superadminPassword
      });
      // Usar el idToken de la respuesta
      adminToken = adminLoginRes.data.tokens?.idToken || adminLoginRes.data.token || adminLoginRes.data.accessToken;
      if (!adminToken) throw new Error('No se obtuvo token de admin');
      // Listar usuarios
      const usersRes = await axios.get(`${API_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      reportData.responses += '\n### Listado de usuarios (admin)\n\n```json\n' + JSON.stringify(usersRes.data, null, 2) + '\n```\n';
      console.log('[USERS] Listado de usuarios:', usersRes.data);
    } catch (err) {
      reportData.status += '\n- [ERR] Listado de usuarios fallido';
      reportData.observations += '\n[Listar usuarios] Error: ' + (err.response?.data ? JSON.stringify(err.response.data) : err.message);
      console.error('[ERR] Error al listar usuarios:', err.response?.data || err.message);
      process.exitCode = 1;
    }

    reportData.status = '- [x] Registro y login ejecutados correctamente\n- [x] Usuario creado y autenticado\n- [x] Sin errores';
    reportData.observations = `- Email de usuario: ${email}\n- El usuario puede ser eliminado manualmente tras el test si se desea.`;
    console.log('[OK] Registro y login E2E completados para:', email);
  } catch (err) {
    reportData.status = '- [ERR] Falló el test';
    reportData.observations = err.response?.data ? JSON.stringify(err.response.data) : err.message;
    console.error('[ERR] Error en test E2E de auth:', err.response?.data || err.message);
    process.exitCode = 1;
  } finally {
    clearTimeout(timeout); // Limpiar timeout si termina bien
    // Generar el reporte markdown
    writeReport(reportData);
    process.exit();
  }
}

main(); 