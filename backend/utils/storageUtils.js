// utils/storageUtils.js
const admin = require('../config/firebase');

async function uploadImageToStorage(fileBuffer, destinationFileName) {
  try {
    // Get the default bucket (configured in Firebase Admin initialization)
    const bucket = admin.storage().bucket();
    const file = bucket.file(`pets/${destinationFileName}`);

    // Upload the file buffer
    await file.save(fileBuffer, {
      metadata: {
        contentType: 'image/jpeg',
      },
      resumable: false,
    });

    // Make the file public (optional) or generate a signed URL
    await file.makePublic(); // or use getSignedUrl for a time-limited URL

    // Return the public URL
    return `https://storage.googleapis.com/${bucket.name}/${file.name}`;
  } catch (error) {
    throw new Error('Error uploading image: ' + error.message);
  }
}

module.exports = { uploadImageToStorage };
