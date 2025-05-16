/**
 * Model Adapter
 * 
 * This adapter provides access to the Prisma model implementations.
 * All database operations are now handled through Prisma.
 */

// Import Prisma implementations
const prismaUserModel = require('./prisma/userModel');
const prismaPetModel = require('./prisma/petModel');
const prismaOrganizationModel = require('./prisma/organizationModel');
const prismaMembershipModel = require('./prisma/membershipModel');
const prismaConversationModel = require('./prisma/conversationModel');
const prismaMessageModel = require('./prisma/messageModel');

// Export Prisma models
module.exports = {
  userModel: prismaUserModel,
  petModel: prismaPetModel,
  organizationModel: prismaOrganizationModel,
  membershipModel: prismaMembershipModel,
  conversationModel: prismaConversationModel,
  messageModel: prismaMessageModel
}; 