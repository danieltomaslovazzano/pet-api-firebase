# E2E Test Report: memberships-tests

**Date:** 6/15/2025  
**Time:** 9:25:02 PM  
**Duration:** 61.22s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully | PASSED | 0.60s | Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully |
| ✅ Memberships E2E Tests Invite User to Organization Should fail to invite same user twice | PASSED | 0.51s | Memberships E2E Tests Invite User to Organization Should fail to invite same user twice |
| ✅ Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions | PASSED | 1.86s | Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions |
| ✅ Memberships E2E Tests Invite User to Organization Should invite user with different roles | PASSED | 8.18s | Memberships E2E Tests Invite User to Organization Should invite user with different roles |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by organization | PASSED | 0.71s | Memberships E2E Tests Get Memberships Admin should get memberships by organization |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by user | PASSED | 0.55s | Memberships E2E Tests Get Memberships Admin should get memberships by user |
| ✅ Memberships E2E Tests Get Memberships User should get their own memberships | PASSED | 1.11s | Memberships E2E Tests Get Memberships User should get their own memberships |
| ✅ Memberships E2E Tests Get Memberships Should fail without userId or organizationId | PASSED | 0.56s | Memberships E2E Tests Get Memberships Should fail without userId or organizationId |
| ✅ Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships | PASSED | 0.39s | Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships |
| ✅ Memberships E2E Tests Get Membership by ID Admin should get membership by ID | PASSED | 0.64s | Memberships E2E Tests Get Membership by ID Admin should get membership by ID |
| ✅ Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID | PASSED | 0.70s | Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID |
| ✅ Memberships E2E Tests Update Member Role Admin should update member role successfully | PASSED | 0.62s | Memberships E2E Tests Update Member Role Admin should update member role successfully |
| ✅ Memberships E2E Tests Update Member Role Should fail with invalid role | PASSED | 0.38s | Memberships E2E Tests Update Member Role Should fail with invalid role |
| ✅ Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions | PASSED | 0.52s | Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions |
| ✅ Memberships E2E Tests Remove Member Admin should remove member successfully | PASSED | 1.15s | Memberships E2E Tests Remove Member Admin should remove member successfully |
| ✅ Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions | PASSED | 2.14s | Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions |
| ✅ Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) | PASSED | 1.19s | Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations | PASSED | 0.46s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations | PASSED | 1.42s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations | PASSED | 1.15s | Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (596.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "6NzsVuZqLhgmZqqyXptOwVg0SwK2",
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
    "etag": "W/\"174-00ngh7/pLdRQQgmsApqg4qEDvvU\"",
    "date": "Sun, 15 Jun 2025 19:24:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "1c1ad2f6-7384-412a-a763-d4ea3be8a761",
      "userId": "6NzsVuZqLhgmZqqyXptOwVg0SwK2",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-15T19:24:06.481Z",
      "updatedAt": "2025-06-15T19:24:06.481Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 596.1 ms  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (504.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "6NzsVuZqLhgmZqqyXptOwVg0SwK2",
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
    "date": "Sun, 15 Jun 2025 19:24:06 GMT",
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

**⏱️ Duration:** 504.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.86s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1428.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1750015447068@example.com",
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
    "etag": "W/\"631-l7xHGOof4XL/bhc3W/XNY0FriPE\"",
    "date": "Sun, 15 Jun 2025 19:24:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "lTSSJyxCAObh6Ceybo1F9HhnHt32",
        "email": "no-perm-invite-1750015447068@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ0NywidXNlcl9pZCI6ImxUU1NKeXhDQU9iaDZDZXlibzFGOUhobkh0MzIiLCJzdWIiOiJsVFNTSnl4Q0FPYmg2Q2V5Ym8xRjlIaG5IdDMyIiwiaWF0IjoxNzUwMDE1NDQ3LCJleHAiOjE3NTAwMTkwNDcsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc1MDAxNTQ0NzA2OEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzUwMDE1NDQ3MDY4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PzLAcRoFfDaEzwhg3QDfdMZqxWz5oqcCkgsUN6dTK7-iJEGHhgwuYmJ0WG0yy30LNKghzRW49d_LolluClBUmMkg0kRNmiRct_pgwTBedPIThTPq4Nu6Hje50ZLu5-n1IbvWNWtTh4pZHiDhNvuS-_tVq8QwqrqkfV0SfAjS-Il1ZUj_UawmTmMIWmj6QCMg0nSdMOlZKCa-aNKDGeXumA8g3CyWcz40QnTIK-Zxw_Co_vmTCL0_Y0w2DZ6OTxL1-k38VRXtlFqyNIal0mnisu2bYMP385jslG5mqm0En1flzxWnppD1aBtnKc1dlv-Qc-etLEoYUGwPtfyYQC-VpQ",
        "refreshToken": "AMf-vBxcnnXCydBON5cu7kYguZaCBkcDPwsOvMdDmE1aEL7bd-JS8sjCXZ_7fiHEXDMfoOKORuGmq2VO5MlpljINd6PTxdIrBeOY3nS498hJgLxP0ub5ab2L2ASbF3tpO4pTDMxWv_eV8lh_0TcVKDOymDDnjTRMF9GR574yMF9jDC4GWP0tCrDX31In8K7Y5ef7F5yB7vrvnt8c7HXDKN8ApdSGrFXy_2JL_r8alo_kHlGK_5nfO9Aom7RcTXZWTcQr-Sk_41r5",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1428.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (427.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ0MywidXNlcl9pZCI6Ikl5Y1BWVWhwYzhZSGROd041WFZoaHFsYzNZMzMiLCJzdWIiOiJJeWNQVlVocGM4WUhkTndONVhWaGhxbGMzWTMzIiwiaWF0IjoxNzUwMDE1NDQzLCJleHAiOjE3NTAwMTkwNDMsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDAxNTQ0MjQ2OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMDE1NDQyNDY5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.CcNsEwG150-A0MoB2tLK5OwTisV3NzqLwJWz947_afe9Whlcym-4UAtagUs_JUjstS_ozHaCbHqYELnQ84dg2YbfGJjsuWa5KWlk_EU0SqfTiH9Cjm3QwFiMIikOWLoiHp2Wyc-dbPgbXW9I-JImQCW0FFEEuOS15G57gIXuQ4ZeP4I5l0WfFiursykvPGWkz84NQCcbLnd7zYVQWskORc0BjWMJcfUhQaEWtwBkVa1CEQBCnQHsCrl8Z9ayGqgOfQ0l6xLbNV-b8lznjkcNg4sUeIGnk8y0rBrNjXMVVpbZqJwIlYg0tJmMkvk_3OCMwYsOgUKnVUmcl76ZKmI-5w"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "lTSSJyxCAObh6Ceybo1F9HhnHt32",
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
    "date": "Sun, 15 Jun 2025 19:24:08 GMT",
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

**⏱️ Duration:** 427.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 8.18s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (893.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1750015448928@example.com",
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
    "etag": "W/\"603-VROaUaN1Pupkubrz8A408f33NhI\"",
    "date": "Sun, 15 Jun 2025 19:24:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "2Ao2ntr28AOxABhpGtpQnxQbr5u2",
        "email": "admin-user-1750015448928@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ0OSwidXNlcl9pZCI6IjJBbzJudHIyOEFPeEFCaHBHdHBRbnhRYnI1dTIiLCJzdWIiOiIyQW8ybnRyMjhBT3hBQmhwR3RwUW54UWJyNXUyIiwiaWF0IjoxNzUwMDE1NDQ5LCJleHAiOjE3NTAwMTkwNDksImVtYWlsIjoiYWRtaW4tdXNlci0xNzUwMDE1NDQ4OTI4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc1MDAxNTQ0ODkyOEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EooeHqBYfN7FG7G_qsLbeHsdOl59CmPtaLVD582wOhoqIGwJGaVndJdojxhirjEvz8DOpWFN_ajAodkz8XXETC-tXcp3hnJlNnNCJ5Xahd_u47kKlao6sOfaBCfIQS6JuqcRj5pH5gJdtjGYl-9vMUNZTx1DzhqhKQWHm2wttatDGLBUtXIkjVsETQZ7V_aU0v_ps5iiKiu-qPH-PfWbS7KYF1FYqsMCO--sFP9YSaV6ZwbSDuEPQGQlSQ6C3rgrqi2qoxFfLoQMnBSBpZgDKvESl_3DDZw8kUK6DKJwNz5RB-3_WoKAhyjd695BLG9kX2-0Miws2hx_xlY9ISKreg",
        "refreshToken": "AMf-vByxdDj9m2fJb8kNR2g7x2vZLiYzVgsNzyrqO5gk2FmayfVglaRlCj8LLxUmcN12TiVJi6YGU4QCB8JT1OIHX8VRIv0lMKSDp8VnDED7p1S3YbCDHHFqZvdXHj3vBMnp6gkkJMkHnlB04XT72M6xcVbJfjb-8A3kHGdVFlzXYKZAmxuuz_26drvR-8_737npICBUbxSLA0EgzHopaeQBHt5ze3rOoTwO7gCN1HxeUBiHXPXmxv4",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 893.4 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (646.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "2Ao2ntr28AOxABhpGtpQnxQbr5u2",
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
    "etag": "W/\"173-MQerb5/ni+2FR6dDGecq9QwVt3E\"",
    "date": "Sun, 15 Jun 2025 19:24:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "b69cf2ca-2ef4-45d9-b555-675bcdfebbe1",
      "userId": "2Ao2ntr28AOxABhpGtpQnxQbr5u2",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-15T19:24:10.383Z",
      "updatedAt": "2025-06-15T19:24:10.383Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 646.5 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1100.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1750015450470@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1549",
    "etag": "W/\"60d-57v6Y7SbjAjszh3oZkGnbRzL5Vc\"",
    "date": "Sun, 15 Jun 2025 19:24:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "6c6D1Kk0OReJxuDZvyVhyDsqwI03",
        "email": "manager-user-1750015450470@example.com",
        "name": "Manager User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ1MCwidXNlcl9pZCI6IjZjNkQxS2swT1JlSnh1RFp2eVZoeURzcXdJMDMiLCJzdWIiOiI2YzZEMUtrME9SZUp4dURadnlWaHlEc3F3STAzIiwiaWF0IjoxNzUwMDE1NDUwLCJleHAiOjE3NTAwMTkwNTAsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NTAwMTU0NTA0NzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NTAwMTU0NTA0NzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.FG8XhurhYpAjYXH_LG_zUYyszTJwwYaMcGihB6luSif34bA85djCqk6-7vuKAtl4kwda6wzl2xlj3GJKlHsKsOa-rPd0RseNQ0MgsoMaAnQrQwRpj4DP4PAIGIzhZXLyC0CZ2gG41XNHdtVCgvqAJ-5xymcmIGmRgRGosfjn5mgsyKu9UUwc3ZcPdCPLGF-wbD1TqcHxsKHjcCCil8IE_h09JYtYz8LeLtTU734uykAWGtNmEbdqIbFb_Jd2tdHsyqpttG1837qWpaZHFXuFjLG2pRbo0v2-qf3iJ94MKTkuCuS3gcEYnSeJwaIAWgW72YC2q_1U6On0s3fEmDlJqg",
        "refreshToken": "AMf-vBw_qFY3B_YEU12Gu2g3oqEPKgtG0krsdDe4l4ATELwodthkNqe23Vhbs2ycvYOX7rUVtJ7gjW4cKerLIYWlFKdzRoC4YMBHcHVpv1caQqCXbKmQLZzIU76GIatdSMuiVip5uMjFB9low6HDHwtpMP8ViFXp62AuNNkeIuEy3VWWb18X9CEpXfas-sR9LaIccMDuR-CwKiO_YLZnhd44TEEW3xakO3v3k-qjxlyTCsVFW5HdyN4",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1100.5 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (601.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "6c6D1Kk0OReJxuDZvyVhyDsqwI03",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "373",
    "etag": "W/\"175-aJ85aOEkwyRHBFJGUu3RWgiZP6s\"",
    "date": "Sun, 15 Jun 2025 19:24:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "80f5f8a0-f23e-49c5-8a26-40812da99a94",
      "userId": "6c6D1Kk0OReJxuDZvyVhyDsqwI03",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-15T19:24:12.096Z",
      "updatedAt": "2025-06-15T19:24:12.096Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 601.7 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1035.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1750015452173@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1579",
    "etag": "W/\"62b-BYg5Ie0nI5sN44gPF4NWIjmyqUo\"",
    "date": "Sun, 15 Jun 2025 19:24:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "5ZSKtHwyTUh5Ey1zCIWn75GleNq1",
        "email": "moderator-user-1750015452173@example.com",
        "name": "Moderator User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ1MiwidXNlcl9pZCI6IjVaU0t0SHd5VFVoNUV5MXpDSVduNzVHbGVOcTEiLCJzdWIiOiI1WlNLdEh3eVRVaDVFeTF6Q0lXbjc1R2xlTnExIiwiaWF0IjoxNzUwMDE1NDUyLCJleHAiOjE3NTAwMTkwNTIsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc1MDAxNTQ1MjE3M0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzUwMDE1NDUyMTczQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.F78I8rEU7rtp-R-yf7vikVdXlBn0iyb_vCrpSduXn6R2PWPWVrwyC-LAgXBRMbf6RPl91y8dnmcwhxDFPBjb9R08MaI3BHofDMehuyFACYD8c6Sh45SJ9OYiWvzITp5XR_cAawRg34Fnn0QUYNq-5LMJ5i47xsP0BOX-D3NHQE9fmYrFoK_FXT74C0-NJ3EU61wOlWvpMDchj0hvw6r2SxRA01roYsnDXrfDC2Zt-lFEA5tY4eRSk6qAGxpXv3O004URJEKjja7yyQeejPf_9LKlE1X_QDWxikpzzqcL2rlPcjydXMYqEjZXNP2ReQhu8hWDP0NwIJjL-gqSA7Q4rg",
        "refreshToken": "AMf-vByfgsRVk-x-SSUskP1vlw7hdqW_A7IADZYvJaUJ-brVqMOKgpJAbMJsUUyEBgjeaHrx1Tm_QWJiTSEEX4e_9DRu55EAgFwKrYam-E3ZLPpkd787icMbcHVhu37XcOYDrR9_wJxa0I2eU4GNDt9ZG8_KtCvZGwBx7ntjVnjuUWdJVH9Sk5W5sNHYX_rrDosMEI2riWJR6iKiCzrmefoi7v4vyWWuBoOcmFfhgKV7M1qNafFYeQdybaAKjmnNwpfZmXHH2iBS",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1035.7 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (601.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "5ZSKtHwyTUh5Ey1zCIWn75GleNq1",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "375",
    "etag": "W/\"177-EnB1Jdrm/EMZiartVfPh+PD7n7Q\"",
    "date": "Sun, 15 Jun 2025 19:24:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "fbd81871-d1a3-4e2a-abde-f9ecf8fe9255",
      "userId": "5ZSKtHwyTUh5Ey1zCIWn75GleNq1",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-15T19:24:13.746Z",
      "updatedAt": "2025-06-15T19:24:13.746Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 601.8 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1015.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1750015453812@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1579",
    "etag": "W/\"62b-a0AdTu5umopi4ZmfAQjCbfqIGxk\"",
    "date": "Sun, 15 Jun 2025 19:24:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "ee8SJc5JTxa8NybXsfV3YsQ6wn42",
        "email": "volunteer-user-1750015453812@example.com",
        "name": "Volunteer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ1NCwidXNlcl9pZCI6ImVlOFNKYzVKVHhhOE55YlhzZlYzWXNRNnduNDIiLCJzdWIiOiJlZThTSmM1SlR4YThOeWJYc2ZWM1lzUTZ3bjQyIiwiaWF0IjoxNzUwMDE1NDU0LCJleHAiOjE3NTAwMTkwNTQsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc1MDAxNTQ1MzgxMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzUwMDE1NDUzODEyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.H_deAtuDJWNayNolTwe_iQqCgRZN_zWxNSABDDTemSDGnyPrgFqiQntaOYEYfjvf7CE3brUte8fmjpK1joJZWagd5WmwpYX4lO5tPcsoVAc_Ej4SSR_Gt0jr4yBwl3VT3UxRXUKv1rnIp7x8vM-FoRnzVFVF5vl6XWSgj6ZV9ttWXNelOLHcbB3iQEKZ11cPZxqfnvxP-e0dTh_x7BVOQBrKaE1vZd7jQ3oSktaH2kzFmBq0-yaJ6fNDPsyugPvShKhB20xxqHqRSDKQV0dQm6SUhsSguB7PC_nvM9i-mPKwYDvi3ORFDCD_0kiPAXnUxzGwpKgvGm16MfSuyjgj3A",
        "refreshToken": "AMf-vByv-rLmVgrUQkqHnH1MGmeknU6iRtVv3Xh1C2vmTYsYcIkWFF8_NipbTcowHVV69UGuBGxwaY8u9VzdcP1FKbNqIw-jp8AHDlEj-SHy7YbEnBOJJbDOug4GukyDk6hnbyDkTG_AXCCfGDlvZmkxGSiFtcqJmBBYJAFiuvDAksCGKxjAbn3MeORGYsxwWOqwctc7rvtna0pQVme6i6z2bf3EWePdADirftkNEbCHmoAnHMZknxtWNAkKTdSbIyF9FmPqfH_I",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1015.4 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (605.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "ee8SJc5JTxa8NybXsfV3YsQ6wn42",
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
    "etag": "W/\"177-A8d9G1NWjwPw8qUvO5LkJzzs/vk\"",
    "date": "Sun, 15 Jun 2025 19:24:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "81c77da5-78f6-42a8-9139-1e03baaa97ec",
      "userId": "ee8SJc5JTxa8NybXsfV3YsQ6wn42",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-15T19:24:15.365Z",
      "updatedAt": "2025-06-15T19:24:15.365Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 605.8 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (947.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1750015455433@example.com",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "1553",
    "etag": "W/\"611-Jm9aA+4w7wybceCznmDhZmV+cQg\"",
    "date": "Sun, 15 Jun 2025 19:24:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "8YzJVZwaxLb3S3tnpIj2bnMnanm2",
        "email": "observer-user-1750015455433@example.com",
        "name": "Observer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ1NSwidXNlcl9pZCI6IjhZekpWWndheExiM1MzdG5wSWoyYm5NbmFubTIiLCJzdWIiOiI4WXpKVlp3YXhMYjNTM3RucElqMmJuTW5hbm0yIiwiaWF0IjoxNzUwMDE1NDU1LCJleHAiOjE3NTAwMTkwNTUsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzUwMDE1NDU1NDMzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc1MDAxNTQ1NTQzM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iMX5sUCv3HC-HAf5mQgZ-xOZAWmg8cJpP2odLTrBYo_lzRWycGvMK6ckVWV-HjVSCb0rm_3wiiZRskuj7h6HSCXBgf-zMhFMYvcmfzMel6wsmiEjpSclHwDZVWzDPj5_Ebc7qHpV0KAHDZ5cujaUQnABmMZZTEaDz4dLvHaNyc23T_ji3hVRtLPg96M9nvLrcevb_cJc6TGWFUPJsLPoChIFTRDZmfk85IKN9N34-rqxjGWkpbkVxQUd2s7_ptNGi3gwmbPXg_yzqE-lnnkxoMZmYlnl5X3CnGC8iHXD2chW0hsY97om_au7KGr58qO1wBxxkp7H8ZRytig-C9Uakw",
        "refreshToken": "AMf-vBwWwi5KL72GzGJa8XwfP6AKDpe7D1rmLQ5Ik2t3HC1XOpR4aQjSWSoechXTdO25zlHo38HkNq-TUGKKvDw0uKFbyxcnPMHwIUBPL4jJd0jBkNIZVpqmK0AZZici_J_18gV2sWmT28lqj3gGzUCvZFG4xJ2tfUhdpA8JWjnFb31rs2ZwEBJsaUtB6YsGNkS2Ag4MbZYfenqX6e8VVqrkhGEQ_bawKmkdWO1SlX656cEZlT00MKg",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 947.3 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (723.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "8YzJVZwaxLb3S3tnpIj2bnMnanm2",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "374",
    "etag": "W/\"176-VFsFtZTTBi8uwQ8bxFJL0n+CX2s\"",
    "date": "Sun, 15 Jun 2025 19:24:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "ae3d687b-3863-49f4-9a21-c40c1bdbea98",
      "userId": "8YzJVZwaxLb3S3tnpIj2bnMnanm2",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-15T19:24:17.035Z",
      "updatedAt": "2025-06-15T19:24:17.035Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 723.6 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=ed8ba154-26a8-4ff5-81bb-8f205ff1dbca (707.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "content-length": "1573",
    "etag": "W/\"625-4GLntU6mMYeyhaskXfIbgeOD8sU\"",
    "date": "Sun, 15 Jun 2025 19:24:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "1c1ad2f6-7384-412a-a763-d4ea3be8a761",
        "userId": "6NzsVuZqLhgmZqqyXptOwVg0SwK2",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-15T19:24:06.481Z",
        "updatedAt": "2025-06-15T19:24:06.481Z"
      },
      {
        "id": "b69cf2ca-2ef4-45d9-b555-675bcdfebbe1",
        "userId": "2Ao2ntr28AOxABhpGtpQnxQbr5u2",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-15T19:24:10.383Z",
        "updatedAt": "2025-06-15T19:24:10.383Z"
      },
      {
        "id": "80f5f8a0-f23e-49c5-8a26-40812da99a94",
        "userId": "6c6D1Kk0OReJxuDZvyVhyDsqwI03",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-15T19:24:12.096Z",
        "updatedAt": "2025-06-15T19:24:12.096Z"
      },
      {
        "id": "fbd81871-d1a3-4e2a-abde-f9ecf8fe9255",
        "userId": "5ZSKtHwyTUh5Ey1zCIWn75GleNq1",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-15T19:24:13.746Z",
        "updatedAt": "2025-06-15T19:24:13.746Z"
      },
      {
        "id": "81c77da5-78f6-42a8-9139-1e03baaa97ec",
        "userId": "ee8SJc5JTxa8NybXsfV3YsQ6wn42",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-15T19:24:15.365Z",
        "updatedAt": "2025-06-15T19:24:15.365Z"
      },
      {
        "id": "ae3d687b-3863-49f4-9a21-c40c1bdbea98",
        "userId": "8YzJVZwaxLb3S3tnpIj2bnMnanm2",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-15T19:24:17.035Z",
        "updatedAt": "2025-06-15T19:24:17.035Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 707.4 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (550.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:18 GMT",
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

**⏱️ Duration:** 550.2 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 1.11s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=IycPVUhpc8YHdNwN5XVhhqlc3Y33 (1107.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ0MywidXNlcl9pZCI6Ikl5Y1BWVWhwYzhZSGROd041WFZoaHFsYzNZMzMiLCJzdWIiOiJJeWNQVlVocGM4WUhkTndONVhWaGhxbGMzWTMzIiwiaWF0IjoxNzUwMDE1NDQzLCJleHAiOjE3NTAwMTkwNDMsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDAxNTQ0MjQ2OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMDE1NDQyNDY5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.CcNsEwG150-A0MoB2tLK5OwTisV3NzqLwJWz947_afe9Whlcym-4UAtagUs_JUjstS_ozHaCbHqYELnQ84dg2YbfGJjsuWa5KWlk_EU0SqfTiH9Cjm3QwFiMIikOWLoiHp2Wyc-dbPgbXW9I-JImQCW0FFEEuOS15G57gIXuQ4ZeP4I5l0WfFiursykvPGWkz84NQCcbLnd7zYVQWskORc0BjWMJcfUhQaEWtwBkVa1CEQBCnQHsCrl8Z9ayGqgOfQ0l6xLbNV-b8lznjkcNg4sUeIGnk8y0rBrNjXMVVpbZqJwIlYg0tJmMkvk_3OCMwYsOgUKnVUmcl76ZKmI-5w"
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
    "date": "Sun, 15 Jun 2025 19:24:19 GMT",
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

**⏱️ Duration:** 1107.6 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (553.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:20 GMT",
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

**⏱️ Duration:** 553.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (388.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ0MywidXNlcl9pZCI6Ikl5Y1BWVWhwYzhZSGROd041WFZoaHFsYzNZMzMiLCJzdWIiOiJJeWNQVlVocGM4WUhkTndONVhWaGhxbGMzWTMzIiwiaWF0IjoxNzUwMDE1NDQzLCJleHAiOjE3NTAwMTkwNDMsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDAxNTQ0MjQ2OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMDE1NDQyNDY5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.CcNsEwG150-A0MoB2tLK5OwTisV3NzqLwJWz947_afe9Whlcym-4UAtagUs_JUjstS_ozHaCbHqYELnQ84dg2YbfGJjsuWa5KWlk_EU0SqfTiH9Cjm3QwFiMIikOWLoiHp2Wyc-dbPgbXW9I-JImQCW0FFEEuOS15G57gIXuQ4ZeP4I5l0WfFiursykvPGWkz84NQCcbLnd7zYVQWskORc0BjWMJcfUhQaEWtwBkVa1CEQBCnQHsCrl8Z9ayGqgOfQ0l6xLbNV-b8lznjkcNg4sUeIGnk8y0rBrNjXMVVpbZqJwIlYg0tJmMkvk_3OCMwYsOgUKnVUmcl76ZKmI-5w"
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
    "date": "Sun, 15 Jun 2025 19:24:20 GMT",
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

**⏱️ Duration:** 388.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/1c1ad2f6-7384-412a-a763-d4ea3be8a761 (636.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "etag": "W/\"125-jkFVUMXMfyHV5H7PxNkGcf8zFrk\"",
    "date": "Sun, 15 Jun 2025 19:24:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "1c1ad2f6-7384-412a-a763-d4ea3be8a761",
      "userId": "6NzsVuZqLhgmZqqyXptOwVg0SwK2",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-15T19:24:06.481Z",
      "updatedAt": "2025-06-15T19:24:06.481Z"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 636.2 ms  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (700.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:21 GMT",
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

**⏱️ Duration:** 700.6 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Update Member Role Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/1c1ad2f6-7384-412a-a763-d4ea3be8a761 (620.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "etag": "W/\"179-JSsg4zJKUqP5mbV3VyaVUUp4kAY\"",
    "date": "Sun, 15 Jun 2025 19:24:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member role updated to manager",
    "data": {
      "id": "1c1ad2f6-7384-412a-a763-d4ea3be8a761",
      "userId": "6NzsVuZqLhgmZqqyXptOwVg0SwK2",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-15T19:24:06.481Z",
      "updatedAt": "2025-06-15T19:24:22.308Z"
    },
    "messageKey": "memberships.role_updated",
    "language": "en"
  }
}
```

**⏱️ Duration:** 620.0 ms  

</details>


---

### Test: Memberships E2E Tests Update Member Role Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.38s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/1c1ad2f6-7384-412a-a763-d4ea3be8a761 (379.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:22 GMT",
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

**⏱️ Duration:** 379.8 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/1c1ad2f6-7384-412a-a763-d4ea3be8a761 (513.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ0MywidXNlcl9pZCI6Ikl5Y1BWVWhwYzhZSGROd041WFZoaHFsYzNZMzMiLCJzdWIiOiJJeWNQVlVocGM4WUhkTndONVhWaGhxbGMzWTMzIiwiaWF0IjoxNzUwMDE1NDQzLCJleHAiOjE3NTAwMTkwNDMsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDAxNTQ0MjQ2OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMDE1NDQyNDY5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.CcNsEwG150-A0MoB2tLK5OwTisV3NzqLwJWz947_afe9Whlcym-4UAtagUs_JUjstS_ozHaCbHqYELnQ84dg2YbfGJjsuWa5KWlk_EU0SqfTiH9Cjm3QwFiMIikOWLoiHp2Wyc-dbPgbXW9I-JImQCW0FFEEuOS15G57gIXuQ4ZeP4I5l0WfFiursykvPGWkz84NQCcbLnd7zYVQWskORc0BjWMJcfUhQaEWtwBkVa1CEQBCnQHsCrl8Z9ayGqgOfQ0l6xLbNV-b8lznjkcNg4sUeIGnk8y0rBrNjXMVVpbZqJwIlYg0tJmMkvk_3OCMwYsOgUKnVUmcl76ZKmI-5w"
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
    "date": "Sun, 15 Jun 2025 19:24:23 GMT",
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

**⏱️ Duration:** 513.4 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (1044.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1750015463343@example.com",
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
    "etag": "W/\"60d-HzCZ+m+pZ5PO3QAqOAa7+TXe2ew\"",
    "date": "Sun, 15 Jun 2025 19:24:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "RldoJ0uV4DOiAf55CYmOCuktwMv1",
        "email": "remove-user-1750015463343@example.com",
        "name": "User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ2MywidXNlcl9pZCI6IlJsZG9KMHVWNERPaUFmNTVDWW1PQ3VrdHdNdjEiLCJzdWIiOiJSbGRvSjB1VjRET2lBZjU1Q1ltT0N1a3R3TXYxIiwiaWF0IjoxNzUwMDE1NDYzLCJleHAiOjE3NTAwMTkwNjMsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc1MDAxNTQ2MzM0M0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzUwMDE1NDYzMzQzQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.a4e6c1mkcRt1Fqx4pi7IJWyE8rt1xjQRGRcJfA6wBaPBGHt27U73mQmhmmzi50kDsBq6UlOPvDmGam4R1-84cezopDHKJGa3NtTOrM4K4feSea9OBUAxKUeoas9XR74vYjpO36foqJm7sQ41l_cF-FCIc2GUyuvnatrJv-GKqiBDeksC1To3PyHsjgTm9A1dTPZCBW7pkWxPNnf5IzraObC-pNzqY_Z07_-r0E2B3EgCh8fh0_NpbsswsleNYMQf3wlIQ7EJ7w3vf-N-5uUAZ5G6Wfcjk1NNh0ypTLw_EHRo1gDTBLdKIm7dYfEq8DXs_EVrChaRq--fotvY7Nr8TA",
        "refreshToken": "AMf-vBzO255BVSzQq9KEf6x1-QZTT_jwjCjp8mpTQgizKV8pnRiT7a6jiH5U71Iwg17lnDeiw6faeognM__tKV620XAdJZbwiEixT1QanIjMKI51Rh05FBQbe3FNWojOBPSGTmPnLSnRP7lzeHWGkg-kddVhXHFiNVCzSAHO4ML5pSOFNINys0KqarevzmwGlQMRzUO1tlI0kZVdAPPq-Bc8nz6FefLxH1pgSO7C2BbBRMyxCSj1RFg",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1044.3 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (656.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "RldoJ0uV4DOiAf55CYmOCuktwMv1",
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
    "etag": "W/\"177-239x4Xrn19BwSus8FO1LRSvtnvo\"",
    "date": "Sun, 15 Jun 2025 19:24:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "f0211df3-6a63-4c6e-acc8-3edf9542359f",
      "userId": "RldoJ0uV4DOiAf55CYmOCuktwMv1",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-15T19:24:24.948Z",
      "updatedAt": "2025-06-15T19:24:24.948Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 656.9 ms  

</details>


---

### Test: Memberships E2E Tests Remove Member Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.15s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/f0211df3-6a63-4c6e-acc8-3edf9542359f (653.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:25 GMT",
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

**⏱️ Duration:** 653.6 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/f0211df3-6a63-4c6e-acc8-3edf9542359f (493.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:26 GMT",
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

**⏱️ Duration:** 493.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.14s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1035.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1750015466201@example.com",
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
    "etag": "W/\"647-sM8Hl+vcIGv0eIMTG3i9LUUtAls\"",
    "date": "Sun, 15 Jun 2025 19:24:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "aXMvBKt3KdYjnlxahpsSvN7ohDu2",
        "email": "another-remove-user-1750015466201@example.com",
        "name": "Another User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ2NiwidXNlcl9pZCI6ImFYTXZCS3QzS2RZam5seGFocHNTdk43b2hEdTIiLCJzdWIiOiJhWE12Qkt0M0tkWWpubHhhaHBzU3ZON29oRHUyIiwiaWF0IjoxNzUwMDE1NDY2LCJleHAiOjE3NTAwMTkwNjYsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzUwMDE1NDY2MjAxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc1MDAxNTQ2NjIwMUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IEwvN9QgoiHAqzN1NX4WUZAlIUQ3PPWX1Pf2HNdP2YIrRUEpkqYtF1ZFtvMzLQ7RModTbdOT-9t-Sezi5MvNHwGLTO3o2QenKMRe5-1afd_Zg4kJc94ONV_AaVa3ReCeh83v-Y57QMulJW77m_4LI8Qtud1AZKoRhyXwF4hSX2oAx33GIj96qIJie4wEo4BltwHl8ObfIL81remJTC7rfxrtU81vshtCm9KAvtquKLwQ9xGv3xR05qrksekelEz6hOVZZGuRHNxWAenmkGJtSHydZ4O6m25HE9Lh46X1Qr2RWJQUHe12eLy4SvBwgNFZ22NCgUaUno0wzbH7M0Md7g",
        "refreshToken": "AMf-vBz6Ea5Lt5IknXFbykSL__E87zcBJP8UuNIh3dIbzD8cCnuauHYQWkxn5bpa_4aud0vrk-GFHzYiXUktQWZoQwfeM2WKAqnmkJxt5J1JUWeknjB0-5HmpJIq4Wio5DxwI-oW_-pfTLlt6pG8HK9adO8I5tJKZElUl5ofVwk0DHjzWHxQth-Q2qw0o0qG-uXmOvN3CvNhCcEM0yu95Fb-qA57PxCMAmkmP8oiMN3qX-uWlBu3AnvIoKZ9O1sqUD0FbXote2rM",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1035.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (619.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "aXMvBKt3KdYjnlxahpsSvN7ohDu2",
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
    "etag": "W/\"177-dTb9RmZtVKReBRIZDjPp+tgPPe4\"",
    "date": "Sun, 15 Jun 2025 19:24:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "46ec12b0-c504-45e8-820e-60fd8fbb1e4d",
      "userId": "aXMvBKt3KdYjnlxahpsSvN7ohDu2",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-15T19:24:27.787Z",
      "updatedAt": "2025-06-15T19:24:27.787Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 619.5 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/46ec12b0-c504-45e8-820e-60fd8fbb1e4d (481.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ0MywidXNlcl9pZCI6Ikl5Y1BWVWhwYzhZSGROd041WFZoaHFsYzNZMzMiLCJzdWIiOiJJeWNQVlVocGM4WUhkTndONVhWaGhxbGMzWTMzIiwiaWF0IjoxNzUwMDE1NDQzLCJleHAiOjE3NTAwMTkwNDMsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc1MDAxNTQ0MjQ2OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzUwMDE1NDQyNDY5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.CcNsEwG150-A0MoB2tLK5OwTisV3NzqLwJWz947_afe9Whlcym-4UAtagUs_JUjstS_ozHaCbHqYELnQ84dg2YbfGJjsuWa5KWlk_EU0SqfTiH9Cjm3QwFiMIikOWLoiHp2Wyc-dbPgbXW9I-JImQCW0FFEEuOS15G57gIXuQ4ZeP4I5l0WfFiursykvPGWkz84NQCcbLnd7zYVQWskORc0BjWMJcfUhQaEWtwBkVa1CEQBCnQHsCrl8Z9ayGqgOfQ0l6xLbNV-b8lznjkcNg4sUeIGnk8y0rBrNjXMVVpbZqJwIlYg0tJmMkvk_3OCMwYsOgUKnVUmcl76ZKmI-5w"
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
    "date": "Sun, 15 Jun 2025 19:24:28 GMT",
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

**⏱️ Duration:** 481.1 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (952.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1750015468342@example.com",
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
    "etag": "W/\"630-axlweV5FZySYol1HLvMK/L7prfc\"",
    "date": "Sun, 15 Jun 2025 19:24:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "vBaeCQANrfbzjY1kS5Y3YcPSPni2",
        "email": "self-leave-user-1750015468342@example.com",
        "name": "Self Leave User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ2OCwidXNlcl9pZCI6InZCYWVDUUFOcmZiempZMWtTNVkzWWNQU1BuaTIiLCJzdWIiOiJ2QmFlQ1FBTnJmYnpqWTFrUzVZM1ljUFNQbmkyIiwiaWF0IjoxNzUwMDE1NDY4LCJleHAiOjE3NTAwMTkwNjgsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NTAwMTU0NjgzNDJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NTAwMTU0NjgzNDJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JLcyUZP-Cw01Nb6jah0KwdaHGZ3iazF9Vxal8EXsvLTlVUh2mpMPsL59I7W43Gf5KMr30tNvVtMRSyaVvmu6pv39qmtHMTHtmvCdiSztvtmTEDA6yTmVtkOZAtf0Op5pY5I1kcEzrdC-Cdc8hGtxMO5wruhn2GbDF2_BGh0eAqyB8twbupAeZ5b0GlgpQMX21uui4Yy_vUhnO_vXHV8cT_7606Cwi-VL57iNXobSFDrRYuCup8uX2sWijRphjnr2qUnOH4ZxcMy5htex72lUqyQHtnXCI06zSN8aRhZqW8RvWzdOosFOGFIIPwAk_41BQCADHmKoe4N2A14sSHHYzg",
        "refreshToken": "AMf-vBzzGKUjzAR_SUw7gNSfKYlBYETcpnxZ9RHPSKcKwjS8VGf1umXgxqrsIpacKVBJC3-ayEdv5_9E0fjyPdNDChiLUE0JcCrdjwYI5GMz62OwdZoAeb5NurpbPkFbzfcN0Yo9E-L6pV7cbRrlYGAxt5yUHEK9I223OgHNzU-EKIYEeCIguVOP8i9PagDTcimHfWhUbjJYIzx-oJ-M9pYsQCNaViDv7USuyuoc86UXnR0lHRTQX9jXfBZNU995FXbOvup5xq24",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 952.7 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (358.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1750015468342@example.com",
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
    "etag": "W/\"614-d/HhyII8THShvghGEEVJLDnSqIo\"",
    "date": "Sun, 15 Jun 2025 19:24:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "vBaeCQANrfbzjY1kS5Y3YcPSPni2",
        "email": "self-leave-user-1750015468342@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ2OSwidXNlcl9pZCI6InZCYWVDUUFOcmZiempZMWtTNVkzWWNQU1BuaTIiLCJzdWIiOiJ2QmFlQ1FBTnJmYnpqWTFrUzVZM1ljUFNQbmkyIiwiaWF0IjoxNzUwMDE1NDY5LCJleHAiOjE3NTAwMTkwNjksImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NTAwMTU0NjgzNDJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NTAwMTU0NjgzNDJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.SseTgz-BgBe5yfxgpY8FTMf-pZDUNf_lHu7JZW6PkDx5ykny43WDMOHnLO3t-_QYefDGft796WlsqnTpPDYKNzsSEGIOzoojzU2f8EodSb1x6zg-di1ajhheSfdbeR2Li5YmetgW4OK8RD4TNShjrmo39QJNKJDRtui4BpGK0DgAxQbnAM2anfo26F_tbHNZR_jL8JUKE6wDp7irBODTcrIDRGC_yRxGYrdVJUqYBYdGl-7Y86wczAmlIAZP3r2LegtSXTg8dM7rdVSLLOGN3JY6nzhGbBbmCc984FEREurZ4BMQWFhzOSWaxRn4WNwiVlbpVjrcleExj-Vrs6HDYA",
        "refreshToken": "AMf-vBziuSakVC7QFEKfsAhaOIneWv7ngoUMBZjmsNd4DIrDEmEt3RroPqXpLT5EG2HWXKlUwgpr-IG3rT8jyfhxofqXLtjbtpMpMUkQKU0tu3-my5z977KpyrAR0uGsWJQOgv2TOr5c7x-0G4LmgoACgfSX21iTEnjeTkx0pp6SwQzsMgKF8SoYZCRKPg59tu1JIo8qQ_Rlc_HiHHfYOAMX9eGVwnFYJ-_fmomO8GspsK1AZSBQuuMRG7RXKOzGq4lZAUcVHG-2",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 358.0 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (636.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "vBaeCQANrfbzjY1kS5Y3YcPSPni2",
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
    "etag": "W/\"174-9bC0GV39SNnJMDaRAnknyualLwM\"",
    "date": "Sun, 15 Jun 2025 19:24:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "15c41221-3419-4087-b2fc-85dc61cbf277",
      "userId": "vBaeCQANrfbzjY1kS5Y3YcPSPni2",
      "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-15T19:24:30.195Z",
      "updatedAt": "2025-06-15T19:24:30.195Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 636.2 ms  

</details>


---

### Test: Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.19s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/15c41221-3419-4087-b2fc-85dc61cbf277 (590.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ2OSwidXNlcl9pZCI6InZCYWVDUUFOcmZiempZMWtTNVkzWWNQU1BuaTIiLCJzdWIiOiJ2QmFlQ1FBTnJmYnpqWTFrUzVZM1ljUFNQbmkyIiwiaWF0IjoxNzUwMDE1NDY5LCJleHAiOjE3NTAwMTkwNjksImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NTAwMTU0NjgzNDJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NTAwMTU0NjgzNDJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.SseTgz-BgBe5yfxgpY8FTMf-pZDUNf_lHu7JZW6PkDx5ykny43WDMOHnLO3t-_QYefDGft796WlsqnTpPDYKNzsSEGIOzoojzU2f8EodSb1x6zg-di1ajhheSfdbeR2Li5YmetgW4OK8RD4TNShjrmo39QJNKJDRtui4BpGK0DgAxQbnAM2anfo26F_tbHNZR_jL8JUKE6wDp7irBODTcrIDRGC_yRxGYrdVJUqYBYdGl-7Y86wczAmlIAZP3r2LegtSXTg8dM7rdVSLLOGN3JY6nzhGbBbmCc984FEREurZ4BMQWFhzOSWaxRn4WNwiVlbpVjrcleExj-Vrs6HDYA"
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
    "date": "Sun, 15 Jun 2025 19:24:30 GMT",
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

**⏱️ Duration:** 590.7 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/15c41221-3419-4087-b2fc-85dc61cbf277 (593.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:31 GMT",
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

**⏱️ Duration:** 593.0 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (979.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1750015471479@example.com",
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
    "etag": "W/\"630-L3Nnf7IZNBE6bQbGHO5byZDW/zI\"",
    "date": "Sun, 15 Jun 2025 19:24:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "oFpgKsUotBX4qI3PZDpRkP2kaq02",
        "email": "other-org-admin-1750015471479@example.com",
        "name": "Other Org Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ3MSwidXNlcl9pZCI6Im9GcGdLc1VvdEJYNHFJM1BaRHBSa1Aya2FxMDIiLCJzdWIiOiJvRnBnS3NVb3RCWDRxSTNQWkRwUmtQMmthcTAyIiwiaWF0IjoxNzUwMDE1NDcxLCJleHAiOjE3NTAwMTkwNzEsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.AxSxrC8HQjotDGO3ArwyVuqY5bwDN04CyPpucI37tmmJAdIDFD5U8ItJZa0Ub6-KPqmHRAyekUwlPbv0xvkSJkmNOCNZf_c39aROPbGMxtuaVPB5aMJZ-oUG6xV7yYghuXGKY1W7NVwCTH2_taqb1PDgxzLapnIruT9kVcRVKzgsHcXTHqEkQAI_GF-49TRFIY-9B1QARSZ7Pnh4pMdJmsgV1fQksV_OtDC69p-f2cxQb5d3Ew0LNbN_nhn90rGW6crjqgImjqy2njyowXld8aldbi_6arunlUo6LIw1hZ1sEKUy0lpchyzZQ70m2HG3qiDYrV8RLDiqtG7u9qt45g",
        "refreshToken": "AMf-vBzdEL9uz8D7-tAH5KDK3jVEApwjYWM7rD4mQYBjSCu4-KT03JOVZkyCYiZipG_FKIMwmhiildtViBzzmS0ncl1U-dDWtabtNceAtdPACzvt-etAHYLCJ902roBUeG1etyMqMU5iv9ZCIHuk1_PM68Qap5I1h7w2U2o1ylvm0nXpg_aHql2v9Im8qy6drz3LT3cI7bZbwZGZcwsM8AwGL7nRWXmuxSM24hJDqFQEK0JQJ7GrUTrGsydtFN3-D6BScgyWAW-9",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 979.1 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (265.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1750015471479@example.com",
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
    "etag": "W/\"614-ezLiFevwLyj3Tko3PvL0J+0KCL0\"",
    "date": "Sun, 15 Jun 2025 19:24:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "oFpgKsUotBX4qI3PZDpRkP2kaq02",
        "email": "other-org-admin-1750015471479@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ3MiwidXNlcl9pZCI6Im9GcGdLc1VvdEJYNHFJM1BaRHBSa1Aya2FxMDIiLCJzdWIiOiJvRnBnS3NVb3RCWDRxSTNQWkRwUmtQMmthcTAyIiwiaWF0IjoxNzUwMDE1NDcyLCJleHAiOjE3NTAwMTkwNzIsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.gL5hI1oe7MXLfEpOm3P4X3zjF7FnokWkDnA_4VK2Gn1cNkQ1sn9IiTkPNu3irDs-5n1mKfg0eCKm_0QnAZyD7LCPoBfI0NkRiTYTEoLQD4ooaKlQ_ZUmRku38Szl6_dwJaKbUE_nD_rr3YoUDBLtaZhNAyNO-P_bSSKVXAKADso3IUzzGlcR04h0CtYNO9PLq-QYnnkg9y1KFv0nZARg13AViLlud8J6ivDsa9csB2s6PR-DsG4Q_xmKXbZwctt2hocxsbVcUcLM3I-mXnDz0GnFKcSOawbcqQxb5T4GQoGQcBAOi3bHChQyIbnGy9UNdc3SIzCbjsxc2It6DbYdcA",
        "refreshToken": "AMf-vBwQ_hOcMOfbdRg03cT4eBma-qmxWFAaqQZ1BS8AZxrookWDY-l8eoUjcH3flbnfGwnLZZriaYj6u5q6IbBNhJB6sWoIJ5Yq_wkKEKH2BLZTZAHPQCb_RbOEo-dwgY-OvMNCF28t_Lq07TvHESdZEa4Lm27GVx9G9OZMWsVNimTc_zWni8NTf-zE9CnlRdKiMbFENqxfvGau3H7c4xNlsGajnNfqdmceYg7CoQUtqf-BwPBpSClZ8kessBH049px-heUSTcY",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 265.9 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (533.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ3MiwidXNlcl9pZCI6Im9GcGdLc1VvdEJYNHFJM1BaRHBSa1Aya2FxMDIiLCJzdWIiOiJvRnBnS3NVb3RCWDRxSTNQWkRwUmtQMmthcTAyIiwiaWF0IjoxNzUwMDE1NDcyLCJleHAiOjE3NTAwMTkwNzIsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.gL5hI1oe7MXLfEpOm3P4X3zjF7FnokWkDnA_4VK2Gn1cNkQ1sn9IiTkPNu3irDs-5n1mKfg0eCKm_0QnAZyD7LCPoBfI0NkRiTYTEoLQD4ooaKlQ_ZUmRku38Szl6_dwJaKbUE_nD_rr3YoUDBLtaZhNAyNO-P_bSSKVXAKADso3IUzzGlcR04h0CtYNO9PLq-QYnnkg9y1KFv0nZARg13AViLlud8J6ivDsa9csB2s6PR-DsG4Q_xmKXbZwctt2hocxsbVcUcLM3I-mXnDz0GnFKcSOawbcqQxb5T4GQoGQcBAOi3bHChQyIbnGy9UNdc3SIzCbjsxc2It6DbYdcA"
  },
  "data": {
    "name": "Other Org 1750015472724",
    "description": "Other organization for cross-access test",
    "email": "other-org-1750015472724@example.com",
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
    "etag": "W/\"229-C6NiqCYNMY5WUDrHZWkphLD3ofI\"",
    "date": "Sun, 15 Jun 2025 19:24:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "e2dce8be-d384-4973-9cbb-c662cbadf505",
      "name": "Other Org 1750015472724",
      "type": "shelter",
      "description": "Other organization for cross-access test",
      "logo": null,
      "address": "789 Other Org Boulevard",
      "phone": "+1122334455",
      "email": "other-org-1750015472724@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "oFpgKsUotBX4qI3PZDpRkP2kaq02",
      "createdAt": "2025-06-15T19:24:33.143Z",
      "updatedAt": "2025-06-15T19:24:33.143Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 533.5 ms  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=ed8ba154-26a8-4ff5-81bb-8f205ff1dbca (459.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ3MiwidXNlcl9pZCI6Im9GcGdLc1VvdEJYNHFJM1BaRHBSa1Aya2FxMDIiLCJzdWIiOiJvRnBnS3NVb3RCWDRxSTNQWkRwUmtQMmthcTAyIiwiaWF0IjoxNzUwMDE1NDcyLCJleHAiOjE3NTAwMTkwNzIsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.gL5hI1oe7MXLfEpOm3P4X3zjF7FnokWkDnA_4VK2Gn1cNkQ1sn9IiTkPNu3irDs-5n1mKfg0eCKm_0QnAZyD7LCPoBfI0NkRiTYTEoLQD4ooaKlQ_ZUmRku38Szl6_dwJaKbUE_nD_rr3YoUDBLtaZhNAyNO-P_bSSKVXAKADso3IUzzGlcR04h0CtYNO9PLq-QYnnkg9y1KFv0nZARg13AViLlud8J6ivDsa9csB2s6PR-DsG4Q_xmKXbZwctt2hocxsbVcUcLM3I-mXnDz0GnFKcSOawbcqQxb5T4GQoGQcBAOi3bHChQyIbnGy9UNdc3SIzCbjsxc2It6DbYdcA"
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
    "date": "Sun, 15 Jun 2025 19:24:33 GMT",
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

**⏱️ Duration:** 459.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (987.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1750015473725@example.com",
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
    "etag": "W/\"639-DtaHdVwb7zULmddJsn4PyUDB2pI\"",
    "date": "Sun, 15 Jun 2025 19:24:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "NOso19auXdZPZp4LqVVchiaOgyU2",
        "email": "cross-org-invite-1750015473725@example.com",
        "name": "Cross Org Invite User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ3NCwidXNlcl9pZCI6Ik5Pc28xOWF1WGRaUFpwNExxVlZjaGlhT2d5VTIiLCJzdWIiOiJOT3NvMTlhdVhkWlBacDRMcVZWY2hpYU9neVUyIiwiaWF0IjoxNzUwMDE1NDc0LCJleHAiOjE3NTAwMTkwNzQsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzUwMDE1NDczNzI1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc1MDAxNTQ3MzcyNUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DJQ8NUWdcZPOf6o4eUHe_pAbQF-a3u7zL6rhBhnsGAAf6xXdjJsGQkvFlbWwgd1r0MyXCmyfh7tZPrpEoLyBtOnwA6ELWoKSCOL7hU_f_HzWKSt5y29uy2nkNMvo95kKjNw1wgJ3nS7UbOxBlRqd8gVmk27ijPzfJ6LQ1oTCloawTiMQy9OfYU5natwYiIhUT7T79BN7QxRk7LEbDgN-qySTWBrYGSzZ-Ot8yqBA_MxOpAeF6TAHqNPjFYwN6MGLzg_1h9lWsXRy4WMcCISnVyvHjSLPEvCuPiS4RV3Yp6Py50s-dyfCUnZLBc6aGeXIcrEsC2V7oKfDfYidZPdyGw",
        "refreshToken": "AMf-vBzhSN76gW0a4rd3mjImvNw_8mq_iu22U43akEqd8siZaPIQH_CXMTkfLgcK6GqXtMtvrQyhE-mTfSUexgcBlLJLctlhAQCNes34E9o1SDUCwlcG3si5Eq40k3gBCSfNoYTOZKqcd7zKK4UczuqyjW90YHd3XL0fP8P_GK_HwB1yYtO-MLJIYbvLNCGnHVioGBiSkTabq_fm80_f5QZYZYOuOiFtauOCuiuIg8jSwueeprGee7LM3Yvlpp9rN_GGWeNZq2Hu",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 987.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (433.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc1MDAxNTQ3MiwidXNlcl9pZCI6Im9GcGdLc1VvdEJYNHFJM1BaRHBSa1Aya2FxMDIiLCJzdWIiOiJvRnBnS3NVb3RCWDRxSTNQWkRwUmtQMmthcTAyIiwiaWF0IjoxNzUwMDE1NDcyLCJleHAiOjE3NTAwMTkwNzIsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NTAwMTU0NzE0NzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.gL5hI1oe7MXLfEpOm3P4X3zjF7FnokWkDnA_4VK2Gn1cNkQ1sn9IiTkPNu3irDs-5n1mKfg0eCKm_0QnAZyD7LCPoBfI0NkRiTYTEoLQD4ooaKlQ_ZUmRku38Szl6_dwJaKbUE_nD_rr3YoUDBLtaZhNAyNO-P_bSSKVXAKADso3IUzzGlcR04h0CtYNO9PLq-QYnnkg9y1KFv0nZARg13AViLlud8J6ivDsa9csB2s6PR-DsG4Q_xmKXbZwctt2hocxsbVcUcLM3I-mXnDz0GnFKcSOawbcqQxb5T4GQoGQcBAOi3bHChQyIbnGy9UNdc3SIzCbjsxc2It6DbYdcA"
  },
  "data": {
    "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
    "userId": "NOso19auXdZPZp4LqVVchiaOgyU2",
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
    "date": "Sun, 15 Jun 2025 19:24:35 GMT",
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

**⏱️ Duration:** 433.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.15s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=ed8ba154-26a8-4ff5-81bb-8f205ff1dbca (585.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "content-length": "1831",
    "etag": "W/\"727-L1MjOL+w+HIKSNT+aaZUlfgn7zo\"",
    "date": "Sun, 15 Jun 2025 19:24:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "b69cf2ca-2ef4-45d9-b555-675bcdfebbe1",
        "userId": "2Ao2ntr28AOxABhpGtpQnxQbr5u2",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-15T19:24:10.383Z",
        "updatedAt": "2025-06-15T19:24:10.383Z"
      },
      {
        "id": "80f5f8a0-f23e-49c5-8a26-40812da99a94",
        "userId": "6c6D1Kk0OReJxuDZvyVhyDsqwI03",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-15T19:24:12.096Z",
        "updatedAt": "2025-06-15T19:24:12.096Z"
      },
      {
        "id": "fbd81871-d1a3-4e2a-abde-f9ecf8fe9255",
        "userId": "5ZSKtHwyTUh5Ey1zCIWn75GleNq1",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-15T19:24:13.746Z",
        "updatedAt": "2025-06-15T19:24:13.746Z"
      },
      {
        "id": "81c77da5-78f6-42a8-9139-1e03baaa97ec",
        "userId": "ee8SJc5JTxa8NybXsfV3YsQ6wn42",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-15T19:24:15.365Z",
        "updatedAt": "2025-06-15T19:24:15.365Z"
      },
      {
        "id": "ae3d687b-3863-49f4-9a21-c40c1bdbea98",
        "userId": "8YzJVZwaxLb3S3tnpIj2bnMnanm2",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-15T19:24:17.035Z",
        "updatedAt": "2025-06-15T19:24:17.035Z"
      },
      {
        "id": "1c1ad2f6-7384-412a-a763-d4ea3be8a761",
        "userId": "6NzsVuZqLhgmZqqyXptOwVg0SwK2",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-15T19:24:06.481Z",
        "updatedAt": "2025-06-15T19:24:22.308Z"
      },
      {
        "id": "46ec12b0-c504-45e8-820e-60fd8fbb1e4d",
        "userId": "aXMvBKt3KdYjnlxahpsSvN7ohDu2",
        "organizationId": "ed8ba154-26a8-4ff5-81bb-8f205ff1dbca",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-15T19:24:27.787Z",
        "updatedAt": "2025-06-15T19:24:27.787Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 585.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=e2dce8be-d384-4973-9cbb-c662cbadf505 (560.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:36 GMT",
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

**⏱️ Duration:** 560.0 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/e2dce8be-d384-4973-9cbb-c662cbadf505 (962.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:37 GMT",
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

**⏱️ Duration:** 962.8 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/1c1ad2f6-7384-412a-a763-d4ea3be8a761 (588.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:37 GMT",
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

**⏱️ Duration:** 588.2 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/b69cf2ca-2ef4-45d9-b555-675bcdfebbe1 (490.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:38 GMT",
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

**⏱️ Duration:** 490.6 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/80f5f8a0-f23e-49c5-8a26-40812da99a94 (617.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:38 GMT",
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

**⏱️ Duration:** 617.0 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/fbd81871-d1a3-4e2a-abde-f9ecf8fe9255 (512.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:39 GMT",
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

**⏱️ Duration:** 512.6 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/81c77da5-78f6-42a8-9139-1e03baaa97ec (627.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:40 GMT",
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

**⏱️ Duration:** 627.2 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/ae3d687b-3863-49f4-9a21-c40c1bdbea98 (542.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:40 GMT",
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

**⏱️ Duration:** 542.5 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/46ec12b0-c504-45e8-820e-60fd8fbb1e4d (624.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:41 GMT",
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

**⏱️ Duration:** 624.0 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/ed8ba154-26a8-4ff5-81bb-8f205ff1dbca (1057.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0NDIsImV4cCI6MTc1MDAxOTA0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QEP3LrLHZs_tE5Oan3iiessq9lImoeOaiK51BETy1FAjyyAGR1up4Sj_AWiOmxuOqFcGjyR0lGiTaCn5AGGnHeFXtn2HN3KjgOSnnYWe4gP2NX4x2TQPEmefOxInMAVODPqNuMIjFUr205NLNbuXFXHx3wHmjGL7OZcYFFgEXaelOZfUgFDU-BWogzw1lgDu8BAMc4lV1KH8XF0kJR472b1QYw4TGPGdlkNOxunnKwJpQ9r31Q_LsE5hfGVqpjkUSWg9VtStm9F6U1bvggoCzWsSkke79Af-U0VWBMk9vMyBbUsrMrhDqkGm6vs63M40EytlKSc8RcWr733hDXUA0Q"
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
    "date": "Sun, 15 Jun 2025 19:24:42 GMT",
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

**⏱️ Duration:** 1057.4 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (243.8ms)</summary>

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
    "etag": "W/\"6aa-WwYLwljXgmyZ/oghOzwZt8iKpfg\"",
    "date": "Sun, 15 Jun 2025 19:24:42 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDgyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODIsImV4cCI6MTc1MDAxOTA4MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ab__pDzmvPuYLOxiVaBhx0H2HQiWCxWEv-8M1kTGbpTajti9Mj1PtcYT9fmmom_4sJXdakSofiAm47DDalzEONdRQfLI70tRT9Z7mpUCCHDH1IvQxDbV7_H17iYuvstHmdDYk5sml3m5Uu_mUk8KyDv831JE5wzGCVQ4Ws0zjFXqdpeCsmNGTz0qeHiOBpcQxhZmyQMsZmN-tBTbK0kZYYomgFFypX7bE91NupfM8q3Ew-LKdvd3zYgK0lz5g-lPXpzFsYGWyrdyYjnCEE13q_xlpBGqYVD352pmk6srWG-l4clkhc447vNoA_SxSXe1kFM32MZ0hCl8s3uMnAz3kQ",
        "refreshToken": "AMf-vBwh-KHTE5eIlAJgiz5aILlhSPeLZ1qpimspf0zFYSvzbmIu_5oMKnwOGabmk94XTWTIEdg5VybBkFLZSfwibnu_nuVPh9MHnCmZ3E-tNWck7IN39D4xOFvSMgPXpdfiTXLL1bxGuqHzjFWYS-a9PNmx2gyj1WMZpw6FrJOYX_WFmfmgVvDv1pt9nAtvswZVtNybGv5j0jI5WO7taX5pb8w8_PVTkCvcVhfH2VP3FK3tkDM9T20GGCJXfxcfnCxsfNOHbJmF",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 243.8 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/IycPVUhpc8YHdNwN5XVhhqlc3Y33 (1138.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDgyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODIsImV4cCI6MTc1MDAxOTA4MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ab__pDzmvPuYLOxiVaBhx0H2HQiWCxWEv-8M1kTGbpTajti9Mj1PtcYT9fmmom_4sJXdakSofiAm47DDalzEONdRQfLI70tRT9Z7mpUCCHDH1IvQxDbV7_H17iYuvstHmdDYk5sml3m5Uu_mUk8KyDv831JE5wzGCVQ4Ws0zjFXqdpeCsmNGTz0qeHiOBpcQxhZmyQMsZmN-tBTbK0kZYYomgFFypX7bE91NupfM8q3Ew-LKdvd3zYgK0lz5g-lPXpzFsYGWyrdyYjnCEE13q_xlpBGqYVD352pmk6srWG-l4clkhc447vNoA_SxSXe1kFM32MZ0hCl8s3uMnAz3kQ"
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
    "date": "Sun, 15 Jun 2025 19:24:43 GMT",
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

**⏱️ Duration:** 1138.0 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (271.5ms)</summary>

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
    "etag": "W/\"6aa-J+0VnW/ny6YIY9LoWRSLeaeOFHE\"",
    "date": "Sun, 15 Jun 2025 19:24:43 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODMsImV4cCI6MTc1MDAxOTA4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eScimF32Ifs459J-qH80io2Qo1qavMVIdb1x6IoKdcJldJCo8C7mSRnHqyucySHUxasnTeWm7uqsW0iQ274DdA8Au-f317wnpbmtjnZRQqNUEuclK6l_XROOEIqYfwyWl2fYinkmIi8v4eI0qlS51gjcATvbsBw4FF4xi4h8UngwRaH0bUVGo6uWqRoCyJ08Rd06fsaQFnlBMgt40nJKMEl-Lr-9cfo5rkLidAOyHk-yzWd_sKKs9CmR8g559BoNyHHiswyHhpmWDOgoFeGYr8qKGFMi3SX-EUmWUbmk805qBjG7GThWNnhqhNwzGRZUt7qj7axU4tg3tAC85MxxLQ",
        "refreshToken": "AMf-vBxygjyLGN_U6Q9vsxWMcpHk17TE9aDFoLw2c8dYt8rP6bZMbhzJhveWBJYN_2qMHlKLI8_v6cMFywZPWx_PNx30b36NbKxordqa1pN9TWSItevr9BpP2rkx8n1DYvHMOhHC97H62hvmmDce2Y3SnSCVTZjD1578qkfb3H8BcG1N0RV2MTX3pDp7QZ1rcqvVjOXN5XDunHBO8UGE_52_OZIWMpRh4ko1_Ex9FrFjMX79W1ZjIPb8XxvuSmRFGM8xVGR6SPz5",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 271.5 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/6NzsVuZqLhgmZqqyXptOwVg0SwK2 (1283.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODMsImV4cCI6MTc1MDAxOTA4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eScimF32Ifs459J-qH80io2Qo1qavMVIdb1x6IoKdcJldJCo8C7mSRnHqyucySHUxasnTeWm7uqsW0iQ274DdA8Au-f317wnpbmtjnZRQqNUEuclK6l_XROOEIqYfwyWl2fYinkmIi8v4eI0qlS51gjcATvbsBw4FF4xi4h8UngwRaH0bUVGo6uWqRoCyJ08Rd06fsaQFnlBMgt40nJKMEl-Lr-9cfo5rkLidAOyHk-yzWd_sKKs9CmR8g559BoNyHHiswyHhpmWDOgoFeGYr8qKGFMi3SX-EUmWUbmk805qBjG7GThWNnhqhNwzGRZUt7qj7axU4tg3tAC85MxxLQ"
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
    "date": "Sun, 15 Jun 2025 19:24:45 GMT",
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

**⏱️ Duration:** 1283.0 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (358.1ms)</summary>

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
    "etag": "W/\"6aa-nxOgiq5QB2/8aLYBx+aV4odJZOg\"",
    "date": "Sun, 15 Jun 2025 19:24:45 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDg1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODUsImV4cCI6MTc1MDAxOTA4NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T5BnlrpQWPmC5kL1pOsP6cyvZ8dAziIFhhYRxyL_ytPGBUwGPgH12cHW538izzt6iFNVSO4ZSF-6LVikWOqeeIeemA1Igm7k5tws48yZX5O0Ls9QYo3yhx3rvQfUhkaf9OBHvfa_1_6JOFsAlf0YBS0WsyIIZUwn7Wx58TucEX3RLbWsMPmTSBEftcPVxiWMvJtAz2u9IN_O6goMJE3HClTqGjKBvCy5T_Aj0Ji1T9d_7S2wjGoGWSYbmS5wKDEV1OrmKzxi1xwxVqASXBc5Y3rQrEeKjrSPFtnsCwssLJd5nANyFak_yWNt8Y6A8wvqcejF3_vGjCgQGVXCjZFPyQ",
        "refreshToken": "AMf-vBy9gFPHP9Feq6ToYy358kUAFOLcQ3qPFcAghcKIW2x8KrxwbPVJzbilbki3mezK0VukbTk6RNKrFSwerqv3YHY52fgyLQrasc157BoUvpScJ_HgMiQCrAN2J-T20EtQixJdurH7aa8HkctfoYqPQOcVObnwfJReFGjg63TroWucMp9I8YNHAkyjggJrWsQgawYrFIdK_IsCjgaXaaNlnHbqJZilJBn3bTYeciaES64eQSVid0uTOM7_v9QIkgKRk9iqEimF",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 358.1 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/lTSSJyxCAObh6Ceybo1F9HhnHt32 (1272.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDg1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODUsImV4cCI6MTc1MDAxOTA4NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T5BnlrpQWPmC5kL1pOsP6cyvZ8dAziIFhhYRxyL_ytPGBUwGPgH12cHW538izzt6iFNVSO4ZSF-6LVikWOqeeIeemA1Igm7k5tws48yZX5O0Ls9QYo3yhx3rvQfUhkaf9OBHvfa_1_6JOFsAlf0YBS0WsyIIZUwn7Wx58TucEX3RLbWsMPmTSBEftcPVxiWMvJtAz2u9IN_O6goMJE3HClTqGjKBvCy5T_Aj0Ji1T9d_7S2wjGoGWSYbmS5wKDEV1OrmKzxi1xwxVqASXBc5Y3rQrEeKjrSPFtnsCwssLJd5nANyFak_yWNt8Y6A8wvqcejF3_vGjCgQGVXCjZFPyQ"
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
    "date": "Sun, 15 Jun 2025 19:24:46 GMT",
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

**⏱️ Duration:** 1272.6 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (366.9ms)</summary>

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
    "etag": "W/\"6aa-xb80dC6iFLgDSmr0T8pGCWH44jY\"",
    "date": "Sun, 15 Jun 2025 19:24:47 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODcsImV4cCI6MTc1MDAxOTA4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jNLvkz0xQouHlcY1BdbwJtsBXpCKLbB3-is-eJJKbF6KAoqLYoYxoVY1jIjFSqRv--yow121e2AL8aEKzYFkn7DXGwiZDvUTL2ZOQC0uJ_aVBr6-eu-e4UaRrOkiqSVvNyDKQcnujmlqE6Kem7YisNq7ckx5RGM6nsGi87_tDRo_MGuOQhy2XQjNsKgd2z66HIlKgchQJrKZQWZ9zy-a0PPZqZCp7I4M7imtaCY-Rc6KpcxSbxT4vPUfDFT7xltEEjy9YQfvykfb49vHgjUggPTwoT0Fp5BTa9Bcs-I0TgiPpW1xY0VRK_Tv26EZxQUyI90qDNCIZ0nxH1qKFSo_1A",
        "refreshToken": "AMf-vBxHAqrKFSUjzvoPZwnhxvHQMGuXS8Wxyh7Xhlp1PMnZ1UOB4Ybq9X_4Bz2o7E44YrVvTfG_03IdZxO48g5Vqu22OCUGjaz3d-3NVOK531ip8ooNmuQJmEek_NPs5mgMxaUkQrW3r-G9GmxmMyprtsXgF6PBDvcWnDEyr0Z5QsW5KYEjD1cjrvkwVg0qov2NGWStCEnz1bPpJ1CJqlrah6Dt8Itm_gj-Smefj976mJQzaDbMCTeVK1nWLkEtP5VcgQE9h4US",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 366.9 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/2Ao2ntr28AOxABhpGtpQnxQbr5u2 (1254.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODcsImV4cCI6MTc1MDAxOTA4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jNLvkz0xQouHlcY1BdbwJtsBXpCKLbB3-is-eJJKbF6KAoqLYoYxoVY1jIjFSqRv--yow121e2AL8aEKzYFkn7DXGwiZDvUTL2ZOQC0uJ_aVBr6-eu-e4UaRrOkiqSVvNyDKQcnujmlqE6Kem7YisNq7ckx5RGM6nsGi87_tDRo_MGuOQhy2XQjNsKgd2z66HIlKgchQJrKZQWZ9zy-a0PPZqZCp7I4M7imtaCY-Rc6KpcxSbxT4vPUfDFT7xltEEjy9YQfvykfb49vHgjUggPTwoT0Fp5BTa9Bcs-I0TgiPpW1xY0VRK_Tv26EZxQUyI90qDNCIZ0nxH1qKFSo_1A"
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
    "date": "Sun, 15 Jun 2025 19:24:48 GMT",
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

**⏱️ Duration:** 1254.5 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (264.5ms)</summary>

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
    "etag": "W/\"6aa-RnFC6Xddxb5Lj7+gzYZMXlyf+lk\"",
    "date": "Sun, 15 Jun 2025 19:24:48 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODgsImV4cCI6MTc1MDAxOTA4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cBimYFimpuQg4pBCt0OMPrO-YLCN4M0TytztYXWgGGCVeFxp9u6f-47OLs2nWeMYt9E2mS8mBKVirTHvGSX9Hj1RYGfUIxneJV2ZZI3tmMORxKHkVJgHJRONm5psYucNpib0yTQaki6SkN0e87A_TSwxy7qttKp8IQnXwQXiaV69DxpOemolmGVJL5o4jJDrKxMNSDiNyP8rhPjqXy7YKK0WY9czcQHJ117VnaukqsQLi4i2vmkJCVQREkVL8PeHSkvj0qxP6FMcGwwLkipkhy-Qh0cyHZez3X7O4qvPmYLO045kt8x2187QE9pVWAtbdj9nASgY4pnPuvvjrXs6OQ",
        "refreshToken": "AMf-vBzQ4y1cFUHvfPHE4XAJrhEraWAsxTBuJPKuOEHRZgWkdi8oIHlIkHjAghS-snp6hRYahmVjB9s1iRF4TpJKxJjyNME02HfxXegw9Kdb06tvzE5shqxdryPFjA2PzoonbevhSIeosWPtlS9h3Xq0vzpQ0z_sH3V-EW8Y_l-lbD-aPlA8OjJGitAu4NHa1DkR07To1Z_RbkpuFtFRt031nFGYTcn6i6d_5DF_cyDWv1sHZd9CoeeJ_myTQ-LCdD6N9Pr8qKG_",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 264.5 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/6c6D1Kk0OReJxuDZvyVhyDsqwI03 (1318.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0ODgsImV4cCI6MTc1MDAxOTA4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cBimYFimpuQg4pBCt0OMPrO-YLCN4M0TytztYXWgGGCVeFxp9u6f-47OLs2nWeMYt9E2mS8mBKVirTHvGSX9Hj1RYGfUIxneJV2ZZI3tmMORxKHkVJgHJRONm5psYucNpib0yTQaki6SkN0e87A_TSwxy7qttKp8IQnXwQXiaV69DxpOemolmGVJL5o4jJDrKxMNSDiNyP8rhPjqXy7YKK0WY9czcQHJ117VnaukqsQLi4i2vmkJCVQREkVL8PeHSkvj0qxP6FMcGwwLkipkhy-Qh0cyHZez3X7O4qvPmYLO045kt8x2187QE9pVWAtbdj9nASgY4pnPuvvjrXs6OQ"
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
    "date": "Sun, 15 Jun 2025 19:24:50 GMT",
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

**⏱️ Duration:** 1318.1 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (331.6ms)</summary>

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
    "etag": "W/\"6aa-ez9g32ewI0351leLDy7S4mOvDVQ\"",
    "date": "Sun, 15 Jun 2025 19:24:50 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTAsImV4cCI6MTc1MDAxOTA5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PUVXM0UvYLMeoE7gFSd2B0OielaJKxh2f2wIYp7iJi6jOeIXXm-L8pAcdeg1rPSP54gt4buULvaMBTRurxNcHRFsD2V2BW9Ih6lk1xkvxCZX9QJsr3F9BxmEK2dZWKN5wdqE9mI4VpSAY7vH3_EnSZO_jFVE81iu44fdbLsk4rn0Z_ew0NgMPZ0fNAD0suhBlu4jIy1lVz6LHJ3LvrcWI0g7iojrh7p6mk4Jpy8ROSX-9af_JP6bMh7HeloEUZKhZv3lwP6CiRhI09N3KH-ibAgHSe207YJRSwoSiP-Ca5OUoh0heA7NkjDiwNL12aysNGud58MrilQYb01djaIOmw",
        "refreshToken": "AMf-vBzyz5-tKaHaU_trCfkeq3omibnpsMfbxYp6l-qoOdAxW0eTiedMky9ose-qC69DZT-npW7kHZZYWNgyXaocp6R3MuyR1skWg775DpB_DNYaBrEM4RGrcvaN8JnvClyRHOJSOb-noGd9n1Ez0KgpnRzpHTHleWTBAsiAHc6FbFWbwayb2kn1KtC8mYX7zrm_fGRJjzx2yxwFpJgifBkwIvNVoi84WweBEO9Vi4AbIGvIKjYnBFq8joS8mIogPeexM8htpXlD",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 331.6 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/5ZSKtHwyTUh5Ey1zCIWn75GleNq1 (1275.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTAsImV4cCI6MTc1MDAxOTA5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PUVXM0UvYLMeoE7gFSd2B0OielaJKxh2f2wIYp7iJi6jOeIXXm-L8pAcdeg1rPSP54gt4buULvaMBTRurxNcHRFsD2V2BW9Ih6lk1xkvxCZX9QJsr3F9BxmEK2dZWKN5wdqE9mI4VpSAY7vH3_EnSZO_jFVE81iu44fdbLsk4rn0Z_ew0NgMPZ0fNAD0suhBlu4jIy1lVz6LHJ3LvrcWI0g7iojrh7p6mk4Jpy8ROSX-9af_JP6bMh7HeloEUZKhZv3lwP6CiRhI09N3KH-ibAgHSe207YJRSwoSiP-Ca5OUoh0heA7NkjDiwNL12aysNGud58MrilQYb01djaIOmw"
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
    "date": "Sun, 15 Jun 2025 19:24:51 GMT",
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

**⏱️ Duration:** 1275.3 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (257.4ms)</summary>

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
    "etag": "W/\"6aa-kPpR05IdW7y56YAoYJzXYMq1ink\"",
    "date": "Sun, 15 Jun 2025 19:24:51 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTEsImV4cCI6MTc1MDAxOTA5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Prcvs76_-Bzywo_IfqIOeHwXKbW9c90h5v7OhtasRu40-34FmM6mFh_BIukoANBEZeZOaPY5CBdEIBAJ_MgS68_HbxuL2VrGFXMywI4jR6EV_fhBOUkW-CXGldPoExKCNkhryy-4V2C1889_FH7mC3f0zUoJOrmyK98nrFqEcWZ8MKmbwyjF0IqXYKp3taQPaqvNhQCfOnOiMJW0nwY2HsvRDBljMEmfR9wShEd_2tonAe8PUUgHhDeYXkm2RoeFX6Idoa22x-KwINdKoalPeJc7FbbzJ0P-Srsp21z7ZokOQAavTFYq3jmzkzUKpRRehnTxC8OVOVV_ZdiHS3W4LQ",
        "refreshToken": "AMf-vBwX3vbfsl7mVrUX0qxXomtVU3_iMxpihv26jWMEQz4CSPfDMhRIbZp48wbUEG8D4xWXrJHbBAigR7cCc4z2macrQI-rrVLYnUC3WHJk9Akzphwrav-lRyuFROCIyJ0lVM_zqJHtR_57oEwao0bqdjJUUdG8poSJ0bJLpUee3GHu4qRkZuUEaBkY-PNB6BoQC3XLiTgYXRoj-VnAEeoOW4nJl7a_Wp6M3JjEK4vPqcYpdfknTBbyznAhvI5AqV46SxHmF0Qb",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 257.4 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/ee8SJc5JTxa8NybXsfV3YsQ6wn42 (1284.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTEsImV4cCI6MTc1MDAxOTA5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Prcvs76_-Bzywo_IfqIOeHwXKbW9c90h5v7OhtasRu40-34FmM6mFh_BIukoANBEZeZOaPY5CBdEIBAJ_MgS68_HbxuL2VrGFXMywI4jR6EV_fhBOUkW-CXGldPoExKCNkhryy-4V2C1889_FH7mC3f0zUoJOrmyK98nrFqEcWZ8MKmbwyjF0IqXYKp3taQPaqvNhQCfOnOiMJW0nwY2HsvRDBljMEmfR9wShEd_2tonAe8PUUgHhDeYXkm2RoeFX6Idoa22x-KwINdKoalPeJc7FbbzJ0P-Srsp21z7ZokOQAavTFYq3jmzkzUKpRRehnTxC8OVOVV_ZdiHS3W4LQ"
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
    "date": "Sun, 15 Jun 2025 19:24:53 GMT",
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

**⏱️ Duration:** 1284.0 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (395.6ms)</summary>

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
    "etag": "W/\"6aa-S22U2WnLXECoGNsgJZ83AcauXYw\"",
    "date": "Sun, 15 Jun 2025 19:24:53 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDkzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTMsImV4cCI6MTc1MDAxOTA5MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cPpql_5AnE6-NUr8baQRWBUq8DIA3ZSPwsh4q94-SStJFMH_92iNfavFNCbtKa31LKEKtP6TQlZREdazkhA6OQFHvpFdCT8fH5DwTXBkVvOyYXgMETj-un6kQKPg7eiSjtKkPk1QtMUaIam1It9_gkxdmAaAdmHNX9ADi-s3p74UDWA4F1G9Ji6Ern4SCvgaot_gaiV_dnC9c1pB0Rv-HCwAk0hq3q9q4RkzT5h1Ww3Ra2XggaKow5JkmYZPcQuK-DOSYy15u_i7FKdLIop9Z3VrnlSCNW-DY8_bySzVkgPlvxjOaJMKdrHAS5OuWn1CdXlv7s2aPwBrVK1R1yREWw",
        "refreshToken": "AMf-vBzdEpu5QV6ngLMs7ugqQBS9cQwgFHXqbCd6tYAwwOpsSUowIDn5ZKiv9CH3SXcVL2wFCMu0N940OBM57ZdjVDpaPn8dMgYpwDyTle2K-TEKRS9go00iD9fhu1v9HHGIJhBTKNHGNABmkyAjjqknEu8YynGE-6ZzGlTDvhMX44Gc-uJDqpPJ0G-_db8S7dYF976Hahd0Sc-yGLYGjLYJb_FJu9aZLtjkyji1hm669lUrlQjg67uKaY6K_Lac9MSD1TUAvubl",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 395.6 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/8YzJVZwaxLb3S3tnpIj2bnMnanm2 (1292.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDkzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTMsImV4cCI6MTc1MDAxOTA5MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cPpql_5AnE6-NUr8baQRWBUq8DIA3ZSPwsh4q94-SStJFMH_92iNfavFNCbtKa31LKEKtP6TQlZREdazkhA6OQFHvpFdCT8fH5DwTXBkVvOyYXgMETj-un6kQKPg7eiSjtKkPk1QtMUaIam1It9_gkxdmAaAdmHNX9ADi-s3p74UDWA4F1G9Ji6Ern4SCvgaot_gaiV_dnC9c1pB0Rv-HCwAk0hq3q9q4RkzT5h1Ww3Ra2XggaKow5JkmYZPcQuK-DOSYy15u_i7FKdLIop9Z3VrnlSCNW-DY8_bySzVkgPlvxjOaJMKdrHAS5OuWn1CdXlv7s2aPwBrVK1R1yREWw"
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
    "date": "Sun, 15 Jun 2025 19:24:54 GMT",
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

**⏱️ Duration:** 1292.7 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (280.9ms)</summary>

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
    "etag": "W/\"6aa-daujb+vwUhUzIypt1ZE8i9/GYqY\"",
    "date": "Sun, 15 Jun 2025 19:24:55 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTUsImV4cCI6MTc1MDAxOTA5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lLDyZi7UeSCHHYF5daW0U7oclqk4KueRfe0EoNowOwAnHVyUzL7Ucqk7b_7t9ug9ONFC3cl0wmx87lV78VMHy5tRWV0KD-aH7UTyn0bDMhMbVFXG_irjbDWHtGK2jak51rrnTi-9l4zKVx_6K1kBLL1mApd2JQGDUf8Z3JeB-iymCm-AbmE9r5QZUIB1oV2ZLS92c5rBDDWlGcAoLVUwwwttHBF2k5BSMEPXPnFL-boFo2jRF3dNLiRgQkwbZiyXc05dpwBgGsQBDqTt9cUrEi9Mr-rbwTuSKHE9Z6DULRP-22NeJuWp0ufrySYH0ACJZqamvE_FhTCS2whr2peTAw",
        "refreshToken": "AMf-vBz44E4rbhFqa827IOGcclRDWze83_4aDBHeSmb3erfusNV4Cn3SazG9l1jqIQbrD1GxFjE1gjUa0kB-iq0Xx882NqVEfnoVNZF7JsyYB61ayFyDYqKkaPjhA5w4c5zazwR0Z-GBySxJynC65uHy1DbJSL_HZzcUE96t58D8_YESXXAU-KsMhqbMuwEz1ZHEcqiRlJ5PRsQK_4pULZZXf3HH4GiloCfLv3J0oQko1yTzAhy8Mcz_CdDxw9ThkBUd8jjEEKrw",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 280.9 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/RldoJ0uV4DOiAf55CYmOCuktwMv1 (1277.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTUsImV4cCI6MTc1MDAxOTA5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lLDyZi7UeSCHHYF5daW0U7oclqk4KueRfe0EoNowOwAnHVyUzL7Ucqk7b_7t9ug9ONFC3cl0wmx87lV78VMHy5tRWV0KD-aH7UTyn0bDMhMbVFXG_irjbDWHtGK2jak51rrnTi-9l4zKVx_6K1kBLL1mApd2JQGDUf8Z3JeB-iymCm-AbmE9r5QZUIB1oV2ZLS92c5rBDDWlGcAoLVUwwwttHBF2k5BSMEPXPnFL-boFo2jRF3dNLiRgQkwbZiyXc05dpwBgGsQBDqTt9cUrEi9Mr-rbwTuSKHE9Z6DULRP-22NeJuWp0ufrySYH0ACJZqamvE_FhTCS2whr2peTAw"
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
    "date": "Sun, 15 Jun 2025 19:24:56 GMT",
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

**⏱️ Duration:** 1277.6 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (340.7ms)</summary>

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
    "etag": "W/\"6aa-Vn1vYYgZIVb9RcosPOx6IJnZv8g\"",
    "date": "Sun, 15 Jun 2025 19:24:56 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTYsImV4cCI6MTc1MDAxOTA5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kxDpz7jI9o344CRVrVLx-S2yltF77j9Ygw30AUmWvXdB-GMchXj7wWb7zk4e1aYTJf45jwTbDgfpyxnek1HRErCTCEu2W0F8XnOoowBsXMDde-5s-z2yELycxq3ZcCbuzkoqOHjYsn2TCqretIokroQaQoGyn80_oKNzy7iw80rGflNIQlFsmg1ES05KBtVMTx851SIg4QWxMh1fx6JtvzzLxCryyjnY2XDQ5pFzdN8yQv3C0deStTykfitSrAKs3dtXTahIDJuP1txqwGQ3XrNO2h4dZ74Fecvf4NqoxgIU87sET8ahvW_rGuWdBzEoWNtHUUdJ1H-s4zQDAGUykA",
        "refreshToken": "AMf-vBxeDGsW04k6FZioUGeFvJMKFPqPqHrg6HOrZ-2COl4OLFAsie1N8QRzB0YFFN26VllAAPPpS5iDWKoELHaZmgBEEhy8_vfRQ9xK3Eo10VswuA-8favsVLwu9OAGa9tkWeO7bhJJ9_uuk-LkgCFz6QfUx-dtKQ-lX-9Jfw6DYQBCCKCMovOH9aaceCrEzBkpdrkGRRk14RPJXG-_GFVbKLFyXy5rA8mna0V34oOIboz5MM8_1MFKgQOQYrtjn3LzOE867dIu",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 340.7 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/aXMvBKt3KdYjnlxahpsSvN7ohDu2 (1316.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTYsImV4cCI6MTc1MDAxOTA5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kxDpz7jI9o344CRVrVLx-S2yltF77j9Ygw30AUmWvXdB-GMchXj7wWb7zk4e1aYTJf45jwTbDgfpyxnek1HRErCTCEu2W0F8XnOoowBsXMDde-5s-z2yELycxq3ZcCbuzkoqOHjYsn2TCqretIokroQaQoGyn80_oKNzy7iw80rGflNIQlFsmg1ES05KBtVMTx851SIg4QWxMh1fx6JtvzzLxCryyjnY2XDQ5pFzdN8yQv3C0deStTykfitSrAKs3dtXTahIDJuP1txqwGQ3XrNO2h4dZ74Fecvf4NqoxgIU87sET8ahvW_rGuWdBzEoWNtHUUdJ1H-s4zQDAGUykA"
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
    "date": "Sun, 15 Jun 2025 19:24:58 GMT",
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

**⏱️ Duration:** 1316.7 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (252.3ms)</summary>

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
    "etag": "W/\"6aa-qwSOiTNj/lsVLsDXrS1bOI8xv8Y\"",
    "date": "Sun, 15 Jun 2025 19:24:58 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTgsImV4cCI6MTc1MDAxOTA5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i56m-H1lGQmWVrbdDP0idKNCvMaa1uKpJuqGifVS_bEMPl5_JceIoJaRH0Wm7m3018Ztj6zd0Ji1bK_hZ23Zorg8io1KbWuLMSsR2nywkZ-2oJjbVPP09nIiaFDIn2mj-O_oVc9x5RBQXnzeUi4yVZA96IEVXybbFIj-yzOkUEgjFT8D73FElHs6d_ikZF_zT8JU-FA1fEUk-VmhuoX_Bny73odqIzK3wI2au9hlXfagB1ez4qDLKlRlO58G9UGRuWPTIxRt9kJNQmMZCB7W2mXg78Now7WJoDRtbEqDeeZqFAhSRisHfK-OhHpjvDOeu2u27j1FxhexBB3DUr5kWw",
        "refreshToken": "AMf-vBzQRLalrLNEIdGpwXGVyqOBSmy58V2hdrIFFwmDAxoHMIH3FXXFDTYnrbL4H_AIZUJNtzeGoE29mEt0S03My-ORnJls6HRskndY8v4C8XiMBfjzttkmAZsPpekeksgFEU4BpBGnWGTnvG7yNlVZh1OGilzG8chyb75yeXCijO8iSmBKDi5lavBgcz7EJKp9ePJZkiOdV3BfdEGwCtvymFoYnn7Zw6K2M2VAs79SkQWPNVGt2RJ7RoEzuPmu9RUiAg1bpAAu",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 252.3 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/vBaeCQANrfbzjY1kS5Y3YcPSPni2 (1295.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTgsImV4cCI6MTc1MDAxOTA5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i56m-H1lGQmWVrbdDP0idKNCvMaa1uKpJuqGifVS_bEMPl5_JceIoJaRH0Wm7m3018Ztj6zd0Ji1bK_hZ23Zorg8io1KbWuLMSsR2nywkZ-2oJjbVPP09nIiaFDIn2mj-O_oVc9x5RBQXnzeUi4yVZA96IEVXybbFIj-yzOkUEgjFT8D73FElHs6d_ikZF_zT8JU-FA1fEUk-VmhuoX_Bny73odqIzK3wI2au9hlXfagB1ez4qDLKlRlO58G9UGRuWPTIxRt9kJNQmMZCB7W2mXg78Now7WJoDRtbEqDeeZqFAhSRisHfK-OhHpjvDOeu2u27j1FxhexBB3DUr5kWw"
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
    "date": "Sun, 15 Jun 2025 19:24:59 GMT",
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

**⏱️ Duration:** 1295.8 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (252.0ms)</summary>

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
    "etag": "W/\"6aa-WWxKcC7xOWE/OF1ZmoWad/5LldA\"",
    "date": "Sun, 15 Jun 2025 19:24:59 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTksImV4cCI6MTc1MDAxOTA5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eMXUUD8KunR4aGiSu1-eZHs_ZSDZfB6wPsEIJYmoAHtYTko0gdEw63sev2uSDd63S5wezMf9hX-8jzQphVdTvNRtEkoeWYAis6irj4GTtfsht8g0PSTHMtZp8931vTPgvSjUj4ZGgFrNYtQ7q0TFMBnf8PngVPQRv4Yo7o2GcJ2fzlLTOd1AKFuCCSaDARxe0nisz7Ef34daM-aJWSvt2NoS2uK-StotbYVJhLWi3KeU3lU7VQgS3Kjm0KT-OB7FOuQk79m1k2AtTFxaMnyiMFruvLay0GrOLPlnYJL4EOoslvmqEys4jdMWhchWLYgXfKkmZJhcBNC19wyyWmLL4A",
        "refreshToken": "AMf-vBx1Jr3cXliMqKJz8efCDaWP3xTsEWQZm9dU4qP_OkrTPCzpXkM9Fx-O17HsnoxxPm2l-88XSPBjawgddtFKscDL_JuzHpcuVPFO6dY34-35sQxckfAwKCUmWiXcAyTaUxY6vWoL5wDE6bwobnNVeMUsjj_PeLHWHcQiVIduPkBxxHNxEwFQdrXbDecGB2EOhti23i3XY0QtADuw3pLbbHY93HpXV90d1_OSKW7Z6GvCeqUdSGnHM5GAN8bCicoEJbq5CfT6",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 252.0 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/oFpgKsUotBX4qI3PZDpRkP2kaq02 (1273.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NDk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU0OTksImV4cCI6MTc1MDAxOTA5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eMXUUD8KunR4aGiSu1-eZHs_ZSDZfB6wPsEIJYmoAHtYTko0gdEw63sev2uSDd63S5wezMf9hX-8jzQphVdTvNRtEkoeWYAis6irj4GTtfsht8g0PSTHMtZp8931vTPgvSjUj4ZGgFrNYtQ7q0TFMBnf8PngVPQRv4Yo7o2GcJ2fzlLTOd1AKFuCCSaDARxe0nisz7Ef34daM-aJWSvt2NoS2uK-StotbYVJhLWi3KeU3lU7VQgS3Kjm0KT-OB7FOuQk79m1k2AtTFxaMnyiMFruvLay0GrOLPlnYJL4EOoslvmqEys4jdMWhchWLYgXfKkmZJhcBNC19wyyWmLL4A"
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
    "date": "Sun, 15 Jun 2025 19:25:01 GMT",
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

**⏱️ Duration:** 1273.6 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (258.9ms)</summary>

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
    "etag": "W/\"6aa-N3Wso4QJO+8L7j5GJr9/AtJGLUM\"",
    "date": "Sun, 15 Jun 2025 19:25:01 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NTAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU1MDEsImV4cCI6MTc1MDAxOTEwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpJu7JzAFyYFkIMgGVbvwpaiAecCsxHJSyMoiAUvrz6WWbRBNWq8MadULe4HIK2rwgTQsD2T6hhDQweyltJfEmRIGG3OkVSIKeJ1GlRdmDRX4bXbozzBOVJ1e29eCnnu5B5_s94ThbomKHhBzerv7ltqMlAsdCOU5rmzIUoUlAX-FEUNUX6NSMexDHN7Hf08J5jnkpAKSJi7LjOgQPNES3EaBlr_1jVRMxGTe-H0gu_8JZZXMNWUjCzENd2PyFl_425bzZ3pmKCOzRotWXkDmquI7oBMaulXDg_lde3zamsA59NQy26M9ybmyhytgKNQwIIr0HyuQTwxARTzrIs0Og",
        "refreshToken": "AMf-vBwqoesR3qCB0Ni_eAcN3lehYSkHhcr2LYhLrqkDSuA7oVGvdaq-AsEenTSb_5krsrZG4-7vrKG1QwdTtH2OWkpakwMMbMHajQIJw5eAmUjXX7aU2HJghFigYTZrztRJRTlrc7wxqxnnW-FXm2ZGH-vNST4HW5zD4piblo8MYAdb0DgoKRDAn2GnK2F4UC3-DfkWTMOwW2QIt88DKIUzm5d0wxekmbKev-a9gUXivLdAKot1yUZ7o5Bp_6oPrTXQCjnb_vJQ",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 258.9 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/NOso19auXdZPZp4LqVVchiaOgyU2 (1278.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzUwMDE1NTAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NTAwMTU1MDEsImV4cCI6MTc1MDAxOTEwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HpJu7JzAFyYFkIMgGVbvwpaiAecCsxHJSyMoiAUvrz6WWbRBNWq8MadULe4HIK2rwgTQsD2T6hhDQweyltJfEmRIGG3OkVSIKeJ1GlRdmDRX4bXbozzBOVJ1e29eCnnu5B5_s94ThbomKHhBzerv7ltqMlAsdCOU5rmzIUoUlAX-FEUNUX6NSMexDHN7Hf08J5jnkpAKSJi7LjOgQPNES3EaBlr_1jVRMxGTe-H0gu_8JZZXMNWUjCzENd2PyFl_425bzZ3pmKCOzRotWXkDmquI7oBMaulXDg_lde3zamsA59NQy26M9ybmyhytgKNQwIIr0HyuQTwxARTzrIs0Og"
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
    "date": "Sun, 15 Jun 2025 19:25:02 GMT",
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

**⏱️ Duration:** 1278.4 ms  

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
- Test organization: Test Org for Memberships 1750015443853
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
