# E2E Test Report: memberships-tests

**Date:** 6/13/2025  
**Time:** 5:26:45 PM  
**Duration:** 59.77s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully | PASSED | 0.59s | Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully |
| ✅ Memberships E2E Tests Invite User to Organization Should fail to invite same user twice | PASSED | 0.49s | Memberships E2E Tests Invite User to Organization Should fail to invite same user twice |
| ✅ Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions | PASSED | 1.70s | Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions |
| ✅ Memberships E2E Tests Invite User to Organization Should invite user with different roles | PASSED | 9.60s | Memberships E2E Tests Invite User to Organization Should invite user with different roles |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by organization | PASSED | 0.59s | Memberships E2E Tests Get Memberships Admin should get memberships by organization |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by user | PASSED | 0.56s | Memberships E2E Tests Get Memberships Admin should get memberships by user |
| ✅ Memberships E2E Tests Get Memberships User should get their own memberships | PASSED | 0.44s | Memberships E2E Tests Get Memberships User should get their own memberships |
| ✅ Memberships E2E Tests Get Memberships Should fail without userId or organizationId | PASSED | 0.36s | Memberships E2E Tests Get Memberships Should fail without userId or organizationId |
| ✅ Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships | PASSED | 0.39s | Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships |
| ✅ Memberships E2E Tests Get Membership by ID Admin should get membership by ID | PASSED | 0.47s | Memberships E2E Tests Get Membership by ID Admin should get membership by ID |
| ✅ Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID | PASSED | 0.42s | Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID |
| ✅ Memberships E2E Tests Update Member Role Admin should update member role successfully | PASSED | 0.53s | Memberships E2E Tests Update Member Role Admin should update member role successfully |
| ✅ Memberships E2E Tests Update Member Role Should fail with invalid role | PASSED | 0.42s | Memberships E2E Tests Update Member Role Should fail with invalid role |
| ✅ Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions | PASSED | 0.52s | Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions |
| ✅ Memberships E2E Tests Remove Member Admin should remove member successfully | PASSED | 1.16s | Memberships E2E Tests Remove Member Admin should remove member successfully |
| ✅ Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions | PASSED | 2.54s | Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions |
| ✅ Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) | PASSED | 1.11s | Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations | PASSED | 0.49s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations | PASSED | 1.53s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations | PASSED | 1.24s | Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (587.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "XLL4SRuGJXW4bfqh2m5aH5ZsV8f2",
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
    "etag": "W/\"174-wyo4veFu/xd6NBLjROt8Jn/AkR0\"",
    "date": "Fri, 13 Jun 2025 15:25:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "6a60cc35-a115-43b3-b8de-0d0239833788",
      "userId": "XLL4SRuGJXW4bfqh2m5aH5ZsV8f2",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T15:25:49.570Z",
      "updatedAt": "2025-06-13T15:25:49.570Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 587.4 ms  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (484.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "XLL4SRuGJXW4bfqh2m5aH5ZsV8f2",
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
    "date": "Fri, 13 Jun 2025 15:25:50 GMT",
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

**⏱️ Duration:** 484.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1296.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1749828350132@example.com",
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
    "etag": "W/\"631-MwnNRD6zNnXQUTAxVD/4dYG7DyU\"",
    "date": "Fri, 13 Jun 2025 15:25:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "fUD8BTtaMoe4PkH0Jlby4NsZLd73",
        "email": "no-perm-invite-1749828350132@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM1MCwidXNlcl9pZCI6ImZVRDhCVHRhTW9lNFBrSDBKbGJ5NE5zWkxkNzMiLCJzdWIiOiJmVUQ4QlR0YU1vZTRQa0gwSmxieTROc1pMZDczIiwiaWF0IjoxNzQ5ODI4MzUwLCJleHAiOjE3NDk4MzE5NTAsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0OTgyODM1MDEzMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ5ODI4MzUwMTMyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.UFvw36I2hJ5SA3ojQiGiH-DDg_QV_F6CTv1kMC-5gAZZLN7dyE_Udna7yUuq821RjwPz946BUdPi_SIN_mkHm-fSPcPFasZjfhHLC_drfZYCtly8N18n1jyVrCaWvu1DuHtXZ4sRIwMOGh4XHfkKWPNEI90nj4SlkHOZIg4L1f5mHHrZp-01tjwhRV7i0-ZYSVSkCGFOwD5dgL3JUVu6JLF56vDBdNVHCB7ow1i3UFWM-PmoXm_qgOhKvIUEGwiy6kh7ZPKRTwAlVsbGbXhoMrZeEWjob_U3_N0kyvpBwdzqw8H5EK13rJZ0zTeArHMQQd9uw6-KTqscgji1HMUV3Q",
        "refreshToken": "AMf-vBwTpoOaBika0gdh_cBDMZaiHEJcta_jENQPQGZcPtMP-QdP2mzq15Mi-0Mo93wOtWT6sV_5WacnYI1t8V4qMNnTlOmhBOLFxNSxQ6UzG2Ca5jhbi2XghTA3s6WLGldVyHJzwjvp5JKD_uJoGse1qNeGbUBZoyfeykcTj20QACXP1k4zqcEWSamtwaProisCcnCElbZjBc0Qfouv3Aqdv48YIBwFvWYIF4rWEUuDwzjeEK9VbuU-eW9VGkqFtgmBu4ca7d1m",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1296.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (403.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM0NywidXNlcl9pZCI6IkZVVjJsZE9ObDVPOWtTNzV1VHNvOE5RR1hxQjMiLCJzdWIiOiJGVVYybGRPTmw1TzlrUzc1dVRzbzhOUUdYcUIzIiwiaWF0IjoxNzQ5ODI4MzQ3LCJleHAiOjE3NDk4MzE5NDcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyODM0NTg2MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI4MzQ1ODYyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ApoYkbWoYz_d5Pcyap6A-6sfDO5zaJo_Y5wRE8u_5RS1nMb0JMWzdCcEhzLF-Lqng6WXDJOJg-hSU_UnP1lxQc_LCv_m1av0qud7QzUMpUu3702W6DmwF-t44BQ6uqSrkKXPZDt5G76dGSdTj7ZMRX0lazBPw5lm-ROx2FOpkfhI0f4qVsKeG7Fxz3tOcM16MqdIjvwkGmSacZrEBnyCaoltm_2yBpowpKzMNDOxF85aYOhv3rx4-VhH-kmAIM4qihirzOKNaQa6t769z_tTaKEH5DCrR7BgxWNoljVbo-C2Es5GyXIekiIWoi8Bxu31B4em5ulMtTpdpFhG2U8Spw"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "fUD8BTtaMoe4PkH0Jlby4NsZLd73",
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
    "date": "Fri, 13 Jun 2025 15:25:51 GMT",
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

**⏱️ Duration:** 403.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 9.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1472.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1749828351837@example.com",
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
    "etag": "W/\"603-WTphHlKU1WoFaLGLqFVINhBTCFU\"",
    "date": "Fri, 13 Jun 2025 15:25:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "O9gTmc03qTUcU9opD7RAVy56HcB3",
        "email": "admin-user-1749828351837@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM1MiwidXNlcl9pZCI6Ik85Z1RtYzAzcVRVY1U5b3BEN1JBVnk1NkhjQjMiLCJzdWIiOiJPOWdUbWMwM3FUVWNVOW9wRDdSQVZ5NTZIY0IzIiwiaWF0IjoxNzQ5ODI4MzUyLCJleHAiOjE3NDk4MzE5NTIsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ5ODI4MzUxODM3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0OTgyODM1MTgzN0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gRLXhXvR3kbKATewxdffmEgrD42dreuhVG_PWJA8GHkgGtlQkvt8zWQ6iXEO0glOuB2twV9NbuW5qqCL3iFB3oTgcMhhdL1jx41jtsMCVOnCVaYbuNf0pl7gUqzH5XPQKjS5N4gz-vHdP3z8xuh9RoEy27Y7Z5QCb5O6TuOn_dbNhpB1jRvX7xHQN4cGIaQ0LFlXVs66zo7XFIV2ix-_DqsXuGoW_XlJ-w3gLliVRZwA5yBwdMkMn0BYwzhruWeS5axePujh3q-vbx68WRC2oVKACIkyZLwh83A4a6wDZAuqgp9cKNifm4ZmINBbQOiKRxXFTj7vSYAZQoqazBpBgw",
        "refreshToken": "AMf-vByBJRTZkPJtRd9DkvRKn1Er9KP1Qimd8-Mj9nWGmIyXzA7zvtC4gdO3UGmRFYWthDt-ULpCOf8CBo0g5yA17IVYNskh0KDUnuGhy7arxyWKrOuzA71-rS3T1HO91BMtCZEk6Uisz9vW6ThVtoF-8JG02oR7D3JSAhZmxlMOjwujljbJtZn7ZEKjfWjPa_xbz07GwNcUub-hp0N6nGW7beCEinLomC3CStfuBSiWz3P6zJ35ltA",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1472.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (680.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "O9gTmc03qTUcU9opD7RAVy56HcB3",
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
    "etag": "W/\"173-X51bK65/9u1Fl+y4A6hjGoz6K00\"",
    "date": "Fri, 13 Jun 2025 15:25:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "7fcb5e22-9250-41bf-93d2-fffdcc6352d9",
      "userId": "O9gTmc03qTUcU9opD7RAVy56HcB3",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-13T15:25:53.926Z",
      "updatedAt": "2025-06-13T15:25:53.926Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 680.6 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1143.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1749828353990@example.com",
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
    "etag": "W/\"60d-VRuZDJabObXIYR0dC7H0moxUG68\"",
    "date": "Fri, 13 Jun 2025 15:25:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "1AE7h3n1OEMC4kCSdkGQ2McWjCi2",
        "email": "manager-user-1749828353990@example.com",
        "name": "Manager User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM1NCwidXNlcl9pZCI6IjFBRTdoM24xT0VNQzRrQ1Nka0dRMk1jV2pDaTIiLCJzdWIiOiIxQUU3aDNuMU9FTUM0a0NTZGtHUTJNY1dqQ2kyIiwiaWF0IjoxNzQ5ODI4MzU0LCJleHAiOjE3NDk4MzE5NTQsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDk4MjgzNTM5OTBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDk4MjgzNTM5OTBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Ya9l_VchddWoesb2V2d-9x_YtzIgcHRAJ8GaxV3k_hTUKzaFVXNaeAxjAEifgs1WbkrThnCZ2p3U3O7rFaD0K96vjA3BoojbYSCMI2_-JvtAz3jiXJEkf0bzbJydE1dS7Z69OZQLu4WdTqqfibg-jmYA9Kp69FLbS9K8zFj92jSLkZdzTnrWs5b6IKizo6ADOOa6dOFJfJPTk0-yhrtzCtpEiKwKrQOmq-GiblGrrOospGLRmdUa5EkF_6aDcYPkHEATkocN83soARMYbnRLnj7CT5lrrm4CDe3dG0NmHIRHc3ainNdLXriij-SGlFPaXxK3cwtOA5TVnwsOiiNngg",
        "refreshToken": "AMf-vBwO8xdZHQpBY11JbViJDQ06YFYjCSFuLGwBzNsU5nvB7DS2JyTlxPklfub_Wjvbd3gDvh42FiKTc3YUA03Y6NQICinKJCLAU3i-cSBQzAJkLpVb_HN_k1DaSsvlWRm0q2m3tnhy2Q5fP8zWPmbaK_uQ7FYRrNxmO0vpFL24_TGDNjzh1e804Z2r-INKoDwoUiDM9Rf-6uMdNq6GLKN_vJxoZgOr2FXG9RDDS0ow-xT27thQqok",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1143.6 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (580.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "1AE7h3n1OEMC4kCSdkGQ2McWjCi2",
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
    "etag": "W/\"175-eXCk00PSVocedKNrYCPpTKM9SJc\"",
    "date": "Fri, 13 Jun 2025 15:25:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "d66baf51-4eb7-4597-9b6a-8bff770b95fe",
      "userId": "1AE7h3n1OEMC4kCSdkGQ2McWjCi2",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T15:25:55.650Z",
      "updatedAt": "2025-06-13T15:25:55.650Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 580.7 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1245.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1749828355715@example.com",
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
    "etag": "W/\"62b-RARlPS7XDYt9Tfbt4yLkQa1Eml0\"",
    "date": "Fri, 13 Jun 2025 15:25:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "Eka7epXP9BOPplxBUPZGjaqcYSx1",
        "email": "moderator-user-1749828355715@example.com",
        "name": "Moderator User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM1NiwidXNlcl9pZCI6IkVrYTdlcFhQOUJPUHBseEJVUFpHamFxY1lTeDEiLCJzdWIiOiJFa2E3ZXBYUDlCT1BwbHhCVVBaR2phcWNZU3gxIiwiaWF0IjoxNzQ5ODI4MzU2LCJleHAiOjE3NDk4MzE5NTYsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0OTgyODM1NTcxNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ5ODI4MzU1NzE1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.EoOWyaIo4c4x59om8L0sBx2jaKTT3XcesF_CKn692sll4YXB8-MtOYC15a67n7q9B1J6WjV1IKA3pg1uXDcQN_nUzOApCVvV91VUjA57EhfcmxGBpOVRzsVl6pcoOeZ-YensMU8zDgM-lLymkL9c44DAq5nXJ-qkR5BhYBLNzhct_i8SVJ6EcR981sWixlQ-cZ0jIQGPnnIDY7rzHZXtpMmeyxBv0PvSASK46HB94kAWCMUBkBQC1kqPgaOiPWztYp4-8zpWsIsfM9y4h08m_9W6UYVINs-T7plWVg0Pnkl8KXyGYUF5uVSBi46Ll6YytIIUZj0l8YYOTu3iePRpyQ",
        "refreshToken": "AMf-vBzN2YGcn5ibUreE21lrJkakHg0DjX1ZUlMOySiE9N4ogdJvRV8NYas6X8l1eEKwoz76dmdCA6kTtBiyQcdImj-a1VQX8XeWN2fj1QsW79A7yd3pHvexje_Wh5OKrDRoAaQebvAFdPeUOs3c4lOzW9RpG22qgOW6uORUU8HIHGOWORBIwk2n5yt4z3Dyw8fLgHhn8SMB8dn8mIVveoJFezcJETv_YM0-3ltbt5vQnmtxKP6tvFEi6MwzK0LyxA6JTr8oDJh9",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1245.8 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (661.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "Eka7epXP9BOPplxBUPZGjaqcYSx1",
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
    "etag": "W/\"177-jErBt9u1rgq/qQwT/mJYUT6fDp0\"",
    "date": "Fri, 13 Jun 2025 15:25:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "cb9b2dc2-98c7-4f4e-94a4-78073af8db7e",
      "userId": "Eka7epXP9BOPplxBUPZGjaqcYSx1",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-13T15:25:57.546Z",
      "updatedAt": "2025-06-13T15:25:57.546Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 661.6 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1386.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1749828357622@example.com",
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
    "etag": "W/\"62b-t5ubq7c+Uf3/Mi4posDDmMJrexw\"",
    "date": "Fri, 13 Jun 2025 15:25:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "P1F6BQs1x1Z6NZcFjaktipohJqH2",
        "email": "volunteer-user-1749828357622@example.com",
        "name": "Volunteer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM1OCwidXNlcl9pZCI6IlAxRjZCUXMxeDFaNk5aY0ZqYWt0aXBvaEpxSDIiLCJzdWIiOiJQMUY2QlFzMXgxWjZOWmNGamFrdGlwb2hKcUgyIiwiaWF0IjoxNzQ5ODI4MzU4LCJleHAiOjE3NDk4MzE5NTgsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0OTgyODM1NzYyMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ5ODI4MzU3NjIyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Fh8VsCw4s0JMQolkin3yxPjbH4SiyQ8PLqHnqrKK0FOqoCGBijy6EyfEnz7seJ7LwkxpQiT38y1DfREdYoJ5ucGdT4sc9i-VUQkhYotvLxOiBcUTCsXUd5yhaLVg7nFPhAn4yScdIB_JwFPq57qe_PtY0dcUmWhXJTrLVp76Ug56mK5WyFNQt3EhGBpWTX3oBL5e_O9cDYQWkSMOZKXtk4FRQha_gAVdZEZpfmgMQ6IsrgozJ04DRPFA4_U_vkDo9EYR9T3zcCxLaDy-SVFAtZPVHjbMFKbDOpQWP0tJa342VD3pw7x8onDxtjCwif47-Lo52nWmtUu2cZ53r4OSEQ",
        "refreshToken": "AMf-vByV0T36gAJIYdReKiRlKZWP9iZnZp2rmaiAv1iijV8fmAtfeEjg_5GDIXZU-G26Kxz0t5rs5hi0y59b3qI6SKfqyNViWafYZNaWbxuf_ImqUa3-V_zV4hW5gya5ISrkn9hAoeJ6I7ZyGO4ggddUNY0_KvLtl9Gyj2dJtmj34FSu_xCdEfj_nVIf6odolSYMcA-STrX0ZIm67wWcPGYiOGqoJagIwwE4vi013Uo4y3z3s2W6sa289xgYgvyXWQkl53S_fy1i",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1386.9 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (614.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "P1F6BQs1x1Z6NZcFjaktipohJqH2",
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
    "etag": "W/\"177-YOW6dgpVTWl1tTTb64TJpHmgzUI\"",
    "date": "Fri, 13 Jun 2025 15:25:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "bf94842e-cfb6-4545-a4b2-f9201df178b2",
      "userId": "P1F6BQs1x1Z6NZcFjaktipohJqH2",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T15:25:59.559Z",
      "updatedAt": "2025-06-13T15:25:59.559Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 614.3 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1227.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1749828359624@example.com",
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
    "etag": "W/\"611-RcULrN0Xs0yVYVCk0mOONzZ3eXI\"",
    "date": "Fri, 13 Jun 2025 15:26:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "CdVewYo2l1gDIknNrWywWeEyEw33",
        "email": "observer-user-1749828359624@example.com",
        "name": "Observer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM2MCwidXNlcl9pZCI6IkNkVmV3WW8ybDFnRElrbk5yV3l3V2VFeUV3MzMiLCJzdWIiOiJDZFZld1lvMmwxZ0RJa25Ocld5d1dlRXlFdzMzIiwiaWF0IjoxNzQ5ODI4MzYwLCJleHAiOjE3NDk4MzE5NjAsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ5ODI4MzU5NjI0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0OTgyODM1OTYyNEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AkLU07JJzKRLDJ12fNTSHQstCO669F56pFa7-cst9jt_5rEJyZtZ-anwGy-4bUvz09pswhgewOSKLafAlSRt45XSKyeCdOYUVBsaEf59S5JSW871Nr3LEcdLhcu0zHlJeDK93WaNdXgwkdOci3MvrwZsklhGGZcvs9fA8hvq99RKn0WCfScXlJ6pL8HWm8aaEjK1veKl9PE87q5Iu8eYV6I7tHwt0twDSci5XkpwH9AS03PqrSmPDVvXkVy45k37xy3kkbHJtaNhDD6IzZJJwKblzofo7yFHZv7b69LxA2wnJe5xjBFHkCPgXFxYXYrAblxMaN63Z0U2lerZaxu9zw",
        "refreshToken": "AMf-vBwRH2wXdzoi-f5owVlzVFoWnGZKzHBy0bxFopW-toC1G_5fod1aNMCGVO-dBzQMNC0XtHWqE3T2nenR_bYB6PS0rSZnB1xw-TY-gwl6RH45hSnR887o0verktpc-Sf5RPDjs0o2lW0KrnZR-RHrJuNTdOVqxfPrGuhIcbAv8S0q7iAGccPyQvHYBXNf2fGd4MvlJhgKaw-YIYOe9lcJSKEotfr7zR6TKzhtwITJwlJDFPsRV8Q",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1227.2 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (586.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "CdVewYo2l1gDIknNrWywWeEyEw33",
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
    "etag": "W/\"176-3oqx9NnGnIrpWmMh24c1jhhayC4\"",
    "date": "Fri, 13 Jun 2025 15:26:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "eabb7d0a-5e60-4f15-8457-ea1197606df1",
      "userId": "CdVewYo2l1gDIknNrWywWeEyEw33",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-13T15:26:01.372Z",
      "updatedAt": "2025-06-13T15:26:01.372Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 586.2 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=db21f05f-dcd0-4733-a70f-e5861b3f4a4b (585.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "etag": "W/\"625-MgoNqJHx8O8U0GmxlRQnOjYAWZM\"",
    "date": "Fri, 13 Jun 2025 15:26:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "6a60cc35-a115-43b3-b8de-0d0239833788",
        "userId": "XLL4SRuGJXW4bfqh2m5aH5ZsV8f2",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-13T15:25:49.570Z",
        "updatedAt": "2025-06-13T15:25:49.570Z"
      },
      {
        "id": "7fcb5e22-9250-41bf-93d2-fffdcc6352d9",
        "userId": "O9gTmc03qTUcU9opD7RAVy56HcB3",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T15:25:53.926Z",
        "updatedAt": "2025-06-13T15:25:53.926Z"
      },
      {
        "id": "d66baf51-4eb7-4597-9b6a-8bff770b95fe",
        "userId": "1AE7h3n1OEMC4kCSdkGQ2McWjCi2",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T15:25:55.650Z",
        "updatedAt": "2025-06-13T15:25:55.650Z"
      },
      {
        "id": "cb9b2dc2-98c7-4f4e-94a4-78073af8db7e",
        "userId": "Eka7epXP9BOPplxBUPZGjaqcYSx1",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T15:25:57.546Z",
        "updatedAt": "2025-06-13T15:25:57.546Z"
      },
      {
        "id": "bf94842e-cfb6-4545-a4b2-f9201df178b2",
        "userId": "P1F6BQs1x1Z6NZcFjaktipohJqH2",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T15:25:59.559Z",
        "updatedAt": "2025-06-13T15:25:59.559Z"
      },
      {
        "id": "eabb7d0a-5e60-4f15-8457-ea1197606df1",
        "userId": "CdVewYo2l1gDIknNrWywWeEyEw33",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T15:26:01.372Z",
        "updatedAt": "2025-06-13T15:26:01.372Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 585.4 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (554.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:02 GMT",
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


---

### Test: Memberships E2E Tests Get Memberships User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=FUV2ldONl5O9kS75uTso8NQGXqB3 (439.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM0NywidXNlcl9pZCI6IkZVVjJsZE9ObDVPOWtTNzV1VHNvOE5RR1hxQjMiLCJzdWIiOiJGVVYybGRPTmw1TzlrUzc1dVRzbzhOUUdYcUIzIiwiaWF0IjoxNzQ5ODI4MzQ3LCJleHAiOjE3NDk4MzE5NDcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyODM0NTg2MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI4MzQ1ODYyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ApoYkbWoYz_d5Pcyap6A-6sfDO5zaJo_Y5wRE8u_5RS1nMb0JMWzdCcEhzLF-Lqng6WXDJOJg-hSU_UnP1lxQc_LCv_m1av0qud7QzUMpUu3702W6DmwF-t44BQ6uqSrkKXPZDt5G76dGSdTj7ZMRX0lazBPw5lm-ROx2FOpkfhI0f4qVsKeG7Fxz3tOcM16MqdIjvwkGmSacZrEBnyCaoltm_2yBpowpKzMNDOxF85aYOhv3rx4-VhH-kmAIM4qihirzOKNaQa6t769z_tTaKEH5DCrR7BgxWNoljVbo-C2Es5GyXIekiIWoi8Bxu31B4em5ulMtTpdpFhG2U8Spw"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:03 GMT",
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

**⏱️ Duration:** 439.1 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.36s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (360.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
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
    "date": "Fri, 13 Jun 2025 15:26:03 GMT",
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

**⏱️ Duration:** 360.4 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (389.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM0NywidXNlcl9pZCI6IkZVVjJsZE9ObDVPOWtTNzV1VHNvOE5RR1hxQjMiLCJzdWIiOiJGVVYybGRPTmw1TzlrUzc1dVRzbzhOUUdYcUIzIiwiaWF0IjoxNzQ5ODI4MzQ3LCJleHAiOjE3NDk4MzE5NDcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyODM0NTg2MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI4MzQ1ODYyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ApoYkbWoYz_d5Pcyap6A-6sfDO5zaJo_Y5wRE8u_5RS1nMb0JMWzdCcEhzLF-Lqng6WXDJOJg-hSU_UnP1lxQc_LCv_m1av0qud7QzUMpUu3702W6DmwF-t44BQ6uqSrkKXPZDt5G76dGSdTj7ZMRX0lazBPw5lm-ROx2FOpkfhI0f4qVsKeG7Fxz3tOcM16MqdIjvwkGmSacZrEBnyCaoltm_2yBpowpKzMNDOxF85aYOhv3rx4-VhH-kmAIM4qihirzOKNaQa6t769z_tTaKEH5DCrR7BgxWNoljVbo-C2Es5GyXIekiIWoi8Bxu31B4em5ulMtTpdpFhG2U8Spw"
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
    "date": "Fri, 13 Jun 2025 15:26:03 GMT",
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

**⏱️ Duration:** 389.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.47s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/6a60cc35-a115-43b3-b8de-0d0239833788 (469.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "etag": "W/\"125-01mz4rAwmsBKUC0SNXwSGdwYKBc\"",
    "date": "Fri, 13 Jun 2025 15:26:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "6a60cc35-a115-43b3-b8de-0d0239833788",
      "userId": "XLL4SRuGJXW4bfqh2m5aH5ZsV8f2",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T15:25:49.570Z",
      "updatedAt": "2025-06-13T15:25:49.570Z"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 469.6 ms  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (415.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
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
    "date": "Fri, 13 Jun 2025 15:26:04 GMT",
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

**⏱️ Duration:** 415.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Update Member Role Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6a60cc35-a115-43b3-b8de-0d0239833788 (526.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
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
    "etag": "W/\"179-j3eEZabo+Q9l/V1l/g6P9UDVfB4\"",
    "date": "Fri, 13 Jun 2025 15:26:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member role updated to manager",
    "data": {
      "id": "6a60cc35-a115-43b3-b8de-0d0239833788",
      "userId": "XLL4SRuGJXW4bfqh2m5aH5ZsV8f2",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T15:25:49.570Z",
      "updatedAt": "2025-06-13T15:26:05.099Z"
    },
    "messageKey": "memberships.role_updated",
    "language": "en"
  }
}
```

**⏱️ Duration:** 526.6 ms  

</details>


---

### Test: Memberships E2E Tests Update Member Role Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6a60cc35-a115-43b3-b8de-0d0239833788 (415.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
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
    "date": "Fri, 13 Jun 2025 15:26:05 GMT",
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

**⏱️ Duration:** 415.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6a60cc35-a115-43b3-b8de-0d0239833788 (514.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM0NywidXNlcl9pZCI6IkZVVjJsZE9ObDVPOWtTNzV1VHNvOE5RR1hxQjMiLCJzdWIiOiJGVVYybGRPTmw1TzlrUzc1dVRzbzhOUUdYcUIzIiwiaWF0IjoxNzQ5ODI4MzQ3LCJleHAiOjE3NDk4MzE5NDcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyODM0NTg2MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI4MzQ1ODYyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ApoYkbWoYz_d5Pcyap6A-6sfDO5zaJo_Y5wRE8u_5RS1nMb0JMWzdCcEhzLF-Lqng6WXDJOJg-hSU_UnP1lxQc_LCv_m1av0qud7QzUMpUu3702W6DmwF-t44BQ6uqSrkKXPZDt5G76dGSdTj7ZMRX0lazBPw5lm-ROx2FOpkfhI0f4qVsKeG7Fxz3tOcM16MqdIjvwkGmSacZrEBnyCaoltm_2yBpowpKzMNDOxF85aYOhv3rx4-VhH-kmAIM4qihirzOKNaQa6t769z_tTaKEH5DCrR7BgxWNoljVbo-C2Es5GyXIekiIWoi8Bxu31B4em5ulMtTpdpFhG2U8Spw"
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
    "date": "Fri, 13 Jun 2025 15:26:06 GMT",
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

**⏱️ Duration:** 514.5 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (956.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1749828366168@example.com",
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
    "etag": "W/\"60d-F4PkI/0hdUgWqWNhvLoHLMbxOk0\"",
    "date": "Fri, 13 Jun 2025 15:26:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "lOycemlHl8MUGk0uusw3Blz1OeV2",
        "email": "remove-user-1749828366168@example.com",
        "name": "User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM2NiwidXNlcl9pZCI6ImxPeWNlbWxIbDhNVUdrMHV1c3czQmx6MU9lVjIiLCJzdWIiOiJsT3ljZW1sSGw4TVVHazB1dXN3M0JsejFPZVYyIiwiaWF0IjoxNzQ5ODI4MzY2LCJleHAiOjE3NDk4MzE5NjYsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0OTgyODM2NjE2OEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ5ODI4MzY2MTY4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.A4Q3gH7A2hYfYobvL7jI2axv-dOQKSDUuQWQY4WBfWKJ2QrxYrG5FPFYwaaw9Q3ZWtHUrlCFnRn9VgLWoDzid8ef_UU4YmnidOGiZQvv160ShxtsqauKy3eCIjWK9Cjok6JKbrKweRWN92_bPd8PhZhRntBMWMiVSP0UpzWSrmjL3-trF5OYsskUrn8NxyvDrFLwy7RnXdV-S0MfL4paaMIYC9sgPUwJ3W5em6T7GdLGJ0JdrtLFnNNqtw_4V8a7jUBHHyrChHsnsvuPkRuS-8dDzpMRdDq-NsIcUal0yXHs8eavJTCfVPhlOHzcCXQ5Scw966u5seeEEJg6gBwt7w",
        "refreshToken": "AMf-vBww7QSwiCHcCZsPHqfq_LszkdkwcgvsmMnMcwwBEumjcmHCBVHQzmB3KZjdVyGJet3L2S4SvRQImHnt8KOKqZhPqDwM4940n_f7Lc1M94w4Zyyiu1sTxMaSeGopIpcM3nJJRaOb5hHSOWac0J4hujywzhjhLvJJluU5pxC-ur-NlwKjgMyQ88d8e7I5gZqh5j6jp5HcchqbjqO6trY3JpEZWzyWYbgo7KlN20HNq3nzKQNQBA0",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 956.3 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (699.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "lOycemlHl8MUGk0uusw3Blz1OeV2",
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
    "etag": "W/\"177-wa02DyhxDiSTrOfN48wiG2Q595k\"",
    "date": "Fri, 13 Jun 2025 15:26:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "5946169d-6061-426e-938c-31e9ecbc63fe",
      "userId": "lOycemlHl8MUGk0uusw3Blz1OeV2",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T15:26:07.748Z",
      "updatedAt": "2025-06-13T15:26:07.748Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 699.5 ms  

</details>


---

### Test: Memberships E2E Tests Remove Member Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.16s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/5946169d-6061-426e-938c-31e9ecbc63fe (721.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:08 GMT",
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

**⏱️ Duration:** 721.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/5946169d-6061-426e-938c-31e9ecbc63fe (437.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
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
    "date": "Fri, 13 Jun 2025 15:26:08 GMT",
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

**⏱️ Duration:** 437.6 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1113.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1749828368991@example.com",
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
    "etag": "W/\"647-Mt0FczFk5V0KHGAk4GqloNvHoLw\"",
    "date": "Fri, 13 Jun 2025 15:26:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "2UIZX3Y6pwNP4FUDlTrZvTgSkqH2",
        "email": "another-remove-user-1749828368991@example.com",
        "name": "Another User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM2OSwidXNlcl9pZCI6IjJVSVpYM1k2cHdOUDRGVURsVHJadlRnU2txSDIiLCJzdWIiOiIyVUlaWDNZNnB3TlA0RlVEbFRyWnZUZ1NrcUgyIiwiaWF0IjoxNzQ5ODI4MzY5LCJleHAiOjE3NDk4MzE5NjksImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ5ODI4MzY4OTkxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0OTgyODM2ODk5MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RekWtXko6_TLOdP6GbLtRNh6Up2zwXWW8Mlurknm7qFzLGdmVqVRLUCvin4ZmFK-2NUi_f3BXE6KkRDjTVbMPrXUYkjvwEsFPWnxif7cijge01Oq2CgTb3UQ64YiBKc5VVu8yztICmEql3bVTwKsI0rQE1Ur8NwfVujvNM50CdTDM5nqAegZStRJYB_uy_daamBt-6iwXBmbdKajnA9l5kMFPjrBfGDUcj3eAaHe_5vsni_7D3WBnacEqHvMzQvZPdnRnuqrkZvNYu4rv_83wN_46mqw0yVGfHMz9bQaXyXAU-lPbgbuQnqNTuTkVH0GGlkK4wjTxugiA3s5Gx7nQw",
        "refreshToken": "AMf-vBxb3hXcFCxrSQmMv7Zodbr8mEq6QDc2NwQG3HQJhE6SKFIAQvXePdNXN61wriy9lwbNUnXv1_MRTZ8rT7O6nsSgP2xdPXqcjAkKKTWMYktNK4k7po_brJhbpkFBc-kIiKMwi4NfEir5Q-JwYKGaPwN4NWyoZDA4mN4XjiF9icWkg-9VMoUAifHo7hPqwWeIgNs1GlmCbJYDiB_aeSDCx7Jemjru70Wf1gNG-RkKL6ndUNVoqPnWm3lyVB02q5orvvco63o_",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1113.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (818.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "2UIZX3Y6pwNP4FUDlTrZvTgSkqH2",
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
    "etag": "W/\"177-v2D0xrbmc3rOiMS2Ulq6N2N3fEA\"",
    "date": "Fri, 13 Jun 2025 15:26:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "54edbf29-7f64-432d-9a5e-896be154fa50",
      "userId": "2UIZX3Y6pwNP4FUDlTrZvTgSkqH2",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T15:26:10.790Z",
      "updatedAt": "2025-06-13T15:26:10.790Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 818.3 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/54edbf29-7f64-432d-9a5e-896be154fa50 (607.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM0NywidXNlcl9pZCI6IkZVVjJsZE9ObDVPOWtTNzV1VHNvOE5RR1hxQjMiLCJzdWIiOiJGVVYybGRPTmw1TzlrUzc1dVRzbzhOUUdYcUIzIiwiaWF0IjoxNzQ5ODI4MzQ3LCJleHAiOjE3NDk4MzE5NDcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyODM0NTg2MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI4MzQ1ODYyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ApoYkbWoYz_d5Pcyap6A-6sfDO5zaJo_Y5wRE8u_5RS1nMb0JMWzdCcEhzLF-Lqng6WXDJOJg-hSU_UnP1lxQc_LCv_m1av0qud7QzUMpUu3702W6DmwF-t44BQ6uqSrkKXPZDt5G76dGSdTj7ZMRX0lazBPw5lm-ROx2FOpkfhI0f4qVsKeG7Fxz3tOcM16MqdIjvwkGmSacZrEBnyCaoltm_2yBpowpKzMNDOxF85aYOhv3rx4-VhH-kmAIM4qihirzOKNaQa6t769z_tTaKEH5DCrR7BgxWNoljVbo-C2Es5GyXIekiIWoi8Bxu31B4em5ulMtTpdpFhG2U8Spw"
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
    "date": "Fri, 13 Jun 2025 15:26:11 GMT",
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

**⏱️ Duration:** 607.9 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (1090.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749828371536@example.com",
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
    "etag": "W/\"630-4dy1+Kd/b5hjqf0DdbWD5hpLl5g\"",
    "date": "Fri, 13 Jun 2025 15:26:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "z2IMuwZv2xZ5dVl0ffGGkazSbJ13",
        "email": "self-leave-user-1749828371536@example.com",
        "name": "Self Leave User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3MSwidXNlcl9pZCI6InoySU11d1p2MnhaNWRWbDBmZkdHa2F6U2JKMTMiLCJzdWIiOiJ6MklNdXdadjJ4WjVkVmwwZmZHR2thelNiSjEzIiwiaWF0IjoxNzQ5ODI4MzcxLCJleHAiOjE3NDk4MzE5NzEsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjgzNzE1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjgzNzE1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VQgritHYIKvj9NcPemVtouvIBehYzMIF6z62beOdE2VaPtWy-Q2_sMYvbSOlG3-C-OW7xM1YPqztVQAeb_Mkai-uPjbTEDu-c8ikQuNvXPF-xoBW2U7I0_WkiEyM7njUzPqhcuwokbUPkmjLZzzFeOxUxoo2-dixSdqzF2J0GE8V79Z-duXorOHvher2QcJFBSGVgr6wBbYgyn-o3rjV_YKKVO4HWaUNXjHghOPYeDEOEQHCvmKPui68U8a7DCUUJJSROz2S3Cubcceozb441DaZ19uZ2BNnZI3YxxzaSH3xCXqq7bDwxxLtbAcEiVwG8gyNLopfGY0bKOGxeQMyMQ",
        "refreshToken": "AMf-vBw5afGJpy_Vf3KzS1YVEs_Q5d5t3aFNkpl_L5mSiWUMt2hXKz-2KmVka8Ey230bKLdXo7BhkP7zohAqPjDnRNbMgUSs2EQmK2NZk_0_bP5iUmoZT8OFWL6gg6xSoJVtQ-YahevAHjQhBLer2FnWajoCVquXpf3dupJlRKef81AVTAnr2fRk-9NB_02mvY_jYhnlDprBeI7391joiKPjh2wyflOn-lYJmtJT4tZheijzwfkitzCyQGHxzcSQqcDVGZ4pyqY3",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1090.1 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (267.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749828371536@example.com",
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
    "etag": "W/\"614-xMfQ8ovf1RXyPMl98CsbyB/RQuM\"",
    "date": "Fri, 13 Jun 2025 15:26:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "z2IMuwZv2xZ5dVl0ffGGkazSbJ13",
        "email": "self-leave-user-1749828371536@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3MiwidXNlcl9pZCI6InoySU11d1p2MnhaNWRWbDBmZkdHa2F6U2JKMTMiLCJzdWIiOiJ6MklNdXdadjJ4WjVkVmwwZmZHR2thelNiSjEzIiwiaWF0IjoxNzQ5ODI4MzcyLCJleHAiOjE3NDk4MzE5NzIsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjgzNzE1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjgzNzE1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XAa8TmIQ-gIHTlkeHBp9CYA6GCaEyGItWSrMpqEBtbDk-ND2CLvsZQCJocSZDyhIgeMWRRCdvGmhXWKwbocRKs_84Ah0irkQNXS9W0QIIajv0hNWYWlQUzy4BakyME5xxVEmioo5_27nB6CQqNz4gXLDU4y7ohZqWOPox9bxySldySsnOwAFyl5TlzGYV6kDX8wVfxB2k6w9dAEF6dX9deu7d2Zy6jd453WatFaAh-X-MOKaazEgqo_zJty-Yw5Pfd2SnfSt6WS5T9Z06-PWyUViWRAlG5cITnpSCZ4TYWsTRJObIFzl-xbR8TdmGNEqC9kKc5tGp6sv7zHcMNXYdw",
        "refreshToken": "AMf-vBw4a-uN085q6-_DxkqhPFiJJrNkhpHi1VG_xaVOVrsCgW7MlQUv6z1_tYhTRwbtcFY5WDBQoeFBlfKsOiG5dtkZ1y_7a2VfPoD6eynmsjO86vd3s_07JmFPXtYiuN79rq9XQexwO5TODuL3ro2yqcqz6VxMd-sR0M_fiV_6Kiy3YfPMRf3_ylSM6i_YMz_Wkg723Qu90e2BIV3hqwuV1MsYaRGzwpeckO0_mAxJi72E4v2H7F1OAoJdix15AlSq0E78jMBm",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 267.0 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (564.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "z2IMuwZv2xZ5dVl0ffGGkazSbJ13",
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
    "etag": "W/\"174-pSkP9K4Jsx7/W0zridXzVqHNkRU\"",
    "date": "Fri, 13 Jun 2025 15:26:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "76540832-fd4d-40b6-a0af-f36a45cacd0f",
      "userId": "z2IMuwZv2xZ5dVl0ffGGkazSbJ13",
      "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T15:26:13.388Z",
      "updatedAt": "2025-06-13T15:26:13.388Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 564.0 ms  

</details>


---

### Test: Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.11s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/76540832-fd4d-40b6-a0af-f36a45cacd0f (555.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3MiwidXNlcl9pZCI6InoySU11d1p2MnhaNWRWbDBmZkdHa2F6U2JKMTMiLCJzdWIiOiJ6MklNdXdadjJ4WjVkVmwwZmZHR2thelNiSjEzIiwiaWF0IjoxNzQ5ODI4MzcyLCJleHAiOjE3NDk4MzE5NzIsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjgzNzE1MzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjgzNzE1MzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XAa8TmIQ-gIHTlkeHBp9CYA6GCaEyGItWSrMpqEBtbDk-ND2CLvsZQCJocSZDyhIgeMWRRCdvGmhXWKwbocRKs_84Ah0irkQNXS9W0QIIajv0hNWYWlQUzy4BakyME5xxVEmioo5_27nB6CQqNz4gXLDU4y7ohZqWOPox9bxySldySsnOwAFyl5TlzGYV6kDX8wVfxB2k6w9dAEF6dX9deu7d2Zy6jd453WatFaAh-X-MOKaazEgqo_zJty-Yw5Pfd2SnfSt6WS5T9Z06-PWyUViWRAlG5cITnpSCZ4TYWsTRJObIFzl-xbR8TdmGNEqC9kKc5tGp6sv7zHcMNXYdw"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:14 GMT",
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

**⏱️ Duration:** 555.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/76540832-fd4d-40b6-a0af-f36a45cacd0f (552.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
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
    "date": "Fri, 13 Jun 2025 15:26:14 GMT",
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

**⏱️ Duration:** 552.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1231.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749828374572@example.com",
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
    "etag": "W/\"630-JMiTOIyAGTBYrtIPi5tKX67K7YI\"",
    "date": "Fri, 13 Jun 2025 15:26:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "qcgfYhJauhXUeSQkrP0caBcflNq2",
        "email": "other-org-admin-1749828374572@example.com",
        "name": "Other Org Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3NSwidXNlcl9pZCI6InFjZ2ZZaEphdWhYVWVTUWtyUDBjYUJjZmxOcTIiLCJzdWIiOiJxY2dmWWhKYXVoWFVlU1FrclAwY2FCY2ZsTnEyIiwiaWF0IjoxNzQ5ODI4Mzc1LCJleHAiOjE3NDk4MzE5NzUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPjLhHCK9tKo4Iw2CStF6sMlVF3SSoi3u1PPO8h_YhjQIyuiw72fKaQRkSImQP-Zw66EzuhduiCB3d-W0W_pAAXCf9ejVF9iIEh9RsRWko-6m5qyY7eC4GWhTIIVVrXn-7ABthHkB-aHChksEO0-_TTbIvWlDKbiKRH_0sYD5RBkG1YAqG2TsVU4xFf9xroRCooszM7iyq6Q7hiACSCHduZ3L3v2bbqFCMFRaLtkHrvZnPjeHALbFUA2tS1Qjm9Q1MDh69YSrY7rqCQap1didJPlaBzlybgsfbDb_5kENhLqjctz7wpE2gd6lagVN_NTcAUp-iQ5M8c9UoEhKBHoDQ",
        "refreshToken": "AMf-vBw95xW6QDirN9fZg0gIpUjNOWUQa5uAJo9teHHAv5xZRploYIeton-8ap411tRr-0jsDqbf8SZ_1uduDTwT3VblrnbFWsBgnRazltj7g-AGUHxOkYX6qXbjDZz0enQCV5Pc0ebli4Ng259hAYSnJPBK1Dya3LCLUY8UktSuzyIiyy0jEQIKlajkuv0J9QFDc5aSeh1ImNVikcBP0k4zsoDgvuPvjjGuY2MOcTeU6J2g66-Ccs_O1fUb6oEd-KpxBIGikG3j",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1231.2 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (231.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749828374572@example.com",
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
    "etag": "W/\"614-9GQtNCcO4L3y01PPrB65mlmkfUw\"",
    "date": "Fri, 13 Jun 2025 15:26:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "qcgfYhJauhXUeSQkrP0caBcflNq2",
        "email": "other-org-admin-1749828374572@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3NSwidXNlcl9pZCI6InFjZ2ZZaEphdWhYVWVTUWtyUDBjYUJjZmxOcTIiLCJzdWIiOiJxY2dmWWhKYXVoWFVlU1FrclAwY2FCY2ZsTnEyIiwiaWF0IjoxNzQ5ODI4Mzc1LCJleHAiOjE3NDk4MzE5NzUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPjLhHCK9tKo4Iw2CStF6sMlVF3SSoi3u1PPO8h_YhjQIyuiw72fKaQRkSImQP-Zw66EzuhduiCB3d-W0W_pAAXCf9ejVF9iIEh9RsRWko-6m5qyY7eC4GWhTIIVVrXn-7ABthHkB-aHChksEO0-_TTbIvWlDKbiKRH_0sYD5RBkG1YAqG2TsVU4xFf9xroRCooszM7iyq6Q7hiACSCHduZ3L3v2bbqFCMFRaLtkHrvZnPjeHALbFUA2tS1Qjm9Q1MDh69YSrY7rqCQap1didJPlaBzlybgsfbDb_5kENhLqjctz7wpE2gd6lagVN_NTcAUp-iQ5M8c9UoEhKBHoDQ",
        "refreshToken": "AMf-vBw44DHrlF2VsBZs8JUX7qmLYIKPQvO1J6gESzj2vgRCCWDvcTeVeygNdNb3C1KaYcXzljnL_ObTfnombbvLKJyvmEqgn7j3zsBCrQCiZhxz07kBCdPkZ-SVt4Cgahg2mmG5r1iYJ_CsyYQir5uCQVUqY_iGzVnI4ymm0gAXHNRKJIHinRUrvnWjwvwEdv5VC9NXMJ3HN1Prm5h0W7GYz1x9e8v3u2NeEeIlnliNU80hoQBNnrWUt_nuj4ZKAsSMxMBGSQqU",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 231.2 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (433.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3NSwidXNlcl9pZCI6InFjZ2ZZaEphdWhYVWVTUWtyUDBjYUJjZmxOcTIiLCJzdWIiOiJxY2dmWWhKYXVoWFVlU1FrclAwY2FCY2ZsTnEyIiwiaWF0IjoxNzQ5ODI4Mzc1LCJleHAiOjE3NDk4MzE5NzUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPjLhHCK9tKo4Iw2CStF6sMlVF3SSoi3u1PPO8h_YhjQIyuiw72fKaQRkSImQP-Zw66EzuhduiCB3d-W0W_pAAXCf9ejVF9iIEh9RsRWko-6m5qyY7eC4GWhTIIVVrXn-7ABthHkB-aHChksEO0-_TTbIvWlDKbiKRH_0sYD5RBkG1YAqG2TsVU4xFf9xroRCooszM7iyq6Q7hiACSCHduZ3L3v2bbqFCMFRaLtkHrvZnPjeHALbFUA2tS1Qjm9Q1MDh69YSrY7rqCQap1didJPlaBzlybgsfbDb_5kENhLqjctz7wpE2gd6lagVN_NTcAUp-iQ5M8c9UoEhKBHoDQ"
  },
  "data": {
    "name": "Other Org 1749828376035",
    "description": "Other organization for cross-access test",
    "email": "other-org-1749828376035@example.com",
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
    "etag": "W/\"229-bH+URe0Ba6oN9rIlE+D5mkZiDt0\"",
    "date": "Fri, 13 Jun 2025 15:26:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "e385a265-a69a-4ee2-bdbc-9b27f53ae856",
      "name": "Other Org 1749828376035",
      "type": "shelter",
      "description": "Other organization for cross-access test",
      "logo": null,
      "address": "789 Other Org Boulevard",
      "phone": "+1122334455",
      "email": "other-org-1749828376035@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "qcgfYhJauhXUeSQkrP0caBcflNq2",
      "createdAt": "2025-06-13T15:26:16.362Z",
      "updatedAt": "2025-06-13T15:26:16.362Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 433.1 ms  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=db21f05f-dcd0-4733-a70f-e5861b3f4a4b (491.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3NSwidXNlcl9pZCI6InFjZ2ZZaEphdWhYVWVTUWtyUDBjYUJjZmxOcTIiLCJzdWIiOiJxY2dmWWhKYXVoWFVlU1FrclAwY2FCY2ZsTnEyIiwiaWF0IjoxNzQ5ODI4Mzc1LCJleHAiOjE3NDk4MzE5NzUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPjLhHCK9tKo4Iw2CStF6sMlVF3SSoi3u1PPO8h_YhjQIyuiw72fKaQRkSImQP-Zw66EzuhduiCB3d-W0W_pAAXCf9ejVF9iIEh9RsRWko-6m5qyY7eC4GWhTIIVVrXn-7ABthHkB-aHChksEO0-_TTbIvWlDKbiKRH_0sYD5RBkG1YAqG2TsVU4xFf9xroRCooszM7iyq6Q7hiACSCHduZ3L3v2bbqFCMFRaLtkHrvZnPjeHALbFUA2tS1Qjm9Q1MDh69YSrY7rqCQap1didJPlaBzlybgsfbDb_5kENhLqjctz7wpE2gd6lagVN_NTcAUp-iQ5M8c9UoEhKBHoDQ"
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
    "date": "Fri, 13 Jun 2025 15:26:16 GMT",
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

**⏱️ Duration:** 491.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1084.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1749828376965@example.com",
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
    "etag": "W/\"639-Tm4+ilHtZwptPdCSyyziZEn4LE8\"",
    "date": "Fri, 13 Jun 2025 15:26:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "awpCDWR7Vxc4nnWN00F7RMKSp9k2",
        "email": "cross-org-invite-1749828376965@example.com",
        "name": "Cross Org Invite User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3NywidXNlcl9pZCI6ImF3cENEV1I3VnhjNG5uV04wMEY3Uk1LU3A5azIiLCJzdWIiOiJhd3BDRFdSN1Z4YzRubldOMDBGN1JNS1NwOWsyIiwiaWF0IjoxNzQ5ODI4Mzc3LCJleHAiOjE3NDk4MzE5NzcsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ5ODI4Mzc2OTY1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0OTgyODM3Njk2NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ikQcFER23HWwIYACaB8grUB_NqgSgLHHrPJok2Xo9GRN-u3HW_usQPQNhSXlIuWDt2CzD9iPwuOkjbdtqEj0R67AOGc-cN8QKfO3GRgtVbEeiTw3Smf5QTKeiF4n4J36QAOz6oj7uf1XwyTCBjH0hlYsWIxGpTvvie-Dbw9MvgkXHpFczBwlGLtX9Nr_FRkKUjO07k5J6DTD6bORSncG3fbnWK0nZpwYYljRj1vXosqIcpxWn-7perxTKFkHm-yQYptTEtiT9G93BdEwoGYVpFtcymEB40xX8cPi7irgHGba3JOHXgPeHbtEzruqNhnQbBnWRXWhFwRfoklmFZ78kg",
        "refreshToken": "AMf-vBx-d0oiloBrBx5Ntb9Uxu6NbvinImIXTM0OUK91pBYPOe8W7JnTR8mNVWwzaAkRjO3Wd7Q8u013CY51BYN4sfBjF4va5_-HdYdmkvmyTAYwI2VA1F9JsKLPfWeLLbouIkcQPLATv8B5OUHfo9vKntUMDrR0GuVpeSGbgAtIK2PRyMg-3EN15PlLhJxTv4BiQIP3lFiNWZ30QixoCwXwmM1LMe1CEgxUO621nvTL88sMLzNVuwVcidNOLVqhpIOzy_aPkz9o",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1084.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (442.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyODM3NSwidXNlcl9pZCI6InFjZ2ZZaEphdWhYVWVTUWtyUDBjYUJjZmxOcTIiLCJzdWIiOiJxY2dmWWhKYXVoWFVlU1FrclAwY2FCY2ZsTnEyIiwiaWF0IjoxNzQ5ODI4Mzc1LCJleHAiOjE3NDk4MzE5NzUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjgzNzQ1NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cPjLhHCK9tKo4Iw2CStF6sMlVF3SSoi3u1PPO8h_YhjQIyuiw72fKaQRkSImQP-Zw66EzuhduiCB3d-W0W_pAAXCf9ejVF9iIEh9RsRWko-6m5qyY7eC4GWhTIIVVrXn-7ABthHkB-aHChksEO0-_TTbIvWlDKbiKRH_0sYD5RBkG1YAqG2TsVU4xFf9xroRCooszM7iyq6Q7hiACSCHduZ3L3v2bbqFCMFRaLtkHrvZnPjeHALbFUA2tS1Qjm9Q1MDh69YSrY7rqCQap1didJPlaBzlybgsfbDb_5kENhLqjctz7wpE2gd6lagVN_NTcAUp-iQ5M8c9UoEhKBHoDQ"
  },
  "data": {
    "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
    "userId": "awpCDWR7Vxc4nnWN00F7RMKSp9k2",
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
    "date": "Fri, 13 Jun 2025 15:26:18 GMT",
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

**⏱️ Duration:** 442.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.24s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=db21f05f-dcd0-4733-a70f-e5861b3f4a4b (683.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "etag": "W/\"727-hepqqtXOJh7De5gx4JqWDEkAsrw\"",
    "date": "Fri, 13 Jun 2025 15:26:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "7fcb5e22-9250-41bf-93d2-fffdcc6352d9",
        "userId": "O9gTmc03qTUcU9opD7RAVy56HcB3",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T15:25:53.926Z",
        "updatedAt": "2025-06-13T15:25:53.926Z"
      },
      {
        "id": "d66baf51-4eb7-4597-9b6a-8bff770b95fe",
        "userId": "1AE7h3n1OEMC4kCSdkGQ2McWjCi2",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T15:25:55.650Z",
        "updatedAt": "2025-06-13T15:25:55.650Z"
      },
      {
        "id": "cb9b2dc2-98c7-4f4e-94a4-78073af8db7e",
        "userId": "Eka7epXP9BOPplxBUPZGjaqcYSx1",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T15:25:57.546Z",
        "updatedAt": "2025-06-13T15:25:57.546Z"
      },
      {
        "id": "bf94842e-cfb6-4545-a4b2-f9201df178b2",
        "userId": "P1F6BQs1x1Z6NZcFjaktipohJqH2",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T15:25:59.559Z",
        "updatedAt": "2025-06-13T15:25:59.559Z"
      },
      {
        "id": "eabb7d0a-5e60-4f15-8457-ea1197606df1",
        "userId": "CdVewYo2l1gDIknNrWywWeEyEw33",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T15:26:01.372Z",
        "updatedAt": "2025-06-13T15:26:01.372Z"
      },
      {
        "id": "6a60cc35-a115-43b3-b8de-0d0239833788",
        "userId": "XLL4SRuGJXW4bfqh2m5aH5ZsV8f2",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T15:25:49.570Z",
        "updatedAt": "2025-06-13T15:26:05.099Z"
      },
      {
        "id": "54edbf29-7f64-432d-9a5e-896be154fa50",
        "userId": "2UIZX3Y6pwNP4FUDlTrZvTgSkqH2",
        "organizationId": "db21f05f-dcd0-4733-a70f-e5861b3f4a4b",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T15:26:10.790Z",
        "updatedAt": "2025-06-13T15:26:10.790Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 683.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=e385a265-a69a-4ee2-bdbc-9b27f53ae856 (553.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:19 GMT",
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

**⏱️ Duration:** 553.1 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/e385a265-a69a-4ee2-bdbc-9b27f53ae856 (844.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:20 GMT",
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

**⏱️ Duration:** 844.3 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/6a60cc35-a115-43b3-b8de-0d0239833788 (592.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:21 GMT",
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

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/7fcb5e22-9250-41bf-93d2-fffdcc6352d9 (612.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:21 GMT",
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

**⏱️ Duration:** 612.7 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/d66baf51-4eb7-4597-9b6a-8bff770b95fe (497.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:22 GMT",
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

**⏱️ Duration:** 497.9 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/cb9b2dc2-98c7-4f4e-94a4-78073af8db7e (575.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:22 GMT",
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

**⏱️ Duration:** 575.0 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/bf94842e-cfb6-4545-a4b2-f9201df178b2 (513.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:23 GMT",
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

**⏱️ Duration:** 513.6 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/eabb7d0a-5e60-4f15-8457-ea1197606df1 (514.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:23 GMT",
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

**⏱️ Duration:** 514.1 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/54edbf29-7f64-432d-9a5e-896be154fa50 (521.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:24 GMT",
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

**⏱️ Duration:** 521.1 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/db21f05f-dcd0-4733-a70f-e5861b3f4a4b (853.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzNDUsImV4cCI6MTc0OTgzMTk0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AqC5X3jYaqUUIfnkuRn7b1XsONnireQVilrIwK3V1lpF8pkLb28lkQs8uJv_0fiPxCRWKodj92_F0ycuSFl6fBvekTKLkCV7BnsvsdlmxugRbWDOj4-1HpLV9HPxShffF8z32NXCWr96l_YGZxFh0mLAMK836e0t5wskbUuo-u0Rr5tm4bCXoOwbws3wumlkL6a5BfSoZytgD_nIeRecAqVmzMLfhFwoDFUEHl3KZH9aVzLntxaHBq9Ge9VP85DKgmbHeOEd-kF6kg_AQdwCelf2x73oCVnHgpMZzsS3xoI7oy4oFutq5iieEpokaAnGJo11LDpvCcFawK24fmbRZQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:25 GMT",
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

**⏱️ Duration:** 853.5 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (369.7ms)</summary>

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
    "etag": "W/\"6aa-+on8kuWMt3v8a2DVIIOIhWe+xO0\"",
    "date": "Fri, 13 Jun 2025 15:26:25 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzg1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzODUsImV4cCI6MTc0OTgzMTk4NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TVS9sl92QyMk3EJu0Pi4RvoXjh8-72Hbr0gQBtoTytz9YKAlmJ0QO1VCoLNjoBqIDXy1mRmJfJ6jN3P8pnY7vlYuq4Bs6xePB3Uhweqv0Ydc8Y9DgQtYR1EdCcIucc1ZNCvOpe9lzH2u7mSRkSBHblvnc0wTPl8uHcfA1zvCzrH_g1djsdVOn9Vht-N34hBMffosG8ehxhSZeoxbP9Wuc-ADilb6YRIMmfGUY-Pw09d2ZZqz_Au9AJhCRjZNp_LwmUO4BKNmT0PBoWK_jd_6Sll-US-kE5IwgKaToZ7YsIxbNgqGOdLxSBt1u0oIV1AKZbNTpE3W62AHJllqdGGHDw",
        "refreshToken": "AMf-vBxqGIROkLGQ38PWLfcnjebXBgCZVtk3AcHMiLPAnrsvZ5NjcKEG53Sg3onT7jNDe6R8Zi6j4j9kI5eKdwKnomTBrW7ertDAm4sJMbzTH4K37dnu4X1TuHehGh5hZKR7Zc_d5TN9hl5ny5nuE0Y3C4bPCYcPjP0lSom4tM3ab6sypi5b60PD9Qp_TujIVSUnjuyCI3IEJtKr7riMa423SnnAsLR_ks7ZWmpD6SLRAjN94F6wH59d0xZZ6pqYeT-LHR4oxH8n",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 369.7 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/FUV2ldONl5O9kS75uTso8NQGXqB3 (1218.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzg1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzODUsImV4cCI6MTc0OTgzMTk4NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TVS9sl92QyMk3EJu0Pi4RvoXjh8-72Hbr0gQBtoTytz9YKAlmJ0QO1VCoLNjoBqIDXy1mRmJfJ6jN3P8pnY7vlYuq4Bs6xePB3Uhweqv0Ydc8Y9DgQtYR1EdCcIucc1ZNCvOpe9lzH2u7mSRkSBHblvnc0wTPl8uHcfA1zvCzrH_g1djsdVOn9Vht-N34hBMffosG8ehxhSZeoxbP9Wuc-ADilb6YRIMmfGUY-Pw09d2ZZqz_Au9AJhCRjZNp_LwmUO4BKNmT0PBoWK_jd_6Sll-US-kE5IwgKaToZ7YsIxbNgqGOdLxSBt1u0oIV1AKZbNTpE3W62AHJllqdGGHDw"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:26 GMT",
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

**⏱️ Duration:** 1218.1 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (263.0ms)</summary>

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
    "etag": "W/\"6aa-B2vfcYUo+hMOuBndcpeXc9TbN/E\"",
    "date": "Fri, 13 Jun 2025 15:26:27 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzODcsImV4cCI6MTc0OTgzMTk4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MwuafZkWrb4fZP4Z3t3J-BNaiBUnZspQc0DfT_v1vxODdaoicZHOQL3wyQh06wQyAvHnmkKa2I5CTZdXqBacHOOHEbvHvr_18ILWZU1-3tO_6aSke93ZxJRVakiyQugITenRrn0hQCjzULCzRcfav2b_0e8-Cwhstp3WCOe9eVNaCvbHeI1JP7zCpGBJ5CYs6x5UXYcAJ3EhgZMdJj_lASun6aoxwv4w9v1DbA-dICqi08luw-GZBZfX_8KETNAIKIGEJaNN3eKx7xM1vGhmmnmTLSdOXCKWT7IKvEbv7kBhRIV4MRurNezD105nbK0amsmO3E_lX9RPsWnP1llSrQ",
        "refreshToken": "AMf-vBz6VGIgixwtVCMmwEbfIMZWJCZdr6p4ojgoqAy5Vmu7kfBlCuAUmLd9tKQd1s8AokjamRD96kDgrgLcZknALB4uVemRsKkEHHXrBRf307TkMztua9A_yne2TaNXYLPkq64tYAEznINoy3ki3XMSbVr5pqX6hRgCh4KeRusYEv2MUMHXTXoKr23aRxEQbo5VyuGdG-66F4SZ8at_-O6GCQPXbgGuRomgF52Kd_baHQaPs4vBR1XAH2zBwqugJZ6ae0ryRwt4",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 263.0 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/XLL4SRuGJXW4bfqh2m5aH5ZsV8f2 (1278.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzODcsImV4cCI6MTc0OTgzMTk4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MwuafZkWrb4fZP4Z3t3J-BNaiBUnZspQc0DfT_v1vxODdaoicZHOQL3wyQh06wQyAvHnmkKa2I5CTZdXqBacHOOHEbvHvr_18ILWZU1-3tO_6aSke93ZxJRVakiyQugITenRrn0hQCjzULCzRcfav2b_0e8-Cwhstp3WCOe9eVNaCvbHeI1JP7zCpGBJ5CYs6x5UXYcAJ3EhgZMdJj_lASun6aoxwv4w9v1DbA-dICqi08luw-GZBZfX_8KETNAIKIGEJaNN3eKx7xM1vGhmmnmTLSdOXCKWT7IKvEbv7kBhRIV4MRurNezD105nbK0amsmO3E_lX9RPsWnP1llSrQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:28 GMT",
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

**⏱️ Duration:** 1278.8 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (256.1ms)</summary>

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
    "etag": "W/\"6aa-wqKVQpbegrkYk9s3j4vFk2EHQBY\"",
    "date": "Fri, 13 Jun 2025 15:26:28 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzODgsImV4cCI6MTc0OTgzMTk4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QzAZ9Im39cUA_CFqyQpLqWQPgozWvsXEHzwkbgYAKJ370ik6eW_oiGIQjnA8_ObqQmEe09kE5b_hw2uDkpVlO1vlnLxNoUgyW9HLAmTobIXp-ovz9efhF2dnksVoYgNonp4BcsVYU24sRbjNyH2kyI8UR1lfLvGW-xGW_YIh7tWGKBW_kVJmxMDv9y83peucEAlvLoBARwkNXvtO77qpXZ6wR3GvRChxmCbM0hsTS3RVtTkDKBDXJBCS9nu_T2Thjunm45JREXeTQRaUeIbtWsCVm4ROl0OZG7su-wjlgY9Uy4LTLV7sKF8Tgn0XXBzysoMjiPw3DcOF5f4alAJzlA",
        "refreshToken": "AMf-vBwgM4HnKsHe0ILemDQ8bQGcPUxqukYCenk74Dn4GtCleyr0QVHq4iK-ZDeargunURPdljIskueS6vY1OchWSwueai7hUcmnvXJpWTRpsmTR6PbAUSIvQKGHLCyBfWl003Dof0fzEr8YUVij2zEvlgJMVvicS8OV4OrMsGZglcn5ZbuTRW5ZZxxGVxCj0VXAE4VygqwzP8KFW3vPmPCNeJoBeqF_rlITT6rrssa6uI-Ypr2cOdQbKAJNfZpkTLJ22yO-Pu8q",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 256.1 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/fUD8BTtaMoe4PkH0Jlby4NsZLd73 (1371.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzg4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzODgsImV4cCI6MTc0OTgzMTk4OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QzAZ9Im39cUA_CFqyQpLqWQPgozWvsXEHzwkbgYAKJ370ik6eW_oiGIQjnA8_ObqQmEe09kE5b_hw2uDkpVlO1vlnLxNoUgyW9HLAmTobIXp-ovz9efhF2dnksVoYgNonp4BcsVYU24sRbjNyH2kyI8UR1lfLvGW-xGW_YIh7tWGKBW_kVJmxMDv9y83peucEAlvLoBARwkNXvtO77qpXZ6wR3GvRChxmCbM0hsTS3RVtTkDKBDXJBCS9nu_T2Thjunm45JREXeTQRaUeIbtWsCVm4ROl0OZG7su-wjlgY9Uy4LTLV7sKF8Tgn0XXBzysoMjiPw3DcOF5f4alAJzlA"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:30 GMT",
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

**⏱️ Duration:** 1371.1 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (266.7ms)</summary>

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
    "etag": "W/\"6aa-ZowB0Bbx1s250k6000XImUy45+Y\"",
    "date": "Fri, 13 Jun 2025 15:26:30 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTAsImV4cCI6MTc0OTgzMTk5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KsmM94QWsSJrL_S1zNGQd-v8R1C0vgeDTDn9swSkAtemamqd92FZWOZU5mSbYq6yTcNbxoPxDLUuyD2yEpHD0fY4ti0a-FKhPP2uRMoSUvYqFzO4exIt4_1S4yKIuoxcjcDc1sSVDpiNNFD1Qr9e8zvOHixAk_v_VvGPXjcRA4f9jLlTWVcD1HGZCTc-Ek96GXw3NLeLCnztOJoPhMBQ0clfpLE9fmu8gtQgKjegtv92rXCWda1VefHVfHyJc38PhbNnPJn6wW-i4RgDqwopSrTnNGApn7nKWar2by9xtBGh0mMRjuaVDzrQS5ZCsJrRWsO3J16WPNSp1M_3qvzz9Q",
        "refreshToken": "AMf-vBxxTtYr70np1jB-jE40MCAcbN7illInrtj9NxkfN9HbmOZYOoqaGg5SGc4jxYJvPioBGubYyXBPU_56Ede7QJXz-Bmnw_WXA0-h0aeXK04BP6cCxshflQuqpc74ZJfMlXzJgdYKh6QhiYwSxdOiHcdJa_PnHka3l2McbiMLhjEwt2qppV9yeT6Mn1bSJ-sk0f72VhlZeoEhmM2HK0xw3SodnorRHYb0d_-7jLh5bjDCdfwh4Nj416Ou6fDf0twQ65IDQVY1",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 266.7 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/O9gTmc03qTUcU9opD7RAVy56HcB3 (1276.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTAsImV4cCI6MTc0OTgzMTk5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KsmM94QWsSJrL_S1zNGQd-v8R1C0vgeDTDn9swSkAtemamqd92FZWOZU5mSbYq6yTcNbxoPxDLUuyD2yEpHD0fY4ti0a-FKhPP2uRMoSUvYqFzO4exIt4_1S4yKIuoxcjcDc1sSVDpiNNFD1Qr9e8zvOHixAk_v_VvGPXjcRA4f9jLlTWVcD1HGZCTc-Ek96GXw3NLeLCnztOJoPhMBQ0clfpLE9fmu8gtQgKjegtv92rXCWda1VefHVfHyJc38PhbNnPJn6wW-i4RgDqwopSrTnNGApn7nKWar2by9xtBGh0mMRjuaVDzrQS5ZCsJrRWsO3J16WPNSp1M_3qvzz9Q"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:31 GMT",
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

**⏱️ Duration:** 1276.1 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (257.8ms)</summary>

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
    "etag": "W/\"6aa-umXW/ROvJZ3LwPI8jWq3ZqXS6k0\"",
    "date": "Fri, 13 Jun 2025 15:26:31 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTEsImV4cCI6MTc0OTgzMTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LMt9V9CRDeVcgc_cJ_erT-TJvE3YskmREG2d2wb-1BaRhO0HYG1W-ntjMz92Ad2f353U0Jf93-Q4CWdEF4kO2AIwaTqLIadjT9cyq2trV-LJ4UAQOBtkla9xS3yjlB1pG20lYEmM7KsC_yTCDgPI7O4m7Q2ati-xCXVT8SA6JjrNTKJjYTRC88AXuf2nxl_uLJiS-noxdrkZKq0Iqpa7ZAl8UBXAkqrtufs27GgN7eqOxeyhTa_FVBrq-9a99NwGCUA8Vx7bTvESngevNTa6opGzOezIUVc161CI2FVlw-QXbANChQ7zHa1Fhv27pgsdbtz1aPOmytAtwL5WZmvFQw",
        "refreshToken": "AMf-vBwu5e5sr1uMqQf01a32_9lV4U04ZGai68Bxi3HQxrqXSSaCcZ3DjJfV9tYI2WR7TvxTxMAVbe6a1fAHdB_ut6oHzg4NKRXWCt1pqJlZM4eH9zAN2uZ9OY2lo-Wn2q-hME_sqM-bMpnV5YZXmycq_j7Q3eJbdpYVWkvjvT4e8kffWYUwRqxAG73Pnspg3E-EvOERIcIQPyxSOwBxWGQZbNpW_pPnyv5I6RL14cvJI03rc5Q5eLkXZ5Rdqpv_b474nA5xkwlX",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 257.8 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/1AE7h3n1OEMC4kCSdkGQ2McWjCi2 (1188.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTEsImV4cCI6MTc0OTgzMTk5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LMt9V9CRDeVcgc_cJ_erT-TJvE3YskmREG2d2wb-1BaRhO0HYG1W-ntjMz92Ad2f353U0Jf93-Q4CWdEF4kO2AIwaTqLIadjT9cyq2trV-LJ4UAQOBtkla9xS3yjlB1pG20lYEmM7KsC_yTCDgPI7O4m7Q2ati-xCXVT8SA6JjrNTKJjYTRC88AXuf2nxl_uLJiS-noxdrkZKq0Iqpa7ZAl8UBXAkqrtufs27GgN7eqOxeyhTa_FVBrq-9a99NwGCUA8Vx7bTvESngevNTa6opGzOezIUVc161CI2FVlw-QXbANChQ7zHa1Fhv27pgsdbtz1aPOmytAtwL5WZmvFQw"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:33 GMT",
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

**⏱️ Duration:** 1188.7 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (347.2ms)</summary>

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
    "etag": "W/\"6aa-swhnoEZDBVHvOF131OKhMgDx/IU\"",
    "date": "Fri, 13 Jun 2025 15:26:33 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzkzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTMsImV4cCI6MTc0OTgzMTk5MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.O7ES_JMeJm7z4ql0RaeE3WB70MwpUOnwx4Z1Pw1SzbQC8KeGCEe8IZqGeVbt3Axb_7M993ohyN2KW746D-Nqiwo9INZoZESvyn3JHL0DknpzvlR57ebAICInzXPVLulXiRdtGW986TolFc1F1PKCXGAY80Yd3UB2tWYfp3bYk8tCTA0LP3tb7g2Pj60XTpSnyfPFx_lIU_RtRAuBHwS5I9YAyGhNun5s0fsWP2Am7DWlwEcvnowa2XNZOw_n58GRIZrLktCywZVHsc9i8ouVkWLoX7Gnf3JjcQHIELMA5bL1-sVODFEOCnEDmuHTTdGzdyRdTVlCzUxtl259rlNkRw",
        "refreshToken": "AMf-vBw7FpdgU-UpSygfyR0rlY7g1Zg3OhXjwxdzwRihWMZWWwgJLxZmZSTdFvO7zkOwTkLb5DfCuRLnKlW3nvt_UQV45bWTcEwckBtbph-aQKt28iRH8KIHcWhylveQo47CKzO_vyBUAtQAulQ48OacHr1CMjPeW-LM5G2GTeyM9D4MNTUYsIPDP0gQPe0GhYX78w0ZasAo5OqMT1Ogslo1PeSu_lImrXESSaC3QZZNtO2yMOUC6zzGDNls_hoXp-Rg2IwmyAk6",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 347.2 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/Eka7epXP9BOPplxBUPZGjaqcYSx1 (1372.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4MzkzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTMsImV4cCI6MTc0OTgzMTk5MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.O7ES_JMeJm7z4ql0RaeE3WB70MwpUOnwx4Z1Pw1SzbQC8KeGCEe8IZqGeVbt3Axb_7M993ohyN2KW746D-Nqiwo9INZoZESvyn3JHL0DknpzvlR57ebAICInzXPVLulXiRdtGW986TolFc1F1PKCXGAY80Yd3UB2tWYfp3bYk8tCTA0LP3tb7g2Pj60XTpSnyfPFx_lIU_RtRAuBHwS5I9YAyGhNun5s0fsWP2Am7DWlwEcvnowa2XNZOw_n58GRIZrLktCywZVHsc9i8ouVkWLoX7Gnf3JjcQHIELMA5bL1-sVODFEOCnEDmuHTTdGzdyRdTVlCzUxtl259rlNkRw"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:34 GMT",
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

**⏱️ Duration:** 1372.9 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (238.5ms)</summary>

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
    "etag": "W/\"6aa-rMXPhnJFjW6w8JtHNkuvTVLVsvI\"",
    "date": "Fri, 13 Jun 2025 15:26:34 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTQsImV4cCI6MTc0OTgzMTk5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.h8U3yygCN6_mLWi6JPeVQ8bFNyRA1Vmx8ph0bVzygaB-uPQo471aMOnBzfbEi1A7EY7C_swsyvvqBsOY3MQoP3gpi2j0_c1xHqUqKppjnQyUGbldMNKfCbn90nWuH-5h1CUEaE5eiiKwXvaejki9y9O5pzJnYG-gHQeXYA65eJhst1Tw_Fy16x-2DVPuyT6bJEw3vtdy4z6hCih38gu97lh_pn-MHTol-nc_UueQ434m78cbDTNQgCS6-DrCBpb_QFboNNE4CQGLfKu9XXKCsRdnlWzkTU-HSW0V5v46pRHmdmGy8fRkGfaRl6g6btSTslIATXQS8-TC9FkfMQZ0aw",
        "refreshToken": "AMf-vByQ9tYUytj3bjEF7WgkrFzYN1MKYJqNFVlQfJV2_2SA1iH1gmcmBJq-eA1Zh4kHJsEWwEaSIPUGVJaR7BNm3s65WADPRrYaydway63Czqtjux9WyMQG7QKQ2WgJPrmNaXnp6vCNTT5r6NEHa-4lAcDW_mNqobmMRBgw88BhmSvfBFKrnX6c_tv8qXF6KW9t3Ho3hm3QiSOQAMTrBjO9kyZwnKA5Kh58uSJhk7k2dRODv2G77-PtXlDXdqOct2L61-XeHam2",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 238.5 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/P1F6BQs1x1Z6NZcFjaktipohJqH2 (1396.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTQsImV4cCI6MTc0OTgzMTk5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.h8U3yygCN6_mLWi6JPeVQ8bFNyRA1Vmx8ph0bVzygaB-uPQo471aMOnBzfbEi1A7EY7C_swsyvvqBsOY3MQoP3gpi2j0_c1xHqUqKppjnQyUGbldMNKfCbn90nWuH-5h1CUEaE5eiiKwXvaejki9y9O5pzJnYG-gHQeXYA65eJhst1Tw_Fy16x-2DVPuyT6bJEw3vtdy4z6hCih38gu97lh_pn-MHTol-nc_UueQ434m78cbDTNQgCS6-DrCBpb_QFboNNE4CQGLfKu9XXKCsRdnlWzkTU-HSW0V5v46pRHmdmGy8fRkGfaRl6g6btSTslIATXQS8-TC9FkfMQZ0aw"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:36 GMT",
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

**⏱️ Duration:** 1396.8 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (225.0ms)</summary>

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
    "etag": "W/\"6aa-30YuWN0IA/FuH46oEyVys9UC7kw\"",
    "date": "Fri, 13 Jun 2025 15:26:36 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTYsImV4cCI6MTc0OTgzMTk5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PAXFV7ohdPoZ43k1Ln8lV3RHFwvqkzH5OOWNPkowpnbfinChgfh_8g3zAin9FdnLodul3ZP4Vm-G3rk4evDc4J6LPhr2CsoxuD4Skcd3NNmAWPCydpa7cMCCNDwOgX0K330xqJCTnoUKx4710-ueSioMRtmLyYpl0eIZtP5JoGHj3qcdTgmQVP-CSi9D9xJjZ4J_zI3KvaYIz1OIpxehTAR7Kcl-HOpZCKoPb-r6lvaqXKB-y-Y4eqD2sbUvwzhv2oqUe5NQluY6St1JjRQJdhLeCHBYpOM3_VJZOsOfAlkidnFXDoCYkNmrnk8IQvVqptekPgOnBpUi6PKm0amDOA",
        "refreshToken": "AMf-vBwz7AiRU8qeNVZ0T5BBZhDsJdlecshwVDW-9pJ22PRTjkE_8YlqVYMdU6jehHOqiNendDWA3SsiKaCpUKe83gIdcl8SqVFwqyKOQtdkDLBOOSwqjiAaIT7Y55v1wlZOeAz4A6DvyYXrybLXtslcfV0kM8UiKOT1-BSUHu1AE73DPI-jtbyrwAOP5KKWDSa235FmpMnNiAwsqiabUTD-Qy5i9ZoKxoBWY6OhGZBZlYnJYCq6vXBBPh1YySWvkpUkDTGsUT2X",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 225.0 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/CdVewYo2l1gDIknNrWywWeEyEw33 (1353.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTYsImV4cCI6MTc0OTgzMTk5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PAXFV7ohdPoZ43k1Ln8lV3RHFwvqkzH5OOWNPkowpnbfinChgfh_8g3zAin9FdnLodul3ZP4Vm-G3rk4evDc4J6LPhr2CsoxuD4Skcd3NNmAWPCydpa7cMCCNDwOgX0K330xqJCTnoUKx4710-ueSioMRtmLyYpl0eIZtP5JoGHj3qcdTgmQVP-CSi9D9xJjZ4J_zI3KvaYIz1OIpxehTAR7Kcl-HOpZCKoPb-r6lvaqXKB-y-Y4eqD2sbUvwzhv2oqUe5NQluY6St1JjRQJdhLeCHBYpOM3_VJZOsOfAlkidnFXDoCYkNmrnk8IQvVqptekPgOnBpUi6PKm0amDOA"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:37 GMT",
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

**⏱️ Duration:** 1353.1 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (345.1ms)</summary>

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
    "etag": "W/\"6aa-JGyzpFMZa9Z+Rl4/nNQwYC/8AhY\"",
    "date": "Fri, 13 Jun 2025 15:26:38 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTgsImV4cCI6MTc0OTgzMTk5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.G1SH6Isuparz9tfc9sLxyFDsaAkrPuRUmro_xR8S4jDJ5SlOgFZJ_kMbuy2Hj_2_2sMDAjBUU17ugoFfIkGX6a-Mum5wrPuK9XYnObokinfbXe5K6uejzzbxPyWG_9PI_a0DtVDgm1s_PqO1bbqjGZQP4cruWwj4QHWpzX63uNfUGJUOc-EHx7MO020QXU5z5ch5FshlLg73ly0cAnicWgv6SPM7w9Jbi8t_XzTVs3_pHMYiaBKIOsKAQ__LNgYw9ov4SYE1aOyqOaBMUK2l779ZK9PPzZcH4odU_eU-2cOOaAgIx2CROrtYQElv7fzQppAIIbYwK7jFo0H-njvphA",
        "refreshToken": "AMf-vBxW8SCyjuK87CK-spKcQgOHQYqGbnDYgDXGEv4pVyNvK5tEVfYUmw7LcTBLVdE4QHpRJqi5YgjEiGZAy_uxnPu2m9qYbh5m7JXEQgYsFpKiCCZy_J04BZAbDY7t3kv82Jzdq8nSzsbe_FY-sGvvsU-NOS058Yzrz_WEEUC2JmnNjQ2cBIKeFes9TwYQ5evVFSytWAg2ZD1NZMaBTMaGK5GDK3od8VJRCVV8RJIcp7lRIZPF_4SfUi10H3JDmGtE5Ip9S7qc",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 345.1 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/lOycemlHl8MUGk0uusw3Blz1OeV2 (1208.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTgsImV4cCI6MTc0OTgzMTk5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.G1SH6Isuparz9tfc9sLxyFDsaAkrPuRUmro_xR8S4jDJ5SlOgFZJ_kMbuy2Hj_2_2sMDAjBUU17ugoFfIkGX6a-Mum5wrPuK9XYnObokinfbXe5K6uejzzbxPyWG_9PI_a0DtVDgm1s_PqO1bbqjGZQP4cruWwj4QHWpzX63uNfUGJUOc-EHx7MO020QXU5z5ch5FshlLg73ly0cAnicWgv6SPM7w9Jbi8t_XzTVs3_pHMYiaBKIOsKAQ__LNgYw9ov4SYE1aOyqOaBMUK2l779ZK9PPzZcH4odU_eU-2cOOaAgIx2CROrtYQElv7fzQppAIIbYwK7jFo0H-njvphA"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:39 GMT",
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

**⏱️ Duration:** 1208.1 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (227.8ms)</summary>

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
    "etag": "W/\"6aa-3I7R0pAGzHnvL479bCJos/84MEs\"",
    "date": "Fri, 13 Jun 2025 15:26:39 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTksImV4cCI6MTc0OTgzMTk5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NzH0bCmGHEmLjWqr0J2n4KLTSxQHxLfpEOFd13k6-MDAv_gT8zeMVTYoFkxVN_ZlQv7V34uOBN4BfNGREphXTOx5GddhCNWfEg4hTJrbHuai9SsE5wvxzChE0kOhHEFnM02odJRoQfMkxcjZY-vXELUWVf7376OTQFG7W04W5ijWJvENbMxYiiSDIbxXZge4TkTzkIrOOkV2_VfOJRHBSR3nC05bNhp5B8WoDAjcFuYoogxJtp7nP9CGYD5l4rM0JRNIXJy31q9h6KkFiFA7r6-brwyDtBWkrNEzwRrvX8jf4YWdwAoK88VsHO53mnx3Tcj07eTuJkZWXJwPIqg-fQ",
        "refreshToken": "AMf-vBxO_FO47-vPaElr9jD_odPYmPiVHBaa29YgseFY8IomHaSeRlMzIhAkFaktohHYiv79gYITtDpFOu0C5Z-RdYtUJcvjO9lPGnvLR3D63SBpiy1f4Q1YYdm5KaPzL08ZCArIGn1WyNiKxHLTI5enPtN_HcPDbUldYaa5nl3rWIIvS20vVPU8cXFKMYOSn2LsaGIgeNxC96woscKj0LVT3b1iRrodj2E-Ou2f-JLVUM3vsvLW2Be4abbVftghDbAjBZXaaFe_",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 227.8 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/2UIZX3Y6pwNP4FUDlTrZvTgSkqH2 (1147.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4Mzk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjgzOTksImV4cCI6MTc0OTgzMTk5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NzH0bCmGHEmLjWqr0J2n4KLTSxQHxLfpEOFd13k6-MDAv_gT8zeMVTYoFkxVN_ZlQv7V34uOBN4BfNGREphXTOx5GddhCNWfEg4hTJrbHuai9SsE5wvxzChE0kOhHEFnM02odJRoQfMkxcjZY-vXELUWVf7376OTQFG7W04W5ijWJvENbMxYiiSDIbxXZge4TkTzkIrOOkV2_VfOJRHBSR3nC05bNhp5B8WoDAjcFuYoogxJtp7nP9CGYD5l4rM0JRNIXJy31q9h6KkFiFA7r6-brwyDtBWkrNEzwRrvX8jf4YWdwAoK88VsHO53mnx3Tcj07eTuJkZWXJwPIqg-fQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:40 GMT",
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

**⏱️ Duration:** 1147.6 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (299.7ms)</summary>

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
    "etag": "W/\"6aa-smk/tCOGvf8KSVf5npolZxY+lcA\"",
    "date": "Fri, 13 Jun 2025 15:26:41 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4NDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4Mjg0MDEsImV4cCI6MTc0OTgzMjAwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dZEEcz2_U2qWoPQkJA0dHVOn0pUmYpebOI1c3BibOtodwvwsGvwpEVtGN0yj7vB4ZhJOj2ohYtyEQGQFIRBBX_c5x9_KkCBPgRbvmcG41OrpDc-_pbPhtDq9pjH9IKuPFxK4VDXRJwwwgD2QU49YdEV_ngJtBWKn6OQvpJ-hK415MVo34t--xo646EDJxs1qgsFFT2FZ4T9StZnZfJ9uLhLXk0RrhL23Jvb72HcqyvkyWrCD5bd7uxQZIucnMVoszihBsRsFv94hGbogz1Bc5Fry0bXX2rYG7jrwr47of9WYeu6lR7U0j-4Fywx4KVwzvnHyQFX7BLCpSSI5AOGAKg",
        "refreshToken": "AMf-vBzdpLmF9VkGLdefPM-Lzu43_1S9H_UtOzeQBhdhkhjDQy15QgvfRty6cKxj2M0bkyiEcr4-jVi44-oHCwuxejuV3tDNyQHL5_EI9ks8Ms0ExEog1bFUTHjl6asFjLVF5zWG7LpATYrDreKZBmp8MpCdwvmMSqHdrRza672TXUz3jqIic9TYJpRENorS2kMk9NnCBfi0qNXvWN3eUkUU6AcZnz6KnN0-SahzZ2zcaOGmBbFgnKWpgLPTjL2a475EHq9zzEHA",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 299.7 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/z2IMuwZv2xZ5dVl0ffGGkazSbJ13 (1183.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4NDAxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4Mjg0MDEsImV4cCI6MTc0OTgzMjAwMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dZEEcz2_U2qWoPQkJA0dHVOn0pUmYpebOI1c3BibOtodwvwsGvwpEVtGN0yj7vB4ZhJOj2ohYtyEQGQFIRBBX_c5x9_KkCBPgRbvmcG41OrpDc-_pbPhtDq9pjH9IKuPFxK4VDXRJwwwgD2QU49YdEV_ngJtBWKn6OQvpJ-hK415MVo34t--xo646EDJxs1qgsFFT2FZ4T9StZnZfJ9uLhLXk0RrhL23Jvb72HcqyvkyWrCD5bd7uxQZIucnMVoszihBsRsFv94hGbogz1Bc5Fry0bXX2rYG7jrwr47of9WYeu6lR7U0j-4Fywx4KVwzvnHyQFX7BLCpSSI5AOGAKg"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:42 GMT",
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

**⏱️ Duration:** 1183.1 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (231.9ms)</summary>

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
    "etag": "W/\"6aa-TDecJfQwFjrm/XfRvb5VKKYQ8wA\"",
    "date": "Fri, 13 Jun 2025 15:26:42 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4NDAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4Mjg0MDIsImV4cCI6MTc0OTgzMjAwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MvHv2JIy1Rhmfx2_H_8Jf_oSWAS2rGszeJOtgtNeqIPv0vJrFlNR0zLzphp4JfMCe9poCkrdWChXJxcDBa5RMlaZHH6W8VzkbdinP8wIz5eEF2q-wWBqVOV9ipN2LbOQavAy6GBRcfvQ_Yo__goFvV-2mshX0Ozlyweq8Nn8rPZatyUOggbPFJ9iTDy9JNsWDoS-LsMyOwtyCUkeXRiewVsAApj2qPGLuWy-JRBaxJg_I79z6K6UmAFs5UC3lXBkThB-hVjNl3l8CniIlK2XRG3LeUQLdh5IOkQJ4hSGZnJwqLae1ovZKVeG_tbuulYDjBwFBkOahL_8hPizb6a8dw",
        "refreshToken": "AMf-vBxaOWzF3lDO6tdjZuDlgPKZHFrKunsfNymtIDZrncKOLjb_KkUjnUIuGGliMlhSsFxgwF2dPUvvshxcLWHp_4KX2NEb0JdSfpOhbLaTz1LsPfIVwihEq2SKyt9kYTVM9VZa3CGiU32UAGsUhdJjjNDzHp7XvttAXJ3l2Z5c73__XvZDc_9YvOr7FodDSsmIleCdTAvt2ecI0GII1oJwxPwJSIOm3-f06QdeHQO9JRsHzX2qtE8kWOjKwh1M2pABxTd4tZTi",
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

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/qcgfYhJauhXUeSQkrP0caBcflNq2 (1144.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4NDAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4Mjg0MDIsImV4cCI6MTc0OTgzMjAwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MvHv2JIy1Rhmfx2_H_8Jf_oSWAS2rGszeJOtgtNeqIPv0vJrFlNR0zLzphp4JfMCe9poCkrdWChXJxcDBa5RMlaZHH6W8VzkbdinP8wIz5eEF2q-wWBqVOV9ipN2LbOQavAy6GBRcfvQ_Yo__goFvV-2mshX0Ozlyweq8Nn8rPZatyUOggbPFJ9iTDy9JNsWDoS-LsMyOwtyCUkeXRiewVsAApj2qPGLuWy-JRBaxJg_I79z6K6UmAFs5UC3lXBkThB-hVjNl3l8CniIlK2XRG3LeUQLdh5IOkQJ4hSGZnJwqLae1ovZKVeG_tbuulYDjBwFBkOahL_8hPizb6a8dw"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:43 GMT",
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

**⏱️ Duration:** 1144.9 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (270.8ms)</summary>

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
    "etag": "W/\"6aa-N6yei8F+GaGprmrIrDcCyDCsrsE\"",
    "date": "Fri, 13 Jun 2025 15:26:44 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4NDAzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4Mjg0MDMsImV4cCI6MTc0OTgzMjAwMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gjggBvr7ifHrLUw-9aP-RPDoQxn15uWIGaM2BeVbGbdQroL4KJcKJ9_VS-DPULN733oZ4nRw1lhDrmZcAh1AFFWhF-uU08plr0UPHbHJ_gwnYQR0A81JgXDUd_qNzQrgph_qwjTXEuGB1f--RcGmhF56F42nESHDsyeYzNdKSdQENgCs-KG0Sa8PogB7EMCMdhFVEytBGIM2e9Dxv-UG_mbMP0DISzchTRYCLBQ9z77CnHAJ0YY8Bc0ATyxRWgUgnP8KUrsXcQhDASq40etzcYMWqiidE-QyFEkLfcWUpBLY7o17KrUc_7fojWQ-TJgdaZkmTKWQ8-08tEHSU32SaA",
        "refreshToken": "AMf-vByYL2D3g4_aZ5UzufES46PI-vGh3UCpjGwT6frYclOw802ZWVwKCc8xMIw0MuA-GbkDfEPVg0F5atsBfkjYmYtjXXAlIuXGLirDpDHMR0synTeIj49q_a77bs1GKqYDwbgPXLq-_QYcCtXvPFV-1ozEThj9DSL8QUS2TyoqllFDFKElFRIjFvibaCY1Ppk5HNQQQgP_BQ4miEZJRqEnvSZL017EK246zghqueA82L9nFqTi5wLL7_TCtiSzrZwwF1oKmY3W",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 270.8 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/awpCDWR7Vxc4nnWN00F7RMKSp9k2 (1148.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI4NDAzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4Mjg0MDMsImV4cCI6MTc0OTgzMjAwMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gjggBvr7ifHrLUw-9aP-RPDoQxn15uWIGaM2BeVbGbdQroL4KJcKJ9_VS-DPULN733oZ4nRw1lhDrmZcAh1AFFWhF-uU08plr0UPHbHJ_gwnYQR0A81JgXDUd_qNzQrgph_qwjTXEuGB1f--RcGmhF56F42nESHDsyeYzNdKSdQENgCs-KG0Sa8PogB7EMCMdhFVEytBGIM2e9Dxv-UG_mbMP0DISzchTRYCLBQ9z77CnHAJ0YY8Bc0ATyxRWgUgnP8KUrsXcQhDASq40etzcYMWqiidE-QyFEkLfcWUpBLY7o17KrUc_7fojWQ-TJgdaZkmTKWQ8-08tEHSU32SaA"
  }
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
    "date": "Fri, 13 Jun 2025 15:26:45 GMT",
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

**⏱️ Duration:** 1148.5 ms  

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
- Test organization: Test Org for Memberships 1749828347292
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
