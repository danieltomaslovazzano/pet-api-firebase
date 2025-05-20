const axios = require('axios');
const { writeReport } = require('./helpers/report');
const request = require('supertest');
const app = require('../../app');
const { prisma } = require('../../config/prisma');
const admin = require('../../config/firebase');
const { 
  createTestUser, 
  createTestSuperAdmin, 
  cleanupTestUsers,
  generateTestToken,
  getAuthToken,
  getAdminToken
} = require('./helpers/auth');

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
    testName: 'auth-tests',
    payloads: '',
    curls: '',
    responses: '',
    status: '',
    observations: ''
  };
  let allTestsPassed = true;
  let resLogin, idToken, refreshToken;

  // --- Registro ---
  try {
    const registerPayload = { email, password, name };
    reportData.payloads += '### Registro\n\n```json\n' + JSON.stringify(registerPayload, null, 2) + '\n```\n';
    reportData.curls += '### Registro\n\n```bash\ncurl -X POST ' + API_URL + '/auth/register \\\n  -H "Content-Type: application/json" \\\n  -d \'"' + JSON.stringify(registerPayload) + "'\'\n```\n";
    const resRegister = await axios.post(`${API_URL}/auth/register`, registerPayload);
    reportData.responses += '### Registro\n\n```json\n' + JSON.stringify(resRegister.data, null, 2) + '\n```\n';
    reportData.status += '\n- [x] Registro exitoso';
  } catch (err) {
    allTestsPassed = false;
    reportData.responses += '\n### Registro (error)\n\n```json\n' + JSON.stringify(err.response?.data || err.message, null, 2) + '\n```\n';
    reportData.status += '\n- [ERR] Registro falló';
  }

  // --- Login ---
  try {
    const loginPayload = { email, password };
    reportData.payloads += '\n### Login\n\n```json\n' + JSON.stringify(loginPayload, null, 2) + '\n```\n';
    reportData.curls += '\n### Login\n\n```bash\ncurl -X POST ' + API_URL + '/auth/login \\\n  -H "Content-Type: application/json" \\\n  -d \'"' + JSON.stringify(loginPayload) + "'\'\n```\n";
    resLogin = await axios.post(`${API_URL}/auth/login`, loginPayload);
    reportData.responses += '\n### Login\n\n```json\n' + JSON.stringify(resLogin.data, null, 2) + '\n```\n';
    reportData.status += '\n- [x] Login exitoso';
    idToken = resLogin.data.tokens.idToken;
    refreshToken = resLogin.data.tokens.refreshToken;
  } catch (err) {
    allTestsPassed = false;
    reportData.responses += '\n### Login (error)\n\n```json\n' + JSON.stringify(err.response?.data || err.message, null, 2) + '\n```\n';
    reportData.status += '\n- [ERR] Login falló';
  }

  // --- Login con credenciales incorrectas ---
  try {
    const wrongLoginPayload = { email, password: 'wrongpassword' };
    reportData.payloads += '\n### Login con credenciales incorrectas\n\n```json\n' + JSON.stringify(wrongLoginPayload, null, 2) + '\n```\n';
    reportData.curls += '\n### Login con credenciales incorrectas\n\n```bash\ncurl -X POST ' + API_URL + '/auth/login \\\n  -H "Content-Type: application/json" \\\n  -d \'"' + JSON.stringify(wrongLoginPayload) + "'\'\n```\n";
    await axios.post(`${API_URL}/auth/login`, wrongLoginPayload);
    reportData.status += '\n- [ERR] Login con credenciales incorrectas no falló como se esperaba';
    allTestsPassed = false;
  } catch (err) {
    reportData.responses += '\n### Login con credenciales incorrectas\n\n```json\n' + JSON.stringify(err.response?.data || err.message, null, 2) + '\n```\n';
    reportData.status += '\n- [x] Login con credenciales incorrectas falló correctamente';
  }

  // --- Acceso a perfil ---
  try {
    reportData.curls += '\n### Acceso a perfil\n\n```bash\ncurl -X GET ' + API_URL + '/users/me \\\n  -H "Authorization: Bearer ' + idToken + '"\n```\n';
    const resProfile = await axios.get(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${idToken}` }
    });
    reportData.responses += '\n### Acceso a perfil\n\n```json\n' + JSON.stringify(resProfile.data, null, 2) + '\n```\n';
    reportData.status += '\n- [x] Acceso a perfil exitoso';
  } catch (err) {
    allTestsPassed = false;
    reportData.responses += '\n### Acceso a perfil (error)\n\n```json\n' + JSON.stringify(err.response?.data || err.message, null, 2) + '\n```\n';
    reportData.status += '\n- [ERR] Acceso a perfil falló';
  }

  // --- Acceso sin token ---
  try {
    reportData.curls += '\n### Acceso sin token\n\n```bash\ncurl -X GET ' + API_URL + '/users/me\n```\n';
    await axios.get(`${API_URL}/users/me`);
    reportData.status += '\n- [ERR] Acceso sin token no falló como se esperaba';
    allTestsPassed = false;
  } catch (err) {
    reportData.responses += '\n### Acceso sin token\n\n```json\n' + JSON.stringify(err.response?.data || err.message, null, 2) + '\n```\n';
    reportData.status += '\n- [x] Acceso sin token falló correctamente';
  }

  // --- Login de superadmin ---
  let adminToken;
  try {
    const superadminEmail = 'daniellovazzano+2@gmail.com';
    const superadminPassword = 'PC.103638dl';
    const superadminLoginPayload = { email: superadminEmail, password: superadminPassword };
    reportData.payloads += '\n### Login Superadmin\n\n```json\n' + JSON.stringify(superadminLoginPayload, null, 2) + '\n```\n';
    reportData.curls += '\n### Login Superadmin\n\n```bash\ncurl -X POST ' + API_URL + '/auth/login \\\n  -H "Content-Type: application/json" \\\n  -d \' ' + JSON.stringify(superadminLoginPayload) + ' \'\n```\n';
    const resSuperadminLogin = await axios.post(`${API_URL}/auth/login`, superadminLoginPayload);
    reportData.responses += '\n### Login Superadmin\n\n```json\n' + JSON.stringify(resSuperadminLogin.data, null, 2) + '\n```\n';
    const userRole = resSuperadminLogin.data?.user?.role || resSuperadminLogin.data?.role;
    if (userRole !== 'superadmin') {
      reportData.status += '\n- [ERR] Login superadmin: El usuario no tiene el rol superadmin';
      reportData.observations += '\n[Login superadmin] El usuario inició sesión pero su rol es: ' + userRole;
      allTestsPassed = false;
    } else {
      reportData.status += '\n- [x] Login superadmin exitoso';
      adminToken = resSuperadminLogin.data.tokens?.idToken;
    }
  } catch (err) {
    allTestsPassed = false;
    reportData.responses += '\n### Login Superadmin (error)\n\n```json\n' + JSON.stringify(err.response?.data || err.message, null, 2) + '\n```\n';
    reportData.status += '\n- [ERR] Login superadmin falló';
  }

  // --- Listar usuarios como admin ---
  try {
    reportData.curls += '\n### Listar usuarios (admin)\n\n```bash\ncurl -X GET ' + API_URL + '/admin/users \\\n  -H "Authorization: Bearer ' + adminToken + '"\n```\n';
    const usersRes = await axios.get(`${API_URL}/admin/users`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    reportData.responses += '\n### Listado de usuarios (admin)\n\n```json\n' + JSON.stringify(usersRes.data, null, 2) + '\n```\n';
    reportData.status += '\n- [x] Listado de usuarios exitoso';
  } catch (err) {
    allTestsPassed = false;
    reportData.responses += '\n### Listado de usuarios (admin) (error)\n\n```json\n' + JSON.stringify(err.response?.data || err.message, null, 2) + '\n```\n';
    reportData.status += '\n- [ERR] Listado de usuarios (admin) falló';
  }

  reportData.observations = `- Email de usuario: ${email}\n- El usuario puede ser eliminado manualmente tras el test si se desea.`;
  clearTimeout(timeout);
  writeReport(reportData);
  process.exit(allTestsPassed ? 0 : 1);
}

main();

describe('Authentication Endpoints', () => {
  let testUser;
  let userToken;
  let adminToken;

  // Setup test data before all tests
  beforeAll(async () => {
    // Create test user
    testUser = await createTestUser({
      email: `test_${Date.now()}@example.com`,
      password: 'test123',
      name: 'Test User'
    });

    // Get tokens
    userToken = await getAuthToken(testUser.email, 'test123');
    adminToken = await getAdminToken();
  });

  // Cleanup test data after all tests
  afterAll(async () => {
    await cleanupTestUsers([testUser.email]);
  });

  describe('User Registration and Login', () => {
    it('should register a new user successfully', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          email: `new_user_${Date.now()}@example.com`,
          password: 'test123',
          name: 'New Test User'
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('user');
      expect(response.body.user).toHaveProperty('email');
      expect(response.body).toHaveProperty('tokens');
      expect(response.body.tokens).toHaveProperty('idToken');
    });

    it('should login user successfully', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: 'test123'
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('user');
      expect(response.body.user).toHaveProperty('email', testUser.email);
      expect(response.body).toHaveProperty('tokens');
      expect(response.body.tokens).toHaveProperty('idToken');
    });

    it('should deny login with incorrect credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: 'wrongpassword'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Token Refresh', () => {
    let refreshToken;

    beforeAll(async () => {
      // Get a valid refresh token by logging in
      const loginResponse = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: 'test123'
        });
      
      refreshToken = loginResponse.body.tokens.refreshToken;
    });

    it('should refresh token successfully', async () => {
      const response = await request(app)
        .post('/api/auth/refresh-token')
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          refreshToken
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('idToken');
      expect(response.body).toHaveProperty('refreshToken');
      
      // Update user token for subsequent tests
      userToken = response.body.idToken;
    });

    it('should fail to refresh with invalid refresh token', async () => {
      const response = await request(app)
        .post('/api/auth/refresh-token')
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          refreshToken: 'invalid-refresh-token'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Password Reset', () => {
    it('should send password reset email', async () => {
      const response = await request(app)
        .post('/api/auth/reset-password')
        .send({
          email: testUser.email
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
    });

    it('should fail to send reset email for non-existent user', async () => {
      const response = await request(app)
        .post('/api/auth/reset-password')
        .send({
          email: 'nonexistent@example.com'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Profile Access', () => {
    it('should allow user to access own profile', async () => {
      const response = await request(app)
        .get('/api/users/me')
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', testUser.id);
      expect(response.body).toHaveProperty('email', testUser.email);
    });

    it('should deny access to profile without token', async () => {
      const response = await request(app)
        .get('/api/users/me');

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
    });

    it('should deny access with invalid token', async () => {
      const response = await request(app)
        .get('/api/users/me')
        .set('Authorization', 'Bearer invalid-token');

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('Protected Routes', () => {
    it('should deny access to protected route without token', async () => {
      const response = await request(app)
        .get('/api/pets');

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
    });

    it('should deny access to protected route with invalid token', async () => {
      const response = await request(app)
        .get('/api/pets')
        .set('Authorization', 'Bearer invalid-token');

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error');
    });

    it('should allow access to protected route with valid token', async () => {
      const response = await request(app)
        .get('/api/pets')
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).toBe(200);
    });
  });
}); 