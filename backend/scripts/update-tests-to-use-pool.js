/**
 * Script to update conversation tests to use the user pool
 * This will fix the authentication issues by using pre-created users
 */

const fs = require('fs');
const path = require('path');

const TEST_FILES = [
  'tests/e2e/conversations/conversation-creation.e2e.js',
  'tests/e2e/conversations/conversation-retrieval.e2e.js',
  'tests/e2e/conversations/conversation-management.e2e.js',
  'tests/e2e/conversations/conversation-admin.e2e.js',
  'tests/e2e/conversations/conversation-multitenancy.e2e.js',
  'tests/e2e/conversations/conversation-edge-cases.e2e.js'
];

/**
 * Generate the new setup code that uses the user pool
 */
function generateNewSetupCode() {
  return `
  beforeAll(async () => {
    try {
      console.log('🧪 Setting up Conversation Creation Tests...');

      // Use pool users instead of creating new ones
      const { createTestUser, getTestUser, getAuthToken, loginAsAdmin } = require('../helpers/auth');
      
      // 1. Get admin user and token
      const adminData = await loginAsAdmin();
      adminUser = adminData.user;
      adminToken = adminData.token;

      // 2. Get pool users (no creation needed - they already exist)
      const poolRegularUser = getTestUser({ role: 'user' });
      const poolModeratorUser = getTestUser({ role: 'user' }); // Use another user as moderator
      
      // Login to get tokens for pool users
      const regularUserAuth = await getAuthToken(poolRegularUser.email, poolRegularUser.password);
      regularUser = regularUserAuth.user;
      regularUserToken = regularUserAuth.token;
      
      const moderatorUserAuth = await getAuthToken(poolModeratorUser.email, poolModeratorUser.password);
      moderatorUser = moderatorUserAuth.user;
      moderatorToken = moderatorUserAuth.token;

      // 3. Update moderator role
      await axios.put(
        \`\${API_BASE_URL}/users/\${moderatorUser.uid}\`,
        { role: 'moderator' },
        { headers: { Authorization: \`Bearer \${adminToken}\` } }
      );

      // 4. Create test organizations
      const orgResponse = await axios.post(
        \`\${API_BASE_URL}/organizations\`,
        {
          name: \`Test Org Conversation Creation \${Date.now()}\`,
          description: 'Test organization for conversation creation tests',
          organizationType: 'business'
        },
        { headers: { Authorization: \`Bearer \${adminToken}\` } }
      );
      
      testOrganization = orgResponse.data.data;
      testOrganizations.push(testOrganization);

      const org2Response = await axios.post(
        \`\${API_BASE_URL}/organizations\`,
        {
          name: \`Test Org 2 Conversation Creation \${Date.now()}\`,
          description: 'Second test organization for conversation creation tests',
          organizationType: 'business'
        },
        { headers: { Authorization: \`Bearer \${adminToken}\` } }
      );
      
      testOrganization2 = org2Response.data.data;
      testOrganizations.push(testOrganization2);

      // 5. Add pool users to organizations
      await axios.post(\`\${API_BASE_URL}/memberships\`, {
        userId: adminUser.uid,
        organizationId: testOrganization.id,
        role: 'admin'
      }, { headers: { Authorization: \`Bearer \${adminToken}\` } });

      await axios.post(\`\${API_BASE_URL}/memberships\`, {
        userId: regularUser.uid,
        organizationId: testOrganization.id,
        role: 'member'
      }, { headers: { Authorization: \`Bearer \${adminToken}\` } });

      await axios.post(\`\${API_BASE_URL}/memberships\`, {
        userId: moderatorUser.uid,
        organizationId: testOrganization.id,
        role: 'moderator'
      }, { headers: { Authorization: \`Bearer \${adminToken}\` } });

    } catch (error) {
      console.error('❌ Setup failed:', error.message);
      throw error;
    }
  });`;
}

/**
 * Update a test file to use the user pool
 */
function updateTestFile(filePath) {
  console.log(`Updating ${filePath}...`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace createTestUser calls with pool usage
    content = content.replace(
      /regularUser = await createTestUser\(\{[\s\S]*?\}\);/g,
      `// regularUser is now obtained from pool in beforeAll`
    );
    
    content = content.replace(
      /moderatorUser = await createTestUser\(\{[\s\S]*?\}\);/g,
      `// moderatorUser is now obtained from pool in beforeAll`
    );
    
    // Replace the user creation and login sections
    content = content.replace(
      /\/\/ 4\. Create regular user[\s\S]*?moderatorToken = moderatorUserResponse\.data\.data\.tokens\.idToken;/g,
      `// Users now obtained from pool - see beforeAll setup`
    );
    
    // Replace user references in tests to use correct IDs
    content = content.replace(/adminUser\.id/g, 'adminUser.uid');
    content = content.replace(/regularUser\.id/g, 'regularUser.uid');
    content = content.replace(/moderatorUser\.id/g, 'moderatorUser.uid');
    
    // Update cleanup to not delete pool users
    content = content.replace(
      /await cleanupTestData\(\{[\s\S]*?users: testUsers,[\s\S]*?\}\);/g,
      `await cleanupTestData({
        organizations: testOrganizations,
        // Don't delete pool users - they are reused
        adminToken
      });`
    );
    
    console.log(`✅ Updated ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Failed to update ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main function to update all test files
 */
function updateAllTestFiles() {
  console.log('🔧 Updating conversation tests to use user pool...\n');
  
  let successCount = 0;
  
  for (const filePath of TEST_FILES) {
    if (fs.existsSync(filePath)) {
      if (updateTestFile(filePath)) {
        successCount++;
      }
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  }
  
  console.log(`\n📊 Update Summary:`);
  console.log(`✅ Successfully updated: ${successCount}/${TEST_FILES.length} files`);
  
  if (successCount === TEST_FILES.length) {
    console.log('\n🎉 All test files updated successfully!');
    console.log('Tests should now use the user pool and avoid rate limiting.');
  } else {
    console.log('\n⚠️  Some files failed to update. Check the logs above.');
  }
}

// Run if executed directly
if (require.main === module) {
  updateAllTestFiles();
}

module.exports = { updateAllTestFiles, updateTestFile }; 