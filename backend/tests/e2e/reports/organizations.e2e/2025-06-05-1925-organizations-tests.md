# E2E Test Report: organizations-tests

**Date:** 6/5/2025  
**Time:** 7:25:53 PM  
**Duration:** 22.86s  
**Tests:** 17 total, 5 passed, 12 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Admin should create organization successfully | FAILED | 1.31s | Admin should create organization successfully |
| ❌ Regular user should create organization successfully | FAILED | 0.40s | Regular user should create organization successfully |
| ❌ Should create organization with explicit shelter type | FAILED | 0.49s | Should create organization with explicit shelter type |
| ✅ Should fail without authentication | PASSED | 0.06s | Should fail without authentication |
| ❌ Admin should get organization by ID | FAILED | 0.51s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.50s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ❌ Admin should update organization successfully | FAILED | 0.40s | Admin should update organization successfully |
| ❌ Should fail without proper permissions | FAILED | 0.52s | Should fail without proper permissions |
| ❌ Admin should delete organization successfully | FAILED | 0.47s | Admin should delete organization successfully |
| ❌ Should fail without proper permissions | FAILED | 0.83s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.81s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.46s | Should fail without admin permissions |
| ❌ Admin should get organization members | FAILED | 0.47s | Admin should get organization members |
| ❌ Should fail without membership | FAILED | 0.45s | Should fail without membership |
| ❌ Organization admin should only access their own organization | FAILED | 0.35s | Organization admin should only access their own organization |
| ❌ Super admin should access all organizations | FAILED | 0.48s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ❌ FAILED  
**Duration:** 1.31s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m"tYFy4ecd0TY2fErw9jsp6e1XHvw1"[39m
Received: [31mundefined[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (1306.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Test Organization 1749144332381",
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
    "etag": "W/\"214-kDIsJxt8u8vZ3KZUQfvEV3STHig\"",
    "date": "Thu, 05 Jun 2025 17:25:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "82fb04ad-df76-4481-8183-5e842557c6c3",
      "name": "Test Organization 1749144332381",
      "type": "shelter",
      "description": "Test organization for E2E testing",
      "logo": null,
      "address": "123 Test Street",
      "phone": "+1234567890",
      "email": "test@organization.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:32.826Z",
      "updatedAt": "2025-06-05T17:25:32.826Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1306.5 ms  

</details>


---

### Test: Regular user should create organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.40s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m"lJnTD8jUCBOCYzD4Ee9EWrgwyGc2"[39m
Received: [31mundefined[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (401.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDMzMiwidXNlcl9pZCI6ImxKblREOGpVQ0JPQ1l6RDRFZTlFV3Jnd3lHYzIiLCJzdWIiOiJsSm5URDhqVUNCT0NZekQ0RWU5RVdyZ3d5R2MyIiwiaWF0IjoxNzQ5MTQ0MzMyLCJleHAiOjE3NDkxNDc5MzIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQ0MzMwOTk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0NDMzMDk5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iu29yumBxgqDKLzbLCrxpAYKhG4FRq5OR1NUe7FoNjqyqgGAvzDanibo4si6FP_AI70t_2pA5cnmi2BLeULB0NcgrRrPJrDJJ7k_-lykYeViDV3PRBqMzcsjn6CswFMau8Rz2f2guY6M57j3sPduTOm4gDHttUFPeZ2QmfkuHM5Z2gXgIB1sWms2wdpuNqtZkXDXnqW9wUxRstPoapvFdk7DneX4WO7BQqVnpLT4oB2JpoBrR7A5hv_wLdqdo1YCjNMEFQGlCsHpZ-6g2fj9T09sq6Wv9QE2hi6HjK6J-3FcC7PJYgrsBkWLtzjB3ULjQwnns2248oFzNI-_XYvMgw"
  },
  "data": {
    "name": "User Org 1749144333718",
    "description": "Organization created by regular user",
    "email": "user-org-1749144333718@example.com",
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
    "etag": "W/\"21b-iyTKjZPpu6ZGDOmmdHjWCpt+ijg\"",
    "date": "Thu, 05 Jun 2025 17:25:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "f5b5ceb6-eae7-4ec7-b47b-7179d8420035",
      "name": "User Org 1749144333718",
      "type": "shelter",
      "description": "Organization created by regular user",
      "logo": null,
      "address": "789 User Street",
      "phone": "+1555666777",
      "email": "user-org-1749144333718@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "lJnTD8jUCBOCYzD4Ee9EWrgwyGc2",
      "createdAt": "2025-06-05T17:25:34.053Z",
      "updatedAt": "2025-06-05T17:25:34.053Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 401.8 ms  

</details>


---

### Test: Should create organization with explicit shelter type
**Status:** ❌ FAILED  
**Duration:** 0.49s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m"shelter"[39m
Received: [31mundefined[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (493.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Explicit Shelter 1749144334123",
    "type": "shelter",
    "description": "Shelter with explicit type",
    "address": "456 Shelter Avenue",
    "phone": "+1987654321",
    "email": "explicit-shelter-1749144334123@example.com"
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
    "etag": "W/\"224-PxSf9cS+wc8/UiE7tWnufOUvkv0\"",
    "date": "Thu, 05 Jun 2025 17:25:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "c8585f27-93b1-463d-adf4-f1582d3c4533",
      "name": "Explicit Shelter 1749144334123",
      "type": "shelter",
      "description": "Shelter with explicit type",
      "logo": null,
      "address": "456 Shelter Avenue",
      "phone": "+1987654321",
      "email": "explicit-shelter-1749144334123@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:34.550Z",
      "updatedAt": "2025-06-05T17:25:34.550Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 493.6 ms  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.06s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (60.5ms)</summary>

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
    "content-length": "114",
    "etag": "W/\"72-lOYZ7mT/xqxGy/iyav5Lv8u3JAE\"",
    "date": "Thu, 05 Jun 2025 17:25:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Token not provided",
    "details": {},
    "messageKey": "auth.token_not_provided",
    "language": "en"
  }
}
```

**⏱️ Duration:** 60.5 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (613.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Get Test Org 1749144334681",
    "description": "Organization for get tests",
    "email": "get-test-org-1749144334681@example.com",
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
    "etag": "W/\"21d-WtPjdsN9C1ThyE+lkzrzo8FdfZE\"",
    "date": "Thu, 05 Jun 2025 17:25:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "7e3fab90-034d-4da1-8f7b-c50f76e84345",
      "name": "Get Test Org 1749144334681",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": "321 Get Test Avenue",
      "phone": "+1888999000",
      "email": "get-test-org-1749144334681@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:35.227Z",
      "updatedAt": "2025-06-05T17:25:35.227Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 613.7 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/undefined (8.7ms)</summary>

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
    "content-length": "114",
    "etag": "W/\"72-lOYZ7mT/xqxGy/iyav5Lv8u3JAE\"",
    "date": "Thu, 05 Jun 2025 17:25:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Token not provided",
    "details": {},
    "messageKey": "auth.token_not_provided",
    "language": "en"
  }
}
```

**⏱️ Duration:** 8.7 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (572.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Update Test Org 1749144336324",
    "description": "Organization for update tests",
    "email": "update-test-org-1749144336324@example.com",
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
    "etag": "W/\"22c-RjcU+6sIWy3ZUC4Vu4E388KsOso\"",
    "date": "Thu, 05 Jun 2025 17:25:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "79b3dca0-384d-41ba-942c-be61f759d4a4",
      "name": "Update Test Org 1749144336324",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": "456 Update Test Boulevard",
      "phone": "+1777888999",
      "email": "update-test-org-1749144336324@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:36.829Z",
      "updatedAt": "2025-06-05T17:25:36.829Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 572.6 ms  

</details>


---

### Test: Admin should get organization by ID
**Status:** ❌ FAILED  
**Duration:** 0.51s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined (510.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:35 GMT",
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

**⏱️ Duration:** 510.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/invalid-id (500.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:36 GMT",
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

**⏱️ Duration:** 500.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/organizations (60.5ms)</summary>

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
    "content-length": "114",
    "etag": "W/\"72-lOYZ7mT/xqxGy/iyav5Lv8u3JAE\"",
    "date": "Thu, 05 Jun 2025 17:25:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Token not provided",
    "details": {},
    "messageKey": "auth.token_not_provided",
    "language": "en"
  }
}
```

**⏱️ Duration:** 60.5 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (613.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Get Test Org 1749144334681",
    "description": "Organization for get tests",
    "email": "get-test-org-1749144334681@example.com",
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
    "etag": "W/\"21d-WtPjdsN9C1ThyE+lkzrzo8FdfZE\"",
    "date": "Thu, 05 Jun 2025 17:25:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "7e3fab90-034d-4da1-8f7b-c50f76e84345",
      "name": "Get Test Org 1749144334681",
      "type": "shelter",
      "description": "Organization for get tests",
      "logo": null,
      "address": "321 Get Test Avenue",
      "phone": "+1888999000",
      "email": "get-test-org-1749144334681@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:35.227Z",
      "updatedAt": "2025-06-05T17:25:35.227Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 613.7 ms  

</details>

<details><summary>📡 Request #3: GET http://localhost:3000/api/organizations/undefined (8.7ms)</summary>

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
    "content-length": "114",
    "etag": "W/\"72-lOYZ7mT/xqxGy/iyav5Lv8u3JAE\"",
    "date": "Thu, 05 Jun 2025 17:25:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Token not provided",
    "details": {},
    "messageKey": "auth.token_not_provided",
    "language": "en"
  }
}
```

**⏱️ Duration:** 8.7 ms  
**❌ Error:** Request failed with status code 401  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (572.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Update Test Org 1749144336324",
    "description": "Organization for update tests",
    "email": "update-test-org-1749144336324@example.com",
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
    "etag": "W/\"22c-RjcU+6sIWy3ZUC4Vu4E388KsOso\"",
    "date": "Thu, 05 Jun 2025 17:25:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "79b3dca0-384d-41ba-942c-be61f759d4a4",
      "name": "Update Test Org 1749144336324",
      "type": "shelter",
      "description": "Organization for update tests",
      "logo": null,
      "address": "456 Update Test Boulevard",
      "phone": "+1777888999",
      "email": "update-test-org-1749144336324@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:36.829Z",
      "updatedAt": "2025-06-05T17:25:36.829Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 572.6 ms  

</details>


---

### Test: Admin should update organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.40s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/undefined (391.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:37 GMT",
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

**⏱️ Duration:** 391.5 ms  
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
**Duration:** 0.52s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m400[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/undefined (523.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDMzMiwidXNlcl9pZCI6ImxKblREOGpVQ0JPQ1l6RDRFZTlFV3Jnd3lHYzIiLCJzdWIiOiJsSm5URDhqVUNCT0NZekQ0RWU5RVdyZ3d5R2MyIiwiaWF0IjoxNzQ5MTQ0MzMyLCJleHAiOjE3NDkxNDc5MzIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQ0MzMwOTk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0NDMzMDk5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iu29yumBxgqDKLzbLCrxpAYKhG4FRq5OR1NUe7FoNjqyqgGAvzDanibo4si6FP_AI70t_2pA5cnmi2BLeULB0NcgrRrPJrDJJ7k_-lykYeViDV3PRBqMzcsjn6CswFMau8Rz2f2guY6M57j3sPduTOm4gDHttUFPeZ2QmfkuHM5Z2gXgIB1sWms2wdpuNqtZkXDXnqW9wUxRstPoapvFdk7DneX4WO7BQqVnpLT4oB2JpoBrR7A5hv_wLdqdo1YCjNMEFQGlCsHpZ-6g2fj9T09sq6Wv9QE2hi6HjK6J-3FcC7PJYgrsBkWLtzjB3ULjQwnns2248oFzNI-_XYvMgw"
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
    "date": "Thu, 05 Jun 2025 17:25:37 GMT",
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

**⏱️ Duration:** 523.1 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (461.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Delete Test Org 1749144337829",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1749144337829@example.com",
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
    "etag": "W/\"229-D/eO5H+NaU5BberACFywM465vcg\"",
    "date": "Thu, 05 Jun 2025 17:25:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "de35582f-244e-4b43-9a83-64c776dc8156",
      "name": "Delete Test Org 1749144337829",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": "789 Delete Test Street",
      "phone": "+1333444555",
      "email": "delete-test-org-1749144337829@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:38.218Z",
      "updatedAt": "2025-06-05T17:25:38.218Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 461.7 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (477.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "No Delete Perm Org 1749144338772",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1749144338772@example.com",
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
    "etag": "W/\"234-5eoRZ1o1bkslJZ4DjgI7eZtbUmI\"",
    "date": "Thu, 05 Jun 2025 17:25:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "9d8c248a-1d87-4659-aacc-98b22ac94f79",
      "name": "No Delete Perm Org 1749144338772",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": "999 Permission Test Lane",
      "phone": "+1666777888",
      "email": "no-delete-perm-org-1749144338772@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:39.179Z",
      "updatedAt": "2025-06-05T17:25:39.179Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 477.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/undefined (356.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDMzMiwidXNlcl9pZCI6ImxKblREOGpVQ0JPQ1l6RDRFZTlFV3Jnd3lHYzIiLCJzdWIiOiJsSm5URDhqVUNCT0NZekQ0RWU5RVdyZ3d5R2MyIiwiaWF0IjoxNzQ5MTQ0MzMyLCJleHAiOjE3NDkxNDc5MzIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQ0MzMwOTk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0NDMzMDk5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iu29yumBxgqDKLzbLCrxpAYKhG4FRq5OR1NUe7FoNjqyqgGAvzDanibo4si6FP_AI70t_2pA5cnmi2BLeULB0NcgrRrPJrDJJ7k_-lykYeViDV3PRBqMzcsjn6CswFMau8Rz2f2guY6M57j3sPduTOm4gDHttUFPeZ2QmfkuHM5Z2gXgIB1sWms2wdpuNqtZkXDXnqW9wUxRstPoapvFdk7DneX4WO7BQqVnpLT4oB2JpoBrR7A5hv_wLdqdo1YCjNMEFQGlCsHpZ-6g2fj9T09sq6Wv9QE2hi6HjK6J-3FcC7PJYgrsBkWLtzjB3ULjQwnns2248oFzNI-_XYvMgw"
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
    "date": "Thu, 05 Jun 2025 17:25:39 GMT",
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

**⏱️ Duration:** 356.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Admin should delete organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.47s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/organizations/undefined (474.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:38 GMT",
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

**⏱️ Duration:** 474.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without proper permissions
**Status:** ❌ FAILED  
**Duration:** 0.83s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m400[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/organizations/undefined (523.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDMzMiwidXNlcl9pZCI6ImxKblREOGpVQ0JPQ1l6RDRFZTlFV3Jnd3lHYzIiLCJzdWIiOiJsSm5URDhqVUNCT0NZekQ0RWU5RVdyZ3d5R2MyIiwiaWF0IjoxNzQ5MTQ0MzMyLCJleHAiOjE3NDkxNDc5MzIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQ0MzMwOTk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0NDMzMDk5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iu29yumBxgqDKLzbLCrxpAYKhG4FRq5OR1NUe7FoNjqyqgGAvzDanibo4si6FP_AI70t_2pA5cnmi2BLeULB0NcgrRrPJrDJJ7k_-lykYeViDV3PRBqMzcsjn6CswFMau8Rz2f2guY6M57j3sPduTOm4gDHttUFPeZ2QmfkuHM5Z2gXgIB1sWms2wdpuNqtZkXDXnqW9wUxRstPoapvFdk7DneX4WO7BQqVnpLT4oB2JpoBrR7A5hv_wLdqdo1YCjNMEFQGlCsHpZ-6g2fj9T09sq6Wv9QE2hi6HjK6J-3FcC7PJYgrsBkWLtzjB3ULjQwnns2248oFzNI-_XYvMgw"
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
    "date": "Thu, 05 Jun 2025 17:25:37 GMT",
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

**⏱️ Duration:** 523.1 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (461.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Delete Test Org 1749144337829",
    "description": "Organization for delete tests",
    "email": "delete-test-org-1749144337829@example.com",
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
    "etag": "W/\"229-D/eO5H+NaU5BberACFywM465vcg\"",
    "date": "Thu, 05 Jun 2025 17:25:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "de35582f-244e-4b43-9a83-64c776dc8156",
      "name": "Delete Test Org 1749144337829",
      "type": "shelter",
      "description": "Organization for delete tests",
      "logo": null,
      "address": "789 Delete Test Street",
      "phone": "+1333444555",
      "email": "delete-test-org-1749144337829@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:38.218Z",
      "updatedAt": "2025-06-05T17:25:38.218Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 461.7 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/organizations (477.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "No Delete Perm Org 1749144338772",
    "description": "Organization for permission test",
    "email": "no-delete-perm-org-1749144338772@example.com",
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
    "etag": "W/\"234-5eoRZ1o1bkslJZ4DjgI7eZtbUmI\"",
    "date": "Thu, 05 Jun 2025 17:25:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "9d8c248a-1d87-4659-aacc-98b22ac94f79",
      "name": "No Delete Perm Org 1749144338772",
      "type": "shelter",
      "description": "Organization for permission test",
      "logo": null,
      "address": "999 Permission Test Lane",
      "phone": "+1666777888",
      "email": "no-delete-perm-org-1749144338772@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:39.179Z",
      "updatedAt": "2025-06-05T17:25:39.179Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 477.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/undefined (356.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDMzMiwidXNlcl9pZCI6ImxKblREOGpVQ0JPQ1l6RDRFZTlFV3Jnd3lHYzIiLCJzdWIiOiJsSm5URDhqVUNCT0NZekQ0RWU5RVdyZ3d5R2MyIiwiaWF0IjoxNzQ5MTQ0MzMyLCJleHAiOjE3NDkxNDc5MzIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQ0MzMwOTk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0NDMzMDk5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iu29yumBxgqDKLzbLCrxpAYKhG4FRq5OR1NUe7FoNjqyqgGAvzDanibo4si6FP_AI70t_2pA5cnmi2BLeULB0NcgrRrPJrDJJ7k_-lykYeViDV3PRBqMzcsjn6CswFMau8Rz2f2guY6M57j3sPduTOm4gDHttUFPeZ2QmfkuHM5Z2gXgIB1sWms2wdpuNqtZkXDXnqW9wUxRstPoapvFdk7DneX4WO7BQqVnpLT4oB2JpoBrR7A5hv_wLdqdo1YCjNMEFQGlCsHpZ-6g2fj9T09sq6Wv9QE2hi6HjK6J-3FcC7PJYgrsBkWLtzjB3ULjQwnns2248oFzNI-_XYvMgw"
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
    "date": "Thu, 05 Jun 2025 17:25:39 GMT",
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

**⏱️ Duration:** 356.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.81s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (811.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "content-length": "66742",
    "etag": "W/\"104b6-lGi4kzNkRcsX6bLN+heu3ZKTHAk\"",
    "date": "Thu, 05 Jun 2025 17:25:40 GMT",
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
        "updatedAt": "2025-06-05T17:08:41.908Z",
        "memberships": []
      },
      {
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
        "updatedAt": "2025-06-05T17:08:46.101Z",
        "memberships": []
      },
      {
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
        "updatedAt": "2025-06-05T17:08:46.612Z",
        "memberships": []
      },
      {
        "id": "7de15f6b-1f68-4bf1-90fc-1002fd0e5903",
        "name": "Test Shelter 1749143343749",
        "type": "shelter",
        "description": "Test shelter for E2E testing",
        "logo": null,
        "address": "123 Shelter Street",
        "phone": "+1234567890",
        "email": "test-shelter-1749143343749@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:04.280Z",
        "updatedAt": "2025-06-05T17:09:04.280Z",
        "memberships": []
      },
      {
        "id": "244e9d7b-67ad-4d45-b7f4-fc824a9ef6c0",
        "name": "Default Type Org 1749143344412",
        "type": "shelter",
        "description": "Organization without explicit type",
        "logo": null,
        "address": "123 Default Street",
        "phone": "+1234567890",
        "email": "default-type-1749143344412@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:04.861Z",
        "updatedAt": "2025-06-05T17:09:04.861Z",
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
        "id": "896d092c-0e4b-4325-8f28-0e7da4ec7398",
        "name": "Update Type Test Org 1749143346287",
        "type": "shelter",
        "description": "Organization for type update tests",
        "logo": null,
        "address": "456 Update Street",
        "phone": "+9876543210",
        "email": "update-type-test-1749143346287@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:06.657Z",
        "updatedAt": "2025-06-05T17:09:06.657Z",
        "memberships": []
      },
      {
        "id": "0b7581c1-3624-405b-8a04-dd4512d856e4",
        "name": "Filter Test Shelter 1 1749143347460",
        "type": "shelter",
        "description": "Test shelter 1 for filtering",
        "logo": null,
        "address": "100 Filter Street",
        "phone": "+1234567890",
        "email": "filter-shelter-0-1749143347460@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:07.840Z",
        "updatedAt": "2025-06-05T17:09:07.840Z",
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
      },
      {
        "id": "fa018481-7297-40b2-80dd-0caf8fd97b62",
        "name": "Filter Test Shelter 2 1749143347911",
        "type": "shelter",
        "description": "Test shelter 2 for filtering",
        "logo": null,
        "address": "101 Filter Street",
        "phone": "+1234567891",
        "email": "filter-shelter-1-1749143347911@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:08.324Z",
        "updatedAt": "2025-06-05T17:09:08.324Z",
        "memberships": []
      },
      {
        "id": "a0446b39-9fdc-4927-92d1-ebf85ccba4fa",
        "name": "Filter Test Shelter 3 1749143348395",
        "type": "shelter",
        "description": "Test shelter 3 for filtering",
        "logo": null,
        "address": "102 Filter Street",
        "phone": "+1234567892",
        "email": "filter-shelter-2-1749143348395@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:08.758Z",
        "updatedAt": "2025-06-05T17:09:08.758Z",
        "memberships": []
      },
      {
        "id": "641d01be-fefb-4554-8b08-a1b0bc64142c",
        "name": "Integration Test Shelter 1749143361016",
        "type": "shelter",
        "description": "Shelter for integration testing",
        "logo": null,
        "address": "789 Integration Street",
        "phone": "+1555123456",
        "email": "integration-shelter-1749143361016@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:21.494Z",
        "updatedAt": "2025-06-05T17:09:21.494Z",
        "memberships": []
      },
      {
        "id": "a1278192-3285-4044-a449-26ea13cc1c08",
        "name": "Permissions Test Shelter 1749143362548",
        "type": "shelter",
        "description": "Shelter for permissions testing",
        "logo": null,
        "address": "321 Permissions Ave",
        "phone": "+1555987654",
        "email": "permissions-shelter-1749143362548@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:22.978Z",
        "updatedAt": "2025-06-05T17:09:22.978Z",
        "memberships": []
      },
      {
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
        "updatedAt": "2025-06-05T17:09:25.068Z",
        "memberships": []
      },
      {
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
        "updatedAt": "2025-06-05T17:09:25.576Z",
        "memberships": []
      },
      {
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
        "updatedAt": "2025-06-05T17:09:26.253Z",
        "memberships": []
      },
      {
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
        "updatedAt": "2025-06-05T17:09:26.757Z",
        "memberships": []
      },
      {
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
        "updatedAt": "2025-06-05T17:09:27.321Z",
        "memberships": []
      },
      {
        "id": "4100d808-2779-4929-a9de-d8de044f257f",
        "name": "Test Org for Memberships 1749143380463",
        "type": "shelter",
        "description": "Organization for membership testing",
        "logo": null,
        "address": "123 Membership Test Street",
        "phone": "+1234567890",
        "email": "test-org-1749143380463@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:09:40.994Z",
        "updatedAt": "2025-06-05T17:09:40.994Z",
        "memberships": []
      },
      {
        "id": "34986d78-0d1c-455f-9bce-49b381819f90",
        "name": "Other Org 1749143387120",
        "type": "shelter",
        "description": "Other organization for cross-access test",
        "logo": null,
        "address": "789 Other Org Boulevard",
        "phone": "+1122334455",
        "email": "other-org-1749143387120@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "ji8TMXeJ92fLGKJmNlBizZ4hILo1",
        "createdAt": "2025-06-05T17:09:47.459Z",
        "updatedAt": "2025-06-05T17:09:47.459Z",
        "memberships": []
      },
      {
        "id": "3a33c8e4-fbe6-4afc-8b76-97f49816d6fc",
        "name": "Pets Test Organization 1749143402930",
        "type": "shelter",
        "description": "Organization for pets E2E testing",
        "logo": null,
        "address": "123 Pets Test Street",
        "phone": "+1234567890",
        "email": "pets-test-1749143402930@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:03.409Z",
        "updatedAt": "2025-06-05T17:10:03.409Z",
        "memberships": []
      },
      {
        "id": "99739b6f-56e4-48cf-8d0b-712e049ff48a",
        "name": "Conversations Test Org",
        "type": "shelter",
        "description": "Organization for conversation testing",
        "logo": null,
        "address": "123 Conversations Test Street",
        "phone": "+1234567890",
        "email": "conversations-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:17.998Z",
        "updatedAt": "2025-06-05T17:10:17.998Z",
        "memberships": []
      },
      {
        "id": "526cdb66-2066-4c7b-a4ba-1a1d099ec477",
        "name": "Messages Test Org",
        "type": "shelter",
        "description": "Organization for message testing",
        "logo": null,
        "address": "123 Messages Test Street",
        "phone": "+1234567890",
        "email": "messages-test@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:10:23.693Z",
        "updatedAt": "2025-06-05T17:10:23.693Z",
        "memberships": []
      },
      {
        "id": "304e1410-35f6-4964-b726-1f489b21515a",
        "name": "Test Organization 1749143648545",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:09.163Z",
        "updatedAt": "2025-06-05T17:14:09.163Z",
        "memberships": []
      },
      {
        "id": "f315c3d0-b516-4dc3-99a7-e356908eba68",
        "name": "User Org 1749143649914",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749143649914@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "mVWMMUhaHpXicQOlIYrhVI16zxg1",
        "createdAt": "2025-06-05T17:14:10.255Z",
        "updatedAt": "2025-06-05T17:14:10.255Z",
        "memberships": []
      },
      {
        "id": "799df170-3f22-4872-915a-f7d18df8b6a7",
        "name": "Explicit Shelter 1749143650319",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749143650319@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:10.773Z",
        "updatedAt": "2025-06-05T17:14:10.773Z",
        "memberships": []
      },
      {
        "id": "98ff793f-36f8-4d4e-895f-e5696ddb82bf",
        "name": "Get Test Org 1749143650905",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749143650905@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:11.347Z",
        "updatedAt": "2025-06-05T17:14:11.347Z",
        "memberships": []
      },
      {
        "id": "ab97b17d-35d6-4de0-ae1c-fee439286c7f",
        "name": "Update Test Org 1749143652340",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749143652340@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:12.757Z",
        "updatedAt": "2025-06-05T17:14:12.757Z",
        "memberships": []
      },
      {
        "id": "e83bfa94-432e-4dc6-9744-a334f6f7feb4",
        "name": "Delete Test Org 1749143653549",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749143653549@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:13.933Z",
        "updatedAt": "2025-06-05T17:14:13.933Z",
        "memberships": []
      },
      {
        "id": "e8d0015d-7399-4868-b878-3436e26623e7",
        "name": "No Delete Perm Org 1749143654387",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749143654387@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:14.777Z",
        "updatedAt": "2025-06-05T17:14:14.777Z",
        "memberships": []
      },
      {
        "id": "a364d00c-66cb-450d-972e-a44ec883d715",
        "name": "Members Test Org 1749143656320",
        "type": "shelter",
        "description": "Organization for members tests",
        "logo": null,
        "address": "111 Members Test Road",
        "phone": "+1222333444",
        "email": "members-test-org-1749143656320@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:14:16.765Z",
        "updatedAt": "2025-06-05T17:14:16.765Z",
        "memberships": []
      },
      {
        "id": "ecbb3902-5ecf-4a8c-947d-6f391ded8861",
        "name": "Org1 1749143660120",
        "type": "shelter",
        "description": "First organization for multitenant test",
        "logo": null,
        "address": "123 Org1 Street",
        "phone": "+1111222333",
        "email": "org1-1749143660120@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "UdqGkWMboTSmyQH9IfNrOE8z2oy1",
        "createdAt": "2025-06-05T17:14:20.511Z",
        "updatedAt": "2025-06-05T17:14:20.511Z",
        "memberships": []
      },
      {
        "id": "7c52455f-7685-4f2d-8f5e-a6d7e5a4c6d4",
        "name": "Org2 1749143660571",
        "type": "shelter",
        "description": "Second organization for multitenant test",
        "logo": null,
        "address": "456 Org2 Avenue",
        "phone": "+1444555666",
        "email": "org2-1749143660571@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "FiWTWnJnKgRC2MvB4bxbBigKbw12",
        "createdAt": "2025-06-05T17:14:20.924Z",
        "updatedAt": "2025-06-05T17:14:20.924Z",
        "memberships": []
      },
      {
        "id": "82fb04ad-df76-4481-8183-5e842557c6c3",
        "name": "Test Organization 1749144332381",
        "type": "shelter",
        "description": "Test organization for E2E testing",
        "logo": null,
        "address": "123 Test Street",
        "phone": "+1234567890",
        "email": "test@organization.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:32.826Z",
        "updatedAt": "2025-06-05T17:25:32.826Z",
        "memberships": []
      },
      {
        "id": "f5b5ceb6-eae7-4ec7-b47b-7179d8420035",
        "name": "User Org 1749144333718",
        "type": "shelter",
        "description": "Organization created by regular user",
        "logo": null,
        "address": "789 User Street",
        "phone": "+1555666777",
        "email": "user-org-1749144333718@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "lJnTD8jUCBOCYzD4Ee9EWrgwyGc2",
        "createdAt": "2025-06-05T17:25:34.053Z",
        "updatedAt": "2025-06-05T17:25:34.053Z",
        "memberships": []
      },
      {
        "id": "c8585f27-93b1-463d-adf4-f1582d3c4533",
        "name": "Explicit Shelter 1749144334123",
        "type": "shelter",
        "description": "Shelter with explicit type",
        "logo": null,
        "address": "456 Shelter Avenue",
        "phone": "+1987654321",
        "email": "explicit-shelter-1749144334123@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:34.550Z",
        "updatedAt": "2025-06-05T17:25:34.550Z",
        "memberships": []
      },
      {
        "id": "7e3fab90-034d-4da1-8f7b-c50f76e84345",
        "name": "Get Test Org 1749144334681",
        "type": "shelter",
        "description": "Organization for get tests",
        "logo": null,
        "address": "321 Get Test Avenue",
        "phone": "+1888999000",
        "email": "get-test-org-1749144334681@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:35.227Z",
        "updatedAt": "2025-06-05T17:25:35.227Z",
        "memberships": []
      },
      {
        "id": "79b3dca0-384d-41ba-942c-be61f759d4a4",
        "name": "Update Test Org 1749144336324",
        "type": "shelter",
        "description": "Organization for update tests",
        "logo": null,
        "address": "456 Update Test Boulevard",
        "phone": "+1777888999",
        "email": "update-test-org-1749144336324@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:36.829Z",
        "updatedAt": "2025-06-05T17:25:36.829Z",
        "memberships": []
      },
      {
        "id": "de35582f-244e-4b43-9a83-64c776dc8156",
        "name": "Delete Test Org 1749144337829",
        "type": "shelter",
        "description": "Organization for delete tests",
        "logo": null,
        "address": "789 Delete Test Street",
        "phone": "+1333444555",
        "email": "delete-test-org-1749144337829@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:38.218Z",
        "updatedAt": "2025-06-05T17:25:38.218Z",
        "memberships": []
      },
      {
        "id": "9d8c248a-1d87-4659-aacc-98b22ac94f79",
        "name": "No Delete Perm Org 1749144338772",
        "type": "shelter",
        "description": "Organization for permission test",
        "logo": null,
        "address": "999 Permission Test Lane",
        "phone": "+1666777888",
        "email": "no-delete-perm-org-1749144338772@example.com",
        "status": "active",
        "defaultLanguage": "en",
        "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "createdAt": "2025-06-05T17:25:39.179Z",
        "updatedAt": "2025-06-05T17:25:39.179Z",
        "memberships": []
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 811.2 ms  

</details>


---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/admin/organizations (460.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDMzMiwidXNlcl9pZCI6ImxKblREOGpVQ0JPQ1l6RDRFZTlFV3Jnd3lHYzIiLCJzdWIiOiJsSm5URDhqVUNCT0NZekQ0RWU5RVdyZ3d5R2MyIiwiaWF0IjoxNzQ5MTQ0MzMyLCJleHAiOjE3NDkxNDc5MzIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQ0MzMwOTk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0NDMzMDk5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iu29yumBxgqDKLzbLCrxpAYKhG4FRq5OR1NUe7FoNjqyqgGAvzDanibo4si6FP_AI70t_2pA5cnmi2BLeULB0NcgrRrPJrDJJ7k_-lykYeViDV3PRBqMzcsjn6CswFMau8Rz2f2guY6M57j3sPduTOm4gDHttUFPeZ2QmfkuHM5Z2gXgIB1sWms2wdpuNqtZkXDXnqW9wUxRstPoapvFdk7DneX4WO7BQqVnpLT4oB2JpoBrR7A5hv_wLdqdo1YCjNMEFQGlCsHpZ-6g2fj9T09sq6Wv9QE2hi6HjK6J-3FcC7PJYgrsBkWLtzjB3ULjQwnns2248oFzNI-_XYvMgw"
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
    "date": "Thu, 05 Jun 2025 17:25:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Permission denied",
    "message": "You don't have permission to access this system"
  }
}
```

**⏱️ Duration:** 460.5 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/organizations (493.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
  },
  "data": {
    "name": "Members Test Org 1749144340883",
    "description": "Organization for members tests",
    "email": "members-test-org-1749144340883@example.com",
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
    "etag": "W/\"22b-IInGBN4mvkw3tq9kHp39tIyOqIg\"",
    "date": "Thu, 05 Jun 2025 17:25:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "5e155c12-75a0-49e6-b946-ed2d3ae15588",
      "name": "Members Test Org 1749144340883",
      "type": "shelter",
      "description": "Organization for members tests",
      "logo": null,
      "address": "111 Members Test Road",
      "phone": "+1222333444",
      "email": "members-test-org-1749144340883@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
      "createdAt": "2025-06-05T17:25:41.309Z",
      "updatedAt": "2025-06-05T17:25:41.309Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 493.2 ms  

</details>


---

### Test: Admin should get organization members
**Status:** ❌ FAILED  
**Duration:** 0.47s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined/members (472.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:41 GMT",
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

**⏱️ Duration:** 472.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Should fail without membership
**Status:** ❌ FAILED  
**Duration:** 0.45s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m400[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined/members (452.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDMzMiwidXNlcl9pZCI6ImxKblREOGpVQ0JPQ1l6RDRFZTlFV3Jnd3lHYzIiLCJzdWIiOiJsSm5URDhqVUNCT0NZekQ0RWU5RVdyZ3d5R2MyIiwiaWF0IjoxNzQ5MTQ0MzMyLCJleHAiOjE3NDkxNDc5MzIsImVtYWlsIjoidGVzdC11c2VyLW9yZy0xNzQ5MTQ0MzMwOTk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QtdXNlci1vcmctMTc0OTE0NDMzMDk5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iu29yumBxgqDKLzbLCrxpAYKhG4FRq5OR1NUe7FoNjqyqgGAvzDanibo4si6FP_AI70t_2pA5cnmi2BLeULB0NcgrRrPJrDJJ7k_-lykYeViDV3PRBqMzcsjn6CswFMau8Rz2f2guY6M57j3sPduTOm4gDHttUFPeZ2QmfkuHM5Z2gXgIB1sWms2wdpuNqtZkXDXnqW9wUxRstPoapvFdk7DneX4WO7BQqVnpLT4oB2JpoBrR7A5hv_wLdqdo1YCjNMEFQGlCsHpZ-6g2fj9T09sq6Wv9QE2hi6HjK6J-3FcC7PJYgrsBkWLtzjB3ULjQwnns2248oFzNI-_XYvMgw"
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
    "date": "Thu, 05 Jun 2025 17:25:42 GMT",
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

**⏱️ Duration:** 452.2 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (974.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1749144342307@example.com",
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
    "etag": "W/\"603-jTCUidnVBIetImVA5w2O2rXA0+4\"",
    "date": "Thu, 05 Jun 2025 17:25:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "mYNBNdlIRgYHMQnPYDXz6ZNkHeJ2",
        "email": "org1-admin-1749144342307@example.com",
        "name": "Org1 Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDM0MiwidXNlcl9pZCI6Im1ZTkJOZGxJUmdZSE1RblBZRFh6NlpOa0hlSjIiLCJzdWIiOiJtWU5CTmRsSVJnWUhNUW5QWURYejZaTmtIZUoyIiwiaWF0IjoxNzQ5MTQ0MzQyLCJleHAiOjE3NDkxNDc5NDIsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ5MTQ0MzQyMzA3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0OTE0NDM0MjMwN0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jDJkINCJ-Cw4vYX-2mwGQYzrcWQj2Es-C4A8RiXyQJnin6rPeADefaC1Qt6bMB3idvsXc047znF_6Dz3iDkqtOSVZ6ynNDtGSRsCqxpiNem85UJaaYfP-WvgG9oRfDQBHObex49uVcT5mMRFxEAGzF8dtTKgnQfFiVWmSoO6JIeaEPe7AuH1CNnbBLahSg7ixgwzAdbpIM6En3JMKCOJ8om9tknvradw5j0sWf9VALiPDJdX2hgrB36mxbCIHIZLiABqdiVJ98aOiC0o6RiEu_qGa00fSyWZwadztVxjR2wIUZzNIEPqP2tsVV-REMIbZya0mwy7Xt-abZTCY68UPA",
        "refreshToken": "AMf-vBz1VARu650Ue015jgjh45NHXP_GfrS5PfPM9AA-CdYgDEKp5I2Tkho7egMLB1ngf7gm7p63eL02fU4vq1BfTmDqBA8D1O-Q06uYoBQR4P7xYvO-Fxnr4xG5cq2enbM_hbJ3vCWJquzNcnhUHafYDtqXMk0ce2wHaGqE2wtMGgwY9HjEviACGYw326i7I__Ds6d6TssCkq76S5eDPv8vLpe4fi9galkbe_C6XUMbLSkWtEVafr8",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 974.5 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (865.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1749144343282@example.com",
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
    "etag": "W/\"603-samu+MdrVcwAyvtD4/54vL5MJkc\"",
    "date": "Thu, 05 Jun 2025 17:25:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "0Y4qngObjOXPUd4QqezDtCOx6bf2",
        "email": "org2-admin-1749144343282@example.com",
        "name": "Org2 Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDM0MywidXNlcl9pZCI6IjBZNHFuZ09iak9YUFVkNFFxZXpEdENPeDZiZjIiLCJzdWIiOiIwWTRxbmdPYmpPWFBVZDRRcWV6RHRDT3g2YmYyIiwiaWF0IjoxNzQ5MTQ0MzQzLCJleHAiOjE3NDkxNDc5NDMsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ5MTQ0MzQzMjgyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0OTE0NDM0MzI4MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.O_ztxroZ7S_oM1b3S9ozH2Kw80hD4fXUfudEc6z9QQ1-BKbyxQs-EXy1OXmE91Qu2wnbvizEV0WCVPK2-ETusg8Iz7K4TC0R4rgH66KfRUMCTUvBMM5J7XF6z0rRRfEhVeVFaYBw4nUEqvxFrrEeE1B_2L6MpvEM1U3-tFahu5MtHN-d77LcjOJE-Ak5iihQdniVqmuXBpVUQWWAx6RfT3CtsX1jF2KB3iUYei_dLCUUbd_3q9DE5ERk4dPnruh0YVBxw09b1E05QzvxdQfV0tKCUDtfQSCiNLEzD05XQbFGUI16wJGiX6T_y46AkJ8MW6lh8fHvakczQAbbX4FD3A",
        "refreshToken": "AMf-vBxklVCby6CUK_ZusLWDa1PcUJtwwhF5sePmJaHQ6dhTZY1bnCd_CpzBV0J5u7aTogQ04_NA2nmOQUy0V19A79PiOVtVx1k4NSAqU-zfVG1khIU-q7uzWwdyRGlAe-O9fFtqqc3AaBpJfOKKIc_zm98oPigZ40VJTc3AeA5xl6TDk5cKg0-FynZvNg2QW5cpd_ionepmkp581mcf8w5RW9A4AJNx9b0h0qBx1Hgrfd1eDvfQRlM",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 865.2 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (254.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org1-admin-1749144342307@example.com",
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
    "etag": "W/\"5ec-r8ZQniIRTSSxgMdnkKQACh8hA5M\"",
    "date": "Thu, 05 Jun 2025 17:25:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "mYNBNdlIRgYHMQnPYDXz6ZNkHeJ2",
        "email": "org1-admin-1749144342307@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDM0NCwidXNlcl9pZCI6Im1ZTkJOZGxJUmdZSE1RblBZRFh6NlpOa0hlSjIiLCJzdWIiOiJtWU5CTmRsSVJnWUhNUW5QWURYejZaTmtIZUoyIiwiaWF0IjoxNzQ5MTQ0MzQ0LCJleHAiOjE3NDkxNDc5NDQsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ5MTQ0MzQyMzA3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0OTE0NDM0MjMwN0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OpEnz9Wt-F5W6CZAU5JsuNGUzXttdMaZAR-mEAyg0Zytcbcqv6PMdV2Uvvo2jcgO3SUStpkEZCRbTJQWBW_js4Q2DfR6FwtuYueyiu0R7CMGlNeh61dvUfXSQQrYEWevEmBt2TqdN-hbChC3dJvsjN4qDPtxxTXQomI5B2D7Xhv9kxhlh_WigE_QpQ8AGQFa-32ZKEt6Kv7L2usVMvVcDv3S6unZW1XbZp9p72ns7TrOIb8T8aGjEDPphnsr-mr29BuR-Mh2i1BvmlDWx21BUTViDbL3WsF_8cGQB7urp6R2MGNA6Behabd2IRhIa6aig732MTCgJLNnvytadjgngA",
        "refreshToken": "AMf-vBx1O6zh-vc0w8Krer3l-GyLcGT_IyLIS1bLHyZcrF-kCLp_udjG5sLVuzEq4L3_RbUZJEkpPDOUOAvm0t60TPLhH048cULabv5UBfL04E3aiTPwEKG9EWv1r6PR42bEKv7NMcKblOB4tNSiQ_EGJG89dGegqoPAVUYXLbuZaKOuiPwkE1iq5inPfkbdgSW1_4N9cofiqi0bDOGw4NtKPotztLQMGnT_9gs1R6ex_JyTmuXeinI",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 254.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (348.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "org2-admin-1749144343282@example.com",
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
    "etag": "W/\"5ec-WCQgNKKDXzgVNaghrzfD4d7aqcI\"",
    "date": "Thu, 05 Jun 2025 17:25:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "0Y4qngObjOXPUd4QqezDtCOx6bf2",
        "email": "org2-admin-1749144343282@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDM0NCwidXNlcl9pZCI6IjBZNHFuZ09iak9YUFVkNFFxZXpEdENPeDZiZjIiLCJzdWIiOiIwWTRxbmdPYmpPWFBVZDRRcWV6RHRDT3g2YmYyIiwiaWF0IjoxNzQ5MTQ0MzQ0LCJleHAiOjE3NDkxNDc5NDQsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ5MTQ0MzQzMjgyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0OTE0NDM0MzI4MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CWqawyqvV7LeyTkUCpiYXS3mYhYaBPwlSXdkP9mUzUacnAg69ea96M-dafPPPtfgAVOsexGArUDcvOZtNLnyW4NapePpB8F1to3jexrjwcp57zT_RTd49F8NX8W8IC-Hs7XD8k3IXFOoj2qbJqeksLsWZZAAiQUiEdmM6R2VbQXEouhcI21xedjaRJe_UhHCSTt_IFYVrpINGmHWBLv07j5UBfNP36_HfbQyCPwgX3MYMMlgSqH9yUtGWH0PyrnAntO_3SkhOaPAcRa7dlzsiLlMezxuXSijeMiBCyELx6l6n9qVVEzqZbRKEXrzQpiRdZksJc-N8GQtsLQq32n9Kw",
        "refreshToken": "AMf-vBzbTtgebQmj6FR7gle0a7YkW9LrI9NTmANzBUmT1F3Vb5fLicWLtiB3sr5Nqs7WNdUlpvh07Y-ctYGLb1xopRkLdPN1jqY7zdCCN2dTPqB8B_PvqU3JdHP_X5zc978lNIeD7ZaPo6xzmy_HPfK0Yn7JGlpkgItmIJ66ej2SHdVvj3JIxIqL6a5u793gYlLkOYh8usn7wfvfjttd05BKQpUWimgrKM1rD5o8BpYJfdlepTpO09s",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 348.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/organizations (436.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDM0NCwidXNlcl9pZCI6Im1ZTkJOZGxJUmdZSE1RblBZRFh6NlpOa0hlSjIiLCJzdWIiOiJtWU5CTmRsSVJnWUhNUW5QWURYejZaTmtIZUoyIiwiaWF0IjoxNzQ5MTQ0MzQ0LCJleHAiOjE3NDkxNDc5NDQsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ5MTQ0MzQyMzA3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0OTE0NDM0MjMwN0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OpEnz9Wt-F5W6CZAU5JsuNGUzXttdMaZAR-mEAyg0Zytcbcqv6PMdV2Uvvo2jcgO3SUStpkEZCRbTJQWBW_js4Q2DfR6FwtuYueyiu0R7CMGlNeh61dvUfXSQQrYEWevEmBt2TqdN-hbChC3dJvsjN4qDPtxxTXQomI5B2D7Xhv9kxhlh_WigE_QpQ8AGQFa-32ZKEt6Kv7L2usVMvVcDv3S6unZW1XbZp9p72ns7TrOIb8T8aGjEDPphnsr-mr29BuR-Mh2i1BvmlDWx21BUTViDbL3WsF_8cGQB7urp6R2MGNA6Behabd2IRhIa6aig732MTCgJLNnvytadjgngA"
  },
  "data": {
    "name": "Org1 1749144344750",
    "description": "First organization for multitenant test",
    "email": "org1-1749144344750@example.com",
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
    "etag": "W/\"216-Tf+X92Ljn20tuRgjvsI3XGjvUNg\"",
    "date": "Thu, 05 Jun 2025 17:25:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "efa4cb45-404a-428d-b4d3-ea88722a1b60",
      "name": "Org1 1749144344750",
      "type": "shelter",
      "description": "First organization for multitenant test",
      "logo": null,
      "address": "123 Org1 Street",
      "phone": "+1111222333",
      "email": "org1-1749144344750@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "mYNBNdlIRgYHMQnPYDXz6ZNkHeJ2",
      "createdAt": "2025-06-05T17:25:45.119Z",
      "updatedAt": "2025-06-05T17:25:45.119Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 436.1 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/organizations (413.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDM0NCwidXNlcl9pZCI6IjBZNHFuZ09iak9YUFVkNFFxZXpEdENPeDZiZjIiLCJzdWIiOiIwWTRxbmdPYmpPWFBVZDRRcWV6RHRDT3g2YmYyIiwiaWF0IjoxNzQ5MTQ0MzQ0LCJleHAiOjE3NDkxNDc5NDQsImVtYWlsIjoib3JnMi1hZG1pbi0xNzQ5MTQ0MzQzMjgyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzItYWRtaW4tMTc0OTE0NDM0MzI4MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CWqawyqvV7LeyTkUCpiYXS3mYhYaBPwlSXdkP9mUzUacnAg69ea96M-dafPPPtfgAVOsexGArUDcvOZtNLnyW4NapePpB8F1to3jexrjwcp57zT_RTd49F8NX8W8IC-Hs7XD8k3IXFOoj2qbJqeksLsWZZAAiQUiEdmM6R2VbQXEouhcI21xedjaRJe_UhHCSTt_IFYVrpINGmHWBLv07j5UBfNP36_HfbQyCPwgX3MYMMlgSqH9yUtGWH0PyrnAntO_3SkhOaPAcRa7dlzsiLlMezxuXSijeMiBCyELx6l6n9qVVEzqZbRKEXrzQpiRdZksJc-N8GQtsLQq32n9Kw"
  },
  "data": {
    "name": "Org2 1749144345187",
    "description": "Second organization for multitenant test",
    "email": "org2-1749144345187@example.com",
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
    "etag": "W/\"217-RGafQe8+BFEmp9S7hAdRxP5+jYw\"",
    "date": "Thu, 05 Jun 2025 17:25:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "b94da16c-1389-4a9d-90a7-b4ee99557bf4",
      "name": "Org2 1749144345187",
      "type": "shelter",
      "description": "Second organization for multitenant test",
      "logo": null,
      "address": "456 Org2 Avenue",
      "phone": "+1444555666",
      "email": "org2-1749144345187@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "0Y4qngObjOXPUd4QqezDtCOx6bf2",
      "createdAt": "2025-06-05T17:25:45.533Z",
      "updatedAt": "2025-06-05T17:25:45.533Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 413.5 ms  

</details>


---

### Test: Organization admin should only access their own organization
**Status:** ❌ FAILED  
**Duration:** 0.35s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined (349.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE0NDM0NCwidXNlcl9pZCI6Im1ZTkJOZGxJUmdZSE1RblBZRFh6NlpOa0hlSjIiLCJzdWIiOiJtWU5CTmRsSVJnWUhNUW5QWURYejZaTmtIZUoyIiwiaWF0IjoxNzQ5MTQ0MzQ0LCJleHAiOjE3NDkxNDc5NDQsImVtYWlsIjoib3JnMS1hZG1pbi0xNzQ5MTQ0MzQyMzA3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9yZzEtYWRtaW4tMTc0OTE0NDM0MjMwN0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OpEnz9Wt-F5W6CZAU5JsuNGUzXttdMaZAR-mEAyg0Zytcbcqv6PMdV2Uvvo2jcgO3SUStpkEZCRbTJQWBW_js4Q2DfR6FwtuYueyiu0R7CMGlNeh61dvUfXSQQrYEWevEmBt2TqdN-hbChC3dJvsjN4qDPtxxTXQomI5B2D7Xhv9kxhlh_WigE_QpQ8AGQFa-32ZKEt6Kv7L2usVMvVcDv3S6unZW1XbZp9p72ns7TrOIb8T8aGjEDPphnsr-mr29BuR-Mh2i1BvmlDWx21BUTViDbL3WsF_8cGQB7urp6R2MGNA6Behabd2IRhIa6aig732MTCgJLNnvytadjgngA"
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
    "date": "Thu, 05 Jun 2025 17:25:45 GMT",
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

**⏱️ Duration:** 349.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Super admin should access all organizations
**Status:** ❌ FAILED  
**Duration:** 0.48s  
**Error:** Request failed with status code 400  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/organizations/undefined (483.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:46 GMT",
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

**⏱️ Duration:** 483.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #2: DELETE http://localhost:3000/api/organizations/undefined (338.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:46 GMT",
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

**⏱️ Duration:** 338.0 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/undefined (443.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:47 GMT",
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

**⏱️ Duration:** 443.8 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/organizations/undefined (402.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:47 GMT",
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

**⏱️ Duration:** 402.3 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/organizations/undefined (405.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:48 GMT",
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

**⏱️ Duration:** 405.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/undefined (357.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:48 GMT",
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

**⏱️ Duration:** 357.5 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/organizations/undefined (484.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzMzAsImV4cCI6MTc0OTE0NzkzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DgTYPluNU1w4NCrA1Ncaz2xRN2z2UPuk-z54t1Y09WvBVnQA10qerD2dzC6Rq9JFxUCnWYwrmu7IZdYyGkRFSy5c_wxs-hD30a9D5jAejycPDdSnZYYnXqJLIPid012AUcQ_Jfv_jvxIE_rPDozmIGhRCH3Cqah7bXb1nOKKww6z8yy71f4zZiEPOcAeDFrO2VGfEQWNNEGHJ4aoAe494ESB9XdlJoDWmyxc-6LTNsTWPv_Z-2VsypX-qCDuFl_SUY3vUBDlQHYpSh0QAb65_6-KnKyUYJFSi44vSfk1HdcJlb-WLDYDW3VrReSi82eEktDlX07PKvBjT3R--VutAg"
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
    "date": "Thu, 05 Jun 2025 17:25:48 GMT",
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

**⏱️ Duration:** 484.6 ms  
**❌ Error:** Request failed with status code 400  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/auth/login (243.5ms)</summary>

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
    "etag": "W/\"6aa-aJr33ZlaMsY/O91Fu+/SSmOGGP0\"",
    "date": "Thu, 05 Jun 2025 17:25:49 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzNDksImV4cCI6MTc0OTE0Nzk0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZqQgbPawk5vmY2-Vk7htxI0N1WBRepCgqqI1dCBIT2QjMMdwqxJKR65v0k4bO28h0gjTST0z9NCfRSt1cdYCKfNrTM8SW04wDWOi8UXOpBcFRjn0EhV4W_oM8L9yftN6-cNMxuhTVTE_DKoclXCkO1dUQJn1bwGtwVcJxtqEXADfgib7BtGuIwVO4AE7YZh7vUlqdNuwtEGcaaCnGwsTJVSjMkIwpbEx7LhvZPm1Af5Pn3cvPuzk3VrI-AswOQDiInbKTobYkpgyaOpQEbuMb_vKKmPJqtRrHCIcXVhYqVcDVy8W2AU-huXnn9dNb7rotruw8qeDCHkdNV0H4x7tuA",
        "refreshToken": "AMf-vBx0QnYIx1vCRJwLQ39pNhcCnxEMb7jdeWOfskJwg9qe9JHRrkE1BrRf7aFsyH2H_-4zC3F9SiYgotZYJTFSHnvY7W-WU46IzoZJkLdZt-TCy_wDIcJmUMhukwOqIX9r9YyFoAwcym0vpxoQ9q-3hXVsPc2RKnYkUHQmsP2XW6mkmLi0-Y0pd9cuURyW_dVx3-GKtTVovMVGzLW2atOYnSLP8b6lxIEYZEH7Zg9LxmsrfzYewBki-6FziPeLmV4aXsfV3PdW",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 243.5 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/admin/users/lJnTD8jUCBOCYzD4Ee9EWrgwyGc2 (1133.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzNDksImV4cCI6MTc0OTE0Nzk0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZqQgbPawk5vmY2-Vk7htxI0N1WBRepCgqqI1dCBIT2QjMMdwqxJKR65v0k4bO28h0gjTST0z9NCfRSt1cdYCKfNrTM8SW04wDWOi8UXOpBcFRjn0EhV4W_oM8L9yftN6-cNMxuhTVTE_DKoclXCkO1dUQJn1bwGtwVcJxtqEXADfgib7BtGuIwVO4AE7YZh7vUlqdNuwtEGcaaCnGwsTJVSjMkIwpbEx7LhvZPm1Af5Pn3cvPuzk3VrI-AswOQDiInbKTobYkpgyaOpQEbuMb_vKKmPJqtRrHCIcXVhYqVcDVy8W2AU-huXnn9dNb7rotruw8qeDCHkdNV0H4x7tuA"
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
    "date": "Thu, 05 Jun 2025 17:25:50 GMT",
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

**⏱️ Duration:** 1133.0 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/auth/login (318.7ms)</summary>

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
    "etag": "W/\"6aa-hgQ3S1uwkmtwz35blJUX9kc4X5Y\"",
    "date": "Thu, 05 Jun 2025 17:25:50 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzNTAsImV4cCI6MTc0OTE0Nzk1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nqU4JkhO3k1Rpf73R4IO9AMRmhlSBh3nKNDlMNxBBhLMjIceTM4GeBsj2VLrDmB-uc1Gz1Du-UVFB5AHcGxlh8xtrFeO6Hquq84VP_XIvLywMEGkFa9ZKAgzi5JnfzL4pCB1aminuEcQ_la_GdER5f7nsnTMorqWFuHWN5vbbbpffUPs202yWt2LRoIXXa1nkz3k6Ff04QnTCjLnH6YF2oKaTZrqLgK9p9ipRRe5qYwzIeUyt6W083R_J5J8ODRA3vJiSATVc0q2Sse77fgrSrJTqvm-8QB3uo_ZrFkLdOR1PFwXpik0yxm0V6NYTJea7XWhaPtceYY3y7i84JMtoA",
        "refreshToken": "AMf-vByo2K_ZppsSx-0eYULzAvoCXxJsxJqtQ4icxvAS0NeTyenwtIeM3zIhLIU6p1VPDPRN1KwC-0QofLL247WUqxtKYSYB8aXSGNIUFQIak3lpqfx5wU4qZG4UKit68ucHQrdhZ1AdHuazKuDd0BWX-ccgvog8VjKS_z63P2vjKUujl_dEiYZF9wBSR4-GwAFdsSe2HbjccnTOjWDYQpDZKSNNs_6zQgm8lfvpeOHfpTq2JluhcKAdItPTXXVxT9a1xF_XVGqg",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 318.7 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/admin/users/mYNBNdlIRgYHMQnPYDXz6ZNkHeJ2 (1200.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzNTAsImV4cCI6MTc0OTE0Nzk1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nqU4JkhO3k1Rpf73R4IO9AMRmhlSBh3nKNDlMNxBBhLMjIceTM4GeBsj2VLrDmB-uc1Gz1Du-UVFB5AHcGxlh8xtrFeO6Hquq84VP_XIvLywMEGkFa9ZKAgzi5JnfzL4pCB1aminuEcQ_la_GdER5f7nsnTMorqWFuHWN5vbbbpffUPs202yWt2LRoIXXa1nkz3k6Ff04QnTCjLnH6YF2oKaTZrqLgK9p9ipRRe5qYwzIeUyt6W083R_J5J8ODRA3vJiSATVc0q2Sse77fgrSrJTqvm-8QB3uo_ZrFkLdOR1PFwXpik0yxm0V6NYTJea7XWhaPtceYY3y7i84JMtoA"
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
    "date": "Thu, 05 Jun 2025 17:25:51 GMT",
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

**⏱️ Duration:** 1200.5 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (333.1ms)</summary>

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
    "etag": "W/\"6aa-76mzNJd64ayOx1WI1tOdmiggGeo\"",
    "date": "Thu, 05 Jun 2025 17:25:52 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzNTEsImV4cCI6MTc0OTE0Nzk1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LCyb2L9S3PuEwEgJRm5EhYGpzcWA7QsaL5cIXfwlFbrmKMy50CKTQgmkci5iAwkU_7pgcw0EZeBgyCrvcHuMEyAq8NcW_WObgKHE3ggj8XE8Fgp6va4m-NOcjuWIQCVPeGvt_8IsPNNBLrmA9ZbubB6ZYi9GUrj93FXqfVkGjTYuM_vNqiMmFKCk4oPVYU7M0mhkCrXvjNSPEBD1_XjSthJjmrg42evetdyfLjG5oM0gAm_7tLmyW_JuU6FAZeRUtHzNLxhKb6DiiaSeZvp282YHyrs28Bk9fEyLOHRaGuLB6se9gEOTWOlsiLUcJIFmaDFeoZlaEIpoIU98at3UDw",
        "refreshToken": "AMf-vBxtK61fuF0vqLaNqX5L91vEDRlNgJY4T4mFXb7XMZd-ShrQgXm18PBXJR6w2RC1ZgVhkmLJzWOyWgTqNaX3ih3Cd6Bh0qSlHgJvnpJ-P40At-7A44qK8TCGRk_1Xa5xniGPbw2aUjzRDxUlJvXVY17fyU6AfiyUR8Wyud2f8xDl8jTVfj7D_mmjcgQfNvsHjh3xNeoXg87bOJBd7srjhDe-N0k1SC9Q9hNrGkSRHhNujV8m_XevxgT73qYXCO4WM1KcfNJX",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 333.1 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/0Y4qngObjOXPUd4QqezDtCOx6bf2 (1139.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTQ0MzUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNDQzNTEsImV4cCI6MTc0OTE0Nzk1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LCyb2L9S3PuEwEgJRm5EhYGpzcWA7QsaL5cIXfwlFbrmKMy50CKTQgmkci5iAwkU_7pgcw0EZeBgyCrvcHuMEyAq8NcW_WObgKHE3ggj8XE8Fgp6va4m-NOcjuWIQCVPeGvt_8IsPNNBLrmA9ZbubB6ZYi9GUrj93FXqfVkGjTYuM_vNqiMmFKCk4oPVYU7M0mhkCrXvjNSPEBD1_XjSthJjmrg42evetdyfLjG5oM0gAm_7tLmyW_JuU6FAZeRUtHzNLxhKb6DiiaSeZvp282YHyrs28Bk9fEyLOHRaGuLB6se9gEOTWOlsiLUcJIFmaDFeoZlaEIpoIU98at3UDw"
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
    "date": "Thu, 05 Jun 2025 17:25:53 GMT",
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

**⏱️ Duration:** 1139.9 ms  

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
