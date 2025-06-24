# E2E Test Report: conversations-tests

**Date:** 6/6/2025  
**Time:** 12:15:01 AM  
**Duration:** 54.05s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants | PASSED | 2.66s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants | PASSED | 0.82s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array | PASSED | 0.56s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants | PASSED | 1.14s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant | PASSED | 0.91s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant | PASSED | 1.75s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user | PASSED | 1.03s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission | PASSED | 10.01s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format | PASSED | 0.75s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user | PASSED | 1.04s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user | PASSED | 0.89s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user | PASSED | 0.83s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator) | PASSED | 0.91s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator) | PASSED | 0.94s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user | PASSED | 0.52s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin) | PASSED | 1.86s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user | PASSED | 0.51s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin) | PASSED | 1.15s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user | PASSED | 0.50s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization | PASSED | 1.04s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization | PASSED | 2.00s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization | PASSED | 1.08s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations | PASSED | 1.10s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID | PASSED | 0.75s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.06s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.57s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data |


---

## Detailed Execution Log

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2652.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "etag": "W/\"1bf-cbQsjp0JHI3liggfwAgQbjdz43Y\"",
    "date": "Thu, 05 Jun 2025 22:14:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "1f20449e-75a4-4e91-84f4-bf0637773230",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:14:19.190Z",
      "lastMessageAt": "2025-06-05T22:14:19.190Z",
      "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "VOgpWDNwGxYADuAOcUEijZhQmj43"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 2652.2 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (813.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
  "status": 400,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "168",
    "etag": "W/\"a8-NsO40DBhlcPhkkFBojtr+zRUFp0\"",
    "date": "Thu, 05 Jun 2025 22:14:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Participants must be an array with at least two participants",
    "details": {},
    "messageKey": "conversations.participants_required",
    "language": "en"
  }
}
```

**⏱️ Duration:** 813.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (547.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "title": "Invalid Conversation"
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
    "content-length": "168",
    "etag": "W/\"a8-NsO40DBhlcPhkkFBojtr+zRUFp0\"",
    "date": "Thu, 05 Jun 2025 22:14:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Participants must be an array with at least two participants",
    "details": {},
    "messageKey": "conversations.participants_required",
    "language": "en"
  }
}
```

**⏱️ Duration:** 547.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.14s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1135.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "VOgpWDNwGxYADuAOcUEijZhQmj43",
      "hc0G2JrJpIccYB75KurKyAMJIFS2"
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
    "etag": "W/\"1e3-9Lm1/kbWoS3/pJc61R4m5eeVFbA\"",
    "date": "Thu, 05 Jun 2025 22:14:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "95ac5818-8811-4a15-9e81-9f9e75cd7ef2",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-05T22:14:22.378Z",
      "lastMessageAt": "2025-06-05T22:14:22.378Z",
      "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "VOgpWDNwGxYADuAOcUEijZhQmj43",
        "hc0G2JrJpIccYB75KurKyAMJIFS2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1135.6 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.91s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/1f20449e-75a4-4e91-84f4-bf0637773230 (899.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "etag": "W/\"17a-xTKpSzP5ZaX21QP4EOWft44CUIw\"",
    "date": "Thu, 05 Jun 2025 22:14:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "1f20449e-75a4-4e91-84f4-bf0637773230",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:14:19.190Z",
      "lastMessageAt": "2025-06-05T22:14:19.190Z",
      "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "VOgpWDNwGxYADuAOcUEijZhQmj43"
      ],
      "messages": []
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 899.6 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1021.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "etag": "W/\"1c2-1I6DHAcnAiNdVW0B0KMIjC+wZFo\"",
    "date": "Thu, 05 Jun 2025 22:14:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "35ad869f-afb8-4f8e-bcb7-341585ce3587",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:14:24.494Z",
      "lastMessageAt": "2025-06-05T22:14:24.494Z",
      "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "VOgpWDNwGxYADuAOcUEijZhQmj43"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1021.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/35ad869f-afb8-4f8e-bcb7-341585ce3587 (729.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MywidXNlcl9pZCI6ImhjMEcySnJKcEljY1lCNzVLdXJLeUFNSklGUzIiLCJzdWIiOiJoYzBHMkpySnBJY2NZQjc1S3VyS3lBTUpJRlMyIiwiaWF0IjoxNzQ5MTYxNjUzLCJleHAiOjE3NDkxNjUyNTMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTE2MTY1MTk4MUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5MTYxNjUxOTgxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.pSQuNNwQXLstKPLYlFjRtcCiGTcRJN1mMiXFYh7lXmzxg3TsWzHgcDzg8qwbROiFE4tKK6qQMnvZMD1oknozW5bJIr5z2RuY1Quzl6GCoroEURYNNOuwrKGUyFt5D9APQoxk2GVsb6RVw0rt5hnn2odBZn_BTtwzGOvibE2cuIJ7TwD1U5vx2OdjAI6yzLEY7FoCVZzSQFg9JC3K54nNV_h_fAslXjeMGVwk6rDfwIOcS7CLlusI-h6vMGxp3lE5tus5SdSiIvlzcRRmLkqNw81NhkC0Yju7ivzXoKqxJXBcOvCUuc5rvA9RzhwVMZX6LNC9O8nMI_YU5kEDLmfLVg",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "date": "Thu, 05 Jun 2025 22:14:25 GMT",
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

**⏱️ Duration:** 729.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/VOgpWDNwGxYADuAOcUEijZhQmj43 (1025.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "etag": "W/\"449-+aeoaFl8LLxONshs5ZyO8XvvSK8\"",
    "date": "Thu, 05 Jun 2025 22:14:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "35ad869f-afb8-4f8e-bcb7-341585ce3587",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:24.494Z",
        "lastMessageAt": "2025-06-05T22:14:24.494Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      },
      {
        "id": "95ac5818-8811-4a15-9e81-9f9e75cd7ef2",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T22:14:22.378Z",
        "lastMessageAt": "2025-06-05T22:14:22.378Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43",
          "hc0G2JrJpIccYB75KurKyAMJIFS2"
        ],
        "messages": []
      },
      {
        "id": "1f20449e-75a4-4e91-84f4-bf0637773230",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:19.190Z",
        "lastMessageAt": "2025-06-05T22:14:19.190Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      }
    ],
    "language": "en"
  }
}
```

**⏱️ Duration:** 1025.1 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission
**Status:** ✅ PASSED  
**Duration:** 10.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10007.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10007.0 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (746.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "content-length": "144",
    "etag": "W/\"90-7zq2lMno8m41Qg/KT0UhOo7nAd4\"",
    "date": "Thu, 05 Jun 2025 22:14:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Invalid conversation ID format",
    "details": {},
    "messageKey": "validation.invalid_conversation_id_format",
    "language": "en"
  }
}
```

**⏱️ Duration:** 746.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 1.04s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/1f20449e-75a4-4e91-84f4-bf0637773230/soft-delete (1022.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "userId": "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "date": "Thu, 05 Jun 2025 22:14:38 GMT",
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

**⏱️ Duration:** 1022.0 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.89s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/1f20449e-75a4-4e91-84f4-bf0637773230/hide (889.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "userId": "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "date": "Thu, 05 Jun 2025 22:14:39 GMT",
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

**⏱️ Duration:** 889.1 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/1f20449e-75a4-4e91-84f4-bf0637773230/unhide (824.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "userId": "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "date": "Thu, 05 Jun 2025 22:14:40 GMT",
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

**⏱️ Duration:** 824.6 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.91s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/95ac5818-8811-4a15-9e81-9f9e75cd7ef2/block (906.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MywidXNlcl9pZCI6ImhjMEcySnJKcEljY1lCNzVLdXJLeUFNSklGUzIiLCJzdWIiOiJoYzBHMkpySnBJY2NZQjc1S3VyS3lBTUpJRlMyIiwiaWF0IjoxNzQ5MTYxNjUzLCJleHAiOjE3NDkxNjUyNTMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTE2MTY1MTk4MUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5MTYxNjUxOTgxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.pSQuNNwQXLstKPLYlFjRtcCiGTcRJN1mMiXFYh7lXmzxg3TsWzHgcDzg8qwbROiFE4tKK6qQMnvZMD1oknozW5bJIr5z2RuY1Quzl6GCoroEURYNNOuwrKGUyFt5D9APQoxk2GVsb6RVw0rt5hnn2odBZn_BTtwzGOvibE2cuIJ7TwD1U5vx2OdjAI6yzLEY7FoCVZzSQFg9JC3K54nNV_h_fAslXjeMGVwk6rDfwIOcS7CLlusI-h6vMGxp3lE5tus5SdSiIvlzcRRmLkqNw81NhkC0Yju7ivzXoKqxJXBcOvCUuc5rvA9RzhwVMZX6LNC9O8nMI_YU5kEDLmfLVg",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "userId": "hc0G2JrJpIccYB75KurKyAMJIFS2"
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
    "date": "Thu, 05 Jun 2025 22:14:41 GMT",
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

**⏱️ Duration:** 906.1 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/95ac5818-8811-4a15-9e81-9f9e75cd7ef2/unblock (932.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MywidXNlcl9pZCI6ImhjMEcySnJKcEljY1lCNzVLdXJLeUFNSklGUzIiLCJzdWIiOiJoYzBHMkpySnBJY2NZQjc1S3VyS3lBTUpJRlMyIiwiaWF0IjoxNzQ5MTYxNjUzLCJleHAiOjE3NDkxNjUyNTMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTE2MTY1MTk4MUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5MTYxNjUxOTgxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.pSQuNNwQXLstKPLYlFjRtcCiGTcRJN1mMiXFYh7lXmzxg3TsWzHgcDzg8qwbROiFE4tKK6qQMnvZMD1oknozW5bJIr5z2RuY1Quzl6GCoroEURYNNOuwrKGUyFt5D9APQoxk2GVsb6RVw0rt5hnn2odBZn_BTtwzGOvibE2cuIJ7TwD1U5vx2OdjAI6yzLEY7FoCVZzSQFg9JC3K54nNV_h_fAslXjeMGVwk6rDfwIOcS7CLlusI-h6vMGxp3lE5tus5SdSiIvlzcRRmLkqNw81NhkC0Yju7ivzXoKqxJXBcOvCUuc5rvA9RzhwVMZX6LNC9O8nMI_YU5kEDLmfLVg",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "userId": "hc0G2JrJpIccYB75KurKyAMJIFS2"
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
    "date": "Thu, 05 Jun 2025 22:14:42 GMT",
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

**⏱️ Duration:** 932.9 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/1f20449e-75a4-4e91-84f4-bf0637773230/block (517.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "userId": "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "date": "Thu, 05 Jun 2025 22:14:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 517.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1034.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "etag": "W/\"1c4-xZ6nQxv9HoLooKb9S/WN5LGqBfQ\"",
    "date": "Thu, 05 Jun 2025 22:14:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "b01e9f9d-0dbc-4bae-83ea-880ff6901484",
      "title": "Conversation to Delete",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:14:43.270Z",
      "lastMessageAt": "2025-06-05T22:14:43.270Z",
      "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "VOgpWDNwGxYADuAOcUEijZhQmj43"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1034.9 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/b01e9f9d-0dbc-4bae-83ea-880ff6901484 (821.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "date": "Thu, 05 Jun 2025 22:14:44 GMT",
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

**⏱️ Duration:** 821.5 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/1f20449e-75a4-4e91-84f4-bf0637773230 (505.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "date": "Thu, 05 Jun 2025 22:14:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 505.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.15s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (1145.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "content-length": "30932",
    "etag": "W/\"78d4-e7GlCMMb8Dc45QMI7x/qCXFRstQ\"",
    "date": "Thu, 05 Jun 2025 22:14:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "35ad869f-afb8-4f8e-bcb7-341585ce3587",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:24.494Z",
        "lastMessageAt": "2025-06-05T22:14:24.494Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "VOgpWDNwGxYADuAOcUEijZhQmj43",
            "email": "conversations-regular-1749161650570@example.com",
            "name": "Regular User"
          }
        ],
        "messages": []
      },
      {
        "id": "95ac5818-8811-4a15-9e81-9f9e75cd7ef2",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T22:14:22.378Z",
        "lastMessageAt": "2025-06-05T22:14:22.378Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "VOgpWDNwGxYADuAOcUEijZhQmj43",
            "email": "conversations-regular-1749161650570@example.com",
            "name": "Regular User"
          },
          {
            "id": "hc0G2JrJpIccYB75KurKyAMJIFS2",
            "email": "conversations-moderator-1749161651981@example.com",
            "name": "Moderator User"
          }
        ],
        "messages": []
      },
      {
        "id": "1f20449e-75a4-4e91-84f4-bf0637773230",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:19.190Z",
        "lastMessageAt": "2025-06-05T22:14:19.190Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "VOgpWDNwGxYADuAOcUEijZhQmj43",
            "email": "conversations-regular-1749161650570@example.com",
            "name": "Regular User"
          }
        ],
        "messages": []
      },
      {
        "id": "fae536fc-2898-4a77-b516-457405ae115f",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:38.850Z",
        "lastMessageAt": "2025-06-05T22:09:38.850Z",
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
        "id": "948af4c9-a8c7-4160-a162-7dbaf786f65b",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:37.825Z",
        "lastMessageAt": "2025-06-05T22:09:37.825Z",
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
        "id": "0e569b88-f9de-437a-ac3a-14a616a50b32",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:14.248Z",
        "lastMessageAt": "2025-06-05T22:09:14.248Z",
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

**⏱️ Duration:** 1145.4 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (489.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MTY1MSwidXNlcl9pZCI6IlZPZ3BXRE53R3hZQUR1QU9jVUVpalpoUW1qNDMiLCJzdWIiOiJWT2dwV0ROd0d4WUFEdUFPY1VFaWpaaFFtajQzIiwiaWF0IjoxNzQ5MTYxNjUxLCJleHAiOjE3NDkxNjUyNTEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDkxNjE2NTA1NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CS1nU15Gs2V0R6OogRwOD3hU7PaHM-QE13KSTZlc81Le6C9beIPkDsO0MrmIJ1pp7yu64b1YglRU9m1CJiZ1ozT8Hy3kfCTvWRFrzgeRGOCtL0z9AxlLtf5pQlb8ExhAzMRz8D8ViegArUzwKi3RF1fz9uw5rQO8_qmQca9pASxnXEX-P2KOTpdhuiv16Qk1KjGgByurdse5tbPtFOFcXHLQzdHAjF-Yis1Tnm_4MAzdHUgHz8fOhajvxkYeUQJS9nsWErueGsvWR1puxJirEPX23Tc4_5sNNkYDTOS4TRQo1Y6DolOhAiYqm4ChbNDx3Oy0xGMor5atAoI2YrbmaA",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "date": "Thu, 05 Jun 2025 22:14:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 489.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 1.04s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1035.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "f0dc0a42-1240-4ac6-9545-89947f873736"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "etag": "W/\"1c7-eYiuLFzOT5GQ2p1VRuQ+CrlbCvg\"",
    "date": "Thu, 05 Jun 2025 22:14:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "43ab7ba4-38ae-4a35-9ab1-8b9c91369404",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:14:47.316Z",
      "lastMessageAt": "2025-06-05T22:14:47.316Z",
      "organizationId": "f0dc0a42-1240-4ac6-9545-89947f873736",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "VOgpWDNwGxYADuAOcUEijZhQmj43"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1035.9 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization
**Status:** ✅ PASSED  
**Duration:** 2.00s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1089.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "VOgpWDNwGxYADuAOcUEijZhQmj43"
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
    "etag": "W/\"1bf-WbelpwoSXJv4OaxL+Z0ffWU3bkc\"",
    "date": "Thu, 05 Jun 2025 22:14:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "af08f174-a817-4489-95eb-a518cb267c63",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:14:48.413Z",
      "lastMessageAt": "2025-06-05T22:14:48.413Z",
      "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "VOgpWDNwGxYADuAOcUEijZhQmj43"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1089.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/af08f174-a817-4489-95eb-a518cb267c63 (905.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "f0dc0a42-1240-4ac6-9545-89947f873736"
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
    "etag": "W/\"17a-4mcxkSqyWwBwhrxFsvvDnnFjk+0\"",
    "date": "Thu, 05 Jun 2025 22:14:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "af08f174-a817-4489-95eb-a518cb267c63",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T22:14:48.413Z",
      "lastMessageAt": "2025-06-05T22:14:48.413Z",
      "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "VOgpWDNwGxYADuAOcUEijZhQmj43"
      ],
      "messages": []
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 905.6 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 1.08s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1076.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "etag": "W/\"59c-eHOfKv1twu03X9DaFnZG1ji9ack\"",
    "date": "Thu, 05 Jun 2025 22:14:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "af08f174-a817-4489-95eb-a518cb267c63",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:48.413Z",
        "lastMessageAt": "2025-06-05T22:14:48.413Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      },
      {
        "id": "35ad869f-afb8-4f8e-bcb7-341585ce3587",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:24.494Z",
        "lastMessageAt": "2025-06-05T22:14:24.494Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      },
      {
        "id": "95ac5818-8811-4a15-9e81-9f9e75cd7ef2",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T22:14:22.378Z",
        "lastMessageAt": "2025-06-05T22:14:22.378Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43",
          "hc0G2JrJpIccYB75KurKyAMJIFS2"
        ],
        "messages": []
      },
      {
        "id": "1f20449e-75a4-4e91-84f4-bf0637773230",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:19.190Z",
        "lastMessageAt": "2025-06-05T22:14:19.190Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      }
    ],
    "language": "en"
  }
}
```

**⏱️ Duration:** 1076.3 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 1.10s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1101.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ"
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
    "content-length": "26339",
    "etag": "W/\"66e3-i4Qx6y4fQP84KOt8hsX9vVXWZfE\"",
    "date": "Thu, 05 Jun 2025 22:14:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "af08f174-a817-4489-95eb-a518cb267c63",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:48.413Z",
        "lastMessageAt": "2025-06-05T22:14:48.413Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      },
      {
        "id": "43ab7ba4-38ae-4a35-9ab1-8b9c91369404",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:47.316Z",
        "lastMessageAt": "2025-06-05T22:14:47.316Z",
        "organizationId": "f0dc0a42-1240-4ac6-9545-89947f873736",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      },
      {
        "id": "35ad869f-afb8-4f8e-bcb7-341585ce3587",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:24.494Z",
        "lastMessageAt": "2025-06-05T22:14:24.494Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      },
      {
        "id": "95ac5818-8811-4a15-9e81-9f9e75cd7ef2",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-05T22:14:22.378Z",
        "lastMessageAt": "2025-06-05T22:14:22.378Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43",
          "hc0G2JrJpIccYB75KurKyAMJIFS2"
        ],
        "messages": []
      },
      {
        "id": "1f20449e-75a4-4e91-84f4-bf0637773230",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:19.190Z",
        "lastMessageAt": "2025-06-05T22:14:19.190Z",
        "organizationId": "d01c7f20-927a-4e15-b66b-ea0e5337f25f",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "VOgpWDNwGxYADuAOcUEijZhQmj43"
        ],
        "messages": []
      },
      {
        "id": "fae536fc-2898-4a77-b516-457405ae115f",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:09:38.850Z",
        "lastMessageAt": "2025-06-05T22:09:38.850Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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

**⏱️ Duration:** 1101.0 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (741.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
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
    "date": "Thu, 05 Jun 2025 22:14:52 GMT",
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

**⏱️ Duration:** 741.0 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.06s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/1f20449e-75a4-4e91-84f4-bf0637773230 (51.3ms)</summary>

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
    "date": "Thu, 05 Jun 2025 22:14:52 GMT",
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

**⏱️ Duration:** 51.3 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (562.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ",
    "X-Organization-Id": "d01c7f20-927a-4e15-b66b-ea0e5337f25f"
  },
  "data": {
    "participants": "not-an-array"
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
    "content-length": "168",
    "etag": "W/\"a8-NsO40DBhlcPhkkFBojtr+zRUFp0\"",
    "date": "Thu, 05 Jun 2025 22:14:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Participants must be an array with at least two participants",
    "details": {},
    "messageKey": "conversations.participants_required",
    "language": "en"
  }
}
```

**⏱️ Duration:** 562.8 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/1f20449e-75a4-4e91-84f4-bf0637773230 (656.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ"
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
    "date": "Thu, 05 Jun 2025 22:14:54 GMT",
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

**⏱️ Duration:** 656.3 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/95ac5818-8811-4a15-9e81-9f9e75cd7ef2 (659.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ"
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
    "date": "Thu, 05 Jun 2025 22:14:54 GMT",
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

**⏱️ Duration:** 659.1 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/d01c7f20-927a-4e15-b66b-ea0e5337f25f (1439.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ"
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
    "date": "Thu, 05 Jun 2025 22:14:56 GMT",
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

**⏱️ Duration:** 1439.9 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/f0dc0a42-1240-4ac6-9545-89947f873736 (1331.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2NDcsImV4cCI6MTc0OTE2NTI0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6UEBcptuZv1NpkFbfV1ot2UZt9fmss18rVf7jmPKmbVPGmOSiGx86RVnvs937C4EsyOtvl7G0pKGzsTGw63Xkj70NhoZ91GlvKk1cMFfuMW6h4cAXcjJGDMNQJkyDDVuf1AL1HfDhdzp_IoWbuwBM8ZT4P9VhGroaI0I6wc-wMJZ6ftZdIHOz1HT_N3wIfneXgFQE1cps2UdgXNtrgkaBVqKn-4MRYlZ0MxFB9q7gkQuHF8ZEiai1AdcoaHiz96HrCLKeobYBz_ZCb_2xoKNp_Np4Bhevj3qOOyqtu3JqxPBvYbZP1nhNYF8V-YiOyvkmms8yvbe5zlz_1pfxIpZQ"
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
    "date": "Thu, 05 Jun 2025 22:14:57 GMT",
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

**⏱️ Duration:** 1331.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (315.4ms)</summary>

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
    "etag": "W/\"6aa-5aT4476/oxDqmMvISa8cyIq9LGw\"",
    "date": "Thu, 05 Jun 2025 22:14:57 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2OTcsImV4cCI6MTc0OTE2NTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BV6hstmS7zKWavWu3NUdb7JO1ZN-WrhgbGM2Qx-L-YjGb-y8JhZRy22yW3gBsWbxKb4ieEJW2kZdQU2KgtjwkfYOohs_wAgV6uQuujYn2i5jsHKRcrYpLxiuBIBdVnBuF5LSwNISROiaStuM9YmWtjPcRBjkfQa-yUtPFqoUlol-Wer8tkj_Y3p7Y9_RSTso_2RDZ0cRFIOREaPiO-2_HghRR7GgUtqvuSbgZkzmZAOe5WXlRYP2sHLprG70GhgzClyv7FKudgwPvn3rXQxoruo-T5h1CxDW1ytNT9SIzNw7FB3e8cIAT0vnmEisuDQ6yr8Clu4EGBbcxq0GyCxsdg",
        "refreshToken": "AMf-vBwwjY1I51geUwsUSP0SeS60E1ryc14mJBS2xqJ0hPePX1hxJjrTA7l7a_Ff6viWhtPO2HdSJL6zz5fawmSPrgM68ZoDjig4TNNsApWlJ84TN8vLd2dlRNQ88uPhTmp5RHpUj3_sQAx_r6bAvKAMCc_yLVqNq89FGbSDI0DRHb3FE4EScs0zg3B_1Yc4s9ky-Ei1Lo0xfWF96n_TvEN7-AUbUA3tuogSIsG-TDTgrIktNMB-K0JfZmB6sVAY6xswHQ_GeWoA",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 315.4 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/VOgpWDNwGxYADuAOcUEijZhQmj43 (1504.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2OTcsImV4cCI6MTc0OTE2NTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BV6hstmS7zKWavWu3NUdb7JO1ZN-WrhgbGM2Qx-L-YjGb-y8JhZRy22yW3gBsWbxKb4ieEJW2kZdQU2KgtjwkfYOohs_wAgV6uQuujYn2i5jsHKRcrYpLxiuBIBdVnBuF5LSwNISROiaStuM9YmWtjPcRBjkfQa-yUtPFqoUlol-Wer8tkj_Y3p7Y9_RSTso_2RDZ0cRFIOREaPiO-2_HghRR7GgUtqvuSbgZkzmZAOe5WXlRYP2sHLprG70GhgzClyv7FKudgwPvn3rXQxoruo-T5h1CxDW1ytNT9SIzNw7FB3e8cIAT0vnmEisuDQ6yr8Clu4EGBbcxq0GyCxsdg"
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
    "date": "Thu, 05 Jun 2025 22:14:59 GMT",
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

**⏱️ Duration:** 1504.1 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (268.0ms)</summary>

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
    "etag": "W/\"6aa-o5+3ekzDjpXZSFj0VcIWwdJjgdg\"",
    "date": "Thu, 05 Jun 2025 22:14:59 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2OTksImV4cCI6MTc0OTE2NTI5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TJbQXUkZm0I-TXEllEIlvcNk3OuuCxJxdRBXP4H2BsvNTHWGrkEKNUx-twfcIuwD6ntgVYQSBjHpUqn_RCFtT7q0DmKZ0o3fng05oeo4aVPkU1nbBJsH62yJcGhNSJj-opPFKfiJFP2eftMBCTz3xjS418KE1rhln1xn06uULjIaveDmSiww6Fd-MBSmPu_rgK05T8DsfrMF-n9olt6glL02LLXr4nYPfnAProS_FRdZU6yqChDFzU-dpRFjm1P1O2Q-qPBdWAhaw2Y1_oHhTk3C4sPxyEUuhLHmjfokZXXT2-nelZvV_R9z3e3kiMnt8cDTuVUpmI9bGLJDSw4SWw",
        "refreshToken": "AMf-vByQWBF6vsNgg_jABAGRpTFJoHqpAnW15HDcy3Bbx9ipuyJCt8MS4itv-0ALP_3Xmk28Hx8z4sS9v1QVmY4x5nYYziNU8kyTAUi00OBEoSeNo0afQpFUy_mJ1dHqH-IMKk0UHKZiCfEllfxmCRW-mXs7rA6O7-qV1jb2SBnu_viaAe4LbcsZgFx5i6kfCoFgCSdSUPZyBLUnWcBJi1HpJjMh-Q13bNk8jFllpTDGZD6VxISKNpOQmA9hGNWjRyjFbUkDsgmW",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 268.0 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/hc0G2JrJpIccYB75KurKyAMJIFS2 (1207.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYxNjk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjE2OTksImV4cCI6MTc0OTE2NTI5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TJbQXUkZm0I-TXEllEIlvcNk3OuuCxJxdRBXP4H2BsvNTHWGrkEKNUx-twfcIuwD6ntgVYQSBjHpUqn_RCFtT7q0DmKZ0o3fng05oeo4aVPkU1nbBJsH62yJcGhNSJj-opPFKfiJFP2eftMBCTz3xjS418KE1rhln1xn06uULjIaveDmSiww6Fd-MBSmPu_rgK05T8DsfrMF-n9olt6glL02LLXr4nYPfnAProS_FRdZU6yqChDFzU-dpRFjm1P1O2Q-qPBdWAhaw2Y1_oHhTk3C4sPxyEUuhLHmjfokZXXT2-nelZvV_R9z3e3kiMnt8cDTuVUpmI9bGLJDSw4SWw"
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
    "date": "Thu, 05 Jun 2025 22:15:00 GMT",
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

**⏱️ Duration:** 1207.3 ms  

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
