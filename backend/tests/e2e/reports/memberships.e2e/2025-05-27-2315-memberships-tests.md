# E2E Test Report: memberships-tests

**Date:** 5/27/2025  
**Time:** 11:15:51 PM  
**Duration:** 62.49s  
**Tests:** 20 total, 13 passed, 7 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.71s | Admin should invite user to organization successfully |
| ✅ Should fail to invite same user twice | PASSED | 0.63s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.54s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 7.80s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.61s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.52s | Admin should get memberships by user |
| ✅ User should get their own memberships | PASSED | 0.49s | User should get their own memberships |
| ✅ Should fail without userId or organizationId | PASSED | 0.45s | Should fail without userId or organizationId |
| ✅ Regular user should fail to get other user memberships | PASSED | 0.41s | Regular user should fail to get other user memberships |
| ✅ Admin should get membership by ID | PASSED | 0.50s | Admin should get membership by ID |
| ❌ Should fail with invalid membership ID | FAILED | 0.46s | Should fail with invalid membership ID |
| ❌ Admin should update member role successfully | FAILED | 0.78s | Admin should update member role successfully |
| ❌ Should fail with invalid role | FAILED | 0.70s | Should fail with invalid role |
| ❌ Regular user should fail to update role without permissions | FAILED | 0.71s | Regular user should fail to update role without permissions |
| ❌ Admin should remove member successfully | FAILED | 0.84s | Admin should remove member successfully |
| ❌ Regular user should fail to remove member without permissions | FAILED | 2.30s | Regular user should fail to remove member without permissions |
| ❌ User should be able to leave organization (remove own membership) | FAILED | 0.85s | User should be able to leave organization (remove own membership) |
| ✅ Organization admin should not access memberships from other organizations | PASSED | 0.48s | Organization admin should not access memberships from other organizations |
| ✅ Organization admin should not invite users to other organizations | PASSED | 1.53s | Organization admin should not invite users to other organizations |
| ✅ Super admin should access all organizations | PASSED | 1.08s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.71s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (710.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "glgIlsvWVEToCTchl3xbiQrdxLt2",
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
    "etag": "W/\"fd-W2ixfGyki5fLz+vhwGlQNFU+PKI\"",
    "date": "Tue, 27 May 2025 21:14:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "13d3392f-ee78-4aed-972f-e4f117dffd6d",
    "userId": "glgIlsvWVEToCTchl3xbiQrdxLt2",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:14:55.383Z",
    "updatedAt": "2025-05-27T21:14:55.383Z"
  }
}
```

**⏱️ Duration:** 710.9 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.63s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (626.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "glgIlsvWVEToCTchl3xbiQrdxLt2",
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
    "date": "Tue, 27 May 2025 21:14:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error inviting user",
    "details": "User is already a member of this organization"
  }
}
```

**⏱️ Duration:** 626.8 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1109.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1748380496140@example.com",
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
    "etag": "W/\"5dc-JD1RBrR7Th0YOQNf9lFPGVqZ1aA\"",
    "date": "Tue, 27 May 2025 21:14:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "rdCjImidjEZD6vyoOCjNIhUdLzr2",
      "email": "no-perm-invite-1748380496140@example.com",
      "name": "No Permission Invite",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDQ5NiwidXNlcl9pZCI6InJkQ2pJbWlkakVaRDZ2eW9PQ2pOSWhVZEx6cjIiLCJzdWIiOiJyZENqSW1pZGpFWkQ2dnlvT0NqTkloVWRMenIyIiwiaWF0IjoxNzQ4MzgwNDk2LCJleHAiOjE3NDgzODQwOTYsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0ODM4MDQ5NjE0MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ4MzgwNDk2MTQwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Cz7oz8tkX6XbXNpTL9ZgwVE6gPCV-WP9r1WsE_CPhCpRDdFVcMTqvnyQHg7zF9SlaDUXV38fdvWIpEmvBCcvpNIVy1QiOrXUnpNRyfXGSSCjTxxI-3shbIox52-fP8wJhE5CgA8TYQzeT14VczPPOdOZs1H1ukkLoJUAwnQ2ceGjyegoCiKhJeXtFwBCUcXQES-w0wcmi0hAS8MHFtn3hAz3RAvylCcRuuxTxs9rgnZZcAtsbeawadZ0zfjCaaFk8QY6BwjQdafkEnOuk5ueWQw3z3xIoTPaNOjDFsGwx_QoDDpM7K9JOkHfTbOJSUVgGGqmsTFxY11JjgtN0PiGww",
      "refreshToken": "AMf-vBwpqVr3vxl63iLoGUwDmv3RAvVq-6jFK_4rMZqrYP-lKn-A9T8kShJYlq9SzERKOd3SA0T3ALW6Wu7tx5ESx16edYgCI9HXb7CHI4cplqKjrPf2NmYPkalbqHtngOm8Vt5MyMd9sp35DNCJs7vtRtGVmUYTNig9nsnxrDuKRaz5cONQT1_4bg-Yurc9IfMcndr-21YZKCzpS1PM2flnqA7gkN7A9YJ2OgSbk8kS9T79bxGQEVSCU_dXb0AhzcrIEULYcZJS",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1109.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (435.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDQ5MSwidXNlcl9pZCI6IlRlb1pCSHQxb2RaOTR3U0pJTm1meHd3Q0cxSzIiLCJzdWIiOiJUZW9aQkh0MW9kWjk0d1NKSU5tZnh3d0NHMUsyIiwiaWF0IjoxNzQ4MzgwNDkxLCJleHAiOjE3NDgzODQwOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDQ5MDIzMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNDkwMjMwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Xqln7NEpIl4Jy3thIsm8Cd1Z3_Y8furdVez3uHIj7F6BZw6jky8DbfZhjOXyHp29h1qs9t7rmWjqLmbuhU0XXod7N5t1jly6f-RMX-pMtNkfo3qP6p1WPjOCbVw8p79xpjxVfMWR2A1YD01nVciY8MpXivXa7mOuT6YJf_sccQla7VpPKTxZ6ztDgCNNuFGYq3FP5g_iaxzd74UmvQPRO4SBDtQEKlUhk1qDHi-qxMgDvFPcsRqXP8hylgPI7z41QLR-nUqqLSCTNOCCa96jVaPYUa7tU_8R9oJPsne-ipwm0jD8BX3cLd0Mdj0mV7jpcJRFsNTf7QgJZJsIlJ1Gjg"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "rdCjImidjEZD6vyoOCjNIhUdLzr2",
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
    "date": "Tue, 27 May 2025 21:14:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 435.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 7.80s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (998.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1748380497687@example.com",
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
    "etag": "W/\"5ae-ZBZolqkEGreRoZMl4NpsxIXT1f8\"",
    "date": "Tue, 27 May 2025 21:14:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "3XXDRZNah4aoB5kdoetacemgMLP2",
      "email": "admin-user-1748380497687@example.com",
      "name": "Admin User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDQ5OCwidXNlcl9pZCI6IjNYWERSWk5haDRhb0I1a2RvZXRhY2VtZ01MUDIiLCJzdWIiOiIzWFhEUlpOYWg0YW9CNWtkb2V0YWNlbWdNTFAyIiwiaWF0IjoxNzQ4MzgwNDk4LCJleHAiOjE3NDgzODQwOTgsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ4MzgwNDk3Njg3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0ODM4MDQ5NzY4N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XbwFjVv6xlk_PykwSubRBAnAeGBKhbPtk4WGYiO5FpHBeWSaEVjS6edx1nR6-Q0BxWxbpHhtT3pcHhgfupYKiOqmQthaE5L1ah15nsHzbCfVooN9U62tStuVW06H6aZhJTGNJ_KMmY9se7sIzY98Nidbs7ZI2KpN080fugI4suK6v-2lwgIylESNI_2XBn6eNF9SbvM7-n8ZW9wH_8HZEFf3sbDLh-70WZTKEHTd72MW2HJ4OjmQhD6naK34Ys3zvrop34Vcv_mp6a0qgcarfUJ1DY_W0xGCptNCMvjY5DjAVKaTbjYF8_1pQMk6q9kJTMj72MSWS9Mp-33K6kbkGA",
      "refreshToken": "AMf-vBzM3f0dbSG1k_i9iOz6GP73eqXhorZihTX8V2aTEn4W81BhnipF9qiFXERDFAaPxuUopC_uY_-8j2ltBn-dEtnZS4fTWUwdlrsPX4OGSJ9CJHTNyp6XqCG5ZMNvCwdamzpcwX-N5dyPIjN20Jid4hwzKKaL4TifRRlDZkxDehOu7a4P-jJC5T3liWYHHACCiyFYUhmDBYE10OaA2dcBDCy6-z_Dw2HxHiqMyhdX0o-uF5rrkx0",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 998.5 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (597.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "3XXDRZNah4aoB5kdoetacemgMLP2",
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
    "etag": "W/\"fc-L61/hSKJWAzdAYh6RtyQ62xURo8\"",
    "date": "Tue, 27 May 2025 21:14:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f82b8fba-cbe0-4dc2-a54a-e92b3f546aff",
    "userId": "3XXDRZNah4aoB5kdoetacemgMLP2",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-05-27T21:14:59.218Z",
    "updatedAt": "2025-05-27T21:14:59.218Z"
  }
}
```

**⏱️ Duration:** 597.3 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1036.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1748380499284@example.com",
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
    "etag": "W/\"5b8-4Z63MLaIInpPpjvCNKYnKjXhY74\"",
    "date": "Tue, 27 May 2025 21:15:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "eNtq6sTZD8WV47tv0B13309ffU23",
      "email": "manager-user-1748380499284@example.com",
      "name": "Manager User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDQ5OSwidXNlcl9pZCI6ImVOdHE2c1RaRDhXVjQ3dHYwQjEzMzA5ZmZVMjMiLCJzdWIiOiJlTnRxNnNUWkQ4V1Y0N3R2MEIxMzMwOWZmVTIzIiwiaWF0IjoxNzQ4MzgwNDk5LCJleHAiOjE3NDgzODQwOTksImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDgzODA0OTkyODRAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDgzODA0OTkyODRAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.SXwMsClx0Cq_ToLDTPuOWGDndxWhYZRpvjJMoraCv0zH_t0dF9s6WMtovmbQZEedqCkEePVD0xgHYEyPibQDL9oeSLEiMiywB690Lq2ncvRCtdPdbFUzJ1btZzy0hi3XheUvRR6ChsPpE9qzNYxhAj8pjDyRx6XSME3eWRDTV5wYp1-xdfT4G4LU83pD_UCYUcTAatMOJssu4LIoulX3aXV4X4iPKMgc-ua88XBJ1xvJ3fDj-gQXP7juYUaSGfi_Jftg3PWy5Pu2sbO9WLzKgrPOxsalgRqXK7UM1IF2JTIuGPAmopmYwPAVJC05WsAS2M5qrk3WJyZ5dFPfTEcxWg",
      "refreshToken": "AMf-vBxhfSNCN02CevOKpHSOv0o7rRd-FYo2A2F4b6ufrR8eg4OgAY6ObVXaT1lUj-84npjePF1Lkr9osu75Z1zCKxz_y0uoYrtcGijG-hQp6YKtWZSx75totdQJFITCF6mvU3CjFGauJQNo8TD4cHHGmgwCWMOc1hDttxsWtniPtl9_EMMWPn8QpwWNYO46U5OLpt5uHwyea8PdhiM-ermnG-sF25x5qq7Ut6AJF0PYEKzFcZLniYU",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1036.9 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (602.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "eNtq6sTZD8WV47tv0B13309ffU23",
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
    "etag": "W/\"fe-EiQPN4qSIn72WjRFGXD+4G+pPV0\"",
    "date": "Tue, 27 May 2025 21:15:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "869d9fc6-d2c2-4f7c-afa9-93b9f1ac086c",
    "userId": "eNtq6sTZD8WV47tv0B13309ffU23",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-05-27T21:15:00.854Z",
    "updatedAt": "2025-05-27T21:15:00.854Z"
  }
}
```

**⏱️ Duration:** 602.2 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (933.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1748380500924@example.com",
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
    "etag": "W/\"5d6-DAWBwmkkE/QHjwI6BcidUr9SlmU\"",
    "date": "Tue, 27 May 2025 21:15:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "DxpF2F2YC0MJUgU8Jf3CsINySRm2",
      "email": "moderator-user-1748380500924@example.com",
      "name": "Moderator User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUwMSwidXNlcl9pZCI6IkR4cEYyRjJZQzBNSlVnVThKZjNDc0lOeVNSbTIiLCJzdWIiOiJEeHBGMkYyWUMwTUpVZ1U4SmYzQ3NJTnlTUm0yIiwiaWF0IjoxNzQ4MzgwNTAxLCJleHAiOjE3NDgzODQxMDEsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0ODM4MDUwMDkyNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ4MzgwNTAwOTI0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.aB91MWzcqrO698Hh9wkT75D7IunyP5VhVcC_NllGfCfTXiNUUWA-8YBaXOl5BmRoj1tFkihMbGNVf6-bbA_D2bfAtrSWjn549oqT6UQWuq_HXew1wuOwarF9NQ-NzJafGqMjSk3sgL_T5-3GVS1nToKL-J-FlyZdp4oirAgy8k2dYQQUmqcyoeq1k7M7fT59aK_Jag5wKPnRqEhNIJEHle9iLuEaoLcQwEweuPm2E_XsHygNOvm2He9dMdxUyxMFkm1POuKovV_gGItRP3npnxTsgStMO9owMcuNFK0p6BthngwOD1z2QXAPO-iV0bkBnmql1G_N4vTFls0ylEwnBw",
      "refreshToken": "AMf-vByMG3rHR5XNZ4DX2suEI4Y27xFKl9Su88huYf2XvDcGwu0q_kt1efYw3Lbztf_gR3noDaBcmeen5vtK7x8pe3gMe54F_NsR_eY69X6iPL8Fhzic0jXYYHWN4KSiXwGI_uArd5Ka_JwUGAIGr6pWFxvOudyMOo7xE6h_HdsQWAqrS--Ftyi7pGxZgkJaAkK26Kr2YV-xWRMduEUMuPWbUCQKXD8oFRNdYa_TOG05x8G7CsLpoNj303KMTFWFHWA0HYF2exEs",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 933.0 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (509.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "DxpF2F2YC0MJUgU8Jf3CsINySRm2",
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
    "etag": "W/\"100-7HgOy9+57aPSNskbQx3rZYhWkh0\"",
    "date": "Tue, 27 May 2025 21:15:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "19b67208-fae5-4583-b022-0ac6b80f375d",
    "userId": "DxpF2F2YC0MJUgU8Jf3CsINySRm2",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "moderator",
    "status": "active",
    "createdAt": "2025-05-27T21:15:02.304Z",
    "updatedAt": "2025-05-27T21:15:02.304Z"
  }
}
```

**⏱️ Duration:** 509.6 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (921.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1748380502367@example.com",
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
    "etag": "W/\"5d6-DIrbWp11QYiOQvdIwKzSKC3wsbk\"",
    "date": "Tue, 27 May 2025 21:15:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "2pt2bfbEMzXa5KBi5UV08Vj4uDu2",
      "email": "volunteer-user-1748380502367@example.com",
      "name": "Volunteer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUwMiwidXNlcl9pZCI6IjJwdDJiZmJFTXpYYTVLQmk1VVYwOFZqNHVEdTIiLCJzdWIiOiIycHQyYmZiRU16WGE1S0JpNVVWMDhWajR1RHUyIiwiaWF0IjoxNzQ4MzgwNTAyLCJleHAiOjE3NDgzODQxMDIsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0ODM4MDUwMjM2N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ4MzgwNTAyMzY3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LBtZn6Cs_HiQEJ7YrAHKI_YhTHQfDgAss5vxnTiAIIZAkie3icl59jI8exLpFwHyPvXCDbJQ3pwCrcWqjmOZ0FbIHZ9e9fGOujOE3Cz0ncAAsOhDvmdbdUG1QcEBvX55mVt0hDy4LpdvBDKv2bYiE27xl_FOlv6oEAEfhFUFhBFG66nlgS2S3nV7TpLp3Zc1BtFvyH161kgxK7CNTX-9nxGY9Q-Yj-G7wH-vEh7wesg_AKNvBHoFSihGML-dQf_6bUFOzfdqAxnU2z8D-CcEXiGok6J_nl20HxxgopTqxJ4Cnk9BOzp1NVzNPw07f9YX6_hPu3ng4ZUqEw3vxEMsaw",
      "refreshToken": "AMf-vBzia6ird2nafzEVdBL103MLh9bNNcsAnRD6GqSgr4EnML8y-azkQ8Yydpd1ItmXu1NZwQfBJ0ptM_amG1VjfSmmKHzYbnXhdLVMcVOQ2PqXrnneLLMjom1DLaaTu2wwj5Sxv01qoFagbPQW8ftnXQ1icvnV2NMxBOka7rvN4snJsk3i3GPoCY2zSnIhYSXYmQNNRIwvQKh3eab5A_nEmXnOz0daSkw9v7SPqGRG08CCY4TVx2Du6WJaDAQJ5HiWmqoRNOHe",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 921.2 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (602.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "2pt2bfbEMzXa5KBi5UV08Vj4uDu2",
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
    "etag": "W/\"100-YkTL+1TSkGNuPf1xUPDE93tzYlM\"",
    "date": "Tue, 27 May 2025 21:15:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2b21d75c-8099-46a8-8f61-274e68c54eba",
    "userId": "2pt2bfbEMzXa5KBi5UV08Vj4uDu2",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:15:03.825Z",
    "updatedAt": "2025-05-27T21:15:03.825Z"
  }
}
```

**⏱️ Duration:** 602.1 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1038.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1748380503891@example.com",
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
    "etag": "W/\"5bc-mFsAzlCvkfg2U2PNtYc5g9ONUDI\"",
    "date": "Tue, 27 May 2025 21:15:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "VkUdwIUJYrfWy8QvD8jAI0GpJXr2",
      "email": "observer-user-1748380503891@example.com",
      "name": "Observer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUwNCwidXNlcl9pZCI6IlZrVWR3SVVKWXJmV3k4UXZEOGpBSTBHcEpYcjIiLCJzdWIiOiJWa1Vkd0lVSllyZld5OFF2RDhqQUkwR3BKWHIyIiwiaWF0IjoxNzQ4MzgwNTA0LCJleHAiOjE3NDgzODQxMDQsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ4MzgwNTAzODkxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0ODM4MDUwMzg5MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mwE7uxES29352lUe41tVtHJfSXBTy90pwgPukycALcD4JWi10_-BfrRQ4-7zqXoZjRGRstxXHRGjji00Ye_mso12_DzsaAgUE44h2H_iwf1ukuGpEutVf-VFUesh49h-oleO2uI3flFnO8hkRREA2HeTlI89yNpKMkTHI92HI772FajfegqXexYbCleJIbtd_zQ9JwSw96wcnqUmQHA_DY0J_iuWBMiyJuqIrltqqu2wSFqF6OVLh3I_SvJiPA2AzNhgBITJCJ0B-1iRQ-Ko_n_n5GMgV02_44MnoRhr8YG1vvf9qnIVrLou2Lz708pNcHoAOwf2pediM3Z99dhI-A",
      "refreshToken": "AMf-vBww5q0d0eGMeLJJHIOUXovJqKsTZDJAsNByEQ5jWevnCS6syARGqZfK_pTUdD-obC9-LiGBGhyyHEgG6ph6unnaCnLnK6gZmLIcyOLI4qQgcjPE0rGA4opXbRsaEfQQzz785yuqCU53mpClebILQ_njwSSVFrg7DwpoCXOX-yFlfQbt42Sm-q4HHsvxnUBVhOEbfoguMoPh1PplwXGHA_C89U6g8C_9TCEjhn8Dc4XjI8xdRaM",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1038.3 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (553.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "VkUdwIUJYrfWy8QvD8jAI0GpJXr2",
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
    "etag": "W/\"ff-mbnE73VWw4O/zfVdOcY8nW1Kfj0\"",
    "date": "Tue, 27 May 2025 21:15:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8bbe2814-93cf-4cfb-83e2-975619e3afc5",
    "userId": "VkUdwIUJYrfWy8QvD8jAI0GpJXr2",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "observer",
    "status": "active",
    "createdAt": "2025-05-27T21:15:05.419Z",
    "updatedAt": "2025-05-27T21:15:05.419Z"
  }
}
```

**⏱️ Duration:** 553.8 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=1a3e1f2d-7894-4071-bb7f-fafe5173ceea (606.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  }
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
    "etag": "W/\"5fd-tMnB/BAyo8oUSbYRR602UVEEqRI\"",
    "date": "Tue, 27 May 2025 21:15:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "13d3392f-ee78-4aed-972f-e4f117dffd6d",
      "userId": "glgIlsvWVEToCTchl3xbiQrdxLt2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "member",
      "status": "active",
      "createdAt": "2025-05-27T21:14:55.383Z",
      "updatedAt": "2025-05-27T21:14:55.383Z"
    },
    {
      "id": "f82b8fba-cbe0-4dc2-a54a-e92b3f546aff",
      "userId": "3XXDRZNah4aoB5kdoetacemgMLP2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-05-27T21:14:59.218Z",
      "updatedAt": "2025-05-27T21:14:59.218Z"
    },
    {
      "id": "869d9fc6-d2c2-4f7c-afa9-93b9f1ac086c",
      "userId": "eNtq6sTZD8WV47tv0B13309ffU23",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:15:00.854Z",
      "updatedAt": "2025-05-27T21:15:00.854Z"
    },
    {
      "id": "19b67208-fae5-4583-b022-0ac6b80f375d",
      "userId": "DxpF2F2YC0MJUgU8Jf3CsINySRm2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-05-27T21:15:02.304Z",
      "updatedAt": "2025-05-27T21:15:02.304Z"
    },
    {
      "id": "2b21d75c-8099-46a8-8f61-274e68c54eba",
      "userId": "2pt2bfbEMzXa5KBi5UV08Vj4uDu2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:15:03.825Z",
      "updatedAt": "2025-05-27T21:15:03.825Z"
    },
    {
      "id": "8bbe2814-93cf-4cfb-83e2-975619e3afc5",
      "userId": "VkUdwIUJYrfWy8QvD8jAI0GpJXr2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-05-27T21:15:05.419Z",
      "updatedAt": "2025-05-27T21:15:05.419Z"
    }
  ]
}
```

**⏱️ Duration:** 606.9 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (517.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  }
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
    "date": "Tue, 27 May 2025 21:15:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 517.8 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=TeoZBHt1odZ94wSJINmfxwwCG1K2 (491.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDQ5MSwidXNlcl9pZCI6IlRlb1pCSHQxb2RaOTR3U0pJTm1meHd3Q0cxSzIiLCJzdWIiOiJUZW9aQkh0MW9kWjk0d1NKSU5tZnh3d0NHMUsyIiwiaWF0IjoxNzQ4MzgwNDkxLCJleHAiOjE3NDgzODQwOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDQ5MDIzMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNDkwMjMwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Xqln7NEpIl4Jy3thIsm8Cd1Z3_Y8furdVez3uHIj7F6BZw6jky8DbfZhjOXyHp29h1qs9t7rmWjqLmbuhU0XXod7N5t1jly6f-RMX-pMtNkfo3qP6p1WPjOCbVw8p79xpjxVfMWR2A1YD01nVciY8MpXivXa7mOuT6YJf_sccQla7VpPKTxZ6ztDgCNNuFGYq3FP5g_iaxzd74UmvQPRO4SBDtQEKlUhk1qDHi-qxMgDvFPcsRqXP8hylgPI7z41QLR-nUqqLSCTNOCCa96jVaPYUa7tU_8R9oJPsne-ipwm0jD8BX3cLd0Mdj0mV7jpcJRFsNTf7QgJZJsIlJ1Gjg"
  }
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
    "date": "Tue, 27 May 2025 21:15:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 491.9 ms  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (450.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "date": "Tue, 27 May 2025 21:15:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Either userId or organizationId must be provided"
  }
}
```

**⏱️ Duration:** 450.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (408.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDQ5MSwidXNlcl9pZCI6IlRlb1pCSHQxb2RaOTR3U0pJTm1meHd3Q0cxSzIiLCJzdWIiOiJUZW9aQkh0MW9kWjk0d1NKSU5tZnh3d0NHMUsyIiwiaWF0IjoxNzQ4MzgwNDkxLCJleHAiOjE3NDgzODQwOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDQ5MDIzMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNDkwMjMwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Xqln7NEpIl4Jy3thIsm8Cd1Z3_Y8furdVez3uHIj7F6BZw6jky8DbfZhjOXyHp29h1qs9t7rmWjqLmbuhU0XXod7N5t1jly6f-RMX-pMtNkfo3qP6p1WPjOCbVw8p79xpjxVfMWR2A1YD01nVciY8MpXivXa7mOuT6YJf_sccQla7VpPKTxZ6ztDgCNNuFGYq3FP5g_iaxzd74UmvQPRO4SBDtQEKlUhk1qDHi-qxMgDvFPcsRqXP8hylgPI7z41QLR-nUqqLSCTNOCCa96jVaPYUa7tU_8R9oJPsne-ipwm0jD8BX3cLd0Mdj0mV7jpcJRFsNTf7QgJZJsIlJ1Gjg"
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
    "date": "Tue, 27 May 2025 21:15:07 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You can only view your own memberships"
  }
}
```

**⏱️ Duration:** 408.4 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/13d3392f-ee78-4aed-972f-e4f117dffd6d (496.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  }
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
    "etag": "W/\"fd-W2ixfGyki5fLz+vhwGlQNFU+PKI\"",
    "date": "Tue, 27 May 2025 21:15:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "13d3392f-ee78-4aed-972f-e4f117dffd6d",
    "userId": "glgIlsvWVEToCTchl3xbiQrdxLt2",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:14:55.383Z",
    "updatedAt": "2025-05-27T21:14:55.383Z"
  }
}
```

**⏱️ Duration:** 496.3 ms  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ❌ FAILED  
**Duration:** 0.46s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m404[39m
Received: [31m500[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (460.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "39",
    "etag": "W/\"27-lK38RmAOPH6g7SRpNhMav4+t+04\"",
    "date": "Tue, 27 May 2025 21:15:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error retrieving membership"
  }
}
```

**⏱️ Duration:** 460.8 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Admin should update member role successfully
**Status:** ❌ FAILED  
**Duration:** 0.78s  
**Error:** Request failed with status code 404  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/13d3392f-ee78-4aed-972f-e4f117dffd6d (777.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "role": "manager"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 777.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Should fail with invalid role
**Status:** ❌ FAILED  
**Duration:** 0.70s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m400[39m
Received: [31m404[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/13d3392f-ee78-4aed-972f-e4f117dffd6d (696.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "role": "invalid-role"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 696.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Regular user should fail to update role without permissions
**Status:** ❌ FAILED  
**Duration:** 0.71s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m404[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/13d3392f-ee78-4aed-972f-e4f117dffd6d (713.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDQ5MSwidXNlcl9pZCI6IlRlb1pCSHQxb2RaOTR3U0pJTm1meHd3Q0cxSzIiLCJzdWIiOiJUZW9aQkh0MW9kWjk0d1NKSU5tZnh3d0NHMUsyIiwiaWF0IjoxNzQ4MzgwNDkxLCJleHAiOjE3NDgzODQwOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDQ5MDIzMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNDkwMjMwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Xqln7NEpIl4Jy3thIsm8Cd1Z3_Y8furdVez3uHIj7F6BZw6jky8DbfZhjOXyHp29h1qs9t7rmWjqLmbuhU0XXod7N5t1jly6f-RMX-pMtNkfo3qP6p1WPjOCbVw8p79xpjxVfMWR2A1YD01nVciY8MpXivXa7mOuT6YJf_sccQla7VpPKTxZ6ztDgCNNuFGYq3FP5g_iaxzd74UmvQPRO4SBDtQEKlUhk1qDHi-qxMgDvFPcsRqXP8hylgPI7z41QLR-nUqqLSCTNOCCa96jVaPYUa7tU_8R9oJPsne-ipwm0jD8BX3cLd0Mdj0mV7jpcJRFsNTf7QgJZJsIlJ1Gjg"
  },
  "data": {
    "role": "volunteer"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 713.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (967.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1748380511133@example.com",
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
    "etag": "W/\"5b8-2A15c6MWUejlPedn/qNKegN6U90\"",
    "date": "Tue, 27 May 2025 21:15:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "bLftvaT2VgfJ5AiJuaXTBd02H2K3",
      "email": "remove-user-1748380511133@example.com",
      "name": "User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxMSwidXNlcl9pZCI6ImJMZnR2YVQyVmdmSjVBaUp1YVhUQmQwMkgySzMiLCJzdWIiOiJiTGZ0dmFUMlZnZko1QWlKdWFYVEJkMDJIMkszIiwiaWF0IjoxNzQ4MzgwNTExLCJleHAiOjE3NDgzODQxMTEsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0ODM4MDUxMTEzM0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ4MzgwNTExMTMzQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.jWhFsdMFKjyyZSniCLizatZtwqlMyQlzymWg-YgfinBjjSpYn-gTCXzIISl5T4kau_OVv6HoxqJ5u-g1cz09BBWu-3DxeYzOsSuZ61o2qFegZKSvx-hYQ7IRvQnLME8ZIS8rKJ6M08wlicSlZSWzhXDANv1_avCNDn--BupD0T9TUPyI2sp_jb9ldaLHxF6p6pmOuZT8Kak0tWU-PUoB8C38OreIeM061qoDbRfYl8yFKoucEq_NEh0UHN2YqRnzLKzGbx_qdg9seP1x6Wm7poayYzJdPSQ2MR-uWE9XgoGht7QgmAkyeg9G-F-8TkTfpUonpxRN_3AYLyQ3lr068g",
      "refreshToken": "AMf-vBxQ3nR8axvQIwUbh2XZZu7FyJp3pxecLO0iwPDp7mwJAeIjbqrrcm4IavFnJo0fjU-Ybo64dsFoyXYrtt_-pvZXoWoP0KFD9kD5PvjBETV936jCvmTdk9ez2P3K3whTYTHubAWZJ5RVNCcrXJYPH4lmJqxwMDdWm80UZ_r6R_gdtL8CsQqkh9dPj6hyLGlrziuul13mRb3Wsp3cucDTG-quUm2U_P8KGohz1yemYc7V6Glva2E",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 967.8 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (599.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "bLftvaT2VgfJ5AiJuaXTBd02H2K3",
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
    "etag": "W/\"100-ROp/2ixcYulOVWDEENutVg8rq0o\"",
    "date": "Tue, 27 May 2025 21:15:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "32706919-ec0f-4df8-8c63-f0b8df41599b",
    "userId": "bLftvaT2VgfJ5AiJuaXTBd02H2K3",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:15:12.632Z",
    "updatedAt": "2025-05-27T21:15:12.632Z"
  }
}
```

**⏱️ Duration:** 599.8 ms  

</details>


---

### Test: Admin should remove member successfully
**Status:** ❌ FAILED  
**Duration:** 0.84s  
**Error:** Request failed with status code 404  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/32706919-ec0f-4df8-8c63-f0b8df41599b (837.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 837.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Regular user should fail to remove member without permissions
**Status:** ❌ FAILED  
**Duration:** 2.30s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m404[39m  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1012.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1748380513544@example.com",
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
    "etag": "W/\"5f2-naswxs2Cc8njkbgB61FPehRsgAI\"",
    "date": "Tue, 27 May 2025 21:15:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "XtXJ5pZTmnPTFIlUOHWKLgNDc0M2",
      "email": "another-remove-user-1748380513544@example.com",
      "name": "Another User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxMywidXNlcl9pZCI6Ilh0WEo1cFpUbW5QVEZJbFVPSFdLTGdORGMwTTIiLCJzdWIiOiJYdFhKNXBaVG1uUFRGSWxVT0hXS0xnTkRjME0yIiwiaWF0IjoxNzQ4MzgwNTEzLCJleHAiOjE3NDgzODQxMTMsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ4MzgwNTEzNTQ0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0ODM4MDUxMzU0NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fCOi5ChLd4Yuw6oBzSIFtFDZzKqv5MR17uWCcK85d89M7C0fmJ-_wHvTyuQCSsQV0hnjUDhmcqv-5QElGcdVETH0Yhyl4sphY7yQ4qOSc1srbKuEplbB6FluUoRtCcpGSMUic11j2hS1nGVdK_AwtY1-LS7HQuj2TTXf8MwnOAeWhPFCn0_uBeFN5wYxrRx6RZAGKMGsrGQnRUSfrPLV41lODgHhlU030KrDcv-_GAd-6VW4qSYWMOQSL3LNWAAhjZ9ZTUYA4fAgr2e21fqVbBkVRx9KK9hzpgFD-QfNqHMktsiIpk1j5ndSg-VkSBqtCaMXmkW0-4fxQ0G99NAZAw",
      "refreshToken": "AMf-vBzP5jNb9mDI6ovzR9GAVYY4pgw14MCBTypifg2LQkSwUvlxUgLGtiQwkQoPcc26ciBkgydzxJPe-Sv8AXLwL3gsZyTATtvFcyQUiZPjwU6_OS2K6zfoHc675TuBaPzxQuKpsB1x-UWiL0Q3dprg1DmB5VW8GRpq_dAt1ApIfWP29b5IivESLi70bQK6lHcr3u69_d4T6mccwlqTe6-K30bh3v0KRlbaHjIc0a3bEIvLkvNZWApBVvJMnzPZ7NFH8XDmN5KH",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1012.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (597.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "XtXJ5pZTmnPTFIlUOHWKLgNDc0M2",
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
    "etag": "W/\"100-vLr0GqN7U4kI6izWWspU/aAWXm4\"",
    "date": "Tue, 27 May 2025 21:15:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a435cde3-63d4-44ed-aaae-f36b8576b1b9",
    "userId": "XtXJ5pZTmnPTFIlUOHWKLgNDc0M2",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:15:15.091Z",
    "updatedAt": "2025-05-27T21:15:15.091Z"
  }
}
```

**⏱️ Duration:** 597.8 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/a435cde3-63d4-44ed-aaae-f36b8576b1b9 (685.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDQ5MSwidXNlcl9pZCI6IlRlb1pCSHQxb2RaOTR3U0pJTm1meHd3Q0cxSzIiLCJzdWIiOiJUZW9aQkh0MW9kWjk0d1NKSU5tZnh3d0NHMUsyIiwiaWF0IjoxNzQ4MzgwNDkxLCJleHAiOjE3NDgzODQwOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDQ5MDIzMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNDkwMjMwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Xqln7NEpIl4Jy3thIsm8Cd1Z3_Y8furdVez3uHIj7F6BZw6jky8DbfZhjOXyHp29h1qs9t7rmWjqLmbuhU0XXod7N5t1jly6f-RMX-pMtNkfo3qP6p1WPjOCbVw8p79xpjxVfMWR2A1YD01nVciY8MpXivXa7mOuT6YJf_sccQla7VpPKTxZ6ztDgCNNuFGYq3FP5g_iaxzd74UmvQPRO4SBDtQEKlUhk1qDHi-qxMgDvFPcsRqXP8hylgPI7z41QLR-nUqqLSCTNOCCa96jVaPYUa7tU_8R9oJPsne-ipwm0jD8BX3cLd0Mdj0mV7jpcJRFsNTf7QgJZJsIlJ1Gjg"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 685.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (1065.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748380515845@example.com",
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
    "etag": "W/\"5db-JPU7NYYi/9+K68kxWH1fuhyGelA\"",
    "date": "Tue, 27 May 2025 21:15:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "vZr1u8ElGZaT3A99SgHVNXFjGQF3",
      "email": "self-leave-user-1748380515845@example.com",
      "name": "Self Leave User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxNiwidXNlcl9pZCI6InZacjF1OEVsR1phVDNBOTlTZ0hWTlhGakdRRjMiLCJzdWIiOiJ2WnIxdThFbEdaYVQzQTk5U2dIVk5YRmpHUUYzIiwiaWF0IjoxNzQ4MzgwNTE2LCJleHAiOjE3NDgzODQxMTYsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA1MTU4NDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA1MTU4NDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.hHl4u92ccFTgruzMBiMghr3NNZ6a6SoBUNWgfrGl679lg6n5PN_6u3-PmjnxhoPX1438LFzuW6-AP6nZoHAkHJxmGkzg-g-GlH-AvB2lhPdNqkq1zhpGgJQKhAP4pMFTRqm-PG0lh7IH-6KHHhCA-TY1zOu4kAg-8RmCxXzadF1qZ9rkNekrkPIShX3kfEdnHetYa20u_U5RlRSpzX-mGXpRs21JcMe6nV7cFAED7yJjGfsQwRaIahEbE62lscwANIh4wa5AMdfboQ5gsSjNNg6rHKzQebXU_YfAu-ulN3CFW1OLMYWHitCJ3TcD3a7f5h9aNyAA7u5WplBb-AmWcQ",
      "refreshToken": "AMf-vBya69AeomGJNrj6OxuisZMx65IW5Kv8PosxINtnsJJ_hBXlvCesYDfICvvM5812C7e7ZjGBkjn6PIGDyu_lF-_Maaiy2wyNLOYn2bwCoicw2ObYVZHV5kfqGhyliDUePd6iqthEPjDGqIOPTZeiRYl9I4z_SbxAlY3M_nkYEdJkxxrkxAcfH9kTN0GgK4PFkFoRO72y5lDwvXMi9VxKq-Tb4sGDRf5sa5j13HehHm-ALoxm6gN1ku5KJHeTmfsVleJ3XDSE",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1065.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (366.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748380515845@example.com",
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
    "etag": "W/\"5aa-VAxuvVldnesOVs7coQ9mKRFqrWI\"",
    "date": "Tue, 27 May 2025 21:15:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "vZr1u8ElGZaT3A99SgHVNXFjGQF3",
      "email": "self-leave-user-1748380515845@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxNywidXNlcl9pZCI6InZacjF1OEVsR1phVDNBOTlTZ0hWTlhGakdRRjMiLCJzdWIiOiJ2WnIxdThFbEdaYVQzQTk5U2dIVk5YRmpHUUYzIiwiaWF0IjoxNzQ4MzgwNTE3LCJleHAiOjE3NDgzODQxMTcsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA1MTU4NDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA1MTU4NDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CVkrP5fI2Oai4tTZFunrQgOD0dXiNDqeVKEflEoBGJdP-e3R8kKq5Xjv101bnrojyPxWAYIBEvyw-HUsr7Y4NiV1Iz_rCemmGDKSzLK_Epp4W-B6gAWENPdx6gEzsypic9mz2PYYZRtvZhzIw_iidMd9yjV5VmKiTR3hPqjJ6kexd52crk-ol2dyfPtFNC89fmpi3sTZbazi00aWd62Q4seJEThOXBdjNrnb3LNmzz0pOqW6qXJ4y9R5cjKvGW_nZRYSFSJ0l6_OGobWWJJkN2cqFSWOq28B9Xu-yt96dnD3M91qvb0FK2z52MuANWPiZ3qjOutEYpX79awsJPLgag",
      "refreshToken": "AMf-vBx_pvBYN1DsigRUEX5As_aggfa5JMR3BgAXLtNeFZGv6rj4B5MxxJY5bIy1T7dgTKDCyLgNbXbZ1afY3Nubl0q5ljtubXVaZC6xHcTTZeN_keqhN0daW5At3P6KxUjYCp1hmm7b7CEKe2cqOFnlcMx90W435NKTXoSKMv_OLId43ZlC5qqZWfvOlN3YIBVGifyfhnRWDkBSBv4xt7hSqTPu0dQzeTr4hX4F29TeWwnF6Z1MgQRIte-D1JzTgP6uGEy319cW",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 366.7 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (645.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "vZr1u8ElGZaT3A99SgHVNXFjGQF3",
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
    "etag": "W/\"fd-O8duAi+A8P7z4TP4Oy9t94SRFr0\"",
    "date": "Tue, 27 May 2025 21:15:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "898fb4bf-9663-4ae6-b4ef-a9b1a853b1e8",
    "userId": "vZr1u8ElGZaT3A99SgHVNXFjGQF3",
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:15:17.857Z",
    "updatedAt": "2025-05-27T21:15:17.857Z"
  }
}
```

**⏱️ Duration:** 645.6 ms  

</details>


---

### Test: User should be able to leave organization (remove own membership)
**Status:** ❌ FAILED  
**Duration:** 0.85s  
**Error:** Request failed with status code 404  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/898fb4bf-9663-4ae6-b4ef-a9b1a853b1e8 (847.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxNywidXNlcl9pZCI6InZacjF1OEVsR1phVDNBOTlTZ0hWTlhGakdRRjMiLCJzdWIiOiJ2WnIxdThFbEdaYVQzQTk5U2dIVk5YRmpHUUYzIiwiaWF0IjoxNzQ4MzgwNTE3LCJleHAiOjE3NDgzODQxMTcsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA1MTU4NDVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA1MTU4NDVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CVkrP5fI2Oai4tTZFunrQgOD0dXiNDqeVKEflEoBGJdP-e3R8kKq5Xjv101bnrojyPxWAYIBEvyw-HUsr7Y4NiV1Iz_rCemmGDKSzLK_Epp4W-B6gAWENPdx6gEzsypic9mz2PYYZRtvZhzIw_iidMd9yjV5VmKiTR3hPqjJ6kexd52crk-ol2dyfPtFNC89fmpi3sTZbazi00aWd62Q4seJEThOXBdjNrnb3LNmzz0pOqW6qXJ4y9R5cjKvGW_nZRYSFSJ0l6_OGobWWJJkN2cqFSWOq28B9Xu-yt96dnD3M91qvb0FK2z52MuANWPiZ3qjOutEYpX79awsJPLgag"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 847.7 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (1003.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748380518775@example.com",
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
    "etag": "W/\"5db-eg3UfI/FRkNcB86F5jf9hNFDd4k\"",
    "date": "Tue, 27 May 2025 21:15:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "2OosqYl1VBNdHvqThF32EZSeUzA3",
      "email": "other-org-admin-1748380518775@example.com",
      "name": "Other Org Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxOSwidXNlcl9pZCI6IjJPb3NxWWwxVkJOZEh2cVRoRjMyRVpTZVV6QTMiLCJzdWIiOiIyT29zcVlsMVZCTmRIdnFUaEYzMkVaU2VVekEzIiwiaWF0IjoxNzQ4MzgwNTE5LCJleHAiOjE3NDgzODQxMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.lHVLGW8hAxilmxY-D40Y6bd3Wz4vDdLEMUnxrscvY43VOeinuSkO_4D_3X8-KwDw5ISeVOeksYhzRvLzQKacD3lyRjCF8PKevN00-O-Ag0PJw24afD6ll0yyr_LgS2Pek5fEX_ZRNgZMCRQ7rHwA2o_wA0jtVu5IqzMUkW1KSZ7TDRGepWlU00djMnwb99wVjZucvqq3K6oEMTNII6sZ4-e4LJFDhi5O6HfQycRAE6woVM3D_4Myh-DF1jufxbijUZcDg-X-tRjcZ4LxZPiiKwakl0nKQfEyYBEYQObtJqzSJcyfin-OoDVJYHwpileOvfk7RO2wx6ch0MmzHHD7VQ",
      "refreshToken": "AMf-vBzDBdHx8OMLcy4jN3g4mcmXTHMPC4opzuRGtJ51hCW8_viwZQ_qnjysJtjSk7_sRNDGdFE9fQF5YMJVBGcS942VVyF8RTz_wIH_1KyyF5nuEfu9pQeP-Pobs9C_TkgiVQkf57n-cEEJAZBOgkGr7rDNMfHeWsSclCPs7J_cwKZZJ2KULdyfIxYjMwurmwoksMuuZeGejq8nNwf9GMSzeLn60G5kUYVnh_8C62jJI-rQfheyL-uAH0FQ6WiYponKIitzhC8a",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1003.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/login (385.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748380518775@example.com",
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
    "etag": "W/\"5aa-6Q0eiLermp4VE39c8JOfchdMH9M\"",
    "date": "Tue, 27 May 2025 21:15:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "2OosqYl1VBNdHvqThF32EZSeUzA3",
      "email": "other-org-admin-1748380518775@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxOSwidXNlcl9pZCI6IjJPb3NxWWwxVkJOZEh2cVRoRjMyRVpTZVV6QTMiLCJzdWIiOiIyT29zcVlsMVZCTmRIdnFUaEYzMkVaU2VVekEzIiwiaWF0IjoxNzQ4MzgwNTE5LCJleHAiOjE3NDgzODQxMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.lHVLGW8hAxilmxY-D40Y6bd3Wz4vDdLEMUnxrscvY43VOeinuSkO_4D_3X8-KwDw5ISeVOeksYhzRvLzQKacD3lyRjCF8PKevN00-O-Ag0PJw24afD6ll0yyr_LgS2Pek5fEX_ZRNgZMCRQ7rHwA2o_wA0jtVu5IqzMUkW1KSZ7TDRGepWlU00djMnwb99wVjZucvqq3K6oEMTNII6sZ4-e4LJFDhi5O6HfQycRAE6woVM3D_4Myh-DF1jufxbijUZcDg-X-tRjcZ4LxZPiiKwakl0nKQfEyYBEYQObtJqzSJcyfin-OoDVJYHwpileOvfk7RO2wx6ch0MmzHHD7VQ",
      "refreshToken": "AMf-vBzB2lNGAvXt7kQSlPYWSu8--sRn_Ur308Jex8qFh3ERoMK-a7JtHGRC_qZih6QF6kD_bKa6boeZiydFQtGj4VY4ey6x0w5Ynhtq6bQpWWxA96otbCPj6I6Fbqi98-JFjKUyYLHkQJ5jaXnj3Org0yC-KY2jL7ImczM9DNY4SDTWJ43gWSsLMi2rqTGGdRpSnpIvljAcDjnJASGs-7bcuy6-pXSBPDUBZ8rQICuurAwlpoB4g3GAUIdpZGkH6isvw8vOoV8T",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 385.8 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/organizations (694.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxOSwidXNlcl9pZCI6IjJPb3NxWWwxVkJOZEh2cVRoRjMyRVpTZVV6QTMiLCJzdWIiOiIyT29zcVlsMVZCTmRIdnFUaEYzMkVaU2VVekEzIiwiaWF0IjoxNzQ4MzgwNTE5LCJleHAiOjE3NDgzODQxMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.lHVLGW8hAxilmxY-D40Y6bd3Wz4vDdLEMUnxrscvY43VOeinuSkO_4D_3X8-KwDw5ISeVOeksYhzRvLzQKacD3lyRjCF8PKevN00-O-Ag0PJw24afD6ll0yyr_LgS2Pek5fEX_ZRNgZMCRQ7rHwA2o_wA0jtVu5IqzMUkW1KSZ7TDRGepWlU00djMnwb99wVjZucvqq3K6oEMTNII6sZ4-e4LJFDhi5O6HfQycRAE6woVM3D_4Myh-DF1jufxbijUZcDg-X-tRjcZ4LxZPiiKwakl0nKQfEyYBEYQObtJqzSJcyfin-OoDVJYHwpileOvfk7RO2wx6ch0MmzHHD7VQ"
  },
  "data": {
    "name": "Other Org 1748380520164",
    "description": "Other organization for cross-access test",
    "email": "other-org-1748380520164@example.com"
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
    "etag": "W/\"168-tpH/VZ+V81OHMm5DskmDxOKuHGc\"",
    "date": "Tue, 27 May 2025 21:15:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1eb292ac-3fd2-4765-8fb2-e73408b4356e",
    "name": "Other Org 1748380520164",
    "description": "Other organization for cross-access test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "other-org-1748380520164@example.com",
    "status": "active",
    "createdBy": "2OosqYl1VBNdHvqThF32EZSeUzA3",
    "createdAt": "2025-05-27T21:15:20.789Z",
    "updatedAt": "2025-05-27T21:15:20.789Z"
  }
}
```

**⏱️ Duration:** 694.1 ms  

</details>


---

### Test: Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=1a3e1f2d-7894-4071-bb7f-fafe5173ceea (483.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxOSwidXNlcl9pZCI6IjJPb3NxWWwxVkJOZEh2cVRoRjMyRVpTZVV6QTMiLCJzdWIiOiIyT29zcVlsMVZCTmRIdnFUaEYzMkVaU2VVekEzIiwiaWF0IjoxNzQ4MzgwNTE5LCJleHAiOjE3NDgzODQxMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.lHVLGW8hAxilmxY-D40Y6bd3Wz4vDdLEMUnxrscvY43VOeinuSkO_4D_3X8-KwDw5ISeVOeksYhzRvLzQKacD3lyRjCF8PKevN00-O-Ag0PJw24afD6ll0yyr_LgS2Pek5fEX_ZRNgZMCRQ7rHwA2o_wA0jtVu5IqzMUkW1KSZ7TDRGepWlU00djMnwb99wVjZucvqq3K6oEMTNII6sZ4-e4LJFDhi5O6HfQycRAE6woVM3D_4Myh-DF1jufxbijUZcDg-X-tRjcZ4LxZPiiKwakl0nKQfEyYBEYQObtJqzSJcyfin-OoDVJYHwpileOvfk7RO2wx6ch0MmzHHD7VQ"
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
    "date": "Tue, 27 May 2025 21:15:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "No tienes permisos para ver todas las membresías de la organización"
  }
}
```

**⏱️ Duration:** 483.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (992.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1748380521345@example.com",
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
    "etag": "W/\"5e4-aj2/oQjTSfE5PIdyejXEmYesO58\"",
    "date": "Tue, 27 May 2025 21:15:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "nonR51PjXagdo5wXHTKcfw0tJEC3",
      "email": "cross-org-invite-1748380521345@example.com",
      "name": "Cross Org Invite User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUyMSwidXNlcl9pZCI6Im5vblI1MVBqWGFnZG81d1hIVEtjZncwdEpFQzMiLCJzdWIiOiJub25SNTFQalhhZ2RvNXdYSFRLY2Z3MHRKRUMzIiwiaWF0IjoxNzQ4MzgwNTIxLCJleHAiOjE3NDgzODQxMjEsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ4MzgwNTIxMzQ1QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0ODM4MDUyMTM0NUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.W69WX_aw2-2348yBDXeQ1ILxAPbfrv0yt079P-kpEn-a5moWFppYuqnZNn1O8x5JPWwOaKYRXkOcu9pBZofk8vEHS4LFYbVl79_frjEvRIusp3AiWw6zOE-CD-lzNBfwTx8eT9v-gRalEFij7QzdaEThsKhQ15bPX87nAdtYqbyVu4m-ZQB9TVLwzYYArCYqVX8jhKXx7fJIaTS6mcS_Ff3_1UaH9n0cZGZaJbvp7Afxh9npN0H9ZuyEA3RreffuDdqiNvil6mnlIz4pTMwlq48ND6dL7k0V0Vlq1DVo1L7RNbiLQ40uItHLkfW4BzPqrlfxKe8D-3q5_O56LFUrgQ",
      "refreshToken": "AMf-vBwJJ-HsY_f2CaOtbBIDlPrgYUkhFIZb0FbufU6Rmzg2pHeomxNyh6yOL3zXKaFYL6e6iz-UhqziPqTWN0oNpTJv2Ews6T6ffAWnNj0Qy5s6nkxB64V6W5ODfUWZvxHPDqgqwd2TtQzysBkTZ5oUIdfpxYvvO79Ad00ZIOhoKq5XVWfTGSbr_iZ2i1SiZpbyMdZDZgvPbqzRNpLVqHFXRIa5qsZ3QOFb0L2QoZTabjFrP01IsVanHdc7p6z0hsfgu18uFseo",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 992.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (539.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDUxOSwidXNlcl9pZCI6IjJPb3NxWWwxVkJOZEh2cVRoRjMyRVpTZVV6QTMiLCJzdWIiOiIyT29zcVlsMVZCTmRIdnFUaEYzMkVaU2VVekEzIiwiaWF0IjoxNzQ4MzgwNTE5LCJleHAiOjE3NDgzODQxMTksImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA1MTg3NzVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.lHVLGW8hAxilmxY-D40Y6bd3Wz4vDdLEMUnxrscvY43VOeinuSkO_4D_3X8-KwDw5ISeVOeksYhzRvLzQKacD3lyRjCF8PKevN00-O-Ag0PJw24afD6ll0yyr_LgS2Pek5fEX_ZRNgZMCRQ7rHwA2o_wA0jtVu5IqzMUkW1KSZ7TDRGepWlU00djMnwb99wVjZucvqq3K6oEMTNII6sZ4-e4LJFDhi5O6HfQycRAE6woVM3D_4Myh-DF1jufxbijUZcDg-X-tRjcZ4LxZPiiKwakl0nKQfEyYBEYQObtJqzSJcyfin-OoDVJYHwpileOvfk7RO2wx6ch0MmzHHD7VQ"
  },
  "data": {
    "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
    "userId": "nonR51PjXagdo5wXHTKcfw0tJEC3",
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
    "date": "Tue, 27 May 2025 21:15:22 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 539.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.08s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=1a3e1f2d-7894-4071-bb7f-fafe5173ceea (503.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  }
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
    "content-length": "2301",
    "etag": "W/\"8fd-Fq7Ceq9jJFZb536q8N2pHIcT0gU\"",
    "date": "Tue, 27 May 2025 21:15:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "13d3392f-ee78-4aed-972f-e4f117dffd6d",
      "userId": "glgIlsvWVEToCTchl3xbiQrdxLt2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "member",
      "status": "active",
      "createdAt": "2025-05-27T21:14:55.383Z",
      "updatedAt": "2025-05-27T21:14:55.383Z"
    },
    {
      "id": "f82b8fba-cbe0-4dc2-a54a-e92b3f546aff",
      "userId": "3XXDRZNah4aoB5kdoetacemgMLP2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-05-27T21:14:59.218Z",
      "updatedAt": "2025-05-27T21:14:59.218Z"
    },
    {
      "id": "869d9fc6-d2c2-4f7c-afa9-93b9f1ac086c",
      "userId": "eNtq6sTZD8WV47tv0B13309ffU23",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:15:00.854Z",
      "updatedAt": "2025-05-27T21:15:00.854Z"
    },
    {
      "id": "19b67208-fae5-4583-b022-0ac6b80f375d",
      "userId": "DxpF2F2YC0MJUgU8Jf3CsINySRm2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-05-27T21:15:02.304Z",
      "updatedAt": "2025-05-27T21:15:02.304Z"
    },
    {
      "id": "2b21d75c-8099-46a8-8f61-274e68c54eba",
      "userId": "2pt2bfbEMzXa5KBi5UV08Vj4uDu2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:15:03.825Z",
      "updatedAt": "2025-05-27T21:15:03.825Z"
    },
    {
      "id": "8bbe2814-93cf-4cfb-83e2-975619e3afc5",
      "userId": "VkUdwIUJYrfWy8QvD8jAI0GpJXr2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-05-27T21:15:05.419Z",
      "updatedAt": "2025-05-27T21:15:05.419Z"
    },
    {
      "id": "32706919-ec0f-4df8-8c63-f0b8df41599b",
      "userId": "bLftvaT2VgfJ5AiJuaXTBd02H2K3",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:15:12.632Z",
      "updatedAt": "2025-05-27T21:15:12.632Z"
    },
    {
      "id": "a435cde3-63d4-44ed-aaae-f36b8576b1b9",
      "userId": "XtXJ5pZTmnPTFIlUOHWKLgNDc0M2",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:15:15.091Z",
      "updatedAt": "2025-05-27T21:15:15.091Z"
    },
    {
      "id": "898fb4bf-9663-4ae6-b4ef-a9b1a853b1e8",
      "userId": "vZr1u8ElGZaT3A99SgHVNXFjGQF3",
      "organizationId": "1a3e1f2d-7894-4071-bb7f-fafe5173ceea",
      "role": "member",
      "status": "active",
      "createdAt": "2025-05-27T21:15:17.857Z",
      "updatedAt": "2025-05-27T21:15:17.857Z"
    }
  ]
}
```

**⏱️ Duration:** 503.9 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=1eb292ac-3fd2-4765-8fb2-e73408b4356e (573.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  }
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
    "date": "Tue, 27 May 2025 21:15:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 573.6 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/1eb292ac-3fd2-4765-8fb2-e73408b4356e (1155.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  }
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
    "date": "Tue, 27 May 2025 21:15:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1155.9 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/13d3392f-ee78-4aed-972f-e4f117dffd6d (761.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 761.8 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/f82b8fba-cbe0-4dc2-a54a-e92b3f546aff (680.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 680.9 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/869d9fc6-d2c2-4f7c-afa9-93b9f1ac086c (665.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 665.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/19b67208-fae5-4583-b022-0ac6b80f375d (869.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 869.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/2b21d75c-8099-46a8-8f61-274e68c54eba (711.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 711.4 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/8bbe2814-93cf-4cfb-83e2-975619e3afc5 (703.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 703.8 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/a435cde3-63d4-44ed-aaae-f36b8576b1b9 (711.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
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
    "content-length": "34",
    "etag": "W/\"22-cgngcVifc2gx0Q17TruWCbrUrsE\"",
    "date": "Tue, 27 May 2025 21:15:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Organization not found"
  }
}
```

**⏱️ Duration:** 711.2 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/1a3e1f2d-7894-4071-bb7f-fafe5173ceea (1059.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNDg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA0ODksImV4cCI6MTc0ODM4NDA4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MdEk0QtWtquv6EcvhDx6Vy8XzIy3v0bPd0UYgAMt7ns4uwr_CQ7CJFx7Ovk-W3hV0RVsVFmFDqgdOZ1wNsYKY67of6U9zoGTMdSObEZZet6yc-Bq9M98f78Fm3lv3SEmFGQuHsg1a9qOEX8ATFa8QDPL167Pl1XjXUp4dIXhkCEWwz56ipug5HZcLFMFS0p9z00vPYxT2Sy9rgiiXieEcRcHxm1KWSJADHY8d9SvsgiW_WRZ8GdKZxPglpa48b-0fUzuiksmDo4jGLvQf6rAGwrboxdMNNDPgihMyeY0omjJ_nUb91e5Yohmig214n3JIs61t-9LKO_WEMEPFoi0HA"
  }
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
    "date": "Tue, 27 May 2025 21:15:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1059.1 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (370.3ms)</summary>

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
    "etag": "W/\"640-0km98Gr7RWjBcvLRaQ0O6+HOPD4\"",
    "date": "Tue, 27 May 2025 21:15:31 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTMxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzEsImV4cCI6MTc0ODM4NDEzMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.D19ThiRmdHocZvavsrk47fsKIHUuUG2x7zpZ2EId60GzVebDqc7hAXf7OBuJtaVF100cvitx6y49DhtEOCwoG_ea8lHf-Govo0cmmVJuJRRy8AnCP2iu422lcPjse4d9SOLUezhGlG39MyGADFMM6v6ntrbmSxQRHZvUwBiwUvNI_L2PD7YmgMzqTcp8rLsL99IJi6zZo92PSWxDJpMuZSMwBLdayR4lSYMRIrkM9f2c8Tb2_j5mxFprZldoaSEg8liJaKe9lXf-KR4ZXX2nwZF9gE7RsN90lHudgYazRKa2-eZItOsSsJoOgXvWR01CUJsxzTcvDwDdeUr0Y5b0Ow",
      "refreshToken": "AMf-vBzy6G8PH_xv0LaZl2Q0ixIT3Zh6Dui4OQ-hDNFC4tOLYNkuKbz5ytynMSwWZY5N3J_IURkLet2XGHDZQHAWDvkqBvfk9X6XNrIRc8Zi2Bp3ku6clsG8OLlGSBvtJ-MZ0LuaAY3J3BCAX5nQ0N_9UmbP6_JQVB3b5ii0yN9BXLfPR22nq7ohf5NLjjbsDufzjPD4t5htc2UoWNzSuWrlyxzyBM3eQGw5Dcu4ysGcMhrJN1-zGKrPiPRg7STzlTgDZpgs356k",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 370.3 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/TeoZBHt1odZ94wSJINmfxwwCG1K2 (1906.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTMxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzEsImV4cCI6MTc0ODM4NDEzMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.D19ThiRmdHocZvavsrk47fsKIHUuUG2x7zpZ2EId60GzVebDqc7hAXf7OBuJtaVF100cvitx6y49DhtEOCwoG_ea8lHf-Govo0cmmVJuJRRy8AnCP2iu422lcPjse4d9SOLUezhGlG39MyGADFMM6v6ntrbmSxQRHZvUwBiwUvNI_L2PD7YmgMzqTcp8rLsL99IJi6zZo92PSWxDJpMuZSMwBLdayR4lSYMRIrkM9f2c8Tb2_j5mxFprZldoaSEg8liJaKe9lXf-KR4ZXX2nwZF9gE7RsN90lHudgYazRKa2-eZItOsSsJoOgXvWR01CUJsxzTcvDwDdeUr0Y5b0Ow"
  }
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
    "date": "Tue, 27 May 2025 21:15:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1906.1 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (348.8ms)</summary>

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
    "etag": "W/\"640-wZTWtTBEhA4DQZx7slBKHmkzM1I\"",
    "date": "Tue, 27 May 2025 21:15:33 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTMzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzMsImV4cCI6MTc0ODM4NDEzMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LgyNzSbMaZfpRWarL8gc4PT0nQqm7cJAHw0Uqj7lLh-UnEDEYmYRBkFX5apMFcmEN1hvgT35ATfwE3LCAc8nN5LAC7bh0aqHYmhIoO7Ov3x-JZ183f_wxQcXEv7PcqedfErrDIEFjCUe-g6VYNn6zAWvFC4B1oOibLxYnvjbIrY-wnhD3TQNx0Y4N--qq_2i43Tpsesv2Pdua19ui-Cg8JctkG4UNfDrY18R0nqgUZFFjZPHpGUrgmlhneiHb83y7EmTJnoYs486sLyeoubpJ5n8vDzE6S_Wn1joIuVj7MwgfUVe-LYe874WRw5WDjRSI5KeHPntWNZb-tpllSTN0w",
      "refreshToken": "AMf-vBxVj2HTSAJuym4Wu_pSlYQNSyTLrMcunfjBNZgzgWqNjMHMSdBOzdcg3kDE3qsQIutD6OuXbMzg3iLq5X0T1SyDxvUTpFu7GNy8KK5DkQciQrpnmAJ8-v7UhqAly-SI5ptLKC3LRdOP9CG3iC7aDRbE14zBUE7zVjwt3IRwQ2Omk8TYfV0XDaSPpZa0eegHpJjvOzer-D8R9OyckHihrgx6I-EFUsWK0sItDFldmhDqo-aMPW94ybE936C5X0qPGg1_qNc_",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 348.8 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/glgIlsvWVEToCTchl3xbiQrdxLt2 (1160.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTMzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzMsImV4cCI6MTc0ODM4NDEzMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LgyNzSbMaZfpRWarL8gc4PT0nQqm7cJAHw0Uqj7lLh-UnEDEYmYRBkFX5apMFcmEN1hvgT35ATfwE3LCAc8nN5LAC7bh0aqHYmhIoO7Ov3x-JZ183f_wxQcXEv7PcqedfErrDIEFjCUe-g6VYNn6zAWvFC4B1oOibLxYnvjbIrY-wnhD3TQNx0Y4N--qq_2i43Tpsesv2Pdua19ui-Cg8JctkG4UNfDrY18R0nqgUZFFjZPHpGUrgmlhneiHb83y7EmTJnoYs486sLyeoubpJ5n8vDzE6S_Wn1joIuVj7MwgfUVe-LYe874WRw5WDjRSI5KeHPntWNZb-tpllSTN0w"
  }
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
    "date": "Tue, 27 May 2025 21:15:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1160.9 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (277.7ms)</summary>

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
    "etag": "W/\"640-nIiKr/LU+BP4lhCwJj7GeU5UMu4\"",
    "date": "Tue, 27 May 2025 21:15:35 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTM1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzUsImV4cCI6MTc0ODM4NDEzNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Po-WT6pQA61mFrB-zgfQVb66uK6hV6WhaX-4v7egFg5NeDJvD_7xclaqWSsw_u8HQ6oNEB2aMnCiGbWsic88GLImAnAE_Qdq7rKbBGBTH2PVznZL5uU471CLNAYX99pT2o-Tns442zBcuVFUGi03ACPKFr1QrWt6fhXEP8nK48eze-Z1dWLwoty7bmnwgPxuJxgFMsV3qNatwUvqEdotD1hMKGpqNjaFX86rQQynHznZ4TqhOgBWGF1sQTfDV3Mv3h9D15XQLMkskeq9dpGPAe08VvSuZHkzNjmO7cypkgA7XeUDhMm1TDNvDag3gOLe17ZcfOqd8IjsVOB2-ITi5A",
      "refreshToken": "AMf-vByxb1PLr5SxhKbxmkcAv6QMTGMT2jpenZOfT3y69Gu0YtJJ10AA8yxizUGKd5Ffr7YRnImMCboxV7BnsOPq4y13YsW-T_OISTpJ1udPK9vZGgU1LlRgtH0pYwNX6ZWGJzbfx698glM8PWivtm09g4RIAxu2YjP5p-Mhy9wsW7BGxpyCQDNzuGsxANPx0eKbx0lA6w_NBckUfoWf6-HZnoT6m-nWG-X7aaA5QsdPMQE1l_K84W6wrno5oEG2dSL750dYxXTN",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 277.7 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/rdCjImidjEZD6vyoOCjNIhUdLzr2 (1159.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTM1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzUsImV4cCI6MTc0ODM4NDEzNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Po-WT6pQA61mFrB-zgfQVb66uK6hV6WhaX-4v7egFg5NeDJvD_7xclaqWSsw_u8HQ6oNEB2aMnCiGbWsic88GLImAnAE_Qdq7rKbBGBTH2PVznZL5uU471CLNAYX99pT2o-Tns442zBcuVFUGi03ACPKFr1QrWt6fhXEP8nK48eze-Z1dWLwoty7bmnwgPxuJxgFMsV3qNatwUvqEdotD1hMKGpqNjaFX86rQQynHznZ4TqhOgBWGF1sQTfDV3Mv3h9D15XQLMkskeq9dpGPAe08VvSuZHkzNjmO7cypkgA7XeUDhMm1TDNvDag3gOLe17ZcfOqd8IjsVOB2-ITi5A"
  }
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
    "date": "Tue, 27 May 2025 21:15:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1159.1 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (266.8ms)</summary>

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
    "etag": "W/\"640-dhlbpDtThIId7m5zvFDBLrzEiIs\"",
    "date": "Tue, 27 May 2025 21:15:36 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzYsImV4cCI6MTc0ODM4NDEzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dFuBdVCBdpU1PIoWkjG_0CI2t3BsK9XVSyateDNBLl_c_coGKEtBPrmzmNPRzM7fUNYo94gmoILo1KQDIfT425sSxGhBn-nQvsMYDynu4taTrl_pKSlpk9UTeBUIPyInrEn2tWXfDrPKz1yfJ15L49DFvzd-TMRMA3x6v-17Hh3oy45gb4ur1PBAyPiRdst0-cytXhpqfp-k2FMcQu3e9eTZmKnPax2XGtpuI6ERegfFu1m_8uF91TyBELXPiQ2dLd4ixws7KC54mzJy7DGwGXIqrQbKJ25AKTIaPW_SwSBf3C1W2McHGL19VoFBB9dMZdE9JM4p7CnhTS9j0z83yg",
      "refreshToken": "AMf-vBwR3fGePc-XrVm8Xcma4eHqIJxFUqrZcBxB8Iby0UPdMJjqg7-SwVkZoHENooSAl1RyRos-M4N6Nfy-X6lqmToLuCRN3w9xqE2EFcIjT81KABw7YIAuoQvL2zgl0W-j14ROFrnlRTS017PSOD_nsOyEElHCre-Bv8_B-gnJQ3hns031zcxZYE5cDvd30Yn7aj49lKd-jaBC4cEV_0Ylmc3L91SkrifrZKmZrW6LmQ8EKaxtMw6K4PaHHjdg45g2R23vC018",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 266.8 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/3XXDRZNah4aoB5kdoetacemgMLP2 (1254.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzYsImV4cCI6MTc0ODM4NDEzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dFuBdVCBdpU1PIoWkjG_0CI2t3BsK9XVSyateDNBLl_c_coGKEtBPrmzmNPRzM7fUNYo94gmoILo1KQDIfT425sSxGhBn-nQvsMYDynu4taTrl_pKSlpk9UTeBUIPyInrEn2tWXfDrPKz1yfJ15L49DFvzd-TMRMA3x6v-17Hh3oy45gb4ur1PBAyPiRdst0-cytXhpqfp-k2FMcQu3e9eTZmKnPax2XGtpuI6ERegfFu1m_8uF91TyBELXPiQ2dLd4ixws7KC54mzJy7DGwGXIqrQbKJ25AKTIaPW_SwSBf3C1W2McHGL19VoFBB9dMZdE9JM4p7CnhTS9j0z83yg"
  }
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
    "date": "Tue, 27 May 2025 21:15:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1254.7 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (260.4ms)</summary>

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
    "etag": "W/\"640-n3tbwc/E7GgSSh1ppgVpFJqsBsg\"",
    "date": "Tue, 27 May 2025 21:15:38 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzgsImV4cCI6MTc0ODM4NDEzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IRsPqoOCH3TkG2H6l_P0JIm4eNQ9MXuW-FJpSdj_I_fMSHB8FACSm5T_E4_tobD16uj9ceb-XfV1LdKhfZTnSToXXiOrx8hweUqRXYbTkMVhex5VVs_X4UAPHIYla2dlGiO82FhEzNGnMPAe8tfMFjWcRHrf3NE34qmooiOYf1LvlksthELQXANF-f9gVipir5oTroMK5xmRdK6gjyDNxz7IeGQ2gzR1xoxp_feY3St-CV4deG_F2C4N50nvG-m5M4fYKDHpz5QjRwzFcuqGPMfE5gI-4SuF-pNBBCGjgUVTi6f9d90-fW8RizsJvivhZ500bRe0UFw6flT8lYBrMQ",
      "refreshToken": "AMf-vBzCw8vDZhrYTfeYKGbwsYTC4_Z8ZhjZO5kKeK3TNgrhxwrCI9Svon2qmSDjU7U7mkQhipXYvvI_mJUJoR_jMGn242lHyGeMYT-SM17wKFXt0eGfFqeUFrQs-y7bT5VZ_xE2_O97wN8lbXdkLx6EkrgfEQTCcNswqCgY6DJW1QI1TPSbWBIdRMcSgiDIg_bvXh0FB0uRakJa5hd4RLgjCKaTNPIG0F8vdLFVA27X2AnkKAwsBGzAEkToBmu_mp8IuUd0SSnb",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 260.4 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/eNtq6sTZD8WV47tv0B13309ffU23 (1159.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzgsImV4cCI6MTc0ODM4NDEzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IRsPqoOCH3TkG2H6l_P0JIm4eNQ9MXuW-FJpSdj_I_fMSHB8FACSm5T_E4_tobD16uj9ceb-XfV1LdKhfZTnSToXXiOrx8hweUqRXYbTkMVhex5VVs_X4UAPHIYla2dlGiO82FhEzNGnMPAe8tfMFjWcRHrf3NE34qmooiOYf1LvlksthELQXANF-f9gVipir5oTroMK5xmRdK6gjyDNxz7IeGQ2gzR1xoxp_feY3St-CV4deG_F2C4N50nvG-m5M4fYKDHpz5QjRwzFcuqGPMfE5gI-4SuF-pNBBCGjgUVTi6f9d90-fW8RizsJvivhZ500bRe0UFw6flT8lYBrMQ"
  }
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
    "date": "Tue, 27 May 2025 21:15:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1159.9 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (291.8ms)</summary>

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
    "etag": "W/\"640-iF/iUeF0hj+4aRqJ1GJsgZl18yI\"",
    "date": "Tue, 27 May 2025 21:15:39 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzksImV4cCI6MTc0ODM4NDEzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Tr0-IYXGSgyNCgQ_7p1DDq1BJYFDD5DcDj0IaNT5DdGSD7RwaUivVvvnI_MbKiaTBj1XY9zT9lV889H7DGA3vvk4ibzA-HRJT32W7ITeRXzU7BaS8RMHKdzYbBgA1Zi5S6Ja3ZuNEXNi-VBV7thHq31uzyN_K0on4AAUCKtOGVhlmV2fZJTB9cw4ZXJadcyvUKRBsGKf3nmSXIkyKiBEkR7vk32bidxP1BlEq9KwZ5U0j86j8AHV_4TGvmHTqjJ7UdHYE0mNH8cTFQ90jD-PBQbpuFfd-rTTq92ZvD4I2CInTy_vT2_iBHDPJzKA95mUQKkWgJvcXhnm8bzCk0Al5A",
      "refreshToken": "AMf-vBzd6CoEcRQZpgaT2oRoLqONR87reZoIDUMPC2Uf5m6M8knOcR3T6A8Ic36Gh2ZGuvaEwpke4SgHf1H1LkhNT7VuonhcOX78HwnbrVgh7rR-WrojSexwlHFimF2OG3qIea43qZNsbAtlAP8QE2UOCPchSqty_4L3xSBMV8MEbvyHD2lU1ZnMuMTz1brLK352oiGhptUoxPmPAm5buTMgf0flnQ7Iq3tlpAVr436BoXWooQBMUgNmwBg_aPdKAC63UKoW2tPg",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 291.8 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/DxpF2F2YC0MJUgU8Jf3CsINySRm2 (1145.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1MzksImV4cCI6MTc0ODM4NDEzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Tr0-IYXGSgyNCgQ_7p1DDq1BJYFDD5DcDj0IaNT5DdGSD7RwaUivVvvnI_MbKiaTBj1XY9zT9lV889H7DGA3vvk4ibzA-HRJT32W7ITeRXzU7BaS8RMHKdzYbBgA1Zi5S6Ja3ZuNEXNi-VBV7thHq31uzyN_K0on4AAUCKtOGVhlmV2fZJTB9cw4ZXJadcyvUKRBsGKf3nmSXIkyKiBEkR7vk32bidxP1BlEq9KwZ5U0j86j8AHV_4TGvmHTqjJ7UdHYE0mNH8cTFQ90jD-PBQbpuFfd-rTTq92ZvD4I2CInTy_vT2_iBHDPJzKA95mUQKkWgJvcXhnm8bzCk0Al5A"
  }
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
    "date": "Tue, 27 May 2025 21:15:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1145.3 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (287.7ms)</summary>

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
    "etag": "W/\"640-NAyH7tzewn/NY7qMLpYS1rXMWfA\"",
    "date": "Tue, 27 May 2025 21:15:41 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDEsImV4cCI6MTc0ODM4NDE0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UkCuaeeDptEr8oDmzsIyBgAzRmJTj7yAsrrcc_36U9jN-1X9BOVGUDejNEHXF9B3xIuhmNsCpMGwhyRrtrjF29cB0aMs2tIgz0LpyYa61fBgcd707yiwFedIHP8yMHALS_3MNFJCrDRsMjNYBJaoJ_vP1jUBVSl7Ex6iCCZewvTAgZLMgvum2yPh1yRVGtpMWHg0NURyfrQzblVjSuf7IwWpZ6juMdj4Cjggr6JVLmij-ByZ8YcaJZBJ_DDyrVipuFY14eg0Ph2SxNIDc-r9ybCAcWNTJWTDV3_bI4CfEKCWJOeYoymD7-oo1cy_AhEzfbRaDas-3ecbX0UbQIZJHQ",
      "refreshToken": "AMf-vBy0Mh9y2cvoKHtFCm5n-TnNe4hJX-yG7mWEQ4EtD3zld7qjP7-FvML0WNfgGzMV52WQbSFogaqgWs-qzd7sAWIgPCZXlE0H_jR7lDak18UORh2opkfod9ItRZulhgLmGMzOyL75I62c-Cse7shPi_SncCrnx1dDHCul4kHBAvhtibj9Zt9sLmkdpWUH6WyqwTk5lg93lOqCAjyDQa5rNs3NOHDwIqwzyoCRjUB7xLjbmZlWZBKcDLP5SUpeR8F6-RCH1qwS",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 287.7 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/2pt2bfbEMzXa5KBi5UV08Vj4uDu2 (1179.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDEsImV4cCI6MTc0ODM4NDE0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UkCuaeeDptEr8oDmzsIyBgAzRmJTj7yAsrrcc_36U9jN-1X9BOVGUDejNEHXF9B3xIuhmNsCpMGwhyRrtrjF29cB0aMs2tIgz0LpyYa61fBgcd707yiwFedIHP8yMHALS_3MNFJCrDRsMjNYBJaoJ_vP1jUBVSl7Ex6iCCZewvTAgZLMgvum2yPh1yRVGtpMWHg0NURyfrQzblVjSuf7IwWpZ6juMdj4Cjggr6JVLmij-ByZ8YcaJZBJ_DDyrVipuFY14eg0Ph2SxNIDc-r9ybCAcWNTJWTDV3_bI4CfEKCWJOeYoymD7-oo1cy_AhEzfbRaDas-3ecbX0UbQIZJHQ"
  }
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
    "date": "Tue, 27 May 2025 21:15:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1179.5 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (353.9ms)</summary>

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
    "etag": "W/\"640-wNPP251xk2l0NOQeWmo+8kc/YO8\"",
    "date": "Tue, 27 May 2025 21:15:42 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDIsImV4cCI6MTc0ODM4NDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cfl2v675GggLFndDuy_rHfM1Z9Q-7gfjhEyQhemMxLNEI_6La89f3i24QDSXregzc9Jaz1l2V7JWDfDGFPmBRwMp9auRbvjgCsULjnhGTy7jVUwcaKBFEKSpHvQ-vqS6s6XW2uffONRL0YxpnFcc66KqDh2lKfWp60kUgf4WT6R2td0GYMRiOqhwUUmWWeKwFRF_Etx5C6520JaFAOvSF9QiNrqYB_5WQww7qSpYAtxFZg046aeDHH_MSyU-fhCi-Fpa7Ch10bZxIv4giTtCfBxkc4vDDZME_EGqEWuA89aqSMD5-mLVFXY0WGlvqu45rIZMvFfZwo2b6qEvXQDntA",
      "refreshToken": "AMf-vBxFnDhon1Sdmsvf0ccJp7QDUfR7SjtrMXfk0K8u-Bg5ul1Tpk_VXFuk4HdI989g2MDV_XEOFRgd2nFafLtoDKkyvDzeZgToQb3TNitNOaoUap_He5ZQDtOqWiGz1X61T2nNKo7SrkhScgc7E2Dx-PyhszuMNg2eWMikoovW1Ote34zOQQ_a6yZyqJUtK8I0ZsXoGx9KG9JuYK_Oon68TJAi_iku1djgeb48IOwkXx9eBlx_v6W26fImPar1F5qnvmC0fXck",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 353.9 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/VkUdwIUJYrfWy8QvD8jAI0GpJXr2 (1193.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDIsImV4cCI6MTc0ODM4NDE0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.cfl2v675GggLFndDuy_rHfM1Z9Q-7gfjhEyQhemMxLNEI_6La89f3i24QDSXregzc9Jaz1l2V7JWDfDGFPmBRwMp9auRbvjgCsULjnhGTy7jVUwcaKBFEKSpHvQ-vqS6s6XW2uffONRL0YxpnFcc66KqDh2lKfWp60kUgf4WT6R2td0GYMRiOqhwUUmWWeKwFRF_Etx5C6520JaFAOvSF9QiNrqYB_5WQww7qSpYAtxFZg046aeDHH_MSyU-fhCi-Fpa7Ch10bZxIv4giTtCfBxkc4vDDZME_EGqEWuA89aqSMD5-mLVFXY0WGlvqu45rIZMvFfZwo2b6qEvXQDntA"
  }
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
    "date": "Tue, 27 May 2025 21:15:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1193.2 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (343.1ms)</summary>

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
    "etag": "W/\"640-k+s97pRFA/wXoX/jxYAV9JP36Bg\"",
    "date": "Tue, 27 May 2025 21:15:44 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDQsImV4cCI6MTc0ODM4NDE0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WjyuLMTJi0VySbmhMsr5J1Dwi9P0ZaSqUgVHFrIKwcSlLpS3zvs8CDBp9nY0vLDkEpkRwWlxOxEs8HH7O2G3867lW61IJpZ3PXD8ggg7GEmwkB4QscB6wNng7hEyIGPlj6sG9g73BrvQ8kEylKJjB-cikW8DpOHUP7cc2C46908BvLyfbF2DQ-O_enk8ogWfbY1sJloT8j13ihNK1hYCSEY4J2_TLMaqEdDWC3JRRAZao5O_nrumppnOD8IhRuqJzJeONTOnTymg6zv-QcZvJs8WIICfaFqkpp2iYAhF5um4UY79zS0OacQHyiJhTfRx7pr1EWt7qS9pbJaxJN2Ilg",
      "refreshToken": "AMf-vBwJB38e3rIXNunvLBhL3seAGAzLCvxRwrkbMQ3LFs_ISdcaKPO0qK2CqcR1W6zzXtdBC5XUULencYBL7FxzQkbrEndedxTl2wwtrM1CPWIn2VnmWsdX8oe09eRj9w5zGURIqmr4d2BOiOus0WpgX2XT-rGbiCrpkQFOKy-DH9J1q51W3tv0ENVrEVwDs7flgFJRBkPc8ZTael11W2mqUNw3Q7vm-hDWQXqsYwUQHcpXNUtaQ_XaPsVCxpTFCiKrAF-MS7UO",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 343.1 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/bLftvaT2VgfJ5AiJuaXTBd02H2K3 (1161.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDQsImV4cCI6MTc0ODM4NDE0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WjyuLMTJi0VySbmhMsr5J1Dwi9P0ZaSqUgVHFrIKwcSlLpS3zvs8CDBp9nY0vLDkEpkRwWlxOxEs8HH7O2G3867lW61IJpZ3PXD8ggg7GEmwkB4QscB6wNng7hEyIGPlj6sG9g73BrvQ8kEylKJjB-cikW8DpOHUP7cc2C46908BvLyfbF2DQ-O_enk8ogWfbY1sJloT8j13ihNK1hYCSEY4J2_TLMaqEdDWC3JRRAZao5O_nrumppnOD8IhRuqJzJeONTOnTymg6zv-QcZvJs8WIICfaFqkpp2iYAhF5um4UY79zS0OacQHyiJhTfRx7pr1EWt7qS9pbJaxJN2Ilg"
  }
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
    "date": "Tue, 27 May 2025 21:15:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1161.4 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (259.1ms)</summary>

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
    "etag": "W/\"640-HCfSaetkzo3oEXEs4pgFgLc2YK0\"",
    "date": "Tue, 27 May 2025 21:15:45 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDUsImV4cCI6MTc0ODM4NDE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OfUQ9sPCZjN8DYQBpk99DC6CXTG4G9-8gLcmj3dkIG_l-xkB8MG-6CbgOWTvXM6-PJ9iKJORqw3tN7k-BoLaIVp8Z8XseXv7Hl9ThhSj0GWFvfKKlezC4UC8gcLfvfWC6GOQoULSMpNncnUTYYo1WP2JHISOzaZ9_VCp_OlbCYN6GubhjluakVbNcNzknuj6exihWaioaYghSzdFuS3K-Mo_weHzoOtecxTV5T6jm4lnkF10aH8RPj6ce6ze9kl6LIuulVABUgNKcbPoy-OFxPuSuop9r4e9h0k7T8jDo7oTyVxowrZzO1r3zijuSDVA37eDIwhEvPbWQk15NqndgA",
      "refreshToken": "AMf-vByYqq2zUjUQqGUKKlItti7IZytEqIl3MQxgqQaMQKc6rWEPFP3VbC1sEpbl2xeHdpB8Nyrrv0D-W_ziwCeojGBVRdAmfcCViEuobGmj4Mr7W2lymJxiBSMx23m8hs2UTvdHO-qQC3LzOzB9aQ4K-zrvHFVLweIAKxIH7SFRebp-YXdJBKcim_37EJGzS8TNeGLFWh9fyZrXhEPTNx77uFDGquvgVNTE4K5BwwTLXU1G6kzRZBpLJzVyNiIIIBOd-or5kAaM",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 259.1 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/XtXJ5pZTmnPTFIlUOHWKLgNDc0M2 (1157.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDUsImV4cCI6MTc0ODM4NDE0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OfUQ9sPCZjN8DYQBpk99DC6CXTG4G9-8gLcmj3dkIG_l-xkB8MG-6CbgOWTvXM6-PJ9iKJORqw3tN7k-BoLaIVp8Z8XseXv7Hl9ThhSj0GWFvfKKlezC4UC8gcLfvfWC6GOQoULSMpNncnUTYYo1WP2JHISOzaZ9_VCp_OlbCYN6GubhjluakVbNcNzknuj6exihWaioaYghSzdFuS3K-Mo_weHzoOtecxTV5T6jm4lnkF10aH8RPj6ce6ze9kl6LIuulVABUgNKcbPoy-OFxPuSuop9r4e9h0k7T8jDo7oTyVxowrZzO1r3zijuSDVA37eDIwhEvPbWQk15NqndgA"
  }
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
    "date": "Tue, 27 May 2025 21:15:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1157.9 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (286.4ms)</summary>

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
    "etag": "W/\"640-bdZ1DJA9DSVMX54g/24ppofzRNo\"",
    "date": "Tue, 27 May 2025 21:15:47 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDcsImV4cCI6MTc0ODM4NDE0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hVSv0SWOlQ7-b2DVlAHHiaHs9SOS9TtKomCyTaQDFd4dn-H2-5wNbIeZHRH_ZZEEo_0fCjjC8DI0SNgPehCODzEua0r9Ghh8_bNCsag84YZNxXIEXSebzRfYEl9Jzmibxxq3-8gMF0tOptktwAcKMFpckR-ZT4earECZVQ2GYTeRTjh3f_YmVezApf5FRusNX2cOHYjI0TpNhUoShTuPGt3_OXmMn6spHNs2ygNmL72n9h2057VfcMV9mzI7GHfHIfjNEnQs_pdRAzN6C2qyrZN3qm42Okoo7LwwO967Chgyk70qLs7RWQ7jLGFxzN1mWh_A4zKQ6jgkIQ8YdtOHCg",
      "refreshToken": "AMf-vBwYEL6WCS891reIW0B91kQxZa_OVm80tO2ZsRqfCF5wE7Q3I7axt1jYYJ5yhQIh8fyWvIr8p5gSmrpXFOEeyy2Ubzeo9L6br8AcBNk0Y7__mpb-qxs3vcO4AVwNS6RhGLp-zCsgJXOpNvgpEhDI9TutgAZuY4n77yr0oH1q-KjtxsulPKaf72nIpdPC2Ftg6s7-K29LgWi8mfXuRkW9DdKx1cOzhnD10LI0xcluIIr1a0GWbBDjbzJHmas5K30JSiEEgX3R",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 286.4 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/vZr1u8ElGZaT3A99SgHVNXFjGQF3 (1069.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDcsImV4cCI6MTc0ODM4NDE0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hVSv0SWOlQ7-b2DVlAHHiaHs9SOS9TtKomCyTaQDFd4dn-H2-5wNbIeZHRH_ZZEEo_0fCjjC8DI0SNgPehCODzEua0r9Ghh8_bNCsag84YZNxXIEXSebzRfYEl9Jzmibxxq3-8gMF0tOptktwAcKMFpckR-ZT4earECZVQ2GYTeRTjh3f_YmVezApf5FRusNX2cOHYjI0TpNhUoShTuPGt3_OXmMn6spHNs2ygNmL72n9h2057VfcMV9mzI7GHfHIfjNEnQs_pdRAzN6C2qyrZN3qm42Okoo7LwwO967Chgyk70qLs7RWQ7jLGFxzN1mWh_A4zKQ6jgkIQ8YdtOHCg"
  }
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
    "date": "Tue, 27 May 2025 21:15:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1069.6 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (362.5ms)</summary>

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
    "etag": "W/\"640-lPCFKZA7S+2IlFoMGp4wHTcqc3o\"",
    "date": "Tue, 27 May 2025 21:15:48 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDgsImV4cCI6MTc0ODM4NDE0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SiU4dTiIiwGPCp_l6vKcuoYL5PKj32hO3Zrw7bfg2gwxupNnAkm3UpPP0u2TlSn_l67q32C_I8LVfiszaBGeEmQFV163jufcbiuGY3vH6HigQEq-eAeqxnGQIdr0Bb5cK8PFoCyo2bqfbUqqQHQA0FbYdNkTli5agcUU1tQKev2pHGU77M8FiKkdudJdErwjM3eGIO_TP5GePHEfm8mwklAogdX-3lahI3wSR_ntj4V7zFc8wPeR5wXNTNLQKPMZpziXzLv6AaXB97qizFB7wCdNLCLbza1xnpjXxneswNVWdwE3zfgzdE__hQXFqJ2on9BbfOfZ8x9qX4DHPq24kA",
      "refreshToken": "AMf-vByJBQvD2u6x_jF9xsSKxYDoeBQATTPiuGwgg0OMxX4M6R3r0VaaLvMFSW14g0wn6Fk043EdwuqwRecS8_O9c2CVsPLtiUWeiVwPkixSZ6IeoMq3ueeuMobtY1LpBWTtfQf6rKNDGE_G54s8kZm3eYsbGbtSGhCjq0uQkIzwxrIG4dE6tWwO6u5P5RlF2GV8QXtmXefr_qB0ow-sTr6exXg4_a1JhHGjVXRsNfTwdv1kLSkucHTRAjPLWuD5J91MqW5yaTWB",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 362.5 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/2OosqYl1VBNdHvqThF32EZSeUzA3 (1162.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDgsImV4cCI6MTc0ODM4NDE0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SiU4dTiIiwGPCp_l6vKcuoYL5PKj32hO3Zrw7bfg2gwxupNnAkm3UpPP0u2TlSn_l67q32C_I8LVfiszaBGeEmQFV163jufcbiuGY3vH6HigQEq-eAeqxnGQIdr0Bb5cK8PFoCyo2bqfbUqqQHQA0FbYdNkTli5agcUU1tQKev2pHGU77M8FiKkdudJdErwjM3eGIO_TP5GePHEfm8mwklAogdX-3lahI3wSR_ntj4V7zFc8wPeR5wXNTNLQKPMZpziXzLv6AaXB97qizFB7wCdNLCLbza1xnpjXxneswNVWdwE3zfgzdE__hQXFqJ2on9BbfOfZ8x9qX4DHPq24kA"
  }
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
    "date": "Tue, 27 May 2025 21:15:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1162.2 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (369.8ms)</summary>

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
    "etag": "W/\"640-iIOerDYKPmmZXXiYRhaONZrFfvU\"",
    "date": "Tue, 27 May 2025 21:15:50 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDksImV4cCI6MTc0ODM4NDE0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WE_Iap0NvgHbNUj4re9PaKLeDdpHRZaTYkX4xf3nN5qdgXMbyOaIfYsLXxzLf4O4m3xYBn7-6W7mxz11jOnLAUfC9jpxmIxPsqEvs5bEylOxKa0_cblJDKevcnudDdDQ8k71k3JiYdOwHbWw_OsYc8bYreNzCpGM-AVYNluvXmONQZTaxwp8GnAfwDuvooVIoaNkL2PROQu0EzZjxdwyqKDOJpPK1Dnud1kT_p2WYVGVSM1JeZJfVGGqVaqNCCA-R8xFUhnOHes3VihEgfqQC2nzMfEy0zVlMyK80s81WHN8_6hLzgXUoatGxPGzEtBNfYJvJNZ7CwGVhWoCKL_VCw",
      "refreshToken": "AMf-vBwtCJwkYcJoua7R_G-mvf0hZyDRY2uAOJ09WXzVsvfaIm19wOVnmy3zvis5rrmBYHM2jvseyYOBQab7TOEeWjlnPd4jxYRCYSGui5WkhMnzYOxd5Pes5ol4q-g-XLfzFNLK7tNh6KwFK8t_UtVDyCkJtvP8TBVkZCbYgibjQv71R9wWv2o8oKODL52CaF8Ay0TiC5Ksd3-mTMDIzeESrExYaMWRAdUNcVKti7cVfGBmrTTmXT4xRIGRR8tYfEQtkW_fnpv2",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 369.8 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/nonR51PjXagdo5wXHTKcfw0tJEC3 (1323.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNTQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA1NDksImV4cCI6MTc0ODM4NDE0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WE_Iap0NvgHbNUj4re9PaKLeDdpHRZaTYkX4xf3nN5qdgXMbyOaIfYsLXxzLf4O4m3xYBn7-6W7mxz11jOnLAUfC9jpxmIxPsqEvs5bEylOxKa0_cblJDKevcnudDdDQ8k71k3JiYdOwHbWw_OsYc8bYreNzCpGM-AVYNluvXmONQZTaxwp8GnAfwDuvooVIoaNkL2PROQu0EzZjxdwyqKDOJpPK1Dnud1kT_p2WYVGVSM1JeZJfVGGqVaqNCCA-R8xFUhnOHes3VihEgfqQC2nzMfEy0zVlMyK80s81WHN8_6hLzgXUoatGxPGzEtBNfYJvJNZ7CwGVhWoCKL_VCw"
  }
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
    "date": "Tue, 27 May 2025 21:15:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1323.4 ms  

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
- Test organization: Test Org for Memberships 1748380492346
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
