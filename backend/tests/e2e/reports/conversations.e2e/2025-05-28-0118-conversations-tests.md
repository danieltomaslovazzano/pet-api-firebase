# E2E Test Report: conversations-tests

**Date:** 5/28/2025  
**Time:** 1:18:17 AM  
**Duration:** 69.52s  
**Tests:** 25 total, 16 passed, 9 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a conversation with valid participants | PASSED | 2.30s | Should create a conversation with valid participants |
| ✅ Should fail to create conversation with insufficient participants | PASSED | 0.59s | Should fail to create conversation with insufficient participants |
| ✅ Should fail to create conversation without participants array | PASSED | 0.55s | Should fail to create conversation without participants array |
| ✅ Should create group conversation with multiple participants | PASSED | 1.23s | Should create group conversation with multiple participants |
| ❌ Should get conversation by ID for participant | FAILED | 0.84s | Should get conversation by ID for participant |
| ❌ Should fail to get conversation by ID for non-participant | FAILED | 1.68s | Should fail to get conversation by ID for non-participant |
| ✅ Should get conversations for user | PASSED | 0.99s | Should get conversations for user |
| ✅ Should get conversation with invalid ID format | PASSED | 0.90s | Should get conversation with invalid ID format |
| ❌ Should soft delete conversation for user | FAILED | 0.84s | Should soft delete conversation for user |
| ❌ Should hide conversation for user | FAILED | 0.67s | Should hide conversation for user |
| ❌ Should unhide conversation for user | FAILED | 0.67s | Should unhide conversation for user |
| ❌ Should block conversation (moderator) | FAILED | 0.72s | Should block conversation (moderator) |
| ❌ Should unblock conversation (moderator) | FAILED | 0.71s | Should unblock conversation (moderator) |
| ✅ Should fail to block conversation as regular user | PASSED | 0.44s | Should fail to block conversation as regular user |
| ✅ Should permanently delete conversation (admin) | PASSED | 1.73s | Should permanently delete conversation (admin) |
| ✅ Should fail to permanently delete conversation as regular user | PASSED | 0.47s | Should fail to permanently delete conversation as regular user |
| ✅ Should get all conversations (admin) | PASSED | 0.94s | Should get all conversations (admin) |
| ✅ Should fail to get all conversations as regular user | PASSED | 0.49s | Should fail to get all conversations as regular user |
| ✅ Should create conversation in specific organization | PASSED | 1.36s | Should create conversation in specific organization |
| ❌ Should not access conversation from different organization | FAILED | 1.64s | Should not access conversation from different organization |
| ✅ Should filter conversations by organization | PASSED | 0.88s | Should filter conversations by organization |
| ✅ Super admin should access conversations across organizations | PASSED | 0.90s | Super admin should access conversations across organizations |
| ❌ Should handle non-existent conversation ID | FAILED | 0.74s | Should handle non-existent conversation ID |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed request data | PASSED | 0.54s | Should handle malformed request data |


---

## Detailed Execution Log

### Test: Should create a conversation with valid participants
**Status:** ✅ PASSED  
**Duration:** 2.30s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (2300.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "etag": "W/\"144-nsacPVEDA2mQAeIJWSRW1tZ8xN8\"",
    "date": "Tue, 27 May 2025 23:17:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5690393a-80a0-40eb-8b20-2eb462851070",
    "title": "Test Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:17:18.238Z",
    "lastMessageAt": "2025-05-27T23:17:18.238Z",
    "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
    ]
  }
}
```

**⏱️ Duration:** 2300.0 ms  

</details>


---

### Test: Should fail to create conversation with insufficient participants
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (594.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:17:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 594.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create conversation without participants array
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (547.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:17:20 GMT",
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


---

### Test: Should create group conversation with multiple participants
**Status:** ✅ PASSED  
**Duration:** 1.23s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1223.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1",
      "LhhurTEfPWYyc7aiUD01219sMmA3"
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
    "etag": "W/\"168-7jTXwLGPZUfe0qsheJE1QP+6BNE\"",
    "date": "Tue, 27 May 2025 23:17:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ea5623e9-efdd-4da2-853d-b44312b1e626",
    "title": "Group Test Conversation",
    "type": "group",
    "status": "active",
    "createdAt": "2025-05-27T23:17:21.203Z",
    "lastMessageAt": "2025-05-27T23:17:21.203Z",
    "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1",
      "LhhurTEfPWYyc7aiUD01219sMmA3"
    ]
  }
}
```

**⏱️ Duration:** 1223.7 ms  

</details>


---

### Test: Should get conversation by ID for participant
**Status:** ❌ FAILED  
**Duration:** 0.84s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/5690393a-80a0-40eb-8b20-2eb462851070 (835.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMiwidXNlcl9pZCI6ImxFaVFEZllHSDJlSjU4ZXRRTFp0UGdvdzhUdTEiLCJzdWIiOiJsRWlRRGZZR0gyZUo1OGV0UUxadFBnb3c4VHUxIiwiaWF0IjoxNzQ4Mzg3ODMyLCJleHAiOjE3NDgzOTE0MzIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mcPHVH3pADHCnXC8nw956n1ChgNiSIwtKBG3xdejk6m5IMDICbHJYeO0OxgfKZGHdPgbi0IdxSw8s8eomvVsCdAHGYrSKEjb9h1V2e5kiHbZAPCUdzCJ4mAA7oLChbw47qN07dxn0daVyipeXFyGaaVlEWaCBo4l-NE8WhX-AENOm3-w8Rc3Kh_8dQuH2NRMNC3mW5qvMNAkeFlI2ZwTSpUYHxeev8Oey8UQouGoA74q3p6FviI1QFwrHeRpNGOZojRuxY3E6GTWXm-KrkzfGHqnQ8V2XmtJ5VNJxFmKVb8LxBjP_6ox7-rf8zzNuAAqrKIrzeUMKXu4EfRUwmSAjg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:17:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 835.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to get conversation by ID for non-participant
**Status:** ❌ FAILED  
**Duration:** 1.68s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Permission denied"[39m
Received string:    [31m"Forbidden: You must be a participant to view this conversation"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (994.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "etag": "W/\"147-mPNXXPtO9CTH7toGMf9h7uvkzog\"",
    "date": "Tue, 27 May 2025 23:17:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d461d50b-4d61-4d9b-b324-216f522ebf96",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:17:23.219Z",
    "lastMessageAt": "2025-05-27T23:17:23.219Z",
    "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
    ]
  }
}
```

**⏱️ Duration:** 994.4 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/d461d50b-4d61-4d9b-b324-216f522ebf96 (681.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMywidXNlcl9pZCI6IkxoaHVyVEVmUFdZeWM3YWlVRDAxMjE5c01tQTMiLCJzdWIiOiJMaGh1clRFZlBXWXljN2FpVUQwMTIxOXNNbUEzIiwiaWF0IjoxNzQ4Mzg3ODMzLCJleHAiOjE3NDgzOTE0MzMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzgzMjY0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3ODMyNjQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GscJEqXgkORAmiO5Br73_k-HcsT0BrmCJSsV7t2ny0F9BQ-YCHEnyqN_geK0vNfNH6u7xnnlUVK9OLnNIHdj73dHrTwqFbJ31ipFhjfTOiDIU_R5FvjArb-OIl9fkFRb5nULAagfcYMazdq64Noc-2MxoYPYud0TTf3NooWsg0Hp30gyKtjNMRzCU7P5paxKUkcso_xVt3mVWzSfI8vcKHsHFdVeSuqvpq5Tj8glMCKIa2rzWwwqMnVc0-QcNszd36QSwjkSKfqC2lwN_gXqAdNBcuafghLnlgfZjeOC013U4taB5E3N_Y-zsmqNBHtB8rHPreQO2tFgp5_WiVYM8A",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:17:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view this conversation"
  }
}
```

**⏱️ Duration:** 681.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get conversations for user
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/lEiQDfYGH2eJ58etQLZtPgow8Tu1 (986.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMiwidXNlcl9pZCI6ImxFaVFEZllHSDJlSjU4ZXRRTFp0UGdvdzhUdTEiLCJzdWIiOiJsRWlRRGZZR0gyZUo1OGV0UUxadFBnb3c4VHUxIiwiaWF0IjoxNzQ4Mzg3ODMyLCJleHAiOjE3NDgzOTE0MzIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mcPHVH3pADHCnXC8nw956n1ChgNiSIwtKBG3xdejk6m5IMDICbHJYeO0OxgfKZGHdPgbi0IdxSw8s8eomvVsCdAHGYrSKEjb9h1V2e5kiHbZAPCUdzCJ4mAA7oLChbw47qN07dxn0daVyipeXFyGaaVlEWaCBo4l-NE8WhX-AENOm3-w8Rc3Kh_8dQuH2NRMNC3mW5qvMNAkeFlI2ZwTSpUYHxeev8Oey8UQouGoA74q3p6FviI1QFwrHeRpNGOZojRuxY3E6GTWXm-KrkzfGHqnQ8V2XmtJ5VNJxFmKVb8LxBjP_6ox7-rf8zzNuAAqrKIrzeUMKXu4EfRUwmSAjg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "etag": "W/\"421-K2ESck3jToSb+ar6orIN3J54Fms\"",
    "date": "Tue, 27 May 2025 23:17:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "d461d50b-4d61-4d9b-b324-216f522ebf96",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:17:23.219Z",
      "lastMessageAt": "2025-05-27T23:17:23.219Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
      ],
      "messages": []
    },
    {
      "id": "ea5623e9-efdd-4da2-853d-b44312b1e626",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:17:21.203Z",
      "lastMessageAt": "2025-05-27T23:17:21.203Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1",
        "LhhurTEfPWYyc7aiUD01219sMmA3"
      ],
      "messages": []
    },
    {
      "id": "5690393a-80a0-40eb-8b20-2eb462851070",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:17:18.238Z",
      "lastMessageAt": "2025-05-27T23:17:18.238Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 986.7 ms  

</details>


---

### Test: Should get conversation with invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/invalid-id (896.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:17:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid conversation ID format"
  }
}
```

**⏱️ Duration:** 896.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should soft delete conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.84s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/5690393a-80a0-40eb-8b20-2eb462851070/soft-delete (845.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMiwidXNlcl9pZCI6ImxFaVFEZllHSDJlSjU4ZXRRTFp0UGdvdzhUdTEiLCJzdWIiOiJsRWlRRGZZR0gyZUo1OGV0UUxadFBnb3c4VHUxIiwiaWF0IjoxNzQ4Mzg3ODMyLCJleHAiOjE3NDgzOTE0MzIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mcPHVH3pADHCnXC8nw956n1ChgNiSIwtKBG3xdejk6m5IMDICbHJYeO0OxgfKZGHdPgbi0IdxSw8s8eomvVsCdAHGYrSKEjb9h1V2e5kiHbZAPCUdzCJ4mAA7oLChbw47qN07dxn0daVyipeXFyGaaVlEWaCBo4l-NE8WhX-AENOm3-w8Rc3Kh_8dQuH2NRMNC3mW5qvMNAkeFlI2ZwTSpUYHxeev8Oey8UQouGoA74q3p6FviI1QFwrHeRpNGOZojRuxY3E6GTWXm-KrkzfGHqnQ8V2XmtJ5VNJxFmKVb8LxBjP_6ox7-rf8zzNuAAqrKIrzeUMKXu4EfRUwmSAjg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "userId": "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "content-length": "76",
    "etag": "W/\"4c-MFvm+XNZLOijLVrNyUxZHqymVnw\"",
    "date": "Tue, 27 May 2025 23:17:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to modify this conversation"
  }
}
```

**⏱️ Duration:** 845.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should hide conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.67s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/5690393a-80a0-40eb-8b20-2eb462851070/hide (674.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMiwidXNlcl9pZCI6ImxFaVFEZllHSDJlSjU4ZXRRTFp0UGdvdzhUdTEiLCJzdWIiOiJsRWlRRGZZR0gyZUo1OGV0UUxadFBnb3c4VHUxIiwiaWF0IjoxNzQ4Mzg3ODMyLCJleHAiOjE3NDgzOTE0MzIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mcPHVH3pADHCnXC8nw956n1ChgNiSIwtKBG3xdejk6m5IMDICbHJYeO0OxgfKZGHdPgbi0IdxSw8s8eomvVsCdAHGYrSKEjb9h1V2e5kiHbZAPCUdzCJ4mAA7oLChbw47qN07dxn0daVyipeXFyGaaVlEWaCBo4l-NE8WhX-AENOm3-w8Rc3Kh_8dQuH2NRMNC3mW5qvMNAkeFlI2ZwTSpUYHxeev8Oey8UQouGoA74q3p6FviI1QFwrHeRpNGOZojRuxY3E6GTWXm-KrkzfGHqnQ8V2XmtJ5VNJxFmKVb8LxBjP_6ox7-rf8zzNuAAqrKIrzeUMKXu4EfRUwmSAjg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "userId": "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "content-length": "76",
    "etag": "W/\"4c-MFvm+XNZLOijLVrNyUxZHqymVnw\"",
    "date": "Tue, 27 May 2025 23:17:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to modify this conversation"
  }
}
```

**⏱️ Duration:** 674.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should unhide conversation for user
**Status:** ❌ FAILED  
**Duration:** 0.67s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/5690393a-80a0-40eb-8b20-2eb462851070/unhide (666.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMiwidXNlcl9pZCI6ImxFaVFEZllHSDJlSjU4ZXRRTFp0UGdvdzhUdTEiLCJzdWIiOiJsRWlRRGZZR0gyZUo1OGV0UUxadFBnb3c4VHUxIiwiaWF0IjoxNzQ4Mzg3ODMyLCJleHAiOjE3NDgzOTE0MzIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mcPHVH3pADHCnXC8nw956n1ChgNiSIwtKBG3xdejk6m5IMDICbHJYeO0OxgfKZGHdPgbi0IdxSw8s8eomvVsCdAHGYrSKEjb9h1V2e5kiHbZAPCUdzCJ4mAA7oLChbw47qN07dxn0daVyipeXFyGaaVlEWaCBo4l-NE8WhX-AENOm3-w8Rc3Kh_8dQuH2NRMNC3mW5qvMNAkeFlI2ZwTSpUYHxeev8Oey8UQouGoA74q3p6FviI1QFwrHeRpNGOZojRuxY3E6GTWXm-KrkzfGHqnQ8V2XmtJ5VNJxFmKVb8LxBjP_6ox7-rf8zzNuAAqrKIrzeUMKXu4EfRUwmSAjg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "userId": "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "content-length": "76",
    "etag": "W/\"4c-MFvm+XNZLOijLVrNyUxZHqymVnw\"",
    "date": "Tue, 27 May 2025 23:17:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to modify this conversation"
  }
}
```

**⏱️ Duration:** 666.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should block conversation (moderator)
**Status:** ❌ FAILED  
**Duration:** 0.72s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ea5623e9-efdd-4da2-853d-b44312b1e626/block (719.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMywidXNlcl9pZCI6IkxoaHVyVEVmUFdZeWM3YWlVRDAxMjE5c01tQTMiLCJzdWIiOiJMaGh1clRFZlBXWXljN2FpVUQwMTIxOXNNbUEzIiwiaWF0IjoxNzQ4Mzg3ODMzLCJleHAiOjE3NDgzOTE0MzMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzgzMjY0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3ODMyNjQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GscJEqXgkORAmiO5Br73_k-HcsT0BrmCJSsV7t2ny0F9BQ-YCHEnyqN_geK0vNfNH6u7xnnlUVK9OLnNIHdj73dHrTwqFbJ31ipFhjfTOiDIU_R5FvjArb-OIl9fkFRb5nULAagfcYMazdq64Noc-2MxoYPYud0TTf3NooWsg0Hp30gyKtjNMRzCU7P5paxKUkcso_xVt3mVWzSfI8vcKHsHFdVeSuqvpq5Tj8glMCKIa2rzWwwqMnVc0-QcNszd36QSwjkSKfqC2lwN_gXqAdNBcuafghLnlgfZjeOC013U4taB5E3N_Y-zsmqNBHtB8rHPreQO2tFgp5_WiVYM8A",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "userId": "LhhurTEfPWYyc7aiUD01219sMmA3"
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
    "content-length": "76",
    "etag": "W/\"4c-MFvm+XNZLOijLVrNyUxZHqymVnw\"",
    "date": "Tue, 27 May 2025 23:17:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to modify this conversation"
  }
}
```

**⏱️ Duration:** 719.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should unblock conversation (moderator)
**Status:** ❌ FAILED  
**Duration:** 0.71s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/ea5623e9-efdd-4da2-853d-b44312b1e626/unblock (710.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMywidXNlcl9pZCI6IkxoaHVyVEVmUFdZeWM3YWlVRDAxMjE5c01tQTMiLCJzdWIiOiJMaGh1clRFZlBXWXljN2FpVUQwMTIxOXNNbUEzIiwiaWF0IjoxNzQ4Mzg3ODMzLCJleHAiOjE3NDgzOTE0MzMsImVtYWlsIjoiY29udmVyc2F0aW9ucy1tb2RlcmF0b3ItMTc0ODM4NzgzMjY0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjb252ZXJzYXRpb25zLW1vZGVyYXRvci0xNzQ4Mzg3ODMyNjQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GscJEqXgkORAmiO5Br73_k-HcsT0BrmCJSsV7t2ny0F9BQ-YCHEnyqN_geK0vNfNH6u7xnnlUVK9OLnNIHdj73dHrTwqFbJ31ipFhjfTOiDIU_R5FvjArb-OIl9fkFRb5nULAagfcYMazdq64Noc-2MxoYPYud0TTf3NooWsg0Hp30gyKtjNMRzCU7P5paxKUkcso_xVt3mVWzSfI8vcKHsHFdVeSuqvpq5Tj8glMCKIa2rzWwwqMnVc0-QcNszd36QSwjkSKfqC2lwN_gXqAdNBcuafghLnlgfZjeOC013U4taB5E3N_Y-zsmqNBHtB8rHPreQO2tFgp5_WiVYM8A",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "userId": "LhhurTEfPWYyc7aiUD01219sMmA3"
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
    "content-length": "76",
    "etag": "W/\"4c-MFvm+XNZLOijLVrNyUxZHqymVnw\"",
    "date": "Tue, 27 May 2025 23:17:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to modify this conversation"
  }
}
```

**⏱️ Duration:** 710.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to block conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/conversations/5690393a-80a0-40eb-8b20-2eb462851070/block (435.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMiwidXNlcl9pZCI6ImxFaVFEZllHSDJlSjU4ZXRRTFp0UGdvdzhUdTEiLCJzdWIiOiJsRWlRRGZZR0gyZUo1OGV0UUxadFBnb3c4VHUxIiwiaWF0IjoxNzQ4Mzg3ODMyLCJleHAiOjE3NDgzOTE0MzIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mcPHVH3pADHCnXC8nw956n1ChgNiSIwtKBG3xdejk6m5IMDICbHJYeO0OxgfKZGHdPgbi0IdxSw8s8eomvVsCdAHGYrSKEjb9h1V2e5kiHbZAPCUdzCJ4mAA7oLChbw47qN07dxn0daVyipeXFyGaaVlEWaCBo4l-NE8WhX-AENOm3-w8Rc3Kh_8dQuH2NRMNC3mW5qvMNAkeFlI2ZwTSpUYHxeev8Oey8UQouGoA74q3p6FviI1QFwrHeRpNGOZojRuxY3E6GTWXm-KrkzfGHqnQ8V2XmtJ5VNJxFmKVb8LxBjP_6ox7-rf8zzNuAAqrKIrzeUMKXu4EfRUwmSAjg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "userId": "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "date": "Tue, 27 May 2025 23:18:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 435.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should permanently delete conversation (admin)
**Status:** ✅ PASSED  
**Duration:** 1.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (963.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "etag": "W/\"149-OD79tB9PSKebEUZVJJm6fz7xK8o\"",
    "date": "Tue, 27 May 2025 23:18:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "be2454b9-c690-48d7-9865-a12a5eacfa95",
    "title": "Conversation to Delete",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:18:00.837Z",
    "lastMessageAt": "2025-05-27T23:18:00.837Z",
    "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
    ]
  }
}
```

**⏱️ Duration:** 963.8 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/be2454b9-c690-48d7-9865-a12a5eacfa95 (760.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:18:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 760.0 ms  

</details>


---

### Test: Should fail to permanently delete conversation as regular user
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/conversations/5690393a-80a0-40eb-8b20-2eb462851070 (473.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMiwidXNlcl9pZCI6ImxFaVFEZllHSDJlSjU4ZXRRTFp0UGdvdzhUdTEiLCJzdWIiOiJsRWlRRGZZR0gyZUo1OGV0UUxadFBnb3c4VHUxIiwiaWF0IjoxNzQ4Mzg3ODMyLCJleHAiOjE3NDgzOTE0MzIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mcPHVH3pADHCnXC8nw956n1ChgNiSIwtKBG3xdejk6m5IMDICbHJYeO0OxgfKZGHdPgbi0IdxSw8s8eomvVsCdAHGYrSKEjb9h1V2e5kiHbZAPCUdzCJ4mAA7oLChbw47qN07dxn0daVyipeXFyGaaVlEWaCBo4l-NE8WhX-AENOm3-w8Rc3Kh_8dQuH2NRMNC3mW5qvMNAkeFlI2ZwTSpUYHxeev8Oey8UQouGoA74q3p6FviI1QFwrHeRpNGOZojRuxY3E6GTWXm-KrkzfGHqnQ8V2XmtJ5VNJxFmKVb8LxBjP_6ox7-rf8zzNuAAqrKIrzeUMKXu4EfRUwmSAjg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:18:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 473.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get all conversations (admin)
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (935.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "content-length": "5288",
    "etag": "W/\"14a8-yaFCnOXxJFZZ0U9URfvLISGpaIU\"",
    "date": "Tue, 27 May 2025 23:18:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "d461d50b-4d61-4d9b-b324-216f522ebf96",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:17:23.219Z",
      "lastMessageAt": "2025-05-27T23:17:23.219Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "lEiQDfYGH2eJ58etQLZtPgow8Tu1",
          "email": "conversations-regular-1748387831314@example.com",
          "name": "Regular User"
        }
      ],
      "messages": []
    },
    {
      "id": "ea5623e9-efdd-4da2-853d-b44312b1e626",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:17:21.203Z",
      "lastMessageAt": "2025-05-27T23:17:21.203Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "lEiQDfYGH2eJ58etQLZtPgow8Tu1",
          "email": "conversations-regular-1748387831314@example.com",
          "name": "Regular User"
        },
        {
          "id": "LhhurTEfPWYyc7aiUD01219sMmA3",
          "email": "conversations-moderator-1748387832647@example.com",
          "name": "Moderator User"
        }
      ],
      "messages": []
    },
    {
      "id": "5690393a-80a0-40eb-8b20-2eb462851070",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:17:18.238Z",
      "lastMessageAt": "2025-05-27T23:17:18.238Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel"
        },
        {
          "id": "lEiQDfYGH2eJ58etQLZtPgow8Tu1",
          "email": "conversations-regular-1748387831314@example.com",
          "name": "Regular User"
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

**⏱️ Duration:** 935.9 ms  

</details>


---

### Test: Should fail to get all conversations as regular user
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/conversations (493.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4NzgzMiwidXNlcl9pZCI6ImxFaVFEZllHSDJlSjU4ZXRRTFp0UGdvdzhUdTEiLCJzdWIiOiJsRWlRRGZZR0gyZUo1OGV0UUxadFBnb3c4VHUxIiwiaWF0IjoxNzQ4Mzg3ODMyLCJleHAiOjE3NDgzOTE0MzIsImVtYWlsIjoiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29udmVyc2F0aW9ucy1yZWd1bGFyLTE3NDgzODc4MzEzMTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.mcPHVH3pADHCnXC8nw956n1ChgNiSIwtKBG3xdejk6m5IMDICbHJYeO0OxgfKZGHdPgbi0IdxSw8s8eomvVsCdAHGYrSKEjb9h1V2e5kiHbZAPCUdzCJ4mAA7oLChbw47qN07dxn0daVyipeXFyGaaVlEWaCBo4l-NE8WhX-AENOm3-w8Rc3Kh_8dQuH2NRMNC3mW5qvMNAkeFlI2ZwTSpUYHxeev8Oey8UQouGoA74q3p6FviI1QFwrHeRpNGOZojRuxY3E6GTWXm-KrkzfGHqnQ8V2XmtJ5VNJxFmKVb8LxBjP_6ox7-rf8zzNuAAqrKIrzeUMKXu4EfRUwmSAjg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:18:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 493.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should create conversation in specific organization
**Status:** ✅ PASSED  
**Duration:** 1.36s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1355.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "83548cbe-9bcd-4e55-bc37-d1d6a24695a5"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "etag": "W/\"14c-XswHnLWwyd5vvJmUg2j0uEq8gHk\"",
    "date": "Tue, 27 May 2025 23:18:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "564c665c-4988-4363-82e9-91a9f13b5bd8",
    "title": "Org-Specific Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:18:04.869Z",
    "lastMessageAt": "2025-05-27T23:18:04.869Z",
    "organizationId": "83548cbe-9bcd-4e55-bc37-d1d6a24695a5",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
    ]
  }
}
```

**⏱️ Duration:** 1355.8 ms  

</details>


---

### Test: Should not access conversation from different organization
**Status:** ❌ FAILED  
**Duration:** 1.64s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (921.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
    "etag": "W/\"144-0dRvanqs8sJ1nKZpkgYziSLIxgE\"",
    "date": "Tue, 27 May 2025 23:18:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b1853f29-8e62-4997-baa7-9d7b4e27d8d6",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:18:05.790Z",
    "lastMessageAt": "2025-05-27T23:18:05.790Z",
    "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
    ]
  }
}
```

**⏱️ Duration:** 921.4 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/conversations/b1853f29-8e62-4997-baa7-9d7b4e27d8d6 (717.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "83548cbe-9bcd-4e55-bc37-d1d6a24695a5"
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
    "etag": "W/\"152-/aFtswLcbh3a/IQZwFrgjRFICWU\"",
    "date": "Tue, 27 May 2025 23:18:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b1853f29-8e62-4997-baa7-9d7b4e27d8d6",
    "title": "Org1 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:18:05.790Z",
    "lastMessageAt": "2025-05-27T23:18:05.790Z",
    "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
    ],
    "messages": []
  }
}
```

**⏱️ Duration:** 717.1 ms  

</details>


---

### Test: Should filter conversations by organization
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (883.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "etag": "W/\"574-w71lmgirDJq+yfTE79F+s50eVHo\"",
    "date": "Tue, 27 May 2025 23:18:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "b1853f29-8e62-4997-baa7-9d7b4e27d8d6",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:18:05.790Z",
      "lastMessageAt": "2025-05-27T23:18:05.790Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
      ],
      "messages": []
    },
    {
      "id": "ea5623e9-efdd-4da2-853d-b44312b1e626",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:17:21.203Z",
      "lastMessageAt": "2025-05-27T23:17:21.203Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1",
        "LhhurTEfPWYyc7aiUD01219sMmA3"
      ],
      "messages": []
    },
    {
      "id": "5690393a-80a0-40eb-8b20-2eb462851070",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:17:18.238Z",
      "lastMessageAt": "2025-05-27T23:17:18.238Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
      ],
      "messages": []
    }
  ]
}
```

**⏱️ Duration:** 883.3 ms  

</details>


---

### Test: Super admin should access conversations across organizations
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/user/tYFy4ecd0TY2fErw9jsp6e1XHvw1 (895.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg"
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
    "content-length": "4796",
    "etag": "W/\"12bc-C8DDlBhxs1b3TnCjc5iUU624CqE\"",
    "date": "Tue, 27 May 2025 23:18:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "b1853f29-8e62-4997-baa7-9d7b4e27d8d6",
      "title": "Org1 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:18:05.790Z",
      "lastMessageAt": "2025-05-27T23:18:05.790Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
      "organizationId": "83548cbe-9bcd-4e55-bc37-d1d6a24695a5",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
      ],
      "messages": []
    },
    {
      "id": "ea5623e9-efdd-4da2-853d-b44312b1e626",
      "title": "Group Test Conversation",
      "type": "group",
      "status": "active",
      "createdAt": "2025-05-27T23:17:21.203Z",
      "lastMessageAt": "2025-05-27T23:17:21.203Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1",
        "LhhurTEfPWYyc7aiUD01219sMmA3"
      ],
      "messages": []
    },
    {
      "id": "5690393a-80a0-40eb-8b20-2eb462851070",
      "title": "Test Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-05-27T23:17:18.238Z",
      "lastMessageAt": "2025-05-27T23:17:18.238Z",
      "organizationId": "ccce42bf-a17c-44ad-9905-10ef421b73bb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "lEiQDfYGH2eJ58etQLZtPgow8Tu1"
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

**⏱️ Duration:** 895.1 ms  

</details>


---

### Test: Should handle non-existent conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.74s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m404[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/123e4567-e89b-12d3-a456-426614174000 (740.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:18:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving conversation",
    "details": "Conversation not found"
  }
}
```

**⏱️ Duration:** 740.9 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/5690393a-80a0-40eb-8b20-2eb462851070 (12.5ms)</summary>

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
    "date": "Tue, 27 May 2025 23:18:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 12.5 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (538.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg",
    "X-Organization-Id": "ccce42bf-a17c-44ad-9905-10ef421b73bb"
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
    "date": "Tue, 27 May 2025 23:18:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 538.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/conversations/5690393a-80a0-40eb-8b20-2eb462851070 (675.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg"
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
    "date": "Tue, 27 May 2025 23:18:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 675.6 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/conversations/ea5623e9-efdd-4da2-853d-b44312b1e626 (638.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg"
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
    "date": "Tue, 27 May 2025 23:18:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 638.5 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/ccce42bf-a17c-44ad-9905-10ef421b73bb (1445.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg"
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
    "date": "Tue, 27 May 2025 23:18:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1445.8 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/83548cbe-9bcd-4e55-bc37-d1d6a24695a5 (1248.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4MjgsImV4cCI6MTc0ODM5MTQyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IuQHB6wi9wR_VCrwQfO5CrVcAqqCjFFs-8ngT9ubiDf6LUTR8jWUPRDNoi7it6hfqnR7mtjS0yrWlDkhhWhAgd_A3aj8NdHYwaebWrq0icDQaCMNlneRiunhfKnxh5AS8scflAb6bGD2CSheTMqKeZQFiZzRffNr_BfXm51PheMq5Iwr1sRmLnA8VMoQBUPrQ0mggzqJU_rgn67EDf2pNFPM2abXT1A8mgdI9JWuMX5jbKuNLMiZ9c6BK9hMCSPT25DnLOKE7Dz9jAQUXj-shWY9S6oMmIcbuwv1MDIFTv7siV9-CILb25da1JUw847RJ5HCABNW3NXz90sDo8LUkg"
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
    "date": "Tue, 27 May 2025 23:18:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1248.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/auth/login (346.8ms)</summary>

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
    "etag": "W/\"640-3vCSYBAMoK5mKODjySE1sv6l3Fo\"",
    "date": "Tue, 27 May 2025 23:18:14 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4OTQsImV4cCI6MTc0ODM5MTQ5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UbTge5OjO9oJ1psWxl2kU8_LZCSdy-UVEF9qfwhPVNbHqkl6Rpd6NWqHCTGbqPpbnpjntBulwzJ_joOjUCm6voGw1MFDlk_LwgcUmGLTGZURYe4HLiQdnXpjMq4_VzFkIv7mJZM5ryvwdF6zT9BpR1tuIOh8K96gqWk909jPJfdGwf9QQLN-cdADzmMYcOmzGHud7W23u_M-VeLPckLUBKWc3oXUJ_kvMK_8IeqzZoIyQn4Trs6VfdNB68YPBRNm4atKg3AyhhMg2sWRRha-8Vlknn8aUWSZarMxNMVFgTcWlJhae3OpU-FCXviUm1FoYTB6NHDjfm7xJiwWiEbyiA",
      "refreshToken": "AMf-vByDii0J1DKNxKaRPWFAyNAiTO3Zn-C_Rc---mYn463qn-FEF2pmbD3Wjow4SThuUDyxtvtxys84XcJ5sVszr0WxjUqq4wmNQip2coS-f2fVuQNxheUfwbKyo5cdOxSEXYvSbPX_JtlhFMfKFsktYLsyT_-k4HiJxW39AnXKOmEgXe28Wsrs68EpjQamjIV5S-0qGIzOGIczPcBwfGlxBvESoZV9qAuFlD2E9zVi9ajqf0TeYtV8WkuZT9C8eOQ0BqG8WGWh",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 346.8 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/admin/users/lEiQDfYGH2eJ58etQLZtPgow8Tu1 (1292.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4OTQsImV4cCI6MTc0ODM5MTQ5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UbTge5OjO9oJ1psWxl2kU8_LZCSdy-UVEF9qfwhPVNbHqkl6Rpd6NWqHCTGbqPpbnpjntBulwzJ_joOjUCm6voGw1MFDlk_LwgcUmGLTGZURYe4HLiQdnXpjMq4_VzFkIv7mJZM5ryvwdF6zT9BpR1tuIOh8K96gqWk909jPJfdGwf9QQLN-cdADzmMYcOmzGHud7W23u_M-VeLPckLUBKWc3oXUJ_kvMK_8IeqzZoIyQn4Trs6VfdNB68YPBRNm4atKg3AyhhMg2sWRRha-8Vlknn8aUWSZarMxNMVFgTcWlJhae3OpU-FCXviUm1FoYTB6NHDjfm7xJiwWiEbyiA"
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
    "date": "Tue, 27 May 2025 23:18:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1292.8 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (344.8ms)</summary>

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
    "etag": "W/\"640-IFbzBu9cr3KTZhJF933yBG99t8g\"",
    "date": "Tue, 27 May 2025 23:18:16 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4OTUsImV4cCI6MTc0ODM5MTQ5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fbKZwOr-TW814QDYpqsYjLGd_tV1baIJPeUgUuPQRosiaAa57yIz0lbZRewbOwiRTIJ2xi6COJFU6LMfLUQJ5lr8SGMJVvAoiyYJf79eTMIM6X977MFRnLiiz-eNQzo8_AAinIn52-vuHOF5pvvZfpFj4UJuxhadeIo_J694yOIfZiHeWWJ8FHbH3hMKdGCGUvTUQu1L8dBuYSxX7c2RzdiDEei8YCsareCZlHj5xCQu_qfL-YNFX_e0o1j-5X43lLZt3t-D3WwXOUSnHn8be7fvdoUvA0Ypko6GpFj_lhjxdOawWgaqCPOD8H5SCwK7d95CXIedV_DDNqpvZ7LhhQ",
      "refreshToken": "AMf-vBzK2OTnPLmmCjcrOa5dfoZFYxO5_tbRH3cCr0YzrxO4zf2SADOcbcf3z13f2h85rqYzFsk0syyFIfxFAYBvLlvsOjiq7B5Pt9tm9BMWVul-NnH6j_gaxtVcjKs9qmmBHCoh-AeHLGO2c3LzbfBvhfow39G2UhvTv2Zlz2Bzwxb3cMYnPbHPcmoaVGF5RYZQSnsuSxlIycfTRk0irwewhhlYzfR_0_8zqEuj1keJDFTgjNieIqST91tfprJX1LHN1Nw31np4",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 344.8 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/LhhurTEfPWYyc7aiUD01219sMmA3 (1316.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg3ODk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODc4OTUsImV4cCI6MTc0ODM5MTQ5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fbKZwOr-TW814QDYpqsYjLGd_tV1baIJPeUgUuPQRosiaAa57yIz0lbZRewbOwiRTIJ2xi6COJFU6LMfLUQJ5lr8SGMJVvAoiyYJf79eTMIM6X977MFRnLiiz-eNQzo8_AAinIn52-vuHOF5pvvZfpFj4UJuxhadeIo_J694yOIfZiHeWWJ8FHbH3hMKdGCGUvTUQu1L8dBuYSxX7c2RzdiDEei8YCsareCZlHj5xCQu_qfL-YNFX_e0o1j-5X43lLZt3t-D3WwXOUSnHn8be7fvdoUvA0Ypko6GpFj_lhjxdOawWgaqCPOD8H5SCwK7d95CXIedV_DDNqpvZ7LhhQ"
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
    "date": "Tue, 27 May 2025 23:18:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1316.4 ms  

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
