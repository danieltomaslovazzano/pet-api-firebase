# Firebase to PostgreSQL: Data Models Analysis

## Current Firebase Models

After analyzing the codebase, I've identified the following Firestore collections and their structures:

### 1. Users Collection

**Key features:**
- Document ID is the Firebase Auth user ID
- Contains user profile information
- Stores role information
- Tracks blocked users as an array

**Key operations:**
- CRUD operations for user profiles
- Filtering users by role/status
- Searching users by name/email/phone
- Blocking/unblocking other users

**Firebase-specific patterns:**
- Uses server timestamps for creation/update times
- Uses array operations (arrayUnion/arrayRemove) for blocked users

### 2. Pets Collection

**Key features:**
- Uses UUID as document ID
- Stores pet details including images as array of URLs
- Contains location data
- Links to owner (user) via ID

**Key operations:**
- CRUD operations for pets
- Filtering by species, status, breed
- Searching by various criteria
- Pagination and sorting

**Firebase-specific patterns:**
- Client-side filtering/pagination for complex queries
- Uses server timestamps

### 3. Organizations Collection

**Key features:**
- Uses UUID as document ID
- Basic organization profile data
- No direct link to members (uses memberships collection)

**Key operations:**
- CRUD operations
- Fetching related members via separate queries

**Firebase-specific patterns:**
- Simple document storage pattern

### 4. Memberships Collection

**Key features:**
- Links users to organizations
- Contains role information
- Junction table implementation in NoSQL

**Key operations:**
- Adding/removing members
- Checking permissions
- Filtering by user or organization

**Firebase-specific patterns:**
- Composite queries on userId and organizationId
- Role-based permission checks

### 5. Conversations Collection

**Key features:**
- Contains conversation metadata
- Stores participant IDs as an array
- Tracks conversation status and timestamps

**Key operations:**
- Creating conversations
- Listing conversations for a user
- Updating conversation status

**Firebase-specific patterns:**
- Array contains queries for participants
- No direct relation to messages (separate queries)

### 6. Messages Collection

**Key features:**
- Links to conversation by ID
- Contains message content and metadata
- Supports attachments and location data

**Key operations:**
- Adding messages to conversations
- Pagination of messages
- Status updates (read/delivered)

**Firebase-specific patterns:**
- Simple queries by conversationId
- Order by timestamp

## Relational Database Design Considerations

### 1. Primary Keys and IDs

**Current approach:**
- Firebase uses string document IDs
- Some collections use UUID, others use Firebase Auth IDs

**PostgreSQL approach:**
- Maintain string IDs for compatibility
- Add proper primary key constraints
- Consider using serial/bigserial for new records

### 2. Relationships

**Current approach:**
- Implicit relationships via ID reference
- No enforced referential integrity
- Manual joining through application code

**PostgreSQL approach:**
- Define explicit foreign key relationships
- Enable cascading updates/deletes where appropriate
- Use proper join tables for many-to-many relationships

### 3. Arrays and Nested Data

**Current approach:**
- Arrays for simple lists (blocked users, images)
- Nested objects for complex data

**PostgreSQL approach:**
- String[] arrays for simple string lists
- JSON/JSONB for complex nested data
- Consider normalization for searchable nested data

### 4. Queries and Filtering

**Current approach:**
- Limited query capabilities in Firestore
- Client-side filtering for complex queries
- No full-text search

**PostgreSQL approach:**
- Leverage SQL's powerful querying capabilities
- Use indexes for frequently queried fields
- Consider text search for search functionality

## Prisma Schema Design Decisions

### 1. Type Mapping

| Firestore Type | Prisma Type |
|----------------|-------------|
| String | String |
| Number | Int / Float |
| Boolean | Boolean |
| Timestamp | DateTime |
| Array (strings) | String[] |
| Array (objects) | Json |
| Map/Object | Json |
| Reference | Relation |

### 2. Indexes Strategy

- Create indexes on all foreign keys
- Add indexes to frequently filtered fields (status, role)
- Add composite indexes for unique constraints
- Consider indexes for text search fields

### 3. Many-to-Many Relationships

- Users to Organizations: Use Membership model as junction table
- Users to Conversations: Create explicit many-to-many relationship

### 4. Data Validation

- Add field constraints in Prisma schema (required fields, max length)
- Consider using enums for status and role fields
- Implement application-level validation for complex rules

## Model-Specific Migration Notes

### Users

**Key transformations:**
- Convert blockedUsers array to String[]
- Create proper relations to other models
- Ensure timestamps are properly converted

**Challenges:**
- Ensuring backward compatibility with Firebase Auth
- Handling array operations for blockedUsers

### Pets

**Key transformations:**
- Convert images array to String[]
- Convert location to Json type
- Create proper relation to owner (User)

**Challenges:**
- Maintaining efficient queries without denormalization

### Organizations

**Key transformations:**
- Create proper relation to memberships
- Consider adding direct relation to admin users

**Challenges:**
- Maintaining permission model

### Memberships

**Key transformations:**
- Create proper foreign key relationships
- Add unique constraint on [userId, organizationId]

**Challenges:**
- Ensuring permission queries remain efficient

### Conversations

**Key transformations:**
- Convert participants array to many-to-many relation
- Create proper relation to messages

**Challenges:**
- Efficient participant queries

### Messages

**Key transformations:**
- Convert attachments to Json type
- Convert location to Json type
- Create proper relations to conversation and sender

**Challenges:**
- Maintaining pagination performance

## Migration Testing Plan

For each model, we will:

1. Create test data in Firebase
2. Export to JSON format
3. Transform to PostgreSQL format
4. Import to PostgreSQL using Prisma
5. Verify data integrity
6. Test all query patterns
7. Measure performance differences

## Performance Optimization Opportunities

1. **Indexed Queries**: Replace client-side filtering with proper SQL queries
2. **Full-Text Search**: Implement PostgreSQL text search for better search capabilities
3. **Joins**: Replace multiple queries with SQL joins
4. **Pagination**: Use offset/limit or cursor-based pagination with SQL
5. **Transactions**: Use PostgreSQL transactions for operations requiring atomicity

---

This analysis provides a comprehensive view of the current data model and the transformation needed to move from Firebase Firestore to PostgreSQL using Prisma. 