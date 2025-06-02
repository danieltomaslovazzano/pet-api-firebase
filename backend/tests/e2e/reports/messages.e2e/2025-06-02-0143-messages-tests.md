# E2E Test Report: messages-tests

**Date:** 6/2/2025  
**Time:** 1:43:56 AM  
**Duration:** 47.09s  
**Tests:** 27 total, 27 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 1.43s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 0.85s | Should create a message with attachments |
| ✅ Should fail to create message without conversation ID | PASSED | 0.61s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.71s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.58s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 1.71s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.81s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.62s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.62s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.67s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.62s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.68s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.57s | Should allow message sender to view their message |
| ✅ Should allow conversation participant to view message | PASSED | 0.62s | Should allow conversation participant to view message |
| ✅ Should fail to view message as non-participant | PASSED | 2.43s | Should fail to view message as non-participant |
| ✅ Should allow message sender to delete their own message | PASSED | 1.50s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.48s | Should allow admin to delete any message |
| ✅ Should fail to delete message as non-sender non-admin | PASSED | 1.31s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.62s | Should fail to delete non-existent message |
| ✅ Should create message in specific organization | PASSED | 2.46s | Should create message in specific organization |
| ✅ Should not access messages from different organization | PASSED | 0.61s | Should not access messages from different organization |
| ✅ Should filter messages by organization | PASSED | 0.66s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.61s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.60s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.61s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 0.81s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 1.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1427.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "content": "Hello, this is a test message!",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
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
    "etag": "W/\"14c-DL7JQM4osq5NKbI0/R4Zxwziz1I\"",
    "date": "Sun, 01 Jun 2025 23:43:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:21.136Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 1427.1 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 0.85s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (849.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTM5MiwidXNlcl9pZCI6ImdUWnFQaGZkdDNhWVlvQ2g1WHRRZ1N3Vk9aeDIiLCJzdWIiOiJnVFpxUGhmZHQzYVlZb0NoNVh0UWdTd1ZPWngyIiwiaWF0IjoxNzQ4ODIxMzkyLCJleHAiOjE3NDg4MjQ5OTIsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIxMzkxNjgwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMTM5MTY4MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m7mqb89rqw6ShoX2DUggviq2RmakLHu0376XAOZZ0AVvPF5ScOw_efRC1tm_VeXKBOWyMAfE5E3gAZvjyQ2IsNCPoXgCwRlxYc06lTnPbZFP42n-F7hlie_a9NOS56rhvbj-7Fl7Q9on7JNcst4-f7Cjrb9nZzIsnXlQ-i32fMNGQVNxm_sgoCgxFfiUi_doD-aFsuAqi61Cl0BMkyhitwr86Fh63wNpoQu8NblPTI2PMo-WyRNvgr6TP0T3zqay5fTiMjyB-R0U3lWIFbLwQyBoxToj2ZLzhN0cjGLvr7LoUwT-3XNrycqmnOvlK9YUhIVX6Lk0WCRf67kZIoDTaQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "e60bda88-d574-45a7-b518-8de5f80fe835",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
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
    "content-length": "396",
    "etag": "W/\"18c-Sswm1y/cZ66SozBDqXyAB4Sz6+Q\"",
    "date": "Sun, 01 Jun 2025 23:43:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c761fbf9-2b23-4a71-a175-ee6027f88e4c",
    "conversationId": "e60bda88-d574-45a7-b518-8de5f80fe835",
    "senderId": "gTZqPhfdt3aYYoCh5XtQgSwVOZx2",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:22.500Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 849.5 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (610.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "content": "Message without conversation ID"
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
    "content-length": "39",
    "etag": "W/\"27-W/YagOYP1wBc58zpJb6X1aFRG7s\"",
    "date": "Sun, 01 Jun 2025 23:43:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 610.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (713.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5"
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
    "content-length": "87",
    "etag": "W/\"57-icv/MLWt6gtFSTRR0Ajj6n6lByY\"",
    "date": "Sun, 01 Jun 2025 23:43:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 713.7 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (577.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "123e4567-e89b-12d3-a456-426614174000",
    "content": "Message to non-existent conversation"
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
    "date": "Sun, 01 Jun 2025 23:43:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 577.0 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (980.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
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
    "etag": "W/\"147-WMAZgaXXRMXioGrPac2Sv4FD7Es\"",
    "date": "Sun, 01 Jun 2025 23:43:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3455ec93-5160-4598-9267-89b6a067d24f",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:43:25.125Z",
    "lastMessageAt": "2025-06-01T23:43:25.125Z",
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
    ]
  }
}
```

**⏱️ Duration:** 980.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (729.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTM5NCwidXNlcl9pZCI6IjBHdTluenh2Y1dSeFZ0UEJESmpXb2puczRUZjIiLCJzdWIiOiIwR3U5bnp4dmNXUnhWdFBCREpqV29qbnM0VGYyIiwiaWF0IjoxNzQ4ODIxMzk0LCJleHAiOjE3NDg4MjQ5OTQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjEzOTI5ODRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjEzOTI5ODRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.C0_rhaAud9ZsPobR12p-YJmLHpLC3iHiqVc5FZMRb9KHWN26-Hz3cRGXtKl-QqIestSflr0Uhi_XpyLK_SOv2tPFn5tJ6otWHbgNg8wDnhPhgu6JfvN-oSV2n8BiposoeDYqmKnNI0i7bczdM2GkkWG8ywqn2SClsuCXHMgQQMCJGnLXW3SWcjUwKviDBu0F0qRIlplSAIOggSUCwcwHWVv-CNpQV6J-uEKnDxHp1pd5GMKqURorSRimEFfFTwRFWKX71GhIt_zSw3TswKoRRktm7tqP0GwWVxqca-3AabMHtn2p-2GBtpZ8NwXksd8cSUC9KdWm4jZZXawvwO0w6Q",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "3455ec93-5160-4598-9267-89b6a067d24f",
    "content": "Unauthorized message"
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
    "content-length": "86",
    "etag": "W/\"56-cXYyf0OpA6BpPjFQ+1VlfzAjSHA\"",
    "date": "Sun, 01 Jun 2025 23:43:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 729.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/17d6dfac-96a3-463b-8269-4337536fbba5 (804.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "334",
    "etag": "W/\"14e-/Ae1alPnvQVlwJ0LBpn2rlGDXyc\"",
    "date": "Sun, 01 Jun 2025 23:43:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
      "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:21.136Z",
      "attachments": null,
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    }
  ]
}
```

**⏱️ Duration:** 804.1 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/3357a148-5a32-40a9-985f-8be2be591a2e/details (621.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "332",
    "etag": "W/\"14c-DL7JQM4osq5NKbI0/R4Zxwziz1I\"",
    "date": "Sun, 01 Jun 2025 23:43:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:21.136Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 621.6 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (623.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "37",
    "etag": "W/\"25-w299mSho3uTuRe45MSoXxgX0I0c\"",
    "date": "Sun, 01 Jun 2025 23:43:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 623.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (667.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "29",
    "etag": "W/\"1d-guIAbjmFTCDD3YgMKiwGfDp1z0g\"",
    "date": "Sun, 01 Jun 2025 23:43:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 667.5 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (948.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
    ],
    "title": "Private Conversation for Messages"
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
    "content-length": "340",
    "etag": "W/\"154-XwCJh9t/RVpejc4+wEmg+8dFHwQ\"",
    "date": "Sun, 01 Jun 2025 23:43:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f316765c-c800-4c47-9a4d-a0da3b00d675",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:43:29.531Z",
    "lastMessageAt": "2025-06-01T23:43:29.531Z",
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
    ]
  }
}
```

**⏱️ Duration:** 948.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/f316765c-c800-4c47-9a4d-a0da3b00d675 (669.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTM5NCwidXNlcl9pZCI6IjBHdTluenh2Y1dSeFZ0UEJESmpXb2puczRUZjIiLCJzdWIiOiIwR3U5bnp4dmNXUnhWdFBCREpqV29qbnM0VGYyIiwiaWF0IjoxNzQ4ODIxMzk0LCJleHAiOjE3NDg4MjQ5OTQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjEzOTI5ODRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjEzOTI5ODRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.C0_rhaAud9ZsPobR12p-YJmLHpLC3iHiqVc5FZMRb9KHWN26-Hz3cRGXtKl-QqIestSflr0Uhi_XpyLK_SOv2tPFn5tJ6otWHbgNg8wDnhPhgu6JfvN-oSV2n8BiposoeDYqmKnNI0i7bczdM2GkkWG8ywqn2SClsuCXHMgQQMCJGnLXW3SWcjUwKviDBu0F0qRIlplSAIOggSUCwcwHWVv-CNpQV6J-uEKnDxHp1pd5GMKqURorSRimEFfFTwRFWKX71GhIt_zSw3TswKoRRktm7tqP0GwWVxqca-3AabMHtn2p-2GBtpZ8NwXksd8cSUC9KdWm4jZZXawvwO0w6Q",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "86",
    "etag": "W/\"56-8qXoyeXFkyUP/AKiRAfVwbE9QdY\"",
    "date": "Sun, 01 Jun 2025 23:43:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 669.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=17d6dfac-96a3-463b-8269-4337536fbba5 (682.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "334",
    "etag": "W/\"14e-/Ae1alPnvQVlwJ0LBpn2rlGDXyc\"",
    "date": "Sun, 01 Jun 2025 23:43:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
      "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:21.136Z",
      "attachments": null,
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    }
  ]
}
```

**⏱️ Duration:** 682.0 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/3357a148-5a32-40a9-985f-8be2be591a2e/details (568.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "332",
    "etag": "W/\"14c-DL7JQM4osq5NKbI0/R4Zxwziz1I\"",
    "date": "Sun, 01 Jun 2025 23:43:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:21.136Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 568.3 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/3357a148-5a32-40a9-985f-8be2be591a2e/details (617.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "332",
    "etag": "W/\"14c-DL7JQM4osq5NKbI0/R4Zxwziz1I\"",
    "date": "Sun, 01 Jun 2025 23:43:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:21.136Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 617.8 ms  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (926.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
    ],
    "title": "Private Conversation for Message Access"
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
    "content-length": "346",
    "etag": "W/\"15a-2MWLYH8/H087lQ3eImGhYfO1alQ\"",
    "date": "Sun, 01 Jun 2025 23:43:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c1fc6f8b-63fc-4df7-9de8-56ac8a474a42",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:43:33.011Z",
    "lastMessageAt": "2025-06-01T23:43:33.011Z",
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
    ]
  }
}
```

**⏱️ Duration:** 926.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (948.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "c1fc6f8b-63fc-4df7-9de8-56ac8a474a42",
    "content": "Private message"
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
    "content-length": "317",
    "etag": "W/\"13d-VaI5ncYdDfno0L16y7ateL5Vq/s\"",
    "date": "Sun, 01 Jun 2025 23:43:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "093ba161-605d-4b04-9acc-795f803c8eec",
    "conversationId": "c1fc6f8b-63fc-4df7-9de8-56ac8a474a42",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:34.233Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 948.4 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/093ba161-605d-4b04-9acc-795f803c8eec/details (553.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTM5NCwidXNlcl9pZCI6IjBHdTluenh2Y1dSeFZ0UEJESmpXb2puczRUZjIiLCJzdWIiOiIwR3U5bnp4dmNXUnhWdFBCREpqV29qbnM0VGYyIiwiaWF0IjoxNzQ4ODIxMzk0LCJleHAiOjE3NDg4MjQ5OTQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjEzOTI5ODRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjEzOTI5ODRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.C0_rhaAud9ZsPobR12p-YJmLHpLC3iHiqVc5FZMRb9KHWN26-Hz3cRGXtKl-QqIestSflr0Uhi_XpyLK_SOv2tPFn5tJ6otWHbgNg8wDnhPhgu6JfvN-oSV2n8BiposoeDYqmKnNI0i7bczdM2GkkWG8ywqn2SClsuCXHMgQQMCJGnLXW3SWcjUwKviDBu0F0qRIlplSAIOggSUCwcwHWVv-CNpQV6J-uEKnDxHp1pd5GMKqURorSRimEFfFTwRFWKX71GhIt_zSw3TswKoRRktm7tqP0GwWVxqca-3AabMHtn2p-2GBtpZ8NwXksd8cSUC9KdWm4jZZXawvwO0w6Q",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "date": "Sun, 01 Jun 2025 23:43:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 553.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ✅ PASSED  
**Duration:** 1.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (783.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTM5MiwidXNlcl9pZCI6ImdUWnFQaGZkdDNhWVlvQ2g1WHRRZ1N3Vk9aeDIiLCJzdWIiOiJnVFpxUGhmZHQzYVlZb0NoNVh0UWdTd1ZPWngyIiwiaWF0IjoxNzQ4ODIxMzkyLCJleHAiOjE3NDg4MjQ5OTIsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIxMzkxNjgwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMTM5MTY4MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m7mqb89rqw6ShoX2DUggviq2RmakLHu0376XAOZZ0AVvPF5ScOw_efRC1tm_VeXKBOWyMAfE5E3gAZvjyQ2IsNCPoXgCwRlxYc06lTnPbZFP42n-F7hlie_a9NOS56rhvbj-7Fl7Q9on7JNcst4-f7Cjrb9nZzIsnXlQ-i32fMNGQVNxm_sgoCgxFfiUi_doD-aFsuAqi61Cl0BMkyhitwr86Fh63wNpoQu8NblPTI2PMo-WyRNvgr6TP0T3zqay5fTiMjyB-R0U3lWIFbLwQyBoxToj2ZLzhN0cjGLvr7LoUwT-3XNrycqmnOvlK9YUhIVX6Lk0WCRf67kZIoDTaQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "content": "Message to be deleted by sender"
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
    "content-length": "333",
    "etag": "W/\"14d-dgoWt/rZFyZDAyVq8iKbMoH7fGU\"",
    "date": "Sun, 01 Jun 2025 23:43:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "94e399d0-22a9-4858-a091-e903dec34015",
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "senderId": "gTZqPhfdt3aYYoCh5XtQgSwVOZx2",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:35.560Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 783.8 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/94e399d0-22a9-4858-a091-e903dec34015 (717.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "etag": "W/\"39-Y9kLSb1nwF2sBXzy7wPn9f2m3Rk\"",
    "date": "Sun, 01 Jun 2025 23:43:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 717.5 ms  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (808.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTM5MiwidXNlcl9pZCI6ImdUWnFQaGZkdDNhWVlvQ2g1WHRRZ1N3Vk9aeDIiLCJzdWIiOiJnVFpxUGhmZHQzYVlZb0NoNVh0UWdTd1ZPWngyIiwiaWF0IjoxNzQ4ODIxMzkyLCJleHAiOjE3NDg4MjQ5OTIsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIxMzkxNjgwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMTM5MTY4MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m7mqb89rqw6ShoX2DUggviq2RmakLHu0376XAOZZ0AVvPF5ScOw_efRC1tm_VeXKBOWyMAfE5E3gAZvjyQ2IsNCPoXgCwRlxYc06lTnPbZFP42n-F7hlie_a9NOS56rhvbj-7Fl7Q9on7JNcst4-f7Cjrb9nZzIsnXlQ-i32fMNGQVNxm_sgoCgxFfiUi_doD-aFsuAqi61Cl0BMkyhitwr86Fh63wNpoQu8NblPTI2PMo-WyRNvgr6TP0T3zqay5fTiMjyB-R0U3lWIFbLwQyBoxToj2ZLzhN0cjGLvr7LoUwT-3XNrycqmnOvlK9YUhIVX6Lk0WCRf67kZIoDTaQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "content": "Message to be deleted by admin"
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
    "etag": "W/\"14c-Q+qwY7UbHvek6iVLM1UNzg73MLU\"",
    "date": "Sun, 01 Jun 2025 23:43:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "26a7926b-b72f-4d6b-96b4-b37e8f7389ed",
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "senderId": "gTZqPhfdt3aYYoCh5XtQgSwVOZx2",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:37.049Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 808.5 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/26a7926b-b72f-4d6b-96b4-b37e8f7389ed (672.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "etag": "W/\"39-Y9kLSb1nwF2sBXzy7wPn9f2m3Rk\"",
    "date": "Sun, 01 Jun 2025 23:43:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 672.9 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ✅ PASSED  
**Duration:** 1.31s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (851.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "e60bda88-d574-45a7-b518-8de5f80fe835",
    "content": "Message that regular user cannot delete"
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
    "content-length": "341",
    "etag": "W/\"155-UBfKSnPhR1rDaKiNUc5or81e14o\"",
    "date": "Sun, 01 Jun 2025 23:43:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "698cfa74-1f30-4c3d-875c-769e33000111",
    "conversationId": "e60bda88-d574-45a7-b518-8de5f80fe835",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:38.627Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 851.6 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/698cfa74-1f30-4c3d-875c-769e33000111 (456.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTM5MiwidXNlcl9pZCI6ImdUWnFQaGZkdDNhWVlvQ2g1WHRRZ1N3Vk9aeDIiLCJzdWIiOiJnVFpxUGhmZHQzYVlZb0NoNVh0UWdTd1ZPWngyIiwiaWF0IjoxNzQ4ODIxMzkyLCJleHAiOjE3NDg4MjQ5OTIsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIxMzkxNjgwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMTM5MTY4MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m7mqb89rqw6ShoX2DUggviq2RmakLHu0376XAOZZ0AVvPF5ScOw_efRC1tm_VeXKBOWyMAfE5E3gAZvjyQ2IsNCPoXgCwRlxYc06lTnPbZFP42n-F7hlie_a9NOS56rhvbj-7Fl7Q9on7JNcst4-f7Cjrb9nZzIsnXlQ-i32fMNGQVNxm_sgoCgxFfiUi_doD-aFsuAqi61Cl0BMkyhitwr86Fh63wNpoQu8NblPTI2PMo-WyRNvgr6TP0T3zqay5fTiMjyB-R0U3lWIFbLwQyBoxToj2ZLzhN0cjGLvr7LoUwT-3XNrycqmnOvlK9YUhIVX6Lk0WCRf67kZIoDTaQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "date": "Sun, 01 Jun 2025 23:43:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 456.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (620.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "29",
    "etag": "W/\"1d-guIAbjmFTCDD3YgMKiwGfDp1z0g\"",
    "date": "Sun, 01 Jun 2025 23:43:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 620.0 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (618.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
  },
  "data": {
    "userId": "gTZqPhfdt3aYYoCh5XtQgSwVOZx2",
    "organizationId": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81",
    "role": "member"
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
    "content-length": "253",
    "etag": "W/\"fd-pWx/i6X6srNfcEB6KIB7sr8r+wk\"",
    "date": "Sun, 01 Jun 2025 23:43:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "054aff5a-1198-417c-92c9-020bbc2db62d",
    "userId": "gTZqPhfdt3aYYoCh5XtQgSwVOZx2",
    "organizationId": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:43:40.384Z",
    "updatedAt": "2025-06-01T23:43:40.384Z"
  }
}
```

**⏱️ Duration:** 618.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/conversations (937.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
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
    "content-type": "application/json; charset=utf-8",
    "content-length": "324",
    "etag": "W/\"144-8qgT6hWtAQ4ZcQL/M2TZW1k5eQA\"",
    "date": "Sun, 01 Jun 2025 23:43:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b346fe52-d91f-4b4d-97ab-dbd1c5c37cde",
    "title": "Org2 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:43:40.993Z",
    "lastMessageAt": "2025-06-01T23:43:40.993Z",
    "organizationId": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gTZqPhfdt3aYYoCh5XtQgSwVOZx2"
    ]
  }
}
```

**⏱️ Duration:** 937.8 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/messages (897.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81"
  },
  "data": {
    "conversationId": "b346fe52-d91f-4b4d-97ab-dbd1c5c37cde",
    "content": "Message in organization 2"
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
    "etag": "W/\"147-SFDW3qDT5YDZGMkPxkRJLBHL6sQ\"",
    "date": "Sun, 01 Jun 2025 23:43:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "04b888d3-de5b-4b95-bfc1-e12634952284",
    "conversationId": "b346fe52-d91f-4b4d-97ab-dbd1c5c37cde",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message in organization 2",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:42.162Z",
    "attachments": null,
    "location": null,
    "organizationId": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81"
  }
}
```

**⏱️ Duration:** 897.6 ms  

</details>


---

### Test: Should not access messages from different organization
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/3357a148-5a32-40a9-985f-8be2be591a2e/details (608.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81"
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
    "content-length": "332",
    "etag": "W/\"14c-DL7JQM4osq5NKbI0/R4Zxwziz1I\"",
    "date": "Sun, 01 Jun 2025 23:43:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:21.136Z",
    "attachments": null,
    "location": null,
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 608.8 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (664.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "1719",
    "etag": "W/\"6b7-ruY3UijrcgT8ZDPRjc24WTlpWGY\"",
    "date": "Sun, 01 Jun 2025 23:43:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "04b888d3-de5b-4b95-bfc1-e12634952284",
      "conversationId": "b346fe52-d91f-4b4d-97ab-dbd1c5c37cde",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:42.162Z",
      "attachments": null,
      "location": null,
      "organizationId": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81"
    },
    {
      "id": "698cfa74-1f30-4c3d-875c-769e33000111",
      "conversationId": "e60bda88-d574-45a7-b518-8de5f80fe835",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:38.627Z",
      "attachments": null,
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    },
    {
      "id": "093ba161-605d-4b04-9acc-795f803c8eec",
      "conversationId": "c1fc6f8b-63fc-4df7-9de8-56ac8a474a42",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:34.233Z",
      "attachments": null,
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    },
    {
      "id": "c761fbf9-2b23-4a71-a175-ee6027f88e4c",
      "conversationId": "e60bda88-d574-45a7-b518-8de5f80fe835",
      "senderId": "gTZqPhfdt3aYYoCh5XtQgSwVOZx2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:22.500Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    },
    {
      "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
      "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:21.136Z",
      "attachments": null,
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    }
  ]
}
```

**⏱️ Duration:** 664.0 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (611.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "content-length": "1719",
    "etag": "W/\"6b7-ruY3UijrcgT8ZDPRjc24WTlpWGY\"",
    "date": "Sun, 01 Jun 2025 23:43:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "04b888d3-de5b-4b95-bfc1-e12634952284",
      "conversationId": "b346fe52-d91f-4b4d-97ab-dbd1c5c37cde",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:42.162Z",
      "attachments": null,
      "location": null,
      "organizationId": "0e2928b0-0094-49f6-af2d-c8a2dcbdcb81"
    },
    {
      "id": "698cfa74-1f30-4c3d-875c-769e33000111",
      "conversationId": "e60bda88-d574-45a7-b518-8de5f80fe835",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:38.627Z",
      "attachments": null,
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    },
    {
      "id": "093ba161-605d-4b04-9acc-795f803c8eec",
      "conversationId": "c1fc6f8b-63fc-4df7-9de8-56ac8a474a42",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:34.233Z",
      "attachments": null,
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    },
    {
      "id": "c761fbf9-2b23-4a71-a175-ee6027f88e4c",
      "conversationId": "e60bda88-d574-45a7-b518-8de5f80fe835",
      "senderId": "gTZqPhfdt3aYYoCh5XtQgSwVOZx2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:22.500Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    },
    {
      "id": "3357a148-5a32-40a9-985f-8be2be591a2e",
      "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:43:21.136Z",
      "attachments": null,
      "location": null,
      "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
    }
  ]
}
```

**⏱️ Duration:** 611.7 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/17d6dfac-96a3-463b-8269-4337536fbba5 (7.4ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:43:44 GMT",
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

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (597.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "invalidField": "invalid data"
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
    "content-length": "39",
    "etag": "W/\"27-W/YagOYP1wBc58zpJb6X1aFRG7s\"",
    "date": "Sun, 01 Jun 2025 23:43:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 597.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (614.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
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
    "content-length": "37",
    "etag": "W/\"25-w299mSho3uTuRe45MSoXxgX0I0c\"",
    "date": "Sun, 01 Jun 2025 23:43:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 614.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (811.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ",
    "X-Organization-Id": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  },
  "data": {
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "content": "Message with location",
    "location": {
      "latitude": 40.7128,
      "longitude": -74.006,
      "address": "New York, NY"
    }
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
    "content-length": "384",
    "etag": "W/\"180-bQh/HV47jX/0VB/pGTBTjQYmIxM\"",
    "date": "Sun, 01 Jun 2025 23:43:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2ea26c9a-9ff2-4b80-8939-810ee39b9a56",
    "conversationId": "17d6dfac-96a3-463b-8269-4337536fbba5",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-06-01T23:43:46.096Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "3b3b7c8e-21cc-4a63-b264-73d0957481b2"
  }
}
```

**⏱️ Duration:** 811.4 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/3357a148-5a32-40a9-985f-8be2be591a2e (199.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Sun, 01 Jun 2025 23:43:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/3357a148-5a32-40a9-985f-8be2be591a2e</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 199.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/c761fbf9-2b23-4a71-a175-ee6027f88e4c (165.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Sun, 01 Jun 2025 23:43:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/c761fbf9-2b23-4a71-a175-ee6027f88e4c</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 165.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/093ba161-605d-4b04-9acc-795f803c8eec (240.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Sun, 01 Jun 2025 23:43:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/093ba161-605d-4b04-9acc-795f803c8eec</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 240.3 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/698cfa74-1f30-4c3d-875c-769e33000111 (203.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Sun, 01 Jun 2025 23:43:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/698cfa74-1f30-4c3d-875c-769e33000111</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 203.3 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/04b888d3-de5b-4b95-bfc1-e12634952284 (203.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Sun, 01 Jun 2025 23:43:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/04b888d3-de5b-4b95-bfc1-e12634952284</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 203.8 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/messages/2ea26c9a-9ff2-4b80-8939-810ee39b9a56 (202.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "191",
    "date": "Sun, 01 Jun 2025 23:43:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/2ea26c9a-9ff2-4b80-8939-810ee39b9a56</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 202.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/17d6dfac-96a3-463b-8269-4337536fbba5 (677.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "date": "Sun, 01 Jun 2025 23:43:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 677.6 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/e60bda88-d574-45a7-b518-8de5f80fe835 (627.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "date": "Sun, 01 Jun 2025 23:43:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 627.7 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/3455ec93-5160-4598-9267-89b6a067d24f (646.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "date": "Sun, 01 Jun 2025 23:43:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 646.2 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/f316765c-c800-4c47-9a4d-a0da3b00d675 (567.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "date": "Sun, 01 Jun 2025 23:43:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 567.4 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/conversations/c1fc6f8b-63fc-4df7-9de8-56ac8a474a42 (546.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "date": "Sun, 01 Jun 2025 23:43:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 546.4 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/conversations/b346fe52-d91f-4b4d-97ab-dbd1c5c37cde (571.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "date": "Sun, 01 Jun 2025 23:43:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 571.1 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/organizations/3b3b7c8e-21cc-4a63-b264-73d0957481b2 (1372.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "date": "Sun, 01 Jun 2025 23:43:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1372.9 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/organizations/0e2928b0-0094-49f6-af2d-c8a2dcbdcb81 (1148.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEzODksImV4cCI6MTc0ODgyNDk4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gsoW9jCaKG_wo58JeoMaQm8Ysa-0Jj2ueNkj_N1Kfx9HkYIEbtwycjH2b0I_CpTZWXIEJ_KhK2P9573tuiRyoNgMZLCOjDN6hZO7yOAcokDHL2nq0pEF2oxyZkHBBCdOam-mpFQniV1qz7WTPssPv2vLJQHA6UIAL2cNzbvUI1grZJdlL4K6ZjIdwgCHfPkzO0ru8Zg9CXktEphiWecYY5xbun75K6DQiHu-KNUmD08EjD1QSCC9VCvr0oBvjOWk4Gf6Kp3fMoKm2tGMJjvOeVA3mDFxP-VGmcdG8hR036WaEyAXXKGZQtjIBOCMshvxHhQDd15p9zoA6BqO92AlPQ"
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
    "date": "Sun, 01 Jun 2025 23:43:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1148.6 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (249.2ms)</summary>

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
    "etag": "W/\"640-LP5V/oOYaCyQCW2AJUDNrsZfLFI\"",
    "date": "Sun, 01 Jun 2025 23:43:53 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDMzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0MzMsImV4cCI6MTc0ODgyNTAzMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ELUB91PtEITe1DX01j1Lwin-9vALpwOQIYKnwH0CdvOuLHALb1Ocb-wOpwJxQ0JKgTbkDCSgsFzequsgjQ2ow7fmygqFetT4QoSsGUL7OjSZGdaI9AdbnI5mnBIU6cxkxptU_eFMoq5OFmmqnBn6qTOcgJSe9k6U2XRWYcHAR_GafKKxuyHDoJqSJ3THfghsRgS1Z7QvE2g-d-1sAWL46O0cMYl6hqvGQJU5_etF0KmvNsF1XqazYnDQAR0PWmLNNH98_CN-rgUYf53UW79YUTVYxInzDEAFPgz7uMxOHDmSIviOPhOw4WgemCkv6JQTsBw5zzAERPAnCacdZJIKtw",
      "refreshToken": "AMf-vBw3LNzRCX97FNxJZ6vmPLDLCH8kfjksK8nE0AKnbR-I28QBxIDrJsH7sVRQJQmH9RbeRpMv2VruxObcPlagcaS44b_2MmDGltoksmIMPh5RxWqEUyNHq-VFYKWpwYBs-INu_CMcHmVmJ2NcVbtoauxa3Aw5Q7tK49sZQIIbFugCbwh9O9Gwrw25EyYVWiDeooiCo8hnpYgpytkqezGzGHpJ_N1lv9kZrcCalPxmwvmL8ziBkAaqKlmpiMiyP3mPQzd0h9gw",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 249.2 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/gTZqPhfdt3aYYoCh5XtQgSwVOZx2 (1123.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDMzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0MzMsImV4cCI6MTc0ODgyNTAzMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ELUB91PtEITe1DX01j1Lwin-9vALpwOQIYKnwH0CdvOuLHALb1Ocb-wOpwJxQ0JKgTbkDCSgsFzequsgjQ2ow7fmygqFetT4QoSsGUL7OjSZGdaI9AdbnI5mnBIU6cxkxptU_eFMoq5OFmmqnBn6qTOcgJSe9k6U2XRWYcHAR_GafKKxuyHDoJqSJ3THfghsRgS1Z7QvE2g-d-1sAWL46O0cMYl6hqvGQJU5_etF0KmvNsF1XqazYnDQAR0PWmLNNH98_CN-rgUYf53UW79YUTVYxInzDEAFPgz7uMxOHDmSIviOPhOw4WgemCkv6JQTsBw5zzAERPAnCacdZJIKtw"
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
    "date": "Sun, 01 Jun 2025 23:43:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1123.7 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (302.7ms)</summary>

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
    "etag": "W/\"640-2LL06PK+otkjSF7u6jzPa7dOgM8\"",
    "date": "Sun, 01 Jun 2025 23:43:55 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDM1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0MzUsImV4cCI6MTc0ODgyNTAzNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NOUHDzWOEzuBkNPYVEMxkhDHYorkZiXTOl8pUfftwMXQN7jaD495jyRtGTy084TqW5wEUFGNOuFuuf0GMsTPrH8O7av1zn00fwW79m-CaYgsDywtj9x2fCYpH9oiBEeva7mqlvPiWu5wP8BCg-sWwtiA6zRo5bUahiOqSivYchsywAnydyjqBf4GZVZfVvGcvSVYRtrBwB-RKS3i2QF0fQ7YmX3BIjZ7zEe9GLBKuq--2TFVm2Vf0PPw3HG6w9P9nrwAujtMQpvU1Wf0gDJnjKCMAk96buVM244D6sgzTjjIEKbiMDJMKtCV4Xd4aN4PMGWihpBQ3tFIAV-VSsUQXQ",
      "refreshToken": "AMf-vBwUysleBl-YuayC37ndTp6AwycMKxEfR-jcKzEtHU4Bq0CfiSm8_ZNXIPBMuWs7aBYIxHKcRCViE_BOIiacT55zSVgNcEU6bwUkn-X52NQL4yzrndDomRQxOXNjUyBVr_QEjKyMasiCNPs5rtD2_09KeklJOP1xDUYXApfuQGIPyOqWDiNJJyprF0bE3Xaey_E-EKIPbvFGA-eQzJV2PjvNsyMTVyCEtHeRn0j_OmTZOPoUTOP_LC2ZTthHR5G4-ZeOlmG1",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 302.7 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/0Gu9nzxvcWRxVtPBDJjWojns4Tf2 (1146.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDM1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0MzUsImV4cCI6MTc0ODgyNTAzNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NOUHDzWOEzuBkNPYVEMxkhDHYorkZiXTOl8pUfftwMXQN7jaD495jyRtGTy084TqW5wEUFGNOuFuuf0GMsTPrH8O7av1zn00fwW79m-CaYgsDywtj9x2fCYpH9oiBEeva7mqlvPiWu5wP8BCg-sWwtiA6zRo5bUahiOqSivYchsywAnydyjqBf4GZVZfVvGcvSVYRtrBwB-RKS3i2QF0fQ7YmX3BIjZ7zEe9GLBKuq--2TFVm2Vf0PPw3HG6w9P9nrwAujtMQpvU1Wf0gDJnjKCMAk96buVM244D6sgzTjjIEKbiMDJMKtCV4Xd4aN4PMGWihpBQ3tFIAV-VSsUQXQ"
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
    "date": "Sun, 01 Jun 2025 23:43:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1146.3 ms  

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
- Total messages created: 6
- Total conversations created: 6
- Total organizations created: 2
- Total test users created: 2
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
