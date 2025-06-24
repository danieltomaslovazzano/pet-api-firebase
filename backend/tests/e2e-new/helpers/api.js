/**
 * API Helper - HTTP client wrapper
 * Simple axios wrapper for E2E tests
 */

const axios = require('axios');

class ApiClient {
  constructor(baseURL = process.env.API_URL || 'http://localhost:3000/api') {
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Set authentication token
  setAuth(token) {
    if (token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common['Authorization'];
    }
  }

  // Clear authentication
  clearAuth() {
    delete this.client.defaults.headers.common['Authorization'];
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

  async patch(url, data = {}, options = {}) {
    try {
      const response = await this.client.patch(url, data, options);
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

  // Private method to handle errors
  _handleError(error) {
    if (error.response) {
      // Log detailed error for debugging
      console.error('API Error Details:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        url: error.config?.url,
        method: error.config?.method?.toUpperCase()
      });
      
      // If validation errors exist, show them in detail
      if (error.response.data?.errors) {
        console.error('Validation Errors:', JSON.stringify(error.response.data.errors, null, 2));
      }
      if (error.response.data?.meta?.availableTypes) {
        console.error('Available Types:', error.response.data.meta.availableTypes);
      }
    }
    return error;
  }
}

// Utility functions for expectations
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