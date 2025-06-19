# E2E Test Report: memberships-tests

**Date:** 6/19/2025  
**Time:** 3:45:12 PM  
**Duration:** 22.70s  
**Tests:** 14 total, 8 passed, 6 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.73s | Admin should invite user to organization successfully |
| ❌ Should fail to invite same user twice | FAILED | 0.84s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.66s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 10.24s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.74s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.75s | Admin should get memberships by user |
| ✅ User should get their own memberships | PASSED | 0.45s | User should get their own memberships |
| ❌ Should fail without userId or organizationId | FAILED | 0.64s | Should fail without userId or organizationId |
| ✅ Regular user should fail to get other user memberships | PASSED | 0.33s | Regular user should fail to get other user memberships |
| ❌ Admin should get membership by ID | FAILED | 0.67s | Admin should get membership by ID |
| ✅ Should fail with invalid membership ID | PASSED | 0.54s | Should fail with invalid membership ID |
| ❌ Admin should update member role successfully | FAILED | 0.60s | Admin should update member role successfully |
| ❌ Should fail with invalid role | FAILED | 0.05s | Should fail with invalid role |
| ❌ Regular user should fail to update role without permissions | FAILED | 0.05s | Regular user should fail to update role without permissions |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.73s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (723.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
    "userId": "2kNARjY6H1XagagRgOQPYZhwuIp2",
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
    "content-length": "398",
    "etag": "W/\"18e-+k1OrzIDEasK66lqPBsf2FcjG+w\"",
    "date": "Thu, 19 Jun 2025 13:44:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "026e88f8-8d30-464a-82b8-ac4020206f7b",
      "userId": "2kNARjY6H1XagagRgOQPYZhwuIp2",
      "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-19T13:44:54.605Z",
      "updatedAt": "2025-06-19T13:44:54.605Z"
    },
    "message": "common.created",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:44:54.666Z",
      "messageKey": "common.created"
    }
  }
}
```

**⏱️ Duration:** 723.0 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ❌ FAILED  
**Duration:** 0.84s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

[1mMatcher error[22m: [31mreceived[39m value must not be null nor undefined

Received has value: [31mundefined[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (834.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
    "userId": "2kNARjY6H1XagagRgOQPYZhwuIp2",
    "role": "volunteer"
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
    "content-length": "284",
    "etag": "W/\"11c-RM5aGjV2uysB4gSmsnMuvPU71Fw\"",
    "date": "Thu, 19 Jun 2025 13:44:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "message": {
      "error": "Error inviting user",
      "details": "User is already a member of this organization"
    },
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:44:55.406Z",
      "messageKey": {
        "error": "Error inviting user",
        "details": "User is already a member of this organization"
      }
    }
  }
}
```

**⏱️ Duration:** 834.6 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1186.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1750340695536@example.com",
    "password": "TestPassword123!",
    "name": "No Permission Invite"
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
    "content-length": "1673",
    "etag": "W/\"689-RTjChIbmBDPcDZqTvcTPxOd3py8\"",
    "date": "Thu, 19 Jun 2025 13:44:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "user": {
        "id": "nXymcPsj3ig3MIqOM8B0kBoLQ2G3",
        "email": "no-perm-invite-1750340695536@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5NiwidXNlcl9pZCI6Im5YeW1jUHNqM2lnM01JcU9NOEIwa0JvTFEyRzMiLCJzdWIiOiJuWHltY1BzajNpZzNNSXFPTThCMGtCb0xRMkczIiwiaWF0IjoxNzUwMzQwNjk2LCJleHAiOjE3NTAzNDQyOTYsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc1MDM0MDY5NTUzNkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzUwMzQwNjk1NTM2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S9hQxvV9sCM9Ywu_j0iwwnji9l6OylhA1rpQ3ixKET9nN3_tzb7njcdecknDuAzzTDCjnuh87IIxkhpkiQEfesLrM-A583qQZKerFFnGG92DBQkIWovvykJ5B-KjVbUS2tD9F6hD2MfZOpLMhhKZPIE2us9PG_h_jsWMW0V8-iDjHw7zzMlr123eVcB3lNX_YHk7ba5XFW-e5IQYmg1unFdo4jFStD2BMywoFHQKNL3-MQNplo3tsZM8VbmdZq7dekkp8DRy5fgJQicvP9zOMtbf5etbPMrl6Fc1EGsJs-8Jn6JtZQ0ZncaZzNrzWROsnh1dwJqD8sqDCI-eIMS-Vw",
        "refreshToken": "AMf-vBxlHcNuJpBiDfW3HpburpTdUoiFN2QfEXZzKe8-WYenFgSADTYO0y-PYNihJBVRDba4grpRS8MS67WtiP-BcvPqFE8MHw_X2zoaN9klw1V5eTIv7bB3PFCXNBpp0DszrKkxUi_qTRl0qlW092s1INy2yHVGmbrTMzrPchArcaUcQ5h_CJh8_r2d9iKa-UvidpM4WBgKERy_xunmyi5X1UFvjZUjEvytJnxHsz9LypdfaoP5jc8UBtmPQYGcqcUSIf6lrI93",
        "expiresIn": "3600"
      }
    },
    "message": "auth.register.success ({\"email\":\"no-perm-invite-1750340695536@example.com\"})",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:44:56.716Z",
      "messageKey": "auth.register.success"
    }
  }
}
```

**⏱️ Duration:** 1186.4 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (473.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MSwidXNlcl9pZCI6IlViZlZJWmpISHZhbGFacm01bXZnMWxZRDczazEiLCJzdWIiOiJVYmZWSVpqSEh2YWxhWnJtNW12ZzFsWUQ3M2sxIiwiaWF0IjoxNzUwMzQwNjkxLCJleHAiOjE3NTAzNDQyOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDM0MDY5MDY5N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMzQwNjkwNjk3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k3ZiFK-8blTqJ-oG41Lh-iW5-2rsLzwMA6yFE9uWpG7W26YpWtwOor449shw6KYUtG0xZx2ABZbDF9IwLKjpFtu-eTP7LjX8qeU2BpYrJtpbmUzmj2y6_7lS5_6qulqgY74Yxty3IoJRk4i7pqHSsem1SqEMbAswywCT_eHCmzQYhlqbi4o0EZ9USfTVMnOOqSiw3nAVADVXhUCBn3mXnzdFiiyX8cOXJigCjjSX-RSnp9babWcABTsgbw7xp3cBhi4cZU0HBFLOjLK7Ve4B_oFjPh5-zbEdIHBGj1ZZ333QfSmapj-4I0KbiLNvM2SuNk8WyPHF91R-KETI257lRQ"
  },
  "data": {
    "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
    "userId": "nXymcPsj3ig3MIqOM8B0kBoLQ2G3",
    "role": "member"
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
    "content-length": "216",
    "etag": "W/\"d8-LpERvVRN+0IVezUYkCPNeOkFQU8\"",
    "date": "Thu, 19 Jun 2025 13:44:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "message": {
      "error": "Unauthorized. Only admins can invite users."
    },
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:44:57.146Z",
      "messageKey": {
        "error": "Unauthorized. Only admins can invite users."
      }
    }
  }
}
```

**⏱️ Duration:** 473.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 10.24s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1366.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1750340697204@example.com",
    "password": "TestPassword123!",
    "name": "Admin User"
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
    "content-length": "1623",
    "etag": "W/\"657-tixf6HjcLxRaZgLXDCWECGJ6J5c\"",
    "date": "Thu, 19 Jun 2025 13:44:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "user": {
        "id": "bSciv5qoKXWMbhYxbLsg3oPJm3r1",
        "email": "admin-user-1750340697204@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5NywidXNlcl9pZCI6ImJTY2l2NXFvS1hXTWJoWXhiTHNnM29QSm0zcjEiLCJzdWIiOiJiU2NpdjVxb0tYV01iaFl4YkxzZzNvUEptM3IxIiwiaWF0IjoxNzUwMzQwNjk3LCJleHAiOjE3NTAzNDQyOTcsImVtYWlsIjoiYWRtaW4tdXNlci0xNzUwMzQwNjk3MjA0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc1MDM0MDY5NzIwNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ka56-6CwMlFUg0qXpUzmUIbUMPXHrRRjKvRHVSmGrZPYzQuQhU0es71YJU2tsaZF1qtGxqWFWNVIIaq6IZ1LhNw6XxA1VF4-ePgk369SbmoOo9LCokwBA0hzC5Tsi3I9Nh7yh0pqZWFfPzwXxpYyfxUv3g6kMrgxCxOPjxbGa48KeIZXqAyNr9bbuaAdrvughj5lFmZnOXoI0u2LpIeNTC05aGJCSB0exJe6ZJBbo1RqqPdlBsVn02m7dKefhcGAW0EOP6SC37QoSIMqP4oVDzoIfFaf99S6wtNlP7qH-tpCxgF-2Q9wSZ74IP4mStCIfP87Q07ZFoARE8A9NqU9pA",
        "refreshToken": "AMf-vBy-shBma_eggbVtwdIBh2HrgMWI9xiPqWC7MhOKpdxWU_sGyr3iXSi0PdWlREPA0FlVxSTDeIeJJxZ-Elliv0bUtlEt_XBK0ZJlNSQIWC87SkelR3KrsxnvJ6UyfsEadxRCl7xq_mLOYzAp9GXRH2EsWQ_6jJ8l0B8k4wSkwJ1fp4-fZ2ry0VOSDI_Kf8Y7TFaAoS_gaTC_gBT5Cv_twTR8hqyTJwTX11me6FW5cg-QHmm-HV0",
        "expiresIn": "3600"
      }
    },
    "message": "auth.register.success ({\"email\":\"admin-user-1750340697204@example.com\"})",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:44:58.559Z",
      "messageKey": "auth.register.success"
    }
  }
}
```

**⏱️ Duration:** 1366.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (781.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
    "userId": "bSciv5qoKXWMbhYxbLsg3oPJm3r1",
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
    "content-length": "397",
    "etag": "W/\"18d-C4yteFv4SwOLKXkmHRN9ljxFNgU\"",
    "date": "Thu, 19 Jun 2025 13:44:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "fecebfe2-04d0-4285-8987-bfa2fd8c0c91",
      "userId": "bSciv5qoKXWMbhYxbLsg3oPJm3r1",
      "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-19T13:44:59.270Z",
      "updatedAt": "2025-06-19T13:44:59.270Z"
    },
    "message": "common.created",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:44:59.326Z",
      "messageKey": "common.created"
    }
  }
}
```

**⏱️ Duration:** 781.7 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1360.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1750340699353@example.com",
    "password": "TestPassword123!",
    "name": "Manager User"
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
    "content-length": "1635",
    "etag": "W/\"663-iDo+ztbqM4wSSHtdFWibK3TXdnY\"",
    "date": "Thu, 19 Jun 2025 13:45:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "user": {
        "id": "0iCZrUWIX7gxWSOOl2u8gT63Dsk2",
        "email": "manager-user-1750340699353@example.com",
        "name": "Manager User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDcwMCwidXNlcl9pZCI6IjBpQ1pyVVdJWDdneFdTT09sMnU4Z1Q2M0RzazIiLCJzdWIiOiIwaUNaclVXSVg3Z3hXU09PbDJ1OGdUNjNEc2syIiwiaWF0IjoxNzUwMzQwNzAwLCJleHAiOjE3NTAzNDQzMDAsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NTAzNDA2OTkzNTNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NTAzNDA2OTkzNTNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OrCrx4ZTwWGkOq1EhuAcT6QSGB-KHSmFwAIN9EG9Cko_e0VYa6AeElNkswo56ufy1NeB0XtruqXdshRAbRZDd93P1UxGZZw9XcxE1ULredvnXTJVnRf4nG2yA-iY4iytFJ2-iOH49EinVmv4Z9HQvSq0YQlaNNwJTjzmhvc5uyQC5r_wMEB9vsPqUZuFUZrOeUMEkVkRwJHAl1SM4UTvM_lbdtKK9IM6n6e-rlfky_nPbmHhE4-V6PAzi9gEWzFYNhFshL0XSv6QIw-YIc4vWAbpfF6VqF7EbUQdjzgERLCjRb3SI1JW_hA3Ys01ivPj2wfobhdqrZ3XEf6-Pb3ktg",
        "refreshToken": "AMf-vBzuZhMM094-nWAAu073iFZUSTCqBIlesbk9yVhpSlmsVt1ZkxvK2orqbufD7gO7KAUmPCnv7iImutmGw_dQl9YHn_KJy4ElFYTBX-2LFSGUr8IPbsu_xQpKL8MVicb_wTEQqnHouktJKRNqf6KUbDlNqSEiLgChepNrU9XESXF54GW31tklSTn7WUAO2sD14L231TRBuj06n9sX9diTK1dovd0UedYIdmADhcQeytiubW1wOT4",
        "expiresIn": "3600"
      }
    },
    "message": "auth.register.success ({\"email\":\"manager-user-1750340699353@example.com\"})",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:00.708Z",
      "messageKey": "auth.register.success"
    }
  }
}
```

**⏱️ Duration:** 1360.1 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (707.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
    "userId": "0iCZrUWIX7gxWSOOl2u8gT63Dsk2",
    "role": "manager"
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
    "content-length": "399",
    "etag": "W/\"18f-iP5Ax6EIX2/MvREP/FYafC8nK/E\"",
    "date": "Thu, 19 Jun 2025 13:45:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "7bd3c0ce-c1bd-4717-adfc-99c653d7e95b",
      "userId": "0iCZrUWIX7gxWSOOl2u8gT63Dsk2",
      "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-19T13:45:01.361Z",
      "updatedAt": "2025-06-19T13:45:01.361Z"
    },
    "message": "common.created",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:01.418Z",
      "messageKey": "common.created"
    }
  }
}
```

**⏱️ Duration:** 707.3 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1139.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1750340701423@example.com",
    "password": "TestPassword123!",
    "name": "Moderator User"
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
    "content-length": "1667",
    "etag": "W/\"683-pri7TpPqYnW7hhIUIJZechSum14\"",
    "date": "Thu, 19 Jun 2025 13:45:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "user": {
        "id": "owfrHECTfyQMXj7yZQOxM05SOxg1",
        "email": "moderator-user-1750340701423@example.com",
        "name": "Moderator User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDcwMSwidXNlcl9pZCI6Im93ZnJIRUNUZnlRTVhqN3laUU94TTA1U094ZzEiLCJzdWIiOiJvd2ZySEVDVGZ5UU1Yajd5WlFPeE0wNVNPeGcxIiwiaWF0IjoxNzUwMzQwNzAxLCJleHAiOjE3NTAzNDQzMDEsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc1MDM0MDcwMTQyM0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzUwMzQwNzAxNDIzQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LcsxQKup3A5toVDs3Df8aCZO9UqdpLhZ8_nHWDxGR3Xuc9JSFj5G5onzzdDyjMRFPXi6Esq1zx0epeWPdXUj_u78dPjzlLUlzlTCcs7RUPam7NU75x4eHcHX6-gKfLbbRq-Lv2787bCmsMYPXVHtEJxWck7o0ZniZlOpEkpR-P9S7V77NJeZPrYEZq2hUlAxW4doX8JnbfBpOmew4bf6GL7LXS7WGvZ-7-fgxANzoPcMuPcVspPgqpZ6aqf9VmRuu48pNHWbylr_sE6jp4Zjqa_R-zH2_iE6m_s0Cgart4KiGYkkAAKzxs0b4IBWlngKRWoWBJrPQPAf-Mqbko62Fg",
        "refreshToken": "AMf-vBxOvT_3CiqWiTux1u9oGFTEZda5HsD8VwmgvBu-XBlN_kFl-q4Qi_dZ_dHmqHCoLXEQSStMnKS3FflEGMyqWHTt0wCECZNXiFg9CJS1Zh-1AnslWP34bNqb6OXOLv4VDRNzDOb4CTC45AmLGKZ3S0jI_MfZz82T1zs1tVgrKSzHBBXnJiKjT7fjmfbRr7asSO20ML69C64rmaS7tOjzHxXarggTG3T4p5UFioSyeK3DfdDDgP0HO5kixg-WFJOEOGGCVGaM",
        "expiresIn": "3600"
      }
    },
    "message": "auth.register.success ({\"email\":\"moderator-user-1750340701423@example.com\"})",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:02.554Z",
      "messageKey": "auth.register.success"
    }
  }
}
```

**⏱️ Duration:** 1139.4 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (713.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
    "userId": "owfrHECTfyQMXj7yZQOxM05SOxg1",
    "role": "moderator"
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
    "content-length": "401",
    "etag": "W/\"191-TdA8vNu+Syw5pENozQ+rzBaNU8c\"",
    "date": "Thu, 19 Jun 2025 13:45:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "9a07bf75-dc64-4321-9920-f7cde7e0106a",
      "userId": "owfrHECTfyQMXj7yZQOxM05SOxg1",
      "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-19T13:45:03.210Z",
      "updatedAt": "2025-06-19T13:45:03.210Z"
    },
    "message": "common.created",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:03.266Z",
      "messageKey": "common.created"
    }
  }
}
```

**⏱️ Duration:** 713.3 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1338.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1750340703276@example.com",
    "password": "TestPassword123!",
    "name": "Volunteer User"
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
    "content-length": "1667",
    "etag": "W/\"683-SrjMkHeaWStql/sP+sFbzEPnjqY\"",
    "date": "Thu, 19 Jun 2025 13:45:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "user": {
        "id": "eB0fqbTXvlZKXS4Q5q7XSx6P4TE3",
        "email": "volunteer-user-1750340703276@example.com",
        "name": "Volunteer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDcwMywidXNlcl9pZCI6ImVCMGZxYlRYdmxaS1hTNFE1cTdYU3g2UDRURTMiLCJzdWIiOiJlQjBmcWJUWHZsWktYUzRRNXE3WFN4NlA0VEUzIiwiaWF0IjoxNzUwMzQwNzAzLCJleHAiOjE3NTAzNDQzMDMsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc1MDM0MDcwMzI3NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzUwMzQwNzAzMjc2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.RJE4REWvvH1erCYf2qgYoiFP9CDTRZGoS9PaA6bZvi2yafmoVBw6ve-rQelUO1X19No-dz7HhbVkFPeFRek-nqQ04qyz5ABRd-sIQfqPdg2nxDAdE5ePrNx8ueLB_CakVlwXSmTGsLc6XZyy7SLkHPtRxPjSiynHv2UNUjAWpgOwbNyuOk2KRVM6nlQGpV_2Bj0Nqf4cC7TpJFo85AeWm2NX1YuMZNGbFO13SmwdsviokXC45x9k2U-GGCo_y7EHSp9cY8XTQEsTN0cVfchJzOpdEbIfAfmEBDBHNWFTcRlLdFrE-C8k--FmaDA_msgWvs1pnyKjQUum1pVTxXWunQ",
        "refreshToken": "AMf-vBxlYmh8Y5JAj2QnvynCCYEKLPdZ5RnKM89Ie_fIsPqB5GnxdUr2lbk67dQTVHRX0RcaAIEAQXqENX9F6RZwKFGiWgHAX-zwcg4Y9BVGALJVZtmP7Rtk2l1ugryukTCBmB26cbxzWo78XvpM-cH3e7RKBqoGz6ffxaH_IL6q_Tyj-ZOGBuDjwCHnQKwTmRsG1z_Kdj5FiDBJBgN-hh-pdCJSFlmfsnoiT_qnrUt49qoC1_EiYga1J8vK-Kw49zoMGcUTUdD_",
        "expiresIn": "3600"
      }
    },
    "message": "auth.register.success ({\"email\":\"volunteer-user-1750340703276@example.com\"})",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:04.604Z",
      "messageKey": "auth.register.success"
    }
  }
}
```

**⏱️ Duration:** 1338.8 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (827.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
    "userId": "eB0fqbTXvlZKXS4Q5q7XSx6P4TE3",
    "role": "volunteer"
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
    "content-length": "401",
    "etag": "W/\"191-V3yfa6kM9/o5rCze6tPJ5Bv59qQ\"",
    "date": "Thu, 19 Jun 2025 13:45:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "9388018b-747f-4652-951d-0b59621c1224",
      "userId": "eB0fqbTXvlZKXS4Q5q7XSx6P4TE3",
      "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-19T13:45:05.377Z",
      "updatedAt": "2025-06-19T13:45:05.377Z"
    },
    "message": "common.created",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:05.435Z",
      "messageKey": "common.created"
    }
  }
}
```

**⏱️ Duration:** 827.5 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1242.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1750340705443@example.com",
    "password": "TestPassword123!",
    "name": "Observer User"
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
    "content-length": "1640",
    "etag": "W/\"668-HRB1dtxyCrPsAUgWS9sys2dKGQU\"",
    "date": "Thu, 19 Jun 2025 13:45:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "user": {
        "id": "1XdGa1Zu68ODSJZpIJZ6vhGjNgh2",
        "email": "observer-user-1750340705443@example.com",
        "name": "Observer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDcwNSwidXNlcl9pZCI6IjFYZEdhMVp1NjhPRFNKWnBJSlo2dmhHak5naDIiLCJzdWIiOiIxWGRHYTFadTY4T0RTSlpwSUpaNnZoR2pOZ2gyIiwiaWF0IjoxNzUwMzQwNzA1LCJleHAiOjE3NTAzNDQzMDUsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzUwMzQwNzA1NDQzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc1MDM0MDcwNTQ0M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F38AXDuB4FrMtJYEAwHyL4g9oIGApeMYymaDhTRw6uPYNs3cxvdPWnPeUTBLhSe7vHGhFq6MtlHTuthdGOj90EhmDNdpuHO0OFRKTvhkkKNDT4c1irRR7kBcfozZhL7qkKaEd1bmU0Ivwpa43ms2oBx6gzxJHH-nn2ECXHO0bJjJMAnn0ouP8mmqgoojL5a_GkOREJLOENfoVkaiA0RPexKSq5HAvTYHaiHuSHNdbK_jygHVYvnO0NdNllprg9UdUW88IBUZ5vtggEFwBuOYy-hnOcnH0ri4IGIYb0MdCF5EzcvNlAwfMsm7iJ_9dUJPw6XK-Zq6JdYrEitaScl3dA",
        "refreshToken": "AMf-vBwBbV9y1bmJFLxY61Wg2S55JumKfmTnoEK6JLSzXiwvk5GGZJ0hBQSTkL3iWZYDsF9UGcFOKOqd2q3sioO7XAlSymOZmf1wuJWwkTo7b0O-sIqmn4AZgfDz52kcL9WbvNkgpLC8cnMpSMT6cNlgcGFJ2JSzMAQqhT--aPJHLXOTHtV6MHybUFO4N7f6wQIJ5wtTUg4cYeXkcPrgE1OWY_x82P3hvZu7iBt6PaVJ1PSbcQgBxE4",
        "expiresIn": "3600"
      }
    },
    "message": "auth.register.success ({\"email\":\"observer-user-1750340705443@example.com\"})",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:06.674Z",
      "messageKey": "auth.register.success"
    }
  }
}
```

**⏱️ Duration:** 1242.2 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (755.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
    "userId": "1XdGa1Zu68ODSJZpIJZ6vhGjNgh2",
    "role": "observer"
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
    "content-length": "400",
    "etag": "W/\"190-FrbjA27bQvJ+Tr8DrcvqQycX+mw\"",
    "date": "Thu, 19 Jun 2025 13:45:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "c2876874-5350-49f9-b217-374049b04b6f",
      "userId": "1XdGa1Zu68ODSJZpIJZ6vhGjNgh2",
      "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-19T13:45:07.364Z",
      "updatedAt": "2025-06-19T13:45:07.364Z"
    },
    "message": "common.created",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:07.422Z",
      "messageKey": "common.created"
    }
  }
}
```

**⏱️ Duration:** 755.7 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.74s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=39c188d4-509d-4e60-947c-9c4a1f7be695 (739.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
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
    "content-length": "1639",
    "etag": "W/\"667-Yww9XW5ZLor1sS0mtR1r5bzCGsY\"",
    "date": "Thu, 19 Jun 2025 13:45:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "026e88f8-8d30-464a-82b8-ac4020206f7b",
        "userId": "2kNARjY6H1XagagRgOQPYZhwuIp2",
        "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-19T13:44:54.605Z",
        "updatedAt": "2025-06-19T13:44:54.605Z"
      },
      {
        "id": "fecebfe2-04d0-4285-8987-bfa2fd8c0c91",
        "userId": "bSciv5qoKXWMbhYxbLsg3oPJm3r1",
        "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-19T13:44:59.270Z",
        "updatedAt": "2025-06-19T13:44:59.270Z"
      },
      {
        "id": "7bd3c0ce-c1bd-4717-adfc-99c653d7e95b",
        "userId": "0iCZrUWIX7gxWSOOl2u8gT63Dsk2",
        "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-19T13:45:01.361Z",
        "updatedAt": "2025-06-19T13:45:01.361Z"
      },
      {
        "id": "9a07bf75-dc64-4321-9920-f7cde7e0106a",
        "userId": "owfrHECTfyQMXj7yZQOxM05SOxg1",
        "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-19T13:45:03.210Z",
        "updatedAt": "2025-06-19T13:45:03.210Z"
      },
      {
        "id": "9388018b-747f-4652-951d-0b59621c1224",
        "userId": "eB0fqbTXvlZKXS4Q5q7XSx6P4TE3",
        "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-19T13:45:05.377Z",
        "updatedAt": "2025-06-19T13:45:05.377Z"
      },
      {
        "id": "c2876874-5350-49f9-b217-374049b04b6f",
        "userId": "1XdGa1Zu68ODSJZpIJZ6vhGjNgh2",
        "organizationId": "39c188d4-509d-4e60-947c-9c4a1f7be695",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-19T13:45:07.364Z",
        "updatedAt": "2025-06-19T13:45:07.364Z"
      }
    ],
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:08.175Z",
      "messageKey": null
    }
  }
}
```

**⏱️ Duration:** 739.8 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.75s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (750.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
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
    "content-length": "76766",
    "etag": "W/\"12bde-gVDfPVsBDBdyYqEPK1xWbMUxV0I\"",
    "date": "Thu, 19 Jun 2025 13:45:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "7b280413-3cc7-459f-a7e7-a66752f76fa2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "7b21255d-f0eb-40b6-9e1d-61f46f132155",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:09:04.455Z",
        "updatedAt": "2025-06-18T17:09:04.455Z"
      },
      {
        "id": "8bb741f3-6710-46c9-8520-f06e1196ac6e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f0d8207d-c4f0-4d20-b329-2513641d6180",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:40:52.267Z",
        "updatedAt": "2025-06-18T17:40:52.267Z"
      },
      {
        "id": "b5532daf-7aaf-4bc7-aae6-ac782c7d440b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "57429d6e-0c1e-4c62-9f13-2900ed9029d3",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:47:07.326Z",
        "updatedAt": "2025-06-18T17:47:07.326Z"
      },
      {
        "id": "5664dc5c-29e2-4b6c-8db3-a1710ddb8544",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5eef8462-1204-4755-a3d5-5e22a8fda093",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:47:40.026Z",
        "updatedAt": "2025-06-18T17:47:40.026Z"
      },
      {
        "id": "0a36f4bc-15f8-45ec-b7d5-4147c013ba6d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1ef095ca-a19e-4d1b-a73d-3eee1f295c7b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:48:14.716Z",
        "updatedAt": "2025-06-18T17:48:14.716Z"
      },
      {
        "id": "b8cb7c1f-9af1-4cd0-b6fe-1f50ac6815f6",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a427de6d-675a-48b2-9adc-6124f2b963ca",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:48:15.327Z",
        "updatedAt": "2025-06-18T17:48:15.327Z"
      },
      {
        "id": "e9e0a8f5-98f6-4120-8bcb-05e51f73aa8c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "607e87a5-f38f-4914-ae7e-feb8f98664be",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:02:01.472Z",
        "updatedAt": "2025-06-18T18:02:01.472Z"
      },
      {
        "id": "70ee3e6b-59c9-4b44-9204-f7e8ecc9e3ab",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e7f8de2b-a4b1-473e-9f49-39b6677a45e4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-15T19:33:58.241Z",
        "updatedAt": "2025-06-15T19:33:58.241Z"
      },
      {
        "id": "3b81e337-9942-4975-8685-a61097aa6328",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0ec7ab83-814d-445f-afd0-1aaf9bffb87e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-15T19:33:59.719Z",
        "updatedAt": "2025-06-15T19:33:59.719Z"
      },
      {
        "id": "e3b396b1-91a8-403a-823b-bb1422e38752",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "61bf58d4-eabf-46fc-b10c-1e8d506b88a4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-15T21:10:11.527Z",
        "updatedAt": "2025-06-15T21:10:11.527Z"
      },
      {
        "id": "6c8d16e0-50b2-46f7-94ee-c26bee78a510",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e7889943-221a-4777-96e1-9950a7a1fac7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:42:14.484Z",
        "updatedAt": "2025-06-18T17:42:14.484Z"
      },
      {
        "id": "72cab305-378c-4506-b9e0-f8b22d6fb5f6",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "18ebac7c-56cf-4e0c-89bc-2d1a4d5b785e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:55:57.611Z",
        "updatedAt": "2025-06-18T17:55:57.611Z"
      },
      {
        "id": "2f8942e2-6bd0-4394-9c18-8755e932ef68",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e35f7318-3916-49fa-9e09-a49eb7016e77",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:56:14.964Z",
        "updatedAt": "2025-06-18T17:56:14.964Z"
      },
      {
        "id": "2dfe89d3-4956-44f1-9dd0-069b35a41ded",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "443a469e-d958-4589-80d3-e5fcf92eb6d7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:56:30.958Z",
        "updatedAt": "2025-06-18T17:56:30.958Z"
      },
      {
        "id": "f84d17de-917b-4740-b557-14f4dfba4ee9",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "8a5857ab-b49b-4b7b-991a-a4f97ae4a55d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:56:42.414Z",
        "updatedAt": "2025-06-18T17:56:42.414Z"
      },
      {
        "id": "4d49a363-22d7-40b5-96e8-1a76c102d379",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5d1a1848-a445-4147-8ac4-8220177c2413",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:56:53.118Z",
        "updatedAt": "2025-06-18T17:56:53.118Z"
      },
      {
        "id": "ef23ed47-25da-44d4-b706-1689a96d1d10",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "fb283a06-c468-4d78-a176-0b0284a343fd",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:57:07.959Z",
        "updatedAt": "2025-06-18T17:57:07.959Z"
      },
      {
        "id": "f1295022-6d1d-421f-b399-a12e42a63e21",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f3ec7a12-efaf-4fab-bab4-de81990905d1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:57:23.466Z",
        "updatedAt": "2025-06-18T17:57:23.466Z"
      },
      {
        "id": "e4de9d65-611b-4275-9517-5776f9c084ee",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ded0f16c-e286-4b6b-9b75-6182b61dbc53",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:57:24.144Z",
        "updatedAt": "2025-06-18T17:57:24.144Z"
      },
      {
        "id": "aa893d8c-5a00-44f5-a1ab-2b91ae497947",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4221cdb5-32d2-495c-8cfe-4a7f713e04e7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:57:50.196Z",
        "updatedAt": "2025-06-18T17:57:50.196Z"
      },
      {
        "id": "3ab12706-2681-437b-be89-8a0ed49d48c7",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "087cf584-1de4-4522-a9c5-2f47d1a6e5f8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:57:50.872Z",
        "updatedAt": "2025-06-18T17:57:50.872Z"
      },
      {
        "id": "0749494e-5570-45cd-a1eb-862f32e2a144",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "14a65ee7-d3d2-48f9-a2ad-622c3adca440",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:02:14.698Z",
        "updatedAt": "2025-06-18T18:02:14.698Z"
      },
      {
        "id": "69475bab-36cd-4d6d-a6c5-7d6c07e89fe2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "268739ee-b6ad-4a0f-bf54-ac0e8127d38c",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:02:26.555Z",
        "updatedAt": "2025-06-18T18:02:26.555Z"
      },
      {
        "id": "d4c8dba5-b48b-43b5-9f46-34febad7623c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a68ddb60-6646-481a-830c-d11e248141af",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:02:37.576Z",
        "updatedAt": "2025-06-18T18:02:37.576Z"
      },
      {
        "id": "efffb024-cb0b-43cb-8612-b43a34b017db",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5b2fee14-7226-47d0-8da7-2064a2d800c6",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:02:38.128Z",
        "updatedAt": "2025-06-18T18:02:38.128Z"
      },
      {
        "id": "dd1a29ca-68bf-43c1-a53d-2faeb09c4a48",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "2d6659a0-4dc0-4d3f-af51-a3a89a2978e7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:02:47.144Z",
        "updatedAt": "2025-06-18T18:02:47.144Z"
      },
      {
        "id": "dc47d42a-c554-4bb9-8938-33d36ab5ad2e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "b3be3cdf-4b46-4efa-8fca-67d61a0cb487",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:03:25.858Z",
        "updatedAt": "2025-06-18T18:03:25.858Z"
      },
      {
        "id": "424df3cf-18e8-4d58-916f-701dd76eb784",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1d1da53d-a030-4b0b-b0cb-85423be5c4c0",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:03:36.169Z",
        "updatedAt": "2025-06-18T18:03:36.169Z"
      },
      {
        "id": "88f5abaa-002d-4ff9-9cff-dd68ecabfc7b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f5c41b00-4b3d-46a7-9925-81f88a572fb8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:03:47.506Z",
        "updatedAt": "2025-06-18T18:03:47.506Z"
      },
      {
        "id": "2c2d89f0-f03a-4b3f-adc9-d1ae430270a1",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4ee68195-3eb2-4903-8ea7-f029d23acd39",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:33:27.454Z",
        "updatedAt": "2025-06-18T17:33:27.454Z"
      },
      {
        "id": "c22ab486-d95d-4aa0-b843-cd4fa2bd087d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "84342201-7cd0-400e-b401-7450f63272e5",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:45:36.642Z",
        "updatedAt": "2025-06-18T17:45:36.642Z"
      },
      {
        "id": "192fff1a-08c3-46df-b295-50af082713bf",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "b96c523c-a49c-427c-bed7-7aa4f7c66efc",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:57:58.675Z",
        "updatedAt": "2025-06-18T17:57:58.675Z"
      },
      {
        "id": "ab043c74-2765-49b4-98b4-2760b58a1f8f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "7e8e20b0-5596-44c7-9c4c-b075acac1477",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:57:59.384Z",
        "updatedAt": "2025-06-18T17:57:59.384Z"
      },
      {
        "id": "767dddaa-fc6e-4586-9640-2856bfbf1efe",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ac30fbdb-d85b-4835-adae-64c532426e15",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:58:08.010Z",
        "updatedAt": "2025-06-18T17:58:08.010Z"
      },
      {
        "id": "400b3df5-caed-474f-9dab-9627b526233d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "cdbbc320-9dfd-41bb-ab41-8f830e473998",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:58:08.768Z",
        "updatedAt": "2025-06-18T17:58:08.768Z"
      },
      {
        "id": "b87f2b32-4419-45fa-b752-e4bc1583991d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "696a80d4-5448-495f-a011-1616e987e0b3",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:58:13.790Z",
        "updatedAt": "2025-06-18T17:58:13.790Z"
      },
      {
        "id": "3d672dc2-3b0e-434a-a724-6c626de06d61",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "dfacbc6a-076f-41a8-a476-9ed82a38332c",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:58:14.403Z",
        "updatedAt": "2025-06-18T17:58:14.403Z"
      },
      {
        "id": "fca41e90-8d8b-48d9-81d7-e80cd501b1ec",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5b711d58-41e1-42ad-9b5d-f7d154e5c71a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:58:28.952Z",
        "updatedAt": "2025-06-18T17:58:28.952Z"
      },
      {
        "id": "f367cab4-d224-48a2-9c95-8047b0e32754",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9bdb779a-8c9c-4094-9333-22d150accd91",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:58:29.553Z",
        "updatedAt": "2025-06-18T17:58:29.553Z"
      },
      {
        "id": "7e69f9d2-eb56-4579-af0d-fe296dcce3b8",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a5b6d0b8-de33-4028-a9e8-1c8355c5e177",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:58:40.999Z",
        "updatedAt": "2025-06-18T17:58:40.999Z"
      },
      {
        "id": "ee867b6a-43b0-45aa-b455-de30c0f0e61f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "716d3659-da85-453a-8ff7-d7af1044cc33",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:58:55.333Z",
        "updatedAt": "2025-06-18T17:58:55.333Z"
      },
      {
        "id": "ba6fd498-6c27-4f3a-be99-1152d81eb64a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "268d250f-a1fd-4987-9e29-e7ab8c80f9a4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:59:18.022Z",
        "updatedAt": "2025-06-18T17:59:18.022Z"
      },
      {
        "id": "1b5af29f-4e10-4681-b725-b42a4f640a9a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "51a47a25-89e2-4705-8593-d5d2493aa991",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:59:27.892Z",
        "updatedAt": "2025-06-18T17:59:27.892Z"
      },
      {
        "id": "70dd74af-68d9-4959-9a4d-73698be81d07",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1cab4bb6-691e-45da-a362-4177abf548f4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:59:40.459Z",
        "updatedAt": "2025-06-18T17:59:40.459Z"
      },
      {
        "id": "f2d75ee0-2756-407a-b639-f9e9eb3b7baf",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3d25167e-cde6-42d4-84bf-1c88aee37049",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:59:53.606Z",
        "updatedAt": "2025-06-18T17:59:53.606Z"
      },
      {
        "id": "82e8e5ac-5b3c-4d23-bcce-5c0077897a55",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "b02e1f4f-8cf1-4fc8-b961-0fb9e8b275d5",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:00:05.446Z",
        "updatedAt": "2025-06-18T18:00:05.446Z"
      },
      {
        "id": "c4f2b907-8055-4c3b-894a-3a313a11b736",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "cc739598-83fb-4b69-b064-3c996250d3e6",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:00:06.043Z",
        "updatedAt": "2025-06-18T18:00:06.043Z"
      },
      {
        "id": "8d8a8ee3-799d-48e9-93d7-5b76be0db9c8",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "578a847a-8361-47f0-a025-ba7fcfdee3c7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:00:31.594Z",
        "updatedAt": "2025-06-18T18:00:31.594Z"
      },
      {
        "id": "ef9a857b-51db-44b8-996b-769438e626f9",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "10e962e0-7803-4ef9-9924-80aefa4a3dc8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:04:07.429Z",
        "updatedAt": "2025-06-18T18:04:07.429Z"
      },
      {
        "id": "89d842f8-7471-4963-83df-e3ce2682a61d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c92187c2-a1bb-4aa0-a172-55692a9d650d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:04:20.528Z",
        "updatedAt": "2025-06-18T18:04:20.528Z"
      },
      {
        "id": "615a4db3-3a6e-4412-8135-f443cfe2443a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "649cd6ee-1cd0-4e90-9abb-9117f6dc89b8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:04:42.948Z",
        "updatedAt": "2025-06-18T18:04:42.948Z"
      },
      {
        "id": "b54968d0-4cce-4354-a444-766f0d8f9854",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "652515d2-620e-4e0a-9b82-a691302e2160",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-17T19:00:11.174Z",
        "updatedAt": "2025-06-17T19:00:11.174Z"
      },
      {
        "id": "8a7d4ae9-7cc2-4050-8374-356444e5d27a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9dd80037-45b3-41ab-870c-c5c0c4ed2080",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:34:07.218Z",
        "updatedAt": "2025-06-18T17:34:07.218Z"
      },
      {
        "id": "a17c1892-e8d8-4a35-97e9-80d483c59dc5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d9385262-1d6a-4d22-81bf-0e720b83cd2b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T17:46:27.909Z",
        "updatedAt": "2025-06-18T17:46:27.909Z"
      },
      {
        "id": "5bafe97c-8f2e-4a1e-8e80-e626978a9fa5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a82f6187-ed0e-44af-ae2f-1815da65225d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:00:52.224Z",
        "updatedAt": "2025-06-18T18:00:52.224Z"
      },
      {
        "id": "d9f0e4fe-a0d8-4559-b111-46a37026fd8c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e4ce3d59-1a29-4e63-81c5-afb217ca26d1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:00:52.907Z",
        "updatedAt": "2025-06-18T18:00:52.907Z"
      },
      {
        "id": "79b88244-4cae-46cc-a51b-0a78ba58a2bd",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d0ed356d-1f91-4eaf-9fa5-d182b19bcad7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:01:10.818Z",
        "updatedAt": "2025-06-18T18:01:10.818Z"
      },
      {
        "id": "59345863-cdf4-4493-8b04-d7827978e563",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "6fd9d89c-7924-4f29-85c1-03ff84f0ac11",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:01:28.184Z",
        "updatedAt": "2025-06-18T18:01:28.184Z"
      },
      {
        "id": "c2cc9ec7-74c6-4a35-8780-88c5b80d1aa8",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "7c8c499c-3d1b-48b9-9617-8c8b5ec40e75",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:01:44.577Z",
        "updatedAt": "2025-06-18T18:01:44.577Z"
      },
      {
        "id": "dabc3f72-7757-40dd-9ac3-6b6fd6a43949",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "fa85794d-5954-41db-92b9-12f58ed101ba",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:04:58.300Z",
        "updatedAt": "2025-06-18T18:04:58.300Z"
      },
      {
        "id": "d16a6024-e5e2-4de3-acbd-dcc9227baa49",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "76d04254-b263-4e64-8a1b-7d2dcad18029",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:05:12.171Z",
        "updatedAt": "2025-06-18T18:05:12.171Z"
      },
      {
        "id": "7babd569-4a76-4f60-8ce0-94028fae5e1c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d5660b1b-58e5-4609-b8f0-31ef47fd1257",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:05:27.168Z",
        "updatedAt": "2025-06-18T18:05:27.168Z"
      },
      {
        "id": "91c71b02-6aaf-43a3-bfde-02a4eadde84d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e1de7065-cabd-4f5f-9db4-fc509c68aab0",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:05:27.838Z",
        "updatedAt": "2025-06-18T18:05:27.838Z"
      },
      {
        "id": "60ffccc3-0d62-45e3-8f89-865430d319f1",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "8ffb1a9e-1dda-4820-9083-0c0dda9ad84d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:05:36.001Z",
        "updatedAt": "2025-06-18T18:05:36.001Z"
      },
      {
        "id": "4804865d-d73a-46b1-b5ff-2a35cdd4e420",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "96ce5c69-4acb-427c-9c82-0bb8f66e9555",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:05:36.548Z",
        "updatedAt": "2025-06-18T18:05:36.548Z"
      },
      {
        "id": "a63a3a1b-6fcb-4627-b2ed-9a034af53e85",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "478cd91f-9f4b-4629-9123-8c581aa5f350",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:05:45.096Z",
        "updatedAt": "2025-06-18T18:05:45.096Z"
      },
      {
        "id": "8ce1c7c7-ed50-454b-a6a7-b8bf89e1260c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "109e8d6b-7900-4cb5-a931-195e8309cf8d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:05:55.199Z",
        "updatedAt": "2025-06-18T18:05:55.199Z"
      },
      {
        "id": "2efeb9a4-06c9-40db-a78a-5fea654d6d05",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "2c6d108b-54bf-4509-8cd0-a3b1ef7803a1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:06:05.050Z",
        "updatedAt": "2025-06-18T18:06:05.050Z"
      },
      {
        "id": "4d028726-d96c-4df2-ad6d-e3368b69e5e8",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c17c453a-ffe5-434c-ace3-bab00fe7b9db",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:06:05.690Z",
        "updatedAt": "2025-06-18T18:06:05.690Z"
      },
      {
        "id": "34c038e1-b848-4941-b6bf-6f67183535c4",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "8a545798-30a6-4b98-86c3-9a4970817116",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:26:12.672Z",
        "updatedAt": "2025-06-18T18:26:12.672Z"
      },
      {
        "id": "0ca002bc-be68-45ff-b734-d9720b763e51",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3c75718a-011b-45ba-b15a-45d0de97f7e5",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:26:13.272Z",
        "updatedAt": "2025-06-18T18:26:13.272Z"
      },
      {
        "id": "5dba6980-a919-403d-90db-4a14f9a62e0c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "6de26871-40c3-4037-a35d-8c7c2f6d62c2",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:26:39.342Z",
        "updatedAt": "2025-06-18T18:26:39.342Z"
      },
      {
        "id": "eec0ac86-c974-45e2-9cdb-3cb4d23ddd50",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "81171e64-1f41-4aa5-8531-282a260dac05",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:26:40.032Z",
        "updatedAt": "2025-06-18T18:26:40.032Z"
      },
      {
        "id": "b8e8eaac-54fb-4d66-9354-7e2c4a042ebd",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f4e90d55-03ce-4178-a0c2-82d7459eebf9",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:26:48.376Z",
        "updatedAt": "2025-06-18T18:26:48.376Z"
      },
      {
        "id": "fda3b728-3038-4c56-b79a-6ad1d56e964e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ed64eeec-e3c7-491d-b9e9-318e495c488f",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:26:49.039Z",
        "updatedAt": "2025-06-18T18:26:49.039Z"
      },
      {
        "id": "f0f71fb0-8337-4c4f-a08a-f253df384a36",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "90ecea48-75a0-4a76-b768-ed995c30bffb",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:26:57.780Z",
        "updatedAt": "2025-06-18T18:26:57.780Z"
      },
      {
        "id": "97bb6ba3-26af-483b-9e5b-e18d97c848d4",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "91273472-a4d7-4521-9c1a-69df743237fc",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:26:58.330Z",
        "updatedAt": "2025-06-18T18:26:58.330Z"
      },
      {
        "id": "6dc3857d-5afe-49fe-8be7-58fc0878eb59",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "6cde9f2a-2609-4570-a540-91c008008021",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:27:04.559Z",
        "updatedAt": "2025-06-18T18:27:04.559Z"
      },
      {
        "id": "d5a5d175-27d2-4677-b42c-1e0019a0a205",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "2f7c18e5-ff6d-4766-999a-6108b8dfd132",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:27:05.217Z",
        "updatedAt": "2025-06-18T18:27:05.217Z"
      },
      {
        "id": "a1c650bc-ab7f-4be7-9ccf-6e6ffcf19c80",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "7e6de44a-9ecd-4352-a954-a5fd8fba8fe6",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:27:19.218Z",
        "updatedAt": "2025-06-18T18:27:19.218Z"
      },
      {
        "id": "51f40634-66e4-473a-879b-55c81956e950",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0fd3e4a7-aa93-4b95-8530-c5ba9a1e969b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:27:19.775Z",
        "updatedAt": "2025-06-18T18:27:19.775Z"
      },
      {
        "id": "8a5d8b83-557b-4b5d-ba0b-738adc975b5b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "006fb244-057d-463c-8d8b-139182e61ffd",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:27:32.392Z",
        "updatedAt": "2025-06-18T18:27:32.392Z"
      },
      {
        "id": "d12db12f-da05-497d-965c-af9d5985b3bd",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "58f6eb00-7a22-4f05-8731-c5a417c3faa1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:27:33.524Z",
        "updatedAt": "2025-06-18T18:27:33.524Z"
      },
      {
        "id": "a78eff4e-2e9e-49c2-ad3a-e82a05ccf87b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3b697399-e89d-493f-9c8c-88a592d087f1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:27:55.783Z",
        "updatedAt": "2025-06-18T18:27:55.783Z"
      },
      {
        "id": "f6f3f1f7-1fb3-4c53-b387-7a9d28d2c076",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d6352e03-c93c-4c36-a9f2-982c4cf417ee",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:27:56.344Z",
        "updatedAt": "2025-06-18T18:27:56.344Z"
      },
      {
        "id": "ec27ab45-8971-4088-a5e9-f305a6385fd9",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "410dca8b-df4a-4e53-8404-6a7c16a3f631",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:28:15.083Z",
        "updatedAt": "2025-06-18T18:28:15.083Z"
      },
      {
        "id": "497f2131-c941-4cfe-8fab-893110aa2b1e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "b9e19b92-9c5b-4798-8c12-f3dd894df0de",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:28:15.748Z",
        "updatedAt": "2025-06-18T18:28:15.748Z"
      },
      {
        "id": "3ba48541-2072-4e50-931b-cb395f8bfc7b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "8e03af20-0e3d-4973-958c-ba879b0f6189",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:28:26.075Z",
        "updatedAt": "2025-06-18T18:28:26.075Z"
      },
      {
        "id": "9f3a6d89-edd0-40bd-a5ab-2859f2431c12",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "26f970e8-8613-4a6e-9347-ffc28818b16d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:28:26.785Z",
        "updatedAt": "2025-06-18T18:28:26.785Z"
      },
      {
        "id": "d6f27f50-84b1-4dd2-b2f4-0d27be13af5b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d747abdc-d7c4-4df7-818e-9870f11593ad",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:28:35.515Z",
        "updatedAt": "2025-06-18T18:28:35.515Z"
      },
      {
        "id": "22ae2a15-8637-4c97-b7a4-c094626cf108",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9f6c23d7-7c62-4d32-89cd-3aaccc18e240",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:28:36.609Z",
        "updatedAt": "2025-06-18T18:28:36.609Z"
      },
      {
        "id": "e9e740d2-9e9b-45df-8c8c-90cfe2641bb5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5ccc2f11-d8f6-4072-badb-d08b11942fd7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:28:45.634Z",
        "updatedAt": "2025-06-18T18:28:45.634Z"
      },
      {
        "id": "2d85b2c0-3cdf-4e99-b8b9-84982c77e8c9",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "842544f3-abad-46ef-95be-3cea8e4f56dd",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:28:46.311Z",
        "updatedAt": "2025-06-18T18:28:46.311Z"
      },
      {
        "id": "85cd19f1-dbdf-4ad3-8607-ec858e2632f9",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "dcb1ad28-aeb4-425b-a143-5e86d005055b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:30:20.046Z",
        "updatedAt": "2025-06-18T18:30:20.046Z"
      },
      {
        "id": "0b668eeb-90df-49ef-b854-692c1e1f3abe",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "8ad9df6a-aa12-47b6-a4bf-005e7795d406",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:30:33.561Z",
        "updatedAt": "2025-06-18T18:30:33.561Z"
      },
      {
        "id": "41a645ef-dfc6-4ee4-aa94-60bc9ad48329",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "be41c057-95f5-4bcc-93d1-ad9d49bae08b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T18:30:59.517Z",
        "updatedAt": "2025-06-18T18:30:59.517Z"
      },
      {
        "id": "393d16e5-b3eb-4cf7-95c3-582dc0140991",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "dab73e3c-5bb5-4bd2-be3e-1020cd74a5e4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:12:26.117Z",
        "updatedAt": "2025-06-18T19:12:26.117Z"
      },
      {
        "id": "fb80e71a-8208-4eba-8328-fcfd1010677e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "79580b44-c132-4b9f-897c-8b05b898deca",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:12:41.207Z",
        "updatedAt": "2025-06-18T19:12:41.207Z"
      },
      {
        "id": "3d9859df-18e0-4007-9a92-c6b8adbdaa21",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "24b2a2da-94b9-496f-a699-a02e5e54a94f",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:13:07.466Z",
        "updatedAt": "2025-06-18T19:13:07.466Z"
      },
      {
        "id": "abfb8b9d-ee2a-47eb-bd33-13a835b035e0",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "dc2f3e64-5c36-4c9f-b5c5-d77322dee086",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:13:23.248Z",
        "updatedAt": "2025-06-18T19:13:23.248Z"
      },
      {
        "id": "54ca4fad-7e79-4c05-9b87-cb648b908ad4",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "085bef9b-4d7e-4561-9000-479207051b0f",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:13:36.517Z",
        "updatedAt": "2025-06-18T19:13:36.517Z"
      },
      {
        "id": "2a0374fa-c5e3-4862-980b-3a1a71809a5b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "01fdb820-0661-44e6-b1df-828047ca26eb",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:13:50.301Z",
        "updatedAt": "2025-06-18T19:13:50.301Z"
      },
      {
        "id": "ea53a524-90c0-46ba-acb9-b29ad6a09f1a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "391dbc43-da7a-4d2d-a3f6-b7da29b256bf",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:14:02.314Z",
        "updatedAt": "2025-06-18T19:14:02.314Z"
      },
      {
        "id": "6cce2db3-0f12-4dff-b3a7-4288e8bf4170",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "b6460a35-3789-41ed-8a38-5bf502bc1d31",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:14:15.572Z",
        "updatedAt": "2025-06-18T19:14:15.572Z"
      },
      {
        "id": "fddf4f20-f005-489b-b7e7-efed65b32d2c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "96854d42-bf90-497c-9a99-d5bfcc70bebe",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:14:27.970Z",
        "updatedAt": "2025-06-18T19:14:27.970Z"
      },
      {
        "id": "b85f202a-a8e4-4303-80e7-0f61c48d798c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c83d5411-c377-497f-a2d8-52d704461a54",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:14:41.308Z",
        "updatedAt": "2025-06-18T19:14:41.308Z"
      },
      {
        "id": "fa9ab3b7-a3de-4dca-bec0-0e089bff6754",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "25517e22-d3e2-48a9-ba7d-ede559146f1a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:15:07.633Z",
        "updatedAt": "2025-06-18T19:15:07.633Z"
      },
      {
        "id": "4df94d12-9b8f-43cb-8aa1-ae1afcb48eb3",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "85206090-f53c-4111-adca-5e97ee4aa395",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:15:24.419Z",
        "updatedAt": "2025-06-18T19:15:24.419Z"
      },
      {
        "id": "3cc4011b-36e4-441f-bb39-b9ebe1014e66",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e38c70fa-3cb8-4442-baad-cfa30fcf4b0c",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:15:40.832Z",
        "updatedAt": "2025-06-18T19:15:40.832Z"
      },
      {
        "id": "9003f388-91c5-45dc-b5a8-5d06d7a76de3",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "97ff4b25-c036-41fc-be03-04927108d90a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:15:41.551Z",
        "updatedAt": "2025-06-18T19:15:41.551Z"
      },
      {
        "id": "0c1753b3-91d2-4f13-a51f-32af4568b228",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "78a1d242-1bab-4763-8099-69bfad7d1755",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:07.759Z",
        "updatedAt": "2025-06-18T19:16:07.759Z"
      },
      {
        "id": "56744e00-73c7-4d32-bf1b-1fb4912da70d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4d1367a4-353b-45e3-bc15-dee17b5f104c",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:08.457Z",
        "updatedAt": "2025-06-18T19:16:08.457Z"
      },
      {
        "id": "bf76624b-6595-4e1b-a03c-efc0379d49ec",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "cf51bad5-ab9a-4eee-a811-62f2721adba8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:16.776Z",
        "updatedAt": "2025-06-18T19:16:16.776Z"
      },
      {
        "id": "9dc9a7d0-95b5-4795-af71-6e932c9a8b40",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "19303462-9792-4775-9c22-32e8b34f3bf8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:17.405Z",
        "updatedAt": "2025-06-18T19:16:17.405Z"
      },
      {
        "id": "ad4e80ec-93c3-4044-bac8-6a902d64921f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "97366d8e-cf10-41a5-bf2b-f6dba6f35745",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:26.142Z",
        "updatedAt": "2025-06-18T19:16:26.142Z"
      },
      {
        "id": "db94365e-2ed8-4f01-a365-d0fd191684a8",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "90c25e94-a839-4b23-8fe0-6047a657b6b8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:26.953Z",
        "updatedAt": "2025-06-18T19:16:26.953Z"
      },
      {
        "id": "fcab70b8-8070-4e81-8f95-fd79210279ef",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e315cbc2-dc3a-4525-a5f4-4387c77455dd",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:34.040Z",
        "updatedAt": "2025-06-18T19:16:34.040Z"
      },
      {
        "id": "8121f6bf-6c38-41ae-a731-f1b2aa80d40c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c0912205-43ac-4f3a-930f-e93923eaa13e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:34.670Z",
        "updatedAt": "2025-06-18T19:16:34.670Z"
      },
      {
        "id": "a2fc2da6-f650-4425-b5cf-ba1bd88d65da",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "8c93cd16-e7e4-45d9-aec1-12cc7ee09d09",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:48.338Z",
        "updatedAt": "2025-06-18T19:16:48.338Z"
      },
      {
        "id": "7f397650-436c-4b09-9390-fed93852ecbf",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a7337b9a-b08a-4c96-af51-16e9b8bc6783",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:49.084Z",
        "updatedAt": "2025-06-18T19:16:49.084Z"
      },
      {
        "id": "c84ca0b8-2fb7-4a49-8a2b-e850aca9772f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "fc7fa5c0-22a6-4aa0-97a0-b17b6bd84fd2",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:57.384Z",
        "updatedAt": "2025-06-18T19:16:57.384Z"
      },
      {
        "id": "bc1f1448-fd20-4e35-9876-e4c271b56b05",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "eda4611c-33dd-4794-8ec9-18af7ae14f44",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:16:58.096Z",
        "updatedAt": "2025-06-18T19:16:58.096Z"
      },
      {
        "id": "ed418cab-ae6e-4d24-9638-31e8209a6206",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "32be32cf-2ab0-47ef-b0dd-b185ba17fdc3",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:17:16.164Z",
        "updatedAt": "2025-06-18T19:17:16.164Z"
      },
      {
        "id": "6ed5c4db-64a3-405e-851f-6cc34988f946",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a84e196f-218a-4e46-993a-0f8140d91a6a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:17:16.968Z",
        "updatedAt": "2025-06-18T19:17:16.968Z"
      },
      {
        "id": "82049b92-5776-45da-8ad4-46106c43845f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e52d8025-306d-4c76-bd4b-ff93fa1c9fe7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:17:28.373Z",
        "updatedAt": "2025-06-18T19:17:28.373Z"
      },
      {
        "id": "eca61a70-5ff1-4c9e-b7a6-d2876fe8d531",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "071163e5-e4d4-4335-ace9-225d6f015ddc",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:17:29.018Z",
        "updatedAt": "2025-06-18T19:17:29.018Z"
      },
      {
        "id": "d6e88159-94b3-49d6-9c75-ffa6537fb5ee",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "b31be78d-ffc1-46da-80bd-5fe5e7186233",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:17:54.538Z",
        "updatedAt": "2025-06-18T19:17:54.538Z"
      },
      {
        "id": "8844682d-619c-45b7-a073-8da78cc1da11",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "7b3dbac8-cfa2-4b86-acd3-1a7b7dc915f4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:17:55.207Z",
        "updatedAt": "2025-06-18T19:17:55.207Z"
      },
      {
        "id": "82cae0f1-8373-4a48-afb9-c08707411d9a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "00aebf77-c8b8-4cc6-8348-0b036aff2c68",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:18:03.646Z",
        "updatedAt": "2025-06-18T19:18:03.646Z"
      },
      {
        "id": "19bb34f4-44ef-4b54-952c-2bf0803e8187",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "de1a4334-0715-457d-99b6-d4d6960c844c",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:18:04.325Z",
        "updatedAt": "2025-06-18T19:18:04.325Z"
      },
      {
        "id": "8df594f0-fcfb-4684-9b64-d33158a19179",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "83690909-8432-4ca9-8947-31f72f5f7b43",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:18:12.061Z",
        "updatedAt": "2025-06-18T19:18:12.061Z"
      },
      {
        "id": "152e1baf-1a5a-4ace-a23f-df0d6c8e5573",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "14038d74-c609-401f-a84f-00e104d86126",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:18:12.722Z",
        "updatedAt": "2025-06-18T19:18:12.722Z"
      },
      {
        "id": "22b203d0-f1d7-4be6-b168-6d22797a6494",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "321c6f2b-8f62-4e7f-8dde-c88b243e9b1b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:18:38.450Z",
        "updatedAt": "2025-06-18T19:18:38.450Z"
      },
      {
        "id": "e6435185-7107-45e7-8cdb-8f5cb6b017ea",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "dd2e0ec2-158f-444f-bd86-18f2ffc88725",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:18:39.140Z",
        "updatedAt": "2025-06-18T19:18:39.140Z"
      },
      {
        "id": "bde575be-8727-4893-a0ea-1756eb3ad2f5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4968086f-75eb-4c3b-943a-8b97f1c32208",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:05.089Z",
        "updatedAt": "2025-06-18T19:19:05.089Z"
      },
      {
        "id": "8c6922c8-8ad6-4790-8e44-02bf6019857f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0c902688-2257-4b6b-8f40-25caf8cae647",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:05.877Z",
        "updatedAt": "2025-06-18T19:19:05.877Z"
      },
      {
        "id": "e1a6308b-5dab-4bbf-967d-a2f593c56504",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "510b155d-f56a-415c-bf61-ecc63d5b8153",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:13.693Z",
        "updatedAt": "2025-06-18T19:19:13.693Z"
      },
      {
        "id": "3c99adac-f23f-4f29-81b8-7aee532cffce",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "b862dce0-d93c-44bf-a9d9-5eb5aa32e0fc",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:14.362Z",
        "updatedAt": "2025-06-18T19:19:14.362Z"
      },
      {
        "id": "74d67b64-823b-452b-8e6b-b70902d7592e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e9e3116c-c15b-42a5-bff2-bde62500b4a9",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:23.251Z",
        "updatedAt": "2025-06-18T19:19:23.251Z"
      },
      {
        "id": "4355e03b-ac69-4e87-a001-9a9a03591a83",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0f887d15-04a4-49d0-a1ec-354bb645d126",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:24.013Z",
        "updatedAt": "2025-06-18T19:19:24.013Z"
      },
      {
        "id": "3e82e365-d9f9-4e53-acf4-6db3c15bc0db",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "cff869d2-f63f-4ae1-9354-c0bbda80d390",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:30.106Z",
        "updatedAt": "2025-06-18T19:19:30.106Z"
      },
      {
        "id": "6ace031f-231e-4022-aa02-a1bf545b0d07",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5d868729-99cf-4cdf-9e25-5951a9ddb293",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:30.813Z",
        "updatedAt": "2025-06-18T19:19:30.813Z"
      },
      {
        "id": "97f6d419-6506-47e9-ba39-f4e4b539dedf",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "885aa4d6-5a20-4cc1-8787-bc19ee32e9fa",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:45.441Z",
        "updatedAt": "2025-06-18T19:19:45.441Z"
      },
      {
        "id": "0e4efaee-1c1b-4359-94ee-953c3ff9a9ba",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "337ef89f-6e71-471a-ad63-f213a5c7a156",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:46.043Z",
        "updatedAt": "2025-06-18T19:19:46.043Z"
      },
      {
        "id": "43acdc0b-d4b1-4acf-8c99-c131daf78aa3",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "14228aa8-d770-4b60-90de-21120d8e0c18",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:54.770Z",
        "updatedAt": "2025-06-18T19:19:54.770Z"
      },
      {
        "id": "a6f2b0c6-decc-43e1-8440-0fd348d7b7f9",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "03ff8aea-f9a5-4fd5-b77f-f4ffd8d8bafc",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:19:55.386Z",
        "updatedAt": "2025-06-18T19:19:55.386Z"
      },
      {
        "id": "6045e59e-590c-4534-a332-49c7ffabde84",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "73191762-1adc-452a-b61c-31bde2e91554",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:20:14.644Z",
        "updatedAt": "2025-06-18T19:20:14.644Z"
      },
      {
        "id": "be144179-84a1-4889-9ca8-26889cc8a46a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ba64c51a-9944-4e66-80c0-026ab733d057",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:20:15.256Z",
        "updatedAt": "2025-06-18T19:20:15.256Z"
      },
      {
        "id": "dfb0ebd7-738c-45ac-9062-e70b3a029953",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "96b63b0f-9964-4183-b03c-0de9601d9d4f",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:20:26.010Z",
        "updatedAt": "2025-06-18T19:20:26.010Z"
      },
      {
        "id": "271f0dc7-096e-428b-b521-84be84147765",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "6a69a67b-5283-4e56-afce-1d291c014e24",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:20:26.647Z",
        "updatedAt": "2025-06-18T19:20:26.647Z"
      },
      {
        "id": "829491cd-5cb6-4b7d-a0a2-f70c0ad1abeb",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "13c12699-45dd-411b-b38b-1b566b3b5ddf",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:20:53.044Z",
        "updatedAt": "2025-06-18T19:20:53.044Z"
      },
      {
        "id": "57dafc3e-0779-492b-ba03-c1fd969d9a14",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "199d6751-8354-4aba-829b-c52e6f0bfaa1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:20:53.732Z",
        "updatedAt": "2025-06-18T19:20:53.732Z"
      },
      {
        "id": "9fa89ffe-a35d-446d-86e2-5e3996e89882",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "283d72b9-5f17-419d-baa6-53fd074a1956",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:21:02.594Z",
        "updatedAt": "2025-06-18T19:21:02.594Z"
      },
      {
        "id": "22c3ca79-9bd2-4b6e-98e9-bd45b9a0345c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9897256f-2b5b-42f4-ada3-48860765f9ba",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:21:03.269Z",
        "updatedAt": "2025-06-18T19:21:03.269Z"
      },
      {
        "id": "90e0dd0c-cb5d-4a73-84e0-b9170a78eead",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "caf89a50-7d78-4737-aeac-4292a7b774c8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:21:11.582Z",
        "updatedAt": "2025-06-18T19:21:11.582Z"
      },
      {
        "id": "a81f61fb-bd34-481c-aa7e-8d1338a7e76a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "cd6588d8-0d7d-4d6a-9e45-0f81e98f65db",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:21:12.250Z",
        "updatedAt": "2025-06-18T19:21:12.250Z"
      },
      {
        "id": "0b83528f-d013-4a28-8c06-94eb3d540e3e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c25d95ea-efb0-40d8-9c1e-a3c63c11d675",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:22:22.490Z",
        "updatedAt": "2025-06-18T19:22:22.490Z"
      },
      {
        "id": "3645605a-4a41-4228-b16f-43a0347c89db",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ecd62ac1-420e-418c-ab2d-2f3908b0a349",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:22:23.197Z",
        "updatedAt": "2025-06-18T19:22:23.197Z"
      },
      {
        "id": "a2217f5c-6a4a-44b1-95d3-6259e6293957",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ad24a80b-617f-400c-bdf5-51f44343643f",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:22:49.354Z",
        "updatedAt": "2025-06-18T19:22:49.354Z"
      },
      {
        "id": "1fdfc6db-7710-41c2-b902-7e9f09d9b4fc",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "80079121-12cd-4f32-82bd-3ad75f61193c",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:22:49.976Z",
        "updatedAt": "2025-06-18T19:22:49.976Z"
      },
      {
        "id": "82e593a2-92b2-4cd5-97a2-b7fd2a60dc83",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "7c5efd17-0b77-45c3-bcba-70873300570b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:22:57.914Z",
        "updatedAt": "2025-06-18T19:22:57.914Z"
      },
      {
        "id": "972ddece-8cc0-486d-8cbb-d9b96884a2a5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "56d6b8c5-4ea0-4f56-8307-d7fdb2d52a54",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:22:58.620Z",
        "updatedAt": "2025-06-18T19:22:58.620Z"
      },
      {
        "id": "7015ecaf-8778-4046-8a5d-3a6768c8f2f2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "61af443a-a7dd-43e6-99a6-dfc00ddef1a0",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:23:08.002Z",
        "updatedAt": "2025-06-18T19:23:08.002Z"
      },
      {
        "id": "b82fede0-6e95-40d2-8f39-ac995028f34b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5b1f5fd7-503f-442b-96bf-4e86129466e2",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:23:08.683Z",
        "updatedAt": "2025-06-18T19:23:08.683Z"
      },
      {
        "id": "5f2c3c4c-2452-4552-b74d-ac0f10bed6b0",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "611fe0a7-ab02-48d9-a1c4-a99f90ed0c30",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:23:17.835Z",
        "updatedAt": "2025-06-18T19:23:17.835Z"
      },
      {
        "id": "91a2deef-685c-47a4-b701-0e53f73383c4",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e29d9251-4ead-4ec5-9805-5b53ec11da82",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:23:18.448Z",
        "updatedAt": "2025-06-18T19:23:18.448Z"
      },
      {
        "id": "31e2b149-da0f-444e-bc46-ce30e7a10dbb",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e84bced9-9758-469f-804d-13974e8a7837",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:23:32.739Z",
        "updatedAt": "2025-06-18T19:23:32.739Z"
      },
      {
        "id": "530e5f48-389e-45eb-b46f-82f6276ef4ef",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "92e53678-1b88-4f7d-8a74-037d6d460d7d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:23:33.395Z",
        "updatedAt": "2025-06-18T19:23:33.395Z"
      },
      {
        "id": "4af05c6c-62c7-4da2-855b-e86b5c7b2a55",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a18e3e8d-8e79-4c52-acc2-cf83fd588767",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:23:42.690Z",
        "updatedAt": "2025-06-18T19:23:42.690Z"
      },
      {
        "id": "5a46c442-41e6-4ee0-b160-749692cccba6",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1e40f4a7-0ce1-43bc-a31a-9d6bce1eab2a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:23:43.270Z",
        "updatedAt": "2025-06-18T19:23:43.270Z"
      },
      {
        "id": "531b70ac-fe31-45e6-bea1-019d9ece907d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "b7718ee3-d373-4ea0-abf2-8eaf78ab3120",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:01.574Z",
        "updatedAt": "2025-06-18T19:24:01.574Z"
      },
      {
        "id": "9c2bcc8e-de07-424c-bf65-4415c85a30c6",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "052df72e-0093-4579-8cb5-b2e7335dbdb8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:02.326Z",
        "updatedAt": "2025-06-18T19:24:02.326Z"
      },
      {
        "id": "56288561-17a0-4095-a19a-4342f1390131",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f9fc717b-be2f-4df7-bb51-d7e34fe862ba",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:13.538Z",
        "updatedAt": "2025-06-18T19:24:13.538Z"
      },
      {
        "id": "c60911f5-e2b7-4e0e-842f-d8c6da19dbd5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e6b2fe7c-f651-4d89-987e-88189e7cdb2a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:14.219Z",
        "updatedAt": "2025-06-18T19:24:14.219Z"
      },
      {
        "id": "189c2243-1448-4bab-ba30-fb8d75d0747d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ea7d418c-421a-4f7a-aff5-c613caa9297b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:40.167Z",
        "updatedAt": "2025-06-18T19:24:40.167Z"
      },
      {
        "id": "65276ae3-2dbb-42f6-a63d-aabf73573130",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e7d0fe2d-7c64-41ea-b611-6b6fb9eca7a4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:40.943Z",
        "updatedAt": "2025-06-18T19:24:40.943Z"
      },
      {
        "id": "27478430-0cdb-422d-ab5f-fab871b84e21",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "cab53b9c-2e73-4066-89c4-c04ca20ae259",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:50.004Z",
        "updatedAt": "2025-06-18T19:24:50.004Z"
      },
      {
        "id": "870ae835-0ac7-4ad3-bfcd-33493bfda106",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "14476791-e8bc-4037-a533-7aff31214d93",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:50.701Z",
        "updatedAt": "2025-06-18T19:24:50.701Z"
      },
      {
        "id": "b4212301-d7de-4e48-8cca-66e2bb0bb2a2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "6e000cca-a179-41a8-9fa7-ddc5865e011e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:58.712Z",
        "updatedAt": "2025-06-18T19:24:58.712Z"
      },
      {
        "id": "32dd1a4a-2514-46c1-95f8-a1884bb2a9ce",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "73e7fdb9-55fe-46f9-befd-e2c65c4670b2",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:24:59.308Z",
        "updatedAt": "2025-06-18T19:24:59.308Z"
      },
      {
        "id": "a0833bc7-5203-412e-b32a-25a494e251fc",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1365dfde-02f0-4e82-862f-71d76af8214a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:28:50.046Z",
        "updatedAt": "2025-06-18T19:28:50.046Z"
      },
      {
        "id": "9b69dcf4-ee91-485e-8451-0503eafeb603",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f70593e3-a505-4275-916e-a89e43242e26",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:29:05.831Z",
        "updatedAt": "2025-06-18T19:29:05.831Z"
      },
      {
        "id": "a92122d1-1245-41e4-a578-88e208eae707",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "bc219577-f8fb-4148-8773-d0248c1627f6",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:29:31.693Z",
        "updatedAt": "2025-06-18T19:29:31.693Z"
      },
      {
        "id": "2e24e882-9974-4f8a-8819-46fea5de9a7d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9381b5f4-b1d0-45a1-b0e6-765b901edac1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:29:47.583Z",
        "updatedAt": "2025-06-18T19:29:47.583Z"
      },
      {
        "id": "62335f80-2c5e-4e72-9844-562b5540f108",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e2e0b5f6-03de-4752-9a66-a4a82da87216",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:29:59.464Z",
        "updatedAt": "2025-06-18T19:29:59.464Z"
      },
      {
        "id": "1e564c30-514a-44b5-b2c2-c05a7f8a4c2f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ac0101bc-6dc0-4937-927d-317a546aa6c6",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:30:12.676Z",
        "updatedAt": "2025-06-18T19:30:12.676Z"
      },
      {
        "id": "71b9611b-d247-4fbc-9ba1-560cd2b705ec",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d338661b-1e99-4dac-91fa-66e7d6038c44",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:30:23.690Z",
        "updatedAt": "2025-06-18T19:30:23.690Z"
      },
      {
        "id": "26919600-cc1a-4702-9e3e-a55310bd9206",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "62f2cd50-da84-40b9-9b80-5dac29c5c1a1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:30:36.659Z",
        "updatedAt": "2025-06-18T19:30:36.659Z"
      },
      {
        "id": "e91b9b34-c6f3-4abe-978a-63ff94c69c5c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c4e52196-9cb4-459c-b80f-0fe024cede1a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:30:49.165Z",
        "updatedAt": "2025-06-18T19:30:49.165Z"
      },
      {
        "id": "a87895b0-8e2f-4058-809b-00aedbb216bb",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3409cb7b-7b4f-45d3-b345-cc93871c7d45",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:30:59.935Z",
        "updatedAt": "2025-06-18T19:30:59.935Z"
      },
      {
        "id": "270b7258-1cc7-4293-a033-b4d2e323d3d0",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3186df1b-6b45-4073-9e5c-99033c724b42",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:31:26.859Z",
        "updatedAt": "2025-06-18T19:31:26.859Z"
      },
      {
        "id": "44d3caa7-1b6f-4a39-bd3d-8200ea8723a6",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "23e590e0-f8b9-48f5-aabb-74422823fa38",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:31:43.688Z",
        "updatedAt": "2025-06-18T19:31:43.688Z"
      },
      {
        "id": "d7fe9938-ce21-4eb3-976c-a781c99bc3d5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "190e933e-5c39-45d2-a8a9-97a1f9cb6088",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:32:04.227Z",
        "updatedAt": "2025-06-18T19:32:04.227Z"
      },
      {
        "id": "7b4d9cf9-4ac9-45ee-96f8-f64648849e7f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1ca4527f-a64c-4ebe-9822-09caee82cc1c",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:32:20.031Z",
        "updatedAt": "2025-06-18T19:32:20.031Z"
      },
      {
        "id": "3b801b4e-78d2-4b6c-953b-08ad76d3e27b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d12f4ea9-8d18-4ef5-a667-c8cbe2cc83ee",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:32:38.719Z",
        "updatedAt": "2025-06-18T19:32:38.719Z"
      },
      {
        "id": "779aa546-b3f4-45c8-a472-9db1de615feb",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "872316d4-2844-4044-bf9c-ce3e4d133b8e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:33:04.206Z",
        "updatedAt": "2025-06-18T19:33:04.206Z"
      },
      {
        "id": "387c6a85-9aad-4b6e-91e9-f8b8325926f2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ad08b30d-36c2-438d-8534-620627b52c9b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:33:15.057Z",
        "updatedAt": "2025-06-18T19:33:15.057Z"
      },
      {
        "id": "bb13e1cb-9916-432f-9206-dc2ff8f7a144",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1705d0cb-53ca-42be-b7dd-4fe1b14ff9ae",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:33:30.007Z",
        "updatedAt": "2025-06-18T19:33:30.007Z"
      },
      {
        "id": "264ff790-1e4d-4299-8147-4e978394995c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "2f58abc9-565a-4c7f-83a9-1d32bbf43cc9",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:34:01.686Z",
        "updatedAt": "2025-06-18T19:34:01.686Z"
      },
      {
        "id": "73306a44-5c80-42a3-8113-6939813bc937",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "cf55941c-d8c5-4a03-846a-4d542b6473a4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:34:34.336Z",
        "updatedAt": "2025-06-18T19:34:34.336Z"
      },
      {
        "id": "2331debc-0564-4e07-b536-0f5d3d8af282",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d8a6d969-3475-4328-a105-cc2d602fd977",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:35:16.265Z",
        "updatedAt": "2025-06-18T19:35:16.265Z"
      },
      {
        "id": "7111de99-f565-47a4-9555-b3b88bf19d62",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1e3b47d0-ac63-41fd-b44b-56c860e22b6b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:35:31.996Z",
        "updatedAt": "2025-06-18T19:35:31.996Z"
      },
      {
        "id": "96d2eabe-45a6-4df1-bb7c-818d23c22403",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "8857659e-b436-4baf-922b-b125e1dfbd31",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:35:44.547Z",
        "updatedAt": "2025-06-18T19:35:44.547Z"
      },
      {
        "id": "bfbe69b4-6888-432f-989d-de50f3da4161",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "432bac2f-5e6f-4f4b-b817-0e34e52175a3",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:37:01.316Z",
        "updatedAt": "2025-06-18T19:37:01.316Z"
      },
      {
        "id": "74a2ace9-fe4b-4b9d-8d90-658a07ee0a8f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e95c90c9-b85d-40f5-9e88-9ed9e1b789b5",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:38:21.084Z",
        "updatedAt": "2025-06-18T19:38:21.084Z"
      },
      {
        "id": "e0673ab0-22f5-4385-9e11-78636251b097",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ebf65614-7b63-44a2-811d-4cc2c92a734d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:39:19.128Z",
        "updatedAt": "2025-06-18T19:39:19.128Z"
      },
      {
        "id": "6ae02dfa-b97c-4a0d-be09-9fa2ac0070d9",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "2f274d82-b5cf-4fa5-880b-398cc4353b9a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:39:56.270Z",
        "updatedAt": "2025-06-18T19:39:56.270Z"
      },
      {
        "id": "8b9a8ffc-09c0-43d6-a127-f1a8136b3614",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ddd8fec8-e176-4cc8-a048-0e6c9157913f",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:40:21.765Z",
        "updatedAt": "2025-06-18T19:40:21.765Z"
      },
      {
        "id": "5b7ae45f-277c-4b5b-a264-2fed10a3c49d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "801ebdf7-e647-4e0e-b938-6bbfd19b7816",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:40:33.358Z",
        "updatedAt": "2025-06-18T19:40:33.358Z"
      },
      {
        "id": "12c5f1ac-f140-401e-ba69-a02beb334816",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "58915827-7a13-4606-830b-256a6c974f8a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:40:48.340Z",
        "updatedAt": "2025-06-18T19:40:48.340Z"
      },
      {
        "id": "c0586a87-385b-4159-9168-c9573269d8c7",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5385f47b-102b-41ba-a6eb-d6e430d2a337",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:41:03.831Z",
        "updatedAt": "2025-06-18T19:41:03.831Z"
      },
      {
        "id": "7a16f15e-8a97-4be7-a245-e593bc8c219e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0b9aa473-bae6-4ca9-9a8c-d015f53bd82e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:41:24.725Z",
        "updatedAt": "2025-06-18T19:41:24.725Z"
      },
      {
        "id": "8ccdd989-f92e-478a-b3fb-5cdbb77a38ed",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0181c3fc-98cf-40fd-89ae-e73c178a7977",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:41:40.726Z",
        "updatedAt": "2025-06-18T19:41:40.726Z"
      },
      {
        "id": "b088c4ee-1e9a-46b9-877a-d054b4a4b10e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "fc4f0e16-79c8-4ee1-bf11-c39be06227f9",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:42:10.165Z",
        "updatedAt": "2025-06-18T19:42:10.165Z"
      },
      {
        "id": "7b669b02-3b40-4304-9f6a-50c73828375b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a245bff4-0e7d-46d7-ba11-21f6ece0170b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:42:25.620Z",
        "updatedAt": "2025-06-18T19:42:25.620Z"
      },
      {
        "id": "c2445624-eab4-4b05-9b8c-848da4bca7c2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c5c88a8e-7880-4f4d-b4a1-cd911a432926",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:42:38.005Z",
        "updatedAt": "2025-06-18T19:42:38.005Z"
      },
      {
        "id": "b8e32a40-ed85-45c2-81d3-1106559de837",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "49b287c6-33e9-43f8-86ac-d4e2cc7d2465",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:43:58.967Z",
        "updatedAt": "2025-06-18T19:43:58.967Z"
      },
      {
        "id": "e9abc4f4-a4ac-4afc-8fc9-b2120ba3b585",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "83001242-2477-46f0-af61-4f21af59ef6b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:44:17.554Z",
        "updatedAt": "2025-06-18T19:44:17.554Z"
      },
      {
        "id": "dde4b7f3-45d1-4ae7-acf0-0bd9fb9f8bb6",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "e81ed597-0b26-496d-bf28-a08858df0368",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:44:37.176Z",
        "updatedAt": "2025-06-18T19:44:37.176Z"
      },
      {
        "id": "165d9df4-bf07-4af5-ac8b-c48d6bb38667",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3ea1878d-b190-47c4-8875-1488f15cbe11",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:45:03.631Z",
        "updatedAt": "2025-06-18T19:45:03.631Z"
      },
      {
        "id": "f9d89c13-4182-4b20-a9e4-7a815e9555cc",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9abd38fa-8f85-4c1c-8d65-ef76e61132f2",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:45:16.554Z",
        "updatedAt": "2025-06-18T19:45:16.554Z"
      },
      {
        "id": "d9e3c3ce-55a3-47d7-b323-13bd7450cff7",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5f449200-a011-40af-9903-63aaa721c375",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:45:33.172Z",
        "updatedAt": "2025-06-18T19:45:33.172Z"
      },
      {
        "id": "35a3b9fa-844a-406e-a824-6640a5013fa3",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "38e2bd90-b080-4a7d-9ee4-7f0c34568c8e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:45:49.096Z",
        "updatedAt": "2025-06-18T19:45:49.096Z"
      },
      {
        "id": "e5e2819b-8075-4859-b99d-707140c099a8",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "7d5d6141-bcd0-49e9-9b65-8dd5496ff8e2",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:46:06.010Z",
        "updatedAt": "2025-06-18T19:46:06.010Z"
      },
      {
        "id": "336aaa48-ec58-4c02-a0ad-1204c6aad420",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "65c4e31c-cb38-479b-b42a-56035cd168cf",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:46:36.616Z",
        "updatedAt": "2025-06-18T19:46:36.616Z"
      },
      {
        "id": "af082c24-b6ee-4bc6-87f8-fdd282a5714f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "777f828d-8397-4b2f-937c-1503c0bc3de1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:46:57.090Z",
        "updatedAt": "2025-06-18T19:46:57.090Z"
      },
      {
        "id": "07acb3d6-d086-45ec-a1ab-d27957af8b73",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a4a00b51-e1c7-46fa-9e00-28446986de90",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:47:14.098Z",
        "updatedAt": "2025-06-18T19:47:14.098Z"
      },
      {
        "id": "f74a243c-ee2a-4d1e-a864-948166bf777a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3a22d4b8-a6c3-4959-a6d4-d37dec2e5abe",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:47:27.772Z",
        "updatedAt": "2025-06-18T19:47:27.772Z"
      },
      {
        "id": "75c10ca9-f8d0-42e3-8772-8dcc9da50ade",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "fb7a9502-26d5-4ff4-ad1b-3d1d301adb8f",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:47:52.698Z",
        "updatedAt": "2025-06-18T19:47:52.698Z"
      },
      {
        "id": "2ce4fb0a-193d-4e3a-aadf-12f4910f21e4",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "69aff214-da22-427f-a1b1-fab29710c47e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:48:08.329Z",
        "updatedAt": "2025-06-18T19:48:08.329Z"
      },
      {
        "id": "bce46f01-1d86-46f0-a39f-8b6379d39bb6",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9ef51a4b-34b6-4de7-9b1c-bab4bd8c2993",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:48:27.785Z",
        "updatedAt": "2025-06-18T19:48:27.785Z"
      },
      {
        "id": "856cca00-d8ea-460e-b801-a97f8502d43a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "6f4dc7ff-7485-4b46-8e74-dd633ddb76e5",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:48:54.491Z",
        "updatedAt": "2025-06-18T19:48:54.491Z"
      },
      {
        "id": "d2c0a915-3a76-4e30-a520-2951512f560c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "faca0e7e-c426-444a-be6b-daa17334eed7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:49:06.521Z",
        "updatedAt": "2025-06-18T19:49:06.521Z"
      },
      {
        "id": "ddc6119c-1235-4136-9930-9a503adda7fa",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ddcea578-ab4a-4070-89cd-cd8d5a010041",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:49:23.560Z",
        "updatedAt": "2025-06-18T19:49:23.560Z"
      },
      {
        "id": "65423dda-652e-492a-b038-b0c79f51ab10",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0f30d994-4bc9-4160-b741-a1947d5f2715",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:49:38.394Z",
        "updatedAt": "2025-06-18T19:49:38.394Z"
      },
      {
        "id": "87659bfa-b4a8-436e-8e81-19d4dd637179",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "621f112d-3299-4d60-b9ce-4dfb53704caf",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:49:54.283Z",
        "updatedAt": "2025-06-18T19:49:54.283Z"
      },
      {
        "id": "963b3f32-5c03-4a1f-b0e2-b77f3b1fa696",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "68a71434-5a82-4170-920b-c2df468146a6",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:50:24.039Z",
        "updatedAt": "2025-06-18T19:50:24.039Z"
      },
      {
        "id": "6796bb74-7ef6-437e-b93d-3d6f804ec5d5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3a29700a-70ea-406f-8e95-7cdbb0a015b2",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:50:44.209Z",
        "updatedAt": "2025-06-18T19:50:44.209Z"
      },
      {
        "id": "2bda2bd3-b45f-4ef7-a119-70b48bd4a7a2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d2226452-35f2-4591-aba9-231b61269d40",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:51:02.842Z",
        "updatedAt": "2025-06-18T19:51:02.842Z"
      },
      {
        "id": "4f846599-5cb9-4f30-a1e9-198f6f6a3c38",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "56d4e0df-a59a-4aa6-b4b4-e8bf396251b7",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:51:18.116Z",
        "updatedAt": "2025-06-18T19:51:18.116Z"
      },
      {
        "id": "a85007d4-0c1f-446d-9882-75817a524e47",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f060ca91-ddf4-4f84-9f9f-3cfc9fe5a1a0",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:51:49.029Z",
        "updatedAt": "2025-06-18T19:51:49.029Z"
      },
      {
        "id": "90e49b10-c23f-4e87-9bf0-3ca007635092",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ff6b2870-d95a-4ff9-bc9a-da5635522303",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:52:03.838Z",
        "updatedAt": "2025-06-18T19:52:03.838Z"
      },
      {
        "id": "ec478583-d787-4c06-ad78-2ae57b9edc37",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "6a7c7f07-bd8a-441a-bd5f-2bc80dc14fe3",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:52:22.741Z",
        "updatedAt": "2025-06-18T19:52:22.741Z"
      },
      {
        "id": "6e23cf5d-10b2-415c-8241-d8943106eec9",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "65ea8cba-ed98-4ac6-ab4a-43f6ad6bfa29",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:52:49.140Z",
        "updatedAt": "2025-06-18T19:52:49.140Z"
      },
      {
        "id": "7fa83a9b-4d19-454b-8e39-ca856eef6481",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4ee0e5e5-bf60-44aa-88de-bf1638bbdb62",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:53:00.252Z",
        "updatedAt": "2025-06-18T19:53:00.252Z"
      },
      {
        "id": "e063e3bc-aa42-47ec-b600-b3e34db627cc",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0102dd2c-5ae8-4014-b629-46b0489100ef",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:53:14.845Z",
        "updatedAt": "2025-06-18T19:53:14.845Z"
      },
      {
        "id": "ba15771d-3908-4505-9bfb-b015d3532140",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "eb742750-635b-48ee-b4e1-f3864a8387bb",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:53:29.694Z",
        "updatedAt": "2025-06-18T19:53:29.694Z"
      },
      {
        "id": "cf3acd70-d790-4c2f-9f83-5252cba7933b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "93f7cf2b-cbce-407c-a861-3a2d7094c660",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:53:47.124Z",
        "updatedAt": "2025-06-18T19:53:47.124Z"
      },
      {
        "id": "252033ef-f692-4769-afa4-d686577c7db2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ccbe9d71-449f-498e-8f84-0714cd9d9ea1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T19:54:18.125Z",
        "updatedAt": "2025-06-18T19:54:18.125Z"
      },
      {
        "id": "794676df-1077-4f2e-9077-23b6ef62f716",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "09f8c2fa-6766-487e-ac99-5ddb136407de",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:07:50.020Z",
        "updatedAt": "2025-06-18T23:07:50.020Z"
      },
      {
        "id": "484ab6d0-2d77-49ca-b55c-d95c0e13de1d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4798c5e0-b0c0-45f4-ad18-0da7c3e9b941",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:08:07.134Z",
        "updatedAt": "2025-06-18T23:08:07.134Z"
      },
      {
        "id": "8db0fcfc-8916-4abd-b92f-8d1bf4cea91e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "458f7038-e375-4673-8b03-279613ff7166",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:08:39.203Z",
        "updatedAt": "2025-06-18T23:08:39.203Z"
      },
      {
        "id": "d93951b4-4f6b-4ef3-84e6-81fbf0b16663",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "04da3060-6e57-43b8-b895-4dddd80cf852",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:08:59.157Z",
        "updatedAt": "2025-06-18T23:08:59.157Z"
      },
      {
        "id": "723fdc4a-70c5-4065-a626-6ddf71596d24",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4eed9046-0cf9-48fe-8b84-23fa7d64fed4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:09:14.678Z",
        "updatedAt": "2025-06-18T23:09:14.678Z"
      },
      {
        "id": "caf794e8-5583-4d81-8f04-0a286eb2e76d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9090560c-ad9b-495d-9ee4-3b2a119f67af",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:09:29.681Z",
        "updatedAt": "2025-06-18T23:09:29.681Z"
      },
      {
        "id": "ce899afa-45ea-4e9a-9049-9f8a2b145ffe",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "998b3b4c-7c57-409e-9698-e5417564857a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:09:39.973Z",
        "updatedAt": "2025-06-18T23:09:39.973Z"
      },
      {
        "id": "600e7aea-90dc-4605-ae91-d4365fc401b5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ceccb852-ac65-4662-b0ad-393401ba3682",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:09:52.614Z",
        "updatedAt": "2025-06-18T23:09:52.614Z"
      },
      {
        "id": "ded563d2-d276-46d1-b328-f37632dd9dd2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c624b377-e0e3-4219-a057-c107b5a2abd6",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:10:06.747Z",
        "updatedAt": "2025-06-18T23:10:06.747Z"
      },
      {
        "id": "0fde7123-6059-490f-afbf-02c10242919b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4c68e32d-59ae-4895-9444-d44d789a8eeb",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:11:38.371Z",
        "updatedAt": "2025-06-18T23:11:38.371Z"
      },
      {
        "id": "5cafaaa0-9c58-4765-ac1b-2e5305a03356",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "415f9803-7b12-4e3d-86ed-d4425074bffe",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:12:01.305Z",
        "updatedAt": "2025-06-18T23:12:01.305Z"
      },
      {
        "id": "ad147428-7644-4440-8f68-ca52dfaea79c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "5490b50f-c563-4174-b271-827b89eb033e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:12:19.335Z",
        "updatedAt": "2025-06-18T23:12:19.335Z"
      },
      {
        "id": "ecbc72e0-01b4-40cc-a3d0-fda62fb3ce6f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4556bf84-642e-40d1-83e0-3b72df338da3",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:12:35.712Z",
        "updatedAt": "2025-06-18T23:12:35.712Z"
      },
      {
        "id": "67892bd4-f15d-49e3-ae4e-98526e69f3c4",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "59320729-c6d1-40b3-b088-a80924f8b7fb",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:12:52.488Z",
        "updatedAt": "2025-06-18T23:12:52.488Z"
      },
      {
        "id": "55f99803-c61c-434c-8009-a1ca32ffbf19",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4eef8333-e5f0-4633-9c93-b351d7f45585",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:13:10.070Z",
        "updatedAt": "2025-06-18T23:13:10.070Z"
      },
      {
        "id": "881b1a21-2fcd-4a8a-9c33-e0ea5c82df15",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f5557ebb-b8ed-4fce-8db8-e3a17d21a996",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:13:34.630Z",
        "updatedAt": "2025-06-18T23:13:34.630Z"
      },
      {
        "id": "742a6c79-09cd-42e9-a3fc-047a66bc408f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d4944855-23ec-4d83-a063-b4dec2205f91",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:13:35.323Z",
        "updatedAt": "2025-06-18T23:13:35.323Z"
      },
      {
        "id": "9695fd76-3395-46d6-81d7-721846fc51b4",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c4f7e490-0653-4667-8318-8898e8060028",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:03.398Z",
        "updatedAt": "2025-06-18T23:14:03.398Z"
      },
      {
        "id": "fdde15f3-6bdc-446e-98b5-a54c0305ca4b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "21340d58-a56a-4750-8bee-868d034fd373",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:04.266Z",
        "updatedAt": "2025-06-18T23:14:04.266Z"
      },
      {
        "id": "1082e23b-16f1-4107-9f83-f4305ad9a2c8",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3cc90706-af12-44d4-8e8f-bf4d594e13c8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:13.419Z",
        "updatedAt": "2025-06-18T23:14:13.419Z"
      },
      {
        "id": "3b802328-ad77-4a2e-b03f-cc7a8f4b4cc7",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "28abec31-197b-4841-b149-081871a9ba15",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:14.660Z",
        "updatedAt": "2025-06-18T23:14:14.660Z"
      },
      {
        "id": "d05f3008-6114-4d0c-af20-d2f3c29ac42a",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "bb3312a8-e443-4c7e-a37c-68c4e53b39f9",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:25.186Z",
        "updatedAt": "2025-06-18T23:14:25.186Z"
      },
      {
        "id": "69c7194d-8a86-4562-a4e4-e5252dfde967",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "3fec8dea-cca0-4a45-8a9c-4a1d8c496dd5",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:25.979Z",
        "updatedAt": "2025-06-18T23:14:25.979Z"
      },
      {
        "id": "da972a63-1b52-48d9-b51e-c864099be307",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "dff00498-073c-4b89-a0c7-86c4930839e9",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:36.636Z",
        "updatedAt": "2025-06-18T23:14:36.636Z"
      },
      {
        "id": "da65a392-e31c-4f3a-a6cf-b48b1574117c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "53f1bc2b-762c-4901-9601-901989a64618",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:37.449Z",
        "updatedAt": "2025-06-18T23:14:37.449Z"
      },
      {
        "id": "74fe779e-7f96-43c4-8710-9291ffa0c42d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "815516b0-fe48-4daa-87d6-b3db060ff985",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:53.867Z",
        "updatedAt": "2025-06-18T23:14:53.867Z"
      },
      {
        "id": "e2d4676b-0651-4138-9882-6615b5156384",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "8904a49c-3982-46d0-b373-e633bd860a9d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:14:54.557Z",
        "updatedAt": "2025-06-18T23:14:54.557Z"
      },
      {
        "id": "68be69e0-fe30-453c-928c-d7ffce63fe6d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "efcb4f46-44ff-4047-8018-c4b74ea82314",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:15:08.242Z",
        "updatedAt": "2025-06-18T23:15:08.242Z"
      },
      {
        "id": "75eee9a0-2fde-43ee-8bff-dd312125dec8",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1842f9cf-803d-46bf-926c-0b7ac6dcdfea",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:15:28.039Z",
        "updatedAt": "2025-06-18T23:15:28.039Z"
      },
      {
        "id": "89773348-1fb4-4679-bdbd-75e32de5f837",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "489164db-9e67-4632-aa69-012a287759a0",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:15:51.007Z",
        "updatedAt": "2025-06-18T23:15:51.007Z"
      },
      {
        "id": "aa000d15-613f-4896-9b5a-0caf73d49cb3",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "98376eaa-c26f-4403-9e8e-6f16f2e1ee3b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:16:19.785Z",
        "updatedAt": "2025-06-18T23:16:19.785Z"
      },
      {
        "id": "918d305e-cf59-4293-9df9-097245b9f296",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ef1574ae-4e8c-4630-9654-53cb8bfad719",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:16:33.421Z",
        "updatedAt": "2025-06-18T23:16:33.421Z"
      },
      {
        "id": "f780134d-815e-46cb-bf16-5e332c7a2481",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "36c368fc-aa6c-4f88-9855-40efd1438ff3",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:16:51.456Z",
        "updatedAt": "2025-06-18T23:16:51.456Z"
      },
      {
        "id": "3448bb33-71a2-4608-82f7-326243dba3e1",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1c97407e-d86e-4e7d-97b6-30aa8f145d53",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:17:10.158Z",
        "updatedAt": "2025-06-18T23:17:10.158Z"
      },
      {
        "id": "9f0a3a7d-0587-41dc-80e3-138cc3cfa40b",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "652f040f-2452-44ca-81d5-39515ecf3185",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:17:10.951Z",
        "updatedAt": "2025-06-18T23:17:10.951Z"
      },
      {
        "id": "a01dff10-2b79-4a16-ab69-4ac3196c2959",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f3a703b9-11dd-4a84-bb8c-13ccd3d807a3",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:17:40.942Z",
        "updatedAt": "2025-06-18T23:17:40.942Z"
      },
      {
        "id": "20a68a12-34b8-4e91-b145-8fc0cc3a8dea",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f98e1392-05b2-4d89-895b-a385b38a537e",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:18:16.440Z",
        "updatedAt": "2025-06-18T23:18:16.440Z"
      },
      {
        "id": "d3ee98da-86f5-43d6-8dec-7b3da2567621",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "ba13e7d9-c11f-4dea-9685-6251998cc98c",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:18:17.262Z",
        "updatedAt": "2025-06-18T23:18:17.262Z"
      },
      {
        "id": "3dd52e41-18bc-4e29-9103-ae4bbac6b414",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "f687fc5c-f17a-497b-87eb-17b366dab791",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:18:40.502Z",
        "updatedAt": "2025-06-18T23:18:40.502Z"
      },
      {
        "id": "3c7f9970-40b0-4056-a39d-961ab4a017c5",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "59841e2c-e97f-47c8-b029-21c3fa1c0704",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:18:41.539Z",
        "updatedAt": "2025-06-18T23:18:41.539Z"
      },
      {
        "id": "efbb3bc6-519f-435d-b117-5cb0c22d163c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "4af3a38e-ea3a-4def-a409-be918df9742f",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:18:51.931Z",
        "updatedAt": "2025-06-18T23:18:51.931Z"
      },
      {
        "id": "1f7eca6f-2c07-4bfa-a014-e2d7b4948620",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0ada521c-4944-47a0-a02a-ec3c0f46dc38",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:18:52.825Z",
        "updatedAt": "2025-06-18T23:18:52.825Z"
      },
      {
        "id": "7492b84e-408d-4fa6-8fe7-a87b04f9e824",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "50d82260-a37b-454a-a18f-be0925196a29",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:19:03.145Z",
        "updatedAt": "2025-06-18T23:19:03.145Z"
      },
      {
        "id": "857821ba-8357-4856-bab1-a9f3cbb9ba7c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "c103cdcc-3825-4b50-b7fe-44b1176e6f1a",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:19:04.086Z",
        "updatedAt": "2025-06-18T23:19:04.086Z"
      },
      {
        "id": "b2ade389-f9ff-4fac-847f-8d194a92797d",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "29d0e4bd-8704-49da-8b15-e38dd4edf4a1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:19:16.964Z",
        "updatedAt": "2025-06-18T23:19:16.964Z"
      },
      {
        "id": "4ecdca56-bbec-4b67-9c75-b73dcf20cd2f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "bef9a386-c280-4c6d-8a04-b8aa13013b29",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:19:40.698Z",
        "updatedAt": "2025-06-18T23:19:40.698Z"
      },
      {
        "id": "23094031-989f-47d7-8440-bfbb0d1e243f",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "fc050362-0c48-4ae8-b6d0-a746f0803415",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:19:55.242Z",
        "updatedAt": "2025-06-18T23:19:55.242Z"
      },
      {
        "id": "d7469af3-0b09-4a2b-90fe-0fdd0607419e",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "1989e192-4ea4-4a70-b817-234258c60303",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:20:08.769Z",
        "updatedAt": "2025-06-18T23:20:08.769Z"
      },
      {
        "id": "ff556034-0fdd-42af-be45-573aeea22381",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "9255cae6-747a-4de5-9646-d354ef14d2f4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:20:09.525Z",
        "updatedAt": "2025-06-18T23:20:09.525Z"
      },
      {
        "id": "2f80b9d7-fc5c-448d-a072-06c9c205be25",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "0a2a3cb2-a909-458b-92d1-f9889d1848da",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:20:23.252Z",
        "updatedAt": "2025-06-18T23:20:23.252Z"
      },
      {
        "id": "e1f3075e-8e39-41b2-aa1b-0bcfff90b2a2",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "d8feb977-77a1-44b7-8527-b178ce60d5b5",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:20:42.625Z",
        "updatedAt": "2025-06-18T23:20:42.625Z"
      },
      {
        "id": "26113c3a-cf4a-48f1-a872-be5b845ada29",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "44b77b0e-5409-466c-8d6e-2f7cca9f151b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:21:13.378Z",
        "updatedAt": "2025-06-18T23:21:13.378Z"
      },
      {
        "id": "8b31d9b7-607c-4f75-a0af-5ed724bb24ef",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "a4125b5e-efda-47c1-9e94-40a3d6739f20",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:21:31.016Z",
        "updatedAt": "2025-06-18T23:21:31.016Z"
      },
      {
        "id": "235b4b24-250f-4f36-81a0-92f6153ea14c",
        "userId": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
        "organizationId": "59c32cdc-c05b-462b-b2c3-5f10e51c08da",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-18T23:21:46.009Z",
        "updatedAt": "2025-06-18T23:21:46.009Z"
      }
    ],
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:08.862Z",
      "messageKey": null
    }
  }
}
```

**⏱️ Duration:** 750.4 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=UbfVIZjHHvalaZrm5mvg1lYD73k1 (451.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MSwidXNlcl9pZCI6IlViZlZJWmpISHZhbGFacm01bXZnMWxZRDczazEiLCJzdWIiOiJVYmZWSVpqSEh2YWxhWnJtNW12ZzFsWUQ3M2sxIiwiaWF0IjoxNzUwMzQwNjkxLCJleHAiOjE3NTAzNDQyOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDM0MDY5MDY5N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMzQwNjkwNjk3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k3ZiFK-8blTqJ-oG41Lh-iW5-2rsLzwMA6yFE9uWpG7W26YpWtwOor449shw6KYUtG0xZx2ABZbDF9IwLKjpFtu-eTP7LjX8qeU2BpYrJtpbmUzmj2y6_7lS5_6qulqgY74Yxty3IoJRk4i7pqHSsem1SqEMbAswywCT_eHCmzQYhlqbi4o0EZ9USfTVMnOOqSiw3nAVADVXhUCBn3mXnzdFiiyX8cOXJigCjjSX-RSnp9babWcABTsgbw7xp3cBhi4cZU0HBFLOjLK7Ve4B_oFjPh5-zbEdIHBGj1ZZ333QfSmapj-4I0KbiLNvM2SuNk8WyPHF91R-KETI257lRQ"
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
    "content-length": "108",
    "etag": "W/\"6c-PPSdi6M623/6dlf0A92LRV+5544\"",
    "date": "Thu, 19 Jun 2025 13:45:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [],
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:09.389Z",
      "messageKey": null
    }
  }
}
```

**⏱️ Duration:** 451.0 ms  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ❌ FAILED  
**Duration:** 0.64s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

[1mMatcher error[22m: [31mreceived[39m value must not be null nor undefined

Received has value: [31mundefined[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (641.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
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
    "content-length": "324",
    "etag": "W/\"144-2xWevPZM7cyu7p24yNrtlHOWcIY\"",
    "date": "Thu, 19 Jun 2025 13:45:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "message": "memberships.validation.error",
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:10.041Z",
      "error": "Either userId or organizationId must be provided",
      "messageKey": "memberships.validation.error"
    },
    "errors": [
      {
        "field": "general",
        "code": "VALIDATION_ERROR",
        "message": "memberships.validation.failed"
      }
    ]
  }
}
```

**⏱️ Duration:** 641.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.33s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (328.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MSwidXNlcl9pZCI6IlViZlZJWmpISHZhbGFacm01bXZnMWxZRDczazEiLCJzdWIiOiJVYmZWSVpqSEh2YWxhWnJtNW12ZzFsWUQ3M2sxIiwiaWF0IjoxNzUwMzQwNjkxLCJleHAiOjE3NTAzNDQyOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDM0MDY5MDY5N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMzQwNjkwNjk3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k3ZiFK-8blTqJ-oG41Lh-iW5-2rsLzwMA6yFE9uWpG7W26YpWtwOor449shw6KYUtG0xZx2ABZbDF9IwLKjpFtu-eTP7LjX8qeU2BpYrJtpbmUzmj2y6_7lS5_6qulqgY74Yxty3IoJRk4i7pqHSsem1SqEMbAswywCT_eHCmzQYhlqbi4o0EZ9USfTVMnOOqSiw3nAVADVXhUCBn3mXnzdFiiyX8cOXJigCjjSX-RSnp9babWcABTsgbw7xp3cBhi4cZU0HBFLOjLK7Ve4B_oFjPh5-zbEdIHBGj1ZZ333QfSmapj-4I0KbiLNvM2SuNk8WyPHF91R-KETI257lRQ"
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
    "content-length": "206",
    "etag": "W/\"ce-Met5DILpLKnvShaeaeG6x44L+BE\"",
    "date": "Thu, 19 Jun 2025 13:45:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "message": {
      "error": "You can only view your own memberships"
    },
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:10.375Z",
      "messageKey": {
        "error": "You can only view your own memberships"
      }
    }
  }
}
```

**⏱️ Duration:** 328.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should get membership by ID
**Status:** ❌ FAILED  
**Duration:** 0.67s  
**Error:** Request failed with status code 404  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/undefined (666.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
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
    "content-length": "170",
    "etag": "W/\"aa-JAVrndXAX4XE/D1UjJ0615MCXFQ\"",
    "date": "Thu, 19 Jun 2025 13:45:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "message": {
      "error": "Membership not found"
    },
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:11.045Z",
      "messageKey": {
        "error": "Membership not found"
      }
    }
  }
}
```

**⏱️ Duration:** 666.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (534.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
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
    "content-length": "170",
    "etag": "W/\"aa-DMQpcJxg84zvWkX+e5tCVVpFRm8\"",
    "date": "Thu, 19 Jun 2025 13:45:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "message": {
      "error": "Membership not found"
    },
    "meta": {
      "language": "en",
      "timestamp": "2025-06-19T13:45:11.584Z",
      "messageKey": {
        "error": "Membership not found"
      }
    }
  }
}
```

**⏱️ Duration:** 534.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Admin should update member role successfully
**Status:** ❌ FAILED  
**Duration:** 0.60s  
**Error:** socket hang up  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/undefined (597.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "role": "manager"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 597.7 ms  
**❌ Error:** socket hang up  

</details>


---

### Test: Should fail with invalid role
**Status:** ❌ FAILED  
**Duration:** 0.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/undefined (19.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6ImFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MCwidXNlcl9pZCI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJzdWIiOiJ0WUZ5NGVjZDBUWTJmRXJ3OWpzcDZlMVhIdncxIiwiaWF0IjoxNzUwMzQwNjkwLCJleHAiOjE3NTAzNDQyOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFub0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.auKRz6aLG3N35kl4mm1H1sDWB9XDgmaq1z4Tl8RBhgE6gca57tcLy-JfTseB8S7gkzRczHAvzSYShDNNpTzzeGKZOj875gdjRTTPaCRujwl2BNcIZvtJdaAnkaC0K2fMUK5bY2xvi5HBRojPqU3LuptggbL60Tfa9V6Ddkc67jzqt5bCNRR6hFUc3vR0RFPZ7OE-ILWjKqUN_FlmDsON2p5CUZ0SuTWXOMKnKdwpZa3Y6xR2vKmlsXQ3vGbZ6VZ0GCb_0uoA9FqjJJJ3VaD1cqDOl9Mf2bP6xFg5eE_25jQACfi7wW6t61LuKwXwAhCZUbkgQVptgShteb5I5idr0g"
  },
  "data": {
    "role": "invalid-role"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 19.9 ms  

</details>


**Console Output:**
```
❌ Network error in test: 
```

---

### Test: Regular user should fail to update role without permissions
**Status:** ❌ FAILED  
**Duration:** 0.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/undefined (36.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjNiZjA1MzkxMzk2OTEzYTc4ZWM4MGY0MjcwMzM4NjM2NDA2MTBhZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDM0MDY5MSwidXNlcl9pZCI6IlViZlZJWmpISHZhbGFacm01bXZnMWxZRDczazEiLCJzdWIiOiJVYmZWSVpqSEh2YWxhWnJtNW12ZzFsWUQ3M2sxIiwiaWF0IjoxNzUwMzQwNjkxLCJleHAiOjE3NTAzNDQyOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDM0MDY5MDY5N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMzQwNjkwNjk3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k3ZiFK-8blTqJ-oG41Lh-iW5-2rsLzwMA6yFE9uWpG7W26YpWtwOor449shw6KYUtG0xZx2ABZbDF9IwLKjpFtu-eTP7LjX8qeU2BpYrJtpbmUzmj2y6_7lS5_6qulqgY74Yxty3IoJRk4i7pqHSsem1SqEMbAswywCT_eHCmzQYhlqbi4o0EZ9USfTVMnOOqSiw3nAVADVXhUCBn3mXnzdFiiyX8cOXJigCjjSX-RSnp9babWcABTsgbw7xp3cBhi4cZU0HBFLOjLK7Ve4B_oFjPh5-zbEdIHBGj1ZZ333QfSmapj-4I0KbiLNvM2SuNk8WyPHF91R-KETI257lRQ"
  },
  "data": {
    "role": "volunteer"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 36.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (26.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1750340712303@example.com",
    "password": "TestPassword123!",
    "name": "User for Removal"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 26.6 ms  

</details>


**Console Output:**
```
❌ Network error in test: 
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
- Test organization: Test Org for Memberships 1750340691976
- Total memberships created: 6
- Total test users created: 8
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
