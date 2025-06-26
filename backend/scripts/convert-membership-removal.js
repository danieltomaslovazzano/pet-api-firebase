#!/usr/bin/env node

const fs = require('fs');

function convertMembershipRemoval() {
  const filePath = 'tests/e2e/memberships/membership-removal.e2e.js';
  console.log(`🔧 Converting ${filePath} to user pool pattern...`);
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace createTestUser with getTestUser in imports
  content = content.replace(
    'const { loginAsAdmin, loginAsUser, createTestUser, cleanupTestData , ensureUserInPostgreSQL } = require(\'../helpers/auth\');',
    'const { loginAsAdmin, getTestUser, getAuthToken, cleanupTestData, ensureUserInPostgreSQL } = require(\'../helpers/auth\');'
  );

  // Replace regular user creation
  const regularUserPattern = /regularUser = await createTestUser\({[\s\S]*?\}\);/;
  if (regularUserPattern.test(content)) {
    content = content.replace(regularUserPattern, `
      // 2. Get users from pre-created pool
      regularUser = getTestUser({ role: 'user', index: 1 });
      console.log(\`[USER POOL] Using regular user: \${regularUser.email}\`);

      // 3. Get authentication tokens for pool users
      const regularUserAuth = await getAuthToken(regularUser.email, regularUser.password);
      regularUserToken = regularUserAuth.token;`);
    console.log('✅ Replaced regular user creation');
  }

  // Replace other createTestUser calls with pool users
  content = content.replace(/const removeUser = await createTestUser\({[\s\S]*?\}\);/, 
    '// Use pool user for removal tests\n      const removeUser = getTestUser({ role: \'user\', index: 2 });');
  
  content = content.replace(/const anotherUser = await createTestUser\({[\s\S]*?\}\);/, 
    '// Use pool user for additional tests\n      const anotherUser = getTestUser({ role: \'user\', index: 3 });');
  
  content = content.replace(/const selfLeaveUser = await createTestUser\({[\s\S]*?\}\);/, 
    '// Use pool user for self-leave tests\n      const selfLeaveUser = getTestUser({ role: \'user\', index: 4 });');

  // Fix authentication calls
  content = content.replace(/await loginAsUser\(selfLeaveUser\.email, 'TestPassword123!'\)/, 
    'await getAuthToken(selfLeaveUser.email, selfLeaveUser.password)');

  fs.writeFileSync(filePath, content);
  console.log(`✅ Converted ${filePath} to user pool pattern`);
}

console.log('🚀 Converting membership-removal to user pool...');
convertMembershipRemoval();
console.log('✅ Conversion complete!');
