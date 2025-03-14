// config/firebase.js
const admin = require('firebase-admin');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from the appropriate .env file
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev'
});

// Resolve the path to the service account JSON file
const serviceAccountPath = path.resolve(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
const serviceAccount = require(serviceAccountPath);

// Initialize Firebase Admin SDK, explicitly setting the storage bucket from env variable
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET
});

console.log('Firebase Admin Initialized for project:', process.env.FIREBASE_PROJECT_ID);
module.exports = admin;
