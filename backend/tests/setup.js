const { PrismaClient } = require('@prisma/client');

// Initialize Prisma client for testing
const prisma = new PrismaClient();

// Clean up database before tests
beforeAll(async () => {
  // Clean up all tables
  await prisma.$transaction([
    prisma.message.deleteMany(),
    prisma.conversation.deleteMany(),
    prisma.membership.deleteMany(),
    prisma.pet.deleteMany(),
    prisma.user.deleteMany(),
    prisma.organization.deleteMany(),
  ]);
});

// Disconnect Prisma after tests
afterAll(async () => {
  await prisma.$disconnect();
});

module.exports = prisma; 