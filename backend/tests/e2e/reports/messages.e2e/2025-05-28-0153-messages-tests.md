# E2E Test Report: messages-tests

**Date:** 5/28/2025  
**Time:** 1:53:20 AM  
**Duration:** 54.82s  
**Tests:** 27 total, 26 passed, 1 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 1.69s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 0.83s | Should create a message with attachments |
| ❌ Should fail to create message without conversation ID | FAILED | 0.82s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.77s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.65s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 2.25s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.99s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.69s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.61s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.66s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.77s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.79s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.72s | Should allow message sender to view their message |
| ✅ Should allow conversation participant to view message | PASSED | 0.60s | Should allow conversation participant to view message |
| ✅ Should fail to view message as non-participant | PASSED | 2.75s | Should fail to view message as non-participant |
| ✅ Should allow message sender to delete their own message | PASSED | 1.71s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.70s | Should allow admin to delete any message |
| ✅ Should fail to delete message as non-sender non-admin | PASSED | 1.50s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.64s | Should fail to delete non-existent message |
| ✅ Should create message in specific organization | PASSED | 2.60s | Should create message in specific organization |
| ✅ Should not access messages from different organization | PASSED | 0.66s | Should not access messages from different organization |
| ✅ Should filter messages by organization | PASSED | 0.77s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.59s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.54s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.62s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 1.41s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 1.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1690.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "content": "Hello, this is a test message!",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "332",
    "etag": "W/\"14c-08c06nj1ItnFT2/mpZMfLLr2Ouk\"",
    "date": "Tue, 27 May 2025 23:52:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:40.429Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 1690.2 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (830.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTk1MCwidXNlcl9pZCI6ImZDYnpDQXl6TU9VZzZvbUVXZGFhWkh6NUNSRTMiLCJzdWIiOiJmQ2J6Q0F5ek1PVWc2b21FV2RhYVpIejVDUkUzIiwiaWF0IjoxNzQ4Mzg5OTUwLCJleHAiOjE3NDgzOTM1NTAsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5OTQ5NDY5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTk0OTQ2OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PcZj1gdME7q7GYu7OQUulFgqIG7TRBT6DknLLyqzFP0l-4pf0ZNV9vSUlxmLk2U0LIDm_OuS1YrEV5PlAEVpv5DgkfZa5UekQ4x67PfJHuvqdz9s5bYRcNfhwQDSRniDCBTWVMkh6_TLXYgbtGhgvmyfvmQTYop6vy_5aqFTt2jKkw6wz-R120z58nJJ_U_bvjrts6TZ-v8DEZedzPcHIzRpOjWvg_vt13Z5qDW4x9LWBrHvwslhuRmiy7Rk289-CP03t2Rp-q5snX9FJqmKz1erSwDPcG0a5uEpr4YdpGy4rGYywVx2cohsvfiC1mIv0mNPOVwSfvgAGdE-AcKWEQ",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "396",
    "etag": "W/\"18c-hRjHpaKilwQge8lM6aPK4KeqP4c\"",
    "date": "Tue, 27 May 2025 23:52:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6b8400a7-f568-43fb-9f6e-98ae68176b7a",
    "conversationId": "bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc",
    "senderId": "fCbzCAyzMOUg6omEWdaaZHz5CRE3",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:41.856Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 830.4 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.82s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m500[39m
Received: [31m400[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (817.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "content": "Message without conversation ID"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "39",
    "etag": "W/\"27-W/YagOYP1wBc58zpJb6X1aFRG7s\"",
    "date": "Tue, 27 May 2025 23:52:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 817.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (767.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0"
  }
}
```

**📥 Response:**
```json
{
  "status": 500,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "87",
    "etag": "W/\"57-icv/MLWt6gtFSTRR0Ajj6n6lByY\"",
    "date": "Tue, 27 May 2025 23:52:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 767.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (653.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "123e4567-e89b-12d3-a456-426614174000",
    "content": "Message to non-existent conversation"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-xKwHSsyn17woE44hYRx695+j2zk\"",
    "date": "Tue, 27 May 2025 23:52:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 653.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.25s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1501.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
    ],
    "title": "Private Conversation"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "327",
    "etag": "W/\"147-lzzazjiIP0HcYp0aY+nyKs/gULY\"",
    "date": "Tue, 27 May 2025 23:52:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "be6ae885-5e3a-486a-997c-0ef551ba9c26",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:52:45.296Z",
    "lastMessageAt": "2025-05-27T23:52:45.296Z",
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
    ]
  }
}
```

**⏱️ Duration:** 1501.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (747.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTk1MiwidXNlcl9pZCI6IllCYTdUQmx1UEpURlVFSzJhbFM4dkRYTFBiSTMiLCJzdWIiOiJZQmE3VEJsdVBKVEZVRUsyYWxTOHZEWExQYkkzIiwiaWF0IjoxNzQ4Mzg5OTUyLCJleHAiOjE3NDgzOTM1NTIsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk5NTA4MzhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk5NTA4MzhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.tLQyyeDBkpp6GvVVpUFpKvg9jZcQ-hnOQbkSXl-hrl-anCUNILX3WtNFXtS-BmJgv2_FGUoAFLWijMZEXeWDbv871UocT0HyWAAwjDXN6fUTF0hjPmjqUHc7ltFsVCXQnXXIZXbd9fzzp-TOgCzE5DuWVuenReSjEf97aGnyOahBR_Y44AJr0UT_8YOEtSoczoSU1lfnURqckh-o7RjSu_dazFObJqKG5_kyYe_8KASRnve-3jvxxuhqssiYS_YPLtcq15_6dezoCLAnmyOE7ckvojLVKCs0QiQ4oy4yVqSkv7cadwMR28bCAE11eAnwRF6YauMLtYGt_dDKSx5_5A",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "be6ae885-5e3a-486a-997c-0ef551ba9c26",
    "content": "Unauthorized message"
  }
}
```

**📥 Response:**
```json
{
  "status": 403,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "86",
    "etag": "W/\"56-cXYyf0OpA6BpPjFQ+1VlfzAjSHA\"",
    "date": "Tue, 27 May 2025 23:52:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 747.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/63fe4f12-32d8-4a57-bec1-e4935be141e0 (990.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "334",
    "etag": "W/\"14e-EYcl+cgVe0bky8mntvGM8fZSvJk\"",
    "date": "Tue, 27 May 2025 23:52:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
      "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:52:40.429Z",
      "attachments": null,
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    }
  ]
}
```

**⏱️ Duration:** 990.2 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/0ea1c09c-3c8a-48a8-9fad-2ad4d143463b/details (686.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "332",
    "etag": "W/\"14c-08c06nj1ItnFT2/mpZMfLLr2Ouk\"",
    "date": "Tue, 27 May 2025 23:52:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:40.429Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 686.8 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (611.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "37",
    "etag": "W/\"25-w299mSho3uTuRe45MSoXxgX0I0c\"",
    "date": "Tue, 27 May 2025 23:52:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 611.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (659.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "29",
    "etag": "W/\"1d-guIAbjmFTCDD3YgMKiwGfDp1z0g\"",
    "date": "Tue, 27 May 2025 23:52:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 659.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1015.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
    ],
    "title": "Private Conversation for Messages"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "340",
    "etag": "W/\"154-M5aKtlA1d34rnd6bWl9sJCtG2mM\"",
    "date": "Tue, 27 May 2025 23:52:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b1b0c3ea-ae8b-4149-9ddb-390792739c0e",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:52:50.020Z",
    "lastMessageAt": "2025-05-27T23:52:50.020Z",
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
    ]
  }
}
```

**⏱️ Duration:** 1015.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/b1b0c3ea-ae8b-4149-9ddb-390792739c0e (758.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTk1MiwidXNlcl9pZCI6IllCYTdUQmx1UEpURlVFSzJhbFM4dkRYTFBiSTMiLCJzdWIiOiJZQmE3VEJsdVBKVEZVRUsyYWxTOHZEWExQYkkzIiwiaWF0IjoxNzQ4Mzg5OTUyLCJleHAiOjE3NDgzOTM1NTIsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk5NTA4MzhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk5NTA4MzhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.tLQyyeDBkpp6GvVVpUFpKvg9jZcQ-hnOQbkSXl-hrl-anCUNILX3WtNFXtS-BmJgv2_FGUoAFLWijMZEXeWDbv871UocT0HyWAAwjDXN6fUTF0hjPmjqUHc7ltFsVCXQnXXIZXbd9fzzp-TOgCzE5DuWVuenReSjEf97aGnyOahBR_Y44AJr0UT_8YOEtSoczoSU1lfnURqckh-o7RjSu_dazFObJqKG5_kyYe_8KASRnve-3jvxxuhqssiYS_YPLtcq15_6dezoCLAnmyOE7ckvojLVKCs0QiQ4oy4yVqSkv7cadwMR28bCAE11eAnwRF6YauMLtYGt_dDKSx5_5A",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 403,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "86",
    "etag": "W/\"56-8qXoyeXFkyUP/AKiRAfVwbE9QdY\"",
    "date": "Tue, 27 May 2025 23:52:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 758.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=63fe4f12-32d8-4a57-bec1-e4935be141e0 (789.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "334",
    "etag": "W/\"14e-EYcl+cgVe0bky8mntvGM8fZSvJk\"",
    "date": "Tue, 27 May 2025 23:52:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
      "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:52:40.429Z",
      "attachments": null,
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    }
  ]
}
```

**⏱️ Duration:** 789.8 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/0ea1c09c-3c8a-48a8-9fad-2ad4d143463b/details (718.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "332",
    "etag": "W/\"14c-08c06nj1ItnFT2/mpZMfLLr2Ouk\"",
    "date": "Tue, 27 May 2025 23:52:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:40.429Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 718.1 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/0ea1c09c-3c8a-48a8-9fad-2ad4d143463b/details (600.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "332",
    "etag": "W/\"14c-08c06nj1ItnFT2/mpZMfLLr2Ouk\"",
    "date": "Tue, 27 May 2025 23:52:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:40.429Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 600.3 ms  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1149.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
    ],
    "title": "Private Conversation for Message Access"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "346",
    "etag": "W/\"15a-sNtDusqusU/mElYXpocvv66ov/M\"",
    "date": "Tue, 27 May 2025 23:52:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "24c533cc-8235-4573-a0aa-822c85ec8c69",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:52:53.995Z",
    "lastMessageAt": "2025-05-27T23:52:53.995Z",
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
    ]
  }
}
```

**⏱️ Duration:** 1149.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (1034.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "24c533cc-8235-4573-a0aa-822c85ec8c69",
    "content": "Private message"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "317",
    "etag": "W/\"13d-FebS8XkOVlctxuYoiyJCBAkI91I\"",
    "date": "Tue, 27 May 2025 23:52:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b59a01fb-48fa-4c7c-85eb-aae4d80bc368",
    "conversationId": "24c533cc-8235-4573-a0aa-822c85ec8c69",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:55.367Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 1034.1 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/b59a01fb-48fa-4c7c-85eb-aae4d80bc368/details (570.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTk1MiwidXNlcl9pZCI6IllCYTdUQmx1UEpURlVFSzJhbFM4dkRYTFBiSTMiLCJzdWIiOiJZQmE3VEJsdVBKVEZVRUsyYWxTOHZEWExQYkkzIiwiaWF0IjoxNzQ4Mzg5OTUyLCJleHAiOjE3NDgzOTM1NTIsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk5NTA4MzhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk5NTA4MzhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.tLQyyeDBkpp6GvVVpUFpKvg9jZcQ-hnOQbkSXl-hrl-anCUNILX3WtNFXtS-BmJgv2_FGUoAFLWijMZEXeWDbv871UocT0HyWAAwjDXN6fUTF0hjPmjqUHc7ltFsVCXQnXXIZXbd9fzzp-TOgCzE5DuWVuenReSjEf97aGnyOahBR_Y44AJr0UT_8YOEtSoczoSU1lfnURqckh-o7RjSu_dazFObJqKG5_kyYe_8KASRnve-3jvxxuhqssiYS_YPLtcq15_6dezoCLAnmyOE7ckvojLVKCs0QiQ4oy4yVqSkv7cadwMR28bCAE11eAnwRF6YauMLtYGt_dDKSx5_5A",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 403,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "89",
    "etag": "W/\"59-EJtKrw0eqMSOH/xfuajJG4OlIpM\"",
    "date": "Tue, 27 May 2025 23:52:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 570.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ✅ PASSED  
**Duration:** 1.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (912.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTk1MCwidXNlcl9pZCI6ImZDYnpDQXl6TU9VZzZvbUVXZGFhWkh6NUNSRTMiLCJzdWIiOiJmQ2J6Q0F5ek1PVWc2b21FV2RhYVpIejVDUkUzIiwiaWF0IjoxNzQ4Mzg5OTUwLCJleHAiOjE3NDgzOTM1NTAsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5OTQ5NDY5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTk0OTQ2OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PcZj1gdME7q7GYu7OQUulFgqIG7TRBT6DknLLyqzFP0l-4pf0ZNV9vSUlxmLk2U0LIDm_OuS1YrEV5PlAEVpv5DgkfZa5UekQ4x67PfJHuvqdz9s5bYRcNfhwQDSRniDCBTWVMkh6_TLXYgbtGhgvmyfvmQTYop6vy_5aqFTt2jKkw6wz-R120z58nJJ_U_bvjrts6TZ-v8DEZedzPcHIzRpOjWvg_vt13Z5qDW4x9LWBrHvwslhuRmiy7Rk289-CP03t2Rp-q5snX9FJqmKz1erSwDPcG0a5uEpr4YdpGy4rGYywVx2cohsvfiC1mIv0mNPOVwSfvgAGdE-AcKWEQ",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "content": "Message to be deleted by sender"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "333",
    "etag": "W/\"14d-sFobl7L0jB6x5jnnfVlMz9Vgh7k\"",
    "date": "Tue, 27 May 2025 23:52:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0a95ae4c-f202-4160-b87e-16372a23a0ab",
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "senderId": "fCbzCAyzMOUg6omEWdaaZHz5CRE3",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:56.823Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 912.4 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/0a95ae4c-f202-4160-b87e-16372a23a0ab (799.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "57",
    "etag": "W/\"39-Y9kLSb1nwF2sBXzy7wPn9f2m3Rk\"",
    "date": "Tue, 27 May 2025 23:52:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 799.0 ms  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (923.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTk1MCwidXNlcl9pZCI6ImZDYnpDQXl6TU9VZzZvbUVXZGFhWkh6NUNSRTMiLCJzdWIiOiJmQ2J6Q0F5ek1PVWc2b21FV2RhYVpIejVDUkUzIiwiaWF0IjoxNzQ4Mzg5OTUwLCJleHAiOjE3NDgzOTM1NTAsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5OTQ5NDY5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTk0OTQ2OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PcZj1gdME7q7GYu7OQUulFgqIG7TRBT6DknLLyqzFP0l-4pf0ZNV9vSUlxmLk2U0LIDm_OuS1YrEV5PlAEVpv5DgkfZa5UekQ4x67PfJHuvqdz9s5bYRcNfhwQDSRniDCBTWVMkh6_TLXYgbtGhgvmyfvmQTYop6vy_5aqFTt2jKkw6wz-R120z58nJJ_U_bvjrts6TZ-v8DEZedzPcHIzRpOjWvg_vt13Z5qDW4x9LWBrHvwslhuRmiy7Rk289-CP03t2Rp-q5snX9FJqmKz1erSwDPcG0a5uEpr4YdpGy4rGYywVx2cohsvfiC1mIv0mNPOVwSfvgAGdE-AcKWEQ",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "content": "Message to be deleted by admin"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "332",
    "etag": "W/\"14c-4jjy/cCt3xXp8eW/FYwBO3VwHiI\"",
    "date": "Tue, 27 May 2025 23:52:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "40050ce4-e5ed-471a-9b0a-240a840b2fdf",
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "senderId": "fCbzCAyzMOUg6omEWdaaZHz5CRE3",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:58.618Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 923.9 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/40050ce4-e5ed-471a-9b0a-240a840b2fdf (776.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "57",
    "etag": "W/\"39-Y9kLSb1nwF2sBXzy7wPn9f2m3Rk\"",
    "date": "Tue, 27 May 2025 23:52:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 776.9 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ✅ PASSED  
**Duration:** 1.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (962.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc",
    "content": "Message that regular user cannot delete"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "341",
    "etag": "W/\"155-7XPxB77jQ5USE3JbK8wNSsNjG6o\"",
    "date": "Tue, 27 May 2025 23:53:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "628697e3-c059-4845-b0f3-243977454523",
    "conversationId": "bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-05-27T23:53:00.355Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 962.5 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/628697e3-c059-4845-b0f3-243977454523 (541.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTk1MCwidXNlcl9pZCI6ImZDYnpDQXl6TU9VZzZvbUVXZGFhWkh6NUNSRTMiLCJzdWIiOiJmQ2J6Q0F5ek1PVWc2b21FV2RhYVpIejVDUkUzIiwiaWF0IjoxNzQ4Mzg5OTUwLCJleHAiOjE3NDgzOTM1NTAsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5OTQ5NDY5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTk0OTQ2OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PcZj1gdME7q7GYu7OQUulFgqIG7TRBT6DknLLyqzFP0l-4pf0ZNV9vSUlxmLk2U0LIDm_OuS1YrEV5PlAEVpv5DgkfZa5UekQ4x67PfJHuvqdz9s5bYRcNfhwQDSRniDCBTWVMkh6_TLXYgbtGhgvmyfvmQTYop6vy_5aqFTt2jKkw6wz-R120z58nJJ_U_bvjrts6TZ-v8DEZedzPcHIzRpOjWvg_vt13Z5qDW4x9LWBrHvwslhuRmiy7Rk289-CP03t2Rp-q5snX9FJqmKz1erSwDPcG0a5uEpr4YdpGy4rGYywVx2cohsvfiC1mIv0mNPOVwSfvgAGdE-AcKWEQ",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 403,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "89",
    "etag": "W/\"59-EJtKrw0eqMSOH/xfuajJG4OlIpM\"",
    "date": "Tue, 27 May 2025 23:53:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 541.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (634.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "29",
    "etag": "W/\"1d-guIAbjmFTCDD3YgMKiwGfDp1z0g\"",
    "date": "Tue, 27 May 2025 23:53:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 634.0 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (693.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  },
  "data": {
    "userId": "fCbzCAyzMOUg6omEWdaaZHz5CRE3",
    "organizationId": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb",
    "role": "member"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "253",
    "etag": "W/\"fd-ox3uLwYIJqOqia41ZQXMF7H9LuU\"",
    "date": "Tue, 27 May 2025 23:53:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c7415d70-78a7-452d-b52c-8e7694fcd73b",
    "userId": "fCbzCAyzMOUg6omEWdaaZHz5CRE3",
    "organizationId": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T23:53:02.290Z",
    "updatedAt": "2025-05-27T23:53:02.290Z"
  }
}
```

**⏱️ Duration:** 693.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/conversations (994.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
    ],
    "title": "Org2 Conversation"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "324",
    "etag": "W/\"144-NFPs761utfAzCVaUdHVyX64vH3Q\"",
    "date": "Tue, 27 May 2025 23:53:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0c9a7e48-36e0-48cd-981e-304030ca315c",
    "title": "Org2 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:53:02.904Z",
    "lastMessageAt": "2025-05-27T23:53:02.904Z",
    "organizationId": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "fCbzCAyzMOUg6omEWdaaZHz5CRE3"
    ]
  }
}
```

**⏱️ Duration:** 994.9 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/messages (914.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb"
  },
  "data": {
    "conversationId": "0c9a7e48-36e0-48cd-981e-304030ca315c",
    "content": "Message in organization 2"
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "327",
    "etag": "W/\"147-CnzEanLadxUVMj6qNisRc3G4n1Q\"",
    "date": "Tue, 27 May 2025 23:53:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5ad78613-c363-46f5-b125-cda01ee778ae",
    "conversationId": "0c9a7e48-36e0-48cd-981e-304030ca315c",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message in organization 2",
    "status": "sent",
    "timestamp": "2025-05-27T23:53:04.145Z",
    "attachments": null,
    "location": null,
    "organizationId": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb"
  }
}
```

**⏱️ Duration:** 914.5 ms  

</details>


---

### Test: Should not access messages from different organization
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/0ea1c09c-3c8a-48a8-9fad-2ad4d143463b/details (656.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "332",
    "etag": "W/\"14c-08c06nj1ItnFT2/mpZMfLLr2Ouk\"",
    "date": "Tue, 27 May 2025 23:53:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:52:40.429Z",
    "attachments": null,
    "location": null,
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 656.8 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (771.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1719",
    "etag": "W/\"6b7-b2xOqmh+2VddsR6XVDlEOEmmAsE\"",
    "date": "Tue, 27 May 2025 23:53:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "5ad78613-c363-46f5-b125-cda01ee778ae",
      "conversationId": "0c9a7e48-36e0-48cd-981e-304030ca315c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-05-27T23:53:04.145Z",
      "attachments": null,
      "location": null,
      "organizationId": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb"
    },
    {
      "id": "628697e3-c059-4845-b0f3-243977454523",
      "conversationId": "bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-05-27T23:53:00.355Z",
      "attachments": null,
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    },
    {
      "id": "b59a01fb-48fa-4c7c-85eb-aae4d80bc368",
      "conversationId": "24c533cc-8235-4573-a0aa-822c85ec8c69",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-05-27T23:52:55.367Z",
      "attachments": null,
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    },
    {
      "id": "6b8400a7-f568-43fb-9f6e-98ae68176b7a",
      "conversationId": "bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc",
      "senderId": "fCbzCAyzMOUg6omEWdaaZHz5CRE3",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-05-27T23:52:41.856Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    },
    {
      "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
      "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:52:40.429Z",
      "attachments": null,
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    }
  ]
}
```

**⏱️ Duration:** 771.9 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (594.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1719",
    "etag": "W/\"6b7-b2xOqmh+2VddsR6XVDlEOEmmAsE\"",
    "date": "Tue, 27 May 2025 23:53:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "5ad78613-c363-46f5-b125-cda01ee778ae",
      "conversationId": "0c9a7e48-36e0-48cd-981e-304030ca315c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-05-27T23:53:04.145Z",
      "attachments": null,
      "location": null,
      "organizationId": "58d9cfb1-5a0a-4466-97d2-60a243d21dbb"
    },
    {
      "id": "628697e3-c059-4845-b0f3-243977454523",
      "conversationId": "bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-05-27T23:53:00.355Z",
      "attachments": null,
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    },
    {
      "id": "b59a01fb-48fa-4c7c-85eb-aae4d80bc368",
      "conversationId": "24c533cc-8235-4573-a0aa-822c85ec8c69",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-05-27T23:52:55.367Z",
      "attachments": null,
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    },
    {
      "id": "6b8400a7-f568-43fb-9f6e-98ae68176b7a",
      "conversationId": "bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc",
      "senderId": "fCbzCAyzMOUg6omEWdaaZHz5CRE3",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-05-27T23:52:41.856Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    },
    {
      "id": "0ea1c09c-3c8a-48a8-9fad-2ad4d143463b",
      "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:52:40.429Z",
      "attachments": null,
      "location": null,
      "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
    }
  ]
}
```

**⏱️ Duration:** 594.1 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/63fe4f12-32d8-4a57-bec1-e4935be141e0 (7.4ms)</summary>

**📤 Request:**
```json
{}
```

**📥 Response:**
```json
{
  "status": 401,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Tue, 27 May 2025 23:53:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 7.4 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (543.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "invalidField": "invalid data"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "39",
    "etag": "W/\"27-W/YagOYP1wBc58zpJb6X1aFRG7s\"",
    "date": "Tue, 27 May 2025 23:53:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 543.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (616.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**📥 Response:**
```json
{
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "37",
    "etag": "W/\"25-w299mSho3uTuRe45MSoXxgX0I0c\"",
    "date": "Tue, 27 May 2025 23:53:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 616.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 1.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1409.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg",
    "X-Organization-Id": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  },
  "data": {
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "content": "Message with location",
    "location": {
      "latitude": 40.7128,
      "longitude": -74.006,
      "address": "New York, NY"
    }
  }
}
```

**📥 Response:**
```json
{
  "status": 201,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "384",
    "etag": "W/\"180-nUCdK0Pw8XqVwLnSoTlEPA7ipQg\"",
    "date": "Tue, 27 May 2025 23:53:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "e1ff7826-fb53-4194-b96d-36d7d9675374",
    "conversationId": "63fe4f12-32d8-4a57-bec1-e4935be141e0",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-05-27T23:53:08.715Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69"
  }
}
```

**⏱️ Duration:** 1409.8 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/0ea1c09c-3c8a-48a8-9fad-2ad4d143463b (189.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Tue, 27 May 2025 23:53:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/0ea1c09c-3c8a-48a8-9fad-2ad4d143463b</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 189.7 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/6b8400a7-f568-43fb-9f6e-98ae68176b7a (179.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Tue, 27 May 2025 23:53:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/6b8400a7-f568-43fb-9f6e-98ae68176b7a</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 179.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/b59a01fb-48fa-4c7c-85eb-aae4d80bc368 (274.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Tue, 27 May 2025 23:53:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/b59a01fb-48fa-4c7c-85eb-aae4d80bc368</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 274.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/628697e3-c059-4845-b0f3-243977454523 (203.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Tue, 27 May 2025 23:53:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/628697e3-c059-4845-b0f3-243977454523</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 203.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/5ad78613-c363-46f5-b125-cda01ee778ae (204.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Tue, 27 May 2025 23:53:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/5ad78613-c363-46f5-b125-cda01ee778ae</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 204.8 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/messages/e1ff7826-fb53-4194-b96d-36d7d9675374 (307.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 404,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Tue, 27 May 2025 23:53:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/e1ff7826-fb53-4194-b96d-36d7d9675374</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 307.9 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/63fe4f12-32d8-4a57-bec1-e4935be141e0 (867.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "61",
    "etag": "W/\"3d-hwSiLYyvmqZdSLorKHTuQGAX328\"",
    "date": "Tue, 27 May 2025 23:53:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 867.2 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/bca64d3b-6aaa-4e51-94ea-3bfc0e5256bc (740.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "61",
    "etag": "W/\"3d-hwSiLYyvmqZdSLorKHTuQGAX328\"",
    "date": "Tue, 27 May 2025 23:53:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 740.0 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/be6ae885-5e3a-486a-997c-0ef551ba9c26 (634.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "61",
    "etag": "W/\"3d-hwSiLYyvmqZdSLorKHTuQGAX328\"",
    "date": "Tue, 27 May 2025 23:53:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 634.3 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/b1b0c3ea-ae8b-4149-9ddb-390792739c0e (612.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "61",
    "etag": "W/\"3d-hwSiLYyvmqZdSLorKHTuQGAX328\"",
    "date": "Tue, 27 May 2025 23:53:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 612.2 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/conversations/24c533cc-8235-4573-a0aa-822c85ec8c69 (672.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "61",
    "etag": "W/\"3d-hwSiLYyvmqZdSLorKHTuQGAX328\"",
    "date": "Tue, 27 May 2025 23:53:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 672.5 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/conversations/0c9a7e48-36e0-48cd-981e-304030ca315c (681.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "61",
    "etag": "W/\"3d-hwSiLYyvmqZdSLorKHTuQGAX328\"",
    "date": "Tue, 27 May 2025 23:53:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 681.5 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/organizations/b2b71f62-b2a4-4efe-9f6f-59a3f48c4e69 (1492.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Tue, 27 May 2025 23:53:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1492.3 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/organizations/58d9cfb1-5a0a-4466-97d2-60a243d21dbb (1148.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5NDYsImV4cCI6MTc0ODM5MzU0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DfThfm6-6jO2MeeUExKbrnJ8bIsGgIbgdQCpjeusnT1yoaHPotsJfn4jEzC5M7jvD-H0ZT-o1cceoiQYZDUVJGvXX69IAGh6rC1_cQHIr9ZRXveJ6yCEWhOrgFWth0eVDUbiAtLjNbUWTGC3xVf-C5F0tVyZChLCipb1ybMlL_kV9NTCzF6MF-AYchVT-oGqlEhIOK52qLdZ2OcRAcr7pG9JWTOe_yVenhad90nFDIJ-KMOnzY61fqpxVTD5yy3jGh7ApVD16iKGAqNsY-Lkk7zbkTVBFIYauDO0KkibdG5Yj-UDyMUCA5JPxaPhjGTrXS-t0oGNIDyVE5KDBY2odg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Tue, 27 May 2025 23:53:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1148.0 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (373.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "daniellovazzano@gmail.com",
    "password": "PC.103638dl"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1600",
    "etag": "W/\"640-fVJgbb5E+4wFmBESIb4TTUPL14c\"",
    "date": "Tue, 27 May 2025 23:53:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "email": "daniellovazzano@gmail.com",
      "role": "admin",
      "isSuperAdmin": true
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5OTcsImV4cCI6MTc0ODM5MzU5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.U9t9ylTrnYrzdMk0GoWzy0tBWuqEZSYoL23k7ji8gVSe4uPharicLZP3MSb2Uyqz-74CSHoshcnPHCpPMKY9YrHLWVpWDHECYUmH0t0j3YL2MpgEb5Ju8W21WJouuLRYLm2q1wwgDG-oUwy2Q_tzrfhM8csME26SuhqID8Fc22Qnbkv40eMG3JOKhifwc-7fiuJiWlS6ZKRQMGJyWaqwIMBazy14rjxG7fHaF38mmdMFgM9FxPOFtdXTVHjnToQwnjmGFY4Nv5lPaJEzpyy-l6mQwMSQ7K7NXqZ5vdzKqNFGH0XmjKE7Y3mKirgH596JVGX8-ZXmf4EMYKf6HxOVZg",
      "refreshToken": "AMf-vBzJtXRUX13s9-4GwN4w6sXtwT5xc9qoNLjRCq3N1Urv6Adp-Q9MiXuQhnnHpHD2bRLXNiVFv9Zvpo8LdrwOvdT1XtUK2oY0ZK00ujQjFuFYb_WNcAmY9YT2q4d3w5EFlGTAwYI1lMO01tAi-teY_A_2CuXHSq5TKUy_qjl_mSnfo-Y_47nkfEZSGh2WRt1k-eUAi0iSDpoI7b3f-jXBl7SpLzIn_WtGSXUVcEiRxczjRzaTpHoidgWvjZPtyVrzm1liSS1V",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 373.6 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/fCbzCAyzMOUg6omEWdaaZHz5CRE3 (1422.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5OTcsImV4cCI6MTc0ODM5MzU5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.U9t9ylTrnYrzdMk0GoWzy0tBWuqEZSYoL23k7ji8gVSe4uPharicLZP3MSb2Uyqz-74CSHoshcnPHCpPMKY9YrHLWVpWDHECYUmH0t0j3YL2MpgEb5Ju8W21WJouuLRYLm2q1wwgDG-oUwy2Q_tzrfhM8csME26SuhqID8Fc22Qnbkv40eMG3JOKhifwc-7fiuJiWlS6ZKRQMGJyWaqwIMBazy14rjxG7fHaF38mmdMFgM9FxPOFtdXTVHjnToQwnjmGFY4Nv5lPaJEzpyy-l6mQwMSQ7K7NXqZ5vdzKqNFGH0XmjKE7Y3mKirgH596JVGX8-ZXmf4EMYKf6HxOVZg"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "59",
    "etag": "W/\"3b-jIRXR3lyfUlhNaDpPRV0JKmbxjw\"",
    "date": "Tue, 27 May 2025 23:53:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1422.4 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (314.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "daniellovazzano@gmail.com",
    "password": "PC.103638dl"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1600",
    "etag": "W/\"640-Fi0Wj9Tmq1e9AtIbtwYFnfoJcQ8\"",
    "date": "Tue, 27 May 2025 23:53:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "email": "daniellovazzano@gmail.com",
      "role": "admin",
      "isSuperAdmin": true
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5OTksImV4cCI6MTc0ODM5MzU5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VbxRJlwz2MJqA3nju3PE---SiiVK9YrTJ7tLtiJmoTgGi8ITvnUfkkXRCUdeADFq1TNkhyeFUB2yKqp7-IPV7oDujfTSQpNrZe3KuHPsBe4MI2JfXwwft91Q1fh14x2xDGcv9McUtjAbS-K7M_pfBOS1GOLU137J71fW37t8uQtZqCspnqmVLoEuB63TjdQOTm-qddXb2ftO3aeDPdk5P3Ovm6qW_qlj_JJdCsQe7-okcz7PSS_KllgHW9CQ2tVVc871KeLU-eIypCnsoNlUwja7XKPA9m0narNG6PUKuFnqkrHqqQdN3l9ibM_FpGYkgMHgERPuBLE9-Ghoa6YPRA",
      "refreshToken": "AMf-vByhQZZ3D--abfFfzj68cPRSpgy3oE7U8r0eHGeRyPu75_CLE08ruv-4DiZGIeXJ1buHnCZQMryNhAF9m4q06XYuAzafzppSGquaNlkTHeg8sFAZU4DA-dOAK0zCQoZ1KKeKTW8_xi-0po3iWmdQxroG6xtkHSnaqhJwyYtMFmofdB0locRMx8eR_yBNqkzD8NMs3EpPB2H1CqHhFnfK8i_BdhK0lU294SWoOODH9gxk2WnEicBsXbRFsYcmaaMvGdePoXAt",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 314.4 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/YBa7TBluPJTFUEK2alS8vDXLPbI3 (1422.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5OTksImV4cCI6MTc0ODM5MzU5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VbxRJlwz2MJqA3nju3PE---SiiVK9YrTJ7tLtiJmoTgGi8ITvnUfkkXRCUdeADFq1TNkhyeFUB2yKqp7-IPV7oDujfTSQpNrZe3KuHPsBe4MI2JfXwwft91Q1fh14x2xDGcv9McUtjAbS-K7M_pfBOS1GOLU137J71fW37t8uQtZqCspnqmVLoEuB63TjdQOTm-qddXb2ftO3aeDPdk5P3Ovm6qW_qlj_JJdCsQe7-okcz7PSS_KllgHW9CQ2tVVc871KeLU-eIypCnsoNlUwja7XKPA9m0narNG6PUKuFnqkrHqqQdN3l9ibM_FpGYkgMHgERPuBLE9-Ghoa6YPRA"
  }
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "59",
    "etag": "W/\"3b-jIRXR3lyfUlhNaDpPRV0JKmbxjw\"",
    "date": "Tue, 27 May 2025 23:53:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1422.6 ms  

</details>


---



---

## Legacy Format (Payloads & Responses)

### Payloads Sent


### Curl Commands


### API Responses


---

## Status & Observations



**Observations:**
- Total messages created: 6
- Total conversations created: 6
- Total organizations created: 2
- Total test users created: 2
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
