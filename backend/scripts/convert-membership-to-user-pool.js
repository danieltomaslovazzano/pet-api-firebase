#!/usr/bin/env node

const fs = require('fs');

function convertMembershipInvitations() {
  const filePath = 'tests/e2e/memberships/membership-invitations.e2e.js';
  console.log(`🔧 Converting ${filePath} to user pool pattern...`);
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the setup with proper user pool pattern
  const setupPattern = /\/\/ 4\. Create regular user[\s\S]*?regularUserToken = regularUserResponse\.data\.data\.tokens\.idToken;/;
  const userPoolSetup = `
      // 2. Get users from pre-created pool
      regularUser = getTestUser({ role: 'user', index: 1 });
      moderatorUser = getTestUser({ role: 'user', index: 2 });

      console.log(\`[USER POOL] Using regular user: \${regularUser.email}\`);
      console.log(\`[USER POOL] Using moderator user: \${moderatorUser.email}\`);

      // 3. Get authentication tokens for pool users
      const regularUserAuth = await getAuthToken(regularUser.email, regularUser.password);
      regularUserToken = regularUserAuth.token;`;

  if (setupPattern.test(content)) {
    content = content.replace(setupPattern, userPoolSetup);
    console.log('✅ Replaced user creation setup');
  }

  // Replace test user creation with pool users
  const testUserPattern = /testUser2 = await getTestUser\({[^}]+}\);[\s\S]*?testUser3 = await getTestUser\({[^}]+}\);/;
  if (testUserPattern.test(content)) {
    content = content.replace(testUserPattern, `
      // Use additional pool users
      testUser2 = getTestUser({ role: 'user', index: 3 });
      testUser3 = getTestUser({ role: 'user', index: 4 });`);
    console.log('✅ Replaced test users with pool users');
  }

  // Replace invite user creation
  const inviteUserPattern = /inviteUser = await getTestUser\({[^}]+}\);/;
  if (inviteUserPattern.test(content)) {
    content = content.replace(inviteUserPattern, `
      // Use pool user for invitations
      inviteUser = getTestUser({ role: 'user', index: 5 });`);
    console.log('✅ Replaced invite user with pool user');
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Converted ${filePath} to user pool pattern`);
}

console.log('🚀 Converting membership-invitations to user pool...');
convertMembershipInvitations();
console.log('✅ Conversion complete!');
