/**
 * Model Adapter
 * 
 * This adapter routes database operations to either Firebase or Prisma implementations
 * based on the environment configuration. This allows for a smooth migration
 * by enabling switching between implementations through configuration.
 */

// Import model implementations
const firebaseUserModel = require('./userModel');
const firebasePetModel = require('./petModel');
const firebaseOrganizationModel = require('./organizationModel');
const firebaseMembershipModel = require('./membershipModel');
const firebaseConversationModel = require('./conversationModel');
const firebaseMessageModel = require('./messageModel');

// Import Prisma implementations
const prismaUserModel = require('./prisma/userModel');
const prismaPetModel = require('./prisma/petModel');
const prismaOrganizationModel = require('./prisma/organizationModel');
const prismaMembershipModel = require('./prisma/membershipModel');
const prismaConversationModel = require('./prisma/conversationModel');
const prismaMessageModel = require('./prisma/messageModel');

// Determine which implementation to use based on environment variable
const usePostgres = process.env.USE_POSTGRES === 'true';

// Get the appropriate implementation for each model
const userModel = usePostgres ? prismaUserModel : firebaseUserModel;
const petModel = usePostgres ? prismaPetModel : firebasePetModel;
const organizationModel = usePostgres ? prismaOrganizationModel : firebaseOrganizationModel;
const membershipModel = usePostgres ? prismaMembershipModel : firebaseMembershipModel;
const conversationModel = usePostgres ? prismaConversationModel : firebaseConversationModel;
const messageModel = usePostgres ? prismaMessageModel : firebaseMessageModel;

// Log which database is being used
console.log(`Using ${usePostgres ? 'PostgreSQL' : 'Firebase'} database`);

// Export models
module.exports = {
  userModel,
  petModel,
  organizationModel,
  membershipModel,
  conversationModel,
  messageModel
}; 