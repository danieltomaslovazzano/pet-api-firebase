#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that should be skipped (already have the fix)
const SKIP_FILES = [
  'conversation-creation.e2e.js',
  'conversation-multitenancy.e2e.js',
  'conversation-admin.e2e.js',
  'conversation-retrieval.e2e.js',
  'membership-roles.e2e.js',
  'index.e2e.js'
];

// PostgreSQL user fix code to insert
const POSTGRESQL_FIX = `      // Ensure all users exist in PostgreSQL before creating memberships
      console.log('Ensuring users exist in PostgreSQL...');
      const pgAdminUser = await ensureUserInPostgreSQL(adminUser);
      const pgRegularUser = await ensureUserInPostgreSQL(regularUser);
      const pgModeratorUser = await ensureUserInPostgreSQL(moderatorUser);
      
      // Update user IDs to PostgreSQL IDs
      adminUser.id = pgAdminUser.id;
      regularUser.id = pgRegularUser.id;
      moderatorUser.id = pgModeratorUser.id;
      console.log('✅ All users ensured in PostgreSQL');

      //`;

// Function to apply the PostgreSQL user fix to a file
function applyPostgreSQLFix(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has the fix
    if (content.includes('ensureUserInPostgreSQL(adminUser)') || content.includes('pgAdminUser')) {
      console.log(`⏭️  Skipping ${path.basename(filePath)} - already has PostgreSQL fix`);
      return false;
    }
    
    // Skip if doesn't have the import
    if (!content.includes('ensureUserInPostgreSQL')) {
      console.log(`⚠️  Skipping ${path.basename(filePath)} - missing import`);
      return false;
    }
    
    // Find membership creation patterns
    const membershipPatterns = [
      /\/\/ \d+\. Add users to organizations/,
      /await axios\.post\(\`\$\{API_BASE_URL\}\/memberships\`/,
      /userId: adminUser\.id/
    ];
    
    let foundPattern = false;
    let insertionPoint = -1;
    
    const lines = content.split('\n');
    
    // Look for membership creation patterns
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Look for comment before membership creation
      if (line.includes('Add users to organizations') || 
          line.includes('Create memberships') ||
          (line.includes('await axios.post') && line.includes('memberships'))) {
        
        // Find the previous meaningful comment or code
        for (let j = i - 1; j >= 0; j--) {
          if (lines[j].trim().startsWith('//') && 
              (lines[j].includes('Update') || lines[j].includes('Create') || lines[j].includes('moderator'))) {
            insertionPoint = j + 2; // Insert after this comment
            foundPattern = true;
            break;
          }
        }
        
        if (foundPattern) break;
      }
    }
    
    if (!foundPattern) {
      console.log(`❓ No clear insertion point found in ${path.basename(filePath)}`);
      return false;
    }
    
    // Insert the PostgreSQL fix
    const fixLines = POSTGRESQL_FIX.split('\n');
    lines.splice(insertionPoint, 0, ...fixLines);
    
    // Update the numbering of subsequent comments
    for (let i = insertionPoint + fixLines.length; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(/^(\s*)\/\/ (\d+)\. (.+)/);
      if (match) {
        const [, indent, num, text] = match;
        const newNum = parseInt(num) + 1;
        lines[i] = `${indent}// ${newNum}. ${text}`;
      }
    }
    
    // Write the updated content
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log(`✅ Applied PostgreSQL fix to ${path.basename(filePath)}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🚀 Starting comprehensive PostgreSQL user fix application...\n');
  
  const testModules = ['conversations', 'messages', 'pets', 'memberships'];
  let totalFiles = 0;
  let fixedFiles = 0;
  let skippedFiles = 0;
  
  testModules.forEach(module => {
    console.log(`\n📁 Processing ${module.toUpperCase()} module:`);
    
    const modulePath = path.join(__dirname, '..', 'tests', 'e2e', module);
    if (!fs.existsSync(modulePath)) {
      console.log(`   Directory not found: ${modulePath}`);
      return;
    }
    
    const files = fs.readdirSync(modulePath)
      .filter(f => f.endsWith('.e2e.js') && !SKIP_FILES.includes(f));
    
    console.log(`   Found ${files.length} files to process`);
    
    files.forEach(file => {
      const filePath = path.join(modulePath, file);
      totalFiles++;
      
      if (applyPostgreSQLFix(filePath)) {
        fixedFiles++;
      } else {
        skippedFiles++;
      }
    });
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedFiles}`);
  console.log(`   Files skipped: ${skippedFiles}`);
  console.log(`\n✅ PostgreSQL user fix application completed!`);
}

if (require.main === module) {
  main();
}

module.exports = { applyPostgreSQLFix }; 