# E2E Test Report: organizations-tests

**Date:** 6/2/2025  
**Time:** 1:44:42 AM  
**Duration:** 31.23s  
**Tests:** 17 total, 17 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 0.59s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.39s | Regular user should create organization successfully |
| ✅ Should create organization with explicit shelter type | PASSED | 0.57s | Should create organization with explicit shelter type |
| ✅ Should fail without authentication | PASSED | 0.09s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.57s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.51s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.88s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.70s | Should fail without proper permissions |
| ✅ Admin should delete organization successfully | PASSED | 1.42s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.17s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.78s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.39s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.51s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.51s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 0.92s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 1.12s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (580.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Test Organization 1748821452688",
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
    "etag": "W/\"182-yzpChw+yuLBwV977MTe4Hv819Oc\"",
    "date": "Sun, 01 Jun 2025 23:44:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0af16bb1-8085-4370-81d0-657f806be7ef",
    "name": "Test Organization 1748821452688",
    "type": "shelter",
    "description": "Test organization for E2E testing",
    "logo": null,
    "address": "123 Test Street",
    "phone": "+1234567890",
    "email": "test@organization.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:13.153Z",
    "updatedAt": "2025-06-01T23:44:13.153Z"
  }
}
```

**⏱️ Duration:** 580.8 ms  

</details>


---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (389.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ1MiwidXNlcl9pZCI6ImRsMEJZQmdKSGhlNWFHVFNIY0U3UG5RZk9IbTIiLCJzdWIiOiJkbDBCWUJnSkhoZTVhR1RTSGNFN1BuUWZPSG0yIiwiaWF0IjoxNzQ4ODIxNDUyLCJleHAiOjE3NDg4MjUwNTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxNDUxMzk4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTQ1MTM5OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gkRpObmoJKxHai4W4xBpbdfev1tOaICBGLC7sTVNycvAryIgIMmDC7R0rCCtmTGpFekyyw6ZpBqiABZQ-9DCnwkRMTw8F5MjMPojaCjYjrXUuT-XPffH1ey5gsVAXCF7sF3KQtlGGDg8C2XHTlz3mAbQ0N4HhwYxTkImcHbHnTxHsuvwmazkXpyBiclsNjZ_VfhCmFAKas4F3DwqA3Pmo-XlDLoSK-12QZWxmvJ9dEMaezUpYWfnxnW-EEHraNQJEBWHFBkdaCXsyJ4KsJBscxpmmspjhbTY5S3iQ2Wf30Pdx6oZAhMrZH0EriKC3IKbzZjErbz2SMDzRp620_SRDg"
  },
  "data": {
    "name": "User Org 1748821453277",
    "description": "Organization created by regular user",
    "email": "user-org-1748821453277@example.com",
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
    "etag": "W/\"189-zsQcHnMmMZuY7IW+3HnNPfYIKhU\"",
    "date": "Sun, 01 Jun 2025 23:44:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "117bbc18-b6cb-44c6-a539-e927ccff1f8b",
    "name": "User Org 1748821453277",
    "type": "shelter",
    "description": "Organization created by regular user",
    "logo": null,
    "address": "789 User Street",
    "phone": "+1555666777",
    "email": "user-org-1748821453277@example.com",
    "status": "active",
    "createdBy": "dl0BYBgJHhe5aGTSHcE7PnQfOHm2",
    "createdAt": "2025-06-01T23:44:13.601Z",
    "updatedAt": "2025-06-01T23:44:13.601Z"
  }
}
```

**⏱️ Duration:** 389.7 ms  

</details>


---

### Test: Should create organization with explicit shelter type
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (565.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Explicit Shelter 1748821453670",
    "type": "shelter",
    "description": "Shelter with explicit type",
    "address": "456 Shelter Avenue",
    "phone": "+1987654321",
    "email": "explicit-shelter-1748821453670@example.com"
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
    "etag": "W/\"192-EzE598YQxv9e8JyakQ/Rq/TPjJs\"",
    "date": "Sun, 01 Jun 2025 23:44:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a084456c-a35a-4ece-bc3d-e598423c83ff",
    "name": "Explicit Shelter 1748821453670",
    "type": "shelter",
    "description": "Shelter with explicit type",
    "logo": null,
    "address": "456 Shelter Avenue",
    "phone": "+1987654321",
    "email": "explicit-shelter-1748821453670@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:14.174Z",
    "updatedAt": "2025-06-01T23:44:14.174Z"
  }
}
```

**⏱️ Duration:** 565.7 ms  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.09s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (93.9ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:44:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 93.9 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (507.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Get Test Org 1748821454334",
    "description": "Organization for get tests",
    "email": "get-test-org-1748821454334@example.com",
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
    "etag": "W/\"18b-Gj7tCtRFJds+LKZHJykKPD8GP/k\"",
    "date": "Sun, 01 Jun 2025 23:44:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "911bdaeb-bd0d-4cff-90ef-ab96b3af5e2b",
    "name": "Get Test Org 1748821454334",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748821454334@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:14.780Z",
    "updatedAt": "2025-06-01T23:44:14.780Z"
  }
}
```

**⏱️ Duration:** 507.3 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/911bdaeb-bd0d-4cff-90ef-ab96b3af5e2b (10.1ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:44:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 10.1 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (565.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Update Test Org 1748821455932",
    "description": "Organization for update tests",
    "email": "update-test-org-1748821455932@example.com",
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
    "etag": "W/\"19a-fTPb6D6+RBFgAzc95KzA+RRtmec\"",
    "date": "Sun, 01 Jun 2025 23:44:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9c5086be-1549-468b-8e55-5184edbcc26d",
    "name": "Update Test Org 1748821455932",
    "type": "shelter",
    "description": "Organization for update tests",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+1777888999",
    "email": "update-test-org-1748821455932@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:16.435Z",
    "updatedAt": "2025-06-01T23:44:16.435Z"
  }
}
```

**⏱️ Duration:** 565.2 ms  

</details>


---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/911bdaeb-bd0d-4cff-90ef-ab96b3af5e2b (567.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "etag": "W/\"19c-xcK1JBgt6tptZW+3jSnQKOlwrTU\"",
    "date": "Sun, 01 Jun 2025 23:44:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "911bdaeb-bd0d-4cff-90ef-ab96b3af5e2b",
    "name": "Get Test Org 1748821454334",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748821454334@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:14.780Z",
    "updatedAt": "2025-06-01T23:44:14.780Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 567.8 ms  

</details>


---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/invalid-id (503.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:15 GMT",
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

**⏱️ Duration:** 503.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (93.9ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:44:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 93.9 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (507.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Get Test Org 1748821454334",
    "description": "Organization for get tests",
    "email": "get-test-org-1748821454334@example.com",
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
    "etag": "W/\"18b-Gj7tCtRFJds+LKZHJykKPD8GP/k\"",
    "date": "Sun, 01 Jun 2025 23:44:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "911bdaeb-bd0d-4cff-90ef-ab96b3af5e2b",
    "name": "Get Test Org 1748821454334",
    "type": "shelter",
    "description": "Organization for get tests",
    "logo": null,
    "address": "321 Get Test Avenue",
    "phone": "+1888999000",
    "email": "get-test-org-1748821454334@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:14.780Z",
    "updatedAt": "2025-06-01T23:44:14.780Z"
  }
}
```

**⏱️ Duration:** 507.3 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/911bdaeb-bd0d-4cff-90ef-ab96b3af5e2b (10.1ms)</summary>

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
    "date": "Sun, 01 Jun 2025 23:44:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Token no proporcionado"
  }
}
```

**⏱️ Duration:** 10.1 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (565.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Update Test Org 1748821455932",
    "description": "Organization for update tests",
    "email": "update-test-org-1748821455932@example.com",
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
    "etag": "W/\"19a-fTPb6D6+RBFgAzc95KzA+RRtmec\"",
    "date": "Sun, 01 Jun 2025 23:44:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9c5086be-1549-468b-8e55-5184edbcc26d",
    "name": "Update Test Org 1748821455932",
    "type": "shelter",
    "description": "Organization for update tests",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+1777888999",
    "email": "update-test-org-1748821455932@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:16.435Z",
    "updatedAt": "2025-06-01T23:44:16.435Z"
  }
}
```

**⏱️ Duration:** 565.2 ms  

</details>


---

### Test: Admin should update organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/9c5086be-1549-468b-8e55-5184edbcc26d (873.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Updated Update Test Org 1748821455932",
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
    "etag": "W/\"198-8qaAl3LfG35WOzS1SiCzD0Ja2gY\"",
    "date": "Sun, 01 Jun 2025 23:44:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9c5086be-1549-468b-8e55-5184edbcc26d",
    "name": "Updated Update Test Org 1748821455932",
    "type": "shelter",
    "description": "Updated description",
    "logo": null,
    "address": "456 Update Test Boulevard",
    "phone": "+9876543210",
    "email": "update-test-org-1748821455932@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:16.435Z",
    "updatedAt": "2025-06-01T23:44:17.266Z"
  }
}
```

**⏱️ Duration:** 873.0 ms  

</details>


**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 9c5086be-1549-468b-8e55-5184edbcc26d
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748821455932",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNm
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/9c5086be-1549-468b-8e55-5184edbcc26d (704.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ1MiwidXNlcl9pZCI6ImRsMEJZQmdKSGhlNWFHVFNIY0U3UG5RZk9IbTIiLCJzdWIiOiJkbDBCWUJnSkhoZTVhR1RTSGNFN1BuUWZPSG0yIiwiaWF0IjoxNzQ4ODIxNDUyLCJleHAiOjE3NDg4MjUwNTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxNDUxMzk4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTQ1MTM5OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gkRpObmoJKxHai4W4xBpbdfev1tOaICBGLC7sTVNycvAryIgIMmDC7R0rCCtmTGpFekyyw6ZpBqiABZQ-9DCnwkRMTw8F5MjMPojaCjYjrXUuT-XPffH1ey5gsVAXCF7sF3KQtlGGDg8C2XHTlz3mAbQ0N4HhwYxTkImcHbHnTxHsuvwmazkXpyBiclsNjZ_VfhCmFAKas4F3DwqA3Pmo-XlDLoSK-12QZWxmvJ9dEMaezUpYWfnxnW-EEHraNQJEBWHFBkdaCXsyJ4KsJBscxpmmspjhbTY5S3iQ2Wf30Pdx6oZAhMrZH0EriKC3IKbzZjErbz2SMDzRp620_SRDg"
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
    "date": "Sun, 01 Jun 2025 23:44:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 704.2 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (451.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Delete Test Org 1748821458088",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748821458088@example.com",
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
    "etag": "W/\"197-vE60zba2ERFATDtewnEAg9+tEyg\"",
    "date": "Sun, 01 Jun 2025 23:44:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5a9d0830-b41e-4531-93d2-44e2abaace7a",
    "name": "Delete Test Org 1748821458088",
    "type": "shelter",
    "description": "Organization for delete tests",
    "logo": null,
    "address": "789 Delete Test Street",
    "phone": "+1333444555",
    "email": "delete-test-org-1748821458088@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:18.479Z",
    "updatedAt": "2025-06-01T23:44:18.479Z"
  }
}
```

**⏱️ Duration:** 451.0 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (486.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "No Delete Perm Org 1748821459966",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748821459966@example.com",
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
    "etag": "W/\"1a2-6+QxgetjC2krgFu+Z9eAC4418yg\"",
    "date": "Sun, 01 Jun 2025 23:44:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7d02ea49-8c05-410f-8b3b-90a861cc7e05",
    "name": "No Delete Perm Org 1748821459966",
    "type": "shelter",
    "description": "Organization for permission test",
    "logo": null,
    "address": "999 Permission Test Lane",
    "phone": "+1666777888",
    "email": "no-delete-perm-org-1748821459966@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:20.362Z",
    "updatedAt": "2025-06-01T23:44:20.362Z"
  }
}
```

**⏱️ Duration:** 486.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/7d02ea49-8c05-410f-8b3b-90a861cc7e05 (682.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ1MiwidXNlcl9pZCI6ImRsMEJZQmdKSGhlNWFHVFNIY0U3UG5RZk9IbTIiLCJzdWIiOiJkbDBCWUJnSkhoZTVhR1RTSGNFN1BuUWZPSG0yIiwiaWF0IjoxNzQ4ODIxNDUyLCJleHAiOjE3NDg4MjUwNTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxNDUxMzk4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTQ1MTM5OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gkRpObmoJKxHai4W4xBpbdfev1tOaICBGLC7sTVNycvAryIgIMmDC7R0rCCtmTGpFekyyw6ZpBqiABZQ-9DCnwkRMTw8F5MjMPojaCjYjrXUuT-XPffH1ey5gsVAXCF7sF3KQtlGGDg8C2XHTlz3mAbQ0N4HhwYxTkImcHbHnTxHsuvwmazkXpyBiclsNjZ_VfhCmFAKas4F3DwqA3Pmo-XlDLoSK-12QZWxmvJ9dEMaezUpYWfnxnW-EEHraNQJEBWHFBkdaCXsyJ4KsJBscxpmmspjhbTY5S3iQ2Wf30Pdx6oZAhMrZH0EriKC3IKbzZjErbz2SMDzRp620_SRDg"
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
    "date": "Sun, 01 Jun 2025 23:44:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 682.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should delete organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/organizations/5a9d0830-b41e-4531-93d2-44e2abaace7a (903.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:19 GMT",
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

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/5a9d0830-b41e-4531-93d2-44e2abaace7a (519.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 519.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.17s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/9c5086be-1549-468b-8e55-5184edbcc26d (704.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ1MiwidXNlcl9pZCI6ImRsMEJZQmdKSGhlNWFHVFNIY0U3UG5RZk9IbTIiLCJzdWIiOiJkbDBCWUJnSkhoZTVhR1RTSGNFN1BuUWZPSG0yIiwiaWF0IjoxNzQ4ODIxNDUyLCJleHAiOjE3NDg4MjUwNTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxNDUxMzk4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTQ1MTM5OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gkRpObmoJKxHai4W4xBpbdfev1tOaICBGLC7sTVNycvAryIgIMmDC7R0rCCtmTGpFekyyw6ZpBqiABZQ-9DCnwkRMTw8F5MjMPojaCjYjrXUuT-XPffH1ey5gsVAXCF7sF3KQtlGGDg8C2XHTlz3mAbQ0N4HhwYxTkImcHbHnTxHsuvwmazkXpyBiclsNjZ_VfhCmFAKas4F3DwqA3Pmo-XlDLoSK-12QZWxmvJ9dEMaezUpYWfnxnW-EEHraNQJEBWHFBkdaCXsyJ4KsJBscxpmmspjhbTY5S3iQ2Wf30Pdx6oZAhMrZH0EriKC3IKbzZjErbz2SMDzRp620_SRDg"
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
    "date": "Sun, 01 Jun 2025 23:44:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to update this organizations"
  }
}
```

**⏱️ Duration:** 704.2 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (451.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Delete Test Org 1748821458088",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1748821458088@example.com",
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
    "etag": "W/\"197-vE60zba2ERFATDtewnEAg9+tEyg\"",
    "date": "Sun, 01 Jun 2025 23:44:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5a9d0830-b41e-4531-93d2-44e2abaace7a",
    "name": "Delete Test Org 1748821458088",
    "type": "shelter",
    "description": "Organization for delete tests",
    "logo": null,
    "address": "789 Delete Test Street",
    "phone": "+1333444555",
    "email": "delete-test-org-1748821458088@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:18.479Z",
    "updatedAt": "2025-06-01T23:44:18.479Z"
  }
}
```

**⏱️ Duration:** 451.0 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (486.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "No Delete Perm Org 1748821459966",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1748821459966@example.com",
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
    "etag": "W/\"1a2-6+QxgetjC2krgFu+Z9eAC4418yg\"",
    "date": "Sun, 01 Jun 2025 23:44:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "7d02ea49-8c05-410f-8b3b-90a861cc7e05",
    "name": "No Delete Perm Org 1748821459966",
    "type": "shelter",
    "description": "Organization for permission test",
    "logo": null,
    "address": "999 Permission Test Lane",
    "phone": "+1666777888",
    "email": "no-delete-perm-org-1748821459966@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:20.362Z",
    "updatedAt": "2025-06-01T23:44:20.362Z"
  }
}
```

**⏱️ Duration:** 486.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/7d02ea49-8c05-410f-8b3b-90a861cc7e05 (682.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ1MiwidXNlcl9pZCI6ImRsMEJZQmdKSGhlNWFHVFNIY0U3UG5RZk9IbTIiLCJzdWIiOiJkbDBCWUJnSkhoZTVhR1RTSGNFN1BuUWZPSG0yIiwiaWF0IjoxNzQ4ODIxNDUyLCJleHAiOjE3NDg4MjUwNTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxNDUxMzk4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTQ1MTM5OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gkRpObmoJKxHai4W4xBpbdfev1tOaICBGLC7sTVNycvAryIgIMmDC7R0rCCtmTGpFekyyw6ZpBqiABZQ-9DCnwkRMTw8F5MjMPojaCjYjrXUuT-XPffH1ey5gsVAXCF7sF3KQtlGGDg8C2XHTlz3mAbQ0N4HhwYxTkImcHbHnTxHsuvwmazkXpyBiclsNjZ_VfhCmFAKas4F3DwqA3Pmo-XlDLoSK-12QZWxmvJ9dEMaezUpYWfnxnW-EEHraNQJEBWHFBkdaCXsyJ4KsJBscxpmmspjhbTY5S3iQ2Wf30Pdx6oZAhMrZH0EriKC3IKbzZjErbz2SMDzRp620_SRDg"
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
    "date": "Sun, 01 Jun 2025 23:44:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to delete this organizations"
  }
}
```

**⏱️ Duration:** 682.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.78s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (781.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "etag": "W/\"b714-CiijXN9BluyVBNYp7uq+diOAMhY\"",
    "date": "Sun, 01 Jun 2025 23:44:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "0af16bb1-8085-4370-81d0-657f806be7ef",
      "name": "Test Organization 1748821452688",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:44:13.153Z",
      "updatedAt": "2025-06-01T23:44:13.153Z",
      "memberships": []
    },
    {
      "id": "117bbc18-b6cb-44c6-a539-e927ccff1f8b",
      "name": "User Org 1748821453277",
      "type": "shelter",
      "description": "Organization created by regular user",
      "logo": null,
      "address": "789 User Street",
      "phone": "+1555666777",
      "email": "user-org-1748821453277@example.com",
      "status": "active",
      "createdBy": "dl0BYBgJHhe5aGTSHcE7PnQfOHm2",
      "createdAt": "2025-06-01T23:44:13.601Z",
      "updatedAt": "2025-06-01T23:44:13.601Z",
      "memberships": []
    },
    {
      "id": "a084456c-a35a-4ece-bc3d-e598423c83ff",
      "name": "Explicit Shelter 1748821453670",
      "type": "shelter",
      "description": "Shelter with explicit type",
      "logo": null,
      "address": "456 Shelter Avenue",
      "phone": "+1987654321",
      "email": "explicit-shelter-1748821453670@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:44:14.174Z",
      "updatedAt": "2025-06-01T23:44:14.174Z",
      "memberships": []
    },
    {
      "id": "911bdaeb-bd0d-4cff-90ef-ab96b3af5e2b",
      "name": "Get Test Org 1748821454334",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": "321 Get Test Avenue",
      "phone": "+1888999000",
      "email": "get-test-org-1748821454334@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:44:14.780Z",
      "updatedAt": "2025-06-01T23:44:14.780Z",
      "memberships": []
    },
    {
      "id": "9c5086be-1549-468b-8e55-5184edbcc26d",
      "name": "Updated Update Test Org 1748821455932",
      "type": "shelter",
      "description": "Updated description",
      "logo": null,
      "address": "456 Update Test Boulevard",
      "phone": "+9876543210",
      "email": "update-test-org-1748821455932@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:44:16.435Z",
      "updatedAt": "2025-06-01T23:44:17.266Z",
      "memberships": []
    },
    {
      "id": "7d02ea49-8c05-410f-8b3b-90a861cc7e05",
      "name": "No Delete Perm Org 1748821459966",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": "999 Permission Test Lane",
      "phone": "+1666777888",
      "email": "no-delete-perm-org-1748821459966@example.com",
      "status": "active",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-01T23:44:20.362Z",
      "updatedAt": "2025-06-01T23:44:20.362Z",
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

**⏱️ Duration:** 781.3 ms  

</details>


---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (393.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ1MiwidXNlcl9pZCI6ImRsMEJZQmdKSGhlNWFHVFNIY0U3UG5RZk9IbTIiLCJzdWIiOiJkbDBCWUJnSkhoZTVhR1RTSGNFN1BuUWZPSG0yIiwiaWF0IjoxNzQ4ODIxNDUyLCJleHAiOjE3NDg4MjUwNTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxNDUxMzk4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTQ1MTM5OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gkRpObmoJKxHai4W4xBpbdfev1tOaICBGLC7sTVNycvAryIgIMmDC7R0rCCtmTGpFekyyw6ZpBqiABZQ-9DCnwkRMTw8F5MjMPojaCjYjrXUuT-XPffH1ey5gsVAXCF7sF3KQtlGGDg8C2XHTlz3mAbQ0N4HhwYxTkImcHbHnTxHsuvwmazkXpyBiclsNjZ_VfhCmFAKas4F3DwqA3Pmo-XlDLoSK-12QZWxmvJ9dEMaezUpYWfnxnW-EEHraNQJEBWHFBkdaCXsyJ4KsJBscxpmmspjhbTY5S3iQ2Wf30Pdx6oZAhMrZH0EriKC3IKbzZjErbz2SMDzRp620_SRDg"
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
    "date": "Sun, 01 Jun 2025 23:44:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 393.5 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (461.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
  },
  "data": {
    "name": "Members Test Org 1748821462316",
    "description": "Organization for members tests",
    "email": "members-test-org-1748821462316@example.com",
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
    "etag": "W/\"199-OoDQoryl15FHonpQln7eqt8Lud0\"",
    "date": "Sun, 01 Jun 2025 23:44:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c4fe6134-c42f-4b51-a8c2-d26cbf2a281f",
    "name": "Members Test Org 1748821462316",
    "type": "shelter",
    "description": "Organization for members tests",
    "logo": null,
    "address": "111 Members Test Road",
    "phone": "+1222333444",
    "email": "members-test-org-1748821462316@example.com",
    "status": "active",
    "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "createdAt": "2025-06-01T23:44:22.716Z",
    "updatedAt": "2025-06-01T23:44:22.716Z"
  }
}
```

**⏱️ Duration:** 461.6 ms  

</details>


---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/c4fe6134-c42f-4b51-a8c2-d26cbf2a281f/members (509.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 509.9 ms  

</details>


---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/c4fe6134-c42f-4b51-a8c2-d26cbf2a281f/members (512.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ1MiwidXNlcl9pZCI6ImRsMEJZQmdKSGhlNWFHVFNIY0U3UG5RZk9IbTIiLCJzdWIiOiJkbDBCWUJnSkhoZTVhR1RTSGNFN1BuUWZPSG0yIiwiaWF0IjoxNzQ4ODIxNDUyLCJleHAiOjE3NDg4MjUwNTIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ4ODIxNDUxMzk4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0ODgyMTQ1MTM5OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gkRpObmoJKxHai4W4xBpbdfev1tOaICBGLC7sTVNycvAryIgIMmDC7R0rCCtmTGpFekyyw6ZpBqiABZQ-9DCnwkRMTw8F5MjMPojaCjYjrXUuT-XPffH1ey5gsVAXCF7sF3KQtlGGDg8C2XHTlz3mAbQ0N4HhwYxTkImcHbHnTxHsuvwmazkXpyBiclsNjZ_VfhCmFAKas4F3DwqA3Pmo-XlDLoSK-12QZWxmvJ9dEMaezUpYWfnxnW-EEHraNQJEBWHFBkdaCXsyJ4KsJBscxpmmspjhbTY5S3iQ2Wf30Pdx6oZAhMrZH0EriKC3IKbzZjErbz2SMDzRp620_SRDg"
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
    "date": "Sun, 01 Jun 2025 23:44:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. You must be a member to view organization members."
  }
}
```

**⏱️ Duration:** 512.7 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (825.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748821463804@example.com",
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
    "etag": "W/\"5ae-7BvSnlbx8+WGawZV8cTq5cHBvSY\"",
    "date": "Sun, 01 Jun 2025 23:44:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "QSNpu6naKoQbU7dGIBA5exZLphZ2",
      "email": "org1-admin-1748821463804@example.com",
      "name": "Org1 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ2NCwidXNlcl9pZCI6IlFTTnB1Nm5hS29RYlU3ZEdJQkE1ZXhaTHBoWjIiLCJzdWIiOiJRU05wdTZuYUtvUWJVN2RHSUJBNWV4WkxwaFoyIiwiaWF0IjoxNzQ4ODIxNDY0LCJleHAiOjE3NDg4MjUwNjQsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxNDYzODA0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTQ2MzgwNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DbNMkwlS0iZ82Bz9VR9mXjCo3RQyHey8KKqV4IZNC7uE_uQ2MBrDCJSqfKlNBIM9FAnzQBmakTnUj6W_eJLHz6X6SgKngiv7jPOrA9vnKRASlPikw_QX1I4whw28_Bu5BN7jB7BYB3_OkpHYcN_QrfyRW2PYONIssLr7GnKpOpzWE8-3kyu8W8z-Px2ZGmcf-VJQkWePnfxZbcANam9DuafovUwPiDI4mgatYHSxta5fsCVU3nA0ziw9HtwcWyWAlNLMdiokyOqJT4gZ0JVt31LL_GHo1AUaDhx8QtkDrGyxhByvhMKbq4zqda6Ky05HOOpoMwL45fJvOG_qrLbqnQ",
      "refreshToken": "AMf-vBzn7v6SUyj953ZarQPYuRN_emmcVqA4IXsQBQ0pbd1DA1mScUWTrfpB8YJYV6L8cyb0AhcCWQ57mTP7yVIXxo85-ld-snQrBj2G2s2OgAL6OhQdudC8eiBjpyuPfLFHY6eew43hCVzd9DoU_59WEC-7sUz13mgpzP7YTpdFJgFN1_RbPjofUOnwlk7I5Udg0CNrgqL_gPYTJInvNN5X7yLAqpg2zmblte_6mvBMtUM3iQuo7_I",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 825.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (901.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748821464629@example.com",
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
    "etag": "W/\"5ae-zY25It2E22Sf8FEcW1sxTcSDzRc\"",
    "date": "Sun, 01 Jun 2025 23:44:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "nyE2vO5GiBfwIUFJfrAGCDB8tLv2",
      "email": "org2-admin-1748821464629@example.com",
      "name": "Org2 Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ2NCwidXNlcl9pZCI6Im55RTJ2TzVHaUJmd0lVRkpmckFHQ0RCOHRMdjIiLCJzdWIiOiJueUUydk81R2lCZndJVUZKZnJBR0NEQjh0THYyIiwiaWF0IjoxNzQ4ODIxNDY0LCJleHAiOjE3NDg4MjUwNjQsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIxNDY0NjI5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMTQ2NDYyOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GW1DQoe4ROwsqBol_RWUYwYOwkWR_tr2yebu9WgsAAphgyXbLBvuBodGTqgjZ9Xy_YQInYe6vK_2yDDDFDcWpMfhnQvWPCZiCOfJ7KUZTqGIhSr29surXtyu4pW10fnvB0K5spDBcRoOB_2f8uaZTAiOFXJG2v60j51tgOOt_corsAkJbBIcYClYzQhCs1kPJy_0Y__LLPPtmiFD9B5VUClVxj4Kx2bnwRJEGl_sh72rBRGqQlZ7uJ2ae4DQJ5YmcV-uwHYyHhaArgzVg2f7lvUSwfzYU9DuAlujjvBFgVD6SrNzW84-sRkTEdZvzzOmFVPjiqloyM--QHyDP8akyA",
      "refreshToken": "AMf-vBxE5vf7e09UGlA6WCNTfUYA6Nb7V3C9YZEZlp9AAXA-44iof4q7yCdoZ1BmoammpA9O26zLX0hXfm6v_f2GiFhsZtccSFCU7IjYjaVH73P9ILUmucXuGxeJDonF4GYpP8G19gd2vWazWuLgPzAa2H605xcb2V2fVZisV1s8ZgT-Bz6ADfSy7l_LJFFCdZ6Mgc4CK_8XA9gPT1VTYgdqQIdTETUX3ewNFvMk6eqF5-qLiNQWK6Q",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 901.1 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (258.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1748821463804@example.com",
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
    "etag": "W/\"582-3crJJ5vM3cgxQKpkzP8A4u3Kzdw\"",
    "date": "Sun, 01 Jun 2025 23:44:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "QSNpu6naKoQbU7dGIBA5exZLphZ2",
      "email": "org1-admin-1748821463804@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ2NSwidXNlcl9pZCI6IlFTTnB1Nm5hS29RYlU3ZEdJQkE1ZXhaTHBoWjIiLCJzdWIiOiJRU05wdTZuYUtvUWJVN2RHSUJBNWV4WkxwaFoyIiwiaWF0IjoxNzQ4ODIxNDY1LCJleHAiOjE3NDg4MjUwNjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxNDYzODA0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTQ2MzgwNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XraJn3Zb_pfORwQBQhN8Ts7C1htqsZIl45Xi8EroLt60xy-p0tHWCLkjt6_ZkTX6zejF8Y9QGprY3bQztOKEu37KyL1NtfCY3zdqi2EVegyz6hRi3OMw8MKGXjUklxGL0CVMenfocNoUR-FQtBgCisyU2p1YbJMFMRNC-_lxBIrod3GmCfWLRX4dReCcJ5grL9GY3N4Ad_sqxdT4w33nlzWO4a1LRgQUOUz-sSYeOLRgaJ5o6LNQuEZ_CeKd8nQPkH5mcfbD4h1eKRyccbaqIyRVfurunDoQapbuHj6a9_dvDeUOyoFi8hrov6vTSHfhnK206AMJdRB7LaXe9ePYjQ",
      "refreshToken": "AMf-vBwtkkO4bBLWu1CtIUOXoAswg7br-cvA7q-ta3J_fkFahEdF5G2I2-izw8wQB4uHH9xV3MSw7X8FO7HMEeihDsDKblmXu4PbiWKWOFxRTyr4OjzkG9uiQVX0G8KzVCMLCDKt3l05jdqVKDtW1UsKQ1KIFM0F7f0DbpwDuHfTstZCnc0rL3prp821hkkMmHUfG_6AfmHovPsLntvbsKwKC9EEy67y9G0UBV6CHciyjA_SH5dwuKs",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 258.6 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (308.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1748821464629@example.com",
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
    "etag": "W/\"582-jS61xqJL2/5PbsHKaQOE6A1O+UE\"",
    "date": "Sun, 01 Jun 2025 23:44:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "nyE2vO5GiBfwIUFJfrAGCDB8tLv2",
      "email": "org2-admin-1748821464629@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ2NSwidXNlcl9pZCI6Im55RTJ2TzVHaUJmd0lVRkpmckFHQ0RCOHRMdjIiLCJzdWIiOiJueUUydk81R2lCZndJVUZKZnJBR0NEQjh0THYyIiwiaWF0IjoxNzQ4ODIxNDY1LCJleHAiOjE3NDg4MjUwNjUsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIxNDY0NjI5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMTQ2NDYyOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nIOor9nMdyV_ixngxdaFfeo_de_0vOfzs9WLz_BgwqcalWJxjp18oloWuVxYd_sQmrVh8z0OWQ2LnlqhnrgaWPSf1Sgxe7VcSGGSHR1RUBIrFB6sAenTKc7O3MOmMERW4CPGD9hGwxAlpb3nMjez5SL3FJZCrl3HHvfdHSwW1ndu05XYUrQL0ux6p3iF-0PuvAAO68hZNuK4au6pNcZBhJHGFVua1nlp6qihU31-NYcwC_e3M9k5BBiu7iQ4b7_GdD6oXyTr3LkTsIXzOR_NlHmwlwglmeCrBRu93QkG1hxwAEr7fR3BkK0hsPCvPThRe8WYJkVpokDwDkAqPilV4g",
      "refreshToken": "AMf-vBwvOgqUz-UEmfaeXqv7uIjrGeup587OtDlyAhbvGz3f0WKJWOE5MsBN_pACEABjYcEZMXudGbwPp83zLELRWCbGw_ysPxRHeR52mJ_6EQWYRJnNztG9jIg5-0hkmKFXFit8uASGAb7OpT-tzItSVcrb71ZHaocl-SRsBV4itL3algbCqlIH5gVW5K7AQrxdpG-wNm5eZkKKfZ5sKYru1wbK-Eeh4q1SXzbYpX2m7t-nOzFpd5Y",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 308.3 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/organizations (407.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ2NSwidXNlcl9pZCI6IlFTTnB1Nm5hS29RYlU3ZEdJQkE1ZXhaTHBoWjIiLCJzdWIiOiJRU05wdTZuYUtvUWJVN2RHSUJBNWV4WkxwaFoyIiwiaWF0IjoxNzQ4ODIxNDY1LCJleHAiOjE3NDg4MjUwNjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxNDYzODA0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTQ2MzgwNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XraJn3Zb_pfORwQBQhN8Ts7C1htqsZIl45Xi8EroLt60xy-p0tHWCLkjt6_ZkTX6zejF8Y9QGprY3bQztOKEu37KyL1NtfCY3zdqi2EVegyz6hRi3OMw8MKGXjUklxGL0CVMenfocNoUR-FQtBgCisyU2p1YbJMFMRNC-_lxBIrod3GmCfWLRX4dReCcJ5grL9GY3N4Ad_sqxdT4w33nlzWO4a1LRgQUOUz-sSYeOLRgaJ5o6LNQuEZ_CeKd8nQPkH5mcfbD4h1eKRyccbaqIyRVfurunDoQapbuHj6a9_dvDeUOyoFi8hrov6vTSHfhnK206AMJdRB7LaXe9ePYjQ"
  },
  "data": {
    "name": "Org1 1748821466097",
    "description": "First organization for multitenant test",
    "email": "org1-1748821466097@example.com",
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
    "etag": "W/\"184-oz239kKPDYKMRH7hHxEamEYDm5U\"",
    "date": "Sun, 01 Jun 2025 23:44:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "201b7548-74aa-4d7a-83cf-a980a66f4ee5",
    "name": "Org1 1748821466097",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748821466097@example.com",
    "status": "active",
    "createdBy": "QSNpu6naKoQbU7dGIBA5exZLphZ2",
    "createdAt": "2025-06-01T23:44:26.439Z",
    "updatedAt": "2025-06-01T23:44:26.439Z"
  }
}
```

**⏱️ Duration:** 407.0 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/organizations (527.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ2NSwidXNlcl9pZCI6Im55RTJ2TzVHaUJmd0lVRkpmckFHQ0RCOHRMdjIiLCJzdWIiOiJueUUydk81R2lCZndJVUZKZnJBR0NEQjh0THYyIiwiaWF0IjoxNzQ4ODIxNDY1LCJleHAiOjE3NDg4MjUwNjUsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ4ODIxNDY0NjI5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0ODgyMTQ2NDYyOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nIOor9nMdyV_ixngxdaFfeo_de_0vOfzs9WLz_BgwqcalWJxjp18oloWuVxYd_sQmrVh8z0OWQ2LnlqhnrgaWPSf1Sgxe7VcSGGSHR1RUBIrFB6sAenTKc7O3MOmMERW4CPGD9hGwxAlpb3nMjez5SL3FJZCrl3HHvfdHSwW1ndu05XYUrQL0ux6p3iF-0PuvAAO68hZNuK4au6pNcZBhJHGFVua1nlp6qihU31-NYcwC_e3M9k5BBiu7iQ4b7_GdD6oXyTr3LkTsIXzOR_NlHmwlwglmeCrBRu93QkG1hxwAEr7fR3BkK0hsPCvPThRe8WYJkVpokDwDkAqPilV4g"
  },
  "data": {
    "name": "Org2 1748821466505",
    "description": "Second organization for multitenant test",
    "email": "org2-1748821466505@example.com",
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
    "etag": "W/\"185-LoSgLtg14F8RP4X0+BEKdQNyR/c\"",
    "date": "Sun, 01 Jun 2025 23:44:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "18ba2ef3-6cb3-46c2-b5ab-16784503d068",
    "name": "Org2 1748821466505",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748821466505@example.com",
    "status": "active",
    "createdBy": "nyE2vO5GiBfwIUFJfrAGCDB8tLv2",
    "createdAt": "2025-06-01T23:44:26.972Z",
    "updatedAt": "2025-06-01T23:44:26.972Z"
  }
}
```

**⏱️ Duration:** 527.6 ms  

</details>


---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 0.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/201b7548-74aa-4d7a-83cf-a980a66f4ee5 (454.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ2NSwidXNlcl9pZCI6IlFTTnB1Nm5hS29RYlU3ZEdJQkE1ZXhaTHBoWjIiLCJzdWIiOiJRU05wdTZuYUtvUWJVN2RHSUJBNWV4WkxwaFoyIiwiaWF0IjoxNzQ4ODIxNDY1LCJleHAiOjE3NDg4MjUwNjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxNDYzODA0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTQ2MzgwNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XraJn3Zb_pfORwQBQhN8Ts7C1htqsZIl45Xi8EroLt60xy-p0tHWCLkjt6_ZkTX6zejF8Y9QGprY3bQztOKEu37KyL1NtfCY3zdqi2EVegyz6hRi3OMw8MKGXjUklxGL0CVMenfocNoUR-FQtBgCisyU2p1YbJMFMRNC-_lxBIrod3GmCfWLRX4dReCcJ5grL9GY3N4Ad_sqxdT4w33nlzWO4a1LRgQUOUz-sSYeOLRgaJ5o6LNQuEZ_CeKd8nQPkH5mcfbD4h1eKRyccbaqIyRVfurunDoQapbuHj6a9_dvDeUOyoFi8hrov6vTSHfhnK206AMJdRB7LaXe9ePYjQ"
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
    "etag": "W/\"195-iHZ5k19o/Ll+C40/6OHV+Demmec\"",
    "date": "Sun, 01 Jun 2025 23:44:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "201b7548-74aa-4d7a-83cf-a980a66f4ee5",
    "name": "Org1 1748821466097",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748821466097@example.com",
    "status": "active",
    "createdBy": "QSNpu6naKoQbU7dGIBA5exZLphZ2",
    "createdAt": "2025-06-01T23:44:26.439Z",
    "updatedAt": "2025-06-01T23:44:26.439Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 454.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/18ba2ef3-6cb3-46c2-b5ab-16784503d068 (464.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTQ2NSwidXNlcl9pZCI6IlFTTnB1Nm5hS29RYlU3ZEdJQkE1ZXhaTHBoWjIiLCJzdWIiOiJRU05wdTZuYUtvUWJVN2RHSUJBNWV4WkxwaFoyIiwiaWF0IjoxNzQ4ODIxNDY1LCJleHAiOjE3NDg4MjUwNjUsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ4ODIxNDYzODA0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0ODgyMTQ2MzgwNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XraJn3Zb_pfORwQBQhN8Ts7C1htqsZIl45Xi8EroLt60xy-p0tHWCLkjt6_ZkTX6zejF8Y9QGprY3bQztOKEu37KyL1NtfCY3zdqi2EVegyz6hRi3OMw8MKGXjUklxGL0CVMenfocNoUR-FQtBgCisyU2p1YbJMFMRNC-_lxBIrod3GmCfWLRX4dReCcJ5grL9GY3N4Ad_sqxdT4w33nlzWO4a1LRgQUOUz-sSYeOLRgaJ5o6LNQuEZ_CeKd8nQPkH5mcfbD4h1eKRyccbaqIyRVfurunDoQapbuHj6a9_dvDeUOyoFi8hrov6vTSHfhnK206AMJdRB7LaXe9ePYjQ"
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
    "etag": "W/\"196-kPmLJIP6QSb1ATn5gaI2BusCI9U\"",
    "date": "Sun, 01 Jun 2025 23:44:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "18ba2ef3-6cb3-46c2-b5ab-16784503d068",
    "name": "Org2 1748821466505",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748821466505@example.com",
    "status": "active",
    "createdBy": "nyE2vO5GiBfwIUFJfrAGCDB8tLv2",
    "createdAt": "2025-06-01T23:44:26.972Z",
    "updatedAt": "2025-06-01T23:44:26.972Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 464.8 ms  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.12s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/201b7548-74aa-4d7a-83cf-a980a66f4ee5 (615.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "etag": "W/\"195-iHZ5k19o/Ll+C40/6OHV+Demmec\"",
    "date": "Sun, 01 Jun 2025 23:44:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "201b7548-74aa-4d7a-83cf-a980a66f4ee5",
    "name": "Org1 1748821466097",
    "type": "shelter",
    "description": "First organization for multitenant test",
    "logo": null,
    "address": "123 Org1 Street",
    "phone": "+1111222333",
    "email": "org1-1748821466097@example.com",
    "status": "active",
    "createdBy": "QSNpu6naKoQbU7dGIBA5exZLphZ2",
    "createdAt": "2025-06-01T23:44:26.439Z",
    "updatedAt": "2025-06-01T23:44:26.439Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 615.6 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/organizations/18ba2ef3-6cb3-46c2-b5ab-16784503d068 (503.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "etag": "W/\"196-kPmLJIP6QSb1ATn5gaI2BusCI9U\"",
    "date": "Sun, 01 Jun 2025 23:44:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "18ba2ef3-6cb3-46c2-b5ab-16784503d068",
    "name": "Org2 1748821466505",
    "type": "shelter",
    "description": "Second organization for multitenant test",
    "logo": null,
    "address": "456 Org2 Avenue",
    "phone": "+1444555666",
    "email": "org2-1748821466505@example.com",
    "status": "active",
    "createdBy": "nyE2vO5GiBfwIUFJfrAGCDB8tLv2",
    "createdAt": "2025-06-01T23:44:26.972Z",
    "updatedAt": "2025-06-01T23:44:26.972Z",
    "memberships": []
  }
}
```

**⏱️ Duration:** 503.2 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/0af16bb1-8085-4370-81d0-657f806be7ef (959.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 959.7 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/117bbc18-b6cb-44c6-a539-e927ccff1f8b (911.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 911.9 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/a084456c-a35a-4ece-bc3d-e598423c83ff (903.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 903.0 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/911bdaeb-bd0d-4cff-90ef-ab96b3af5e2b (986.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 986.8 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/9c5086be-1549-468b-8e55-5184edbcc26d (901.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 901.2 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/organizations/7d02ea49-8c05-410f-8b3b-90a861cc7e05 (997.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 997.3 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/organizations/c4fe6134-c42f-4b51-a8c2-d26cbf2a281f (883.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 883.4 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/organizations/201b7548-74aa-4d7a-83cf-a980a66f4ee5 (894.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 894.0 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/18ba2ef3-6cb3-46c2-b5ab-16784503d068 (900.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NTEsImV4cCI6MTc0ODgyNTA1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pleMdVba068K11MQxs7TKAKsVdpd6T6xA29HTRLohsNYach9GTAmCsKP2Bgs-sCxgceiyg-luhhbhzE4BPVDxFrilNDU4R87cES7cBHo7w8LFJaAY-UG0Z9itw1f9CfT9S80mNoXGzLvm23YM8P0FkF3MGbjZ15Ykoz_-mHxoOt3dvcaeTOzvnjI5s_4_RsCiltjP_5JbEkVdaTdcccPjkmWH8W467S10bZoYshfJBDmtACzrg0_kseseqV6zfyVN3QHnjPVS7-p2Y8Xa_yk9DZ13y7teMUurEUGIENMi8DRJZW7nBHOBMU-rUMhooZ5YMnZH8gN2qJE0se4wEThxQ"
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
    "date": "Sun, 01 Jun 2025 23:44:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 900.6 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (348.3ms)</summary>

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
    "etag": "W/\"640-b0QzbawGPxZH7U1HMcUEfBfa7cU\"",
    "date": "Sun, 01 Jun 2025 23:44:37 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDc3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NzcsImV4cCI6MTc0ODgyNTA3NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.a1wpClL793yIxK5H9npCzNzcRTwp62yp3-DpNZrhLXxHTK84UYr3GpE16AYhCcVIL5tcpJD0yvDjUc26E0msRyBEiCoZDmNAwSkq8bfFBrEXYJ5Qaf9B5c2qYySa6BDg6RxZbLBk0Zc5_OvBHKsWecD_XYI8oQfOSBv0B-lX38BewpRFOw_4DL78--w1rjIfwJyO6ukHtdBjZXZv2f_Ct427DAqhgIaBR0_s9L1XfA7mnv9DBufEHZhAIpI_kEB8RxUlWcsxNXJyMQYBJAFS_Y_1GeWfD3l0pNHz1HNbvWeqpb9qSZf7fP4vFI8SpnA9ZhwijAikReAFgT1CjYzu_Q",
      "refreshToken": "AMf-vBw0L4G6Gt-yx98oBCmXMNsjSMm_-gRQ9xh7pWV70dDux0yfmYLJ160qeChqLrps-9T-lnCly-cgrUbMWX1xNS4wIY9IoLxOdzFTOCxxFqVZUun7tX-RqoF-UWHxslqbDnnvZBxaI1n3u_rB7pb9KNdMEH5mSQ6C5LBxX_ZodWhOap5Jk77pNgzJlvwEMvelGg2itBm8xpivtSs528LYYieYznRJrpVM_0s2sVbvTkUV8i_UsTeyQ5fBO7s3CV3PajjL1mVC",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 348.3 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/dl0BYBgJHhe5aGTSHcE7PnQfOHm2 (1246.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDc3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NzcsImV4cCI6MTc0ODgyNTA3NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.a1wpClL793yIxK5H9npCzNzcRTwp62yp3-DpNZrhLXxHTK84UYr3GpE16AYhCcVIL5tcpJD0yvDjUc26E0msRyBEiCoZDmNAwSkq8bfFBrEXYJ5Qaf9B5c2qYySa6BDg6RxZbLBk0Zc5_OvBHKsWecD_XYI8oQfOSBv0B-lX38BewpRFOw_4DL78--w1rjIfwJyO6ukHtdBjZXZv2f_Ct427DAqhgIaBR0_s9L1XfA7mnv9DBufEHZhAIpI_kEB8RxUlWcsxNXJyMQYBJAFS_Y_1GeWfD3l0pNHz1HNbvWeqpb9qSZf7fP4vFI8SpnA9ZhwijAikReAFgT1CjYzu_Q"
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
    "date": "Sun, 01 Jun 2025 23:44:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1246.5 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (290.6ms)</summary>

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
    "etag": "W/\"640-hxEMO7i6dSqjzItHHS4GViCKY1s\"",
    "date": "Sun, 01 Jun 2025 23:44:39 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDc5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NzksImV4cCI6MTc0ODgyNTA3OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JxY_uPe9izTW8PiHyDvDxKpbLBR1Sye4xoDTedqBFJaQz8rOVjHXXdz5dm5MMOuzAc8P7qxJzuo8XDW7NnYSoXE3nC5LVFSBZ5T4kBcWefB-CSJmJqB1l60IZEOgb2LQLufbN8aOe8ti4jNXverNUgt2sHX7lSp3SLJQEAu-752tXJ4Zkz6I6maqiLOn_WNDvwwI90T3mJeEu5M136S5asBsKoZOc-NQyt31Is9wyoe6dHWaoWXfwHUVkOC3y5O0FdLX9zd6VJe6495K11sr8-zniSYJJ4ZsHJAtncLMLnxuqjTBOPKSfTohmyxLXdwpLdgTVaqbVHR55DjAW-pU8Q",
      "refreshToken": "AMf-vBz2gscu0P_CYUYZw-o2w0-2nZPla61Cp5Tzl2XrvczcjS8fg6Gokwmbrw7aKx15cB0f70p8oOKGbT21nrGX7eSMp_lOWsHrm1eSeCp1IpPSPTHvmteH3poOQh_491MdpdBJrcNlEHw--1YfVWN2LqNCenRuyU-xPNr3ZVWRxe0b5gbFpRMC7qPsp0H0f2QGGcBW9qWftFv5Q9zAbIscqUCJr3l4WbAedGLhCyjvq9lUMQUg8-QSgruTe7FUrDNV2XbCn4OH",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 290.6 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/QSNpu6naKoQbU7dGIBA5exZLphZ2 (1243.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDc5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0NzksImV4cCI6MTc0ODgyNTA3OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JxY_uPe9izTW8PiHyDvDxKpbLBR1Sye4xoDTedqBFJaQz8rOVjHXXdz5dm5MMOuzAc8P7qxJzuo8XDW7NnYSoXE3nC5LVFSBZ5T4kBcWefB-CSJmJqB1l60IZEOgb2LQLufbN8aOe8ti4jNXverNUgt2sHX7lSp3SLJQEAu-752tXJ4Zkz6I6maqiLOn_WNDvwwI90T3mJeEu5M136S5asBsKoZOc-NQyt31Is9wyoe6dHWaoWXfwHUVkOC3y5O0FdLX9zd6VJe6495K11sr8-zniSYJJ4ZsHJAtncLMLnxuqjTBOPKSfTohmyxLXdwpLdgTVaqbVHR55DjAW-pU8Q"
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
    "date": "Sun, 01 Jun 2025 23:44:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1243.9 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (244.0ms)</summary>

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
    "etag": "W/\"640-4BeyplSfmxoo8K4VBY4QigLmTP4\"",
    "date": "Sun, 01 Jun 2025 23:44:40 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDgwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0ODAsImV4cCI6MTc0ODgyNTA4MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0T5kmpQAqVgYdEUeLm6M2YKmLFULj8OJ3QBCbkzWRc0dqPeIT-g-SSQqTfxffK3SiofkHcbggnFxg82hdM5ra3yfImW8xoxBfLJp1ElMNJhvFhHtPuRAc0GTfj_HcOgj9kOprK8YFcpqXk80UT-kpgHrOkYNKdAuGlig0uXUDfOsW0XZz397Sm9_GMs2cb0QeuTJTUSqjxQ9AdkIqngRvS61YvkwQz8XT2-NGMrhVVvmHJENwmoppV8wtde7_iwTXTXpkTTr16RL53atCDbFDZGpr6uPpgK84mHJ5c9gHllnPXQB-2x0n9jlzXscBhwdJqwnprYz5vrKla9GGV4-A",
      "refreshToken": "AMf-vBxkQSxhiQnLfneTqztqh5lqu8m_2v4b4QrCjT5Dgc6w0cGddQlflQcOVgMdKHYTZu2WbQynSLAwnPoIddcHddg3ndC1AHHk0BzVHHS_pa9JfVrVgPvR17jTKKBSM0QDB_QqGEbNN7PwAEb5KvEr2D02xB_1Ccdro5th8WIXsQ8BGPIQogTF4zknDejU2MLxjPNNMjY0dCtqmDaIu8IstQ1wyi7NCJovV3HDqd0muSeByNCqRgeQEessd2YI9hV-V7fZZ-u-",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 244.0 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/nyE2vO5GiBfwIUFJfrAGCDB8tLv2 (1190.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNDgwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE0ODAsImV4cCI6MTc0ODgyNTA4MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0T5kmpQAqVgYdEUeLm6M2YKmLFULj8OJ3QBCbkzWRc0dqPeIT-g-SSQqTfxffK3SiofkHcbggnFxg82hdM5ra3yfImW8xoxBfLJp1ElMNJhvFhHtPuRAc0GTfj_HcOgj9kOprK8YFcpqXk80UT-kpgHrOkYNKdAuGlig0uXUDfOsW0XZz397Sm9_GMs2cb0QeuTJTUSqjxQ9AdkIqngRvS61YvkwQz8XT2-NGMrhVVvmHJENwmoppV8wtde7_iwTXTXpkTTr16RL53atCDbFDZGpr6uPpgK84mHJ5c9gHllnPXQB-2x0n9jlzXscBhwdJqwnprYz5vrKla9GGV4-A"
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
    "date": "Sun, 01 Jun 2025 23:44:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1190.1 ms  

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
