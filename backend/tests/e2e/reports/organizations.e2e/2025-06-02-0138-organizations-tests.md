# E2E Test Report: organizations-tests

**Date:** 6/2/2025  
**Time:** 1:38:00 AM  
**Duration:** 29.55s  
**Tests:** 17 total, 16 passed, 1 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 0.49s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.44s | Regular user should create organization successfully |
| ✅ Should create organization with explicit shelter type | PASSED | 0.54s | Should create organization with explicit shelter type |
| ✅ Should fail without authentication | PASSED | 0.08s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.47s | Admin should get organization by ID |
| ❌ Should fail with invalid organization ID | FAILED | 0.38s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.81s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.62s | Should fail without proper permissions |
| ✅ Admin should delete organization successfully | PASSED | 1.32s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.18s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.76s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.32s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.56s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.41s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 0.87s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 0.97s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (485.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Test Organization 1748821052953",
    "description": "Test organization for E2E testing",
    "address": "123 Test Street",
    "phone": "+1234567890",
    "email": "test@organization.com"
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
    "content-length": "386",
    "etag": "W/\"182-cfSXVwYQJ3Enq+1SjRI3Ou4K+A0\"",
    "date": "Sun, 01 Jun 2025 23:37:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5bd75093-5799-414d-98cd-14df2ecbad05",
    "name": "Test Organization 1748821052953",
    "type": "shelter",
    "description": "Test organization for E2E testing",
    "logo": null,
    "address": "123 Test Street",
    "phone": "+1234567890",
    "email": "test@organization.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:33.325Z",
    "updatedAt": "2025-06-01T23:37:33.325Z"
  }
}
```

**⏱️ Duration:** 485.9 ms  

</details>


---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (441.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA1MiwidXNlcl9pZCI6ImhLa2NwVG5kektNZEFEVDRlcWFyVUlxbjc1eDIiLCJzdWIiOiJoS2tjcFRuZHpLTWRBRFQ0ZXFhclVJcW43NXgyIiwiaWF0IjoxNzQ4ODIxMDUyLCJleHAiOjE3NDg4MjQ2NTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxMDUxNjYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTA1MTY2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SvrtvAVybBIF51lg5RYnBHBMhS4iQJ-vhEw4zcv1b4UR9A-orJPUWQo1sEU7jONrq-9_NvxKUBn3RYmdsYIrFHVhGwx0lEAvxWasiQ7Fge_FFMzJREzNpDJ1FMOd27LiXD_0fcd5FsUwoePtWcW4TJImB4O6G0qgAp516br96da_Vg5PYFsHi1XmUObhcYfODajmeydafWFaIrShP4FmRFZdgj9JQt-r5e6DXDNGY57NTycxKsjdPLaeZtjagagPu9TLDNiYRrKFUdplzkmNgUskzCBiIgGYOuJNVvaESP0IaM8bMSIOZ-O_AjqC1_WsiCEGnlQabUPl6DdBLYbUjg"
  },
  "data": {
    "name": "User Org 1748821053442",
    "description": "Organization created by regular user",
    "email": "user-org-1748821053442@example.com",
    "address": "789 User Street",
    "phone": "+1555666777"
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
    "content-length": "393",
    "etag": "W/\"189-t4wvoBdKzzVM7SPfWfxj8YpD87A\"",
    "date": "Sun, 01 Jun 2025 23:37:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1abfc7bd-4e4e-4031-b378-60388dcbe71f",
    "name": "User Org 1748821053442",
    "type": "shelter",
    "description": "Organization created by regular user",
    "logo": null,
    "address": "789 User Street",
    "phone": "+1555666777",
    "email": "user-org-1748821053442@example.com",
    "status": "active",
    "createdBy": "hKkcpTndzKMdADT4eqarUIqn75x2",
    "createdAt": "2025-06-01T23:37:33.815Z",
    "updatedAt": "2025-06-01T23:37:33.815Z"
  }
}
```

**⏱️ Duration:** 441.3 ms  

</details>


---

### Test: Should create organization with explicit shelter type
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (536.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Explicit Shelter 1748821053885",
    "type": "shelter",
    "description": "Shelter with explicit type",
    "address": "456 Shelter Avenue",
    "phone": "+1987654321",
    "email": "explicit-shelter-1748821053885@example.com"
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
    "content-length": "402",
    "etag": "W/\"192-uaJ/LdNc/JU7vjIZ1gve050xqZU\"",
    "date": "Sun, 01 Jun 2025 23:37:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f3704a0a-eb12-4bb5-86a3-aaffc396ae41",
    "name": "Explicit Shelter 1748821053885",
    "type": "shelter",
    "description": "Shelter with explicit type",
    "logo": null,
    "address": "456 Shelter Avenue",
    "phone": "+1987654321",
    "email": "explicit-shelter-1748821053885@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:34.358Z",
    "updatedAt": "2025-06-01T23:37:34.358Z"
  }
}
```

**⏱️ Duration:** 536.2 ms  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.08s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (82.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "name": "Unauthorized Organization",
    "description": "This should fail",
    "email": "unauthorized@example.com"
  }
}
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
    "date": "Sun, 01 Jun 2025 23:37:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 82.2 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (450.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Get Test Org 1748821054507",
    "description": "Organization for get tests",
    "email": "get-test-org-1748821054507@example.com",
    "address": "321 Get Test Avenue",
    "phone": "+1888999000"
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
    "content-length": "395",
    "etag": "W/\"18b-TGYdXXQe1ZzwtHQafkul0eOJwiQ\"",
    "date": "Sun, 01 Jun 2025 23:37:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "075e7a10-8b8b-4911-91b7-70987550758a",
    "name": "Get Test Org 1748821054507",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748821054507@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:34.883Z",
    "updatedAt": "2025-06-01T23:37:34.883Z"
  }
}
```

**⏱️ Duration:** 450.6 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/075e7a10-8b8b-4911-91b7-70987550758a (7.0ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:37:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 7.0 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (433.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Update Test Org 1748821055823",
    "description": "Organization for update tests",
    "email": "update-test-org-1748821055823@example.com",
    "address": "456 Update Test Boulevard",
    "phone": "+1777888999"
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
    "content-length": "410",
    "etag": "W/\"19a-XwuUvO/fGvxp3I0TsRATCzOVv6E\"",
    "date": "Sun, 01 Jun 2025 23:37:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9",
    "name": "Update Test Org 1748821055823",
    "type": "shelter",
    "description": "Organization for update tests",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+1777888999",
    "email": "update-test-org-1748821055823@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:36.195Z",
    "updatedAt": "2025-06-01T23:37:36.195Z"
  }
}
```

**⏱️ Duration:** 433.0 ms  

</details>


---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/075e7a10-8b8b-4911-91b7-70987550758a (472.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "content-length": "412",
    "etag": "W/\"19c-XOL00vdEU/JReZKXl64UyQ4Yi/k\"",
    "date": "Sun, 01 Jun 2025 23:37:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "075e7a10-8b8b-4911-91b7-70987550758a",
    "name": "Get Test Org 1748821054507",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748821054507@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:34.883Z",
    "updatedAt": "2025-06-01T23:37:34.883Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 472.4 ms  

</details>


---

### Test: Should fail with invalid organization ID
**Status:** ❌ FAILED  
**Duration:** 0.38s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m404[39m
Received: [31m400[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/invalid-id (375.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "content-length": "86",
    "etag": "W/\"56-c65qAc7poUVdeefNsXrlFxfQepU\"",
    "date": "Sun, 01 Jun 2025 23:37:35 GMT",
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

**⏱️ Duration:** 375.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (82.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "name": "Unauthorized Organization",
    "description": "This should fail",
    "email": "unauthorized@example.com"
  }
}
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
    "date": "Sun, 01 Jun 2025 23:37:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 82.2 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (450.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Get Test Org 1748821054507",
    "description": "Organization for get tests",
    "email": "get-test-org-1748821054507@example.com",
    "address": "321 Get Test Avenue",
    "phone": "+1888999000"
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
    "content-length": "395",
    "etag": "W/\"18b-TGYdXXQe1ZzwtHQafkul0eOJwiQ\"",
    "date": "Sun, 01 Jun 2025 23:37:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "075e7a10-8b8b-4911-91b7-70987550758a",
    "name": "Get Test Org 1748821054507",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748821054507@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:34.883Z",
    "updatedAt": "2025-06-01T23:37:34.883Z"
  }
}
```

**⏱️ Duration:** 450.6 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/075e7a10-8b8b-4911-91b7-70987550758a (7.0ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:37:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 7.0 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (433.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Update Test Org 1748821055823",
    "description": "Organization for update tests",
    "email": "update-test-org-1748821055823@example.com",
    "address": "456 Update Test Boulevard",
    "phone": "+1777888999"
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
    "content-length": "410",
    "etag": "W/\"19a-XwuUvO/fGvxp3I0TsRATCzOVv6E\"",
    "date": "Sun, 01 Jun 2025 23:37:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9",
    "name": "Update Test Org 1748821055823",
    "type": "shelter",
    "description": "Organization for update tests",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+1777888999",
    "email": "update-test-org-1748821055823@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:36.195Z",
    "updatedAt": "2025-06-01T23:37:36.195Z"
  }
}
```

**⏱️ Duration:** 433.0 ms  

</details>


---

### Test: Admin should update organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9 (804.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Updated Update Test Org 1748821055823",
    "description": "Updated description",
    "phone": "+9876543210"
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
    "content-length": "408",
    "etag": "W/\"198-gCWnXcqyMdztFempqQxSBIBmVlk\"",
    "date": "Sun, 01 Jun 2025 23:37:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9",
    "name": "Updated Update Test Org 1748821055823",
    "type": "shelter",
    "description": "Updated description",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+9876543210",
    "email": "update-test-org-1748821055823@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:36.195Z",
    "updatedAt": "2025-06-01T23:37:36.955Z"
  }
}
```

**⏱️ Duration:** 804.3 ms  

</details>


**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748821055823",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNm
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9 (615.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA1MiwidXNlcl9pZCI6ImhLa2NwVG5kektNZEFEVDRlcWFyVUlxbjc1eDIiLCJzdWIiOiJoS2tjcFRuZHpLTWRBRFQ0ZXFhclVJcW43NXgyIiwiaWF0IjoxNzQ4ODIxMDUyLCJleHAiOjE3NDg4MjQ2NTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxMDUxNjYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTA1MTY2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SvrtvAVybBIF51lg5RYnBHBMhS4iQJ-vhEw4zcv1b4UR9A-orJPUWQo1sEU7jONrq-9_NvxKUBn3RYmdsYIrFHVhGwx0lEAvxWasiQ7Fge_FFMzJREzNpDJ1FMOd27LiXD_0fcd5FsUwoePtWcW4TJImB4O6G0qgAp516br96da_Vg5PYFsHi1XmUObhcYfODajmeydafWFaIrShP4FmRFZdgj9JQt-r5e6DXDNGY57NTycxKsjdPLaeZtjagagPu9TLDNiYRrKFUdplzkmNgUskzCBiIgGYOuJNVvaESP0IaM8bMSIOZ-O_AjqC1_WsiCEGnlQabUPl6DdBLYbUjg"
  },
  "data": {
    "name": "Unauthorized update"
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
    "content-length": "96",
    "etag": "W/\"60-czVEzX5izrJt/PitFGhyGV49y9E\"",
    "date": "Sun, 01 Jun 2025 23:37:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 615.8 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (434.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Delete Test Org 1748821057689",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748821057689@example.com",
    "address": "789 Delete Test Street",
    "phone": "+1333444555"
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
    "content-length": "407",
    "etag": "W/\"197-WG2AVHiTGxfwnnHRztAkIJsvxeQ\"",
    "date": "Sun, 01 Jun 2025 23:37:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6edc2b8a-9729-4875-9574-255d57cdc2d3",
    "name": "Delete Test Org 1748821057689",
    "type": "shelter",
    "description": "Organization for delete tests",
    "logo": null,
    "address": "789 Delete Test Street",
    "phone": "+1333444555",
    "email": "delete-test-org-1748821057689@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:38.063Z",
    "updatedAt": "2025-06-01T23:37:38.063Z"
  }
}
```

**⏱️ Duration:** 434.2 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (484.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "No Delete Perm Org 1748821059448",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748821059448@example.com",
    "address": "999 Permission Test Lane",
    "phone": "+1666777888"
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
    "content-length": "418",
    "etag": "W/\"1a2-TWLEqdpTbFruIx3fVLHa78lC6ek\"",
    "date": "Sun, 01 Jun 2025 23:37:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2d99374c-54cd-4100-a41a-d7348d72d05e",
    "name": "No Delete Perm Org 1748821059448",
    "type": "shelter",
    "description": "Organization for permission test",
    "logo": null,
    "address": "999 Permission Test Lane",
    "phone": "+1666777888",
    "email": "no-delete-perm-org-1748821059448@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:39.871Z",
    "updatedAt": "2025-06-01T23:37:39.871Z"
  }
}
```

**⏱️ Duration:** 484.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/2d99374c-54cd-4100-a41a-d7348d72d05e (697.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA1MiwidXNlcl9pZCI6ImhLa2NwVG5kektNZEFEVDRlcWFyVUlxbjc1eDIiLCJzdWIiOiJoS2tjcFRuZHpLTWRBRFQ0ZXFhclVJcW43NXgyIiwiaWF0IjoxNzQ4ODIxMDUyLCJleHAiOjE3NDg4MjQ2NTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxMDUxNjYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTA1MTY2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SvrtvAVybBIF51lg5RYnBHBMhS4iQJ-vhEw4zcv1b4UR9A-orJPUWQo1sEU7jONrq-9_NvxKUBn3RYmdsYIrFHVhGwx0lEAvxWasiQ7Fge_FFMzJREzNpDJ1FMOd27LiXD_0fcd5FsUwoePtWcW4TJImB4O6G0qgAp516br96da_Vg5PYFsHi1XmUObhcYfODajmeydafWFaIrShP4FmRFZdgj9JQt-r5e6DXDNGY57NTycxKsjdPLaeZtjagagPu9TLDNiYRrKFUdplzkmNgUskzCBiIgGYOuJNVvaESP0IaM8bMSIOZ-O_AjqC1_WsiCEGnlQabUPl6DdBLYbUjg"
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
    "content-length": "96",
    "etag": "W/\"60-opi4QcEq9al+3VMZjMNH8wYSXjA\"",
    "date": "Sun, 01 Jun 2025 23:37:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 697.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should delete organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.32s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/organizations/6edc2b8a-9729-4875-9574-255d57cdc2d3 (856.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 856.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/6edc2b8a-9729-4875-9574-255d57cdc2d3 (465.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Sun, 01 Jun 2025 23:37:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 465.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.18s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9 (615.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA1MiwidXNlcl9pZCI6ImhLa2NwVG5kektNZEFEVDRlcWFyVUlxbjc1eDIiLCJzdWIiOiJoS2tjcFRuZHpLTWRBRFQ0ZXFhclVJcW43NXgyIiwiaWF0IjoxNzQ4ODIxMDUyLCJleHAiOjE3NDg4MjQ2NTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxMDUxNjYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTA1MTY2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SvrtvAVybBIF51lg5RYnBHBMhS4iQJ-vhEw4zcv1b4UR9A-orJPUWQo1sEU7jONrq-9_NvxKUBn3RYmdsYIrFHVhGwx0lEAvxWasiQ7Fge_FFMzJREzNpDJ1FMOd27LiXD_0fcd5FsUwoePtWcW4TJImB4O6G0qgAp516br96da_Vg5PYFsHi1XmUObhcYfODajmeydafWFaIrShP4FmRFZdgj9JQt-r5e6DXDNGY57NTycxKsjdPLaeZtjagagPu9TLDNiYRrKFUdplzkmNgUskzCBiIgGYOuJNVvaESP0IaM8bMSIOZ-O_AjqC1_WsiCEGnlQabUPl6DdBLYbUjg"
  },
  "data": {
    "name": "Unauthorized update"
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
    "content-length": "96",
    "etag": "W/\"60-czVEzX5izrJt/PitFGhyGV49y9E\"",
    "date": "Sun, 01 Jun 2025 23:37:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 615.8 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (434.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Delete Test Org 1748821057689",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748821057689@example.com",
    "address": "789 Delete Test Street",
    "phone": "+1333444555"
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
    "content-length": "407",
    "etag": "W/\"197-WG2AVHiTGxfwnnHRztAkIJsvxeQ\"",
    "date": "Sun, 01 Jun 2025 23:37:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6edc2b8a-9729-4875-9574-255d57cdc2d3",
    "name": "Delete Test Org 1748821057689",
    "type": "shelter",
    "description": "Organization for delete tests",
    "logo": null,
    "address": "789 Delete Test Street",
    "phone": "+1333444555",
    "email": "delete-test-org-1748821057689@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:38.063Z",
    "updatedAt": "2025-06-01T23:37:38.063Z"
  }
}
```

**⏱️ Duration:** 434.2 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (484.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "No Delete Perm Org 1748821059448",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748821059448@example.com",
    "address": "999 Permission Test Lane",
    "phone": "+1666777888"
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
    "content-length": "418",
    "etag": "W/\"1a2-TWLEqdpTbFruIx3fVLHa78lC6ek\"",
    "date": "Sun, 01 Jun 2025 23:37:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2d99374c-54cd-4100-a41a-d7348d72d05e",
    "name": "No Delete Perm Org 1748821059448",
    "type": "shelter",
    "description": "Organization for permission test",
    "logo": null,
    "address": "999 Permission Test Lane",
    "phone": "+1666777888",
    "email": "no-delete-perm-org-1748821059448@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:39.871Z",
    "updatedAt": "2025-06-01T23:37:39.871Z"
  }
}
```

**⏱️ Duration:** 484.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/2d99374c-54cd-4100-a41a-d7348d72d05e (697.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA1MiwidXNlcl9pZCI6ImhLa2NwVG5kektNZEFEVDRlcWFyVUlxbjc1eDIiLCJzdWIiOiJoS2tjcFRuZHpLTWRBRFQ0ZXFhclVJcW43NXgyIiwiaWF0IjoxNzQ4ODIxMDUyLCJleHAiOjE3NDg4MjQ2NTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxMDUxNjYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTA1MTY2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SvrtvAVybBIF51lg5RYnBHBMhS4iQJ-vhEw4zcv1b4UR9A-orJPUWQo1sEU7jONrq-9_NvxKUBn3RYmdsYIrFHVhGwx0lEAvxWasiQ7Fge_FFMzJREzNpDJ1FMOd27LiXD_0fcd5FsUwoePtWcW4TJImB4O6G0qgAp516br96da_Vg5PYFsHi1XmUObhcYfODajmeydafWFaIrShP4FmRFZdgj9JQt-r5e6DXDNGY57NTycxKsjdPLaeZtjagagPu9TLDNiYRrKFUdplzkmNgUskzCBiIgGYOuJNVvaESP0IaM8bMSIOZ-O_AjqC1_WsiCEGnlQabUPl6DdBLYbUjg"
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
    "content-length": "96",
    "etag": "W/\"60-opi4QcEq9al+3VMZjMNH8wYSXjA\"",
    "date": "Sun, 01 Jun 2025 23:37:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 697.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (756.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "content-length": "46868",
    "etag": "W/\"b714-g/d931FS0DU2QeUQBbl/8nu1ycg\"",
    "date": "Sun, 01 Jun 2025 23:37:41 GMT",
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
      "id": "5bd75093-5799-414d-98cd-14df2ecbad05",
      "name": "Test Organization 1748821052953",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:37:33.325Z",
      "updatedAt": "2025-06-01T23:37:33.325Z",
      "memberships": []
    },
    {
      "id": "1abfc7bd-4e4e-4031-b378-60388dcbe71f",
      "name": "User Org 1748821053442",
      "type": "shelter",
      "description": "Organization created by regular user",
      "logo": null,
      "address": "789 User Street",
      "phone": "+1555666777",
      "email": "user-org-1748821053442@example.com",
      "status": "active",
      "createdBy": "hKkcpTndzKMdADT4eqarUIqn75x2",
      "createdAt": "2025-06-01T23:37:33.815Z",
      "updatedAt": "2025-06-01T23:37:33.815Z",
      "memberships": []
    },
    {
      "id": "f3704a0a-eb12-4bb5-86a3-aaffc396ae41",
      "name": "Explicit Shelter 1748821053885",
      "type": "shelter",
      "description": "Shelter with explicit type",
      "logo": null,
      "address": "456 Shelter Avenue",
      "phone": "+1987654321",
      "email": "explicit-shelter-1748821053885@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:37:34.358Z",
      "updatedAt": "2025-06-01T23:37:34.358Z",
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
    },
    {
      "id": "075e7a10-8b8b-4911-91b7-70987550758a",
      "name": "Get Test Org 1748821054507",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": "321 Get Test Avenue",
      "phone": "+1888999000",
      "email": "get-test-org-1748821054507@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:37:34.883Z",
      "updatedAt": "2025-06-01T23:37:34.883Z",
      "memberships": []
    },
    {
      "id": "107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9",
      "name": "Updated Update Test Org 1748821055823",
      "type": "shelter",
      "description": "Updated description",
      "logo": null,
      "address": "456 Update Test Boulevard",
      "phone": "+9876543210",
      "email": "update-test-org-1748821055823@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:37:36.195Z",
      "updatedAt": "2025-06-01T23:37:36.955Z",
      "memberships": []
    },
    {
      "id": "2d99374c-54cd-4100-a41a-d7348d72d05e",
      "name": "No Delete Perm Org 1748821059448",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": "999 Permission Test Lane",
      "phone": "+1666777888",
      "email": "no-delete-perm-org-1748821059448@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:37:39.871Z",
      "updatedAt": "2025-06-01T23:37:39.871Z",
      "memberships": []
    }
  ]
}
```

**⏱️ Duration:** 756.9 ms  

</details>


---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.32s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (322.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA1MiwidXNlcl9pZCI6ImhLa2NwVG5kektNZEFEVDRlcWFyVUlxbjc1eDIiLCJzdWIiOiJoS2tjcFRuZHpLTWRBRFQ0ZXFhclVJcW43NXgyIiwiaWF0IjoxNzQ4ODIxMDUyLCJleHAiOjE3NDg4MjQ2NTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxMDUxNjYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTA1MTY2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SvrtvAVybBIF51lg5RYnBHBMhS4iQJ-vhEw4zcv1b4UR9A-orJPUWQo1sEU7jONrq-9_NvxKUBn3RYmdsYIrFHVhGwx0lEAvxWasiQ7Fge_FFMzJREzNpDJ1FMOd27LiXD_0fcd5FsUwoePtWcW4TJImB4O6G0qgAp516br96da_Vg5PYFsHi1XmUObhcYfODajmeydafWFaIrShP4FmRFZdgj9JQt-r5e6DXDNGY57NTycxKsjdPLaeZtjagagPu9TLDNiYRrKFUdplzkmNgUskzCBiIgGYOuJNVvaESP0IaM8bMSIOZ-O_AjqC1_WsiCEGnlQabUPl6DdBLYbUjg"
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
    "date": "Sun, 01 Jun 2025 23:37:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 322.7 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (498.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
  },
  "data": {
    "name": "Members Test Org 1748821061716",
    "description": "Organization for members tests",
    "email": "members-test-org-1748821061716@example.com",
    "address": "111 Members Test Road",
    "phone": "+1222333444"
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
    "content-length": "409",
    "etag": "W/\"199-TbWW6OYcBmF93Xo5UnhxpItTXFE\"",
    "date": "Sun, 01 Jun 2025 23:37:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c3f05597-6d34-4e8d-9659-57530ee89bb5",
    "name": "Members Test Org 1748821061716",
    "type": "shelter",
    "description": "Organization for members tests",
    "logo": null,
    "address": "111 Members Test Road",
    "phone": "+1222333444",
    "email": "members-test-org-1748821061716@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:37:42.153Z",
    "updatedAt": "2025-06-01T23:37:42.153Z"
  }
}
```

**⏱️ Duration:** 498.6 ms  

</details>


---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/c3f05597-6d34-4e8d-9659-57530ee89bb5/members (557.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 557.6 ms  

</details>


---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/c3f05597-6d34-4e8d-9659-57530ee89bb5/members (407.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA1MiwidXNlcl9pZCI6ImhLa2NwVG5kektNZEFEVDRlcWFyVUlxbjc1eDIiLCJzdWIiOiJoS2tjcFRuZHpLTWRBRFQ0ZXFhclVJcW43NXgyIiwiaWF0IjoxNzQ4ODIxMDUyLCJleHAiOjE3NDg4MjQ2NTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxMDUxNjYwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTA1MTY2MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SvrtvAVybBIF51lg5RYnBHBMhS4iQJ-vhEw4zcv1b4UR9A-orJPUWQo1sEU7jONrq-9_NvxKUBn3RYmdsYIrFHVhGwx0lEAvxWasiQ7Fge_FFMzJREzNpDJ1FMOd27LiXD_0fcd5FsUwoePtWcW4TJImB4O6G0qgAp516br96da_Vg5PYFsHi1XmUObhcYfODajmeydafWFaIrShP4FmRFZdgj9JQt-r5e6DXDNGY57NTycxKsjdPLaeZtjagagPu9TLDNiYRrKFUdplzkmNgUskzCBiIgGYOuJNVvaESP0IaM8bMSIOZ-O_AjqC1_WsiCEGnlQabUPl6DdBLYbUjg"
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
    "content-length": "76",
    "etag": "W/\"4c-OqbfHfdWcbxxXXQ0jATulU6eUJc\"",
    "date": "Sun, 01 Jun 2025 23:37:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. You must be a member to view organization members."
  }
}
```

**⏱️ Duration:** 407.4 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (930.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748821063184@example.com",
    "password": "TestPassword123!",
    "name": "Org1 Admin"
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
    "content-length": "1454",
    "etag": "W/\"5ae-eIBPhhIXC/8NtIirpepsKsDDI/A\"",
    "date": "Sun, 01 Jun 2025 23:37:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "ivHXU8BqQMamsDZD4YGZXPd7thU2",
      "email": "org1-admin-1748821063184@example.com",
      "name": "Org1 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA2MywidXNlcl9pZCI6Iml2SFhVOEJxUU1hbXNEWkQ0WUdaWFBkN3RoVTIiLCJzdWIiOiJpdkhYVThCcVFNYW1zRFpENFlHWlhQZDd0aFUyIiwiaWF0IjoxNzQ4ODIxMDYzLCJleHAiOjE3NDg4MjQ2NjMsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxMDYzMTg0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTA2MzE4NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ArbZqmssDTe5QWmi0H0QMI5K01ui4X6eQFqIR0t70LuUqzkrA6bmk0sS9Dn4H0QmyQRIyRkGZusBJkoiNxn9Rsc3DImkn0KIqiiBzGa3H1LjB7AvrmPAXbiZRuBH1qWL7iXdWLhHHbRYNdykzhS5yifmKfe1leSm5pTfms6hsQoZQjL0fObYu5iym7xmL7zySfPnB8dpTrHkrUkzMqC1I9ID2bf19DCPaS5-N_FnYfCTGdkB39cWcj4c1sgZyeC1w6JQHkH3BhwcZjXVhZJqK5LombVpXlqi1yf4bgXWrff00kPrzhn9rcpHKxCHP5faOn_loYOUiy2DCtus7_uqWQ",
      "refreshToken": "AMf-vByCWtltEmEfihXJS8mc00Wv7Za4PqkfzXvAqwGVEN6JWDRlmZh8sZjgbdYbBXsx_g2X--BBTPJE9HRtCUzLVeflrHn0Q2yyGbdAR-OouPdFavDFF6l9nLIfcOgRnK2VApApz1iFmt9N26CEJqlm8pzcJ6Qxf-PGyVVLRdklkkR6Qj1u_ezffhFqhhtE1XE4T76mo-n2z2MuiKAyWKr49BSs4WXgUhZFOqHTYPI4XNFNIAWgk6k",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 930.3 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (922.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748821064114@example.com",
    "password": "TestPassword123!",
    "name": "Org2 Admin"
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
    "content-length": "1454",
    "etag": "W/\"5ae-Hp+d6lFQ2vhvBlWGxENtzd1Refo\"",
    "date": "Sun, 01 Jun 2025 23:37:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "BeOMm8lz4LRvik10KNlZCmFoGi12",
      "email": "org2-admin-1748821064114@example.com",
      "name": "Org2 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA2NCwidXNlcl9pZCI6IkJlT01tOGx6NExSdmlrMTBLTmxaQ21Gb0dpMTIiLCJzdWIiOiJCZU9NbThsejRMUnZpazEwS05sWkNtRm9HaTEyIiwiaWF0IjoxNzQ4ODIxMDY0LCJleHAiOjE3NDg4MjQ2NjQsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIxMDY0MTE0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMTA2NDExNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NWiwepPYtkrxj0-OWbx5gjyM_nI_r-zC_4vWJdkR1Agg_ylNyTCoR1QvpCCuFpIzgde4Jgo4nDXUsJb1z8G-4ptswhO5LkO9z4NGu2tLQFkJwytptp5BKMPNaEE_IbfrG-SVFWJXHIAShQQFHcqaaUBMDqlPPjD6iQQVqklUMWWsorj0RFCUc48WbD60Uex8apBUhkf3DDisQgO_GzN9N7k4eHCvxa5KTKEd2onXUvhzAAIVmEkSAwksyLtlvs2Ss_3Sead87U0zww2OrYk0i4MXK1a52IeDEyDb4vsK2yZzpeW2pWMMlL4C3np2F0Dfoqu7euIHQxJ35QPhO59XpQ",
      "refreshToken": "AMf-vBxyzuE3TugAqV1xehl4jRbtSkeyw05KKrfNFH-5np3YBOZ2Xom7y8aWR8eqtlDUifoUhBlxf0drCfwY3FCT627pIJIgu02V4sce-bwdfeA9DA1iDqwk_S8ILQMnkX0BvDPvXHjrAICVJbSEwPWg-22jng7iUvLnlotJKAYVjCWNOB9Y9x9wBNsX7OoSrmVLsDqntSWp_xfdc34SIQRp4H5j95GT9PEWFT9BOXuDC_GaEOIEKLY",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 922.3 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (311.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748821063184@example.com",
    "password": "TestPassword123!"
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
    "content-length": "1410",
    "etag": "W/\"582-wMXyGsAEDkp1emWQ7JLqQHFw7RA\"",
    "date": "Sun, 01 Jun 2025 23:37:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "ivHXU8BqQMamsDZD4YGZXPd7thU2",
      "email": "org1-admin-1748821063184@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA2NSwidXNlcl9pZCI6Iml2SFhVOEJxUU1hbXNEWkQ0WUdaWFBkN3RoVTIiLCJzdWIiOiJpdkhYVThCcVFNYW1zRFpENFlHWlhQZDd0aFUyIiwiaWF0IjoxNzQ4ODIxMDY1LCJleHAiOjE3NDg4MjQ2NjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxMDYzMTg0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTA2MzE4NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eHWJ1wyIkv6cWuMYW70YOtAsTpTVmQ0X5rfbDnL084Ao3MeXqRBItNnqXGlzc3jriV6c2Gmk8LQpXdSqoHePoX6wGDupWIvVKE3d30kyS0XSDNlY6lJH-H346rGLo_Caz3F3X4jha9f0yEtt7htCEDPkIFVrxWrFnhkaBxvIBdWAr5MaSoQ-c-dIR6yglWTvxuwPxWmnpZ5SVmNVdMKrKnfDMA19_Jc5tcxGfY0QPj_9UD-571zwzWhSCAtVcmlYgcbI2a1DoCDYmUCtyPfiIBVVADCNOJoQhbXf7ssfDEz5hLOSvM77XR0JlxKwqdcTW3t8zXXhVS1WkZRvdtuNwg",
      "refreshToken": "AMf-vBz4DpZ8SHFFnRro92TeGkV9fq1LuMB8SA1dac1k1iNokyPWQ3xAtGZVgL2OWJ2b-QqBddaQST82cJQoDA3wFKP_Ne3WaZ9cxPHe7Ljzsyk3iim6eW0YvF-jUoFXSdG-KFVAUUHehu0GC3eQCQYNlxSHWjtUQyZ8YCEc3sz-aQyNy4WKxCK-bOb-9TSSnE2y-a2xcqqLvAaZVgMp5LzlOQYL0lClqOCvnwIb57hmG8tm0kROcKc",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 311.9 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (352.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748821064114@example.com",
    "password": "TestPassword123!"
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
    "content-length": "1410",
    "etag": "W/\"582-zgFSen9lQCJ4OgN8VmZRz2BCZJI\"",
    "date": "Sun, 01 Jun 2025 23:37:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "BeOMm8lz4LRvik10KNlZCmFoGi12",
      "email": "org2-admin-1748821064114@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA2NSwidXNlcl9pZCI6IkJlT01tOGx6NExSdmlrMTBLTmxaQ21Gb0dpMTIiLCJzdWIiOiJCZU9NbThsejRMUnZpazEwS05sWkNtRm9HaTEyIiwiaWF0IjoxNzQ4ODIxMDY1LCJleHAiOjE3NDg4MjQ2NjUsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIxMDY0MTE0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMTA2NDExNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XIhXEIhFvuNbytE2BnKi6dM1rLlLH9Geo_PX_QVloOTvLMBlPfmkCpGeP57wPTWlHdbVATlBKFhlE-Z4LAXP5mcclyzNSfrSuF9h9q_nC2eTP12GEwNseLpHc6UygCyIt5T_4IhOHHmuNWc1z8px7-9Bgmvc__9p2tiDbb4bnahFL0mzwSARwqGfBZfDxBzpjnerMtJtLCDeRvpwpRLmLE5i9U5Y9OiUKQJ82YODZdpgEJ0efPMRYsRfiReQ6Mr8M5KuRjc964BzCorGEgCwnfmZ1IYLxchY0plw248MoPvar7FPih1BATFLzIiDEgFxn3v0t3INbEPD2lLrrGVbWA",
      "refreshToken": "AMf-vByS3AZIYD7tFrAiOhN1kE02yXfj4fjWOdeHhbv102ZXYzH99S5c8iyPBHBYVWaQHwk9WviofONT-ZXxMCkbHWGj2oujajVCRMhE906G_o9bj3lfVs7_Jersx9k7VMprglT0Esni10WTZgRuTRD5yNF4gFsmeB-ooWETPtPvMNPMiMZOSmDYTX9X3tTHYlzb5Q3dzt6fqTRHv7RbbkiEBivDnJFCGeecaS8OzpkhADuYipBxdF0",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 352.2 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/organizations (461.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA2NSwidXNlcl9pZCI6Iml2SFhVOEJxUU1hbXNEWkQ0WUdaWFBkN3RoVTIiLCJzdWIiOiJpdkhYVThCcVFNYW1zRFpENFlHWlhQZDd0aFUyIiwiaWF0IjoxNzQ4ODIxMDY1LCJleHAiOjE3NDg4MjQ2NjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxMDYzMTg0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTA2MzE4NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eHWJ1wyIkv6cWuMYW70YOtAsTpTVmQ0X5rfbDnL084Ao3MeXqRBItNnqXGlzc3jriV6c2Gmk8LQpXdSqoHePoX6wGDupWIvVKE3d30kyS0XSDNlY6lJH-H346rGLo_Caz3F3X4jha9f0yEtt7htCEDPkIFVrxWrFnhkaBxvIBdWAr5MaSoQ-c-dIR6yglWTvxuwPxWmnpZ5SVmNVdMKrKnfDMA19_Jc5tcxGfY0QPj_9UD-571zwzWhSCAtVcmlYgcbI2a1DoCDYmUCtyPfiIBVVADCNOJoQhbXf7ssfDEz5hLOSvM77XR0JlxKwqdcTW3t8zXXhVS1WkZRvdtuNwg"
  },
  "data": {
    "name": "Org1 1748821065701",
    "description": "First organization for multitenant test",
    "email": "org1-1748821065701@example.com",
    "address": "123 Org1 Street",
    "phone": "+1111222333"
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
    "content-length": "388",
    "etag": "W/\"184-rkDSKE3aYazvjrknUUEzFbpe9+k\"",
    "date": "Sun, 01 Jun 2025 23:37:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "513fcc64-1349-4767-871f-3b646b9b14fa",
    "name": "Org1 1748821065701",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748821065701@example.com",
    "status": "active",
    "createdBy": "ivHXU8BqQMamsDZD4YGZXPd7thU2",
    "createdAt": "2025-06-01T23:37:46.102Z",
    "updatedAt": "2025-06-01T23:37:46.102Z"
  }
}
```

**⏱️ Duration:** 461.6 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/organizations (409.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA2NSwidXNlcl9pZCI6IkJlT01tOGx6NExSdmlrMTBLTmxaQ21Gb0dpMTIiLCJzdWIiOiJCZU9NbThsejRMUnZpazEwS05sWkNtRm9HaTEyIiwiaWF0IjoxNzQ4ODIxMDY1LCJleHAiOjE3NDg4MjQ2NjUsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIxMDY0MTE0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMTA2NDExNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XIhXEIhFvuNbytE2BnKi6dM1rLlLH9Geo_PX_QVloOTvLMBlPfmkCpGeP57wPTWlHdbVATlBKFhlE-Z4LAXP5mcclyzNSfrSuF9h9q_nC2eTP12GEwNseLpHc6UygCyIt5T_4IhOHHmuNWc1z8px7-9Bgmvc__9p2tiDbb4bnahFL0mzwSARwqGfBZfDxBzpjnerMtJtLCDeRvpwpRLmLE5i9U5Y9OiUKQJ82YODZdpgEJ0efPMRYsRfiReQ6Mr8M5KuRjc964BzCorGEgCwnfmZ1IYLxchY0plw248MoPvar7FPih1BATFLzIiDEgFxn3v0t3INbEPD2lLrrGVbWA"
  },
  "data": {
    "name": "Org2 1748821066162",
    "description": "Second organization for multitenant test",
    "email": "org2-1748821066162@example.com",
    "address": "456 Org2 Avenue",
    "phone": "+1444555666"
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
    "content-length": "389",
    "etag": "W/\"185-Kv3zfXExQFBMkjILfFnXGNQp2ik\"",
    "date": "Sun, 01 Jun 2025 23:37:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a35843c8-9a76-4347-ac04-540af4ca60e2",
    "name": "Org2 1748821066162",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748821066162@example.com",
    "status": "active",
    "createdBy": "BeOMm8lz4LRvik10KNlZCmFoGi12",
    "createdAt": "2025-06-01T23:37:46.511Z",
    "updatedAt": "2025-06-01T23:37:46.511Z"
  }
}
```

**⏱️ Duration:** 409.1 ms  

</details>


---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 0.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/513fcc64-1349-4767-871f-3b646b9b14fa (429.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA2NSwidXNlcl9pZCI6Iml2SFhVOEJxUU1hbXNEWkQ0WUdaWFBkN3RoVTIiLCJzdWIiOiJpdkhYVThCcVFNYW1zRFpENFlHWlhQZDd0aFUyIiwiaWF0IjoxNzQ4ODIxMDY1LCJleHAiOjE3NDg4MjQ2NjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxMDYzMTg0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTA2MzE4NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eHWJ1wyIkv6cWuMYW70YOtAsTpTVmQ0X5rfbDnL084Ao3MeXqRBItNnqXGlzc3jriV6c2Gmk8LQpXdSqoHePoX6wGDupWIvVKE3d30kyS0XSDNlY6lJH-H346rGLo_Caz3F3X4jha9f0yEtt7htCEDPkIFVrxWrFnhkaBxvIBdWAr5MaSoQ-c-dIR6yglWTvxuwPxWmnpZ5SVmNVdMKrKnfDMA19_Jc5tcxGfY0QPj_9UD-571zwzWhSCAtVcmlYgcbI2a1DoCDYmUCtyPfiIBVVADCNOJoQhbXf7ssfDEz5hLOSvM77XR0JlxKwqdcTW3t8zXXhVS1WkZRvdtuNwg"
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
    "content-length": "405",
    "etag": "W/\"195-t1sS6exOukw2zB8CE0HbRG7vE50\"",
    "date": "Sun, 01 Jun 2025 23:37:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "513fcc64-1349-4767-871f-3b646b9b14fa",
    "name": "Org1 1748821065701",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748821065701@example.com",
    "status": "active",
    "createdBy": "ivHXU8BqQMamsDZD4YGZXPd7thU2",
    "createdAt": "2025-06-01T23:37:46.102Z",
    "updatedAt": "2025-06-01T23:37:46.102Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 429.6 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/a35843c8-9a76-4347-ac04-540af4ca60e2 (438.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTA2NSwidXNlcl9pZCI6Iml2SFhVOEJxUU1hbXNEWkQ0WUdaWFBkN3RoVTIiLCJzdWIiOiJpdkhYVThCcVFNYW1zRFpENFlHWlhQZDd0aFUyIiwiaWF0IjoxNzQ4ODIxMDY1LCJleHAiOjE3NDg4MjQ2NjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxMDYzMTg0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTA2MzE4NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eHWJ1wyIkv6cWuMYW70YOtAsTpTVmQ0X5rfbDnL084Ao3MeXqRBItNnqXGlzc3jriV6c2Gmk8LQpXdSqoHePoX6wGDupWIvVKE3d30kyS0XSDNlY6lJH-H346rGLo_Caz3F3X4jha9f0yEtt7htCEDPkIFVrxWrFnhkaBxvIBdWAr5MaSoQ-c-dIR6yglWTvxuwPxWmnpZ5SVmNVdMKrKnfDMA19_Jc5tcxGfY0QPj_9UD-571zwzWhSCAtVcmlYgcbI2a1DoCDYmUCtyPfiIBVVADCNOJoQhbXf7ssfDEz5hLOSvM77XR0JlxKwqdcTW3t8zXXhVS1WkZRvdtuNwg"
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
    "content-length": "406",
    "etag": "W/\"196-Zgy+Z+O3g7vYvZpxJY65Jw76qis\"",
    "date": "Sun, 01 Jun 2025 23:37:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a35843c8-9a76-4347-ac04-540af4ca60e2",
    "name": "Org2 1748821066162",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748821066162@example.com",
    "status": "active",
    "createdBy": "BeOMm8lz4LRvik10KNlZCmFoGi12",
    "createdAt": "2025-06-01T23:37:46.511Z",
    "updatedAt": "2025-06-01T23:37:46.511Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 438.2 ms  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 0.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/513fcc64-1349-4767-871f-3b646b9b14fa (470.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "content-length": "405",
    "etag": "W/\"195-t1sS6exOukw2zB8CE0HbRG7vE50\"",
    "date": "Sun, 01 Jun 2025 23:37:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "513fcc64-1349-4767-871f-3b646b9b14fa",
    "name": "Org1 1748821065701",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748821065701@example.com",
    "status": "active",
    "createdBy": "ivHXU8BqQMamsDZD4YGZXPd7thU2",
    "createdAt": "2025-06-01T23:37:46.102Z",
    "updatedAt": "2025-06-01T23:37:46.102Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 470.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/a35843c8-9a76-4347-ac04-540af4ca60e2 (494.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "content-length": "406",
    "etag": "W/\"196-Zgy+Z+O3g7vYvZpxJY65Jw76qis\"",
    "date": "Sun, 01 Jun 2025 23:37:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a35843c8-9a76-4347-ac04-540af4ca60e2",
    "name": "Org2 1748821066162",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748821066162@example.com",
    "status": "active",
    "createdBy": "BeOMm8lz4LRvik10KNlZCmFoGi12",
    "createdAt": "2025-06-01T23:37:46.511Z",
    "updatedAt": "2025-06-01T23:37:46.511Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 494.9 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/5bd75093-5799-414d-98cd-14df2ecbad05 (938.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 938.2 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/1abfc7bd-4e4e-4031-b378-60388dcbe71f (904.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 904.8 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/f3704a0a-eb12-4bb5-86a3-aaffc396ae41 (841.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 841.3 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/075e7a10-8b8b-4911-91b7-70987550758a (838.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 838.3 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/107ae4d1-1bdd-4589-9eeb-c8a313cd0ec9 (993.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 993.5 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/2d99374c-54cd-4100-a41a-d7348d72d05e (847.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 847.3 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/organizations/c3f05597-6d34-4e8d-9659-57530ee89bb5 (889.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 889.1 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/organizations/513fcc64-1349-4767-871f-3b646b9b14fa (1213.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1213.9 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/a35843c8-9a76-4347-ac04-540af4ca60e2 (877.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNTEsImV4cCI6MTc0ODgyNDY1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oBGYfiYt3C98idOUUqg2vkZ7N5jw2ijdJeyzmpC8C3-fXvHNzndeERhkPOroLqCL_xGVjKrI4ZH8Rtg9PPS72qjjRqzfepR2uqRr_i4GDujbn6X21lCzUKmkmIb2aYNFzAKWS0uM5heeFdzb9vgH9RmkbG3PdMca-8hSMiJMwQyllsRmB_pEUzzesjTCWhyDTLmZ3ICFjM41BmDxMkJNHZ085ZFcg--gHT_-BNR6GB-yzUL3xVk28LiMngwJqMyxT9HJDu-arV62cZn7L3tNRgbsFWyFv9b5SYd9K8GYKihNeK7ye4QvTzAO5kQ4FZHccOdY8p8XZS7MXdVU0ooazQ"
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
    "date": "Sun, 01 Jun 2025 23:37:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 877.3 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (290.1ms)</summary>

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
    "etag": "W/\"640-5MNdbfQijw8SeOOsx2k82eeCMSM\"",
    "date": "Sun, 01 Jun 2025 23:37:57 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDc2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNzYsImV4cCI6MTc0ODgyNDY3NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PvdqxEwSnGywwtYDz6triPsRlJS1j328tSpL50Wrc2qb6bzX7FGZDREoADZoQ8cgUNgJzrMgPYjAGe8bQitx4PViaCws1jlX5yxKiFtwtToZ1Rf-TsLL0GtlCydYg-25r-uqoauq4DOVksZbRJzOZcYK1wUxkSeUlFXTBwrFLfCE3IfDOREbDawLxC3TgLuLOqmxfd9zp9tqgSSU8RhefH3SS3EgsCO0_khN5vUPFGJacjTW8DjT2od0RI7yNzSyFo9g31Kd5Ppsd0HUdbA8ZLcemKmBunN5Mi7MAJMk2txW_HHPwQpCd-5tQ7jGHTGHlOSzjbIeytl0gRDCll25dQ",
      "refreshToken": "AMf-vBwQU7Jh8y6q0ruZwBL6_ZMGA3mn_puS2roDalrEYrnb4fsW-vnbJM_NX0X9txnX5CC3_x_aNt8dlNLCMRaLsfhynW9paDa3sBILLappniA1r6qJHL0O4c5miSp56e99AdJp8qoSqbA4BUspeECVQ0SF1Ip-CWV6K0mSGV-7bQwDvzT49ga9NEDaQLv130n4cP8FNbRvaxCtTWhN2SM-Oa3pkG2fXDDuabgcObotWdwc13aV1Xn72HzrrbEti4Bo0NKXfFyc",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 290.1 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/hKkcpTndzKMdADT4eqarUIqn75x2 (1120.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDc2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNzYsImV4cCI6MTc0ODgyNDY3NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PvdqxEwSnGywwtYDz6triPsRlJS1j328tSpL50Wrc2qb6bzX7FGZDREoADZoQ8cgUNgJzrMgPYjAGe8bQitx4PViaCws1jlX5yxKiFtwtToZ1Rf-TsLL0GtlCydYg-25r-uqoauq4DOVksZbRJzOZcYK1wUxkSeUlFXTBwrFLfCE3IfDOREbDawLxC3TgLuLOqmxfd9zp9tqgSSU8RhefH3SS3EgsCO0_khN5vUPFGJacjTW8DjT2od0RI7yNzSyFo9g31Kd5Ppsd0HUdbA8ZLcemKmBunN5Mi7MAJMk2txW_HHPwQpCd-5tQ7jGHTGHlOSzjbIeytl0gRDCll25dQ"
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
    "date": "Sun, 01 Jun 2025 23:37:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1120.8 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (325.5ms)</summary>

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
    "etag": "W/\"640-soWkMdqqqEfCLclMkXAQiTsZacg\"",
    "date": "Sun, 01 Jun 2025 23:37:58 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDc4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNzgsImV4cCI6MTc0ODgyNDY3OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VMd_FhSAMuXiypDPTflSwiH9q0ibJgWLrK6BTms8lm6vY2fcurBLpszaZG6XWh6KH4I_4GrqF5YVt91Nt5Re2GTn0MbILMDlIqx4Q0V9TCRP-cRQDMJt4rkLXH_r81eZGoyKg4DmcraDRP0VsjfnneXglOo-M6891NVFo9XG8t6_Cvp3h0D2NW2d_viUtPSwzYKyxtVIaLKVMj0lv9Pk20LLNkoYXU9hoJQsb2HQTdVGnMCY3fX6E6WQKPRBlPLbiKcV2xzZ-TZjPLNHHoaNTzpBSnFyfaWgP5_X2q0oMhlI_YLBJqrgiL2w8uQjQZw0UY5hYlJOANsLqJ6fNyRGRg",
      "refreshToken": "AMf-vBxuLnHYaRoz_56i1UM8T-rc51QC1epSy8xVNF2S03kAOoqheAgjGLxcjKuHETT0XBUs3be4l-f3Qz0rH35n1JfzLq2hR688ldbvZ8iJSF-lw4-rU_yDD6HswAbMI9LKqKodvRbWlB5DlYZEvPGvLrGvYEDOKBI2BPvjv2Rb6ddADBSl9N08lbYuLKVXgTvLZklslYfict-LeL91r2pkKdz8344dd09UBWuqt_g3jjTO_wuF_ccs6SOImuKDElyEahEc_z00",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 325.5 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/ivHXU8BqQMamsDZD4YGZXPd7thU2 (1114.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDc4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNzgsImV4cCI6MTc0ODgyNDY3OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VMd_FhSAMuXiypDPTflSwiH9q0ibJgWLrK6BTms8lm6vY2fcurBLpszaZG6XWh6KH4I_4GrqF5YVt91Nt5Re2GTn0MbILMDlIqx4Q0V9TCRP-cRQDMJt4rkLXH_r81eZGoyKg4DmcraDRP0VsjfnneXglOo-M6891NVFo9XG8t6_Cvp3h0D2NW2d_viUtPSwzYKyxtVIaLKVMj0lv9Pk20LLNkoYXU9hoJQsb2HQTdVGnMCY3fX6E6WQKPRBlPLbiKcV2xzZ-TZjPLNHHoaNTzpBSnFyfaWgP5_X2q0oMhlI_YLBJqrgiL2w8uQjQZw0UY5hYlJOANsLqJ6fNyRGRg"
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
    "date": "Sun, 01 Jun 2025 23:37:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1114.4 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (238.0ms)</summary>

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
    "etag": "W/\"640-duW/wWDor74wY3h2hseGl+cuuPw\"",
    "date": "Sun, 01 Jun 2025 23:37:59 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDc5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNzksImV4cCI6MTc0ODgyNDY3OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6IOrc3-tvBHktwGA3EYrLAahA-p8Ch9aVbqI_jEb7t-_Ev7Kf-nAQ6c7MMRJWEUmL9Mn1D-2aHLR1a9emBcre096FGnCn9i4w5FayjEulfUlTja45BS6OGCMwO6sxVdjBqX3jPhLWLJUF4SIprK4lcXhPGahtQWV1DFpBZrMnV10fyt_eXGdrIl-lFvhngygmtZ-lGuCZzLNDuyH3aSOlIQxCdGp6TvQ8PzErrvZxMKfUvHjUfQhha1557SEFEMfpdoJhrwkQLqk47lyhI3w9zqMqfcUVOIJevxq2SnMCJlzdVG6tGCVXX_w_QdS7ZqHUGX-1ys-dpVZT3uy5iDKA",
      "refreshToken": "AMf-vBxMz0kAz5fnlxefb8aS2xZqylPbS1vzxc1yapxjM0wSF596bauZTSsXb-L0yCUU1P6wavjJeBCBHS6ZfiQ7swrx2AQX7kzK5fmKTePWKuIPaU0TpmRfxESics0xrVZzFebUhRKHboG8m4jb07LO095XoRUmHnXN-jfSLdNHMntxw9QXFrYNAKeRrVsNnv3JE59pVvEkSCajU5XJiYzDpY8025ad1J3dthF9-UXxJpgy-Y4A5C8lqjxXnLpoXhq7XP0YJO8y",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 238.0 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/BeOMm8lz4LRvik10KNlZCmFoGi12 (1082.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDc5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNzksImV4cCI6MTc0ODgyNDY3OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N6IOrc3-tvBHktwGA3EYrLAahA-p8Ch9aVbqI_jEb7t-_Ev7Kf-nAQ6c7MMRJWEUmL9Mn1D-2aHLR1a9emBcre096FGnCn9i4w5FayjEulfUlTja45BS6OGCMwO6sxVdjBqX3jPhLWLJUF4SIprK4lcXhPGahtQWV1DFpBZrMnV10fyt_eXGdrIl-lFvhngygmtZ-lGuCZzLNDuyH3aSOlIQxCdGp6TvQ8PzErrvZxMKfUvHjUfQhha1557SEFEMfpdoJhrwkQLqk47lyhI3w9zqMqfcUVOIJevxq2SnMCJlzdVG6tGCVXX_w_QdS7ZqHUGX-1ys-dpVZT3uy5iDKA"
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
    "date": "Sun, 01 Jun 2025 23:38:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1082.1 ms  

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
- Total organizations created: 9
- Total test users created: 3
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
