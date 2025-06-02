# E2E Test Report: messages-tests

**Date:** 6/2/2025  
**Time:** 2:02:27 AM  
**Duration:** 47.09s  
**Tests:** 27 total, 27 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Should create a message with valid content | PASSED | 1.59s | Should create a message with valid content |
| ✅ Should create a message with attachments | PASSED | 0.83s | Should create a message with attachments |
| ✅ Should fail to create message without conversation ID | PASSED | 0.88s | Should fail to create message without conversation ID |
| ✅ Should fail to create message without content or attachments | PASSED | 0.78s | Should fail to create message without content or attachments |
| ✅ Should fail to create message in non-existent conversation | PASSED | 0.65s | Should fail to create message in non-existent conversation |
| ✅ Should fail to create message as non-participant | PASSED | 1.83s | Should fail to create message as non-participant |
| ✅ Should get messages by conversation ID | PASSED | 0.86s | Should get messages by conversation ID |
| ✅ Should get message by ID | PASSED | 0.61s | Should get message by ID |
| ✅ Should fail to get message by invalid ID format | PASSED | 0.65s | Should fail to get message by invalid ID format |
| ✅ Should fail to get non-existent message | PASSED | 0.58s | Should fail to get non-existent message |
| ✅ Should fail to get messages from conversation as non-participant | PASSED | 1.84s | Should fail to get messages from conversation as non-participant |
| ✅ Should get messages with filters (admin) | PASSED | 0.69s | Should get messages with filters (admin) |
| ✅ Should allow message sender to view their message | PASSED | 0.73s | Should allow message sender to view their message |
| ✅ Should allow conversation participant to view message | PASSED | 0.59s | Should allow conversation participant to view message |
| ✅ Should fail to view message as non-participant | PASSED | 2.57s | Should fail to view message as non-participant |
| ✅ Should allow message sender to delete their own message | PASSED | 1.57s | Should allow message sender to delete their own message |
| ✅ Should allow admin to delete any message | PASSED | 1.48s | Should allow admin to delete any message |
| ✅ Should fail to delete message as non-sender non-admin | PASSED | 1.56s | Should fail to delete message as non-sender non-admin |
| ✅ Should fail to delete non-existent message | PASSED | 0.58s | Should fail to delete non-existent message |
| ✅ Should create message in specific organization | PASSED | 2.67s | Should create message in specific organization |
| ✅ Should not access messages from different organization | PASSED | 0.65s | Should not access messages from different organization |
| ✅ Should filter messages by organization | PASSED | 0.65s | Should filter messages by organization |
| ✅ Super admin should access messages across organizations | PASSED | 0.56s | Super admin should access messages across organizations |
| ✅ Should handle unauthorized access | PASSED | 0.01s | Should handle unauthorized access |
| ✅ Should handle malformed message data | PASSED | 0.56s | Should handle malformed message data |
| ✅ Should handle invalid message ID format in deletion | PASSED | 0.61s | Should handle invalid message ID format in deletion |
| ✅ Should handle message creation with location data | PASSED | 0.87s | Should handle message creation with location data |


---

## Detailed Execution Log

### Test: Should create a message with valid content
**Status:** ✅ PASSED  
**Duration:** 1.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (1591.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
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
    "etag": "W/\"14c-eVBGs9V+jAcNSdC+wXl7cPpQYO0\"",
    "date": "Mon, 02 Jun 2025 00:01:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-02T00:01:50.303Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 1591.4 ms  

</details>


---

### Test: Should create a message with attachments
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (827.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjUwMiwidXNlcl9pZCI6InJuUU5SeVhEWm9jaXZlWWg0Mk5uU0ZEQWJMSDMiLCJzdWIiOiJyblFOUnlYRFpvY2l2ZVloNDJOblNGREFiTEgzIiwiaWF0IjoxNzQ4ODIyNTAyLCJleHAiOjE3NDg4MjYxMDIsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIyNTAxNzM4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMjUwMTczOEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.B4UTBYWb99qY2ac88NPxZZh2hXnR4atvkDcNIkTxrUteazGWptykQuJBcnA9LooOjNop_4JTL_LrEJcyDGgxaW14_ACf_-WCRj079l_oAtnJzvTDgsnkarPo8Bct7puwAPj_gC4BC1kvQzP8WkDeNxdHIrF05NL1V1j9i4rNE2YrpyI74jgZikkIY7JU4DNvgRHWERvSsoc9hgy4rIFnrkcYjW_iyLaIKnQrwBslR0gLqbwSlph1gJ9mvfk4emKOskwJSMIreLUxHFdB7UWuyyNnNKBZ0n6vCFcu2b_ciymJEyqbtQ010lEhL3P3aATVY4N9t_wvNtCxwqsKKeGlpg",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "5eca42d7-ca24-462f-8855-a651f5de5c56",
    "content": "Message with attachments",
    "attachments": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "name": "test.jpg"
      }
    ],
    "senderId": "rnQNRyXDZociveYh42NnSFDAbLH3"
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
    "etag": "W/\"18c-gDyN0URNmGEZ3HN7RZim538obZ0\"",
    "date": "Mon, 02 Jun 2025 00:01:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1497c4fe-cd33-4749-9ebc-abe2f7da629a",
    "conversationId": "5eca42d7-ca24-462f-8855-a651f5de5c56",
    "senderId": "rnQNRyXDZociveYh42NnSFDAbLH3",
    "content": "Message with attachments",
    "status": "sent",
    "timestamp": "2025-06-02T00:01:51.841Z",
    "attachments": [
      {
        "url": "https://example.com/image.jpg",
        "name": "test.jpg",
        "type": "image"
      }
    ],
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 827.3 ms  

</details>


---

### Test: Should fail to create message without conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (877.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:01:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 877.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to create message without content or attachments
**Status:** ✅ PASSED  
**Duration:** 0.78s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (781.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157"
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
    "date": "Mon, 02 Jun 2025 00:01:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating message",
    "details": "Message must have content or attachments"
  }
}
```

**⏱️ Duration:** 781.1 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail to create message in non-existent conversation
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (651.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:01:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation not found"
  }
}
```

**⏱️ Duration:** 651.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to create message as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (991.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "rnQNRyXDZociveYh42NnSFDAbLH3"
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
    "etag": "W/\"147-yO0kX4scudQOxZMs4cI1hAF3tlA\"",
    "date": "Mon, 02 Jun 2025 00:01:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4dea0af2-73e6-447d-b2db-0d05c8bcc267",
    "title": "Private Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:01:54.808Z",
    "lastMessageAt": "2025-06-02T00:01:54.808Z",
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "rnQNRyXDZociveYh42NnSFDAbLH3"
    ]
  }
}
```

**⏱️ Duration:** 991.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (838.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjUwNCwidXNlcl9pZCI6IndoZW1Wc0dPc2JjWlI1NkhLM2RwUGJTUGxQTTIiLCJzdWIiOiJ3aGVtVnNHT3NiY1pSNTZISzNkcFBiU1BsUE0yIiwiaWF0IjoxNzQ4ODIyNTA0LCJleHAiOjE3NDg4MjYxMDQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjI1MDMxMDlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjI1MDMxMDlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.YaSJyEiq-I0qrrgsiEon1eJhB_7Lwac-x70hF1t1D2l70qG0g6GjTJYN3i7pVeJ7BIR9l8XijYrtUgqC7yBxKWmjbh-bx2NEcmFcgjZ036NMBm9CgDkcZMDsqnWafQnGaEYG42fBlMHW_r3-NnnOyHWs9PI3jSNjhzMA6TA_-do3S9APTYHHA-de4Zkd37Lh2MTd0TnqXU8Z7N12qaEkbaTk8bUKRcSETFI52crUCKiJghs8YcWb3tL1J5IRPeQ9TDehD83DCwnml-OrVmvKf3FeR6OvC3r5sHOuUSIIovkntm_JKw-rLP1-2oz0P8zgqv8FjXnk3rCwvRkBmqRJcw",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "4dea0af2-73e6-447d-b2db-0d05c8bcc267",
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
    "date": "Mon, 02 Jun 2025 00:01:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to send messages to this conversation"
  }
}
```

**⏱️ Duration:** 838.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages by conversation ID
**Status:** ✅ PASSED  
**Duration:** 0.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/3b050f53-ceb2-4776-8499-f3dc2cbae157 (863.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "etag": "W/\"14e-eEZf/+vrAEyy5BgBb0dM3h5tGv8\"",
    "date": "Mon, 02 Jun 2025 00:01:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
      "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-02T00:01:50.303Z",
      "attachments": null,
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    }
  ]
}
```

**⏱️ Duration:** 863.9 ms  

</details>


---

### Test: Should get message by ID
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/6f96647e-0b87-4ce6-b0b0-2386a6ef1276/details (613.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "etag": "W/\"14c-eVBGs9V+jAcNSdC+wXl7cPpQYO0\"",
    "date": "Mon, 02 Jun 2025 00:01:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-02T00:01:50.303Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 613.6 ms  

</details>


---

### Test: Should fail to get message by invalid ID format
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/invalid-id/details (653.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:01:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 653.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail to get non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000/details (576.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:01:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 576.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail to get messages from conversation as non-participant
**Status:** ✅ PASSED  
**Duration:** 1.84s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1106.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "rnQNRyXDZociveYh42NnSFDAbLH3"
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
    "etag": "W/\"154-RmcFxMUv8Wwj2/HUESbRGCalNGk\"",
    "date": "Mon, 02 Jun 2025 00:01:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a0cdf28d-8697-4c8f-ad09-8f024015dffc",
    "title": "Private Conversation for Messages",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:01:59.468Z",
    "lastMessageAt": "2025-06-02T00:01:59.468Z",
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "rnQNRyXDZociveYh42NnSFDAbLH3"
    ]
  }
}
```

**⏱️ Duration:** 1106.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/messages/a0cdf28d-8697-4c8f-ad09-8f024015dffc (734.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjUwNCwidXNlcl9pZCI6IndoZW1Wc0dPc2JjWlI1NkhLM2RwUGJTUGxQTTIiLCJzdWIiOiJ3aGVtVnNHT3NiY1pSNTZISzNkcFBiU1BsUE0yIiwiaWF0IjoxNzQ4ODIyNTA0LCJleHAiOjE3NDg4MjYxMDQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjI1MDMxMDlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjI1MDMxMDlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.YaSJyEiq-I0qrrgsiEon1eJhB_7Lwac-x70hF1t1D2l70qG0g6GjTJYN3i7pVeJ7BIR9l8XijYrtUgqC7yBxKWmjbh-bx2NEcmFcgjZ036NMBm9CgDkcZMDsqnWafQnGaEYG42fBlMHW_r3-NnnOyHWs9PI3jSNjhzMA6TA_-do3S9APTYHHA-de4Zkd37Lh2MTd0TnqXU8Z7N12qaEkbaTk8bUKRcSETFI52crUCKiJghs8YcWb3tL1J5IRPeQ9TDehD83DCwnml-OrVmvKf3FeR6OvC3r5sHOuUSIIovkntm_JKw-rLP1-2oz0P8zgqv8FjXnk3rCwvRkBmqRJcw",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:02:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Forbidden: You must be a participant to view messages in this conversation"
  }
}
```

**⏱️ Duration:** 734.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should get messages with filters (admin)
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages?conversationId=3b050f53-ceb2-4776-8499-f3dc2cbae157 (692.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "etag": "W/\"14e-eEZf/+vrAEyy5BgBb0dM3h5tGv8\"",
    "date": "Mon, 02 Jun 2025 00:02:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
      "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-02T00:01:50.303Z",
      "attachments": null,
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    }
  ]
}
```

**⏱️ Duration:** 692.1 ms  

</details>


---

### Test: Should allow message sender to view their message
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/6f96647e-0b87-4ce6-b0b0-2386a6ef1276/details (728.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "etag": "W/\"14c-eVBGs9V+jAcNSdC+wXl7cPpQYO0\"",
    "date": "Mon, 02 Jun 2025 00:02:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-02T00:01:50.303Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 728.4 ms  

</details>


---

### Test: Should allow conversation participant to view message
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/6f96647e-0b87-4ce6-b0b0-2386a6ef1276/details (593.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "etag": "W/\"14c-eVBGs9V+jAcNSdC+wXl7cPpQYO0\"",
    "date": "Mon, 02 Jun 2025 00:02:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-02T00:01:50.303Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 593.2 ms  

</details>


---

### Test: Should fail to view message as non-participant
**Status:** ✅ PASSED  
**Duration:** 2.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/conversations (1106.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "rnQNRyXDZociveYh42NnSFDAbLH3"
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
    "etag": "W/\"15a-u2Y2PJ8OTNYHRoGIYjwgwEEmP9E\"",
    "date": "Mon, 02 Jun 2025 00:02:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c702a4e0-6a61-42ed-b1fe-0b42d3f48f90",
    "title": "Private Conversation for Message Access",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:02:03.275Z",
    "lastMessageAt": "2025-06-02T00:02:03.275Z",
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "rnQNRyXDZociveYh42NnSFDAbLH3"
    ]
  }
}
```

**⏱️ Duration:** 1106.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/messages (938.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "c702a4e0-6a61-42ed-b1fe-0b42d3f48f90",
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
    "etag": "W/\"13d-xoCeyqR0FN1zDeg6NTy3P7DC45Y\"",
    "date": "Mon, 02 Jun 2025 00:02:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2b704e60-2d79-4193-89dd-f42c72c69ee7",
    "conversationId": "c702a4e0-6a61-42ed-b1fe-0b42d3f48f90",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Private message",
    "status": "sent",
    "timestamp": "2025-06-02T00:02:04.594Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 938.6 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/admin/messages/2b704e60-2d79-4193-89dd-f42c72c69ee7/details (519.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjUwNCwidXNlcl9pZCI6IndoZW1Wc0dPc2JjWlI1NkhLM2RwUGJTUGxQTTIiLCJzdWIiOiJ3aGVtVnNHT3NiY1pSNTZISzNkcFBiU1BsUE0yIiwiaWF0IjoxNzQ4ODIyNTA0LCJleHAiOjE3NDg4MjYxMDQsImVtYWlsIjoibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjI1MDMxMDlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWVzc2FnZXMtbW9kZXJhdG9yLTE3NDg4MjI1MDMxMDlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.YaSJyEiq-I0qrrgsiEon1eJhB_7Lwac-x70hF1t1D2l70qG0g6GjTJYN3i7pVeJ7BIR9l8XijYrtUgqC7yBxKWmjbh-bx2NEcmFcgjZ036NMBm9CgDkcZMDsqnWafQnGaEYG42fBlMHW_r3-NnnOyHWs9PI3jSNjhzMA6TA_-do3S9APTYHHA-de4Zkd37Lh2MTd0TnqXU8Z7N12qaEkbaTk8bUKRcSETFI52crUCKiJghs8YcWb3tL1J5IRPeQ9TDehD83DCwnml-OrVmvKf3FeR6OvC3r5sHOuUSIIovkntm_JKw-rLP1-2oz0P8zgqv8FjXnk3rCwvRkBmqRJcw",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:02:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 519.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should allow message sender to delete their own message
**Status:** ✅ PASSED  
**Duration:** 1.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (844.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjUwMiwidXNlcl9pZCI6InJuUU5SeVhEWm9jaXZlWWg0Mk5uU0ZEQWJMSDMiLCJzdWIiOiJyblFOUnlYRFpvY2l2ZVloNDJOblNGREFiTEgzIiwiaWF0IjoxNzQ4ODIyNTAyLCJleHAiOjE3NDg4MjYxMDIsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIyNTAxNzM4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMjUwMTczOEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.B4UTBYWb99qY2ac88NPxZZh2hXnR4atvkDcNIkTxrUteazGWptykQuJBcnA9LooOjNop_4JTL_LrEJcyDGgxaW14_ACf_-WCRj079l_oAtnJzvTDgsnkarPo8Bct7puwAPj_gC4BC1kvQzP8WkDeNxdHIrF05NL1V1j9i4rNE2YrpyI74jgZikkIY7JU4DNvgRHWERvSsoc9hgy4rIFnrkcYjW_iyLaIKnQrwBslR0gLqbwSlph1gJ9mvfk4emKOskwJSMIreLUxHFdB7UWuyyNnNKBZ0n6vCFcu2b_ciymJEyqbtQ010lEhL3P3aATVY4N9t_wvNtCxwqsKKeGlpg",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
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
    "etag": "W/\"14d-dXtNrjbvn5x+hGODdUZnEs0xuYg\"",
    "date": "Mon, 02 Jun 2025 00:02:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4249a6fc-9a6a-4d0b-a73d-e3016ec097c5",
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
    "senderId": "rnQNRyXDZociveYh42NnSFDAbLH3",
    "content": "Message to be deleted by sender",
    "status": "sent",
    "timestamp": "2025-06-02T00:02:05.946Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 844.0 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/4249a6fc-9a6a-4d0b-a73d-e3016ec097c5 (723.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:02:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 723.9 ms  

</details>


---

### Test: Should allow admin to delete any message
**Status:** ✅ PASSED  
**Duration:** 1.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (792.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjUwMiwidXNlcl9pZCI6InJuUU5SeVhEWm9jaXZlWWg0Mk5uU0ZEQWJMSDMiLCJzdWIiOiJyblFOUnlYRFpvY2l2ZVloNDJOblNGREFiTEgzIiwiaWF0IjoxNzQ4ODIyNTAyLCJleHAiOjE3NDg4MjYxMDIsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIyNTAxNzM4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMjUwMTczOEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.B4UTBYWb99qY2ac88NPxZZh2hXnR4atvkDcNIkTxrUteazGWptykQuJBcnA9LooOjNop_4JTL_LrEJcyDGgxaW14_ACf_-WCRj079l_oAtnJzvTDgsnkarPo8Bct7puwAPj_gC4BC1kvQzP8WkDeNxdHIrF05NL1V1j9i4rNE2YrpyI74jgZikkIY7JU4DNvgRHWERvSsoc9hgy4rIFnrkcYjW_iyLaIKnQrwBslR0gLqbwSlph1gJ9mvfk4emKOskwJSMIreLUxHFdB7UWuyyNnNKBZ0n6vCFcu2b_ciymJEyqbtQ010lEhL3P3aATVY4N9t_wvNtCxwqsKKeGlpg",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
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
    "etag": "W/\"14c-j63CoyvVwJQxPyJrHrfSc2uQsk4\"",
    "date": "Mon, 02 Jun 2025 00:02:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "242246d8-7d2d-422f-952e-518831520b23",
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
    "senderId": "rnQNRyXDZociveYh42NnSFDAbLH3",
    "content": "Message to be deleted by admin",
    "status": "sent",
    "timestamp": "2025-06-02T00:02:07.510Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 792.6 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/242246d8-7d2d-422f-952e-518831520b23 (685.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:02:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Message deleted successfully"
  }
}
```

**⏱️ Duration:** 685.1 ms  

</details>


---

### Test: Should fail to delete message as non-sender non-admin
**Status:** ✅ PASSED  
**Duration:** 1.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (973.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "5eca42d7-ca24-462f-8855-a651f5de5c56",
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
    "etag": "W/\"155-lnyFAEuc70igZHma2aqJGP1diYQ\"",
    "date": "Mon, 02 Jun 2025 00:02:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8528479b-80fa-4a2c-ade5-5dcf825d9171",
    "conversationId": "5eca42d7-ca24-462f-8855-a651f5de5c56",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message that regular user cannot delete",
    "status": "sent",
    "timestamp": "2025-06-02T00:02:09.171Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 973.7 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/admin/messages/8528479b-80fa-4a2c-ade5-5dcf825d9171 (588.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjUwMiwidXNlcl9pZCI6InJuUU5SeVhEWm9jaXZlWWg0Mk5uU0ZEQWJMSDMiLCJzdWIiOiJyblFOUnlYRFpvY2l2ZVloNDJOblNGREFiTEgzIiwiaWF0IjoxNzQ4ODIyNTAyLCJleHAiOjE3NDg4MjYxMDIsImVtYWlsIjoibWVzc2FnZXMtcmVndWxhci0xNzQ4ODIyNTAxNzM4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lc3NhZ2VzLXJlZ3VsYXItMTc0ODgyMjUwMTczOEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.B4UTBYWb99qY2ac88NPxZZh2hXnR4atvkDcNIkTxrUteazGWptykQuJBcnA9LooOjNop_4JTL_LrEJcyDGgxaW14_ACf_-WCRj079l_oAtnJzvTDgsnkarPo8Bct7puwAPj_gC4BC1kvQzP8WkDeNxdHIrF05NL1V1j9i4rNE2YrpyI74jgZikkIY7JU4DNvgRHWERvSsoc9hgy4rIFnrkcYjW_iyLaIKnQrwBslR0gLqbwSlph1gJ9mvfk4emKOskwJSMIreLUxHFdB7UWuyyNnNKBZ0n6vCFcu2b_ciymJEyqbtQ010lEhL3P3aATVY4N9t_wvNtCxwqsKKeGlpg",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:02:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 588.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should fail to delete non-existent message
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/123e4567-e89b-12d3-a456-426614174000 (578.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:02:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Message not found"
  }
}
```

**⏱️ Duration:** 578.5 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should create message in specific organization
**Status:** ✅ PASSED  
**Duration:** 2.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (715.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
  },
  "data": {
    "userId": "rnQNRyXDZociveYh42NnSFDAbLH3",
    "organizationId": "380686c2-93da-4592-a8e4-c3ea1214a78d",
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
    "etag": "W/\"fd-tcabVQdsfq/YTJCKyryoZlzXhZc\"",
    "date": "Mon, 02 Jun 2025 00:02:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "fa4112e7-bb0a-432f-9fd8-ee9a3123c4da",
    "userId": "rnQNRyXDZociveYh42NnSFDAbLH3",
    "organizationId": "380686c2-93da-4592-a8e4-c3ea1214a78d",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-02T00:02:11.095Z",
    "updatedAt": "2025-06-02T00:02:11.095Z"
  }
}
```

**⏱️ Duration:** 715.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/conversations (1013.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "380686c2-93da-4592-a8e4-c3ea1214a78d"
  },
  "data": {
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "rnQNRyXDZociveYh42NnSFDAbLH3"
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
    "etag": "W/\"144-7fCcOBKU9YV9eZiTdr3MFRH9cwo\"",
    "date": "Mon, 02 Jun 2025 00:02:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "57fbc108-3fc4-4fec-9fcb-d9f3b6e705f2",
    "title": "Org2 Conversation",
    "type": "direct",
    "status": "active",
    "createdAt": "2025-06-02T00:02:11.682Z",
    "lastMessageAt": "2025-06-02T00:02:11.682Z",
    "organizationId": "380686c2-93da-4592-a8e4-c3ea1214a78d",
    "participants": [
      "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "rnQNRyXDZociveYh42NnSFDAbLH3"
    ]
  }
}
```

**⏱️ Duration:** 1013.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/messages (941.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "380686c2-93da-4592-a8e4-c3ea1214a78d"
  },
  "data": {
    "conversationId": "57fbc108-3fc4-4fec-9fcb-d9f3b6e705f2",
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
    "etag": "W/\"147-YMkeIFvglZDuaNemIrXorYk/Y3U\"",
    "date": "Mon, 02 Jun 2025 00:02:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "88f40e6b-ecee-4c8b-88f6-a0b86705d2f0",
    "conversationId": "57fbc108-3fc4-4fec-9fcb-d9f3b6e705f2",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message in organization 2",
    "status": "sent",
    "timestamp": "2025-06-02T00:02:13.013Z",
    "attachments": null,
    "location": null,
    "organizationId": "380686c2-93da-4592-a8e4-c3ea1214a78d"
  }
}
```

**⏱️ Duration:** 941.3 ms  

</details>


---

### Test: Should not access messages from different organization
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages/6f96647e-0b87-4ce6-b0b0-2386a6ef1276/details (645.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "380686c2-93da-4592-a8e4-c3ea1214a78d"
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
    "etag": "W/\"14c-eVBGs9V+jAcNSdC+wXl7cPpQYO0\"",
    "date": "Mon, 02 Jun 2025 00:02:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Hello, this is a test message!",
    "status": "sent",
    "timestamp": "2025-06-02T00:01:50.303Z",
    "attachments": null,
    "location": null,
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 645.0 ms  

</details>


---

### Test: Should filter messages by organization
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (649.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "etag": "W/\"6b7-l0tjmQ10AIsV9n40LrrBrLWmUhk\"",
    "date": "Mon, 02 Jun 2025 00:02:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "88f40e6b-ecee-4c8b-88f6-a0b86705d2f0",
      "conversationId": "57fbc108-3fc4-4fec-9fcb-d9f3b6e705f2",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-02T00:02:13.013Z",
      "attachments": null,
      "location": null,
      "organizationId": "380686c2-93da-4592-a8e4-c3ea1214a78d"
    },
    {
      "id": "8528479b-80fa-4a2c-ade5-5dcf825d9171",
      "conversationId": "5eca42d7-ca24-462f-8855-a651f5de5c56",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-02T00:02:09.171Z",
      "attachments": null,
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    },
    {
      "id": "2b704e60-2d79-4193-89dd-f42c72c69ee7",
      "conversationId": "c702a4e0-6a61-42ed-b1fe-0b42d3f48f90",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-02T00:02:04.594Z",
      "attachments": null,
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    },
    {
      "id": "1497c4fe-cd33-4749-9ebc-abe2f7da629a",
      "conversationId": "5eca42d7-ca24-462f-8855-a651f5de5c56",
      "senderId": "rnQNRyXDZociveYh42NnSFDAbLH3",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-02T00:01:51.841Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    },
    {
      "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
      "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-02T00:01:50.303Z",
      "attachments": null,
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    }
  ]
}
```

**⏱️ Duration:** 649.2 ms  

</details>


---

### Test: Super admin should access messages across organizations
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/messages (562.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "etag": "W/\"6b7-l0tjmQ10AIsV9n40LrrBrLWmUhk\"",
    "date": "Mon, 02 Jun 2025 00:02:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "88f40e6b-ecee-4c8b-88f6-a0b86705d2f0",
      "conversationId": "57fbc108-3fc4-4fec-9fcb-d9f3b6e705f2",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message in organization 2",
      "status": "sent",
      "timestamp": "2025-06-02T00:02:13.013Z",
      "attachments": null,
      "location": null,
      "organizationId": "380686c2-93da-4592-a8e4-c3ea1214a78d"
    },
    {
      "id": "8528479b-80fa-4a2c-ade5-5dcf825d9171",
      "conversationId": "5eca42d7-ca24-462f-8855-a651f5de5c56",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Message that regular user cannot delete",
      "status": "sent",
      "timestamp": "2025-06-02T00:02:09.171Z",
      "attachments": null,
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    },
    {
      "id": "2b704e60-2d79-4193-89dd-f42c72c69ee7",
      "conversationId": "c702a4e0-6a61-42ed-b1fe-0b42d3f48f90",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Private message",
      "status": "sent",
      "timestamp": "2025-06-02T00:02:04.594Z",
      "attachments": null,
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    },
    {
      "id": "1497c4fe-cd33-4749-9ebc-abe2f7da629a",
      "conversationId": "5eca42d7-ca24-462f-8855-a651f5de5c56",
      "senderId": "rnQNRyXDZociveYh42NnSFDAbLH3",
      "content": "Message with attachments",
      "status": "sent",
      "timestamp": "2025-06-02T00:01:51.841Z",
      "attachments": [
        {
          "url": "https://example.com/image.jpg",
          "name": "test.jpg",
          "type": "image"
        }
      ],
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    },
    {
      "id": "6f96647e-0b87-4ce6-b0b0-2386a6ef1276",
      "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
      "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "content": "Hello, this is a test message!",
      "status": "sent",
      "timestamp": "2025-06-02T00:01:50.303Z",
      "attachments": null,
      "location": null,
      "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
    }
  ]
}
```

**⏱️ Duration:** 562.0 ms  

</details>


---

### Test: Should handle unauthorized access
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/messages/3b050f53-ceb2-4776-8499-f3dc2cbae157 (6.6ms)</summary>

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
    "date": "Mon, 02 Jun 2025 00:02:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 6.6 ms  
**❌ Error:** Request failed with status code 401  

</details>


---

### Test: Should handle malformed message data
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (556.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:02:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Conversation ID is required"
  }
}
```

**⏱️ Duration:** 556.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle invalid message ID format in deletion
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/admin/messages/invalid-id (610.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
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
    "date": "Mon, 02 Jun 2025 00:02:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid message ID format"
  }
}
```

**⏱️ Duration:** 610.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should handle message creation with location data
**Status:** ✅ PASSED  
**Duration:** 0.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/messages (872.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA",
    "X-Organization-Id": "071719cf-524d-4227-bb13-fd5e399659eb"
  },
  "data": {
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
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
    "etag": "W/\"180-paLXsiy/lpw2rjA7a0S5TFwrI10\"",
    "date": "Mon, 02 Jun 2025 00:02:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a809735d-ce6c-4beb-857c-a00e56aa50bf",
    "conversationId": "3b050f53-ceb2-4776-8499-f3dc2cbae157",
    "senderId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "content": "Message with location",
    "status": "sent",
    "timestamp": "2025-06-02T00:02:16.929Z",
    "attachments": null,
    "location": {
      "address": "New York, NY",
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "organizationId": "071719cf-524d-4227-bb13-fd5e399659eb"
  }
}
```

**⏱️ Duration:** 872.6 ms  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/messages/6f96647e-0b87-4ce6-b0b0-2386a6ef1276 (190.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/6f96647e-0b87-4ce6-b0b0-2386a6ef1276</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 190.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/messages/1497c4fe-cd33-4749-9ebc-abe2f7da629a (224.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/1497c4fe-cd33-4749-9ebc-abe2f7da629a</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 224.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/messages/2b704e60-2d79-4193-89dd-f42c72c69ee7 (177.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/2b704e60-2d79-4193-89dd-f42c72c69ee7</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 177.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/messages/8528479b-80fa-4a2c-ade5-5dcf825d9171 (230.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/8528479b-80fa-4a2c-ade5-5dcf825d9171</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 230.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/messages/88f40e6b-ecee-4c8b-88f6-a0b86705d2f0 (201.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/88f40e6b-ecee-4c8b-88f6-a0b86705d2f0</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 201.0 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/messages/a809735d-ce6c-4beb-857c-a00e56aa50bf (203.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot DELETE /api/messages/a809735d-ce6c-4beb-857c-a00e56aa50bf</pre>\n</body>\n</html>\n"
}
```

**⏱️ Duration:** 203.7 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/conversations/3b050f53-ceb2-4776-8499-f3dc2cbae157 (678.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 678.0 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/conversations/5eca42d7-ca24-462f-8855-a651f5de5c56 (590.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 590.7 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/conversations/4dea0af2-73e6-447d-b2db-0d05c8bcc267 (624.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 624.5 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/conversations/a0cdf28d-8697-4c8f-ad09-8f024015dffc (638.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 638.3 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/conversations/c702a4e0-6a61-42ed-b1fe-0b42d3f48f90 (605.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 605.0 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/conversations/57fbc108-3fc4-4fec-9fcb-d9f3b6e705f2 (653.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Conversation permanently deleted"
  }
}
```

**⏱️ Duration:** 653.2 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/organizations/071719cf-524d-4227-bb13-fd5e399659eb (1140.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1140.2 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/organizations/380686c2-93da-4592-a8e4-c3ea1214a78d (1333.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1MDAsImV4cCI6MTc0ODgyNjEwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pdpvXh1GSoifCep3LAXriLks22hXjP2Rw2ahE3ne_0I7XaVv3iDe0D1rr8tU2iGVpR-EPhSwcI8SmmkIHNqQTHe_ZEmfgANW4UZsyA-8l0y6uxiIaMhFeva0Zg5vE4sz4d7oyIYxSmwCjmOw7G3SNAbQ03zLuxmsJSBHFx84pv_YrXc0D6W4TNUXUGDDQBaVfhSI7SKaLAwUG2P1JpYkKpnQ8zjL_lh4dIN4cnaxohNIRfEBsn3YTLhqZg-RiOWrv3sN0AFSZ8tEEgKcn1VMESAUEKwPcJweL2JDhPJEB32mUx6HDZFMbCxZqLTH6i2Pu7PFFekqawljy7rqa-AwTA"
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
    "date": "Mon, 02 Jun 2025 00:02:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1333.5 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (271.2ms)</summary>

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
    "etag": "W/\"640-eTUAH82z/+Qg0RV/WN8H29D5BHE\"",
    "date": "Mon, 02 Jun 2025 00:02:24 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1NDQsImV4cCI6MTc0ODgyNjE0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.FcxM4mmEERY0aHX4QJwO2o6HdLoA5RhOwYsWU8Y7myhLaKdAEJo3YzItzly6RuiORLsq-tynVRo6_a9vuydSeDu5FUuROlHqbd79aGVP7mOXS6cL4DYKUkFW9TKmf7NViGf6mlZ2LSIJXUzCzYuK7g20PFWwCmSiISeFclQiEp_Lz2oBKi8HIIS6ZX0d1oCjHXatjr3vZBbBM2UAebvEWCg0ARHvakgL6_MLyMpj6a1VbChlyEgq6qHYZ1VUMgpTNew-RgmeLOFw-hqHwQaLwU83Zyw1ft1SyCFRxnwMGL_Jhg6vYG295XIeAXGM2tEYtpzuvjgREabRAVzsi4vpuA",
      "refreshToken": "AMf-vBwb9lyPYkY3KPz1wpo2wKXDko4J8Sax9isupUshZkTVwh3JXgRStbpDHnu-KfAmdStNvLzAHwz-gcDChCg9EMvPtKFL_bZrkWC-o2x4Q3q3R0UfhBcoDFpzh4_14-YCvXUAhR1DLCmwJHiuEVjHEOZEdIW7-NepGQHHAgNgRpPmRteOvVJpJiHyEUKnf9PtyFb25xPhuVu0GJ_kiJdnGw2uou0gRkMNoQ0j8gHvVMHy8PQEDBbvv3rywP8IlamDZs6A8V4s",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 271.2 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/rnQNRyXDZociveYh42NnSFDAbLH3 (1238.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1NDQsImV4cCI6MTc0ODgyNjE0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.FcxM4mmEERY0aHX4QJwO2o6HdLoA5RhOwYsWU8Y7myhLaKdAEJo3YzItzly6RuiORLsq-tynVRo6_a9vuydSeDu5FUuROlHqbd79aGVP7mOXS6cL4DYKUkFW9TKmf7NViGf6mlZ2LSIJXUzCzYuK7g20PFWwCmSiISeFclQiEp_Lz2oBKi8HIIS6ZX0d1oCjHXatjr3vZBbBM2UAebvEWCg0ARHvakgL6_MLyMpj6a1VbChlyEgq6qHYZ1VUMgpTNew-RgmeLOFw-hqHwQaLwU83Zyw1ft1SyCFRxnwMGL_Jhg6vYG295XIeAXGM2tEYtpzuvjgREabRAVzsi4vpuA"
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
    "date": "Mon, 02 Jun 2025 00:02:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1238.9 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (315.2ms)</summary>

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
    "etag": "W/\"640-grWFkH5nkqdSsOrw2lW0B4OywIA\"",
    "date": "Mon, 02 Jun 2025 00:02:26 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1NDYsImV4cCI6MTc0ODgyNjE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qlHBCXC2rPrN6f-SAsNypnN9IHpz8THk14rCLssxRPxMhWUO93D19n5BAPu7ILHonAq-1zYi21v6jJLpABf5KIRSY7iiCKloUhs8c6EXRAaVt2D6SBY4vpjNIEz7EkOw2FmJXLVQqW2_QNPkk1fbSU0iqfNCenWmuv3WvgCiOhcDVBjW0EnBmXT2zaWZAoJmv0xwjGULZa5eJy3HYs4V0MdKR3owdOQSOT-TrUS6ZqVX4A1LFYAMTUsnzNNEwD-FfGRMfZiFiFpwGbEWjbxBBPPbaOKF94j9MQdBjBBAKBtB07U2KTvN2Y1AQUA3PeU5HKtbMfDZUTfOmz4pBEaX8A",
      "refreshToken": "AMf-vBxgt8tjBFzzx1tRU8qg4aSfhaUQR27TBvRJA_s7zLYdW9_MUXXmVI31rPiDs09iMSCFp04FtMpsvqc5EGtlj6v7_eBBa4QGyI2hFmcOaFqCzd4fEioGxJ3VnNEJh2BVZwGM1qQHW6EUGWD-S0n4BFVFpYlvuUXZ1w9U2dk7qwfxM0ojUkNG_-oLOQ8VBYRAsiZQYWevCSqC6OqCYmRnMAMKXB9-HLqTVqeNsql46AC6vm5cLhOH--EjmKF1g-mpsfa2XVGd",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 315.2 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/whemVsGOsbcZR56HK3dpPbSPlPM2 (1136.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1NDYsImV4cCI6MTc0ODgyNjE0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qlHBCXC2rPrN6f-SAsNypnN9IHpz8THk14rCLssxRPxMhWUO93D19n5BAPu7ILHonAq-1zYi21v6jJLpABf5KIRSY7iiCKloUhs8c6EXRAaVt2D6SBY4vpjNIEz7EkOw2FmJXLVQqW2_QNPkk1fbSU0iqfNCenWmuv3WvgCiOhcDVBjW0EnBmXT2zaWZAoJmv0xwjGULZa5eJy3HYs4V0MdKR3owdOQSOT-TrUS6ZqVX4A1LFYAMTUsnzNNEwD-FfGRMfZiFiFpwGbEWjbxBBPPbaOKF94j9MQdBjBBAKBtB07U2KTvN2Y1AQUA3PeU5HKtbMfDZUTfOmz4pBEaX8A"
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
    "date": "Mon, 02 Jun 2025 00:02:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1136.8 ms  

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
