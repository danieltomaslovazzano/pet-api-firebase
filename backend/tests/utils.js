// tests/utils.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const config = require('./config');

/**
 * ======================================================
 * CORE HTTP REQUEST UTILITY
 * ======================================================
 * Provides standardized API request functionality with
 * proper error handling and response formatting
 */
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
      endpoint, // Store the endpoint for better report generation
      method,   // Store the method for better report generation
    };
  } catch (error) {
    return {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
      error: error.message,
      endpoint, // Store the endpoint for better report generation
      method,   // Store the method for better report generation
    };
  }
};

/**
 * ======================================================
 * TEST CONFIGURATION REGISTRY
 * ======================================================
 * Stores module-specific configurations for testing
 */
const moduleConfig = {
  // Default configuration
  default: {
    reportSections: ['General Tests'],
    expectedResponses: {
      // Default expected responses
    }
  },
  
  // Auth-specific configuration
  auth: {
    reportSections: ['User Registration Tests', 'User Login Tests', 'Password Reset Tests', 'Email Verification Tests', 'Logout Tests'],
    expectedResponses: {
      // Auth-specific expected responses
    }
  },
  
  // Pet-specific configuration
  pets: {
    reportSections: ['Pet Creation Tests', 'Pet Retrieval Tests', 'Pet Listing Tests', 'Pet Update Tests', 'Pet Deletion Tests', 'Pet Search Tests'],
    expectedResponses: {
      // Pet-specific expected responses
    }
  }
};

/**
 * Register or update module-specific configuration
 * @param {string} moduleName - The name of the module (e.g., 'auth', 'pets')
 * @param {object} config - Configuration object to merge with existing config
 */
const registerModuleConfig = (moduleName, config) => {
  moduleConfig[moduleName] = {
    ...(moduleConfig[moduleName] || moduleConfig.default),
    ...config
  };
};

/**
 * ======================================================
 * ENHANCED REPORT GENERATION
 * ======================================================
 * Configurable report generation system with support
 * for custom test categories and templates
 */

/**
 * Generate a comprehensive test report
 * @param {string} testName - Name of the test suite (e.g., 'auth_tests', 'pets_tests')
 * @param {object} results - Test results object
 * @param {string[]} customSections - Optional array of custom section names
 */
const generateReport = (testName, results, customSections = null) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const moduleName = testName.split('_')[0];
  const reportDir = path.join(__dirname, moduleName, 'reports');
  
  // Get module config or use default
  const moduleConf = moduleConfig[moduleName] || moduleConfig.default;
  
  // Use custom sections if provided, otherwise use module config sections
  const reportSections = customSections || moduleConf.reportSections;
  
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

  // Group tests by endpoint with improved detection
  const endpointGroups = analyzedResults.reduce((acc, result) => {
    // Extract endpoint from the result, with better fallback options
    const endpoint = result.result.endpoint || 
                    (result.testCase.includes('pet') ? 'pets' : 
                    (result.testCase.includes('auth') ? 'auth' : 'unknown'));
    
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
      // Improved method detection based on result data
      methods: [...new Set(data.tests.map(t => 
        t.result.method || (t.result.requestData ? 'POST' : 'GET')
      ))],
      totalTests: data.tests.length,
      passed: data.passed,
      failed: data.failed
    })),
    testDetails: analyzedResults.map(result => ({
      testCase: result.testCase,
      timestamp: result.timestamp,
      request: {
        method: result.result.method || (result.result.requestData ? 'POST' : 'GET'),
        endpoint: result.result.endpoint || 'unknown',
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
    })),
    // Store report sections for template generation
    reportSections
  };
  
  // Add recommendations after the report is constructed
  formattedReport.recommendations = generateRecommendations(analyzedResults, formattedReport);

  // Generate and save markdown report
  const markdownPath = generateMarkdownReport(formattedReport, analyzedResults);
  console.log(`\nMarkdown report generated at: ${markdownPath}`);
  
  return markdownPath;
};

/**
 * Generate recommendations based on test results
 */
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

/**
 * Generate markdown report with dynamic test sections
 */
const generateMarkdownReport = (reportData, analyzedResults) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const moduleName = reportData.testName.split('_')[0];
  const reportDir = path.join(__dirname, moduleName, 'reports');
  const reportPath = path.join(reportDir, `${reportData.testName}_${timestamp}.md`);
  
  // Ensure reports directory exists
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  // Build the basic markdown report structure
  let markdownContent = `# Test Report - ${reportData.testName}

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
`;

  // Generate dynamic report sections based on the module config
  for (const section of reportData.reportSections) {
    markdownContent += `\n### ${section}\n`;
    
    // Filter tests for this section based on test case name
    const sectionTests = analyzedResults.filter(test => {
      // Extract key terms from the section name to match against test case
      const keyTerms = section.toLowerCase().split(' ');
      return keyTerms.some(term => 
        term !== 'tests' && test.testCase.toLowerCase().includes(term)
      );
    });
    
    if (sectionTests.length === 0) {
      markdownContent += `\n*No tests in this category*\n`;
      continue;
    }
    
    // Generate test details for each test in this section
    markdownContent += sectionTests.map(test => `
#### ${test.testCase}
- Status: ${test.result.status}
- Analysis: ${test.passed ? '✅ Expected behavior' : '❌ Unexpected behavior'}
- Request:
\`\`\`json
${JSON.stringify({
  method: test.result.method || (test.result.requestData ? 'POST' : 'GET'),
  endpoint: test.result.endpoint || 'unknown',
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
`).join('\n');
  }

  // Add recommendations
  markdownContent += `\n## Recommendations\n${reportData.recommendations.map(rec => {
    return `- **${rec.type.toUpperCase()}**: ${rec.message}`;
  }).join('\n')}\n`;

  // Write the markdown file
  fs.writeFileSync(reportPath, markdownContent);
  
  return reportPath;
};

/**
 * ======================================================
 * TEST TRACKING AND ANALYSIS UTILITIES
 * ======================================================
 */

/**
 * Track test execution and results for later reporting
 * @param {string} testName - The name of the test suite
 * @param {string} testCase - Description of the specific test case
 * @param {object} result - The test result object
 */
const trackTest = (testName, testCase, result) => {
  console.log(`\nTracking test: ${testCase}`);
  
  return {
    testCase,
    timestamp: new Date().toISOString(),
    result,
    executionTime: Math.floor(Math.random() * 100) + 5 // Mock execution time
  };
};

/**
 * Enhanced method to determine if a test behaved as expected
 * Can be configured per module for specific expectations
 */
const determineExpectedBehavior = (testCase, result) => {
  // Extract module from test case for module-specific behaviors
  const moduleHint = testCase.toLowerCase().includes('pet') ? 'pets' : 
                    (testCase.toLowerCase().includes('auth') ? 'auth' : 'default');
  
  // Common patterns across all modules
  if (testCase.includes('invalid') && result.status >= 400) {
    return true;
  }
  
  if (testCase.includes('unauthorized') && result.status === 401) {
    return true;
  }
  
  if (testCase.includes('permission') && result.status === 403) {
    return true;
  }
  
  // Successful create operations
  if (testCase.includes('create') && !testCase.includes('invalid') && 
      !testCase.includes('unauthorized') && result.status === 201) {
    return true;
  }
  
  // Default success cases
  if (!testCase.includes('fail') && !testCase.includes('invalid') && 
      !testCase.includes('error') && result.status >= 200 && result.status < 300) {
    return true;
  }
  
  // Default failure cases
  if ((testCase.includes('fail') || testCase.includes('invalid') || 
       testCase.includes('error')) && result.status >= 400) {
    return true;
  }
  
  // For undefined cases, check result data for success messages
  if (result.data?.message?.includes('correct') || 
      result.data?.message?.includes('success')) {
    return true;
  }
  
  return false;
};

module.exports = {
  makeRequest,
  generateReport,
  trackTest,
  determineExpectedBehavior,
  registerModuleConfig
}; 