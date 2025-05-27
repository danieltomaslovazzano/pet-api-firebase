# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:26:38 AM  
**Duration:** 50.56s  
**Tests:** 26 total, 23 passed, 3 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 2.12s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.66s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.53s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.03s | Should create group conversation with multiple participants |
| ✅ Should get conversation by ID for participant | PASSED | 0.86s | Should get conversation by ID for participant |
| ❌ Should fail to get conversation by ID for non-participant | FAILED | 1.98s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 0.85s | Should get conversations for user |
| ❌ Should fail to get conversations for other user without permission | FAILED | 10.01s | Should fail to get conversations for other user without permission |
| ✅ Should get conversation with invalid ID format | PASSED | 0.62s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 0.89s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 0.79s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.85s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.77s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 1.27s | Should unblock conversation (moderator) |
| ✅ Should fail to block conversation as regular user | PASSED | 0.55s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.75s | Should permanently delete conversation (admin) |
| ✅ Should fail to permanently delete conversation as regular user | PASSED | 0.57s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 1.00s | Should get all conversations (admin) |
| ✅ Should fail to get all conversations as regular user | PASSED | 0.49s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 0.93s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 1.88s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.88s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 0.87s | Super admin should access conversations across organizations |
| ✅ Should handle non-existent conversation ID | PASSED | 0.64s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.56s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.12s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2114.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "content-length": "324",
    "etag": "W/\"144-xMjBc7IyW46JANjoZjzR6T+aGF4\"",
    "date": "Tue, 27 May 2025 23:25:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ee3196ef-0860-456a-a971-2f6bc69ee049",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:25:58.560Z",
    "lastMessageAt": "2025-05-27T23:25:58.560Z",
    "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
    ]
  }
}
```

**⏱️ Duration:** 2114.5 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (659.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "date": "Tue, 27 May 2025 23:26:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 659.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (531.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "date": "Tue, 27 May 2025 23:26:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 531.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1029.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3",
      "4y52AK1BGpVlTvAXHFRdqZeeOHC2"
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
    "content-length": "360",
    "etag": "W/\"168-g5vg4OemZxOJGke1so10d5Z3gbc\"",
    "date": "Tue, 27 May 2025 23:26:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "801931f6-41b5-4a35-b07c-3705aeeaf1f9",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-05-27T23:26:01.308Z",
    "lastMessageAt": "2025-05-27T23:26:01.308Z",
    "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3",
      "4y52AK1BGpVlTvAXHFRdqZeeOHC2"
    ]
  }
}
```

**⏱️ Duration:** 1029.8 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/ee3196ef-0860-456a-a971-2f6bc69ee049 (861.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "content-length": "338",
    "etag": "W/\"152-HsI6OOwRrZVYgGm9JWH6MAO/MNc\"",
    "date": "Tue, 27 May 2025 23:26:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ee3196ef-0860-456a-a971-2f6bc69ee049",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:25:58.560Z",
    "lastMessageAt": "2025-05-27T23:25:58.560Z",
    "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 861.3 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ❌ FAILED  
**Duration:** 1.98s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Permission denied"[39m
Received string:    [31m"Forbidden: You must be a participant to view this conversation"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1242.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "content-length": "327",
    "etag": "W/\"147-t98F0mSMFd63fHtvVv5VjlkXF6I\"",
    "date": "Tue, 27 May 2025 23:26:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ef5c602a-3917-48de-98a0-a1faea074a0c",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:26:03.558Z",
    "lastMessageAt": "2025-05-27T23:26:03.558Z",
    "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
    ]
  }
}
```

**⏱️ Duration:** 1242.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/ef5c602a-3917-48de-98a0-a1faea074a0c (735.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1NCwidXNlcl9pZCI6IjR5NTJBSzFCR3BWbFR2QVhIRlJkcVplZU9IQzIiLCJzdWIiOiI0eTUyQUsxQkdwVmxUdkFYSEZSZHFaZWVPSEMyIiwiaWF0IjoxNzQ4Mzg4MzU0LCJleHAiOjE3NDgzOTE5NTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODM1Mjk3NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4MzUyOTc0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.A4gBtSgVRqFwDLfZcRz8KJ_HpjMpE-WCOziNpU4HydH7CE_hWItRkdMUFCpHAO1fWKADGe-l0KKfvI58cS_zmo22zIw8RkrSmWGc0pg1wjMvqDJLwDfOhAVDpIuFIWjReYQ1jDw6zcxcEsGuLC-maV_WA1Puy4MxGrDJxW73J3AD_MQngRUlXVY25z3rZPuYZ3Q1EXUtGOsP1FQIaHYetjsPlvF-SDwPE04FdSf-k7hTfwXWOazBWlrvFNAR3IvPK7d2HbS0Rp52xoBWsAgOJAVEW3BhFwU0z3NFl_Alzz1jykrKokp12daOmWV4dTOD13okIxA0KX8qYARTdZAWtw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "content-length": "74",
    "etag": "W/\"4a-Fyqr1faEDtk2YaMMvIXmg9zuYjk\"",
    "date": "Tue, 27 May 2025 23:26:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 735.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/ZwqaopBMwedQLKa0xYih2ffei8C3 (849.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "content-length": "1057",
    "etag": "W/\"421-DwgELkadVtnDG9wsUBM31Cp06Ak\"",
    "date": "Tue, 27 May 2025 23:26:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "ef5c602a-3917-48de-98a0-a1faea074a0c",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:26:03.558Z",
      "lastMessageAt": "2025-05-27T23:26:03.558Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
      ],
      "messages": []
    },
    {
      "id": "801931f6-41b5-4a35-b07c-3705aeeaf1f9",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:26:01.308Z",
      "lastMessageAt": "2025-05-27T23:26:01.308Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3",
        "4y52AK1BGpVlTvAXHFRdqZeeOHC2"
      ],
      "messages": []
    },
    {
      "id": "ee3196ef-0860-456a-a971-2f6bc69ee049",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:25:58.560Z",
      "lastMessageAt": "2025-05-27T23:25:58.560Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 849.2 ms  

</details>


---

### Test: Should fail to get conversations for other user without permission
**Status:** ❌ FAILED  
**Duration:** 10.01s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBeDefined[2m()[22m

Received: [31mundefined[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10007.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (619.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "date": "Tue, 27 May 2025 23:26:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 619.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.89s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ee3196ef-0860-456a-a971-2f6bc69ee049/soft-delete (888.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "userId": "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "content-length": "63",
    "etag": "W/\"3f-eBFNEblU6BDw65IdaFg0HjqyBXQ\"",
    "date": "Tue, 27 May 2025 23:26:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 888.3 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ee3196ef-0860-456a-a971-2f6bc69ee049/hide (788.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "userId": "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "content-length": "57",
    "etag": "W/\"39-XB03+vGBAhBhXZf82O16dMyBKFk\"",
    "date": "Tue, 27 May 2025 23:26:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 788.6 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ee3196ef-0860-456a-a971-2f6bc69ee049/unhide (853.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "userId": "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "etag": "W/\"3b-n0d3sb8F9L3KjFMzGGqXec1pbcs\"",
    "date": "Tue, 27 May 2025 23:26:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 853.9 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/801931f6-41b5-4a35-b07c-3705aeeaf1f9/block (763.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1NCwidXNlcl9pZCI6IjR5NTJBSzFCR3BWbFR2QVhIRlJkcVplZU9IQzIiLCJzdWIiOiI0eTUyQUsxQkdwVmxUdkFYSEZSZHFaZWVPSEMyIiwiaWF0IjoxNzQ4Mzg4MzU0LCJleHAiOjE3NDgzOTE5NTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODM1Mjk3NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4MzUyOTc0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.A4gBtSgVRqFwDLfZcRz8KJ_HpjMpE-WCOziNpU4HydH7CE_hWItRkdMUFCpHAO1fWKADGe-l0KKfvI58cS_zmo22zIw8RkrSmWGc0pg1wjMvqDJLwDfOhAVDpIuFIWjReYQ1jDw6zcxcEsGuLC-maV_WA1Puy4MxGrDJxW73J3AD_MQngRUlXVY25z3rZPuYZ3Q1EXUtGOsP1FQIaHYetjsPlvF-SDwPE04FdSf-k7hTfwXWOazBWlrvFNAR3IvPK7d2HbS0Rp52xoBWsAgOJAVEW3BhFwU0z3NFl_Alzz1jykrKokp12daOmWV4dTOD13okIxA0KX8qYARTdZAWtw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "userId": "4y52AK1BGpVlTvAXHFRdqZeeOHC2"
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
    "content-length": "58",
    "etag": "W/\"3a-A4Y0vsDExGkj/TOg8mFcmDomGT8\"",
    "date": "Tue, 27 May 2025 23:26:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 763.2 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 1.27s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/801931f6-41b5-4a35-b07c-3705aeeaf1f9/unblock (1265.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1NCwidXNlcl9pZCI6IjR5NTJBSzFCR3BWbFR2QVhIRlJkcVplZU9IQzIiLCJzdWIiOiI0eTUyQUsxQkdwVmxUdkFYSEZSZHFaZWVPSEMyIiwiaWF0IjoxNzQ4Mzg4MzU0LCJleHAiOjE3NDgzOTE5NTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODM1Mjk3NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4MzUyOTc0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.A4gBtSgVRqFwDLfZcRz8KJ_HpjMpE-WCOziNpU4HydH7CE_hWItRkdMUFCpHAO1fWKADGe-l0KKfvI58cS_zmo22zIw8RkrSmWGc0pg1wjMvqDJLwDfOhAVDpIuFIWjReYQ1jDw6zcxcEsGuLC-maV_WA1Puy4MxGrDJxW73J3AD_MQngRUlXVY25z3rZPuYZ3Q1EXUtGOsP1FQIaHYetjsPlvF-SDwPE04FdSf-k7hTfwXWOazBWlrvFNAR3IvPK7d2HbS0Rp52xoBWsAgOJAVEW3BhFwU0z3NFl_Alzz1jykrKokp12daOmWV4dTOD13okIxA0KX8qYARTdZAWtw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "userId": "4y52AK1BGpVlTvAXHFRdqZeeOHC2"
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
    "content-length": "60",
    "etag": "W/\"3c-y9mFZkgK55aK8aWX6ax2PLYYeDQ\"",
    "date": "Tue, 27 May 2025 23:26:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 1265.6 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ee3196ef-0860-456a-a971-2f6bc69ee049/block (552.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "userId": "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "date": "Tue, 27 May 2025 23:26:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 552.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (970.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "content-length": "329",
    "etag": "W/\"149-9e8N+YPDypIz0OLcWYUFn4jl0ks\"",
    "date": "Tue, 27 May 2025 23:26:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8076c528-07ce-4769-a0b7-2e2a4659ae64",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:26:21.886Z",
    "lastMessageAt": "2025-05-27T23:26:21.886Z",
    "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
    ]
  }
}
```

**⏱️ Duration:** 970.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/8076c528-07ce-4769-a0b7-2e2a4659ae64 (780.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "date": "Tue, 27 May 2025 23:26:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 780.1 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/ee3196ef-0860-456a-a971-2f6bc69ee049 (569.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "date": "Tue, 27 May 2025 23:26:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 569.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.00s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (999.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "content-length": "8318",
    "etag": "W/\"207e-R5+ZrW0Zw52oxwT9h18nl897x20\"",
    "date": "Tue, 27 May 2025 23:26:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "ef5c602a-3917-48de-98a0-a1faea074a0c",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:26:03.558Z",
      "lastMessageAt": "2025-05-27T23:26:03.558Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "ZwqaopBMwedQLKa0xYih2ffei8C3",
          "email": "conversations-regular-1748388351281@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "801931f6-41b5-4a35-b07c-3705aeeaf1f9",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:26:01.308Z",
      "lastMessageAt": "2025-05-27T23:26:01.308Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "ZwqaopBMwedQLKa0xYih2ffei8C3",
          "email": "conversations-regular-1748388351281@example.com",
          "name": "Regular User"
        },
        {
          "id": "4y52AK1BGpVlTvAXHFRdqZeeOHC2",
          "email": "conversations-moderator-1748388352974@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "ee3196ef-0860-456a-a971-2f6bc69ee049",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:25:58.560Z",
      "lastMessageAt": "2025-05-27T23:25:58.560Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "ZwqaopBMwedQLKa0xYih2ffei8C3",
          "email": "conversations-regular-1748388351281@example.com",
          "name": "Regular User"
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
  ]
}
```

**⏱️ Duration:** 999.5 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (493.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODM1MiwidXNlcl9pZCI6Ilp3cWFvcEJNd2VkUUxLYTB4WWloMmZmZWk4QzMiLCJzdWIiOiJad3Fhb3BCTXdlZFFMS2EweFlpaDJmZmVpOEMzIiwiaWF0IjoxNzQ4Mzg4MzUyLCJleHAiOjE3NDgzOTE5NTIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgzNTEyODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CfKIzrPJroMto6kOahIr-1PGzvaT9QAgjxrZ4InWkaVmzK7WnmknuK0PHKA-ntsuzORMUWlTuR5BGJQ5vBcvzn5S_gpVlUuqCtR3FxXaOq5zVwKVyqhfSRrRC41sElAUiRwupW5ienBxUTFErZVcw5F4TXNTK4S0LfoBZjFYyjn3xM9ZOYlkJQl585xyALS7OFpKg1r4rt7E9eiWs602xbtUDNARy5ynzsCAjiH4egHhY-O7k1663wevtl51eYoMuLyuV53cjkOW2Ac0weTv30NzVvTwPLkNAo0sHZjYKKfmcC_G-qlkcgBsaBk0YmkEh1pK_IVNmzEWoV1mF8GHKQ",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "date": "Tue, 27 May 2025 23:26:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 493.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (932.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "7b2928f7-df72-4753-88a4-7053790431a4"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "content-length": "332",
    "etag": "W/\"14c-B+CW65l4TTQKwiGep4VJ41fTCow\"",
    "date": "Tue, 27 May 2025 23:26:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3b60d81b-265a-4ce4-aebd-52fd8923f789",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:26:25.677Z",
    "lastMessageAt": "2025-05-27T23:26:25.677Z",
    "organizationId": "7b2928f7-df72-4753-88a4-7053790431a4",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
    ]
  }
}
```

**⏱️ Duration:** 932.8 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 1.88s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBeDefined[2m()[22m

Received: [31mundefined[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1126.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
    "content-length": "324",
    "etag": "W/\"144-MP9FsW0uebWnXMZsd+0zUfy3MsM\"",
    "date": "Tue, 27 May 2025 23:26:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a5772cfc-5d0f-4ef2-bcf5-ce83389d6090",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:26:26.800Z",
    "lastMessageAt": "2025-05-27T23:26:26.800Z",
    "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
    ]
  }
}
```

**⏱️ Duration:** 1126.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/a5772cfc-5d0f-4ef2-bcf5-ce83389d6090 (753.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "7b2928f7-df72-4753-88a4-7053790431a4"
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
    "content-length": "338",
    "etag": "W/\"152-SP9Eu99Nz5HpuQ1DqWpSxuL1RV4\"",
    "date": "Tue, 27 May 2025 23:26:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a5772cfc-5d0f-4ef2-bcf5-ce83389d6090",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:26:26.800Z",
    "lastMessageAt": "2025-05-27T23:26:26.800Z",
    "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "ZwqaopBMwedQLKa0xYih2ffei8C3"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 753.1 ms  

</details>


---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (879.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "content-length": "1396",
    "etag": "W/\"574-JCp0JpZsGfF3b345pUhZkCZYoK4\"",
    "date": "Tue, 27 May 2025 23:26:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "a5772cfc-5d0f-4ef2-bcf5-ce83389d6090",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:26:26.800Z",
      "lastMessageAt": "2025-05-27T23:26:26.800Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
      ],
      "messages": []
    },
    {
      "id": "801931f6-41b5-4a35-b07c-3705aeeaf1f9",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:26:01.308Z",
      "lastMessageAt": "2025-05-27T23:26:01.308Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3",
        "4y52AK1BGpVlTvAXHFRdqZeeOHC2"
      ],
      "messages": []
    },
    {
      "id": "ee3196ef-0860-456a-a971-2f6bc69ee049",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:25:58.560Z",
      "lastMessageAt": "2025-05-27T23:25:58.560Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 879.2 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 0.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (869.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw"
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
    "content-length": "7295",
    "etag": "W/\"1c7f-W52gDannU3ykJXohk8cCcRPcWQ8\"",
    "date": "Tue, 27 May 2025 23:26:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "a5772cfc-5d0f-4ef2-bcf5-ce83389d6090",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:26:26.800Z",
      "lastMessageAt": "2025-05-27T23:26:26.800Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
      "organizationId": "7b2928f7-df72-4753-88a4-7053790431a4",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
      ],
      "messages": []
    },
    {
      "id": "801931f6-41b5-4a35-b07c-3705aeeaf1f9",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:26:01.308Z",
      "lastMessageAt": "2025-05-27T23:26:01.308Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3",
        "4y52AK1BGpVlTvAXHFRdqZeeOHC2"
      ],
      "messages": []
    },
    {
      "id": "ee3196ef-0860-456a-a971-2f6bc69ee049",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:25:58.560Z",
      "lastMessageAt": "2025-05-27T23:25:58.560Z",
      "organizationId": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "ZwqaopBMwedQLKa0xYih2ffei8C3"
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
  ]
}
```

**⏱️ Duration:** 869.5 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (642.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-xKwHSsyn17woE44hYRx695+j2zk\"",
    "date": "Tue, 27 May 2025 23:26:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 642.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/ee3196ef-0860-456a-a971-2f6bc69ee049 (9.8ms)</summary>

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
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Tue, 27 May 2025 23:26:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 9.8 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (564.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw",
    "X-Organization-Id": "30159b80-10b2-4570-88a7-3ebb8b6cb3d8"
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
    "date": "Tue, 27 May 2025 23:26:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 564.1 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/ee3196ef-0860-456a-a971-2f6bc69ee049 (483.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw"
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
    "date": "Tue, 27 May 2025 23:26:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 483.7 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/801931f6-41b5-4a35-b07c-3705aeeaf1f9 (581.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw"
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
    "date": "Tue, 27 May 2025 23:26:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 581.9 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/30159b80-10b2-4570-88a7-3ebb8b6cb3d8 (1376.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw"
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
    "date": "Tue, 27 May 2025 23:26:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1376.1 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/7b2928f7-df72-4753-88a4-7053790431a4 (1262.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzNDgsImV4cCI6MTc0ODM5MTk0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.K-u0O-eQn64-5G25g5IS_YFt7X1L5NyKc1iBz8WQlz8Vl2LdRN3ZCNDnGOz7buh3WSqLTB-KnnOQRapDpDV1ci-qfdubxFaYH2PQmveSsqHG4CReSudkZc9GXcrA-1d0l0joCKP1DFqw-BfuaHEy7fCQJ-SbvCfMz7l_A1DZjJaPScHdgRFW0eE3ICImwzDOCJiopqDyk1nHyZImRzU-0Y4yXyNY8GZo9MRpJ_K0ftb8NTjFcIGur5UTkTXKKlgmCBC4dY6vVOtUz0gPHWGUaXXrAPC9tZOs08AvpPNG8rPbJ9499cue_UXVMupnfzzkdtfldiv1DDe8aXnDI3tcnw"
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
    "date": "Tue, 27 May 2025 23:26:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1262.5 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (327.4ms)</summary>

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
    "etag": "W/\"640-mZnVH0ZPRMUPcO//lcJCapYhyPw\"",
    "date": "Tue, 27 May 2025 23:26:34 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4Mzk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzOTQsImV4cCI6MTc0ODM5MTk5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PQFBDWIufohmT4KWkqeB_164LhF_OGd7P0hWkUjWhWNCr2Kwklb_uCMxUwadwJPnJ28fTB1auHPQ9Dr2XJrU2JZZfmDHCrshoYeywrrzuVlMw3hjVCX8lskhgGxo7koPRsJOQUSIKgT6ScNBLjYx0c4tl0xz3bSUgaX3g4GjjiNzg34m_xzZsoy35Eb7fBh38Ctvbv9XVLXh4UgI62PT-jpVJ85tVCbMehCXakdkwktf1Pg73-34fvnBC0s_35RaWQbQSf7bCSSGmVn5TtnOugTz7XB7OhyUDeNl89vR84Mkyp7Vd4ngLwmZfAEqDJmKiw9Xs44Ro0qY5_JSKLyh9Q",
      "refreshToken": "AMf-vBzIW8XAWPlxWXvdMyG10N6E_K-yMtcQQk4_I5nclZ_QaHt3s3C4_ivvmdlypepDNRvM6hFIZc1PnxjEkbqa4S-wPOhjlyX1aHfazy8pxmUQycJvuXT1A-iAlTBjS2hQ2PUNF-ACBr2bYZ6wHMYmKZn10zK3gpnM9TMfse6z0KMgbAVrNty0yatNjgjUNhYn_VgPgUt-UnnN478idBKW8Lm-ELVhgyCf9QrWJoylOnePJ3GdolSv_d3fb1WfWVBOfevrW_7V",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 327.4 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/ZwqaopBMwedQLKa0xYih2ffei8C3 (1461.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4Mzk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzOTQsImV4cCI6MTc0ODM5MTk5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PQFBDWIufohmT4KWkqeB_164LhF_OGd7P0hWkUjWhWNCr2Kwklb_uCMxUwadwJPnJ28fTB1auHPQ9Dr2XJrU2JZZfmDHCrshoYeywrrzuVlMw3hjVCX8lskhgGxo7koPRsJOQUSIKgT6ScNBLjYx0c4tl0xz3bSUgaX3g4GjjiNzg34m_xzZsoy35Eb7fBh38Ctvbv9XVLXh4UgI62PT-jpVJ85tVCbMehCXakdkwktf1Pg73-34fvnBC0s_35RaWQbQSf7bCSSGmVn5TtnOugTz7XB7OhyUDeNl89vR84Mkyp7Vd4ngLwmZfAEqDJmKiw9Xs44Ro0qY5_JSKLyh9Q"
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
    "date": "Tue, 27 May 2025 23:26:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1461.5 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (378.2ms)</summary>

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
    "etag": "W/\"640-BxggexR+jUlTLXeNjtsjVA8NgQA\"",
    "date": "Tue, 27 May 2025 23:26:36 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4Mzk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzOTYsImV4cCI6MTc0ODM5MTk5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cxo4HDKAFejNgWrNdfuK1nQIFAZ3nZ2oawrwIBt--zzchf0mpUGg4rbOBCFWN-0ZHegK7_KqGWPlqHXekPelugXGcRk0bsqCWDV4P881IVZGM2WWrR7QtZ6N5K4idpI0FILP_CQPEd--WoazXnJIKnHMp_UxzEIlRFDMxNnFZIct0lpFGbf5BH3Pr6QpZ-gNzhX1ppRaydXxlXcGuIuMMwAfIqRta-E15QMvqTXNiSdyazGYYM3dfwIY8HjmYcr4nSb28_nQa_c-5YQQHqxbtFnTR5Vcfk4x9l8CN24oee8mWCAFcch2anOxTxTM8eA-9yZXyPS7CYs1gM0a0psC1g",
      "refreshToken": "AMf-vBwowQsN2zmtiAW-XNzT7p3nIWtWnAYAxtMdWrfWtx4uuqpGBmoedWnBgVWv5I1kfGq5hNend4R-JCmbADLopSDufI4bl_qudr2NnY4i6QZEqTRnfRNt8EBMOC0qsfadra0bzfsgLQ9RtM0yrSwC6zQZHvbSFu4R9t2MdFwqscHv3Q6WPIHTiWUUTrJkTH2n9RNoK0wYwsoo6a7pP3iBAvK-7AC3rZ3e8Waa0DNxzyA0_dZYLser6qGU7BevGpcgMiKVzUmA",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 378.2 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/4y52AK1BGpVlTvAXHFRdqZeeOHC2 (1256.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4Mzk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgzOTYsImV4cCI6MTc0ODM5MTk5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cxo4HDKAFejNgWrNdfuK1nQIFAZ3nZ2oawrwIBt--zzchf0mpUGg4rbOBCFWN-0ZHegK7_KqGWPlqHXekPelugXGcRk0bsqCWDV4P881IVZGM2WWrR7QtZ6N5K4idpI0FILP_CQPEd--WoazXnJIKnHMp_UxzEIlRFDMxNnFZIct0lpFGbf5BH3Pr6QpZ-gNzhX1ppRaydXxlXcGuIuMMwAfIqRta-E15QMvqTXNiSdyazGYYM3dfwIY8HjmYcr4nSb28_nQa_c-5YQQHqxbtFnTR5Vcfk4x9l8CN24oee8mWCAFcch2anOxTxTM8eA-9yZXyPS7CYs1gM0a0psC1g"
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
    "date": "Tue, 27 May 2025 23:26:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1256.5 ms  

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
