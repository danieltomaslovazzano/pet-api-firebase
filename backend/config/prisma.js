/**
 * Prisma Client Configuration
 * 
 * This module configures and exports the Prisma Client for PostgreSQL.
 */

const { PrismaClient } = require('@prisma/client');

// Use a singleton to avoid multiple instances in development
let prisma;

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prisma = global.prisma;

console.log('Prisma Client initialized for PostgreSQL connection');

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