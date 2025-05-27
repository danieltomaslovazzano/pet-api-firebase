# E2E Test Report: messages-tests

**Date:** 5/28/2025  
**Time:** 1:51:45 AM  
**Duration:** 53.05s  
**Tests:** 27 total, 25 passed, 2 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 2.10s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 1.01s | Should create a message with attachments |
| ❌ Should fail to create message without conversation ID | FAILED | 0.74s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.76s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.59s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 1.82s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.89s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.68s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.53s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.64s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.78s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.72s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.72s | Should allow message sender to view their message |
| ✅ Should allow conversation participant to view message | PASSED | 0.65s | Should allow conversation participant to view message |
| ✅ Should fail to view message as non-participant | PASSED | 2.46s | Should fail to view message as non-participant |
| ✅ Should allow message sender to delete their own message | PASSED | 1.73s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.69s | Should allow admin to delete any message |
| ✅ Should fail to delete message as non-sender non-admin | PASSED | 1.49s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.62s | Should fail to delete non-existent message |
| ✅ Should create message in specific organization | PASSED | 2.48s | Should create message in specific organization |
| ✅ Should not access messages from different organization | PASSED | 0.59s | Should not access messages from different organization |
| ❌ Should filter messages by organization | FAILED | 0.60s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.55s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.62s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.60s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 0.93s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 2.10s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (2100.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
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
    "etag": "W/\"14c-GO6GUmx8cSbkUgNiHdMvq4fZReU\"",
    "date": "Tue, 27 May 2025 23:51:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:07.438Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 2100.3 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 1.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (926.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTg1NywidXNlcl9pZCI6IkY3VmpEUUoyQXFNMEM0Y0k4MllKNlBDdVVMTDIiLCJzdWIiOiJGN1ZqRFFKMkFxTTBDNGNJODJZSjZQQ3VVTEwyIiwiaWF0IjoxNzQ4Mzg5ODU3LCJleHAiOjE3NDgzOTM0NTcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5ODU2NTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTg1NjU1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QMZOKKrw2jM5qEpGi60IuOnRDQt40-LnXzopXh0CvFVgDslSGMCb58abak6r6th9CHyrAFmHn0nEWHDDWzKOkCVq4kueNzZSgHSFHj5ulW9shKB2nju-SvatWTKpWg_zAAiS_FT4ntBLvR82VwrAMm3ohsWmNoY8jr3AGmEiOtlcTCFEyQXWdaGVLhDYTU2m117mBu8a2OdkqBGGQjiGnyiRVMNDfQvUa12rKp4N-73IOBCLarQDxvfXdQE4_1RiaK58b1WuvK_JQ16kLiBtOVhbU0WDUy1okSLDY0mxgOiqBhZ6RQqVpqZ9n1_JiDKX9bV7QSCzQn1pwri1ezO6uA",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "141a943d-3405-4e89-b2ef-36b1a42b5c58",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
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
    "etag": "W/\"18c-Xt6Qk6HkLGbzAdrEzauuDyo7tzs\"",
    "date": "Tue, 27 May 2025 23:51:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "161999f3-597f-469d-b852-1fbd6436b5d1",
    "conversationId": "141a943d-3405-4e89-b2ef-36b1a42b5c58",
    "senderId": "F7VjDQJ2AqM0C4cI82YJ6PCuULL2",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:09.062Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 926.7 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ❌ FAILED  
**Duration:** 0.74s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m500[39m
Received: [31m400[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (735.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 735.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (756.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa"
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
    "date": "Tue, 27 May 2025 23:51:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 756.1 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (585.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 585.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.82s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1065.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
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
    "etag": "W/\"147-eIHJa3WGqyWee+MTXyoqM75jI94\"",
    "date": "Tue, 27 May 2025 23:51:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4d6ad2e3-d278-4e14-bc53-f282a10f533f",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:51:11.994Z",
    "lastMessageAt": "2025-05-27T23:51:11.994Z",
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
    ]
  }
}
```

**⏱️ Duration:** 1065.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (756.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTg1OSwidXNlcl9pZCI6Ik1UNWRtcW1hTWNUMkFmR0dFbG9RcHNBMDZRNzIiLCJzdWIiOiJNVDVkbXFtYU1jVDJBZkdHRWxvUXBzQTA2UTcyIiwiaWF0IjoxNzQ4Mzg5ODU5LCJleHAiOjE3NDgzOTM0NTksImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk4NTc4OTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk4NTc4OTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fk8NM9GsFX3th6w_iUmuFTCATSdXbbW04idSn-CV5cjuHh6wqeJCyZRSNvtHMaSlzyYYh0i4S6kQOwvekEz2uK16oaclqzukTCpKXLhP7OnvCVdBg_qVhWfKNgQrBbviR4NTrPOk393rJFbxwQWQtSl2Zl2iETwV7wefaq92jSe5DbvFiCMlnNlGb-0_TLBknCbM6syYkdroKJr1Mz97tP74LawWRGB-249zY8NDoKuUcGw8alVkBVGLpewn_3cNXXT6m9YORbJMFUcjeHQwujIVuMBjtt4tDxYzsl_hWb6e-zuhQqwrWN76DDrPTXtWRg_LNPdX6juEpCX02BHjpQ",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "4d6ad2e3-d278-4e14-bc53-f282a10f533f",
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
    "date": "Tue, 27 May 2025 23:51:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 756.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.89s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/f9780818-ea12-45a0-8472-1d4ed1aeb1aa (883.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "etag": "W/\"14e-M3UIC2vac7SGWyjqRL3rAZpnMXo\"",
    "date": "Tue, 27 May 2025 23:51:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
      "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:07.438Z",
      "attachments": null,
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    }
  ]
}
```

**⏱️ Duration:** 883.1 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/1abb1397-4c3b-4928-8f61-bfd637584da8/details (683.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "etag": "W/\"14c-GO6GUmx8cSbkUgNiHdMvq4fZReU\"",
    "date": "Tue, 27 May 2025 23:51:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:07.438Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 683.3 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (528.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:15 GMT",
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

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (637.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 637.5 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.78s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (957.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
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
    "etag": "W/\"154-YQMzHufktzXdQYCFkfaf0yhm1P8\"",
    "date": "Tue, 27 May 2025 23:51:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ab9d367e-f145-40b4-8b37-8ddffc434d27",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:51:16.460Z",
    "lastMessageAt": "2025-05-27T23:51:16.460Z",
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
    ]
  }
}
```

**⏱️ Duration:** 957.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/ab9d367e-f145-40b4-8b37-8ddffc434d27 (826.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTg1OSwidXNlcl9pZCI6Ik1UNWRtcW1hTWNUMkFmR0dFbG9RcHNBMDZRNzIiLCJzdWIiOiJNVDVkbXFtYU1jVDJBZkdHRWxvUXBzQTA2UTcyIiwiaWF0IjoxNzQ4Mzg5ODU5LCJleHAiOjE3NDgzOTM0NTksImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk4NTc4OTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk4NTc4OTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fk8NM9GsFX3th6w_iUmuFTCATSdXbbW04idSn-CV5cjuHh6wqeJCyZRSNvtHMaSlzyYYh0i4S6kQOwvekEz2uK16oaclqzukTCpKXLhP7OnvCVdBg_qVhWfKNgQrBbviR4NTrPOk393rJFbxwQWQtSl2Zl2iETwV7wefaq92jSe5DbvFiCMlnNlGb-0_TLBknCbM6syYkdroKJr1Mz97tP74LawWRGB-249zY8NDoKuUcGw8alVkBVGLpewn_3cNXXT6m9YORbJMFUcjeHQwujIVuMBjtt4tDxYzsl_hWb6e-zuhQqwrWN76DDrPTXtWRg_LNPdX6juEpCX02BHjpQ",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 826.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=f9780818-ea12-45a0-8472-1d4ed1aeb1aa (716.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "etag": "W/\"14e-M3UIC2vac7SGWyjqRL3rAZpnMXo\"",
    "date": "Tue, 27 May 2025 23:51:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
      "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:07.438Z",
      "attachments": null,
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    }
  ]
}
```

**⏱️ Duration:** 716.1 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/1abb1397-4c3b-4928-8f61-bfd637584da8/details (725.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "etag": "W/\"14c-GO6GUmx8cSbkUgNiHdMvq4fZReU\"",
    "date": "Tue, 27 May 2025 23:51:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:07.438Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 725.0 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/1abb1397-4c3b-4928-8f61-bfd637584da8/details (650.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "etag": "W/\"14c-GO6GUmx8cSbkUgNiHdMvq4fZReU\"",
    "date": "Tue, 27 May 2025 23:51:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:07.438Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 650.4 ms  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1052.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
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
    "etag": "W/\"15a-vgneGnIYH/iRsGO15SLRNuQYLdQ\"",
    "date": "Tue, 27 May 2025 23:51:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "79fe1cf0-1a5f-48ad-b103-7f3a38ff40be",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:51:20.385Z",
    "lastMessageAt": "2025-05-27T23:51:20.385Z",
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
    ]
  }
}
```

**⏱️ Duration:** 1052.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (851.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "79fe1cf0-1a5f-48ad-b103-7f3a38ff40be",
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
    "etag": "W/\"13d-mDc0yvBp7VAY7uYG7etvIkcVfcM\"",
    "date": "Tue, 27 May 2025 23:51:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "68ec0838-7dc6-4a37-9212-87c7dc544731",
    "conversationId": "79fe1cf0-1a5f-48ad-b103-7f3a38ff40be",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:21.611Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 851.1 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/68ec0838-7dc6-4a37-9212-87c7dc544731/details (559.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTg1OSwidXNlcl9pZCI6Ik1UNWRtcW1hTWNUMkFmR0dFbG9RcHNBMDZRNzIiLCJzdWIiOiJNVDVkbXFtYU1jVDJBZkdHRWxvUXBzQTA2UTcyIiwiaWF0IjoxNzQ4Mzg5ODU5LCJleHAiOjE3NDgzOTM0NTksImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk4NTc4OTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzODk4NTc4OTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fk8NM9GsFX3th6w_iUmuFTCATSdXbbW04idSn-CV5cjuHh6wqeJCyZRSNvtHMaSlzyYYh0i4S6kQOwvekEz2uK16oaclqzukTCpKXLhP7OnvCVdBg_qVhWfKNgQrBbviR4NTrPOk393rJFbxwQWQtSl2Zl2iETwV7wefaq92jSe5DbvFiCMlnNlGb-0_TLBknCbM6syYkdroKJr1Mz97tP74LawWRGB-249zY8NDoKuUcGw8alVkBVGLpewn_3cNXXT6m9YORbJMFUcjeHQwujIVuMBjtt4tDxYzsl_hWb6e-zuhQqwrWN76DDrPTXtWRg_LNPdX6juEpCX02BHjpQ",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 559.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ✅ PASSED  
**Duration:** 1.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (878.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTg1NywidXNlcl9pZCI6IkY3VmpEUUoyQXFNMEM0Y0k4MllKNlBDdVVMTDIiLCJzdWIiOiJGN1ZqRFFKMkFxTTBDNGNJODJZSjZQQ3VVTEwyIiwiaWF0IjoxNzQ4Mzg5ODU3LCJleHAiOjE3NDgzOTM0NTcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5ODU2NTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTg1NjU1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QMZOKKrw2jM5qEpGi60IuOnRDQt40-LnXzopXh0CvFVgDslSGMCb58abak6r6th9CHyrAFmHn0nEWHDDWzKOkCVq4kueNzZSgHSFHj5ulW9shKB2nju-SvatWTKpWg_zAAiS_FT4ntBLvR82VwrAMm3ohsWmNoY8jr3AGmEiOtlcTCFEyQXWdaGVLhDYTU2m117mBu8a2OdkqBGGQjiGnyiRVMNDfQvUa12rKp4N-73IOBCLarQDxvfXdQE4_1RiaK58b1WuvK_JQ16kLiBtOVhbU0WDUy1okSLDY0mxgOiqBhZ6RQqVpqZ9n1_JiDKX9bV7QSCzQn1pwri1ezO6uA",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
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
    "etag": "W/\"14d-fj/sJoaEMBHF04Y2nE5hGRPyQ9A\"",
    "date": "Tue, 27 May 2025 23:51:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "659fa6b5-e23c-400e-92de-d3f6267017d7",
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
    "senderId": "F7VjDQJ2AqM0C4cI82YJ6PCuULL2",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:23.011Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 878.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/659fa6b5-e23c-400e-92de-d3f6267017d7 (846.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 846.5 ms  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (883.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTg1NywidXNlcl9pZCI6IkY3VmpEUUoyQXFNMEM0Y0k4MllKNlBDdVVMTDIiLCJzdWIiOiJGN1ZqRFFKMkFxTTBDNGNJODJZSjZQQ3VVTEwyIiwiaWF0IjoxNzQ4Mzg5ODU3LCJleHAiOjE3NDgzOTM0NTcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5ODU2NTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTg1NjU1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QMZOKKrw2jM5qEpGi60IuOnRDQt40-LnXzopXh0CvFVgDslSGMCb58abak6r6th9CHyrAFmHn0nEWHDDWzKOkCVq4kueNzZSgHSFHj5ulW9shKB2nju-SvatWTKpWg_zAAiS_FT4ntBLvR82VwrAMm3ohsWmNoY8jr3AGmEiOtlcTCFEyQXWdaGVLhDYTU2m117mBu8a2OdkqBGGQjiGnyiRVMNDfQvUa12rKp4N-73IOBCLarQDxvfXdQE4_1RiaK58b1WuvK_JQ16kLiBtOVhbU0WDUy1okSLDY0mxgOiqBhZ6RQqVpqZ9n1_JiDKX9bV7QSCzQn1pwri1ezO6uA",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
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
    "etag": "W/\"14c-8VpVBZ/3557bnatB7mKQd9GKw8A\"",
    "date": "Tue, 27 May 2025 23:51:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "43826595-6527-4073-921a-83f223df7353",
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
    "senderId": "F7VjDQJ2AqM0C4cI82YJ6PCuULL2",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:24.783Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 883.6 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/43826595-6527-4073-921a-83f223df7353 (807.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 807.8 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ✅ PASSED  
**Duration:** 1.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (938.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "141a943d-3405-4e89-b2ef-36b1a42b5c58",
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
    "etag": "W/\"155-5PqoyC9vL0eE4leqP73Ck88Oq/I\"",
    "date": "Tue, 27 May 2025 23:51:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "e23ca0bd-0637-41d8-9a3c-f3674760312d",
    "conversationId": "141a943d-3405-4e89-b2ef-36b1a42b5c58",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:26.542Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 938.9 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/e23ca0bd-0637-41d8-9a3c-f3674760312d (552.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4OTg1NywidXNlcl9pZCI6IkY3VmpEUUoyQXFNMEM0Y0k4MllKNlBDdVVMTDIiLCJzdWIiOiJGN1ZqRFFKMkFxTTBDNGNJODJZSjZQQ3VVTEwyIiwiaWF0IjoxNzQ4Mzg5ODU3LCJleHAiOjE3NDgzOTM0NTcsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4Mzg5ODU2NTU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM4OTg1NjU1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QMZOKKrw2jM5qEpGi60IuOnRDQt40-LnXzopXh0CvFVgDslSGMCb58abak6r6th9CHyrAFmHn0nEWHDDWzKOkCVq4kueNzZSgHSFHj5ulW9shKB2nju-SvatWTKpWg_zAAiS_FT4ntBLvR82VwrAMm3ohsWmNoY8jr3AGmEiOtlcTCFEyQXWdaGVLhDYTU2m117mBu8a2OdkqBGGQjiGnyiRVMNDfQvUa12rKp4N-73IOBCLarQDxvfXdQE4_1RiaK58b1WuvK_JQ16kLiBtOVhbU0WDUy1okSLDY0mxgOiqBhZ6RQqVpqZ9n1_JiDKX9bV7QSCzQn1pwri1ezO6uA",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 552.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (615.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 615.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (608.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
  },
  "data": {
    "userId": "F7VjDQJ2AqM0C4cI82YJ6PCuULL2",
    "organizationId": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55",
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
    "etag": "W/\"fd-kM2DZ0alWIfBPmp6IabCdw6q9J8\"",
    "date": "Tue, 27 May 2025 23:51:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8dcbf729-93d4-4648-a8e7-6be4f5d3ae76",
    "userId": "F7VjDQJ2AqM0C4cI82YJ6PCuULL2",
    "organizationId": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T23:51:28.371Z",
    "updatedAt": "2025-05-27T23:51:28.371Z"
  }
}
```

**⏱️ Duration:** 608.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/conversations (989.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
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
    "etag": "W/\"144-vm0kpbTZ9TEWY0MfvaamrKh++jk\"",
    "date": "Tue, 27 May 2025 23:51:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "eacf8b00-7916-46f5-971b-63b381c8cb73",
    "title": "Org2 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:51:28.987Z",
    "lastMessageAt": "2025-05-27T23:51:28.987Z",
    "organizationId": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "F7VjDQJ2AqM0C4cI82YJ6PCuULL2"
    ]
  }
}
```

**⏱️ Duration:** 989.9 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/messages (875.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55"
  },
  "data": {
    "conversationId": "eacf8b00-7916-46f5-971b-63b381c8cb73",
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
    "etag": "W/\"147-Wzhu+ivatUTAuqioAXCFUnFrfY0\"",
    "date": "Tue, 27 May 2025 23:51:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "106107e7-40a8-4ce0-8bc9-a220a39ee28d",
    "conversationId": "eacf8b00-7916-46f5-971b-63b381c8cb73",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message in organization 2",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:30.188Z",
    "attachments": null,
    "location": null,
    "organizationId": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55"
  }
}
```

**⏱️ Duration:** 875.4 ms  

</details>


---

### Test: Should not access messages from different organization
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/1abb1397-4c3b-4928-8f61-bfd637584da8/details (591.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55"
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
    "etag": "W/\"14c-GO6GUmx8cSbkUgNiHdMvq4fZReU\"",
    "date": "Tue, 27 May 2025 23:51:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:07.438Z",
    "attachments": null,
    "location": null,
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 591.0 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ❌ FAILED  
**Duration:** 0.60s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m"[7mfc6747a3-de8[27ma-4[7mf[27m5b[7m-ba30-6677c4771028[27m"[39m
Received: [31m"[7md9c29c0[27ma-45b[7m5-410c-ab7c-5df987b7dd55[27m"[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (593.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "etag": "W/\"6b7-kflq7stW6BBrMrtSLlBw15M58qc\"",
    "date": "Tue, 27 May 2025 23:51:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "106107e7-40a8-4ce0-8bc9-a220a39ee28d",
      "conversationId": "eacf8b00-7916-46f5-971b-63b381c8cb73",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:30.188Z",
      "attachments": null,
      "location": null,
      "organizationId": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55"
    },
    {
      "id": "e23ca0bd-0637-41d8-9a3c-f3674760312d",
      "conversationId": "141a943d-3405-4e89-b2ef-36b1a42b5c58",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:26.542Z",
      "attachments": null,
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    },
    {
      "id": "68ec0838-7dc6-4a37-9212-87c7dc544731",
      "conversationId": "79fe1cf0-1a5f-48ad-b103-7f3a38ff40be",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:21.611Z",
      "attachments": null,
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    },
    {
      "id": "161999f3-597f-469d-b852-1fbd6436b5d1",
      "conversationId": "141a943d-3405-4e89-b2ef-36b1a42b5c58",
      "senderId": "F7VjDQJ2AqM0C4cI82YJ6PCuULL2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:09.062Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    },
    {
      "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
      "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:07.438Z",
      "attachments": null,
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    }
  ]
}
```

**⏱️ Duration:** 593.8 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (550.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "etag": "W/\"6b7-kflq7stW6BBrMrtSLlBw15M58qc\"",
    "date": "Tue, 27 May 2025 23:51:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "106107e7-40a8-4ce0-8bc9-a220a39ee28d",
      "conversationId": "eacf8b00-7916-46f5-971b-63b381c8cb73",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:30.188Z",
      "attachments": null,
      "location": null,
      "organizationId": "d9c29c0a-45b5-410c-ab7c-5df987b7dd55"
    },
    {
      "id": "e23ca0bd-0637-41d8-9a3c-f3674760312d",
      "conversationId": "141a943d-3405-4e89-b2ef-36b1a42b5c58",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:26.542Z",
      "attachments": null,
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    },
    {
      "id": "68ec0838-7dc6-4a37-9212-87c7dc544731",
      "conversationId": "79fe1cf0-1a5f-48ad-b103-7f3a38ff40be",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:21.611Z",
      "attachments": null,
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    },
    {
      "id": "161999f3-597f-469d-b852-1fbd6436b5d1",
      "conversationId": "141a943d-3405-4e89-b2ef-36b1a42b5c58",
      "senderId": "F7VjDQJ2AqM0C4cI82YJ6PCuULL2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:09.062Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    },
    {
      "id": "1abb1397-4c3b-4928-8f61-bfd637584da8",
      "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:51:07.438Z",
      "attachments": null,
      "location": null,
      "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
    }
  ]
}
```

**⏱️ Duration:** 550.4 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/f9780818-ea12-45a0-8472-1d4ed1aeb1aa (12.7ms)</summary>

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
    "date": "Tue, 27 May 2025 23:51:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 12.7 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (618.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 618.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (602.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
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
    "date": "Tue, 27 May 2025 23:51:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 602.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 0.93s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (927.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw",
    "X-Organization-Id": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  },
  "data": {
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
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
    "etag": "W/\"180-comNfTjYbLjdNUApMi9IpDNO0zI\"",
    "date": "Tue, 27 May 2025 23:51:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "94668ad9-0256-40b4-9351-824294c7983a",
    "conversationId": "f9780818-ea12-45a0-8472-1d4ed1aeb1aa",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-05-27T23:51:34.121Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "fc6747a3-de8a-4f5b-ba30-6677c4771028"
  }
}
```

**⏱️ Duration:** 927.4 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/1abb1397-4c3b-4928-8f61-bfd637584da8 (274.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/1abb1397-4c3b-4928-8f61-bfd637584da8</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 274.0 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/161999f3-597f-469d-b852-1fbd6436b5d1 (296.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/161999f3-597f-469d-b852-1fbd6436b5d1</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 296.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/68ec0838-7dc6-4a37-9212-87c7dc544731 (311.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/68ec0838-7dc6-4a37-9212-87c7dc544731</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 311.7 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/e23ca0bd-0637-41d8-9a3c-f3674760312d (201.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/e23ca0bd-0637-41d8-9a3c-f3674760312d</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 201.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/106107e7-40a8-4ce0-8bc9-a220a39ee28d (196.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/106107e7-40a8-4ce0-8bc9-a220a39ee28d</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 196.8 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/messages/94668ad9-0256-40b4-9351-824294c7983a (311.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/94668ad9-0256-40b4-9351-824294c7983a</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 311.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/f9780818-ea12-45a0-8472-1d4ed1aeb1aa (740.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 740.3 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/141a943d-3405-4e89-b2ef-36b1a42b5c58 (665.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 665.4 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/4d6ad2e3-d278-4e14-bc53-f282a10f533f (774.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 774.9 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/ab9d367e-f145-40b4-8b37-8ddffc434d27 (574.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 574.8 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/conversations/79fe1cf0-1a5f-48ad-b103-7f3a38ff40be (608.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 608.7 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/conversations/eacf8b00-7916-46f5-971b-63b381c8cb73 (605.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 605.2 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/organizations/fc6747a3-de8a-4f5b-ba30-6677c4771028 (1545.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1545.9 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/organizations/d9c29c0a-45b5-410c-ab7c-5df987b7dd55 (1174.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5ODUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk4NTMsImV4cCI6MTc0ODM5MzQ1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.p5iWqytAa7iqE6BBdqdhiVYpptf44N19x0rLzG9B8Hdx15ju0NxUrdQC_mJCgBoeKHdomS-4Nv1b38kJ3EZieOOhNHQwdb-S5wNkCkgCmJfO3liQpKCmfUHkQeqFTnGZubB2ZGs7LzBY_8UyYa-T2sbfhEUHUn2fbQ10VPP0_KhhrKgSl8lDpq8jZwWvKNkltsOJdneD4M79K4zdjTr7FkaYSzozbTIJK5PgT9GUlgZ38m151Kcnwos5mzibbk2G7362unGr_Lr28_aur-1GwFgLAta026Ra3wC1Z4U273FSvPvmStYGoUushW03BHg4oZ3GmclXWEox2RrQfNrZvw"
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
    "date": "Tue, 27 May 2025 23:51:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1174.5 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (283.5ms)</summary>

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
    "etag": "W/\"640-6L/9bSf4NgN5BaChjx/Adjrm/SA\"",
    "date": "Tue, 27 May 2025 23:51:42 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5MDIsImV4cCI6MTc0ODM5MzUwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.czJHA9Qjy9yi4w8RnCLGVxj-B9VQSZQySRXZR_tX_ij4PvFzpot8BccJ9-4r0XV28tL2OLsFfYHmKFVRMjjceoKHZyghQw7YYfm8_n4_pxnKL9HHNyb4SLRkKl-8MwCSS_ylMzNfKV6hsnuiEGcfLA5nqk4AMkqidk706DPui7KZFE3RWRBXr-tAUFYNnGXQIWVdwj3yH2wPc8JtWoTOx8G3T0a-X602i0IpJ2hdL1QMLKTr-T3nislv0sdE-G5ahOK2gv731w8nq8LEtyoGq8iKHFSnxmLRMe0sVdAyAtdjBV3SI-eLy_DbGOzOBpQ7CW5_7pIdg9jYomNVAqao7g",
      "refreshToken": "AMf-vBwrL-O3D0815G8VncXkhf98MWgNvboF-6zWBXmeZIZN8GloGs3wFjhDEcmK6UyzHu1ax81HYtIfxo8M1l1m6XYbqEttAchLIJzKT1RO_A5eott8TBgIevz7zlohNCTFhESco7eVf0-RW9M3RXYgGwN60d3DcH3XStKbdsMGEYvGWoYM0B_78PIjqTpnKUaWNNJx1jhpiV2uq0_MIdvSBES80fT6fqC5QGpGWsW8IFEcLkryuexITs7zyExTs1SHYlRcyKk9",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 283.5 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/F7VjDQJ2AqM0C4cI82YJ6PCuULL2 (1400.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5MDIsImV4cCI6MTc0ODM5MzUwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.czJHA9Qjy9yi4w8RnCLGVxj-B9VQSZQySRXZR_tX_ij4PvFzpot8BccJ9-4r0XV28tL2OLsFfYHmKFVRMjjceoKHZyghQw7YYfm8_n4_pxnKL9HHNyb4SLRkKl-8MwCSS_ylMzNfKV6hsnuiEGcfLA5nqk4AMkqidk706DPui7KZFE3RWRBXr-tAUFYNnGXQIWVdwj3yH2wPc8JtWoTOx8G3T0a-X602i0IpJ2hdL1QMLKTr-T3nislv0sdE-G5ahOK2gv731w8nq8LEtyoGq8iKHFSnxmLRMe0sVdAyAtdjBV3SI-eLy_DbGOzOBpQ7CW5_7pIdg9jYomNVAqao7g"
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
    "date": "Tue, 27 May 2025 23:51:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1400.0 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (389.4ms)</summary>

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
    "etag": "W/\"640-CESOG24IBKuXvPk0HAaWWnnd4yc\"",
    "date": "Tue, 27 May 2025 23:51:44 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTA0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5MDQsImV4cCI6MTc0ODM5MzUwNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Fqd2brZYkfoiECfSSGS8C7jd-lGufQZIPcA6wCseVa8-bk0Bwb5MN7PyCppJmltXKPU2AKO7WEXzaX7n3mfSzfI_Umz_EBIkZ0rX-XO4SOqX5iJcFvjdcyFYXTQW0h_5GUE3OrC-_7AtVs-T_V4O_2vFEoLY8QarG6vtfGAMj7RWHTcCTplEcAJsn22j7VK_HqYUZoKKJqgw8rd-rNtAmgg80GIo6K6LvFr92CjVtBzVynIcVQ7h4CRBI6Ageg-WM54RQsNnYTBbCgRYyEatuaKjSPW_eNaDpS7D6_Okni2LdgT-JCXsesXrZVzVQQMINcY201tFvkodZChY3YMnMw",
      "refreshToken": "AMf-vBx59LiYMHIka_rotRg5qKKXmfoIMWkogK1rVveWXRtlMf9zXsgl-cx0PVrBevQ-zBjBWLvsEMIsA_ZTsGxPbBNMz04OdwZaP1P85q7NZbMLgGMhBsXE8cRtOlTM2zlGql-vhADwewFjvvLU-ddDahGWf7gCFYw_dic_YatRgSKy02_wZKG8DabdqKB4X0KQGUE9ASHNnXSg6rPvMXJ1XLIdFvBU7WDWuHXkVcFtxpspyBRU_dlTknUPqM3G37Wlx_Y1QOLv",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 389.4 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/MT5dmqmaMcT2AfGGEloQpsA06Q72 (1235.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzg5OTA0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODk5MDQsImV4cCI6MTc0ODM5MzUwNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Fqd2brZYkfoiECfSSGS8C7jd-lGufQZIPcA6wCseVa8-bk0Bwb5MN7PyCppJmltXKPU2AKO7WEXzaX7n3mfSzfI_Umz_EBIkZ0rX-XO4SOqX5iJcFvjdcyFYXTQW0h_5GUE3OrC-_7AtVs-T_V4O_2vFEoLY8QarG6vtfGAMj7RWHTcCTplEcAJsn22j7VK_HqYUZoKKJqgw8rd-rNtAmgg80GIo6K6LvFr92CjVtBzVynIcVQ7h4CRBI6Ageg-WM54RQsNnYTBbCgRYyEatuaKjSPW_eNaDpS7D6_Okni2LdgT-JCXsesXrZVzVQQMINcY201tFvkodZChY3YMnMw"
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
    "date": "Tue, 27 May 2025 23:51:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1235.4 ms  

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
