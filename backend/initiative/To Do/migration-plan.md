# Firebase to PostgreSQL Migration Plan

## Project Overview

This document outlines the comprehensive plan to migrate the pet-api-firebase application from Firebase Firestore to PostgreSQL using Prisma as the ORM and Railway as the PostgreSQL database provider.

> **NOTE:** This plan is supported by two additional documents:
> - [Models Analysis](./models-analysis.md) - Detailed analysis of data models and transformation strategy
> - [Authentication Strategy](./authentication-strategy.md) - Specific approach for handling authentication during migration

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

> **Reference:** See [Models Analysis](./models-analysis.md) for detailed information on:
> - Current Firebase model structures
> - Recommended type mappings
> - Relationships transformation
> - Indexing strategy

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

> **Reference:** See [Models Analysis](./models-analysis.md) "Migration Testing Plan" section for the detailed approach to testing migration for each model.

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

> **Reference:** For authentication-related changes, see [Authentication Strategy](./authentication-strategy.md) for the detailed hybrid approach and code examples.

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
   - Follow the hybrid approach detailed in the Authentication Strategy document
   - Implement dual-write system to maintain Firebase Auth while using PostgreSQL
   - Adapt middleware to work with both systems

### Phase 5: Test Suite Cleanup and Update
**Status**: In Progress
**Timeline**: 1 week

### Objectives
- Remove Firebase-specific test code while maintaining Firebase Authentication and Storage mocks
- Update test documentation to reflect the hybrid Firebase/Prisma architecture
- Ensure comprehensive test coverage for both systems

### Tasks
1. Test Setup Updates
   - [x] Update jest.setup.js to maintain Firebase Auth/Storage mocks
   - [x] Update testSetup.js with hybrid configuration
   - [x] Remove deprecated Firebase database mocks
   - [ ] Update test documentation

2. Test Documentation Updates
   - [ ] Create new test setup guide
   - [ ] Document hybrid authentication approach
   - [ ] Update test patterns and best practices
   - [ ] Add examples for common test scenarios

3. Test Coverage Verification
   - [ ] Verify coverage for Prisma operations
   - [ ] Verify coverage for Firebase Auth operations
   - [ ] Verify coverage for Firebase Storage operations
   - [ ] Document any gaps in coverage

### Success Criteria
- All tests run successfully with the hybrid setup
- Test documentation is clear and comprehensive
- No deprecated Firebase database code remains
- Firebase Auth and Storage mocks are properly maintained
- Test coverage meets or exceeds previous levels

### Timeline
- Phase 5: 1 week (Current)
- Phase 6: 1 week
- Total remaining time: 2 weeks

### Notes
- Maintain regular backups throughout the migration
- Keep the team informed of progress and any issues
- Document all major decisions and their rationale
- Regular testing of the rollback plan

### Phase 6: Documentation and Knowledge Transfer
**Status**: Planned
**Timeline**: 1 week

### Objectives
- Create comprehensive documentation for the new architecture
- Train team members on the hybrid system
- Document lessons learned and best practices

### Tasks
1. Architecture Documentation
   - [ ] Create system architecture diagram
   - [ ] Document database schema
   - [ ] Document authentication flow
   - [ ] Document file storage implementation

2. Development Guides
   - [ ] Create setup guide for new developers
   - [ ] Document common development patterns
   - [ ] Create troubleshooting guide
   - [ ] Document deployment process

3. Knowledge Transfer
   - [ ] Schedule team training sessions
   - [ ] Create presentation materials
   - [ ] Document Q&A sessions
   - [ ] Create FAQ document

### Success Criteria
- All documentation is complete and up-to-date
- Team members are comfortable with the new system
- Development workflow is clearly documented
- Common issues and solutions are documented

## Rollback Plan
In case of critical issues, we can rollback to the previous Firebase implementation using the following steps:

1. Revert database configuration to use Firebase
2. Restore Firebase-specific code
3. Update environment variables
4. Deploy rollback changes
5. Verify system functionality

## Timeline
- Phase 5: 1 week (Current)
- Phase 6: 1 week
- Total remaining time: 2 weeks

## Notes
- Maintain regular backups throughout the migration
- Keep the team informed of progress and any issues
- Document all major decisions and their rationale
- Regular testing of the rollback plan

### Phase 7: Deployment

1. **Environment Configuration** 🟡
   - Update environment variables for PostgreSQL
   - Configure connection pooling
   - Setup proper logging
   - Configure error handling

2. **Database Versioning** 🟡
   - Setup migration versioning
   - Configure rollback procedures
   - Document schema changes
   - Setup backup procedures

3. **Deployment Strategy** 🟡
   - Plan zero-downtime deployment
   - Setup monitoring and alerts
   - Configure health checks
   - Document rollback procedures

4. **Post-Deployment Tasks** 🟡
   - Monitor performance
   - Verify data integrity
   - Check error rates
   - Validate all features

### Next Steps

1. Complete remaining model tests:
   - Membership model tests
   - Conversation model tests
   - Message model tests

2. Enhance integration tests:
   - Add more complex operation tests
   - Improve error case coverage
   - Add data consistency checks

3. Complete performance testing:
   - Run full benchmark suite
   - Document performance metrics
   - Identify optimization opportunities

4. Prepare for deployment:
   - Update environment configuration
   - Setup monitoring
   - Document deployment procedures

5. Clean up deprecated files:
   - Remove Firebase-specific code
   - Clean up unused dependencies
   - Update documentation

### Timeline

- Phase 5 (Testing): In Progress
  - Model Tests: 80% complete
  - Integration Tests: 70% complete
  - Performance Tests: 60% complete

- Phase 6 (Deployment): Not Started
  - Environment Setup: 0% complete
  - Database Versioning: 0% complete
  - Deployment Configuration: 0% complete

### Risk Assessment

1. **Data Migration Risks** ✅
   - Data loss during migration
   - Data integrity issues
   - Performance impact during migration

2. **Testing Risks** 🟡
   - Incomplete test coverage
   - Performance regression
   - Integration issues

3. **Deployment Risks** 🟡
   - Service disruption
   - Data consistency issues
   - Performance degradation

### Success Criteria

1. **Functionality** 🟡
   - All features working as expected
   - No regression in functionality
   - Improved query performance

2. **Performance** 🟡
   - Response times within acceptable range
   - Resource usage optimized
   - Scalability improved

3. **Reliability** 🟡
   - High availability maintained
   - Data consistency ensured
   - Error handling improved

*Last updated: May 14, 2025*

## Database Schema Design

> **NOTE:** This schema design is based on the detailed analysis in [Models Analysis](./models-analysis.md). Refer to that document for the reasoning behind each design decision.

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
| Authentication issues | High | Medium | Follow hybrid approach in Authentication Strategy document |
| Deployment downtime | Medium | Medium | Use staging environment, plan for low-traffic deployment |

## Timeline

| Phase | Estimated Duration | Dependencies |
|-------|-------------------|--------------|
| Setup & Infrastructure | 1-2 days | None |
| Schema Design | 2-3 days | Phase 1, Models Analysis document |
| Data Migration | 3-5 days | Phase 2 |
| Code Refactoring | 5-10 days | Phase 3, Authentication Strategy document |
| Testing | 3-5 days | Phase 5 |
| Deployment | 1-2 days | Phase 7 |

## Post-Migration Tasks

1. **Performance monitoring**
2. **Database optimization**
3. **Documentation updates**
4. **Developer training on Prisma**
5. **Clean up Firebase resources (after successful migration)**
6. **Reevaluate authentication strategy** (as outlined in the Authentication Strategy document)

## Rollback Plan

In case of critical issues:

1. **Identify failure point**
2. **Restore Firebase connections in codebase**
3. **Redeploy previous application version**
4. **Verify system functionality**
5. **Develop new migration plan addressing identified issues**

---

This plan will guide our migration from Firebase Firestore to PostgreSQL, ensuring a smooth transition while maintaining application functionality. 