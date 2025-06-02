# E2E Test Report: conversations-tests

**Date:** 6/2/2025  
**Time:** 2:00:39 AM  
**Duration:** 48.25s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 1.94s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.72s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.59s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.25s | Should create group conversation with multiple participants |
| ✅ Should get conversation by ID for participant | PASSED | 0.97s | Should get conversation by ID for participant |
| ✅ Should fail to get conversation by ID for non-participant | PASSED | 1.73s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 1.06s | Should get conversations for user |
| ✅ Should fail to get conversations for other user without permission | PASSED | 10.01s | Should fail to get conversations for other user without permission |
| ✅ Should get conversation with invalid ID format | PASSED | 0.68s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 0.91s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 0.83s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.83s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.82s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 0.94s | Should unblock conversation (moderator) |
| ✅ Should fail to block conversation as regular user | PASSED | 0.48s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 2.02s | Should permanently delete conversation (admin) |
| ✅ Should fail to permanently delete conversation as regular user | PASSED | 0.48s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 1.08s | Should get all conversations (admin) |
| ✅ Should fail to get all conversations as regular user | PASSED | 0.50s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 1.03s | Should create conversation in specific organization |
| ✅ Should not access conversation from different organization | PASSED | 1.82s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.98s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 1.03s | Super admin should access conversations across organizations |
| ✅ Should handle non-existent conversation ID | PASSED | 0.72s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.66s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 1.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1937.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "etag": "W/\"144-Ve+mLhMHUvQ2dAR7kiRQ/QCKalI\"",
    "date": "Mon, 02 Jun 2025 00:00:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "533d274d-9a26-4685-9911-e9a18edd1dae",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:59:58.813Z",
    "lastMessageAt": "2025-06-01T23:59:58.813Z",
    "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
    ]
  }
}
```

**⏱️ Duration:** 1937.1 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (721.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 721.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (586.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 586.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.25s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1247.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2",
      "Sqaj5wT0JKfDcYPj9M2LSn6KZUt2"
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
    "etag": "W/\"168-Il2zhiLO4i43tKxm7JKMpUIHKbc\"",
    "date": "Mon, 02 Jun 2025 00:00:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "cdac7209-7478-4bfa-8733-ec0b092b0af6",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-06-02T00:00:02.015Z",
    "lastMessageAt": "2025-06-02T00:00:02.015Z",
    "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2",
      "Sqaj5wT0JKfDcYPj9M2LSn6KZUt2"
    ]
  }
}
```

**⏱️ Duration:** 1247.9 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/533d274d-9a26-4685-9911-e9a18edd1dae (969.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "etag": "W/\"152-hZpbCnKOtTow7lA5JPb4lCH6DDI\"",
    "date": "Mon, 02 Jun 2025 00:00:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "533d274d-9a26-4685-9911-e9a18edd1dae",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:59:58.813Z",
    "lastMessageAt": "2025-06-01T23:59:58.813Z",
    "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 969.7 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (986.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "etag": "W/\"147-+V0McS/IvePazrIwG4iDrSF+mpo\"",
    "date": "Mon, 02 Jun 2025 00:00:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "162e9c6d-20c7-4765-bef5-1fbb1e84151d",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:00:04.158Z",
    "lastMessageAt": "2025-06-02T00:00:04.158Z",
    "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
    ]
  }
}
```

**⏱️ Duration:** 986.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/162e9c6d-20c7-4765-bef5-1fbb1e84151d (742.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NSwidXNlcl9pZCI6IlNxYWo1d1QwSktmRGNZUGo5TTJMU242S1pVdDIiLCJzdWIiOiJTcWFqNXdUMEpLZkRjWVBqOU0yTFNuNktaVXQyIiwiaWF0IjoxNzQ4ODIyMzk1LCJleHAiOjE3NDg4MjU5OTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMjM5NDE4NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIyMzk0MTg1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.inP_v6P9zKM6o3SywZEWiCRW_dSWQ3HTBtTcbRhJ3YlUGT4FKwi_C1LrJZ-EI6DvczMiE--dQ9xpeHyk28a2vLxaQ2PcE1Ve6YzM6LATaY-7GCIEGtu4HgjbhNPi5b279SKgrGeKwtEBhKtHa8GvXGa3Mo5KcnkqRdQ-pEJl3yJXg98qgsBnqa8x_Z4a2FLLqMusnFtCdUjFxX8D4trKpd7_EM25_07jDjDE0H6Z94dgnEUW2Eh75lXiy2LAsv9Ky4Z_6A-EaPELwuvNr2xgAWw8zo7zZK8bNcCgoHlfx7qx_gXfrCWsSu8uGgd3iPDIgItjoLydH_Bil-LEBPgOAQ",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 742.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 1.06s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/IYGzmlpxGrXrUx5W1XqO5bc7tgI2 (1059.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "etag": "W/\"421-OLlOrC7gfMIKVsM49bEVWwHeVT8\"",
    "date": "Mon, 02 Jun 2025 00:00:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "162e9c6d-20c7-4765-bef5-1fbb1e84151d",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-02T00:00:04.158Z",
      "lastMessageAt": "2025-06-02T00:00:04.158Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    },
    {
      "id": "cdac7209-7478-4bfa-8733-ec0b092b0af6",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-02T00:00:02.015Z",
      "lastMessageAt": "2025-06-02T00:00:02.015Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2",
        "Sqaj5wT0JKfDcYPj9M2LSn6KZUt2"
      ],
      "messages": []
    },
    {
      "id": "533d274d-9a26-4685-9911-e9a18edd1dae",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:59:58.813Z",
      "lastMessageAt": "2025-06-01T23:59:58.813Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 1059.3 ms  

</details>


---

### Test: Should fail to get conversations for other user without permission
**Status:** ✅ PASSED  
**Duration:** 10.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10008.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10008.4 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


**Console Output:**
```
ℹ️ Request timed out - this is acceptable as the server rejected the request
```

---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (674.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 674.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.91s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/533d274d-9a26-4685-9911-e9a18edd1dae/soft-delete (912.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "userId": "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "date": "Mon, 02 Jun 2025 00:00:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 912.1 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/533d274d-9a26-4685-9911-e9a18edd1dae/hide (831.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "userId": "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "date": "Mon, 02 Jun 2025 00:00:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 831.2 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/533d274d-9a26-4685-9911-e9a18edd1dae/unhide (828.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "userId": "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "date": "Mon, 02 Jun 2025 00:00:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 828.5 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/cdac7209-7478-4bfa-8733-ec0b092b0af6/block (822.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NSwidXNlcl9pZCI6IlNxYWo1d1QwSktmRGNZUGo5TTJMU242S1pVdDIiLCJzdWIiOiJTcWFqNXdUMEpLZkRjWVBqOU0yTFNuNktaVXQyIiwiaWF0IjoxNzQ4ODIyMzk1LCJleHAiOjE3NDg4MjU5OTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMjM5NDE4NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIyMzk0MTg1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.inP_v6P9zKM6o3SywZEWiCRW_dSWQ3HTBtTcbRhJ3YlUGT4FKwi_C1LrJZ-EI6DvczMiE--dQ9xpeHyk28a2vLxaQ2PcE1Ve6YzM6LATaY-7GCIEGtu4HgjbhNPi5b279SKgrGeKwtEBhKtHa8GvXGa3Mo5KcnkqRdQ-pEJl3yJXg98qgsBnqa8x_Z4a2FLLqMusnFtCdUjFxX8D4trKpd7_EM25_07jDjDE0H6Z94dgnEUW2Eh75lXiy2LAsv9Ky4Z_6A-EaPELwuvNr2xgAWw8zo7zZK8bNcCgoHlfx7qx_gXfrCWsSu8uGgd3iPDIgItjoLydH_Bil-LEBPgOAQ",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "userId": "Sqaj5wT0JKfDcYPj9M2LSn6KZUt2"
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
    "date": "Mon, 02 Jun 2025 00:00:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 822.6 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/cdac7209-7478-4bfa-8733-ec0b092b0af6/unblock (940.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NSwidXNlcl9pZCI6IlNxYWo1d1QwSktmRGNZUGo5TTJMU242S1pVdDIiLCJzdWIiOiJTcWFqNXdUMEpLZkRjWVBqOU0yTFNuNktaVXQyIiwiaWF0IjoxNzQ4ODIyMzk1LCJleHAiOjE3NDg4MjU5OTUsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMjM5NDE4NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIyMzk0MTg1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.inP_v6P9zKM6o3SywZEWiCRW_dSWQ3HTBtTcbRhJ3YlUGT4FKwi_C1LrJZ-EI6DvczMiE--dQ9xpeHyk28a2vLxaQ2PcE1Ve6YzM6LATaY-7GCIEGtu4HgjbhNPi5b279SKgrGeKwtEBhKtHa8GvXGa3Mo5KcnkqRdQ-pEJl3yJXg98qgsBnqa8x_Z4a2FLLqMusnFtCdUjFxX8D4trKpd7_EM25_07jDjDE0H6Z94dgnEUW2Eh75lXiy2LAsv9Ky4Z_6A-EaPELwuvNr2xgAWw8zo7zZK8bNcCgoHlfx7qx_gXfrCWsSu8uGgd3iPDIgItjoLydH_Bil-LEBPgOAQ",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "userId": "Sqaj5wT0JKfDcYPj9M2LSn6KZUt2"
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
    "date": "Mon, 02 Jun 2025 00:00:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 940.9 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/533d274d-9a26-4685-9911-e9a18edd1dae/block (479.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "userId": "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "date": "Mon, 02 Jun 2025 00:00:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 479.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 2.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1173.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "etag": "W/\"149-kcnTGO1CAJyRQIKpqaa82Hpz7gU\"",
    "date": "Mon, 02 Jun 2025 00:00:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "63c1166d-36d1-4f66-9cf8-d2c954cc0b1b",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:00:22.656Z",
    "lastMessageAt": "2025-06-02T00:00:22.656Z",
    "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
    ]
  }
}
```

**⏱️ Duration:** 1173.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/63c1166d-36d1-4f66-9cf8-d2c954cc0b1b (841.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 841.0 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/533d274d-9a26-4685-9911-e9a18edd1dae (475.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 475.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.08s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (1075.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "content-length": "13368",
    "etag": "W/\"3438-9GLUGiYqHLy9HRbBFIvB8SpMfX0\"",
    "date": "Mon, 02 Jun 2025 00:00:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "162e9c6d-20c7-4765-bef5-1fbb1e84151d",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-02T00:00:04.158Z",
      "lastMessageAt": "2025-06-02T00:00:04.158Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "IYGzmlpxGrXrUx5W1XqO5bc7tgI2",
          "email": "conversations-regular-1748822393093@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "cdac7209-7478-4bfa-8733-ec0b092b0af6",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-02T00:00:02.015Z",
      "lastMessageAt": "2025-06-02T00:00:02.015Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "IYGzmlpxGrXrUx5W1XqO5bc7tgI2",
          "email": "conversations-regular-1748822393093@example.com",
          "name": "Regular User"
        },
        {
          "id": "Sqaj5wT0JKfDcYPj9M2LSn6KZUt2",
          "email": "conversations-moderator-1748822394185@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "533d274d-9a26-4685-9911-e9a18edd1dae",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:59:58.813Z",
      "lastMessageAt": "2025-06-01T23:59:58.813Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "IYGzmlpxGrXrUx5W1XqO5bc7tgI2",
          "email": "conversations-regular-1748822393093@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "96a27878-ebb8-4d0b-be66-a1e5fdd66402",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:46:19.516Z",
      "lastMessageAt": "2025-06-01T23:46:19.516Z",
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
      "id": "f115ae02-3094-4f29-9cd6-909e84a34af6",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:46:18.636Z",
      "lastMessageAt": "2025-06-01T23:46:18.636Z",
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
      "id": "ac382e75-8c39-4f25-a2a9-eb8d90760a2b",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:45:56.923Z",
      "lastMessageAt": "2025-06-01T23:45:56.923Z",
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
      "id": "53999d15-f025-4d65-b38c-73b7f4f5a343",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:27.004Z",
      "lastMessageAt": "2025-06-01T23:36:27.004Z",
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
      "id": "10ccf220-dc68-499f-874f-c2a979bfc661",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:26.080Z",
      "lastMessageAt": "2025-06-01T23:36:26.080Z",
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
      "id": "0595a672-cd73-48b9-a156-c92fe4cfe9e5",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:04.847Z",
      "lastMessageAt": "2025-06-01T23:36:04.847Z",
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
      "id": "6dc29759-3305-4f87-9a8e-957b445f4f7e",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:42.328Z",
      "lastMessageAt": "2025-05-27T23:31:42.328Z",
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
      "id": "d74066e5-8f15-47b3-bf75-e90915731a70",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:41.274Z",
      "lastMessageAt": "2025-05-27T23:31:41.274Z",
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
      "id": "7edd7131-9a8c-45f9-a777-537214d4d998",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:18.278Z",
      "lastMessageAt": "2025-05-27T23:31:18.278Z",
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

**⏱️ Duration:** 1075.9 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (499.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjM5NCwidXNlcl9pZCI6IklZR3ptbHB4R3JYclV4NVcxWHFPNWJjN3RnSTIiLCJzdWIiOiJJWUd6bWxweEdyWHJVeDVXMVhxTzViYzd0Z0kyIiwiaWF0IjoxNzQ4ODIyMzk0LCJleHAiOjE3NDg4MjU5OTQsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjIzOTMwOTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.DBa6qdR3bdhmcPu-7rlVxWpMv0rTKGPnwTqdBiwcwwFnVLk_3WflmNSv7B_PZ8vVXBQObneRK_asUy9l-tNd7dFU6kPldC4PTC2fKdSE82rGU6e7z0omLfNJPkbaYtoCnwsL3jhSptifMzY7Lhd6C8jH7wwijejUG97gYhzSgwBNfGQDmgW3nd1SWzmQ2-8U7PKCoo7kSAQxTUvbvVK_xvcShQvpvUDYm5I0XfEAaPCMxchWb4grkmCD0AE0CHXy5cYQwKZWP4akAkJVjkpnBWH8YpOr3wvBlNsg3pU6w3VOd26xUUEGRMjlgaiGsqLIalIWD7pPDmpZHlgXUEpg0w",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 499.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1031.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "7158bdde-03b4-43b0-900a-05f820c053fd"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "etag": "W/\"14c-BqpM59zgOaTV2Ob6ZkfZqX6HrvY\"",
    "date": "Mon, 02 Jun 2025 00:00:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f18f2b80-e969-4634-80b2-f7ef726cb423",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:00:26.592Z",
    "lastMessageAt": "2025-06-02T00:00:26.592Z",
    "organizationId": "7158bdde-03b4-43b0-900a-05f820c053fd",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
    ]
  }
}
```

**⏱️ Duration:** 1031.7 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ✅ PASSED  
**Duration:** 1.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1032.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
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
    "etag": "W/\"144-LOXQKxcGoDZAcPePzy/o12LZO8w\"",
    "date": "Mon, 02 Jun 2025 00:00:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2f850cda-3473-49f1-9f35-9788aa38efbf",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:00:27.625Z",
    "lastMessageAt": "2025-06-02T00:00:27.625Z",
    "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
    ]
  }
}
```

**⏱️ Duration:** 1032.7 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/2f850cda-3473-49f1-9f35-9788aa38efbf (786.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "7158bdde-03b4-43b0-900a-05f820c053fd"
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
    "etag": "W/\"152-THJgm7D1WB6zHEEaw6vDxWbIZAE\"",
    "date": "Mon, 02 Jun 2025 00:00:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2f850cda-3473-49f1-9f35-9788aa38efbf",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:00:27.625Z",
    "lastMessageAt": "2025-06-02T00:00:27.625Z",
    "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 786.4 ms  

</details>


**Console Output:**
```
ℹ️ Request failed with network error - this is acceptable as the server rejected the request
```

---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.98s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (978.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "etag": "W/\"574-WSwOCCOwdqOnoEOrYG2I9pthqwA\"",
    "date": "Mon, 02 Jun 2025 00:00:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "2f850cda-3473-49f1-9f35-9788aa38efbf",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-02T00:00:27.625Z",
      "lastMessageAt": "2025-06-02T00:00:27.625Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    },
    {
      "id": "162e9c6d-20c7-4765-bef5-1fbb1e84151d",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-02T00:00:04.158Z",
      "lastMessageAt": "2025-06-02T00:00:04.158Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    },
    {
      "id": "cdac7209-7478-4bfa-8733-ec0b092b0af6",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-02T00:00:02.015Z",
      "lastMessageAt": "2025-06-02T00:00:02.015Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2",
        "Sqaj5wT0JKfDcYPj9M2LSn6KZUt2"
      ],
      "messages": []
    },
    {
      "id": "533d274d-9a26-4685-9911-e9a18edd1dae",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:59:58.813Z",
      "lastMessageAt": "2025-06-01T23:59:58.813Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 978.9 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1027.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA"
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
    "content-length": "11460",
    "etag": "W/\"2cc4-HgjUb9ROliK+XCyd0bCC+8G0Nxs\"",
    "date": "Mon, 02 Jun 2025 00:00:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "2f850cda-3473-49f1-9f35-9788aa38efbf",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-02T00:00:27.625Z",
      "lastMessageAt": "2025-06-02T00:00:27.625Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    },
    {
      "id": "f18f2b80-e969-4634-80b2-f7ef726cb423",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-02T00:00:26.592Z",
      "lastMessageAt": "2025-06-02T00:00:26.592Z",
      "organizationId": "7158bdde-03b4-43b0-900a-05f820c053fd",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    },
    {
      "id": "162e9c6d-20c7-4765-bef5-1fbb1e84151d",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-02T00:00:04.158Z",
      "lastMessageAt": "2025-06-02T00:00:04.158Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    },
    {
      "id": "cdac7209-7478-4bfa-8733-ec0b092b0af6",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-02T00:00:02.015Z",
      "lastMessageAt": "2025-06-02T00:00:02.015Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2",
        "Sqaj5wT0JKfDcYPj9M2LSn6KZUt2"
      ],
      "messages": []
    },
    {
      "id": "533d274d-9a26-4685-9911-e9a18edd1dae",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:59:58.813Z",
      "lastMessageAt": "2025-06-01T23:59:58.813Z",
      "organizationId": "b9503827-a610-4c30-9a2b-426a1aec19bc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "IYGzmlpxGrXrUx5W1XqO5bc7tgI2"
      ],
      "messages": []
    },
    {
      "id": "96a27878-ebb8-4d0b-be66-a1e5fdd66402",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:46:19.516Z",
      "lastMessageAt": "2025-06-01T23:46:19.516Z",
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
      ],
      "messages": []
    },
    {
      "id": "f115ae02-3094-4f29-9cd6-909e84a34af6",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:46:18.636Z",
      "lastMessageAt": "2025-06-01T23:46:18.636Z",
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
      ],
      "messages": []
    },
    {
      "id": "ac382e75-8c39-4f25-a2a9-eb8d90760a2b",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:45:56.923Z",
      "lastMessageAt": "2025-06-01T23:45:56.923Z",
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
      ],
      "messages": []
    },
    {
      "id": "53999d15-f025-4d65-b38c-73b7f4f5a343",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:27.004Z",
      "lastMessageAt": "2025-06-01T23:36:27.004Z",
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
      ],
      "messages": []
    },
    {
      "id": "10ccf220-dc68-499f-874f-c2a979bfc661",
      "title": "Org-Specific Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:26.080Z",
      "lastMessageAt": "2025-06-01T23:36:26.080Z",
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
      ],
      "messages": []
    },
    {
      "id": "0595a672-cd73-48b9-a156-c92fe4cfe9e5",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:04.847Z",
      "lastMessageAt": "2025-06-01T23:36:04.847Z",
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
      ],
      "messages": []
    },
    {
      "id": "6dc29759-3305-4f87-9a8e-957b445f4f7e",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:31:42.328Z",
      "lastMessageAt": "2025-05-27T23:31:42.328Z",
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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
      "organizationId": null,
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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

**⏱️ Duration:** 1027.1 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (721.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 721.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/533d274d-9a26-4685-9911-e9a18edd1dae (8.9ms)</summary>

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
    "date": "Mon, 02 Jun 2025 00:00:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 8.9 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (654.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA",
    "X-Organization-Id": "b9503827-a610-4c30-9a2b-426a1aec19bc"
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
    "date": "Mon, 02 Jun 2025 00:00:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 654.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/533d274d-9a26-4685-9911-e9a18edd1dae (675.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA"
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
    "date": "Mon, 02 Jun 2025 00:00:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 675.3 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/cdac7209-7478-4bfa-8733-ec0b092b0af6 (657.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA"
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
    "date": "Mon, 02 Jun 2025 00:00:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 657.6 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/b9503827-a610-4c30-9a2b-426a1aec19bc (1323.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA"
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
    "date": "Mon, 02 Jun 2025 00:00:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1323.6 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/7158bdde-03b4-43b0-900a-05f820c053fd (1188.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyMzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjIzOTEsImV4cCI6MTc0ODgyNTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IUutneZ4-U06QwIDWq-rjQJn0i9_ZmO86msnBoFFqU8-9TgSLmnj2LOb5PIIp_YLnvfDKf0TtFV0riBLf4ZIrWPnMZ852y4AgER9pnx583LzRFd8KJ-Q5-FX1BG3lwKUBYHjuEZT8NzUXWePcKaqghNG6zEtjON4mCkM6nZ4KmFKp5Ck8IIM_2EvoCMowhmYQt-5e3Fb9omD_sBa_N0DKFlpG9lD4IepGvqMQ9K5Zg-Dmmiw6H3bWLMapKCvN6Hrwz6VhWZYkUxD86eiXMykQ1YQmPcaT4Y4eHUvFGB2xDqqwdYeLdI1xE3zox1KSELUSH8OsCD4v9gjb4TR7kRiSA"
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
    "date": "Mon, 02 Jun 2025 00:00:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1188.5 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (269.7ms)</summary>

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
    "etag": "W/\"640-+7hgIIGH+tYg/qgAsOYk+Nhky6s\"",
    "date": "Mon, 02 Jun 2025 00:00:36 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0MzYsImV4cCI6MTc0ODgyNjAzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.h75XD9R58r18QyxVWp4VO1WCJcTTO5Lc9_toh7ojfALQEiGBFqoBJkHkmOsJkUvp9EP9oUm9AHzAKFUej3E8XJKBJj03OaYR4ZIqJcV1eQKICdD2ZRk2YzsMwdDWT0ZXgNAN17yrLSW6jSvma_62d2vvotuq3Me9xoEv9Jha9xjs4nM2aZIhUekNm76ly_iqhL6tRq3Avd_nONwYg9mYL-RHrsMka4AK1C-I7xqrklAlxY-49w4UrXOCpP8hOB99W5jA0YWYR3NAZzZQZwBRkpsuSrBaYQZh9jSKv5PTl9l7iMW6h-yVr4lzUgrnFMg5MC539yg6mOpBe3YkHTebZQ",
      "refreshToken": "AMf-vBwxIJv6D2onILdtiXhW78sDDUXL8tUerhojhnuDJIJtLEig6uFF7ukrKydFS5sjSrGtHNUeo_xfc2AOy_a4qIu9IEDGmIUtEfHPJ_P2rc-BuSnHnuIUguos5agvBwDF1-xhkzrTmzNZ0u5bE9MQBn_7OJ3UNsAcCojeNfHn-7hDRElT1zo4ORNKyte65tnm2q9Zgrj2-PA3ur2ICj01A41uMHB3_6pnwDwlYIrdOFwnBPfWbpmQV5P98kCFRjMi-aD7XGzu",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 269.7 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/IYGzmlpxGrXrUx5W1XqO5bc7tgI2 (1687.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0MzYsImV4cCI6MTc0ODgyNjAzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.h75XD9R58r18QyxVWp4VO1WCJcTTO5Lc9_toh7ojfALQEiGBFqoBJkHkmOsJkUvp9EP9oUm9AHzAKFUej3E8XJKBJj03OaYR4ZIqJcV1eQKICdD2ZRk2YzsMwdDWT0ZXgNAN17yrLSW6jSvma_62d2vvotuq3Me9xoEv9Jha9xjs4nM2aZIhUekNm76ly_iqhL6tRq3Avd_nONwYg9mYL-RHrsMka4AK1C-I7xqrklAlxY-49w4UrXOCpP8hOB99W5jA0YWYR3NAZzZQZwBRkpsuSrBaYQZh9jSKv5PTl9l7iMW6h-yVr4lzUgrnFMg5MC539yg6mOpBe3YkHTebZQ"
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
    "date": "Mon, 02 Jun 2025 00:00:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1687.9 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (289.0ms)</summary>

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
    "etag": "W/\"640-VLyc5wSxhCWMGM7bTiZMn3GlXno\"",
    "date": "Mon, 02 Jun 2025 00:00:38 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0MzgsImV4cCI6MTc0ODgyNjAzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F5eCWYsAWijY2kXyBydqyt52a7KaBDLkduWj7auLLbe_JayD9UrtY50-Q9IbCah-P1f0TwlANgw1jMa0OVOUw6SlRrFWtrHh2nza0vG94pUgaBgwkbLPQBJ3zu-aUCegckEMsl8Gloj-w1iexyDYdQYWsagPN2mbv4ro0NHfwLfv9Z2oH6n-TCEUOaMG-xDHUzECLAC2LxBe0UUXAJUJaU9r3lA_ejmIUUU8qtCAWCDZvvf-WzMn63rxYgJ35w_KuEys1yVWarCZ4cpP5TwKy4nUsTQxKuzwLPTg-rIF2NOun0Ws5wj_x1Lqx1dLwiXkuo2GB6IoVxh1r5IlE5BVLA",
      "refreshToken": "AMf-vByxJst7__ZCP3uUmL4IEghw61m4auPs4nF5sR8sH2i8UMsPcSvEGhYrVZGwG6Vx5aT2DaZGGyhfMHWRaW0Ltr0LIai5K7iqVdvzIF2w1xYzoQQzqguiRl1u7XxpDQRX3EWDpULdV5k7P7zFKwwg0MfkPSFBT5j8y4apAwp0Z3zFaJk93a3JvkpfPnaHItdxt5o-d_CMFZ2s-WeKX6tpF-gy2aGC6WlvIYVeHl9J6WjzKxx04L2LFcQsggjduygoriXIJYBs",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 289.0 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/Sqaj5wT0JKfDcYPj9M2LSn6KZUt2 (1280.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0MzgsImV4cCI6MTc0ODgyNjAzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F5eCWYsAWijY2kXyBydqyt52a7KaBDLkduWj7auLLbe_JayD9UrtY50-Q9IbCah-P1f0TwlANgw1jMa0OVOUw6SlRrFWtrHh2nza0vG94pUgaBgwkbLPQBJ3zu-aUCegckEMsl8Gloj-w1iexyDYdQYWsagPN2mbv4ro0NHfwLfv9Z2oH6n-TCEUOaMG-xDHUzECLAC2LxBe0UUXAJUJaU9r3lA_ejmIUUU8qtCAWCDZvvf-WzMn63rxYgJ35w_KuEys1yVWarCZ4cpP5TwKy4nUsTQxKuzwLPTg-rIF2NOun0Ws5wj_x1Lqx1dLwiXkuo2GB6IoVxh1r5IlE5BVLA"
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
    "date": "Mon, 02 Jun 2025 00:00:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1280.8 ms  

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
