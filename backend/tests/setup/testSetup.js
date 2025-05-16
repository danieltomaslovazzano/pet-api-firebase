/**
 * Test Setup Configuration
 * 
 * This file provides comprehensive test setup including:
 * - Transaction isolation
 * - Environment variables management
 * - Test data generation
 * - Authentication mocking
 * - Transaction management
 * - Mock reset utilities
 */

const { PrismaClient } = require('@prisma/client');
const { mockDeep, mockReset } = require('jest-mock-extended');
const testDataGenerator = require('./testDataGenerator');

// Create mock Prisma client
const prismaMock = mockDeep();

// Test environment variables
const testEnvVars = {
  NODE_ENV: 'test',
  DATABASE_URL: 'mock://localhost/test',
  JWT_SECRET: 'test-jwt-secret',
  JWT_EXPIRES_IN: '1h',
  FIREBASE_PROJECT_ID: 'test-project',
  FIREBASE_PRIVATE_KEY: 'test-key',
  FIREBASE_CLIENT_EMAIL: 'test@test.com'
};

// Test data store
const testDataStore = {
  users: [],
  pets: [],
  organizations: [],
  memberships: [],
  conversations: [],
  messages: []
};

// Transaction management
class TransactionManager {
  constructor() {
    this.transactions = new Map();
    this.currentTransaction = null;
  }

  async beginTransaction() {
    const transactionId = `tx-${Date.now()}`;
    this.transactions.set(transactionId, []);
    this.currentTransaction = transactionId;
    return transactionId;
  }

  async commitTransaction(transactionId) {
    const operations = this.transactions.get(transactionId);
    if (!operations) throw new Error('Transaction not found');
    
    try {
      for (const operation of operations) {
        await operation();
      }
      this.transactions.delete(transactionId);
      this.currentTransaction = null;
    } catch (error) {
      await this.rollbackTransaction(transactionId);
      throw error;
    }
  }

  async rollbackTransaction(transactionId) {
    this.transactions.delete(transactionId);
    this.currentTransaction = null;
  }

  addOperation(transactionId, operation) {
    const operations = this.transactions.get(transactionId);
    if (!operations) throw new Error('Transaction not found');
    operations.push(operation);
  }

  isInTransaction() {
    return this.currentTransaction !== null;
  }

  getCurrentTransaction() {
    return this.currentTransaction;
  }
}

// Test isolation utilities
const testIsolation = {
  async setup() {
    // Reset all mocks
    mockReset(prismaMock);
    jest.clearAllMocks();
    
    // Clear test data store
    Object.keys(testDataStore).forEach(key => {
      testDataStore[key] = [];
    });
    
    // Setup environment variables
    Object.entries(testEnvVars).forEach(([key, value]) => {
      process.env[key] = value;
    });

    // Setup transaction isolation
    prismaMock.$transaction.mockImplementation(async (operations) => {
      const transactionManager = new TransactionManager();
      const transactionId = await transactionManager.beginTransaction();
      
      try {
        const results = [];
        for (const operation of operations) {
          const result = await operation();
          results.push(result);
          transactionManager.addOperation(transactionId, () => operation());
        }
        await transactionManager.commitTransaction(transactionId);
        return results;
      } catch (error) {
        await transactionManager.rollbackTransaction(transactionId);
        throw error;
      }
    });

    // Setup Prisma mock implementations
    setupPrismaMocks();
  },
  
  async teardown() {
    // Clean up any remaining test data
    Object.keys(testDataStore).forEach(key => {
      testDataStore[key] = [];
    });
    
    // Reset environment variables
    Object.keys(testEnvVars).forEach(key => {
      delete process.env[key];
    });

    // Reset transaction state
    if (this.transactionManager) {
      const currentTransaction = this.transactionManager.getCurrentTransaction();
      if (currentTransaction) {
        await this.transactionManager.rollbackTransaction(currentTransaction);
      }
    }
  }
};

// Setup Prisma mock implementations
function setupPrismaMocks() {
  // User mocks
  prismaMock.user.findUnique.mockImplementation(async ({ where }) => {
    return testDataStore.users.find(u => u.id === where.id);
  });

  prismaMock.user.findMany.mockImplementation(async ({ where, skip, take, orderBy }) => {
    let users = [...testDataStore.users];
    
    if (where) {
      if (where.role) users = users.filter(u => u.role === where.role);
      if (where.status) users = users.filter(u => u.status === where.status);
      if (where.OR) {
        const searchTerm = where.OR[0].email.contains.toLowerCase();
        users = users.filter(u => 
          u.email.toLowerCase().includes(searchTerm) ||
          u.name.toLowerCase().includes(searchTerm) ||
          (u.phone && u.phone.toLowerCase().includes(searchTerm))
        );
      }
    }

    if (skip !== undefined && take !== undefined) {
      users = users.slice(skip, skip + take);
    }

    if (orderBy) {
      users.sort((a, b) => {
        const aValue = a[orderBy.createdAt];
        const bValue = b[orderBy.createdAt];
        return orderBy.createdAt === 'desc' ? bValue - aValue : aValue - bValue;
      });
    }

    return users;
  });

  prismaMock.user.create.mockImplementation(async ({ data }) => {
    const user = { ...data, id: data.id || testDataGenerator.generateId() };
    testDataStore.users.push(user);
    return user;
  });

  prismaMock.user.update.mockImplementation(async ({ where, data }) => {
    const index = testDataStore.users.findIndex(u => u.id === where.id);
    if (index === -1) throw new Error('User not found');
    
    const updatedUser = { ...testDataStore.users[index], ...data };
    testDataStore.users[index] = updatedUser;
    return updatedUser;
  });

  prismaMock.user.delete.mockImplementation(async ({ where }) => {
    const index = testDataStore.users.findIndex(u => u.id === where.id);
    if (index === -1) throw new Error('User not found');
    
    const deletedUser = testDataStore.users[index];
    testDataStore.users.splice(index, 1);
    return deletedUser;
  });

  // Add similar mock implementations for other models...
}

// Authentication mocking
const authMock = {
  setup() {
    // Mock Firebase Admin
    const admin = require('firebase-admin');
    
    // Setup default mock implementations
    admin.auth().verifyIdToken.mockResolvedValue({
      uid: 'test-user-id',
      email: 'test@example.com',
      role: 'user'
    });
    
    admin.auth().createUser.mockResolvedValue({
      uid: 'test-user-id',
      email: 'test@example.com',
      displayName: 'Test User'
    });
    
    admin.auth().getUser.mockResolvedValue({
      uid: 'test-user-id',
      email: 'test@example.com',
      displayName: 'Test User',
      customClaims: { role: 'user' }
    });
    
    admin.auth().listUsers.mockResolvedValue({
      users: [
        {
          uid: 'test-user-id',
          email: 'test@example.com',
          displayName: 'Test User',
          customClaims: { role: 'user' }
        }
      ]
    });
    
    admin.auth().setCustomUserClaims.mockResolvedValue();
  },
  
  reset() {
    jest.clearAllMocks();
  },
  
  mockUserWithRole(uid, role) {
    const admin = require('firebase-admin');
    admin.auth().verifyIdToken.mockResolvedValue({
      uid,
      email: 'test@example.com',
      role
    });
  },
  
  mockUserNotFound() {
    const admin = require('firebase-admin');
    admin.auth().verifyIdToken.mockRejectedValue(
      new Error('User not found')
    );
  }
};

module.exports = {
  prismaMock,
  testIsolation,
  authMock,
  testDataStore,
  TransactionManager
}; 