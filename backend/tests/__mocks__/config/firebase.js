module.exports = {
  auth: () => ({
    verifyIdToken: jest.fn().mockResolvedValue({ uid: 'test-user-id' }),
    getUser: jest.fn().mockResolvedValue({ uid: 'test-user-id', email: process.env.TEST_USER_EMAIL || 'test@example.com' }),
    createUser: jest.fn().mockResolvedValue({ uid: 'test-user-id', email: process.env.TEST_USER_EMAIL || 'test@example.com' }),
    updateUser: jest.fn().mockResolvedValue({ uid: 'test-user-id', email: process.env.TEST_USER_EMAIL || 'test@example.com' }),
    deleteUser: jest.fn().mockResolvedValue(),
    setCustomUserClaims: jest.fn().mockResolvedValue()
  }),
  firestore: () => ({
    collection: jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      get: jest.fn().mockResolvedValue({ empty: true, docs: [] }),
      doc: jest.fn().mockReturnThis(),
      set: jest.fn().mockResolvedValue(),
      update: jest.fn().mockResolvedValue(),
      delete: jest.fn().mockResolvedValue(),
      get: jest.fn().mockResolvedValue({ exists: false, data: () => ({}) })
    })
  }),
  storage: () => ({
    bucket: () => ({
      file: jest.fn().mockReturnValue({
        save: jest.fn().mockResolvedValue(),
        getSignedUrl: jest.fn().mockResolvedValue(['https://test-url.com']),
        delete: jest.fn().mockResolvedValue()
      })
    })
  })
}; 