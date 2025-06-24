# E2E Test Report: messages-tests

**Date:** 6/13/2025  
**Time:** 3:37:55 PM  
**Duration:** 77.27s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation | PASSED | 1.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content | PASSED | 1.56s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID | PASSED | 0.63s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation | PASSED | 0.80s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant | PASSED | 0.66s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant | PASSED | 2.79s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation | PASSED | 0.92s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format | PASSED | 0.64s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) | PASSED | 0.76s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender | PASSED | 0.66s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) | PASSED | 1.83s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) | PASSED | 2.26s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user | PASSED | 10.02s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) | PASSED | 0.87s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user | PASSED | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) | PASSED | 8.95s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user | PASSED | 8.02s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization | PASSED | 2.19s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization | PASSED | 1.57s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization | PASSED | 0.85s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations | PASSED | 0.53s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID | PASSED | 0.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.53s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content | PASSED | 0.97s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID | PASSED | 0.58s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID |


---

## Detailed Execution Log

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation
**Status:** ✅ PASSED  
**Duration:** 1.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1582.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Hello, this is a test message!",
    "conversationId": "2f184919-4835-4265-bb85-048d218964ef"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "598",
    "etag": "W/\"256-j+WhXt/Bx0twYNgvp1ZKPbOvYLQ\"",
    "date": "Fri, 13 Jun 2025 13:36:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-13T13:36:55.490Z",
      "updatedAt": "2025-06-13T13:36:55.893Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1582.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content
**Status:** ✅ PASSED  
**Duration:** 1.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1561.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "conversationId": "2f184919-4835-4265-bb85-048d218964ef"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "183",
    "etag": "W/\"b7-Ei1u3a6nlCGodfTslkhHGjb4mhg\"",
    "date": "Fri, 13 Jun 2025 13:36:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Message validation error: {{error}}",
    "details": {
      "error": "Message must have content or attachments"
    },
    "messageKey": "messages.validation_error",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1561.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (620.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Message without conversation"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "133",
    "etag": "W/\"85-cTFdXS4onzClqPM7FkggpcHLwso\"",
    "date": "Fri, 13 Jun 2025 13:36:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Conversation ID is required",
    "details": {},
    "messageKey": "messages.conversation_id_required",
    "language": "en"
  }
}
```

**⏱️ Duration:** 620.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation
**Status:** ✅ PASSED  
**Duration:** 0.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (795.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTgwNCwidXNlcl9pZCI6IklLUUxzZlRqaXZZaEhibmxWcERoalJnQ20zMzMiLCJzdWIiOiJJS1FMc2ZUaml2WWhIYm5sVnBEaGpSZ0NtMzMzIiwiaWF0IjoxNzQ5ODIxODA0LCJleHAiOjE3NDk4MjU0MDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODIxODAyOTIzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyMTgwMjkyM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LwBjb4HOSXn5uj-4HSmzHFrJDpe65ngYVG9y4mlB6nShpA9w6XHlHIVYXKtau6m-As2DrARKq-SyJPzrHkoblkpeK874vIqh9lH02xAGCW2DSWF0fJIDfp_LinIGEPxBS_1lbnL3Ai6Byzy6TCFERyUvkNpoqzGrS6COaxkgdGpCRF-x0uLkfYFd67d7mJBdlDq6Y-f5WQurkun2c11NLlGrW007HNRhl9uFBF826Db_AFmMtcJrUztClZhFRfctEDgIGMWmw4aUV4koDcvEsNojKUHHeqmBP9xRsiLrz5NoPqclB6THjB9EJe9KA6FctuJstspfs-YCPTYfwBVi2g",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Group message test",
    "conversationId": "b2d7e776-0020-443b-8fa5-3abdeae5743c"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "586",
    "etag": "W/\"24a-w9uGZ5H/TuTzQXxcCGvSJWa8lnE\"",
    "date": "Fri, 13 Jun 2025 13:36:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "3050d0e2-c55c-4899-8578-b19e3a273ab4",
      "conversationId": "b2d7e776-0020-443b-8fa5-3abdeae5743c",
      "senderId": "IKQLsfTjivYhHbnlVpDhjRgCm333",
      "content": "Group message test",
      "status": "sent",
      "timestamp": "2025-06-13T13:36:59.022Z",
      "updatedAt": "2025-06-13T13:36:59.023Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 795.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/c4dfc012-b059-4672-8640-b8caba410ebb (660.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "531",
    "etag": "W/\"213-eb3KcXZC0h6ylhUcpFBdW3HYp0Q\"",
    "date": "Fri, 13 Jun 2025 13:36:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-13T13:36:55.490Z",
      "updatedAt": "2025-06-13T13:36:55.893Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 660.2 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 2.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (944.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IKQLsfTjivYhHbnlVpDhjRgCm333"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "450",
    "etag": "W/\"1c2-4RHmhjXS7sucliXQpo8qfOwsNi4\"",
    "date": "Fri, 13 Jun 2025 13:37:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T13:37:00.317Z",
      "lastMessageAt": "2025-06-13T13:37:00.317Z",
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IKQLsfTjivYhHbnlVpDhjRgCm333"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 944.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (985.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Private message",
    "conversationId": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "583",
    "etag": "W/\"247-SUrDcHkq1cObIKyMXxoGWAyhP48\"",
    "date": "Fri, 13 Jun 2025 13:37:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "aa52e5c3-7493-465b-8ae7-fb66d27c00c9",
      "conversationId": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-13T13:37:01.617Z",
      "updatedAt": "2025-06-13T13:37:01.618Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 985.7 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/messages/aa52e5c3-7493-465b-8ae7-fb66d27c00c9 (857.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTgwNiwidXNlcl9pZCI6IlJyMW1ZQXh4RkZmaXFqOXA0R1pFTjBXdHd5UDIiLCJzdWIiOiJScjFtWUF4eEZGZmlxajlwNEdaRU4wV3R3eVAyIiwiaWF0IjoxNzQ5ODIxODA2LCJleHAiOjE3NDk4MjU0MDYsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDk4MjE4MDQ2NDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDk4MjE4MDQ2NDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.kq3_cV7iyEEJwPjFA6Qnkt5NcldyoICvEYigfFX9qnssIehq_n73G29DPjjES9GB0vgY-tXr4WkpIUvL9cgFvAxhU_NDHx6vyB3GFg0VJELuu8G4qccA-0sZfvvMFeHgtFGZq5cC6KsFW2Eeop-i-ZPgnz6mAbHi0Ho4tIqgDY6QS5LlrsJA3XEhDTLPP-pQmU-t5KlH7bz3iZq6c5fEsNPr8clOtO5vzNmAJp8vj_wxk_-km73kFvvYVLXSDkNZMqLOXW1AJ7NT6FL0B7AIKtrh5mI52JQ-O4-8sYJJ-0qfgHyX6ThcalKFcSpwbnOnBzHREdXMt6bmBCcnSNGIIA",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "161",
    "etag": "W/\"a1-u6PqDgxFV4EBtTJmzo6uzP+KJjg\"",
    "date": "Fri, 13 Jun 2025 13:37:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Forbidden: You must be a participant to view this message",
    "details": {},
    "messageKey": "messages.forbidden_view_message",
    "language": "en"
  }
}
```

**⏱️ Duration:** 857.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/2f184919-4835-4265-bb85-048d218964ef/messages (917.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "533",
    "etag": "W/\"215-S4klP+eZGIDTMEhELaJkYr3YHPM\"",
    "date": "Fri, 13 Jun 2025 13:37:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-13T13:36:55.490Z",
        "updatedAt": "2025-06-13T13:36:55.893Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 917.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/invalid-id (637.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "124",
    "etag": "W/\"7c-IKrz1NUOOSOjMa4gy+qXKiwQ8mw\"",
    "date": "Fri, 13 Jun 2025 13:37:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Invalid message ID format",
    "details": {},
    "messageKey": "messages.invalid_id_format",
    "language": "en"
  }
}
```

**⏱️ Duration:** 637.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender)
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/c4dfc012-b059-4672-8640-b8caba410ebb (752.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Updated message content"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "585",
    "etag": "W/\"249-/vkdZ2OSJdWussQg3zzBthyPsIs\"",
    "date": "Fri, 13 Jun 2025 13:37:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.updated",
    "data": {
      "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-13T13:36:55.490Z",
      "updatedAt": "2025-06-13T13:37:04.817Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.updated",
    "language": "en"
  }
}
```

**⏱️ Duration:** 752.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/c4dfc012-b059-4672-8640-b8caba410ebb (650.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTgwNCwidXNlcl9pZCI6IklLUUxzZlRqaXZZaEhibmxWcERoalJnQ20zMzMiLCJzdWIiOiJJS1FMc2ZUaml2WWhIYm5sVnBEaGpSZ0NtMzMzIiwiaWF0IjoxNzQ5ODIxODA0LCJleHAiOjE3NDk4MjU0MDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODIxODAyOTIzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyMTgwMjkyM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LwBjb4HOSXn5uj-4HSmzHFrJDpe65ngYVG9y4mlB6nShpA9w6XHlHIVYXKtau6m-As2DrARKq-SyJPzrHkoblkpeK874vIqh9lH02xAGCW2DSWF0fJIDfp_LinIGEPxBS_1lbnL3Ai6Byzy6TCFERyUvkNpoqzGrS6COaxkgdGpCRF-x0uLkfYFd67d7mJBdlDq6Y-f5WQurkun2c11NLlGrW007HNRhl9uFBF826Db_AFmMtcJrUztClZhFRfctEDgIGMWmw4aUV4koDcvEsNojKUHHeqmBP9xRsiLrz5NoPqclB6THjB9EJe9KA6FctuJstspfs-YCPTYfwBVi2g",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Trying to update someone else message"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "145",
    "etag": "W/\"91-VILz2qZnximMzH6JBlKDW3ow3KM\"",
    "date": "Fri, 13 Jun 2025 13:37:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "messages.forbidden_update_not_sender",
    "details": {},
    "messageKey": "messages.forbidden_update_not_sender",
    "language": "en"
  }
}
```

**⏱️ Duration:** 650.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender)
**Status:** ✅ PASSED  
**Duration:** 1.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (944.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Message to be soft deleted",
    "conversationId": "2f184919-4835-4265-bb85-048d218964ef"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "594",
    "etag": "W/\"252-C/vE0thuZviv/03G+V98qGxY0jE\"",
    "date": "Fri, 13 Jun 2025 13:37:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "1d05a0db-0ed2-4f19-8fe3-f70e4154bf07",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be soft deleted",
      "status": "sent",
      "timestamp": "2025-06-13T13:37:06.419Z",
      "updatedAt": "2025-06-13T13:37:06.420Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 944.7 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/1d05a0db-0ed2-4f19-8fe3-f70e4154bf07/soft-delete (874.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {}
}
```

**📥 Response:**
```json
{
  "status": 200,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "640",
    "etag": "W/\"280-UutTF2dQSHGkcCSYyg7IRxroCjQ\"",
    "date": "Fri, 13 Jun 2025 13:37:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.soft_deleted",
    "data": {
      "id": "1d05a0db-0ed2-4f19-8fe3-f70e4154bf07",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "[Message deleted]",
      "status": "deleted",
      "timestamp": "2025-06-13T13:37:06.419Z",
      "updatedAt": "2025-06-13T13:37:07.301Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": "2025-06-13T13:37:07.300Z",
      "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.soft_deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 874.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin)
**Status:** ✅ PASSED  
**Duration:** 2.26s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (977.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Message to be deleted",
    "conversationId": "2f184919-4835-4265-bb85-048d218964ef"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "589",
    "etag": "W/\"24d-RffHQfI68oxwmwHToRb/sYtlnx0\"",
    "date": "Fri, 13 Jun 2025 13:37:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "15b814e5-4be2-49f2-abad-ce983e119ceb",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be deleted",
      "status": "sent",
      "timestamp": "2025-06-13T13:37:08.299Z",
      "updatedAt": "2025-06-13T13:37:08.300Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 977.0 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/15b814e5-4be2-49f2-abad-ce983e119ceb (1276.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "157",
    "etag": "W/\"9d-aPt86IevpEf2MWR3W6HfrGOqXnc\"",
    "date": "Fri, 13 Jun 2025 13:37:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted",
    "data": {
      "success": true,
      "message": "Message deleted successfully"
    },
    "messageKey": "messages.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1276.4 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user
**Status:** ✅ PASSED  
**Duration:** 10.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/messages/c4dfc012-b059-4672-8640-b8caba410ebb (10012.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTgwNCwidXNlcl9pZCI6IklLUUxzZlRqaXZZaEhibmxWcERoalJnQ20zMzMiLCJzdWIiOiJJS1FMc2ZUaml2WWhIYm5sVnBEaGpSZ0NtMzMzIiwiaWF0IjoxNzQ5ODIxODA0LCJleHAiOjE3NDk4MjU0MDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODIxODAyOTIzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyMTgwMjkyM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LwBjb4HOSXn5uj-4HSmzHFrJDpe65ngYVG9y4mlB6nShpA9w6XHlHIVYXKtau6m-As2DrARKq-SyJPzrHkoblkpeK874vIqh9lH02xAGCW2DSWF0fJIDfp_LinIGEPxBS_1lbnL3Ai6Byzy6TCFERyUvkNpoqzGrS6COaxkgdGpCRF-x0uLkfYFd67d7mJBdlDq6Y-f5WQurkun2c11NLlGrW007HNRhl9uFBF826Db_AFmMtcJrUztClZhFRfctEDgIGMWmw4aUV4koDcvEsNojKUHHeqmBP9xRsiLrz5NoPqclB6THjB9EJe9KA6FctuJstspfs-YCPTYfwBVi2g",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10012.0 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin)
**Status:** ✅ PASSED  
**Duration:** 0.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (865.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "16585",
    "etag": "W/\"40c9-knC7LurU6xlX2nEDT2Jr+edm8mA\"",
    "date": "Fri, 13 Jun 2025 13:37:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "1d05a0db-0ed2-4f19-8fe3-f70e4154bf07",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-13T13:37:06.419Z",
        "updatedAt": "2025-06-13T13:37:07.301Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": "2025-06-13T13:37:07.300Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "aa52e5c3-7493-465b-8ae7-fb66d27c00c9",
        "conversationId": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:01.617Z",
        "updatedAt": "2025-06-13T13:37:01.618Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3050d0e2-c55c-4899-8578-b19e3a273ab4",
        "conversationId": "b2d7e776-0020-443b-8fa5-3abdeae5743c",
        "senderId": "IKQLsfTjivYhHbnlVpDhjRgCm333",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-13T13:36:59.022Z",
        "updatedAt": "2025-06-13T13:36:59.023Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-13T13:36:55.490Z",
        "updatedAt": "2025-06-13T13:37:04.817Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "54a35aa0-91c7-43d2-957d-621b1178e159",
        "conversationId": "d889b0d0-43e8-4c5b-a35f-66e5d2ac996f",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:43:27.797Z",
        "updatedAt": "2025-06-05T23:43:27.798Z",
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "6822453d-d6b3-4f77-a2ce-7c9ec3c29b7d",
        "conversationId": "4b9c6acb-8235-43c9-bd08-5e8e830477dc",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:49.562Z",
        "updatedAt": "2025-06-05T23:42:49.563Z",
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1ffd5551-19d1-480d-9021-517e12d3587f",
        "conversationId": "fba2bb52-5574-4953-8b1b-adb26c71b303",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:33:32.735Z",
        "updatedAt": "2025-06-05T23:33:32.736Z",
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "35054c06-7f19-4acc-b49d-5ee06e23d375",
        "conversationId": "b00312ac-d9d8-42fd-8375-7eb1b929ac79",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:58.470Z",
        "updatedAt": "2025-06-05T23:32:58.506Z",
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3e8be7da-b5fc-456c-9ba6-f3bd499eb0f0",
        "conversationId": "7dc52d94-30f1-4766-9d7d-4260af277088",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:29:47.597Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "459cae62-c30c-4827-9226-32f6ecada15d",
        "conversationId": "d1a84119-0bda-47dd-94ec-523188c1650b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:50.813Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "514e5096-6620-460b-9cac-fddd26cd75a2",
        "conversationId": "83a29823-e389-4c1e-ab9b-df6d6c68b1d8",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:20:08.424Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "a3c500bb-0775-43a2-a7f9-c92726f52873",
        "conversationId": "99289191-9070-4c6b-84b6-bea08cfcbd76",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:19:51.272Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "400840a0-e8ed-4f91-898f-a08ceb0dcebb",
        "conversationId": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:19.036Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "871ec27d-cac7-442a-a44c-f1b60cd72f29",
        "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:00.547Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "4f1210d0-7f14-4056-9c82-a6a74c455240",
        "conversationId": "e29a97c9-c31f-4a3c-b61e-798f3f681295",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:37.228Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "8aaf1837-8a36-4f15-a60a-1342e9e27627",
        "conversationId": "a84192fb-3f5e-4b46-9135-5098ffef237b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:19.758Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "790715d0-a925-4fa9-bfab-ca6393fdcab4",
        "conversationId": "d516b485-3c7f-494a-945c-e3f85ddd53c9",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:09:24.381Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "a27ccbd7-07fb-4aaf-8f6a-489e025ce2b2",
        "conversationId": "80f3bcf1-fbfe-4f1f-9162-5a6f7abfc221",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:08:46.289Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "d3b535bf-ed28-47e1-9a3e-16afc67cc6e1",
        "conversationId": "92f8ed4e-808c-49b2-8ea4-4ba14c7efcbd",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:06:21.671Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "4535ee0a-77a2-4558-b2b3-81d112ecb94a",
        "conversationId": "76d58415-d63b-4fcf-bd32-42130a49398f",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:05:44.207Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "f6427065-9e98-47b5-8d94-d652d78ca019",
        "conversationId": "92164c66-e43a-49c6-b0b1-e0ceb9fc1352",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:03:04.204Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1995e675-f223-4992-95c9-16ade869a436",
        "conversationId": "58d6799b-ca5e-4218-a290-6659219e914c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:02:27.067Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "0e3e2209-2b1e-4061-b95d-aeb07bfc518e",
        "conversationId": "ea495392-ea99-4018-b9ba-ca3d4b3707be",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:44.895Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5c16c996-21da-42e0-96f3-8cdd401cd290",
        "conversationId": "62cc1341-dfa8-4983-bdfe-5127675a2b92",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:07.778Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "e9cc8259-a8e4-401f-973a-1b69cc247110",
        "conversationId": "295295ca-3389-4d46-9d03-956bf9813290",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:56.273Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "205b4aed-89b0-4677-bbcd-6d13f16f7ede",
        "conversationId": "95ba2c6d-9d16-4224-9121-11fc29734643",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:50.071Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "ee74669b-46c2-47fd-9bf1-08ec55f65624",
        "conversationId": "6b4f958e-7afb-45d1-8362-4f5513cfb523",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:58.349Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "478e4dd0-3973-47c9-8e5b-e58f43c9d0b4",
        "conversationId": "64ae22b0-c8da-4f7a-8d9b-09e3b0ac117a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:48.619Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3d3b0a6b-281e-4206-91d1-5d4cf7f555e3",
        "conversationId": "74313b7b-1863-40f5-897c-8fca476eea3b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:42.513Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "e24a2042-b92d-4fe0-8621-5c4d7ad99e6d",
        "conversationId": "252b767c-613c-4d3c-9fda-72e12b088edf",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:32.395Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "58d2b4d8-227a-4ce7-bcef-bff434565684",
        "conversationId": "e16dafcb-209d-4162-aa4e-a2581659796b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:11.774Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "4f2a13c4-7655-4296-bddb-8cd329edd09c",
        "conversationId": "0d0101f2-e084-4eff-8edd-295b0af96ed1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:01.363Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "23fdae15-8ebb-43dc-bb97-086e8ba0abda",
        "conversationId": "22eabbe1-e7f4-4893-a86f-3fcacf4dfb11",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:37.577Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "ab2a798f-8af7-4e0c-af56-58c4a905d60a",
        "conversationId": "bf9869ad-09ab-47b9-a550-6a450c274b4a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:28.161Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5e84cbe1-d178-4d78-a6eb-028c33d6869f",
        "conversationId": "db03df51-e9c9-4bb9-b380-2771510df593",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:09:09.001Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "0c7d4d6b-fe48-4d6c-b21c-b558932fa8a0",
        "conversationId": "2d7348ab-d8f9-4f3b-bb23-182193d44c1d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:08:59.897Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "33bc3b71-16fc-4e55-9517-9901c1a87a4c",
        "conversationId": "f57108c9-f4c5-4f78-b3f8-674cb115eff0",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:45.488Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "2a9feb56-e3ec-4be9-b61d-70484aac681b",
        "conversationId": "845a3438-fb2e-4471-b14e-088751dcc449",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:37.810Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 865.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (585.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTgwNCwidXNlcl9pZCI6IklLUUxzZlRqaXZZaEhibmxWcERoalJnQ20zMzMiLCJzdWIiOiJJS1FMc2ZUaml2WWhIYm5sVnBEaGpSZ0NtMzMzIiwiaWF0IjoxNzQ5ODIxODA0LCJleHAiOjE3NDk4MjU0MDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODIxODAyOTIzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyMTgwMjkyM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LwBjb4HOSXn5uj-4HSmzHFrJDpe65ngYVG9y4mlB6nShpA9w6XHlHIVYXKtau6m-As2DrARKq-SyJPzrHkoblkpeK874vIqh9lH02xAGCW2DSWF0fJIDfp_LinIGEPxBS_1lbnL3Ai6Byzy6TCFERyUvkNpoqzGrS6COaxkgdGpCRF-x0uLkfYFd67d7mJBdlDq6Y-f5WQurkun2c11NLlGrW007HNRhl9uFBF826Db_AFmMtcJrUztClZhFRfctEDgIGMWmw4aUV4koDcvEsNojKUHHeqmBP9xRsiLrz5NoPqclB6THjB9EJe9KA6FctuJstspfs-YCPTYfwBVi2g",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "2013",
    "etag": "W/\"7dd-rJLlNzC/F5AxQKE7W12BmD8RfoA\"",
    "date": "Fri, 13 Jun 2025 13:37:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "1d05a0db-0ed2-4f19-8fe3-f70e4154bf07",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-13T13:37:06.419Z",
        "updatedAt": "2025-06-13T13:37:07.301Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": "2025-06-13T13:37:07.300Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "aa52e5c3-7493-465b-8ae7-fb66d27c00c9",
        "conversationId": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:01.617Z",
        "updatedAt": "2025-06-13T13:37:01.618Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3050d0e2-c55c-4899-8578-b19e3a273ab4",
        "conversationId": "b2d7e776-0020-443b-8fa5-3abdeae5743c",
        "senderId": "IKQLsfTjivYhHbnlVpDhjRgCm333",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-13T13:36:59.022Z",
        "updatedAt": "2025-06-13T13:36:59.023Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-13T13:36:55.490Z",
        "updatedAt": "2025-06-13T13:37:04.817Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 585.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator)
**Status:** ✅ PASSED  
**Duration:** 8.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (931.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Message that needs moderation",
    "conversationId": "2f184919-4835-4265-bb85-048d218964ef"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "597",
    "etag": "W/\"255-mrrfrVNZKDQk/cvY4+mX2Yxy1AI\"",
    "date": "Fri, 13 Jun 2025 13:37:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "160c3f56-2688-4c28-993b-061dab1b7259",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that needs moderation",
      "status": "sent",
      "timestamp": "2025-06-13T13:37:21.999Z",
      "updatedAt": "2025-06-13T13:37:22.000Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 931.7 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/160c3f56-2688-4c28-993b-061dab1b7259/moderate (8009.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTgwNiwidXNlcl9pZCI6IlJyMW1ZQXh4RkZmaXFqOXA0R1pFTjBXdHd5UDIiLCJzdWIiOiJScjFtWUF4eEZGZmlxajlwNEdaRU4wV3R3eVAyIiwiaWF0IjoxNzQ5ODIxODA2LCJleHAiOjE3NDk4MjU0MDYsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDk4MjE4MDQ2NDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDk4MjE4MDQ2NDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.kq3_cV7iyEEJwPjFA6Qnkt5NcldyoICvEYigfFX9qnssIehq_n73G29DPjjES9GB0vgY-tXr4WkpIUvL9cgFvAxhU_NDHx6vyB3GFg0VJELuu8G4qccA-0sZfvvMFeHgtFGZq5cC6KsFW2Eeop-i-ZPgnz6mAbHi0Ho4tIqgDY6QS5LlrsJA3XEhDTLPP-pQmU-t5KlH7bz3iZq6c5fEsNPr8clOtO5vzNmAJp8vj_wxk_-km73kFvvYVLXSDkNZMqLOXW1AJ7NT6FL0B7AIKtrh5mI52JQ-O4-8sYJJ-0qfgHyX6ThcalKFcSpwbnOnBzHREdXMt6bmBCcnSNGIIA",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "action": "flag",
    "reason": "Inappropriate content"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 8009.2 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user
**Status:** ✅ PASSED  
**Duration:** 8.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/c4dfc012-b059-4672-8640-b8caba410ebb/moderate (8016.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTgwNCwidXNlcl9pZCI6IklLUUxzZlRqaXZZaEhibmxWcERoalJnQ20zMzMiLCJzdWIiOiJJS1FMc2ZUaml2WWhIYm5sVnBEaGpSZ0NtMzMzIiwiaWF0IjoxNzQ5ODIxODA0LCJleHAiOjE3NDk4MjU0MDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODIxODAyOTIzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyMTgwMjkyM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LwBjb4HOSXn5uj-4HSmzHFrJDpe65ngYVG9y4mlB6nShpA9w6XHlHIVYXKtau6m-As2DrARKq-SyJPzrHkoblkpeK874vIqh9lH02xAGCW2DSWF0fJIDfp_LinIGEPxBS_1lbnL3Ai6Byzy6TCFERyUvkNpoqzGrS6COaxkgdGpCRF-x0uLkfYFd67d7mJBdlDq6Y-f5WQurkun2c11NLlGrW007HNRhl9uFBF826Db_AFmMtcJrUztClZhFRfctEDgIGMWmw4aUV4koDcvEsNojKUHHeqmBP9xRsiLrz5NoPqclB6THjB9EJe9KA6FctuJstspfs-YCPTYfwBVi2g",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "action": "flag",
    "reason": "Test reason"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 8016.8 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.19s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1250.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "6969cb68-43c2-48cc-a519-ec220cf09794"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IKQLsfTjivYhHbnlVpDhjRgCm333"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "447",
    "etag": "W/\"1bf-GIFoOnK6vem41ctxo6915lUUiD0\"",
    "date": "Fri, 13 Jun 2025 13:37:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "6cddbda1-7fc7-439e-ad53-78347528033d",
      "title": "Org2 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T13:37:38.936Z",
      "lastMessageAt": "2025-06-13T13:37:38.936Z",
      "organizationId": "6969cb68-43c2-48cc-a519-ec220cf09794",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IKQLsfTjivYhHbnlVpDhjRgCm333"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1250.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (939.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "6969cb68-43c2-48cc-a519-ec220cf09794"
  },
  "data": {
    "content": "Message in organization 2",
    "conversationId": "6cddbda1-7fc7-439e-ad53-78347528033d"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "593",
    "etag": "W/\"251-T2UYy6BLcyuAV6hjkwVmcGz7/Us\"",
    "date": "Fri, 13 Jun 2025 13:37:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "c3fa7d29-d18e-4469-800f-ab4ab4fca1fb",
      "conversationId": "6cddbda1-7fc7-439e-ad53-78347528033d",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-13T13:37:40.201Z",
      "updatedAt": "2025-06-13T13:37:40.202Z",
      "attachments": null,
      "location": null,
      "organizationId": "6969cb68-43c2-48cc-a519-ec220cf09794",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 939.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization
**Status:** ✅ PASSED  
**Duration:** 1.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (911.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Org1 only message",
    "conversationId": "2f184919-4835-4265-bb85-048d218964ef"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "585",
    "etag": "W/\"249-zPWerxuEJVEpEMsyLdxcl29we8Y\"",
    "date": "Fri, 13 Jun 2025 13:37:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "0fc17495-c719-40d8-8d67-24eb6d7ba601",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-13T13:37:41.173Z",
      "updatedAt": "2025-06-13T13:37:41.174Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 911.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/0fc17495-c719-40d8-8d67-24eb6d7ba601 (650.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "6969cb68-43c2-48cc-a519-ec220cf09794"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "518",
    "etag": "W/\"206-IYN7cr5SVECUIRjhGlidauI7Gic\"",
    "date": "Fri, 13 Jun 2025 13:37:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "0fc17495-c719-40d8-8d67-24eb6d7ba601",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-13T13:37:41.173Z",
      "updatedAt": "2025-06-13T13:37:41.174Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 650.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/2f184919-4835-4265-bb85-048d218964ef/messages (841.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "2026",
    "etag": "W/\"7ea-j6nJZHA21l26l/nt3eCdz2OVWAI\"",
    "date": "Fri, 13 Jun 2025 13:37:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-13T13:36:55.490Z",
        "updatedAt": "2025-06-13T13:37:04.817Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1d05a0db-0ed2-4f19-8fe3-f70e4154bf07",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-13T13:37:06.419Z",
        "updatedAt": "2025-06-13T13:37:07.301Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": "2025-06-13T13:37:07.300Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "160c3f56-2688-4c28-993b-061dab1b7259",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:21.999Z",
        "updatedAt": "2025-06-13T13:37:22.000Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "0fc17495-c719-40d8-8d67-24eb6d7ba601",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:41.173Z",
        "updatedAt": "2025-06-13T13:37:41.174Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 841.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (529.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "18042",
    "etag": "W/\"467a-sybF+nP/md8dQZJo1Hu34taUCrY\"",
    "date": "Fri, 13 Jun 2025 13:37:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "0fc17495-c719-40d8-8d67-24eb6d7ba601",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:41.173Z",
        "updatedAt": "2025-06-13T13:37:41.174Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "c3fa7d29-d18e-4469-800f-ab4ab4fca1fb",
        "conversationId": "6cddbda1-7fc7-439e-ad53-78347528033d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:40.201Z",
        "updatedAt": "2025-06-13T13:37:40.202Z",
        "attachments": null,
        "location": null,
        "organizationId": "6969cb68-43c2-48cc-a519-ec220cf09794",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "160c3f56-2688-4c28-993b-061dab1b7259",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:21.999Z",
        "updatedAt": "2025-06-13T13:37:22.000Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1d05a0db-0ed2-4f19-8fe3-f70e4154bf07",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-13T13:37:06.419Z",
        "updatedAt": "2025-06-13T13:37:07.301Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": "2025-06-13T13:37:07.300Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "aa52e5c3-7493-465b-8ae7-fb66d27c00c9",
        "conversationId": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:01.617Z",
        "updatedAt": "2025-06-13T13:37:01.618Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3050d0e2-c55c-4899-8578-b19e3a273ab4",
        "conversationId": "b2d7e776-0020-443b-8fa5-3abdeae5743c",
        "senderId": "IKQLsfTjivYhHbnlVpDhjRgCm333",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-13T13:36:59.022Z",
        "updatedAt": "2025-06-13T13:36:59.023Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
        "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-13T13:36:55.490Z",
        "updatedAt": "2025-06-13T13:37:04.817Z",
        "attachments": null,
        "location": null,
        "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "54a35aa0-91c7-43d2-957d-621b1178e159",
        "conversationId": "d889b0d0-43e8-4c5b-a35f-66e5d2ac996f",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:43:27.797Z",
        "updatedAt": "2025-06-05T23:43:27.798Z",
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "6822453d-d6b3-4f77-a2ce-7c9ec3c29b7d",
        "conversationId": "4b9c6acb-8235-43c9-bd08-5e8e830477dc",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:49.562Z",
        "updatedAt": "2025-06-05T23:42:49.563Z",
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1ffd5551-19d1-480d-9021-517e12d3587f",
        "conversationId": "fba2bb52-5574-4953-8b1b-adb26c71b303",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:33:32.735Z",
        "updatedAt": "2025-06-05T23:33:32.736Z",
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "35054c06-7f19-4acc-b49d-5ee06e23d375",
        "conversationId": "b00312ac-d9d8-42fd-8375-7eb1b929ac79",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:58.470Z",
        "updatedAt": "2025-06-05T23:32:58.506Z",
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3e8be7da-b5fc-456c-9ba6-f3bd499eb0f0",
        "conversationId": "7dc52d94-30f1-4766-9d7d-4260af277088",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:29:47.597Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "459cae62-c30c-4827-9226-32f6ecada15d",
        "conversationId": "d1a84119-0bda-47dd-94ec-523188c1650b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:50.813Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "514e5096-6620-460b-9cac-fddd26cd75a2",
        "conversationId": "83a29823-e389-4c1e-ab9b-df6d6c68b1d8",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:20:08.424Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "a3c500bb-0775-43a2-a7f9-c92726f52873",
        "conversationId": "99289191-9070-4c6b-84b6-bea08cfcbd76",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:19:51.272Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "400840a0-e8ed-4f91-898f-a08ceb0dcebb",
        "conversationId": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:19.036Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "871ec27d-cac7-442a-a44c-f1b60cd72f29",
        "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:00.547Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "4f1210d0-7f14-4056-9c82-a6a74c455240",
        "conversationId": "e29a97c9-c31f-4a3c-b61e-798f3f681295",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:37.228Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "8aaf1837-8a36-4f15-a60a-1342e9e27627",
        "conversationId": "a84192fb-3f5e-4b46-9135-5098ffef237b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:19.758Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "790715d0-a925-4fa9-bfab-ca6393fdcab4",
        "conversationId": "d516b485-3c7f-494a-945c-e3f85ddd53c9",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:09:24.381Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "a27ccbd7-07fb-4aaf-8f6a-489e025ce2b2",
        "conversationId": "80f3bcf1-fbfe-4f1f-9162-5a6f7abfc221",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:08:46.289Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "d3b535bf-ed28-47e1-9a3e-16afc67cc6e1",
        "conversationId": "92f8ed4e-808c-49b2-8ea4-4ba14c7efcbd",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:06:21.671Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "4535ee0a-77a2-4558-b2b3-81d112ecb94a",
        "conversationId": "76d58415-d63b-4fcf-bd32-42130a49398f",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:05:44.207Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "f6427065-9e98-47b5-8d94-d652d78ca019",
        "conversationId": "92164c66-e43a-49c6-b0b1-e0ceb9fc1352",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:03:04.204Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1995e675-f223-4992-95c9-16ade869a436",
        "conversationId": "58d6799b-ca5e-4218-a290-6659219e914c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:02:27.067Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "0e3e2209-2b1e-4061-b95d-aeb07bfc518e",
        "conversationId": "ea495392-ea99-4018-b9ba-ca3d4b3707be",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:44.895Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5c16c996-21da-42e0-96f3-8cdd401cd290",
        "conversationId": "62cc1341-dfa8-4983-bdfe-5127675a2b92",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:07.778Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "e9cc8259-a8e4-401f-973a-1b69cc247110",
        "conversationId": "295295ca-3389-4d46-9d03-956bf9813290",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:56.273Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "205b4aed-89b0-4677-bbcd-6d13f16f7ede",
        "conversationId": "95ba2c6d-9d16-4224-9121-11fc29734643",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:50.071Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "ee74669b-46c2-47fd-9bf1-08ec55f65624",
        "conversationId": "6b4f958e-7afb-45d1-8362-4f5513cfb523",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:58.349Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "478e4dd0-3973-47c9-8e5b-e58f43c9d0b4",
        "conversationId": "64ae22b0-c8da-4f7a-8d9b-09e3b0ac117a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:48.619Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3d3b0a6b-281e-4206-91d1-5d4cf7f555e3",
        "conversationId": "74313b7b-1863-40f5-897c-8fca476eea3b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:42.513Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "e24a2042-b92d-4fe0-8621-5c4d7ad99e6d",
        "conversationId": "252b767c-613c-4d3c-9fda-72e12b088edf",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:32.395Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "58d2b4d8-227a-4ce7-bcef-bff434565684",
        "conversationId": "e16dafcb-209d-4162-aa4e-a2581659796b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:11.774Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "4f2a13c4-7655-4296-bddb-8cd329edd09c",
        "conversationId": "0d0101f2-e084-4eff-8edd-295b0af96ed1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:01.363Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "23fdae15-8ebb-43dc-bb97-086e8ba0abda",
        "conversationId": "22eabbe1-e7f4-4893-a86f-3fcacf4dfb11",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:37.577Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "ab2a798f-8af7-4e0c-af56-58c4a905d60a",
        "conversationId": "bf9869ad-09ab-47b9-a550-6a450c274b4a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:28.161Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5e84cbe1-d178-4d78-a6eb-028c33d6869f",
        "conversationId": "db03df51-e9c9-4bb9-b380-2771510df593",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:09:09.001Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "0c7d4d6b-fe48-4d6c-b21c-b558932fa8a0",
        "conversationId": "2d7348ab-d8f9-4f3b-bb23-182193d44c1d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:08:59.897Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "33bc3b71-16fc-4e55-9517-9901c1a87a4c",
        "conversationId": "f57108c9-f4c5-4f78-b3f8-674cb115eff0",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:45.488Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "2a9feb56-e3ec-4be9-b61d-70484aac681b",
        "conversationId": "845a3438-fb2e-4471-b14e-088751dcc449",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:37.810Z",
        "updatedAt": null,
        "attachments": null,
        "location": null,
        "organizationId": null,
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 529.1 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/123e4567-e89b-12d3-a456-426614174000 (594.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "108",
    "etag": "W/\"6c-5LXYW+9+w1zghKu26sR3c5PE/Mk\"",
    "date": "Fri, 13 Jun 2025 13:37:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Message not found",
    "details": {},
    "messageKey": "messages.not_found",
    "language": "en"
  }
}
```

**⏱️ Duration:** 594.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/c4dfc012-b059-4672-8640-b8caba410ebb (598.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "524",
    "etag": "W/\"20c-YrqMV8ivrOYqLceOwaTSpqurfjs\"",
    "date": "Fri, 13 Jun 2025 13:37:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "c4dfc012-b059-4672-8640-b8caba410ebb",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-13T13:36:55.490Z",
      "updatedAt": "2025-06-13T13:37:04.817Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 598.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (530.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": null
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "133",
    "etag": "W/\"85-cTFdXS4onzClqPM7FkggpcHLwso\"",
    "date": "Fri, 13 Jun 2025 13:37:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Conversation ID is required",
    "details": {},
    "messageKey": "messages.conversation_id_required",
    "language": "en"
  }
}
```

**⏱️ Duration:** 530.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content
**Status:** ✅ PASSED  
**Duration:** 0.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (939.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "conversationId": "2f184919-4835-4265-bb85-048d218964ef"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "10568",
    "etag": "W/\"2948-PDjx7kckj7Ld5hDgg496ucngbRw\"",
    "date": "Fri, 13 Jun 2025 13:37:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "39e5ba3b-d212-4a7f-9306-7e007ec90551",
      "conversationId": "2f184919-4835-4265-bb85-048d218964ef",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "status": "sent",
      "timestamp": "2025-06-13T13:37:45.913Z",
      "updatedAt": "2025-06-13T13:37:45.914Z",
      "attachments": null,
      "location": null,
      "organizationId": "39f04afa-3936-4449-b6f7-17d931c37a6e",
      "deletedAt": null,
      "deletedBy": null,
      "moderationStatus": null,
      "moderatedAt": null,
      "moderatedBy": null,
      "moderationReason": null
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 939.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (576.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg",
    "X-Organization-Id": "39f04afa-3936-4449-b6f7-17d931c37a6e"
  },
  "data": {
    "content": "Message for invalid conversation",
    "conversationId": "123e4567-e89b-12d3-a456-426614174000"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "118",
    "etag": "W/\"76-brIPRjNRwXku5ICyXsAhssFlKfY\"",
    "date": "Fri, 13 Jun 2025 13:37:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Conversation not found",
    "details": {},
    "messageKey": "conversations.not_found",
    "language": "en"
  }
}
```

**⏱️ Duration:** 576.9 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/c4dfc012-b059-4672-8640-b8caba410ebb (650.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "157",
    "etag": "W/\"9d-aPt86IevpEf2MWR3W6HfrGOqXnc\"",
    "date": "Fri, 13 Jun 2025 13:37:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted",
    "data": {
      "success": true,
      "message": "Message deleted successfully"
    },
    "messageKey": "messages.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 650.4 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/3050d0e2-c55c-4899-8578-b19e3a273ab4 (661.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "157",
    "etag": "W/\"9d-aPt86IevpEf2MWR3W6HfrGOqXnc\"",
    "date": "Fri, 13 Jun 2025 13:37:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted",
    "data": {
      "success": true,
      "message": "Message deleted successfully"
    },
    "messageKey": "messages.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 661.8 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/160c3f56-2688-4c28-993b-061dab1b7259 (676.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "157",
    "etag": "W/\"9d-aPt86IevpEf2MWR3W6HfrGOqXnc\"",
    "date": "Fri, 13 Jun 2025 13:37:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted",
    "data": {
      "success": true,
      "message": "Message deleted successfully"
    },
    "messageKey": "messages.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 676.4 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/conversations/2f184919-4835-4265-bb85-048d218964ef (700.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "184",
    "etag": "W/\"b8-zvFMRoxemJijfu5j4Q8bTzjSMks\"",
    "date": "Fri, 13 Jun 2025 13:37:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation deleted successfully",
    "data": {
      "success": true,
      "message": "Conversation permanently deleted"
    },
    "messageKey": "conversations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 700.3 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/conversations/b2d7e776-0020-443b-8fa5-3abdeae5743c (650.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "184",
    "etag": "W/\"b8-zvFMRoxemJijfu5j4Q8bTzjSMks\"",
    "date": "Fri, 13 Jun 2025 13:37:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation deleted successfully",
    "data": {
      "success": true,
      "message": "Conversation permanently deleted"
    },
    "messageKey": "conversations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 650.4 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/39f04afa-3936-4449-b6f7-17d931c37a6e (1349.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "125",
    "etag": "W/\"7d-O8UoES/a/ZuHRT4PveKC9xnALlk\"",
    "date": "Fri, 13 Jun 2025 13:37:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization deleted successfully",
    "data": {},
    "messageKey": "organizations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1349.6 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/6969cb68-43c2-48cc-a519-ec220cf09794 (1466.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxNzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE3OTksImV4cCI6MTc0OTgyNTM5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bzcOEsaN9S_Jh3A7SfsJuAFFvVfBhTMrg0iut0QA-YBAjKbYrslz3s-z6CLeSaLuB52at4W6krya30W_c3VOG1FKmxSyieJfnbEjqV7fxsXnJOSOnxoR1rnqH8PErAzMcraU3ope3logRvoxKMv284rXZQNYMF6_krzANiRBLgvNgmSX_GCXpbQunHJHfUu0wt9BBIDxtMaiBAP0b0piFJInHIvU6af5WTpNB4BrzdoWfBJlC_L8J87o6pvhrXhNGYTF0Pmx9ATXnKAa3HGTNiioDpuSwJ49PDcIjMlAlznT2gp7y9cyIvY9kJiCOuYEEeQCbFbdIkK4iKVHg-5Fdg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "125",
    "etag": "W/\"7d-O8UoES/a/ZuHRT4PveKC9xnALlk\"",
    "date": "Fri, 13 Jun 2025 13:37:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization deleted successfully",
    "data": {},
    "messageKey": "organizations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1466.9 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/login (263.6ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1706",
    "etag": "W/\"6aa-f07+Tw9CoB0bYs4AeEU2dGFDsak\"",
    "date": "Fri, 13 Jun 2025 13:37:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "role": "admin",
        "isSuperAdmin": true
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxODcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE4NzIsImV4cCI6MTc0OTgyNTQ3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6Cn6pRGK3yJFSJmDmyzMtxUFupwuZNV3h02h-2_AQj5yUQt6ER85ibgoKwaFzWA6D86YBIZWxV2SGGmphedxd1WTl96br7xuPeBB2sadXEqPrRP8Xm6CDH-pvXFlg7GAFYVAY3htDndXx96_JgMto0Zkg7Laiy2ViL_boTyDSWUm9mb1jOwvo0lc_2KLJWRL1okwUD2IkGVlLCbQc4Kb4pK0A21-wwrbRsWCoudKp43PumEFW0JWH_i1UKM4jVApMc13Rn2GTHaU62ptR2d3Iw2jQFbEL0Eu2Qkfz_fNZdHQ8IDErDfZR_U-maO7FcWKbtivHCgKm0ifntS8oS_8w",
        "refreshToken": "AMf-vBxEq_rS3oDz4Yfvp10_Cs7w3FcTe_q8SnPlDAkcxZGin1XJYJw3m_oiQk_o4_fF7PrRgVYNPP65FKUk2KZpS7ziu1WvOLsriQ1FkcxntOlyLyRsR1KTBHBvUBY8BtdUETSKr-IKeVLruUU0Rbf6rPvYu48OYujND14ssiaxv9NLXRQz3QxyCLEHP7zmrsyF6fmLoLQXy8dfAsoGQXoIDjsWDcqCfwP9T7VYT_fFfa1GHCuT3SpcAss9dbhROA2IT2r9CBOM",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 263.6 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/admin/users/IKQLsfTjivYhHbnlVpDhjRgCm333 (1461.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxODcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE4NzIsImV4cCI6MTc0OTgyNTQ3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6Cn6pRGK3yJFSJmDmyzMtxUFupwuZNV3h02h-2_AQj5yUQt6ER85ibgoKwaFzWA6D86YBIZWxV2SGGmphedxd1WTl96br7xuPeBB2sadXEqPrRP8Xm6CDH-pvXFlg7GAFYVAY3htDndXx96_JgMto0Zkg7Laiy2ViL_boTyDSWUm9mb1jOwvo0lc_2KLJWRL1okwUD2IkGVlLCbQc4Kb4pK0A21-wwrbRsWCoudKp43PumEFW0JWH_i1UKM4jVApMc13Rn2GTHaU62ptR2d3Iw2jQFbEL0Eu2Qkfz_fNZdHQ8IDErDfZR_U-maO7FcWKbtivHCgKm0ifntS8oS_8w"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "99",
    "etag": "W/\"63-7MnfmQcA9c8HY8CUZ1LnaOiEJqM\"",
    "date": "Fri, 13 Jun 2025 13:37:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "message": "User and associated data deleted successfully"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 1461.1 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (249.5ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1706",
    "etag": "W/\"6aa-4/OvIFT0a7XJs8KmXhyCJqh5Uys\"",
    "date": "Fri, 13 Jun 2025 13:37:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "role": "admin",
        "isSuperAdmin": true
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxODc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE4NzQsImV4cCI6MTc0OTgyNTQ3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dgKFeCUsCLgL7vmnYucVSb_TgIQxmbtm_Ulk4HZTJW1DLKrM_xRo1a_udsDsNGt5bwrib7DkSEIul6IB2bnuRinNxzTdZjcizc6yJvuNCpask1i8rN_YHn3Km-agL62YtzCLJZlINWzTqFVNydEz70FxUXm8nkVdpk5g_8d9kEsK9U9G-uD2L_X8lvzsDIXtajcA6NQvFs1q4UM0nPWJs9OdNOHNt9g4D_YXX4GwaRcksPcwpgS1gy8VPBAL5hGNzBRLNcMVRPLPZn4bsXYq9UXTAmEXUHrcQBwp6hfFcj78FfUQO6wjC7Xlk3j69PMi1mtdW99Cp9sgQsrqtowquw",
        "refreshToken": "AMf-vBzIl6gcfnHQr-tdv-x73390fkdtDBlgwDIeKVZ9kOChfvNtVPQ_hv4DTVUkK0KsTOFKp-qW6_HNnJD4csYnPJqF0GgMrhc7pKWdDCvalpUKHt0v8sveuVfkWNLe9SA0oz6Y4px_nxNR5h_odo2o-jSykfZenRrGfgVllZ2CmbbyAD3zdrx18zHoqYXDEU5pQJzWddRriDPLK4SvZtsC1Pw7-LcRedY2Y6sWCrO7bZuUx-7EJh1G27pqjhSn5s84aejWOQzz",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 249.5 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/Rr1mYAxxFFfiqj9p4GZEN0WtwyP2 (1123.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxODc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE4NzQsImV4cCI6MTc0OTgyNTQ3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dgKFeCUsCLgL7vmnYucVSb_TgIQxmbtm_Ulk4HZTJW1DLKrM_xRo1a_udsDsNGt5bwrib7DkSEIul6IB2bnuRinNxzTdZjcizc6yJvuNCpask1i8rN_YHn3Km-agL62YtzCLJZlINWzTqFVNydEz70FxUXm8nkVdpk5g_8d9kEsK9U9G-uD2L_X8lvzsDIXtajcA6NQvFs1q4UM0nPWJs9OdNOHNt9g4D_YXX4GwaRcksPcwpgS1gy8VPBAL5hGNzBRLNcMVRPLPZn4bsXYq9UXTAmEXUHrcQBwp6hfFcj78FfUQO6wjC7Xlk3j69PMi1mtdW99Cp9sgQsrqtowquw"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "99",
    "etag": "W/\"63-7MnfmQcA9c8HY8CUZ1LnaOiEJqM\"",
    "date": "Fri, 13 Jun 2025 13:37:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "message": "User and associated data deleted successfully"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 1123.5 ms  

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
- Total messages created: 3
- Total conversations created: 2
- Total organizations created: 2
- Total test users created: 2
- All test data cleaned up automatically
- NEW FEATURES IMPLEMENTED: Message Update, Soft Delete, and Moderation

---
*Generated automatically by Enhanced E2E Reporter*
