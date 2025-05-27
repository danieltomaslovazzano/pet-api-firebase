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

class EnhancedReporter {
  constructor(group, testName) {
    this.group = group;
    this.testName = testName;
    this.testResults = [];
    this.currentTest = null;
    this.payloads = '';
    this.curls = '';
    this.responses = '';
    this.status = '';
    this.observations = '';
    this.consoleOutput = [];
    this.startTime = Date.now();
    
    // Capture console output
    this.originalConsoleLog = console.log;
    this.originalConsoleWarn = console.warn;
    this.originalConsoleError = console.error;
    
    console.log = (...args) => {
      this.consoleOutput.push({ type: 'log', message: args.join(' '), timestamp: new Date().toISOString() });
      this.originalConsoleLog(...args);
    };
    
    console.warn = (...args) => {
      this.consoleOutput.push({ type: 'warn', message: args.join(' '), timestamp: new Date().toISOString() });
      this.originalConsoleWarn(...args);
    };
    
    console.error = (...args) => {
      this.consoleOutput.push({ type: 'error', message: args.join(' '), timestamp: new Date().toISOString() });
      this.originalConsoleError(...args);
    };
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

  endTest(status = 'PASSED', error = null) {
    if (this.currentTest) {
      this.currentTest.status = status;
      this.currentTest.duration = Date.now() - this.currentTest.startTime;
      this.currentTest.error = error;
      
      // Capture console output for this test
      const testStartTime = this.currentTest.startTime;
      this.currentTest.consoleOutput = this.consoleOutput.filter(
        log => new Date(log.timestamp).getTime() >= testStartTime
      );
      
      this.testResults.push({ ...this.currentTest });
      this.currentTest = null;
    }
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
    
    // Also add to legacy format for backward compatibility
    this.addToReport('payloads', title, data ? JSON.stringify(data, null, 2) : 'No payload');
    this.addCurlToReport(title, method, endpoint, headers, data);
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
    
    // Also add to legacy format for backward compatibility
    const safeData = typeof responseData === 'object' ? JSON.stringify(responseData, null, 2) : String(responseData);
    this.addToReport('responses', title, safeData);
  }

  addToReport(section, title, content) {
    this[section] += `### ${title}\n\n\`\`\`json\n${content}\n\`\`\`\n\n`;
  }

  addCurlToReport(title, method, endpoint, headers = {}, data = null) {
    const API_URL = process.env.API_URL || 'http://localhost:3000/api';
    let curl = `### ${title}\n\n\`\`\`bash\ncurl -X ${method} ${API_URL}${endpoint}`;
    Object.entries(headers).forEach(([key, value]) => {
      curl += ` \\\n  -H "${key}: ${value}"`;
    });
    if (data) {
      curl += ` \\\n  -d '${JSON.stringify(data)}'`;
    }
    this.curls += curl + '\n\`\`\`\n\n';
  }

  generateTestSummaryTable() {
    let table = `| Test Case | Status | Duration | Description |\n`;
    table += `|-----------|--------|----------|-------------|\n`;
    
    this.testResults.forEach(test => {
      const statusIcon = test.status === 'PASSED' ? '✅' : '❌';
      const duration = `${(test.duration / 1000).toFixed(2)}s`;
      const description = test.description || test.name;
      table += `| ${statusIcon} ${test.name} | ${test.status} | ${duration} | ${description} |\n`;
    });
    
    return table;
  }

  generateDetailedExecutionLog() {
    let log = '';
    
    this.testResults.forEach(test => {
      const statusIcon = test.status === 'PASSED' ? '✅' : '❌';
      log += `### Test: ${test.name}\n`;
      log += `**Status:** ${statusIcon} ${test.status}  \n`;
      log += `**Duration:** ${(test.duration / 1000).toFixed(2)}s  \n`;
      
      if (test.error) {
        log += `**Error:** ${test.error}  \n`;
      }
      
      // --- Incluir logs de requests/responses enriquecidos ---
      if (global.__E2E_REQUEST_LOGS__) {
        // Filtrar logs de manera más flexible
        const logs = global.__E2E_REQUEST_LOGS__.filter(l => {
          // Intentar múltiples estrategias de matching
          const exactMatch = l.testName === test.name;
          const includesMatch = l.testName.includes(test.name);
          const reverseIncludesMatch = test.name.includes(l.testName);
          
          return exactMatch || includesMatch || reverseIncludesMatch;
        });
        
        if (logs.length > 0) {
          log += `\n#### 🌐 HTTP Requests & Responses\n\n`;
          logs.forEach((entry, idx) => {
            log += `<details><summary>📡 Request #${idx + 1}: ${entry.method} ${entry.url} (${entry.duration.toFixed(1)}ms)</summary>\n\n`;
            
            log += `**📤 Request:**\n`;
            log += '```json\n';
            log += JSON.stringify(entry.request, null, 2) + '\n';
            log += '```\n\n';
            
            log += `**📥 Response:**\n`;
            log += '```json\n';
            log += entry.response ? JSON.stringify(entry.response, null, 2) : 'No response';
            log += '\n```\n\n';
            
            log += `**⏱️ Duration:** ${entry.duration.toFixed(1)} ms  \n`;
            if (entry.error) {
              log += `**❌ Error:** ${entry.error}  \n`;
            }
            log += '\n</details>\n\n';
          });
        }
      }
      // --- FIN ---
      
      // Add requests and responses (legacy)
      test.requests.forEach((req, index) => {
        const resp = test.responses[index];
        log += `\n**Request ${index + 1}:**\n`;
        log += '```json\n' + req.method + ' ' + req.endpoint + '\n';
        if (req.data) {
          log += JSON.stringify(req.data, null, 2) + '\n';
        }
        log += '```\n';
        
        if (resp) {
          log += `\n**Response ${index + 1}:**\n`;
          log += '```json\n' + JSON.stringify(resp.data, null, 2) + '\n```\n';
        }
      });
      
      // Add console output for this test
      if (test.consoleOutput.length > 0) {
        log += `\n**Console Output:**\n\`\`\`\n`;
        test.consoleOutput.forEach(output => {
          const prefix = output.type === 'error' ? '❌' : output.type === 'warn' ? '⚠️' : 'ℹ️';
          log += `${prefix} ${output.message}\n`;
        });
        log += '```\n';
      }
      
      log += `\n---\n\n`;
    });
    
    return log;
  }

  writeReport(observations = '') {
    // Restore original console methods
    console.log = this.originalConsoleLog;
    console.warn = this.originalConsoleWarn;
    console.error = this.originalConsoleError;
    
    const timestamp = getTimestamp();
    const dir = path.join(__dirname, `../reports/${this.group}.e2e`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${timestamp}-${this.testName}.md`);
    
    const totalDuration = (Date.now() - this.startTime) / 1000;
    const passedTests = this.testResults.filter(t => t.status === 'PASSED').length;
    const failedTests = this.testResults.filter(t => t.status === 'FAILED').length;
    const totalTests = this.testResults.length;
    
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
}

// Global reporter instance for automatic Jest integration
let globalReporter = null;

// Jest hooks for automatic test tracking
function setupGlobalReporter(group, testName) {
  globalReporter = new EnhancedReporter(group, testName);
  
  // Hook into Jest's test lifecycle
  const originalTest = global.test;
  const originalIt = global.it;
  
  const wrapTest = (testFn) => (name, fn, timeout) => {
    return testFn(name, async () => {
      globalReporter.startTest(name);
      try {
        await fn();
        globalReporter.endTest('PASSED');
      } catch (error) {
        globalReporter.endTest('FAILED', error.message);
        throw error;
      }
    }, timeout);
  };
  
  global.test = wrapTest(originalTest);
  global.it = wrapTest(originalIt);
  
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

module.exports = { writeReport, EnhancedReporter, setupGlobalReporter, getGlobalReporter }; 