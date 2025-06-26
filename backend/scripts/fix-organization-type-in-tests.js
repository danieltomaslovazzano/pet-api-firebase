#!/usr/bin/env node

/**
 * Fix Organization Type in E2E Tests
 * 
 * This script adds the missing "type": "shelter" field to all organization
 * creation calls in E2E test files to fix 401 validation errors.
 */

const fs = require('fs');
const path = require('path');

// Test files that need to be fixed
const testFiles = [
  'tests/e2e/memberships/membership-access-control.e2e.js',
  'tests/e2e/memberships/membership-details.e2e.js',
  'tests/e2e/memberships/membership-removal.e2e.js',
  'tests/e2e/memberships/membership-retrieval.e2e.js',
  'tests/e2e/memberships/membership-invitations.e2e.js',
  'tests/e2e/legacy/conversations.e2e.js',
  'tests/e2e/conversations/conversation-multitenancy.e2e.js',
  'tests/e2e/legacy/messages.e2e.js',
  'tests/e2e/conversations/conversation-edge-cases.e2e.js',
  'tests/e2e/conversations/conversation-creation.e2e.js',
  'tests/e2e/conversations/conversation-admin.e2e.js',
  'tests/e2e/conversations/conversation-retrieval.e2e.js',
  'tests/e2e/conversations/conversation-management.e2e.js',
  'tests/e2e/messages/message-creation.e2e.js',
  'tests/e2e/messages/message-retrieval.e2e.js',
  'tests/e2e/messages/message-admin.e2e.js',
  'tests/e2e/messages/message-management.e2e.js',
  'tests/e2e/messages/message-edge-cases.e2e.js',
  'tests/e2e/messages/message-multitenancy.e2e.js'
];

/**
 * Fix organization creation patterns in a file
 * @param {string} filePath - Path to the test file
 */
function fixOrganizationTypes(filePath) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Look for organization creation patterns and add type field
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      newLines.push(line);
      
      // If we find a phone line in organization creation, check if type exists
      if (line.includes('phone:') && line.includes('+') && 
          i < lines.length - 1 && lines[i + 1].trim() === '}') {
        
        // Check if type already exists in the previous lines
        let hasType = false;
        for (let j = Math.max(0, i - 10); j < i; j++) {
          if (lines[j].includes('type:')) {
            hasType = true;
            break;
          }
        }
        
        if (!hasType) {
          // Add type field before the closing brace
          const indent = lines[i + 1].match(/^\s*/)[0];
          newLines.push(`${indent}  type: 'shelter'`);
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(fullPath, newLines.join('\n'), 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 Fixing Organization Type Fields in E2E Tests\n');
  
  let fixedCount = 0;
  let totalCount = 0;

  testFiles.forEach(filePath => {
    totalCount++;
    if (fixOrganizationTypes(filePath)) {
      fixedCount++;
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalCount}`);
  console.log(`   Files fixed: ${fixedCount}`);
  console.log(`   Files unchanged: ${totalCount - fixedCount}`);

  if (fixedCount > 0) {
    console.log('\n✅ Organization type fields have been added to test files!');
    console.log('   All organization creation calls now include type: "shelter"');
  } else {
    console.log('\n✅ All files already have correct organization type fields!');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixOrganizationTypes }; 