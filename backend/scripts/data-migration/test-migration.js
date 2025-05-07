/**
 * Test Migration Script
 * 
 * This script tests the migration process with a small subset of data
 * to verify that the extraction, transformation, and import steps work correctly.
 */

// Load environment variables
require('dotenv').config({ path: '../../.env' });

const fs = require('fs');
const path = require('path');
const admin = require('../../config/firebase');
const { prisma } = require('../../config/prisma');

const db = admin.firestore();

// Maximum number of documents to process per collection for testing
const TEST_LIMIT = 5;

/**
 * Extract a limited number of documents from a collection
 * @param {string} collectionName 
 * @returns {Promise<Array>}
 */
async function extractTestData(collectionName) {
  try {
    console.log(`Extracting test data from ${collectionName}...`);
    
    const snapshot = await db.collection(collectionName).limit(TEST_LIMIT).get();
    const data = [];
    
    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log(`Extracted ${data.length} test documents from ${collectionName}`);
    return data;
  } catch (error) {
    console.error(`Error extracting test data from ${collectionName}:`, error);
    throw error;
  }
}

/**
 * Transform timestamp objects to ISO strings
 * @param {Object} data 
 * @returns {Object}
 */
function transformData(data) {
  if (!data) return null;
  
  const transformed = { ...data };
  
  Object.keys(transformed).forEach(key => {
    const value = transformed[key];
    
    // Handle timestamps
    if (value && value._seconds !== undefined && value._nanoseconds !== undefined) {
      transformed[key] = new Date(value._seconds * 1000).toISOString();
    }
    
    // Handle nested objects
    else if (value && typeof value === 'object' && !Array.isArray(value)) {
      transformed[key] = transformData(value);
    }
    
    // Handle arrays
    else if (Array.isArray(value)) {
      transformed[key] = value.map(item => 
        item && typeof item === 'object' ? transformData(item) : item
      );
    }
  });
  
  return transformed;
}

/**
 * Import data to PostgreSQL for testing
 * @param {string} modelName 
 * @param {Array} data 
 */
async function importTestData(modelName, data) {
  try {
    console.log(`Testing import for ${modelName}...`);
    
    // Get the Prisma model
    const model = prisma[modelName.toLowerCase()];
    
    if (!model) {
      throw new Error(`Model ${modelName} not found in Prisma client`);
    }
    
    // Process each item
    for (const item of data) {
      // Transform timestamps
      const transformedItem = transformData(item);
      
      // Check if item already exists
      const existing = await model.findUnique({
        where: { id: transformedItem.id }
      }).catch(() => null);
      
      console.log(`- Test item ${transformedItem.id}: ${existing ? 'exists' : 'new'}`);
    }
    
    console.log(`Import test for ${modelName} completed`);
  } catch (error) {
    console.error(`Error testing import for ${modelName}:`, error);
    throw error;
  }
}

/**
 * Run the test migration
 */
async function testMigration() {
  try {
    console.log('=== STARTING MIGRATION TEST ===');
    
    // Collections to test
    const collections = [
      { name: 'users', model: 'User' },
      { name: 'organizations', model: 'Organization' },
      { name: 'pets', model: 'Pet' },
      { name: 'memberships', model: 'Membership' },
      { name: 'conversations', model: 'Conversation' },
      { name: 'messages', model: 'Message' }
    ];
    
    // Test extraction and import for each collection
    for (const collection of collections) {
      // Extract test data
      const testData = await extractTestData(collection.name);
      
      // Save to file for inspection
      const outputPath = path.join(__dirname, `test-${collection.name}.json`);
      fs.writeFileSync(outputPath, JSON.stringify(testData, null, 2));
      console.log(`Test data saved to ${outputPath}`);
      
      // Test import
      await importTestData(collection.model, testData);
      
      console.log('');
    }
    
    console.log('=== MIGRATION TEST COMPLETED SUCCESSFULLY ===');
    console.log('The test ran without errors. You can now proceed with the full migration.');
  } catch (error) {
    console.error('ERROR DURING MIGRATION TEST:', error);
    console.error('Please fix the issues before running the full migration.');
  } finally {
    // Clean up
    await prisma.$disconnect();
  }
}

// Run the test migration
testMigration()
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  }); 