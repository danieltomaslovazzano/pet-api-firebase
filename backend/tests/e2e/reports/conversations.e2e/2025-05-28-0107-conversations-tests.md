# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:07:55 AM  
**Duration:** 62.11s  
**Tests:** 25 total, 5 passed, 20 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Should create a conversation with valid participants | FAILED | 2.27s | Should create a conversation with valid participants |
| ❌ Should fail to create conversation with insufficient participants | FAILED | 0.64s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.57s | Should fail to create conversation without participants array |
| ❌ Should create group conversation with multiple participants | FAILED | 1.19s | Should create group conversation with multiple participants |
| ❌ Should get conversation by ID for participant | FAILED | 0.00s | Should get conversation by ID for participant |
| ❌ Should fail to get conversation by ID for non-participant | FAILED | 1.75s | Should fail to get conversation by ID for non-participant |
| ❌ Should get conversations for user | FAILED | 0.49s | Should get conversations for user |
| ✅ Should get conversation with invalid ID format | PASSED | 0.72s | Should get conversation with invalid ID format |
| ❌ Should soft delete conversation for user | FAILED | 0.00s | Should soft delete conversation for user |
| ❌ Should hide conversation for user | FAILED | 0.00s | Should hide conversation for user |
| ❌ Should unhide conversation for user | FAILED | 0.00s | Should unhide conversation for user |
| ❌ Should block conversation (moderator) | FAILED | 0.00s | Should block conversation (moderator) |
| ❌ Should unblock conversation (moderator) | FAILED | 0.00s | Should unblock conversation (moderator) |
| ❌ Should fail to block conversation as regular user | FAILED | 0.00s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.79s | Should permanently delete conversation (admin) |
| ❌ Should fail to permanently delete conversation as regular user | FAILED | 0.00s | Should fail to permanently delete conversation as regular user |
| ❌ Should get all conversations (admin) | FAILED | 0.65s | Should get all conversations (admin) |
| ❌ Should fail to get all conversations as regular user | FAILED | 0.46s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 0.92s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 1.58s | Should not access conversation from different organization |
| ❌ Should filter conversations by organization | FAILED | 0.51s | Should filter conversations by organization |
| ❌ Super admin should access conversations across organizations | FAILED | 0.50s | Super admin should access conversations across organizations |
| ❌ Should handle non-existent conversation ID | FAILED | 0.58s | Should handle non-existent conversation ID |
| ❌ Should handle unauthorized access | FAILED | 0.00s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.47s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ❌ FAILED  
**Duration:** 2.27s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m

Expected: [32mArrayContaining ["tYFy4ecd0TY2fErw9jsp6e1XHvw1", "wL605b3lbcYD4S4gpfHIrIc9vtX2"][39m
Received: [31m[{"email": "daniellovazzano@gmail.com", "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1", "name": "daniel"}, {"email": "conversations-regular-1748387217841@example.com", "id": "wL605b3lbcYD4S4gpfHIrIc9vtX2", "name": "Regular User"}][39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2264.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "wL605b3lbcYD4S4gpfHIrIc9vtX2"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "454",
    "etag": "W/\"1c6-nLWzq7U5Bagt+205LWXlw/xufQY\"",
    "date": "Tue, 27 May 2025 23:07:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9752f385-c56c-4270-bc45-19447105e115",
    "title": "Test Conversation",
    "status": "active",
    "createdAt": "2025-05-27T23:07:05.149Z",
    "lastMessageAt": "2025-05-27T23:07:05.149Z",
    "organizationId": "e75fba5c-f88c-4475-af65-7682c5702ebe",
    "participants": [
      {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "name": "daniel"
      },
      {
        "id": "wL605b3lbcYD4S4gpfHIrIc9vtX2",
        "email": "conversations-regular-1748387217841@example.com",
        "name": "Regular User"
      }
    ]
  }
}
```

**⏱️ Duration:** 2264.6 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ❌ FAILED  
**Duration:** 0.64s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"At least two participants are required"[39m
Received string:    [31m"Participants must be an array with at least two participants"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (636.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "72",
    "etag": "W/\"48-4CE5nVLB68528cV6KfRJjblO1ME\"",
    "date": "Tue, 27 May 2025 23:07:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 636.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (571.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "72",
    "etag": "W/\"48-4CE5nVLB68528cV6KfRJjblO1ME\"",
    "date": "Tue, 27 May 2025 23:07:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 571.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ❌ FAILED  
**Duration:** 1.19s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m"group"[39m
Received: [31mundefined[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1191.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "wL605b3lbcYD4S4gpfHIrIc9vtX2",
      "DrAkZpuNdFQn2Guw4ICORmcbCPL2"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "582",
    "etag": "W/\"246-wvnXQAwTb1Co1Fm3KM/b8ZuwV2I\"",
    "date": "Tue, 27 May 2025 23:07:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2f3c7246-7d3d-4c0b-84d8-9f2d160bf857",
    "title": "Group Test Conversation",
    "status": "active",
    "createdAt": "2025-05-27T23:07:08.178Z",
    "lastMessageAt": "2025-05-27T23:07:08.178Z",
    "organizationId": "e75fba5c-f88c-4475-af65-7682c5702ebe",
    "participants": [
      {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "name": "daniel"
      },
      {
        "id": "wL605b3lbcYD4S4gpfHIrIc9vtX2",
        "email": "conversations-regular-1748387217841@example.com",
        "name": "Regular User"
      },
      {
        "id": "DrAkZpuNdFQn2Guw4ICORmcbCPL2",
        "email": "conversations-moderator-1748387219296@example.com",
        "name": "Moderator User"
      }
    ]
  }
}
```

**⏱️ Duration:** 1191.9 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'id')  

---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ❌ FAILED  
**Duration:** 1.75s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (985.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "wL605b3lbcYD4S4gpfHIrIc9vtX2"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "457",
    "etag": "W/\"1c9-gi86JAUER+RAt9ug6Qa8Mb44Us0\"",
    "date": "Tue, 27 May 2025 23:07:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "79e8c8de-6cb3-4a07-aa23-6fa5b2be5a8d",
    "title": "Private Conversation",
    "status": "active",
    "createdAt": "2025-05-27T23:07:09.334Z",
    "lastMessageAt": "2025-05-27T23:07:09.334Z",
    "organizationId": "e75fba5c-f88c-4475-af65-7682c5702ebe",
    "participants": [
      {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "name": "daniel"
      },
      {
        "id": "wL605b3lbcYD4S4gpfHIrIc9vtX2",
        "email": "conversations-regular-1748387217841@example.com",
        "name": "Regular User"
      }
    ]
  }
}
```

**⏱️ Duration:** 985.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/79e8c8de-6cb3-4a07-aa23-6fa5b2be5a8d (763.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzIyMCwidXNlcl9pZCI6IkRyQWtacHVOZEZRbjJHdXc0SUNPUm1jYkNQTDIiLCJzdWIiOiJEckFrWnB1TmRGUW4yR3V3NElDT1JtY2JDUEwyIiwiaWF0IjoxNzQ4Mzg3MjIwLCJleHAiOjE3NDgzOTA4MjAsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzIxOTI5NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3MjE5Mjk2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oRf1IbwJpd0Mi08ObE6ppRAExIfRaI3E7ukMtDXCNSM1DUE4vyBL0kcyOKiJZo08h8jm6toPPyUM-qA04c3U4Lx3Fp4zKX1jF5Ja8A0TqQjS9FKTR3X3IptAIWXWWXcOEHa5EOn3kthPSgrDjAL-IuJO-Ibu4rROs_A4ZBkSqkPSr19Y_cXJPe2DkR7E-04nZDUTePvnyZ7hcqE477j94S3NsTr240iMUAJwoBFfDKs-6YBtZLOOH3MW0aS2Hm2WgB9hAQ8QVNDUnUKiS8iSm74HKGNrMH4-uBNMjnhjzqqCQUUS34Nv_l8jdouzRKj62rsOJQTKUXsSZfcBs3YPPw",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1534",
    "etag": "W/\"5fe-6fPJOuOOdqD89L9qXeywlPj//ZQ\"",
    "date": "Tue, 27 May 2025 23:07:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:69:52\n\n  66  */\n  67 exports.getConversationById = async (id) => {\n  68   try {\n→ 69     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"79e8c8de-6cb3-4a07-aa23-6fa5b2be5a8d\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 763.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should get conversations for user
**Status:** ❌ FAILED  
**Duration:** 0.49s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/wL605b3lbcYD4S4gpfHIrIc9vtX2 (492.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzIxOSwidXNlcl9pZCI6IndMNjA1YjNsYmNZRDRTNGdwZkhJckljOXZ0WDIiLCJzdWIiOiJ3TDYwNWIzbGJjWUQ0UzRncGZISXJJYzl2dFgyIiwiaWF0IjoxNzQ4Mzg3MjE5LCJleHAiOjE3NDgzOTA4MTksImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODcyMTc4NDFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODcyMTc4NDFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IDgoJhAB7Q34dsl1x4Pv6th9djORFPyubAwpEkWdhWSLS9XnlZXGcGsfxIElAURWaCE4aifvG-ibJuHUIYYtQGG3uqnaKv68zrSC4ZpKVRUQLhez5ZWd2ZoPS4uuBUEgRD-ses8FkkWSr5tPG9DDlH-Of7lK8jPSsX_lqLc36FQkntWQ81PZDKM5IxVVkjF76XQWBJvyTRobEVd2iUcUY6prm7uNq3W1jJKExsWJHaw4keYC6BkXBPiCRNeP6gfUyn7jATi3JfFPMAf53jtcqEsLmnqIm0xjkiS0dMOY8LdZK2HtJIZPgKePG7JP3QaPGNLyI4yeS1yqTQ_GFYNRBQ",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1663",
    "etag": "W/\"67f-SDGzVprUmRyXy8iosmLnW2Hmk3k\"",
    "date": "Tue, 27 May 2025 23:07:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:117:53\n\n  114   whereClause.organizationId = organizationId;\n  115 }\n  116 \n→ 117 const conversations = await prisma.conversation.findMany({\n        where: {\n          participants: {\n            some: {\n              id: \"wL605b3lbcYD4S4gpfHIrIc9vtX2\"\n            }\n          },\n          organizationId: \"e75fba5c-f88c-4475-af65-7682c5702ebe\"\n        },\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 492.7 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (717.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "42",
    "etag": "W/\"2a-SqBzK1Obb2OLJ5yMCr40iA8xSgk\"",
    "date": "Tue, 27 May 2025 23:07:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 717.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'id')  

---

### Test: Should hide conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'id')  

---

### Test: Should unhide conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'id')  

---

### Test: Should block conversation (moderator)
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'id')  

---

### Test: Should unblock conversation (moderator)
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'id')  

---

### Test: Should fail to block conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'status')  

---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1003.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "wL605b3lbcYD4S4gpfHIrIc9vtX2"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "459",
    "etag": "W/\"1cb-6y032DK9SzAOQHPbE2LCKpDbZp0\"",
    "date": "Tue, 27 May 2025 23:07:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "42b1a1e0-9c9c-4d43-b864-069922daa98e",
    "title": "Conversation to Delete",
    "status": "active",
    "createdAt": "2025-05-27T23:07:42.317Z",
    "lastMessageAt": "2025-05-27T23:07:42.317Z",
    "organizationId": "e75fba5c-f88c-4475-af65-7682c5702ebe",
    "participants": [
      {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "name": "daniel"
      },
      {
        "id": "wL605b3lbcYD4S4gpfHIrIc9vtX2",
        "email": "conversations-regular-1748387217841@example.com",
        "name": "Regular User"
      }
    ]
  }
}
```

**⏱️ Duration:** 1003.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/42b1a1e0-9c9c-4d43-b864-069922daa98e (782.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "61",
    "etag": "W/\"3d-hwSiLYyvmqZdSLorKHTuQGAX328\"",
    "date": "Tue, 27 May 2025 23:07:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 782.3 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'status')  

---

### Test: Should get all conversations (admin)
**Status:** ❌ FAILED  
**Duration:** 0.65s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (653.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1413",
    "etag": "W/\"585-5UTJa2Sg+ySAdt0l4aWLB1yu1mw\"",
    "date": "Tue, 27 May 2025 23:07:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:186:53\n\n  183   }\n  184 }\n  185 \n→ 186 const conversations = await prisma.conversation.findMany({\n        where: {},\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 653.4 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ❌ FAILED  
**Duration:** 0.46s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Insufficient permissions"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (459.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzIxOSwidXNlcl9pZCI6IndMNjA1YjNsYmNZRDRTNGdwZkhJckljOXZ0WDIiLCJzdWIiOiJ3TDYwNWIzbGJjWUQ0UzRncGZISXJJYzl2dFgyIiwiaWF0IjoxNzQ4Mzg3MjE5LCJleHAiOjE3NDgzOTA4MTksImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODcyMTc4NDFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODcyMTc4NDFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IDgoJhAB7Q34dsl1x4Pv6th9djORFPyubAwpEkWdhWSLS9XnlZXGcGsfxIElAURWaCE4aifvG-ibJuHUIYYtQGG3uqnaKv68zrSC4ZpKVRUQLhez5ZWd2ZoPS4uuBUEgRD-ses8FkkWSr5tPG9DDlH-Of7lK8jPSsX_lqLc36FQkntWQ81PZDKM5IxVVkjF76XQWBJvyTRobEVd2iUcUY6prm7uNq3W1jJKExsWJHaw4keYC6BkXBPiCRNeP6gfUyn7jATi3JfFPMAf53jtcqEsLmnqIm0xjkiS0dMOY8LdZK2HtJIZPgKePG7JP3QaPGNLyI4yeS1yqTQ_GFYNRBQ",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "89",
    "etag": "W/\"59-EJtKrw0eqMSOH/xfuajJG4OlIpM\"",
    "date": "Tue, 27 May 2025 23:07:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 459.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (919.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "7c7e44c8-8d77-4479-88ae-8f8bda2b0975"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "wL605b3lbcYD4S4gpfHIrIc9vtX2"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "462",
    "etag": "W/\"1ce-/fOR8pXWIv1+eaZu8FJXjFd+qEo\"",
    "date": "Tue, 27 May 2025 23:07:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "345f30fd-13c7-41f4-a273-429ed38803b1",
    "title": "Org-Specific Conversation",
    "status": "active",
    "createdAt": "2025-05-27T23:07:45.213Z",
    "lastMessageAt": "2025-05-27T23:07:45.213Z",
    "organizationId": "7c7e44c8-8d77-4479-88ae-8f8bda2b0975",
    "participants": [
      {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "name": "daniel"
      },
      {
        "id": "wL605b3lbcYD4S4gpfHIrIc9vtX2",
        "email": "conversations-regular-1748387217841@example.com",
        "name": "Regular User"
      }
    ]
  }
}
```

**⏱️ Duration:** 919.5 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 1.58s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1036.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "wL605b3lbcYD4S4gpfHIrIc9vtX2"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "454",
    "etag": "W/\"1c6-nV56XGYZIZL3ANywVt9R+vn+LYE\"",
    "date": "Tue, 27 May 2025 23:07:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2510bb1f-9941-476f-8e3e-0143da347bca",
    "title": "Org1 Conversation",
    "status": "active",
    "createdAt": "2025-05-27T23:07:46.253Z",
    "lastMessageAt": "2025-05-27T23:07:46.253Z",
    "organizationId": "e75fba5c-f88c-4475-af65-7682c5702ebe",
    "participants": [
      {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "name": "daniel"
      },
      {
        "id": "wL605b3lbcYD4S4gpfHIrIc9vtX2",
        "email": "conversations-regular-1748387217841@example.com",
        "name": "Regular User"
      }
    ]
  }
}
```

**⏱️ Duration:** 1036.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/2510bb1f-9941-476f-8e3e-0143da347bca (540.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "7c7e44c8-8d77-4479-88ae-8f8bda2b0975"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1534",
    "etag": "W/\"5fe-QS5Uyd/C4geTq/Xi+HWDNDwc0Bk\"",
    "date": "Tue, 27 May 2025 23:07:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:69:52\n\n  66  */\n  67 exports.getConversationById = async (id) => {\n  68   try {\n→ 69     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"2510bb1f-9941-476f-8e3e-0143da347bca\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 540.1 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should filter conversations by organization
**Status:** ❌ FAILED  
**Duration:** 0.51s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (507.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1663",
    "etag": "W/\"67f-Rogak4rf9G7MOWqC+bCvPmVLxTw\"",
    "date": "Tue, 27 May 2025 23:07:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:117:53\n\n  114   whereClause.organizationId = organizationId;\n  115 }\n  116 \n→ 117 const conversations = await prisma.conversation.findMany({\n        where: {\n          participants: {\n            some: {\n              id: \"tYFy4ecd0TY2fErw9jsp6e1XHvw1\"\n            }\n          },\n          organizationId: \"e75fba5c-f88c-4475-af65-7682c5702ebe\"\n        },\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 507.9 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ❌ FAILED  
**Duration:** 0.50s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (498.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1594",
    "etag": "W/\"63a-F5suz4LDnX7VqH/yOvQd269ctXA\"",
    "date": "Tue, 27 May 2025 23:07:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:117:53\n\n  114   whereClause.organizationId = organizationId;\n  115 }\n  116 \n→ 117 const conversations = await prisma.conversation.findMany({\n        where: {\n          participants: {\n            some: {\n              id: \"tYFy4ecd0TY2fErw9jsp6e1XHvw1\"\n            }\n          }\n        },\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 498.9 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.58s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m404[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (578.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1534",
    "etag": "W/\"5fe-j5mIOXoRRvIk9kE9dtFPj81ZeRs\"",
    "date": "Tue, 27 May 2025 23:07:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:69:52\n\n  66  */\n  67 exports.getConversationById = async (id) => {\n  68   try {\n→ 69     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"123e4567-e89b-12d3-a456-426614174000\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 578.2 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should handle unauthorized access
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'status')  

---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (473.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA",
    "X-Organization-Id": "e75fba5c-f88c-4475-af65-7682c5702ebe"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "72",
    "etag": "W/\"48-4CE5nVLB68528cV6KfRJjblO1ME\"",
    "date": "Tue, 27 May 2025 23:07:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 473.2 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/organizations/e75fba5c-f88c-4475-af65-7682c5702ebe (1732.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Tue, 27 May 2025 23:07:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1732.3 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/7c7e44c8-8d77-4479-88ae-8f8bda2b0975 (1397.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyMTQsImV4cCI6MTc0ODM5MDgxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cviwTmPcKE_PJG_U043RpwBV0tmR3iICswLN53CaohZ3nCUsvmMzcEXTtZQjrIDXskuyVIE9RLof-l3yjyR3bQ7XhDZi9CV6IIZtlLpmlLc87V3sYayO0D36HX7BFXpQ3H3YnAcUMCcFsYJ9KYcwWIz3D5UvVJUm9eMIuwJRuC60wO-72ym46JUxwd2werl-nlk69roqsBtRtOAelOnogKbbEKZaxT-m_ZPcTk7Bb1fyb_VQeaqPqaz0v15y2if9nGvYnDsa0MNQcBAau07GofOq7S_Jzw1vaVMSGgFrrWXdYQJJIB03rjsBj_wedzVD-5mClp_30HiDg8v0vEMfIA"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "47",
    "etag": "W/\"2f-C4xREmSZpo7Mho+ixbrcQPJF0Zw\"",
    "date": "Tue, 27 May 2025 23:07:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1397.0 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (296.3ms)</summary>

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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1600",
    "etag": "W/\"640-fTLb1pN2xwD09fBJ5CTwi9C8hek\"",
    "date": "Tue, 27 May 2025 23:07:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "email": "daniellovazzano@gmail.com",
      "role": "admin",
      "isSuperAdmin": true
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyNzIsImV4cCI6MTc0ODM5MDg3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fsgxVisDIWaPhu120_0MzJE9RNnwOgtaXcVU7CrvyBrup8MW3WYsMJFgWKtKkR9dZgGdLjzCH0K28NmV7JHeuee1ewe9hS7-xuIUaAoNQ9vXuU_YV1Ygeiw9aevp1V8HS4ZGWMlnKgM1YlVTx3irwnzCq3abgeMhIW4eNyY0n3dJYGXwg2ffEkTiZCZkcObruPaDpAimBMr8YmD0ALkchCGKBZ7E2GhKiNW_TBMgDUKChmlW-vw54Nnjtb21-mPTvivGCJ9IR9ZXHi9pmp_L-HblfDE8J1xZuTyjy-sF2oGHWc-tHED54TQwP0aiRJg_t3BzcVoZWTZBQ43aAsB96A",
      "refreshToken": "AMf-vBxfILw41g2onEIUw5-InttEfiytgpJ0wIn3CtO9itYL_6uSOA3wCLMXLz_fz9AXG0cGXGMlYUyvEkbGpIxoGyzXjBrLz1qyI1bs8JLFv1w3hYu4qlS73c_Lx-lV3ioLwdX-n4GToJk7b5wWl65XPhYXvubWBUPEmrmaHSaA5nKR8TwfpqC6mC-fYMZ3pISHl4XJBKS5E16lHg5rlh6TrWIjRvLiXyZ1Hhi68MrC8RauTTlYZ0llSrKKcQxzkfxfzBJzDsFe",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 296.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/admin/users/wL605b3lbcYD4S4gpfHIrIc9vtX2 (1488.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MjcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyNzIsImV4cCI6MTc0ODM5MDg3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fsgxVisDIWaPhu120_0MzJE9RNnwOgtaXcVU7CrvyBrup8MW3WYsMJFgWKtKkR9dZgGdLjzCH0K28NmV7JHeuee1ewe9hS7-xuIUaAoNQ9vXuU_YV1Ygeiw9aevp1V8HS4ZGWMlnKgM1YlVTx3irwnzCq3abgeMhIW4eNyY0n3dJYGXwg2ffEkTiZCZkcObruPaDpAimBMr8YmD0ALkchCGKBZ7E2GhKiNW_TBMgDUKChmlW-vw54Nnjtb21-mPTvivGCJ9IR9ZXHi9pmp_L-HblfDE8J1xZuTyjy-sF2oGHWc-tHED54TQwP0aiRJg_t3BzcVoZWTZBQ43aAsB96A"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "59",
    "etag": "W/\"3b-jIRXR3lyfUlhNaDpPRV0JKmbxjw\"",
    "date": "Tue, 27 May 2025 23:07:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1488.6 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (442.3ms)</summary>

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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1600",
    "etag": "W/\"640-1fLDTnU0hhZCIauxh0QbPikjn1Q\"",
    "date": "Tue, 27 May 2025 23:07:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "email": "daniellovazzano@gmail.com",
      "role": "admin",
      "isSuperAdmin": true
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Mjc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyNzQsImV4cCI6MTc0ODM5MDg3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.n4sZvpzJEJc6k95DklvcR0ha5ja0wujx3_mSq4mlf1pGS4rJpavgwHSgu6U-zxpjOkKJdJ_kkGbbfwHeGYivCfsT7b8AlBO1BGF32d60MzPXVWzuA7ToItRgYr8qhcP374PUPsKSCFD7yHOABCl-GUwz_q-ZFLZds3u77MOFmI9mxLzcO7LGHyZsfGoTCspTq7ZItaDrLl-bzigFFbMAUhO-4TRuHc1_BoMlkANm201ed8t1a-a9v-l5vRJerdMdO6_DJmtANzmUb4ozZuNgkVwk8lO52RkqQ5zcGYwK4VRvJPsaVISWqY6-y7GDHvgAv6-OgmGdsVxb3iO5vKnEzQ",
      "refreshToken": "AMf-vBwy4tb9tZtEaj-uIR4y6t1nIQr4UmbBJXgs6ks9Sb5_l39wMoIF6mB0kRRvsQ5rgcCSHJrKLK4hAnM9PTSc7wBsAWvQSYMzkszyHeSC37lV31keO5QMak2Fb-tU1XrwBz8Kb0HDHSDeN6oA4HpnQuBu1D_0W1b5JruXXS9b6oi5r0jHc9MckR-HHXdbqpwwU8_Yizw1jIBoiAaosJpBj0DW-fuDR-WM5ajYFm6FBl63Rn8OO6yVmVjncf6PzOYbIIUunWUl",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 442.3 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/DrAkZpuNdFQn2Guw4ICORmcbCPL2 (1251.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Mjc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcyNzQsImV4cCI6MTc0ODM5MDg3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.n4sZvpzJEJc6k95DklvcR0ha5ja0wujx3_mSq4mlf1pGS4rJpavgwHSgu6U-zxpjOkKJdJ_kkGbbfwHeGYivCfsT7b8AlBO1BGF32d60MzPXVWzuA7ToItRgYr8qhcP374PUPsKSCFD7yHOABCl-GUwz_q-ZFLZds3u77MOFmI9mxLzcO7LGHyZsfGoTCspTq7ZItaDrLl-bzigFFbMAUhO-4TRuHc1_BoMlkANm201ed8t1a-a9v-l5vRJerdMdO6_DJmtANzmUb4ozZuNgkVwk8lO52RkqQ5zcGYwK4VRvJPsaVISWqY6-y7GDHvgAv6-OgmGdsVxb3iO5vKnEzQ"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "59",
    "etag": "W/\"3b-jIRXR3lyfUlhNaDpPRV0JKmbxjw\"",
    "date": "Tue, 27 May 2025 23:07:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1251.9 ms  

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
