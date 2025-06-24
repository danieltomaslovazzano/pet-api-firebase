#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const E2E_DIR = path.join(__dirname, '../tests/e2e');

function getAllTestFiles() {
  const testDirs = fs.readdirSync(E2E_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => !['config', 'helpers', 'reports', 'legacy'].includes(dirent.name))
    .map(dirent => dirent.name);
  
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

function fixTripleNesting(filePath) {
  const relativePath = path.relative(E2E_DIR, filePath);
  console.log(`🔧 Fixing triple nesting in ${relativePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // 1. Fix triple data nesting (.data.data.data. -> .data.data.)
  const tripleDataPattern = /\.data\.data\.data\./g;
  if (content.match(tripleDataPattern)) {
    content = content.replace(tripleDataPattern, '.data.data.');
    updated = true;
    console.log(`  ✅ Fixed triple data nesting`);
  }

  // 2. Fix old response assignment patterns missed by main script
  const assignmentPatterns = [
    {
      pattern: /(\w+) = response\.data;(?!\s*\/\/.*data\.data)/g,
      replacement: '$1 = response.data.data;'
    },
    {
      pattern: /(\w+) = createResponse\.data;/g,
      replacement: '$1 = createResponse.data.data;'
    },
    {
      pattern: /(\w+) = updateResponse\.data;/g,
      replacement: '$1 = updateResponse.data.data;'
    }
  ];

  assignmentPatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed assignment patterns`);
    }
  });

  // 3. Fix specific entity patterns that might have been missed
  const specificPatterns = [
    {
      pattern: /testUser = (\w+)\.data;/g,
      replacement: 'testUser = $1.data.data;'
    },
    {
      pattern: /testPet = (\w+)\.data;/g,
      replacement: 'testPet = $1.data.data;'
    },
    {
      pattern: /testMessage = (\w+)\.data;/g,
      replacement: 'testMessage = $1.data.data;'
    },
    {
      pattern: /testConversation = (\w+)\.data;/g,
      replacement: 'testConversation = $1.data.data;'
    },
    {
      pattern: /testMembership = (\w+)\.data;/g,
      replacement: 'testMembership = $1.data.data;'
    }
  ];

  specificPatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed specific entity patterns`);
    }
  });

  // 4. Fix organization variable assignments
  const orgPatterns = [
    {
      pattern: /org = (\w+)\.data;/g,
      replacement: 'org = $1.data.data;'
    },
    {
      pattern: /organization = (\w+)\.data;/g,
      replacement: 'organization = $1.data.data;'
    },
    {
      pattern: /shelterOrg = (\w+)\.data;/g,
      replacement: 'shelterOrg = $1.data.data;'
    }
  ];

  orgPatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed organization patterns`);
    }
  });

  // 5. Fix expect patterns that access data incorrectly
  const expectPatterns = [
    {
      pattern: /expect\((\w+)\.data\.data\.data\.([^)]+)\)/g,
      replacement: 'expect($1.data.data.$2)'
    }
  ];

  expectPatterns.forEach(({ pattern, replacement }) => {
    if (content.match(pattern)) {
      content = content.replace(pattern, replacement);
      updated = true;
      console.log(`  ✅ Fixed expect patterns`);
    }
  });

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated ${relativePath} successfully`);
    return true;
  } else {
    console.log(`ℹ️  No changes needed in ${relativePath}`);
    return false;
  }
}

function validateStructure(filePath) {
  const relativePath = path.relative(E2E_DIR, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const issues = [];
  
  // Check for remaining issues
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
    console.log(`  ✅ ${relativePath} structure is clean`);
    return true;
  } else {
    console.log(`  ⚠️  ${relativePath} still has issues:`);
    issues.forEach(issue => console.log(`    - ${issue}`));
    return false;
  }
}

function main() {
  console.log('🔧 Starting triple nesting cleanup...\n');
  
  const allTestFiles = getAllTestFiles();
  console.log(`📄 Found ${allTestFiles.length} files to check\n`);
  
  let totalFixed = 0;
  let totalValid = 0;
  
  // Apply fixes
  console.log('🔧 APPLYING FIXES:');
  allTestFiles.forEach(filePath => {
    if (fixTripleNesting(filePath)) {
      totalFixed++;
    }
  });
  
  console.log('\n🔍 VALIDATING RESULTS:');
  // Validate results
  allTestFiles.forEach(filePath => {
    if (validateStructure(filePath)) {
      totalValid++;
    }
  });
  
  console.log(`\n🎉 CLEANUP RESULTS:`);
  console.log(`  🔧 Files fixed: ${totalFixed}/${allTestFiles.length}`);
  console.log(`  ✅ Files clean: ${totalValid}/${allTestFiles.length}`);
  
  if (totalValid === allTestFiles.length) {
    console.log(`\n🎊 ALL FILES ARE NOW CLEAN AND READY!`);
  } else {
    console.log(`\n⚠️  ${allTestFiles.length - totalValid} files may need manual review.`);
  }
}

if (require.main === module) {
  main();
} 