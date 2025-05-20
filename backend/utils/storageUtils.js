// utils/storageUtils.js
const { Storage } = require('@google-cloud/storage');
const path = require('path');

const bucketName = process.env.FIREBASE_STORAGE_BUCKET;
const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

console.log('[StorageUtils] Inicializando Google Cloud Storage con:', credentialsPath, 'Bucket:', bucketName);

const storage = new Storage({
  keyFilename: credentialsPath ? path.resolve(credentialsPath) : undefined,
});
const bucket = storage.bucket(bucketName);

/**
 * Sube un buffer de imagen al bucket y retorna la URL pública
 */
async function uploadImageToStorage(filename, buffer, mimetype) {
  console.log('[DEBUG] uploadImageToStorage params:', {
    filename,
    mimetype,
    bufferType: typeof buffer,
    bufferLength: buffer?.length
  });
  try {
    const file = bucket.file(filename);
    // Normalizar mimetype: image/jpg -> image/jpeg
    let safeMimetype = (typeof mimetype === 'string' && mimetype.startsWith('image/')) ? mimetype : 'image/jpeg';
    if (safeMimetype === 'image/jpg') safeMimetype = 'image/jpeg';
    await file.save(buffer, {
      metadata: { contentType: safeMimetype },
      resumable: false,
      public: true,
    });
    await file.makePublic();
    const publicUrl = `https://storage.googleapis.com/${bucketName}/${filename}`;
    return publicUrl;
  } catch (error) {
    console.error('[DEBUG] Storage upload error:', {
      filename,
      mimetype,
      bufferType: typeof buffer,
      bufferLength: buffer?.length,
      error
    });
    throw new Error('Error uploading image: ' + error.message);
  }
}

module.exports = {
  uploadImageToStorage,
};
