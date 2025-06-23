/**
 * API Helper - Simple HTTP client wrapper
 * Clean, simple axios wrapper optimized for E2E tests
 */

const axios = require('axios');

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL || process.env.API_URL || 'http://localhost:3000/api';
    this.token = null;
    
    // Create axios instance
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Set authentication token
  setAuth(token) {
    this.token = token;
    if (token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common['Authorization'];
    }
  }

  // HTTP Methods
  async get(url, options = {}) {
    try {
      const response = await this.client.get(url, options);
      return response;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  async post(url, data = {}, options = {}) {
    try {
      const response = await this.client.post(url, data, options);
      return response;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  async put(url, data = {}, options = {}) {
    try {
      const response = await this.client.put(url, data, options);
      return response;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  async delete(url, options = {}) {
    try {
      const response = await this.client.delete(url, options);
      return response;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  // Error handling
  _handleError(error) {
    if (error.response) {
      // Server responded with error status
      return error;
    } else if (error.request) {
      // Request was made but no response received
      throw new Error(`No response received: ${error.message}`);
    } else {
      // Something else happened
      throw new Error(`Request error: ${error.message}`);
    }
  }
}

// Utility functions for test assertions
function expectSuccess(response) {
  expect(response.status).toBeGreaterThanOrEqual(200);
  expect(response.status).toBeLessThan(300);
  expect(response.data).toBeDefined();
}

function expectError(response, expectedStatus) {
  expect(response.response.status).toBe(expectedStatus);
  expect(response.response.data).toBeDefined();
}

module.exports = {
  ApiClient,
  expectSuccess,
  expectError
}; 