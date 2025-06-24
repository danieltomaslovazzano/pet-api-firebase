#!/usr/bin/env node

/**
 * Script to Apply Enhanced Reporting to All E2E Test Suites
 * 
 * This script automatically updates all E2E test suites to use the correct
 * Enhanced Reporter pattern with Jest integration for accurate test result reporting.
 * 
 * Usage: node scripts/apply-enhanced-reporting-to-all-suites.js
 */

const fs = require('fs');
const path = require('path');

const COLORS = {
  RESET: '\x1b[0m',
  BRIGHT: '\x1b[1m',
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  CYAN: '\x1b[36m'
};

function log(color, message) {
  console.log(`${COLORS[color]}${message}${COLORS.RESET}`);
}

// Test suites that need to be updated
const E2E_SUITES = [
  { file: 'auth.e2e.js', name: 'auth', desc: 'Authentication system' },
  { file: 'users.e2e.js', name: 'users', desc: 'User management' },
  { file: 'organizations.e2e.js', name: 'organizations', desc: 'Organization management' },
  { file: 'organization-types.e2e.js', name: 'organization-types', desc: 'Organization types' },
  { file: 'organization-types-integration.e2e.js', name: 'organization-types-integration', desc: 'Organization types integration' },
  { file: 'memberships.e2e.js', name: 'memberships', desc: 'Membership management' },
  { file: 'pets.e2e.js', name: 'pets', desc: 'Pet management' },
  { file: 'conversations.e2e.js', name: 'conversations', desc: 'Conversation system' },
  { file: 'messages.e2e.js', name: 'messages', desc: 'Message system' },
  { file: 'i18n-system.e2e.js', name: 'i18n', desc: 'Internationalization system' }
];

class EnhancedReportingApplier {
  constructor() {
    this.testsDir = path.join(__dirname, '..', 'tests', 'e2e');
    this.updated = 0;
    this.skipped = 0;
    this.errors = 0;
  }

  /**
   * Generate the correct Enhanced Reporter pattern
   */
  generateReporterPattern(suiteName, testName) {
    const afterEachPattern = `  afterEach(() => {
    // Get the real test result from Jest custom reporter
    const testName = expect.getState().currentTestName;
    const jestResult = global.__JEST_TEST_RESULTS__ && global.__JEST_TEST_RESULTS__[testName];
    
    let status = 'PASSED';
    let error = null;
    
    if (jestResult) {
      status = jestResult.status;
      error = jestResult.error;
      console.log('[ENHANCED REPORTER] Using Jest result for "' + testName + '": ' + status);
    } else {
      console.log('[ENHANCED REPORTER] No Jest result found for "' + testName + '", defaulting to PASSED');
    }
    
    reporter.endTest(status, error);
  });`;

    const afterAllSyncPattern = `      // Wait a moment for Jest reporter to finish processing
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Sync Enhanced Reporter test results with real Jest results
      reporter.syncWithJestResults();`;

    return {
      beforeEach: `  beforeEach(() => {
    // Get current test name from Jest
    const testName = expect.getState().currentTestName || 'unknown test';
    reporter.startTest(testName);
  });`,
      
      afterEach: afterEachPattern,
      afterAllSyncPattern: afterAllSyncPattern
    };
  }

  /**
   * Check if a file already has the correct Enhanced Reporter pattern
   */
  hasCorrectPattern(content) {
    const hasJestResults = content.includes('global.__JEST_TEST_RESULTS__');
    const hasAfterEachSync = content.includes('jestResult.status');
    const hasConsoleLog = content.includes('[ENHANCED REPORTER] Using Jest result');
    
    return hasJestResults && hasAfterEachSync && hasConsoleLog;
  }

  /**
   * Apply Enhanced Reporter pattern to a test suite file
   */
  applyEnhancedReporter(suite) {
    const filePath = path.join(this.testsDir, suite.file);
    
    if (!fs.existsSync(filePath)) {
      log('YELLOW', `⚠️  File not found: ${suite.file}`);
      this.skipped++;
      return;
    }

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if already has correct pattern
      if (this.hasCorrectPattern(content)) {
        log('CYAN', `✓ ${suite.file} already has correct Enhanced Reporter pattern`);
        this.skipped++;
        return;
      }

      const patterns = this.generateReporterPattern(suite.name, `${suite.name}-tests`);
      let modified = false;

      // 1. Update afterEach to use Jest results
      const afterEachRegex = /afterEach\s*\(\s*\(\s*\)\s*=>\s*\{[\s\S]*?\}\s*\);/g;
      if (content.match(afterEachRegex)) {
        content = content.replace(afterEachRegex, patterns.afterEach);
        modified = true;
        log('GREEN', `  ✓ Updated afterEach pattern in ${suite.file}`);
      }

      // 2. Add Jest result sync to afterAll if it has one
      const afterAllMatch = content.match(/(afterAll\s*\(\s*async\s*\(\s*\)\s*=>\s*\{[\s\S]*?)(console\.log\(['"`][^'"`]*Cleaning up test data[^'"`]*['"`]\);)([\s\S]*?\}\s*\);)/);
      if (afterAllMatch && !content.includes('Syncing Enhanced Reporter with Jest results')) {
        const beforeCleanup = afterAllMatch[1];
        const cleanupLog = afterAllMatch[2];
        const afterCleanup = afterAllMatch[3];
        
        const newAfterAll = beforeCleanup + cleanupLog + `
      
      ${patterns.afterAllSyncPattern}
      ` + afterCleanup;
        
        content = content.replace(afterAllMatch[0], newAfterAll);
        modified = true;
        log('GREEN', `  ✓ Added Jest result sync to afterAll in ${suite.file}`);
      }

      // 3. Ensure correct EnhancedReporter import and initialization
      if (!content.includes('const { EnhancedReporter } = require(\'./helpers/report\');')) {
        // Find where to add the import
        const importMatch = content.match(/(const.*require\(['"]\.\S*['"]?\);)/);
        if (importMatch) {
          const lastImport = importMatch[0];
          content = content.replace(lastImport, lastImport + '\nconst { EnhancedReporter } = require(\'./helpers/report\');');
          modified = true;
          log('GREEN', `  ✓ Added EnhancedReporter import to ${suite.file}`);
        }
      }

      // 4. Ensure reporter initialization
      if (!content.includes('new EnhancedReporter(')) {
        const reporterInit = `\n// Initialize Enhanced Reporter\nconst reporter = new EnhancedReporter('${suite.name}', '${suite.name}-tests');\n`;
        
        // Find where to add the reporter initialization (after imports, before describe)
        const describeMatch = content.match(/(describe\s*\(\s*['"])/);
        if (describeMatch) {
          const describeIndex = content.indexOf(describeMatch[0]);
          content = content.slice(0, describeIndex) + reporterInit + content.slice(describeIndex);
          modified = true;
          log('GREEN', `  ✓ Added EnhancedReporter initialization to ${suite.file}`);
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        log('GREEN', `✅ Successfully updated ${suite.file}`);
        this.updated++;
      } else {
        log('CYAN', `ℹ️  No changes needed for ${suite.file}`);
        this.skipped++;
      }

    } catch (error) {
      log('RED', `❌ Error processing ${suite.file}: ${error.message}`);
      this.errors++;
    }
  }

  /**
   * Run the application process
   */
  async run() {
    log('BRIGHT', '🚀 Applying Enhanced Reporting to All E2E Test Suites');
    log('BLUE', '===========================================================');
    
    log('CYAN', `Found ${E2E_SUITES.length} test suites to process:`);
    E2E_SUITES.forEach(suite => {
      log('CYAN', `  - ${suite.file} (${suite.desc})`);
    });
    
    log('BLUE', '\n📝 Processing test suites...\n');
    
    for (const suite of E2E_SUITES) {
      log('YELLOW', `Processing ${suite.file}...`);
      this.applyEnhancedReporter(suite);
    }

    log('BLUE', '\n===========================================================');
    log('BRIGHT', '📊 Summary:');
    log('GREEN', `  ✅ Updated: ${this.updated} files`);
    log('CYAN', `  ⏭️  Skipped: ${this.skipped} files`);
    log('RED', `  ❌ Errors: ${this.errors} files`);
    
    if (this.errors === 0) {
      log('GREEN', '\n🎉 All test suites have been successfully updated with Enhanced Reporting!');
      log('CYAN', '\nNext steps:');
      log('CYAN', '1. Run individual test suites to verify Enhanced Reporter is working');
      log('CYAN', '2. Check that test results are accurately reflected in reports');
      log('CYAN', '3. Enhanced Reporter will now show correct PASSED/FAILED status');
    } else {
      log('RED', '\n⚠️  Some files had errors. Please review the output above.');
    }
  }
}

// Run the script
if (require.main === module) {
  const applier = new EnhancedReportingApplier();
  applier.run().catch(error => {
    console.error('Script failed:', error.message);
    process.exit(1);
  });
}

module.exports = EnhancedReportingApplier; 