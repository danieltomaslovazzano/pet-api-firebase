
Pet App API Documentation
=========================

This document provides a comprehensive overview of the Pet App API, which is designed to help pet owners and finders connect through digital announcements. The API supports multiple user roles (reporter, moderator, admin) and multi-language functionality (e.g., fields like `description_en` and `description_es`). All technical definitions (collections, fields, etc.) are in English.

Table of Contents
-----------------

1.  [PETS Endpoints](#pets-endpoints)
2.  [USERS Endpoints](#users-endpoints)
3.  [CONVERSATIONS Endpoints](#conversations-endpoints)
4.  [MESSAGES Endpoints](#messages-endpoints)
5.  [ADMIN / MODERATION Endpoints](#admin-endpoints)
6.  [Security Recommendations](#security-recommendations)

* * *

PETS Endpoints
--------------

### 1.1. POST /pets

**Description:** Create a new pet advertisement.

**Method:** POST

**URL:** `http://localhost:3000/pets`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "name": "Buddy",
      "species": "dog",
      "breed": "Labrador",
      "age": 4,
      "gender": "male",
      "color": "yellow",
      "size": "large",
      "status": "lost",
      "description_en": "Friendly and energetic",
      "description_es": "Amigable y enérgico",
      "location": { "latitude": 37.7749, "longitude": -122.4194, "address": "San Francisco, CA" },
      "images": [ "https://example.com/image.jpg" ],
      "userId": "user123"
    }

**cURL Example:**

    curl --location --request POST 'http://localhost:3000/pets' \
      --header 'Content-Type: application/json' \
      --data '{
        "name": "Buddy",
        "species": "dog",
        "breed": "Labrador",
        "age": 4,
        "gender": "male",
        "color": "yellow",
        "size": "large",
        "status": "lost",
        "description_en": "Friendly and energetic",
        "description_es": "Amigable y enérgico",
        "location": { "latitude": 37.7749, "longitude": -122.4194, "address": "San Francisco, CA" },
        "images": [ "https://example.com/image.jpg" ],
        "userId": "user123"
      }'

### 1.2. GET /pets

**Description:** Retrieve a list of all pet advertisements.

**Method:** GET

**URL:** `http://localhost:3000/pets`

**cURL Example:**

    curl --location --request GET 'http://localhost:3000/pets'

### 1.3. GET /pets/{id}

**Description:** Retrieve details of a specific pet advertisement.

**Method:** GET

**URL:** `http://localhost:3000/pets/{id}`

**cURL Example:**

    curl --location --request GET 'http://localhost:3000/pets/your-pet-id'

### 1.4. PUT /pets/{id}

**Description:** Update an existing pet advertisement (supports partial updates).

**Method:** PUT

**URL:** `http://localhost:3000/pets/{id}`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "status": "found",
      "description_en": "Pet has been found",
      "description_es": "La mascota ha been encontrada"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/pets/your-pet-id' \
      --header 'Content-Type: application/json' \
      --data '{
        "status": "found",
        "description_en": "Pet has been found",
        "description_es": "La mascota ha been encontrada"
      }'

### 1.5. DELETE /pets/{id}

**Description:** Delete a pet advertisement.

**Method:** DELETE

**URL:** `http://localhost:3000/pets/{id}`

**cURL Example:**

    curl --location --request DELETE 'http://localhost:3000/pets/your-pet-id'

* * *

USERS Endpoints
---------------

### 2.1. POST /users/signup

**Description:** Create a new user record (typically after Firebase Auth signup).

**Method:** POST

**URL:** `http://localhost:3000/users/signup`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "id": "firebase-uid-123",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "profilePhoto": "https://example.com/profile.jpg",
      "authMethod": "email",
      "role": "reporter",
      "locale": "en"
    }

**cURL Example:**

    curl --location --request POST 'http://localhost:3000/users/signup' \
      --header 'Content-Type: application/json' \
      --data '{
        "id": "firebase-uid-123",
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "+1234567890",
        "profilePhoto": "https://example.com/profile.jpg",
        "authMethod": "email",
        "role": "reporter",
        "locale": "en"
      }'

### 2.2. GET /users/{id}

**Description:** Retrieve details of a specific user.

**Method:** GET

**URL:** `http://localhost:3000/users/{id}`

**cURL Example:**

    curl --location --request GET 'http://localhost:3000/users/firebase-uid-123'

### 2.3. PUT /users/{id}

**Description:** Update user details.

**Method:** PUT

**URL:** `http://localhost:3000/users/{id}`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "name": "John A. Doe",
      "phone": "+0987654321",
      "locale": "es"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/users/firebase-uid-123' \
      --header 'Content-Type: application/json' \
      --data '{
        "name": "John A. Doe",
        "phone": "+0987654321",
        "locale": "es"
      }'

### 2.4. DELETE /users/{id}

**Description:** Delete a user record.

**Method:** DELETE

**URL:** `http://localhost:3000/users/{id}`

**cURL Example:**

    curl --location --request DELETE 'http://localhost:3000/users/firebase-uid-123'

### 2.5. PUT /users/{id}/block

**Description:** Block a user (adds `blockedUserId` to the user's `blockedUsers` list).

**Method:** PUT

**URL:** `http://localhost:3000/users/{id}/block`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "blockedUserId": "firebase-uid-456"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/users/firebase-uid-123/block' \
      --header 'Content-Type: application/json' \
      --data '{
        "blockedUserId": "firebase-uid-456"
      }'

### 2.6. PUT /users/{id}/unblock

**Description:** Unblock a user (removes `blockedUserId` from the user's `blockedUsers` list).

**Method:** PUT

**URL:** `http://localhost:3000/users/{id}/unblock`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "blockedUserId": "firebase-uid-456"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/users/firebase-uid-123/unblock' \
      --header 'Content-Type: application/json' \
      --data '{
        "blockedUserId": "firebase-uid-456"
      }'

* * *

CONVERSATIONS Endpoints
-----------------------

### 3.1. POST /conversations

**Description:** Create a new conversation between users.

**Method:** POST

**URL:** `http://localhost:3000/conversations`

**Request Body Example:**

    {
      "participants": ["firebase-uid-123", "firebase-uid-456"]
    }

**cURL Example:**

    curl --location --request POST 'http://localhost:3000/conversations' \
    --header 'Content-Type: application/json' \
    --data '{
      "participants": ["firebase-uid-123", "firebase-uid-456"]
    }'

### 3.2. GET /conversations/{id}

**Description:** Get a conversation by its ID.

**Method:** GET

**URL:** `http://localhost:3000/conversations/{id}`

**cURL Example:**

    curl --location --request GET 'http://localhost:3000/conversations/your-conversation-id'

### 3.3. GET /conversations/user/{userId}

**Description:** List all conversations for a specific user.

**Method:** GET

**URL:** `http://localhost:3000/conversations/user/{userId}`

**cURL Example:**

    curl --location --request GET 'http://localhost:3000/conversations/user/firebase-uid-123'

### 3.4. PUT /conversations/{id}/soft-delete

**Description:** Soft delete a conversation for a user (marks it as deleted for that user).

**Method:** PUT

**URL:** `http://localhost:3000/conversations/{id}/soft-delete`

**Request Body Example:**

    {
      "userId": "firebase-uid-123"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/conversations/your-conversation-id/soft-delete' \
    --header 'Content-Type: application/json' \
    --data '{
      "userId": "firebase-uid-123"
    }'

### 3.5. DELETE /conversations/{id}

**Description:** Permanently delete a conversation (admin action).

**Method:** DELETE

**URL:** `http://localhost:3000/conversations/{id}`

**cURL Example:**

    curl --location --request DELETE 'http://localhost:3000/conversations/your-conversation-id'

### 3.6. PUT /conversations/{id}/hide

**Description:** Hide (archive) a conversation for a user.

**Method:** PUT

**URL:** `http://localhost:3000/conversations/{id}/hide`

**Request Body Example:**

    {
      "userId": "firebase-uid-123"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/conversations/your-conversation-id/hide' \
    --header 'Content-Type: application/json' \
    --data '{
      "userId": "firebase-uid-123"
    }'

### 3.7. PUT /conversations/{id}/unhide

**Description:** Unhide a conversation for a user.

**Method:** PUT

**URL:** `http://localhost:3000/conversations/{id}/unhide`

**Request Body Example:**

    {
      "userId": "firebase-uid-123"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/conversations/your-conversation-id/unhide' \
    --header 'Content-Type: application/json' \
    --data '{
      "userId": "firebase-uid-123"
    }'

### 3.8. PUT /conversations/{id}/block

**Description:** Block a conversation for a user.

**Method:** PUT

**URL:** `http://localhost:3000/conversations/{id}/block`

**Request Body Example:**

    {
      "userId": "firebase-uid-123"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/conversations/your-conversation-id/block' \
    --header 'Content-Type: application/json' \
    --data '{
      "userId": "firebase-uid-123"
    }'

### 3.9. PUT /conversations/{id}/unblock

**Description:** Unblock a conversation for a user.

**Method:** PUT

**URL:** `http://localhost:3000/conversations/{id}/unblock`

**Request Body Example:**

    {
      "userId": "firebase-uid-123"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/conversations/your-conversation-id/unblock' \
    --header 'Content-Type: application/json' \
    --data '{
      "userId": "firebase-uid-123"
    }'

* * *

MESSAGES Endpoints
------------------

### 4.1. POST /messages

**Description:** Create a new message within a conversation.

**Method:** POST

**URL:** `http://localhost:3000/messages`

**Request Body Example:**

    {
      "conversationId": "conv-123",
      "senderId": "firebase-uid-123",
      "content": "Hello, I think I found your pet."
    }

**cURL Example:**

    curl --location --request POST 'http://localhost:3000/messages' \
    --header 'Content-Type: application/json' \
    --data '{
      "conversationId": "conv-123",
      "senderId": "firebase-uid-123",
      "content": "Hello, I think I found your pet."
    }'

### 4.2. GET /messages/{conversationId}

**Description:** Retrieve all messages for a given conversation.

**Method:** GET

**URL:** `http://localhost:3000/messages/{conversationId}`

**cURL Example:**

    curl --location --request GET 'http://localhost:3000/messages/conv-123'

* * *

ADMIN / MODERATION Endpoints (Optional)
---------------------------------------

### 5.1. GET /admin/pets

**Description:** Retrieve a list of all pet advertisements with administrative filters.

**Method:** GET

**URL:** `http://localhost:3000/admin/pets`

**cURL Example:**

    curl --location --request GET 'http://localhost:3000/admin/pets'

### 5.2. PUT /admin/pets/{id}

**Description:** Update any pet advertisement (admin/moderator privileges required).

**Method:** PUT

**URL:** `http://localhost:3000/admin/pets/{id}`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "status": "for_adoption",
      "description_en": "Updated description in English",
      "description_es": "Descripción actualizada en español"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/admin/pets/your-pet-id' \
    --header 'Content-Type: application/json' \
    --data '{
      "status": "for_adoption",
      "description_en": "Updated description in English",
      "description_es": "Descripción actualizada en español"
    }'

### 5.3. PUT /admin/users/{id}

**Description:** Update user details (admin/moderator privileges).

**Method:** PUT

**URL:** `http://localhost:3000/admin/users/{id}`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "name": "Jane Doe",
      "phone": "+1122334455"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/admin/users/firebase-uid-123' \
    --header 'Content-Type: application/json' \
    --data '{
      "name": "Jane Doe",
      "phone": "+1122334455"
    }'

### 5.4. PUT /admin/roles/{id}

**Description:** Update the role of a user.

**Method:** PUT

**URL:** `http://localhost:3000/admin/roles/{id}`

**Headers:** Content-Type: application/json

**Request Body Example:**

    {
      "role": "moderator"
    }

**cURL Example:**

    curl --location --request PUT 'http://localhost:3000/admin/roles/firebase-uid-123' \
    --header 'Content-Type: application/json' \
    --data '{
      "role": "moderator"
    }'

### 5.5. DELETE /admin/users/{id}

**Description:** Delete a user (admin privileges required).

**Method:** DELETE

**URL:** `http://localhost:3000/admin/users/{id}`

**cURL Example:**

    curl --location --request DELETE 'http://localhost:3000/admin/users/firebase-uid-123'

* * *

Security Recommendations
------------------------

*   **Authentication and Authorization:** Use Firebase Authentication and require a valid token (e.g., via the `Authorization: Bearer <token>` header) for all protected endpoints. Implement role-based access control using custom claims.
*   **Rate Limiting:** Implement rate limiting (e.g., using `express-rate-limit`) to prevent abuse and DoS attacks.
*   **Input Validation and Sanitization:** Validate and sanitize all incoming data using libraries such as `express-validator`.
*   **HTTPS:** Serve your API over HTTPS to encrypt data in transit.
*   **CORS Policy:** Configure CORS to allow requests only from trusted domains.
*   **Access Control:** Public endpoints (e.g., `GET /pets`) can be open, but ensure sensitive data is not exposed. Protected endpoints must verify that the authenticated user is permitted to perform the action.
*   **Logging and Monitoring:** Log critical actions and errors, and monitor API usage for suspicious activity.

* * *

_End of Document_