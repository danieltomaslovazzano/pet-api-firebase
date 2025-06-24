# E2E Test Report: organizations-tests

**Date:** 6/5/2025  
**Time:** 7:08:55 PM  
**Duration:** 23.95s  
**Tests:** 17 total, 4 passed, 13 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Admin should create organization successfully | FAILED | 1.10s | Admin should create organization successfully |
| ❌ Regular user should create organization successfully | FAILED | 0.45s | Regular user should create organization successfully |
| ❌ Should create organization with explicit shelter type | FAILED | 0.60s | Should create organization with explicit shelter type |
| ✅ Should fail without authentication | PASSED | 0.07s | Should fail without authentication |
| ❌ Admin should get organization by ID | FAILED | 0.45s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.43s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ❌ Admin should update organization successfully | FAILED | 0.48s | Admin should update organization successfully |
| ❌ Should fail without proper permissions | FAILED | 0.45s | Should fail without proper permissions |
| ❌ Admin should delete organization successfully | FAILED | 0.55s | Admin should delete organization successfully |
| ❌ Should fail without proper permissions | FAILED | 0.89s | Should fail without proper permissions |
| ❌ Admin should list all organizations | FAILED | 0.87s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.43s | Should fail without admin permissions |
| ❌ Admin should get organization members | FAILED | 0.50s | Admin should get organization members |
| ❌ Should fail without membership | FAILED | 0.46s | Should fail without membership |
| ❌ Organization admin should only access their own organization | FAILED | 0.47s | Organization admin should only access their own organization |
| ❌ Super admin should access all organizations | FAILED | 0.50s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ❌ FAILED  
**Duration:** 1.10s  
**Error:** expect(received).toHaveProperty(path)

Expected path: "id"
Received path: []

Received value: {"data": {"address": "123 Test Street", "createdAt": "2025-06-05T17:08:33.431Z", "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1", "defaultLanguage": "en", "description": "Test organization for E2E testing", "email": "test@organization.com", "id": "157e5517-6fdc-4227-98d2-a1155eb758fa", "logo": null, "name": "Test Organization 1749143312937", "phone": "+1234567890", "status": "active", "type": "shelter", "updatedAt": "2025-06-05T17:08:33.431Z"}, "language": "en", "message": "Organization created successfully", "messageKey": "organizations.created", "success": true}  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (1097.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Test Organization 1749143312937",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "532",
    "etag": "W/\"214-b4kJrrLQumqHmAYCUn3kLoS1APY\"",
    "date": "Thu, 05 Jun 2025 17:08:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "157e5517-6fdc-4227-98d2-a1155eb758fa",
      "name": "Test Organization 1749143312937",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:33.431Z",
      "updatedAt": "2025-06-05T17:08:33.431Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1097.3 ms  

</details>


---

### Test: Regular user should create organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.45s  
**Error:** expect(received).toHaveProperty(path)

Expected path: "id"
Received path: []

Received value: {"data": {"address": "789 User Street", "createdAt": "2025-06-05T17:08:34.451Z", "createdBy": "qSOy1KL02XgUOpT0FOihENnhylx2", "defaultLanguage": "en", "description": "Organization created by regular user", "email": "user-org-1749143314064@example.com", "id": "7e1889c6-4ce1-4072-ab82-58d5a7927168", "logo": null, "name": "User Org 1749143314064", "phone": "+1555666777", "status": "active", "type": "shelter", "updatedAt": "2025-06-05T17:08:34.451Z"}, "language": "en", "message": "Organization created successfully", "messageKey": "organizations.created", "success": true}  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (453.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMxMiwidXNlcl9pZCI6InFTT3kxS0wwMlhnVU9wVDBGT2loRU5uaHlseDIiLCJzdWIiOiJxU095MUtMMDJYZ1VPcFQwRk9paEVObmh5bHgyIiwiaWF0IjoxNzQ5MTQzMzEyLCJleHAiOjE3NDkxNDY5MTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQzMzExNjU2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0MzMxMTY1NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g4eOlcyb3W1QmvSlYDJJuFdbCjk-1dYW0Qf-g2bI7fJdfy_PiGdNq-xaq9hWRw7TFsysIp3vMJyEqbVvdr0-Ob4jPmC5zIfbcyuW9gvcSPyHdkXTx8vKOvShFaE4PjutzKt8Ocz6yldE-LgBg_mF9m8LZp1NndwVCu3JJ2ro73ZuU6dUeLHrVDyUUsvggoalj1QKtav0cR8GcDYYYga18A7hb8Yc-vAMaahxqmewNh6YgB7InJpNNW8xnO_p5L-dI3-GSNYSeq09yXYeCFzKszsNbZu-NwPTkG7ZxjMocK0mpM1pKROpuffcQ8nMHeEnb53RzvPGV5mYAks75TcPVA"
  },
  "data": {
    "name": "User Org 1749143314064",
    "description": "Organization created by regular user",
    "email": "user-org-1749143314064@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "539",
    "etag": "W/\"21b-QZfruHbJR6cp7hDS7EdK+JS0ImE\"",
    "date": "Thu, 05 Jun 2025 17:08:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "7e1889c6-4ce1-4072-ab82-58d5a7927168",
      "name": "User Org 1749143314064",
      "type": "shelter",
      "description": "Organization created by regular user",
      "logo": null,
      "address": "789 User Street",
      "phone": "+1555666777",
      "email": "user-org-1749143314064@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "qSOy1KL02XgUOpT0FOihENnhylx2",
      "createdAt": "2025-06-05T17:08:34.451Z",
      "updatedAt": "2025-06-05T17:08:34.451Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 453.0 ms  

</details>


---

### Test: Should create organization with explicit shelter type
**Status:** ❌ FAILED  
**Duration:** 0.60s  
**Error:** expect(received).toBe(expected) // Object.is equality

Expected: "shelter"
Received: undefined  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (598.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Explicit Shelter 1749143314521",
    "type": "shelter",
    "description": "Shelter with explicit type",
    "address": "456 Shelter Avenue",
    "phone": "+1987654321",
    "email": "explicit-shelter-1749143314521@example.com"
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
    "content-length": "548",
    "etag": "W/\"224-4cI+v/bT6+pglO+VtdoFmLkkSeA\"",
    "date": "Thu, 05 Jun 2025 17:08:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "16118130-869e-498d-a5b2-a25cbc184fc9",
      "name": "Explicit Shelter 1749143314521",
      "type": "shelter",
      "description": "Shelter with explicit type",
      "logo": null,
      "address": "456 Shelter Avenue",
      "phone": "+1987654321",
      "email": "explicit-shelter-1749143314521@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:35.053Z",
      "updatedAt": "2025-06-05T17:08:35.053Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 598.6 ms  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.07s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (69.0ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Thu, 05 Jun 2025 17:08:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 69.0 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (588.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Get Test Org 1749143315195",
    "description": "Organization for get tests",
    "email": "get-test-org-1749143315195@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "541",
    "etag": "W/\"21d-mzy1vcabzsfOkMlIRngiEpVhxLA\"",
    "date": "Thu, 05 Jun 2025 17:08:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "4c88a983-1598-4ba0-a005-169f63c42f31",
      "name": "Get Test Org 1749143315195",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": "321 Get Test Avenue",
      "phone": "+1888999000",
      "email": "get-test-org-1749143315195@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:35.715Z",
      "updatedAt": "2025-06-05T17:08:35.715Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 588.8 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/undefined (8.3ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Thu, 05 Jun 2025 17:08:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 8.3 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (499.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Update Test Org 1749143316679",
    "description": "Organization for update tests",
    "email": "update-test-org-1749143316679@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "556",
    "etag": "W/\"22c-cwsVDIO94tgZv2Lx4F+0vRMMkTY\"",
    "date": "Thu, 05 Jun 2025 17:08:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "d1413462-931e-47ee-a249-715d2290bbdb",
      "name": "Update Test Org 1749143316679",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": "456 Update Test Boulevard",
      "phone": "+1777888999",
      "email": "update-test-org-1749143316679@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:37.110Z",
      "updatedAt": "2025-06-05T17:08:37.110Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 499.6 ms  

</details>


---

### Test: Admin should get organization by ID
**Status:** ❌ FAILED  
**Duration:** 0.45s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined (447.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:36 GMT",
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

**⏱️ Duration:** 447.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/invalid-id (425.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:36 GMT",
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

**⏱️ Duration:** 425.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (69.0ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Thu, 05 Jun 2025 17:08:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 69.0 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (588.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Get Test Org 1749143315195",
    "description": "Organization for get tests",
    "email": "get-test-org-1749143315195@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "541",
    "etag": "W/\"21d-mzy1vcabzsfOkMlIRngiEpVhxLA\"",
    "date": "Thu, 05 Jun 2025 17:08:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "4c88a983-1598-4ba0-a005-169f63c42f31",
      "name": "Get Test Org 1749143315195",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": "321 Get Test Avenue",
      "phone": "+1888999000",
      "email": "get-test-org-1749143315195@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:35.715Z",
      "updatedAt": "2025-06-05T17:08:35.715Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 588.8 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/undefined (8.3ms)</summary>

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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "34",
    "etag": "W/\"22-a5AGBJ3wo9XYPif6SAp92FOHtH4\"",
    "date": "Thu, 05 Jun 2025 17:08:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 8.3 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (499.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Update Test Org 1749143316679",
    "description": "Organization for update tests",
    "email": "update-test-org-1749143316679@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "556",
    "etag": "W/\"22c-cwsVDIO94tgZv2Lx4F+0vRMMkTY\"",
    "date": "Thu, 05 Jun 2025 17:08:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "d1413462-931e-47ee-a249-715d2290bbdb",
      "name": "Update Test Org 1749143316679",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": "456 Update Test Boulevard",
      "phone": "+1777888999",
      "email": "update-test-org-1749143316679@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:37.110Z",
      "updatedAt": "2025-06-05T17:08:37.110Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 499.6 ms  

</details>


---

### Test: Admin should update organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.48s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/undefined (472.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Updated undefined",
    "description": "Updated description",
    "phone": "+9876543210"
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
    "date": "Thu, 05 Jun 2025 17:08:37 GMT",
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

**⏱️ Duration:** 472.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated undefined",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNm
ℹ️ 🔍 DEBUG: Error response status: 400
ℹ️ 🔍 DEBUG: Error response data: {
  "error": "Invalid organization ID",
  "details": [
    "Organization ID must be a valid UUID"
  ]
}
ℹ️ 🔍 DEBUG: Error message: Request failed with status code 400
```

---

### Test: Should fail without proper permissions
**Status:** ❌ FAILED  
**Duration:** 0.45s  
**Error:** expect(received).toBe(expected) // Object.is equality

Expected: 403
Received: 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/undefined (451.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMxMiwidXNlcl9pZCI6InFTT3kxS0wwMlhnVU9wVDBGT2loRU5uaHlseDIiLCJzdWIiOiJxU095MUtMMDJYZ1VPcFQwRk9paEVObmh5bHgyIiwiaWF0IjoxNzQ5MTQzMzEyLCJleHAiOjE3NDkxNDY5MTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQzMzExNjU2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0MzMxMTY1NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g4eOlcyb3W1QmvSlYDJJuFdbCjk-1dYW0Qf-g2bI7fJdfy_PiGdNq-xaq9hWRw7TFsysIp3vMJyEqbVvdr0-Ob4jPmC5zIfbcyuW9gvcSPyHdkXTx8vKOvShFaE4PjutzKt8Ocz6yldE-LgBg_mF9m8LZp1NndwVCu3JJ2ro73ZuU6dUeLHrVDyUUsvggoalj1QKtav0cR8GcDYYYga18A7hb8Yc-vAMaahxqmewNh6YgB7InJpNNW8xnO_p5L-dI3-GSNYSeq09yXYeCFzKszsNbZu-NwPTkG7ZxjMocK0mpM1pKROpuffcQ8nMHeEnb53RzvPGV5mYAks75TcPVA"
  },
  "data": {
    "name": "Unauthorized update"
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
    "date": "Thu, 05 Jun 2025 17:08:38 GMT",
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

**⏱️ Duration:** 451.8 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (527.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Delete Test Org 1749143318117",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1749143318117@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "553",
    "etag": "W/\"229-q1+f4UzbmQYtti2B5WaeiaTxNDg\"",
    "date": "Thu, 05 Jun 2025 17:08:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "0bdd7c0e-2537-47d2-83c8-5c19f6f2c51a",
      "name": "Delete Test Org 1749143318117",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": "789 Delete Test Street",
      "phone": "+1333444555",
      "email": "delete-test-org-1749143318117@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:38.579Z",
      "updatedAt": "2025-06-05T17:08:38.579Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 527.0 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (501.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "No Delete Perm Org 1749143319202",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1749143319202@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "564",
    "etag": "W/\"234-CGb50RJmt7By7QFeNWO3bgmG6Tg\"",
    "date": "Thu, 05 Jun 2025 17:08:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "95d9587d-b30e-41ee-8181-e6689861bc68",
      "name": "No Delete Perm Org 1749143319202",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": "999 Permission Test Lane",
      "phone": "+1666777888",
      "email": "no-delete-perm-org-1749143319202@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:39.628Z",
      "updatedAt": "2025-06-05T17:08:39.628Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 501.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/undefined (385.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMxMiwidXNlcl9pZCI6InFTT3kxS0wwMlhnVU9wVDBGT2loRU5uaHlseDIiLCJzdWIiOiJxU095MUtMMDJYZ1VPcFQwRk9paEVObmh5bHgyIiwiaWF0IjoxNzQ5MTQzMzEyLCJleHAiOjE3NDkxNDY5MTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQzMzExNjU2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0MzMxMTY1NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g4eOlcyb3W1QmvSlYDJJuFdbCjk-1dYW0Qf-g2bI7fJdfy_PiGdNq-xaq9hWRw7TFsysIp3vMJyEqbVvdr0-Ob4jPmC5zIfbcyuW9gvcSPyHdkXTx8vKOvShFaE4PjutzKt8Ocz6yldE-LgBg_mF9m8LZp1NndwVCu3JJ2ro73ZuU6dUeLHrVDyUUsvggoalj1QKtav0cR8GcDYYYga18A7hb8Yc-vAMaahxqmewNh6YgB7InJpNNW8xnO_p5L-dI3-GSNYSeq09yXYeCFzKszsNbZu-NwPTkG7ZxjMocK0mpM1pKROpuffcQ8nMHeEnb53RzvPGV5mYAks75TcPVA"
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
    "date": "Thu, 05 Jun 2025 17:08:40 GMT",
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

**⏱️ Duration:** 385.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Admin should delete organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.55s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/organizations/undefined (552.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:39 GMT",
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

**⏱️ Duration:** 552.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without proper permissions
**Status:** ❌ FAILED  
**Duration:** 0.89s  
**Error:** expect(received).toBe(expected) // Object.is equality

Expected: 403
Received: 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/undefined (451.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMxMiwidXNlcl9pZCI6InFTT3kxS0wwMlhnVU9wVDBGT2loRU5uaHlseDIiLCJzdWIiOiJxU095MUtMMDJYZ1VPcFQwRk9paEVObmh5bHgyIiwiaWF0IjoxNzQ5MTQzMzEyLCJleHAiOjE3NDkxNDY5MTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQzMzExNjU2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0MzMxMTY1NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g4eOlcyb3W1QmvSlYDJJuFdbCjk-1dYW0Qf-g2bI7fJdfy_PiGdNq-xaq9hWRw7TFsysIp3vMJyEqbVvdr0-Ob4jPmC5zIfbcyuW9gvcSPyHdkXTx8vKOvShFaE4PjutzKt8Ocz6yldE-LgBg_mF9m8LZp1NndwVCu3JJ2ro73ZuU6dUeLHrVDyUUsvggoalj1QKtav0cR8GcDYYYga18A7hb8Yc-vAMaahxqmewNh6YgB7InJpNNW8xnO_p5L-dI3-GSNYSeq09yXYeCFzKszsNbZu-NwPTkG7ZxjMocK0mpM1pKROpuffcQ8nMHeEnb53RzvPGV5mYAks75TcPVA"
  },
  "data": {
    "name": "Unauthorized update"
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
    "date": "Thu, 05 Jun 2025 17:08:38 GMT",
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

**⏱️ Duration:** 451.8 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (527.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Delete Test Org 1749143318117",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1749143318117@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "553",
    "etag": "W/\"229-q1+f4UzbmQYtti2B5WaeiaTxNDg\"",
    "date": "Thu, 05 Jun 2025 17:08:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "0bdd7c0e-2537-47d2-83c8-5c19f6f2c51a",
      "name": "Delete Test Org 1749143318117",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": "789 Delete Test Street",
      "phone": "+1333444555",
      "email": "delete-test-org-1749143318117@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:38.579Z",
      "updatedAt": "2025-06-05T17:08:38.579Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 527.0 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (501.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "No Delete Perm Org 1749143319202",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1749143319202@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "564",
    "etag": "W/\"234-CGb50RJmt7By7QFeNWO3bgmG6Tg\"",
    "date": "Thu, 05 Jun 2025 17:08:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "95d9587d-b30e-41ee-8181-e6689861bc68",
      "name": "No Delete Perm Org 1749143319202",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": "999 Permission Test Lane",
      "phone": "+1666777888",
      "email": "no-delete-perm-org-1749143319202@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:39.628Z",
      "updatedAt": "2025-06-05T17:08:39.628Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 501.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/undefined (385.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMxMiwidXNlcl9pZCI6InFTT3kxS0wwMlhnVU9wVDBGT2loRU5uaHlseDIiLCJzdWIiOiJxU095MUtMMDJYZ1VPcFQwRk9paEVObmh5bHgyIiwiaWF0IjoxNzQ5MTQzMzEyLCJleHAiOjE3NDkxNDY5MTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQzMzExNjU2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0MzMxMTY1NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g4eOlcyb3W1QmvSlYDJJuFdbCjk-1dYW0Qf-g2bI7fJdfy_PiGdNq-xaq9hWRw7TFsysIp3vMJyEqbVvdr0-Ob4jPmC5zIfbcyuW9gvcSPyHdkXTx8vKOvShFaE4PjutzKt8Ocz6yldE-LgBg_mF9m8LZp1NndwVCu3JJ2ro73ZuU6dUeLHrVDyUUsvggoalj1QKtav0cR8GcDYYYga18A7hb8Yc-vAMaahxqmewNh6YgB7InJpNNW8xnO_p5L-dI3-GSNYSeq09yXYeCFzKszsNbZu-NwPTkG7ZxjMocK0mpM1pKROpuffcQ8nMHeEnb53RzvPGV5mYAks75TcPVA"
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
    "date": "Thu, 05 Jun 2025 17:08:40 GMT",
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

**⏱️ Duration:** 385.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Admin should list all organizations
**Status:** ❌ FAILED  
**Duration:** 0.87s  
**Error:** expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (865.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "content-length": "49875",
    "etag": "W/\"c2d3-dCj6HUVcAwPuy5i6mdQzwABxUp8\"",
    "date": "Thu, 05 Jun 2025 17:08:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
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
        "defaultLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
        "defaultLanguage": "en",
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
              "preferredLanguage": "en",
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
        "defaultLanguage": "en",
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
              "preferredLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T23:00:04.274Z",
        "updatedAt": "2025-05-27T23:00:04.274Z",
        "memberships": []
      },
      {
        "id": "157e5517-6fdc-4227-98d2-a1155eb758fa",
        "name": "Test Organization 1749143312937",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:33.431Z",
        "updatedAt": "2025-06-05T17:08:33.431Z",
        "memberships": []
      },
      {
        "id": "7e1889c6-4ce1-4072-ab82-58d5a7927168",
        "name": "User Org 1749143314064",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749143314064@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "qSOy1KL02XgUOpT0FOihENnhylx2",
        "createdAt": "2025-06-05T17:08:34.451Z",
        "updatedAt": "2025-06-05T17:08:34.451Z",
        "memberships": []
      },
      {
        "id": "16118130-869e-498d-a5b2-a25cbc184fc9",
        "name": "Explicit Shelter 1749143314521",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749143314521@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:35.053Z",
        "updatedAt": "2025-06-05T17:08:35.053Z",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
        "createdBy": "CSHCi7NrOAUvUSSmxeDcdPRc49M2",
        "createdAt": "2025-05-27T20:16:22.244Z",
        "updatedAt": "2025-05-27T20:16:22.244Z",
        "memberships": []
      },
      {
        "id": "4c88a983-1598-4ba0-a005-169f63c42f31",
        "name": "Get Test Org 1749143315195",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749143315195@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:35.715Z",
        "updatedAt": "2025-06-05T17:08:35.715Z",
        "memberships": []
      },
      {
        "id": "d1413462-931e-47ee-a249-715d2290bbdb",
        "name": "Update Test Org 1749143316679",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749143316679@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:37.110Z",
        "updatedAt": "2025-06-05T17:08:37.110Z",
        "memberships": []
      },
      {
        "id": "0bdd7c0e-2537-47d2-83c8-5c19f6f2c51a",
        "name": "Delete Test Org 1749143318117",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749143318117@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:38.579Z",
        "updatedAt": "2025-06-05T17:08:38.579Z",
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
        "defaultLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
              "createdAt": "2025-05-27T21:08:50.085Z",
              "updatedAt": "2025-05-27T21:08:50.085Z",
              "isSuperAdmin": false
            }
          }
        ]
      },
      {
        "id": "95d9587d-b30e-41ee-8181-e6689861bc68",
        "name": "No Delete Perm Org 1749143319202",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749143319202@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:08:39.628Z",
        "updatedAt": "2025-06-05T17:08:39.628Z",
        "memberships": []
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
        "defaultLanguage": "en",
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
        "defaultLanguage": "en",
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
              "preferredLanguage": "en",
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
              "preferredLanguage": "en",
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
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-05-27T22:54:22.687Z",
        "updatedAt": "2025-05-27T22:54:22.687Z",
        "memberships": []
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 865.1 ms  

</details>


---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (434.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMxMiwidXNlcl9pZCI6InFTT3kxS0wwMlhnVU9wVDBGT2loRU5uaHlseDIiLCJzdWIiOiJxU095MUtMMDJYZ1VPcFQwRk9paEVObmh5bHgyIiwiaWF0IjoxNzQ5MTQzMzEyLCJleHAiOjE3NDkxNDY5MTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQzMzExNjU2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0MzMxMTY1NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g4eOlcyb3W1QmvSlYDJJuFdbCjk-1dYW0Qf-g2bI7fJdfy_PiGdNq-xaq9hWRw7TFsysIp3vMJyEqbVvdr0-Ob4jPmC5zIfbcyuW9gvcSPyHdkXTx8vKOvShFaE4PjutzKt8Ocz6yldE-LgBg_mF9m8LZp1NndwVCu3JJ2ro73ZuU6dUeLHrVDyUUsvggoalj1QKtav0cR8GcDYYYga18A7hb8Yc-vAMaahxqmewNh6YgB7InJpNNW8xnO_p5L-dI3-GSNYSeq09yXYeCFzKszsNbZu-NwPTkG7ZxjMocK0mpM1pKROpuffcQ8nMHeEnb53RzvPGV5mYAks75TcPVA"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "89",
    "etag": "W/\"59-EJtKrw0eqMSOH/xfuajJG4OlIpM\"",
    "date": "Thu, 05 Jun 2025 17:08:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 434.1 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (581.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
  },
  "data": {
    "name": "Members Test Org 1749143321395",
    "description": "Organization for members tests",
    "email": "members-test-org-1749143321395@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "555",
    "etag": "W/\"22b-WoAjsEMciGI4v+ux/vEltRLC7sw\"",
    "date": "Thu, 05 Jun 2025 17:08:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "1c672eec-0125-4f06-944a-a7f6fd44a4b7",
      "name": "Members Test Org 1749143321395",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": "111 Members Test Road",
      "phone": "+1222333444",
      "email": "members-test-org-1749143321395@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:08:41.908Z",
      "updatedAt": "2025-06-05T17:08:41.908Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 581.6 ms  

</details>


---

### Test: Admin should get organization members
**Status:** ❌ FAILED  
**Duration:** 0.50s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined/members (495.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:42 GMT",
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

**⏱️ Duration:** 495.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without membership
**Status:** ❌ FAILED  
**Duration:** 0.46s  
**Error:** expect(received).toBe(expected) // Object.is equality

Expected: 403
Received: 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined/members (464.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMxMiwidXNlcl9pZCI6InFTT3kxS0wwMlhnVU9wVDBGT2loRU5uaHlseDIiLCJzdWIiOiJxU095MUtMMDJYZ1VPcFQwRk9paEVObmh5bHgyIiwiaWF0IjoxNzQ5MTQzMzEyLCJleHAiOjE3NDkxNDY5MTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQzMzExNjU2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0MzMxMTY1NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g4eOlcyb3W1QmvSlYDJJuFdbCjk-1dYW0Qf-g2bI7fJdfy_PiGdNq-xaq9hWRw7TFsysIp3vMJyEqbVvdr0-Ob4jPmC5zIfbcyuW9gvcSPyHdkXTx8vKOvShFaE4PjutzKt8Ocz6yldE-LgBg_mF9m8LZp1NndwVCu3JJ2ro73ZuU6dUeLHrVDyUUsvggoalj1QKtav0cR8GcDYYYga18A7hb8Yc-vAMaahxqmewNh6YgB7InJpNNW8xnO_p5L-dI3-GSNYSeq09yXYeCFzKszsNbZu-NwPTkG7ZxjMocK0mpM1pKROpuffcQ8nMHeEnb53RzvPGV5mYAks75TcPVA"
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
    "date": "Thu, 05 Jun 2025 17:08:42 GMT",
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

**⏱️ Duration:** 464.0 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (933.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1749143322944@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1539",
    "etag": "W/\"603-gCNQYWE05b8uDkoFrzIw89M/43s\"",
    "date": "Thu, 05 Jun 2025 17:08:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "PxpHhwF0yyPXDZGndpWapajXHqw2",
        "email": "org1-admin-1749143322944@example.com",
        "name": "Org1 Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMyMywidXNlcl9pZCI6IlB4cEhod0YweXlQWERaR25kcFdhcGFqWEhxdzIiLCJzdWIiOiJQeHBIaHdGMHl5UFhEWkduZHBXYXBhalhIcXcyIiwiaWF0IjoxNzQ5MTQzMzIzLCJleHAiOjE3NDkxNDY5MjMsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ5MTQzMzIyOTQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0OTE0MzMyMjk0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jMobjbD5-4bm0JZ2AZfzOzprlNKpsXlTpxi5YBSCCG603-5EKUXtmB5m--2NEePMqFHsr6S1JI2a8gx3EJFvv4vTBX5WTNrSQ2Sbx9gnI-H6opqx27Ai3OZPa49r9LEbq5e8gXFjTsrUt-Ftqch1HTrHi63EMOPqZFk-czP_txZgTdC8CTTgzAw_Da5qAG9spX_SXkFGfTkjHzEcM7oxkIJHpzfpNTUHVS7lK00-0o1MZ9VzAkXSHZXPZnK1bIyVypRenGxlW4bc39J_UFqF4thS_7t5-2WCdBSYZKQ8cEN_W-VW7oe26ZHmLQHCjYt1kP-SnkZJiXefcHGiCuznSg",
        "refreshToken": "AMf-vBx6fPS9UGOQahxHCtgDIR_iHKRIpZwHvkD9Pl2lJsCtuUT0GF2YvJZBIk4VfoPRDHNCzi_8rBU22fiA50sdwf7a4Y46OULENVef_Dbht6KRvi7tCvoSoge7RNPtZrd-kZ09MtU9HDnFNhxgUbHj93ZPAeBZfkPUE72r4wTunHF0Yb5lmoAWRg8KlIRyl9d8EvDD9VjhmDvkeaf-9ae88qrrnwolbuf0P8cfhjbuX_UHlcX7iB0",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 933.7 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1188.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1749143323877@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1539",
    "etag": "W/\"603-Arfjg7eeQztL+FjdoIh+CzBA6ms\"",
    "date": "Thu, 05 Jun 2025 17:08:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "LjO7Q26DJ3WHnq66vseNnfYpPon2",
        "email": "org2-admin-1749143323877@example.com",
        "name": "Org2 Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMyNCwidXNlcl9pZCI6IkxqTzdRMjZESjNXSG5xNjZ2c2VObmZZcFBvbjIiLCJzdWIiOiJMak83UTI2REozV0hucTY2dnNlTm5mWXBQb24yIiwiaWF0IjoxNzQ5MTQzMzI0LCJleHAiOjE3NDkxNDY5MjQsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ5MTQzMzIzODc3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0OTE0MzMyMzg3N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pG6pEKr_IJqAjiAQE4drQSBHS7UoAEkRHlI2X2ARRwsJ1bn_VuZImn-DLpjT22GcnSk_Q3DVR9gXNcMJRgQCSClslZYMDo8ePzas4MXK7jqf0OIyhq8g6jToIzwP-thWdP0MlaJhsCXCPujxER-FAIx2n-1Z9MzZPPd6QYlIVohWomISrRfeJQBI_ykv1ddSAVVyogTmsN4qyx3kRqFK7utDeIpGxym2mUlwW40qjZ2qnkKtSZ2EAlBOMVC3f7ZEBuipKMTfYcxNKxkQDvIwvjAaxxxMVVl2exVAg91MdfHQnZlbwMiXXc2JfKXCI355Rr2AlrTAKPboc63KOpspOQ",
        "refreshToken": "AMf-vBzLCE2kDvPuMfiS15alawRcNjI-OvWvcP_K9uuEbH4UPi7mIEL1_An9cuW5vb3CQjbrltx6PqjqhG3MIVN_wCxgi2pgEVCBIwV4swwGCDV121-7QuQBDLb9lId_0XG2Hd9vUm3I-RbpO75BW6f8K88YLmW5IAArITC24q06nM_e1UsXkvGB9ULZD_YMSzu7HyKc_UJqsjkFaqiuwE95-1hKzDuXy3ChC3odcc_u7qfUVngdHAY",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1188.6 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (302.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1749143322944@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1516",
    "etag": "W/\"5ec-ng7TWbKV6o9hy5UjHARK4fehxEs\"",
    "date": "Thu, 05 Jun 2025 17:08:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "PxpHhwF0yyPXDZGndpWapajXHqw2",
        "email": "org1-admin-1749143322944@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMyNSwidXNlcl9pZCI6IlB4cEhod0YweXlQWERaR25kcFdhcGFqWEhxdzIiLCJzdWIiOiJQeHBIaHdGMHl5UFhEWkduZHBXYXBhalhIcXcyIiwiaWF0IjoxNzQ5MTQzMzI1LCJleHAiOjE3NDkxNDY5MjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ5MTQzMzIyOTQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0OTE0MzMyMjk0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PFmKKLmwCBsY9v_RhSNqY5UjOQ0uecwKo2LUFMM5ZcRqDXenWkaJcMlD8lYtjcVyJV0CidNviEAqDvycR7lYIQehcmb7Ktugc-47wewX2HjTKmypll1Z5Ogfzwrj9qN_s0V4XodAoIPPyVEi4OuMF2W0V3lIVifHq5XQAjY3Ba97ryhpqz3L1XwDcYsrT-oScO1VlWJwnSq50JpVk4c5do3H0rmZB35o3m2RZUg4pRltwS2WG9lpgrix3rrqwqbTNSh99O8BM3zk-ctB-KSI73KnFldrP6ZtI7lLtyWaNjLnGZCKcFDu6khyHt6udMQ7QdnuOmNd6t0KpvLO6i8XwQ",
        "refreshToken": "AMf-vBzcdkpZ_Z_y4GvYvoRUh0C3YC8Fm8zc_FnRBaOJF5Cirul6K_GTILpJ3a9SEqEwGHA6tLAQK7q74_YQNlLEHLtuH6OQYW8JM0pHWlRkf6HXDAVnQg62jRsLOkE_S2cz7xBWX1yZNyFTJLexOq-w2s7k5fuKfBp8jK4ryGcY4CEa5aZ1eZVbJwgoBBGUydfu0C9n4gU8o7xFnNA6XnZ13jPNxqEGVg3Q-7vAOzh8KdFkJIqwIh0",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 302.3 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (309.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1749143323877@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1516",
    "etag": "W/\"5ec-+ZwbzjFb63h1tiVdRtFes7IzVFc\"",
    "date": "Thu, 05 Jun 2025 17:08:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "LjO7Q26DJ3WHnq66vseNnfYpPon2",
        "email": "org2-admin-1749143323877@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMyNSwidXNlcl9pZCI6IkxqTzdRMjZESjNXSG5xNjZ2c2VObmZZcFBvbjIiLCJzdWIiOiJMak83UTI2REozV0hucTY2dnNlTm5mWXBQb24yIiwiaWF0IjoxNzQ5MTQzMzI1LCJleHAiOjE3NDkxNDY5MjUsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ5MTQzMzIzODc3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0OTE0MzMyMzg3N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bhAWWQkITR2PdBKXgDHD1b_CQIhENjgEtvn4VE5YOmKyHaNf3y5WSIFppmQgALu0Vzi-DHKgmVL2tn1B8wl0L4g6-U6YZ0Yqpn4ZBULfJdH7WxQbWcpmaINI2R6CMmpemWuGwR9zMp-fXDTFntWB4ooO3sHhK7edjfQm32iPy8_0WRpDbUiWxCXHtwU1tHk8TST3h_qkc5KYuN9m82E76To66KATS8Z0rxkCs8bozsC4JNXKDGtqCVknsBugRbUFohBH521fpA25Ufv8hyY3m39trAD7xBAv1cDi-XpBYOzIGf4axY9Nnj2UP1K9FxdPHwal3OJCb5IviN7Ok__Ouw",
        "refreshToken": "AMf-vByi1MOvhLRgiiP6aZXyIDsu82qNRsKzcrWSVGXK7MyLKp6u1phK7RnfmiQue2_UV2ikEPIfnT1HVyn28ELk0r0eJt_8f1yOSFsTyU1dX1j3trvUjsOPQHRNs31o2vBxfhgZwEDedSRuY9p-eNEszoYaCrsCr1gYP1ekn_a51yYCLnOWXES-KR5GHdzKkQBm5fbmzygAEu-XHHbndkKrYZER0M6BBJijjZaAL04_iBOdSk_ty1E",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 309.6 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/organizations (487.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMyNSwidXNlcl9pZCI6IlB4cEhod0YweXlQWERaR25kcFdhcGFqWEhxdzIiLCJzdWIiOiJQeHBIaHdGMHl5UFhEWkduZHBXYXBhalhIcXcyIiwiaWF0IjoxNzQ5MTQzMzI1LCJleHAiOjE3NDkxNDY5MjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ5MTQzMzIyOTQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0OTE0MzMyMjk0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PFmKKLmwCBsY9v_RhSNqY5UjOQ0uecwKo2LUFMM5ZcRqDXenWkaJcMlD8lYtjcVyJV0CidNviEAqDvycR7lYIQehcmb7Ktugc-47wewX2HjTKmypll1Z5Ogfzwrj9qN_s0V4XodAoIPPyVEi4OuMF2W0V3lIVifHq5XQAjY3Ba97ryhpqz3L1XwDcYsrT-oScO1VlWJwnSq50JpVk4c5do3H0rmZB35o3m2RZUg4pRltwS2WG9lpgrix3rrqwqbTNSh99O8BM3zk-ctB-KSI73KnFldrP6ZtI7lLtyWaNjLnGZCKcFDu6khyHt6udMQ7QdnuOmNd6t0KpvLO6i8XwQ"
  },
  "data": {
    "name": "Org1 1749143325678",
    "description": "First organization for multitenant test",
    "email": "org1-1749143325678@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "534",
    "etag": "W/\"216-wWVi7fIKKYgE/vYhkYFnTU9LtWU\"",
    "date": "Thu, 05 Jun 2025 17:08:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "b3028b06-872f-4e34-8a40-6a378ac128ea",
      "name": "Org1 1749143325678",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": "123 Org1 Street",
      "phone": "+1111222333",
      "email": "org1-1749143325678@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "PxpHhwF0yyPXDZGndpWapajXHqw2",
      "createdAt": "2025-06-05T17:08:46.101Z",
      "updatedAt": "2025-06-05T17:08:46.101Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 487.5 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/organizations (516.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMyNSwidXNlcl9pZCI6IkxqTzdRMjZESjNXSG5xNjZ2c2VObmZZcFBvbjIiLCJzdWIiOiJMak83UTI2REozV0hucTY2dnNlTm5mWXBQb24yIiwiaWF0IjoxNzQ5MTQzMzI1LCJleHAiOjE3NDkxNDY5MjUsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ5MTQzMzIzODc3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0OTE0MzMyMzg3N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bhAWWQkITR2PdBKXgDHD1b_CQIhENjgEtvn4VE5YOmKyHaNf3y5WSIFppmQgALu0Vzi-DHKgmVL2tn1B8wl0L4g6-U6YZ0Yqpn4ZBULfJdH7WxQbWcpmaINI2R6CMmpemWuGwR9zMp-fXDTFntWB4ooO3sHhK7edjfQm32iPy8_0WRpDbUiWxCXHtwU1tHk8TST3h_qkc5KYuN9m82E76To66KATS8Z0rxkCs8bozsC4JNXKDGtqCVknsBugRbUFohBH521fpA25Ufv8hyY3m39trAD7xBAv1cDi-XpBYOzIGf4axY9Nnj2UP1K9FxdPHwal3OJCb5IviN7Ok__Ouw"
  },
  "data": {
    "name": "Org2 1749143326166",
    "description": "Second organization for multitenant test",
    "email": "org2-1749143326166@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "535",
    "etag": "W/\"217-pKD9lwd7VhNBSSajAJGYjH/RV1c\"",
    "date": "Thu, 05 Jun 2025 17:08:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "bc891ea7-c752-48d8-9843-fd7ea8fffb53",
      "name": "Org2 1749143326166",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": "456 Org2 Avenue",
      "phone": "+1444555666",
      "email": "org2-1749143326166@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "LjO7Q26DJ3WHnq66vseNnfYpPon2",
      "createdAt": "2025-06-05T17:08:46.612Z",
      "updatedAt": "2025-06-05T17:08:46.612Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 516.2 ms  

</details>


---

### Test: Organization admin should only access their own organization
**Status:** ❌ FAILED  
**Duration:** 0.47s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined (464.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0MzMyNSwidXNlcl9pZCI6IlB4cEhod0YweXlQWERaR25kcFdhcGFqWEhxdzIiLCJzdWIiOiJQeHBIaHdGMHl5UFhEWkduZHBXYXBhalhIcXcyIiwiaWF0IjoxNzQ5MTQzMzI1LCJleHAiOjE3NDkxNDY5MjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ5MTQzMzIyOTQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0OTE0MzMyMjk0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PFmKKLmwCBsY9v_RhSNqY5UjOQ0uecwKo2LUFMM5ZcRqDXenWkaJcMlD8lYtjcVyJV0CidNviEAqDvycR7lYIQehcmb7Ktugc-47wewX2HjTKmypll1Z5Ogfzwrj9qN_s0V4XodAoIPPyVEi4OuMF2W0V3lIVifHq5XQAjY3Ba97ryhpqz3L1XwDcYsrT-oScO1VlWJwnSq50JpVk4c5do3H0rmZB35o3m2RZUg4pRltwS2WG9lpgrix3rrqwqbTNSh99O8BM3zk-ctB-KSI73KnFldrP6ZtI7lLtyWaNjLnGZCKcFDu6khyHt6udMQ7QdnuOmNd6t0KpvLO6i8XwQ"
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
    "date": "Thu, 05 Jun 2025 17:08:47 GMT",
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

**⏱️ Duration:** 464.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Super admin should access all organizations
**Status:** ❌ FAILED  
**Duration:** 0.50s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined (497.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:47 GMT",
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

**⏱️ Duration:** 497.3 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/organizations/undefined (436.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:48 GMT",
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

**⏱️ Duration:** 436.6 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/undefined (489.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:48 GMT",
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

**⏱️ Duration:** 489.7 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/undefined (371.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:48 GMT",
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

**⏱️ Duration:** 371.9 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/undefined (418.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:49 GMT",
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

**⏱️ Duration:** 418.9 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/undefined (377.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:49 GMT",
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

**⏱️ Duration:** 377.8 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/undefined (448.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMTEsImV4cCI6MTc0OTE0NjkxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HzatYLG-17W2OceLK4k51oqE9BrYwDL0aK5i_EQUnIet3M3JwO2sOc6O7Zw-t7iwC8leFv7LklJz33AYEKaG7woD_N8McTOufFFUnS-QBmz5UtngfZgW4WsjYeFlZAKfaPx3AtcUINRSZmiOuWcO7UE_yGlZ_QFCyBuMIZ5davVpjSn9kfxksT6uwNYkZ5m4SK_qwnrUUK47fzfY9p26Umy0Ue4GtIYCvvAzvL62fVtwroFLyfpc-khrBtS3Ln7Q19hyUZt7QbnpBizPKygE1AxZ4D4I301o_wGEl7VV2TbA0RnMXglPDQYCRmqsIHTsxeqwon7n7KBAdq2t7gBYfg"
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
    "date": "Thu, 05 Jun 2025 17:08:50 GMT",
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

**⏱️ Duration:** 448.4 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (281.8ms)</summary>

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
    "etag": "W/\"6aa-axTcKqfu/qXKUlRBNHxedgOkdts\"",
    "date": "Thu, 05 Jun 2025 17:08:50 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMzAsImV4cCI6MTc0OTE0NjkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.U25o9tjpMhqQ_Yjq3bQK4qQdwylsz0OYbewE0QDdMyavLSX2A7KO0dmaW2PXdKbfa9z7VSZncdWx8INnsYuwIWSI_mm2cT8Zt4oyAZC8Ko0dBD3ooUd-tdLJcf4nR_lnHMIIchjGdS28776UkLa-iu8SIBAbv8_cQOUG8UERZ3VPsavQBaqSIn_bYO8R-sfN3eq92n09dMn4RepKALJJLdTFW4CC20ByBU3TQGhBUgqkuupcmwubvm7fXgPQu8BmklyI9tr_AF03rGijKIbfpnkDzOu_oTeAqGhrYOZUzZI1rhnZJ4-X4Bm7ko7VoPMwkuC2Sj7ig4wtmfBru3vVzg",
        "refreshToken": "AMf-vByylusgXAUu8GWtAhwZ3S5F7OmZHDH3BPtLIXEj_AGtTN9fHTJ0-2qro_uZReYWQumzIrnhkGS7IKX9JG15Cb7VaKrSlTztVrWQ0KZQvqubmN4dH7YFTW6zmLPURTn3AQ-XFkjSsPpATYtYqY0OOPCm9Gwx2HeAwcQ3ceteOIKdWPe6t6j69uMm48zhUjHh-Yk8OWjqY28BRdqGXKeyq3tDy1Vqh6R8U1ghnjoyNybhgwSjp3Jfm_DUXaj23AKcrlhiGc1E",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 281.8 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/qSOy1KL02XgUOpT0FOihENnhylx2 (1519.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMzAsImV4cCI6MTc0OTE0NjkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.U25o9tjpMhqQ_Yjq3bQK4qQdwylsz0OYbewE0QDdMyavLSX2A7KO0dmaW2PXdKbfa9z7VSZncdWx8INnsYuwIWSI_mm2cT8Zt4oyAZC8Ko0dBD3ooUd-tdLJcf4nR_lnHMIIchjGdS28776UkLa-iu8SIBAbv8_cQOUG8UERZ3VPsavQBaqSIn_bYO8R-sfN3eq92n09dMn4RepKALJJLdTFW4CC20ByBU3TQGhBUgqkuupcmwubvm7fXgPQu8BmklyI9tr_AF03rGijKIbfpnkDzOu_oTeAqGhrYOZUzZI1rhnZJ4-X4Bm7ko7VoPMwkuC2Sj7ig4wtmfBru3vVzg"
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
    "date": "Thu, 05 Jun 2025 17:08:52 GMT",
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

**⏱️ Duration:** 1519.5 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/auth/login (255.2ms)</summary>

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
    "etag": "W/\"6aa-f+jzogKGwQots4ytN4r/qPuOl/E\"",
    "date": "Thu, 05 Jun 2025 17:08:52 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzMyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMzIsImV4cCI6MTc0OTE0NjkzMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NqkX0elkglAa4LL8Jmzh93KJ5LahjETLdK17bLSAm3J0cSGDMYR5nakl-QyMMu4wLUZgLl5lZ16r_fiVR8D3q3yKK_Jd90Y81EiSQSasm6qq_oPjWhgqmBgS0F8LhLOF7a-HDa4WkeenkBorjMVLl15aSE6rHlo7gHk_tfbtqZx7eAZRPtlr-qPIdsz3eGhtZywYm-IHSmIqdF9RA14h_4D5WCP_J2gEg3BGifrYsMJo_S11a97Teee7H-OFyqwFC38rnmYZVuFKttCwZvWzGv0-TSO-pHgB9m2rHRXU5stalMF3iR-kE-JabYruBwdVIBRHPwpSk7MEO-l3H7L7Cw",
        "refreshToken": "AMf-vBxigodacsLl8M4qP3zCJU-wlS0s0y9a13gKYkRAc3jyYrv7CV-x6xhvgG2KdAW4ye7kBYlTUHjcSvpf4BzKrJJ3vWTkijKeHVECfZv2xuWogK4kF2D54vbfkKmdt_llujKtbg7MfEcLii1xi487z84ueTgKA0nvg8fsQr2BVkZ4Fj9EdREM-i6wnQvnJpVEH7456hRMkcb7rPKvKuYsBvuJtbAnFffkfXDI87E2XNtG1ChjPmkeUyzcusaZlE54xqov4ORF",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 255.2 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/admin/users/PxpHhwF0yyPXDZGndpWapajXHqw2 (1259.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzMyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMzIsImV4cCI6MTc0OTE0NjkzMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NqkX0elkglAa4LL8Jmzh93KJ5LahjETLdK17bLSAm3J0cSGDMYR5nakl-QyMMu4wLUZgLl5lZ16r_fiVR8D3q3yKK_Jd90Y81EiSQSasm6qq_oPjWhgqmBgS0F8LhLOF7a-HDa4WkeenkBorjMVLl15aSE6rHlo7gHk_tfbtqZx7eAZRPtlr-qPIdsz3eGhtZywYm-IHSmIqdF9RA14h_4D5WCP_J2gEg3BGifrYsMJo_S11a97Teee7H-OFyqwFC38rnmYZVuFKttCwZvWzGv0-TSO-pHgB9m2rHRXU5stalMF3iR-kE-JabYruBwdVIBRHPwpSk7MEO-l3H7L7Cw"
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
    "date": "Thu, 05 Jun 2025 17:08:53 GMT",
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

**⏱️ Duration:** 1259.7 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (341.8ms)</summary>

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
    "etag": "W/\"6aa-pPgdmKUROKSWAvbhKmDe+tOYf3I\"",
    "date": "Thu, 05 Jun 2025 17:08:53 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzMzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMzMsImV4cCI6MTc0OTE0NjkzMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H3R7CYwPh5zle5aLKtmSWba3_pWzNvwMYkPeABFoesuVJzJJQd2UJoiEplKuULmUkTAPJwXdAZpuCbHqRp2igJ2A4yiP24Ah8qK9k9BxTukTmIg6vKzwX9uOderEartalGEdMyZgRBtbQCLeRHthP4kJj4pTfxn-Bv-SofwmlWcXOQmurAzGjFZcVtEAiFTW1kXUiP6BZf7-DidISksPux54ml6iebrergodFtC-W_AXa-ACf-7ABJ7290EbYmY98XWfwQPTpuhlvk0NSERIulOESH_Dp87c_W9q2_wTQIWtK1ZkiO3AkWPHN-owv3npO8lWmIuZW-IC-mG6e4yR1g",
        "refreshToken": "AMf-vBzvTfBYHKJGtgj0x0THQaiN1JLO45mMz1nnfDZyyjrHi8BXicS7xqb7HK1d3tHoJ_Y7tpSCIqpCUiiZ4nwyWfhb2cIcTboUR4KxXJS4pryWTdydjIe6Ky2WVdJj6WYDsu2brKv8gf9-cMKrJEvCRk-S00ICyD269cLK0YwRAzwxgS7qrQH8SJaXoJmEWtDkB4QmTjj9WWlxuHuV5MdcWa1jKPjgZQDrRJHCbz8DEsajvtfmqkaNCTTt7XIFjqnv1ViIYkUp",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 341.8 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/LjO7Q26DJ3WHnq66vseNnfYpPon2 (1271.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQzMzMzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDMzMzMsImV4cCI6MTc0OTE0NjkzMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H3R7CYwPh5zle5aLKtmSWba3_pWzNvwMYkPeABFoesuVJzJJQd2UJoiEplKuULmUkTAPJwXdAZpuCbHqRp2igJ2A4yiP24Ah8qK9k9BxTukTmIg6vKzwX9uOderEartalGEdMyZgRBtbQCLeRHthP4kJj4pTfxn-Bv-SofwmlWcXOQmurAzGjFZcVtEAiFTW1kXUiP6BZf7-DidISksPux54ml6iebrergodFtC-W_AXa-ACf-7ABJ7290EbYmY98XWfwQPTpuhlvk0NSERIulOESH_Dp87c_W9q2_wTQIWtK1ZkiO3AkWPHN-owv3npO8lWmIuZW-IC-mG6e4yR1g"
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
    "date": "Thu, 05 Jun 2025 17:08:55 GMT",
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

**⏱️ Duration:** 1271.4 ms  

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
- Total test users created: 3
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
