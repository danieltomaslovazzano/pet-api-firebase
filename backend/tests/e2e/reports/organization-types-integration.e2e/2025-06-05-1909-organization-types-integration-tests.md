# E2E Test Report: organization-types-integration-tests

**Date:** 6/5/2025  
**Time:** 7:09:33 PM  
**Duration:** 14.41s  
**Tests:** 3 total, 0 passed, 3 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Should handle multiple shelter organizations correctly | FAILED | 1.76s | Should handle multiple shelter organizations correctly |
| ❌ Existing organizations without explicit type should default to shelter | FAILED | 0.49s | Existing organizations without explicit type should default to shelter |
| ❌ Should handle organization updates without breaking type field | FAILED | 1.01s | Should handle organization updates without breaking type field |


---

## Detailed Execution Log

### Test: Should handle multiple shelter organizations correctly
**Status:** ❌ FAILED  
**Duration:** 1.76s  
**Error:** expect(received).toBe(expected) // Object.is equality

Expected: "shelter"
Received: undefined  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (572.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
  },
  "data": {
    "name": "Multi Shelter 1 1749143364561",
    "type": "shelter",
    "description": "Shelter 1 for multi-org testing",
    "address": "400 Multi Street",
    "phone": "+1555123450",
    "email": "multi-shelter-0-1749143364561@example.com"
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
    "content-length": "549",
    "etag": "W/\"225-g9fxSXJSFx9EWl1kkPMOqy7IJMA\"",
    "date": "Thu, 05 Jun 2025 17:09:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "5ed41806-9765-470b-8c0c-90175a5ca7cc",
      "name": "Multi Shelter 1 1749143364561",
      "type": "shelter",
      "description": "Shelter 1 for multi-org testing",
      "logo": null,
      "address": "400 Multi Street",
      "phone": "+1555123450",
      "email": "multi-shelter-0-1749143364561@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:09:25.068Z",
      "updatedAt": "2025-06-05T17:09:25.068Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 572.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (511.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
  },
  "data": {
    "name": "Multi Shelter 2 1749143365133",
    "type": "shelter",
    "description": "Shelter 2 for multi-org testing",
    "address": "401 Multi Street",
    "phone": "+1555123451",
    "email": "multi-shelter-1-1749143365133@example.com"
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
    "content-length": "549",
    "etag": "W/\"225-H4kUZZXfYPeRdZOW5unKL9qxhXs\"",
    "date": "Thu, 05 Jun 2025 17:09:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "1dc4ac93-e384-4636-9917-9f526348b641",
      "name": "Multi Shelter 2 1749143365133",
      "type": "shelter",
      "description": "Shelter 2 for multi-org testing",
      "logo": null,
      "address": "401 Multi Street",
      "phone": "+1555123451",
      "email": "multi-shelter-1-1749143365133@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:09:25.576Z",
      "updatedAt": "2025-06-05T17:09:25.576Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 511.0 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (672.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
  },
  "data": {
    "name": "Multi Shelter 3 1749143365644",
    "type": "shelter",
    "description": "Shelter 3 for multi-org testing",
    "address": "402 Multi Street",
    "phone": "+1555123452",
    "email": "multi-shelter-2-1749143365644@example.com"
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
    "content-length": "549",
    "etag": "W/\"225-SkDsFFxgwRLp0+0hGGUiuSB57I8\"",
    "date": "Thu, 05 Jun 2025 17:09:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "dc4ce66a-a681-4f13-b630-01462cb0b16a",
      "name": "Multi Shelter 3 1749143365644",
      "type": "shelter",
      "description": "Shelter 3 for multi-org testing",
      "logo": null,
      "address": "402 Multi Street",
      "phone": "+1555123452",
      "email": "multi-shelter-2-1749143365644@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:09:26.253Z",
      "updatedAt": "2025-06-05T17:09:26.253Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 672.8 ms  

</details>


---

### Test: Existing organizations without explicit type should default to shelter
**Status:** ❌ FAILED  
**Duration:** 0.49s  
**Error:** expect(received).toBe(expected) // Object.is equality

Expected: "shelter"
Received: undefined  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (490.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
  },
  "data": {
    "name": "Legacy Org 1749143366330",
    "description": "Organization created without explicit type",
    "email": "legacy-org-1749143366330@example.com",
    "address": "123 Legacy Street",
    "phone": "+1555000000"
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
    "content-length": "551",
    "etag": "W/\"227-E7u+mUD9QLWuEvvZw2I79qfjF3g\"",
    "date": "Thu, 05 Jun 2025 17:09:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "53f5b771-5142-44d1-84f3-274689b5f50f",
      "name": "Legacy Org 1749143366330",
      "type": "shelter",
      "description": "Organization created without explicit type",
      "logo": null,
      "address": "123 Legacy Street",
      "phone": "+1555000000",
      "email": "legacy-org-1749143366330@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:09:26.757Z",
      "updatedAt": "2025-06-05T17:09:26.757Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 490.7 ms  

</details>


---

### Test: Should handle organization updates without breaking type field
**Status:** ❌ FAILED  
**Duration:** 1.01s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (561.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
  },
  "data": {
    "name": "Update Test Org 1749143366824",
    "type": "shelter",
    "description": "Organization for update testing",
    "address": "999 Update Ave",
    "phone": "+1555999999",
    "email": "update-test-1749143366824@example.com"
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
    "content-length": "543",
    "etag": "W/\"21f-IcMhlOxGU2/pCnLIxAXZmRR94Fs\"",
    "date": "Thu, 05 Jun 2025 17:09:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "9679a2ee-0eb8-41dc-8812-add00b88cd33",
      "name": "Update Test Org 1749143366824",
      "type": "shelter",
      "description": "Organization for update testing",
      "logo": null,
      "address": "999 Update Ave",
      "phone": "+1555999999",
      "email": "update-test-1749143366824@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:09:27.321Z",
      "updatedAt": "2025-06-05T17:09:27.321Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 561.9 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/organizations/undefined (450.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
  },
  "data": {
    "description": "Updated description"
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
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Thu, 05 Jun 2025 17:09:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 450.2 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/undefined (456.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
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
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Thu, 05 Jun 2025 17:09:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 456.0 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/undefined (456.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
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
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Thu, 05 Jun 2025 17:09:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 456.8 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/undefined (511.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
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
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Thu, 05 Jun 2025 17:09:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 511.9 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/undefined (506.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
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
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Thu, 05 Jun 2025 17:09:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 506.8 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/undefined (512.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
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
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Thu, 05 Jun 2025 17:09:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 512.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/undefined (361.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzU5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNTksImV4cCI6MTc0OTE0Njk1OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bsyGnZCcLSkcW_AfCWeuT0myUIvZiTueSJld9yCx4FZ7HKfrGdQs7YVnWa0YrWHbafHgYS1hoHfA1Yf3pIHIpOj_5e8SHlLTYVt6TKdSRDgQCUkr33dDTeZsNr8NwzHekB37q8gbiwGzee3H6kEGBZlTLHy2OnhdT7qiLJ8fQFq9sYqYe7So8XIVywniUZUX18dIBFHodFXnI4L5KRgU4duFD-QyVR6tD0Qjxz9x06WDktcOwWiKtvXYEl1GzQgPP5Au1Ar9otW1giUS2pfgCs18GqtOmlwGmP1gBgel-_3iVi8YF9660GXUFBSlyuRlMxn2kLX2ec8LTgJXfrG7fg"
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
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Thu, 05 Jun 2025 17:09:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid organization ID",
    "details": [
      "Organization ID must be a valid UUID"
    ]
  }
}
```

**⏱️ Duration:** 361.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/login (280.5ms)</summary>

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
    "etag": "W/\"6aa-tAjYuUoC+zaPBlcqUcU63A7TCSE\"",
    "date": "Thu, 05 Jun 2025 17:09:30 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzcwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNzAsImV4cCI6MTc0OTE0Njk3MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lTQJa9weJCvVNuGp2e4PrxkKBngeRdBVSWcwz1pHEl6CmtYaOb1CueqV9e_OBRC3IMZH-uZP6eyV7n39rvGI3BWHQISbAP9E-cdTPjNv4Iv-t2SywYlTiHueBBzw0ErvcMXCRwT4FL4bVP321pFFErA8TwLt94_JVrnvbP24AQGvoCflnAqXgJutfkm9O7r-rXpmRQQ9jfFpoAKt7rqQDFGRkR9GDYL0PpJx2e4ilnt96VkiN0o_SFwGQwYKVu9RpJFR0WG_zWNHeNHFfnT2flGrB3XEYMAFbgfAzqyjWuta66q7CO8KgVY-FYnDMfA03mScWSs9qf-wDpwrUB5akg",
        "refreshToken": "AMf-vBzriXB-9Y2YaJMxDUSPEK9WEpAyWE3oswoG-fcjOVj95xvN1f608HyPQ2Jj7EWIFEtqUVbw_16eLbJ4LWxB51ASf35YMqKG2N62ypMPGEiFgbvfoUYftq9S76QUrZaYLEUG-zO-oE_zJ2z59j3Tq6q1jTY_LOm18O7y-p8nAJVQ4zSZgnn6QYatpQI4ZsF9FXPmcX5_ChKHDxYauQ8kveiCskRMg3pJH-vTQ3o4B34GFcdgw4HiqU54b_rb_OT4HbZlZPFl",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 280.5 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/admin/users/gZZkTcUg2PfAT6IoxFIOMVZrmto2 (1257.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzcwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNzAsImV4cCI6MTc0OTE0Njk3MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lTQJa9weJCvVNuGp2e4PrxkKBngeRdBVSWcwz1pHEl6CmtYaOb1CueqV9e_OBRC3IMZH-uZP6eyV7n39rvGI3BWHQISbAP9E-cdTPjNv4Iv-t2SywYlTiHueBBzw0ErvcMXCRwT4FL4bVP321pFFErA8TwLt94_JVrnvbP24AQGvoCflnAqXgJutfkm9O7r-rXpmRQQ9jfFpoAKt7rqQDFGRkR9GDYL0PpJx2e4ilnt96VkiN0o_SFwGQwYKVu9RpJFR0WG_zWNHeNHFfnT2flGrB3XEYMAFbgfAzqyjWuta66q7CO8KgVY-FYnDMfA03mScWSs9qf-wDpwrUB5akg"
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
    "date": "Thu, 05 Jun 2025 17:09:32 GMT",
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

**⏱️ Duration:** 1257.9 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (252.3ms)</summary>

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
    "etag": "W/\"6aa-TSW+ia+hEgcZ/Od9M0KBkyfUi9M\"",
    "date": "Thu, 05 Jun 2025 17:09:32 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNzIsImV4cCI6MTc0OTE0Njk3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JmQcZkTKXcI8KutxgRAOMJGYQ3gHXjBk_PChu-AYQQLktpLRlyjh-_eJbMZeMQJ1ELoS3tJjghANBV8qzNolOCFbyR-QNvXkJyz7W_5FvYLbaPLw-lgrPcjOVePF-Km_VTy373zgDWYoIkFpLnqMaVT8y6r2WMJaWEeB9_DiQdkaNWDYFrJZQ-2NdByHIBeIQ5o-wUX-fGlRyePYCw4766sw5ksSmTlsq5J055K-dvw12gVv93_TxLv8YDuao81jc1ppXzo34NSor6XlpZiithe7HRuZWeNxWaQ0lOukkyHfYJFdvBeza01__g6K39yzxHOM39_mxm-o5-J1Iwo8_A",
        "refreshToken": "AMf-vBxXAdrclpLnUcsWqpdIS_ZJB4a9jyTElF_uipAmrNHAL0Sygufr_pjYx98esuvewOtwM10QwIcuYC0Bl9xwVLnMehYIagtMGkieDkJOn_smBbEkl_iEtyL7ngt189ZjvSAdBr-ZhWvPiiMv8uETgfXoV8K1IYyHwmhIt6S4_Ovc5bHAQHfbLhpSU80E6q3g2TmKrMDIHCUbPReZbyXLRUdcCcQiZbgYQZYUUY0lIIeZeb93IfmPKEXIsSfd_vokrXdcoQ5S",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 252.3 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/8P3S1SIDP2PQFzOOJnkAcLHBucb2 (1120.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzNzIsImV4cCI6MTc0OTE0Njk3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JmQcZkTKXcI8KutxgRAOMJGYQ3gHXjBk_PChu-AYQQLktpLRlyjh-_eJbMZeMQJ1ELoS3tJjghANBV8qzNolOCFbyR-QNvXkJyz7W_5FvYLbaPLw-lgrPcjOVePF-Km_VTy373zgDWYoIkFpLnqMaVT8y6r2WMJaWEeB9_DiQdkaNWDYFrJZQ-2NdByHIBeIQ5o-wUX-fGlRyePYCw4766sw5ksSmTlsq5J055K-dvw12gVv93_TxLv8YDuao81jc1ppXzo34NSor6XlpZiithe7HRuZWeNxWaQ0lOukkyHfYJFdvBeza01__g6K39yzxHOM39_mxm-o5-J1Iwo8_A"
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
    "date": "Thu, 05 Jun 2025 17:09:33 GMT",
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

**⏱️ Duration:** 1120.6 ms  

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
- Total organizations created: 6
- Total pets created: 0
- Integration tests completed
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
