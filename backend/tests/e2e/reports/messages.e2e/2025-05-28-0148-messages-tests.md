# E2E Test Report: messages-tests

**Date:** 5/28/2025  
**Time:** 1:48:08 AM  
**Duration:** 47.62s  
**Tests:** 27 total, 21 passed, 6 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 1.45s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 0.74s | Should create a message with attachments |
| ✅ Should fail to create message without conversation ID | PASSED | 0.72s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.77s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.63s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 1.63s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.86s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.62s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.50s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.59s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.61s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.67s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.66s | Should allow message sender to view their message |
| ❌ Should allow conversation participant to view message | FAILED | 0.52s | Should allow conversation participant to view message |
| ❌ Should fail to view message as non-participant | FAILED | 2.46s | Should fail to view message as non-participant |
| ❌ Should allow message sender to delete their own message | FAILED | 1.32s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.57s | Should allow admin to delete any message |
| ❌ Should fail to delete message as non-sender non-admin | FAILED | 1.42s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.55s | Should fail to delete non-existent message |
| ❌ Should create message in specific organization | FAILED | 0.49s | Should create message in specific organization |
| ❌ Should not access messages from different organization | FAILED | 0.55s | Should not access messages from different organization |
| ✅ Should filter messages by organization | PASSED | 0.58s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.48s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.51s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.51s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 0.83s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 1.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1440.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
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
    "etag": "W/\"14c-KsBwnalI1RGdUWZNHThhetnKrRE\"",
    "date": "Tue, 27 May 2025 23:47:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "696dff68-6c48-4fd8-8038-cf9e2804c59d",
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:36.281Z",
    "attachments": null,
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 1440.5 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 0.74s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (735.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0NywidXNlcl9pZCI6Imd2b2pIUjZhTXdVMFBiSVVBa1ZWUEhYTE8wMzMiLCJzdWIiOiJndm9qSFI2YU13VTBQYklVQWtWVlBIWExPMDMzIiwiaWF0IjoxNzQ4Mzg5NjQ3LCJleHAiOjE3NDgzOTMyNDcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5NjQ1MzUwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTY0NTM1MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kZrNnlQb5uPWke_EFcU_yMpThNqmm7MKM7C1v5nj-ISfwOvqmm6VJeNjlCNg794BF1qa-4lunpKMXWSk3RTvoG7YZ0guqh2jW-mMtG_3OpfMUG_Q47tgDPrlw9IJ7SPZFFePl90QRcbW1cc3WXxZJUZpWpKf6MWovsPnLeGNcDB34z4HLsXSENopaBzaXC01Ym2lkAjoOKFdXZYL_c3N_7STjsV80onnJ625sReB1Dyfs-BD7eKWCO7OMVucnrTXTiRng-FBW5VjroEPYEC-NZb-hRt5pEt9TpQnwAzdRXME-oait6ciftxNJcMw9C_WD8prshquEDLdA7Z6ANTMzA",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "e25b5d73-a7ba-4185-ad03-f9ae599f3bb2",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "gvojHR6aMwU0PbIUAkVVPHXLO033"
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
    "etag": "W/\"18c-Vcf4ngaaMzxbdq55zkozZl2XD8M\"",
    "date": "Tue, 27 May 2025 23:47:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "854f6e41-9599-41be-828e-c4137ad637af",
    "conversationId": "e25b5d73-a7ba-4185-ad03-f9ae599f3bb2",
    "senderId": "gvojHR6aMwU0PbIUAkVVPHXLO033",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:37.488Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 735.0 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (719.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 719.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (773.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f"
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
    "date": "Tue, 27 May 2025 23:47:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 773.0 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (630.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 630.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (948.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gvojHR6aMwU0PbIUAkVVPHXLO033"
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
    "etag": "W/\"147-CNJ5JDVPxwvPMEKPxzht5Y1Uz3g\"",
    "date": "Tue, 27 May 2025 23:47:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "04a09fcf-fc1e-47a5-bff6-d6ce48fe2331",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:47:40.291Z",
    "lastMessageAt": "2025-05-27T23:47:40.291Z",
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gvojHR6aMwU0PbIUAkVVPHXLO033"
    ]
  }
}
```

**⏱️ Duration:** 948.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (680.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0OCwidXNlcl9pZCI6Im5nV3c1a2pQdzRhdjNPRU1yRXhMU0kzcUdwNjIiLCJzdWIiOiJuZ1d3NWtqUHc0YXYzT0VNckV4TFNJM3FHcDYyIiwiaWF0IjoxNzQ4Mzg5NjQ4LCJleHAiOjE3NDgzOTMyNDgsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk2NDczNTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk2NDczNTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.PM98GVaSGdqLJNvQm7iV7-Qi18GoDDddBNlas9SPy0nVdVNIby44uTnnzu5hzLYZtra0IiVEdojANYx8B76v__ScAXYWq-YRtb_lTecvWGg5Be2YJfI8ZZTd_yxDWW1T4oFUNYmRZGHeHGRfXVSLC-c51F2dItaMTb4mUG62npmbgNp_XFUEJ7Tr4BoWZ4WBJa_w8V7SJBm9ZhD7T5AOq017ej38EWZZz7rZs5RwQQYXzdLp1ykOycXv5G0C1NgRLw1V8hcv_1hAxS0w_W-eWqgbcUaF7AHpYEw2E284s-OzjSxUX2Kbh9Hq8-2_t_SXdZfkbya3WkR7gmyJZQuS7w",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "04a09fcf-fc1e-47a5-bff6-d6ce48fe2331",
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
    "date": "Tue, 27 May 2025 23:47:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 680.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/f9927c0d-db25-413e-99d0-ce36d706f54f (864.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "etag": "W/\"14e-E5mKDXtHvD8q92/9ZFPEQzYyBy0\"",
    "date": "Tue, 27 May 2025 23:47:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "696dff68-6c48-4fd8-8038-cf9e2804c59d",
      "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:36.281Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    }
  ]
}
```

**⏱️ Duration:** 864.0 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/696dff68-6c48-4fd8-8038-cf9e2804c59d/details (619.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "etag": "W/\"14c-KsBwnalI1RGdUWZNHThhetnKrRE\"",
    "date": "Tue, 27 May 2025 23:47:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "696dff68-6c48-4fd8-8038-cf9e2804c59d",
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:36.281Z",
    "attachments": null,
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 619.0 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (500.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 500.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (591.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 591.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (930.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gvojHR6aMwU0PbIUAkVVPHXLO033"
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
    "etag": "W/\"154-RQnzhrgj36KrorG1yUxKWWzCsUk\"",
    "date": "Tue, 27 May 2025 23:47:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2a913208-4010-4cda-8973-1d67bcbd5b5d",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:47:44.485Z",
    "lastMessageAt": "2025-05-27T23:47:44.485Z",
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gvojHR6aMwU0PbIUAkVVPHXLO033"
    ]
  }
}
```

**⏱️ Duration:** 930.2 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/2a913208-4010-4cda-8973-1d67bcbd5b5d (683.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0OCwidXNlcl9pZCI6Im5nV3c1a2pQdzRhdjNPRU1yRXhMU0kzcUdwNjIiLCJzdWIiOiJuZ1d3NWtqUHc0YXYzT0VNckV4TFNJM3FHcDYyIiwiaWF0IjoxNzQ4Mzg5NjQ4LCJleHAiOjE3NDgzOTMyNDgsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk2NDczNTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk2NDczNTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.PM98GVaSGdqLJNvQm7iV7-Qi18GoDDddBNlas9SPy0nVdVNIby44uTnnzu5hzLYZtra0IiVEdojANYx8B76v__ScAXYWq-YRtb_lTecvWGg5Be2YJfI8ZZTd_yxDWW1T4oFUNYmRZGHeHGRfXVSLC-c51F2dItaMTb4mUG62npmbgNp_XFUEJ7Tr4BoWZ4WBJa_w8V7SJBm9ZhD7T5AOq017ej38EWZZz7rZs5RwQQYXzdLp1ykOycXv5G0C1NgRLw1V8hcv_1hAxS0w_W-eWqgbcUaF7AHpYEw2E284s-OzjSxUX2Kbh9Hq8-2_t_SXdZfkbya3WkR7gmyJZQuS7w",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 683.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=f9927c0d-db25-413e-99d0-ce36d706f54f (664.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "etag": "W/\"14e-E5mKDXtHvD8q92/9ZFPEQzYyBy0\"",
    "date": "Tue, 27 May 2025 23:47:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "696dff68-6c48-4fd8-8038-cf9e2804c59d",
      "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:36.281Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    }
  ]
}
```

**⏱️ Duration:** 664.9 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/696dff68-6c48-4fd8-8038-cf9e2804c59d/details (663.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "etag": "W/\"14c-KsBwnalI1RGdUWZNHThhetnKrRE\"",
    "date": "Tue, 27 May 2025 23:47:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "696dff68-6c48-4fd8-8038-cf9e2804c59d",
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:36.281Z",
    "attachments": null,
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 663.9 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ❌ FAILED  
**Duration:** 0.52s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/696dff68-6c48-4fd8-8038-cf9e2804c59d/details (517.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0NywidXNlcl9pZCI6Imd2b2pIUjZhTXdVMFBiSVVBa1ZWUEhYTE8wMzMiLCJzdWIiOiJndm9qSFI2YU13VTBQYklVQWtWVlBIWExPMDMzIiwiaWF0IjoxNzQ4Mzg5NjQ3LCJleHAiOjE3NDgzOTMyNDcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5NjQ1MzUwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTY0NTM1MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kZrNnlQb5uPWke_EFcU_yMpThNqmm7MKM7C1v5nj-ISfwOvqmm6VJeNjlCNg794BF1qa-4lunpKMXWSk3RTvoG7YZ0guqh2jW-mMtG_3OpfMUG_Q47tgDPrlw9IJ7SPZFFePl90QRcbW1cc3WXxZJUZpWpKf6MWovsPnLeGNcDB34z4HLsXSENopaBzaXC01Ym2lkAjoOKFdXZYL_c3N_7STjsV80onnJ625sReB1Dyfs-BD7eKWCO7OMVucnrTXTiRng-FBW5VjroEPYEC-NZb-hRt5pEt9TpQnwAzdRXME-oait6ciftxNJcMw9C_WD8prshquEDLdA7Z6ANTMzA",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 517.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ❌ FAILED  
**Duration:** 2.46s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"You must be a participant to view this message"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1002.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gvojHR6aMwU0PbIUAkVVPHXLO033"
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
    "etag": "W/\"15a-VM61MJzCE+JRQrityZO++bexSvw\"",
    "date": "Tue, 27 May 2025 23:47:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c03f4fb8-e328-4aa5-9fac-5b5187f73958",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:47:47.983Z",
    "lastMessageAt": "2025-05-27T23:47:47.983Z",
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "gvojHR6aMwU0PbIUAkVVPHXLO033"
    ]
  }
}
```

**⏱️ Duration:** 1002.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (986.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "c03f4fb8-e328-4aa5-9fac-5b5187f73958",
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
    "etag": "W/\"13d-gFz1ztj3oBIGEMobuQlYj86UblU\"",
    "date": "Tue, 27 May 2025 23:47:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f4998c49-f42f-4bb8-84d7-db399376daab",
    "conversationId": "c03f4fb8-e328-4aa5-9fac-5b5187f73958",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:49.294Z",
    "attachments": null,
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 986.8 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/f4998c49-f42f-4bb8-84d7-db399376daab/details (469.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0OCwidXNlcl9pZCI6Im5nV3c1a2pQdzRhdjNPRU1yRXhMU0kzcUdwNjIiLCJzdWIiOiJuZ1d3NWtqUHc0YXYzT0VNckV4TFNJM3FHcDYyIiwiaWF0IjoxNzQ4Mzg5NjQ4LCJleHAiOjE3NDgzOTMyNDgsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk2NDczNTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk2NDczNTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.PM98GVaSGdqLJNvQm7iV7-Qi18GoDDddBNlas9SPy0nVdVNIby44uTnnzu5hzLYZtra0IiVEdojANYx8B76v__ScAXYWq-YRtb_lTecvWGg5Be2YJfI8ZZTd_yxDWW1T4oFUNYmRZGHeHGRfXVSLC-c51F2dItaMTb4mUG62npmbgNp_XFUEJ7Tr4BoWZ4WBJa_w8V7SJBm9ZhD7T5AOq017ej38EWZZz7rZs5RwQQYXzdLp1ykOycXv5G0C1NgRLw1V8hcv_1hAxS0w_W-eWqgbcUaF7AHpYEw2E284s-OzjSxUX2Kbh9Hq8-2_t_SXdZfkbya3WkR7gmyJZQuS7w",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 469.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ❌ FAILED  
**Duration:** 1.32s  
**Error:** Request failed with status code 403  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (799.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0NywidXNlcl9pZCI6Imd2b2pIUjZhTXdVMFBiSVVBa1ZWUEhYTE8wMzMiLCJzdWIiOiJndm9qSFI2YU13VTBQYklVQWtWVlBIWExPMDMzIiwiaWF0IjoxNzQ4Mzg5NjQ3LCJleHAiOjE3NDgzOTMyNDcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5NjQ1MzUwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTY0NTM1MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kZrNnlQb5uPWke_EFcU_yMpThNqmm7MKM7C1v5nj-ISfwOvqmm6VJeNjlCNg794BF1qa-4lunpKMXWSk3RTvoG7YZ0guqh2jW-mMtG_3OpfMUG_Q47tgDPrlw9IJ7SPZFFePl90QRcbW1cc3WXxZJUZpWpKf6MWovsPnLeGNcDB34z4HLsXSENopaBzaXC01Ym2lkAjoOKFdXZYL_c3N_7STjsV80onnJ625sReB1Dyfs-BD7eKWCO7OMVucnrTXTiRng-FBW5VjroEPYEC-NZb-hRt5pEt9TpQnwAzdRXME-oait6ciftxNJcMw9C_WD8prshquEDLdA7Z6ANTMzA",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
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
    "etag": "W/\"14d-nMcdBZLjCtEFXAI/jVJldWFPha0\"",
    "date": "Tue, 27 May 2025 23:47:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "fafc0b6c-f212-4138-83da-2bce3809b904",
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
    "senderId": "gvojHR6aMwU0PbIUAkVVPHXLO033",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:50.578Z",
    "attachments": null,
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 799.1 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/fafc0b6c-f212-4138-83da-2bce3809b904 (522.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0NywidXNlcl9pZCI6Imd2b2pIUjZhTXdVMFBiSVVBa1ZWUEhYTE8wMzMiLCJzdWIiOiJndm9qSFI2YU13VTBQYklVQWtWVlBIWExPMDMzIiwiaWF0IjoxNzQ4Mzg5NjQ3LCJleHAiOjE3NDgzOTMyNDcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5NjQ1MzUwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTY0NTM1MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kZrNnlQb5uPWke_EFcU_yMpThNqmm7MKM7C1v5nj-ISfwOvqmm6VJeNjlCNg794BF1qa-4lunpKMXWSk3RTvoG7YZ0guqh2jW-mMtG_3OpfMUG_Q47tgDPrlw9IJ7SPZFFePl90QRcbW1cc3WXxZJUZpWpKf6MWovsPnLeGNcDB34z4HLsXSENopaBzaXC01Ym2lkAjoOKFdXZYL_c3N_7STjsV80onnJ625sReB1Dyfs-BD7eKWCO7OMVucnrTXTiRng-FBW5VjroEPYEC-NZb-hRt5pEt9TpQnwAzdRXME-oait6ciftxNJcMw9C_WD8prshquEDLdA7Z6ANTMzA",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 522.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (845.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0NywidXNlcl9pZCI6Imd2b2pIUjZhTXdVMFBiSVVBa1ZWUEhYTE8wMzMiLCJzdWIiOiJndm9qSFI2YU13VTBQYklVQWtWVlBIWExPMDMzIiwiaWF0IjoxNzQ4Mzg5NjQ3LCJleHAiOjE3NDgzOTMyNDcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5NjQ1MzUwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTY0NTM1MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kZrNnlQb5uPWke_EFcU_yMpThNqmm7MKM7C1v5nj-ISfwOvqmm6VJeNjlCNg794BF1qa-4lunpKMXWSk3RTvoG7YZ0guqh2jW-mMtG_3OpfMUG_Q47tgDPrlw9IJ7SPZFFePl90QRcbW1cc3WXxZJUZpWpKf6MWovsPnLeGNcDB34z4HLsXSENopaBzaXC01Ym2lkAjoOKFdXZYL_c3N_7STjsV80onnJ625sReB1Dyfs-BD7eKWCO7OMVucnrTXTiRng-FBW5VjroEPYEC-NZb-hRt5pEt9TpQnwAzdRXME-oait6ciftxNJcMw9C_WD8prshquEDLdA7Z6ANTMzA",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
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
    "etag": "W/\"14c-TbF17fjw3sBlORRGfXIru2CDwsM\"",
    "date": "Tue, 27 May 2025 23:47:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "818ec7eb-0f4f-4faa-b7e6-d06ac216799c",
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
    "senderId": "gvojHR6aMwU0PbIUAkVVPHXLO033",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:51.906Z",
    "attachments": null,
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 845.2 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/818ec7eb-0f4f-4faa-b7e6-d06ac216799c (725.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 725.4 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ❌ FAILED  
**Duration:** 1.42s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

Expected substring: [32m"Only message sender or organization admin can delete messages"[39m
Received string:    [31m"Permission denied"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (870.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "e25b5d73-a7ba-4185-ad03-f9ae599f3bb2",
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
    "etag": "W/\"155-AFckB7+pv67nb982IHwHrvoX9Sg\"",
    "date": "Tue, 27 May 2025 23:47:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7c30e372-b21c-4033-be87-6812edd174e2",
    "conversationId": "e25b5d73-a7ba-4185-ad03-f9ae599f3bb2",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:53.550Z",
    "attachments": null,
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 870.4 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/7c30e372-b21c-4033-be87-6812edd174e2 (548.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTY0NywidXNlcl9pZCI6Imd2b2pIUjZhTXdVMFBiSVVBa1ZWUEhYTE8wMzMiLCJzdWIiOiJndm9qSFI2YU13VTBQYklVQWtWVlBIWExPMDMzIiwiaWF0IjoxNzQ4Mzg5NjQ3LCJleHAiOjE3NDgzOTMyNDcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5NjQ1MzUwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTY0NTM1MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kZrNnlQb5uPWke_EFcU_yMpThNqmm7MKM7C1v5nj-ISfwOvqmm6VJeNjlCNg794BF1qa-4lunpKMXWSk3RTvoG7YZ0guqh2jW-mMtG_3OpfMUG_Q47tgDPrlw9IJ7SPZFFePl90QRcbW1cc3WXxZJUZpWpKf6MWovsPnLeGNcDB34z4HLsXSENopaBzaXC01Ym2lkAjoOKFdXZYL_c3N_7STjsV80onnJ625sReB1Dyfs-BD7eKWCO7OMVucnrTXTiRng-FBW5VjroEPYEC-NZb-hRt5pEt9TpQnwAzdRXME-oait6ciftxNJcMw9C_WD8prshquEDLdA7Z6ANTMzA",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 548.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (548.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 548.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ❌ FAILED  
**Duration:** 0.49s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (485.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "4dc60bf0-1bef-40f2-b96f-a0a3dac8f308"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1"
    ],
    "title": "Org2 Conversation"
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
    "date": "Tue, 27 May 2025 23:47:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Participants must be an array with at least two participants"
  }
}
```

**⏱️ Duration:** 485.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should not access messages from different organization
**Status:** ❌ FAILED  
**Duration:** 0.55s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/696dff68-6c48-4fd8-8038-cf9e2804c59d/details (551.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "4dc60bf0-1bef-40f2-b96f-a0a3dac8f308"
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
    "etag": "W/\"14c-KsBwnalI1RGdUWZNHThhetnKrRE\"",
    "date": "Tue, 27 May 2025 23:47:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "696dff68-6c48-4fd8-8038-cf9e2804c59d",
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:36.281Z",
    "attachments": null,
    "location": null,
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 551.8 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (577.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "content-length": "1725",
    "etag": "W/\"6bd-uQjikUDoLVmmoOy1fuRMfMMEDUE\"",
    "date": "Tue, 27 May 2025 23:47:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "7c30e372-b21c-4033-be87-6812edd174e2",
      "conversationId": "e25b5d73-a7ba-4185-ad03-f9ae599f3bb2",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:53.550Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    },
    {
      "id": "fafc0b6c-f212-4138-83da-2bce3809b904",
      "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
      "senderId": "gvojHR6aMwU0PbIUAkVVPHXLO033",
      "content": "Message to be deleted by sender",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:50.578Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    },
    {
      "id": "f4998c49-f42f-4bb8-84d7-db399376daab",
      "conversationId": "c03f4fb8-e328-4aa5-9fac-5b5187f73958",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:49.294Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    },
    {
      "id": "854f6e41-9599-41be-828e-c4137ad637af",
      "conversationId": "e25b5d73-a7ba-4185-ad03-f9ae599f3bb2",
      "senderId": "gvojHR6aMwU0PbIUAkVVPHXLO033",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:37.488Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    },
    {
      "id": "696dff68-6c48-4fd8-8038-cf9e2804c59d",
      "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:36.281Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    }
  ]
}
```

**⏱️ Duration:** 577.1 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (484.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "content-length": "1725",
    "etag": "W/\"6bd-uQjikUDoLVmmoOy1fuRMfMMEDUE\"",
    "date": "Tue, 27 May 2025 23:47:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "7c30e372-b21c-4033-be87-6812edd174e2",
      "conversationId": "e25b5d73-a7ba-4185-ad03-f9ae599f3bb2",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:53.550Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    },
    {
      "id": "fafc0b6c-f212-4138-83da-2bce3809b904",
      "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
      "senderId": "gvojHR6aMwU0PbIUAkVVPHXLO033",
      "content": "Message to be deleted by sender",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:50.578Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    },
    {
      "id": "f4998c49-f42f-4bb8-84d7-db399376daab",
      "conversationId": "c03f4fb8-e328-4aa5-9fac-5b5187f73958",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:49.294Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    },
    {
      "id": "854f6e41-9599-41be-828e-c4137ad637af",
      "conversationId": "e25b5d73-a7ba-4185-ad03-f9ae599f3bb2",
      "senderId": "gvojHR6aMwU0PbIUAkVVPHXLO033",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:37.488Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    },
    {
      "id": "696dff68-6c48-4fd8-8038-cf9e2804c59d",
      "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:47:36.281Z",
      "attachments": null,
      "location": null,
      "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
    }
  ]
}
```

**⏱️ Duration:** 484.0 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/f9927c0d-db25-413e-99d0-ce36d706f54f (13.3ms)</summary>

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
    "date": "Tue, 27 May 2025 23:47:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 13.3 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (506.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 506.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (506.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
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
    "date": "Tue, 27 May 2025 23:47:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 506.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (833.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug",
    "X-Organization-Id": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  },
  "data": {
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
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
    "etag": "W/\"180-Up561/HKUSJOUdBnN3EHK0FK3xU\"",
    "date": "Tue, 27 May 2025 23:47:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4931eec5-b260-4d37-91e3-293f1545cfa4",
    "conversationId": "f9927c0d-db25-413e-99d0-ce36d706f54f",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-05-27T23:47:58.634Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e"
  }
}
```

**⏱️ Duration:** 833.1 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/696dff68-6c48-4fd8-8038-cf9e2804c59d (199.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:47:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/696dff68-6c48-4fd8-8038-cf9e2804c59d</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 199.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/854f6e41-9599-41be-828e-c4137ad637af (302.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:47:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/854f6e41-9599-41be-828e-c4137ad637af</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 302.7 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/f4998c49-f42f-4bb8-84d7-db399376daab (202.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:47:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/f4998c49-f42f-4bb8-84d7-db399376daab</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 202.3 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/7c30e372-b21c-4033-be87-6812edd174e2 (205.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:47:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/7c30e372-b21c-4033-be87-6812edd174e2</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 205.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/4931eec5-b260-4d37-91e3-293f1545cfa4 (167.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:47:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/4931eec5-b260-4d37-91e3-293f1545cfa4</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 167.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/conversations/f9927c0d-db25-413e-99d0-ce36d706f54f (734.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:48:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 734.6 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/e25b5d73-a7ba-4185-ad03-f9ae599f3bb2 (566.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:48:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 566.4 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/04a09fcf-fc1e-47a5-bff6-d6ce48fe2331 (607.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:48:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 607.4 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/2a913208-4010-4cda-8973-1d67bcbd5b5d (623.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:48:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 623.7 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/c03f4fb8-e328-4aa5-9fac-5b5187f73958 (629.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:48:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 629.8 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/organizations/d4e95ee1-1a3d-42b3-a73f-f1af9b03eb4e (1739.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:48:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1739.3 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/organizations/4dc60bf0-1bef-40f2-b96f-a0a3dac8f308 (1202.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5NjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2NDEsImV4cCI6MTc0ODM5MzI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eYsu3OvqPz3C3mfEsAZH8LPQEhCGvUgexjuxOc6KrIfOOKGsyWspNFwIHJstSCQBHaFZ-xVtbJSFdAtqlNx3_N_hCEeIkAGKt9TfcubOLU52jlTXL7g_dfGCQDhy-a_TVsa2k73V6C5Ue7fqvHWqr1HuXui5k5F7YkaCcRJazk2C8vhkgHFHFizDsgUNOPECOtq-2wb9BhZQ3eRKaYGCkV5GCtnfgsQqNP6ldLK593NeR0aoBbSONQE77fhca36GtrxhrJcZ0gjr87pGMH9R0YXpXyvcyr-zp3gH6V-ega3MEMMqV816aLxnDt8F-g2sV26iyRrarYDVRCVM8PxHug"
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
    "date": "Tue, 27 May 2025 23:48:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1202.2 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (241.8ms)</summary>

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
    "etag": "W/\"640-BCOEv9m7FuqnaoUF/pae41/4v3w\"",
    "date": "Tue, 27 May 2025 23:48:06 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5Njg2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2ODYsImV4cCI6MTc0ODM5MzI4NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.S5WNsWKtG48-qQgRaLdupaMZHILWBT7kSBhKKilH6-cNArZnHSXpiamMA1UgHc-k_7LGgwPKAp2WA1-AkB_GftUzg1mGiYQyrZhz4x3dmCbeUn5uEHlcKBuGgISXuuHkwdbHEehPMuhNPMHDTSZXeCuLQLOewhyud9y1YXycAxMDMWjyNxQ5V_aKaqGZMv-sazBWC2Gds0rWPfJ0NwdwDaObF4LySl3qIzuW2ejzkYHpAAhQtSGZQPp_WZE1f7tHQgrmgK0iCzUTebjSeGXLIvkK55Hnj3KaUEO4m-PNTeTm2nO-519AhMbGzq_xUcWzu8l0gQsdCRr7mrmAwCHU9g",
      "refreshToken": "AMf-vBzSPh20c8fpZNE4OkOyH1hKzsMsbDV0_idWHZdUYl2NhD4BUDvCI9yAdylnnFD-sepnScrUtE8tHP3hOMaFkOXn00RINEui_J0-Ky3nL_mOunththfy1EybO_ksREjfwajrhspUfEmMgFnSfGRbsd4IL1oPJO8MqAofW8CfVw_nyUPO8THjPoJiCfMHWznvcLPhfk3uumHr8n2RScoY5dRok4RzgmYUXh6SqD6LykUiXLcLhpZeavKol0CWtBNpC1kfSZtU",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 241.8 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/gvojHR6aMwU0PbIUAkVVPHXLO033 (1290.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5Njg2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2ODYsImV4cCI6MTc0ODM5MzI4NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.S5WNsWKtG48-qQgRaLdupaMZHILWBT7kSBhKKilH6-cNArZnHSXpiamMA1UgHc-k_7LGgwPKAp2WA1-AkB_GftUzg1mGiYQyrZhz4x3dmCbeUn5uEHlcKBuGgISXuuHkwdbHEehPMuhNPMHDTSZXeCuLQLOewhyud9y1YXycAxMDMWjyNxQ5V_aKaqGZMv-sazBWC2Gds0rWPfJ0NwdwDaObF4LySl3qIzuW2ejzkYHpAAhQtSGZQPp_WZE1f7tHQgrmgK0iCzUTebjSeGXLIvkK55Hnj3KaUEO4m-PNTeTm2nO-519AhMbGzq_xUcWzu8l0gQsdCRr7mrmAwCHU9g"
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
    "date": "Tue, 27 May 2025 23:48:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1290.9 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (264.0ms)</summary>

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
    "etag": "W/\"640-fvDUbNQ/+FeU95WPeE0AniISKZI\"",
    "date": "Tue, 27 May 2025 23:48:07 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5Njg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2ODcsImV4cCI6MTc0ODM5MzI4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.FTO6o-dGTNvWGvyeqrAOkxDOHk4hdSPrixVmV6JFBGG2gpzhTcDJ2xDDXMpLOq-td3vnRiutBRDSkSrcwqvk-iJDvljr9y9oIeL0tCNKFnmG6NI2RTaDhpLuyUXrcmra9bET20sxCEJQjIZQHgSyPIYtYx-N1eUM5FGDe52Hh6gLIvreMWzQv-SisTN-k6Tf7mgxd-Nx2y2aOHpn8eKBKik5lwKVefLLOtme5QbXe6LKGB0myy2GT-XBNjU04W3rquT7paqzxzV-_pawl-H1uuY3jH74MZtSgFc0SRld3w-2-YaW65bH0-b8oHh3Tkd4i2Pkg5YhDH-0YRtzzG0dDA",
      "refreshToken": "AMf-vBzENncFT1DaMAj7axqdC7D-CVT4GAC9xc11Lpx9komK_UEPfccpSMokag3-CPI-C63kmmJH0K0OV6sBURRd6EhX-D2otBwp-48Y1gzfbaPZLWP-gfZM4duSMrCAtiY0INIPYwi1B_MyJ62fEY2jwJWCLDlPHSalPlCTPTk0NzvAIHekEtK7I1pc1742GR2JsQCuMMTtE57MyHR2SM-yIDCcilYya1aIQC5UTUQW46iK8SgcQhvPhohYaD9sDoZTojKhbzML",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 264.0 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/ngWw5kjPw4av3OEMrExLSI3qGp62 (1208.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5Njg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk2ODcsImV4cCI6MTc0ODM5MzI4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.FTO6o-dGTNvWGvyeqrAOkxDOHk4hdSPrixVmV6JFBGG2gpzhTcDJ2xDDXMpLOq-td3vnRiutBRDSkSrcwqvk-iJDvljr9y9oIeL0tCNKFnmG6NI2RTaDhpLuyUXrcmra9bET20sxCEJQjIZQHgSyPIYtYx-N1eUM5FGDe52Hh6gLIvreMWzQv-SisTN-k6Tf7mgxd-Nx2y2aOHpn8eKBKik5lwKVefLLOtme5QbXe6LKGB0myy2GT-XBNjU04W3rquT7paqzxzV-_pawl-H1uuY3jH74MZtSgFc0SRld3w-2-YaW65bH0-b8oHh3Tkd4i2Pkg5YhDH-0YRtzzG0dDA"
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
    "date": "Tue, 27 May 2025 23:48:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1208.8 ms  

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
- Total messages created: 5
- Total conversations created: 5
- Total organizations created: 2
- Total test users created: 2
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
