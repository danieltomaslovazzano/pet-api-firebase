/**
 * Data Transformation Script
 * 
 * Transforms the extracted Firebase data to match the Prisma schema format.
 * Handles special data types, relationships, and data structure changes.
 */

const fs = require('fs');
const path = require('path');

// Directory with extracted data
const inputDir = path.join(__dirname, 'extracted-data');
// Directory for transformed data
const outputDir = path.join(__dirname, 'transformed-data');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

/**
 * Transform Firestore Timestamp to ISO date string
 * @param {Object} data - Firestore timestamp object
 * @returns {string} - ISO date string
 */
function transformTimestamp(data) {
  if (!data) return null;
  
  // Handle Firestore timestamp objects
  if (data._seconds !== undefined && data._nanoseconds !== undefined) {
    const date = new Date(data._seconds * 1000);
    return date.toISOString();
  }
  
  // Already a date string
  return data;
}

/**
 * Transform User data
 * @param {Array} users - Array of user documents
 * @returns {Array} - Transformed users
 */
function transformUsers(users) {
  return users.map(user => {
    // Transform timestamps
    const createdAt = transformTimestamp(user.createdAt);
    const updatedAt = transformTimestamp(user.updatedAt);
    
    // Transform blocked users array (ensure it's an array)
    const blockedUsers = Array.isArray(user.blockedUsers) ? user.blockedUsers : [];
    
    // Create transformed user object
    return {
      id: user.id,
      email: user.email,
      name: user.name || null,
      role: user.role || 'user',
      status: user.status || 'active',
      profileImage: user.profileImage || user.profilePhoto,
      phone: user.phone,
      address: user.address,
      blockedUsers,
      createdAt,
      updatedAt: updatedAt || createdAt
    };
  });
}

/**
 * Transform Pet data
 * @param {Array} pets - Array of pet documents
 * @returns {Array} - Transformed pets
 */
function transformPets(pets) {
  return pets.map(pet => {
    // Transform timestamps
    const createdAt = transformTimestamp(pet.createdAt);
    const updatedAt = transformTimestamp(pet.updatedAt);
    
    // Transform location to JSON
    const location = pet.location ? pet.location : null;
    
    // Transform images array (ensure it's an array)
    const images = Array.isArray(pet.images) ? pet.images : [];
    
    // Transform owner relationship
    const ownerId = pet.ownerId || pet.userId;
    
    // Merge multiple description fields if they exist
    let description = pet.description;
    if (!description && (pet.description_en || pet.description_es)) {
      description = pet.description_en || pet.description_es;
    }
    
    return {
      id: pet.id,
      name: pet.name,
      species: pet.species,
      breed: pet.breed || null,
      age: pet.age ? parseInt(pet.age, 10) : null,
      gender: pet.gender || null,
      size: pet.size || null,
      color: pet.color || null,
      status: pet.status,
      description: description,
      images,
      location,
      ownerId: ownerId || null,
      createdAt,
      updatedAt: updatedAt || createdAt
    };
  });
}

/**
 * Transform Organization data
 * @param {Array} organizations - Array of organization documents
 * @returns {Array} - Transformed organizations
 */
function transformOrganizations(organizations) {
  return organizations.map(org => {
    // Transform timestamps
    const createdAt = transformTimestamp(org.createdAt);
    const updatedAt = transformTimestamp(org.updatedAt);
    
    return {
      id: org.id,
      name: org.name,
      description: org.description || null,
      logo: org.logo || null,
      address: org.address || null,
      phone: org.phone || null,
      email: org.email || null,
      status: org.status || 'active',
      createdAt,
      updatedAt: updatedAt || createdAt
    };
  });
}

/**
 * Transform Membership data
 * @param {Array} memberships - Array of membership documents
 * @returns {Array} - Transformed memberships
 */
function transformMemberships(memberships) {
  return memberships.map(membership => {
    // Transform timestamps
    const createdAt = transformTimestamp(membership.createdAt) || 
                      transformTimestamp(membership.joinedAt);
    const updatedAt = transformTimestamp(membership.updatedAt) || createdAt;
    
    return {
      id: membership.id,
      userId: membership.userId,
      organizationId: membership.organizationId,
      role: membership.role,
      status: membership.status || 'active',
      createdAt,
      updatedAt
    };
  });
}

/**
 * Transform Conversation data
 * @param {Array} conversations - Array of conversation documents
 * @param {Array} messages - Array of message documents (for lastMessageAt)
 * @returns {Array} - Transformed conversations
 */
function transformConversations(conversations, messages) {
  const messagesByConversation = messages.reduce((acc, message) => {
    if (!acc[message.conversationId]) {
      acc[message.conversationId] = [];
    }
    acc[message.conversationId].push(message);
    return acc;
  }, {});
  
  return conversations.map(conv => {
    // Transform timestamps
    const createdAt = transformTimestamp(conv.createdAt);
    
    // Find the most recent message timestamp for this conversation
    let lastMessageAt = createdAt;
    if (messagesByConversation[conv.id]) {
      const convMessages = messagesByConversation[conv.id];
      const timestamps = convMessages
        .map(msg => transformTimestamp(msg.timestamp))
        .filter(Boolean)
        .sort();
      
      if (timestamps.length > 0) {
        lastMessageAt = timestamps[timestamps.length - 1];
      }
    }
    
    // Get participants (needs to be handled in a separate step)
    const participantIds = Array.isArray(conv.participants) ? conv.participants : [];
    
    return {
      id: conv.id,
      title: conv.title || null,
      status: conv.status || 'active',
      createdAt,
      lastMessageAt,
      participantIds // This will be used in the import step
    };
  });
}

/**
 * Transform Message data
 * @param {Array} messages - Array of message documents
 * @returns {Array} - Transformed messages
 */
function transformMessages(messages) {
  return messages.map(message => {
    // Transform timestamps
    const timestamp = transformTimestamp(message.timestamp);
    
    // Transform attachments to JSON
    const attachments = message.attachments || null;
    
    // Transform location to JSON
    const location = message.location || null;
    
    return {
      id: message.id,
      conversationId: message.conversationId,
      senderId: message.senderId || message.userId,
      content: message.content,
      status: message.status || 'sent',
      timestamp,
      attachments,
      location
    };
  });
}

/**
 * Main transformation function
 */
async function transformData() {
  try {
    console.log('Starting data transformation...');
    
    // Read the extracted data files
    const users = JSON.parse(fs.readFileSync(path.join(inputDir, 'users.json')));
    const pets = JSON.parse(fs.readFileSync(path.join(inputDir, 'pets.json')));
    const organizations = JSON.parse(fs.readFileSync(path.join(inputDir, 'organizations.json')));
    const memberships = JSON.parse(fs.readFileSync(path.join(inputDir, 'memberships.json')));
    const conversations = JSON.parse(fs.readFileSync(path.join(inputDir, 'conversations.json')));
    const messages = JSON.parse(fs.readFileSync(path.join(inputDir, 'messages.json')));
    
    // Transform each entity
    const transformedUsers = transformUsers(users);
    const transformedPets = transformPets(pets);
    const transformedOrgs = transformOrganizations(organizations);
    const transformedMemberships = transformMemberships(memberships);
    const transformedConversations = transformConversations(conversations, messages);
    const transformedMessages = transformMessages(messages);
    
    // Write transformed data to files
    fs.writeFileSync(path.join(outputDir, 'users.json'), JSON.stringify(transformedUsers, null, 2));
    fs.writeFileSync(path.join(outputDir, 'pets.json'), JSON.stringify(transformedPets, null, 2));
    fs.writeFileSync(path.join(outputDir, 'organizations.json'), JSON.stringify(transformedOrgs, null, 2));
    fs.writeFileSync(path.join(outputDir, 'memberships.json'), JSON.stringify(transformedMemberships, null, 2));
    fs.writeFileSync(path.join(outputDir, 'conversations.json'), JSON.stringify(transformedConversations, null, 2));
    fs.writeFileSync(path.join(outputDir, 'messages.json'), JSON.stringify(transformedMessages, null, 2));
    
    // Create a summary file
    const summary = {
      users: transformedUsers.length,
      pets: transformedPets.length,
      organizations: transformedOrgs.length,
      memberships: transformedMemberships.length,
      conversations: transformedConversations.length,
      messages: transformedMessages.length
    };
    
    fs.writeFileSync(path.join(outputDir, 'transformation-summary.json'), JSON.stringify(summary, null, 2));
    
    console.log('Data transformation completed successfully!');
    console.log('Transformation summary:', summary);
    
    return summary;
  } catch (error) {
    console.error('Error transforming data:', error);
    throw error;
  }
}

// Run the transformation if this file is executed directly
if (require.main === module) {
  transformData()
    .then(() => {
      console.log('Transformation process completed.');
      process.exit(0);
    })
    .catch(error => {
      console.error('Transformation process failed:', error);
      process.exit(1);
    });
} else {
  // Export the function for use in other scripts
  module.exports = {
    transformData
  };
} 