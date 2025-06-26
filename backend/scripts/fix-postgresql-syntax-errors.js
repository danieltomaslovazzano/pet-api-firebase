#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxError(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Look for the broken pattern: await axios.put( followed by PostgreSQL fix
    const brokenPattern = /await axios\.put\(\s*\/\/ Ensure all users exist in PostgreSQL/;
    
    if (!brokenPattern.test(content)) {
      console.log(`⏭️  No syntax error found in ${path.basename(filePath)}`);
      return false;
    }
    
    // Fix the syntax by properly restructuring the code
    content = content.replace(
      /(\s*)(\/\/ \d+\. Update moderator role\s*await axios\.put\(\s*)\/\/ Ensure all users exist in PostgreSQL before creating memberships\s*console\.log\('Ensuring users exist in PostgreSQL\.\.\.'\);\s*const pgAdminUser = await ensureUserInPostgreSQL\(adminUser\);\s*const pgRegularUser = await ensureUserInPostgreSQL\(regularUser\);\s*const pgModeratorUser = await ensureUserInPostgreSQL\(moderatorUser\);\s*\/\/ Update user IDs to PostgreSQL IDs\s*adminUser\.id = pgAdminUser\.id;\s*regularUser\.id = pgRegularUser\.id;\s*moderatorUser\.id = pgModeratorUser\.id;\s*console\.log\('✅ All users ensured in PostgreSQL'\);\s*\/\/\s*(\`\$\{API_BASE_URL\}\/users\/\$\{moderatorUser\.id\}\`,\s*\{ role: 'moderator' \},\s*\{ headers: \{ Authorization: \`Bearer \$\{adminToken\}\` \} \}\s*\);)/,
      '$1// 6. Ensure all users exist in PostgreSQL before creating memberships\n$1console.log(\'Ensuring users exist in PostgreSQL...\');\n$1const pgAdminUser = await ensureUserInPostgreSQL(adminUser);\n$1const pgRegularUser = await ensureUserInPostgreSQL(regularUser);\n$1const pgModeratorUser = await ensureUserInPostgreSQL(moderatorUser);\n$1\n$1// Update user IDs to PostgreSQL IDs\n$1adminUser.id = pgAdminUser.id;\n$1regularUser.id = pgRegularUser.id;\n$1moderatorUser.id = pgModeratorUser.id;\n$1console.log(\'✅ All users ensured in PostgreSQL\');\n$1\n$1// 7. Update moderator role (using PostgreSQL ID)\n$1await axios.put(\n$1  $3'
    );
    
    // Fix the comment numbering for "Add users to organizations"
    content = content.replace(
      /\/\/ 8\. Add users to organizations$/m,
      '// 8. Add users to organizations (using PostgreSQL IDs)'
    );
    
    // Write the fixed content
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed syntax error in ${path.basename(filePath)}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🔧 Fixing PostgreSQL user fix syntax errors...\n');
  
  const messageFiles = [
    'tests/e2e/messages/message-edge-cases.e2e.js',
    'tests/e2e/messages/message-retrieval.e2e.js',
    'tests/e2e/messages/message-management.e2e.js',
    'tests/e2e/messages/message-multitenancy.e2e.js'
  ];
  
  let fixedCount = 0;
  
  messageFiles.forEach(filePath => {
    const absolutePath = path.resolve(__dirname, '..', filePath);
    if (fs.existsSync(absolutePath)) {
      if (fixSyntaxError(absolutePath)) {
        fixedCount++;
      }
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  });
  
  console.log(`\n📊 Summary: Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxError }; 