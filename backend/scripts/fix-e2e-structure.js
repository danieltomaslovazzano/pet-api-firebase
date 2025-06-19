#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const E2E_DIR = path.join(__dirname, '../tests/e2e');

function fixOrganizationsTest() {
  const filePath = path.join(E2E_DIR, 'organizations.e2e.js');
  console.log('🔧 Fixing organizations.e2e.js...');
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix double success validation
  content = content.replace(
    /expect\(response\.data\)\.toHaveProperty\('success', true\);\s+expect\(response\.data\.data\)\.toHaveProperty\('success', true\);/g,
    'expect(response.data).toHaveProperty(\'success\', true);'
  );
  
  // Fix ID extraction from creation responses
  content = content.replace(
    /testOrg = response\.data;/g,
    'testOrg = response.data.data;'
  );
  
  content = content.replace(
    /testOrganizations\.push\(response\.data\);/g,
    'testOrganizations.push(response.data.data);'
  );
  
  // Fix organization property access
  content = content.replace(
    /testOrg\.([a-zA-Z_][a-zA-Z0-9_]*)/g,
    (match, property) => {
      if (property === 'id' || property === 'name') {
        return `testOrg.${property}`;
      }
      return match;
    }
  );
  
  // Fix error response parsing for validation errors
  content = content.replace(
    /expect\(error\.response\.data\.data\.error\)/g,
    'expect(error.response.data.error)'
  );
  
  // Fix Array.isArray check
  content = content.replace(
    /expect\(response\.data\.data\)\.toHaveProperty\('success', true\);\s+expect\(Array\.isArray\(response\.data\.data\)\)\.toBe\(true\);/g,
    'expect(response.data).toHaveProperty(\'success\', true);\n      expect(Array.isArray(response.data.data)).toBe(true);'
  );
  
  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed organizations.e2e.js');
}

function fixAllOtherTests() {
  const files = ['pets.e2e.js', 'messages.e2e.js', 'conversations.e2e.js', 'memberships.e2e.js', 'organization-types.e2e.js', 'organization-types-integration.e2e.js'];
  
  files.forEach(filename => {
    const filePath = path.join(E2E_DIR, filename);
    console.log(`🔧 Fixing ${filename}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix double success validation
    content = content.replace(
      /expect\(response\.data\)\.toHaveProperty\('success', true\);\s+expect\(response\.data\.data\)\.toHaveProperty\('success', true\);/g,
      'expect(response.data).toHaveProperty(\'success\', true);'
    );
    
    // Fix double success validation in different patterns
    content = content.replace(
      /expect\((\w+)\.data\)\.toHaveProperty\('success', true\);\s+expect\(\1\.data\.data\)\.toHaveProperty\('success', true\);/g,
      'expect($1.data).toHaveProperty(\'success\', true);'
    );
    
    // Fix error responses that should NOT use .data.data
    content = content.replace(
      /error\.response\.data\.data\./g,
      'error.response.data.'
    );
    
    // Fix specific ID extractions that are common
    content = content.replace(
      /(\w+Id) = (\w+)\.data\.data\.id/g,
      '$1 = $2.data.data.id'
    );
    
    // Fix Array.isArray double structure
    content = content.replace(
      /expect\((\w+)\.data\.data\)\.toHaveProperty\('success', true\);\s+expect\(Array\.isArray\(\1\.data\.data\)\)\.toBe\(true\);/g,
      'expect($1.data).toHaveProperty(\'success\', true);\n      expect(Array.isArray($1.data.data)).toBe(true);'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${filename}`);
  });
}

function main() {
  console.log('🚀 Starting targeted E2E test fixes...\n');
  
  // Fix organizations first (special case)
  fixOrganizationsTest();
  
  // Fix all other tests
  fixAllOtherTests();
  
  console.log('\n🎉 All fixes applied!');
  console.log('\n📋 Next steps:');
  console.log('1. Run tests to verify fixes');
  console.log('2. Apply manual fixes if needed');
}

if (require.main === module) {
  main();
} 