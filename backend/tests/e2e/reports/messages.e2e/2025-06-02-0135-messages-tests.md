# E2E Test Report: messages-tests

**Date:** 6/2/2025  
**Time:** 1:35:53 AM  
**Duration:** 44.07s  
**Tests:** 27 total, 27 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 1.43s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 0.77s | Should create a message with attachments |
| ✅ Should fail to create message without conversation ID | PASSED | 0.59s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.78s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.54s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 1.55s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.95s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.63s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.50s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.60s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.53s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.64s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.56s | Should allow message sender to view their message |
| ✅ Should allow conversation participant to view message | PASSED | 0.64s | Should allow conversation participant to view message |
| ✅ Should fail to view message as non-participant | PASSED | 2.23s | Should fail to view message as non-participant |
| ✅ Should allow message sender to delete their own message | PASSED | 1.51s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.56s | Should allow admin to delete any message |
| ✅ Should fail to delete message as non-sender non-admin | PASSED | 1.22s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.62s | Should fail to delete non-existent message |
| ✅ Should create message in specific organization | PASSED | 2.33s | Should create message in specific organization |
| ✅ Should not access messages from different organization | PASSED | 0.59s | Should not access messages from different organization |
| ✅ Should filter messages by organization | PASSED | 0.62s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.47s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.53s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.51s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 0.84s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 1.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1426.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
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
    "etag": "W/\"14c-tRFy7/Grdme3LeFQe19tkW4vvZI\"",
    "date": "Sun, 01 Jun 2025 23:35:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:19.579Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 1426.4 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (771.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDkxMSwidXNlcl9pZCI6Ikl1VFpqZ2FKaDdROEFrVW5xVWdmYllhQ3VHWTIiLCJzdWIiOiJJdVRaamdhSmg3UThBa1VucVVnZmJZYUN1R1kyIiwiaWF0IjoxNzQ4ODIwOTExLCJleHAiOjE3NDg4MjQ1MTEsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwOTEwNzQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDkxMDc0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUwK9YQY-bQ-B9bmCL0o3fzu1tQBLBHmJd81-hJl1EmVsCLzz0hGbCa6r_Wk9Sq_F1ue-OJlVA4AlcGdJFo3uAIHlSDxPV8Aj0TKPGUEmieqVHSeth2dw-34flDoBo3P3w5hpCAtErqDnqRUelpKlFUln9oAdpyuv4BYMHFQgbdeC62yvfSbzipd9QchjM7JsbGFOoIAByhp7hMX0QYxU4dQN-pU6Xd84nw8MnFla7SAcPhVftzzgWNoSR1SCecPSVe5_D9_Tzq7Fd40HY4ijxZJWP3UkwH_p4x-s2Fg7k9L8KUXmmMyoCd6jHvsx0dWY3R1I0lU0jgrZKDG8XOcCg",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "31df3766-ef2a-4922-bf0d-98647724aeda",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
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
    "etag": "W/\"18c-5rM7oZamZUYGUsUDbgWcKEECY4c\"",
    "date": "Sun, 01 Jun 2025 23:35:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7727fca0-1bff-4c75-a5cf-a4318ace0f5f",
    "conversationId": "31df3766-ef2a-4922-bf0d-98647724aeda",
    "senderId": "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:20.868Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 771.5 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (585.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 585.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.78s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (777.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29"
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
    "date": "Sun, 01 Jun 2025 23:35:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 777.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (539.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 539.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (899.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
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
    "etag": "W/\"147-QLBdtau8I5mEh5tGINt0XJ3bnPg\"",
    "date": "Sun, 01 Jun 2025 23:35:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "fd64e1c8-5644-4781-8a09-d7e3cd48fcdc",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:35:23.367Z",
    "lastMessageAt": "2025-06-01T23:35:23.367Z",
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
    ]
  }
}
```

**⏱️ Duration:** 899.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (654.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDkxMywidXNlcl9pZCI6IjE2VkNlNXJFY0ZRWkx3VWh3UURzQURSeWhBNDIiLCJzdWIiOiIxNlZDZTVyRWNGUVpMd1Vod1FEc0FEUnloQTQyIiwiaWF0IjoxNzQ4ODIwOTEzLCJleHAiOjE3NDg4MjQ1MTMsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA5MTE5NjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA5MTE5NjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Wn0d25ntUrdBDI8YTk48PsXDQGtR6F-kJMo9uQdJ0kHg1YjaNXXz3S2BUGHGmut4Ovagyl_s7TCEIqUsdkJL-bN87SO8v9XhuSiOzlKExzxj0mAqUVYffCTE9D-oKnGPnSm47TMoYeBVjnxTqgE1BVq-cnFCNnw31GpYBypMMY7Aim8z-19cjjt8twtgZslf32arbSbRyX7hqnYDnxTR94koWxajp18VGoR13sDk41OwP9JWsqCdVkzZX2GbgkBwdxK4xxzvoD5MyqqBIxC38mx-QLeKnPX50d9PA9PsfEZoRCYQ_ptjI6J4do-06P6xhNI-owmLEuTGRXcAt0oiKw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "fd64e1c8-5644-4781-8a09-d7e3cd48fcdc",
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
    "date": "Sun, 01 Jun 2025 23:35:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 654.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/560a3b4b-a4c8-49c6-ae88-74911d7f6a29 (948.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "etag": "W/\"14e-KCds5h1s9lA2WcZOAw1slVuf684\"",
    "date": "Sun, 01 Jun 2025 23:35:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
      "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:19.579Z",
      "attachments": null,
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    }
  ]
}
```

**⏱️ Duration:** 948.3 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/992e08d4-a307-4a55-830f-c53ac7e4ded9/details (626.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "etag": "W/\"14c-tRFy7/Grdme3LeFQe19tkW4vvZI\"",
    "date": "Sun, 01 Jun 2025 23:35:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:19.579Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 626.4 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (500.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 500.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (599.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 599.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (889.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
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
    "etag": "W/\"154-JHXOVA+3oKyUGzj9KZ8Xj7q1Wcc\"",
    "date": "Sun, 01 Jun 2025 23:35:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1a75629b-c480-4b18-9e5c-aad16ab05aad",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:35:27.597Z",
    "lastMessageAt": "2025-06-01T23:35:27.597Z",
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
    ]
  }
}
```

**⏱️ Duration:** 889.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/1a75629b-c480-4b18-9e5c-aad16ab05aad (636.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDkxMywidXNlcl9pZCI6IjE2VkNlNXJFY0ZRWkx3VWh3UURzQURSeWhBNDIiLCJzdWIiOiIxNlZDZTVyRWNGUVpMd1Vod1FEc0FEUnloQTQyIiwiaWF0IjoxNzQ4ODIwOTEzLCJleHAiOjE3NDg4MjQ1MTMsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA5MTE5NjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA5MTE5NjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Wn0d25ntUrdBDI8YTk48PsXDQGtR6F-kJMo9uQdJ0kHg1YjaNXXz3S2BUGHGmut4Ovagyl_s7TCEIqUsdkJL-bN87SO8v9XhuSiOzlKExzxj0mAqUVYffCTE9D-oKnGPnSm47TMoYeBVjnxTqgE1BVq-cnFCNnw31GpYBypMMY7Aim8z-19cjjt8twtgZslf32arbSbRyX7hqnYDnxTR94koWxajp18VGoR13sDk41OwP9JWsqCdVkzZX2GbgkBwdxK4xxzvoD5MyqqBIxC38mx-QLeKnPX50d9PA9PsfEZoRCYQ_ptjI6J4do-06P6xhNI-owmLEuTGRXcAt0oiKw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 636.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=560a3b4b-a4c8-49c6-ae88-74911d7f6a29 (643.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "etag": "W/\"14e-KCds5h1s9lA2WcZOAw1slVuf684\"",
    "date": "Sun, 01 Jun 2025 23:35:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
      "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:19.579Z",
      "attachments": null,
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    }
  ]
}
```

**⏱️ Duration:** 643.7 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/992e08d4-a307-4a55-830f-c53ac7e4ded9/details (562.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "etag": "W/\"14c-tRFy7/Grdme3LeFQe19tkW4vvZI\"",
    "date": "Sun, 01 Jun 2025 23:35:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:19.579Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 562.0 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/992e08d4-a307-4a55-830f-c53ac7e4ded9/details (636.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "etag": "W/\"14c-tRFy7/Grdme3LeFQe19tkW4vvZI\"",
    "date": "Sun, 01 Jun 2025 23:35:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:19.579Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 636.1 ms  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.23s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (911.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
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
    "etag": "W/\"15a-zGZNgWPml22wCqFS71774bQkz5w\"",
    "date": "Sun, 01 Jun 2025 23:35:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "23b4af3e-e481-4f6e-b010-4dc286aab192",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:35:30.998Z",
    "lastMessageAt": "2025-06-01T23:35:30.998Z",
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
    ]
  }
}
```

**⏱️ Duration:** 911.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (862.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "23b4af3e-e481-4f6e-b010-4dc286aab192",
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
    "etag": "W/\"13d-P+pDmTAmYbFDYHNje5+oO6qoAqI\"",
    "date": "Sun, 01 Jun 2025 23:35:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "573d0ae5-6d7d-4d81-96a6-40b5704c7183",
    "conversationId": "23b4af3e-e481-4f6e-b010-4dc286aab192",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:32.176Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 862.2 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/573d0ae5-6d7d-4d81-96a6-40b5704c7183/details (449.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDkxMywidXNlcl9pZCI6IjE2VkNlNXJFY0ZRWkx3VWh3UURzQURSeWhBNDIiLCJzdWIiOiIxNlZDZTVyRWNGUVpMd1Vod1FEc0FEUnloQTQyIiwiaWF0IjoxNzQ4ODIwOTEzLCJleHAiOjE3NDg4MjQ1MTMsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA5MTE5NjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjA5MTE5NjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Wn0d25ntUrdBDI8YTk48PsXDQGtR6F-kJMo9uQdJ0kHg1YjaNXXz3S2BUGHGmut4Ovagyl_s7TCEIqUsdkJL-bN87SO8v9XhuSiOzlKExzxj0mAqUVYffCTE9D-oKnGPnSm47TMoYeBVjnxTqgE1BVq-cnFCNnw31GpYBypMMY7Aim8z-19cjjt8twtgZslf32arbSbRyX7hqnYDnxTR94koWxajp18VGoR13sDk41OwP9JWsqCdVkzZX2GbgkBwdxK4xxzvoD5MyqqBIxC38mx-QLeKnPX50d9PA9PsfEZoRCYQ_ptjI6J4do-06P6xhNI-owmLEuTGRXcAt0oiKw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 449.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ✅ PASSED  
**Duration:** 1.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (822.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDkxMSwidXNlcl9pZCI6Ikl1VFpqZ2FKaDdROEFrVW5xVWdmYllhQ3VHWTIiLCJzdWIiOiJJdVRaamdhSmg3UThBa1VucVVnZmJZYUN1R1kyIiwiaWF0IjoxNzQ4ODIwOTExLCJleHAiOjE3NDg4MjQ1MTEsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwOTEwNzQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDkxMDc0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUwK9YQY-bQ-B9bmCL0o3fzu1tQBLBHmJd81-hJl1EmVsCLzz0hGbCa6r_Wk9Sq_F1ue-OJlVA4AlcGdJFo3uAIHlSDxPV8Aj0TKPGUEmieqVHSeth2dw-34flDoBo3P3w5hpCAtErqDnqRUelpKlFUln9oAdpyuv4BYMHFQgbdeC62yvfSbzipd9QchjM7JsbGFOoIAByhp7hMX0QYxU4dQN-pU6Xd84nw8MnFla7SAcPhVftzzgWNoSR1SCecPSVe5_D9_Tzq7Fd40HY4ijxZJWP3UkwH_p4x-s2Fg7k9L8KUXmmMyoCd6jHvsx0dWY3R1I0lU0jgrZKDG8XOcCg",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
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
    "etag": "W/\"14d-jHCFl2HufSPWI0hfybY92imTWEo\"",
    "date": "Sun, 01 Jun 2025 23:35:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a36b6dd1-7ba7-4ac7-8d06-567d2d7cc765",
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
    "senderId": "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:33.453Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 822.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/a36b6dd1-7ba7-4ac7-8d06-567d2d7cc765 (681.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 681.3 ms  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (918.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDkxMSwidXNlcl9pZCI6Ikl1VFpqZ2FKaDdROEFrVW5xVWdmYllhQ3VHWTIiLCJzdWIiOiJJdVRaamdhSmg3UThBa1VucVVnZmJZYUN1R1kyIiwiaWF0IjoxNzQ4ODIwOTExLCJleHAiOjE3NDg4MjQ1MTEsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwOTEwNzQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDkxMDc0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUwK9YQY-bQ-B9bmCL0o3fzu1tQBLBHmJd81-hJl1EmVsCLzz0hGbCa6r_Wk9Sq_F1ue-OJlVA4AlcGdJFo3uAIHlSDxPV8Aj0TKPGUEmieqVHSeth2dw-34flDoBo3P3w5hpCAtErqDnqRUelpKlFUln9oAdpyuv4BYMHFQgbdeC62yvfSbzipd9QchjM7JsbGFOoIAByhp7hMX0QYxU4dQN-pU6Xd84nw8MnFla7SAcPhVftzzgWNoSR1SCecPSVe5_D9_Tzq7Fd40HY4ijxZJWP3UkwH_p4x-s2Fg7k9L8KUXmmMyoCd6jHvsx0dWY3R1I0lU0jgrZKDG8XOcCg",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
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
    "etag": "W/\"14c-tWDsSa1Mv4XZrbw2yrcYKyJCijk\"",
    "date": "Sun, 01 Jun 2025 23:35:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "26b31b69-9ae7-402f-9d53-cc72ac1fbcef",
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
    "senderId": "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:35.004Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 918.1 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/26b31b69-9ae7-402f-9d53-cc72ac1fbcef (637.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 637.8 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ✅ PASSED  
**Duration:** 1.22s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (798.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "31df3766-ef2a-4922-bf0d-98647724aeda",
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
    "etag": "W/\"155-HF8tMCcKowoboSEi5kAKfqmA07g\"",
    "date": "Sun, 01 Jun 2025 23:35:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "01fef0af-fd17-41de-84c3-40899a8ff736",
    "conversationId": "31df3766-ef2a-4922-bf0d-98647724aeda",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:36.498Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 798.9 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/01fef0af-fd17-41de-84c3-40899a8ff736 (422.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDkxMSwidXNlcl9pZCI6Ikl1VFpqZ2FKaDdROEFrVW5xVWdmYllhQ3VHWTIiLCJzdWIiOiJJdVRaamdhSmg3UThBa1VucVVnZmJZYUN1R1kyIiwiaWF0IjoxNzQ4ODIwOTExLCJleHAiOjE3NDg4MjQ1MTEsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIwOTEwNzQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMDkxMDc0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUwK9YQY-bQ-B9bmCL0o3fzu1tQBLBHmJd81-hJl1EmVsCLzz0hGbCa6r_Wk9Sq_F1ue-OJlVA4AlcGdJFo3uAIHlSDxPV8Aj0TKPGUEmieqVHSeth2dw-34flDoBo3P3w5hpCAtErqDnqRUelpKlFUln9oAdpyuv4BYMHFQgbdeC62yvfSbzipd9QchjM7JsbGFOoIAByhp7hMX0QYxU4dQN-pU6Xd84nw8MnFla7SAcPhVftzzgWNoSR1SCecPSVe5_D9_Tzq7Fd40HY4ijxZJWP3UkwH_p4x-s2Fg7k9L8KUXmmMyoCd6jHvsx0dWY3R1I0lU0jgrZKDG8XOcCg",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 422.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (618.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 618.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.33s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (522.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
  },
  "data": {
    "userId": "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2",
    "organizationId": "0e5f3ba5-be36-4c5a-9de1-407021215154",
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
    "etag": "W/\"fd-pLIMu4yhEh+VHkHil3b1P6kr5r4\"",
    "date": "Sun, 01 Jun 2025 23:35:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "83184c85-a7dc-4487-a3ce-f0e3c717a05c",
    "userId": "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2",
    "organizationId": "0e5f3ba5-be36-4c5a-9de1-407021215154",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:35:38.136Z",
    "updatedAt": "2025-06-01T23:35:38.136Z"
  }
}
```

**⏱️ Duration:** 522.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/conversations (972.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "0e5f3ba5-be36-4c5a-9de1-407021215154"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
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
    "etag": "W/\"144-AB9WgZZ3b0KfLzy2QHKp6d7DdFs\"",
    "date": "Sun, 01 Jun 2025 23:35:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "81707e9d-a7dd-4208-a604-d37ed4438993",
    "title": "Org2 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-01T23:35:38.728Z",
    "lastMessageAt": "2025-06-01T23:35:38.728Z",
    "organizationId": "0e5f3ba5-be36-4c5a-9de1-407021215154",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2"
    ]
  }
}
```

**⏱️ Duration:** 972.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/messages (826.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "0e5f3ba5-be36-4c5a-9de1-407021215154"
  },
  "data": {
    "conversationId": "81707e9d-a7dd-4208-a604-d37ed4438993",
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
    "etag": "W/\"147-8MHypM83MZZtz26GwZsP8DLnkn0\"",
    "date": "Sun, 01 Jun 2025 23:35:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f5b6f13d-49e6-49d0-b938-f0d4d30e35a5",
    "conversationId": "81707e9d-a7dd-4208-a604-d37ed4438993",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message in organization 2",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:39.874Z",
    "attachments": null,
    "location": null,
    "organizationId": "0e5f3ba5-be36-4c5a-9de1-407021215154"
  }
}
```

**⏱️ Duration:** 826.8 ms  

</details>


---

### Test: Should not access messages from different organization
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/992e08d4-a307-4a55-830f-c53ac7e4ded9/details (587.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "0e5f3ba5-be36-4c5a-9de1-407021215154"
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
    "etag": "W/\"14c-tRFy7/Grdme3LeFQe19tkW4vvZI\"",
    "date": "Sun, 01 Jun 2025 23:35:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:19.579Z",
    "attachments": null,
    "location": null,
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 587.8 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (615.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "etag": "W/\"6b7-oWiPQEy4fo2wVW7optNB3rOTt6w\"",
    "date": "Sun, 01 Jun 2025 23:35:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "f5b6f13d-49e6-49d0-b938-f0d4d30e35a5",
      "conversationId": "81707e9d-a7dd-4208-a604-d37ed4438993",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:39.874Z",
      "attachments": null,
      "location": null,
      "organizationId": "0e5f3ba5-be36-4c5a-9de1-407021215154"
    },
    {
      "id": "01fef0af-fd17-41de-84c3-40899a8ff736",
      "conversationId": "31df3766-ef2a-4922-bf0d-98647724aeda",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:36.498Z",
      "attachments": null,
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    },
    {
      "id": "573d0ae5-6d7d-4d81-96a6-40b5704c7183",
      "conversationId": "23b4af3e-e481-4f6e-b010-4dc286aab192",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:32.176Z",
      "attachments": null,
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    },
    {
      "id": "7727fca0-1bff-4c75-a5cf-a4318ace0f5f",
      "conversationId": "31df3766-ef2a-4922-bf0d-98647724aeda",
      "senderId": "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:20.868Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    },
    {
      "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
      "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:19.579Z",
      "attachments": null,
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    }
  ]
}
```

**⏱️ Duration:** 615.3 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (472.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "etag": "W/\"6b7-oWiPQEy4fo2wVW7optNB3rOTt6w\"",
    "date": "Sun, 01 Jun 2025 23:35:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "f5b6f13d-49e6-49d0-b938-f0d4d30e35a5",
      "conversationId": "81707e9d-a7dd-4208-a604-d37ed4438993",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:39.874Z",
      "attachments": null,
      "location": null,
      "organizationId": "0e5f3ba5-be36-4c5a-9de1-407021215154"
    },
    {
      "id": "01fef0af-fd17-41de-84c3-40899a8ff736",
      "conversationId": "31df3766-ef2a-4922-bf0d-98647724aeda",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:36.498Z",
      "attachments": null,
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    },
    {
      "id": "573d0ae5-6d7d-4d81-96a6-40b5704c7183",
      "conversationId": "23b4af3e-e481-4f6e-b010-4dc286aab192",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:32.176Z",
      "attachments": null,
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    },
    {
      "id": "7727fca0-1bff-4c75-a5cf-a4318ace0f5f",
      "conversationId": "31df3766-ef2a-4922-bf0d-98647724aeda",
      "senderId": "IuTZjgaJh7Q8AkUnqUgfbYaCuGY2",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:20.868Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    },
    {
      "id": "992e08d4-a307-4a55-830f-c53ac7e4ded9",
      "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-01T23:35:19.579Z",
      "attachments": null,
      "location": null,
      "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
    }
  ]
}
```

**⏱️ Duration:** 472.1 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/560a3b4b-a4c8-49c6-ae88-74911d7f6a29 (7.3ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:35:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 7.3 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (526.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 526.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (511.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
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
    "date": "Sun, 01 Jun 2025 23:35:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 511.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 0.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (839.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw",
    "X-Organization-Id": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  },
  "data": {
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
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
    "etag": "W/\"180-6gMHEmfH5NrAvO+G0M3cX2nzLtg\"",
    "date": "Sun, 01 Jun 2025 23:35:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "06d0c85a-596d-41ca-bb7e-2932de67ac31",
    "conversationId": "560a3b4b-a4c8-49c6-ae88-74911d7f6a29",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-06-01T23:35:43.458Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "588403b9-27e5-4980-838e-e0ccd7d01a3d"
  }
}
```

**⏱️ Duration:** 839.8 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/992e08d4-a307-4a55-830f-c53ac7e4ded9 (201.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/992e08d4-a307-4a55-830f-c53ac7e4ded9</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 201.8 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/7727fca0-1bff-4c75-a5cf-a4318ace0f5f (172.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/7727fca0-1bff-4c75-a5cf-a4318ace0f5f</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 172.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/573d0ae5-6d7d-4d81-96a6-40b5704c7183 (175.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/573d0ae5-6d7d-4d81-96a6-40b5704c7183</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 175.8 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/01fef0af-fd17-41de-84c3-40899a8ff736 (264.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/01fef0af-fd17-41de-84c3-40899a8ff736</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 264.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/f5b6f13d-49e6-49d0-b938-f0d4d30e35a5 (201.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/f5b6f13d-49e6-49d0-b938-f0d4d30e35a5</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 201.3 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/messages/06d0c85a-596d-41ca-bb7e-2932de67ac31 (173.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/06d0c85a-596d-41ca-bb7e-2932de67ac31</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 173.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/560a3b4b-a4c8-49c6-ae88-74911d7f6a29 (701.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 701.1 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/31df3766-ef2a-4922-bf0d-98647724aeda (577.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 577.8 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/fd64e1c8-5644-4781-8a09-d7e3cd48fcdc (591.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 591.7 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/1a75629b-c480-4b18-9e5c-aad16ab05aad (527.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 527.5 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/conversations/23b4af3e-e481-4f6e-b010-4dc286aab192 (644.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 644.9 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/conversations/81707e9d-a7dd-4208-a604-d37ed4438993 (666.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 666.5 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/organizations/588403b9-27e5-4980-838e-e0ccd7d01a3d (1099.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1099.4 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/organizations/0e5f3ba5-be36-4c5a-9de1-407021215154 (1103.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5MDksImV4cCI6MTc0ODgyNDUwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lNU6dcZtG7KtTjMQ0tUwYe8gh1YRDyDY3M3tGRXC1-N7RNSYtG2LrIOm7YiCWxWD4CKvo5jRXrN4KO2V951sOoSuzYGHkpkPtHMR5DFz7iileDyS3L2G00bwL-Wg6PKLqpz4e9HGVT0gbOk8Q4G5v0YOUA8IynLFdhdWD2Bb1CgSxjeaGTwNsBMp6fXfsMyv41X5gnrNhY4_OyYvpPHJODfnFmgk3qGYkzaLpAhaGQyW7L5-mX8Q-0DHS84DfWj6ZrwiydmyKa6xwXujiLVnzYNiLHRn_WkdrUdY_MT3CMv0NUT7VXDSqdczQFdTqfsclJ2hwDkKwFbm4fcUQ6OIbw"
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
    "date": "Sun, 01 Jun 2025 23:35:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1103.3 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (246.5ms)</summary>

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
    "etag": "W/\"640-L3X9tGfPDXeAYNVMuR7fxVSueWw\"",
    "date": "Sun, 01 Jun 2025 23:35:50 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTAsImV4cCI6MTc0ODgyNDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MnKBRaudYtNIbK5vyB5HcRyKQ_KVTkZgFvl-Up3tte58xrmDop81k-oE7FMKoZmUNhJTcK6_uu9nHWRy23Jq6vo97vsFyUjwcuiMtqr0XX2hXlUKMIotVM9jzpAfNHxstmaurKHbfLRtjOM8MP0upBhEGew2FGk5cd6sAdtaHZ-08YH98MAdfTRtPSpU-tnMxYH8hLw6uDACPHjtOq5dQo9GZOgZx-fgfvAkJ506G9zZYgldyAkDbqNGSvo0OTtknZsnZKOy33YvrpebMUxQDEn5NAEhvafcaqqEITsPx6z7SrtR45_47W59D9bQn76V_7EUGvK5yMHNtjLT9jfptA",
      "refreshToken": "AMf-vBz8GR7C0LTqVTUHkbR-fRo7XbKMg0INxatjozZAixM4UL3YWHAintfUxY9inLckKU_WS6U51bpIOEpIVQPUqvDimTZ8k2J58ttIrLrpAnIQwMHo6z7QQcKbKlh5_fhtTDEC9chonZxZgZYdoSmy1HfKd4cGanDQq7JLQC5GVtHuQi1yh2m_draJHetibp0DqzZJ0I7UShndqYjUVQ1qH_KZudA6jr72gF9HqFyaXGcS4ci9Yv5_eh3_lRaO1s2I6W824HuI",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 246.5 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/IuTZjgaJh7Q8AkUnqUgfbYaCuGY2 (1033.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTAsImV4cCI6MTc0ODgyNDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MnKBRaudYtNIbK5vyB5HcRyKQ_KVTkZgFvl-Up3tte58xrmDop81k-oE7FMKoZmUNhJTcK6_uu9nHWRy23Jq6vo97vsFyUjwcuiMtqr0XX2hXlUKMIotVM9jzpAfNHxstmaurKHbfLRtjOM8MP0upBhEGew2FGk5cd6sAdtaHZ-08YH98MAdfTRtPSpU-tnMxYH8hLw6uDACPHjtOq5dQo9GZOgZx-fgfvAkJ506G9zZYgldyAkDbqNGSvo0OTtknZsnZKOy33YvrpebMUxQDEn5NAEhvafcaqqEITsPx6z7SrtR45_47W59D9bQn76V_7EUGvK5yMHNtjLT9jfptA"
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
    "date": "Sun, 01 Jun 2025 23:35:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1033.6 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (354.6ms)</summary>

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
    "etag": "W/\"640-BbYqGMkjsmwC17WSOKllDX2plEE\"",
    "date": "Sun, 01 Jun 2025 23:35:52 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTUyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTIsImV4cCI6MTc0ODgyNDU1MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kWLH5LTPOWgtvAwdWCiUp4D1LRUXEHHDMTIALRweMtGa7lW0r6sHLsbVciraveuh7X77xl1ixyQKsBeKy7_iX1nfnZVhUoh0_ew2G_Rt7CluVWMXJ1HR3P7n5PL7CknPqiGzjacxXg_w2pGvrfpIgE-CtcFQMPK_66jzuFjhMnDsRSY6AErohTshNIjLdpTHbZ5_glAMszPjrckSrF5D-DRhvHzncTvfo9ptIZUv-J7oSomqzn2zwZRAtAK8T0IIbR1oLgujP7JZM87Wm50-77Ag2wNibi0wrbHI4GBRuoOo3AlwNBUWRVgfLYE9nbJToFH3DV_3Dy4yr5KP2HpAcA",
      "refreshToken": "AMf-vBzE8nuMOIwVjtJxN0b3yi5J0H4gFzrzujixMinnsIyopZzA5En3CZqxDFE3EjbcyJ2TydIllqfR_1KtwlzoP-1MvEk6UUYgUtO0_xLkE70BS4hQtLIiJ--SLLi0AHJS0vV1ArDMr_OgPla4wUhXrWgH-XadsYBCwAO9HjV5jurgPYeUTxWDDtChBq1OvCehFLXRSFYU8LMqTv8kE6b4WcBVgrcOwE0tnnnt09VXhtxaQliB9ko4mrJpfHkxVw8rXaeycbuc",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 354.6 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/16VCe5rEcFQZLwUhwQDsADRyhA42 (1071.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTUyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5NTIsImV4cCI6MTc0ODgyNDU1MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kWLH5LTPOWgtvAwdWCiUp4D1LRUXEHHDMTIALRweMtGa7lW0r6sHLsbVciraveuh7X77xl1ixyQKsBeKy7_iX1nfnZVhUoh0_ew2G_Rt7CluVWMXJ1HR3P7n5PL7CknPqiGzjacxXg_w2pGvrfpIgE-CtcFQMPK_66jzuFjhMnDsRSY6AErohTshNIjLdpTHbZ5_glAMszPjrckSrF5D-DRhvHzncTvfo9ptIZUv-J7oSomqzn2zwZRAtAK8T0IIbR1oLgujP7JZM87Wm50-77Ag2wNibi0wrbHI4GBRuoOo3AlwNBUWRVgfLYE9nbJToFH3DV_3Dy4yr5KP2HpAcA"
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
    "date": "Sun, 01 Jun 2025 23:35:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1071.8 ms  

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
