/**
 * Test Data Manager - Gestión de datos de prueba
 * Genera datos únicos para tests E2E
 */

const path = require('path');
const fs = require('fs');

class TestDataManager {
  constructor() {
    this.fixturesPath = path.join(__dirname, '../fixtures');
    this.counter = 0;
  }

  // Generate unique identifier
  getUniqueId() {
    return Date.now() + (++this.counter);
  }

  // Create user data with overrides
  createUser(overrides = {}) {
    const uniqueId = this.getUniqueId();
    const defaultUser = {
      name: `Test User ${uniqueId}`,
      email: `test-user-${uniqueId}@example.com`,
      password: 'TestPassword123!',
      role: 'user'
    };
    
    return { ...defaultUser, ...overrides };
  }

  // Create organization data with overrides
  createOrganization(overrides = {}) {
    const uniqueId = this.getUniqueId();
    const defaultOrg = {
      name: `Test Organization ${uniqueId}`,
      type: 'shelter',
      email: `test-org-${uniqueId}@example.com`,
      description: 'Test organization for E2E tests',
      address: '123 Test Street',
      phone: '+1234567890'
    };
    
    return { ...defaultOrg, ...overrides };
  }

  // Create pet data with overrides
  createPet(overrides = {}) {
    const uniqueId = this.getUniqueId();
    const defaultPet = {
      name: `Test Pet ${uniqueId}`,
      species: 'dog',
      breed: 'Mixed',
      age: 2,
      gender: 'male',
      size: 'medium',
      color: 'brown',
      status: 'available',
      visibility: 'visible',
      description: 'A lovely test pet for E2E testing',
      images: [
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop'
      ],
      location: {
        city: 'Test City',
        state: 'Test State',
        country: 'Test Country'
      }
    };
    
    return { ...defaultPet, ...overrides };
  }

  // Generate unique email
  generateUniqueEmail() {
    return `test-${this.getUniqueId()}@example.com`;
  }

  // Generate unique name
  generateUniqueName(prefix = 'Test') {
    return `${prefix} ${this.getUniqueId()}`;
  }

  // Create conversation data with overrides
  createConversation(overrides = {}) {
    const uniqueId = this.getUniqueId();
    const defaultConversation = {
      title: `Test Conversation ${uniqueId}`,
      participants: [], // Will be populated with actual user IDs
      type: 'private',
      status: 'active'
    };
    
    return { ...defaultConversation, ...overrides };
  }

  // Create message data with overrides
  createMessage(overrides = {}) {
    const uniqueId = this.getUniqueId();
    const defaultMessage = {
      content: `Test message content ${uniqueId}`,
      type: 'text',
      status: 'sent'
    };
    
    return { ...defaultMessage, ...overrides };
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

module.exports = { TestDataManager }; 