# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:31:53 AM  
**Duration:** 50.95s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 2.37s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.61s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.59s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.25s | Should create group conversation with multiple participants |
| ✅ Should get conversation by ID for participant | PASSED | 0.88s | Should get conversation by ID for participant |
| ✅ Should fail to get conversation by ID for non-participant | PASSED | 1.75s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 1.25s | Should get conversations for user |
| ✅ Should fail to get conversations for other user without permission | PASSED | 10.01s | Should fail to get conversations for other user without permission |
| ✅ Should get conversation with invalid ID format | PASSED | 0.65s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 0.93s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 1.38s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.81s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.89s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 0.85s | Should unblock conversation (moderator) |
| ✅ Should fail to block conversation as regular user | PASSED | 0.58s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.83s | Should permanently delete conversation (admin) |
| ✅ Should fail to permanently delete conversation as regular user | PASSED | 0.46s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 1.12s | Should get all conversations (admin) |
| ✅ Should fail to get all conversations as regular user | PASSED | 0.47s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 0.99s | Should create conversation in specific organization |
| ✅ Should not access conversation from different organization | PASSED | 1.80s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.96s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 1.01s | Super admin should access conversations across organizations |
| ✅ Should handle non-existent conversation ID | PASSED | 0.66s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.60s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.37s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2363.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "etag": "W/\"144-WQVZESEKFucNtT+iqkFxX0FWeB8\"",
    "date": "Tue, 27 May 2025 23:31:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9d9482e5-1960-466a-879c-f6f42910402d",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:31:13.162Z",
    "lastMessageAt": "2025-05-27T23:31:13.162Z",
    "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
    ]
  }
}
```

**⏱️ Duration:** 2363.3 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (609.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 609.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (587.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 587.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.25s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1250.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1",
      "hcrbO6kCyUQQPPWwTlcKYjhlHSn2"
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
    "etag": "W/\"168-MSPpM0E7QMa0WIchOsVk5sSRZ0k\"",
    "date": "Tue, 27 May 2025 23:31:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ca4a914f-2938-4a02-84da-978892bdee19",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-05-27T23:31:16.215Z",
    "lastMessageAt": "2025-05-27T23:31:16.215Z",
    "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1",
      "hcrbO6kCyUQQPPWwTlcKYjhlHSn2"
    ]
  }
}
```

**⏱️ Duration:** 1250.1 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/9d9482e5-1960-466a-879c-f6f42910402d (878.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "etag": "W/\"152-rbDkiMeJB+tvA61dDfMl6zbtEUw\"",
    "date": "Tue, 27 May 2025 23:31:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9d9482e5-1960-466a-879c-f6f42910402d",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:31:13.162Z",
    "lastMessageAt": "2025-05-27T23:31:13.162Z",
    "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 878.6 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (998.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "etag": "W/\"147-W2k+7UoKB9jfyRn0PlvBWvo5QLs\"",
    "date": "Tue, 27 May 2025 23:31:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7edd7131-9a8c-45f9-a777-537214d4d998",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:31:18.278Z",
    "lastMessageAt": "2025-05-27T23:31:18.278Z",
    "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
    ]
  }
}
```

**⏱️ Duration:** 998.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/7edd7131-9a8c-45f9-a777-537214d4d998 (746.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2OCwidXNlcl9pZCI6ImhjcmJPNmtDeVVRUVBQV3dUbGNLWWpobEhTbjIiLCJzdWIiOiJoY3JiTzZrQ3lVUVFQUFd3VGxjS1lqaGxIU24yIiwiaWF0IjoxNzQ4Mzg4NjY4LCJleHAiOjE3NDgzOTIyNjgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODY2NzU1NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4NjY3NTU2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LwFAo_36C03AeJtaGzoRFrspq8LcKzh-N7NMaWmXmYarf4IKobu-Tg7Ojl0nE3IeQZg8zNV03si--RVj4kYV3_y0bDX32kaU8yOPp8J5HJ6q2pf_BNp-HiqI-qA27SiiVj9KlD3ZxcH73hAJBkBNQGaxrQjrDNmGG49f3XjCZFKY2MzdnPj-F31tRY2TQUrlbRN8yMawju3daIi1BOlZjl8IRgm0GL41jRapFJE1SVSDpXCmlM8laNLGFtkMl8MtPe9qJ6h4_yFIjVCLEznENGOlFbSMG0qNxmn0-1vQlk4Dx_sVPqZBVK4joI_H7U_568fXw8LRLzrskAMBP12GCQ",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 746.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 1.25s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/AGgg4wlFJWNAB12sIYAbACBqrZt1 (1248.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "etag": "W/\"421-U/yqAzx+vRdYFamQtIObXV58w4c\"",
    "date": "Tue, 27 May 2025 23:31:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "7edd7131-9a8c-45f9-a777-537214d4d998",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:18.278Z",
      "lastMessageAt": "2025-05-27T23:31:18.278Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
      ],
      "messages": []
    },
    {
      "id": "ca4a914f-2938-4a02-84da-978892bdee19",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:31:16.215Z",
      "lastMessageAt": "2025-05-27T23:31:16.215Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1",
        "hcrbO6kCyUQQPPWwTlcKYjhlHSn2"
      ],
      "messages": []
    },
    {
      "id": "9d9482e5-1960-466a-879c-f6f42910402d",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:13.162Z",
      "lastMessageAt": "2025-05-27T23:31:13.162Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 1248.2 ms  

</details>


---

### Test: Should fail to get conversations for other user without permission
**Status:** ✅ PASSED  
**Duration:** 10.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10006.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10006.8 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


**Console Output:**
```
ℹ️ Request timed out - this is acceptable as the server rejected the request
```

---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (653.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 653.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/9d9482e5-1960-466a-879c-f6f42910402d/soft-delete (931.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "userId": "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "date": "Tue, 27 May 2025 23:31:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 931.6 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 1.38s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/9d9482e5-1960-466a-879c-f6f42910402d/hide (1377.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "userId": "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "date": "Tue, 27 May 2025 23:31:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 1377.1 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/9d9482e5-1960-466a-879c-f6f42910402d/unhide (808.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "userId": "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "date": "Tue, 27 May 2025 23:31:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 808.8 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.89s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ca4a914f-2938-4a02-84da-978892bdee19/block (885.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2OCwidXNlcl9pZCI6ImhjcmJPNmtDeVVRUVBQV3dUbGNLWWpobEhTbjIiLCJzdWIiOiJoY3JiTzZrQ3lVUVFQUFd3VGxjS1lqaGxIU24yIiwiaWF0IjoxNzQ4Mzg4NjY4LCJleHAiOjE3NDgzOTIyNjgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODY2NzU1NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4NjY3NTU2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LwFAo_36C03AeJtaGzoRFrspq8LcKzh-N7NMaWmXmYarf4IKobu-Tg7Ojl0nE3IeQZg8zNV03si--RVj4kYV3_y0bDX32kaU8yOPp8J5HJ6q2pf_BNp-HiqI-qA27SiiVj9KlD3ZxcH73hAJBkBNQGaxrQjrDNmGG49f3XjCZFKY2MzdnPj-F31tRY2TQUrlbRN8yMawju3daIi1BOlZjl8IRgm0GL41jRapFJE1SVSDpXCmlM8laNLGFtkMl8MtPe9qJ6h4_yFIjVCLEznENGOlFbSMG0qNxmn0-1vQlk4Dx_sVPqZBVK4joI_H7U_568fXw8LRLzrskAMBP12GCQ",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "userId": "hcrbO6kCyUQQPPWwTlcKYjhlHSn2"
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
    "date": "Tue, 27 May 2025 23:31:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 885.1 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ca4a914f-2938-4a02-84da-978892bdee19/unblock (853.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2OCwidXNlcl9pZCI6ImhjcmJPNmtDeVVRUVBQV3dUbGNLWWpobEhTbjIiLCJzdWIiOiJoY3JiTzZrQ3lVUVFQUFd3VGxjS1lqaGxIU24yIiwiaWF0IjoxNzQ4Mzg4NjY4LCJleHAiOjE3NDgzOTIyNjgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODY2NzU1NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4NjY3NTU2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LwFAo_36C03AeJtaGzoRFrspq8LcKzh-N7NMaWmXmYarf4IKobu-Tg7Ojl0nE3IeQZg8zNV03si--RVj4kYV3_y0bDX32kaU8yOPp8J5HJ6q2pf_BNp-HiqI-qA27SiiVj9KlD3ZxcH73hAJBkBNQGaxrQjrDNmGG49f3XjCZFKY2MzdnPj-F31tRY2TQUrlbRN8yMawju3daIi1BOlZjl8IRgm0GL41jRapFJE1SVSDpXCmlM8laNLGFtkMl8MtPe9qJ6h4_yFIjVCLEznENGOlFbSMG0qNxmn0-1vQlk4Dx_sVPqZBVK4joI_H7U_568fXw8LRLzrskAMBP12GCQ",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "userId": "hcrbO6kCyUQQPPWwTlcKYjhlHSn2"
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
    "date": "Tue, 27 May 2025 23:31:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 853.4 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/9d9482e5-1960-466a-879c-f6f42910402d/block (576.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "userId": "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "date": "Tue, 27 May 2025 23:31:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 576.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1094.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "etag": "W/\"149-BcPj0C/QneNhQ2sCoWikyVgszIs\"",
    "date": "Tue, 27 May 2025 23:31:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2ad80894-18ed-49d7-a649-1bd4ec72c8b3",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:31:37.410Z",
    "lastMessageAt": "2025-05-27T23:31:37.410Z",
    "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
    ]
  }
}
```

**⏱️ Duration:** 1094.2 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/2ad80894-18ed-49d7-a649-1bd4ec72c8b3 (732.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 732.7 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/9d9482e5-1960-466a-879c-f6f42910402d (463.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 463.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.12s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (1122.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "content-length": "10338",
    "etag": "W/\"2862-mSiLAyViQKP2ikycA5Fg2kVHXKc\"",
    "date": "Tue, 27 May 2025 23:31:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "7edd7131-9a8c-45f9-a777-537214d4d998",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:18.278Z",
      "lastMessageAt": "2025-05-27T23:31:18.278Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "AGgg4wlFJWNAB12sIYAbACBqrZt1",
          "email": "conversations-regular-1748388666190@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "ca4a914f-2938-4a02-84da-978892bdee19",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:31:16.215Z",
      "lastMessageAt": "2025-05-27T23:31:16.215Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "AGgg4wlFJWNAB12sIYAbACBqrZt1",
          "email": "conversations-regular-1748388666190@example.com",
          "name": "Regular User"
        },
        {
          "id": "hcrbO6kCyUQQPPWwTlcKYjhlHSn2",
          "email": "conversations-moderator-1748388667556@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "9d9482e5-1960-466a-879c-f6f42910402d",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:13.162Z",
      "lastMessageAt": "2025-05-27T23:31:13.162Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "AGgg4wlFJWNAB12sIYAbACBqrZt1",
          "email": "conversations-regular-1748388666190@example.com",
          "name": "Regular User"
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
  ]
}
```

**⏱️ Duration:** 1122.1 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (472.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODY2NywidXNlcl9pZCI6IkFHZ2c0d2xGSldOQUIxMnNJWUFiQUNCcXJadDEiLCJzdWIiOiJBR2dnNHdsRkpXTkFCMTJzSVlBYkFDQnFyWnQxIiwiaWF0IjoxNzQ4Mzg4NjY3LCJleHAiOjE3NDgzOTIyNjcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODg2NjYxOTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TKhAOMQ4E9JGPCcFkWwdIoTnJY3OwTGN7bnht1xzfq5JlJC-OVErLGi-Seraea8srIJyIzZekakXY6Ck5iEqvXzuJUuW73VVUQVcEBgwV9EcKC41nypiyjrhuL-I_biZkvuLq683DXjV7QmFtx9uxcF7ALSt53ZVHMXlD8hgC9hfmqwtwEYcxIF3yxiGKU19v8ebq-J326Tc-hKfdxa_K0gnR4xOdWkyIiE3e0K97KlhtG_CeZ8pFCzs7toZ17T6rnIskonxWPzvrsUZ_xKjuq031qdUYbAWlYUAdf-PebvE3x11CxO2XXR591Weszm_fiZXxjLhLzRGPeZKhx2Ttw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 472.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (989.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "76e68601-c257-4804-8d44-62e796de4cb1"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "etag": "W/\"14c-6gMQHpVJHkX87U9ZjV6UplUXkBM\"",
    "date": "Tue, 27 May 2025 23:31:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d74066e5-8f15-47b3-bf75-e90915731a70",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:31:41.274Z",
    "lastMessageAt": "2025-05-27T23:31:41.274Z",
    "organizationId": "76e68601-c257-4804-8d44-62e796de4cb1",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
    ]
  }
}
```

**⏱️ Duration:** 989.7 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ✅ PASSED  
**Duration:** 1.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1051.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
    "etag": "W/\"144-gUMdv4z/27LbfbuKvnPsKX7A08U\"",
    "date": "Tue, 27 May 2025 23:31:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6dc29759-3305-4f87-9a8e-957b445f4f7e",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:31:42.328Z",
    "lastMessageAt": "2025-05-27T23:31:42.328Z",
    "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
    ]
  }
}
```

**⏱️ Duration:** 1051.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/6dc29759-3305-4f87-9a8e-957b445f4f7e (743.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "76e68601-c257-4804-8d44-62e796de4cb1"
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
    "etag": "W/\"152-RgYwPOO2vkmY/ECV4595wz6jWTs\"",
    "date": "Tue, 27 May 2025 23:31:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6dc29759-3305-4f87-9a8e-957b445f4f7e",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:31:42.328Z",
    "lastMessageAt": "2025-05-27T23:31:42.328Z",
    "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AGgg4wlFJWNAB12sIYAbACBqrZt1"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 743.0 ms  

</details>


**Console Output:**
```
ℹ️ Request failed with network error - this is acceptable as the server rejected the request
```

---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.96s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (959.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "etag": "W/\"574-VV6g9zERi4Meu+43MmeuhO4CPjs\"",
    "date": "Tue, 27 May 2025 23:31:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "6dc29759-3305-4f87-9a8e-957b445f4f7e",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:42.328Z",
      "lastMessageAt": "2025-05-27T23:31:42.328Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
      ],
      "messages": []
    },
    {
      "id": "ca4a914f-2938-4a02-84da-978892bdee19",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:31:16.215Z",
      "lastMessageAt": "2025-05-27T23:31:16.215Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1",
        "hcrbO6kCyUQQPPWwTlcKYjhlHSn2"
      ],
      "messages": []
    },
    {
      "id": "9d9482e5-1960-466a-879c-f6f42910402d",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:13.162Z",
      "lastMessageAt": "2025-05-27T23:31:13.162Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 959.6 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 1.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1011.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw"
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
    "content-length": "8961",
    "etag": "W/\"2301-0u7IkTGfdFvUQOSYXTVgHFFVmkE\"",
    "date": "Tue, 27 May 2025 23:31:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "6dc29759-3305-4f87-9a8e-957b445f4f7e",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:42.328Z",
      "lastMessageAt": "2025-05-27T23:31:42.328Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
      "organizationId": "76e68601-c257-4804-8d44-62e796de4cb1",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
      ],
      "messages": []
    },
    {
      "id": "ca4a914f-2938-4a02-84da-978892bdee19",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:31:16.215Z",
      "lastMessageAt": "2025-05-27T23:31:16.215Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1",
        "hcrbO6kCyUQQPPWwTlcKYjhlHSn2"
      ],
      "messages": []
    },
    {
      "id": "9d9482e5-1960-466a-879c-f6f42910402d",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:13.162Z",
      "lastMessageAt": "2025-05-27T23:31:13.162Z",
      "organizationId": "5a557bf2-1311-4175-aa02-1758b66a9cce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "AGgg4wlFJWNAB12sIYAbACBqrZt1"
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
  ]
}
```

**⏱️ Duration:** 1011.3 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (659.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 659.0 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/9d9482e5-1960-466a-879c-f6f42910402d (8.4ms)</summary>

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
    "date": "Tue, 27 May 2025 23:31:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 8.4 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (601.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw",
    "X-Organization-Id": "5a557bf2-1311-4175-aa02-1758b66a9cce"
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
    "date": "Tue, 27 May 2025 23:31:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 601.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/9d9482e5-1960-466a-879c-f6f42910402d (671.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw"
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
    "date": "Tue, 27 May 2025 23:31:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 671.4 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/ca4a914f-2938-4a02-84da-978892bdee19 (662.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw"
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
    "date": "Tue, 27 May 2025 23:31:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 662.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/5a557bf2-1311-4175-aa02-1758b66a9cce (1391.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw"
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
    "date": "Tue, 27 May 2025 23:31:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1391.2 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/76e68601-c257-4804-8d44-62e796de4cb1 (1112.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg2NjMsImV4cCI6MTc0ODM5MjI2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEWXihpqijtiOuZjQndwtBbIRDK4Dz7gNd943JuuMUDbaj5kwt_tUcmvBP-2maeh7U9MpQN2bozQJ2SCO0WvdbxG4iP6aEdPVsKKWx15yTAb3oUs8_SNkrFA6Oi-TQVzHwU1C5waOG6_6p_vFkyZlnAs0mzWnz0Ge1JHnnySWFg-wF7ipqEbucFBZ-L5Jdpf-AWNO475Kaen4TeRdG2xguV0yRqALfjM1EXpZ6u6E93ReNGJrDf8Fz7H4yD-PSklrZA0Ha-3p-MS-8leCUhqs4QSYhBBjTR-JyOjTCnJh0e18DsQwn4FyaZSfERrEVp8nYhl9MI8lIZbODlOPgUXsw"
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
    "date": "Tue, 27 May 2025 23:31:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1112.6 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (315.2ms)</summary>

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
    "etag": "W/\"640-oAjo4Toqj+z4O1J0k5E4eBh8PEs\"",
    "date": "Tue, 27 May 2025 23:31:50 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NzEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg3MTAsImV4cCI6MTc0ODM5MjMxMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QIekZeZS0TZ6KNr3whn27yBg3MfUu1NsMwbWuieUmxjOMG5VoNj0VBEW375ydYWX38ADMbziSSKNYYH7gBUZT9TB-doWWwffahEr35pKg3SMiW36I1qjh4PNois7pi0R-Jg11Q-4i_E7ypGiVTbpa9s4wfA4E7d7-CrHOQpZZzwZnUvaL4cOecxmH8NTOMuuqHRbMcZ375l5hhCbgcpI2vYKcrGQQJCJrEyESwSaYeY2OVcjObYZwH6mIbZFTU62agdIlrqQCPG4zmrGg3ZkiFoOYBrwN9Y44WpDIgAaL4vWiI1q3-7gQYYO24_Wd8_gxwSA1YTSa7Gz-_WRU5zi7A",
      "refreshToken": "AMf-vByd2eDmKQJUe8ud0Qt0okGNEtI3STn0YILBCAqBW35bHNdtzMZIXY3B9kfoZE1wIP4QwF5BBUwwRbl3L4kCO1ARrekXepkmz2NmN2FPttBmLXjoMkxQEyzkOpKI07rTLzzEdViGWKXp518F8jI5VpSoeLn_uzRKNhlhD9KPSiVFuOA3wX_7bFB2RKD7o-h2nyEZbs-cPGogTkyqZDjbnDoQaPs-whZtk1DsAlfnuUQCwJnZNrTyJE4wikZKL3hhTVTSS9jr",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 315.2 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/AGgg4wlFJWNAB12sIYAbACBqrZt1 (1373.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NzEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg3MTAsImV4cCI6MTc0ODM5MjMxMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QIekZeZS0TZ6KNr3whn27yBg3MfUu1NsMwbWuieUmxjOMG5VoNj0VBEW375ydYWX38ADMbziSSKNYYH7gBUZT9TB-doWWwffahEr35pKg3SMiW36I1qjh4PNois7pi0R-Jg11Q-4i_E7ypGiVTbpa9s4wfA4E7d7-CrHOQpZZzwZnUvaL4cOecxmH8NTOMuuqHRbMcZ375l5hhCbgcpI2vYKcrGQQJCJrEyESwSaYeY2OVcjObYZwH6mIbZFTU62agdIlrqQCPG4zmrGg3ZkiFoOYBrwN9Y44WpDIgAaL4vWiI1q3-7gQYYO24_Wd8_gxwSA1YTSa7Gz-_WRU5zi7A"
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
    "date": "Tue, 27 May 2025 23:31:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1373.0 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (286.2ms)</summary>

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
    "etag": "W/\"640-+w3lDPRJ4ASTVJIDWKTaVCeyY+A\"",
    "date": "Tue, 27 May 2025 23:31:52 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NzEyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg3MTIsImV4cCI6MTc0ODM5MjMxMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.djfTaG-I2WBfNKT0JwYqqV7fnmMmRnIwEvQhJukjcH5gUATWJmDJOG3xU3WXApy19iLpfQxn3aKu98_LHDUzpOWATVWOAjMm2QONJCZDU05xCzWkAOPkM5vdDp2kWygWJpuN5eKUPWttv72Fbdlfo4HkeUxRT1tBmiDhnGzC5wil1xbKwCqE6caFwxczH0bqanfjnsqEsrlwm-6yqrD6WA-iCXr6o_MRF0in8yr6O7t28-eOvTJpXAnK0QyGc4cEYUEwZ92eG3Ay9fBr1YFeFBPcGloKSKY9Mzs1Qii5K0_If85IcTyu6VvU8WOluMdIafolA02ecSLSaks48WVysA",
      "refreshToken": "AMf-vBwl7Ixv9uBeVw9y4553JRfDoaOyUN3E7DrVvVkja78D5e66g-YA8fQRnURZTOgUOuNHex6ig0DXkdnH5Mo0SlFV3bf_B2sBqY30KfafWfWJZY0zhlCD0ikXv-7FGwrK1aFdpOWcpJ8DdGyjd2wfnYRUyVJfkxxd9xvTcYdQtUvq3AQAnn8LbAmUPFUuY8gAXxR-XQARj9G20ieYnBDtVLFErwnOFkKqYh_CK0kapDYy0g8FPuTDtI9llKkcrQKBPT1u3V7t",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 286.2 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/hcrbO6kCyUQQPPWwTlcKYjhlHSn2 (1136.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4NzEyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODg3MTIsImV4cCI6MTc0ODM5MjMxMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.djfTaG-I2WBfNKT0JwYqqV7fnmMmRnIwEvQhJukjcH5gUATWJmDJOG3xU3WXApy19iLpfQxn3aKu98_LHDUzpOWATVWOAjMm2QONJCZDU05xCzWkAOPkM5vdDp2kWygWJpuN5eKUPWttv72Fbdlfo4HkeUxRT1tBmiDhnGzC5wil1xbKwCqE6caFwxczH0bqanfjnsqEsrlwm-6yqrD6WA-iCXr6o_MRF0in8yr6O7t28-eOvTJpXAnK0QyGc4cEYUEwZ92eG3Ay9fBr1YFeFBPcGloKSKY9Mzs1Qii5K0_If85IcTyu6VvU8WOluMdIafolA02ecSLSaks48WVysA"
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
    "date": "Tue, 27 May 2025 23:31:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1136.0 ms  

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
