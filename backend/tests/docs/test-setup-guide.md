# Test Setup Guide

## Overview
This guide explains how to set up and run tests in our hybrid Firebase/Prisma environment. The application uses:
- Prisma with PostgreSQL for database operations
- Firebase Authentication for user management
- Firebase Storage for file operations

## Prerequisites
1. Node.js (v14 or higher)
2. PostgreSQL (v12 or higher)
3. Firebase project credentials
4. Environment variables set up

## Environment Setup

### Required Environment Variables
```bash
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/pet_api_test

# Firebase
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email

# JWT
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=1h
```

## Test Structure

### 1. Test Setup Files
- `jest.setup.js`: Global test configuration
- `testSetup.js`: Test utilities and mocks
- `testDbSetup.js`: Database setup and cleanup

### 2. Mock Implementations

#### Prisma Mocks
```javascript
// Example of mocking Prisma client
const { mockDeep } = require('jest-mock-extended');
const prismaMock = mockDeep();

jest.mock('../../config/prisma', () => ({
  prisma: prismaMock
}));
```

#### Firebase Mocks
```javascript
// Example of mocking Firebase Admin
jest.mock('firebase-admin', () => ({
  auth: () => ({
    verifyIdToken: jest.fn().mockResolvedValue({
      uid: 'test-user-id',
      email: 'test@example.com',
      role: 'user'
    })
  }),
  storage: () => ({
    bucket: () => ({
      file: jest.fn().mockReturnValue({
        save: jest.fn().mockResolvedValue(),
        getSignedUrl: jest.fn().mockResolvedValue(['https://test-url.com'])
      })
    })
  })
}));
```

## Writing Tests

### 1. Authentication Tests
```javascript
describe('Authentication', () => {
  beforeEach(() => {
    // Setup auth mock
    authMock.setup();
  });

  it('should verify valid token', async () => {
    const admin = require('firebase-admin');
    const token = 'valid-token';
    
    const result = await admin.auth().verifyIdToken(token);
    expect(result.uid).toBe('test-user-id');
  });
});
```

### 2. Database Tests
```javascript
describe('Database Operations', () => {
  beforeEach(async () => {
    // Setup test data
    await testIsolation.setup();
  });

  it('should create user', async () => {
    const user = await prismaMock.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User'
      }
    });
    
    expect(user.email).toBe('test@example.com');
  });
});
```

### 3. File Storage Tests
```javascript
describe('File Storage', () => {
  it('should upload file', async () => {
    const admin = require('firebase-admin');
    const file = {
      buffer: Buffer.from('test'),
      originalname: 'test.txt'
    };
    
    const result = await admin.storage()
      .bucket()
      .file('test.txt')
      .save(file.buffer);
      
    expect(result).toBeDefined();
  });
});
```

## Best Practices

1. **Test Isolation**
   - Use `beforeEach` to reset mocks and test data
   - Clean up after each test
   - Use transactions for database operations

2. **Mocking**
   - Mock external services (Firebase, Prisma)
   - Use realistic test data
   - Reset mocks between tests

3. **Authentication**
   - Test different user roles
   - Verify token validation
   - Test permission checks

4. **Database Operations**
   - Test CRUD operations
   - Verify relationships
   - Test transactions
   - Handle errors properly

5. **File Operations**
   - Test upload/download
   - Verify file metadata
   - Test error cases

## Common Issues and Solutions

1. **Database Connection Issues**
   - Verify DATABASE_URL is correct
   - Check PostgreSQL is running
   - Ensure test database exists

2. **Firebase Authentication Issues**
   - Verify Firebase credentials
   - Check token format
   - Ensure proper role setup

3. **Test Data Cleanup**
   - Use transactions for cleanup
   - Reset mocks properly
   - Clear test data store

## Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- path/to/test.js

# Run tests with coverage
npm test -- --coverage
```

## Contributing

1. Follow the test structure
2. Add new test cases as needed
3. Update documentation
4. Maintain test coverage
5. Use proper mocking
6. Clean up after tests 