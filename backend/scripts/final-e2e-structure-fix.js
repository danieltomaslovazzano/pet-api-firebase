#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const E2E_DIR = path.join(__dirname, '../tests/e2e');

// Files that need final fixes
const REMAINING_FILES = [
  'memberships.e2e.js',
  'messages.e2e.js', 
  'conversations.e2e.js',
  'organization-types-integration.e2e.js'
];

function fixFile(filePath) {
  const filename = path.basename(filePath);
  console.log(`🔧 Applying final fixes to ${filename}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // 1. Fix organization creation response extraction
  const oldOrgPattern = /(\w+Organization) = (\w+Response)\.data;/g;
  if (content.match(oldOrgPattern)) {
    content = content.replace(oldOrgPattern, '$1 = $2.data.data;');
    updated = true;
    console.log(`  ✅ Fixed organization creation response extraction`);
  }

  // 2. Fix test organization assignment
  const testOrgPattern = /testOrganization = (\w+)\.data;/g;
  if (content.match(testOrgPattern)) {
    content = content.replace(testOrgPattern, 'testOrganization = $1.data.data;');
    updated = true;
    console.log(`  ✅ Fixed testOrganization assignment`);
  }

  // 3. Fix organization arrays for cleanup
  const pushOrgPattern = /testOrganizations\.push\((\w+)\.data\);/g;
  if (content.match(pushOrgPattern)) {
    content = content.replace(pushOrgPattern, 'testOrganizations.push($1.data.data);');
    updated = true;
    console.log(`  ✅ Fixed organization cleanup arrays`);
  }

  // 4. Fix membership creation response extraction
  const membershipPattern = /(\w+Membership) = (\w+)\.data;/g;
  if (content.match(membershipPattern)) {
    content = content.replace(membershipPattern, '$1 = $2.data.data;');
    updated = true;
    console.log(`  ✅ Fixed membership response extraction`);
  }

  // 5. Fix user creation response extraction
  const userCreationPattern = /(\w+User) = (\w+)\.data;/g;
  if (content.match(userCreationPattern)) {
    content = content.replace(userCreationPattern, '$1 = $2.data.data;');
    updated = true;
    console.log(`  ✅ Fixed user creation response extraction`);
  }

  // 6. Fix pet creation arrays (in organization-types-integration)
  const petPushPattern = /createdPets\.push\((\w+)\.data\);/g;
  if (content.match(petPushPattern)) {
    content = content.replace(petPushPattern, 'createdPets.push($1.data.data);');
    updated = true;
    console.log(`  ✅ Fixed pet creation arrays`);
  }

  // 7. Fix conversation creation response extraction
  const conversationPattern = /(\w+Conversation) = (\w+)\.data;/g;
  if (content.match(conversationPattern)) {
    content = content.replace(conversationPattern, '$1 = $2.data.data;');
    updated = true;
    console.log(`  ✅ Fixed conversation response extraction`);
  }

  // 8. Fix message creation response extraction
  const messagePattern = /(\w+Message) = (\w+)\.data;/g;
  if (content.match(messagePattern)) {
    content = content.replace(messagePattern, '$1 = $2.data.data;');
    updated = true;
    console.log(`  ✅ Fixed message response extraction`);
  }

  // 9. Fix double success validation (final cleanup)
  const doubleSuccessPattern = /expect\((\w+)\.data\)\.toHaveProperty\('success', true\);\s*expect\(\1\.data\.data\)\.toHaveProperty\('success', true\);/g;
  if (content.match(doubleSuccessPattern)) {
    content = content.replace(doubleSuccessPattern, 'expect($1.data).toHaveProperty(\'success\', true);');
    updated = true;
    console.log(`  ✅ Fixed double success validation`);
  }

  // 10. Fix any remaining .data.data.data patterns (triple nesting)
  const tripleDataPattern = /\.data\.data\.data\./g;
  if (content.match(tripleDataPattern)) {
    content = content.replace(tripleDataPattern, '.data.data.');
    updated = true;
    console.log(`  ✅ Fixed triple data nesting`);
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated ${filename} successfully`);
    return true;
  } else {
    console.log(`ℹ️  No changes needed in ${filename}`);
    return false;
  }
}

function validateTestStructure(filePath) {
  const filename = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`🔍 Validating ${filename}...`);
  
  const issues = [];
  
  // Check for old patterns that should be fixed
  if (content.includes('= response.data;') && !content.includes('= response.data.data;')) {
    issues.push('Found old response.data assignment pattern');
  }
  
  if (content.includes('.data.data.data.')) {
    issues.push('Found triple data nesting');
  }
  
  if (content.match(/expect\(\w+\.data\)\.toHaveProperty\('success', true\);\s*expect\(\w+\.data\.data\)\.toHaveProperty\('success', true\);/)) {
    issues.push('Found double success validation');
  }
  
  if (issues.length === 0) {
    console.log(`  ✅ ${filename} structure looks good`);
    return true;
  } else {
    console.log(`  ⚠️  ${filename} has issues:`);
    issues.forEach(issue => console.log(`    - ${issue}`));
    return false;
  }
}

function main() {
  console.log('🚀 Starting final E2E test structure fixes...\n');
  
  let totalFixed = 0;
  let totalValid = 0;
  
  // Apply fixes
  console.log('📝 APPLYING FIXES:');
  REMAINING_FILES.forEach(filename => {
    const filePath = path.join(E2E_DIR, filename);
    if (fs.existsSync(filePath)) {
      if (fixFile(filePath)) {
        totalFixed++;
      }
    } else {
      console.log(`⚠️  File not found: ${filename}`);
    }
  });
  
  console.log('\n🔍 VALIDATING ALL FILES:');
  // Validate all E2E files
  const allE2EFiles = fs.readdirSync(E2E_DIR)
    .filter(file => file.endsWith('.e2e.js'))
    .filter(file => file !== 'setup.js');
  
  allE2EFiles.forEach(filename => {
    const filePath = path.join(E2E_DIR, filename);
    if (validateTestStructure(filePath)) {
      totalValid++;
    }
  });
  
  console.log(`\n🎉 FINAL RESULTS:`);
  console.log(`  📝 Files fixed: ${totalFixed}/${REMAINING_FILES.length}`);
  console.log(`  ✅ Files validated: ${totalValid}/${allE2EFiles.length}`);
  
  if (totalValid === allE2EFiles.length) {
    console.log(`\n🎊 ALL E2E FILES READY FOR TESTING!`);
  } else {
    console.log(`\n⚠️  Some files may need manual review.`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, validateTestStructure }; 