# E2E Test Report: messages-tests

**Date:** 5/28/2025  
**Time:** 1:54:59 AM  
**Duration:** 51.47s  
**Tests:** 27 total, 27 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 1.53s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 0.79s | Should create a message with attachments |
| ✅ Should fail to create message without conversation ID | PASSED | 0.63s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.77s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.66s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 1.61s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.90s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.71s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.60s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.59s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.80s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.69s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.57s | Should allow message sender to view their message |
| ✅ Should allow conversation participant to view message | PASSED | 0.59s | Should allow conversation participant to view message |
| ✅ Should fail to view message as non-participant | PASSED | 2.43s | Should fail to view message as non-participant |
| ✅ Should allow message sender to delete their own message | PASSED | 1.81s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.63s | Should allow admin to delete any message |
| ✅ Should fail to delete message as non-sender non-admin | PASSED | 1.46s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.65s | Should fail to delete non-existent message |
| ✅ Should create message in specific organization | PASSED | 2.41s | Should create message in specific organization |
| ✅ Should not access messages from different organization | PASSED | 0.67s | Should not access messages from different organization |
| ✅ Should filter messages by organization | PASSED | 0.71s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.56s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.58s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.61s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 0.84s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 1.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1526.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
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
    "etag": "W/\"14c-UgYldoDPLyuX2HoM/SOvBtGGFQ4\"",
    "date": "Tue, 27 May 2025 23:54:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:22.348Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 1526.9 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 0.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (785.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM5MDA1MywidXNlcl9pZCI6IjB5N1hkbnRvNjJSUWt3eTcyQThkd3g4dDdEYTIiLCJzdWIiOiIweTdYZG50bzYyUlFrd3k3MkE4ZHd4OHQ3RGEyIiwiaWF0IjoxNzQ4MzkwMDUzLCJleHAiOjE3NDgzOTM2NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4MzkwMDUyMjc3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM5MDA1MjI3N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HMygDVwrCYB3_iEo1Sr8CFfBV6GllFN-YlGE1SuWlOx8TuqyQm5mwo2nHrWpPEIFYBKnielJdso8HlrLRrzJi6qrZRfuesBiVummWNy6eaIdqUsj1yHJkoY5HKZJl0c0ywAVPz1hYKxZzbQofhpgFf2iXa0Hsrnge6l7fWGCqNL4kAXSYeW85gZnNkrRsKTyaQNX--yUBQAUZkeAPRL-e95S0KN1MfTiPpqohlTbMDiqy9YLsSqI5Rh1IMULs6300jg4Bvilhi45hK1npropbq641T0tDrhtNg12TOOEjyJP-Qa286Av074seo7rPdGJWBm5CDrEDBMcn6VuBe8v-g",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "e58c1486-f1b0-4b11-8ee7-7527d670b7ee",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "0y7Xdnto62RQkwy72A8dwx8t7Da2"
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
    "etag": "W/\"18c-VeqIffKbDI5IcuQxC+oKZvVqhY0\"",
    "date": "Tue, 27 May 2025 23:54:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "004d39cc-3b65-4803-a289-18514d279b66",
    "conversationId": "e58c1486-f1b0-4b11-8ee7-7527d670b7ee",
    "senderId": "0y7Xdnto62RQkwy72A8dwx8t7Da2",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:23.692Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 785.5 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (626.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 626.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (769.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd"
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
    "date": "Tue, 27 May 2025 23:54:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 769.0 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (659.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 659.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (898.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "0y7Xdnto62RQkwy72A8dwx8t7Da2"
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
    "etag": "W/\"147-120/k5vBXL4Io09YgFudAdNYbA4\"",
    "date": "Tue, 27 May 2025 23:54:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3fe9419a-36c3-4d7b-a86b-20571a2c027b",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:54:26.398Z",
    "lastMessageAt": "2025-05-27T23:54:26.398Z",
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "0y7Xdnto62RQkwy72A8dwx8t7Da2"
    ]
  }
}
```

**⏱️ Duration:** 898.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (716.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM5MDA1NCwidXNlcl9pZCI6Ik9rUHpsWkxBSHZRTlpDdFhYZ1VsMlZ5bExVdDEiLCJzdWIiOiJPa1B6bFpMQUh2UU5aQ3RYWGdVbDJWeWxMVXQxIiwiaWF0IjoxNzQ4MzkwMDU0LCJleHAiOjE3NDgzOTM2NTQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzOTAwNTM1OThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzOTAwNTM1OThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OPh94gsVzc7Hz-uQi94M5qjwApvNm1q0xgrsJiGJ31_QH4UWd3Qu34orv9t9-h-lUCvkBmAXbWZpCTZRXpoAvs1SAuJn0au5FMG5iri7SxWsiSbN7AAjDqF20dHsbsKDZqWQ1ewaAwixoNOBCEMqDkb60ccNlK2mHHGPN1W-cgxTnoLwD44EmHNAas8UgkgWriVdijxAze-PN9U2lq_87qoyDEmbk6oBJDq0ZGYn-i6Uo4j3XtaWYaKv5cw8VeyvVbqwHP804ZSs2w4fBdsDusYLmDszsWN0KwCiDD6csd-vGuBBAhLSU42DSEBSBbbxHa09mJg77PZ72X9f0FdLYA",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "3fe9419a-36c3-4d7b-a86b-20571a2c027b",
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
    "date": "Tue, 27 May 2025 23:54:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 716.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.90s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/a3e9d03b-23cf-49b3-89a8-939724ed6ddd (902.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "etag": "W/\"14e-zC5ckaIW/jfSNcFBYe90v1D8PXc\"",
    "date": "Tue, 27 May 2025 23:54:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
      "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:22.348Z",
      "attachments": null,
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    }
  ]
}
```

**⏱️ Duration:** 902.4 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/3e3001ad-88b1-4845-922b-fdeacd75b05d/details (710.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "etag": "W/\"14c-UgYldoDPLyuX2HoM/SOvBtGGFQ4\"",
    "date": "Tue, 27 May 2025 23:54:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:22.348Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 710.7 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (600.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 600.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (588.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 588.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1117.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "0y7Xdnto62RQkwy72A8dwx8t7Da2"
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
    "etag": "W/\"154-SyAON+4PUJmO4Ipl0NDC6v4p/WI\"",
    "date": "Tue, 27 May 2025 23:54:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ddd8eba6-fd6b-48c3-a4ee-6a8bedd633c4",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:54:31.049Z",
    "lastMessageAt": "2025-05-27T23:54:31.049Z",
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "0y7Xdnto62RQkwy72A8dwx8t7Da2"
    ]
  }
}
```

**⏱️ Duration:** 1117.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/ddd8eba6-fd6b-48c3-a4ee-6a8bedd633c4 (680.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM5MDA1NCwidXNlcl9pZCI6Ik9rUHpsWkxBSHZRTlpDdFhYZ1VsMlZ5bExVdDEiLCJzdWIiOiJPa1B6bFpMQUh2UU5aQ3RYWGdVbDJWeWxMVXQxIiwiaWF0IjoxNzQ4MzkwMDU0LCJleHAiOjE3NDgzOTM2NTQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzOTAwNTM1OThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzOTAwNTM1OThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OPh94gsVzc7Hz-uQi94M5qjwApvNm1q0xgrsJiGJ31_QH4UWd3Qu34orv9t9-h-lUCvkBmAXbWZpCTZRXpoAvs1SAuJn0au5FMG5iri7SxWsiSbN7AAjDqF20dHsbsKDZqWQ1ewaAwixoNOBCEMqDkb60ccNlK2mHHGPN1W-cgxTnoLwD44EmHNAas8UgkgWriVdijxAze-PN9U2lq_87qoyDEmbk6oBJDq0ZGYn-i6Uo4j3XtaWYaKv5cw8VeyvVbqwHP804ZSs2w4fBdsDusYLmDszsWN0KwCiDD6csd-vGuBBAhLSU42DSEBSBbbxHa09mJg77PZ72X9f0FdLYA",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 680.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=a3e9d03b-23cf-49b3-89a8-939724ed6ddd (684.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "etag": "W/\"14e-zC5ckaIW/jfSNcFBYe90v1D8PXc\"",
    "date": "Tue, 27 May 2025 23:54:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
      "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:22.348Z",
      "attachments": null,
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    }
  ]
}
```

**⏱️ Duration:** 684.9 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/3e3001ad-88b1-4845-922b-fdeacd75b05d/details (572.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "etag": "W/\"14c-UgYldoDPLyuX2HoM/SOvBtGGFQ4\"",
    "date": "Tue, 27 May 2025 23:54:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:22.348Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 572.0 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/3e3001ad-88b1-4845-922b-fdeacd75b05d/details (586.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "etag": "W/\"14c-UgYldoDPLyuX2HoM/SOvBtGGFQ4\"",
    "date": "Tue, 27 May 2025 23:54:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:22.348Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 586.6 ms  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1026.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "0y7Xdnto62RQkwy72A8dwx8t7Da2"
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
    "etag": "W/\"15a-mJk+J7W9KQOjtpIkF2Ce5MIPwik\"",
    "date": "Tue, 27 May 2025 23:54:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2528cbaa-7ebc-4f9f-a031-864a8fead5b8",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:54:34.583Z",
    "lastMessageAt": "2025-05-27T23:54:34.583Z",
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "0y7Xdnto62RQkwy72A8dwx8t7Da2"
    ]
  }
}
```

**⏱️ Duration:** 1026.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (928.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "2528cbaa-7ebc-4f9f-a031-864a8fead5b8",
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
    "etag": "W/\"13d-zapVtHxFDGaafCuDW+BMBs1+LqA\"",
    "date": "Tue, 27 May 2025 23:54:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "cfeab3de-a81a-42b5-937c-245ecfe4ca35",
    "conversationId": "2528cbaa-7ebc-4f9f-a031-864a8fead5b8",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:35.809Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 928.1 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/cfeab3de-a81a-42b5-937c-245ecfe4ca35/details (468.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM5MDA1NCwidXNlcl9pZCI6Ik9rUHpsWkxBSHZRTlpDdFhYZ1VsMlZ5bExVdDEiLCJzdWIiOiJPa1B6bFpMQUh2UU5aQ3RYWGdVbDJWeWxMVXQxIiwiaWF0IjoxNzQ4MzkwMDU0LCJleHAiOjE3NDgzOTM2NTQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzOTAwNTM1OThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDgzOTAwNTM1OThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OPh94gsVzc7Hz-uQi94M5qjwApvNm1q0xgrsJiGJ31_QH4UWd3Qu34orv9t9-h-lUCvkBmAXbWZpCTZRXpoAvs1SAuJn0au5FMG5iri7SxWsiSbN7AAjDqF20dHsbsKDZqWQ1ewaAwixoNOBCEMqDkb60ccNlK2mHHGPN1W-cgxTnoLwD44EmHNAas8UgkgWriVdijxAze-PN9U2lq_87qoyDEmbk6oBJDq0ZGYn-i6Uo4j3XtaWYaKv5cw8VeyvVbqwHP804ZSs2w4fBdsDusYLmDszsWN0KwCiDD6csd-vGuBBAhLSU42DSEBSBbbxHa09mJg77PZ72X9f0FdLYA",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 468.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ✅ PASSED  
**Duration:** 1.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (851.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM5MDA1MywidXNlcl9pZCI6IjB5N1hkbnRvNjJSUWt3eTcyQThkd3g4dDdEYTIiLCJzdWIiOiIweTdYZG50bzYyUlFrd3k3MkE4ZHd4OHQ3RGEyIiwiaWF0IjoxNzQ4MzkwMDUzLCJleHAiOjE3NDgzOTM2NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4MzkwMDUyMjc3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM5MDA1MjI3N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HMygDVwrCYB3_iEo1Sr8CFfBV6GllFN-YlGE1SuWlOx8TuqyQm5mwo2nHrWpPEIFYBKnielJdso8HlrLRrzJi6qrZRfuesBiVummWNy6eaIdqUsj1yHJkoY5HKZJl0c0ywAVPz1hYKxZzbQofhpgFf2iXa0Hsrnge6l7fWGCqNL4kAXSYeW85gZnNkrRsKTyaQNX--yUBQAUZkeAPRL-e95S0KN1MfTiPpqohlTbMDiqy9YLsSqI5Rh1IMULs6300jg4Bvilhi45hK1npropbq641T0tDrhtNg12TOOEjyJP-Qa286Av074seo7rPdGJWBm5CDrEDBMcn6VuBe8v-g",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
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
    "etag": "W/\"14d-RW8wIuPNByp8gjryc27ncS+VoSs\"",
    "date": "Tue, 27 May 2025 23:54:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "12e82c3d-5282-450c-b77f-4a27d4ae630b",
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
    "senderId": "0y7Xdnto62RQkwy72A8dwx8t7Da2",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:37.135Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 851.1 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/12e82c3d-5282-450c-b77f-4a27d4ae630b (955.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 955.7 ms  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (875.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM5MDA1MywidXNlcl9pZCI6IjB5N1hkbnRvNjJSUWt3eTcyQThkd3g4dDdEYTIiLCJzdWIiOiIweTdYZG50bzYyUlFrd3k3MkE4ZHd4OHQ3RGEyIiwiaWF0IjoxNzQ4MzkwMDUzLCJleHAiOjE3NDgzOTM2NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4MzkwMDUyMjc3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM5MDA1MjI3N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HMygDVwrCYB3_iEo1Sr8CFfBV6GllFN-YlGE1SuWlOx8TuqyQm5mwo2nHrWpPEIFYBKnielJdso8HlrLRrzJi6qrZRfuesBiVummWNy6eaIdqUsj1yHJkoY5HKZJl0c0ywAVPz1hYKxZzbQofhpgFf2iXa0Hsrnge6l7fWGCqNL4kAXSYeW85gZnNkrRsKTyaQNX--yUBQAUZkeAPRL-e95S0KN1MfTiPpqohlTbMDiqy9YLsSqI5Rh1IMULs6300jg4Bvilhi45hK1npropbq641T0tDrhtNg12TOOEjyJP-Qa286Av074seo7rPdGJWBm5CDrEDBMcn6VuBe8v-g",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
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
    "etag": "W/\"14c-MGN6R/+6PIe3C7dBeXN0E07PhU8\"",
    "date": "Tue, 27 May 2025 23:54:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "e4e206e0-4c4c-41f4-8248-0031463c95fb",
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
    "senderId": "0y7Xdnto62RQkwy72A8dwx8t7Da2",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:38.976Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 875.2 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/e4e206e0-4c4c-41f4-8248-0031463c95fb (757.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 757.5 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ✅ PASSED  
**Duration:** 1.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (995.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "e58c1486-f1b0-4b11-8ee7-7527d670b7ee",
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
    "etag": "W/\"155-FXFuyDCcR0iEm+z8PjKiEVVZIQE\"",
    "date": "Tue, 27 May 2025 23:54:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "42c38562-7795-4e64-945b-aee940e8c5a5",
    "conversationId": "e58c1486-f1b0-4b11-8ee7-7527d670b7ee",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:40.728Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 995.4 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/42c38562-7795-4e64-945b-aee940e8c5a5 (460.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM5MDA1MywidXNlcl9pZCI6IjB5N1hkbnRvNjJSUWt3eTcyQThkd3g4dDdEYTIiLCJzdWIiOiIweTdYZG50bzYyUlFrd3k3MkE4ZHd4OHQ3RGEyIiwiaWF0IjoxNzQ4MzkwMDUzLCJleHAiOjE3NDgzOTM2NTMsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4MzkwMDUyMjc3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODM5MDA1MjI3N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HMygDVwrCYB3_iEo1Sr8CFfBV6GllFN-YlGE1SuWlOx8TuqyQm5mwo2nHrWpPEIFYBKnielJdso8HlrLRrzJi6qrZRfuesBiVummWNy6eaIdqUsj1yHJkoY5HKZJl0c0ywAVPz1hYKxZzbQofhpgFf2iXa0Hsrnge6l7fWGCqNL4kAXSYeW85gZnNkrRsKTyaQNX--yUBQAUZkeAPRL-e95S0KN1MfTiPpqohlTbMDiqy9YLsSqI5Rh1IMULs6300jg4Bvilhi45hK1npropbq641T0tDrhtNg12TOOEjyJP-Qa286Av074seo7rPdGJWBm5CDrEDBMcn6VuBe8v-g",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 460.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (648.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 648.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (621.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
  },
  "data": {
    "userId": "0y7Xdnto62RQkwy72A8dwx8t7Da2",
    "organizationId": "33100e88-6ec4-463c-b09c-f8775ee63bf2",
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
    "etag": "W/\"fd-Xn/+jBiS4tqDSU1emhabe6TkEtQ\"",
    "date": "Tue, 27 May 2025 23:54:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "acd37d53-91fe-4360-953b-c7cc068ab0e5",
    "userId": "0y7Xdnto62RQkwy72A8dwx8t7Da2",
    "organizationId": "33100e88-6ec4-463c-b09c-f8775ee63bf2",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T23:54:42.527Z",
    "updatedAt": "2025-05-27T23:54:42.527Z"
  }
}
```

**⏱️ Duration:** 621.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/conversations (904.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "33100e88-6ec4-463c-b09c-f8775ee63bf2"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "0y7Xdnto62RQkwy72A8dwx8t7Da2"
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
    "etag": "W/\"144-PquHW99S3G7hiqqlCWhns4S7ABo\"",
    "date": "Tue, 27 May 2025 23:54:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2424c6e4-5492-4748-bab7-568215a2a286",
    "title": "Org2 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-05-27T23:54:43.100Z",
    "lastMessageAt": "2025-05-27T23:54:43.100Z",
    "organizationId": "33100e88-6ec4-463c-b09c-f8775ee63bf2",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "0y7Xdnto62RQkwy72A8dwx8t7Da2"
    ]
  }
}
```

**⏱️ Duration:** 904.5 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/messages (880.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "33100e88-6ec4-463c-b09c-f8775ee63bf2"
  },
  "data": {
    "conversationId": "2424c6e4-5492-4748-bab7-568215a2a286",
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
    "etag": "W/\"147-zpwb//pTKIMHiThKbSMDHoK7eAQ\"",
    "date": "Tue, 27 May 2025 23:54:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7cff349c-cb9e-4594-afd9-10bdba455762",
    "conversationId": "2424c6e4-5492-4748-bab7-568215a2a286",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message in organization 2",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:44.252Z",
    "attachments": null,
    "location": null,
    "organizationId": "33100e88-6ec4-463c-b09c-f8775ee63bf2"
  }
}
```

**⏱️ Duration:** 880.7 ms  

</details>


---

### Test: Should not access messages from different organization
**Status:** ✅ PASSED  
**Duration:** 0.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/3e3001ad-88b1-4845-922b-fdeacd75b05d/details (665.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "33100e88-6ec4-463c-b09c-f8775ee63bf2"
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
    "etag": "W/\"14c-UgYldoDPLyuX2HoM/SOvBtGGFQ4\"",
    "date": "Tue, 27 May 2025 23:54:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:22.348Z",
    "attachments": null,
    "location": null,
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 665.1 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (714.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "etag": "W/\"6b7-Kn6qh/RzgNRcIczWRreRk9YYEqc\"",
    "date": "Tue, 27 May 2025 23:54:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "7cff349c-cb9e-4594-afd9-10bdba455762",
      "conversationId": "2424c6e4-5492-4748-bab7-568215a2a286",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:44.252Z",
      "attachments": null,
      "location": null,
      "organizationId": "33100e88-6ec4-463c-b09c-f8775ee63bf2"
    },
    {
      "id": "42c38562-7795-4e64-945b-aee940e8c5a5",
      "conversationId": "e58c1486-f1b0-4b11-8ee7-7527d670b7ee",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:40.728Z",
      "attachments": null,
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    },
    {
      "id": "cfeab3de-a81a-42b5-937c-245ecfe4ca35",
      "conversationId": "2528cbaa-7ebc-4f9f-a031-864a8fead5b8",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:35.809Z",
      "attachments": null,
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    },
    {
      "id": "004d39cc-3b65-4803-a289-18514d279b66",
      "conversationId": "e58c1486-f1b0-4b11-8ee7-7527d670b7ee",
      "senderId": "0y7Xdnto62RQkwy72A8dwx8t7Da2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:23.692Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    },
    {
      "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
      "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:22.348Z",
      "attachments": null,
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    }
  ]
}
```

**⏱️ Duration:** 714.0 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (564.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "etag": "W/\"6b7-Kn6qh/RzgNRcIczWRreRk9YYEqc\"",
    "date": "Tue, 27 May 2025 23:54:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "7cff349c-cb9e-4594-afd9-10bdba455762",
      "conversationId": "2424c6e4-5492-4748-bab7-568215a2a286",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:44.252Z",
      "attachments": null,
      "location": null,
      "organizationId": "33100e88-6ec4-463c-b09c-f8775ee63bf2"
    },
    {
      "id": "42c38562-7795-4e64-945b-aee940e8c5a5",
      "conversationId": "e58c1486-f1b0-4b11-8ee7-7527d670b7ee",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:40.728Z",
      "attachments": null,
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    },
    {
      "id": "cfeab3de-a81a-42b5-937c-245ecfe4ca35",
      "conversationId": "2528cbaa-7ebc-4f9f-a031-864a8fead5b8",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:35.809Z",
      "attachments": null,
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    },
    {
      "id": "004d39cc-3b65-4803-a289-18514d279b66",
      "conversationId": "e58c1486-f1b0-4b11-8ee7-7527d670b7ee",
      "senderId": "0y7Xdnto62RQkwy72A8dwx8t7Da2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:23.692Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    },
    {
      "id": "3e3001ad-88b1-4845-922b-fdeacd75b05d",
      "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-05-27T23:54:22.348Z",
      "attachments": null,
      "location": null,
      "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
    }
  ]
}
```

**⏱️ Duration:** 564.1 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/a3e9d03b-23cf-49b3-89a8-939724ed6ddd (12.0ms)</summary>

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
    "date": "Tue, 27 May 2025 23:54:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 12.0 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (579.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 579.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (608.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
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
    "date": "Tue, 27 May 2025 23:54:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 608.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 0.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (834.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg",
    "X-Organization-Id": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  },
  "data": {
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
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
    "etag": "W/\"180-f3jYsw8jWRcTq7BMUTkSBZImKfA\"",
    "date": "Tue, 27 May 2025 23:54:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7f80aca3-ca4a-4f74-9f45-c0ece56faae0",
    "conversationId": "a3e9d03b-23cf-49b3-89a8-939724ed6ddd",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-05-27T23:54:48.246Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "73876ab4-ca04-4222-ad19-6b63a3cf9ed0"
  }
}
```

**⏱️ Duration:** 834.9 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/3e3001ad-88b1-4845-922b-fdeacd75b05d (209.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/3e3001ad-88b1-4845-922b-fdeacd75b05d</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 209.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/004d39cc-3b65-4803-a289-18514d279b66 (193.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/004d39cc-3b65-4803-a289-18514d279b66</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 193.0 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/cfeab3de-a81a-42b5-937c-245ecfe4ca35 (193.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/cfeab3de-a81a-42b5-937c-245ecfe4ca35</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 193.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/42c38562-7795-4e64-945b-aee940e8c5a5 (202.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/42c38562-7795-4e64-945b-aee940e8c5a5</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 202.0 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/7cff349c-cb9e-4594-afd9-10bdba455762 (292.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/7cff349c-cb9e-4594-afd9-10bdba455762</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 292.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/messages/7f80aca3-ca4a-4f74-9f45-c0ece56faae0 (252.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/7f80aca3-ca4a-4f74-9f45-c0ece56faae0</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 252.7 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/a3e9d03b-23cf-49b3-89a8-939724ed6ddd (656.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 656.4 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/e58c1486-f1b0-4b11-8ee7-7527d670b7ee (660.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 660.2 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/3fe9419a-36c3-4d7b-a86b-20571a2c027b (670.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 670.2 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/ddd8eba6-fd6b-48c3-a4ee-6a8bedd633c4 (585.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 585.3 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/conversations/2528cbaa-7ebc-4f9f-a031-864a8fead5b8 (617.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 617.1 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/conversations/2424c6e4-5492-4748-bab7-568215a2a286 (565.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 565.6 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/organizations/73876ab4-ca04-4222-ad19-6b63a3cf9ed0 (1425.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1425.8 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/organizations/33100e88-6ec4-463c-b09c-f8775ee63bf2 (1218.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwNDgsImV4cCI6MTc0ODM5MzY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ijprAeI06XqKMF8ZqZjw1n7rbW3gWUh1c4c7fHc8EE0Uz71R1HDvVdrIpmWfF05kTBSWXExhy-UyhPTQsXp7U9Pe0qST80tggANyUfPQKG8Sllxu2XOmrYl4uFt1VvANbBeFGLV-pCI9ZsjIBLm_gGxAFuBqfBvK7dZXi_s45BO8FIZgWBPrWhvj1eRdUZZpFXJc0LvgZzkH_fAHCwAl_OgGAfk86ajSDxmk4q6BLarbh78LAqNW4th_FkoSBxzkOk_7nJ6UFCPXdWOSjl-aJZm2oGYYQCddUb8hQtddcg9qaEMLbLUqMz-ImjxJ7q4iC5bN6o4unUP7bX_rbsoEJg"
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
    "date": "Tue, 27 May 2025 23:54:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1218.3 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (360.1ms)</summary>

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
    "etag": "W/\"640-o8lkhNxC/+d54Oh49lVeZS2BNAA\"",
    "date": "Tue, 27 May 2025 23:54:56 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwOTYsImV4cCI6MTc0ODM5MzY5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hXfyKC_uGmgkKyF2MVUL_8LFCBgh1PGfkiF-kD8LqdYVNWB392nWreRXOHEkCgxfzrV7PB8gl-3Xr4IIk6ukiJcrM_XS7gWyBuqcQwbBPY0JjJXssVY_NQ7Y3padFhvsyE-A3iupO9JXT0uBboYEOY80Ryan4SnKhgXATAXVreadcwhXLAOz6T8iYKqlz0OHsAT8jPDyUBuJQAPTE-1SXzVjBBcgGptIQRUbxTcSP-2s7glS_Vj4xObFQ_hJL0pB5tWOayrYktbyNIYY3_U0xXWCfCRwJBLnYQ1h29Yf7Qeij2hd4-1OKlrpw8vMkpc1e-asm8UYnyZUKhGclrPE9A",
      "refreshToken": "AMf-vBySakbiwulDePBRvvcZPN4OVYGpk9Xvr7GxjuDk4p7MFbsSavaVB0lVb98g3a4tCkQ9fztbHdHL7rxTjGY0ZAsA4DQ1EbfwjRliMB0TRNxU8XLWa9F7YH5ZoJ2bmH4zal0T99A__r6GZNSqH67Kl-RetJd4gZO7k29Vrh-5NUstBnewN_LJRkNlQPAgBUTtXSJqEZfIukDCUoMhmNrW6YgcgM4otH1wzbZUyemA5aO0xPdw9Oq8hwf2v988pcNLvr2pBR1h",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 360.1 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/0y7Xdnto62RQkwy72A8dwx8t7Da2 (1470.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwOTYsImV4cCI6MTc0ODM5MzY5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hXfyKC_uGmgkKyF2MVUL_8LFCBgh1PGfkiF-kD8LqdYVNWB392nWreRXOHEkCgxfzrV7PB8gl-3Xr4IIk6ukiJcrM_XS7gWyBuqcQwbBPY0JjJXssVY_NQ7Y3padFhvsyE-A3iupO9JXT0uBboYEOY80Ryan4SnKhgXATAXVreadcwhXLAOz6T8iYKqlz0OHsAT8jPDyUBuJQAPTE-1SXzVjBBcgGptIQRUbxTcSP-2s7glS_Vj4xObFQ_hJL0pB5tWOayrYktbyNIYY3_U0xXWCfCRwJBLnYQ1h29Yf7Qeij2hd4-1OKlrpw8vMkpc1e-asm8UYnyZUKhGclrPE9A"
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
    "date": "Tue, 27 May 2025 23:54:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1470.0 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (371.2ms)</summary>

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
    "etag": "W/\"640-nMq2iNX8ReKoXbuZcIOtXKpfX5k\"",
    "date": "Tue, 27 May 2025 23:54:58 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwOTgsImV4cCI6MTc0ODM5MzY5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iX7OZEzSeHq2gLWAGGMvzPaZDYz5JU3Yzwjl6PoIZlzGp7hGpS4P0eNIBG5YGV7qOVTRF482kiGOhuLRQySsPj0ih88Eu7iADG-MO5anTESMkcn4nn9rv_xBgmQhSkbp0JsYC93Y51LvOdzQpwxvScm11LH-h52gnf9alsXG5QfxTlynnOyp8OX8A0wbdUdUGUNiXp5IsmhfqzBxE77DesyOFiH22PI7trS1G14H5O3Gi7WiZCdGmKNnMSkiebqgKk21oM0lkbTIUNSvCB0VRQFTRsINewc5HRUF14UuQP2SnczcB3tsW5VaVN_r1ANnAbhjfSxrBinBajSU7dZtyw",
      "refreshToken": "AMf-vBxuOcEeaHiXJVE1fVadZw33u-qiKCkW1I8MZ5gSvZ9qg_SYWty72LNKMewx5v3V1vJjg2cyKqM39PjgNg0G4cw8bTt8c8Dgl9YaEdhiur5bkhv8mLYZqSASnUXVQmNi7ThyYwMm12I-IfrMnJMS7QMsiUij8WanRE1WReNKdYq0qUmHF4TYVtzDlA_4uK2b3sxgrDgT_WKe0YGKGGEvsTelThs53gQBovuT9ibX5Y-tYf5V6sMT9tSM7219T4UBchiMkV12",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 371.2 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/OkPzlZLAHvQNZCtXXgUl2VylLUt1 (1246.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzkwMDk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzOTAwOTgsImV4cCI6MTc0ODM5MzY5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iX7OZEzSeHq2gLWAGGMvzPaZDYz5JU3Yzwjl6PoIZlzGp7hGpS4P0eNIBG5YGV7qOVTRF482kiGOhuLRQySsPj0ih88Eu7iADG-MO5anTESMkcn4nn9rv_xBgmQhSkbp0JsYC93Y51LvOdzQpwxvScm11LH-h52gnf9alsXG5QfxTlynnOyp8OX8A0wbdUdUGUNiXp5IsmhfqzBxE77DesyOFiH22PI7trS1G14H5O3Gi7WiZCdGmKNnMSkiebqgKk21oM0lkbTIUNSvCB0VRQFTRsINewc5HRUF14UuQP2SnczcB3tsW5VaVN_r1ANnAbhjfSxrBinBajSU7dZtyw"
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
    "date": "Tue, 27 May 2025 23:54:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1246.9 ms  

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
