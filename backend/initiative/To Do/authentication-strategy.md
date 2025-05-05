# Authentication Strategy for Firebase to PostgreSQL Migration

## Current Authentication System

The project currently uses **Firebase Authentication** with the following features:

- User registration and login
- Email/password authentication
- JWT token-based authentication
- Role-based access control (user, admin, org-admin, etc.)
- Auth middleware for route protection

## Key Authentication Components

### 1. Firebase Admin SDK

Used in the backend to:
- Verify tokens
- Get user claims
- Manage user accounts

### 2. Auth Middleware

Located in the application's middleware layer, it:
- Extracts the JWT token from Authorization header
- Verifies the token using Firebase Admin SDK
- Attaches the user ID and claims to the request object
- Controls access to protected routes

### 3. Auth Controller

Handles:
- User registration
- Login
- Password reset
- Email verification
- Token refresh

## Authentication Migration Strategy

We have two primary options for the migration:

### Option 1: Maintain Firebase Auth (Recommended)

**Description:**
Keep using Firebase Authentication while migrating the database to PostgreSQL.

**Advantages:**
- No disruption to existing user authentication
- Reduces migration complexity
- Maintains established security practices
- Firebase Auth is a robust, proven service

**Implementation Steps:**
1. Keep existing Firebase Auth implementation
2. Update user model to sync with PostgreSQL
3. Ensure user creation/updates synchronize between Firebase Auth and PostgreSQL
4. Keep the existing auth middleware

**Code Changes:**
- Update `authController.js` to create/update users in PostgreSQL after Firebase Auth operations
- Ensure user data consistency between systems

### Option 2: Migrate to Custom Auth with PostgreSQL

**Description:**
Implement a custom authentication system using PostgreSQL to store credentials.

**Advantages:**
- Complete independence from Firebase
- Potential for more customized auth flows
- Single source of truth for user data

**Disadvantages:**
- Significantly more complex to implement securely
- Requires careful handling of password migration
- Disrupts existing user authentication
- Need to build JWT handling, password hashing, etc.

**Implementation Steps:**
1. Create auth tables in PostgreSQL (users, refresh_tokens)
2. Implement password hashing and verification
3. Build JWT issuance and validation
4. Create migration path for existing users
5. Implement token refresh mechanism
6. Update authentication middleware

**Security Considerations:**
- Password hashing with bcrypt
- Secure token generation and validation
- Protection against common authentication attacks
- Rate limiting for login attempts

## Recommended Approach: Hybrid Migration

For a smooth migration with minimal disruption, we recommend a hybrid approach:

### Phase 1: Dual-Write System
1. Keep Firebase Auth as the primary authentication system
2. Create users in PostgreSQL after Firebase Auth registration
3. Sync user profile updates between systems

### Phase 2: Database Migration
1. Complete the database migration to PostgreSQL
2. Use PostgreSQL as the primary data store
3. Keep Firebase Auth for authentication

### Phase 3: Evaluate Long-Term Strategy
After the database migration is stable:
1. Evaluate the need to migrate away from Firebase Auth
2. If needed, implement a custom authentication system
3. Create a migration path for existing users

## Required Code Changes

### Updated User Creation Flow

```javascript
// authController.js - register function
exports.register = async (req, res) => {
  try {
    // 1. Create user in Firebase Auth (existing code)
    const userRecord = await admin.auth().createUser({
      email: req.body.email,
      password: req.body.password,
      displayName: req.body.name
    });
    
    // 2. Create user in PostgreSQL using Prisma
    const newUser = await prisma.user.create({
      data: {
        id: userRecord.uid,  // Use Firebase UID as primary key
        email: req.body.email,
        name: req.body.name,
        role: req.body.role || 'user',
        status: 'active'
      }
    });
    
    // 3. Return success response
    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

### Update User Profile Flow

```javascript
// userController.js - updateUser function
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    
    // 1. Update user in PostgreSQL
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: userData
    });
    
    // 2. Update relevant fields in Firebase Auth if needed
    if (userData.email || userData.name) {
      const updateParams = {};
      if (userData.email) updateParams.email = userData.email;
      if (userData.name) updateParams.displayName = userData.name;
      
      await admin.auth().updateUser(userId, updateParams);
    }
    
    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

### Authentication Middleware (Remains Similar)

```javascript
// middleware/authMiddleware.js
const admin = require('../config/firebase');
const { prisma } = require('../config/prisma');

exports.requireAuth = async (req, res, next) => {
  try {
    // 1. Get token from Authorization header (existing code)
    const idToken = req.headers.authorization?.split('Bearer ')[1];
    if (!idToken) {
      return res.status(401).json({ error: 'No token provided' });
    }
    
    // 2. Verify token with Firebase Admin (existing code)
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    
    // 3. Get user from PostgreSQL to access roles/permissions
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.uid }
    });
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    if (user.status !== 'active') {
      return res.status(403).json({ error: 'User account is not active' });
    }
    
    // 4. Attach user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
```

## User Data Synchronization

To ensure data consistency between Firebase Auth and PostgreSQL during the migration period:

1. **Account Creation**: Always create the user in Firebase Auth first, then in PostgreSQL
2. **Profile Updates**: Update both systems when critical fields change
3. **Account Status**: Reflect account status (active/disabled) in both systems
4. **Account Deletion**: Handle deletion in both systems

## Testing Strategy

1. **Unit Tests**: Create tests for user creation, login, and profile updates
2. **Integration Tests**: Test the full auth flow from registration to protected route access
3. **Migration Tests**: Verify existing users can still authenticate after migration

## Security Considerations

1. **Token Handling**: Ensure secure handling of JWT tokens
2. **Environment Variables**: Store all auth-related secrets as environment variables
3. **Permissions**: Maintain the role-based permission system during migration
4. **Encryption**: Ensure sensitive user data is properly encrypted in PostgreSQL

## Conclusion

By maintaining Firebase Authentication during the database migration, we can:
- Minimize disruption to users
- Reduce migration complexity
- Maintain a high level of security
- Focus on the database migration first
- Make a more informed decision about authentication in the future

After the database migration is complete, we can reevaluate whether to keep Firebase Auth or implement a custom solution based on project requirements and dependencies. 