# E2E Test Report: conversations-tests

**Date:** 6/2/2025  
**Time:** 1:36:37 AM  
**Duration:** 43.75s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 0.95s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.61s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.50s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 0.95s | Should create group conversation with multiple participants |
| ✅ Should get conversation by ID for participant | PASSED | 0.81s | Should get conversation by ID for participant |
| ✅ Should fail to get conversation by ID for non-participant | PASSED | 1.55s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 0.85s | Should get conversations for user |
| ✅ Should fail to get conversations for other user without permission | PASSED | 10.01s | Should fail to get conversations for other user without permission |
| ✅ Should get conversation with invalid ID format | PASSED | 0.76s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 0.79s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 0.82s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.85s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.78s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 0.75s | Should unblock conversation (moderator) |
| ✅ Should fail to block conversation as regular user | PASSED | 0.44s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.61s | Should permanently delete conversation (admin) |
| ✅ Should fail to permanently delete conversation as regular user | PASSED | 0.44s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 1.01s | Should get all conversations (admin) |
| ✅ Should fail to get all conversations as regular user | PASSED | 0.54s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 0.92s | Should create conversation in specific organization |
| ✅ Should not access conversation from different organization | PASSED | 1.62s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.96s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 0.93s | Super admin should access conversations across organizations |
| ✅ Should handle non-existent conversation ID | PASSED | 0.59s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.55s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (953.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "etag": "W/\"144-/0Pogu8lE0f4DcPJpFSJ7IN1pUY\"",
    "date": "Sun, 01 Jun 2025 23:36:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "691047d4-e9a4-4239-a49c-97b2b7a4dfaa",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:36:01.048Z",
    "lastMessageAt": "2025-06-01T23:36:01.048Z",
    "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
    ]
  }
}
```

**⏱️ Duration:** 953.7 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (612.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 612.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (502.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 502.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (947.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1",
      "c41Jw5sC7CXWEjMNfDjVhuKTyTF3"
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
    "etag": "W/\"168-1MsRXqMEc543RJ9keFwj+LAO19E\"",
    "date": "Sun, 01 Jun 2025 23:36:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c8841108-8fe6-4cf4-bb76-593c0b671910",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-06-01T23:36:03.119Z",
    "lastMessageAt": "2025-06-01T23:36:03.119Z",
    "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1",
      "c41Jw5sC7CXWEjMNfDjVhuKTyTF3"
    ]
  }
}
```

**⏱️ Duration:** 947.2 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/691047d4-e9a4-4239-a49c-97b2b7a4dfaa (809.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "etag": "W/\"152-R5qi5Lc4QMThpFhu7eQbulvs+2Q\"",
    "date": "Sun, 01 Jun 2025 23:36:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "691047d4-e9a4-4239-a49c-97b2b7a4dfaa",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:36:01.048Z",
    "lastMessageAt": "2025-06-01T23:36:01.048Z",
    "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 809.9 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (907.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "etag": "W/\"147-kfZ2x5D8QK/3rP/2g4VpgmdWjV4\"",
    "date": "Sun, 01 Jun 2025 23:36:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0595a672-cd73-48b9-a156-c92fe4cfe9e5",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:36:04.847Z",
    "lastMessageAt": "2025-06-01T23:36:04.847Z",
    "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
    ]
  }
}
```

**⏱️ Duration:** 907.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/0595a672-cd73-48b9-a156-c92fe4cfe9e5 (640.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NywidXNlcl9pZCI6ImM0MUp3NXNDN0NYV0VqTU5mRGpWaHVLVHlURjMiLCJzdWIiOiJjNDFKdzVzQzdDWFdFak1OZkRqVmh1S1R5VEYzIiwiaWF0IjoxNzQ4ODIwOTU3LCJleHAiOjE3NDg4MjQ1NTcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMDk1NjYzOEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIwOTU2NjM4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.AU7meROwRaoNEypGurlF0Z8qfaojHGLUrEYbLvX1y2kO9g_J0c39h_h7gLQ6OAPq6uir2cTlYVCtYmkW5NMPQ2QyThrwH5I27K7FBX2_gblre7WDBIjcVVGeFKkbPl57n3f1ioQ9KEqddIvG10ZN8Mr_Yh6GfRg2FQ7bI9PcO6R88YyzeCsJkoprafZVqQyxCxK6EP0hjLd9uajFLayQnHL5rboJX7LcDsi8KX-1PYqwmjV9PkuoR-SWFkDywbn-y6d9XMYeS-Bw6qa3iAy2c0IBB2X6mKKOotMOQWFyuk8miLfeFPChIpbMAk5UNt_jF9zjTQa-apo_tw5-JfiZ3Q",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 640.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/gM8oNHYbdyX6bVweFfN9Yy9EeGl1 (853.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "etag": "W/\"421-UmV5AlxKBGJY55vq18TaE59hMPQ\"",
    "date": "Sun, 01 Jun 2025 23:36:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "0595a672-cd73-48b9-a156-c92fe4cfe9e5",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:04.847Z",
      "lastMessageAt": "2025-06-01T23:36:04.847Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
      ],
      "messages": []
    },
    {
      "id": "c8841108-8fe6-4cf4-bb76-593c0b671910",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-01T23:36:03.119Z",
      "lastMessageAt": "2025-06-01T23:36:03.119Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1",
        "c41Jw5sC7CXWEjMNfDjVhuKTyTF3"
      ],
      "messages": []
    },
    {
      "id": "691047d4-e9a4-4239-a49c-97b2b7a4dfaa",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:01.048Z",
      "lastMessageAt": "2025-06-01T23:36:01.048Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 853.3 ms  

</details>


---

### Test: Should fail to get conversations for other user without permission
**Status:** ✅ PASSED  
**Duration:** 10.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10009.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10009.7 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


**Console Output:**
```
ℹ️ Request timed out - this is acceptable as the server rejected the request
```

---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (763.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 763.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/691047d4-e9a4-4239-a49c-97b2b7a4dfaa/soft-delete (789.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "userId": "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "date": "Sun, 01 Jun 2025 23:36:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 789.9 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/691047d4-e9a4-4239-a49c-97b2b7a4dfaa/hide (816.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "userId": "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "date": "Sun, 01 Jun 2025 23:36:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 816.7 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/691047d4-e9a4-4239-a49c-97b2b7a4dfaa/unhide (850.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "userId": "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "date": "Sun, 01 Jun 2025 23:36:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 850.3 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.78s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/c8841108-8fe6-4cf4-bb76-593c0b671910/block (783.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NywidXNlcl9pZCI6ImM0MUp3NXNDN0NYV0VqTU5mRGpWaHVLVHlURjMiLCJzdWIiOiJjNDFKdzVzQzdDWFdFak1OZkRqVmh1S1R5VEYzIiwiaWF0IjoxNzQ4ODIwOTU3LCJleHAiOjE3NDg4MjQ1NTcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMDk1NjYzOEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIwOTU2NjM4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.AU7meROwRaoNEypGurlF0Z8qfaojHGLUrEYbLvX1y2kO9g_J0c39h_h7gLQ6OAPq6uir2cTlYVCtYmkW5NMPQ2QyThrwH5I27K7FBX2_gblre7WDBIjcVVGeFKkbPl57n3f1ioQ9KEqddIvG10ZN8Mr_Yh6GfRg2FQ7bI9PcO6R88YyzeCsJkoprafZVqQyxCxK6EP0hjLd9uajFLayQnHL5rboJX7LcDsi8KX-1PYqwmjV9PkuoR-SWFkDywbn-y6d9XMYeS-Bw6qa3iAy2c0IBB2X6mKKOotMOQWFyuk8miLfeFPChIpbMAk5UNt_jF9zjTQa-apo_tw5-JfiZ3Q",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "userId": "c41Jw5sC7CXWEjMNfDjVhuKTyTF3"
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
    "date": "Sun, 01 Jun 2025 23:36:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 783.6 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/c8841108-8fe6-4cf4-bb76-593c0b671910/unblock (750.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NywidXNlcl9pZCI6ImM0MUp3NXNDN0NYV0VqTU5mRGpWaHVLVHlURjMiLCJzdWIiOiJjNDFKdzVzQzdDWFdFak1OZkRqVmh1S1R5VEYzIiwiaWF0IjoxNzQ4ODIwOTU3LCJleHAiOjE3NDg4MjQ1NTcsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMDk1NjYzOEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIwOTU2NjM4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.AU7meROwRaoNEypGurlF0Z8qfaojHGLUrEYbLvX1y2kO9g_J0c39h_h7gLQ6OAPq6uir2cTlYVCtYmkW5NMPQ2QyThrwH5I27K7FBX2_gblre7WDBIjcVVGeFKkbPl57n3f1ioQ9KEqddIvG10ZN8Mr_Yh6GfRg2FQ7bI9PcO6R88YyzeCsJkoprafZVqQyxCxK6EP0hjLd9uajFLayQnHL5rboJX7LcDsi8KX-1PYqwmjV9PkuoR-SWFkDywbn-y6d9XMYeS-Bw6qa3iAy2c0IBB2X6mKKOotMOQWFyuk8miLfeFPChIpbMAk5UNt_jF9zjTQa-apo_tw5-JfiZ3Q",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "userId": "c41Jw5sC7CXWEjMNfDjVhuKTyTF3"
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
    "date": "Sun, 01 Jun 2025 23:36:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 750.2 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/691047d4-e9a4-4239-a49c-97b2b7a4dfaa/block (436.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "userId": "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "date": "Sun, 01 Jun 2025 23:36:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 436.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1006.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "etag": "W/\"149-yzNr2h31+dmW54NrjrD6ShFb+0Q\"",
    "date": "Sun, 01 Jun 2025 23:36:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6b70f361-ec82-46b9-885e-48e6565da834",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:36:22.578Z",
    "lastMessageAt": "2025-06-01T23:36:22.578Z",
    "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
    ]
  }
}
```

**⏱️ Duration:** 1006.3 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/6b70f361-ec82-46b9-885e-48e6565da834 (603.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 603.2 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/691047d4-e9a4-4239-a49c-97b2b7a4dfaa (435.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 435.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (1007.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "content-length": "11348",
    "etag": "W/\"2c54-jB4OO79y3EXw0SZsxg9GQ6XZKEU\"",
    "date": "Sun, 01 Jun 2025 23:36:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "0595a672-cd73-48b9-a156-c92fe4cfe9e5",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:04.847Z",
      "lastMessageAt": "2025-06-01T23:36:04.847Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "gM8oNHYbdyX6bVweFfN9Yy9EeGl1",
          "email": "conversations-regular-1748820955470@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "c8841108-8fe6-4cf4-bb76-593c0b671910",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-01T23:36:03.119Z",
      "lastMessageAt": "2025-06-01T23:36:03.119Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "gM8oNHYbdyX6bVweFfN9Yy9EeGl1",
          "email": "conversations-regular-1748820955470@example.com",
          "name": "Regular User"
        },
        {
          "id": "c41Jw5sC7CXWEjMNfDjVhuKTyTF3",
          "email": "conversations-moderator-1748820956638@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "691047d4-e9a4-4239-a49c-97b2b7a4dfaa",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:01.048Z",
      "lastMessageAt": "2025-06-01T23:36:01.048Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "gM8oNHYbdyX6bVweFfN9Yy9EeGl1",
          "email": "conversations-regular-1748820955470@example.com",
          "name": "Regular User"
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

**⏱️ Duration:** 1007.9 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (540.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk1NiwidXNlcl9pZCI6ImdNOG9OSFliZHlYNmJWd2VGZk45WXk5RWVHbDEiLCJzdWIiOiJnTThvTkhZYmR5WDZiVndlRmZOOVl5OUVlR2wxIiwiaWF0IjoxNzQ4ODIwOTU2LCJleHAiOjE3NDg4MjQ1NTYsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjA5NTU0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.m402YcY9aJ40NOCYt9IJMr1DSIQifF3uP7IDlYtY0ig22-V7Av1LSTMPFHzSAvFtDyTtOB8laccZGwJLHhX_T5pyKXgLXg6PV03EnIjVOCEZZROH27IKdID_xYEwhM-xwg3boYiwQnCCEuuPNMnT6t4VXKPzrogKzqPP-oQglfw8QBXEu59snx-sNYGs78poaGowi3iQz_tCae4D-ZCxhViKhxLcYGee76zJxYMPhmdUFgM17rIQdHpcvlPSGb0q5_eP7yy-4d6e2Es9WH2JXimlFZO8WW9wzzrsPgip6FJWftPjud9EgS1s0egW3XrMaFa8fRXsYEzHG29dXKCNyw",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 540.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (915.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "1d745378-35a8-4eef-9fc2-04a6053e5ffc"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "etag": "W/\"14c-DcPOqo84GW48Dh6OWHJM/e9fxc8\"",
    "date": "Sun, 01 Jun 2025 23:36:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "10ccf220-dc68-499f-874f-c2a979bfc661",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:36:26.080Z",
    "lastMessageAt": "2025-06-01T23:36:26.080Z",
    "organizationId": "1d745378-35a8-4eef-9fc2-04a6053e5ffc",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
    ]
  }
}
```

**⏱️ Duration:** 915.5 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ✅ PASSED  
**Duration:** 1.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (923.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
    "etag": "W/\"144-R/wj0a72DgC/jRKb9e+aML0qAQ0\"",
    "date": "Sun, 01 Jun 2025 23:36:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "53999d15-f025-4d65-b38c-73b7f4f5a343",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:36:27.004Z",
    "lastMessageAt": "2025-06-01T23:36:27.004Z",
    "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
    ]
  }
}
```

**⏱️ Duration:** 923.2 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/53999d15-f025-4d65-b38c-73b7f4f5a343 (692.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "1d745378-35a8-4eef-9fc2-04a6053e5ffc"
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
    "etag": "W/\"152-E+sA7qtr5Hgkc9gmF+XY7ZmnehM\"",
    "date": "Sun, 01 Jun 2025 23:36:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "53999d15-f025-4d65-b38c-73b7f4f5a343",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:36:27.004Z",
    "lastMessageAt": "2025-06-01T23:36:27.004Z",
    "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 692.9 ms  

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

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (958.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "etag": "W/\"574-yg6eKzX81/T7r4znHPpM4jZgPNo\"",
    "date": "Sun, 01 Jun 2025 23:36:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "53999d15-f025-4d65-b38c-73b7f4f5a343",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:27.004Z",
      "lastMessageAt": "2025-06-01T23:36:27.004Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
      ],
      "messages": []
    },
    {
      "id": "c8841108-8fe6-4cf4-bb76-593c0b671910",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-01T23:36:03.119Z",
      "lastMessageAt": "2025-06-01T23:36:03.119Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1",
        "c41Jw5sC7CXWEjMNfDjVhuKTyTF3"
      ],
      "messages": []
    },
    {
      "id": "691047d4-e9a4-4239-a49c-97b2b7a4dfaa",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:01.048Z",
      "lastMessageAt": "2025-06-01T23:36:01.048Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 958.6 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (925.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ"
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
    "content-length": "9794",
    "etag": "W/\"2642-tibs1uy4ND0ooPPRD+jQTE4ZMM8\"",
    "date": "Sun, 01 Jun 2025 23:36:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "53999d15-f025-4d65-b38c-73b7f4f5a343",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:27.004Z",
      "lastMessageAt": "2025-06-01T23:36:27.004Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
      "organizationId": "1d745378-35a8-4eef-9fc2-04a6053e5ffc",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
      ],
      "messages": []
    },
    {
      "id": "c8841108-8fe6-4cf4-bb76-593c0b671910",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-01T23:36:03.119Z",
      "lastMessageAt": "2025-06-01T23:36:03.119Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1",
        "c41Jw5sC7CXWEjMNfDjVhuKTyTF3"
      ],
      "messages": []
    },
    {
      "id": "691047d4-e9a4-4239-a49c-97b2b7a4dfaa",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:36:01.048Z",
      "lastMessageAt": "2025-06-01T23:36:01.048Z",
      "organizationId": "86d66dcf-3c82-4c7f-aef0-2323acf374ff",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "gM8oNHYbdyX6bVweFfN9Yy9EeGl1"
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

**⏱️ Duration:** 925.1 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (587.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 587.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/691047d4-e9a4-4239-a49c-97b2b7a4dfaa (6.7ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:36:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 6.7 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (547.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ",
    "X-Organization-Id": "86d66dcf-3c82-4c7f-aef0-2323acf374ff"
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
    "date": "Sun, 01 Jun 2025 23:36:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 547.0 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/691047d4-e9a4-4239-a49c-97b2b7a4dfaa (546.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ"
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
    "date": "Sun, 01 Jun 2025 23:36:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 546.3 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/c8841108-8fe6-4cf4-bb76-593c0b671910 (546.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ"
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
    "date": "Sun, 01 Jun 2025 23:36:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 546.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/86d66dcf-3c82-4c7f-aef0-2323acf374ff (1171.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ"
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
    "date": "Sun, 01 Jun 2025 23:36:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1171.6 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/1d745378-35a8-4eef-9fc2-04a6053e5ffc (1007.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTQsImV4cCI6MTc0ODgyNDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lUJBIZiXIoLBJIMw8vxFpJM9W2tnMFXfeag2VvZYExRtNyG3t9ChCJYjttizlvjGdeiSu76Woyr7qbAZzvzC6eZzs_QeGihXar0N3b_3BOpBZeoXX1FwjidxhS9R0KpTL4KMKZ0iX9t5Cz4b4muuevjKebj4EQPoJ4PVi8iii3gTobOTKjzpwbgNzWuQ6qzzbf7txDQ-f6gwuGgm3mVOOVsm0PjTIcoRj1Msdz1rg-69wHa_W28ElyjC6iVpi-4jIyBJes0e6ifTQNtQm3hP3QJo3A-j2lHrDKhyL8Xq_jpYV5y-UEuKTv9LTPFC_aggJGk3NsL5fy6e-vZLEj9_eQ"
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
    "date": "Sun, 01 Jun 2025 23:36:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1007.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (272.5ms)</summary>

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
    "etag": "W/\"640-PhgpBqVpOCfQnfrj6aOah3091bc\"",
    "date": "Sun, 01 Jun 2025 23:36:34 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTQsImV4cCI6MTc0ODgyNDU5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Zhydg9rDhABmmlUqKl6O-YhMeaGCuz0i42c4F_XNxaUgfPDDaHuH_e84ZBQQJGiYrOlrWDCGJOIzG45KN0aZLB3M4afXcre38QO19uK14GTc_ITxcBk2Q4uRChN2x1aqxQu66OTkoNV0upzq2wLnZHpYqX7_b1ccTo0ucKcIE7B2uCjxJMQ76nAgi0pBBBNMJmjVY0PzE3sFK2skfzBiVhn6iN_Sr3jNZZYf9r3t-VU-MjAUKme4yBmgwJoOVbhpPd75O_lu855xASeo3LedZLBE_QJ4x4WkK_E8zDceld7z-W0u-RRLb8AieANdpA_dfCu9Dm5rSYO_jmTOyCP0Xg",
      "refreshToken": "AMf-vByt11b0ZbueJBqUelQ0LyfZ8OiNIU1B5azDHenyKY6MNCNqoWz-3IdwHVRfSyHW6BB3osF5wwYXBqUWYaW6UM9xay4X8CfAYXC456L-LyAjrNBmABI9Js2cTpnGE9cZfaH16sNTb2tTzTi67atFG24dovZ572POMdp9IyAeH8T12JHvKE81LgyjAF6h0q-4AeMc51iwiV1FAfzfEzsfgSecc6u5fY35w3G8Fl0hyIsGtWfaCYZgZvevRS9QQLnbZQqiAZ-w",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 272.5 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/gM8oNHYbdyX6bVweFfN9Yy9EeGl1 (1107.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTQsImV4cCI6MTc0ODgyNDU5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Zhydg9rDhABmmlUqKl6O-YhMeaGCuz0i42c4F_XNxaUgfPDDaHuH_e84ZBQQJGiYrOlrWDCGJOIzG45KN0aZLB3M4afXcre38QO19uK14GTc_ITxcBk2Q4uRChN2x1aqxQu66OTkoNV0upzq2wLnZHpYqX7_b1ccTo0ucKcIE7B2uCjxJMQ76nAgi0pBBBNMJmjVY0PzE3sFK2skfzBiVhn6iN_Sr3jNZZYf9r3t-VU-MjAUKme4yBmgwJoOVbhpPd75O_lu855xASeo3LedZLBE_QJ4x4WkK_E8zDceld7z-W0u-RRLb8AieANdpA_dfCu9Dm5rSYO_jmTOyCP0Xg"
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
    "date": "Sun, 01 Jun 2025 23:36:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1107.2 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (274.2ms)</summary>

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
    "etag": "W/\"640-sby0opY/83tQIHmrmz0OnJtPOGo\"",
    "date": "Sun, 01 Jun 2025 23:36:36 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTYsImV4cCI6MTc0ODgyNDU5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T1fiLhvwG-mzadRV81RNaBqlJsGTBMG554q5_rwkxmYLt3ZKoW-dX7aGXCbAwqufv7DODtHxUyqMaHHtb83iz-hsDgYTPgIxili9x4Cl0heKMkckF-ULMOrl3__UzyN4m9uEeencO4UcBA-9ScEZV5LZtdsWQe0UtAuxRvL6OhJ91sThpJnluoNgUwMaCJpqNMcD9RKUH_H5rj1XGP886N_ktA8T5Jsw2c4e2CVNSC2at8pRAu6MipdYXNgOFa-h2P6_SAeHsTS9EZKniApVs0nF85KzRtyxzqcqSU_m0_nphusp_vrArSbU3K3Y3t76UHvIL0pzcnO8uLiw6DIp-A",
      "refreshToken": "AMf-vBzHPTmYpMQB4qzHn9cQGFXwKbHUR2kvYk3IFABH5CQL1YdCxzuVr6gk5aoYhTMPsHZ_oJe6NOPPza3sH7yskn0Y7XG6iJ-oZzGEdUodvGmy_XjkCjlCwS7YvYYtjXTvPdX9rlX9_49Cw-Peio2bm1o8mOL-O-_f482ooF-pthmGXfH0qGHxmrXlQ-vBMEBsBEUJHVzew4foNwvvF0Eezot7O1pQXAABrBrUtuM4OyJWoPBPTy3md7YUU54GwHLh-5FdJvkR",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 274.2 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/c41Jw5sC7CXWEjMNfDjVhuKTyTF3 (1575.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTYsImV4cCI6MTc0ODgyNDU5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T1fiLhvwG-mzadRV81RNaBqlJsGTBMG554q5_rwkxmYLt3ZKoW-dX7aGXCbAwqufv7DODtHxUyqMaHHtb83iz-hsDgYTPgIxili9x4Cl0heKMkckF-ULMOrl3__UzyN4m9uEeencO4UcBA-9ScEZV5LZtdsWQe0UtAuxRvL6OhJ91sThpJnluoNgUwMaCJpqNMcD9RKUH_H5rj1XGP886N_ktA8T5Jsw2c4e2CVNSC2at8pRAu6MipdYXNgOFa-h2P6_SAeHsTS9EZKniApVs0nF85KzRtyxzqcqSU_m0_nphusp_vrArSbU3K3Y3t76UHvIL0pzcnO8uLiw6DIp-A"
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
    "date": "Sun, 01 Jun 2025 23:36:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1575.3 ms  

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
