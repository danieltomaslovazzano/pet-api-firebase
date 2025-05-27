# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:24:24 AM  
**Duration:** 71.17s  
**Tests:** 25 total, 21 passed, 4 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 2.28s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.61s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.55s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.22s | Should create group conversation with multiple participants |
| ✅ Should get conversation by ID for participant | PASSED | 0.86s | Should get conversation by ID for participant |
| ✅ Should fail to get conversation by ID for non-participant | PASSED | 1.71s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 0.96s | Should get conversations for user |
| ✅ Should get conversation with invalid ID format | PASSED | 0.66s | Should get conversation with invalid ID format |
| ✅ Should soft delete conversation for user | PASSED | 0.93s | Should soft delete conversation for user |
| ✅ Should hide conversation for user | PASSED | 0.85s | Should hide conversation for user |
| ✅ Should unhide conversation for user | PASSED | 0.82s | Should unhide conversation for user |
| ✅ Should block conversation (moderator) | PASSED | 0.91s | Should block conversation (moderator) |
| ✅ Should unblock conversation (moderator) | PASSED | 0.81s | Should unblock conversation (moderator) |
| ❌ Should fail to block conversation as regular user | FAILED | 0.50s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.72s | Should permanently delete conversation (admin) |
| ❌ Should fail to permanently delete conversation as regular user | FAILED | 0.52s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 1.00s | Should get all conversations (admin) |
| ❌ Should fail to get all conversations as regular user | FAILED | 0.45s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 0.99s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 1.82s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.98s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 0.92s | Super admin should access conversations across organizations |
| ✅ Should handle non-existent conversation ID | PASSED | 0.72s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.03s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.81s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.28s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2275.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "etag": "W/\"144-pTSj8Taa6cbZdeiQS6cWJjCDxso\"",
    "date": "Tue, 27 May 2025 23:23:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "51214ed4-5ea1-49cc-a749-d2e30060c21e",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:23:24.969Z",
    "lastMessageAt": "2025-05-27T23:23:24.969Z",
    "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
    ]
  }
}
```

**⏱️ Duration:** 2275.7 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (606.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:23:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 606.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (553.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:23:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 553.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.22s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1219.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3",
      "4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2"
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
    "etag": "W/\"168-Sw+XyJGMweTfiFZGSsYmfacZXc4\"",
    "date": "Tue, 27 May 2025 23:23:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a50c796a-0670-43fe-97cc-bc8878010685",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-05-27T23:23:27.955Z",
    "lastMessageAt": "2025-05-27T23:23:27.955Z",
    "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3",
      "4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2"
    ]
  }
}
```

**⏱️ Duration:** 1219.2 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/51214ed4-5ea1-49cc-a749-d2e30060c21e (860.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODE5OCwidXNlcl9pZCI6ImNBRUlJR29lV05aWmo0ZnIybkRwVGVUMzkyQjMiLCJzdWIiOiJjQUVJSUdvZVdOWlpqNGZyMm5EcFRlVDM5MkIzIiwiaWF0IjoxNzQ4Mzg4MTk4LCJleHAiOjE3NDgzOTE3OTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPm1pv9Qc564HaDHPtVj98rIKmg9P9-LjIepJbzKPN-rI0IoTRdJYyfMJSpyaIP00kYG63uVEll8cYorhWYX0bWmHYNebz39GPpUFklaCs8IDJ6QNIaEUdLq977z6kT4gRj5VD3RixAe3B6C_nVZw-P_m_f4K6rhrToQZmW6xkhfAGmXdQga_hTuYozohSs-sKyABfRNZZA4YAico1qiyJYHpLMMHEozVm82feP27PovSlaIhTjpfpWG_0Qr_oNg3blup6axHQzBOxZoGuiuFIb_GC9YvI0_EBzsm9tv9Yeb_0l8JjJu6qOpNfvI5VHGE1dpKoztb5uW4nXkK8_zWA",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "etag": "W/\"152-y0WrOAr5rUhrgHHEpK/zB6VuGYs\"",
    "date": "Tue, 27 May 2025 23:23:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "51214ed4-5ea1-49cc-a749-d2e30060c21e",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:23:24.969Z",
    "lastMessageAt": "2025-05-27T23:23:24.969Z",
    "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 860.4 ms  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 1.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1036.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "etag": "W/\"147-fHReYkbk6KFj+8jVodqL69+owM8\"",
    "date": "Tue, 27 May 2025 23:23:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4f6207d3-741b-4de3-9a94-be779bd8f879",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:23:30.033Z",
    "lastMessageAt": "2025-05-27T23:23:30.033Z",
    "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
    ]
  }
}
```

**⏱️ Duration:** 1036.6 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/4f6207d3-741b-4de3-9a94-be779bd8f879 (671.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODIwMCwidXNlcl9pZCI6IjRLUFZRNmlqTUplRk5Wc2w3VUF0U3dtOVJ4cDIiLCJzdWIiOiI0S1BWUTZpak1KZUZOVnNsN1VBdFN3bTlSeHAyIiwiaWF0IjoxNzQ4Mzg4MjAwLCJleHAiOjE3NDgzOTE4MDAsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODE5OTA1MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4MTk5MDUyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.EgrE9itGajX41ovVlT3sfPLpuu45QNyHep8-4kBCY1MKxA9l6vXZg3notMAFVXrSxCUyWCX_B4PYtTfHdMatyhnhGsWDPZFA-yQ3P8_s8-9jPyphcV40VN25AsOOSZc3Bc2-_8Kz9BEcLc4Zj7fmeRMe0cJVygayjG_ules4ObL3_Oq-ihatCAacK4N9NhcferckIsk7CpF9dQgfmJMF87nNE7Z3II5isvAuLs8R-m4RVOV1B1q0CNr7gk2xZUqQ8DChcuSkzPUCoVKZn8beZBX8LFTKe_dcAoslKXh3PDl55Sl7fnhW3O72qO4cs_a2VfuEhz6ba7xcY1KuyGJFpw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:23:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 671.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.96s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/cAEIIGoeWNZZj4fr2nDpTeT392B3 (955.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODE5OCwidXNlcl9pZCI6ImNBRUlJR29lV05aWmo0ZnIybkRwVGVUMzkyQjMiLCJzdWIiOiJjQUVJSUdvZVdOWlpqNGZyMm5EcFRlVDM5MkIzIiwiaWF0IjoxNzQ4Mzg4MTk4LCJleHAiOjE3NDgzOTE3OTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPm1pv9Qc564HaDHPtVj98rIKmg9P9-LjIepJbzKPN-rI0IoTRdJYyfMJSpyaIP00kYG63uVEll8cYorhWYX0bWmHYNebz39GPpUFklaCs8IDJ6QNIaEUdLq977z6kT4gRj5VD3RixAe3B6C_nVZw-P_m_f4K6rhrToQZmW6xkhfAGmXdQga_hTuYozohSs-sKyABfRNZZA4YAico1qiyJYHpLMMHEozVm82feP27PovSlaIhTjpfpWG_0Qr_oNg3blup6axHQzBOxZoGuiuFIb_GC9YvI0_EBzsm9tv9Yeb_0l8JjJu6qOpNfvI5VHGE1dpKoztb5uW4nXkK8_zWA",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "etag": "W/\"421-+ShZ0FSw4k8LzVMML646AvgKut8\"",
    "date": "Tue, 27 May 2025 23:23:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "4f6207d3-741b-4de3-9a94-be779bd8f879",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:23:30.033Z",
      "lastMessageAt": "2025-05-27T23:23:30.033Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
      ],
      "messages": []
    },
    {
      "id": "a50c796a-0670-43fe-97cc-bc8878010685",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:23:27.955Z",
      "lastMessageAt": "2025-05-27T23:23:27.955Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3",
        "4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2"
      ],
      "messages": []
    },
    {
      "id": "51214ed4-5ea1-49cc-a749-d2e30060c21e",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:23:24.969Z",
      "lastMessageAt": "2025-05-27T23:23:24.969Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 955.0 ms  

</details>


---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (658.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:24:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 658.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/51214ed4-5ea1-49cc-a749-d2e30060c21e/soft-delete (929.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODE5OCwidXNlcl9pZCI6ImNBRUlJR29lV05aWmo0ZnIybkRwVGVUMzkyQjMiLCJzdWIiOiJjQUVJSUdvZVdOWlpqNGZyMm5EcFRlVDM5MkIzIiwiaWF0IjoxNzQ4Mzg4MTk4LCJleHAiOjE3NDgzOTE3OTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPm1pv9Qc564HaDHPtVj98rIKmg9P9-LjIepJbzKPN-rI0IoTRdJYyfMJSpyaIP00kYG63uVEll8cYorhWYX0bWmHYNebz39GPpUFklaCs8IDJ6QNIaEUdLq977z6kT4gRj5VD3RixAe3B6C_nVZw-P_m_f4K6rhrToQZmW6xkhfAGmXdQga_hTuYozohSs-sKyABfRNZZA4YAico1qiyJYHpLMMHEozVm82feP27PovSlaIhTjpfpWG_0Qr_oNg3blup6axHQzBOxZoGuiuFIb_GC9YvI0_EBzsm9tv9Yeb_0l8JjJu6qOpNfvI5VHGE1dpKoztb5uW4nXkK8_zWA",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "userId": "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "date": "Tue, 27 May 2025 23:24:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation soft deleted for user"
  }
}
```

**⏱️ Duration:** 929.4 ms  

</details>


---

### Test: Should hide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/51214ed4-5ea1-49cc-a749-d2e30060c21e/hide (853.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODE5OCwidXNlcl9pZCI6ImNBRUlJR29lV05aWmo0ZnIybkRwVGVUMzkyQjMiLCJzdWIiOiJjQUVJSUdvZVdOWlpqNGZyMm5EcFRlVDM5MkIzIiwiaWF0IjoxNzQ4Mzg4MTk4LCJleHAiOjE3NDgzOTE3OTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPm1pv9Qc564HaDHPtVj98rIKmg9P9-LjIepJbzKPN-rI0IoTRdJYyfMJSpyaIP00kYG63uVEll8cYorhWYX0bWmHYNebz39GPpUFklaCs8IDJ6QNIaEUdLq977z6kT4gRj5VD3RixAe3B6C_nVZw-P_m_f4K6rhrToQZmW6xkhfAGmXdQga_hTuYozohSs-sKyABfRNZZA4YAico1qiyJYHpLMMHEozVm82feP27PovSlaIhTjpfpWG_0Qr_oNg3blup6axHQzBOxZoGuiuFIb_GC9YvI0_EBzsm9tv9Yeb_0l8JjJu6qOpNfvI5VHGE1dpKoztb5uW4nXkK8_zWA",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "userId": "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "date": "Tue, 27 May 2025 23:24:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation hidden for user"
  }
}
```

**⏱️ Duration:** 853.2 ms  

</details>


---

### Test: Should unhide conversation for user
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/51214ed4-5ea1-49cc-a749-d2e30060c21e/unhide (824.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODE5OCwidXNlcl9pZCI6ImNBRUlJR29lV05aWmo0ZnIybkRwVGVUMzkyQjMiLCJzdWIiOiJjQUVJSUdvZVdOWlpqNGZyMm5EcFRlVDM5MkIzIiwiaWF0IjoxNzQ4Mzg4MTk4LCJleHAiOjE3NDgzOTE3OTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPm1pv9Qc564HaDHPtVj98rIKmg9P9-LjIepJbzKPN-rI0IoTRdJYyfMJSpyaIP00kYG63uVEll8cYorhWYX0bWmHYNebz39GPpUFklaCs8IDJ6QNIaEUdLq977z6kT4gRj5VD3RixAe3B6C_nVZw-P_m_f4K6rhrToQZmW6xkhfAGmXdQga_hTuYozohSs-sKyABfRNZZA4YAico1qiyJYHpLMMHEozVm82feP27PovSlaIhTjpfpWG_0Qr_oNg3blup6axHQzBOxZoGuiuFIb_GC9YvI0_EBzsm9tv9Yeb_0l8JjJu6qOpNfvI5VHGE1dpKoztb5uW4nXkK8_zWA",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "userId": "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "date": "Tue, 27 May 2025 23:24:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unhidden for user"
  }
}
```

**⏱️ Duration:** 824.7 ms  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.91s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/a50c796a-0670-43fe-97cc-bc8878010685/block (910.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODIwMCwidXNlcl9pZCI6IjRLUFZRNmlqTUplRk5Wc2w3VUF0U3dtOVJ4cDIiLCJzdWIiOiI0S1BWUTZpak1KZUZOVnNsN1VBdFN3bTlSeHAyIiwiaWF0IjoxNzQ4Mzg4MjAwLCJleHAiOjE3NDgzOTE4MDAsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODE5OTA1MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4MTk5MDUyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.EgrE9itGajX41ovVlT3sfPLpuu45QNyHep8-4kBCY1MKxA9l6vXZg3notMAFVXrSxCUyWCX_B4PYtTfHdMatyhnhGsWDPZFA-yQ3P8_s8-9jPyphcV40VN25AsOOSZc3Bc2-_8Kz9BEcLc4Zj7fmeRMe0cJVygayjG_ules4ObL3_Oq-ihatCAacK4N9NhcferckIsk7CpF9dQgfmJMF87nNE7Z3II5isvAuLs8R-m4RVOV1B1q0CNr7gk2xZUqQ8DChcuSkzPUCoVKZn8beZBX8LFTKe_dcAoslKXh3PDl55Sl7fnhW3O72qO4cs_a2VfuEhz6ba7xcY1KuyGJFpw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "userId": "4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2"
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
    "date": "Tue, 27 May 2025 23:24:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation blocked for user"
  }
}
```

**⏱️ Duration:** 910.3 ms  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/a50c796a-0670-43fe-97cc-bc8878010685/unblock (815.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODIwMCwidXNlcl9pZCI6IjRLUFZRNmlqTUplRk5Wc2w3VUF0U3dtOVJ4cDIiLCJzdWIiOiI0S1BWUTZpak1KZUZOVnNsN1VBdFN3bTlSeHAyIiwiaWF0IjoxNzQ4Mzg4MjAwLCJleHAiOjE3NDgzOTE4MDAsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4ODE5OTA1MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg4MTk5MDUyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.EgrE9itGajX41ovVlT3sfPLpuu45QNyHep8-4kBCY1MKxA9l6vXZg3notMAFVXrSxCUyWCX_B4PYtTfHdMatyhnhGsWDPZFA-yQ3P8_s8-9jPyphcV40VN25AsOOSZc3Bc2-_8Kz9BEcLc4Zj7fmeRMe0cJVygayjG_ules4ObL3_Oq-ihatCAacK4N9NhcferckIsk7CpF9dQgfmJMF87nNE7Z3II5isvAuLs8R-m4RVOV1B1q0CNr7gk2xZUqQ8DChcuSkzPUCoVKZn8beZBX8LFTKe_dcAoslKXh3PDl55Sl7fnhW3O72qO4cs_a2VfuEhz6ba7xcY1KuyGJFpw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "userId": "4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2"
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
    "date": "Tue, 27 May 2025 23:24:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation unblocked for user"
  }
}
```

**⏱️ Duration:** 815.1 ms  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.50s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Forbidden: You must be a participant to view this conversation"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/51214ed4-5ea1-49cc-a749-d2e30060c21e/block (494.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODE5OCwidXNlcl9pZCI6ImNBRUlJR29lV05aWmo0ZnIybkRwVGVUMzkyQjMiLCJzdWIiOiJjQUVJSUdvZVdOWlpqNGZyMm5EcFRlVDM5MkIzIiwiaWF0IjoxNzQ4Mzg4MTk4LCJleHAiOjE3NDgzOTE3OTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPm1pv9Qc564HaDHPtVj98rIKmg9P9-LjIepJbzKPN-rI0IoTRdJYyfMJSpyaIP00kYG63uVEll8cYorhWYX0bWmHYNebz39GPpUFklaCs8IDJ6QNIaEUdLq977z6kT4gRj5VD3RixAe3B6C_nVZw-P_m_f4K6rhrToQZmW6xkhfAGmXdQga_hTuYozohSs-sKyABfRNZZA4YAico1qiyJYHpLMMHEozVm82feP27PovSlaIhTjpfpWG_0Qr_oNg3blup6axHQzBOxZoGuiuFIb_GC9YvI0_EBzsm9tv9Yeb_0l8JjJu6qOpNfvI5VHGE1dpKoztb5uW4nXkK8_zWA",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "userId": "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "date": "Tue, 27 May 2025 23:24:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 494.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (987.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "etag": "W/\"149-PivcO/KCbLeMJL0D05lAzTrGq5Q\"",
    "date": "Tue, 27 May 2025 23:24:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "bff2177f-8e2c-400e-afb3-371ec25a8bc5",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:24:08.170Z",
    "lastMessageAt": "2025-05-27T23:24:08.170Z",
    "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
    ]
  }
}
```

**⏱️ Duration:** 987.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/bff2177f-8e2c-400e-afb3-371ec25a8bc5 (734.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:24:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 734.4 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ❌ FAILED  
**Duration:** 0.52s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Forbidden: You must be a participant to view this conversation"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/51214ed4-5ea1-49cc-a749-d2e30060c21e (517.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODE5OCwidXNlcl9pZCI6ImNBRUlJR29lV05aWmo0ZnIybkRwVGVUMzkyQjMiLCJzdWIiOiJjQUVJSUdvZVdOWlpqNGZyMm5EcFRlVDM5MkIzIiwiaWF0IjoxNzQ4Mzg4MTk4LCJleHAiOjE3NDgzOTE3OTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPm1pv9Qc564HaDHPtVj98rIKmg9P9-LjIepJbzKPN-rI0IoTRdJYyfMJSpyaIP00kYG63uVEll8cYorhWYX0bWmHYNebz39GPpUFklaCs8IDJ6QNIaEUdLq977z6kT4gRj5VD3RixAe3B6C_nVZw-P_m_f4K6rhrToQZmW6xkhfAGmXdQga_hTuYozohSs-sKyABfRNZZA4YAico1qiyJYHpLMMHEozVm82feP27PovSlaIhTjpfpWG_0Qr_oNg3blup6axHQzBOxZoGuiuFIb_GC9YvI0_EBzsm9tv9Yeb_0l8JjJu6qOpNfvI5VHGE1dpKoztb5uW4nXkK8_zWA",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:24:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 517.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 1.00s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (998.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "content-length": "7308",
    "etag": "W/\"1c8c-kk1980m5amLyy01uCuzchaWmjGg\"",
    "date": "Tue, 27 May 2025 23:24:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "4f6207d3-741b-4de3-9a94-be779bd8f879",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:23:30.033Z",
      "lastMessageAt": "2025-05-27T23:23:30.033Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "cAEIIGoeWNZZj4fr2nDpTeT392B3",
          "email": "conversations-regular-1748388197536@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "a50c796a-0670-43fe-97cc-bc8878010685",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:23:27.955Z",
      "lastMessageAt": "2025-05-27T23:23:27.955Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "cAEIIGoeWNZZj4fr2nDpTeT392B3",
          "email": "conversations-regular-1748388197536@example.com",
          "name": "Regular User"
        },
        {
          "id": "4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2",
          "email": "conversations-moderator-1748388199052@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "51214ed4-5ea1-49cc-a749-d2e30060c21e",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:23:24.969Z",
      "lastMessageAt": "2025-05-27T23:23:24.969Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "cAEIIGoeWNZZj4fr2nDpTeT392B3",
          "email": "conversations-regular-1748388197536@example.com",
          "name": "Regular User"
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

**⏱️ Duration:** 998.0 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ❌ FAILED  
**Duration:** 0.45s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Forbidden: You must be a participant to view this conversation"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (450.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4ODE5OCwidXNlcl9pZCI6ImNBRUlJR29lV05aWmo0ZnIybkRwVGVUMzkyQjMiLCJzdWIiOiJjQUVJSUdvZVdOWlpqNGZyMm5EcFRlVDM5MkIzIiwiaWF0IjoxNzQ4Mzg4MTk4LCJleHAiOjE3NDgzOTE3OTgsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODgxOTc1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPm1pv9Qc564HaDHPtVj98rIKmg9P9-LjIepJbzKPN-rI0IoTRdJYyfMJSpyaIP00kYG63uVEll8cYorhWYX0bWmHYNebz39GPpUFklaCs8IDJ6QNIaEUdLq977z6kT4gRj5VD3RixAe3B6C_nVZw-P_m_f4K6rhrToQZmW6xkhfAGmXdQga_hTuYozohSs-sKyABfRNZZA4YAico1qiyJYHpLMMHEozVm82feP27PovSlaIhTjpfpWG_0Qr_oNg3blup6axHQzBOxZoGuiuFIb_GC9YvI0_EBzsm9tv9Yeb_0l8JjJu6qOpNfvI5VHGE1dpKoztb5uW4nXkK8_zWA",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:24:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 450.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (985.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "b72b9f13-c89b-4c21-8728-70f9cdaa38ce"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "etag": "W/\"14c-GRlqA67keSkanpY7aLq2dL6FSCI\"",
    "date": "Tue, 27 May 2025 23:24:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f95a7eec-8fa6-4fa2-a677-e8efe17d411e",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:24:11.860Z",
    "lastMessageAt": "2025-05-27T23:24:11.860Z",
    "organizationId": "b72b9f13-c89b-4c21-8728-70f9cdaa38ce",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
    ]
  }
}
```

**⏱️ Duration:** 985.2 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 1.82s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1046.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
    "etag": "W/\"144-/haQmB4IQcEw1BgeYUT5nvMzvMg\"",
    "date": "Tue, 27 May 2025 23:24:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "491bbd22-760c-48e4-9b19-70a94f9e62e2",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:24:12.915Z",
    "lastMessageAt": "2025-05-27T23:24:12.915Z",
    "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
    ]
  }
}
```

**⏱️ Duration:** 1046.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/491bbd22-760c-48e4-9b19-70a94f9e62e2 (773.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "b72b9f13-c89b-4c21-8728-70f9cdaa38ce"
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
    "etag": "W/\"152-lblJYRxMCbEYYaxAe9TfHIAGaL8\"",
    "date": "Tue, 27 May 2025 23:24:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "491bbd22-760c-48e4-9b19-70a94f9e62e2",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:24:12.915Z",
    "lastMessageAt": "2025-05-27T23:24:12.915Z",
    "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "cAEIIGoeWNZZj4fr2nDpTeT392B3"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 773.3 ms  

</details>


---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.98s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (983.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "etag": "W/\"574-jNLsdJhSpifjW/HSpPvKVNETi/0\"",
    "date": "Tue, 27 May 2025 23:24:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "491bbd22-760c-48e4-9b19-70a94f9e62e2",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:24:12.915Z",
      "lastMessageAt": "2025-05-27T23:24:12.915Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
      ],
      "messages": []
    },
    {
      "id": "a50c796a-0670-43fe-97cc-bc8878010685",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:23:27.955Z",
      "lastMessageAt": "2025-05-27T23:23:27.955Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3",
        "4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2"
      ],
      "messages": []
    },
    {
      "id": "51214ed4-5ea1-49cc-a749-d2e30060c21e",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:23:24.969Z",
      "lastMessageAt": "2025-05-27T23:23:24.969Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 983.2 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (922.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw"
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
    "content-length": "6462",
    "etag": "W/\"193e-NV2/Q/N802mCtH+PNwsM43PB4sI\"",
    "date": "Tue, 27 May 2025 23:24:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "491bbd22-760c-48e4-9b19-70a94f9e62e2",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:24:12.915Z",
      "lastMessageAt": "2025-05-27T23:24:12.915Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
      "organizationId": "b72b9f13-c89b-4c21-8728-70f9cdaa38ce",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
      ],
      "messages": []
    },
    {
      "id": "a50c796a-0670-43fe-97cc-bc8878010685",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:23:27.955Z",
      "lastMessageAt": "2025-05-27T23:23:27.955Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3",
        "4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2"
      ],
      "messages": []
    },
    {
      "id": "51214ed4-5ea1-49cc-a749-d2e30060c21e",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:23:24.969Z",
      "lastMessageAt": "2025-05-27T23:23:24.969Z",
      "organizationId": "f3adbed2-b556-41b9-ad10-d2aeaac36c85",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "cAEIIGoeWNZZj4fr2nDpTeT392B3"
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

**⏱️ Duration:** 922.7 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (724.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:24:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 724.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/51214ed4-5ea1-49cc-a749-d2e30060c21e (33.4ms)</summary>

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
    "date": "Tue, 27 May 2025 23:24:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 33.4 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (807.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw",
    "X-Organization-Id": "f3adbed2-b556-41b9-ad10-d2aeaac36c85"
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
    "date": "Tue, 27 May 2025 23:24:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 807.7 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/51214ed4-5ea1-49cc-a749-d2e30060c21e (705.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw"
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
    "date": "Tue, 27 May 2025 23:24:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 705.1 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/a50c796a-0670-43fe-97cc-bc8878010685 (722.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw"
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
    "date": "Tue, 27 May 2025 23:24:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 722.5 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/f3adbed2-b556-41b9-ad10-d2aeaac36c85 (1335.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw"
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
    "date": "Tue, 27 May 2025 23:24:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1335.5 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/b72b9f13-c89b-4c21-8728-70f9cdaa38ce (1155.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MTk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgxOTQsImV4cCI6MTc0ODM5MTc5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mFzatuK364NTVuTAkk4dAQinF6M3Rux1lyfoVa2wHPFv-RNBLlCuRjKGBi_3yPNSYmYaJBKh9i18iLwFijfKRwYUe4yDcHRbQH85anI1sxeqc6R7HO-Y46XayZ7-6J2yIEiLh3JgoVHTBWexWmPF5m_OPpft10FAm_26fEbxIRH6PE_so1lWLqL9XkGeoSBSkrOgrihWKghdTsRfLM8aIY9uIL95aG3pILUVqZyKvykn4AgPR_GZNzuMdBv6SvCnSpb6rDRxVQ6kpJj_Q_iA9hlSFbmhkPTI4SZQfjZ35Xg_Ip9T9h-yzKaJ9XHY2q1ZFkFH74kpoa95HXIwDLA1yw"
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
    "date": "Tue, 27 May 2025 23:24:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1155.2 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (293.8ms)</summary>

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
    "etag": "W/\"640-AXu8MbJBVKOLqr9/7qZdlEDAehA\"",
    "date": "Tue, 27 May 2025 23:24:21 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MjYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgyNjEsImV4cCI6MTc0ODM5MTg2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GCQzTjT4mhnZ_SVLKaCuDumt8T3x5FcANcCoQQWSA4AlYWLll871e1_-mit_6YKdsjKa94MH9jIqyhJCZ7Mb6oUKRajo6AHxztDm33yVzsrmUIlgQB_Q2xVAYijwxPu7TKwhT-fjoFckI9f1Dg8XT5UvSP8AQ7mB4cBtzHOqleMeUI7Npbu3xRiBZaYzJEkaFB9w1SUk3hUcqo93g00Umwx4gm8U6wHtnmZGfld3cq5DgjAQDGtWnWrOs3DEAleY3Yx0S5pndPon6Q8KOTg6QCj5grsGJwJw8GYeKJYljHJKhICvynPsOYzjJddMd1m3kPODuhqDg-VDRt6IOIbXnw",
      "refreshToken": "AMf-vBy2Q_lPfSOz7v_aymMzfqVVkusvRQYVC8uqzy9wNARD8ov3EYoEzN0Bu_qym66KBRy5TVlaX7DSejGHjE6WP0mz26zJTjhBSyt9FfoNYKdKzqeEToy1eBbgxtzKACo43SZ_MHQBuNlq990yQgSaBJs7fZHAX8lXCX9e9AeQCp7D3AenPChEXSWU22zN3Xx_8xhDIUBV1apVUTkISkIOL6oC-7rJklFonn_gYZl8DrxBdo720r7tL35H_1OiwKv10WcQfAn6",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 293.8 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/cAEIIGoeWNZZj4fr2nDpTeT392B3 (1448.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MjYxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgyNjEsImV4cCI6MTc0ODM5MTg2MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GCQzTjT4mhnZ_SVLKaCuDumt8T3x5FcANcCoQQWSA4AlYWLll871e1_-mit_6YKdsjKa94MH9jIqyhJCZ7Mb6oUKRajo6AHxztDm33yVzsrmUIlgQB_Q2xVAYijwxPu7TKwhT-fjoFckI9f1Dg8XT5UvSP8AQ7mB4cBtzHOqleMeUI7Npbu3xRiBZaYzJEkaFB9w1SUk3hUcqo93g00Umwx4gm8U6wHtnmZGfld3cq5DgjAQDGtWnWrOs3DEAleY3Yx0S5pndPon6Q8KOTg6QCj5grsGJwJw8GYeKJYljHJKhICvynPsOYzjJddMd1m3kPODuhqDg-VDRt6IOIbXnw"
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
    "date": "Tue, 27 May 2025 23:24:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1448.3 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (291.7ms)</summary>

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
    "etag": "W/\"640-hoQFyMq9QD1BxUmkUcMZ/1KRZxc\"",
    "date": "Tue, 27 May 2025 23:24:23 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgyNjMsImV4cCI6MTc0ODM5MTg2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iuSN-soTuFsyJDvnKPIOCRjx4IRlXDNhHDR9IuinOwuyEGHta1qQwnlYr5ja2K35r08Tks9w6jmeK0pwkvblr8mrT6nDyp0YwRUVbzMag3Y60ZhJRTD-kWFTsjB6lGyqptNuo0ds7tK7OWpayUB57XPtFmF0flW2aggUVAVLjSosYqbera0oYCZHkbR4NkZlSWTyzGY9YL0dkvrR6gsmf0W0Xc1oEl1oI6des3P9CsfApcfgExjKx87bD4LfdkZAz6wWPOUBxNUE8K6eWr9hhIDe5rVXQych57zGdXZQpjmkBe6WYfvU9JaMV9n3qCe9gvDz4t-8SeDX55VbNJ9Aeg",
      "refreshToken": "AMf-vBxCMiIpJjoNk3vWutnLaif3udMp5AUdpE3oAIuQ6FTi5uMUaSu-Z9b1KOefAE51K3BKae63rSUMIic5mcFCD2jVtEEGE8TcD7fw05xPbq7TVIZZ2JJB-zHUKpV7NtYYFoG5GiaG-_froqN_b55lZibhEXCejI-Fe2ci0CF5KP3PUJEsbQUEXQ79en6wewmTW4YacnY_p48r6SADdbjI49T464UxS1OMc3mjJQ3h9JJePnjhMyZ_XZ5UgeoSLkuNGGu3vRFg",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 291.7 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/4KPVQ6ijMJeFNVsl7UAtSwm9Rxp2 (1150.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg4MjYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODgyNjMsImV4cCI6MTc0ODM5MTg2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iuSN-soTuFsyJDvnKPIOCRjx4IRlXDNhHDR9IuinOwuyEGHta1qQwnlYr5ja2K35r08Tks9w6jmeK0pwkvblr8mrT6nDyp0YwRUVbzMag3Y60ZhJRTD-kWFTsjB6lGyqptNuo0ds7tK7OWpayUB57XPtFmF0flW2aggUVAVLjSosYqbera0oYCZHkbR4NkZlSWTyzGY9YL0dkvrR6gsmf0W0Xc1oEl1oI6des3P9CsfApcfgExjKx87bD4LfdkZAz6wWPOUBxNUE8K6eWr9hhIDe5rVXQych57zGdXZQpjmkBe6WYfvU9JaMV9n3qCe9gvDz4t-8SeDX55VbNJ9Aeg"
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
    "date": "Tue, 27 May 2025 23:24:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1150.9 ms  

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
