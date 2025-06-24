# E2E Test Report: conversations-tests

**Date:** 6/6/2025  
**Time:** 12:09:50 AM  
**Duration:** 53.08s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants | PASSED | 2.95s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants | PASSED | 1.23s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array | PASSED | 0.62s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants | PASSED | 1.14s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant | PASSED | 0.88s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant | PASSED | 1.89s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user | PASSED | 0.96s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission | PASSED | 10.08s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format | PASSED | 0.72s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user | PASSED | 0.95s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user | PASSED | 0.85s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user | PASSED | 1.10s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator) | PASSED | 0.88s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator) | PASSED | 0.92s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user | PASSED | 0.66s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin) | PASSED | 2.12s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user | PASSED | 0.67s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin) | PASSED | 1.08s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user | PASSED | 0.59s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization | PASSED | 1.11s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization | PASSED | 1.83s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization | PASSED | 1.05s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations | PASSED | 1.10s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID | PASSED | 0.76s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.01s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.63s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data |


---

## Detailed Execution Log

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2942.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "tJzLviGEX8WYnurMFr7ikPjkH2V2"
    ],
    "title": "Test Conversation",
    "type": "direct"
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
    "etag": "W/\"1bf-LYKu3GwhT/DGyrO9uyTxcUNKoaU\"",
    "date": "Thu, 05 Jun 2025 22:09:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "fc38e8c5-177a-438b-b072-f9cdd0363f67",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:09:08.522Z",
      "lastMessageAt": "2025-06-05T22:09:08.522Z",
      "organizationId": "7454f103-16dd-4749-beca-70f331550735",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tJzLviGEX8WYnurMFr7ikPjkH2V2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 2942.3 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 1.23s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1226.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
    ],
    "title": "Invalid Conversation"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "155",
    "etag": "W/\"9b-Qeeg6DQ97kA3zSyvXdvgyd+ipb4\"",
    "date": "Thu, 05 Jun 2025 22:09:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "errors.map is not a function"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1226.2 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (618.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "title": "Invalid Conversation"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "155",
    "etag": "W/\"9b-Qeeg6DQ97kA3zSyvXdvgyd+ipb4\"",
    "date": "Thu, 05 Jun 2025 22:09:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "errors.map is not a function"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 618.7 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.14s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1134.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "tJzLviGEX8WYnurMFr7ikPjkH2V2",
      "HPnubvNZXFabYmXgn3AvZEHgu0k1"
    ],
    "title": "Group Test Conversation",
    "type": "group"
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
    "content-length": "483",
    "etag": "W/\"1e3-6VR3rgcnaWfeyLRxWRBK0kiLKOk\"",
    "date": "Thu, 05 Jun 2025 22:09:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "07875c59-5cf1-4e4a-994d-88afd4c47959",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-05T22:09:12.103Z",
      "lastMessageAt": "2025-06-05T22:09:12.103Z",
      "organizationId": "7454f103-16dd-4749-beca-70f331550735",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tJzLviGEX8WYnurMFr7ikPjkH2V2",
        "HPnubvNZXFabYmXgn3AvZEHgu0k1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1134.6 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/fc38e8c5-177a-438b-b072-f9cdd0363f67 (868.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "content-length": "378",
    "etag": "W/\"17a-kjaGhXBLznpnFh50PIQz+bnrlMA\"",
    "date": "Thu, 05 Jun 2025 22:09:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "fc38e8c5-177a-438b-b072-f9cdd0363f67",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:09:08.522Z",
      "lastMessageAt": "2025-06-05T22:09:08.522Z",
      "organizationId": "7454f103-16dd-4749-beca-70f331550735",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tJzLviGEX8WYnurMFr7ikPjkH2V2"
      ],
      "messages": []
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 868.2 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.89s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1090.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "tJzLviGEX8WYnurMFr7ikPjkH2V2"
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
    "etag": "W/\"1c2-t0BYa8ryIwTV58pxa9gU+5Airog\"",
    "date": "Thu, 05 Jun 2025 22:09:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "0e569b88-f9de-437a-ac3a-14a616a50b32",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:09:14.248Z",
      "lastMessageAt": "2025-06-05T22:09:14.248Z",
      "organizationId": "7454f103-16dd-4749-beca-70f331550735",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tJzLviGEX8WYnurMFr7ikPjkH2V2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1090.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/0e569b88-f9de-437a-ac3a-14a616a50b32 (787.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MywidXNlcl9pZCI6IkhQbnVidk5aWEZhYlltWGduM0F2WkVIZ3UwazEiLCJzdWIiOiJIUG51YnZOWlhGYWJZbVhnbjNBdlpFSGd1MGsxIiwiaWF0IjoxNzQ5MTYxMzQzLCJleHAiOjE3NDkxNjQ5NDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTE2MTM0MjIxNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5MTYxMzQyMjE1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oXMWeao2AqG0lt2p5UlMjdt4xyO-2Vwgel2a_9tQdWJKgItaYNxr5-LanGciq6jmOHIHPwhpNpSp-r-EzYiejTOJgQX_8AxLEPpqK8Atc9y8pEewmKQ0UmOQe3yEUl8cREdinhD9UmccH9MZpUgh5QQ-WndxKcqQ0D_y6i8-5OXgDYn4TE6CHSxN5hERtP5bN30MBlRrEXZiT6SI0MCypK_MVfrfeE8ishVOd6JJPDVPk4MfQzBVZyMuLQL7twQT6c-1ZpXkOVOZQOcEpqSdEQP0dPBBi7h54SAnjd4BNPP4QzEKVUePrFTDX2jt1TGp3uMQVkf0gP7wTWFYbQCTgQ",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "content-length": "165",
    "etag": "W/\"a5-05uAKX6jg2jwt0W8bYHRj6L8eRc\"",
    "date": "Thu, 05 Jun 2025 22:09:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "You must be a participant to view this conversation",
    "details": {},
    "messageKey": "conversations.must_be_participant_to_view",
    "language": "en"
  }
}
```

**⏱️ Duration:** 787.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.96s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tJzLviGEX8WYnurMFr7ikPjkH2V2 (957.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "content-length": "1097",
    "etag": "W/\"449-evqTdh5lrGoAuECc6/hXkyS2+sM\"",
    "date": "Thu, 05 Jun 2025 22:09:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "0e569b88-f9de-437a-ac3a-14a616a50b32",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:14.248Z",
        "lastMessageAt": "2025-06-05T22:09:14.248Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      },
      {
        "id": "07875c59-5cf1-4e4a-994d-88afd4c47959",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T22:09:12.103Z",
        "lastMessageAt": "2025-06-05T22:09:12.103Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2",
          "HPnubvNZXFabYmXgn3AvZEHgu0k1"
        ],
        "messages": []
      },
      {
        "id": "fc38e8c5-177a-438b-b072-f9cdd0363f67",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:08.522Z",
        "lastMessageAt": "2025-06-05T22:09:08.522Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      }
    ],
    "language": "en"
  }
}
```

**⏱️ Duration:** 957.0 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission
**Status:** ✅ PASSED  
**Duration:** 10.08s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10053.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10053.9 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (715.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "159",
    "etag": "W/\"9f-5LqFVHenuh4DLMqIKScEU9tR22Y\"",
    "date": "Thu, 05 Jun 2025 22:09:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_retrieving",
    "details": {
      "details": "errors.map is not a function"
    },
    "messageKey": "common.error_retrieving",
    "language": "en"
  }
}
```

**⏱️ Duration:** 715.0 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/fc38e8c5-177a-438b-b072-f9cdd0363f67/soft-delete (946.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "userId": "tJzLviGEX8WYnurMFr7ikPjkH2V2"
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
    "content-length": "186",
    "etag": "W/\"ba-QA/GefgJLbh3Ubr8ipUYv6urXWY\"",
    "date": "Thu, 05 Jun 2025 22:09:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation deleted successfully",
    "data": {
      "success": true,
      "message": "Conversation soft deleted for user"
    },
    "messageKey": "conversations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 946.3 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/fc38e8c5-177a-438b-b072-f9cdd0363f67/hide (844.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "userId": "tJzLviGEX8WYnurMFr7ikPjkH2V2"
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
    "content-length": "165",
    "etag": "W/\"a5-jWej01wpI49NWZ3/lYg3xxVAlH8\"",
    "date": "Thu, 05 Jun 2025 22:09:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden",
    "data": {
      "success": true,
      "message": "Conversation hidden for user"
    },
    "messageKey": "conversations.hidden",
    "language": "en"
  }
}
```

**⏱️ Duration:** 844.7 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 1.10s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/fc38e8c5-177a-438b-b072-f9cdd0363f67/unhide (1081.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "userId": "tJzLviGEX8WYnurMFr7ikPjkH2V2"
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
    "content-length": "171",
    "etag": "W/\"ab-n+jpDwYPp26OKYrSciaEXJw+6n0\"",
    "date": "Thu, 05 Jun 2025 22:09:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden",
    "data": {
      "success": true,
      "message": "Conversation unhidden for user"
    },
    "messageKey": "conversations.unhidden",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1081.2 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/07875c59-5cf1-4e4a-994d-88afd4c47959/block (869.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MywidXNlcl9pZCI6IkhQbnVidk5aWEZhYlltWGduM0F2WkVIZ3UwazEiLCJzdWIiOiJIUG51YnZOWlhGYWJZbVhnbjNBdlpFSGd1MGsxIiwiaWF0IjoxNzQ5MTYxMzQzLCJleHAiOjE3NDkxNjQ5NDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTE2MTM0MjIxNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5MTYxMzQyMjE1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oXMWeao2AqG0lt2p5UlMjdt4xyO-2Vwgel2a_9tQdWJKgItaYNxr5-LanGciq6jmOHIHPwhpNpSp-r-EzYiejTOJgQX_8AxLEPpqK8Atc9y8pEewmKQ0UmOQe3yEUl8cREdinhD9UmccH9MZpUgh5QQ-WndxKcqQ0D_y6i8-5OXgDYn4TE6CHSxN5hERtP5bN30MBlRrEXZiT6SI0MCypK_MVfrfeE8ishVOd6JJPDVPk4MfQzBVZyMuLQL7twQT6c-1ZpXkOVOZQOcEpqSdEQP0dPBBi7h54SAnjd4BNPP4QzEKVUePrFTDX2jt1TGp3uMQVkf0gP7wTWFYbQCTgQ",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "userId": "HPnubvNZXFabYmXgn3AvZEHgu0k1"
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
    "content-length": "168",
    "etag": "W/\"a8-FiAOXF0Pw1unuFlshWxhW33zaaQ\"",
    "date": "Thu, 05 Jun 2025 22:09:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked",
    "data": {
      "success": true,
      "message": "Conversation blocked for user"
    },
    "messageKey": "conversations.blocked",
    "language": "en"
  }
}
```

**⏱️ Duration:** 869.8 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/07875c59-5cf1-4e4a-994d-88afd4c47959/unblock (914.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MywidXNlcl9pZCI6IkhQbnVidk5aWEZhYlltWGduM0F2WkVIZ3UwazEiLCJzdWIiOiJIUG51YnZOWlhGYWJZbVhnbjNBdlpFSGd1MGsxIiwiaWF0IjoxNzQ5MTYxMzQzLCJleHAiOjE3NDkxNjQ5NDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTE2MTM0MjIxNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5MTYxMzQyMjE1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oXMWeao2AqG0lt2p5UlMjdt4xyO-2Vwgel2a_9tQdWJKgItaYNxr5-LanGciq6jmOHIHPwhpNpSp-r-EzYiejTOJgQX_8AxLEPpqK8Atc9y8pEewmKQ0UmOQe3yEUl8cREdinhD9UmccH9MZpUgh5QQ-WndxKcqQ0D_y6i8-5OXgDYn4TE6CHSxN5hERtP5bN30MBlRrEXZiT6SI0MCypK_MVfrfeE8ishVOd6JJPDVPk4MfQzBVZyMuLQL7twQT6c-1ZpXkOVOZQOcEpqSdEQP0dPBBi7h54SAnjd4BNPP4QzEKVUePrFTDX2jt1TGp3uMQVkf0gP7wTWFYbQCTgQ",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "userId": "HPnubvNZXFabYmXgn3AvZEHgu0k1"
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
    "content-length": "174",
    "etag": "W/\"ae-bkTS/mriI+IClWiNTQ3RtkMDpQ8\"",
    "date": "Thu, 05 Jun 2025 22:09:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked",
    "data": {
      "success": true,
      "message": "Conversation unblocked for user"
    },
    "messageKey": "conversations.unblocked",
    "language": "en"
  }
}
```

**⏱️ Duration:** 914.2 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/fc38e8c5-177a-438b-b072-f9cdd0363f67/block (653.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "userId": "tJzLviGEX8WYnurMFr7ikPjkH2V2"
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
    "content-length": "89",
    "etag": "W/\"59-EJtKrw0eqMSOH/xfuajJG4OlIpM\"",
    "date": "Thu, 05 Jun 2025 22:09:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 653.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 2.12s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1073.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "tJzLviGEX8WYnurMFr7ikPjkH2V2"
    ],
    "title": "Conversation to Delete"
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
    "content-length": "452",
    "etag": "W/\"1c4-aIQGGtQL3AJKdWOyjOTLRY5oJyQ\"",
    "date": "Thu, 05 Jun 2025 22:09:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "da15303f-2ae6-4917-b085-b9774296d339",
      "title": "Conversation to Delete",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:09:33.339Z",
      "lastMessageAt": "2025-06-05T22:09:33.339Z",
      "organizationId": "7454f103-16dd-4749-beca-70f331550735",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tJzLviGEX8WYnurMFr7ikPjkH2V2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1073.0 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/da15303f-2ae6-4917-b085-b9774296d339 (1043.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "date": "Thu, 05 Jun 2025 22:09:34 GMT",
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

**⏱️ Duration:** 1043.6 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/fc38e8c5-177a-438b-b072-f9cdd0363f67 (668.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "content-length": "89",
    "etag": "W/\"59-EJtKrw0eqMSOH/xfuajJG4OlIpM\"",
    "date": "Thu, 05 Jun 2025 22:09:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 668.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.08s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (1071.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "content-length": "29922",
    "etag": "W/\"74e2-VJamdwrrOazTONcc1vIuTJXShx8\"",
    "date": "Thu, 05 Jun 2025 22:09:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "0e569b88-f9de-437a-ac3a-14a616a50b32",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:14.248Z",
        "lastMessageAt": "2025-06-05T22:09:14.248Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "tJzLviGEX8WYnurMFr7ikPjkH2V2",
            "email": "conversations-regular-1749161340951@example.com",
            "name": "Regular User"
          }
        ],
        "messages": []
      },
      {
        "id": "07875c59-5cf1-4e4a-994d-88afd4c47959",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T22:09:12.103Z",
        "lastMessageAt": "2025-06-05T22:09:12.103Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "tJzLviGEX8WYnurMFr7ikPjkH2V2",
            "email": "conversations-regular-1749161340951@example.com",
            "name": "Regular User"
          },
          {
            "id": "HPnubvNZXFabYmXgn3AvZEHgu0k1",
            "email": "conversations-moderator-1749161342215@example.com",
            "name": "Moderator User"
          }
        ],
        "messages": []
      },
      {
        "id": "fc38e8c5-177a-438b-b072-f9cdd0363f67",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:08.522Z",
        "lastMessageAt": "2025-06-05T22:09:08.522Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "tJzLviGEX8WYnurMFr7ikPjkH2V2",
            "email": "conversations-regular-1749161340951@example.com",
            "name": "Regular User"
          }
        ],
        "messages": []
      },
      {
        "id": "ea555d11-3b70-4fcc-9279-7935137641b1",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:07:54.126Z",
        "lastMessageAt": "2025-06-05T22:07:54.126Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "57f4b422-52d2-4291-bf50-c059009871bc",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:07:53.140Z",
        "lastMessageAt": "2025-06-05T22:07:53.140Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "4426259b-35d2-4de8-ac57-85ca075db8a5",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:07:30.041Z",
        "lastMessageAt": "2025-06-05T22:07:30.041Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "47406cb1-9f0c-4dab-b735-3e334de60d90",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:01:36.501Z",
        "lastMessageAt": "2025-06-05T22:01:36.501Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "9302acde-c0f5-44a3-9101-b89d8727d6bc",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:01:35.235Z",
        "lastMessageAt": "2025-06-05T22:01:35.235Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "c195ae62-9684-4cbe-a5b6-432d790a0262",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:01:12.846Z",
        "lastMessageAt": "2025-06-05T22:01:12.846Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "74313b7b-1863-40f5-897c-8fca476eea3b",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T21:57:41.298Z",
        "lastMessageAt": "2025-06-05T21:57:42.626Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "252b767c-613c-4d3c-9fda-72e12b088edf",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T21:57:31.283Z",
        "lastMessageAt": "2025-06-05T21:57:32.455Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "e16dafcb-209d-4162-aa4e-a2581659796b",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:17:10.201Z",
        "lastMessageAt": "2025-06-05T20:17:11.879Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "0d0101f2-e084-4eff-8edd-295b0af96ed1",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:16:59.511Z",
        "lastMessageAt": "2025-06-05T20:17:01.443Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "22eabbe1-e7f4-4893-a86f-3fcacf4dfb11",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:10:36.276Z",
        "lastMessageAt": "2025-06-05T20:10:37.646Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "bf9869ad-09ab-47b9-a550-6a450c274b4a",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:10:27.021Z",
        "lastMessageAt": "2025-06-05T20:10:28.225Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "db03df51-e9c9-4bb9-b380-2771510df593",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:09:07.732Z",
        "lastMessageAt": "2025-06-05T20:09:09.062Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "2d7348ab-d8f9-4f3b-bb23-182193d44c1d",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:08:58.761Z",
        "lastMessageAt": "2025-06-05T20:08:59.955Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "f57108c9-f4c5-4f78-b3f8-674cb115eff0",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:06:44.251Z",
        "lastMessageAt": "2025-06-05T20:06:45.548Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "845a3438-fb2e-4471-b14e-088751dcc449",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:06:36.538Z",
        "lastMessageAt": "2025-06-05T20:06:37.876Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": [
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
        ]
      },
      {
        "id": "86f4862a-4711-4060-805c-0d284f88eff5",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:59:40.247Z",
        "lastMessageAt": "2025-06-05T19:59:40.247Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "92253824-12e6-4654-a82f-4281d67b3375",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:59:39.199Z",
        "lastMessageAt": "2025-06-05T19:59:39.199Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "0e5d2f6c-e9dc-4acc-bc2d-259558a3ce00",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:59:17.178Z",
        "lastMessageAt": "2025-06-05T19:59:17.178Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "12ef0977-d15c-4e08-84bb-8e75b416a34e",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:57:41.989Z",
        "lastMessageAt": "2025-06-05T19:57:41.989Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "de96dec0-863c-4294-8f81-782f237d1fd1",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:57:40.962Z",
        "lastMessageAt": "2025-06-05T19:57:40.962Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "999de7e7-62db-42c8-aefd-1cf2c447d2fb",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:57:18.239Z",
        "lastMessageAt": "2025-06-05T19:57:18.239Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "bccb1eef-c098-43ed-ad1b-4c6e9f8fc860",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:51:03.324Z",
        "lastMessageAt": "2025-06-05T19:51:03.324Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "c1a6da37-9e55-4ebc-8748-9c263aaa0cc2",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:51:02.013Z",
        "lastMessageAt": "2025-06-05T19:51:02.012Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "f0c680f3-9fd2-4596-ba5d-d7f29df12259",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:50:38.341Z",
        "lastMessageAt": "2025-06-05T19:50:38.341Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "6e7464ae-a30c-4d7f-8bd0-99bafc5b3a04",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:40:28.631Z",
        "lastMessageAt": "2025-06-05T19:40:28.631Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "37ad1df3-4799-4c56-b266-b926b7e7281c",
        "title": "Debug Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:39:47.382Z",
        "lastMessageAt": "2025-06-05T19:39:47.382Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "rrRrora1akUE92bHuyrs4wqVwRr1",
            "email": "debug-user-1749152384756@example.com",
            "name": "Debug User"
          }
        ],
        "messages": []
      },
      {
        "id": "8c6c9bfa-86e1-4973-b9f5-11a49eae8ae7",
        "title": "Debug Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:36:38.201Z",
        "lastMessageAt": "2025-06-05T19:36:38.201Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "TVQaAvCw0mNknAdFcaZCmmfaNH33",
            "email": "debug-user-1749152195287@example.com",
            "name": "Debug User"
          }
        ],
        "messages": []
      },
      {
        "id": "7e76a3ba-39f3-42bf-812d-c0997106ace7",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:25:17.034Z",
        "lastMessageAt": "2025-06-05T19:25:17.034Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "bab71bae-58bc-4b86-80bc-ca3d57b5aba5",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:21:24.865Z",
        "lastMessageAt": "2025-06-05T19:21:24.865Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "32bea84d-a91c-4cd7-954e-96fa4b26e247",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:19:03.722Z",
        "lastMessageAt": "2025-06-05T19:19:03.722Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "c491ec4b-8ae8-4de6-92ac-44fb4b67d0c4",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:35.353Z",
        "lastMessageAt": "2025-06-05T18:19:35.353Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "6918c677-546d-4227-b04d-59535ceed0d3",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:34.350Z",
        "lastMessageAt": "2025-06-05T18:19:34.350Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "d3ff019b-dfe7-457c-b34d-d5205430d835",
        "title": "Conversation to Delete",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:31.849Z",
        "lastMessageAt": "2025-06-05T18:19:31.849Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "13889385-c375-4db6-ad55-55d654cb06ba",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:19.089Z",
        "lastMessageAt": "2025-06-05T18:19:19.089Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "9d08c86d-4163-4f50-918c-f040654d84ba",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T18:19:17.997Z",
        "lastMessageAt": "2025-06-05T18:19:17.997Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "c0746efa-5306-46c3-b029-5224e53d8e59",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:15.188Z",
        "lastMessageAt": "2025-06-05T18:19:15.188Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "2f850cda-3473-49f1-9f35-9788aa38efbf",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-02T00:00:27.625Z",
        "lastMessageAt": "2025-06-02T00:00:27.625Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "f18f2b80-e969-4634-80b2-f7ef726cb423",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-02T00:00:26.592Z",
        "lastMessageAt": "2025-06-02T00:00:26.592Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "162e9c6d-20c7-4765-bef5-1fbb1e84151d",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-02T00:00:04.158Z",
        "lastMessageAt": "2025-06-02T00:00:04.158Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "96a27878-ebb8-4d0b-be66-a1e5fdd66402",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:46:19.516Z",
        "lastMessageAt": "2025-06-01T23:46:19.516Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "f115ae02-3094-4f29-9cd6-909e84a34af6",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:46:18.636Z",
        "lastMessageAt": "2025-06-01T23:46:18.636Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "ac382e75-8c39-4f25-a2a9-eb8d90760a2b",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:45:56.923Z",
        "lastMessageAt": "2025-06-01T23:45:56.923Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "53999d15-f025-4d65-b38c-73b7f4f5a343",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:36:27.004Z",
        "lastMessageAt": "2025-06-01T23:36:27.004Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "10ccf220-dc68-499f-874f-c2a979bfc661",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:36:26.080Z",
        "lastMessageAt": "2025-06-01T23:36:26.080Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "0595a672-cd73-48b9-a156-c92fe4cfe9e5",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:36:04.847Z",
        "lastMessageAt": "2025-06-01T23:36:04.847Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "6dc29759-3305-4f87-9a8e-957b445f4f7e",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:31:42.328Z",
        "lastMessageAt": "2025-05-27T23:31:42.328Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "d74066e5-8f15-47b3-bf75-e90915731a70",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:31:41.274Z",
        "lastMessageAt": "2025-05-27T23:31:41.274Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "7edd7131-9a8c-45f9-a777-537214d4d998",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:31:18.278Z",
        "lastMessageAt": "2025-05-27T23:31:18.278Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "5f6e5416-9ff0-4d92-9160-8f0f4c5e9508",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:29:09.046Z",
        "lastMessageAt": "2025-05-27T23:29:09.046Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "6c4a45ce-df43-4f86-bf18-75eecc338351",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:29:08.019Z",
        "lastMessageAt": "2025-05-27T23:29:08.019Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "07d174dd-afd4-4ed1-95c5-2d4bbba575c8",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:28:46.115Z",
        "lastMessageAt": "2025-05-27T23:28:46.115Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "a5772cfc-5d0f-4ef2-bcf5-ce83389d6090",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:26:26.800Z",
        "lastMessageAt": "2025-05-27T23:26:26.800Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "3b60d81b-265a-4ce4-aebd-52fd8923f789",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:26:25.677Z",
        "lastMessageAt": "2025-05-27T23:26:25.677Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "ef5c602a-3917-48de-98a0-a1faea074a0c",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:26:03.558Z",
        "lastMessageAt": "2025-05-27T23:26:03.558Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "491bbd22-760c-48e4-9b19-70a94f9e62e2",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:24:12.915Z",
        "lastMessageAt": "2025-05-27T23:24:12.915Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "f95a7eec-8fa6-4fa2-a677-e8efe17d411e",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:24:11.860Z",
        "lastMessageAt": "2025-05-27T23:24:11.860Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "4f6207d3-741b-4de3-9a94-be779bd8f879",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:23:30.033Z",
        "lastMessageAt": "2025-05-27T23:23:30.033Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "d9d7d6cf-cdcd-4d06-8735-c1b640835004",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:20:40.086Z",
        "lastMessageAt": "2025-05-27T23:20:40.086Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "de28c294-a8c2-4dc5-8fbb-f57d25edbad3",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:20:39.061Z",
        "lastMessageAt": "2025-05-27T23:20:39.061Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "c4111617-c5a4-4810-8cea-2815f292699e",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:19:56.779Z",
        "lastMessageAt": "2025-05-27T23:19:56.779Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "b1853f29-8e62-4997-baa7-9d7b4e27d8d6",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:18:05.790Z",
        "lastMessageAt": "2025-05-27T23:18:05.790Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "564c665c-4988-4363-82e9-91a9f13b5bd8",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:18:04.869Z",
        "lastMessageAt": "2025-05-27T23:18:04.869Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "d461d50b-4d61-4d9b-b324-216f522ebf96",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:17:23.219Z",
        "lastMessageAt": "2025-05-27T23:17:23.219Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "31c4c99b-2a7b-442d-8f8e-9065fe5438f2",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:15:55.088Z",
        "lastMessageAt": "2025-05-27T23:15:55.088Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "e9b190f1-f975-487c-922a-c76b75b6de89",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:15:54.060Z",
        "lastMessageAt": "2025-05-27T23:15:54.060Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "3d7cd160-eb69-498d-857a-82d71631434e",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:15:12.185Z",
        "lastMessageAt": "2025-05-27T23:15:12.185Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "7ac37749-3452-4209-8f09-9c06b07ad766",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:13:30.028Z",
        "lastMessageAt": "2025-05-27T23:13:30.028Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "99eeea15-a574-40cc-a7fd-2e61e3e40d1b",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:13:29.013Z",
        "lastMessageAt": "2025-05-27T23:13:29.013Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "79f68030-c5f7-423f-8401-d45bb6cdcd03",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:12:49.067Z",
        "lastMessageAt": "2025-05-27T23:12:49.067Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "2510bb1f-9941-476f-8e3e-0143da347bca",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:46.253Z",
        "lastMessageAt": "2025-05-27T23:07:46.253Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "345f30fd-13c7-41f4-a273-429ed38803b1",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:45.213Z",
        "lastMessageAt": "2025-05-27T23:07:45.213Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "79e8c8de-6cb3-4a07-aa23-6fa5b2be5a8d",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:09.334Z",
        "lastMessageAt": "2025-05-27T23:07:09.334Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "2f3c7246-7d3d-4c0b-84d8-9f2d160bf857",
        "title": "Group Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:08.178Z",
        "lastMessageAt": "2025-05-27T23:07:08.178Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      },
      {
        "id": "9752f385-c56c-4270-bc45-19447105e115",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:05.149Z",
        "lastMessageAt": "2025-05-27T23:07:05.149Z",
        "organizationId": null,
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          }
        ],
        "messages": []
      }
    ],
    "language": "en"
  }
}
```

**⏱️ Duration:** 1071.3 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (586.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTM0MiwidXNlcl9pZCI6InRKekx2aUdFWDhXWW51ck1Gcjdpa1Bqa0gyVjIiLCJzdWIiOiJ0SnpMdmlHRVg4V1ludXJNRnI3aWtQamtIMlYyIiwiaWF0IjoxNzQ5MTYxMzQyLCJleHAiOjE3NDkxNjQ5NDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjEzNDA5NTFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.pGME8-ZiA1h_MclOq2YuDvyC-UnpMiZiO6T6QqAxQYYAVKUzQH4LGor01dw4AR7bouiYiW-bIVrKCUiON1NE1iIW7Ahgi-LS6wrxlMf6QSAIrUWwq8AXeSvE8yrL2cEBY2ZbE_Bkmio2kdzEmIArlOnrhByJKTcg-rEtbriLryQ20JETOjT69ffPLz3xYPqc1RPCRA0qpEJfZR03KwM57g9iPq-JqPZ7RWNQra-6dtB895BW_MfPrLQHvaKN_KA_y6s_J-H_XoW83PeINFYcjdSf2jRPmZmFxXHiLfwRSkIamYQaJdrFVYgq0o23USWLSXtlI-jhC4Cy_JoJUbMtkw",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "content-length": "89",
    "etag": "W/\"59-EJtKrw0eqMSOH/xfuajJG4OlIpM\"",
    "date": "Thu, 05 Jun 2025 22:09:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 586.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 1.11s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1103.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "6665ee25-6325-4bab-8079-c9418ba14084"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "tJzLviGEX8WYnurMFr7ikPjkH2V2"
    ],
    "title": "Org-Specific Conversation"
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
    "content-length": "455",
    "etag": "W/\"1c7-0u30+2cfKAdbfQt5oZXYTPf3NPs\"",
    "date": "Thu, 05 Jun 2025 22:09:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "948af4c9-a8c7-4160-a162-7dbaf786f65b",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:09:37.825Z",
      "lastMessageAt": "2025-06-05T22:09:37.825Z",
      "organizationId": "6665ee25-6325-4bab-8079-c9418ba14084",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tJzLviGEX8WYnurMFr7ikPjkH2V2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1103.5 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization
**Status:** ✅ PASSED  
**Duration:** 1.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (998.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "tJzLviGEX8WYnurMFr7ikPjkH2V2"
    ],
    "title": "Org1 Conversation"
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
    "etag": "W/\"1bf-cUnCY25m7fl5eQDxhe13BVuVYA0\"",
    "date": "Thu, 05 Jun 2025 22:09:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "fae536fc-2898-4a77-b516-457405ae115f",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:09:38.850Z",
      "lastMessageAt": "2025-06-05T22:09:38.850Z",
      "organizationId": "7454f103-16dd-4749-beca-70f331550735",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tJzLviGEX8WYnurMFr7ikPjkH2V2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 998.7 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/fae536fc-2898-4a77-b516-457405ae115f (829.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "6665ee25-6325-4bab-8079-c9418ba14084"
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
    "content-length": "378",
    "etag": "W/\"17a-wn49/LTWpVKST64VzBPQEb73KmY\"",
    "date": "Thu, 05 Jun 2025 22:09:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "fae536fc-2898-4a77-b516-457405ae115f",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:09:38.850Z",
      "lastMessageAt": "2025-06-05T22:09:38.850Z",
      "organizationId": "7454f103-16dd-4749-beca-70f331550735",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "tJzLviGEX8WYnurMFr7ikPjkH2V2"
      ],
      "messages": []
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 829.9 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 1.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1033.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "content-length": "1436",
    "etag": "W/\"59c-pSpJYGHgkZG/lrCm4xYiKMiDW5M\"",
    "date": "Thu, 05 Jun 2025 22:09:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "fae536fc-2898-4a77-b516-457405ae115f",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:38.850Z",
        "lastMessageAt": "2025-06-05T22:09:38.850Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      },
      {
        "id": "0e569b88-f9de-437a-ac3a-14a616a50b32",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:14.248Z",
        "lastMessageAt": "2025-06-05T22:09:14.248Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      },
      {
        "id": "07875c59-5cf1-4e4a-994d-88afd4c47959",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T22:09:12.103Z",
        "lastMessageAt": "2025-06-05T22:09:12.103Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2",
          "HPnubvNZXFabYmXgn3AvZEHgu0k1"
        ],
        "messages": []
      },
      {
        "id": "fc38e8c5-177a-438b-b072-f9cdd0363f67",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:08.522Z",
        "lastMessageAt": "2025-06-05T22:09:08.522Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      }
    ],
    "language": "en"
  }
}
```

**⏱️ Duration:** 1033.9 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 1.10s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1092.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA"
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
    "content-length": "25506",
    "etag": "W/\"63a2-Plyl1jld7Kl3uO4VuMcQaI2soQ4\"",
    "date": "Thu, 05 Jun 2025 22:09:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "fae536fc-2898-4a77-b516-457405ae115f",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:38.850Z",
        "lastMessageAt": "2025-06-05T22:09:38.850Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      },
      {
        "id": "948af4c9-a8c7-4160-a162-7dbaf786f65b",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:37.825Z",
        "lastMessageAt": "2025-06-05T22:09:37.825Z",
        "organizationId": "6665ee25-6325-4bab-8079-c9418ba14084",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      },
      {
        "id": "0e569b88-f9de-437a-ac3a-14a616a50b32",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:14.248Z",
        "lastMessageAt": "2025-06-05T22:09:14.248Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      },
      {
        "id": "07875c59-5cf1-4e4a-994d-88afd4c47959",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T22:09:12.103Z",
        "lastMessageAt": "2025-06-05T22:09:12.103Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2",
          "HPnubvNZXFabYmXgn3AvZEHgu0k1"
        ],
        "messages": []
      },
      {
        "id": "fc38e8c5-177a-438b-b072-f9cdd0363f67",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:08.522Z",
        "lastMessageAt": "2025-06-05T22:09:08.522Z",
        "organizationId": "7454f103-16dd-4749-beca-70f331550735",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "tJzLviGEX8WYnurMFr7ikPjkH2V2"
        ],
        "messages": []
      },
      {
        "id": "ea555d11-3b70-4fcc-9279-7935137641b1",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:07:54.126Z",
        "lastMessageAt": "2025-06-05T22:07:54.126Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "57f4b422-52d2-4291-bf50-c059009871bc",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:07:53.140Z",
        "lastMessageAt": "2025-06-05T22:07:53.140Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "4426259b-35d2-4de8-ac57-85ca075db8a5",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:07:30.041Z",
        "lastMessageAt": "2025-06-05T22:07:30.041Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "47406cb1-9f0c-4dab-b735-3e334de60d90",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:01:36.501Z",
        "lastMessageAt": "2025-06-05T22:01:36.501Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "9302acde-c0f5-44a3-9101-b89d8727d6bc",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:01:35.235Z",
        "lastMessageAt": "2025-06-05T22:01:35.235Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "c195ae62-9684-4cbe-a5b6-432d790a0262",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:01:12.846Z",
        "lastMessageAt": "2025-06-05T22:01:12.846Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "74313b7b-1863-40f5-897c-8fca476eea3b",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T21:57:41.298Z",
        "lastMessageAt": "2025-06-05T21:57:42.626Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "252b767c-613c-4d3c-9fda-72e12b088edf",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T21:57:31.283Z",
        "lastMessageAt": "2025-06-05T21:57:32.455Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "e16dafcb-209d-4162-aa4e-a2581659796b",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:17:10.201Z",
        "lastMessageAt": "2025-06-05T20:17:11.879Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "0d0101f2-e084-4eff-8edd-295b0af96ed1",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:16:59.511Z",
        "lastMessageAt": "2025-06-05T20:17:01.443Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "22eabbe1-e7f4-4893-a86f-3fcacf4dfb11",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:10:36.276Z",
        "lastMessageAt": "2025-06-05T20:10:37.646Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "bf9869ad-09ab-47b9-a550-6a450c274b4a",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:10:27.021Z",
        "lastMessageAt": "2025-06-05T20:10:28.225Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "db03df51-e9c9-4bb9-b380-2771510df593",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:09:07.732Z",
        "lastMessageAt": "2025-06-05T20:09:09.062Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "2d7348ab-d8f9-4f3b-bb23-182193d44c1d",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:08:58.761Z",
        "lastMessageAt": "2025-06-05T20:08:59.955Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "f57108c9-f4c5-4f78-b3f8-674cb115eff0",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:06:44.251Z",
        "lastMessageAt": "2025-06-05T20:06:45.548Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "845a3438-fb2e-4471-b14e-088751dcc449",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T20:06:36.538Z",
        "lastMessageAt": "2025-06-05T20:06:37.876Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
        ]
      },
      {
        "id": "86f4862a-4711-4060-805c-0d284f88eff5",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:59:40.247Z",
        "lastMessageAt": "2025-06-05T19:59:40.247Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "92253824-12e6-4654-a82f-4281d67b3375",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:59:39.199Z",
        "lastMessageAt": "2025-06-05T19:59:39.199Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "0e5d2f6c-e9dc-4acc-bc2d-259558a3ce00",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:59:17.178Z",
        "lastMessageAt": "2025-06-05T19:59:17.178Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "12ef0977-d15c-4e08-84bb-8e75b416a34e",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:57:41.989Z",
        "lastMessageAt": "2025-06-05T19:57:41.989Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "de96dec0-863c-4294-8f81-782f237d1fd1",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:57:40.962Z",
        "lastMessageAt": "2025-06-05T19:57:40.962Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "999de7e7-62db-42c8-aefd-1cf2c447d2fb",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:57:18.239Z",
        "lastMessageAt": "2025-06-05T19:57:18.239Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "bccb1eef-c098-43ed-ad1b-4c6e9f8fc860",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:51:03.324Z",
        "lastMessageAt": "2025-06-05T19:51:03.324Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "c1a6da37-9e55-4ebc-8748-9c263aaa0cc2",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:51:02.013Z",
        "lastMessageAt": "2025-06-05T19:51:02.012Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "f0c680f3-9fd2-4596-ba5d-d7f29df12259",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:50:38.341Z",
        "lastMessageAt": "2025-06-05T19:50:38.341Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "6e7464ae-a30c-4d7f-8bd0-99bafc5b3a04",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:40:28.631Z",
        "lastMessageAt": "2025-06-05T19:40:28.631Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "37ad1df3-4799-4c56-b266-b926b7e7281c",
        "title": "Debug Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:39:47.382Z",
        "lastMessageAt": "2025-06-05T19:39:47.382Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "rrRrora1akUE92bHuyrs4wqVwRr1"
        ],
        "messages": []
      },
      {
        "id": "8c6c9bfa-86e1-4973-b9f5-11a49eae8ae7",
        "title": "Debug Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:36:38.201Z",
        "lastMessageAt": "2025-06-05T19:36:38.201Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "TVQaAvCw0mNknAdFcaZCmmfaNH33"
        ],
        "messages": []
      },
      {
        "id": "7e76a3ba-39f3-42bf-812d-c0997106ace7",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:25:17.034Z",
        "lastMessageAt": "2025-06-05T19:25:17.034Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "bab71bae-58bc-4b86-80bc-ca3d57b5aba5",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:21:24.865Z",
        "lastMessageAt": "2025-06-05T19:21:24.865Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "32bea84d-a91c-4cd7-954e-96fa4b26e247",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T19:19:03.722Z",
        "lastMessageAt": "2025-06-05T19:19:03.722Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "c491ec4b-8ae8-4de6-92ac-44fb4b67d0c4",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:35.353Z",
        "lastMessageAt": "2025-06-05T18:19:35.353Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "6918c677-546d-4227-b04d-59535ceed0d3",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:34.350Z",
        "lastMessageAt": "2025-06-05T18:19:34.350Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "d3ff019b-dfe7-457c-b34d-d5205430d835",
        "title": "Conversation to Delete",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:31.849Z",
        "lastMessageAt": "2025-06-05T18:19:31.849Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "13889385-c375-4db6-ad55-55d654cb06ba",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:19.089Z",
        "lastMessageAt": "2025-06-05T18:19:19.089Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "9d08c86d-4163-4f50-918c-f040654d84ba",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T18:19:17.997Z",
        "lastMessageAt": "2025-06-05T18:19:17.997Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "c0746efa-5306-46c3-b029-5224e53d8e59",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T18:19:15.188Z",
        "lastMessageAt": "2025-06-05T18:19:15.188Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "2f850cda-3473-49f1-9f35-9788aa38efbf",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-02T00:00:27.625Z",
        "lastMessageAt": "2025-06-02T00:00:27.625Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "f18f2b80-e969-4634-80b2-f7ef726cb423",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-02T00:00:26.592Z",
        "lastMessageAt": "2025-06-02T00:00:26.592Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "162e9c6d-20c7-4765-bef5-1fbb1e84151d",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-02T00:00:04.158Z",
        "lastMessageAt": "2025-06-02T00:00:04.158Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "96a27878-ebb8-4d0b-be66-a1e5fdd66402",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:46:19.516Z",
        "lastMessageAt": "2025-06-01T23:46:19.516Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "f115ae02-3094-4f29-9cd6-909e84a34af6",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:46:18.636Z",
        "lastMessageAt": "2025-06-01T23:46:18.636Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "ac382e75-8c39-4f25-a2a9-eb8d90760a2b",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:45:56.923Z",
        "lastMessageAt": "2025-06-01T23:45:56.923Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "53999d15-f025-4d65-b38c-73b7f4f5a343",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:36:27.004Z",
        "lastMessageAt": "2025-06-01T23:36:27.004Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "10ccf220-dc68-499f-874f-c2a979bfc661",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:36:26.080Z",
        "lastMessageAt": "2025-06-01T23:36:26.080Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "0595a672-cd73-48b9-a156-c92fe4cfe9e5",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-01T23:36:04.847Z",
        "lastMessageAt": "2025-06-01T23:36:04.847Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "6dc29759-3305-4f87-9a8e-957b445f4f7e",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:31:42.328Z",
        "lastMessageAt": "2025-05-27T23:31:42.328Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "d74066e5-8f15-47b3-bf75-e90915731a70",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:31:41.274Z",
        "lastMessageAt": "2025-05-27T23:31:41.274Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "7edd7131-9a8c-45f9-a777-537214d4d998",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:31:18.278Z",
        "lastMessageAt": "2025-05-27T23:31:18.278Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "5f6e5416-9ff0-4d92-9160-8f0f4c5e9508",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:29:09.046Z",
        "lastMessageAt": "2025-05-27T23:29:09.046Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "6c4a45ce-df43-4f86-bf18-75eecc338351",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:29:08.019Z",
        "lastMessageAt": "2025-05-27T23:29:08.019Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "07d174dd-afd4-4ed1-95c5-2d4bbba575c8",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:28:46.115Z",
        "lastMessageAt": "2025-05-27T23:28:46.115Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "a5772cfc-5d0f-4ef2-bcf5-ce83389d6090",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:26:26.800Z",
        "lastMessageAt": "2025-05-27T23:26:26.800Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "3b60d81b-265a-4ce4-aebd-52fd8923f789",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:26:25.677Z",
        "lastMessageAt": "2025-05-27T23:26:25.677Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "ef5c602a-3917-48de-98a0-a1faea074a0c",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:26:03.558Z",
        "lastMessageAt": "2025-05-27T23:26:03.558Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "491bbd22-760c-48e4-9b19-70a94f9e62e2",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:24:12.915Z",
        "lastMessageAt": "2025-05-27T23:24:12.915Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "f95a7eec-8fa6-4fa2-a677-e8efe17d411e",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:24:11.860Z",
        "lastMessageAt": "2025-05-27T23:24:11.860Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "4f6207d3-741b-4de3-9a94-be779bd8f879",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:23:30.033Z",
        "lastMessageAt": "2025-05-27T23:23:30.033Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "d9d7d6cf-cdcd-4d06-8735-c1b640835004",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:20:40.086Z",
        "lastMessageAt": "2025-05-27T23:20:40.086Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "de28c294-a8c2-4dc5-8fbb-f57d25edbad3",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:20:39.061Z",
        "lastMessageAt": "2025-05-27T23:20:39.061Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "c4111617-c5a4-4810-8cea-2815f292699e",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:19:56.779Z",
        "lastMessageAt": "2025-05-27T23:19:56.779Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "b1853f29-8e62-4997-baa7-9d7b4e27d8d6",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:18:05.790Z",
        "lastMessageAt": "2025-05-27T23:18:05.790Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "564c665c-4988-4363-82e9-91a9f13b5bd8",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:18:04.869Z",
        "lastMessageAt": "2025-05-27T23:18:04.869Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "d461d50b-4d61-4d9b-b324-216f522ebf96",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:17:23.219Z",
        "lastMessageAt": "2025-05-27T23:17:23.219Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "31c4c99b-2a7b-442d-8f8e-9065fe5438f2",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:15:55.088Z",
        "lastMessageAt": "2025-05-27T23:15:55.088Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "e9b190f1-f975-487c-922a-c76b75b6de89",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:15:54.060Z",
        "lastMessageAt": "2025-05-27T23:15:54.060Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "3d7cd160-eb69-498d-857a-82d71631434e",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:15:12.185Z",
        "lastMessageAt": "2025-05-27T23:15:12.185Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "7ac37749-3452-4209-8f09-9c06b07ad766",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:13:30.028Z",
        "lastMessageAt": "2025-05-27T23:13:30.028Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "99eeea15-a574-40cc-a7fd-2e61e3e40d1b",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:13:29.013Z",
        "lastMessageAt": "2025-05-27T23:13:29.013Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "79f68030-c5f7-423f-8401-d45bb6cdcd03",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:12:49.067Z",
        "lastMessageAt": "2025-05-27T23:12:49.067Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "2510bb1f-9941-476f-8e3e-0143da347bca",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:46.253Z",
        "lastMessageAt": "2025-05-27T23:07:46.253Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "345f30fd-13c7-41f4-a273-429ed38803b1",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:45.213Z",
        "lastMessageAt": "2025-05-27T23:07:45.213Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "79e8c8de-6cb3-4a07-aa23-6fa5b2be5a8d",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:09.334Z",
        "lastMessageAt": "2025-05-27T23:07:09.334Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "2f3c7246-7d3d-4c0b-84d8-9f2d160bf857",
        "title": "Group Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:08.178Z",
        "lastMessageAt": "2025-05-27T23:07:08.178Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "9752f385-c56c-4270-bc45-19447105e115",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-05-27T23:07:05.149Z",
        "lastMessageAt": "2025-05-27T23:07:05.149Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      }
    ],
    "language": "en"
  }
}
```

**⏱️ Duration:** 1092.5 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (754.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
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
    "date": "Thu, 05 Jun 2025 22:09:43 GMT",
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

**⏱️ Duration:** 754.5 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/fc38e8c5-177a-438b-b072-f9cdd0363f67 (9.0ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "114",
    "etag": "W/\"72-lOYZ7mT/xqxGy/iyav5Lv8u3JAE\"",
    "date": "Thu, 05 Jun 2025 22:09:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Token not provided",
    "details": {},
    "messageKey": "auth.token_not_provided",
    "language": "en"
  }
}
```

**⏱️ Duration:** 9.0 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (623.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA",
    "X-Organization-Id": "7454f103-16dd-4749-beca-70f331550735"
  },
  "data": {
    "participants": "not-an-array"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "155",
    "etag": "W/\"9b-Qeeg6DQ97kA3zSyvXdvgyd+ipb4\"",
    "date": "Thu, 05 Jun 2025 22:09:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "errors.map is not a function"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 623.4 ms  
**❌ Error:** Request failed with status code 500  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/fc38e8c5-177a-438b-b072-f9cdd0363f67 (620.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA"
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
    "date": "Thu, 05 Jun 2025 22:09:44 GMT",
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

**⏱️ Duration:** 620.9 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/07875c59-5cf1-4e4a-994d-88afd4c47959 (659.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA"
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
    "date": "Thu, 05 Jun 2025 22:09:44 GMT",
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

**⏱️ Duration:** 659.2 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/7454f103-16dd-4749-beca-70f331550735 (1360.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA"
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
    "date": "Thu, 05 Jun 2025 22:09:46 GMT",
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

**⏱️ Duration:** 1360.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/6665ee25-6325-4bab-8079-c9418ba14084 (1211.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzMzgsImV4cCI6MTc0OTE2NDkzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X4xa2N_jQUn25MyP2xQe2e_T_tOwSdMyjj3mBORc9RrryNHSw3op7IG-g2VX3o-wx3IawRIpGO6wMGBtlof9JAi_Wh_EmwN_Z8UibZ3XEd3PIU_2DvRhAVi6lv0nlKVaNOSegY_MTaJAYcH7gY2ehiDLZlAUtw8DBdoRSR_Z2iubbhkClp0GBmtGMy9fi6gBdXKUumls84PtJrzYeFkMau2Uvl6O0jHEp0iQFXvlzdA42KEizhLgX5E-PsEQFO9gJeJHKZgKDZrnQ4oGzgmAfB5QokBS5al8qY54fg5TvWABfnA02Zl_bnYkZCnLeHwUo4NISkWTpktO6Tb79xC6sA"
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
    "date": "Thu, 05 Jun 2025 22:09:47 GMT",
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

**⏱️ Duration:** 1211.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (354.2ms)</summary>

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
    "etag": "W/\"6aa-elAlJaFAXc0L5+/Po6kuJKPlNqc\"",
    "date": "Thu, 05 Jun 2025 22:09:47 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzODcsImV4cCI6MTc0OTE2NDk4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lF0G2LtKK8jgrh_LG8Nrb_DmJbTGBa9LMs7ELFtWIXJ1eXFUBza-xIsTEOCJpaYkPV94-w295fm1W93fVNvDfKZsCpLbehhXVskK5YD0bqJx3bSMgCtVpRVRWsuVLQI9iEhD0iXVe_YB072uh944dU9AjQRNZ2f7y9rDXM9XtH8iMwVOwqlX5CsnDiq3Om8CLIGHrxKFF6lAqW8hxK4aWp2yi4u4qTDMKf0n1AMNH_5s8eUhV-9_BDM9QSLLr9dnHb15qF-Eqz81Gq8FAbZsjg6Qc1i2yq-yF9c4v50LpuJdkN0QoNLD2saVCIlGGv2amX8ncEAXFLV6uaiDv5oUfg",
        "refreshToken": "AMf-vBx0AsZy_5ZGf-Q_DNmSU4WFNpemZCC8LRdIh6PfbCpfRCu5jQSHdOfvnSSlgVhytA4lGM-rR24Nws1NMucIBloBejW9JsL1DtfeM5PLPUOz6330OxpweAaak3ZJQvmre8EnCVNdcoo91FH4CQXoGHN14lG00pfH5tJdTgp-cGPLE6KSrJzL2mW_Dh78CRuGVnwJ3EkDD8hzG5Uq6g_pBCWACbv1jnwE3spTMceiwn-qMrI6LKYuxCjA79Tpoe9vtrGn-5Qf",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 354.2 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/tJzLviGEX8WYnurMFr7ikPjkH2V2 (1420.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzODcsImV4cCI6MTc0OTE2NDk4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lF0G2LtKK8jgrh_LG8Nrb_DmJbTGBa9LMs7ELFtWIXJ1eXFUBza-xIsTEOCJpaYkPV94-w295fm1W93fVNvDfKZsCpLbehhXVskK5YD0bqJx3bSMgCtVpRVRWsuVLQI9iEhD0iXVe_YB072uh944dU9AjQRNZ2f7y9rDXM9XtH8iMwVOwqlX5CsnDiq3Om8CLIGHrxKFF6lAqW8hxK4aWp2yi4u4qTDMKf0n1AMNH_5s8eUhV-9_BDM9QSLLr9dnHb15qF-Eqz81Gq8FAbZsjg6Qc1i2yq-yF9c4v50LpuJdkN0QoNLD2saVCIlGGv2amX8ncEAXFLV6uaiDv5oUfg"
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
    "date": "Thu, 05 Jun 2025 22:09:49 GMT",
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

**⏱️ Duration:** 1420.2 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (240.9ms)</summary>

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
    "etag": "W/\"6aa-HkDearZUlfucHMJcnomm+xlsGFg\"",
    "date": "Thu, 05 Jun 2025 22:09:49 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzODksImV4cCI6MTc0OTE2NDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m-Q7wfdDeRCAeVe4UuyzeYgY2Uvilizl_OU-vxsfToKB2mIvdBT_YsjWOqHWFcaoQVUUjXV4oz8G0Zd_vNtn36y_LOQNOQj5FQCKtsGxZaecp44JWSGfhdP1cRsBunSKDh8CGbWFuj2syBzNPHDt-XfM-o7lVc9yUOTO_thym3ErfnJnStqgAThTRi1kDnETbACVU3FDE3P3ET30Gopsrb1FNXcGXbI2KajOia21cbJaiN2XtPW6eJXIWFP2QgGTAGwemU7R5YExqQ0gx75MZh_x9sLVXMlnOWZOOOoETKgUqusVAznH-au6xMNB6_f9BZCqUshE_Cnw9MlXUE_jcQ",
        "refreshToken": "AMf-vBy4boCv6fAVzSC2AlZ60z4hRdI7oTJeIBYkWu7xTM-RdouxRuPT_2vVTD5jrmdOd9sr2nwT_G7sfMM2JOpbFMYN-k6mQRdKR5LwTQL-nxGmC0uJiy2lR5gXXd9JbSldHYdNuwa1Nt_ZbAVBNyjvHtmJiG0GVrjTos-v9Jx-EMmK3fCTpO_HC2KAiKSdjvRZRujuHoRMlHW-pWMX2BS7YU-6CuDZ4uDSRBUk5eqMZnyvjVlZsADz3boqRX8c_HzmErsZmoVs",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 240.9 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/HPnubvNZXFabYmXgn3AvZEHgu0k1 (1097.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjEzODksImV4cCI6MTc0OTE2NDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m-Q7wfdDeRCAeVe4UuyzeYgY2Uvilizl_OU-vxsfToKB2mIvdBT_YsjWOqHWFcaoQVUUjXV4oz8G0Zd_vNtn36y_LOQNOQj5FQCKtsGxZaecp44JWSGfhdP1cRsBunSKDh8CGbWFuj2syBzNPHDt-XfM-o7lVc9yUOTO_thym3ErfnJnStqgAThTRi1kDnETbACVU3FDE3P3ET30Gopsrb1FNXcGXbI2KajOia21cbJaiN2XtPW6eJXIWFP2QgGTAGwemU7R5YExqQ0gx75MZh_x9sLVXMlnOWZOOOoETKgUqusVAznH-au6xMNB6_f9BZCqUshE_Cnw9MlXUE_jcQ"
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
    "date": "Thu, 05 Jun 2025 22:09:50 GMT",
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

**⏱️ Duration:** 1097.1 ms  

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
- Total conversations created: 1
- Total organizations created: 2
- Total test users created: 2
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
