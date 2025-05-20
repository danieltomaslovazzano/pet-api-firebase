const fs = require('fs');
const path = require('path');
const { uploadImageToStorage } = require('../utils/storageUtils');

async function main() {
  const buffer = fs.readFileSync(path.join(__dirname, 'test-image.jpg'));
  const url = await uploadImageToStorage('test-upload.jpg', buffer, 'image/jpeg');
  console.log('URL subida:', url);
}

main().catch(console.error);
