/**
 * Test Database Setup Helper
 * 
 * This file provides utilities for setting up and cleaning up the test database.
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Initialize the test environment
 * This function is called before all tests run
 */
async function initTestEnvironment() {
  try {
    // Verify database connection
    await prisma.$connect();
    
    // Run migrations if needed
    // Note: In a real setup, you might want to run migrations here
    // await prisma.$executeRaw`CREATE SCHEMA IF NOT EXISTS test`;
    
    console.log('Test database connection established');
  } catch (error) {
    console.error('Error initializing test environment:', error);
    throw error;
  }
}

/**
 * Clean up the database
 * This function is called before each test and after all tests
 */
async function cleanupPostgresDb() {
  try {
    // Delete all data from all tables
    // Note: The order matters due to foreign key constraints
    await prisma.$transaction([
      prisma.message.deleteMany({}),
      prisma.conversation.deleteMany({}),
      prisma.membership.deleteMany({}),
      prisma.pet.deleteMany({}),
      prisma.organization.deleteMany({}),
      prisma.user.deleteMany({})
    ]);
    
    console.log('Database cleaned up successfully');
  } catch (error) {
    console.error('Error cleaning up database:', error);
    throw error;
  }
}

/**
 * Close database connections
 * This function is called after all tests run
 */
async function closeDbConnections() {
  try {
    await prisma.$disconnect();
    console.log('Database connections closed');
  } catch (error) {
    console.error('Error closing database connections:', error);
    throw error;
  }
}

module.exports = {
  initTestEnvironment,
  cleanupPostgresDb,
  closeDbConnections
}; 