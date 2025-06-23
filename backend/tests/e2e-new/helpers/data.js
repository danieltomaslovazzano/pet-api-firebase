/**
 * Data Helper - Test data management
 * Simple test data generation and fixtures integration
 */

const path = require('path');
const fs = require('fs');

class TestDataManager {
  constructor() {
    this.fixturesPath = path.join(__dirname, '../fixtures');
    this.counter = Date.now(); // Simple unique ID generator
  }

  // Create organization data with overrides
  createOrganization(overrides = {}) {
    const defaultOrg = {
      name: `Test Organization ${this.getUniqueId()}`,
      type: 'veterinary_clinic',
      description: 'Test organization for E2E tests',
      address: '123 Test Street',
      phone: '+1234567890'
    };
    
    return { ...defaultOrg, ...overrides };
  }

  // Create user data with overrides
  createUser(overrides = {}) {
    const uniqueId = this.getUniqueId();
    const defaultUser = {
      email: `testuser${uniqueId}@example.com`,
      password: 'TestPassword123!',
      name: `Test User ${uniqueId}`,
      firstName: 'Test',
      lastName: `User${uniqueId}`
    };
    
    return { ...defaultUser, ...overrides };
  }

  // Create pet data with overrides
  createPet(overrides = {}) {
    const uniqueId = this.getUniqueId();
    const defaultPet = {
      name: `TestPet${uniqueId}`,
      species: 'dog',
      breed: 'Mixed',
      age: 3,
      weight: 15.5,
      description: 'Friendly test pet'
    };
    
    return { ...defaultPet, ...overrides };
  }

  // Generate unique email
  generateUniqueEmail(prefix = 'test') {
    return `${prefix}${this.getUniqueId()}@example.com`;
  }

  // Generate unique ID
  getUniqueId() {
    return ++this.counter;
  }

  // Load fixture file (for future use)
  loadFixture(filename) {
    try {
      const filePath = path.join(this.fixturesPath, filename);
      if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
      return null;
    } catch (error) {
      console.warn(`Could not load fixture ${filename}:`, error.message);
      return null;
    }
  }
}

module.exports = {
  TestDataManager
}; 