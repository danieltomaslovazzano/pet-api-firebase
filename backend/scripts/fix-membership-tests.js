#!/usr/bin/env node

/**
 * Script to fix membership test files by adding PostgreSQL user handling
 * 
 * This script:
 * 1. Finds all E2E test files that create memberships
 * 2. Adds ensureUserInPostgreSQL import if missing
 * 3. Updates membership creation to use PostgreSQL user IDs
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const E2E_TESTS_DIR = path.join(__dirname, '../tests/e2e');

// Files to fix (found from previous grep search)
const MEMBERSHIP_TEST_FILES = [
  'tests/e2e/messages/message-creation.e2e.js',
  'tests/e2e/pets/pet-permissions.e2e.js',
  'tests/e2e/messages/message-admin.e2e.js',
  'tests/e2e/legacy/messages.e2e.js',
  'tests/e2e/legacy/conversations.e2e.js',
  'tests/e2e/messages/message-management.e2e.js',
  'tests/e2e/messages/message-edge-cases.e2e.js',
  'tests/e2e/legacy/memberships.e2e.js',
  'tests/e2e/pets/pet-creation.e2e.js',
  'tests/e2e/pets/pet-visibility.e2e.js',
  'tests/e2e/messages/message-retrieval.e2e.js',
  'tests/e2e/memberships/membership-invitations.e2e.js',
  'tests/e2e/conversations/conversation-retrieval.e2e.js',
  'tests/e2e/organization-types/organization-types-integration.e2e.js',
  'tests/e2e/conversations/conversation-edge-cases.e2e.js',
  'tests/e2e/conversations/conversation-admin.e2e.js',
  'tests/e2e/memberships/membership-removal.e2e.js',
  'tests/e2e/messages/message-multitenancy.e2e.js',
  'tests/e2e/conversations/conversation-creation.e2e.js',
  'tests/e2e/memberships/membership-retrieval.e2e.js',
  'tests/e2e/memberships/membership-access-control.e2e.js'
];

function fixImportStatement(content) {
  // Check if ensureUserInPostgreSQL is already imported
  if (content.includes('ensureUserInPostgreSQL')) {
    console.log('  ✓ ensureUserInPostgreSQL already imported');
    return content;
  }

  // Find the auth import line and add ensureUserInPostgreSQL
  const authImportRegex = /const\s*{\s*([^}]+)\s*}\s*=\s*require\(['"]\.\.\/helpers\/auth['"]\);/;
  const match = content.match(authImportRegex);
  
  if (match) {
    const existingImports = match[1];
    const newImports = existingImports.includes('ensureUserInPostgreSQL') 
      ? existingImports 
      : existingImports + ', ensureUserInPostgreSQL';
    
    const newImportLine = `const { ${newImports} } = require('../helpers/auth');`;
    content = content.replace(authImportRegex, newImportLine);
    console.log('  ✓ Added ensureUserInPostgreSQL to imports');
  } else {
    console.log('  ⚠️ Could not find auth import line to modify');
  }

  return content;
}

function addPostgreSQLUserFix(content) {
  // This is a more complex transformation that would need to be done manually
  // for each file based on its specific structure. For now, we'll just add the import.
  console.log('  ℹ️ Manual fix needed: Add PostgreSQL user handling before membership creation');
  return content;
}

function fixFile(filePath) {
  console.log(`\n🔧 Fixing: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.log('  ❌ File does not exist');
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Fix import statement
  content = fixImportStatement(content);

  // Add PostgreSQL user fix (would need manual implementation per file)
  content = addPostgreSQLUserFix(content);

  // Write back if changed
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('  ✅ File updated');
  } else {
    console.log('  ℹ️ No changes needed');
  }
}

function main() {
  console.log('🚀 Starting membership test fixes...\n');
  
  MEMBERSHIP_TEST_FILES.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    fixFile(fullPath);
  });

  console.log('\n✅ Import fixes completed!');
  console.log('\n📝 Manual steps needed:');
  console.log('1. For each file, add PostgreSQL user handling before membership creation:');
  console.log('   const pgUser = await ensureUserInPostgreSQL(user);');
  console.log('2. Update membership creation to use pgUser.id instead of user.id');
  console.log('3. Test each file individually to verify the fix works');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixImportStatement, addPostgreSQLUserFix }; 