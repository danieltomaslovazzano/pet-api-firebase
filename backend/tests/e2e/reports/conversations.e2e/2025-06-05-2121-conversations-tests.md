# E2E Test Report: conversations-tests

**Date:** 6/5/2025  
**Time:** 9:21:32 PM  
**Duration:** 18.59s  
**Tests:** 1 total, 1 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants | PASSED | 2.74s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants |


---

## Detailed Execution Log

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.74s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2735.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTUxMjc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNTEyNzQsImV4cCI6MTc0OTE1NDg3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ilZXUUyza6QE1ZAUflo2QwKyzXA-NY-Vj5PYDbPqDbMCRKcfGtEjYh9anvgsoDr7ceI5Ze5QmONJBR9-CBmJKuCsEmtPOz7njstCk1XBspyI3DQOh6nras5Cg-dmZPYR4SHUJGR_r8fkXab4lrL1JNysF8nCZErcP2T3pa4r5O-gggwCb-TltchNd7zhKPI6POgi1jSctp1Xix0DzxDJajaI9G2Bts8eLMx_eNT3r-WjZ8t-cVUqvQ4xYXEjRt8WHWgHXAAbUv-JTYKtcK3o9HXjRVFMQnjMzrUxXoSBbty6lqkqDaxREbGo8f2k-gRauurAGqTUDdGMauFyBx-mLA",
    "X-Organization-Id": "da94b957-6bfd-4b39-adce-e50c32ba6ec2"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "NoAYi2ohNlTlo1lPSsW8agGOYI63"
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
    "date": "Thu, 05 Jun 2025 19:21:26 GMT",
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

**⏱️ Duration:** 2735.3 ms  
**❌ Error:** Request failed with status code 500  

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
