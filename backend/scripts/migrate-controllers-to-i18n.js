#!/usr/bin/env node

/**
 * Script to migrate all controllers to use i18n response format
 * Converts old response formats to new standardized i18n format
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

// Patterns to find and replace
const MIGRATION_PATTERNS = [
  // res.status(200).json() -> res.data()
  {
    name: 'res.status(200).json() to res.data()',
    pattern: /res\.status\(200\)\.json\(([^)]+)\)/g,
    replacement: 'res.data($1)'
  },
  
  // res.status(201).json() -> res.created()
  {
    name: 'res.status(201).json() to res.created()',
    pattern: /res\.status\(201\)\.json\(([^)]+)\)/g,
    replacement: 'res.created(\'common.created\', $1)'
  },
  
  // res.status(404).json() -> res.notFound()
  {
    name: 'res.status(404).json() to res.notFound()',
    pattern: /res\.status\(404\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'res.notFound(\'$1\')'
  },
  
  // res.status(400).json() -> res.error()
  {
    name: 'res.status(400).json() to res.error()',
    pattern: /res\.status\(400\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'res.error(\'$1\', 400)'
  },
  
  // res.status(401).json() -> res.unauthorized()
  {
    name: 'res.status(401).json() to res.unauthorized()',
    pattern: /res\.status\(401\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'res.unauthorized(\'$1\')'
  },
  
  // res.status(403).json() -> res.forbidden()
  {
    name: 'res.status(403).json() to res.forbidden()',
    pattern: /res\.status\(403\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'res.forbidden(\'$1\')'
  },
  
  // res.status(500).json() -> res.serverError()
  {
    name: 'res.status(500).json() to res.serverError()',
    pattern: /res\.status\(500\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'res.serverError(\'$1\')'
  },
  
  // Simple res.json() -> res.data() (be careful with this one)
  {
    name: 'simple res.json() to res.data()',
    pattern: /res\.json\(([^)]+)\)(?![^}]*success|error|message)/g,
    replacement: 'res.data($1)'
  }
];

function migrateFile(filePath) {
  logInfo(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changes = 0;
  let changesDetail = [];
  
  for (const pattern of MIGRATION_PATTERNS) {
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

function findControllerFiles() {
  const controllersDir = path.join(__dirname, '..', 'controllers');
  const files = fs.readdirSync(controllersDir)
    .filter(file => file.endsWith('.js'))
    .map(file => path.join(controllersDir, file));
  
  return files;
}

function validateMigration() {
  logSection('VALIDATING MIGRATION');
  
  const controllerFiles = findControllerFiles();
  let issuesFound = 0;
  
  for (const filePath of controllerFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for remaining old patterns
    const problematicPatterns = [
      /res\.status\(\d+\)\.json\(/g,
      /res\.json\([^)]*\{[^}]*error:/g
    ];
    
    for (const pattern of problematicPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        logWarning(`${path.basename(filePath)}: Found ${matches.length} potential issues`);
        matches.forEach(match => {
          logWarning(`  - ${match.substring(0, 50)}...`);
        });
        issuesFound++;
      }
    }
  }
  
  if (issuesFound === 0) {
    logSuccess('✅ All controllers appear to be using i18n response format');
  } else {
    logWarning(`⚠  Found ${issuesFound} potential issues that need manual review`);
  }
  
  return issuesFound;
}

async function main() {
  logSection('🔄 CONTROLLER MIGRATION TO i18n FORMAT');
  
  const controllerFiles = findControllerFiles();
  logInfo(`Found ${controllerFiles.length} controller files to migrate`);
  
  let totalChanges = 0;
  
  for (const filePath of controllerFiles) {
    const changes = migrateFile(filePath);
    totalChanges += changes;
  }
  
  logSection('📊 MIGRATION SUMMARY');
  logInfo(`Total files processed: ${controllerFiles.length}`);
  logInfo(`Total changes made: ${totalChanges}`);
  
  if (totalChanges > 0) {
    logSuccess('✅ Migration completed successfully!');
    logInfo('The following files were updated:');
    controllerFiles.forEach(file => logInfo(`  - ${path.basename(file)}`));
  } else {
    logInfo('ℹ  No migration needed - all controllers already use i18n format');
  }
  
  // Validate the migration
  const issues = validateMigration();
  
  if (issues === 0) {
    logSection('🎉 MIGRATION COMPLETE');
    logSuccess('All controllers have been successfully migrated to i18n format!');
    logInfo('Next steps:');
    logInfo('1. Run tests to verify functionality: npm run test:e2e:validate-all');
    logInfo('2. Review any manual changes that might be needed');
    logInfo('3. Update any remaining custom response formats');
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

module.exports = { migrateFile, findControllerFiles, validateMigration }; 