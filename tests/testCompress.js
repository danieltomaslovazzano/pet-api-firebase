const fs = require('fs');
const { compressImage } = require('../utils/imageUtils');

async function test() {
  try {
    // Read a sample image file from disk (ensure you have an image file in your project)
    const inputBuffer = fs.readFileSync('../sample/sample.jpg');
    const compressedBuffer = await compressImage(inputBuffer, 800, 800, 70);
    
    // Write the compressed image to disk for inspection
    fs.writeFileSync('../sample/compressed-image.jpg', compressedBuffer);
    console.log('Image compressed and saved successfully.');
  } catch (error) {
    console.error('Error compressing image:', error);
  }
}

test();
