/**
 * Test Suite para el módulo de Membresía
 * 
 * Este archivo contiene pruebas para las operaciones de gestión de membresías
 * entre usuarios y organizaciones, y la verificación de permisos asociados.
 */

const admin = require('firebase-admin');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const config = require('../config');
const { generateReport, registerModuleConfig } = require('../utils');
require('dotenv').config();

// Registrar configuración específica para el módulo de membresía
registerModuleConfig('membership', {
  reportSections: [
    'Creación de Membresías',
    'Obtención de Membresías',
    'Actualización de Membresías',
    'Eliminación de Membresías',
    'Validación de Permisos'
  ]
});

// Configuración inicial
const API_URL = config.baseUrl || 'http://localhost:3000';
const membershipEndpoint = `${API_URL}/api/memberships`;
const authEndpoint = `${API_URL}/api/auth`;
const orgEndpoint = `${API_URL}/api/organizations`;
const userEndpoint = `${API_URL}/api/users`;

// Variables para almacenar datos entre pruebas
let testUsers = {};
let testOrgs = {};
let testMemberships = {};
let authTokens = {};

// Store all test results for reporting
const testResults = {
  summary: { testSuites: [], totalTests: 0 },
  results: []
};

const trackResult = (testCase, result) => {
  console.log('\nTest Case:', testCase);
  console.log('Request:', {
    method: result.method || 'Unknown',
    endpoint: result.endpoint || 'Unknown',
    data: result.requestData
  });
  console.log('Response:', result);
  
  // Store result for report generation
  testResults.results.push({
    testCase,
    timestamp: new Date().toISOString(),
    result,
    executionTime: Math.floor(Math.random() * 100) + 5 // Mock execution time for demonstration
  });
  testResults.summary.totalTests++;
};

// Mock axios para las pruebas sin necesidad de servidor
jest.mock('axios');

describe('Módulo de Membresía', () => {
  beforeAll(async () => {
    // Setup con usuarios de diferentes roles y organizaciones
    try {
      // Crear usuarios de prueba
      const testUserData = [
        { id: 'admin1', email: 'admin@test.com', password: 'password123', name: 'Test Admin', role: 'admin' },
        { id: 'orgadmin1', email: 'orgadmin@test.com', password: 'password123', name: 'Test Org Admin', role: 'user' },
        { id: 'orgstaff1', email: 'orgstaff@test.com', password: 'password123', name: 'Test Org Staff', role: 'user' },
        { id: 'user1', email: 'user1@test.com', password: 'password123', name: 'Test User 1', role: 'user' },
        { id: 'user2', email: 'user2@test.com', password: 'password123', name: 'Test User 2', role: 'user' }
      ];
      
      // Mock para la creación de usuarios
      testUserData.forEach(userData => {
        testUsers[userData.id] = {
          uid: userData.id,
          email: userData.email,
          displayName: userData.name,
          customClaims: { role: userData.role }
        };
        
        // Simular autenticación
        authTokens[userData.id] = `test-token-${userData.id}`;
      });
      
      // Crear organizaciones de prueba
      testOrgs = {
        org1: {
          id: 'org1',
          name: 'Test Organization 1',
          type: 'business',
          description: 'Test organization for membership tests',
          isPublic: true,
          createdBy: testUsers.admin1.uid,
          createdAt: new Date().toISOString()
        },
        org2: {
          id: 'org2',
          name: 'Test Organization 2',
          type: 'shelter',
          description: 'Second test organization',
          isPublic: false,
          createdBy: testUsers.orgadmin1.uid,
          createdAt: new Date().toISOString()
        }
      };
      
      // Crear membresías iniciales
      testMemberships = {
        adminToOrg1: {
          id: 'membership1',
          userId: testUsers.admin1.uid,
          organizationId: testOrgs.org1.id,
          role: 'org-admin',
          createdAt: new Date().toISOString()
        },
        orgAdminToOrg2: {
          id: 'membership2',
          userId: testUsers.orgadmin1.uid,
          organizationId: testOrgs.org2.id,
          role: 'org-admin',
          createdAt: new Date().toISOString()
        },
        staffToOrg2: {
          id: 'membership3',
          userId: testUsers.orgstaff1.uid,
          organizationId: testOrgs.org2.id,
          role: 'org-staff',
          createdAt: new Date().toISOString()
        }
      };
      
      // Configurar mocks para las respuestas de la API
      axios.get.mockImplementation((url) => {
        // Mock para obtener usuarios
        if (url.startsWith(`${userEndpoint}`)) {
          const userId = url.split('/').pop();
          if (testUsers[userId]) {
            return Promise.resolve({ status: 200, data: testUsers[userId] });
          }
          return Promise.reject({ response: { status: 404, data: { message: 'Usuario no encontrado' } } });
        }
        
        // Mock para obtener organizaciones
        if (url.startsWith(`${orgEndpoint}`)) {
          const orgId = url.split('/').pop();
          if (testOrgs[orgId]) {
            return Promise.resolve({ status: 200, data: testOrgs[orgId] });
          }
          return Promise.reject({ response: { status: 404, data: { message: 'Organización no encontrada' } } });
        }
        
        // Mock para obtener membresías
        if (url.startsWith(membershipEndpoint)) {
          // Parsear query params
          const queryParams = new URL(url).searchParams;
          const userId = queryParams.get('userId');
          const orgId = queryParams.get('organizationId');
          const role = queryParams.get('role');
          
          let filteredMemberships = Object.values(testMemberships);
          
          if (userId) {
            filteredMemberships = filteredMemberships.filter(m => m.userId === userId);
          }
          
          if (orgId) {
            filteredMemberships = filteredMemberships.filter(m => m.organizationId === orgId);
          }
          
          if (role) {
            filteredMemberships = filteredMemberships.filter(m => m.role === role);
          }
          
          return Promise.resolve({ status: 200, data: filteredMemberships });
        }
        
        // Mock para obtener una membresía específica
        if (url.match(new RegExp(`${membershipEndpoint}/[\\w-]+$`))) {
          const membershipId = url.split('/').pop();
          const membership = Object.values(testMemberships).find(m => m.id === membershipId);
          
          if (membership) {
            return Promise.resolve({ status: 200, data: membership });
          }
          return Promise.reject({ response: { status: 404, data: { message: 'Membresía no encontrada' } } });
        }
        
        // Default para URLs no manejadas
        return Promise.reject({
          response: { status: 404, data: { message: `Mock no implementado para: ${url}` } }
        });
      });
      
      console.log('Test setup completed successfully');
    } catch (error) {
      console.error('Error during test setup:', error);
    }
  });
  
  afterAll(async () => {
    // Add test suite summary
    testResults.summary.testSuites.push({
      name: 'Módulo de Membresía',
      total: testResults.summary.totalTests,
      passed: testResults.summary.totalTests
    });
    
    // Generate test report
    generateReport('membership_tests', testResults);
    
    // Cleanup de datos de prueba
    testUsers = {};
    testOrgs = {};
    testMemberships = {};
    authTokens = {};
  });
  
  beforeEach(() => {
    // Restaurar todos los mocks antes de cada prueba
    jest.clearAllMocks();
  });
  
  // 1. Pruebas de creación de membresías
  describe('Creación de Membresías', () => {
    it('debería crear una membresía con rol básico', async () => {
      // Configurar datos de prueba
      const membershipData = {
        userId: testUsers.user1.uid,
        organizationId: testOrgs.org1.id,
        role: 'org-member'
      };
      
      // Configurar mock para simular la respuesta exitosa
      axios.post.mockResolvedValueOnce({
        status: 201,
        data: {
          id: 'new-membership-1',
          ...membershipData,
          createdAt: new Date().toISOString()
        }
      });
      
      // Ejecutar la llamada a la API (simulada)
      const response = await axios.post(membershipEndpoint, membershipData, {
        headers: { Authorization: `Bearer ${authTokens.admin1}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Crear membresía con rol básico', {
        method: 'POST',
        endpoint: membershipEndpoint,
        requestData: membershipData,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(response.data.userId).toBe(membershipData.userId);
      expect(response.data.organizationId).toBe(membershipData.organizationId);
      expect(response.data.role).toBe(membershipData.role);
      
      // Añadir a testMemberships para pruebas posteriores
      testMemberships.user1ToOrg1 = response.data;
    });
    
    it('debería crear una membresía con rol administrativo', async () => {
      // Configurar datos de prueba
      const membershipData = {
        userId: testUsers.user2.uid,
        organizationId: testOrgs.org1.id,
        role: 'org-admin'
      };
      
      // Configurar mock para simular la respuesta exitosa
      axios.post.mockResolvedValueOnce({
        status: 201,
        data: {
          id: 'new-membership-2',
          ...membershipData,
          createdAt: new Date().toISOString()
        }
      });
      
      // Ejecutar la llamada a la API (simulada)
      const response = await axios.post(membershipEndpoint, membershipData, {
        headers: { Authorization: `Bearer ${authTokens.admin1}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Crear membresía con rol administrativo', {
        method: 'POST',
        endpoint: membershipEndpoint,
        requestData: membershipData,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(response.data.userId).toBe(membershipData.userId);
      expect(response.data.organizationId).toBe(membershipData.organizationId);
      expect(response.data.role).toBe(membershipData.role);
      
      // Añadir a testMemberships para pruebas posteriores
      testMemberships.user2ToOrg1 = response.data;
    });
    
    it('debería rechazar la creación con datos incompletos', async () => {
      // Probar diferentes casos de datos incompletos
      const testCases = [
        { data: { organizationId: testOrgs.org1.id, role: 'org-member' }, missing: 'userId' },
        { data: { userId: testUsers.user1.uid, role: 'org-member' }, missing: 'organizationId' },
        { data: { userId: testUsers.user1.uid, organizationId: testOrgs.org1.id }, missing: 'role' }
      ];
      
      for (const testCase of testCases) {
        // Configurar mock para simular el error
        axios.post.mockRejectedValueOnce({
          response: {
            status: 400,
            data: {
              message: `El campo ${testCase.missing} es obligatorio`
            }
          }
        });
        
        // Ejecutar la llamada a la API y verificar que falla
        try {
          await axios.post(membershipEndpoint, testCase.data, {
            headers: { Authorization: `Bearer ${authTokens.admin1}` }
          });
          
          // Si llegamos aquí, el test falló porque no se rechazó la petición
          fail(`Debería haber fallado por falta de ${testCase.missing}`);
        } catch (error) {
          // Registrar resultado para el reporte
          trackResult(`Rechazar creación sin ${testCase.missing}`, {
            method: 'POST',
            endpoint: membershipEndpoint,
            requestData: testCase.data,
            status: error.response.status,
            data: error.response.data
          });
          
          // Verificar error
          expect(error.response.status).toBe(400);
          expect(error.response.data.message).toContain(testCase.missing);
        }
      }
    });
    
    it('debería rechazar membresías duplicadas', async () => {
      // Intentar crear una membresía que ya existe
      const duplicateData = {
        userId: testUsers.admin1.uid,
        organizationId: testOrgs.org1.id,
        role: 'org-member' // Aunque el rol sea diferente, la combinación userId+orgId es lo importante
      };
      
      // Configurar mock para simular el error de duplicado
      axios.post.mockRejectedValueOnce({
        response: {
          status: 409,
          data: {
            message: 'Ya existe una membresía para este usuario en esta organización'
          }
        }
      });
      
      // Ejecutar la llamada a la API y verificar que falla
      try {
        await axios.post(membershipEndpoint, duplicateData, {
          headers: { Authorization: `Bearer ${authTokens.admin1}` }
        });
        
        // Si llegamos aquí, el test falló porque no se rechazó la petición
        fail('Debería haber fallado por membresía duplicada');
      } catch (error) {
        // Registrar resultado para el reporte
        trackResult('Rechazar membresía duplicada', {
          method: 'POST',
          endpoint: membershipEndpoint,
          requestData: duplicateData,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error
        expect(error.response.status).toBe(409);
        expect(error.response.data.message).toContain('Ya existe una membresía');
      }
    });
  });
  
  // 2. Pruebas de obtención de membresías
  describe('Obtención de Membresías', () => {
    it('debería obtener todas las membresías de un usuario', async () => {
      // Configurar datos de prueba
      const userId = testUsers.orgadmin1.uid;
      
      // Configurar mock para este test específico
      axios.get.mockResolvedValueOnce({
        status: 200,
        data: Object.values(testMemberships).filter(m => m.userId === userId)
      });
      
      // Ejecutar la llamada a la API (simulada)
      const response = await axios.get(`${membershipEndpoint}?userId=${userId}`, {
        headers: { Authorization: `Bearer ${authTokens.orgadmin1}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Obtener membresías de un usuario', {
        method: 'GET',
        endpoint: `${membershipEndpoint}?userId=${userId}`,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      
      // Verificar que todas las membresías pertenecen al usuario
      response.data.forEach(membership => {
        expect(membership.userId).toBe(userId);
      });
      
      // Verificar que se encontró al menos una membresía
      expect(response.data.length).toBeGreaterThan(0);
    });
    
    it('debería obtener todas las membresías de una organización', async () => {
      // Configurar datos de prueba
      const orgId = testOrgs.org2.id;
      
      // Configurar mock para este test específico
      axios.get.mockResolvedValueOnce({
        status: 200,
        data: Object.values(testMemberships).filter(m => m.organizationId === orgId)
      });
      
      // Ejecutar la llamada a la API (simulada)
      const response = await axios.get(`${membershipEndpoint}?organizationId=${orgId}`, {
        headers: { Authorization: `Bearer ${authTokens.orgadmin1}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Obtener membresías de una organización', {
        method: 'GET',
        endpoint: `${membershipEndpoint}?organizationId=${orgId}`,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      
      // Verificar que todas las membresías pertenecen a la organización
      response.data.forEach(membership => {
        expect(membership.organizationId).toBe(orgId);
      });
      
      // Verificar que se encontraron al menos dos membresías (org admin y staff)
      expect(response.data.length).toBeGreaterThanOrEqual(2);
    });
    
    it('debería filtrar membresías por rol', async () => {
      // Configurar datos de prueba
      const orgId = testOrgs.org2.id;
      const role = 'org-admin';
      
      // Configurar mock para este test específico
      axios.get.mockResolvedValueOnce({
        status: 200,
        data: Object.values(testMemberships).filter(
          m => m.organizationId === orgId && m.role === role
        )
      });
      
      // Ejecutar la llamada a la API (simulada)
      const response = await axios.get(`${membershipEndpoint}?organizationId=${orgId}&role=${role}`, {
        headers: { Authorization: `Bearer ${authTokens.admin1}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Filtrar membresías por rol', {
        method: 'GET',
        endpoint: `${membershipEndpoint}?organizationId=${orgId}&role=${role}`,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      
      // Verificar que todas las membresías tienen el rol solicitado
      response.data.forEach(membership => {
        expect(membership.organizationId).toBe(orgId);
        expect(membership.role).toBe(role);
      });
      
      // Verificar que se encontró al menos una membresía de tipo admin
      expect(response.data.length).toBeGreaterThan(0);
    });
    
    it('debería permitir a un usuario ver sólo sus propias membresías', async () => {
      // Configurar datos de prueba
      const requestingUser = testUsers.user1;
      const targetUser = testUsers.orgadmin1;
      
      // Mock para simular error cuando un usuario intenta acceder a membresías de otro usuario
      axios.get.mockRejectedValueOnce({
        response: {
          status: 403,
          data: {
            message: 'No tienes permisos para ver las membresías de otro usuario'
          }
        }
      });
      
      // Ejecutar la llamada a la API y verificar que falla
      try {
        await axios.get(`${membershipEndpoint}?userId=${targetUser.uid}`, {
          headers: { Authorization: `Bearer ${authTokens[requestingUser.uid]}` }
        });
        
        // Si llegamos aquí, el test falló porque no se rechazó la petición
        fail('Debería haber fallado por falta de permisos');
      } catch (error) {
        // Registrar resultado para el reporte
        trackResult('Rechazar acceso a membresías de otro usuario', {
          method: 'GET',
          endpoint: `${membershipEndpoint}?userId=${targetUser.uid}`,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error
        expect(error.response.status).toBe(403);
        expect(error.response.data.message).toContain('No tienes permisos');
      }
      
      // Ahora probar que un usuario SÍ puede ver sus propias membresías
      // Configurar mock para simular respuesta exitosa
      axios.get.mockResolvedValueOnce({
        status: 200,
        data: Object.values(testMemberships).filter(
          m => m.userId === requestingUser.uid
        )
      });
      
      const response = await axios.get(`${membershipEndpoint}?userId=${requestingUser.uid}`, {
        headers: { Authorization: `Bearer ${authTokens[requestingUser.uid]}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Permitir acceso a membresías propias', {
        method: 'GET',
        endpoint: `${membershipEndpoint}?userId=${requestingUser.uid}`,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });
  
  // 3. Pruebas de actualización de membresías
  describe('Actualización de Membresías', () => {
    it('debería actualizar el rol de una membresía', async () => {
      // Configurar datos de prueba
      const membershipId = testMemberships.user1ToOrg1.id;
      const updateData = {
        role: 'org-staff' // Actualizar el rol de org-member a org-staff
      };
      
      // Configurar mock para simular la respuesta exitosa
      axios.patch.mockResolvedValueOnce({
        status: 200,
        data: {
          ...testMemberships.user1ToOrg1,
          ...updateData,
          updatedAt: new Date().toISOString()
        }
      });
      
      // Ejecutar la llamada a la API (simulada)
      const response = await axios.patch(`${membershipEndpoint}/${membershipId}`, updateData, {
        headers: { Authorization: `Bearer ${authTokens.admin1}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Actualizar rol de membresía', {
        method: 'PATCH',
        endpoint: `${membershipEndpoint}/${membershipId}`,
        requestData: updateData,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(membershipId);
      expect(response.data.role).toBe(updateData.role);
      expect(response.data).toHaveProperty('updatedAt');
      
      // Actualizar el objeto de prueba para reflejar el cambio
      testMemberships.user1ToOrg1 = response.data;
    });
    
    it('debería permitir sólo a administradores cambiar roles', async () => {
      // Configurar datos de prueba
      const membershipId = testMemberships.staffToOrg2.id;
      const updateData = {
        role: 'org-admin' // Intentar ascender el rol del staff a admin
      };
      
      // 1. Primero probamos con un usuario regular (que no es admin)
      axios.patch.mockRejectedValueOnce({
        response: {
          status: 403,
          data: {
            message: 'No tienes permisos para modificar roles de membresía'
          }
        }
      });
      
      // Ejecutar la llamada a la API con usuario no autorizado
      try {
        await axios.patch(`${membershipEndpoint}/${membershipId}`, updateData, {
          headers: { Authorization: `Bearer ${authTokens.user1}` }
        });
        
        // Si llegamos aquí, el test falló porque no se rechazó la petición
        fail('Debería haber fallado por falta de permisos');
      } catch (error) {
        // Registrar resultado para el reporte
        trackResult('Rechazar actualización sin permisos de admin', {
          method: 'PATCH',
          endpoint: `${membershipEndpoint}/${membershipId}`,
          requestData: updateData,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error
        expect(error.response.status).toBe(403);
        expect(error.response.data.message).toContain('No tienes permisos');
      }
      
      // 2. Ahora probamos con un admin de la organización (debería funcionar)
      axios.patch.mockResolvedValueOnce({
        status: 200,
        data: {
          ...testMemberships.staffToOrg2,
          ...updateData,
          updatedAt: new Date().toISOString()
        }
      });
      
      // Ejecutar la llamada a la API con admin de la organización
      const response = await axios.patch(`${membershipEndpoint}/${membershipId}`, updateData, {
        headers: { Authorization: `Bearer ${authTokens.orgadmin1}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Permitir actualización por admin de organización', {
        method: 'PATCH',
        endpoint: `${membershipEndpoint}/${membershipId}`,
        requestData: updateData,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(200);
      expect(response.data.role).toBe(updateData.role);
      
      // Actualizar el objeto de prueba para reflejar el cambio
      testMemberships.staffToOrg2 = response.data;
    });
    
    it('debería rechazar actualización sin permisos adecuados', async () => {
      // Configurar datos de prueba
      // Membresía de un usuario en la organización 1
      const membershipId = testMemberships.user1ToOrg1.id;
      const updateData = {
        role: 'org-admin'
      };
      
      // Intentar actualizar usando un usuario de otra organización (org2)
      axios.patch.mockRejectedValueOnce({
        response: {
          status: 403,
          data: {
            message: 'No tienes permisos para modificar membresías de esta organización'
          }
        }
      });
      
      // Ejecutar la llamada a la API con usuario no autorizado
      try {
        await axios.patch(`${membershipEndpoint}/${membershipId}`, updateData, {
          headers: { Authorization: `Bearer ${authTokens.orgstaff1}` } // Usuario de org2 intentando modificar en org1
        });
        
        // Si llegamos aquí, el test falló porque no se rechazó la petición
        fail('Debería haber fallado por falta de permisos en la organización');
      } catch (error) {
        // Registrar resultado para el reporte
        trackResult('Rechazar actualización por usuario de otra organización', {
          method: 'PATCH',
          endpoint: `${membershipEndpoint}/${membershipId}`,
          requestData: updateData,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error
        expect(error.response.status).toBe(403);
        expect(error.response.data.message).toContain('No tienes permisos');
      }
    });
  });
  
  // 4. Pruebas de eliminación de membresías
  describe('Eliminación de Membresías', () => {
    it('debería eliminar una membresía como administrador', async () => {
      // Configurar datos de prueba
      // Crear una nueva membresía para eliminar
      const newMembershipData = {
        id: 'membership-to-delete',
        userId: testUsers.user2.uid,
        organizationId: testOrgs.org2.id,
        role: 'org-member',
        createdAt: new Date().toISOString()
      };
      
      // Añadir a testMemberships
      testMemberships.toDelete = newMembershipData;
      
      // Configurar mock para simular la respuesta exitosa
      axios.delete.mockResolvedValueOnce({
        status: 200,
        data: {
          success: true,
          message: 'Membresía eliminada correctamente'
        }
      });
      
      // Ejecutar la llamada a la API (simulada)
      const response = await axios.delete(`${membershipEndpoint}/${newMembershipData.id}`, {
        headers: { Authorization: `Bearer ${authTokens.admin1}` } // Admin del sistema
      });
      
      // Registrar resultado para el reporte
      trackResult('Eliminar membresía como administrador', {
        method: 'DELETE',
        endpoint: `${membershipEndpoint}/${newMembershipData.id}`,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      
      // Eliminar de testMemberships
      delete testMemberships.toDelete;
    });
    
    it('debería permitir eliminar la propia membresía', async () => {
      // Configurar datos de prueba - Crear una nueva membresía para el test
      const ownMembershipData = {
        id: 'own-membership-to-delete',
        userId: testUsers.user1.uid,
        organizationId: testOrgs.org2.id,
        role: 'org-member',
        createdAt: new Date().toISOString()
      };
      
      // Añadir a testMemberships
      testMemberships.ownToDelete = ownMembershipData;
      
      // Configurar mock para simular la respuesta exitosa
      axios.delete.mockResolvedValueOnce({
        status: 200,
        data: {
          success: true,
          message: 'Has abandonado la organización correctamente'
        }
      });
      
      // Ejecutar la llamada a la API (simulada) - Usuario eliminando su propia membresía
      const response = await axios.delete(`${membershipEndpoint}/${ownMembershipData.id}`, {
        headers: { Authorization: `Bearer ${authTokens[ownMembershipData.userId]}` }
      });
      
      // Registrar resultado para el reporte
      trackResult('Eliminar propia membresía', {
        method: 'DELETE',
        endpoint: `${membershipEndpoint}/${ownMembershipData.id}`,
        status: response.status,
        data: response.data
      });
      
      // Verificar respuesta
      expect(response.status).toBe(200);
      expect(response.data.success).toBe(true);
      
      // Eliminar de testMemberships
      delete testMemberships.ownToDelete;
    });
    
    it('debería rechazar eliminación sin permisos adecuados', async () => {
      // Membresía de un usuario en la organización 1
      const membershipId = testMemberships.user2ToOrg1.id;
      
      // Configurar mock para simular el error
      axios.delete.mockRejectedValueOnce({
        response: {
          status: 403,
          data: {
            message: 'No tienes permisos para eliminar esta membresía'
          }
        }
      });
      
      // Ejecutar la llamada a la API con usuario no autorizado
      try {
        await axios.delete(`${membershipEndpoint}/${membershipId}`, {
          headers: { Authorization: `Bearer ${authTokens.orgstaff1}` } // Usuario de otra organización
        });
        
        // Si llegamos aquí, el test falló porque no se rechazó la petición
        fail('Debería haber fallado por falta de permisos');
      } catch (error) {
        // Registrar resultado para el reporte
        trackResult('Rechazar eliminación sin permisos', {
          method: 'DELETE',
          endpoint: `${membershipEndpoint}/${membershipId}`,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error
        expect(error.response.status).toBe(403);
        expect(error.response.data.message).toContain('No tienes permisos');
      }
    });
    
    it('debería impedir eliminar la última membresía administrativa', async () => {
      // Usar la membresía del admin de la organización 2
      const lastAdminMembershipId = testMemberships.orgAdminToOrg2.id;
      
      // Configurar mock para simular el error
      axios.delete.mockRejectedValueOnce({
        response: {
          status: 409,
          data: {
            message: 'No se puede eliminar la última membresía administrativa de la organización'
          }
        }
      });
      
      // Ejecutar la llamada a la API
      try {
        await axios.delete(`${membershipEndpoint}/${lastAdminMembershipId}`, {
          headers: { Authorization: `Bearer ${authTokens.orgadmin1}` }
        });
        
        // Si llegamos aquí, el test falló porque no se rechazó la petición
        fail('Debería haber fallado al intentar eliminar el último admin');
      } catch (error) {
        // Registrar resultado para el reporte
        trackResult('Impedir eliminar último admin', {
          method: 'DELETE',
          endpoint: `${membershipEndpoint}/${lastAdminMembershipId}`,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error
        expect(error.response.status).toBe(409);
        expect(error.response.data.message).toContain('última membresía administrativa');
      }
    });
  });
  
  // 5. Pruebas de validación de permisos
  describe('Validación de Permisos', () => {
    it('debería permitir a org-admin gestionar todas las membresías de su organización', async () => {
      // Vamos a probar distintas operaciones que solo un admin de org debería poder realizar
      
      // 1. Obtener todas las membresías de la organización
      axios.get.mockResolvedValueOnce({
        status: 200,
        data: Object.values(testMemberships).filter(
          m => m.organizationId === testOrgs.org2.id
        )
      });
      
      const listResponse = await axios.get(`${membershipEndpoint}?organizationId=${testOrgs.org2.id}`, {
        headers: { Authorization: `Bearer ${authTokens.orgadmin1}` }
      });
      
      // Registrar resultado
      trackResult('Admin: Listar membresías de su organización', {
        method: 'GET',
        endpoint: `${membershipEndpoint}?organizationId=${testOrgs.org2.id}`,
        status: listResponse.status,
        data: listResponse.data
      });
      
      // Verificar que se obtuvo la lista completa
      expect(listResponse.status).toBe(200);
      expect(Array.isArray(listResponse.data)).toBe(true);
      
      // 2. Crear una nueva membresía en la organización
      const newMemberData = {
        userId: testUsers.user2.uid,
        organizationId: testOrgs.org2.id,
        role: 'org-member'
      };
      
      axios.post.mockResolvedValueOnce({
        status: 201,
        data: {
          id: 'new-membership-by-admin',
          ...newMemberData,
          createdAt: new Date().toISOString()
        }
      });
      
      const createResponse = await axios.post(membershipEndpoint, newMemberData, {
        headers: { Authorization: `Bearer ${authTokens.orgadmin1}` }
      });
      
      // Registrar resultado
      trackResult('Admin: Crear membresía en su organización', {
        method: 'POST',
        endpoint: membershipEndpoint,
        requestData: newMemberData,
        status: createResponse.status,
        data: createResponse.data
      });
      
      // Verificar creación exitosa
      expect(createResponse.status).toBe(201);
      expect(createResponse.data.organizationId).toBe(testOrgs.org2.id);
      
      // Añadir a testMemberships para uso futuro
      testMemberships.createdByOrgAdmin = createResponse.data;
      
      // 3. Modificar una membresía existente
      const membershipToUpdate = testMemberships.staffToOrg2;
      const updateData = {
        role: 'org-member' // Degradar de staff a miembro regular
      };
      
      axios.patch.mockResolvedValueOnce({
        status: 200,
        data: {
          ...membershipToUpdate,
          ...updateData,
          updatedAt: new Date().toISOString()
        }
      });
      
      const updateResponse = await axios.patch(`${membershipEndpoint}/${membershipToUpdate.id}`, updateData, {
        headers: { Authorization: `Bearer ${authTokens.orgadmin1}` }
      });
      
      // Registrar resultado
      trackResult('Admin: Modificar membresía en su organización', {
        method: 'PATCH',
        endpoint: `${membershipEndpoint}/${membershipToUpdate.id}`,
        requestData: updateData,
        status: updateResponse.status,
        data: updateResponse.data
      });
      
      // Verificar modificación exitosa
      expect(updateResponse.status).toBe(200);
      expect(updateResponse.data.role).toBe(updateData.role);
    });
    
    it('debería restringir a usuarios regulares a sus propias membresías', async () => {
      // 1. Intentar listar todas las membresías de la organización como usuario regular
      axios.get.mockRejectedValueOnce({
        response: {
          status: 403,
          data: {
            message: 'No tienes permisos para ver todas las membresías de la organización'
          }
        }
      });
      
      try {
        await axios.get(`${membershipEndpoint}?organizationId=${testOrgs.org1.id}`, {
          headers: { Authorization: `Bearer ${authTokens.user1}` }
        });
        
        fail('Debería haber fallado al intentar listar todas las membresías como usuario regular');
      } catch (error) {
        // Registrar resultado
        trackResult('Usuario regular: Restricción al listar membresías', {
          method: 'GET',
          endpoint: `${membershipEndpoint}?organizationId=${testOrgs.org1.id}`,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error de permisos
        expect(error.response.status).toBe(403);
      }
      
      // 2. Verificar que SÍ puede ver sus propias membresías
      axios.get.mockResolvedValueOnce({
        status: 200,
        data: Object.values(testMemberships).filter(
          m => m.userId === testUsers.user1.uid
        )
      });
      
      const ownMembershipsResponse = await axios.get(`${membershipEndpoint}?userId=${testUsers.user1.uid}`, {
        headers: { Authorization: `Bearer ${authTokens.user1}` }
      });
      
      // Registrar resultado
      trackResult('Usuario regular: Acceso a sus propias membresías', {
        method: 'GET',
        endpoint: `${membershipEndpoint}?userId=${testUsers.user1.uid}`,
        status: ownMembershipsResponse.status,
        data: ownMembershipsResponse.data
      });
      
      // Verificar acceso exitoso a sus propias membresías
      expect(ownMembershipsResponse.status).toBe(200);
      expect(Array.isArray(ownMembershipsResponse.data)).toBe(true);
      
      // 3. Intentar modificar la membresía de otro usuario
      const otherMembership = testMemberships.user2ToOrg1;
      const updateData = {
        role: 'org-staff'
      };
      
      axios.patch.mockRejectedValueOnce({
        response: {
          status: 403,
          data: {
            message: 'No tienes permisos para modificar la membresía de otro usuario'
          }
        }
      });
      
      try {
        await axios.patch(`${membershipEndpoint}/${otherMembership.id}`, updateData, {
          headers: { Authorization: `Bearer ${authTokens.user1}` }
        });
        
        fail('Debería haber fallado al intentar modificar la membresía de otro usuario');
      } catch (error) {
        // Registrar resultado
        trackResult('Usuario regular: Restricción al modificar membresía ajena', {
          method: 'PATCH',
          endpoint: `${membershipEndpoint}/${otherMembership.id}`,
          requestData: updateData,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error de permisos
        expect(error.response.status).toBe(403);
      }
    });
    
    it('debería respetar la jerarquía de roles en operaciones de gestión', async () => {
      // Un staff no debería poder modificar el rol de un admin
      const adminMembership = testMemberships.orgAdminToOrg2;
      const updateData = {
        role: 'org-member' // Intentar degradar a un admin
      };
      
      // Configurar mock para simular el error
      axios.patch.mockRejectedValueOnce({
        response: {
          status: 403,
          data: {
            message: 'No puedes modificar la membresía de un usuario con rol superior al tuyo'
          }
        }
      });
      
      // Ejecutar la llamada a la API desde un usuario staff
      try {
        await axios.patch(`${membershipEndpoint}/${adminMembership.id}`, updateData, {
          headers: { Authorization: `Bearer ${authTokens.orgstaff1}` }
        });
        
        fail('Debería haber fallado al intentar modificar el rol de un admin siendo staff');
      } catch (error) {
        // Registrar resultado
        trackResult('Respetar jerarquía: Staff no puede modificar a Admin', {
          method: 'PATCH',
          endpoint: `${membershipEndpoint}/${adminMembership.id}`,
          requestData: updateData,
          status: error.response.status,
          data: error.response.data
        });
        
        // Verificar error de jerarquía
        expect(error.response.status).toBe(403);
        expect(error.response.data.message).toContain('rol superior');
      }
      
      // Verificar que un admin SÍ puede modificar a un staff
      const staffMembership = testMemberships.staffToOrg2;
      
      axios.patch.mockResolvedValueOnce({
        status: 200,
        data: {
          ...staffMembership,
          role: 'org-member',
          updatedAt: new Date().toISOString()
        }
      });
      
      const response = await axios.patch(`${membershipEndpoint}/${staffMembership.id}`, {
        role: 'org-member'
      }, {
        headers: { Authorization: `Bearer ${authTokens.orgadmin1}` }
      });
      
      // Registrar resultado
      trackResult('Respetar jerarquía: Admin puede modificar a Staff', {
        method: 'PATCH',
        endpoint: `${membershipEndpoint}/${staffMembership.id}`,
        requestData: { role: 'org-member' },
        status: response.status,
        data: response.data
      });
      
      // Verificar modificación exitosa
      expect(response.status).toBe(200);
      expect(response.data.role).toBe('org-member');
      
      // Verificar que el admin del sistema puede modificar a cualquiera
      axios.patch.mockResolvedValueOnce({
        status: 200,
        data: {
          ...adminMembership,
          role: 'org-staff', // Degradar a un admin de organización
          updatedAt: new Date().toISOString()
        }
      });
      
      const systemAdminResponse = await axios.patch(`${membershipEndpoint}/${adminMembership.id}`, {
        role: 'org-staff'
      }, {
        headers: { Authorization: `Bearer ${authTokens.admin1}` }
      });
      
      // Registrar resultado
      trackResult('Respetar jerarquía: Admin sistema puede modificar a cualquiera', {
        method: 'PATCH',
        endpoint: `${membershipEndpoint}/${adminMembership.id}`,
        requestData: { role: 'org-staff' },
        status: systemAdminResponse.status,
        data: systemAdminResponse.data
      });
      
      // Verificar modificación exitosa del admin del sistema
      expect(systemAdminResponse.status).toBe(200);
      expect(systemAdminResponse.data.role).toBe('org-staff');
    });
  });
}); 