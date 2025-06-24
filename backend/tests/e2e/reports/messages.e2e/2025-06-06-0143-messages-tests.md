# E2E Test Report: messages-tests

**Date:** 6/6/2025  
**Time:** 1:43:44 AM  
**Duration:** 74.69s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation | PASSED | 1.57s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content | PASSED | 0.85s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID | PASSED | 0.51s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation | PASSED | 0.91s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant | PASSED | 0.66s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant | PASSED | 3.31s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation | PASSED | 0.97s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format | PASSED | 0.55s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) | PASSED | 0.82s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender | PASSED | 0.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) | PASSED | 2.11s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) | PASSED | 1.69s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user | PASSED | 10.01s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) | PASSED | 0.79s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user | PASSED | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) | PASSED | 8.95s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user | PASSED | 8.02s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization | PASSED | 2.39s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization | PASSED | 1.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization | PASSED | 0.89s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations | PASSED | 0.53s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID | PASSED | 0.66s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.56s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.61s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content | PASSED | 1.01s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID | PASSED | 0.73s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID |


---

## Detailed Execution Log

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation
**Status:** ✅ PASSED  
**Duration:** 1.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1567.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "content": "Hello, this is a test message!",
    "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c"
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
    "etag": "W/\"256-XFnj7J2KkolYetL5zmAENNgdErA\"",
    "date": "Thu, 05 Jun 2025 23:42:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:42:43.540Z",
      "updatedAt": "2025-06-05T23:42:43.946Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 1567.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (842.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c"
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
    "date": "Thu, 05 Jun 2025 23:42:44 GMT",
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

**⏱️ Duration:** 842.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (504.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "date": "Thu, 05 Jun 2025 23:42:45 GMT",
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

**⏱️ Duration:** 504.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation
**Status:** ✅ PASSED  
**Duration:** 0.91s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (908.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Njk1MywidXNlcl9pZCI6Iml1cWl5SG9xZUVkTVlyREtaTDFwcXhHMFBnbjIiLCJzdWIiOiJpdXFpeUhvcWVFZE1ZckRLWkwxcHF4RzBQZ24yIiwiaWF0IjoxNzQ5MTY2OTUzLCJleHAiOjE3NDkxNzA1NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2OTUyNTgzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2Njk1MjU4M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OEq1HVfpGbmjx5jOq9XfiZahPBqnwUU9NGEF_Vrl8z5YT5Lomgo-5OKnCoe6o56tSh_O_MWPvvJFJ0QT-52vAU91-pghxMBcHCHiQx7eg7UPLXacGuRtS-tpXQ7ueS4Jy-U_cku60DbJYyDduUEPrg3xQzfbKN9640vcEZ7HP3TPO-Erd8eQfoKPprdEYjxbRo6LnOPYbIEwkNNGY_EEotRcVv2Q5BI2ErvHxWL_VC5FqYv0xw6zoa8B3MUD2dRTflj3eiEmMLBFAxK8jsPI6DkDbo0U4Mq5Ev3ay0yTrXpWixoCoARTy0-HTc8cUT-nK7Mw00sxjkAOWOa1att4UQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "content": "Group message test",
    "conversationId": "95ebe2e9-4cb6-455d-ba38-9bf937ee6de4"
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
    "etag": "W/\"24a-wIrrgK4lE88nK438qzlkWKntfgQ\"",
    "date": "Thu, 05 Jun 2025 23:42:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "6c9bbabe-9818-4063-8518-f52916f2aadd",
      "conversationId": "95ebe2e9-4cb6-455d-ba38-9bf937ee6de4",
      "senderId": "iuqiyHoqeEdMYrDKZL1pqxG0Pgn2",
      "content": "Group message test",
      "status": "sent",
      "timestamp": "2025-06-05T23:42:46.344Z",
      "updatedAt": "2025-06-05T23:42:46.345Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 908.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/2eb8a756-112f-4010-8469-8bb06e6d1ae7 (661.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "etag": "W/\"213-ZS506i7WGmuVstxT3bw3MXbVN1o\"",
    "date": "Thu, 05 Jun 2025 23:42:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:42:43.540Z",
      "updatedAt": "2025-06-05T23:42:43.946Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 661.4 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 3.31s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1562.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "iuqiyHoqeEdMYrDKZL1pqxG0Pgn2"
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
    "etag": "W/\"1c2-cfGKuZq7LIU9dmsteM6sp+5EvT4\"",
    "date": "Thu, 05 Jun 2025 23:42:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "4b9c6acb-8235-43c9-bd08-5e8e830477dc",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T23:42:48.198Z",
      "lastMessageAt": "2025-06-05T23:42:48.198Z",
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "iuqiyHoqeEdMYrDKZL1pqxG0Pgn2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1562.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (993.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "content": "Private message",
    "conversationId": "4b9c6acb-8235-43c9-bd08-5e8e830477dc"
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
    "etag": "W/\"247-h5ksVtd7m2lRQhyk3+OulY/sdmw\"",
    "date": "Thu, 05 Jun 2025 23:42:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "6822453d-d6b3-4f77-a2ce-7c9ec3c29b7d",
      "conversationId": "4b9c6acb-8235-43c9-bd08-5e8e830477dc",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-05T23:42:49.562Z",
      "updatedAt": "2025-06-05T23:42:49.563Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 993.2 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/messages/6822453d-d6b3-4f77-a2ce-7c9ec3c29b7d (756.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Njk1NSwidXNlcl9pZCI6Ink3WkE1bkJoejRianhwM2lxRGZ2SnVzVGU1ejEiLCJzdWIiOiJ5N1pBNW5CaHo0Ymp4cDNpcURmdkp1c1RlNXoxIiwiaWF0IjoxNzQ5MTY2OTU1LCJleHAiOjE3NDkxNzA1NTUsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjY5NTQwOTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjY5NTQwOTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.PaBAXs2TaypKnkrpcA21o1wOG7SLTypPSv0xW0YTCjRACIjaZIatVCil6YRNLR9ZusxrMw_FFSg6esv2VzRDHlAmYzC55nbEilBQ839mVPSOER5bLdNQZyRSljz1gKXmzN0aom_p8llHZChWiRNe-wcBb4XZtWmqjDZk9Cwom_hs3HcWUtNjVMAG9RNPmA0f9SP0tTXDorkHCT_RmyKGcnK1pmZe_3HdtvFOU7JKVkHCry0WcAW8KXOrDnZL4QD1sv8BvpasWP0yJx5IuLavBrC0ev_M6Z6QNr34kTvnKx23vWaU26g1zKev7hzEnKIk7MhpM_san3YRHL739Nit8g",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "date": "Thu, 05 Jun 2025 23:42:50 GMT",
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

**⏱️ Duration:** 756.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation
**Status:** ✅ PASSED  
**Duration:** 0.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/51fc5236-05ad-4439-a0d3-261fd2900f5c/messages (962.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "etag": "W/\"215-LIoVbSw7tS9fj/oMA0Lni3iXK/w\"",
    "date": "Thu, 05 Jun 2025 23:42:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:43.540Z",
        "updatedAt": "2025-06-05T23:42:43.946Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 962.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/invalid-id (546.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "date": "Thu, 05 Jun 2025 23:42:51 GMT",
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

**⏱️ Duration:** 546.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender)
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/2eb8a756-112f-4010-8469-8bb06e6d1ae7 (815.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "etag": "W/\"249-Nd8fO1s99lwfWbYssqiKtAUqN4E\"",
    "date": "Thu, 05 Jun 2025 23:42:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.updated",
    "data": {
      "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-05T23:42:43.540Z",
      "updatedAt": "2025-06-05T23:42:52.676Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 815.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/2eb8a756-112f-4010-8469-8bb06e6d1ae7 (594.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Njk1MywidXNlcl9pZCI6Iml1cWl5SG9xZUVkTVlyREtaTDFwcXhHMFBnbjIiLCJzdWIiOiJpdXFpeUhvcWVFZE1ZckRLWkwxcHF4RzBQZ24yIiwiaWF0IjoxNzQ5MTY2OTUzLCJleHAiOjE3NDkxNzA1NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2OTUyNTgzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2Njk1MjU4M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OEq1HVfpGbmjx5jOq9XfiZahPBqnwUU9NGEF_Vrl8z5YT5Lomgo-5OKnCoe6o56tSh_O_MWPvvJFJ0QT-52vAU91-pghxMBcHCHiQx7eg7UPLXacGuRtS-tpXQ7ueS4Jy-U_cku60DbJYyDduUEPrg3xQzfbKN9640vcEZ7HP3TPO-Erd8eQfoKPprdEYjxbRo6LnOPYbIEwkNNGY_EEotRcVv2Q5BI2ErvHxWL_VC5FqYv0xw6zoa8B3MUD2dRTflj3eiEmMLBFAxK8jsPI6DkDbo0U4Mq5Ev3ay0yTrXpWixoCoARTy0-HTc8cUT-nK7Mw00sxjkAOWOa1att4UQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "date": "Thu, 05 Jun 2025 23:42:53 GMT",
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

**⏱️ Duration:** 594.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender)
**Status:** ✅ PASSED  
**Duration:** 2.11s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1244.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "content": "Message to be soft deleted",
    "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c"
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
    "etag": "W/\"252-4UvNcQ5JxBt6pxM9cC6GaJz4Twk\"",
    "date": "Thu, 05 Jun 2025 23:42:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "765f4e82-cd05-43c5-8ac8-72e6fdbe8e2e",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be soft deleted",
      "status": "sent",
      "timestamp": "2025-06-05T23:42:54.486Z",
      "updatedAt": "2025-06-05T23:42:54.487Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 1244.0 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/765f4e82-cd05-43c5-8ac8-72e6fdbe8e2e/soft-delete (861.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "etag": "W/\"280-ThElC49U7fRzB1l3rQBDhXxuxhk\"",
    "date": "Thu, 05 Jun 2025 23:42:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "messages.soft_deleted",
    "data": {
      "id": "765f4e82-cd05-43c5-8ac8-72e6fdbe8e2e",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "[Message deleted]",
      "status": "deleted",
      "timestamp": "2025-06-05T23:42:54.486Z",
      "updatedAt": "2025-06-05T23:42:55.389Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
      "deletedAt": "2025-06-05T23:42:55.388Z",
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

**⏱️ Duration:** 861.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin)
**Status:** ✅ PASSED  
**Duration:** 1.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (938.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "content": "Message to be deleted",
    "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c"
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
    "etag": "W/\"24d-zSNmfDwVIke2tEBEGZKXm2nbH+g\"",
    "date": "Thu, 05 Jun 2025 23:42:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "ec0d3f6e-87b5-492f-ad41-858be35103e1",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be deleted",
      "status": "sent",
      "timestamp": "2025-06-05T23:42:56.336Z",
      "updatedAt": "2025-06-05T23:42:56.336Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 938.9 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/ec0d3f6e-87b5-492f-ad41-858be35103e1 (750.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "date": "Thu, 05 Jun 2025 23:42:57 GMT",
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

**⏱️ Duration:** 750.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user
**Status:** ✅ PASSED  
**Duration:** 10.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/messages/2eb8a756-112f-4010-8469-8bb06e6d1ae7 (10007.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Njk1MywidXNlcl9pZCI6Iml1cWl5SG9xZUVkTVlyREtaTDFwcXhHMFBnbjIiLCJzdWIiOiJpdXFpeUhvcWVFZE1ZckRLWkwxcHF4RzBQZ24yIiwiaWF0IjoxNzQ5MTY2OTUzLCJleHAiOjE3NDkxNzA1NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2OTUyNTgzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2Njk1MjU4M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OEq1HVfpGbmjx5jOq9XfiZahPBqnwUU9NGEF_Vrl8z5YT5Lomgo-5OKnCoe6o56tSh_O_MWPvvJFJ0QT-52vAU91-pghxMBcHCHiQx7eg7UPLXacGuRtS-tpXQ7ueS4Jy-U_cku60DbJYyDduUEPrg3xQzfbKN9640vcEZ7HP3TPO-Erd8eQfoKPprdEYjxbRo6LnOPYbIEwkNNGY_EEotRcVv2Q5BI2ErvHxWL_VC5FqYv0xw6zoa8B3MUD2dRTflj3eiEmMLBFAxK8jsPI6DkDbo0U4Mq5Ev3ay0yTrXpWixoCoARTy0-HTc8cUT-nK7Mw00sxjkAOWOa1att4UQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10007.3 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin)
**Status:** ✅ PASSED  
**Duration:** 0.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (784.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "content-length": "15689",
    "etag": "W/\"3d49-h0nAAgKjkJr8DVGXpXJ9ZpipreM\"",
    "date": "Thu, 05 Jun 2025 23:43:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "765f4e82-cd05-43c5-8ac8-72e6fdbe8e2e",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-05T23:42:54.486Z",
        "updatedAt": "2025-06-05T23:42:55.389Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": "2025-06-05T23:42:55.388Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
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
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "6c9bbabe-9818-4063-8518-f52916f2aadd",
        "conversationId": "95ebe2e9-4cb6-455d-ba38-9bf937ee6de4",
        "senderId": "iuqiyHoqeEdMYrDKZL1pqxG0Pgn2",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:46.344Z",
        "updatedAt": "2025-06-05T23:42:46.345Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:43.540Z",
        "updatedAt": "2025-06-05T23:42:52.676Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 784.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (582.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Njk1MywidXNlcl9pZCI6Iml1cWl5SG9xZUVkTVlyREtaTDFwcXhHMFBnbjIiLCJzdWIiOiJpdXFpeUhvcWVFZE1ZckRLWkwxcHF4RzBQZ24yIiwiaWF0IjoxNzQ5MTY2OTUzLCJleHAiOjE3NDkxNzA1NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2OTUyNTgzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2Njk1MjU4M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OEq1HVfpGbmjx5jOq9XfiZahPBqnwUU9NGEF_Vrl8z5YT5Lomgo-5OKnCoe6o56tSh_O_MWPvvJFJ0QT-52vAU91-pghxMBcHCHiQx7eg7UPLXacGuRtS-tpXQ7ueS4Jy-U_cku60DbJYyDduUEPrg3xQzfbKN9640vcEZ7HP3TPO-Erd8eQfoKPprdEYjxbRo6LnOPYbIEwkNNGY_EEotRcVv2Q5BI2ErvHxWL_VC5FqYv0xw6zoa8B3MUD2dRTflj3eiEmMLBFAxK8jsPI6DkDbo0U4Mq5Ev3ay0yTrXpWixoCoARTy0-HTc8cUT-nK7Mw00sxjkAOWOa1att4UQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "etag": "W/\"7dd-U1gRBWsc8gqO/gosZZVvMpVVtSA\"",
    "date": "Thu, 05 Jun 2025 23:43:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "765f4e82-cd05-43c5-8ac8-72e6fdbe8e2e",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-05T23:42:54.486Z",
        "updatedAt": "2025-06-05T23:42:55.389Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": "2025-06-05T23:42:55.388Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
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
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "6c9bbabe-9818-4063-8518-f52916f2aadd",
        "conversationId": "95ebe2e9-4cb6-455d-ba38-9bf937ee6de4",
        "senderId": "iuqiyHoqeEdMYrDKZL1pqxG0Pgn2",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:46.344Z",
        "updatedAt": "2025-06-05T23:42:46.345Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:43.540Z",
        "updatedAt": "2025-06-05T23:42:52.676Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator)
**Status:** ✅ PASSED  
**Duration:** 8.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (938.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "content": "Message that needs moderation",
    "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c"
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
    "etag": "W/\"255-XpUeF7nVyrnLkEoQyU93w1EHtGs\"",
    "date": "Thu, 05 Jun 2025 23:43:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "747b627f-d147-4fbf-a689-7cf45d04f141",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that needs moderation",
      "status": "sent",
      "timestamp": "2025-06-05T23:43:09.428Z",
      "updatedAt": "2025-06-05T23:43:09.429Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 938.8 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/747b627f-d147-4fbf-a689-7cf45d04f141/moderate (8005.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Njk1NSwidXNlcl9pZCI6Ink3WkE1bkJoejRianhwM2lxRGZ2SnVzVGU1ejEiLCJzdWIiOiJ5N1pBNW5CaHo0Ymp4cDNpcURmdkp1c1RlNXoxIiwiaWF0IjoxNzQ5MTY2OTU1LCJleHAiOjE3NDkxNzA1NTUsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjY5NTQwOTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjY5NTQwOTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.PaBAXs2TaypKnkrpcA21o1wOG7SLTypPSv0xW0YTCjRACIjaZIatVCil6YRNLR9ZusxrMw_FFSg6esv2VzRDHlAmYzC55nbEilBQ839mVPSOER5bLdNQZyRSljz1gKXmzN0aom_p8llHZChWiRNe-wcBb4XZtWmqjDZk9Cwom_hs3HcWUtNjVMAG9RNPmA0f9SP0tTXDorkHCT_RmyKGcnK1pmZe_3HdtvFOU7JKVkHCry0WcAW8KXOrDnZL4QD1sv8BvpasWP0yJx5IuLavBrC0ev_M6Z6QNr34kTvnKx23vWaU26g1zKev7hzEnKIk7MhpM_san3YRHL739Nit8g",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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

**⏱️ Duration:** 8005.4 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user
**Status:** ✅ PASSED  
**Duration:** 8.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/2eb8a756-112f-4010-8469-8bb06e6d1ae7/moderate (8012.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Njk1MywidXNlcl9pZCI6Iml1cWl5SG9xZUVkTVlyREtaTDFwcXhHMFBnbjIiLCJzdWIiOiJpdXFpeUhvcWVFZE1ZckRLWkwxcHF4RzBQZ24yIiwiaWF0IjoxNzQ5MTY2OTUzLCJleHAiOjE3NDkxNzA1NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2OTUyNTgzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2Njk1MjU4M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OEq1HVfpGbmjx5jOq9XfiZahPBqnwUU9NGEF_Vrl8z5YT5Lomgo-5OKnCoe6o56tSh_O_MWPvvJFJ0QT-52vAU91-pghxMBcHCHiQx7eg7UPLXacGuRtS-tpXQ7ueS4Jy-U_cku60DbJYyDduUEPrg3xQzfbKN9640vcEZ7HP3TPO-Erd8eQfoKPprdEYjxbRo6LnOPYbIEwkNNGY_EEotRcVv2Q5BI2ErvHxWL_VC5FqYv0xw6zoa8B3MUD2dRTflj3eiEmMLBFAxK8jsPI6DkDbo0U4Mq5Ev3ay0yTrXpWixoCoARTy0-HTc8cUT-nK7Mw00sxjkAOWOa1att4UQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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

**⏱️ Duration:** 8012.8 ms  
**❌ Error:** timeout of 8000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1379.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "85046563-bdca-4a58-8b4c-98ebbfbc123a"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "iuqiyHoqeEdMYrDKZL1pqxG0Pgn2"
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
    "etag": "W/\"1bf-1H6WPTVT4nfI3vbLwoHaml5/ndM\"",
    "date": "Thu, 05 Jun 2025 23:43:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "d889b0d0-43e8-4c5b-a35f-66e5d2ac996f",
      "title": "Org2 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T23:43:26.439Z",
      "lastMessageAt": "2025-06-05T23:43:26.439Z",
      "organizationId": "85046563-bdca-4a58-8b4c-98ebbfbc123a",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "iuqiyHoqeEdMYrDKZL1pqxG0Pgn2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1379.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (1003.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "85046563-bdca-4a58-8b4c-98ebbfbc123a"
  },
  "data": {
    "content": "Message in organization 2",
    "conversationId": "d889b0d0-43e8-4c5b-a35f-66e5d2ac996f"
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
    "etag": "W/\"251-bigNgXyObNVjLzqOBf9yfKp/Bjk\"",
    "date": "Thu, 05 Jun 2025 23:43:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "54a35aa0-91c7-43d2-957d-621b1178e159",
      "conversationId": "d889b0d0-43e8-4c5b-a35f-66e5d2ac996f",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-05T23:43:27.797Z",
      "updatedAt": "2025-06-05T23:43:27.798Z",
      "attachments": null,
      "location": null,
      "organizationId": "85046563-bdca-4a58-8b4c-98ebbfbc123a",
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

**⏱️ Duration:** 1003.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization
**Status:** ✅ PASSED  
**Duration:** 1.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (916.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "content": "Org1 only message",
    "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c"
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
    "etag": "W/\"249-1y0tQPgNEht4bCMGT+a/hBmQb5s\"",
    "date": "Thu, 05 Jun 2025 23:43:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "d030bcf2-641b-41cd-9dc5-3ecb922807fe",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-05T23:43:28.774Z",
      "updatedAt": "2025-06-05T23:43:28.775Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 916.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/d030bcf2-641b-41cd-9dc5-3ecb922807fe (674.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "85046563-bdca-4a58-8b4c-98ebbfbc123a"
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
    "etag": "W/\"206-yLhn4rGzxhYsNmxfur2n/62qhfk\"",
    "date": "Thu, 05 Jun 2025 23:43:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "d030bcf2-641b-41cd-9dc5-3ecb922807fe",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-05T23:43:28.774Z",
      "updatedAt": "2025-06-05T23:43:28.775Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 674.0 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.89s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/51fc5236-05ad-4439-a0d3-261fd2900f5c/messages (888.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "etag": "W/\"7ea-v7XCc2ECDg3cAJWXJtlwn46NAP8\"",
    "date": "Thu, 05 Jun 2025 23:43:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:43.540Z",
        "updatedAt": "2025-06-05T23:42:52.676Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "765f4e82-cd05-43c5-8ac8-72e6fdbe8e2e",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-05T23:42:54.486Z",
        "updatedAt": "2025-06-05T23:42:55.389Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": "2025-06-05T23:42:55.388Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "747b627f-d147-4fbf-a689-7cf45d04f141",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-05T23:43:09.428Z",
        "updatedAt": "2025-06-05T23:43:09.429Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "d030bcf2-641b-41cd-9dc5-3ecb922807fe",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-05T23:43:28.774Z",
        "updatedAt": "2025-06-05T23:43:28.775Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 888.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (528.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "content-length": "17146",
    "etag": "W/\"42fa-oB2Gejke14P4WtNqRntiz/Wwyh8\"",
    "date": "Thu, 05 Jun 2025 23:43:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "d030bcf2-641b-41cd-9dc5-3ecb922807fe",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-05T23:43:28.774Z",
        "updatedAt": "2025-06-05T23:43:28.775Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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
        "organizationId": "85046563-bdca-4a58-8b4c-98ebbfbc123a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "747b627f-d147-4fbf-a689-7cf45d04f141",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-05T23:43:09.428Z",
        "updatedAt": "2025-06-05T23:43:09.429Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "765f4e82-cd05-43c5-8ac8-72e6fdbe8e2e",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "[Message deleted]",
        "status": "deleted",
        "timestamp": "2025-06-05T23:42:54.486Z",
        "updatedAt": "2025-06-05T23:42:55.389Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": "2025-06-05T23:42:55.388Z",
        "deletedBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
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
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "6c9bbabe-9818-4063-8518-f52916f2aadd",
        "conversationId": "95ebe2e9-4cb6-455d-ba38-9bf937ee6de4",
        "senderId": "iuqiyHoqeEdMYrDKZL1pqxG0Pgn2",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:46.344Z",
        "updatedAt": "2025-06-05T23:42:46.345Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
        "deletedAt": null,
        "deletedBy": null,
        "moderationStatus": null,
        "moderatedAt": null,
        "moderatedBy": null,
        "moderationReason": null
      },
      {
        "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
        "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Updated message content",
        "status": "sent",
        "timestamp": "2025-06-05T23:42:43.540Z",
        "updatedAt": "2025-06-05T23:42:52.676Z",
        "attachments": null,
        "location": null,
        "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 528.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/123e4567-e89b-12d3-a456-426614174000 (653.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "date": "Thu, 05 Jun 2025 23:43:31 GMT",
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

**⏱️ Duration:** 653.5 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/2eb8a756-112f-4010-8469-8bb06e6d1ae7 (555.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "etag": "W/\"20c-R6tUZWAj6Ufm8KcPW6V8wWxkGF4\"",
    "date": "Thu, 05 Jun 2025 23:43:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "2eb8a756-112f-4010-8469-8bb06e6d1ae7",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Updated message content",
      "status": "sent",
      "timestamp": "2025-06-05T23:42:43.540Z",
      "updatedAt": "2025-06-05T23:42:52.676Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 555.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (608.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "date": "Thu, 05 Jun 2025 23:43:32 GMT",
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

**⏱️ Duration:** 608.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content
**Status:** ✅ PASSED  
**Duration:** 1.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1005.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
  },
  "data": {
    "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c"
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
    "etag": "W/\"2948-+dvPMgkzlNazNKTXSQ8su8BhxMk\"",
    "date": "Thu, 05 Jun 2025 23:43:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "8d43129e-54f7-474a-9e72-0303fa81ab35",
      "conversationId": "51fc5236-05ad-4439-a0d3-261fd2900f5c",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "status": "sent",
      "timestamp": "2025-06-05T23:43:33.739Z",
      "updatedAt": "2025-06-05T23:43:33.740Z",
      "attachments": null,
      "location": null,
      "organizationId": "83c8e790-562e-4f3a-a977-15da52c73b7a",
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

**⏱️ Duration:** 1005.6 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (726.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ",
    "X-Organization-Id": "83c8e790-562e-4f3a-a977-15da52c73b7a"
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
    "date": "Thu, 05 Jun 2025 23:43:34 GMT",
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

**⏱️ Duration:** 726.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/2eb8a756-112f-4010-8469-8bb06e6d1ae7 (716.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "date": "Thu, 05 Jun 2025 23:43:35 GMT",
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

**⏱️ Duration:** 716.9 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/6c9bbabe-9818-4063-8518-f52916f2aadd (713.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "date": "Thu, 05 Jun 2025 23:43:36 GMT",
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

**⏱️ Duration:** 713.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/747b627f-d147-4fbf-a689-7cf45d04f141 (716.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "date": "Thu, 05 Jun 2025 23:43:36 GMT",
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

**⏱️ Duration:** 716.8 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/conversations/51fc5236-05ad-4439-a0d3-261fd2900f5c (692.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "date": "Thu, 05 Jun 2025 23:43:37 GMT",
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

**⏱️ Duration:** 692.3 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/conversations/95ebe2e9-4cb6-455d-ba38-9bf937ee6de4 (689.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "date": "Thu, 05 Jun 2025 23:43:38 GMT",
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

**⏱️ Duration:** 689.8 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/83c8e790-562e-4f3a-a977-15da52c73b7a (1420.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "date": "Thu, 05 Jun 2025 23:43:39 GMT",
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

**⏱️ Duration:** 1420.5 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/85046563-bdca-4a58-8b4c-98ebbfbc123a (1204.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2OTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjY5NTAsImV4cCI6MTc0OTE3MDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MFjE43Cc4Ptw_0mx7vjDqU0ieKvkvByvgGOKfwVCbsx7Ge0JlD3FYDNTCGRDYqPeCkmHDagp-LEnZSncHYSE5s7W7rPpsgKr8wcSScCMF3R9swuciKC8SpV6bgdLZNwtfAscpHGXhVXVXPMH8U0viqRI4ceCqKeosXy2n5VhBu16QNSJOdh87IFefsm55Tf-9GoZPsjTZKQ0EkPP-w32uWiwkSoo0ZljnA6prXGW7ZZ0sMvl_RCoe8I2oNest4OKNMBjjjWjr2IIfbXpqSLdT886zPIAkhF6g-03v82JhyCKageNDx6Tq0BJ32YAzwpLSovKHDERtrJlbbUlFNvrqQ"
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
    "date": "Thu, 05 Jun 2025 23:43:40 GMT",
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

**⏱️ Duration:** 1204.4 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/login (367.4ms)</summary>

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
    "etag": "W/\"6aa-jMzwc3PTKkDRxRwWrz4Knsbs6nE\"",
    "date": "Thu, 05 Jun 2025 23:43:41 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY3MDIwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjcwMjAsImV4cCI6MTc0OTE3MDYyMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hl30oDOsPva_FCsOErA2RpgeQw6GWioM29IaZp9E_TftqAeI5eqF0vg4GmyKp4aslDg3rJHx9VRkBw0u9XkqxWvvnGpUqYCPsff9dyftGDs3rzkUli8a3c3nmGp6bOOZ4Cc8MFxI3aMKnfQNzu3cc7Q_W_LrNDBwq__6sytpGWipAUG-EOEqX53c39grQfMeeiUgjTKOj4hmFvyHIFj_LS2XpbmXEYudJIWEMR6tHUKqL4KkWyXejRZLcczo0JfYqHJBQ_jUC6vbgouuq4eONl26n4bKN4Dsvwh-jEUTfeZ9TA5D7jcOy_wk2V8uG9LCIf_rKdPFxJWIy-unsT0k5Q",
        "refreshToken": "AMf-vBxezqzuucX6Qri76FrCh9z-qRJPtGmXjGWwqOjrirbZcZ7I4lcPdkMZz3slqgiuRUxowx8LLO0BQEtHTqI10pZvG9EsauExooKjnLMCsm1JnHcfMbB5Y13Zp0Jat7gG7NiQqSnAhnL286ImPE8t2c8k-ZmsI4hy8WdWad7YBnZoQ5LmRPFbMWsZqTmlugpooWfZGnc-jEPHqlOW2WIM7QG_BYEKSVYq3b7RPgPvwRuJUsQrl9hkDrpjss0uNBdrH_C5oU51",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 367.4 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/admin/users/iuqiyHoqeEdMYrDKZL1pqxG0Pgn2 (1507.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY3MDIwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjcwMjAsImV4cCI6MTc0OTE3MDYyMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hl30oDOsPva_FCsOErA2RpgeQw6GWioM29IaZp9E_TftqAeI5eqF0vg4GmyKp4aslDg3rJHx9VRkBw0u9XkqxWvvnGpUqYCPsff9dyftGDs3rzkUli8a3c3nmGp6bOOZ4Cc8MFxI3aMKnfQNzu3cc7Q_W_LrNDBwq__6sytpGWipAUG-EOEqX53c39grQfMeeiUgjTKOj4hmFvyHIFj_LS2XpbmXEYudJIWEMR6tHUKqL4KkWyXejRZLcczo0JfYqHJBQ_jUC6vbgouuq4eONl26n4bKN4Dsvwh-jEUTfeZ9TA5D7jcOy_wk2V8uG9LCIf_rKdPFxJWIy-unsT0k5Q"
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
    "date": "Thu, 05 Jun 2025 23:43:42 GMT",
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

**⏱️ Duration:** 1507.2 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (281.3ms)</summary>

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
    "etag": "W/\"6aa-5yfsWG8saO7ONIpoz6rH6hY5HjQ\"",
    "date": "Thu, 05 Jun 2025 23:43:42 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY3MDIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjcwMjIsImV4cCI6MTc0OTE3MDYyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lP89I1KptRrNNaQK9cNpT4z_Crq8zV5ql1M1kUH4khiPQzOEzuobOYSkoRgaJzOtzf3BUMIHQvUTHwfpY9pEmYtAWImy3I0NmaWblNor1iMEl6cYmRPYh7tgVv2yakXf6ZPAOwgQpjbwZs74qBS9Iws_7IWKlIFuaHnVlad1rCJ47Jdc7kMhj_CcBnsZKw9n7rqEDMEXVbJ-dztVTJ3MQL3Wf6Ck2yoGau8Ds1HM7jJPUsF5aARtwCxnn1fvGVWRBuSBUwh8cp94QjSMdd2GXb_up8f8cHpsa5RNXrhn3h0KUPhuxeGuhcj_YgJH3M5tPutlCrXgNGHR0I3gMHpxrw",
        "refreshToken": "AMf-vBxYYFhPVDrBcIGLStXadk96b3ljENayiHfzjbfufF0Tc2lz_C67N8JmI0MrlAD0lMbS2az5ekAIAFQ_gqdNKlAU4O3SgJ-6q8yhdp1A6i9EiMvouNlMTCldJy9qNr35jTk17yJhX-KAyaFtoP-0Dyk02y5WWq4FpRiq6oh-tFixy0Z_Noiypcgh2sSGfl6J6XHw52MBW0TTjZIrqWvGJ3ft9b0rkaGPdreR6_lgbn5LvEMPNfDB0mAmDPywIH3MVWW8f8YH",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 281.3 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/y7ZA5nBhz4bjxp3iqDfvJusTe5z1 (1243.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY3MDIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjcwMjIsImV4cCI6MTc0OTE3MDYyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lP89I1KptRrNNaQK9cNpT4z_Crq8zV5ql1M1kUH4khiPQzOEzuobOYSkoRgaJzOtzf3BUMIHQvUTHwfpY9pEmYtAWImy3I0NmaWblNor1iMEl6cYmRPYh7tgVv2yakXf6ZPAOwgQpjbwZs74qBS9Iws_7IWKlIFuaHnVlad1rCJ47Jdc7kMhj_CcBnsZKw9n7rqEDMEXVbJ-dztVTJ3MQL3Wf6Ck2yoGau8Ds1HM7jJPUsF5aARtwCxnn1fvGVWRBuSBUwh8cp94QjSMdd2GXb_up8f8cHpsa5RNXrhn3h0KUPhuxeGuhcj_YgJH3M5tPutlCrXgNGHR0I3gMHpxrw"
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
    "date": "Thu, 05 Jun 2025 23:43:44 GMT",
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

**⏱️ Duration:** 1243.9 ms  

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
