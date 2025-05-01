const admin = require('firebase-admin');
const serviceAccount = require('../config/pet-api-dev-35115-firebase-adminsdk-fbsvc-a48b0c2ce5.json');

// Initialize Firebase Admin for testing
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

module.exports = admin; 