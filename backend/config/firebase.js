// config/firebase.js
const admin = require('firebase-admin');
const path = require('path');

// Determinar la ruta del service account
const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
let serviceAccount = undefined;
if (serviceAccountPath) {
  try {
    serviceAccount = require(path.resolve(serviceAccountPath));
    console.log('[Firebase] Usando credenciales:', serviceAccountPath);
    console.log('[Firebase] Tipo:', serviceAccount.type, 'Email:', serviceAccount.client_email);
  } catch (err) {
    console.error('[Firebase] Error cargando credenciales:', err);
  }
} else {
  console.warn('[Firebase] No se encontró ruta de credenciales en variables de entorno');
}

const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
console.log('[Firebase] Bucket configurado:', storageBucket);

if (!admin.apps.length) {
admin.initializeApp({
    credential: serviceAccount ? admin.credential.cert(serviceAccount) : admin.credential.applicationDefault(),
    storageBucket
});
}

console.log('Firebase Admin Initialized for project: pet-api-dev-35115');

module.exports = admin;
