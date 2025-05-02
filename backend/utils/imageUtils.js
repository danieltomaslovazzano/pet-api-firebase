// utils/imageUtils.js
const sharp = require('sharp');

/**
 * Compress an image buffer using Sharp.
 *
 * @param {Buffer} imageBuffer - The raw image data.
 * @param {number} width - Maximum width for the compressed image.
 * @param {number} height - Maximum height for the compressed image.
 * @param {number} quality - JPEG quality (0-100).
 * @param {string} format - Output format (jpeg, png, webp, etc.). Defaults to jpeg.
 * @returns {Promise<Buffer>} - A promise that resolves with the compressed image buffer.
 */
async function compressImage(imageBuffer, width = 800, height = 800, quality = 70, format = 'jpeg') {
  try {
    // Validate input buffer
    if (!imageBuffer || !Buffer.isBuffer(imageBuffer) || imageBuffer.length === 0) {
      throw new Error('Invalid or empty image buffer provided');
    }
    
    console.log(`Compressing image: ${width}x${height}, quality: ${quality}, format: ${format}`);
    
    // Create a sharp instance with the input buffer
    const sharpInstance = sharp(imageBuffer, { failOnError: false });
    
    // Get image metadata to better understand the input
    const metadata = await sharpInstance.metadata();
    console.log(`Processing image: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);
    
    // Set up the processing pipeline
    let pipeline = sharpInstance.resize({ 
      width, 
      height, 
      fit: 'inside',
      withoutEnlargement: true
    });
    
    // Apply format-specific options
    let outputBuffer;
    if (format === 'png') {
      outputBuffer = await pipeline.png({ compressionLevel: 9 }).toBuffer();
    } else if (format === 'webp') {
      outputBuffer = await pipeline.webp({ quality }).toBuffer();
    } else if (format === 'gif') {
      outputBuffer = await pipeline.gif().toBuffer();
    } else {
      // Default to JPEG
      outputBuffer = await pipeline.jpeg({ quality }).toBuffer();
    }
    
    console.log(`Compression complete: ${outputBuffer.length} bytes`);
    return outputBuffer;
  } catch (error) {
    console.error('Image compression error:', error);
    throw new Error('Image compression failed: ' + error.message);
  }
}

module.exports = { compressImage };
