// tests/utils.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const config = require('./config');

// Utility to make API requests with logging
const makeRequest = async (method, endpoint, data = null, token = null) => {
  const url = `${config.baseUrl}/api/${endpoint}`;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    
    return {
      status: response.status,
      data: response.data,
      headers: response.headers,
    };
  } catch (error) {
    return {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
      error: error.message,
    };
  }
};

// Utility to generate test reports
const generateReport = (testName, results) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const moduleName = testName.split('_')[0];
  const reportDir = path.join(__dirname, moduleName, 'reports');
  
  // Ensure reports directory exists
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  // Calculate test results by applying the determineExpectedBehavior function
  const analyzedResults = results.results.map(result => {
    // Determine if test passed based on expected behavior patterns
    const passed = determineExpectedBehavior(result.testCase, result.result);
    return { ...result, passed };
  });

  // Count failed tests
  const failedCount = analyzedResults.filter(r => !r.passed).length;
  const passedCount = analyzedResults.length - failedCount;

  // Calculate test suite statistics
  const testSuites = results.summary.testSuites.map(suite => ({
    ...suite,
    passed: passedCount,
    failed: failedCount,
    successRate: `${((passedCount / analyzedResults.length) * 100).toFixed(2)}%`
  }));

  // Group tests by endpoint
  const endpointGroups = analyzedResults.reduce((acc, result) => {
    const endpoint = result.result.endpoint || 'unknown';
    if (!acc[endpoint]) {
      acc[endpoint] = { tests: [], passed: 0, failed: 0 };
    }
    acc[endpoint].tests.push(result);
    if (result.passed) {
      acc[endpoint].passed++;
    } else {
      acc[endpoint].failed++;
    }
    return acc;
  }, {});

  // Format the report data
  const formattedReport = {
    testName,
    timestamp,
    environment: {
      nodeVersion: process.version,
      platform: process.platform,
      apiUrl: config.baseUrl
    },
    summary: {
      totalTests: analyzedResults.length,
      passed: passedCount,
      failed: failedCount,
      successRate: `${((passedCount / analyzedResults.length) * 100).toFixed(2)}%`,
      testSuites
    },
    endpoints: Object.entries(endpointGroups).map(([endpoint, data]) => ({
      endpoint,
      methods: [...new Set(data.tests.map(t => t.result.requestData ? 'POST' : 'GET'))],
      totalTests: data.tests.length,
      passed: data.passed,
      failed: data.failed
    })),
    testDetails: analyzedResults.map(result => ({
      testCase: result.testCase,
      timestamp: result.timestamp,
      request: {
        method: result.result.requestData ? 'POST' : 'GET',
        endpoint: result.result.endpoint || 'auth/register',
        data: result.result.requestData,
        headers: result.result.headers
      },
      response: {
        status: result.result.status,
        data: result.result.data,
        error: result.result.error,
        headers: result.result.headers
      },
      passed: result.passed,
      executionTime: result.executionTime || 'N/A'
    }))
  };
  
  // Add recommendations after the report is constructed
  formattedReport.recommendations = generateRecommendations(analyzedResults, formattedReport);

  // Generate and save markdown report
  const markdownPath = generateMarkdownReport(formattedReport, analyzedResults);
  console.log(`\nMarkdown report generated at: ${markdownPath}`);
  
  return markdownPath;
};

// Generate recommendations based on test results
const generateRecommendations = (analyzedResults, reportData) => {
  const recommendations = [];
  
  // Check overall success rate
  const successRate = (reportData.summary.passed / reportData.summary.totalTests) * 100;
  if (successRate < 80) {
    recommendations.push({
      type: 'critical',
      message: 'Overall test success rate is below 80%. Immediate attention required.'
    });
  }
  
  // Check for specific error patterns
  const errorPatterns = analyzedResults
    .filter(r => !r.passed)
    .map(r => r.result.data?.error)
    .filter(Boolean);
  
  if (errorPatterns.length > 0) {
    recommendations.push({
      type: 'warning',
      message: `There are ${errorPatterns.length} failing tests. Check individual test results.`
    });
  }
  
  return recommendations;
};

// Generate markdown report
const generateMarkdownReport = (reportData, analyzedResults) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const moduleName = reportData.testName.split('_')[0];
  const reportDir = path.join(__dirname, moduleName, 'reports');
  const reportPath = path.join(reportDir, `${reportData.testName}_${timestamp}.md`);
  
  // Ensure reports directory exists
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  // Use the analyzedResults directly for the report, which contains the passed property
  const markdownContent = `# Test Report - ${reportData.testName}

## Environment
- Node Version: ${reportData.environment.nodeVersion}
- Platform: ${reportData.environment.platform}
- API URL: ${reportData.environment.apiUrl}
- Timestamp: ${reportData.timestamp}

## Summary
- Total Tests: ${reportData.summary.totalTests}
- Passed: ${reportData.summary.passed}
- Failed: ${reportData.summary.failed}
- Success Rate: ${reportData.summary.successRate}

## Endpoints Tested
${reportData.endpoints.map(endpoint => `
### ${endpoint.endpoint}
- Methods: ${endpoint.methods.join(', ')}
- Total Tests: ${endpoint.totalTests}
- Passed: ${endpoint.passed}
- Failed: ${endpoint.failed}
`).join('\n')}

## Detailed Analysis

### User Registration Tests
${analyzedResults.filter(test => test.testCase.includes('Register')).map(test => `
#### ${test.testCase}
- Status: ${test.result.status}
- Analysis: ${test.passed ? '✅ Expected behavior' : '❌ Unexpected behavior'}
- Request:
\`\`\`json
${JSON.stringify({
  method: test.result.requestData ? 'POST' : 'GET',
  endpoint: test.result.endpoint || 'auth/register',
  data: test.result.requestData
}, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify({
  status: test.result.status,
  data: test.result.data
}, null, 2)}
\`\`\`
`).join('\n')}

### User Login Tests
${analyzedResults.filter(test => test.testCase.includes('Login')).map(test => `
#### ${test.testCase}
- Status: ${test.result.status}
- Analysis: ${test.passed ? '✅ Expected behavior' : '❌ Unexpected behavior'}
- Request:
\`\`\`json
${JSON.stringify({
  method: test.result.requestData ? 'POST' : 'GET',
  endpoint: test.result.endpoint || 'auth/register',
  data: test.result.requestData
}, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify({
  status: test.result.status,
  data: test.result.data
}, null, 2)}
\`\`\`
`).join('\n')}

### Password Reset Tests
${analyzedResults.filter(test => test.testCase.includes('reset')).map(test => `
#### ${test.testCase}
- Status: ${test.result.status}
- Analysis: ${test.passed ? '✅ Expected behavior' : '❌ Unexpected behavior'}
- Request:
\`\`\`json
${JSON.stringify({
  method: test.result.requestData ? 'POST' : 'GET',
  endpoint: test.result.endpoint || 'auth/register',
  data: test.result.requestData
}, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify({
  status: test.result.status,
  data: test.result.data
}, null, 2)}
\`\`\`
`).join('\n')}

### Email Verification Tests
${analyzedResults.filter(test => test.testCase.includes('Verify')).map(test => `
#### ${test.testCase}
- Status: ${test.result.status}
- Analysis: ${test.passed ? '✅ Expected behavior' : '❌ Unexpected behavior'}
- Request:
\`\`\`json
${JSON.stringify({
  method: test.result.requestData ? 'POST' : 'GET',
  endpoint: test.result.endpoint || 'auth/register',
  data: test.result.requestData
}, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify({
  status: test.result.status,
  data: test.result.data
}, null, 2)}
\`\`\`
`).join('\n')}

### Logout Tests
${analyzedResults.filter(test => test.testCase.includes('Logout')).map(test => `
#### ${test.testCase}
- Status: ${test.result.status}
- Analysis: ${test.passed ? '✅ Expected behavior' : '❌ Unexpected behavior'}
- Request:
\`\`\`json
${JSON.stringify({
  method: test.result.requestData ? 'POST' : 'GET',
  endpoint: test.result.endpoint || 'auth/register',
  data: test.result.requestData
}, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify({
  status: test.result.status,
  data: test.result.data
}, null, 2)}
\`\`\`
`).join('\n')}

## Recommendations
${reportData.recommendations.map(rec => `- **${rec.type.toUpperCase()}**: ${rec.message}`).join('\n')}
`;

  fs.writeFileSync(reportPath, markdownContent);
  return reportPath;
};

// Utility to track test results
const trackTest = (testName, testCase, result) => {
  const timestamp = new Date().toISOString();
  const isExpectedBehavior = determineExpectedBehavior(testCase, result);
  
  return {
    testName,
    testCase,
    timestamp,
    result,
    passed: isExpectedBehavior,
    executionTime: result.executionTime || 'N/A'
  };
};

// Helper to determine if the test result matches expected behavior
const determineExpectedBehavior = (testCase, result) => {
  // Handle specific test cases directly
  if (testCase === 'Verify with invalid token') {
    return result.status === 400 && result.data?.error?.includes('inválido');
  }
  
  if (testCase === 'Logout with invalid token') {
    return result.status === 401 && result.data?.error?.includes('inválido');
  }
  
  // Registration tests
  if (testCase.includes('Register')) {
    if (testCase.includes('valid data')) {
      return result.status === 201;
    } else if (testCase.includes('invalid email')) {
      return result.status === 400 && result.data?.error?.includes('email');
    } else if (testCase.includes('weak password')) {
      return result.status === 400 && result.data?.error?.includes('contraseña');
    } else if (testCase.includes('missing fields')) {
      return result.status === 400 && result.data?.error?.includes('campos');
    }
    return false;
  }
  
  // Login tests
  if (testCase.includes('Login')) {
    if (testCase.includes('valid credentials')) {
      return result.status === 200 && result.data?.tokens?.idToken;
    } else if (testCase.includes('invalid password')) {
      return result.status === 400 && result.data?.error?.includes('autenticación');
    } else if (testCase.includes('non-existent user')) {
      return result.status === 400 && result.data?.error?.includes('autenticación');
    } else if (testCase.includes('invalid email')) {
      return result.status === 400 && result.data?.error?.includes('email');
    } else if (testCase.includes('disabled account')) {
      return result.status === 403 && result.data?.error?.includes('deshabilitada');
    }
    return false;
  }
  
  // Password Reset tests
  if (testCase.includes('password reset')) {
    return result.status === 200 && result.data?.message?.includes('recuperación');
  }
  
  // Email Verification tests
  if (testCase.includes('Verify')) {
    if (testCase.includes('valid token')) {
      return result.status === 200 && result.data?.message?.includes('verificado');
    } else if (testCase.includes('invalid token')) {
      return result.status === 400 && result.data?.error?.includes('inválido');
    } else if (testCase.includes('expired token')) {
      return result.status === 400 && result.data?.error?.includes('expirado');
    }
    return false;
  }
  
  // Logout tests
  if (testCase.includes('Logout')) {
    if (testCase.includes('valid token')) {
      return result.status === 200 && result.data?.message?.includes('cerrada');
    } else if (testCase.includes('invalid token')) {
      return result.status === 401 && result.data?.error?.includes('inválido');
    } else if (testCase.includes('without token')) {
      return result.status === 401 && result.data?.error?.includes('proporcionado');
    }
    return false;
  }
  
  return false;
};

module.exports = {
  makeRequest,
  generateReport,
  trackTest,
}; 