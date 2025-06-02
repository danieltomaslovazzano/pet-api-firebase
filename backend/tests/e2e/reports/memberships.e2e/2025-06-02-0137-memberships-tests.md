# E2E Test Report: memberships-tests

**Date:** 6/2/2025  
**Time:** 1:37:30 AM  
**Duration:** 52.66s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.55s | Admin should invite user to organization successfully |
| ✅ Should fail to invite same user twice | PASSED | 0.52s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.43s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 7.03s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.54s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.43s | Admin should get memberships by user |
| ✅ User should get their own memberships | PASSED | 0.49s | User should get their own memberships |
| ✅ Should fail without userId or organizationId | PASSED | 0.38s | Should fail without userId or organizationId |
| ✅ Regular user should fail to get other user memberships | PASSED | 0.34s | Regular user should fail to get other user memberships |
| ✅ Admin should get membership by ID | PASSED | 0.50s | Admin should get membership by ID |
| ✅ Should fail with invalid membership ID | PASSED | 0.39s | Should fail with invalid membership ID |
| ✅ Admin should update member role successfully | PASSED | 0.53s | Admin should update member role successfully |
| ✅ Should fail with invalid role | PASSED | 0.34s | Should fail with invalid role |
| ✅ Regular user should fail to update role without permissions | PASSED | 0.66s | Regular user should fail to update role without permissions |
| ✅ Admin should remove member successfully | PASSED | 1.07s | Admin should remove member successfully |
| ✅ Regular user should fail to remove member without permissions | PASSED | 1.91s | Regular user should fail to remove member without permissions |
| ✅ User should be able to leave organization (remove own membership) | PASSED | 0.94s | User should be able to leave organization (remove own membership) |
| ✅ Organization admin should not access memberships from other organizations | PASSED | 0.39s | Organization admin should not access memberships from other organizations |
| ✅ Organization admin should not invite users to other organizations | PASSED | 1.24s | Organization admin should not invite users to other organizations |
| ✅ Super admin should access all organizations | PASSED | 1.05s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (550.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "pmLLTxdbJDSoQElfzseF34NH4w32",
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
    "etag": "W/\"fd-qPOtiDqWvYIYv76Fex3vLOoNkhI\"",
    "date": "Sun, 01 Jun 2025 23:36:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "43ef010b-e7e2-4404-8bef-4a488af2be2a",
    "userId": "pmLLTxdbJDSoQElfzseF34NH4w32",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-01T23:36:41.883Z",
    "updatedAt": "2025-06-01T23:36:41.883Z"
  }
}
```

**⏱️ Duration:** 550.9 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (518.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "pmLLTxdbJDSoQElfzseF34NH4w32",
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
    "content-length": "89",
    "etag": "W/\"59-t82dezLk6JWNYWqjKuc9OO6GB9A\"",
    "date": "Sun, 01 Jun 2025 23:36:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error inviting user",
    "details": "User is already a member of this organization"
  }
}
```

**⏱️ Duration:** 518.5 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1027.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1748821002465@example.com",
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
    "content-length": "1500",
    "etag": "W/\"5dc-fKEOqJGanP5QSBlrBJvVdZE5yU4\"",
    "date": "Sun, 01 Jun 2025 23:36:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "bUs0dE9FlaO2Egepeuyh1uYgvZl1",
      "email": "no-perm-invite-1748821002465@example.com",
      "name": "No Permission Invite",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAwMiwidXNlcl9pZCI6ImJVczBkRTlGbGFPMkVnZXBldXloMXVZZ3ZabDEiLCJzdWIiOiJiVXMwZEU5RmxhTzJFZ2VwZXV5aDF1WWd2WmwxIiwiaWF0IjoxNzQ4ODIxMDAyLCJleHAiOjE3NDg4MjQ2MDIsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0ODgyMTAwMjQ2NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ4ODIxMDAyNDY1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.FBjDBy4emP1dqLEBrT48rFCWPFGXPEm0q7dAjeUysMiFTeUgZEzoyd9G8wHZ6OOc4imcNzr-avQex-AcNQpNG8a-Ufh5GLpulnMZA_j_yLtmdE2ur3_PKn50XN0ysgkTWvHxQYY7m81JPqN1J3XzXrmrkoxsQpWsSeOMHgST__XezBPjDlEMQiqTW7WMLvLVzHTjUvBtZiZDU_l_Pm-R87mcvJzf1a6TpRANDZwslY7rD3l5sj3UsKo4hDSGwhdKU1HFWrjUmtfWTzDWJWCgEAZHqOyVj_-kBqwO6NAzoFgDIxkd-Uhcq0Uw4SORECtAJgAnQnSc7ir0KTNnuK6qRw",
      "refreshToken": "AMf-vBxopBBc8Q_CiHRl_ywSPd9ffWofThNBM6Ci95shjgQnxSJ2KC8yEiMcbnGUp4X2cKzi2OFYn8s2ZXJTrz2xYKVJqY_KIawUags2Mzhv9bdJ4H_mKnFJPkQxidbetDc02te4Y0kQWt7cmnVFVfcEoS0vSdFGIntOhmu51hw8LtwjMKJS0eOU2o3cg8Vvuuums-h_T4Q5LRxMNvuSbfXIeMBPr6I_aH8QXa2PTY2Qmfhhu-DIMAhMi9z5GRAcaOWBHxM9DvZ1",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1027.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (399.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk5OSwidXNlcl9pZCI6InA5Yk9HNTF0RVZQVmttQ1pQWUlST0VQYkRwcjEiLCJzdWIiOiJwOWJPRzUxdEVWUFZrbUNaUFlJUk9FUGJEcHIxIiwiaWF0IjoxNzQ4ODIwOTk5LCJleHAiOjE3NDg4MjQ1OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMDk5ODUyNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIwOTk4NTI1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OjLQ-19LIflwnoYH8T37ePlroF9yTCxJTqu3UYmuYP_WFYZeXq8LWXWgLgePouHRkFbWuNliB5ukEw75L6OhGTNYT8TYACmyg32kttf9lnTWM20DHdPg7PZ3avDgz3qANmE_fiWvoMPUS2Gz532hz7cwqGaT8EJq7WZqc7Rr1cONx8H-pRvtFDW7vMLRuEVTfvYAn1Ki9UJeuy4xuYFHJl3RRVf9Wx3ABMQcBipI9I8xrf_0SVT-aPApaWRm2JioA0N_O2MQbklmZcM9moUh9TIyrEqdmb5eP7nOM8TD_yDxlNHMu0k_ewqaY7XlsfTi1c8_1JZIDXeHO1H-KV0wqg"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "bUs0dE9FlaO2Egepeuyh1uYgvZl1",
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
    "content-length": "55",
    "etag": "W/\"37-ays5V8sR/9Ot1p9IQnMVHygTNN4\"",
    "date": "Sun, 01 Jun 2025 23:36:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 399.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 7.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (930.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1748821003894@example.com",
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
    "content-length": "1454",
    "etag": "W/\"5ae-LfSbRGF5MQ4VHtPO1ovZGYV7/G0\"",
    "date": "Sun, 01 Jun 2025 23:36:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "sZq4UE1gnLSzfQAkLkRezDPI5C72",
      "email": "admin-user-1748821003894@example.com",
      "name": "Admin User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAwNCwidXNlcl9pZCI6InNacTRVRTFnbkxTemZRQWtMa1JlekRQSTVDNzIiLCJzdWIiOiJzWnE0VUUxZ25MU3pmUUFrTGtSZXpEUEk1QzcyIiwiaWF0IjoxNzQ4ODIxMDA0LCJleHAiOjE3NDg4MjQ2MDQsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ4ODIxMDAzODk0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0ODgyMTAwMzg5NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A18i53pnspnHQZYsbEzLuE2c4_xW11qQB0r3c67dftVC9F5JuJJRIQHvuRz2D2TPkQJ6_5KlE3bQXZCnvFHyMlDA26yy4vvqYcWQTni5uhcR3qfv87hOodk8j5Ra2hhV5uYmFaaZYih9kDnTkQwVm91jUa0PFcYb1mNsjGnkSgTvZjxL2OSpthAhy0VuBCoi6wSsJUU8JaA7eYJCfg-J-MzMjJT6_rZaHBjzz_DOQl8it6-1EwRYfe95NhfIGcZmuH52o2ORiIRkIbbBrvWD2h_Y9tL6EYudi6PXXLihrEeXNVdQkUMimVyp6bSPfZjtg_r9_ynhWUasvfRCWp1zYQ",
      "refreshToken": "AMf-vBzYsDFqM-oelEbdKt2Y2TnmgsbDQaMVNcjSQPT4UYmWaCtzETNSu9XvFqH-h9CypXhEqiPTv5sGKTUtZTrGRuuwXEOckG-UWSOUw3_IIbpCcA0J2z8F-bWsyys9xoxbPa3i2-6LwyrrNt2ukPlneb4iH0QJDrwC8aM68UWWHbkmpmxICuT07UWu5sC4iiNK5B-Ng7C87a4fe17oUpsTEO2tWZIjzxjCTHykXfUTUDvaigCeLxw",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 930.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (497.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "sZq4UE1gnLSzfQAkLkRezDPI5C72",
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
    "etag": "W/\"fc-bsicMRBJ7DUc9S74zEZjZtE8Lbk\"",
    "date": "Sun, 01 Jun 2025 23:36:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "61852bbb-db1e-4a84-8acc-11630527d3eb",
    "userId": "sZq4UE1gnLSzfQAkLkRezDPI5C72",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-06-01T23:36:45.264Z",
    "updatedAt": "2025-06-01T23:36:45.264Z"
  }
}
```

**⏱️ Duration:** 497.7 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (932.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1748821005322@example.com",
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
    "content-length": "1464",
    "etag": "W/\"5b8-cUSvji+tJUzqWxdKY/mUizz1QHE\"",
    "date": "Sun, 01 Jun 2025 23:36:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "b624NxCdaWZXqQxIqq2w7hzSZCB3",
      "email": "manager-user-1748821005322@example.com",
      "name": "Manager User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAwNSwidXNlcl9pZCI6ImI2MjROeENkYVdaWHFReElxcTJ3N2h6U1pDQjMiLCJzdWIiOiJiNjI0TnhDZGFXWlhxUXhJcXEydzdoelNaQ0IzIiwiaWF0IjoxNzQ4ODIxMDA1LCJleHAiOjE3NDg4MjQ2MDUsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDg4MjEwMDUzMjJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDg4MjEwMDUzMjJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.KZR8-nc_bxO3KjRJ7jTsDLpOU_TdzeVbu0ncNvcgPVTuXSkDyZvV3pzZWai1XO67Ac77nV1P3i02rvIuQtoUZbH6CEWK21q8UJnvtcRe2SJWG_VeAgZ1sbUhLnH4bltfi9Z4Jbj0MtsYsHCUpIM841XZUuatLsLAqd-g2Wbi0zrn2cqn3pQj0cRhQ-ooksHmHZNUeDKrrZxin3bmUAiqgioE1q_5tK9k6vtQ2QYbH5UL_tLQv6gdJ3GWfaBbGx0yKnFiLAzagysoks2ypBtbHo9VkeLwBgolm5m1s4WWJLzdYoYdceUttiYHg5ZGP7Pa62Bs0WeMIy8zfb_Up_qqgw",
      "refreshToken": "AMf-vBx9hYEVu4rCv3HEexjcDCGsJi1q_pBMNG3e4w5da1PgJwxrZwqWdSMWNTB2dxyfBeo_K9r6QHr8KRFpecXiu6B2t2ealSPxAt5gkw_b-WVGcg10e92vMJtymLRgHq_o5pTVuvfE2Sc0aMhOUYf6HDKJZfQuIzRPurnmXQz-a_uWSpajv53nu2QATcUhV0FzfCeE8micA9n3d-ai4OP-glEtAi5-eUzEEhSQaK2jf4dtWh0z35w",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 932.0 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (490.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "b624NxCdaWZXqQxIqq2w7hzSZCB3",
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
    "content-length": "254",
    "etag": "W/\"fe-vHqOLF59o2WiNJXPq/3CUzhIM0A\"",
    "date": "Sun, 01 Jun 2025 23:36:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "41d7056a-b511-4244-bc4e-ba20477bc741",
    "userId": "b624NxCdaWZXqQxIqq2w7hzSZCB3",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-01T23:36:46.691Z",
    "updatedAt": "2025-06-01T23:36:46.691Z"
  }
}
```

**⏱️ Duration:** 490.7 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (882.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1748821006746@example.com",
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
    "content-length": "1494",
    "etag": "W/\"5d6-2KX82qVGbctpj//79yegBh9Na6I\"",
    "date": "Sun, 01 Jun 2025 23:36:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "ygphKyO8cqemhqexaEPvYPyCfAs2",
      "email": "moderator-user-1748821006746@example.com",
      "name": "Moderator User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAwNywidXNlcl9pZCI6InlncGhLeU84Y3FlbWhxZXhhRVB2WVB5Q2ZBczIiLCJzdWIiOiJ5Z3BoS3lPOGNxZW1ocWV4YUVQdllQeUNmQXMyIiwiaWF0IjoxNzQ4ODIxMDA3LCJleHAiOjE3NDg4MjQ2MDcsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0ODgyMTAwNjc0NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ4ODIxMDA2NzQ2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.JSooR_Q0HJHzafbCQeZWzUN3DjuW2fCqofHZflkEFhbHcxe0LaXDvHjoMg1ERo5aRf93OLPbxuT3CKD-2_fDBqxxaMxDH36cZz5RXc9nQKrsuD9MZFRrsh5bF9f0YS82tKt5raVO-5OAbgNB9XX7WX0QlBy_HAVDGG7c6HhlUXQLWhiHxAxZ-GcS8JvLgdsK0dLAWUwdTlDVhdcugjvlfkdHPdkrQX3EB8SJIFFpHr66FF_0VuH2BHzsHefNkuuISQKNqLoBZ87_TNypJ7UxGzGGuxKm-O9Kl7NwqauxMteAcJvFYq3UERMcfWD2Q2sIS5MMbcTTVFgwIY5tnq39Cg",
      "refreshToken": "AMf-vBwSC3UdiYQlYCvs-k6Luky6a1HIuH8mVnb-92Ec8J5unAwj5rasQrOs4zl0GaqxHtCfPOiAO3sSXV2R9ye9_FQqZrzohPAwttfCRmFdvLsIqYgNZ3Dczxkq6OT0RScezZCRaemj3fvslQmrc9ACoTdWYagYl6vYnugLp7ocN0Yii6gkJfDbzF01OuJIUOap_hy3fWVTaIlUZ7tApB-32m3GJe69j2tSI9o4H_GYoOcUbu10Kb9kotDQvYEiaL3abZna3u4C",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 882.8 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (536.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "ygphKyO8cqemhqexaEPvYPyCfAs2",
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
    "content-length": "256",
    "etag": "W/\"100-u49wBRoWfFIb190fnIb36NT3dPM\"",
    "date": "Sun, 01 Jun 2025 23:36:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8cac7d3b-b43d-4657-aa67-a9e7cfd33da0",
    "userId": "ygphKyO8cqemhqexaEPvYPyCfAs2",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "moderator",
    "status": "active",
    "createdAt": "2025-06-01T23:36:48.102Z",
    "updatedAt": "2025-06-01T23:36:48.102Z"
  }
}
```

**⏱️ Duration:** 536.2 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (959.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1748821008166@example.com",
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
    "content-length": "1494",
    "etag": "W/\"5d6-/ixLhKeqfVIPxq6x0iMTLomcHN4\"",
    "date": "Sun, 01 Jun 2025 23:36:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "DiBes7IkXvWQkclv7hmOwY35i8g1",
      "email": "volunteer-user-1748821008166@example.com",
      "name": "Volunteer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAwOCwidXNlcl9pZCI6IkRpQmVzN0lrWHZXUWtjbHY3aG1Pd1kzNWk4ZzEiLCJzdWIiOiJEaUJlczdJa1h2V1FrY2x2N2htT3dZMzVpOGcxIiwiaWF0IjoxNzQ4ODIxMDA4LCJleHAiOjE3NDg4MjQ2MDgsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0ODgyMTAwODE2NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ4ODIxMDA4MTY2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.CZSuADL477II_bIU988XcOXIr442551IJLNMeO2r4s0xWtGRcv-rLxozH-BUiwM3IgBOUsYnUM-xZx0eoyDQOk5HO7P6dgiCnSKB9LSt8Nu1EO2NJh1er44prNWq9R6D3DSewta8xwKw1JeMtgdD4bpttuXIMaDQYIIxFOaKuMpBdo4XltgVQA1KwrlLA8fFkim14-ng9z25WVKztfJQQ2jtP8k28b7MNsTf0kNvbCJ6qixkrIc2JAYQpKR3fLEpDQFUI7YCZN2lIgelcNmSAaV5ujiquPp7xrAmw27bftZRinjmcWbrlt1jjBeD7zEuXkCjtqfkw4opOuRi_EsxuA",
      "refreshToken": "AMf-vByhuOG6vL2E5fWZP3czJiriNCc5xIjUzcXgMJZ2EwvtE_yjvhmLGp-lYzpDkvJVVGBvc5so5h3GLtaHyXJ_k4yf2_shCFO8AhzRnHyZ6Qr0uBqNgg2KrKsHcAzN33oOmK8KSuyIrGRrUJkRbX1zkygfQ6widje7zV8YpIWsniPQEnzLg7zvcw2OLnC5_M6e_71-Y_O0589Elg9zvShxPED1C2atUmVr29s-IwirsGNTHJVEye7Ke4c5aHJngHCNAvnuXHqE",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 959.2 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (497.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "DiBes7IkXvWQkclv7hmOwY35i8g1",
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
    "content-length": "256",
    "etag": "W/\"100-6C/aUPnyk/ybGCLePzRmVVGRTaw\"",
    "date": "Sun, 01 Jun 2025 23:36:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8d4e259f-097c-4da0-9408-f67d18810aa3",
    "userId": "DiBes7IkXvWQkclv7hmOwY35i8g1",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-01T23:36:49.567Z",
    "updatedAt": "2025-06-01T23:36:49.567Z"
  }
}
```

**⏱️ Duration:** 497.3 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (827.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1748821009624@example.com",
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
    "content-length": "1468",
    "etag": "W/\"5bc-PeuA5GiN86sPubei+4Jzp+2he+I\"",
    "date": "Sun, 01 Jun 2025 23:36:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "a4OC40ptLaerAQSGmJ1omjVyEeA3",
      "email": "observer-user-1748821009624@example.com",
      "name": "Observer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAwOSwidXNlcl9pZCI6ImE0T0M0MHB0TGFlckFRU0dtSjFvbWpWeUVlQTMiLCJzdWIiOiJhNE9DNDBwdExhZXJBUVNHbUoxb21qVnlFZUEzIiwiaWF0IjoxNzQ4ODIxMDA5LCJleHAiOjE3NDg4MjQ2MDksImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ4ODIxMDA5NjI0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0ODgyMTAwOTYyNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pQNQsgyM8WSeibzD2Pnd3GkgtWJOmf1_v0bEA3r8XNODdFUV1jwQdnxSfSnrwW0bR4I4GlFJHpk9S6snNdjq1lTC0mC2DJV6gHbuJv3t9XyXBiLexDkmDb6lxqlhCvKbZiCCJ4GgboF_8diERZfdWLIfVUiclcEdKYb3k1RTR2zGYTQLJFPxKVvLOS8sZ_et-cJjE4AsIihtfJIG_lj0dzeyURjR-7GRNLKD2Q-aqdlBNnp0X3292DRP-FMX80ac1pZRE3r_1kx9gWKMm70s9a_PjirmpaU1w73ZJqcALi74xq71EbyGryzKkgMG4J9kfls6gwRxTYha68Y6HeBpIQ",
      "refreshToken": "AMf-vByTCV4dzqAqCrqon4Kxxt45sK7bXTgb6bwHmvoz_DR2lanI_e-VLg7TL4uBjGCkD04PMcVg7FLX40Wecf594M3gAONWKyDNzWHHnpFGbrmcrj7gZVvtI__l7gAXL_KPZWVVQEAeLWoJ3zEUJ1lBE3fOasSRwHQEBeKn5uEayG1MSMyu9PtTf3oOHg7Cpc64VBOk_bCJ0kgLRCeKrcoIc9PF9DlUJOAN4MMtToV5Sq78DOM_F3c",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 827.0 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (472.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "a4OC40ptLaerAQSGmJ1omjVyEeA3",
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
    "content-length": "255",
    "etag": "W/\"ff-WBiR1hPf7nZnrNNM3f+iFLc/m+A\"",
    "date": "Sun, 01 Jun 2025 23:36:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6d720a04-f5bd-4206-8a40-5aae13012e0d",
    "userId": "a4OC40ptLaerAQSGmJ1omjVyEeA3",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "observer",
    "status": "active",
    "createdAt": "2025-06-01T23:36:50.867Z",
    "updatedAt": "2025-06-01T23:36:50.867Z"
  }
}
```

**⏱️ Duration:** 472.6 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=2bcf5cae-01e8-4524-b67b-450c0ed0b378 (538.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "1533",
    "etag": "W/\"5fd-w6ZrtTg1vdnHaXjmypkQOTD37hc\"",
    "date": "Sun, 01 Jun 2025 23:36:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "43ef010b-e7e2-4404-8bef-4a488af2be2a",
      "userId": "pmLLTxdbJDSoQElfzseF34NH4w32",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-01T23:36:41.883Z",
      "updatedAt": "2025-06-01T23:36:41.883Z"
    },
    {
      "id": "61852bbb-db1e-4a84-8acc-11630527d3eb",
      "userId": "sZq4UE1gnLSzfQAkLkRezDPI5C72",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-01T23:36:45.264Z",
      "updatedAt": "2025-06-01T23:36:45.264Z"
    },
    {
      "id": "41d7056a-b511-4244-bc4e-ba20477bc741",
      "userId": "b624NxCdaWZXqQxIqq2w7hzSZCB3",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-01T23:36:46.691Z",
      "updatedAt": "2025-06-01T23:36:46.691Z"
    },
    {
      "id": "8cac7d3b-b43d-4657-aa67-a9e7cfd33da0",
      "userId": "ygphKyO8cqemhqexaEPvYPyCfAs2",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-01T23:36:48.102Z",
      "updatedAt": "2025-06-01T23:36:48.102Z"
    },
    {
      "id": "8d4e259f-097c-4da0-9408-f67d18810aa3",
      "userId": "DiBes7IkXvWQkclv7hmOwY35i8g1",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-01T23:36:49.567Z",
      "updatedAt": "2025-06-01T23:36:49.567Z"
    },
    {
      "id": "6d720a04-f5bd-4206-8a40-5aae13012e0d",
      "userId": "a4OC40ptLaerAQSGmJ1omjVyEeA3",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-01T23:36:50.867Z",
      "updatedAt": "2025-06-01T23:36:50.867Z"
    }
  ]
}
```

**⏱️ Duration:** 538.3 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (431.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "date": "Sun, 01 Jun 2025 23:36:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 431.9 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=p9bOG51tEVPVkmCZPYIROEPbDpr1 (488.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk5OSwidXNlcl9pZCI6InA5Yk9HNTF0RVZQVmttQ1pQWUlST0VQYkRwcjEiLCJzdWIiOiJwOWJPRzUxdEVWUFZrbUNaUFlJUk9FUGJEcHIxIiwiaWF0IjoxNzQ4ODIwOTk5LCJleHAiOjE3NDg4MjQ1OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMDk5ODUyNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIwOTk4NTI1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OjLQ-19LIflwnoYH8T37ePlroF9yTCxJTqu3UYmuYP_WFYZeXq8LWXWgLgePouHRkFbWuNliB5ukEw75L6OhGTNYT8TYACmyg32kttf9lnTWM20DHdPg7PZ3avDgz3qANmE_fiWvoMPUS2Gz532hz7cwqGaT8EJq7WZqc7Rr1cONx8H-pRvtFDW7vMLRuEVTfvYAn1Ki9UJeuy4xuYFHJl3RRVf9Wx3ABMQcBipI9I8xrf_0SVT-aPApaWRm2JioA0N_O2MQbklmZcM9moUh9TIyrEqdmb5eP7nOM8TD_yDxlNHMu0k_ewqaY7XlsfTi1c8_1JZIDXeHO1H-KV0wqg"
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
    "date": "Sun, 01 Jun 2025 23:36:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 488.0 ms  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.38s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (370.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "60",
    "etag": "W/\"3c-lnQstZdoAYnX8DIUUGusK8PdR5o\"",
    "date": "Sun, 01 Jun 2025 23:36:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Either userId or organizationId must be provided"
  }
}
```

**⏱️ Duration:** 370.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.34s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (337.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk5OSwidXNlcl9pZCI6InA5Yk9HNTF0RVZQVmttQ1pQWUlST0VQYkRwcjEiLCJzdWIiOiJwOWJPRzUxdEVWUFZrbUNaUFlJUk9FUGJEcHIxIiwiaWF0IjoxNzQ4ODIwOTk5LCJleHAiOjE3NDg4MjQ1OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMDk5ODUyNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIwOTk4NTI1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OjLQ-19LIflwnoYH8T37ePlroF9yTCxJTqu3UYmuYP_WFYZeXq8LWXWgLgePouHRkFbWuNliB5ukEw75L6OhGTNYT8TYACmyg32kttf9lnTWM20DHdPg7PZ3avDgz3qANmE_fiWvoMPUS2Gz532hz7cwqGaT8EJq7WZqc7Rr1cONx8H-pRvtFDW7vMLRuEVTfvYAn1Ki9UJeuy4xuYFHJl3RRVf9Wx3ABMQcBipI9I8xrf_0SVT-aPApaWRm2JioA0N_O2MQbklmZcM9moUh9TIyrEqdmb5eP7nOM8TD_yDxlNHMu0k_ewqaY7XlsfTi1c8_1JZIDXeHO1H-KV0wqg"
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
    "content-length": "50",
    "etag": "W/\"32-Td9nrjec2DexqGj0GaEVEwFA1J0\"",
    "date": "Sun, 01 Jun 2025 23:36:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You can only view your own memberships"
  }
}
```

**⏱️ Duration:** 337.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/43ef010b-e7e2-4404-8bef-4a488af2be2a (501.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "253",
    "etag": "W/\"fd-qPOtiDqWvYIYv76Fex3vLOoNkhI\"",
    "date": "Sun, 01 Jun 2025 23:36:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "43ef010b-e7e2-4404-8bef-4a488af2be2a",
    "userId": "pmLLTxdbJDSoQElfzseF34NH4w32",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:36:41.883Z",
    "updatedAt": "2025-06-01T23:36:41.883Z"
  }
}
```

**⏱️ Duration:** 501.6 ms  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (390.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "32",
    "etag": "W/\"20-EjBVX4IPXd/7vhzI4P9mqqWc0qY\"",
    "date": "Sun, 01 Jun 2025 23:36:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 390.6 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/43ef010b-e7e2-4404-8bef-4a488af2be2a (528.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "role": "manager"
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
    "content-length": "254",
    "etag": "W/\"fe-PNFnppNIX09ryqCgst0WjWnLlQw\"",
    "date": "Sun, 01 Jun 2025 23:36:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "43ef010b-e7e2-4404-8bef-4a488af2be2a",
    "userId": "pmLLTxdbJDSoQElfzseF34NH4w32",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-01T23:36:41.883Z",
    "updatedAt": "2025-06-01T23:36:54.433Z"
  }
}
```

**⏱️ Duration:** 528.7 ms  

</details>


---

### Test: Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.34s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/43ef010b-e7e2-4404-8bef-4a488af2be2a (338.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "role": "invalid-role"
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
    "content-length": "24",
    "etag": "W/\"18-7EBHVoSSAXQ3ix+DKmlz+tk3mGw\"",
    "date": "Sun, 01 Jun 2025 23:36:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid role"
  }
}
```

**⏱️ Duration:** 338.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/43ef010b-e7e2-4404-8bef-4a488af2be2a (662.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk5OSwidXNlcl9pZCI6InA5Yk9HNTF0RVZQVmttQ1pQWUlST0VQYkRwcjEiLCJzdWIiOiJwOWJPRzUxdEVWUFZrbUNaUFlJUk9FUGJEcHIxIiwiaWF0IjoxNzQ4ODIwOTk5LCJleHAiOjE3NDg4MjQ1OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMDk5ODUyNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIwOTk4NTI1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OjLQ-19LIflwnoYH8T37ePlroF9yTCxJTqu3UYmuYP_WFYZeXq8LWXWgLgePouHRkFbWuNliB5ukEw75L6OhGTNYT8TYACmyg32kttf9lnTWM20DHdPg7PZ3avDgz3qANmE_fiWvoMPUS2Gz532hz7cwqGaT8EJq7WZqc7Rr1cONx8H-pRvtFDW7vMLRuEVTfvYAn1Ki9UJeuy4xuYFHJl3RRVf9Wx3ABMQcBipI9I8xrf_0SVT-aPApaWRm2JioA0N_O2MQbklmZcM9moUh9TIyrEqdmb5eP7nOM8TD_yDxlNHMu0k_ewqaY7XlsfTi1c8_1JZIDXeHO1H-KV0wqg"
  },
  "data": {
    "role": "volunteer"
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
    "content-length": "55",
    "etag": "W/\"37-Oq3Iuri8gpo9dzF8K+D/QCfmQJ0\"",
    "date": "Sun, 01 Jun 2025 23:36:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can modify roles."
  }
}
```

**⏱️ Duration:** 662.7 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (857.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1748821015546@example.com",
    "password": "TestPassword123!",
    "name": "User for Removal"
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
    "content-length": "1464",
    "etag": "W/\"5b8-dVqzN8R9/lKblTwawrp6tSGlA5s\"",
    "date": "Sun, 01 Jun 2025 23:36:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "sKndzZlXuyTvnhXXW9b2IX3UOX92",
      "email": "remove-user-1748821015546@example.com",
      "name": "User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAxNSwidXNlcl9pZCI6InNLbmR6WmxYdXlUdm5oWFhXOWIySVgzVU9YOTIiLCJzdWIiOiJzS25kelpsWHV5VHZuaFhYVzliMklYM1VPWDkyIiwiaWF0IjoxNzQ4ODIxMDE1LCJleHAiOjE3NDg4MjQ2MTUsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0ODgyMTAxNTU0NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ4ODIxMDE1NTQ2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.DeeWbuQGeYvoj11p5Bj0AN8jmAVTzipybqlDlXP1EYz7DFrXl4fXi003wjQ7SGe0LaBf8wCw3Zr8aQCBBNlbuGVEHHoddQIaDrVtNvStMVwuf_zu77DiSVDkud9gMsDjcmtYM7uGnhHmiKlaVWhq1b8Zex3IyPTChbLxYXR0_M5Do4KHw1tMuXJM1lKR7vPL0O9fse1KLISz2owNRmdrqnUyiqZH8Lf87xbxVVvhfSzQCIid_c36w5ac0wWnlR6yNFW4fJZwmhtSC9aL1qJgGUSf8tMg4eyzsACYeku-rfLHghZZ3QIgmyln_XqoTBK-e_tlfHfW1h5Hn0AxVIMBNg",
      "refreshToken": "AMf-vBz10ECA6N9WBVwh5ZMra6Ev3bmsn2reTC97aDRNdyH_3pU9Vy_YNmSYoIK7TIPcO6N2NXYospeRrZVxs-GdzHcstSxpy7XnKFEyMhe9CKg1A3turHEoRJCVI5yvY9WGlDrl01SGMIOqN8IS-awxFr8m6BvYqhq0asn03RIgkaWUzb_HfaenZaUdMNQv5Q_6bb86-EDivZ7d_3hgN8jLxetrtEdw9WJWVgVS2t1SMklmqqbTwGw",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 857.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (491.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "sKndzZlXuyTvnhXXW9b2IX3UOX92",
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
    "content-length": "256",
    "etag": "W/\"100-L1swdTeR2ITvdwA7+XbrSRFHShM\"",
    "date": "Sun, 01 Jun 2025 23:36:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d4481c4a-37d1-4612-8972-803248f3bcb8",
    "userId": "sKndzZlXuyTvnhXXW9b2IX3UOX92",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-01T23:36:56.840Z",
    "updatedAt": "2025-06-01T23:36:56.840Z"
  }
}
```

**⏱️ Duration:** 491.5 ms  

</details>


---

### Test: Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.07s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/d4481c4a-37d1-4612-8972-803248f3bcb8 (539.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "45",
    "etag": "W/\"2d-4JVGYzWraRq0/MamHFXRx9/17ww\"",
    "date": "Sun, 01 Jun 2025 23:36:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 539.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/d4481c4a-37d1-4612-8972-803248f3bcb8 (533.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "32",
    "etag": "W/\"20-EjBVX4IPXd/7vhzI4P9mqqWc0qY\"",
    "date": "Sun, 01 Jun 2025 23:36:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 533.5 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 1.91s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (915.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1748821017971@example.com",
    "password": "TestPassword123!",
    "name": "Another User for Removal"
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
    "content-length": "1522",
    "etag": "W/\"5f2-TSBArUJ6/u+dRgCdJJhNzqOY2nY\"",
    "date": "Sun, 01 Jun 2025 23:36:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "EPbGaLoJGwaVStq9XO6kZoBKVcO2",
      "email": "another-remove-user-1748821017971@example.com",
      "name": "Another User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAxOCwidXNlcl9pZCI6IkVQYkdhTG9KR3dhVlN0cTlYTzZrWm9CS1ZjTzIiLCJzdWIiOiJFUGJHYUxvSkd3YVZTdHE5WE82a1pvQktWY08yIiwiaWF0IjoxNzQ4ODIxMDE4LCJleHAiOjE3NDg4MjQ2MTgsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ4ODIxMDE3OTcxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0ODgyMTAxNzk3MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.L1ozLChhZK5JhHEsnCcmlHg4UoF46G3ujs5DXujMRG633sYLywYb3rhsAJmhqjAQRKZQ3ChBxMD6KRINeyMyjZjrWuzftef8nr0DfOfblGFcGrgvidebAfhIgR01dBv98GL6-kKznljgelBcpAbUD0JlHfPz5vGnl1Vu_TBcHa2jCbeoWwScs5u11UK2L7kY5Q52KV3bo7BZzKVB1Zyz6j3tuZfaxHrGGKFT8rdoPRPRi7KG_Zo495AbChxs3jxef4ecHtD4ZuHbDGw6mfssvuJw8VgErJ3HacvnS4_EAE92UQbLPLanG58QZGfL6gIS_Wri3di4jcKjMqil2nsJ1Q",
      "refreshToken": "AMf-vBwocOSsToJvxmndX3QFO-bR-CVD8pXgwfKHhxivEW3lDi2YoHfZmA0CiDw_Ne3tv3C2w5xqEPoV-L27vD8eB3jeNURpyuqNJ4E_h9enywfSX9HCXUjkmiu4aYmvt4225C-sKyIzpbSLkV6dY9KattBdZ0B4oVZZ7KVX_Pj5Hy_Vbsr1C_NGWrnBmBfZm0yvPd6OCI6Oo_d5XgPFkAo6rF-HTfXdaD6rbbk7uPulpMHxvH1FJ6fGWh4O4w9Y71ZlFFG4Hv9G",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 915.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (566.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "EPbGaLoJGwaVStq9XO6kZoBKVcO2",
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
    "content-length": "256",
    "etag": "W/\"100-lZ+RqkpR2ji3ZoLb5qcqrFNMBNY\"",
    "date": "Sun, 01 Jun 2025 23:36:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f5d1e05b-7e07-4184-bdd7-14033a41d529",
    "userId": "EPbGaLoJGwaVStq9XO6kZoBKVcO2",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-01T23:36:59.397Z",
    "updatedAt": "2025-06-01T23:36:59.397Z"
  }
}
```

**⏱️ Duration:** 566.3 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/f5d1e05b-7e07-4184-bdd7-14033a41d529 (428.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMDk5OSwidXNlcl9pZCI6InA5Yk9HNTF0RVZQVmttQ1pQWUlST0VQYkRwcjEiLCJzdWIiOiJwOWJPRzUxdEVWUFZrbUNaUFlJUk9FUGJEcHIxIiwiaWF0IjoxNzQ4ODIwOTk5LCJleHAiOjE3NDg4MjQ1OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMDk5ODUyNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIwOTk4NTI1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.OjLQ-19LIflwnoYH8T37ePlroF9yTCxJTqu3UYmuYP_WFYZeXq8LWXWgLgePouHRkFbWuNliB5ukEw75L6OhGTNYT8TYACmyg32kttf9lnTWM20DHdPg7PZ3avDgz3qANmE_fiWvoMPUS2Gz532hz7cwqGaT8EJq7WZqc7Rr1cONx8H-pRvtFDW7vMLRuEVTfvYAn1Ki9UJeuy4xuYFHJl3RRVf9Wx3ABMQcBipI9I8xrf_0SVT-aPApaWRm2JioA0N_O2MQbklmZcM9moUh9TIyrEqdmb5eP7nOM8TD_yDxlNHMu0k_ewqaY7XlsfTi1c8_1JZIDXeHO1H-KV0wqg"
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
    "content-length": "57",
    "etag": "W/\"39-KXTRBE4nqrJKJVLCgd/t8rf6Jes\"",
    "date": "Sun, 01 Jun 2025 23:36:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can remove members."
  }
}
```

**⏱️ Duration:** 428.6 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (916.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748821019882@example.com",
    "password": "TestPassword123!",
    "name": "Self Leave User"
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
    "content-length": "1499",
    "etag": "W/\"5db-Z1c5MnqhDLCOKrba6ARY9fsdTnc\"",
    "date": "Sun, 01 Jun 2025 23:37:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "PbukRHKPZvYI4sSR0ZbuLWh03T43",
      "email": "self-leave-user-1748821019882@example.com",
      "name": "Self Leave User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyMCwidXNlcl9pZCI6IlBidWtSSEtQWnZZSTRzU1IwWmJ1TFdoMDNUNDMiLCJzdWIiOiJQYnVrUkhLUFp2WUk0c1NSMFpidUxXaDAzVDQzIiwiaWF0IjoxNzQ4ODIxMDIwLCJleHAiOjE3NDg4MjQ2MjAsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjEwMTk4ODJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjEwMTk4ODJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IkiEc4sTEo-6EAhNJYqVNwYNw2rmGoXHr49pbydqmq7fPd9oaNgKopOx_Srw09bQ77EJlS9MXGrjNohZ8-jT9Je5X1QsrgQpkvKs-7q3wRriCE5GYJfx2aixKPMnhZ5gh_CoRPsVHuwlV_CTZ-InggJA8nSDXYLdoCO3x8dy7X8sxryUVOinykyv-LS9DgFJp9evJfQEfKs3uTM8LlJ2i6C7dibniyZrRagHDMETYeWpY8trb8T8t5B2c3YhhL_KK6IiF23ia2upt1V6OELgcqvcWkkeC4y2HjF7nLRGgtRL4c1ufehXb-cU0s6_zqtm-SOkGBP6uFgY1lhfpNvppg",
      "refreshToken": "AMf-vBwqceSjb0FMCCKd3RWVtxDdsW7qXFARnKdojG1m6_lNH2xxYZaMeWI7qwbtqk-qWYe5NrJ71rovhZgP3fqVUst3Q6WgzpxfwqvV-KPSMlxvF9Pg0kJI_F3YR-6B7p3UgY0Xfpec_nZmx_QnEMmayhSVLaEgR0junKr0HXrYvAY8Ua2gx_l73LH74DGIfPQMzPZknMs79Zzkd9L1kqd3xzTbmdZu_h2ipyAFNncb7IuRponXm6-fsmSygNqp3ME1DUUAzdeB",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 916.8 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (242.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748821019882@example.com",
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
    "content-length": "1450",
    "etag": "W/\"5aa-BBTKIb9pmcDym62Yfc1JJm8i9kE\"",
    "date": "Sun, 01 Jun 2025 23:37:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "PbukRHKPZvYI4sSR0ZbuLWh03T43",
      "email": "self-leave-user-1748821019882@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyMCwidXNlcl9pZCI6IlBidWtSSEtQWnZZSTRzU1IwWmJ1TFdoMDNUNDMiLCJzdWIiOiJQYnVrUkhLUFp2WUk0c1NSMFpidUxXaDAzVDQzIiwiaWF0IjoxNzQ4ODIxMDIwLCJleHAiOjE3NDg4MjQ2MjAsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjEwMTk4ODJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjEwMTk4ODJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IkiEc4sTEo-6EAhNJYqVNwYNw2rmGoXHr49pbydqmq7fPd9oaNgKopOx_Srw09bQ77EJlS9MXGrjNohZ8-jT9Je5X1QsrgQpkvKs-7q3wRriCE5GYJfx2aixKPMnhZ5gh_CoRPsVHuwlV_CTZ-InggJA8nSDXYLdoCO3x8dy7X8sxryUVOinykyv-LS9DgFJp9evJfQEfKs3uTM8LlJ2i6C7dibniyZrRagHDMETYeWpY8trb8T8t5B2c3YhhL_KK6IiF23ia2upt1V6OELgcqvcWkkeC4y2HjF7nLRGgtRL4c1ufehXb-cU0s6_zqtm-SOkGBP6uFgY1lhfpNvppg",
      "refreshToken": "AMf-vBwvFaTs2o6TQBhSLdr4ReolamJyvu0yNR7L3qTPqNX5C7FEca-5syE-eRSU7YEyPxTvH79JkyyeI98rT7eyNy3J-Zv7DvzoDKXWrmi37Tu1dFMoieK-BWUbtlN1pB1CkVacxzDCOcD6tXfgwCx6xrjiVAxNiqKDjOgm5NeDYuHwvYlfA4kieEYwsvU1rpp8UV01UxIdaCe6aU5FDQMJY2qnMjRbAs-t15ktog4xw9TTha18kKdJPFD-QXJfj3n_z0_Z8QnZ",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 242.6 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (541.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "PbukRHKPZvYI4sSR0ZbuLWh03T43",
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
    "etag": "W/\"fd-FhHmEKhveyjik/WmHPiLFwmkJSc\"",
    "date": "Sun, 01 Jun 2025 23:37:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "910c3aca-20be-470c-82c6-a66c7b7c7789",
    "userId": "PbukRHKPZvYI4sSR0ZbuLWh03T43",
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:37:01.527Z",
    "updatedAt": "2025-06-01T23:37:01.527Z"
  }
}
```

**⏱️ Duration:** 541.3 ms  

</details>


---

### Test: User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/910c3aca-20be-470c-82c6-a66c7b7c7789 (527.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyMCwidXNlcl9pZCI6IlBidWtSSEtQWnZZSTRzU1IwWmJ1TFdoMDNUNDMiLCJzdWIiOiJQYnVrUkhLUFp2WUk0c1NSMFpidUxXaDAzVDQzIiwiaWF0IjoxNzQ4ODIxMDIwLCJleHAiOjE3NDg4MjQ2MjAsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjEwMTk4ODJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjEwMTk4ODJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.IkiEc4sTEo-6EAhNJYqVNwYNw2rmGoXHr49pbydqmq7fPd9oaNgKopOx_Srw09bQ77EJlS9MXGrjNohZ8-jT9Je5X1QsrgQpkvKs-7q3wRriCE5GYJfx2aixKPMnhZ5gh_CoRPsVHuwlV_CTZ-InggJA8nSDXYLdoCO3x8dy7X8sxryUVOinykyv-LS9DgFJp9evJfQEfKs3uTM8LlJ2i6C7dibniyZrRagHDMETYeWpY8trb8T8t5B2c3YhhL_KK6IiF23ia2upt1V6OELgcqvcWkkeC4y2HjF7nLRGgtRL4c1ufehXb-cU0s6_zqtm-SOkGBP6uFgY1lhfpNvppg"
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
    "content-length": "57",
    "etag": "W/\"39-A/edggV42F7lwb68YE3BnJlkOY4\"",
    "date": "Sun, 01 Jun 2025 23:37:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "You have left the organization successfully"
  }
}
```

**⏱️ Duration:** 527.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/910c3aca-20be-470c-82c6-a66c7b7c7789 (416.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "32",
    "etag": "W/\"20-EjBVX4IPXd/7vhzI4P9mqqWc0qY\"",
    "date": "Sun, 01 Jun 2025 23:37:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 416.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1540.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748821022529@example.com",
    "password": "TestPassword123!",
    "name": "Other Org Admin"
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
    "content-length": "1499",
    "etag": "W/\"5db-zmEMSkGCqGhHZc+w2cbHUG6ustY\"",
    "date": "Sun, 01 Jun 2025 23:37:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "4gdxsEbJb4hf9vT7LKkOo0KNcEV2",
      "email": "other-org-admin-1748821022529@example.com",
      "name": "Other Org Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyMywidXNlcl9pZCI6IjRnZHhzRWJKYjRoZjl2VDdMS2tPbzBLTmNFVjIiLCJzdWIiOiI0Z2R4c0ViSmI0aGY5dlQ3TEtrT28wS05jRVYyIiwiaWF0IjoxNzQ4ODIxMDIzLCJleHAiOjE3NDg4MjQ2MjMsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.eHXPeZ8JwC6B7y9WYnK7ieuTPuzSO_xuxHLYtCYDFEKX8iwSUHsJwo9VQ1xqLYkkp3stHLm1Csmn9dN82Ht9--DDoBt08zewZoW821WR_QrQ9X7Pm1gHDW2YTCm27-_HbXZWbPaoF5Xpg_0jkutjyFsHHDGvswE_X-rHeomrCS8QyPZ2H7PLIus2Jy_D21hRFDj-P9Eb2y6PlCY5o0f2NY6f9c32UpJ6uY4B8xrPXuf-I1sYbx5xwYvnmC1CUmSGjO2iFzD9mTs47jatZElP7XIU6y-ztQySwdj9ba270Dp7ssKyyBMGXUp-m12nZ8D6UQpD6Z7-yRO-_I67Jn-Ylg",
      "refreshToken": "AMf-vBxrhTMunRVhsb6SsDgasbsauR1jJ2bfft4ODmG2ry7rZUfzxE0zVqExrOSm01S4tDD6vVqPPZBRr1E-HRkseUn8N3EkhA2xotyfsw9nwGnJDI_4vIscVyoVA2LxE8ViJOiyx14NPYYcg0HDsrmW9SRi7NR1Uj4OmIsmCUT-QGlOBJeYnYs342Nzu6rNm1eRLkgyN8HUUJcIISRKUG7RdlJkaFbsqnQOB2TYvZBfhHeFUNJ-B6iaF8D4PXfimjFqdENxjX8-",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1540.3 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (249.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748821022529@example.com",
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
    "content-length": "1450",
    "etag": "W/\"5aa-sbIiSZQJ4CK0pfBALgXv9y1Z5Ew\"",
    "date": "Sun, 01 Jun 2025 23:37:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "4gdxsEbJb4hf9vT7LKkOo0KNcEV2",
      "email": "other-org-admin-1748821022529@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyNCwidXNlcl9pZCI6IjRnZHhzRWJKYjRoZjl2VDdMS2tPbzBLTmNFVjIiLCJzdWIiOiI0Z2R4c0ViSmI0aGY5dlQ3TEtrT28wS05jRVYyIiwiaWF0IjoxNzQ4ODIxMDI0LCJleHAiOjE3NDg4MjQ2MjQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.o14WWkMbdMrZse7rog2q2CEW476BKeQN1CqMsApCL8Dk4CV43qCrJlkLH8IQ-UQebcPF-puBpHLpDi0HFmin8Z0d9z0xjY8C39dmMZJSyt1Z-tkkUqHplpibwCYugbRm8wh1P7-ZYGPzCIJv-3QTRsg-txBrf_poYPb4JqEaz7MRM2QopG2aEN-zS6rkLTgAXeZab3rDHOw43Immweiwik83zEM-E8z8aLRCQJkh6UzoMD2E120A0lI9GDnNUv4k-qCNE2fpDhmlFxIk32vM6JzbboQj6jEkEW9Hwe-pSzALs2104Xcot44yHz0LiWa7d-0hSYISIqD6td_M093OZg",
      "refreshToken": "AMf-vBysZZ7QVTkzl7euAxed_q8zhIk7JFaFtZOOUKqVOgGtDSJU2WfpVJDuxLbxuAqwZByr5blgtd0mSRATpR7zZ7iUVFo_dGmt-8OPo9yMBiaOj9m4Law2woduTwBAeuss46gAqth8rb-oZhbDMDhXe6EnhiJjl1w-ZtOGy8MZXiBkgSM58Qd5rH-AvlRgIjaSjYjlnpZ5xBlY6xx-pDXc1L0i0-6-mlKTjBCBduwKrrZ6Rcd2GO831c0MTTV6tlrBmOrro68J",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 249.6 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (432.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyNCwidXNlcl9pZCI6IjRnZHhzRWJKYjRoZjl2VDdMS2tPbzBLTmNFVjIiLCJzdWIiOiI0Z2R4c0ViSmI0aGY5dlQ3TEtrT28wS05jRVYyIiwiaWF0IjoxNzQ4ODIxMDI0LCJleHAiOjE3NDg4MjQ2MjQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.o14WWkMbdMrZse7rog2q2CEW476BKeQN1CqMsApCL8Dk4CV43qCrJlkLH8IQ-UQebcPF-puBpHLpDi0HFmin8Z0d9z0xjY8C39dmMZJSyt1Z-tkkUqHplpibwCYugbRm8wh1P7-ZYGPzCIJv-3QTRsg-txBrf_poYPb4JqEaz7MRM2QopG2aEN-zS6rkLTgAXeZab3rDHOw43Immweiwik83zEM-E8z8aLRCQJkh6UzoMD2E120A0lI9GDnNUv4k-qCNE2fpDhmlFxIk32vM6JzbboQj6jEkEW9Hwe-pSzALs2104Xcot44yHz0LiWa7d-0hSYISIqD6td_M093OZg"
  },
  "data": {
    "name": "Other Org 1748821024319",
    "description": "Other organization for cross-access test",
    "email": "other-org-1748821024319@example.com",
    "address": "789 Other Org Boulevard",
    "phone": "+1122334455"
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
    "etag": "W/\"197-aWRVAYKCFvsQn0er1O7aph04ADI\"",
    "date": "Sun, 01 Jun 2025 23:37:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "aafa5be9-53b1-421e-a523-ef3dc69d2dee",
    "name": "Other Org 1748821024319",
    "type": "shelter",
    "description": "Other organization for cross-access test",
    "logo": null,
    "address": "789 Other Org Boulevard",
    "phone": "+1122334455",
    "email": "other-org-1748821024319@example.com",
    "status": "active",
    "createdBy": "4gdxsEbJb4hf9vT7LKkOo0KNcEV2",
    "createdAt": "2025-06-01T23:37:04.637Z",
    "updatedAt": "2025-06-01T23:37:04.637Z"
  }
}
```

**⏱️ Duration:** 432.5 ms  

</details>


---

### Test: Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=2bcf5cae-01e8-4524-b67b-450c0ed0b378 (391.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyNCwidXNlcl9pZCI6IjRnZHhzRWJKYjRoZjl2VDdMS2tPbzBLTmNFVjIiLCJzdWIiOiI0Z2R4c0ViSmI0aGY5dlQ3TEtrT28wS05jRVYyIiwiaWF0IjoxNzQ4ODIxMDI0LCJleHAiOjE3NDg4MjQ2MjQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.o14WWkMbdMrZse7rog2q2CEW476BKeQN1CqMsApCL8Dk4CV43qCrJlkLH8IQ-UQebcPF-puBpHLpDi0HFmin8Z0d9z0xjY8C39dmMZJSyt1Z-tkkUqHplpibwCYugbRm8wh1P7-ZYGPzCIJv-3QTRsg-txBrf_poYPb4JqEaz7MRM2QopG2aEN-zS6rkLTgAXeZab3rDHOw43Immweiwik83zEM-E8z8aLRCQJkh6UzoMD2E120A0lI9GDnNUv4k-qCNE2fpDhmlFxIk32vM6JzbboQj6jEkEW9Hwe-pSzALs2104Xcot44yHz0LiWa7d-0hSYISIqD6td_M093OZg"
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
    "content-length": "81",
    "etag": "W/\"51-iroQSXqI9TREEOI1B/V7B6/nh70\"",
    "date": "Sun, 01 Jun 2025 23:37:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "No tienes permisos para ver todas las membresías de la organización"
  }
}
```

**⏱️ Duration:** 391.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.24s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (859.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1748821025146@example.com",
    "password": "TestPassword123!",
    "name": "Cross Org Invite User"
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
    "content-length": "1508",
    "etag": "W/\"5e4-26xf3g2gj97bk3uLHsVYSB0uy3Y\"",
    "date": "Sun, 01 Jun 2025 23:37:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "Pdhm7m3gUfRRcSJNToj48mncfYE3",
      "email": "cross-org-invite-1748821025146@example.com",
      "name": "Cross Org Invite User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyNSwidXNlcl9pZCI6IlBkaG03bTNnVWZSUmNTSk5Ub2o0OG1uY2ZZRTMiLCJzdWIiOiJQZGhtN20zZ1VmUlJjU0pOVG9qNDhtbmNmWUUzIiwiaWF0IjoxNzQ4ODIxMDI1LCJleHAiOjE3NDg4MjQ2MjUsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ4ODIxMDI1MTQ2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0ODgyMTAyNTE0NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JU5KpvTWq9EpO0lh2ms2AG2dPk6Ry2tkKubDOCILQlzvBgk7r1z5w1oggEH51A5COUybU9msaXe8ILSxmnGrCItjbqLqEYQxrNxrkcpbS-b9UHifqxYg15PkscFTNtN3VUJvczGR-h92Bhcrzo8LMohlUyd9RtmZIeYapehpxWtgbXRcgv3VjlvrPm7NBTXvmZIRbTIWk7cN6Td3XjcFcBKw8kBACjzpAaFwg3A13cX8x2EfFtpqxzVpDNDo612F-qq-JV67dLLTfOy6glZk9mI5YaE41bWLgQJdKx8eUwF_7Yxo20iVLbo08KN2qLb1pCi6la8FpQNiTeAJN9rY3A",
      "refreshToken": "AMf-vBzR25NgUtJXQur6IaE4FPHawZTRi-pRVDOcKrl1SOzKWZcCfTaVW8kkxPiXQjdO3ahKp90D6ePrsAYgBXpla5P9ARJLhFI6PLTX731YSjDOiB1yTVlRxzydCOn-fSCXuFcOdRP2Ya3LGQxF4donv6lv2TF8sqoi-LCaBS_sAOP4esdRWbb82kAMRcVBc7EofDHok-rUTuYvCSwnnZifysXMiUN67dgogZ0W40ML668EgC7OlSqvXXWWHTk2BrUoBshtk9eu",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 859.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (379.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTAyNCwidXNlcl9pZCI6IjRnZHhzRWJKYjRoZjl2VDdMS2tPbzBLTmNFVjIiLCJzdWIiOiI0Z2R4c0ViSmI0aGY5dlQ3TEtrT28wS05jRVYyIiwiaWF0IjoxNzQ4ODIxMDI0LCJleHAiOjE3NDg4MjQ2MjQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjEwMjI1MjlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.o14WWkMbdMrZse7rog2q2CEW476BKeQN1CqMsApCL8Dk4CV43qCrJlkLH8IQ-UQebcPF-puBpHLpDi0HFmin8Z0d9z0xjY8C39dmMZJSyt1Z-tkkUqHplpibwCYugbRm8wh1P7-ZYGPzCIJv-3QTRsg-txBrf_poYPb4JqEaz7MRM2QopG2aEN-zS6rkLTgAXeZab3rDHOw43Immweiwik83zEM-E8z8aLRCQJkh6UzoMD2E120A0lI9GDnNUv4k-qCNE2fpDhmlFxIk32vM6JzbboQj6jEkEW9Hwe-pSzALs2104Xcot44yHz0LiWa7d-0hSYISIqD6td_M093OZg"
  },
  "data": {
    "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
    "userId": "Pdhm7m3gUfRRcSJNToj48mncfYE3",
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
    "content-length": "55",
    "etag": "W/\"37-ays5V8sR/9Ot1p9IQnMVHygTNN4\"",
    "date": "Sun, 01 Jun 2025 23:37:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 379.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=2bcf5cae-01e8-4524-b67b-450c0ed0b378 (539.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "1791",
    "etag": "W/\"6ff-U/+Dj+mzpugar93GwBJjvLrla+E\"",
    "date": "Sun, 01 Jun 2025 23:37:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "61852bbb-db1e-4a84-8acc-11630527d3eb",
      "userId": "sZq4UE1gnLSzfQAkLkRezDPI5C72",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-01T23:36:45.264Z",
      "updatedAt": "2025-06-01T23:36:45.264Z"
    },
    {
      "id": "41d7056a-b511-4244-bc4e-ba20477bc741",
      "userId": "b624NxCdaWZXqQxIqq2w7hzSZCB3",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-01T23:36:46.691Z",
      "updatedAt": "2025-06-01T23:36:46.691Z"
    },
    {
      "id": "8cac7d3b-b43d-4657-aa67-a9e7cfd33da0",
      "userId": "ygphKyO8cqemhqexaEPvYPyCfAs2",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-01T23:36:48.102Z",
      "updatedAt": "2025-06-01T23:36:48.102Z"
    },
    {
      "id": "8d4e259f-097c-4da0-9408-f67d18810aa3",
      "userId": "DiBes7IkXvWQkclv7hmOwY35i8g1",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-01T23:36:49.567Z",
      "updatedAt": "2025-06-01T23:36:49.567Z"
    },
    {
      "id": "6d720a04-f5bd-4206-8a40-5aae13012e0d",
      "userId": "a4OC40ptLaerAQSGmJ1omjVyEeA3",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-01T23:36:50.867Z",
      "updatedAt": "2025-06-01T23:36:50.867Z"
    },
    {
      "id": "43ef010b-e7e2-4404-8bef-4a488af2be2a",
      "userId": "pmLLTxdbJDSoQElfzseF34NH4w32",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-01T23:36:41.883Z",
      "updatedAt": "2025-06-01T23:36:54.433Z"
    },
    {
      "id": "f5d1e05b-7e07-4184-bdd7-14033a41d529",
      "userId": "EPbGaLoJGwaVStq9XO6kZoBKVcO2",
      "organizationId": "2bcf5cae-01e8-4524-b67b-450c0ed0b378",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-01T23:36:59.397Z",
      "updatedAt": "2025-06-01T23:36:59.397Z"
    }
  ]
}
```

**⏱️ Duration:** 539.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=aafa5be9-53b1-421e-a523-ef3dc69d2dee (509.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "date": "Sun, 01 Jun 2025 23:37:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 509.6 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/aafa5be9-53b1-421e-a523-ef3dc69d2dee (894.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "date": "Sun, 01 Jun 2025 23:37:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 894.4 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/43ef010b-e7e2-4404-8bef-4a488af2be2a (539.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "45",
    "etag": "W/\"2d-4JVGYzWraRq0/MamHFXRx9/17ww\"",
    "date": "Sun, 01 Jun 2025 23:37:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 539.2 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/61852bbb-db1e-4a84-8acc-11630527d3eb (496.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "45",
    "etag": "W/\"2d-4JVGYzWraRq0/MamHFXRx9/17ww\"",
    "date": "Sun, 01 Jun 2025 23:37:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 496.1 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/41d7056a-b511-4244-bc4e-ba20477bc741 (522.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "45",
    "etag": "W/\"2d-4JVGYzWraRq0/MamHFXRx9/17ww\"",
    "date": "Sun, 01 Jun 2025 23:37:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 522.6 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/8cac7d3b-b43d-4657-aa67-a9e7cfd33da0 (437.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "45",
    "etag": "W/\"2d-4JVGYzWraRq0/MamHFXRx9/17ww\"",
    "date": "Sun, 01 Jun 2025 23:37:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 437.0 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/8d4e259f-097c-4da0-9408-f67d18810aa3 (550.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "45",
    "etag": "W/\"2d-4JVGYzWraRq0/MamHFXRx9/17ww\"",
    "date": "Sun, 01 Jun 2025 23:37:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 550.3 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/6d720a04-f5bd-4206-8a40-5aae13012e0d (508.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "45",
    "etag": "W/\"2d-4JVGYzWraRq0/MamHFXRx9/17ww\"",
    "date": "Sun, 01 Jun 2025 23:37:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 508.9 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/f5d1e05b-7e07-4184-bdd7-14033a41d529 (507.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "content-length": "45",
    "etag": "W/\"2d-4JVGYzWraRq0/MamHFXRx9/17ww\"",
    "date": "Sun, 01 Jun 2025 23:37:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 507.4 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/2bcf5cae-01e8-4524-b67b-450c0ed0b378 (890.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIwOTk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjA5OTgsImV4cCI6MTc0ODgyNDU5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VauDdxXxiGnPHBCe9JOE9A8lWzV7mpeIj8UAi8peOjsragWa0T1H1AoNjwsqQtCjRz8xFKUyvBrHlCl3PeR0BGs37BBe_nc2jwRlUvqeShpPimkeDTsF5U3wylN6ICpdj4ohe0bYvkmjZ3yP_5K5cEkozkjiQ0bpcPctuL84y_UFxHtFZEcEu27-eKzj1E68HXuWSlNWcKpWAg-hreW8nZCTVCFQvzSWtv76AKmUoCvcnmN5wNJTOESeJMV76dzZCCfavpgXRb5clIrDZsD2fNDgjbWFfinyiQOxCkV3TkXjzWggt-nHxEQS9IZfyiYmCYFtNGR97TCl40HXQuu2PA"
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
    "date": "Sun, 01 Jun 2025 23:37:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 890.2 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (341.4ms)</summary>

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
    "etag": "W/\"640-mV8YxJLg3Hsa2hMKzh9x8p0srx8\"",
    "date": "Sun, 01 Jun 2025 23:37:13 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDMyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzIsImV4cCI6MTc0ODgyNDYzMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LCoSN6e9vPfdKE9QD2DDD4OQRxrxaCjR8u5AN944HD_sWgChTKySyGeehhAsWSzo0fweqIwsfPlsoGTx-syQ8u5a5j9VPdpraw7VQoOjJ9syea5re0ln06hhCloWxFhXRnQdovw78JK1Ta01d4o8DcXVPPPoB7-15U7QukwEz3IdWfO8JVKSjRDuzKWOgMCrZvbSJpI8eQBfhNPAJRr_5dsCjceymRN1LVzcpVJj07VyMc37VnGf296xH6bCwIf_pgRiOpNE5zC9Ea4c14zTdY_Pu2JViQKgltVK_L4h7EPG4kUhdILx_Mgs7z1D6yVAEEBi1J9ENz1WIrCbZ5mwVA",
      "refreshToken": "AMf-vBzaZVx1D8ygg8kc_glRWDkLOdnAF95JaBr-gdkMRIjRW855_mo9-zanH6A7KgRf0nIa0QC-yZZ2KOD-qBt1VHiW1g6DTiDGInI2RX2-UG951nSLw0K_l1wIp_jvnTbWitIlzoe0WSZCNfRNURskL2IbpKrP4PL0FLcAIgmXns-s5JD-T-aanl3ZcAzvfC72OaHPHqrM8KedfrHYSyY-75U6E6j9aSLd3BkFn2TUoHPBp6D1spJthiKR04WIQ8UYp8pUZ45U",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 341.4 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/p9bOG51tEVPVkmCZPYIROEPbDpr1 (997.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDMyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzIsImV4cCI6MTc0ODgyNDYzMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LCoSN6e9vPfdKE9QD2DDD4OQRxrxaCjR8u5AN944HD_sWgChTKySyGeehhAsWSzo0fweqIwsfPlsoGTx-syQ8u5a5j9VPdpraw7VQoOjJ9syea5re0ln06hhCloWxFhXRnQdovw78JK1Ta01d4o8DcXVPPPoB7-15U7QukwEz3IdWfO8JVKSjRDuzKWOgMCrZvbSJpI8eQBfhNPAJRr_5dsCjceymRN1LVzcpVJj07VyMc37VnGf296xH6bCwIf_pgRiOpNE5zC9Ea4c14zTdY_Pu2JViQKgltVK_L4h7EPG4kUhdILx_Mgs7z1D6yVAEEBi1J9ENz1WIrCbZ5mwVA"
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
    "date": "Sun, 01 Jun 2025 23:37:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 997.7 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (237.5ms)</summary>

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
    "etag": "W/\"640-CB2ensF07yYaXsmUSTP1EG3QcVE\"",
    "date": "Sun, 01 Jun 2025 23:37:14 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzQsImV4cCI6MTc0ODgyNDYzNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.c1v12QSLdPUcDpBdEOMh0K4QsXuCKle-l1nBAg69W4vtyu4Y0bPamN5Nvhakj0cvrnlgwdrKVsPERRneaN89gi2Rb9Ydhdpms11F5fTrZRU7OHieK4U_S_AuoS3qA4MviB5q9X_xAOY0tRN0r6ilCE8jhdzhYr9Xfs1Ea8ay53mGlxHVzcLjRrvTnIIhwC-hmwcuYzmXGBUleF9WcYs_T7f6AOE2JXE76Xcesp05pi_gJRPHo1SaxfNm_O__nQlpqtnxQTX08JS5f5YGfo6hzqqhDcRqbtqSV882sdoGkjgqpVBqsNGWiSOtyS8LVfAKRvqc8FvxD7IRov9jEL2RCg",
      "refreshToken": "AMf-vBzI-WBZatB6AX3kt6SGbBXYuB2ZOG7pBpkSem7N0BCrpYleIyCIsxSoLQ-zNmjQL6AM4Y2Iab4WJpZMvsI5TAt31zQIicfKp42jUEVTFkhVE_JuHnF67c3k9CKzTJJkhTgLkLbosgeOsGHLhBdIYIfdEdO_4IpH8VxwjNtcGVk5UdysLSNxX90B2_6prvia9cudhbiMhFFNz2hRGsJIkPjo4vq87JDDfkFUuSPS9SnEbkIu8_fMcwsjI-vlby-X5bHpT-1C",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 237.5 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/pmLLTxdbJDSoQElfzseF34NH4w32 (1068.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzQsImV4cCI6MTc0ODgyNDYzNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.c1v12QSLdPUcDpBdEOMh0K4QsXuCKle-l1nBAg69W4vtyu4Y0bPamN5Nvhakj0cvrnlgwdrKVsPERRneaN89gi2Rb9Ydhdpms11F5fTrZRU7OHieK4U_S_AuoS3qA4MviB5q9X_xAOY0tRN0r6ilCE8jhdzhYr9Xfs1Ea8ay53mGlxHVzcLjRrvTnIIhwC-hmwcuYzmXGBUleF9WcYs_T7f6AOE2JXE76Xcesp05pi_gJRPHo1SaxfNm_O__nQlpqtnxQTX08JS5f5YGfo6hzqqhDcRqbtqSV882sdoGkjgqpVBqsNGWiSOtyS8LVfAKRvqc8FvxD7IRov9jEL2RCg"
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
    "date": "Sun, 01 Jun 2025 23:37:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1068.9 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (253.5ms)</summary>

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
    "etag": "W/\"640-fObu39a7xK7JwKyZRbiW++hV3ws\"",
    "date": "Sun, 01 Jun 2025 23:37:15 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzUsImV4cCI6MTc0ODgyNDYzNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H458piz4vf9_-GqgkVifIZVTeAMc6e6Y6RxwrkRQp0kokibOPVFDf0KdqX2v6dSnljZiSQsY7Cn5sRq-IhHwFSJ5XzK9fmQupy1GMB2XBf56xIiBCEJria0JwUP1FZllzj460fuh8RGezQqDuP8GjTPrT6cilEMgbAdTxK7iaqVn5-KtQOLIzPwYZxcxWyIwpo5THG-pq84JQuVxQNmgjC5ph7ATzNU6uJutRso9nx8uJOct9UJ30wdd3WYToTDdn0YOuKK82Tk_YOu7M5DWUpNvIVgSJfj7GEbOhTScShYBwEGwlMlzaE1SIYb9pdoSsxVE1yamv2P3hQQ1QhKVrQ",
      "refreshToken": "AMf-vBzZphzJTY6oA8dIrksHNqxgVZCK3TSUfmvUDDTWT0jUy8yZpCmJvMJh9lMsY_BCH2Y1Q8pHnru0xvJ03rTfHAbdtP25ibP6gVNlR5N76cBcinWh_-s7FhGpuQv29eogkRNd4Co6x-Adsfb-UlT1kCFCuBqgdtzhPvAl3KEVV5bvjalfW3Efi-koqyVcnYcB7WladNX2i7sCnCIPHzMu1wocZ-uz6DhY3YtCskQLjfd38T9ed_o-f3DFbJJ4WrGzmSsNifmF",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 253.5 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/bUs0dE9FlaO2Egepeuyh1uYgvZl1 (1090.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzUsImV4cCI6MTc0ODgyNDYzNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H458piz4vf9_-GqgkVifIZVTeAMc6e6Y6RxwrkRQp0kokibOPVFDf0KdqX2v6dSnljZiSQsY7Cn5sRq-IhHwFSJ5XzK9fmQupy1GMB2XBf56xIiBCEJria0JwUP1FZllzj460fuh8RGezQqDuP8GjTPrT6cilEMgbAdTxK7iaqVn5-KtQOLIzPwYZxcxWyIwpo5THG-pq84JQuVxQNmgjC5ph7ATzNU6uJutRso9nx8uJOct9UJ30wdd3WYToTDdn0YOuKK82Tk_YOu7M5DWUpNvIVgSJfj7GEbOhTScShYBwEGwlMlzaE1SIYb9pdoSsxVE1yamv2P3hQQ1QhKVrQ"
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
    "date": "Sun, 01 Jun 2025 23:37:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1090.1 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (342.5ms)</summary>

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
    "etag": "W/\"640-7ZCJgMdxs05mAzV7gNMYwoaciDE\"",
    "date": "Sun, 01 Jun 2025 23:37:17 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzYsImV4cCI6MTc0ODgyNDYzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hdzC2h109UbE0bA_0Uu4lacjatrFzZj0ZnfABEs2Vqw2IJEMRI71coKWbNBufq1yq6UIN19vZVN_WtmYpFCaWbIaUxv-d-eK7vnyNTx5YiT5fvFtUl3PNBnjR7pu4wrnrsgVEOJo6BeOwAVxsJ8f1N4jmWzNK0pGTc5cKeG9bMyTvKFKhxz9ihbh_q5kdVPPOeo2c_ZcyGzk5p3mFtu-gfRH9l0j8UzM4kQ-VKahV9G4GPu5XJ3NUVumJhpyfXoNcX4B6SXW1MUxNEgK8mc66Fl4AkpptjgMWa4T9Zchu6ABmFP4wWsI5QybvORMcTt_UB2r2LC44z3jbvB7zskDDQ",
      "refreshToken": "AMf-vBxjyEJpvqgJFfp7tBsXA9UaQLubH5b-y3E0HKmdKWwY5km5mX8RUH0os54HyJvlgXdshD6iUHIUw21_gs-UD0eBZSoIsgtVu8ID-JgPVM6On4TTZSW5oeIqQqecXHASTcgTPOHBrX2b18Czkwon8ALApX8G0H17lCxOawWTkNhPz7-1C9eLkKTuU-QcL3ki-mxrntSTgYFaHtcaFJ8xS_pUex6t5-0zQb9BoALB2hZDWqU00enWkYKO3Gro7oPhbOG_uKWG",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 342.5 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/sZq4UE1gnLSzfQAkLkRezDPI5C72 (1148.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzYsImV4cCI6MTc0ODgyNDYzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hdzC2h109UbE0bA_0Uu4lacjatrFzZj0ZnfABEs2Vqw2IJEMRI71coKWbNBufq1yq6UIN19vZVN_WtmYpFCaWbIaUxv-d-eK7vnyNTx5YiT5fvFtUl3PNBnjR7pu4wrnrsgVEOJo6BeOwAVxsJ8f1N4jmWzNK0pGTc5cKeG9bMyTvKFKhxz9ihbh_q5kdVPPOeo2c_ZcyGzk5p3mFtu-gfRH9l0j8UzM4kQ-VKahV9G4GPu5XJ3NUVumJhpyfXoNcX4B6SXW1MUxNEgK8mc66Fl4AkpptjgMWa4T9Zchu6ABmFP4wWsI5QybvORMcTt_UB2r2LC44z3jbvB7zskDDQ"
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
    "date": "Sun, 01 Jun 2025 23:37:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1148.6 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (284.4ms)</summary>

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
    "etag": "W/\"640-376+X0OSvdQTefR9zdQ2rEHwqsQ\"",
    "date": "Sun, 01 Jun 2025 23:37:18 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzgsImV4cCI6MTc0ODgyNDYzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H600wlO4udiR31hsI4k1eurYhpLjn_97NNk6OwPPvHRglgfGXFjvURgprflwU6TxwQji3eD3Bps33y-6Y1wDMcGaogeP38fBy3jVTExb7vG8NoydPFGXR7u8YlvLcy7dKWNiAGDMIHMEBFwFssNZTUh8Etmyr4AcFrRBXwwz5v9jaGC-D0uUobk3HFW_taQSuuN_AswNBHuw_jpTE8pB3gferZv0Rtq0-Kd9px9wU6z8hmq-A1cSSydSZCSLFhSeInIwUHJcbEJxf1I1kNkw3rdj-2sxmCfKcAr4aVS8qyUYdVYqnUgivGkdUL-vTNVfl9SrhEXMLQwbhUezrc61gA",
      "refreshToken": "AMf-vBza-pfapM-S9Z0sVrk6ufxkUaoEg98K_8yoHYxyYSZeQinnCmkexxPxKD4ER4HeNU9PDxBUX_e_YUKSOTaPKW6YbWk1mSmc6A_MdaRn1sZkMLFWDFavGXGxNuGcO379gtMWtI6lyzAOnBMWbxBaPNqpT3V9T8cyjcq1O2wk0LXiS1NvKKt3AhF6ENbcRclri-1coUf1xT3I1QVGH8Xt5ZA1X_SvyxW_bA3wi2pMK9zT4TOdsYFW6nL7XAH2vZaALXEj3-LE",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 284.4 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/b624NxCdaWZXqQxIqq2w7hzSZCB3 (1082.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzgsImV4cCI6MTc0ODgyNDYzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H600wlO4udiR31hsI4k1eurYhpLjn_97NNk6OwPPvHRglgfGXFjvURgprflwU6TxwQji3eD3Bps33y-6Y1wDMcGaogeP38fBy3jVTExb7vG8NoydPFGXR7u8YlvLcy7dKWNiAGDMIHMEBFwFssNZTUh8Etmyr4AcFrRBXwwz5v9jaGC-D0uUobk3HFW_taQSuuN_AswNBHuw_jpTE8pB3gferZv0Rtq0-Kd9px9wU6z8hmq-A1cSSydSZCSLFhSeInIwUHJcbEJxf1I1kNkw3rdj-2sxmCfKcAr4aVS8qyUYdVYqnUgivGkdUL-vTNVfl9SrhEXMLQwbhUezrc61gA"
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
    "date": "Sun, 01 Jun 2025 23:37:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1082.5 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (236.0ms)</summary>

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
    "etag": "W/\"640-SnQsP6FNrvb1ln2HSQePce84FvA\"",
    "date": "Sun, 01 Jun 2025 23:37:19 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzksImV4cCI6MTc0ODgyNDYzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mcHAP5QnmhWkGRIQKgD_jw8yOhetEQcdPexp9lHirB8Zgu8Y1mNIO4bW5QdC-E2zIL3rTQqMIgvFkfto77sKojnhP4bL3TRpkUdDRVZMwb0vjU-RcLHC-Fx2GlcKZoYlk4or0ORBnXp01uV1WnXKHE29Zs8NRpChKGRQD0gao2UE3gDKMIfMtqQ4wz20DmaR8Ljdl0gPbMjYxBRzRPguVMl1tX-bfEudiSn1oWGlElHp1_Gp5F0Ny7aK_xFod-nzZruitORL0kApB7U-qMAs49d-WIOxzxFBnyQMLFlVNv3ykQt65FZQe9weRl64ZpwfhASsUJjG7zF4i3h-2kPEyQ",
      "refreshToken": "AMf-vBz5kTjdVrev1v_6TmT0S6KKwBFNp1uv65baMp2ZzmL4Xm4OOxhE92XyjfulGDrVgyI5GPh8znC-NV0_0JEjbnfcNYpG-uw3jINyDjVz58Hq-LGPQ7uEjFHsWgcuR_nffdsBGTkCBhr1QvvhxkTwQNc7UH1qynaAWOM2rhvYYNcq8kZUyp6__thv94LmOW2fHmuFyFqgOew5OYfeBzj2F_G_ltwFzsGmon5z2bANpxUkt8PGQl60hF1ZK9TjsNBHAelXHcBA",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 236.0 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/ygphKyO8cqemhqexaEPvYPyCfAs2 (1039.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwMzksImV4cCI6MTc0ODgyNDYzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mcHAP5QnmhWkGRIQKgD_jw8yOhetEQcdPexp9lHirB8Zgu8Y1mNIO4bW5QdC-E2zIL3rTQqMIgvFkfto77sKojnhP4bL3TRpkUdDRVZMwb0vjU-RcLHC-Fx2GlcKZoYlk4or0ORBnXp01uV1WnXKHE29Zs8NRpChKGRQD0gao2UE3gDKMIfMtqQ4wz20DmaR8Ljdl0gPbMjYxBRzRPguVMl1tX-bfEudiSn1oWGlElHp1_Gp5F0Ny7aK_xFod-nzZruitORL0kApB7U-qMAs49d-WIOxzxFBnyQMLFlVNv3ykQt65FZQe9weRl64ZpwfhASsUJjG7zF4i3h-2kPEyQ"
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
    "date": "Sun, 01 Jun 2025 23:37:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1039.5 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (303.4ms)</summary>

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
    "etag": "W/\"640-Ri84KOSIJCA5oypkuWJGuulma4I\"",
    "date": "Sun, 01 Jun 2025 23:37:21 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDEsImV4cCI6MTc0ODgyNDY0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Lz7zbCpI6DN1eF2Wo0KPMZkxVi-0v_ajJ4ADHS75BOJr744GwVMaYpzPGEsxplmfJphRXI61NFu5WEYmjAXNU7O6b1TPugWoPgVZxuMSK_qEgHiGcxewayYAsWOGF3hCZ9WJrV1yHmZmdJ195v3WerIWP6th9lYiLkzET3kXWBvJkQXnnQhxEGWtK_C6uOazVirfIpe3vovWg_YRw4RrGZBquwbHEP-FQRoXtAxJoyMRs_ZtdjMJINmBA0B76haGbzSt81xQ45mA8F9zuFl3khDPP8R1TvU_GrY3PRXgM8h4RaDkmkeo7GUXHR0LpbBZaKvETOiBG-VixynAWFSaxQ",
      "refreshToken": "AMf-vBwdg9KzqjNelcv6r1rUtHS3AKz3POEGbRrHuyjwM0llpyQKFHn-t23l00gsoBy0tMnVTYqrzOmHeyKPZRcY37ou6ZYDlfzem18IFsUebqhWPHkwXR-JV1MBiyQijbRBXLpgwNjD2ePS85Ijax8yYfSj1bNwSOX14F1QsIL558apL-hARnMy39AvxFwhgQrupP0O204hwo0IM1QBXAYC9dr97oCgCwa-kz_zW6US1dmmytsJk64lv6i4X1gnESigZqQS79nt",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 303.4 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/DiBes7IkXvWQkclv7hmOwY35i8g1 (1121.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDEsImV4cCI6MTc0ODgyNDY0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Lz7zbCpI6DN1eF2Wo0KPMZkxVi-0v_ajJ4ADHS75BOJr744GwVMaYpzPGEsxplmfJphRXI61NFu5WEYmjAXNU7O6b1TPugWoPgVZxuMSK_qEgHiGcxewayYAsWOGF3hCZ9WJrV1yHmZmdJ195v3WerIWP6th9lYiLkzET3kXWBvJkQXnnQhxEGWtK_C6uOazVirfIpe3vovWg_YRw4RrGZBquwbHEP-FQRoXtAxJoyMRs_ZtdjMJINmBA0B76haGbzSt81xQ45mA8F9zuFl3khDPP8R1TvU_GrY3PRXgM8h4RaDkmkeo7GUXHR0LpbBZaKvETOiBG-VixynAWFSaxQ"
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
    "date": "Sun, 01 Jun 2025 23:37:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1121.1 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (310.8ms)</summary>

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
    "etag": "W/\"640-41uW0qZKRTDm3QfvhilVXv1RJCs\"",
    "date": "Sun, 01 Jun 2025 23:37:22 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDIsImV4cCI6MTc0ODgyNDY0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SyDEYlLe9WLOSHg5vx76zoQuL-d-2XlvmImr_W6N5gxy7lsQdwXZpl1GJC-3kYMag-82pSd_BCdxUtXsa0anOhO-sPMFYfEsVT2lZGHCbORq_ierfoh8R8Z8T6ju9cZut25o8JLrzMYiTj670edrlsyTFrDRTnNM96HCGpQVnytIMl9v3RLFD3Q4Cde-9kz5T36taV1FNj9S5-JESIR1pZeSITYEAn5iR7IjnTEC3XhW7TkWNz4vvpNM4bvNUyZHZXvTo77aYwsCGpz97DVEZZ1wiQTx1z11L1VDoDSOxfxrvgLePFKtiBB1TRiZlIJK47SbYNzZqCwgFnxEUy7ntw",
      "refreshToken": "AMf-vBytA48mRkN42bDqOVwx0C9I4QOF7xJyRJakX-sE4qhqQppELmD0AW1jphBI7NvPUtrWXgTN3aUxV88i5zZ1vTtrFgMh2qSaItRo-GxFxBFg5Pl22ZTPAdRLON7S7vMFyxlX9qHvAD_OvyXZkb1KqO6-SG70ZyVenhjz1FmEpJc-KB6vT0HmuW9Rb5pk6RLj8ThN0HJvvXFYMWoDFSncBhw-2g5YAazGDLc49rJV2h6fdR23a9hEBkmix5r47h-qpW4lSuxu",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 310.8 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/a4OC40ptLaerAQSGmJ1omjVyEeA3 (1111.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDIsImV4cCI6MTc0ODgyNDY0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SyDEYlLe9WLOSHg5vx76zoQuL-d-2XlvmImr_W6N5gxy7lsQdwXZpl1GJC-3kYMag-82pSd_BCdxUtXsa0anOhO-sPMFYfEsVT2lZGHCbORq_ierfoh8R8Z8T6ju9cZut25o8JLrzMYiTj670edrlsyTFrDRTnNM96HCGpQVnytIMl9v3RLFD3Q4Cde-9kz5T36taV1FNj9S5-JESIR1pZeSITYEAn5iR7IjnTEC3XhW7TkWNz4vvpNM4bvNUyZHZXvTo77aYwsCGpz97DVEZZ1wiQTx1z11L1VDoDSOxfxrvgLePFKtiBB1TRiZlIJK47SbYNzZqCwgFnxEUy7ntw"
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
    "date": "Sun, 01 Jun 2025 23:37:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1111.7 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (314.7ms)</summary>

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
    "etag": "W/\"640-cmPLMHDKFkW1hwimgeXEwFbtQ1M\"",
    "date": "Sun, 01 Jun 2025 23:37:24 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDMsImV4cCI6MTc0ODgyNDY0MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fyPN6Ubtis1LEezv_jlLhldgrlRHGuktbF0jxzPWKNJO0_wuVlbxm0eMl9lELa4UlMa_wziXIyuF1OTCa9pG1-iu9j_Ovb93deRhTLwZS6PPY3T_EjV0eAEnUxhJuBaIlREshKrp7wHGHo38rVKgdHnqTmOppcnI1WySrH0QeqJPkgU3wBeKuOnEcc37YyxrdUa-ey_0rp3m4Zlg_AiuiPTSK7xrKIlyPfAw6PnRxO-Rkq1WjSWJTjYOrFvMANQAKu8rBAbwvan4Fu7SefqXvkj0Fp2jIa_H_1R3sQPbwPyZ_XtxMWxxA1ZkQmrZ1ZOahW1A48XDZkXKBgH_fM7T6w",
      "refreshToken": "AMf-vBxJxoD_QtH0Vqiqkbol0lBhEnc9_4m6IaJY_kM8s--w114eXYvWe5u9vfRsQL5s-nVE9YXlGc9QOpctkhZp-xjhbkmUMid_gf2ySlmBk3Ad8pndREBc2xHrimJvfmIhGiL13GwL_CnkP3vZ36N0BY3YrWo2CimrMfpNh1jHsyLKzSGVnou05F3hXe9XxSv8PGJwesEQte_HDi6-HTwUEHfmIdS7RLLlYap6nhsGFCbsLlXR5TAeZmfoqSP2h45medOnbs-n",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 314.7 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/sKndzZlXuyTvnhXXW9b2IX3UOX92 (1008.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDMsImV4cCI6MTc0ODgyNDY0MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fyPN6Ubtis1LEezv_jlLhldgrlRHGuktbF0jxzPWKNJO0_wuVlbxm0eMl9lELa4UlMa_wziXIyuF1OTCa9pG1-iu9j_Ovb93deRhTLwZS6PPY3T_EjV0eAEnUxhJuBaIlREshKrp7wHGHo38rVKgdHnqTmOppcnI1WySrH0QeqJPkgU3wBeKuOnEcc37YyxrdUa-ey_0rp3m4Zlg_AiuiPTSK7xrKIlyPfAw6PnRxO-Rkq1WjSWJTjYOrFvMANQAKu8rBAbwvan4Fu7SefqXvkj0Fp2jIa_H_1R3sQPbwPyZ_XtxMWxxA1ZkQmrZ1ZOahW1A48XDZkXKBgH_fM7T6w"
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
    "date": "Sun, 01 Jun 2025 23:37:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1008.0 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (325.2ms)</summary>

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
    "etag": "W/\"640-QZfjdNU5/AvzQnvVaSjmzWH8BqI\"",
    "date": "Sun, 01 Jun 2025 23:37:25 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDUsImV4cCI6MTc0ODgyNDY0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Lya3AufJ34VYfgwBtDCZbeemGVzXx0PCazGsce8M_QbGeTEIgDczIgBqk7JwTkyc_5A4Z1eK4__k3kCvmkwc4oOdfGztpIoa29nRA8EVaG6SJ979OeB8lEEjPmnebx6wNQ644SQ20sqOXiOWLe2WCREu841EkDYTferXlHA7fAE1Ftwthf4cZrJ7_YuU_VX2eE_yiWkEwthGlWdAlf6ddRscPk_N6jfRgtIVKfVt2X9BASR3y6smFHSf5tbQYXM9vj0syzCUhjm57WTC2eYj90asts1LE2SfOurz0_dYlrAw8NCKiaRUS_XhjIiPdU95OqExxZbqKpuivkBfcmdzmg",
      "refreshToken": "AMf-vBx4BGwg34-BcCWTp5WKQgqJy6kNUqrJibiFO7G6PFYcxw1Jxa9y3MsxT7wvUwBrjMBWnEiqHmSsGOQQVMBKMEs2S5uY9XLvSw-nKsrKIffai31s_X3IQlwxgCtNxpbkuKkbGRSL_C3p79xIPY2PZNtK_yukLK6BBcyhLfGJX4_a_MINaPVP8UhuDvuXFFaN9VkK0JhaxBD9An6ceGE-WDVWrCnUmawiOqEWAyuqRhe3HYwpyPaCOcyZ5TkY6l50urQ9OcaX",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 325.2 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/EPbGaLoJGwaVStq9XO6kZoBKVcO2 (1113.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDUsImV4cCI6MTc0ODgyNDY0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Lya3AufJ34VYfgwBtDCZbeemGVzXx0PCazGsce8M_QbGeTEIgDczIgBqk7JwTkyc_5A4Z1eK4__k3kCvmkwc4oOdfGztpIoa29nRA8EVaG6SJ979OeB8lEEjPmnebx6wNQ644SQ20sqOXiOWLe2WCREu841EkDYTferXlHA7fAE1Ftwthf4cZrJ7_YuU_VX2eE_yiWkEwthGlWdAlf6ddRscPk_N6jfRgtIVKfVt2X9BASR3y6smFHSf5tbQYXM9vj0syzCUhjm57WTC2eYj90asts1LE2SfOurz0_dYlrAw8NCKiaRUS_XhjIiPdU95OqExxZbqKpuivkBfcmdzmg"
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
    "date": "Sun, 01 Jun 2025 23:37:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1113.7 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (316.3ms)</summary>

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
    "etag": "W/\"640-aPRcVJL47EP8m9fwWkypbjy66JA\"",
    "date": "Sun, 01 Jun 2025 23:37:26 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDYsImV4cCI6MTc0ODgyNDY0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WMPKEEwTp1HlheWRMwiO0B3GdP9fvnRWRvf4Hab6fgqfEIklr5s6LDm_sM9k3yGNTL7gmh0gCCfuXvxWrB8dJ27Ve404q2-WVdZcnd8qjaUTS5zzFHTtR5czcEMAoiH5LAmHZg8xqO7FFYj1Rsoiq6mPOI25TnBnH3zQNjti7TyksTN4sSE1tNI0vcGQ-2MLhU4BS5p6Cby3XFCf9cqFTN2S4NmkS-LC9LJaTJzfybR5Ui6Xp7ozZhcZ04_CkBrwMilMEzmaS7oCCpBQk1GvNt39kKW8R_Yh69Dt4UaKKGAW3lwQcABZHiC0GXHUDGHMktQ8Dr0SN9zn7Tw3yGc_oQ",
      "refreshToken": "AMf-vByQha_BKcKKYpN2j6YfjufsOkZMRXtO2_A0OiN-FHUzcIzLznZDS4vXR4pk3gxwDIjMz-PvX5u6XrvbTJUpk-sTa0cf2Whc6FrktuOHCyNTJyDAZBtzkjANYtBZWIThw-EJ2IJInWr-0Hl1LGU1Ol22kvk9f8cAdlHe3LIUTuHW_BbAILoZYeM4J-656P0qSoY_s7mURXJVjKCI2uy9rxmP-nWfqqdyYK0GTiOcwqpZghmUfhUUgOnHbyRJ6nSUZ4P6BXgL",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 316.3 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/PbukRHKPZvYI4sSR0ZbuLWh03T43 (1113.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQ2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDYsImV4cCI6MTc0ODgyNDY0NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WMPKEEwTp1HlheWRMwiO0B3GdP9fvnRWRvf4Hab6fgqfEIklr5s6LDm_sM9k3yGNTL7gmh0gCCfuXvxWrB8dJ27Ve404q2-WVdZcnd8qjaUTS5zzFHTtR5czcEMAoiH5LAmHZg8xqO7FFYj1Rsoiq6mPOI25TnBnH3zQNjti7TyksTN4sSE1tNI0vcGQ-2MLhU4BS5p6Cby3XFCf9cqFTN2S4NmkS-LC9LJaTJzfybR5Ui6Xp7ozZhcZ04_CkBrwMilMEzmaS7oCCpBQk1GvNt39kKW8R_Yh69Dt4UaKKGAW3lwQcABZHiC0GXHUDGHMktQ8Dr0SN9zn7Tw3yGc_oQ"
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
    "date": "Sun, 01 Jun 2025 23:37:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1113.5 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (322.4ms)</summary>

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
    "etag": "W/\"640-9L4w/u+XPHkPXVHRVnS6oZKaZkI\"",
    "date": "Sun, 01 Jun 2025 23:37:28 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDgsImV4cCI6MTc0ODgyNDY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JhdDwhPneT-US6LX-UW0rCufxAtUE7rb8vCyX10yBs9vSikNr60WX-6hDOReoCxOvcvdCYGiA_jyRUGWltufQIGoGnHOT3Hd7VOBJZnAbbRRIWEiFFoWZx7fc-8gKfzkmrU7KTS9HpPK3Y0psowwkR8bR22Idb1rSpr8PBmHcUGzhBBM6CX8Buz510IRJKiPEa_bKI5RLyMKh4OUFpa6ntVAo3wQj7RJZA8kF9uLThipIzpC4iMg-hinSn7dQk1ruGFnWtEZv1Q-aaS3L9Yl2JwPLfxuaQY1yQLrcd761IpraU-G5bBcqtQTnn2qjrs3-rLakrIO2yMDmYLzMMuROg",
      "refreshToken": "AMf-vBytbEKYek-rRis7ahH8kgy1zetmRHNs5vUX36HrbUEJOaKfmWYX315W86cj3gAQ-f-A19OuV8ZMw50zlkgLmRfCsQm1-jjUUTczn39UP6VoIjp7KPhtJ_z_lBi7nXTg5WP5BcvVBoxjxG5o1dl-jSEfJ7AtqMmv-N35Pw4Hl7lORpVtUXVxt061WmoaTjUgiyQasz6LRSL787HDh7Xca1AeB_bCvQ8TVWNGfwVQqGoKnFZS_ckB3xOhBF84cr5thjFJvQ2y",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 322.4 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/4gdxsEbJb4hf9vT7LKkOo0KNcEV2 (1148.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDgsImV4cCI6MTc0ODgyNDY0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JhdDwhPneT-US6LX-UW0rCufxAtUE7rb8vCyX10yBs9vSikNr60WX-6hDOReoCxOvcvdCYGiA_jyRUGWltufQIGoGnHOT3Hd7VOBJZnAbbRRIWEiFFoWZx7fc-8gKfzkmrU7KTS9HpPK3Y0psowwkR8bR22Idb1rSpr8PBmHcUGzhBBM6CX8Buz510IRJKiPEa_bKI5RLyMKh4OUFpa6ntVAo3wQj7RJZA8kF9uLThipIzpC4iMg-hinSn7dQk1ruGFnWtEZv1Q-aaS3L9Yl2JwPLfxuaQY1yQLrcd761IpraU-G5bBcqtQTnn2qjrs3-rLakrIO2yMDmYLzMMuROg"
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
    "date": "Sun, 01 Jun 2025 23:37:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1148.0 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (288.9ms)</summary>

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
    "etag": "W/\"640-hRqBUYeKdrF9y7oSq/klVCQcymE\"",
    "date": "Sun, 01 Jun 2025 23:37:29 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDksImV4cCI6MTc0ODgyNDY0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZQs_3zFj-afT52UU40LntrGb4lp1FvA72TrOWtTh-U5JZEM5KqjlGUKaa1h8CVLx2w2z8u76bYarlZJKJrCPwr9Dm1ahlShF6Yyw0JfyXbwthA1kzCGzJ45JVog5uDxTnhGekdhcuYTu72tfB4Ga0YZzCAJu-muRJo5cdO0L7WGyVTYV5q157EoTNdOEuaHxySNvEfu8_sb4BG_5ZIW8jBJ4jIkJS1opx3KLmzNIY9OvT8Kvb7oo2EhT_HUu7-myJBTg-ofM5QOoaUG99O1CguJEPwxxtg16OLAvhuLvelho_IfLVMqWMYCd3Q2qtK93BOZ0ARJuYiAtyh99VB4moA",
      "refreshToken": "AMf-vBzAPk6aeg06dT7aoO_xRyefL9C_h4WqbO-xHACTYwjbpFN4qoJrgzdqa7XGDq-spbYTY8vcGjPThI7RpkoHBKfp6CaaEsaZMXumhfKDmOdHnJJipUdXc7HR8cIaP5YliFwVTYroetMypimwplHAI39K66O1eKGzYMF06Myz7eCKrto3XXLZkANYXKSdubXZ3sXdnXiM_OnKyJ1-cz3iXEhhkqgA-ox6dZi53TBbQNK6V5bNYHTszYJwe8K1WjBlVS_m7ntn",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 288.9 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/Pdhm7m3gUfRRcSJNToj48mncfYE3 (1161.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxMDQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjEwNDksImV4cCI6MTc0ODgyNDY0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZQs_3zFj-afT52UU40LntrGb4lp1FvA72TrOWtTh-U5JZEM5KqjlGUKaa1h8CVLx2w2z8u76bYarlZJKJrCPwr9Dm1ahlShF6Yyw0JfyXbwthA1kzCGzJ45JVog5uDxTnhGekdhcuYTu72tfB4Ga0YZzCAJu-muRJo5cdO0L7WGyVTYV5q157EoTNdOEuaHxySNvEfu8_sb4BG_5ZIW8jBJ4jIkJS1opx3KLmzNIY9OvT8Kvb7oo2EhT_HUu7-myJBTg-ofM5QOoaUG99O1CguJEPwxxtg16OLAvhuLvelho_IfLVMqWMYCd3Q2qtK93BOZ0ARJuYiAtyh99VB4moA"
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
    "date": "Sun, 01 Jun 2025 23:37:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1161.0 ms  

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
- Test organization: Test Org for Memberships 1748820999856
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
