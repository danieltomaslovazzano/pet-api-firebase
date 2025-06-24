# E2E Test Report: memberships-tests

**Date:** 6/6/2025  
**Time:** 12:28:57 AM  
**Duration:** 15.66s  
**Tests:** 16 total, 16 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully | PASSED | 0.77s | Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully |
| ✅ Memberships E2E Tests Invite User to Organization Should fail to invite same user twice | PASSED | 0.56s | Memberships E2E Tests Invite User to Organization Should fail to invite same user twice |
| ✅ Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions | PASSED | 1.45s | Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions |
| ✅ Memberships E2E Tests Invite User to Organization Should invite user with different roles | PASSED | 1.59s | Memberships E2E Tests Invite User to Organization Should invite user with different roles |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by organization | PASSED | 0.66s | Memberships E2E Tests Get Memberships Admin should get memberships by organization |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by user | PASSED | 0.55s | Memberships E2E Tests Get Memberships Admin should get memberships by user |
| ✅ Memberships E2E Tests Get Memberships User should get their own memberships | PASSED | 0.50s | Memberships E2E Tests Get Memberships User should get their own memberships |
| ✅ Memberships E2E Tests Get Memberships Should fail without userId or organizationId | PASSED | 0.52s | Memberships E2E Tests Get Memberships Should fail without userId or organizationId |
| ✅ Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships | PASSED | 0.41s | Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships |
| ✅ Memberships E2E Tests Get Membership by ID Admin should get membership by ID | PASSED | 0.01s | Memberships E2E Tests Get Membership by ID Admin should get membership by ID |
| ✅ Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID | PASSED | 0.55s | Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID |
| ✅ Memberships E2E Tests Update Member Role Admin should update member role successfully | PASSED | 0.00s | Memberships E2E Tests Update Member Role Admin should update member role successfully |
| ✅ Memberships E2E Tests Update Member Role Should fail with invalid role | PASSED | 0.02s | Memberships E2E Tests Update Member Role Should fail with invalid role |
| ✅ Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions | PASSED | 0.01s | Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions |
| ✅ Memberships E2E Tests Remove Member Admin should remove member successfully | PASSED | 0.51s | Memberships E2E Tests Remove Member Admin should remove member successfully |
| ✅ Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions | PASSED | 0.02s | Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions |


---

## Detailed Execution Log

### Test: Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.77s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (754.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
  },
  "data": {
    "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
    "userId": "CzlwHVHB2OVt3tYCxq2RZ6SPRqw1",
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
    "etag": "W/\"174-D5Nl++pvRoSgAAc29ZqBk9lRhos\"",
    "date": "Thu, 05 Jun 2025 22:28:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "7bc35a01-648e-402b-8dfe-59bfd2626022",
      "userId": "CzlwHVHB2OVt3tYCxq2RZ6SPRqw1",
      "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-05T22:28:47.489Z",
      "updatedAt": "2025-06-05T22:28:47.489Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 754.4 ms  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (559.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
  },
  "data": {
    "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
    "userId": "CzlwHVHB2OVt3tYCxq2RZ6SPRqw1",
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
    "content-language": "en",
    "x-supported-languages": "en, es",
    "content-type": "application/json; charset=utf-8",
    "content-length": "173",
    "etag": "W/\"ad-+MPprO2HZb/wKTb/l+k6Dw9IVq8\"",
    "date": "Thu, 05 Jun 2025 22:28:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": false,
    "error": "Error inviting user",
    "details": {
      "error": "User is already a member of this organization"
    },
    "messageKey": "memberships.error_inviting",
    "language": "en"
  }
}
```

**⏱️ Duration:** 559.5 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (936.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1749162528242@example.com",
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
    "etag": "W/\"631-kfmqI1VzX05zJm/3SmNVonrV/+M\"",
    "date": "Thu, 05 Jun 2025 22:28:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "LVTi6ocO3vc7ocOvXURWKPwm5423",
        "email": "no-perm-invite-1749162528242@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MjUyOCwidXNlcl9pZCI6IkxWVGk2b2NPM3ZjN29jT3ZYVVJXS1B3bTU0MjMiLCJzdWIiOiJMVlRpNm9jTzN2YzdvY092WFVSV0tQd201NDIzIiwiaWF0IjoxNzQ5MTYyNTI4LCJleHAiOjE3NDkxNjYxMjgsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0OTE2MjUyODI0MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ5MTYyNTI4MjQyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.mdvM6hRoggHKjgHrvvb_jLj3dFkVZ1N-qYl39yRokugkvjW4YY3yreylx9gXLY2h0p2sT2G0OnYjB3Y6CZLSLkt2VWumi_b0RJ3LtuKvhUfsKZUZphEcakLbF5VK1WftXyRLz9By5AbsJdMEijCQVTbYCqi9Ba1DUq4Qam8YYHtbeE2z2tqF7BjlqnD0-ecWklilO_rEzb7xOckJZ4v2cJshH4_7K0feFkJfQjqqf6zwAh_Ul2n7tuJYwkx2N_M6pQ-QSRC_bRvGNubRqYqcR33ZQpkm2XwTC2rF4BtyGYCeqdAwHsOCdtPt4lDO9Ncz6VMV2JRibb2qR-BIu2jPag",
        "refreshToken": "AMf-vBx-WTdba6090Aj3D_X1VzZMfXEbk-xTSZrjk-L2G6ouDt8pH8zb2MDJDumR5t3dh0VHOb5kwFpQmR7kwccOdoKvArGS4tW_MSSaALoK1CbLCiA2rsl6srFJAxFX26WxeZDk0BeJqw1uMEbdJ62FGbzrS5UUOCfpvc3JxPsxgpB-lZBWC2s-1NQ_qqlJS1Rd3bKC2lqOqirFeFeNub0dXihs5RftVTN0HyTttgMdVibWgH-owBV6RCm5NpTwHJdK7RnO00Uz",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 936.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (509.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MjUyNCwidXNlcl9pZCI6InhzM1BsN1hUUnVUQTlqaUQ0cFkzcHVaTGZ6aDEiLCJzdWIiOiJ4czNQbDdYVFJ1VEE5amlENHBZM3B1WkxmemgxIiwiaWF0IjoxNzQ5MTYyNTI0LCJleHAiOjE3NDkxNjYxMjQsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTE2MjUyMjc3NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5MTYyNTIyNzc0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LLgTEb4ILkfp3LTMnxrQFHBFH585h-bTrVegDDv4sy8t2e-2Xd_euCce7CL2Ln4vIwQDE2UsGqZ1HQNrWac2SvpDpxLiRjuJSwRfXkPbPLNAOH8unqBtVbxoJW_WnufubG7s9doT1kT_bgWVAB5u3xfDUWY0aRBuV_g9oQRCZWz-na9N8ocI2d5visNuqo2UG4MoprtlT5hlZQwKV-KoyNNpN9izPppcrpnPVXTNOHXT4WyC9HjKHmXFKyIYIhqjjXTko5Qw9E1NeJ2Q-Nlhp26UtF8OGzfBXI4nGL35Kg_s-VBXCV7XfMsNWhK2ejdAYf7ZaQ6oXI_EWJndtbfHbQ"
  },
  "data": {
    "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
    "userId": "LVTi6ocO3vc7ocOvXURWKPwm5423",
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
    "date": "Thu, 05 Jun 2025 22:28:49 GMT",
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

**⏱️ Duration:** 509.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 1.59s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (921.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1749162529695@example.com",
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
    "etag": "W/\"603-W52oWuvtBAQ+XhkOZXvYwU2VMBs\"",
    "date": "Thu, 05 Jun 2025 22:28:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "I3254DDIoGbL2XLnRlDaqy47j7h1",
        "email": "admin-user-1749162529695@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MjUzMCwidXNlcl9pZCI6IkkzMjU0RERJb0diTDJYTG5SbERhcXk0N2o3aDEiLCJzdWIiOiJJMzI1NERESW9HYkwyWExuUmxEYXF5NDdqN2gxIiwiaWF0IjoxNzQ5MTYyNTMwLCJleHAiOjE3NDkxNjYxMzAsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ5MTYyNTI5Njk1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0OTE2MjUyOTY5NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EpaaGMsYF2G5uIwLAJDtpInlwTrJIh0jGFX3l8eb7BQcTfKUIfoylyiV1SUgpWglXgsMiy3ypQDGGzd9ny2i20Efv2MoQtrwfR7aQtBmH-Zyup-tEdfHtctOiFbPuBt6z5QZc3xvIKKqTkCCDFhMjii2M9wWSW1M8fibL1j6iT-3jzOQODuIkpTNfHFtumJz889gDS_T8C1UY3_VL5LYWj2geb753reCl0sTYSxCAhVYWxAlQQyGLrOGWkE8cFoZt4GVUUA1Z4fmwCXw-VFOLE-tYm01Ufex0OQsk93dBci_YUxmij5QM9N4L_6mDDmlNy2HFW-q7IIHSo40SYighw",
        "refreshToken": "AMf-vBzo5eHbRN62RrwzDWX1cAz61zvF2yql-6ZDEcrZAGstq0HZgrs3WJmRum01QYjd3ARmtq5CQTNO4PANBb104ik_tfKZmdS-TPJN_W481QE4e9ettQX1A8_SjqxtM7u0hct2alhRI3ioLCqowhzIg0AhM1SeF9nNKZS799I-Qhf6i9APhS1A78AykZF6YI0DacbOWCifatZ56-rLgiHKywKvGts2Jlqt-qyVKq-CQ-5u1fVvllc",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 921.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (661.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
  },
  "data": {
    "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
    "userId": "I3254DDIoGbL2XLnRlDaqy47j7h1",
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
    "etag": "W/\"173-KwcGtGcRtyjx1/vvAl6IIxg43Bg\"",
    "date": "Thu, 05 Jun 2025 22:28:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "6af4aa16-9f33-4f71-8974-29f43dd1d6ea",
      "userId": "I3254DDIoGbL2XLnRlDaqy47j7h1",
      "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-05T22:28:51.208Z",
      "updatedAt": "2025-06-05T22:28:51.208Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 661.2 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=16e7ec49-cec9-4e9c-af9f-046768df5815 (657.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
  }
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
    "etag": "W/\"224-6JuyiLC196qjpXTCkTV4+dEIJAM\"",
    "date": "Thu, 05 Jun 2025 22:28:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "7bc35a01-648e-402b-8dfe-59bfd2626022",
        "userId": "CzlwHVHB2OVt3tYCxq2RZ6SPRqw1",
        "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-05T22:28:47.489Z",
        "updatedAt": "2025-06-05T22:28:47.489Z"
      },
      {
        "id": "6af4aa16-9f33-4f71-8974-29f43dd1d6ea",
        "userId": "I3254DDIoGbL2XLnRlDaqy47j7h1",
        "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-05T22:28:51.208Z",
        "updatedAt": "2025-06-05T22:28:51.208Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 657.1 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (548.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
  }
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
    "date": "Thu, 05 Jun 2025 22:28:52 GMT",
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

**⏱️ Duration:** 548.9 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=xs3Pl7XTRuTA9jiD4pY3puZLfzh1 (494.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MjUyNCwidXNlcl9pZCI6InhzM1BsN1hUUnVUQTlqaUQ0cFkzcHVaTGZ6aDEiLCJzdWIiOiJ4czNQbDdYVFJ1VEE5amlENHBZM3B1WkxmemgxIiwiaWF0IjoxNzQ5MTYyNTI0LCJleHAiOjE3NDkxNjYxMjQsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTE2MjUyMjc3NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5MTYyNTIyNzc0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LLgTEb4ILkfp3LTMnxrQFHBFH585h-bTrVegDDv4sy8t2e-2Xd_euCce7CL2Ln4vIwQDE2UsGqZ1HQNrWac2SvpDpxLiRjuJSwRfXkPbPLNAOH8unqBtVbxoJW_WnufubG7s9doT1kT_bgWVAB5u3xfDUWY0aRBuV_g9oQRCZWz-na9N8ocI2d5visNuqo2UG4MoprtlT5hlZQwKV-KoyNNpN9izPppcrpnPVXTNOHXT4WyC9HjKHmXFKyIYIhqjjXTko5Qw9E1NeJ2Q-Nlhp26UtF8OGzfBXI4nGL35Kg_s-VBXCV7XfMsNWhK2ejdAYf7ZaQ6oXI_EWJndtbfHbQ"
  }
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
    "date": "Thu, 05 Jun 2025 22:28:52 GMT",
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

**⏱️ Duration:** 494.5 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (511.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
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
    "date": "Thu, 05 Jun 2025 22:28:53 GMT",
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

**⏱️ Duration:** 511.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (411.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MjUyNCwidXNlcl9pZCI6InhzM1BsN1hUUnVUQTlqaUQ0cFkzcHVaTGZ6aDEiLCJzdWIiOiJ4czNQbDdYVFJ1VEE5amlENHBZM3B1WkxmemgxIiwiaWF0IjoxNzQ5MTYyNTI0LCJleHAiOjE3NDkxNjYxMjQsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTE2MjUyMjc3NEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5MTYyNTIyNzc0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LLgTEb4ILkfp3LTMnxrQFHBFH585h-bTrVegDDv4sy8t2e-2Xd_euCce7CL2Ln4vIwQDE2UsGqZ1HQNrWac2SvpDpxLiRjuJSwRfXkPbPLNAOH8unqBtVbxoJW_WnufubG7s9doT1kT_bgWVAB5u3xfDUWY0aRBuV_g9oQRCZWz-na9N8ocI2d5visNuqo2UG4MoprtlT5hlZQwKV-KoyNNpN9izPppcrpnPVXTNOHXT4WyC9HjKHmXFKyIYIhqjjXTko5Qw9E1NeJ2Q-Nlhp26UtF8OGzfBXI4nGL35Kg_s-VBXCV7XfMsNWhK2ejdAYf7ZaQ6oXI_EWJndtbfHbQ"
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
    "date": "Thu, 05 Jun 2025 22:28:53 GMT",
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

**⏱️ Duration:** 411.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.01s  

---

### Test: Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (548.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
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
    "date": "Thu, 05 Jun 2025 22:28:54 GMT",
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

**⏱️ Duration:** 548.7 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Update Member Role Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.00s  

---

### Test: Memberships E2E Tests Update Member Role Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.02s  

---

### Test: Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1080.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1749162534551@example.com",
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
    "etag": "W/\"60d-nl8fdZC9p0NCmJZfq0685p23LyQ\"",
    "date": "Thu, 05 Jun 2025 22:28:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "IeQ7YvYJ72gOOE6PldfgfDDT69W2",
        "email": "remove-user-1749162534551@example.com",
        "name": "User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTE2MjUzNSwidXNlcl9pZCI6IkllUTdZdllKNzJnT09FNlBsZGZnZkREVDY5VzIiLCJzdWIiOiJJZVE3WXZZSjcyZ09PRTZQbGRmZ2ZERFQ2OVcyIiwiaWF0IjoxNzQ5MTYyNTM1LCJleHAiOjE3NDkxNjYxMzUsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0OTE2MjUzNDU1MUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ5MTYyNTM0NTUxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.hwK1Gm9pxQtPl_JjCjVxI_x5uNL35OIpTguyvwhiUfl9RDAExC3RWqrYjZDpVfa_58XZJ9HU-rlAiV6zMbow1UEQaVDbWAcTZLX4ZrRvGO4ab4P0Ll5mcM86NcGFcq-r73x77uYAgfVcHBkLEg9TzzWIKlV6qMBxjpLynnbkS4wxYprKWoOLZIC64BACkRcLCGK9EXfSD_WNNhwMMX89O5jIQENYzD6JiPAyWFE7Iz6VlfKyJqsLjAVLO-YtePFTF6xFCcaX92wHGYjGtIE5GHc-h3FxHRKu46jigZG4y2zO0m6FUWfV_q8hHyY1Mb2iih8vrMPxkJ3fHSm-p8xfVg",
        "refreshToken": "AMf-vBwDelVlV8-ISL-XOfiW62eB-O5UW823grOKz9uoIP8ogtVlhr4zZ54twT5XAf-wQPdDwXRs6Di2cSEBFP8zGHsyoSOP5TnxOij_k0CRh2lWv9Mbb8Arvojpl-j4EzNhTsdSNwe8W-6Whc39hr100leBtpj9VwvQuDuBTIBaWGqW2As9yKfmQt0cvQxCY-9_xCOVr1uRSHyAlJviajBDrLEFAgpGIffVrNxSo4Q9cK1qSRorq3s",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1080.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (601.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
  },
  "data": {
    "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
    "userId": "IeQ7YvYJ72gOOE6PldfgfDDT69W2",
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
    "etag": "W/\"177-vlsIr1kHIcd4U+nVVVvY1YvRbk4\"",
    "date": "Thu, 05 Jun 2025 22:28:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "4209a3ec-6747-4a37-ac56-4ac498bdaba3",
      "userId": "IeQ7YvYJ72gOOE6PldfgfDDT69W2",
      "organizationId": "16e7ec49-cec9-4e9c-af9f-046768df5815",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-05T22:28:56.165Z",
      "updatedAt": "2025-06-05T22:28:56.165Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 601.2 ms  

</details>


---

### Test: Memberships E2E Tests Remove Member Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 0.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/undefined (505.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5MTYyNTIyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDkxNjI1MjIsImV4cCI6MTc0OTE2NjEyMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mv9hmVCmzB0_QAjyVh4sXXqfGQyUP753EQdoYKMPy52PFL8cbTUIHYUGXG4Qxo1OvYxzxX1UzSrxDRCNrUlD-J8oaE_N0t6lH_vlSrlXcGFwZ-QbZcK2VLmgB8LZ97LUv8OzB9a_ItaKioZ0o0JE2mD1qSVPdMnwi7Kyco_BJr5S-h0nUrQnEEl-1sjoqQ75CWJF84xvs1oAcapSfSJ1sobr3NWjDITWuhf5VVisO6zZjROWLvhqjeS3jMZ2iVDC6l7riTGKzObjysvWx0aRfd7dvi-KbYH6IXVB3mjMNZfH6R0uDDeyvQJPVhXprp8v9J17DsADfeekwbmcLnwJrA"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 505.4 ms  
**❌ Error:** socket hang up  

</details>


---

### Test: Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 0.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (17.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1749162536749@example.com",
    "password": "TestPassword123!",
    "name": "Another User for Removal"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 17.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (11.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749162536778@example.com",
    "password": "TestPassword123!",
    "name": "Self Leave User"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 11.9 ms  

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
- Test organization: Test Org for Memberships 1749162524471
- Total memberships created: 0
- Total test users created: 5
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
