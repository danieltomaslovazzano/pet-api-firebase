# Authentication and Authorization System

This document explains the authentication and authorization system architecture, including its components and how to use them.

## Overview

Our auth system follows a separation of concerns principle that makes code cleaner and more maintainable:

1. **Authentication**: Verifies user identity (who are you?)
2. **Authorization**: Checks if a user has permission to perform an action (can you do that?)

## Components

### Authentication (`middlewares/authentication.js`)

Handles token verification and user identity. This middleware only confirms that a user is who they claim to be.

```javascript
const { verifyToken } = require('../middlewares/authentication');

// Use in routes
router.post('/', verifyToken, someController);
```

### Resource Loaders (`middlewares/resourceLoaders.js`)

Fetches resources needed for permission checking, like a pet or organization.

```javascript
const { loadPetResource } = require('../middlewares/resourceLoaders');

// Use in routes
router.put('/:id', loadPetResource, someController);
```

### Authorization Middleware (`middlewares/authorization.js`)

Checks if a user has permission to perform an action on a resource.

```javascript
const { checkPermission } = require('../middlewares/authorization');

// Use in routes
router.put('/:id', checkPermission('pets', 'update'), someController);
```

### Permission Rules (`config/permissionRules.js`)

Defines all permissions in a declarative way.

```javascript
const permissions = {
  pets: {
    update: {
      roles: ['admin'],
      conditions: [
        { type: 'isOwner' }
      ]
    }
  }
};
```

### Permission Service (`services/permissionService.js`)

Logic for evaluating permissions based on roles and conditions.

## Using Middleware Composition

For simplicity, we provide middleware composition utilities in `middlewares/index.js`:

### Example: Protecting a Route

```javascript
const { protectResource, requireAuth, requireAdmin } = require('../middlewares');

// Simple authentication
router.post('/', requireAuth, controller.createResource);

// Full resource authorization with single line
router.put('/:id', ...protectResource('pets', 'update'), controller.updatePet);

// Role-based authorization
router.delete('/admin-action', ...requireAdmin, controller.adminAction);
```

## Permission Conditions

The system supports several condition types:

1. **isOwner**: User owns the resource
2. **isSameOrganization**: User is in the same organization as resource owner
3. **isOrgAdmin**: User is an admin of the specific organization

## Creating New Permissions

To add new permissions:

1. Define the permission in `config/permissionRules.js`
2. If needed, add new condition evaluators in `permissionService.js`
3. Use the middleware composition in your routes

## Testing Permissions

The permission system is fully testable:

```javascript
// Test if a user has permission
const result = await hasPermission(user, 'pets', 'update', context);
expect(result).toBe(true);

// Test specific conditions
const result = await evaluateCondition(user, { type: 'isOwner' }, context);
expect(result).toBe(true);
```

## Debugging

The auth system includes comprehensive debugging with `logAuthDebug` and `logAuthError`. 