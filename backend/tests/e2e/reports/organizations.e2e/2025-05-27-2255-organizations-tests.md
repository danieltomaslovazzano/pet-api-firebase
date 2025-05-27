# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 10:55:03 PM  
**Duration:** 35.56s  
**Tests:** 16 total, 16 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 1.41s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.73s | Regular user should create organization successfully |
| ✅ Should fail without authentication | PASSED | 0.09s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.75s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.63s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.02s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.81s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.66s | Should fail without proper permissions |
| ✅ Admin should delete organization successfully | PASSED | 1.54s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.38s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.83s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.44s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.65s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.69s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 1.27s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 1.44s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (1403.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Test Organization 1748379271451",
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
    "content-length": "369",
    "etag": "W/\"171-yqTL+qGdKCDRyYrnPR3ZT4/11tE\"",
    "date": "Tue, 27 May 2025 20:54:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "81c3619b-de3c-4d7c-9add-8f0140ea17c7",
    "name": "Test Organization 1748379271451",
    "description": "Test organization for E2E testing",
    "logo": null,
    "address": "123 Test Street",
    "phone": "+1234567890",
    "email": "test@organization.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:32.363Z",
    "updatedAt": "2025-05-27T20:54:32.363Z"
  }
}
```

**⏱️ Duration:** 1403.6 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] POST http://localhost:3000/api/organizations - Test: Organizations E2E Tests Create Organization Admin should create organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 4
ℹ️ [REQUEST WRAPPER] Logged successful request: POST http://localhost:3000/api/organizations -> 201
```

---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (728.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI3MSwidXNlcl9pZCI6IkJGY3JBRGw0Um9TVGxhTUtkMlJMV05vUHRrUjIiLCJzdWIiOiJCRmNyQURsNFJvU1RsYU1LZDJSTFdOb1B0a1IyIiwiaWF0IjoxNzQ4Mzc5MjcxLCJleHAiOjE3NDgzODI4NzEsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5MjY5NTQyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTI2OTU0MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mnpKgvbfEG5hMLLvlVDJsQsNlHNAPm9f3ejKGh3HnSu4-0pCS9VyNvq5JwCfGUeBRyb-tMmRJY3cAeOJvGgmS9kNgo_U1ZThuQQ4CT95S1R67BUCU_XZt7-ytDrwMP_kBPe9rhl4VNzNLby1Nlywg6agXCVu6h52bp0kP4U1SoqebYISvNFyihg_yA_6NK_cypt80WWICadppMhNsekHPYM1nGyFAFoGzWHtrca6Z9dsaN9bnMADIYD_gzxBxUb9PTjTW5kfk3FPTfPR_nusH_ZB4aqD2j2aEN1kfNIF0OSSBuCZjrt9cIhroFut29T4-j8k3bBsYMOABI-Up_MMmA"
  },
  "data": {
    "name": "User Org 1748379272863",
    "description": "Organization created by regular user",
    "email": "user-org-1748379272863@example.com"
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
    "content-length": "354",
    "etag": "W/\"162-YtLhWXQ9I1RB2bcEX8ARNPBNB5Y\"",
    "date": "Tue, 27 May 2025 20:54:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "02552add-8010-403d-b80f-82a41f979fa0",
    "name": "User Org 1748379272863",
    "description": "Organization created by regular user",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "user-org-1748379272863@example.com",
    "status": "active",
    "createdBy": "BFcrADl4RoSTlaMKd2RLWNoPtkR2",
    "createdAt": "2025-05-27T20:54:33.490Z",
    "updatedAt": "2025-05-27T20:54:33.490Z"
  }
}
```

**⏱️ Duration:** 728.3 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] POST http://localhost:3000/api/organizations - Test: Organizations E2E Tests Create Organization Regular user should create organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 5
ℹ️ [REQUEST WRAPPER] Logged successful request: POST http://localhost:3000/api/organizations -> 201
```

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.09s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (82.5ms)</summary>

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
    "date": "Tue, 27 May 2025 20:54:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 82.5 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (620.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Get Test Org 1748379273681",
    "description": "Organization for get tests",
    "email": "get-test-org-1748379273681@example.com"
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
    "content-length": "352",
    "etag": "W/\"160-89OT4QFayc9ONxDFe8vMfffWro4\"",
    "date": "Tue, 27 May 2025 20:54:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "63939b22-43cc-46a2-b823-63fbc9b47446",
    "name": "Get Test Org 1748379273681",
    "description": "Organization for get tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "get-test-org-1748379273681@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:34.246Z",
    "updatedAt": "2025-05-27T20:54:34.246Z"
  }
}
```

**⏱️ Duration:** 620.5 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/63939b22-43cc-46a2-b823-63fbc9b47446 (15.2ms)</summary>

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
    "date": "Tue, 27 May 2025 20:54:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 15.2 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (589.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Update Test Org 1748379275707",
    "description": "Organization for update tests",
    "email": "update-test-org-1748379275707@example.com"
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
    "content-length": "361",
    "etag": "W/\"169-0ApUSGK9NUixVlaLp7+dhpqBKh4\"",
    "date": "Tue, 27 May 2025 20:54:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "17c519a4-2618-4e12-9b83-3ae236c58a5e",
    "name": "Update Test Org 1748379275707",
    "description": "Organization for update tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "update-test-org-1748379275707@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:36.241Z",
    "updatedAt": "2025-05-27T20:54:36.241Z"
  }
}
```

**⏱️ Duration:** 589.2 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] POST http://localhost:3000/api/organizations - Test: Organizations E2E Tests Create Organization Should fail without authentication
ℹ️ [REQUEST WRAPPER] Total logs stored: 6
ℹ️ [REQUEST WRAPPER] Logged failed request: POST http://localhost:3000/api/organizations -> 401
```

---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/63939b22-43cc-46a2-b823-63fbc9b47446 (747.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "content-length": "369",
    "etag": "W/\"171-OcbXmK7VKzg3RiKBiW/QQvQsKN8\"",
    "date": "Tue, 27 May 2025 20:54:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "63939b22-43cc-46a2-b823-63fbc9b47446",
    "name": "Get Test Org 1748379273681",
    "description": "Organization for get tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "get-test-org-1748379273681@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:34.246Z",
    "updatedAt": "2025-05-27T20:54:34.246Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 747.0 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/63939b22-43cc-46a2-b823-63fbc9b47446 - Test: Organizations E2E Tests Get Organization by ID Admin should get organization by ID
ℹ️ [REQUEST WRAPPER] Total logs stored: 8
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/63939b22-43cc-46a2-b823-63fbc9b47446 -> 200
```

---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/invalid-id (625.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "content-length": "77",
    "etag": "W/\"4d-T9zkoRYiz+OlOFpioSotxFYYA5Y\"",
    "date": "Tue, 27 May 2025 20:54:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found",
    "details": "Invalid organization ID format"
  }
}
```

**⏱️ Duration:** 625.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/invalid-id - Test: Organizations E2E Tests Get Organization by ID Should fail with invalid organization ID
ℹ️ [REQUEST WRAPPER] Total logs stored: 9
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/organizations/invalid-id -> 404
```

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (82.5ms)</summary>

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
    "date": "Tue, 27 May 2025 20:54:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 82.5 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (620.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Get Test Org 1748379273681",
    "description": "Organization for get tests",
    "email": "get-test-org-1748379273681@example.com"
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
    "content-length": "352",
    "etag": "W/\"160-89OT4QFayc9ONxDFe8vMfffWro4\"",
    "date": "Tue, 27 May 2025 20:54:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "63939b22-43cc-46a2-b823-63fbc9b47446",
    "name": "Get Test Org 1748379273681",
    "description": "Organization for get tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "get-test-org-1748379273681@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:34.246Z",
    "updatedAt": "2025-05-27T20:54:34.246Z"
  }
}
```

**⏱️ Duration:** 620.5 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/63939b22-43cc-46a2-b823-63fbc9b47446 (15.2ms)</summary>

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
    "date": "Tue, 27 May 2025 20:54:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 15.2 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (589.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Update Test Org 1748379275707",
    "description": "Organization for update tests",
    "email": "update-test-org-1748379275707@example.com"
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
    "content-length": "361",
    "etag": "W/\"169-0ApUSGK9NUixVlaLp7+dhpqBKh4\"",
    "date": "Tue, 27 May 2025 20:54:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "17c519a4-2618-4e12-9b83-3ae236c58a5e",
    "name": "Update Test Org 1748379275707",
    "description": "Organization for update tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "update-test-org-1748379275707@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:36.241Z",
    "updatedAt": "2025-05-27T20:54:36.241Z"
  }
}
```

**⏱️ Duration:** 589.2 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/63939b22-43cc-46a2-b823-63fbc9b47446 - Test: Organizations E2E Tests Get Organization by ID Should fail without authentication
ℹ️ [REQUEST WRAPPER] Total logs stored: 10
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/organizations/63939b22-43cc-46a2-b823-63fbc9b47446 -> 401
```

---

### Test: Admin should update organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/17c519a4-2618-4e12-9b83-3ae236c58a5e (796.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Updated Update Test Org 1748379275707",
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
    "content-length": "368",
    "etag": "W/\"170-/55iJws+uTSY4neJj9sErTfjpCg\"",
    "date": "Tue, 27 May 2025 20:54:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "17c519a4-2618-4e12-9b83-3ae236c58a5e",
    "name": "Updated Update Test Org 1748379275707",
    "description": "Updated description",
    "logo": null,
    "address": null,
    "phone": "+9876543210",
    "email": "update-test-org-1748379275707@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:36.241Z",
    "updatedAt": "2025-05-27T20:54:37.001Z"
  }
}
```

**⏱️ Duration:** 796.8 ms  

</details>


**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 17c519a4-2618-4e12-9b83-3ae236c58a5e
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748379275707",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZW
ℹ️ [REQUEST WRAPPER] PUT http://localhost:3000/api/organizations/17c519a4-2618-4e12-9b83-3ae236c58a5e - Test: Organizations E2E Tests Update Organization Admin should update organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 12
ℹ️ [REQUEST WRAPPER] Logged successful request: PUT http://localhost:3000/api/organizations/17c519a4-2618-4e12-9b83-3ae236c58a5e -> 200
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/17c519a4-2618-4e12-9b83-3ae236c58a5e (654.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI3MSwidXNlcl9pZCI6IkJGY3JBRGw0Um9TVGxhTUtkMlJMV05vUHRrUjIiLCJzdWIiOiJCRmNyQURsNFJvU1RsYU1LZDJSTFdOb1B0a1IyIiwiaWF0IjoxNzQ4Mzc5MjcxLCJleHAiOjE3NDgzODI4NzEsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5MjY5NTQyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTI2OTU0MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mnpKgvbfEG5hMLLvlVDJsQsNlHNAPm9f3ejKGh3HnSu4-0pCS9VyNvq5JwCfGUeBRyb-tMmRJY3cAeOJvGgmS9kNgo_U1ZThuQQ4CT95S1R67BUCU_XZt7-ytDrwMP_kBPe9rhl4VNzNLby1Nlywg6agXCVu6h52bp0kP4U1SoqebYISvNFyihg_yA_6NK_cypt80WWICadppMhNsekHPYM1nGyFAFoGzWHtrca6Z9dsaN9bnMADIYD_gzxBxUb9PTjTW5kfk3FPTfPR_nusH_ZB4aqD2j2aEN1kfNIF0OSSBuCZjrt9cIhroFut29T4-j8k3bBsYMOABI-Up_MMmA"
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
    "date": "Tue, 27 May 2025 20:54:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 654.4 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (717.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Delete Test Org 1748379277768",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748379277768@example.com"
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
    "content-length": "361",
    "etag": "W/\"169-HnkrGYOG1eaFsVf1B2T2NI8ME44\"",
    "date": "Tue, 27 May 2025 20:54:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7607df54-ce3b-4b89-b88c-58044b6c1b6b",
    "name": "Delete Test Org 1748379277768",
    "description": "Organization for delete tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "delete-test-org-1748379277768@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:38.420Z",
    "updatedAt": "2025-05-27T20:54:38.420Z"
  }
}
```

**⏱️ Duration:** 717.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (713.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "No Delete Perm Org 1748379280032",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748379280032@example.com"
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
    "content-length": "370",
    "etag": "W/\"172-VK0vA98emDHSO5/cJV5p0PAMPpg\"",
    "date": "Tue, 27 May 2025 20:54:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "40ab6292-f5e4-4069-869f-d6311d039601",
    "name": "No Delete Perm Org 1748379280032",
    "description": "Organization for permission test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "no-delete-perm-org-1748379280032@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:40.691Z",
    "updatedAt": "2025-05-27T20:54:40.691Z"
  }
}
```

**⏱️ Duration:** 713.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/40ab6292-f5e4-4069-869f-d6311d039601 (661.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI3MSwidXNlcl9pZCI6IkJGY3JBRGw0Um9TVGxhTUtkMlJMV05vUHRrUjIiLCJzdWIiOiJCRmNyQURsNFJvU1RsYU1LZDJSTFdOb1B0a1IyIiwiaWF0IjoxNzQ4Mzc5MjcxLCJleHAiOjE3NDgzODI4NzEsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5MjY5NTQyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTI2OTU0MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mnpKgvbfEG5hMLLvlVDJsQsNlHNAPm9f3ejKGh3HnSu4-0pCS9VyNvq5JwCfGUeBRyb-tMmRJY3cAeOJvGgmS9kNgo_U1ZThuQQ4CT95S1R67BUCU_XZt7-ytDrwMP_kBPe9rhl4VNzNLby1Nlywg6agXCVu6h52bp0kP4U1SoqebYISvNFyihg_yA_6NK_cypt80WWICadppMhNsekHPYM1nGyFAFoGzWHtrca6Z9dsaN9bnMADIYD_gzxBxUb9PTjTW5kfk3FPTfPR_nusH_ZB4aqD2j2aEN1kfNIF0OSSBuCZjrt9cIhroFut29T4-j8k3bBsYMOABI-Up_MMmA"
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
    "date": "Tue, 27 May 2025 20:54:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 661.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] PUT http://localhost:3000/api/organizations/17c519a4-2618-4e12-9b83-3ae236c58a5e - Test: Organizations E2E Tests Update Organization Should fail without proper permissions
ℹ️ [REQUEST WRAPPER] Total logs stored: 13
ℹ️ [REQUEST WRAPPER] Logged failed request: PUT http://localhost:3000/api/organizations/17c519a4-2618-4e12-9b83-3ae236c58a5e -> 403
```

---

### Test: Admin should delete organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/organizations/7607df54-ce3b-4b89-b88c-58044b6c1b6b (922.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 922.7 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/7607df54-ce3b-4b89-b88c-58044b6c1b6b (614.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 614.6 ms  
**❌ Error:** Request failed with status code 404  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] DELETE http://localhost:3000/api/organizations/7607df54-ce3b-4b89-b88c-58044b6c1b6b - Test: Organizations E2E Tests Delete Organization Admin should delete organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 15
ℹ️ [REQUEST WRAPPER] Logged successful request: DELETE http://localhost:3000/api/organizations/7607df54-ce3b-4b89-b88c-58044b6c1b6b -> 200
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/7607df54-ce3b-4b89-b88c-58044b6c1b6b - Test: Organizations E2E Tests Delete Organization Admin should delete organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 16
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/organizations/7607df54-ce3b-4b89-b88c-58044b6c1b6b -> 404
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.38s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/17c519a4-2618-4e12-9b83-3ae236c58a5e (654.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI3MSwidXNlcl9pZCI6IkJGY3JBRGw0Um9TVGxhTUtkMlJMV05vUHRrUjIiLCJzdWIiOiJCRmNyQURsNFJvU1RsYU1LZDJSTFdOb1B0a1IyIiwiaWF0IjoxNzQ4Mzc5MjcxLCJleHAiOjE3NDgzODI4NzEsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5MjY5NTQyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTI2OTU0MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mnpKgvbfEG5hMLLvlVDJsQsNlHNAPm9f3ejKGh3HnSu4-0pCS9VyNvq5JwCfGUeBRyb-tMmRJY3cAeOJvGgmS9kNgo_U1ZThuQQ4CT95S1R67BUCU_XZt7-ytDrwMP_kBPe9rhl4VNzNLby1Nlywg6agXCVu6h52bp0kP4U1SoqebYISvNFyihg_yA_6NK_cypt80WWICadppMhNsekHPYM1nGyFAFoGzWHtrca6Z9dsaN9bnMADIYD_gzxBxUb9PTjTW5kfk3FPTfPR_nusH_ZB4aqD2j2aEN1kfNIF0OSSBuCZjrt9cIhroFut29T4-j8k3bBsYMOABI-Up_MMmA"
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
    "date": "Tue, 27 May 2025 20:54:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 654.4 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (717.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Delete Test Org 1748379277768",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748379277768@example.com"
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
    "content-length": "361",
    "etag": "W/\"169-HnkrGYOG1eaFsVf1B2T2NI8ME44\"",
    "date": "Tue, 27 May 2025 20:54:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7607df54-ce3b-4b89-b88c-58044b6c1b6b",
    "name": "Delete Test Org 1748379277768",
    "description": "Organization for delete tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "delete-test-org-1748379277768@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:38.420Z",
    "updatedAt": "2025-05-27T20:54:38.420Z"
  }
}
```

**⏱️ Duration:** 717.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (713.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "No Delete Perm Org 1748379280032",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748379280032@example.com"
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
    "content-length": "370",
    "etag": "W/\"172-VK0vA98emDHSO5/cJV5p0PAMPpg\"",
    "date": "Tue, 27 May 2025 20:54:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "40ab6292-f5e4-4069-869f-d6311d039601",
    "name": "No Delete Perm Org 1748379280032",
    "description": "Organization for permission test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "no-delete-perm-org-1748379280032@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:40.691Z",
    "updatedAt": "2025-05-27T20:54:40.691Z"
  }
}
```

**⏱️ Duration:** 713.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/40ab6292-f5e4-4069-869f-d6311d039601 (661.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI3MSwidXNlcl9pZCI6IkJGY3JBRGw0Um9TVGxhTUtkMlJMV05vUHRrUjIiLCJzdWIiOiJCRmNyQURsNFJvU1RsYU1LZDJSTFdOb1B0a1IyIiwiaWF0IjoxNzQ4Mzc5MjcxLCJleHAiOjE3NDgzODI4NzEsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5MjY5NTQyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTI2OTU0MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mnpKgvbfEG5hMLLvlVDJsQsNlHNAPm9f3ejKGh3HnSu4-0pCS9VyNvq5JwCfGUeBRyb-tMmRJY3cAeOJvGgmS9kNgo_U1ZThuQQ4CT95S1R67BUCU_XZt7-ytDrwMP_kBPe9rhl4VNzNLby1Nlywg6agXCVu6h52bp0kP4U1SoqebYISvNFyihg_yA_6NK_cypt80WWICadppMhNsekHPYM1nGyFAFoGzWHtrca6Z9dsaN9bnMADIYD_gzxBxUb9PTjTW5kfk3FPTfPR_nusH_ZB4aqD2j2aEN1kfNIF0OSSBuCZjrt9cIhroFut29T4-j8k3bBsYMOABI-Up_MMmA"
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
    "date": "Tue, 27 May 2025 20:54:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 661.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] POST http://localhost:3000/api/organizations - Test: Organizations E2E Tests Delete Organization Should fail without proper permissions
ℹ️ [REQUEST WRAPPER] Total logs stored: 17
ℹ️ [REQUEST WRAPPER] Logged successful request: POST http://localhost:3000/api/organizations -> 201
ℹ️ [REQUEST WRAPPER] DELETE http://localhost:3000/api/organizations/40ab6292-f5e4-4069-869f-d6311d039601 - Test: Organizations E2E Tests Delete Organization Should fail without proper permissions
ℹ️ [REQUEST WRAPPER] Total logs stored: 18
ℹ️ [REQUEST WRAPPER] Logged failed request: DELETE http://localhost:3000/api/organizations/40ab6292-f5e4-4069-869f-d6311d039601 -> 403
```

---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (833.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "content-length": "34379",
    "etag": "W/\"864b-4FJL8+Cyk9XnARKgNLhJPV9uJ44\"",
    "date": "Tue, 27 May 2025 20:54:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "82e1e643-95f4-4b33-b726-c7c80fe173f3",
      "name": "OrgA",
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
      "id": "635c02b3-d67d-4e12-b0da-83172e9e40f9",
      "name": "Delete Test Org 1748344700836",
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
      "id": "81c3619b-de3c-4d7c-9add-8f0140ea17c7",
      "name": "Test Organization 1748379271451",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:54:32.363Z",
      "updatedAt": "2025-05-27T20:54:32.363Z",
      "memberships": []
    },
    {
      "id": "02552add-8010-403d-b80f-82a41f979fa0",
      "name": "User Org 1748379272863",
      "description": "Organization created by regular user",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "user-org-1748379272863@example.com",
      "status": "active",
      "createdBy": "BFcrADl4RoSTlaMKd2RLWNoPtkR2",
      "createdAt": "2025-05-27T20:54:33.490Z",
      "updatedAt": "2025-05-27T20:54:33.490Z",
      "memberships": []
    },
    {
      "id": "63939b22-43cc-46a2-b823-63fbc9b47446",
      "name": "Get Test Org 1748379273681",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748379273681@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:54:34.246Z",
      "updatedAt": "2025-05-27T20:54:34.246Z",
      "memberships": []
    },
    {
      "id": "17c519a4-2618-4e12-9b83-3ae236c58a5e",
      "name": "Updated Update Test Org 1748379275707",
      "description": "Updated description",
      "logo": null,
      "address": null,
      "phone": "+9876543210",
      "email": "update-test-org-1748379275707@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:54:36.241Z",
      "updatedAt": "2025-05-27T20:54:37.001Z",
      "memberships": []
    },
    {
      "id": "40ab6292-f5e4-4069-869f-d6311d039601",
      "name": "No Delete Perm Org 1748379280032",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748379280032@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:54:40.691Z",
      "updatedAt": "2025-05-27T20:54:40.691Z",
      "memberships": []
    }
  ]
}
```

**⏱️ Duration:** 833.2 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/admin/organizations - Test: Organizations E2E Tests List Organizations Admin should list all organizations
ℹ️ [REQUEST WRAPPER] Total logs stored: 19
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/admin/organizations -> 200
```

---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (437.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI3MSwidXNlcl9pZCI6IkJGY3JBRGw0Um9TVGxhTUtkMlJMV05vUHRrUjIiLCJzdWIiOiJCRmNyQURsNFJvU1RsYU1LZDJSTFdOb1B0a1IyIiwiaWF0IjoxNzQ4Mzc5MjcxLCJleHAiOjE3NDgzODI4NzEsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5MjY5NTQyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTI2OTU0MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mnpKgvbfEG5hMLLvlVDJsQsNlHNAPm9f3ejKGh3HnSu4-0pCS9VyNvq5JwCfGUeBRyb-tMmRJY3cAeOJvGgmS9kNgo_U1ZThuQQ4CT95S1R67BUCU_XZt7-ytDrwMP_kBPe9rhl4VNzNLby1Nlywg6agXCVu6h52bp0kP4U1SoqebYISvNFyihg_yA_6NK_cypt80WWICadppMhNsekHPYM1nGyFAFoGzWHtrca6Z9dsaN9bnMADIYD_gzxBxUb9PTjTW5kfk3FPTfPR_nusH_ZB4aqD2j2aEN1kfNIF0OSSBuCZjrt9cIhroFut29T4-j8k3bBsYMOABI-Up_MMmA"
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
    "date": "Tue, 27 May 2025 20:54:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 437.3 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (624.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
  },
  "data": {
    "name": "Members Test Org 1748379282691",
    "description": "Organization for members tests",
    "email": "members-test-org-1748379282691@example.com"
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
    "content-length": "364",
    "etag": "W/\"16c-AaVm26QxSYG/yl76NcZ1e0L6Pn0\"",
    "date": "Tue, 27 May 2025 20:54:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a4ad2c84-b58e-474a-8d67-e62694213e03",
    "name": "Members Test Org 1748379282691",
    "description": "Organization for members tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "members-test-org-1748379282691@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:54:43.259Z",
    "updatedAt": "2025-05-27T20:54:43.259Z"
  }
}
```

**⏱️ Duration:** 624.8 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/admin/organizations - Test: Organizations E2E Tests List Organizations Should fail without admin permissions
ℹ️ [REQUEST WRAPPER] Total logs stored: 20
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/admin/organizations -> 403
```

---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/a4ad2c84-b58e-474a-8d67-e62694213e03/members (646.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 646.1 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/a4ad2c84-b58e-474a-8d67-e62694213e03/members - Test: Organizations E2E Tests Get Organization Members Admin should get organization members
ℹ️ [REQUEST WRAPPER] Total logs stored: 22
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/a4ad2c84-b58e-474a-8d67-e62694213e03/members -> 200
```

---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/a4ad2c84-b58e-474a-8d67-e62694213e03/members (687.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI3MSwidXNlcl9pZCI6IkJGY3JBRGw0Um9TVGxhTUtkMlJMV05vUHRrUjIiLCJzdWIiOiJCRmNyQURsNFJvU1RsYU1LZDJSTFdOb1B0a1IyIiwiaWF0IjoxNzQ4Mzc5MjcxLCJleHAiOjE3NDgzODI4NzEsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5MjY5NTQyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTI2OTU0MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mnpKgvbfEG5hMLLvlVDJsQsNlHNAPm9f3ejKGh3HnSu4-0pCS9VyNvq5JwCfGUeBRyb-tMmRJY3cAeOJvGgmS9kNgo_U1ZThuQQ4CT95S1R67BUCU_XZt7-ytDrwMP_kBPe9rhl4VNzNLby1Nlywg6agXCVu6h52bp0kP4U1SoqebYISvNFyihg_yA_6NK_cypt80WWICadppMhNsekHPYM1nGyFAFoGzWHtrca6Z9dsaN9bnMADIYD_gzxBxUb9PTjTW5kfk3FPTfPR_nusH_ZB4aqD2j2aEN1kfNIF0OSSBuCZjrt9cIhroFut29T4-j8k3bBsYMOABI-Up_MMmA"
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
    "date": "Tue, 27 May 2025 20:54:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. You must be a member to view organization members."
  }
}
```

**⏱️ Duration:** 687.0 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (929.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748379284663@example.com",
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
    "etag": "W/\"5ae-0BjeEDP+RNma/WfwYENgr0q5iFA\"",
    "date": "Tue, 27 May 2025 20:54:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "C7TlaDEGKAOkMwWSX442hGIEQS73",
      "email": "org1-admin-1748379284663@example.com",
      "name": "Org1 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI4NSwidXNlcl9pZCI6IkM3VGxhREVHS0FPa013V1NYNDQyaEdJRVFTNzMiLCJzdWIiOiJDN1RsYURFR0tBT2tNd1dTWDQ0MmhHSUVRUzczIiwiaWF0IjoxNzQ4Mzc5Mjg1LCJleHAiOjE3NDgzODI4ODUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5Mjg0NjYzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTI4NDY2M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JECx8---6Sti3cBITfExczFEY8AxAlI2oaoKd3R2TlntLcxK3uvKX9-2uqVwQg1gvIfkhgMAW06XfQfmZl9__9xXIGjY7fVYjDzwCq5aHsZichABRREE1aDFlDIKaR5N_x8_YwJzSCAcE9RNgN0XSSHdkSjrbi1mZyxSxZ4jk85p-60DG9xvTozvci3qEUCfnCp_c5m56RPiHllbKsxaIFtYkaqfHlwM4lyBxHoY4JdDiDmHpPH44H0SIoMYaUW9uWE2hOD_n2eA83GVDRgJADRn6LZBrZoyb9N8F6XDeJ20nhQ3KymaR0kgZJZYVZloLn5_v6SQB1UT94gRia9TNQ",
      "refreshToken": "AMf-vBzH20Pw28z3110QynWqGkMuTztFl_CpnQUPx-NPZKljeziPYnxntbzyifiENEtuGabcfRx1-KC_Ah901j5tqKWuf50f8ZHhmdqpylcSAbVSjOTYQzlj50WfW6Myc0kKSJdlb_elQYtREG2B_hpuf7fedhlmdgOYL_2-iXRedfJXBFsLqPXT4EVFpYqUmhxbwXnS5zJQsVBhPKkeCGhO5F58Q55zuyLvkJsWrGjTKTkTKgn1ehg",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 929.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1022.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748379285596@example.com",
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
    "etag": "W/\"5ae-TLsHd9R0jecPASs1yIOFYwM2Z7Y\"",
    "date": "Tue, 27 May 2025 20:54:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "bNHYt8QmdbhtDZtmkTpoUWjVPW12",
      "email": "org2-admin-1748379285596@example.com",
      "name": "Org2 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI4NiwidXNlcl9pZCI6ImJOSFl0OFFtZGJodERadG1rVHBvVVdqVlBXMTIiLCJzdWIiOiJiTkhZdDhRbWRiaHREWnRta1Rwb1VXalZQVzEyIiwiaWF0IjoxNzQ4Mzc5Mjg2LCJleHAiOjE3NDgzODI4ODYsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4Mzc5Mjg1NTk2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODM3OTI4NTU5NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kNQfUeirOql_hyTL-8QXT49r5gd1osJ_rHwdIF9-GQ8AVt4M1kJUTkRdOBH0s0JXPqAijL9-MzM8LbBpu1gvM88dYlzd_k0MHNyrjFoby7DWvcnoPBSU7-yQtvj3SdRerlS-l6s_aZUQKPtM20TYjUxLPAjj-SB2Zgv2vsWBswb4q05K5c0Wm0ucTvH-EN32yACXzqYVtPnHyF9dBxyCjJl3FIQB6WaWojwkcTmt534U1lyZlcK4KqM7wq3sx8UHACJnOyoVVU7ppiN27zd-5wNOpVfcdY1NZnrkZxXuHIXdu6MfG7HH6TFj815H2EehsVKJkmAoxkr8EElucUJU4Q",
      "refreshToken": "AMf-vBz96AEjU9fvIbykdkdzR7s9Aj3Qy_HA4T-kSUA01Ftuy2i41lE4wEnrJbGKfn-nSAe_VEDdTuNogThBMombmF21qT3aJEmfGEC1PFzWdDE5_zdACCfsoq6_JwI-25ySkj8U7ej0O3l-MDAXiYwQd6D5TRHXTPK_NYv5dL5QQY-sxGC1mI0RT5i3tZ7Q6_zVtlsf06VMayDX7hHBZbeo1li6lYitsjiSuiuwuPlmm2baXuCQbug",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1022.3 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (361.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748379284663@example.com",
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
    "etag": "W/\"582-lF7hlPI5IgjzR7M7+k/NYfurfgc\"",
    "date": "Tue, 27 May 2025 20:54:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "C7TlaDEGKAOkMwWSX442hGIEQS73",
      "email": "org1-admin-1748379284663@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI4NiwidXNlcl9pZCI6IkM3VGxhREVHS0FPa013V1NYNDQyaEdJRVFTNzMiLCJzdWIiOiJDN1RsYURFR0tBT2tNd1dTWDQ0MmhHSUVRUzczIiwiaWF0IjoxNzQ4Mzc5Mjg2LCJleHAiOjE3NDgzODI4ODYsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5Mjg0NjYzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTI4NDY2M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.C0_Paa75t2appmugcjPX7wMVdFU1Skta19v5w3IOAo93RIddld6bap9tLKPLIBXWiQwmGSfvte3fFPb2bI3BdLoMiPz3mIW8NzBz_WsBb-DMCVY_8NOPsjRW12Nu3TKQreygD8ezZfSjMoY0hRmesrbioe4YkWsxKn6IqfCk06FomC2ZBBNoUKflhwwdVLXTcC9Hmh9LT38VkXYAQOQhybQ9dDHpSEr-13-2Fbbez0eZ6ZJvVY8o0qIi3jFHYYaBnpigPzEPi3hJQFh4243cTPaEFHBJhKJ7WtlB1b7TfaejAyYTjhtnlzgIH-i2A9Zhpf9USR87ZZcP2dzeD067ng",
      "refreshToken": "AMf-vBzkJTKrNfoXw1SOQ8c5vfSAQWEAgyymdHIXzyDkug4IU2gsTGw2m6LdMFim1KWSYLV9sup6basRo9jfLSW00MKX4JwKa95fNTdW1IKkj1WdVHucdz7TJaNx4JvY5j-fmbxtAedl7nPzz6dlDaQBjoDLCn6XeSH3aNW3pX6n1buomm0CZx7VMArksHxa2cE1G8zbrFUWeHu1ZlPKyvVlBvw4YEf5H6t57Aolu1R26vrYk2Vwwk4",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 361.1 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (300.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748379285596@example.com",
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
    "etag": "W/\"582-w0ttI2posBWL7643mBbKg5ngbss\"",
    "date": "Tue, 27 May 2025 20:54:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "bNHYt8QmdbhtDZtmkTpoUWjVPW12",
      "email": "org2-admin-1748379285596@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI4NywidXNlcl9pZCI6ImJOSFl0OFFtZGJodERadG1rVHBvVVdqVlBXMTIiLCJzdWIiOiJiTkhZdDhRbWRiaHREWnRta1Rwb1VXalZQVzEyIiwiaWF0IjoxNzQ4Mzc5Mjg3LCJleHAiOjE3NDgzODI4ODcsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4Mzc5Mjg1NTk2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODM3OTI4NTU5NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m5J2gmwuvpFWSDPnmSbSycnZjGp0LDZ-x-W9zCwz6IfiAa-j8e1PfPD8lSeUYU3PNrhLUjiye7po6allm111c8MAaLPRpbqmt4I_eBTnG3bBBzrosK4omCjliJbrJ8Wy0fsS_nxYwll3pkYL1y0cou3sEIViSxQ86xBWhELu7CGlNQdRGdMjQwoK6pafX9TWMjJ5JFdB0puQHfYpU2tfUu6wU0_mVZ6-g3RYGKFJWf9E_PdLBBjJl9vyBulkht5LjJbWjcUnhv1AoN5e9gLkgMGirIYXx8aH-yvoblX8nNHcNQU6qKGPD45KGaPPrmwOdVTXl9HpZADPGeAeTP6MHg",
      "refreshToken": "AMf-vBzUdSx5C7Xmia4_6mLb6auF_OOgI9AW5G-lp6fU3rJJU6SzEigKNowwZav5Z2xfVmL0xQVZquZl6iJsbHe-kDzx0URAH3HP9BNYm0FjniQrlSThzvp-cTjVq7ooNnzNtgC63HS2JFYNw8-awgAxlCO8Js5sSuHhem1QsOyFg6_bpznfNI0xmYB8L3FqNJpjpQLVzLB9ht3B8HdZ2o3npV5ubuw5CDCl1TTZKpefmCumUT2rqGk",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 300.5 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/organizations (686.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI4NiwidXNlcl9pZCI6IkM3VGxhREVHS0FPa013V1NYNDQyaEdJRVFTNzMiLCJzdWIiOiJDN1RsYURFR0tBT2tNd1dTWDQ0MmhHSUVRUzczIiwiaWF0IjoxNzQ4Mzc5Mjg2LCJleHAiOjE3NDgzODI4ODYsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5Mjg0NjYzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTI4NDY2M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.C0_Paa75t2appmugcjPX7wMVdFU1Skta19v5w3IOAo93RIddld6bap9tLKPLIBXWiQwmGSfvte3fFPb2bI3BdLoMiPz3mIW8NzBz_WsBb-DMCVY_8NOPsjRW12Nu3TKQreygD8ezZfSjMoY0hRmesrbioe4YkWsxKn6IqfCk06FomC2ZBBNoUKflhwwdVLXTcC9Hmh9LT38VkXYAQOQhybQ9dDHpSEr-13-2Fbbez0eZ6ZJvVY8o0qIi3jFHYYaBnpigPzEPi3hJQFh4243cTPaEFHBJhKJ7WtlB1b7TfaejAyYTjhtnlzgIH-i2A9Zhpf9USR87ZZcP2dzeD067ng"
  },
  "data": {
    "name": "Org1 1748379287287",
    "description": "First organization for multitenant test",
    "email": "org1-1748379287287@example.com"
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
    "content-length": "349",
    "etag": "W/\"15d-lwzjHp3VX0QZjb39mqF+3Zil41M\"",
    "date": "Tue, 27 May 2025 20:54:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "11bc9a94-9687-4bd4-bff5-1c85ee446ec5",
    "name": "Org1 1748379287287",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org1-1748379287287@example.com",
    "status": "active",
    "createdBy": "C7TlaDEGKAOkMwWSX442hGIEQS73",
    "createdAt": "2025-05-27T20:54:47.867Z",
    "updatedAt": "2025-05-27T20:54:47.867Z"
  }
}
```

**⏱️ Duration:** 686.3 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/organizations (660.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI4NywidXNlcl9pZCI6ImJOSFl0OFFtZGJodERadG1rVHBvVVdqVlBXMTIiLCJzdWIiOiJiTkhZdDhRbWRiaHREWnRta1Rwb1VXalZQVzEyIiwiaWF0IjoxNzQ4Mzc5Mjg3LCJleHAiOjE3NDgzODI4ODcsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4Mzc5Mjg1NTk2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODM3OTI4NTU5NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.m5J2gmwuvpFWSDPnmSbSycnZjGp0LDZ-x-W9zCwz6IfiAa-j8e1PfPD8lSeUYU3PNrhLUjiye7po6allm111c8MAaLPRpbqmt4I_eBTnG3bBBzrosK4omCjliJbrJ8Wy0fsS_nxYwll3pkYL1y0cou3sEIViSxQ86xBWhELu7CGlNQdRGdMjQwoK6pafX9TWMjJ5JFdB0puQHfYpU2tfUu6wU0_mVZ6-g3RYGKFJWf9E_PdLBBjJl9vyBulkht5LjJbWjcUnhv1AoN5e9gLkgMGirIYXx8aH-yvoblX8nNHcNQU6qKGPD45KGaPPrmwOdVTXl9HpZADPGeAeTP6MHg"
  },
  "data": {
    "name": "Org2 1748379287975",
    "description": "Second organization for multitenant test",
    "email": "org2-1748379287975@example.com"
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
    "content-length": "350",
    "etag": "W/\"15e-hEiG5sVoEaB78uBBeLtwTQAgXKk\"",
    "date": "Tue, 27 May 2025 20:54:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f008575f-f544-4da4-b013-ff5d1f3b54cb",
    "name": "Org2 1748379287975",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org2-1748379287975@example.com",
    "status": "active",
    "createdBy": "bNHYt8QmdbhtDZtmkTpoUWjVPW12",
    "createdAt": "2025-05-27T20:54:48.581Z",
    "updatedAt": "2025-05-27T20:54:48.581Z"
  }
}
```

**⏱️ Duration:** 660.3 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/a4ad2c84-b58e-474a-8d67-e62694213e03/members - Test: Organizations E2E Tests Get Organization Members Should fail without membership
ℹ️ [REQUEST WRAPPER] Total logs stored: 23
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/organizations/a4ad2c84-b58e-474a-8d67-e62694213e03/members -> 403
```

---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 1.27s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/11bc9a94-9687-4bd4-bff5-1c85ee446ec5 (625.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI4NiwidXNlcl9pZCI6IkM3VGxhREVHS0FPa013V1NYNDQyaEdJRVFTNzMiLCJzdWIiOiJDN1RsYURFR0tBT2tNd1dTWDQ0MmhHSUVRUzczIiwiaWF0IjoxNzQ4Mzc5Mjg2LCJleHAiOjE3NDgzODI4ODYsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5Mjg0NjYzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTI4NDY2M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.C0_Paa75t2appmugcjPX7wMVdFU1Skta19v5w3IOAo93RIddld6bap9tLKPLIBXWiQwmGSfvte3fFPb2bI3BdLoMiPz3mIW8NzBz_WsBb-DMCVY_8NOPsjRW12Nu3TKQreygD8ezZfSjMoY0hRmesrbioe4YkWsxKn6IqfCk06FomC2ZBBNoUKflhwwdVLXTcC9Hmh9LT38VkXYAQOQhybQ9dDHpSEr-13-2Fbbez0eZ6ZJvVY8o0qIi3jFHYYaBnpigPzEPi3hJQFh4243cTPaEFHBJhKJ7WtlB1b7TfaejAyYTjhtnlzgIH-i2A9Zhpf9USR87ZZcP2dzeD067ng"
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
    "content-length": "366",
    "etag": "W/\"16e-PgGlJqaPKz3KTeHr69GCw60Tm4A\"",
    "date": "Tue, 27 May 2025 20:54:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "11bc9a94-9687-4bd4-bff5-1c85ee446ec5",
    "name": "Org1 1748379287287",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org1-1748379287287@example.com",
    "status": "active",
    "createdBy": "C7TlaDEGKAOkMwWSX442hGIEQS73",
    "createdAt": "2025-05-27T20:54:47.867Z",
    "updatedAt": "2025-05-27T20:54:47.867Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 625.2 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/f008575f-f544-4da4-b013-ff5d1f3b54cb (639.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTI4NiwidXNlcl9pZCI6IkM3VGxhREVHS0FPa013V1NYNDQyaEdJRVFTNzMiLCJzdWIiOiJDN1RsYURFR0tBT2tNd1dTWDQ0MmhHSUVRUzczIiwiaWF0IjoxNzQ4Mzc5Mjg2LCJleHAiOjE3NDgzODI4ODYsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5Mjg0NjYzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTI4NDY2M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.C0_Paa75t2appmugcjPX7wMVdFU1Skta19v5w3IOAo93RIddld6bap9tLKPLIBXWiQwmGSfvte3fFPb2bI3BdLoMiPz3mIW8NzBz_WsBb-DMCVY_8NOPsjRW12Nu3TKQreygD8ezZfSjMoY0hRmesrbioe4YkWsxKn6IqfCk06FomC2ZBBNoUKflhwwdVLXTcC9Hmh9LT38VkXYAQOQhybQ9dDHpSEr-13-2Fbbez0eZ6ZJvVY8o0qIi3jFHYYaBnpigPzEPi3hJQFh4243cTPaEFHBJhKJ7WtlB1b7TfaejAyYTjhtnlzgIH-i2A9Zhpf9USR87ZZcP2dzeD067ng"
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
    "content-length": "367",
    "etag": "W/\"16f-vqiooLApzOtWpKly+vCF54u3p60\"",
    "date": "Tue, 27 May 2025 20:54:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f008575f-f544-4da4-b013-ff5d1f3b54cb",
    "name": "Org2 1748379287975",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org2-1748379287975@example.com",
    "status": "active",
    "createdBy": "bNHYt8QmdbhtDZtmkTpoUWjVPW12",
    "createdAt": "2025-05-27T20:54:48.581Z",
    "updatedAt": "2025-05-27T20:54:48.581Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 639.4 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/11bc9a94-9687-4bd4-bff5-1c85ee446ec5 - Test: Organizations E2E Tests Multitenancy Validation Organization admin should only access their own organization
ℹ️ [REQUEST WRAPPER] Total logs stored: 30
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/11bc9a94-9687-4bd4-bff5-1c85ee446ec5 -> 200
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/f008575f-f544-4da4-b013-ff5d1f3b54cb - Test: Organizations E2E Tests Multitenancy Validation Organization admin should only access their own organization
ℹ️ [REQUEST WRAPPER] Total logs stored: 31
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/f008575f-f544-4da4-b013-ff5d1f3b54cb -> 200
```

---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/11bc9a94-9687-4bd4-bff5-1c85ee446ec5 (713.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "content-length": "366",
    "etag": "W/\"16e-PgGlJqaPKz3KTeHr69GCw60Tm4A\"",
    "date": "Tue, 27 May 2025 20:54:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "11bc9a94-9687-4bd4-bff5-1c85ee446ec5",
    "name": "Org1 1748379287287",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org1-1748379287287@example.com",
    "status": "active",
    "createdBy": "C7TlaDEGKAOkMwWSX442hGIEQS73",
    "createdAt": "2025-05-27T20:54:47.867Z",
    "updatedAt": "2025-05-27T20:54:47.867Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 713.4 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/f008575f-f544-4da4-b013-ff5d1f3b54cb (726.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "content-length": "367",
    "etag": "W/\"16f-vqiooLApzOtWpKly+vCF54u3p60\"",
    "date": "Tue, 27 May 2025 20:54:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f008575f-f544-4da4-b013-ff5d1f3b54cb",
    "name": "Org2 1748379287975",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org2-1748379287975@example.com",
    "status": "active",
    "createdBy": "bNHYt8QmdbhtDZtmkTpoUWjVPW12",
    "createdAt": "2025-05-27T20:54:48.581Z",
    "updatedAt": "2025-05-27T20:54:48.581Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 726.7 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/81c3619b-de3c-4d7c-9add-8f0140ea17c7 (849.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 849.4 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/02552add-8010-403d-b80f-82a41f979fa0 (854.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 854.7 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/63939b22-43cc-46a2-b823-63fbc9b47446 (813.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 813.1 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/17c519a4-2618-4e12-9b83-3ae236c58a5e (923.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 923.0 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/40ab6292-f5e4-4069-869f-d6311d039601 (922.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 922.8 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/a4ad2c84-b58e-474a-8d67-e62694213e03 (911.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 911.4 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/organizations/11bc9a94-9687-4bd4-bff5-1c85ee446ec5 (873.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 873.3 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/organizations/f008575f-f544-4da4-b013-ff5d1f3b54cb (867.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MjY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyNjgsImV4cCI6MTc0ODM4Mjg2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.avwwSxJqsOS3D0W5lqZ3waEXUcLksfQe2rG8pyODUfS368hB9v-8Smnyb-djSVMo2dB44cyXDytWRv6bHTOJCgcxhWemhvh3XmPgywVaOqyWtWzN3tfQmRDhhNOWs9sicO6go8bPSn5cx4YlY5W6EJMgD_wvo5D1wrIcFzmdXqG3faXLbhd32G7fb3ep6olZBPSMRc-m-F_xfuJ6R5qloI-d9XY7kRu0UZNAMZ_yMX2Qom17ltehAMjo_wyftdukjqXQWfV-8F1tOdGvCZ6Z3iENR04iYWnDRZGiIqmm3_czXvE8YbYbrxaekjfMQps5New9aYQoBQDgYTv_Dcrxmw"
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
    "date": "Tue, 27 May 2025 20:54:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 867.4 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (361.6ms)</summary>

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
    "etag": "W/\"640-BBNOY7AcqQByXCt7JbegtZnaQ5o\"",
    "date": "Tue, 27 May 2025 20:54:58 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5Mjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyOTgsImV4cCI6MTc0ODM4Mjg5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Xp83-CyZFyCOhAHcyNfU1lHEqIlrsOGJvreuZf-usvOufnY8Qqy2W63sqibOf7qAMx9BVhhqvvyUPNWyfWLPrMpEdEiomPBUjhd4yOMBvaRkVlNR3_i2GZ9-o3a3_4yylvgd5q8jUIh6duZ51cCSwZxNAk8PQPwrSlQyb1kQ28u9d1CEvQ6NGtwua9hzBKWwcfGbxZ-79exCqIqorvpGwdOyhFy1TLjC1AG4sJHHm9RZh3lGig6qA3pTRLcm2N0G2qBNkTfa9MB5pexHdtAfm7ti-tNacP5bySQL2X82pVe58QaAwSPym2dsJXae1U1OgHonTVGq6tTaUV6_KMi6Ug",
      "refreshToken": "AMf-vBz59lGHqlsOTAmgANKtxNVofyNqe2A0luC75MUKO6vhdibKqlidI6OQoCojU2HHOkO1SKQIUgcBi3j_K18WXf3Ysp0K3bsTjPER_8fv28xj9A6IBiPOVIK9uN_LSj77b1MrPP13XHXJZvjrh_GQ2B_hHd7bfeLqcWPX4npBMG0jVc2G8rSfc2cV04kfZTnkp4PkI4ROM4JXvz1v-_6cGCZDIA2GPkYaQ5NRxe7dU6YyAKbBJpVdFYCB1DNOQJ61kAE5kLnv",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 361.6 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/BFcrADl4RoSTlaMKd2RLWNoPtkR2 (1405.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5Mjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkyOTgsImV4cCI6MTc0ODM4Mjg5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Xp83-CyZFyCOhAHcyNfU1lHEqIlrsOGJvreuZf-usvOufnY8Qqy2W63sqibOf7qAMx9BVhhqvvyUPNWyfWLPrMpEdEiomPBUjhd4yOMBvaRkVlNR3_i2GZ9-o3a3_4yylvgd5q8jUIh6duZ51cCSwZxNAk8PQPwrSlQyb1kQ28u9d1CEvQ6NGtwua9hzBKWwcfGbxZ-79exCqIqorvpGwdOyhFy1TLjC1AG4sJHHm9RZh3lGig6qA3pTRLcm2N0G2qBNkTfa9MB5pexHdtAfm7ti-tNacP5bySQL2X82pVe58QaAwSPym2dsJXae1U1OgHonTVGq6tTaUV6_KMi6Ug"
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
    "date": "Tue, 27 May 2025 20:55:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1405.4 ms  

</details>

<details><summary>📡 Request #13: POST http://localhost:3000/api/auth/login (325.8ms)</summary>

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
    "etag": "W/\"640-LXIqR9IQnOngxGJhOeGBRPoSxMg\"",
    "date": "Tue, 27 May 2025 20:55:00 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MzAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkzMDAsImV4cCI6MTc0ODM4MjkwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OU6LdvuxPHObBIUJ0XthEv7O35gQmYfz8FiEQVRBOhgdsbGf_wvFUoxMgW9dcu_-tlYfWu9p_wOYUodeFUTs-wHOtXc1OchbKk9zPexK7BE-ZMIhclNb4EFUdpU3vcetYNDmefm0eMuVhsnqyB6ZaWjGhqXBCBCJkOQ2HcCEHvfsuR-tZAvoDSZT9Flg4y5XvhE3ErrSQcF4TnwxBQayPA51s8J8V1aUC-Rm6I5nZKeshJ9gD5zvF83cLhUIk-jtaipJG1F6xqRts8wDpPz6TBmCLitK8SA2tl9wwo2RmqstrCGtXKFU2xEzNKtGEWW_CpFFA5xSECBenmhsKBEltw",
      "refreshToken": "AMf-vBwBo7M7YgXi_uyQr7KeMko7fr8XvZvN5rrGeYyWDvp5kVilOUnga_NvxpHeCusZNn8hiqUc2BZ3WkmOGjPuCK_OYdhRTVokYdazZfnDMmdVU6Jv38YfYG2mHqji65p9l-5Nfgb7zVSpPAUi0Sfbak4abVXW5s7sC6rtVBqteomx4A_9Nk7Qn0cJeo0dsPhr1UGzjW6TKl5O0dM4yCHI6mh9mEhjX8dyQKzgLavoSxnZvabXUJJWSmnrd0BdPpYSwgL1Pf1N",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 325.8 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/admin/users/C7TlaDEGKAOkMwWSX442hGIEQS73 (1100.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MzAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkzMDAsImV4cCI6MTc0ODM4MjkwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OU6LdvuxPHObBIUJ0XthEv7O35gQmYfz8FiEQVRBOhgdsbGf_wvFUoxMgW9dcu_-tlYfWu9p_wOYUodeFUTs-wHOtXc1OchbKk9zPexK7BE-ZMIhclNb4EFUdpU3vcetYNDmefm0eMuVhsnqyB6ZaWjGhqXBCBCJkOQ2HcCEHvfsuR-tZAvoDSZT9Flg4y5XvhE3ErrSQcF4TnwxBQayPA51s8J8V1aUC-Rm6I5nZKeshJ9gD5zvF83cLhUIk-jtaipJG1F6xqRts8wDpPz6TBmCLitK8SA2tl9wwo2RmqstrCGtXKFU2xEzNKtGEWW_CpFFA5xSECBenmhsKBEltw"
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
    "date": "Tue, 27 May 2025 20:55:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1100.5 ms  

</details>

<details><summary>📡 Request #15: POST http://localhost:3000/api/auth/login (279.2ms)</summary>

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
    "etag": "W/\"640-bCeQoav+QOQ/cA80xmsJu23XZGc\"",
    "date": "Tue, 27 May 2025 20:55:01 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MzAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkzMDEsImV4cCI6MTc0ODM4MjkwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DeuxdPxtRg4mbHF3HpSm9T97YdRf8XUXlt3cVFDcbibE4lQvKBN9YRNWYdFCWDmjEWGGbvftgTNOrTc7kW5xydjgAOaorL8-yQivgbjWKSUF8NMuZTNzo6iDYo-kkfJnzuUboDkBN7BcZNf20iEdzLwXhfQ9R-1vJuf1ZxBmzYUY5o7Iza88HcySgQhL2NYuUdbu0BvGyIvzBnT_O2lDBXEtbyQnewHy3n5LRHzhAbCzrYZZb3KZ0h-ZJsnBU1xV8dtHOEHnG1dh_VDFGAE38UDldkgvfiK06EOhd9pkPbEWlQgmS08ypypbSxyvbfEXyiWEcXwDQRXfs7jlTTmUaw",
      "refreshToken": "AMf-vByHpGUolXlG3zvfqSI08NzpxPoEBF1Ci9GJKOK9kwiPhnnGG_cb3huWy-ZaWe5Pr3Ynu_i1AIKndYevk549FP1tg1YSQteG4ToMs9YFZ9wDpBXsUsxiGIG-i5VYbpKczpaPCTCqdfA_aSetuVq1IHZoeennpQj09btj_ckcYDPfX8l078KowlR36vSMKfGMpEr6mmZQM8uLdxU1_uh20Cb0iyr5enRVIoYhvOjmqDDECAOO6FfztWo15utQUFKY2qukB-Xy",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 279.2 ms  

</details>

<details><summary>📡 Request #16: DELETE http://localhost:3000/api/admin/users/bNHYt8QmdbhtDZtmkTpoUWjVPW12 (1891.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5MzAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzkzMDEsImV4cCI6MTc0ODM4MjkwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DeuxdPxtRg4mbHF3HpSm9T97YdRf8XUXlt3cVFDcbibE4lQvKBN9YRNWYdFCWDmjEWGGbvftgTNOrTc7kW5xydjgAOaorL8-yQivgbjWKSUF8NMuZTNzo6iDYo-kkfJnzuUboDkBN7BcZNf20iEdzLwXhfQ9R-1vJuf1ZxBmzYUY5o7Iza88HcySgQhL2NYuUdbu0BvGyIvzBnT_O2lDBXEtbyQnewHy3n5LRHzhAbCzrYZZb3KZ0h-ZJsnBU1xV8dtHOEHnG1dh_VDFGAE38UDldkgvfiK06EOhd9pkPbEWlQgmS08ypypbSxyvbfEXyiWEcXwDQRXfs7jlTTmUaw"
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
    "date": "Tue, 27 May 2025 20:55:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1891.0 ms  

</details>


**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/11bc9a94-9687-4bd4-bff5-1c85ee446ec5 - Test: Organizations E2E Tests Multitenancy Validation Super admin should access all organizations
ℹ️ [REQUEST WRAPPER] Total logs stored: 32
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/11bc9a94-9687-4bd4-bff5-1c85ee446ec5 -> 200
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/f008575f-f544-4da4-b013-ff5d1f3b54cb - Test: Organizations E2E Tests Multitenancy Validation Super admin should access all organizations
ℹ️ [REQUEST WRAPPER] Total logs stored: 33
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/f008575f-f544-4da4-b013-ff5d1f3b54cb -> 200
```

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
- Total test users created: 3
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
