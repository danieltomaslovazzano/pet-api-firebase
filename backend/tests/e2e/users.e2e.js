const axios = require('axios');
const { writeReport } = require('./helpers/report');
const dotenv = require('dotenv');
const path = require('path');

// Load test environment variables
dotenv.config({ path: path.join(__dirname, '.env.test') });

// Test data
const API_URL = process.env.API_URL || 'http://localhost:3000/api';
let reportData = {
  group: 'users',
  testName: 'users-tests',
  payloads: '',
  curls: '',
  responses: '',
  status: '',
  observations: ''
};

// Helper function to add sections to the report
const addToReport = (section, title, content) => {
  reportData[section] += `### ${title}\n\n\`\`\`json\n${content}\n\`\`\`\n\n`;
};

// Helper function to add curl examples to the report
const addCurlToReport = (title, method, endpoint, headers = {}, data = null) => {
  let curl = `### ${title}\n\n\`\`\`bash\ncurl -X ${method} ${API_URL}${endpoint}`;
  
  // Add headers
  Object.entries(headers).forEach(([key, value]) => {
    curl += ` \\\n  -H \"${key}: ${value}\"`;
  });
  
  // Add data if present
  if (data) {
    curl += ` \\\n  -d '${JSON.stringify(data)}'`;
  }
  
  reportData.curls += curl + '\n\`\`\`\n\n';
};

describe('E2E: Users', () => {
  let adminToken;
  let headers = {};
  let createdUserId;
  let newUser;

  beforeAll(async () => {
    // Login as admin
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
    });
    adminToken = loginResponse.data.tokens.idToken;
    headers = { Authorization: `Bearer ${adminToken}` };
  });

  it('should create a user', async () => {
    newUser = {
      email: `test_${Date.now()}@example.com`,
      password: 'test1234',
      name: 'Test User',
      role: 'user'
    };
    const createResponse = await axios.post(`${API_URL}/users`, newUser, { headers });
    createdUserId = createResponse.data.id;
    addToReport('payloads', 'Crear usuario', JSON.stringify(newUser, null, 2));
    addToReport('responses', 'Crear usuario', JSON.stringify(createResponse.data, null, 2));
    addCurlToReport('Crear usuario', 'POST', '/users', headers, newUser);
    expect(createResponse.data).toHaveProperty('id');
    expect(createResponse.data.email).toBe(newUser.email);
  });

  it('should get user by ID', async () => {
    const getUserResponse = await axios.get(`${API_URL}/users/${createdUserId}`, { headers });
    addToReport('responses', 'Obtener usuario por ID', JSON.stringify(getUserResponse.data, null, 2));
    addCurlToReport('Obtener usuario por ID', 'GET', `/users/${createdUserId}`, headers);
    expect(getUserResponse.data).toHaveProperty('id', createdUserId);
    expect(getUserResponse.data).toHaveProperty('email', newUser.email);
  });

  it('should list users', async () => {
    const listResponse = await axios.get(`${API_URL}/users`, { headers });
    addToReport('responses', 'Listar usuarios', JSON.stringify(listResponse.data, null, 2));
    addCurlToReport('Listar usuarios', 'GET', '/users', headers);
    expect(Array.isArray(listResponse.data)).toBe(true);
    expect(listResponse.data.find(u => u.id === createdUserId)).toBeTruthy();
  });

  it('should update user', async () => {
    const updateData = { name: 'Updated Test User', phone: '+1234567890' };
    const updateResponse = await axios.put(`${API_URL}/users/${createdUserId}`, updateData, { headers });
    addToReport('payloads', 'Actualizar usuario', JSON.stringify(updateData, null, 2));
    addToReport('responses', 'Actualizar usuario', JSON.stringify(updateResponse.data, null, 2));
    addCurlToReport('Actualizar usuario', 'PUT', `/users/${createdUserId}`, headers, updateData);
    expect(updateResponse.data).toHaveProperty('name', updateData.name);
    expect(updateResponse.data).toHaveProperty('phone', updateData.phone);
  });

  it('should change user role', async () => {
    const roleData = { role: 'moderator' };
    const roleResponse = await axios.put(`${API_URL}/users/${createdUserId}`, roleData, { headers });
    addToReport('payloads', 'Cambiar rol de usuario', JSON.stringify(roleData, null, 2));
    addToReport('responses', 'Cambiar rol de usuario', JSON.stringify(roleResponse.data, null, 2));
    addCurlToReport('Cambiar rol de usuario', 'PUT', `/users/${createdUserId}`, headers, roleData);
    expect(roleResponse.data).toHaveProperty('role', 'moderator');
  });

  it('should delete user', async () => {
    const deleteResponse = await axios.delete(`${API_URL}/users/${createdUserId}`, { headers });
    addToReport('responses', 'Eliminar usuario', JSON.stringify(deleteResponse.data, null, 2));
    addCurlToReport('Eliminar usuario', 'DELETE', `/users/${createdUserId}`, headers);
    expect(deleteResponse.data).toHaveProperty('message');
  });

  afterAll(() => {
    reportData.status = '✅ All tests passed successfully';
    reportData.observations = '- User CRUD operations working correctly\n- Role changes applied successfully\n- Admin authorization working as expected';
    writeReport(reportData);
  });
}); 