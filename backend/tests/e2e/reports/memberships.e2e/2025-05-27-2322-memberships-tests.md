# E2E Test Report: memberships-tests

**Date:** 5/27/2025  
**Time:** 11:22:37 PM  
**Duration:** 61.04s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.68s | Admin should invite user to organization successfully |
| ✅ Should fail to invite same user twice | PASSED | 0.62s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.72s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 7.76s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.76s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.49s | Admin should get memberships by user |
| ✅ User should get their own memberships | PASSED | 0.45s | User should get their own memberships |
| ✅ Should fail without userId or organizationId | PASSED | 0.42s | Should fail without userId or organizationId |
| ✅ Regular user should fail to get other user memberships | PASSED | 0.41s | Regular user should fail to get other user memberships |
| ✅ Admin should get membership by ID | PASSED | 0.52s | Admin should get membership by ID |
| ✅ Should fail with invalid membership ID | PASSED | 0.45s | Should fail with invalid membership ID |
| ✅ Admin should update member role successfully | PASSED | 0.64s | Admin should update member role successfully |
| ✅ Should fail with invalid role | PASSED | 0.43s | Should fail with invalid role |
| ✅ Regular user should fail to update role without permissions | PASSED | 0.53s | Regular user should fail to update role without permissions |
| ✅ Admin should remove member successfully | PASSED | 1.06s | Admin should remove member successfully |
| ✅ Regular user should fail to remove member without permissions | PASSED | 2.31s | Regular user should fail to remove member without permissions |
| ✅ User should be able to leave organization (remove own membership) | PASSED | 1.12s | User should be able to leave organization (remove own membership) |
| ✅ Organization admin should not access memberships from other organizations | PASSED | 0.48s | Organization admin should not access memberships from other organizations |
| ✅ Organization admin should not invite users to other organizations | PASSED | 1.41s | Organization admin should not invite users to other organizations |
| ✅ Super admin should access all organizations | PASSED | 1.05s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (677.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "hqS3QgC7JUdp7FOCzAadVPAcPNm2",
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
    "etag": "W/\"fd-uGnijbKCRNgaHs1KBuAR8qG9Uhc\"",
    "date": "Tue, 27 May 2025 21:21:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f55698ff-aa26-4bc6-8bba-7b7084ab9768",
    "userId": "hqS3QgC7JUdp7FOCzAadVPAcPNm2",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-05-27T21:21:42.867Z",
    "updatedAt": "2025-05-27T21:21:42.867Z"
  }
}
```

**⏱️ Duration:** 677.3 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (622.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "hqS3QgC7JUdp7FOCzAadVPAcPNm2",
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
    "date": "Tue, 27 May 2025 21:21:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error inviting user",
    "details": "User is already a member of this organization"
  }
}
```

**⏱️ Duration:** 622.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1190.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1748380903632@example.com",
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
    "etag": "W/\"5dc-cqzIVmiMMEyWQbNL2NyOsngx4yY\"",
    "date": "Tue, 27 May 2025 21:21:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "vzPaPaogSmfnyh561qhVT7QZa1p1",
      "email": "no-perm-invite-1748380903632@example.com",
      "name": "No Permission Invite",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkwMywidXNlcl9pZCI6InZ6UGFQYW9nU21mbnloNTYxcWhWVDdRWmExcDEiLCJzdWIiOiJ2elBhUGFvZ1NtZm55aDU2MXFoVlQ3UVphMXAxIiwiaWF0IjoxNzQ4MzgwOTAzLCJleHAiOjE3NDgzODQ1MDMsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0ODM4MDkwMzYzMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ4MzgwOTAzNjMyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Jfv89hv7ph1BT3j4mOtvDQEY9d6Fd8KozdWy2abBmmYJBHGgAyK_JCQ2RwCYfnFzdYLBs2D5fdqIaDZZZ7QMFFzPIiFE5Ln-z28x6IlIyTeCCk6N_cesI_8CYabJxrU08xyFOK_1w9mIVT2jGFpOay3dgPtVSPXKU5A2rrheC08G-vYVnPNnQFBFtA59-oHmJ1yF_eoBhpMCFuKiSg7q5SgrOhogu8ufVqlodLCjlBgN4qjcSUjMfKalI-K0-K6aLkwejMSdAO9bVX3Gs-oIIo4uUvMzoE1tjaEp3iUv91nOPM2ewb_BlSndzr3Ga3femPLH4IeIIOftw8cGDI68kg",
      "refreshToken": "AMf-vBxrlB0t2JF6yNN8P84EREG-b1oIChfJMKOl1HFabmTDyOPA3YPj8Cl-PTVwBiSe2Rij4BvPnKljM0oA1itO34KmlO-wPfmR8dkR6cT6v0xvStRQDATbHMF-in2zemx7m9Kb4M2DGzNOdYe6dpRfVm6mXVjXuvR3v2dECYH4wBpTeBWMlKnsT7bnXG7ZWnqTXpPH5ZBkEKJkGX371iadZnp_PZrz8Iimwza1PvECivv_zTSKYhYvHlxrByJ92M9oOj62AmlJ",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1190.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (528.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDg5OSwidXNlcl9pZCI6InZRR0ZlWVZxVUlNRTd0SlZBUFNxdnZpNDBWMjMiLCJzdWIiOiJ2UUdGZVlWcVVJTUU3dEpWQVBTcXZ2aTQwVjIzIiwiaWF0IjoxNzQ4MzgwODk5LCJleHAiOjE3NDgzODQ0OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDg5ODMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwODk4MzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.J8dr-qaBY7ks9IABM-VJjy23YrQ8ECTt-VBNKzJo-PIJiQcNbzO1haFWzlMHB9dso6hgKTaTdH-Q4bIPA1ytsGo1Y0c4AtUwxRu7tsVQGfYgpQEHlH-DRYQQYDtpZtXZSMPEultng3tRtzupCpNG3Zp606gfaAbjJjrob8z9cnPM9mXzuLYegxG92NQykhlhYn9dAg2V8LAoKjx9JnCt2fJfCzcy0gwr4r9EEHREESeHklJZu7X_0UDwM0TKHJT9nAu2-H7TjSCpik_ni5gFfsCB5eWSzNZ8TcRwLDREcocZqI5bo7UCL1lKlgtzl-el7afEC7dbcgWaD_nOzY5RlA"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "vzPaPaogSmfnyh561qhVT7QZa1p1",
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
    "date": "Tue, 27 May 2025 21:21:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 528.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 7.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1054.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1748380905354@example.com",
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
    "etag": "W/\"5ae-9boqt6M971eqscmuLe6ouo6e7d4\"",
    "date": "Tue, 27 May 2025 21:21:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "gr7SQ0lOjwZbR2rLxdkvCXLhftA3",
      "email": "admin-user-1748380905354@example.com",
      "name": "Admin User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkwNSwidXNlcl9pZCI6ImdyN1NRMGxPandaYlIyckx4ZGt2Q1hMaGZ0QTMiLCJzdWIiOiJncjdTUTBsT2p3WmJSMnJMeGRrdkNYTGhmdEEzIiwiaWF0IjoxNzQ4MzgwOTA1LCJleHAiOjE3NDgzODQ1MDUsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ4MzgwOTA1MzU0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0ODM4MDkwNTM1NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KzD8utlgNw6r3UZ996V6MEndtx14Z8y-TAUUEq479fbvaKd6sRauhLX1am3LTRbwrKc8xt3r8-RD-5WrbNSs7oC-r2KK_m8h_wNJfhy_Qtbsm_ujOsFU_jIgesIeH2J0CBnALBjv4FbQ2SaaoW3OK7gjfp4dIkJZ17OzxdLRz2fOCvaYlKBqORsiOqph_LQMIDHimF2pELFjrOUjU5H4xQcev0Nv8TPHW-okYGm5R7JvHoQbMA9-UY_7m-0AlDB5OygRzjmvxqHslHdzYnQ5d1iaMJwoB6UDLoQzImC56TPSJwjgMHhzDnjfRCK4IPlMrZrqyz-yerp4ZgEvYXnHbA",
      "refreshToken": "AMf-vBwttsfQU_zsHkyc8NS6YVbk1dbOpDSFfw0Wquq3XErR7VkfCTn3jBbOvg9wFkzi7CbWPKJFt1N-Tk1fVn5NGXt_JRGljzYmGCJg2OD5iaLj74-1xiqXqAJ67uKZjCpiLrIBSwpOAVH9veteEJ0SDPUgmmzxHKAmYsvdA8av29qTLE81ynIWhnVtfY0PRikgxnclUNw7_5cIBNUu3zUxiqXn6kwuvGn5iuWch6u4-su_qkyax_Q",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1054.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (566.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "gr7SQ0lOjwZbR2rLxdkvCXLhftA3",
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
    "etag": "W/\"fc-9iNYp/q04pDtkEUmZMPdtZd2S+4\"",
    "date": "Tue, 27 May 2025 21:21:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "917dd7d7-faca-4ebf-8a2e-3ea9f1d9bb49",
    "userId": "gr7SQ0lOjwZbR2rLxdkvCXLhftA3",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-05-27T21:21:46.903Z",
    "updatedAt": "2025-05-27T21:21:46.903Z"
  }
}
```

**⏱️ Duration:** 566.3 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (949.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1748380906975@example.com",
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
    "etag": "W/\"5b8-Lg6O7VcyospnEAqeGcX8gqiv6wE\"",
    "date": "Tue, 27 May 2025 21:21:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "OmXsWnAAzZbp6srhqbGv1GhgzYg2",
      "email": "manager-user-1748380906975@example.com",
      "name": "Manager User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkwNywidXNlcl9pZCI6Ik9tWHNXbkFBelpicDZzcmhxYkd2MUdoZ3pZZzIiLCJzdWIiOiJPbVhzV25BQXpaYnA2c3JocWJHdjFHaGd6WWcyIiwiaWF0IjoxNzQ4MzgwOTA3LCJleHAiOjE3NDgzODQ1MDcsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDgzODA5MDY5NzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDgzODA5MDY5NzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.plYlkqFogLWMbqHiVDMZAn-LaiLJlIfta8C8hgtJ0DvAGrPfMFcbx5FybQwpijN69cnorflgkXxc9fKswmZ3w3OJ8fAWO-SsLb0F2NZojYxNClPq0uGB4BF7iMFgoN1Lp6C79hsmdRAWMEU2keqCNNdPit14WOeabdzBoAneWndGohkFrwjboTIZ-s64jCBrF6RjGlf879qagNu9Ut3OHoDzqDsGW9naXHkdbvFiZd-6qENcldTMUCw303I46eX0vZuRif1Wiioh87meiAoFtp-Bn-afld41Sq5S9Mf-Z6DhcHyWaatIAZRkNCVAip4K4-xga79QvHGjiaCjbOsdMw",
      "refreshToken": "AMf-vBxIxYFDbCzStytirnOhawqpxWQWTTJNfO3tdoeKFLt1iRX6vZWmTwEuKnn3MW9S8MPoYPbNR1kl6gQXdrqEtBALw0rrM2rivpF_z2HJOJ8jodg5dUDiLl7l9ufUeunpJkKeCPI0Sj8PjJOdQDwngHqNSEO9ch56E5EzuKT5a-HD4yLqEahLGYSevQNZ2J3TyP_ZLUjLHgaJJJCRC4K7EQzN2ldQeKtoF0ytJDf81yHowBVzu90",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 949.9 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (611.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "OmXsWnAAzZbp6srhqbGv1GhgzYg2",
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
    "etag": "W/\"fe-v59SGk2EL8MhZHUVwV6wEGeOWQs\"",
    "date": "Tue, 27 May 2025 21:21:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3037948c-14d6-4815-b6eb-309bc36af2fd",
    "userId": "OmXsWnAAzZbp6srhqbGv1GhgzYg2",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-05-27T21:21:48.468Z",
    "updatedAt": "2025-05-27T21:21:48.468Z"
  }
}
```

**⏱️ Duration:** 611.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1014.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1748380908538@example.com",
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
    "etag": "W/\"5d6-RS0sL0U7nSPG1XuPZqH7YpRo2yQ\"",
    "date": "Tue, 27 May 2025 21:21:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "FW25V3dysUMR0D5gEwadXSkBMb42",
      "email": "moderator-user-1748380908538@example.com",
      "name": "Moderator User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkwOCwidXNlcl9pZCI6IkZXMjVWM2R5c1VNUjBENWdFd2FkWFNrQk1iNDIiLCJzdWIiOiJGVzI1VjNkeXNVTVIwRDVnRXdhZFhTa0JNYjQyIiwiaWF0IjoxNzQ4MzgwOTA4LCJleHAiOjE3NDgzODQ1MDgsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0ODM4MDkwODUzOEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ4MzgwOTA4NTM4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Yxx_973neQs02T1q-dzfsVnFNW7BXS8nhb6K9H8-rxE82TC1T7w6NXJr4EsGAh1p_MNN7gfjQIcZ3xmAAH3ZZn-08IPTajiwUXERFFv19XE8k7UGE6HmiCNtdPu9z6_9VX8OlIPIDslcukkU2C7TixBZj5updCqISiJ16h8UoVdlX2fYPkE4KoMdZd40q0Z9hHLq_JGecQ_FyRy1uNbbevBHQ4USsEJQVJ3tWnxSOfOqgdw8cuP-bKs7Y8vCxRLHoQ_O28fgpWc0_dLMWQ7j1z1y4LmBk8jm8N04ov8ZlaSWx4et-F7NtT4MR9DtHr7K_luHU3UKjVNFElUOo0PGcQ",
      "refreshToken": "AMf-vBxqjC3USzjGbsHf9GiA6EjWqAHyFiENd_FwC5QLPuavgBhFdsgYkt-P91L4CMbI3YSqOh9Qw5W83sCHyIMWgBYVQepQAvTNHAtZnR5GVACVW86hnzpbteEenGFHPUYRN9boBz57GUgiQmb0sbTZtF7npLlNeZJiZqP3KPW_MV2TBrNOeMpF3Iw4P5F7kK9hWkRNWBzwamnEJtsIn3vq_kII5yPDVx2zQOhfyvK4LPQHO99CeSVTqRaeIm7ZdtYnvxLp7JEv",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1014.3 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (497.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "FW25V3dysUMR0D5gEwadXSkBMb42",
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
    "etag": "W/\"100-oEB/5ybYxGsL0OHCfXPZihiVmyg\"",
    "date": "Tue, 27 May 2025 21:21:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f35b400b-eeb1-4dbb-8631-4007f7fb1470",
    "userId": "FW25V3dysUMR0D5gEwadXSkBMb42",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "moderator",
    "status": "active",
    "createdAt": "2025-05-27T21:21:49.981Z",
    "updatedAt": "2025-05-27T21:21:49.981Z"
  }
}
```

**⏱️ Duration:** 497.8 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (917.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1748380910050@example.com",
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
    "etag": "W/\"5d6-JiWQVkshCeL/W68PuXBSj3t+zQg\"",
    "date": "Tue, 27 May 2025 21:21:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "52ccl9xv27OG5VQk7mrp8tXgc503",
      "email": "volunteer-user-1748380910050@example.com",
      "name": "Volunteer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkxMCwidXNlcl9pZCI6IjUyY2NsOXh2MjdPRzVWUWs3bXJwOHRYZ2M1MDMiLCJzdWIiOiI1MmNjbDl4djI3T0c1VlFrN21ycDh0WGdjNTAzIiwiaWF0IjoxNzQ4MzgwOTEwLCJleHAiOjE3NDgzODQ1MTAsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0ODM4MDkxMDA1MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ4MzgwOTEwMDUwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PArH586Kal1_SdsvALzvVAaJ4sDEPtm6X0jfH6yBo6LOxfW93MKjkIHadr_naAoJHwXrXQspo5Nl0BwjW_AG0OTqtAqgofVvoCXK9H2wlxT-E5BdK3nruqZjEPoHivtTDAS36F4JBJ65xp_WgvfmZId5HM7azEivZAVZanzlI2galgOZ9sZ5w6PYSS90IsRPfqDAtmqzzcAe9Wgt5zncmdz-X84ZZVvp3XpAuYN2AMZ22QMMzq2V9AzpWza4oYxITXuECdpEQ_GjbQSnsKH37qowgU4OLIkiwvoEknxm3HuGGu9Kn29aIasC2Mn1HIh-IMiqapk0Q2aj-t9WrL2pEg",
      "refreshToken": "AMf-vBzG4S0uVQTFtQHXQdxeU4V9XCjXLktcoNPGzhJ5rxtrnys2uxTVuUpSjYw0uGWD0Rm4JMil6JwAtVgJv8i4ahuY0DnWir9gB3i9mQwy13KrgxPiGOI1r1BViz38VXEIhXkGESkJr3cucpJK1C7Q1li-5BR7hAIskMg_1EkQmb32OM3aqjqylHbrpJsPOQ2VeTKy-Y09RHZTs25mrFFqAFOq0fqvUl0-kzlWdWDkS8dlTADiS91pXJrKhizZsV0abvn561CM",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 917.7 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (500.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "52ccl9xv27OG5VQk7mrp8tXgc503",
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
    "etag": "W/\"100-PEcncPWCa9KCKs4DwYGRZFvoFTs\"",
    "date": "Tue, 27 May 2025 21:21:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "39eb1c64-3eb8-48b3-ab73-7c8231f68f21",
    "userId": "52ccl9xv27OG5VQk7mrp8tXgc503",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:21:51.397Z",
    "updatedAt": "2025-05-27T21:21:51.397Z"
  }
}
```

**⏱️ Duration:** 500.4 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1035.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1748380911470@example.com",
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
    "etag": "W/\"5bc-59O9n/HP+v6VYzF1q64DkbfpdiE\"",
    "date": "Tue, 27 May 2025 21:21:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "qAWl87q9EkPbpcCTmPMAIz0VTE42",
      "email": "observer-user-1748380911470@example.com",
      "name": "Observer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkxMSwidXNlcl9pZCI6InFBV2w4N3E5RWtQYnBjQ1RtUE1BSXowVlRFNDIiLCJzdWIiOiJxQVdsODdxOUVrUGJwY0NUbVBNQUl6MFZURTQyIiwiaWF0IjoxNzQ4MzgwOTExLCJleHAiOjE3NDgzODQ1MTEsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ4MzgwOTExNDcwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0ODM4MDkxMTQ3MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SE95Re9gfP4T8wc7IcMK9r0DF7w0NjZGDeU9gyIPPTdrb0Ik7Vjh68jAwNRUJdv6psdPnlTRG2S7rCu2aNDYN5_UcbhULGnOKkO6L49t1PJa9cRCYav9eMAWKr4awtcbSOZtttKNydt6tBrJwb1hoKaJAWSs7ImvjmnjuOmUHmWAXxVezVIoS34sJZUefwAp1pUKv8D60anPn-TI7qQ9AP4M9vlbVkxkjxORUrJzQuNhmrBWMNMuaDKChuOsZlmL45XrHWJSWwQtEs790pGk7nPTxwHhGvIrLsnMmGIfBdSgxhx-IwCqKp2qrCDoww_GIyuK8jsPcwV8tbhCdb-a5g",
      "refreshToken": "AMf-vBzm08Or2JYg3t_3Dcy03oIErA3byaiX2IWYwR5u4GoKVrQjkSu0ZHs6k-V8mAUTRD8wjjX39wNrBquz6kRFoarXiObjYykpOrCX6jd8yEEwS8SzHS2QOJK6q7pJYri1cO8kHRRq79xMx3rzjjPPtzfZ1iZhlLWD9gIBds7hQU1ouz5kH6sjmlbwaJJmI6cgBtikRDaFpw0CslpvOu6Vk3p2ztMCGNe5dMmhkI2CZNQdOcfzi88",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1035.5 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (608.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "qAWl87q9EkPbpcCTmPMAIz0VTE42",
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
    "etag": "W/\"ff-viZYiCGPY/qtRZkrnqbdlOeL02k\"",
    "date": "Tue, 27 May 2025 21:21:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "27115ce7-887c-4683-a8ab-6a6e662af31a",
    "userId": "qAWl87q9EkPbpcCTmPMAIz0VTE42",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "observer",
    "status": "active",
    "createdAt": "2025-05-27T21:21:53.046Z",
    "updatedAt": "2025-05-27T21:21:53.046Z"
  }
}
```

**⏱️ Duration:** 608.6 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.76s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5833dc3f-014c-4931-bfcb-142b0180ae62 (751.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "etag": "W/\"5fd-FedxTqKeZXw/LpA3ACX56VazOa8\"",
    "date": "Tue, 27 May 2025 21:21:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "f55698ff-aa26-4bc6-8bba-7b7084ab9768",
      "userId": "hqS3QgC7JUdp7FOCzAadVPAcPNm2",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "member",
      "status": "active",
      "createdAt": "2025-05-27T21:21:42.867Z",
      "updatedAt": "2025-05-27T21:21:42.867Z"
    },
    {
      "id": "917dd7d7-faca-4ebf-8a2e-3ea9f1d9bb49",
      "userId": "gr7SQ0lOjwZbR2rLxdkvCXLhftA3",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-05-27T21:21:46.903Z",
      "updatedAt": "2025-05-27T21:21:46.903Z"
    },
    {
      "id": "3037948c-14d6-4815-b6eb-309bc36af2fd",
      "userId": "OmXsWnAAzZbp6srhqbGv1GhgzYg2",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:21:48.468Z",
      "updatedAt": "2025-05-27T21:21:48.468Z"
    },
    {
      "id": "f35b400b-eeb1-4dbb-8631-4007f7fb1470",
      "userId": "FW25V3dysUMR0D5gEwadXSkBMb42",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-05-27T21:21:49.981Z",
      "updatedAt": "2025-05-27T21:21:49.981Z"
    },
    {
      "id": "39eb1c64-3eb8-48b3-ab73-7c8231f68f21",
      "userId": "52ccl9xv27OG5VQk7mrp8tXgc503",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:21:51.397Z",
      "updatedAt": "2025-05-27T21:21:51.397Z"
    },
    {
      "id": "27115ce7-887c-4683-a8ab-6a6e662af31a",
      "userId": "qAWl87q9EkPbpcCTmPMAIz0VTE42",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-05-27T21:21:53.046Z",
      "updatedAt": "2025-05-27T21:21:53.046Z"
    }
  ]
}
```

**⏱️ Duration:** 751.9 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (494.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:21:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 494.6 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=vQGFeYVqUIME7tJVAPSqvvi40V23 (452.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDg5OSwidXNlcl9pZCI6InZRR0ZlWVZxVUlNRTd0SlZBUFNxdnZpNDBWMjMiLCJzdWIiOiJ2UUdGZVlWcVVJTUU3dEpWQVBTcXZ2aTQwVjIzIiwiaWF0IjoxNzQ4MzgwODk5LCJleHAiOjE3NDgzODQ0OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDg5ODMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwODk4MzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.J8dr-qaBY7ks9IABM-VJjy23YrQ8ECTt-VBNKzJo-PIJiQcNbzO1haFWzlMHB9dso6hgKTaTdH-Q4bIPA1ytsGo1Y0c4AtUwxRu7tsVQGfYgpQEHlH-DRYQQYDtpZtXZSMPEultng3tRtzupCpNG3Zp606gfaAbjJjrob8z9cnPM9mXzuLYegxG92NQykhlhYn9dAg2V8LAoKjx9JnCt2fJfCzcy0gwr4r9EEHREESeHklJZu7X_0UDwM0TKHJT9nAu2-H7TjSCpik_ni5gFfsCB5eWSzNZ8TcRwLDREcocZqI5bo7UCL1lKlgtzl-el7afEC7dbcgWaD_nOzY5RlA"
  }
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
    "date": "Tue, 27 May 2025 21:21:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 452.7 ms  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (413.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
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
    "date": "Tue, 27 May 2025 21:21:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Either userId or organizationId must be provided"
  }
}
```

**⏱️ Duration:** 413.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (409.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDg5OSwidXNlcl9pZCI6InZRR0ZlWVZxVUlNRTd0SlZBUFNxdnZpNDBWMjMiLCJzdWIiOiJ2UUdGZVlWcVVJTUU3dEpWQVBTcXZ2aTQwVjIzIiwiaWF0IjoxNzQ4MzgwODk5LCJleHAiOjE3NDgzODQ0OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDg5ODMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwODk4MzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.J8dr-qaBY7ks9IABM-VJjy23YrQ8ECTt-VBNKzJo-PIJiQcNbzO1haFWzlMHB9dso6hgKTaTdH-Q4bIPA1ytsGo1Y0c4AtUwxRu7tsVQGfYgpQEHlH-DRYQQYDtpZtXZSMPEultng3tRtzupCpNG3Zp606gfaAbjJjrob8z9cnPM9mXzuLYegxG92NQykhlhYn9dAg2V8LAoKjx9JnCt2fJfCzcy0gwr4r9EEHREESeHklJZu7X_0UDwM0TKHJT9nAu2-H7TjSCpik_ni5gFfsCB5eWSzNZ8TcRwLDREcocZqI5bo7UCL1lKlgtzl-el7afEC7dbcgWaD_nOzY5RlA"
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
    "date": "Tue, 27 May 2025 21:21:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You can only view your own memberships"
  }
}
```

**⏱️ Duration:** 409.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/f55698ff-aa26-4bc6-8bba-7b7084ab9768 (522.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "etag": "W/\"fd-uGnijbKCRNgaHs1KBuAR8qG9Uhc\"",
    "date": "Tue, 27 May 2025 21:21:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f55698ff-aa26-4bc6-8bba-7b7084ab9768",
    "userId": "hqS3QgC7JUdp7FOCzAadVPAcPNm2",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:21:42.867Z",
    "updatedAt": "2025-05-27T21:21:42.867Z"
  }
}
```

**⏱️ Duration:** 522.3 ms  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (445.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
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
    "date": "Tue, 27 May 2025 21:21:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 445.2 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/f55698ff-aa26-4bc6-8bba-7b7084ab9768 (634.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
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
    "etag": "W/\"fe-9tMXT64DjCciMiFTO/ON/wO1o84\"",
    "date": "Tue, 27 May 2025 21:21:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f55698ff-aa26-4bc6-8bba-7b7084ab9768",
    "userId": "hqS3QgC7JUdp7FOCzAadVPAcPNm2",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-05-27T21:21:42.867Z",
    "updatedAt": "2025-05-27T21:21:57.142Z"
  }
}
```

**⏱️ Duration:** 634.6 ms  

</details>


---

### Test: Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/f55698ff-aa26-4bc6-8bba-7b7084ab9768 (432.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
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
    "date": "Tue, 27 May 2025 21:21:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid role"
  }
}
```

**⏱️ Duration:** 432.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/f55698ff-aa26-4bc6-8bba-7b7084ab9768 (527.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDg5OSwidXNlcl9pZCI6InZRR0ZlWVZxVUlNRTd0SlZBUFNxdnZpNDBWMjMiLCJzdWIiOiJ2UUdGZVlWcVVJTUU3dEpWQVBTcXZ2aTQwVjIzIiwiaWF0IjoxNzQ4MzgwODk5LCJleHAiOjE3NDgzODQ0OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDg5ODMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwODk4MzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.J8dr-qaBY7ks9IABM-VJjy23YrQ8ECTt-VBNKzJo-PIJiQcNbzO1haFWzlMHB9dso6hgKTaTdH-Q4bIPA1ytsGo1Y0c4AtUwxRu7tsVQGfYgpQEHlH-DRYQQYDtpZtXZSMPEultng3tRtzupCpNG3Zp606gfaAbjJjrob8z9cnPM9mXzuLYegxG92NQykhlhYn9dAg2V8LAoKjx9JnCt2fJfCzcy0gwr4r9EEHREESeHklJZu7X_0UDwM0TKHJT9nAu2-H7TjSCpik_ni5gFfsCB5eWSzNZ8TcRwLDREcocZqI5bo7UCL1lKlgtzl-el7afEC7dbcgWaD_nOzY5RlA"
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
    "date": "Tue, 27 May 2025 21:21:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can modify roles."
  }
}
```

**⏱️ Duration:** 527.8 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (1029.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1748380918234@example.com",
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
    "etag": "W/\"5b8-FtC0FANo6mRlJd6XU3a6u6Rvdqk\"",
    "date": "Tue, 27 May 2025 21:21:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "phLPTIG8gPT01xerbtJ22RztNjK2",
      "email": "remove-user-1748380918234@example.com",
      "name": "User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkxOCwidXNlcl9pZCI6InBoTFBUSUc4Z1BUMDF4ZXJidEoyMlJ6dE5qSzIiLCJzdWIiOiJwaExQVElHOGdQVDAxeGVyYnRKMjJSenROaksyIiwiaWF0IjoxNzQ4MzgwOTE4LCJleHAiOjE3NDgzODQ1MTgsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0ODM4MDkxODIzNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ4MzgwOTE4MjM0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.O9VVUJFjIj2tPbyXWUENDXuDLViSHUryeop5Ixe4gofsCJRZmd318xQJvB2trIflx7ELTIEHOfrt2RHQUJ0cj0Wey6mPUn-nKalpw4XS_n4lgsW7Tl88oV_nu03eAvEf3oMEzgTEmCgOUwbLcPIOY6Ktoy2OB9ju9cWf1gVVc6QMdCpaPGwdEk7HoXf5MePUUMgStGD18rb0jUCo5yTmMA_BriLoUl1A66XXPIA9y4nWN2vnGen2ZGFnkMpELnk5gs3bW6FXQqYE7LaESKXNrW0VRJ3o3Rm44HJprgsw2UZNKU5PSge2oTPXrNr8To6UKVBziAU2HisQ3cPpiZLz0g",
      "refreshToken": "AMf-vBzvOQerneFes7brL9JNQ5HCgt2mmbv6wXUXA1DsgZOT7-w6PdHNuJZbcJw9f6PYvHTU-RNaN6HN3Q0QOUBC2VfhLR5VsgcG6-yOngVP-0GYYCoYw_OzoN_BYhYrx7ntE9AUX5_gczHuLpiMczdP5qxtaR_H2W3YrnV2dkRUP_4jF7133PEovL8cA0Ur79Tkd6LahVkPSEEvzTQno6_eNQjqiNr3FDciwScViOfgguXcoktCbXM",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1029.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (505.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "phLPTIG8gPT01xerbtJ22RztNjK2",
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
    "etag": "W/\"100-Ngyqsbj0hWMMjrE/Sjh6CxZPliM\"",
    "date": "Tue, 27 May 2025 21:21:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "ebd7d52a-9741-4036-8022-fd9d93930374",
    "userId": "phLPTIG8gPT01xerbtJ22RztNjK2",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:21:59.703Z",
    "updatedAt": "2025-05-27T21:21:59.703Z"
  }
}
```

**⏱️ Duration:** 505.8 ms  

</details>


---

### Test: Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.06s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/ebd7d52a-9741-4036-8022-fd9d93930374 (568.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 568.6 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/ebd7d52a-9741-4036-8022-fd9d93930374 (494.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
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
    "date": "Tue, 27 May 2025 21:22:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 494.8 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.31s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1089.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1748380920836@example.com",
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
    "etag": "W/\"5f2-fmQ4boQcsAHCFdqG+rKr0c+p5RA\"",
    "date": "Tue, 27 May 2025 21:22:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "9DqWTlaMi0TOr9sn6l5aM6oeUEN2",
      "email": "another-remove-user-1748380920836@example.com",
      "name": "Another User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyMSwidXNlcl9pZCI6IjlEcVdUbGFNaTBUT3I5c242bDVhTTZvZVVFTjIiLCJzdWIiOiI5RHFXVGxhTWkwVE9yOXNuNmw1YU02b2VVRU4yIiwiaWF0IjoxNzQ4MzgwOTIxLCJleHAiOjE3NDgzODQ1MjEsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ4MzgwOTIwODM2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0ODM4MDkyMDgzNkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bN9aIMMUKERt_fBUFcEr9JBzA1GQZDrxwIwdG8y_nk-KDpcjCeUyMx29dm13313TLTMC1eCDav2sf1h_5wdtBrpurrM_QoJam7OBy9IJjQf_wGnh3yxeSMT92jjlsoZxuSkIZxmynrzEjhVpGnSc42LF438SAZKIvI8QwBVs5fM6UiJJRLuoT682YHYhTa12EqFBNz0OrBaDhVRUArrTXpoNUwNF4Fz_mIvXniGV9ObVTezqMVt-9bnVh141P8o9TUC6IM1UBNaCuufpwgPWnnVwFN8IJS7i8QKVK_56_JJVkhvK_2JlRQSXAQ9t8Uh8JQbzrW3PTisEmI8B2xK7Iw",
      "refreshToken": "AMf-vBxgxz_hxov0u4QgDJs0zbeknzUzYlsiaqrSVzqGeglzSf40sRNgoBmG3eUPs1fWBmrrmYqlMaXn9eGJYWHOyqSERzCioqhY9AznrYVBjK8U5pXEa3ss2zKahkBSHNgDbESWqvVN2PAkhYHJdwJBi-9Yd0lgIa3XYNdCE6YM3wHGI6fbtpgutDOdPtoieCUVBZRSKd3dfDTDp-NYnZBYdGM1121v4CrIT7cWe6-JdcRY0fXvW3pynnCvygGMOaFOazvU2QD3",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1089.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (604.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "9DqWTlaMi0TOr9sn6l5aM6oeUEN2",
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
    "etag": "W/\"100-DZ2bW05JyN1wKQQYtSQz8giS0Qk\"",
    "date": "Tue, 27 May 2025 21:22:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8e60f9c0-1736-4e34-81d2-242b54faac5b",
    "userId": "9DqWTlaMi0TOr9sn6l5aM6oeUEN2",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:22:02.466Z",
    "updatedAt": "2025-05-27T21:22:02.466Z"
  }
}
```

**⏱️ Duration:** 604.9 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/8e60f9c0-1736-4e34-81d2-242b54faac5b (613.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDg5OSwidXNlcl9pZCI6InZRR0ZlWVZxVUlNRTd0SlZBUFNxdnZpNDBWMjMiLCJzdWIiOiJ2UUdGZVlWcVVJTUU3dEpWQVBTcXZ2aTQwVjIzIiwiaWF0IjoxNzQ4MzgwODk5LCJleHAiOjE3NDgzODQ0OTksImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDg5ODMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwODk4MzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.J8dr-qaBY7ks9IABM-VJjy23YrQ8ECTt-VBNKzJo-PIJiQcNbzO1haFWzlMHB9dso6hgKTaTdH-Q4bIPA1ytsGo1Y0c4AtUwxRu7tsVQGfYgpQEHlH-DRYQQYDtpZtXZSMPEultng3tRtzupCpNG3Zp606gfaAbjJjrob8z9cnPM9mXzuLYegxG92NQykhlhYn9dAg2V8LAoKjx9JnCt2fJfCzcy0gwr4r9EEHREESeHklJZu7X_0UDwM0TKHJT9nAu2-H7TjSCpik_ni5gFfsCB5eWSzNZ8TcRwLDREcocZqI5bo7UCL1lKlgtzl-el7afEC7dbcgWaD_nOzY5RlA"
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
    "date": "Tue, 27 May 2025 21:22:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can remove members."
  }
}
```

**⏱️ Duration:** 613.6 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (1034.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748380923146@example.com",
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
    "etag": "W/\"5db-t85QrgiVBQf8WR/yfOT3f0Ma0Pk\"",
    "date": "Tue, 27 May 2025 21:22:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "PQCy235PptYNWFb0rfgHdFJyM052",
      "email": "self-leave-user-1748380923146@example.com",
      "name": "Self Leave User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyMywidXNlcl9pZCI6IlBRQ3kyMzVQcHRZTldGYjByZmdIZEZKeU0wNTIiLCJzdWIiOiJQUUN5MjM1UHB0WU5XRmIwcmZnSGRGSnlNMDUyIiwiaWF0IjoxNzQ4MzgwOTIzLCJleHAiOjE3NDgzODQ1MjMsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA5MjMxNDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA5MjMxNDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.f1mawYqaE2ha7Bzhz2ZzWm-6dA3FNp-tbDTai3Uw_KUfzZkc0NJVDcFMmLhfJD-Wu1spHGQZ0vE_V6e_JxrfTCs1vVkT5NViN-LLlzA5KzA47LTuXBdAHxgAUY0Hvghll9uKnor6rrIzCl_evLgmnc8KnqJnfYpyLYaAA17rLViBbkMQP41uIKAd6f1nwsuWN1gpB0F_l9t71il3H3FjnS2Fm1O-9hFGWMxmnzkiu66pL_sLO3oRHCwvL2tY8c4j5wgUUjnoP9EJz5zcYXx2czKDzWfB4EEQ4G_CdicApWgSSFQLuL_kpkgiBBPRy0KOJlUANhqLxfhnAoOD4hfFHA",
      "refreshToken": "AMf-vBw8LvcVZS15AayekFFvT6LKZ0QWn1zBoz0L057uf0_d9cM6ww1pT9MfYOcivTtjfJvH8XxvaM2il6WU-lYK_Y_p4JHOF_joEQJuY0HfI-kDRfJkESUiDH0VkF2WIn19ZvfpzZQ79gu_-lhwmUhCGCgsV_VPvL3SCzTLnRkft_77uhzZ6ugIF57rdZ4VRL0mPo9A4jQYWXP8vgTNZQ93F6WJcliFnf2956oT5a5tPwixTJv7IB11nIXC5L9r-sU-xHzNvQtg",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1034.9 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (670.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748380923146@example.com",
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
    "etag": "W/\"5aa-ehX0GGKP9qNhLc/MtmEpEOOo/Jo\"",
    "date": "Tue, 27 May 2025 21:22:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "PQCy235PptYNWFb0rfgHdFJyM052",
      "email": "self-leave-user-1748380923146@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyNCwidXNlcl9pZCI6IlBRQ3kyMzVQcHRZTldGYjByZmdIZEZKeU0wNTIiLCJzdWIiOiJQUUN5MjM1UHB0WU5XRmIwcmZnSGRGSnlNMDUyIiwiaWF0IjoxNzQ4MzgwOTI0LCJleHAiOjE3NDgzODQ1MjQsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA5MjMxNDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA5MjMxNDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.sTJHeMqMDJOLg6YlZZla84Ma7Ha-gN0B8z_rpf_gLK9Q6cgexshLYj-h0Miy6fR1ZMRtqoAVepJPU5iS_j-hmaeHlD5wCUfp3tR4-rtMtaoV_8ByU-C7-z1HeBa9uSNnrX-rGE5R8yxhqN81pUiJQ0Lya022qCKBPXHreH_Y-o_4ybV5h-_qL47bgUAHDRxMhxrWo1lWLdTO2X4nvchWKqi8cqZ43IycHbkP3-GowPOUstM_rrDcbKnYK2mK1lVqhLZuWB9knstMnaYwsBNCggJWkkCQLJoRRC_IjoG8hPwOXC64NgldtzQS-9NfGncR2F9OuzzTaPQa-i8Z53c6kw",
      "refreshToken": "AMf-vBxYfy6sv-2RtuQvP8GY1rmP_rj9NbaxyHEPp2F5-AfVEDbNmx6QPyz4NmIofTKi6FgUK_i5ibMEp_MUV6FkQz2kV3Y5Gp0MW0t7uvpJttWGxtU6OmKdHZHoQHUmGbstOiwaN3Ejl_eB6j879g5M2azFM1ci-LpAm9T1bJ6mMQtgamK4qMrfK3OjrkDZXgllOxyIZwLSf8ieXW2qicSnxCzpI2YZ_hdOVnbQGj5Q2Xnvi85aTKG_XUPrSo3RJ3cidxx-5CHJ",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 670.0 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (500.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "PQCy235PptYNWFb0rfgHdFJyM052",
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
    "etag": "W/\"fd-G0+n4Iv2GzVTJ3+nyCQ73JXMINQ\"",
    "date": "Tue, 27 May 2025 21:22:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "49ac48bf-6903-491b-936c-c1f86a658199",
    "userId": "PQCy235PptYNWFb0rfgHdFJyM052",
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:22:05.284Z",
    "updatedAt": "2025-05-27T21:22:05.284Z"
  }
}
```

**⏱️ Duration:** 500.3 ms  

</details>


---

### Test: User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.12s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/49ac48bf-6903-491b-936c-c1f86a658199 (682.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyNCwidXNlcl9pZCI6IlBRQ3kyMzVQcHRZTldGYjByZmdIZEZKeU0wNTIiLCJzdWIiOiJQUUN5MjM1UHB0WU5XRmIwcmZnSGRGSnlNMDUyIiwiaWF0IjoxNzQ4MzgwOTI0LCJleHAiOjE3NDgzODQ1MjQsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA5MjMxNDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA5MjMxNDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.sTJHeMqMDJOLg6YlZZla84Ma7Ha-gN0B8z_rpf_gLK9Q6cgexshLYj-h0Miy6fR1ZMRtqoAVepJPU5iS_j-hmaeHlD5wCUfp3tR4-rtMtaoV_8ByU-C7-z1HeBa9uSNnrX-rGE5R8yxhqN81pUiJQ0Lya022qCKBPXHreH_Y-o_4ybV5h-_qL47bgUAHDRxMhxrWo1lWLdTO2X4nvchWKqi8cqZ43IycHbkP3-GowPOUstM_rrDcbKnYK2mK1lVqhLZuWB9knstMnaYwsBNCggJWkkCQLJoRRC_IjoG8hPwOXC64NgldtzQS-9NfGncR2F9OuzzTaPQa-i8Z53c6kw"
  }
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
    "date": "Tue, 27 May 2025 21:22:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "You have left the organization successfully"
  }
}
```

**⏱️ Duration:** 682.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/49ac48bf-6903-491b-936c-c1f86a658199 (434.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
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
    "date": "Tue, 27 May 2025 21:22:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 434.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1085.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748380926472@example.com",
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
    "etag": "W/\"5db-cDo5DVsqpwXkrsEjj9IRiMRPDIA\"",
    "date": "Tue, 27 May 2025 21:22:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "SOEl5mRT4jNuHlvOcGTYWlq2DoI2",
      "email": "other-org-admin-1748380926472@example.com",
      "name": "Other Org Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyNiwidXNlcl9pZCI6IlNPRWw1bVJUNGpOdUhsdk9jR1RZV2xxMkRvSTIiLCJzdWIiOiJTT0VsNW1SVDRqTnVIbHZPY0dUWVdscTJEb0kyIiwiaWF0IjoxNzQ4MzgwOTI2LCJleHAiOjE3NDgzODQ1MjYsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Kz1jb04LTcnxKK7MqQqJs1I1rjYWt4GLiQBOS6Am9H3Z4ddWfppwA14vjMN6qNMbnTy7BkayRPOW2VgDcKymCCGvq-eOp8kAMwENJAmAWdAjQT22ybc1DL_2dEcT8JuQ2HqJSfflx0csQtkIbts8_gxuT5-vd8sjzYkzUeR_mEKOSFw6MR4wfNd7LeZXwKswUAG6TQIzICf5E3CZ9XGbldmnpVL40uizD3hJImGfniz5Ky6--FuYH1OGp7fbxHURnLpukgAcLA2e1DUhXTzIys8J5Dll2cc1XiibYdHBTdIguJpUOvVDJ0r2IAnvDrSiCjQv82eGksl780Y3ovu5iA",
      "refreshToken": "AMf-vBwy4pxLPdqWwKJGRH6zt1kIrBiKjw1lkHr8YCyP4Tus8CaKgV8sIxqqEgDwcQimrRgk6b_XGZ9mxgUCquPgCSEQAaIFrg9lFjxez8HDdlORZA_akbZFWospbrii0fwLr52xx0LNCPVhFZlWI44P2phHsK4M4dEz8_A8kdddzvUd-jaHjB0byAikG9MmlCEA8uAmXpb_A1NY1Xa2cODvZV7rtQu8NWnTFdRVd4mzvNbn0VsxCTEzwfGYycdKd-9BBgunSFQl",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1085.3 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (367.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748380926472@example.com",
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
    "etag": "W/\"5aa-PXmFwD+JxS0pUKUtbetjqoBTDBY\"",
    "date": "Tue, 27 May 2025 21:22:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "SOEl5mRT4jNuHlvOcGTYWlq2DoI2",
      "email": "other-org-admin-1748380926472@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyNywidXNlcl9pZCI6IlNPRWw1bVJUNGpOdUhsdk9jR1RZV2xxMkRvSTIiLCJzdWIiOiJTT0VsNW1SVDRqTnVIbHZPY0dUWVdscTJEb0kyIiwiaWF0IjoxNzQ4MzgwOTI3LCJleHAiOjE3NDgzODQ1MjcsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.QuRWsIb9QPJD9aocoe5PS20NIZfGcNNh34l9UBhg74p_1w_9v-_0sLJg2QRYspp88pQgCXGj45UcWNKtZkWO6mrVIaajzqmvCmnBu5WkAyA6w8rjMIuL3OAELKEbCwC91yx_K2RYH9uJ4C33eejrpKuj_7y2me2H_E9kN54s4QO4dhnMR0tN1la07B-JTECFGP8E6LMGIQjM9N00QYh-dMUQtbeEg4MMD6cztca3IywwJ4cef0osovj35dD4Sb6zNoLYb7UDChbIHoD6m7PrqA8GOtFkLjHM2ET6HJVR9Lnmtzs6oKp8imrZgjJrtl_glf_G_xaqykC32W5LgdcJHA",
      "refreshToken": "AMf-vBz9hpANBlfYd0aV_XYkGxNcwDm_CJjrjMAqnUhJKzftGSdFrnH4h_Yxdo-q3XJk7g2mipEQNa8Odh8626_vNy9npa_6HSfDn5GHJ6N2ev1vig5ykjpn5qKLI9W6BeQy3MrnEWitiJg2MLZmJFHAOKXthh7DzlOtD55zis7xc7wOwaxdVxmWRyh22ROWkuCKHCRcgovzwS9uSqlVwaX18ONOOctn8gkoyDfrs8lS9G6EITRh1-kYoqiS8MdiTVDc89Y2IV2D",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 367.9 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (743.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyNywidXNlcl9pZCI6IlNPRWw1bVJUNGpOdUhsdk9jR1RZV2xxMkRvSTIiLCJzdWIiOiJTT0VsNW1SVDRqTnVIbHZPY0dUWVdscTJEb0kyIiwiaWF0IjoxNzQ4MzgwOTI3LCJleHAiOjE3NDgzODQ1MjcsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.QuRWsIb9QPJD9aocoe5PS20NIZfGcNNh34l9UBhg74p_1w_9v-_0sLJg2QRYspp88pQgCXGj45UcWNKtZkWO6mrVIaajzqmvCmnBu5WkAyA6w8rjMIuL3OAELKEbCwC91yx_K2RYH9uJ4C33eejrpKuj_7y2me2H_E9kN54s4QO4dhnMR0tN1la07B-JTECFGP8E6LMGIQjM9N00QYh-dMUQtbeEg4MMD6cztca3IywwJ4cef0osovj35dD4Sb6zNoLYb7UDChbIHoD6m7PrqA8GOtFkLjHM2ET6HJVR9Lnmtzs6oKp8imrZgjJrtl_glf_G_xaqykC32W5LgdcJHA"
  },
  "data": {
    "name": "Other Org 1748380927926",
    "description": "Other organization for cross-access test",
    "email": "other-org-1748380927926@example.com"
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
    "content-length": "360",
    "etag": "W/\"168-iRum59GibBtWz/h/RSyyuS0RUvk\"",
    "date": "Tue, 27 May 2025 21:22:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5c394143-5275-4a61-8edf-da749f14a9b7",
    "name": "Other Org 1748380927926",
    "description": "Other organization for cross-access test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "other-org-1748380927926@example.com",
    "status": "active",
    "createdBy": "SOEl5mRT4jNuHlvOcGTYWlq2DoI2",
    "createdAt": "2025-05-27T21:22:08.544Z",
    "updatedAt": "2025-05-27T21:22:08.544Z"
  }
}
```

**⏱️ Duration:** 743.0 ms  

</details>


---

### Test: Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5833dc3f-014c-4931-bfcb-142b0180ae62 (481.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyNywidXNlcl9pZCI6IlNPRWw1bVJUNGpOdUhsdk9jR1RZV2xxMkRvSTIiLCJzdWIiOiJTT0VsNW1SVDRqTnVIbHZPY0dUWVdscTJEb0kyIiwiaWF0IjoxNzQ4MzgwOTI3LCJleHAiOjE3NDgzODQ1MjcsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.QuRWsIb9QPJD9aocoe5PS20NIZfGcNNh34l9UBhg74p_1w_9v-_0sLJg2QRYspp88pQgCXGj45UcWNKtZkWO6mrVIaajzqmvCmnBu5WkAyA6w8rjMIuL3OAELKEbCwC91yx_K2RYH9uJ4C33eejrpKuj_7y2me2H_E9kN54s4QO4dhnMR0tN1la07B-JTECFGP8E6LMGIQjM9N00QYh-dMUQtbeEg4MMD6cztca3IywwJ4cef0osovj35dD4Sb6zNoLYb7UDChbIHoD6m7PrqA8GOtFkLjHM2ET6HJVR9Lnmtzs6oKp8imrZgjJrtl_glf_G_xaqykC32W5LgdcJHA"
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
    "date": "Tue, 27 May 2025 21:22:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "No tienes permisos para ver todas las membresías de la organización"
  }
}
```

**⏱️ Duration:** 481.8 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (866.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1748380929153@example.com",
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
    "etag": "W/\"5e4-QBqRe/Xs/iKoTeavil3HkjgKWOQ\"",
    "date": "Tue, 27 May 2025 21:22:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "XMSJhdQIxfd5Ri2bpQdHhjMH0CG3",
      "email": "cross-org-invite-1748380929153@example.com",
      "name": "Cross Org Invite User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyOSwidXNlcl9pZCI6IlhNU0poZFFJeGZkNVJpMmJwUWRIaGpNSDBDRzMiLCJzdWIiOiJYTVNKaGRRSXhmZDVSaTJicFFkSGhqTUgwQ0czIiwiaWF0IjoxNzQ4MzgwOTI5LCJleHAiOjE3NDgzODQ1MjksImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ4MzgwOTI5MTUzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0ODM4MDkyOTE1M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.oCGXsFol3tdjliaFmRt1pm-nn2L7bP6Z9wMDE9mzvSk-O1XNqzA_UrrA_daDIMBCm3I5p89qa7k40v871dOd1CVaPPIkGzpPXViXhc--h5eD6w4J9I6WRe4ucPmsreXmQRWJYACwMl58qlNtYGtoysQkGPEdfmVmh84BCO0ecENsoolUCU1gCiRhKxibyJ7o0_7lnPQj61O66FNltQMv5frqXW021tkODZsom-4ySUB6_GHUz1MJ2hua5k2QLDDtxFEcZhvtJAWtGiQO6gG7u-haej4ENzy15Dtb05al3qq5wcxERPaPkr5gvXbc3MMQGrqc-tpWReaHWBICiacEGQ",
      "refreshToken": "AMf-vBzAAvrlliE0-pwHI0iMNQzhMVsrWQhs2frJwRE1gyHoYuB4wShiJaeM9BhSEWoWp3IUxx7XYgmSatnaiU8n16X0NeHPtSlaBSO7JQ70QCkug02i-7ODSaqhRhyK7PWcgExSVpALBf6ftVsAhY5rIzzN93p6hUAYu9lQq8Xhf1JKWMDQsISLI4-eODoIHaz-Nk4k1bwqFcRkGP-aKQJ_2xb_OS1vj4SuuYXCC3GnBtS53TLGUUhA3bdcxx7SCb7ablFwga4f",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 866.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (541.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDkyNywidXNlcl9pZCI6IlNPRWw1bVJUNGpOdUhsdk9jR1RZV2xxMkRvSTIiLCJzdWIiOiJTT0VsNW1SVDRqTnVIbHZPY0dUWVdscTJEb0kyIiwiaWF0IjoxNzQ4MzgwOTI3LCJleHAiOjE3NDgzODQ1MjcsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA5MjY0NzJAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.QuRWsIb9QPJD9aocoe5PS20NIZfGcNNh34l9UBhg74p_1w_9v-_0sLJg2QRYspp88pQgCXGj45UcWNKtZkWO6mrVIaajzqmvCmnBu5WkAyA6w8rjMIuL3OAELKEbCwC91yx_K2RYH9uJ4C33eejrpKuj_7y2me2H_E9kN54s4QO4dhnMR0tN1la07B-JTECFGP8E6LMGIQjM9N00QYh-dMUQtbeEg4MMD6cztca3IywwJ4cef0osovj35dD4Sb6zNoLYb7UDChbIHoD6m7PrqA8GOtFkLjHM2ET6HJVR9Lnmtzs6oKp8imrZgjJrtl_glf_G_xaqykC32W5LgdcJHA"
  },
  "data": {
    "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
    "userId": "XMSJhdQIxfd5Ri2bpQdHhjMH0CG3",
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
    "date": "Tue, 27 May 2025 21:22:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 541.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5833dc3f-014c-4931-bfcb-142b0180ae62 (569.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "etag": "W/\"6ff-eqjtjsxAn+EMueTf3Yu+a/Csqgs\"",
    "date": "Tue, 27 May 2025 21:22:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "917dd7d7-faca-4ebf-8a2e-3ea9f1d9bb49",
      "userId": "gr7SQ0lOjwZbR2rLxdkvCXLhftA3",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-05-27T21:21:46.903Z",
      "updatedAt": "2025-05-27T21:21:46.903Z"
    },
    {
      "id": "3037948c-14d6-4815-b6eb-309bc36af2fd",
      "userId": "OmXsWnAAzZbp6srhqbGv1GhgzYg2",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:21:48.468Z",
      "updatedAt": "2025-05-27T21:21:48.468Z"
    },
    {
      "id": "f35b400b-eeb1-4dbb-8631-4007f7fb1470",
      "userId": "FW25V3dysUMR0D5gEwadXSkBMb42",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-05-27T21:21:49.981Z",
      "updatedAt": "2025-05-27T21:21:49.981Z"
    },
    {
      "id": "39eb1c64-3eb8-48b3-ab73-7c8231f68f21",
      "userId": "52ccl9xv27OG5VQk7mrp8tXgc503",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:21:51.397Z",
      "updatedAt": "2025-05-27T21:21:51.397Z"
    },
    {
      "id": "27115ce7-887c-4683-a8ab-6a6e662af31a",
      "userId": "qAWl87q9EkPbpcCTmPMAIz0VTE42",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-05-27T21:21:53.046Z",
      "updatedAt": "2025-05-27T21:21:53.046Z"
    },
    {
      "id": "f55698ff-aa26-4bc6-8bba-7b7084ab9768",
      "userId": "hqS3QgC7JUdp7FOCzAadVPAcPNm2",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:21:42.867Z",
      "updatedAt": "2025-05-27T21:21:57.142Z"
    },
    {
      "id": "8e60f9c0-1736-4e34-81d2-242b54faac5b",
      "userId": "9DqWTlaMi0TOr9sn6l5aM6oeUEN2",
      "organizationId": "5833dc3f-014c-4931-bfcb-142b0180ae62",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:22:02.466Z",
      "updatedAt": "2025-05-27T21:22:02.466Z"
    }
  ]
}
```

**⏱️ Duration:** 569.0 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=5c394143-5275-4a61-8edf-da749f14a9b7 (481.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 481.9 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/5c394143-5275-4a61-8edf-da749f14a9b7 (1187.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1187.1 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/f55698ff-aa26-4bc6-8bba-7b7084ab9768 (703.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 703.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/917dd7d7-faca-4ebf-8a2e-3ea9f1d9bb49 (498.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 498.1 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/3037948c-14d6-4815-b6eb-309bc36af2fd (503.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 503.0 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/f35b400b-eeb1-4dbb-8631-4007f7fb1470 (512.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 512.3 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/39eb1c64-3eb8-48b3-ab73-7c8231f68f21 (510.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 510.2 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/27115ce7-887c-4683-a8ab-6a6e662af31a (509.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 509.6 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/8e60f9c0-1736-4e34-81d2-242b54faac5b (512.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 512.2 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/5833dc3f-014c-4931-bfcb-142b0180ae62 (922.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwODk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA4OTcsImV4cCI6MTc0ODM4NDQ5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IbKKYosfBSabbsFYRBIY10fe9UzUUn7ErESc2PkQO53ZPwjZMZFf69AwfOyc9VdtFvslx9k3xWrraiVrIGcQ3YenYZtVMzuFT4eNJf6d9vm0b9KaKS0nd2y7ox1x24p6xwoQIFXx8wQ4gvq71SQiOfdGWA28Ho3Yf9QC7ACfOSJW3YPqbhClYnXezj6zyx2-aFHdzCFKn2QLvA1rcEFeJMgFvWKKP0BKitTfWoQzn6CkGubgepAbe_RI7uUsE1agBSfojx2BnjAY3rso5gIkI1Ngvrmg_kFJnj4Dk8Yk-lyiVk0Tw0ryQP9K2MS_eeeibktcb27e12_hR1Dws0Ag7w"
  }
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
    "date": "Tue, 27 May 2025 21:22:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 922.5 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (371.5ms)</summary>

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
    "etag": "W/\"640-jjM8aXrSAdqdcNTPeCrElAZIxZg\"",
    "date": "Tue, 27 May 2025 21:22:17 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTM3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5MzcsImV4cCI6MTc0ODM4NDUzNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pHDg66-r5_8g8U16w1YOa86O_taKgRMbe6T0FsXj-0m3bXCDt9YTOcNSzluXjxOW4tnceSfuBKNBfPwTUoyY2TKYwm-DYcSwXRMevEQFeIf7cOiaGHwS4DskLIJilmz2fJOQ6PSECaP7J1_4PsKf9nMil8owLno7O8QBvoUFUB-lOrotZ_pcSvqMsxs81_iAH46f7mFjSeSWnfllwTzU55v92ai9HYuEzW7YM3eVgQQ4YhM0GOzDuAy3Jl7eB90rMxUEV1s__7I9c8YRlixcxGKiSDbt1XscGS6RMozHzjIjvLKQifwd7FhcrzBtuOEzCpooL_rT8juorkyH23kuOg",
      "refreshToken": "AMf-vBxSQP3Wc2Fxqld9cT-3IulYwoAEe0Myzjg_Qsf916tRoh_EsJp7EuGReuhSkRZrEiPQQWCwlJIq0qs75GITt4d2CO0Xbw20hTtljUI6-Z4RBbXyiGuxJREULOl3T-JdWChiVnOXsoi55YKQ5U0jAuy3zBVz9lazv9J5v2zntNKrmdBRd3x1H0DJLuaI2356P67AWLn1AwnreX6imWprLP_D-hwTlF5gTVhEfasQZbzbfMPh2KZ67MtVn6i0DbC3x4Bg3lhl",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 371.5 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/vQGFeYVqUIME7tJVAPSqvvi40V23 (1626.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTM3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5MzcsImV4cCI6MTc0ODM4NDUzNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.pHDg66-r5_8g8U16w1YOa86O_taKgRMbe6T0FsXj-0m3bXCDt9YTOcNSzluXjxOW4tnceSfuBKNBfPwTUoyY2TKYwm-DYcSwXRMevEQFeIf7cOiaGHwS4DskLIJilmz2fJOQ6PSECaP7J1_4PsKf9nMil8owLno7O8QBvoUFUB-lOrotZ_pcSvqMsxs81_iAH46f7mFjSeSWnfllwTzU55v92ai9HYuEzW7YM3eVgQQ4YhM0GOzDuAy3Jl7eB90rMxUEV1s__7I9c8YRlixcxGKiSDbt1XscGS6RMozHzjIjvLKQifwd7FhcrzBtuOEzCpooL_rT8juorkyH23kuOg"
  }
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
    "date": "Tue, 27 May 2025 21:22:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1626.2 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (319.5ms)</summary>

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
    "etag": "W/\"640-BaBv4xsaX16GCqZxuvPsnY271Es\"",
    "date": "Tue, 27 May 2025 21:22:19 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5MzksImV4cCI6MTc0ODM4NDUzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZyOD4VidYKHcijiyKVDfxAtv_rufHFE8beplkkAc8Y_HgLCs9RLxnnn59m2Vuly-AYIEgXksS1w5w_gxtJcfNp432ntYgVefM3qYf6HO52c3YCI5C_YyAxAAg21Ev7V5sl9jqg4zNT2gZHJ3rbelcgi6s115WQB-tZNZNpEW0YOPQdu1kLRsxmC0t7FYjN0oIgGaYTIhWjsT5KSsCxNOXhMTboKjdw969mNOrUAko-ux1rrKjLopCrkPJFw_DHULoDxkplK1oSSs48wQbO5Z56Nq-fWoTQlwMc73dcJ8SZIX1FvvX1-GeybvNCQOGgfoe3DmXRER_kiKEibmSUrSqw",
      "refreshToken": "AMf-vBxruBheDmE13FvUGb5C1OTSl-935r1HZ82nhMVmzpe6rAF2If0XQfB1C17XZ30dUDjK5jcC5wa0Lyy4nsXypwQLMvHwYtpf11D8BSYzQSguCyxHaMdQGQaMItnxWnMphvQX81Hnjr9lTyBGyWpjxVTGwycemzktAlj_RH_e_1rGFe6Iu8Il5o2K3i6GI0E53K1IxGN6EAjw_-Xe6HaimFmhlPUQJC8FsqxJWxeVz8_dkiklHR5gcL3OFJV9cGQ5rlvLONjb",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 319.5 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/hqS3QgC7JUdp7FOCzAadVPAcPNm2 (1144.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5MzksImV4cCI6MTc0ODM4NDUzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZyOD4VidYKHcijiyKVDfxAtv_rufHFE8beplkkAc8Y_HgLCs9RLxnnn59m2Vuly-AYIEgXksS1w5w_gxtJcfNp432ntYgVefM3qYf6HO52c3YCI5C_YyAxAAg21Ev7V5sl9jqg4zNT2gZHJ3rbelcgi6s115WQB-tZNZNpEW0YOPQdu1kLRsxmC0t7FYjN0oIgGaYTIhWjsT5KSsCxNOXhMTboKjdw969mNOrUAko-ux1rrKjLopCrkPJFw_DHULoDxkplK1oSSs48wQbO5Z56Nq-fWoTQlwMc73dcJ8SZIX1FvvX1-GeybvNCQOGgfoe3DmXRER_kiKEibmSUrSqw"
  }
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
    "date": "Tue, 27 May 2025 21:22:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1144.6 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (283.5ms)</summary>

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
    "etag": "W/\"640-wDB4qTCmGFB9YGa7a3Vmjuy0//4\"",
    "date": "Tue, 27 May 2025 21:22:21 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDEsImV4cCI6MTc0ODM4NDU0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CCQHrngTpjfA23Alav5jQktFJ7HAkbPJrqLg5pQlzLqFUyfpY5UzjzzNh5ySfCx9NkoWolL1sM3O5LidExtzrNOKPoIWFNf8SUgO6TU-fWaeL1WL8G4O7ImwnygsWJLxgvrvARCfd4IZmkNYRusoNhAGD6diP5I3_VQ31cliScG6nSFW8Zu4K74yyNCdLWKDN85b43H7FGgwA40pgd9I_h-03X5yzCGMDJbe76aO2dR-lbfciraag_ZJhEwswYOO_qtvpTRpgrAh-BzqEH9T9sUsHX82iWcIAj7bUAfBkFw2a-d8rAKebFqNLXYJg-eFbhMRLShbYDf5WqSojT1YRA",
      "refreshToken": "AMf-vBwkpbiQv_ljpKmaP5ekN3OwRfq7ILULnC-CX65JJilaV6VHV7pIuLuuFgTaR63BXUrdl5AHwZT_RvWotl1_yqAWFwT96fAJfI4OZ-zvI-OXQAhwoO8HSSm3G5E0UzMKJNa3aQ3Q9errqXmxvslrYJLSLOjYmtNmGuP214eerzBAz485V3qPOCaNc_4xPDzMsKRU12TXmel4Jfe-ks0V7bNkWFQ0VOxiHh7B4dAP3KpTvWIBD0hRlhjRudXdWzvz7ZUyBNPu",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 283.5 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/vzPaPaogSmfnyh561qhVT7QZa1p1 (1220.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDEsImV4cCI6MTc0ODM4NDU0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CCQHrngTpjfA23Alav5jQktFJ7HAkbPJrqLg5pQlzLqFUyfpY5UzjzzNh5ySfCx9NkoWolL1sM3O5LidExtzrNOKPoIWFNf8SUgO6TU-fWaeL1WL8G4O7ImwnygsWJLxgvrvARCfd4IZmkNYRusoNhAGD6diP5I3_VQ31cliScG6nSFW8Zu4K74yyNCdLWKDN85b43H7FGgwA40pgd9I_h-03X5yzCGMDJbe76aO2dR-lbfciraag_ZJhEwswYOO_qtvpTRpgrAh-BzqEH9T9sUsHX82iWcIAj7bUAfBkFw2a-d8rAKebFqNLXYJg-eFbhMRLShbYDf5WqSojT1YRA"
  }
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
    "date": "Tue, 27 May 2025 21:22:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1220.2 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (319.1ms)</summary>

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
    "etag": "W/\"640-okcbJZwgfpP2jK6zF2XQFO79fV4\"",
    "date": "Tue, 27 May 2025 21:22:22 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDIsImV4cCI6MTc0ODM4NDU0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Cfn2VkNPZ0VvpYBjBbnhMGrZDMsxgKieg-HJRiSmEUL3BtEXTzwHNFcw8hCOjabbJhnVpPjtLgOsvQKUg_pqzy8p7WfJVWLk_F0H4a9s6M4ZNExI6WBM0glZK-BdrtMx1MsIinQKoULGzip0qVJqqwfiqfSoTfYIzNUXIT655nafdxd2hrovg2YXyfJ7XrDbxbU2vm-0OOR5wbCreI9m8lREpSlZw9Vlj5X-wMCS2XMO5051yQgliSZ3xLE6fblufVx4sIU3ZDfIhgIO2_MWuRSQ6JV3DZafjX7CX3QmwUytGPwgWpMunJXqdXOY0Y0toWwGYSNStkUygKUjGoDbPA",
      "refreshToken": "AMf-vBydzT-zCjfjrXdhVRg3JCNu6A0w3-gevtna3oRnOuP0Td_tzmdHK6R6pWLu-hQTmvaM18Sqcnu6kXWmKa5sKW6i4V7syReztntg5DoT_KoQsmgpVZDLGzQ4nd-SlOUjYQKHkiydxboTC_AO4G-EbKlruRBQWnRCHzsnzW1zpSjshaYWFHOjYoTp1x8hPOZObqPTfN5OyP_BwM98-JnaOoaP0NAp7bIlNjIV03NEsyFar4GWcvUdXhpUfyla29W9-3Djy1PA",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 319.1 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/gr7SQ0lOjwZbR2rLxdkvCXLhftA3 (1172.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDIsImV4cCI6MTc0ODM4NDU0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Cfn2VkNPZ0VvpYBjBbnhMGrZDMsxgKieg-HJRiSmEUL3BtEXTzwHNFcw8hCOjabbJhnVpPjtLgOsvQKUg_pqzy8p7WfJVWLk_F0H4a9s6M4ZNExI6WBM0glZK-BdrtMx1MsIinQKoULGzip0qVJqqwfiqfSoTfYIzNUXIT655nafdxd2hrovg2YXyfJ7XrDbxbU2vm-0OOR5wbCreI9m8lREpSlZw9Vlj5X-wMCS2XMO5051yQgliSZ3xLE6fblufVx4sIU3ZDfIhgIO2_MWuRSQ6JV3DZafjX7CX3QmwUytGPwgWpMunJXqdXOY0Y0toWwGYSNStkUygKUjGoDbPA"
  }
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
    "date": "Tue, 27 May 2025 21:22:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1172.0 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (521.3ms)</summary>

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
    "etag": "W/\"640-MQNN9bipxagAu1jT8mI+oVFCrhM\"",
    "date": "Tue, 27 May 2025 21:22:24 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDQsImV4cCI6MTc0ODM4NDU0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qaRJQjj1doooiHA11L7vgYlA8CNp0xsv0bOLiyK1g_7zCPiNQmx9KxKB09AoQ3B5cxrsFHICDzqoIxhMIxt23DMS06Le6rP-OBXQV7p7Ea99HKZltdakUt_EbKR_lZbu9rmz6ojO4qEuD7Ilnjt0xoGALSM_NCqbwVKDXrQykBgHFDcgStV7ekMayMIoEWKF9fHiRE6rtCMm4myMttguE0EYvudHiCNmIFI53HkDuTnE1milvy9Vpn3YHojZAr7g3xJbFiA-nLjzs39oNqgkULo15ae_psAn_J6N4py6KVdA5Gjckn1RiSrdsLxLFh0pIc2xTacToFgR6r2YmqZymQ",
      "refreshToken": "AMf-vBxNAcwV8dCR2_KKSILp335M7PYW3-8DToJP0bmOGbONjwHgSekvwRyttgV_AwX44HoknrxVXPcADcmqTb-eihBmBrbXWlhPaxSwn0iDVJ1XUSdy6r_aMTW5CuHFi_ari9kk-T2-DpoKp3DK6w6mMKX6MndzBsGR2LxZKVSqKitoG3a-b4ByZCiLiyJsXhuj2A51cT0R8kNMVwl6RAGXDalmEX5_AYu743nwotJP-KA5ZWzvHdwQcW5BQ5L2-6fkIfu2SMuv",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 521.3 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/OmXsWnAAzZbp6srhqbGv1GhgzYg2 (1319.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDQsImV4cCI6MTc0ODM4NDU0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qaRJQjj1doooiHA11L7vgYlA8CNp0xsv0bOLiyK1g_7zCPiNQmx9KxKB09AoQ3B5cxrsFHICDzqoIxhMIxt23DMS06Le6rP-OBXQV7p7Ea99HKZltdakUt_EbKR_lZbu9rmz6ojO4qEuD7Ilnjt0xoGALSM_NCqbwVKDXrQykBgHFDcgStV7ekMayMIoEWKF9fHiRE6rtCMm4myMttguE0EYvudHiCNmIFI53HkDuTnE1milvy9Vpn3YHojZAr7g3xJbFiA-nLjzs39oNqgkULo15ae_psAn_J6N4py6KVdA5Gjckn1RiSrdsLxLFh0pIc2xTacToFgR6r2YmqZymQ"
  }
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
    "date": "Tue, 27 May 2025 21:22:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1319.9 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (362.4ms)</summary>

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
    "etag": "W/\"640-WMv9M2bYAUDqxrgiupyIzqpebPE\"",
    "date": "Tue, 27 May 2025 21:22:26 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDUsImV4cCI6MTc0ODM4NDU0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gLcteO5pAjBsc7jtOWN7cBu9TkB4K_7CnMYej7WapWjld2TiHFMs7p4DJWBRcpVKD7M_fCeXRYrMDNc7pt4z7kmawg1ieaKVbwAKAZqp4oo5i55UBAQYKJ72ni78FB5DiJ6W0kckJ1o8EJ61r-vee4qFoPnWaPBwh9wpdo2gzHYGVBDdNChq-dRc1Xq30c5abja1jN_AsHg9SbdijpAGiw0vrehCS6Gwq2ptluKYrAo48VEIhE3XscCiwCwQZ53kpt3cvoco4A45TKh6PRGOj71KfR-eUqOIVzIoyJ1fKxbO_bygJp3f7CqSsxiaN63yFAybK6m2DInZYgARMONi7Q",
      "refreshToken": "AMf-vBy-fN2xj8YQZ5_AvX_clv5mmkeEQtQ0CfHFQQ8pbIPT1F7OBGybcuwclsplR6eLv0cLgJNjUfnrsvO6GgYU6juY0arMr04nlZknuv3WpvYGl_VOzOstDubhjuAl2Q4nur8ikP758LUcDuM5ojKQDuDoC8e8IniJ2v_8McC1UjXDgG6j6ApobxvdXbyKUUWDVPDnBl0CQ0zE_j-TTVUHcbU3ZLpWfZiQmPxrA0N9NgRaMUSJu9Kg9BloKpOFQKJncbXjTF7W",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 362.4 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/FW25V3dysUMR0D5gEwadXSkBMb42 (1183.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDUsImV4cCI6MTc0ODM4NDU0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gLcteO5pAjBsc7jtOWN7cBu9TkB4K_7CnMYej7WapWjld2TiHFMs7p4DJWBRcpVKD7M_fCeXRYrMDNc7pt4z7kmawg1ieaKVbwAKAZqp4oo5i55UBAQYKJ72ni78FB5DiJ6W0kckJ1o8EJ61r-vee4qFoPnWaPBwh9wpdo2gzHYGVBDdNChq-dRc1Xq30c5abja1jN_AsHg9SbdijpAGiw0vrehCS6Gwq2ptluKYrAo48VEIhE3XscCiwCwQZ53kpt3cvoco4A45TKh6PRGOj71KfR-eUqOIVzIoyJ1fKxbO_bygJp3f7CqSsxiaN63yFAybK6m2DInZYgARMONi7Q"
  }
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
    "date": "Tue, 27 May 2025 21:22:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1183.2 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (351.1ms)</summary>

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
    "etag": "W/\"640-YVE01rspqXRDaFaCOETtFuA6itI\"",
    "date": "Tue, 27 May 2025 21:22:27 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDcsImV4cCI6MTc0ODM4NDU0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MGstY4ztNqkiWqcU1Z4PA3o7PCrzzcO7YmGyZd-TlLDyBk5HJMr6isVa_tjkd9Rsa7FkbjElIxV__J_x_aISM3rFt523ItLjzjT6g2ozsaXJVpzFd7Jwt-gVpzjhq7BodJlsJeLgsx85mYqncf89Y9Wc0ObQwHfqctneEo_Jte5oETc6dONbgMVTIKr0KjEkDrvlPo3IYJ-u3_yTbWcZ_Om33IswMHAafnOzfQER05mb15HXQ1cNawGZ1jLUCl4Q9cgJaKPR8Fb2IfLku7YSyT0VQeT6GiM6VgHJFGPfIsLf1UoFvyLb8Vvzy3aCS6o-K6qN4lpFCXR43sXyXAcDfw",
      "refreshToken": "AMf-vBwyTvTgtuOb9VZY6g5dwz5k1DrajFaBvboLnpyuiBFcsTZjh82jj__q6M1mRnL-yjPKf8G2TkCSMKbUsb_OK7fFrnsv5mEQMWbSXSgfJZYOelDQGnT-CqXReO0XM21tNw7RRQCA3r1hf7Om4h5olTGk7if1LuXeNJidkqxuq8-LRst_LJMnuQ9JJEjF9zdnKM-3q52E8Vs3ab9A5jwIkBCONf4PJQcT2qN6SPwhBFd6Ud3mkqS-UTZUGCaoIC1VWRhx4Blv",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 351.1 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/52ccl9xv27OG5VQk7mrp8tXgc503 (1274.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDcsImV4cCI6MTc0ODM4NDU0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MGstY4ztNqkiWqcU1Z4PA3o7PCrzzcO7YmGyZd-TlLDyBk5HJMr6isVa_tjkd9Rsa7FkbjElIxV__J_x_aISM3rFt523ItLjzjT6g2ozsaXJVpzFd7Jwt-gVpzjhq7BodJlsJeLgsx85mYqncf89Y9Wc0ObQwHfqctneEo_Jte5oETc6dONbgMVTIKr0KjEkDrvlPo3IYJ-u3_yTbWcZ_Om33IswMHAafnOzfQER05mb15HXQ1cNawGZ1jLUCl4Q9cgJaKPR8Fb2IfLku7YSyT0VQeT6GiM6VgHJFGPfIsLf1UoFvyLb8Vvzy3aCS6o-K6qN4lpFCXR43sXyXAcDfw"
  }
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
    "date": "Tue, 27 May 2025 21:22:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1274.1 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (270.9ms)</summary>

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
    "etag": "W/\"640-/Eyma/wfvd7iCSPQxWQ7jjbXZrs\"",
    "date": "Tue, 27 May 2025 21:22:29 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDksImV4cCI6MTc0ODM4NDU0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YrExBdENg8Q9pCLj9jXdGkF1ipz15b3krmV3BEr_EAT61vidh3VRXh1IyQ7JumTjzmIjOUv0nQh_zbBCi88TA1MZnKH4j4u80B_ayVPB-aWFR_G_jYqwW7Af8pTFTyFafn-DCfmdlbY60_nSBeWINYOsFB2V_5aWqTKMIgZyWqnoYMX1lxsN40xqugReQXokpba7Zkyg5oLxMfEyYgryqH6xjKH1PApiC3fJnDBa7S2HHJCRlQx6haumaSf4J01nkQq-MXydcU9w06VAZ9otsuDWkFmEDPmM_Vh1TrL-hhRiY4WlZkUWy7UhDUTGrwiQ_z2czbv3MWfOBREVgGFvgA",
      "refreshToken": "AMf-vBx4yQf2XkidFMc1m-JOibDCV5TdKBlB3whqWKDVfZN3Tn4OCLmWs1iot8MRhSvTPFK46HZDh1fUoZT7A_bCCNAi8B30T_RoxVJWn1peXGpNCfOwgQ_-O1_9GYiQGGNPVtapKDkWK2v7_Ll-HinidyycNeU9H8q5536Xgc3zB_K6ci6dWkoMV8IkavE9JvsLfgwkILS2HdgH79M9sTdaO52T8La9PxFLudk2RO-ZFZKc-MSS2qqmWPUI1sDxkis_MP0n86Yb",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 270.9 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/qAWl87q9EkPbpcCTmPMAIz0VTE42 (1166.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NDksImV4cCI6MTc0ODM4NDU0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YrExBdENg8Q9pCLj9jXdGkF1ipz15b3krmV3BEr_EAT61vidh3VRXh1IyQ7JumTjzmIjOUv0nQh_zbBCi88TA1MZnKH4j4u80B_ayVPB-aWFR_G_jYqwW7Af8pTFTyFafn-DCfmdlbY60_nSBeWINYOsFB2V_5aWqTKMIgZyWqnoYMX1lxsN40xqugReQXokpba7Zkyg5oLxMfEyYgryqH6xjKH1PApiC3fJnDBa7S2HHJCRlQx6haumaSf4J01nkQq-MXydcU9w06VAZ9otsuDWkFmEDPmM_Vh1TrL-hhRiY4WlZkUWy7UhDUTGrwiQ_z2czbv3MWfOBREVgGFvgA"
  }
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
    "date": "Tue, 27 May 2025 21:22:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1166.3 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (267.2ms)</summary>

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
    "etag": "W/\"640-7g9EydVQ7MfLgafO3O+pNhfPo6A\"",
    "date": "Tue, 27 May 2025 21:22:30 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTAsImV4cCI6MTc0ODM4NDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GC5-8clPomdWqItJNkykgXEcu0nqgy93ImedOa0heig006vnYNt0MzHvmRaDLkS7xADMj7ayEYINea2XjAf9CnemA4SSQocUE92ULh2YBC1ukKm3xKI4P-bMGBSAJaWFcgNtlo21h275y-g96uqRGPG5V7pZQetKQQWmZPrLuKDPy6rdNFze5po1LbZN-TBiLajjdSj7dplCBS0JZ8gZqDxSb-mpAdCibFz_7vA0jJFcTb03lbJgjbe8GvGLGdlW-USfFdBMxCzj97TAa7CUvxHhxzwc4c7edG_RvXNY0XaIcmobhFlbw3OtZvIJqgXa8mo6B4VeGhb69J7lM-i68A",
      "refreshToken": "AMf-vBx8pCwdSpfNRAFAWWhN4go4-4JrjKpPj_Pt67p0nbh2374KbugwgmVg6jWmOec1f1qjrz2Nrhvb0zfPA1ALg-ABQNk0HGnXLYu68u966Riu5qoLBmnwbh1qikm6J-W3gw3cWcev0mpivLOT73QCh9SupEYwDr4D5hMLeSKBbWZPflTaviRNFVnSK3Ki0e2K0be--rr5qW6teSIAaLyFqXrsrMF7zdjdAinMkmusZrUBuxkp3VjRKgbCZAXKHvwhuoJoBkRL",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 267.2 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/phLPTIG8gPT01xerbtJ22RztNjK2 (1138.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTAsImV4cCI6MTc0ODM4NDU1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GC5-8clPomdWqItJNkykgXEcu0nqgy93ImedOa0heig006vnYNt0MzHvmRaDLkS7xADMj7ayEYINea2XjAf9CnemA4SSQocUE92ULh2YBC1ukKm3xKI4P-bMGBSAJaWFcgNtlo21h275y-g96uqRGPG5V7pZQetKQQWmZPrLuKDPy6rdNFze5po1LbZN-TBiLajjdSj7dplCBS0JZ8gZqDxSb-mpAdCibFz_7vA0jJFcTb03lbJgjbe8GvGLGdlW-USfFdBMxCzj97TAa7CUvxHhxzwc4c7edG_RvXNY0XaIcmobhFlbw3OtZvIJqgXa8mo6B4VeGhb69J7lM-i68A"
  }
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
    "date": "Tue, 27 May 2025 21:22:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1138.1 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (282.6ms)</summary>

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
    "etag": "W/\"640-H1y6rEVM1lBLLiYFs+jEVu6Q+Ow\"",
    "date": "Tue, 27 May 2025 21:22:32 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTEsImV4cCI6MTc0ODM4NDU1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qoVcm-Ae2KnUjLJSvsyTbfm7mJTDiEeippEhDbxTLipBMIMQmVqHAs7WSiOKGoeNXyAjSzo22YGfAQj9QEnA36lmMbCWeetmu6jYjh__UA42R_ZpbCQrXWsiJtwh3214dVKrbcd7Y89j8KNtr2Z4FgafNVD7GYnRG1feYVgpenICtuAaFTUHzhftT0Qf7M2TgeW94cBl2bE3x1e9ja98NfDAN0TO3t7S5Q7bj2mmtyxKcTqLiQ12pX9juVNUDnoQVoQtI7e3THeLEZdDuFs6-M-lKyXfyzTXCaunRlawlgxMLF2tHcLCTo7Z7iUtbva6YgjeEkgJhaE__pF5FITj2g",
      "refreshToken": "AMf-vBxtXgiK1uw1pIRwdRgoh3ULD1WXT6Kr6dKUsJRczCTVv9a40k9xZLIKPPi7c4ZVNxkAS1c10UIhdvfU6Tp_jWqHIy2zgziInrvX_0sxLJMR_B76S0-ZanUNqidVoT4BjcjoLh8rihRkFMQGVo1DMeve20xVGCXgxHvoTEoxvxC6Q4B1aYeifWiZi4Z9R8ozm-QUlp8TLYPNYkKyCadt9hwVuqa_Ks0NA7NtgvjRXqVGwFFsmuiled0BWY9jqATGvZBYvdCm",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 282.6 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/9DqWTlaMi0TOr9sn6l5aM6oeUEN2 (1178.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTEsImV4cCI6MTc0ODM4NDU1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qoVcm-Ae2KnUjLJSvsyTbfm7mJTDiEeippEhDbxTLipBMIMQmVqHAs7WSiOKGoeNXyAjSzo22YGfAQj9QEnA36lmMbCWeetmu6jYjh__UA42R_ZpbCQrXWsiJtwh3214dVKrbcd7Y89j8KNtr2Z4FgafNVD7GYnRG1feYVgpenICtuAaFTUHzhftT0Qf7M2TgeW94cBl2bE3x1e9ja98NfDAN0TO3t7S5Q7bj2mmtyxKcTqLiQ12pX9juVNUDnoQVoQtI7e3THeLEZdDuFs6-M-lKyXfyzTXCaunRlawlgxMLF2tHcLCTo7Z7iUtbva6YgjeEkgJhaE__pF5FITj2g"
  }
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
    "date": "Tue, 27 May 2025 21:22:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1178.2 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (273.0ms)</summary>

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
    "etag": "W/\"640-WL32RQFvdos1JR7YT/Z/eLBa/Xk\"",
    "date": "Tue, 27 May 2025 21:22:33 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTMsImV4cCI6MTc0ODM4NDU1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZkDzwfzbFKHRxQ772K5hjaLrzM8XT0inkMkg7ssyl3uhzy_NJ88dHVuJ3yEEkCnQgsgREbScXLZRdGyT8h0WreYAvZpofmpswJpaR-JUNhal8MPdU5BSIA_02ahYN8hNHLFke9PzY1XQicBF-eHTqMvRG55OX02aQQpMsEZ94lZ4TV-bcYxejRaqYnZKmXtdDxyCiBwFSk7L05YrEIFAqyy8w3aAgVCdum-smguCATcj7icTi5dPOxGi8602g-FVfAKksiY62zHjXm2I1ZlkvksHw0l7VwhvC7sNfjWS7Mw3_F22xAkfOFQl4zFklITkgmIdX2LykJpkTr0MV8mTgA",
      "refreshToken": "AMf-vBxf0Y1mVN2gaaWwDpVYBtwfvsaN1q6VYL7eQoocpObsiY5lAHZRcnH_KErww6ctNZ94Gew-gfJaWzjZhG-SGXL2KRTOi1DhCYxbh1HX1tA4eZGap5ZYu0BrFyhjEqHvRti2A-T7tC4jY-ZnqNsrhMl1UbTpJGnukxFGW30_J87OpwAizYglKkOQCOiHqR7g4U9Uz7sEQqkpkb8uKm-y4uS-8J6CnZq2o9GUNvV-ius0ev9Kmjq0ea2Wy3Q59CRozi9n1Vpg",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 273.0 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/PQCy235PptYNWFb0rfgHdFJyM052 (1273.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTUzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTMsImV4cCI6MTc0ODM4NDU1MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZkDzwfzbFKHRxQ772K5hjaLrzM8XT0inkMkg7ssyl3uhzy_NJ88dHVuJ3yEEkCnQgsgREbScXLZRdGyT8h0WreYAvZpofmpswJpaR-JUNhal8MPdU5BSIA_02ahYN8hNHLFke9PzY1XQicBF-eHTqMvRG55OX02aQQpMsEZ94lZ4TV-bcYxejRaqYnZKmXtdDxyCiBwFSk7L05YrEIFAqyy8w3aAgVCdum-smguCATcj7icTi5dPOxGi8602g-FVfAKksiY62zHjXm2I1ZlkvksHw0l7VwhvC7sNfjWS7Mw3_F22xAkfOFQl4zFklITkgmIdX2LykJpkTr0MV8mTgA"
  }
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
    "date": "Tue, 27 May 2025 21:22:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1273.0 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (345.4ms)</summary>

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
    "etag": "W/\"640-GifERQntL+drSShBDOH/DccTViI\"",
    "date": "Tue, 27 May 2025 21:22:35 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTQsImV4cCI6MTc0ODM4NDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eBQJECLRcOIZhqSFGWBBIGhPF4xgvYSvzj-08fyrMQfUWrcKKYx2T1MtwR4FByps3-oFFEnsKHFZZ8izKY3DC5Vx76lia5siihWdXhs_DsIiXWvQsQs2Ho3ywFWtVUpyNhu_WvHhYW0G0ICIfdiPavGhWCCDLtiolVN0g7GNEWUVBMTbYNjQBcH-3F5eeIqHqLGaDJ39ubTR0AdK1NN4W5dwA6DtEmEuJZMhGsqvovLaWNhHHzDctWXmiE9XQbGrP1268BqYZBtMVIs7lJw5MfyR-qUlcfzD5lZCF_pZQ6dEo-LO3dXB57SceuB6z1azrbYq9qaLoJFPclslKFr5Nw",
      "refreshToken": "AMf-vBzpFM_GAZ9HbbAMmlrvQnumaJM0YJp-wtfFf0u1x3QfEC38vgPoPcqDpoTJy4DKyZ-EZqgbhbV7bvHqITbL3-3DpDk-BfHvvlEor55DFQnxdn8UBNSXVsTGqLmd8r93HDqB76qTJkrwjiLdw2-7ATNe_pJXWCSZIUNgqSLSKRV93gtXBCs7-QyNiEMgT_ttGy0LroKH2vy4y0oORcTL8ApKPVhRgQ8mwlb2-nTRz7a_QuyURTJt62PIRd9qtKXXA6HXRW5d",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 345.4 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/SOEl5mRT4jNuHlvOcGTYWlq2DoI2 (1146.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTQsImV4cCI6MTc0ODM4NDU1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eBQJECLRcOIZhqSFGWBBIGhPF4xgvYSvzj-08fyrMQfUWrcKKYx2T1MtwR4FByps3-oFFEnsKHFZZ8izKY3DC5Vx76lia5siihWdXhs_DsIiXWvQsQs2Ho3ywFWtVUpyNhu_WvHhYW0G0ICIfdiPavGhWCCDLtiolVN0g7GNEWUVBMTbYNjQBcH-3F5eeIqHqLGaDJ39ubTR0AdK1NN4W5dwA6DtEmEuJZMhGsqvovLaWNhHHzDctWXmiE9XQbGrP1268BqYZBtMVIs7lJw5MfyR-qUlcfzD5lZCF_pZQ6dEo-LO3dXB57SceuB6z1azrbYq9qaLoJFPclslKFr5Nw"
  }
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
    "date": "Tue, 27 May 2025 21:22:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1146.8 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (287.8ms)</summary>

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
    "etag": "W/\"640-xrhtoOSxsru8WfSHMNdYwgmr5eI\"",
    "date": "Tue, 27 May 2025 21:22:36 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTU2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTYsImV4cCI6MTc0ODM4NDU1NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mb1_u8foc8h4qLVA3rhgiNpjNNB7iEXFtugCYF7wB5bMjWDYiH0a4KPV8EvL8R-HL_5tlTH4uDvzztKSF54EKmxZq6n0y7kp4Ao8KHFUZc9kw1q-9u9bC7JhHP23FCwmlMZCEoVKAyVqgW7Wcx13UYb4FGhV1yf5bKP4asLQ0Az83GVzuA68DliqrAtsH1uaCpBAO-vUgCaNDgW54SdIS3K-MKkdxUx_Un24xnSG4NXOaLddfD9o2bchpgYYJAILS7nEtMuaiHfbgfYSnD8eKdHx6bUa5TuOidl9Dn2jVV696fo3a_mFlfeTA82iJkU_3_tIDgg-zAfpzkJDN0v8HQ",
      "refreshToken": "AMf-vBzdC3GgUOOZP-7g2pmTl582xpC0JtjtXnyHvz6iEgGx6j4L1KIdxq2JtJ9W16x_Trj9Ka7LCIXIE2VuH8gDov53304U_5fRO4f0CLG0IAzj5KtAwt-iJq1VblwKMYiCyUhK_YDUFzrAEJBDSpSL4H1kxdw6l27zdGsPDJDOY_vThKSvtlYotq6x-kI7Fgoqhv1aFlrrAYj4_WandoJA51spI8Sx-3Do7gt2anxfWk6eX0TGv2p0mLM0g5NJT49uOx3Ma9Qr",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 287.8 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/XMSJhdQIxfd5Ri2bpQdHhjMH0CG3 (1176.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwOTU2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA5NTYsImV4cCI6MTc0ODM4NDU1NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mb1_u8foc8h4qLVA3rhgiNpjNNB7iEXFtugCYF7wB5bMjWDYiH0a4KPV8EvL8R-HL_5tlTH4uDvzztKSF54EKmxZq6n0y7kp4Ao8KHFUZc9kw1q-9u9bC7JhHP23FCwmlMZCEoVKAyVqgW7Wcx13UYb4FGhV1yf5bKP4asLQ0Az83GVzuA68DliqrAtsH1uaCpBAO-vUgCaNDgW54SdIS3K-MKkdxUx_Un24xnSG4NXOaLddfD9o2bchpgYYJAILS7nEtMuaiHfbgfYSnD8eKdHx6bUa5TuOidl9Dn2jVV696fo3a_mFlfeTA82iJkU_3_tIDgg-zAfpzkJDN0v8HQ"
  }
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
    "date": "Tue, 27 May 2025 21:22:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1176.1 ms  

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
- Test organization: Test Org for Memberships 1748380900076
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
