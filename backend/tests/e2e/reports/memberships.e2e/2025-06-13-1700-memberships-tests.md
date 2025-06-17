# E2E Test Report: memberships-tests

**Date:** 6/13/2025  
**Time:** 5:00:25 PM  
**Duration:** 61.97s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully | PASSED | 0.62s | Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully |
| ✅ Memberships E2E Tests Invite User to Organization Should fail to invite same user twice | PASSED | 0.58s | Memberships E2E Tests Invite User to Organization Should fail to invite same user twice |
| ✅ Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions | PASSED | 1.49s | Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions |
| ✅ Memberships E2E Tests Invite User to Organization Should invite user with different roles | PASSED | 8.97s | Memberships E2E Tests Invite User to Organization Should invite user with different roles |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by organization | PASSED | 0.63s | Memberships E2E Tests Get Memberships Admin should get memberships by organization |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by user | PASSED | 0.50s | Memberships E2E Tests Get Memberships Admin should get memberships by user |
| ✅ Memberships E2E Tests Get Memberships User should get their own memberships | PASSED | 0.43s | Memberships E2E Tests Get Memberships User should get their own memberships |
| ✅ Memberships E2E Tests Get Memberships Should fail without userId or organizationId | PASSED | 0.51s | Memberships E2E Tests Get Memberships Should fail without userId or organizationId |
| ✅ Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships | PASSED | 0.38s | Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships |
| ✅ Memberships E2E Tests Get Membership by ID Admin should get membership by ID | PASSED | 0.65s | Memberships E2E Tests Get Membership by ID Admin should get membership by ID |
| ✅ Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID | PASSED | 0.56s | Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID |
| ✅ Memberships E2E Tests Update Member Role Admin should update member role successfully | PASSED | 0.74s | Memberships E2E Tests Update Member Role Admin should update member role successfully |
| ✅ Memberships E2E Tests Update Member Role Should fail with invalid role | PASSED | 0.43s | Memberships E2E Tests Update Member Role Should fail with invalid role |
| ✅ Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions | PASSED | 0.57s | Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions |
| ✅ Memberships E2E Tests Remove Member Admin should remove member successfully | PASSED | 0.99s | Memberships E2E Tests Remove Member Admin should remove member successfully |
| ✅ Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions | PASSED | 2.13s | Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions |
| ✅ Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) | PASSED | 1.04s | Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations | PASSED | 0.41s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations | PASSED | 1.74s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations | PASSED | 1.19s | Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (619.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "d66vP7eGJ8VgTHzFseBDsscqhlB2",
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
    "etag": "W/\"174-T+kmvH4Pd1bbF8FjXPWh1LJAQ/A\"",
    "date": "Fri, 13 Jun 2025 14:59:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "6d0e35c1-f922-4e4c-89fe-9cfffc40e744",
      "userId": "d66vP7eGJ8VgTHzFseBDsscqhlB2",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T14:59:27.822Z",
      "updatedAt": "2025-06-13T14:59:27.822Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 619.0 ms  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (581.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "d66vP7eGJ8VgTHzFseBDsscqhlB2",
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
    "date": "Fri, 13 Jun 2025 14:59:28 GMT",
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

**⏱️ Duration:** 581.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (990.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1749826768482@example.com",
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
    "etag": "W/\"631-AAMMm5BXnRTX6wgZErtHpTj8amI\"",
    "date": "Fri, 13 Jun 2025 14:59:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "niWfb7aERdMp9aewRusVcrnRrcU2",
        "email": "no-perm-invite-1749826768482@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc2OCwidXNlcl9pZCI6Im5pV2ZiN2FFUmRNcDlhZXdSdXNWY3JuUnJjVTIiLCJzdWIiOiJuaVdmYjdhRVJkTXA5YWV3UnVzVmNyblJyY1UyIiwiaWF0IjoxNzQ5ODI2NzY4LCJleHAiOjE3NDk4MzAzNjgsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0OTgyNjc2ODQ4MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ5ODI2NzY4NDgyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.aXzgPJBT2K0A4fSj9LlTQ6z7NdsWtvFNbQgsy1lTRu0WK0eVuDV3dwPCnjwcFh5tokBmo1rm-C0gjEAY2pybI4hG5hwvpU4Y89oxFvyqfh55hwSRYrLwHZ5OnZW2RjRr_OIZ-nhMusMst_qlXa3EaeMBkj5T7cqP18xGDw73yX0tG6SZkg0Vzh-WPiwii0ExMB-l8vfT2QjY39Uiz35t8xCAmeRbbnvNDA39lQZ3m81ecJD39tZKT-vZLF0eaBZH3N9EKE3QWIdnEdVth5qRJ57QZ-zIiP5k7007NRnbeK3a8AtHWkqTsOc-2Ep926-s51Lno6AXFhsV8p8JNx50tg",
        "refreshToken": "AMf-vBzoeGhV08UzCcMew1C16tyaq5GFk-JCrjKbV7bCij5Ybv9kntRlknrygvtqly9M-hK67aqHr-JZleI0SfzQW9zmHswTZK3STsxleDygQaznFJlPVLzm5-s4W_tpvSHl9kFakySBV0vmeYS7BJALapRzU9tXU_zWbIVmDlyjtlHDn9Y9G6GaNKru38dL92D1Iju4P6-J2rA2FlWrBn4Uqj0iXEOfkdS-XAfVNtw53EeBAFnZmFMofcl-9biZLxxKF5_VbIcm",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 990.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (491.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc2NSwidXNlcl9pZCI6IlhXbjZYV0NlaTBhU2Uyek9QdVI1UTdNUXNHVDIiLCJzdWIiOiJYV242WFdDZWkwYVNlMnpPUHVSNVE3TVFzR1QyIiwiaWF0IjoxNzQ5ODI2NzY1LCJleHAiOjE3NDk4MzAzNjUsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNjc2NDA0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI2NzY0MDQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.QBr3crnAVSQ4DPWms1jE-lr1YCs-4O2OvESll1BqBnEW4hRJGKlTOKwjPXH8cwQcc8iB3pRzXbiwOd-TrKjek7SihRX85L52_eUGK10o2CFaALchfon7m5lZI5_O2MZ-iVhLe7hFESWX5AT05qqIJlzzlFVRShXo5Ze_jx3cSO7EvhsxGumOPT0VeEZ4HFuVgo6LuoJkxB9YIIL7gkDUII1H4AMnVEPi6MjntY14stgXMEAgXYblyO8Nc3WCdRVoSapXl2YaJ6vIj47GglNg56M9vC7pM6_wb3f-cQ5v-7Xpn_-3j-66iUtiwsSw1fAVSbgmi7Mpby0-jKwqn9kGgA"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "niWfb7aERdMp9aewRusVcrnRrcU2",
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
    "date": "Fri, 13 Jun 2025 14:59:29 GMT",
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

**⏱️ Duration:** 491.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 8.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1118.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1749826769970@example.com",
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
    "etag": "W/\"603-a8PMOFa8CnmoiytJKjreDsRUkBs\"",
    "date": "Fri, 13 Jun 2025 14:59:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "ZS6u5u9MfwW57jkTnALL9c3WxF52",
        "email": "admin-user-1749826769970@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc3MCwidXNlcl9pZCI6IlpTNnU1dTlNZndXNTdqa1RuQUxMOWMzV3hGNTIiLCJzdWIiOiJaUzZ1NXU5TWZ3VzU3amtUbkFMTDljM1d4RjUyIiwiaWF0IjoxNzQ5ODI2NzcwLCJleHAiOjE3NDk4MzAzNzAsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ5ODI2NzY5OTcwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0OTgyNjc2OTk3MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LL6taGDfjrh0jMSyhEbrVNrdwuzWyN5KyQR0F5tBYq4Z23rZt4OCb1gV0tTYT83gjJEUYq_fTKgXW0IBvk6gAULsr209a_qHjdFWysR3ZZXE0u5ToRmUiSKCF73b_q-dps_PLFaJpMjiVPXzyZrIVj0WwwI5ff2zmDBC_o8e92fdGFFUDRrgv-Ba_zj_5vAwcoaLb4Q8ltNBeAfN312NHGSpQjTm6H1GnKTsbrfxnR0X2z746JFSBoSOADu7GlkoxxlqS5ltFlFTZkLRkVJH20hjrSv6pAVgWHum-DXyMhr2WLeVawGG9XKIT7AeO9IgGq3CW75gl9EwlKDNXISGuw",
        "refreshToken": "AMf-vBxY328gU3mMvrN5Bcjpc51S4jX2cjg-x3XBaVTTU5UjxUJkJ8v5AZOo67U2o-VwXQnuIIY1zqnZsjc4ejS9KDmv0L1uXH11GtAyxe7uj2bCl3gdIAbTlX4oSSYpS14Aiww3Dx2o1Q7ArPbCtpaHa3u-iQhnYWAbr1DLcTm3x5pLnAgsRrbsrU5nHNjeH8zABzap_lf6xvd1yW0n2uql8FW3Z4Aenj0KkO6AHfs4rUgtJBielvE",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1118.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (589.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "ZS6u5u9MfwW57jkTnALL9c3WxF52",
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
    "etag": "W/\"173-/xkyVOomDFfJSWohYcgL4zHWfMM\"",
    "date": "Fri, 13 Jun 2025 14:59:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "58214d0e-6743-473d-b772-2933565d075e",
      "userId": "ZS6u5u9MfwW57jkTnALL9c3WxF52",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-13T14:59:31.605Z",
      "updatedAt": "2025-06-13T14:59:31.605Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 589.8 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1058.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1749826771679@example.com",
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
    "etag": "W/\"60d-u5z5cFB6xb15+zsxIcxDqXTYuwQ\"",
    "date": "Fri, 13 Jun 2025 14:59:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "rq2QTuSrBrdSYCEImmC4vdBjKo73",
        "email": "manager-user-1749826771679@example.com",
        "name": "Manager User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc3MiwidXNlcl9pZCI6InJxMlFUdVNyQnJkU1lDRUltbUM0dmRCaktvNzMiLCJzdWIiOiJycTJRVHVTckJyZFNZQ0VJbW1DNHZkQmpLbzczIiwiaWF0IjoxNzQ5ODI2NzcyLCJleHAiOjE3NDk4MzAzNzIsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDk4MjY3NzE2NzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDk4MjY3NzE2NzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TWnyEmT0du_u9B9VHU0w9OL_2f3RzdxzT3VLYBvGqCbG3EqSQCajWhASBVaFt3GYkZH9dLa9z2uzfDzV4-TqRCfS3FE7p-5QsBkS0X9VUAMrhVVDTy4E0iqxNqkZ7IPtxyFvyopXhfH9S7YLEPfT2uqGyTypwnqXa-DnIdXuwEzH7pa6bGnXXpzi88PL6lvsSsICsc7IqC5FG1AoPtvJPzDyJ828T6P2PQ7DsanckCPF0vG7PSCH4-j2ayjTtNIoBOD3XctkiDDJCep-Smgx2Tpg8TgP5f7MSVMlkriI3nNFXk9pNJ0Q_0hKj-8qaTJK1J8UVs_mjktG44qNIdHiTA",
        "refreshToken": "AMf-vByLAUWkjZm-zELuBM8dtAtCtY7tbY083RUN7zEpuIWZg1mfY6aLgBDuGDSesIyH-htKTFLYZpYcR5khnLmD6fl0-27kTvzcwty2aDCsDsSUPyE1gdPmXZJ8JnNwQm-Ya6_GWMDBWTzTdL9_II42RotMZf1-oleK3H_alhkDvJBgxCac3hDvjHyti-UKMBnlQGUUMO0HHQYq220zTHmDx00oHJfNBETHLcFXvdaZel8K74qj1FA",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1058.7 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (595.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "rq2QTuSrBrdSYCEImmC4vdBjKo73",
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
    "etag": "W/\"175-9908weidRApdP/XvvmyObGJGidY\"",
    "date": "Fri, 13 Jun 2025 14:59:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "2eb2e1e7-6467-4f10-aefe-e294f930260c",
      "userId": "rq2QTuSrBrdSYCEImmC4vdBjKo73",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T14:59:33.264Z",
      "updatedAt": "2025-06-13T14:59:33.264Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 595.6 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1202.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1749826773334@example.com",
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
    "etag": "W/\"62b-/h+50rA0oCJTfANU38V9xg+GFz4\"",
    "date": "Fri, 13 Jun 2025 14:59:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "rQncnoDXqKXklKyHyJZgpm5xarI2",
        "email": "moderator-user-1749826773334@example.com",
        "name": "Moderator User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc3MywidXNlcl9pZCI6InJRbmNub0RYcUtYa2xLeUh5SlpncG01eGFySTIiLCJzdWIiOiJyUW5jbm9EWHFLWGtsS3lIeUpaZ3BtNXhhckkyIiwiaWF0IjoxNzQ5ODI2NzczLCJleHAiOjE3NDk4MzAzNzMsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0OTgyNjc3MzMzNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ5ODI2NzczMzM0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.erScGv0DPBM68i_Hrc6q-zulABgaHq7nz1NErWr-bKCsONQtgD2p6lTxLaO6RjHTpTw_0l_XHFnnwHgnPm2dsul4TSB0CrFmOjhO-OWh99Oa-N6u2EfxgUl56lPhQdJWjzJ2RMKsSobKLa-eYI0oiMvvxzkRvNZH8UohaJcFKcILYcAOSqiD1fnWy0k6G61tVvIzhjkuWB1TcdquTf5oajMQq43RwWd5UExJHEr0Ydi6vcLot7hi3mxujJ0M7EIngjLeSklwH-r5rizkpTOK0Y2bMAacG-HlWROn6uSwz5qK64GK0LhhekTlDQgP3Iq4gLFfEHxm59MwNG7wlSKUSA",
        "refreshToken": "AMf-vBy23pC-cbEd-JNeBpFixprGgrNgWqUjPFypWcLWFXS57P1BuiMSO5Ekb1P0USQp5-vMSRygwxwhgVcdFgx3g7Hk2f3J9goTxwQEVpom5RmPGGiQMExuUownsgnkKCjmKmAN2r1E2qi-ql7FTxX3t4gBNlv4wo4CJIAMD3waSBqYLZ8jm0mJcdmFwVHVKLGf_6XL52iLVUItkbzG_iglCnyU9E-S_pPcPo7HvePWUHzigD4IafdaYgLQpdg_j6QSk1Y4x2xD",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1202.6 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (622.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "rQncnoDXqKXklKyHyJZgpm5xarI2",
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
    "etag": "W/\"177-+kULBHd/VUC8AsspuPW+AlAD+EA\"",
    "date": "Fri, 13 Jun 2025 14:59:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "b0441972-8fe3-49f3-bbdb-ce8af5c9cb3b",
      "userId": "rQncnoDXqKXklKyHyJZgpm5xarI2",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-13T14:59:35.092Z",
      "updatedAt": "2025-06-13T14:59:35.092Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 622.8 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1336.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1749826775160@example.com",
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
    "etag": "W/\"62b-sVzE9o6B3oqOv3fsQbMz8PsYR+s\"",
    "date": "Fri, 13 Jun 2025 14:59:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "bZi6XGmP4rRsvJ8BinvX1FcqDRs2",
        "email": "volunteer-user-1749826775160@example.com",
        "name": "Volunteer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc3NSwidXNlcl9pZCI6ImJaaTZYR21QNHJSc3ZKOEJpbnZYMUZjcURSczIiLCJzdWIiOiJiWmk2WEdtUDRyUnN2SjhCaW52WDFGY3FEUnMyIiwiaWF0IjoxNzQ5ODI2Nzc1LCJleHAiOjE3NDk4MzAzNzUsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0OTgyNjc3NTE2MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ5ODI2Nzc1MTYwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.gSA6zzNzTlwKGY9BUClA3gsnMZWYynJuJ_--Bbme3SFrgGYcPrO1ksXbHG_XebQiYoXNoRJSHH9v8HBg8Nr4-USXMzDS5Z2mPSIE5xlS7hYIbnycqCuTHATaac7JnSQuch4tT5Wcxa1hI_VKl6w_iDhqiATI0Sps4tKH-bNCREFqOwUT5SbOrcDblnYKCfe2TUhZgz4DdIBMr47NPiud_t_GSufjjDMLLW4NQja12yMb4iNwfQjwQpLl2NklhFyhjVika3lPEwST6zrM2GAn0fUCJJnQug7ohYGH3iiqC7FHJleaRtGTZpmPNeSVx5-9LsMSssgsAhUM38nCRX-U2A",
        "refreshToken": "AMf-vBy6Gw3QXNUuMwqvC5vwlfJ5nu9xNcNcVkr07I_QFIQnUGafBsEdE3dyIRNJXxqitaB3zKLxVmz93XhsXHxMIiJGtfuLE0XlZjPrURbOzpIV7SfaFZYwRF02V2ovaicdLQUDNqQblY8MNzLBnpgIzhsWyCUnTHeXNDN5fYGHT4bSwdqXYim17G72wmHIrzagC-5GMz9I3a_bnno8PqB9JhcE8HflxuhQr98NNIEK4Jf4I8yoU0IE0h1AJkiwucj4YgFKMsMx",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1336.8 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (599.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "bZi6XGmP4rRsvJ8BinvX1FcqDRs2",
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
    "etag": "W/\"177-09hKIR4+ODxrCExu7gYVGZrmyZc\"",
    "date": "Fri, 13 Jun 2025 14:59:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "7569faf3-50a3-4707-87d9-6983a5d1514b",
      "userId": "bZi6XGmP4rRsvJ8BinvX1FcqDRs2",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T14:59:37.027Z",
      "updatedAt": "2025-06-13T14:59:37.027Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 599.0 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1168.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1749826777096@example.com",
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
    "etag": "W/\"611-oAK5Quya9V3lKolnyeEbBvmLsF4\"",
    "date": "Fri, 13 Jun 2025 14:59:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "lJ6CRRmyQ3TeHVxnEM35Fgmp9bE2",
        "email": "observer-user-1749826777096@example.com",
        "name": "Observer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc3NywidXNlcl9pZCI6ImxKNkNSUm15UTNUZUhWeG5FTTM1RmdtcDliRTIiLCJzdWIiOiJsSjZDUlJteVEzVGVIVnhuRU0zNUZnbXA5YkUyIiwiaWF0IjoxNzQ5ODI2Nzc3LCJleHAiOjE3NDk4MzAzNzcsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ5ODI2Nzc3MDk2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0OTgyNjc3NzA5NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dbWWVNFHY0cxggmCRL5LYu_xTfOqTILko3LkUD7JMX9JsYATApBepLlBgdyXBWTxc98jsHuGbWeEnQb11lojc6gHMdybeGQ6Vwe9obTzH8v62AAFl9rIWdika13HZmMi7G2306dRiq3LonqAb2qfMif1tMWWdNjB93V_4mEhTM9_kSQkTf2hsRDYrPl-QCoZZ8usQfOuI_LonBLDul5y64cCa4XzlODMGOmioUp6pOmV5BKPZwkuPKu1WJH77vZ_fi8A5zLBcYPbhkCQrCv0B9Dh-jsBCN1lYGohTes7t7FK-0zlO77_H7-2N_gJztdVuJ6GDWu0INCK-7NVOkj_VQ",
        "refreshToken": "AMf-vByAfteoMdeCk3EOJcr4_l4mweK7pMDi19FFu_EpKwtBW3OWvPQxCBZyalko_W9KWbX4sg9OUCkVCBvo-5iym68SiFJW-0jiBp2zQN-e0aerXdf_bvO2EobJmpRcMBA4xscfxUVCzPVW1cGH2X0fTe1XU2RPVyIf4q8kxX4z13un_6IMIuGgnTrnl9GbvNcEzEGztAN9c4ZvCMbczLqXDZf1-fAEaP29my_TNgsLFLO4EPwe2sk",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1168.9 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (673.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "lJ6CRRmyQ3TeHVxnEM35Fgmp9bE2",
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
    "etag": "W/\"176-VINb8oathvDT9qdxj525kwKmz6g\"",
    "date": "Fri, 13 Jun 2025 14:59:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "76366115-0bce-4bbf-ad71-493effa2274d",
      "userId": "lJ6CRRmyQ3TeHVxnEM35Fgmp9bE2",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-13T14:59:38.871Z",
      "updatedAt": "2025-06-13T14:59:38.871Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 673.1 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=85ff3976-cf0b-4b25-8aee-bd082624d9d1 (620.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "etag": "W/\"625-TAnwGu19bh7C9OOUMdulJ+LK3QM\"",
    "date": "Fri, 13 Jun 2025 14:59:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "6d0e35c1-f922-4e4c-89fe-9cfffc40e744",
        "userId": "d66vP7eGJ8VgTHzFseBDsscqhlB2",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-13T14:59:27.822Z",
        "updatedAt": "2025-06-13T14:59:27.822Z"
      },
      {
        "id": "58214d0e-6743-473d-b772-2933565d075e",
        "userId": "ZS6u5u9MfwW57jkTnALL9c3WxF52",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T14:59:31.605Z",
        "updatedAt": "2025-06-13T14:59:31.605Z"
      },
      {
        "id": "2eb2e1e7-6467-4f10-aefe-e294f930260c",
        "userId": "rq2QTuSrBrdSYCEImmC4vdBjKo73",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T14:59:33.264Z",
        "updatedAt": "2025-06-13T14:59:33.264Z"
      },
      {
        "id": "b0441972-8fe3-49f3-bbdb-ce8af5c9cb3b",
        "userId": "rQncnoDXqKXklKyHyJZgpm5xarI2",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T14:59:35.092Z",
        "updatedAt": "2025-06-13T14:59:35.092Z"
      },
      {
        "id": "7569faf3-50a3-4707-87d9-6983a5d1514b",
        "userId": "bZi6XGmP4rRsvJ8BinvX1FcqDRs2",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T14:59:37.027Z",
        "updatedAt": "2025-06-13T14:59:37.027Z"
      },
      {
        "id": "76366115-0bce-4bbf-ad71-493effa2274d",
        "userId": "lJ6CRRmyQ3TeHVxnEM35Fgmp9bE2",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T14:59:38.871Z",
        "updatedAt": "2025-06-13T14:59:38.871Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 620.0 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (497.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 14:59:40 GMT",
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

**⏱️ Duration:** 497.7 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=XWn6XWCei0aSe2zOPuR5Q7MQsGT2 (430.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc2NSwidXNlcl9pZCI6IlhXbjZYV0NlaTBhU2Uyek9QdVI1UTdNUXNHVDIiLCJzdWIiOiJYV242WFdDZWkwYVNlMnpPUHVSNVE3TVFzR1QyIiwiaWF0IjoxNzQ5ODI2NzY1LCJleHAiOjE3NDk4MzAzNjUsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNjc2NDA0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI2NzY0MDQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.QBr3crnAVSQ4DPWms1jE-lr1YCs-4O2OvESll1BqBnEW4hRJGKlTOKwjPXH8cwQcc8iB3pRzXbiwOd-TrKjek7SihRX85L52_eUGK10o2CFaALchfon7m5lZI5_O2MZ-iVhLe7hFESWX5AT05qqIJlzzlFVRShXo5Ze_jx3cSO7EvhsxGumOPT0VeEZ4HFuVgo6LuoJkxB9YIIL7gkDUII1H4AMnVEPi6MjntY14stgXMEAgXYblyO8Nc3WCdRVoSapXl2YaJ6vIj47GglNg56M9vC7pM6_wb3f-cQ5v-7Xpn_-3j-66iUtiwsSw1fAVSbgmi7Mpby0-jKwqn9kGgA"
  }
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
    "date": "Fri, 13 Jun 2025 14:59:40 GMT",
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

**⏱️ Duration:** 430.6 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (506.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
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
    "date": "Fri, 13 Jun 2025 14:59:41 GMT",
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

**⏱️ Duration:** 506.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.38s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (372.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc2NSwidXNlcl9pZCI6IlhXbjZYV0NlaTBhU2Uyek9QdVI1UTdNUXNHVDIiLCJzdWIiOiJYV242WFdDZWkwYVNlMnpPUHVSNVE3TVFzR1QyIiwiaWF0IjoxNzQ5ODI2NzY1LCJleHAiOjE3NDk4MzAzNjUsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNjc2NDA0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI2NzY0MDQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.QBr3crnAVSQ4DPWms1jE-lr1YCs-4O2OvESll1BqBnEW4hRJGKlTOKwjPXH8cwQcc8iB3pRzXbiwOd-TrKjek7SihRX85L52_eUGK10o2CFaALchfon7m5lZI5_O2MZ-iVhLe7hFESWX5AT05qqIJlzzlFVRShXo5Ze_jx3cSO7EvhsxGumOPT0VeEZ4HFuVgo6LuoJkxB9YIIL7gkDUII1H4AMnVEPi6MjntY14stgXMEAgXYblyO8Nc3WCdRVoSapXl2YaJ6vIj47GglNg56M9vC7pM6_wb3f-cQ5v-7Xpn_-3j-66iUtiwsSw1fAVSbgmi7Mpby0-jKwqn9kGgA"
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
    "date": "Fri, 13 Jun 2025 14:59:41 GMT",
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

**⏱️ Duration:** 372.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/6d0e35c1-f922-4e4c-89fe-9cfffc40e744 (646.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "etag": "W/\"125-PebLkFRJSj8KSc403tmYUlaDDK8\"",
    "date": "Fri, 13 Jun 2025 14:59:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "6d0e35c1-f922-4e4c-89fe-9cfffc40e744",
      "userId": "d66vP7eGJ8VgTHzFseBDsscqhlB2",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T14:59:27.822Z",
      "updatedAt": "2025-06-13T14:59:27.822Z"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 646.3 ms  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (554.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
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
    "date": "Fri, 13 Jun 2025 14:59:42 GMT",
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

**⏱️ Duration:** 554.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Update Member Role Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.74s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6d0e35c1-f922-4e4c-89fe-9cfffc40e744 (736.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
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
    "etag": "W/\"179-AsalZwsXPkHV1WIniuQe38EVvB0\"",
    "date": "Fri, 13 Jun 2025 14:59:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member role updated to manager",
    "data": {
      "id": "6d0e35c1-f922-4e4c-89fe-9cfffc40e744",
      "userId": "d66vP7eGJ8VgTHzFseBDsscqhlB2",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T14:59:27.822Z",
      "updatedAt": "2025-06-13T14:59:43.225Z"
    },
    "messageKey": "memberships.role_updated",
    "language": "en"
  }
}
```

**⏱️ Duration:** 736.8 ms  

</details>


---

### Test: Memberships E2E Tests Update Member Role Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6d0e35c1-f922-4e4c-89fe-9cfffc40e744 (429.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
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
    "date": "Fri, 13 Jun 2025 14:59:43 GMT",
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

**⏱️ Duration:** 429.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6d0e35c1-f922-4e4c-89fe-9cfffc40e744 (570.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc2NSwidXNlcl9pZCI6IlhXbjZYV0NlaTBhU2Uyek9QdVI1UTdNUXNHVDIiLCJzdWIiOiJYV242WFdDZWkwYVNlMnpPUHVSNVE3TVFzR1QyIiwiaWF0IjoxNzQ5ODI2NzY1LCJleHAiOjE3NDk4MzAzNjUsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNjc2NDA0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI2NzY0MDQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.QBr3crnAVSQ4DPWms1jE-lr1YCs-4O2OvESll1BqBnEW4hRJGKlTOKwjPXH8cwQcc8iB3pRzXbiwOd-TrKjek7SihRX85L52_eUGK10o2CFaALchfon7m5lZI5_O2MZ-iVhLe7hFESWX5AT05qqIJlzzlFVRShXo5Ze_jx3cSO7EvhsxGumOPT0VeEZ4HFuVgo6LuoJkxB9YIIL7gkDUII1H4AMnVEPi6MjntY14stgXMEAgXYblyO8Nc3WCdRVoSapXl2YaJ6vIj47GglNg56M9vC7pM6_wb3f-cQ5v-7Xpn_-3j-66iUtiwsSw1fAVSbgmi7Mpby0-jKwqn9kGgA"
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
    "date": "Fri, 13 Jun 2025 14:59:44 GMT",
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

**⏱️ Duration:** 570.7 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (990.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1749826784374@example.com",
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
    "etag": "W/\"60d-2oLDFmsm1s0cIsU6ZN/fT7DoyMA\"",
    "date": "Fri, 13 Jun 2025 14:59:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "v30J4yEGk3V0LZypqYPifwcjsIj1",
        "email": "remove-user-1749826784374@example.com",
        "name": "User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc4NCwidXNlcl9pZCI6InYzMEo0eUVHazNWMExaeXBxWVBpZndjanNJajEiLCJzdWIiOiJ2MzBKNHlFR2szVjBMWnlwcVlQaWZ3Y2pzSWoxIiwiaWF0IjoxNzQ5ODI2Nzg0LCJleHAiOjE3NDk4MzAzODQsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0OTgyNjc4NDM3NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ5ODI2Nzg0Mzc0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.kEMf2H9im8x1BU0Wg1c9F8PZd-Z8y1oI49f04YtXa4TbD_vLXaMK0U_8AMKYFbA_U4UIP89sM1B24b5pA4yJZxcIbCzk_UEcrVxGtavy1toMu2fsNNoVyOVkMA7LtLB4ofWKO2zxeBClCp6rZvS-S4tIkB4mTJ37tbfDi9bXWWuioETHCTPv21P590kdsarPuJ7sGfVVl7AH4FmsnTo_Lo_fS9XdNBnrMMpkJpH7s9I52mYlWrqeYsKvgSsc9mU3DRdFDM38PLPuKcJ3MIEw87iAIxIiAxmm0k_ESqdPeo03u6DfcNNSDWJaC1mHDHpYAcoidkA7QGOIUgvPiQj3mg",
        "refreshToken": "AMf-vBzGeyEn-QWT_S4h-oPJtRKQGfbpNETN2VBWa_5tREXlpcvKLgi4aCwN-1aS5iAKKBM0j927eH22RCl6VrqTNKJSfZm1fDGz3k5EPNkOBjZUuB01-HEjjBMrEs28NL5E-RN8mWceRQx1MWVIWwgiVPA346JOESRSWIx9-X-sEpjGRHKlxpOKoFohzL2MXRFofgEw4JTdHPpWgjgFV2exlAEuBWz_NK6itXF1pRVDFWrFzckvryw",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 990.2 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (583.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "v30J4yEGk3V0LZypqYPifwcjsIj1",
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
    "etag": "W/\"177-yF+8RW2wUyG9Pbez6mJAy8WrYqs\"",
    "date": "Fri, 13 Jun 2025 14:59:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "6180198c-c1c0-498b-acb1-d478149f4fa8",
      "userId": "v30J4yEGk3V0LZypqYPifwcjsIj1",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T14:59:45.881Z",
      "updatedAt": "2025-06-13T14:59:45.881Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 583.7 ms  

</details>


---

### Test: Memberships E2E Tests Remove Member Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/6180198c-c1c0-498b-acb1-d478149f4fa8 (550.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 14:59:46 GMT",
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

**⏱️ Duration:** 550.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/6180198c-c1c0-498b-acb1-d478149f4fa8 (436.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
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
    "date": "Fri, 13 Jun 2025 14:59:46 GMT",
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

**⏱️ Duration:** 436.0 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.13s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1011.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1749826786943@example.com",
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
    "etag": "W/\"647-frdCpSIQQ2Y4i38gNZcFMsCboxI\"",
    "date": "Fri, 13 Jun 2025 14:59:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "TAUYCDhPt6e75obCNmSl7kVkRx53",
        "email": "another-remove-user-1749826786943@example.com",
        "name": "Another User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc4NywidXNlcl9pZCI6IlRBVVlDRGhQdDZlNzVvYkNObVNsN2tWa1J4NTMiLCJzdWIiOiJUQVVZQ0RoUHQ2ZTc1b2JDTm1TbDdrVmtSeDUzIiwiaWF0IjoxNzQ5ODI2Nzg3LCJleHAiOjE3NDk4MzAzODcsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ5ODI2Nzg2OTQzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0OTgyNjc4Njk0M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VAyIap3bpLIvRfuW3FXnzNoo7k-4BMsucgxQQG_AioSrt9XOQD0L5-cz6Zs-P-mLnOngqEV0zXVSIujPZdu0ltJmseX3I3AEsqhy4iJF12a27dCYXU9aw5UluVtfGOqcKmgtISX_ffzVSJXhbHIcX6TBSjhir7XbRQbPqex5D70F1jnx-TTO2BGhLUZsrEiICojZFulM69zV46pVOrAjS2zPo3C3102KOqvKLX59eSnjrUHcV2He2WK9GYSdxq1RehXF1txmcCeicp17pybNmxEX3vaRWOqg-GvXaXn_iYrz5TNENr2UuvBwe6fPPLqzhIFy1kbxYSM0JAbnJv3ddw",
        "refreshToken": "AMf-vBzXft8QiHq3fzWJ7EuyDHxGDaGWw8_COn-R5MGW6LmwMX9hVeUYrUC3lWQgC06C6fTyPb7b_MGhgerb5Xc2SOnu7BdXLi5dO9vupr7LyDiJ7-Q6ypYMiWG0PPraKfR1_GzNA2ErtFjyyYJ8IaeUR9MXbtSwOWf-AD-aqmb5xfFLJ7nnDUWrNN0hJFa1NKfCEXZLQoRLaMmGKwg6mVstBXtNrYHLV-LNNTrLyONG_zq1BVm2cI0vtXgDIZUa1wRTs9bGWR83",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1011.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (606.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "TAUYCDhPt6e75obCNmSl7kVkRx53",
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
    "etag": "W/\"177-N2nV+fCDY+l4tJZ/Ew4fhzt0ItU\"",
    "date": "Fri, 13 Jun 2025 14:59:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "e7f897a4-3cab-49fd-b9b2-e27baf6eae2f",
      "userId": "TAUYCDhPt6e75obCNmSl7kVkRx53",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T14:59:48.494Z",
      "updatedAt": "2025-06-13T14:59:48.494Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 606.2 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/e7f897a4-3cab-49fd-b9b2-e27baf6eae2f (509.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc2NSwidXNlcl9pZCI6IlhXbjZYV0NlaTBhU2Uyek9QdVI1UTdNUXNHVDIiLCJzdWIiOiJYV242WFdDZWkwYVNlMnpPUHVSNVE3TVFzR1QyIiwiaWF0IjoxNzQ5ODI2NzY1LCJleHAiOjE3NDk4MzAzNjUsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNjc2NDA0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI2NzY0MDQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.QBr3crnAVSQ4DPWms1jE-lr1YCs-4O2OvESll1BqBnEW4hRJGKlTOKwjPXH8cwQcc8iB3pRzXbiwOd-TrKjek7SihRX85L52_eUGK10o2CFaALchfon7m5lZI5_O2MZ-iVhLe7hFESWX5AT05qqIJlzzlFVRShXo5Ze_jx3cSO7EvhsxGumOPT0VeEZ4HFuVgo6LuoJkxB9YIIL7gkDUII1H4AMnVEPi6MjntY14stgXMEAgXYblyO8Nc3WCdRVoSapXl2YaJ6vIj47GglNg56M9vC7pM6_wb3f-cQ5v-7Xpn_-3j-66iUtiwsSw1fAVSbgmi7Mpby0-jKwqn9kGgA"
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
    "date": "Fri, 13 Jun 2025 14:59:49 GMT",
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

**⏱️ Duration:** 509.1 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (1128.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749826789075@example.com",
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
    "etag": "W/\"630-cgPtxjNkLOgqBKqiRGN5ThFkSIQ\"",
    "date": "Fri, 13 Jun 2025 14:59:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "MoV9qgKAVUOwAmpmilKFscxUer33",
        "email": "self-leave-user-1749826789075@example.com",
        "name": "Self Leave User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc4OSwidXNlcl9pZCI6Ik1vVjlxZ0tBVlVPd0FtcG1pbEtGc2N4VWVyMzMiLCJzdWIiOiJNb1Y5cWdLQVZVT3dBbXBtaWxLRnNjeFVlcjMzIiwiaWF0IjoxNzQ5ODI2Nzg5LCJleHAiOjE3NDk4MzAzODksImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjY3ODkwNzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjY3ODkwNzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.WHjXAv-S6FDPtRPBdzShLLiH8dVZ0qx0TBmN5jTuIGduKPbHG9CCAQnh16NJ0JpSnYfqomu5RJUi-NHQktwJT0ka-gPcqWp-A_LDv50OkQl2EBwAsL7CKVQs4jrBuLfLDZ9h3uDW_rhEE0gIbLZ-uhHTMwHBuyXuRMCJ71dRI5w5OiZmNY1hLWkCTdkCumJ6r4BZi59xvN0izehrCg5ABsi1HtaGinJ1hQExmrWR7-GvID6d8huf4-kwSU0_NHzPJwIKJwXnM6IP-IAq6Zx4xbZrQEisYc2ko1ASC8hnBZUyOwoI9dc89ZPRRQnrKPbNiWdetOq0Rfd5jOCeBkVc1A",
        "refreshToken": "AMf-vBwAN6Dh3ua7fBWasXKJKbvwVeieEx1FrpmAHWlZWEJnzl-qv4Nvt-Ljh_Pw8ACeyp7Y0nKEMfYfVPashZyVPQactFyI_VBElmRlFxya8buvSYaFUSuhv--7b-iqX_dZeYu42BwHZnu9pt_iQR20xKq0IF-EdkO5XiEtHU_ypJCNvi15Z-mbORqF-smbGlyKjxC7o4wJnc6TrkgMSLxgib70bdZtohhQ7e-2l4GaiwEjobD3W4L5eD7aLeEw31tDEVKOiedP",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1128.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (264.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749826789075@example.com",
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
    "etag": "W/\"614-1wUXtnhLt80ggbKrICk8VSdMVeY\"",
    "date": "Fri, 13 Jun 2025 14:59:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "MoV9qgKAVUOwAmpmilKFscxUer33",
        "email": "self-leave-user-1749826789075@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc5MCwidXNlcl9pZCI6Ik1vVjlxZ0tBVlVPd0FtcG1pbEtGc2N4VWVyMzMiLCJzdWIiOiJNb1Y5cWdLQVZVT3dBbXBtaWxLRnNjeFVlcjMzIiwiaWF0IjoxNzQ5ODI2NzkwLCJleHAiOjE3NDk4MzAzOTAsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjY3ODkwNzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjY3ODkwNzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OS8KHuqzpD_8fdTyD3VXg2fvujQKJnXYK8Hr04L3MqHDn9POsHM4gM4yis086j4A5b0er_j1PjKPAQXford5SDC5eEVK-KY6T4yGrff3kaD8fFgKDy6EcAibb0hRT-nj00nPKsf7ndO0KTrisbiz2CKVwv5NzJwCF8vyONyGEOelm-d5sZDu_mWCNtrjTLA5CjVcXWhzlOdbkFgYoyWGsBKPEn9tCKaTzF8Uelsip_2MLQLLTYzQxVZ0qgLZY66-RPo_F_MVkVhwx-84hXIGOJiRRpr_Q5VQomMNpywL7TmEQqIa8-21BebY--8T57GMyy5MH559LKRJHwj1xoEnsw",
        "refreshToken": "AMf-vBwalHCQu53LNDxSIHkhlLu1Y4AcQkLh7rNHB9ViW_H4psKmFLw_HFBoJJ5iLSUbTb12loMLg_TiB17vj-fi_uvQuuF6l6-5HargU6lV7km9kSGtjyA9Ng5BVC4A_dxfbZWKwvGX4901ft23iX2PdwWvbZsTY9vBdQuZ7qLSCILSWxCK9xvw95rtpxRgtr_I9i7cMEehIFr6Js5EiFdZSyNaeiSLDOcc9ibV_wbuVZygo1N6pA65sofszgGwkxvwwFrDt2Q7",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 264.8 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (658.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "MoV9qgKAVUOwAmpmilKFscxUer33",
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
    "etag": "W/\"174-bwrUvoK6Zayn3tK5s8lUaE6JQ0M\"",
    "date": "Fri, 13 Jun 2025 14:59:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "3cefc8c7-e558-4a1b-aecc-77c99420ad35",
      "userId": "MoV9qgKAVUOwAmpmilKFscxUer33",
      "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T14:59:51.061Z",
      "updatedAt": "2025-06-13T14:59:51.061Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 658.6 ms  

</details>


---

### Test: Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.04s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/3cefc8c7-e558-4a1b-aecc-77c99420ad35 (531.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc5MCwidXNlcl9pZCI6Ik1vVjlxZ0tBVlVPd0FtcG1pbEtGc2N4VWVyMzMiLCJzdWIiOiJNb1Y5cWdLQVZVT3dBbXBtaWxLRnNjeFVlcjMzIiwiaWF0IjoxNzQ5ODI2NzkwLCJleHAiOjE3NDk4MzAzOTAsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjY3ODkwNzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjY3ODkwNzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OS8KHuqzpD_8fdTyD3VXg2fvujQKJnXYK8Hr04L3MqHDn9POsHM4gM4yis086j4A5b0er_j1PjKPAQXford5SDC5eEVK-KY6T4yGrff3kaD8fFgKDy6EcAibb0hRT-nj00nPKsf7ndO0KTrisbiz2CKVwv5NzJwCF8vyONyGEOelm-d5sZDu_mWCNtrjTLA5CjVcXWhzlOdbkFgYoyWGsBKPEn9tCKaTzF8Uelsip_2MLQLLTYzQxVZ0qgLZY66-RPo_F_MVkVhwx-84hXIGOJiRRpr_Q5VQomMNpywL7TmEQqIa8-21BebY--8T57GMyy5MH559LKRJHwj1xoEnsw"
  }
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
    "date": "Fri, 13 Jun 2025 14:59:51 GMT",
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

**⏱️ Duration:** 531.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/3cefc8c7-e558-4a1b-aecc-77c99420ad35 (503.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
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
    "date": "Fri, 13 Jun 2025 14:59:52 GMT",
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

**⏱️ Duration:** 503.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1368.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749826792168@example.com",
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
    "etag": "W/\"630-fQcO0SaR6cupx7NsQZYjryuTttk\"",
    "date": "Fri, 13 Jun 2025 14:59:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "uRpCojbqnpaM7A8KGapzFay7zE83",
        "email": "other-org-admin-1749826792168@example.com",
        "name": "Other Org Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc5MiwidXNlcl9pZCI6InVScENvamJxbnBhTTdBOEtHYXB6RmF5N3pFODMiLCJzdWIiOiJ1UnBDb2picW5wYU03QThLR2FwekZheTd6RTgzIiwiaWF0IjoxNzQ5ODI2NzkyLCJleHAiOjE3NDk4MzAzOTIsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.AYTdylLzyTMkq9P0wkOgND_XhfO5f-teiIt9RetnsLy_91Qk8PyqFD0eI7PJNsgrVjKvjiwXaQj6l2nNUbYKYPR6Uuz4FEXF5Bs-E1uYszV4qrNMsIRV81Uwrk_odFvRfcGUxhhiYmPyRkRkTZv6z5ltKCDwrnk8VH64-g0DNxWYcmzEZqyyyghNlYLG9CROLyhn-_qNgckKXjq8acdIDdzIbXkT-8F4_5smJjAyKNh1jhV90zAhKoplCs2Jig9id0w-yDpaxAQiOF6lUjUtZCYniHZXXSdRs3C3Fiezdtgdiv5Aj_N1iKJ-JKUcIlgd53LJYc95INEPCfWCh-TZmQ",
        "refreshToken": "AMf-vByvD7CA83yHP4AJF9abi47EQJni4d625b1l0eJ0Xw4DzBpPmlLO2_Z3Ud9jwBEefjX871JoD9eOe5_PWsTLKa-E9jH-BsXhHxix7Dzn9W-LIztGs6g55U69I3b4iIlQZ9FO0aF2r1atDF41VdwaRkEXj68klzJdbIVdthOXpYVDg-C6sKr5TJ_JcMg3cCnjiKzCc9LUpXgd89BoMUdulWGjaZR_86TthpwjXTHa1YEOil6z-dmpL3UQ-ACoGimXcKKjZfvY",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1368.7 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (278.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749826792168@example.com",
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
    "etag": "W/\"614-/OXHcHmDNBgP38QzmICLaz5dUzQ\"",
    "date": "Fri, 13 Jun 2025 14:59:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "uRpCojbqnpaM7A8KGapzFay7zE83",
        "email": "other-org-admin-1749826792168@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc5MywidXNlcl9pZCI6InVScENvamJxbnBhTTdBOEtHYXB6RmF5N3pFODMiLCJzdWIiOiJ1UnBDb2picW5wYU03QThLR2FwekZheTd6RTgzIiwiaWF0IjoxNzQ5ODI2NzkzLCJleHAiOjE3NDk4MzAzOTMsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.jPeDaCZwIJynhoaHnD7r6iJAOBg8T6EhGYB1BSzqRe5IDjwNMNnUf8PJriA9nwamrq-Z6cFZn87ppujJifCaswxtt1HPcngVr9T-a6C-7-aDr2PfOIXmAkvkalSzufZIWeoul5SCWuRD2DCexHNbgsONErXMvA6multOnzTC8b14SsRQKmpFiJBwf-do27xcfGbQmBzBQoRhCXGcUOnr15NfAyGWIxw8abXM_5tlTNkeH84Y8Ze1hJXVqOV_L8QwBmY1iqUND88yKf2WEDvBD7U5PbKf1tg78tpWlHRpDgl1_675uTw8zLEAoJdKG2_379o6ct7hyGFkrvn2TYM4lw",
        "refreshToken": "AMf-vBwEf0dDxS6ml6fdScqrS_6pO6FxgbKRtje5oOJr_KUrb2mELabsvF0q32mfeFV2izFn9qT0iileeV1XjT04N2WkLyLu1RdutdoEjWouUy_5GD4dIE2RDWxCjd3Hrq0YgKW5VzdQTOOlBgbnHKjFtkSXdGAr16PX0Fjy4EtL5acPx6J-zkzu6aOxXt3_1eEdB-NdtXZasg6ZIbhaakp0k_qyQGzYY9Qk8ad9-IBNdLxfXNzz5JzpF9euV9CL0pLkz4tND6sT",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 278.4 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (475.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc5MywidXNlcl9pZCI6InVScENvamJxbnBhTTdBOEtHYXB6RmF5N3pFODMiLCJzdWIiOiJ1UnBDb2picW5wYU03QThLR2FwekZheTd6RTgzIiwiaWF0IjoxNzQ5ODI2NzkzLCJleHAiOjE3NDk4MzAzOTMsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.jPeDaCZwIJynhoaHnD7r6iJAOBg8T6EhGYB1BSzqRe5IDjwNMNnUf8PJriA9nwamrq-Z6cFZn87ppujJifCaswxtt1HPcngVr9T-a6C-7-aDr2PfOIXmAkvkalSzufZIWeoul5SCWuRD2DCexHNbgsONErXMvA6multOnzTC8b14SsRQKmpFiJBwf-do27xcfGbQmBzBQoRhCXGcUOnr15NfAyGWIxw8abXM_5tlTNkeH84Y8Ze1hJXVqOV_L8QwBmY1iqUND88yKf2WEDvBD7U5PbKf1tg78tpWlHRpDgl1_675uTw8zLEAoJdKG2_379o6ct7hyGFkrvn2TYM4lw"
  },
  "data": {
    "name": "Other Org 1749826793815",
    "description": "Other organization for cross-access test",
    "email": "other-org-1749826793815@example.com",
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
    "etag": "W/\"229-NsVHQ84g238f36pE5/9t1Ondcq0\"",
    "date": "Fri, 13 Jun 2025 14:59:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "3d2eb59e-b0a7-47cc-a5ea-bcbf2b82a22d",
      "name": "Other Org 1749826793815",
      "type": "shelter",
      "description": "Other organization for cross-access test",
      "logo": null,
      "address": "789 Other Org Boulevard",
      "phone": "+1122334455",
      "email": "other-org-1749826793815@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "uRpCojbqnpaM7A8KGapzFay7zE83",
      "createdAt": "2025-06-13T14:59:54.173Z",
      "updatedAt": "2025-06-13T14:59:54.173Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 475.6 ms  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=85ff3976-cf0b-4b25-8aee-bd082624d9d1 (406.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc5MywidXNlcl9pZCI6InVScENvamJxbnBhTTdBOEtHYXB6RmF5N3pFODMiLCJzdWIiOiJ1UnBDb2picW5wYU03QThLR2FwekZheTd6RTgzIiwiaWF0IjoxNzQ5ODI2NzkzLCJleHAiOjE3NDk4MzAzOTMsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.jPeDaCZwIJynhoaHnD7r6iJAOBg8T6EhGYB1BSzqRe5IDjwNMNnUf8PJriA9nwamrq-Z6cFZn87ppujJifCaswxtt1HPcngVr9T-a6C-7-aDr2PfOIXmAkvkalSzufZIWeoul5SCWuRD2DCexHNbgsONErXMvA6multOnzTC8b14SsRQKmpFiJBwf-do27xcfGbQmBzBQoRhCXGcUOnr15NfAyGWIxw8abXM_5tlTNkeH84Y8Ze1hJXVqOV_L8QwBmY1iqUND88yKf2WEDvBD7U5PbKf1tg78tpWlHRpDgl1_675uTw8zLEAoJdKG2_379o6ct7hyGFkrvn2TYM4lw"
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
    "date": "Fri, 13 Jun 2025 14:59:54 GMT",
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

**⏱️ Duration:** 406.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.74s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1311.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1749826794704@example.com",
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
    "etag": "W/\"639-6BJQaFrNo2TsRm0GJHzKyGBTZ9k\"",
    "date": "Fri, 13 Jun 2025 14:59:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "vTbTSmUOnfRrpw4MaEhp6olDAay1",
        "email": "cross-org-invite-1749826794704@example.com",
        "name": "Cross Org Invite User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc5NSwidXNlcl9pZCI6InZUYlRTbVVPbmZScnB3NE1hRWhwNm9sREFheTEiLCJzdWIiOiJ2VGJUU21VT25mUnJwdzRNYUVocDZvbERBYXkxIiwiaWF0IjoxNzQ5ODI2Nzk1LCJleHAiOjE3NDk4MzAzOTUsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ5ODI2Nzk0NzA0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0OTgyNjc5NDcwNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Z-q-4C9UZd-iO65YKnzs4uJl2BGAYPsJeCfdKIVsyCdZD1IF_KP_z5iS3TFkZAVuUAewcuDoGVpTs9bX7MLUCHqP-Xihgdt5CrNfbQXRk5j5yqLPATYQJUQQFdI1NUioAuEn147dnQHv2L0DT4vvARH-JKOglKf6QZYAKv2Nf8iqAyJ39X14aCjikQDLUf41HHrIAEZzHrYcdBsytISfboDbKYeSxOxkFezdO-_LM1Ye7HbplmqVJwXvT6TgkvKiyUiJuA-xMvVbzaVnNqQOvux02b-Vkf5k3laCcl4BG0HZM_AW7MP6rGPXAmvHRheeNXvcK8Wv83ljrne-nBTiQA",
        "refreshToken": "AMf-vBxXHjmUt5oi-NDSyp-VICYZ70D9yVXlO8-QExi-645dHWPRhOu4_sTW8Mya2Fqr2npKavfBNDocOKHCFMtJqYIFpTca7_QalGP_K871LZ6sZZyAisWvDmhMWPdHsUAl1oJ2mt0lbxpE99cmxE5_0ey2ukKLHTPYkbPVqu7Q4HlJJsqQEyY_0yQWEMGCuH35FFPfqLFGOyeUGQ1PhQ1M9wi90uIaBKqHA_ua0ECQyY4isyose05Fo0WEtLKy_8HpLiV65tCW",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1311.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (419.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNjc5MywidXNlcl9pZCI6InVScENvamJxbnBhTTdBOEtHYXB6RmF5N3pFODMiLCJzdWIiOiJ1UnBDb2picW5wYU03QThLR2FwekZheTd6RTgzIiwiaWF0IjoxNzQ5ODI2NzkzLCJleHAiOjE3NDk4MzAzOTMsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjY3OTIxNjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.jPeDaCZwIJynhoaHnD7r6iJAOBg8T6EhGYB1BSzqRe5IDjwNMNnUf8PJriA9nwamrq-Z6cFZn87ppujJifCaswxtt1HPcngVr9T-a6C-7-aDr2PfOIXmAkvkalSzufZIWeoul5SCWuRD2DCexHNbgsONErXMvA6multOnzTC8b14SsRQKmpFiJBwf-do27xcfGbQmBzBQoRhCXGcUOnr15NfAyGWIxw8abXM_5tlTNkeH84Y8Ze1hJXVqOV_L8QwBmY1iqUND88yKf2WEDvBD7U5PbKf1tg78tpWlHRpDgl1_675uTw8zLEAoJdKG2_379o6ct7hyGFkrvn2TYM4lw"
  },
  "data": {
    "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
    "userId": "vTbTSmUOnfRrpw4MaEhp6olDAay1",
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
    "date": "Fri, 13 Jun 2025 14:59:56 GMT",
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

**⏱️ Duration:** 419.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.19s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=85ff3976-cf0b-4b25-8aee-bd082624d9d1 (635.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "etag": "W/\"727-6qKcnLEbBluFsZqkq2dpA5OY4xs\"",
    "date": "Fri, 13 Jun 2025 14:59:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "58214d0e-6743-473d-b772-2933565d075e",
        "userId": "ZS6u5u9MfwW57jkTnALL9c3WxF52",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T14:59:31.605Z",
        "updatedAt": "2025-06-13T14:59:31.605Z"
      },
      {
        "id": "2eb2e1e7-6467-4f10-aefe-e294f930260c",
        "userId": "rq2QTuSrBrdSYCEImmC4vdBjKo73",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T14:59:33.264Z",
        "updatedAt": "2025-06-13T14:59:33.264Z"
      },
      {
        "id": "b0441972-8fe3-49f3-bbdb-ce8af5c9cb3b",
        "userId": "rQncnoDXqKXklKyHyJZgpm5xarI2",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T14:59:35.092Z",
        "updatedAt": "2025-06-13T14:59:35.092Z"
      },
      {
        "id": "7569faf3-50a3-4707-87d9-6983a5d1514b",
        "userId": "bZi6XGmP4rRsvJ8BinvX1FcqDRs2",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T14:59:37.027Z",
        "updatedAt": "2025-06-13T14:59:37.027Z"
      },
      {
        "id": "76366115-0bce-4bbf-ad71-493effa2274d",
        "userId": "lJ6CRRmyQ3TeHVxnEM35Fgmp9bE2",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T14:59:38.871Z",
        "updatedAt": "2025-06-13T14:59:38.871Z"
      },
      {
        "id": "6d0e35c1-f922-4e4c-89fe-9cfffc40e744",
        "userId": "d66vP7eGJ8VgTHzFseBDsscqhlB2",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T14:59:27.822Z",
        "updatedAt": "2025-06-13T14:59:43.225Z"
      },
      {
        "id": "e7f897a4-3cab-49fd-b9b2-e27baf6eae2f",
        "userId": "TAUYCDhPt6e75obCNmSl7kVkRx53",
        "organizationId": "85ff3976-cf0b-4b25-8aee-bd082624d9d1",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T14:59:48.494Z",
        "updatedAt": "2025-06-13T14:59:48.494Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 635.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=3d2eb59e-b0a7-47cc-a5ea-bcbf2b82a22d (554.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 14:59:57 GMT",
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

**⏱️ Duration:** 554.2 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/3d2eb59e-b0a7-47cc-a5ea-bcbf2b82a22d (865.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 14:59:58 GMT",
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

**⏱️ Duration:** 865.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/6d0e35c1-f922-4e4c-89fe-9cfffc40e744 (535.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 14:59:59 GMT",
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

**⏱️ Duration:** 535.7 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/58214d0e-6743-473d-b772-2933565d075e (647.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 14:59:59 GMT",
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

**⏱️ Duration:** 647.2 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/2eb2e1e7-6467-4f10-aefe-e294f930260c (470.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:00 GMT",
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

**⏱️ Duration:** 470.5 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/b0441972-8fe3-49f3-bbdb-ce8af5c9cb3b (592.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:00 GMT",
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

**⏱️ Duration:** 592.6 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/7569faf3-50a3-4707-87d9-6983a5d1514b (517.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:01 GMT",
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

**⏱️ Duration:** 517.3 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/76366115-0bce-4bbf-ad71-493effa2274d (486.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:01 GMT",
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

**⏱️ Duration:** 486.1 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/e7f897a4-3cab-49fd-b9b2-e27baf6eae2f (480.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:02 GMT",
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

**⏱️ Duration:** 480.6 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/85ff3976-cf0b-4b25-8aee-bd082624d9d1 (954.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2NzYzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY3NjMsImV4cCI6MTc0OTgzMDM2MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lj2J_W8uGuSXNzRCOEHkJqz8TY4Cg0JU4BaLj_kqiPGIBnaihY4FqM2X96OCI88H0Qg4A9bH_M86ammHvPUdPA-iBD9dZoTS955c0hWL834JDRBrFhEie2W9jnvvxwJcBQSHzMbMSnCkQtRjP23niW4n_51vsTeL4azSYSSD0Ydrpecr8Z_qrM2zzxinSiHBFO8KaJXoE81kPTQNvvJfRipWjagIbscSOWTmkH6VkZjd2MbS0lYYPZpLuB-KCiR8Hsw4d3Cc7l1c44Ufb7KUVrqntOovlbUD4CVx5LOzP5pMDvtAkkuHkzjYNfRPOXkLrie8IwrG41-5T1XwKVLAsw"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:03 GMT",
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

**⏱️ Duration:** 954.1 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (289.4ms)</summary>

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
    "etag": "W/\"6aa-P0qWh7G9eTRBKjKbf3uMBg3MMH8\"",
    "date": "Fri, 13 Jun 2025 15:00:03 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODAzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDMsImV4cCI6MTc0OTgzMDQwMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SuPsustAhxPgJOsRnCuRKQMOT8LCYTenkb7BjNMrLm0QUPDAZOtKHJQPeP6meWX-z3Csv_wQ4JZholCfSlemD5tdLzF7Tb1vVcCwTc_0kqu6yzpcxm_vsLJ7I_ukGfOXe710anTEvEW3KMl1VcgmN4AJEJ9VxKA_IGwxSQ6eq1PtF4rs2AmHSpLMKtYNe6E_hDai6dh0NiwxOnqGlqJXhyvFkO6muowVm1wusBCQ8C22EZXqmQ-Qexybplgkm05YIz1YsSD2wVVGZGfaVzK1nVO5ugO-aEm_93cWJrYgILHSELCM7afl8Oz7e2MZAMmsPYKWycpIwhIsWubnl5Xwkg",
        "refreshToken": "AMf-vByv8p610QMHxRYSj3EvUamM032vibycdPMckr-K4kyV11e-cIyU7jIBW2qxk9LNMicDrSgFPjOihRz1LH2xiJckNtMPPTEOE_QCbITb57Ug1wJUY2Qq31LDWz1Xp5_LOCgyujX-QNmaf5npBY_pifd9mqInvwAVz0VV9cXL63qpsqDLj9xZYOSMVhsx7RfYYFVPuSj9lJK5pqCWc6FWes1cwHBNyM26u0TNh-5u0FzHe9mTT5gaUeSL3zDkDag_mm-bJ2g_",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 289.4 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/XWn6XWCei0aSe2zOPuR5Q7MQsGT2 (1367.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODAzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDMsImV4cCI6MTc0OTgzMDQwMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SuPsustAhxPgJOsRnCuRKQMOT8LCYTenkb7BjNMrLm0QUPDAZOtKHJQPeP6meWX-z3Csv_wQ4JZholCfSlemD5tdLzF7Tb1vVcCwTc_0kqu6yzpcxm_vsLJ7I_ukGfOXe710anTEvEW3KMl1VcgmN4AJEJ9VxKA_IGwxSQ6eq1PtF4rs2AmHSpLMKtYNe6E_hDai6dh0NiwxOnqGlqJXhyvFkO6muowVm1wusBCQ8C22EZXqmQ-Qexybplgkm05YIz1YsSD2wVVGZGfaVzK1nVO5ugO-aEm_93cWJrYgILHSELCM7afl8Oz7e2MZAMmsPYKWycpIwhIsWubnl5Xwkg"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:04 GMT",
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

**⏱️ Duration:** 1367.8 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (318.4ms)</summary>

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
    "etag": "W/\"6aa-AZdN4G7XakCY5N9ClPYRoBw1d4k\"",
    "date": "Fri, 13 Jun 2025 15:00:05 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODA1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDUsImV4cCI6MTc0OTgzMDQwNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HSff7O6OkSBFmaQ5csUZX9iMt-XtXThxabEp-LnFSC8qUUPnzitXra5RjkLZZ4jhV0J-oSFx8G1q0RN3MjIrpw_U8PraAy4uw4tvPNItlxwOoQqzkjxUagdZMBgBwSkJpv68ksXnypjluVMbCf1zSDudHwaLrhUgJLUigiiSqpB_pCst-lC8fKX2Q0sokdsUOHqXYOlYKcTk_3fR6mhMpTA4zfzmwZct2OawiVdUKPRQrgjscqK7oLuPo8M3bOJtfQf5rHLFc56YPvAuwXChQ1y1EGmFXsCqZ4YRI1vl0DhPdnN2Pbc5aOZ5hMyWpujkMy6tOvuo711WRo1E907ozg",
        "refreshToken": "AMf-vBy1BMI9bI1vacaMzJ0FCUrB4fKcSL8LYrMZJcprw8IXWbsq-asEmsKdytZJ3HaaW421adtnFakFotra8hB5FGIPfFBjNH7OsKnZ008vdQv8JyN6PkhE_8RGzV8TQZz0F3WLUF83JnejkSnosbyrZqvTLqK4MwDagI1_lptwK_scPxgYaxJmjQgRlEKNbMq9o2VG8ICdHnz0U5vGCtDkfTDmCbzk7bzgVctd4aX6VDgD0sWP2few9gJhT5y1NDX2_1K64IdV",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 318.4 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/d66vP7eGJ8VgTHzFseBDsscqhlB2 (1338.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODA1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDUsImV4cCI6MTc0OTgzMDQwNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HSff7O6OkSBFmaQ5csUZX9iMt-XtXThxabEp-LnFSC8qUUPnzitXra5RjkLZZ4jhV0J-oSFx8G1q0RN3MjIrpw_U8PraAy4uw4tvPNItlxwOoQqzkjxUagdZMBgBwSkJpv68ksXnypjluVMbCf1zSDudHwaLrhUgJLUigiiSqpB_pCst-lC8fKX2Q0sokdsUOHqXYOlYKcTk_3fR6mhMpTA4zfzmwZct2OawiVdUKPRQrgjscqK7oLuPo8M3bOJtfQf5rHLFc56YPvAuwXChQ1y1EGmFXsCqZ4YRI1vl0DhPdnN2Pbc5aOZ5hMyWpujkMy6tOvuo711WRo1E907ozg"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:06 GMT",
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

**⏱️ Duration:** 1338.1 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (231.6ms)</summary>

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
    "etag": "W/\"6aa-Kzjw8g1HFthGVZoaJUyrm1jFnrI\"",
    "date": "Fri, 13 Jun 2025 15:00:06 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODA2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDYsImV4cCI6MTc0OTgzMDQwNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WVu8DxG5Lb9jvIMxZ7H7zKHurWewuUjVJhMcVZjvzIH5YRJ998oJCZxDj5WmvgWemhKx3jkxXv0h-TOY_-YRaqg8qDl0_s1tUR0zicB7rktQ6soEOz8IRa1TrBny8YJxX2WRoQw1ik2Em1Kj6HHL7aS4xiFA9_N5ju0SXx68VJ7gZ8XePwk2ksLO2lk_CTDrWw7FetZEXL2Ujop-zLAyTASMmF5I0cKn-wGipXj47M8CXYiEY7QDL_XFvkcTtRCJc59G5jIhxFpkZTjdAhfh-acm8ul1v-gneipnVfdBmeyK-t25GpUgWB_fcWbKyHYf0PB85j7G2w3Ykw5Dg-87pA",
        "refreshToken": "AMf-vBwkbNPGe91yP4VCcbKZoL88CTRH3tJ_8oK2fXxIBpwI9dYAFAwtdINBpKp9hfQw-9M4HoANMLqCqF9mYNz3gRpX1qoYZjnfdOwNXL5ZzH-Q-_l_enp-3xgTna-M7jecBoVaPh_9YdV8xHkD3kpGev2w17hqzVb0cmWVpqf5Uky6PzdSnrS6apvSXC5Td0vuFKS60CUh3j7qPxeF9qRKu7ArdFbBn7-7GP4THecZS4FBlVU7I4NbgnzVc-yyNTkiuxIDbVc-",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 231.6 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/niWfb7aERdMp9aewRusVcrnRrcU2 (1283.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODA2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDYsImV4cCI6MTc0OTgzMDQwNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WVu8DxG5Lb9jvIMxZ7H7zKHurWewuUjVJhMcVZjvzIH5YRJ998oJCZxDj5WmvgWemhKx3jkxXv0h-TOY_-YRaqg8qDl0_s1tUR0zicB7rktQ6soEOz8IRa1TrBny8YJxX2WRoQw1ik2Em1Kj6HHL7aS4xiFA9_N5ju0SXx68VJ7gZ8XePwk2ksLO2lk_CTDrWw7FetZEXL2Ujop-zLAyTASMmF5I0cKn-wGipXj47M8CXYiEY7QDL_XFvkcTtRCJc59G5jIhxFpkZTjdAhfh-acm8ul1v-gneipnVfdBmeyK-t25GpUgWB_fcWbKyHYf0PB85j7G2w3Ykw5Dg-87pA"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:08 GMT",
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

**⏱️ Duration:** 1283.6 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (261.2ms)</summary>

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
    "etag": "W/\"6aa-Wcfd4QCTKi2xVcatpJwvDmjHzME\"",
    "date": "Fri, 13 Jun 2025 15:00:08 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODA4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDgsImV4cCI6MTc0OTgzMDQwOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cK5DxjZT_4mvQBAZMmr4n-CoE1DNyUaumC7CRmUMcHcmP_3qJgzdisZ8hQDmULKRRQGjrLZwlDoJ6rUCCTyHBNWe1xvajuUzdioEo4ZfLpr4KlxQqQ1sGJ6k7j29SbuYEC5-TrHUXz5b-mbCE77FYrNkzFM65dCBLj6ulohKfvvUr9ZhzVSG77euzK7zHKT5SEmg1sXjGi3yUh9e63WYH2Ub6rGGq3-PraaTmMZWe6cf9DuCEGhL0JhkC5eJ3mItIvqp5jABaYbcC-C14P_rB665uKGzs-1fRA3-xuGU0EFmG3b1j918Tn1Y8UP6orw38UEiIG0X5f-qVzap05raBA",
        "refreshToken": "AMf-vBwRnXXcQ6lMny5ZEhKvcJ6p-ML5ox0E1iffqGIIsrY-3xGn0liFxj8RKXKqfQ5d0IPKar6cZk8WDR75FlRsvGGcIOL68W9te57vZvZwoUtDiG3PBnMuT75Ojdo1h0jwxLv7uDCikr3ivGMgP-bUHg22GtE1q_KW6_A560ni3ZE6y3Cm49BUtn63egKHTB_v92AF3jfsiIlj2uWuT_A99JmIVjq_KntzEipzjhaXoT1v2hyFZBVFoxscEkwIG5iumwWRyX1n",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 261.2 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/ZS6u5u9MfwW57jkTnALL9c3WxF52 (1374.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODA4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDgsImV4cCI6MTc0OTgzMDQwOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cK5DxjZT_4mvQBAZMmr4n-CoE1DNyUaumC7CRmUMcHcmP_3qJgzdisZ8hQDmULKRRQGjrLZwlDoJ6rUCCTyHBNWe1xvajuUzdioEo4ZfLpr4KlxQqQ1sGJ6k7j29SbuYEC5-TrHUXz5b-mbCE77FYrNkzFM65dCBLj6ulohKfvvUr9ZhzVSG77euzK7zHKT5SEmg1sXjGi3yUh9e63WYH2Ub6rGGq3-PraaTmMZWe6cf9DuCEGhL0JhkC5eJ3mItIvqp5jABaYbcC-C14P_rB665uKGzs-1fRA3-xuGU0EFmG3b1j918Tn1Y8UP6orw38UEiIG0X5f-qVzap05raBA"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:09 GMT",
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

**⏱️ Duration:** 1374.9 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (239.7ms)</summary>

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
    "etag": "W/\"6aa-IX0VxmPbCPpvZljO4XEh/wXR67c\"",
    "date": "Fri, 13 Jun 2025 15:00:09 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDksImV4cCI6MTc0OTgzMDQwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Lf7RrIdSLqG2Nvvp8PUJUaJFTr7L-yIgsG32s5AKwTJXD1ufX9REV_ip8RywbIwyTvRcrikGBL1IcMMSgEzwU44C3RXJJkx6qc2hOthaLeU8m3wW7l4vPMCA74BZDQXhOm-z-23tSznY0-1GANF2XESw9Ixw_ttZoo05umkQ7oNRLkk00oZfNemgUr9TcLNy1yjT5ccx_Qsxf0qb_Wp5cxfMFBw_fRzpCZOSx9e-JLetiIqWYwqNLux_TreZJa1vF9rp5cZ88QVU8BUfW31fmZD3fHrjw3NKykKNIta7SVqK9aas-KnEilfyVx8Ja7-sjic1oOjvNwE4BobM_BnjqA",
        "refreshToken": "AMf-vBz-DcCoWbNH4M2rI3w0Red9QT6aS91KjVbNE2Li7zKks-9iE4gklo8Tcye90XEr9ZoMQUSEnKpcdqE5I0GJFOJepb2EcK547cIRE_fT6O7UjJtJY68ay_-mpGj_DJgU8gvIrnr0zuhQdSplOxYKQpLawt37rqOBxGjHvaS0u1vW3YVdV7SkTFVFjCiimIMAwbjAQ0nPSj9FPKetHhMH8bWBxmVEs4mt0xii06km3TLjVYULZ9JYsSYlG62UyeG3d25Y_cgs",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 239.7 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/rq2QTuSrBrdSYCEImmC4vdBjKo73 (1406.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODA5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MDksImV4cCI6MTc0OTgzMDQwOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Lf7RrIdSLqG2Nvvp8PUJUaJFTr7L-yIgsG32s5AKwTJXD1ufX9REV_ip8RywbIwyTvRcrikGBL1IcMMSgEzwU44C3RXJJkx6qc2hOthaLeU8m3wW7l4vPMCA74BZDQXhOm-z-23tSznY0-1GANF2XESw9Ixw_ttZoo05umkQ7oNRLkk00oZfNemgUr9TcLNy1yjT5ccx_Qsxf0qb_Wp5cxfMFBw_fRzpCZOSx9e-JLetiIqWYwqNLux_TreZJa1vF9rp5cZ88QVU8BUfW31fmZD3fHrjw3NKykKNIta7SVqK9aas-KnEilfyVx8Ja7-sjic1oOjvNwE4BobM_BnjqA"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:11 GMT",
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

**⏱️ Duration:** 1406.1 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (283.1ms)</summary>

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
    "etag": "W/\"6aa-B/MM8Oi3FQUlZTKNmBvqRk+nj6A\"",
    "date": "Fri, 13 Jun 2025 15:00:11 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTEsImV4cCI6MTc0OTgzMDQxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BXT1ZpfIt609LtYs-t2Ga5yZmX9rApBAqn-DD7lLMdd-haBbQkrEIn9IIruNjXe3D1zS-XByF0ymWu7wUQTyHgRZq59GncdLlsjs50m10e74aNvigTdRu9GfZ58EyRYCvWNHqqboi3SuQMuDT_r5lcyV54DmIkngqzFXU8x-j4OVbcoh3dQoPrYLU9t5RiHICAvwezTsHel9-jhhuE9xVEDuVJQw2BM5ynqMljlxYpCQPVh4XpBF5rPIxCjzZW-Q_497VueLWqbTHJSydaz6AmzZI0yuP1N-vhamzEjduRwrbdunuOBMkTouIG8hhV548aRJ_JNg3nmtL6nRXH-_Ew",
        "refreshToken": "AMf-vBzDRBV2wjSD-pihoXqb819AxSGkzYGp4aeIGS271v63SAnTG8dZw-3vUZBlDtpQqHXeCkVKekGXh86m5UxizWYtfwJEQezwRnhuduJZtAS-k2su8gJ7PgzH3ZLXHKUAXcsbjTSFHINmtEJOF_vvaDt54h-NKnwlIfoouxY5BmlNzoK3fa696kUJexRtIhC-1oK4Omkk9AZ5VR-YLUY6Dw5wpv2Wrpfrihx8Rsd-TqNemQ_k3fWQ5QNBxDBP7uXDLZNckLke",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 283.1 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/rQncnoDXqKXklKyHyJZgpm5xarI2 (1211.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTEsImV4cCI6MTc0OTgzMDQxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BXT1ZpfIt609LtYs-t2Ga5yZmX9rApBAqn-DD7lLMdd-haBbQkrEIn9IIruNjXe3D1zS-XByF0ymWu7wUQTyHgRZq59GncdLlsjs50m10e74aNvigTdRu9GfZ58EyRYCvWNHqqboi3SuQMuDT_r5lcyV54DmIkngqzFXU8x-j4OVbcoh3dQoPrYLU9t5RiHICAvwezTsHel9-jhhuE9xVEDuVJQw2BM5ynqMljlxYpCQPVh4XpBF5rPIxCjzZW-Q_497VueLWqbTHJSydaz6AmzZI0yuP1N-vhamzEjduRwrbdunuOBMkTouIG8hhV548aRJ_JNg3nmtL6nRXH-_Ew"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:12 GMT",
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

**⏱️ Duration:** 1211.8 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (231.9ms)</summary>

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
    "etag": "W/\"6aa-LIDxXXQxyIenshKjKfCXiFPx28A\"",
    "date": "Fri, 13 Jun 2025 15:00:13 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODEyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTIsImV4cCI6MTc0OTgzMDQxMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Rtkly3iCbuF1mzuTZITQr_IxyyVcIVBn1jb1ZgBjPUM6ffCTAMriKbf4N96kuBGwHAwIqsnH4bADkztzoFXov9yATUmBqSSgiaehNYtk0biMihXuhS5IOVbY12av2HXQd7D7JkL-MY3PnoiH7BpUvKGMiHYlwV2Qy50xa_dBkMP8ppyFnEEVdo0LivVxh-eokM2J6e6CvQ-omOvFqfrgy4sT-1ruHDnEMb7ME-84dJe7N3QXP4WLR7iy9o0uTHymJrH8sCyKVzGG3Z7ycK_4PFsig7bZEa2IBJFtYfPRCYPSOJR0SGhN8sWCk5N-gv8uwEh2Iou-mqqob_8rruuq6Q",
        "refreshToken": "AMf-vBzwsogZNaxov_H0d_z690RFZsgDbPWrJo6n4AuisbZxNqEI0u2A2EcZIvtRm6F-33PcXnNq10Z8CjkGbEPLE89bpyXJrAL7-1_xagCkKoDf2HSH_ntBVU8aKe3SawAMStSVGa5-zw0Z9DN0GauzAMEVsd16eiCXpCPPqiqNh_V5OMdTP9BiYGtqH2yivrhSY3KqUNV60xNAJ68f1BPX4C0XPnv0v_z26H6yfRiQQYLHmCAqjYJN4YCHEl7WDbKvvl0jzxuI",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 231.9 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/bZi6XGmP4rRsvJ8BinvX1FcqDRs2 (1621.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODEyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTIsImV4cCI6MTc0OTgzMDQxMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Rtkly3iCbuF1mzuTZITQr_IxyyVcIVBn1jb1ZgBjPUM6ffCTAMriKbf4N96kuBGwHAwIqsnH4bADkztzoFXov9yATUmBqSSgiaehNYtk0biMihXuhS5IOVbY12av2HXQd7D7JkL-MY3PnoiH7BpUvKGMiHYlwV2Qy50xa_dBkMP8ppyFnEEVdo0LivVxh-eokM2J6e6CvQ-omOvFqfrgy4sT-1ruHDnEMb7ME-84dJe7N3QXP4WLR7iy9o0uTHymJrH8sCyKVzGG3Z7ycK_4PFsig7bZEa2IBJFtYfPRCYPSOJR0SGhN8sWCk5N-gv8uwEh2Iou-mqqob_8rruuq6Q"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:14 GMT",
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

**⏱️ Duration:** 1621.4 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (234.0ms)</summary>

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
    "etag": "W/\"6aa-RnSAcmDQ2gJqbPVnJY9HnA1B/+E\"",
    "date": "Fri, 13 Jun 2025 15:00:14 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTQsImV4cCI6MTc0OTgzMDQxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X0cnfSSIhZgeEtLeZRejBKCp8ffX7HE3aGh7fHT3mFj61k0fgozgKoNjksR3QZGlgVVunWCViufYeJpM_LCf37f95v2-7e7Q1OUAbL5wfbgq8mcySn3ZYpaJZDqbm5ipB7RAPqeSvw4-TTWsTg-VTLHo3_kzhEz66EDiEvakmwxgwp9Q6pKq1vmgPw4BtmERKkNxVGcBfCbRep1Ji_WJjh9RqB8gA_V8mT2Sxqy1rJxV6aOMc4mh-tDmie-wrT7qRZvM6SnSyXJsGU6bhNB-7Rw_AAhhZgH_BrUaBPB0pTC5w_-k5N8Ug47kRiA19MXk3NmNHgtvcdX-NeSYGtY2aA",
        "refreshToken": "AMf-vBxGn4a8ccltRtolAaeJhTIRSzyPEexdBF5cGiutWfZlwHrN5l-1zxqB29MSxD6cxIiU1tPrlz8KGFsEP351jMd9fYNdQVpJ5_4aHsIIyXs3b15GW7EgkDr52QEA50r_M7lFl73HXdDT7BlwWHYw6iVX47cQ_W-Rqbl9nM7Lte9EXfi-dj2jHGynJ76ZzktpPpd8yl0n7rwS8brAERcCgqLeMa1yPWaO7PrZ0OQpOSAfB9ZBQ3SuZF-Cz74iC3oex48hi0Gf",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 234.0 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/lJ6CRRmyQ3TeHVxnEM35Fgmp9bE2 (1933.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODE0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTQsImV4cCI6MTc0OTgzMDQxNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X0cnfSSIhZgeEtLeZRejBKCp8ffX7HE3aGh7fHT3mFj61k0fgozgKoNjksR3QZGlgVVunWCViufYeJpM_LCf37f95v2-7e7Q1OUAbL5wfbgq8mcySn3ZYpaJZDqbm5ipB7RAPqeSvw4-TTWsTg-VTLHo3_kzhEz66EDiEvakmwxgwp9Q6pKq1vmgPw4BtmERKkNxVGcBfCbRep1Ji_WJjh9RqB8gA_V8mT2Sxqy1rJxV6aOMc4mh-tDmie-wrT7qRZvM6SnSyXJsGU6bhNB-7Rw_AAhhZgH_BrUaBPB0pTC5w_-k5N8Ug47kRiA19MXk3NmNHgtvcdX-NeSYGtY2aA"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:16 GMT",
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

**⏱️ Duration:** 1933.7 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (265.7ms)</summary>

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
    "etag": "W/\"6aa-nGF1JNOAhTwXv2FABgt0292zols\"",
    "date": "Fri, 13 Jun 2025 15:00:17 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODE3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTcsImV4cCI6MTc0OTgzMDQxNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Zjr1wuJS9juqT0D9ND8jfNDVWO528whr3mDXEwRjfpSljznUeQ97hyg7AvMi2j9GJbcDeMukWC5pb_WfMpFp848Vr4Wvq4nR4Q9tfWodpt6MDg8vsr_XFGwxswQGj_MoTFYxLaFl17UD09_F82iQ3c5e1gw4ymtjZGhjNOVt5ifurJm7WUXLfQJjlGOZXjrFbNQt1H-1doOc8T-goQRExxbvzANRx010pyXRYd_4-gNg5ENJFyFiY66LDy8DIiUa_RtGvEe17454EwDTgbIf4Xt2Z-nerAhjcSfjZElvBXI6BTNzoSITWlGtDcg-s1LqvPv_HiFYQ-i7n7WDOpvpdQ",
        "refreshToken": "AMf-vBxXcN0hkNF7gv2QvXznCNmdQkcBmm8SBQlU4XK1eOzSfrAxdPPLJodsRLIQ2UzGAWHVcgfPHbWrXWRhLHpRAGOV7Eh1mRlBCnOkcfWQUg088cu8ZN8LcReJVDuyjwS_4z59CCfF8lXRqJiDhN423D3A8jR6-leGKiCDocG-jMKxKhhxts9vz4eFkvww2xX4qcIGUPlI1i4RTe6WriF3rcUfW1k57XmnwQxyhgBf2-yTrJKj__rIOHBwe5ZPK541XFscOyTX",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 265.7 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/v30J4yEGk3V0LZypqYPifwcjsIj1 (1263.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODE3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTcsImV4cCI6MTc0OTgzMDQxNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Zjr1wuJS9juqT0D9ND8jfNDVWO528whr3mDXEwRjfpSljznUeQ97hyg7AvMi2j9GJbcDeMukWC5pb_WfMpFp848Vr4Wvq4nR4Q9tfWodpt6MDg8vsr_XFGwxswQGj_MoTFYxLaFl17UD09_F82iQ3c5e1gw4ymtjZGhjNOVt5ifurJm7WUXLfQJjlGOZXjrFbNQt1H-1doOc8T-goQRExxbvzANRx010pyXRYd_4-gNg5ENJFyFiY66LDy8DIiUa_RtGvEe17454EwDTgbIf4Xt2Z-nerAhjcSfjZElvBXI6BTNzoSITWlGtDcg-s1LqvPv_HiFYQ-i7n7WDOpvpdQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:18 GMT",
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

**⏱️ Duration:** 1263.5 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (248.0ms)</summary>

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
    "etag": "W/\"6aa-IBCVlXnwhcTNri5sBrf3Iv+L2d8\"",
    "date": "Fri, 13 Jun 2025 15:00:18 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODE4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTgsImV4cCI6MTc0OTgzMDQxOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LpSE_R06fzdpE6RQnPvkr5M--wGtpHuOsQg-en_cjuMqneZRoZ_KVY6WgUGQcPh1rdYyAj9wPaXTktTieiXNUe3yZzaLXKYuO5gqnIREw0Jd9O00B9KVGgQhatVRSvSZrdqekYT-sdcKB6BqOqvrtxJka0N78DMfMPsDoxrMJdJUccyWwnOHqCZupBNrZZnl5iyXrxjnnDQoT7_HIEc3daJAYXfCFBt5PGztaaEb7gyhhIrJ5c6sPFHnAzI3ggiXX6MxUCHjOH94L7reWLbCjXRiQVpWY7ur0Ul8qltGD6pDX4o2DvmTu_vIImsg7uzjymVl2PBjELF-xMvHywlDIQ",
        "refreshToken": "AMf-vBzhqKbqwh6FdyLygWdTvf3fdEaoEXZ6l9g2e7fIeOE9TTEHt_MGdM5Tgs3vCjTG2j77jOw-3XilhykViQKINdChs1HT2IuosDMhszxk-QLs7mIRJQS4CBTHcqTDy7YbabnWohp90ZvZCoPw-5OeLdrw4WysVF6wrNt2S8CUcZ9qHdLapZZra5Qmei5KOjiIDjb_ATCAFSGnS0FiutgN9IBjrb5eg58nR5llvK651YH4MTmK_TvqqZqZalgsTF34yTKQDhe5",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 248.0 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/TAUYCDhPt6e75obCNmSl7kVkRx53 (1908.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODE4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MTgsImV4cCI6MTc0OTgzMDQxOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LpSE_R06fzdpE6RQnPvkr5M--wGtpHuOsQg-en_cjuMqneZRoZ_KVY6WgUGQcPh1rdYyAj9wPaXTktTieiXNUe3yZzaLXKYuO5gqnIREw0Jd9O00B9KVGgQhatVRSvSZrdqekYT-sdcKB6BqOqvrtxJka0N78DMfMPsDoxrMJdJUccyWwnOHqCZupBNrZZnl5iyXrxjnnDQoT7_HIEc3daJAYXfCFBt5PGztaaEb7gyhhIrJ5c6sPFHnAzI3ggiXX6MxUCHjOH94L7reWLbCjXRiQVpWY7ur0Ul8qltGD6pDX4o2DvmTu_vIImsg7uzjymVl2PBjELF-xMvHywlDIQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:20 GMT",
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

**⏱️ Duration:** 1908.8 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (311.5ms)</summary>

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
    "etag": "W/\"6aa-CyHRnFWE2A0+v5hukGS3EeJ3Qaw\"",
    "date": "Fri, 13 Jun 2025 15:00:20 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODIwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MjAsImV4cCI6MTc0OTgzMDQyMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.e9TmwCfnP-jvoxjtuLu56SQvF6EcCtVi4yh4bjgmnMH3XtnoR4wh9jeVyv3g_1NAiWY6sqmiOkN3881dAH8gPDx8Q4K05UWWQzDPOwxnZjhDHM5d_2DstgVhd1fhVD_0xAvohoSDsRrGeo2y5E5zD_YHk3vB6HaTQN1xmmN6TBQlJXBR4uz7BZogr0QM-Bj4sVGiADjUIRPYauBEoSFO-FeJ8GDINiDWGyMCaiwc_PnzxPrLSXyrP2wLjLn2s7Jj0_S_t-zgLukQMuXAinafB4q51C3O0wQnml92DIJDYE83NJnNuxCjtMgn2csELecEQ9bqwlDdSh6xGApUKVf9lA",
        "refreshToken": "AMf-vBwn0UjaNjTE-9rS46r_tezK-oCPL9a2jRZd4_UvCInhyZfuxi6I0AvPpN2BIloEOAF1QfqN7-8Z7R7Tx5tPsecoz2DHKaishcZ3jgO9SnQLWl1A_iyHDYxUdcYYUCSvt7Q8CwRg2Z6hI7cvL1Xx8JHbwd74rTDqIjgHRggP-VVYnoZiZ7cebjdUpJtK4C0pFZ_hJKHy_UsEK-7AFxskr0Hpc4egQyW2IF3BGYDmWYIhFdZYbtrtwnrSLjiE7rDKn30C--4j",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 311.5 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/MoV9qgKAVUOwAmpmilKFscxUer33 (1333.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODIwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MjAsImV4cCI6MTc0OTgzMDQyMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.e9TmwCfnP-jvoxjtuLu56SQvF6EcCtVi4yh4bjgmnMH3XtnoR4wh9jeVyv3g_1NAiWY6sqmiOkN3881dAH8gPDx8Q4K05UWWQzDPOwxnZjhDHM5d_2DstgVhd1fhVD_0xAvohoSDsRrGeo2y5E5zD_YHk3vB6HaTQN1xmmN6TBQlJXBR4uz7BZogr0QM-Bj4sVGiADjUIRPYauBEoSFO-FeJ8GDINiDWGyMCaiwc_PnzxPrLSXyrP2wLjLn2s7Jj0_S_t-zgLukQMuXAinafB4q51C3O0wQnml92DIJDYE83NJnNuxCjtMgn2csELecEQ9bqwlDdSh6xGApUKVf9lA"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:22 GMT",
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

**⏱️ Duration:** 1333.5 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (240.8ms)</summary>

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
    "etag": "W/\"6aa-qhF+jSqZUXWcopvDvgTiyICg8UM\"",
    "date": "Fri, 13 Jun 2025 15:00:22 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MjIsImV4cCI6MTc0OTgzMDQyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Xd4i0U75v7Vci4alv-8KWg495D-bTsMs8TKKwIzfhUAj3TVomkcpbjuToMxu17stEeaVliHbgLuUDCELspXy-bL_bsu-DIU-gwbKxStvQfldVWCbvLxUlKk8zoA6--9KCvkOrMb932eoWm1nAQ3pJ-6cxN398xNnfJWD4c3XNRVNfjTbv-qBE0VY4l72DLR7fvT0ltgO5uQHZo848v8FpciltOE8MMANjpsMJ6Y2rQEj9yDXcOkmJqNZWHDnL7upqWXPCIQrt41tYij9r1CKwGoKMg8FHCFtnItRewUZWxgLRepNJ1KgqQMjnemGVD9m5NgJSDGUZ5HsX-ctT0xFLA",
        "refreshToken": "AMf-vBz-VNtGtW6TGVkNaKZRLPNJCWM5yaxeYlt9EHLirA3i8wzr2bcwSdVwZxio4YcsSu3UTaPH_Q83Cj73pcD0oOpldyfRNqoiCfncLP1DcCIvnLtVbGtSaqyM3MOUdRwqdCSB9bcAebLk70Bn02JTFyDGYgWQyekMBVEAmr1gfnxbWn8EsfnGRHl-Mpxx3A1_dsOeVQQ3rc_7cQV77gj-m833e052JlLdOMU6d7ZUyH0yCWuzSFvyISrWXiIR6C93en_YByPF",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 240.8 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/uRpCojbqnpaM7A8KGapzFay7zE83 (1424.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MjIsImV4cCI6MTc0OTgzMDQyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Xd4i0U75v7Vci4alv-8KWg495D-bTsMs8TKKwIzfhUAj3TVomkcpbjuToMxu17stEeaVliHbgLuUDCELspXy-bL_bsu-DIU-gwbKxStvQfldVWCbvLxUlKk8zoA6--9KCvkOrMb932eoWm1nAQ3pJ-6cxN398xNnfJWD4c3XNRVNfjTbv-qBE0VY4l72DLR7fvT0ltgO5uQHZo848v8FpciltOE8MMANjpsMJ6Y2rQEj9yDXcOkmJqNZWHDnL7upqWXPCIQrt41tYij9r1CKwGoKMg8FHCFtnItRewUZWxgLRepNJ1KgqQMjnemGVD9m5NgJSDGUZ5HsX-ctT0xFLA"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:23 GMT",
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

**⏱️ Duration:** 1424.5 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (329.9ms)</summary>

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
    "etag": "W/\"6aa-eb0VXyQuv3UDMPKXzGzOxxc36kU\"",
    "date": "Fri, 13 Jun 2025 15:00:24 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODI0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MjQsImV4cCI6MTc0OTgzMDQyNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ti2IdebluenSoJQb1rgTAQy_WJs8j8-41p0l_gd-3xVwVS6hOOMaLESIbxsaF2o0GshTWvHaSWTBD1KRVBWDFF1VvxyMYsPV6hNDNCVrG0eWaRufKAmodh-fccjOqGnFgcUiNRUUCc6rltnrjBDUYcWojP1RvLa2JGQiQ-1_2i8D5tev8oALbAX7mmBLPX_C4IZzyzy7brcEuxZsNK6IoEIEgDlm4Q1rJDYmfr6YXptFtyKRR0rZ0N7dc8L5MqJijAXcPGPe4EClstZpuNH_Ncjg5uDKsow7yxmFUPvOJ6qAljB3qEueAftEQFf4V49ORiuOopaM8rwSmELPM9yvcw",
        "refreshToken": "AMf-vBzF_uQ1_7wCARCJl7Dd7_ivFmbvfhzVUK6Pj3fCe_0Z-ZufkhAv7QZ1FLBVqmEruvRmN9a086OzunRmL_Y0Ce223a3Tldjy6ep-39jkznrDAKd-APHXYAyr5oFGLirqea6jT7Vqy8hw6pAONq42fgIDFtBX1whSCYLE_JOSMtxF_pe0M5Gv9pwT-dl1b260er-Pme6LSIvLp6fAtgpwQeCFxLybFEzC0d7dmRHCxdUUeULm5Rxr6qQx03UakPUwMiEb3DOR",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 329.9 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/vTbTSmUOnfRrpw4MaEhp6olDAay1 (1330.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI2ODI0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjY4MjQsImV4cCI6MTc0OTgzMDQyNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ti2IdebluenSoJQb1rgTAQy_WJs8j8-41p0l_gd-3xVwVS6hOOMaLESIbxsaF2o0GshTWvHaSWTBD1KRVBWDFF1VvxyMYsPV6hNDNCVrG0eWaRufKAmodh-fccjOqGnFgcUiNRUUCc6rltnrjBDUYcWojP1RvLa2JGQiQ-1_2i8D5tev8oALbAX7mmBLPX_C4IZzyzy7brcEuxZsNK6IoEIEgDlm4Q1rJDYmfr6YXptFtyKRR0rZ0N7dc8L5MqJijAXcPGPe4EClstZpuNH_Ncjg5uDKsow7yxmFUPvOJ6qAljB3qEueAftEQFf4V49ORiuOopaM8rwSmELPM9yvcw"
  }
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
    "date": "Fri, 13 Jun 2025 15:00:25 GMT",
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

**⏱️ Duration:** 1330.9 ms  

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
- Test organization: Test Org for Memberships 1749826765499
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
