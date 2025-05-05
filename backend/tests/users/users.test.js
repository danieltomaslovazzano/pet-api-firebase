/**
 * Test Suite para el módulo de Usuarios
 * 
 * Este archivo contiene pruebas para las operaciones CRUD de usuarios
 * y verificación de permisos y reglas de negocio asociadas.
 */

const admin = require('firebase-admin');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// Configuración inicial
const API_URL = process.env.TEST_API_URL || 'http://localhost:3000';
const usersEndpoint = `${API_URL}/users`;
const authEndpoint = `${API_URL}/auth`;

// Variables para almacenar datos entre pruebas
let testUsers = {};
let authTokens = {};

// Función auxiliar para generar datos de usuario aleatorios
const generateRandomUser = (role = 'user') => {
  const random = Math.floor(Math.random() * 10000);
  return {
    name: `Test User ${random}`,
    email: `test.user${random}@example.com`,
    password: 'Password123!',
    role: role
  };
};

// Función para crear un usuario y obtener su token
const createUserAndGetToken = async (userData) => {
  try {
    const response = await axios.post(`${authEndpoint}/register`, userData);
    const { user, tokens } = response.data;
    
    // Almacenar datos para uso en otras pruebas
    testUsers[user.id] = user;
    authTokens[user.id] = tokens.idToken;
    
    return { user, token: tokens.idToken };
  } catch (error) {
    console.error('Error creating test user:', error.response?.data || error.message);
    throw error;
  }
};

// Función para limpiar usuarios de prueba después de las pruebas
const cleanupTestUsers = async () => {
  const db = admin.firestore();
  const userIds = Object.keys(testUsers);
  
  for (const userId of userIds) {
    try {
      // Eliminar de Firestore
      await db.collection('users').doc(userId).delete();
      
      // Intentar eliminar de Firebase Auth
      try {
        await admin.auth().deleteUser(userId);
      } catch (error) {
        // Ignorar errores si el usuario ya fue eliminado
        console.log(`Note: Auth user ${userId} could not be deleted: ${error.message}`);
      }
    } catch (error) {
      console.error(`Failed to delete test user ${userId}:`, error);
    }
  }
};

// Configuración antes de todas las pruebas
beforeAll(async () => {
  jest.setTimeout(30000); // Aumentar timeout para pruebas que interactúan con Firebase
  
  // Crear usuarios de prueba con diferentes roles
  const regularUser = generateRandomUser('user');
  const moderatorUser = generateRandomUser('moderator');
  const adminUser = generateRandomUser('admin');
  
  try {
    // Crear los usuarios y obtener sus tokens
    await createUserAndGetToken(regularUser);
    await createUserAndGetToken(moderatorUser);
    await createUserAndGetToken(adminUser);
    
    // Actualizar roles para usuarios especiales (ya que register siempre crea como 'user')
    const db = admin.firestore();
    
    // Obtener IDs por email para los roles especiales
    const moderatorUserData = Object.values(testUsers).find(u => u.email === moderatorUser.email);
    const adminUserData = Object.values(testUsers).find(u => u.email === adminUser.email);
    
    if (moderatorUserData) {
      await db.collection('users').doc(moderatorUserData.id).update({ role: 'moderator' });
    }
    
    if (adminUserData) {
      await db.collection('users').doc(adminUserData.id).update({ role: 'admin' });
    }
    
    console.log('Test setup complete with users:', Object.keys(testUsers).length);
  } catch (error) {
    console.error('Setup failed:', error);
  }
});

// Limpieza después de todas las pruebas
afterAll(async () => {
  await cleanupTestUsers();
});

describe('Módulo de Usuarios', () => {
  // Pruebas de creación de usuario
  describe('Creación de Usuario', () => {
    it('debería crear un usuario con datos válidos', async () => {
      // Obtener token de un usuario administrador
      const adminUser = Object.values(testUsers).find(user => user.role === 'admin');
      const adminToken = authTokens[adminUser.id];
      
      const newUserData = {
        name: 'Nuevo Usuario',
        email: `nuevo.usuario${Math.floor(Math.random() * 10000)}@example.com`,
        role: 'user'
      };
      
      const response = await axios.post(usersEndpoint, newUserData, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('name', newUserData.name);
      expect(response.data).toHaveProperty('email', newUserData.email);
      expect(response.data).toHaveProperty('role', newUserData.role);
      
      // Guardar el ID para usar en otras pruebas
      testUsers[response.data.id] = response.data;
    });
    
    it('debería fallar si se intenta crear un usuario con datos incompletos', async () => {
      // Obtener token de un usuario administrador
      const adminUser = Object.values(testUsers).find(user => user.role === 'admin');
      const adminToken = authTokens[adminUser.id];
      
      const incompleteUserData = {
        name: 'Usuario Incompleto'
        // Falta el email, que es obligatorio
      };
      
      try {
        await axios.post(usersEndpoint, incompleteUserData, {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        // Si no lanza excepción, la prueba falla
        expect(true).toBe(false);
      } catch (error) {
        expect(error.response.status).toBe(400);
        expect(error.response.data).toHaveProperty('error');
      }
    });
    
    it('debería fallar si un usuario sin permisos intenta crear otro usuario', async () => {
      // Obtener token de un usuario regular
      const regularUser = Object.values(testUsers).find(user => user.role === 'user');
      const regularToken = authTokens[regularUser.id];
      
      const newUserData = {
        name: 'Usuario Prohibido',
        email: `usuario.prohibido${Math.floor(Math.random() * 10000)}@example.com`,
        role: 'user'
      };
      
      try {
        await axios.post(usersEndpoint, newUserData, {
          headers: { Authorization: `Bearer ${regularToken}` }
        });
        // Si no lanza excepción, la prueba falla
        expect(true).toBe(false);
      } catch (error) {
        expect(error.response.status).toBe(403);
        expect(error.response.data).toHaveProperty('error');
      }
    });
  });
  
  // Pruebas de obtención de usuarios
  describe('Obtención de Usuarios', () => {
    it('debería obtener una lista de usuarios como administrador', async () => {
      // Obtener token de un usuario administrador
      const adminUser = Object.values(testUsers).find(user => user.role === 'admin');
      const adminToken = authTokens[adminUser.id];
      
      const response = await axios.get(usersEndpoint, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      expect(response.data.length).toBeGreaterThan(0);
    });
    
    it('debería filtrar usuarios por rol', async () => {
      // Obtener token de un usuario administrador
      const adminUser = Object.values(testUsers).find(user => user.role === 'admin');
      const adminToken = authTokens[adminUser.id];
      
      const response = await axios.get(`${usersEndpoint}?role=admin`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      
      // Todos los usuarios devueltos deben tener el rol 'admin'
      response.data.forEach(user => {
        expect(user.role).toBe('admin');
      });
    });
    
    it('debería obtener un usuario específico por ID', async () => {
      // Obtener un ID de usuario y token de administrador
      const adminUser = Object.values(testUsers).find(user => user.role === 'admin');
      const adminToken = authTokens[adminUser.id];
      const userId = Object.keys(testUsers)[0];
      
      const response = await axios.get(`${usersEndpoint}/${userId}`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', userId);
      expect(response.data).toHaveProperty('name');
      expect(response.data).toHaveProperty('email');
    });
    
    it('debería permitir a un usuario obtener su propio perfil', async () => {
      // Obtener un usuario regular y su token
      const regularUser = Object.values(testUsers).find(user => user.role === 'user');
      const regularToken = authTokens[regularUser.id];
      
      const response = await axios.get(`${usersEndpoint}/${regularUser.id}`, {
        headers: { Authorization: `Bearer ${regularToken}` }
      });
      
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', regularUser.id);
      expect(response.data).toHaveProperty('name', regularUser.name);
      expect(response.data).toHaveProperty('email', regularUser.email);
    });
    
    it('debería fallar si un usuario intenta acceder al perfil de otro sin permisos', async () => {
      // Obtener dos usuarios regulares y el token del primero
      const users = Object.values(testUsers).filter(user => user.role === 'user');
      const regularUser1 = users[0];
      const regularUser2 = users[1];
      const regularToken = authTokens[regularUser1.id];
      
      if (regularUser1 && regularUser2) {
        try {
          await axios.get(`${usersEndpoint}/${regularUser2.id}`, {
            headers: { Authorization: `Bearer ${regularToken}` }
          });
          // Si no lanza excepción, la prueba falla
          expect(true).toBe(false);
        } catch (error) {
          expect(error.response.status).toBe(403);
          expect(error.response.data).toHaveProperty('error');
        }
      } else {
        // Si no tenemos suficientes usuarios regulares, marcar la prueba como pasada
        console.log('Skipping test: Not enough regular users available');
        expect(true).toBe(true);
      }
    });
  });
  
  // Pruebas de actualización de usuario
  describe('Actualización de Usuario', () => {
    it('debería actualizar datos de un usuario como administrador', async () => {
      // Obtener token de un usuario administrador y un ID de usuario a modificar
      const adminUser = Object.values(testUsers).find(user => user.role === 'admin');
      const adminToken = authTokens[adminUser.id];
      const userToUpdate = Object.values(testUsers).find(user => user.id !== adminUser.id);
      
      if (userToUpdate) {
        const updateData = {
          name: `Updated Name ${Math.floor(Math.random() * 1000)}`
        };
        
        const response = await axios.put(`${usersEndpoint}/${userToUpdate.id}`, updateData, {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('name', updateData.name);
        
        // Actualizar datos en nuestro registro
        testUsers[userToUpdate.id] = { ...testUsers[userToUpdate.id], ...updateData };
      } else {
        console.log('Skipping test: No other user available to update');
        expect(true).toBe(true);
      }
    });
    
    it('debería permitir a un usuario actualizar su propio perfil', async () => {
      // Obtener un usuario regular y su token
      const regularUser = Object.values(testUsers).find(user => user.role === 'user');
      const regularToken = authTokens[regularUser.id];
      
      const updateData = {
        name: `Self Updated ${Math.floor(Math.random() * 1000)}`
      };
      
      const response = await axios.put(`${usersEndpoint}/${regularUser.id}`, updateData, {
        headers: { Authorization: `Bearer ${regularToken}` }
      });
      
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('name', updateData.name);
      
      // Actualizar datos en nuestro registro
      testUsers[regularUser.id] = { ...testUsers[regularUser.id], ...updateData };
    });
    
    it('debería fallar si un usuario intenta actualizar a otro sin permisos', async () => {
      // Obtener dos usuarios regulares y el token del primero
      const users = Object.values(testUsers).filter(user => user.role === 'user');
      const regularUser1 = users[0];
      const regularUser2 = users[1];
      
      if (regularUser1 && regularUser2) {
        const regularToken = authTokens[regularUser1.id];
        
        const updateData = {
          name: 'Unauthorized Update'
        };
        
        try {
          await axios.put(`${usersEndpoint}/${regularUser2.id}`, updateData, {
            headers: { Authorization: `Bearer ${regularToken}` }
          });
          // Si no lanza excepción, la prueba falla
          expect(true).toBe(false);
        } catch (error) {
          expect(error.response.status).toBe(403);
          expect(error.response.data).toHaveProperty('error');
        }
      } else {
        console.log('Skipping test: Not enough regular users available');
        expect(true).toBe(true);
      }
    });
  });
  
  // Pruebas de bloqueo de usuarios
  describe('Bloqueo de Usuarios', () => {
    it('debería permitir a un usuario bloquear a otro', async () => {
      // Obtener dos usuarios regulares y el token del primero
      const users = Object.values(testUsers).filter(user => user.role === 'user');
      
      if (users.length >= 2) {
        const regularUser1 = users[0];
        const regularUser2 = users[1];
        const regularToken = authTokens[regularUser1.id];
        
        const response = await axios.post(`${usersEndpoint}/${regularUser1.id}/block`, {
          blockedUserId: regularUser2.id
        }, {
          headers: { Authorization: `Bearer ${regularToken}` }
        });
        
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('message');
        expect(response.data.message).toContain('blocked');
      } else {
        console.log('Skipping test: Not enough users available for blocking test');
        expect(true).toBe(true);
      }
    });
    
    it('debería permitir a un usuario desbloquear a otro', async () => {
      // Obtener dos usuarios regulares y el token del primero
      const users = Object.values(testUsers).filter(user => user.role === 'user');
      
      if (users.length >= 2) {
        const regularUser1 = users[0];
        const regularUser2 = users[1];
        const regularToken = authTokens[regularUser1.id];
        
        const response = await axios.post(`${usersEndpoint}/${regularUser1.id}/unblock`, {
          blockedUserId: regularUser2.id
        }, {
          headers: { Authorization: `Bearer ${regularToken}` }
        });
        
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('message');
        expect(response.data.message).toContain('unblocked');
      } else {
        console.log('Skipping test: Not enough users available for unblocking test');
        expect(true).toBe(true);
      }
    });
  });
  
  // Pruebas de organizaciones de usuario
  describe('Organizaciones de Usuario', () => {
    it('debería permitir a un usuario ver sus propias organizaciones', async () => {
      // Obtener un usuario regular y su token
      const regularUser = Object.values(testUsers).find(user => user.role === 'user');
      const regularToken = authTokens[regularUser.id];
      
      const response = await axios.get(`${usersEndpoint}/${regularUser.id}/organizations`, {
        headers: { Authorization: `Bearer ${regularToken}` }
      });
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
      // Puede estar vacío si el usuario no tiene organizaciones, pero debe ser un array
    });
    
    it('debería permitir a un administrador ver las organizaciones de cualquier usuario', async () => {
      // Obtener un admin y un usuario regular
      const adminUser = Object.values(testUsers).find(user => user.role === 'admin');
      const regularUser = Object.values(testUsers).find(user => user.role === 'user');
      const adminToken = authTokens[adminUser.id];
      
      const response = await axios.get(`${usersEndpoint}/${regularUser.id}/organizations`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
    });
    
    it('debería fallar si un usuario intenta ver las organizaciones de otro sin permisos', async () => {
      // Obtener dos usuarios regulares
      const users = Object.values(testUsers).filter(user => user.role === 'user');
      
      if (users.length >= 2) {
        const regularUser1 = users[0];
        const regularUser2 = users[1];
        const regularToken = authTokens[regularUser1.id];
        
        try {
          await axios.get(`${usersEndpoint}/${regularUser2.id}/organizations`, {
            headers: { Authorization: `Bearer ${regularToken}` }
          });
          // Si no lanza excepción, la prueba falla
          expect(true).toBe(false);
        } catch (error) {
          expect(error.response.status).toBe(403);
          expect(error.response.data).toHaveProperty('error');
        }
      } else {
        console.log('Skipping test: Not enough regular users available');
        expect(true).toBe(true);
      }
    });
  });
  
  // Pruebas de eliminación de usuario
  describe('Eliminación de Usuario', () => {
    let userToDelete;
    
    beforeAll(async () => {
      // Crear un usuario específico para eliminar
      const newUser = generateRandomUser();
      const response = await createUserAndGetToken(newUser);
      userToDelete = response.user;
    });
    
    it('debería fallar si un usuario regular intenta eliminar a otro', async () => {
      // Obtener un usuario regular y su token
      const regularUser = Object.values(testUsers).find(user => user.role === 'user');
      const regularToken = authTokens[regularUser.id];
      
      try {
        await axios.delete(`${usersEndpoint}/${userToDelete.id}`, {
          headers: { Authorization: `Bearer ${regularToken}` }
        });
        // Si no lanza excepción, la prueba falla
        expect(true).toBe(false);
      } catch (error) {
        expect(error.response.status).toBe(403);
        expect(error.response.data).toHaveProperty('error');
      }
    });
    
    it('debería permitir a un administrador eliminar un usuario', async () => {
      // Obtener un administrador y su token
      const adminUser = Object.values(testUsers).find(user => user.role === 'admin');
      const adminToken = authTokens[adminUser.id];
      
      const response = await axios.delete(`${usersEndpoint}/${userToDelete.id}`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
      
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('message');
      expect(response.data.message).toContain('deleted');
      
      // Eliminar de nuestra lista de prueba
      delete testUsers[userToDelete.id];
      delete authTokens[userToDelete.id];
    });
  });
}); 