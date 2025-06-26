#!/usr/bin/env node

/**
 * Custom E2E Test Report Generator
 * Generates HTML reports from Jest test execution results
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const reportsDir = path.join(__dirname, '../reports');
const htmlDir = path.join(reportsDir, 'html');
const junitDir = path.join(reportsDir, 'junit');

if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir, { recursive: true });
if (!fs.existsSync(junitDir)) fs.mkdirSync(junitDir, { recursive: true });

console.log('🚀 Running E2E tests and generating comprehensive reports...');

try {
  // Change to the backend directory to run tests
  const backendDir = path.join(__dirname, '../../../');
  
  // Run tests with custom config to ensure reports are generated
  const result = execSync(`npm test -- --config=tests/e2e-new/config/jest.config.js --testPathPattern="tests/e2e-new/tests/"`, {
    cwd: backendDir,
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  console.log('✅ Tests executed successfully!');
  
  // Generate timestamp for archival
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const readableTime = new Date().toLocaleString();
  
  // Check for generated reports
  const junitFile = path.join(junitDir, 'e2e-test-results.xml');
  const htmlReportFile = path.join(htmlDir, 'e2e-test-report.html');
  
  // Create summary report
  let testStats = { totalTests: 0, passedTests: 0, failedTests: 0, duration: 0 };
  
  if (fs.existsSync(junitFile)) {
    try {
      const junitContent = fs.readFileSync(junitFile, 'utf-8');
      // Parse basic stats from JUnit XML
      const testcaseMatches = junitContent.match(/<testcase/g);
      const failureMatches = junitContent.match(/<failure/g);
      testStats.totalTests = testcaseMatches ? testcaseMatches.length : 0;
      testStats.failedTests = failureMatches ? failureMatches.length : 0;
      testStats.passedTests = testStats.totalTests - testStats.failedTests;
    } catch (error) {
      console.warn('Could not parse JUnit results:', error.message);
    }
  }
  
  // Generate enhanced summary report
  const summaryReport = generateSummaryReport(testStats, readableTime, result);
  const summaryFile = path.join(htmlDir, `e2e-summary-${timestamp}.html`);
  const latestSummaryFile = path.join(htmlDir, 'latest-summary.html');
  
  fs.writeFileSync(summaryFile, summaryReport);
  fs.writeFileSync(latestSummaryFile, summaryReport);
  
  console.log('📊 Reports generated successfully!');
  console.log(`📄 HTML Test Report: ${htmlReportFile}`);
  console.log(`📄 JUnit XML Report: ${junitFile}`);
  console.log(`📄 Summary Report: ${summaryFile}`);
  console.log(`📄 Latest Summary: ${latestSummaryFile}`);
  
  // Show quick stats
  if (testStats.totalTests > 0) {
    const successRate = ((testStats.passedTests / testStats.totalTests) * 100).toFixed(1);
    console.log(`\n📈 Quick Stats:`);
    console.log(`   Tests: ${testStats.passedTests}/${testStats.totalTests} passed (${successRate}%)`);
    console.log(`   Failed: ${testStats.failedTests}`);
  }

} catch (error) {
  console.error('❌ Error running tests or generating reports:', error.message);
  
  // Generate error report
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const errorReport = generateErrorReport(error, timestamp);
  const errorFile = path.join(htmlDir, `error-report-${timestamp}.html`);
  fs.writeFileSync(errorFile, errorReport);
  console.log(`📄 Error Report: ${errorFile}`);
  
  process.exit(1);
}

function generateSummaryReport(stats, timestamp, testOutput) {
  const successRate = stats.totalTests > 0 ? 
    ((stats.passedTests / stats.totalTests) * 100).toFixed(1) : '0.0';
  
  const statusColor = successRate >= 95 ? '#28a745' : 
                     successRate >= 80 ? '#ffc107' : '#dc3545';
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E2E Test Summary Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; min-height: 100vh; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; }
        .header h1 { margin: 0; font-size: 2.5em; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 30px; }
        .stat-card { background: #f8f9fa; border-radius: 12px; padding: 25px; text-align: center; border-left: 5px solid #28a745; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .stat-card.warning { border-left-color: #ffc107; }
        .stat-card.danger { border-left-color: #dc3545; }
        .stat-card.info { border-left-color: #17a2b8; }
        .stat-number { font-size: 3em; font-weight: bold; color: #333; margin: 0; }
        .stat-label { color: #666; margin: 10px 0 0 0; font-size: 1.1em; }
        .success-rate { text-align: center; padding: 40px; }
        .success-rate .rate { font-size: 5em; font-weight: bold; color: ${statusColor}; margin: 0; }
        .success-rate .label { font-size: 1.5em; color: #666; margin: 10px 0; }
        .info-section { padding: 30px; background: #f8f9fa; margin: 20px; border-radius: 12px; }
        .info-section h3 { color: #333; margin-top: 0; }
        .output-section { padding: 30px; margin: 20px; background: #282c34; border-radius: 12px; color: #abb2bf; }
        .output-pre { background: #1e1e1e; padding: 20px; border-radius: 8px; overflow-x: auto; font-family: 'Monaco', monospace; font-size: 0.9em; max-height: 400px; overflow-y: auto; }
        .footer { text-align: center; padding: 20px; color: #666; border-top: 1px solid #dee2e6; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 E2E Test Summary Report</h1>
            <p>Generated on ${timestamp}</p>
        </div>
        
        <div class="success-rate">
            <div class="rate">${successRate}%</div>
            <div class="label">Success Rate</div>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">${stats.totalTests}</div>
                <div class="stat-label">Total Tests</div>
            </div>
            <div class="stat-card ${stats.passedTests === stats.totalTests ? '' : 'warning'}">
                <div class="stat-number">${stats.passedTests}</div>
                <div class="stat-label">Passed Tests</div>
            </div>
            <div class="stat-card ${stats.failedTests > 0 ? 'danger' : ''}">
                <div class="stat-number">${stats.failedTests}</div>
                <div class="stat-label">Failed Tests</div>
            </div>
            <div class="stat-card info">
                <div class="stat-number">${stats.totalTests > 0 ? stats.totalTests : 'N/A'}</div>
                <div class="stat-label">Test Suites</div>
            </div>
        </div>
        
        <div class="info-section">
            <h3>📋 Report Information</h3>
            <ul>
                <li><strong>Generated:</strong> ${timestamp}</li>
                <li><strong>Test Framework:</strong> Jest with custom E2E configuration</li>
                <li><strong>Report Types:</strong> HTML, JUnit XML, Summary</li>
                <li><strong>Test Location:</strong> tests/e2e-new/tests/</li>
            </ul>
        </div>
        
        <div class="info-section">
            <h3>🎯 Available Reports</h3>
            <ul>
                <li><strong>Detailed HTML Report:</strong> e2e-test-report.html (Generated by jest-html-reporters)</li>
                <li><strong>JUnit XML:</strong> junit/e2e-test-results.xml (For CI/CD integration)</li>
                <li><strong>This Summary:</strong> latest-summary.html (Quick overview)</li>
            </ul>
        </div>
        
        ${testOutput ? `
        <div class="output-section">
            <h3 style="color: #61dafb;">📄 Test Execution Output (Last 50 lines)</h3>
            <pre class="output-pre">${testOutput.split('\n').slice(-50).join('\n')}</pre>
        </div>
        ` : ''}
        
        <div class="footer">
            <p>E2E Test Report System - Pet API Backend | Generated automatically after test execution</p>
        </div>
    </div>
</body>
</html>`;
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
        .container { max-width: 1000px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { text-align: center; color: #dc3545; margin-bottom: 30px; background: #f8d7da; padding: 30px; border-radius: 8px 8px 0 0; }
        .error { background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; padding: 20px; margin: 20px; }
        .error-message { font-family: 'Monaco', monospace; white-space: pre-wrap; background: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 4px; overflow-x: auto; }
        .content { padding: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>❌ E2E Test Execution Error</h1>
            <p>Generated on ${new Date(timestamp).toLocaleString()}</p>
        </div>
        
        <div class="content">
            <div class="error">
                <h3>Error Details:</h3>
                <div class="error-message">${error.message}\n\n${error.stack || 'No stack trace available'}</div>
            </div>
            
            <div style="background: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3>💡 Troubleshooting Tips:</h3>
                <ul>
                    <li>Ensure the backend server is running</li>
                    <li>Check test database connectivity</li>
                    <li>Verify test configuration in jest.config.js</li>
                    <li>Check for missing dependencies</li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>`;
}
