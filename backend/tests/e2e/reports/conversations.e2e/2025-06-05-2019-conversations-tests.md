# E2E Test Report: conversations-tests

**Date:** 6/5/2025  
**Time:** 8:19:44 PM  
**Duration:** 39.36s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants | PASSED | 2.20s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should fail to create conversation with insufficient participants | PASSED | 0.61s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should fail to create conversation with insufficient participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should fail to create conversation without participants array | PASSED | 0.53s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should fail to create conversation without participants array |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create group conversation with multiple participants | PASSED | 1.06s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create group conversation with multiple participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversation by ID for participant | PASSED | 0.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversation by ID for participant |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant | PASSED | 0.94s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversations for user | PASSED | 0.94s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversations for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should fail to get conversations for other user without permission | PASSED | 10.01s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should fail to get conversations for other user without permission |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversation with invalid ID format | PASSED | 0.84s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversation with invalid ID format |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should soft delete conversation for user | PASSED | 0.01s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should soft delete conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should hide conversation for user | PASSED | 0.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should hide conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should unhide conversation for user | PASSED | 0.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should unhide conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should block conversation (moderator) | PASSED | 0.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should block conversation (moderator) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should unblock conversation (moderator) | PASSED | 0.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should unblock conversation (moderator) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should fail to block conversation as regular user | PASSED | 0.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should fail to block conversation as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should permanently delete conversation (admin) | PASSED | 0.97s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should permanently delete conversation (admin) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should fail to permanently delete conversation as regular user | PASSED | 0.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should fail to permanently delete conversation as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should get all conversations (admin) | PASSED | 0.95s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should get all conversations (admin) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should fail to get all conversations as regular user | PASSED | 0.49s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should fail to get all conversations as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should create conversation in specific organization | PASSED | 0.99s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should create conversation in specific organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should not access conversation from different organization | PASSED | 1.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should not access conversation from different organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should filter conversations by organization | PASSED | 0.99s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should filter conversations by organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations | PASSED | 0.86s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle non-existent conversation ID | PASSED | 0.67s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle non-existent conversation ID |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.00s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.53s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle malformed request data |


---

## Detailed Execution Log

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.20s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2200.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "2SbWti2cXCRTu5FCNo5STHFe1dU2"
    ],
    "title": "Test Conversation",
    "type": "direct"
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
    "content-length": "190",
    "etag": "W/\"be-IFZUckk0N8ZVdcqpLBQrZD+c5cI\"",
    "date": "Thu, 05 Jun 2025 18:19:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 2200.7 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (607.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "date": "Thu, 05 Jun 2025 18:19:16 GMT",
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

**⏱️ Duration:** 607.9 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (524.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "date": "Thu, 05 Jun 2025 18:19:17 GMT",
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

**⏱️ Duration:** 524.7 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.06s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1060.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "2SbWti2cXCRTu5FCNo5STHFe1dU2",
      "KQSUqYjgZ7Zc0gsAr6n3oNPPHux2"
    ],
    "title": "Group Test Conversation",
    "type": "group"
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
    "content-length": "190",
    "etag": "W/\"be-IFZUckk0N8ZVdcqpLBQrZD+c5cI\"",
    "date": "Thu, 05 Jun 2025 18:19:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1060.1 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (937.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "2SbWti2cXCRTu5FCNo5STHFe1dU2"
    ],
    "title": "Private Conversation"
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
    "content-length": "190",
    "etag": "W/\"be-IFZUckk0N8ZVdcqpLBQrZD+c5cI\"",
    "date": "Thu, 05 Jun 2025 18:19:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 937.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/2SbWti2cXCRTu5FCNo5STHFe1dU2 (938.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NzU0OSwidXNlcl9pZCI6IjJTYld0aTJjWENSVHU1RkNObzVTVEhGZTFkVTIiLCJzdWIiOiIyU2JXdGkyY1hDUlR1NUZDTm81U1RIRmUxZFUyIiwiaWF0IjoxNzQ5MTQ3NTQ5LCJleHAiOjE3NDkxNTExNDksImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNDc1NDg0MTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNDc1NDg0MTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Cy8lEtM9M3fB2bNSoD6rrOK2yLKEGrem3ttIBsPYa0wxLyiEPjsQGtHFZfmWlUj23619PhLdGqDn_68mtrp_KAaFO56V0VofbPITwi1Ehn5JDRH4oIMSNj-nQ0IsFz69wxkfOuaNQpBXt0VLfAhX0ZGQErP-dyyNFjWC7gs7VYFzqI3WDPr4qBxLembfANnN0xc6M3RQgPioDr9LrGZdwvDObYzmuxNMOgCZcWwHRNhQmG77YhUdkwktPgf0h5TpaG863ELp3PMIRRZf0oaO4DEj1FOg1mksb0NKvm4It6-SGZcyNz-BG_6J24BbUzX8wTF6D73rP6wzuuz1Zc_GPQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "content-length": "194",
    "etag": "W/\"c2-hyuIOSfa78OE1/avau8jUXNTBWs\"",
    "date": "Thu, 05 Jun 2025 18:19:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_retrieving",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_retrieving",
    "language": "en"
  }
}
```

**⏱️ Duration:** 938.4 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should fail to get conversations for other user without permission
**Status:** ✅ PASSED  
**Duration:** 10.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10005.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NzU0OSwidXNlcl9pZCI6IjJTYld0aTJjWENSVHU1RkNObzVTVEhGZTFkVTIiLCJzdWIiOiIyU2JXdGkyY1hDUlR1NUZDTm81U1RIRmUxZFUyIiwiaWF0IjoxNzQ5MTQ3NTQ5LCJleHAiOjE3NDkxNTExNDksImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNDc1NDg0MTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNDc1NDg0MTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Cy8lEtM9M3fB2bNSoD6rrOK2yLKEGrem3ttIBsPYa0wxLyiEPjsQGtHFZfmWlUj23619PhLdGqDn_68mtrp_KAaFO56V0VofbPITwi1Ehn5JDRH4oIMSNj-nQ0IsFz69wxkfOuaNQpBXt0VLfAhX0ZGQErP-dyyNFjWC7gs7VYFzqI3WDPr4qBxLembfANnN0xc6M3RQgPioDr9LrGZdwvDObYzmuxNMOgCZcWwHRNhQmG77YhUdkwktPgf0h5TpaG863ELp3PMIRRZf0oaO4DEj1FOg1mksb0NKvm4It6-SGZcyNz-BG_6J24BbUzX8wTF6D73rP6wzuuz1Zc_GPQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10005.4 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


**Console Output:**
```
ℹ️ Request timed out - this is acceptable as the server rejected the request
```

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Retrieval Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (836.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "date": "Thu, 05 Jun 2025 18:19:31 GMT",
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

**⏱️ Duration:** 836.0 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.01s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Management Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 0.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (973.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "2SbWti2cXCRTu5FCNo5STHFe1dU2"
    ],
    "title": "Conversation to Delete"
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
    "content-length": "190",
    "etag": "W/\"be-IFZUckk0N8ZVdcqpLBQrZD+c5cI\"",
    "date": "Thu, 05 Jun 2025 18:19:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 973.6 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (945.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "content-length": "194",
    "etag": "W/\"c2-hyuIOSfa78OE1/avau8jUXNTBWs\"",
    "date": "Thu, 05 Jun 2025 18:19:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_retrieving",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_retrieving",
    "language": "en"
  }
}
```

**⏱️ Duration:** 945.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Admin Operations Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (486.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NzU0OSwidXNlcl9pZCI6IjJTYld0aTJjWENSVHU1RkNObzVTVEhGZTFkVTIiLCJzdWIiOiIyU2JXdGkyY1hDUlR1NUZDTm81U1RIRmUxZFUyIiwiaWF0IjoxNzQ5MTQ3NTQ5LCJleHAiOjE3NDkxNTExNDksImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNDc1NDg0MTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNDc1NDg0MTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Cy8lEtM9M3fB2bNSoD6rrOK2yLKEGrem3ttIBsPYa0wxLyiEPjsQGtHFZfmWlUj23619PhLdGqDn_68mtrp_KAaFO56V0VofbPITwi1Ehn5JDRH4oIMSNj-nQ0IsFz69wxkfOuaNQpBXt0VLfAhX0ZGQErP-dyyNFjWC7gs7VYFzqI3WDPr4qBxLembfANnN0xc6M3RQgPioDr9LrGZdwvDObYzmuxNMOgCZcWwHRNhQmG77YhUdkwktPgf0h5TpaG863ELp3PMIRRZf0oaO4DEj1FOg1mksb0NKvm4It6-SGZcyNz-BG_6J24BbUzX8wTF6D73rP6wzuuz1Zc_GPQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "date": "Thu, 05 Jun 2025 18:19:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 486.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (991.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "200c72f5-50d4-4116-9471-195761b3f666"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "2SbWti2cXCRTu5FCNo5STHFe1dU2"
    ],
    "title": "Org-Specific Conversation"
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
    "content-length": "190",
    "etag": "W/\"be-IFZUckk0N8ZVdcqpLBQrZD+c5cI\"",
    "date": "Thu, 05 Jun 2025 18:19:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 991.4 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should not access conversation from different organization
**Status:** ✅ PASSED  
**Duration:** 1.00s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1002.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "2SbWti2cXCRTu5FCNo5STHFe1dU2"
    ],
    "title": "Org1 Conversation"
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
    "content-length": "190",
    "etag": "W/\"be-IFZUckk0N8ZVdcqpLBQrZD+c5cI\"",
    "date": "Thu, 05 Jun 2025 18:19:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_creating",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_creating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1002.9 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (991.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "content-length": "194",
    "etag": "W/\"c2-hyuIOSfa78OE1/avau8jUXNTBWs\"",
    "date": "Thu, 05 Jun 2025 18:19:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_retrieving",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_retrieving",
    "language": "en"
  }
}
```

**⏱️ Duration:** 991.4 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 0.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (856.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ"
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
    "content-length": "194",
    "etag": "W/\"c2-hyuIOSfa78OE1/avau8jUXNTBWs\"",
    "date": "Thu, 05 Jun 2025 18:19:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "common.error_retrieving",
    "details": {
      "details": "key.split is not a function or its return value is not iterable"
    },
    "messageKey": "common.error_retrieving",
    "language": "en"
  }
}
```

**⏱️ Duration:** 856.1 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (670.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "date": "Thu, 05 Jun 2025 18:19:38 GMT",
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

**⏱️ Duration:** 670.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (528.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ",
    "X-Organization-Id": "b3f71bc3-56be-4511-b4ee-c996dac16a96"
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
    "date": "Thu, 05 Jun 2025 18:19:38 GMT",
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

**⏱️ Duration:** 528.2 ms  
**❌ Error:** Request failed with status code 500  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/organizations/b3f71bc3-56be-4511-b4ee-c996dac16a96 (1455.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ"
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
    "date": "Thu, 05 Jun 2025 18:19:40 GMT",
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

**⏱️ Duration:** 1455.1 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/200c72f5-50d4-4116-9471-195761b3f666 (1256.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1NDUsImV4cCI6MTc0OTE1MTE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bn5tsVT2lVtRzg3jjgPqUwIrHrBaa0tFJjZSzdk9bj_7NwCoAKlaRRj2pUeSdfycIr8HoVL6VftE_ljE2jhfJWmo3lqYKoaNHZhvImTr3nYRWhe7DGJMibf0NLrQfUoBmU9zfxDzzc3S7_iUlLSp2h0WJF39KSCgYnB88j7pbRWlrB2ofBWfXHUR_EX3p5-BIitEgQic8jd_J3Rb2_id-y5HWQpgzwG1_qpn0rqv96vP8ihNeiqR4f-WzS6SNVGekrFkwEHNU-mt2MDqMBWTYHys36OVBIE78Kd1Wz_yaKk55kWoFGFwu6W-9wthFs7g6ZmSUtUlRRH2QF1uYOvqpQ"
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
    "date": "Thu, 05 Jun 2025 18:19:41 GMT",
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

**⏱️ Duration:** 1256.8 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (312.6ms)</summary>

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
    "etag": "W/\"6aa-EWLZv3ZdJE5P/ep6ea44N23XKbg\"",
    "date": "Thu, 05 Jun 2025 18:19:41 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1ODEsImV4cCI6MTc0OTE1MTE4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IW71Mph1LdGSkRvOdwMNoPaNFUp389rESnojRt9umsS8QfrYJdg-DvchgHSskgtz83jft4N8USeitaFjLnHwmPJr0WuaU43W3c8GEn_oTfkiBJ2kXPW3EDN0gq_QKAi4CXcKQaqh-lW7bmAmkccYEdww1hO0dKx7KLb4t5ukKfSuVu5xWy0IZi9Ghlo2kqLeUis9akiP_jKwGC8LlrPkMJqnxeCWjczoR4w21y87wyeR3UkOnQhzWNgJMWbKmV4FfutnBXxcQwlDNGrLTbJrUeWxRoEEbOIaxRu83-05jeWGUR-tjyF2wFQxoUeGRNJW2Qr-YtC8aQkuJCCQenArnA",
        "refreshToken": "AMf-vBzjGGlmX8GZQp_ksF43u4d3HR4aw8u8aYop6s1DZp7xHdAA2gKtvAyhMTU14EsFZb3pdH7NmiTSa6h--1MJkZFhUEXQPDKKVs2TSGWrWNtb05G2tc0k9bLZ0FQWJDDhSLKk9PW_ldTFRHunr3fukB4OvgRAUrbbwpp9tHCr8Tk3-t3LgvDYEntyUibc5RZDJ11mYeFZMgPDUewqUqaE8XB6SbVx7my44GbNGRPlSqE3PfhCYFgAKLhQROiiwAXuX87whmyO",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 312.6 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/admin/users/2SbWti2cXCRTu5FCNo5STHFe1dU2 (1412.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1ODEsImV4cCI6MTc0OTE1MTE4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IW71Mph1LdGSkRvOdwMNoPaNFUp389rESnojRt9umsS8QfrYJdg-DvchgHSskgtz83jft4N8USeitaFjLnHwmPJr0WuaU43W3c8GEn_oTfkiBJ2kXPW3EDN0gq_QKAi4CXcKQaqh-lW7bmAmkccYEdww1hO0dKx7KLb4t5ukKfSuVu5xWy0IZi9Ghlo2kqLeUis9akiP_jKwGC8LlrPkMJqnxeCWjczoR4w21y87wyeR3UkOnQhzWNgJMWbKmV4FfutnBXxcQwlDNGrLTbJrUeWxRoEEbOIaxRu83-05jeWGUR-tjyF2wFQxoUeGRNJW2Qr-YtC8aQkuJCCQenArnA"
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
    "date": "Thu, 05 Jun 2025 18:19:43 GMT",
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

**⏱️ Duration:** 1412.3 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (326.4ms)</summary>

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
    "etag": "W/\"6aa-YYxpGSXfns2k1dAjbJY5kUNnCqE\"",
    "date": "Thu, 05 Jun 2025 18:19:43 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1ODMsImV4cCI6MTc0OTE1MTE4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.W6aF9TeSM4PiGNEQ68mTHuM50UX01PQhvK6N5lHbSHneqNyIqG8HmZpThPt2zZ0GnHo1ySuX2A00dZkQ6q_phU4e_8KC_IMl6WZc72XDlGUtNVs3_d2yGJIQ2mY9QBlNgHqo78gSmP2lzcBmEhasThzHihFOz6DC-qva7JP-jhNpqw5J--Ub55zxPmIJCqLz_H8ft4UCp33PnjZjmdkKkWFnO-9S6g9WwwNg1Xo7bcgkuQwz_7QbtkeV-yhSvyJANqaTvONoYxl2-T6X8kDASJjdzen27wBTz7NYoGAipEkMau3-NONORA2YNt9opRsFZE3NxMYtQeWX8SXqg1tx5A",
        "refreshToken": "AMf-vBzZIDRoFBGKrTG4R0jev2MfzfbgBRKIRuDl7egDDJ9WFhL15ow0OVMuFAA7eK_JZGVgze3pg4__IaFdcvBgeWbMXIQmaIRZiP2_KHxu8GPJqpCVeLJXxVXhckizboa7HSIbPReasbfrEoFm3MWR1qW71UbUGDQ226Di17muVO1TtzuOcTEoM6Goxk2LfCGtuPu3Flsdv-vAmWkRl8txLvlGh6zHRPQsggkFIpDnfYAxSbZroZ3Gf4MQUCIugF1tndzoU2jI",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 326.4 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/KQSUqYjgZ7Zc0gsAr6n3oNPPHux2 (1111.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ3NTgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDc1ODMsImV4cCI6MTc0OTE1MTE4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.W6aF9TeSM4PiGNEQ68mTHuM50UX01PQhvK6N5lHbSHneqNyIqG8HmZpThPt2zZ0GnHo1ySuX2A00dZkQ6q_phU4e_8KC_IMl6WZc72XDlGUtNVs3_d2yGJIQ2mY9QBlNgHqo78gSmP2lzcBmEhasThzHihFOz6DC-qva7JP-jhNpqw5J--Ub55zxPmIJCqLz_H8ft4UCp33PnjZjmdkKkWFnO-9S6g9WwwNg1Xo7bcgkuQwz_7QbtkeV-yhSvyJANqaTvONoYxl2-T6X8kDASJjdzen27wBTz7NYoGAipEkMau3-NONORA2YNt9opRsFZE3NxMYtQeWX8SXqg1tx5A"
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
    "date": "Thu, 05 Jun 2025 18:19:44 GMT",
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

**⏱️ Duration:** 1111.1 ms  

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
- Total conversations created: 0
- Total organizations created: 2
- Total test users created: 2
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
