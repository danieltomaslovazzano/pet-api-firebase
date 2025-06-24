#!/usr/bin/env node

/**
 * Comprehensive E2E Test Suite Validator
 * Executes all E2E test suites individually to ensure i18n implementation 
 * hasn't broken any existing functionality before production deployment
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Colors for console output
const COLORS = {
  RESET: '\x1b[0m',
  BRIGHT: '\x1b[1m',
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  MAGENTA: '\x1b[35m',
  CYAN: '\x1b[36m',
  WHITE: '\x1b[37m'
};

function colorize(color, text) {
  return `${COLORS[color]}${text}${COLORS.RESET}`;
}

function logSection(title) {
  console.log('\n' + '═'.repeat(80));
  console.log(colorize('CYAN', colorize('BRIGHT', `  ${title}`)));
  console.log('═'.repeat(80));
}

function logSubSection(title) {
  console.log('\n' + '─'.repeat(60));
  console.log(colorize('MAGENTA', colorize('BRIGHT', `  ${title}`)));
  console.log('─'.repeat(60));
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

// Test suites configuration (matching run-e2e-dev.js)
const TEST_SUITES = [
  { name: 'auth', file: 'auth/auth.e2e.js', description: 'Authentication and authorization' },
  { name: 'users', file: 'users/users.e2e.js', description: 'User management' },
  { name: 'organizations', file: 'organizations/organizations.e2e.js', description: 'Organization management' },
  { name: 'organization-types', file: 'organization-types/organization-types.e2e.js', description: 'Organization types' },
  { name: 'organization-types-integration', file: 'organization-types/organization-types-integration.e2e.js', description: 'Organization types integration' },
  
  // Memberships modules
  { name: 'memberships-index', file: 'memberships/index.e2e.js', description: 'Memberships coordinator' },
  { name: 'membership-invitations', file: 'memberships/membership-invitations.e2e.js', description: 'Membership invitations' },
  { name: 'membership-retrieval', file: 'memberships/membership-retrieval.e2e.js', description: 'Membership retrieval' },
  { name: 'membership-details', file: 'memberships/membership-details.e2e.js', description: 'Membership details' },
  { name: 'membership-roles', file: 'memberships/membership-roles.e2e.js', description: 'Membership roles' },
  { name: 'membership-removal', file: 'memberships/membership-removal.e2e.js', description: 'Membership removal' },
  { name: 'membership-access-control', file: 'memberships/membership-access-control.e2e.js', description: 'Membership access control' },
  
  // Pets modules
  { name: 'pets-index', file: 'pets/index.e2e.js', description: 'Pets coordinator' },
  { name: 'pet-creation', file: 'pets/pet-creation.e2e.js', description: 'Pet creation' },
  { name: 'pet-permissions', file: 'pets/pet-permissions.e2e.js', description: 'Pet permissions' },
  { name: 'pet-visibility', file: 'pets/pet-visibility.e2e.js', description: 'Pet visibility' },
  
  // Conversations modules
  { name: 'conversations-index', file: 'conversations/index.e2e.js', description: 'Conversations coordinator' },
  { name: 'conversation-creation', file: 'conversations/conversation-creation.e2e.js', description: 'Conversation creation' },
  { name: 'conversation-retrieval', file: 'conversations/conversation-retrieval.e2e.js', description: 'Conversation retrieval' },
  { name: 'conversation-management', file: 'conversations/conversation-management.e2e.js', description: 'Conversation management' },
  { name: 'conversation-admin', file: 'conversations/conversation-admin.e2e.js', description: 'Conversation admin' },
  { name: 'conversation-multitenancy', file: 'conversations/conversation-multitenancy.e2e.js', description: 'Conversation multitenancy' },
  { name: 'conversation-edge-cases', file: 'conversations/conversation-edge-cases.e2e.js', description: 'Conversation edge cases' },
  
  // Messages modules
  { name: 'messages-index', file: 'messages/index.e2e.js', description: 'Messages coordinator' },
  { name: 'message-creation', file: 'messages/message-creation.e2e.js', description: 'Message creation' },
  { name: 'message-retrieval', file: 'messages/message-retrieval.e2e.js', description: 'Message retrieval' },
  { name: 'message-management', file: 'messages/message-management.e2e.js', description: 'Message management' },
  { name: 'message-admin', file: 'messages/message-admin.e2e.js', description: 'Message admin' },
  { name: 'message-multitenancy', file: 'messages/message-multitenancy.e2e.js', description: 'Message multitenancy' },
  { name: 'message-edge-cases', file: 'messages/message-edge-cases.e2e.js', description: 'Message edge cases' },
  
  { name: 'i18n', file: 'i18n/i18n-system.e2e.js', description: 'Internationalization system' }
];

class E2ETestValidator {
  constructor() {
    this.results = [];
    this.startTime = Date.now();
    this.totalSuites = TEST_SUITES.length;
    this.passedSuites = 0;
    this.failedSuites = 0;
  }

  async runSuite(suite) {
    return new Promise((resolve, reject) => {
      logSubSection(`Running ${suite.name.toUpperCase()} Suite`);
      logInfo(`Description: ${suite.description}`);
      logInfo(`Test file: ${suite.file}`);
      
      const startTime = Date.now();
      
      // Use the existing run-e2e-dev.js script
      const args = [path.join(__dirname, 'run-e2e-dev.js'), suite.name];
      
      const testProcess = spawn('node', args, {
        stdio: 'pipe',
        cwd: path.join(__dirname, '..'),
        env: {
          ...process.env,
          NODE_ENV: 'test'
        }
      });

      let stdout = '';
      let stderr = '';

      testProcess.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      testProcess.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      testProcess.on('close', (code) => {
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;
        
        const result = {
          suite: suite.name,
          description: suite.description,
          file: suite.file,
          success: code === 0,
          exitCode: code,
          duration: duration,
          stdout: stdout,
          stderr: stderr,
          timestamp: new Date().toISOString()
        };

        this.results.push(result);

        if (code === 0) {
          this.passedSuites++;
          logSuccess(`${suite.name} suite PASSED (${duration.toFixed(2)}s)`);
        } else {
          this.failedSuites++;
          logError(`${suite.name} suite FAILED with exit code ${code} (${duration.toFixed(2)}s)`);
          
          // Show error details for failed tests
          if (stderr) {
            console.log(colorize('RED', '\nError Output:'));
            console.log(colorize('RED', stderr.substring(0, 500))); // Limit output
            if (stderr.length > 500) {
              console.log(colorize('RED', '... (truncated)'));
            }
          }
        }

        resolve(result);
      });

      testProcess.on('error', (error) => {
        const result = {
          suite: suite.name,
          description: suite.description,
          file: suite.file,
          success: false,
          exitCode: -1,
          duration: 0,
          stdout: '',
          stderr: error.message,
          timestamp: new Date().toISOString(),
          error: error.message
        };

        this.results.push(result);
        this.failedSuites++;
        
        logError(`${suite.name} suite ERROR: ${error.message}`);
        reject(error);
      });
    });
  }

  async runAllSuites() {
    logSection('🚀 COMPREHENSIVE E2E SUITE VALIDATION');
    logInfo('Validating that i18n implementation hasn\'t broken existing functionality');
    logInfo(`Total suites to test: ${this.totalSuites}`);
    
    for (let i = 0; i < TEST_SUITES.length; i++) {
      const suite = TEST_SUITES[i];
      const progress = `[${i + 1}/${this.totalSuites}]`;
      
      try {
        logInfo(`${progress} Starting ${suite.name} suite...`);
        await this.runSuite(suite);
      } catch (error) {
        logError(`${progress} Failed to run ${suite.name} suite: ${error.message}`);
      }
      
      // Add a small delay between suites to avoid overwhelming the system
      if (i < TEST_SUITES.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  generateReport() {
    const totalTime = (Date.now() - this.startTime) / 1000;
    
    logSection('📊 COMPREHENSIVE TEST RESULTS');
    
    // Summary statistics
    console.log(colorize('WHITE', colorize('BRIGHT', '\n📈 SUMMARY STATISTICS')));
    console.log(colorize('BLUE', `Total Suites:     ${this.totalSuites}`));
    console.log(colorize('GREEN', `Passed Suites:    ${this.passedSuites}`));
    console.log(colorize('RED', `Failed Suites:    ${this.failedSuites}`));
    console.log(colorize('CYAN', `Success Rate:     ${((this.passedSuites / this.totalSuites) * 100).toFixed(1)}%`));
    console.log(colorize('MAGENTA', `Total Duration:   ${totalTime.toFixed(2)}s`));
    
    // Detailed results
    console.log(colorize('WHITE', colorize('BRIGHT', '\n📋 DETAILED RESULTS')));
    
    this.results.forEach((result, index) => {
      const status = result.success ? colorize('GREEN', 'PASS') : colorize('RED', 'FAIL');
      const duration = colorize('CYAN', `${result.duration.toFixed(2)}s`);
      
      console.log(`${index + 1}.  ${status} ${result.suite.padEnd(25)} ${duration} - ${result.description}`);
    });
    
    // Failed suites details
    const failedSuites = this.results.filter(r => !r.success);
    if (failedSuites.length > 0) {
      console.log(colorize('RED', colorize('BRIGHT', '\n❌ FAILED SUITES ANALYSIS')));
      
      failedSuites.forEach(result => {
        console.log(colorize('RED', `\n🔸 ${result.suite.toUpperCase()} (${result.file})`));
        console.log(colorize('RED', `   Exit Code: ${result.exitCode}`));
        console.log(colorize('RED', `   Duration: ${result.duration.toFixed(2)}s`));
        if (result.error) {
          console.log(colorize('RED', `   Error: ${result.error}`));
        }
      });
      
      console.log(colorize('YELLOW', '\n💡 RECOMMENDATIONS FOR FAILED SUITES:'));
      console.log(colorize('YELLOW', '   1. Check if i18n middleware affects these endpoints'));
      console.log(colorize('YELLOW', '   2. Verify that response formats haven\'t changed'));
      console.log(colorize('YELLOW', '   3. Review test expectations for new response structure'));
      console.log(colorize('YELLOW', '   4. Check detailed logs in tests/e2e/reports/[suite-name].e2e/'));
    }
    
    // i18n specific validation
    const i18nResult = this.results.find(r => r.suite === 'i18n');
    if (i18nResult) {
      console.log(colorize('CYAN', colorize('BRIGHT', '\n🌍 i18n SYSTEM VALIDATION')));
      
      if (i18nResult.success) {
        console.log(colorize('GREEN', '✓ i18n system tests passed successfully'));
        console.log(colorize('GREEN', '✓ Internationalization features working correctly'));
        console.log(colorize('GREEN', '✓ Language detection and translation functional'));
      } else {
        console.log(colorize('RED', '✗ i18n system tests failed'));
        console.log(colorize('RED', '✗ Critical: i18n implementation has issues'));
      }
    }
    
    // Production readiness assessment
    console.log(colorize('WHITE', colorize('BRIGHT', '\n🎯 PRODUCTION READINESS ASSESSMENT')));
    
    if (this.failedSuites === 0) {
      console.log(colorize('GREEN', '🎉 ALL TESTS PASSED - READY FOR PRODUCTION'));
      console.log(colorize('GREEN', '✓ No existing functionality was broken by i18n implementation'));
      console.log(colorize('GREEN', '✓ All E2E test suites are working correctly'));
      console.log(colorize('GREEN', '✓ System is stable and production-ready'));
    } else if (this.failedSuites <= 2) {
      console.log(colorize('YELLOW', '⚠️  MINOR ISSUES DETECTED - REVIEW RECOMMENDED'));
      console.log(colorize('YELLOW', '⚠️  Some test suites failed but system may be deployable'));
      console.log(colorize('YELLOW', '⚠️  Review failed suites and assess impact'));
    } else {
      console.log(colorize('RED', '🚨 MAJOR ISSUES DETECTED - DO NOT DEPLOY'));
      console.log(colorize('RED', '🚨 Multiple test suites failed'));
      console.log(colorize('RED', '🚨 i18n implementation may have broken existing functionality'));
      console.log(colorize('RED', '🚨 Fix issues before considering production deployment'));
    }
  }

  saveReport() {
    const reportDir = path.join(__dirname, '..', 'tests', 'e2e', 'reports', 'validation');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    const reportFile = path.join(reportDir, 'e2e-validation-report.json');
    const summaryFile = path.join(reportDir, 'e2e-validation-summary.txt');

    // Save JSON report
    const reportData = {
      timestamp: new Date().toISOString(),
      totalSuites: this.totalSuites,
      passedSuites: this.passedSuites,
      failedSuites: this.failedSuites,
      successRate: ((this.passedSuites / this.totalSuites) * 100).toFixed(1),
      totalDuration: ((Date.now() - this.startTime) / 1000).toFixed(2),
      results: this.results,
      productionReady: this.failedSuites === 0
    };

    fs.writeFileSync(reportFile, JSON.stringify(reportData, null, 2));
    
    // Save text summary
    const summary = [
      'E2E TEST SUITE VALIDATION SUMMARY',
      '==================================',
      `Timestamp: ${reportData.timestamp}`,
      `Total Suites: ${reportData.totalSuites}`,
      `Passed: ${reportData.passedSuites}`,
      `Failed: ${reportData.failedSuites}`,
      `Success Rate: ${reportData.successRate}%`,
      `Duration: ${reportData.totalDuration}s`,
      `Production Ready: ${reportData.productionReady ? 'YES' : 'NO'}`,
      '',
      'DETAILED RESULTS:',
      ...this.results.map(r => `${r.success ? 'PASS' : 'FAIL'} ${r.suite} (${r.duration.toFixed(2)}s)`)
    ].join('\n');

    fs.writeFileSync(summaryFile, summary);
    
    logInfo(`Detailed report saved: ${reportFile}`);
    logInfo(`Summary saved: ${summaryFile}`);
  }

  async run() {
    try {
      await this.runAllSuites();
      this.generateReport();
      this.saveReport();
      
      // Exit with appropriate code
      if (this.failedSuites === 0) {
        process.exit(0);
      } else {
        process.exit(1);
      }
      
    } catch (error) {
      logError(`Validation failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Handle script execution
if (require.main === module) {
  const validator = new E2ETestValidator();
  validator.run();
}

module.exports = E2ETestValidator; 