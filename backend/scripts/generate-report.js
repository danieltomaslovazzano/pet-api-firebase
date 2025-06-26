#!/usr/bin/env node

/**
 * Custom E2E Test Report Generator
 * Generates HTML and JSON reports from Jest test results
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create reports directory
const reportsDir = path.join(__dirname, '../reports');
const htmlDir = path.join(reportsDir, 'html');
const jsonDir = path.join(reportsDir, 'json');

if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir, { recursive: true });
if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir, { recursive: true });

// Run tests with JSON output
console.log('🚀 Running E2E tests and generating reports...');

try {
  const result = execSync('npm test -- --json --outputFile=reports/json/test-results.json', {
    cwd: path.join(__dirname, '..'),
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'inherit']
  });

  // Generate timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  // Read JSON results if available
  let testResults = null;
  const jsonFile = path.join(jsonDir, 'test-results.json');
  
  if (fs.existsSync(jsonFile)) {
    testResults = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
  } else {
    // Parse from stdout if JSON file not created
    try {
      const jsonMatch = result.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        testResults = JSON.parse(jsonMatch[0]);
      }
    } catch (e) {
      console.warn('Could not parse JSON results from output');
    }
  }

  // Generate HTML report
  const htmlReport = generateHTMLReport(testResults, timestamp);
  const htmlFile = path.join(htmlDir, `e2e-report-${timestamp}.html`);
  const latestHtmlFile = path.join(htmlDir, 'latest.html');
  
  fs.writeFileSync(htmlFile, htmlReport);
  fs.writeFileSync(latestHtmlFile, htmlReport);

  console.log('✅ Reports generated successfully!');
  console.log(`📄 HTML Report: ${htmlFile}`);
  console.log(`📄 Latest HTML: ${latestHtmlFile}`);
  if (testResults) {
    console.log(`📄 JSON Results: ${jsonFile}`);
  }

} catch (error) {
  console.error('❌ Error generating reports:', error.message);
  
  // Generate error report
  const errorReport = generateErrorReport(error, new Date().toISOString());
  const errorFile = path.join(htmlDir, 'error-report.html');
  fs.writeFileSync(errorFile, errorReport);
  console.log(`📄 Error Report: ${errorFile}`);
}

function generateHTMLReport(testResults, timestamp) {
  const stats = testResults ? {
    totalSuites: testResults.numTotalTestSuites || 0,
    passedSuites: testResults.numPassedTestSuites || 0,
    failedSuites: testResults.numFailedTestSuites || 0,
    totalTests: testResults.numTotalTests || 0,
    passedTests: testResults.numPassedTests || 0,
    failedTests: testResults.numFailedTests || 0,
    duration: testResults.testResults ? 
      testResults.testResults.reduce((sum, result) => sum + (result.endTime - result.startTime), 0) : 0
  } : {
    totalSuites: 0,
    passedSuites: 0,
    failedSuites: 0,
    totalTests: 0,
    passedTests: 0,
    failedTests: 0,
    duration: 0
  };

  const successRate = stats.totalTests > 0 ? 
    ((stats.passedTests / stats.totalTests) * 100).toFixed(1) : '0.0';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E2E Test Report - New System</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 2.5em; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; padding: 30px; }
        .stat-card { background: #f8f9fa; border-radius: 8px; padding: 20px; text-align: center; border-left: 4px solid #28a745; }
        .stat-card.warning { border-left-color: #ffc107; }
        .stat-card.danger { border-left-color: #dc3545; }
        .stat-card.info { border-left-color: #17a2b8; }
        .stat-number { font-size: 2.5em; font-weight: bold; color: #333; margin: 0; }
        .stat-label { color: #666; margin: 5px 0 0 0; }
        .success-rate { text-align: center; padding: 30px; }
        .success-rate .rate { font-size: 4em; font-weight: bold; color: ${successRate >= 95 ? '#28a745' : successRate >= 80 ? '#ffc107' : '#dc3545'}; }
        .test-suites { padding: 30px; }
        .suite { margin-bottom: 20px; border: 1px solid #dee2e6; border-radius: 8px; overflow: hidden; }
        .suite-header { background: #f8f9fa; padding: 15px; border-bottom: 1px solid #dee2e6; }
        .suite-title { margin: 0; color: #333; }
        .suite-status { float: right; padding: 5px 10px; border-radius: 4px; color: white; font-size: 0.8em; }
        .suite-status.passed { background: #28a745; }
        .suite-status.failed { background: #dc3545; }
        .tests { padding: 15px; }
        .test { padding: 10px; border-bottom: 1px solid #f1f1f1; }
        .test:last-child { border-bottom: none; }
        .test-title { margin: 0; color: #333; }
        .test-status { float: right; font-weight: bold; }
        .test-status.passed { color: #28a745; }
        .test-status.failed { color: #dc3545; }
        .footer { text-align: center; padding: 20px; color: #666; border-top: 1px solid #dee2e6; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 E2E Test Report</h1>
            <p>New E2E Testing System - Generated on ${new Date(timestamp).toLocaleString()}</p>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-number">${stats.totalTests}</div>
                <div class="stat-label">Total Tests</div>
            </div>
            <div class="stat-card ${stats.passedTests > 0 ? '' : 'warning'}">
                <div class="stat-number">${stats.passedTests}</div>
                <div class="stat-label">Passed Tests</div>
            </div>
            <div class="stat-card ${stats.failedTests > 0 ? 'danger' : ''}">
                <div class="stat-number">${stats.failedTests}</div>
                <div class="stat-label">Failed Tests</div>
            </div>
            <div class="stat-card info">
                <div class="stat-number">${(stats.duration / 1000).toFixed(1)}s</div>
                <div class="stat-label">Duration</div>
            </div>
        </div>

        <div class="success-rate">
            <div class="rate">${successRate}%</div>
            <div>Success Rate</div>
        </div>

        ${testResults && testResults.testResults ? generateSuitesHTML(testResults.testResults) : '<div style="padding: 30px; text-align: center; color: #666;">Test details not available</div>'}

        <div class="footer">
            <p>Generated by E2E New System Report Generator</p>
        </div>
    </div>
</body>
</html>`;
}

function generateSuitesHTML(testResults) {
  return `
    <div class="test-suites">
        <h2>Test Suites</h2>
        ${testResults.map(suite => `
            <div class="suite">
                <div class="suite-header">
                    <h3 class="suite-title">${path.basename(suite.testFilePath)}</h3>
                    <span class="suite-status ${suite.status}">${suite.status}</span>
                </div>
                <div class="tests">
                    ${suite.assertionResults.map(test => `
                        <div class="test">
                            <div class="test-title">${test.title}</div>
                            <div class="test-status ${test.status}">${test.status === 'passed' ? '✅' : '❌'}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    </div>`;
}

function generateErrorReport(error, timestamp) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E2E Test Report - Error</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 30px; }
        .header { text-align: center; color: #dc3545; margin-bottom: 30px; }
        .error { background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px; padding: 20px; }
        .error-message { font-family: monospace; white-space: pre-wrap; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>❌ E2E Test Report Generation Error</h1>
            <p>Generated on ${new Date(timestamp).toLocaleString()}</p>
        </div>
        
        <div class="error">
            <h3>Error Details:</h3>
            <div class="error-message">${error.message}</div>
        </div>
    </div>
</body>
</html>`;
} 