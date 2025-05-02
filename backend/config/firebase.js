// config/firebase.js
const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

// Initialize Firebase Admin SDK with service account
// Use the credential file that exists in the directory
const serviceAccountPath = path.join(__dirname, 'pet-api-dev-35115-firebase-adminsdk-fbsvc-a48b0c2ce5.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

console.log('Firebase Admin Initialized for project:', serviceAccount.project_id);
module.exports = admin;
