// models/messageModel.js
const admin = require('../config/firebase');
const db = admin.firestore();
const messagesCollection = db.collection('messages');

exports.createMessage = async (messageData, callback) => {
  try {
    // Agrega el mensaje a la colección y genera un ID automáticamente
    const docRef = await messagesCollection.add({
      ...messageData,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    const doc = await docRef.get();
    callback(null, { id: docRef.id, ...doc.data() });
  } catch (error) {
    callback(error);
  }
};

exports.getMessagesByConversation = async (conversationId, callback) => {
  try {
    const snapshot = await messagesCollection
      .where('conversationId', '==', conversationId)
      .orderBy('timestamp')
      .get();
    const messages = [];
    snapshot.forEach(doc => {
      messages.push({ id: doc.id, ...doc.data() });
    });
    callback(null, messages);
  } catch (error) {
    callback(error);
  }
};
