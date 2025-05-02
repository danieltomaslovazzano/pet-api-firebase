// utils/storageUtils.js
const admin = require('../config/firebase');

/**
 * Uploads an image buffer to Firebase Storage
 * @param {Buffer} fileBuffer - The processed image buffer to upload
 * @param {string} destinationFileName - The filename to use in Firebase Storage
 * @returns {Promise<string>} - A promise that resolves with the public URL of the uploaded image
 */
async function uploadImageToStorage(fileBuffer, destinationFileName) {
  try {
    console.log(`Starting upload to Firebase Storage: ${destinationFileName}`);
    
    // Ensure we have a valid file buffer
    if (!fileBuffer || !Buffer.isBuffer(fileBuffer) || fileBuffer.length === 0) {
      throw new Error('Invalid file buffer provided for upload');
    }
    
    // Validate destination filename
    if (!destinationFileName || typeof destinationFileName !== 'string') {
      destinationFileName = `fallback_${Date.now()}.jpg`;
      console.warn(`Invalid destination filename, using fallback: ${destinationFileName}`);
    }

    // Get the default bucket (configured in Firebase Admin initialization)
    const bucket = admin.storage().bucket();
    if (!bucket) {
      throw new Error('Firebase Storage bucket not initialized');
    }
    
    // Create reference to the destination file
    const file = bucket.file(`pets/${destinationFileName}`);
    console.log(`Created reference to file: pets/${destinationFileName}`);

    // Upload the file buffer with metadata
    const uploadOptions = {
      metadata: {
        contentType: destinationFileName.endsWith('.png') ? 'image/png' : 
                     destinationFileName.endsWith('.gif') ? 'image/gif' :
                     destinationFileName.endsWith('.webp') ? 'image/webp' : 'image/jpeg',
      },
      resumable: false,
    };
    
    console.log(`Uploading file with content type: ${uploadOptions.metadata.contentType}`);
    
    // Perform the upload
    await file.save(fileBuffer, uploadOptions);
    console.log('File uploaded successfully');

    // Make the file public
    await file.makePublic();
    console.log('File made public');

    // Return the public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
    console.log(`Generated public URL: ${publicUrl}`);
    return publicUrl;
  } catch (error) {
    console.error('Storage upload error:', error);
    throw new Error('Error uploading image: ' + error.message);
  }
}

module.exports = { uploadImageToStorage };
