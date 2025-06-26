#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const membershipFiles = [
  'tests/e2e/memberships/membership-invitations.e2e.js',
  'tests/e2e/memberships/membership-access-control.e2e.js',
];

function fixSyntaxErrors(filePath) {
  console.log(`\n🔧 Fixing syntax errors in ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = false;

  // Fix pattern 1: createTestUser interrupted by PostgreSQL code
  const pattern1 = /testUser2 = await createTestUser\({\s*\/\/ Ensure all users exist.*?console\.log\('✅ All users ensured in PostgreSQL'\);\s*\/\/\s*email:/s;
  if (pattern1.test(content)) {
    content = content.replace(pattern1, `
      // Ensure all users exist in PostgreSQL before creating memberships
      console.log('Ensuring users exist in PostgreSQL...');
      const pgAdminUser = await ensureUserInPostgreSQL(adminUser);
      const pgRegularUser = await ensureUserInPostgreSQL(regularUser);
      const pgModeratorUser = await ensureUserInPostgreSQL(moderatorUser);
      
      // Update user IDs to PostgreSQL IDs
      adminUser.id = pgAdminUser.id;
      regularUser.id = pgRegularUser.id;
      moderatorUser.id = pgModeratorUser.id;
      console.log('✅ All users ensured in PostgreSQL');

      // Create additional test users
      testUser2 = await createTestUser({
        email:`);
    fixed = true;
  }

  // Fix pattern 2: axios.post interrupted by PostgreSQL code
  const pattern2 = /const org2Response = await axios\.post\(\s*\/\/ Ensure all users exist.*?console\.log\('✅ All users ensured in PostgreSQL'\);\s*\/\/\s*`/s;
  if (pattern2.test(content)) {
    content = content.replace(pattern2, `
      // Ensure all users exist in PostgreSQL before creating memberships
      console.log('Ensuring users exist in PostgreSQL...');
      const pgAdminUser = await ensureUserInPostgreSQL(adminUser);
      const pgRegularUser = await ensureUserInPostgreSQL(regularUser);
      const pgModeratorUser = await ensureUserInPostgreSQL(moderatorUser);
      
      // Update user IDs to PostgreSQL IDs
      adminUser.id = pgAdminUser.id;
      regularUser.id = pgRegularUser.id;
      moderatorUser.id = pgModeratorUser.id;
      console.log('✅ All users ensured in PostgreSQL');

      // Create second test organization
      const org2Response = await axios.post(
        \``);
    fixed = true;
  }

  if (fixed) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed syntax errors in ${filePath}`);
  } else {
    console.log(`ℹ️ No syntax errors found in ${filePath}`);
  }
}

// Main execution
console.log('🚀 Starting membership syntax error fixes...');

membershipFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    fixSyntaxErrors(filePath);
  } else {
    console.log(`⚠️ File not found: ${filePath}`);
  }
});

console.log('\n✅ Membership syntax fixes complete!');
