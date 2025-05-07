/**
 * Prisma Client Configuration
 * 
 * This module configures and exports the Prisma Client for PostgreSQL.
 */

const { PrismaClient } = require('@prisma/client');

// Use a singleton to avoid multiple instances in development
let prisma;

// In test environment, use the mock implementation
if (process.env.NODE_ENV === 'test') {
  // Import the mock
  const { prismaMock } = require('../tests/helpers/testDbSetup');
  
  // If the import is possible, use it; otherwise create a basic mock
  if (prismaMock) {
    prisma = prismaMock;
    console.log('Using Prisma mock for testing');
  } else {
    // Fallback mock if the import fails (circular dependency protection)
    prisma = {
      user: {
        findUnique: () => null,
        findMany: () => [],
        create: (data) => data.data,
        update: (data) => data.data,
        delete: () => ({})
      },
      pet: {
        findUnique: () => null,
        findMany: () => [],
        create: (data) => data.data,
        update: (data) => data.data,
        delete: () => ({})
      },
      $connect: () => {},
      $disconnect: () => {},
      $transaction: (arr) => Promise.all(arr),
      $on: () => {}
    };
    console.log('Using fallback Prisma mock for testing');
  }
} else {
  // In production/development, use the real client
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
  
  console.log('Prisma Client initialized for PostgreSQL connection');
}

// Event handling for connection issues
prisma.$on('query', (e) => {
  console.log('Query: ' + e.query);
  console.log('Duration: ' + e.duration + 'ms');
});

// Error handling
prisma.$on('error', (e) => {
  console.error('Prisma Error:', e);
});

// Handle graceful shutdown
process.on('exit', () => {
  if (prisma && typeof prisma.$disconnect === 'function') {
    prisma.$disconnect();
  }
});

module.exports = { prisma }; 