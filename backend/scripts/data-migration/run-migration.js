/**
 * Firebase to PostgreSQL Data Migration Script
 * 
 * This script orchestrates the complete data migration process:
 * 1. Extract data from Firebase Firestore
 * 2. Transform data to match PostgreSQL schema
 * 3. Import data into PostgreSQL database
 */

// Load environment variables
require('dotenv').config({ path: '../../.env' });

const fs = require('fs');
const path = require('path');
const { extractAllCollections } = require('./extract-firebase-data');
const { transformData } = require('./transform-data');
const { importAllData } = require('./import-to-postgres');

/**
 * Main migration function
 */
async function runMigration() {
  try {
    console.log('=== STARTING FIREBASE TO POSTGRESQL MIGRATION ===');
    console.log('Time:', new Date().toISOString());
    console.log('');
    
    // Step 1: Extract data from Firebase
    console.log('STEP 1: EXTRACTING DATA FROM FIREBASE');
    console.log('------------------------------------');
    const extractionResults = await extractAllCollections();
    console.log('');
    
    // Step 2: Transform data
    console.log('STEP 2: TRANSFORMING DATA');
    console.log('------------------------');
    const transformationResults = await transformData();
    console.log('');
    
    // Step 3: Import data into PostgreSQL
    console.log('STEP 3: IMPORTING DATA INTO POSTGRESQL');
    console.log('------------------------------------');
    const importResults = await importAllData();
    console.log('');
    
    // Generate summary report
    const summary = {
      extraction: extractionResults,
      transformation: transformationResults,
      import: importResults,
      timestamp: new Date().toISOString()
    };
    
    const summaryPath = path.join(__dirname, 'migration-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    console.log('=== MIGRATION COMPLETED SUCCESSFULLY ===');
    console.log('Migration summary saved to:', summaryPath);
    console.log('Time:', new Date().toISOString());
    
    return summary;
  } catch (error) {
    console.error('ERROR DURING MIGRATION PROCESS:', error);
    
    // Save error report
    const errorReport = {
      error: {
        message: error.message,
        stack: error.stack
      },
      timestamp: new Date().toISOString()
    };
    
    const errorPath = path.join(__dirname, 'migration-error.json');
    fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    
    console.error('Error report saved to:', errorPath);
    throw error;
  }
}

// Run the migration if this file is executed directly
if (require.main === module) {
  runMigration()
    .then(() => {
      process.exit(0);
    })
    .catch(() => {
      process.exit(1);
    });
} else {
  // Export the function for use in other scripts
  module.exports = {
    runMigration
  };
} 