# E2E Test Report: memberships-tests

**Date:** 5/27/2025  
**Time:** 11:19:17 PM  
**Duration:** 58.54s  
**Tests:** 20 total, 19 passed, 1 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.68s | Admin should invite user to organization successfully |
| ✅ Should fail to invite same user twice | PASSED | 0.53s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.45s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 8.05s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.61s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.50s | Admin should get memberships by user |
| ✅ User should get their own memberships | PASSED | 0.46s | User should get their own memberships |
| ✅ Should fail without userId or organizationId | PASSED | 0.36s | Should fail without userId or organizationId |
| ✅ Regular user should fail to get other user memberships | PASSED | 0.39s | Regular user should fail to get other user memberships |
| ✅ Admin should get membership by ID | PASSED | 0.52s | Admin should get membership by ID |
| ✅ Should fail with invalid membership ID | PASSED | 0.45s | Should fail with invalid membership ID |
| ❌ Admin should update member role successfully | FAILED | 0.62s | Admin should update member role successfully |
| ✅ Should fail with invalid role | PASSED | 0.78s | Should fail with invalid role |
| ✅ Regular user should fail to update role without permissions | PASSED | 0.54s | Regular user should fail to update role without permissions |
| ✅ Admin should remove member successfully | PASSED | 0.97s | Admin should remove member successfully |
| ✅ Regular user should fail to remove member without permissions | PASSED | 2.31s | Regular user should fail to remove member without permissions |
| ✅ User should be able to leave organization (remove own membership) | PASSED | 1.05s | User should be able to leave organization (remove own membership) |
| ✅ Organization admin should not access memberships from other organizations | PASSED | 0.50s | Organization admin should not access memberships from other organizations |
| ✅ Organization admin should not invite users to other organizations | PASSED | 1.42s | Organization admin should not invite users to other organizations |
| ✅ Super admin should access all organizations | PASSED | 0.98s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.68s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (678.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "ej42r8BHFYZI9LTMcgpFvbC3vlR2",
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
    "etag": "W/\"fd-g8mQPwh0SrBVpq50aeEht8GIIUo\"",
    "date": "Tue, 27 May 2025 21:18:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b",
    "userId": "ej42r8BHFYZI9LTMcgpFvbC3vlR2",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:18:24.274Z",
    "updatedAt": "2025-05-27T21:18:24.274Z"
  }
}
```

**⏱️ Duration:** 678.1 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (527.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "ej42r8BHFYZI9LTMcgpFvbC3vlR2",
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
    "date": "Tue, 27 May 2025 21:18:24 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error inviting user",
    "details": "User is already a member of this organization"
  }
}
```

**⏱️ Duration:** 527.0 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (965.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1748380704922@example.com",
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
    "etag": "W/\"5dc-OeWGGOnl5xiRNkigj7W/R5fogwI\"",
    "date": "Tue, 27 May 2025 21:18:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "IHtANcGibrfsC0NjLFxo5q5hO0j2",
      "email": "no-perm-invite-1748380704922@example.com",
      "name": "No Permission Invite",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcwNSwidXNlcl9pZCI6IklIdEFOY0dpYnJmc0MwTmpMRnhvNXE1aE8wajIiLCJzdWIiOiJJSHRBTmNHaWJyZnNDME5qTEZ4bzVxNWhPMGoyIiwiaWF0IjoxNzQ4MzgwNzA1LCJleHAiOjE3NDgzODQzMDUsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0ODM4MDcwNDkyMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ4MzgwNzA0OTIyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.NGv7fghLn1ziCp7IWQJkp62cWd1s72Mci3hInL5x-VQu5AZGJUSnsCFpLsyyJzOOspehMQPbUnqyPPy9tutCzPM4qPSwEbDYuzg5IVA50RmqntlZV-iICszDFqaw4IcnESi6k2rP31szjxcy26DPar_EPAyWsZjyg6uTQikyth4znnnli7bfPatxQY9r8JPnmEIh535rQhYkAFpIZ33bX0PafXFRzjm7PC11LPnQ-Kaa8kv7GeJjHthHVSeJtH4utFpLvoa-M5cwKgDs9El37G2mXTV_ovNvaaxpLytsDcdvFBH-zM8L0kgazBAxOPWev7Zh1rmLFOHvgEdvc1XoTQ",
      "refreshToken": "AMf-vBw9Rl4EFslZojks7_F2RT-oDqBbbgLGvQCgPwLcvw8SEQ3v1aS6fsc-sxqkCC4UoN78VAibBMLiE2YcZkIen_jXt5VuoABOf6f9w60M-SORFvg2RgJ0CC2TSY9MAMzwrWaN8v6XSLs6k32ykx5BFetLJH74Xh1PPofHTQqsF8yiYLo3hOJCi4ysvii3rE_xekcV-evkEE127MXebnLdLWBLgl3UaWR8zfSM5o-Qk83IxVvGS3lnCoo_HYiTYjTjlN6VseeR",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 965.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (488.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcwMSwidXNlcl9pZCI6IldFNFlPY0dDUmJNcW9MMjMyTU0xb09VeHZYaDEiLCJzdWIiOiJXRTRZT2NHQ1JiTXFvTDIzMk1NMW9PVXh2WGgxIiwiaWF0IjoxNzQ4MzgwNzAxLCJleHAiOjE3NDgzODQzMDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDY5OTgzMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNjk5ODMxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.T9zlL77_Az7RMMcGo210bMibuAZq01FSLAYh_4vr_3D0DQEqGQLND79upEqOTRiBhW2DtuQclWP7DI8xBl-vGgEwyh4dzXQjY8ZDryqDIzVFS4gg2JOYAgjJjoVypdaBM3u0IzHsXKlnRRoub0IwrRNDYr0u3ls7Hw8LFg-q1KYsceW-fCV0GbC8hky9aFgkGGIAIEHvZ06NOrjQ9gYjBfe2OPSOLGIXDhDKAdIR108D-2nkuT7ElQmvSfMgpcPvzU5hQ6Az0Ym-uCAy4up7g1ELCtJ-u2M7y_5wiEFLbNu4NcfO_RkFQ5lHJKBNM36AawAwEsLHqFCsCRS9aUsOMA"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "IHtANcGibrfsC0NjLFxo5q5hO0j2",
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
    "date": "Tue, 27 May 2025 21:18:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 488.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 8.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1111.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1748380706378@example.com",
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
    "etag": "W/\"5ae-CGLO8gkU4fbAtWdoAk9mQtd6ZlA\"",
    "date": "Tue, 27 May 2025 21:18:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "7iM71VItJlMJcpZBh2oHkdCHx0w1",
      "email": "admin-user-1748380706378@example.com",
      "name": "Admin User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcwNiwidXNlcl9pZCI6IjdpTTcxVkl0SmxNSmNwWkJoMm9Ia2RDSHgwdzEiLCJzdWIiOiI3aU03MVZJdEpsTUpjcFpCaDJvSGtkQ0h4MHcxIiwiaWF0IjoxNzQ4MzgwNzA2LCJleHAiOjE3NDgzODQzMDYsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ4MzgwNzA2Mzc4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0ODM4MDcwNjM3OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mvPMYTGTE44-1mywjFlW9iLQonHvXXuMnIsT22-Z_ioR8g8q7vyqOQe6Ri0sR82DQ9vg-XJnGlYyKL1Ni9J_pJh63SNsV-MWBsMETeT3gG5LNBZYpwyQB_jtLZ3H-d66H0ZuPJDiTrlkV9iUy3wo-JNSP_iDzKykzdvIon6lXb1LENOrSB8yE-UEIk4lxUhv5xOYlOldkRoEmsWzQBozhqJSky1npopUUSYD9Z63fz9X68l2jYrj4J27T8WvV1dOpk_kWlWhzjXmNSuvRV4o7P48RRmzxDhq7PxuECtLXl0i_rgge4LYoCFZtdtbO9Y7HrApvkhsJNFVsOdxcde0ng",
      "refreshToken": "AMf-vBzdj1GaItbUGowhL4Iyl42tFMZ8Kvv0lKpPbi3QvaiJHU2IQBk2en5i7aCTPxswyyW0SbKXcMOaZr__2YQN9S8R5zH9RbYdqmdRzz18k--EnjDrhgFGYDVWOSz5gBMYN6Ak3xx2_Ac7WbMrN0nKlMO52B7n-IHH-1CyzO6yWmDf3OiwyeptZ-8f29EplE0F948rW3nmz6Qxa2dka-cL653-sCAAiL4NHDYexw_3Yrh-k7OIpaI",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1111.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (593.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "7iM71VItJlMJcpZBh2oHkdCHx0w1",
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
    "etag": "W/\"fc-OwiAaeojXkeDo2eXNhyVSNn7av4\"",
    "date": "Tue, 27 May 2025 21:18:28 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "43b91132-f3b1-4530-a508-2ff13ae49a6d",
    "userId": "7iM71VItJlMJcpZBh2oHkdCHx0w1",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-05-27T21:18:28.013Z",
    "updatedAt": "2025-05-27T21:18:28.013Z"
  }
}
```

**⏱️ Duration:** 593.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1043.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1748380708083@example.com",
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
    "etag": "W/\"5b8-aL+/XI4BeqKGyKAv/GqT4QGJ4rY\"",
    "date": "Tue, 27 May 2025 21:18:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "ekLqaQKPWFVkmxonukVqoZu3CNw1",
      "email": "manager-user-1748380708083@example.com",
      "name": "Manager User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcwOCwidXNlcl9pZCI6ImVrTHFhUUtQV0ZWa214b251a1Zxb1p1M0NOdzEiLCJzdWIiOiJla0xxYVFLUFdGVmtteG9udWtWcW9adTNDTncxIiwiaWF0IjoxNzQ4MzgwNzA4LCJleHAiOjE3NDgzODQzMDgsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDgzODA3MDgwODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDgzODA3MDgwODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cXaKXdQy82QX-u5JLgWtxwYZb5CKarcmwT2trKnkjAHuXBVJ5mNyuY4DiBZPH4bbE9KGn4bai-CZVz6Z_VMdWgETqzBTjFW9BkFFqgzoCUmwke1IJBYOV33l7Cw1N-rCHmfGloddWypC7XeMq6-XazWNqKqWfGvqf46fM6fDcOPSijLk3Wy2O2w4cfNvE_Q8hp42VN6LIwJDEK_p25_FkQyTFJEmrw7ZXGMdMEbnL2W9DQnfCHG9CBT3-8pDXlxK-RllZEKSIjcOtcF8qslMJ-38ZgwUhFALMNqH7DJaTm3UXJW4o3xtfNUly8a1xsqzshibJbRrPk3Mvx0JbBhoFQ",
      "refreshToken": "AMf-vBy027KR0TjLXoeh3ETNizakFFEyYk2VCNXry-UD-giG2Swl3fe7tWRPgPLQQOfloSAzQrlpyKSQqTF4kLXhyQBY4BNtmoqjJrbC5-Js5Gdp8WzZras2kKkVjPIQZhLRDiLgFSug23VP5pVcDDzCjFN8rzcojDmXJcsVULdTe-GXkKXzCwk4rZHn2plec2SY6emwCWImoVMrabFhBV8BrzyM_8wPmyMfdoPFx5E8dPCwc8X3N0o",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1043.0 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (581.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "ekLqaQKPWFVkmxonukVqoZu3CNw1",
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
    "etag": "W/\"fe-ANP31RmFxoLjXSiJ5Xz/+EStRO4\"",
    "date": "Tue, 27 May 2025 21:18:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "cdd77631-327f-4beb-be95-ed3833cba13a",
    "userId": "ekLqaQKPWFVkmxonukVqoZu3CNw1",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-05-27T21:18:29.647Z",
    "updatedAt": "2025-05-27T21:18:29.647Z"
  }
}
```

**⏱️ Duration:** 581.4 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (956.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1748380709708@example.com",
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
    "etag": "W/\"5d6-V74PMRookHEfUX4jXawuRMou7n4\"",
    "date": "Tue, 27 May 2025 21:18:30 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "2SCUDAQsZOgfTeTL7h3hq3KXt942",
      "email": "moderator-user-1748380709708@example.com",
      "name": "Moderator User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcxMCwidXNlcl9pZCI6IjJTQ1VEQVFzWk9nZlRlVEw3aDNocTNLWHQ5NDIiLCJzdWIiOiIyU0NVREFRc1pPZ2ZUZVRMN2gzaHEzS1h0OTQyIiwiaWF0IjoxNzQ4MzgwNzEwLCJleHAiOjE3NDgzODQzMTAsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0ODM4MDcwOTcwOEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ4MzgwNzA5NzA4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.KV4jcKyZvzorH7e4L0Z7l92aLzVdktD8BJGC6uyBI86KxRd7Wa5MPANSk04KRGQr2rmd1MqwJxSBKOZ7hIhH4jkpLKZS7vwD-N6d5Dowc6A9y1mPuxLMzKZbdbrcfGGuQif5To92xItBFPt3Nsv1mQqvS5xzuD-8jDAEd5VIpXP4Nucyg1U_T6X4JIK9Br7uZOj6PKN0p-o0ZpIKBzJYWy7TMYKR8fk0CbWXDpENxstpY6cHMLT19yRxFD_TJ1aaD7oHi-2WZ02Yq2IMd4EA-IM8soOnxkqLhrQz8zJ4aHTiwDvU_oGC_MMx_riZZ7pN-Xh5LrIzlBiWbGr9PEVYTA",
      "refreshToken": "AMf-vBz9uS8J8ohXuR_sRtnpmLiFXViC76PKKpOJgOtg7NjCAXIqgU9DaMRhvRJC-14LOdqHEzPKHr9FEj96XW6480QEjciPIiuIDKxqoGDcB-EsX2Ez1-xQgqs7fr1v-PkdH-Dh7zL1amQMeC0ekYihWYMkD7dzx--XvYdMs3DT_YLDX21dYg9PdAneEy_OtbpHnJBizAZafzQ_Lca96a20hlnLgGd6KgI4519bSd-sY4EQmX76HTzhmh1cdpI9DbiGNR0gXRd6",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 956.3 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (575.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "2SCUDAQsZOgfTeTL7h3hq3KXt942",
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
    "etag": "W/\"100-xxsVTr/34ygooW3k12cFv5nO7dI\"",
    "date": "Tue, 27 May 2025 21:18:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "dc17c90c-d426-4306-969b-f30de5439829",
    "userId": "2SCUDAQsZOgfTeTL7h3hq3KXt942",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "moderator",
    "status": "active",
    "createdAt": "2025-05-27T21:18:31.177Z",
    "updatedAt": "2025-05-27T21:18:31.177Z"
  }
}
```

**⏱️ Duration:** 575.5 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1062.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1748380711240@example.com",
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
    "etag": "W/\"5d6-8MDyzAHNIBIHbbqiCM83XETv4hQ\"",
    "date": "Tue, 27 May 2025 21:18:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "q5xwE1x1UbRN5JW7g82e6sywK8F3",
      "email": "volunteer-user-1748380711240@example.com",
      "name": "Volunteer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcxMSwidXNlcl9pZCI6InE1eHdFMXgxVWJSTjVKVzdnODJlNnN5d0s4RjMiLCJzdWIiOiJxNXh3RTF4MVViUk41Slc3ZzgyZTZzeXdLOEYzIiwiaWF0IjoxNzQ4MzgwNzExLCJleHAiOjE3NDgzODQzMTEsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0ODM4MDcxMTI0MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ4MzgwNzExMjQwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ADv_pBXZuH2-tirnT9c_f6sCqkIDFaFpLd8BuZWpSuIhVssVsMcXYA6-gw2w5QgBcgTfFsHbJQJNbAiCaH9TDnxxbCvKOv6CaX0DiBCDJRFlkbBgPBjcOfZa0GJtLQ-waWPssmG7mjjw2YFL8-0OvblbAzXA1tVxTH31CgANLkuuLcvcCKWv7wfm6D3DouCojQ54cSTdQ_zDA8Oj11xqCXIQWoHsqXoRWt-kSI8j8c8AcaxoiZP1c7d1mMZm2Gzaz5bHgtrwZ9bSdrMY0-umJcsf-6KHhxmkn65UiEhJh3eh_tmd6JEdqYquFA00dZQWDEUfLv05eW3gPzAACxrcGg",
      "refreshToken": "AMf-vBzhQjmpIIkqZqc9yU1t04VxqB38Fz7om_iuxIqUH0o0ApltNrm0NrpJQV9VkvlOIHgsS0yzAxRJWwCySlCIYM_8zebht6Nw7may84BqJqqoCHZI5fJbiCPjlcxpbsPHoid4HbFIDZAtoV2SMtm5ciVwlMQuBju7wK41IT7wOEUhg8fs68UhFiJ_InsrYyys33Ev78biH-j9Nzc8GxWMStxo7EA9NIB_fHFY_dZIAf1CXVsfPYEUijMiiooHA35zqveKFm3u",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1062.0 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (473.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "q5xwE1x1UbRN5JW7g82e6sywK8F3",
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
    "etag": "W/\"100-NCIW9bBe5kCfWx+/2H3gK6LBpGw\"",
    "date": "Tue, 27 May 2025 21:18:32 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "894d0b72-96b9-4d6d-ac00-b4eec5ef23e0",
    "userId": "q5xwE1x1UbRN5JW7g82e6sywK8F3",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:18:32.714Z",
    "updatedAt": "2025-05-27T21:18:32.714Z"
  }
}
```

**⏱️ Duration:** 473.4 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1062.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1748380712776@example.com",
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
    "etag": "W/\"5bc-U8rqajMn3yCZwoXhobFXdqaoTUE\"",
    "date": "Tue, 27 May 2025 21:18:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "PvgcHczsvAeBZv8b6ZhBByNJe9D3",
      "email": "observer-user-1748380712776@example.com",
      "name": "Observer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcxMywidXNlcl9pZCI6IlB2Z2NIY3pzdkFlQlp2OGI2WmhCQnlOSmU5RDMiLCJzdWIiOiJQdmdjSGN6c3ZBZUJadjhiNlpoQkJ5TkplOUQzIiwiaWF0IjoxNzQ4MzgwNzEzLCJleHAiOjE3NDgzODQzMTMsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ4MzgwNzEyNzc2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0ODM4MDcxMjc3NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.A-SZuxYT-pNOfGZVTw0cc0jLrHzjb4HPs3EAbck9_CdrxdON49oF2pq15Lzrz2_9ATpPyopvvLQcbZxgnsSwrcTD42H6k70rA2gYYrXp8nz3NJoKb7390M6ETc1E2nTj_1atc0IodvdAftfvXEgwVsyuYTpdkKjdGE42YLsBkmy5Q_RzpbxnRav3ZH1-ZooRCjC3BnFepMQObpDOpmnWCTXL6e9X2Tepm6iCpoMtRbLhSe1Dq2AJHXpONylFIAHB1Gs2qtRdhVG5BuFPhutVq49K9x3us0eboIdE8SjAh7TY3Z3tejodUf2uYbS0aQgSWMQXBKcxhS7t5QS9cG1O0w",
      "refreshToken": "AMf-vBwrdtHI2bdvaF_j2k4lF2g3LjXbk0wIg7j2SDbka0RKcu_KzJNgO6MyondX-OpcgP4Vi_SxjzWLhgDF_Z7034Oco7-PbXrRkVt-wExC3Whgrtfw_tfcsDgeAFU5EOlu3FEj3mwQPBZOLKOP3H7lK5kTvqs-F0GTadfvKzbpUJwK-gaPXEkrqhY_rta33DTCkzvtjMhYAAEDWJYw7xJed0UvTbdzYBKWtKUCgaYfhfOlly8Fp3g",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1062.7 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (585.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "PvgcHczsvAeBZv8b6ZhBByNJe9D3",
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
    "etag": "W/\"ff-d+ATZ4j8QC9Rga36xt+FuoPGKHs\"",
    "date": "Tue, 27 May 2025 21:18:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b3350f34-eddd-4c0e-90ea-48bc6b77e3a3",
    "userId": "PvgcHczsvAeBZv8b6ZhBByNJe9D3",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "observer",
    "status": "active",
    "createdAt": "2025-05-27T21:18:34.354Z",
    "updatedAt": "2025-05-27T21:18:34.354Z"
  }
}
```

**⏱️ Duration:** 585.8 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=f52fb458-8930-4a7a-a08d-c73a073c9d73 (602.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "etag": "W/\"5fd-CpIaMv9e18AKMmNTFzzuBlQVGWI\"",
    "date": "Tue, 27 May 2025 21:18:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b",
      "userId": "ej42r8BHFYZI9LTMcgpFvbC3vlR2",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "member",
      "status": "active",
      "createdAt": "2025-05-27T21:18:24.274Z",
      "updatedAt": "2025-05-27T21:18:24.274Z"
    },
    {
      "id": "43b91132-f3b1-4530-a508-2ff13ae49a6d",
      "userId": "7iM71VItJlMJcpZBh2oHkdCHx0w1",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-05-27T21:18:28.013Z",
      "updatedAt": "2025-05-27T21:18:28.013Z"
    },
    {
      "id": "cdd77631-327f-4beb-be95-ed3833cba13a",
      "userId": "ekLqaQKPWFVkmxonukVqoZu3CNw1",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:18:29.647Z",
      "updatedAt": "2025-05-27T21:18:29.647Z"
    },
    {
      "id": "dc17c90c-d426-4306-969b-f30de5439829",
      "userId": "2SCUDAQsZOgfTeTL7h3hq3KXt942",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-05-27T21:18:31.177Z",
      "updatedAt": "2025-05-27T21:18:31.177Z"
    },
    {
      "id": "894d0b72-96b9-4d6d-ac00-b4eec5ef23e0",
      "userId": "q5xwE1x1UbRN5JW7g82e6sywK8F3",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:18:32.714Z",
      "updatedAt": "2025-05-27T21:18:32.714Z"
    },
    {
      "id": "b3350f34-eddd-4c0e-90ea-48bc6b77e3a3",
      "userId": "PvgcHczsvAeBZv8b6ZhBByNJe9D3",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-05-27T21:18:34.354Z",
      "updatedAt": "2025-05-27T21:18:34.354Z"
    }
  ]
}
```

**⏱️ Duration:** 602.3 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (503.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 503.2 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=WE4YOcGCRbMqoL232MM1oOUxvXh1 (457.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcwMSwidXNlcl9pZCI6IldFNFlPY0dDUmJNcW9MMjMyTU0xb09VeHZYaDEiLCJzdWIiOiJXRTRZT2NHQ1JiTXFvTDIzMk1NMW9PVXh2WGgxIiwiaWF0IjoxNzQ4MzgwNzAxLCJleHAiOjE3NDgzODQzMDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDY5OTgzMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNjk5ODMxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.T9zlL77_Az7RMMcGo210bMibuAZq01FSLAYh_4vr_3D0DQEqGQLND79upEqOTRiBhW2DtuQclWP7DI8xBl-vGgEwyh4dzXQjY8ZDryqDIzVFS4gg2JOYAgjJjoVypdaBM3u0IzHsXKlnRRoub0IwrRNDYr0u3ls7Hw8LFg-q1KYsceW-fCV0GbC8hky9aFgkGGIAIEHvZ06NOrjQ9gYjBfe2OPSOLGIXDhDKAdIR108D-2nkuT7ElQmvSfMgpcPvzU5hQ6Az0Ym-uCAy4up7g1ELCtJ-u2M7y_5wiEFLbNu4NcfO_RkFQ5lHJKBNM36AawAwEsLHqFCsCRS9aUsOMA"
  }
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
    "date": "Tue, 27 May 2025 21:18:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 457.0 ms  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.36s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (363.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
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
    "date": "Tue, 27 May 2025 21:18:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Either userId or organizationId must be provided"
  }
}
```

**⏱️ Duration:** 363.5 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (393.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcwMSwidXNlcl9pZCI6IldFNFlPY0dDUmJNcW9MMjMyTU0xb09VeHZYaDEiLCJzdWIiOiJXRTRZT2NHQ1JiTXFvTDIzMk1NMW9PVXh2WGgxIiwiaWF0IjoxNzQ4MzgwNzAxLCJleHAiOjE3NDgzODQzMDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDY5OTgzMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNjk5ODMxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.T9zlL77_Az7RMMcGo210bMibuAZq01FSLAYh_4vr_3D0DQEqGQLND79upEqOTRiBhW2DtuQclWP7DI8xBl-vGgEwyh4dzXQjY8ZDryqDIzVFS4gg2JOYAgjJjoVypdaBM3u0IzHsXKlnRRoub0IwrRNDYr0u3ls7Hw8LFg-q1KYsceW-fCV0GbC8hky9aFgkGGIAIEHvZ06NOrjQ9gYjBfe2OPSOLGIXDhDKAdIR108D-2nkuT7ElQmvSfMgpcPvzU5hQ6Az0Ym-uCAy4up7g1ELCtJ-u2M7y_5wiEFLbNu4NcfO_RkFQ5lHJKBNM36AawAwEsLHqFCsCRS9aUsOMA"
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
    "date": "Tue, 27 May 2025 21:18:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You can only view your own memberships"
  }
}
```

**⏱️ Duration:** 393.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b (523.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "etag": "W/\"fd-g8mQPwh0SrBVpq50aeEht8GIIUo\"",
    "date": "Tue, 27 May 2025 21:18:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b",
    "userId": "ej42r8BHFYZI9LTMcgpFvbC3vlR2",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:18:24.274Z",
    "updatedAt": "2025-05-27T21:18:24.274Z"
  }
}
```

**⏱️ Duration:** 523.4 ms  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (448.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
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
    "date": "Tue, 27 May 2025 21:18:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 448.1 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Admin should update member role successfully
**Status:** ❌ FAILED  
**Duration:** 0.62s  
**Error:** Request failed with status code 500  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b (615.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "role": "manager"
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
    "content-length": "1245",
    "etag": "W/\"4dd-0IVmcsDi8s7/yqUUAjMDh8cFSu0\"",
    "date": "Tue, 27 May 2025 21:18:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error updating membership",
    "details": "\nInvalid `prisma.membership.update()` invocation in\n/Users/daniellovazzano/Documents/Projects/pet-api-firebase/backend/models/prisma/membershipModel.js:83:55\n\n  80  */\n  81 exports.updateMembership = async (id, membershipData) => {\n  82   try {\n→ 83     const updatedMembership = await prisma.membership.update({\n           where: {\n             id: \"036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b\"\n           },\n           data: {\n             role: \"manager\",\n             permissions: [\n             ~~~~~~~~~~~\n               \"create_pet\",\n               \"edit_pet\",\n               \"delete_pet\",\n               \"invite_member\"\n             ],\n             updatedAt: new Date(\"2025-05-27T21:18:38.341Z\"),\n         ?   id?: String | StringFieldUpdateOperationsInput,\n         ?   status?: String | StringFieldUpdateOperationsInput,\n         ?   createdAt?: DateTime | DateTimeFieldUpdateOperationsInput,\n         ?   user?: UserUpdateOneRequiredWithoutMembershipsNestedInput,\n         ?   organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput\n           }\n         })\n\nUnknown argument `permissions`. Available options are marked with ?."
  }
}
```

**⏱️ Duration:** 615.6 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.78s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b (779.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
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
    "date": "Tue, 27 May 2025 21:18:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid role"
  }
}
```

**⏱️ Duration:** 779.0 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b (535.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcwMSwidXNlcl9pZCI6IldFNFlPY0dDUmJNcW9MMjMyTU0xb09VeHZYaDEiLCJzdWIiOiJXRTRZT2NHQ1JiTXFvTDIzMk1NMW9PVXh2WGgxIiwiaWF0IjoxNzQ4MzgwNzAxLCJleHAiOjE3NDgzODQzMDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDY5OTgzMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNjk5ODMxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.T9zlL77_Az7RMMcGo210bMibuAZq01FSLAYh_4vr_3D0DQEqGQLND79upEqOTRiBhW2DtuQclWP7DI8xBl-vGgEwyh4dzXQjY8ZDryqDIzVFS4gg2JOYAgjJjoVypdaBM3u0IzHsXKlnRRoub0IwrRNDYr0u3ls7Hw8LFg-q1KYsceW-fCV0GbC8hky9aFgkGGIAIEHvZ06NOrjQ9gYjBfe2OPSOLGIXDhDKAdIR108D-2nkuT7ElQmvSfMgpcPvzU5hQ6Az0Ym-uCAy4up7g1ELCtJ-u2M7y_5wiEFLbNu4NcfO_RkFQ5lHJKBNM36AawAwEsLHqFCsCRS9aUsOMA"
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
    "date": "Tue, 27 May 2025 21:18:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can modify roles."
  }
}
```

**⏱️ Duration:** 535.5 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (967.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1748380719682@example.com",
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
    "etag": "W/\"5b8-595TWGfZG66iwhVC9mNC0lj1oSY\"",
    "date": "Tue, 27 May 2025 21:18:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "qfyh2iqCpjR0iJ1oXGwf7FlmJPl1",
      "email": "remove-user-1748380719682@example.com",
      "name": "User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcxOSwidXNlcl9pZCI6InFmeWgyaXFDcGpSMGlKMW9YR3dmN0ZsbUpQbDEiLCJzdWIiOiJxZnloMmlxQ3BqUjBpSjFvWEd3ZjdGbG1KUGwxIiwiaWF0IjoxNzQ4MzgwNzE5LCJleHAiOjE3NDgzODQzMTksImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0ODM4MDcxOTY4MkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ4MzgwNzE5NjgyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.UbS57UoB2ptjtAMMrpfuHSeo1HiTRro1yQulP12az2S9E8z76JQlVZUvrqeClMYmWH87GRqMFWqFwGoiKJIF42iCgMOx-1NjXgiA16NV0E6OKKYOhFvxg-M8I6umqxt9AYF8VpNM2BP3sQOADVbcLSjbAJGiGK35FT_EQlEL_JiCOTh_pGeJwKuZ7wS1OEARA5yauhVG8x7u00vW9IpScOzFLCaodfTgejrOpN9GZMSul7Vq1C9DpjEDBv7E6Gu8tTi_RsE7Ti2sckLL9ttKlPJrnnWiuDTUB4w6t0OJ5T-GN_RsU1sb_KQMhvhNBvcBteYBstbuNjRwxLHFSHiR1g",
      "refreshToken": "AMf-vBzd2YLTqU8I-Cwj2Yr4S64GRIF2KLhd3Q8MC32kaqP1nzCCboK54g7bEKVlr4EAykStCUeJqJju-HK5gWkL0Nyb5yI_0hN9OPEgPupWX63LmuMe5UyM-bKXQDaVTTV_U5-NOjW7RmxiD4tuHgBdtY606GooRRgI3ehuti4dT72vEQV83iMjhdLqgBWjcqzYD_VN0PVK8IyTxFGWfg7URXbawhag9hA11VpbywNA83ZM92hU2SQ",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 967.7 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (517.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "qfyh2iqCpjR0iJ1oXGwf7FlmJPl1",
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
    "etag": "W/\"100-4GpQ487aQXDTsmFt53xJ54x6lGk\"",
    "date": "Tue, 27 May 2025 21:18:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "54cd968d-7c4d-4399-a2aa-603c79483f71",
    "userId": "qfyh2iqCpjR0iJ1oXGwf7FlmJPl1",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:18:41.108Z",
    "updatedAt": "2025-05-27T21:18:41.108Z"
  }
}
```

**⏱️ Duration:** 517.9 ms  

</details>


---

### Test: Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 0.97s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/54cd968d-7c4d-4399-a2aa-603c79483f71 (537.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 537.4 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/54cd968d-7c4d-4399-a2aa-603c79483f71 (431.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
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
    "date": "Tue, 27 May 2025 21:18:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 431.6 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.31s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1014.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1748380722142@example.com",
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
    "etag": "W/\"5f2-mkkiGg9HcxOpDoUxPinqFkKG+E4\"",
    "date": "Tue, 27 May 2025 21:18:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "iO5gSbhVGCaQ6cDc3vyZPMIRGLf2",
      "email": "another-remove-user-1748380722142@example.com",
      "name": "Another User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyMiwidXNlcl9pZCI6ImlPNWdTYmhWR0NhUTZjRGMzdnlaUE1JUkdMZjIiLCJzdWIiOiJpTzVnU2JoVkdDYVE2Y0RjM3Z5WlBNSVJHTGYyIiwiaWF0IjoxNzQ4MzgwNzIyLCJleHAiOjE3NDgzODQzMjIsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ4MzgwNzIyMTQyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0ODM4MDcyMjE0MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YCCjl6_pdli8fPcUOoyuPSsGc5zz-fwA1e9lrPHBQgdrAqoJwXxlXqjaNHIoTWo_iix8EW6WgxhQ80I-k3gwJ8OZ-Gi0GmfP78gu1DVYb41fNL0JNmR07cMRTvOY3ViGE3YzQ7IAngfYMN66Lo_D6nfO8NQgqz05bqCjlrBQvWdDY8QFRB5Lts5P-d-VxqIACMnHuGw42MPv3fyW8WFQx7f5fK7rngmOsbNtaUqRUh4ZmkoJ7uSM6aQa4T7nuahc-W6v9Ndu2XlIu6eIMMHqvJ-VVG2uhkom_iOjivI-T2h7J1t83qG34DuJD7PofHhY7rzIzTkbo7nF7QlXQ_eUNQ",
      "refreshToken": "AMf-vBxwHfxb-yLwdokVSFtoJZHCyXFumicavG9QnXQIZCryvocDm6KhfJS_1RzYv1dCz0QB5nFlD94EvIKalwtOefoxXrad_IBYI4KKFPC6gbQkAIFRCuoNM_0o_Ae_Ih_o58ykuwREdiexi_aXD_p4PnhCruWN-37HhLK83ufIfQnochH6OWFk_OyIg81Bg1wrAk9Qap2FHNT9AC6JWA3v2CKSesWPl0iCNrcnuAyaWqGJuA1atRrwnlnBZdw4Fmr6gTNcvkcT",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1014.3 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (778.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "iO5gSbhVGCaQ6cDc3vyZPMIRGLf2",
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
    "etag": "W/\"100-wH/gcGmiAYsqwI/SaD4N3uLITfE\"",
    "date": "Tue, 27 May 2025 21:18:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "b69ca67a-3d3d-4d00-8c37-dcbabcc64f82",
    "userId": "iO5gSbhVGCaQ6cDc3vyZPMIRGLf2",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:18:43.876Z",
    "updatedAt": "2025-05-27T21:18:43.876Z"
  }
}
```

**⏱️ Duration:** 778.2 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/b69ca67a-3d3d-4d00-8c37-dcbabcc64f82 (511.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcwMSwidXNlcl9pZCI6IldFNFlPY0dDUmJNcW9MMjMyTU0xb09VeHZYaDEiLCJzdWIiOiJXRTRZT2NHQ1JiTXFvTDIzMk1NMW9PVXh2WGgxIiwiaWF0IjoxNzQ4MzgwNzAxLCJleHAiOjE3NDgzODQzMDEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDY5OTgzMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwNjk5ODMxQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.T9zlL77_Az7RMMcGo210bMibuAZq01FSLAYh_4vr_3D0DQEqGQLND79upEqOTRiBhW2DtuQclWP7DI8xBl-vGgEwyh4dzXQjY8ZDryqDIzVFS4gg2JOYAgjJjoVypdaBM3u0IzHsXKlnRRoub0IwrRNDYr0u3ls7Hw8LFg-q1KYsceW-fCV0GbC8hky9aFgkGGIAIEHvZ06NOrjQ9gYjBfe2OPSOLGIXDhDKAdIR108D-2nkuT7ElQmvSfMgpcPvzU5hQ6Az0Ym-uCAy4up7g1ELCtJ-u2M7y_5wiEFLbNu4NcfO_RkFQ5lHJKBNM36AawAwEsLHqFCsCRS9aUsOMA"
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
    "date": "Tue, 27 May 2025 21:18:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can remove members."
  }
}
```

**⏱️ Duration:** 511.8 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (901.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748380724447@example.com",
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
    "etag": "W/\"5db-uRCNzfEA1crRMB0yBDnAuXdRqx0\"",
    "date": "Tue, 27 May 2025 21:18:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "0rqLGbIdesZHPUKe9h5dGDEFSvF3",
      "email": "self-leave-user-1748380724447@example.com",
      "name": "Self Leave User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyNCwidXNlcl9pZCI6IjBycUxHYklkZXNaSFBVS2U5aDVkR0RFRlN2RjMiLCJzdWIiOiIwcnFMR2JJZGVzWkhQVUtlOWg1ZEdERUZTdkYzIiwiaWF0IjoxNzQ4MzgwNzI0LCJleHAiOjE3NDgzODQzMjQsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA3MjQ0NDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA3MjQ0NDdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.cTshkxckYJLiGXvC6_UBjtUQpFq82C3fkT5H-qOKsXqcz6Pj1dbPYLNTDeVYAt6Efp0H0_aJoHUNx1TezxAzy-aga8_jtyr8puf4O2ivIPFp7xR5ioPRMq4kDI2bhSeT9xUoAy_pnOEd-d2YQpn-Ej9h8kOBOoPsgVgQZudB9pJFcMwvIQ7xCGiYFrjhl_fanIV_-hmkBU8gDngykTXpqJXPq13T65ZV76HZHPzeKdylkti9CPf0xen6PRqkIWRNM49yCgp9nFBBqF54TWYNW7tU8PwD8SPj9MBQlT_9qg6uVrWg2_2Pfvzo0e6VlD8piBOBcmRSDy85kzAT6iGWyg",
      "refreshToken": "AMf-vBxrX4uCp4OA_h1fS4sV2j55CJaFTSej2yRFWsYRX_1jyJ6ia1_Oqxrk3v6uIoAJmjOC1lKGtMyJuJtbtYDjOakxVRKzMV50pIyQtp7ukedwcszUrGnbsUoZRNLQp-RXKg_xgKE9mogcAmtc7F8yK8xMAsLfziGPycPVYkIzwDeA7iRHmA4BwX4erSpY-A4loYKGitwNXNgUG7VCbTXfUFEqffa7jK92x6N_KO1-OJ2QWbwenTWFlCKtR2YW9j4LoiJaJYFw",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 901.3 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (337.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748380724447@example.com",
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
    "etag": "W/\"5aa-dADSXZt8c4sA7zgTjDeoMwg+6lU\"",
    "date": "Tue, 27 May 2025 21:18:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "0rqLGbIdesZHPUKe9h5dGDEFSvF3",
      "email": "self-leave-user-1748380724447@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyNSwidXNlcl9pZCI6IjBycUxHYklkZXNaSFBVS2U5aDVkR0RFRlN2RjMiLCJzdWIiOiIwcnFMR2JJZGVzWkhQVUtlOWg1ZEdERUZTdkYzIiwiaWF0IjoxNzQ4MzgwNzI1LCJleHAiOjE3NDgzODQzMjUsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA3MjQ0NDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA3MjQ0NDdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fWSnB6SOerKuO3zx5m7K-Mq0uPLPR_ZZTH309GlpWY0OotrkApBFB5GXnMnqSDe3SSpiqgbvXGq8q6Vxu-hTSkmc459X2HtsMIr7zRvEnGrAVe-m-ukKlL2_PTF4Yr7UEkpSWH9nW0xUcXjNxf976ryqvICwM-Sunmhn9P80dUIm8MGNPeJiJS0HG8Vy-6YEsbPGKiI8vB1SJw2sKh7AK5TRsKmUa9tAqdWI2FxxikEQZ_VhCW8TH_YsPibU2266U4Jn99-iYdilA7M6WYDHS49-1T1GySVuSpSMP4xG3wtECkia6K6de5F6OgVxzuR40Rnb6CnjDnNPQu_OJ7ryTA",
      "refreshToken": "AMf-vBw6p2QFDq8IhOw_NEl5r41le-vZq5uT0CD7qQF53EvRFNxf-Y8fwKFcVvID3qe3fwQq8_8mCheuF_8TawqHeGbtCbnwuRx42cSiyOwO5kPwt6DEallVGiVnd8h8iw9kTaXwo2z8yct54BYdIXnhbHAMjNrn0-a4tH9FGsKrNZTLnKkdeLssh8pdKRDUD0APzXpLlYLcAHnk5YjX0WwNOf8ECM7Gn7Xo6t8J-dh9Fbewew55fMXeS7C8QdUERRSnk7sAolfM",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 337.4 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (541.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "0rqLGbIdesZHPUKe9h5dGDEFSvF3",
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
    "etag": "W/\"fd-eYWnMXMuS8zZWxuWIIWEjmi+4nw\"",
    "date": "Tue, 27 May 2025 21:18:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "bf114af8-1182-4077-b5bb-0f13dab1ff4a",
    "userId": "0rqLGbIdesZHPUKe9h5dGDEFSvF3",
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:18:46.167Z",
    "updatedAt": "2025-05-27T21:18:46.167Z"
  }
}
```

**⏱️ Duration:** 541.0 ms  

</details>


---

### Test: User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/bf114af8-1182-4077-b5bb-0f13dab1ff4a (563.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyNSwidXNlcl9pZCI6IjBycUxHYklkZXNaSFBVS2U5aDVkR0RFRlN2RjMiLCJzdWIiOiIwcnFMR2JJZGVzWkhQVUtlOWg1ZEdERUZTdkYzIiwiaWF0IjoxNzQ4MzgwNzI1LCJleHAiOjE3NDgzODQzMjUsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA3MjQ0NDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDgzODA3MjQ0NDdAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fWSnB6SOerKuO3zx5m7K-Mq0uPLPR_ZZTH309GlpWY0OotrkApBFB5GXnMnqSDe3SSpiqgbvXGq8q6Vxu-hTSkmc459X2HtsMIr7zRvEnGrAVe-m-ukKlL2_PTF4Yr7UEkpSWH9nW0xUcXjNxf976ryqvICwM-Sunmhn9P80dUIm8MGNPeJiJS0HG8Vy-6YEsbPGKiI8vB1SJw2sKh7AK5TRsKmUa9tAqdWI2FxxikEQZ_VhCW8TH_YsPibU2266U4Jn99-iYdilA7M6WYDHS49-1T1GySVuSpSMP4xG3wtECkia6K6de5F6OgVxzuR40Rnb6CnjDnNPQu_OJ7ryTA"
  }
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
    "date": "Tue, 27 May 2025 21:18:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "You have left the organization successfully"
  }
}
```

**⏱️ Duration:** 563.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/bf114af8-1182-4077-b5bb-0f13dab1ff4a (487.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
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
    "date": "Tue, 27 May 2025 21:18:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 487.9 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (942.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748380727283@example.com",
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
    "etag": "W/\"5db-J+wFVA3+1zaOe7rmT3buqE0NnFI\"",
    "date": "Tue, 27 May 2025 21:18:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "wSpSzDkHz5NR6EwMGyv1CbuSBfq2",
      "email": "other-org-admin-1748380727283@example.com",
      "name": "Other Org Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyNywidXNlcl9pZCI6IndTcFN6RGtIejVOUjZFd01HeXYxQ2J1U0JmcTIiLCJzdWIiOiJ3U3BTekRrSHo1TlI2RXdNR3l2MUNidVNCZnEyIiwiaWF0IjoxNzQ4MzgwNzI3LCJleHAiOjE3NDgzODQzMjcsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.eSjfGGpVLQWeUeDzcccP-Rsznx3MHIsXtsnLc52lHzZR7joGHNbLqZNjSicJJB_6N9jrMx2B9fOQ4cONdjHD9kz4UHDTqxSUQxAFbZUTLk7hlvdybWDUqgLxkYVHNBnZC7oA0Su2T6NuGPULBBfob5X-CDYYjw3o8Tvih7EyRT7Jm8Oqwmt-Iq9odzBpn9xg4GHGBW5xuzZoW-Osnoc4HcsRTFiJkgk0nFUN_e4B7qvBexM04ahoKNmQHnr5hAr8AQu0k0DLpcY1vljyIET6O_3R9nIoe5navynpnMwkja7XaiLHiC8kaufy1kB-K-2g66GESXh3ASlDuFgqxQeLFg",
      "refreshToken": "AMf-vByxwJ32XE0Rz7U4RKkbkG71_2ILveYlB_t00GCEHoFkKWVsFohldxUTSmKH2-hTVitU-etRomvn6ZInM4tQVmXh46N5aCprS0KDttdlzAbh_ktoJ0jgEmn6nZ_BpeJRPFGef8nXPkJJTogtcQZx-HfY3pZ3UhrRfDHYzpNjJwUR4yXy4C22s2CMFQtwEdwr7zWNfzdWM1ms5NiBMRr0LZ4_7j6c1k--AUUNL7MBrWNWO9djzlRQTxLHPFOmVUwIDsGJhiRb",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 942.4 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (310.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748380727283@example.com",
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
    "etag": "W/\"5aa-te/BjrQ7MviKn1boRCZIEaXg3yc\"",
    "date": "Tue, 27 May 2025 21:18:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "wSpSzDkHz5NR6EwMGyv1CbuSBfq2",
      "email": "other-org-admin-1748380727283@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyOCwidXNlcl9pZCI6IndTcFN6RGtIejVOUjZFd01HeXYxQ2J1U0JmcTIiLCJzdWIiOiJ3U3BTekRrSHo1TlI2RXdNR3l2MUNidVNCZnEyIiwiaWF0IjoxNzQ4MzgwNzI4LCJleHAiOjE3NDgzODQzMjgsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NoRYqeIV5lz13faNpOykGromIHdqq5LTgVmQCVgzAAn5WTNBob9MQYASMMScvYjkfNVh8xjfcmeuNSnw3tIBWTlMp-r5g-mIzaIlnzNCvgZnIla8MBvChqepkWkBWFp2LNDqM6-S9q3xZ7vaeVm89neP5d3k7Z0-aBMtpVZ28C-Yg4YGtBNwIpSA1dfx-IPHDqDETn57tn9NIpLmYX2xaHxloXJLzQP_05hqtPRNwqbB8F_tl9ynY1cml0extiolWl3RTQ1YJ8HxFQZex060NdeBtHbvPXdwB8KPdtKQtuXigTJ05t9TEAUfTBvT64uyXNoEakEeaaZ0PiyKPkjRBg",
      "refreshToken": "AMf-vBxR-MHgD8LzfoHfjwhT0eRNecELlQOgI6qprLeDqj8tdRSvZaEoA3YiZlHdVXGn7bn8xDMF_5p1XvaM8gFu6gylWsxc2hSpWmczFbGp3p9zEngqwNmATsyRcjw2qFPxw3LbPa3Ubpsj4cn-NmeRuahCGxxcVQgZrjSfFiSs1rSa-cdsi3SndmvHe9cSPXD2uyp6wl0M4rZYCVESBnQyCtK9oFEQUN7TuSWDwby90ID7blxBQn8VugoIQvkCzWvLPmsQ8a70",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 310.3 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (682.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyOCwidXNlcl9pZCI6IndTcFN6RGtIejVOUjZFd01HeXYxQ2J1U0JmcTIiLCJzdWIiOiJ3U3BTekRrSHo1TlI2RXdNR3l2MUNidVNCZnEyIiwiaWF0IjoxNzQ4MzgwNzI4LCJleHAiOjE3NDgzODQzMjgsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NoRYqeIV5lz13faNpOykGromIHdqq5LTgVmQCVgzAAn5WTNBob9MQYASMMScvYjkfNVh8xjfcmeuNSnw3tIBWTlMp-r5g-mIzaIlnzNCvgZnIla8MBvChqepkWkBWFp2LNDqM6-S9q3xZ7vaeVm89neP5d3k7Z0-aBMtpVZ28C-Yg4YGtBNwIpSA1dfx-IPHDqDETn57tn9NIpLmYX2xaHxloXJLzQP_05hqtPRNwqbB8F_tl9ynY1cml0extiolWl3RTQ1YJ8HxFQZex060NdeBtHbvPXdwB8KPdtKQtuXigTJ05t9TEAUfTBvT64uyXNoEakEeaaZ0PiyKPkjRBg"
  },
  "data": {
    "name": "Other Org 1748380728536",
    "description": "Other organization for cross-access test",
    "email": "other-org-1748380728536@example.com"
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
    "etag": "W/\"168-WHCptFFJA6d3OAGXUcmuqx0ugys\"",
    "date": "Tue, 27 May 2025 21:18:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "5a3b63d9-57ee-431a-aa3a-e78c70ff8fb4",
    "name": "Other Org 1748380728536",
    "description": "Other organization for cross-access test",
    "logo": null,
    "address": null,
    "phone": null,
    "email": "other-org-1748380728536@example.com",
    "status": "active",
    "createdBy": "wSpSzDkHz5NR6EwMGyv1CbuSBfq2",
    "createdAt": "2025-05-27T21:18:49.103Z",
    "updatedAt": "2025-05-27T21:18:49.103Z"
  }
}
```

**⏱️ Duration:** 682.0 ms  

</details>


---

### Test: Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=f52fb458-8930-4a7a-a08d-c73a073c9d73 (499.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyOCwidXNlcl9pZCI6IndTcFN6RGtIejVOUjZFd01HeXYxQ2J1U0JmcTIiLCJzdWIiOiJ3U3BTekRrSHo1TlI2RXdNR3l2MUNidVNCZnEyIiwiaWF0IjoxNzQ4MzgwNzI4LCJleHAiOjE3NDgzODQzMjgsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NoRYqeIV5lz13faNpOykGromIHdqq5LTgVmQCVgzAAn5WTNBob9MQYASMMScvYjkfNVh8xjfcmeuNSnw3tIBWTlMp-r5g-mIzaIlnzNCvgZnIla8MBvChqepkWkBWFp2LNDqM6-S9q3xZ7vaeVm89neP5d3k7Z0-aBMtpVZ28C-Yg4YGtBNwIpSA1dfx-IPHDqDETn57tn9NIpLmYX2xaHxloXJLzQP_05hqtPRNwqbB8F_tl9ynY1cml0extiolWl3RTQ1YJ8HxFQZex060NdeBtHbvPXdwB8KPdtKQtuXigTJ05t9TEAUfTBvT64uyXNoEakEeaaZ0PiyKPkjRBg"
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
    "date": "Tue, 27 May 2025 21:18:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "No tienes permisos para ver todas las membresías de la organización"
  }
}
```

**⏱️ Duration:** 499.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.42s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1013.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1748380729720@example.com",
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
    "etag": "W/\"5e4-Gai36ZdyF9oJDV1KenZorbZ1R6E\"",
    "date": "Tue, 27 May 2025 21:18:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "9iIb3zZpeiYOKRnL8g7JPrQmMdJ3",
      "email": "cross-org-invite-1748380729720@example.com",
      "name": "Cross Org Invite User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDczMCwidXNlcl9pZCI6IjlpSWIzelpwZWlZT0tSbkw4ZzdKUHJRbU1kSjMiLCJzdWIiOiI5aUliM3pacGVpWU9LUm5MOGc3SlByUW1NZEozIiwiaWF0IjoxNzQ4MzgwNzMwLCJleHAiOjE3NDgzODQzMzAsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ4MzgwNzI5NzIwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0ODM4MDcyOTcyMEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Bot9QNQ0FJg4hhsNawuowmXib12ZJsFgn3kWAEwZQ8JuKi3-SUjvyaUf83wr82mOVTHexumD6u-UdaRTKRdE7GVcJDIsSwbcxKplBrs_RXr0fC2VCq94lRcYS4egXwVaKHvGrvl9TqDfgCDJGCY2VMfSf-aj1q3pwu2gX2sf2eM83qVYzCFJve2f0wavpgUzpI5SN7vLrMCZjHfp5-lP8FILOtacUqBYBXJEekvNeT8SnTDEyOyzwknjE_j9WoI4qOEyzIahMvRkzX7_UoyL7nT15TXJ6IEkFVT84LIen4aJH9bvQc56f9BcVnhmcC8pzZOdUQozvqR_lHS0cBWhlg",
      "refreshToken": "AMf-vBwaxSBRwY7YSgaSCDlWdDRB1AVwpK9mNIwF4G0KTz_25H4IztGvucrJspHPjjYq_m8XHGsTdJdmX4pCmfih_1F0yVzyhaE-1Oo9qJ2ew0ay456Nm__agWSb5v9v2WM21lsavjKE_cKk33YaMnLG_aXP2Bolrhxpkb5Iv_YSB6yQyUOKB9jsrfJk_f5eM2hVDlCH6j3Z04_XrYf5Ft5PDM4joDOoSDftSlAh-MhmyE9QDo-vk3kg2vo8_jdqcbi0KYSPdKu6",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1013.9 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (406.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDcyOCwidXNlcl9pZCI6IndTcFN6RGtIejVOUjZFd01HeXYxQ2J1U0JmcTIiLCJzdWIiOiJ3U3BTekRrSHo1TlI2RXdNR3l2MUNidVNCZnEyIiwiaWF0IjoxNzQ4MzgwNzI4LCJleHAiOjE3NDgzODQzMjgsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDgzODA3MjcyODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.NoRYqeIV5lz13faNpOykGromIHdqq5LTgVmQCVgzAAn5WTNBob9MQYASMMScvYjkfNVh8xjfcmeuNSnw3tIBWTlMp-r5g-mIzaIlnzNCvgZnIla8MBvChqepkWkBWFp2LNDqM6-S9q3xZ7vaeVm89neP5d3k7Z0-aBMtpVZ28C-Yg4YGtBNwIpSA1dfx-IPHDqDETn57tn9NIpLmYX2xaHxloXJLzQP_05hqtPRNwqbB8F_tl9ynY1cml0extiolWl3RTQ1YJ8HxFQZex060NdeBtHbvPXdwB8KPdtKQtuXigTJ05t9TEAUfTBvT64uyXNoEakEeaaZ0PiyKPkjRBg"
  },
  "data": {
    "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
    "userId": "9iIb3zZpeiYOKRnL8g7JPrQmMdJ3",
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
    "date": "Tue, 27 May 2025 21:18:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 406.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 0.98s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=f52fb458-8930-4a7a-a08d-c73a073c9d73 (451.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "content-length": "1790",
    "etag": "W/\"6fe-j/J1sB1RjEvsfjsWGA1xNMytf+I\"",
    "date": "Tue, 27 May 2025 21:18:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b",
      "userId": "ej42r8BHFYZI9LTMcgpFvbC3vlR2",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "member",
      "status": "active",
      "createdAt": "2025-05-27T21:18:24.274Z",
      "updatedAt": "2025-05-27T21:18:24.274Z"
    },
    {
      "id": "43b91132-f3b1-4530-a508-2ff13ae49a6d",
      "userId": "7iM71VItJlMJcpZBh2oHkdCHx0w1",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-05-27T21:18:28.013Z",
      "updatedAt": "2025-05-27T21:18:28.013Z"
    },
    {
      "id": "cdd77631-327f-4beb-be95-ed3833cba13a",
      "userId": "ekLqaQKPWFVkmxonukVqoZu3CNw1",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:18:29.647Z",
      "updatedAt": "2025-05-27T21:18:29.647Z"
    },
    {
      "id": "dc17c90c-d426-4306-969b-f30de5439829",
      "userId": "2SCUDAQsZOgfTeTL7h3hq3KXt942",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-05-27T21:18:31.177Z",
      "updatedAt": "2025-05-27T21:18:31.177Z"
    },
    {
      "id": "894d0b72-96b9-4d6d-ac00-b4eec5ef23e0",
      "userId": "q5xwE1x1UbRN5JW7g82e6sywK8F3",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:18:32.714Z",
      "updatedAt": "2025-05-27T21:18:32.714Z"
    },
    {
      "id": "b3350f34-eddd-4c0e-90ea-48bc6b77e3a3",
      "userId": "PvgcHczsvAeBZv8b6ZhBByNJe9D3",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-05-27T21:18:34.354Z",
      "updatedAt": "2025-05-27T21:18:34.354Z"
    },
    {
      "id": "b69ca67a-3d3d-4d00-8c37-dcbabcc64f82",
      "userId": "iO5gSbhVGCaQ6cDc3vyZPMIRGLf2",
      "organizationId": "f52fb458-8930-4a7a-a08d-c73a073c9d73",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:18:43.876Z",
      "updatedAt": "2025-05-27T21:18:43.876Z"
    }
  ]
}
```

**⏱️ Duration:** 451.7 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=5a3b63d9-57ee-431a-aa3a-e78c70ff8fb4 (527.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 527.4 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/5a3b63d9-57ee-431a-aa3a-e78c70ff8fb4 (1121.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 1121.4 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/036d683e-cc2b-4f00-8bc6-1cb2bd48ac8b (515.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 515.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/43b91132-f3b1-4530-a508-2ff13ae49a6d (842.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 842.4 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/cdd77631-327f-4beb-be95-ed3833cba13a (489.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 489.9 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/dc17c90c-d426-4306-969b-f30de5439829 (506.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 506.3 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/894d0b72-96b9-4d6d-ac00-b4eec5ef23e0 (515.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 515.7 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/b3350f34-eddd-4c0e-90ea-48bc6b77e3a3 (469.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 469.8 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/b69ca67a-3d3d-4d00-8c37-dcbabcc64f82 (548.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 548.8 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/f52fb458-8930-4a7a-a08d-c73a073c9d73 (895.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNjk4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA2OTgsImV4cCI6MTc0ODM4NDI5OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WWoMeYat5MtIEsrMSR6MSNc-3EYt5xzfw26YzAQcLtFTVwMHppjGWhSMC6Ci5IEVyZjojuJ9qpRj3KyWFhoxDkP2im4vNOcy6M-JDpLnH9qs9uCphTbomkr-2FED4-Bozr8WI4Hfq3s4PEVi_l67nLYIzb4LWgyiLWNNbmhC44xCSVV6u4-ayzrLaTxuXo64O_PSY72RgSkroueAyQuL6uZmQabG5_rBmwQ398tGDuNx1T9WQSwSd6oE_msUHeSHHEqa5V6W5mee-xmjfGRC0KXICgt8qsHBnLnmvVjXhSSPBOQChCWTcGOyQSWvRwNoeVsO89dEGv6I5PNA68-rog"
  }
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
    "date": "Tue, 27 May 2025 21:18:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 895.0 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (321.8ms)</summary>

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
    "etag": "W/\"640-X8EWr3JzvTLl6NSRKchAmXluz20\"",
    "date": "Tue, 27 May 2025 21:18:58 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3MzgsImV4cCI6MTc0ODM4NDMzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i995hqbMZF9Z2T5dvlP2_A54JwCAW_zlBWXfLlYDEbqQ7DazTcr86QELYmtWEnj_BFUY90qmES8AtbA2byze_8KGpR3qYfsJMnsM8xOXkFuD5i8qIUqlI1rveFO5XCjhkkZOctp0NgGmsps1asBcIwo-XSVv9Fc5bwwCUye1pOEYXBmP5DIY_rKorH4JS79GMZNGDuAsD_d7C6rejC8jlR7qREsIQVMYH7VKdaOQXB6qMKmL4r0tjSbwjluBQiGQlOuczq3lKCwbLOlYp8ZBglc5uVgq60bbP6WHq8lY6XpBiiQ_2L_0QVExy3A-fF-sPaOzp_6gl_PfwNg1c-kwYQ",
      "refreshToken": "AMf-vBwpxeiz2O51LCVPC8bcS01DhQCy_TuuR9MeMKLFeMUqt4PsyWWgLrF0mjXKRba4r1zsCsiZWNrsQE8vrtvsBDU3X_qMao1l_sYwkBIJNaNKhblyw2V7B3OkwzzwBSTbxjkQj5GtU54xUBfwNpUOc1mkdVKHkMqdMWrmoMtthdxGC9_IVPkSX4bC0puq47h8zTp4ygmMJe7Hdm4h3t6OtdUpPpRTtaSe8ir23eI2wwl1GTbhKFkg2bfEe-JBhYTB18E3oNZz",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 321.8 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/WE4YOcGCRbMqoL232MM1oOUxvXh1 (1304.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3MzgsImV4cCI6MTc0ODM4NDMzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i995hqbMZF9Z2T5dvlP2_A54JwCAW_zlBWXfLlYDEbqQ7DazTcr86QELYmtWEnj_BFUY90qmES8AtbA2byze_8KGpR3qYfsJMnsM8xOXkFuD5i8qIUqlI1rveFO5XCjhkkZOctp0NgGmsps1asBcIwo-XSVv9Fc5bwwCUye1pOEYXBmP5DIY_rKorH4JS79GMZNGDuAsD_d7C6rejC8jlR7qREsIQVMYH7VKdaOQXB6qMKmL4r0tjSbwjluBQiGQlOuczq3lKCwbLOlYp8ZBglc5uVgq60bbP6WHq8lY6XpBiiQ_2L_0QVExy3A-fF-sPaOzp_6gl_PfwNg1c-kwYQ"
  }
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
    "date": "Tue, 27 May 2025 21:18:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1304.9 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (313.9ms)</summary>

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
    "etag": "W/\"640-+kRccPpTv8AvhxHTqj72r2Znxpw\"",
    "date": "Tue, 27 May 2025 21:18:59 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3MzksImV4cCI6MTc0ODM4NDMzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gw2qBrQ5gkfv1qJZl5rCaD2oOx_knv4g9m78jQsVYdYxaLrwqgCjq-PHfQ8Z7UhqOwPcc5vcx9hpVAFkSKD55djStrTeeuuL8b2GrjgFv-UfHbfLjo_7IEyKA0qTSKwQi15eRi8WmNCu3veK5m6lztl9fk_kezu9Odj54dARLFeQpkZZUcvafGFfHaVFtKMLJj757ixry_k6fB-7qcLsZeMlwwpIkTsUoC1nkx9K93pRD-cBV8FEO0Yb-FYBUPpp2-Lhhl00UpwRHUDFM_L2-wrarS4x466eV2QnuXHWAm3_upumBW-csifpci4Xcf3OBAuVBG7eDzSrAhxSxG9KnA",
      "refreshToken": "AMf-vBwAd60PAxm6EFFbD3ScbDkjRbC_z09WikZMQoP11E8GHVxWF7vubA51w3cQ7_-i2xJWgeLNdJRbF-5y0Prh5KVHsa3r_f8K0FWt-8dx9zFqCUWHRm8ijuu8JIT4x4T6RF6gilsTo5KQzDm-H-KO9AzTu0ysox7Wp7X9b_P5jgwOjhTKDEluvuvF1A4GZ3JagF3xSE0jTnSQ9u8pQGLer4hCfUW25LwQzDIoM61P_p9ouQV4fHvD-Gv8Ww54qbaG08Jq55O_",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 313.9 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/ej42r8BHFYZI9LTMcgpFvbC3vlR2 (1156.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3MzksImV4cCI6MTc0ODM4NDMzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gw2qBrQ5gkfv1qJZl5rCaD2oOx_knv4g9m78jQsVYdYxaLrwqgCjq-PHfQ8Z7UhqOwPcc5vcx9hpVAFkSKD55djStrTeeuuL8b2GrjgFv-UfHbfLjo_7IEyKA0qTSKwQi15eRi8WmNCu3veK5m6lztl9fk_kezu9Odj54dARLFeQpkZZUcvafGFfHaVFtKMLJj757ixry_k6fB-7qcLsZeMlwwpIkTsUoC1nkx9K93pRD-cBV8FEO0Yb-FYBUPpp2-Lhhl00UpwRHUDFM_L2-wrarS4x466eV2QnuXHWAm3_upumBW-csifpci4Xcf3OBAuVBG7eDzSrAhxSxG9KnA"
  }
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
    "date": "Tue, 27 May 2025 21:19:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1156.2 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (259.1ms)</summary>

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
    "etag": "W/\"640-DSz96+aWd6Bl91vl/b+rr1+q9pg\"",
    "date": "Tue, 27 May 2025 21:19:01 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDEsImV4cCI6MTc0ODM4NDM0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.J2s7_CNYQMPlsdeNTgmaZzoKw9w36Bfr5ifu4-ir1jVjcgSJAUtP6XZlw8oimcXwQq32Goo6hE_vZvkcNf2FVtDt4auPnyz3fNTruRoM2J4ICa0zHpMTGpvDdb7Vb-LS5M18Ayb7yTbohKd1Ir6lXuMnWO4RToqoa0ntKKKHZfx5K8fKRXZBgfEK5S5qP0iAZlY3M4wiDVtR3FcCjbLZ_2zMkXWFMLQxVpCH3EemFm-3nQ5IAIgXBHzBD5k3BmBywLHPagfnEWxfgIlxeNWAF7jbvKxWJdVD7o7OtNNM0tu3Y1G3mANXgpe3-JgOr7mxcIpR60KyZe8Ezwzq7KfRkA",
      "refreshToken": "AMf-vBwgKT1EwKOp6JtMISVQgaBLmFDFYQ9noUqjGGrv9-OoPyufqZVmHc3JBRuwELVC4JES34paQVVtFTdOBARd7pGcTRhM9PTtIilRtKDCrGyfX48tTVEh-ttWeA-PIFz7EZYJoqiomldIeit1BwpPp0ep0LOh5UfY-ckLjRcIAqNc9u6lVvHiahdpv93FC9AU6mzoYeL8XX2ce2lsT6Ubu6SMtK2EeD3ByG6N3pzfovGXBq5GrYwJfoYtmor8-YCFHroh_tB1",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 259.1 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/IHtANcGibrfsC0NjLFxo5q5hO0j2 (1158.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDEsImV4cCI6MTc0ODM4NDM0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.J2s7_CNYQMPlsdeNTgmaZzoKw9w36Bfr5ifu4-ir1jVjcgSJAUtP6XZlw8oimcXwQq32Goo6hE_vZvkcNf2FVtDt4auPnyz3fNTruRoM2J4ICa0zHpMTGpvDdb7Vb-LS5M18Ayb7yTbohKd1Ir6lXuMnWO4RToqoa0ntKKKHZfx5K8fKRXZBgfEK5S5qP0iAZlY3M4wiDVtR3FcCjbLZ_2zMkXWFMLQxVpCH3EemFm-3nQ5IAIgXBHzBD5k3BmBywLHPagfnEWxfgIlxeNWAF7jbvKxWJdVD7o7OtNNM0tu3Y1G3mANXgpe3-JgOr7mxcIpR60KyZe8Ezwzq7KfRkA"
  }
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
    "date": "Tue, 27 May 2025 21:19:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1158.2 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (275.3ms)</summary>

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
    "etag": "W/\"640-mW+/T8a0snvnuXCDptVlP+n21D4\"",
    "date": "Tue, 27 May 2025 21:19:02 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDIsImV4cCI6MTc0ODM4NDM0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.tR7fhI0hgyMcWgNeYtoh2dxs8tR1yQEbmBKKrJoalGFWGB4yld5mqvhQFLb9-dVsAHEL7igJkJAB6EkXiFtOLoD_IK2CJPzkvR5Yzt0T_1-bULPdznD46tL0ppzAHdSmrtuavUGBhIyrOdIWfZ__L5w8HLvPDFT3aUrssxTUFl81V7nb3k_s6cpE947AF__cGJt6a0PQGY-GZqyvc6QE6gdF_PzFWsvyGZ0SPXQSc63jk_dGX83ePkfnbsffS8ZHF79YnCPf8F1Elcv1seVCd-K5XX9KGyr3UcrQ950uhqomkE9sGd-zy997kaSx49zPn5o4fHa0U_UmvBnKCvqU_w",
      "refreshToken": "AMf-vByVJJKZ_a-ZQoNr0NpphAMbwSranr2IvbqJa08wQzvtb2LyBe6wb-hWKIRgt_hgd6y0ruz67JOyuhOndDo3i6Sd61SPEZudhWrlcjiZN5eRc8pxLS1gGEv5dknmig46EyOs7Oy-SvzhT2TA3c3mtrQv4FOBazuLVuRpsVdRGWDGSjuf-Pp2aYJcsfKEJp1x_BJ6haZ_rE5z75AMu3wlwbSoCZWdfHiSFUDC4rhvIzhuXn4_p0Zx7JXUKqdSqMzNte44XmkR",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 275.3 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/7iM71VItJlMJcpZBh2oHkdCHx0w1 (1171.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDIsImV4cCI6MTc0ODM4NDM0MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.tR7fhI0hgyMcWgNeYtoh2dxs8tR1yQEbmBKKrJoalGFWGB4yld5mqvhQFLb9-dVsAHEL7igJkJAB6EkXiFtOLoD_IK2CJPzkvR5Yzt0T_1-bULPdznD46tL0ppzAHdSmrtuavUGBhIyrOdIWfZ__L5w8HLvPDFT3aUrssxTUFl81V7nb3k_s6cpE947AF__cGJt6a0PQGY-GZqyvc6QE6gdF_PzFWsvyGZ0SPXQSc63jk_dGX83ePkfnbsffS8ZHF79YnCPf8F1Elcv1seVCd-K5XX9KGyr3UcrQ950uhqomkE9sGd-zy997kaSx49zPn5o4fHa0U_UmvBnKCvqU_w"
  }
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
    "date": "Tue, 27 May 2025 21:19:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1171.9 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (296.7ms)</summary>

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
    "etag": "W/\"640-fYWifYMHqdvRa7xM2wYoroxWAME\"",
    "date": "Tue, 27 May 2025 21:19:04 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDQsImV4cCI6MTc0ODM4NDM0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BSzuOyQyEr4uEHrSYySLnBYCKmZV9uRfGTluOCaHOkdaAO_OQCYw9hgA9pcZ88kHP7eiDdgpTbaAPA024Zyr9-QrD1XDgOXmXrGlQGV3xJghQ7NSncjQE-RAAPr1cv_ME2HgUhin7cvpSXrcBWRq-Wmye0iGsA6a0H1J8OFKgYcvvnFEPzwmW13Fr_pP7ib7XiVpL8rJYUlUxSCeu0glt05NR1mqlAjmQnA1xjn1JKEPMhgGUzac5BVTT15KeRnJNvByp9ACWX6JoijgGGdxAtz1Lg1zCYoY6pXpSVeF0vQDBQ3YafSeIZOgPbaGGjXIfMxzFq7Jvo9mc6KCfKBRdw",
      "refreshToken": "AMf-vBy7OvPS-CHzELk8Fj56arMXj_1l5m73gVJVxPcqR5s3qiS9jI7nQY2vmKPRDi9jLblDNUj6MZ4x3JwzKu9JvdcqHZPJwGJvXLoYtBM4UCdgJRvutHu1GkQ_i7K01crm9kvVgbnPV7hq6QzxmJF0M5f8cSw2goE8KuIkXr8OY0xlcMzhiUHWTpekSb5B_lDryuWp1uexrUC4BNI8vc10A5CSN2whg6MAaVnfTR3PS_8cQ7ta2Mi57717qyUGaT8Xw7eP-aMT",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 296.7 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/ekLqaQKPWFVkmxonukVqoZu3CNw1 (1132.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDQsImV4cCI6MTc0ODM4NDM0NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BSzuOyQyEr4uEHrSYySLnBYCKmZV9uRfGTluOCaHOkdaAO_OQCYw9hgA9pcZ88kHP7eiDdgpTbaAPA024Zyr9-QrD1XDgOXmXrGlQGV3xJghQ7NSncjQE-RAAPr1cv_ME2HgUhin7cvpSXrcBWRq-Wmye0iGsA6a0H1J8OFKgYcvvnFEPzwmW13Fr_pP7ib7XiVpL8rJYUlUxSCeu0glt05NR1mqlAjmQnA1xjn1JKEPMhgGUzac5BVTT15KeRnJNvByp9ACWX6JoijgGGdxAtz1Lg1zCYoY6pXpSVeF0vQDBQ3YafSeIZOgPbaGGjXIfMxzFq7Jvo9mc6KCfKBRdw"
  }
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
    "date": "Tue, 27 May 2025 21:19:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1132.9 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (351.3ms)</summary>

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
    "etag": "W/\"640-2ZAfTHF3Ul9tA4P12Qy7k1ZOGQY\"",
    "date": "Tue, 27 May 2025 21:19:05 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDUsImV4cCI6MTc0ODM4NDM0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gnxFcNjmBbcakEn8jIeNhcXadhgH2zVuwO5o4ZGkEdyfHv9SK2F1Guj9kRwv2-nt_v1lQFpLqCnw2UAEtNxD1v2ZmZMSNE9SxXHfjifASgxs-T4LXv5BNMY_V5SHhqDheIUkk7O8RnPzWQee94zGmZx7XYhmBgLbWvBtPb82Ie4TpUgpwAaqm4J3WYRk2ihjtf6yuJJjNuTfHJBOPPKt-0T2dMQg0k84LqRs__rXoK6874OQkFk96JgqQdb7RTsFuMV0871IRdsyt6e4XNolb241noT41s6-SUjjfa3ySustHZZlQ0IbpoGQ3y6N5SaOwL4i5cAnC5BExCPXeEFeXw",
      "refreshToken": "AMf-vBwAyARcFwCuUQGK0goQy1XVE0u88XFRESQNLsqETEXh_TwqVhZgcCQB1Dx7UvW8bK76Alq7193gUQDpXuXtLLgqA1KSF3NVSxOUsULDUFmmSudLeikW4ggeVQswzntoU--t1NMrTnZDXgN9-wIUScORGMsvk531WbdhR-ysZi2IJpu0_0qdgu5_jiRwV0UPUf08y4Oxsnr5ATWKgzQxuol1ZHqVBlK1j2_OUkEEVT2iQ8owwqxwXDGQVi5U7CVIG4e1mqSp",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 351.3 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/2SCUDAQsZOgfTeTL7h3hq3KXt942 (1186.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDUsImV4cCI6MTc0ODM4NDM0NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gnxFcNjmBbcakEn8jIeNhcXadhgH2zVuwO5o4ZGkEdyfHv9SK2F1Guj9kRwv2-nt_v1lQFpLqCnw2UAEtNxD1v2ZmZMSNE9SxXHfjifASgxs-T4LXv5BNMY_V5SHhqDheIUkk7O8RnPzWQee94zGmZx7XYhmBgLbWvBtPb82Ie4TpUgpwAaqm4J3WYRk2ihjtf6yuJJjNuTfHJBOPPKt-0T2dMQg0k84LqRs__rXoK6874OQkFk96JgqQdb7RTsFuMV0871IRdsyt6e4XNolb241noT41s6-SUjjfa3ySustHZZlQ0IbpoGQ3y6N5SaOwL4i5cAnC5BExCPXeEFeXw"
  }
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
    "date": "Tue, 27 May 2025 21:19:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1186.5 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (297.8ms)</summary>

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
    "etag": "W/\"640-OeWxCkTnAa358yLNhEUkwwXl714\"",
    "date": "Tue, 27 May 2025 21:19:07 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDcsImV4cCI6MTc0ODM4NDM0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jxyHDp24C1fQ8Ojw--OkGiOg0Da4ixerGldrG-PM0LUjI8Z2H7obrY0REL76MeklgoqNk7MzYfMNOpejuJcIoQCZtwZ36y3OUuHtz6dkMTxqdY5wywtFtMsputG4H4k1OXVUWH9b94gewlNqxFdtIOIzsUS6I5D9x-Yiw0uqW8oTI11oKgYF72XvaQMKD08TVzftiZqfuBgyJmnJBoycyV43j8llIcobu0G1-lIfefnOTWyvzizvBsXUSF7ugdIOK4gxuG0jMLpAe_YQw8Gr9zjVV8mAmcTt345zEv1G9bJzlcfbe-iX4Mal7GMQ6AET0axUeS--eTSpZpjzLL9imw",
      "refreshToken": "AMf-vBytLnXqqqMHM9FzwdXGNPQ3iW_LgNysEfHtedCIN_lxqLGJYw_IwO8VaE82OlWohlcgMim_XJ57qjJss_21HAPag-_H8w6aqDZTHuI_rRfEajkaVXOc0Ae5k57Vf2PC8SbOoKX96lTgz6rctu_IwYjK6BK6vANxdyFr0n_CU3-bSnsKCBvW_dvAGs4jpa_GHplSvoZoo1itGDSJRsHokVTHqQyL8PBN2qDVU-1WPJnq3iNd4gg-4usxkUktnUu6N2aLFHR5",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 297.8 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/q5xwE1x1UbRN5JW7g82e6sywK8F3 (1132.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDcsImV4cCI6MTc0ODM4NDM0NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jxyHDp24C1fQ8Ojw--OkGiOg0Da4ixerGldrG-PM0LUjI8Z2H7obrY0REL76MeklgoqNk7MzYfMNOpejuJcIoQCZtwZ36y3OUuHtz6dkMTxqdY5wywtFtMsputG4H4k1OXVUWH9b94gewlNqxFdtIOIzsUS6I5D9x-Yiw0uqW8oTI11oKgYF72XvaQMKD08TVzftiZqfuBgyJmnJBoycyV43j8llIcobu0G1-lIfefnOTWyvzizvBsXUSF7ugdIOK4gxuG0jMLpAe_YQw8Gr9zjVV8mAmcTt345zEv1G9bJzlcfbe-iX4Mal7GMQ6AET0axUeS--eTSpZpjzLL9imw"
  }
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
    "date": "Tue, 27 May 2025 21:19:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1132.3 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (300.3ms)</summary>

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
    "etag": "W/\"640-1A7OJyLelSUwh67qHE6G00JfS1g\"",
    "date": "Tue, 27 May 2025 21:19:08 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDgsImV4cCI6MTc0ODM4NDM0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hRnsY6X4Zy5t3jL0jOpAlkumiCDlr1lN3PGb3QNOCToTLMjt3yRZkcm3S4_6P0Thu7ZduXA03ZtKMRGTR3qOgGCZYWMNGbY5kaikHJwvGwdRwB5OTB8htyu_JbFvc4qtrfZkoQt_apxzTDONc1KE0OmqqyzBGnvU8yNX9qx6dItTsf8JTOsTuL7C5KRqEMOFtx0vPgois34DOQpJCYExjrvJGSvpcr0faLg5k-HRQHDA9Lk0d4dFCv1QH346HbnSGoYdzk6N929pni4w6XclGzCkimfZdovRbdotOBNLHRr1rw-jDprMXN__kG5K42tIaArlscQhl0cenk4TlDzuJQ",
      "refreshToken": "AMf-vBwJDIhdZGF5n-mI8nuhOzSGaVMJhPVkuPt--CbB1keIo4cxcV5H8oUSVqvU0-MnV0mMkhCCguRtz1qVQLiL1mWxaynwhJdn-JvOJPDrAeofaoB47gF7m52TiGDWk_9aMMjuJ4WCF1lmxHga2HrV75kal8XSFp1ON3ovtVt6tn8ST_hUIasmahRnFu9QEaZsO9Z_y-kK3URd5no3eCbMrwXHQDEdHrEZoRBYUdyJmKdzh3xsitT7tXERB4YxcqjAhosEdUTW",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 300.3 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/PvgcHczsvAeBZv8b6ZhBByNJe9D3 (1007.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDgsImV4cCI6MTc0ODM4NDM0OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hRnsY6X4Zy5t3jL0jOpAlkumiCDlr1lN3PGb3QNOCToTLMjt3yRZkcm3S4_6P0Thu7ZduXA03ZtKMRGTR3qOgGCZYWMNGbY5kaikHJwvGwdRwB5OTB8htyu_JbFvc4qtrfZkoQt_apxzTDONc1KE0OmqqyzBGnvU8yNX9qx6dItTsf8JTOsTuL7C5KRqEMOFtx0vPgois34DOQpJCYExjrvJGSvpcr0faLg5k-HRQHDA9Lk0d4dFCv1QH346HbnSGoYdzk6N929pni4w6XclGzCkimfZdovRbdotOBNLHRr1rw-jDprMXN__kG5K42tIaArlscQhl0cenk4TlDzuJQ"
  }
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
    "date": "Tue, 27 May 2025 21:19:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1007.6 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (322.8ms)</summary>

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
    "etag": "W/\"640-fRxeDMEd42jGONu3ByZ7fJVjJM8\"",
    "date": "Tue, 27 May 2025 21:19:10 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDksImV4cCI6MTc0ODM4NDM0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BEsV4-ieuAPQwVEuAlmZ90NzWi0_0stN70o4_l-507AtHnKnqUV1e1HgJFSVHvv35-K3fA-WS9BnXA9ZseprIrFl9-T2SXtm_S48Ry2gtb5EIX3wRm-VrUwnwFTTw8nugBHXJHX8qw-F2GgamJ58SXPRNVIQ4vbfRqKVfE8hzDcXOi8cclolVApiLsDXhAdxpTsO6alMJCwL4u_avzlq1rlcEvUro_kQ7sPVsL5RCX7OWjJUi4TqiSDPYAzCkbQZbLEoYJvekbT3ICfJW09tDOAEihBCilAPYKMDhIiN1tyRlbFubEeEmWgTNeh97EiaMALhpvmHsOBIw0930d-9wQ",
      "refreshToken": "AMf-vBwi1e7JBhhhOpvaCI7OxXhENNsNM84EbOdwXTjVEABSxWpqm5S5fi19PQwmo9-s1WbG_F8NiOFaNacu11huJtjY-zQP7BgEMK8uDzZpmKCmomASHkZJzO9SKAas_68ah4RrQJlAfWQaAncf_CJoTO88wmmGPSNxIilJtweQaVYxE9u91hq7-taXMIIVvySv9HJ1CvZI5cB3TxKk3lBbQ81Sj5Ou6weg8J8C2-lSfyOzgyrhp6uAk7ZlEX5TXiZHh18UqMR1",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 322.8 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/qfyh2iqCpjR0iJ1oXGwf7FlmJPl1 (1136.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzQ5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NDksImV4cCI6MTc0ODM4NDM0OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BEsV4-ieuAPQwVEuAlmZ90NzWi0_0stN70o4_l-507AtHnKnqUV1e1HgJFSVHvv35-K3fA-WS9BnXA9ZseprIrFl9-T2SXtm_S48Ry2gtb5EIX3wRm-VrUwnwFTTw8nugBHXJHX8qw-F2GgamJ58SXPRNVIQ4vbfRqKVfE8hzDcXOi8cclolVApiLsDXhAdxpTsO6alMJCwL4u_avzlq1rlcEvUro_kQ7sPVsL5RCX7OWjJUi4TqiSDPYAzCkbQZbLEoYJvekbT3ICfJW09tDOAEihBCilAPYKMDhIiN1tyRlbFubEeEmWgTNeh97EiaMALhpvmHsOBIw0930d-9wQ"
  }
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
    "date": "Tue, 27 May 2025 21:19:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1136.3 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (260.7ms)</summary>

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
    "etag": "W/\"640-9ehNku6dTeGa70o3n7dkU4Yexiw\"",
    "date": "Tue, 27 May 2025 21:19:11 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NTEsImV4cCI6MTc0ODM4NDM1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.k6PUr5LaU58fdCf7vS4WkxqBVd6ip3ntbssQ9gJqF-8-FhhvuQbbawogpTznReF_UZkj2Wr5vLViaJR9kjHxrfvvUy--xXCBRNJIpZslC8sQZKXZSIPiwxM3frq4DHTy-DGrxP9VFziBChJyhS_HL4kbMG045H0WACWigMLVIWl44-7Zw841cUt9ESLASwkCzSafw3RJ7KATzqBdDDVjCWmtYGZpKfu1O55-1yxtADj_FVl6uastu8PG9JvIfpZKTVWhdqx3rVG2jbI4pkx2SqNabk9AkF96rQ3Vn8B7kWfiFuBDDA1tXLWNzRLQQTy-ojwJN20HD_mR0cuKWCHOSQ",
      "refreshToken": "AMf-vBxt4kZuGdsRnHzdL592eQn-Rto_3jgcShzDSRu1IQmFArl4mqDdDMl7QYLAyfFgwd-6WMdlRUfQW6_A5hTwvl10_0qPE-L0bwitmmZauyOwoM70p5VXbMdTNV2mTJk-qRPvo9-nDxa6bAyw0mSabI5KQ_MTaUdTF6EQoONMcdf4XVv9UlcCViZP2TkUCb90xAvu23EYaLTfXL4Fb_DuAdiplIrSFzf4WkqrjqCYPPwaXFHM3k-xIcvr8BMEb1hiUy5l_3os",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 260.7 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/iO5gSbhVGCaQ6cDc3vyZPMIRGLf2 (1173.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzUxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NTEsImV4cCI6MTc0ODM4NDM1MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.k6PUr5LaU58fdCf7vS4WkxqBVd6ip3ntbssQ9gJqF-8-FhhvuQbbawogpTznReF_UZkj2Wr5vLViaJR9kjHxrfvvUy--xXCBRNJIpZslC8sQZKXZSIPiwxM3frq4DHTy-DGrxP9VFziBChJyhS_HL4kbMG045H0WACWigMLVIWl44-7Zw841cUt9ESLASwkCzSafw3RJ7KATzqBdDDVjCWmtYGZpKfu1O55-1yxtADj_FVl6uastu8PG9JvIfpZKTVWhdqx3rVG2jbI4pkx2SqNabk9AkF96rQ3Vn8B7kWfiFuBDDA1tXLWNzRLQQTy-ojwJN20HD_mR0cuKWCHOSQ"
  }
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
    "date": "Tue, 27 May 2025 21:19:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1173.2 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (296.1ms)</summary>

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
    "etag": "W/\"640-Ht9bytOnT1WeThFqK7RWIsNBVhg\"",
    "date": "Tue, 27 May 2025 21:19:12 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzUyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NTIsImV4cCI6MTc0ODM4NDM1MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H8WPCTgZnQVW-pL5HbBP5bcsfr00qDqOioZse-ThBysSVkE2tKfGJj8mr3gMhunMgxio3zNIJkZ5S7THgxNGtMCnU6lJUH1rnlariI-wkB29eCF6mBg_FjvtX5fkPCYcWPMaQGTrrM0RufqUQH4j8QDVOlnoRNIkApxlZc-911OuxHWN9Ej2zHBSR-a4b1jBVZRheCDqOpwDgIdCbYHh2wAM9C1BzMTdzboqWtpSCZa12sacXMHoShXSfdMDB1GkBN_YqS4snC-7yQGzEiibNS2z5BhcLzNFK3Utt_1K5yMBVKfN50hhDChk7XUwlxM3JXzW0nk5_BHLjUnYHSQRRg",
      "refreshToken": "AMf-vBwdO8jk3q23aW6cOmSbmo2GGdAzyJRloeo7OVP4dMgjwdFb87cgQjTXE0-_4DgbxyOC1R8chqL8sdA6gfxDnwpo_rtTPNWkwHsAEt3fiHJ2Ht9amzsk8yKl9YZfM24GVuIer-9SJnNqF-Sz4MOY2rJpgaHGctqFzd4jM7QhyoGmyRztUsvvPXVwV5S9kSVut1y2GJuvypPDihYXTY7poCkqlCJsdS62mAZuTS67CgUqCy1O2cpgMZmOfHgsjSVtCkkmqnFV",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 296.1 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/0rqLGbIdesZHPUKe9h5dGDEFSvF3 (1132.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzUyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NTIsImV4cCI6MTc0ODM4NDM1MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.H8WPCTgZnQVW-pL5HbBP5bcsfr00qDqOioZse-ThBysSVkE2tKfGJj8mr3gMhunMgxio3zNIJkZ5S7THgxNGtMCnU6lJUH1rnlariI-wkB29eCF6mBg_FjvtX5fkPCYcWPMaQGTrrM0RufqUQH4j8QDVOlnoRNIkApxlZc-911OuxHWN9Ej2zHBSR-a4b1jBVZRheCDqOpwDgIdCbYHh2wAM9C1BzMTdzboqWtpSCZa12sacXMHoShXSfdMDB1GkBN_YqS4snC-7yQGzEiibNS2z5BhcLzNFK3Utt_1K5yMBVKfN50hhDChk7XUwlxM3JXzW0nk5_BHLjUnYHSQRRg"
  }
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
    "date": "Tue, 27 May 2025 21:19:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1132.1 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (401.0ms)</summary>

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
    "etag": "W/\"640-UVGTZdizMNdrCffX/puEVN9buFo\"",
    "date": "Tue, 27 May 2025 21:19:14 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NTQsImV4cCI6MTc0ODM4NDM1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F2hmwL3ZQJ0gG4UuvC5M27C9k-KKWhU4QjIldb7EOA8kk5XWm_HFDfUyr54s9xsHPgvKsIXXSrA8Y9izkKPD1h9ibBwHZAB01XfYYM_Ma8uAEp3NIMTJz1SBOMHHkoVptbYc7l3SmBUUFd07YkPSWI1Od6t6MCLKsPlJ75GWM_vg4hxdvaOG5sNq0Fb4JLVbRMUiWM2YuEZitkuw471i3aap-PsLEJrT2XL9KuvM2VoG39XdVdRuFckyYs9uhQ5PUuRylxWnPuYrM-eTHVgmnRSLjpZ4UgJr59nN4fuSvSH7S0GkM77JpXEuf6jEAqMi0sJyUxZqc6junfPKk0PhXg",
      "refreshToken": "AMf-vBwjYfNZOE3ggcOOaxjE5Ceez64aYV4znOUF9I6d3noPYFqEykBy2mHqXN2I8ZfR40-kZRkS1ro5w9MJsEMXy3Y6BbNpj510PPcY15Mhe9_paUQCUeuYU0bOkEUViVchk4aYDJ1Qt6NO48WtMD2xnE5lHzFrIIMs_HrKntsH-enY06AnLY64UvAjdrz67fpmPD8jaTR-0FHvTzbakscuLlDxLw_aWF2xe1URr9A_-JvRMDtMMswwoBSF7SdtGp9hj5Sv3J1s",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 401.0 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/wSpSzDkHz5NR6EwMGyv1CbuSBfq2 (1134.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzU0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NTQsImV4cCI6MTc0ODM4NDM1NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F2hmwL3ZQJ0gG4UuvC5M27C9k-KKWhU4QjIldb7EOA8kk5XWm_HFDfUyr54s9xsHPgvKsIXXSrA8Y9izkKPD1h9ibBwHZAB01XfYYM_Ma8uAEp3NIMTJz1SBOMHHkoVptbYc7l3SmBUUFd07YkPSWI1Od6t6MCLKsPlJ75GWM_vg4hxdvaOG5sNq0Fb4JLVbRMUiWM2YuEZitkuw471i3aap-PsLEJrT2XL9KuvM2VoG39XdVdRuFckyYs9uhQ5PUuRylxWnPuYrM-eTHVgmnRSLjpZ4UgJr59nN4fuSvSH7S0GkM77JpXEuf6jEAqMi0sJyUxZqc6junfPKk0PhXg"
  }
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
    "date": "Tue, 27 May 2025 21:19:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1134.7 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (299.3ms)</summary>

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
    "etag": "W/\"640-5QaF5O7M295I5NT1+Ya5gxXO1us\"",
    "date": "Tue, 27 May 2025 21:19:15 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzU1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NTUsImV4cCI6MTc0ODM4NDM1NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dAUxpjsGp52wT9guh4QPySDyTyLB42JjhE9sV2ZFNbdAubzsysha1Wq0cJKt7LjyEUPMLo0J58H3wOQ-dk2NuVw7ZLbQerKmdUs7_wxeBAO-5MBXH2-4vZi8b8lZ5T-eJmp_NqGdlzEDVOgXOwtwANi3GB9cplFdiJtttBqP64aFbgd46o3Z32YXzkj4eTXBIfeMRUAH-G-3AzAR40NkqBSJtHZyMcCGD511hQ0xVoWe28tRVQapvOil9D5pnAx3pXYCnRzqF3cMijt2So-v1K9TGTWitrZECCsQn6lHTIg9R6ytfzWIW2j9xdtRYYsMjU4MJa1H1LNOVruIVow5Xw",
      "refreshToken": "AMf-vBzx8BqN3_nhDoCjA8HAVKZO0-O0f9bDAQ2My5MFT_cJDao6JAzmvc1l7GW0HS0Kz0TKVYGqNnkSD7orDsLXfstbg32L9Ksz1Kr9xKRVSnKQviCpOin5Ocsv8zVpXaB59ygPYI0QCg1dSXcYqKEKP4Q6dL_XkUMTi5bNJpWmRae3eQogPVUQpOhuhz-bIrIYFVj1_XfXessgiMd9S9QmS0cKOzw6OnIlPKqLcBrISzjRh-BHBG7N9V93VbOxaBVc2M9FvXkc",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 299.3 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/9iIb3zZpeiYOKRnL8g7JPrQmMdJ3 (1132.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwNzU1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODA3NTUsImV4cCI6MTc0ODM4NDM1NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.dAUxpjsGp52wT9guh4QPySDyTyLB42JjhE9sV2ZFNbdAubzsysha1Wq0cJKt7LjyEUPMLo0J58H3wOQ-dk2NuVw7ZLbQerKmdUs7_wxeBAO-5MBXH2-4vZi8b8lZ5T-eJmp_NqGdlzEDVOgXOwtwANi3GB9cplFdiJtttBqP64aFbgd46o3Z32YXzkj4eTXBIfeMRUAH-G-3AzAR40NkqBSJtHZyMcCGD511hQ0xVoWe28tRVQapvOil9D5pnAx3pXYCnRzqF3cMijt2So-v1K9TGTWitrZECCsQn6lHTIg9R6ytfzWIW2j9xdtRYYsMjU4MJa1H1LNOVruIVow5Xw"
  }
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
    "date": "Tue, 27 May 2025 21:19:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1132.6 ms  

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
- Test organization: Test Org for Memberships 1748380701516
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
