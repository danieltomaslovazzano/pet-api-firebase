// models/membershipModel.js
const admin = require('../config/firebase');
const db = admin.firestore();
const membershipsCollection = db.collection('memberships');

// Crear una membresía (invitar a un usuario)
exports.createMembership = async (membershipData, callback) => {
  try {
    // Verificar si ya existe una membresía para ese usuario y organización
    const existingMembership = await membershipsCollection
      .where('userId', '==', membershipData.userId)
      .where('organizationId', '==', membershipData.organizationId)
      .get();
    
    if (!existingMembership.empty) {
      return callback(new Error('User is already a member of this organization'));
    }
    
    // Crear la membresía
    membershipData.joinedAt = admin.firestore.FieldValue.serverTimestamp();
    const docRef = await membershipsCollection.add(membershipData);
    const doc = await docRef.get();
    
    callback(null, { id: doc.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};

// Obtener membresía específica
exports.getMembershipById = async (id, callback) => {
  try {
    const doc = await membershipsCollection.doc(id).get();
    if (!doc.exists) {
      return callback(new Error('Membership not found'));
    }
    callback(null, { id: doc.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};

// Actualizar rol o permisos
exports.updateMembership = async (id, membershipData, callback) => {
  try {
    await membershipsCollection.doc(id).update(membershipData);
    const doc = await membershipsCollection.doc(id).get();
    callback(null, { id: doc.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};

// Eliminar membresía (remover miembro)
exports.deleteMembership = async (id, callback) => {
  try {
    await membershipsCollection.doc(id).delete();
    callback(null, { message: 'Membership successfully deleted' });
  } catch (error) {
    callback(error);
  }
};

// Verificar si un usuario tiene un rol específico en una organización
exports.checkUserRole = async (userId, organizationId, role, callback) => {
  try {
    const snapshot = await membershipsCollection
      .where('userId', '==', userId)
      .where('organizationId', '==', organizationId)
      .get();
    
    if (snapshot.empty) {
      return callback(null, false);
    }
    
    // Si role es null, solo verificamos que el usuario sea miembro
    if (role === null) {
      return callback(null, true);
    }
    
    const membership = snapshot.docs[0].data();
    const hasRole = membership.role === role;
    
    callback(null, hasRole);
  } catch (error) {
    callback(error);
  }
};

// Obtener una membresía específica por usuario y organización
exports.getMembershipByUserAndOrg = async (userId, organizationId, callback) => {
  try {
    const snapshot = await membershipsCollection
      .where('userId', '==', userId)
      .where('organizationId', '==', organizationId)
      .get();
    
    if (snapshot.empty) {
      return callback(null, null);
    }
    
    const doc = snapshot.docs[0];
    callback(null, { id: doc.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};