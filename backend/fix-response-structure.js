#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to fix response structure issues in E2E test files
 * Changes response.data.data patterns to correct unified API structure
 */

const testDirectories = [
  'tests/e2e/messages',
  'tests/e2e/conversations',
  'tests/e2e/memberships'
];

function fixResponseStructure(content) {
  // Fix the most common pattern: response.data.data.property
  content = content.replace(
    /expect\(response\.data\.data\)\.toHaveProperty\(/g,
    'expect(response.data).toHaveProperty('
  );
  
  // Fix: response.data.data.someProperty
  content = content.replace(
    /response\.data\.data\.(\w+)/g,
    'response.data.data.$1'
  );
  
  // Fix: expect(response.data).toHaveProperty('success', true);expect(response.data.data).toHaveProperty('success',true);
  content = content.replace(
    /expect\(response\.data\)\.toHaveProperty\('success', true\);expect\(response\.data\.data\)\.toHaveProperty\('success',true\);/g,
    'expect(response.data).toHaveProperty(\'success\', true);'
  );
  
  // Fix specific patterns where data should be accessed directly
  content = content.replace(
    /expect\(response\.data\)\.toHaveProperty\('data'\);\s*expect\(response\.data\.data\.(\w+)\)/g,
    'expect(response.data).toHaveProperty(\'data\');\n      expect(response.data.data.$1)'
  );
  
  // Fix error response structure
  content = content.replace(
    /error\.response\.data\.error/g,
    'error.response.data.message'
  );
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixResponseStructure(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  files.forEach(file => {
    if (file.endsWith('.e2e.js')) {
      const filePath = path.join(dirPath, file);
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('🔧 Starting E2E test response structure fixes...\n');

let totalFixed = 0;
testDirectories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`📁 Processing directory: ${dir}`);
    const fixed = processDirectory(dir);
    totalFixed += fixed;
    console.log(`   Fixed ${fixed} files\n`);
  } else {
    console.log(`⚠️  Directory not found: ${dir}\n`);
  }
});

console.log(`🎉 Total files fixed: ${totalFixed}`);
console.log('✅ Response structure fixes completed!'); 