# Authentication and Authorization Refactoring Plan

This document outlines the comprehensive plan to refactor and consolidate our authentication and authorization systems. The goal is to create a cleaner, more maintainable architecture with clear separation of concerns between identity verification and permission management.

## Current Issues

1. **Authentication/Authorization confusion**: Unclear separation between identity verification and permission checking
2. **Duplicate permission files**: Two separate permission systems (`/backend/config/permissions.js` and `/backend/middlewares/permissions.js`)
3. **Naming confusion**: `authMiddleware.js` handles authentication but has ambiguous naming
4. **Fragmented implementation**: Organization permissions handled separately from other permissions

## Refactoring Plan

### Phase 1: Restructure and Rename Files

- [x] 1.1. Rename `authMiddleware.js` → `authentication.js`
- [x] 1.2. Update imports across all files referencing the old filename
- [x] 1.3. Remove role-checking logic from authentication middleware
- [x] 1.4. Rename `config/permissions.js` → `config/permissionRules.js`
- [x] 1.5. Update imports referencing the old permissions config
- [x] 1.6. Create `middlewares/resourceLoaders.js` (extract from authorization.js)
- [x] 1.7. Create `middlewares/index.js` for middleware composition

### Phase 2: Consolidate Permissions System

- [x] 2.1. Review and analyze organization permissions from `middlewares/permissions.js`
- [x] 2.2. Add organization permission rules to `config/permissionRules.js`
- [x] 2.3. Create new condition types for organization permissions
- [x] 2.4. Extend `permissionService.js` evaluators for organization permissions
- [x] 2.5. Update tests to cover organization permissions
- [x] 2.6. Create migration path for existing organization routes

### Phase 3: Implement Middleware Interface

- [x] 3.1. Define middleware composition patterns in `middlewares/index.js`
- [x] 3.2. Create specialized middleware chains for common patterns
- [x] 3.3. Update one route file as a proof of concept
- [x] 3.4. Review and refine the interface based on feedback
- [x] 3.5. Document the middleware composition patterns

### Phase 4: Migration and Testing

- [x] 4.1. Update all remaining routes to use the new system
- [x] 4.2. Implement backward compatibility for existing endpoints
- [x] 4.3. Write comprehensive tests for the new system
- [x] 4.4. Perform thorough integration testing
- [x] 4.5. Delete the obsolete `middlewares/permissions.js` file
- [x] 4.6. Document the new architecture
- [x] 4.7. Create usage examples for common authorization patterns

## Code Structure After Refactoring

```
├── config/
│   └── permissionRules.js          # All declarative permission rules
├── services/
│   └── permissionService.js        # Logic to evaluate permissions
├── middlewares/
│   ├── authentication.js           # Only identity verification
│   ├── authorization.js            # Permission checking middleware
│   ├── resourceLoaders.js          # Resource loading for auth checks
│   └── index.js                    # Middleware composition utility
```

## Benefit Analysis

1. **Clear separation of concerns**: Authentication verifies identity, authorization manages permissions
2. **Single source of truth**: All permission rules consolidated in one location
3. **Readable route definitions**: Simple middleware chains make routes cleaner
4. **Extensible architecture**: Easy to add new permissions or conditions
5. **Maintainable codebase**: Logical structure follows responsibility boundaries
6. **Improved security**: Consistent permission checking throughout the application
7. **Better testability**: Isolated components are easier to test

## Execution Timeline

- Phase 1: 1-2 days
- Phase 2: 2-3 days
- Phase 3: 1 day
- Phase 4: 2-3 days

Total estimated time: 6-9 days of development effort

## Progress Tracking

```
Progress: [25/25] tasks completed (100%)
```

_Note: All tasks have been completed successfully!_ 