const axios = require('axios');
const { writeReport } = require('./helpers/report');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env.test') });

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

let reportData = {
  group: 'auth',
  testName: 'auth-tests',
  payloads: '',
  curls: '',
  responses: '',
  status: '',
  observations: ''
};

const addToReport = (section, title, content) => {
  reportData[section] += `### ${title}\n\n\`\`\`json\n${content}\n\`\`\`\n\n`;
};
const addCurlToReport = (title, method, endpoint, headers = {}, data = null) => {
  let curl = `### ${title}\n\n\`\`\`bash\ncurl -X ${method} ${API_URL}${endpoint}`;
  Object.entries(headers).forEach(([key, value]) => {
    curl += ` \\\n  -H \"${key}: ${value}\"`;
  });
  if (data) {
    curl += ` \\\n  -d '${JSON.stringify(data)}'`;
  }
  reportData.curls += curl + '\n\`\`\`\n\n';
};

describe('E2E: Auth', () => {
  let email, password, name, idToken, refreshToken, adminToken;
  let allTestsPassed = true;

  beforeAll(async () => {
    email = `e2euser_${Date.now()}@example.com`;
    password = 'test1234';
    name = 'E2E User';
  });

  it('should register a user', async () => {
    const registerPayload = { email, password, name };
    addToReport('payloads', 'Registro', JSON.stringify(registerPayload, null, 2));
    addCurlToReport('Registro', 'POST', '/auth/register', { 'Content-Type': 'application/json' }, registerPayload);
    const resRegister = await axios.post(`${API_URL}/auth/register`, registerPayload);
    addToReport('responses', 'Registro', JSON.stringify(resRegister.data, null, 2));
    reportData.status += '\n- [x] Registro exitoso';
    expect(resRegister.data).toHaveProperty('user');
    expect(resRegister.data.user).toHaveProperty('email', email);
  });

  it('should login user', async () => {
    const loginPayload = { email, password };
    addToReport('payloads', 'Login', JSON.stringify(loginPayload, null, 2));
    addCurlToReport('Login', 'POST', '/auth/login', { 'Content-Type': 'application/json' }, loginPayload);
    const resLogin = await axios.post(`${API_URL}/auth/login`, loginPayload);
    addToReport('responses', 'Login', JSON.stringify(resLogin.data, null, 2));
    reportData.status += '\n- [x] Login exitoso';
    idToken = resLogin.data.tokens.idToken;
    refreshToken = resLogin.data.tokens.refreshToken;
    expect(resLogin.data).toHaveProperty('tokens');
    expect(resLogin.data.tokens).toHaveProperty('idToken');
  });

  it('should deny login with wrong credentials', async () => {
    const wrongLoginPayload = { email, password: 'wrongpassword' };
    addToReport('payloads', 'Login con credenciales incorrectas', JSON.stringify(wrongLoginPayload, null, 2));
    addCurlToReport('Login con credenciales incorrectas', 'POST', '/auth/login', { 'Content-Type': 'application/json' }, wrongLoginPayload);
    try {
      await axios.post(`${API_URL}/auth/login`, wrongLoginPayload);
      reportData.status += '\n- [ERR] Login con credenciales incorrectas no falló como se esperaba';
      allTestsPassed = false;
      throw new Error('Login with wrong credentials should fail');
    } catch (err) {
      addToReport('responses', 'Login con credenciales incorrectas', JSON.stringify(err.response?.data || err.message, null, 2));
      reportData.status += '\n- [x] Login con credenciales incorrectas falló correctamente';
      expect(err.response?.status).toBe(400);
    }
  });

  it('should access profile with token', async () => {
    addCurlToReport('Acceso a perfil', 'GET', '/users/me', { Authorization: `Bearer ${idToken}` });
    const resProfile = await axios.get(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${idToken}` }
    });
    addToReport('responses', 'Acceso a perfil', JSON.stringify(resProfile.data, null, 2));
    reportData.status += '\n- [x] Acceso a perfil exitoso';
    expect(resProfile.data).toHaveProperty('email', email);
  });

  it('should deny access to profile without token', async () => {
    addCurlToReport('Acceso sin token', 'GET', '/users/me');
    try {
      await axios.get(`${API_URL}/users/me`);
      reportData.status += '\n- [ERR] Acceso sin token no falló como se esperaba';
      allTestsPassed = false;
      throw new Error('Access without token should fail');
    } catch (err) {
      addToReport('responses', 'Acceso sin token', JSON.stringify(err.response?.data || err.message, null, 2));
      reportData.status += '\n- [x] Acceso sin token falló correctamente';
      expect(err.response?.status).toBe(401);
    }
  });

  it('should login as superadmin', async () => {
    const superadminEmail = 'daniellovazzano+2@gmail.com';
    const superadminPassword = 'PC.103638dl';
    const superadminLoginPayload = { email: superadminEmail, password: superadminPassword };
    addToReport('payloads', 'Login Superadmin', JSON.stringify(superadminLoginPayload, null, 2));
    addCurlToReport('Login Superadmin', 'POST', '/auth/login', { 'Content-Type': 'application/json' }, superadminLoginPayload);
    const resSuperadminLogin = await axios.post(`${API_URL}/auth/login`, superadminLoginPayload);
    addToReport('responses', 'Login Superadmin', JSON.stringify(resSuperadminLogin.data, null, 2));
    const userRole = resSuperadminLogin.data?.user?.role || resSuperadminLogin.data?.role;
    if (userRole !== 'superadmin') {
      reportData.status += '\n- [ERR] Login superadmin: El usuario no tiene el rol superadmin';
      reportData.observations += '\n[Login superadmin] El usuario inició sesión pero su rol es: ' + userRole;
      allTestsPassed = false;
    } else {
      reportData.status += '\n- [x] Login superadmin exitoso';
      adminToken = resSuperadminLogin.data.tokens?.idToken;
    }
    expect(userRole).toBe('superadmin');
  });

  it('should list users as admin', async () => {
    addCurlToReport('Listar usuarios (admin)', 'GET', '/admin/users', { Authorization: `Bearer ${adminToken}` });
    const usersRes = await axios.get(`${API_URL}/admin/users`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    addToReport('responses', 'Listado de usuarios (admin)', JSON.stringify(usersRes.data, null, 2));
    reportData.status += '\n- [x] Listado de usuarios exitoso';
    expect(Array.isArray(usersRes.data)).toBe(true);
  });

  afterAll(() => {
    reportData.observations = `- Email de usuario: ${email}\n- El usuario puede ser eliminado manualmente tras el test si se desea.`;
    reportData.status = allTestsPassed ? '✅ All tests passed successfully' : '❌ Some tests failed';
    writeReport(reportData);
  });
}); 