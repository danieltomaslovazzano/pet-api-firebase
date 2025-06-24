# E2E Test Report: conversations-tests

**Date:** 6/13/2025  
**Time:** 5:04:09 PM  
**Duration:** 48.56s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants | PASSED | 1.65s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants | PASSED | 0.73s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array | PASSED | 0.55s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants | PASSED | 1.03s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant | PASSED | 0.73s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant | PASSED | 1.73s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user | PASSED | 0.94s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission | PASSED | 10.01s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format | PASSED | 0.76s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user | PASSED | 1.03s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user | PASSED | 0.81s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user | PASSED | 0.85s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator) | PASSED | 1.00s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator) | PASSED | 0.95s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user | PASSED | 0.46s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin) | PASSED | 1.80s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user | PASSED | 0.49s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin) | PASSED | 1.13s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin) |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user | PASSED | 0.52s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization | PASSED | 1.04s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization | PASSED | 1.92s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization | PASSED | 1.02s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations | PASSED | 1.07s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID | PASSED | 0.72s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.01s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.66s | Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data |


---

## Detailed Execution Log

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 1.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1643.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "etag": "W/\"1bf-UQHC8kmims72UtnR1BwUhoYRW8s\"",
    "date": "Fri, 13 Jun 2025 15:03:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "ef7c7d00-e30e-475f-8384-140e3486389d",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T15:03:29.965Z",
      "lastMessageAt": "2025-06-13T15:03:29.965Z",
      "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1643.7 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (729.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:03:31 GMT",
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

**⏱️ Duration:** 729.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (544.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:03:31 GMT",
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

**⏱️ Duration:** 544.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Creation Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1023.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "nJTNPFCdGXX3L0IH6iaeGfawDnl1",
      "L4cDFpkn9RXDlo4NI5kmoc4RMNr1"
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
    "etag": "W/\"1e3-vDkXw3RE/TZrfdME9x9PPSD9EO0\"",
    "date": "Fri, 13 Jun 2025 15:03:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "51f3d93e-6cfe-4b21-9f7f-848c611faf4a",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-13T15:03:32.324Z",
      "lastMessageAt": "2025-06-13T15:03:32.324Z",
      "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nJTNPFCdGXX3L0IH6iaeGfawDnl1",
        "L4cDFpkn9RXDlo4NI5kmoc4RMNr1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1023.8 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/ef7c7d00-e30e-475f-8384-140e3486389d (723.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "etag": "W/\"17a-53CbtXcpEIAeO0LWyIDbv19Fcbw\"",
    "date": "Fri, 13 Jun 2025 15:03:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "ef7c7d00-e30e-475f-8384-140e3486389d",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T15:03:29.965Z",
      "lastMessageAt": "2025-06-13T15:03:29.965Z",
      "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
      ],
      "messages": []
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 723.5 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1024.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "etag": "W/\"1c2-7o4UHreV+5pJBvxLc5Kl7B9LFZY\"",
    "date": "Fri, 13 Jun 2025 15:03:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "16cfad8f-3831-429d-91f2-ed23fc89e0ca",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T15:03:34.110Z",
      "lastMessageAt": "2025-06-13T15:03:34.110Z",
      "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1024.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/16cfad8f-3831-429d-91f2-ed23fc89e0ca (703.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwNSwidXNlcl9pZCI6Ikw0Y0RGcGtuOVJYRGxvNE5JNWttb2M0Uk1OcjEiLCJzdWIiOiJMNGNERnBrbjlSWERsbzROSTVrbW9jNFJNTnIxIiwiaWF0IjoxNzQ5ODI3MDA1LCJleHAiOjE3NDk4MzA2MDUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTgyNzAwMzg3NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5ODI3MDAzODc1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.EjFKgmmKASMFObPUxPRQKhN9rMfolJVR3ereGjQ6kWo0aO2ioufbtiAqJ2NDM4RoHRiRdMD03MP_-lhkzR0f2YEEM-AaqvTwjFG1UcCZBOMR3BiR5a2Dn7yInoShqHpSPqVpCzt-gRRoNl8pelqQk2bqwZWBGcyU4hr76nX3rOrhLdWKuuzAinsA8Y3k9iiEz-T6iK6gwQv8yachrPVQo054ybGhmV0vFYEfptgyMMM-5EEkgpUtvq7lKLSLZIL39x3UrGEJ_Xt9EimbIYdl59a92FX_vVkq_xo9HVAxk1ZlOMXn8Z9IGNEP07V_7zSj3vyVAtRoG2C2KUneAIzlwQ",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:03:35 GMT",
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

**⏱️ Duration:** 703.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/nJTNPFCdGXX3L0IH6iaeGfawDnl1 (935.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "etag": "W/\"449-EsztowzNSCIq9gYLSyyBeDtzgrQ\"",
    "date": "Fri, 13 Jun 2025 15:03:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "16cfad8f-3831-429d-91f2-ed23fc89e0ca",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:34.110Z",
        "lastMessageAt": "2025-06-13T15:03:34.110Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      },
      {
        "id": "51f3d93e-6cfe-4b21-9f7f-848c611faf4a",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-13T15:03:32.324Z",
        "lastMessageAt": "2025-06-13T15:03:32.324Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1",
          "L4cDFpkn9RXDlo4NI5kmoc4RMNr1"
        ],
        "messages": []
      },
      {
        "id": "ef7c7d00-e30e-475f-8384-140e3486389d",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:29.965Z",
        "lastMessageAt": "2025-06-13T15:03:29.965Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      }
    ],
    "language": "en"
  }
}
```

**⏱️ Duration:** 935.5 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should fail to get conversations for other user without permission
**Status:** ✅ PASSED  
**Duration:** 10.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10009.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10009.3 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Retrieval Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (760.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:03:46 GMT",
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

**⏱️ Duration:** 760.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ef7c7d00-e30e-475f-8384-140e3486389d/soft-delete (1032.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "userId": "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "date": "Fri, 13 Jun 2025 15:03:48 GMT",
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

**⏱️ Duration:** 1032.0 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ef7c7d00-e30e-475f-8384-140e3486389d/hide (806.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "userId": "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "date": "Fri, 13 Jun 2025 15:03:48 GMT",
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

**⏱️ Duration:** 806.7 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ef7c7d00-e30e-475f-8384-140e3486389d/unhide (845.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "userId": "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "date": "Fri, 13 Jun 2025 15:03:49 GMT",
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

**⏱️ Duration:** 845.7 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 1.00s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/51f3d93e-6cfe-4b21-9f7f-848c611faf4a/block (997.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwNSwidXNlcl9pZCI6Ikw0Y0RGcGtuOVJYRGxvNE5JNWttb2M0Uk1OcjEiLCJzdWIiOiJMNGNERnBrbjlSWERsbzROSTVrbW9jNFJNTnIxIiwiaWF0IjoxNzQ5ODI3MDA1LCJleHAiOjE3NDk4MzA2MDUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTgyNzAwMzg3NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5ODI3MDAzODc1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.EjFKgmmKASMFObPUxPRQKhN9rMfolJVR3ereGjQ6kWo0aO2ioufbtiAqJ2NDM4RoHRiRdMD03MP_-lhkzR0f2YEEM-AaqvTwjFG1UcCZBOMR3BiR5a2Dn7yInoShqHpSPqVpCzt-gRRoNl8pelqQk2bqwZWBGcyU4hr76nX3rOrhLdWKuuzAinsA8Y3k9iiEz-T6iK6gwQv8yachrPVQo054ybGhmV0vFYEfptgyMMM-5EEkgpUtvq7lKLSLZIL39x3UrGEJ_Xt9EimbIYdl59a92FX_vVkq_xo9HVAxk1ZlOMXn8Z9IGNEP07V_7zSj3vyVAtRoG2C2KUneAIzlwQ",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "userId": "L4cDFpkn9RXDlo4NI5kmoc4RMNr1"
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
    "date": "Fri, 13 Jun 2025 15:03:50 GMT",
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

**⏱️ Duration:** 997.8 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/51f3d93e-6cfe-4b21-9f7f-848c611faf4a/unblock (943.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwNSwidXNlcl9pZCI6Ikw0Y0RGcGtuOVJYRGxvNE5JNWttb2M0Uk1OcjEiLCJzdWIiOiJMNGNERnBrbjlSWERsbzROSTVrbW9jNFJNTnIxIiwiaWF0IjoxNzQ5ODI3MDA1LCJleHAiOjE3NDk4MzA2MDUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0OTgyNzAwMzg3NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ5ODI3MDAzODc1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.EjFKgmmKASMFObPUxPRQKhN9rMfolJVR3ereGjQ6kWo0aO2ioufbtiAqJ2NDM4RoHRiRdMD03MP_-lhkzR0f2YEEM-AaqvTwjFG1UcCZBOMR3BiR5a2Dn7yInoShqHpSPqVpCzt-gRRoNl8pelqQk2bqwZWBGcyU4hr76nX3rOrhLdWKuuzAinsA8Y3k9iiEz-T6iK6gwQv8yachrPVQo054ybGhmV0vFYEfptgyMMM-5EEkgpUtvq7lKLSLZIL39x3UrGEJ_Xt9EimbIYdl59a92FX_vVkq_xo9HVAxk1ZlOMXn8Z9IGNEP07V_7zSj3vyVAtRoG2C2KUneAIzlwQ",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "userId": "L4cDFpkn9RXDlo4NI5kmoc4RMNr1"
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
    "date": "Fri, 13 Jun 2025 15:03:51 GMT",
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

**⏱️ Duration:** 943.8 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Conversation Management Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ef7c7d00-e30e-475f-8384-140e3486389d/block (453.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "userId": "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "date": "Fri, 13 Jun 2025 15:03:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 453.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1126.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "etag": "W/\"1c4-UQ0+wXDf9hLeaNtRTKJfziMFJGc\"",
    "date": "Fri, 13 Jun 2025 15:03:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "10e6d24e-f098-4b10-a8f2-b4296010b5db",
      "title": "Conversation to Delete",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T15:03:52.771Z",
      "lastMessageAt": "2025-06-13T15:03:52.771Z",
      "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1126.3 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/10e6d24e-f098-4b10-a8f2-b4296010b5db (667.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:03:53 GMT",
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

**⏱️ Duration:** 667.9 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/ef7c7d00-e30e-475f-8384-140e3486389d (482.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:03:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 482.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.13s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (1117.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "content-length": "60910",
    "etag": "W/\"edee-UsjHL5oEa05U/bRaa7i744Hoilk\"",
    "date": "Fri, 13 Jun 2025 15:03:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "16cfad8f-3831-429d-91f2-ed23fc89e0ca",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:34.110Z",
        "lastMessageAt": "2025-06-13T15:03:34.110Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "nJTNPFCdGXX3L0IH6iaeGfawDnl1",
            "email": "conversations-regular-1749827002495@example.com",
            "name": "Regular User"
          }
        ],
        "messages": []
      },
      {
        "id": "51f3d93e-6cfe-4b21-9f7f-848c611faf4a",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-13T15:03:32.324Z",
        "lastMessageAt": "2025-06-13T15:03:32.324Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "nJTNPFCdGXX3L0IH6iaeGfawDnl1",
            "email": "conversations-regular-1749827002495@example.com",
            "name": "Regular User"
          },
          {
            "id": "L4cDFpkn9RXDlo4NI5kmoc4RMNr1",
            "email": "conversations-moderator-1749827003875@example.com",
            "name": "Moderator User"
          }
        ],
        "messages": []
      },
      {
        "id": "ef7c7d00-e30e-475f-8384-140e3486389d",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:29.965Z",
        "lastMessageAt": "2025-06-13T15:03:29.965Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel"
          },
          {
            "id": "nJTNPFCdGXX3L0IH6iaeGfawDnl1",
            "email": "conversations-regular-1749827002495@example.com",
            "name": "Regular User"
          }
        ],
        "messages": []
      },
      {
        "id": "59cfa16f-0625-4b6e-9b2b-67bceba06dd8",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:03.260Z",
        "lastMessageAt": "2025-06-13T15:03:04.624Z",
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
          }
        ]
      },
      {
        "id": "924edaaf-db67-4014-8265-a16b7277eb44",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:02:22.914Z",
        "lastMessageAt": "2025-06-13T15:02:24.923Z",
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
          }
        ]
      },
      {
        "id": "44bb75ad-58df-4d03-a444-6f2308eaa915",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:59:11.180Z",
        "lastMessageAt": "2025-06-13T14:59:11.180Z",
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
        "id": "b67cb737-e0cb-4b40-91b6-94b0d5a3d0fa",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:59:10.140Z",
        "lastMessageAt": "2025-06-13T14:59:10.140Z",
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
        "id": "3135fff7-740c-4d4d-ab6c-de98bc933d9c",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:58:48.209Z",
        "lastMessageAt": "2025-06-13T14:58:48.209Z",
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
        "id": "1e5af2c8-e36f-45d5-b6b2-e8d190c8f690",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:58:17.791Z",
        "lastMessageAt": "2025-06-13T14:58:19.266Z",
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
          }
        ]
      },
      {
        "id": "7f82d0e8-e768-4225-8f3b-0a708423612a",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:57:39.966Z",
        "lastMessageAt": "2025-06-13T14:57:41.249Z",
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
          }
        ]
      },
      {
        "id": "23da29c1-fce6-4046-8783-732cfbc60cdc",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:51:15.512Z",
        "lastMessageAt": "2025-06-13T13:51:15.512Z",
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
        "id": "34191a62-521a-43ee-941a-986a5ea791ae",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:51:14.280Z",
        "lastMessageAt": "2025-06-13T13:51:14.280Z",
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
        "id": "00bcb8c7-8589-46f7-abb0-50f9923d0227",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:50:51.905Z",
        "lastMessageAt": "2025-06-13T13:50:51.905Z",
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
        "id": "06f1f7b0-0ebf-45a4-9d03-5369ad301343",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:50:20.124Z",
        "lastMessageAt": "2025-06-13T13:50:21.511Z",
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
          }
        ]
      },
      {
        "id": "0a297ecf-ee19-40d8-90f7-0732453bad9c",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:49:42.619Z",
        "lastMessageAt": "2025-06-13T13:49:43.916Z",
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
          }
        ]
      },
      {
        "id": "27f08b1f-325d-4e0f-84a5-e1117d1b7b7b",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:38:31.230Z",
        "lastMessageAt": "2025-06-13T13:38:31.230Z",
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
        "id": "8c10175c-855d-4e1d-9111-e6076a6c434b",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:38:30.202Z",
        "lastMessageAt": "2025-06-13T13:38:30.202Z",
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
        "id": "ee1c51c3-2c09-4e7a-8b00-7b481f379e3a",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:38:08.264Z",
        "lastMessageAt": "2025-06-13T13:38:08.264Z",
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
        "id": "6cddbda1-7fc7-439e-ad53-78347528033d",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:37:38.936Z",
        "lastMessageAt": "2025-06-13T13:37:40.311Z",
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
          }
        ]
      },
      {
        "id": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:37:00.317Z",
        "lastMessageAt": "2025-06-13T13:37:01.678Z",
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
          }
        ]
      },
      {
        "id": "d889b0d0-43e8-4c5b-a35f-66e5d2ac996f",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:43:26.439Z",
        "lastMessageAt": "2025-06-05T23:43:27.910Z",
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
          }
        ]
      },
      {
        "id": "4b9c6acb-8235-43c9-bd08-5e8e830477dc",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:42:48.198Z",
        "lastMessageAt": "2025-06-05T23:42:49.632Z",
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
          }
        ]
      },
      {
        "id": "fba2bb52-5574-4953-8b1b-adb26c71b303",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:33:31.399Z",
        "lastMessageAt": "2025-06-05T23:33:32.833Z",
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
          }
        ]
      },
      {
        "id": "b00312ac-d9d8-42fd-8375-7eb1b929ac79",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:32:57.167Z",
        "lastMessageAt": "2025-06-05T23:32:58.557Z",
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
          }
        ]
      },
      {
        "id": "7dc52d94-30f1-4766-9d7d-4260af277088",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:29:46.291Z",
        "lastMessageAt": "2025-06-05T23:29:47.708Z",
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
          }
        ]
      },
      {
        "id": "d1a84119-0bda-47dd-94ec-523188c1650b",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:28:49.557Z",
        "lastMessageAt": "2025-06-05T23:28:50.875Z",
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
          }
        ]
      },
      {
        "id": "83a29823-e389-4c1e-ab9b-df6d6c68b1d8",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:20:07.190Z",
        "lastMessageAt": "2025-06-05T23:20:08.478Z",
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
          }
        ]
      },
      {
        "id": "99289191-9070-4c6b-84b6-bea08cfcbd76",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:19:50.163Z",
        "lastMessageAt": "2025-06-05T23:19:51.324Z",
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
          }
        ]
      },
      {
        "id": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:18:17.766Z",
        "lastMessageAt": "2025-06-05T23:18:19.093Z",
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
          }
        ]
      },
      {
        "id": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:17:59.264Z",
        "lastMessageAt": "2025-06-05T23:18:00.607Z",
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
          }
        ]
      },
      {
        "id": "e29a97c9-c31f-4a3c-b61e-798f3f681295",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:15:35.972Z",
        "lastMessageAt": "2025-06-05T23:15:37.285Z",
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
          }
        ]
      },
      {
        "id": "a84192fb-3f5e-4b46-9135-5098ffef237b",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:15:18.621Z",
        "lastMessageAt": "2025-06-05T23:15:19.816Z",
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
          }
        ]
      },
      {
        "id": "d516b485-3c7f-494a-945c-e3f85ddd53c9",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:09:23.092Z",
        "lastMessageAt": "2025-06-05T23:09:24.434Z",
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
          }
        ]
      },
      {
        "id": "80f3bcf1-fbfe-4f1f-9162-5a6f7abfc221",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:08:45.051Z",
        "lastMessageAt": "2025-06-05T23:08:46.345Z",
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
          }
        ]
      },
      {
        "id": "92f8ed4e-808c-49b2-8ea4-4ba14c7efcbd",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:06:20.353Z",
        "lastMessageAt": "2025-06-05T23:06:21.728Z",
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
          }
        ]
      },
      {
        "id": "76d58415-d63b-4fcf-bd32-42130a49398f",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:05:42.936Z",
        "lastMessageAt": "2025-06-05T23:05:44.265Z",
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
          }
        ]
      },
      {
        "id": "92164c66-e43a-49c6-b0b1-e0ceb9fc1352",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:03:02.920Z",
        "lastMessageAt": "2025-06-05T23:03:04.268Z",
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
          }
        ]
      },
      {
        "id": "58d6799b-ca5e-4218-a290-6659219e914c",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:02:25.984Z",
        "lastMessageAt": "2025-06-05T23:02:27.125Z",
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
          }
        ]
      },
      {
        "id": "ea495392-ea99-4018-b9ba-ca3d4b3707be",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:59:43.675Z",
        "lastMessageAt": "2025-06-05T22:59:44.954Z",
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
          }
        ]
      },
      {
        "id": "62cc1341-dfa8-4983-bdfe-5127675a2b92",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:59:06.544Z",
        "lastMessageAt": "2025-06-05T22:59:07.836Z",
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
          }
        ]
      },
      {
        "id": "295295ca-3389-4d46-9d03-956bf9813290",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:51:55.079Z",
        "lastMessageAt": "2025-06-05T22:51:56.336Z",
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
          }
        ]
      },
      {
        "id": "95ba2c6d-9d16-4224-9121-11fc29734643",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:51:48.936Z",
        "lastMessageAt": "2025-06-05T22:51:50.135Z",
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
          }
        ]
      },
      {
        "id": "6b4f958e-7afb-45d1-8362-4f5513cfb523",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:46:56.962Z",
        "lastMessageAt": "2025-06-05T22:46:58.467Z",
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
          }
        ]
      },
      {
        "id": "64ae22b0-c8da-4f7a-8d9b-09e3b0ac117a",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:46:47.303Z",
        "lastMessageAt": "2025-06-05T22:46:48.681Z",
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
          }
        ]
      },
      {
        "id": "af08f174-a817-4489-95eb-a518cb267c63",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:48.413Z",
        "lastMessageAt": "2025-06-05T22:14:48.413Z",
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
        "id": "43ab7ba4-38ae-4a35-9ab1-8b9c91369404",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:47.316Z",
        "lastMessageAt": "2025-06-05T22:14:47.316Z",
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
        "id": "35ad869f-afb8-4f8e-bcb7-341585ce3587",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:24.494Z",
        "lastMessageAt": "2025-06-05T22:14:24.494Z",
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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

**⏱️ Duration:** 1117.0 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Admin Operations Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (518.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzAwMywidXNlcl9pZCI6Im5KVE5QRkNkR1hYM0wwSUg2aWFlR2Zhd0RubDEiLCJzdWIiOiJuSlROUEZDZEdYWDNMMElINmlhZUdmYXdEbmwxIiwiaWF0IjoxNzQ5ODI3MDAzLCJleHAiOjE3NDk4MzA2MDMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDk4MjcwMDI0OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.iOVp_hxLIBbWmzVLQ_M1VLfzSlBCX_7unHQ0Dl98Kpfh1tkd3V8jLmT_2mrBfTO69XtY6JXODabv78qELd2rjb-mfBUU748Uwp9Qs7pjtTHPIrAwhCFtQ4U-K26OKUfjUtYYcDf-bt8Tt0vXFwq-InmdvTLlMZon3K8IWFFYlnx2pcrZ2ULiMSrIe9WiKgfw6Q-DoSpL4jEQbvgID3PR0F1s3m5fhiiqM1bi74c1OEH0Vv-l9GZWNv7-_3a-VcytHkdOywwBi4LPrsav6-msP1d9oo6wPm36miG3KMfPmWJrXn-Y1o-kAho63jr1tERwnnJzMdhQ31FqrxCQjlVilA",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:03:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 518.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 1.04s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1038.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "d7e7feff-3cd6-410b-bae7-1d20ee9aa4e1"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "etag": "W/\"1c7-YEeUjLXG4A6RbeYXZWkieyntxh4\"",
    "date": "Fri, 13 Jun 2025 15:03:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "283890a5-5aef-4a97-b480-b0ca905af61d",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T15:03:56.636Z",
      "lastMessageAt": "2025-06-13T15:03:56.636Z",
      "organizationId": "d7e7feff-3cd6-410b-bae7-1d20ee9aa4e1",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1038.6 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should not access conversation from different organization
**Status:** ✅ PASSED  
**Duration:** 1.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1028.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
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
    "etag": "W/\"1bf-BIawKmAtXZAyl0e5Sjndna7smmk\"",
    "date": "Fri, 13 Jun 2025 15:03:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "994ec959-2423-4077-9ec6-8d4a8cf33655",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T15:03:57.676Z",
      "lastMessageAt": "2025-06-13T15:03:57.676Z",
      "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1028.0 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/994ec959-2423-4077-9ec6-8d4a8cf33655 (886.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "d7e7feff-3cd6-410b-bae7-1d20ee9aa4e1"
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
    "etag": "W/\"17a-ROW6SddbNvkct2FAqPalQTjjilk\"",
    "date": "Fri, 13 Jun 2025 15:03:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "994ec959-2423-4077-9ec6-8d4a8cf33655",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-13T15:03:57.676Z",
      "lastMessageAt": "2025-06-13T15:03:57.676Z",
      "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
      ],
      "messages": []
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 886.3 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 1.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1012.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "etag": "W/\"59c-MBkaTcl8IuzfT5mJUkMVmEuqdGY\"",
    "date": "Fri, 13 Jun 2025 15:04:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "994ec959-2423-4077-9ec6-8d4a8cf33655",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:57.676Z",
        "lastMessageAt": "2025-06-13T15:03:57.676Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      },
      {
        "id": "16cfad8f-3831-429d-91f2-ed23fc89e0ca",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:34.110Z",
        "lastMessageAt": "2025-06-13T15:03:34.110Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      },
      {
        "id": "51f3d93e-6cfe-4b21-9f7f-848c611faf4a",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-13T15:03:32.324Z",
        "lastMessageAt": "2025-06-13T15:03:32.324Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1",
          "L4cDFpkn9RXDlo4NI5kmoc4RMNr1"
        ],
        "messages": []
      },
      {
        "id": "ef7c7d00-e30e-475f-8384-140e3486389d",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:29.965Z",
        "lastMessageAt": "2025-06-13T15:03:29.965Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      }
    ],
    "language": "en"
  }
}
```

**⏱️ Duration:** 1012.1 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Multitenancy & Organization Isolation Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 1.07s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1070.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig"
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
    "content-length": "53721",
    "etag": "W/\"d1d9-jEJcLNRjrStXxPdlV2kZ7/e9+hY\"",
    "date": "Fri, 13 Jun 2025 15:04:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "994ec959-2423-4077-9ec6-8d4a8cf33655",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:57.676Z",
        "lastMessageAt": "2025-06-13T15:03:57.676Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      },
      {
        "id": "283890a5-5aef-4a97-b480-b0ca905af61d",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:56.636Z",
        "lastMessageAt": "2025-06-13T15:03:56.636Z",
        "organizationId": "d7e7feff-3cd6-410b-bae7-1d20ee9aa4e1",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      },
      {
        "id": "16cfad8f-3831-429d-91f2-ed23fc89e0ca",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:34.110Z",
        "lastMessageAt": "2025-06-13T15:03:34.110Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      },
      {
        "id": "51f3d93e-6cfe-4b21-9f7f-848c611faf4a",
        "title": "Group Test Conversation",
        "type": "group",
        "status": "active",
        "createdAt": "2025-06-13T15:03:32.324Z",
        "lastMessageAt": "2025-06-13T15:03:32.324Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1",
          "L4cDFpkn9RXDlo4NI5kmoc4RMNr1"
        ],
        "messages": []
      },
      {
        "id": "ef7c7d00-e30e-475f-8384-140e3486389d",
        "title": "Test Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:29.965Z",
        "lastMessageAt": "2025-06-13T15:03:29.965Z",
        "organizationId": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87",
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "nJTNPFCdGXX3L0IH6iaeGfawDnl1"
        ],
        "messages": []
      },
      {
        "id": "59cfa16f-0625-4b6e-9b2b-67bceba06dd8",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:03:03.260Z",
        "lastMessageAt": "2025-06-13T15:03:04.624Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "924edaaf-db67-4014-8265-a16b7277eb44",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T15:02:22.914Z",
        "lastMessageAt": "2025-06-13T15:02:24.923Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "44bb75ad-58df-4d03-a444-6f2308eaa915",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:59:11.180Z",
        "lastMessageAt": "2025-06-13T14:59:11.180Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "b67cb737-e0cb-4b40-91b6-94b0d5a3d0fa",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:59:10.140Z",
        "lastMessageAt": "2025-06-13T14:59:10.140Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "3135fff7-740c-4d4d-ab6c-de98bc933d9c",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:58:48.209Z",
        "lastMessageAt": "2025-06-13T14:58:48.209Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "1e5af2c8-e36f-45d5-b6b2-e8d190c8f690",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:58:17.791Z",
        "lastMessageAt": "2025-06-13T14:58:19.266Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "7f82d0e8-e768-4225-8f3b-0a708423612a",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T14:57:39.966Z",
        "lastMessageAt": "2025-06-13T14:57:41.249Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "23da29c1-fce6-4046-8783-732cfbc60cdc",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:51:15.512Z",
        "lastMessageAt": "2025-06-13T13:51:15.512Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "34191a62-521a-43ee-941a-986a5ea791ae",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:51:14.280Z",
        "lastMessageAt": "2025-06-13T13:51:14.280Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "00bcb8c7-8589-46f7-abb0-50f9923d0227",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:50:51.905Z",
        "lastMessageAt": "2025-06-13T13:50:51.905Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "06f1f7b0-0ebf-45a4-9d03-5369ad301343",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:50:20.124Z",
        "lastMessageAt": "2025-06-13T13:50:21.511Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "0a297ecf-ee19-40d8-90f7-0732453bad9c",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:49:42.619Z",
        "lastMessageAt": "2025-06-13T13:49:43.916Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "27f08b1f-325d-4e0f-84a5-e1117d1b7b7b",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:38:31.230Z",
        "lastMessageAt": "2025-06-13T13:38:31.230Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "8c10175c-855d-4e1d-9111-e6076a6c434b",
        "title": "Org-Specific Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:38:30.202Z",
        "lastMessageAt": "2025-06-13T13:38:30.202Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "ee1c51c3-2c09-4e7a-8b00-7b481f379e3a",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:38:08.264Z",
        "lastMessageAt": "2025-06-13T13:38:08.264Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": []
      },
      {
        "id": "6cddbda1-7fc7-439e-ad53-78347528033d",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:37:38.936Z",
        "lastMessageAt": "2025-06-13T13:37:40.311Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "4a81b2e5-40dc-46b9-85da-fdd5ae5618f1",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-13T13:37:00.317Z",
        "lastMessageAt": "2025-06-13T13:37:01.678Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "d889b0d0-43e8-4c5b-a35f-66e5d2ac996f",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:43:26.439Z",
        "lastMessageAt": "2025-06-05T23:43:27.910Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "4b9c6acb-8235-43c9-bd08-5e8e830477dc",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:42:48.198Z",
        "lastMessageAt": "2025-06-05T23:42:49.632Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "fba2bb52-5574-4953-8b1b-adb26c71b303",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:33:31.399Z",
        "lastMessageAt": "2025-06-05T23:33:32.833Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "b00312ac-d9d8-42fd-8375-7eb1b929ac79",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:32:57.167Z",
        "lastMessageAt": "2025-06-05T23:32:58.557Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "7dc52d94-30f1-4766-9d7d-4260af277088",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:29:46.291Z",
        "lastMessageAt": "2025-06-05T23:29:47.708Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "d1a84119-0bda-47dd-94ec-523188c1650b",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:28:49.557Z",
        "lastMessageAt": "2025-06-05T23:28:50.875Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "83a29823-e389-4c1e-ab9b-df6d6c68b1d8",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:20:07.190Z",
        "lastMessageAt": "2025-06-05T23:20:08.478Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "99289191-9070-4c6b-84b6-bea08cfcbd76",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:19:50.163Z",
        "lastMessageAt": "2025-06-05T23:19:51.324Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:18:17.766Z",
        "lastMessageAt": "2025-06-05T23:18:19.093Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:17:59.264Z",
        "lastMessageAt": "2025-06-05T23:18:00.607Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "e29a97c9-c31f-4a3c-b61e-798f3f681295",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:15:35.972Z",
        "lastMessageAt": "2025-06-05T23:15:37.285Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "a84192fb-3f5e-4b46-9135-5098ffef237b",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:15:18.621Z",
        "lastMessageAt": "2025-06-05T23:15:19.816Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "d516b485-3c7f-494a-945c-e3f85ddd53c9",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:09:23.092Z",
        "lastMessageAt": "2025-06-05T23:09:24.434Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "80f3bcf1-fbfe-4f1f-9162-5a6f7abfc221",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:08:45.051Z",
        "lastMessageAt": "2025-06-05T23:08:46.345Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "92f8ed4e-808c-49b2-8ea4-4ba14c7efcbd",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:06:20.353Z",
        "lastMessageAt": "2025-06-05T23:06:21.728Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "76d58415-d63b-4fcf-bd32-42130a49398f",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:05:42.936Z",
        "lastMessageAt": "2025-06-05T23:05:44.265Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "92164c66-e43a-49c6-b0b1-e0ceb9fc1352",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:03:02.920Z",
        "lastMessageAt": "2025-06-05T23:03:04.268Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "58d6799b-ca5e-4218-a290-6659219e914c",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T23:02:25.984Z",
        "lastMessageAt": "2025-06-05T23:02:27.125Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "ea495392-ea99-4018-b9ba-ca3d4b3707be",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:59:43.675Z",
        "lastMessageAt": "2025-06-05T22:59:44.954Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "62cc1341-dfa8-4983-bdfe-5127675a2b92",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:59:06.544Z",
        "lastMessageAt": "2025-06-05T22:59:07.836Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "295295ca-3389-4d46-9d03-956bf9813290",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:51:55.079Z",
        "lastMessageAt": "2025-06-05T22:51:56.336Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "95ba2c6d-9d16-4224-9121-11fc29734643",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:51:48.936Z",
        "lastMessageAt": "2025-06-05T22:51:50.135Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "6b4f958e-7afb-45d1-8362-4f5513cfb523",
        "title": "Org2 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:46:56.962Z",
        "lastMessageAt": "2025-06-05T22:46:58.467Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "64ae22b0-c8da-4f7a-8d9b-09e3b0ac117a",
        "title": "Private Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:46:47.303Z",
        "lastMessageAt": "2025-06-05T22:46:48.681Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
        ],
        "messages": [
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
          }
        ]
      },
      {
        "id": "af08f174-a817-4489-95eb-a518cb267c63",
        "title": "Org1 Conversation",
        "type": "direct",
        "status": "active",
        "createdAt": "2025-06-05T22:14:48.413Z",
        "lastMessageAt": "2025-06-05T22:14:48.413Z",
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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
        "organizationId": null,
        "participants": [
          "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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
            "updatedAt": null,
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

**⏱️ Duration:** 1070.1 ms  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (713.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:04:01 GMT",
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

**⏱️ Duration:** 713.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/ef7c7d00-e30e-475f-8384-140e3486389d (7.5ms)</summary>

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
    "date": "Fri, 13 Jun 2025 15:04:01 GMT",
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

**⏱️ Duration:** 7.5 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Conversations E2E Tests - Comprehensive Test Suite (26 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (651.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig",
    "X-Organization-Id": "3728c2c0-a1a9-4088-8d0a-e7641d8e2a87"
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
    "date": "Fri, 13 Jun 2025 15:04:02 GMT",
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

**⏱️ Duration:** 651.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/ef7c7d00-e30e-475f-8384-140e3486389d (652.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig"
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
    "date": "Fri, 13 Jun 2025 15:04:03 GMT",
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

**⏱️ Duration:** 652.0 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/51f3d93e-6cfe-4b21-9f7f-848c611faf4a (726.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig"
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
    "date": "Fri, 13 Jun 2025 15:04:03 GMT",
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

**⏱️ Duration:** 726.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/3728c2c0-a1a9-4088-8d0a-e7641d8e2a87 (1197.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig"
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
    "date": "Fri, 13 Jun 2025 15:04:05 GMT",
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

**⏱️ Duration:** 1197.9 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/d7e7feff-3cd6-410b-bae7-1d20ee9aa4e1 (1214.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwMDEsImV4cCI6MTc0OTgzMDYwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxoqC5fp8UqkW2BdhEz-L4_TpJcCJbMvzbrDtBXuB9wLOVvIk5kvWhS36NZx0Sgt0myK-3mCY-1d_F3GfpW5osUybW3WB1RG4Y0-Hx6WL3wHS98VBosbTykH6R1h2z4cp8V5K2IgSEoylBypfOpNuHNdtCND2bClusyBqi4-FUXEQdt8WOFEj63qdM-FYQkCAv7EISaIA8jvApGfeb_q2PU9Gf8-aw4Oa7q27938p2YdxTG3G2T7IbEQaeUoVsmWnWxEygEK7IH4BTjqJ6urR0jUDVcI4v0iVBg4J7VpzwQfow6W_V5GtW7316a3EBF2NaZ3iuAtkuJ8Z5B2tCwyig"
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
    "date": "Fri, 13 Jun 2025 15:04:06 GMT",
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

**⏱️ Duration:** 1214.3 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (411.9ms)</summary>

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
    "etag": "W/\"6aa-7+RUMKzARQrGTTzfRmuI2RvMQk0\"",
    "date": "Fri, 13 Jun 2025 15:04:06 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNDYsImV4cCI6MTc0OTgzMDY0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.a70-IZZZrKV2K1Ee75oO8qK70WLoMcIoWUr66B5_T5dh0rx22g_PGv8fLZaR2LlSiy0vbJ6vkitGzBtBHUdkGAdtgyoamQ8hVZ215ZcTcMGfAN-Dhw8SPNVlRARZcjvHMy-mreQnTWo-S3njku04gYJwA2k0RMQ-b5lWwxRQosHNW1aan-vLTunWBzkBV7W6WGkSvP2o7h9DyFU5w0bMLVPKcSGG6OSVRT7qF3wDmDq84VUgjvIVcMvuvdbaXCCEz5KEUNVdvRf3-Zsl6qGMxEkCksiJfMMA6Pb9Gtb5naTZEb5TpHHg8SM6r-pk7pugbv3HFS7L0LrWNRNxXCtL7w",
        "refreshToken": "AMf-vBxQ_fIqhVGzn5JC0iIlvF2f3E5VYh9xoNH_URIvwextEPHIZrViVagHN6V4HAU8P4uIaa79wsY1sEOJnVQ3cWX3X_xt_sDKTBKfOyd9oU0JGBUuarJzU96r0okj8drlji8lOdRVQ3B4sHditZYcXRWmcaKRuzIsUFj8GaBF9PXgfwXnZ2MERI9VGZ0I_nWfx2v0a4AERSaGQ2pEXD1ywEKckFSEkcmLYXkoM10k5iMnuRwtt0Ss04nU1yuSjgvW9-2lxAGA",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 411.9 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/nJTNPFCdGXX3L0IH6iaeGfawDnl1 (1210.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNDYsImV4cCI6MTc0OTgzMDY0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.a70-IZZZrKV2K1Ee75oO8qK70WLoMcIoWUr66B5_T5dh0rx22g_PGv8fLZaR2LlSiy0vbJ6vkitGzBtBHUdkGAdtgyoamQ8hVZ215ZcTcMGfAN-Dhw8SPNVlRARZcjvHMy-mreQnTWo-S3njku04gYJwA2k0RMQ-b5lWwxRQosHNW1aan-vLTunWBzkBV7W6WGkSvP2o7h9DyFU5w0bMLVPKcSGG6OSVRT7qF3wDmDq84VUgjvIVcMvuvdbaXCCEz5KEUNVdvRf3-Zsl6qGMxEkCksiJfMMA6Pb9Gtb5naTZEb5TpHHg8SM6r-pk7pugbv3HFS7L0LrWNRNxXCtL7w"
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
    "date": "Fri, 13 Jun 2025 15:04:07 GMT",
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

**⏱️ Duration:** 1210.5 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (302.5ms)</summary>

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
    "etag": "W/\"6aa-QGtAkxs4Ne26rzTVn+fQ4Ax6y4g\"",
    "date": "Fri, 13 Jun 2025 15:04:08 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNDgsImV4cCI6MTc0OTgzMDY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Goq16ii16UVWb3t2q0GgWy3g-ZGdjpjnzn_ny8t8_V3mihAR74M5bvu1IVC8Yr3UuU_WFmO48RAEY9SBgjeKfb3LZIqRxduiVpsQZLjvtOWLPd1MnTgK7DM6RsMLiUxgNlUOyNquDnq0jBwlVJEWdIEGG_MxVzbSaqiKQ6x0-M0zMgrAKQPsailhJBRjh2TU36i9psWVQNp7uXsKykLrAqZ1KwovpE_noc8xRp3B2yT72mFBkyZTJCZAckqZClF1-NnRgxGIhFi4q7joRT06-ybB3-G626EplMD81L3qnOvWNIYbMKdmbD3xZBAM78CaYbgsX5uyXndI0UvhqeSlww",
        "refreshToken": "AMf-vBw1LwGU-oMqHJF4Q9F1nEGgGuCcjf2IyUoCEQOUhBWolpDDsjzA0iyOrVA55dc3KXdYL0ggrabzH09eeIb7-Ayex2plSF440urje0p-yihQ1e54GzW5PRVQ2Wa99HHEUEhIiOCztGFkm34OegSbNEMR5w87W4jWhzazXjLcUJiEUldPBHrL7_JtzMhZSCEbMaSHUZ7WjGmV6kgZ5tc3AJgC9lM0nT-UHWTGj5w0ymRXULoBSC-yeQx0TGDY5DHF_jTU1YnA",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 302.5 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/L4cDFpkn9RXDlo4NI5kmoc4RMNr1 (1260.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNDgsImV4cCI6MTc0OTgzMDY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Goq16ii16UVWb3t2q0GgWy3g-ZGdjpjnzn_ny8t8_V3mihAR74M5bvu1IVC8Yr3UuU_WFmO48RAEY9SBgjeKfb3LZIqRxduiVpsQZLjvtOWLPd1MnTgK7DM6RsMLiUxgNlUOyNquDnq0jBwlVJEWdIEGG_MxVzbSaqiKQ6x0-M0zMgrAKQPsailhJBRjh2TU36i9psWVQNp7uXsKykLrAqZ1KwovpE_noc8xRp3B2yT72mFBkyZTJCZAckqZClF1-NnRgxGIhFi4q7joRT06-ybB3-G626EplMD81L3qnOvWNIYbMKdmbD3xZBAM78CaYbgsX5uyXndI0UvhqeSlww"
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
    "date": "Fri, 13 Jun 2025 15:04:09 GMT",
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

**⏱️ Duration:** 1260.7 ms  

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
