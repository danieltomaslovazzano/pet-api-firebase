# Firebase to PostgreSQL Migration Plan

## Project Overview

This document outlines the comprehensive plan to migrate the pet-api-firebase application from Firebase Firestore to PostgreSQL using Prisma as the ORM and Railway as the PostgreSQL database provider.

## Current Architecture

The application currently uses:
- **Firebase Firestore** for NoSQL document storage
- **Firebase Authentication** for user management
- **Firebase Storage** for file storage
- **Express.js** backend framework
- **Node.js** runtime

## Migration Goals

1. Replace Firebase Firestore with PostgreSQL for data storage
2. Maintain existing API contracts and functionality
3. Implement a proper data access layer using Prisma ORM
4. Improve query performance and capabilities
5. Support data relationships more effectively
6. Enable future scalability through proper database design

## Migration Strategy

We will use a phased approach to minimize disruption:

1. **Setup & Infrastructure** - Set up Prisma and PostgreSQL
2. **Schema Design** - Define Prisma schema based on current data model
3. **Data Migration** - Migrate data from Firebase to PostgreSQL
4. **Code Refactoring** - Update models and controllers
5. **Testing** - Verify functionality
6. **Deployment** - Deploy to production

## Detailed Implementation Plan

### Phase 1: Setup & Infrastructure

1. **Install Dependencies**
   ```bash
   npm install prisma @prisma/client
   npm install --save-dev prisma
   ```

2. **Initialize Prisma**
   ```bash
   npx prisma init
   ```

3. **Configure Railway PostgreSQL Database**
   - Create a Railway account if needed
   - Create a new PostgreSQL database instance
   - Update the DATABASE_URL in the .env file with the Railway connection string

### Phase 2: Schema Design

1. **Create Prisma Schema** based on existing Firestore collections:
   - Users
   - Pets
   - Organizations
   - Memberships
   - Conversations
   - Messages

2. **Define Relationships** between models:
   - One-to-Many (User-to-Pets)
   - Many-to-Many (Users-to-Organizations via Memberships)
   - One-to-Many (Conversation-to-Messages)

3. **Add Indexes** for frequently queried fields

4. **Define Prisma Client Schema** in `/prisma/schema.prisma`

### Phase 3: Data Migration

1. **Create Migration Scripts**:
   - Script to extract data from Firebase Firestore
   - Script to transform data into proper SQL structure
   - Script to insert data into PostgreSQL using Prisma

2. **Test Migration Process** with a small subset of data

3. **Execute Full Migration**:
   - Export all collections from Firebase
   - Transform data as needed
   - Import into PostgreSQL

4. **Validate Data Integrity** after migration

### Phase 4: Code Refactoring

1. **Create New Model Layer**:
   - Implement model interfaces that match existing API contracts
   - Develop new Prisma-based model implementations
   - Add data validation and error handling

2. **Update Controllers**:
   - Modify controllers to use new Prisma-based models
   - Maintain the same API endpoints and request/response formats
   - Enhance error handling as needed

3. **Implement Feature Parity**:
   - Ensure all current Firestore queries are supported
   - Add new capabilities enabled by PostgreSQL where beneficial

4. **Authentication Integration**:
   - Decide whether to keep Firebase Auth or migrate to a different auth system
   - Implement any necessary auth adapters

### Phase 5: Testing

1. **Unit Testing**:
   - Test all data access methods
   - Validate model behavior

2. **Integration Testing**:
   - Test API endpoints with new database
   - Verify authentication works correctly

3. **Performance Testing**:
   - Compare query performance between old and new implementation
   - Optimize as needed

4. **Regression Testing**:
   - Ensure all existing functionality works as expected

### Phase 6: Deployment

1. **Environment Configuration**:
   - Update environment variables for all environments

2. **Database Versioning**:
   - Configure Prisma migrations for future schema changes

3. **Deployment Strategy**:
   - Deploy PostgreSQL database to Railway
   - Deploy updated application code
   - Implement routing to direct traffic to the new system

4. **Monitoring**:
   - Set up database monitoring
   - Configure performance alerting
   - Implement error tracking

## Database Schema Design

### Users
```prisma
model User {
  id            String    @id
  email         String    @unique
  name          String?
  role          String    @default("user")
  status        String    @default("active")
  profileImage  String?
  phone         String?
  address       String?
  blockedUsers  String[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  // Relationships
  pets          Pet[]
  memberships   Membership[]
  sentMessages  Message[]    @relation("SentMessages")
  conversations Conversation[] @relation("UserConversations")
}
```

### Pets
```prisma
model Pet {
  id          String    @id @default(uuid())
  name        String
  species     String
  breed       String?
  age         Int?
  gender      String?
  size        String?
  color       String?
  status      String
  description String?
  images      String[]
  location    Json?
  ownerId     String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  // Relationships
  owner       User?     @relation(fields: [ownerId], references: [id])
}
```

### Organizations
```prisma
model Organization {
  id           String    @id @default(uuid())
  name         String
  description  String?
  logo         String?
  address      String?
  phone        String?
  email        String?
  status       String    @default("active")
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  
  // Relationships
  memberships  Membership[]
}
```

### Memberships
```prisma
model Membership {
  id             String    @id @default(uuid())
  userId         String
  organizationId String
  role           String
  status         String    @default("active")
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  
  // Relationships
  user          User         @relation(fields: [userId], references: [id])
  organization  Organization @relation(fields: [organizationId], references: [id])
  
  @@unique([userId, organizationId])
}
```

### Conversations
```prisma
model Conversation {
  id            String    @id @default(uuid())
  title         String?
  status        String    @default("active")
  createdAt     DateTime  @default(now())
  lastMessageAt DateTime  @default(now())
  
  // Relationships
  participants  User[]    @relation("UserConversations")
  messages      Message[]
}
```

### Messages
```prisma
model Message {
  id              String    @id @default(uuid())
  conversationId  String
  senderId        String
  content         String
  status          String    @default("sent")
  timestamp       DateTime  @default(now())
  attachments     Json?
  location        Json?
  
  // Relationships
  conversation    Conversation @relation(fields: [conversationId], references: [id])
  sender          User         @relation("SentMessages", fields: [senderId], references: [id])
}
```

## Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Data loss during migration | High | Medium | Create backups, validate data before/after migration |
| Query performance regression | Medium | Medium | Performance testing, index optimization |
| API contract changes | High | Low | Comprehensive testing of all endpoints |
| Authentication issues | High | Medium | Thorough testing of auth flows |
| Deployment downtime | Medium | Medium | Use staging environment, plan for low-traffic deployment |

## Timeline

| Phase | Estimated Duration | Dependencies |
|-------|-------------------|--------------|
| Setup & Infrastructure | 1-2 days | None |
| Schema Design | 2-3 days | Phase 1 |
| Data Migration | 3-5 days | Phase 2 |
| Code Refactoring | 5-10 days | Phase 3 |
| Testing | 3-5 days | Phase 4 |
| Deployment | 1-2 days | Phase 5 |

## Post-Migration Tasks

1. **Performance monitoring**
2. **Database optimization**
3. **Documentation updates**
4. **Developer training on Prisma**
5. **Clean up Firebase resources (after successful migration)**

## Rollback Plan

In case of critical issues:

1. **Identify failure point**
2. **Restore Firebase connections in codebase**
3. **Redeploy previous application version**
4. **Verify system functionality**
5. **Develop new migration plan addressing identified issues**

---

This plan will guide our migration from Firebase Firestore to PostgreSQL, ensuring a smooth transition while maintaining application functionality. 