# Auth System Migration Guide

This guide helps you migrate existing routes to the new authentication and authorization system.

## Migration Steps for Each Route File

### Step 1: Update Imports

Replace:
```javascript
const { verifyToken } = require('../middlewares/auth');
const { loadPetResource, checkPermission } = require('../middlewares/authorization');
```

With:
```javascript
const { requireAuth, protectResource, requireRole, requireAdmin } = require('../middlewares');
```

### Step 2: Replace Token Verification

Replace:
```javascript
router.post('/', verifyToken, someController);
```

With:
```javascript
router.post('/', requireAuth, someController);
```

### Step 3: Replace Resource Protection

Replace:
```javascript
router.put('/:id', 
  verifyToken,
  loadPetResource,
  checkPermission('pets', 'update'),
  someController
);
```

With:
```javascript
router.put('/:id', 
  ...protectResource('pets', 'update'),
  someController
);
```

### Step 4: Replace Admin Checks

Replace:
```javascript
const { isAdmin } = require('../middlewares/authMiddleware');
router.delete('/', verifyToken, isAdmin, someController);
```

With:
```javascript
router.delete('/', ...requireAdmin, someController);
```

### Step 5: Organization-Specific Routes

For organization routes that used the old `middlewares/permissions.js`:

Replace:
```javascript
const { hasPermission } = require('../middlewares/permissions');
router.put('/:orgId', verifyToken, hasPermission('update'), someController);
```

With:
```javascript
router.put('/:orgId', ...protectResource('organizations', 'update'), someController);
```

## Example Migration

### Before

```javascript
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');
const { isAdmin } = require('../middlewares/authMiddleware');
const { loadPetResource, checkPermission } = require('../middlewares/authorization');

router.get('/', petController.getPets);
router.get('/:id', petController.getPetById);
router.post('/', verifyToken, someValidation, petController.createPet);
router.put('/:id', verifyToken, loadPetResource, checkPermission('pets', 'update'), petController.updatePet);
router.delete('/:id', verifyToken, isAdmin, petController.deletePet);
```

### After

```javascript
const express = require('express');
const router = express.Router();
const { requireAuth, protectResource, requireAdmin } = require('../middlewares');

router.get('/', petController.getPets);
router.get('/:id', petController.getPetById);
router.post('/', requireAuth, someValidation, petController.createPet);
router.put('/:id', ...protectResource('pets', 'update'), petController.updatePet);
router.delete('/:id', ...requireAdmin, petController.deletePet);
```

## Tips

1. Use the spread operator (`...`) with middleware arrays
2. Test each route after migration to ensure permissions work correctly
3. Check the `middlewares/index.js` file for additional utility middleware
4. For custom permission needs, you can still use the individual components

## Troubleshooting

If you encounter issues with the migration:

1. Check that the resource type matches the permission rules in `config/permissionRules.js`
2. Verify that the resource loaders are properly implemented for your resource type
3. Use the debug logs to see what's happening in the authorization process

For help, check the complete documentation in `docs/auth-system.md`. 