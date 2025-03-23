// updateRole.js
const admin = require('./config/firebase'); // Asegúrate de que la ruta sea correcta

async function convertUserToAdmin(uid) {
  try {
    await admin.auth().setCustomUserClaims(uid, { role: 'admin' });
    console.log(`El usuario ${uid} ahora es admin.`);
  } catch (error) {
    console.error('Error al asignar custom claims:', error);
  }
}

// Reemplaza 'uid-del-usuario' por el UID real del usuario que deseas convertir a admin.
//const uid = 'uid-del-usuario';
const uid = 'ipfuAjBzv7WAGK1ASJ2dlxI0RI73';
convertUserToAdmin(uid);

