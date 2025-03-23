// models/userModel.js
const admin = require('firebase-admin');
const db = admin.firestore();
const usersCollection = db.collection('users');

const userModel = {
  createUser: async (userData, callback) => {
    try {
      // Se asume que el id ya viene del proceso de autenticación (Firebase Auth)
      const id = userData.id;
      userData.createdAt = admin.firestore.FieldValue.serverTimestamp();
      userData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
      
      // Aseguramos que datos sensibles o campos que no aplican no estén presentes
      delete userData.password;
      
      await usersCollection.doc(id).set(userData);
      const doc = await usersCollection.doc(id).get();
      callback(null, doc.data());
    } catch (error) {
      callback(error);
    }
  },

  getUserById: async (userId) => {
    try {
      const userDoc = await db.collection('users').doc(userId).get();
      
      if (!userDoc.exists) {
        return null;
      }
      
      return {
        id: userDoc.id,
        ...userDoc.data()
      };
    } catch (error) {
      console.error('Error getting user from Firestore:', error);
      throw error;
    }
  },

  updateUser: async (id, userData, callback) => {
    try {
      userData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
      await usersCollection.doc(id).update(userData);
      const doc = await usersCollection.doc(id).get();
      callback(null, doc.data());
    } catch (error) {
      callback(error);
    }
  },

  deleteUser: async (id, callback) => {
    try {
      await usersCollection.doc(id).delete();
      callback(null, { message: 'User deleted successfully' });
    } catch (error) {
      callback(error);
    }
  },

  getUsers: async (filters = {}, callback) => {
    try {
      let query = usersCollection;

      // Si filters es una función (estilo callback antiguo), tratarlo como el callback
      if (typeof filters === 'function') {
        callback = filters;
        filters = {};
      }

      // Asegurar que callback es una función
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function');
      }

      // Log para depuración
      console.log('Procesando filtros en el modelo:', filters);

      // Aplicar filtros de manera más eficiente
      if (filters.role && filters.role !== 'all') {
        query = query.where('role', '==', filters.role);
      }

      if (filters.status && filters.status !== 'all') {
        query = query.where('status', '==', filters.status);
      }

      // Obtener todos los usuarios
      const snapshot = await query.get();
      const users = [];
      
      // Procesar y filtrar los resultados en memoria
      snapshot.forEach(doc => {
        const userData = doc.data();
        const user = {
          ...userData,
          id: doc.id
        };

        // Aplicar filtros de búsqueda en memoria
        let includeUser = true;

        // Búsqueda por término general
        if (filters.searchTerm) {
          const searchTerm = filters.searchTerm.toLowerCase();
          const matchesSearch = 
            (user.name?.toLowerCase() || '').includes(searchTerm) ||
            (user.email?.toLowerCase() || '').includes(searchTerm) ||
            (user.phone?.toLowerCase() || '').includes(searchTerm) ||
            user.id.toLowerCase().includes(searchTerm);

          if (!matchesSearch) {
            includeUser = false;
          }
        }

        // Solo agregar el usuario si pasa todos los filtros
        if (includeUser) {
          users.push(user);
        }
      });

      // Log para depuración
      console.log(`Encontrados ${users.length} usuarios que coinciden con los criterios`);

      callback(null, users);
    } catch (error) {
      console.error('Error in getUsers:', error);
      callback(error);
    }
  },

  /* models/userModel.js - Bloquear Conversacion Con Usuario */
  blockUser: async (userId, blockedUserId, callback) => {
    try {
      const userRef = db.collection('users').doc(userId);
      await userRef.update({
        blockedUsers: admin.firestore.FieldValue.arrayUnion(blockedUserId)
      });
      callback(null, { message: `User ${blockedUserId} blocked by ${userId}` });
    } catch (error) {
      callback(error);
    }
  },

  // Función para desbloquear un usuario (remover un userId bloqueado de la lista "blockedUsers")
  unblockUser: async (userId, blockedUserId, callback) => {
    try {
      const userRef = db.collection('users').doc(userId);
      await userRef.update({
        blockedUsers: admin.firestore.FieldValue.arrayRemove(blockedUserId)
      });
      callback(null, { message: `User ${blockedUserId} unblocked by ${userId}` });
    } catch (error) {
      callback(error);
    }
  },

  // Método para obtener las organizaciones de un usuario
  getUserOrganizations: async (userId, callback) => {
    try {
      const membershipsSnapshot = await db.collection('memberships')
        .where('userId', '==', userId)
        .get();
      
      if (membershipsSnapshot.empty) {
        return callback(null, []);
      }
      
      // Extraer IDs de organizaciones
      const orgIds = membershipsSnapshot.docs.map(doc => ({
        organizationId: doc.data().organizationId,
        role: doc.data().role,
        membershipId: doc.id
      }));
      
      // Obtener detalles de cada organización
      const organizations = [];
      for (const org of orgIds) {
        const orgDoc = await db.collection('organizations').doc(org.organizationId).get();
        if (orgDoc.exists) {
          organizations.push({
            ...orgDoc.data(),
            id: orgDoc.id,
            role: org.role,
            membershipId: org.membershipId
          });
        }
      }
      
      callback(null, organizations);
    } catch (error) {
      callback(error);
    }
  },

  // ----- NUEVAS FUNCIONES -----

  // Método para actualizar varios usuarios a la vez
  updateMultipleUsers: async (userIds, updateData, callback) => {
    try {
      const batch = db.batch();
      
      // Preparar actualizaciones en lote
      for (const userId of userIds) {
        const userRef = usersCollection.doc(userId);
        
        // Añadir timestamp de actualización
        const dataToUpdate = {
          ...updateData,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        };
        
        batch.update(userRef, dataToUpdate);
      }
      
      // Ejecutar todas las actualizaciones como una transacción
      await batch.commit();
      
      callback(null, { message: `${userIds.length} usuarios actualizados correctamente` });
    } catch (error) {
      console.error('Error al actualizar múltiples usuarios:', error);
      callback(error);
    }
  },

  // Método para eliminar varios usuarios a la vez
  deleteMultipleUsers: async (userIds, callback) => {
    try {
      const batch = db.batch();
      
      // Preparar eliminaciones en lote
      for (const userId of userIds) {
        const userRef = usersCollection.doc(userId);
        batch.delete(userRef);
      }
      
      // Ejecutar todas las eliminaciones como una transacción
      await batch.commit();
      
      callback(null, { message: `${userIds.length} usuarios eliminados correctamente` });
    } catch (error) {
      console.error('Error al eliminar múltiples usuarios:', error);
      callback(error);
    }
  },

  // Método para gestionar el estado de los usuarios bloqueados por un administrador
  manageBlockedUser: async (adminId, userId, action, callback) => {
    try {
      // Obtener usuario a modificar
      const userDoc = await usersCollection.doc(userId).get();
      
      if (!userDoc.exists) {
        return callback(new Error('Usuario no encontrado'));
      }
      
      // Actualizar el estado de bloqueo administrativo
      const userData = userDoc.data();
      let adminBlockedUsers = userData.adminBlockedUsers || [];
      
      if (action === 'block' && !adminBlockedUsers.includes(adminId)) {
        adminBlockedUsers.push(adminId);
      } else if (action === 'unblock') {
        adminBlockedUsers = adminBlockedUsers.filter(id => id !== adminId);
      }
      
      // Actualizar en Firestore
      await usersCollection.doc(userId).update({
        adminBlockedUsers,
        status: adminBlockedUsers.length > 0 ? 'blocked' : 'active',
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      
      callback(null, { 
        message: `Usuario ${action === 'block' ? 'bloqueado' : 'desbloqueado'} correctamente` 
      });
    } catch (error) {
      console.error(`Error al ${action === 'block' ? 'bloquear' : 'desbloquear'} usuario:`, error);
      callback(error);
    }
  },

  // Método para buscar usuarios por varios criterios, incluyendo teléfono e ID
  searchUsers: async (searchTerm, callback) => {
    try {
      if (!searchTerm) {
        return callback(null, []);
      }
      
      // Normalizar término de búsqueda
      const term = searchTerm.toLowerCase().trim();
      
      // Buscar por nombre
      const nameStartQuery = usersCollection
        .where('name', '>=', term)
        .where('name', '<=', term + '\uf8ff');
      
      // Buscar por email
      const emailStartQuery = usersCollection
        .where('email', '>=', term)
        .where('email', '<=', term + '\uf8ff');
      
      // Buscar por teléfono
      const phoneStartQuery = usersCollection
        .where('phone', '>=', term)
        .where('phone', '<=', term + '\uf8ff');
      
      // Ejecutar todas las consultas paralelamente
      const [nameSnapshot, emailSnapshot, phoneSnapshot] = await Promise.all([
        nameStartQuery.get(),
        emailStartQuery.get(),
        phoneStartQuery.get()
      ]);
      
      // Unir resultados sin duplicados (usando un Map con el ID como clave)
      const usersMap = new Map();
      
      // Función auxiliar para procesar snapshots
      const processSnapshot = (snapshot) => {
        snapshot.forEach(doc => {
          if (!usersMap.has(doc.id)) {
            const userData = doc.data();
            usersMap.set(doc.id, {
              ...userData,
              id: doc.id
            });
          }
        });
      };
      
      processSnapshot(nameSnapshot);
      processSnapshot(emailSnapshot);
      processSnapshot(phoneSnapshot);
      
      // Búsqueda exacta por ID (si coincide exactamente con el término)
      try {
        const idDoc = await usersCollection.doc(term).get();
        if (idDoc.exists && !usersMap.has(term)) {
          const userData = idDoc.data();
          usersMap.set(term, {
            ...userData,
            id: term
          });
        }
      } catch (idError) {
        // Ignorar errores en la búsqueda por ID
        console.log('ID no válido para búsqueda directa, continuando con otros resultados');
      }
      
      // Convertir Map a array de resultados
      const users = Array.from(usersMap.values());
      
      callback(null, users);
    } catch (error) {
      console.error('Error en búsqueda de usuarios:', error);
      callback(error);
    }
  },

  // Método para crear un usuario invitado (con status=invited)
  createInvitedUser: async (userData, callback) => {
    try {
      // Generar un ID temporal si no se proporciona uno
      const id = userData.id || db.collection('users').doc().id;
      
      // Configurar datos del usuario invitado
      const invitedUserData = {
        ...userData,
        status: 'invited',
        invitedAt: admin.firestore.FieldValue.serverTimestamp(),
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      };
      
      // Asegurar que datos sensibles no estén presentes
      delete invitedUserData.password;
      
      // Guardar en Firestore
      await usersCollection.doc(id).set(invitedUserData);
      
      // Recuperar el documento creado
      const doc = await usersCollection.doc(id).get();
      
      callback(null, {
        ...doc.data(),
        id: doc.id
      });
    } catch (error) {
      console.error('Error al crear usuario invitado:', error);
      callback(error);
    }
  }
};

module.exports = userModel;