------------------------------------------------------------
Pet Reports API
------------------------------------------------------------

A simple RESTful API built with Node.js and Express for managing pet reports. This API allows you to create, retrieve, update, and delete pet reports. It is designed to run in multiple environments (local, development, production).

------------------------------------------------------------
Table of Contents:
------------------------------------------------------------
- Introduction
- Features
- Technologies
- Setup & Installation
- Environment Variables
- Authentication & Authorization
  - Authentication Middleware
  - Authorization Middleware
  - Resource Loaders
  - Middleware Composition
  - Permission Rules
  - Usage Examples
- API Endpoints
   - POST /pets
   - GET /pets
   - GET /pets/:id
   - PUT /pets/:id
   - DELETE /pets/:id
- Testing with cURL
- Future Enhancements

------------------------------------------------------------
Introduction:
------------------------------------------------------------
The Pet Reports API allows users to manage reports for lost, found, or adoptable pets. It provides endpoints for creating a new pet report, retrieving one or more reports, updating a report, and deleting a report.

------------------------------------------------------------
Features:
------------------------------------------------------------
- Create a pet report with details such as name, species, and status.
- Retrieve a list of pet reports with optional filters.
- Retrieve details of a specific pet report.
- Update pet report information.
- Delete a pet report.

------------------------------------------------------------
Technologies:
------------------------------------------------------------
- Node.js – JavaScript runtime environment.
- Express – Web framework for Node.js.
- Firebase – Authentication and database services.
- Firestore – NoSQL database for storing pet data.
- UUID – For generating unique identifiers.
- dotenv – For environment variable management.

------------------------------------------------------------
Setup & Installation:
------------------------------------------------------------
1. Clone the Repository:
   git clone https://github.com/your-username/pet-reports-api.git
   cd pet-reports-api

2. Install Dependencies:
   npm install

3. Configure Environment Variables:
   Create a .env file in the project root with the following content:
   
   PORT=3000
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=pet_reports

4. Start the Server:
   For production:
     npm start
   For development (with auto-reload using nodemon):
     npm run dev

------------------------------------------------------------
Environment Variables:
------------------------------------------------------------
The API uses the following environment variables (defined in the .env file):
- PORT: The port on which the server will run.
- DB_HOST: Hostname of your MySQL database.
- DB_USER: MySQL user.
- DB_PASSWORD: MySQL password.
- DB_NAME: Name of the database (e.g., pet_reports).

------------------------------------------------------------
Authentication & Authorization:
------------------------------------------------------------
The API uses a comprehensive authentication and authorization system to secure endpoints. This system follows a clean separation of concerns pattern, keeping identity verification (authentication) separate from permission checking (authorization).

Authentication:
- Firebase Authentication is used for identity verification
- JWT tokens are required for protected endpoints
- Token verification happens in the `authentication.js` middleware
- Various token error cases are handled (expired, invalid, revoked)

Authorization:
- Permission-based authorization system defined in `permissionRules.js`
- Role-based access control (admin, org-admin, org-staff, user)
- Resource ownership checking
- Organization-based permissions

Resource Loaders:
- Dedicated middleware to load resources for permission checking
- Support for pets, users, organizations, memberships, conversations, and messages
- Clean separation between resource loading and permission checking

Middleware Composition:
- Utility functions to compose middleware for common patterns
- `protectResource(resource, action)` - Protects a specific resource instance
- `protectCollection(resource, action)` - Protects collection-level operations
- `requireRole(role)` - Requires a specific role or roles
- `requireAdmin()` - Convenience function for admin-only routes
- `requireOrgAdmin()` - Organization admin access

Permission Conditions:
- `isOwner` - User owns the resource
- `isSelf` - Resource is the user's own profile
- `isSameOrganization` - User belongs to the same organization as the resource
- `isOrgAdmin`, `isOrgStaff` - User has specific role in the organization
- `isPublic` - The resource is marked as public

Using Protected Endpoints:
All protected endpoints require a valid Firebase Auth token in the Authorization header:
```
Authorization: Bearer your-firebase-token
```

For detailed usage examples, see the `docs/auth-usage-examples.md` file.

------------------------------------------------------------
API Endpoints:
------------------------------------------------------------

POST /pets
-----------
Create a new pet report.

Request:
   Method: POST
   URL: http://localhost:3000/pets
   Headers: Content-Type: application/json
   Body Example:
{
  "name": "Fido",
  "species": "Dog",
  "breed": "Labrador",
  "age": 5,
  "gender": "Male",
  "color": "Brown",
  "size": "Large",
  "status": "lost",
  "description": "Friendly dog",
  "location": {
    "latitude": 37.7749,
    "longitude": -122.4194,
    "address": "San Francisco, CA"
  },
  "images": [
    "http://example.com/image1.jpg"
  ],
  "owner": {
    "name": "John Doe",
    "contact": {
      "phone": "123-456-7890",
      "email": "john@example.com"
    }
  },
  "report": {
    "reportedAt": "2025-03-05T10:00:00Z",
    "updatedAt": "2025-03-05T10:00:00Z"
  }
}

cURL Example:
curl -X POST http://localhost:3000/pets -H "Content-Type: application/json" -d '{ "name": "Fido", "species": "Dog", "breed": "Labrador", "age": 5, "gender": "Male", "color": "Brown", "size": "Large", "status": "lost", "description": "Friendly dog", "location": { "latitude": 37.7749, "longitude": -122.4194, "address": "San Francisco, CA" }, "images": ["https://pettownsendvet.com/wp-content/uploads/2023/01/iStock-1052880600-2048x1365.jpg"], "owner": { "name": "John Doe", "contact": { "phone": "123-456-7890", "email": "john@example.com" } }, "report": { "reportedAt": "2025-03-05T10:00:00Z", "updatedAt": "2025-03-05T10:00:00Z" } }'

------------------------------------------------------------

GET /pets
-----------
Retrieve a list of pet reports.

Request:
   Method: GET
   URL: http://localhost:3000/pets

cURL Example:
curl http://localhost:3000/pets

------------------------------------------------------------

GET /pets/:id
---------------
Retrieve details of a specific pet report.

Request:
   Method: GET
   URL: http://localhost:3000/pets/{id}
   (Replace {id} with the actual pet ID)

cURL Example:
curl http://localhost:3000/pets/your-pet-id

------------------------------------------------------------

PUT /pets/:id
---------------
Update an existing pet report.

Request:
   Method: PUT
   URL: http://localhost:3000/pets/{id}
   (Replace {id} with the actual pet ID)
   Headers: Content-Type: application/json
   Body Example:
{
  "status": "adopted",
  "adoptionInfo": {
    "adoptedBy": "user123",
    "adoptedAt": "2025-03-06T12:00:00Z",
    "notes": "Happy family"
  }
}

cURL Example:
curl -X PUT http://localhost:3000/pets/your-pet-id -H "Content-Type: application/json" -d '{ "status": "adopted", "adoptionInfo": { "adoptedBy": "user123", "adoptedAt": "2025-03-06T12:00:00Z", "notes": "Happy family" } }'

------------------------------------------------------------

DELETE /pets/:id
------------------
Delete a pet report.

Request:
   Method: DELETE
   URL: http://localhost:3000/pets/{id}
   (Replace {id} with the actual pet ID)

cURL Example:
curl -X DELETE http://localhost:3000/pets/your-pet-id

------------------------------------------------------------
Testing with cURL:
------------------------------------------------------------
You can use the cURL examples provided above to test each endpoint. Replace "your-pet-id" with an actual pet identifier returned from the API.

------------------------------------------------------------
Future Enhancements:
------------------------------------------------------------
- Implement full database operations for retrieving, updating, and deleting pet records.
- Add data validation and error handling.
- Integrate authentication and authorization.
- Write automated tests for the API.
- Generate interactive API documentation (e.g., using Swagger).

------------------------------------------------------------

This is the complete content as plain text. Simply copy it into your text file, and you'll have all the documentation ready to use.




