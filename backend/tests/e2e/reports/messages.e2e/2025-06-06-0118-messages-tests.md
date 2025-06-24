# E2E Test Report: messages-tests

**Date:** 6/6/2025  
**Time:** 1:18:35 AM  
**Duration:** 54.22s  
**Tests:** 21 total, 0 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation | UNKNOWN | 1.61s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content | UNKNOWN | 1.05s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID | UNKNOWN | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation | UNKNOWN | 0.93s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant | UNKNOWN | 0.65s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant | UNKNOWN | 2.71s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation | UNKNOWN | 0.96s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format | UNKNOWN | 0.65s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) | UNKNOWN | 2.16s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user | UNKNOWN | 10.10s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) | UNKNOWN | 1.16s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user | UNKNOWN | 0.62s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization | UNKNOWN | 1.99s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization | UNKNOWN | 1.75s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization | UNKNOWN | 0.85s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations | UNKNOWN | 0.53s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID | UNKNOWN | 0.67s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access | UNKNOWN | 0.65s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data | UNKNOWN | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content | UNKNOWN | 0.94s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content |
| ❌ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID | UNKNOWN | 0.66s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID |


---

## Detailed Execution Log

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation
**Status:** ❌ UNKNOWN  
**Duration:** 1.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1599.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  },
  "data": {
    "content": "Hello, this is a test message!",
    "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086"
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
    "content-length": "439",
    "etag": "W/\"1b7-+HacskLq/DSmU927FPkK6RRLFgI\"",
    "date": "Thu, 05 Jun 2025 23:17:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "012edf28-b621-4f9b-815e-eaab0c998d2e",
      "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:17:54.785Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1599.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content
**Status:** ❌ UNKNOWN  
**Duration:** 1.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1030.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  },
  "data": {
    "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086"
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
    "date": "Thu, 05 Jun 2025 23:17:56 GMT",
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

**⏱️ Duration:** 1030.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID
**Status:** ❌ UNKNOWN  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (589.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "date": "Thu, 05 Jun 2025 23:17:57 GMT",
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

**⏱️ Duration:** 589.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation
**Status:** ❌ UNKNOWN  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (929.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NTQ2NSwidXNlcl9pZCI6InRHQVozdElzcHVkemxiMUZwREx6d2Jtc2J4QjMiLCJzdWIiOiJ0R0FaM3RJc3B1ZHpsYjFGcERMendibXNieEIzIiwiaWF0IjoxNzQ5MTY1NDY1LCJleHAiOjE3NDkxNjkwNjUsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY1NDY0NDE4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NTQ2NDQxOEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bge1gHx1bIcctalsAi1vFOloupe_X6UeqmernmF6xDtSzIxJPV-QDPQP09IUekX4CiGyCcJzZbD6HsaKUQKXuKfF42XcZLrdn8lvVBuyggtF8IAaMSI38cSAmBxRKeK7u1WQenh8JUVnfoZyQYFhj8FmAwcKfhrNSQvnf7DnYYufajUkY4Rd0XhBfGaRiUKXrLCHElhKFAv2MYozN0J0XTiOyLk7nvfnMY-juyDS-2gLMTWZBWQ2M6iTH7nKfl0QCqxkNa0MzAQ4QzVcmELW5xNiadnG96y3pHaWpgZe3rLcoBeJOQetcTtKI6cFygY0560pb8mf5Zez20qK1cHkqA",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  },
  "data": {
    "content": "Group message test",
    "conversationId": "bb7baaa4-5f10-4a5b-814f-cd6eaf133209"
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
    "content-length": "427",
    "etag": "W/\"1ab-PxebvFVXiJixEBgb8blgY6p7rfg\"",
    "date": "Thu, 05 Jun 2025 23:17:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "c8186b30-97ce-4af5-ab7b-87f9a82d3d1d",
      "conversationId": "bb7baaa4-5f10-4a5b-814f-cd6eaf133209",
      "senderId": "tGAZ3tIspudzlb1FpDLzwbmsbxB3",
      "content": "Group message test",
      "status": "sent",
      "timestamp": "2025-06-05T23:17:57.952Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 929.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant
**Status:** ❌ UNKNOWN  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/012edf28-b621-4f9b-815e-eaab0c998d2e (639.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "content-length": "372",
    "etag": "W/\"174-eZv6PVINSiDnMRHqyKDX79dvI0k\"",
    "date": "Thu, 05 Jun 2025 23:17:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "012edf28-b621-4f9b-815e-eaab0c998d2e",
      "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:17:54.785Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 639.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant
**Status:** ❌ UNKNOWN  
**Duration:** 2.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (974.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "tGAZ3tIspudzlb1FpDLzwbmsbxB3"
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
    "etag": "W/\"1c2-TwniPAAESOYpZjStkTvjcaQuNCg\"",
    "date": "Thu, 05 Jun 2025 23:17:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "d05da288-1f91-4b8a-a226-691d85f6487e",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T23:17:59.264Z",
      "lastMessageAt": "2025-06-05T23:17:59.264Z",
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tGAZ3tIspudzlb1FpDLzwbmsbxB3"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 974.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (969.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  },
  "data": {
    "content": "Private message",
    "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e"
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
    "content-length": "424",
    "etag": "W/\"1a8-n6hANWWau50QrqvWOaNJrzebq6w\"",
    "date": "Thu, 05 Jun 2025 23:18:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "871ec27d-cac7-442a-a44c-f1b60cd72f29",
      "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-05T23:18:00.547Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 969.9 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/messages/871ec27d-cac7-442a-a44c-f1b60cd72f29 (759.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NTQ2NiwidXNlcl9pZCI6IjVteTRkOVVNeFpSVTNkaFRSQ2ZVN0Z6WG5xcjIiLCJzdWIiOiI1bXk0ZDlVTXhaUlUzZGhUUkNmVTdGelhucXIyIiwiaWF0IjoxNzQ5MTY1NDY2LCJleHAiOjE3NDkxNjkwNjYsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjU0NjU2ODdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjU0NjU2ODdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.N5xIoyt8P8oIdWTVmbtCrVodzBwo93DCGNCKqpB7L4N2lCHIoxwcGCiDvZVZXruQ9nrM3qpPc838_vGSAhq3Qhe-5rG7m9CS7Rv1Ouq96xb-9DiC0K3zbncnkDCqniF_sZSmVC-wVviiKHchXXE2ClmfOuk6kKDY8SoQLvXCojRi2siHXylsEVhBR4Jka6G9PyXc1vv4pd_E7ICK3vAvg6AWhjGKKSC48oYmfDXVtGDF-oo35paKpRUfX2yQbXGCXyRFhIuKXMxdj4E6wxnlKRFG9sfPPlpzD7GFLtD_DD7dMm1zrobMHwirpDbPXr0lnd4H5nmkapeR0sjH9_YX9A",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "date": "Thu, 05 Jun 2025 23:18:01 GMT",
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

**⏱️ Duration:** 759.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation
**Status:** ❌ UNKNOWN  
**Duration:** 0.96s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/39257c4e-027c-4373-b1b9-06ed5fc29086/messages (953.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "content-length": "374",
    "etag": "W/\"176-DHFPLUoDn4UnRWOYEudhUUL7NUA\"",
    "date": "Thu, 05 Jun 2025 23:18:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "012edf28-b621-4f9b-815e-eaab0c998d2e",
        "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:17:54.785Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 953.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format
**Status:** ❌ UNKNOWN  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/invalid-id (646.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "date": "Thu, 05 Jun 2025 23:18:03 GMT",
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

**⏱️ Duration:** 646.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin)
**Status:** ❌ UNKNOWN  
**Duration:** 2.16s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (979.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  },
  "data": {
    "content": "Message to be deleted",
    "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086"
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
    "content-length": "430",
    "etag": "W/\"1ae-vj+dRcpjeJq5kZuuErfDr4xjobk\"",
    "date": "Thu, 05 Jun 2025 23:18:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "275a9de7-66b1-43ab-a1a2-f5f39372c8d1",
      "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be deleted",
      "status": "sent",
      "timestamp": "2025-06-05T23:18:03.875Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 979.9 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/275a9de7-66b1-43ab-a1a2-f5f39372c8d1 (1178.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "date": "Thu, 05 Jun 2025 23:18:05 GMT",
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

**⏱️ Duration:** 1178.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user
**Status:** ❌ UNKNOWN  
**Duration:** 10.10s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/messages/012edf28-b621-4f9b-815e-eaab0c998d2e (10077.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NTQ2NSwidXNlcl9pZCI6InRHQVozdElzcHVkemxiMUZwREx6d2Jtc2J4QjMiLCJzdWIiOiJ0R0FaM3RJc3B1ZHpsYjFGcERMendibXNieEIzIiwiaWF0IjoxNzQ5MTY1NDY1LCJleHAiOjE3NDkxNjkwNjUsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY1NDY0NDE4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NTQ2NDQxOEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bge1gHx1bIcctalsAi1vFOloupe_X6UeqmernmF6xDtSzIxJPV-QDPQP09IUekX4CiGyCcJzZbD6HsaKUQKXuKfF42XcZLrdn8lvVBuyggtF8IAaMSI38cSAmBxRKeK7u1WQenh8JUVnfoZyQYFhj8FmAwcKfhrNSQvnf7DnYYufajUkY4Rd0XhBfGaRiUKXrLCHElhKFAv2MYozN0J0XTiOyLk7nvfnMY-juyDS-2gLMTWZBWQ2M6iTH7nKfl0QCqxkNa0MzAQ4QzVcmELW5xNiadnG96y3pHaWpgZe3rLcoBeJOQetcTtKI6cFygY0560pb8mf5Zez20qK1cHkqA",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10077.3 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin)
**Status:** ❌ UNKNOWN  
**Duration:** 1.16s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (1153.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "content-length": "7949",
    "etag": "W/\"1f0d-g6eNlGj0ofkv6VmRCaHc4TQVfuw\"",
    "date": "Thu, 05 Jun 2025 23:18:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "871ec27d-cac7-442a-a44c-f1b60cd72f29",
        "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:00.547Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "c8186b30-97ce-4af5-ab7b-87f9a82d3d1d",
        "conversationId": "bb7baaa4-5f10-4a5b-814f-cd6eaf133209",
        "senderId": "tGAZ3tIspudzlb1FpDLzwbmsbxB3",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:17:57.952Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "012edf28-b621-4f9b-815e-eaab0c998d2e",
        "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:17:54.785Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "4f1210d0-7f14-4056-9c82-a6a74c455240",
        "conversationId": "e29a97c9-c31f-4a3c-b61e-798f3f681295",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:37.228Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "8aaf1837-8a36-4f15-a60a-1342e9e27627",
        "conversationId": "a84192fb-3f5e-4b46-9135-5098ffef237b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:19.758Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "790715d0-a925-4fa9-bfab-ca6393fdcab4",
        "conversationId": "d516b485-3c7f-494a-945c-e3f85ddd53c9",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:09:24.381Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "a27ccbd7-07fb-4aaf-8f6a-489e025ce2b2",
        "conversationId": "80f3bcf1-fbfe-4f1f-9162-5a6f7abfc221",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:08:46.289Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "d3b535bf-ed28-47e1-9a3e-16afc67cc6e1",
        "conversationId": "92f8ed4e-808c-49b2-8ea4-4ba14c7efcbd",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:06:21.671Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4535ee0a-77a2-4558-b2b3-81d112ecb94a",
        "conversationId": "76d58415-d63b-4fcf-bd32-42130a49398f",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:05:44.207Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "f6427065-9e98-47b5-8d94-d652d78ca019",
        "conversationId": "92164c66-e43a-49c6-b0b1-e0ceb9fc1352",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:03:04.204Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "1995e675-f223-4992-95c9-16ade869a436",
        "conversationId": "58d6799b-ca5e-4218-a290-6659219e914c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:02:27.067Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "0e3e2209-2b1e-4061-b95d-aeb07bfc518e",
        "conversationId": "ea495392-ea99-4018-b9ba-ca3d4b3707be",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:44.895Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "5c16c996-21da-42e0-96f3-8cdd401cd290",
        "conversationId": "62cc1341-dfa8-4983-bdfe-5127675a2b92",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:07.778Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "e9cc8259-a8e4-401f-973a-1b69cc247110",
        "conversationId": "295295ca-3389-4d46-9d03-956bf9813290",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:56.273Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "205b4aed-89b0-4677-bbcd-6d13f16f7ede",
        "conversationId": "95ba2c6d-9d16-4224-9121-11fc29734643",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:50.071Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "ee74669b-46c2-47fd-9bf1-08ec55f65624",
        "conversationId": "6b4f958e-7afb-45d1-8362-4f5513cfb523",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:58.349Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "478e4dd0-3973-47c9-8e5b-e58f43c9d0b4",
        "conversationId": "64ae22b0-c8da-4f7a-8d9b-09e3b0ac117a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:48.619Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "3d3b0a6b-281e-4206-91d1-5d4cf7f555e3",
        "conversationId": "74313b7b-1863-40f5-897c-8fca476eea3b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:42.513Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "e24a2042-b92d-4fe0-8621-5c4d7ad99e6d",
        "conversationId": "252b767c-613c-4d3c-9fda-72e12b088edf",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:32.395Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "58d2b4d8-227a-4ce7-bcef-bff434565684",
        "conversationId": "e16dafcb-209d-4162-aa4e-a2581659796b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:11.774Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4f2a13c4-7655-4296-bddb-8cd329edd09c",
        "conversationId": "0d0101f2-e084-4eff-8edd-295b0af96ed1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:01.363Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "23fdae15-8ebb-43dc-bb97-086e8ba0abda",
        "conversationId": "22eabbe1-e7f4-4893-a86f-3fcacf4dfb11",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:37.577Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "ab2a798f-8af7-4e0c-af56-58c4a905d60a",
        "conversationId": "bf9869ad-09ab-47b9-a550-6a450c274b4a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:28.161Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "5e84cbe1-d178-4d78-a6eb-028c33d6869f",
        "conversationId": "db03df51-e9c9-4bb9-b380-2771510df593",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:09:09.001Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "0c7d4d6b-fe48-4d6c-b21c-b558932fa8a0",
        "conversationId": "2d7348ab-d8f9-4f3b-bb23-182193d44c1d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:08:59.897Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "33bc3b71-16fc-4e55-9517-9901c1a87a4c",
        "conversationId": "f57108c9-f4c5-4f78-b3f8-674cb115eff0",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:45.488Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "2a9feb56-e3ec-4be9-b61d-70484aac681b",
        "conversationId": "845a3438-fb2e-4471-b14e-088751dcc449",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:37.810Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 1153.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user
**Status:** ❌ UNKNOWN  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (572.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NTQ2NSwidXNlcl9pZCI6InRHQVozdElzcHVkemxiMUZwREx6d2Jtc2J4QjMiLCJzdWIiOiJ0R0FaM3RJc3B1ZHpsYjFGcERMendibXNieEIzIiwiaWF0IjoxNzQ5MTY1NDY1LCJleHAiOjE3NDkxNjkwNjUsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY1NDY0NDE4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NTQ2NDQxOEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bge1gHx1bIcctalsAi1vFOloupe_X6UeqmernmF6xDtSzIxJPV-QDPQP09IUekX4CiGyCcJzZbD6HsaKUQKXuKfF42XcZLrdn8lvVBuyggtF8IAaMSI38cSAmBxRKeK7u1WQenh8JUVnfoZyQYFhj8FmAwcKfhrNSQvnf7DnYYufajUkY4Rd0XhBfGaRiUKXrLCHElhKFAv2MYozN0J0XTiOyLk7nvfnMY-juyDS-2gLMTWZBWQ2M6iTH7nKfl0QCqxkNa0MzAQ4QzVcmELW5xNiadnG96y3pHaWpgZe3rLcoBeJOQetcTtKI6cFygY0560pb8mf5Zez20qK1cHkqA",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "content-length": "1013",
    "etag": "W/\"3f5-c43ZwUaMB1uPC/uKO0mrh5Z1HFo\"",
    "date": "Thu, 05 Jun 2025 23:18:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "871ec27d-cac7-442a-a44c-f1b60cd72f29",
        "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:00.547Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "c8186b30-97ce-4af5-ab7b-87f9a82d3d1d",
        "conversationId": "bb7baaa4-5f10-4a5b-814f-cd6eaf133209",
        "senderId": "tGAZ3tIspudzlb1FpDLzwbmsbxB3",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:17:57.952Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "012edf28-b621-4f9b-815e-eaab0c998d2e",
        "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:17:54.785Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 572.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization
**Status:** ❌ UNKNOWN  
**Duration:** 1.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1094.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "f7ffe162-821c-427d-9168-dee7dd537e9d"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "tGAZ3tIspudzlb1FpDLzwbmsbxB3"
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
    "etag": "W/\"1bf-XElJigU9rPO7HtJf4td4lN4KeZ0\"",
    "date": "Thu, 05 Jun 2025 23:18:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
      "title": "Org2 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T23:18:17.766Z",
      "lastMessageAt": "2025-06-05T23:18:17.766Z",
      "organizationId": "f7ffe162-821c-427d-9168-dee7dd537e9d",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tGAZ3tIspudzlb1FpDLzwbmsbxB3"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1094.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (890.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "f7ffe162-821c-427d-9168-dee7dd537e9d"
  },
  "data": {
    "content": "Message in organization 2",
    "conversationId": "35f56667-a6d6-42c9-9133-f38b7104f3e1"
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
    "content-length": "434",
    "etag": "W/\"1b2-/eY0zxUHCZnPKWSgviXujb07hRw\"",
    "date": "Thu, 05 Jun 2025 23:18:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "400840a0-e8ed-4f91-898f-a08ceb0dcebb",
      "conversationId": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-05T23:18:19.036Z",
      "attachments": null,
      "location": null,
      "organizationId": "f7ffe162-821c-427d-9168-dee7dd537e9d"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 890.0 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization
**Status:** ❌ UNKNOWN  
**Duration:** 1.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (979.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  },
  "data": {
    "content": "Org1 only message",
    "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086"
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
    "content-length": "426",
    "etag": "W/\"1aa-CHkWKsEGYEiSllgSXoodnP46HZg\"",
    "date": "Thu, 05 Jun 2025 23:18:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "e759caed-5a7d-41fe-88ee-e1b38be464c4",
      "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-05T23:18:20.027Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 979.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/e759caed-5a7d-41fe-88ee-e1b38be464c4 (757.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "f7ffe162-821c-427d-9168-dee7dd537e9d"
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
    "content-length": "359",
    "etag": "W/\"167-nwUNcieOomW+2jBIOiEHnJEWTgI\"",
    "date": "Thu, 05 Jun 2025 23:18:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "e759caed-5a7d-41fe-88ee-e1b38be464c4",
      "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-05T23:18:20.027Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 757.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization
**Status:** ❌ UNKNOWN  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/39257c4e-027c-4373-b1b9-06ed5fc29086/messages (841.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "content-length": "694",
    "etag": "W/\"2b6-RXgKBBBB9C1N7DsLyu4uq2ydzV0\"",
    "date": "Thu, 05 Jun 2025 23:18:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "012edf28-b621-4f9b-815e-eaab0c998d2e",
        "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:17:54.785Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "e759caed-5a7d-41fe-88ee-e1b38be464c4",
        "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:20.027Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 841.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations
**Status:** ❌ UNKNOWN  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (528.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw"
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
    "content-length": "8597",
    "etag": "W/\"2195-p32dXbIjt6LWGcK+bIEHFutS7MQ\"",
    "date": "Thu, 05 Jun 2025 23:18:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "e759caed-5a7d-41fe-88ee-e1b38be464c4",
        "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:20.027Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "400840a0-e8ed-4f91-898f-a08ceb0dcebb",
        "conversationId": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:19.036Z",
        "attachments": null,
        "location": null,
        "organizationId": "f7ffe162-821c-427d-9168-dee7dd537e9d"
      },
      {
        "id": "871ec27d-cac7-442a-a44c-f1b60cd72f29",
        "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:00.547Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "c8186b30-97ce-4af5-ab7b-87f9a82d3d1d",
        "conversationId": "bb7baaa4-5f10-4a5b-814f-cd6eaf133209",
        "senderId": "tGAZ3tIspudzlb1FpDLzwbmsbxB3",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:17:57.952Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "012edf28-b621-4f9b-815e-eaab0c998d2e",
        "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:17:54.785Z",
        "attachments": null,
        "location": null,
        "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
      },
      {
        "id": "4f1210d0-7f14-4056-9c82-a6a74c455240",
        "conversationId": "e29a97c9-c31f-4a3c-b61e-798f3f681295",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:37.228Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "8aaf1837-8a36-4f15-a60a-1342e9e27627",
        "conversationId": "a84192fb-3f5e-4b46-9135-5098ffef237b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:19.758Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "790715d0-a925-4fa9-bfab-ca6393fdcab4",
        "conversationId": "d516b485-3c7f-494a-945c-e3f85ddd53c9",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:09:24.381Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "a27ccbd7-07fb-4aaf-8f6a-489e025ce2b2",
        "conversationId": "80f3bcf1-fbfe-4f1f-9162-5a6f7abfc221",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:08:46.289Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "d3b535bf-ed28-47e1-9a3e-16afc67cc6e1",
        "conversationId": "92f8ed4e-808c-49b2-8ea4-4ba14c7efcbd",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:06:21.671Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4535ee0a-77a2-4558-b2b3-81d112ecb94a",
        "conversationId": "76d58415-d63b-4fcf-bd32-42130a49398f",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:05:44.207Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "f6427065-9e98-47b5-8d94-d652d78ca019",
        "conversationId": "92164c66-e43a-49c6-b0b1-e0ceb9fc1352",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:03:04.204Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "1995e675-f223-4992-95c9-16ade869a436",
        "conversationId": "58d6799b-ca5e-4218-a290-6659219e914c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:02:27.067Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "0e3e2209-2b1e-4061-b95d-aeb07bfc518e",
        "conversationId": "ea495392-ea99-4018-b9ba-ca3d4b3707be",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:44.895Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "5c16c996-21da-42e0-96f3-8cdd401cd290",
        "conversationId": "62cc1341-dfa8-4983-bdfe-5127675a2b92",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:07.778Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "e9cc8259-a8e4-401f-973a-1b69cc247110",
        "conversationId": "295295ca-3389-4d46-9d03-956bf9813290",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:56.273Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "205b4aed-89b0-4677-bbcd-6d13f16f7ede",
        "conversationId": "95ba2c6d-9d16-4224-9121-11fc29734643",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:50.071Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "ee74669b-46c2-47fd-9bf1-08ec55f65624",
        "conversationId": "6b4f958e-7afb-45d1-8362-4f5513cfb523",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:58.349Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "478e4dd0-3973-47c9-8e5b-e58f43c9d0b4",
        "conversationId": "64ae22b0-c8da-4f7a-8d9b-09e3b0ac117a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:48.619Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "3d3b0a6b-281e-4206-91d1-5d4cf7f555e3",
        "conversationId": "74313b7b-1863-40f5-897c-8fca476eea3b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:42.513Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "e24a2042-b92d-4fe0-8621-5c4d7ad99e6d",
        "conversationId": "252b767c-613c-4d3c-9fda-72e12b088edf",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:32.395Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "58d2b4d8-227a-4ce7-bcef-bff434565684",
        "conversationId": "e16dafcb-209d-4162-aa4e-a2581659796b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:11.774Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4f2a13c4-7655-4296-bddb-8cd329edd09c",
        "conversationId": "0d0101f2-e084-4eff-8edd-295b0af96ed1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:01.363Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "23fdae15-8ebb-43dc-bb97-086e8ba0abda",
        "conversationId": "22eabbe1-e7f4-4893-a86f-3fcacf4dfb11",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:37.577Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "ab2a798f-8af7-4e0c-af56-58c4a905d60a",
        "conversationId": "bf9869ad-09ab-47b9-a550-6a450c274b4a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:28.161Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "5e84cbe1-d178-4d78-a6eb-028c33d6869f",
        "conversationId": "db03df51-e9c9-4bb9-b380-2771510df593",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:09:09.001Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "0c7d4d6b-fe48-4d6c-b21c-b558932fa8a0",
        "conversationId": "2d7348ab-d8f9-4f3b-bb23-182193d44c1d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:08:59.897Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "33bc3b71-16fc-4e55-9517-9901c1a87a4c",
        "conversationId": "f57108c9-f4c5-4f78-b3f8-674cb115eff0",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:45.488Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "2a9feb56-e3ec-4be9-b61d-70484aac681b",
        "conversationId": "845a3438-fb2e-4471-b14e-088751dcc449",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:37.810Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 528.1 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID
**Status:** ❌ UNKNOWN  
**Duration:** 0.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/123e4567-e89b-12d3-a456-426614174000 (668.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "date": "Thu, 05 Jun 2025 23:18:22 GMT",
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

**⏱️ Duration:** 668.6 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ❌ UNKNOWN  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/012edf28-b621-4f9b-815e-eaab0c998d2e (642.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw"
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
    "content-length": "372",
    "etag": "W/\"174-eZv6PVINSiDnMRHqyKDX79dvI0k\"",
    "date": "Thu, 05 Jun 2025 23:18:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "012edf28-b621-4f9b-815e-eaab0c998d2e",
      "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:17:54.785Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 642.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ❌ UNKNOWN  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (590.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "date": "Thu, 05 Jun 2025 23:18:24 GMT",
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

**⏱️ Duration:** 590.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content
**Status:** ❌ UNKNOWN  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (936.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
  },
  "data": {
    "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086"
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
    "content-length": "10409",
    "etag": "W/\"28a9-FDFxeLEG/0+e3fwQ+xvzyg0uprk\"",
    "date": "Thu, 05 Jun 2025 23:18:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "ac3e25cf-6ecc-49ad-86f8-ef45c92ac96a",
      "conversationId": "39257c4e-027c-4373-b1b9-06ed5fc29086",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "status": "sent",
      "timestamp": "2025-06-05T23:18:25.076Z",
      "attachments": null,
      "location": null,
      "organizationId": "81665f6c-4c43-4e87-8250-fa79a9017b05"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 936.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID
**Status:** ❌ UNKNOWN  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (657.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw",
    "X-Organization-Id": "81665f6c-4c43-4e87-8250-fa79a9017b05"
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
    "date": "Thu, 05 Jun 2025 23:18:25 GMT",
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

**⏱️ Duration:** 657.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/012edf28-b621-4f9b-815e-eaab0c998d2e (761.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw"
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
    "date": "Thu, 05 Jun 2025 23:18:26 GMT",
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

**⏱️ Duration:** 761.8 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/c8186b30-97ce-4af5-ab7b-87f9a82d3d1d (727.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw"
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
    "date": "Thu, 05 Jun 2025 23:18:27 GMT",
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

**⏱️ Duration:** 727.9 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/conversations/39257c4e-027c-4373-b1b9-06ed5fc29086 (850.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw"
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
    "date": "Thu, 05 Jun 2025 23:18:28 GMT",
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

**⏱️ Duration:** 850.2 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/conversations/bb7baaa4-5f10-4a5b-814f-cd6eaf133209 (608.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw"
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
    "date": "Thu, 05 Jun 2025 23:18:29 GMT",
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

**⏱️ Duration:** 608.5 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/81665f6c-4c43-4e87-8250-fa79a9017b05 (1472.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw"
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
    "date": "Thu, 05 Jun 2025 23:18:30 GMT",
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

**⏱️ Duration:** 1472.8 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/f7ffe162-821c-427d-9168-dee7dd537e9d (1358.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NDYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU0NjEsImV4cCI6MTc0OTE2OTA2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i9PnEjpvXOzRW8vLF1Hjc7QxcVaHUzyj6BJrZDh7OWaLpaup9FyOaELd8qVor2wFXhPgPX3CfQYeVxv0f3tWzf_KRfLTeTWAtuod2ySix32_FjAd3GKgXVgW2SR38tb1nRpRFt3HSKxbrgBKOEe0qVcNRbDPv70QzXgYMEv78e3FmJ5H2Zv_FaHLb_2ui8mJNBdPbQhs0V7_tZWgsP5a1lUNSrPQ9_8djQxDpzG6TnhqZ53XEmAdPiJmzRBhnzfsyOg3NgDV0RoEcWcBNOloPoPvxgXJU_A_nUSjDEutO2_fR7AoL118MesJfcHdL5x0BHZ6kYgaSagA-SAp0BqDxw"
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
    "date": "Thu, 05 Jun 2025 23:18:31 GMT",
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

**⏱️ Duration:** 1358.3 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (282.1ms)</summary>

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
    "etag": "W/\"6aa-B72eXBm0mYrVTmdz3gGWy9VspC0\"",
    "date": "Thu, 05 Jun 2025 23:18:32 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NTEyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU1MTIsImV4cCI6MTc0OTE2OTExMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NLQFVU_5OswpRfHkoja217MyEHgYmWSi6ZYBLYvzSWL3aj3VRkg9IE-2ijInRhpI_mR-lsCT1M0F9mMunrd9L4xnho2tP5idGprtG8RJnZoBxtv_3BtXxmzxhMjzimZk5rAlPg4pgvyLIBxft0MBEhnaZQRIjXETCstXd9FvvBx4yCfdHgBw0V6H8jc9ngkO_ilQ2nl9qD47a6ob6duEibTzZ0imtwrXB6EWLlXa1I4jHlC31N7pdRpqLJiI0wnp8umHR9rMftH-DIhGlKbq3ouNYyLjTfmkJjfyLwzwEsDKQV_SM4p3oF0H2CFygJoePMuR26WpRGDigGmWllQeIg",
        "refreshToken": "AMf-vBypzVib1bDIzF3B9JlIAUYxWdmf15QOkc6aPzO2bXDlOxIWrKeQjU4C1E5SAk-XGWtUTZgPmsQw6KzILhsoMnPwN7fbDLgS2ZATr60TF7QImHV7JZWaavCo-f7wwMpa3YM2if2dZtl6cujrLbj4-nKA4-_d0WhBtVX3a8DBhqVn1nok8JsMse9Ms3m30xefzomzWySDGeWsMePUUKcZIAgKYZV_75kOCzCb59opCooWTEIG4YBdc4Eca8hGtaXxMLFZusWV",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 282.1 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/tGAZ3tIspudzlb1FpDLzwbmsbxB3 (1375.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NTEyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU1MTIsImV4cCI6MTc0OTE2OTExMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NLQFVU_5OswpRfHkoja217MyEHgYmWSi6ZYBLYvzSWL3aj3VRkg9IE-2ijInRhpI_mR-lsCT1M0F9mMunrd9L4xnho2tP5idGprtG8RJnZoBxtv_3BtXxmzxhMjzimZk5rAlPg4pgvyLIBxft0MBEhnaZQRIjXETCstXd9FvvBx4yCfdHgBw0V6H8jc9ngkO_ilQ2nl9qD47a6ob6duEibTzZ0imtwrXB6EWLlXa1I4jHlC31N7pdRpqLJiI0wnp8umHR9rMftH-DIhGlKbq3ouNYyLjTfmkJjfyLwzwEsDKQV_SM4p3oF0H2CFygJoePMuR26WpRGDigGmWllQeIg"
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
    "date": "Thu, 05 Jun 2025 23:18:33 GMT",
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

**⏱️ Duration:** 1375.1 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/auth/login (329.5ms)</summary>

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
    "etag": "W/\"6aa-zXK0nkE821Ln26vrWW+39mE/Pjk\"",
    "date": "Thu, 05 Jun 2025 23:18:33 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NTEzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU1MTMsImV4cCI6MTc0OTE2OTExMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kTwVWISR7MFCpkWacfEUEkt08U5vHHPvj-C15upFDAMUYqkGpeBvWxMdgeYp7OqRECShAEZP-y6i1LeWJYGVaIpwGJ_wVtxv6rqmYPo1fuqxwyh9Jive4YSmmvRGou0VL2bDC1Pd3Whfgr9rCeAgiytLvobcTjO5lqIhDYmacJCI10s_z5vkr8TJGivQx-QIEJmdujg-fhqDlVARC7gcaaL10b1FuqYzsdDE0vFs3U9faNElz8l7o8j67vAeCn1zSpkmCJjp7OdDJg1-vc3t4yyhw9cpIUPAcRdpBKkz2tBvBBKbWSHuFUn8ju9ngJ7YVTKE9d3fc095kQAr3Nt2CA",
        "refreshToken": "AMf-vBwktmhuXz083PkD6Gt9PW_lV2C03bBNy34hsu3juabLGTnQX84XhNPOs3Ips4QeS6aP1POg2tF6sKrf375jn3NldNoMdUZsgLddF4Ivq-qfNQQ5jbODCMFMKnttMpnpw3E8t-z9O6CHcsBeSWgJ_Sd4MLIojCUouV8sldoAfXzb28pBWbT8ZdjHGMTSAmCU1GvjH1tJmm5Mdm7Hv-FLaKWl3z3vCzXPnJANxPKVmvMpjC17ZRiGOKtIrdgG9O14oQNw7wge",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 329.5 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/admin/users/5my4d9UMxZRU3dhTRCfU7FzXnqr2 (1198.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY1NTEzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjU1MTMsImV4cCI6MTc0OTE2OTExMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kTwVWISR7MFCpkWacfEUEkt08U5vHHPvj-C15upFDAMUYqkGpeBvWxMdgeYp7OqRECShAEZP-y6i1LeWJYGVaIpwGJ_wVtxv6rqmYPo1fuqxwyh9Jive4YSmmvRGou0VL2bDC1Pd3Whfgr9rCeAgiytLvobcTjO5lqIhDYmacJCI10s_z5vkr8TJGivQx-QIEJmdujg-fhqDlVARC7gcaaL10b1FuqYzsdDE0vFs3U9faNElz8l7o8j67vAeCn1zSpkmCJjp7OdDJg1-vc3t4yyhw9cpIUPAcRdpBKkz2tBvBBKbWSHuFUn8ju9ngJ7YVTKE9d3fc095kQAr3Nt2CA"
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
    "date": "Thu, 05 Jun 2025 23:18:35 GMT",
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

**⏱️ Duration:** 1198.8 ms  

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
- Total messages created: 2
- Total conversations created: 2
- Total organizations created: 2
- Total test users created: 2
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
