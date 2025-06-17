const fs = require('fs');
const path = require('path');

function getTimestamp() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}-${hh}${min}`;
}

// Jest results capture mechanism
class JestResultsCapture {
  constructor() {
    this.testResults = [];
    this.suiteResults = null;
    this.setupJestHooks();
  }

  setupJestHooks() {
    // Hook into Jest's global test functions
    const originalTest = global.test;
    const originalIt = global.it;
    
    const wrapTestFunction = (originalFn, testName) => {
      return (...args) => {
        const [name, testFn, timeout] = args;
        const fullTestName = testName ? `${testName} ${name}` : name;
        
        const wrappedTestFn = async () => {
          const startTime = Date.now();
          let status = 'PASSED';
          let error = null;
          
          try {
            await testFn();
          } catch (err) {
            status = 'FAILED';
            error = err.message;
            throw err; // Re-throw to maintain Jest behavior
          } finally {
            const duration = Date.now() - startTime;
            this.testResults.push({
              name: fullTestName,
              status,
              duration,
              error,
              startTime: new Date(startTime).toISOString()
            });
          }
        };
        
        return originalFn(name, wrappedTestFn, timeout);
      };
    };
    
    global.test = wrapTestFunction(originalTest);
    global.it = wrapTestFunction(originalIt);
  }

  getResults() {
    return {
      tests: this.testResults,
      summary: {
        total: this.testResults.length,
        passed: this.testResults.filter(t => t.status === 'PASSED').length,
        failed: this.testResults.filter(t => t.status === 'FAILED').length
      }
    };
  }
}

// Global Jest results capture instance
const jestCapture = new JestResultsCapture();

class EnhancedReporter {
  constructor(group, testName) {
    this.group = group;
    this.testName = testName;
    this.testResults = [];
    this.currentTest = null;
    
    // Legacy format sections
    this.payloads = '';
    this.responses = '';
    this.curls = '';
    this.status = '';
    
    // Statistics
    this.passedTests = 0;
    this.failedTests = 0;
    this.startTime = Date.now();
    
    // Console method storage for restoration
    this.originalConsoleLog = console.log;
    this.originalConsoleWarn = console.warn;
    this.originalConsoleError = console.error;
    
    // Clear any previous HTTP logs for fresh start
    this.clearHttpLogs();
    
    // Set up Jest hooks for automatic test capture
    const jestCapture = new JestResultsCapture();
    jestCapture.setupJestHooks();
    this.jestCapture = jestCapture;
    
    console.log(`[ENHANCED REPORTER] 🚀 Initialized for ${group}/${testName}`);
  }

  /**
   * Clear global HTTP logs to avoid cross-contamination between test runs
   */
  clearHttpLogs() {
    global.__E2E_REQUEST_LOGS__ = [];
    console.log('[ENHANCED REPORTER] 🧹 Cleared HTTP logs for fresh test run');
  }

  startTest(testName, description = '') {
    this.currentTest = {
      name: testName,
      description,
      status: 'RUNNING',
      startTime: Date.now(),
      duration: 0,
      requests: [],
      responses: [],
      consoleOutput: [],
      error: null
    };
  }

  /**
   * Find a test result by matching test names more flexibly
   */
  findTestResult(testName, jestResults) {
    if (!jestResults) return null;
    
    // Try exact match first
    if (jestResults[testName]) {
      return jestResults[testName];
    }
    
    // Extract the actual test name from the full Jest test name
    // Jest test names are like: "Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation"
    // We want to match just: "Should create a message in a conversation"
    
    // Find the last "Should" in our test name
    const shouldIndex = testName.lastIndexOf('Should');
    if (shouldIndex !== -1) {
      const shortTestName = testName.substring(shouldIndex);
      
      // Search through all Jest results for a match
      for (const [jestTestName, jestResult] of Object.entries(jestResults)) {
        // Check if Jest test name ends with our short test name
        if (jestTestName.endsWith(shortTestName)) {
          console.log(`[ENHANCED REPORTER] 🔍 Found match: "${shortTestName}" -> "${jestTestName}"`);
          return jestResult;
        }
        
        // Also check if they contain the same "Should" part exactly
        const jestShouldIndex = jestTestName.lastIndexOf('Should');
        if (jestShouldIndex !== -1) {
          const jestShortName = jestTestName.substring(jestShouldIndex);
          if (jestShortName === shortTestName) {
            console.log(`[ENHANCED REPORTER] 🔍 Found exact should match: "${shortTestName}"`);
            return jestResult;
          }
        }
      }
    }
    
    // Fallback: Try finding by partial match of the test name
    const cleanTestName = testName.replace(/Messages E2E Tests - Comprehensive Test Suite \(28 tests\)\s*/, '');
    for (const [jestTestName, jestResult] of Object.entries(jestResults)) {
      if (jestTestName.includes(cleanTestName) || cleanTestName.includes(jestTestName)) {
        console.log(`[ENHANCED REPORTER] 🔍 Found partial match: "${cleanTestName}" -> "${jestTestName}"`);
        return jestResult;
      }
    }
    
    return null;
  }

  endTest(status = 'PASSED', error = null) {
    if (this.currentTest) {
      this.currentTest.endTime = Date.now();
      this.currentTest.duration = this.currentTest.endTime - this.currentTest.startTime;
      this.currentTest.status = status;
      if (error) {
        this.currentTest.error = error;
      }
      
      // Store the test but don't process Jest results yet (they come later)
      this.testResults.push(this.currentTest);
      this.currentTest = null;
      
      console.log(`[ENHANCED REPORTER] ⏳ Test recorded, will sync with Jest results later: ${status}`);
    }
  }

  /**
   * Get Jest results from our capture mechanism
   */
  getJestResults() {
    const results = jestCapture.getResults();
    console.log(`[ENHANCED REPORTER] 📊 Captured ${results.tests.length} Jest test results`);
    return results;
  }

  /**
   * Sync all test results with Jest results after Jest completes
   */
  syncWithJestResults() {
    const jestResults = this.getJestResults();
    
    if (!jestResults || jestResults.tests.length === 0) {
      console.log('[ENHANCED REPORTER] ⚠️  No Jest results available for sync');
      // Mark all PENDING tests as UNKNOWN if Jest results are not available
      this.testResults.forEach(test => {
        if (test.status === 'PENDING') {
          test.status = 'UNKNOWN';
        }
      });
      return jestResults;
    }
    
    console.log('[ENHANCED REPORTER] 🔄 Starting sync with Jest results...');
    
    // If we have no manual test results, use Jest results directly
    if (this.testResults.length === 0) {
      console.log('[ENHANCED REPORTER] 📋 No manual test results, using Jest results directly');
      this.testResults = jestResults.tests.map(test => ({
        name: test.name,
        status: test.status,
        duration: test.duration,
        error: test.error,
        startTime: test.startTime,
        requests: [],
        responses: [],
        consoleOutput: []
      }));
      return jestResults;
    }
    
    let synced = 0;
    let failed = 0;
    let passed = 0;
    let pending = 0;
    
    this.testResults.forEach(test => {
      const jestResult = this.findTestResult(test.name, jestResults.tests);
      
      if (jestResult) {
        const originalStatus = test.status;
        test.status = jestResult.status;
        if (jestResult.error) {
          test.error = jestResult.error;
        }
        synced++;
        console.log(`[ENHANCED REPORTER] ✅ Synced "${test.name}": ${originalStatus} → ${jestResult.status}`);
      } else {
        // If test was PENDING and we still can't find Jest result, mark as UNKNOWN
        if (test.status === 'PENDING') {
          test.status = 'UNKNOWN';
          console.log(`[ENHANCED REPORTER] ⚠️  No Jest match for "${test.name}", marked as UNKNOWN`);
        } else {
          console.log(`[ENHANCED REPORTER] ⚠️  No Jest match for "${test.name}", keeping original status: ${test.status}`);
        }
      }
      
      // Count final results
      if (test.status === 'FAILED') {
        failed++;
      } else if (test.status === 'PASSED') {
        passed++;
      } else {
        pending++;
      }
    });
    
    // Update final counts
    this.passedTests = passed;
    this.failedTests = failed;
    
    console.log(`[ENHANCED REPORTER] 📊 Sync complete: ${synced}/${this.testResults.length} tests synced`);
    console.log(`[ENHANCED REPORTER] 📊 Final results: ${passed} passed, ${failed} failed, ${pending} pending/unknown`);
    
    return jestResults;
  }

  addRequest(title, method, endpoint, headers = {}, data = null) {
    const request = {
      title,
      method,
      endpoint,
      headers,
      data,
      timestamp: new Date().toISOString()
    };
    
    if (this.currentTest) {
      this.currentTest.requests.push(request);
    }
    
    // Legacy format
    this.payloads += `\n### ${title}\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\`\n`;
  }

  addResponse(title, responseData, statusCode = null) {
    const response = {
      title,
      data: responseData,
      statusCode,
      timestamp: new Date().toISOString()
    };
    
    if (this.currentTest) {
      this.currentTest.responses.push(response);
    }
    
    // Legacy format
    this.responses += `\n### ${title}\n\`\`\`json\n${JSON.stringify(responseData, null, 2)}\n\`\`\`\n`;
  }

  addToReport(section, title, content) {
    this[section] += `\n### ${title}\n${content}\n`;
  }

  addCurlToReport(title, method, endpoint, headers = {}, data = null) {
    let curl = `curl -X ${method} "${endpoint}"`;
    Object.entries(headers).forEach(([key, value]) => {
      curl += ` -H "${key}: ${value}"`;
    });
    if (data) {
      curl += ` -d '${JSON.stringify(data)}'`;
    }
    this.curls += `\n### ${title}\n\`\`\`bash\n${curl}\n\`\`\`\n`;
  }

  generateTestSummaryTable() {
    if (this.testResults.length === 0) {
      return '| Test Case | Status | Duration | Description |\n|-----------|--------|----------|-------------|';
    }
    
    let table = '| Test Case | Status | Duration | Description |\n|-----------|--------|----------|-------------|';
    this.testResults.forEach(test => {
      const status = test.status === 'PASSED' ? '✅ PASSED' : 
                    test.status === 'FAILED' ? '❌ FAILED' : 
                    '⏳ PENDING';
      const duration = test.duration ? `${test.duration}ms` : 'N/A';
      const description = test.description || test.error || '';
      table += `\n| ${test.name} | ${status} | ${duration} | ${description} |`;
    });
    return table;
  }

  /**
   * Get HTTP logs for a specific test from global request logs
   */
  getHttpLogsForTest(testName) {
    if (!global.__E2E_REQUEST_LOGS__) {
      return [];
    }
    
    // Filter logs by test name and clean up test name variations
    return global.__E2E_REQUEST_LOGS__.filter(log => {
      if (!log.testName || log.testName === 'unknown') return false;
      
      // Clean up test names for comparison
      const logTestName = log.testName.toLowerCase().trim();
      const searchTestName = testName.toLowerCase().trim();
      
      // Exact match
      if (logTestName === searchTestName) return true;
      
      // Partial match (handles Jest's description variations)
      if (logTestName.includes(searchTestName) || searchTestName.includes(logTestName)) return true;
      
      return false;
    });
  }

  generateDetailedExecutionLog() {
    if (this.testResults.length === 0) {
      return '';
    }
    
    let log = '';
    this.testResults.forEach((test, index) => {
      const status = test.status === 'PASSED' ? '✅' : 
                    test.status === 'FAILED' ? '❌' : '⏳';
      
      log += `### ${status} Test ${index + 1}: ${test.name}\n\n`;
      log += `**Status:** ${test.status}\n`;
      log += `**Duration:** ${test.duration || 0}ms\n`;
      if (test.startTime) {
        log += `**Started:** ${test.startTime}\n`;
      }
      
      if (test.error) {
        log += `**Error:** ${test.error}\n`;
      }
      
      // Get HTTP requests for this test from global logs
      const httpLogs = this.getHttpLogsForTest(test.name);
      if (httpLogs && httpLogs.length > 0) {
        log += `\n#### 🌐 HTTP Requests & Responses\n\n`;
        httpLogs.forEach((httpLog, httpIndex) => {
          log += `<details><summary>📡 Request #${httpIndex + 1}: ${httpLog.method} ${httpLog.url} (${Math.round(httpLog.duration)}ms)</summary>\n\n`;
          log += `**📤 Request:**\n\`\`\`json\n${JSON.stringify({
            headers: httpLog.request.headers,
            data: httpLog.request.data
          }, null, 2)}\n\`\`\`\n\n`;
          
          if (httpLog.response) {
            log += `**📥 Response:**\n\`\`\`json\n${JSON.stringify({
              status: httpLog.response.status,
              headers: httpLog.response.headers,
              data: httpLog.response.data
            }, null, 2)}\n\`\`\`\n\n`;
          }
          
          if (httpLog.error) {
            log += `**❌ Error:** ${httpLog.error}\n\n`;
          }
          
          log += `**⏱️ Duration:** ${Math.round(httpLog.duration)} ms  \n\n`;
          log += `</details>\n\n`;
        });
      }
      
      log += `---\n\n`;
    });
    return log;
  }

  writeReport(observations = '') {
    // Restore original console methods
    console.log = this.originalConsoleLog;
    console.warn = this.originalConsoleWarn;
    console.error = this.originalConsoleError;
    
    // Get Jest results before writing report
    const jestResults = this.syncWithJestResults();
    
    // Populate legacy format sections with HTTP data
    this.populateLegacyFormatFromHttpLogs();
    
    const timestamp = getTimestamp();
    const dir = path.join(__dirname, `../reports/${this.group}.e2e`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${timestamp}-${this.testName}.md`);
    
    const totalDuration = (Date.now() - this.startTime) / 1000;
    const passedTests = this.testResults.filter(t => t.status === 'PASSED').length;
    const failedTests = this.testResults.filter(t => t.status === 'FAILED').length;
    const totalTests = this.testResults.length;
    
    console.log(`[ENHANCED REPORTER] 📊 Writing report with ${totalTests} tests (${passedTests} passed, ${failedTests} failed)`);
    
    const content = `# E2E Test Report: ${this.testName}

**Date:** ${new Date().toLocaleDateString()}  
**Time:** ${new Date().toLocaleTimeString()}  
**Duration:** ${totalDuration.toFixed(2)}s  
**Tests:** ${totalTests} total, ${passedTests} passed, ${failedTests} failed  

---

## Test Summary

${this.generateTestSummaryTable()}

---

## Detailed Execution Log

${this.generateDetailedExecutionLog()}

---

## Legacy Format (Payloads & Responses)

### Payloads Sent
${this.payloads}

### Curl Commands
${this.curls}

### API Responses
${this.responses}

---

## Status & Observations

${this.status}

**Observations:**
${observations}

---
*Generated automatically by Enhanced E2E Reporter*
`;
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[ENHANCED REPORT] Generated: ${file}`);
    return file;
  }

  /**
   * Populate legacy format sections with data from HTTP logs
   */
  populateLegacyFormatFromHttpLogs() {
    if (!global.__E2E_REQUEST_LOGS__ || global.__E2E_REQUEST_LOGS__.length === 0) {
      console.log('[ENHANCED REPORTER] No HTTP logs found to populate legacy format');
      return;
    }

    console.log(`[ENHANCED REPORTER] 📡 Populating legacy format with ${global.__E2E_REQUEST_LOGS__.length} HTTP logs`);

    // Clear existing legacy data
    this.payloads = '';
    this.curls = '';
    this.responses = '';

    global.__E2E_REQUEST_LOGS__.forEach((log, index) => {
      const requestTitle = `${log.method} ${log.url} (${log.testName})`;
      
      // Add to payloads section
      if (log.request.data) {
        this.payloads += `\n### Request #${index + 1}: ${requestTitle}\n\`\`\`json\n${JSON.stringify(log.request.data, null, 2)}\n\`\`\`\n`;
      }
      
      // Add to curl commands section
      this.addCurlFromHttpLog(log, index + 1);
      
      // Add to responses section
      if (log.response) {
        this.responses += `\n### Response #${index + 1}: ${requestTitle} (${log.response.status})\n\`\`\`json\n${JSON.stringify(log.response.data, null, 2)}\n\`\`\`\n`;
      } else if (log.error) {
        this.responses += `\n### Response #${index + 1}: ${requestTitle} (ERROR)\n\`\`\`\nError: ${log.error}\n\`\`\`\n`;
      }
    });

    console.log('[ENHANCED REPORTER] ✅ Legacy format populated successfully');
  }

  /**
   * Generate curl command from HTTP log entry
   */
  addCurlFromHttpLog(log, index) {
    const requestTitle = `Request #${index}: ${log.method} ${log.url}`;
    let curl = `curl -X ${log.method} "${log.url}"`;
    
    if (log.request.headers) {
      Object.entries(log.request.headers).forEach(([key, value]) => {
        // Skip common headers that curl adds automatically or are too verbose
        if (!['content-length', 'user-agent', 'accept-encoding'].includes(key.toLowerCase())) {
          curl += ` -H "${key}: ${value}"`;
        }
      });
    }
    
    if (log.request.data) {
      curl += ` -d '${JSON.stringify(log.request.data)}'`;
    }
    
    this.curls += `\n### ${requestTitle}\n\`\`\`bash\n${curl}\n\`\`\`\n`;
  }
}

// Global reporter instance for automatic Jest integration
let globalReporter = null;
let currentTestName = null;

// Standardized test wrapper that handles success/failure reporting
function withTest(testFn) {
  return async function(...args) {
    try {
      const result = await testFn(...args);
      // Test passed - mark as such
      if (globalReporter) {
        globalReporter.endTest('PASSED');
      }
      return result;
    } catch (error) {
      // Test failed - mark as failed and re-throw
      if (globalReporter) {
        globalReporter.endTest('FAILED', error.message);
      }
      throw error;
    }
  };
}

// Standard setup for Enhanced Reporter (to replace setupGlobalReporter)
function useEnhancedReporter(group, testName) {
  return new EnhancedReporter(group, testName);
}

// Jest hooks for automatic test tracking (manual approach)
function setupManualReporter(group, testName) {
  globalReporter = new EnhancedReporter(group, testName);
  
  // Manual beforeEach/afterEach setup
  beforeEach(() => {
    currentTestName = expect.getState().currentTestName || 'unknown test';
    globalReporter.startTest(currentTestName);
  });
  
  afterEach(() => {
    // Default to PASSED - individual tests override this if they fail
    globalReporter.endTest('PASSED');
  });
  
  return globalReporter;
}

function getGlobalReporter() {
  return globalReporter;
}

// Legacy function for backward compatibility
function writeReport({ group, testName, payloads, curls, responses, status, observations }) {
  const timestamp = getTimestamp();
  const dir = path.join(__dirname, `../reports/${group}.e2e`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${timestamp}-${testName}.md`);
  const content = `# Reporte E2E: ${testName}

**Fecha:** ${timestamp}
**Test:** ${testName}

---

## **Payloads enviados**
${payloads}

---

## **Curl de ejemplo**
${curls}

---

## **Respuestas**
${responses}

---

## **Status del test**

${status}

**Observaciones:**
${observations}
`;
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[REPORTE] Reporte generado: ${file}`);
}

module.exports = { 
  writeReport, 
  EnhancedReporter, 
  setupManualReporter, 
  getGlobalReporter, 
  withTest, 
  useEnhancedReporter 
}; 
module.exports = { writeReport, EnhancedReporter, setupGlobalReporter, getGlobalReporter }; 