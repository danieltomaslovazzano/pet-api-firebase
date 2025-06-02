# E2E Test Report: organization-types-integration-tests

**Date:** 6/2/2025  
**Time:** 1:49:50 AM  
**Duration:** 27.75s  
**Tests:** 9 total, 6 passed, 3 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Shelter should be able to create pets for adoption | FAILED | 3.09s | Shelter should be able to create pets for adoption |
| ✅ Should verify shelter organization has correct type and features | PASSED | 1.14s | Should verify shelter organization has correct type and features |
| ✅ Should list pets filtered by shelter organization | PASSED | 0.29s | Should list pets filtered by shelter organization |
| ✅ Shelter members should have appropriate permissions | PASSED | 0.43s | Shelter members should have appropriate permissions |
| ✅ Should validate required fields for shelter type | PASSED | 0.38s | Should validate required fields for shelter type |
| ✅ Should handle multiple shelter organizations correctly | PASSED | 2.02s | Should handle multiple shelter organizations correctly |
| ❌ Should maintain data isolation between organizations of same type | FAILED | 2.47s | Should maintain data isolation between organizations of same type |
| ❌ Existing organizations without explicit type should default to shelter | FAILED | 0.53s | Existing organizations without explicit type should default to shelter |
| ✅ Should handle organization updates without breaking type field | PASSED | 1.40s | Should handle organization updates without breaking type field |


---

## Detailed Execution Log

### Test: Shelter should be able to create pets for adoption
**Status:** ❌ FAILED  
**Duration:** 3.09s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/pets (3088.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q",
    "X-Organization-Id": "9b8fd0ea-abc2-4144-a2dd-126c87ec47aa"
  },
  "data": {
    "name": "Shelter Pet",
    "species": "dog",
    "breed": "Mixed",
    "age": 2,
    "gender": "female",
    "size": "medium",
    "color": "brown",
    "status": "available",
    "description": "Friendly dog looking for a home",
    "images": [
      "https://example.com/pet-image.jpg"
    ]
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
    "content-length": "129",
    "etag": "W/\"81-ZoZW4ykL/8aapMNBhQcdVn0fBWY\"",
    "date": "Sun, 01 Jun 2025 23:49:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Failed to process image URL",
    "details": "Request failed with status code 404",
    "url": "https://example.com/pet-image.jpg"
  }
}
```

**⏱️ Duration:** 3088.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should verify shelter organization has correct type and features
**Status:** ✅ PASSED  
**Duration:** 1.14s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/9b8fd0ea-abc2-4144-a2dd-126c87ec47aa (718.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "content-length": "985",
    "etag": "W/\"3d9-oyLBXguKI525vKXTaN/fiDHEcEc\"",
    "date": "Sun, 01 Jun 2025 23:49:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9b8fd0ea-abc2-4144-a2dd-126c87ec47aa",
    "name": "Integration Test Shelter 1748821765164",
    "type": "shelter",
    "description": "Shelter for integration testing",
    "logo": null,
    "address": "789 Integration Street",
    "phone": "+1555123456",
    "email": "integration-shelter-1748821765164@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:25.543Z",
    "updatedAt": "2025-06-01T23:49:25.543Z",
    "memberships": [
      {
        "id": "351bcea7-cbf8-4a25-b3d2-9c31e865cb13",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9b8fd0ea-abc2-4144-a2dd-126c87ec47aa",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-01T23:49:26.607Z",
        "updatedAt": "2025-06-01T23:49:26.607Z",
        "user": {
          "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "email": "daniellovazzano@gmail.com",
          "name": "daniel",
          "role": "admin",
          "status": "active",
          "profileImage": null,
          "phone": null,
          "address": null,
          "blockedUsers": [],
          "createdAt": "2025-05-17T19:43:00.000Z",
          "updatedAt": "2025-05-17T19:43:00.000Z",
          "isSuperAdmin": true
        }
      }
    ]
  }
}
```

**⏱️ Duration:** 718.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/types/shelter (420.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "content-length": "580",
    "etag": "W/\"244-/DVhTfParn2ydMKc6F439Dx2l0I\"",
    "date": "Sun, 01 Jun 2025 23:49:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "shelter",
    "name": "Protectora de Animales",
    "description": "Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas",
    "features": [
      "pet_adoption",
      "pet_rescue",
      "volunteer_management",
      "donation_tracking",
      "medical_records",
      "foster_care_coordination"
    ],
    "permissions": {
      "pets": {
        "create": true,
        "read": true,
        "update": true,
        "delete": true,
        "manage_adoption_status": true
      },
      "adoptions": {
        "process_applications": true,
        "conduct_interviews": true,
        "approve_adoptions": true
      }
    },
    "validation": {
      "requiredFields": [
        "name",
        "email",
        "address",
        "phone"
      ],
      "optionalFields": [
        "description",
        "logo"
      ]
    }
  }
}
```

**⏱️ Duration:** 420.8 ms  

</details>


---

### Test: Should list pets filtered by shelter organization
**Status:** ✅ PASSED  
**Duration:** 0.29s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/pets (286.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q",
    "X-Organization-Id": "9b8fd0ea-abc2-4144-a2dd-126c87ec47aa"
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
    "content-length": "2",
    "etag": "W/\"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w\"",
    "date": "Sun, 01 Jun 2025 23:49:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 286.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (481.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "name": "Permissions Test Shelter 1748821771197",
    "type": "shelter",
    "description": "Shelter for permissions testing",
    "address": "321 Permissions Ave",
    "phone": "+1555987654",
    "email": "permissions-shelter-1748821771197@example.com"
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
    "content-length": "419",
    "etag": "W/\"1a3-M1a69j+QMx3iRKBSyXnh8HklGdE\"",
    "date": "Sun, 01 Jun 2025 23:49:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6f8ef987-a520-409c-8d3d-da3e5cacaafb",
    "name": "Permissions Test Shelter 1748821771197",
    "type": "shelter",
    "description": "Shelter for permissions testing",
    "logo": null,
    "address": "321 Permissions Ave",
    "phone": "+1555987654",
    "email": "permissions-shelter-1748821771197@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:31.616Z",
    "updatedAt": "2025-06-01T23:49:31.616Z"
  }
}
```

**⏱️ Duration:** 481.0 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (848.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "shelter-member-1748821771678@example.com",
    "password": "TestPassword123!",
    "name": "Shelter Member"
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
    "content-length": "1494",
    "etag": "W/\"5d6-3qrxbh1htLVXzIqBXiseuPS33mY\"",
    "date": "Sun, 01 Jun 2025 23:49:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "t8ZFQCaVB1UOG1R5YGcVdkvokTg1",
      "email": "shelter-member-1748821771678@example.com",
      "name": "Shelter Member",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTc3MiwidXNlcl9pZCI6InQ4WkZRQ2FWQjFVT0cxUjVZR2NWZGt2b2tUZzEiLCJzdWIiOiJ0OFpGUUNhVkIxVU9HMVI1WUdjVmRrdm9rVGcxIiwiaWF0IjoxNzQ4ODIxNzcyLCJleHAiOjE3NDg4MjUzNzIsImVtYWlsIjoic2hlbHRlci1tZW1iZXItMTc0ODgyMTc3MTY3OEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzaGVsdGVyLW1lbWJlci0xNzQ4ODIxNzcxNjc4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.HVdX7_smUwHkhl4WEc9_Lt95G4o2uJDsJrCUWghI2PWZbh4NP_RRmpUCiOpt8f0tQlpOo_kFHh0S7gGv4kmmZ6tO2xj4-dgiw0kLpBhJ0vLfaHj7soyQ66DX1-hX1TjFnTf2W-n1B5oOXxg_BCHTDR-UN4lRmviSFj6QeHwneEYAzsCqboRG0QeqlFqRtMCePaJX2ZGJDhXsQG9QW4ydaKbW2Fv2_Ve84kEborK3LdeV_FtRhNHyhD3QTatKl6cAr9WfAUCT3kO6PEs0hKlFSUSh3pDvbBwR-BUns03MNlUpn5ZtINOFm9s8R1WgOy60UahGQoaXdDhUeyjk9EwqIg",
      "refreshToken": "AMf-vBxcY-ZG8g6RlItlrmcwz2KsHZGOhRl4P3JhwV7G5ETjdI1nodx-okm1EccI6sRw5O9xrlQNrvhE3lj01jaaKySMDUGGwljEoXUTc_kfWksXNMP0txdTmmufVpXxm14zv6v0_5a3njXSlQRnkdmHApHwt9JSKF8RKXbwWdf4SmpbgwQ__lWIXz9Wz65cwR9icBj7cQkcVPnWeGFOoACETfWSCn2RayTrEYxpRkZBQis8h6OFJjqriaZgQHSopEzNH7x4d6kl",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 848.0 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (551.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "organizationId": "6f8ef987-a520-409c-8d3d-da3e5cacaafb",
    "userId": "t8ZFQCaVB1UOG1R5YGcVdkvokTg1",
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
    "etag": "W/\"fd-ksJMDpxmm9pLE0Nk4jjrBguiMvI\"",
    "date": "Sun, 01 Jun 2025 23:49:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5f61e18b-096f-4c37-9f00-06c4bcac5dcb",
    "userId": "t8ZFQCaVB1UOG1R5YGcVdkvokTg1",
    "organizationId": "6f8ef987-a520-409c-8d3d-da3e5cacaafb",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:49:33.015Z",
    "updatedAt": "2025-06-01T23:49:33.015Z"
  }
}
```

**⏱️ Duration:** 551.0 ms  

</details>


---

### Test: Shelter members should have appropriate permissions
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types/shelter (433.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "content-length": "580",
    "etag": "W/\"244-/DVhTfParn2ydMKc6F439Dx2l0I\"",
    "date": "Sun, 01 Jun 2025 23:49:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "shelter",
    "name": "Protectora de Animales",
    "description": "Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas",
    "features": [
      "pet_adoption",
      "pet_rescue",
      "volunteer_management",
      "donation_tracking",
      "medical_records",
      "foster_care_coordination"
    ],
    "permissions": {
      "pets": {
        "create": true,
        "read": true,
        "update": true,
        "delete": true,
        "manage_adoption_status": true
      },
      "adoptions": {
        "process_applications": true,
        "conduct_interviews": true,
        "approve_adoptions": true
      }
    },
    "validation": {
      "requiredFields": [
        "name",
        "email",
        "address",
        "phone"
      ],
      "optionalFields": [
        "description",
        "logo"
      ]
    }
  }
}
```

**⏱️ Duration:** 433.8 ms  

</details>


---

### Test: Should validate required fields for shelter type
**Status:** ✅ PASSED  
**Duration:** 0.38s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/types/shelter (380.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "content-length": "580",
    "etag": "W/\"244-/DVhTfParn2ydMKc6F439Dx2l0I\"",
    "date": "Sun, 01 Jun 2025 23:49:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "shelter",
    "name": "Protectora de Animales",
    "description": "Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas",
    "features": [
      "pet_adoption",
      "pet_rescue",
      "volunteer_management",
      "donation_tracking",
      "medical_records",
      "foster_care_coordination"
    ],
    "permissions": {
      "pets": {
        "create": true,
        "read": true,
        "update": true,
        "delete": true,
        "manage_adoption_status": true
      },
      "adoptions": {
        "process_applications": true,
        "conduct_interviews": true,
        "approve_adoptions": true
      }
    },
    "validation": {
      "requiredFields": [
        "name",
        "email",
        "address",
        "phone"
      ],
      "optionalFields": [
        "description",
        "logo"
      ]
    }
  }
}
```

**⏱️ Duration:** 380.4 ms  

</details>


---

### Test: Should handle multiple shelter organizations correctly
**Status:** ✅ PASSED  
**Duration:** 2.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (431.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "name": "Multi Shelter 1 1748821773899",
    "type": "shelter",
    "description": "Shelter 1 for multi-org testing",
    "address": "400 Multi Street",
    "phone": "+1555123450",
    "email": "multi-shelter-0-1748821773899@example.com"
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
    "content-length": "403",
    "etag": "W/\"193-VEekcnPI/FHtEMWaVs2d4L12wmA\"",
    "date": "Sun, 01 Jun 2025 23:49:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "03101234-d274-47df-a4b2-556d14f3d30f",
    "name": "Multi Shelter 1 1748821773899",
    "type": "shelter",
    "description": "Shelter 1 for multi-org testing",
    "logo": null,
    "address": "400 Multi Street",
    "phone": "+1555123450",
    "email": "multi-shelter-0-1748821773899@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:34.276Z",
    "updatedAt": "2025-06-01T23:49:34.276Z"
  }
}
```

**⏱️ Duration:** 431.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (426.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "name": "Multi Shelter 2 1748821774331",
    "type": "shelter",
    "description": "Shelter 2 for multi-org testing",
    "address": "401 Multi Street",
    "phone": "+1555123451",
    "email": "multi-shelter-1-1748821774331@example.com"
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
    "content-length": "403",
    "etag": "W/\"193-6O48EFDVmSJiQhnIMvRr4yJQ5I8\"",
    "date": "Sun, 01 Jun 2025 23:49:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d326f87b-0594-4e22-b9cc-f0c017de6adf",
    "name": "Multi Shelter 2 1748821774331",
    "type": "shelter",
    "description": "Shelter 2 for multi-org testing",
    "logo": null,
    "address": "401 Multi Street",
    "phone": "+1555123451",
    "email": "multi-shelter-1-1748821774331@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:34.702Z",
    "updatedAt": "2025-06-01T23:49:34.702Z"
  }
}
```

**⏱️ Duration:** 426.5 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (434.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "name": "Multi Shelter 3 1748821774757",
    "type": "shelter",
    "description": "Shelter 3 for multi-org testing",
    "address": "402 Multi Street",
    "phone": "+1555123452",
    "email": "multi-shelter-2-1748821774757@example.com"
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
    "content-length": "403",
    "etag": "W/\"193-Yn9vt7KEZ1IvVsJq9RIpts9+v4Y\"",
    "date": "Sun, 01 Jun 2025 23:49:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "889b2898-1343-4fad-be47-62e4b4ca8d15",
    "name": "Multi Shelter 3 1748821774757",
    "type": "shelter",
    "description": "Shelter 3 for multi-org testing",
    "logo": null,
    "address": "402 Multi Street",
    "phone": "+1555123452",
    "email": "multi-shelter-2-1748821774757@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:35.133Z",
    "updatedAt": "2025-06-01T23:49:35.133Z"
  }
}
```

**⏱️ Duration:** 434.0 ms  

</details>

<details><summary>📡 Request #4: GET http://localhost:3000/api/organizations?type=shelter (725.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "content-length": "47614",
    "etag": "W/\"b9fe-y+zzVczzwCAldUcJLKREvXrYfJ4\"",
    "date": "Sun, 01 Jun 2025 23:49:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
      "name": "Test Org for Memberships 1748380292595",
      "type": "shelter",
      "description": "Organization for membership testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "test-org-1748380292595@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T21:11:33.283Z",
      "updatedAt": "2025-05-27T21:11:33.283Z",
      "memberships": [
        {
          "id": "6709d3c7-2a3b-44b1-8df6-cf50aa03a569",
          "userId": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
          "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
          "role": "member",
          "status": "active",
          "createdAt": "2025-05-27T21:11:35.346Z",
          "updatedAt": "2025-05-27T21:11:35.346Z",
          "user": {
            "id": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
            "email": "invite-user-1748380293844@example.com",
            "name": "User to Invite",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:11:34.430Z",
            "updatedAt": "2025-05-27T21:11:34.430Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "26cf7874-7ade-4942-9226-dc93665291a8",
          "userId": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
          "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
          "role": "admin",
          "status": "active",
          "createdAt": "2025-05-27T21:11:38.525Z",
          "updatedAt": "2025-05-27T21:11:38.525Z",
          "user": {
            "id": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
            "email": "admin-user-1748380297222@example.com",
            "name": "Admin User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:11:37.718Z",
            "updatedAt": "2025-05-27T21:11:37.718Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "8c4352c4-4379-4689-ae59-7773d7f0fd3b",
          "userId": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
          "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
          "role": "manager",
          "status": "active",
          "createdAt": "2025-05-27T21:11:40.037Z",
          "updatedAt": "2025-05-27T21:11:40.037Z",
          "user": {
            "id": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
            "email": "manager-user-1748380298581@example.com",
            "name": "Manager User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:11:39.140Z",
            "updatedAt": "2025-05-27T21:11:39.140Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "c4a0ed2a-42b8-44ae-9932-41ea7c0e0010",
          "userId": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
          "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
          "role": "moderator",
          "status": "active",
          "createdAt": "2025-05-27T21:11:41.760Z",
          "updatedAt": "2025-05-27T21:11:41.760Z",
          "user": {
            "id": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
            "email": "moderator-user-1748380300099@example.com",
            "name": "Moderator User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:11:40.556Z",
            "updatedAt": "2025-05-27T21:11:40.556Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "591f1eae-bcee-4dce-9429-895ba426f641",
          "userId": "pWYOXREIeUVMp24IGm0N7hykbd52",
          "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
          "role": "volunteer",
          "status": "active",
          "createdAt": "2025-05-27T21:11:43.585Z",
          "updatedAt": "2025-05-27T21:11:43.585Z",
          "user": {
            "id": "pWYOXREIeUVMp24IGm0N7hykbd52",
            "email": "volunteer-user-1748380301817@example.com",
            "name": "Volunteer User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:11:42.417Z",
            "updatedAt": "2025-05-27T21:11:42.417Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "3b324cbf-fd34-423b-935b-c8e6a7746a0e",
          "userId": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
          "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
          "role": "observer",
          "status": "active",
          "createdAt": "2025-05-27T21:11:45.124Z",
          "updatedAt": "2025-05-27T21:11:45.124Z",
          "user": {
            "id": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
            "email": "observer-user-1748380303641@example.com",
            "name": "Observer User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:11:44.129Z",
            "updatedAt": "2025-05-27T21:11:44.129Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "82e1e643-95f4-4b33-b726-c7c80fe173f3",
      "name": "OrgA",
      "type": "shelter",
      "description": null,
      "logo": null,
      "address": null,
      "phone": null,
      "email": null,
      "status": "active",
      "createdBy": null,
      "createdAt": "2025-05-17T14:21:54.428Z",
      "updatedAt": "2025-05-17T14:21:54.428Z",
      "memberships": [
        {
          "id": "0041dd38-83d6-41b9-b477-cfa0e2ff4bb5",
          "userId": "06maBdjJNiZ1IsgjAodIKi3FwNA2",
          "organizationId": "82e1e643-95f4-4b33-b726-c7c80fe173f3",
          "role": "member",
          "status": "active",
          "createdAt": "2025-05-17T14:21:56.660Z",
          "updatedAt": "2025-05-17T14:21:56.660Z",
          "user": {
            "id": "06maBdjJNiZ1IsgjAodIKi3FwNA2",
            "email": "userA@example.com",
            "name": "pep",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-17T14:21:56.549Z",
            "updatedAt": "2025-05-17T16:13:28.251Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "21e0d6a4-077a-4670-9f1a-06ad92ba85e1",
      "name": "OrgB",
      "type": "shelter",
      "description": null,
      "logo": null,
      "address": null,
      "phone": null,
      "email": null,
      "status": "active",
      "createdBy": null,
      "createdAt": "2025-05-17T14:21:54.538Z",
      "updatedAt": "2025-05-17T14:21:54.538Z",
      "memberships": [
        {
          "id": "e5e50054-7413-4afb-b07c-d0234f856d66",
          "userId": "o16KsHG4yrcFHBvvVmVwvlOl52i2",
          "organizationId": "21e0d6a4-077a-4670-9f1a-06ad92ba85e1",
          "role": "member",
          "status": "active",
          "createdAt": "2025-05-17T14:21:58.230Z",
          "updatedAt": "2025-05-17T14:21:58.230Z",
          "user": {
            "id": "o16KsHG4yrcFHBvvVmVwvlOl52i2",
            "email": "userB@example.com",
            "name": "paco",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-17T14:21:58.165Z",
            "updatedAt": "2025-05-17T16:13:28.251Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "ab351d60-f8ca-461a-afac-5215c39d255f",
      "name": "Test Org",
      "type": "shelter",
      "description": "Test organization",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "testorg@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T10:47:20.259Z",
      "updatedAt": "2025-05-27T10:47:20.259Z",
      "memberships": []
    },
    {
      "id": "6b43a2ec-ee62-4c18-a79c-918df326cdfb",
      "name": "Test Org for Memberships 1748342946011",
      "type": "shelter",
      "description": "Organization for membership testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "test-org-1748342946011@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T10:49:06.701Z",
      "updatedAt": "2025-05-27T10:49:06.701Z",
      "memberships": []
    },
    {
      "id": "061750f1-0a0f-4985-96d7-06853aa0c832",
      "name": "Test Org for Memberships 1748343078013",
      "type": "shelter",
      "description": "Organization for membership testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "test-org-1748343078013@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T10:51:18.791Z",
      "updatedAt": "2025-05-27T10:51:18.791Z",
      "memberships": [
        {
          "id": "daf7ffe0-591a-405e-9978-fa10e2cda985",
          "userId": "ZnPlhCOtheS4qIf0dwObFMLD9R63",
          "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
          "role": "member",
          "status": "active",
          "createdAt": "2025-05-27T10:51:20.910Z",
          "updatedAt": "2025-05-27T10:51:20.910Z",
          "user": {
            "id": "ZnPlhCOtheS4qIf0dwObFMLD9R63",
            "email": "invite-user-1748343079277@example.com",
            "name": "User to Invite",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T10:51:19.907Z",
            "updatedAt": "2025-05-27T10:51:19.907Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "4be42ed0-d5be-4088-9535-a9e69048d095",
          "userId": "bPDyewr5SoO38os92UiCXqoK6iU2",
          "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
          "role": "admin",
          "status": "active",
          "createdAt": "2025-05-27T10:51:25.457Z",
          "updatedAt": "2025-05-27T10:51:25.457Z",
          "user": {
            "id": "bPDyewr5SoO38os92UiCXqoK6iU2",
            "email": "admin-user-1748343083400@example.com",
            "name": "Admin User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T10:51:24.459Z",
            "updatedAt": "2025-05-27T10:51:24.459Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "e149efc0-1cd6-463f-a8bb-8f058b04c9ac",
          "userId": "K2CxTRq7jOOedSEliBmVL8pr0bJ2",
          "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
          "role": "manager",
          "status": "active",
          "createdAt": "2025-05-27T10:51:27.245Z",
          "updatedAt": "2025-05-27T10:51:27.245Z",
          "user": {
            "id": "K2CxTRq7jOOedSEliBmVL8pr0bJ2",
            "email": "manager-user-1748343085524@example.com",
            "name": "Manager User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T10:51:26.309Z",
            "updatedAt": "2025-05-27T10:51:26.309Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "0687df17-c725-4d77-88f6-aff5e40481c5",
          "userId": "r41Z5NtEpFO25hCwmS0GMimwOaF2",
          "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
          "role": "moderator",
          "status": "active",
          "createdAt": "2025-05-27T10:51:29.039Z",
          "updatedAt": "2025-05-27T10:51:29.039Z",
          "user": {
            "id": "r41Z5NtEpFO25hCwmS0GMimwOaF2",
            "email": "moderator-user-1748343087311@example.com",
            "name": "Moderator User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T10:51:28.146Z",
            "updatedAt": "2025-05-27T10:51:28.146Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "654c4b8f-36d7-449e-8d44-72d0d0e0b7e4",
          "userId": "bKAwZBrkOMeIGsphamRtYJ14T5G3",
          "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
          "role": "volunteer",
          "status": "active",
          "createdAt": "2025-05-27T10:51:31.145Z",
          "updatedAt": "2025-05-27T10:51:31.145Z",
          "user": {
            "id": "bKAwZBrkOMeIGsphamRtYJ14T5G3",
            "email": "volunteer-user-1748343089106@example.com",
            "name": "Volunteer User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T10:51:30.095Z",
            "updatedAt": "2025-05-27T10:51:30.095Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "3d490c66-9891-4b1e-845e-f39e2265da70",
          "userId": "jYmCDSKRnRQm1I6Kmq8PhbYeRqk2",
          "organizationId": "061750f1-0a0f-4985-96d7-06853aa0c832",
          "role": "observer",
          "status": "active",
          "createdAt": "2025-05-27T10:51:32.917Z",
          "updatedAt": "2025-05-27T10:51:32.917Z",
          "user": {
            "id": "jYmCDSKRnRQm1I6Kmq8PhbYeRqk2",
            "email": "observer-user-1748343091213@example.com",
            "name": "Observer User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T10:51:31.934Z",
            "updatedAt": "2025-05-27T10:51:31.934Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "c1727cea-3ddb-4a6f-ab02-4a68ac17aab1",
      "name": "Get Test Org 1748343595557",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748343595557@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T10:59:56.150Z",
      "updatedAt": "2025-05-27T10:59:56.150Z",
      "memberships": []
    },
    {
      "id": "7f4f6e51-38ff-4b0b-a213-a1542f983085",
      "name": "Update Test Org 1748343597386",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748343597386@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T10:59:57.913Z",
      "updatedAt": "2025-05-27T10:59:57.913Z",
      "memberships": []
    },
    {
      "id": "c5b4f2bd-614b-4b38-be18-8f3878544e66",
      "name": "Delete Test Org 1748343599127",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "delete-test-org-1748343599127@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T10:59:59.660Z",
      "updatedAt": "2025-05-27T10:59:59.660Z",
      "memberships": []
    },
    {
      "id": "b35d1342-5ecd-44fb-bc9a-5333425223c6",
      "name": "No Delete Perm Org 1748343600313",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748343600313@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:00:00.855Z",
      "updatedAt": "2025-05-27T11:00:00.855Z",
      "memberships": []
    },
    {
      "id": "19a316e7-e373-440e-be8f-1e87769f4314",
      "name": "Members Test Org 1748343602329",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "members-test-org-1748343602329@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:00:02.904Z",
      "updatedAt": "2025-05-27T11:00:02.904Z",
      "memberships": []
    },
    {
      "id": "74694883-fb36-4102-957e-521048338188",
      "name": "Org1 1748343607843",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org1-1748343607843@example.com",
      "status": "active",
      "createdBy": "yO1W4pz0TWO7nzjCnAeWn6IjSIo1",
      "createdAt": "2025-05-27T11:00:08.454Z",
      "updatedAt": "2025-05-27T11:00:08.454Z",
      "memberships": []
    },
    {
      "id": "13f856e8-c936-4fd2-8cf5-751bc01106c4",
      "name": "Org2 1748343608521",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org2-1748343608521@example.com",
      "status": "active",
      "createdBy": "VeeK8nRScLQc2oQGeGHqrCtKaNI2",
      "createdAt": "2025-05-27T11:00:09.069Z",
      "updatedAt": "2025-05-27T11:00:09.069Z",
      "memberships": []
    },
    {
      "id": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
      "name": "Test Org for Memberships 1748343693654",
      "type": "shelter",
      "description": "Organization for membership testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "test-org-1748343693654@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:01:34.240Z",
      "updatedAt": "2025-05-27T11:01:34.240Z",
      "memberships": [
        {
          "id": "571d0fdb-c97f-438e-b5b0-69e06dad4f81",
          "userId": "nDnRbSGUnvfgo7QAfXc123Sr1kL2",
          "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
          "role": "member",
          "status": "active",
          "createdAt": "2025-05-27T11:01:36.267Z",
          "updatedAt": "2025-05-27T11:01:36.267Z",
          "user": {
            "id": "nDnRbSGUnvfgo7QAfXc123Sr1kL2",
            "email": "invite-user-1748343694360@example.com",
            "name": "User to Invite",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T11:01:35.289Z",
            "updatedAt": "2025-05-27T11:01:35.289Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "9b98de34-72b3-4f04-b809-4120ed27adb7",
          "userId": "4YHNB5DTwydooES6fELF4Zsd9YF3",
          "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
          "role": "admin",
          "status": "active",
          "createdAt": "2025-05-27T11:01:40.996Z",
          "updatedAt": "2025-05-27T11:01:40.996Z",
          "user": {
            "id": "4YHNB5DTwydooES6fELF4Zsd9YF3",
            "email": "admin-user-1748343699052@example.com",
            "name": "Admin User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T11:01:39.896Z",
            "updatedAt": "2025-05-27T11:01:39.896Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "41dc7b44-0b8c-49b4-9b1b-b57dcc338879",
          "userId": "UMMSDS3eFaUcrUrFAYKjGI4kP9q2",
          "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
          "role": "manager",
          "status": "active",
          "createdAt": "2025-05-27T11:01:42.933Z",
          "updatedAt": "2025-05-27T11:01:42.933Z",
          "user": {
            "id": "UMMSDS3eFaUcrUrFAYKjGI4kP9q2",
            "email": "manager-user-1748343701062@example.com",
            "name": "Manager User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T11:01:41.942Z",
            "updatedAt": "2025-05-27T11:01:41.942Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "d0ed1ed9-2852-4703-8d3f-664e3edc4cdc",
          "userId": "Bblg9VybKrhrxk0B2naDjuCMCcv1",
          "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
          "role": "moderator",
          "status": "active",
          "createdAt": "2025-05-27T11:01:44.981Z",
          "updatedAt": "2025-05-27T11:01:44.981Z",
          "user": {
            "id": "Bblg9VybKrhrxk0B2naDjuCMCcv1",
            "email": "moderator-user-1748343702997@example.com",
            "name": "Moderator User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T11:01:43.992Z",
            "updatedAt": "2025-05-27T11:01:43.992Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "9ad91da6-ae32-44b5-b96f-94fe42b39a27",
          "userId": "BDMF289yRKfWbeZnGoOLffxxhIu1",
          "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
          "role": "volunteer",
          "status": "active",
          "createdAt": "2025-05-27T11:01:46.598Z",
          "updatedAt": "2025-05-27T11:01:46.598Z",
          "user": {
            "id": "BDMF289yRKfWbeZnGoOLffxxhIu1",
            "email": "volunteer-user-1748343705044@example.com",
            "name": "Volunteer User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T11:01:45.668Z",
            "updatedAt": "2025-05-27T11:01:45.668Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "e4deee94-abac-4e54-875b-e98fa099a443",
          "userId": "yaLc2pfO7AdOQu3gcpMmG3lLDBU2",
          "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
          "role": "observer",
          "status": "active",
          "createdAt": "2025-05-27T11:01:48.748Z",
          "updatedAt": "2025-05-27T11:01:48.748Z",
          "user": {
            "id": "yaLc2pfO7AdOQu3gcpMmG3lLDBU2",
            "email": "observer-user-1748343706661@example.com",
            "name": "Observer User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T11:01:47.805Z",
            "updatedAt": "2025-05-27T11:01:47.805Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "a5d1ccb1-0278-459d-8ce7-a1e5b2a7018d",
      "name": "Get Test Org 1748344124522",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748344124522@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:08:45.087Z",
      "updatedAt": "2025-05-27T11:08:45.087Z",
      "memberships": []
    },
    {
      "id": "e469a5d0-b6a9-4aaa-b999-bf326a045c9e",
      "name": "Update Test Org 1748344126333",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748344126333@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:08:46.883Z",
      "updatedAt": "2025-05-27T11:08:46.883Z",
      "memberships": []
    },
    {
      "id": "a312de65-e2f8-49fd-a0a0-0dc72428476f",
      "name": "Delete Test Org 1748344128046",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "delete-test-org-1748344128046@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:08:48.567Z",
      "updatedAt": "2025-05-27T11:08:48.567Z",
      "memberships": []
    },
    {
      "id": "0e7fedbc-deed-4680-8875-5530f34de47d",
      "name": "No Delete Perm Org 1748344129198",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748344129198@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:08:49.794Z",
      "updatedAt": "2025-05-27T11:08:49.794Z",
      "memberships": []
    },
    {
      "id": "539bf829-0999-488a-8c14-41ef2374201b",
      "name": "Members Test Org 1748344131280",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "members-test-org-1748344131280@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:08:51.847Z",
      "updatedAt": "2025-05-27T11:08:51.847Z",
      "memberships": []
    },
    {
      "id": "89691685-4f53-4103-928b-3aa2d2997e27",
      "name": "Org1 1748344136311",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org1-1748344136311@example.com",
      "status": "active",
      "createdBy": "UlJzcBT3r0WGHMQT7NjCJnQ6QDs2",
      "createdAt": "2025-05-27T11:08:56.858Z",
      "updatedAt": "2025-05-27T11:08:56.858Z",
      "memberships": []
    },
    {
      "id": "115bc04b-4aac-40d8-b6d8-268635af9b35",
      "name": "Org2 1748344136931",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org2-1748344136931@example.com",
      "status": "active",
      "createdBy": "CvtOLa3sgBc406d7MQpBpq3w9EL2",
      "createdAt": "2025-05-27T11:08:57.424Z",
      "updatedAt": "2025-05-27T11:08:57.424Z",
      "memberships": []
    },
    {
      "id": "6e1de6ba-2b47-43e8-a782-37fb115c5818",
      "name": "Get Test Org 1748344697404",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748344697404@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:18:17.986Z",
      "updatedAt": "2025-05-27T11:18:17.986Z",
      "memberships": []
    },
    {
      "id": "8eaca087-071b-4e85-8e5a-e6aa3032b9b8",
      "name": "Update Test Org 1748344699140",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748344699140@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:18:19.731Z",
      "updatedAt": "2025-05-27T11:18:19.731Z",
      "memberships": []
    },
    {
      "id": "54326112-2e61-4aba-a282-f631562b50d7",
      "name": "Conversations Test Org",
      "type": "shelter",
      "description": "Organization for conversation testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "conversations-test@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T23:00:03.058Z",
      "updatedAt": "2025-05-27T23:00:03.058Z",
      "memberships": []
    },
    {
      "id": "f11249a2-5483-4195-80a7-30ed47369a6a",
      "name": "Conversations Test Org 2",
      "type": "shelter",
      "description": "Second organization for conversation testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "conversations-test2@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T23:00:04.274Z",
      "updatedAt": "2025-05-27T23:00:04.274Z",
      "memberships": []
    },
    {
      "id": "635c02b3-d67d-4e12-b0da-83172e9e40f9",
      "name": "Delete Test Org 1748344700836",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "delete-test-org-1748344700836@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:18:21.372Z",
      "updatedAt": "2025-05-27T11:18:21.372Z",
      "memberships": []
    },
    {
      "id": "bd688d7a-9870-4973-a196-a8b856f66e40",
      "name": "No Delete Perm Org 1748344701996",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748344701996@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:18:22.499Z",
      "updatedAt": "2025-05-27T11:18:22.499Z",
      "memberships": []
    },
    {
      "id": "fcb7aa59-1684-4c67-bbf2-2f312cfde37b",
      "name": "Members Test Org 1748344703996",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "members-test-org-1748344703996@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:18:24.503Z",
      "updatedAt": "2025-05-27T11:18:24.503Z",
      "memberships": []
    },
    {
      "id": "661782af-a6dc-4ac8-986c-17a209a0cd97",
      "name": "Org1 1748344709123",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org1-1748344709123@example.com",
      "status": "active",
      "createdBy": "QIp7byhKKFbc1UhuzhSVxCo53eT2",
      "createdAt": "2025-05-27T11:18:29.667Z",
      "updatedAt": "2025-05-27T11:18:29.667Z",
      "memberships": []
    },
    {
      "id": "a4fb8168-cd3c-491e-bf0c-40f65cea82c3",
      "name": "Org2 1748344709726",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org2-1748344709726@example.com",
      "status": "active",
      "createdBy": "KfxdnbrTTEX0cwYhhS6xFc3Jb602",
      "createdAt": "2025-05-27T11:18:30.195Z",
      "updatedAt": "2025-05-27T11:18:30.195Z",
      "memberships": []
    },
    {
      "id": "bc40281c-24b2-4bd2-8338-1cea5f9ce6a1",
      "name": "Get Test Org 1748345098725",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748345098725@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:24:59.203Z",
      "updatedAt": "2025-05-27T11:24:59.203Z",
      "memberships": []
    },
    {
      "id": "9f6a76ec-269c-4ffe-b6b3-3a4abb92e736",
      "name": "Update Test Org 1748345100867",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748345100867@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:25:01.349Z",
      "updatedAt": "2025-05-27T11:25:01.349Z",
      "memberships": []
    },
    {
      "id": "32c1c2d1-c495-4eb6-b556-691847eb81c7",
      "name": "Delete Test Org 1748345102474",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "delete-test-org-1748345102474@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:25:02.962Z",
      "updatedAt": "2025-05-27T11:25:02.962Z",
      "memberships": []
    },
    {
      "id": "ef89b209-b771-4477-a784-832f8176cf2b",
      "name": "No Delete Perm Org 1748345103632",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748345103632@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:25:04.131Z",
      "updatedAt": "2025-05-27T11:25:04.131Z",
      "memberships": []
    },
    {
      "id": "fb2a6327-c1b0-4c19-8daa-0e209c8ed540",
      "name": "Members Test Org 1748345105521",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "members-test-org-1748345105521@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T11:25:06.083Z",
      "updatedAt": "2025-05-27T11:25:06.083Z",
      "memberships": []
    },
    {
      "id": "2db13a9b-bcab-4190-aaa4-f6a17e181e37",
      "name": "Org1 1748345111290",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org1-1748345111290@example.com",
      "status": "active",
      "createdBy": "xxMkEYxJhBYpF8aTFF8RxKLY9H63",
      "createdAt": "2025-05-27T11:25:11.808Z",
      "updatedAt": "2025-05-27T11:25:11.808Z",
      "memberships": []
    },
    {
      "id": "26c83c89-ecf9-4536-b807-e4f7c20b7e95",
      "name": "Org2 1748345111872",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org2-1748345111872@example.com",
      "status": "active",
      "createdBy": "ZxecqCzBVwQjz2sahpOauRRUpv33",
      "createdAt": "2025-05-27T11:25:12.422Z",
      "updatedAt": "2025-05-27T11:25:12.422Z",
      "memberships": []
    },
    {
      "id": "0e7b0539-ad61-4ab4-9f50-60f77b7ce177",
      "name": "Debug Test Org",
      "type": "shelter",
      "description": "Debug test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "debug@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T12:44:04.721Z",
      "updatedAt": "2025-05-27T12:44:04.721Z",
      "memberships": []
    },
    {
      "id": "604ad460-c0d3-4545-b343-bcdac04f8b83",
      "name": "Test Organization 1748350700161",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T12:58:20.859Z",
      "updatedAt": "2025-05-27T12:58:20.859Z",
      "memberships": []
    },
    {
      "id": "f647c561-57b4-44d3-99ce-f1858a2faa68",
      "name": "Test Organization 1748350774505",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T12:59:35.199Z",
      "updatedAt": "2025-05-27T12:59:35.199Z",
      "memberships": []
    },
    {
      "id": "fc3fb3d9-e7f0-4cb1-a32d-2c569b842f96",
      "name": "Test Organization 1748351010958",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:03:31.693Z",
      "updatedAt": "2025-05-27T13:03:31.693Z",
      "memberships": []
    },
    {
      "id": "345dd658-c90d-4df2-82cf-1a6deb2da8f8",
      "name": "User Org 1748351012163",
      "type": "shelter",
      "description": "Organization created by regular user",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "user-org-1748351012163@example.com",
      "status": "active",
      "createdBy": "lLz9pur7dATte9eeivTYOtHonyJ2",
      "createdAt": "2025-05-27T13:03:32.758Z",
      "updatedAt": "2025-05-27T13:03:32.758Z",
      "memberships": []
    },
    {
      "id": "dcd93901-ef19-4937-8b4f-b398fbad9651",
      "name": "Get Test Org 1748351012955",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748351012955@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:03:33.592Z",
      "updatedAt": "2025-05-27T13:03:33.592Z",
      "memberships": []
    },
    {
      "id": "516fd4fc-f8d3-4629-9b98-618d929128b3",
      "name": "Update Test Org 1748351014770",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748351014770@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:03:35.388Z",
      "updatedAt": "2025-05-27T13:03:35.388Z",
      "memberships": []
    },
    {
      "id": "8befa0e9-098d-403e-a4d8-8b92294d462c",
      "name": "Delete Test Org 1748351016758",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "delete-test-org-1748351016758@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:03:37.437Z",
      "updatedAt": "2025-05-27T13:03:37.437Z",
      "memberships": []
    },
    {
      "id": "97d199a0-eab1-4198-a7de-a7afe0ca5c4a",
      "name": "No Delete Perm Org 1748351018088",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748351018088@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:03:38.694Z",
      "updatedAt": "2025-05-27T13:03:38.694Z",
      "memberships": []
    },
    {
      "id": "1446a576-63c7-4d0f-84f4-5d1008688ed4",
      "name": "Members Test Org 1748351020177",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "members-test-org-1748351020177@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:03:40.749Z",
      "updatedAt": "2025-05-27T13:03:40.749Z",
      "memberships": []
    },
    {
      "id": "bb398be4-b9b3-4f0f-bde1-bb0e243db9e2",
      "name": "Org1 1748351024778",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org1-1748351024778@example.com",
      "status": "active",
      "createdBy": "x9VOQR1OhQW60YVQDj7e3nUiUsA3",
      "createdAt": "2025-05-27T13:03:45.352Z",
      "updatedAt": "2025-05-27T13:03:45.352Z",
      "memberships": []
    },
    {
      "id": "0a1f267f-9aea-4d87-b3f7-e4977b2ea332",
      "name": "Org2 1748351025407",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org2-1748351025407@example.com",
      "status": "active",
      "createdBy": "sSlHyz2uwbTkeYvGEsM2QkbvdtG3",
      "createdAt": "2025-05-27T13:03:45.965Z",
      "updatedAt": "2025-05-27T13:03:45.965Z",
      "memberships": []
    },
    {
      "id": "6db29d0d-a420-4861-9ede-e06d55e9f365",
      "name": "Update Test Org 1748351136093",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748351136093@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:05:36.848Z",
      "updatedAt": "2025-05-27T13:05:36.848Z",
      "memberships": []
    },
    {
      "id": "f75aa09e-61d7-4453-bec9-a405e0577174",
      "name": "Update Test Org 1748351541622",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748351541622@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:12:22.389Z",
      "updatedAt": "2025-05-27T13:12:22.389Z",
      "memberships": []
    },
    {
      "id": "30a27dd2-68fb-49c8-8721-6b818d1f259d",
      "name": "Test Organization 1748351847195",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:17:27.879Z",
      "updatedAt": "2025-05-27T13:17:27.879Z",
      "memberships": []
    },
    {
      "id": "c34662ef-108b-4dc6-a896-98cc7dc90616",
      "name": "User Org 1748351848400",
      "type": "shelter",
      "description": "Organization created by regular user",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "user-org-1748351848400@example.com",
      "status": "active",
      "createdBy": "1YWHDGv1EfPJgfYb8JXwuDrwAcG3",
      "createdAt": "2025-05-27T13:17:28.988Z",
      "updatedAt": "2025-05-27T13:17:28.988Z",
      "memberships": []
    },
    {
      "id": "b3c54848-f27a-4707-96c6-fb958478e2d1",
      "name": "Get Test Org 1748351849227",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748351849227@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:17:29.753Z",
      "updatedAt": "2025-05-27T13:17:29.753Z",
      "memberships": []
    },
    {
      "id": "d1e35060-53d3-4f1f-9975-822c46f9c10b",
      "name": "Update Test Org 1748351850991",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748351850991@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:17:31.512Z",
      "updatedAt": "2025-05-27T13:17:31.512Z",
      "memberships": []
    },
    {
      "id": "e4226839-dfa3-45c3-8a28-f86d86f74c2f",
      "name": "Delete Test Org 1748351852610",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "delete-test-org-1748351852610@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:17:33.185Z",
      "updatedAt": "2025-05-27T13:17:33.185Z",
      "memberships": []
    },
    {
      "id": "76ff7a48-57da-42e4-bfb1-07dbe7ef7faf",
      "name": "No Delete Perm Org 1748351853782",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748351853782@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:17:34.290Z",
      "updatedAt": "2025-05-27T13:17:34.290Z",
      "memberships": []
    },
    {
      "id": "d5d04563-70f7-41d8-af34-5aa5184cf367",
      "name": "Members Test Org 1748351855647",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "members-test-org-1748351855647@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T13:17:36.255Z",
      "updatedAt": "2025-05-27T13:17:36.255Z",
      "memberships": []
    },
    {
      "id": "f833dc2c-949e-4145-92df-262b8933d030",
      "name": "Org1 1748351860572",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org1-1748351860572@example.com",
      "status": "active",
      "createdBy": "lX4RjI4JRAQD2YLopUY9rIMF9Qk1",
      "createdAt": "2025-05-27T13:17:41.170Z",
      "updatedAt": "2025-05-27T13:17:41.170Z",
      "memberships": []
    },
    {
      "id": "b14c3138-a54c-4e66-b96b-f2fc4edf5961",
      "name": "Org2 1748351861256",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org2-1748351861256@example.com",
      "status": "active",
      "createdBy": "dcVYzB70FOP3tbiZSPwzBLakBk92",
      "createdAt": "2025-05-27T13:17:41.782Z",
      "updatedAt": "2025-05-27T13:17:41.782Z",
      "memberships": []
    },
    {
      "id": "57c05447-4dd1-47b9-8c1b-9861f36d27d5",
      "name": "Test Organization 1748376968176",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:16:08.844Z",
      "updatedAt": "2025-05-27T20:16:08.844Z",
      "memberships": []
    },
    {
      "id": "e7c9010e-326b-48df-9173-b9138a33ff60",
      "name": "User Org 1748376969480",
      "type": "shelter",
      "description": "Organization created by regular user",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "user-org-1748376969480@example.com",
      "status": "active",
      "createdBy": "xpv8yPh2UZRQ4pyZj4OTGO5l0th2",
      "createdAt": "2025-05-27T20:16:10.305Z",
      "updatedAt": "2025-05-27T20:16:10.305Z",
      "memberships": []
    },
    {
      "id": "2d0a4a32-8d9d-42bf-8538-635694bed719",
      "name": "Get Test Org 1748376970499",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748376970499@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:16:10.998Z",
      "updatedAt": "2025-05-27T20:16:10.998Z",
      "memberships": []
    },
    {
      "id": "8a50284d-d777-480d-b75d-9c6a5a9120f5",
      "name": "Update Test Org 1748376972236",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "update-test-org-1748376972236@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:16:12.741Z",
      "updatedAt": "2025-05-27T20:16:12.741Z",
      "memberships": []
    },
    {
      "id": "7ed19efd-10eb-4755-a315-bea4bf3abffc",
      "name": "Delete Test Org 1748376973871",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "delete-test-org-1748376973871@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:16:14.478Z",
      "updatedAt": "2025-05-27T20:16:14.478Z",
      "memberships": []
    },
    {
      "id": "68def88b-679e-40b5-8dc8-17bc4d595161",
      "name": "No Delete Perm Org 1748376975092",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748376975092@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:16:15.588Z",
      "updatedAt": "2025-05-27T20:16:15.588Z",
      "memberships": []
    },
    {
      "id": "d18f6a24-b9e6-4b04-8a1b-89142581ef0d",
      "name": "Members Test Org 1748376976916",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "members-test-org-1748376976916@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:16:17.447Z",
      "updatedAt": "2025-05-27T20:16:17.447Z",
      "memberships": []
    },
    {
      "id": "98b62416-8cf0-4b45-a376-0d13cf2de0ff",
      "name": "Org1 1748376981120",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org1-1748376981120@example.com",
      "status": "active",
      "createdBy": "xdWbtLhfWdcUhpni4PN38xt4AkA3",
      "createdAt": "2025-05-27T20:16:21.641Z",
      "updatedAt": "2025-05-27T20:16:21.641Z",
      "memberships": []
    },
    {
      "id": "754f65ad-7a27-4be6-8205-433b927f0150",
      "name": "Org2 1748376981698",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "org2-1748376981698@example.com",
      "status": "active",
      "createdBy": "CSHCi7NrOAUvUSSmxeDcdPRc49M2",
      "createdAt": "2025-05-27T20:16:22.244Z",
      "updatedAt": "2025-05-27T20:16:22.244Z",
      "memberships": []
    },
    {
      "id": "9b8fd0ea-abc2-4144-a2dd-126c87ec47aa",
      "name": "Integration Test Shelter 1748821765164",
      "type": "shelter",
      "description": "Shelter for integration testing",
      "logo": null,
      "address": "789 Integration Street",
      "phone": "+1555123456",
      "email": "integration-shelter-1748821765164@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:49:25.543Z",
      "updatedAt": "2025-06-01T23:49:25.543Z",
      "memberships": [
        {
          "id": "351bcea7-cbf8-4a25-b3d2-9c31e865cb13",
          "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
          "organizationId": "9b8fd0ea-abc2-4144-a2dd-126c87ec47aa",
          "role": "admin",
          "status": "active",
          "createdAt": "2025-06-01T23:49:26.607Z",
          "updatedAt": "2025-06-01T23:49:26.607Z",
          "user": {
            "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
            "email": "daniellovazzano@gmail.com",
            "name": "daniel",
            "role": "admin",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-17T19:43:00.000Z",
            "updatedAt": "2025-05-17T19:43:00.000Z",
            "isSuperAdmin": true
          }
        }
      ]
    },
    {
      "id": "6f8ef987-a520-409c-8d3d-da3e5cacaafb",
      "name": "Permissions Test Shelter 1748821771197",
      "type": "shelter",
      "description": "Shelter for permissions testing",
      "logo": null,
      "address": "321 Permissions Ave",
      "phone": "+1555987654",
      "email": "permissions-shelter-1748821771197@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:49:31.616Z",
      "updatedAt": "2025-06-01T23:49:31.616Z",
      "memberships": [
        {
          "id": "5f61e18b-096f-4c37-9f00-06c4bcac5dcb",
          "userId": "t8ZFQCaVB1UOG1R5YGcVdkvokTg1",
          "organizationId": "6f8ef987-a520-409c-8d3d-da3e5cacaafb",
          "role": "member",
          "status": "active",
          "createdAt": "2025-06-01T23:49:33.015Z",
          "updatedAt": "2025-06-01T23:49:33.015Z",
          "user": {
            "id": "t8ZFQCaVB1UOG1R5YGcVdkvokTg1",
            "email": "shelter-member-1748821771678@example.com",
            "name": "Shelter Member",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-06-01T23:49:32.127Z",
            "updatedAt": "2025-06-01T23:49:32.127Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "03101234-d274-47df-a4b2-556d14f3d30f",
      "name": "Multi Shelter 1 1748821773899",
      "type": "shelter",
      "description": "Shelter 1 for multi-org testing",
      "logo": null,
      "address": "400 Multi Street",
      "phone": "+1555123450",
      "email": "multi-shelter-0-1748821773899@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:49:34.276Z",
      "updatedAt": "2025-06-01T23:49:34.276Z",
      "memberships": []
    },
    {
      "id": "d326f87b-0594-4e22-b9cc-f0c017de6adf",
      "name": "Multi Shelter 2 1748821774331",
      "type": "shelter",
      "description": "Shelter 2 for multi-org testing",
      "logo": null,
      "address": "401 Multi Street",
      "phone": "+1555123451",
      "email": "multi-shelter-1-1748821774331@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:49:34.702Z",
      "updatedAt": "2025-06-01T23:49:34.702Z",
      "memberships": []
    },
    {
      "id": "889b2898-1343-4fad-be47-62e4b4ca8d15",
      "name": "Multi Shelter 3 1748821774757",
      "type": "shelter",
      "description": "Shelter 3 for multi-org testing",
      "logo": null,
      "address": "402 Multi Street",
      "phone": "+1555123452",
      "email": "multi-shelter-2-1748821774757@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:49:35.133Z",
      "updatedAt": "2025-06-01T23:49:35.133Z",
      "memberships": []
    },
    {
      "id": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
      "name": "Test Org for Memberships 1748380117908",
      "type": "shelter",
      "description": "Organization for membership testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "test-org-1748380117908@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T21:08:38.558Z",
      "updatedAt": "2025-05-27T21:08:38.558Z",
      "memberships": [
        {
          "id": "f26294f1-8234-4a38-97b9-d15ffb862468",
          "userId": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
          "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
          "role": "member",
          "status": "active",
          "createdAt": "2025-05-27T21:08:40.889Z",
          "updatedAt": "2025-05-27T21:08:40.889Z",
          "user": {
            "id": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
            "email": "invite-user-1748380119099@example.com",
            "name": "User to Invite",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:08:39.836Z",
            "updatedAt": "2025-05-27T21:08:39.836Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "1132d807-d4b6-41f7-bd2e-08b182d662bb",
          "userId": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
          "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
          "role": "admin",
          "status": "active",
          "createdAt": "2025-05-27T21:08:44.619Z",
          "updatedAt": "2025-05-27T21:08:44.619Z",
          "user": {
            "id": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
            "email": "admin-user-1748380123090@example.com",
            "name": "Admin User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:08:43.584Z",
            "updatedAt": "2025-05-27T21:08:43.584Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "e88af3ac-8993-4b57-9e24-3ec70bdcad71",
          "userId": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
          "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
          "role": "manager",
          "status": "active",
          "createdAt": "2025-05-27T21:08:46.151Z",
          "updatedAt": "2025-05-27T21:08:46.151Z",
          "user": {
            "id": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
            "email": "manager-user-1748380124683@example.com",
            "name": "Manager User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:08:45.195Z",
            "updatedAt": "2025-05-27T21:08:45.195Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "4c0bb516-10ef-421a-9289-a07ee70e0a35",
          "userId": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
          "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
          "role": "moderator",
          "status": "active",
          "createdAt": "2025-05-27T21:08:47.786Z",
          "updatedAt": "2025-05-27T21:08:47.786Z",
          "user": {
            "id": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
            "email": "moderator-user-1748380126214@example.com",
            "name": "Moderator User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:08:46.811Z",
            "updatedAt": "2025-05-27T21:08:46.811Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "bad8e4c0-1046-4faa-b9d0-fda80231fa2b",
          "userId": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
          "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
          "role": "volunteer",
          "status": "active",
          "createdAt": "2025-05-27T21:08:49.329Z",
          "updatedAt": "2025-05-27T21:08:49.329Z",
          "user": {
            "id": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
            "email": "volunteer-user-1748380127849@example.com",
            "name": "Volunteer User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:08:48.339Z",
            "updatedAt": "2025-05-27T21:08:48.339Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "55093882-0eba-4452-a65e-6f20f29a2a40",
          "userId": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
          "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
          "role": "observer",
          "status": "active",
          "createdAt": "2025-05-27T21:08:51.096Z",
          "updatedAt": "2025-05-27T21:08:51.096Z",
          "user": {
            "id": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
            "email": "observer-user-1748380129392@example.com",
            "name": "Observer User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T21:08:50.085Z",
            "updatedAt": "2025-05-27T21:08:50.085Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "60b28092-2321-4956-a8ae-7a6195bda9c6",
      "name": "Empty Type Organization",
      "type": "shelter",
      "description": "Organization with empty type",
      "logo": null,
      "address": "123 Empty Street",
      "phone": "+1234567890",
      "email": "empty-type@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:18:19.315Z",
      "updatedAt": "2025-06-01T23:18:19.315Z",
      "memberships": []
    },
    {
      "id": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
      "name": "Conversations Test Org",
      "type": "shelter",
      "description": "Organization for conversation testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "conversations-test@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T22:54:21.427Z",
      "updatedAt": "2025-05-27T22:54:21.427Z",
      "memberships": [
        {
          "id": "e64b46dc-d38e-4ddb-99a7-5dca4cf72e65",
          "userId": "jjK7dPkMTWW1qM2bVKjoVOFrqxC2",
          "organizationId": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
          "role": "member",
          "status": "active",
          "createdAt": "2025-05-27T22:54:27.435Z",
          "updatedAt": "2025-05-27T22:54:27.435Z",
          "user": {
            "id": "jjK7dPkMTWW1qM2bVKjoVOFrqxC2",
            "email": "conversations-regular-1748386462765@example.com",
            "name": "Regular User",
            "role": "user",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T22:54:23.570Z",
            "updatedAt": "2025-05-27T22:54:23.570Z",
            "isSuperAdmin": false
          }
        },
        {
          "id": "f6dc7414-d340-40a6-af8d-bf78cc99a7ae",
          "userId": "aWyJmXr8Vsh6HvxIzqO0lLIDfH22",
          "organizationId": "f2deed0b-eaab-42bc-98ea-b916804ea6d2",
          "role": "moderator",
          "status": "active",
          "createdAt": "2025-05-27T22:54:28.094Z",
          "updatedAt": "2025-05-27T22:54:28.094Z",
          "user": {
            "id": "aWyJmXr8Vsh6HvxIzqO0lLIDfH22",
            "email": "conversations-moderator-1748386464496@example.com",
            "name": "Moderator User",
            "role": "moderator",
            "status": "active",
            "profileImage": null,
            "phone": null,
            "address": null,
            "blockedUsers": [],
            "createdAt": "2025-05-27T22:54:25.348Z",
            "updatedAt": "2025-05-27T22:54:26.663Z",
            "isSuperAdmin": false
          }
        }
      ]
    },
    {
      "id": "67a112fa-85bf-49cf-a8b6-0dd94cfddded",
      "name": "Conversations Test Org 2",
      "type": "shelter",
      "description": "Second organization for conversation testing",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "conversations-test2@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T22:54:22.687Z",
      "updatedAt": "2025-05-27T22:54:22.687Z",
      "memberships": []
    }
  ]
}
```

**⏱️ Duration:** 725.7 ms  

</details>


---

### Test: Should maintain data isolation between organizations of same type
**Status:** ❌ FAILED  
**Duration:** 2.47s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (479.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "name": "Isolation Shelter 1 1748821775919",
    "type": "shelter",
    "description": "First shelter for isolation testing",
    "address": "100 Isolation St",
    "phone": "+1555111111",
    "email": "isolation-shelter-1-1748821775919@example.com"
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
    "content-length": "415",
    "etag": "W/\"19f-0gB8qNZtvHcMZcLeOs4mJCmmtT4\"",
    "date": "Sun, 01 Jun 2025 23:49:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4ba2dd8e-c76e-4ee7-b088-968dbbafc9fc",
    "name": "Isolation Shelter 1 1748821775919",
    "type": "shelter",
    "description": "First shelter for isolation testing",
    "logo": null,
    "address": "100 Isolation St",
    "phone": "+1555111111",
    "email": "isolation-shelter-1-1748821775919@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:36.339Z",
    "updatedAt": "2025-06-01T23:49:36.339Z"
  }
}
```

**⏱️ Duration:** 479.4 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (474.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "name": "Isolation Shelter 2 1748821776399",
    "type": "shelter",
    "description": "Second shelter for isolation testing",
    "address": "200 Isolation St",
    "phone": "+1555222222",
    "email": "isolation-shelter-2-1748821776399@example.com"
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
    "content-length": "416",
    "etag": "W/\"1a0-EN4TK/LRon+7KqKXbu1XLhREFe0\"",
    "date": "Sun, 01 Jun 2025 23:49:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "837a9518-52ae-4f86-b9fc-ebab14907651",
    "name": "Isolation Shelter 2 1748821776399",
    "type": "shelter",
    "description": "Second shelter for isolation testing",
    "logo": null,
    "address": "200 Isolation St",
    "phone": "+1555222222",
    "email": "isolation-shelter-2-1748821776399@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:36.808Z",
    "updatedAt": "2025-06-01T23:49:36.808Z"
  }
}
```

**⏱️ Duration:** 474.9 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (610.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "organizationId": "4ba2dd8e-c76e-4ee7-b088-968dbbafc9fc",
    "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "role": "admin"
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
    "content-length": "252",
    "etag": "W/\"fc-PwQGj/Y8VA0v3tad+5bwpqdNfPg\"",
    "date": "Sun, 01 Jun 2025 23:49:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6d2946ec-9a3b-4de5-9fb6-205da6bce086",
    "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "organizationId": "4ba2dd8e-c76e-4ee7-b088-968dbbafc9fc",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-06-01T23:49:37.426Z",
    "updatedAt": "2025-06-01T23:49:37.426Z"
  }
}
```

**⏱️ Duration:** 610.6 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (469.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "organizationId": "837a9518-52ae-4f86-b9fc-ebab14907651",
    "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "role": "admin"
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
    "content-length": "252",
    "etag": "W/\"fc-VSlMse9c16/PHBp7LXOKV9zFo2A\"",
    "date": "Sun, 01 Jun 2025 23:49:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "abdb6e99-4d9b-4b38-a753-875768bfb4ea",
    "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "organizationId": "837a9518-52ae-4f86-b9fc-ebab14907651",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-06-01T23:49:37.899Z",
    "updatedAt": "2025-06-01T23:49:37.899Z"
  }
}
```

**⏱️ Duration:** 469.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/pets (436.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q",
    "X-Organization-Id": "4ba2dd8e-c76e-4ee7-b088-968dbbafc9fc"
  },
  "data": {
    "name": "Shelter 1 Pet",
    "species": "dog",
    "status": "available"
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
    "content-length": "236",
    "etag": "W/\"ec-3MNeZtjRQCMuSl1sryjpNzR6Xl8\"",
    "date": "Sun, 01 Jun 2025 23:49:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Validation failed",
    "details": [
      {
        "field": "images",
        "message": "At least one image URL is required"
      },
      {
        "field": "images",
        "message": "Images must be an array of URLs"
      },
      {
        "field": "images",
        "message": "At least one image URL is required"
      }
    ]
  }
}
```

**⏱️ Duration:** 436.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Existing organizations without explicit type should default to shelter
**Status:** ❌ FAILED  
**Duration:** 0.53s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (528.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "name": "Legacy Org 1748821778395",
    "description": "Organization created without explicit type",
    "email": "legacy-org-1748821778395@example.com"
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
    "content-length": "168",
    "etag": "W/\"a8-pEgH0GithmksyRDvXqtGolJdmQY\"",
    "date": "Sun, 01 Jun 2025 23:49:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error creating organization",
    "details": "Type validation failed: address is required for Protectora de Animales, phone is required for Protectora de Animales"
  }
}
```

**⏱️ Duration:** 528.7 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should handle organization updates without breaking type field
**Status:** ✅ PASSED  
**Duration:** 1.40s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (511.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "name": "Update Test Org 1748821778927",
    "type": "shelter",
    "description": "Organization for update testing",
    "address": "999 Update Ave",
    "phone": "+1555999999",
    "email": "update-test-1748821778927@example.com"
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
    "content-length": "397",
    "etag": "W/\"18d-eCOcbGUA+dfoTqX37/md0Lu5gSs\"",
    "date": "Sun, 01 Jun 2025 23:49:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "29b51a92-e1bf-4354-80ac-1f10cd966875",
    "name": "Update Test Org 1748821778927",
    "type": "shelter",
    "description": "Organization for update testing",
    "logo": null,
    "address": "999 Update Ave",
    "phone": "+1555999999",
    "email": "update-test-1748821778927@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:39.383Z",
    "updatedAt": "2025-06-01T23:49:39.383Z"
  }
}
```

**⏱️ Duration:** 511.9 ms  

</details>

<details><summary>📡 Request #2: PUT http://localhost:3000/api/organizations/29b51a92-e1bf-4354-80ac-1f10cd966875 (890.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
  },
  "data": {
    "description": "Updated description"
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
    "content-length": "385",
    "etag": "W/\"181-priv1PsrFheitWJhrua7NYEPm3M\"",
    "date": "Sun, 01 Jun 2025 23:49:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "29b51a92-e1bf-4354-80ac-1f10cd966875",
    "name": "Update Test Org 1748821778927",
    "type": "shelter",
    "description": "Updated description",
    "logo": null,
    "address": "999 Update Ave",
    "phone": "+1555999999",
    "email": "update-test-1748821778927@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:49:39.383Z",
    "updatedAt": "2025-06-01T23:49:40.226Z"
  }
}
```

**⏱️ Duration:** 890.7 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/9b8fd0ea-abc2-4144-a2dd-126c87ec47aa (1031.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "date": "Sun, 01 Jun 2025 23:49:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1031.2 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/6f8ef987-a520-409c-8d3d-da3e5cacaafb (1009.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "date": "Sun, 01 Jun 2025 23:49:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1009.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/03101234-d274-47df-a4b2-556d14f3d30f (921.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "date": "Sun, 01 Jun 2025 23:49:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 921.9 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/d326f87b-0594-4e22-b9cc-f0c017de6adf (1031.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "date": "Sun, 01 Jun 2025 23:49:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1031.8 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/889b2898-1343-4fad-be47-62e4b4ca8d15 (902.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "date": "Sun, 01 Jun 2025 23:49:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 902.0 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/4ba2dd8e-c76e-4ee7-b088-968dbbafc9fc (977.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "date": "Sun, 01 Jun 2025 23:49:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 977.7 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/organizations/837a9518-52ae-4f86-b9fc-ebab14907651 (1006.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "date": "Sun, 01 Jun 2025 23:49:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1006.0 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/organizations/29b51a92-e1bf-4354-80ac-1f10cd966875 (897.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3NjMsImV4cCI6MTc0ODgyNTM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ewGZkr1D75QyMNZcr1aLgBV4R414SmJfggTP1-AAvhgG3AD2s1Ivez7-gWUNpj-383xb-JZIY8yUmj-vhzZR4KNj_K7DlR6fdW4EC8dBEmVjUJXzq03Ce4fYZgzAbOGkwfO-0lY_XsieTuIK-aU7iq-tJpWYXL7JuNyT0yjQI-S-7n6hHh4ueqfYGWJkpKaVsfB4qryD1uqstI3oiUTQEe9as9ez5AgwE9tD2q9mMgSiF6ZjUmEN6zqwuGYczZuT9ITeK1k9qBYnauYEr2E_9mfkkoH6ZQQ-ru-Y4h0x808RAvrVy9UnfHq0Iwj-cIX6h_QEaebm6QlXWdtepRG09Q"
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
    "date": "Sun, 01 Jun 2025 23:49:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 897.9 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (230.9ms)</summary>

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
    "etag": "W/\"640-h/vX3skMKfQ2BbsaVxStpOtGvsg\"",
    "date": "Sun, 01 Jun 2025 23:49:48 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3ODgsImV4cCI6MTc0ODgyNTM4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.J53wNPKHCvrXMCJvfLqC1UVhnfXklEV7EUsVWaX2dpAzzWkukXKjiaalE_5b-UQC4bb5x7STIXLF8ZVCopq9HDdl5Xo-X8Aa3BTlTTZuYmWU7LwG2N0rH0pia-aQTG2o3NKuqoNz3PYFLPJ08ebZLhGxQcCTRBuX6tOcwgJ9FjeMLSCb6eUIwSkNHRdkQzGKpPEIePH_WyIfKhTsB6XJ1apCE6LwDSne94W-dxhF3BysF0rrLqhw0hi3A7fDyWezUbk0MP5p6tqyawcIKWQbCutNikvXMWGyxglUJXnPqmNxkVKHwbGELLUcisU4lsDNMmklnMUxhBq85SM6v_h52g",
      "refreshToken": "AMf-vBykr6yw4xrZ0DNoUDi2a2Xz9C4VWL1SxskWon-mTfXVuwSVj5Tdtaw6ifPaUCEGdlEhmSqpmmQyCvWjyE70tPKStQJbd7e7SPmMzWh7_pdq8uTWX23rTYxu_sEksdUj9EXnHDx58UMfIAqbm4EIaSzj8KUBBm-0hD36nOInLV_9Qp7JIQWzQLU0Ur47rE_JjVRAlNSZseXnGeeynNUZoHtm2mpN9cOAp6heYavE0QeHV2wTVJ6TH7LT81BJjuxxKbPoQfRE",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 230.9 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/LkrUgJqHj9PxMFKaTVqUz1WRlpI2 (1039.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3ODgsImV4cCI6MTc0ODgyNTM4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.J53wNPKHCvrXMCJvfLqC1UVhnfXklEV7EUsVWaX2dpAzzWkukXKjiaalE_5b-UQC4bb5x7STIXLF8ZVCopq9HDdl5Xo-X8Aa3BTlTTZuYmWU7LwG2N0rH0pia-aQTG2o3NKuqoNz3PYFLPJ08ebZLhGxQcCTRBuX6tOcwgJ9FjeMLSCb6eUIwSkNHRdkQzGKpPEIePH_WyIfKhTsB6XJ1apCE6LwDSne94W-dxhF3BysF0rrLqhw0hi3A7fDyWezUbk0MP5p6tqyawcIKWQbCutNikvXMWGyxglUJXnPqmNxkVKHwbGELLUcisU4lsDNMmklnMUxhBq85SM6v_h52g"
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
    "date": "Sun, 01 Jun 2025 23:49:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1039.7 ms  

</details>

<details><summary>📡 Request #13: POST http://localhost:3000/api/auth/login (292.8ms)</summary>

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
    "etag": "W/\"640-VmgQgQDo4/tAhVoV9koUxgFYVEc\"",
    "date": "Sun, 01 Jun 2025 23:49:49 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3ODksImV4cCI6MTc0ODgyNTM4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N5T9g_eWnnOESkEz_qwStLBg71CxZ8qpdVftkuC-_J8BCJcUWx8IoRn854orFP4PrgfJ0WxAkIkHVsuKxBa_AOaZdHMK5B-SzIGXqY4oUpWcI23YoN-8LKCuluoJ3oXA-7x2_pbaUOqywtDcCMjcA0r1VdKa8IlOSyHd3XvZFBIRK0SGdOjh-kvlJkZS57sE76-I6cDKNWCbaWNVWAT84vOLYA03QwTpnjteT8roSANxK9fVFnvcLqno_XTD5OGCeuEQDnc1aH_Z5j5cDqqZPgcHhGVwNTwXRHdQFtGqz-NCHiVO0IFN0RbR3Jr_pC3_EqTHXsl_MfM29YdFkU5EWA",
      "refreshToken": "AMf-vBwzFoj9Gpc4_wBU8AJz_3Uz0fRK2BYB6mBtwhNO4IsrK_o5gR8ZqaG-KTI9O9vZ9DwQxA1yd9TSa9v7OEcvGOlF4PYGzABIm9VaSqjrsUYGdNvfaWnJzb0zdQlTNE3o5_XoQGKJ0p-L9tmqATG4NNhJ_AlDqQkIdCPCkVVIVGvnQA1BBqqutFWO1acS1n-kXMgSKrX9fF8xOc709FsurU0EBvAxsni6sv5-Bonbi6hVfcQC3Gms_yauhgS-zP6u4NqwJXQn",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 292.8 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/admin/users/t8ZFQCaVB1UOG1R5YGcVdkvokTg1 (1003.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNzg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE3ODksImV4cCI6MTc0ODgyNTM4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N5T9g_eWnnOESkEz_qwStLBg71CxZ8qpdVftkuC-_J8BCJcUWx8IoRn854orFP4PrgfJ0WxAkIkHVsuKxBa_AOaZdHMK5B-SzIGXqY4oUpWcI23YoN-8LKCuluoJ3oXA-7x2_pbaUOqywtDcCMjcA0r1VdKa8IlOSyHd3XvZFBIRK0SGdOjh-kvlJkZS57sE76-I6cDKNWCbaWNVWAT84vOLYA03QwTpnjteT8roSANxK9fVFnvcLqno_XTD5OGCeuEQDnc1aH_Z5j5cDqqZPgcHhGVwNTwXRHdQFtGqz-NCHiVO0IFN0RbR3Jr_pC3_EqTHXsl_MfM29YdFkU5EWA"
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
    "date": "Sun, 01 Jun 2025 23:49:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1003.2 ms  

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
- Total organizations created: 8
- Total pets created: 0
- Integration tests completed
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
