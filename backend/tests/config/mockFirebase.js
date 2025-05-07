/**
 * Mock Firebase Configuration
 * 
 * This file provides mock implementations for Firebase services during testing.
 */

// Mock Firestore implementation
const mockFirestore = {
  collection: (collectionName) => ({
    doc: (docId) => ({
      get: () => Promise.resolve({
        exists: false,
        data: () => null,
        id: docId
      }),
      set: (data) => Promise.resolve({ id: docId, ...data }),
      update: (data) => Promise.resolve({ id: docId, ...data }),
      delete: () => Promise.resolve(true)
    }),
    where: () => ({
      where: () => ({
        get: () => Promise.resolve({
          empty: true,
          docs: [],
          forEach: (callback) => {}
        })
      }),
      get: () => Promise.resolve({
        empty: true,
        docs: [],
        forEach: (callback) => {}
      })
    }),
    add: (data) => Promise.resolve({ id: 'mock-doc-id', ...data })
  })
};

// Mock Firebase Admin implementation
const mockAdmin = {
  initializeApp: () => {},
  credential: {
    cert: () => ({})
  },
  firestore: () => mockFirestore,
  auth: () => ({
    verifyIdToken: () => Promise.resolve({ uid: 'test-user' }),
    getUser: () => Promise.resolve({ uid: 'test-user', email: 'test@example.com' }),
    createUser: (userData) => Promise.resolve({ uid: 'new-test-user', ...userData })
  }),
  storage: () => ({
    bucket: () => ({
      file: () => ({
        delete: () => Promise.resolve(),
        save: () => Promise.resolve(),
        getSignedUrl: () => Promise.resolve(['https://example.com/test-url'])
      }),
      upload: () => Promise.resolve()
    })
  })
};

// Mock the Firebase Admin module
jest.mock('firebase-admin', () => mockAdmin);

module.exports = {
  mockAdmin,
  mockFirestore
}; 