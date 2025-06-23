/**
 * Auth Helper - Simple authentication management
 * Clean authentication without complex user pools or rate limiting
 */

const { ApiClient } = require('./api');

class AuthManager {
  constructor() {
    this.api = new ApiClient();
    this.tokens = new Map(); // Simple token cache
  }

  // Admin login functionality
  async loginAdmin() {
    const credentials = {
      email: process.env.ADMIN_EMAIL || 'admin@test.com',
      password: process.env.ADMIN_PASSWORD || 'TestAdmin123!'
    };

    try {
      const response = await this.api.post('/auth/login', credentials);
      
      if (response.status === 200 && response.data.success) {
        const token = response.data.data.token;
        this.tokens.set('admin', token);
        return {
          token,
          user: response.data.data.user
        };
      } else {
        throw new Error('Admin login failed');
      }
    } catch (error) {
      throw new Error(`Admin login error: ${error.message}`);
    }
  }

  // User login basic
  async loginUser(userData) {
    const credentials = {
      email: userData.email,
      password: userData.password
    };

    try {
      const response = await this.api.post('/auth/login', credentials);
      
      if (response.status === 200 && response.data.success) {
        const token = response.data.data.token;
        this.tokens.set(userData.email, token);
        return {
          token,
          user: response.data.data.user
        };
      } else {
        throw new Error('User login failed');
      }
    } catch (error) {
      throw new Error(`User login error: ${error.message}`);
    }
  }

  // Create test user
  async createTestUser(userData) {
    try {
      const response = await this.api.post('/auth/register', userData);
      
      if (response.status === 201 && response.data.success) {
        return response.data.data.user;
      } else {
        throw new Error('User creation failed');
      }
    } catch (error) {
      throw new Error(`User creation error: ${error.message}`);
    }
  }

  // Get authentication headers
  getAuthHeaders(token) {
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }

  // Get cached token
  getToken(identifier) {
    return this.tokens.get(identifier);
  }

  // Clear token cache
  clearTokens() {
    this.tokens.clear();
  }

  // Set API client auth
  setApiAuth(token) {
    this.api.setAuth(token);
  }
}

module.exports = {
  AuthManager
}; 