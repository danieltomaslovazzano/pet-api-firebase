# E2E Test Report: conversations-tests

**Date:** 6/2/2025  
**Time:** 1:46:29 AM  
**Duration:** 43.54s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 1.03s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.61s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.49s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 0.96s | Should create group conversation with multiple participants |
| ✅ Should get conversation by ID for participant | PASSED | 0.77s | Should get conversation by ID for participant |
| ✅ Should fail to get conversation by ID for non-participant | PASSED | 1.60s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 0.94s | Should get conversations for user |
| ✅ Should fail to get conversations for other user without permission | PASSED | 10.01s | Should fail to get conversations for other user without permission |
| ✅ Should get conversation with invalid ID format | PASSED | 0.72s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 0.89s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 1.07s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.83s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.81s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 0.82s | Should unblock conversation (moderator) |
| ✅ Should fail to block conversation as regular user | PASSED | 0.53s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.55s | Should permanently delete conversation (admin) |
| ✅ Should fail to permanently delete conversation as regular user | PASSED | 0.44s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 1.03s | Should get all conversations (admin) |
| ✅ Should fail to get all conversations as regular user | PASSED | 0.45s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 0.90s | Should create conversation in specific organization |
| ✅ Should not access conversation from different organization | PASSED | 1.57s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.83s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 0.84s | Super admin should access conversations across organizations |
| ✅ Should handle non-existent conversation ID | PASSED | 0.56s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.56s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1030.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "etag": "W/\"144-BZltiRvvAuR3DWVHtskkgJVeWRY\"",
    "date": "Sun, 01 Jun 2025 23:45:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "fcc7361b-bcb6-4a61-aaa9-f6414051e44b",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:45:53.137Z",
    "lastMessageAt": "2025-06-01T23:45:53.137Z",
    "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
    ]
  }
}
```

**⏱️ Duration:** 1030.5 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (611.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:45:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 611.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (487.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:45:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 487.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 0.96s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (955.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2",
      "7aKDNrEHoXQ2tWMNuoSNx1FmKJy1"
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
    "etag": "W/\"168-A3xwswscSMIbtTqNrSynr7R8rNU\"",
    "date": "Sun, 01 Jun 2025 23:45:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f01caa1e-1c02-42fd-8da0-05b6e8c02618",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-06-01T23:45:55.245Z",
    "lastMessageAt": "2025-06-01T23:45:55.245Z",
    "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2",
      "7aKDNrEHoXQ2tWMNuoSNx1FmKJy1"
    ]
  }
}
```

**⏱️ Duration:** 955.3 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/fcc7361b-bcb6-4a61-aaa9-f6414051e44b (771.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "etag": "W/\"152-ajOrheATcAJan0IyCyF5MkCnVHI\"",
    "date": "Sun, 01 Jun 2025 23:45:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "fcc7361b-bcb6-4a61-aaa9-f6414051e44b",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:45:53.137Z",
    "lastMessageAt": "2025-06-01T23:45:53.137Z",
    "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 771.1 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (901.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "etag": "W/\"147-LDEQY3FJdiF/b31QZkzBzA9dkag\"",
    "date": "Sun, 01 Jun 2025 23:45:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ac382e75-8c39-4f25-a2a9-eb8d90760a2b",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:45:56.923Z",
    "lastMessageAt": "2025-06-01T23:45:56.923Z",
    "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
    ]
  }
}
```

**⏱️ Duration:** 901.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/ac382e75-8c39-4f25-a2a9-eb8d90760a2b (700.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OSwidXNlcl9pZCI6IjdhS0ROckVIb1hRMnRXTU51b1NOeDFGbUtKeTEiLCJzdWIiOiI3YUtETnJFSG9YUTJ0V01OdW9TTngxRm1LSnkxIiwiaWF0IjoxNzQ4ODIxNTQ5LCJleHAiOjE3NDg4MjUxNDksImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMTU0ODYzNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIxNTQ4NjM0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.FOpU9owoZWK3i33w8vc3bIJ4lu_smDlO6u7GcNxx6vnQAcCdZHlqb72QMN7vT5FgK4CVNzIMJeCwV6G3rmwb278WFkq1icovYAO4lFOuByK9nLQLfy0Md_BIITHiFPaPjwMBBf7xI95sSeBJEWXqnT8kOmKgkW479528966gFE3FXHLlFprI2NBRSCk_B2Dq_ilooSwfRvikhxvBOfuoMoCgrZc63SHAbHjQwfrO-KAR5cGPkfOMD3vhgyPHtHFQVlIu6-xOV8MJUIf3Ca-gxzSmU22kSITd28EA7RaVbnQIZNnR3g3akuG-R6PySash8ldJlQpicmS9aER8jJ4w-Q",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:45:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 700.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/9Qbtn1KuHTaATYVlEFCZCtmGXLk2 (940.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "etag": "W/\"421-A4OHSmUq8DfGvcbExI9XzI6FlJ8\"",
    "date": "Sun, 01 Jun 2025 23:45:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "ac382e75-8c39-4f25-a2a9-eb8d90760a2b",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:45:56.923Z",
      "lastMessageAt": "2025-06-01T23:45:56.923Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
      ],
      "messages": []
    },
    {
      "id": "f01caa1e-1c02-42fd-8da0-05b6e8c02618",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-01T23:45:55.245Z",
      "lastMessageAt": "2025-06-01T23:45:55.245Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2",
        "7aKDNrEHoXQ2tWMNuoSNx1FmKJy1"
      ],
      "messages": []
    },
    {
      "id": "fcc7361b-bcb6-4a61-aaa9-f6414051e44b",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:45:53.137Z",
      "lastMessageAt": "2025-06-01T23:45:53.137Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 940.2 ms  

</details>


---

### Test: Should fail to get conversations for other user without permission
**Status:** ✅ PASSED  
**Duration:** 10.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10004.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10004.6 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


**Console Output:**
```
ℹ️ Request timed out - this is acceptable as the server rejected the request
```

---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (722.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:46:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 722.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.89s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/fcc7361b-bcb6-4a61-aaa9-f6414051e44b/soft-delete (893.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "userId": "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "date": "Sun, 01 Jun 2025 23:46:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 893.3 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 1.07s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/fcc7361b-bcb6-4a61-aaa9-f6414051e44b/hide (1071.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "userId": "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "date": "Sun, 01 Jun 2025 23:46:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 1071.3 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/fcc7361b-bcb6-4a61-aaa9-f6414051e44b/unhide (824.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "userId": "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "date": "Sun, 01 Jun 2025 23:46:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 824.9 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/f01caa1e-1c02-42fd-8da0-05b6e8c02618/block (809.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OSwidXNlcl9pZCI6IjdhS0ROckVIb1hRMnRXTU51b1NOeDFGbUtKeTEiLCJzdWIiOiI3YUtETnJFSG9YUTJ0V01OdW9TTngxRm1LSnkxIiwiaWF0IjoxNzQ4ODIxNTQ5LCJleHAiOjE3NDg4MjUxNDksImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMTU0ODYzNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIxNTQ4NjM0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.FOpU9owoZWK3i33w8vc3bIJ4lu_smDlO6u7GcNxx6vnQAcCdZHlqb72QMN7vT5FgK4CVNzIMJeCwV6G3rmwb278WFkq1icovYAO4lFOuByK9nLQLfy0Md_BIITHiFPaPjwMBBf7xI95sSeBJEWXqnT8kOmKgkW479528966gFE3FXHLlFprI2NBRSCk_B2Dq_ilooSwfRvikhxvBOfuoMoCgrZc63SHAbHjQwfrO-KAR5cGPkfOMD3vhgyPHtHFQVlIu6-xOV8MJUIf3Ca-gxzSmU22kSITd28EA7RaVbnQIZNnR3g3akuG-R6PySash8ldJlQpicmS9aER8jJ4w-Q",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "userId": "7aKDNrEHoXQ2tWMNuoSNx1FmKJy1"
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
    "date": "Sun, 01 Jun 2025 23:46:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 809.5 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/f01caa1e-1c02-42fd-8da0-05b6e8c02618/unblock (824.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OSwidXNlcl9pZCI6IjdhS0ROckVIb1hRMnRXTU51b1NOeDFGbUtKeTEiLCJzdWIiOiI3YUtETnJFSG9YUTJ0V01OdW9TTngxRm1LSnkxIiwiaWF0IjoxNzQ4ODIxNTQ5LCJleHAiOjE3NDg4MjUxNDksImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODgyMTU0ODYzNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4ODIxNTQ4NjM0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.FOpU9owoZWK3i33w8vc3bIJ4lu_smDlO6u7GcNxx6vnQAcCdZHlqb72QMN7vT5FgK4CVNzIMJeCwV6G3rmwb278WFkq1icovYAO4lFOuByK9nLQLfy0Md_BIITHiFPaPjwMBBf7xI95sSeBJEWXqnT8kOmKgkW479528966gFE3FXHLlFprI2NBRSCk_B2Dq_ilooSwfRvikhxvBOfuoMoCgrZc63SHAbHjQwfrO-KAR5cGPkfOMD3vhgyPHtHFQVlIu6-xOV8MJUIf3Ca-gxzSmU22kSITd28EA7RaVbnQIZNnR3g3akuG-R6PySash8ldJlQpicmS9aER8jJ4w-Q",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "userId": "7aKDNrEHoXQ2tWMNuoSNx1FmKJy1"
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
    "date": "Sun, 01 Jun 2025 23:46:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 824.4 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/fcc7361b-bcb6-4a61-aaa9-f6414051e44b/block (529.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "userId": "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "date": "Sun, 01 Jun 2025 23:46:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 529.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (950.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "etag": "W/\"149-BxwUVjcwQ8SW4vEuGRZwRrLX5kw\"",
    "date": "Sun, 01 Jun 2025 23:46:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "bcdb72b0-8d52-4322-956b-cc6624414919",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:46:15.213Z",
    "lastMessageAt": "2025-06-01T23:46:15.213Z",
    "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
    ]
  }
}
```

**⏱️ Duration:** 950.5 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/bcdb72b0-8d52-4322-956b-cc6624414919 (602.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:46:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 602.3 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/fcc7361b-bcb6-4a61-aaa9-f6414051e44b (442.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:46:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 442.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (1033.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "content-length": "12358",
    "etag": "W/\"3046-Pjfot8D8uxB/MTMLHoMMEOGjB9A\"",
    "date": "Sun, 01 Jun 2025 23:46:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "ac382e75-8c39-4f25-a2a9-eb8d90760a2b",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:45:56.923Z",
      "lastMessageAt": "2025-06-01T23:45:56.923Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "9Qbtn1KuHTaATYVlEFCZCtmGXLk2",
          "email": "conversations-regular-1748821547505@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "f01caa1e-1c02-42fd-8da0-05b6e8c02618",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-01T23:45:55.245Z",
      "lastMessageAt": "2025-06-01T23:45:55.245Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "9Qbtn1KuHTaATYVlEFCZCtmGXLk2",
          "email": "conversations-regular-1748821547505@example.com",
          "name": "Regular User"
        },
        {
          "id": "7aKDNrEHoXQ2tWMNuoSNx1FmKJy1",
          "email": "conversations-moderator-1748821548634@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "fcc7361b-bcb6-4a61-aaa9-f6414051e44b",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:45:53.137Z",
      "lastMessageAt": "2025-06-01T23:45:53.137Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "9Qbtn1KuHTaATYVlEFCZCtmGXLk2",
          "email": "conversations-regular-1748821547505@example.com",
          "name": "Regular User"
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

**⏱️ Duration:** 1033.4 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (445.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU0OCwidXNlcl9pZCI6IjlRYnRuMUt1SFRhQVRZVmxFRkNaQ3RtR1hMazIiLCJzdWIiOiI5UWJ0bjFLdUhUYUFUWVZsRUZDWkN0bUdYTGsyIiwiaWF0IjoxNzQ4ODIxNTQ4LCJleHAiOjE3NDg4MjUxNDgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDg4MjE1NDc1MDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XXAPWQSZbfgdxEZAaXVpRGOsJ2USCQi-pxOjauSVcQ6vjf2rvazt07Ftf9suSjzrsNLuogyL02Iu2K6MobKnRGpdVZZuoiaVQvdP-SiJP67oUnAZ5LAFJLf6vIFqfPhUeaS8wdwhha0EoFHdzYNhy7OUp-ZS1BJNRhEzzgKB5BX4Uw1qv1EgxciRwOhDRmVw_B0CQaemX0uGuylOLVjrEHGNFD1xQq_QLrJIXIAdOaUNAtBc2C7krL3e3x7_fuwf0UOmKuL1Cz--yYWL1aiZWITzk8l3qb6J_x1b208Wp40yC3_h3bykmvMGmhW-h7u-9KpA-jnfnThcDDeC9PENyw",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:46:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 445.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (893.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "66ac277a-364b-424b-9fb4-4ab51000318e"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "etag": "W/\"14c-BUrjjD2J6TKHFAM5m6n8wu0TOJA\"",
    "date": "Sun, 01 Jun 2025 23:46:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f115ae02-3094-4f29-9cd6-909e84a34af6",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:46:18.636Z",
    "lastMessageAt": "2025-06-01T23:46:18.636Z",
    "organizationId": "66ac277a-364b-424b-9fb4-4ab51000318e",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
    ]
  }
}
```

**⏱️ Duration:** 893.9 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ✅ PASSED  
**Duration:** 1.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (874.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
    "etag": "W/\"144-z+lLwUpThAHTuB0Wglg8RRJG6ls\"",
    "date": "Sun, 01 Jun 2025 23:46:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "96a27878-ebb8-4d0b-be66-a1e5fdd66402",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:46:19.516Z",
    "lastMessageAt": "2025-06-01T23:46:19.516Z",
    "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
    ]
  }
}
```

**⏱️ Duration:** 874.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/96a27878-ebb8-4d0b-be66-a1e5fdd66402 (696.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "66ac277a-364b-424b-9fb4-4ab51000318e"
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
    "etag": "W/\"152-KTT7EPP/cADlEuJVbvujAu2F1RM\"",
    "date": "Sun, 01 Jun 2025 23:46:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "96a27878-ebb8-4d0b-be66-a1e5fdd66402",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:46:19.516Z",
    "lastMessageAt": "2025-06-01T23:46:19.516Z",
    "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 696.2 ms  

</details>


**Console Output:**
```
ℹ️ Request failed with network error - this is acceptable as the server rejected the request
```

---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (828.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "etag": "W/\"574-MulMUK3GgGOBz2XChbMpch2/WK4\"",
    "date": "Sun, 01 Jun 2025 23:46:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "96a27878-ebb8-4d0b-be66-a1e5fdd66402",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:46:19.516Z",
      "lastMessageAt": "2025-06-01T23:46:19.516Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
      ],
      "messages": []
    },
    {
      "id": "f01caa1e-1c02-42fd-8da0-05b6e8c02618",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-01T23:45:55.245Z",
      "lastMessageAt": "2025-06-01T23:45:55.245Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2",
        "7aKDNrEHoXQ2tWMNuoSNx1FmKJy1"
      ],
      "messages": []
    },
    {
      "id": "fcc7361b-bcb6-4a61-aaa9-f6414051e44b",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:45:53.137Z",
      "lastMessageAt": "2025-06-01T23:45:53.137Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 828.8 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 0.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (842.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA"
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
    "content-length": "10627",
    "etag": "W/\"2983-g7sN+2U6qyqDahfMXMG4FxjoCi8\"",
    "date": "Sun, 01 Jun 2025 23:46:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "96a27878-ebb8-4d0b-be66-a1e5fdd66402",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:46:19.516Z",
      "lastMessageAt": "2025-06-01T23:46:19.516Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
      "organizationId": "66ac277a-364b-424b-9fb4-4ab51000318e",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
      ],
      "messages": []
    },
    {
      "id": "f01caa1e-1c02-42fd-8da0-05b6e8c02618",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-06-01T23:45:55.245Z",
      "lastMessageAt": "2025-06-01T23:45:55.245Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2",
        "7aKDNrEHoXQ2tWMNuoSNx1FmKJy1"
      ],
      "messages": []
    },
    {
      "id": "fcc7361b-bcb6-4a61-aaa9-f6414051e44b",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-01T23:45:53.137Z",
      "lastMessageAt": "2025-06-01T23:45:53.137Z",
      "organizationId": "8a3e8632-ff98-467b-9e87-9eee705b3e38",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "9Qbtn1KuHTaATYVlEFCZCtmGXLk2"
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

**⏱️ Duration:** 842.0 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (555.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:46:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 555.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/fcc7361b-bcb6-4a61-aaa9-f6414051e44b (6.7ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:46:22 GMT",
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
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (559.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA",
    "X-Organization-Id": "8a3e8632-ff98-467b-9e87-9eee705b3e38"
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
    "date": "Sun, 01 Jun 2025 23:46:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 559.7 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/fcc7361b-bcb6-4a61-aaa9-f6414051e44b (661.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA"
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
    "date": "Sun, 01 Jun 2025 23:46:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 661.9 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/f01caa1e-1c02-42fd-8da0-05b6e8c02618 (544.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA"
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
    "date": "Sun, 01 Jun 2025 23:46:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 544.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/8a3e8632-ff98-467b-9e87-9eee705b3e38 (1159.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA"
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
    "date": "Sun, 01 Jun 2025 23:46:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1159.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/66ac277a-364b-424b-9fb4-4ab51000318e (1155.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1NDYsImV4cCI6MTc0ODgyNTE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EQmvA-W5BGzbJxNoWZUEEc3-BmmLOdbkAkv8dfuUHu7kWbPehUjD1ok2UX9GAtM5FH-42XNPW4_b7yqiJpJhUpxSthF6zDtpPLOep0SkEq3Vs1s3tdVe6vslyCNqkk1KszX_p-BVceLaZsHULBmCp-L3UDgQHCZhpnplZf3uEuQ1mKVDxQv9qQX-tLZNHGeus4pyh-fg_O-nsefI57tVRawc_WcqfUOsfqh2ZXYJkXaUNgF93jnqq1imLvH45WqQuLHH1Fbf3q8CJoWhmxNKRZ3gUD8Kpvf1HFwCyVrhIjVMqdGXSDywJXxa_nqRyn0FzUDgnYsUFWc_Ypt40S-3MA"
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
    "date": "Sun, 01 Jun 2025 23:46:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1155.4 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (304.3ms)</summary>

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
    "etag": "W/\"640-p6LKP8bHu53NK7NZzXO4fV6wQ/o\"",
    "date": "Sun, 01 Jun 2025 23:46:27 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1ODcsImV4cCI6MTc0ODgyNTE4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.d7tqdwraTv8fvhZNxeftu5yCMXjqV1fFQtXQ7LxmRPAbNtXDI1SkGv28aR6Nik8KSlX_ercsX2dy_YMLf_BH8PMCzsB5Go-9SrnVgfsDCozdA8QXM2Otq6iZI9tp15IuslLZllc8DucDeRU-zCy_AR6W110cfurlHMZvxPvdZ87fzWLc_Admc5MXhLF8yMjY-jBJNeu1rmjBfkYMEeiGCbfr90kCdkS_3K3uwpNs_yOL4acBVa9PkLZuReiYSPv9CoCHqx8WG1CV1OhAKLf_tFlFzpo2N0z1nY2p2SRciEeIn11WshExDLnT_hVOdW4WCR4-p8k3bzO40SynKgKoEw",
      "refreshToken": "AMf-vBxx1hZpNz2tfcsWALKyXSzkavn_bm49G3FERywIl94qxAKP9031EyATlaMMaHpyH_uhVXhiGIe0qPTX8sfhed380lwvM5lVkIavi0ZNIcB283A5hYRtqJH5k_WsBcbJZq5D0MxO0Q0Yiff-0PkeCAHlddy8ataXbm9dA35CNowNQkEecGWs4jQi8LdFgWu_yxf35bdaiSqDrgMNd9DBhdx5qgSzu9to0YtvcjI3FPEDxkVh58jBBgao8UHxqCmAkWnOsEwS",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 304.3 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/9Qbtn1KuHTaATYVlEFCZCtmGXLk2 (1247.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1ODcsImV4cCI6MTc0ODgyNTE4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.d7tqdwraTv8fvhZNxeftu5yCMXjqV1fFQtXQ7LxmRPAbNtXDI1SkGv28aR6Nik8KSlX_ercsX2dy_YMLf_BH8PMCzsB5Go-9SrnVgfsDCozdA8QXM2Otq6iZI9tp15IuslLZllc8DucDeRU-zCy_AR6W110cfurlHMZvxPvdZ87fzWLc_Admc5MXhLF8yMjY-jBJNeu1rmjBfkYMEeiGCbfr90kCdkS_3K3uwpNs_yOL4acBVa9PkLZuReiYSPv9CoCHqx8WG1CV1OhAKLf_tFlFzpo2N0z1nY2p2SRciEeIn11WshExDLnT_hVOdW4WCR4-p8k3bzO40SynKgKoEw"
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
    "date": "Sun, 01 Jun 2025 23:46:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1247.7 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (245.3ms)</summary>

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
    "etag": "W/\"640-hVOXhtnrscjVVSjj2HXHd5PGRhA\"",
    "date": "Sun, 01 Jun 2025 23:46:28 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1ODgsImV4cCI6MTc0ODgyNTE4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gqvjmreRftv9LC02GxqicFVRWGcXDENt1Bfz6K9P6vvrJ1M7ZhkoHNRgmP9haQBraDe_6ajLaWGCXHwYsMSgwjyJGn4vbJWn6F39hSEKFVPsjQcpfxo9R0DI_6nzICsFhCuU5z4rwOyXrE0iWgIwr3KvL89ufetdn0MBuhIUswp-MwtwPNFsCDJQut4lr_3qIhZKIydtteO-Oqndm-8yhruJL5yru6ygTZEz1EoLPnrh_9FVQGil9U7Mz4LQjYl2NE2bOhCfJBexBHXQ-V1UFNU-i9zle9t9L7OaCjn8kEqDT_z1PxWl9v2E3nAb5SBb5XJ74f0eRCRekSWNLbGrlg",
      "refreshToken": "AMf-vBx8NMMubHvmK9ehGzH97EW4mL1Z5gfeGEqpqtTfIko62qeK3D3FTYMOFcC9iT5aH_j_xgKKRC2XCA9aiT5A5oCMVDdYYhahbDeQV9Ctd2QvBAhnJBSdeJQrnh3nILpysLfBHtZipaO-h5Qs_AVfkb2BM_84i3_lyVn_k-K_ERk7idZpeKfzH3dKomavBEEQQqDOCX6XmGxLfKb9p0HscqDexUjBxybLQLGoVolsT1-NzIKlYqtX2Mkejg972fu0a9ePIAo1",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 245.3 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/7aKDNrEHoXQ2tWMNuoSNx1FmKJy1 (1089.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1ODgsImV4cCI6MTc0ODgyNTE4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gqvjmreRftv9LC02GxqicFVRWGcXDENt1Bfz6K9P6vvrJ1M7ZhkoHNRgmP9haQBraDe_6ajLaWGCXHwYsMSgwjyJGn4vbJWn6F39hSEKFVPsjQcpfxo9R0DI_6nzICsFhCuU5z4rwOyXrE0iWgIwr3KvL89ufetdn0MBuhIUswp-MwtwPNFsCDJQut4lr_3qIhZKIydtteO-Oqndm-8yhruJL5yru6ygTZEz1EoLPnrh_9FVQGil9U7Mz4LQjYl2NE2bOhCfJBexBHXQ-V1UFNU-i9zle9t9L7OaCjn8kEqDT_z1PxWl9v2E3nAb5SBb5XJ74f0eRCRekSWNLbGrlg"
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
    "date": "Sun, 01 Jun 2025 23:46:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1089.9 ms  

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
