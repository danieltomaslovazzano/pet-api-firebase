# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:04:35 AM  
**Duration:** 52.76s  
**Tests:** 25 total, 0 passed, 25 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Should create a conversation with valid participants | FAILED | 1.13s | Should create a conversation with valid participants |
| ❌ Should fail to create conversation with insufficient participants | FAILED | 0.49s | Should fail to create conversation with insufficient participants |
| ❌ Should fail to create conversation without participants array | FAILED | 0.30s | Should fail to create conversation without participants array |
| ❌ Should create group conversation with multiple participants | FAILED | 0.30s | Should create group conversation with multiple participants |
| ❌ Should get conversation by ID for participant | FAILED | 0.00s | Should get conversation by ID for participant |
| ❌ Should fail to get conversation by ID for non-participant | FAILED | 0.28s | Should fail to get conversation by ID for non-participant |
| ❌ Should get conversations for user | FAILED | 0.99s | Should get conversations for user |
| ❌ Should get conversation with invalid ID format | FAILED | 0.52s | Should get conversation with invalid ID format |
| ❌ Should soft delete conversation for user | FAILED | 0.00s | Should soft delete conversation for user |
| ❌ Should hide conversation for user | FAILED | 0.00s | Should hide conversation for user |
| ❌ Should unhide conversation for user | FAILED | 0.00s | Should unhide conversation for user |
| ❌ Should block conversation (moderator) | FAILED | 0.00s | Should block conversation (moderator) |
| ❌ Should unblock conversation (moderator) | FAILED | 0.00s | Should unblock conversation (moderator) |
| ❌ Should fail to block conversation as regular user | FAILED | 0.00s | Should fail to block conversation as regular user |
| ❌ Should permanently delete conversation (admin) | FAILED | 0.29s | Should permanently delete conversation (admin) |
| ❌ Should fail to permanently delete conversation as regular user | FAILED | 0.00s | Should fail to permanently delete conversation as regular user |
| ❌ Should get all conversations (admin) | FAILED | 0.39s | Should get all conversations (admin) |
| ❌ Should fail to get all conversations as regular user | FAILED | 0.56s | Should fail to get all conversations as regular user |
| ❌ Should create conversation in specific organization | FAILED | 0.35s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 0.33s | Should not access conversation from different organization |
| ❌ Should filter conversations by organization | FAILED | 0.24s | Should filter conversations by organization |
| ❌ Super admin should access conversations across organizations | FAILED | 0.55s | Super admin should access conversations across organizations |
| ❌ Should handle non-existent conversation ID | FAILED | 0.25s | Should handle non-existent conversation ID |
| ❌ Should handle unauthorized access | FAILED | 0.00s | Should handle unauthorized access |
| ❌ Should handle malformed request data | FAILED | 0.31s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ❌ FAILED  
**Duration:** 1.13s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1128.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "906TU3PHtQYcukeEq03ElCzZuCD2"
    ],
    "title": "Test Conversation",
    "type": "direct"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:03:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 1128.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ❌ FAILED  
**Duration:** 0.49s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m400[39m
Received: [31m403[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (363.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
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
  "status": 403,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-type": "application/json; charset=utf-8",
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:03:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 363.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ❌ FAILED  
**Duration:** 0.30s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m400[39m
Received: [31m403[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (301.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
  },
  "data": {
    "title": "Invalid Conversation"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:03:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 301.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ❌ FAILED  
**Duration:** 0.30s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (303.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "906TU3PHtQYcukeEq03ElCzZuCD2",
      "Ks2wnEi65UW64ghle2Pvrwcm8W12"
    ],
    "title": "Group Test Conversation",
    "type": "group"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:03:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 303.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'id')  

---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ❌ FAILED  
**Duration:** 0.28s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (280.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "906TU3PHtQYcukeEq03ElCzZuCD2"
    ],
    "title": "Private Conversation"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:03:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 280.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ❌ FAILED  
**Duration:** 0.99s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/906TU3PHtQYcukeEq03ElCzZuCD2 (992.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzAyOCwidXNlcl9pZCI6IjkwNlRVM1BIdFFZY3VrZUVxMDNFbEN6WnVDRDIiLCJzdWIiOiI5MDZUVTNQSHRRWWN1a2VFcTAzRWxDelp1Q0QyIiwiaWF0IjoxNzQ4Mzg3MDI4LCJleHAiOjE3NDgzOTA2MjgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODcwMjY4NzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODcwMjY4NzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.k_xMrk1moW_mKJ_9-CWxvfbJSlzsIv9ignZdX7uaQrDHv4Bm-pMrP3WLvN2S2KQ5w7sWxodun3v6fEj7cvGTIXTYsEAGj3Gy5MAQQQJbyIzOEo5e57G2m44-b02K6ZSARlas9ocPbbF7BCrcTXkFmYSc5xxKmx0PHgtEnawduFUL8vhc0Tft95m8A08CfkqZUjFYo2D0UWQLiE6oviPpmn5cSaR1b7ywAZryVymfmueu9X7NEAXHpFfz89P0TAHFdHTyTKsE2EaYJyVEeD0YxmpD2o6uFRWIa6yYZsfNyxa6DmT-Eag8MR0lz6-g4foBI6VP9eElTKIY5p-IIuus-w",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
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
    "etag": "W/\"67f-j2RVjwGP1VhOu+XvCjhMXitwGbw\"",
    "date": "Tue, 27 May 2025 23:03:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:117:53\n\n  114   whereClause.organizationId = organizationId;\n  115 }\n  116 \n→ 117 const conversations = await prisma.conversation.findMany({\n        where: {\n          participants: {\n            some: {\n              id: \"906TU3PHtQYcukeEq03ElCzZuCD2\"\n            }\n          },\n          organizationId: \"246d4e79-4ff9-4328-8846-82dff96ec673\"\n        },\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 992.6 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should get conversation with invalid ID format
**Status:** ❌ FAILED  
**Duration:** 0.52s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m400[39m
Received: [31m403[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (515.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:04:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 515.4 ms  
**❌ Error:** Request failed with status code 403  

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
**Status:** ❌ FAILED  
**Duration:** 0.29s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (287.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "906TU3PHtQYcukeEq03ElCzZuCD2"
    ],
    "title": "Conversation to Delete"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:04:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 287.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'status')  

---

### Test: Should get all conversations (admin)
**Status:** ❌ FAILED  
**Duration:** 0.39s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (385.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:04:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 385.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ❌ FAILED  
**Duration:** 0.56s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Insufficient permissions"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (557.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzAyOCwidXNlcl9pZCI6IjkwNlRVM1BIdFFZY3VrZUVxMDNFbEN6WnVDRDIiLCJzdWIiOiI5MDZUVTNQSHRRWWN1a2VFcTAzRWxDelp1Q0QyIiwiaWF0IjoxNzQ4Mzg3MDI4LCJleHAiOjE3NDgzOTA2MjgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODcwMjY4NzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODcwMjY4NzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.k_xMrk1moW_mKJ_9-CWxvfbJSlzsIv9ignZdX7uaQrDHv4Bm-pMrP3WLvN2S2KQ5w7sWxodun3v6fEj7cvGTIXTYsEAGj3Gy5MAQQQJbyIzOEo5e57G2m44-b02K6ZSARlas9ocPbbF7BCrcTXkFmYSc5xxKmx0PHgtEnawduFUL8vhc0Tft95m8A08CfkqZUjFYo2D0UWQLiE6oviPpmn5cSaR1b7ywAZryVymfmueu9X7NEAXHpFfz89P0TAHFdHTyTKsE2EaYJyVEeD0YxmpD2o6uFRWIa6yYZsfNyxa6DmT-Eag8MR0lz6-g4foBI6VP9eElTKIY5p-IIuus-w",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
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
    "date": "Tue, 27 May 2025 23:04:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 557.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ❌ FAILED  
**Duration:** 0.35s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (347.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "5c22fb5e-71b1-445c-86e5-08d87640ebf2"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "906TU3PHtQYcukeEq03ElCzZuCD2"
    ],
    "title": "Org-Specific Conversation"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:04:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 347.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 0.33s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (330.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "906TU3PHtQYcukeEq03ElCzZuCD2"
    ],
    "title": "Org1 Conversation"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:04:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 330.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should filter conversations by organization
**Status:** ❌ FAILED  
**Duration:** 0.24s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (243.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:04:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 243.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ❌ FAILED  
**Duration:** 0.55s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (546.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw"
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
    "date": "Tue, 27 May 2025 23:04:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:117:53\n\n  114   whereClause.organizationId = organizationId;\n  115 }\n  116 \n→ 117 const conversations = await prisma.conversation.findMany({\n        where: {\n          participants: {\n            some: {\n              id: \"tYFy4ecd0TY2fErw9jsp6e1XHvw1\"\n            }\n          }\n        },\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 546.0 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.25s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m404[39m
Received: [31m403[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (248.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:04:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 248.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should handle unauthorized access
**Status:** ❌ FAILED  
**Duration:** 0.00s  
**Error:** Cannot read properties of undefined (reading 'status')  

---

### Test: Should handle malformed request data
**Status:** ❌ FAILED  
**Duration:** 0.31s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m400[39m
Received: [31m403[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (308.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw",
    "X-Organization-Id": "246d4e79-4ff9-4328-8846-82dff96ec673"
  },
  "data": {
    "participants": "not-an-array"
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
    "content-length": "53",
    "etag": "W/\"35-Z2FEnuq6lImzW7+kyMn+OBPvivA\"",
    "date": "Tue, 27 May 2025 23:04:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You are not a member of this organization"
  }
}
```

**⏱️ Duration:** 308.2 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/organizations/246d4e79-4ff9-4328-8846-82dff96ec673 (1403.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw"
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
    "date": "Tue, 27 May 2025 23:04:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1403.3 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/5c22fb5e-71b1-445c-86e5-08d87640ebf2 (931.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwMjMsImV4cCI6MTc0ODM5MDYyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KVG_m8sU0o7KyJcv8sM4Of44kd7L4nSJ8gGF8NwSvhoMxIwg5ZdRuIWscaFMybjcWtRPMPazlUwPteFaruWjGG4AtV8Gv7gIwuBX5c1hZUu7dG6V-kA2XcPoa9MQmsIvVGj4fTKfFGFr-mPXdSE7T9psu83dKEr47HXIn_pAMLKLLXtapzEPOxXrEBudTgTIbwfJRmklXXLAS17Lj0EAO-MhYgoHi_FF0E7uMmnvefWlNBIcX_wo0dOFCG6sKV4CvmOoq8jI5hdXbry5Sp7iHmCg4bIECnzT4FE5SQsEKHZiaLSJOY5Q-Pbi_ULITqllNEl2c3f2Dz4RnTUHAsP9qw"
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
    "date": "Tue, 27 May 2025 23:04:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 931.7 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (326.8ms)</summary>

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
    "etag": "W/\"640-BoN5HFgCRqqqmJWs/PNmgNH5j84\"",
    "date": "Tue, 27 May 2025 23:04:32 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwNzIsImV4cCI6MTc0ODM5MDY3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Om2vBTWDTEaknv4D2K7WFZEvQBqWocRUvi8fdH1e-WNTeWkcHGruL9lOvJDv2LZgVrnL1ipPMSqygFQsPn2QM6_ZWSem99Mimy3pYGrj1oz9u_wLSII0x1_8ZHDcf8_3eyc9fwvrnfhFdsYLlWwbgRemvR9gr7zPONXePXtSO5oo8kNT54B1m-V3m0Ea7fq6frUwK8MjiLSH6Yg6lFKsQNvCcnaZVk66ZPj7KVA1COMRakeFPcqooeGgMaXQCEgVHM9m5b0e2amPJ192MLOsBV6mjhHkgszjTLh0Q4p_7i7Fcl3DonbUPvbpRlSm0AiGnhtBZkf5MvfxRpQGNAUP6Q",
      "refreshToken": "AMf-vBz6ZcNVQv4HJNL0lttz83FEJcT3hnxRq5VyhlsWMCtoZtbWPVh68NF-NrWJeAWhCtGP9yVy920gKBPXTEJCfSC4OOcrLWtfwvcZZF0ZFVWN83HwXdvWd1XIb5bGIsAB2BpNuPvBKtZdkjHDlbZmTIBedlTq5Lf-d07ge_T4MVqOmcxlLFhOs1ourU8msiE7fGquxKQqWgccvbS0lpXHreQGbEgXnwJ6w09iAQcBxVeOR0cNssTUxYfX7ArTjPW4Pmt7BzHa",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 326.8 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/admin/users/906TU3PHtQYcukeEq03ElCzZuCD2 (1506.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwNzIsImV4cCI6MTc0ODM5MDY3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Om2vBTWDTEaknv4D2K7WFZEvQBqWocRUvi8fdH1e-WNTeWkcHGruL9lOvJDv2LZgVrnL1ipPMSqygFQsPn2QM6_ZWSem99Mimy3pYGrj1oz9u_wLSII0x1_8ZHDcf8_3eyc9fwvrnfhFdsYLlWwbgRemvR9gr7zPONXePXtSO5oo8kNT54B1m-V3m0Ea7fq6frUwK8MjiLSH6Yg6lFKsQNvCcnaZVk66ZPj7KVA1COMRakeFPcqooeGgMaXQCEgVHM9m5b0e2amPJ192MLOsBV6mjhHkgszjTLh0Q4p_7i7Fcl3DonbUPvbpRlSm0AiGnhtBZkf5MvfxRpQGNAUP6Q"
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
    "date": "Tue, 27 May 2025 23:04:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1506.0 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (342.0ms)</summary>

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
    "etag": "W/\"640-RteCkwRXT42KIRxjuJp6SmxRRGY\"",
    "date": "Tue, 27 May 2025 23:04:34 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwNzQsImV4cCI6MTc0ODM5MDY3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N2bPbKZaZU_CkeRCZ2TydOO2UDSJE5Ew3_0FmziEAoDJk26YeL3u-CyLwJ5ZSwe7OzpCY9jwHX4uc2HZ0I7yFHZIO052pGYJoWsXaG7Qx56rxn7jhjfjjmp_7gEuV12R1d8lnkS1pyqOU64W_jtkEBacZ2Ap7kzZt-LX3R0eNKfYhoVX3ODB-EeZh8A-b-8Ft_ZEHAX_2lftzry8zZp_xMFHVnpwTtUOHugn2Nw9erIFS7jiUlgzdXT8dEeD3m_zJMxNJhesGp1laehtfpKk1t_AcylYTLPXaYHgIOvmUlIryWdrfgaleJOMX3fm5WLrBOMpue_kiID842t2ZBfKRA",
      "refreshToken": "AMf-vBw8jsIDjxUEC8akqLPw8oKSIcH2dFhtVS9B_-ifIilToFPdpWlQK78uZMRCc8zYP1pvbjleW0tFMH-Uuz6CDetOkdxinY_qmAoLE5V67OLQmtPHNWoZUXtutYGj8h4u1zTPgKj15h9WFrUOhFjXwRM2lyqvXrN_esLUBfVfG9tkLQxMziwEuR3kTR5nXqxZ6l2x-mpoUWxCYcD9TANGyCal21umWiujtz8jnPIt82YhYYC5bj5Dx3q2-nMjZkZlOWYjIf3v",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 342.0 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/Ks2wnEi65UW64ghle2Pvrwcm8W12 (1168.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3MDc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODcwNzQsImV4cCI6MTc0ODM5MDY3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N2bPbKZaZU_CkeRCZ2TydOO2UDSJE5Ew3_0FmziEAoDJk26YeL3u-CyLwJ5ZSwe7OzpCY9jwHX4uc2HZ0I7yFHZIO052pGYJoWsXaG7Qx56rxn7jhjfjjmp_7gEuV12R1d8lnkS1pyqOU64W_jtkEBacZ2Ap7kzZt-LX3R0eNKfYhoVX3ODB-EeZh8A-b-8Ft_ZEHAX_2lftzry8zZp_xMFHVnpwTtUOHugn2Nw9erIFS7jiUlgzdXT8dEeD3m_zJMxNJhesGp1laehtfpKk1t_AcylYTLPXaYHgIOvmUlIryWdrfgaleJOMX3fm5WLrBOMpue_kiID842t2ZBfKRA"
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
    "date": "Tue, 27 May 2025 23:04:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1168.4 ms  

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
