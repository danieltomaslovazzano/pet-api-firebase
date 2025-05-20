const axios = require('axios');
const { compressImage } = require('../utils/imageUtils');
const { uploadImageToStorage } = require('../utils/storageUtils');

const IMAGE_URL = 'https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg';

async function main() {
  try {
    console.log('[SCRIPT] Descargando imagen:', IMAGE_URL);
    const response = await axios.get(IMAGE_URL, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];
    console.log('[SCRIPT] Content-Type:', contentType);
    const imageBuffer = Buffer.from(response.data, 'binary');
    console.log('[SCRIPT] Buffer length:', imageBuffer.length);

    // Comprimir la imagen
    const compressedBuffer = await compressImage(imageBuffer, 800, 800, 70, 'jpeg');
    console.log('[SCRIPT] Buffer comprimido:', compressedBuffer.length);

    // Subir a GCS
    const fileName = `test-upload-from-url-${Date.now()}.jpg`;
    const url = await uploadImageToStorage(fileName, compressedBuffer, 'image/jpeg');
    console.log('[SCRIPT] URL subida:', url);
  } catch (err) {
    console.error('[SCRIPT] Error:', err);
  }
}

main(); 