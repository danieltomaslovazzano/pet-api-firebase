/**
 * Permissions Configuration
 * 
 * This file defines all permissions for different resources and actions.
 * It uses a declarative approach for easy modification and extension.
 * 
 * Structure:
 * - Resources (pets, users, etc.)
 *   - Actions (create, read, update, delete)
 *     - Roles that have direct access
 *     - Conditions that grant access if met
 */

const permissions = {
  pets: {
    create: {
      roles: ['user', 'org-staff', 'org-admin', 'admin'],
      conditions: [] // No special conditions for creation
    },
    read: {
      roles: ['*'], // Everyone can read
      conditions: [] 
    },
    update: {
      roles: ['admin'], // Admins can update any pet
      conditions: [
        { type: 'isOwner' }, // User is the owner
        { type: 'isSameOrganization' } // User is in the same organization as the pet owner
      ]
    },
    delete: {
      roles: ['admin'], // Only admins can delete any pet
      conditions: [
        { type: 'isOwner' }, // User is the owner
        { type: 'isSameOrganization', requiredRole: 'org-admin' } // Org admins can delete pets from their org
      ]
    },
    // Image-specific permissions
    updateImage: {
      roles: ['admin'],
      conditions: [
        { type: 'isOwner' },
        { type: 'isSameOrganization' }
      ]
    },
    removeImage: {
      roles: ['admin'],
      conditions: [
        { type: 'isOwner' },
        { type: 'isSameOrganization' }
      ]
    }
  }
};

module.exports = permissions; 