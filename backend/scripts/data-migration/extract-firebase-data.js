/**
 * Firebase Data Extraction Script
 * 
 * This script extracts data from Firebase Firestore collections
 * and saves it to JSON files for further processing.
 */

// Load environment variables
require('dotenv').config({ path: '../../.env' });

const admin = require('../../config/firebase');
const fs = require('fs');
const path = require('path');

// Firestore instance
const db = admin.firestore();

// Directory to save the extracted data
const outputDir = path.join(__dirname, 'extracted-data');

// Collections to extract
const collections = [
  'users',
  'pets',
  'organizations',
  'memberships',
  'conversations',
  'messages'
];

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

/**
 * Extract data from a Firestore collection
 * @param {string} collectionName - Name of the collection
 * @returns {Promise<Array>} - Array of documents
 */
async function extractCollection(collectionName) {
  try {
    console.log(`Extracting collection: ${collectionName}`);
    
    const snapshot = await db.collection(collectionName).get();
    const data = [];
    
    snapshot.forEach(doc => {
      // Include document ID and data
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    // Save to file
    const outputPath = path.join(outputDir, `${collectionName}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    
    console.log(`Extracted ${data.length} documents from ${collectionName}`);
    console.log(`Saved to: ${outputPath}`);
    
    return data;
  } catch (error) {
    console.error(`Error extracting collection ${collectionName}:`, error);
    throw error;
  }
}

/**
 * Main function to extract all collections
 */
async function extractAllCollections() {
  try {
    console.log('Starting Firebase data extraction...');
    
    const results = {};
    
    // Extract each collection sequentially
    for (const collection of collections) {
      results[collection] = await extractCollection(collection);
    }
    
    // Save a summary file
    const summaryPath = path.join(outputDir, 'extraction-summary.json');
    const summary = Object.keys(results).reduce((acc, key) => {
      acc[key] = results[key].length;
      return acc;
    }, {});
    
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    console.log(`Extraction summary saved to: ${summaryPath}`);
    
    console.log('Firebase data extraction completed successfully!');
    return results;
  } catch (error) {
    console.error('Error extracting Firebase data:', error);
    process.exit(1);
  }
}

// Run the extraction if this file is executed directly
if (require.main === module) {
  extractAllCollections()
    .then(() => {
      console.log('Extraction process completed.');
      process.exit(0);
    })
    .catch(error => {
      console.error('Extraction process failed:', error);
      process.exit(1);
    });
} else {
  // Export the function for use in other scripts
  module.exports = {
    extractAllCollections,
    extractCollection
  };
} 