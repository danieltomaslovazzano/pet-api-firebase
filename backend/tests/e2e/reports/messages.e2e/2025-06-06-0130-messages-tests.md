# E2E Test Report: messages-tests

**Date:** 6/6/2025  
**Time:** 1:30:03 AM  
**Duration:** 92.82s  
**Tests:** 26 total, 26 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation | PASSED | 1.64s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content | PASSED | 1.03s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID | PASSED | 0.76s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation | PASSED | 0.85s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant | PASSED | 0.78s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant | PASSED | 2.87s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation | PASSED | 0.92s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format | PASSED | 0.85s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) | PASSED | 0.81s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender | PASSED | 0.59s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) | PASSED | 1.87s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) | PASSED | 1.98s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user | PASSED | 10.06s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) | PASSED | 0.90s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user | PASSED | 0.60s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) | PASSED | 4.95s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator) |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user | PASSED | 30.00s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization | PASSED | 2.24s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization | PASSED | 1.58s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization | PASSED | 0.80s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations | PASSED | 0.58s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID | PASSED | 0.58s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access | PASSED | 0.62s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data | PASSED | 0.52s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content | PASSED | 0.92s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content |
| ✅ Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID | PASSED | 0.67s | Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID |


---

## Detailed Execution Log

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create a message in a conversation
**Status:** ✅ PASSED  
**Duration:** 1.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1629.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Hello, this is a test message!",
    "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "439",
    "etag": "W/\"1b7-PCb6dyDeKdbHQJ8Dsw6hviS2olI\"",
    "date": "Thu, 05 Jun 2025 23:28:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "92f9906f-6508-47ff-a26d-7daa8b3c7573",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:28:44.885Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1629.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without content
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1030.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "183",
    "etag": "W/\"b7-Ei1u3a6nlCGodfTslkhHGjb4mhg\"",
    "date": "Thu, 05 Jun 2025 23:28:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Message validation error: {{error}}",
    "details": {
      "error": "Message must have content or attachments"
    },
    "messageKey": "messages.validation_error",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1030.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (745.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Message without conversation"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "133",
    "etag": "W/\"85-cTFdXS4onzClqPM7FkggpcHLwso\"",
    "date": "Thu, 05 Jun 2025 23:28:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Conversation ID is required",
    "details": {},
    "messageKey": "messages.conversation_id_required",
    "language": "en"
  }
}
```

**⏱️ Duration:** 745.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Creation Should create message in group conversation
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (848.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjExNSwidXNlcl9pZCI6IjZJQW5MVENhZ2ZRMzFvdzczNWlqdDRoRk9yYTIiLCJzdWIiOiI2SUFuTFRDYWdmUTMxb3c3MzVpanQ0aEZPcmEyIiwiaWF0IjoxNzQ5MTY2MTE1LCJleHAiOjE3NDkxNjk3MTUsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MTE0NDgxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjExNDQ4MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NLswqqZNNy_BSGM1zt61vtMcUW5095gN9gnXbQqFOug0Wn1THxwCniD_qvREV16EGR03bz5K32I_B52UVctdy7esl4Ccun0FNGBLwNxxrmrzDnOEh_5OU-XIjoCN5ukrrpfp8-dCjbmggfXjgpgO3cb4cvx3HqmP0YDHCn2YkwJslZGyI5TF_ETtpv3invaFdHendn0oC4Kx0lNVTQchuX4vcPaseuLR_hkrqmo7fLYHGqdVzwJSOSzxEU4cc-zToYxc5jel5-6-bwI_5WHXSFLv3x0EEPpWT639vCjJQaHlBh4ODFBvBkvhAUGJEpvDRoDspzLM_MV7ewKmPGyQiA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Group message test",
    "conversationId": "5fed7b4a-1aee-435b-a9f9-0973ef70c1c2"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "427",
    "etag": "W/\"1ab-tT0XmVQiqy5mM2ZRVt3fxlnktlk\"",
    "date": "Thu, 05 Jun 2025 23:28:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "dcc0a3e6-2c48-43e4-a532-70a944b05405",
      "conversationId": "5fed7b4a-1aee-435b-a9f9-0973ef70c1c2",
      "senderId": "6IAnLTCagfQ31ow735ijt4hFOra2",
      "content": "Group message test",
      "status": "sent",
      "timestamp": "2025-06-05T23:28:48.104Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 848.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get message by ID for participant
**Status:** ✅ PASSED  
**Duration:** 0.78s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/92f9906f-6508-47ff-a26d-7daa8b3c7573 (772.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "372",
    "etag": "W/\"174-RyRaTfrVJKGXMDCv3QyCcClMLPg\"",
    "date": "Thu, 05 Jun 2025 23:28:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "92f9906f-6508-47ff-a26d-7daa8b3c7573",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:28:44.885Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 772.8 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should fail to get message by ID for non-participant
**Status:** ✅ PASSED  
**Duration:** 2.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (976.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "6IAnLTCagfQ31ow735ijt4hFOra2"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "450",
    "etag": "W/\"1c2-3R+8Q7XiACzgAJbURZhOBVB1ODk\"",
    "date": "Thu, 05 Jun 2025 23:28:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "d1a84119-0bda-47dd-94ec-523188c1650b",
      "title": "Private Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T23:28:49.557Z",
      "lastMessageAt": "2025-06-05T23:28:49.557Z",
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "6IAnLTCagfQ31ow735ijt4hFOra2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 976.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (946.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Private message",
    "conversationId": "d1a84119-0bda-47dd-94ec-523188c1650b"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "424",
    "etag": "W/\"1a8-PTQIpaECOjGRBtCA4uYya7rdIg4\"",
    "date": "Thu, 05 Jun 2025 23:28:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "459cae62-c30c-4827-9226-32f6ecada15d",
      "conversationId": "d1a84119-0bda-47dd-94ec-523188c1650b",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-05T23:28:50.813Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 946.3 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/messages/459cae62-c30c-4827-9226-32f6ecada15d (934.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjExNywidXNlcl9pZCI6ImxoTVV4SjBoSDNjZW1namRPalYyeUFtRFVVdzIiLCJzdWIiOiJsaE1VeEowaEgzY2VtZ2pkT2pWMnlBbURVVXcyIiwiaWF0IjoxNzQ5MTY2MTE3LCJleHAiOjE3NDkxNjk3MTcsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjYxMTU5MDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjYxMTU5MDdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.oc2awQwnlVm2aZg2vTc-5p532qlXS3RCIuV8OVJTZe3NUDx6j-FuqgNMHolSlRR0lmSUe0vPDmFHpaV6Q3N6Vsj7TLuPQjmNb47rTGyvO5MX_Q8SqPnO_-jojqT24Cv2pW21wYapUy2zd6wAyQe5b6RQjFuVR3iX2SHgEEF-7YGVaS_KRt-UjztRcvA9Oz5ptzyFIOwMqVx7sWzPpa1HD-ybeFp6XBL_tIPVcGdG_OZpSRV4tCUsZNfS4Qs1e4xrhwagf3NoLfNxhmCrK2MWejx1Yg_tnxj6LLc3Ywc_1hymekH7wZwbU8iniPTzlg5MZrC2kqPa0vbx9t6SOf5sIA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "161",
    "etag": "W/\"a1-u6PqDgxFV4EBtTJmzo6uzP+KJjg\"",
    "date": "Thu, 05 Jun 2025 23:28:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Forbidden: You must be a participant to view this message",
    "details": {},
    "messageKey": "messages.forbidden_view_message",
    "language": "en"
  }
}
```

**⏱️ Duration:** 934.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should get messages for conversation
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/ca3a4f78-bc5b-432d-8b88-ae517e4f3bad/messages (916.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "374",
    "etag": "W/\"176-yJJLaM53+COgtWnBbOrnvq0FuIM\"",
    "date": "Thu, 05 Jun 2025 23:28:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "92f9906f-6508-47ff-a26d-7daa8b3c7573",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:44.885Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 916.1 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Retrieval Should handle invalid message ID format
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/invalid-id (846.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "124",
    "etag": "W/\"7c-IKrz1NUOOSOjMa4gy+qXKiwQ8mw\"",
    "date": "Thu, 05 Jun 2025 23:28:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Invalid message ID format",
    "details": {},
    "messageKey": "messages.invalid_id_format",
    "language": "en"
  }
}
```

**⏱️ Duration:** 846.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should update message content (sender)
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/92f9906f-6508-47ff-a26d-7daa8b3c7573 (797.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Updated message content"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1296",
    "etag": "W/\"510-B1Vspf2AHTmLsUA0zAF8wjjj+g0\"",
    "date": "Thu, 05 Jun 2025 23:28:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "messages.error_updating",
    "details": {
      "error": "\nInvalid `prisma.message.update()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/messageModel.js:218:49\n\n  215 // Add updated timestamp\n  216 updateFields.updatedAt = new Date();\n  217 \n→ 218 const updatedMessage = await prisma.message.update({\n        where: {\n          id: \"92f9906f-6508-47ff-a26d-7daa8b3c7573\"\n        },\n        data: {\n          content: \"Updated message content\",\n          updatedAt: new Date(\"2025-06-05T23:28:54.416Z\"),\n          ~~~~~~~~~\n      ?   id?: String | StringFieldUpdateOperationsInput,\n      ?   status?: String | StringFieldUpdateOperationsInput,\n      ?   timestamp?: DateTime | DateTimeFieldUpdateOperationsInput,\n      ?   attachments?: NullableJsonNullValueInput | Json,\n      ?   location?: NullableJsonNullValueInput | Json,\n      ?   conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput,\n      ?   sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput,\n      ?   organization?: OrganizationUpdateOneWithoutMessagesNestedInput\n        }\n      })\n\nUnknown argument `updatedAt`. Available options are marked with ?."
    },
    "messageKey": "messages.error_updating",
    "language": "en"
  }
}
```

**⏱️ Duration:** 797.5 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to update message as non-sender
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/messages/92f9906f-6508-47ff-a26d-7daa8b3c7573 (578.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjExNSwidXNlcl9pZCI6IjZJQW5MVENhZ2ZRMzFvdzczNWlqdDRoRk9yYTIiLCJzdWIiOiI2SUFuTFRDYWdmUTMxb3c3MzVpanQ0aEZPcmEyIiwiaWF0IjoxNzQ5MTY2MTE1LCJleHAiOjE3NDkxNjk3MTUsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MTE0NDgxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjExNDQ4MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NLswqqZNNy_BSGM1zt61vtMcUW5095gN9gnXbQqFOug0Wn1THxwCniD_qvREV16EGR03bz5K32I_B52UVctdy7esl4Ccun0FNGBLwNxxrmrzDnOEh_5OU-XIjoCN5ukrrpfp8-dCjbmggfXjgpgO3cb4cvx3HqmP0YDHCn2YkwJslZGyI5TF_ETtpv3invaFdHendn0oC4Kx0lNVTQchuX4vcPaseuLR_hkrqmo7fLYHGqdVzwJSOSzxEU4cc-zToYxc5jel5-6-bwI_5WHXSFLv3x0EEPpWT639vCjJQaHlBh4ODFBvBkvhAUGJEpvDRoDspzLM_MV7ewKmPGyQiA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Trying to update someone else message"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "145",
    "etag": "W/\"91-VILz2qZnximMzH6JBlKDW3ow3KM\"",
    "date": "Thu, 05 Jun 2025 23:28:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "messages.forbidden_update_not_sender",
    "details": {},
    "messageKey": "messages.forbidden_update_not_sender",
    "language": "en"
  }
}
```

**⏱️ Duration:** 578.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should soft delete message (sender)
**Status:** ✅ PASSED  
**Duration:** 1.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1058.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Message to be soft deleted",
    "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "435",
    "etag": "W/\"1b3-MNfNA6Ei5udFVQFd9uIRers5O6U\"",
    "date": "Thu, 05 Jun 2025 23:28:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "522f6d26-e834-439d-a0ad-de545d1d94e2",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be soft deleted",
      "status": "sent",
      "timestamp": "2025-06-05T23:28:56.050Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1058.2 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/522f6d26-e834-439d-a0ad-de545d1d94e2/soft-delete (806.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {}
}
```

**📥 Response:**
```json
{
  "status": 500,
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin",
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1308",
    "etag": "W/\"51c-kBnNoAPPEA+2W0P6iVqef0yYk/c\"",
    "date": "Thu, 05 Jun 2025 23:28:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "messages.error_soft_deleting",
    "details": {
      "error": "\nInvalid `prisma.message.update()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/messageModel.js:246:49\n\n  243   return null; // Return null if not found\n  244 }\n  245 \n→ 246 const updatedMessage = await prisma.message.update({\n        where: {\n          id: \"522f6d26-e834-439d-a0ad-de545d1d94e2\"\n        },\n        data: {\n          status: \"deleted\",\n          deletedAt: new Date(\"2025-06-05T23:28:56.932Z\"),\n          ~~~~~~~~~\n          deletedBy: \"tYFy4ecd0TY2fErw9jsp6e1XHvw1\",\n          content: \"[Message deleted]\",\n      ?   id?: String | StringFieldUpdateOperationsInput,\n      ?   timestamp?: DateTime | DateTimeFieldUpdateOperationsInput,\n      ?   attachments?: NullableJsonNullValueInput | Json,\n      ?   location?: NullableJsonNullValueInput | Json,\n      ?   conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput,\n      ?   sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput,\n      ?   organization?: OrganizationUpdateOneWithoutMessagesNestedInput\n        }\n      })\n\nUnknown argument `deletedAt`. Available options are marked with ?."
    },
    "messageKey": "messages.error_soft_deleting",
    "language": "en"
  }
}
```

**⏱️ Duration:** 806.5 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should permanently delete message (admin)
**Status:** ✅ PASSED  
**Duration:** 1.98s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1160.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Message to be deleted",
    "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "430",
    "etag": "W/\"1ae-sxJRiA22ROhMo4HprU6LnlzYZoc\"",
    "date": "Thu, 05 Jun 2025 23:28:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "19cccfeb-48fe-49ca-bf58-22f7ee30bfb3",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message to be deleted",
      "status": "sent",
      "timestamp": "2025-06-05T23:28:58.029Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1160.5 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/19cccfeb-48fe-49ca-bf58-22f7ee30bfb3 (812.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "157",
    "etag": "W/\"9d-aPt86IevpEf2MWR3W6HfrGOqXnc\"",
    "date": "Thu, 05 Jun 2025 23:28:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted",
    "data": {
      "success": true,
      "message": "Message deleted successfully"
    },
    "messageKey": "messages.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 812.1 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Message Management Should fail to permanently delete message as regular user
**Status:** ✅ PASSED  
**Duration:** 10.06s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/messages/92f9906f-6508-47ff-a26d-7daa8b3c7573 (10027.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjExNSwidXNlcl9pZCI6IjZJQW5MVENhZ2ZRMzFvdzczNWlqdDRoRk9yYTIiLCJzdWIiOiI2SUFuTFRDYWdmUTMxb3c3MzVpanQ0aEZPcmEyIiwiaWF0IjoxNzQ5MTY2MTE1LCJleHAiOjE3NDkxNjk3MTUsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MTE0NDgxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjExNDQ4MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NLswqqZNNy_BSGM1zt61vtMcUW5095gN9gnXbQqFOug0Wn1THxwCniD_qvREV16EGR03bz5K32I_B52UVctdy7esl4Ccun0FNGBLwNxxrmrzDnOEh_5OU-XIjoCN5ukrrpfp8-dCjbmggfXjgpgO3cb4cvx3HqmP0YDHCn2YkwJslZGyI5TF_ETtpv3invaFdHendn0oC4Kx0lNVTQchuX4vcPaseuLR_hkrqmo7fLYHGqdVzwJSOSzxEU4cc-zToYxc5jel5-6-bwI_5WHXSFLv3x0EEPpWT639vCjJQaHlBh4ODFBvBkvhAUGJEpvDRoDspzLM_MV7ewKmPGyQiA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10027.9 ms  
**❌ Error:** timeout of 10000ms exceeded  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should get all messages (admin)
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (895.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "9434",
    "etag": "W/\"24da-edF8Wp1tktUl2UVfVszHgeNczOI\"",
    "date": "Thu, 05 Jun 2025 23:29:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "522f6d26-e834-439d-a0ad-de545d1d94e2",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message to be soft deleted",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:56.050Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "459cae62-c30c-4827-9226-32f6ecada15d",
        "conversationId": "d1a84119-0bda-47dd-94ec-523188c1650b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:50.813Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "dcc0a3e6-2c48-43e4-a532-70a944b05405",
        "conversationId": "5fed7b4a-1aee-435b-a9f9-0973ef70c1c2",
        "senderId": "6IAnLTCagfQ31ow735ijt4hFOra2",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:48.104Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "92f9906f-6508-47ff-a26d-7daa8b3c7573",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:44.885Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "514e5096-6620-460b-9cac-fddd26cd75a2",
        "conversationId": "83a29823-e389-4c1e-ab9b-df6d6c68b1d8",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:20:08.424Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "a3c500bb-0775-43a2-a7f9-c92726f52873",
        "conversationId": "99289191-9070-4c6b-84b6-bea08cfcbd76",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:19:51.272Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "400840a0-e8ed-4f91-898f-a08ceb0dcebb",
        "conversationId": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:19.036Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "871ec27d-cac7-442a-a44c-f1b60cd72f29",
        "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:00.547Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4f1210d0-7f14-4056-9c82-a6a74c455240",
        "conversationId": "e29a97c9-c31f-4a3c-b61e-798f3f681295",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:37.228Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "8aaf1837-8a36-4f15-a60a-1342e9e27627",
        "conversationId": "a84192fb-3f5e-4b46-9135-5098ffef237b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:19.758Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "790715d0-a925-4fa9-bfab-ca6393fdcab4",
        "conversationId": "d516b485-3c7f-494a-945c-e3f85ddd53c9",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:09:24.381Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "a27ccbd7-07fb-4aaf-8f6a-489e025ce2b2",
        "conversationId": "80f3bcf1-fbfe-4f1f-9162-5a6f7abfc221",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:08:46.289Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "d3b535bf-ed28-47e1-9a3e-16afc67cc6e1",
        "conversationId": "92f8ed4e-808c-49b2-8ea4-4ba14c7efcbd",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:06:21.671Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4535ee0a-77a2-4558-b2b3-81d112ecb94a",
        "conversationId": "76d58415-d63b-4fcf-bd32-42130a49398f",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:05:44.207Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "f6427065-9e98-47b5-8d94-d652d78ca019",
        "conversationId": "92164c66-e43a-49c6-b0b1-e0ceb9fc1352",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:03:04.204Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "1995e675-f223-4992-95c9-16ade869a436",
        "conversationId": "58d6799b-ca5e-4218-a290-6659219e914c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:02:27.067Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "0e3e2209-2b1e-4061-b95d-aeb07bfc518e",
        "conversationId": "ea495392-ea99-4018-b9ba-ca3d4b3707be",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:44.895Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "5c16c996-21da-42e0-96f3-8cdd401cd290",
        "conversationId": "62cc1341-dfa8-4983-bdfe-5127675a2b92",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:07.778Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "e9cc8259-a8e4-401f-973a-1b69cc247110",
        "conversationId": "295295ca-3389-4d46-9d03-956bf9813290",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:56.273Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "205b4aed-89b0-4677-bbcd-6d13f16f7ede",
        "conversationId": "95ba2c6d-9d16-4224-9121-11fc29734643",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:50.071Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "ee74669b-46c2-47fd-9bf1-08ec55f65624",
        "conversationId": "6b4f958e-7afb-45d1-8362-4f5513cfb523",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:58.349Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "478e4dd0-3973-47c9-8e5b-e58f43c9d0b4",
        "conversationId": "64ae22b0-c8da-4f7a-8d9b-09e3b0ac117a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:48.619Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "3d3b0a6b-281e-4206-91d1-5d4cf7f555e3",
        "conversationId": "74313b7b-1863-40f5-897c-8fca476eea3b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:42.513Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "e24a2042-b92d-4fe0-8621-5c4d7ad99e6d",
        "conversationId": "252b767c-613c-4d3c-9fda-72e12b088edf",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:32.395Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "58d2b4d8-227a-4ce7-bcef-bff434565684",
        "conversationId": "e16dafcb-209d-4162-aa4e-a2581659796b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:11.774Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4f2a13c4-7655-4296-bddb-8cd329edd09c",
        "conversationId": "0d0101f2-e084-4eff-8edd-295b0af96ed1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:01.363Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "23fdae15-8ebb-43dc-bb97-086e8ba0abda",
        "conversationId": "22eabbe1-e7f4-4893-a86f-3fcacf4dfb11",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:37.577Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "ab2a798f-8af7-4e0c-af56-58c4a905d60a",
        "conversationId": "bf9869ad-09ab-47b9-a550-6a450c274b4a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:28.161Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "5e84cbe1-d178-4d78-a6eb-028c33d6869f",
        "conversationId": "db03df51-e9c9-4bb9-b380-2771510df593",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:09:09.001Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "0c7d4d6b-fe48-4d6c-b21c-b558932fa8a0",
        "conversationId": "2d7348ab-d8f9-4f3b-bb23-182193d44c1d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:08:59.897Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "33bc3b71-16fc-4e55-9517-9901c1a87a4c",
        "conversationId": "f57108c9-f4c5-4f78-b3f8-674cb115eff0",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:45.488Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "2a9feb56-e3ec-4be9-b61d-70484aac681b",
        "conversationId": "845a3438-fb2e-4471-b14e-088751dcc449",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:37.810Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 895.5 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to get all messages as regular user
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (593.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjExNSwidXNlcl9pZCI6IjZJQW5MVENhZ2ZRMzFvdzczNWlqdDRoRk9yYTIiLCJzdWIiOiI2SUFuTFRDYWdmUTMxb3c3MzVpanQ0aEZPcmEyIiwiaWF0IjoxNzQ5MTY2MTE1LCJleHAiOjE3NDkxNjk3MTUsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ5MTY2MTE0NDgxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0OTE2NjExNDQ4MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NLswqqZNNy_BSGM1zt61vtMcUW5095gN9gnXbQqFOug0Wn1THxwCniD_qvREV16EGR03bz5K32I_B52UVctdy7esl4Ccun0FNGBLwNxxrmrzDnOEh_5OU-XIjoCN5ukrrpfp8-dCjbmggfXjgpgO3cb4cvx3HqmP0YDHCn2YkwJslZGyI5TF_ETtpv3invaFdHendn0oC4Kx0lNVTQchuX4vcPaseuLR_hkrqmo7fLYHGqdVzwJSOSzxEU4cc-zToYxc5jel5-6-bwI_5WHXSFLv3x0EEPpWT639vCjJQaHlBh4ODFBvBkvhAUGJEpvDRoDspzLM_MV7ewKmPGyQiA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1342",
    "etag": "W/\"53e-asLxSw53WBjaWUVo+Xe90TwOPTE\"",
    "date": "Thu, 05 Jun 2025 23:29:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "522f6d26-e834-439d-a0ad-de545d1d94e2",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message to be soft deleted",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:56.050Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "459cae62-c30c-4827-9226-32f6ecada15d",
        "conversationId": "d1a84119-0bda-47dd-94ec-523188c1650b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:50.813Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "dcc0a3e6-2c48-43e4-a532-70a944b05405",
        "conversationId": "5fed7b4a-1aee-435b-a9f9-0973ef70c1c2",
        "senderId": "6IAnLTCagfQ31ow735ijt4hFOra2",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:48.104Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "92f9906f-6508-47ff-a26d-7daa8b3c7573",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:44.885Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 593.9 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should moderate message content (moderator)
**Status:** ✅ PASSED  
**Duration:** 4.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (928.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Message that needs moderation",
    "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "438",
    "etag": "W/\"1b6-lpDloXFSVIepJYu5XVBLIvyeFTA\"",
    "date": "Thu, 05 Jun 2025 23:29:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "2648c3e0-4199-4fba-8b7b-b8c031f8b43b",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that needs moderation",
      "status": "sent",
      "timestamp": "2025-06-05T23:29:11.380Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 928.1 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/messages/2648c3e0-4199-4fba-8b7b-b8c031f8b43b/moderate (4011.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2NjExNywidXNlcl9pZCI6ImxoTVV4SjBoSDNjZW1namRPalYyeUFtRFVVdzIiLCJzdWIiOiJsaE1VeEowaEgzY2VtZ2pkT2pWMnlBbURVVXcyIiwiaWF0IjoxNzQ5MTY2MTE3LCJleHAiOjE3NDkxNjk3MTcsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjYxMTU5MDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDkxNjYxMTU5MDdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.oc2awQwnlVm2aZg2vTc-5p532qlXS3RCIuV8OVJTZe3NUDx6j-FuqgNMHolSlRR0lmSUe0vPDmFHpaV6Q3N6Vsj7TLuPQjmNb47rTGyvO5MX_Q8SqPnO_-jojqT24Cv2pW21wYapUy2zd6wAyQe5b6RQjFuVR3iX2SHgEEF-7YGVaS_KRt-UjztRcvA9Oz5ptzyFIOwMqVx7sWzPpa1HD-ybeFp6XBL_tIPVcGdG_OZpSRV4tCUsZNfS4Qs1e4xrhwagf3NoLfNxhmCrK2MWejx1Yg_tnxj6LLc3Ywc_1hymekH7wZwbU8iniPTzlg5MZrC2kqPa0vbx9t6SOf5sIA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "action": "flag",
    "reason": "Inappropriate content"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 4011.2 ms  
**❌ Error:** socket hang up  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Admin Operations Should fail to moderate message as regular user
**Status:** ✅ PASSED  
**Duration:** 30.00s  

---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.24s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1234.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "1c6e5852-f4c5-4b66-b10e-852270e470eb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "6IAnLTCagfQ31ow735ijt4hFOra2"
    ],
    "title": "Org2 Conversation"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "447",
    "etag": "W/\"1bf-FO5U3oVtJtuIKGQ5rrIwxA4wUQs\"",
    "date": "Thu, 05 Jun 2025 23:29:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation created successfully",
    "data": {
      "id": "7dc52d94-30f1-4766-9d7d-4260af277088",
      "title": "Org2 Conversation",
      "type": "direct",
      "status": "active",
      "createdAt": "2025-06-05T23:29:46.291Z",
      "lastMessageAt": "2025-06-05T23:29:46.291Z",
      "organizationId": "1c6e5852-f4c5-4b66-b10e-852270e470eb",
      "participants": [
        "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "6IAnLTCagfQ31ow735ijt4hFOra2"
      ]
    },
    "messageKey": "conversations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1234.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (999.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "1c6e5852-f4c5-4b66-b10e-852270e470eb"
  },
  "data": {
    "content": "Message in organization 2",
    "conversationId": "7dc52d94-30f1-4766-9d7d-4260af277088"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "434",
    "etag": "W/\"1b2-F3l74hXexWRwio+UmRFdQzmBdK0\"",
    "date": "Thu, 05 Jun 2025 23:29:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "3e8be7da-b5fc-456c-9ba6-f3bd499eb0f0",
      "conversationId": "7dc52d94-30f1-4766-9d7d-4260af277088",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-05T23:29:47.597Z",
      "attachments": null,
      "location": null,
      "organizationId": "1c6e5852-f4c5-4b66-b10e-852270e470eb"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 999.7 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should not access message from different organization
**Status:** ✅ PASSED  
**Duration:** 1.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (960.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Org1 only message",
    "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "426",
    "etag": "W/\"1aa-enGAM+KXx4HCb4DO0J9Yl3RGliE\"",
    "date": "Thu, 05 Jun 2025 23:29:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "74394086-f323-4417-9cbf-815e4dd5d676",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-05T23:29:48.634Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 960.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/74394086-f323-4417-9cbf-815e4dd5d676 (610.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "1c6e5852-f4c5-4b66-b10e-852270e470eb"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "359",
    "etag": "W/\"167-r8xBJLutlVauSP87xoILMk06x7s\"",
    "date": "Thu, 05 Jun 2025 23:29:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "74394086-f323-4417-9cbf-815e4dd5d676",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Org1 only message",
      "status": "sent",
      "timestamp": "2025-06-05T23:29:48.634Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 610.3 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/conversations/ca3a4f78-bc5b-432d-8b88-ae517e4f3bad/messages (799.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1355",
    "etag": "W/\"54b-GGyBlh4ixGUzjRYEuIICrka1Gq0\"",
    "date": "Thu, 05 Jun 2025 23:29:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "92f9906f-6508-47ff-a26d-7daa8b3c7573",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:44.885Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "522f6d26-e834-439d-a0ad-de545d1d94e2",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message to be soft deleted",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:56.050Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "2648c3e0-4199-4fba-8b7b-b8c031f8b43b",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-05T23:29:11.380Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "74394086-f323-4417-9cbf-815e4dd5d676",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-05T23:29:48.634Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 799.2 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Multitenancy & Organization Isolation Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages (582.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "10414",
    "etag": "W/\"28ae-mYuWa52KERwbfcYQopUOP+4P9Bo\"",
    "date": "Thu, 05 Jun 2025 23:29:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "74394086-f323-4417-9cbf-815e4dd5d676",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Org1 only message",
        "status": "sent",
        "timestamp": "2025-06-05T23:29:48.634Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "3e8be7da-b5fc-456c-9ba6-f3bd499eb0f0",
        "conversationId": "7dc52d94-30f1-4766-9d7d-4260af277088",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:29:47.597Z",
        "attachments": null,
        "location": null,
        "organizationId": "1c6e5852-f4c5-4b66-b10e-852270e470eb"
      },
      {
        "id": "2648c3e0-4199-4fba-8b7b-b8c031f8b43b",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message that needs moderation",
        "status": "sent",
        "timestamp": "2025-06-05T23:29:11.380Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "522f6d26-e834-439d-a0ad-de545d1d94e2",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message to be soft deleted",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:56.050Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "459cae62-c30c-4827-9226-32f6ecada15d",
        "conversationId": "d1a84119-0bda-47dd-94ec-523188c1650b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:50.813Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "dcc0a3e6-2c48-43e4-a532-70a944b05405",
        "conversationId": "5fed7b4a-1aee-435b-a9f9-0973ef70c1c2",
        "senderId": "6IAnLTCagfQ31ow735ijt4hFOra2",
        "content": "Group message test",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:48.104Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "92f9906f-6508-47ff-a26d-7daa8b3c7573",
        "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Hello, this is a test message!",
        "status": "sent",
        "timestamp": "2025-06-05T23:28:44.885Z",
        "attachments": null,
        "location": null,
        "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
      },
      {
        "id": "514e5096-6620-460b-9cac-fddd26cd75a2",
        "conversationId": "83a29823-e389-4c1e-ab9b-df6d6c68b1d8",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:20:08.424Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "a3c500bb-0775-43a2-a7f9-c92726f52873",
        "conversationId": "99289191-9070-4c6b-84b6-bea08cfcbd76",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:19:51.272Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "400840a0-e8ed-4f91-898f-a08ceb0dcebb",
        "conversationId": "35f56667-a6d6-42c9-9133-f38b7104f3e1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:19.036Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "871ec27d-cac7-442a-a44c-f1b60cd72f29",
        "conversationId": "d05da288-1f91-4b8a-a226-691d85f6487e",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:18:00.547Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4f1210d0-7f14-4056-9c82-a6a74c455240",
        "conversationId": "e29a97c9-c31f-4a3c-b61e-798f3f681295",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:37.228Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "8aaf1837-8a36-4f15-a60a-1342e9e27627",
        "conversationId": "a84192fb-3f5e-4b46-9135-5098ffef237b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:15:19.758Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "790715d0-a925-4fa9-bfab-ca6393fdcab4",
        "conversationId": "d516b485-3c7f-494a-945c-e3f85ddd53c9",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:09:24.381Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "a27ccbd7-07fb-4aaf-8f6a-489e025ce2b2",
        "conversationId": "80f3bcf1-fbfe-4f1f-9162-5a6f7abfc221",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:08:46.289Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "d3b535bf-ed28-47e1-9a3e-16afc67cc6e1",
        "conversationId": "92f8ed4e-808c-49b2-8ea4-4ba14c7efcbd",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:06:21.671Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4535ee0a-77a2-4558-b2b3-81d112ecb94a",
        "conversationId": "76d58415-d63b-4fcf-bd32-42130a49398f",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:05:44.207Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "f6427065-9e98-47b5-8d94-d652d78ca019",
        "conversationId": "92164c66-e43a-49c6-b0b1-e0ceb9fc1352",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T23:03:04.204Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "1995e675-f223-4992-95c9-16ade869a436",
        "conversationId": "58d6799b-ca5e-4218-a290-6659219e914c",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T23:02:27.067Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "0e3e2209-2b1e-4061-b95d-aeb07bfc518e",
        "conversationId": "ea495392-ea99-4018-b9ba-ca3d4b3707be",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:44.895Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "5c16c996-21da-42e0-96f3-8cdd401cd290",
        "conversationId": "62cc1341-dfa8-4983-bdfe-5127675a2b92",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:59:07.778Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "e9cc8259-a8e4-401f-973a-1b69cc247110",
        "conversationId": "295295ca-3389-4d46-9d03-956bf9813290",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:56.273Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "205b4aed-89b0-4677-bbcd-6d13f16f7ede",
        "conversationId": "95ba2c6d-9d16-4224-9121-11fc29734643",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:51:50.071Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "ee74669b-46c2-47fd-9bf1-08ec55f65624",
        "conversationId": "6b4f958e-7afb-45d1-8362-4f5513cfb523",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:58.349Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "478e4dd0-3973-47c9-8e5b-e58f43c9d0b4",
        "conversationId": "64ae22b0-c8da-4f7a-8d9b-09e3b0ac117a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T22:46:48.619Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "3d3b0a6b-281e-4206-91d1-5d4cf7f555e3",
        "conversationId": "74313b7b-1863-40f5-897c-8fca476eea3b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:42.513Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "e24a2042-b92d-4fe0-8621-5c4d7ad99e6d",
        "conversationId": "252b767c-613c-4d3c-9fda-72e12b088edf",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T21:57:32.395Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "58d2b4d8-227a-4ce7-bcef-bff434565684",
        "conversationId": "e16dafcb-209d-4162-aa4e-a2581659796b",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:11.774Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "4f2a13c4-7655-4296-bddb-8cd329edd09c",
        "conversationId": "0d0101f2-e084-4eff-8edd-295b0af96ed1",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:17:01.363Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "23fdae15-8ebb-43dc-bb97-086e8ba0abda",
        "conversationId": "22eabbe1-e7f4-4893-a86f-3fcacf4dfb11",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:37.577Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "ab2a798f-8af7-4e0c-af56-58c4a905d60a",
        "conversationId": "bf9869ad-09ab-47b9-a550-6a450c274b4a",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:10:28.161Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "5e84cbe1-d178-4d78-a6eb-028c33d6869f",
        "conversationId": "db03df51-e9c9-4bb9-b380-2771510df593",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:09:09.001Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "0c7d4d6b-fe48-4d6c-b21c-b558932fa8a0",
        "conversationId": "2d7348ab-d8f9-4f3b-bb23-182193d44c1d",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:08:59.897Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "33bc3b71-16fc-4e55-9517-9901c1a87a4c",
        "conversationId": "f57108c9-f4c5-4f78-b3f8-674cb115eff0",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Message in organization 2",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:45.488Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      },
      {
        "id": "2a9feb56-e3ec-4be9-b61d-70484aac681b",
        "conversationId": "845a3438-fb2e-4471-b14e-088751dcc449",
        "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "content": "Private message",
        "status": "sent",
        "timestamp": "2025-06-05T20:06:37.810Z",
        "attachments": null,
        "location": null,
        "organizationId": null
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 582.1 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle non-existent message ID
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/123e4567-e89b-12d3-a456-426614174000 (573.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "108",
    "etag": "W/\"6c-5LXYW+9+w1zghKu26sR3c5PE/Mk\"",
    "date": "Thu, 05 Jun 2025 23:29:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Message not found",
    "details": {},
    "messageKey": "messages.not_found",
    "language": "en"
  }
}
```

**⏱️ Duration:** 573.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/92f9906f-6508-47ff-a26d-7daa8b3c7573 (617.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "372",
    "etag": "W/\"174-RyRaTfrVJKGXMDCv3QyCcClMLPg\"",
    "date": "Thu, 05 Jun 2025 23:29:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "92f9906f-6508-47ff-a26d-7daa8b3c7573",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-05T23:28:44.885Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 617.2 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle malformed request data
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (515.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": null
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "133",
    "etag": "W/\"85-cTFdXS4onzClqPM7FkggpcHLwso\"",
    "date": "Thu, 05 Jun 2025 23:29:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Conversation ID is required",
    "details": {},
    "messageKey": "messages.conversation_id_required",
    "language": "en"
  }
}
```

**⏱️ Duration:** 515.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle very long message content
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (909.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "10409",
    "etag": "W/\"28a9-Eq0sCY0Je3RttmefYBYzvtPTbsI\"",
    "date": "Thu, 05 Jun 2025 23:29:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message sent successfully",
    "data": {
      "id": "aee2af21-0a14-4318-bdd7-080d132007cf",
      "conversationId": "ca3a4f78-bc5b-432d-8b88-ae517e4f3bad",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      "status": "sent",
      "timestamp": "2025-06-05T23:29:53.311Z",
      "attachments": null,
      "location": null,
      "organizationId": "2edf8a32-570b-4079-94e1-287cb31f8a84"
    },
    "messageKey": "messages.sent",
    "language": "en"
  }
}
```

**⏱️ Duration:** 909.2 ms  

</details>


---

### Test: Messages E2E Tests - Comprehensive Test Suite (28 tests) Error Handling & Edge Cases Should handle invalid conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (661.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA",
    "X-Organization-Id": "2edf8a32-570b-4079-94e1-287cb31f8a84"
  },
  "data": {
    "content": "Message for invalid conversation",
    "conversationId": "123e4567-e89b-12d3-a456-426614174000"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "118",
    "etag": "W/\"76-brIPRjNRwXku5ICyXsAhssFlKfY\"",
    "date": "Thu, 05 Jun 2025 23:29:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Conversation not found",
    "details": {},
    "messageKey": "conversations.not_found",
    "language": "en"
  }
}
```

**⏱️ Duration:** 661.0 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/92f9906f-6508-47ff-a26d-7daa8b3c7573 (692.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "157",
    "etag": "W/\"9d-aPt86IevpEf2MWR3W6HfrGOqXnc\"",
    "date": "Thu, 05 Jun 2025 23:29:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted",
    "data": {
      "success": true,
      "message": "Message deleted successfully"
    },
    "messageKey": "messages.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 692.6 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/dcc0a3e6-2c48-43e4-a532-70a944b05405 (656.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "157",
    "etag": "W/\"9d-aPt86IevpEf2MWR3W6HfrGOqXnc\"",
    "date": "Thu, 05 Jun 2025 23:29:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted",
    "data": {
      "success": true,
      "message": "Message deleted successfully"
    },
    "messageKey": "messages.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 656.5 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/2648c3e0-4199-4fba-8b7b-b8c031f8b43b (794.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "157",
    "etag": "W/\"9d-aPt86IevpEf2MWR3W6HfrGOqXnc\"",
    "date": "Thu, 05 Jun 2025 23:29:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted",
    "data": {
      "success": true,
      "message": "Message deleted successfully"
    },
    "messageKey": "messages.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 794.5 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/conversations/ca3a4f78-bc5b-432d-8b88-ae517e4f3bad (722.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "184",
    "etag": "W/\"b8-zvFMRoxemJijfu5j4Q8bTzjSMks\"",
    "date": "Thu, 05 Jun 2025 23:29:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation deleted successfully",
    "data": {
      "success": true,
      "message": "Conversation permanently deleted"
    },
    "messageKey": "conversations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 722.5 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/conversations/5fed7b4a-1aee-435b-a9f9-0973ef70c1c2 (611.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "184",
    "etag": "W/\"b8-zvFMRoxemJijfu5j4Q8bTzjSMks\"",
    "date": "Thu, 05 Jun 2025 23:29:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation deleted successfully",
    "data": {
      "success": true,
      "message": "Conversation permanently deleted"
    },
    "messageKey": "conversations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 611.4 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/2edf8a32-570b-4079-94e1-287cb31f8a84 (1452.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "125",
    "etag": "W/\"7d-O8UoES/a/ZuHRT4PveKC9xnALlk\"",
    "date": "Thu, 05 Jun 2025 23:29:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization deleted successfully",
    "data": {},
    "messageKey": "organizations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1452.0 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/1c6e5852-f4c5-4b66-b10e-852270e470eb (1231.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYxMTEsImV4cCI6MTc0OTE2OTcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T7PNKcmz3Lpi-9dETJWkAuCgnGyBGCLxhki_9bpFDVNwWCLMuD_5Ufml7-LyMpBsaUk0aiTu4-wEDAJCh7dTPw-Jn_TYGEKdKXVkOBvcyM0txW8cajJuiig_iQojJ6pIVZsd_eImj6O0qar_1nHfKHfEGv8tg6zYPeDZYWpSvFnVf3mLwC2-uA_ibBQrH9Iadfq_D5f55U3XGCpdz4NeGWa9lTG__CB2txBaUi_fEEcJfgOq8KuEYRVRoURurkRPhWKTVOQ-Qt05qYxzdA7FHbPW6xAOHIiQj7RVOGfoa1sxgi9RhsX0Y3cPHNksD-hgHgLKDQP-XliUtDJok7gpCA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "125",
    "etag": "W/\"7d-O8UoES/a/ZuHRT4PveKC9xnALlk\"",
    "date": "Thu, 05 Jun 2025 23:30:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization deleted successfully",
    "data": {},
    "messageKey": "organizations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1231.8 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/login (324.7ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1706",
    "etag": "W/\"6aa-JiSE2iReWHO3KezJq0IqAzdFOmQ\"",
    "date": "Thu, 05 Jun 2025 23:30:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "role": "admin",
        "isSuperAdmin": true
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MjAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYyMDAsImV4cCI6MTc0OTE2OTgwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RLtwZOX71S0VLeQSSA0mfE4pOK3G566BqqrcybtMY6zva2BQAwyYVmJCrMtay1v823jYdEwmCp3Bryv1j-jC4RHcWhXND2h0_7hV0PxKjWL9oETpsU3l_m7OGivY4PS5rP-NBjSR7EQtrx6bUUWd8Uc5oGjnFOevhfLBtxGX6YbQ9Kb7kC8Vu_mSpXGnYqULuugGGTgd2oQXdHCWvfUoyL1R9OUbUPET0dntTOvz7p47vnDOmnfSmu18Wsm4D9ftLoHJComxZ5cp6Clh-6HpcHF18Um_J_pvZjZ5dvw9pu_Gaircrg2TwaOSihd7PX_uQo_-t9jMm8ke9_nSz7HnLg",
        "refreshToken": "AMf-vByWMm2fVn1dYqqUrHcEobeeoFt-J6ookoK8RjUTYoVtJT5Pg2h9hJ6yJDk2Ie7sxzBFJ5yz1xeFAxrdoJPf47XHtPCWa9Z99w0zskS5Q47KrUaoI30FfxAP2cTd7dBg4hdCuhgJwhAQPwarTkt1ZuSlEL5l6YEwhjW88_6u1Nc14CdBA5nD12whlrHG_zdG6ODzEU3Fea0W1BG7afRN5G04G36pAkB752sHCn-iqFbtFruoen3NtKacAexR4Zqpxtgbikxl",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 324.7 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/admin/users/6IAnLTCagfQ31ow735ijt4hFOra2 (1398.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MjAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYyMDAsImV4cCI6MTc0OTE2OTgwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RLtwZOX71S0VLeQSSA0mfE4pOK3G566BqqrcybtMY6zva2BQAwyYVmJCrMtay1v823jYdEwmCp3Bryv1j-jC4RHcWhXND2h0_7hV0PxKjWL9oETpsU3l_m7OGivY4PS5rP-NBjSR7EQtrx6bUUWd8Uc5oGjnFOevhfLBtxGX6YbQ9Kb7kC8Vu_mSpXGnYqULuugGGTgd2oQXdHCWvfUoyL1R9OUbUPET0dntTOvz7p47vnDOmnfSmu18Wsm4D9ftLoHJComxZ5cp6Clh-6HpcHF18Um_J_pvZjZ5dvw9pu_Gaircrg2TwaOSihd7PX_uQo_-t9jMm8ke9_nSz7HnLg"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "99",
    "etag": "W/\"63-7MnfmQcA9c8HY8CUZ1LnaOiEJqM\"",
    "date": "Thu, 05 Jun 2025 23:30:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "message": "User and associated data deleted successfully"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 1398.6 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (274.4ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1706",
    "etag": "W/\"6aa-VElnBkoWj716oCz3H38/SYRbeFQ\"",
    "date": "Thu, 05 Jun 2025 23:30:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "email": "daniellovazzano@gmail.com",
        "role": "admin",
        "isSuperAdmin": true
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MjAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYyMDIsImV4cCI6MTc0OTE2OTgwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gIQpnpU1y57XVOxheexcM7wVMq9jLPy8Qhbjws5RMzFBL-sPnaq_-J8k1FN7v6zbtj8HnWg18AB5Lc4c6-0ABkdQox1cII038sGYlJaxiLcXc71blL5LhrfVWERqiGVWH8KekPfRDYL-bNe8HFglojjshDp4QecDzNuUSgXtcMR9k1-51GETdUwalqq2FaTd1F9m7uIAj1NLlgGT2rFsiRyArnryaK2QHzgolORQ0n1Ld3ZEriSeXGdCV62-7zi4rbJctWihrnd7Rbklxcqjo6NpFG4WUNDx3QZD09uykgA9Y755tjHle-neAgNHwQKPVxSfRYLY1_8qrYmVDupg5Q",
        "refreshToken": "AMf-vBwP2LOv7KRZoANj9mE9FNvwtaTvARcCNnHBz3mJtCjqpkqtGHm-ijs7bWneuGKlFVKIhZFdHsgdkXJ34zCK-ndkPG_tnPYrYSylpj6kLxlmMbloytx9H08WXuC77PpvEVDSQFU6Zo2Y44HVwyrKusm7rCIaRw9QYBgdqOXAbi4Yg7BwXoDIobjpRbvJbMWKMSN87EnlafxcbVUQnOO7ztVlbrmAsc_flogYyKr1qgX2VaNoJWEzU934JU51qtfMEQJhFMIS",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 274.4 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/lhMUxJ0hH3cemgjdOjV2yAmDUUw2 (1189.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTY2MjAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjYyMDIsImV4cCI6MTc0OTE2OTgwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gIQpnpU1y57XVOxheexcM7wVMq9jLPy8Qhbjws5RMzFBL-sPnaq_-J8k1FN7v6zbtj8HnWg18AB5Lc4c6-0ABkdQox1cII038sGYlJaxiLcXc71blL5LhrfVWERqiGVWH8KekPfRDYL-bNe8HFglojjshDp4QecDzNuUSgXtcMR9k1-51GETdUwalqq2FaTd1F9m7uIAj1NLlgGT2rFsiRyArnryaK2QHzgolORQ0n1Ld3ZEriSeXGdCV62-7zi4rbJctWihrnd7Rbklxcqjo6NpFG4WUNDx3QZD09uykgA9Y755tjHle-neAgNHwQKPVxSfRYLY1_8qrYmVDupg5Q"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "99",
    "etag": "W/\"63-7MnfmQcA9c8HY8CUZ1LnaOiEJqM\"",
    "date": "Thu, 05 Jun 2025 23:30:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "message": "User and associated data deleted successfully"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 1189.1 ms  

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
- Total messages created: 3
- Total conversations created: 2
- Total organizations created: 2
- Total test users created: 2
- All test data cleaned up automatically
- NEW FEATURES IMPLEMENTED: Message Update, Soft Delete, and Moderation

---
*Generated automatically by Enhanced E2E Reporter*
