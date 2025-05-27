# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:16:06 AM  
**Duration:** 69.45s  
**Tests:** 25 total, 17 passed, 8 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 2.42s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.58s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.54s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.13s | Should create group conversation with multiple participants |
| ❌ Should get conversation by ID for participant | FAILED | 0.77s | Should get conversation by ID for participant |
| ✅ Should fail to get conversation by ID for non-participant | PASSED | 1.71s | Should fail to get conversation by ID for non-participant |
| ❌ Should get conversations for user | FAILED | 0.95s | Should get conversations for user |
| ✅ Should get conversation with invalid ID format | PASSED | 0.76s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 1.00s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 0.81s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.82s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.77s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 0.86s | Should unblock conversation (moderator) |
| ❌ Should fail to block conversation as regular user | FAILED | 0.50s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.76s | Should permanently delete conversation (admin) |
| ❌ Should fail to permanently delete conversation as regular user | FAILED | 0.44s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 0.93s | Should get all conversations (admin) |
| ❌ Should fail to get all conversations as regular user | FAILED | 0.53s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 0.98s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 1.88s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.94s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 0.91s | Super admin should access conversations across organizations |
| ❌ Should handle non-existent conversation ID | FAILED | 0.60s | Should handle non-existent conversation ID |
| ❌ Should handle unauthorized access | FAILED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.55s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2418.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "etag": "W/\"144-OBf4pY/35hu7uGRjDG82eWe2A58\"",
    "date": "Tue, 27 May 2025 23:15:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "91524b1d-0a92-4d67-bbd0-1dc417422985",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:15:07.351Z",
    "lastMessageAt": "2025-05-27T23:15:07.351Z",
    "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
    ]
  }
}
```

**⏱️ Duration:** 2418.0 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (578.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "date": "Tue, 27 May 2025 23:15:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 578.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (540.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "date": "Tue, 27 May 2025 23:15:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 540.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.13s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1132.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2",
      "7awVJTlK9PfyGzBJv2FWTKFms1v1"
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
    "etag": "W/\"168-G0l7sesW3ZLGHD0RC/pG6nnjg+U\"",
    "date": "Tue, 27 May 2025 23:15:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "71a63655-4290-4809-a80c-5be9e1c644c8",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-05-27T23:15:10.236Z",
    "lastMessageAt": "2025-05-27T23:15:10.236Z",
    "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2",
      "7awVJTlK9PfyGzBJv2FWTKFms1v1"
    ]
  }
}
```

**⏱️ Duration:** 1132.9 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ❌ FAILED  
**Duration:** 0.77s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected value: [32m"Ke1F63ICamXUQ2VLogEA07AJYkY2"[39m
Received array: [31m[{"email": "daniellovazzano@gmail.com", "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1", "name": "daniel"}, {"email": "conversations-regular-1748387700434@example.com", "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2", "name": "Regular User"}][39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/91524b1d-0a92-4d67-bbd0-1dc417422985 (762.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMSwidXNlcl9pZCI6IktlMUY2M0lDYW1YVVEyVkxvZ0VBMDdBSllrWTIiLCJzdWIiOiJLZTFGNjNJQ2FtWFVRMlZMb2dFQTA3QUpZa1kyIiwiaWF0IjoxNzQ4Mzg3NzAxLCJleHAiOjE3NDgzOTEzMDEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NTaIdpPcGpcjMBjbOGxk6XwQb_Am6__kGHKJc0Jj-Hj1JZydmzw03PasKrcyUVBl8AO8ErTrBOoe4ZO28bujWxn2QFDCO-qmvVVj3kyOjx0QtjlaQpjJPT7Wu0EKYylHzAMjaxEPIBBY0mpN37bPZeWVu5DgcAboEOP8lOiyhoGoEHGZotbsM26IfMEzdI4Kc7SEBc0ZbqRGcbYd4n2vcBHf2wm5OxlRA3XVRuJC85fFxDMyiAJhlWlmax86rk9eP-6M7fkMqRb_N3TCrnHRT7-sy2AVsIJOUikGyKRxR34PXr6WzyMaZvcL2G8WGcLM-GTqTmatMvVvtJxoUCeJnw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "content-length": "484",
    "etag": "W/\"1e4-sNsqtb+nfNZgpIWLOtxDm6hlUJ0\"",
    "date": "Tue, 27 May 2025 23:15:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "91524b1d-0a92-4d67-bbd0-1dc417422985",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:15:07.351Z",
    "lastMessageAt": "2025-05-27T23:15:07.351Z",
    "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
    "participants": [
      {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "name": "daniel"
      },
      {
        "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
        "email": "conversations-regular-1748387700434@example.com",
        "name": "Regular User"
      }
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 762.0 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (984.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "etag": "W/\"147-QkN6kFHAqHvz0xO18dGLp6XGpdQ\"",
    "date": "Tue, 27 May 2025 23:15:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3d7cd160-eb69-498d-857a-82d71631434e",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:15:12.185Z",
    "lastMessageAt": "2025-05-27T23:15:12.185Z",
    "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
    ]
  }
}
```

**⏱️ Duration:** 984.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/3d7cd160-eb69-498d-857a-82d71631434e (721.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMiwidXNlcl9pZCI6Ijdhd1ZKVGxLOVBmeUd6Qkp2MkZXVEtGbXMxdjEiLCJzdWIiOiI3YXdWSlRsSzlQZnlHekJKdjJGV1RLRm1zMXYxIiwiaWF0IjoxNzQ4Mzg3NzAyLCJleHAiOjE3NDgzOTEzMDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzcwMTc0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3NzAxNzQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.iQwUu0UfNNeaVgpZ7js1qxi_Ge61837fFm6behmbVbAqf5DAwNrpBwRph9NqwgF8qN7q5tJgBzx3vV3TbdkC5-BQoPL6lrXJbw_2H8VNLQL2nSrYkxA9OCO5fsvcq7utA-cZsQshZJYSnrJdlF_wkUWjQZoRBJyTwHLMF4Zn2Jqu2IO2vN3gZzYO-j49_XAngjZDn_e1c5N1a2lZ2Y5qlnAwOLChv_EMcCN5nHs6l20Y1RpEPtKY-FSl274P_UUAlWHDdISj5c4vzppTEBwfSGUtM35Rx6O7x4YbCYNwMQYdc7gqarY3B3NtF9x1kLHRx3ZjCc8a-znFBMhjArMB0Q",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "date": "Tue, 27 May 2025 23:15:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 721.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ❌ FAILED  
**Duration:** 0.95s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected value: [32m"Ke1F63ICamXUQ2VLogEA07AJYkY2"[39m
Received array: [31m[{"email": "daniellovazzano@gmail.com", "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1", "name": "daniel"}, {"email": "conversations-regular-1748387700434@example.com", "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2", "name": "Regular User"}][39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/Ke1F63ICamXUQ2VLogEA07AJYkY2 (952.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMSwidXNlcl9pZCI6IktlMUY2M0lDYW1YVVEyVkxvZ0VBMDdBSllrWTIiLCJzdWIiOiJLZTFGNjNJQ2FtWFVRMlZMb2dFQTA3QUpZa1kyIiwiaWF0IjoxNzQ4Mzg3NzAxLCJleHAiOjE3NDgzOTEzMDEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NTaIdpPcGpcjMBjbOGxk6XwQb_Am6__kGHKJc0Jj-Hj1JZydmzw03PasKrcyUVBl8AO8ErTrBOoe4ZO28bujWxn2QFDCO-qmvVVj3kyOjx0QtjlaQpjJPT7Wu0EKYylHzAMjaxEPIBBY0mpN37bPZeWVu5DgcAboEOP8lOiyhoGoEHGZotbsM26IfMEzdI4Kc7SEBc0ZbqRGcbYd4n2vcBHf2wm5OxlRA3XVRuJC85fFxDMyiAJhlWlmax86rk9eP-6M7fkMqRb_N3TCrnHRT7-sy2AVsIJOUikGyKRxR34PXr6WzyMaZvcL2G8WGcLM-GTqTmatMvVvtJxoUCeJnw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "content-length": "1586",
    "etag": "W/\"632-qN/tc30t9usWpMUArzJC6UIt+uc\"",
    "date": "Tue, 27 May 2025 23:15:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "3d7cd160-eb69-498d-857a-82d71631434e",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:15:12.185Z",
      "lastMessageAt": "2025-05-27T23:15:12.185Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "71a63655-4290-4809-a80c-5be9e1c644c8",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:15:10.236Z",
      "lastMessageAt": "2025-05-27T23:15:10.236Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        },
        {
          "id": "7awVJTlK9PfyGzBJv2FWTKFms1v1",
          "email": "conversations-moderator-1748387701747@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "91524b1d-0a92-4d67-bbd0-1dc417422985",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:15:07.351Z",
      "lastMessageAt": "2025-05-27T23:15:07.351Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 952.5 ms  

</details>


---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (756.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "date": "Tue, 27 May 2025 23:15:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 756.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 1.00s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/91524b1d-0a92-4d67-bbd0-1dc417422985/soft-delete (994.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMSwidXNlcl9pZCI6IktlMUY2M0lDYW1YVVEyVkxvZ0VBMDdBSllrWTIiLCJzdWIiOiJLZTFGNjNJQ2FtWFVRMlZMb2dFQTA3QUpZa1kyIiwiaWF0IjoxNzQ4Mzg3NzAxLCJleHAiOjE3NDgzOTEzMDEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NTaIdpPcGpcjMBjbOGxk6XwQb_Am6__kGHKJc0Jj-Hj1JZydmzw03PasKrcyUVBl8AO8ErTrBOoe4ZO28bujWxn2QFDCO-qmvVVj3kyOjx0QtjlaQpjJPT7Wu0EKYylHzAMjaxEPIBBY0mpN37bPZeWVu5DgcAboEOP8lOiyhoGoEHGZotbsM26IfMEzdI4Kc7SEBc0ZbqRGcbYd4n2vcBHf2wm5OxlRA3XVRuJC85fFxDMyiAJhlWlmax86rk9eP-6M7fkMqRb_N3TCrnHRT7-sy2AVsIJOUikGyKRxR34PXr6WzyMaZvcL2G8WGcLM-GTqTmatMvVvtJxoUCeJnw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "userId": "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "date": "Tue, 27 May 2025 23:15:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 994.0 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/91524b1d-0a92-4d67-bbd0-1dc417422985/hide (807.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMSwidXNlcl9pZCI6IktlMUY2M0lDYW1YVVEyVkxvZ0VBMDdBSllrWTIiLCJzdWIiOiJLZTFGNjNJQ2FtWFVRMlZMb2dFQTA3QUpZa1kyIiwiaWF0IjoxNzQ4Mzg3NzAxLCJleHAiOjE3NDgzOTEzMDEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NTaIdpPcGpcjMBjbOGxk6XwQb_Am6__kGHKJc0Jj-Hj1JZydmzw03PasKrcyUVBl8AO8ErTrBOoe4ZO28bujWxn2QFDCO-qmvVVj3kyOjx0QtjlaQpjJPT7Wu0EKYylHzAMjaxEPIBBY0mpN37bPZeWVu5DgcAboEOP8lOiyhoGoEHGZotbsM26IfMEzdI4Kc7SEBc0ZbqRGcbYd4n2vcBHf2wm5OxlRA3XVRuJC85fFxDMyiAJhlWlmax86rk9eP-6M7fkMqRb_N3TCrnHRT7-sy2AVsIJOUikGyKRxR34PXr6WzyMaZvcL2G8WGcLM-GTqTmatMvVvtJxoUCeJnw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "userId": "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "date": "Tue, 27 May 2025 23:15:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 807.3 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/91524b1d-0a92-4d67-bbd0-1dc417422985/unhide (818.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMSwidXNlcl9pZCI6IktlMUY2M0lDYW1YVVEyVkxvZ0VBMDdBSllrWTIiLCJzdWIiOiJLZTFGNjNJQ2FtWFVRMlZMb2dFQTA3QUpZa1kyIiwiaWF0IjoxNzQ4Mzg3NzAxLCJleHAiOjE3NDgzOTEzMDEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NTaIdpPcGpcjMBjbOGxk6XwQb_Am6__kGHKJc0Jj-Hj1JZydmzw03PasKrcyUVBl8AO8ErTrBOoe4ZO28bujWxn2QFDCO-qmvVVj3kyOjx0QtjlaQpjJPT7Wu0EKYylHzAMjaxEPIBBY0mpN37bPZeWVu5DgcAboEOP8lOiyhoGoEHGZotbsM26IfMEzdI4Kc7SEBc0ZbqRGcbYd4n2vcBHf2wm5OxlRA3XVRuJC85fFxDMyiAJhlWlmax86rk9eP-6M7fkMqRb_N3TCrnHRT7-sy2AVsIJOUikGyKRxR34PXr6WzyMaZvcL2G8WGcLM-GTqTmatMvVvtJxoUCeJnw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "userId": "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "date": "Tue, 27 May 2025 23:15:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 818.0 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/71a63655-4290-4809-a80c-5be9e1c644c8/block (770.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMiwidXNlcl9pZCI6Ijdhd1ZKVGxLOVBmeUd6Qkp2MkZXVEtGbXMxdjEiLCJzdWIiOiI3YXdWSlRsSzlQZnlHekJKdjJGV1RLRm1zMXYxIiwiaWF0IjoxNzQ4Mzg3NzAyLCJleHAiOjE3NDgzOTEzMDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzcwMTc0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3NzAxNzQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.iQwUu0UfNNeaVgpZ7js1qxi_Ge61837fFm6behmbVbAqf5DAwNrpBwRph9NqwgF8qN7q5tJgBzx3vV3TbdkC5-BQoPL6lrXJbw_2H8VNLQL2nSrYkxA9OCO5fsvcq7utA-cZsQshZJYSnrJdlF_wkUWjQZoRBJyTwHLMF4Zn2Jqu2IO2vN3gZzYO-j49_XAngjZDn_e1c5N1a2lZ2Y5qlnAwOLChv_EMcCN5nHs6l20Y1RpEPtKY-FSl274P_UUAlWHDdISj5c4vzppTEBwfSGUtM35Rx6O7x4YbCYNwMQYdc7gqarY3B3NtF9x1kLHRx3ZjCc8a-znFBMhjArMB0Q",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "userId": "7awVJTlK9PfyGzBJv2FWTKFms1v1"
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
    "date": "Tue, 27 May 2025 23:15:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 770.2 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/71a63655-4290-4809-a80c-5be9e1c644c8/unblock (862.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMiwidXNlcl9pZCI6Ijdhd1ZKVGxLOVBmeUd6Qkp2MkZXVEtGbXMxdjEiLCJzdWIiOiI3YXdWSlRsSzlQZnlHekJKdjJGV1RLRm1zMXYxIiwiaWF0IjoxNzQ4Mzg3NzAyLCJleHAiOjE3NDgzOTEzMDIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzcwMTc0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3NzAxNzQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.iQwUu0UfNNeaVgpZ7js1qxi_Ge61837fFm6behmbVbAqf5DAwNrpBwRph9NqwgF8qN7q5tJgBzx3vV3TbdkC5-BQoPL6lrXJbw_2H8VNLQL2nSrYkxA9OCO5fsvcq7utA-cZsQshZJYSnrJdlF_wkUWjQZoRBJyTwHLMF4Zn2Jqu2IO2vN3gZzYO-j49_XAngjZDn_e1c5N1a2lZ2Y5qlnAwOLChv_EMcCN5nHs6l20Y1RpEPtKY-FSl274P_UUAlWHDdISj5c4vzppTEBwfSGUtM35Rx6O7x4YbCYNwMQYdc7gqarY3B3NtF9x1kLHRx3ZjCc8a-znFBMhjArMB0Q",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "userId": "7awVJTlK9PfyGzBJv2FWTKFms1v1"
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
    "date": "Tue, 27 May 2025 23:15:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 862.5 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.50s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Insufficient permissions"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/91524b1d-0a92-4d67-bbd0-1dc417422985/block (498.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMSwidXNlcl9pZCI6IktlMUY2M0lDYW1YVVEyVkxvZ0VBMDdBSllrWTIiLCJzdWIiOiJLZTFGNjNJQ2FtWFVRMlZMb2dFQTA3QUpZa1kyIiwiaWF0IjoxNzQ4Mzg3NzAxLCJleHAiOjE3NDgzOTEzMDEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NTaIdpPcGpcjMBjbOGxk6XwQb_Am6__kGHKJc0Jj-Hj1JZydmzw03PasKrcyUVBl8AO8ErTrBOoe4ZO28bujWxn2QFDCO-qmvVVj3kyOjx0QtjlaQpjJPT7Wu0EKYylHzAMjaxEPIBBY0mpN37bPZeWVu5DgcAboEOP8lOiyhoGoEHGZotbsM26IfMEzdI4Kc7SEBc0ZbqRGcbYd4n2vcBHf2wm5OxlRA3XVRuJC85fFxDMyiAJhlWlmax86rk9eP-6M7fkMqRb_N3TCrnHRT7-sy2AVsIJOUikGyKRxR34PXr6WzyMaZvcL2G8WGcLM-GTqTmatMvVvtJxoUCeJnw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "userId": "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "date": "Tue, 27 May 2025 23:15:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 498.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1019.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "etag": "W/\"149-TKPN68ixux5eYgN3FldAErx+fyo\"",
    "date": "Tue, 27 May 2025 23:15:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "e4f24dac-98eb-4313-b3a8-e598d8afbc76",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:15:50.384Z",
    "lastMessageAt": "2025-05-27T23:15:50.384Z",
    "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
    ]
  }
}
```

**⏱️ Duration:** 1019.8 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/e4f24dac-98eb-4313-b3a8-e598d8afbc76 (741.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "date": "Tue, 27 May 2025 23:15:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 741.9 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.44s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Insufficient permissions"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/91524b1d-0a92-4d67-bbd0-1dc417422985 (442.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMSwidXNlcl9pZCI6IktlMUY2M0lDYW1YVVEyVkxvZ0VBMDdBSllrWTIiLCJzdWIiOiJLZTFGNjNJQ2FtWFVRMlZMb2dFQTA3QUpZa1kyIiwiaWF0IjoxNzQ4Mzg3NzAxLCJleHAiOjE3NDgzOTEzMDEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NTaIdpPcGpcjMBjbOGxk6XwQb_Am6__kGHKJc0Jj-Hj1JZydmzw03PasKrcyUVBl8AO8ErTrBOoe4ZO28bujWxn2QFDCO-qmvVVj3kyOjx0QtjlaQpjJPT7Wu0EKYylHzAMjaxEPIBBY0mpN37bPZeWVu5DgcAboEOP8lOiyhoGoEHGZotbsM26IfMEzdI4Kc7SEBc0ZbqRGcbYd4n2vcBHf2wm5OxlRA3XVRuJC85fFxDMyiAJhlWlmax86rk9eP-6M7fkMqRb_N3TCrnHRT7-sy2AVsIJOUikGyKRxR34PXr6WzyMaZvcL2G8WGcLM-GTqTmatMvVvtJxoUCeJnw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "date": "Tue, 27 May 2025 23:15:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 442.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (931.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "content-length": "4278",
    "etag": "W/\"10b6-Lixsdz0kgu3LJ4MXVR4YkEhktxk\"",
    "date": "Tue, 27 May 2025 23:15:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "3d7cd160-eb69-498d-857a-82d71631434e",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:15:12.185Z",
      "lastMessageAt": "2025-05-27T23:15:12.185Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "71a63655-4290-4809-a80c-5be9e1c644c8",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:15:10.236Z",
      "lastMessageAt": "2025-05-27T23:15:10.236Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        },
        {
          "id": "7awVJTlK9PfyGzBJv2FWTKFms1v1",
          "email": "conversations-moderator-1748387701747@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "91524b1d-0a92-4d67-bbd0-1dc417422985",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:15:07.351Z",
      "lastMessageAt": "2025-05-27T23:15:07.351Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
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

**⏱️ Duration:** 931.2 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ❌ FAILED  
**Duration:** 0.53s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Insufficient permissions"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (530.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzcwMSwidXNlcl9pZCI6IktlMUY2M0lDYW1YVVEyVkxvZ0VBMDdBSllrWTIiLCJzdWIiOiJLZTFGNjNJQ2FtWFVRMlZMb2dFQTA3QUpZa1kyIiwiaWF0IjoxNzQ4Mzg3NzAxLCJleHAiOjE3NDgzOTEzMDEsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc3MDA0MzRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NTaIdpPcGpcjMBjbOGxk6XwQb_Am6__kGHKJc0Jj-Hj1JZydmzw03PasKrcyUVBl8AO8ErTrBOoe4ZO28bujWxn2QFDCO-qmvVVj3kyOjx0QtjlaQpjJPT7Wu0EKYylHzAMjaxEPIBBY0mpN37bPZeWVu5DgcAboEOP8lOiyhoGoEHGZotbsM26IfMEzdI4Kc7SEBc0ZbqRGcbYd4n2vcBHf2wm5OxlRA3XVRuJC85fFxDMyiAJhlWlmax86rk9eP-6M7fkMqRb_N3TCrnHRT7-sy2AVsIJOUikGyKRxR34PXr6WzyMaZvcL2G8WGcLM-GTqTmatMvVvtJxoUCeJnw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "date": "Tue, 27 May 2025 23:15:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 530.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.98s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (983.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "819813df-346c-434e-b4cc-6b0cd6e95ce4"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "etag": "W/\"14c-YPKusRKYwZ8f3XG9lyo6RYvk8bo\"",
    "date": "Tue, 27 May 2025 23:15:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "e9b190f1-f975-487c-922a-c76b75b6de89",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:15:54.060Z",
    "lastMessageAt": "2025-05-27T23:15:54.060Z",
    "organizationId": "819813df-346c-434e-b4cc-6b0cd6e95ce4",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
    ]
  }
}
```

**⏱️ Duration:** 983.8 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 1.88s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1048.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
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
    "etag": "W/\"144-TDwE6gJ40feR1FPjJOBqLECI4WY\"",
    "date": "Tue, 27 May 2025 23:15:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "31c4c99b-2a7b-442d-8f8e-9065fe5438f2",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:15:55.088Z",
    "lastMessageAt": "2025-05-27T23:15:55.088Z",
    "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "Ke1F63ICamXUQ2VLogEA07AJYkY2"
    ]
  }
}
```

**⏱️ Duration:** 1048.2 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/31c4c99b-2a7b-442d-8f8e-9065fe5438f2 (827.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "819813df-346c-434e-b4cc-6b0cd6e95ce4"
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
    "content-length": "484",
    "etag": "W/\"1e4-cMFyw9mbC5r719iMuVnZYGmfvIM\"",
    "date": "Tue, 27 May 2025 23:15:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "31c4c99b-2a7b-442d-8f8e-9065fe5438f2",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:15:55.088Z",
    "lastMessageAt": "2025-05-27T23:15:55.088Z",
    "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
    "participants": [
      {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "name": "daniel"
      },
      {
        "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
        "email": "conversations-regular-1748387700434@example.com",
        "name": "Regular User"
      }
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 827.9 ms  

</details>


---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (938.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "content-length": "2071",
    "etag": "W/\"817-izP/3Tkqede/PIEJSjzmGPqPYFM\"",
    "date": "Tue, 27 May 2025 23:15:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "31c4c99b-2a7b-442d-8f8e-9065fe5438f2",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:15:55.088Z",
      "lastMessageAt": "2025-05-27T23:15:55.088Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
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
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "71a63655-4290-4809-a80c-5be9e1c644c8",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:15:10.236Z",
      "lastMessageAt": "2025-05-27T23:15:10.236Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        },
        {
          "id": "7awVJTlK9PfyGzBJv2FWTKFms1v1",
          "email": "conversations-moderator-1748387701747@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "91524b1d-0a92-4d67-bbd0-1dc417422985",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:15:07.351Z",
      "lastMessageAt": "2025-05-27T23:15:07.351Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 938.4 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 0.91s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (912.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw"
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
    "content-length": "5256",
    "etag": "W/\"1488-OVJ8q+Lc6/0PCtn7C0SRXjHt0rk\"",
    "date": "Tue, 27 May 2025 23:15:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "31c4c99b-2a7b-442d-8f8e-9065fe5438f2",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:15:55.088Z",
      "lastMessageAt": "2025-05-27T23:15:55.088Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
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
      "organizationId": "819813df-346c-434e-b4cc-6b0cd6e95ce4",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
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
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "71a63655-4290-4809-a80c-5be9e1c644c8",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:15:10.236Z",
      "lastMessageAt": "2025-05-27T23:15:10.236Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
        },
        {
          "id": "7awVJTlK9PfyGzBJv2FWTKFms1v1",
          "email": "conversations-moderator-1748387701747@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "91524b1d-0a92-4d67-bbd0-1dc417422985",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:15:07.351Z",
      "lastMessageAt": "2025-05-27T23:15:07.351Z",
      "organizationId": "673c437c-2b80-496e-92e3-58c71aaebba8",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "Ke1F63ICamXUQ2VLogEA07AJYkY2",
          "email": "conversations-regular-1748387700434@example.com",
          "name": "Regular User"
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

**⏱️ Duration:** 912.6 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.60s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m404[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (600.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "content-length": "76",
    "etag": "W/\"4c-OwmjeQuuypf+NLiUboJx50KAIA4\"",
    "date": "Tue, 27 May 2025 23:15:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "Conversation not found"
  }
}
```

**⏱️ Duration:** 600.5 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should handle unauthorized access
**Status:** ❌ FAILED  
**Duration:** 0.01s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"No token provided"[39m
Received string:    [31m"Token no proporcionado"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/91524b1d-0a92-4d67-bbd0-1dc417422985 (8.3ms)</summary>

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
    "date": "Tue, 27 May 2025 23:15:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 8.3 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (547.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw",
    "X-Organization-Id": "673c437c-2b80-496e-92e3-58c71aaebba8"
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
    "date": "Tue, 27 May 2025 23:15:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 547.9 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/91524b1d-0a92-4d67-bbd0-1dc417422985 (568.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw"
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
    "date": "Tue, 27 May 2025 23:15:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 568.0 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/71a63655-4290-4809-a80c-5be9e1c644c8 (686.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw"
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
    "date": "Tue, 27 May 2025 23:16:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 686.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/673c437c-2b80-496e-92e3-58c71aaebba8 (1326.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw"
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
    "date": "Tue, 27 May 2025 23:16:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1326.4 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/819813df-346c-434e-b4cc-6b0cd6e95ce4 (1029.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3Njk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2OTcsImV4cCI6MTc0ODM5MTI5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VyXGPfxmYbccoCoyH0tZ1zLsrAUVF8jkVGBi605Ilnx8nEj6jyeWBFeVSby9s-HSZO4xuRGcdXS5fJYva0dMP0OUdrfQJ_dPiz8FsadrVukfRl7jwqWtTrFTWl-YhAZycuWPp9alwSnLM4CF-H_HKNxdFGOy9_kJMqsMuo_HJCwI4qy6QgHZavbNC9qRr26_SxZj3aL7EFAx-o5jKIOGE6HT4q9BF_S-cB__b2BTvhccC-t5x0IzMQG6RvG4T-R985GZRYH-e8R7y9LCtyi9RT7OtNZ5Act5Tds9k_TZka7QBPR02hdJZwjJHHRV976h1CRIjMkkQR6hBDBpAvDhGw"
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
    "date": "Tue, 27 May 2025 23:16:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1029.3 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (334.9ms)</summary>

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
    "etag": "W/\"640-syiGB+zKf/Gm5fO75qaoL0JbOik\"",
    "date": "Tue, 27 May 2025 23:16:03 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc3NjMsImV4cCI6MTc0ODM5MTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gFdCy7QaFmeoYbf0UAdL9rEaQR58Xgquf_m8JdE3fqL1uIIYA1Sk220T9sBlnYsmWGPfDY8rw5_A32EaUm9RGQk7JU0WOGYvqkAlijXeOxebO1fHbCDdKs2jHHu_Ux7Yz_rPLuEThdJsQUAkCbtdHFb6YqyNDiuwUuydJFNlwkqbERyGA6xSQ4HjlbTEsdkp5Igklou2ZNG1DL1z_rlDWPus5r-UJXaxDA-yK5Fa_oVJK1tVjXHneGp8mNc7JQU2kfgk0Z-iSkUq0k1X3yzF3iKoqoDBVasOMPPAs-CoU_xciXXYHvgEopqi4uACJYc4f-9sDUTDwr2QqTUZg0hsSA",
      "refreshToken": "AMf-vBw-FEfqLWZ8lDeFfHL-LOAo8fDkHaY_CWGmc0JocFTQkWabTPwrOJ6YjgDqMT7Ja2mPHjKF-d2xbULgvu_0Ta38iOGHNGYPJzS8wQq0ohcq2aWg5WS2gkIu05HdtALI0gE9ovPZlix4YnFjSMMk-HVnBxLRp5TrO1c_B6thrNZtbgs-8TfgNPhh1B_umwJZ6EEAbINUB_vHh8-d-W0eMQNQmljb_5bqX5t3g5yNSbqDPOjpgiLhdWVvcO8jB52iUykWLFet",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 334.9 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/Ke1F63ICamXUQ2VLogEA07AJYkY2 (1511.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc3NjMsImV4cCI6MTc0ODM5MTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gFdCy7QaFmeoYbf0UAdL9rEaQR58Xgquf_m8JdE3fqL1uIIYA1Sk220T9sBlnYsmWGPfDY8rw5_A32EaUm9RGQk7JU0WOGYvqkAlijXeOxebO1fHbCDdKs2jHHu_Ux7Yz_rPLuEThdJsQUAkCbtdHFb6YqyNDiuwUuydJFNlwkqbERyGA6xSQ4HjlbTEsdkp5Igklou2ZNG1DL1z_rlDWPus5r-UJXaxDA-yK5Fa_oVJK1tVjXHneGp8mNc7JQU2kfgk0Z-iSkUq0k1X3yzF3iKoqoDBVasOMPPAs-CoU_xciXXYHvgEopqi4uACJYc4f-9sDUTDwr2QqTUZg0hsSA"
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
    "date": "Tue, 27 May 2025 23:16:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1511.9 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (285.0ms)</summary>

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
    "etag": "W/\"640-Y3h/ZWdXZ4NHil3T7s6B3eakd5U\"",
    "date": "Tue, 27 May 2025 23:16:05 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NzY1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc3NjUsImV4cCI6MTc0ODM5MTM2NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kXKWKxNz1KBG4qn3drf1h7c4eWlXCOIVHnnSHch-Kr_zip4QjpKCV0T43kOScapb_GQuJowJvot85Vf3Tx4kdTxmN7MqUQrgmNdVWGMi0BsIaI4O2caHCCgBOHlf-0qXayVa_k1V9cKjBlgZ_RxzqX-o6kDI6Db82M3wKUOT4lL7nkK_92vVBTVj1v9q_5IeqDcKUjbZkRWhOIx8UO4F3JFG87bcz9hyW8iiTmXPwlO0GdzlCrjFpkljSZRzASbAFjM12-7vE8x-EbROXJ-ipb1V3KNYuu3BWkpO-VuuEbK8GXwZlslCSoZk5CqoKPtZCo9ZTaaTrlpioSieyDEmUg",
      "refreshToken": "AMf-vBwtB9lWwuvMbF_j6G6KbH-n9aF4hjbIzkj5YHEtfh3wm5kaYnr9ebM3mRae7SSblH4vkOFmhMVRulCnGHHiXi3cQclQKlebpr9fj8Kqvoro7I4hSAneAvrNHIfbC695FR04DykkqFncpiIjuICdKz3a8DNQ9PYpMxBIap6jj5VXLZNsfHdq5deMXoIa4p5PQ6l4_bIdpP8WMc4BzxyY0U79XOBME0sqTwdoJ8SS0LKwV5-hT1Pv1kA-CwGYbzd1-PQ6jDku",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 285.0 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/7awVJTlK9PfyGzBJv2FWTKFms1v1 (1253.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NzY1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc3NjUsImV4cCI6MTc0ODM5MTM2NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kXKWKxNz1KBG4qn3drf1h7c4eWlXCOIVHnnSHch-Kr_zip4QjpKCV0T43kOScapb_GQuJowJvot85Vf3Tx4kdTxmN7MqUQrgmNdVWGMi0BsIaI4O2caHCCgBOHlf-0qXayVa_k1V9cKjBlgZ_RxzqX-o6kDI6Db82M3wKUOT4lL7nkK_92vVBTVj1v9q_5IeqDcKUjbZkRWhOIx8UO4F3JFG87bcz9hyW8iiTmXPwlO0GdzlCrjFpkljSZRzASbAFjM12-7vE8x-EbROXJ-ipb1V3KNYuu3BWkpO-VuuEbK8GXwZlslCSoZk5CqoKPtZCo9ZTaaTrlpioSieyDEmUg"
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
    "date": "Tue, 27 May 2025 23:16:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1253.4 ms  

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
