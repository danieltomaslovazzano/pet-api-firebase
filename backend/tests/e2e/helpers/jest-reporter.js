/**
 * Custom Jest Reporter for Enhanced E2E Reporting
 * This integrates with Jest's official reporter API to properly track test results
 */

class CustomE2EReporter {
  constructor(globalConfig, options) {
    this.globalConfig = globalConfig;
    this.options = options;
    this.testResults = new Map();
    this.enhancedReporters = new Map();
  }

  onRunStart(results, options) {
    // Test run started
    console.log('[JEST REPORTER] Test run started');
  }

  onTestStart(test) {
    // Individual test started
    const testName = test.path.split('/').pop();
    this.testResults.set(test.path, { started: Date.now(), tests: [] });
    console.log(`[JEST REPORTER] Test file started: ${testName}`);
  }

  onTestResult(test, testResult) {
    // Individual test completed - this is where we get the REAL Jest results
    const testFileName = test.path.split('/').pop();
    console.log(`[JEST REPORTER] Processing results for: ${testFileName}`);
    
    testResult.testResults.forEach(result => {
      const status = result.status === 'passed' ? 'PASSED' : 'FAILED';
      const errorMessage = result.failureMessages && result.failureMessages.length > 0 
        ? result.failureMessages.join('; ') 
        : null;
      
      // Log the actual Jest result for debugging
      console.log(`[JEST REPORTER] Test: "${result.title}" -> ${status}`);
      
      // Store the real test result
      this.storeTestResult(testFileName, result.title, status, errorMessage);
    });
  }

  storeTestResult(testFileName, testTitle, status, error) {
    // Store results globally so Enhanced Reporter can access them
    global.__JEST_TEST_RESULTS__ = global.__JEST_TEST_RESULTS__ || {};
    global.__JEST_TEST_RESULTS__[testTitle] = {
      status,
      error,
      timestamp: Date.now(),
      testFile: testFileName
    };
    
    console.log(`[JEST REPORTER] Stored result: ${testTitle} = ${status}`);
  }

  onRunComplete(contexts, results) {
    // All tests completed
    const passed = results.numPassedTests;
    const failed = results.numFailedTests;
    const total = results.numTotalTests;
    
    console.log(`[JEST REPORTER] Run complete: ${passed}/${total} passed, ${failed} failed`);
    
    // Print summary of stored results
    if (global.__JEST_TEST_RESULTS__) {
      console.log('[JEST REPORTER] Final test results:');
      Object.entries(global.__JEST_TEST_RESULTS__).forEach(([testName, result]) => {
        console.log(`  - ${testName}: ${result.status}`);
      });
    }
  }

  getLastError() {
    return this.lastError;
  }
}

module.exports = CustomE2EReporter; 