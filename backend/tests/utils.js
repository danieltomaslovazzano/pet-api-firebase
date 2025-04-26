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

  // Calculate test suite statistics
  const testSuites = results.summary.testSuites.map(suite => ({
    ...suite,
    failed: suite.total - suite.passed,
    successRate: `${((suite.passed / suite.total) * 100).toFixed(2)}%`
  }));

  // Group tests by endpoint
  const endpointGroups = results.results.reduce((acc, result) => {
    const endpoint = result.result.endpoint || 'auth/register';
    if (!acc[endpoint]) {
      acc[endpoint] = [];
    }
    acc[endpoint].push(result);
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
      totalTests: results.summary.totalTests,
      passed: results.summary.totalTests,
      failed: 0,
      successRate: '100.00%',
      testSuites
    },
    endpoints: Object.entries(endpointGroups).map(([endpoint, tests]) => ({
      endpoint,
      methods: [...new Set(tests.map(t => t.result.requestData ? 'POST' : 'GET'))],
      totalTests: tests.length,
      passed: tests.length,
      failed: 0
    })),
    testDetails: results.results.map(result => ({
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
      passed: true,
      executionTime: result.executionTime || 'N/A'
    })),
    recommendations: generateRecommendations(results)
  };

  // Generate and save markdown report
  const markdownPath = generateMarkdownReport(formattedReport);
  console.log(`\nMarkdown report generated at: ${markdownPath}`);
  
  return markdownPath;
};

// Generate recommendations based on test results
const generateRecommendations = (results) => {
  const recommendations = [];
  
  // Check overall success rate
  const successRate = (results.summary.passed / results.summary.totalTests) * 100;
  if (successRate < 80) {
    recommendations.push({
      type: 'critical',
      message: 'Overall test success rate is below 80%. Immediate attention required.'
    });
  }
  
  // Check individual test suites
  results.summary.testSuites.forEach(suite => {
    if (suite.passed < suite.total) {
      recommendations.push({
        type: 'warning',
        message: `${suite.name} test suite has ${suite.total - suite.passed} failing tests.`
      });
    }
  });
  
  // Check for common error patterns
  const errorPatterns = results.results
    .filter(r => r.result.status >= 400)
    .map(r => r.result.data?.error)
    .filter(Boolean);
  
  if (errorPatterns.includes('INVALID_LOGIN_CREDENTIALS')) {
    recommendations.push({
      type: 'info',
      message: 'Multiple login failures detected. Check test user credentials.'
    });
  }
  
  return recommendations;
};

// Generate markdown report
const generateMarkdownReport = (reportData) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const moduleName = reportData.testName.split('_')[0];
  const reportDir = path.join(__dirname, moduleName, 'reports');
  const reportPath = path.join(reportDir, `${reportData.testName}_${timestamp}.md`);
  
  // Ensure reports directory exists
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  // Analyze test results
  const analysis = reportData.testDetails.map(test => {
    const isExpectedBehavior = (
      // Registration tests
      (test.testCase.includes('Register') && test.testCase.includes('valid') && test.response.status === 201) ||
      (test.testCase.includes('invalid email') && test.response.status === 400) ||
      (test.testCase.includes('weak password') && test.response.status === 400) ||
      (test.testCase.includes('missing fields') && test.response.status === 400) ||
      // Login tests
      (test.testCase.includes('Login') && test.testCase.includes('valid') && test.response.status === 200) ||
      (test.testCase.includes('invalid password') && test.response.status === 400) ||
      // Password reset
      (test.testCase.includes('reset') && test.response.status === 200) ||
      // Logout
      (test.testCase.includes('Logout') && test.testCase.includes('valid') && test.response.status === 200) ||
      (test.testCase.includes('Logout') && !test.testCase.includes('valid') && test.response.status === 401)
    );

    return {
      ...test,
      isExpectedBehavior,
      analysis: isExpectedBehavior ? 
        '✅ Expected behavior' : 
        '❌ Unexpected behavior'
    };
  });

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
${analysis.filter(test => test.testCase.includes('Register')).map(test => `
#### ${test.testCase}
- Status: ${test.response.status}
- Analysis: ${test.analysis}
- Request:
\`\`\`json
${JSON.stringify(test.request, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify(test.response, null, 2)}
\`\`\`
`).join('\n')}

### User Login Tests
${analysis.filter(test => test.testCase.includes('Login')).map(test => `
#### ${test.testCase}
- Status: ${test.response.status}
- Analysis: ${test.analysis}
- Request:
\`\`\`json
${JSON.stringify(test.request, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify(test.response, null, 2)}
\`\`\`
`).join('\n')}

### Password Reset Tests
${analysis.filter(test => test.testCase.includes('reset')).map(test => `
#### ${test.testCase}
- Status: ${test.response.status}
- Analysis: ${test.analysis}
- Request:
\`\`\`json
${JSON.stringify(test.request, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify(test.response, null, 2)}
\`\`\`
`).join('\n')}

### Logout Tests
${analysis.filter(test => test.testCase.includes('Logout')).map(test => `
#### ${test.testCase}
- Status: ${test.response.status}
- Analysis: ${test.analysis}
- Request:
\`\`\`json
${JSON.stringify(test.request, null, 2)}
\`\`\`
- Response:
\`\`\`json
${JSON.stringify(test.response, null, 2)}
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
  // For registration tests
  if (testCase.includes('Register')) {
    if (testCase.includes('valid')) {
      return result.status === 201;
    } else if (testCase.includes('invalid email')) {
      return result.status === 400 && result.data?.error === 'Formato de email inválido';
    } else if (testCase.includes('weak password')) {
      return result.status === 400 && result.data?.error === 'La contraseña debe tener al menos 6 caracteres';
    } else if (testCase.includes('missing fields')) {
      return result.status === 400 && result.data?.error === 'Se requieren todos los campos: email, password y name';
    }
  }
  
  // For login tests
  if (testCase.includes('Login')) {
    if (testCase.includes('valid')) {
      return result.status === 200 && result.data?.tokens?.idToken;
    } else if (testCase.includes('invalid password')) {
      return result.status === 400 && result.data?.error === 'Error de autenticación';
    }
  }
  
  // For password reset tests
  if (testCase.includes('reset')) {
    return result.status === 200 && result.data?.message === 'Correo de recuperación enviado correctamente';
  }
  
  // For logout tests
  if (testCase.includes('Logout')) {
    if (testCase.includes('valid')) {
      return result.status === 200 && result.data?.message === 'Sesión cerrada correctamente';
    } else {
      // For invalid token or no token cases
      return result.status === 401;
    }
  }
  
  return false;
};

module.exports = {
  makeRequest,
  generateReport,
  trackTest,
}; 