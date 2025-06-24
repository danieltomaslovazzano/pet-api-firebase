#!/usr/bin/env node

/**
 * Script to migrate all E2E tests to use new i18n response format
 * Updates test expectations from old format to new standardized format
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const COLORS = {
  RESET: '\x1b[0m',
  BRIGHT: '\x1b[1m',
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  MAGENTA: '\x1b[35m',
  CYAN: '\x1b[36m'
};

function colorize(color, text) {
  return `${COLORS[color]}${text}${COLORS.RESET}`;
}

function logSection(title) {
  console.log('\n' + '═'.repeat(80));
  console.log(colorize('CYAN', colorize('BRIGHT', `  ${title}`)));
  console.log('═'.repeat(80));
}

function logInfo(message) {
  console.log(colorize('BLUE', `ℹ ${message}`));
}

function logSuccess(message) {
  console.log(colorize('GREEN', `✓ ${message}`));
}

function logWarning(message) {
  console.log(colorize('YELLOW', `⚠ ${message}`));
}

function logError(message) {
  console.log(colorize('RED', `✗ ${message}`));
}

// Test migration patterns
const TEST_MIGRATION_PATTERNS = [
  // response.data.tokens -> response.data.data.tokens
  {
    name: 'response.data.tokens to response.data.data.tokens',
    pattern: /(\w+)\.data\.tokens/g,
    replacement: '$1.data.data.tokens'
  },
  
  // response.data.user -> response.data.data.user
  {
    name: 'response.data.user to response.data.data.user',
    pattern: /(\w+)\.data\.user/g,
    replacement: '$1.data.data.user'
  },
  
  // .data directly for arrays -> .data.data for arrays
  {
    name: 'Array.isArray(response.data) to Array.isArray(response.data.data)',
    pattern: /Array\.isArray\((\w+)\.data\)/g,
    replacement: 'Array.isArray($1.data.data)'
  },
  
  // expect(response.data).toHaveProperty -> add success and data checks
  {
    name: 'Add success property expectation',
    pattern: /expect\((\w+)\.data\)\.toHaveProperty\('([^']+)'/g,
    replacement: 'expect($1.data).toHaveProperty(\'success\', true);\n    expect($1.data).toHaveProperty(\'data\');\n    expect($1.data.data).toHaveProperty(\'$2\''
  },
  
  // expect(response.data).toContain -> expect(response.data.data).toContain
  {
    name: 'response.data.toContain to response.data.data.toContain',
    pattern: /expect\((\w+)\.data\)\.toContain/g,
    replacement: 'expect($1.data.data).toContain'
  },
  
  // response.data[0] -> response.data.data[0] (for arrays)
  {
    name: 'response.data[index] to response.data.data[index]',
    pattern: /(\w+)\.data\[(\d+)\]/g,
    replacement: '$1.data.data[$2]'
  },
  
  // response.data.length -> response.data.data.length
  {
    name: 'response.data.length to response.data.data.length',
    pattern: /(\w+)\.data\.length/g,
    replacement: '$1.data.data.length'
  },
  
  // response.data.id -> response.data.data.id (for single objects)
  {
    name: 'response.data.id to response.data.data.id',
    pattern: /(\w+)\.data\.id/g,
    replacement: '$1.data.data.id'
  },
  
  // response.data.email -> response.data.data.email
  {
    name: 'response.data.email to response.data.data.email',
    pattern: /(\w+)\.data\.email/g,
    replacement: '$1.data.data.email'
  },
  
  // response.data.name -> response.data.data.name
  {
    name: 'response.data.name to response.data.data.name',
    pattern: /(\w+)\.data\.name/g,
    replacement: '$1.data.data.name'
  }
];

function migrateTestFile(filePath) {
  logInfo(`Processing: ${path.basename(filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changes = 0;
  let changesDetail = [];
  
  for (const pattern of TEST_MIGRATION_PATTERNS) {
    const matches = content.match(pattern.pattern);
    if (matches) {
      content = content.replace(pattern.pattern, pattern.replacement);
      changes += matches.length;
      changesDetail.push(`  - ${pattern.name}: ${matches.length} replacements`);
    }
  }
  
  if (changes > 0) {
    fs.writeFileSync(filePath, content);
    logSuccess(`✅ Updated ${path.basename(filePath)} (${changes} changes)`);
    changesDetail.forEach(detail => logInfo(detail));
  } else {
    logInfo(`ℹ  No changes needed for ${path.basename(filePath)}`);
  }
  
  return changes;
}

function findTestFiles() {
  const testsDir = path.join(__dirname, '..', 'tests', 'e2e');
  const files = [];
  
  // Get all .e2e.js files
  const e2eFiles = fs.readdirSync(testsDir)
    .filter(file => file.endsWith('.e2e.js'))
    .map(file => path.join(testsDir, file));
  
  files.push(...e2eFiles);
  
  // Get all helper files
  const helpersDir = path.join(testsDir, 'helpers');
  if (fs.existsSync(helpersDir)) {
    const helperFiles = fs.readdirSync(helpersDir)
      .filter(file => file.endsWith('.js'))
      .map(file => path.join(helpersDir, file));
    
    files.push(...helperFiles);
  }
  
  return files;
}

function validateTestMigration() {
  logSection('VALIDATING TEST MIGRATION');
  
  const testFiles = findTestFiles();
  let issuesFound = 0;
  
  for (const filePath of testFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for remaining old patterns
    const problematicPatterns = [
      /\.data\.tokens(?!\.)/g,  // .data.tokens not followed by more dots
      /\.data\.user(?!\.)/g,    // .data.user not followed by more dots
      /Array\.isArray\([^)]+\.data\)(?![^)]*\.data)/g  // Array.isArray(x.data) not x.data.data
    ];
    
    for (const pattern of problematicPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        logWarning(`${path.basename(filePath)}: Found ${matches.length} potential issues`);
        matches.forEach(match => {
          logWarning(`  - ${match}`);
        });
        issuesFound++;
      }
    }
  }
  
  if (issuesFound === 0) {
    logSuccess('✅ All tests appear to be using new i18n response format');
  } else {
    logWarning(`⚠  Found ${issuesFound} potential issues that need manual review`);
  }
  
  return issuesFound;
}

async function main() {
  logSection('🔄 E2E TESTS MIGRATION TO i18n FORMAT');
  
  const testFiles = findTestFiles();
  logInfo(`Found ${testFiles.length} test files to migrate`);
  logInfo('Files:');
  testFiles.forEach(file => logInfo(`  - ${path.basename(file)}`));
  
  let totalChanges = 0;
  
  for (const filePath of testFiles) {
    const changes = migrateTestFile(filePath);
    totalChanges += changes;
  }
  
  logSection('📊 MIGRATION SUMMARY');
  logInfo(`Total files processed: ${testFiles.length}`);
  logInfo(`Total changes made: ${totalChanges}`);
  
  if (totalChanges > 0) {
    logSuccess('✅ Migration completed successfully!');
    logInfo('The following files were updated:');
    testFiles.forEach(file => logInfo(`  - ${path.basename(file)}`));
  } else {
    logInfo('ℹ  No migration needed - all tests already use i18n format');
  }
  
  // Validate the migration
  const issues = validateTestMigration();
  
  if (issues === 0) {
    logSection('🎉 MIGRATION COMPLETE');
    logSuccess('All tests have been successfully migrated to i18n format!');
    logInfo('Next steps:');
    logInfo('1. Run individual test suites to verify functionality');
    logInfo('2. Run full validation: npm run test:e2e:validate-all');
    logInfo('3. Review any remaining manual adjustments needed');
  } else {
    logSection('⚠️  MANUAL REVIEW NEEDED');
    logWarning('Some patterns need manual review and correction');
    logInfo('Please check the files mentioned above and make necessary adjustments');
  }
}

if (require.main === module) {
  main().catch(error => {
    logError(`Migration failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { migrateTestFile, findTestFiles, validateTestMigration }; 