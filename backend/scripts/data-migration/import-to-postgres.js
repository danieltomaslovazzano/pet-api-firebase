/**
 * PostgreSQL Data Import Script
 * 
 * Imports the transformed data into PostgreSQL database using Prisma.
 * Handles relationships and preserves IDs from the original data.
 */

// Load environment variables
require('dotenv').config({ path: '../../.env' });

const fs = require('fs');
const path = require('path');
const { prisma } = require('../../config/prisma');

// Directory with transformed data
const inputDir = path.join(__dirname, 'transformed-data');

/**
 * Import users data
 * @returns {Promise<Array>} - Imported users
 */
async function importUsers() {
  try {
    console.log('Importing users...');
    
    // Read transformed users data
    const users = JSON.parse(fs.readFileSync(path.join(inputDir, 'users.json')));
    
    // Track import results
    const results = {
      total: users.length,
      success: 0,
      errors: 0,
      errorDetails: []
    };
    
    // Import each user
    for (const user of users) {
      try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
          where: { id: user.id }
        });
        
        if (existingUser) {
          // Update existing user
          await prisma.user.update({
            where: { id: user.id },
            data: {
              email: user.email,
              name: user.name,
              role: user.role,
              status: user.status,
              profileImage: user.profileImage,
              phone: user.phone,
              address: user.address,
              blockedUsers: user.blockedUsers,
              updatedAt: user.updatedAt ? new Date(user.updatedAt) : new Date()
            }
          });
        } else {
          // Create new user
          await prisma.user.create({
            data: {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
              status: user.status,
              profileImage: user.profileImage,
              phone: user.phone,
              address: user.address,
              blockedUsers: user.blockedUsers,
              createdAt: user.createdAt ? new Date(user.createdAt) : new Date(),
              updatedAt: user.updatedAt ? new Date(user.updatedAt) : new Date()
            }
          });
        }
        
        results.success++;
      } catch (error) {
        results.errors++;
        results.errorDetails.push({
          id: user.id,
          email: user.email,
          error: error.message
        });
        console.error(`Error importing user ${user.id} (${user.email}):`, error.message);
      }
    }
    
    console.log(`Users import completed: ${results.success} successful, ${results.errors} errors`);
    return results;
  } catch (error) {
    console.error('Error importing users:', error);
    throw error;
  }
}

/**
 * Import organizations data
 * @returns {Promise<Array>} - Imported organizations
 */
async function importOrganizations() {
  try {
    console.log('Importing organizations...');
    
    // Read transformed organizations data
    const organizations = JSON.parse(fs.readFileSync(path.join(inputDir, 'organizations.json')));
    
    // Track import results
    const results = {
      total: organizations.length,
      success: 0,
      errors: 0,
      errorDetails: []
    };
    
    // Import each organization
    for (const org of organizations) {
      try {
        // Check if organization already exists
        const existingOrg = await prisma.organization.findUnique({
          where: { id: org.id }
        });
        
        if (existingOrg) {
          // Update existing organization
          await prisma.organization.update({
            where: { id: org.id },
            data: {
              name: org.name,
              description: org.description,
              logo: org.logo,
              address: org.address,
              phone: org.phone,
              email: org.email,
              status: org.status,
              updatedAt: org.updatedAt ? new Date(org.updatedAt) : new Date()
            }
          });
        } else {
          // Create new organization
          await prisma.organization.create({
            data: {
              id: org.id,
              name: org.name,
              description: org.description,
              logo: org.logo,
              address: org.address,
              phone: org.phone,
              email: org.email,
              status: org.status,
              createdAt: org.createdAt ? new Date(org.createdAt) : new Date(),
              updatedAt: org.updatedAt ? new Date(org.updatedAt) : new Date()
            }
          });
        }
        
        results.success++;
      } catch (error) {
        results.errors++;
        results.errorDetails.push({
          id: org.id,
          name: org.name,
          error: error.message
        });
        console.error(`Error importing organization ${org.id} (${org.name}):`, error.message);
      }
    }
    
    console.log(`Organizations import completed: ${results.success} successful, ${results.errors} errors`);
    return results;
  } catch (error) {
    console.error('Error importing organizations:', error);
    throw error;
  }
}

/**
 * Import memberships data
 * @returns {Promise<Array>} - Imported memberships
 */
async function importMemberships() {
  try {
    console.log('Importing memberships...');
    
    // Read transformed memberships data
    const memberships = JSON.parse(fs.readFileSync(path.join(inputDir, 'memberships.json')));
    
    // Track import results
    const results = {
      total: memberships.length,
      success: 0,
      errors: 0,
      errorDetails: []
    };
    
    // Import each membership
    for (const membership of memberships) {
      try {
        // Verify that both user and organization exist
        const user = await prisma.user.findUnique({ where: { id: membership.userId } });
        const org = await prisma.organization.findUnique({ where: { id: membership.organizationId } });
        
        if (!user || !org) {
          throw new Error(`Missing ${!user ? 'user' : 'organization'} reference`);
        }
        
        // Check for existing membership
        const existingMembership = await prisma.membership.findFirst({
          where: {
            userId: membership.userId,
            organizationId: membership.organizationId
          }
        });
        
        if (existingMembership) {
          // Update existing membership
          await prisma.membership.update({
            where: { id: existingMembership.id },
            data: {
              role: membership.role,
              status: membership.status,
              updatedAt: membership.updatedAt ? new Date(membership.updatedAt) : new Date()
            }
          });
        } else {
          // Create new membership
          await prisma.membership.create({
            data: {
              id: membership.id,
              userId: membership.userId,
              organizationId: membership.organizationId,
              role: membership.role,
              status: membership.status,
              createdAt: membership.createdAt ? new Date(membership.createdAt) : new Date(),
              updatedAt: membership.updatedAt ? new Date(membership.updatedAt) : new Date()
            }
          });
        }
        
        results.success++;
      } catch (error) {
        results.errors++;
        results.errorDetails.push({
          id: membership.id,
          userId: membership.userId,
          organizationId: membership.organizationId,
          error: error.message
        });
        console.error(`Error importing membership ${membership.id}:`, error.message);
      }
    }
    
    console.log(`Memberships import completed: ${results.success} successful, ${results.errors} errors`);
    return results;
  } catch (error) {
    console.error('Error importing memberships:', error);
    throw error;
  }
}

/**
 * Import pets data
 * @returns {Promise<Array>} - Imported pets
 */
async function importPets() {
  try {
    console.log('Importing pets...');
    
    // Read transformed pets data
    const pets = JSON.parse(fs.readFileSync(path.join(inputDir, 'pets.json')));
    
    // Track import results
    const results = {
      total: pets.length,
      success: 0,
      errors: 0,
      errorDetails: []
    };
    
    // Import each pet
    for (const pet of pets) {
      try {
        // If ownerId is provided, check that user exists
        if (pet.ownerId) {
          const owner = await prisma.user.findUnique({ where: { id: pet.ownerId } });
          if (!owner) {
            console.warn(`Owner ${pet.ownerId} not found for pet ${pet.id}. Setting owner to null.`);
            pet.ownerId = null;
          }
        }
        
        // Check if pet already exists
        const existingPet = await prisma.pet.findUnique({
          where: { id: pet.id }
        });
        
        // Convert location to JSON if it's not null
        const location = pet.location ? pet.location : null;
        
        if (existingPet) {
          // Update existing pet
          await prisma.pet.update({
            where: { id: pet.id },
            data: {
              name: pet.name,
              species: pet.species,
              breed: pet.breed,
              age: pet.age,
              gender: pet.gender,
              size: pet.size,
              color: pet.color,
              status: pet.status,
              description: pet.description,
              images: pet.images,
              location,
              ownerId: pet.ownerId,
              updatedAt: pet.updatedAt ? new Date(pet.updatedAt) : new Date()
            }
          });
        } else {
          // Create new pet
          await prisma.pet.create({
            data: {
              id: pet.id,
              name: pet.name,
              species: pet.species,
              breed: pet.breed,
              age: pet.age,
              gender: pet.gender,
              size: pet.size,
              color: pet.color,
              status: pet.status,
              description: pet.description,
              images: pet.images,
              location,
              ownerId: pet.ownerId,
              createdAt: pet.createdAt ? new Date(pet.createdAt) : new Date(),
              updatedAt: pet.updatedAt ? new Date(pet.updatedAt) : new Date()
            }
          });
        }
        
        results.success++;
      } catch (error) {
        results.errors++;
        results.errorDetails.push({
          id: pet.id,
          name: pet.name,
          error: error.message
        });
        console.error(`Error importing pet ${pet.id} (${pet.name}):`, error.message);
      }
    }
    
    console.log(`Pets import completed: ${results.success} successful, ${results.errors} errors`);
    return results;
  } catch (error) {
    console.error('Error importing pets:', error);
    throw error;
  }
}

/**
 * Import conversations data
 * @returns {Promise<Array>} - Imported conversations
 */
async function importConversations() {
  try {
    console.log('Importing conversations...');
    
    // Read transformed conversations data
    const conversations = JSON.parse(fs.readFileSync(path.join(inputDir, 'conversations.json')));
    
    // Track import results
    const results = {
      total: conversations.length,
      success: 0,
      errors: 0,
      errorDetails: []
    };
    
    // Import each conversation
    for (const conv of conversations) {
      try {
        // Check if conversation already exists
        const existingConversation = await prisma.conversation.findUnique({
          where: { id: conv.id }
        });
        
        // Verify that all participants exist
        const participantIds = conv.participantIds || [];
        const validParticipantIds = [];
        
        for (const userId of participantIds) {
          const user = await prisma.user.findUnique({ where: { id: userId } });
          if (user) {
            validParticipantIds.push({ id: userId });
          } else {
            console.warn(`Participant ${userId} not found for conversation ${conv.id}`);
          }
        }
        
        if (existingConversation) {
          // Update existing conversation
          await prisma.conversation.update({
            where: { id: conv.id },
            data: {
              title: conv.title,
              status: conv.status,
              lastMessageAt: conv.lastMessageAt ? new Date(conv.lastMessageAt) : new Date(),
              participants: {
                connect: validParticipantIds
              }
            }
          });
        } else {
          // Create new conversation
          await prisma.conversation.create({
            data: {
              id: conv.id,
              title: conv.title,
              status: conv.status,
              createdAt: conv.createdAt ? new Date(conv.createdAt) : new Date(),
              lastMessageAt: conv.lastMessageAt ? new Date(conv.lastMessageAt) : new Date(),
              participants: {
                connect: validParticipantIds
              }
            }
          });
        }
        
        results.success++;
      } catch (error) {
        results.errors++;
        results.errorDetails.push({
          id: conv.id,
          error: error.message
        });
        console.error(`Error importing conversation ${conv.id}:`, error.message);
      }
    }
    
    console.log(`Conversations import completed: ${results.success} successful, ${results.errors} errors`);
    return results;
  } catch (error) {
    console.error('Error importing conversations:', error);
    throw error;
  }
}

/**
 * Import messages data
 * @returns {Promise<Array>} - Imported messages
 */
async function importMessages() {
  try {
    console.log('Importing messages...');
    
    // Read transformed messages data
    const messages = JSON.parse(fs.readFileSync(path.join(inputDir, 'messages.json')));
    
    // Track import results
    const results = {
      total: messages.length,
      success: 0,
      errors: 0,
      errorDetails: []
    };
    
    // Import each message
    for (const message of messages) {
      try {
        // Verify that conversation and sender exist
        const conversation = await prisma.conversation.findUnique({ 
          where: { id: message.conversationId } 
        });
        
        const sender = await prisma.user.findUnique({ 
          where: { id: message.senderId } 
        });
        
        if (!conversation || !sender) {
          throw new Error(`Missing ${!conversation ? 'conversation' : 'sender'} reference`);
        }
        
        // Check if message already exists
        const existingMessage = await prisma.message.findUnique({
          where: { id: message.id }
        });
        
        // Convert attachments and location to JSON if they're not null
        const attachments = message.attachments ? message.attachments : null;
        const location = message.location ? message.location : null;
        
        if (existingMessage) {
          // Update existing message
          await prisma.message.update({
            where: { id: message.id },
            data: {
              content: message.content,
              status: message.status,
              timestamp: message.timestamp ? new Date(message.timestamp) : new Date(),
              attachments,
              location
            }
          });
        } else {
          // Create new message
          await prisma.message.create({
            data: {
              id: message.id,
              conversationId: message.conversationId,
              senderId: message.senderId,
              content: message.content,
              status: message.status,
              timestamp: message.timestamp ? new Date(message.timestamp) : new Date(),
              attachments,
              location
            }
          });
        }
        
        results.success++;
      } catch (error) {
        results.errors++;
        results.errorDetails.push({
          id: message.id,
          conversationId: message.conversationId,
          error: error.message
        });
        console.error(`Error importing message ${message.id}:`, error.message);
      }
    }
    
    console.log(`Messages import completed: ${results.success} successful, ${results.errors} errors`);
    return results;
  } catch (error) {
    console.error('Error importing messages:', error);
    throw error;
  }
}

/**
 * Main import function - imports all entities in the correct order to maintain references
 */
async function importAllData() {
  try {
    console.log('Starting data import to PostgreSQL...');
    
    const results = {};
    
    // Import in the correct order to handle dependencies
    results.users = await importUsers();
    results.organizations = await importOrganizations();
    results.memberships = await importMemberships();
    results.pets = await importPets();
    results.conversations = await importConversations();
    results.messages = await importMessages();
    
    // Save results to file
    const summaryPath = path.join(__dirname, 'import-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));
    
    console.log('Data import completed successfully!');
    console.log(`Import summary saved to: ${summaryPath}`);
    
    return results;
  } catch (error) {
    console.error('Error importing data:', error);
    throw error;
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
}

// Run the import if this file is executed directly
if (require.main === module) {
  importAllData()
    .then(() => {
      console.log('Import process completed.');
      process.exit(0);
    })
    .catch(error => {
      console.error('Import process failed:', error);
      process.exit(1);
    });
} else {
  // Export the function for use in other scripts
  module.exports = {
    importAllData,
    importUsers,
    importOrganizations,
    importMemberships,
    importPets,
    importConversations,
    importMessages
  };
} 