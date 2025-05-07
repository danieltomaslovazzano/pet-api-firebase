/**
 * Test Data Generator
 * 
 * This utility provides functions to generate test data for all models.
 * It ensures consistent test data creation across all test suites.
 */

const { v4: uuidv4 } = require('uuid');

// Validation constants
const VALID_SPECIES = ['dog', 'cat', 'bird', 'fish', 'reptile', 'other'];
const VALID_STATUSES = ['available', 'adopted', 'lost', 'found'];

const testDataGenerator = {
  generateId: () => uuidv4(),
  
  generateEmail: () => `test-${uuidv4()}@example.com`,
  
  generateName: () => `Test User ${uuidv4().slice(0, 8)}`,
  
  generateUser: (overrides = {}) => ({
    id: uuidv4(),
    email: `test-${uuidv4()}@example.com`,
    name: `Test User ${uuidv4().slice(0, 8)}`,
    role: 'user',
    status: 'active',
    profileImage: null,
    phone: null,
    address: null,
    blockedUsers: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides
  }),
  
  generatePet: (overrides = {}) => ({
    id: uuidv4(),
    name: `Test Pet ${uuidv4().slice(0, 8)}`,
    species: VALID_SPECIES[0], // 'dog'
    breed: 'Mixed',
    age: 2,
    gender: 'male',
    size: 'medium',
    color: 'brown',
    status: VALID_STATUSES[0], // 'available'
    description: 'A lovely test pet',
    images: [`https://example.com/pet-${uuidv4()}.jpg`], // At least one valid image URL
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      address: 'San Francisco, CA'
    },
    ownerId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides
  }),
  
  generateOrganization: (overrides = {}) => ({
    id: uuidv4(),
    name: `Test Org ${uuidv4().slice(0, 8)}`,
    description: 'A test organization',
    logo: null,
    website: null,
    phone: null,
    address: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides
  }),
  
  generateMembership: (overrides = {}) => ({
    id: uuidv4(),
    userId: null,
    organizationId: null,
    role: 'member',
    status: 'active',
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides
  }),
  
  generateConversation: (overrides = {}) => ({
    id: uuidv4(),
    title: `Test Conversation ${uuidv4().slice(0, 8)}`,
    type: 'direct',
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides
  }),
  
  generateMessage: (overrides = {}) => ({
    id: uuidv4(),
    content: `Test message ${uuidv4().slice(0, 8)}`,
    senderId: null,
    conversationId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides
  }),
  
  generateUserWithPets: (petCount = 1) => {
    const user = testDataGenerator.generateUser();
    const pets = Array(petCount).fill(null).map(() => 
      testDataGenerator.generatePet({ ownerId: user.id })
    );
    return { user, pets };
  },
  
  generateOrganizationWithMembers: (memberCount = 1) => {
    const organization = testDataGenerator.generateOrganization();
    const members = Array(memberCount).fill(null).map(() => {
      const user = testDataGenerator.generateUser();
      return testDataGenerator.generateMembership({
        userId: user.id,
        organizationId: organization.id,
        user,
        organization
      });
    });
    return { organization, members };
  },
  
  generateConversationWithMessages: (messageCount = 1) => {
    const conversation = testDataGenerator.generateConversation();
    const messages = Array(messageCount).fill(null).map(() => {
      const sender = testDataGenerator.generateUser();
      return testDataGenerator.generateMessage({
        senderId: sender.id,
        conversationId: conversation.id,
        sender
      });
    });
    return { conversation, messages };
  }
};

module.exports = { testDataGenerator }; 