# E2E Test Report: messages-tests

**Date:** 6/15/2025  
**Time:** 9:23:13 PM  
**Duration:** 74.69s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation | PASSED | 1.53s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content | PASSED | 0.97s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID | PASSED | 0.64s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation | PASSED | 0.81s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant | PASSED | 0.68s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant | PASSED | 2.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation | PASSED | 0.92s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format | PASSED | 0.61s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) | PASSED | 0.73s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender | PASSED | 0.52s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) | PASSED | 1.69s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) | PASSED | 1.65s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user | PASSED | 10.02s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) | PASSED | 0.92s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user | PASSED | 0.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) | PASSED | 8.99s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user | PASSED | 8.01s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization | PASSED | 2.20s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization | PASSED | 1.63s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization | PASSED | 0.80s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations | PASSED | 1.00s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID | PASSED | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 1.39s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content | PASSED | 0.83s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID | PASSED | 0.62s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID |


---

## Detailed Execution Log

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation
**Status:** ✅ PASSED  
**Duration:** 1.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1521.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "content": "Hello, this is a test message!",
    "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30"
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
    "etag": "W/\"256-xy7Mw8lOjvztMWgtqKWOUQP34vA\"",
    "date": "Sun, 15 Jun 2025 19:22:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:13.094Z",
      "updatedAt": "2025-06-15T19:22:13.477Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 1521.0 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content
**Status:** ✅ PASSED  
**Duration:** 0.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (963.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30"
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
    "date": "Sun, 15 Jun 2025 19:22:14 GMT",
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

**⏱️ Duration:** 963.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (637.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "date": "Sun, 15 Jun 2025 19:22:15 GMT",
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

**⏱️ Duration:** 637.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (805.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTMyMywidXNlcl9pZCI6Im5Mb216Qjk5SzBYNFFxVEZDRm5kakx0R0czeTEiLCJzdWIiOiJuTG9tekI5OUswWDRRcVRGQ0ZuZGpMdEdHM3kxIiwiaWF0IjoxNzUwMDE1MzIzLCJleHAiOjE3NTAwMTg5MjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzUwMDE1MzIyMTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc1MDAxNTMyMjE1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.S3oPcwvewC--kXbNPcXGL6JVc0oEvRCcBU4lZjUA49qODgxex-G3ZXLnsud23se0aDAN26xxqs2Mw0YCYAr8Us_ZL8IDwjU9UlvGFzwRC0y21AmXD83NKAU-xgPUFAmhWuv4aO-XOLGtcnKBCcvX63RpP1bekR0xmvQn51wgy6ob0v7snzIV-bMWQZQ-40sf6Ck_DPIv8fhtZJFpxv0rqWXPjo9pfIqhyKXmHJ6Hu1TL4KAANgTxDFMW7C4s0A25xsj2YypMY_VTbrxcFfBmy_T03Gy8W-00ni-kJfbg0Y9pY0PqsQOV9armWGgwVlhsxummv3KureMsj_WUE4qukg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "content": "Group message test",
    "conversationId": "a44ff79d-a825-44a3-9b7f-8f6b2dc81d49"
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
    "etag": "W/\"24a-3BlDqu0omTmrRHedPKiMAqmqbos\"",
    "date": "Sun, 15 Jun 2025 19:22:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "8e36615b-6908-4ff7-8462-43df85edd8b8",
      "conversationId": "a44ff79d-a825-44a3-9b7f-8f6b2dc81d49",
      "senderId": "nLomzB99K0X4QqTFCFndjLtGG3y1",
      "content": "Group message test",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:16.029Z",
      "updatedAt": "2025-06-15T19:22:16.030Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 805.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/26014705-fbdd-4c2e-84fa-06297b1579fa (679.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "etag": "W/\"213-l3C+8zj3TeJcBURF5LMDPvBo2S8\"",
    "date": "Sun, 15 Jun 2025 19:22:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:13.094Z",
      "updatedAt": "2025-06-15T19:22:13.477Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 679.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 2.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (928.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "nLomzB99K0X4QqTFCFndjLtGG3y1"
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
    "etag": "W/\"1c2-v8KHNwmXgWW3NcQ+ZABza95fdRA\"",
    "date": "Sun, 15 Jun 2025 19:22:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "a564a9d8-76e3-46db-a3b2-d77359660a25",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-15T19:22:17.354Z",
      "lastMessageAt": "2025-06-15T19:22:17.354Z",
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nLomzB99K0X4QqTFCFndjLtGG3y1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 928.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (857.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "content": "Private message",
    "conversationId": "a564a9d8-76e3-46db-a3b2-d77359660a25"
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
    "etag": "W/\"247-basHjGKsoFlTRr/eebAazeLVlsk\"",
    "date": "Sun, 15 Jun 2025 19:22:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "5bfaf2e7-1468-44f1-b44e-8dab0a620679",
      "conversationId": "a564a9d8-76e3-46db-a3b2-d77359660a25",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:18.510Z",
      "updatedAt": "2025-06-15T19:22:18.511Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 857.2 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/messages/5bfaf2e7-1468-44f1-b44e-8dab0a620679 (803.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTMyNCwidXNlcl9pZCI6Ik1rMWc1QzNOdjRQR3RkZEQ4TUs3NWw5UXJRZzIiLCJzdWIiOiJNazFnNUMzTnY0UEd0ZGREOE1LNzVsOVFyUWcyIiwiaWF0IjoxNzUwMDE1MzI0LCJleHAiOjE3NTAwMTg5MjQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NTAwMTUzMjM1MjNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NTAwMTUzMjM1MjNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VcvWpMd3BriE0eAEsk2MFukzVDGWwFC-xMtrW2xxy8slyzXKYKysM2j6mcVilEl_LTF4r18eOMGc-81BVKTcmdS1Z8doevgg26cdOupjPxJsjRl_-aPzsLJZaZeHT0HgjNEhdGElRNfmnVHLsSVP5a-wwrZCNkj9btKkS-ysCWJnoShGOSSNU7WiYvOuXIyQ_789VkOCok_P_tEQJ8bTbSv-x4RERHxv6-G8iTGuqwO5CBjmJLSHn2IXhHIPFLxJZKi6IUVwhXgBMsPYWcNqYdVRVLZVqFHMWaozYQWrp1PwDLcK2ll0EmxQbjUBCv6SNAnDVxgSaasRYcA_y2HFvQ",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "date": "Sun, 15 Jun 2025 19:22:19 GMT",
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

**⏱️ Duration:** 803.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/dc4c4161-4ec1-45ba-9030-c8e642b71c30/messages (914.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "etag": "W/\"215-UPMPwpvH18aYhnBr9jE01HkZMl0\"",
    "date": "Sun, 15 Jun 2025 19:22:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:13.094Z",
        "updatedAt": "2025-06-15T19:22:13.477Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 914.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/invalid-id (612.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "date": "Sun, 15 Jun 2025 19:22:20 GMT",
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

**⏱️ Duration:** 612.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender)
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/26014705-fbdd-4c2e-84fa-06297b1579fa (727.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "etag": "W/\"249-KaQ2epdvqy0mGexquPhrDye29jk\"",
    "date": "Sun, 15 Jun 2025 19:22:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.updated",
    "data": {
      "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:13.094Z",
      "updatedAt": "2025-06-15T19:22:21.599Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 727.1 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/26014705-fbdd-4c2e-84fa-06297b1579fa (514.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTMyMywidXNlcl9pZCI6Im5Mb216Qjk5SzBYNFFxVEZDRm5kakx0R0czeTEiLCJzdWIiOiJuTG9tekI5OUswWDRRcVRGQ0ZuZGpMdEdHM3kxIiwiaWF0IjoxNzUwMDE1MzIzLCJleHAiOjE3NTAwMTg5MjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzUwMDE1MzIyMTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc1MDAxNTMyMjE1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.S3oPcwvewC--kXbNPcXGL6JVc0oEvRCcBU4lZjUA49qODgxex-G3ZXLnsud23se0aDAN26xxqs2Mw0YCYAr8Us_ZL8IDwjU9UlvGFzwRC0y21AmXD83NKAU-xgPUFAmhWuv4aO-XOLGtcnKBCcvX63RpP1bekR0xmvQn51wgy6ob0v7snzIV-bMWQZQ-40sf6Ck_DPIv8fhtZJFpxv0rqWXPjo9pfIqhyKXmHJ6Hu1TL4KAANgTxDFMW7C4s0A25xsj2YypMY_VTbrxcFfBmy_T03Gy8W-00ni-kJfbg0Y9pY0PqsQOV9armWGgwVlhsxummv3KureMsj_WUE4qukg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "date": "Sun, 15 Jun 2025 19:22:22 GMT",
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

**⏱️ Duration:** 514.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender)
**Status:** ✅ PASSED  
**Duration:** 1.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (864.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "content": "Message to be soft deleted",
    "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30"
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
    "etag": "W/\"252-RKV5zbUxEnZjJXA/cAF97KCTFn8\"",
    "date": "Sun, 15 Jun 2025 19:22:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "50066f63-9947-4344-867e-ebe8727b59ba",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be soft deleted",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:22.966Z",
      "updatedAt": "2025-06-15T19:22:22.967Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 864.7 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/50066f63-9947-4344-867e-ebe8727b59ba/soft-delete (821.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "etag": "W/\"280-oPTeTNYD/3X8pTyhIdg4HjqvsPA\"",
    "date": "Sun, 15 Jun 2025 19:22:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.soft_deleted",
    "data": {
      "id": "50066f63-9947-4344-867e-ebe8727b59ba",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "[Message deleted]",
      "status": "deleted",
      "timestamp": "2025-06-15T19:22:22.966Z",
      "updatedAt": "2025-06-15T19:22:23.802Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
      "deletedAt": "2025-06-15T19:22:23.802Z",
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

**⏱️ Duration:** 821.0 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin)
**Status:** ✅ PASSED  
**Duration:** 1.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (859.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "content": "Message to be deleted",
    "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30"
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
    "etag": "W/\"24d-Js3h/9fZZGIaA/Axtrevw4HDneA\"",
    "date": "Sun, 15 Jun 2025 19:22:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "8efa6f59-2c05-4b16-af56-e3e4b1992bd2",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be deleted",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:24.665Z",
      "updatedAt": "2025-06-15T19:22:24.666Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 859.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/8efa6f59-2c05-4b16-af56-e3e4b1992bd2 (790.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "date": "Sun, 15 Jun 2025 19:22:25 GMT",
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

**⏱️ Duration:** 790.1 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user
**Status:** ✅ PASSED  
**Duration:** 10.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/messages/26014705-fbdd-4c2e-84fa-06297b1579fa (10014.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTMyMywidXNlcl9pZCI6Im5Mb216Qjk5SzBYNFFxVEZDRm5kakx0R0czeTEiLCJzdWIiOiJuTG9tekI5OUswWDRRcVRGQ0ZuZGpMdEdHM3kxIiwiaWF0IjoxNzUwMDE1MzIzLCJleHAiOjE3NTAwMTg5MjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzUwMDE1MzIyMTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc1MDAxNTMyMjE1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.S3oPcwvewC--kXbNPcXGL6JVc0oEvRCcBU4lZjUA49qODgxex-G3ZXLnsud23se0aDAN26xxqs2Mw0YCYAr8Us_ZL8IDwjU9UlvGFzwRC0y21AmXD83NKAU-xgPUFAmhWuv4aO-XOLGtcnKBCcvX63RpP1bekR0xmvQn51wgy6ob0v7snzIV-bMWQZQ-40sf6Ck_DPIv8fhtZJFpxv0rqWXPjo9pfIqhyKXmHJ6Hu1TL4KAANgTxDFMW7C4s0A25xsj2YypMY_VTbrxcFfBmy_T03Gy8W-00ni-kJfbg0Y9pY0PqsQOV9armWGgwVlhsxummv3KureMsj_WUE4qukg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10014.7 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin)
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (921.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "content-length": "21065",
    "etag": "W/\"5249-AmhhqjrxdzNz34COQBbRI9JeZ/0\"",
    "date": "Sun, 15 Jun 2025 19:22:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "50066f63-9947-4344-867e-ebe8727b59ba",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-15T19:22:22.966Z",
        "updatedAt": "2025-06-15T19:22:23.802Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": "2025-06-15T19:22:23.802Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5bfaf2e7-1468-44f1-b44e-8dab0a620679",
        "conversationId": "a564a9d8-76e3-46db-a3b2-d77359660a25",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:18.510Z",
        "updatedAt": "2025-06-15T19:22:18.511Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "8e36615b-6908-4ff7-8462-43df85edd8b8",
        "conversationId": "a44ff79d-a825-44a3-9b7f-8f6b2dc81d49",
        "senderId": "nLomzB99K0X4QqTFCFndjLtGG3y1",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:16.029Z",
        "updatedAt": "2025-06-15T19:22:16.030Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:13.094Z",
        "updatedAt": "2025-06-15T19:22:21.599Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "027a7eb0-2966-40a1-bbe9-73b4f81765cc",
        "conversationId": "0e78afd6-1c31-4b15-852c-efdae5619e07",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T15:24:40.078Z",
        "updatedAt": "2025-06-13T15:24:40.079Z",
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
        "id": "1fe937c3-ea8c-489d-b71f-316b9d682b59",
        "conversationId": "a02c270c-684b-4fbe-814b-5ca483f15654",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T15:24:01.267Z",
        "updatedAt": "2025-06-13T15:24:01.268Z",
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
        "id": "54c9c1bc-fd66-4392-a9d2-b7a2b7dfba66",
        "conversationId": "59cfa16f-0625-4b6e-9b2b-67bceba06dd8",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T15:03:04.561Z",
        "updatedAt": "2025-06-13T15:03:04.568Z",
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
        "id": "4d38b91e-7d18-4a8b-a8f2-13f5b7b895e1",
        "conversationId": "924edaaf-db67-4014-8265-a16b7277eb44",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T15:02:24.850Z",
        "updatedAt": "2025-06-13T15:02:24.853Z",
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
        "id": "516e5b23-9429-4334-ae60-0c9498c13970",
        "conversationId": "1e5af2c8-e36f-45d5-b6b2-e8d190c8f690",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T14:58:19.167Z",
        "updatedAt": "2025-06-13T14:58:19.168Z",
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
        "id": "3b07ef75-7222-4402-97de-66276e8fe117",
        "conversationId": "7f82d0e8-e768-4225-8f3b-0a708423612a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:41.193Z",
        "updatedAt": "2025-06-13T14:57:41.194Z",
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

**⏱️ Duration:** 921.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (588.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTMyMywidXNlcl9pZCI6Im5Mb216Qjk5SzBYNFFxVEZDRm5kakx0R0czeTEiLCJzdWIiOiJuTG9tekI5OUswWDRRcVRGQ0ZuZGpMdEdHM3kxIiwiaWF0IjoxNzUwMDE1MzIzLCJleHAiOjE3NTAwMTg5MjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzUwMDE1MzIyMTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc1MDAxNTMyMjE1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.S3oPcwvewC--kXbNPcXGL6JVc0oEvRCcBU4lZjUA49qODgxex-G3ZXLnsud23se0aDAN26xxqs2Mw0YCYAr8Us_ZL8IDwjU9UlvGFzwRC0y21AmXD83NKAU-xgPUFAmhWuv4aO-XOLGtcnKBCcvX63RpP1bekR0xmvQn51wgy6ob0v7snzIV-bMWQZQ-40sf6Ck_DPIv8fhtZJFpxv0rqWXPjo9pfIqhyKXmHJ6Hu1TL4KAANgTxDFMW7C4s0A25xsj2YypMY_VTbrxcFfBmy_T03Gy8W-00ni-kJfbg0Y9pY0PqsQOV9armWGgwVlhsxummv3KureMsj_WUE4qukg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "etag": "W/\"7dd-9hiGkIDxwwkycGXrTR4sPP0c3tA\"",
    "date": "Sun, 15 Jun 2025 19:22:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "50066f63-9947-4344-867e-ebe8727b59ba",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-15T19:22:22.966Z",
        "updatedAt": "2025-06-15T19:22:23.802Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": "2025-06-15T19:22:23.802Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5bfaf2e7-1468-44f1-b44e-8dab0a620679",
        "conversationId": "a564a9d8-76e3-46db-a3b2-d77359660a25",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:18.510Z",
        "updatedAt": "2025-06-15T19:22:18.511Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "8e36615b-6908-4ff7-8462-43df85edd8b8",
        "conversationId": "a44ff79d-a825-44a3-9b7f-8f6b2dc81d49",
        "senderId": "nLomzB99K0X4QqTFCFndjLtGG3y1",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:16.029Z",
        "updatedAt": "2025-06-15T19:22:16.030Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:13.094Z",
        "updatedAt": "2025-06-15T19:22:21.599Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 588.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator)
**Status:** ✅ PASSED  
**Duration:** 8.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (981.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "content": "Message that needs moderation",
    "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30"
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
    "etag": "W/\"255-Ur8yGc7RpCNopyBW2bNKzZ7OnEc\"",
    "date": "Sun, 15 Jun 2025 19:22:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "f55efc40-3694-4c48-86b5-077158d4fdaa",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that needs moderation",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:37.973Z",
      "updatedAt": "2025-06-15T19:22:37.974Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 981.9 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/f55efc40-3694-4c48-86b5-077158d4fdaa/moderate (8004.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTMyNCwidXNlcl9pZCI6Ik1rMWc1QzNOdjRQR3RkZEQ4TUs3NWw5UXJRZzIiLCJzdWIiOiJNazFnNUMzTnY0UEd0ZGREOE1LNzVsOVFyUWcyIiwiaWF0IjoxNzUwMDE1MzI0LCJleHAiOjE3NTAwMTg5MjQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NTAwMTUzMjM1MjNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NTAwMTUzMjM1MjNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VcvWpMd3BriE0eAEsk2MFukzVDGWwFC-xMtrW2xxy8slyzXKYKysM2j6mcVilEl_LTF4r18eOMGc-81BVKTcmdS1Z8doevgg26cdOupjPxJsjRl_-aPzsLJZaZeHT0HgjNEhdGElRNfmnVHLsSVP5a-wwrZCNkj9btKkS-ysCWJnoShGOSSNU7WiYvOuXIyQ_789VkOCok_P_tEQJ8bTbSv-x4RERHxv6-G8iTGuqwO5CBjmJLSHn2IXhHIPFLxJZKi6IUVwhXgBMsPYWcNqYdVRVLZVqFHMWaozYQWrp1PwDLcK2ll0EmxQbjUBCv6SNAnDVxgSaasRYcA_y2HFvQ",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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

**⏱️ Duration:** 8004.2 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user
**Status:** ✅ PASSED  
**Duration:** 8.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/26014705-fbdd-4c2e-84fa-06297b1579fa/moderate (8005.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTMyMywidXNlcl9pZCI6Im5Mb216Qjk5SzBYNFFxVEZDRm5kakx0R0czeTEiLCJzdWIiOiJuTG9tekI5OUswWDRRcVRGQ0ZuZGpMdEdHM3kxIiwiaWF0IjoxNzUwMDE1MzIzLCJleHAiOjE3NTAwMTg5MjMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzUwMDE1MzIyMTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc1MDAxNTMyMjE1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.S3oPcwvewC--kXbNPcXGL6JVc0oEvRCcBU4lZjUA49qODgxex-G3ZXLnsud23se0aDAN26xxqs2Mw0YCYAr8Us_ZL8IDwjU9UlvGFzwRC0y21AmXD83NKAU-xgPUFAmhWuv4aO-XOLGtcnKBCcvX63RpP1bekR0xmvQn51wgy6ob0v7snzIV-bMWQZQ-40sf6Ck_DPIv8fhtZJFpxv0rqWXPjo9pfIqhyKXmHJ6Hu1TL4KAANgTxDFMW7C4s0A25xsj2YypMY_VTbrxcFfBmy_T03Gy8W-00ni-kJfbg0Y9pY0PqsQOV9armWGgwVlhsxummv3KureMsj_WUE4qukg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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

**⏱️ Duration:** 8005.9 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.20s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1231.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "ae3a05df-3097-4a66-a93d-6a26731db8b5"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "nLomzB99K0X4QqTFCFndjLtGG3y1"
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
    "etag": "W/\"1bf-qFVm3tgCTxIv0hknmVZEGckFD/M\"",
    "date": "Sun, 15 Jun 2025 19:22:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "488d1f0c-fb5c-418e-bfc9-f02b9535d922",
      "title": "Org2 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-15T19:22:54.914Z",
      "lastMessageAt": "2025-06-15T19:22:54.914Z",
      "organizationId": "ae3a05df-3097-4a66-a93d-6a26731db8b5",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nLomzB99K0X4QqTFCFndjLtGG3y1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1231.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (963.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "ae3a05df-3097-4a66-a93d-6a26731db8b5"
  },
  "data": {
    "content": "Message in organization 2",
    "conversationId": "488d1f0c-fb5c-418e-bfc9-f02b9535d922"
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
    "etag": "W/\"251-PHRFOw65lZ0LMhFx5jv8CODuOWg\"",
    "date": "Sun, 15 Jun 2025 19:22:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "e43cadac-6dba-4dd5-ba40-94b2db2b64f9",
      "conversationId": "488d1f0c-fb5c-418e-bfc9-f02b9535d922",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:56.178Z",
      "updatedAt": "2025-06-15T19:22:56.178Z",
      "attachments": null,
      "location": null,
      "organizationId": "ae3a05df-3097-4a66-a93d-6a26731db8b5",
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

**⏱️ Duration:** 963.4 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization
**Status:** ✅ PASSED  
**Duration:** 1.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (971.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "content": "Org1 only message",
    "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30"
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
    "etag": "W/\"249-eVa59T2rakPYbY7apwj8POv29gs\"",
    "date": "Sun, 15 Jun 2025 19:22:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "fe7ad536-d522-4242-9e7f-a68712cd6d6b",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:57.202Z",
      "updatedAt": "2025-06-15T19:22:57.203Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 971.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/fe7ad536-d522-4242-9e7f-a68712cd6d6b (654.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "ae3a05df-3097-4a66-a93d-6a26731db8b5"
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
    "etag": "W/\"206-GjA4EtH+UPHK31UiQtnY2WLEvcg\"",
    "date": "Sun, 15 Jun 2025 19:22:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "fe7ad536-d522-4242-9e7f-a68712cd6d6b",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:57.202Z",
      "updatedAt": "2025-06-15T19:22:57.203Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 654.0 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/dc4c4161-4ec1-45ba-9030-c8e642b71c30/messages (799.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "etag": "W/\"7ea-U8cSVRxtd0ACyhyzBG2hl4iTsd4\"",
    "date": "Sun, 15 Jun 2025 19:22:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:13.094Z",
        "updatedAt": "2025-06-15T19:22:21.599Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "50066f63-9947-4344-867e-ebe8727b59ba",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-15T19:22:22.966Z",
        "updatedAt": "2025-06-15T19:22:23.802Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": "2025-06-15T19:22:23.802Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "f55efc40-3694-4c48-86b5-077158d4fdaa",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:37.973Z",
        "updatedAt": "2025-06-15T19:22:37.974Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "fe7ad536-d522-4242-9e7f-a68712cd6d6b",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:57.202Z",
        "updatedAt": "2025-06-15T19:22:57.203Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 799.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 1.00s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (997.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "content-length": "22522",
    "etag": "W/\"57fa-4f66bbPONp1Y2GErAGgZyrnTbAw\"",
    "date": "Sun, 15 Jun 2025 19:22:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "fe7ad536-d522-4242-9e7f-a68712cd6d6b",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:57.202Z",
        "updatedAt": "2025-06-15T19:22:57.203Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "e43cadac-6dba-4dd5-ba40-94b2db2b64f9",
        "conversationId": "488d1f0c-fb5c-418e-bfc9-f02b9535d922",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:56.178Z",
        "updatedAt": "2025-06-15T19:22:56.178Z",
        "attachments": null,
        "location": null,
        "organizationId": "ae3a05df-3097-4a66-a93d-6a26731db8b5",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "f55efc40-3694-4c48-86b5-077158d4fdaa",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:37.973Z",
        "updatedAt": "2025-06-15T19:22:37.974Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "50066f63-9947-4344-867e-ebe8727b59ba",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-15T19:22:22.966Z",
        "updatedAt": "2025-06-15T19:22:23.802Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": "2025-06-15T19:22:23.802Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "5bfaf2e7-1468-44f1-b44e-8dab0a620679",
        "conversationId": "a564a9d8-76e3-46db-a3b2-d77359660a25",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:18.510Z",
        "updatedAt": "2025-06-15T19:22:18.511Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "8e36615b-6908-4ff7-8462-43df85edd8b8",
        "conversationId": "a44ff79d-a825-44a3-9b7f-8f6b2dc81d49",
        "senderId": "nLomzB99K0X4QqTFCFndjLtGG3y1",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:16.029Z",
        "updatedAt": "2025-06-15T19:22:16.030Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
        "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-15T19:22:13.094Z",
        "updatedAt": "2025-06-15T19:22:21.599Z",
        "attachments": null,
        "location": null,
        "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "027a7eb0-2966-40a1-bbe9-73b4f81765cc",
        "conversationId": "0e78afd6-1c31-4b15-852c-efdae5619e07",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T15:24:40.078Z",
        "updatedAt": "2025-06-13T15:24:40.079Z",
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
        "id": "1fe937c3-ea8c-489d-b71f-316b9d682b59",
        "conversationId": "a02c270c-684b-4fbe-814b-5ca483f15654",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T15:24:01.267Z",
        "updatedAt": "2025-06-13T15:24:01.268Z",
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
        "id": "54c9c1bc-fd66-4392-a9d2-b7a2b7dfba66",
        "conversationId": "59cfa16f-0625-4b6e-9b2b-67bceba06dd8",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T15:03:04.561Z",
        "updatedAt": "2025-06-13T15:03:04.568Z",
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
        "id": "4d38b91e-7d18-4a8b-a8f2-13f5b7b895e1",
        "conversationId": "924edaaf-db67-4014-8265-a16b7277eb44",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T15:02:24.850Z",
        "updatedAt": "2025-06-13T15:02:24.853Z",
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
        "id": "516e5b23-9429-4334-ae60-0c9498c13970",
        "conversationId": "1e5af2c8-e36f-45d5-b6b2-e8d190c8f690",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-13T14:58:19.167Z",
        "updatedAt": "2025-06-13T14:58:19.168Z",
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
        "id": "3b07ef75-7222-4402-97de-66276e8fe117",
        "conversationId": "7f82d0e8-e768-4225-8f3b-0a708423612a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-13T14:57:41.193Z",
        "updatedAt": "2025-06-13T14:57:41.194Z",
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

**⏱️ Duration:** 997.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/123e4567-e89b-12d3-a456-426614174000 (586.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "date": "Sun, 15 Jun 2025 19:23:00 GMT",
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

**⏱️ Duration:** 586.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/26014705-fbdd-4c2e-84fa-06297b1579fa (579.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "etag": "W/\"20c-81eja4Iqi1wt5s/8DU002IRIK58\"",
    "date": "Sun, 15 Jun 2025 19:23:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "26014705-fbdd-4c2e-84fa-06297b1579fa",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-15T19:22:13.094Z",
      "updatedAt": "2025-06-15T19:22:21.599Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 579.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 1.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1382.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "date": "Sun, 15 Jun 2025 19:23:02 GMT",
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

**⏱️ Duration:** 1382.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (832.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
  },
  "data": {
    "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30"
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
    "etag": "W/\"2948-5tANdAu+KOSkJe+pn/6qQbctxak\"",
    "date": "Sun, 15 Jun 2025 19:23:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "903b7159-8f11-4cea-b30c-6c3090b11a91",
      "conversationId": "dc4c4161-4ec1-45ba-9030-c8e642b71c30",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "status": "sent",
      "timestamp": "2025-06-15T19:23:03.074Z",
      "updatedAt": "2025-06-15T19:23:03.075Z",
      "attachments": null,
      "location": null,
      "organizationId": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30",
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

**⏱️ Duration:** 832.2 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (613.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg",
    "X-Organization-Id": "fad9d703-3e5e-4f2e-9a40-e744b5c90c30"
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
    "date": "Sun, 15 Jun 2025 19:23:03 GMT",
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

**⏱️ Duration:** 613.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/26014705-fbdd-4c2e-84fa-06297b1579fa (1083.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "date": "Sun, 15 Jun 2025 19:23:04 GMT",
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

**⏱️ Duration:** 1083.7 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/8e36615b-6908-4ff7-8462-43df85edd8b8 (631.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "date": "Sun, 15 Jun 2025 19:23:05 GMT",
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

**⏱️ Duration:** 631.8 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/f55efc40-3694-4c48-86b5-077158d4fdaa (633.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "date": "Sun, 15 Jun 2025 19:23:06 GMT",
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

**⏱️ Duration:** 633.9 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/conversations/dc4c4161-4ec1-45ba-9030-c8e642b71c30 (692.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "date": "Sun, 15 Jun 2025 19:23:06 GMT",
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

**⏱️ Duration:** 692.0 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/conversations/a44ff79d-a825-44a3-9b7f-8f6b2dc81d49 (594.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "date": "Sun, 15 Jun 2025 19:23:07 GMT",
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

**⏱️ Duration:** 594.4 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/fad9d703-3e5e-4f2e-9a40-e744b5c90c30 (1438.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "date": "Sun, 15 Jun 2025 19:23:08 GMT",
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

**⏱️ Duration:** 1438.0 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/ae3a05df-3097-4a66-a93d-6a26731db8b5 (1466.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzMTksImV4cCI6MTc1MDAxODkxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hX2FVGLZWc2JegXfwefaSfjUr7C6j73fRH76Yu6eouhep_v3WwQXocNF_dlpagFmeMEkkK-A3VKgwuOGymWK7c902W4hlru-vVfSTx97wTSYw2o7BJwh1M4bQGZyUzQw7EWy4bDhSnLuPJ-hKPUUTLA8FISmER_hrYCQF1vr12iKiOl7-P_N26HpKTb8pxGWhYS6mQAoS5CTURnbXoNJlLY5g1KzL-YRyFqug9oQKs9I3MstT0uRpeR5fpyPpIGHEPQyxiV3fs3kxWDp8QPpQlq0XZNrBwhCxfV96olpwEbpj0sJJdw0G1q4G4KVo0N8yJKb_WaQwCulzZpy9ACdmg"
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
    "date": "Sun, 15 Jun 2025 19:23:10 GMT",
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

**⏱️ Duration:** 1466.6 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/login (255.0ms)</summary>

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
    "etag": "W/\"6aa-04pp9ybge3ETKrdlMhGwjU4+BAk\"",
    "date": "Sun, 15 Jun 2025 19:23:10 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzOTAsImV4cCI6MTc1MDAxODk5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UCxxn2CVKB-sk0e6qIG0NzgILFyp9A9SblxSKqBiHshh8XAt0uRjalbPusNO9JTBDcbUb33PKa551ZrrUefrV4W1bM9-KVwJdKBmP_-oKvdG7s6Hr00sBBZrN8aY1--dDvtm655cl22ToeUeVu_hiZR7BQ2lubR301_nGoLOiNdgPWynLRv1CDQk3iTNAT52T3SFIlIKPLFbnFtXryfuZ4n0u7ZITUygOn22wQUi99CBdEuW-c_kstliBPNKWT7068aYC_QsvdT-5W_fz-yNd3ePIzvlVrmzWRwQppzvr48xFASYgFbIuuIP9yqLaAOshQpv3X16L6HgIvolUv3BdA",
        "refreshToken": "AMf-vBw2iZwLu1FMcwc8XgnhRzMP3Ux9ZU-_NW3j315eZMJbN8CI0xe0Ki_vp4Q8k7YFNzO6t671jZ9bpCIXIG5GENRKLY6k4C5mH95_lAhypz0SsOluQvdiH4TO_AFib7mkuPCpkM31eVF4uMkLhZVAbvQOdJ5jct4fyR09UJEdin3_zINITFR7bDo8OR7rtC53dsqTwFfVA69MKOu2YWy1_0OzjpCLsUnms7ukW3tbNagCC3s6gG--CzHpZifbNxlwoHQup8Mi",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 255.0 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/admin/users/nLomzB99K0X4QqTFCFndjLtGG3y1 (1403.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzOTAsImV4cCI6MTc1MDAxODk5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UCxxn2CVKB-sk0e6qIG0NzgILFyp9A9SblxSKqBiHshh8XAt0uRjalbPusNO9JTBDcbUb33PKa551ZrrUefrV4W1bM9-KVwJdKBmP_-oKvdG7s6Hr00sBBZrN8aY1--dDvtm655cl22ToeUeVu_hiZR7BQ2lubR301_nGoLOiNdgPWynLRv1CDQk3iTNAT52T3SFIlIKPLFbnFtXryfuZ4n0u7ZITUygOn22wQUi99CBdEuW-c_kstliBPNKWT7068aYC_QsvdT-5W_fz-yNd3ePIzvlVrmzWRwQppzvr48xFASYgFbIuuIP9yqLaAOshQpv3X16L6HgIvolUv3BdA"
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
    "date": "Sun, 15 Jun 2025 19:23:12 GMT",
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

**⏱️ Duration:** 1403.9 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (262.5ms)</summary>

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
    "etag": "W/\"6aa-IK1f2P8Ge1MxuS89uyqYEsf1PBk\"",
    "date": "Sun, 15 Jun 2025 19:23:12 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzkyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzOTIsImV4cCI6MTc1MDAxODk5MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WI5fAVHdi0Fc1SK_J_D9sAm9fo1yqpsMG24W_NcRepVzS_MRtCLwv1hOmSe3mBKiu-_mkYlJokBVO_i4cFrFyheSzlitySGD3CS9CUDrJNFyTEjacbtUxFALd1AB4yyGko3EIDR4BfTNSBIHKAxiZg4abcmmvYT0Y03t1_yxJRTPiucRyCXb2YaOYvInIRCe7JStcohLR-3j3MT4r6FBXkW540OUnDESv3005kFVZ0yx2QgBY08YQs19XoUJaATfg5Y2BVRDskOvW9IRA4o-7NR-MdUeafeI_VeKADCKcYYtDH0sB6lypsGre9-4DAkUspRG0p_GETKoTluu5YXcCA",
        "refreshToken": "AMf-vBy8fBZ0DdBqtUSbIgfYNsUn1C5mo5rog_9ZQDvUWA9UXbs_YphOA7DS6FY0TSTqf5weIQ2NelXiDgg6w4FZSOnVdH9pH9t2B5mMqOTEX_0OlcPVwVzExAbicWt4uaufa_Nk0ZjhZW1re-cXqv8SDfwKbA11LkThmm4EzLIDpf8T0Pj57YIiV0TZG-vdbbgDiuHsOnHgekpdlFRWd23M64rIgkP9fdr5aztcJ95wBpnBSshv0jdk73Rg2eDbHfH0IBJ3XU6w",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 262.5 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/Mk1g5C3Nv4PGtddD8MK75l9QrQg2 (1139.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1MzkyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTUzOTIsImV4cCI6MTc1MDAxODk5MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WI5fAVHdi0Fc1SK_J_D9sAm9fo1yqpsMG24W_NcRepVzS_MRtCLwv1hOmSe3mBKiu-_mkYlJokBVO_i4cFrFyheSzlitySGD3CS9CUDrJNFyTEjacbtUxFALd1AB4yyGko3EIDR4BfTNSBIHKAxiZg4abcmmvYT0Y03t1_yxJRTPiucRyCXb2YaOYvInIRCe7JStcohLR-3j3MT4r6FBXkW540OUnDESv3005kFVZ0yx2QgBY08YQs19XoUJaATfg5Y2BVRDskOvW9IRA4o-7NR-MdUeafeI_VeKADCKcYYtDH0sB6lypsGre9-4DAkUspRG0p_GETKoTluu5YXcCA"
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
    "date": "Sun, 15 Jun 2025 19:23:13 GMT",
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

**⏱️ Duration:** 1139.0 ms  

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
