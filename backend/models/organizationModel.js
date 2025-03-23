// models/organizationModel.js
const admin = require('../config/firebase');
const db = admin.firestore();
const organizationsCollection = db.collection('organizations');
const { v4: uuidv4 } = require('uuid');

exports.createOrganization = async (orgData, callback) => {
  try {
    const id = uuidv4();
    orgData.id = id;
    orgData.createdAt = admin.firestore.FieldValue.serverTimestamp();
    orgData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    
    await organizationsCollection.doc(id).set(orgData);
    
    // Crear la primer membresía para el creador como admin
    await db.collection('memberships').add({
      userId: orgData.createdBy,
      organizationId: id,
      role: 'admin',
      permissions: ['all'],
      joinedAt: admin.firestore.FieldValue.serverTimestamp(),
      invitedBy: orgData.createdBy
    });
    
    const doc = await organizationsCollection.doc(id).get();
    callback(null, doc.data());
  } catch (error) {
    callback(error);
  }
};

exports.getOrganizationById = async (id, callback) => {
  try {
    const doc = await organizationsCollection.doc(id).get();
    if (!doc.exists) {
      return callback(new Error('Organization not found'));
    }
    callback(null, { id: doc.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};

exports.updateOrganization = async (id, orgData, callback) => {
  try {
    orgData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    await organizationsCollection.doc(id).update(orgData);
    const doc = await organizationsCollection.doc(id).get();
    callback(null, { id: doc.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};

exports.deleteOrganization = async (id, callback) => {
  try {
    // Primero, eliminar todas las membresías asociadas
    const membershipsSnapshot = await db.collection('memberships')
      .where('organizationId', '==', id)
      .get();
    
    const batch = db.batch();
    membershipsSnapshot.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    // Luego eliminar la organización
    batch.delete(organizationsCollection.doc(id));
    
    await batch.commit();
    callback(null, { message: 'Organization and associated memberships deleted successfully' });
  } catch (error) {
    callback(error);
  }
};

exports.getOrganizationMembers = async (orgId, callback) => {
  try {
    const membershipsSnapshot = await db.collection('memberships')
      .where('organizationId', '==', orgId)
      .get();
    
    if (membershipsSnapshot.empty) {
      return callback(null, []);
    }
    
    // Extraer IDs de usuarios
    const memberIds = membershipsSnapshot.docs.map(doc => ({
      userId: doc.data().userId,
      role: doc.data().role,
      membershipId: doc.id
    }));
    
    // Obtener detalles de cada usuario
    const members = [];
    for (const member of memberIds) {
      const userDoc = await db.collection('users').doc(member.userId).get();
      if (userDoc.exists) {
        members.push({
          ...userDoc.data(),
          id: userDoc.id,
          role: member.role,
          membershipId: member.membershipId
        });
      }
    }
    
    callback(null, members);
  } catch (error) {
    callback(error);
  }
};