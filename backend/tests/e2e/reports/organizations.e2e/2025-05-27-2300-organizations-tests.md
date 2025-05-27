# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 11:00:06 PM  
**Duration:** 34.58s  
**Tests:** 16 total, 16 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 1.22s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.68s | Regular user should create organization successfully |
| ✅ Should fail without authentication | PASSED | 0.08s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.79s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.54s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.79s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.69s | Should fail without proper permissions |
| ✅ Admin should delete organization successfully | PASSED | 1.63s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.28s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.73s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.35s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.63s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.70s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 1.37s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 1.32s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.22s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (1215.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Test Organization 1748379575253",
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
    "etag": "W/\"171-9OZOS9FnwH6sFDtEW29S2SglFL8\"",
    "date": "Tue, 27 May 2025 20:59:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9b15466d-8768-4048-8cc0-85b7f3f919a9",
    "name": "Test Organization 1748379575253",
    "description": "Test organization for E2E testing",
    "logo": null,
    "address": "123 Test Street",
    "phone": "+1234567890",
    "email": "test@organization.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:35.952Z",
    "updatedAt": "2025-05-27T20:59:35.952Z"
  }
}
```

**⏱️ Duration:** 1215.8 ms  

</details>


---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (680.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU3NSwidXNlcl9pZCI6Im9wbzliNG1lZ1JWajNSSkV6RlpwRlpHMXJ4MzMiLCJzdWIiOiJvcG85YjRtZWdSVmozUkpFekZacEZaRzFyeDMzIiwiaWF0IjoxNzQ4Mzc5NTc1LCJleHAiOjE3NDgzODMxNzUsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5NTczNDM5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTU3MzQzOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HLLXsqDoRRkLjanF5NEca_7fHmF7Ks4vhwrlIHvGv3i0S7HlxDVPcrmUZG0YZNbXHs4yyUjxfc-vk4SwS62IFjLcD1nJNXrLs8Q3tOk6b53EcEyoRU47cC8MHF7pj27lnTo7TvXAUaEet8yUBPYzyRfo_bESpz04qXZQFmZyKjaebPipZckhpWmCdvaELXEsyTm_XmFVN9FLM2ErTY_kCVCJ8kLjqPWm1wGJZ0ft0aWGM2hr9bD5OID1SN6PImmV7k4xCC_xUex1hocUaSElcJFsHY2CKotQhm_Qozutfx_vMw3aaC8ABIoKSRkCk2ybsDwmjfJlonPR7_ByS1lnLQ"
  },
  "data": {
    "name": "User Org 1748379576474",
    "description": "Organization created by regular user",
    "email": "user-org-1748379576474@example.com"
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
    "etag": "W/\"162-NiRHxLN/pDZLSPKb+B3JTB74YWU\"",
    "date": "Tue, 27 May 2025 20:59:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a75e3926-98ad-4e22-8926-39acbacb1758",
    "name": "User Org 1748379576474",
    "description": "Organization created by regular user",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "user-org-1748379576474@example.com",
    "status": "active",
    "createdBy": "opo9b4megRVj3RJEzFZpFZG1rx33",
    "createdAt": "2025-05-27T20:59:37.037Z",
    "updatedAt": "2025-05-27T20:59:37.037Z"
  }
}
```

**⏱️ Duration:** 680.5 ms  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.08s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (82.3ms)</summary>

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
    "date": "Tue, 27 May 2025 20:59:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 82.3 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (915.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Get Test Org 1748379577241",
    "description": "Organization for get tests",
    "email": "get-test-org-1748379577241@example.com"
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
    "etag": "W/\"160-4lP+DXSTSNJ938IYk3/TBP8iEgE\"",
    "date": "Tue, 27 May 2025 20:59:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "17b0ecd4-92b8-4b7b-93cc-b14879a1f0e9",
    "name": "Get Test Org 1748379577241",
    "description": "Organization for get tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "get-test-org-1748379577241@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:37.852Z",
    "updatedAt": "2025-05-27T20:59:37.852Z"
  }
}
```

**⏱️ Duration:** 915.1 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/17b0ecd4-92b8-4b7b-93cc-b14879a1f0e9 (9.0ms)</summary>

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
    "date": "Tue, 27 May 2025 20:59:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 9.0 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (656.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Update Test Org 1748379579504",
    "description": "Organization for update tests",
    "email": "update-test-org-1748379579504@example.com"
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
    "etag": "W/\"169-yvDc9iM1SGWQK+9oP2YSc89d2SQ\"",
    "date": "Tue, 27 May 2025 20:59:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "12fed593-afbc-4b10-9c3c-fa478d3bdf0e",
    "name": "Update Test Org 1748379579504",
    "description": "Organization for update tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "update-test-org-1748379579504@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:40.098Z",
    "updatedAt": "2025-05-27T20:59:40.098Z"
  }
}
```

**⏱️ Duration:** 656.5 ms  

</details>


---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/17b0ecd4-92b8-4b7b-93cc-b14879a1f0e9 (791.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "etag": "W/\"171-X15HqkEm1r1xqUAcAgJKEgi8qkw\"",
    "date": "Tue, 27 May 2025 20:59:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "17b0ecd4-92b8-4b7b-93cc-b14879a1f0e9",
    "name": "Get Test Org 1748379577241",
    "description": "Organization for get tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "get-test-org-1748379577241@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:37.852Z",
    "updatedAt": "2025-05-27T20:59:37.852Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 791.0 ms  

</details>


---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/invalid-id (541.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found",
    "details": "Invalid organization ID format"
  }
}
```

**⏱️ Duration:** 541.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (82.3ms)</summary>

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
    "date": "Tue, 27 May 2025 20:59:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 82.3 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (915.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Get Test Org 1748379577241",
    "description": "Organization for get tests",
    "email": "get-test-org-1748379577241@example.com"
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
    "etag": "W/\"160-4lP+DXSTSNJ938IYk3/TBP8iEgE\"",
    "date": "Tue, 27 May 2025 20:59:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "17b0ecd4-92b8-4b7b-93cc-b14879a1f0e9",
    "name": "Get Test Org 1748379577241",
    "description": "Organization for get tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "get-test-org-1748379577241@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:37.852Z",
    "updatedAt": "2025-05-27T20:59:37.852Z"
  }
}
```

**⏱️ Duration:** 915.1 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/17b0ecd4-92b8-4b7b-93cc-b14879a1f0e9 (9.0ms)</summary>

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
    "date": "Tue, 27 May 2025 20:59:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 9.0 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (656.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Update Test Org 1748379579504",
    "description": "Organization for update tests",
    "email": "update-test-org-1748379579504@example.com"
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
    "etag": "W/\"169-yvDc9iM1SGWQK+9oP2YSc89d2SQ\"",
    "date": "Tue, 27 May 2025 20:59:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "12fed593-afbc-4b10-9c3c-fa478d3bdf0e",
    "name": "Update Test Org 1748379579504",
    "description": "Organization for update tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "update-test-org-1748379579504@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:40.098Z",
    "updatedAt": "2025-05-27T20:59:40.098Z"
  }
}
```

**⏱️ Duration:** 656.5 ms  

</details>


---

### Test: Admin should update organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.79s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/12fed593-afbc-4b10-9c3c-fa478d3bdf0e (777.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Updated Update Test Org 1748379579504",
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
    "etag": "W/\"170-XDYFyOHpf+DfRZpUU1h1/vCLGLU\"",
    "date": "Tue, 27 May 2025 20:59:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "12fed593-afbc-4b10-9c3c-fa478d3bdf0e",
    "name": "Updated Update Test Org 1748379579504",
    "description": "Updated description",
    "logo": null,
    "address": null,
    "phone": "+9876543210",
    "email": "update-test-org-1748379579504@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:40.098Z",
    "updatedAt": "2025-05-27T20:59:40.834Z"
  }
}
```

**⏱️ Duration:** 777.5 ms  

</details>


**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 12fed593-afbc-4b10-9c3c-fa478d3bdf0e
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748379579504",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZW
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/12fed593-afbc-4b10-9c3c-fa478d3bdf0e (693.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU3NSwidXNlcl9pZCI6Im9wbzliNG1lZ1JWajNSSkV6RlpwRlpHMXJ4MzMiLCJzdWIiOiJvcG85YjRtZWdSVmozUkpFekZacEZaRzFyeDMzIiwiaWF0IjoxNzQ4Mzc5NTc1LCJleHAiOjE3NDgzODMxNzUsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5NTczNDM5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTU3MzQzOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HLLXsqDoRRkLjanF5NEca_7fHmF7Ks4vhwrlIHvGv3i0S7HlxDVPcrmUZG0YZNbXHs4yyUjxfc-vk4SwS62IFjLcD1nJNXrLs8Q3tOk6b53EcEyoRU47cC8MHF7pj27lnTo7TvXAUaEet8yUBPYzyRfo_bESpz04qXZQFmZyKjaebPipZckhpWmCdvaELXEsyTm_XmFVN9FLM2ErTY_kCVCJ8kLjqPWm1wGJZ0ft0aWGM2hr9bD5OID1SN6PImmV7k4xCC_xUex1hocUaSElcJFsHY2CKotQhm_Qozutfx_vMw3aaC8ABIoKSRkCk2ybsDwmjfJlonPR7_ByS1lnLQ"
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
    "date": "Tue, 27 May 2025 20:59:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 693.4 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (569.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Delete Test Org 1748379581646",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748379581646@example.com"
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
    "etag": "W/\"169-Mw5w8cAPSD3/ZSodHGxIPxBWnP4\"",
    "date": "Tue, 27 May 2025 20:59:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "bdc9888d-c6c3-4d6b-8200-91a6cc9abc74",
    "name": "Delete Test Org 1748379581646",
    "description": "Organization for delete tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "delete-test-org-1748379581646@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:42.150Z",
    "updatedAt": "2025-05-27T20:59:42.150Z"
  }
}
```

**⏱️ Duration:** 569.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (614.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "No Delete Perm Org 1748379583850",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748379583850@example.com"
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
    "etag": "W/\"172-ANrPDUREGjsrLKaDu3W7PoZe4oU\"",
    "date": "Tue, 27 May 2025 20:59:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "de4ec3d4-4fa2-4842-8627-04f84dad9636",
    "name": "No Delete Perm Org 1748379583850",
    "description": "Organization for permission test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "no-delete-perm-org-1748379583850@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:44.404Z",
    "updatedAt": "2025-05-27T20:59:44.404Z"
  }
}
```

**⏱️ Duration:** 614.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/de4ec3d4-4fa2-4842-8627-04f84dad9636 (665.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU3NSwidXNlcl9pZCI6Im9wbzliNG1lZ1JWajNSSkV6RlpwRlpHMXJ4MzMiLCJzdWIiOiJvcG85YjRtZWdSVmozUkpFekZacEZaRzFyeDMzIiwiaWF0IjoxNzQ4Mzc5NTc1LCJleHAiOjE3NDgzODMxNzUsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5NTczNDM5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTU3MzQzOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HLLXsqDoRRkLjanF5NEca_7fHmF7Ks4vhwrlIHvGv3i0S7HlxDVPcrmUZG0YZNbXHs4yyUjxfc-vk4SwS62IFjLcD1nJNXrLs8Q3tOk6b53EcEyoRU47cC8MHF7pj27lnTo7TvXAUaEet8yUBPYzyRfo_bESpz04qXZQFmZyKjaebPipZckhpWmCdvaELXEsyTm_XmFVN9FLM2ErTY_kCVCJ8kLjqPWm1wGJZ0ft0aWGM2hr9bD5OID1SN6PImmV7k4xCC_xUex1hocUaSElcJFsHY2CKotQhm_Qozutfx_vMw3aaC8ABIoKSRkCk2ybsDwmjfJlonPR7_ByS1lnLQ"
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
    "date": "Tue, 27 May 2025 20:59:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 665.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should delete organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/organizations/bdc9888d-c6c3-4d6b-8200-91a6cc9abc74 (991.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 991.4 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/bdc9888d-c6c3-4d6b-8200-91a6cc9abc74 (639.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 639.0 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.28s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/12fed593-afbc-4b10-9c3c-fa478d3bdf0e (693.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU3NSwidXNlcl9pZCI6Im9wbzliNG1lZ1JWajNSSkV6RlpwRlpHMXJ4MzMiLCJzdWIiOiJvcG85YjRtZWdSVmozUkpFekZacEZaRzFyeDMzIiwiaWF0IjoxNzQ4Mzc5NTc1LCJleHAiOjE3NDgzODMxNzUsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5NTczNDM5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTU3MzQzOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HLLXsqDoRRkLjanF5NEca_7fHmF7Ks4vhwrlIHvGv3i0S7HlxDVPcrmUZG0YZNbXHs4yyUjxfc-vk4SwS62IFjLcD1nJNXrLs8Q3tOk6b53EcEyoRU47cC8MHF7pj27lnTo7TvXAUaEet8yUBPYzyRfo_bESpz04qXZQFmZyKjaebPipZckhpWmCdvaELXEsyTm_XmFVN9FLM2ErTY_kCVCJ8kLjqPWm1wGJZ0ft0aWGM2hr9bD5OID1SN6PImmV7k4xCC_xUex1hocUaSElcJFsHY2CKotQhm_Qozutfx_vMw3aaC8ABIoKSRkCk2ybsDwmjfJlonPR7_ByS1lnLQ"
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
    "date": "Tue, 27 May 2025 20:59:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 693.4 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (569.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Delete Test Org 1748379581646",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748379581646@example.com"
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
    "etag": "W/\"169-Mw5w8cAPSD3/ZSodHGxIPxBWnP4\"",
    "date": "Tue, 27 May 2025 20:59:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "bdc9888d-c6c3-4d6b-8200-91a6cc9abc74",
    "name": "Delete Test Org 1748379581646",
    "description": "Organization for delete tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "delete-test-org-1748379581646@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:42.150Z",
    "updatedAt": "2025-05-27T20:59:42.150Z"
  }
}
```

**⏱️ Duration:** 569.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (614.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "No Delete Perm Org 1748379583850",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748379583850@example.com"
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
    "etag": "W/\"172-ANrPDUREGjsrLKaDu3W7PoZe4oU\"",
    "date": "Tue, 27 May 2025 20:59:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "de4ec3d4-4fa2-4842-8627-04f84dad9636",
    "name": "No Delete Perm Org 1748379583850",
    "description": "Organization for permission test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "no-delete-perm-org-1748379583850@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:44.404Z",
    "updatedAt": "2025-05-27T20:59:44.404Z"
  }
}
```

**⏱️ Duration:** 614.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/de4ec3d4-4fa2-4842-8627-04f84dad9636 (665.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU3NSwidXNlcl9pZCI6Im9wbzliNG1lZ1JWajNSSkV6RlpwRlpHMXJ4MzMiLCJzdWIiOiJvcG85YjRtZWdSVmozUkpFekZacEZaRzFyeDMzIiwiaWF0IjoxNzQ4Mzc5NTc1LCJleHAiOjE3NDgzODMxNzUsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5NTczNDM5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTU3MzQzOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HLLXsqDoRRkLjanF5NEca_7fHmF7Ks4vhwrlIHvGv3i0S7HlxDVPcrmUZG0YZNbXHs4yyUjxfc-vk4SwS62IFjLcD1nJNXrLs8Q3tOk6b53EcEyoRU47cC8MHF7pj27lnTo7TvXAUaEet8yUBPYzyRfo_bESpz04qXZQFmZyKjaebPipZckhpWmCdvaELXEsyTm_XmFVN9FLM2ErTY_kCVCJ8kLjqPWm1wGJZ0ft0aWGM2hr9bD5OID1SN6PImmV7k4xCC_xUex1hocUaSElcJFsHY2CKotQhm_Qozutfx_vMw3aaC8ABIoKSRkCk2ybsDwmjfJlonPR7_ByS1lnLQ"
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
    "date": "Tue, 27 May 2025 20:59:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 665.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (733.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "etag": "W/\"864b-sPBKzmCdNIlxgawUQ3FL1rn5wOE\"",
    "date": "Tue, 27 May 2025 20:59:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "9b15466d-8768-4048-8cc0-85b7f3f919a9",
      "name": "Test Organization 1748379575253",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:59:35.952Z",
      "updatedAt": "2025-05-27T20:59:35.952Z",
      "memberships": []
    },
    {
      "id": "a75e3926-98ad-4e22-8926-39acbacb1758",
      "name": "User Org 1748379576474",
      "description": "Organization created by regular user",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "user-org-1748379576474@example.com",
      "status": "active",
      "createdBy": "opo9b4megRVj3RJEzFZpFZG1rx33",
      "createdAt": "2025-05-27T20:59:37.037Z",
      "updatedAt": "2025-05-27T20:59:37.037Z",
      "memberships": []
    },
    {
      "id": "17b0ecd4-92b8-4b7b-93cc-b14879a1f0e9",
      "name": "Get Test Org 1748379577241",
      "description": "Organization for get tests",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "get-test-org-1748379577241@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:59:37.852Z",
      "updatedAt": "2025-05-27T20:59:37.852Z",
      "memberships": []
    },
    {
      "id": "12fed593-afbc-4b10-9c3c-fa478d3bdf0e",
      "name": "Updated Update Test Org 1748379579504",
      "description": "Updated description",
      "logo": null,
      "address": null,
      "phone": "+9876543210",
      "email": "update-test-org-1748379579504@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:59:40.098Z",
      "updatedAt": "2025-05-27T20:59:40.834Z",
      "memberships": []
    },
    {
      "id": "de4ec3d4-4fa2-4842-8627-04f84dad9636",
      "name": "No Delete Perm Org 1748379583850",
      "description": "Organization for permission test",
      "logo": null,
      "address": null,
      "phone": null,
      "email": "no-delete-perm-org-1748379583850@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-05-27T20:59:44.404Z",
      "updatedAt": "2025-05-27T20:59:44.404Z",
      "memberships": []
    },
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
    }
  ]
}
```

**⏱️ Duration:** 733.2 ms  

</details>


---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.35s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (346.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU3NSwidXNlcl9pZCI6Im9wbzliNG1lZ1JWajNSSkV6RlpwRlpHMXJ4MzMiLCJzdWIiOiJvcG85YjRtZWdSVmozUkpFekZacEZaRzFyeDMzIiwiaWF0IjoxNzQ4Mzc5NTc1LCJleHAiOjE3NDgzODMxNzUsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5NTczNDM5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTU3MzQzOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HLLXsqDoRRkLjanF5NEca_7fHmF7Ks4vhwrlIHvGv3i0S7HlxDVPcrmUZG0YZNbXHs4yyUjxfc-vk4SwS62IFjLcD1nJNXrLs8Q3tOk6b53EcEyoRU47cC8MHF7pj27lnTo7TvXAUaEet8yUBPYzyRfo_bESpz04qXZQFmZyKjaebPipZckhpWmCdvaELXEsyTm_XmFVN9FLM2ErTY_kCVCJ8kLjqPWm1wGJZ0ft0aWGM2hr9bD5OID1SN6PImmV7k4xCC_xUex1hocUaSElcJFsHY2CKotQhm_Qozutfx_vMw3aaC8ABIoKSRkCk2ybsDwmjfJlonPR7_ByS1lnLQ"
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
    "date": "Tue, 27 May 2025 20:59:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 346.2 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (547.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
  },
  "data": {
    "name": "Members Test Org 1748379586215",
    "description": "Organization for members tests",
    "email": "members-test-org-1748379586215@example.com"
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
    "etag": "W/\"16c-Nl1pb75h31NhOIGgVXxjYoBUb4g\"",
    "date": "Tue, 27 May 2025 20:59:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "161eedeb-4849-4a9c-ba17-86e3d40c7453",
    "name": "Members Test Org 1748379586215",
    "description": "Organization for members tests",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "members-test-org-1748379586215@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-05-27T20:59:46.700Z",
    "updatedAt": "2025-05-27T20:59:46.700Z"
  }
}
```

**⏱️ Duration:** 547.7 ms  

</details>


---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/161eedeb-4849-4a9c-ba17-86e3d40c7453/members (626.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 626.6 ms  

</details>


---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/161eedeb-4849-4a9c-ba17-86e3d40c7453/members (703.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU3NSwidXNlcl9pZCI6Im9wbzliNG1lZ1JWajNSSkV6RlpwRlpHMXJ4MzMiLCJzdWIiOiJvcG85YjRtZWdSVmozUkpFekZacEZaRzFyeDMzIiwiaWF0IjoxNzQ4Mzc5NTc1LCJleHAiOjE3NDgzODMxNzUsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4Mzc5NTczNDM5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODM3OTU3MzQzOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HLLXsqDoRRkLjanF5NEca_7fHmF7Ks4vhwrlIHvGv3i0S7HlxDVPcrmUZG0YZNbXHs4yyUjxfc-vk4SwS62IFjLcD1nJNXrLs8Q3tOk6b53EcEyoRU47cC8MHF7pj27lnTo7TvXAUaEet8yUBPYzyRfo_bESpz04qXZQFmZyKjaebPipZckhpWmCdvaELXEsyTm_XmFVN9FLM2ErTY_kCVCJ8kLjqPWm1wGJZ0ft0aWGM2hr9bD5OID1SN6PImmV7k4xCC_xUex1hocUaSElcJFsHY2CKotQhm_Qozutfx_vMw3aaC8ABIoKSRkCk2ybsDwmjfJlonPR7_ByS1lnLQ"
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
    "date": "Tue, 27 May 2025 20:59:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. You must be a member to view organization members."
  }
}
```

**⏱️ Duration:** 703.5 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (1127.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748379588101@example.com",
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
    "etag": "W/\"5ae-i5EBIT2E9YMKz1gs7Xwun6aVAcI\"",
    "date": "Tue, 27 May 2025 20:59:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "yFHHSyjRnVQXQ6yK35S8kEU8TxG2",
      "email": "org1-admin-1748379588101@example.com",
      "name": "Org1 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU4OCwidXNlcl9pZCI6InlGSEhTeWpSblZRWFE2eUszNVM4a0VVOFR4RzIiLCJzdWIiOiJ5RkhIU3lqUm5WUVhRNnlLMzVTOGtFVThUeEcyIiwiaWF0IjoxNzQ4Mzc5NTg4LCJleHAiOjE3NDgzODMxODgsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5NTg4MTAxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTU4ODEwMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LxKwtJ4U_L2qJAIsLb102hxn7QA_L9WQ1-WNbCzQpjIRmsoqAyNVX_K5H_mFQqXlk7czwOv5i-mEdiVIwZJMcvieQkL3XKsW4J0x1Ljcld8MYmDQZT9lgfXsfoGYxXvnM_6olscD9Jr2bBvw1H-6GTWSYbsfy1a9OVqZ0Apbgqb12gqSVVk_s1JMeoPFVh2n_zW7Rpsp8bQkBN0BFJ-RXxq4YNga2ZwweI1Xa2PsLpmrsJ1AfpIm-6QILF6tb9IFAbTBXZPwcBOja6YBT5CKaAuEMKGMjG__dUCpwydnup2htAyqeU_yMwr8KgdwzVrtawvhO5LD8pVgglvr11bIFA",
      "refreshToken": "AMf-vBzmvnfGt_crcHKzKwEc3aaxzol-8-tBOk9SdBghYszxBLJVwDMVYjyNJkdP9UfpUR6qEoCjB66duLGqDb7L_Zw8dR5AQ88NkAg-bta8cJqllnKC6ibe7kF683nVkwLlJKLUCS8RDWmz1Ti1IwN1LJO1k-hgNahL2QH1cANJSaKhHt6SpjdjoCskJ4xpx1OYUBd4LIwbKxk9NZ4FSjxtYdYsfEoeCwNrDqcApvIG0Vps_7UsVrQ",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1127.2 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1126.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748379589229@example.com",
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
    "etag": "W/\"5ae-vOTZIkMmimla/dLmUtiM/+4L5aU\"",
    "date": "Tue, 27 May 2025 20:59:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "XbciLZ8tRNfGw5OIBFeQfXTl22h1",
      "email": "org2-admin-1748379589229@example.com",
      "name": "Org2 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU4OSwidXNlcl9pZCI6IlhiY2lMWjh0Uk5mR3c1T0lCRmVRZlhUbDIyaDEiLCJzdWIiOiJYYmNpTFo4dFJOZkd3NU9JQkZlUWZYVGwyMmgxIiwiaWF0IjoxNzQ4Mzc5NTg5LCJleHAiOjE3NDgzODMxODksImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4Mzc5NTg5MjI5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODM3OTU4OTIyOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.b2f2tNIHGNyF_zOIycny5dgvHms4vrlFyB_Tu35W_w5HsrCFrX_P0K2ayhsTtXhWq_dhib1vGnGr2LRhOpD_-_1o6jH0c-9m81f3SeKIu2AuWJm4IRVlPWDaMRSGvMgOmxTaJO4vzhr205_ZBx12sWT9XwipTyLOoVdaQ0AWFBywzSDAVxgfXjpATXTqLmZRfEBCXaCnDbcmDUFupa-Wawdu2FXtYXVErwAq-WLxchnctzwYudzO5AXrivEYysoJx1E9GYKe2hdN54E4Ko8h6os2EzcIqk5J-Bi6ufd_TEaZg4DFXE2K3hPiJ0gdX1hOiCvKY1QxBLAV2ninmQQ-Ng",
      "refreshToken": "AMf-vByLwpZ37ed6MB5tmKDE_BSI09HVnC6gg-hH1o4CBZfsG10KLkaMJDAKs7qPEy6jvxJQlqLJh6-LDddsaOk2CjIxNxon3oGEiy2Zch3o_Ehd2XYiwwTB79Nj20N7HkbfVSPKVtFNU3SbNCNqreKRVVyeAHU8jOC30-CIzIH1VZj2yGDpBO6Adlhw4a5mmW5xPi-ifoVy16C1hQlOgHPFOqImkfQjCa-UUvx8V1eSzI5fR6LuEok",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1126.3 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (355.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748379588101@example.com",
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
    "etag": "W/\"582-WB6zIUeGFaW2KYFGBwzSAhhsGDQ\"",
    "date": "Tue, 27 May 2025 20:59:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "yFHHSyjRnVQXQ6yK35S8kEU8TxG2",
      "email": "org1-admin-1748379588101@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU5MCwidXNlcl9pZCI6InlGSEhTeWpSblZRWFE2eUszNVM4a0VVOFR4RzIiLCJzdWIiOiJ5RkhIU3lqUm5WUVhRNnlLMzVTOGtFVThUeEcyIiwiaWF0IjoxNzQ4Mzc5NTkwLCJleHAiOjE3NDgzODMxOTAsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5NTg4MTAxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTU4ODEwMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LamR89hIYSSXO685wtlm_sJxx88kepCk_kl3kShw0jeeVPs08BPYl9qYXuHvfK8656NT22bRzCaHWucb4OviAsRO3Unc4Vs0cCo2YGPC1jBsZCx375hOVqL7CixOm2xgjpWKhXQ-hyWARWlE4CrvTY-Z9c4RRf9XOiHOgGunLrSdzupyMIUvrU1Jrn9Y1aTQXNaBclhMlVgYVG4wCawtXRwTEHWNPnE0n_YcRfxlAqaXmL-WtooYmbuIzQ8jnfyQ2G08nuP66z3dAkNY9Jx2CX2gjosdq9rUAIiyw_55ZUxS1PFB5rjnc7N2aOH6b_Lh4CN4AzmOTzd-Cddw1wIfhQ",
      "refreshToken": "AMf-vBzJiDuIl9131NEphe312zeA57fQaDzw0YRl_a_t5zpQI2N9NGBBa4d4FOzF1AYjwsGFSCwONVbIk3W0S4QM9hD-SgNDBFjEtDZ3iziababdH-vSj_d2_HIGi1sk1fPAJM-cvC9-XYSo4JYwEG8qZaNhd5nisCaUyJmWbdMlhqDdHjtUeZMmsR4rKWoGAa4j8JXZbhRwFll187RbpqC6ckf2aVyI-DGfsWD59sgxQH0B8GBqslI",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 355.9 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (309.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748379589229@example.com",
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
    "etag": "W/\"582-SnLes4jm956EnKrz8FT1bCWPuSQ\"",
    "date": "Tue, 27 May 2025 20:59:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "XbciLZ8tRNfGw5OIBFeQfXTl22h1",
      "email": "org2-admin-1748379589229@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU5MCwidXNlcl9pZCI6IlhiY2lMWjh0Uk5mR3c1T0lCRmVRZlhUbDIyaDEiLCJzdWIiOiJYYmNpTFo4dFJOZkd3NU9JQkZlUWZYVGwyMmgxIiwiaWF0IjoxNzQ4Mzc5NTkwLCJleHAiOjE3NDgzODMxOTAsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4Mzc5NTg5MjI5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODM3OTU4OTIyOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cJlNM4Gp63BD3QOSZ1dRN7EoA2ZEHtvfyjmPfwLv-_zqV056tI-IyQoEa_e4I6flGGetEPwr1ENF-QtOodfHvAuCFVPMmBS5HIi6fGoYYTOc4WnhDlF7XGwGWi0lYntq8MOh3EYZJElqlbkU5LkY5V4TvM71CeDylRG4StNgWgshiCP0CfAO7JqgZ3iPqXA-B0YWjibnvVC8bgpNMxqMeZvszNFlXbSgBQ2iERTYS-Kmd0dU4kGSFxeeVRnfL8Bmj_8_pYPmUVmlWFbiPBOEJdKHlDm3HxV0fY0f_20CUSMUw26qvZ-YQyX8Bvq4xVRE_zuzZ01xJ3clOSXRKp5PWw",
      "refreshToken": "AMf-vBxu91yhjyah0Z0leRw3nemasL8zwYDJHlp8j0STufiZeKUL_wABiIoQFeGNWVGAkfjZ98j_OUpO_GtKFAuLNkeN-NgyKPBp4xAw-knbpArdW5clD37iBch44yDSHI4HoHxtRkfbkceKx_nSwc8U3j4pQp01BwQkzwANvcJ8bVhvdlCjvvSzNvAJ02aTm5rf3lOFF3W5IaeF7-k3tb5fQWXBxkRiuOf46GiyX_Wk14MYDcM8VFI",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 309.2 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/organizations (606.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU5MCwidXNlcl9pZCI6InlGSEhTeWpSblZRWFE2eUszNVM4a0VVOFR4RzIiLCJzdWIiOiJ5RkhIU3lqUm5WUVhRNnlLMzVTOGtFVThUeEcyIiwiaWF0IjoxNzQ4Mzc5NTkwLCJleHAiOjE3NDgzODMxOTAsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5NTg4MTAxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTU4ODEwMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LamR89hIYSSXO685wtlm_sJxx88kepCk_kl3kShw0jeeVPs08BPYl9qYXuHvfK8656NT22bRzCaHWucb4OviAsRO3Unc4Vs0cCo2YGPC1jBsZCx375hOVqL7CixOm2xgjpWKhXQ-hyWARWlE4CrvTY-Z9c4RRf9XOiHOgGunLrSdzupyMIUvrU1Jrn9Y1aTQXNaBclhMlVgYVG4wCawtXRwTEHWNPnE0n_YcRfxlAqaXmL-WtooYmbuIzQ8jnfyQ2G08nuP66z3dAkNY9Jx2CX2gjosdq9rUAIiyw_55ZUxS1PFB5rjnc7N2aOH6b_Lh4CN4AzmOTzd-Cddw1wIfhQ"
  },
  "data": {
    "name": "Org1 1748379591020",
    "description": "First organization for multitenant test",
    "email": "org1-1748379591020@example.com"
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
    "etag": "W/\"15d-bkZC3MPLP9UcgtU4RzbXmdspsDc\"",
    "date": "Tue, 27 May 2025 20:59:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f0e981e2-2070-45a1-af7b-0eb7e722710d",
    "name": "Org1 1748379591020",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org1-1748379591020@example.com",
    "status": "active",
    "createdBy": "yFHHSyjRnVQXQ6yK35S8kEU8TxG2",
    "createdAt": "2025-05-27T20:59:51.512Z",
    "updatedAt": "2025-05-27T20:59:51.512Z"
  }
}
```

**⏱️ Duration:** 606.1 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/organizations (560.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU5MCwidXNlcl9pZCI6IlhiY2lMWjh0Uk5mR3c1T0lCRmVRZlhUbDIyaDEiLCJzdWIiOiJYYmNpTFo4dFJOZkd3NU9JQkZlUWZYVGwyMmgxIiwiaWF0IjoxNzQ4Mzc5NTkwLCJleHAiOjE3NDgzODMxOTAsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4Mzc5NTg5MjI5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODM3OTU4OTIyOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cJlNM4Gp63BD3QOSZ1dRN7EoA2ZEHtvfyjmPfwLv-_zqV056tI-IyQoEa_e4I6flGGetEPwr1ENF-QtOodfHvAuCFVPMmBS5HIi6fGoYYTOc4WnhDlF7XGwGWi0lYntq8MOh3EYZJElqlbkU5LkY5V4TvM71CeDylRG4StNgWgshiCP0CfAO7JqgZ3iPqXA-B0YWjibnvVC8bgpNMxqMeZvszNFlXbSgBQ2iERTYS-Kmd0dU4kGSFxeeVRnfL8Bmj_8_pYPmUVmlWFbiPBOEJdKHlDm3HxV0fY0f_20CUSMUw26qvZ-YQyX8Bvq4xVRE_zuzZ01xJ3clOSXRKp5PWw"
  },
  "data": {
    "name": "Org2 1748379591626",
    "description": "Second organization for multitenant test",
    "email": "org2-1748379591626@example.com"
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
    "etag": "W/\"15e-yGySHNYMnw4t+Q57AachYIB5Cg4\"",
    "date": "Tue, 27 May 2025 20:59:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c65ff94a-3e3b-4fb9-951e-73d437edf456",
    "name": "Org2 1748379591626",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org2-1748379591626@example.com",
    "status": "active",
    "createdBy": "XbciLZ8tRNfGw5OIBFeQfXTl22h1",
    "createdAt": "2025-05-27T20:59:52.118Z",
    "updatedAt": "2025-05-27T20:59:52.118Z"
  }
}
```

**⏱️ Duration:** 560.2 ms  

</details>


---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 1.37s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/f0e981e2-2070-45a1-af7b-0eb7e722710d (723.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU5MCwidXNlcl9pZCI6InlGSEhTeWpSblZRWFE2eUszNVM4a0VVOFR4RzIiLCJzdWIiOiJ5RkhIU3lqUm5WUVhRNnlLMzVTOGtFVThUeEcyIiwiaWF0IjoxNzQ4Mzc5NTkwLCJleHAiOjE3NDgzODMxOTAsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5NTg4MTAxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTU4ODEwMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LamR89hIYSSXO685wtlm_sJxx88kepCk_kl3kShw0jeeVPs08BPYl9qYXuHvfK8656NT22bRzCaHWucb4OviAsRO3Unc4Vs0cCo2YGPC1jBsZCx375hOVqL7CixOm2xgjpWKhXQ-hyWARWlE4CrvTY-Z9c4RRf9XOiHOgGunLrSdzupyMIUvrU1Jrn9Y1aTQXNaBclhMlVgYVG4wCawtXRwTEHWNPnE0n_YcRfxlAqaXmL-WtooYmbuIzQ8jnfyQ2G08nuP66z3dAkNY9Jx2CX2gjosdq9rUAIiyw_55ZUxS1PFB5rjnc7N2aOH6b_Lh4CN4AzmOTzd-Cddw1wIfhQ"
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
    "etag": "W/\"16e-1DnUI0CqRmVHb8HMobJTaxz4Mmo\"",
    "date": "Tue, 27 May 2025 20:59:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f0e981e2-2070-45a1-af7b-0eb7e722710d",
    "name": "Org1 1748379591020",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org1-1748379591020@example.com",
    "status": "active",
    "createdBy": "yFHHSyjRnVQXQ6yK35S8kEU8TxG2",
    "createdAt": "2025-05-27T20:59:51.512Z",
    "updatedAt": "2025-05-27T20:59:51.512Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 723.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/c65ff94a-3e3b-4fb9-951e-73d437edf456 (647.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM3OTU5MCwidXNlcl9pZCI6InlGSEhTeWpSblZRWFE2eUszNVM4a0VVOFR4RzIiLCJzdWIiOiJ5RkhIU3lqUm5WUVhRNnlLMzVTOGtFVThUeEcyIiwiaWF0IjoxNzQ4Mzc5NTkwLCJleHAiOjE3NDgzODMxOTAsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4Mzc5NTg4MTAxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODM3OTU4ODEwMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LamR89hIYSSXO685wtlm_sJxx88kepCk_kl3kShw0jeeVPs08BPYl9qYXuHvfK8656NT22bRzCaHWucb4OviAsRO3Unc4Vs0cCo2YGPC1jBsZCx375hOVqL7CixOm2xgjpWKhXQ-hyWARWlE4CrvTY-Z9c4RRf9XOiHOgGunLrSdzupyMIUvrU1Jrn9Y1aTQXNaBclhMlVgYVG4wCawtXRwTEHWNPnE0n_YcRfxlAqaXmL-WtooYmbuIzQ8jnfyQ2G08nuP66z3dAkNY9Jx2CX2gjosdq9rUAIiyw_55ZUxS1PFB5rjnc7N2aOH6b_Lh4CN4AzmOTzd-Cddw1wIfhQ"
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
    "etag": "W/\"16f-EHIxlsA2kw0m5XUjLFYruQ//SR0\"",
    "date": "Tue, 27 May 2025 20:59:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c65ff94a-3e3b-4fb9-951e-73d437edf456",
    "name": "Org2 1748379591626",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org2-1748379591626@example.com",
    "status": "active",
    "createdBy": "XbciLZ8tRNfGw5OIBFeQfXTl22h1",
    "createdAt": "2025-05-27T20:59:52.118Z",
    "updatedAt": "2025-05-27T20:59:52.118Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 647.6 ms  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.32s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/f0e981e2-2070-45a1-af7b-0eb7e722710d (693.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "etag": "W/\"16e-1DnUI0CqRmVHb8HMobJTaxz4Mmo\"",
    "date": "Tue, 27 May 2025 20:59:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f0e981e2-2070-45a1-af7b-0eb7e722710d",
    "name": "Org1 1748379591020",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org1-1748379591020@example.com",
    "status": "active",
    "createdBy": "yFHHSyjRnVQXQ6yK35S8kEU8TxG2",
    "createdAt": "2025-05-27T20:59:51.512Z",
    "updatedAt": "2025-05-27T20:59:51.512Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 693.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/c65ff94a-3e3b-4fb9-951e-73d437edf456 (625.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "etag": "W/\"16f-EHIxlsA2kw0m5XUjLFYruQ//SR0\"",
    "date": "Tue, 27 May 2025 20:59:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c65ff94a-3e3b-4fb9-951e-73d437edf456",
    "name": "Org2 1748379591626",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "org2-1748379591626@example.com",
    "status": "active",
    "createdBy": "XbciLZ8tRNfGw5OIBFeQfXTl22h1",
    "createdAt": "2025-05-27T20:59:52.118Z",
    "updatedAt": "2025-05-27T20:59:52.118Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 625.3 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/9b15466d-8768-4048-8cc0-85b7f3f919a9 (904.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 904.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/a75e3926-98ad-4e22-8926-39acbacb1758 (914.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 914.0 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/17b0ecd4-92b8-4b7b-93cc-b14879a1f0e9 (928.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 928.3 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/12fed593-afbc-4b10-9c3c-fa478d3bdf0e (947.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 947.5 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/de4ec3d4-4fa2-4842-8627-04f84dad9636 (911.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 20:59:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 911.2 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/161eedeb-4849-4a9c-ba17-86e3d40c7453 (903.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 21:00:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 903.1 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/organizations/f0e981e2-2070-45a1-af7b-0eb7e722710d (912.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 21:00:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 912.2 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/organizations/c65ff94a-3e3b-4fb9-951e-73d437edf456 (875.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk1NzIsImV4cCI6MTc0ODM4MzE3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A_9VNS6ytVmLzhWFL8IPqdT8yJpw0aRVy1Fg5T18mh5woSpeA8PDFJK-GYQ4mHa5pYXrWhIvneM2E680a2aDhdP4hDR62wbbWWreoYmrJbwFHVEWozbTJofrmrV-7-B9xOORRf7d5ziVrbiOCyahTTGhjYq_iRJidiMLns8S9TsNbDUNgF1FocuM8C6OX3HftD2VdVdinekyqIcYEBMUKWx6LIaAwPKm_it7NHdyf-53tVIfAjlY8Svjh2P5m3m-uZ5oT22UA3mMaaCgQTJDt7Ik3mtDrXwa9isHKSTxqWbvnBhLvfxF95i3_qTPP66nId5nvsGgETluTD4c4EyAng"
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
    "date": "Tue, 27 May 2025 21:00:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 875.5 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (293.6ms)</summary>

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
    "etag": "W/\"640-O9nrkS1KbtAxsmvayt0VSDJ2fQM\"",
    "date": "Tue, 27 May 2025 21:00:02 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NjAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk2MDIsImV4cCI6MTc0ODM4MzIwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.W9uFZsXELQm8GK6ToEWXT6na_0bkcVzATewAcbPI2_UwaPKm7XpTNwPlg6RiET9e5pk4xfiCP-LL7jt4YIDGtRuUiYkUx8DsZ7kG1ZCGaFlM_4N8GwHrzBE8Guljob9w4ya-vVTkTxFGKbJHAu3oiZ_mFy5zV9Y_BniBDVnYCWSrk4DKhllfIM-y9rWQc_nbwFGpJ6MdljdguSgWJ3x1JlYK4JA0dtcPYWvavZVjwLM9QkqPG6fuCqWALOsOiRHEyN__Lfbf66oUXITaOwZYGh-fIx2t80KPwiAxjsRiqasDmJiE9u4dWw6SuNEzF8GoFmrcg5yUIbNydtCofgqY3A",
      "refreshToken": "AMf-vBxgNTjFBX2KVGaRktVGjmsWGw4K6UmxRa4IBWINCSia0AQQsgzfl-nHbQdD0Oa3IXQL0BPXsVf7HVvVEG03xVvl1fR7X_qssutqJHqtl-TKpIJpMm_xc7Tp1FpnN6XoURMvrWUwgECKwSVT_8Oe2_7g_QMgCoqCuDzcZvUyt7upR0KycjF3ujnGjW0lt0KAH3KMRbijPTjkmfoYvO0hAGEZ3YhB-f2ZEM9Sp0YcGLsmkafNguKzEji_CJQ-Qj4udnisO97L",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 293.6 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/opo9b4megRVj3RJEzFZpFZG1rx33 (1388.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NjAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk2MDIsImV4cCI6MTc0ODM4MzIwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.W9uFZsXELQm8GK6ToEWXT6na_0bkcVzATewAcbPI2_UwaPKm7XpTNwPlg6RiET9e5pk4xfiCP-LL7jt4YIDGtRuUiYkUx8DsZ7kG1ZCGaFlM_4N8GwHrzBE8Guljob9w4ya-vVTkTxFGKbJHAu3oiZ_mFy5zV9Y_BniBDVnYCWSrk4DKhllfIM-y9rWQc_nbwFGpJ6MdljdguSgWJ3x1JlYK4JA0dtcPYWvavZVjwLM9QkqPG6fuCqWALOsOiRHEyN__Lfbf66oUXITaOwZYGh-fIx2t80KPwiAxjsRiqasDmJiE9u4dWw6SuNEzF8GoFmrcg5yUIbNydtCofgqY3A"
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
    "date": "Tue, 27 May 2025 21:00:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1388.6 ms  

</details>

<details><summary>📡 Request #13: POST http://localhost:3000/api/auth/login (325.1ms)</summary>

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
    "etag": "W/\"640-e67T/LbYEtJ1pZ3ZsSZ43NCNlgs\"",
    "date": "Tue, 27 May 2025 21:00:04 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NjA0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk2MDQsImV4cCI6MTc0ODM4MzIwNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.h3SZMjDC3embC9DBQXPYkxan0oQ37KWnGPqELbdBNaOfQ-w0xR1jzVMpM-6_RTZ3c6ZDyw8VsdS1asDdIcczN_V0jkJpOMIJd-fDppcMdVpVBHwLes_5EUvQqo9E6sH-J_tXsWIWwD4UgKyFp4xHc9-hT5FhlhhUlqMcaI83-YjAr9LNb-DwrmalSQfxNhqSB4ttbEd8Z7Aiky_FGhmnXqdU-ke5JNct1Ym-Jhd88i84nzSEPoh89-iwSyYzs5x0QWQtv7mSumb80G1qiWsNdFfhP1iz-qeIcK9F4HBxoR28rFqy6IxT3uwcDfsjynuFaLIjgP7toI306PUxNvvsHA",
      "refreshToken": "AMf-vBzkFeYuZb8qBM19naNXGn8RSgt5FmH4ywtyix-kTWo-g0cGgKFvwg7wEOuzg0XOo-dRWVDRlpBNeBYDjO-MJXi1e3HE7kqQAK5cZsJ8QsA9AB59B0F75XfsjM6p2MBH_OqbhCoyDQXnk55vTUh-ZcQ9WdtM-d8bAByqB-c0gbsJ51Y3UgGAGmez15pmYMyDPKLQNyuaCrSctwuLU10C4-6AxvWQjSQ6jsUKiki5RpUIJ2lWNLZyTT0QnXHvZd0AsbjOTZbf",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 325.1 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/admin/users/yFHHSyjRnVQXQ6yK35S8kEU8TxG2 (1136.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NjA0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk2MDQsImV4cCI6MTc0ODM4MzIwNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.h3SZMjDC3embC9DBQXPYkxan0oQ37KWnGPqELbdBNaOfQ-w0xR1jzVMpM-6_RTZ3c6ZDyw8VsdS1asDdIcczN_V0jkJpOMIJd-fDppcMdVpVBHwLes_5EUvQqo9E6sH-J_tXsWIWwD4UgKyFp4xHc9-hT5FhlhhUlqMcaI83-YjAr9LNb-DwrmalSQfxNhqSB4ttbEd8Z7Aiky_FGhmnXqdU-ke5JNct1Ym-Jhd88i84nzSEPoh89-iwSyYzs5x0QWQtv7mSumb80G1qiWsNdFfhP1iz-qeIcK9F4HBxoR28rFqy6IxT3uwcDfsjynuFaLIjgP7toI306PUxNvvsHA"
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
    "date": "Tue, 27 May 2025 21:00:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1136.5 ms  

</details>

<details><summary>📡 Request #15: POST http://localhost:3000/api/auth/login (256.2ms)</summary>

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
    "etag": "W/\"640-A4rlTLNkqw7poh/RZSSRWG0EAbY\"",
    "date": "Tue, 27 May 2025 21:00:05 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NjA1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk2MDUsImV4cCI6MTc0ODM4MzIwNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iVdfhqAbqm36i_HQA9xAtL7hDY9AyNjFlC18OUFrLWCfcSeQtCRdTZ7bvc4jhRWMfj29Dp22GZE-hoqKXu6TZJTZ8_wlf2TEt1Kwzhjd1LNogOD3a7CIWUiVPOs_dUDBg3gbpFBNxRgNQoZOmd4Tj3ibMt7lYEcgG7T36JbTQkiEZ_zyIRSEHLnKX-1VsRdkDABN8GTTtrfTc0vea_yGDnhjGbLMXoKU1jVSQrIoULlw3uiKuwKScEiTD2NO2oGolU-4Fj7rNpbYQSYk9eEuKeoGu_avqq57eYMgBLPnElr7a9B7dU517m8lu-F4xQN4eZnzsjKKN-SB_bmm508lsw",
      "refreshToken": "AMf-vBxfwFYvujf1HiwcpujyecJe-_fmv8srh6KTp3bvjGTdeK1EHGM168WSKyoUdfbyocnTT-jhbN70n2Qc9_XuIs2cFgo2ClCrmUl2q17m7rF3cGfGI606itSrb7rpQVlAVGTLiH3ZS7cibAHee0Qy94iet-MoUxclqcPi6PMMdqneULRHiN8ioLAFA2Eb-p28g5IaUPxfcAP5n0HpYSPxhrpc-AtwcRjl2bOEhLAX7kzl3fRTwIi5USeXhk4IXZuC9YdKyu3J",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 256.2 ms  

</details>

<details><summary>📡 Request #16: DELETE http://localhost:3000/api/admin/users/XbciLZ8tRNfGw5OIBFeQfXTl22h1 (1022.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4Mzc5NjA1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNzk2MDUsImV4cCI6MTc0ODM4MzIwNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iVdfhqAbqm36i_HQA9xAtL7hDY9AyNjFlC18OUFrLWCfcSeQtCRdTZ7bvc4jhRWMfj29Dp22GZE-hoqKXu6TZJTZ8_wlf2TEt1Kwzhjd1LNogOD3a7CIWUiVPOs_dUDBg3gbpFBNxRgNQoZOmd4Tj3ibMt7lYEcgG7T36JbTQkiEZ_zyIRSEHLnKX-1VsRdkDABN8GTTtrfTc0vea_yGDnhjGbLMXoKU1jVSQrIoULlw3uiKuwKScEiTD2NO2oGolU-4Fj7rNpbYQSYk9eEuKeoGu_avqq57eYMgBLPnElr7a9B7dU517m8lu-F4xQN4eZnzsjKKN-SB_bmm508lsw"
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
    "date": "Tue, 27 May 2025 21:00:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1022.8 ms  

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
- Total test users created: 3
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
