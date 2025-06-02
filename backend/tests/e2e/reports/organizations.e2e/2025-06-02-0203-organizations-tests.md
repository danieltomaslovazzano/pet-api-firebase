# E2E Test Report: organizations-tests

**Date:** 6/2/2025  
**Time:** 2:03:48 AM  
**Duration:** 33.03s  
**Tests:** 17 total, 17 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 0.56s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.42s | Regular user should create organization successfully |
| ✅ Should create organization with explicit shelter type | PASSED | 0.53s | Should create organization with explicit shelter type |
| ✅ Should fail without authentication | PASSED | 0.09s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.53s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.40s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.95s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.69s | Should fail without proper permissions |
| ✅ Admin should delete organization successfully | PASSED | 1.53s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.22s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.87s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.39s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.60s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.51s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 0.95s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 1.13s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (553.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Test Organization 1748822597304",
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
    "etag": "W/\"182-EXCUerAojLayZ7H4QMdKY/4/NoU\"",
    "date": "Mon, 02 Jun 2025 00:03:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "957a2ed5-b9eb-4f6a-b29d-6724a23cf6a5",
    "name": "Test Organization 1748822597304",
    "type": "shelter",
    "description": "Test organization for E2E testing",
    "logo": null,
    "address": "123 Test Street",
    "phone": "+1234567890",
    "email": "test@organization.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:17.781Z",
    "updatedAt": "2025-06-02T00:03:17.781Z"
  }
}
```

**⏱️ Duration:** 553.3 ms  

</details>


---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (419.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjU5NywidXNlcl9pZCI6Im9pZUdRT3IxdkFNOHE3TGF3YVZ0YjdsQjNxdzIiLCJzdWIiOiJvaWVHUU9yMXZBTThxN0xhd2FWdGI3bEIzcXcyIiwiaWF0IjoxNzQ4ODIyNTk3LCJleHAiOjE3NDg4MjYxOTcsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIyNTk1ODU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMjU5NTg1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qPj9dkin16Lqkk14ajkSlRHa-o15c7XZ3xfwG4UPtQ00zWsEsi_l0T5QwixLoBQwXE8TVsRvoK065HloRG-7oP1FSbCE2zVku4oNJOUK3vL5yFVLWyCBMEs07U0EWJxO9rE8Ojsz5awQCRR4-UJaKEeSHvzbM9jRELXnovOYvHr7BI20N-ItZmDvCqI5ix1OOOgdwOi3EZdThsUA9Zy7kVTKHBXXzmkR_gkuazCjXuqRXW6UhRn8_GO724et3U_uVJDe_xP5bha-uNvxKkG6aUnVM7WnTrzORuYEDeU0jn3I1gxtXgCCrhL8DP7rbki50mz5StkEBt8hDd1eK0OyaA"
  },
  "data": {
    "name": "User Org 1748822597860",
    "description": "Organization created by regular user",
    "email": "user-org-1748822597860@example.com",
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
    "etag": "W/\"189-t5Pvx6XQ8rztOkMNoz2bQgOsFXs\"",
    "date": "Mon, 02 Jun 2025 00:03:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "de5b0294-9a91-4356-9213-9053ec12a1b7",
    "name": "User Org 1748822597860",
    "type": "shelter",
    "description": "Organization created by regular user",
    "logo": null,
    "address": "789 User Street",
    "phone": "+1555666777",
    "email": "user-org-1748822597860@example.com",
    "status": "active",
    "createdBy": "oieGQOr1vAM8q7LawaVtb7lB3qw2",
    "createdAt": "2025-06-02T00:03:18.214Z",
    "updatedAt": "2025-06-02T00:03:18.214Z"
  }
}
```

**⏱️ Duration:** 419.6 ms  

</details>


---

### Test: Should create organization with explicit shelter type
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (529.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Explicit Shelter 1748822598281",
    "type": "shelter",
    "description": "Shelter with explicit type",
    "address": "456 Shelter Avenue",
    "phone": "+1987654321",
    "email": "explicit-shelter-1748822598281@example.com"
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
    "etag": "W/\"192-lNIhVbZ6NHfbYA301TXAv/KpQb4\"",
    "date": "Mon, 02 Jun 2025 00:03:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "65803962-a20c-4799-b111-59a3ddc6aca2",
    "name": "Explicit Shelter 1748822598281",
    "type": "shelter",
    "description": "Shelter with explicit type",
    "logo": null,
    "address": "456 Shelter Avenue",
    "phone": "+1987654321",
    "email": "explicit-shelter-1748822598281@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:18.745Z",
    "updatedAt": "2025-06-02T00:03:18.745Z"
  }
}
```

**⏱️ Duration:** 529.6 ms  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.09s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (91.7ms)</summary>

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
    "date": "Mon, 02 Jun 2025 00:03:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 91.7 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (490.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Get Test Org 1748822598906",
    "description": "Organization for get tests",
    "email": "get-test-org-1748822598906@example.com",
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
    "etag": "W/\"18b-W1KGkeTx4RFVfi75eiEaAxBPm7s\"",
    "date": "Mon, 02 Jun 2025 00:03:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1d121f0a-2620-42a9-b2ab-0819b1974c36",
    "name": "Get Test Org 1748822598906",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748822598906@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:19.332Z",
    "updatedAt": "2025-06-02T00:03:19.332Z"
  }
}
```

**⏱️ Duration:** 490.9 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/1d121f0a-2620-42a9-b2ab-0819b1974c36 (6.3ms)</summary>

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
    "date": "Mon, 02 Jun 2025 00:03:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 6.3 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (426.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Update Test Org 1748822600342",
    "description": "Organization for update tests",
    "email": "update-test-org-1748822600342@example.com",
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
    "etag": "W/\"19a-aYNx2huUCOBl+cZqPnJxHJkx1hs\"",
    "date": "Mon, 02 Jun 2025 00:03:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "54f4e338-4326-4f87-88d9-58dba18a3a1a",
    "name": "Update Test Org 1748822600342",
    "type": "shelter",
    "description": "Organization for update tests",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+1777888999",
    "email": "update-test-org-1748822600342@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:20.704Z",
    "updatedAt": "2025-06-02T00:03:20.704Z"
  }
}
```

**⏱️ Duration:** 426.3 ms  

</details>


---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/1d121f0a-2620-42a9-b2ab-0819b1974c36 (531.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "etag": "W/\"19c-CEiEv9o20FMrUID9IgbRgcwfSUA\"",
    "date": "Mon, 02 Jun 2025 00:03:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1d121f0a-2620-42a9-b2ab-0819b1974c36",
    "name": "Get Test Org 1748822598906",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748822598906@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:19.332Z",
    "updatedAt": "2025-06-02T00:03:19.332Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 531.6 ms  

</details>


---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.40s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/invalid-id (402.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:20 GMT",
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

**⏱️ Duration:** 402.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (91.7ms)</summary>

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
    "date": "Mon, 02 Jun 2025 00:03:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 91.7 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (490.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Get Test Org 1748822598906",
    "description": "Organization for get tests",
    "email": "get-test-org-1748822598906@example.com",
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
    "etag": "W/\"18b-W1KGkeTx4RFVfi75eiEaAxBPm7s\"",
    "date": "Mon, 02 Jun 2025 00:03:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1d121f0a-2620-42a9-b2ab-0819b1974c36",
    "name": "Get Test Org 1748822598906",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748822598906@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:19.332Z",
    "updatedAt": "2025-06-02T00:03:19.332Z"
  }
}
```

**⏱️ Duration:** 490.9 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/1d121f0a-2620-42a9-b2ab-0819b1974c36 (6.3ms)</summary>

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
    "date": "Mon, 02 Jun 2025 00:03:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 6.3 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (426.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Update Test Org 1748822600342",
    "description": "Organization for update tests",
    "email": "update-test-org-1748822600342@example.com",
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
    "etag": "W/\"19a-aYNx2huUCOBl+cZqPnJxHJkx1hs\"",
    "date": "Mon, 02 Jun 2025 00:03:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "54f4e338-4326-4f87-88d9-58dba18a3a1a",
    "name": "Update Test Org 1748822600342",
    "type": "shelter",
    "description": "Organization for update tests",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+1777888999",
    "email": "update-test-org-1748822600342@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:20.704Z",
    "updatedAt": "2025-06-02T00:03:20.704Z"
  }
}
```

**⏱️ Duration:** 426.3 ms  

</details>


---

### Test: Admin should update organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/54f4e338-4326-4f87-88d9-58dba18a3a1a (942.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Updated Update Test Org 1748822600342",
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
    "etag": "W/\"198-DOi3rSUkAIV5iqHDNMqsAAtNpzE\"",
    "date": "Mon, 02 Jun 2025 00:03:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "54f4e338-4326-4f87-88d9-58dba18a3a1a",
    "name": "Updated Update Test Org 1748822600342",
    "type": "shelter",
    "description": "Updated description",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+9876543210",
    "email": "update-test-org-1748822600342@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:20.704Z",
    "updatedAt": "2025-06-02T00:03:21.596Z"
  }
}
```

**⏱️ Duration:** 942.8 ms  

</details>


**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 54f4e338-4326-4f87-88d9-58dba18a3a1a
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748822600342",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNm
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/54f4e338-4326-4f87-88d9-58dba18a3a1a (685.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjU5NywidXNlcl9pZCI6Im9pZUdRT3IxdkFNOHE3TGF3YVZ0YjdsQjNxdzIiLCJzdWIiOiJvaWVHUU9yMXZBTThxN0xhd2FWdGI3bEIzcXcyIiwiaWF0IjoxNzQ4ODIyNTk3LCJleHAiOjE3NDg4MjYxOTcsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIyNTk1ODU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMjU5NTg1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qPj9dkin16Lqkk14ajkSlRHa-o15c7XZ3xfwG4UPtQ00zWsEsi_l0T5QwixLoBQwXE8TVsRvoK065HloRG-7oP1FSbCE2zVku4oNJOUK3vL5yFVLWyCBMEs07U0EWJxO9rE8Ojsz5awQCRR4-UJaKEeSHvzbM9jRELXnovOYvHr7BI20N-ItZmDvCqI5ix1OOOgdwOi3EZdThsUA9Zy7kVTKHBXXzmkR_gkuazCjXuqRXW6UhRn8_GO724et3U_uVJDe_xP5bha-uNvxKkG6aUnVM7WnTrzORuYEDeU0jn3I1gxtXgCCrhL8DP7rbki50mz5StkEBt8hDd1eK0OyaA"
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
    "date": "Mon, 02 Jun 2025 00:03:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 685.2 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (626.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Delete Test Org 1748822602408",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748822602408@example.com",
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
    "etag": "W/\"197-XEN1zeduAWjCZsx4C6f3enlKnTg\"",
    "date": "Mon, 02 Jun 2025 00:03:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d423e505-2a1f-46e4-baa2-c33f27f884c5",
    "name": "Delete Test Org 1748822602408",
    "type": "shelter",
    "description": "Organization for delete tests",
    "logo": null,
    "address": "789 Delete Test Street",
    "phone": "+1333444555",
    "email": "delete-test-org-1748822602408@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:22.967Z",
    "updatedAt": "2025-06-02T00:03:22.967Z"
  }
}
```

**⏱️ Duration:** 626.8 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (558.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "No Delete Perm Org 1748822604570",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748822604570@example.com",
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
    "etag": "W/\"1a2-jbf+IZSoVbsU/3Dp58rQqLQYw6E\"",
    "date": "Mon, 02 Jun 2025 00:03:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "71678312-1138-45fc-a7c2-17db3eb5aefd",
    "name": "No Delete Perm Org 1748822604570",
    "type": "shelter",
    "description": "Organization for permission test",
    "logo": null,
    "address": "999 Permission Test Lane",
    "phone": "+1666777888",
    "email": "no-delete-perm-org-1748822604570@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:25.065Z",
    "updatedAt": "2025-06-02T00:03:25.065Z"
  }
}
```

**⏱️ Duration:** 558.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/71678312-1138-45fc-a7c2-17db3eb5aefd (662.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjU5NywidXNlcl9pZCI6Im9pZUdRT3IxdkFNOHE3TGF3YVZ0YjdsQjNxdzIiLCJzdWIiOiJvaWVHUU9yMXZBTThxN0xhd2FWdGI3bEIzcXcyIiwiaWF0IjoxNzQ4ODIyNTk3LCJleHAiOjE3NDg4MjYxOTcsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIyNTk1ODU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMjU5NTg1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qPj9dkin16Lqkk14ajkSlRHa-o15c7XZ3xfwG4UPtQ00zWsEsi_l0T5QwixLoBQwXE8TVsRvoK065HloRG-7oP1FSbCE2zVku4oNJOUK3vL5yFVLWyCBMEs07U0EWJxO9rE8Ojsz5awQCRR4-UJaKEeSHvzbM9jRELXnovOYvHr7BI20N-ItZmDvCqI5ix1OOOgdwOi3EZdThsUA9Zy7kVTKHBXXzmkR_gkuazCjXuqRXW6UhRn8_GO724et3U_uVJDe_xP5bha-uNvxKkG6aUnVM7WnTrzORuYEDeU0jn3I1gxtXgCCrhL8DP7rbki50mz5StkEBt8hDd1eK0OyaA"
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
    "date": "Mon, 02 Jun 2025 00:03:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 662.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should delete organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/organizations/d423e505-2a1f-46e4-baa2-c33f27f884c5 (1027.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1027.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/d423e505-2a1f-46e4-baa2-c33f27f884c5 (505.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 505.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.22s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/54f4e338-4326-4f87-88d9-58dba18a3a1a (685.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjU5NywidXNlcl9pZCI6Im9pZUdRT3IxdkFNOHE3TGF3YVZ0YjdsQjNxdzIiLCJzdWIiOiJvaWVHUU9yMXZBTThxN0xhd2FWdGI3bEIzcXcyIiwiaWF0IjoxNzQ4ODIyNTk3LCJleHAiOjE3NDg4MjYxOTcsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIyNTk1ODU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMjU5NTg1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qPj9dkin16Lqkk14ajkSlRHa-o15c7XZ3xfwG4UPtQ00zWsEsi_l0T5QwixLoBQwXE8TVsRvoK065HloRG-7oP1FSbCE2zVku4oNJOUK3vL5yFVLWyCBMEs07U0EWJxO9rE8Ojsz5awQCRR4-UJaKEeSHvzbM9jRELXnovOYvHr7BI20N-ItZmDvCqI5ix1OOOgdwOi3EZdThsUA9Zy7kVTKHBXXzmkR_gkuazCjXuqRXW6UhRn8_GO724et3U_uVJDe_xP5bha-uNvxKkG6aUnVM7WnTrzORuYEDeU0jn3I1gxtXgCCrhL8DP7rbki50mz5StkEBt8hDd1eK0OyaA"
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
    "date": "Mon, 02 Jun 2025 00:03:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 685.2 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (626.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Delete Test Org 1748822602408",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748822602408@example.com",
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
    "etag": "W/\"197-XEN1zeduAWjCZsx4C6f3enlKnTg\"",
    "date": "Mon, 02 Jun 2025 00:03:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d423e505-2a1f-46e4-baa2-c33f27f884c5",
    "name": "Delete Test Org 1748822602408",
    "type": "shelter",
    "description": "Organization for delete tests",
    "logo": null,
    "address": "789 Delete Test Street",
    "phone": "+1333444555",
    "email": "delete-test-org-1748822602408@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:22.967Z",
    "updatedAt": "2025-06-02T00:03:22.967Z"
  }
}
```

**⏱️ Duration:** 626.8 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (558.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "No Delete Perm Org 1748822604570",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748822604570@example.com",
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
    "etag": "W/\"1a2-jbf+IZSoVbsU/3Dp58rQqLQYw6E\"",
    "date": "Mon, 02 Jun 2025 00:03:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "71678312-1138-45fc-a7c2-17db3eb5aefd",
    "name": "No Delete Perm Org 1748822604570",
    "type": "shelter",
    "description": "Organization for permission test",
    "logo": null,
    "address": "999 Permission Test Lane",
    "phone": "+1666777888",
    "email": "no-delete-perm-org-1748822604570@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:25.065Z",
    "updatedAt": "2025-06-02T00:03:25.065Z"
  }
}
```

**⏱️ Duration:** 558.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/71678312-1138-45fc-a7c2-17db3eb5aefd (662.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjU5NywidXNlcl9pZCI6Im9pZUdRT3IxdkFNOHE3TGF3YVZ0YjdsQjNxdzIiLCJzdWIiOiJvaWVHUU9yMXZBTThxN0xhd2FWdGI3bEIzcXcyIiwiaWF0IjoxNzQ4ODIyNTk3LCJleHAiOjE3NDg4MjYxOTcsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIyNTk1ODU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMjU5NTg1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qPj9dkin16Lqkk14ajkSlRHa-o15c7XZ3xfwG4UPtQ00zWsEsi_l0T5QwixLoBQwXE8TVsRvoK065HloRG-7oP1FSbCE2zVku4oNJOUK3vL5yFVLWyCBMEs07U0EWJxO9rE8Ojsz5awQCRR4-UJaKEeSHvzbM9jRELXnovOYvHr7BI20N-ItZmDvCqI5ix1OOOgdwOi3EZdThsUA9Zy7kVTKHBXXzmkR_gkuazCjXuqRXW6UhRn8_GO724et3U_uVJDe_xP5bha-uNvxKkG6aUnVM7WnTrzORuYEDeU0jn3I1gxtXgCCrhL8DP7rbki50mz5StkEBt8hDd1eK0OyaA"
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
    "date": "Mon, 02 Jun 2025 00:03:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 662.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.87s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (872.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "etag": "W/\"b714-oThfeq3hA8rZlSgtN68X1jRB6RA\"",
    "date": "Mon, 02 Jun 2025 00:03:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "957a2ed5-b9eb-4f6a-b29d-6724a23cf6a5",
      "name": "Test Organization 1748822597304",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-02T00:03:17.781Z",
      "updatedAt": "2025-06-02T00:03:17.781Z",
      "memberships": []
    },
    {
      "id": "de5b0294-9a91-4356-9213-9053ec12a1b7",
      "name": "User Org 1748822597860",
      "type": "shelter",
      "description": "Organization created by regular user",
      "logo": null,
      "address": "789 User Street",
      "phone": "+1555666777",
      "email": "user-org-1748822597860@example.com",
      "status": "active",
      "createdBy": "oieGQOr1vAM8q7LawaVtb7lB3qw2",
      "createdAt": "2025-06-02T00:03:18.214Z",
      "updatedAt": "2025-06-02T00:03:18.214Z",
      "memberships": []
    },
    {
      "id": "65803962-a20c-4799-b111-59a3ddc6aca2",
      "name": "Explicit Shelter 1748822598281",
      "type": "shelter",
      "description": "Shelter with explicit type",
      "logo": null,
      "address": "456 Shelter Avenue",
      "phone": "+1987654321",
      "email": "explicit-shelter-1748822598281@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-02T00:03:18.745Z",
      "updatedAt": "2025-06-02T00:03:18.745Z",
      "memberships": []
    },
    {
      "id": "1d121f0a-2620-42a9-b2ab-0819b1974c36",
      "name": "Get Test Org 1748822598906",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": "321 Get Test Avenue",
      "phone": "+1888999000",
      "email": "get-test-org-1748822598906@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-02T00:03:19.332Z",
      "updatedAt": "2025-06-02T00:03:19.332Z",
      "memberships": []
    },
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
      "id": "54f4e338-4326-4f87-88d9-58dba18a3a1a",
      "name": "Updated Update Test Org 1748822600342",
      "type": "shelter",
      "description": "Updated description",
      "logo": null,
      "address": "456 Update Test Boulevard",
      "phone": "+9876543210",
      "email": "update-test-org-1748822600342@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-02T00:03:20.704Z",
      "updatedAt": "2025-06-02T00:03:21.596Z",
      "memberships": []
    },
    {
      "id": "71678312-1138-45fc-a7c2-17db3eb5aefd",
      "name": "No Delete Perm Org 1748822604570",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": "999 Permission Test Lane",
      "phone": "+1666777888",
      "email": "no-delete-perm-org-1748822604570@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-02T00:03:25.065Z",
      "updatedAt": "2025-06-02T00:03:25.065Z",
      "memberships": []
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

**⏱️ Duration:** 872.5 ms  

</details>


---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (390.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjU5NywidXNlcl9pZCI6Im9pZUdRT3IxdkFNOHE3TGF3YVZ0YjdsQjNxdzIiLCJzdWIiOiJvaWVHUU9yMXZBTThxN0xhd2FWdGI3bEIzcXcyIiwiaWF0IjoxNzQ4ODIyNTk3LCJleHAiOjE3NDg4MjYxOTcsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIyNTk1ODU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMjU5NTg1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qPj9dkin16Lqkk14ajkSlRHa-o15c7XZ3xfwG4UPtQ00zWsEsi_l0T5QwixLoBQwXE8TVsRvoK065HloRG-7oP1FSbCE2zVku4oNJOUK3vL5yFVLWyCBMEs07U0EWJxO9rE8Ojsz5awQCRR4-UJaKEeSHvzbM9jRELXnovOYvHr7BI20N-ItZmDvCqI5ix1OOOgdwOi3EZdThsUA9Zy7kVTKHBXXzmkR_gkuazCjXuqRXW6UhRn8_GO724et3U_uVJDe_xP5bha-uNvxKkG6aUnVM7WnTrzORuYEDeU0jn3I1gxtXgCCrhL8DP7rbki50mz5StkEBt8hDd1eK0OyaA"
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
    "date": "Mon, 02 Jun 2025 00:03:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 390.2 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (580.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
  },
  "data": {
    "name": "Members Test Org 1748822607061",
    "description": "Organization for members tests",
    "email": "members-test-org-1748822607061@example.com",
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
    "etag": "W/\"199-PPhKmdOX961AG5rgwa1Ay9PaKVQ\"",
    "date": "Mon, 02 Jun 2025 00:03:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "71cb56df-82aa-4416-ab65-e59bd8361eb1",
    "name": "Members Test Org 1748822607061",
    "type": "shelter",
    "description": "Organization for members tests",
    "logo": null,
    "address": "111 Members Test Road",
    "phone": "+1222333444",
    "email": "members-test-org-1748822607061@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-02T00:03:27.575Z",
    "updatedAt": "2025-06-02T00:03:27.575Z"
  }
}
```

**⏱️ Duration:** 580.9 ms  

</details>


---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/71cb56df-82aa-4416-ab65-e59bd8361eb1/members (598.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 598.9 ms  

</details>


---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/71cb56df-82aa-4416-ab65-e59bd8361eb1/members (511.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjU5NywidXNlcl9pZCI6Im9pZUdRT3IxdkFNOHE3TGF3YVZ0YjdsQjNxdzIiLCJzdWIiOiJvaWVHUU9yMXZBTThxN0xhd2FWdGI3bEIzcXcyIiwiaWF0IjoxNzQ4ODIyNTk3LCJleHAiOjE3NDg4MjYxOTcsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIyNTk1ODU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMjU5NTg1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qPj9dkin16Lqkk14ajkSlRHa-o15c7XZ3xfwG4UPtQ00zWsEsi_l0T5QwixLoBQwXE8TVsRvoK065HloRG-7oP1FSbCE2zVku4oNJOUK3vL5yFVLWyCBMEs07U0EWJxO9rE8Ojsz5awQCRR4-UJaKEeSHvzbM9jRELXnovOYvHr7BI20N-ItZmDvCqI5ix1OOOgdwOi3EZdThsUA9Zy7kVTKHBXXzmkR_gkuazCjXuqRXW6UhRn8_GO724et3U_uVJDe_xP5bha-uNvxKkG6aUnVM7WnTrzORuYEDeU0jn3I1gxtXgCCrhL8DP7rbki50mz5StkEBt8hDd1eK0OyaA"
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
    "date": "Mon, 02 Jun 2025 00:03:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. You must be a member to view organization members."
  }
}
```

**⏱️ Duration:** 511.7 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (891.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748822608757@example.com",
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
    "etag": "W/\"5ae-iGopF36EkgpIwFQ1JOmZ30PrmuU\"",
    "date": "Mon, 02 Jun 2025 00:03:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "OA4sonTqoaNxnczZALA0q8UtCL22",
      "email": "org1-admin-1748822608757@example.com",
      "name": "Org1 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjYwOSwidXNlcl9pZCI6Ik9BNHNvblRxb2FOeG5jelpBTEEwcThVdENMMjIiLCJzdWIiOiJPQTRzb25UcW9hTnhuY3paQUxBMHE4VXRDTDIyIiwiaWF0IjoxNzQ4ODIyNjA5LCJleHAiOjE3NDg4MjYyMDksImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIyNjA4NzU3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMjYwODc1N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jXC0kffjstrlMxH0k3uq3bj0R_T2c3qOqbEMAPB5iDAHQ1KZc2tx9rG2XmzTqhm4SvDPKCiDk1I_BRLO6DAgbGV6sRGHxqZbUFVdXA9wxiKmwXGodJnolxKFhkB45Rmc4Ln9E2QBwtlhSKIYnOzqvgXin9xniceh_LqY7yYzHrWmQRMlQnToRqGVr1VI2L0vQeGL0XO7ZNLGIS5i9EhbfETC1dYuKCbMk6MoZtulwG47MByTEkWn9sdoq5gmd5TZoDIm-SwdEgSu_4y6eUPJB6eoMbLtW6q1rt2TZI59GJ9fg8GIQxsF1BoDMljYzDhdzQbuQ9_6HlstbH-QPRHCOQ",
      "refreshToken": "AMf-vByGCaJcjnfT1xLod-bElbjo6rUxGgKTnCdDaEQQiL6hio5vG1SHWCzpY94-wn7Ut2p-OVutpBYRozKKX9tT1ay-yi_11jIH_ztcaF3F9pLpqsIaYTjAGzxskVhmJCrfVkvQ5_MeUO1g2hbyagAn_UaXy0JRDXdWelaPRQTJIWm5oc4B0a-QSd6ekaEj5uO13nDu_fYPITujL6RG9OsEMPLwm-UgS1jmp51vYJtFEdfxrXOAnL0",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 891.6 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (921.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748822609648@example.com",
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
    "etag": "W/\"5ae-ggm2MovnEaa1+gBdTRd3eTRVUts\"",
    "date": "Mon, 02 Jun 2025 00:03:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "Hg6j2UazjifmCf2phh4tNbQQvEJ3",
      "email": "org2-admin-1748822609648@example.com",
      "name": "Org2 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjYwOSwidXNlcl9pZCI6IkhnNmoyVWF6amlmbUNmMnBoaDR0TmJRUXZFSjMiLCJzdWIiOiJIZzZqMlVhemppZm1DZjJwaGg0dE5iUVF2RUozIiwiaWF0IjoxNzQ4ODIyNjA5LCJleHAiOjE3NDg4MjYyMDksImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIyNjA5NjQ4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMjYwOTY0OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IBeiln6l1WB6NjLHI_dsuOu1HYHj_vxwKXMa2UgjI3pAMHCUosIlp-62TNsSzJNYIAnGjRIWZ9UYCaM5hc3hDbnM6Z1NebXOGq3nfmbW256VEY4XQpmMVj6bzOiHZ3l9RRwAZ9jzSx_CFhMvTwYaRbVH0MZvQtWeo-VvYucm057c88a6ncdBOhLoVIpUUEFlb3DTIgDoY59TIosVS5NAxCQuTafWoZInb0quWYQzpewKapEgLdOa-j8HX-pp7jf-C_TxL7cpJd0NIYo2So6jj8Vgner7fWS7R7-09NRRI7bXXls3sjfriYmkcKjG_Rs0GxWHoCTpn9B7N9QBmBI9Ew",
      "refreshToken": "AMf-vByenATwNkzkoxxFSegpvEuH3PDzasYHpunDFkZjVmQgtH9Ubo-XqdsBJltZnI_xHPL0OJs9cEMTx5eZJlVwTnjPGLIB0d8CjxMQuhMzB5I61_-8eDO3okJe_zx0JwcAcvM3wa6H7z5-TI85L9rFez0k2cfN2wrWFUn6CbiQ53Zg2mhictdD0lD7hqe3WCIUEQLH0wvvnrJhiEXq9_HeLXT2hQwzqQw-mNovv6iSeCTnAgpVUJk",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 921.7 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (367.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748822608757@example.com",
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
    "etag": "W/\"582-YrROSTp0cHLVxuo8nMPBzhleuss\"",
    "date": "Mon, 02 Jun 2025 00:03:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "OA4sonTqoaNxnczZALA0q8UtCL22",
      "email": "org1-admin-1748822608757@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjYxMCwidXNlcl9pZCI6Ik9BNHNvblRxb2FOeG5jelpBTEEwcThVdENMMjIiLCJzdWIiOiJPQTRzb25UcW9hTnhuY3paQUxBMHE4VXRDTDIyIiwiaWF0IjoxNzQ4ODIyNjEwLCJleHAiOjE3NDg4MjYyMTAsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIyNjA4NzU3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMjYwODc1N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gvhTYXRZBSeGZetouEM1jsGPooiQ839ql13FXcvsgLi4dzA1qkSx3WU6WPNeDwHZeNPRLYGydQePJzj2nABot3QDWD-Tf1ESEI-1yBD1e0E1xbL-WoZBtKJKsDX71SfTvTLnHeJZYahzOJ8i0-080fGDn_ah_QR-2ALAdhhStRMsoFjzF2BSPcvg2iB_gSDofhwLBJCvvvC7AQMTqaHHCUbLFYAo1evQoWiYFZZuH1iFF5Qj8NW141ppmO1X0-c4Ph58FXXZ1PWb37X3GtCKpVFJTp-dxwJZwDvSQBcdKVcnBzUDfT52MOJEj4rVbONDWuEV4UVIBVFCAoTP6i4qVQ",
      "refreshToken": "AMf-vBxV283bn1aBOXopOXg-WzC2_Z3k3ZOJehqacfSNZ5SMqGB-ZrhHyaFt15iuzeCuhZdHRpDmTIzJCjTcG8VdKQNzzKkQqryXu7KVjvvKso6q_GvcG3zS3lHEC0uJ7PBuvujNSLUJsr8HdhGZlU1NEhW_3MHyNG4nskVw2sUtdLF_EwCZ-gsPE0jLz25If50s7k-QGl7DLajHRbkygPZ33VwEcz4Byd6dNfybKQZ7LlE9J7fDnDM",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 367.2 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (302.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748822609648@example.com",
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
    "etag": "W/\"582-m/+tcyahb87YJHtcqjNpaKiXONE\"",
    "date": "Mon, 02 Jun 2025 00:03:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "Hg6j2UazjifmCf2phh4tNbQQvEJ3",
      "email": "org2-admin-1748822609648@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjYxMSwidXNlcl9pZCI6IkhnNmoyVWF6amlmbUNmMnBoaDR0TmJRUXZFSjMiLCJzdWIiOiJIZzZqMlVhemppZm1DZjJwaGg0dE5iUVF2RUozIiwiaWF0IjoxNzQ4ODIyNjExLCJleHAiOjE3NDg4MjYyMTEsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIyNjA5NjQ4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMjYwOTY0OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AHRBiHSewhC_2nnLADoV0uznyeeGWtsoZr6IB4rToc03bTiTouLlaFhLc6scnukDqsNx7ZKYQ65z4fPsPThz6HM0io046JIHC9L8UVlWqu8ndk5uZVKYKTB64EH3NCCfqVzTX1SsZCXlzo4P0eWsP9P3gi19mngs-wkZdN-zkMvSxcL7pLFzKLjIyNMtX0Uy6dC2tKo1QzoSWvOprtxOjOWHbDI3c0GZzIofK7E10Pc_IlBmBbbjomFo37WXLK6LCYXGSDtfhZTAcGrEbl1jXHaXQCLJ3yK9z2auxrohpH7UjyrsLDpuWPnrh9LIyISV4acRwBF9KMMU_s2MFUTywA",
      "refreshToken": "AMf-vBwfdZf_Oqt_0h6lRwCjmWhwWfAprkOElXLfDyB55uTMjpKWG-l_3neQfHTUltt3LGpJ6HubrTC93rgvRIcfYkYf1f4lnFOn2YIqvCPnvPxy-ZV8WNK2_VmBdeSbnL44vHHwQH7bEBUDGBdDQ1KW9m_NzG5-r26OcYWTmvOvh1vxuiIeJT9bLF5NC7lMqCX5bDB0qQS6jbhglostJkQzI6f1NxU7YD7mobBpgXfXNBVxhUi5W8Q",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 302.1 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/organizations (416.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjYxMCwidXNlcl9pZCI6Ik9BNHNvblRxb2FOeG5jelpBTEEwcThVdENMMjIiLCJzdWIiOiJPQTRzb25UcW9hTnhuY3paQUxBMHE4VXRDTDIyIiwiaWF0IjoxNzQ4ODIyNjEwLCJleHAiOjE3NDg4MjYyMTAsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIyNjA4NzU3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMjYwODc1N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gvhTYXRZBSeGZetouEM1jsGPooiQ839ql13FXcvsgLi4dzA1qkSx3WU6WPNeDwHZeNPRLYGydQePJzj2nABot3QDWD-Tf1ESEI-1yBD1e0E1xbL-WoZBtKJKsDX71SfTvTLnHeJZYahzOJ8i0-080fGDn_ah_QR-2ALAdhhStRMsoFjzF2BSPcvg2iB_gSDofhwLBJCvvvC7AQMTqaHHCUbLFYAo1evQoWiYFZZuH1iFF5Qj8NW141ppmO1X0-c4Ph58FXXZ1PWb37X3GtCKpVFJTp-dxwJZwDvSQBcdKVcnBzUDfT52MOJEj4rVbONDWuEV4UVIBVFCAoTP6i4qVQ"
  },
  "data": {
    "name": "Org1 1748822611239",
    "description": "First organization for multitenant test",
    "email": "org1-1748822611239@example.com",
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
    "etag": "W/\"184-gK5wyKmcIsHa8GH/2OiZL7/nuWM\"",
    "date": "Mon, 02 Jun 2025 00:03:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d0ca2104-f27e-4079-8862-856526c799a9",
    "name": "Org1 1748822611239",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748822611239@example.com",
    "status": "active",
    "createdBy": "OA4sonTqoaNxnczZALA0q8UtCL22",
    "createdAt": "2025-06-02T00:03:31.592Z",
    "updatedAt": "2025-06-02T00:03:31.592Z"
  }
}
```

**⏱️ Duration:** 416.3 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/organizations (493.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjYxMSwidXNlcl9pZCI6IkhnNmoyVWF6amlmbUNmMnBoaDR0TmJRUXZFSjMiLCJzdWIiOiJIZzZqMlVhemppZm1DZjJwaGg0dE5iUVF2RUozIiwiaWF0IjoxNzQ4ODIyNjExLCJleHAiOjE3NDg4MjYyMTEsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIyNjA5NjQ4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMjYwOTY0OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AHRBiHSewhC_2nnLADoV0uznyeeGWtsoZr6IB4rToc03bTiTouLlaFhLc6scnukDqsNx7ZKYQ65z4fPsPThz6HM0io046JIHC9L8UVlWqu8ndk5uZVKYKTB64EH3NCCfqVzTX1SsZCXlzo4P0eWsP9P3gi19mngs-wkZdN-zkMvSxcL7pLFzKLjIyNMtX0Uy6dC2tKo1QzoSWvOprtxOjOWHbDI3c0GZzIofK7E10Pc_IlBmBbbjomFo37WXLK6LCYXGSDtfhZTAcGrEbl1jXHaXQCLJ3yK9z2auxrohpH7UjyrsLDpuWPnrh9LIyISV4acRwBF9KMMU_s2MFUTywA"
  },
  "data": {
    "name": "Org2 1748822611656",
    "description": "Second organization for multitenant test",
    "email": "org2-1748822611656@example.com",
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
    "etag": "W/\"185-z/399x0qp/HpK5wFPP4h2hBVxcs\"",
    "date": "Mon, 02 Jun 2025 00:03:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5ef5b040-9b21-428b-b3ab-b851044a5fea",
    "name": "Org2 1748822611656",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748822611656@example.com",
    "status": "active",
    "createdBy": "Hg6j2UazjifmCf2phh4tNbQQvEJ3",
    "createdAt": "2025-06-02T00:03:32.076Z",
    "updatedAt": "2025-06-02T00:03:32.076Z"
  }
}
```

**⏱️ Duration:** 493.4 ms  

</details>


---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/d0ca2104-f27e-4079-8862-856526c799a9 (479.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjYxMCwidXNlcl9pZCI6Ik9BNHNvblRxb2FOeG5jelpBTEEwcThVdENMMjIiLCJzdWIiOiJPQTRzb25UcW9hTnhuY3paQUxBMHE4VXRDTDIyIiwiaWF0IjoxNzQ4ODIyNjEwLCJleHAiOjE3NDg4MjYyMTAsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIyNjA4NzU3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMjYwODc1N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gvhTYXRZBSeGZetouEM1jsGPooiQ839ql13FXcvsgLi4dzA1qkSx3WU6WPNeDwHZeNPRLYGydQePJzj2nABot3QDWD-Tf1ESEI-1yBD1e0E1xbL-WoZBtKJKsDX71SfTvTLnHeJZYahzOJ8i0-080fGDn_ah_QR-2ALAdhhStRMsoFjzF2BSPcvg2iB_gSDofhwLBJCvvvC7AQMTqaHHCUbLFYAo1evQoWiYFZZuH1iFF5Qj8NW141ppmO1X0-c4Ph58FXXZ1PWb37X3GtCKpVFJTp-dxwJZwDvSQBcdKVcnBzUDfT52MOJEj4rVbONDWuEV4UVIBVFCAoTP6i4qVQ"
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
    "etag": "W/\"195-nXXR4KMhhW2NYJfrP8qbPDSDMuo\"",
    "date": "Mon, 02 Jun 2025 00:03:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d0ca2104-f27e-4079-8862-856526c799a9",
    "name": "Org1 1748822611239",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748822611239@example.com",
    "status": "active",
    "createdBy": "OA4sonTqoaNxnczZALA0q8UtCL22",
    "createdAt": "2025-06-02T00:03:31.592Z",
    "updatedAt": "2025-06-02T00:03:31.592Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 479.0 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/5ef5b040-9b21-428b-b3ab-b851044a5fea (474.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjYxMCwidXNlcl9pZCI6Ik9BNHNvblRxb2FOeG5jelpBTEEwcThVdENMMjIiLCJzdWIiOiJPQTRzb25UcW9hTnhuY3paQUxBMHE4VXRDTDIyIiwiaWF0IjoxNzQ4ODIyNjEwLCJleHAiOjE3NDg4MjYyMTAsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIyNjA4NzU3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMjYwODc1N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gvhTYXRZBSeGZetouEM1jsGPooiQ839ql13FXcvsgLi4dzA1qkSx3WU6WPNeDwHZeNPRLYGydQePJzj2nABot3QDWD-Tf1ESEI-1yBD1e0E1xbL-WoZBtKJKsDX71SfTvTLnHeJZYahzOJ8i0-080fGDn_ah_QR-2ALAdhhStRMsoFjzF2BSPcvg2iB_gSDofhwLBJCvvvC7AQMTqaHHCUbLFYAo1evQoWiYFZZuH1iFF5Qj8NW141ppmO1X0-c4Ph58FXXZ1PWb37X3GtCKpVFJTp-dxwJZwDvSQBcdKVcnBzUDfT52MOJEj4rVbONDWuEV4UVIBVFCAoTP6i4qVQ"
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
    "etag": "W/\"196-63rFIhapEwUvBhIw3A94O85pVWY\"",
    "date": "Mon, 02 Jun 2025 00:03:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5ef5b040-9b21-428b-b3ab-b851044a5fea",
    "name": "Org2 1748822611656",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748822611656@example.com",
    "status": "active",
    "createdBy": "Hg6j2UazjifmCf2phh4tNbQQvEJ3",
    "createdAt": "2025-06-02T00:03:32.076Z",
    "updatedAt": "2025-06-02T00:03:32.076Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 474.1 ms  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.13s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/d0ca2104-f27e-4079-8862-856526c799a9 (583.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "etag": "W/\"195-nXXR4KMhhW2NYJfrP8qbPDSDMuo\"",
    "date": "Mon, 02 Jun 2025 00:03:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d0ca2104-f27e-4079-8862-856526c799a9",
    "name": "Org1 1748822611239",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748822611239@example.com",
    "status": "active",
    "createdBy": "OA4sonTqoaNxnczZALA0q8UtCL22",
    "createdAt": "2025-06-02T00:03:31.592Z",
    "updatedAt": "2025-06-02T00:03:31.592Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 583.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/5ef5b040-9b21-428b-b3ab-b851044a5fea (543.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "etag": "W/\"196-63rFIhapEwUvBhIw3A94O85pVWY\"",
    "date": "Mon, 02 Jun 2025 00:03:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5ef5b040-9b21-428b-b3ab-b851044a5fea",
    "name": "Org2 1748822611656",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748822611656@example.com",
    "status": "active",
    "createdBy": "Hg6j2UazjifmCf2phh4tNbQQvEJ3",
    "createdAt": "2025-06-02T00:03:32.076Z",
    "updatedAt": "2025-06-02T00:03:32.076Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 543.9 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/957a2ed5-b9eb-4f6a-b29d-6724a23cf6a5 (963.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 963.2 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/de5b0294-9a91-4356-9213-9053ec12a1b7 (1050.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1050.6 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/65803962-a20c-4799-b111-59a3ddc6aca2 (1113.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1113.7 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/1d121f0a-2620-42a9-b2ab-0819b1974c36 (934.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 934.7 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/54f4e338-4326-4f87-88d9-58dba18a3a1a (1006.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:39 GMT",
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

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/71678312-1138-45fc-a7c2-17db3eb5aefd (1045.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1045.9 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/organizations/71cb56df-82aa-4416-ab65-e59bd8361eb1 (1544.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1544.6 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/organizations/d0ca2104-f27e-4079-8862-856526c799a9 (1009.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1009.9 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/5ef5b040-9b21-428b-b3ab-b851044a5fea (1080.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNTk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI1OTUsImV4cCI6MTc0ODgyNjE5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pvxBHhqvkp3-OkkBSkBL0e482x5FW9K6o9yrg6aVDWtslzFxPhBwFgBe8q6yrxG4MFb_a0PdyiDk4Fee1qWUkXJZx2S_fN5sAIvH09__qLO689Uws7dM-A969QfQVuLokrslEJa5Av6siQWNGLAc_eQPY4VgCX5a8ruiTYBnRqDo23DoLLl7SQ9_wE6r7WBBDZyo3LtI71qJasMAlvndFRupuRZK6oicIyCplxsDqprRukvQSu0su0-vywuDVCHA_9kTsLxz2Aom6PIt4FmOA0PZZG20qs5BOzE8tBsWmIKub1HWxfxsBFbY4dqI5BwLmaFCqw0GPfG6AWTb4BfJCA"
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
    "date": "Mon, 02 Jun 2025 00:03:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1080.2 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (256.7ms)</summary>

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
    "etag": "W/\"640-FodMRYKMOxwdlyvJp3QrZl3bZ/w\"",
    "date": "Mon, 02 Jun 2025 00:03:44 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNjI0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI2MjQsImV4cCI6MTc0ODgyNjIyNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ifa-W_9Y5ZTL4t9EsAxDnHzpKMsUS-hisFwAKhNdCfnX8Ge_EgVPJQHCs3pKULQN2rMpD9Fjf8kmENAqq9g1rFHkMqMm1YgxbhyFOzL8jp3e7TH0g8f8OP8p2qJzpb7NaFsKvIlT4GnwhOdGcF1B5k5BaIGrkbQny_I1-ufcBoocBS5_48ZBBd3LzE30E0EiVprnuEszoK9rqCB9c2YTHbOuzkg3TdL6ijTbRMu4sMO0xmxcGM4OG_5HVrKU8Zoxka9UKdy3nUTFw0nRAS080bjBdWnB0gCaZwpmBXsj30meD3Yg6HtjE8DDGZSYRu6S4q3Afn-1G7Z3iLhfbdC_Og",
      "refreshToken": "AMf-vByioVZw0TfTBGVCPQjt1IPjgo0JOTqOdeW-5X1BY_345IlEmCXazUMBEL1rwI6ODnj5tfvptAv3ilDMwOxHX4-bABiUId-071yVms1xaqvXn4wV52NBHzv93w6QrSDwppI5s7tLT31z1IfIUBmmC23Z_sza4LsZk1_px3INdDILSB0f9nfvOkGENSCigtdK8KUTRKK0xiSnBgYpt3skLRp9gPHd76hjCxqTqOOlPb1I3o1NR4-LlpePY_sSamlyGeXWVQGw",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 256.7 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/oieGQOr1vAM8q7LawaVtb7lB3qw2 (1166.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNjI0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI2MjQsImV4cCI6MTc0ODgyNjIyNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ifa-W_9Y5ZTL4t9EsAxDnHzpKMsUS-hisFwAKhNdCfnX8Ge_EgVPJQHCs3pKULQN2rMpD9Fjf8kmENAqq9g1rFHkMqMm1YgxbhyFOzL8jp3e7TH0g8f8OP8p2qJzpb7NaFsKvIlT4GnwhOdGcF1B5k5BaIGrkbQny_I1-ufcBoocBS5_48ZBBd3LzE30E0EiVprnuEszoK9rqCB9c2YTHbOuzkg3TdL6ijTbRMu4sMO0xmxcGM4OG_5HVrKU8Zoxka9UKdy3nUTFw0nRAS080bjBdWnB0gCaZwpmBXsj30meD3Yg6HtjE8DDGZSYRu6S4q3Afn-1G7Z3iLhfbdC_Og"
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
    "date": "Mon, 02 Jun 2025 00:03:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1166.1 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (369.8ms)</summary>

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
    "etag": "W/\"640-nubraLS7VloXAIGvqvxxhkslJGY\"",
    "date": "Mon, 02 Jun 2025 00:03:45 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNjI1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI2MjUsImV4cCI6MTc0ODgyNjIyNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.itNSh3oI3W5zPhcau3zobyF81WO8XOKKXsAsYzqEozjZI66q4Z24WYvz5GDfk_b-V4YStOdMX3CgGRL41t13Ut1QOy5daYx2FYKgKnbTMk0Xycda30St1Q1dW_uR7RPCXcbgwykhtmt0chH6dOhIUse7g7GGbaiAXhHj37fMudVRlAwHGpIzO5MdQBUbDaaKqTddYMa29CoTEOhH8XzMxLQTUlWgtUZW3WrHFx0sthIOwGluSKeUCTY37WQDxQajvBO8rZWbcUVuogkjqQzHsFHIFMDRVD5DCJdyQsopdd2ykQqJVK8lFRiSqVQukI6zZmhHsjoe2eNiS5fu_GDVjw",
      "refreshToken": "AMf-vBww4E4_WPgR1WGNeMSCLj3GQxNdev2-a9xCZWDc_q7uwmyumjPjVdNkkfY6GV0d63DwQsqtjGbenUzY5NR6yMG-nruGUnJf-cePYIlU-FR7lXQj9_UzTkCPO4zdwEJY0XJXcEV3B33G5RokDqe186TuJ8u6sbN6FUEg9AxbQoVFbLfowOKcZtIZBNQl306rEJEYz6ySK22iRqgVZpxPecrADGIzPLmZXBqAZa6LIgKVtwmXJW6mXvN8eQEk_MtTQNffkpJE",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 369.8 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/OA4sonTqoaNxnczZALA0q8UtCL22 (1173.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNjI1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI2MjUsImV4cCI6MTc0ODgyNjIyNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.itNSh3oI3W5zPhcau3zobyF81WO8XOKKXsAsYzqEozjZI66q4Z24WYvz5GDfk_b-V4YStOdMX3CgGRL41t13Ut1QOy5daYx2FYKgKnbTMk0Xycda30St1Q1dW_uR7RPCXcbgwykhtmt0chH6dOhIUse7g7GGbaiAXhHj37fMudVRlAwHGpIzO5MdQBUbDaaKqTddYMa29CoTEOhH8XzMxLQTUlWgtUZW3WrHFx0sthIOwGluSKeUCTY37WQDxQajvBO8rZWbcUVuogkjqQzHsFHIFMDRVD5DCJdyQsopdd2ykQqJVK8lFRiSqVQukI6zZmhHsjoe2eNiS5fu_GDVjw"
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
    "date": "Mon, 02 Jun 2025 00:03:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1173.6 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (258.5ms)</summary>

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
    "etag": "W/\"640-M5wQXihHfsiyuA3RgYkNcR3sJIs\"",
    "date": "Mon, 02 Jun 2025 00:03:47 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNjI3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI2MjcsImV4cCI6MTc0ODgyNjIyNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gL9uCndl1Le3K9EVTg0THTmI9whS19RJV7yJClfuKrfXfBHyi-g_RvOKOIlPoC05QX8lSuhCpU-NVeM8K3i-5iIHY-qXVGCoACFwA6wtUHoib6QnJ_3qZ89zFE0r8pWQGpMRSYKu1lWSBcKFQEBQbhFzBQnSKGZXnos2lLA_e4gwYtp3cJjM6OUcCeb8nAS9cSwchA0HSGNkaYoONtbD6DyvVgqoMBUvb6C4S2fug5u7HFvk08ITNWfl3en19i14iCWD6sbOF1OUAPHQy9OePHwUWpZowiJ7GAHh8zaQ4_UG9kGiG6GzNgpJzgU33GqxtPRrvmHarHfbnYhB-XVA0g",
      "refreshToken": "AMf-vByVhVmlerYHv1XJc3ZAL19aizOJkduu72kjx409F_hTP5Y-bcOvEPK7Ay3I-pH-0B6OpbD40qonpnmYYsXeALHYLwIBgEX5FDItbePoNF7FKQPpwx81XbRtf6Cq8mc_4K-fCsrTDPJWeTxSpM16_H4YeZV-tZ5l11iIrPSY63fq3uYa1vn94QFL8c5nbEacvVQOWfLForDnKPs4N5KKD2WzZLrgZIKLv6Mum1Uazowlmbui3edn4XMIYjr9_nWLoBV3aoRM",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 258.5 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/Hg6j2UazjifmCf2phh4tNbQQvEJ3 (1416.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNjI3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI2MjcsImV4cCI6MTc0ODgyNjIyNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gL9uCndl1Le3K9EVTg0THTmI9whS19RJV7yJClfuKrfXfBHyi-g_RvOKOIlPoC05QX8lSuhCpU-NVeM8K3i-5iIHY-qXVGCoACFwA6wtUHoib6QnJ_3qZ89zFE0r8pWQGpMRSYKu1lWSBcKFQEBQbhFzBQnSKGZXnos2lLA_e4gwYtp3cJjM6OUcCeb8nAS9cSwchA0HSGNkaYoONtbD6DyvVgqoMBUvb6C4S2fug5u7HFvk08ITNWfl3en19i14iCWD6sbOF1OUAPHQy9OePHwUWpZowiJ7GAHh8zaQ4_UG9kGiG6GzNgpJzgU33GqxtPRrvmHarHfbnYhB-XVA0g"
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
    "date": "Mon, 02 Jun 2025 00:03:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1416.5 ms  

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
