# E2E Test Report: memberships-tests

**Date:** 6/2/2025  
**Time:** 2:01:40 AM  
**Duration:** 59.77s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.56s | Admin should invite user to organization successfully |
| ✅ Should fail to invite same user twice | PASSED | 0.63s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.46s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 7.55s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.54s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.48s | Admin should get memberships by user |
| ✅ User should get their own memberships | PASSED | 0.42s | User should get their own memberships |
| ✅ Should fail without userId or organizationId | PASSED | 0.46s | Should fail without userId or organizationId |
| ✅ Regular user should fail to get other user memberships | PASSED | 0.45s | Regular user should fail to get other user memberships |
| ✅ Admin should get membership by ID | PASSED | 0.58s | Admin should get membership by ID |
| ✅ Should fail with invalid membership ID | PASSED | 0.94s | Should fail with invalid membership ID |
| ✅ Admin should update member role successfully | PASSED | 0.65s | Admin should update member role successfully |
| ✅ Should fail with invalid role | PASSED | 0.43s | Should fail with invalid role |
| ✅ Regular user should fail to update role without permissions | PASSED | 0.99s | Regular user should fail to update role without permissions |
| ✅ Admin should remove member successfully | PASSED | 1.03s | Admin should remove member successfully |
| ✅ Regular user should fail to remove member without permissions | PASSED | 1.92s | Regular user should fail to remove member without permissions |
| ✅ User should be able to leave organization (remove own membership) | PASSED | 1.09s | User should be able to leave organization (remove own membership) |
| ✅ Organization admin should not access memberships from other organizations | PASSED | 0.43s | Organization admin should not access memberships from other organizations |
| ✅ Organization admin should not invite users to other organizations | PASSED | 1.95s | Organization admin should not invite users to other organizations |
| ✅ Super admin should access all organizations | PASSED | 1.09s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (557.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "K6peKSlbgmZGUNw4GlcisOx0amX2",
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
    "etag": "W/\"fd-EWoK5C8Xl1kRiNCcuD9BUdDZNbk\"",
    "date": "Mon, 02 Jun 2025 00:00:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6487a374-bff5-4008-ac5f-df9125042b43",
    "userId": "K6peKSlbgmZGUNw4GlcisOx0amX2",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-02T00:00:43.740Z",
    "updatedAt": "2025-06-02T00:00:43.740Z"
  }
}
```

**⏱️ Duration:** 557.0 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (628.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "K6peKSlbgmZGUNw4GlcisOx0amX2",
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
    "date": "Mon, 02 Jun 2025 00:00:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error inviting user",
    "details": "User is already a member of this organization"
  }
}
```

**⏱️ Duration:** 628.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1059.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1748822444440@example.com",
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
    "etag": "W/\"5dc-iBMTXUyT8PCixilNA34WCbFwo3Q\"",
    "date": "Mon, 02 Jun 2025 00:00:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "0FPWDAkpkFW3ovHJ42bOcevG5n83",
      "email": "no-perm-invite-1748822444440@example.com",
      "name": "No Permission Invite",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0NCwidXNlcl9pZCI6IjBGUFdEQWtwa0ZXM292SEo0MmJPY2V2RzVuODMiLCJzdWIiOiIwRlBXREFrcGtGVzNvdkhKNDJiT2Nldkc1bjgzIiwiaWF0IjoxNzQ4ODIyNDQ0LCJleHAiOjE3NDg4MjYwNDQsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0ODgyMjQ0NDQ0MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ4ODIyNDQ0NDQwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Aic4Gcx6-wIx9tH83QypY17xIoSNGcWGraYlYrES52Q4LGPWFTk-g6CYQ8YS9NExfO7VSI9N5LVOemj2CDkVFc2GUzw3REPR7RbcCbOOdgkRadl3NTPOxaTAeNGCNs7w6NlRd4PejiAcyv6T0Jpk9t61VocTfVJ_mL4tDUSYX0_rTOjQTOCj7NzPVBz-qeGs4NmzVciYpCQio3kCTMHhzY219jS4gJ_3jgijbnbnkNy2-ToZGqGeJJddV6POf3qOTDEziiu1hZsKTr-h9YKouqatW5TtV9Sz-0DYxVaZDbWLGEAs7YfMduR-osC3l-pozfMoDnyX1TgPXmLPCmEDAA",
      "refreshToken": "AMf-vBxT24nySAUP065EcfE2Lo4nS5eciJcT7NiiedoURRnirtn-sW72J8QqlaPQD2e3VGQLTC_MpWNMsxY-mGcnU0zpSFZHKEBAesZYJdbOA35yi_hsk2BA14w68liOS9_KKHzeQMGTOPdQdXdfl4LrjLkdCr3W6Xp5J_rm9N974cPKI_ZKiPyNyek5hi0lW8aXI7SME81KyeQMDQwbMJRrcKk22qsmhxRFCIdpXVucn3lhLnvcAztXKIKs9K6EmFXBgdPqBs4L",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1059.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (401.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0MSwidXNlcl9pZCI6IldmejdWZFdBd2ljeUJYdzBvTDhKWjY1WTBSczEiLCJzdWIiOiJXZno3VmRXQXdpY3lCWHcwb0w4Slo2NVkwUnMxIiwiaWF0IjoxNzQ4ODIyNDQxLCJleHAiOjE3NDg4MjYwNDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMjQ0MDUzMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIyNDQwNTMyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k1_D5seIrV_y3hoaIo-kVglYWwCYEMIUXma0C1RO909vgIofju7zNMAW_ZGL_IHdQ-zGAa40R-nGmbCx7HEJbntF-dpq0HC5PeKfiJHaytyCJZMA9Lv4mySQ_QfoDDGjdGdy3KdKQRIAWFXEKt9Nk-puWZVNHDr7Ez4yiOh8MGAKF-UNNRMJwBEPqrg5layurQzTvvh9hSeOv3Qxt-IuG0hzQN19Y1wjMsVcnlxYJ0Wl_tS9yINsvmPeQIbyvw1qtCY5K2Tdsh6lnWIAig9qr8jxMLIrDjfWhN5L05YUW7mFHmRX124_Re8QGU5o8XFCn2EkK3gN0A7PWMiitR7Dyw"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "0FPWDAkpkFW3ovHJ42bOcevG5n83",
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
    "date": "Mon, 02 Jun 2025 00:00:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 401.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 7.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (830.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1748822445903@example.com",
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
    "etag": "W/\"5ae-9Cumt56Db5m++JglD/mLwNOifIM\"",
    "date": "Mon, 02 Jun 2025 00:00:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "UmykK96cixM41nnnMWPdIUvSfYt2",
      "email": "admin-user-1748822445903@example.com",
      "name": "Admin User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0NiwidXNlcl9pZCI6IlVteWtLOTZjaXhNNDFubm5NV1BkSVV2U2ZZdDIiLCJzdWIiOiJVbXlrSzk2Y2l4TTQxbm5uTVdQZElVdlNmWXQyIiwiaWF0IjoxNzQ4ODIyNDQ2LCJleHAiOjE3NDg4MjYwNDYsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ4ODIyNDQ1OTAzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0ODgyMjQ0NTkwM0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.E2bjLQf1N29r5YmNpM-r0c-aaNKQrH2IAmrnqDro484hqxPcIn9DY9_PYW9JTst_ckedzNzmSaO1nZPaB13dJmFZVrWEKft2qzfo1tGzbu5zMZfiK8ec5imjP4h7-YrWLU_ohfsKBNZtwQJwFwjE3F_So3Oy5fyY_HRKTlo8e6X1TN4fxYsPC8ohGPxBq-Tef5iQWYVzASnfxhUNICELr2NBG0wqssQJWN5G18hjdbLYYjpd-ZZDVUE7lhfe1cyRznoeuP9nrBr1DdvKJ8xA7DOh9WCTdIb0jaT0f74kVO3JFQs9vnm-oIV-lwJcHkhlJZnUxNPfX_wdRbjJy3jX_w",
      "refreshToken": "AMf-vBxI4JuuXrD-aL9zjUg2k-JlUWCyvOZ_wRBrcp0_sKPcVLHuWzr7vj_yOIrTZ0yi1TBdth53dyP76jYZ0ECPmP3iijy7U390mVNO0voKXswYaxcfdqI7io7_YZsEnMa-cNfvCe3cEQVVA5lBH_Qx786ewiIglGQgUsOzSb3Jx8dY3Qrk__bFT3ZF9Fvn8mewySkpg2wz2qSlu2tyz7dcJNLwy5fXqBQUSpEE2jsV0KXOFeV6C30",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 830.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (605.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "UmykK96cixM41nnnMWPdIUvSfYt2",
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
    "etag": "W/\"fc-NX9U3J3oM+fDbNckBBgemnJvZeE\"",
    "date": "Mon, 02 Jun 2025 00:00:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "cb9fbbe9-89b9-4d35-be0d-02934fbce43f",
    "userId": "UmykK96cixM41nnnMWPdIUvSfYt2",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-06-02T00:00:47.267Z",
    "updatedAt": "2025-06-02T00:00:47.267Z"
  }
}
```

**⏱️ Duration:** 605.9 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (893.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1748822447339@example.com",
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
    "etag": "W/\"5b8-pQ/HggsmwjX9zIe0nBCJFCUgyTk\"",
    "date": "Mon, 02 Jun 2025 00:00:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "CypEjPtWNvUZh0cZRsFk1uwUa5J2",
      "email": "manager-user-1748822447339@example.com",
      "name": "Manager User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0NywidXNlcl9pZCI6IkN5cEVqUHRXTnZVWmgwY1pSc0ZrMXV3VWE1SjIiLCJzdWIiOiJDeXBFalB0V052VVpoMGNaUnNGazF1d1VhNUoyIiwiaWF0IjoxNzQ4ODIyNDQ3LCJleHAiOjE3NDg4MjYwNDcsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDg4MjI0NDczMzlAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDg4MjI0NDczMzlAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.I0nyvwexwivkKs8kwNe3b359STIumXPQ8061-vUVVsVhh6nLQzXRwHU1T5ufZYl_HkIUdFcy_rB-VvzBWZ4Td0DUDjJV-EHLv0rV53f0vBiq7ZWWAKZmIKHanvYRnzH9lIYEljpc2FbvLAAsjcuPaXWSx5oXjMWUsVDyifj2rzJFcBX1CLIeQEDW0yY97MqnNF7SpvM524ZHsqYEwxOaf6_FMXUSjQfq-cCBI_KCmLHvCvPVRFjNJopqNwRexvfNv3yfjU02Lmjchy7GpMVt3Bi0e_VJ3MlFVGI06-49zuG6GqECw1rMbCi-jnzMwcmARLmUFnuYah7OQ-iZid3rhg",
      "refreshToken": "AMf-vBwuAycTT_w-K7z6BmX9E8Jj8U0R2eBHQUq2ldqVWmsdI8heYDkWGYB9JK2kx1FOlND-84xUEKxnjF8-yImpA_gXV8GuHIN_Zhsdmz6kYxUfJvfDnGDmtCO6XQ1gb9exmgU4C043QhWTar8XATeadh2vSE_dLn-TrNzY8vRssGVtfsjbiEw6NSuJm2ndbBAZyKlUxjiN33j4B510i3xrDRJ0KTt_U-sfyp93t7x6MUpTrduClWk",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 893.2 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (575.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "CypEjPtWNvUZh0cZRsFk1uwUa5J2",
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
    "etag": "W/\"fe-Aw22tTyXMT+9FYrJIIJCZRjs87Y\"",
    "date": "Mon, 02 Jun 2025 00:00:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "38d58d0c-9471-4476-bd39-715399601cf1",
    "userId": "CypEjPtWNvUZh0cZRsFk1uwUa5J2",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-02T00:00:48.742Z",
    "updatedAt": "2025-06-02T00:00:48.742Z"
  }
}
```

**⏱️ Duration:** 575.0 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (875.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1748822448808@example.com",
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
    "etag": "W/\"5d6-iI9ufSRvhbSzTjHRGVqZ7NIpbqk\"",
    "date": "Mon, 02 Jun 2025 00:00:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "bih9Rh2DndR8ok6RwXHTrEKGNVJ3",
      "email": "moderator-user-1748822448808@example.com",
      "name": "Moderator User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0OSwidXNlcl9pZCI6ImJpaDlSaDJEbmRSOG9rNlJ3WEhUckVLR05WSjMiLCJzdWIiOiJiaWg5UmgyRG5kUjhvazZSd1hIVHJFS0dOVkozIiwiaWF0IjoxNzQ4ODIyNDQ5LCJleHAiOjE3NDg4MjYwNDksImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0ODgyMjQ0ODgwOEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ4ODIyNDQ4ODA4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.E8k5rTHGhA6RIvrgB8I086Z6ox2Gqj1dXFyLVslb2q6aF_tF3DnFxhp7tJ5cT37zwR_dVlqwnCCezHFZkqkmWD8fOOQTIQzKU1psWQqUtulV1S7mYlRYpaTDfnfadc-eXTkszLp1oxOZOozuDUgya58BjnVUKi7OX6rY-eFmBwuXxuK_bjGKfwNml94-IU2GXLQ6YMR2bDAXC4RcqVvlaQtfdxSKvdHvg8C3KCSK79R_-8TqT0sMc82e446ZFjUZiRODpNjxsMc5i09xQrSzCXdabR2axL4xXGKrKjRxf6blOEqrSUMbiFu3j-0n1F9xkMW-xgA5pi6cWKDo-iwJ0Q",
      "refreshToken": "AMf-vBxYpgDKGMZjCHqIu_WOlqviFu4UA4zibAcz2fsI5kmcvI6XMJRFj4oqI56Qrg6Xr6qgTEjhK8ap7MuE1PRJWy_gSZ3Oz7P8chXYl9DzlcbsDXpIVqLOmJUiQ9G2K4qCzALmn-m6tS3s9SNekzs0RS-I1qKqjRtbu-D3F3SASyihgi5v2UXNKDwau_un8X8wMKpMBBfTWoyZaHNHhaLm5rqT5b_Hsd8ZcMKbCZctVxpS7mDggqd_JJf5pSo5KQwrltUeWE7f",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 875.7 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (565.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "bih9Rh2DndR8ok6RwXHTrEKGNVJ3",
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
    "etag": "W/\"100-/iOtA256hNYdRx81TFMZaj/JcKQ\"",
    "date": "Mon, 02 Jun 2025 00:00:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2e6100e2-273b-415c-8bbe-159eed7baa9c",
    "userId": "bih9Rh2DndR8ok6RwXHTrEKGNVJ3",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "moderator",
    "status": "active",
    "createdAt": "2025-06-02T00:00:50.173Z",
    "updatedAt": "2025-06-02T00:00:50.173Z"
  }
}
```

**⏱️ Duration:** 565.6 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (984.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1748822450249@example.com",
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
    "etag": "W/\"5d6-1C6ntMwelCGaSlUv/X0i5UD7f3M\"",
    "date": "Mon, 02 Jun 2025 00:00:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "EXNlRhTy7eXEn0czv9FVQXZcVEf2",
      "email": "volunteer-user-1748822450249@example.com",
      "name": "Volunteer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ1MCwidXNlcl9pZCI6IkVYTmxSaFR5N2VYRW4wY3p2OUZWUVhaY1ZFZjIiLCJzdWIiOiJFWE5sUmhUeTdlWEVuMGN6djlGVlFYWmNWRWYyIiwiaWF0IjoxNzQ4ODIyNDUwLCJleHAiOjE3NDg4MjYwNTAsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0ODgyMjQ1MDI0OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ4ODIyNDUwMjQ5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.fZp1zZAhd6BINioq5Ufor-lagntCQvvBc0ITFNsIemPkEqPM0F5mWICFnkorYsSzyw65fiuk2z7h3AeQcfYacZwLE_mb8C2Te5SSBwJZFIYQnhkJMPzTDvK2a0jxzOtRQVVlxsShlu_svjzIrGjGUmdCJ2MLvIsjvy_kNQqipzfL1uhEz-dXt2CXN34FAfbt8jfqC8ePjwspmP3D8OfM1ZMUt4mSQm8Kc4LDbU2b34V0F4W6WuC76zR6fFePIWxKCp4Lyc0D4fK5Cq5Ipxy2xxX4QQrHX5ZAX6H5mCHo7WH_S-RiaSw2GdU9LWEm-WD0_Flh_UoztvgnXCs9VR11UQ",
      "refreshToken": "AMf-vBx9k3pugds6W95evm0kMBCm9cb3FNh70ka16dG3B5GHu49QvNjSp7vv6oJYcTl_j2BfV_xJOcwbCKAAzOtOfeiHSDNzluobnkF26cEbUPKNtPIpkak-N9AmOwvD-IUd_nnc8X26jh69xpA5oKHrrHT__GhKplpms_mMbbx05ovmNoY7nx4-RVkbL_ziLYGkQ_QZwMr8us0lbMP7zr3IyMSSRhCK8PJ7PrCNe6BnNGjTGfoOlzksoJd-fVWa59rifIeCEE3T",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 984.0 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (556.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "EXNlRhTy7eXEn0czv9FVQXZcVEf2",
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
    "etag": "W/\"100-TUUcXE5yh8tlPGY3T8FpbFYxkck\"",
    "date": "Mon, 02 Jun 2025 00:00:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a0d97184-b9bc-406a-9306-15023d0a3ed0",
    "userId": "EXNlRhTy7eXEn0czv9FVQXZcVEf2",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-02T00:00:51.714Z",
    "updatedAt": "2025-06-02T00:00:51.714Z"
  }
}
```

**⏱️ Duration:** 556.4 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (994.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1748822451790@example.com",
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
    "etag": "W/\"5bc-HKVDAoL0MpLgjdhkE3pFHrLLAYY\"",
    "date": "Mon, 02 Jun 2025 00:00:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "yVLvEoqCIFbrGCGqHwcCaaGprKG2",
      "email": "observer-user-1748822451790@example.com",
      "name": "Observer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ1MiwidXNlcl9pZCI6InlWTHZFb3FDSUZickdDR3FId2NDYWFHcHJLRzIiLCJzdWIiOiJ5Vkx2RW9xQ0lGYnJHQ0dxSHdjQ2FhR3ByS0cyIiwiaWF0IjoxNzQ4ODIyNDUyLCJleHAiOjE3NDg4MjYwNTIsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ4ODIyNDUxNzkwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0ODgyMjQ1MTc5MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X2iirCBaaMFXeTTqMV_pXvXd_BZME7AbLjtVIZyUBPmcQQYmcsO7UcqSSvcCpq6HQyfqAyJLrHdp6dFOkbbnJzHxb0f-mzKwsBVTJmBIiQIlXa6pxhdOrpSsay1N1LjQkWpYuujk1sOa2Rx-PlK7CETGYUU2kTYtfM2NRhM2n8Okp34S-1O47s4Yb3Ebn3dFlW7QW14uisr2eaD6miUKKdPHOxcHNn-e5F2POsevqkjGznrR9A1Zc7-dNNQ1X7ZdWiFNdR9jCTeNZ_tfGuYqBHPBH_IaNk4mr5tyucutqpWkWM33hbdur61QSBzYjhJ-7RSqIPG0pkIkSu4QIoCByQ",
      "refreshToken": "AMf-vBwdTmEiLTYykcJLG7IX_EBKhGrWp3Q7OJcztt3jtim57M4jsZi9DW6MGYFWrr6I4cbf6ozaqwbfBHeS4lUA27afCCaQqQs2AXt13GsE2OEr8kH9y66UZpALmf-GPQjOv80ewj1y72_tmP4NEt-BE1mkLt4voL0nfFyrBSe0Ql9PkMGsNYDJ60rpxfW2L48IR393tAHQCRZU_u6_WIgrpRkwkJjXDmCyjon9J0i5rjFp0SGuQKA",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 994.8 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (664.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "yVLvEoqCIFbrGCGqHwcCaaGprKG2",
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
    "etag": "W/\"ff-5KVc83U7Mp/NNQ5bmj5nNY4PKoE\"",
    "date": "Mon, 02 Jun 2025 00:00:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "951bec13-7f27-4202-8397-bf79a1d26218",
    "userId": "yVLvEoqCIFbrGCGqHwcCaaGprKG2",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "observer",
    "status": "active",
    "createdAt": "2025-06-02T00:00:53.372Z",
    "updatedAt": "2025-06-02T00:00:53.372Z"
  }
}
```

**⏱️ Duration:** 664.4 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=9f3d48be-7b2f-45f1-b86f-4299cabfc23b (532.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "etag": "W/\"5fd-sF58wTjqG5Wcv3pLoLlNGm6iDMU\"",
    "date": "Mon, 02 Jun 2025 00:00:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "6487a374-bff5-4008-ac5f-df9125042b43",
      "userId": "K6peKSlbgmZGUNw4GlcisOx0amX2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-02T00:00:43.740Z",
      "updatedAt": "2025-06-02T00:00:43.740Z"
    },
    {
      "id": "cb9fbbe9-89b9-4d35-be0d-02934fbce43f",
      "userId": "UmykK96cixM41nnnMWPdIUvSfYt2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-02T00:00:47.267Z",
      "updatedAt": "2025-06-02T00:00:47.267Z"
    },
    {
      "id": "38d58d0c-9471-4476-bd39-715399601cf1",
      "userId": "CypEjPtWNvUZh0cZRsFk1uwUa5J2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-02T00:00:48.742Z",
      "updatedAt": "2025-06-02T00:00:48.742Z"
    },
    {
      "id": "2e6100e2-273b-415c-8bbe-159eed7baa9c",
      "userId": "bih9Rh2DndR8ok6RwXHTrEKGNVJ3",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-02T00:00:50.173Z",
      "updatedAt": "2025-06-02T00:00:50.173Z"
    },
    {
      "id": "a0d97184-b9bc-406a-9306-15023d0a3ed0",
      "userId": "EXNlRhTy7eXEn0czv9FVQXZcVEf2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-02T00:00:51.714Z",
      "updatedAt": "2025-06-02T00:00:51.714Z"
    },
    {
      "id": "951bec13-7f27-4202-8397-bf79a1d26218",
      "userId": "yVLvEoqCIFbrGCGqHwcCaaGprKG2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-02T00:00:53.372Z",
      "updatedAt": "2025-06-02T00:00:53.372Z"
    }
  ]
}
```

**⏱️ Duration:** 532.3 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (483.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:00:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 483.0 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=Wfz7VdWAwicyBXw0oL8JZ65Y0Rs1 (422.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0MSwidXNlcl9pZCI6IldmejdWZFdBd2ljeUJYdzBvTDhKWjY1WTBSczEiLCJzdWIiOiJXZno3VmRXQXdpY3lCWHcwb0w4Slo2NVkwUnMxIiwiaWF0IjoxNzQ4ODIyNDQxLCJleHAiOjE3NDg4MjYwNDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMjQ0MDUzMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIyNDQwNTMyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k1_D5seIrV_y3hoaIo-kVglYWwCYEMIUXma0C1RO909vgIofju7zNMAW_ZGL_IHdQ-zGAa40R-nGmbCx7HEJbntF-dpq0HC5PeKfiJHaytyCJZMA9Lv4mySQ_QfoDDGjdGdy3KdKQRIAWFXEKt9Nk-puWZVNHDr7Ez4yiOh8MGAKF-UNNRMJwBEPqrg5layurQzTvvh9hSeOv3Qxt-IuG0hzQN19Y1wjMsVcnlxYJ0Wl_tS9yINsvmPeQIbyvw1qtCY5K2Tdsh6lnWIAig9qr8jxMLIrDjfWhN5L05YUW7mFHmRX124_Re8QGU5o8XFCn2EkK3gN0A7PWMiitR7Dyw"
  }
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
    "date": "Mon, 02 Jun 2025 00:00:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 422.6 ms  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (459.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
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
    "date": "Mon, 02 Jun 2025 00:00:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Either userId or organizationId must be provided"
  }
}
```

**⏱️ Duration:** 459.1 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (450.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0MSwidXNlcl9pZCI6IldmejdWZFdBd2ljeUJYdzBvTDhKWjY1WTBSczEiLCJzdWIiOiJXZno3VmRXQXdpY3lCWHcwb0w4Slo2NVkwUnMxIiwiaWF0IjoxNzQ4ODIyNDQxLCJleHAiOjE3NDg4MjYwNDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMjQ0MDUzMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIyNDQwNTMyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k1_D5seIrV_y3hoaIo-kVglYWwCYEMIUXma0C1RO909vgIofju7zNMAW_ZGL_IHdQ-zGAa40R-nGmbCx7HEJbntF-dpq0HC5PeKfiJHaytyCJZMA9Lv4mySQ_QfoDDGjdGdy3KdKQRIAWFXEKt9Nk-puWZVNHDr7Ez4yiOh8MGAKF-UNNRMJwBEPqrg5layurQzTvvh9hSeOv3Qxt-IuG0hzQN19Y1wjMsVcnlxYJ0Wl_tS9yINsvmPeQIbyvw1qtCY5K2Tdsh6lnWIAig9qr8jxMLIrDjfWhN5L05YUW7mFHmRX124_Re8QGU5o8XFCn2EkK3gN0A7PWMiitR7Dyw"
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
    "date": "Mon, 02 Jun 2025 00:00:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You can only view your own memberships"
  }
}
```

**⏱️ Duration:** 450.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/6487a374-bff5-4008-ac5f-df9125042b43 (576.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "etag": "W/\"fd-EWoK5C8Xl1kRiNCcuD9BUdDZNbk\"",
    "date": "Mon, 02 Jun 2025 00:00:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6487a374-bff5-4008-ac5f-df9125042b43",
    "userId": "K6peKSlbgmZGUNw4GlcisOx0amX2",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-02T00:00:43.740Z",
    "updatedAt": "2025-06-02T00:00:43.740Z"
  }
}
```

**⏱️ Duration:** 576.0 ms  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.94s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (940.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
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
    "date": "Mon, 02 Jun 2025 00:00:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 940.5 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6487a374-bff5-4008-ac5f-df9125042b43 (654.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
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
    "etag": "W/\"fe-JEVrIiZrvRb0kQ8RTK0OGxtk7jQ\"",
    "date": "Mon, 02 Jun 2025 00:00:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6487a374-bff5-4008-ac5f-df9125042b43",
    "userId": "K6peKSlbgmZGUNw4GlcisOx0amX2",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-02T00:00:43.740Z",
    "updatedAt": "2025-06-02T00:00:57.868Z"
  }
}
```

**⏱️ Duration:** 654.1 ms  

</details>


---

### Test: Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6487a374-bff5-4008-ac5f-df9125042b43 (428.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
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
    "date": "Mon, 02 Jun 2025 00:00:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid role"
  }
}
```

**⏱️ Duration:** 428.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.99s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6487a374-bff5-4008-ac5f-df9125042b43 (985.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0MSwidXNlcl9pZCI6IldmejdWZFdBd2ljeUJYdzBvTDhKWjY1WTBSczEiLCJzdWIiOiJXZno3VmRXQXdpY3lCWHcwb0w4Slo2NVkwUnMxIiwiaWF0IjoxNzQ4ODIyNDQxLCJleHAiOjE3NDg4MjYwNDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMjQ0MDUzMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIyNDQwNTMyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k1_D5seIrV_y3hoaIo-kVglYWwCYEMIUXma0C1RO909vgIofju7zNMAW_ZGL_IHdQ-zGAa40R-nGmbCx7HEJbntF-dpq0HC5PeKfiJHaytyCJZMA9Lv4mySQ_QfoDDGjdGdy3KdKQRIAWFXEKt9Nk-puWZVNHDr7Ez4yiOh8MGAKF-UNNRMJwBEPqrg5layurQzTvvh9hSeOv3Qxt-IuG0hzQN19Y1wjMsVcnlxYJ0Wl_tS9yINsvmPeQIbyvw1qtCY5K2Tdsh6lnWIAig9qr8jxMLIrDjfWhN5L05YUW7mFHmRX124_Re8QGU5o8XFCn2EkK3gN0A7PWMiitR7Dyw"
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
    "date": "Mon, 02 Jun 2025 00:00:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can modify roles."
  }
}
```

**⏱️ Duration:** 985.0 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (1678.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1748822459412@example.com",
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
    "etag": "W/\"5b8-rpq7BAbyjJvyrV2T84quVEL4ruM\"",
    "date": "Mon, 02 Jun 2025 00:01:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "XZdOVoagEhQ4jp1U4p0uAWKNjGV2",
      "email": "remove-user-1748822459412@example.com",
      "name": "User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2MCwidXNlcl9pZCI6IlhaZE9Wb2FnRWhRNGpwMVU0cDB1QVdLTmpHVjIiLCJzdWIiOiJYWmRPVm9hZ0VoUTRqcDFVNHAwdUFXS05qR1YyIiwiaWF0IjoxNzQ4ODIyNDYwLCJleHAiOjE3NDg4MjYwNjAsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0ODgyMjQ1OTQxMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ4ODIyNDU5NDEyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.UFxhN33onb8WT-V9T-NCGPQOuJ7l4S5Qjoz6VCQslwiNhGrdRCF9sTYFH06eaD9CBhc6XqX2062sK3smbK6_xdMpaMeC8tX6L9kDovHSoMiXLpXhGkyYPxjpypLsiZ_IlDvw4xLfEbnPPUChLND4NV5wEBAiTIJzQo2W3D3yr2g2mZyXo_WjRJ1h4Qt0GRpTOa8Jbu1XNeLhDQNbtJLOr76aeSKFNd9gpuJgrVIdJV3pU0027_273j_f2DdZV2-3YTFf7SLFolUJdkEZF8hJYsvwYJRFtge4bkav8gpdNrYwEpJ9NHrfItWMDE5059Lh23dkqVLgdS2FnJSVFpMxyw",
      "refreshToken": "AMf-vBxpcH9jLZjk59AdPw54lBK2b5g78ZQhjZjvFA0N4sozInzut12jKfosV1YkiSBTqdhNKPCUbJENyB-E5VxPYuPewHlQSl87-8fu9hqd6QNHy2w_W1m0mEaCEGyz3tXWeRkWBFO9tSXuG9e7GKQQQEBaLiOv-kgHi-NYcMZAYU0M8u4rGrRe7_uGNybdlhfExPIwA8h54FnpW3yvyakvPC9QhS7y0QdIlPsknEVsbjtf8ye-_C4",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1678.9 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (710.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "XZdOVoagEhQ4jp1U4p0uAWKNjGV2",
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
    "etag": "W/\"100-1zyqJFajN8g6LQgIELrUv9IojsI\"",
    "date": "Mon, 02 Jun 2025 00:01:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "544650dd-a9ca-4b86-8d63-b69e77223274",
    "userId": "XZdOVoagEhQ4jp1U4p0uAWKNjGV2",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-02T00:01:01.732Z",
    "updatedAt": "2025-06-02T00:01:01.732Z"
  }
}
```

**⏱️ Duration:** 710.5 ms  

</details>


---

### Test: Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/544650dd-a9ca-4b86-8d63-b69e77223274 (547.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 547.2 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/544650dd-a9ca-4b86-8d63-b69e77223274 (485.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
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
    "date": "Mon, 02 Jun 2025 00:01:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 485.7 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 1.92s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (833.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1748822462841@example.com",
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
    "etag": "W/\"5f2-i93s5Jw2PBIBAghLxM0+S837r6Y\"",
    "date": "Mon, 02 Jun 2025 00:01:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "Tthv9M3PVlNoDMQUUi1kTGTK6B12",
      "email": "another-remove-user-1748822462841@example.com",
      "name": "Another User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2MywidXNlcl9pZCI6IlR0aHY5TTNQVmxOb0RNUVVVaTFrVEdUSzZCMTIiLCJzdWIiOiJUdGh2OU0zUFZsTm9ETVFVVWkxa1RHVEs2QjEyIiwiaWF0IjoxNzQ4ODIyNDYzLCJleHAiOjE3NDg4MjYwNjMsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ4ODIyNDYyODQxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0ODgyMjQ2Mjg0MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.j5_INKyaTWa4vLv9rfjrPkbITOnvHKJg5jPi-a59fpQmFlRmj5tvOFStGNupyCHu62jw4qOHeKQ0hv09zJrO6zBOwbH01CVi5d9pwVQ2f1zCPY2a2Dwo87vXEUOSmamCcP1UXNe1EmZC2df8mT2dHgxc94f3WOEzmO-hzSgEGLLAvz5XKku55k7mi2PAj6Hy6JgcuDkNtrSJoYpk3hMT0ecxGBOvL5LIphaXs3eQmJxoiAPtsZnit50SvgvpUbKWSqNXJNZCNOGx1gOvnaUcb340STGIVS1qz1V44COOmPdOwto2gJvh5t2LXPyOkoDUh_Ce33TCYPC_937SNmIX4Q",
      "refreshToken": "AMf-vBwMF5K4A89mjktiP91FFxA1nZZGtJjkgMm_kGOqWZvKXOT3NQ9SKF0cNKaR65WtetxLQSEs-WiiStn98uyDm20ietescUsreojgP_qiyJoqSgAZb8Eg73qZ8yMXeyXl3cHJeOUzZlLwuymwax2YNjyWiKpH7xnQXzPUc-gxH_shyAPykezoE7vzg3QhU_g9tRfmRr3wgDkPGuNz90lViXPz_WtM675fRKOAOIisayBBCl0w3HVYKSLDL9axghI6uZnG3Hn7",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 833.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (608.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "Tthv9M3PVlNoDMQUUi1kTGTK6B12",
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
    "etag": "W/\"100-eTZKuu2O6hjeHXY5+GcrGQh8h80\"",
    "date": "Mon, 02 Jun 2025 00:01:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "80def4d8-3844-457f-9060-1fdaf622a66e",
    "userId": "Tthv9M3PVlNoDMQUUi1kTGTK6B12",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-02T00:01:04.219Z",
    "updatedAt": "2025-06-02T00:01:04.219Z"
  }
}
```

**⏱️ Duration:** 608.4 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/80def4d8-3844-457f-9060-1fdaf622a66e (475.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ0MSwidXNlcl9pZCI6IldmejdWZFdBd2ljeUJYdzBvTDhKWjY1WTBSczEiLCJzdWIiOiJXZno3VmRXQXdpY3lCWHcwb0w4Slo2NVkwUnMxIiwiaWF0IjoxNzQ4ODIyNDQxLCJleHAiOjE3NDg4MjYwNDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMjQ0MDUzMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIyNDQwNTMyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.k1_D5seIrV_y3hoaIo-kVglYWwCYEMIUXma0C1RO909vgIofju7zNMAW_ZGL_IHdQ-zGAa40R-nGmbCx7HEJbntF-dpq0HC5PeKfiJHaytyCJZMA9Lv4mySQ_QfoDDGjdGdy3KdKQRIAWFXEKt9Nk-puWZVNHDr7Ez4yiOh8MGAKF-UNNRMJwBEPqrg5layurQzTvvh9hSeOv3Qxt-IuG0hzQN19Y1wjMsVcnlxYJ0Wl_tS9yINsvmPeQIbyvw1qtCY5K2Tdsh6lnWIAig9qr8jxMLIrDjfWhN5L05YUW7mFHmRX124_Re8QGU5o8XFCn2EkK3gN0A7PWMiitR7Dyw"
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
    "date": "Mon, 02 Jun 2025 00:01:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can remove members."
  }
}
```

**⏱️ Duration:** 475.1 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (1015.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748822464760@example.com",
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
    "etag": "W/\"5db-OkO/zwcu8jfMC+ZvsNXLGbePbD8\"",
    "date": "Mon, 02 Jun 2025 00:01:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "TiXGbl85xcdeeiJDc4LnJgSrOo92",
      "email": "self-leave-user-1748822464760@example.com",
      "name": "Self Leave User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2NSwidXNlcl9pZCI6IlRpWEdibDg1eGNkZWVpSkRjNExuSmdTck9vOTIiLCJzdWIiOiJUaVhHYmw4NXhjZGVlaUpEYzRMbkpnU3JPbzkyIiwiaWF0IjoxNzQ4ODIyNDY1LCJleHAiOjE3NDg4MjYwNjUsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjI0NjQ3NjBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjI0NjQ3NjBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XQuiq5wwS72ZcvHBvHuDkEBmhWGg2ngOUL9skgw_fmaroNeNTzxLVCmfPJVuRUJ1kib1uhOFVh4GMBXq5YpPBC2fa1SI-H0OUoDOkBE51doBtXGLjGv3DpfBQvztyZqOT41KjMdRje2sc3J_aYh_46kw_m0sUW7od2-7v5yHkNItLsJrvQcCjy7c6TmVJGaowdxlA4MF6MmNzHeDxEdxHuw6Mc0_WMgaG7mIybCGfyTXNEX4Gwh4iQlvgr2H-jgzBUpmQgX3fuNclEVdUKGpBiJ_-UZc6nyjsYSiMFqT2iJjH2ecw4evqw-0pbnorLrrr_dtgw2ZGTX2C13e1Zx3cg",
      "refreshToken": "AMf-vByoGvC9hcfJaKm_yOUcUwiU2BSEwC4sWha_yjWsmSCbgSZIYApHqQibhHwW8GGvkl5JPRlhtNZy81ZdI01nDg_fhNz6NytGvJvrnTslfkANj4A4V8n-bHJpJNAC04agaJcEMlYsMU415MPZfxBTJfMDJKY4OnVuRTmIM9kQOgHWwz1GioVlSsWZEeqMYYukaWsZjJZKMfXP4xMLPQUZBf5Jqi-cK8AUDvRHaqjWyQjMI6D1QS6MI7FGnUbwhEobqxS5VmWt",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1015.2 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (264.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748822464760@example.com",
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
    "etag": "W/\"5aa-yxWXsTuBWdffh8M8EoALKinAJRU\"",
    "date": "Mon, 02 Jun 2025 00:01:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "TiXGbl85xcdeeiJDc4LnJgSrOo92",
      "email": "self-leave-user-1748822464760@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2NSwidXNlcl9pZCI6IlRpWEdibDg1eGNkZWVpSkRjNExuSmdTck9vOTIiLCJzdWIiOiJUaVhHYmw4NXhjZGVlaUpEYzRMbkpnU3JPbzkyIiwiaWF0IjoxNzQ4ODIyNDY1LCJleHAiOjE3NDg4MjYwNjUsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjI0NjQ3NjBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjI0NjQ3NjBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XQuiq5wwS72ZcvHBvHuDkEBmhWGg2ngOUL9skgw_fmaroNeNTzxLVCmfPJVuRUJ1kib1uhOFVh4GMBXq5YpPBC2fa1SI-H0OUoDOkBE51doBtXGLjGv3DpfBQvztyZqOT41KjMdRje2sc3J_aYh_46kw_m0sUW7od2-7v5yHkNItLsJrvQcCjy7c6TmVJGaowdxlA4MF6MmNzHeDxEdxHuw6Mc0_WMgaG7mIybCGfyTXNEX4Gwh4iQlvgr2H-jgzBUpmQgX3fuNclEVdUKGpBiJ_-UZc6nyjsYSiMFqT2iJjH2ecw4evqw-0pbnorLrrr_dtgw2ZGTX2C13e1Zx3cg",
      "refreshToken": "AMf-vByPk7tDrOBknFXZhEed8KcZ6TpUlv9U3B2F1LH-TTqTDqBfPlfHD1iA4WL6-R-ZgnU8KCZtah6-nQ02xP2La-qSelNjGzJkMWr5np3Rgdim0s9t3JAD9TwneYDu_QeRyC2eQVpwFDqFMhPzXCAZf36zYjjbYx1Kt35LTaqKXqhG-LPDr4UToX6Ur42bzKKax2I3X7WBoPRt44C-etLHJwXsLhJxWtLi4prgsyMDF6PjghHi5wVvfjN5c0zUCvnVAo0d4juR",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 264.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (567.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "TiXGbl85xcdeeiJDc4LnJgSrOo92",
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
    "etag": "W/\"fd-N6VB5xEu1gkeo6ahjDGH7Ux7jN8\"",
    "date": "Mon, 02 Jun 2025 00:01:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9e8e2afa-da0a-49f5-8c3c-e41e1ddad6a9",
    "userId": "TiXGbl85xcdeeiJDc4LnJgSrOo92",
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-02T00:01:06.541Z",
    "updatedAt": "2025-06-02T00:01:06.541Z"
  }
}
```

**⏱️ Duration:** 567.3 ms  

</details>


---

### Test: User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.09s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/9e8e2afa-da0a-49f5-8c3c-e41e1ddad6a9 (544.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2NSwidXNlcl9pZCI6IlRpWEdibDg1eGNkZWVpSkRjNExuSmdTck9vOTIiLCJzdWIiOiJUaVhHYmw4NXhjZGVlaUpEYzRMbkpnU3JPbzkyIiwiaWF0IjoxNzQ4ODIyNDY1LCJleHAiOjE3NDg4MjYwNjUsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjI0NjQ3NjBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjI0NjQ3NjBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XQuiq5wwS72ZcvHBvHuDkEBmhWGg2ngOUL9skgw_fmaroNeNTzxLVCmfPJVuRUJ1kib1uhOFVh4GMBXq5YpPBC2fa1SI-H0OUoDOkBE51doBtXGLjGv3DpfBQvztyZqOT41KjMdRje2sc3J_aYh_46kw_m0sUW7od2-7v5yHkNItLsJrvQcCjy7c6TmVJGaowdxlA4MF6MmNzHeDxEdxHuw6Mc0_WMgaG7mIybCGfyTXNEX4Gwh4iQlvgr2H-jgzBUpmQgX3fuNclEVdUKGpBiJ_-UZc6nyjsYSiMFqT2iJjH2ecw4evqw-0pbnorLrrr_dtgw2ZGTX2C13e1Zx3cg"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "You have left the organization successfully"
  }
}
```

**⏱️ Duration:** 544.4 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/9e8e2afa-da0a-49f5-8c3c-e41e1ddad6a9 (549.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
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
    "date": "Mon, 02 Jun 2025 00:01:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 549.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1749.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748822467704@example.com",
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
    "etag": "W/\"5db-0EUQXZQmUmY61oXYlrjZceGTtiY\"",
    "date": "Mon, 02 Jun 2025 00:01:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "FG5gNfrqKoSgzQlUzjRAgRRTmOq1",
      "email": "other-org-admin-1748822467704@example.com",
      "name": "Other Org Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2OCwidXNlcl9pZCI6IkZHNWdOZnJxS29TZ3pRbFV6alJBZ1JSVG1PcTEiLCJzdWIiOiJGRzVnTmZycUtvU2d6UWxVempSQWdSUlRtT3ExIiwiaWF0IjoxNzQ4ODIyNDY4LCJleHAiOjE3NDg4MjYwNjgsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.InXxoo8hNO-h4Q0Sy1n4FDejzdfTvfDmqHOyKqrjZtAqMDelhlm8mqMYw-5Pu7aBBNFAZmoi1JwhMLj1KUxzhgUt6jv-3HWBOr8gJp1WcFhFDuzXlIqtZUqVUnGGuqbujBpw1vFwnIPp_cBMTjpXKypvk8hI__82KvMOsd_jOp3IVzFxUvqUi458kbwThjbbjSxGUn0pp71xdVH43JDt5m6imoL9HwFdJztc98ER2CA6uYHriKwVmyK8D0fj9P-lt15mATPbNL399mQriMfS1b34fml2P32SB0qAXG2GLYrLKRxXV_UODdo1LQvGAPRY1lVhWNXY1LRShVx3G9jMcA",
      "refreshToken": "AMf-vBxQ7us_xG5wKCcMM0cJGtpG2xA_h2x5GhxqYVfPPACtkF_uK67tfk9fYJYEaOhV1wIsZm3lHF5gG66U8xNe4OJEQbOvrp-uWhe4ry3yibnF7EsNVntGOTtOpgs9KcybtoRGBngcdObDzjRYawsqH77QclaSC4J99_vqLHHoO1J31tkhCa1comcJWr0cR0Ab9686AUFT5IbY0_7qG-grgOZnIkXlpjoI19cVUi-wxiDq2AlhXf1hNTYz5ZRcZLE6IXxprhZZ",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1749.8 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (273.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748822467704@example.com",
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
    "etag": "W/\"5aa-BeL3ZLmGD5H6J6BUXOmg5olDH20\"",
    "date": "Mon, 02 Jun 2025 00:01:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "FG5gNfrqKoSgzQlUzjRAgRRTmOq1",
      "email": "other-org-admin-1748822467704@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2OSwidXNlcl9pZCI6IkZHNWdOZnJxS29TZ3pRbFV6alJBZ1JSVG1PcTEiLCJzdWIiOiJGRzVnTmZycUtvU2d6UWxVempSQWdSUlRtT3ExIiwiaWF0IjoxNzQ4ODIyNDY5LCJleHAiOjE3NDg4MjYwNjksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JV__cP91oXB1MH0p636q8oLAsa2yUaIqHV4XdZhKAVitsS8QcEAzkgBOWPs67XMWeZO-0aNnQfUO1hd8aZOMpYnjK7vR8u6mTuhUDHUSrjxdgizDTDkM5pFZZSfIPzUe2xxgJ6JNDMRSWtIHUpgx3MULyJvx0Zd3uT1ettalU165pqNaQcsDerCohmfnu7NdmTFAQ9-isV3Ap0pCOuOjVZHWXLYN1bAQwBCfDSmPT8Ypkdgkp--wp_OZGFDr_Pa5eYuIH5596AAGCsT0AdB2_YoPrdQiL1ZvyzY9ZHa7BT6nd1BsPM11PLb15ONHfatx8jMzDRbUG-QRSfWgcSR9FQ",
      "refreshToken": "AMf-vBzc76j_weJGU07vH_ijuIFM_qZr2jkCYa3gEOzJaC8QyrilxKm1hDiT_L69fSzJ8fIanGX2bb_ITWiZaa8LSi3Ff-4Cj4fSHQ-oBa6XXM1jpaYGhn1z0yiOELDTV9bOO3Bc71v_z9S2IKyi0Dczb3jdSemCdUsGdBGphEEoH-RkCbdYw1D1Xr1MwoxX3MXrLtbyUNFUrrzwJvlgTMolKHbW24WAd4ZZp6uI4Z00C6DD5-RT-wN4SDFCshAhk7pArEenyv55",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 273.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (964.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2OSwidXNlcl9pZCI6IkZHNWdOZnJxS29TZ3pRbFV6alJBZ1JSVG1PcTEiLCJzdWIiOiJGRzVnTmZycUtvU2d6UWxVempSQWdSUlRtT3ExIiwiaWF0IjoxNzQ4ODIyNDY5LCJleHAiOjE3NDg4MjYwNjksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JV__cP91oXB1MH0p636q8oLAsa2yUaIqHV4XdZhKAVitsS8QcEAzkgBOWPs67XMWeZO-0aNnQfUO1hd8aZOMpYnjK7vR8u6mTuhUDHUSrjxdgizDTDkM5pFZZSfIPzUe2xxgJ6JNDMRSWtIHUpgx3MULyJvx0Zd3uT1ettalU165pqNaQcsDerCohmfnu7NdmTFAQ9-isV3Ap0pCOuOjVZHWXLYN1bAQwBCfDSmPT8Ypkdgkp--wp_OZGFDr_Pa5eYuIH5596AAGCsT0AdB2_YoPrdQiL1ZvyzY9ZHa7BT6nd1BsPM11PLb15ONHfatx8jMzDRbUG-QRSfWgcSR9FQ"
  },
  "data": {
    "name": "Other Org 1748822469727",
    "description": "Other organization for cross-access test",
    "email": "other-org-1748822469727@example.com",
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
    "etag": "W/\"197-gBih/ZxSPKA+3QSZtYKkEx3QUY0\"",
    "date": "Mon, 02 Jun 2025 00:01:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1655570f-1be1-4c2b-acd8-ec437325cf09",
    "name": "Other Org 1748822469727",
    "type": "shelter",
    "description": "Other organization for cross-access test",
    "logo": null,
    "address": "789 Other Org Boulevard",
    "phone": "+1122334455",
    "email": "other-org-1748822469727@example.com",
    "status": "active",
    "createdBy": "FG5gNfrqKoSgzQlUzjRAgRRTmOq1",
    "createdAt": "2025-06-02T00:01:10.563Z",
    "updatedAt": "2025-06-02T00:01:10.563Z"
  }
}
```

**⏱️ Duration:** 964.7 ms  

</details>


---

### Test: Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=9f3d48be-7b2f-45f1-b86f-4299cabfc23b (433.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2OSwidXNlcl9pZCI6IkZHNWdOZnJxS29TZ3pRbFV6alJBZ1JSVG1PcTEiLCJzdWIiOiJGRzVnTmZycUtvU2d6UWxVempSQWdSUlRtT3ExIiwiaWF0IjoxNzQ4ODIyNDY5LCJleHAiOjE3NDg4MjYwNjksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JV__cP91oXB1MH0p636q8oLAsa2yUaIqHV4XdZhKAVitsS8QcEAzkgBOWPs67XMWeZO-0aNnQfUO1hd8aZOMpYnjK7vR8u6mTuhUDHUSrjxdgizDTDkM5pFZZSfIPzUe2xxgJ6JNDMRSWtIHUpgx3MULyJvx0Zd3uT1ettalU165pqNaQcsDerCohmfnu7NdmTFAQ9-isV3Ap0pCOuOjVZHWXLYN1bAQwBCfDSmPT8Ypkdgkp--wp_OZGFDr_Pa5eYuIH5596AAGCsT0AdB2_YoPrdQiL1ZvyzY9ZHa7BT6nd1BsPM11PLb15ONHfatx8jMzDRbUG-QRSfWgcSR9FQ"
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
    "date": "Mon, 02 Jun 2025 00:01:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "No tienes permisos para ver todas las membresías de la organización"
  }
}
```

**⏱️ Duration:** 433.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.95s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1505.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1748822471129@example.com",
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
    "etag": "W/\"5e4-LkF5J7abIhp6/P3hfZhCLr9PEK0\"",
    "date": "Mon, 02 Jun 2025 00:01:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "QPpqRP8py4XjAI1Mpiv7JgFiasB3",
      "email": "cross-org-invite-1748822471129@example.com",
      "name": "Cross Org Invite User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ3MSwidXNlcl9pZCI6IlFQcHFSUDhweTRYakFJMU1waXY3SmdGaWFzQjMiLCJzdWIiOiJRUHBxUlA4cHk0WGpBSTFNcGl2N0pnRmlhc0IzIiwiaWF0IjoxNzQ4ODIyNDcxLCJleHAiOjE3NDg4MjYwNzEsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ4ODIyNDcxMTI5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0ODgyMjQ3MTEyOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SQrZyY20LIsJsYXV-rzkfGPq5OwxVJrx8ikAS_bfPENVNqrn499AUMM3ipbhN76QuRifm1pGW2bsL3s_Lo9d3yD-aHIbuGBeSktjXmSrzVEILiqqCC_60z2_77NLQBruyrZ7duGQJKkTQLeVnSBbiTPXbs3Fx2wDng52ivm3zB0bJRL_Bnx_9JGbxa8mZpOU2xg61nkqqRid2_fqBcX-0BmvLjlgmwLQorgBf8fs5WFnKftdce4iksnNl27Ysfc6lSS7RMUZ1Zjz_0bmt_cQmvb2R4IiC4Qyq4XkksQTyTgFsG9Jfrf4KDwfrEI3SePMxp1YABrwoAZ7u16uyjAqGA",
      "refreshToken": "AMf-vBx1cWcF_Bd5LACqsPmzKAf-ipQhvb_dorl4Y2HppM0r1rHj1EfZ57PwARBLTc7KSJwfFhNQZVGg8xkTMQu1LJJc8rQoeBBF_gDuRgfIGOEp5fAR92ta3CgEx2OQIvjUip5aHm6HEVMc_7Q6UYsFzcpBmk9u6U75GE5WuxtES9_PPzXJ-TSHY9LKu89nBxIHJ-mPbiRLePw7cMChuIoH2pq4aeYJo-xp4vgCmM-SbzQXjkLpBN7tk87vo43Ipi9K25nu4PiR",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1505.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (438.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMjQ2OSwidXNlcl9pZCI6IkZHNWdOZnJxS29TZ3pRbFV6alJBZ1JSVG1PcTEiLCJzdWIiOiJGRzVnTmZycUtvU2d6UWxVempSQWdSUlRtT3ExIiwiaWF0IjoxNzQ4ODIyNDY5LCJleHAiOjE3NDg4MjYwNjksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjI0Njc3MDRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JV__cP91oXB1MH0p636q8oLAsa2yUaIqHV4XdZhKAVitsS8QcEAzkgBOWPs67XMWeZO-0aNnQfUO1hd8aZOMpYnjK7vR8u6mTuhUDHUSrjxdgizDTDkM5pFZZSfIPzUe2xxgJ6JNDMRSWtIHUpgx3MULyJvx0Zd3uT1ettalU165pqNaQcsDerCohmfnu7NdmTFAQ9-isV3Ap0pCOuOjVZHWXLYN1bAQwBCfDSmPT8Ypkdgkp--wp_OZGFDr_Pa5eYuIH5596AAGCsT0AdB2_YoPrdQiL1ZvyzY9ZHa7BT6nd1BsPM11PLb15ONHfatx8jMzDRbUG-QRSfWgcSR9FQ"
  },
  "data": {
    "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
    "userId": "QPpqRP8py4XjAI1Mpiv7JgFiasB3",
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
    "date": "Mon, 02 Jun 2025 00:01:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 438.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.09s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=9f3d48be-7b2f-45f1-b86f-4299cabfc23b (625.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "etag": "W/\"6ff-ljQEzvm9QAdAXk+y8T6p/DqWmdk\"",
    "date": "Mon, 02 Jun 2025 00:01:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "cb9fbbe9-89b9-4d35-be0d-02934fbce43f",
      "userId": "UmykK96cixM41nnnMWPdIUvSfYt2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-02T00:00:47.267Z",
      "updatedAt": "2025-06-02T00:00:47.267Z"
    },
    {
      "id": "38d58d0c-9471-4476-bd39-715399601cf1",
      "userId": "CypEjPtWNvUZh0cZRsFk1uwUa5J2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-02T00:00:48.742Z",
      "updatedAt": "2025-06-02T00:00:48.742Z"
    },
    {
      "id": "2e6100e2-273b-415c-8bbe-159eed7baa9c",
      "userId": "bih9Rh2DndR8ok6RwXHTrEKGNVJ3",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-02T00:00:50.173Z",
      "updatedAt": "2025-06-02T00:00:50.173Z"
    },
    {
      "id": "a0d97184-b9bc-406a-9306-15023d0a3ed0",
      "userId": "EXNlRhTy7eXEn0czv9FVQXZcVEf2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-02T00:00:51.714Z",
      "updatedAt": "2025-06-02T00:00:51.714Z"
    },
    {
      "id": "951bec13-7f27-4202-8397-bf79a1d26218",
      "userId": "yVLvEoqCIFbrGCGqHwcCaaGprKG2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-02T00:00:53.372Z",
      "updatedAt": "2025-06-02T00:00:53.372Z"
    },
    {
      "id": "6487a374-bff5-4008-ac5f-df9125042b43",
      "userId": "K6peKSlbgmZGUNw4GlcisOx0amX2",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-02T00:00:43.740Z",
      "updatedAt": "2025-06-02T00:00:57.868Z"
    },
    {
      "id": "80def4d8-3844-457f-9060-1fdaf622a66e",
      "userId": "Tthv9M3PVlNoDMQUUi1kTGTK6B12",
      "organizationId": "9f3d48be-7b2f-45f1-b86f-4299cabfc23b",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-02T00:01:04.219Z",
      "updatedAt": "2025-06-02T00:01:04.219Z"
    }
  ]
}
```

**⏱️ Duration:** 625.7 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=1655570f-1be1-4c2b-acd8-ec437325cf09 (468.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 468.5 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/1655570f-1be1-4c2b-acd8-ec437325cf09 (903.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 903.9 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/6487a374-bff5-4008-ac5f-df9125042b43 (572.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 572.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/cb9fbbe9-89b9-4d35-be0d-02934fbce43f (619.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 619.4 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/38d58d0c-9471-4476-bd39-715399601cf1 (491.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 491.4 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/2e6100e2-273b-415c-8bbe-159eed7baa9c (579.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 579.3 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/a0d97184-b9bc-406a-9306-15023d0a3ed0 (559.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 559.6 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/951bec13-7f27-4202-8397-bf79a1d26218 (486.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 486.7 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/80def4d8-3844-457f-9060-1fdaf622a66e (478.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 478.3 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/9f3d48be-7b2f-45f1-b86f-4299cabfc23b (898.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NDAsImV4cCI6MTc0ODgyNjA0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DMrBEKr1HnSpndY8amfFf2HcvrYtcJNHtM0aK2PNossVdLPFLXvFq3wRXsxT_NpubJFDIANnhLlgH-2bkBSwAkmdGGaOItWZFxyuBSQgbuJ9-4hwULkVH63MtJ10gT9BhCa4Z4jeV-Y6YOjuPmBd043f0pVYz7ylkb_iwivbEL8aPODku-twgoTiV7OaDKInjbd6tX63nutYa_RWpz4SO851vKJ0286fv_SEo17rezFAbHzrzt1fmoI2gs6iNebjWmEAvXFALda-zyG-Z863xzWGUZLxGnisGTuW40V1ITscbJev44U4HeOO5Sql_pBsTd14prz0Mb0BUz6CeLr0og"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 898.6 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (299.7ms)</summary>

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
    "etag": "W/\"640-aFCQXPU7YSWGUrq/ny1ezdG6nCc\"",
    "date": "Mon, 02 Jun 2025 00:01:20 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDc5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NzksImV4cCI6MTc0ODgyNjA3OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nemfAGfdl6FFxmFvy5grASRYzEveEoQ15FQZ9SBqMwOHqZjSWIrws-0W7FPPKo-iVaxzkxrqU5n67nBTWodWvch5Hny5GrRZUYyDGSu5bPLesUNRvzVAp-0C3L4lD_CDslKYkAkDA1qhhXAPOVUMsl4xrVBjrSO1rQubQT2_ayks_SwEK5Qy0HekZFrsGIc60Jw5GeqKUZ0gK4sNp0d5sy876IuTKgrLQuctDdyuI8_OIR0GZ2sEtLKbFHeET8Cx3hTcWvayTloKhv3im_ESTpwlrx7gxoFfTzWjqKlAYC_gkKYRwsTEVZtpkmsul-zwqETxVVKD1iBXv8OZFeYXVQ",
      "refreshToken": "AMf-vByA1J7zlkn6Gc-BuBoP9IkxE430Kb1m82FbFnbQ94J9WfOREeELjSqoku_gw6Z9FM_cos-_lyHWmz723VZPG76WkP3MQ5xKl3wfxn5ta4DDOp2oWhOu8HzRd-piSM828RKxTy2dWNvLSMG_I35yLexKNkXjMkffmm00xmtDoATQs2sD0G0UkIywcGCIoaEXX-5A_Cb-bizh9maa5H2s_tW7_OPvz15HYClcV60n314PNu1Fo_zHvwcw9C_BZjPfXxveQZHE",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 299.7 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/Wfz7VdWAwicyBXw0oL8JZ65Y0Rs1 (1366.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDc5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0NzksImV4cCI6MTc0ODgyNjA3OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nemfAGfdl6FFxmFvy5grASRYzEveEoQ15FQZ9SBqMwOHqZjSWIrws-0W7FPPKo-iVaxzkxrqU5n67nBTWodWvch5Hny5GrRZUYyDGSu5bPLesUNRvzVAp-0C3L4lD_CDslKYkAkDA1qhhXAPOVUMsl4xrVBjrSO1rQubQT2_ayks_SwEK5Qy0HekZFrsGIc60Jw5GeqKUZ0gK4sNp0d5sy876IuTKgrLQuctDdyuI8_OIR0GZ2sEtLKbFHeET8Cx3hTcWvayTloKhv3im_ESTpwlrx7gxoFfTzWjqKlAYC_gkKYRwsTEVZtpkmsul-zwqETxVVKD1iBXv8OZFeYXVQ"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1366.1 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (334.0ms)</summary>

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
    "etag": "W/\"640-Gv+JIE4W6vKbluQT51avG3oOXo0\"",
    "date": "Mon, 02 Jun 2025 00:01:21 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODEsImV4cCI6MTc0ODgyNjA4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Cp0VuljkkdlOEb_LXOvomeGNaq_52uKbnFpIwVUCBhpPXlUnhfSVzBHYbAwbOFN76LzGq6LluhgbMaChRxBlq-DkexW9YT5mKGpo5LqNoANp_4YBIXaq1NKopaT-DBF0mELov1IrnwTn-Dj1fpHpS8yLofZOtc1FoAhCg68o04IdRRlbZgEK6FVMsuIV0i2-SJVkDYcZyjixXQZA5p5DmjI4ba5ESAk2nN2rwdWp4cXIFHDgYrWJtqZ4wIadXPTppvYOVto2yvhNui-JWy1LmEIJ50I5nc1bU9GpYDZNkgwf9FeFSrShBBViTznf1zVm5icH0_gczOohYXu5idXN7w",
      "refreshToken": "AMf-vBzLUkjBT2H-rWg_aAOWhMW7r7jwzqLdOvD7HjCjHsP-c8vVS9dl7hrWx2Q3o9K-1vQPdaFt61tH3JOwmNFCvLuKdbRSyrxgkVzMVQDEL_EGXCVAzwY_B9u_GA4ukpxshwg-VmVJ89-L4VgMnkb-cjeZxyGExiFO4GJr-hOEouJFYKcuVoY4IFL2G0tYDtZtr2OaD-ZgfAfpxXyf5aHF9_61uEPuL_VV1DEq41PNM_u25A1Ar2HCMo-QYDLma9A1UZyrPFeu",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 334.0 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/K6peKSlbgmZGUNw4GlcisOx0amX2 (1125.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDgxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODEsImV4cCI6MTc0ODgyNjA4MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Cp0VuljkkdlOEb_LXOvomeGNaq_52uKbnFpIwVUCBhpPXlUnhfSVzBHYbAwbOFN76LzGq6LluhgbMaChRxBlq-DkexW9YT5mKGpo5LqNoANp_4YBIXaq1NKopaT-DBF0mELov1IrnwTn-Dj1fpHpS8yLofZOtc1FoAhCg68o04IdRRlbZgEK6FVMsuIV0i2-SJVkDYcZyjixXQZA5p5DmjI4ba5ESAk2nN2rwdWp4cXIFHDgYrWJtqZ4wIadXPTppvYOVto2yvhNui-JWy1LmEIJ50I5nc1bU9GpYDZNkgwf9FeFSrShBBViTznf1zVm5icH0_gczOohYXu5idXN7w"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1125.9 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (344.6ms)</summary>

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
    "etag": "W/\"640-H1AORvQGZv2cxhmjDPnQI98DlOw\"",
    "date": "Mon, 02 Jun 2025 00:01:23 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODMsImV4cCI6MTc0ODgyNjA4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SHzoQf2eFsA5BufLfoAdonIm8eTdvjUJB-bR_tOj6Jzrtp8rmujYhUKWOTZqfDj56wgVeczqN2nThubrSwuEMMqI8A-8GHnvilb-Zyf4FhElcwQ_KWSQPRtxyb9Unl1ehdi7XESpcyuVz4xf2ZL9u2dklir9iAHsVeKraLLlZSRTHZ2rQP2ldJamaRVNVq4rvADG9Gi4NdzubCDq_BcxEjrH77hkMLEZaANgL2jHMSd_R46SsDhmWKK1BVWpsDzYvp6yBDPw_qq6_yBtPZvnGgqpJelHomViZ0PZ2Z9X8JshlfIuirwgsivLWjH_Qefq6fm-E4xXOf5ZRM09vqnf2Q",
      "refreshToken": "AMf-vBy-uDW51FKQlIsJlL9HFBumvliTYg5yzFdwDGQ2V4bFISTISSALwS1MKD1kO8CfD9JJQOaoSOA7HzE-OeTqKGdotmgj1rHW8YXBT66JtOsbH5rq8WF-sXbX4_fjtT4fUf_l-zSc7XHWiTEkrLjKWCXMsDCoxsEIf5u3ofU-Q_1f5z8vyQYAGNN6Y8nqLgLolksHNkuw1KnBl5NawLgUptvZf_tcOVMNdCJlIpoijwLcsvjztVpVksKI2vOWooPvINFMACNh",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 344.6 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/0FPWDAkpkFW3ovHJ42bOcevG5n83 (1324.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODMsImV4cCI6MTc0ODgyNjA4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SHzoQf2eFsA5BufLfoAdonIm8eTdvjUJB-bR_tOj6Jzrtp8rmujYhUKWOTZqfDj56wgVeczqN2nThubrSwuEMMqI8A-8GHnvilb-Zyf4FhElcwQ_KWSQPRtxyb9Unl1ehdi7XESpcyuVz4xf2ZL9u2dklir9iAHsVeKraLLlZSRTHZ2rQP2ldJamaRVNVq4rvADG9Gi4NdzubCDq_BcxEjrH77hkMLEZaANgL2jHMSd_R46SsDhmWKK1BVWpsDzYvp6yBDPw_qq6_yBtPZvnGgqpJelHomViZ0PZ2Z9X8JshlfIuirwgsivLWjH_Qefq6fm-E4xXOf5ZRM09vqnf2Q"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1324.2 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (313.1ms)</summary>

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
    "etag": "W/\"640-0sfYN7+pftJFVoYCOcaqYloqVrs\"",
    "date": "Mon, 02 Jun 2025 00:01:24 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDg0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODQsImV4cCI6MTc0ODgyNjA4NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i0uQoDFeSN-VO6QK-jkRkLD9NU5KcXdKf4FBMZBhU9gZJdL9MK0_4BScTV0A9BxDTQqRBen6ruMOS4R3rSe_Xy3rWfvZIpoc800z1qsREGw0750VIjsQzJ8ni8KdFAU0UU4jparF2NB8_tXPcZ-TOFTHOjYUufJigojuA9sIxqs3130wd1WUn5u7aJS8aZsoVj38rCmgaTJVJIzkGu9oU1G7mg9dRqaGv6eHM_tZq_VU3NvH4YHrp3ltCkB41MsgXTBppbaL0jH66lKj1CALYEXEQoCbMgPqlP9AEhcUM4mxC19I6OTxxSPdXjTRK2VJDPwGD3nY3_MJBsl8OJu0xg",
      "refreshToken": "AMf-vBwHrPYx9NAgqHIayKka3uM5_N_YkuUn1hIpxXKt-mVjWSjx028ngzdQRYxKNOMhFYP4ciiqSaGN7kYinQcEZyVShIvkAteHrp370X0becxK2vplCuz8oJdhTHZJUR9IifMMDnWbJ7nAit5VUIRIIFDD9QaYzO-V4clewQe4DfuDT2FaJEGxG0ooNHMQorX7LRfLLgkrX4MWnACSAg8wO0KmAO74ueykZ2t20Elrjr-k_vdxaOtytyjWqltbwX6GHgNj_N6n",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 313.1 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/UmykK96cixM41nnnMWPdIUvSfYt2 (1184.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDg0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODQsImV4cCI6MTc0ODgyNjA4NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i0uQoDFeSN-VO6QK-jkRkLD9NU5KcXdKf4FBMZBhU9gZJdL9MK0_4BScTV0A9BxDTQqRBen6ruMOS4R3rSe_Xy3rWfvZIpoc800z1qsREGw0750VIjsQzJ8ni8KdFAU0UU4jparF2NB8_tXPcZ-TOFTHOjYUufJigojuA9sIxqs3130wd1WUn5u7aJS8aZsoVj38rCmgaTJVJIzkGu9oU1G7mg9dRqaGv6eHM_tZq_VU3NvH4YHrp3ltCkB41MsgXTBppbaL0jH66lKj1CALYEXEQoCbMgPqlP9AEhcUM4mxC19I6OTxxSPdXjTRK2VJDPwGD3nY3_MJBsl8OJu0xg"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1184.4 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (255.0ms)</summary>

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
    "etag": "W/\"640-bPdj7sYCSh0QR3JFPSDl1IWbNBQ\"",
    "date": "Mon, 02 Jun 2025 00:01:26 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDg2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODYsImV4cCI6MTc0ODgyNjA4NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qD4whf7JNab8naN6Ad3sKvwhEvsb1c-f7RrSxxSu__IBJcbe4HQpsWXXGz6Mg7VK0GUawOoz20KgXdIqRS8YtUHz-5nbL-ow0A3UrCTxbMLVc2nEpy2El4vLyeSlalHRtSRwaYPuuVrpwZeG5ACmtCvfYI7kgfiSVZUVDaUUqyOhZy4ohuBedEf4Kxv22drNorQmmUIuh2EQs3SeT9-ux2m7OlmKMLsVDsHtXyF_F-pDy7QXAULWpmYtEoWluyxk1FTuWdRLUdxrQOnkSwb24BOoiE5Unjkr8O_p6oir6qETqElStAhudbmhotygMO3yBH3BVdsOjIddbLzQ6-q_ZQ",
      "refreshToken": "AMf-vByaaKVXEd0Mp0J0NVvWIMXlZFSfuy8X2kyExPjWuTpGRKp-t2tYHT799IJRngue4DahlRL7pzAmdqq2tDHN3qHoqj0gNYcMaBKaawCcR880vgVppxBmexL599VSdgUm7F2W8dhaRDCYMCRAm2nSzwOYi9GHR8NAt09KF1u5ezXA8pLpzZReuXUNh6GEVMk7Y-JF-oy3cmKL6CuLgtudAVOjqB1yreiuMCbGN8muzDviK45dgamWojv4URE_rf7Swys34nVN",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 255.0 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/CypEjPtWNvUZh0cZRsFk1uwUa5J2 (1261.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDg2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODYsImV4cCI6MTc0ODgyNjA4NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qD4whf7JNab8naN6Ad3sKvwhEvsb1c-f7RrSxxSu__IBJcbe4HQpsWXXGz6Mg7VK0GUawOoz20KgXdIqRS8YtUHz-5nbL-ow0A3UrCTxbMLVc2nEpy2El4vLyeSlalHRtSRwaYPuuVrpwZeG5ACmtCvfYI7kgfiSVZUVDaUUqyOhZy4ohuBedEf4Kxv22drNorQmmUIuh2EQs3SeT9-ux2m7OlmKMLsVDsHtXyF_F-pDy7QXAULWpmYtEoWluyxk1FTuWdRLUdxrQOnkSwb24BOoiE5Unjkr8O_p6oir6qETqElStAhudbmhotygMO3yBH3BVdsOjIddbLzQ6-q_ZQ"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1261.0 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (237.4ms)</summary>

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
    "etag": "W/\"640-jYWli/WVxFW9eQ2z9mcOCygXFkU\"",
    "date": "Mon, 02 Jun 2025 00:01:27 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODcsImV4cCI6MTc0ODgyNjA4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VXLKdTxMJBrYyCS4E3bZ5qrAZdtxTvmK1Vrj4C1e7uCLscmOxih41i2WkMXjQouKNS_IxkD84Y5nnKN6Oo8WhmvqkmsqVCcv4nqZVuCqCyh-SCIym085Bl0po1lVd6l_v1CoUffHzeD0x3YB8xeX3c9lBm-07DxXTsYIIPFE_2wx9XG3Qe33d4QcnffHQDU7TyEdTkdueoKiIwKudue5-3VEzC9x8PogiZ41L2EiVacemeqsBczi-dTvQLaVz8eJyYxP4qAHbPj79qBXKwcBUiLCO-EIJcxUrbaSUC84iIO1df9_CG3TyG7mjiIHWSXsA7YngGBY4SPFc3CuDuGp2w",
      "refreshToken": "AMf-vBxNGhB-6hP-hUIkCXJFiwWxb_fitKtTuxq9HCKYaFCi7LVaR5PUKtTsBJN_y_YaC43Swpji0vNTn90OjGeAQ5E7841huUINufa1UBLSvAlp1loDhHu5FS3J7Mg-jrktZLrbW0PU-SjOyqoMHjLhNujG5tlfqWg33r6SXqrCUZRQ4yYz-W7AxK6eohgr8ZAUbcZgL-CHCsvWyDX6FOwYSBdrdJI1iKENmLhyZavKM2EZ6YGHGpkGtMIyv3tKLgp4xXJAdqgT",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 237.4 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/bih9Rh2DndR8ok6RwXHTrEKGNVJ3 (1300.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDg3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODcsImV4cCI6MTc0ODgyNjA4NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VXLKdTxMJBrYyCS4E3bZ5qrAZdtxTvmK1Vrj4C1e7uCLscmOxih41i2WkMXjQouKNS_IxkD84Y5nnKN6Oo8WhmvqkmsqVCcv4nqZVuCqCyh-SCIym085Bl0po1lVd6l_v1CoUffHzeD0x3YB8xeX3c9lBm-07DxXTsYIIPFE_2wx9XG3Qe33d4QcnffHQDU7TyEdTkdueoKiIwKudue5-3VEzC9x8PogiZ41L2EiVacemeqsBczi-dTvQLaVz8eJyYxP4qAHbPj79qBXKwcBUiLCO-EIJcxUrbaSUC84iIO1df9_CG3TyG7mjiIHWSXsA7YngGBY4SPFc3CuDuGp2w"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1300.9 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (237.5ms)</summary>

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
    "etag": "W/\"640-utGtF+q2J2O4H1/z58wvSxH0hXA\"",
    "date": "Mon, 02 Jun 2025 00:01:29 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODksImV4cCI6MTc0ODgyNjA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Yi1-cIYCpWElNOSjoe6hp392ohAD7R6eXhSuAIdBeH8Z6yzZYg80OnlfPI03W1DQb2D6m7iROQVFbjppi7C-n-jWlTwprMlmIb50WBO2h4MOI-p3SCciseeCBNdyhGQZstZ-nJ9EPsBXHDW6Z-738cb8THeIcY2xtUr0ybi3Zk67wDOMzonw6piMnX2iuT_VNneA01rcYNR2J42-QFGfRC6jCUSJIvLvgY4F8gX6eS8fBliHUrYn9gYeJZGtEi7MNJImQ7wfgLuMAbc6u5gs7_AyySKJU7WlmhJ24whEtnV8SBGcCs1ZKgYw-jVPWV1rxVb-f__KxDkVlq9jH9JD4w",
      "refreshToken": "AMf-vByuKXLElKiNdP5qTp-I61ssgVfry6bMG41duFJD8oox4lgTlzaSk1Kg8Q2zpG1cYSTHhkC4JZe9aCz8E8nJSulo84lCffSeDtCNjcQ_LRAh_V1JFG4eAtZc4RSMVvVt-zBwTszwSd-LrnvP1_vJ6J8-cqyx6uqLOjaOarQhHZTH6U5L5jFuOOeUl7COAaehdlckO5ezGTiZLCQbZZcFTJfPDGBCum1561wsii3pyMvU4FAXWoNxJGsNAm1qIHzXYQb_uKe0",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 237.5 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/EXNlRhTy7eXEn0czv9FVQXZcVEf2 (1346.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0ODksImV4cCI6MTc0ODgyNjA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Yi1-cIYCpWElNOSjoe6hp392ohAD7R6eXhSuAIdBeH8Z6yzZYg80OnlfPI03W1DQb2D6m7iROQVFbjppi7C-n-jWlTwprMlmIb50WBO2h4MOI-p3SCciseeCBNdyhGQZstZ-nJ9EPsBXHDW6Z-738cb8THeIcY2xtUr0ybi3Zk67wDOMzonw6piMnX2iuT_VNneA01rcYNR2J42-QFGfRC6jCUSJIvLvgY4F8gX6eS8fBliHUrYn9gYeJZGtEi7MNJImQ7wfgLuMAbc6u5gs7_AyySKJU7WlmhJ24whEtnV8SBGcCs1ZKgYw-jVPWV1rxVb-f__KxDkVlq9jH9JD4w"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1346.5 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (318.5ms)</summary>

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
    "etag": "W/\"640-uYjq6SNCaF7MMVAiR+qBfsr1anQ\"",
    "date": "Mon, 02 Jun 2025 00:01:31 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTAsImV4cCI6MTc0ODgyNjA5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BzROEVjE9ntGbuwxsiirc-hf_gz2T0KbvIVlTXJX8U7PP1aFwyisJfEDy1dgKy20ThwK-VVq5iYgkwdru3vAbz6hgB1HYA2Xqhy7QEWrCFyO0u8H_yVlK8ZZ41M9k3cqj5D0mXZrNqn5Sp6ZgCltclHx6tLzj4r649_HKecWFDLbAwqLV70kuJ6TpZEGpQXHXKYpZpcSw_JJF9yT4xDB9QHJb2hb9QFw1zPoszq6AZciiOtWnaW-e23TZoPvkVs0y8KEb-LcjrscRfQzBy4JDbaKi494XbFq1U8yBLzmSKX2IlOWSqz5xXpJRTsbKk4EJsdUY16XCeICL766FBqUUg",
      "refreshToken": "AMf-vBxglXPm6U1CYY86H6QVaSLvxr-vqxHBhx2ciDtyTqGhyi-PId1z0I2SQE1v_-6JCWudthRBnV_nVwKpfP3iOxZSeh9DXgTv_Vwo12XhhkJsLlEOd752epXFUda9M1T6W1URGMlaFGCX9yNoDAHPVIMdm43Hlk-1I7bZzq2uFp9GxKT6hcTAmF5t7TwNh16K5W94o7buh03fXZBm8OVMPWY3qz_8FgxHwgvn8tiMrI-RVEvbY3qOPofGl4uZKmC3Bgaa2sTH",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 318.5 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/yVLvEoqCIFbrGCGqHwcCaaGprKG2 (1369.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTAsImV4cCI6MTc0ODgyNjA5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BzROEVjE9ntGbuwxsiirc-hf_gz2T0KbvIVlTXJX8U7PP1aFwyisJfEDy1dgKy20ThwK-VVq5iYgkwdru3vAbz6hgB1HYA2Xqhy7QEWrCFyO0u8H_yVlK8ZZ41M9k3cqj5D0mXZrNqn5Sp6ZgCltclHx6tLzj4r649_HKecWFDLbAwqLV70kuJ6TpZEGpQXHXKYpZpcSw_JJF9yT4xDB9QHJb2hb9QFw1zPoszq6AZciiOtWnaW-e23TZoPvkVs0y8KEb-LcjrscRfQzBy4JDbaKi494XbFq1U8yBLzmSKX2IlOWSqz5xXpJRTsbKk4EJsdUY16XCeICL766FBqUUg"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1369.5 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (250.5ms)</summary>

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
    "etag": "W/\"640-M4Xas89yef6IkOF+ZF24HuY0aTU\"",
    "date": "Mon, 02 Jun 2025 00:01:32 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDkyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTIsImV4cCI6MTc0ODgyNjA5MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cfyVvEs70_SakoD4zQJkUav0QO-UcfiMQUwK8WqvdcpnrLhAfKvUvvsy8OlJvA9EA9ag17aIHDvlLSRBHQg0u8bO5CTd4unhkwhptQ0QiGr0JX4Qrp3Mx_-_KEjE71Orwubo6t9tqfNo7_LEYQC9FuBjoHpwDkLgSucaLbmKHmDxTDTE31lfvgwTVyLM8Fu89H424jTa6L03lgXoEficHdAVQ4yWsx8FW2OORwK7qD6345EdrcwkqEUCNIFlu-PnyLZUL6bY63zZosx2tWYeKHrtl7DwOp9_nreLU5g4tZ7XsEgvwvySH_HllZuR0Dj0kEAImLkahwVR9cvR5QQaAw",
      "refreshToken": "AMf-vBw1X9TPKqfwWUTf04UQw8TPLPGyGf5hGMhGrYOIITFjKvhAR42YtK5M-6JQrMh396CpzqDcTvnS2a0cqGPo9S3TEmonFyiOyowh244xOP1A2bjDrQdXF0EbXry6QwSMyhDoiwhxDquDnDl4sJC6BvbBfQTYq_dOoHM3Mit0cmipriBC4cgdkr9TVPwThq0RRhobZnOnPChlCDAqcEQ_WYIKQURRElwXCqD5B0nLUJFb6ifejQKR5TmKZK-hXweq82ilxwUa",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 250.5 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/XZdOVoagEhQ4jp1U4p0uAWKNjGV2 (1219.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDkyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTIsImV4cCI6MTc0ODgyNjA5MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cfyVvEs70_SakoD4zQJkUav0QO-UcfiMQUwK8WqvdcpnrLhAfKvUvvsy8OlJvA9EA9ag17aIHDvlLSRBHQg0u8bO5CTd4unhkwhptQ0QiGr0JX4Qrp3Mx_-_KEjE71Orwubo6t9tqfNo7_LEYQC9FuBjoHpwDkLgSucaLbmKHmDxTDTE31lfvgwTVyLM8Fu89H424jTa6L03lgXoEficHdAVQ4yWsx8FW2OORwK7qD6345EdrcwkqEUCNIFlu-PnyLZUL6bY63zZosx2tWYeKHrtl7DwOp9_nreLU5g4tZ7XsEgvwvySH_HllZuR0Dj0kEAImLkahwVR9cvR5QQaAw"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1219.3 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (241.7ms)</summary>

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
    "etag": "W/\"640-9Qw78FvjcuORrdE6uJGeCL/vO5w\"",
    "date": "Mon, 02 Jun 2025 00:01:34 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTQsImV4cCI6MTc0ODgyNjA5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SoOCahOLWlWlHaVfD4y5jRj72B7h-hjWDJKgm1YJPByjc7FASCPC4tsb6Zc_x-cHW2QUo8ahpOSzcT3zMXiZ6w9S0b7rtrr35MrcUC3WmsofBkSUPCteLgP3llulZ53XSwWn_S6Z815MfTJP1rT3zPMuyfROvwoAvdscJdHkI5SnI6FLnm2VyruWx_HqbgdtdrIP_h_CJ9K10Pvhu1QQ1iOAUhMsfs2Eq0q4qFe9fO_LG97HRWoDvzh3hvGBwIITRTyHVglBboze0hmQlM-uWFm19iTK_T31Ziexc7oYMeXoxvlYZ8nwvnZ9cbITdFEhQmgNDnckOCXVphj4yWfo3A",
      "refreshToken": "AMf-vBxM9pt3m8bV6RFNMaBqNtQjO73K5iEZ5zOxuRLB9EUaUDYYFPwNoJ4DuHnTrIPeJM8s31o2tA9CeyNiQ85aZJOUyM9RvOwg1hxu4kUBu5DTuggg3KeBHg3c9Ywk2-nVfg_PUWIoeY9PzP8G-14Bb_5lKo1czUlbxCsbP0FRylB99oCMpFV9RiLRGknacSA3QagHyeZUsNhL7YAXiyCk3dCvImjjGl_DRAlhXz-l_-iLRLEiF5qCKqan9TpWLBR9Lie5LsFj",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 241.7 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/Tthv9M3PVlNoDMQUUi1kTGTK6B12 (1232.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTQsImV4cCI6MTc0ODgyNjA5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SoOCahOLWlWlHaVfD4y5jRj72B7h-hjWDJKgm1YJPByjc7FASCPC4tsb6Zc_x-cHW2QUo8ahpOSzcT3zMXiZ6w9S0b7rtrr35MrcUC3WmsofBkSUPCteLgP3llulZ53XSwWn_S6Z815MfTJP1rT3zPMuyfROvwoAvdscJdHkI5SnI6FLnm2VyruWx_HqbgdtdrIP_h_CJ9K10Pvhu1QQ1iOAUhMsfs2Eq0q4qFe9fO_LG97HRWoDvzh3hvGBwIITRTyHVglBboze0hmQlM-uWFm19iTK_T31Ziexc7oYMeXoxvlYZ8nwvnZ9cbITdFEhQmgNDnckOCXVphj4yWfo3A"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1232.5 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (291.7ms)</summary>

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
    "etag": "W/\"640-GQkzU3mh8F1bqsnkDETustAt9Rw\"",
    "date": "Mon, 02 Jun 2025 00:01:35 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTUsImV4cCI6MTc0ODgyNjA5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hAwmhiRoZFxAXKqYUCUGXjICHocuOJLnODkIUj59hvqbDoa1H6U-YTwTelKhlIN-lnOVtBGystEzoffuOzUWYEoT4tjWBdXY9VxPnHusiNy1ojs6zdOOxCtL14gCdO-PYj52-Z_V_SLpctBpznQfd3GGPEBNcyhefJt7KljbfWx58cUlj-I8vPym24o0xAJ0QVSyT9qysB_1ZpWwppLow4p3EOND9FPvB5Q1sThAN4HHehyfKZ94GL4oPkEbt093IyJlLMcM9wuQ1lHHVTHd5XrdipVex7JHTEVEBOh82vOdPCS4c0pDntSi6ovRS-F3moR9Zzk5zt2WgpYDGGl0JA",
      "refreshToken": "AMf-vByi9M8wEEYgdNJUjgqdgHHOx3Wg7cHRJF8PXBAe_e1WYn-YM_nVSpBa-5tWdls6tOz2hXwaJvle0oizb_z5k5o08lakN7xJ4NYXJW87kLYPrzSW4dCZPWeduIAj0XufJaLGAb-XHxX0diYmMvaCjt9VyR8o_qIrXrA2VwoYdmzyIwgV6PsuwyIobAJ5aO7gwPdWhTkDz_TLDC3Uei8Z7I3XVkOYZGZhtKfYfTOIcEdz1TBkboPeA2wGRbxr-08H0ILLIU70",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 291.7 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/TiXGbl85xcdeeiJDc4LnJgSrOo92 (1172.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDk1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTUsImV4cCI6MTc0ODgyNjA5NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hAwmhiRoZFxAXKqYUCUGXjICHocuOJLnODkIUj59hvqbDoa1H6U-YTwTelKhlIN-lnOVtBGystEzoffuOzUWYEoT4tjWBdXY9VxPnHusiNy1ojs6zdOOxCtL14gCdO-PYj52-Z_V_SLpctBpznQfd3GGPEBNcyhefJt7KljbfWx58cUlj-I8vPym24o0xAJ0QVSyT9qysB_1ZpWwppLow4p3EOND9FPvB5Q1sThAN4HHehyfKZ94GL4oPkEbt093IyJlLMcM9wuQ1lHHVTHd5XrdipVex7JHTEVEBOh82vOdPCS4c0pDntSi6ovRS-F3moR9Zzk5zt2WgpYDGGl0JA"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1172.7 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (246.6ms)</summary>

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
    "etag": "W/\"640-gZzyxcGOIZb9edgH9aRvpbSJURA\"",
    "date": "Mon, 02 Jun 2025 00:01:37 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTYsImV4cCI6MTc0ODgyNjA5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SEhKmr1MMeXVdJymFZWUAH1ZIMOdEYXSURGDQgra-l9M1yUbt4H-xUR3guDkR6-UkAb_rpBqfvr64wvWm62o2xNdwlMF7c8nM7RiDPwmkc252csfww5mR8pcl915PDyE18XGF9PXHsZsz8KJC-y4NPhnZaPvzVENN0dehxL5g7UoPYWXYou4bVnh9OFEyDXmiCfdNMS2JO8frUgQlKHRX_NXEFHN2rgoGrlAPoAQbBKB325jXyAo8OZicE5uVFFs115rc1i1iZ3FbCZ1aD6oCDZpSNu3zatQJ29-8pQfVMYlhyN0PNRFUqSU6vugKIYvVdI41gqzugdtYVgPl1Jr4w",
      "refreshToken": "AMf-vBz3oJaMYg_5imlUicxQ2eDc74tY18MTK-tQ-MpAZfvmUTvGF_XCSovreZO3afUJK-7-G-0wB_7aqSMerpfG8Cpudzj1wjKlehDdVzyq_MFlcGbE0Roh5HrYU3UpEesrNxRdBhvwFOXA5NQKTbpH8LkoVQ-MuimKox37WrSQ03oO3Naz5aTM7CM7UfAIRRR4oCR0yYBPDwjpE0C4yI6c-48sX-EUVEBjXQNo-z_RMvciSXdOE5-JwMhQXiXZw4NljhUqKHvR",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 246.6 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/FG5gNfrqKoSgzQlUzjRAgRRTmOq1 (1362.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTYsImV4cCI6MTc0ODgyNjA5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SEhKmr1MMeXVdJymFZWUAH1ZIMOdEYXSURGDQgra-l9M1yUbt4H-xUR3guDkR6-UkAb_rpBqfvr64wvWm62o2xNdwlMF7c8nM7RiDPwmkc252csfww5mR8pcl915PDyE18XGF9PXHsZsz8KJC-y4NPhnZaPvzVENN0dehxL5g7UoPYWXYou4bVnh9OFEyDXmiCfdNMS2JO8frUgQlKHRX_NXEFHN2rgoGrlAPoAQbBKB325jXyAo8OZicE5uVFFs115rc1i1iZ3FbCZ1aD6oCDZpSNu3zatQJ29-8pQfVMYlhyN0PNRFUqSU6vugKIYvVdI41gqzugdtYVgPl1Jr4w"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1362.8 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (288.8ms)</summary>

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
    "etag": "W/\"640-SEP30Yl9svjQ+bWF+xlnyglNkOA\"",
    "date": "Mon, 02 Jun 2025 00:01:38 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTgsImV4cCI6MTc0ODgyNjA5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEVk0AMtO-DPlY-AVZ_XIBzyvzag6n2qaXu5rboyIVlgDUZ9GTEOUn_BTGIjuzoPQJd1sdBsRb2kSP24NzChFFxs1jm0acPpRfTFK2f5bck-JkL8vqY579nXRQEslQty8RmkBx7BYUS2Jc3EkUkt3g3ovDq7ZyNO-ecdgkt0Yrjwt20p-cBysvdHzRa0NqCMpCIDJNh5r2xCrhn8nRFyWwcjDoPK_KAUeXKk5TrfKNSHwzbkfYDdG_VUmRCUQtc9Gx2A8GgAIcGGAeYCtDSW9MWtc28QariSnNldZysm468xvkxqrjfDR9fK_UTbJvjD1qPgcuOWkzC2n0ZaM6RzYA",
      "refreshToken": "AMf-vByDcmPMuuWT33t9I_pa7Mq35_egWcunAE2NcnwLvyDGz8QKI3dzjNhDCztkTXOR-1Ja5G8ZgktoADfxdX1FxEDKxFVOxlw-jwndDox3kjdmJHKjqT3Owtzw8TvanW5wbFOVTnl_S_ChKH1RrFqxd3sNylB-nzj752Rqy2SnGuki3vfjprQjEX3d-QelsEod6Fw9Jg0IVpj_S2JWvYfHDEzbmC2SgJIrYP3LDhpnT9bRb-XOda7iUznHpdRxQXVvXmdr20Ci",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 288.8 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/QPpqRP8py4XjAI1Mpiv7JgFiasB3 (1322.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIyNDk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjI0OTgsImV4cCI6MTc0ODgyNjA5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jEVk0AMtO-DPlY-AVZ_XIBzyvzag6n2qaXu5rboyIVlgDUZ9GTEOUn_BTGIjuzoPQJd1sdBsRb2kSP24NzChFFxs1jm0acPpRfTFK2f5bck-JkL8vqY579nXRQEslQty8RmkBx7BYUS2Jc3EkUkt3g3ovDq7ZyNO-ecdgkt0Yrjwt20p-cBysvdHzRa0NqCMpCIDJNh5r2xCrhn8nRFyWwcjDoPK_KAUeXKk5TrfKNSHwzbkfYDdG_VUmRCUQtc9Gx2A8GgAIcGGAeYCtDSW9MWtc28QariSnNldZysm468xvkxqrjfDR9fK_UTbJvjD1qPgcuOWkzC2n0ZaM6RzYA"
  }
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
    "date": "Mon, 02 Jun 2025 00:01:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1322.8 ms  

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
- Test organization: Test Org for Memberships 1748822441774
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
