# E2E Test Report: messages-tests

**Date:** 6/13/2025  
**Time:** 4:58:35 PM  
**Duration:** 74.34s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation | PASSED | 1.70s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content | PASSED | 0.90s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID | PASSED | 0.62s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation | PASSED | 0.95s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant | PASSED | 0.73s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant | PASSED | 2.72s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation | PASSED | 0.96s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format | PASSED | 0.57s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) | PASSED | 0.72s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender | PASSED | 0.51s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) | PASSED | 1.65s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) | PASSED | 1.85s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user | PASSED | 10.02s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) | PASSED | 0.92s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user | PASSED | 0.63s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) | PASSED | 8.98s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user | PASSED | 8.03s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization | PASSED | 2.32s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization | PASSED | 1.72s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization | PASSED | 0.86s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations | PASSED | 0.55s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID | PASSED | 0.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.53s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.61s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content | PASSED | 0.95s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID | PASSED | 0.61s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID |


---

## Detailed Execution Log

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation
**Status:** ✅ PASSED  
**Duration:** 1.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1680.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "content": "Hello, this is a test message!",
    "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207"
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
    "etag": "W/\"256-mpM7u7e3z1QZkno016cKvWf4DS0\"",
    "date": "Fri, 13 Jun 2025 14:57:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-13T14:57:35.437Z",
      "updatedAt": "2025-06-13T14:57:35.929Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 1680.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (890.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207"
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
    "date": "Fri, 13 Jun 2025 14:57:36 GMT",
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

**⏱️ Duration:** 890.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (618.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "date": "Fri, 13 Jun 2025 14:57:37 GMT",
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

**⏱️ Duration:** 618.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (948.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjY0NiwidXNlcl9pZCI6ImkxTWVCVE9zQXBXbVc1ZWFmMG52UERLbGJxbTEiLCJzdWIiOiJpMU1lQlRPc0FwV21XNWVhZjBudlBES2xicW0xIiwiaWF0IjoxNzQ5ODI2NjQ2LCJleHAiOjE3NDk4MzAyNDYsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODI2NjQ0MzE1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyNjY0NDMxNUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bHGUnC79dwsH9_NP0DOFwRnKjIBwkhlPLsP8uutLw5_PwmemohH1QcvMLTb6mvXy-Dkf_zPIrzCNDTQjwpcdygIQLv85ZFDHgbvYAsAPzh_8hByTzhnK4KskeBo9DL8vQQcIYhYuGv1Cg53oUuHEHffQlpaXCP8QkCHzMBxJ1BxwIXltSeooSAL0hzu07P1v6TXfimu-oliEIfNgxU4oakjW5C3Dq0MfVvhTEldnvGZKtU2dceVfwyYOYtEVavWjPVsccX7PZL1WXvVJy1nQULr9_s5RDrXYnPl5OE8UZdmmoXEA3kedyPHmP2p0TsBJFoa2oCQQUs_49nnlH8yjtQ",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "content": "Group message test",
    "conversationId": "01c32e19-bdb4-40f5-996e-21e0c7b75e53"
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
    "etag": "W/\"24a-dGdekV3B4Q6e2ouo8DG70bEMwXY\"",
    "date": "Fri, 13 Jun 2025 14:57:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "6bec63d8-6f7f-46bf-a1f9-2e67a1bd71c1",
      "conversationId": "01c32e19-bdb4-40f5-996e-21e0c7b75e53",
      "senderId": "i1MeBTOsApWmW5eaf0nvPDKlbqm1",
      "content": "Group message test",
      "status": "sent",
      "timestamp": "2025-06-13T14:57:38.548Z",
      "updatedAt": "2025-06-13T14:57:38.549Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 948.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/0e40afbb-31c7-4bba-a499-2d6919c52f07 (725.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "etag": "W/\"213-qvifrFNeZTULA3bWxr4Eyv1SCjs\"",
    "date": "Fri, 13 Jun 2025 14:57:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-13T14:57:35.437Z",
      "updatedAt": "2025-06-13T14:57:35.929Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 725.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 2.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1010.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "i1MeBTOsApWmW5eaf0nvPDKlbqm1"
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
    "etag": "W/\"1c2-nbJqxc397Na8jaOKfIvjQlM9F90\"",
    "date": "Fri, 13 Jun 2025 14:57:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "7f82d0e8-e768-4225-8f3b-0a708423612a",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T14:57:39.966Z",
      "lastMessageAt": "2025-06-13T14:57:39.966Z",
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "i1MeBTOsApWmW5eaf0nvPDKlbqm1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1010.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (888.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "content": "Private message",
    "conversationId": "7f82d0e8-e768-4225-8f3b-0a708423612a"
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
    "etag": "W/\"247-uvgBKZCE7O6Gurtl5zArtZ9pEDM\"",
    "date": "Fri, 13 Jun 2025 14:57:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "3b07ef75-7222-4402-97de-66276e8fe117",
      "conversationId": "7f82d0e8-e768-4225-8f3b-0a708423612a",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-13T14:57:41.193Z",
      "updatedAt": "2025-06-13T14:57:41.194Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 888.5 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/messages/3b07ef75-7222-4402-97de-66276e8fe117 (822.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjY0NywidXNlcl9pZCI6InJDTjF4UWt3bjRoSTA3dGZhTmNaVnhwTVZ1azIiLCJzdWIiOiJyQ04xeFFrd240aEkwN3RmYU5jWlZ4cE1WdWsyIiwiaWF0IjoxNzQ5ODI2NjQ3LCJleHAiOjE3NDk4MzAyNDcsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDk4MjY2NDYxMTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDk4MjY2NDYxMTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Jx3ZEj-xKOM1HeUAwb2BsqnTqMDnKs6FSGXVr9_C00s_dGdIU_iWyccVIGBjy-UJWnjhDFy3p2nAQfADVGr0JEUKRCPRPdrdApUGTEmS-et8VxO5tPebxhPUeTPp4FY4KfTvdtNGNgZbJcFynptDibEJgrbqZUt5W6D_4DuOLUIqWqNxmv7Klw7qeT_jwscNNqiZruW8YuOQYKFGd4mvi6n8tGZlB5DnfYtuxW8srXa1E-XTb1WkY0HM5goe5k44E3-biadUbby0Sb92lgdLiShHtW7mA4x0qs2ybEIRKlmk3m-C-8S7pqkfgyOebboJvzK5HFGZognDhSud-1CTrA",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "date": "Fri, 13 Jun 2025 14:57:42 GMT",
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

**⏱️ Duration:** 822.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation
**Status:** ✅ PASSED  
**Duration:** 0.96s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/c42642b5-8644-47f4-9f1a-e1cb5a143207/messages (959.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "etag": "W/\"215-pjvVtdn0obMtwpM7TP+Rm+FmrGY\"",
    "date": "Fri, 13 Jun 2025 14:57:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:35.437Z",
        "updatedAt": "2025-06-13T14:57:35.929Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 959.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/invalid-id (569.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "date": "Fri, 13 Jun 2025 14:57:43 GMT",
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

**⏱️ Duration:** 569.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender)
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/0e40afbb-31c7-4bba-a499-2d6919c52f07 (720.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "etag": "W/\"249-neZ6ql1G/j/qq5ZC/hhETJe193s\"",
    "date": "Fri, 13 Jun 2025 14:57:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.updated",
    "data": {
      "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-13T14:57:35.437Z",
      "updatedAt": "2025-06-13T14:57:44.295Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 720.4 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/0e40afbb-31c7-4bba-a499-2d6919c52f07 (507.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjY0NiwidXNlcl9pZCI6ImkxTWVCVE9zQXBXbVc1ZWFmMG52UERLbGJxbTEiLCJzdWIiOiJpMU1lQlRPc0FwV21XNWVhZjBudlBES2xicW0xIiwiaWF0IjoxNzQ5ODI2NjQ2LCJleHAiOjE3NDk4MzAyNDYsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODI2NjQ0MzE1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyNjY0NDMxNUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bHGUnC79dwsH9_NP0DOFwRnKjIBwkhlPLsP8uutLw5_PwmemohH1QcvMLTb6mvXy-Dkf_zPIrzCNDTQjwpcdygIQLv85ZFDHgbvYAsAPzh_8hByTzhnK4KskeBo9DL8vQQcIYhYuGv1Cg53oUuHEHffQlpaXCP8QkCHzMBxJ1BxwIXltSeooSAL0hzu07P1v6TXfimu-oliEIfNgxU4oakjW5C3Dq0MfVvhTEldnvGZKtU2dceVfwyYOYtEVavWjPVsccX7PZL1WXvVJy1nQULr9_s5RDrXYnPl5OE8UZdmmoXEA3kedyPHmP2p0TsBJFoa2oCQQUs_49nnlH8yjtQ",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "date": "Fri, 13 Jun 2025 14:57:44 GMT",
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

**⏱️ Duration:** 507.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender)
**Status:** ✅ PASSED  
**Duration:** 1.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (880.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "content": "Message to be soft deleted",
    "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207"
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
    "etag": "W/\"252-4Qe1BSK7HNjmqrcPFAvrs/Zj2+U\"",
    "date": "Fri, 13 Jun 2025 14:57:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "d8978ee5-64b5-4600-8dc4-aa0fd0db6c2b",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be soft deleted",
      "status": "sent",
      "timestamp": "2025-06-13T14:57:45.687Z",
      "updatedAt": "2025-06-13T14:57:45.688Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 880.6 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/d8978ee5-64b5-4600-8dc4-aa0fd0db6c2b/soft-delete (759.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "etag": "W/\"280-03EmNXQ+8GoH6XYWz6ugQhSLzE4\"",
    "date": "Fri, 13 Jun 2025 14:57:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.soft_deleted",
    "data": {
      "id": "d8978ee5-64b5-4600-8dc4-aa0fd0db6c2b",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "[Message deleted]",
      "status": "deleted",
      "timestamp": "2025-06-13T14:57:45.687Z",
      "updatedAt": "2025-06-13T14:57:46.455Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
      "deletedAt": "2025-06-13T14:57:46.454Z",
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

**⏱️ Duration:** 759.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin)
**Status:** ✅ PASSED  
**Duration:** 1.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (935.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "content": "Message to be deleted",
    "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207"
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
    "etag": "W/\"24d-MMJLadaPpUg1xBftcGdt5UkMQeg\"",
    "date": "Fri, 13 Jun 2025 14:57:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "d8d28f74-cfc2-47b0-b318-d2fdf0c04e7f",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be deleted",
      "status": "sent",
      "timestamp": "2025-06-13T14:57:47.398Z",
      "updatedAt": "2025-06-13T14:57:47.399Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 935.5 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/d8d28f74-cfc2-47b0-b318-d2fdf0c04e7f (908.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "date": "Fri, 13 Jun 2025 14:57:48 GMT",
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

**⏱️ Duration:** 908.4 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user
**Status:** ✅ PASSED  
**Duration:** 10.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/messages/0e40afbb-31c7-4bba-a499-2d6919c52f07 (10010.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjY0NiwidXNlcl9pZCI6ImkxTWVCVE9zQXBXbVc1ZWFmMG52UERLbGJxbTEiLCJzdWIiOiJpMU1lQlRPc0FwV21XNWVhZjBudlBES2xicW0xIiwiaWF0IjoxNzQ5ODI2NjQ2LCJleHAiOjE3NDk4MzAyNDYsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODI2NjQ0MzE1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyNjY0NDMxNUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bHGUnC79dwsH9_NP0DOFwRnKjIBwkhlPLsP8uutLw5_PwmemohH1QcvMLTb6mvXy-Dkf_zPIrzCNDTQjwpcdygIQLv85ZFDHgbvYAsAPzh_8hByTzhnK4KskeBo9DL8vQQcIYhYuGv1Cg53oUuHEHffQlpaXCP8QkCHzMBxJ1BxwIXltSeooSAL0hzu07P1v6TXfimu-oliEIfNgxU4oakjW5C3Dq0MfVvhTEldnvGZKtU2dceVfwyYOYtEVavWjPVsccX7PZL1WXvVJy1nQULr9_s5RDrXYnPl5OE8UZdmmoXEA3kedyPHmP2p0TsBJFoa2oCQQUs_49nnlH8yjtQ",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10010.9 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin)
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (915.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "content-length": "18377",
    "etag": "W/\"47c9-+BmAtshcydgcZFM9c9jhuEkB+9Y\"",
    "date": "Fri, 13 Jun 2025 14:57:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "d8978ee5-64b5-4600-8dc4-aa0fd0db6c2b",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-13T14:57:45.687Z",
        "updatedAt": "2025-06-13T14:57:46.455Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": "2025-06-13T14:57:46.454Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3b07ef75-7222-4402-97de-66276e8fe117",
        "conversationId": "7f82d0e8-e768-4225-8f3b-0a708423612a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:41.193Z",
        "updatedAt": "2025-06-13T14:57:41.194Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "6bec63d8-6f7f-46bf-a1f9-2e67a1bd71c1",
        "conversationId": "01c32e19-bdb4-40f5-996e-21e0c7b75e53",
        "senderId": "i1MeBTOsApWmW5eaf0nvPDKlbqm1",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:38.548Z",
        "updatedAt": "2025-06-13T14:57:38.549Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:35.437Z",
        "updatedAt": "2025-06-13T14:57:44.295Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5aeadf30-6507-4956-8707-eefddb0005f7",
        "conversationId": "06f1f7b0-0ebf-45a4-9d03-5369ad301343",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T13:50:21.406Z",
        "updatedAt": "2025-06-13T13:50:21.407Z",
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
        "id": "125f9b8b-fc32-4b28-900c-43ce1fa49715",
        "conversationId": "0a297ecf-ee19-40d8-90f7-0732453bad9c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T13:49:43.866Z",
        "updatedAt": "2025-06-13T13:49:43.867Z",
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
        "id": "c3fa7d29-d18e-4469-800f-ab4ab4fca1fb",
        "conversationId": "6cddbda1-7fc7-439e-ad53-78347528033d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:40.201Z",
        "updatedAt": "2025-06-13T13:37:40.202Z",
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
        "id": "aa52e5c3-7493-465b-8ae7-fb66d27c00c9",
        "conversationId": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:01.617Z",
        "updatedAt": "2025-06-13T13:37:01.618Z",
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

**⏱️ Duration:** 915.2 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (615.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjY0NiwidXNlcl9pZCI6ImkxTWVCVE9zQXBXbVc1ZWFmMG52UERLbGJxbTEiLCJzdWIiOiJpMU1lQlRPc0FwV21XNWVhZjBudlBES2xicW0xIiwiaWF0IjoxNzQ5ODI2NjQ2LCJleHAiOjE3NDk4MzAyNDYsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODI2NjQ0MzE1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyNjY0NDMxNUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bHGUnC79dwsH9_NP0DOFwRnKjIBwkhlPLsP8uutLw5_PwmemohH1QcvMLTb6mvXy-Dkf_zPIrzCNDTQjwpcdygIQLv85ZFDHgbvYAsAPzh_8hByTzhnK4KskeBo9DL8vQQcIYhYuGv1Cg53oUuHEHffQlpaXCP8QkCHzMBxJ1BxwIXltSeooSAL0hzu07P1v6TXfimu-oliEIfNgxU4oakjW5C3Dq0MfVvhTEldnvGZKtU2dceVfwyYOYtEVavWjPVsccX7PZL1WXvVJy1nQULr9_s5RDrXYnPl5OE8UZdmmoXEA3kedyPHmP2p0TsBJFoa2oCQQUs_49nnlH8yjtQ",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "etag": "W/\"7dd-am7VAgHRfJ3yqogQWNQ/D2Hr51k\"",
    "date": "Fri, 13 Jun 2025 14:57:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "d8978ee5-64b5-4600-8dc4-aa0fd0db6c2b",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-13T14:57:45.687Z",
        "updatedAt": "2025-06-13T14:57:46.455Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": "2025-06-13T14:57:46.454Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3b07ef75-7222-4402-97de-66276e8fe117",
        "conversationId": "7f82d0e8-e768-4225-8f3b-0a708423612a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:41.193Z",
        "updatedAt": "2025-06-13T14:57:41.194Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "6bec63d8-6f7f-46bf-a1f9-2e67a1bd71c1",
        "conversationId": "01c32e19-bdb4-40f5-996e-21e0c7b75e53",
        "senderId": "i1MeBTOsApWmW5eaf0nvPDKlbqm1",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:38.548Z",
        "updatedAt": "2025-06-13T14:57:38.549Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:35.437Z",
        "updatedAt": "2025-06-13T14:57:44.295Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 615.2 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator)
**Status:** ✅ PASSED  
**Duration:** 8.98s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (962.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "content": "Message that needs moderation",
    "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207"
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
    "etag": "W/\"255-S33A0Gbi14SajzkjU3CMyZ7L/Ow\"",
    "date": "Fri, 13 Jun 2025 14:58:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "b81975e6-7539-4f63-9066-92a893c777b8",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that needs moderation",
      "status": "sent",
      "timestamp": "2025-06-13T14:58:00.861Z",
      "updatedAt": "2025-06-13T14:58:00.862Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 962.9 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/b81975e6-7539-4f63-9066-92a893c777b8/moderate (8005.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjY0NywidXNlcl9pZCI6InJDTjF4UWt3bjRoSTA3dGZhTmNaVnhwTVZ1azIiLCJzdWIiOiJyQ04xeFFrd240aEkwN3RmYU5jWlZ4cE1WdWsyIiwiaWF0IjoxNzQ5ODI2NjQ3LCJleHAiOjE3NDk4MzAyNDcsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDk4MjY2NDYxMTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDk4MjY2NDYxMTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Jx3ZEj-xKOM1HeUAwb2BsqnTqMDnKs6FSGXVr9_C00s_dGdIU_iWyccVIGBjy-UJWnjhDFy3p2nAQfADVGr0JEUKRCPRPdrdApUGTEmS-et8VxO5tPebxhPUeTPp4FY4KfTvdtNGNgZbJcFynptDibEJgrbqZUt5W6D_4DuOLUIqWqNxmv7Klw7qeT_jwscNNqiZruW8YuOQYKFGd4mvi6n8tGZlB5DnfYtuxW8srXa1E-XTb1WkY0HM5goe5k44E3-biadUbby0Sb92lgdLiShHtW7mA4x0qs2ybEIRKlmk3m-C-8S7pqkfgyOebboJvzK5HFGZognDhSud-1CTrA",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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

**⏱️ Duration:** 8005.2 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user
**Status:** ✅ PASSED  
**Duration:** 8.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/0e40afbb-31c7-4bba-a499-2d6919c52f07/moderate (8024.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjY0NiwidXNlcl9pZCI6ImkxTWVCVE9zQXBXbVc1ZWFmMG52UERLbGJxbTEiLCJzdWIiOiJpMU1lQlRPc0FwV21XNWVhZjBudlBES2xicW0xIiwiaWF0IjoxNzQ5ODI2NjQ2LCJleHAiOjE3NDk4MzAyNDYsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5ODI2NjQ0MzE1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTgyNjY0NDMxNUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bHGUnC79dwsH9_NP0DOFwRnKjIBwkhlPLsP8uutLw5_PwmemohH1QcvMLTb6mvXy-Dkf_zPIrzCNDTQjwpcdygIQLv85ZFDHgbvYAsAPzh_8hByTzhnK4KskeBo9DL8vQQcIYhYuGv1Cg53oUuHEHffQlpaXCP8QkCHzMBxJ1BxwIXltSeooSAL0hzu07P1v6TXfimu-oliEIfNgxU4oakjW5C3Dq0MfVvhTEldnvGZKtU2dceVfwyYOYtEVavWjPVsccX7PZL1WXvVJy1nQULr9_s5RDrXYnPl5OE8UZdmmoXEA3kedyPHmP2p0TsBJFoa2oCQQUs_49nnlH8yjtQ",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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

**⏱️ Duration:** 8024.3 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.32s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1252.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "3e5c9bb9-c0c5-4311-9d78-595acdb33471"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "i1MeBTOsApWmW5eaf0nvPDKlbqm1"
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
    "etag": "W/\"1bf-SbSyhwuxZJ+/Dz30qclOPfRZjlc\"",
    "date": "Fri, 13 Jun 2025 14:58:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "1e5af2c8-e36f-45d5-b6b2-e8d190c8f690",
      "title": "Org2 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T14:58:17.791Z",
      "lastMessageAt": "2025-06-13T14:58:17.791Z",
      "organizationId": "3e5c9bb9-c0c5-4311-9d78-595acdb33471",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "i1MeBTOsApWmW5eaf0nvPDKlbqm1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1252.4 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (1060.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "3e5c9bb9-c0c5-4311-9d78-595acdb33471"
  },
  "data": {
    "content": "Message in organization 2",
    "conversationId": "1e5af2c8-e36f-45d5-b6b2-e8d190c8f690"
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
    "etag": "W/\"251-pO4h6AzwpWW5JSMUo/Yt3EunFRY\"",
    "date": "Fri, 13 Jun 2025 14:58:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "516e5b23-9429-4334-ae60-0c9498c13970",
      "conversationId": "1e5af2c8-e36f-45d5-b6b2-e8d190c8f690",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-13T14:58:19.167Z",
      "updatedAt": "2025-06-13T14:58:19.168Z",
      "attachments": null,
      "location": null,
      "organizationId": "3e5c9bb9-c0c5-4311-9d78-595acdb33471",
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

**⏱️ Duration:** 1060.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization
**Status:** ✅ PASSED  
**Duration:** 1.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (981.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "content": "Org1 only message",
    "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207"
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
    "etag": "W/\"249-U2VzUwlO96DEXh6DBZ/M4B8ShYM\"",
    "date": "Fri, 13 Jun 2025 14:58:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "3db2cf9f-4ca0-4ca4-bb3c-160a0a85eb84",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-13T14:58:20.214Z",
      "updatedAt": "2025-06-13T14:58:20.215Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 981.7 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/3db2cf9f-4ca0-4ca4-bb3c-160a0a85eb84 (724.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "3e5c9bb9-c0c5-4311-9d78-595acdb33471"
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
    "etag": "W/\"206-hpNa8Net6h06wp00uICLhVNIgLI\"",
    "date": "Fri, 13 Jun 2025 14:58:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "3db2cf9f-4ca0-4ca4-bb3c-160a0a85eb84",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-13T14:58:20.214Z",
      "updatedAt": "2025-06-13T14:58:20.215Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 724.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/c42642b5-8644-47f4-9f1a-e1cb5a143207/messages (858.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "etag": "W/\"7ea-WhnHg6v3bgyh6zLZeH0xtygs6wE\"",
    "date": "Fri, 13 Jun 2025 14:58:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:35.437Z",
        "updatedAt": "2025-06-13T14:57:44.295Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "d8978ee5-64b5-4600-8dc4-aa0fd0db6c2b",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-13T14:57:45.687Z",
        "updatedAt": "2025-06-13T14:57:46.455Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": "2025-06-13T14:57:46.454Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "b81975e6-7539-4f63-9066-92a893c777b8",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-13T14:58:00.861Z",
        "updatedAt": "2025-06-13T14:58:00.862Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3db2cf9f-4ca0-4ca4-bb3c-160a0a85eb84",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-13T14:58:20.214Z",
        "updatedAt": "2025-06-13T14:58:20.215Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 858.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (551.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "content-length": "19834",
    "etag": "W/\"4d7a-FT5Y3Yy0qJnN1r1n2FMPS4U74qA\"",
    "date": "Fri, 13 Jun 2025 14:58:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "3db2cf9f-4ca0-4ca4-bb3c-160a0a85eb84",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-13T14:58:20.214Z",
        "updatedAt": "2025-06-13T14:58:20.215Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "516e5b23-9429-4334-ae60-0c9498c13970",
        "conversationId": "1e5af2c8-e36f-45d5-b6b2-e8d190c8f690",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T14:58:19.167Z",
        "updatedAt": "2025-06-13T14:58:19.168Z",
        "attachments": null,
        "location": null,
        "organizationId": "3e5c9bb9-c0c5-4311-9d78-595acdb33471",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "b81975e6-7539-4f63-9066-92a893c777b8",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-13T14:58:00.861Z",
        "updatedAt": "2025-06-13T14:58:00.862Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "d8978ee5-64b5-4600-8dc4-aa0fd0db6c2b",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-13T14:57:45.687Z",
        "updatedAt": "2025-06-13T14:57:46.455Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": "2025-06-13T14:57:46.454Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "3b07ef75-7222-4402-97de-66276e8fe117",
        "conversationId": "7f82d0e8-e768-4225-8f3b-0a708423612a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:41.193Z",
        "updatedAt": "2025-06-13T14:57:41.194Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "6bec63d8-6f7f-46bf-a1f9-2e67a1bd71c1",
        "conversationId": "01c32e19-bdb4-40f5-996e-21e0c7b75e53",
        "senderId": "i1MeBTOsApWmW5eaf0nvPDKlbqm1",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:38.548Z",
        "updatedAt": "2025-06-13T14:57:38.549Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
        "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:35.437Z",
        "updatedAt": "2025-06-13T14:57:44.295Z",
        "attachments": null,
        "location": null,
        "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5aeadf30-6507-4956-8707-eefddb0005f7",
        "conversationId": "06f1f7b0-0ebf-45a4-9d03-5369ad301343",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T13:50:21.406Z",
        "updatedAt": "2025-06-13T13:50:21.407Z",
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
        "id": "125f9b8b-fc32-4b28-900c-43ce1fa49715",
        "conversationId": "0a297ecf-ee19-40d8-90f7-0732453bad9c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T13:49:43.866Z",
        "updatedAt": "2025-06-13T13:49:43.867Z",
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
        "id": "c3fa7d29-d18e-4469-800f-ab4ab4fca1fb",
        "conversationId": "6cddbda1-7fc7-439e-ad53-78347528033d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:40.201Z",
        "updatedAt": "2025-06-13T13:37:40.202Z",
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
        "id": "aa52e5c3-7493-465b-8ae7-fb66d27c00c9",
        "conversationId": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T13:37:01.617Z",
        "updatedAt": "2025-06-13T13:37:01.618Z",
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

**⏱️ Duration:** 551.0 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/123e4567-e89b-12d3-a456-426614174000 (599.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "date": "Fri, 13 Jun 2025 14:58:23 GMT",
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

**⏱️ Duration:** 599.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/0e40afbb-31c7-4bba-a499-2d6919c52f07 (521.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "etag": "W/\"20c-1WKzzVuVzqfCWk0opiwNvkMrBjU\"",
    "date": "Fri, 13 Jun 2025 14:58:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "0e40afbb-31c7-4bba-a499-2d6919c52f07",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-13T14:57:35.437Z",
      "updatedAt": "2025-06-13T14:57:44.295Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 521.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (601.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "date": "Fri, 13 Jun 2025 14:58:24 GMT",
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

**⏱️ Duration:** 601.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (943.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
  },
  "data": {
    "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207"
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
    "etag": "W/\"2948-kNibPJwY/F7nNrxYuiO+7Nju32Q\"",
    "date": "Fri, 13 Jun 2025 14:58:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "6519a9fa-86b2-441e-a3e1-fe54ffe89693",
      "conversationId": "c42642b5-8644-47f4-9f1a-e1cb5a143207",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "status": "sent",
      "timestamp": "2025-06-13T14:58:25.062Z",
      "updatedAt": "2025-06-13T14:58:25.064Z",
      "attachments": null,
      "location": null,
      "organizationId": "8d57dca2-1e6c-472f-9290-cee653b2f757",
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

**⏱️ Duration:** 943.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (601.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg",
    "X-Organization-Id": "8d57dca2-1e6c-472f-9290-cee653b2f757"
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
    "date": "Fri, 13 Jun 2025 14:58:25 GMT",
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

**⏱️ Duration:** 601.3 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/0e40afbb-31c7-4bba-a499-2d6919c52f07 (665.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "date": "Fri, 13 Jun 2025 14:58:26 GMT",
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

**⏱️ Duration:** 665.4 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/6bec63d8-6f7f-46bf-a1f9-2e67a1bd71c1 (642.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "date": "Fri, 13 Jun 2025 14:58:27 GMT",
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

**⏱️ Duration:** 642.5 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/b81975e6-7539-4f63-9066-92a893c777b8 (628.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "date": "Fri, 13 Jun 2025 14:58:27 GMT",
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

**⏱️ Duration:** 628.5 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/conversations/c42642b5-8644-47f4-9f1a-e1cb5a143207 (754.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "date": "Fri, 13 Jun 2025 14:58:28 GMT",
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

**⏱️ Duration:** 754.1 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/conversations/01c32e19-bdb4-40f5-996e-21e0c7b75e53 (692.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "date": "Fri, 13 Jun 2025 14:58:29 GMT",
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

**⏱️ Duration:** 692.6 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/8d57dca2-1e6c-472f-9290-cee653b2f757 (1422.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "date": "Fri, 13 Jun 2025 14:58:30 GMT",
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

**⏱️ Duration:** 1422.2 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/3e5c9bb9-c0c5-4311-9d78-595acdb33471 (1244.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY2NDEsImV4cCI6MTc0OTgzMDI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EhRHU0hDoaA7wrPvQ50J10mX20WdppEfVRmEijGvnoOmPoVqJS8o7WQcJA1xwlqsMZYwTK66-ZZPmUvKrq3PFAt0Ja-gR-S3JFgFVQ_OF_v9fX2hdALfmZ_X7zjX2VylisDUEdY0xkHNnjyzUfpS6M-X0WdW4e3swJZGomtSW4eYBkkDJrQrrFlfGhZw7Fxpx3o24yUvcmA1A_Ze5z8hwcBsFl4qWZR9jwEkwUiz19x9oydtstfV1RwuIuZJ5JlUjDSPGI0vWElUQN9gAj-E0d1alcwk2cKCpmbrUxSbyZkmIU4tBU23YqLoxSzOFOaTbZQs9yxI_zIPHoGwVd4gIg"
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
    "date": "Fri, 13 Jun 2025 14:58:31 GMT",
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

**⏱️ Duration:** 1244.7 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/login (320.4ms)</summary>

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
    "etag": "W/\"6aa-URgxeuHU1Ha6Te5wLbHVAHYDzBw\"",
    "date": "Fri, 13 Jun 2025 14:58:32 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzEyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3MTIsImV4cCI6MTc0OTgzMDMxMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.COQa7mslU0X6JAYVFCBbeCNdQ5BDZvNTE-SjunsPcnB3CmGC108PRZesk3sdqXR25Tv9bHDQfL1bDaHzMhguXY7uAbr_L90beCl26kdEJ1kdE_OUWtzz4guC0CxjTfz6f7zwAzPcV3GMtxQaq28NY6GBQ0dZnmKJ_foBWPAPYM4T9LtgTiIgNRVnvRGZkn9D5uBiwXRcFBXQZUzb-GVHxkQQNz84sPQT5CRhhSS0aD9ntbcXyrJqNvlgM6ZsT3Gpo1GXt4wlQvc9njK8haduZU_fa_UiieWWL3d81VqN11bRFf6XWJK0MpR6jytU7eDD_gAkAotlUNdlT91w6RYJzw",
        "refreshToken": "AMf-vBwJeT4gKmr3ZT66geXLtLAmY2BPgewXjLMz0nXf48RwOuNEWuAjbTiuRO0oJXGJqfaC2oW9kk4zg4D4Dj7gt644XQgVdY0INE-dMoMQuIUJWPzGCPtJM2volsTDfKb3NYTr2PDeMoVwLit7u3ETEM2PteDRyzjzufbysL7UabcZIyXbRV1BBcpsUi9sIO37WMSI1kmQDLM2bU_AVX4pr8HaGf2mtGjiOwsKJfneX1D3bijjM3NmJFG1dq_yVYcSgompBnFd",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 320.4 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/admin/users/i1MeBTOsApWmW5eaf0nvPDKlbqm1 (1549.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzEyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3MTIsImV4cCI6MTc0OTgzMDMxMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.COQa7mslU0X6JAYVFCBbeCNdQ5BDZvNTE-SjunsPcnB3CmGC108PRZesk3sdqXR25Tv9bHDQfL1bDaHzMhguXY7uAbr_L90beCl26kdEJ1kdE_OUWtzz4guC0CxjTfz6f7zwAzPcV3GMtxQaq28NY6GBQ0dZnmKJ_foBWPAPYM4T9LtgTiIgNRVnvRGZkn9D5uBiwXRcFBXQZUzb-GVHxkQQNz84sPQT5CRhhSS0aD9ntbcXyrJqNvlgM6ZsT3Gpo1GXt4wlQvc9njK8haduZU_fa_UiieWWL3d81VqN11bRFf6XWJK0MpR6jytU7eDD_gAkAotlUNdlT91w6RYJzw"
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
    "date": "Fri, 13 Jun 2025 14:58:33 GMT",
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

**⏱️ Duration:** 1549.5 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (260.6ms)</summary>

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
    "etag": "W/\"6aa-kxCF1C2olxgzhrfmIObeF4T3mrU\"",
    "date": "Fri, 13 Jun 2025 14:58:34 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzEzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3MTMsImV4cCI6MTc0OTgzMDMxMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lYWNTlyHNDxcY5HZIFfYHpkJLsbQZb-KCMJigplOboMzqGg-xbM_bbBy59j1yM7XhPzzPy5n5MUC72BcVH1ivstXUT0CtU-BS9rBCHNROIPA3-Tq7WpruZTcNM4YeoSYGgLenBnq2Ijv4J13Hc3t14mPTxSa27M1DU0FswVLJi1VJ2D4ISVA89x1wKpvw-3ZQRAeWYRIClmbQZiG0-XMOZfYuAnmraxGWNLFtzsyuR4wjizMetpjLCIow7jdKJektxbiFVRAd7w5Qj56nVSXPJA5I7q1Eb4V7G6Zn_vWP4ExWcyi3dJmaBLscBvKNfg_PRKC3pwKY0dueFs5-bKrog",
        "refreshToken": "AMf-vBxe2cYwoWyBUbUXgiOFc608cfpdXUcNDKPmazZPwbBZBvSbE4Y-OadXwmdtk4KrYXOtXwnwBUdP2wpd73Pei-3CfNem4xrkDR3f_Iew-WUEo5jZ5xVjnQeHtsxHzkcAEc--qzSayWJcC1gDbW_WjnFWuDl1sSiC-6u8K5QDIoPKvkFd1IVcSlSyjuVq_S0O05RUBHAX0euZX1x6Gf2gizYnp5wPl63B0kyQkBg3Ks3qp16PXI8GdaGLhu5mJgjbFmaNxB-x",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 260.6 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/rCN1xQkwn4hI07tfaNcZVxpMVuk2 (1239.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzEzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3MTMsImV4cCI6MTc0OTgzMDMxMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lYWNTlyHNDxcY5HZIFfYHpkJLsbQZb-KCMJigplOboMzqGg-xbM_bbBy59j1yM7XhPzzPy5n5MUC72BcVH1ivstXUT0CtU-BS9rBCHNROIPA3-Tq7WpruZTcNM4YeoSYGgLenBnq2Ijv4J13Hc3t14mPTxSa27M1DU0FswVLJi1VJ2D4ISVA89x1wKpvw-3ZQRAeWYRIClmbQZiG0-XMOZfYuAnmraxGWNLFtzsyuR4wjizMetpjLCIow7jdKJektxbiFVRAd7w5Qj56nVSXPJA5I7q1Eb4V7G6Zn_vWP4ExWcyi3dJmaBLscBvKNfg_PRKC3pwKY0dueFs5-bKrog"
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
    "date": "Fri, 13 Jun 2025 14:58:35 GMT",
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

**⏱️ Duration:** 1239.6 ms  

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
