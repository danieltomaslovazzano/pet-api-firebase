# E2E Test Report: messages-tests

**Date:** 6/6/2025  
**Time:** 1:33:49 AM  
**Duration:** 70.82s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation | PASSED | 1.62s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content | PASSED | 1.14s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID | PASSED | 0.69s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation | PASSED | 0.88s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant | PASSED | 0.71s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant | PASSED | 2.80s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation | PASSED | 0.97s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format | PASSED | 0.70s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) | PASSED | 0.73s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender | PASSED | 0.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) | PASSED | 1.88s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) | PASSED | 1.87s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user | PASSED | 10.04s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) | PASSED | 0.90s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user | PASSED | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) | PASSED | 4.94s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user | PASSED | 8.02s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization | PASSED | 2.17s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization | PASSED | 2.04s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization | PASSED | 0.81s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations | PASSED | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID | PASSED | 0.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.55s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.53s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content | PASSED | 0.86s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID | PASSED | 0.65s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID |


---

## Detailed Execution Log

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation
**Status:** ✅ PASSED  
**Duration:** 1.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1600.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "content": "Hello, this is a test message!",
    "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c"
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
    "etag": "W/\"256-Rziu6oR52MXoHzpUcJxGq1Ana2U\"",
    "date": "Thu, 05 Jun 2025 23:32:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "1c574d34-615d-4284-847e-72024ff14c34",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:32:52.530Z",
      "updatedAt": "2025-06-05T23:32:52.908Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 1600.4 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content
**Status:** ✅ PASSED  
**Duration:** 1.14s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1119.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c"
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
    "date": "Thu, 05 Jun 2025 23:32:54 GMT",
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

**⏱️ Duration:** 1119.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (686.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "date": "Thu, 05 Jun 2025 23:32:55 GMT",
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

**⏱️ Duration:** 686.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (870.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjM2MywidXNlcl9pZCI6IlY3TW4yc3d2bmpTWUZhbjZBN1d6MlBGWldIRzMiLCJzdWIiOiJWN01uMnN3dm5qU1lGYW42QTdXejJQRlpXSEczIiwiaWF0IjoxNzQ5MTY2MzYzLCJleHAiOjE3NDkxNjk5NjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MzYxODkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjM2MTg5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kio6B3f3ClUojxnsnQIUUIcOxhO4V8Uw8_IgdVr744mrBndZwf0mC_N2ZGdurQe3JO5uSda0DIvPT-YOmFOMU1Xp55bhBuOFTgAZ9HiE7OTKGuum-IlC8qcuRh44F3GnQdueFE3VJ2RTNvIAHr3WpjR_mw7qVgrflVNqjzgE7VsBg6DoHzGwTWegLE7f_s7YjIxwU5TnE8VOsJEeQUXnEL5oOXA0pmNEq1ashVx0m6uObHZKT-rdHRT06qjqlXM54xyAKG0eg-Z0t5KlDwnzF2B4MRb8Zw42DyhKjf0Zfi5BY1WLaEYhmXFemJJim7eQgC3x2rGzMDHI73rXTDNHtg",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "content": "Group message test",
    "conversationId": "42eb0ee6-1496-4e42-90dd-6ad3bcafb55c"
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
    "etag": "W/\"24a-nfepjQV7Se58KAE4wYv66qbZZr0\"",
    "date": "Thu, 05 Jun 2025 23:32:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "51b3a4e6-be76-4c48-b083-9d1401aae20a",
      "conversationId": "42eb0ee6-1496-4e42-90dd-6ad3bcafb55c",
      "senderId": "V7Mn2swvnjSYFan6A7Wz2PFZWHG3",
      "content": "Group message test",
      "status": "sent",
      "timestamp": "2025-06-05T23:32:55.780Z",
      "updatedAt": "2025-06-05T23:32:55.783Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 870.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/1c574d34-615d-4284-847e-72024ff14c34 (702.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "etag": "W/\"213-ppa0RzQlGit7rxRvGf5ETG+DShE\"",
    "date": "Thu, 05 Jun 2025 23:32:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "1c574d34-615d-4284-847e-72024ff14c34",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:32:52.530Z",
      "updatedAt": "2025-06-05T23:32:52.908Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 702.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 2.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1019.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "V7Mn2swvnjSYFan6A7Wz2PFZWHG3"
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
    "etag": "W/\"1c2-85ofNWqKF6sPE9s5R6OG5PBpyjk\"",
    "date": "Thu, 05 Jun 2025 23:32:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "b00312ac-d9d8-42fd-8375-7eb1b929ac79",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T23:32:57.167Z",
      "lastMessageAt": "2025-06-05T23:32:57.167Z",
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "V7Mn2swvnjSYFan6A7Wz2PFZWHG3"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1019.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (976.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "content": "Private message",
    "conversationId": "b00312ac-d9d8-42fd-8375-7eb1b929ac79"
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
    "etag": "W/\"247-BNEWNJVZRMIg8RODcEukQexIR3Y\"",
    "date": "Thu, 05 Jun 2025 23:32:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "35054c06-7f19-4acc-b49d-5ee06e23d375",
      "conversationId": "b00312ac-d9d8-42fd-8375-7eb1b929ac79",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-05T23:32:58.470Z",
      "updatedAt": "2025-06-05T23:32:58.506Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 976.0 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/messages/35054c06-7f19-4acc-b49d-5ee06e23d375 (799.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjM2NCwidXNlcl9pZCI6IjU0ZG9JdVVJcUJoanhydzNoQXVwSFNMZ2dQRDIiLCJzdWIiOiI1NGRvSXVVSXFCaGp4cnczaEF1cEhTTGdnUEQyIiwiaWF0IjoxNzQ5MTY2MzY0LCJleHAiOjE3NDkxNjk5NjQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjYzNjMyNTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjYzNjMyNTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.E5l8VN_C98pvYAHoyUnzk52RWQtUYTF-unXPNDP975bkq2Z5AAl6DFksonunkqIp_WpEEleHGCzswrOsm22tBe7bymGFM6RdYSu-rHk7xyNs8Yv-KwutGpYQoRACCPouNe33e5SR9draM5iYv9oIgbA2ntH340hwsLDu-pPQZp27__zn64v8YFAmVpggBphlqjVWKEnlJDfPjiR03ZI1yY8iU279JyV9lpNpFmP1w0PIoNuf-pOcTxk-n2OXQkBm5qlO8VVKRzN5Oozo2gc8e4aSGhGZLO4QNOR_gERFagVPB0jMDQVneO-pJG3KRhqCCU0uaTDNruVQzqdZQG8_2A",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "date": "Thu, 05 Jun 2025 23:32:59 GMT",
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

**⏱️ Duration:** 799.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation
**Status:** ✅ PASSED  
**Duration:** 0.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/0ca92027-e113-487e-b7dd-e99c11268a6c/messages (946.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "etag": "W/\"215-8JmZsRdJ7kUfk5VSMVQsWgpWiIE\"",
    "date": "Thu, 05 Jun 2025 23:33:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "1c574d34-615d-4284-847e-72024ff14c34",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:52.530Z",
        "updatedAt": "2025-06-05T23:32:52.908Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 946.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format
**Status:** ✅ PASSED  
**Duration:** 0.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/invalid-id (691.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "date": "Thu, 05 Jun 2025 23:33:01 GMT",
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

**⏱️ Duration:** 691.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender)
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/1c574d34-615d-4284-847e-72024ff14c34 (729.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "etag": "W/\"249-yzXKMrp7iuCLy1cKQyNGisrqz/0\"",
    "date": "Thu, 05 Jun 2025 23:33:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.updated",
    "data": {
      "id": "1c574d34-615d-4284-847e-72024ff14c34",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-05T23:32:52.530Z",
      "updatedAt": "2025-06-05T23:33:01.726Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 729.1 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/1c574d34-615d-4284-847e-72024ff14c34 (588.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjM2MywidXNlcl9pZCI6IlY3TW4yc3d2bmpTWUZhbjZBN1d6MlBGWldIRzMiLCJzdWIiOiJWN01uMnN3dm5qU1lGYW42QTdXejJQRlpXSEczIiwiaWF0IjoxNzQ5MTY2MzYzLCJleHAiOjE3NDkxNjk5NjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MzYxODkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjM2MTg5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kio6B3f3ClUojxnsnQIUUIcOxhO4V8Uw8_IgdVr744mrBndZwf0mC_N2ZGdurQe3JO5uSda0DIvPT-YOmFOMU1Xp55bhBuOFTgAZ9HiE7OTKGuum-IlC8qcuRh44F3GnQdueFE3VJ2RTNvIAHr3WpjR_mw7qVgrflVNqjzgE7VsBg6DoHzGwTWegLE7f_s7YjIxwU5TnE8VOsJEeQUXnEL5oOXA0pmNEq1ashVx0m6uObHZKT-rdHRT06qjqlXM54xyAKG0eg-Z0t5KlDwnzF2B4MRb8Zw42DyhKjf0Zfi5BY1WLaEYhmXFemJJim7eQgC3x2rGzMDHI73rXTDNHtg",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "date": "Thu, 05 Jun 2025 23:33:02 GMT",
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

**⏱️ Duration:** 588.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender)
**Status:** ✅ PASSED  
**Duration:** 1.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (988.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "content": "Message to be soft deleted",
    "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c"
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
    "etag": "W/\"252-ZHmGVteVBDSg1BF1Y0rsPXGekb0\"",
    "date": "Thu, 05 Jun 2025 23:33:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "bfbbb053-46e3-4a8d-99dc-c90e756975da",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be soft deleted",
      "status": "sent",
      "timestamp": "2025-06-05T23:33:03.318Z",
      "updatedAt": "2025-06-05T23:33:03.319Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 988.3 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/bfbbb053-46e3-4a8d-99dc-c90e756975da/soft-delete (882.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "etag": "W/\"280-IDSLOKYwN2ElDvrUwBwTsJ7AnWI\"",
    "date": "Thu, 05 Jun 2025 23:33:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.soft_deleted",
    "data": {
      "id": "bfbbb053-46e3-4a8d-99dc-c90e756975da",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "[Message deleted]",
      "status": "deleted",
      "timestamp": "2025-06-05T23:33:03.318Z",
      "updatedAt": "2025-06-05T23:33:04.214Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
      "deletedAt": "2025-06-05T23:33:04.213Z",
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

**⏱️ Duration:** 882.4 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin)
**Status:** ✅ PASSED  
**Duration:** 1.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1062.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "content": "Message to be deleted",
    "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c"
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
    "etag": "W/\"24d-YcwnmJj6sMj0fBtGAQYOIdMka+g\"",
    "date": "Thu, 05 Jun 2025 23:33:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "c51816ff-6185-41e3-a631-5ce29a3c1081",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be deleted",
      "status": "sent",
      "timestamp": "2025-06-05T23:33:05.266Z",
      "updatedAt": "2025-06-05T23:33:05.267Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 1062.0 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/c51816ff-6185-41e3-a631-5ce29a3c1081 (798.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "date": "Thu, 05 Jun 2025 23:33:06 GMT",
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

**⏱️ Duration:** 798.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user
**Status:** ✅ PASSED  
**Duration:** 10.04s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/messages/1c574d34-615d-4284-847e-72024ff14c34 (10021.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjM2MywidXNlcl9pZCI6IlY3TW4yc3d2bmpTWUZhbjZBN1d6MlBGWldIRzMiLCJzdWIiOiJWN01uMnN3dm5qU1lGYW42QTdXejJQRlpXSEczIiwiaWF0IjoxNzQ5MTY2MzYzLCJleHAiOjE3NDkxNjk5NjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MzYxODkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjM2MTg5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kio6B3f3ClUojxnsnQIUUIcOxhO4V8Uw8_IgdVr744mrBndZwf0mC_N2ZGdurQe3JO5uSda0DIvPT-YOmFOMU1Xp55bhBuOFTgAZ9HiE7OTKGuum-IlC8qcuRh44F3GnQdueFE3VJ2RTNvIAHr3WpjR_mw7qVgrflVNqjzgE7VsBg6DoHzGwTWegLE7f_s7YjIxwU5TnE8VOsJEeQUXnEL5oOXA0pmNEq1ashVx0m6uObHZKT-rdHRT06qjqlXM54xyAKG0eg-Z0t5KlDwnzF2B4MRb8Zw42DyhKjf0Zfi5BY1WLaEYhmXFemJJim7eQgC3x2rGzMDHI73rXTDNHtg",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10021.9 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin)
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (897.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "content-length": "14793",
    "etag": "W/\"39c9-ErwrpB+eK5y0vW9DhrKZh25tnCQ\"",
    "date": "Thu, 05 Jun 2025 23:33:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "bfbbb053-46e3-4a8d-99dc-c90e756975da",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-05T23:33:03.318Z",
        "updatedAt": "2025-06-05T23:33:04.214Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": "2025-06-05T23:33:04.213Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
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
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "51b3a4e6-be76-4c48-b083-9d1401aae20a",
        "conversationId": "42eb0ee6-1496-4e42-90dd-6ad3bcafb55c",
        "senderId": "V7Mn2swvnjSYFan6A7Wz2PFZWHG3",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:55.780Z",
        "updatedAt": "2025-06-05T23:32:55.783Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1c574d34-615d-4284-847e-72024ff14c34",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:52.530Z",
        "updatedAt": "2025-06-05T23:33:01.726Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 897.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (582.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjM2MywidXNlcl9pZCI6IlY3TW4yc3d2bmpTWUZhbjZBN1d6MlBGWldIRzMiLCJzdWIiOiJWN01uMnN3dm5qU1lGYW42QTdXejJQRlpXSEczIiwiaWF0IjoxNzQ5MTY2MzYzLCJleHAiOjE3NDkxNjk5NjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MzYxODkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjM2MTg5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kio6B3f3ClUojxnsnQIUUIcOxhO4V8Uw8_IgdVr744mrBndZwf0mC_N2ZGdurQe3JO5uSda0DIvPT-YOmFOMU1Xp55bhBuOFTgAZ9HiE7OTKGuum-IlC8qcuRh44F3GnQdueFE3VJ2RTNvIAHr3WpjR_mw7qVgrflVNqjzgE7VsBg6DoHzGwTWegLE7f_s7YjIxwU5TnE8VOsJEeQUXnEL5oOXA0pmNEq1ashVx0m6uObHZKT-rdHRT06qjqlXM54xyAKG0eg-Z0t5KlDwnzF2B4MRb8Zw42DyhKjf0Zfi5BY1WLaEYhmXFemJJim7eQgC3x2rGzMDHI73rXTDNHtg",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "etag": "W/\"7dd-WeP6pBryey/QgTMdGzFlW1MmN90\"",
    "date": "Thu, 05 Jun 2025 23:33:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "bfbbb053-46e3-4a8d-99dc-c90e756975da",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-05T23:33:03.318Z",
        "updatedAt": "2025-06-05T23:33:04.214Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": "2025-06-05T23:33:04.213Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
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
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "51b3a4e6-be76-4c48-b083-9d1401aae20a",
        "conversationId": "42eb0ee6-1496-4e42-90dd-6ad3bcafb55c",
        "senderId": "V7Mn2swvnjSYFan6A7Wz2PFZWHG3",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:55.780Z",
        "updatedAt": "2025-06-05T23:32:55.783Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1c574d34-615d-4284-847e-72024ff14c34",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:52.530Z",
        "updatedAt": "2025-06-05T23:33:01.726Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 582.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator)
**Status:** ✅ PASSED  
**Duration:** 4.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (934.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "content": "Message that needs moderation",
    "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c"
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
    "etag": "W/\"255-r3VeCGKdjyHFvnMaNgI50J/C+/M\"",
    "date": "Thu, 05 Jun 2025 23:33:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "f1a299b3-9bdf-4bd0-8d5b-9b2f1f7d7a02",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that needs moderation",
      "status": "sent",
      "timestamp": "2025-06-05T23:33:18.587Z",
      "updatedAt": "2025-06-05T23:33:18.588Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 934.3 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/f1a299b3-9bdf-4bd0-8d5b-9b2f1f7d7a02/moderate (4003.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjM2NCwidXNlcl9pZCI6IjU0ZG9JdVVJcUJoanhydzNoQXVwSFNMZ2dQRDIiLCJzdWIiOiI1NGRvSXVVSXFCaGp4cnczaEF1cEhTTGdnUEQyIiwiaWF0IjoxNzQ5MTY2MzY0LCJleHAiOjE3NDkxNjk5NjQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjYzNjMyNTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjYzNjMyNTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.E5l8VN_C98pvYAHoyUnzk52RWQtUYTF-unXPNDP975bkq2Z5AAl6DFksonunkqIp_WpEEleHGCzswrOsm22tBe7bymGFM6RdYSu-rHk7xyNs8Yv-KwutGpYQoRACCPouNe33e5SR9draM5iYv9oIgbA2ntH340hwsLDu-pPQZp27__zn64v8YFAmVpggBphlqjVWKEnlJDfPjiR03ZI1yY8iU279JyV9lpNpFmP1w0PIoNuf-pOcTxk-n2OXQkBm5qlO8VVKRzN5Oozo2gc8e4aSGhGZLO4QNOR_gERFagVPB0jMDQVneO-pJG3KRhqCCU0uaTDNruVQzqdZQG8_2A",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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

**⏱️ Duration:** 4003.9 ms  
**❌ Error:** socket hang up  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user
**Status:** ✅ PASSED  
**Duration:** 8.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/1c574d34-615d-4284-847e-72024ff14c34/moderate (8012.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjM2MywidXNlcl9pZCI6IlY3TW4yc3d2bmpTWUZhbjZBN1d6MlBGWldIRzMiLCJzdWIiOiJWN01uMnN3dm5qU1lGYW42QTdXejJQRlpXSEczIiwiaWF0IjoxNzQ5MTY2MzYzLCJleHAiOjE3NDkxNjk5NjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MzYxODkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjM2MTg5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kio6B3f3ClUojxnsnQIUUIcOxhO4V8Uw8_IgdVr744mrBndZwf0mC_N2ZGdurQe3JO5uSda0DIvPT-YOmFOMU1Xp55bhBuOFTgAZ9HiE7OTKGuum-IlC8qcuRh44F3GnQdueFE3VJ2RTNvIAHr3WpjR_mw7qVgrflVNqjzgE7VsBg6DoHzGwTWegLE7f_s7YjIxwU5TnE8VOsJEeQUXnEL5oOXA0pmNEq1ashVx0m6uObHZKT-rdHRT06qjqlXM54xyAKG0eg-Z0t5KlDwnzF2B4MRb8Zw42DyhKjf0Zfi5BY1WLaEYhmXFemJJim7eQgC3x2rGzMDHI73rXTDNHtg",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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

**⏱️ Duration:** 8012.5 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.17s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1150.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "8ad1106b-1fcc-447e-a383-2dbd820fe535"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "V7Mn2swvnjSYFan6A7Wz2PFZWHG3"
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
    "etag": "W/\"1bf-swL/C5AE2U59jccufDu2y5ZaYfI\"",
    "date": "Thu, 05 Jun 2025 23:33:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "fba2bb52-5574-4953-8b1b-adb26c71b303",
      "title": "Org2 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T23:33:31.399Z",
      "lastMessageAt": "2025-06-05T23:33:31.399Z",
      "organizationId": "8ad1106b-1fcc-447e-a383-2dbd820fe535",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "V7Mn2swvnjSYFan6A7Wz2PFZWHG3"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1150.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (1011.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "8ad1106b-1fcc-447e-a383-2dbd820fe535"
  },
  "data": {
    "content": "Message in organization 2",
    "conversationId": "fba2bb52-5574-4953-8b1b-adb26c71b303"
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
    "etag": "W/\"251-30uEGno0lzywFSbCYYseU1Lydlk\"",
    "date": "Thu, 05 Jun 2025 23:33:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "1ffd5551-19d1-480d-9021-517e12d3587f",
      "conversationId": "fba2bb52-5574-4953-8b1b-adb26c71b303",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-05T23:33:32.735Z",
      "updatedAt": "2025-06-05T23:33:32.736Z",
      "attachments": null,
      "location": null,
      "organizationId": "8ad1106b-1fcc-447e-a383-2dbd820fe535",
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

**⏱️ Duration:** 1011.0 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization
**Status:** ✅ PASSED  
**Duration:** 2.04s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (931.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "content": "Org1 only message",
    "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c"
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
    "etag": "W/\"249-+TD3cEoRDfR9PbgIhPOgA3iM8qk\"",
    "date": "Thu, 05 Jun 2025 23:33:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "2fd51288-aa60-4d4a-8b1e-1b17f6513bec",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-05T23:33:33.722Z",
      "updatedAt": "2025-06-05T23:33:33.723Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 931.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/2fd51288-aa60-4d4a-8b1e-1b17f6513bec (1099.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "8ad1106b-1fcc-447e-a383-2dbd820fe535"
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
    "etag": "W/\"206-JyEY7R0C/5v3s5ahz/u0+84/LyU\"",
    "date": "Thu, 05 Jun 2025 23:33:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "2fd51288-aa60-4d4a-8b1e-1b17f6513bec",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-05T23:33:33.722Z",
      "updatedAt": "2025-06-05T23:33:33.723Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 1099.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/0ca92027-e113-487e-b7dd-e99c11268a6c/messages (804.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "etag": "W/\"7ea-LcJg4G0b0d+ZubM9CC+yYpICjvo\"",
    "date": "Thu, 05 Jun 2025 23:33:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "1c574d34-615d-4284-847e-72024ff14c34",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:52.530Z",
        "updatedAt": "2025-06-05T23:33:01.726Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "bfbbb053-46e3-4a8d-99dc-c90e756975da",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-05T23:33:03.318Z",
        "updatedAt": "2025-06-05T23:33:04.214Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": "2025-06-05T23:33:04.213Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "f1a299b3-9bdf-4bd0-8d5b-9b2f1f7d7a02",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-05T23:33:18.587Z",
        "updatedAt": "2025-06-05T23:33:18.588Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "2fd51288-aa60-4d4a-8b1e-1b17f6513bec",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-05T23:33:33.722Z",
        "updatedAt": "2025-06-05T23:33:33.723Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 804.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (582.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "content-length": "16250",
    "etag": "W/\"3f7a-KmSxW0qHJI6bOf8kA7FvnYvozgU\"",
    "date": "Thu, 05 Jun 2025 23:33:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "2fd51288-aa60-4d4a-8b1e-1b17f6513bec",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-05T23:33:33.722Z",
        "updatedAt": "2025-06-05T23:33:33.723Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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
        "organizationId": "8ad1106b-1fcc-447e-a383-2dbd820fe535",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "f1a299b3-9bdf-4bd0-8d5b-9b2f1f7d7a02",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-05T23:33:18.587Z",
        "updatedAt": "2025-06-05T23:33:18.588Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "bfbbb053-46e3-4a8d-99dc-c90e756975da",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-05T23:33:03.318Z",
        "updatedAt": "2025-06-05T23:33:04.214Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": "2025-06-05T23:33:04.213Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
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
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "51b3a4e6-be76-4c48-b083-9d1401aae20a",
        "conversationId": "42eb0ee6-1496-4e42-90dd-6ad3bcafb55c",
        "senderId": "V7Mn2swvnjSYFan6A7Wz2PFZWHG3",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:55.780Z",
        "updatedAt": "2025-06-05T23:32:55.783Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "1c574d34-615d-4284-847e-72024ff14c34",
        "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-05T23:32:52.530Z",
        "updatedAt": "2025-06-05T23:33:01.726Z",
        "attachments": null,
        "location": null,
        "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 582.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/123e4567-e89b-12d3-a456-426614174000 (593.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "date": "Thu, 05 Jun 2025 23:33:36 GMT",
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

**⏱️ Duration:** 593.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/1c574d34-615d-4284-847e-72024ff14c34 (549.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "etag": "W/\"20c-jghl/6QdKPvXSLpw1xYd73mObNQ\"",
    "date": "Thu, 05 Jun 2025 23:33:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "1c574d34-615d-4284-847e-72024ff14c34",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-05T23:32:52.530Z",
      "updatedAt": "2025-06-05T23:33:01.726Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 549.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (526.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "date": "Thu, 05 Jun 2025 23:33:38 GMT",
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

**⏱️ Duration:** 526.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content
**Status:** ✅ PASSED  
**Duration:** 0.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (859.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
  },
  "data": {
    "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c"
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
    "etag": "W/\"2948-47l4mjaug2OENsXwrfdCa33d/z0\"",
    "date": "Thu, 05 Jun 2025 23:33:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "7e686300-7b37-4c3e-937d-c5e5305bf421",
      "conversationId": "0ca92027-e113-487e-b7dd-e99c11268a6c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "status": "sent",
      "timestamp": "2025-06-05T23:33:38.767Z",
      "updatedAt": "2025-06-05T23:33:38.768Z",
      "attachments": null,
      "location": null,
      "organizationId": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b",
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

**⏱️ Duration:** 859.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (642.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw",
    "X-Organization-Id": "d47e47bd-d13d-441c-b0a3-12b1aafeae0b"
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
    "date": "Thu, 05 Jun 2025 23:33:39 GMT",
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

**⏱️ Duration:** 642.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/1c574d34-615d-4284-847e-72024ff14c34 (753.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "date": "Thu, 05 Jun 2025 23:33:40 GMT",
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

**⏱️ Duration:** 753.6 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/51b3a4e6-be76-4c48-b083-9d1401aae20a (622.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "date": "Thu, 05 Jun 2025 23:33:40 GMT",
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

**⏱️ Duration:** 622.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/f1a299b3-9bdf-4bd0-8d5b-9b2f1f7d7a02 (653.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "date": "Thu, 05 Jun 2025 23:33:41 GMT",
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

**⏱️ Duration:** 653.4 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/conversations/0ca92027-e113-487e-b7dd-e99c11268a6c (821.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "date": "Thu, 05 Jun 2025 23:33:42 GMT",
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

**⏱️ Duration:** 821.1 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/conversations/42eb0ee6-1496-4e42-90dd-6ad3bcafb55c (591.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "date": "Thu, 05 Jun 2025 23:33:42 GMT",
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

**⏱️ Duration:** 591.5 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/d47e47bd-d13d-441c-b0a3-12b1aafeae0b (1429.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "date": "Thu, 05 Jun 2025 23:33:44 GMT",
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

**⏱️ Duration:** 1429.8 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/8ad1106b-1fcc-447e-a383-2dbd820fe535 (1193.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MzU4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYzNTgsImV4cCI6MTc0OTE2OTk1OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Juc9UCgIXCp7gwpBWdx56jfTTkwY6WUr03cAON7mltYSlNTsUXgv1TW10bOJevTznXYJKt93VaoklMRMEaA_4B0ovcM2Vzku5MI1v3AxOYm-uM8w8sIqsD8zH8xXNPOOAUgxQynnPgEHIOPA64F6mRe4-NYwJpkkAI-139N5l6brS7zKKV5lE16Z5vh19v9wy4AVfCphvAhIlfO7vKs56NKdD43UVgzx4K2zAZ0k-H66sewxwJkHaXtfhKipmkcIIRZhf1v-xwAXUxi8gEI5YvhxVLWsec9oBL6b9e3IFG9dYfi6lXqQEVGXvXsqNo1smKvLUWuW4AutjrSTORQKmw"
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
    "date": "Thu, 05 Jun 2025 23:33:45 GMT",
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

**⏱️ Duration:** 1193.8 ms  

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
    "etag": "W/\"6aa-b8Pp0bMYwpUATilCLDIQA6JHvqg\"",
    "date": "Thu, 05 Jun 2025 23:33:45 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2NDI1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY0MjUsImV4cCI6MTc0OTE3MDAyNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEnIgGDbKpREOW_Cs8c72qAVSYPbwH-vilwQ7dgNM_fDgDtV1584CzBepVVF4G-r1hmP3m9RzM395q7IC8vAFE_m-xJJD5muINieoAMmOC2XffAoOrlR6wbpBnMEfqkxXjuqcVIfjpInIyrR9mn8PZbBmbBPNw9qQ3ncz952u1HjujOMAUd52qotdng7HItN35zy4_5xCbXyE30nCq3K4heJ1KVID2lvp7FHIuZx9s5EXfkwo3QeiI1KnwHBb843q19DltUDmGnn9KdehEuH7jS5rttB3Uj7FuqGcCIsbtMMxfqzhLAjhkieZUvqBwq5PMQE_33SfJTDFYgImuA_hQ",
        "refreshToken": "AMf-vBxBGv_D2sj23hzoNGtqZU2infLOhunTrP2ELN2Oj9Mi03E8hcy4g4YFccLV7ChJMrWJ133zsy06SXCsHoDp11DitQbkxqoBjJ2SqMkTMGA_vqZhV1XTie28nXnF9UW9ymWQhIcFj9E-VZk05jw8durRcFecl3bdUOU81S2N7btbezS21hpNp-D0qtqx9daytO6sY2KF7hotAaVyyIH5sUxwyGIgo0lpnsTatZIFd6vefvT_cmdORlXsP7KTb-coJDnjL3iT",
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

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/admin/users/V7Mn2swvnjSYFan6A7Wz2PFZWHG3 (1622.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2NDI1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY0MjUsImV4cCI6MTc0OTE3MDAyNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEnIgGDbKpREOW_Cs8c72qAVSYPbwH-vilwQ7dgNM_fDgDtV1584CzBepVVF4G-r1hmP3m9RzM395q7IC8vAFE_m-xJJD5muINieoAMmOC2XffAoOrlR6wbpBnMEfqkxXjuqcVIfjpInIyrR9mn8PZbBmbBPNw9qQ3ncz952u1HjujOMAUd52qotdng7HItN35zy4_5xCbXyE30nCq3K4heJ1KVID2lvp7FHIuZx9s5EXfkwo3QeiI1KnwHBb843q19DltUDmGnn9KdehEuH7jS5rttB3Uj7FuqGcCIsbtMMxfqzhLAjhkieZUvqBwq5PMQE_33SfJTDFYgImuA_hQ"
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
    "date": "Thu, 05 Jun 2025 23:33:47 GMT",
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

**⏱️ Duration:** 1622.4 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (331.9ms)</summary>

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
    "etag": "W/\"6aa-40VnpFO88nxrF7Zx5PiV9UIzPq4\"",
    "date": "Thu, 05 Jun 2025 23:33:47 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2NDI3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY0MjcsImV4cCI6MTc0OTE3MDAyNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OZm_C331CcsARa8TyL3794ZgIJXMyn_nN1bSefwZAGtdI8L3k8CIIRriPnNoulL_UJ5t1bIQyiTJpLBZ1RHgbj-DMuz7lUEaRhe17srz_sUoMeGysZYOJ8l_e2wlqAczIp7BDBcE6qS4NzxVJXNu09rmqr3U5kS5ksy70N_Z35R6AtXQ5AO5G-RneYI9Svzj1rn_3Ta-vkLAUD7ZC1vG7QNc5tNugSITDDEenf0edNd38JHisqK0rHMNACwK-bZ_cLaDZVy7QSdpc8wuCfGnbFul-rJIuw51iLOvzlmJApsogL12OBvNNa41Boc3xibvc-rZVu0unO2RQ1qRoRavpg",
        "refreshToken": "AMf-vByTrDCQVF2cScH2MqIEkfBsipGxXwx7eF1f47NCId0ypP9RKN033YESDkeBg3LW2WkA-DVpOxt8-Hbo1b3068XMhcBEA4kftbf29o-ki1wx02PqNefonMS_j7umpXvx6KmuvfsPmqADGLt2vwP8v-cEzFAxGzMJscsVea5cxBLI3q8iDos9SX4ZZKMJ_XZptq0gfOGcfeSYFQ2oA0vws4Kw3qVo8jkZaE3kG197vDuQzmpGaoOLcn4QcJ6k9m7kBXYEFjCx",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 331.9 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/54doIuUIqBhjxrw3hAupHSLggPD2 (1192.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2NDI3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY0MjcsImV4cCI6MTc0OTE3MDAyNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OZm_C331CcsARa8TyL3794ZgIJXMyn_nN1bSefwZAGtdI8L3k8CIIRriPnNoulL_UJ5t1bIQyiTJpLBZ1RHgbj-DMuz7lUEaRhe17srz_sUoMeGysZYOJ8l_e2wlqAczIp7BDBcE6qS4NzxVJXNu09rmqr3U5kS5ksy70N_Z35R6AtXQ5AO5G-RneYI9Svzj1rn_3Ta-vkLAUD7ZC1vG7QNc5tNugSITDDEenf0edNd38JHisqK0rHMNACwK-bZ_cLaDZVy7QSdpc8wuCfGnbFul-rJIuw51iLOvzlmJApsogL12OBvNNa41Boc3xibvc-rZVu0unO2RQ1qRoRavpg"
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
    "date": "Thu, 05 Jun 2025 23:33:49 GMT",
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

**⏱️ Duration:** 1192.0 ms  

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
