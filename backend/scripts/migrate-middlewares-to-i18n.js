#!/usr/bin/env node

/**
 * Script to migrate all middleware files to use i18n response format
 * Converts old response formats to new standardized i18n format in middlewares
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

// Middleware-specific migration patterns
const MIDDLEWARE_PATTERNS = [
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
  
  // res.status(500).json() -> res.serverError()
  {
    name: 'res.status(500).json() to res.serverError()',
    pattern: /res\.status\(500\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'res.serverError(\'$1\')'
  },
  
  // Complex 401 patterns
  {
    name: 'Complex 401 patterns',
    pattern: /return res\.status\(401\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'return res.unauthorized(\'$1\')'
  },
  
  // Complex 403 patterns
  {
    name: 'Complex 403 patterns',
    pattern: /return res\.status\(403\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'return res.forbidden(\'$1\')'
  },
  
  // Complex 500 patterns
  {
    name: 'Complex 500 patterns',
    pattern: /return res\.status\(500\)\.json\(\s*\{\s*error:\s*['"]([^'"]+)['"]\s*\}\s*\)/g,
    replacement: 'return res.serverError(\'$1\')'
  }
];

function migrateMiddlewareFile(filePath) {
  logInfo(`Processing: ${path.basename(filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changes = 0;
  let changesDetail = [];
  
  for (const pattern of MIDDLEWARE_PATTERNS) {
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

function findMiddlewareFiles() {
  const middlewaresDir = path.join(__dirname, '..', 'middlewares');
  const files = [];
  
  // Get all JS files in middlewares directory
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath); // Recursive for subdirectories
      } else if (item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(middlewaresDir);
  return files;
}

async function main() {
  logSection('🔄 MIDDLEWARE MIGRATION TO i18n FORMAT');
  
  const middlewareFiles = findMiddlewareFiles();
  logInfo(`Found ${middlewareFiles.length} middleware files to migrate`);
  logInfo('Files:');
  middlewareFiles.forEach(file => logInfo(`  - ${path.relative(process.cwd(), file)}`));
  
  let totalChanges = 0;
  
  for (const filePath of middlewareFiles) {
    const changes = migrateMiddlewareFile(filePath);
    totalChanges += changes;
  }
  
  logSection('📊 MIGRATION SUMMARY');
  logInfo(`Total files processed: ${middlewareFiles.length}`);
  logInfo(`Total changes made: ${totalChanges}`);
  
  if (totalChanges > 0) {
    logSuccess('✅ Middleware migration completed successfully!');
    logInfo('The following files were updated:');
    middlewareFiles.forEach(file => logInfo(`  - ${path.basename(file)}`));
  } else {
    logInfo('ℹ  No migration needed - all middlewares already use i18n format');
  }
  
  logSection('🎉 MIDDLEWARE MIGRATION COMPLETE');
  logSuccess('All middlewares have been migrated to i18n format!');
  logInfo('Next steps:');
  logInfo('1. Test the i18n suite: npm run test:e2e:i18n');
  logInfo('2. Run all E2E suites: npm run test:e2e:validate-all');
  logInfo('3. Verify functionality across all endpoints');
}

if (require.main === module) {
  main().catch(error => {
    logError(`Migration failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { migrateMiddlewareFile, findMiddlewareFiles }; 