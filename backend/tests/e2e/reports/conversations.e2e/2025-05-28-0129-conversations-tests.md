# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:29:20 AM  
**Duration:** 50.26s  
**Tests:** 26 total, 24 passed, 2 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 2.16s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.69s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.55s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.16s | Should create group conversation with multiple participants |
| ✅ Should get conversation by ID for participant | PASSED | 0.77s | Should get conversation by ID for participant |
| ✅ Should fail to get conversation by ID for non-participant | PASSED | 1.73s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 0.95s | Should get conversations for user |
| ❌ Should fail to get conversations for other user without permission | FAILED | 10.02s | Should fail to get conversations for other user without permission |
| ✅ Should get conversation with invalid ID format | PASSED | 0.76s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 0.84s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 0.77s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.77s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.88s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 0.83s | Should unblock conversation (moderator) |
| ✅ Should fail to block conversation as regular user | PASSED | 0.54s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.78s | Should permanently delete conversation (admin) |
| ✅ Should fail to permanently delete conversation as regular user | PASSED | 0.55s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 0.93s | Should get all conversations (admin) |
| ✅ Should fail to get all conversations as regular user | PASSED | 0.50s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 0.98s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 1.85s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.94s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 0.92s | Super admin should access conversations across organizations |
| ✅ Should handle non-existent conversation ID | PASSED | 0.64s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.55s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.16s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2158.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "etag": "W/\"144-Imp7WbtYLTt9mOlhYSlHwj0aYRU\"",
    "date": "Tue, 27 May 2025 23:28:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f159d639-4932-4e06-be97-5e71f3c8d4ee",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:28:41.382Z",
    "lastMessageAt": "2025-05-27T23:28:41.382Z",
    "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
    ]
  }
}
```

**⏱️ Duration:** 2158.2 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (690.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:28:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 690.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (548.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:28:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 548.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.16s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1156.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1",
      "JwYEEJn7qYe9IVOHTf1DSETXAaW2"
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
    "etag": "W/\"168-mSKMyXWvjA+2x/Ey5ZGEoW0w99Q\"",
    "date": "Tue, 27 May 2025 23:28:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2e71f3d8-aba4-4812-bce4-1ccc89b67b74",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-05-27T23:28:44.274Z",
    "lastMessageAt": "2025-05-27T23:28:44.274Z",
    "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1",
      "JwYEEJn7qYe9IVOHTf1DSETXAaW2"
    ]
  }
}
```

**⏱️ Duration:** 1156.5 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/f159d639-4932-4e06-be97-5e71f3c8d4ee (764.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "etag": "W/\"152-lCEu88DLcarlVEXEO4VltkttWgY\"",
    "date": "Tue, 27 May 2025 23:28:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f159d639-4932-4e06-be97-5e71f3c8d4ee",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:28:41.382Z",
    "lastMessageAt": "2025-05-27T23:28:41.382Z",
    "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 764.4 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (925.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "etag": "W/\"147-/ZywKAwoj/f/Kv1UF31e4sq79tg\"",
    "date": "Tue, 27 May 2025 23:28:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "07d174dd-afd4-4ed1-95c5-2d4bbba575c8",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:28:46.115Z",
    "lastMessageAt": "2025-05-27T23:28:46.115Z",
    "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
    ]
  }
}
```

**⏱️ Duration:** 925.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/07d174dd-afd4-4ed1-95c5-2d4bbba575c8 (803.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNiwidXNlcl9pZCI6Ikp3WUVFSm43cVllOUlWT0hUZjFEU0VUWEFhVzIiLCJzdWIiOiJKd1lFRUpuN3FZZTlJVk9IVGYxRFNFVFhBYVcyIiwiaWF0IjoxNzQ4Mzg4NTE2LCJleHAiOjE3NDgzOTIxMTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODUxNTU5NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4NTE1NTk0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gW8B0Co1EamePsCXDbUf7PuczXwnes51kiN362XG9u-hzFRDicJ_51g85YdFdy9IpHRm3ELnxdNwv7uuuKda8XvokmbcYQ6ufLN8xNI9N7rFKC_9hMSa3JkXTqbMjomgaxWMO0RsgDI94VA8e9FUQP7OI8R1w-NnYg6sPY-9adgsR_WCzTMtzvA423zi2BeJZZ-42Kl9gvEDGxUPhXESX5EAMHlo7vlYI-XQQ8QAKt_PNkAR1Y5T95IzxvZ-0YuFEV84jcoTtS83wZOlFrHAU5iaAvMI2QHuzRMyQDWi2UVvvafItfaIhmZj8lbB3HToYZdqkBKzLB3UNc1r1FbLCA",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:28:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 803.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/oaZZFggnThc6fd56pDskVVWH0Io1 (952.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "etag": "W/\"421-vYOWMUyHKec3hEmxD8h6JGIdQ20\"",
    "date": "Tue, 27 May 2025 23:28:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "07d174dd-afd4-4ed1-95c5-2d4bbba575c8",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:28:46.115Z",
      "lastMessageAt": "2025-05-27T23:28:46.115Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
      ],
      "messages": []
    },
    {
      "id": "2e71f3d8-aba4-4812-bce4-1ccc89b67b74",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:28:44.274Z",
      "lastMessageAt": "2025-05-27T23:28:44.274Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1",
        "JwYEEJn7qYe9IVOHTf1DSETXAaW2"
      ],
      "messages": []
    },
    {
      "id": "f159d639-4932-4e06-be97-5e71f3c8d4ee",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:28:41.382Z",
      "lastMessageAt": "2025-05-27T23:28:41.382Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 952.1 ms  

</details>


---

### Test: Should fail to get conversations for other user without permission
**Status:** ❌ FAILED  
**Duration:** 10.02s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32mfalse[39m
Received: [31mtrue[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10012.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10012.6 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (760.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:28:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 760.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/f159d639-4932-4e06-be97-5e71f3c8d4ee/soft-delete (842.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "userId": "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "date": "Tue, 27 May 2025 23:28:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 842.2 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/f159d639-4932-4e06-be97-5e71f3c8d4ee/hide (765.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "userId": "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "date": "Tue, 27 May 2025 23:29:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 765.9 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/f159d639-4932-4e06-be97-5e71f3c8d4ee/unhide (765.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "userId": "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "date": "Tue, 27 May 2025 23:29:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 765.1 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/2e71f3d8-aba4-4812-bce4-1ccc89b67b74/block (875.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNiwidXNlcl9pZCI6Ikp3WUVFSm43cVllOUlWT0hUZjFEU0VUWEFhVzIiLCJzdWIiOiJKd1lFRUpuN3FZZTlJVk9IVGYxRFNFVFhBYVcyIiwiaWF0IjoxNzQ4Mzg4NTE2LCJleHAiOjE3NDgzOTIxMTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODUxNTU5NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4NTE1NTk0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gW8B0Co1EamePsCXDbUf7PuczXwnes51kiN362XG9u-hzFRDicJ_51g85YdFdy9IpHRm3ELnxdNwv7uuuKda8XvokmbcYQ6ufLN8xNI9N7rFKC_9hMSa3JkXTqbMjomgaxWMO0RsgDI94VA8e9FUQP7OI8R1w-NnYg6sPY-9adgsR_WCzTMtzvA423zi2BeJZZ-42Kl9gvEDGxUPhXESX5EAMHlo7vlYI-XQQ8QAKt_PNkAR1Y5T95IzxvZ-0YuFEV84jcoTtS83wZOlFrHAU5iaAvMI2QHuzRMyQDWi2UVvvafItfaIhmZj8lbB3HToYZdqkBKzLB3UNc1r1FbLCA",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "userId": "JwYEEJn7qYe9IVOHTf1DSETXAaW2"
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
    "date": "Tue, 27 May 2025 23:29:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 875.1 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/2e71f3d8-aba4-4812-bce4-1ccc89b67b74/unblock (831.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNiwidXNlcl9pZCI6Ikp3WUVFSm43cVllOUlWT0hUZjFEU0VUWEFhVzIiLCJzdWIiOiJKd1lFRUpuN3FZZTlJVk9IVGYxRFNFVFhBYVcyIiwiaWF0IjoxNzQ4Mzg4NTE2LCJleHAiOjE3NDgzOTIxMTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODUxNTU5NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4NTE1NTk0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gW8B0Co1EamePsCXDbUf7PuczXwnes51kiN362XG9u-hzFRDicJ_51g85YdFdy9IpHRm3ELnxdNwv7uuuKda8XvokmbcYQ6ufLN8xNI9N7rFKC_9hMSa3JkXTqbMjomgaxWMO0RsgDI94VA8e9FUQP7OI8R1w-NnYg6sPY-9adgsR_WCzTMtzvA423zi2BeJZZ-42Kl9gvEDGxUPhXESX5EAMHlo7vlYI-XQQ8QAKt_PNkAR1Y5T95IzxvZ-0YuFEV84jcoTtS83wZOlFrHAU5iaAvMI2QHuzRMyQDWi2UVvvafItfaIhmZj8lbB3HToYZdqkBKzLB3UNc1r1FbLCA",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "userId": "JwYEEJn7qYe9IVOHTf1DSETXAaW2"
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
    "date": "Tue, 27 May 2025 23:29:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 831.3 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/f159d639-4932-4e06-be97-5e71f3c8d4ee/block (539.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "userId": "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "date": "Tue, 27 May 2025 23:29:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 539.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.78s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1052.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "etag": "W/\"149-tQDtb4i7IxqGbhHYlyiOadxvMxg\"",
    "date": "Tue, 27 May 2025 23:29:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a59740e7-696c-4a0d-8840-402fe52976f9",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:29:04.361Z",
    "lastMessageAt": "2025-05-27T23:29:04.361Z",
    "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
    ]
  }
}
```

**⏱️ Duration:** 1052.8 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/a59740e7-696c-4a0d-8840-402fe52976f9 (726.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:29:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 726.1 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/f159d639-4932-4e06-be97-5e71f3c8d4ee (544.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:29:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 544.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (929.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "content-length": "9328",
    "etag": "W/\"2470-WXyqmquOOjsIlpgECotg6ehUygA\"",
    "date": "Tue, 27 May 2025 23:29:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "07d174dd-afd4-4ed1-95c5-2d4bbba575c8",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:28:46.115Z",
      "lastMessageAt": "2025-05-27T23:28:46.115Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "oaZZFggnThc6fd56pDskVVWH0Io1",
          "email": "conversations-regular-1748388514183@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "2e71f3d8-aba4-4812-bce4-1ccc89b67b74",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:28:44.274Z",
      "lastMessageAt": "2025-05-27T23:28:44.274Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "oaZZFggnThc6fd56pDskVVWH0Io1",
          "email": "conversations-regular-1748388514183@example.com",
          "name": "Regular User"
        },
        {
          "id": "JwYEEJn7qYe9IVOHTf1DSETXAaW2",
          "email": "conversations-moderator-1748388515594@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "f159d639-4932-4e06-be97-5e71f3c8d4ee",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:28:41.382Z",
      "lastMessageAt": "2025-05-27T23:28:41.382Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "oaZZFggnThc6fd56pDskVVWH0Io1",
          "email": "conversations-regular-1748388514183@example.com",
          "name": "Regular User"
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
  ]
}
```

**⏱️ Duration:** 929.5 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (501.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODUxNSwidXNlcl9pZCI6Im9hWlpGZ2duVGhjNmZkNTZwRHNrVlZXSDBJbzEiLCJzdWIiOiJvYVpaRmdnblRoYzZmZDU2cERza1ZWV0gwSW8xIiwiaWF0IjoxNzQ4Mzg4NTE1LCJleHAiOjE3NDgzOTIxMTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg1MTQxODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rhIWp1mp-N85OlYs5h7pKvKAWXWB76Hz0QXEOVCfjmXEpaSXdMfRYJ_fo3fYDPfUHe_WBe3P5RJSjAqR7PW8kTl4pCFu5aUr0pm4MwhlTqGyJhittUiSWSyaxpl-n-JpC_X2FvO3Pouctu_jr0LIV2uj9bTZxSyyngimeLfbpfRFQLuTAdJ2y0tzh8rzIEco4ZoL2fhzKFqWRuA_xgBHDMOKYi6gPeA-ZZONd6y3v2e8cjyiPggRnSgG9_glOTqTV6MCv9dZSzSQLH82obT6z2bMxymwW1psgcTG2PkWqbnG6koYVVkMrs_WPWlaJCwySz-hoiGvZ_KhpkuunHbz3g",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:29:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 501.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.98s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (976.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "e05462d6-7177-4954-92ad-852b3ec7921a"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "etag": "W/\"14c-QOQ5PAi0w/qgf01K1taLHZwoYKo\"",
    "date": "Tue, 27 May 2025 23:29:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6c4a45ce-df43-4f86-bf18-75eecc338351",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:29:08.019Z",
    "lastMessageAt": "2025-05-27T23:29:08.019Z",
    "organizationId": "e05462d6-7177-4954-92ad-852b3ec7921a",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
    ]
  }
}
```

**⏱️ Duration:** 976.2 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 1.85s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32mfalse[39m
Received: [31mtrue[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1028.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
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
    "etag": "W/\"144-a15QEkfwLQ8ahiKV4GutTF6K4jE\"",
    "date": "Tue, 27 May 2025 23:29:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5f6e5416-9ff0-4d92-9160-8f0f4c5e9508",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:29:09.046Z",
    "lastMessageAt": "2025-05-27T23:29:09.046Z",
    "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
    ]
  }
}
```

**⏱️ Duration:** 1028.2 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/5f6e5416-9ff0-4d92-9160-8f0f4c5e9508 (798.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "e05462d6-7177-4954-92ad-852b3ec7921a"
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
    "etag": "W/\"152-yxF3abjmwUb+kcjFEMp/E8h0Ud0\"",
    "date": "Tue, 27 May 2025 23:29:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5f6e5416-9ff0-4d92-9160-8f0f4c5e9508",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:29:09.046Z",
    "lastMessageAt": "2025-05-27T23:29:09.046Z",
    "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "oaZZFggnThc6fd56pDskVVWH0Io1"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 798.0 ms  

</details>


**Console Output:**
```
❌ Unexpected error type: Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32mfalse[39m
Received: [31mtrue[39m
```

---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (941.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "etag": "W/\"574-v5iQAMb6FVO+44Et78IvtYCYO8Y\"",
    "date": "Tue, 27 May 2025 23:29:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "5f6e5416-9ff0-4d92-9160-8f0f4c5e9508",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:29:09.046Z",
      "lastMessageAt": "2025-05-27T23:29:09.046Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
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
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
      ],
      "messages": []
    },
    {
      "id": "2e71f3d8-aba4-4812-bce4-1ccc89b67b74",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:28:44.274Z",
      "lastMessageAt": "2025-05-27T23:28:44.274Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1",
        "JwYEEJn7qYe9IVOHTf1DSETXAaW2"
      ],
      "messages": []
    },
    {
      "id": "f159d639-4932-4e06-be97-5e71f3c8d4ee",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:28:41.382Z",
      "lastMessageAt": "2025-05-27T23:28:41.382Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 941.9 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (918.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A"
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
    "content-length": "8128",
    "etag": "W/\"1fc0-USl0HMUItalHKg+QmjN2O/6THsc\"",
    "date": "Tue, 27 May 2025 23:29:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "5f6e5416-9ff0-4d92-9160-8f0f4c5e9508",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:29:09.046Z",
      "lastMessageAt": "2025-05-27T23:29:09.046Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
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
      "organizationId": "e05462d6-7177-4954-92ad-852b3ec7921a",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
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
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
      ],
      "messages": []
    },
    {
      "id": "2e71f3d8-aba4-4812-bce4-1ccc89b67b74",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:28:44.274Z",
      "lastMessageAt": "2025-05-27T23:28:44.274Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1",
        "JwYEEJn7qYe9IVOHTf1DSETXAaW2"
      ],
      "messages": []
    },
    {
      "id": "f159d639-4932-4e06-be97-5e71f3c8d4ee",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:28:41.382Z",
      "lastMessageAt": "2025-05-27T23:28:41.382Z",
      "organizationId": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "oaZZFggnThc6fd56pDskVVWH0Io1"
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
  ]
}
```

**⏱️ Duration:** 918.8 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (634.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:29:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 634.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/f159d639-4932-4e06-be97-5e71f3c8d4ee (8.8ms)</summary>

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
    "date": "Tue, 27 May 2025 23:29:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 8.8 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (550.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A",
    "X-Organization-Id": "d35fe6be-e58a-49ba-a4a9-48bee5fc58f6"
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
    "date": "Tue, 27 May 2025 23:29:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 550.3 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/f159d639-4932-4e06-be97-5e71f3c8d4ee (661.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A"
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
    "date": "Tue, 27 May 2025 23:29:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 661.8 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/2e71f3d8-aba4-4812-bce4-1ccc89b67b74 (610.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A"
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
    "date": "Tue, 27 May 2025 23:29:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 610.5 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/d35fe6be-e58a-49ba-a4a9-48bee5fc58f6 (1489.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A"
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
    "date": "Tue, 27 May 2025 23:29:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1489.6 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/e05462d6-7177-4954-92ad-852b3ec7921a (1252.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1MTAsImV4cCI6MTc0ODM5MjExMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A6LbX87oe2UdzWJ0JfwYp5ffIE_UA9MDXWUY8UYg5_3Bd9n000Rwg6_UElsSyXnvU1rZvMyEfargoh8XnOtVT0G0SzrIIb1FiAvYy80ppDIyU45_wwchdC20fRyXDr0z_v6uKpmCuDnVxHx-bydR_cZaMnVALMGzwpTTuXiGRJqWMfdxC5QGNptOFop8C4UbzW0DYsXItNvl6zjhWtyPanF9o1TZVQ8aWYOb-VtD_DH-Y4vGgCznxy7WJoapnpF_iavTST-e0j8OLT2hX-nr_lhHx4Oeq8N-2Kw-jksmtx8dz-Vs8vhSQYJ2FQ4I3ps9bCu-64ab_amrADDBMwMh6A"
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
    "date": "Tue, 27 May 2025 23:29:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1252.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (263.5ms)</summary>

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
    "etag": "W/\"640-+PPKstEhj1LM/nyK+zFktO9Dvfw\"",
    "date": "Tue, 27 May 2025 23:29:17 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTU3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1NTcsImV4cCI6MTc0ODM5MjE1NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TcCzP94QIY_cAFyJsGI9MJyO7oojyj2DKI1LCmuPWsrPxrdxi9P5ObjIU6_b65RytuoQxRHv3QA_cqa2c1Q_tcLHN9ZkjtkBmXcu87ct6uTxY_DeHxEklNeWnKralScuiwfJCH7A0Q0546Gca-7X3NnDVF-Mcv0fJ0ENTbMqNwzH0ygElYVznVrxU7-XLJJczr20Sp2n4Hl-kG6kxHBEi5yQnN3KnAToKitShGqtM5FmIwAjSkMqn6ZM05cHA71BbttMTrybjlRe7eR_17aQbhDpdnvDTJvcihMGi-JLWO2dx6gCx1-3L-9a7RuV6_EFm-_r4hD5FWSidgtqUuWkKg",
      "refreshToken": "AMf-vByADLettRZLHIa2Lh8Hn7oWGRleDzCK9R9z4lbSOjyGTMQppOvny1fYWZWPNHZdn3Mr1rNU6lz9btC_zWGndCU9H0MPH9L8At87oqZLtKu7rBSskdQGqwp7zrWpsbIfFmwVGpwXf9PDHOZ6wGyBWhsaYffYGi-MUYpXeKUvv2VoJVUKysSrLsfDNaASvMUC-YKtPIWKlXHd_v4k8RDPoDWX2ffZxlpy-VfvioSBPtJRMwDDjNSQPLcN4xAW_kWHrONtX6Z_",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 263.5 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/oaZZFggnThc6fd56pDskVVWH0Io1 (1461.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTU3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1NTcsImV4cCI6MTc0ODM5MjE1NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TcCzP94QIY_cAFyJsGI9MJyO7oojyj2DKI1LCmuPWsrPxrdxi9P5ObjIU6_b65RytuoQxRHv3QA_cqa2c1Q_tcLHN9ZkjtkBmXcu87ct6uTxY_DeHxEklNeWnKralScuiwfJCH7A0Q0546Gca-7X3NnDVF-Mcv0fJ0ENTbMqNwzH0ygElYVznVrxU7-XLJJczr20Sp2n4Hl-kG6kxHBEi5yQnN3KnAToKitShGqtM5FmIwAjSkMqn6ZM05cHA71BbttMTrybjlRe7eR_17aQbhDpdnvDTJvcihMGi-JLWO2dx6gCx1-3L-9a7RuV6_EFm-_r4hD5FWSidgtqUuWkKg"
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
    "date": "Tue, 27 May 2025 23:29:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1461.4 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (265.2ms)</summary>

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
    "etag": "W/\"640-zFHVHUaxPc7WQQswpfP3PiQmYy0\"",
    "date": "Tue, 27 May 2025 23:29:19 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1NTksImV4cCI6MTc0ODM5MjE1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ov_Awq-2g5LnZuXjtscVTJNpuYSpoCeLIBPaibrV_z2O7i9Zt-lU93rFkFg9VpXKD2xRywlCvhvJDbbOPpAtE_Q7lDdyRtCes5ZhRQgpB0UXwA_RLiw-frc0mI0-xLU9bUTvkjR543K7PT0eYQq6TI4pdGSQ-HBWnf8UTKaXdJdl4uC7qup9IZMaO-SHCxNONw_GTSY4kO1RMeFp2_APRn0qAUFdhvsZHpGu-CHmVWkc9NGDO1bQ3llYZ2yqg59-jCReRYZ35LXhsFjJMDIZSKa7aNtqdaTt2AO53xrHpyCI1qw66z66cy96WkJobYg62EawR9JON_pLn-hCmKP0Gw",
      "refreshToken": "AMf-vBzIDTAOLBjUdIYEGY_jDHUCp4K0b1Zx7fmZyzeHJAbRWw-IrB5B-P1xCpck1pI3pHEYpYJfcUgasa78Bogsh6HsfpgGW05xSGRsWmrlAOZaqThYichlzi-ip_Yk2kXjVxwkBIZmOeFL69kzP2DsmrFa4m5xQkMxJKIZG4X8ULKJQtqQ3bMLoJE2GJpmOVwlNxVV8W8wlA_bMX0DrqIPdM2ywY3aZFzcGWE7untG7X9azckgdXKNdWMnub0oLR5BpBmitCbl",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 265.2 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/JwYEEJn7qYe9IVOHTf1DSETXAaW2 (1320.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NTU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg1NTksImV4cCI6MTc0ODM5MjE1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ov_Awq-2g5LnZuXjtscVTJNpuYSpoCeLIBPaibrV_z2O7i9Zt-lU93rFkFg9VpXKD2xRywlCvhvJDbbOPpAtE_Q7lDdyRtCes5ZhRQgpB0UXwA_RLiw-frc0mI0-xLU9bUTvkjR543K7PT0eYQq6TI4pdGSQ-HBWnf8UTKaXdJdl4uC7qup9IZMaO-SHCxNONw_GTSY4kO1RMeFp2_APRn0qAUFdhvsZHpGu-CHmVWkc9NGDO1bQ3llYZ2yqg59-jCReRYZ35LXhsFjJMDIZSKa7aNtqdaTt2AO53xrHpyCI1qw66z66cy96WkJobYg62EawR9JON_pLn-hCmKP0Gw"
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
    "date": "Tue, 27 May 2025 23:29:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1320.7 ms  

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
