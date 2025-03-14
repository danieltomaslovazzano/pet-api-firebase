// models/userModel.js
const admin = require('../config/firebase');
const db = admin.firestore();
const usersCollection = db.collection('users');

exports.createUser = async (userData, callback) => {
  try {
    // Se asume que el id ya viene del proceso de autenticación (Firebase Auth)
    const id = userData.id;
    userData.createdAt = admin.firestore.FieldValue.serverTimestamp();
    userData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    await usersCollection.doc(id).set(userData);
    const doc = await usersCollection.doc(id).get();
    callback(null, doc.data());
  } catch (error) {
    callback(error);
  }
};

exports.getUserById = async (id, callback) => {
  try {
    const doc = await usersCollection.doc(id).get();
    if (!doc.exists) {
      return callback(new Error('User not found'));
    }
    callback(null, doc.data());
  } catch (error) {
    callback(error);
  }
};

exports.updateUser = async (id, userData, callback) => {
  try {
    userData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    await usersCollection.doc(id).update(userData);
    const doc = await usersCollection.doc(id).get();
    callback(null, doc.data());
  } catch (error) {
    callback(error);
  }
};

exports.deleteUser = async (id, callback) => {
  try {
    await usersCollection.doc(id).delete();
    callback(null, { message: 'User deleted successfully' });
  } catch (error) {
    callback(error);
  }
};

/**
 * Obtiene usuarios aplicando filtros opcionales.
 * Los filtros "name" y "email" se procesan como búsquedas por prefijo.
 * @param {Object} filters Objeto con posibles filtros: { name, email, role, ... }
 * @param {Function} callback Función callback(err, users)
 */
exports.getUsers = async (filters, callback) => {
  try {
    let query = usersCollection;

    // Filtro para "name" (búsqueda por prefijo)
    if (filters.name) {
      // Se recomienda que el campo "name" se almacene en minúsculas en cada documento.
      const nameQuery = filters.name.toLowerCase();
      query = query
        .where('name', '>=', nameQuery)
        .where('name', '<=', nameQuery + '\uf8ff');
    }
    
    // Filtro para "email" (búsqueda por prefijo)
    if (filters.email) {
      // Se recomienda que el campo "email" se almacene en minúsculas.
      const emailQuery = filters.email.toLowerCase();
      query = query
        .where('email', '>=', emailQuery)
        .where('email', '<=', emailQuery + '\uf8ff');
    }

    // Filtro para "role" u otros filtros exactos
    if (filters.role) {
      query = query.where('role', '==', filters.role);
    }

    // Puedes agregar más filtros según necesites (por ejemplo, locale, phone, etc.)

    const snapshot = await query.get();
    const users = [];
    snapshot.forEach(doc => {
      users.push(doc.data());
    });
    callback(null, users);
  } catch (error) {
    callback(error);
  }
};

/* models/userModel.js - Bloquear Conversacion Con Usuario */
exports.blockUser = async (userId, blockedUserId, callback) => {
  try {
    const userRef = db.collection('users').doc(userId);
    await userRef.update({
      blockedUsers: admin.firestore.FieldValue.arrayUnion(blockedUserId)
    });
    callback(null, { message: `User ${blockedUserId} blocked by ${userId}` });
  } catch (error) {
    callback(error);
  }
};

// models/userModel.js
// Función para desbloquear un usuario (remover un userId bloqueado de la lista "blockedUsers")
exports.unblockUser = async (userId, blockedUserId, callback) => {
  try {
    const userRef = db.collection('users').doc(userId);
    await userRef.update({
      blockedUsers: admin.firestore.FieldValue.arrayRemove(blockedUserId)
    });
    callback(null, { message: `User ${blockedUserId} unblocked by ${userId}` });
  } catch (error) {
    callback(error);
  }
};


// Función para obtener todos los usuarios
exports.getUsers = async (callback) => {
  try {
    const snapshot = await usersCollection.get();
    const users = [];
    snapshot.forEach(doc => {
      users.push(doc.data());
    });
    callback(null, users);
  } catch (error) {
    callback(error);
  }
};