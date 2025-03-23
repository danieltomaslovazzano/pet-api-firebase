/* models/conversationModel.js */
const admin = require('../config/firebase');
const db = admin.firestore();
const conversationsCollection = db.collection('conversations');

// Crear una nueva conversación
exports.createConversation = async (conversationData, callback) => {
  try {
    const newConversation = {
      participants: conversationData.participants,  // Array de user IDs
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      deletedBy: [],   // IDs de usuarios que hayan hecho "soft delete"
      hiddenBy: [],    // IDs de usuarios que hayan ocultado la conversación
      blockedBy: []    // IDs de usuarios que hayan bloqueado la conversación
    };
    const docRef = await conversationsCollection.add(newConversation);
    const doc = await docRef.get();
    callback(null, { id: docRef.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};

// Obtener una conversación por su ID
exports.getConversationById = async (id, callback) => {
  try {
    const doc = await conversationsCollection.doc(id).get();
    if (!doc.exists) {
      return callback(new Error('Conversation not found'));
    }
    callback(null, { id: doc.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};

// Obtener todas las conversaciones en las que participa un usuario (omitiendo las que haya eliminado)
exports.getConversationsForUser = async (userId, callback) => {
  try {
    const snapshot = await conversationsCollection
      .where('participants', 'array-contains', userId)
      .get();
    const conversations = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.deletedBy && data.deletedBy.includes(userId)) {
        // Si el usuario eliminó la conversación, la omitimos
      } else {
        conversations.push({ id: doc.id, ...data });
      }
    });
    callback(null, conversations);
  } catch (error) {
    callback(error);
  }
};

// Soft delete: marca la conversación como eliminada para un usuario (añade el userId a deletedBy)
exports.softDeleteConversation = async (conversationId, userId, callback) => {
  try {
    const convRef = conversationsCollection.doc(conversationId);
    await convRef.update({
      deletedBy: admin.firestore.FieldValue.arrayUnion(userId),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    callback(null, { message: 'Conversation soft-deleted for user', conversationId, userId });
  } catch (error) {
    callback(error);
  }
};

// Permanent deletion: elimina la conversación (para admin)
exports.permanentDeleteConversation = async (conversationId, callback) => {
  try {
    await conversationsCollection.doc(conversationId).delete();
    callback(null, { message: 'Conversation permanently deleted', conversationId });
  } catch (error) {
    callback(error);
  }
};

// Hide conversation (archive): agrega el userId a hiddenBy
exports.hideConversation = async (conversationId, userId, callback) => {
  try {
    const convRef = conversationsCollection.doc(conversationId);
    await convRef.update({
      hiddenBy: admin.firestore.FieldValue.arrayUnion(userId),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    callback(null, { message: 'Conversation hidden for user', conversationId, userId });
  } catch (error) {
    callback(error);
  }
};

// Unhide conversation: remueve el userId de hiddenBy
exports.unhideConversation = async (conversationId, userId, callback) => {
  try {
    const convRef = conversationsCollection.doc(conversationId);
    await convRef.update({
      hiddenBy: admin.firestore.FieldValue.arrayRemove(userId),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    callback(null, { message: 'Conversation unhidden for user', conversationId, userId });
  } catch (error) {
    callback(error);
  }
};

// Block conversation: agrega el userId a blockedBy
exports.blockConversation = async (conversationId, userId, callback) => {
  try {
    const convRef = conversationsCollection.doc(conversationId);
    await convRef.update({
      blockedBy: admin.firestore.FieldValue.arrayUnion(userId),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    callback(null, { message: 'Conversation blocked for user', conversationId, userId });
  } catch (error) {
    callback(error);
  }
};

// Unblock conversation: remueve el userId de blockedBy
exports.unblockConversation = async (conversationId, userId, callback) => {
  try {
    const convRef = conversationsCollection.doc(conversationId);
    await convRef.update({
      blockedBy: admin.firestore.FieldValue.arrayRemove(userId),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    callback(null, { message: 'Conversation unblocked for user', conversationId, userId });
  } catch (error) {
    callback(error);
  }
};
