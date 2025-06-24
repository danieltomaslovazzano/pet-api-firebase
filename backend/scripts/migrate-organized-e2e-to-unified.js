#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const E2E_DIR = path.join(__dirname, '../tests/e2e');

// Detectar automáticamente todas las carpetas de tests
function getTestDirectories() {
  return fs.readdirSync(E2E_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => !['config', 'helpers', 'reports', 'legacy'].includes(dirent.name))
    .map(dirent => dirent.name);
}

// Detectar todos los archivos .e2e.js en todas las carpetas
function getAllTestFiles() {
  const testDirs = getTestDirectories();
  const allFiles = [];
  
  testDirs.forEach(dir => {
    const dirPath = path.join(E2E_DIR, dir);
    const files = fs.readdirSync(dirPath)
      .filter(file => file.endsWith('.e2e.js'))
      .map(file => path.join(dirPath, file));
    allFiles.push(...files);
  });
  
  return allFiles;
}

function migrateFileToUnifiedStructure(filePath) {
  const filename = path.basename(filePath);
  const relativePath = path.relative(E2E_DIR, filePath);
  console.log(`🔧 Migrating ${relativePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // 1. Fix auth token patterns
  const tokenPatterns = [
    { 
      pattern: /(\w+)Token = (\w+)\.data\.tokens\.idToken/g,
      replacement: '$1Token = $2.data.data.tokens.idToken'
    },
    {
      pattern: /adminToken = (\w+)\.data\.tokens\.idToken/g,
      replacement: 'adminToken = $1.data.data.tokens.idToken'
    }
  ];

  tokenPatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed auth token patterns`);
    }
  });

  // 2. Fix entity creation response extraction
  const entityPatterns = [
    {
      pattern: /(\w+Organization) = (\w+Response)\.data;/g,
      replacement: '$1 = $2.data.data;'
    },
    {
      pattern: /(\w+User) = (\w+)\.data;/g,
      replacement: '$1 = $2.data.data;'
    },
    {
      pattern: /(\w+Pet) = (\w+)\.data;/g,
      replacement: '$1 = $2.data.data;'
    },
    {
      pattern: /(\w+Conversation) = (\w+)\.data;/g,
      replacement: '$1 = $2.data.data;'
    },
    {
      pattern: /(\w+Message) = (\w+)\.data;/g,
      replacement: '$1 = $2.data.data;'
    },
    {
      pattern: /(\w+Membership) = (\w+)\.data;/g,
      replacement: '$1 = $2.data.data;'
    }
  ];

  entityPatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed entity creation patterns`);
    }
  });

  // 3. Fix test organization assignment
  const testOrgPattern = /testOrganization = (\w+)\.data;/g;
  if (content.match(testOrgPattern)) {
    content = content.replace(testOrgPattern, 'testOrganization = $1.data.data;');
    updated = true;
    console.log(`  ✅ Fixed testOrganization assignment`);
  }

  // 4. Fix cleanup arrays
  const cleanupPatterns = [
    {
      pattern: /testOrganizations\.push\((\w+)\.data\);/g,
      replacement: 'testOrganizations.push($1.data.data);'
    },
    {
      pattern: /createdPets\.push\((\w+)\.data\);/g,
      replacement: 'createdPets.push($1.data.data);'
    },
    {
      pattern: /createdUsers\.push\((\w+)\.data\);/g,
      replacement: 'createdUsers.push($1.data.data);'
    },
    {
      pattern: /createdConversations\.push\((\w+)\.data\);/g,
      replacement: 'createdConversations.push($1.data.data);'
    },
    {
      pattern: /createdMessages\.push\((\w+)\.data\);/g,
      replacement: 'createdMessages.push($1.data.data);'
    }
  ];

  cleanupPatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed cleanup arrays`);
    }
  });

  // 5. Fix response structure validation
  const responsePatterns = [
    {
      pattern: /expect\((\w+)\.data\)\.toHaveProperty\('([^']+)', (?!.*success)/g,
      replacement: 'expect($1.data.data).toHaveProperty(\'$2\','
    },
    {
      pattern: /expect\((\w+)\.data\.([^)]+)\)\.toBe\(/g,
      replacement: 'expect($1.data.data.$2).toBe('
    },
    {
      pattern: /expect\((\w+)\.data\.([^)]+)\)\.toContain\(/g,
      replacement: 'expect($1.data.data.$2).toContain('
    }
  ];

  responsePatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed response validation patterns`);
    }
  });

  // 6. Fix message field access patterns
  const messagePatterns = [
    {
      pattern: /expect\((\w+)\.data\.message\)\.toContain\(/g,
      replacement: 'expect($1.data.message).toContain('
    }
  ];

  messagePatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed message access patterns (kept at root level)`);
    }
  });

  // 7. Fix double success validation
  const doubleSuccessPattern = /expect\((\w+)\.data\)\.toHaveProperty\('success', true\);\s*expect\(\1\.data\.data\)\.toHaveProperty\('success', true\);/g;
  if (content.match(doubleSuccessPattern)) {
    content = content.replace(doubleSuccessPattern, 'expect($1.data).toHaveProperty(\'success\', true);');
    updated = true;
    console.log(`  ✅ Fixed double success validation`);
  }

  // 8. Add success validation to responses that need it
  const needsSuccessPattern = /expect\((\w+)\.status\)\.toBe\((?:200|201)\);\s*(?!.*expect\(\1\.data\)\.toHaveProperty\('success')/g;
  const successMatches = content.match(needsSuccessPattern);
  if (successMatches) {
    content = content.replace(needsSuccessPattern, (match, varName) => {
      return match + `\n      expect(${varName}.data).toHaveProperty('success', true);`;
    });
    updated = true;
    console.log(`  ✅ Added missing success validations`);
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated ${relativePath} successfully`);
    return true;
  } else {
    console.log(`ℹ️  No changes needed in ${relativePath}`);
    return false;
  }
}

function validateFileStructure(filePath) {
  const relativePath = path.relative(E2E_DIR, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const issues = [];
  
  // Check for old patterns
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
    console.log(`  ✅ ${relativePath} structure looks good`);
    return true;
  } else {
    console.log(`  ⚠️  ${relativePath} has issues:`);
    issues.forEach(issue => console.log(`    - ${issue}`));
    return false;
  }
}

function main() {
  console.log('🚀 Starting organized E2E tests migration to unified response structure...\n');
  
  const testDirs = getTestDirectories();
  console.log(`📁 Found test directories: ${testDirs.join(', ')}\n`);
  
  const allTestFiles = getAllTestFiles();
  console.log(`📄 Found ${allTestFiles.length} test files to migrate\n`);
  
  let totalUpdated = 0;
  let totalValid = 0;
  
  // Apply migrations
  console.log('📝 APPLYING MIGRATIONS:');
  allTestFiles.forEach(filePath => {
    if (migrateFileToUnifiedStructure(filePath)) {
      totalUpdated++;
    }
  });
  
  console.log('\n🔍 VALIDATING ALL FILES:');
  // Validate all files
  allTestFiles.forEach(filePath => {
    if (validateFileStructure(filePath)) {
      totalValid++;
    }
  });
  
  console.log(`\n🎉 MIGRATION RESULTS:`);
  console.log(`  📝 Files updated: ${totalUpdated}/${allTestFiles.length}`);
  console.log(`  ✅ Files validated: ${totalValid}/${allTestFiles.length}`);
  console.log(`  📁 Directories processed: ${testDirs.length}`);
  
  if (totalValid === allTestFiles.length) {
    console.log(`\n🎊 ALL ORGANIZED E2E FILES READY FOR UNIFIED STRUCTURE!`);
  } else {
    console.log(`\n⚠️  Some files may need manual review.`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { migrateFileToUnifiedStructure, validateFileStructure }; 