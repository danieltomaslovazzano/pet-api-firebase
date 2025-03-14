// utils/imageUtils.js
const sharp = require('sharp');

/**
 * Compress an image buffer using Sharp.
 *
 * @param {Buffer} imageBuffer - The raw image data.
 * @param {number} width - Maximum width for the compressed image.
 * @param {number} height - Maximum height for the compressed image.
 * @param {number} quality - JPEG quality (0-100).
 * @returns {Promise<Buffer>} - A promise that resolves with the compressed image buffer.
 */
async function compressImage(imageBuffer, width = 800, height = 800, quality = 70) {
  try {
    const compressedBuffer = await sharp(imageBuffer)
      .resize({ width, height, fit: 'inside' })
      .jpeg({ quality: quality })
      .toBuffer();
    return compressedBuffer;
  } catch (error) {
    throw new Error('Image compression failed: ' + error.message);
  }
}

module.exports = { compressImage };
