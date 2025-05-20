# Pet API Documentation

## Overview
This document provides comprehensive documentation for the Pet API endpoints, including authentication requirements, request/response formats, and examples.

## Base URL
All endpoints are prefixed with: `http://localhost:3000/api`

## Authentication
Most endpoints require authentication using Firebase Auth tokens. Include the token in the Authorization header:
```
Authorization: Bearer your-firebase-token
```

## Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh authentication token
- `POST /auth/password-reset` - Request password reset

### Users
- `GET /users/me` - Get current user profile
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user profile
- `DELETE /users/:id` - Delete user account

### Pets
- `POST /pets` - Create a new pet report
- `GET /pets` - List pet reports (with filters)
- `GET /pets/:id` - Get pet report by ID
- `PUT /pets/:id` - Update pet report
- `DELETE /pets/:id` - Delete pet report
- `POST /pets/:id/images` - Upload pet images

### Organizations
- `POST /organizations` - Create organization
- `GET /organizations` - List organizations
- `GET /organizations/:id` - Get organization by ID
- `PUT /organizations/:id` - Update organization
- `DELETE /organizations/:id` - Delete organization

### Memberships
- `POST /memberships` - Join organization
- `GET /memberships` - List memberships
- `PUT /memberships/:id` - Update membership role
- `DELETE /memberships/:id` - Leave organization

### Conversations
- `POST /conversations` - Create conversation
- `GET /conversations` - List conversations
- `GET /conversations/:id` - Get conversation by ID
- `PUT /conversations/:id` - Update conversation
- `DELETE /conversations/:id` - Delete conversation

### Messages
- `POST /messages` - Send message
- `GET /messages` - List messages
- `GET /messages/:id` - Get message by ID
- `PUT /messages/:id` - Update message
- `DELETE /messages/:id` - Delete message

## Detailed Endpoint Documentation

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Pet Endpoints

#### Create Pet Report
```http
POST /pets
Content-Type: application/json
Authorization: Bearer your-token

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
  }
}
```

#### List Pet Reports
```http
GET /pets?status=lost&species=dog&page=1&limit=10
Authorization: Bearer your-token
```

## Error Responses
All endpoints follow a consistent error response format:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {
    // Additional error details if available
  }
}
```

## Rate Limiting
- 100 requests per minute per IP
- 1000 requests per hour per user

## Testing
- Use the Postman collection in `postman/PetApp_API_Collection.json` for testing
- Environment variables are available in `.env.test.example`

## Support
For API support or to report issues, please contact the development team.

*Last updated: May 14, 2024* 