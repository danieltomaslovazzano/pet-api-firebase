# E2E Test Report: conversations-tests

**Date:** 6/5/2025  
**Time:** 9:25:22 PM  
**Duration:** 13.16s  
**Tests:** 1 total, 1 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants | PASSED | 1.28s | Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants |


---

## Detailed Execution Log

### Test: Conversations E2E Tests - Comprehensive Test Suite (25 tests) Conversation Creation Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 1.28s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1277.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTUxNTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNTE1MDksImV4cCI6MTc0OTE1NTEwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.n0QL3baPxgK_UXCm3gCsX89OD0iMUejA4Dz6COCiriDwSWK1BMUjKN8bldYh_fRTGpqq8OyNRckMqlwNDHlQAMbfVaOH5Zy3QWvVnXFF_k_XapSMg9AYwJYEs2Z_BNyPphcKM9J-ohnO38wKzzjFWC2bR4dkspwmnGF1NVBYK8S97BGsod1sOqjiQQsjWRWBA7yqABq5u4wZVcysvEiV3-pvgJtZTnxsEQdjzfmrb8AA16LMD6bcqh8hZVwETbNaI9yLbqtuKS1sDYNZYto6Pll7CrUzHOJDj7D6MZY5ANa0v2CeolwpvIIP48Thi5WxUYLP66f95FUpzev2KPYYzQ",
    "X-Organization-Id": "7ba08dbe-c1eb-4b0d-a2e0-2f19905f789e"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "qSdddmXBiCcX3wQHFq1ctmXF4ei1"
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
    "date": "Thu, 05 Jun 2025 19:25:17 GMT",
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

**⏱️ Duration:** 1277.1 ms  
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
