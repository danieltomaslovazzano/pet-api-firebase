# E2E Test Report: memberships-tests

**Date:** 6/6/2025  
**Time:** 12:36:25 AM  
**Duration:** 45.20s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully | PASSED | 0.66s | Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully |
| ✅ Memberships E2E Tests Invite User to Organization Should fail to invite same user twice | PASSED | 0.58s | Memberships E2E Tests Invite User to Organization Should fail to invite same user twice |
| ✅ Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions | PASSED | 1.36s | Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions |
| ✅ Memberships E2E Tests Invite User to Organization Should invite user with different roles | PASSED | 1.88s | Memberships E2E Tests Invite User to Organization Should invite user with different roles |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by organization | PASSED | 0.64s | Memberships E2E Tests Get Memberships Admin should get memberships by organization |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by user | PASSED | 0.57s | Memberships E2E Tests Get Memberships Admin should get memberships by user |
| ✅ Memberships E2E Tests Get Memberships User should get their own memberships | PASSED | 0.39s | Memberships E2E Tests Get Memberships User should get their own memberships |
| ✅ Memberships E2E Tests Get Memberships Should fail without userId or organizationId | PASSED | 0.45s | Memberships E2E Tests Get Memberships Should fail without userId or organizationId |
| ✅ Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships | PASSED | 0.43s | Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships |
| ✅ Memberships E2E Tests Get Membership by ID Admin should get membership by ID | PASSED | 0.48s | Memberships E2E Tests Get Membership by ID Admin should get membership by ID |
| ✅ Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID | PASSED | 0.49s | Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID |
| ✅ Memberships E2E Tests Update Member Role Admin should update member role successfully | PASSED | 0.49s | Memberships E2E Tests Update Member Role Admin should update member role successfully |
| ✅ Memberships E2E Tests Update Member Role Should fail with invalid role | PASSED | 0.35s | Memberships E2E Tests Update Member Role Should fail with invalid role |
| ✅ Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions | PASSED | 0.44s | Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions |
| ✅ Memberships E2E Tests Remove Member Admin should remove member successfully | PASSED | 1.18s | Memberships E2E Tests Remove Member Admin should remove member successfully |
| ✅ Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions | PASSED | 2.11s | Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions |
| ✅ Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) | PASSED | 1.17s | Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations | PASSED | 0.48s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations | PASSED | 1.63s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations | PASSED | 0.95s | Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (654.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
  },
  "data": {
    "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
    "userId": "OgEC5mbuqgXq8uuhmosUQ9FZM5h2",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "372",
    "etag": "W/\"174-yhz3ZplEUaOiKTlp3ttCSkAcrQ8\"",
    "date": "Thu, 05 Jun 2025 22:35:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "d7e83731-1c0b-4b8d-a021-55d0cb874f93",
      "userId": "OgEC5mbuqgXq8uuhmosUQ9FZM5h2",
      "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-05T22:35:46.206Z",
      "updatedAt": "2025-06-05T22:35:46.206Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 654.3 ms  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (566.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
  },
  "data": {
    "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
    "userId": "OgEC5mbuqgXq8uuhmosUQ9FZM5h2",
    "role": "volunteer"
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
    "content-length": "190",
    "etag": "W/\"be-7i9TeALnXXoLQY/6l3bk6I2aSBM\"",
    "date": "Thu, 05 Jun 2025 22:35:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "memberships.user_already_member",
    "details": {
      "error": "User is already a member of this organization"
    },
    "messageKey": "memberships.user_already_member",
    "language": "en"
  }
}
```

**⏱️ Duration:** 566.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.36s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (977.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1749162946927@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1585",
    "etag": "W/\"631-tQa+B7ynaDr0qdWsF1pZUt393MU\"",
    "date": "Thu, 05 Jun 2025 22:35:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "mvi7cS8HvSWVsPmsWEw97Yi5yDD2",
        "email": "no-perm-invite-1749162946927@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk0NywidXNlcl9pZCI6Im12aTdjUzhIdlNXVnNQbXNXRXc5N1lpNXlERDIiLCJzdWIiOiJtdmk3Y1M4SHZTV1ZzUG1zV0V3OTdZaTV5REQyIiwiaWF0IjoxNzQ5MTYyOTQ3LCJleHAiOjE3NDkxNjY1NDcsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0OTE2Mjk0NjkyN0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ5MTYyOTQ2OTI3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BAxQO8XCpPqWEFeln05kG_imzbpfdL4u0PtlNKv46vM1F4WtBEfayf84DjSWCMtPPoXnGBS3rSg-yXeV7k_I6SIsSHi8W7GT6QL2eiB8ecBNOaVrqggB3olse1YLIKXtGwe9mhDTQuyBW2RvD2NkgMNPoLOnHYhxWqitll6YhajmQj4j1S7lfw58A4hPO7LF3mX6awFs4kombu_g2bW3c9_1sQVwjkIBl1qxjBpXpWj8cCtnD7Wd8R6bIbecmfQT4uzrS85FphV3ifqGflPnuApuqgh4xV46Dwd3wuIQspBGlkBhL4KQbgwdPdOFVGmV9IWZrrQ9VNF9OPFjT5LYPQ",
        "refreshToken": "AMf-vBx-qsjb2Jw0H40XKGWUiKu9u0LQ4Uu8du7BNkFKF69ys5Kt9OnAc4vOcuEB1NXjSr7V7ZTzc_g71Ar4Bi5UQYXlkPyvvX3O7qQh9COX3ntk9BT3EmqVEfMRzQMWGDikYHKKB5DvZQstUWV5AEduduTOKRwQDqZfWOi05vl8iw6k6kFCVVNmSSJIQlSyP9A3mU1Emm1HFPao3T2Lhp-JbnLUsz0-eCuySB3RZYshD3O_pCLPT9zXxvPq9bD4u3LoOH_Lxwjr",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 977.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (384.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk0MiwidXNlcl9pZCI6ImxHZVJFT2hha2NRSmF6TTF4b3hUekk0OHZmZjEiLCJzdWIiOiJsR2VSRU9oYWtjUUphek0xeG94VHpJNDh2ZmYxIiwiaWF0IjoxNzQ5MTYyOTQyLCJleHAiOjE3NDkxNjY1NDIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTE2Mjk0MTA2MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5MTYyOTQxMDYwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.bX6ZwH2mKbtDWzBqq2fMw9gOhhnuVQH8mFvih6NvCK4YMDbLg9myUdy4OdKTlOwVQGs9l7RD-ZAjWHQXVZc3e-_AbNyoW32_C_JWsT9FCS2Fm8kM3wvWOptJWCn2I_-HxBqxKDvzyona8zUTjUIO7jIrBjYXMkl0riFf05RsgdQTbE5XF3wWV1vZq9F1881oUjnA3hEAhzRYVHU6wTmR0iDhA8CflleipNHEsSvRWi_YNS3NSoFjq13wna3x8ZX8cD2gr1gRUaOThYXsVjijVzIAQtmOBNXOchw6bxxaafJwvNCZ64b4Fao3raCQPsGLRAJjlvOSQCAwqMQFX0V96A"
  },
  "data": {
    "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
    "userId": "mvi7cS8HvSWVsPmsWEw97Yi5yDD2",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "147",
    "etag": "W/\"93-jdHEKq94XUzucBPckv+4OD0PshU\"",
    "date": "Thu, 05 Jun 2025 22:35:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Unauthorized. Only admins can invite users.",
    "details": {},
    "messageKey": "memberships.unauthorized_invite",
    "language": "en"
  }
}
```

**⏱️ Duration:** 384.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 1.88s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1348.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1749162948295@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1539",
    "etag": "W/\"603-d1fZlZQpMp1Pyvfdgru4PP9SOvQ\"",
    "date": "Thu, 05 Jun 2025 22:35:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "okelMykx8fbDRvODyPiAqDcafqK2",
        "email": "admin-user-1749162948295@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk0OSwidXNlcl9pZCI6Im9rZWxNeWt4OGZiRFJ2T0R5UGlBcURjYWZxSzIiLCJzdWIiOiJva2VsTXlreDhmYkRSdk9EeVBpQXFEY2FmcUsyIiwiaWF0IjoxNzQ5MTYyOTQ5LCJleHAiOjE3NDkxNjY1NDksImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ5MTYyOTQ4Mjk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0OTE2Mjk0ODI5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.b7WP9Hj3OgjF02c06tChbb0KJsiorfw5b3YMTjPvbmYopjdQ3eHNpdADguR2DsS_uu6ixshiWtIzGvBiZtozXNOHFMW2mWrZfddcMTjjMvSaiRSUj7_ag8S-ZyG08hNT822nJjBGo37B5iD26VOV2Ffa3Ev8z8nWuo0H6j5rikIOS2mRoWE81k_BrcRn8vw0e_dW-NwwEaiURHcPee11HUu8IRCQ8iMEYmLiRW-Sd19LjHYu_W51AlbUrcHE_4JLMy-COBmKk0Lz745KM9tNOkFdnqWc_3Ffgl4l3K5Upl7jbqrPtOaBMkScOZAUenlVHN4pEnAHDrh7LDjiFtTn1Q",
        "refreshToken": "AMf-vByN3aDiCZpfFhCmy4vrggMdhLSbCqXT7Ssa_vxWeuOAlMJedeiCSfT_i7mGSBYG-ysZB6FrOTKUqdzh-p0T-smPITQJrWBTuoTNGWoMxs29bO0Gdbv_AbDgPtBFWTyeMjvD0XUfp06tGBzlaO85VQrDlOMmO9ffboeB21uV7koB_LKpWZF6tcYLFFNfku5TmmlCgjzOfdwqXrbr4DfgSqly-2G7T8iK2l3ivcqMp26D4ZzkbrA",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1348.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (525.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
  },
  "data": {
    "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
    "userId": "okelMykx8fbDRvODyPiAqDcafqK2",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "371",
    "etag": "W/\"173-UD29W+behOTCLnEXeXJzMucZOIU\"",
    "date": "Thu, 05 Jun 2025 22:35:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "ba558635-705e-4cbe-aaf3-da0e49d51b58",
      "userId": "okelMykx8fbDRvODyPiAqDcafqK2",
      "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-05T22:35:50.109Z",
      "updatedAt": "2025-06-05T22:35:50.109Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 525.5 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4 (636.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "548",
    "etag": "W/\"224-Kk8Wqz4+KPQ+S51vKeRMUeSIM9o\"",
    "date": "Thu, 05 Jun 2025 22:35:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "d7e83731-1c0b-4b8d-a021-55d0cb874f93",
        "userId": "OgEC5mbuqgXq8uuhmosUQ9FZM5h2",
        "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-05T22:35:46.206Z",
        "updatedAt": "2025-06-05T22:35:46.206Z"
      },
      {
        "id": "ba558635-705e-4cbe-aaf3-da0e49d51b58",
        "userId": "okelMykx8fbDRvODyPiAqDcafqK2",
        "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-05T22:35:50.109Z",
        "updatedAt": "2025-06-05T22:35:50.109Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 636.3 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (561.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "42",
    "etag": "W/\"2a-Qd7r/rm8nc8jeptMUbRfClKNx/g\"",
    "date": "Thu, 05 Jun 2025 22:35:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 561.8 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=lGeREOhakcQJazM1xoxTzI48vff1 (382.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk0MiwidXNlcl9pZCI6ImxHZVJFT2hha2NRSmF6TTF4b3hUekk0OHZmZjEiLCJzdWIiOiJsR2VSRU9oYWtjUUphek0xeG94VHpJNDh2ZmYxIiwiaWF0IjoxNzQ5MTYyOTQyLCJleHAiOjE3NDkxNjY1NDIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTE2Mjk0MTA2MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5MTYyOTQxMDYwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.bX6ZwH2mKbtDWzBqq2fMw9gOhhnuVQH8mFvih6NvCK4YMDbLg9myUdy4OdKTlOwVQGs9l7RD-ZAjWHQXVZc3e-_AbNyoW32_C_JWsT9FCS2Fm8kM3wvWOptJWCn2I_-HxBqxKDvzyona8zUTjUIO7jIrBjYXMkl0riFf05RsgdQTbE5XF3wWV1vZq9F1881oUjnA3hEAhzRYVHU6wTmR0iDhA8CflleipNHEsSvRWi_YNS3NSoFjq13wna3x8ZX8cD2gr1gRUaOThYXsVjijVzIAQtmOBNXOchw6bxxaafJwvNCZ64b4Fao3raCQPsGLRAJjlvOSQCAwqMQFX0V96A"
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
    "content-length": "42",
    "etag": "W/\"2a-Qd7r/rm8nc8jeptMUbRfClKNx/g\"",
    "date": "Thu, 05 Jun 2025 22:35:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 382.5 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (432.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "148",
    "etag": "W/\"94-QFAD7K6XLckTUitowvc6eDrzOnY\"",
    "date": "Thu, 05 Jun 2025 22:35:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Either userId or organizationId must be provided",
    "details": {},
    "messageKey": "memberships.filter_required",
    "language": "en"
  }
}
```

**⏱️ Duration:** 432.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (428.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk0MiwidXNlcl9pZCI6ImxHZVJFT2hha2NRSmF6TTF4b3hUekk0OHZmZjEiLCJzdWIiOiJsR2VSRU9oYWtjUUphek0xeG94VHpJNDh2ZmYxIiwiaWF0IjoxNzQ5MTYyOTQyLCJleHAiOjE3NDkxNjY1NDIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTE2Mjk0MTA2MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5MTYyOTQxMDYwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.bX6ZwH2mKbtDWzBqq2fMw9gOhhnuVQH8mFvih6NvCK4YMDbLg9myUdy4OdKTlOwVQGs9l7RD-ZAjWHQXVZc3e-_AbNyoW32_C_JWsT9FCS2Fm8kM3wvWOptJWCn2I_-HxBqxKDvzyona8zUTjUIO7jIrBjYXMkl0riFf05RsgdQTbE5XF3wWV1vZq9F1881oUjnA3hEAhzRYVHU6wTmR0iDhA8CflleipNHEsSvRWi_YNS3NSoFjq13wna3x8ZX8cD2gr1gRUaOThYXsVjijVzIAQtmOBNXOchw6bxxaafJwvNCZ64b4Fao3raCQPsGLRAJjlvOSQCAwqMQFX0V96A"
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
    "content-length": "148",
    "etag": "W/\"94-RTfMRYrYh1UBRLaBbqMbKkqnTYY\"",
    "date": "Thu, 05 Jun 2025 22:35:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "You can only view your own memberships",
    "details": {},
    "messageKey": "memberships.view_own_memberships_only",
    "language": "en"
  }
}
```

**⏱️ Duration:** 428.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/d7e83731-1c0b-4b8d-a021-55d0cb874f93 (473.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "293",
    "etag": "W/\"125-p3UnGEYL2CJabVrGziDgdhqEh8Y\"",
    "date": "Thu, 05 Jun 2025 22:35:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "d7e83731-1c0b-4b8d-a021-55d0cb874f93",
      "userId": "OgEC5mbuqgXq8uuhmosUQ9FZM5h2",
      "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-05T22:35:46.206Z",
      "updatedAt": "2025-06-05T22:35:46.206Z"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 473.3 ms  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (487.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "114",
    "etag": "W/\"72-D11fzM/+8Gllg463UBTENT5vRfY\"",
    "date": "Thu, 05 Jun 2025 22:35:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Membership not found",
    "details": {},
    "messageKey": "memberships.not_found",
    "language": "en"
  }
}
```

**⏱️ Duration:** 487.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Update Member Role Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/d7e83731-1c0b-4b8d-a021-55d0cb874f93 (484.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "377",
    "etag": "W/\"179-a9maKmG/ReNUt+kwxH0KpAYciWg\"",
    "date": "Thu, 05 Jun 2025 22:35:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member role updated to manager",
    "data": {
      "id": "d7e83731-1c0b-4b8d-a021-55d0cb874f93",
      "userId": "OgEC5mbuqgXq8uuhmosUQ9FZM5h2",
      "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-05T22:35:46.206Z",
      "updatedAt": "2025-06-05T22:35:54.012Z"
    },
    "messageKey": "memberships.role_updated",
    "language": "en"
  }
}
```

**⏱️ Duration:** 484.9 ms  

</details>


---

### Test: Memberships E2E Tests Update Member Role Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.35s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/d7e83731-1c0b-4b8d-a021-55d0cb874f93 (345.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "109",
    "etag": "W/\"6d-oST05+NidLaWwPft6tTDyH6GrIk\"",
    "date": "Thu, 05 Jun 2025 22:35:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Invalid role",
    "details": {},
    "messageKey": "memberships.invalid_role",
    "language": "en"
  }
}
```

**⏱️ Duration:** 345.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/d7e83731-1c0b-4b8d-a021-55d0cb874f93 (436.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk0MiwidXNlcl9pZCI6ImxHZVJFT2hha2NRSmF6TTF4b3hUekk0OHZmZjEiLCJzdWIiOiJsR2VSRU9oYWtjUUphek0xeG94VHpJNDh2ZmYxIiwiaWF0IjoxNzQ5MTYyOTQyLCJleHAiOjE3NDkxNjY1NDIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTE2Mjk0MTA2MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5MTYyOTQxMDYwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.bX6ZwH2mKbtDWzBqq2fMw9gOhhnuVQH8mFvih6NvCK4YMDbLg9myUdy4OdKTlOwVQGs9l7RD-ZAjWHQXVZc3e-_AbNyoW32_C_JWsT9FCS2Fm8kM3wvWOptJWCn2I_-HxBqxKDvzyona8zUTjUIO7jIrBjYXMkl0riFf05RsgdQTbE5XF3wWV1vZq9F1881oUjnA3hEAhzRYVHU6wTmR0iDhA8CflleipNHEsSvRWi_YNS3NSoFjq13wna3x8ZX8cD2gr1gRUaOThYXsVjijVzIAQtmOBNXOchw6bxxaafJwvNCZ64b4Fao3raCQPsGLRAJjlvOSQCAwqMQFX0V96A"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "147",
    "etag": "W/\"93-rWh0eMz+cfY6WRXj3Roia0S5WsA\"",
    "date": "Thu, 05 Jun 2025 22:35:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Unauthorized. Only admins can modify roles.",
    "details": {},
    "messageKey": "memberships.unauthorized_modify",
    "language": "en"
  }
}
```

**⏱️ Duration:** 436.0 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (1165.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1749162954938@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1549",
    "etag": "W/\"60d-cnop+YO6VxAlotrDkW+DEUjlQOQ\"",
    "date": "Thu, 05 Jun 2025 22:35:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "ZWoOoxcUn5fYgbeRh7FuBWhfG062",
        "email": "remove-user-1749162954938@example.com",
        "name": "User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk1NSwidXNlcl9pZCI6IlpXb09veGNVbjVmWWdiZVJoN0Z1QldoZkcwNjIiLCJzdWIiOiJaV29Pb3hjVW41ZllnYmVSaDdGdUJXaGZHMDYyIiwiaWF0IjoxNzQ5MTYyOTU1LCJleHAiOjE3NDkxNjY1NTUsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0OTE2Mjk1NDkzOEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ5MTYyOTU0OTM4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.CVwdrJAX2_u2OLBJL4iEdS_-UiZVcfJWanu-zRlQquWhvrA6HeHajvqA-CU1175G3a_R_jM7M66RldeAGKDXbyi8FU43KvTQnWyB9HG8xxCVAAyRXk1NSphPBnZwPfFFtaZN_WQJuWsPOk2rssshsUVEGvdY0IlV1GaiqpLEH4Jy0ppR9-8CgIrnoM8_Nq2w1Mw5Ekxn-GnpH5x_cRQBy6BsS1KFuKWpHyZAAeBdS6NoJWgFMyQ-m9BQ-85IEZqZuSWrHVX1Lwx0TzurPgnJn2mB_I_i9MXdHh00KvtWSrlLJekywc4xAVk3fHPk4pqe8ASOuAi0grDymGLSTaKySQ",
        "refreshToken": "AMf-vBw7tgQVxxHlNIYb73jPQjWoaLZ6QCwsY12C5ZKg1Hxkq7IA2Z7zWbilUCSZNmPXxCnDHYcYiOe2J59J6Dti11gqnKjt1ovZu-kqw_RpFNi_Vp3kcNrmR_SXbYI8HM8gpwJzv_3CZ3a9wbsKzEHuzYX3wqXn1ziL-bzV7xv2B8sHv1ZUnqgJ51t1J1oPuh45YiCQ23EiCSFmjy0SwL0aqXFSf2wz4nzi1yCm-n1NhLqgKZkYqU8",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1165.3 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (646.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
  },
  "data": {
    "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
    "userId": "ZWoOoxcUn5fYgbeRh7FuBWhfG062",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "375",
    "etag": "W/\"177-Eq8/mjDPhUETYhEFNmXWcuMa9so\"",
    "date": "Thu, 05 Jun 2025 22:35:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "f64fd424-d9df-4681-acaf-9727c51d0aec",
      "userId": "ZWoOoxcUn5fYgbeRh7FuBWhfG062",
      "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-05T22:35:56.677Z",
      "updatedAt": "2025-06-05T22:35:56.677Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 646.3 ms  

</details>


---

### Test: Memberships E2E Tests Remove Member Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.18s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/f64fd424-d9df-4681-acaf-9727c51d0aec (621.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "137",
    "etag": "W/\"89-L28A+KCzkTyobxp83U7rR/Us2gU\"",
    "date": "Thu, 05 Jun 2025 22:35:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member removed successfully",
    "data": {},
    "messageKey": "memberships.member_removed_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 621.2 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/f64fd424-d9df-4681-acaf-9727c51d0aec (553.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "114",
    "etag": "W/\"72-D11fzM/+8Gllg463UBTENT5vRfY\"",
    "date": "Thu, 05 Jun 2025 22:35:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Membership not found",
    "details": {},
    "messageKey": "memberships.not_found",
    "language": "en"
  }
}
```

**⏱️ Duration:** 553.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.11s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1137.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1749162957933@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1607",
    "etag": "W/\"647-vCVFt+LvBkdRZiVy2fEFkqp0CDo\"",
    "date": "Thu, 05 Jun 2025 22:35:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "bXPr20P9asSMuccegOD5z8Rkfyt1",
        "email": "another-remove-user-1749162957933@example.com",
        "name": "Another User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk1OCwidXNlcl9pZCI6ImJYUHIyMFA5YXNTTXVjY2VnT0Q1ejhSa2Z5dDEiLCJzdWIiOiJiWFByMjBQOWFzU011Y2NlZ09ENXo4UmtmeXQxIiwiaWF0IjoxNzQ5MTYyOTU4LCJleHAiOjE3NDkxNjY1NTgsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ5MTYyOTU3OTMzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0OTE2Mjk1NzkzM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Slfj97cyyecYaSGFTZLDqcI8arS8FhP42fatnhkCM3iHm6N0tNVJp2XH0k2Z10-g54GpwgkJ40inMe72XuKHc2mft82T9TMLW8L8YnWDZ7rXojfn6-k9si5Y9tuRzVIeX_xGIQ5frkPasoiAS01ccYOEXTYVgo04qYu8kbIBXCVRheMMh0xpHvC8XlAHOa-sI0UbHFk_2v0w5CR92lIrQqAR3c5j6hhNt0-vcDRNSvV9RUcRb4iUxMfhGtjXB934uM80tnJ0ArNUuB5SP0ozIin-s3D-8uV1hkX-5RHND3CdRt0c633fO5vulTpX6jkFt5VLrdSTMqzG3upVD7mrRQ",
        "refreshToken": "AMf-vBwVtkLHL_lPIM2oK2U4L_px8DnP45T6FX1PkGNXjb36qz7stO0LCfxReWVUKVYA5Hg6fBuioeixgESEpxS0PwoE8KbNsLsnVUNMqIoMxIOL93rY00ZdYPKsNkzvM5GV9Jti8u7L-lh5h3WjG4DZPtWWnD46-Fui_qU_VSzhjkTICkwGW_-NDqPhUoPD9ZM4krbX1u8vAqysQugAy7B_8VezdbDfuZWgYIhUEcwNT-EVKmzpOjoQJY9DadNBrpysEcuB8gSo",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1137.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (546.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
  },
  "data": {
    "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
    "userId": "bXPr20P9asSMuccegOD5z8Rkfyt1",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "375",
    "etag": "W/\"177-k3ztphmjFGhCX2t1hxvTxXDbXng\"",
    "date": "Thu, 05 Jun 2025 22:35:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "4312ff4e-8ba8-458b-b378-5749bed5cca9",
      "userId": "bXPr20P9asSMuccegOD5z8Rkfyt1",
      "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-05T22:35:59.550Z",
      "updatedAt": "2025-06-05T22:35:59.550Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 546.8 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/4312ff4e-8ba8-458b-b378-5749bed5cca9 (421.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk0MiwidXNlcl9pZCI6ImxHZVJFT2hha2NRSmF6TTF4b3hUekk0OHZmZjEiLCJzdWIiOiJsR2VSRU9oYWtjUUphek0xeG94VHpJNDh2ZmYxIiwiaWF0IjoxNzQ5MTYyOTQyLCJleHAiOjE3NDkxNjY1NDIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTE2Mjk0MTA2MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5MTYyOTQxMDYwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.bX6ZwH2mKbtDWzBqq2fMw9gOhhnuVQH8mFvih6NvCK4YMDbLg9myUdy4OdKTlOwVQGs9l7RD-ZAjWHQXVZc3e-_AbNyoW32_C_JWsT9FCS2Fm8kM3wvWOptJWCn2I_-HxBqxKDvzyona8zUTjUIO7jIrBjYXMkl0riFf05RsgdQTbE5XF3wWV1vZq9F1881oUjnA3hEAhzRYVHU6wTmR0iDhA8CflleipNHEsSvRWi_YNS3NSoFjq13wna3x8ZX8cD2gr1gRUaOThYXsVjijVzIAQtmOBNXOchw6bxxaafJwvNCZ64b4Fao3raCQPsGLRAJjlvOSQCAwqMQFX0V96A"
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
    "content-length": "149",
    "etag": "W/\"95-dWEFsNSMQp29/hJnhQl528D2rmg\"",
    "date": "Thu, 05 Jun 2025 22:36:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Unauthorized. Only admins can remove members.",
    "details": {},
    "messageKey": "memberships.unauthorized_remove",
    "language": "en"
  }
}
```

**⏱️ Duration:** 421.1 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (967.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749162960047@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1584",
    "etag": "W/\"630-xhnAJ4XyrTd4fj4x2uUb5Xhtmgo\"",
    "date": "Thu, 05 Jun 2025 22:36:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "XkAFUYAxCQX7efpllPjyk7Evvvq2",
        "email": "self-leave-user-1749162960047@example.com",
        "name": "Self Leave User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2MCwidXNlcl9pZCI6IlhrQUZVWUF4Q1FYN2VmcGxsUGp5azdFdnZ2cTIiLCJzdWIiOiJYa0FGVVlBeENRWDdlZnBsbFBqeWs3RXZ2dnEyIiwiaWF0IjoxNzQ5MTYyOTYwLCJleHAiOjE3NDkxNjY1NjAsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDkxNjI5NjAwNDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDkxNjI5NjAwNDdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.dj3FtlkNLgtyM0_oRgdPKtQQdCi-ETy-yKcDpbu9urNeqp1lg1bEZPTlTJhX6LJPzqlcDLgTYffl4GTLmBCJyXz3jmjc1w3WCSCKi2VQIJik5cZ2o6lrhHxAvqbnMvzCFq_xlbFJ_oBRgQcR8Ko9u-sVVcIxqnqgo2QyrISF4Dpnk7s5oghTeX8MNHugRn_qp16tAC7OJIQwR_U-C73MXHDeNpu8Nw6HSy1KwOKImKGng383-ZXrsMzZk3mC9T_klHK2dqJ5S_0yajowFb8fCIXNU6qeHDMMQuO0QgvM6hZYegIem_txSMCqTCG9GWd5Pj9x4t8xvDxAATLAG5IRcw",
        "refreshToken": "AMf-vBxwUpFkhWsRRtu9vR4d7Kq8UW_2aLqFqv8XPfY0dss015QTIgBbsA7bt1usl_DaKUM18iqPohryPcYm01QS_MMIUo4AuYEvaPK8htUvwIP1bI0Eywuepkz9jgokfKjQzFKy9RfvN8yfkFXGZb6nhy1jFBUnpDuzajTTf2NHMTtw2ajAxfVMrnSwrivXfr6_i5lGEls3L8eBhUIE65ZUXzOW-nB2qO50WO5Tnm1w7v6BV5efmKDcweXaX_5NbERgxBfCguQ1",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 967.0 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (255.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749162960047@example.com",
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
    "content-length": "1556",
    "etag": "W/\"614-kwiXNbO6h4YyOHgFC3V15kBn37Y\"",
    "date": "Thu, 05 Jun 2025 22:36:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "XkAFUYAxCQX7efpllPjyk7Evvvq2",
        "email": "self-leave-user-1749162960047@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2MSwidXNlcl9pZCI6IlhrQUZVWUF4Q1FYN2VmcGxsUGp5azdFdnZ2cTIiLCJzdWIiOiJYa0FGVVlBeENRWDdlZnBsbFBqeWs3RXZ2dnEyIiwiaWF0IjoxNzQ5MTYyOTYxLCJleHAiOjE3NDkxNjY1NjEsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDkxNjI5NjAwNDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDkxNjI5NjAwNDdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.acvq51NItQu-8z3tJzJ2eSKiLdibpZKl9UgU4GFOn6xPAONBVjx5LvXRVOgyDQ0fJ-ijTTiGnYOqImd8TUWp8TrmsCHaBJ8BcH7Y-sx7IumVUg2qVBwmXC1qguYT2BnJCEsyYlkbF4Iq6WUYXKe-Al71m84eWz9NmWbg3K-5bI3j4QGKJ8_UBSysRt7nNr5mWCV7hob-t6hECTzAlWqZSFANVQeFpBIKwwe5nz0Skkbe2BAVXzVJtMMVkg13-C6CqD3f2uts4YUGHFgWT926axIyHv7eXSenI9F_V7Tp8MCDc-MMmDUPBZ8w094WCEjlB9cYvrJVyLHqlKfXXhbOtQ",
        "refreshToken": "AMf-vBy0J6qp6FHXJupODjTB7nJh5gvlKu53_ywnI_q8HcRlqFhWo2T2yFw0q4v1oRN_lEA2C-jxQ3PiCue4NEolgvmP-rEiU0T_m05-1fd29bxjsg89gHyhqmfbg6BEF9mYqUi9MgQhtCI7VIN_qZEP6pXTH1sXsBdd-Z6_p94O2vg20XkPgQwyy2dNE3xAgSGkjTsfAXm_8lETPq2zN6q7xgYoShio8F8CAhWQAGJoYUj5OjMepj2oOiwG9ZZSq8hbZ4X-bKZ8",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 255.1 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (601.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
  },
  "data": {
    "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
    "userId": "XkAFUYAxCQX7efpllPjyk7Evvvq2",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "372",
    "etag": "W/\"174-z+368W7ABkQ0xY0ZdNUhZuzWrWI\"",
    "date": "Thu, 05 Jun 2025 22:36:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "812cc4ba-a7aa-4e53-abe2-a8620c8c1963",
      "userId": "XkAFUYAxCQX7efpllPjyk7Evvvq2",
      "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-05T22:36:01.810Z",
      "updatedAt": "2025-06-05T22:36:01.810Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 601.6 ms  

</details>


---

### Test: Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.17s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/812cc4ba-a7aa-4e53-abe2-a8620c8c1963 (630.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2MSwidXNlcl9pZCI6IlhrQUZVWUF4Q1FYN2VmcGxsUGp5azdFdnZ2cTIiLCJzdWIiOiJYa0FGVVlBeENRWDdlZnBsbFBqeWs3RXZ2dnEyIiwiaWF0IjoxNzQ5MTYyOTYxLCJleHAiOjE3NDkxNjY1NjEsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDkxNjI5NjAwNDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDkxNjI5NjAwNDdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.acvq51NItQu-8z3tJzJ2eSKiLdibpZKl9UgU4GFOn6xPAONBVjx5LvXRVOgyDQ0fJ-ijTTiGnYOqImd8TUWp8TrmsCHaBJ8BcH7Y-sx7IumVUg2qVBwmXC1qguYT2BnJCEsyYlkbF4Iq6WUYXKe-Al71m84eWz9NmWbg3K-5bI3j4QGKJ8_UBSysRt7nNr5mWCV7hob-t6hECTzAlWqZSFANVQeFpBIKwwe5nz0Skkbe2BAVXzVJtMMVkg13-C6CqD3f2uts4YUGHFgWT926axIyHv7eXSenI9F_V7Tp8MCDc-MMmDUPBZ8w094WCEjlB9cYvrJVyLHqlKfXXhbOtQ"
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
    "content-length": "148",
    "etag": "W/\"94-eCnLHN4M5bSoncFLYHeqZ06sQ6I\"",
    "date": "Thu, 05 Jun 2025 22:36:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "You have left the organization successfully",
    "data": {},
    "messageKey": "memberships.user_left_organization",
    "language": "en"
  }
}
```

**⏱️ Duration:** 630.6 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/812cc4ba-a7aa-4e53-abe2-a8620c8c1963 (536.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "114",
    "etag": "W/\"72-D11fzM/+8Gllg463UBTENT5vRfY\"",
    "date": "Thu, 05 Jun 2025 22:36:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Membership not found",
    "details": {},
    "messageKey": "memberships.not_found",
    "language": "en"
  }
}
```

**⏱️ Duration:** 536.3 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1244.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749162963046@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1584",
    "etag": "W/\"630-dmjDyxRoNSgICf+7FwNQcEehdL8\"",
    "date": "Thu, 05 Jun 2025 22:36:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "MuG1mEDg73QZ6KG03akEz7pt76P2",
        "email": "other-org-admin-1749162963046@example.com",
        "name": "Other Org Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2MywidXNlcl9pZCI6Ik11RzFtRURnNzNRWjZLRzAzYWtFejdwdDc2UDIiLCJzdWIiOiJNdUcxbUVEZzczUVo2S0cwM2FrRXo3cHQ3NlAyIiwiaWF0IjoxNzQ5MTYyOTYzLCJleHAiOjE3NDkxNjY1NjMsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.D1WjqldYyKvUnirlkOYjDWnvrID34j1r_bJviCF5My4wV8XDDEXSaYdYpgAV2CsjtRDyVINjpqLoUbPTVfWwAltBwXs-ka8ZXncZc34Yn7vnJLuoqae735YuCNTepWl0BqtAr1LeldpcdI7NQu7DnJVEOV4MoHEve-URmRUqQO18GQZ57QDCgQUNUXDViArcNfZZLSY0nEpS_u2cNg5Y3yb1ddYssbOf779ca18sT1xTrN-MNAGxDWxbDvP_UuYPc-QSe6cJUipMipY7_U_znA1oTak6p0-7NVNQwOeR-CSHIuwqMjbwLqc9tATEZXfRC1BeuQHCU2296DfZu3dy3w",
        "refreshToken": "AMf-vBywK6aKNHDKXUra5tcCdz6L42SyVwXUR0E2r57h6i4TBPX_QeA7Fzo8mw_BZIq63NMCXAbH4oY4gB1Nwx9ELZq86-8EYstxR6yTGdrhLjTDF76tk5OPkZm_2ds2s4nNhGDhC4gjCrNrqt4Bl-qhf4Ncu8u3Jh8v3xRJLqlYK7ajIAIBUH7FMWRRYdLKXGW_tusA70IXAUHPXZBm1X2cOJ3QXtNrrghFcUHfyXYrXCHblbsM8kPliBvGBmHjCWlykcHTtLF2",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1244.8 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (226.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749162963046@example.com",
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
    "content-length": "1556",
    "etag": "W/\"614-lKKpFny5Mz9ZC8trMvVwrCJMq9w\"",
    "date": "Thu, 05 Jun 2025 22:36:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "MuG1mEDg73QZ6KG03akEz7pt76P2",
        "email": "other-org-admin-1749162963046@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2NCwidXNlcl9pZCI6Ik11RzFtRURnNzNRWjZLRzAzYWtFejdwdDc2UDIiLCJzdWIiOiJNdUcxbUVEZzczUVo2S0cwM2FrRXo3cHQ3NlAyIiwiaWF0IjoxNzQ5MTYyOTY0LCJleHAiOjE3NDkxNjY1NjQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JAgsl7pjsHQi9Nx7yX1ZHWoHCQJUob8lkVkc_eItl84PzUmrp_vSzAM11iRubBTZHSR7hDef1W8Ko76SvBmNwnCt0ehoNleeZmqYde4yJ4KtjojZYKC9wJiyPyB1LMx6cdyG8Q45T-o4AEY-tvMWXKlYmBIhhZ-0iLbqM3UEax3cMebK0OUdOQqrgN1hY-xfXTUH5tiGPIFBTnkd53HMJshDHNeblzFwSoFC7jH3btqT16_A09XfbxSE7mf63yD5H7Qg5g7EWWtO2MYT3Abwdb2G7xWWmxjBVzcuulIMbVXpRpvwFbV9hicMgoKgCAGxMN8VO3LGdy6iigv1DUrebg",
        "refreshToken": "AMf-vByLCpqi_Mga8jUJGg5WEnf9XHgNSaWynJZlo563YasbSqNBjnQOhMMH9aCeYco3OPYJgRZE6JpoSxCZzBfRV6rm80nEyiRWrUDQam9Jz1Naov4YQOUiMSkgAT0_-hIA--x1Nyp0mNTRuiGVDgRfAH0qra2FRF9ATWMmXn8A3aGVl4kmurSxa3H06V5-2iwi0WJuyLEGAiNrYeWKBr2GkaLugVt-rOGQW0qTAHOphcm-FQBA2t8wpNZ6X3gFp83HvQwuVUTV",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 226.9 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (423.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2NCwidXNlcl9pZCI6Ik11RzFtRURnNzNRWjZLRzAzYWtFejdwdDc2UDIiLCJzdWIiOiJNdUcxbUVEZzczUVo2S0cwM2FrRXo3cHQ3NlAyIiwiaWF0IjoxNzQ5MTYyOTY0LCJleHAiOjE3NDkxNjY1NjQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JAgsl7pjsHQi9Nx7yX1ZHWoHCQJUob8lkVkc_eItl84PzUmrp_vSzAM11iRubBTZHSR7hDef1W8Ko76SvBmNwnCt0ehoNleeZmqYde4yJ4KtjojZYKC9wJiyPyB1LMx6cdyG8Q45T-o4AEY-tvMWXKlYmBIhhZ-0iLbqM3UEax3cMebK0OUdOQqrgN1hY-xfXTUH5tiGPIFBTnkd53HMJshDHNeblzFwSoFC7jH3btqT16_A09XfbxSE7mf63yD5H7Qg5g7EWWtO2MYT3Abwdb2G7xWWmxjBVzcuulIMbVXpRpvwFbV9hicMgoKgCAGxMN8VO3LGdy6iigv1DUrebg"
  },
  "data": {
    "name": "Other Org 1749162964518",
    "description": "Other organization for cross-access test",
    "email": "other-org-1749162964518@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "553",
    "etag": "W/\"229-7YrhF/npRRLrwaOspM0d67TJEqU\"",
    "date": "Thu, 05 Jun 2025 22:36:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "23bd8cd4-fbcd-4d75-8364-26706c5f784a",
      "name": "Other Org 1749162964518",
      "type": "shelter",
      "description": "Other organization for cross-access test",
      "logo": null,
      "address": "789 Other Org Boulevard",
      "phone": "+1122334455",
      "email": "other-org-1749162964518@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "MuG1mEDg73QZ6KG03akEz7pt76P2",
      "createdAt": "2025-06-05T22:36:04.828Z",
      "updatedAt": "2025-06-05T22:36:04.828Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 423.8 ms  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4 (475.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2NCwidXNlcl9pZCI6Ik11RzFtRURnNzNRWjZLRzAzYWtFejdwdDc2UDIiLCJzdWIiOiJNdUcxbUVEZzczUVo2S0cwM2FrRXo3cHQ3NlAyIiwiaWF0IjoxNzQ5MTYyOTY0LCJleHAiOjE3NDkxNjY1NjQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JAgsl7pjsHQi9Nx7yX1ZHWoHCQJUob8lkVkc_eItl84PzUmrp_vSzAM11iRubBTZHSR7hDef1W8Ko76SvBmNwnCt0ehoNleeZmqYde4yJ4KtjojZYKC9wJiyPyB1LMx6cdyG8Q45T-o4AEY-tvMWXKlYmBIhhZ-0iLbqM3UEax3cMebK0OUdOQqrgN1hY-xfXTUH5tiGPIFBTnkd53HMJshDHNeblzFwSoFC7jH3btqT16_A09XfbxSE7mf63yD5H7Qg5g7EWWtO2MYT3Abwdb2G7xWWmxjBVzcuulIMbVXpRpvwFbV9hicMgoKgCAGxMN8VO3LGdy6iigv1DUrebg"
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
    "content-length": "184",
    "etag": "W/\"b8-jtzoR0stpatgfO5Cv7RCueuaSVM\"",
    "date": "Thu, 05 Jun 2025 22:36:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "No tienes permisos para ver todas las membresías de la organización",
    "details": {},
    "messageKey": "memberships.forbidden_view_all_memberships",
    "language": "en"
  }
}
```

**⏱️ Duration:** 475.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1222.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1749162965426@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1593",
    "etag": "W/\"639-O6RQHB9CvhhSW8fDJ+Ekxhavi4c\"",
    "date": "Thu, 05 Jun 2025 22:36:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "5tMBnzsTjSWpTUg1rozny1w9wNt1",
        "email": "cross-org-invite-1749162965426@example.com",
        "name": "Cross Org Invite User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2NiwidXNlcl9pZCI6IjV0TUJuenNUalNXcFRVZzFyb3pueTF3OXdOdDEiLCJzdWIiOiI1dE1CbnpzVGpTV3BUVWcxcm96bnkxdzl3TnQxIiwiaWF0IjoxNzQ5MTYyOTY2LCJleHAiOjE3NDkxNjY1NjYsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ5MTYyOTY1NDI2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0OTE2Mjk2NTQyNkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A3SmHX9VP90bmXPNaKnlfrI8p6cU4XOHFvLwcC51MoQ04jHE_FWfkJU7aIHCJp7NHjFVI47QKA9ZdVHOOxADOMHaaDxFTREDKcpgI2laXpmSbvsPJvSgZ9nbul9yw410ULMARIzU4aZxqHjzhF-kHjHMhLK15zR9dd0pxTByAkJtAmd-7XYnVSxIrdM2BVB49gdiKmaCUHfQuRv6oBCIi5twRNbCLDL87OW7JuX4tDBH9OIr-wKez5m_YimvFzHcoR1gI1h-FKPX2Gtxkvi-71ZL-dpQWSp019kR72ifTt7vMdRdBV7c4Lo3hmmIkFfNBL8oUqqLzs7ELM7CeRwVqg",
        "refreshToken": "AMf-vBxR4AJcwrwSf7V2SrDHCiwKDiVbTJwsVtdC5FwEUyJmy2NUukeBe6w4TjG0bIjy9ZhZnku9ruKNUxixxYq-1ifVFmm6qJFjjgu1OHuBcemTMMXfcZmVKRfgGyCCC1BjqGXRML6gku-NkQNZbYb9mydkEW0XAKVgzsQ9_ZmBbw3zvvgFQyITCM7JssANAyvypxebO2uL0JnskaGaGNfzK1gWl9afTMtWD0sHMrkd-Ot8_1tD6stfeHv8UilycqFTvroaav6E",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1222.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (399.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2Mjk2NCwidXNlcl9pZCI6Ik11RzFtRURnNzNRWjZLRzAzYWtFejdwdDc2UDIiLCJzdWIiOiJNdUcxbUVEZzczUVo2S0cwM2FrRXo3cHQ3NlAyIiwiaWF0IjoxNzQ5MTYyOTY0LCJleHAiOjE3NDkxNjY1NjQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDkxNjI5NjMwNDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JAgsl7pjsHQi9Nx7yX1ZHWoHCQJUob8lkVkc_eItl84PzUmrp_vSzAM11iRubBTZHSR7hDef1W8Ko76SvBmNwnCt0ehoNleeZmqYde4yJ4KtjojZYKC9wJiyPyB1LMx6cdyG8Q45T-o4AEY-tvMWXKlYmBIhhZ-0iLbqM3UEax3cMebK0OUdOQqrgN1hY-xfXTUH5tiGPIFBTnkd53HMJshDHNeblzFwSoFC7jH3btqT16_A09XfbxSE7mf63yD5H7Qg5g7EWWtO2MYT3Abwdb2G7xWWmxjBVzcuulIMbVXpRpvwFbV9hicMgoKgCAGxMN8VO3LGdy6iigv1DUrebg"
  },
  "data": {
    "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
    "userId": "5tMBnzsTjSWpTUg1rozny1w9wNt1",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "147",
    "etag": "W/\"93-jdHEKq94XUzucBPckv+4OD0PshU\"",
    "date": "Thu, 05 Jun 2025 22:36:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Unauthorized. Only admins can invite users.",
    "details": {},
    "messageKey": "memberships.unauthorized_invite",
    "language": "en"
  }
}
```

**⏱️ Duration:** 399.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 0.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4 (516.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "806",
    "etag": "W/\"326-4QHCVxkf8uY/KkKPMYKTlieCgaU\"",
    "date": "Thu, 05 Jun 2025 22:36:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "ba558635-705e-4cbe-aaf3-da0e49d51b58",
        "userId": "okelMykx8fbDRvODyPiAqDcafqK2",
        "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-05T22:35:50.109Z",
        "updatedAt": "2025-06-05T22:35:50.109Z"
      },
      {
        "id": "d7e83731-1c0b-4b8d-a021-55d0cb874f93",
        "userId": "OgEC5mbuqgXq8uuhmosUQ9FZM5h2",
        "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-05T22:35:46.206Z",
        "updatedAt": "2025-06-05T22:35:54.012Z"
      },
      {
        "id": "4312ff4e-8ba8-458b-b378-5749bed5cca9",
        "userId": "bXPr20P9asSMuccegOD5z8Rkfyt1",
        "organizationId": "11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-05T22:35:59.550Z",
        "updatedAt": "2025-06-05T22:35:59.550Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 516.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=23bd8cd4-fbcd-4d75-8364-26706c5f784a (432.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "42",
    "etag": "W/\"2a-Qd7r/rm8nc8jeptMUbRfClKNx/g\"",
    "date": "Thu, 05 Jun 2025 22:36:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 432.6 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/23bd8cd4-fbcd-4d75-8364-26706c5f784a (1134.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "125",
    "etag": "W/\"7d-O8UoES/a/ZuHRT4PveKC9xnALlk\"",
    "date": "Thu, 05 Jun 2025 22:36:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization deleted successfully",
    "data": {},
    "messageKey": "organizations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1134.1 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/d7e83731-1c0b-4b8d-a021-55d0cb874f93 (503.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "137",
    "etag": "W/\"89-L28A+KCzkTyobxp83U7rR/Us2gU\"",
    "date": "Thu, 05 Jun 2025 22:36:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member removed successfully",
    "data": {},
    "messageKey": "memberships.member_removed_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 503.6 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/4312ff4e-8ba8-458b-b378-5749bed5cca9 (464.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "137",
    "etag": "W/\"89-L28A+KCzkTyobxp83U7rR/Us2gU\"",
    "date": "Thu, 05 Jun 2025 22:36:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member removed successfully",
    "data": {},
    "messageKey": "memberships.member_removed_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 464.2 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/organizations/11ff0efb-f5a0-4776-8d8d-dc2a7a8d22d4 (908.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NDAsImV4cCI6MTc0OTE2NjU0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CUYuch3HmjQ9qE4bZLtbXWDfnR9dNNBk1qgvuUtKT_4Wms_qrdbCKntDU_c2DWhdl7AVlOcbACYuubg-qHFmPeejTMeluyFQGZuxDSiBs8FEH-f6UmwhJ60CFKBTJcmjfwQ4TKojKEgFPkhiWnBuOve8dZSCtcNu3gwftxmKk47gRdfs5JpgG7ekKlO9oPoW9_UMdYJ0C5XvEfZyoJOm6nDpd-lrlIoL7Zqy9uWpC1cWUFBbQMkv3A4h2V3GvByqhfWyvjLkCHkTsnyrV4V-ULgQ8yfHhkoGo6EexHHqpQqhkyVVTWwSkPLc10gVRZee1hvS-Za4kJSI2QQALLHoiQ"
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
    "content-length": "125",
    "etag": "W/\"7d-O8UoES/a/ZuHRT4PveKC9xnALlk\"",
    "date": "Thu, 05 Jun 2025 22:36:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization deleted successfully",
    "data": {},
    "messageKey": "organizations.deleted",
    "language": "en"
  }
}
```

**⏱️ Duration:** 908.6 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/login (283.0ms)</summary>

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
    "etag": "W/\"6aa-XvbiDJYuVlTutuWsiBwBqKmzNa8\"",
    "date": "Thu, 05 Jun 2025 22:36:11 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTcxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzEsImV4cCI6MTc0OTE2NjU3MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EAlEXwoCBMeJ6P6XgqnzCfbHKkd-hjmf7uIt1LWVUwQHQBwhHMYaEkwawprGUeTITvk7uC9DGpus6UJRtsE7dhSKCJsvM6sU68oc_gYQVFIIJutTmjbCNuR7akXegQusA3MvVR_4ncv5kJGqzWihROhvE4i95pGrwGQsSmQatwPWQ4hhbLN_57XZitOfbsq0IWCHywCPTk8sQX5GJic_aScLf2l1epXn1mNYT3PhMDH_mQN3xaFBeulQp_nQbnS4DfbKo4NmYtiNXPt6emupHqam3sUUBB6PF627B6gsZ173Q4Y50rk1OLOvqp1gjH9vjcZAHzK8mIqneQebBZyLSg",
        "refreshToken": "AMf-vBzCajtLyouoq3v4_6i1Z9nzO1T9HDVvMPhoC699tRkoRKgRC22d-f6huMmKw3XF6mTro5YJ5HgN2bfmrIya4xca1Z6TzVvutoanIRyBQ9h0WFX7eQvFzX81bhkz3pxIujAD9jaTZ3SY7cGdAUgjWjAe3Ibxf--rIlvyUHpt_pHaHAUsF5JvZLl71yyQA_J6idFhTBlEPeDDgptjgGjurLIAMpPRLBUdzakO_fxKp8nPMtOWfbAkoLHOu33XYLc2WcRAAN_6",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 283.0 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/admin/users/lGeREOhakcQJazM1xoxTzI48vff1 (1284.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTcxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzEsImV4cCI6MTc0OTE2NjU3MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EAlEXwoCBMeJ6P6XgqnzCfbHKkd-hjmf7uIt1LWVUwQHQBwhHMYaEkwawprGUeTITvk7uC9DGpus6UJRtsE7dhSKCJsvM6sU68oc_gYQVFIIJutTmjbCNuR7akXegQusA3MvVR_4ncv5kJGqzWihROhvE4i95pGrwGQsSmQatwPWQ4hhbLN_57XZitOfbsq0IWCHywCPTk8sQX5GJic_aScLf2l1epXn1mNYT3PhMDH_mQN3xaFBeulQp_nQbnS4DfbKo4NmYtiNXPt6emupHqam3sUUBB6PF627B6gsZ173Q4Y50rk1OLOvqp1gjH9vjcZAHzK8mIqneQebBZyLSg"
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
    "date": "Thu, 05 Jun 2025 22:36:12 GMT",
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

**⏱️ Duration:** 1284.2 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/login (238.6ms)</summary>

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
    "etag": "W/\"6aa-mftE0l4KgYAIlx+eesF/U6++YZo\"",
    "date": "Thu, 05 Jun 2025 22:36:12 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzIsImV4cCI6MTc0OTE2NjU3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GsAmB_YZgfDKhH2HM5segH-7o2NfaXYenfbx4YMs3e1eaiBm_bP2zwCyjOeqGYMbbClGTEcz0YxAXYgOW7trXEf0OtEpV0Tl0Etf67TDitAqPkKC6qguez_VnVWJ829tGeRiBqay4k3NJ9QsabQrImlBwmPbxNeu0q8siCinm4RhVwj1_vEIdI5OWyORb3ZtM2ZuShAuyqKA81gF41KIviF78irZ91dGBManC0F1A0-QgS1aWkNqxtP6nYF4WhySyZEhLVX7AKouYr1_NM-5uQonqbQ6QcZYs9ruRCA7rzBVyyOUfqye8VUB4Nk_VPm9lIp4Jc7kL9CEXauQwUT-Eg",
        "refreshToken": "AMf-vBxCUpLnYo-1W1TQ1XckKPxJO2KN4LA3CXbIDGLg1s7l79IGtuh_QIQE2oW-OJkttZsEnIFKOuPaqTGszQcR26cpfbOjjlIjyCBKhafcrADdsVAt9Qv3v9xBdxGpg9ScSZ82GUko_ApUnLKlL9orYL6999jI7sYM0RTCNB_noYI2_SfEtmoS6JCroh65eOW2nWtkKwByhf7STI67bCFOtYE8vk68TYkCvJBBLA6DJeeo6uPrKLRkzEFU7ZrJzIwoTDAiU3_4",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 238.6 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/admin/users/OgEC5mbuqgXq8uuhmosUQ9FZM5h2 (1041.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzIsImV4cCI6MTc0OTE2NjU3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GsAmB_YZgfDKhH2HM5segH-7o2NfaXYenfbx4YMs3e1eaiBm_bP2zwCyjOeqGYMbbClGTEcz0YxAXYgOW7trXEf0OtEpV0Tl0Etf67TDitAqPkKC6qguez_VnVWJ829tGeRiBqay4k3NJ9QsabQrImlBwmPbxNeu0q8siCinm4RhVwj1_vEIdI5OWyORb3ZtM2ZuShAuyqKA81gF41KIviF78irZ91dGBManC0F1A0-QgS1aWkNqxtP6nYF4WhySyZEhLVX7AKouYr1_NM-5uQonqbQ6QcZYs9ruRCA7rzBVyyOUfqye8VUB4Nk_VPm9lIp4Jc7kL9CEXauQwUT-Eg"
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
    "date": "Thu, 05 Jun 2025 22:36:13 GMT",
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

**⏱️ Duration:** 1041.1 ms  

</details>

<details><summary>📡 Request #11: POST http://localhost:3000/api/auth/login (603.6ms)</summary>

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
    "etag": "W/\"6aa-E6SwS0QhuUIHTLX6/dE2BE/tSH4\"",
    "date": "Thu, 05 Jun 2025 22:36:14 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzQsImV4cCI6MTc0OTE2NjU3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kEmjq8QGm_Dq2pLyNT2C56l1ktwgNbMIT6DgE3DuP9nQxdpbUqvUqNIu_1DZA_3X811wcerJGYhkbWAtdmTnwXZUc4E19UVG30ozCsu5w4Q4TdKfJXRsjxwUcsT2aSi99OBkS4_FuufLZu-8L5R84zkcX0RpUtei0fvjDF6iY3G_jP7VENWu-bx1k57DlccyGX45gxT7mbzFtlFnqJF3NBf17agxPLNbAB2CtiVxMvSCwwGkEsTdKhMEE4cFFuPSkV47QmAYVYWSSxDNJYF4UZ0dBMnFDc5EnPS6yIIsVop0_m8FFLxBlNNXiutJJHcxdPx4NBEWstNXTwdZjqQ-aA",
        "refreshToken": "AMf-vBy9xuj_LnRDXUo-Ym0h1N96wezS91cqr8266NG51rt4re1PUQi7xKBHEZZfC0JB2GVeM5JCOyLcbH2pcvHJQyhflUvXprpbXOkFNnJHgfHueTXbwKKf1mS77s4c-hrXJWrnVjRFt3uP_cMA_KgvZw5jp1b6Yc1WV8qjmBIhrSErJBKhON7-HgoaekYLYcp9v_bChbcICYwJEsivsM58JV4Cba-05kAP6nuNsQHABjn61IT5h_VgaSupNlpdwgnljZR5m3Hi",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 603.6 ms  

</details>

<details><summary>📡 Request #12: DELETE http://localhost:3000/api/admin/users/mvi7cS8HvSWVsPmsWEw97Yi5yDD2 (1189.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzQsImV4cCI6MTc0OTE2NjU3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kEmjq8QGm_Dq2pLyNT2C56l1ktwgNbMIT6DgE3DuP9nQxdpbUqvUqNIu_1DZA_3X811wcerJGYhkbWAtdmTnwXZUc4E19UVG30ozCsu5w4Q4TdKfJXRsjxwUcsT2aSi99OBkS4_FuufLZu-8L5R84zkcX0RpUtei0fvjDF6iY3G_jP7VENWu-bx1k57DlccyGX45gxT7mbzFtlFnqJF3NBf17agxPLNbAB2CtiVxMvSCwwGkEsTdKhMEE4cFFuPSkV47QmAYVYWSSxDNJYF4UZ0dBMnFDc5EnPS6yIIsVop0_m8FFLxBlNNXiutJJHcxdPx4NBEWstNXTwdZjqQ-aA"
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
    "date": "Thu, 05 Jun 2025 22:36:15 GMT",
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

**⏱️ Duration:** 1189.5 ms  

</details>

<details><summary>📡 Request #13: POST http://localhost:3000/api/auth/login (365.1ms)</summary>

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
    "etag": "W/\"6aa-5kcqvYA4iSH6YuJ3L/EwwtYc9y0\"",
    "date": "Thu, 05 Jun 2025 22:36:16 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTc1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzUsImV4cCI6MTc0OTE2NjU3NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MJ5a0Xt6pdJ5YnZ3gYfbxa9JA34fUIQCUGrCR58eF_P5PxytXXnGRkhc4RcDkV14YILxriRZgAmZReCd-XlVhWH_-qAVRg0yyLuLWOzK77_HfyljRjdvwBAcDh04tGFKQsCb-_EiNlM9QeWebIPsHWMyy97GlSeiOSlGy3D7uJq1PA5bni_lGrLMiu-0UUqsWDO0ZnYe2uldJgskHgGK4DdsMsFYThTk8Hmz8GAeSuqTq81Zq8s0khcgI1BQn0PChJa_bm87FdnRTGYGq2TO-sFFVZqHWF2VqOOJfbuYVfIHBbwjdECN7op-Ox7HAuC6YH3uhzW25m71aOC5noqaIg",
        "refreshToken": "AMf-vBza_AR5NK6br_3gB7OqJkdGKXSleBOrlawpqyG_yqD_qhLUQZtbodfWQwtHpTCzySve9zG4ActgOKDfPxVFsvt-Hp60qjGlxQAmttlo7tb0zTKXnZbWwOwx5HsC-d3SJGK3Zr88kntzzl5IX8Fwq2-q1nCqc2Zrnab1iv-HNtLUkpAOt1_2eb5-9H8fxAAgM7jhdiKLm1aLQdjWXC1ctw3maVMys3iusycTTlYQ7OJDYShkZT-55Akkc53m6hHWt0u_nf1V",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 365.1 ms  

</details>

<details><summary>📡 Request #14: DELETE http://localhost:3000/api/admin/users/okelMykx8fbDRvODyPiAqDcafqK2 (1219.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTc1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzUsImV4cCI6MTc0OTE2NjU3NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MJ5a0Xt6pdJ5YnZ3gYfbxa9JA34fUIQCUGrCR58eF_P5PxytXXnGRkhc4RcDkV14YILxriRZgAmZReCd-XlVhWH_-qAVRg0yyLuLWOzK77_HfyljRjdvwBAcDh04tGFKQsCb-_EiNlM9QeWebIPsHWMyy97GlSeiOSlGy3D7uJq1PA5bni_lGrLMiu-0UUqsWDO0ZnYe2uldJgskHgGK4DdsMsFYThTk8Hmz8GAeSuqTq81Zq8s0khcgI1BQn0PChJa_bm87FdnRTGYGq2TO-sFFVZqHWF2VqOOJfbuYVfIHBbwjdECN7op-Ox7HAuC6YH3uhzW25m71aOC5noqaIg"
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
    "date": "Thu, 05 Jun 2025 22:36:17 GMT",
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

**⏱️ Duration:** 1219.8 ms  

</details>

<details><summary>📡 Request #15: POST http://localhost:3000/api/auth/login (290.8ms)</summary>

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
    "etag": "W/\"6aa-w0UP2iYeVC4ZwoR5gT7/hiRMn5E\"",
    "date": "Thu, 05 Jun 2025 22:36:17 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTc3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzcsImV4cCI6MTc0OTE2NjU3NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gMI4WbNwkW8X_7yzkx15HkVMheDIJz7FgUEF3IttB8uUO63hi7Fs23wpE1SHvomGq_PuBbgpU43l8ntrf9CXlN449yb4tx3Svr_FdERYLGr4-6SYKrQnFPLU6SXc-g3aWsPxh0ug249Y0BXc73GYmtLi-dHjl-CsRsReVS0pFAiY8kyhZgMO7YoR0bMHvqpq9lUjRla3PyqoYAZf0hb0jHivk9hpaNVAJpieNkaKrPieI6w8yRcXZfI6MJKTVGm_ID9hE1P8j9JFTFy1QMrSqWI4CL4D8YjfcX1bDx7cPlhV5tF_Q4v_fLgfu2ybjP1lPME-veqP71Zir6d0dB500g",
        "refreshToken": "AMf-vByCO4o8mUozxHRM6JGnC_spwFIQT95v6VLDxtUAv8tYRq0dEaJXBw5bnW02YcFqVcGO91hlNSHz3cvVdUAcZ23NTubMXZjkqxIpSO2gxeW1pvz0f2lI2m0rgEOWKzz-B2N_iKOJecSSUptOLlJj9wJe9xFuIqUy1BZ3APafM4TUsX_Eylp-ifi9yBsHEVlpPHc5p9wrLUSwHQrnCHC8myBewwDI72WAnLphRo6PJZ9NS9CV5ghQMdfErYmViJHz8qArHjT8",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 290.8 ms  

</details>

<details><summary>📡 Request #16: DELETE http://localhost:3000/api/admin/users/ZWoOoxcUn5fYgbeRh7FuBWhfG062 (1211.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTc3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzcsImV4cCI6MTc0OTE2NjU3NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gMI4WbNwkW8X_7yzkx15HkVMheDIJz7FgUEF3IttB8uUO63hi7Fs23wpE1SHvomGq_PuBbgpU43l8ntrf9CXlN449yb4tx3Svr_FdERYLGr4-6SYKrQnFPLU6SXc-g3aWsPxh0ug249Y0BXc73GYmtLi-dHjl-CsRsReVS0pFAiY8kyhZgMO7YoR0bMHvqpq9lUjRla3PyqoYAZf0hb0jHivk9hpaNVAJpieNkaKrPieI6w8yRcXZfI6MJKTVGm_ID9hE1P8j9JFTFy1QMrSqWI4CL4D8YjfcX1bDx7cPlhV5tF_Q4v_fLgfu2ybjP1lPME-veqP71Zir6d0dB500g"
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
    "date": "Thu, 05 Jun 2025 22:36:18 GMT",
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

**⏱️ Duration:** 1211.6 ms  

</details>

<details><summary>📡 Request #17: POST http://localhost:3000/api/auth/login (281.4ms)</summary>

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
    "etag": "W/\"6aa-ZMp8YsTBBtaocr0X7b0+i2bY/cg\"",
    "date": "Thu, 05 Jun 2025 22:36:19 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTc4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzgsImV4cCI6MTc0OTE2NjU3OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OO4EFcJEF_hSUp3M04jn0Rp0QIz5ceNOHbjx7lLz7C0qwdBdzuvQ2FGzQ-BE4Edtk-3ShhRqD9syocb_-KU1Js9WRG8E7EUFSKLqcI0Bm5QwSH9O-SzmwWd0FgMUPd2wkHJyx9pXP6VOE8QpTWHJtZoJSLah6QTz9ikHQ0-4GvvysQZ4Mnnj12is9iLHe1Yf7lwepIhngvmQy0Tl6prfUVaGBLvaI1g75fGqjLhL2JRUF56QKozTUospS_2As4qVYCQ8zB8dk8MgeoK2lqQiYiipGS5G9sQj6TOMDkzssIxByMFYNfwIB_ppVQglHIl1346NXG-tFZm4Zg-PnW9XXQ",
        "refreshToken": "AMf-vBySF1pRtP1K3B3EELThWLuHz9Y3Z2B0fDA9zLVr0jJiOGqjMeEIDqxEBhZh6fsVtCq7t87kwu7VODRerCGHCfinXR5-2b4PxYtGICQKyrqFRFHD77r_C8skqg8Xqs1wMmP4f4VOP3KJIxdWeLJUTRQ1BLAGv54asnQTTMFgvZ84YgSH0HU85CvfxmPIy8vqr8Ohv1LLT3bERoBd8NLx8ZhjhyFBpMmalbk9Q-3rzl2pO-cuPyi0XnNGOeFoHeGk649_xatO",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 281.4 ms  

</details>

<details><summary>📡 Request #18: DELETE http://localhost:3000/api/admin/users/bXPr20P9asSMuccegOD5z8Rkfyt1 (1235.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTc4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5NzgsImV4cCI6MTc0OTE2NjU3OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OO4EFcJEF_hSUp3M04jn0Rp0QIz5ceNOHbjx7lLz7C0qwdBdzuvQ2FGzQ-BE4Edtk-3ShhRqD9syocb_-KU1Js9WRG8E7EUFSKLqcI0Bm5QwSH9O-SzmwWd0FgMUPd2wkHJyx9pXP6VOE8QpTWHJtZoJSLah6QTz9ikHQ0-4GvvysQZ4Mnnj12is9iLHe1Yf7lwepIhngvmQy0Tl6prfUVaGBLvaI1g75fGqjLhL2JRUF56QKozTUospS_2As4qVYCQ8zB8dk8MgeoK2lqQiYiipGS5G9sQj6TOMDkzssIxByMFYNfwIB_ppVQglHIl1346NXG-tFZm4Zg-PnW9XXQ"
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
    "date": "Thu, 05 Jun 2025 22:36:20 GMT",
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

**⏱️ Duration:** 1235.2 ms  

</details>

<details><summary>📡 Request #19: POST http://localhost:3000/api/auth/login (231.5ms)</summary>

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
    "etag": "W/\"6aa-gKAXWsgPR0//fQSoSjywYJwrT/Q\"",
    "date": "Thu, 05 Jun 2025 22:36:20 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTgwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5ODAsImV4cCI6MTc0OTE2NjU4MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UzwxUhjFJWpwXQq_EYlA8DSo_KU0BGwN8_TcBJyEY5vhR_1sq0Y6HgKCLzHnP6kaRP66IBjjBcO8_H3FWcHCNwHbH2K0QDVG2sHP4A1s7-dMvRpDcwvpy87hr7zu_3Zu2Z7NeCW734hdvwsGEob6T7yjWQgeoDMjlfP8pVkr_p0hvAtWKYqEhZP8W1QeV6EL25Eips-RFCQuXEp1JNo51gzapw8pwMZua9N-rSvjzse1y3kCbNts-OfyHewu5bZvB7B5UWVrJqjakAIDHV6iof835Cak_c1Av1oiveu_efJFxJm_gcwr5j3CLDVYfWuqiUPtVqg2iwfIMZ0SPQk-Ew",
        "refreshToken": "AMf-vBxz0peH3iYGAmIXnupT75EZ5wjGC-5tgaubZBtzwTmvHv5Vhb3l6vXD6htuv5GmolQtU_oKZve5EAN3QunzWc5jbCOfHu_jhYQA1_cTr-qiySKkoTqnirahVxfz_OwU0JNdvlpojv5CW5MRfqcCH7EBBq0g22sJEMyvyZLD9u1ee7IrfpwGvENsxotTSXNiJWON0VrNWFPBrMUFlvgX5rxyN6yvNoL-VM_DX9bGn1sfRzdIew0vLyM7oyqBMXEcw-JDwDyO",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 231.5 ms  

</details>

<details><summary>📡 Request #20: DELETE http://localhost:3000/api/admin/users/XkAFUYAxCQX7efpllPjyk7Evvvq2 (1160.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTgwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5ODAsImV4cCI6MTc0OTE2NjU4MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UzwxUhjFJWpwXQq_EYlA8DSo_KU0BGwN8_TcBJyEY5vhR_1sq0Y6HgKCLzHnP6kaRP66IBjjBcO8_H3FWcHCNwHbH2K0QDVG2sHP4A1s7-dMvRpDcwvpy87hr7zu_3Zu2Z7NeCW734hdvwsGEob6T7yjWQgeoDMjlfP8pVkr_p0hvAtWKYqEhZP8W1QeV6EL25Eips-RFCQuXEp1JNo51gzapw8pwMZua9N-rSvjzse1y3kCbNts-OfyHewu5bZvB7B5UWVrJqjakAIDHV6iof835Cak_c1Av1oiveu_efJFxJm_gcwr5j3CLDVYfWuqiUPtVqg2iwfIMZ0SPQk-Ew"
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
    "date": "Thu, 05 Jun 2025 22:36:21 GMT",
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

**⏱️ Duration:** 1160.7 ms  

</details>

<details><summary>📡 Request #21: POST http://localhost:3000/api/auth/login (224.2ms)</summary>

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
    "etag": "W/\"6aa-aXGyQdkZqawMXXHo2Ii1TL+Wd0Q\"",
    "date": "Thu, 05 Jun 2025 22:36:21 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5ODEsImV4cCI6MTc0OTE2NjU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GG6uhRET8dZaIe584otnVxATh3LXFOpoeKGz4RVmO6_ul11Zs2EPeG2vNxBb6xVpdkJiHhE7c8DZkzNJ4MK-FUQcL0sk8aqEE7AT-iW6iWQATjeNNCHOGhC_MLn1YxtvR-1PWVCIuzIC2vitAKFYI5LHKW04V0cENclXx25lUYEn0Ox4X7qAoYpauPMrF0WvtlAspqj5x39jMrHlQac4JbBNqFgfn3fs-L9gW_QWTwj3GvUC_s7dcvIgtvurhXK0zW6rpVV7lC_Ssy6pHDTqbl6hDNhEd2EEHqchZ0d02A5G_NKnd2slGiSPLS_6ATtc1vvyjh8ndfZ8JqiIGauAqQ",
        "refreshToken": "AMf-vBzdqdDltTaGNSon_S31nV3xV_mBh647frX7BBA-2ZlJ4uODv5o8v3ukIPx1_YDZHkN5j73vnuDqLFG9pr7lr-VT5wQF5Xlw0JcENzouwXuQbMO40UgMz4DJ5GK5YgBc-0gJW9kOMPCnIKcsSNu4LknHUSNS4Cn7OWLvyYGqMmJBmfC9mjkS0XqarRp02e6gfDnWeUQtVy2SVULXJTdOZa1YsNQabakuAgLAvK-KizyVOmIMGKOO7hEz-ZsvWJL0V6sVoGQC",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 224.2 ms  

</details>

<details><summary>📡 Request #22: DELETE http://localhost:3000/api/admin/users/MuG1mEDg73QZ6KG03akEz7pt76P2 (1112.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5ODEsImV4cCI6MTc0OTE2NjU4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GG6uhRET8dZaIe584otnVxATh3LXFOpoeKGz4RVmO6_ul11Zs2EPeG2vNxBb6xVpdkJiHhE7c8DZkzNJ4MK-FUQcL0sk8aqEE7AT-iW6iWQATjeNNCHOGhC_MLn1YxtvR-1PWVCIuzIC2vitAKFYI5LHKW04V0cENclXx25lUYEn0Ox4X7qAoYpauPMrF0WvtlAspqj5x39jMrHlQac4JbBNqFgfn3fs-L9gW_QWTwj3GvUC_s7dcvIgtvurhXK0zW6rpVV7lC_Ssy6pHDTqbl6hDNhEd2EEHqchZ0d02A5G_NKnd2slGiSPLS_6ATtc1vvyjh8ndfZ8JqiIGauAqQ"
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
    "date": "Thu, 05 Jun 2025 22:36:23 GMT",
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

**⏱️ Duration:** 1112.7 ms  

</details>

<details><summary>📡 Request #23: POST http://localhost:3000/api/auth/login (382.1ms)</summary>

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
    "etag": "W/\"6aa-Oke9WaSokaK4+Vyf+IAyaFxlmc8\"",
    "date": "Thu, 05 Jun 2025 22:36:23 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5ODMsImV4cCI6MTc0OTE2NjU4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jWOWtfNt-ntwuYpbrQb-7J2mhkS32vHBklUYGZopfW-ONCdHuXoREQDg5s2fkYOZTHm1vPmqBQQOtf4aojWY9DEFg8DMc789Aj_-q8HUN5OlZz9BHAliiLO_OwH-V_-62swFp875DUB95sGLx9TMFvR_dGuUnGZVY9RkssZAhS6f12JOoMAvaw6Dir3k_OgtcVmxyaz3Ays7AQtk-bAnsOJ_7J2emIrwmu2x-XrDAQvmK-3Zmc9j_7dy9yMl4skBpcU13wqhES7n4PDm2_J7dGJwlx8thLbnFkRLVvn5gMUnJyw3CPpQje5qe0zYD8wrWQ1v8QOE1NHdlmvU-YbIag",
        "refreshToken": "AMf-vBxhHXiV1f0vOlPXiLD2hkeI-sYtRJYzUbW7iXRY2BNXXA4cm0ELT8_44Jc6-dJy6WkqrASe7ofvPvfR6Ca0sOKWzrxIfamgwzdgA2sKsAFDku0-BZI4vNaeNd6QDJMtdSYn3j0SW2SucQ6iaBpqUnBxPtI8XT5JMVCxMIoRi1KWZH-KkA3pIccZ2mlI0LM0rJCWb3e1TSSONUSfE1_4jGHlrp60bRKolKcBUVt3cadt6aRfUC0RtJ32_3z1jf1MjwT_Fk9j",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 382.1 ms  

</details>

<details><summary>📡 Request #24: DELETE http://localhost:3000/api/admin/users/5tMBnzsTjSWpTUg1rozny1w9wNt1 (1351.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyOTgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI5ODMsImV4cCI6MTc0OTE2NjU4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jWOWtfNt-ntwuYpbrQb-7J2mhkS32vHBklUYGZopfW-ONCdHuXoREQDg5s2fkYOZTHm1vPmqBQQOtf4aojWY9DEFg8DMc789Aj_-q8HUN5OlZz9BHAliiLO_OwH-V_-62swFp875DUB95sGLx9TMFvR_dGuUnGZVY9RkssZAhS6f12JOoMAvaw6Dir3k_OgtcVmxyaz3Ays7AQtk-bAnsOJ_7J2emIrwmu2x-XrDAQvmK-3Zmc9j_7dy9yMl4skBpcU13wqhES7n4PDm2_J7dGJwlx8thLbnFkRLVvn5gMUnJyw3CPpQje5qe0zYD8wrWQ1v8QOE1NHdlmvU-YbIag"
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
    "date": "Thu, 05 Jun 2025 22:36:24 GMT",
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

**⏱️ Duration:** 1351.5 ms  

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
- Test organization: Test Org for Memberships 1749162943090
- Total memberships created: 2
- Total test users created: 9
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
