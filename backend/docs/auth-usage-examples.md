# Authentication and Authorization Usage Examples

This document provides examples of how to use the authentication and authorization system in your API routes. The system is designed to be easy to use while providing comprehensive security features.

## Table of Contents

1. [Basic Authentication](#basic-authentication)
2. [Resource Protection](#resource-protection)
3. [Collection Protection](#collection-protection)
4. [Role-Based Access](#role-based-access)
5. [Organization-Specific Permissions](#organization-specific-permissions)
6. [Custom Permission Checking](#custom-permission-checking)
7. [Debugging Permission Issues](#debugging-permission-issues)

## Basic Authentication

To require authentication without checking permissions:

```javascript
const { requireAuth } = require('../middlewares');
const router = express.Router();

// Route that only requires the user to be authenticated
router.get('/profile', requireAuth, (req, res) => {
  // User is guaranteed to be authenticated here
  // req.user contains the user information
  res.json({
    message: 'Profile data',
    user: {
      id: req.user.uid,
      email: req.user.email,
      name: req.user.name
    }
  });
});
```

## Resource Protection

To check permissions for specific resources:

```javascript
const { protectResource } = require('../middlewares');
const router = express.Router();

// Get a pet by ID - requires read permission
router.get('/pets/:id', 
  protectResource('pets', 'read'), 
  (req, res) => {
    // At this point:
    // 1. User is authenticated
    // 2. Pet has been loaded (req.resourceObj contains the pet data)
    // 3. Permission has been verified
    
    res.json(req.resourceObj);
  }
);

// Update a pet - requires update permission
router.put('/pets/:id',
  protectResource('pets', 'update'),
  (req, res) => {
    // Here we know:
    // 1. User is authenticated
    // 2. Pet has been loaded (req.resourceObj contains the pet data)
    // 3. User has update permission (could be owner, admin, etc.)
    
    // Your logic to update the pet
    // ...
    
    res.json({ message: 'Pet updated successfully' });
  }
);
```

## Collection Protection

For working with collections (like listing all resources):

```javascript
const { protectCollection } = require('../middlewares');
const router = express.Router();

// List all pets - requires readAll permission
router.get('/pets',
  protectCollection('pets', 'readAll'),
  (req, res) => {
    // At this point:
    // 1. User is authenticated
    // 2. User has permission to list pets
    // 3. No specific resource has been loaded (since we're working with a collection)
    
    // Your logic to fetch and filter pets
    // ...
    
    res.json({ pets: [] });
  }
);
```

## Role-Based Access

To restrict access based on user roles:

```javascript
const { requireRole, requireAdmin } = require('../middlewares');
const router = express.Router();

// Admin-only route
router.get('/admin/dashboard',
  requireAdmin,
  (req, res) => {
    // Only admin users can reach this point
    res.json({ message: 'Admin dashboard data' });
  }
);

// Moderator or admin route
router.get('/reports/flagged',
  requireRole(['moderator', 'admin']),
  (req, res) => {
    // Only users with moderator or admin role can reach this point
    res.json({ message: 'Flagged reports data' });
  }
);
```

## Organization-Specific Permissions

For organization-related permissions:

```javascript
const { requireOrgAdmin, protectOrganizationResource } = require('../middlewares');
const router = express.Router();

// Route for organization admins
router.get('/organizations/:orgId/settings',
  requireOrgAdmin(),
  (req, res) => {
    // Only organization admins can access this
    // req.resourceObj contains the organization data
    res.json({ message: 'Organization settings' });
  }
);

// Update organization members
router.put('/organizations/:orgId/members/:userId',
  protectOrganizationResource('organizations', 'updateMember'),
  (req, res) => {
    // Logic to update member roles
    // ...
    
    res.json({ message: 'Member updated successfully' });
  }
);
```

## Custom Permission Checking

For more complex permission scenarios:

```javascript
const { verifyToken } = require('../middlewares/authentication');
const { checkPermission } = require('../middlewares/authorization');
const { loadPetResource } = require('../middlewares/resourceLoaders');
const router = express.Router();

// Custom permission checking
router.put('/pets/:id/special-action',
  verifyToken,
  loadPetResource,
  checkPermission('pets', 'specialAction', { customOption: true }),
  (req, res) => {
    // Custom permission logic has been applied
    res.json({ message: 'Special action performed' });
  }
);
```

## Owner or Admin Pattern

A common pattern is to allow either the resource owner or an admin:

```javascript
const { ownerOrAdmin } = require('../middlewares');
const router = express.Router();

// Route accessible by either the pet owner or an admin
router.delete('/pets/:id',
  ownerOrAdmin('pets'),
  (req, res) => {
    // At this point, the user is either the pet owner or an admin
    // Logic to delete the pet
    // ...
    
    res.json({ message: 'Pet deleted successfully' });
  }
);
```

## Debugging Permission Issues

If you encounter permission issues, check the following:

1. Make sure the user is authenticated correctly
2. Verify that the resource exists and is being loaded properly
3. Check the permission rules in `config/permissionRules.js`
4. Look at the logs for detailed permission checking information
5. Ensure the user has the required role or meets the conditions

Example to enable more verbose logging:

```javascript
// In a development environment
const { logAuthDebug } = require('../utils/loggerUtil');

// Add this to your route for debugging
router.get('/debug-permissions',
  requireAuth,
  (req, res, next) => {
    logAuthDebug({
      type: 'debug_permissions',
      user: req.user,
      path: req.path
    });
    next();
  },
  protectResource('pets', 'read'),
  (req, res) => {
    res.json({ message: 'If you see this, permission was granted' });
  }
);
```

## Best Practices

1. Always use the middleware composition utilities (`protectResource`, `requireRole`, etc.) instead of directly using the individual middlewares
2. Define all permission rules in `config/permissionRules.js` rather than hardcoding them in routes
3. Use meaningful resource and action names to keep permissions clear and maintainable
4. For new resource types, add appropriate resource loaders
5. When adding new conditions, implement them in the `permissionService.js` file
6. Avoid bypassing the permission system with custom checks unless absolutely necessary 