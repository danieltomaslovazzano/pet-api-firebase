# E2E Test Report: messages-tests

**Date:** 6/2/2025  
**Time:** 1:31:51 AM  
**Duration:** 45.46s  
**Tests:** 27 total, 26 passed, 1 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 1.52s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 0.82s | Should create a message with attachments |
| ❌ Should fail to create message without conversation ID | FAILED | 0.62s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.75s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.57s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 1.68s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.88s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.63s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.55s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.58s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.63s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.68s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.66s | Should allow message sender to view their message |
| ✅ Should allow conversation participant to view message | PASSED | 0.59s | Should allow conversation participant to view message |
| ✅ Should fail to view message as non-participant | PASSED | 2.62s | Should fail to view message as non-participant |
| ✅ Should allow message sender to delete their own message | PASSED | 1.54s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.64s | Should allow admin to delete any message |
| ✅ Should fail to delete message as non-sender non-admin | PASSED | 1.36s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.56s | Should fail to delete non-existent message |
| ✅ Should create message in specific organization | PASSED | 2.55s | Should create message in specific organization |
| ✅ Should not access messages from different organization | PASSED | 0.58s | Should not access messages from different organization |
| ✅ Should filter messages by organization | PASSED | 0.63s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.50s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.50s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.54s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 0.84s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 1.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1513.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
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
    "etag": "W/\"14c-Vyi3Kzr1ooJ/IleZ4CKKWpw914g\"",
    "date": "Sun, 01 Jun 2025 23:31:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:16.244Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 1513.7 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 0.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (815.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDY2OCwidXNlcl9pZCI6IlVlZUpPdFFtdjRSWDhXS2pCS2FBc1lrYXl2MDIiLCJzdWIiOiJVZWVKT3RRbXY0Ulg4V0tqQkthQXNZa2F5djAyIiwiaWF0IjoxNzQ4ODIwNjY4LCJleHAiOjE3NDg4MjQyNjgsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwNjY3MzY2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDY2NzM2NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pBi0f3mLiSkgBtCn63fbzk6K1l6VmpLsxpAefK7TKGGbqyXZ59F4MXpYh2EKs86lXhnSW8QqGUJbTuiOYyGQvIhbtUzxsAUQpNXDpctRQ-fEDGpGxnuEgWJh_9o4-fEn9tba5meoLjSS_NmukKbGSIz94bs8rcPAE1C0mQ2EWjK1FVbw-zbHj1E22wbfgWxnZw7mxBRgI4Mo1L681z0KT71tWJ9yyonmBiG7m6zgToc_2ImEtjR8-N8hE7ifQW_hSFgmpg02RYa19npDGev_S2Tej0onSzpk0xUze3oAdJt-E17Ir-K7x24xjaOhQF4Oc1gtyUhrLeE42njPJa6ilA",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "UeeJOtQmv4RX8WKjBKaAsYkayv02"
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
    "etag": "W/\"18c-4KZYwYc2zzFYLCtMEodlJh4R6Po\"",
    "date": "Sun, 01 Jun 2025 23:31:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "27edf5f1-22b3-4948-a3ab-9281d3a157d4",
    "conversationId": "c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a",
    "senderId": "UeeJOtQmv4RX8WKjBKaAsYkayv02",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:17.635Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 815.8 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.62s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Validation failed"[39m
Received string:    [31m"Conversation ID is required"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (617.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 617.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (750.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4"
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
    "date": "Sun, 01 Jun 2025 23:31:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 750.4 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (569.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 569.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1009.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "UeeJOtQmv4RX8WKjBKaAsYkayv02"
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
    "etag": "W/\"147-gC8+xlWutIcCphwIg3pTRNTr1tc\"",
    "date": "Sun, 01 Jun 2025 23:31:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b1b54afa-1c89-4d20-bf5e-23ba702c3d33",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:31:20.246Z",
    "lastMessageAt": "2025-06-01T23:31:20.246Z",
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "UeeJOtQmv4RX8WKjBKaAsYkayv02"
    ]
  }
}
```

**⏱️ Duration:** 1009.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (668.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDY2OSwidXNlcl9pZCI6InB1ejBESzdxYWNUem5yT3c0WElzd2dnaVlKaDIiLCJzdWIiOiJwdXowREs3cWFjVHpuck93NFhJc3dnZ2lZSmgyIiwiaWF0IjoxNzQ4ODIwNjY5LCJleHAiOjE3NDg4MjQyNjksImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA2Njg1NjZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA2Njg1NjZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OpBGzzRzIxOJslA8jZlWGPsBnRKswHYaZ263aqQ8d1xr5BZZSTZVUiP_SlNrqa5-M4L6CcbocCOrvX8h2wD2h_7H-Z8acJesn3ViOMTz53q5G1fwY2Ds6Bl0wHzIyn3CTI3AINrt3W7cn61T8o08XdcWMuH2kCYnOdZJTaAOaCVcZlNUTJ4t-Iut84tKFs16s4in6JOYS06XHBA8_ZNpmfAGsfs9Pfmouq4eCcYLVvsutqOQqPlyZwDbE_INJpINKJ4oBsLxbPpYUO2aIlWIH0H98Bz1irnc4l80QDtVm0ehUoDPgo4QLA4ve5m4O7zhjLUT5w1r_2Rw8cJjolUIJg",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "b1b54afa-1c89-4d20-bf5e-23ba702c3d33",
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
    "date": "Sun, 01 Jun 2025 23:31:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 668.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/3bd5f933-e0f6-4373-9fe5-63abe2568dd4 (875.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "etag": "W/\"14e-nSy5ntQnJCOYwSkzqsoYQ68kzSo\"",
    "date": "Sun, 01 Jun 2025 23:31:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
      "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:16.244Z",
      "attachments": null,
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    }
  ]
}
```

**⏱️ Duration:** 875.6 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/b2b29c04-f01e-41d3-93f3-3cffce7ff660/details (624.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "etag": "W/\"14c-Vyi3Kzr1ooJ/IleZ4CKKWpw914g\"",
    "date": "Sun, 01 Jun 2025 23:31:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:16.244Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 624.2 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (548.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 548.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (576.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 576.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (965.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "UeeJOtQmv4RX8WKjBKaAsYkayv02"
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
    "etag": "W/\"154-grXey5yElxk4Yx48gQEWQKFvGmw\"",
    "date": "Sun, 01 Jun 2025 23:31:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4c02ed59-5ac0-4e65-ba5e-2d19e05d579b",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:31:24.547Z",
    "lastMessageAt": "2025-06-01T23:31:24.547Z",
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "UeeJOtQmv4RX8WKjBKaAsYkayv02"
    ]
  }
}
```

**⏱️ Duration:** 965.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/4c02ed59-5ac0-4e65-ba5e-2d19e05d579b (667.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDY2OSwidXNlcl9pZCI6InB1ejBESzdxYWNUem5yT3c0WElzd2dnaVlKaDIiLCJzdWIiOiJwdXowREs3cWFjVHpuck93NFhJc3dnZ2lZSmgyIiwiaWF0IjoxNzQ4ODIwNjY5LCJleHAiOjE3NDg4MjQyNjksImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA2Njg1NjZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA2Njg1NjZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OpBGzzRzIxOJslA8jZlWGPsBnRKswHYaZ263aqQ8d1xr5BZZSTZVUiP_SlNrqa5-M4L6CcbocCOrvX8h2wD2h_7H-Z8acJesn3ViOMTz53q5G1fwY2Ds6Bl0wHzIyn3CTI3AINrt3W7cn61T8o08XdcWMuH2kCYnOdZJTaAOaCVcZlNUTJ4t-Iut84tKFs16s4in6JOYS06XHBA8_ZNpmfAGsfs9Pfmouq4eCcYLVvsutqOQqPlyZwDbE_INJpINKJ4oBsLxbPpYUO2aIlWIH0H98Bz1irnc4l80QDtVm0ehUoDPgo4QLA4ve5m4O7zhjLUT5w1r_2Rw8cJjolUIJg",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 667.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=3bd5f933-e0f6-4373-9fe5-63abe2568dd4 (677.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "etag": "W/\"14e-nSy5ntQnJCOYwSkzqsoYQ68kzSo\"",
    "date": "Sun, 01 Jun 2025 23:31:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
      "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:16.244Z",
      "attachments": null,
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    }
  ]
}
```

**⏱️ Duration:** 677.7 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/b2b29c04-f01e-41d3-93f3-3cffce7ff660/details (655.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "etag": "W/\"14c-Vyi3Kzr1ooJ/IleZ4CKKWpw914g\"",
    "date": "Sun, 01 Jun 2025 23:31:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:16.244Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 655.0 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/b2b29c04-f01e-41d3-93f3-3cffce7ff660/details (592.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "etag": "W/\"14c-Vyi3Kzr1ooJ/IleZ4CKKWpw914g\"",
    "date": "Sun, 01 Jun 2025 23:31:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:16.244Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 592.0 ms  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1017.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "UeeJOtQmv4RX8WKjBKaAsYkayv02"
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
    "etag": "W/\"15a-dPgjOob6bvW7Ldw8MhH+g2O4Npk\"",
    "date": "Sun, 01 Jun 2025 23:31:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "093e565e-61de-4966-bd4d-8c9bfe33dbbf",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:31:28.174Z",
    "lastMessageAt": "2025-06-01T23:31:28.174Z",
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "UeeJOtQmv4RX8WKjBKaAsYkayv02"
    ]
  }
}
```

**⏱️ Duration:** 1017.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (1078.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "093e565e-61de-4966-bd4d-8c9bfe33dbbf",
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
    "etag": "W/\"13d-XjzqpkZCy1h/sC1nDbx75rFpjyw\"",
    "date": "Sun, 01 Jun 2025 23:31:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6b1d694a-cba2-4c50-8730-e23b75ecc8ef",
    "conversationId": "093e565e-61de-4966-bd4d-8c9bfe33dbbf",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:29.573Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 1078.7 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/6b1d694a-cba2-4c50-8730-e23b75ecc8ef/details (526.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDY2OSwidXNlcl9pZCI6InB1ejBESzdxYWNUem5yT3c0WElzd2dnaVlKaDIiLCJzdWIiOiJwdXowREs3cWFjVHpuck93NFhJc3dnZ2lZSmgyIiwiaWF0IjoxNzQ4ODIwNjY5LCJleHAiOjE3NDg4MjQyNjksImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA2Njg1NjZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA2Njg1NjZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OpBGzzRzIxOJslA8jZlWGPsBnRKswHYaZ263aqQ8d1xr5BZZSTZVUiP_SlNrqa5-M4L6CcbocCOrvX8h2wD2h_7H-Z8acJesn3ViOMTz53q5G1fwY2Ds6Bl0wHzIyn3CTI3AINrt3W7cn61T8o08XdcWMuH2kCYnOdZJTaAOaCVcZlNUTJ4t-Iut84tKFs16s4in6JOYS06XHBA8_ZNpmfAGsfs9Pfmouq4eCcYLVvsutqOQqPlyZwDbE_INJpINKJ4oBsLxbPpYUO2aIlWIH0H98Bz1irnc4l80QDtVm0ehUoDPgo4QLA4ve5m4O7zhjLUT5w1r_2Rw8cJjolUIJg",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 526.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ✅ PASSED  
**Duration:** 1.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (796.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDY2OCwidXNlcl9pZCI6IlVlZUpPdFFtdjRSWDhXS2pCS2FBc1lrYXl2MDIiLCJzdWIiOiJVZWVKT3RRbXY0Ulg4V0tqQkthQXNZa2F5djAyIiwiaWF0IjoxNzQ4ODIwNjY4LCJleHAiOjE3NDg4MjQyNjgsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwNjY3MzY2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDY2NzM2NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pBi0f3mLiSkgBtCn63fbzk6K1l6VmpLsxpAefK7TKGGbqyXZ59F4MXpYh2EKs86lXhnSW8QqGUJbTuiOYyGQvIhbtUzxsAUQpNXDpctRQ-fEDGpGxnuEgWJh_9o4-fEn9tba5meoLjSS_NmukKbGSIz94bs8rcPAE1C0mQ2EWjK1FVbw-zbHj1E22wbfgWxnZw7mxBRgI4Mo1L681z0KT71tWJ9yyonmBiG7m6zgToc_2ImEtjR8-N8hE7ifQW_hSFgmpg02RYa19npDGev_S2Tej0onSzpk0xUze3oAdJt-E17Ir-K7x24xjaOhQF4Oc1gtyUhrLeE42njPJa6ilA",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
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
    "etag": "W/\"14d-qGmeRYl/fN3PPBOVH7FkMjFHweU\"",
    "date": "Sun, 01 Jun 2025 23:31:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c2d8226b-e652-429a-acbe-03d4ea2ae38c",
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
    "senderId": "UeeJOtQmv4RX8WKjBKaAsYkayv02",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:30.899Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 796.5 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/c2d8226b-e652-429a-acbe-03d4ea2ae38c (745.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 745.7 ms  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (965.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDY2OCwidXNlcl9pZCI6IlVlZUpPdFFtdjRSWDhXS2pCS2FBc1lrYXl2MDIiLCJzdWIiOiJVZWVKT3RRbXY0Ulg4V0tqQkthQXNZa2F5djAyIiwiaWF0IjoxNzQ4ODIwNjY4LCJleHAiOjE3NDg4MjQyNjgsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwNjY3MzY2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDY2NzM2NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pBi0f3mLiSkgBtCn63fbzk6K1l6VmpLsxpAefK7TKGGbqyXZ59F4MXpYh2EKs86lXhnSW8QqGUJbTuiOYyGQvIhbtUzxsAUQpNXDpctRQ-fEDGpGxnuEgWJh_9o4-fEn9tba5meoLjSS_NmukKbGSIz94bs8rcPAE1C0mQ2EWjK1FVbw-zbHj1E22wbfgWxnZw7mxBRgI4Mo1L681z0KT71tWJ9yyonmBiG7m6zgToc_2ImEtjR8-N8hE7ifQW_hSFgmpg02RYa19npDGev_S2Tej0onSzpk0xUze3oAdJt-E17Ir-K7x24xjaOhQF4Oc1gtyUhrLeE42njPJa6ilA",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
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
    "etag": "W/\"14c-xWHJjNntaUo+yyzegRX5V3KCocI\"",
    "date": "Sun, 01 Jun 2025 23:31:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5c1de2be-1493-4fb1-80a3-76dc238c7c0d",
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
    "senderId": "UeeJOtQmv4RX8WKjBKaAsYkayv02",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:32.545Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 965.3 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/5c1de2be-1493-4fb1-80a3-76dc238c7c0d (670.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 670.3 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ✅ PASSED  
**Duration:** 1.36s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (896.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a",
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
    "etag": "W/\"155-A7aoukynu/Cum+lWJ4ncw56KXT0\"",
    "date": "Sun, 01 Jun 2025 23:31:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "34779323-c113-401c-96a4-c3cfd143fa49",
    "conversationId": "c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:34.180Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 896.6 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/34779323-c113-401c-96a4-c3cfd143fa49 (467.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDY2OCwidXNlcl9pZCI6IlVlZUpPdFFtdjRSWDhXS2pCS2FBc1lrYXl2MDIiLCJzdWIiOiJVZWVKT3RRbXY0Ulg4V0tqQkthQXNZa2F5djAyIiwiaWF0IjoxNzQ4ODIwNjY4LCJleHAiOjE3NDg4MjQyNjgsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwNjY3MzY2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDY2NzM2NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pBi0f3mLiSkgBtCn63fbzk6K1l6VmpLsxpAefK7TKGGbqyXZ59F4MXpYh2EKs86lXhnSW8QqGUJbTuiOYyGQvIhbtUzxsAUQpNXDpctRQ-fEDGpGxnuEgWJh_9o4-fEn9tba5meoLjSS_NmukKbGSIz94bs8rcPAE1C0mQ2EWjK1FVbw-zbHj1E22wbfgWxnZw7mxBRgI4Mo1L681z0KT71tWJ9yyonmBiG7m6zgToc_2ImEtjR8-N8hE7ifQW_hSFgmpg02RYa19npDGev_S2Tej0onSzpk0xUze3oAdJt-E17Ir-K7x24xjaOhQF4Oc1gtyUhrLeE42njPJa6ilA",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 467.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (561.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 561.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (547.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
  },
  "data": {
    "userId": "UeeJOtQmv4RX8WKjBKaAsYkayv02",
    "organizationId": "a86a8561-f915-4760-995c-ce1468672f55",
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
    "etag": "W/\"fd-Eml9Kbx6wk6EHzqYhtsvSWK62DU\"",
    "date": "Sun, 01 Jun 2025 23:31:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "372f6a5d-767d-4175-8f0e-478b93d308d1",
    "userId": "UeeJOtQmv4RX8WKjBKaAsYkayv02",
    "organizationId": "a86a8561-f915-4760-995c-ce1468672f55",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:31:35.831Z",
    "updatedAt": "2025-06-01T23:31:35.831Z"
  }
}
```

**⏱️ Duration:** 547.4 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/conversations (1020.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "a86a8561-f915-4760-995c-ce1468672f55"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "UeeJOtQmv4RX8WKjBKaAsYkayv02"
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
    "etag": "W/\"144-6apLBpvbaw7/aI4JirT3d+nBb/Q\"",
    "date": "Sun, 01 Jun 2025 23:31:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "e3c7df05-7e5a-4ee2-bcb5-104ea28823b2",
    "title": "Org2 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:31:36.465Z",
    "lastMessageAt": "2025-06-01T23:31:36.465Z",
    "organizationId": "a86a8561-f915-4760-995c-ce1468672f55",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "UeeJOtQmv4RX8WKjBKaAsYkayv02"
    ]
  }
}
```

**⏱️ Duration:** 1020.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/messages (985.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "a86a8561-f915-4760-995c-ce1468672f55"
  },
  "data": {
    "conversationId": "e3c7df05-7e5a-4ee2-bcb5-104ea28823b2",
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
    "etag": "W/\"147-ZgGQQhgBWsFM+gN/87uv65lt9Yo\"",
    "date": "Sun, 01 Jun 2025 23:31:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "06fab3de-e77b-468a-8d30-928800a801d7",
    "conversationId": "e3c7df05-7e5a-4ee2-bcb5-104ea28823b2",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message in organization 2",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:37.772Z",
    "attachments": null,
    "location": null,
    "organizationId": "a86a8561-f915-4760-995c-ce1468672f55"
  }
}
```

**⏱️ Duration:** 985.5 ms  

</details>


---

### Test: Should not access messages from different organization
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/b2b29c04-f01e-41d3-93f3-3cffce7ff660/details (577.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "a86a8561-f915-4760-995c-ce1468672f55"
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
    "etag": "W/\"14c-Vyi3Kzr1ooJ/IleZ4CKKWpw914g\"",
    "date": "Sun, 01 Jun 2025 23:31:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:16.244Z",
    "attachments": null,
    "location": null,
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 577.0 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (631.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "etag": "W/\"6b7-xc714HZPllGP2bpOByQfVPWFk/s\"",
    "date": "Sun, 01 Jun 2025 23:31:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "06fab3de-e77b-468a-8d30-928800a801d7",
      "conversationId": "e3c7df05-7e5a-4ee2-bcb5-104ea28823b2",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:37.772Z",
      "attachments": null,
      "location": null,
      "organizationId": "a86a8561-f915-4760-995c-ce1468672f55"
    },
    {
      "id": "34779323-c113-401c-96a4-c3cfd143fa49",
      "conversationId": "c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:34.180Z",
      "attachments": null,
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    },
    {
      "id": "6b1d694a-cba2-4c50-8730-e23b75ecc8ef",
      "conversationId": "093e565e-61de-4966-bd4d-8c9bfe33dbbf",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:29.573Z",
      "attachments": null,
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    },
    {
      "id": "27edf5f1-22b3-4948-a3ab-9281d3a157d4",
      "conversationId": "c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a",
      "senderId": "UeeJOtQmv4RX8WKjBKaAsYkayv02",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:17.635Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    },
    {
      "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
      "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:16.244Z",
      "attachments": null,
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    }
  ]
}
```

**⏱️ Duration:** 631.0 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (501.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "etag": "W/\"6b7-xc714HZPllGP2bpOByQfVPWFk/s\"",
    "date": "Sun, 01 Jun 2025 23:31:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "06fab3de-e77b-468a-8d30-928800a801d7",
      "conversationId": "e3c7df05-7e5a-4ee2-bcb5-104ea28823b2",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:37.772Z",
      "attachments": null,
      "location": null,
      "organizationId": "a86a8561-f915-4760-995c-ce1468672f55"
    },
    {
      "id": "34779323-c113-401c-96a4-c3cfd143fa49",
      "conversationId": "c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:34.180Z",
      "attachments": null,
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    },
    {
      "id": "6b1d694a-cba2-4c50-8730-e23b75ecc8ef",
      "conversationId": "093e565e-61de-4966-bd4d-8c9bfe33dbbf",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:29.573Z",
      "attachments": null,
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    },
    {
      "id": "27edf5f1-22b3-4948-a3ab-9281d3a157d4",
      "conversationId": "c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a",
      "senderId": "UeeJOtQmv4RX8WKjBKaAsYkayv02",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:17.635Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    },
    {
      "id": "b2b29c04-f01e-41d3-93f3-3cffce7ff660",
      "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:31:16.244Z",
      "attachments": null,
      "location": null,
      "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
    }
  ]
}
```

**⏱️ Duration:** 501.7 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/3bd5f933-e0f6-4373-9fe5-63abe2568dd4 (6.7ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:31:39 GMT",
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

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (499.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 499.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (539.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
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
    "date": "Sun, 01 Jun 2025 23:31:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 539.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 0.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (840.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ",
    "X-Organization-Id": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  },
  "data": {
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
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
    "etag": "W/\"180-WfRk3qCn+pmOMyTbqAwljOgdrlA\"",
    "date": "Sun, 01 Jun 2025 23:31:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "665f8d3d-9e11-4fb1-b99b-7197ec3c3607",
    "conversationId": "3bd5f933-e0f6-4373-9fe5-63abe2568dd4",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-06-01T23:31:41.386Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "70fa6e9c-158c-4932-a543-f66e89fdd855"
  }
}
```

**⏱️ Duration:** 840.1 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/b2b29c04-f01e-41d3-93f3-3cffce7ff660 (165.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/b2b29c04-f01e-41d3-93f3-3cffce7ff660</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 165.0 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/27edf5f1-22b3-4948-a3ab-9281d3a157d4 (188.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/27edf5f1-22b3-4948-a3ab-9281d3a157d4</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 188.0 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/6b1d694a-cba2-4c50-8730-e23b75ecc8ef (185.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/6b1d694a-cba2-4c50-8730-e23b75ecc8ef</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 185.9 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/34779323-c113-401c-96a4-c3cfd143fa49 (174.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/34779323-c113-401c-96a4-c3cfd143fa49</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 174.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/06fab3de-e77b-468a-8d30-928800a801d7 (184.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/06fab3de-e77b-468a-8d30-928800a801d7</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 184.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/messages/665f8d3d-9e11-4fb1-b99b-7197ec3c3607 (193.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/665f8d3d-9e11-4fb1-b99b-7197ec3c3607</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 193.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/3bd5f933-e0f6-4373-9fe5-63abe2568dd4 (695.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 695.9 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/c2fb4f4e-8e09-4a27-aee0-ccb0fc1b8b5a (612.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 612.0 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/b1b54afa-1c89-4d20-bf5e-23ba702c3d33 (657.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 657.9 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/4c02ed59-5ac0-4e65-ba5e-2d19e05d579b (662.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 662.0 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/conversations/093e565e-61de-4966-bd4d-8c9bfe33dbbf (567.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 567.7 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/conversations/e3c7df05-7e5a-4ee2-bcb5-104ea28823b2 (605.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 605.1 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/organizations/70fa6e9c-158c-4932-a543-f66e89fdd855 (1201.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1201.3 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/organizations/a86a8561-f915-4760-995c-ce1468672f55 (1057.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNjY2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA2NjYsImV4cCI6MTc0ODgyNDI2NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MeWEpP2hn7ipwRVcoPhC5piV8qyO4xXfTw7hgh6PoGbY9uNUZ6Y-SbiHqnaDk63wh-Gy8VMHg8sQAuyCuUn3tirdwvnFcfdTsbPzOvj81lUjRDXDjgZU3HMIkaionsOF_-G0I_ci5WW5Gl3MW2Yz7i_YAfOjI5fJ0TYlrlt_4qeIi3zkO-2uUGbs3khLDoztQ6ZesnHDzb9A1o7HTKwUVNedGrEAqCD-fWhwvRh9XuXNhew83ZFg-Ncdz8D611CDVZD2cP13Ly1J0hnYS5AAzbK9J0ZF16ogmjWQh98MMi9UxBp75WbB_fflOGVzBBfgAwcWdYAGmff6ihJeCD-ouQ"
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
    "date": "Sun, 01 Jun 2025 23:31:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1057.7 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (338.4ms)</summary>

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
    "etag": "W/\"640-QPBYm5DIW/Y4vO44RQ+SYYsdNSA\"",
    "date": "Sun, 01 Jun 2025 23:31:49 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNzA4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA3MDgsImV4cCI6MTc0ODgyNDMwOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WOvePn4K1l1bVTj3LIXROsuvau3hW0a3uplgsDNxan3MPou7JONk3wspIK83FVIxuGUB4iFJWIQXZIQsSePGfCU6pJwbM2PsHGf5uid1d-ycXxvbqaKJcfL5hwi8kA8tRqAuSPWGpqwYAEvdlE7ZbxMUbD0fz1udm8lJE839RiEjOGN07RTn9mt2cn5G-h4Eo7N-Ak-dZFtWqmGONFeqoOZDP7wQ-meFKn1BimwTGa4IC10lV52Hhb1vLX79iFMg6ew6bl0_rJeiV2uL1GbmEL7FO6H3mCZVH-uy44h2p6NPLfURluOQ1SLYe1N9QeCl-GKbq2_ejlkMiUdzDEUY-Q",
      "refreshToken": "AMf-vBxs-PitXoWLjES3eaAQtYYI6pY6U_s1prLh9-btcFz213p_aAlauDm27YAyhOPovlDs3z-ysH_2Y9vmCr-iZnrFLXJc1Jjih_UO1vRXwpT8C6uXyTyMDGP_Rp9cyP-QLn7LfPYBhQY5gFEkvyar_0AuPTfDSahLU8AmTWRuF1tlUBzQrszpckd6MFXtbsb7PqRfgvk3S9W7OOBt4oxhqOaPNzqDXIXSQUMIZrPQX9HhBvexBh-jzWZyEQO1HdRq8EI9jSCs",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 338.4 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/UeeJOtQmv4RX8WKjBKaAsYkayv02 (1069.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNzA4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA3MDgsImV4cCI6MTc0ODgyNDMwOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WOvePn4K1l1bVTj3LIXROsuvau3hW0a3uplgsDNxan3MPou7JONk3wspIK83FVIxuGUB4iFJWIQXZIQsSePGfCU6pJwbM2PsHGf5uid1d-ycXxvbqaKJcfL5hwi8kA8tRqAuSPWGpqwYAEvdlE7ZbxMUbD0fz1udm8lJE839RiEjOGN07RTn9mt2cn5G-h4Eo7N-Ak-dZFtWqmGONFeqoOZDP7wQ-meFKn1BimwTGa4IC10lV52Hhb1vLX79iFMg6ew6bl0_rJeiV2uL1GbmEL7FO6H3mCZVH-uy44h2p6NPLfURluOQ1SLYe1N9QeCl-GKbq2_ejlkMiUdzDEUY-Q"
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
    "date": "Sun, 01 Jun 2025 23:31:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1069.6 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (249.0ms)</summary>

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
    "etag": "W/\"640-7660nHdM/oR0/22y+RFI+CoZ/Qc\"",
    "date": "Sun, 01 Jun 2025 23:31:50 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNzEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA3MTAsImV4cCI6MTc0ODgyNDMxMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qbXbStk4D20PvP4sX7M-tKncugAILrloQ0tp-HvGwITrNj2sGehYAJCsaNJ56gGrlIJ2Yvccp1f9z_5JHDfcmg1G1KUoi8k7g9LyXXhzA4naS9Y_81KLN1JSCR0HAJ27A8c1k2mLo3lvkUE0leJwNmCCaCyUWPfLirg8N7k1XUvFTJjj4kVClvQ11X1OOGGumGn2bMxzSWpmQcDXTePzyQrtwftx3JNiNrHM7zifxiXYNJO94LHywrytb008t19Uky7MwwKVQ9V7nV9pHvTvt_ZksmjZ116pbjvltuhbwFuUvHMdFNm4i9hs6xbK2EKNVLzhYOLEhp7izO90LC7Lqg",
      "refreshToken": "AMf-vBwwi_SGlVSzwHU2EelzcoVDhzgCCTsdw9WzOuNffJIy_RLi_bDADc3ag0eBQU554TJfAjNdvbS7hKfo1P-VaDH3hgpfpHNXow6ZBesKi6m05s9Ki61Mfaw6VRtIqVmhI3QDzdpMezTs6kGAABtso4Y0CdmFIiXDyTMnTuRvQVdrJl9QT8Xk0-r9doz50FfOif8Cr0fhEf6d27p_RUbB9wIv9EKJKdZac_OFtS-6GwyYFp7uUBGdw_T8B4BU_sPaY8CWqEry",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 249.0 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/puz0DK7qacTznrOw4XIswggiYJh2 (1050.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNzEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA3MTAsImV4cCI6MTc0ODgyNDMxMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qbXbStk4D20PvP4sX7M-tKncugAILrloQ0tp-HvGwITrNj2sGehYAJCsaNJ56gGrlIJ2Yvccp1f9z_5JHDfcmg1G1KUoi8k7g9LyXXhzA4naS9Y_81KLN1JSCR0HAJ27A8c1k2mLo3lvkUE0leJwNmCCaCyUWPfLirg8N7k1XUvFTJjj4kVClvQ11X1OOGGumGn2bMxzSWpmQcDXTePzyQrtwftx3JNiNrHM7zifxiXYNJO94LHywrytb008t19Uky7MwwKVQ9V7nV9pHvTvt_ZksmjZ116pbjvltuhbwFuUvHMdFNm4i9hs6xbK2EKNVLzhYOLEhp7izO90LC7Lqg"
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
    "date": "Sun, 01 Jun 2025 23:31:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1050.7 ms  

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
