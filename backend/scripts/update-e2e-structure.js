#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const E2E_DIR = path.join(__dirname, '../tests/e2e');

// Files that are already updated
const UPDATED_FILES = ['auth.e2e.js', 'users.e2e.js', 'setup.js'];

// Patterns to update
const PATTERNS = [
  // Auth helper patterns (already fixed but included for completeness)
  {
    pattern: /adminToken = (\w+)\.data\.tokens\.idToken/g,
    replacement: 'adminToken = $1.data.data.tokens.idToken'
  },
  {
    pattern: /(\w+)Token = (\w+)\.data\.tokens\.idToken/g,
    replacement: '$1Token = $2.data.data.tokens.idToken'
  },
  
  // Basic response structure updates
  {
    pattern: /expect\((\w+)\.data\)\.toHaveProperty\('([^']+)'\)/g,
    replacement: 'expect($1.data).toHaveProperty(\'success\', true);\n      expect($1.data.data).toHaveProperty(\'$2\')'
  },
  
  // Array checks
  {
    pattern: /expect\(Array\.isArray\((\w+)\.data\)\)\.toBe\(true\)/g,
    replacement: 'expect($1.data).toHaveProperty(\'success\', true);\n      expect(Array.isArray($1.data.data)).toBe(true)'
  },
  
  // Direct property access
  {
    pattern: /(\w+)\.data\.([a-zA-Z_][a-zA-Z0-9_]*)/g,
    replacement: (match, varName, property) => {
      // Skip if already accessing .data.data or .success/.meta patterns
      if (property === 'data' || property === 'success' || property === 'meta' || property === 'message') {
        return match;
      }
      return `${varName}.data.data.${property}`;
    }
  },
  
  // Error response checks - these should stay as is for error responses
  {
    pattern: /err\.response\.data\.([a-zA-Z_][a-zA-Z0-9_]*)/g,
    replacement: 'err.response.data.$1'  // Keep error responses as is
  }
];

function updateFile(filePath) {
  console.log(`📝 Updating ${path.basename(filePath)}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  PATTERNS.forEach(({ pattern, replacement }) => {
    const originalContent = content;
    if (typeof replacement === 'function') {
      content = content.replace(pattern, replacement);
    } else {
      content = content.replace(pattern, replacement);
    }
    if (content !== originalContent) {
      updated = true;
    }
  });
  
  // Additional manual fixes that are hard to pattern match
  
  // Fix login token extraction
  content = content.replace(
    /(\w+) = (\w+)\.data\.tokens\.idToken/g,
    '$1 = $2.data.data.tokens.idToken'
  );
  
  // Fix user creation ID extraction
  content = content.replace(
    /(\w+Id) = (\w+)\.data\.id/g,
    '$1 = $2.data.data.id'
  );
  
  // Fix specific property comparisons
  content = content.replace(
    /expect\((\w+)\.data\.([a-zA-Z_][a-zA-Z0-9_]*)\)\.toBe\(/g,
    (match, varName, property) => {
      if (property === 'success' || property === 'meta' || property === 'message') {
        return match; // Keep these as is
      }
      return `expect(${varName}.data.data.${property}).toBe(`;
    }
  );
  
  // Fix toHaveProperty calls
  content = content.replace(
    /expect\((\w+)\.data\)\.toHaveProperty\('([^']+)',\s*([^)]+)\)/g,
    'expect($1.data).toHaveProperty(\'success\', true);\n      expect($1.data.data).toHaveProperty(\'$2\', $3)'
  );
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated ${path.basename(filePath)}`);
    return true;
  } else {
    console.log(`ℹ️  No changes needed in ${path.basename(filePath)}`);
    return false;
  }
}

function main() {
  console.log('🚀 Starting E2E test structure update...\n');
  
  const files = fs.readdirSync(E2E_DIR)
    .filter(file => file.endsWith('.e2e.js'))
    .filter(file => !UPDATED_FILES.includes(file));
  
  console.log(`📋 Files to update: ${files.join(', ')}\n`);
  
  let updatedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(E2E_DIR, file);
    if (updateFile(filePath)) {
      updatedCount++;
    }
  });
  
  console.log(`\n🎉 Update complete! Updated ${updatedCount}/${files.length} files.`);
  
  if (updatedCount > 0) {
    console.log('\n📋 Next steps:');
    console.log('1. Run tests to verify they work');
    console.log('2. Fix any remaining issues manually');
    console.log('3. Commit the changes');
  }
}

if (require.main === module) {
  main();
}

module.exports = { updateFile, PATTERNS }; 