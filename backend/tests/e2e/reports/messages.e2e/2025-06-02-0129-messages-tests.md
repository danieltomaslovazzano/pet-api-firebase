# E2E Test Report: messages-tests

**Date:** 6/2/2025  
**Time:** 1:29:45 AM  
**Duration:** 42.44s  
**Tests:** 27 total, 26 passed, 1 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 1.41s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 0.74s | Should create a message with attachments |
| ❌ Should fail to create message without conversation ID | FAILED | 0.62s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.68s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.53s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 1.49s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.79s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.59s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.52s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.52s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.54s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.60s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.61s | Should allow message sender to view their message |
| ✅ Should allow conversation participant to view message | PASSED | 0.53s | Should allow conversation participant to view message |
| ✅ Should fail to view message as non-participant | PASSED | 2.22s | Should fail to view message as non-participant |
| ✅ Should allow message sender to delete their own message | PASSED | 1.51s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.54s | Should allow admin to delete any message |
| ✅ Should fail to delete message as non-sender non-admin | PASSED | 1.23s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.53s | Should fail to delete non-existent message |
| ✅ Should create message in specific organization | PASSED | 2.58s | Should create message in specific organization |
| ✅ Should not access messages from different organization | PASSED | 0.60s | Should not access messages from different organization |
| ✅ Should filter messages by organization | PASSED | 0.60s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.55s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.48s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.53s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 0.81s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 1.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1403.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
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
    "etag": "W/\"14c-iBkEf3fFc+3gFuJZq7Dwv0go8/8\"",
    "date": "Sun, 01 Jun 2025 23:29:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:12.248Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 1403.4 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 0.74s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (740.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDU0NCwidXNlcl9pZCI6IjRGcWFnUno0bXJiM05UYVFXWDFIc1JNMDh6dzIiLCJzdWIiOiI0RnFhZ1J6NG1yYjNOVGFRV1gxSHNSTTA4encyIiwiaWF0IjoxNzQ4ODIwNTQ0LCJleHAiOjE3NDg4MjQxNDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwNTQ0MDExQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDU0NDAxMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CnIL1kgnw9min11nxBqu8Rav1-8BEeMyq3kbFqLBZR-drXh_jUfZHoM5SBk9HvwPemop7Z4Bg3KiI2lMIZlSMWFPIwLrlRPY-pTvCa5asUOEuzv9dnUnGcWMPGRF7DNWrVhPLaCLTZQ_DoJgti7fYgAI6lbRmmFpC3wPmTaWzvFCvVAACnPYm68xRm12_J8FL7fqf-uArH8yss_OAu8xgMnI0CVNKdlUVOfgy20bHM_utuET-M2TAG4c3wFLwXvev-m3Cwjhg75Wh306FOaQL5NZGzyzuBluN-rjWj28Rqjprw63odORiHTFZDFcHK3uaiFDVY2BvZRXzFK2q6r4nQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "1fdaefce-fe30-40be-810a-dfa8b534293b",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "4FqagRz4mrb3NTaQWX1HsRM08zw2"
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
    "etag": "W/\"18c-sJ4oZ52OvhpxVClFJS9xbQ43OYQ\"",
    "date": "Sun, 01 Jun 2025 23:29:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "23062328-9810-4a75-a627-831df34cee73",
    "conversationId": "1fdaefce-fe30-40be-810a-dfa8b534293b",
    "senderId": "4FqagRz4mrb3NTaQWX1HsRM08zw2",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:13.509Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 740.0 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.62s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m500[39m
Received: [31m400[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (617.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 617.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (680.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69"
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
    "date": "Sun, 01 Jun 2025 23:29:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 680.0 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (533.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 533.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (874.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "4FqagRz4mrb3NTaQWX1HsRM08zw2"
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
    "etag": "W/\"147-SeWHRprMQdsWueMbbax9AL1ptVA\"",
    "date": "Sun, 01 Jun 2025 23:29:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3cfea7d3-0358-4003-b3d9-413a8440db65",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:29:15.956Z",
    "lastMessageAt": "2025-06-01T23:29:15.956Z",
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "4FqagRz4mrb3NTaQWX1HsRM08zw2"
    ]
  }
}
```

**⏱️ Duration:** 874.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (612.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDU0NiwidXNlcl9pZCI6ImNxWU45UVhRS0xlYmwzbWRtZjRXSFA0Z083WTIiLCJzdWIiOiJjcVlOOVFYUUtMZWJsM21kbWY0V0hQNGdPN1kyIiwiaWF0IjoxNzQ4ODIwNTQ2LCJleHAiOjE3NDg4MjQxNDYsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA1NDUwNTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA1NDUwNTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Hu0Af_9qo1nvxBRI-dsYp92J4Ca_81xwGuPXLp1V68HRav9i4VGrI46AZXEu-Ia_WZ-qEZ0IMMkLgZ_Mtylp5NWPRteHfZBgO5d8sbG_AmQaxV8JglX8rxMsqz0MZ4KVmRMBjfX9rdysFGmB-BCFSORSFv0FaJAWscWoLTZlnfrmyv7eSc_-GddJxRcUTBGbsUdfLBfK9LkXZTXjyrBO2eELT4oQhGzT6eEPT45KN9FDodIub--ygiZQidQn5r2nbXVDj0cziNHnGkBzEwSUIWwZCfn77WUG0P1mntrg_LT9bdrPYRr3P4lQpAu6D4GRKGvGS_eXBDgXEJTxRkA5Aw",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "3cfea7d3-0358-4003-b3d9-413a8440db65",
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
    "date": "Sun, 01 Jun 2025 23:29:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 612.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/0cd16c8b-db82-4dfe-ad29-72fa01494a69 (786.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "etag": "W/\"14e-zlgnmBfg1dmmixMulOPwb2vYaMM\"",
    "date": "Sun, 01 Jun 2025 23:29:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
      "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:12.248Z",
      "attachments": null,
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    }
  ]
}
```

**⏱️ Duration:** 786.2 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/8c9a8bc2-7de7-46c0-9e9b-c0d18e399265/details (590.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "etag": "W/\"14c-iBkEf3fFc+3gFuJZq7Dwv0go8/8\"",
    "date": "Sun, 01 Jun 2025 23:29:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:12.248Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 590.0 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (516.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 516.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (520.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 520.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (870.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "4FqagRz4mrb3NTaQWX1HsRM08zw2"
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
    "etag": "W/\"154-iI2W8riJghZIjNS47F0Zf7iK6/0\"",
    "date": "Sun, 01 Jun 2025 23:29:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "eff16f36-9491-4f1e-a1c8-ccf4c72b3761",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:29:19.859Z",
    "lastMessageAt": "2025-06-01T23:29:19.859Z",
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "4FqagRz4mrb3NTaQWX1HsRM08zw2"
    ]
  }
}
```

**⏱️ Duration:** 870.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/eff16f36-9491-4f1e-a1c8-ccf4c72b3761 (674.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDU0NiwidXNlcl9pZCI6ImNxWU45UVhRS0xlYmwzbWRtZjRXSFA0Z083WTIiLCJzdWIiOiJjcVlOOVFYUUtMZWJsM21kbWY0V0hQNGdPN1kyIiwiaWF0IjoxNzQ4ODIwNTQ2LCJleHAiOjE3NDg4MjQxNDYsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA1NDUwNTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA1NDUwNTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Hu0Af_9qo1nvxBRI-dsYp92J4Ca_81xwGuPXLp1V68HRav9i4VGrI46AZXEu-Ia_WZ-qEZ0IMMkLgZ_Mtylp5NWPRteHfZBgO5d8sbG_AmQaxV8JglX8rxMsqz0MZ4KVmRMBjfX9rdysFGmB-BCFSORSFv0FaJAWscWoLTZlnfrmyv7eSc_-GddJxRcUTBGbsUdfLBfK9LkXZTXjyrBO2eELT4oQhGzT6eEPT45KN9FDodIub--ygiZQidQn5r2nbXVDj0cziNHnGkBzEwSUIWwZCfn77WUG0P1mntrg_LT9bdrPYRr3P4lQpAu6D4GRKGvGS_eXBDgXEJTxRkA5Aw",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 674.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=0cd16c8b-db82-4dfe-ad29-72fa01494a69 (600.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "etag": "W/\"14e-zlgnmBfg1dmmixMulOPwb2vYaMM\"",
    "date": "Sun, 01 Jun 2025 23:29:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
      "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:12.248Z",
      "attachments": null,
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    }
  ]
}
```

**⏱️ Duration:** 600.3 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/8c9a8bc2-7de7-46c0-9e9b-c0d18e399265/details (606.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "etag": "W/\"14c-iBkEf3fFc+3gFuJZq7Dwv0go8/8\"",
    "date": "Sun, 01 Jun 2025 23:29:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:12.248Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 606.8 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/8c9a8bc2-7de7-46c0-9e9b-c0d18e399265/details (533.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "etag": "W/\"14c-iBkEf3fFc+3gFuJZq7Dwv0go8/8\"",
    "date": "Sun, 01 Jun 2025 23:29:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:12.248Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 533.7 ms  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.22s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (901.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "4FqagRz4mrb3NTaQWX1HsRM08zw2"
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
    "etag": "W/\"15a-q3EGN/z/OXl0sjmMXJfTS1pZmXk\"",
    "date": "Sun, 01 Jun 2025 23:29:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a441cb6d-37bc-4898-a6be-728ff9c53798",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:29:23.158Z",
    "lastMessageAt": "2025-06-01T23:29:23.158Z",
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "4FqagRz4mrb3NTaQWX1HsRM08zw2"
    ]
  }
}
```

**⏱️ Duration:** 901.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (815.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "a441cb6d-37bc-4898-a6be-728ff9c53798",
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
    "etag": "W/\"13d-tuELtqqbPaoQOpFs+pGELBI4vcQ\"",
    "date": "Sun, 01 Jun 2025 23:29:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "314579a7-70a6-4176-8f61-630e3adcce3f",
    "conversationId": "a441cb6d-37bc-4898-a6be-728ff9c53798",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:24.253Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 815.4 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/314579a7-70a6-4176-8f61-630e3adcce3f/details (503.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDU0NiwidXNlcl9pZCI6ImNxWU45UVhRS0xlYmwzbWRtZjRXSFA0Z083WTIiLCJzdWIiOiJjcVlOOVFYUUtMZWJsM21kbWY0V0hQNGdPN1kyIiwiaWF0IjoxNzQ4ODIwNTQ2LCJleHAiOjE3NDg4MjQxNDYsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA1NDUwNTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA1NDUwNTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Hu0Af_9qo1nvxBRI-dsYp92J4Ca_81xwGuPXLp1V68HRav9i4VGrI46AZXEu-Ia_WZ-qEZ0IMMkLgZ_Mtylp5NWPRteHfZBgO5d8sbG_AmQaxV8JglX8rxMsqz0MZ4KVmRMBjfX9rdysFGmB-BCFSORSFv0FaJAWscWoLTZlnfrmyv7eSc_-GddJxRcUTBGbsUdfLBfK9LkXZTXjyrBO2eELT4oQhGzT6eEPT45KN9FDodIub--ygiZQidQn5r2nbXVDj0cziNHnGkBzEwSUIWwZCfn77WUG0P1mntrg_LT9bdrPYRr3P4lQpAu6D4GRKGvGS_eXBDgXEJTxRkA5Aw",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 503.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ✅ PASSED  
**Duration:** 1.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (777.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDU0NCwidXNlcl9pZCI6IjRGcWFnUno0bXJiM05UYVFXWDFIc1JNMDh6dzIiLCJzdWIiOiI0RnFhZ1J6NG1yYjNOVGFRV1gxSHNSTTA4encyIiwiaWF0IjoxNzQ4ODIwNTQ0LCJleHAiOjE3NDg4MjQxNDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwNTQ0MDExQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDU0NDAxMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CnIL1kgnw9min11nxBqu8Rav1-8BEeMyq3kbFqLBZR-drXh_jUfZHoM5SBk9HvwPemop7Z4Bg3KiI2lMIZlSMWFPIwLrlRPY-pTvCa5asUOEuzv9dnUnGcWMPGRF7DNWrVhPLaCLTZQ_DoJgti7fYgAI6lbRmmFpC3wPmTaWzvFCvVAACnPYm68xRm12_J8FL7fqf-uArH8yss_OAu8xgMnI0CVNKdlUVOfgy20bHM_utuET-M2TAG4c3wFLwXvev-m3Cwjhg75Wh306FOaQL5NZGzyzuBluN-rjWj28Rqjprw63odORiHTFZDFcHK3uaiFDVY2BvZRXzFK2q6r4nQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
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
    "etag": "W/\"14d-DYjah0fxWbfDeEBy9v4qeSQZYnI\"",
    "date": "Sun, 01 Jun 2025 23:29:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b8a564f9-188b-4ca2-9f25-e3570c991e99",
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
    "senderId": "4FqagRz4mrb3NTaQWX1HsRM08zw2",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:25.567Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 777.5 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/b8a564f9-188b-4ca2-9f25-e3570c991e99 (735.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 735.3 ms  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (750.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDU0NCwidXNlcl9pZCI6IjRGcWFnUno0bXJiM05UYVFXWDFIc1JNMDh6dzIiLCJzdWIiOiI0RnFhZ1J6NG1yYjNOVGFRV1gxSHNSTTA4encyIiwiaWF0IjoxNzQ4ODIwNTQ0LCJleHAiOjE3NDg4MjQxNDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwNTQ0MDExQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDU0NDAxMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CnIL1kgnw9min11nxBqu8Rav1-8BEeMyq3kbFqLBZR-drXh_jUfZHoM5SBk9HvwPemop7Z4Bg3KiI2lMIZlSMWFPIwLrlRPY-pTvCa5asUOEuzv9dnUnGcWMPGRF7DNWrVhPLaCLTZQ_DoJgti7fYgAI6lbRmmFpC3wPmTaWzvFCvVAACnPYm68xRm12_J8FL7fqf-uArH8yss_OAu8xgMnI0CVNKdlUVOfgy20bHM_utuET-M2TAG4c3wFLwXvev-m3Cwjhg75Wh306FOaQL5NZGzyzuBluN-rjWj28Rqjprw63odORiHTFZDFcHK3uaiFDVY2BvZRXzFK2q6r4nQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
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
    "etag": "W/\"14c-1qPLJlwrC4ErS7N64oUYqDkg8SQ\"",
    "date": "Sun, 01 Jun 2025 23:29:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "feb7132b-d384-4e57-916f-84787f40dd29",
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
    "senderId": "4FqagRz4mrb3NTaQWX1HsRM08zw2",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:27.059Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 750.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/feb7132b-d384-4e57-916f-84787f40dd29 (788.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 788.5 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ✅ PASSED  
**Duration:** 1.23s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (776.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "1fdaefce-fe30-40be-810a-dfa8b534293b",
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
    "etag": "W/\"155-oJQgaL/mvXN1hM4HOYmq7rFTdYk\"",
    "date": "Sun, 01 Jun 2025 23:29:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "009a1150-f251-4f10-9037-68e15334bc6b",
    "conversationId": "1fdaefce-fe30-40be-810a-dfa8b534293b",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:28.627Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 776.5 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/009a1150-f251-4f10-9037-68e15334bc6b (448.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDU0NCwidXNlcl9pZCI6IjRGcWFnUno0bXJiM05UYVFXWDFIc1JNMDh6dzIiLCJzdWIiOiI0RnFhZ1J6NG1yYjNOVGFRV1gxSHNSTTA4encyIiwiaWF0IjoxNzQ4ODIwNTQ0LCJleHAiOjE3NDg4MjQxNDQsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwNTQ0MDExQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDU0NDAxMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CnIL1kgnw9min11nxBqu8Rav1-8BEeMyq3kbFqLBZR-drXh_jUfZHoM5SBk9HvwPemop7Z4Bg3KiI2lMIZlSMWFPIwLrlRPY-pTvCa5asUOEuzv9dnUnGcWMPGRF7DNWrVhPLaCLTZQ_DoJgti7fYgAI6lbRmmFpC3wPmTaWzvFCvVAACnPYm68xRm12_J8FL7fqf-uArH8yss_OAu8xgMnI0CVNKdlUVOfgy20bHM_utuET-M2TAG4c3wFLwXvev-m3Cwjhg75Wh306FOaQL5NZGzyzuBluN-rjWj28Rqjprw63odORiHTFZDFcHK3uaiFDVY2BvZRXzFK2q6r4nQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 448.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (532.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 532.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (614.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
  },
  "data": {
    "userId": "4FqagRz4mrb3NTaQWX1HsRM08zw2",
    "organizationId": "47872de4-9e67-4f75-b374-a769d742587a",
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
    "etag": "W/\"fd-CK/1l0/AU60SFHZJwBt3+XIvfCM\"",
    "date": "Sun, 01 Jun 2025 23:29:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "fa2f78d8-4f2a-45be-b9bc-2465f556e7f9",
    "userId": "4FqagRz4mrb3NTaQWX1HsRM08zw2",
    "organizationId": "47872de4-9e67-4f75-b374-a769d742587a",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:29:30.281Z",
    "updatedAt": "2025-06-01T23:29:30.281Z"
  }
}
```

**⏱️ Duration:** 614.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/conversations (1095.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "47872de4-9e67-4f75-b374-a769d742587a"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "4FqagRz4mrb3NTaQWX1HsRM08zw2"
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
    "etag": "W/\"144-1mvrfP7VckrqNrQH1V9zQ0HjqNc\"",
    "date": "Sun, 01 Jun 2025 23:29:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "253cf59f-8ad5-4bbc-9b0d-52b58db48020",
    "title": "Org2 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:29:31.033Z",
    "lastMessageAt": "2025-06-01T23:29:31.033Z",
    "organizationId": "47872de4-9e67-4f75-b374-a769d742587a",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "4FqagRz4mrb3NTaQWX1HsRM08zw2"
    ]
  }
}
```

**⏱️ Duration:** 1095.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/messages (872.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "47872de4-9e67-4f75-b374-a769d742587a"
  },
  "data": {
    "conversationId": "253cf59f-8ad5-4bbc-9b0d-52b58db48020",
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
    "etag": "W/\"147-wG/gP3nslDl3stp7k6NzgtKjlQk\"",
    "date": "Sun, 01 Jun 2025 23:29:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "cd7fa21b-b687-4bcb-ae50-aa209e73206b",
    "conversationId": "253cf59f-8ad5-4bbc-9b0d-52b58db48020",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message in organization 2",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:32.196Z",
    "attachments": null,
    "location": null,
    "organizationId": "47872de4-9e67-4f75-b374-a769d742587a"
  }
}
```

**⏱️ Duration:** 872.9 ms  

</details>


---

### Test: Should not access messages from different organization
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/8c9a8bc2-7de7-46c0-9e9b-c0d18e399265/details (604.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "47872de4-9e67-4f75-b374-a769d742587a"
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
    "etag": "W/\"14c-iBkEf3fFc+3gFuJZq7Dwv0go8/8\"",
    "date": "Sun, 01 Jun 2025 23:29:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:12.248Z",
    "attachments": null,
    "location": null,
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 604.4 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (596.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "etag": "W/\"6b7-+JiFuZQFlbjj+uQml7TBZ0SRq+U\"",
    "date": "Sun, 01 Jun 2025 23:29:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "cd7fa21b-b687-4bcb-ae50-aa209e73206b",
      "conversationId": "253cf59f-8ad5-4bbc-9b0d-52b58db48020",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:32.196Z",
      "attachments": null,
      "location": null,
      "organizationId": "47872de4-9e67-4f75-b374-a769d742587a"
    },
    {
      "id": "009a1150-f251-4f10-9037-68e15334bc6b",
      "conversationId": "1fdaefce-fe30-40be-810a-dfa8b534293b",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:28.627Z",
      "attachments": null,
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    },
    {
      "id": "314579a7-70a6-4176-8f61-630e3adcce3f",
      "conversationId": "a441cb6d-37bc-4898-a6be-728ff9c53798",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:24.253Z",
      "attachments": null,
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    },
    {
      "id": "23062328-9810-4a75-a627-831df34cee73",
      "conversationId": "1fdaefce-fe30-40be-810a-dfa8b534293b",
      "senderId": "4FqagRz4mrb3NTaQWX1HsRM08zw2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:13.509Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    },
    {
      "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
      "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:12.248Z",
      "attachments": null,
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    }
  ]
}
```

**⏱️ Duration:** 596.9 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (545.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "etag": "W/\"6b7-+JiFuZQFlbjj+uQml7TBZ0SRq+U\"",
    "date": "Sun, 01 Jun 2025 23:29:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "cd7fa21b-b687-4bcb-ae50-aa209e73206b",
      "conversationId": "253cf59f-8ad5-4bbc-9b0d-52b58db48020",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:32.196Z",
      "attachments": null,
      "location": null,
      "organizationId": "47872de4-9e67-4f75-b374-a769d742587a"
    },
    {
      "id": "009a1150-f251-4f10-9037-68e15334bc6b",
      "conversationId": "1fdaefce-fe30-40be-810a-dfa8b534293b",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:28.627Z",
      "attachments": null,
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    },
    {
      "id": "314579a7-70a6-4176-8f61-630e3adcce3f",
      "conversationId": "a441cb6d-37bc-4898-a6be-728ff9c53798",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:24.253Z",
      "attachments": null,
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    },
    {
      "id": "23062328-9810-4a75-a627-831df34cee73",
      "conversationId": "1fdaefce-fe30-40be-810a-dfa8b534293b",
      "senderId": "4FqagRz4mrb3NTaQWX1HsRM08zw2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:13.509Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    },
    {
      "id": "8c9a8bc2-7de7-46c0-9e9b-c0d18e399265",
      "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:29:12.248Z",
      "attachments": null,
      "location": null,
      "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
    }
  ]
}
```

**⏱️ Duration:** 545.6 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/0cd16c8b-db82-4dfe-ad29-72fa01494a69 (8.8ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:29:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 8.8 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (477.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 477.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (528.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
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
    "date": "Sun, 01 Jun 2025 23:29:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 528.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (803.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ",
    "X-Organization-Id": "440e126d-8256-4496-ab56-bc961011cff9"
  },
  "data": {
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
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
    "etag": "W/\"180-YmdWRcruyd00Es0iECGFjA2GxUs\"",
    "date": "Sun, 01 Jun 2025 23:29:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ece00c64-5493-475c-8a62-5b9ba70670ae",
    "conversationId": "0cd16c8b-db82-4dfe-ad29-72fa01494a69",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-06-01T23:29:35.776Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "440e126d-8256-4496-ab56-bc961011cff9"
  }
}
```

**⏱️ Duration:** 803.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/8c9a8bc2-7de7-46c0-9e9b-c0d18e399265 (189.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/8c9a8bc2-7de7-46c0-9e9b-c0d18e399265</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 189.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/23062328-9810-4a75-a627-831df34cee73 (166.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/23062328-9810-4a75-a627-831df34cee73</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 166.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/314579a7-70a6-4176-8f61-630e3adcce3f (167.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/314579a7-70a6-4176-8f61-630e3adcce3f</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 167.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/009a1150-f251-4f10-9037-68e15334bc6b (188.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/009a1150-f251-4f10-9037-68e15334bc6b</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 188.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/cd7fa21b-b687-4bcb-ae50-aa209e73206b (173.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/cd7fa21b-b687-4bcb-ae50-aa209e73206b</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 173.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/messages/ece00c64-5493-475c-8a62-5b9ba70670ae (201.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/ece00c64-5493-475c-8a62-5b9ba70670ae</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 201.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/0cd16c8b-db82-4dfe-ad29-72fa01494a69 (641.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 641.5 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/1fdaefce-fe30-40be-810a-dfa8b534293b (538.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 538.3 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/3cfea7d3-0358-4003-b3d9-413a8440db65 (562.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 562.8 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/eff16f36-9491-4f1e-a1c8-ccf4c72b3761 (533.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 533.5 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/conversations/a441cb6d-37bc-4898-a6be-728ff9c53798 (583.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 583.5 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/conversations/253cf59f-8ad5-4bbc-9b0d-52b58db48020 (541.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 541.4 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/organizations/440e126d-8256-4496-ab56-bc961011cff9 (1195.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1195.6 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/organizations/47872de4-9e67-4f75-b374-a769d742587a (1016.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1NDIsImV4cCI6MTc0ODgyNDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BJVjHmAd-AdZ7UqMyrE8WkQSWyyaEltPSWHtSIgUS2ShMwHN7HLfO8CHXO0x5aUmewjhHb3aQdNf9aoGRdGapnz-S-vrzNXQU4bGHnDk5IX_274SnptH8sYiV2nbne4k_BTYjYitNYvxz_O0cwxWCJbu-AiS7EV91Ra1mXZq3zC0Q5bMeGyijERSa4u-dAklHrKPJN6urGjxhep_d1AeujO6pmMB6YecgggG8dJLpt2xTx6vx--uf7A-2VpEtYtkOi5aA5ggMbw9ptvGrnUO3C-3ZRezM0_9P_31KYQZMfGCOX7k6Gd2EbGdkdG0vqIcYCKhjgqCT_Fb8nYgybAhXQ"
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
    "date": "Sun, 01 Jun 2025 23:29:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1016.2 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (244.9ms)</summary>

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
    "etag": "W/\"640-QfipPMRRIVHn2ssk3xWurS80FLI\"",
    "date": "Sun, 01 Jun 2025 23:29:42 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTgyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1ODIsImV4cCI6MTc0ODgyNDE4MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SeOztAJVi0g3dNCNzC-AXUEDIbes5Uq5k7EmyWlQfANRw1UNTnUz_k4qbnIry6IRQSPJXdxGsQqeML3Xa1MhSR8xoQQ6p_a5-LpoRFjtIud0gwZNuCiaNL7Ld4x_jDljS9xJ3EqCwjBHYKOMMOLlh_YMRJ-o-CPH6NmtqnZIN9RyYkzDIwJ78avPxF87RbFaX8DHuqpD7o3_kgGKzt6mid-70_2uzy3ivGm0xPEsfkiO_ajh1mUL6kH0XcGex7iOiDrAeMquUzy_KMelEbDwwQEMWD3iPkKWqbcGzJmbZ924dHgtTsYAkdkLyvld5fkVqXSltH0gwuE_cKhlvUkFBw",
      "refreshToken": "AMf-vBxN4mWtLfDPLBKb2Cd4SiXL_-Q-pyyASBG6lCpPi6CgZH_OlwhVUj3pWxBTk1Q9Ux67_LJ5Bil5sd-pr7Q-Vq3EnojRuZh0YtlT-UmFsYGombDRzWTPU16nZAL4ASyyOjXQt4GCTeXbL4oFcM0oY2Wp9PmTcwu82I1q6gW9z5G1Gy2JC2RA5P-fhqCnhaLokkKHEhN2Peu6cDT7RQONo0VvwWwHSdGFcPAAClCbaQEgjlsQGVwBPSzswQEFX1s2IzM5w3HL",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 244.9 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/4FqagRz4mrb3NTaQWX1HsRM08zw2 (1038.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTgyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1ODIsImV4cCI6MTc0ODgyNDE4MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SeOztAJVi0g3dNCNzC-AXUEDIbes5Uq5k7EmyWlQfANRw1UNTnUz_k4qbnIry6IRQSPJXdxGsQqeML3Xa1MhSR8xoQQ6p_a5-LpoRFjtIud0gwZNuCiaNL7Ld4x_jDljS9xJ3EqCwjBHYKOMMOLlh_YMRJ-o-CPH6NmtqnZIN9RyYkzDIwJ78avPxF87RbFaX8DHuqpD7o3_kgGKzt6mid-70_2uzy3ivGm0xPEsfkiO_ajh1mUL6kH0XcGex7iOiDrAeMquUzy_KMelEbDwwQEMWD3iPkKWqbcGzJmbZ924dHgtTsYAkdkLyvld5fkVqXSltH0gwuE_cKhlvUkFBw"
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
    "date": "Sun, 01 Jun 2025 23:29:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1038.4 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (294.7ms)</summary>

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
    "etag": "W/\"640-LyVqrRiEYlMyzEn6F3PL+AdoygA\"",
    "date": "Sun, 01 Jun 2025 23:29:44 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTg0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1ODQsImV4cCI6MTc0ODgyNDE4NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VNUUFAbVFVGSIS6DVpvVhtAaLjlhaaKWFlI69ckIayvQwceV81Fh6uyqgTRrj-3Vq4wuegLwEVZ4VZ-TQchvpITYJekMMbSGbFIpWv1BU9mp-KD6wFlqPn4bNDSfO-FYXfgejWZAXLepwIIKX3B07EQnRq7m-9W0A8t2JqLzpM70cRm31Zq0cc7AJ6LIOVfO_HqSTAXCWgg24bnIpSbstpreVLnG6q3hYhUt39ij5Lg--RWD5xwO1ammDlwakSc6gnQEJGMAp8TLL6hmZkUS-lJr8g0yu5H-kZfchUmiVjOagzCpKowg7Nqia-EOZsqyH4Iz-XPCkQsbH2Hon80KLA",
      "refreshToken": "AMf-vBwuynwxVcP5B0J9cnNYuD0QnY2WZNarI-n_cy6rli7pU64PJdUrmHC4gSajQXZfIuAFhr0BAzf3etb3XbcAwEdQbGHRUD9A1d5WH8b4gmOCeURQi7TYs9tvykEd1rMIwECgTtaN_MbXg3UXoOLzUG6KEX7m6BXrNMTtRiJPIoclYB033LoD206IGBC0G8SHsKHUhf8zo6P4ASi11KmewDgaIqsZP6ihWhMwobGMgGQouf9Oxisq6k9QzAVUT05XaHLq9Zc-",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 294.7 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/cqYN9QXQKLebl3mdmf4WHP4gO7Y2 (1033.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwNTg0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA1ODQsImV4cCI6MTc0ODgyNDE4NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VNUUFAbVFVGSIS6DVpvVhtAaLjlhaaKWFlI69ckIayvQwceV81Fh6uyqgTRrj-3Vq4wuegLwEVZ4VZ-TQchvpITYJekMMbSGbFIpWv1BU9mp-KD6wFlqPn4bNDSfO-FYXfgejWZAXLepwIIKX3B07EQnRq7m-9W0A8t2JqLzpM70cRm31Zq0cc7AJ6LIOVfO_HqSTAXCWgg24bnIpSbstpreVLnG6q3hYhUt39ij5Lg--RWD5xwO1ammDlwakSc6gnQEJGMAp8TLL6hmZkUS-lJr8g0yu5H-kZfchUmiVjOagzCpKowg7Nqia-EOZsqyH4Iz-XPCkQsbH2Hon80KLA"
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
    "date": "Sun, 01 Jun 2025 23:29:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1033.1 ms  

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
