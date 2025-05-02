/**
 * Permission Rules Configuration
 * 
 * This file defines all permissions for different resources and actions.
 * It uses a declarative approach for easy modification and extension.
 * 
 * Structure:
 * - Resources (pets, users, organizations, etc.)
 *   - Actions (create, read, update, delete)
 *     - Roles that have direct access
 *     - Conditions that grant access if met
 * 
 * Available roles:
 * - 'admin'      : Global administrator with full system access
 * - 'moderator'  : Can moderate content but not manage system settings
 * - 'org-admin'  : Administrator of a specific organization
 * - 'org-staff'  : Staff member of a specific organization
 * - 'user'       : Regular authenticated user
 * - '*'          : Any user (including unauthenticated)
 * 
 * Available condition types:
 * - 'isOwner'           : User is the owner of the resource
 * - 'isSameOrganization': User belongs to the same organization as the resource
 * - 'isOrgAdmin'        : User is an administrator of the specific organization
 * - 'isOrgStaff'        : User is staff of the specific organization
 * - 'isPublic'          : The resource is marked as public
 */

const permissionRules = {
  // === PET PERMISSIONS ===
  pets: {
    create: {
      roles: ['user', 'org-staff', 'org-admin', 'moderator', 'admin'],
      conditions: [] // No special conditions for creation
    },
    read: {
      roles: ['*'], // Everyone can read
      conditions: [] 
    },
    readAll: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isSameOrganization', requiredRole: 'org-admin' }, // Org admins can see all pets in their org
        { type: 'isSameOrganization', requiredRole: 'org-staff' }  // Org staff can see all pets in their org
      ]
    },
    update: {
      roles: ['admin', 'moderator'], // Admins and moderators can update any pet
      conditions: [
        { type: 'isOwner' }, // User is the owner
        { type: 'isSameOrganization', requiredRole: 'org-admin' }, // Org admins can update pets from their org
        { type: 'isSameOrganization', requiredRole: 'org-staff' }  // Org staff can update pets from their org
      ]
    },
    delete: {
      roles: ['admin', 'moderator'], // Admins and moderators can delete any pet
      conditions: [
        { type: 'isOwner' }, // User is the owner
        { type: 'isSameOrganization', requiredRole: 'org-admin' } // Org admins can delete pets from their org
      ]
    },
    // Image-specific permissions
    updateImage: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isOwner' },
        { type: 'isSameOrganization', requiredRole: 'org-admin' },
        { type: 'isSameOrganization', requiredRole: 'org-staff' }
      ]
    },
    removeImage: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isOwner' },
        { type: 'isSameOrganization', requiredRole: 'org-admin' }
      ]
    }
  },
  
  // === ORGANIZATION PERMISSIONS ===
  organizations: {
    create: {
      roles: ['user', 'admin'],
      conditions: []
    },
    read: {
      roles: ['*'], // Public information about organizations
      conditions: []
    },
    readDetails: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isOrgMember' } // Any member can see details of their org
      ]
    },
    update: {
      roles: ['admin'],
      conditions: [
        { type: 'isOrgAdmin' } // User is an admin of this organization
      ]
    },
    delete: {
      roles: ['admin'],
      conditions: [
        { type: 'isOrgOwner' } // Only the owner of the org can delete it
      ]
    },
    // Member management permissions
    addMember: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isOrgAdmin' }
      ]
    },
    removeMember: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isOrgAdmin' }
      ]
    },
    updateMember: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isOrgAdmin' }
      ]
    },
    // Organization settings
    updateSettings: {
      roles: ['admin'],
      conditions: [
        { type: 'isOrgAdmin' }
      ]
    }
  },
  
  // === USER PERMISSIONS ===
  users: {
    create: {
      roles: ['admin'],
      conditions: []
    },
    read: {
      roles: ['*'], // Basic user profile info is public
      conditions: []
    },
    readDetails: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isSelf' } // Users can see their own details
      ]
    },
    update: {
      roles: ['admin', 'moderator'],
      conditions: [
        { type: 'isSelf' } // Users can update their own profile
      ]
    },
    delete: {
      roles: ['admin'],
      conditions: [
        { type: 'isSelf' } // Users can delete their own account
      ]
    },
    // Role management
    updateRole: {
      roles: ['admin'], // Only admins can change roles
      conditions: []
    }
  },
  
  // === SYSTEM PERMISSIONS ===
  system: {
    // Special permission used by requireRole middleware
    access: {
      roles: ['*'], // This will be checked against the provided roles in middleware
      conditions: []
    },
    // Admin dashboard access
    adminDashboard: {
      roles: ['admin', 'moderator'],
      conditions: []
    },
    // System settings
    settings: {
      roles: ['admin'],
      conditions: []
    }
  }
};

module.exports = permissionRules; 