# E2E Test Report: conversations-tests

**Date:** 6/5/2025  
**Time:** 9:40:34 PM  
**Duration:** 13.77s  
**Tests:** 1 total, 1 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants | PASSED | 1.15s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants |


---

## Detailed Execution Log

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 1.15s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1129.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTUyNDIxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNTI0MjEsImV4cCI6MTc0OTE1NjAyMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jIoD6cySnbVQWWHcUL6sb2OBcAeZfVQnCED9hpxo0-OJLO2ylvEKi8zUPdYKFEXiUETibNQGDQSwicbi-3uO49YIt4q6d0sz-Ko81WWH9x_JWIOIb4OC9aLvJaoInZbj_FEfOtwtXgWxW77bh_UUxM6-JbwaSR15D1WNL1AWMSBTgmThuLJqBgkqLnuQLGskgpoH4El5raczfskz11Kff7lvYPkl0ZpLhvsh8Bimnsx0JLcE4M5djznbUlW5h7jgFGFmPueoLT4wHTj5aNiZ4d0uV0imy_cvMBOxFAsS0zgbUQa7T_Q3eyYEHoCH7pFrJ4z1d_2Fiwl97xOFGeN_8Q",
    "X-Organization-Id": "f4ca0db5-89fa-489c-ba14-d9a297315b9a"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oqMFf2nbsjXSyGAa2AJYbtP7WWH2"
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
    "etag": "W/\"1bf-JfGfD5tAFDXtuIbcOv7phWrSouo\"",
    "date": "Thu, 05 Jun 2025 19:40:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "6e7464ae-a30c-4d7f-8bd0-99bafc5b3a04",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T19:40:28.631Z",
      "lastMessageAt": "2025-06-05T19:40:28.631Z",
      "organizationId": "f4ca0db5-89fa-489c-ba14-d9a297315b9a",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oqMFf2nbsjXSyGAa2AJYbtP7WWH2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1129.1 ms  

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
