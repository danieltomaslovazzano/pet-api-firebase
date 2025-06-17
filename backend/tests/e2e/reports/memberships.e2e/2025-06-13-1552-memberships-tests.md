# E2E Test Report: memberships-tests

**Date:** 6/13/2025  
**Time:** 3:52:30 PM  
**Duration:** 62.74s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully | PASSED | 0.62s | Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully |
| ✅ Memberships E2E Tests Invite User to Organization Should fail to invite same user twice | PASSED | 0.66s | Memberships E2E Tests Invite User to Organization Should fail to invite same user twice |
| ✅ Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions | PASSED | 1.43s | Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions |
| ✅ Memberships E2E Tests Invite User to Organization Should invite user with different roles | PASSED | 8.47s | Memberships E2E Tests Invite User to Organization Should invite user with different roles |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by organization | PASSED | 0.65s | Memberships E2E Tests Get Memberships Admin should get memberships by organization |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by user | PASSED | 1.11s | Memberships E2E Tests Get Memberships Admin should get memberships by user |
| ✅ Memberships E2E Tests Get Memberships User should get their own memberships | PASSED | 0.46s | Memberships E2E Tests Get Memberships User should get their own memberships |
| ✅ Memberships E2E Tests Get Memberships Should fail without userId or organizationId | PASSED | 0.69s | Memberships E2E Tests Get Memberships Should fail without userId or organizationId |
| ✅ Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships | PASSED | 0.46s | Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships |
| ✅ Memberships E2E Tests Get Membership by ID Admin should get membership by ID | PASSED | 0.63s | Memberships E2E Tests Get Membership by ID Admin should get membership by ID |
| ✅ Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID | PASSED | 0.57s | Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID |
| ✅ Memberships E2E Tests Update Member Role Admin should update member role successfully | PASSED | 0.67s | Memberships E2E Tests Update Member Role Admin should update member role successfully |
| ✅ Memberships E2E Tests Update Member Role Should fail with invalid role | PASSED | 0.36s | Memberships E2E Tests Update Member Role Should fail with invalid role |
| ✅ Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions | PASSED | 0.47s | Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions |
| ✅ Memberships E2E Tests Remove Member Admin should remove member successfully | PASSED | 1.02s | Memberships E2E Tests Remove Member Admin should remove member successfully |
| ✅ Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions | PASSED | 2.25s | Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions |
| ✅ Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) | PASSED | 1.18s | Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations | PASSED | 0.41s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations | PASSED | 1.70s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations | PASSED | 1.21s | Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (619.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "K0xp0nlqZtUl5wHY8vdOgPb7UQY2",
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
    "etag": "W/\"174-aLiTVPfzKDnuMusEBDbMMp1nuhw\"",
    "date": "Fri, 13 Jun 2025 13:51:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "b7a87ca8-c26e-4a77-befa-c5656fd7e0fc",
      "userId": "K0xp0nlqZtUl5wHY8vdOgPb7UQY2",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T13:51:32.597Z",
      "updatedAt": "2025-06-13T13:51:32.597Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 619.3 ms  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (656.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "K0xp0nlqZtUl5wHY8vdOgPb7UQY2",
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
    "date": "Fri, 13 Jun 2025 13:51:33 GMT",
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

**⏱️ Duration:** 656.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1036.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1749822693334@example.com",
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
    "etag": "W/\"631-8KEslGgevLaLHjwCcwLEQIAMObs\"",
    "date": "Fri, 13 Jun 2025 13:51:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "50r9TdFXeke8LzuyxcU6w8bJpmB3",
        "email": "no-perm-invite-1749822693334@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5MywidXNlcl9pZCI6IjUwcjlUZEZYZWtlOEx6dXl4Y1U2dzhiSnBtQjMiLCJzdWIiOiI1MHI5VGRGWGVrZThMenV5eGNVNnc4YkpwbUIzIiwiaWF0IjoxNzQ5ODIyNjkzLCJleHAiOjE3NDk4MjYyOTMsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0OTgyMjY5MzMzNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ5ODIyNjkzMzM0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Oyw5D5fTNBhCZhgNdYr_uDbKSyMzKT7z4UJzTRm0z6jMAvWjpQbxH4vNdR516QuBEP43NKbnTIv0rDZa-kkAhRUbdigCH0kmnyQ5goPXCd8trLVdEmRcm1xV0pog_4zkB0MmMW_84jcEUrC-S_YUdsBBJve395k6M0-MxvKYk6-nlSEA1R4nNNoF9vyP9QWYXxChg_TdFgFeiTxIyOBeuj1cuEGf6Wnrmb5rri6_t7cY1bOp5KwzFOoZA9rolynH2IAL3B8y4SKZ9M2fxW_XZY9rAxDaArdOQwQinbBrs3Q3KjUzAwJrdmTCBT_XW66Ngl4wkgHxYFe8jg6Wg3d90A",
        "refreshToken": "AMf-vBysG04avrjSaW0hnYIrZV6Xydarw_oAEK7waTqsN4lt21pQAWp-O_tyk6JqtKxWoQScx9uL21EkCBh4f7E2PmqVTX_aEi7p24DIZm4xJRHUdNZsrtTRC69nMrX-rNvxsJX1gJ_4zxBAlCVZw2m2byreXru3J2DlD_oZozoZneDMAXZ5e5tWaVOlqGhPpf0QG0dNXD71E8USEEVzCqDIQcRbyrnCtWsSqjJX1iPcJ5BDuK0U6i8TZmlRStqQy1AI8H-staT0",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1036.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (389.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5MCwidXNlcl9pZCI6IlladDJBdGVQSEpVanVveGdkRTFjM3B6dXNRdTEiLCJzdWIiOiJZWnQyQXRlUEhKVWp1b3hnZEUxYzNwenVzUXUxIiwiaWF0IjoxNzQ5ODIyNjkwLCJleHAiOjE3NDk4MjYyOTAsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMjY4ODM4NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIyNjg4Mzg0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.KUafx0BavXEqCfzPeq9f2uNowyHnKil4iwNSmD0ZopD9da11dCQZ6CNT_UKK9-Vdm1FAYZPQ4LVpI2wc5T_JC6hEfd2TKx9ejEdn2EhBiF4oUit8pc_meU16vSmokyM6udjqL8_7npEo_TgstKnCfWdMD7eGX7LmGYLQvKSvvJKNxmqx9SRNhw1EbBJf_MKhj4A0uCXXvPXf_adZScq2JrHdxuA4dw-dbOIN97J-Sa0B0PveZUwYjj3rBhRc9T9Juztxp-0aVoVQJM9MNFCF9oBm36frsnKeJYqX5VtPh6-OdKF-_5OoSVRoxsbN9yrqwv9Aj_UYwA7u6WrU7Ry5oA"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "50r9TdFXeke8LzuyxcU6w8bJpmB3",
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
    "date": "Fri, 13 Jun 2025 13:51:34 GMT",
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

**⏱️ Duration:** 389.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 8.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1161.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1749822694765@example.com",
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
    "etag": "W/\"603-WcFRI8DC76PKSRdJ1UjeSU5geCM\"",
    "date": "Fri, 13 Jun 2025 13:51:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "KPWHn6b2LnhIr4PJ7pSwpX7lvq03",
        "email": "admin-user-1749822694765@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5NSwidXNlcl9pZCI6IktQV0huNmIyTG5oSXI0UEo3cFN3cFg3bHZxMDMiLCJzdWIiOiJLUFdIbjZiMkxuaElyNFBKN3BTd3BYN2x2cTAzIiwiaWF0IjoxNzQ5ODIyNjk1LCJleHAiOjE3NDk4MjYyOTUsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ5ODIyNjk0NzY1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0OTgyMjY5NDc2NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MQ2K1vnZmqWO81E2x0Xfk16x9RcuqzIWFSRhCBXRaUgJvJDvxJ0QPDwwIwNvsU-vkoSB8BfZJpPGJq9SYfpPADE_WLRLhVZ781Sn0Lqricv9gd-aAA1egAL7ZLv_kfeKT8O2_TNHgcqLKfFfELwQJ2juM20NZYFFFPu91Yhn-jINAwO3T58KO5WtnlFdLiFGvow4HDV_buy_u-oRGCIqGBZhCI86McoTwiowyp8EPEq2ioTOyGq8NdRinyXy8qfeoMHTLjsYjl6xgS3LxEjZYH2SJ5PBwWrD6iCzwQ7g1yMdudQwyWHGeNbiMCgYvVyzgV0o_-Y95mEh9gMR-YNGow",
        "refreshToken": "AMf-vBynQz4vsuWJAz_xy7hhem-zyACwgyLj0_034TmC9SnPojcH1e-QfB2lijs5uzmVUelg6RsVXdW2s3-cAUzhLQW_MSdI-Jv1uB8L1lyHC33Qec-0vcuq78TP2zxcQfD68LZGySuG7lOrP_gQyjoMfljPj4zrI0yePUGukNwgafZ2wR3RUE0qXBZoJiRoiU2qkWBWEwRG2o5UUfMYZ9GKAXaqI5jiHRQ48NGYTFodT_z8ahOU4bA",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1161.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (633.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "KPWHn6b2LnhIr4PJ7pSwpX7lvq03",
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
    "etag": "W/\"173-4Mrn2aVYhzJo7q0NKHtWI8SuIQY\"",
    "date": "Fri, 13 Jun 2025 13:51:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "20c1f286-bf53-413a-9d07-2546a07e0420",
      "userId": "KPWHn6b2LnhIr4PJ7pSwpX7lvq03",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-13T13:51:36.498Z",
      "updatedAt": "2025-06-13T13:51:36.498Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 633.8 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (978.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1749822696561@example.com",
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
    "etag": "W/\"60d-Ta8f6PflowiqrUssSDxIEs7ieiY\"",
    "date": "Fri, 13 Jun 2025 13:51:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "gIkc4AWfyrc3kVP8Oh06nUw8Rul2",
        "email": "manager-user-1749822696561@example.com",
        "name": "Manager User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5NiwidXNlcl9pZCI6ImdJa2M0QVdmeXJjM2tWUDhPaDA2blV3OFJ1bDIiLCJzdWIiOiJnSWtjNEFXZnlyYzNrVlA4T2gwNm5VdzhSdWwyIiwiaWF0IjoxNzQ5ODIyNjk2LCJleHAiOjE3NDk4MjYyOTYsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDk4MjI2OTY1NjFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDk4MjI2OTY1NjFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.V38qrMWJye08z_8oC1AwS0PjNj9Ph20g066M35PsUk7RzB3ojQE1VoilUh_-w3qob_TTxRuFV-kXcEpUPIUm-8uiGu6N4eFHQdEfWzNZKGmho-YdxWXwVIhbMDXkNFSGub086e3OPa6hcnKFDrh8TuH2W7lG_jDuPv8GC2deLq2E55rGohwl--qOqnOeshBM9HSAHllfX0_uldcwKT0w3VxOrcYYNdPwuDR2t4egINoja8caaFSqTvxIHs7jsyTjiYJiM7IYN72ZF6otH6HUHssu6tRnCUHHo0KKkgG7DA9bxUu1WikOZpdGllPMUJWy5BXBtKnhZBWTNJPUNvweMA",
        "refreshToken": "AMf-vBy1B35GAXto6jHo7nSoPMYsA5UXEplVejev6se8dXOEdve3iIKCiT0kbMwOtWn29kEg-KACknH7tiY4wDaJYC52mC0rQrn6BbZeLNCjPeYbvGmZ-TeZ1gYO83MX3GeGFug6gzkGs80sWif-gu1egGRmEjPc8T1JYmJBWuH3_kzoIi3sOinZ8KKUTU1_L_KTos1-Ukf5X1EBaIS6K3eGH8hJMfImJxV-GyaLb56RLNSlaH9obC8",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 978.8 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (662.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "gIkc4AWfyrc3kVP8Oh06nUw8Rul2",
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
    "etag": "W/\"175-/rWvfzjkVD0463hHcC9C2J12iOk\"",
    "date": "Fri, 13 Jun 2025 13:51:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "83dae7a1-dbaf-4e35-a21a-4784d77541ad",
      "userId": "gIkc4AWfyrc3kVP8Oh06nUw8Rul2",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T13:51:38.093Z",
      "updatedAt": "2025-06-13T13:51:38.093Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 662.8 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1084.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1749822698204@example.com",
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
    "etag": "W/\"62b-Y5OGtuT8RKiQ8YfU3ilYxlJG3Lk\"",
    "date": "Fri, 13 Jun 2025 13:51:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "rlQjFGB8DyTu4FXJog5utu2zZ363",
        "email": "moderator-user-1749822698204@example.com",
        "name": "Moderator User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5OCwidXNlcl9pZCI6InJsUWpGR0I4RHlUdTRGWEpvZzV1dHUyelozNjMiLCJzdWIiOiJybFFqRkdCOER5VHU0RlhKb2c1dXR1MnpaMzYzIiwiaWF0IjoxNzQ5ODIyNjk4LCJleHAiOjE3NDk4MjYyOTgsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0OTgyMjY5ODIwNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ5ODIyNjk4MjA0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.HWDOis422mZ0U_HAz6H1lcBecfuk1G9_kGKb6QLlWWtsUFZyLgWKZB8_hzxCmA33k4NCjXDK7egZR86nczvMWRF6FWhqWdYo7Nlsa0TGy6MLp-oc4zqG4skGJJiW_7f817lkwieO0k1bWXLJ5NzRY3Kt9Dj-ht5y94teftZWpsFS-rfDkYrp1iqGwi02a7sqY7QMTJlEs0dHcCCCVRxNyY3Kp-YXaTln0uyNQVF-lHKiLJ1O_9uARgkF6OGXtGUhId9WX399eUpPel8SWUuNGXORkCNnkxFxLeUkoB04u_MZzjRuyQGq9bWgT0gByCp8Qquw6Em4QjKsjaLJfYWGzw",
        "refreshToken": "AMf-vBxi-gwt5yyiSQQqi4Pfa8Mhzfo7jUYDnuZhEBwezfra97lacJHEvu8uVZz1yzILr51TYb5stdCNSv-Nvu449IGZcCTH5jgFen7sMHVGEEHdMP2XjYnyWZbD1mFZ8fiO1IZqN_RjUoN0vxufW-jpov0ixp2CqD2fnQM7lAVzeOPe2GAPfkXv1Su0do2Bz3nXH_BRh2S8RXo6_X_q9P59aAXR-M42nfl-r1NHpy4zelGVt1ZFQvcAC3bcNQb3oiUXeZXiwucS",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1084.8 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (585.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "rlQjFGB8DyTu4FXJog5utu2zZ363",
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
    "etag": "W/\"177-Id7DdcD4+Em5DQxt20Wi8NFqIgU\"",
    "date": "Fri, 13 Jun 2025 13:51:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "04d3999f-7366-450e-bb4e-96495356b82a",
      "userId": "rlQjFGB8DyTu4FXJog5utu2zZ363",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-13T13:51:39.802Z",
      "updatedAt": "2025-06-13T13:51:39.802Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 585.6 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1135.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1749822699874@example.com",
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
    "etag": "W/\"62b-U+c8hLG8upVMGD7a6Vs3/xm4LnA\"",
    "date": "Fri, 13 Jun 2025 13:51:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "wK9PdLCg45RtjIkHOWXeMt6QUt43",
        "email": "volunteer-user-1749822699874@example.com",
        "name": "Volunteer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcwMCwidXNlcl9pZCI6IndLOVBkTENnNDVSdGpJa0hPV1hlTXQ2UVV0NDMiLCJzdWIiOiJ3SzlQZExDZzQ1UnRqSWtIT1dYZU10NlFVdDQzIiwiaWF0IjoxNzQ5ODIyNzAwLCJleHAiOjE3NDk4MjYzMDAsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0OTgyMjY5OTg3NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ5ODIyNjk5ODc0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.R35oy36rULjYEQV-0U-G2pyrmFmVHA3EhYclvu2aw5HiL1WN99ucAwIpxHuaYJG3gMm3xGhBPUgstHNWfx_SwfzmCf-aYdCcv1QpyFFMqQ9RsWw8LQwJpXnc4mYMdURgDB98eLmG4DWJWmYk96n8kiIEakDbdvZXCBXz8xcWbbgOcpSLzIRDi5O1-Rm6bghh1l6iTJ5egBL8RFwGD5kE5lzL0-MlIyIQrRzdmJ6U0yOHQ34jIrxKq5KFn11CjBEtN7YvIS7jp2RW6oC5ND02ZsCLaI3sXdOQ60FRpQonMnMyNfX9aelAJbHxZJ6yTxMFkOE4e2WaYYljDAMRygEGow",
        "refreshToken": "AMf-vBxNL_KCYj7_50VKHSruZfB2Qg53OQILNd-2JF4AzNVz6_dGtPwTNDyEmmp5R9ja-Q6Tk1v2d2REEKo5g3bsGxeCI1aBcBUrCTNaQlUiWtG54Ob3ooEC1k6dWxC_vB9PL5_24gE8UQM1qGpJ4HX6k3cmCxiF2k8NVJ7VW88tSr5Mzc-Sw81oL_TBYykJZ7MOqljxGG88P3uu35ohKZDO0aDdMm_OpQu4aGEh8qrrsmeM0ZEUwR6aHGhhsD40PFX53JGF6Y6G",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1135.7 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (614.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "wK9PdLCg45RtjIkHOWXeMt6QUt43",
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
    "etag": "W/\"177-z06ELFBpF05fKdc8vecoF8eliPc\"",
    "date": "Fri, 13 Jun 2025 13:51:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "731e40c8-4b27-4c19-8ba9-ce27bbf50f98",
      "userId": "wK9PdLCg45RtjIkHOWXeMt6QUt43",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T13:51:41.557Z",
      "updatedAt": "2025-06-13T13:51:41.557Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 614.4 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1033.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1749822701625@example.com",
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
    "etag": "W/\"611-VVZrM4a6zZBO137vS76h1I0TwgE\"",
    "date": "Fri, 13 Jun 2025 13:51:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "BC5Kg7z5vkM4yYifwUbh75Uv2rE3",
        "email": "observer-user-1749822701625@example.com",
        "name": "Observer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcwMiwidXNlcl9pZCI6IkJDNUtnN3o1dmtNNHlZaWZ3VWJoNzVVdjJyRTMiLCJzdWIiOiJCQzVLZzd6NXZrTTR5WWlmd1ViaDc1VXYyckUzIiwiaWF0IjoxNzQ5ODIyNzAyLCJleHAiOjE3NDk4MjYzMDIsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ5ODIyNzAxNjI1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0OTgyMjcwMTYyNUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Zwqot7zml2K7l3PwyXprN4z4OpKmve4jl589Yelz85asDVZpDX8oidi3iWr3CMAP-ARULWdEDALcuKVP8VPDWS-I21VsWlyWeOw95BZAcAzYSr_oyMwkVkQt3jPjkfFWB7hRaOqOLAYe9FOp3U-aIehUhflJsC0pghl2yl0ZG2slJxyUdV1HOksQBCGNgomvHc_TzbW_E2YBLpWlsGixVFm7Cb7HSFoz4eVydrs4AKIv3ZtzGU0y93goR35ChXhuehGn1tOTkwfZtLZpcKvkRa5dCzu86KBZcRJqkaAuNXQOyNbWV-sFSHALcEbHLLH8wIlvzZJtAjjdj9HpEr1iug",
        "refreshToken": "AMf-vBxJ2qc-cl9DnNU5MT7u6Vl452tOTeSHRayS92bTRgNVVWj7PAk5RJQKDc_1wIu_QWJQBuuaWqrJ812Vhv9NR4MRY0wBPoDPdrUbq7mQ-3nq2UqbzbhMPKy7J1d-OAMPagYGKd3QmpricqjIprn0Qjxnd1cL6QBT42KfkZOzbABCDhHnqzxD_XLm4pRiiaSAVF00X07z_rPN1vAy1sfd71RJhpnpG9bi9pRoGB0PPp21ie8Q3mw",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1033.1 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (569.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "BC5Kg7z5vkM4yYifwUbh75Uv2rE3",
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
    "etag": "W/\"176-3CfEL3SKUIRYMaIVKImtDRAm5hY\"",
    "date": "Fri, 13 Jun 2025 13:51:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "f0d8aad5-8056-4889-b8b6-429ee1b51647",
      "userId": "BC5Kg7z5vkM4yYifwUbh75Uv2rE3",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-13T13:51:43.160Z",
      "updatedAt": "2025-06-13T13:51:43.160Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 569.6 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=2b98dad4-8486-4b15-910a-333813e925f8 (642.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "etag": "W/\"625-h2iRZMP6qNgb3fvK3chuivkcYXs\"",
    "date": "Fri, 13 Jun 2025 13:51:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "b7a87ca8-c26e-4a77-befa-c5656fd7e0fc",
        "userId": "K0xp0nlqZtUl5wHY8vdOgPb7UQY2",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-13T13:51:32.597Z",
        "updatedAt": "2025-06-13T13:51:32.597Z"
      },
      {
        "id": "20c1f286-bf53-413a-9d07-2546a07e0420",
        "userId": "KPWHn6b2LnhIr4PJ7pSwpX7lvq03",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T13:51:36.498Z",
        "updatedAt": "2025-06-13T13:51:36.498Z"
      },
      {
        "id": "83dae7a1-dbaf-4e35-a21a-4784d77541ad",
        "userId": "gIkc4AWfyrc3kVP8Oh06nUw8Rul2",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T13:51:38.093Z",
        "updatedAt": "2025-06-13T13:51:38.093Z"
      },
      {
        "id": "04d3999f-7366-450e-bb4e-96495356b82a",
        "userId": "rlQjFGB8DyTu4FXJog5utu2zZ363",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T13:51:39.802Z",
        "updatedAt": "2025-06-13T13:51:39.802Z"
      },
      {
        "id": "731e40c8-4b27-4c19-8ba9-ce27bbf50f98",
        "userId": "wK9PdLCg45RtjIkHOWXeMt6QUt43",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T13:51:41.557Z",
        "updatedAt": "2025-06-13T13:51:41.557Z"
      },
      {
        "id": "f0d8aad5-8056-4889-b8b6-429ee1b51647",
        "userId": "BC5Kg7z5vkM4yYifwUbh75Uv2rE3",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T13:51:43.160Z",
        "updatedAt": "2025-06-13T13:51:43.160Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 642.0 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 1.11s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1108.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:51:44 GMT",
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

**⏱️ Duration:** 1108.7 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=YZt2AtePHJUjuoxgdE1c3pzusQu1 (454.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5MCwidXNlcl9pZCI6IlladDJBdGVQSEpVanVveGdkRTFjM3B6dXNRdTEiLCJzdWIiOiJZWnQyQXRlUEhKVWp1b3hnZEUxYzNwenVzUXUxIiwiaWF0IjoxNzQ5ODIyNjkwLCJleHAiOjE3NDk4MjYyOTAsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMjY4ODM4NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIyNjg4Mzg0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.KUafx0BavXEqCfzPeq9f2uNowyHnKil4iwNSmD0ZopD9da11dCQZ6CNT_UKK9-Vdm1FAYZPQ4LVpI2wc5T_JC6hEfd2TKx9ejEdn2EhBiF4oUit8pc_meU16vSmokyM6udjqL8_7npEo_TgstKnCfWdMD7eGX7LmGYLQvKSvvJKNxmqx9SRNhw1EbBJf_MKhj4A0uCXXvPXf_adZScq2JrHdxuA4dw-dbOIN97J-Sa0B0PveZUwYjj3rBhRc9T9Juztxp-0aVoVQJM9MNFCF9oBm36frsnKeJYqX5VtPh6-OdKF-_5OoSVRoxsbN9yrqwv9Aj_UYwA7u6WrU7Ry5oA"
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
    "date": "Fri, 13 Jun 2025 13:51:45 GMT",
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

**⏱️ Duration:** 454.2 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.69s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (689.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:51:46 GMT",
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

**⏱️ Duration:** 689.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (458.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5MCwidXNlcl9pZCI6IlladDJBdGVQSEpVanVveGdkRTFjM3B6dXNRdTEiLCJzdWIiOiJZWnQyQXRlUEhKVWp1b3hnZEUxYzNwenVzUXUxIiwiaWF0IjoxNzQ5ODIyNjkwLCJleHAiOjE3NDk4MjYyOTAsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMjY4ODM4NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIyNjg4Mzg0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.KUafx0BavXEqCfzPeq9f2uNowyHnKil4iwNSmD0ZopD9da11dCQZ6CNT_UKK9-Vdm1FAYZPQ4LVpI2wc5T_JC6hEfd2TKx9ejEdn2EhBiF4oUit8pc_meU16vSmokyM6udjqL8_7npEo_TgstKnCfWdMD7eGX7LmGYLQvKSvvJKNxmqx9SRNhw1EbBJf_MKhj4A0uCXXvPXf_adZScq2JrHdxuA4dw-dbOIN97J-Sa0B0PveZUwYjj3rBhRc9T9Juztxp-0aVoVQJM9MNFCF9oBm36frsnKeJYqX5VtPh6-OdKF-_5OoSVRoxsbN9yrqwv9Aj_UYwA7u6WrU7Ry5oA"
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
    "date": "Fri, 13 Jun 2025 13:51:46 GMT",
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

**⏱️ Duration:** 458.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/b7a87ca8-c26e-4a77-befa-c5656fd7e0fc (623.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "etag": "W/\"125-uweYrBB354HBdmySz+/anddw3/M\"",
    "date": "Fri, 13 Jun 2025 13:51:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "b7a87ca8-c26e-4a77-befa-c5656fd7e0fc",
      "userId": "K0xp0nlqZtUl5wHY8vdOgPb7UQY2",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T13:51:32.597Z",
      "updatedAt": "2025-06-13T13:51:32.597Z"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 623.1 ms  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (565.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:51:47 GMT",
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

**⏱️ Duration:** 565.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Update Member Role Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.67s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/b7a87ca8-c26e-4a77-befa-c5656fd7e0fc (668.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "etag": "W/\"179-Z6kzQUGv4nHOyQKipmg+CZtCXyg\"",
    "date": "Fri, 13 Jun 2025 13:51:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member role updated to manager",
    "data": {
      "id": "b7a87ca8-c26e-4a77-befa-c5656fd7e0fc",
      "userId": "K0xp0nlqZtUl5wHY8vdOgPb7UQY2",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T13:51:32.597Z",
      "updatedAt": "2025-06-13T13:51:48.379Z"
    },
    "messageKey": "memberships.role_updated",
    "language": "en"
  }
}
```

**⏱️ Duration:** 668.8 ms  

</details>


---

### Test: Memberships E2E Tests Update Member Role Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.36s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/b7a87ca8-c26e-4a77-befa-c5656fd7e0fc (354.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:51:48 GMT",
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

**⏱️ Duration:** 354.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/b7a87ca8-c26e-4a77-befa-c5656fd7e0fc (469.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5MCwidXNlcl9pZCI6IlladDJBdGVQSEpVanVveGdkRTFjM3B6dXNRdTEiLCJzdWIiOiJZWnQyQXRlUEhKVWp1b3hnZEUxYzNwenVzUXUxIiwiaWF0IjoxNzQ5ODIyNjkwLCJleHAiOjE3NDk4MjYyOTAsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMjY4ODM4NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIyNjg4Mzg0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.KUafx0BavXEqCfzPeq9f2uNowyHnKil4iwNSmD0ZopD9da11dCQZ6CNT_UKK9-Vdm1FAYZPQ4LVpI2wc5T_JC6hEfd2TKx9ejEdn2EhBiF4oUit8pc_meU16vSmokyM6udjqL8_7npEo_TgstKnCfWdMD7eGX7LmGYLQvKSvvJKNxmqx9SRNhw1EbBJf_MKhj4A0uCXXvPXf_adZScq2JrHdxuA4dw-dbOIN97J-Sa0B0PveZUwYjj3rBhRc9T9Juztxp-0aVoVQJM9MNFCF9oBm36frsnKeJYqX5VtPh6-OdKF-_5OoSVRoxsbN9yrqwv9Aj_UYwA7u6WrU7Ry5oA"
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
    "date": "Fri, 13 Jun 2025 13:51:49 GMT",
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

**⏱️ Duration:** 469.8 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (1161.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1749822709347@example.com",
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
    "etag": "W/\"60d-h1vchK0k7V00urCETYVwTUWnhHw\"",
    "date": "Fri, 13 Jun 2025 13:51:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "sHQTOHd7SOf4hoywqsukzf4NRua2",
        "email": "remove-user-1749822709347@example.com",
        "name": "User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcwOSwidXNlcl9pZCI6InNIUVRPSGQ3U09mNGhveXdxc3VremY0TlJ1YTIiLCJzdWIiOiJzSFFUT0hkN1NPZjRob3l3cXN1a3pmNE5SdWEyIiwiaWF0IjoxNzQ5ODIyNzA5LCJleHAiOjE3NDk4MjYzMDksImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0OTgyMjcwOTM0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ5ODIyNzA5MzQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PKnolY-kv_xJXYzZpxbczjvZWsYDXTzsNLtzDMfZIOei6JqB0oNW1DyrdGipSwatosCPOerNF3cW1rNap0AuizPa8VwLk40TbvYhNn_crjupuTD4xAR6v-15eayNJXwSgFkSkhr_5b-beJGZkjM4YTEn7IqSgn2j6iBZgdyRWtpx2nmfEjr-ZaPDZmu201OJTahWlPfBtGBeNdW38ey9O86CLK4dWthG4XDaf8WncZ9BMiyGr9PHxsF19tDkYpMKNPoINynY7m9xDUTrrE0zxDXX3ee_WPObSRwmS3AM432I1MGePgZdh4EkmdgevwwIhtYuYvCTtUrZ3UEr-vwsfw",
        "refreshToken": "AMf-vBzOJX0dFfpy_21WfbOTfEwddq7Mz0D30dVncKhAG6Cr8Wk-RYYvtVEhdJKqPqMfJBC_Tzm3Nb6Jm0JnEOPXgxvSb8rtgY_Q4TF7u7DflSjQjblM5TFlpqWlyUV5IjC0KjCAu-SXunBQ9_t7aWnBA3Ww-9InOZ7gqbmDk-lYQ7RbuQhDqtlGlqIjeF-sPYZEeM0uxugCxDnKfVNo4q7tUIPsaqdOEDQMuZd8d1_4vVVeaweqpnQ",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1161.2 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (585.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "sHQTOHd7SOf4hoywqsukzf4NRua2",
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
    "etag": "W/\"177-jiohcsESu/ib2q43oZkwsbyWuUw\"",
    "date": "Fri, 13 Jun 2025 13:51:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "6a7322d6-45fa-4698-bb23-a90936348cd9",
      "userId": "sHQTOHd7SOf4hoywqsukzf4NRua2",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T13:51:51.030Z",
      "updatedAt": "2025-06-13T13:51:51.030Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 585.3 ms  

</details>


---

### Test: Memberships E2E Tests Remove Member Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/6a7322d6-45fa-4698-bb23-a90936348cd9 (574.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:51:51 GMT",
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

**⏱️ Duration:** 574.6 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/6a7322d6-45fa-4698-bb23-a90936348cd9 (442.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:51:52 GMT",
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

**⏱️ Duration:** 442.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.25s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1177.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1749822712125@example.com",
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
    "etag": "W/\"647-zEuwAKtJYITYQG7QH8A6MXJpr+g\"",
    "date": "Fri, 13 Jun 2025 13:51:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "H8nfUyZKCrO2vprK5QCI6PxyXpy2",
        "email": "another-remove-user-1749822712125@example.com",
        "name": "Another User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxMiwidXNlcl9pZCI6Ikg4bmZVeVpLQ3JPMnZwcks1UUNJNlB4eVhweTIiLCJzdWIiOiJIOG5mVXlaS0NyTzJ2cHJLNVFDSTZQeHlYcHkyIiwiaWF0IjoxNzQ5ODIyNzEyLCJleHAiOjE3NDk4MjYzMTIsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ5ODIyNzEyMTI1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0OTgyMjcxMjEyNUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LX0qcB0Nj9bi4bfZ3PoJtUVndxgHTqQ-xAltgV8aP23fKZcx55oStd7uaadXOS76L7RAUStot6_G5QzSrOyc8A78YqPhEYv7fx0IpFHztBRGPTeANEqchlq5UVc48WtHnow1ziOeym3Jwp-RoBR0B-qh3Rmc-supYpwKAcHVhOnluh4W2jJtqja68cNhBTJUxaa6tVxfFyfgD4sGhhz4y14f28GzDyqMeKwynMcCnq_VTpe0imKXYf1wCnvjIGKjbQLBeb1jCa8Y5ctIZlTmGJIxxqLZB09VU3TBfDIsuTWmPldzZKGycILWjrpseSIZze8iuLZ-xBXE6Yu35QW5Lg",
        "refreshToken": "AMf-vBwvovU13-MervKCLCMDyYqCRkHEVQ6ag7brfdpGmNQrZqviixsDvfzRK41K_4tBgZfu-vg0gy4rTsNHJyODTtxvOVpPHjbf7r8TCsC97gnI3yoHRw6DBo97vFVbv_H76Db6HzjOkKsHtFn42mNrxbwGZSWC56ZanpUKxP3Ikr33rg-YlpKxru4YnZqEYh0kizB4sbl58N0wurbiRSMkOyV7sLg5kq7hu-thSqGxcPdhuM358n51o3LlJbroxh-y5prL1A_J",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1177.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (614.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "H8nfUyZKCrO2vprK5QCI6PxyXpy2",
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
    "etag": "W/\"177-5l1XbMiniNxKhWBnIowr/W3p+TY\"",
    "date": "Fri, 13 Jun 2025 13:51:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "d683037f-62f9-4cd4-8481-7f9113b578b2",
      "userId": "H8nfUyZKCrO2vprK5QCI6PxyXpy2",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T13:51:53.848Z",
      "updatedAt": "2025-06-13T13:51:53.848Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 614.6 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/d683037f-62f9-4cd4-8481-7f9113b578b2 (453.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjY5MCwidXNlcl9pZCI6IlladDJBdGVQSEpVanVveGdkRTFjM3B6dXNRdTEiLCJzdWIiOiJZWnQyQXRlUEhKVWp1b3hnZEUxYzNwenVzUXUxIiwiaWF0IjoxNzQ5ODIyNjkwLCJleHAiOjE3NDk4MjYyOTAsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMjY4ODM4NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIyNjg4Mzg0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.KUafx0BavXEqCfzPeq9f2uNowyHnKil4iwNSmD0ZopD9da11dCQZ6CNT_UKK9-Vdm1FAYZPQ4LVpI2wc5T_JC6hEfd2TKx9ejEdn2EhBiF4oUit8pc_meU16vSmokyM6udjqL8_7npEo_TgstKnCfWdMD7eGX7LmGYLQvKSvvJKNxmqx9SRNhw1EbBJf_MKhj4A0uCXXvPXf_adZScq2JrHdxuA4dw-dbOIN97J-Sa0B0PveZUwYjj3rBhRc9T9Juztxp-0aVoVQJM9MNFCF9oBm36frsnKeJYqX5VtPh6-OdKF-_5OoSVRoxsbN9yrqwv9Aj_UYwA7u6WrU7Ry5oA"
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
    "date": "Fri, 13 Jun 2025 13:51:54 GMT",
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

**⏱️ Duration:** 453.4 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (1292.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749822714375@example.com",
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
    "etag": "W/\"630-N0FNShFTBtfEODmnXYKByt+M1IM\"",
    "date": "Fri, 13 Jun 2025 13:51:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "UKfkBYKlx3ZfPp3YAtFmATPVAPE2",
        "email": "self-leave-user-1749822714375@example.com",
        "name": "Self Leave User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxNSwidXNlcl9pZCI6IlVLZmtCWUtseDNaZlBwM1lBdEZtQVRQVkFQRTIiLCJzdWIiOiJVS2ZrQllLbHgzWmZQcDNZQXRGbUFUUFZBUEUyIiwiaWF0IjoxNzQ5ODIyNzE1LCJleHAiOjE3NDk4MjYzMTUsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjI3MTQzNzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjI3MTQzNzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.I-pB9f8yA_jUGHanw0PGFVa23I8XYxhLZLV1X9ZDZGc99NM4N9xlocdNe9CeYtdPyth3f8na1CAxeIpfOyRF_Iyv_UvwWpH6dw5Buaa3OZ3sEpdZlDNqNiftBmDRJRcsEVjd3mhNRb_SIvlaod3Xo6o8AXcpHa8u7RH14_b85M63dUvNsYj2Fapfs24HUQyVNnpP_0JahNwKVQL5jcQGPSyAJqTu85KIT6Pcrux4bwaSTR6Sp9QU1JZB-Cxx-wTvXEr0FO_hhy_kBFJgiDkbFtGY0eu2k9_w_8nGp2vvC89DozP1svsHaCGP7zg5AhnLOJtkC-aThwDzKQJ5oUEHlQ",
        "refreshToken": "AMf-vBzrBFnm0RJ8wMC5Ed7eU5wedYubdkpunt2VbmMB5UCUDW4isBwA2mozBuVZFoKhNEKxWy7xCajFdqtuWNOUGdD19nqVU5oIyXqfAcw4lv8L3NvNKfobKL1rAzN_Vk8Ab4l0b0xyAeygl-CxerXrIa1UkS_GVtbXCdjgQ3L1LfLX_g_qEn6zjheQE_jXTgjPPR9CFFmADVTbBnIbUjS6lhHQlB5Tk9c7cgZqIIHt1iqLjAEH4ZYBY8qHWzu-dvCMHYksk__3",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1292.2 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (401.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749822714375@example.com",
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
    "etag": "W/\"614-Vo+f5v6azWM51OWIcuY95ew3Kvc\"",
    "date": "Fri, 13 Jun 2025 13:51:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "UKfkBYKlx3ZfPp3YAtFmATPVAPE2",
        "email": "self-leave-user-1749822714375@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxNSwidXNlcl9pZCI6IlVLZmtCWUtseDNaZlBwM1lBdEZtQVRQVkFQRTIiLCJzdWIiOiJVS2ZrQllLbHgzWmZQcDNZQXRGbUFUUFZBUEUyIiwiaWF0IjoxNzQ5ODIyNzE1LCJleHAiOjE3NDk4MjYzMTUsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjI3MTQzNzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjI3MTQzNzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.I-pB9f8yA_jUGHanw0PGFVa23I8XYxhLZLV1X9ZDZGc99NM4N9xlocdNe9CeYtdPyth3f8na1CAxeIpfOyRF_Iyv_UvwWpH6dw5Buaa3OZ3sEpdZlDNqNiftBmDRJRcsEVjd3mhNRb_SIvlaod3Xo6o8AXcpHa8u7RH14_b85M63dUvNsYj2Fapfs24HUQyVNnpP_0JahNwKVQL5jcQGPSyAJqTu85KIT6Pcrux4bwaSTR6Sp9QU1JZB-Cxx-wTvXEr0FO_hhy_kBFJgiDkbFtGY0eu2k9_w_8nGp2vvC89DozP1svsHaCGP7zg5AhnLOJtkC-aThwDzKQJ5oUEHlQ",
        "refreshToken": "AMf-vBw5_wd771nyNujflTRU58AY62pRorEjDX2UlIHEhQCYpshCoFGbK_r2zC5ps3F6_vT_ZFlE8jI251myYNGQLyEWw1-2-ckfJVH54XPdHHbM-Zxt7jQACVXCWwGftEQWbgSpyPKJTKT9UFnRmj_tIBnUWVlj44PURY7tuWW3bNXLuvWdKOjWlDj79_IZBeY5ZTDkb-T9oL71KxfKGffmryqSth0JL_cW8HL6qKCr0KfhlURs_6ZY3bHaCIoNEEfRNXnpld6X",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 401.1 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (607.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "UKfkBYKlx3ZfPp3YAtFmATPVAPE2",
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
    "etag": "W/\"174-KvYXUeBsmCTvxYaQzPeCDQDykhY\"",
    "date": "Fri, 13 Jun 2025 13:51:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "2cf63ec3-002b-403b-9ef0-f45cffa25e32",
      "userId": "UKfkBYKlx3ZfPp3YAtFmATPVAPE2",
      "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T13:51:56.611Z",
      "updatedAt": "2025-06-13T13:51:56.611Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 607.7 ms  

</details>


---

### Test: Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.18s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/2cf63ec3-002b-403b-9ef0-f45cffa25e32 (557.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxNSwidXNlcl9pZCI6IlVLZmtCWUtseDNaZlBwM1lBdEZtQVRQVkFQRTIiLCJzdWIiOiJVS2ZrQllLbHgzWmZQcDNZQXRGbUFUUFZBUEUyIiwiaWF0IjoxNzQ5ODIyNzE1LCJleHAiOjE3NDk4MjYzMTUsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjI3MTQzNzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjI3MTQzNzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.I-pB9f8yA_jUGHanw0PGFVa23I8XYxhLZLV1X9ZDZGc99NM4N9xlocdNe9CeYtdPyth3f8na1CAxeIpfOyRF_Iyv_UvwWpH6dw5Buaa3OZ3sEpdZlDNqNiftBmDRJRcsEVjd3mhNRb_SIvlaod3Xo6o8AXcpHa8u7RH14_b85M63dUvNsYj2Fapfs24HUQyVNnpP_0JahNwKVQL5jcQGPSyAJqTu85KIT6Pcrux4bwaSTR6Sp9QU1JZB-Cxx-wTvXEr0FO_hhy_kBFJgiDkbFtGY0eu2k9_w_8nGp2vvC89DozP1svsHaCGP7zg5AhnLOJtkC-aThwDzKQJ5oUEHlQ"
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
    "date": "Fri, 13 Jun 2025 13:51:57 GMT",
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

**⏱️ Duration:** 557.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/2cf63ec3-002b-403b-9ef0-f45cffa25e32 (613.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:51:57 GMT",
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

**⏱️ Duration:** 613.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1277.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749822717854@example.com",
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
    "etag": "W/\"630-rvnv86v307kJtnWGDCaNDtkZGMw\"",
    "date": "Fri, 13 Jun 2025 13:51:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "76hBWhCVYuengJNyZtfsAdefd3R2",
        "email": "other-org-admin-1749822717854@example.com",
        "name": "Other Org Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxOCwidXNlcl9pZCI6Ijc2aEJXaENWWXVlbmdKTnladGZzQWRlZmQzUjIiLCJzdWIiOiI3NmhCV2hDVll1ZW5nSk55WnRmc0FkZWZkM1IyIiwiaWF0IjoxNzQ5ODIyNzE4LCJleHAiOjE3NDk4MjYzMTgsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.LQQo5uy8nyDUfG6gPYZP3uNw5FmYx80qZOKC2QC-IKrwfvwK5i8cHOqxOmvIr5R2W9DQtg_WYmKLLserz6G2EMTnK44eTZkfSSpfiOFVMhULRJcAwIfM7ZymbsUBDePmGGQjzlx5L9SahC0dOzn9aCiJ7ZPCUeS02HMSx9o2NoV1ri0CYtpQBD7T6YmWCtBwktAkxJ66LA7vHsOs0mavB9xGZHwnrltlr-jiOuuFx0k-MKao1w_rmcDi3n51cChT3dLCnaVprn4RAt7w6PcdxW8kPoe-Q3bMa3JjFwHxtYU1zkEAs2IqNR2qxb3jQXWzf_ylgHs02tt5puWLeEp5Zg",
        "refreshToken": "AMf-vBw5ZB_Q-Eh2gNg23mEkWlQbEqpJqthliMOc5naUL5JgZelf8T7SNHE9LwJ-jgiZUWTsNZRTKmul5HORSCFhbzah7iJj3wf0gNtgG4IhHbqMUFDXcXcPcnblp7Dsj7wSXQ2czTjscCl5jKEQ0wDAqKBYSP97wYtieoZnM64pVUJg0W1XEEj6OcfmvZirCVHJGOKJuQ5vr67oLgWLnttH0RXEK83OHMFp3fGqJJyxFMl13GVasQZCIiZS1FOphccQsCol6NnW",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1277.2 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (281.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749822717854@example.com",
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
    "etag": "W/\"614-XnZNjjx9LU6Zmz9fVU6aLuvfXN4\"",
    "date": "Fri, 13 Jun 2025 13:51:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "76hBWhCVYuengJNyZtfsAdefd3R2",
        "email": "other-org-admin-1749822717854@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxOSwidXNlcl9pZCI6Ijc2aEJXaENWWXVlbmdKTnladGZzQWRlZmQzUjIiLCJzdWIiOiI3NmhCV2hDVll1ZW5nSk55WnRmc0FkZWZkM1IyIiwiaWF0IjoxNzQ5ODIyNzE5LCJleHAiOjE3NDk4MjYzMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.a89aiCEm7DdjWTryHhUMWCUs75KHCPKRukPT7E2HFGL0b5mWs1IsLUknmP1Hv-ITm5pq6dA46OIAXDq4UgdirmLJBxeAimj7rZE9ErPXKDjeUneO9eCchl99v80-PYpAxrVRy1SP1gwyjQehEmKPOh3XIOMRrypz2zSUw9nQdVp15sd0hpGkT2po81yvFxbSgJ7Ev5EuVY8szzdVfqsWY6pYsMgs1ClrSD5IQusU2Go5gnnUZHqk81vR8-IaFhzssqykUzS5Hxn6eYo69C2_xXcQuwgn2RCmGSMKGvnWsPgFotm3FrjhnVCE4dhsZsb1yLXxs4TfuMxqZmghELEyuA",
        "refreshToken": "AMf-vBzXyMpNkAYBhU-6AEmGNiusBl8t0fjLqPpge2K3n5TP19kd8BSB42BsvKPY64QCPOa6bbrAJSne72Ljqy-Z-9poV8Nb8CesFob9DbJDkQ408sr09KU8DfOkYiOiSvszDgEgwyofk7mHTvoMRL_VlX2f3JbuXnkEWFJ8zygwjyDUW8s0EJ-bHO1HqXkrYxdgSHcCgWy9r6MQOwgkiu1yx5fSEdvEzksuBTqo9fwr-OYwYHZ73s0P-Qj2UsPdtDej6OPzjfXo",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 281.6 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (502.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxOSwidXNlcl9pZCI6Ijc2aEJXaENWWXVlbmdKTnladGZzQWRlZmQzUjIiLCJzdWIiOiI3NmhCV2hDVll1ZW5nSk55WnRmc0FkZWZkM1IyIiwiaWF0IjoxNzQ5ODIyNzE5LCJleHAiOjE3NDk4MjYzMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.a89aiCEm7DdjWTryHhUMWCUs75KHCPKRukPT7E2HFGL0b5mWs1IsLUknmP1Hv-ITm5pq6dA46OIAXDq4UgdirmLJBxeAimj7rZE9ErPXKDjeUneO9eCchl99v80-PYpAxrVRy1SP1gwyjQehEmKPOh3XIOMRrypz2zSUw9nQdVp15sd0hpGkT2po81yvFxbSgJ7Ev5EuVY8szzdVfqsWY6pYsMgs1ClrSD5IQusU2Go5gnnUZHqk81vR8-IaFhzssqykUzS5Hxn6eYo69C2_xXcQuwgn2RCmGSMKGvnWsPgFotm3FrjhnVCE4dhsZsb1yLXxs4TfuMxqZmghELEyuA"
  },
  "data": {
    "name": "Other Org 1749822719413",
    "description": "Other organization for cross-access test",
    "email": "other-org-1749822719413@example.com",
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
    "etag": "W/\"229-r2KGw2HWSnjZsCVAvm0+FF3LZDQ\"",
    "date": "Fri, 13 Jun 2025 13:51:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "f33c6bb6-bed0-46ce-8280-c2c7fdaafb2a",
      "name": "Other Org 1749822719413",
      "type": "shelter",
      "description": "Other organization for cross-access test",
      "logo": null,
      "address": "789 Other Org Boulevard",
      "phone": "+1122334455",
      "email": "other-org-1749822719413@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "76hBWhCVYuengJNyZtfsAdefd3R2",
      "createdAt": "2025-06-13T13:51:59.763Z",
      "updatedAt": "2025-06-13T13:51:59.763Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 502.0 ms  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=2b98dad4-8486-4b15-910a-333813e925f8 (410.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxOSwidXNlcl9pZCI6Ijc2aEJXaENWWXVlbmdKTnladGZzQWRlZmQzUjIiLCJzdWIiOiI3NmhCV2hDVll1ZW5nSk55WnRmc0FkZWZkM1IyIiwiaWF0IjoxNzQ5ODIyNzE5LCJleHAiOjE3NDk4MjYzMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.a89aiCEm7DdjWTryHhUMWCUs75KHCPKRukPT7E2HFGL0b5mWs1IsLUknmP1Hv-ITm5pq6dA46OIAXDq4UgdirmLJBxeAimj7rZE9ErPXKDjeUneO9eCchl99v80-PYpAxrVRy1SP1gwyjQehEmKPOh3XIOMRrypz2zSUw9nQdVp15sd0hpGkT2po81yvFxbSgJ7Ev5EuVY8szzdVfqsWY6pYsMgs1ClrSD5IQusU2Go5gnnUZHqk81vR8-IaFhzssqykUzS5Hxn6eYo69C2_xXcQuwgn2RCmGSMKGvnWsPgFotm3FrjhnVCE4dhsZsb1yLXxs4TfuMxqZmghELEyuA"
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
    "date": "Fri, 13 Jun 2025 13:52:00 GMT",
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

**⏱️ Duration:** 410.0 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1266.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1749822720333@example.com",
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
    "etag": "W/\"639-G9VEnqJotj336oEOCNTIQtMjs5o\"",
    "date": "Fri, 13 Jun 2025 13:52:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "giR97iQ78aNeT551OJTjdWTaO1R2",
        "email": "cross-org-invite-1749822720333@example.com",
        "name": "Cross Org Invite User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcyMCwidXNlcl9pZCI6ImdpUjk3aVE3OGFOZVQ1NTFPSlRqZFdUYU8xUjIiLCJzdWIiOiJnaVI5N2lRNzhhTmVUNTUxT0pUamRXVGFPMVIyIiwiaWF0IjoxNzQ5ODIyNzIwLCJleHAiOjE3NDk4MjYzMjAsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ5ODIyNzIwMzMzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0OTgyMjcyMDMzM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JxFq33u76qGxrtJ3GBer0nx9TsSlY8hpx21M8vHRJZBRbJZ6ZXuurZZon-tTjiQMG4IIA1YblaJLVC5K5WDX-lrOK6n5m4jyGaljkz0VB1aJKcSwax59MkF-40oQTp56ppGEhBQuUPP3Et7VhluQjcgBvHkhP1XUNG1GTPXbXJMRxoCjDkg5beCL5Zcc8aR_pdOSU70ONnkCK71CHdZfUPYmMINzEg7Qg7bNdvuz1CcjgF8kVT2qGo-b7sy4qp7H-bfUhKadQHFUkSpg2fBbJRcEpPMAW_I_sknLzgkYyN1PT6MYaWcd0t5fJHId3BZZax4mzIbeh3F5OXQ9HG-o3w",
        "refreshToken": "AMf-vBz2h4H93-vHJW6GVR-MBgO-qc0XYzNPwE3dKSaze-s_zzroF89w4aYt5EJ9zzvNmZuMUsuJyu0f30puYMEvdBOlcZWLMtU5rGBLzTUrwxTQOmFrZh0Ft7uT5L37tYZaZaAaTwpsPV25T9stctGN-AgLO_Z4AK7YJEc8i7D7jibOyDRSXOaBgJnRYmcYzcobVaIcH3PSS-pHpWWH86pkIRkrTmFOxkkRGkSdeaF6LK5oKTxiiDrRi4bCw4k3gZBVuZVdJvyF",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1266.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (435.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMjcxOSwidXNlcl9pZCI6Ijc2aEJXaENWWXVlbmdKTnladGZzQWRlZmQzUjIiLCJzdWIiOiI3NmhCV2hDVll1ZW5nSk55WnRmc0FkZWZkM1IyIiwiaWF0IjoxNzQ5ODIyNzE5LCJleHAiOjE3NDk4MjYzMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjI3MTc4NTRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.a89aiCEm7DdjWTryHhUMWCUs75KHCPKRukPT7E2HFGL0b5mWs1IsLUknmP1Hv-ITm5pq6dA46OIAXDq4UgdirmLJBxeAimj7rZE9ErPXKDjeUneO9eCchl99v80-PYpAxrVRy1SP1gwyjQehEmKPOh3XIOMRrypz2zSUw9nQdVp15sd0hpGkT2po81yvFxbSgJ7Ev5EuVY8szzdVfqsWY6pYsMgs1ClrSD5IQusU2Go5gnnUZHqk81vR8-IaFhzssqykUzS5Hxn6eYo69C2_xXcQuwgn2RCmGSMKGvnWsPgFotm3FrjhnVCE4dhsZsb1yLXxs4TfuMxqZmghELEyuA"
  },
  "data": {
    "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
    "userId": "giR97iQ78aNeT551OJTjdWTaO1R2",
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
    "date": "Fri, 13 Jun 2025 13:52:02 GMT",
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

**⏱️ Duration:** 435.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.21s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=2b98dad4-8486-4b15-910a-333813e925f8 (588.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "etag": "W/\"727-ZC5pk6QuIvBlPhgT/jrXyykfNuc\"",
    "date": "Fri, 13 Jun 2025 13:52:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "20c1f286-bf53-413a-9d07-2546a07e0420",
        "userId": "KPWHn6b2LnhIr4PJ7pSwpX7lvq03",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T13:51:36.498Z",
        "updatedAt": "2025-06-13T13:51:36.498Z"
      },
      {
        "id": "83dae7a1-dbaf-4e35-a21a-4784d77541ad",
        "userId": "gIkc4AWfyrc3kVP8Oh06nUw8Rul2",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T13:51:38.093Z",
        "updatedAt": "2025-06-13T13:51:38.093Z"
      },
      {
        "id": "04d3999f-7366-450e-bb4e-96495356b82a",
        "userId": "rlQjFGB8DyTu4FXJog5utu2zZ363",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T13:51:39.802Z",
        "updatedAt": "2025-06-13T13:51:39.802Z"
      },
      {
        "id": "731e40c8-4b27-4c19-8ba9-ce27bbf50f98",
        "userId": "wK9PdLCg45RtjIkHOWXeMt6QUt43",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T13:51:41.557Z",
        "updatedAt": "2025-06-13T13:51:41.557Z"
      },
      {
        "id": "f0d8aad5-8056-4889-b8b6-429ee1b51647",
        "userId": "BC5Kg7z5vkM4yYifwUbh75Uv2rE3",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T13:51:43.160Z",
        "updatedAt": "2025-06-13T13:51:43.160Z"
      },
      {
        "id": "b7a87ca8-c26e-4a77-befa-c5656fd7e0fc",
        "userId": "K0xp0nlqZtUl5wHY8vdOgPb7UQY2",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T13:51:32.597Z",
        "updatedAt": "2025-06-13T13:51:48.379Z"
      },
      {
        "id": "d683037f-62f9-4cd4-8481-7f9113b578b2",
        "userId": "H8nfUyZKCrO2vprK5QCI6PxyXpy2",
        "organizationId": "2b98dad4-8486-4b15-910a-333813e925f8",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T13:51:53.848Z",
        "updatedAt": "2025-06-13T13:51:53.848Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 588.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=f33c6bb6-bed0-46ce-8280-c2c7fdaafb2a (623.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:03 GMT",
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

**⏱️ Duration:** 623.1 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/f33c6bb6-bed0-46ce-8280-c2c7fdaafb2a (1047.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:04 GMT",
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

**⏱️ Duration:** 1047.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/b7a87ca8-c26e-4a77-befa-c5656fd7e0fc (545.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:04 GMT",
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

**⏱️ Duration:** 545.2 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/20c1f286-bf53-413a-9d07-2546a07e0420 (477.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:05 GMT",
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

**⏱️ Duration:** 477.1 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/83dae7a1-dbaf-4e35-a21a-4784d77541ad (486.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:05 GMT",
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

**⏱️ Duration:** 486.6 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/04d3999f-7366-450e-bb4e-96495356b82a (511.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:06 GMT",
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

**⏱️ Duration:** 511.3 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/731e40c8-4b27-4c19-8ba9-ce27bbf50f98 (674.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:06 GMT",
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

**⏱️ Duration:** 674.3 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/f0d8aad5-8056-4889-b8b6-429ee1b51647 (478.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:07 GMT",
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

**⏱️ Duration:** 478.2 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/d683037f-62f9-4cd4-8481-7f9113b578b2 (566.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:08 GMT",
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

**⏱️ Duration:** 566.6 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/2b98dad4-8486-4b15-910a-333813e925f8 (913.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNjg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI2ODgsImV4cCI6MTc0OTgyNjI4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.byLViJ9kjZdwyQYGT6xIfMgmYEiBcyKG3K6uBD-WAem0JIwOqefy5FstMFHH-S3SAOGDnPDu5GoFvrxC7Ab_q6CkctY2rqLcKepX3E-orhbIjfyb6WpPTJ26TnD6PQDDIKtbYkqOjIicrmQrRCgqyycx9zzDB0SKJwpnBm90Iy93zEx68-5OKO5_Ck9Q--3jltZIiH_LYR2No-HN1D5WeUTE_2WsoY9Btn3FM05IvtWMzOdyXp50F3TQOUk9TppuFfuyI28vbnkNKdny-Ei_II9Hv1ONwjnox2jOoI1AVfsY_1RPw2poadFoNq8dhuTKcL85tw5MsuyQrmKEzLS1UQ"
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
    "date": "Fri, 13 Jun 2025 13:52:08 GMT",
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

**⏱️ Duration:** 913.5 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (362.6ms)</summary>

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
    "etag": "W/\"6aa-lEkIW8txI8cBO2hYtIlpjQSm45k\"",
    "date": "Fri, 13 Jun 2025 13:52:09 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzI5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MjksImV4cCI6MTc0OTgyNjMyOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YOk7XXgUhIiJRDsi2lQ1Y6Zp28Zvi7M5bOxlFbd-4xk0DKvADQ58gYRE7-sdF4d1ZmJGH5_GNM_5rQh24LUibtDQwJkOl_jfkZh2H2diamclxDx96kk8gJolKIsYt7FHLnDONLt6MkTxKL_sb99qLm6i8CYbt33LAFObP8BhhMNQ7aLIAMVusW1WsHaWfJZblkmg-4yFzkPRxZovubbjCjEPyuLJa9cVuwrZWpFfzTZPl4h8VAriAnqU47JGKalASfHzmaIu-LMp4AAnaDqU4BIfuUV0sXg3cCFh1koOLyhKnSycTNqEbpb21zNsoZfojlRPNJ_ruS-_upAZUvK2lw",
        "refreshToken": "AMf-vBx-Y629VeMICj_Y7RE1ILv3uXkwdRqf80-SKqzZ2pNbkqOj5OQKSmnXlrsL3MfgPAG1ESfkI6YJACMQGk68OvKuSrkPJlhEFv3Ubjy8jHy6uGY-I_g_rUm9cZbQJOsaJPGhvOz6fJJZKQj66SunU11wfE23pxq8r3jwlSeImIfKLubk5hgxYzG4sv_O9brpH-NnBpzzZ7sJPuVQPLUfhD0lxkbTgGy0NKzq0NwkhaVWMd38u8M5uXRSdkJJXNmiZMYPfIeB",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 362.6 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/YZt2AtePHJUjuoxgdE1c3pzusQu1 (1302.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzI5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MjksImV4cCI6MTc0OTgyNjMyOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YOk7XXgUhIiJRDsi2lQ1Y6Zp28Zvi7M5bOxlFbd-4xk0DKvADQ58gYRE7-sdF4d1ZmJGH5_GNM_5rQh24LUibtDQwJkOl_jfkZh2H2diamclxDx96kk8gJolKIsYt7FHLnDONLt6MkTxKL_sb99qLm6i8CYbt33LAFObP8BhhMNQ7aLIAMVusW1WsHaWfJZblkmg-4yFzkPRxZovubbjCjEPyuLJa9cVuwrZWpFfzTZPl4h8VAriAnqU47JGKalASfHzmaIu-LMp4AAnaDqU4BIfuUV0sXg3cCFh1koOLyhKnSycTNqEbpb21zNsoZfojlRPNJ_ruS-_upAZUvK2lw"
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
    "date": "Fri, 13 Jun 2025 13:52:10 GMT",
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

**⏱️ Duration:** 1302.7 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (336.5ms)</summary>

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
    "etag": "W/\"6aa-4571eVLwtT1tqZ979+udFIeR5+o\"",
    "date": "Fri, 13 Jun 2025 13:52:10 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzAsImV4cCI6MTc0OTgyNjMzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.M8ZNjwhc5rAk4ttq1oR8TBQ0RyevYP5IiJcIgJvBruRNjjTTJUFq14k3ipx6rxHdXFjs6kJPlMumycK2Rbwt9FeUl9pgrYKTgRgfNGi_xwGduqu4H-WlfYd0nJ9ZfZlSE0UEbNUJ-qvgmmvlU38ky80zRjLS2ht4pFGmguQCd96itjCFh1dbXxBp-vY2K9pMY2x88f5MhmZ5QydyASPYjSX-m5kgJhtr6wcGR1HGlb_LxKgPx8bzNTzyZgJMQYe1L4AwWUtfqlzPQsl24x63uAV66N_O-wqnJaQ6jtpfxDernLMiL585LxdXajZHh08ny--KHPuQ0TyB4cLcOOly2Q",
        "refreshToken": "AMf-vByJByuAlj5FK1W4AL_xX5LNyo0wb2wB72YRdYmjLlgAbcdYaH55JGFCVXECwJbdRXjDvRTfz-WlzW48fmVmib-JetGEEbpKW4Pwr80AORWzbFiP-zaJCOCwrO5oCCLS2ePGXt3Tvq7e-YKGcKhNgoehUnEFn7SxH0h_XpfiDocW-cJ_vPQkREz3OrNxzjhqk7M8_exizCyHMy4UWqwe8jzzdEYqqRqX9Z980kFMLN-oqSR55BJq6WCYBDfbDSLUoMEaA1EI",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 336.5 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/K0xp0nlqZtUl5wHY8vdOgPb7UQY2 (1375.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzMwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzAsImV4cCI6MTc0OTgyNjMzMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.M8ZNjwhc5rAk4ttq1oR8TBQ0RyevYP5IiJcIgJvBruRNjjTTJUFq14k3ipx6rxHdXFjs6kJPlMumycK2Rbwt9FeUl9pgrYKTgRgfNGi_xwGduqu4H-WlfYd0nJ9ZfZlSE0UEbNUJ-qvgmmvlU38ky80zRjLS2ht4pFGmguQCd96itjCFh1dbXxBp-vY2K9pMY2x88f5MhmZ5QydyASPYjSX-m5kgJhtr6wcGR1HGlb_LxKgPx8bzNTzyZgJMQYe1L4AwWUtfqlzPQsl24x63uAV66N_O-wqnJaQ6jtpfxDernLMiL585LxdXajZHh08ny--KHPuQ0TyB4cLcOOly2Q"
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
    "date": "Fri, 13 Jun 2025 13:52:12 GMT",
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

**⏱️ Duration:** 1375.3 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (277.9ms)</summary>

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
    "etag": "W/\"6aa-LUl2ET0xaK/Tsu7E6qlfiF+VrUQ\"",
    "date": "Fri, 13 Jun 2025 13:52:12 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzMyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzIsImV4cCI6MTc0OTgyNjMzMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.j1sF7A7dAtSUs1pDjk53Fxvw4Hr1dBLRf0KYjQo-k3OHaV2cwxqBmpTzq_cynSagE0s9RLSXCWE4dN9ntPiWwZsjtrR32etqYxoKl78eqAPterVO0U4IYuQzVrsNVp8ux_IIzQSKSyVaxTLvgjMJjDVpEwXK8ceRY2kKToA3UDRF45Ih0_E10Vz5RGPv_uzY32bSHBdW8NEe4vgRx8adtHIdJ0OS0nFzfFwnkpuMh4OR_i32Y2h3fDX1HCN0MKbDk1h9zYJqUDT4fwXdRLqDG1bbTPDl66IbCdo0ZntChTG8n5E0b2PYiGh9AjjPd7M-WUqL-wTGAQgaipo0sBKCGQ",
        "refreshToken": "AMf-vBxFlw8B8r0SN2S0J3y6IXa7nD6hTJXGlZYVOINuxLR3aNXxG5DEejdOe8rsElh_7Uwgi2f75YNDkmDDp3TFpEzb5wsdOBubJfEwsLt9UmXw1lQwYmbILWGgcCgBQUk-kANUb_fs19NPF3ZuD9p8U_KV8s58zDZUd0q3iOQtj1LLfVxBnX_ljFz6BWHrB4uJaqXezpnWvUdnhsSA8XxFcmvMq6xbF9gS5Jj_3RR84GztNbSCzheKkEf8OrYvMFNS1Hwufq8Z",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 277.9 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/50r9TdFXeke8LzuyxcU6w8bJpmB3 (1492.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzMyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzIsImV4cCI6MTc0OTgyNjMzMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.j1sF7A7dAtSUs1pDjk53Fxvw4Hr1dBLRf0KYjQo-k3OHaV2cwxqBmpTzq_cynSagE0s9RLSXCWE4dN9ntPiWwZsjtrR32etqYxoKl78eqAPterVO0U4IYuQzVrsNVp8ux_IIzQSKSyVaxTLvgjMJjDVpEwXK8ceRY2kKToA3UDRF45Ih0_E10Vz5RGPv_uzY32bSHBdW8NEe4vgRx8adtHIdJ0OS0nFzfFwnkpuMh4OR_i32Y2h3fDX1HCN0MKbDk1h9zYJqUDT4fwXdRLqDG1bbTPDl66IbCdo0ZntChTG8n5E0b2PYiGh9AjjPd7M-WUqL-wTGAQgaipo0sBKCGQ"
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
    "date": "Fri, 13 Jun 2025 13:52:14 GMT",
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

**⏱️ Duration:** 1492.6 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (258.6ms)</summary>

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
    "etag": "W/\"6aa-ezXmCA4RUqS8LtHyPdOwR8gMKtM\"",
    "date": "Fri, 13 Jun 2025 13:52:14 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzM0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzQsImV4cCI6MTc0OTgyNjMzNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.j7zDB3bvQUFWfqZXlCsAQiESBsNc2gr7-kmUh9GmCUAl0w28o-CHAgArg8-Lm2LflVN832yeiYdmetW25O2gFWJIT9nPQ9LmYQG6udCptKC76wb6i6nPxkAX2p1qftBFJI0Mh-cffhKcP5XQGDYWxKgflQzRXFdIMlgQPHS7500lXwXBfQPnw9y5KtRSVZ3wid_cBwOzBDBkwaX36ta97s6OEvgEsWA3lObX24U_hWtJKOq85YZfW784K4Q-SRo8nJHr8ttX8yFy64VWjIrSbdlax_m1Qh1K9Lnnf1r-uNL5J_2L-238NgVHa-RcFvfmSM0Vfz_-jFj4Jn_BPprNyA",
        "refreshToken": "AMf-vBxFj23vy2EXBhhbOhWjfzwQuY5_RTcP0JQgrGYv7WoidSSBuAXEWPMmDlZsLzZYOHXePvYQN9Tdut2r-R33LWL-__cq-8lyDgNZtvMGfWXJnxT_Uo7vNKzNwsuxZUGL7Aky8aGrCaPboMEWN30-YgqtTVp4qFdez66hpyaMZnNIvnM83FeQ75FG_BEIf7ue4tzAIHsfACBmhKqpxDmN7cO73oKPdnPv7GNMuH3AvwPPhdtW7MrO3OVhr0AtsuUFMNoHG9Nq",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 258.6 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/KPWHn6b2LnhIr4PJ7pSwpX7lvq03 (1604.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzM0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzQsImV4cCI6MTc0OTgyNjMzNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.j7zDB3bvQUFWfqZXlCsAQiESBsNc2gr7-kmUh9GmCUAl0w28o-CHAgArg8-Lm2LflVN832yeiYdmetW25O2gFWJIT9nPQ9LmYQG6udCptKC76wb6i6nPxkAX2p1qftBFJI0Mh-cffhKcP5XQGDYWxKgflQzRXFdIMlgQPHS7500lXwXBfQPnw9y5KtRSVZ3wid_cBwOzBDBkwaX36ta97s6OEvgEsWA3lObX24U_hWtJKOq85YZfW784K4Q-SRo8nJHr8ttX8yFy64VWjIrSbdlax_m1Qh1K9Lnnf1r-uNL5J_2L-238NgVHa-RcFvfmSM0Vfz_-jFj4Jn_BPprNyA"
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
    "date": "Fri, 13 Jun 2025 13:52:15 GMT",
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

**⏱️ Duration:** 1604.2 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (247.2ms)</summary>

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
    "etag": "W/\"6aa-6Z3J5ojT62WxW7NTw0Nx+PfPGRw\"",
    "date": "Fri, 13 Jun 2025 13:52:16 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzYsImV4cCI6MTc0OTgyNjMzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VKechd2wDDwXTVvoiZtUMCTVP0uFawBoceFQqSwCsBkSH-lcOpbzLCn9pwI6_KrafeXlkQEh8TScq9gbkhZqnUGJysf-060Il8pQLF09AxYCM0x4VsTloPW4hzra8TyssMqUSdaNx74pTfU8t6AAPhLWTr4H46RuEoKpsEOKxdW1-WAyvOhapppdiESzttSseKSc2aB3ECgtfFVsWWND3kxpBCT9HVZ2gBAtOWTFFCVQp-2a38w37yxNNuZcKZ928jmwgeHHj5a-SsS2zVr1RxmUC-vfXRRBYl8gySXnxsTQ6ZShzZZ3SN2owu_gxF9U6VGHaz-YCTFNe_kENBkMKg",
        "refreshToken": "AMf-vBxrB4LPk4LgJPrvR2kShYuyaZae_46K8roXBO0wkWXL79imeyvDmxgOLybdxEQjNOhazjZEUwuS988MUWtLEAFd3VS2Na9iHHX6jeOd56pGrN15tp-jSU-T-sJRnfW2gctqBY94lvWeVJRis0cjd9J4TMYuS72wNzYKHCFqMKU1kcfoqCajvL43rjTnkTiVZwPQ875Xd66n37cz129BS3P1MLrVxp9cC8D1lu-rgbqpJA1EDvnHPMbELP3k6kECdt4lslDM",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 247.2 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/gIkc4AWfyrc3kVP8Oh06nUw8Rul2 (1333.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzYsImV4cCI6MTc0OTgyNjMzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VKechd2wDDwXTVvoiZtUMCTVP0uFawBoceFQqSwCsBkSH-lcOpbzLCn9pwI6_KrafeXlkQEh8TScq9gbkhZqnUGJysf-060Il8pQLF09AxYCM0x4VsTloPW4hzra8TyssMqUSdaNx74pTfU8t6AAPhLWTr4H46RuEoKpsEOKxdW1-WAyvOhapppdiESzttSseKSc2aB3ECgtfFVsWWND3kxpBCT9HVZ2gBAtOWTFFCVQp-2a38w37yxNNuZcKZ928jmwgeHHj5a-SsS2zVr1RxmUC-vfXRRBYl8gySXnxsTQ6ZShzZZ3SN2owu_gxF9U6VGHaz-YCTFNe_kENBkMKg"
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
    "date": "Fri, 13 Jun 2025 13:52:17 GMT",
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

**⏱️ Duration:** 1333.2 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (383.9ms)</summary>

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
    "etag": "W/\"6aa-9qUAzz+QG91ESFUoySh0HBrJ6oo\"",
    "date": "Fri, 13 Jun 2025 13:52:17 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzM3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzcsImV4cCI6MTc0OTgyNjMzNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.FeodwKhkAeXGzxWN1Uj_QcXU7rLguPnn5-9iTc7Ifw0vG8ryaYj25Q-q3J7w8cQ8z6nht9prA3RH8KQ7c4KJehYXO7jXltDPTDvf5X3gxMlXygeJdvDEFlscBf_I1j6jr0AJkLXGlqsGMaGe4RiH57hVcQSmczp9IvgJwSEi_nC0Yp2lC2s5va04cOnYN3k2nAaZviQOmU84RzpBMRg6mLl0JCRWhMpvWROhllgj22xemY9sB9uhDBW49kA_TrmCH9Nj1QAyOML6Zs5p2dJfsPUzZrbQuEchww8PMtKB8ZJOs-UyCLtOp2m_KuZgfqlLtDzHkVhQPtHKEYpbWaeSiQ",
        "refreshToken": "AMf-vBw2gUVynKNs3NV9lGAWvm1LNF75vPfvej1okpLuD4zewVtCTZoVjcUznGxDoX_DlxAQQt_NuuAy_SEFk1iZfQGT0FMXVZWysFvbQNLvSPEuRyZfpIE-bhI6zI7NPB7GN9JitauLhCrJP9218ykWlcovXIM1WDyv7FDOu7Wx5hVtOSVfgLKBSXqfRxLf2jgj8BvfN5SaMdxwUZfY9zpI8G97DMxSQntYu6t_UX22-h9ypdxO5CTTBEl7OT-vnY00zR7SOdQB",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 383.9 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/rlQjFGB8DyTu4FXJog5utu2zZ363 (1253.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzM3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzcsImV4cCI6MTc0OTgyNjMzNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.FeodwKhkAeXGzxWN1Uj_QcXU7rLguPnn5-9iTc7Ifw0vG8ryaYj25Q-q3J7w8cQ8z6nht9prA3RH8KQ7c4KJehYXO7jXltDPTDvf5X3gxMlXygeJdvDEFlscBf_I1j6jr0AJkLXGlqsGMaGe4RiH57hVcQSmczp9IvgJwSEi_nC0Yp2lC2s5va04cOnYN3k2nAaZviQOmU84RzpBMRg6mLl0JCRWhMpvWROhllgj22xemY9sB9uhDBW49kA_TrmCH9Nj1QAyOML6Zs5p2dJfsPUzZrbQuEchww8PMtKB8ZJOs-UyCLtOp2m_KuZgfqlLtDzHkVhQPtHKEYpbWaeSiQ"
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
    "date": "Fri, 13 Jun 2025 13:52:19 GMT",
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

**⏱️ Duration:** 1253.0 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (262.2ms)</summary>

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
    "etag": "W/\"6aa-MuifQFgMQ0aoJ35Bs3eBtSzfAMk\"",
    "date": "Fri, 13 Jun 2025 13:52:19 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzksImV4cCI6MTc0OTgyNjMzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.M3GMbVgH3cinpH92rNvClzhRM7pMeMlJD6ek1mpLiZ74QPu8Kj70QrWPmEJqRlgZXEehw5y5MqoXffHph4Hr6X3VW3gS8uKazEkcmqA1l_9ijUxXOlFdFL6ZsWCXpqSU8QbLpYlFUhNrrO4mOJlLo8VEvGxrJKoWllS1_zsCMsDWK5q3nUAJ4Q_zgO0oq_QxfGBry5o_vK4HNsttTQN5IaT9dF0roVBoLPY52OGhU5vNgLpsUWyDbc59ZjeI3-qQCAXdf6j7X63V5WrKfjYnvycccayqSjxcg1OSafwgVKa3hybfRfxku04vYcHgjxw9YQsp_8fvrFFyrO_iPYzVRA",
        "refreshToken": "AMf-vBwzSz7w3YRZWUlKIKxMmzZCs1TzeKbc91qBPY0XxNr44riF9xNTx2GtKsh6HhkE6zN8Qr87GSoDG2UlRsJqAAtBeffZajSQiQmIKGmv13AkN7E758fr6q5DDGtguDqxs_7uUx2oUX_CIbwQBVgQzRhMWR_DEiG593DsHX4YIe9plVKVki7l4W6QVfaSmktgkOrXP7EEpBwyazDxR0TBhsGh1bBZ7jS1Ob36YrUIyquV7H6SNXw_LLPi_js-nlyhMGgWub6v",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 262.2 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/wK9PdLCg45RtjIkHOWXeMt6QUt43 (1290.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3MzksImV4cCI6MTc0OTgyNjMzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.M3GMbVgH3cinpH92rNvClzhRM7pMeMlJD6ek1mpLiZ74QPu8Kj70QrWPmEJqRlgZXEehw5y5MqoXffHph4Hr6X3VW3gS8uKazEkcmqA1l_9ijUxXOlFdFL6ZsWCXpqSU8QbLpYlFUhNrrO4mOJlLo8VEvGxrJKoWllS1_zsCMsDWK5q3nUAJ4Q_zgO0oq_QxfGBry5o_vK4HNsttTQN5IaT9dF0roVBoLPY52OGhU5vNgLpsUWyDbc59ZjeI3-qQCAXdf6j7X63V5WrKfjYnvycccayqSjxcg1OSafwgVKa3hybfRfxku04vYcHgjxw9YQsp_8fvrFFyrO_iPYzVRA"
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
    "date": "Fri, 13 Jun 2025 13:52:20 GMT",
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

**⏱️ Duration:** 1290.7 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (348.9ms)</summary>

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
    "etag": "W/\"6aa-td3/MBhkmmeOMHazabWbc9T/ISM\"",
    "date": "Fri, 13 Jun 2025 13:52:21 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDEsImV4cCI6MTc0OTgyNjM0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hkFfPYxH0kiFzCkXheDsSpb6dAE_rXoosjlIdygfrYswyl9wWoOVKmPyXdmh5nB7S6xqXUwQJRtytS57XpiUdu7xCopMy3yf09YGkaXbqLQQzeeI436ostMgTxYFdNttNn72enFeDizgky5OOrOYpMoFpQYIpRxzDIJ9Uxr5t5ux1_k7ZMIzVij5WWsmgeeEG8QakVFRQrejf27U1sG5I15DfLlX3p7k39N9cqC0EXPpyo3tFzk0DfFwBa-_BW1Nkp5wZFlSCgHG-uhHOdTzR0KsY_qD0oT53kaECVFBKBm-rwUI6wGbUIEdoI4cBWayB4E0Gu9D3YbJukQ461H57A",
        "refreshToken": "AMf-vBxQa1I8i6oQYqhh7KcMy-Yb3e5X5cSvGLJmlt-mt30DWsLTplG7wvxaWavXzNStFJm-U8RMOMDergc198AQqo-FQIu1dkd-_N-bQyLHgcL7BDCzw1sm7I-FS4sIrT8ZKjE-qInzfn4vsAVUB5miaR-VIngh0zcOXSn6hfBSJaevZUlt02DTSPBFS42IFB6_cZ-JjiML3045BbN2zx6VurByd0OQkVUvRY7UxwRP5HCsiDwM07bguY6tVHXvFloa3J_VIJ1m",
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

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/BC5Kg7z5vkM4yYifwUbh75Uv2rE3 (1302.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDEsImV4cCI6MTc0OTgyNjM0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hkFfPYxH0kiFzCkXheDsSpb6dAE_rXoosjlIdygfrYswyl9wWoOVKmPyXdmh5nB7S6xqXUwQJRtytS57XpiUdu7xCopMy3yf09YGkaXbqLQQzeeI436ostMgTxYFdNttNn72enFeDizgky5OOrOYpMoFpQYIpRxzDIJ9Uxr5t5ux1_k7ZMIzVij5WWsmgeeEG8QakVFRQrejf27U1sG5I15DfLlX3p7k39N9cqC0EXPpyo3tFzk0DfFwBa-_BW1Nkp5wZFlSCgHG-uhHOdTzR0KsY_qD0oT53kaECVFBKBm-rwUI6wGbUIEdoI4cBWayB4E0Gu9D3YbJukQ461H57A"
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
    "date": "Fri, 13 Jun 2025 13:52:22 GMT",
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

**⏱️ Duration:** 1302.7 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (335.6ms)</summary>

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
    "etag": "W/\"6aa-g4Rbwq6Ss7VQcRGKyHhBMFGEb3o\"",
    "date": "Fri, 13 Jun 2025 13:52:22 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDIsImV4cCI6MTc0OTgyNjM0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UUR-X6p4UOcsGCL-NZfFzj7f7rWr0RB2-2IulhD1589F3XdC_U0Nu0cZPL8CywuvaaxmIWCrw-NW7vS_ZJLjk7ImC5F9pAi8Ts85QOHTcWKl1l4WJvOk1k8ap2TLDk_5nm7bXJOuxvUdfBduH47WCcvO5qc3vEVEgAIDrHbAd7ZO-AZQC6RpRqXe61Q9i0vApUnox5iis-BbOXS5nTcugyuC8Lr5jNx5QOqFEQL_ezTC8Js2hpe826he_UAdaTYJn7kHjYLm8kzX1jI0oPgo1xAglhOuIZUzFReKaJGqk8Zy56xXMfz_XQpQXaaIRK9frydtTEKr334zTToUtJDhAQ",
        "refreshToken": "AMf-vBwsbjpka5u2Kzqr13MPbRfOGJNnMBNnwHbqvP87_BWvJnELSnG3QTnHdvmd7ynD-fHhZkRVI78BbXbIEFJjKyT2Yg6qJMwKi4C1m9jFUwpIn0nx0cA22gkDDpoI3-PjljZab-6YETCGdYsI34L9TZLpVP84inlllJMBRVfApFpbtO6J-BNUHzeKZwkhXs2t9y17a3Q8oDBKD7y2pJN7Np1eYad7OoucVHoeONdb8Je5hBeoC4Nu_Ro_d1vNt4rAzM6ALo7N",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 335.6 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/sHQTOHd7SOf4hoywqsukzf4NRua2 (1290.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDIsImV4cCI6MTc0OTgyNjM0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UUR-X6p4UOcsGCL-NZfFzj7f7rWr0RB2-2IulhD1589F3XdC_U0Nu0cZPL8CywuvaaxmIWCrw-NW7vS_ZJLjk7ImC5F9pAi8Ts85QOHTcWKl1l4WJvOk1k8ap2TLDk_5nm7bXJOuxvUdfBduH47WCcvO5qc3vEVEgAIDrHbAd7ZO-AZQC6RpRqXe61Q9i0vApUnox5iis-BbOXS5nTcugyuC8Lr5jNx5QOqFEQL_ezTC8Js2hpe826he_UAdaTYJn7kHjYLm8kzX1jI0oPgo1xAglhOuIZUzFReKaJGqk8Zy56xXMfz_XQpQXaaIRK9frydtTEKr334zTToUtJDhAQ"
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
    "date": "Fri, 13 Jun 2025 13:52:24 GMT",
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

**⏱️ Duration:** 1290.9 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (347.8ms)</summary>

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
    "etag": "W/\"6aa-zbUbzBWYVpg1PTXtKIkWBmYkYhM\"",
    "date": "Fri, 13 Jun 2025 13:52:24 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDQsImV4cCI6MTc0OTgyNjM0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Nl1njJyKF8iZ5Q63YjyGuWb9EyQ1BpktSe7ZoLCB5afXF39KVhDqe63NgH-71Zf_YW5gHD02ZnKck6uU3gl5x6owutqoRiHXVPZmKDdVUUtBxsUIHVZY8lBnezqGEbIpUVK2g0a1dWFFX3xk2cbw7xWlYHHgKzRoujRyj7LYhhOdI5jA9J1g5UHcSNPAlxlzCDXfwppq4IfZpekRuU89qvByuCgkp_QTMo8Uznfo-GQuPF4yAgSlTvkGOYXNnwMTTHu2onu8DFwQ1RMZjRaVJpwu2D5vKgqj2OfUokx5VRQCUzBz97i0gmJzzca0lwmvk_GoTQ8yIOePKyGoAj7sWw",
        "refreshToken": "AMf-vBzl8t9x8J1RtcFzUeJIQx6PQkT1tNMrUoTPk9H2PTihYxl1roLVs-GAZ95R591g7ii_48gd95zm0uapeEKScEGWPXHObmQfnAng3OF8J8BqAhFTZBd0qmIt4qyfFdsnnfABASQfzFENkipyivXxz6cyIXOUVzh1UD2CkNftivNtbR0cVhzmCeVkM1RGjG4mgwCDjTTkx27RuTRQDvl2CnD7PHvx_AZrIYrKcu2Ejnw7u6oczuAfdLgyQDV78Fn5bHbGnrv6",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 347.8 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/H8nfUyZKCrO2vprK5QCI6PxyXpy2 (1352.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDQsImV4cCI6MTc0OTgyNjM0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Nl1njJyKF8iZ5Q63YjyGuWb9EyQ1BpktSe7ZoLCB5afXF39KVhDqe63NgH-71Zf_YW5gHD02ZnKck6uU3gl5x6owutqoRiHXVPZmKDdVUUtBxsUIHVZY8lBnezqGEbIpUVK2g0a1dWFFX3xk2cbw7xWlYHHgKzRoujRyj7LYhhOdI5jA9J1g5UHcSNPAlxlzCDXfwppq4IfZpekRuU89qvByuCgkp_QTMo8Uznfo-GQuPF4yAgSlTvkGOYXNnwMTTHu2onu8DFwQ1RMZjRaVJpwu2D5vKgqj2OfUokx5VRQCUzBz97i0gmJzzca0lwmvk_GoTQ8yIOePKyGoAj7sWw"
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
    "date": "Fri, 13 Jun 2025 13:52:25 GMT",
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

**⏱️ Duration:** 1352.2 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (252.7ms)</summary>

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
    "etag": "W/\"6aa-Cmhla9CPCK+KqAODKLYZKPgpu5A\"",
    "date": "Fri, 13 Jun 2025 13:52:25 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDUsImV4cCI6MTc0OTgyNjM0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SmlwK_RnjiysXs7Oc4rYSqAFSoz_nmpVHHLCv-28CsDC7MWZsSgCWo4tSNeRlOjDiEE1osgCk_lYrujYiZWw6hdd2mdAyNVwYOBrn8V8Myf6myQjLVDP_EbZGjDg4FpXyAdBBXdEQJX_ZJ15M98AuOUdBqHf9QMe62jqfRfAO-8HfZGxH2CqnDC2Bc1siI0F67EiqctPD5eptb8CxluLfwDDBm6aR9dq777KYvehNm1Mg8w7L_3puV1cRQbdvOIm9CW-nZZxuU-0BeFRrzvs4SG3CtZvQwm6pLcbkIgwfmn9Ftg2ksoyzhVfDC4VoDJKMx3s8r_MWOSGPL4_OnqUvg",
        "refreshToken": "AMf-vBxe9UU218LkWUmIsUyqrw-MnkFgfo31SEU1iIwC30VkuKrbn4dvpBGg3F8_vWqW_kC_bDWcfFDp8h7QO8PrD0i5fBay5nzhg0TQoix7aM1HGXm06Q_8WIHtUerAv8T2WJLJh0zMS8RePe7fjh4AiVnDPHqkaGZUv6tyN4QJn7xXQWqLu9StHDK8pNOQ6QrulD8Onp2wtN6gKtgYWvpPzDWtcH2KpXkE7qiPZQHHtc8ygKCiEmZf1dwnQXx1f90nE6TYpqBe",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 252.7 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/UKfkBYKlx3ZfPp3YAtFmATPVAPE2 (1398.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDUsImV4cCI6MTc0OTgyNjM0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SmlwK_RnjiysXs7Oc4rYSqAFSoz_nmpVHHLCv-28CsDC7MWZsSgCWo4tSNeRlOjDiEE1osgCk_lYrujYiZWw6hdd2mdAyNVwYOBrn8V8Myf6myQjLVDP_EbZGjDg4FpXyAdBBXdEQJX_ZJ15M98AuOUdBqHf9QMe62jqfRfAO-8HfZGxH2CqnDC2Bc1siI0F67EiqctPD5eptb8CxluLfwDDBm6aR9dq777KYvehNm1Mg8w7L_3puV1cRQbdvOIm9CW-nZZxuU-0BeFRrzvs4SG3CtZvQwm6pLcbkIgwfmn9Ftg2ksoyzhVfDC4VoDJKMx3s8r_MWOSGPL4_OnqUvg"
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
    "date": "Fri, 13 Jun 2025 13:52:27 GMT",
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

**⏱️ Duration:** 1398.1 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (281.3ms)</summary>

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
    "etag": "W/\"6aa-F+hE75zk5+2XRTQWpVuwJ9kXO44\"",
    "date": "Fri, 13 Jun 2025 13:52:27 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDcsImV4cCI6MTc0OTgyNjM0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eIZA1KkpD_OZmO29q-AoK_3H8qfbasKI13ZOFIcwOlE4hnvpqHcL1cEQUuRj7rz_yWHX1Aoo4Av7ihI6PGk-KBhkSe__BaQmMqNSy8TXFu-oBsUv02WgV2iif7QwJyZ1B_MupCRbxeGl24mkga5d_c_44JXq_2tTA0u4xVSvh75GsSqm1DB92olxDTDdkm2dfC0zUOswfWmtNC5Bn1eKV-E24OwohgoKb7uh1H8l2cf9TTUuAbh7V0q__GGjUM2Wwzup882txmV3ix0uJU3pXPJ1lKuYE8hqJa7-53OWlMCGZIesQSMMrwtAakcp2JjJJ0zlRzRiAKu8rQjXVub2Qg",
        "refreshToken": "AMf-vBxzbwsABRAcFEzAqc4xq2xKKxbblN75lHIlGXKT_XnpNmjLuUXqrlUVhDPhbxqRwgt-wL8QK708L-WeYEBoIT2G4lyNUTjnnFhR-IeJgRseasj9ZWu3z5kEqVwLoDYYWL7Wq8sdwXtfa_jiHQZyr1lZCQr8JCQMoGZHGrhuQRExbhvh2cgJQv11kDSFqdnOB-Idwm4sPDtE1cCEvoA1AA9EJL1hPsp2s2djZBPgUhZc-UIDWKoltBgjVoxASpXStXT5roK5",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 281.3 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/76hBWhCVYuengJNyZtfsAdefd3R2 (1328.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDcsImV4cCI6MTc0OTgyNjM0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eIZA1KkpD_OZmO29q-AoK_3H8qfbasKI13ZOFIcwOlE4hnvpqHcL1cEQUuRj7rz_yWHX1Aoo4Av7ihI6PGk-KBhkSe__BaQmMqNSy8TXFu-oBsUv02WgV2iif7QwJyZ1B_MupCRbxeGl24mkga5d_c_44JXq_2tTA0u4xVSvh75GsSqm1DB92olxDTDdkm2dfC0zUOswfWmtNC5Bn1eKV-E24OwohgoKb7uh1H8l2cf9TTUuAbh7V0q__GGjUM2Wwzup882txmV3ix0uJU3pXPJ1lKuYE8hqJa7-53OWlMCGZIesQSMMrwtAakcp2JjJJ0zlRzRiAKu8rQjXVub2Qg"
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
    "date": "Fri, 13 Jun 2025 13:52:29 GMT",
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

**⏱️ Duration:** 1328.9 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (298.6ms)</summary>

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
    "etag": "W/\"6aa-vniL1XySm608zevTsCJYa2zkhxU\"",
    "date": "Fri, 13 Jun 2025 13:52:29 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDksImV4cCI6MTc0OTgyNjM0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hmCjm3HBywPcLCTkxQ_9kf0EiKPimiDJMIuWeeQKMnlTWN4SRUPfgsDPxBfhwDFYHusafjQEobwr0TttfOjk_0L5U-xn4OoZwDNMqRoaIzjZfaXRGQhCeN0RKXaAjeSzQtvNEmpbpIhzJYYfs2ZIzbHmDVQNqhwrFgOyhfduKN6kOCxMYAO5dQAEQgO_6H5jOhrhyU3hcpGBWAjLMPyajR693RWn03fUqZSgzFpzAbiAGCJ8Xzav-zmmS-Dklz1XMcUQh7f8NlGjL1MLFOC9ZRRAuIg49DL7k9kAk81SnD3ZBaXUbTxVYeTGFsELqcBPHh0JlBtYxSPprkvfMxF3Xg",
        "refreshToken": "AMf-vBw-bDO92LWNvwJxHwLzxdCZ6Cgyw6cnAUD_EzLf5C8y2s4WokeEM6IQ2Xu0YY8Bmoel0ucw5Vs1OiDWRVghXhrk6EG8Pf4TVl1s1I8TfHk4RWY3dU8jhZThvEpm5YB4mXU0QqXAF_8sln7oR59meI7GTL9Km0zh2yRkY9ijWixdJrPOscZItE8bU_5Ki_I0huaeKjtZ2V2cDhR3LqGIZYZMshbzsl_TVEkfL5rriiCjxSanK-HWZcXUpdN_mu5VLTGs9TdL",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 298.6 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/giR97iQ78aNeT551OJTjdWTaO1R2 (1276.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIyNzQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjI3NDksImV4cCI6MTc0OTgyNjM0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hmCjm3HBywPcLCTkxQ_9kf0EiKPimiDJMIuWeeQKMnlTWN4SRUPfgsDPxBfhwDFYHusafjQEobwr0TttfOjk_0L5U-xn4OoZwDNMqRoaIzjZfaXRGQhCeN0RKXaAjeSzQtvNEmpbpIhzJYYfs2ZIzbHmDVQNqhwrFgOyhfduKN6kOCxMYAO5dQAEQgO_6H5jOhrhyU3hcpGBWAjLMPyajR693RWn03fUqZSgzFpzAbiAGCJ8Xzav-zmmS-Dklz1XMcUQh7f8NlGjL1MLFOC9ZRRAuIg49DL7k9kAk81SnD3ZBaXUbTxVYeTGFsELqcBPHh0JlBtYxSPprkvfMxF3Xg"
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
    "date": "Fri, 13 Jun 2025 13:52:30 GMT",
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

**⏱️ Duration:** 1276.8 ms  

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
- Test organization: Test Org for Memberships 1749822690328
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
