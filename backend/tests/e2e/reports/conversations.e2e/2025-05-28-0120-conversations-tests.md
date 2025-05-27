# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:20:52 AM  
**Duration:** 71.26s  
**Tests:** 25 total, 22 passed, 3 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 2.34s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.69s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.53s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.14s | Should create group conversation with multiple participants |
| ✅ Should get conversation by ID for participant | PASSED | 0.90s | Should get conversation by ID for participant |
| ❌ Should fail to get conversation by ID for non-participant | FAILED | 1.72s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 0.95s | Should get conversations for user |
| ✅ Should get conversation with invalid ID format | PASSED | 0.73s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 0.87s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 0.83s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.94s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.90s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 0.82s | Should unblock conversation (moderator) |
| ✅ Should fail to block conversation as regular user | PASSED | 0.46s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.82s | Should permanently delete conversation (admin) |
| ✅ Should fail to permanently delete conversation as regular user | PASSED | 0.66s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 1.06s | Should get all conversations (admin) |
| ✅ Should fail to get all conversations as regular user | PASSED | 0.45s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 1.02s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 1.81s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 1.13s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 1.01s | Super admin should access conversations across organizations |
| ❌ Should handle non-existent conversation ID | FAILED | 0.65s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.64s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.34s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2332.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "etag": "W/\"144-hNh8Ghpeub95Av2Owky+0WlWPsc\"",
    "date": "Tue, 27 May 2025 23:19:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a899e80c-dd5d-48b5-a4cd-07790c771662",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:19:51.706Z",
    "lastMessageAt": "2025-05-27T23:19:51.706Z",
    "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
    ]
  }
}
```

**⏱️ Duration:** 2332.3 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (685.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:19:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 685.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (530.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:19:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 530.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.14s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1140.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3",
      "YZTmTbmD2RYWq7MDm0SHU2PbEpH2"
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
    "etag": "W/\"168-VSqVK6L5rd4JchzOXdD3UGHy+hg\"",
    "date": "Tue, 27 May 2025 23:19:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "daca035a-4f1f-41b5-a67d-c601df5575a4",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-05-27T23:19:54.712Z",
    "lastMessageAt": "2025-05-27T23:19:54.712Z",
    "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3",
      "YZTmTbmD2RYWq7MDm0SHU2PbEpH2"
    ]
  }
}
```

**⏱️ Duration:** 1140.2 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/a899e80c-dd5d-48b5-a4cd-07790c771662 (894.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NSwidXNlcl9pZCI6Inl0OWZPajFIbmtjdWNlZG00UGVNZjg4QUk2QTMiLCJzdWIiOiJ5dDlmT2oxSG5rY3VjZWRtNFBlTWY4OEFJNkEzIiwiaWF0IjoxNzQ4Mzg3OTg1LCJleHAiOjE3NDgzOTE1ODUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWWslHNMAwv_kPOhCF97B-tpDTANYv5jlpivMIH1bax7NWq4LsCJaAUjbfsA6rJf_X31dfdlWhqn5345vLiQsUBdHA8XNqhdDv5amTLH95BWWSXdOZQhJGW18tKPin_LJbRnA8PD1o_f2r1aQGmIfW0ZJvfFJXNXogGPYhqdBY0evGdi-3r4ARGD-h99zDFKcYie14x81764HoavpETmqi-X8jHZjqsBG1bu6UoWcoWfE6hfRTwD6tzQ2QVD_44lKbvpXVDkhQTxKKso54EypzKCpa9mKupdw4_QE-YbynQib6Z9nNGpd1BRpH6aN0FbE2crlYNBc0JZuR9uyvX2hw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "etag": "W/\"152-w20fSZ80/gwXAXoV4gChcv1FPiU\"",
    "date": "Tue, 27 May 2025 23:19:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a899e80c-dd5d-48b5-a4cd-07790c771662",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:19:51.706Z",
    "lastMessageAt": "2025-05-27T23:19:51.706Z",
    "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 894.0 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ❌ FAILED  
**Duration:** 1.72s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Permission denied"[39m
Received string:    [31m"Forbidden: You must be a participant to view this conversation"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (993.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "etag": "W/\"147-UKM7JKzJH3FrnV7grHWqWnqYSK0\"",
    "date": "Tue, 27 May 2025 23:19:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c4111617-c5a4-4810-8cea-2815f292699e",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:19:56.779Z",
    "lastMessageAt": "2025-05-27T23:19:56.779Z",
    "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
    ]
  }
}
```

**⏱️ Duration:** 993.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/c4111617-c5a4-4810-8cea-2815f292699e (726.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NywidXNlcl9pZCI6IllaVG1UYm1EMlJZV3E3TURtMFNIVTJQYkVwSDIiLCJzdWIiOiJZWlRtVGJtRDJSWVdxN01EbTBTSFUyUGJFcEgyIiwiaWF0IjoxNzQ4Mzg3OTg3LCJleHAiOjE3NDgzOTE1ODcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4Nzk4NTk3MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3OTg1OTcyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.g0HEJI4bryCUGud3qlzvKMcdM8b95N_si3uX1oP8JSR6LUyAs3WXpzafpS33De_MeJpfoIaFjOYvgS17FeQAmHqaLrGjniwfquuWaYik-JgOpUUa76yu3e-X5X_5Csm19V7YRSwfPgWRhnHkHbeWrI-FDdsPQD7Nc8Kp3Q3HjvEfJS5K-uN62c6cJNM2tPwocF7F2fQYhPyLJ2AUF5TGIx_OvsOz97llZuq8cumQCUNyWh-WWy5vH4p-263CsSvCg0MuR-mQFNujToVQanaewVkm6nI_y_mqlPntwsFQcSFpjmSRW4utipUz_Qde1eVUjs21e7CyBukQPVKuQWS4Aw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:19:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 726.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/yt9fOj1Hnkcucedm4PeMf88AI6A3 (949.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NSwidXNlcl9pZCI6Inl0OWZPajFIbmtjdWNlZG00UGVNZjg4QUk2QTMiLCJzdWIiOiJ5dDlmT2oxSG5rY3VjZWRtNFBlTWY4OEFJNkEzIiwiaWF0IjoxNzQ4Mzg3OTg1LCJleHAiOjE3NDgzOTE1ODUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWWslHNMAwv_kPOhCF97B-tpDTANYv5jlpivMIH1bax7NWq4LsCJaAUjbfsA6rJf_X31dfdlWhqn5345vLiQsUBdHA8XNqhdDv5amTLH95BWWSXdOZQhJGW18tKPin_LJbRnA8PD1o_f2r1aQGmIfW0ZJvfFJXNXogGPYhqdBY0evGdi-3r4ARGD-h99zDFKcYie14x81764HoavpETmqi-X8jHZjqsBG1bu6UoWcoWfE6hfRTwD6tzQ2QVD_44lKbvpXVDkhQTxKKso54EypzKCpa9mKupdw4_QE-YbynQib6Z9nNGpd1BRpH6aN0FbE2crlYNBc0JZuR9uyvX2hw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "etag": "W/\"421-XqL5vzX5eMmZKbun9nLE2Muz7LE\"",
    "date": "Tue, 27 May 2025 23:19:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "c4111617-c5a4-4810-8cea-2815f292699e",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:19:56.779Z",
      "lastMessageAt": "2025-05-27T23:19:56.779Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
      ],
      "messages": []
    },
    {
      "id": "daca035a-4f1f-41b5-a67d-c601df5575a4",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:19:54.712Z",
      "lastMessageAt": "2025-05-27T23:19:54.712Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3",
        "YZTmTbmD2RYWq7MDm0SHU2PbEpH2"
      ],
      "messages": []
    },
    {
      "id": "a899e80c-dd5d-48b5-a4cd-07790c771662",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:19:51.706Z",
      "lastMessageAt": "2025-05-27T23:19:51.706Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 949.9 ms  

</details>


---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (728.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:20:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 728.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/a899e80c-dd5d-48b5-a4cd-07790c771662/soft-delete (871.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NSwidXNlcl9pZCI6Inl0OWZPajFIbmtjdWNlZG00UGVNZjg4QUk2QTMiLCJzdWIiOiJ5dDlmT2oxSG5rY3VjZWRtNFBlTWY4OEFJNkEzIiwiaWF0IjoxNzQ4Mzg3OTg1LCJleHAiOjE3NDgzOTE1ODUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWWslHNMAwv_kPOhCF97B-tpDTANYv5jlpivMIH1bax7NWq4LsCJaAUjbfsA6rJf_X31dfdlWhqn5345vLiQsUBdHA8XNqhdDv5amTLH95BWWSXdOZQhJGW18tKPin_LJbRnA8PD1o_f2r1aQGmIfW0ZJvfFJXNXogGPYhqdBY0evGdi-3r4ARGD-h99zDFKcYie14x81764HoavpETmqi-X8jHZjqsBG1bu6UoWcoWfE6hfRTwD6tzQ2QVD_44lKbvpXVDkhQTxKKso54EypzKCpa9mKupdw4_QE-YbynQib6Z9nNGpd1BRpH6aN0FbE2crlYNBc0JZuR9uyvX2hw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "userId": "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "date": "Tue, 27 May 2025 23:20:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 871.1 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/a899e80c-dd5d-48b5-a4cd-07790c771662/hide (832.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NSwidXNlcl9pZCI6Inl0OWZPajFIbmtjdWNlZG00UGVNZjg4QUk2QTMiLCJzdWIiOiJ5dDlmT2oxSG5rY3VjZWRtNFBlTWY4OEFJNkEzIiwiaWF0IjoxNzQ4Mzg3OTg1LCJleHAiOjE3NDgzOTE1ODUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWWslHNMAwv_kPOhCF97B-tpDTANYv5jlpivMIH1bax7NWq4LsCJaAUjbfsA6rJf_X31dfdlWhqn5345vLiQsUBdHA8XNqhdDv5amTLH95BWWSXdOZQhJGW18tKPin_LJbRnA8PD1o_f2r1aQGmIfW0ZJvfFJXNXogGPYhqdBY0evGdi-3r4ARGD-h99zDFKcYie14x81764HoavpETmqi-X8jHZjqsBG1bu6UoWcoWfE6hfRTwD6tzQ2QVD_44lKbvpXVDkhQTxKKso54EypzKCpa9mKupdw4_QE-YbynQib6Z9nNGpd1BRpH6aN0FbE2crlYNBc0JZuR9uyvX2hw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "userId": "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "date": "Tue, 27 May 2025 23:20:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 832.8 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/a899e80c-dd5d-48b5-a4cd-07790c771662/unhide (944.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NSwidXNlcl9pZCI6Inl0OWZPajFIbmtjdWNlZG00UGVNZjg4QUk2QTMiLCJzdWIiOiJ5dDlmT2oxSG5rY3VjZWRtNFBlTWY4OEFJNkEzIiwiaWF0IjoxNzQ4Mzg3OTg1LCJleHAiOjE3NDgzOTE1ODUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWWslHNMAwv_kPOhCF97B-tpDTANYv5jlpivMIH1bax7NWq4LsCJaAUjbfsA6rJf_X31dfdlWhqn5345vLiQsUBdHA8XNqhdDv5amTLH95BWWSXdOZQhJGW18tKPin_LJbRnA8PD1o_f2r1aQGmIfW0ZJvfFJXNXogGPYhqdBY0evGdi-3r4ARGD-h99zDFKcYie14x81764HoavpETmqi-X8jHZjqsBG1bu6UoWcoWfE6hfRTwD6tzQ2QVD_44lKbvpXVDkhQTxKKso54EypzKCpa9mKupdw4_QE-YbynQib6Z9nNGpd1BRpH6aN0FbE2crlYNBc0JZuR9uyvX2hw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "userId": "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "date": "Tue, 27 May 2025 23:20:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 944.6 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/daca035a-4f1f-41b5-a67d-c601df5575a4/block (897.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NywidXNlcl9pZCI6IllaVG1UYm1EMlJZV3E3TURtMFNIVTJQYkVwSDIiLCJzdWIiOiJZWlRtVGJtRDJSWVdxN01EbTBTSFUyUGJFcEgyIiwiaWF0IjoxNzQ4Mzg3OTg3LCJleHAiOjE3NDgzOTE1ODcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4Nzk4NTk3MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3OTg1OTcyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.g0HEJI4bryCUGud3qlzvKMcdM8b95N_si3uX1oP8JSR6LUyAs3WXpzafpS33De_MeJpfoIaFjOYvgS17FeQAmHqaLrGjniwfquuWaYik-JgOpUUa76yu3e-X5X_5Csm19V7YRSwfPgWRhnHkHbeWrI-FDdsPQD7Nc8Kp3Q3HjvEfJS5K-uN62c6cJNM2tPwocF7F2fQYhPyLJ2AUF5TGIx_OvsOz97llZuq8cumQCUNyWh-WWy5vH4p-263CsSvCg0MuR-mQFNujToVQanaewVkm6nI_y_mqlPntwsFQcSFpjmSRW4utipUz_Qde1eVUjs21e7CyBukQPVKuQWS4Aw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "userId": "YZTmTbmD2RYWq7MDm0SHU2PbEpH2"
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
    "date": "Tue, 27 May 2025 23:20:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 897.6 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/daca035a-4f1f-41b5-a67d-c601df5575a4/unblock (819.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NywidXNlcl9pZCI6IllaVG1UYm1EMlJZV3E3TURtMFNIVTJQYkVwSDIiLCJzdWIiOiJZWlRtVGJtRDJSWVdxN01EbTBTSFUyUGJFcEgyIiwiaWF0IjoxNzQ4Mzg3OTg3LCJleHAiOjE3NDgzOTE1ODcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4Nzk4NTk3MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3OTg1OTcyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.g0HEJI4bryCUGud3qlzvKMcdM8b95N_si3uX1oP8JSR6LUyAs3WXpzafpS33De_MeJpfoIaFjOYvgS17FeQAmHqaLrGjniwfquuWaYik-JgOpUUa76yu3e-X5X_5Csm19V7YRSwfPgWRhnHkHbeWrI-FDdsPQD7Nc8Kp3Q3HjvEfJS5K-uN62c6cJNM2tPwocF7F2fQYhPyLJ2AUF5TGIx_OvsOz97llZuq8cumQCUNyWh-WWy5vH4p-263CsSvCg0MuR-mQFNujToVQanaewVkm6nI_y_mqlPntwsFQcSFpjmSRW4utipUz_Qde1eVUjs21e7CyBukQPVKuQWS4Aw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "userId": "YZTmTbmD2RYWq7MDm0SHU2PbEpH2"
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
    "date": "Tue, 27 May 2025 23:20:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 819.9 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/a899e80c-dd5d-48b5-a4cd-07790c771662/block (464.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NSwidXNlcl9pZCI6Inl0OWZPajFIbmtjdWNlZG00UGVNZjg4QUk2QTMiLCJzdWIiOiJ5dDlmT2oxSG5rY3VjZWRtNFBlTWY4OEFJNkEzIiwiaWF0IjoxNzQ4Mzg3OTg1LCJleHAiOjE3NDgzOTE1ODUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWWslHNMAwv_kPOhCF97B-tpDTANYv5jlpivMIH1bax7NWq4LsCJaAUjbfsA6rJf_X31dfdlWhqn5345vLiQsUBdHA8XNqhdDv5amTLH95BWWSXdOZQhJGW18tKPin_LJbRnA8PD1o_f2r1aQGmIfW0ZJvfFJXNXogGPYhqdBY0evGdi-3r4ARGD-h99zDFKcYie14x81764HoavpETmqi-X8jHZjqsBG1bu6UoWcoWfE6hfRTwD6tzQ2QVD_44lKbvpXVDkhQTxKKso54EypzKCpa9mKupdw4_QE-YbynQib6Z9nNGpd1BRpH6aN0FbE2crlYNBc0JZuR9uyvX2hw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "userId": "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "date": "Tue, 27 May 2025 23:20:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 464.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1030.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "etag": "W/\"149-PIzlAwzmmSzsFKuUfLzAL4+V1Rg\"",
    "date": "Tue, 27 May 2025 23:20:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8aff6a02-c5a1-48c2-aa49-05250945285f",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:20:35.069Z",
    "lastMessageAt": "2025-05-27T23:20:35.069Z",
    "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
    ]
  }
}
```

**⏱️ Duration:** 1030.1 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/8aff6a02-c5a1-48c2-aa49-05250945285f (792.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:20:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 792.7 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/a899e80c-dd5d-48b5-a4cd-07790c771662 (655.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NSwidXNlcl9pZCI6Inl0OWZPajFIbmtjdWNlZG00UGVNZjg4QUk2QTMiLCJzdWIiOiJ5dDlmT2oxSG5rY3VjZWRtNFBlTWY4OEFJNkEzIiwiaWF0IjoxNzQ4Mzg3OTg1LCJleHAiOjE3NDgzOTE1ODUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWWslHNMAwv_kPOhCF97B-tpDTANYv5jlpivMIH1bax7NWq4LsCJaAUjbfsA6rJf_X31dfdlWhqn5345vLiQsUBdHA8XNqhdDv5amTLH95BWWSXdOZQhJGW18tKPin_LJbRnA8PD1o_f2r1aQGmIfW0ZJvfFJXNXogGPYhqdBY0evGdi-3r4ARGD-h99zDFKcYie14x81764HoavpETmqi-X8jHZjqsBG1bu6UoWcoWfE6hfRTwD6tzQ2QVD_44lKbvpXVDkhQTxKKso54EypzKCpa9mKupdw4_QE-YbynQib6Z9nNGpd1BRpH6aN0FbE2crlYNBc0JZuR9uyvX2hw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:20:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 655.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.06s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (1064.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "content-length": "6298",
    "etag": "W/\"189a-ia0Big+d8qxh9WeG88HRsPhsZX4\"",
    "date": "Tue, 27 May 2025 23:20:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "c4111617-c5a4-4810-8cea-2815f292699e",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:19:56.779Z",
      "lastMessageAt": "2025-05-27T23:19:56.779Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "yt9fOj1Hnkcucedm4PeMf88AI6A3",
          "email": "conversations-regular-1748387984421@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "daca035a-4f1f-41b5-a67d-c601df5575a4",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:19:54.712Z",
      "lastMessageAt": "2025-05-27T23:19:54.712Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "yt9fOj1Hnkcucedm4PeMf88AI6A3",
          "email": "conversations-regular-1748387984421@example.com",
          "name": "Regular User"
        },
        {
          "id": "YZTmTbmD2RYWq7MDm0SHU2PbEpH2",
          "email": "conversations-moderator-1748387985972@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "a899e80c-dd5d-48b5-a4cd-07790c771662",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:19:51.706Z",
      "lastMessageAt": "2025-05-27T23:19:51.706Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "yt9fOj1Hnkcucedm4PeMf88AI6A3",
          "email": "conversations-regular-1748387984421@example.com",
          "name": "Regular User"
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

**⏱️ Duration:** 1064.7 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (451.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4Nzk4NSwidXNlcl9pZCI6Inl0OWZPajFIbmtjdWNlZG00UGVNZjg4QUk2QTMiLCJzdWIiOiJ5dDlmT2oxSG5rY3VjZWRtNFBlTWY4OEFJNkEzIiwiaWF0IjoxNzQ4Mzg3OTg1LCJleHAiOjE3NDgzOTE1ODUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc5ODQ0MjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWWslHNMAwv_kPOhCF97B-tpDTANYv5jlpivMIH1bax7NWq4LsCJaAUjbfsA6rJf_X31dfdlWhqn5345vLiQsUBdHA8XNqhdDv5amTLH95BWWSXdOZQhJGW18tKPin_LJbRnA8PD1o_f2r1aQGmIfW0ZJvfFJXNXogGPYhqdBY0evGdi-3r4ARGD-h99zDFKcYie14x81764HoavpETmqi-X8jHZjqsBG1bu6UoWcoWfE6hfRTwD6tzQ2QVD_44lKbvpXVDkhQTxKKso54EypzKCpa9mKupdw4_QE-YbynQib6Z9nNGpd1BRpH6aN0FbE2crlYNBc0JZuR9uyvX2hw",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:20:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 451.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 1.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1015.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "39a18b6f-6cbc-4677-9043-68103a0d5316"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "etag": "W/\"14c-4S2YDXCBJkknhp+cD/caoE7Km58\"",
    "date": "Tue, 27 May 2025 23:20:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "de28c294-a8c2-4dc5-8fbb-f57d25edbad3",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:20:39.061Z",
    "lastMessageAt": "2025-05-27T23:20:39.061Z",
    "organizationId": "39a18b6f-6cbc-4677-9043-68103a0d5316",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
    ]
  }
}
```

**⏱️ Duration:** 1015.6 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 1.81s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1025.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
    "etag": "W/\"144-DvZfZUBnMU3Cplu8Zw/TQ0WKNaI\"",
    "date": "Tue, 27 May 2025 23:20:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d9d7d6cf-cdcd-4d06-8735-c1b640835004",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:20:40.086Z",
    "lastMessageAt": "2025-05-27T23:20:40.086Z",
    "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
    ]
  }
}
```

**⏱️ Duration:** 1025.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/d9d7d6cf-cdcd-4d06-8735-c1b640835004 (787.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "39a18b6f-6cbc-4677-9043-68103a0d5316"
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
    "etag": "W/\"152-KOhXqrRECDt1JlJ4WsoFXfXfKi8\"",
    "date": "Tue, 27 May 2025 23:20:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d9d7d6cf-cdcd-4d06-8735-c1b640835004",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:20:40.086Z",
    "lastMessageAt": "2025-05-27T23:20:40.086Z",
    "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "yt9fOj1Hnkcucedm4PeMf88AI6A3"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 787.4 ms  

</details>


---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 1.13s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1133.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "etag": "W/\"574-2n0sdjaR1qmzEDpq/C21V7gKgXc\"",
    "date": "Tue, 27 May 2025 23:20:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "d9d7d6cf-cdcd-4d06-8735-c1b640835004",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:20:40.086Z",
      "lastMessageAt": "2025-05-27T23:20:40.086Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
      ],
      "messages": []
    },
    {
      "id": "daca035a-4f1f-41b5-a67d-c601df5575a4",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:19:54.712Z",
      "lastMessageAt": "2025-05-27T23:19:54.712Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3",
        "YZTmTbmD2RYWq7MDm0SHU2PbEpH2"
      ],
      "messages": []
    },
    {
      "id": "a899e80c-dd5d-48b5-a4cd-07790c771662",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:19:51.706Z",
      "lastMessageAt": "2025-05-27T23:19:51.706Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 1133.3 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 1.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1008.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg"
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
    "content-length": "5629",
    "etag": "W/\"15fd-GdoIAkuEkjMytwFANEEZPqudNK8\"",
    "date": "Tue, 27 May 2025 23:20:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "d9d7d6cf-cdcd-4d06-8735-c1b640835004",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:20:40.086Z",
      "lastMessageAt": "2025-05-27T23:20:40.086Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
      "organizationId": "39a18b6f-6cbc-4677-9043-68103a0d5316",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
      ],
      "messages": []
    },
    {
      "id": "daca035a-4f1f-41b5-a67d-c601df5575a4",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:19:54.712Z",
      "lastMessageAt": "2025-05-27T23:19:54.712Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3",
        "YZTmTbmD2RYWq7MDm0SHU2PbEpH2"
      ],
      "messages": []
    },
    {
      "id": "a899e80c-dd5d-48b5-a4cd-07790c771662",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:19:51.706Z",
      "lastMessageAt": "2025-05-27T23:19:51.706Z",
      "organizationId": "067241d7-a9e5-40bc-a308-441fbbaedb78",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "yt9fOj1Hnkcucedm4PeMf88AI6A3"
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

**⏱️ Duration:** 1008.8 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.65s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m404[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (646.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:20:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "Conversation not found"
  }
}
```

**⏱️ Duration:** 646.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/a899e80c-dd5d-48b5-a4cd-07790c771662 (9.0ms)</summary>

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
    "date": "Tue, 27 May 2025 23:20:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 9.0 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (638.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg",
    "X-Organization-Id": "067241d7-a9e5-40bc-a308-441fbbaedb78"
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
    "date": "Tue, 27 May 2025 23:20:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 638.9 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/a899e80c-dd5d-48b5-a4cd-07790c771662 (566.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg"
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
    "date": "Tue, 27 May 2025 23:20:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 566.0 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/daca035a-4f1f-41b5-a67d-c601df5575a4 (586.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg"
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
    "date": "Tue, 27 May 2025 23:20:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 586.5 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/067241d7-a9e5-40bc-a308-441fbbaedb78 (1426.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg"
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
    "date": "Tue, 27 May 2025 23:20:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1426.9 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/39a18b6f-6cbc-4677-9043-68103a0d5316 (1225.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3OTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc5ODEsImV4cCI6MTc0ODM5MTU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T6PMSmjAPT7eVbydn1lzuEImL1gMzNVUCvPJA0XGFBSeK0v6rjFH2mi75VGOrasECNJlB3VJmeibZMGFpTEAzdGWCGEtI2wEbcvEIKNpmrjm_UrB32kpvWLAMVGmHNhNzp__Wh6j48QjE1l49n5gIWAz89rTRm1RdP__45uIH2SUWmGdkrXRHr-0tWp4iXTtx1ymjOghIjAwOaF3pnJ4vE7BMtANKThy8yd33Q-DWuq7jSgQxLlFnR5h4ZbPuyBeiTQjwRqpVffkKndgZRyonNOxVvSc2YyPbwD9_n9oRCeMoBiL9NNDh6-f5wEhDPKUQtYlzEUQe4XqfRSzCAklqg"
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
    "date": "Tue, 27 May 2025 23:20:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1225.1 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (337.6ms)</summary>

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
    "etag": "W/\"640-VtENfHiCy/mXUcQYIGCsY10KhQ0\"",
    "date": "Tue, 27 May 2025 23:20:48 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgwNDgsImV4cCI6MTc0ODM5MTY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bc3L7vXFfbJJkZII7KMLLznXe7vg0pxlqESW-f1dtf4J3IjuS0invfyimH0rhPXyhLHVBqlopDdVMVP5Xmr1EvlazSaoGR0AGjygUI1EUuazr-cnR83LKjCQD3KzdHjw6B-TYurq1uY6jRZDja0lPx4EF5LLVNft2LKA4MZtz3YOuaBAuRy4FM08kFOBeWFnzf1_6Wtl1-skQC0i7Lj_f_X1N3NnpZFUfTkjMumNUhWCzXmduMSZVXu_BXnt853YaXtn03Hb8YAD6YmO5RtBqf9B7te9Iy8HOsbSQiaVrTy9NabXRron6ZgbyMApVpNL6DJyxSimPuqkYRe4XOo3_A",
      "refreshToken": "AMf-vBxnkoisENnqKFAprAT3k09wHvJgkk_l985_oI5tk6baNCiQ0vcLAeUB7iBCm6JNGMPtSoH6I-mxQ0ce_n-Ze5ThjX8WGMkEmtbXeWqvcXDNluQmr03DI3P6jJKyD6UMx_SBeuqSyKYNSE42OBw6G4fA8jnqVTIcw-9Llcoxi-D2L63aeG783Ze4QL7tR-KBg-VVA7HtKVrtKmXXu4pXL145LB_-djz8vrMN0yK0j75-e0rJkKD_SctnnlHfuUxBJ_D0Y3-j",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 337.6 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/yt9fOj1Hnkcucedm4PeMf88AI6A3 (1452.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgwNDgsImV4cCI6MTc0ODM5MTY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bc3L7vXFfbJJkZII7KMLLznXe7vg0pxlqESW-f1dtf4J3IjuS0invfyimH0rhPXyhLHVBqlopDdVMVP5Xmr1EvlazSaoGR0AGjygUI1EUuazr-cnR83LKjCQD3KzdHjw6B-TYurq1uY6jRZDja0lPx4EF5LLVNft2LKA4MZtz3YOuaBAuRy4FM08kFOBeWFnzf1_6Wtl1-skQC0i7Lj_f_X1N3NnpZFUfTkjMumNUhWCzXmduMSZVXu_BXnt853YaXtn03Hb8YAD6YmO5RtBqf9B7te9Iy8HOsbSQiaVrTy9NabXRron6ZgbyMApVpNL6DJyxSimPuqkYRe4XOo3_A"
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
    "date": "Tue, 27 May 2025 23:20:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1452.1 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (647.4ms)</summary>

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
    "etag": "W/\"640-Vg/DpRLV2m6/e/cj6sOFxJMmGuk\"",
    "date": "Tue, 27 May 2025 23:20:51 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgwNTAsImV4cCI6MTc0ODM5MTY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bm7_sxVNXuM2DO3impIlK_1cPBY18yjeG3CGYKpuBXen3zE5gs4D9eKxmixGkmy7FOCvPa1X_Fv6IXH0lqfPqWCBJjOVha3Kmo2OOZhNh3OUbXIDWicDu8IDeJKOqfhoRVy8XCb9-8N_4L7o7dsQcEiYKG0QNuM4c-ASINuiG6jyMo_FdrwT-NpOqvs358upQnnWe9ztO7_AGUNpqavcly0Cs8_NRqhysIi3y9ZZCSzdxgkcoRIbYKyZTkpEmYLsWG16JvaSDDPlf6GepAFC0KilV6aWWtZSFNdADOQ0rEcI4_pBavXdyJz_TOEHsOadjB5aKG8fUYZYVFesAFziEA",
      "refreshToken": "AMf-vBwDxYw_Hk-6Kv4IgLOaKlHP3-kWZDNPWUFZD2xqfh6aaMpeT19RqXxEUHYqfBTOAZtnEKN1kNN9nohDjgTwSGzV0jvgjaMbeJeU5xzxzcZuS9HKVLNptqKSzvAsO8MNXZ8DcjXosKu8TUqyw6mhpXIH2VUltJKIoVsaYybl9lFriaLsFWSpdClW483UH0XBMGCXH-T9BzA6UjR9LovqCXvLEJ2LZfb0XP6Laoc98LvaZcTGcryvxTYr12a9WoxETFdX1SbO",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 647.4 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/YZTmTbmD2RYWq7MDm0SHU2PbEpH2 (1184.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgwNTAsImV4cCI6MTc0ODM5MTY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bm7_sxVNXuM2DO3impIlK_1cPBY18yjeG3CGYKpuBXen3zE5gs4D9eKxmixGkmy7FOCvPa1X_Fv6IXH0lqfPqWCBJjOVha3Kmo2OOZhNh3OUbXIDWicDu8IDeJKOqfhoRVy8XCb9-8N_4L7o7dsQcEiYKG0QNuM4c-ASINuiG6jyMo_FdrwT-NpOqvs358upQnnWe9ztO7_AGUNpqavcly0Cs8_NRqhysIi3y9ZZCSzdxgkcoRIbYKyZTkpEmYLsWG16JvaSDDPlf6GepAFC0KilV6aWWtZSFNdADOQ0rEcI4_pBavXdyJz_TOEHsOadjB5aKG8fUYZYVFesAFziEA"
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
    "date": "Tue, 27 May 2025 23:20:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1184.3 ms  

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
