# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:13:40 AM  
**Duration:** 67.76s  
**Tests:** 25 total, 7 passed, 18 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 2.29s | Should create a conversation with valid participants |
| ❌ Should fail to create conversation with insufficient participants | FAILED | 0.67s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.62s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.22s | Should create group conversation with multiple participants |
| ❌ Should get conversation by ID for participant | FAILED | 0.58s | Should get conversation by ID for participant |
| ❌ Should fail to get conversation by ID for non-participant | FAILED | 1.53s | Should fail to get conversation by ID for non-participant |
| ❌ Should get conversations for user | FAILED | 0.49s | Should get conversations for user |
| ✅ Should get conversation with invalid ID format | PASSED | 0.84s | Should get conversation with invalid ID format |
| ❌ Should soft delete conversation for user | FAILED | 0.55s | Should soft delete conversation for user |
| ❌ Should hide conversation for user | FAILED | 0.47s | Should hide conversation for user |
| ❌ Should unhide conversation for user | FAILED | 0.53s | Should unhide conversation for user |
| ❌ Should block conversation (moderator) | FAILED | 0.62s | Should block conversation (moderator) |
| ❌ Should unblock conversation (moderator) | FAILED | 0.50s | Should unblock conversation (moderator) |
| ❌ Should fail to block conversation as regular user | FAILED | 0.49s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.84s | Should permanently delete conversation (admin) |
| ❌ Should fail to permanently delete conversation as regular user | FAILED | 0.60s | Should fail to permanently delete conversation as regular user |
| ❌ Should get all conversations (admin) | FAILED | 0.57s | Should get all conversations (admin) |
| ❌ Should fail to get all conversations as regular user | FAILED | 0.52s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 1.17s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 1.57s | Should not access conversation from different organization |
| ❌ Should filter conversations by organization | FAILED | 0.65s | Should filter conversations by organization |
| ❌ Super admin should access conversations across organizations | FAILED | 0.54s | Super admin should access conversations across organizations |
| ❌ Should handle non-existent conversation ID | FAILED | 0.51s | Should handle non-existent conversation ID |
| ❌ Should handle unauthorized access | FAILED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.54s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.29s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2284.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "etag": "W/\"144-u2+tvUUNvebO7gLq9jOgTiXRX4I\"",
    "date": "Tue, 27 May 2025 23:12:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "508e8a18-f877-4a02-878e-db9b4103191b",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:12:44.219Z",
    "lastMessageAt": "2025-05-27T23:12:44.219Z",
    "organizationId": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
    ]
  }
}
```

**⏱️ Duration:** 2284.6 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ❌ FAILED  
**Duration:** 0.67s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"At least two participants are required"[39m
Received string:    [31m"Participants must be an array with at least two participants"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (670.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "date": "Tue, 27 May 2025 23:12:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 670.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (615.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "date": "Tue, 27 May 2025 23:12:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 615.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.22s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1216.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2",
      "Dfp1aJMuyqXzcRemvNaoxqEXvWV2"
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
    "etag": "W/\"168-8MjuCWCLzIA+in9Hki2rYoZXpn0\"",
    "date": "Tue, 27 May 2025 23:12:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "704e8bdc-638f-4408-b72e-4d98ec6a6f72",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-05-27T23:12:47.324Z",
    "lastMessageAt": "2025-05-27T23:12:47.324Z",
    "organizationId": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2",
      "Dfp1aJMuyqXzcRemvNaoxqEXvWV2"
    ]
  }
}
```

**⏱️ Duration:** 1216.1 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ❌ FAILED  
**Duration:** 0.58s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/508e8a18-f877-4a02-878e-db9b4103191b (577.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OCwidXNlcl9pZCI6IkFVaGJoQ3d6MWFQODN3NU92alhxZjZaYmFxdjIiLCJzdWIiOiJBVWhiaEN3ejFhUDgzdzVPdmpYcWY2WmJhcXYyIiwiaWF0IjoxNzQ4Mzg3NTU4LCJleHAiOjE3NDgzOTExNTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IgHN1S25Hg5s1VAigimuGqgtvUrClQGnhDSmcRJlSRoYf5ychApJtV9SdALE0bbmsOlW-ztXdJVK1itkPF1z1lCL6lBL0843YANpiPkIxo6f_ImLAQwKwBU3BAuadFA08Y56E-nr4_Q4_dKdZ9Dvl0EdQzLP-v20Wxe3tvNGWCUKlKVQ35kc4SD47ILHKYdxOPVS-TB2D1u6vwFGULAThPqvjo9PHUsBZizFRzwIApwAYv2NXRY-pFnB55rKXcvlNO-_Vucz9ktjTx7k-q50_cX2KWCTU8H93LdjmtUy99BaptzsrMm0WpcTHfcMQhjUXMUIkIzbWuceRLOsPJh7XQ",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "etag": "W/\"5fe-zm9esvJa6UDcqt14db9NEZScXfg\"",
    "date": "Tue, 27 May 2025 23:12:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"508e8a18-f877-4a02-878e-db9b4103191b\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 577.1 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ❌ FAILED  
**Duration:** 1.53s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1006.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "etag": "W/\"147-IUozMFkJSjoaLbG9R3UEyen28kI\"",
    "date": "Tue, 27 May 2025 23:12:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "79f68030-c5f7-423f-8401-d45bb6cdcd03",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:12:49.067Z",
    "lastMessageAt": "2025-05-27T23:12:49.067Z",
    "organizationId": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
    ]
  }
}
```

**⏱️ Duration:** 1006.7 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/79f68030-c5f7-423f-8401-d45bb6cdcd03 (526.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OSwidXNlcl9pZCI6IkRmcDFhSk11eXFYemNSZW12TmFveHFFWHZXVjIiLCJzdWIiOiJEZnAxYUpNdXlxWHpjUmVtdk5hb3hxRVh2V1YyIiwiaWF0IjoxNzQ4Mzg3NTU5LCJleHAiOjE3NDgzOTExNTksImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzU1ODMyOUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3NTU4MzI5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cfie4ZUEmS0IdsT0S_xhzNxT7z_Ijcetsyd341orB7JFvnJgf1K5PPZKLzG2Jwk5xiWrcw8sRJ6ORwNkkbj3zrGrvl_cxc44JWShj3qvKTHrtEiWMl59Lm-Y7FASBv7H2ORAOn2E4ErV9PHNi5PGeh_DzSEzeQjfbhjMdRD_iYtSwPH6pMoZ8Nb372VKeYuQqRUu5MPk6duPvLbjzkiFP-HwlMSEt-FE9Oo3jnHhaX71hjVo80KiHkaXYp8IRO08SgJ6Bzqvx16CqTEnFi8JDXTX9d5fMpSl08cL9PiQE9WRFqbvYAIl_5fkuF_Wuld8phbBwntZMhmQieGYOr01tA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "etag": "W/\"5fe-NdQ+iyNjpPRhRfT2oRSop+J2AC8\"",
    "date": "Tue, 27 May 2025 23:12:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"79f68030-c5f7-423f-8401-d45bb6cdcd03\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 526.7 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should get conversations for user
**Status:** ❌ FAILED  
**Duration:** 0.49s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/AUhbhCwz1aP83w5OvjXqf6Zbaqv2 (492.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OCwidXNlcl9pZCI6IkFVaGJoQ3d6MWFQODN3NU92alhxZjZaYmFxdjIiLCJzdWIiOiJBVWhiaEN3ejFhUDgzdzVPdmpYcWY2WmJhcXYyIiwiaWF0IjoxNzQ4Mzg3NTU4LCJleHAiOjE3NDgzOTExNTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IgHN1S25Hg5s1VAigimuGqgtvUrClQGnhDSmcRJlSRoYf5ychApJtV9SdALE0bbmsOlW-ztXdJVK1itkPF1z1lCL6lBL0843YANpiPkIxo6f_ImLAQwKwBU3BAuadFA08Y56E-nr4_Q4_dKdZ9Dvl0EdQzLP-v20Wxe3tvNGWCUKlKVQ35kc4SD47ILHKYdxOPVS-TB2D1u6vwFGULAThPqvjo9PHUsBZizFRzwIApwAYv2NXRY-pFnB55rKXcvlNO-_Vucz9ktjTx7k-q50_cX2KWCTU8H93LdjmtUy99BaptzsrMm0WpcTHfcMQhjUXMUIkIzbWuceRLOsPJh7XQ",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "etag": "W/\"67f-ukmjFCAS1sMbaIr7BodFz2eJoeI\"",
    "date": "Tue, 27 May 2025 23:12:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:124:53\n\n  121   whereClause.organizationId = organizationId;\n  122 }\n  123 \n→ 124 const conversations = await prisma.conversation.findMany({\n        where: {\n          participants: {\n            some: {\n              id: \"AUhbhCwz1aP83w5OvjXqf6Zbaqv2\"\n            }\n          },\n          organizationId: \"d2b638f2-83b9-4c52-b34e-5d2b60c68d02\"\n        },\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 492.5 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (841.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "date": "Tue, 27 May 2025 23:13:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 841.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.55s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/508e8a18-f877-4a02-878e-db9b4103191b/soft-delete (553.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OCwidXNlcl9pZCI6IkFVaGJoQ3d6MWFQODN3NU92alhxZjZaYmFxdjIiLCJzdWIiOiJBVWhiaEN3ejFhUDgzdzVPdmpYcWY2WmJhcXYyIiwiaWF0IjoxNzQ4Mzg3NTU4LCJleHAiOjE3NDgzOTExNTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IgHN1S25Hg5s1VAigimuGqgtvUrClQGnhDSmcRJlSRoYf5ychApJtV9SdALE0bbmsOlW-ztXdJVK1itkPF1z1lCL6lBL0843YANpiPkIxo6f_ImLAQwKwBU3BAuadFA08Y56E-nr4_Q4_dKdZ9Dvl0EdQzLP-v20Wxe3tvNGWCUKlKVQ35kc4SD47ILHKYdxOPVS-TB2D1u6vwFGULAThPqvjo9PHUsBZizFRzwIApwAYv2NXRY-pFnB55rKXcvlNO-_Vucz9ktjTx7k-q50_cX2KWCTU8H93LdjmtUy99BaptzsrMm0WpcTHfcMQhjUXMUIkIzbWuceRLOsPJh7XQ",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "userId": "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "content-length": "1537",
    "etag": "W/\"601-NERmfWsCyeLPkUa8/G/dNQCuEKM\"",
    "date": "Tue, 27 May 2025 23:13:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error soft deleting conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"508e8a18-f877-4a02-878e-db9b4103191b\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 553.1 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should hide conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.47s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/508e8a18-f877-4a02-878e-db9b4103191b/hide (475.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OCwidXNlcl9pZCI6IkFVaGJoQ3d6MWFQODN3NU92alhxZjZaYmFxdjIiLCJzdWIiOiJBVWhiaEN3ejFhUDgzdzVPdmpYcWY2WmJhcXYyIiwiaWF0IjoxNzQ4Mzg3NTU4LCJleHAiOjE3NDgzOTExNTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IgHN1S25Hg5s1VAigimuGqgtvUrClQGnhDSmcRJlSRoYf5ychApJtV9SdALE0bbmsOlW-ztXdJVK1itkPF1z1lCL6lBL0843YANpiPkIxo6f_ImLAQwKwBU3BAuadFA08Y56E-nr4_Q4_dKdZ9Dvl0EdQzLP-v20Wxe3tvNGWCUKlKVQ35kc4SD47ILHKYdxOPVS-TB2D1u6vwFGULAThPqvjo9PHUsBZizFRzwIApwAYv2NXRY-pFnB55rKXcvlNO-_Vucz9ktjTx7k-q50_cX2KWCTU8H93LdjmtUy99BaptzsrMm0WpcTHfcMQhjUXMUIkIzbWuceRLOsPJh7XQ",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "userId": "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "content-length": "1530",
    "etag": "W/\"5fa-KwKAY4o4UueGNPp7OOoUWQt8n4M\"",
    "date": "Tue, 27 May 2025 23:13:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error hiding conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"508e8a18-f877-4a02-878e-db9b4103191b\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 475.2 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should unhide conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.53s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/508e8a18-f877-4a02-878e-db9b4103191b/unhide (532.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OCwidXNlcl9pZCI6IkFVaGJoQ3d6MWFQODN3NU92alhxZjZaYmFxdjIiLCJzdWIiOiJBVWhiaEN3ejFhUDgzdzVPdmpYcWY2WmJhcXYyIiwiaWF0IjoxNzQ4Mzg3NTU4LCJleHAiOjE3NDgzOTExNTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IgHN1S25Hg5s1VAigimuGqgtvUrClQGnhDSmcRJlSRoYf5ychApJtV9SdALE0bbmsOlW-ztXdJVK1itkPF1z1lCL6lBL0843YANpiPkIxo6f_ImLAQwKwBU3BAuadFA08Y56E-nr4_Q4_dKdZ9Dvl0EdQzLP-v20Wxe3tvNGWCUKlKVQ35kc4SD47ILHKYdxOPVS-TB2D1u6vwFGULAThPqvjo9PHUsBZizFRzwIApwAYv2NXRY-pFnB55rKXcvlNO-_Vucz9ktjTx7k-q50_cX2KWCTU8H93LdjmtUy99BaptzsrMm0WpcTHfcMQhjUXMUIkIzbWuceRLOsPJh7XQ",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "userId": "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "content-length": "1532",
    "etag": "W/\"5fc-Z/xesZIy3VE6lXhTV8aozCPgy8w\"",
    "date": "Tue, 27 May 2025 23:13:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error unhiding conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"508e8a18-f877-4a02-878e-db9b4103191b\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 532.6 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ❌ FAILED  
**Duration:** 0.62s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/704e8bdc-638f-4408-b72e-4d98ec6a6f72/block (619.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OSwidXNlcl9pZCI6IkRmcDFhSk11eXFYemNSZW12TmFveHFFWHZXVjIiLCJzdWIiOiJEZnAxYUpNdXlxWHpjUmVtdk5hb3hxRVh2V1YyIiwiaWF0IjoxNzQ4Mzg3NTU5LCJleHAiOjE3NDgzOTExNTksImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzU1ODMyOUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3NTU4MzI5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cfie4ZUEmS0IdsT0S_xhzNxT7z_Ijcetsyd341orB7JFvnJgf1K5PPZKLzG2Jwk5xiWrcw8sRJ6ORwNkkbj3zrGrvl_cxc44JWShj3qvKTHrtEiWMl59Lm-Y7FASBv7H2ORAOn2E4ErV9PHNi5PGeh_DzSEzeQjfbhjMdRD_iYtSwPH6pMoZ8Nb372VKeYuQqRUu5MPk6duPvLbjzkiFP-HwlMSEt-FE9Oo3jnHhaX71hjVo80KiHkaXYp8IRO08SgJ6Bzqvx16CqTEnFi8JDXTX9d5fMpSl08cL9PiQE9WRFqbvYAIl_5fkuF_Wuld8phbBwntZMhmQieGYOr01tA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "userId": "Dfp1aJMuyqXzcRemvNaoxqEXvWV2"
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
    "content-length": "1532",
    "etag": "W/\"5fc-el/02ZyKNGgBJlpVHS7HeCMG/eM\"",
    "date": "Tue, 27 May 2025 23:13:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error blocking conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"704e8bdc-638f-4408-b72e-4d98ec6a6f72\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 619.6 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ❌ FAILED  
**Duration:** 0.50s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/704e8bdc-638f-4408-b72e-4d98ec6a6f72/unblock (496.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OSwidXNlcl9pZCI6IkRmcDFhSk11eXFYemNSZW12TmFveHFFWHZXVjIiLCJzdWIiOiJEZnAxYUpNdXlxWHpjUmVtdk5hb3hxRVh2V1YyIiwiaWF0IjoxNzQ4Mzg3NTU5LCJleHAiOjE3NDgzOTExNTksImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzU1ODMyOUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3NTU4MzI5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.cfie4ZUEmS0IdsT0S_xhzNxT7z_Ijcetsyd341orB7JFvnJgf1K5PPZKLzG2Jwk5xiWrcw8sRJ6ORwNkkbj3zrGrvl_cxc44JWShj3qvKTHrtEiWMl59Lm-Y7FASBv7H2ORAOn2E4ErV9PHNi5PGeh_DzSEzeQjfbhjMdRD_iYtSwPH6pMoZ8Nb372VKeYuQqRUu5MPk6duPvLbjzkiFP-HwlMSEt-FE9Oo3jnHhaX71hjVo80KiHkaXYp8IRO08SgJ6Bzqvx16CqTEnFi8JDXTX9d5fMpSl08cL9PiQE9WRFqbvYAIl_5fkuF_Wuld8phbBwntZMhmQieGYOr01tA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "userId": "Dfp1aJMuyqXzcRemvNaoxqEXvWV2"
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
    "etag": "W/\"5fe-to/dXZiAWN8JFJGvIQsCEiLF6b4\"",
    "date": "Tue, 27 May 2025 23:13:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error unblocking conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"704e8bdc-638f-4408-b72e-4d98ec6a6f72\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 496.2 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.49s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Insufficient permissions"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/508e8a18-f877-4a02-878e-db9b4103191b/block (482.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OCwidXNlcl9pZCI6IkFVaGJoQ3d6MWFQODN3NU92alhxZjZaYmFxdjIiLCJzdWIiOiJBVWhiaEN3ejFhUDgzdzVPdmpYcWY2WmJhcXYyIiwiaWF0IjoxNzQ4Mzg3NTU4LCJleHAiOjE3NDgzOTExNTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IgHN1S25Hg5s1VAigimuGqgtvUrClQGnhDSmcRJlSRoYf5ychApJtV9SdALE0bbmsOlW-ztXdJVK1itkPF1z1lCL6lBL0843YANpiPkIxo6f_ImLAQwKwBU3BAuadFA08Y56E-nr4_Q4_dKdZ9Dvl0EdQzLP-v20Wxe3tvNGWCUKlKVQ35kc4SD47ILHKYdxOPVS-TB2D1u6vwFGULAThPqvjo9PHUsBZizFRzwIApwAYv2NXRY-pFnB55rKXcvlNO-_Vucz9ktjTx7k-q50_cX2KWCTU8H93LdjmtUy99BaptzsrMm0WpcTHfcMQhjUXMUIkIzbWuceRLOsPJh7XQ",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "userId": "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "date": "Tue, 27 May 2025 23:13:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 482.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1047.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "etag": "W/\"149-OnKqWX+ToWCxOwTyEHaQqKQQljM\"",
    "date": "Tue, 27 May 2025 23:13:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2e158162-5217-4608-b052-40247815c52c",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:13:25.333Z",
    "lastMessageAt": "2025-05-27T23:13:25.333Z",
    "organizationId": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
    ]
  }
}
```

**⏱️ Duration:** 1047.0 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/2e158162-5217-4608-b052-40247815c52c (796.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "date": "Tue, 27 May 2025 23:13:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 796.3 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.60s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Insufficient permissions"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/508e8a18-f877-4a02-878e-db9b4103191b (593.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OCwidXNlcl9pZCI6IkFVaGJoQ3d6MWFQODN3NU92alhxZjZaYmFxdjIiLCJzdWIiOiJBVWhiaEN3ejFhUDgzdzVPdmpYcWY2WmJhcXYyIiwiaWF0IjoxNzQ4Mzg3NTU4LCJleHAiOjE3NDgzOTExNTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IgHN1S25Hg5s1VAigimuGqgtvUrClQGnhDSmcRJlSRoYf5ychApJtV9SdALE0bbmsOlW-ztXdJVK1itkPF1z1lCL6lBL0843YANpiPkIxo6f_ImLAQwKwBU3BAuadFA08Y56E-nr4_Q4_dKdZ9Dvl0EdQzLP-v20Wxe3tvNGWCUKlKVQ35kc4SD47ILHKYdxOPVS-TB2D1u6vwFGULAThPqvjo9PHUsBZizFRzwIApwAYv2NXRY-pFnB55rKXcvlNO-_Vucz9ktjTx7k-q50_cX2KWCTU8H93LdjmtUy99BaptzsrMm0WpcTHfcMQhjUXMUIkIzbWuceRLOsPJh7XQ",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "date": "Tue, 27 May 2025 23:13:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 593.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ❌ FAILED  
**Duration:** 0.57s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (566.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "etag": "W/\"585-Xgryx42RSUP/zsdm5M8noI4458Q\"",
    "date": "Tue, 27 May 2025 23:13:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:193:53\n\n  190   }\n  191 }\n  192 \n→ 193 const conversations = await prisma.conversation.findMany({\n        where: {},\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 566.4 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ❌ FAILED  
**Duration:** 0.52s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Insufficient permissions"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (519.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzU1OCwidXNlcl9pZCI6IkFVaGJoQ3d6MWFQODN3NU92alhxZjZaYmFxdjIiLCJzdWIiOiJBVWhiaEN3ejFhUDgzdzVPdmpYcWY2WmJhcXYyIiwiaWF0IjoxNzQ4Mzg3NTU4LCJleHAiOjE3NDgzOTExNTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc1NTY5MTZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IgHN1S25Hg5s1VAigimuGqgtvUrClQGnhDSmcRJlSRoYf5ychApJtV9SdALE0bbmsOlW-ztXdJVK1itkPF1z1lCL6lBL0843YANpiPkIxo6f_ImLAQwKwBU3BAuadFA08Y56E-nr4_Q4_dKdZ9Dvl0EdQzLP-v20Wxe3tvNGWCUKlKVQ35kc4SD47ILHKYdxOPVS-TB2D1u6vwFGULAThPqvjo9PHUsBZizFRzwIApwAYv2NXRY-pFnB55rKXcvlNO-_Vucz9ktjTx7k-q50_cX2KWCTU8H93LdjmtUy99BaptzsrMm0WpcTHfcMQhjUXMUIkIzbWuceRLOsPJh7XQ",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "date": "Tue, 27 May 2025 23:13:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 519.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 1.17s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1170.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "f7625b13-ca92-41d0-81fd-9c10e1c7ec0a"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "etag": "W/\"14c-jT6W4kqbkJIMBVd2sSj0To9nfSk\"",
    "date": "Tue, 27 May 2025 23:13:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "99eeea15-a574-40cc-a7fd-2e61e3e40d1b",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:13:29.013Z",
    "lastMessageAt": "2025-05-27T23:13:29.013Z",
    "organizationId": "f7625b13-ca92-41d0-81fd-9c10e1c7ec0a",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
    ]
  }
}
```

**⏱️ Duration:** 1170.2 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 1.57s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1010.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
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
    "etag": "W/\"144-2M8QwpbG8XTyBw1mGSHhtopUimc\"",
    "date": "Tue, 27 May 2025 23:13:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7ac37749-3452-4209-8f09-9c06b07ad766",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:13:30.028Z",
    "lastMessageAt": "2025-05-27T23:13:30.028Z",
    "organizationId": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "AUhbhCwz1aP83w5OvjXqf6Zbaqv2"
    ]
  }
}
```

**⏱️ Duration:** 1010.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/7ac37749-3452-4209-8f09-9c06b07ad766 (556.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "f7625b13-ca92-41d0-81fd-9c10e1c7ec0a"
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
    "etag": "W/\"5fe-F/hCc4MgUZAxp48KjgQgObWkZIU\"",
    "date": "Tue, 27 May 2025 23:13:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"7ac37749-3452-4209-8f09-9c06b07ad766\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 556.5 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should filter conversations by organization
**Status:** ❌ FAILED  
**Duration:** 0.65s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (652.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "etag": "W/\"67f-Q1SB29U/xqH8mLYNi2ueWf9sfQY\"",
    "date": "Tue, 27 May 2025 23:13:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:124:53\n\n  121   whereClause.organizationId = organizationId;\n  122 }\n  123 \n→ 124 const conversations = await prisma.conversation.findMany({\n        where: {\n          participants: {\n            some: {\n              id: \"tYFy4ecd0TY2fErw9jsp6e1XHvw1\"\n            }\n          },\n          organizationId: \"d2b638f2-83b9-4c52-b34e-5d2b60c68d02\"\n        },\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 652.5 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ❌ FAILED  
**Duration:** 0.54s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (539.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA"
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
    "etag": "W/\"63a-dOFlOl5hgcEpU7l4M02ZDr8iqRw\"",
    "date": "Tue, 27 May 2025 23:13:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversations",
    "details": "\nInvalid `prisma.conversation.findMany()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:124:53\n\n  121   whereClause.organizationId = organizationId;\n  122 }\n  123 \n→ 124 const conversations = await prisma.conversation.findMany({\n        where: {\n          participants: {\n            some: {\n              id: \"tYFy4ecd0TY2fErw9jsp6e1XHvw1\"\n            }\n          }\n        },\n        orderBy: {\n          lastMessageAt: \"desc\"\n        },\n        include: {\n          participants: {\n            select: {\n              id: true,\n              email: true,\n              name: true\n            }\n          },\n          messages: {\n            orderBy: {\n              createdAt: \"desc\",\n              ~~~~~~~~~\n      ?       id?: SortOrder,\n      ?       conversationId?: SortOrder,\n      ?       senderId?: SortOrder,\n      ?       content?: SortOrder,\n      ?       status?: SortOrder,\n      ?       timestamp?: SortOrder,\n      ?       attachments?: SortOrder | SortOrderInput,\n      ?       location?: SortOrder | SortOrderInput,\n      ?       organizationId?: SortOrder | SortOrderInput,\n      ?       conversation?: ConversationOrderByWithRelationInput,\n      ?       sender?: UserOrderByWithRelationInput,\n      ?       organization?: OrganizationOrderByWithRelationInput\n            },\n            take: 1\n          }\n        }\n      })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 539.0 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.51s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m404[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (512.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "etag": "W/\"5fe-PMqEohgF7I4RsQF9fUN87Dj4G0g\"",
    "date": "Tue, 27 May 2025 23:13:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "\nInvalid `prisma.conversation.findUnique()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/conversationModel.js:76:52\n\n  73  */\n  74 exports.getConversationById = async (id) => {\n  75   try {\n→ 76     const conversation = await prisma.conversation.findUnique({\n           where: {\n             id: \"123e4567-e89b-12d3-a456-426614174000\"\n           },\n           include: {\n             participants: {\n               select: {\n                 id: true,\n                 email: true,\n                 name: true\n               }\n             },\n             messages: {\n               orderBy: {\n                 createdAt: \"asc\",\n                 ~~~~~~~~~\n         ?       id?: SortOrder,\n         ?       conversationId?: SortOrder,\n         ?       senderId?: SortOrder,\n         ?       content?: SortOrder,\n         ?       status?: SortOrder,\n         ?       timestamp?: SortOrder,\n         ?       attachments?: SortOrder | SortOrderInput,\n         ?       location?: SortOrder | SortOrderInput,\n         ?       organizationId?: SortOrder | SortOrderInput,\n         ?       conversation?: ConversationOrderByWithRelationInput,\n         ?       sender?: UserOrderByWithRelationInput,\n         ?       organization?: OrganizationOrderByWithRelationInput\n               }\n             }\n           }\n         })\n\nUnknown argument `createdAt`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 512.3 ms  
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

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/508e8a18-f877-4a02-878e-db9b4103191b (7.4ms)</summary>

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
    "date": "Tue, 27 May 2025 23:13:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 7.4 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (542.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA",
    "X-Organization-Id": "d2b638f2-83b9-4c52-b34e-5d2b60c68d02"
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
    "date": "Tue, 27 May 2025 23:13:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 542.8 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/508e8a18-f877-4a02-878e-db9b4103191b (681.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA"
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
    "date": "Tue, 27 May 2025 23:13:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 681.8 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/704e8bdc-638f-4408-b72e-4d98ec6a6f72 (609.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA"
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
    "date": "Tue, 27 May 2025 23:13:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 609.5 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/d2b638f2-83b9-4c52-b34e-5d2b60c68d02 (1406.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA"
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
    "date": "Tue, 27 May 2025 23:13:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1406.4 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/f7625b13-ca92-41d0-81fd-9c10e1c7ec0a (1146.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc1NTMsImV4cCI6MTc0ODM5MTE1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NFRHYo_vpjqaVuRVLywaqfbjvF27QCZ5Pyiron16rNLM_-smdQRomsCX_rZqmemoOjY2KE0Nq0iEAvaojvC4Ox3s2WiBTKuZvebeDq4IG84q2eEvhzTpPkFnoD7tJhaJLgvrCslU68LGwjTX5BixOEb1woPVnCCLl4ygxXoZFJ4_w1zRLH9lpePC_f42v8Mf-68-SdkOcIrzIHO5mWiZ0pc3siA53EaeDqs_lcEMlgWErLA9_R1cCLAVbfnQOEPxStYo7_C1q2qntUKdPG96eGhm2KToHe2LWD-PswNVzwrkihxuAlWfl9eb56Emlx4nh52BlrnegnJjIBfBUDutEA"
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
    "date": "Tue, 27 May 2025 23:13:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1146.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (273.8ms)</summary>

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
    "etag": "W/\"640-82rS3ABJuGgezKJm/Uc7h2X5mLw\"",
    "date": "Tue, 27 May 2025 23:13:37 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NjE3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2MTcsImV4cCI6MTc0ODM5MTIxNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SZdXb3xUDd3tGtnjApfU5_Hkj-fGpEFwFaGjmbYtH1vINgC7-qqaG8HadahzCFYd_Iu_jrUCdcsePdG3hrHqIhaWdqVegpRFskYmHLlbvkboPFCOXV0HAjs6EJZqcLFRVGA3RFN9xf1k5tkYUyNFQas05t5UheEsQ-8SiMphf9Xh_yu4r2FF1V2dSGmVRw8xEcmWrXlburWZ48neDt9pf15SEi01Exth_rpcPzaKvqPZyHbM0Vg7H3L3l8qGNP3F2ram4HBQSerMbYL1N5lf1DpdBV6gbRVQQXEh2xI_bOpDeOvaElkDGuP4trtJC2zeQw70EETsWs7nIe_7Sej64A",
      "refreshToken": "AMf-vBx7g5GBxbcQYKDoGUn1uyRc5WeCOHxjLL8YpOwsB9MdtR2I4mjbiFoZeMi_aEqsU7mzXgdS5YOeGM4WZdPw5TipcRsv1bSdh00gy7SLMpmC2EFDI4rGUy2Gmk5AGdMM9ngRVJn3jWe6wpeJtzHI86JIbgAMNKBiQE88qNsXtWWNgnnY2TDQAnMq5tZdG7hYUiSzP9LFH9EQJ0G4zc12avgxTHZ5xyiWY_-XH7jZQt2mABPt8zJOq5BrDYVvKLTIrvJGUSEH",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 273.8 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/AUhbhCwz1aP83w5OvjXqf6Zbaqv2 (1423.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NjE3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2MTcsImV4cCI6MTc0ODM5MTIxNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SZdXb3xUDd3tGtnjApfU5_Hkj-fGpEFwFaGjmbYtH1vINgC7-qqaG8HadahzCFYd_Iu_jrUCdcsePdG3hrHqIhaWdqVegpRFskYmHLlbvkboPFCOXV0HAjs6EJZqcLFRVGA3RFN9xf1k5tkYUyNFQas05t5UheEsQ-8SiMphf9Xh_yu4r2FF1V2dSGmVRw8xEcmWrXlburWZ48neDt9pf15SEi01Exth_rpcPzaKvqPZyHbM0Vg7H3L3l8qGNP3F2ram4HBQSerMbYL1N5lf1DpdBV6gbRVQQXEh2xI_bOpDeOvaElkDGuP4trtJC2zeQw70EETsWs7nIe_7Sej64A"
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
    "date": "Tue, 27 May 2025 23:13:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1423.0 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (315.7ms)</summary>

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
    "etag": "W/\"640-xUiarZEDRx8B+psdmRYpLc/Hxug\"",
    "date": "Tue, 27 May 2025 23:13:39 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NjE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2MTksImV4cCI6MTc0ODM5MTIxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gBeDMTSIg9FTDhH1AoraM8M-1RmrQe0Y0NAet4h3Ml2CRXVO7c9GEWkqKR1PlcpgLlyQzKxRlDGt5au0oTg-K0NntM7oGTISW8eUi2_me4TevEL-4GZFW_ytuHVXs0KYowj-yaGlniEJCgX8xMMHj4kEJX2wfDOrfHvQhzLt_IrpP4xgwjQSbRnBMMoouQXtphlnNVUXPs_ZH8uMpdeQtKeQc0oK82AvoHZr-WdFbD91iT-VvAKA7pUrMcgwN98xU9q0znQ3_zR8cDyij7HltICypCA1hCXjmukqk3_Rz4WjACQSEut8-ivpSpXQ9yenXVnQ-jDLUCIXmFadJQ4LYg",
      "refreshToken": "AMf-vBz8lU3hYRYgJ0SXgua4JMcTW7db6UDy3qbEH_qQIa-u_1SiO9s0PfPaA29PcXcliTDVLTzlEDugzl483Y5kQoefPdX50V10Mm4NJiGkiN5hu_9a8V_SynBON-8H3pDQJTVQxdhIb-39WNGS3O4MFenGqpzOTtC94riDRj6XzObS7LmOGLwOWszerhGZtk6xdNtAIHTfArTAZLJu-APbPKgF6x5XiMz3JDfSuNv7cnxNC548xFkF7NF4gYuNB9sxRvz37k8z",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 315.7 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/Dfp1aJMuyqXzcRemvNaoxqEXvWV2 (1289.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3NjE5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc2MTksImV4cCI6MTc0ODM5MTIxOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gBeDMTSIg9FTDhH1AoraM8M-1RmrQe0Y0NAet4h3Ml2CRXVO7c9GEWkqKR1PlcpgLlyQzKxRlDGt5au0oTg-K0NntM7oGTISW8eUi2_me4TevEL-4GZFW_ytuHVXs0KYowj-yaGlniEJCgX8xMMHj4kEJX2wfDOrfHvQhzLt_IrpP4xgwjQSbRnBMMoouQXtphlnNVUXPs_ZH8uMpdeQtKeQc0oK82AvoHZr-WdFbD91iT-VvAKA7pUrMcgwN98xU9q0znQ3_zR8cDyij7HltICypCA1hCXjmukqk3_Rz4WjACQSEut8-ivpSpXQ9yenXVnQ-jDLUCIXmFadJQ4LYg"
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
    "date": "Tue, 27 May 2025 23:13:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1289.5 ms  

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
