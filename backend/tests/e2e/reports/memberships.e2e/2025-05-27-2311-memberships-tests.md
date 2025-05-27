# E2E Test Report: memberships-tests

**Date:** 5/27/2025  
**Time:** 11:11:46 PM  
**Duration:** 17.44s  
**Tests:** 14 total, 6 passed, 8 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.55s | Admin should invite user to organization successfully |
| ✅ Should fail to invite same user twice | PASSED | 0.48s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.28s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 7.96s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.60s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.62s | Admin should get memberships by user |
| ❌ User should get their own memberships | FAILED | 0.07s | User should get their own memberships |
| ❌ Should fail without userId or organizationId | FAILED | 0.02s | Should fail without userId or organizationId |
| ❌ Regular user should fail to get other user memberships | FAILED | 0.01s | Regular user should fail to get other user memberships |
| ❌ Admin should get membership by ID | FAILED | 0.02s | Admin should get membership by ID |
| ❌ Should fail with invalid membership ID | FAILED | 0.02s | Should fail with invalid membership ID |
| ❌ Admin should update member role successfully | FAILED | 0.02s | Admin should update member role successfully |
| ❌ Should fail with invalid role | FAILED | 0.01s | Should fail with invalid role |
| ❌ Regular user should fail to update role without permissions | FAILED | 0.01s | Regular user should fail to update role without permissions |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (547.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "userId": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
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
    "etag": "W/\"fd-JXDpYIwAbdrserg5qaj+bC/mVlc\"",
    "date": "Tue, 27 May 2025 21:11:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "6709d3c7-2a3b-44b1-8df6-cf50aa03a569",
    "userId": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:11:35.346Z",
    "updatedAt": "2025-05-27T21:11:35.346Z"
  }
}
```

**⏱️ Duration:** 547.2 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (482.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "userId": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
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
    "date": "Tue, 27 May 2025 21:11:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error inviting user",
    "details": "User is already a member of this organization"
  }
}
```

**⏱️ Duration:** 482.4 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.28s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (884.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1748380295938@example.com",
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
    "etag": "W/\"5dc-p3ClSKZqWXPNziUU8iuIO9jKxME\"",
    "date": "Tue, 27 May 2025 21:11:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "HfpxtsfaDoNRDJuX7iMzD1LM8dH3",
      "email": "no-perm-invite-1748380295938@example.com",
      "name": "No Permission Invite",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDI5NiwidXNlcl9pZCI6IkhmcHh0c2ZhRG9OUkRKdVg3aU16RDFMTThkSDMiLCJzdWIiOiJIZnB4dHNmYURvTlJESnVYN2lNekQxTE04ZEgzIiwiaWF0IjoxNzQ4MzgwMjk2LCJleHAiOjE3NDgzODM4OTYsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0ODM4MDI5NTkzOEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ4MzgwMjk1OTM4QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.aKPUofkE1lomuOxrrFBSr6sBKY1JdciJquhoLFsKXiC7Xbgf1XshId5_ZsL4AFpCnDQPzJ7qiRE33TE8_bIFLBBUAvXRIcUxWWNT1JIpG7tWunAwrF6n9Xom-goGTxBt-_0v_k-LFGFDM0I6Y-hRFVgLOUe_3-NgkXkpHP_51NQrVIOyWkKhys0uyDgZrcPu7sLyvRTHF_-sVf6SDtLU5DpDpgT0FJM6NCZyvYsJqnhBmEdhBuslqXx7a5YA_mlaLTj_Cz6B3945oPmzgzDYcCKfdkZGIaTFuMWVYWg-bQ-M5KPoOltpZapTJO5yYCsfZVKz4bzJSfwfNltkqaRlNA",
      "refreshToken": "AMf-vBxwe-fS7ChLDBRBbXDg8gzF0g2ptm656oiBJMJldJ4UHMLyxNYHkW8uS1GvEe0jv9Wwvy5MoEklZD49jTuEpcKy-9yN0thijj0-1VcNVOAecPp9ivXhkfU7LaAarDuEHuNAmAau0xSFzyxbOojMtdTCsJatwvd8JXPAX8LEN8cCjwQKHktIiuxAikouPmajuX7W9AIVugMBaHmhdxTmcx26M_eIq9puZz_ubrDww2JrXhFfkOA52Yt1mrysgW9CeVkZvShq",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 884.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (396.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDI5MiwidXNlcl9pZCI6IlFwSHF1NFpRY2JTU0hrMWZ4b2xKYTk0dkU4VjIiLCJzdWIiOiJRcEhxdTRaUWNiU1NIazFmeG9sSmE5NHZFOFYyIiwiaWF0IjoxNzQ4MzgwMjkyLCJleHAiOjE3NDgzODM4OTIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDI5MDYyMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwMjkwNjIwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oMv6kIxQMzyOPlUt1HSc8jNg-o1gMJX2UD5AamKjB2de-EzN94TWsc7X2ufVcyEYwy6Nl3enuH9uv-zfjuKqGLDsPhXjeMrDezrPCAuuGzD-5Q5YfJw4vKViPiyhVf_JwrRAzUBt7WKWdPsWKZE_6bQNsrTrxtbEmP8zyjgeblZoM0Tsq4Zze0G-tO1vf6weQEhnw_SmoSSB7svfrZVPgwuhguK2kv4ylTFNP5w7v3MFDYKCXVLVxSO6iyVNnyE7HVbptwGghz-52ONylniiariKgX-mGvCUf1dtJLFXU1z5tcwKG1Hi3v3QwqiHH06aTXwY52w0IlEir16eOnChfQ"
  },
  "data": {
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "userId": "HfpxtsfaDoNRDJuX7iMzD1LM8dH3",
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
    "date": "Tue, 27 May 2025 21:11:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 396.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 7.96s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (907.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1748380297222@example.com",
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
    "etag": "W/\"5ae-wAkAdW5aBpp8dk/HQ7YtNkCP1+8\"",
    "date": "Tue, 27 May 2025 21:11:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
      "email": "admin-user-1748380297222@example.com",
      "name": "Admin User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDI5NywidXNlcl9pZCI6IjJrem0zTURiT0hPa1J4Y1hOM3NaZ2VQOTg3dDEiLCJzdWIiOiIya3ptM01EYk9IT2tSeGNYTjNzWmdlUDk4N3QxIiwiaWF0IjoxNzQ4MzgwMjk3LCJleHAiOjE3NDgzODM4OTcsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ4MzgwMjk3MjIyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0ODM4MDI5NzIyMkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eXuQzgxA3Fo0DJosACX5GUw-pdWcSe3smfOgE3JRXMVA_de0ww1KmYHWn5e0m0eEgw_hLk8i0lMQekpxoWgNu8OrsZqw5_B9E8riuAHI9IodHhDfmf8AWaFhZ9WABoWWWlF_N1OCPNQ35onQTq65JUJMVFLXDO31hxG1bR9ttjpD5ZB68qzn9kwGfT3OPu7De9G7wCHVaJgyUs6DaLdv_fX1da1ZnLQcIl1wSy6xU5baRtu9scDfFSZu0xBHrsi1eog-XWB88lutSUvyXV0Cd9xI334sro5angdrKCX6T8hRcsebcbAXJV3VHIasDBF-uQXNI99KoD1hsWOOFcky8Q",
      "refreshToken": "AMf-vByU1_dsF3M5Ib0CyFv6Cq83tHs9VDYXDta2yW4c_FM3nnW-7ptGPA221OwRcC5_e-iO81FPcLPFSoyU283rN5XyTRNVHMNQhQ5m-KsdZYjjVAazbhFtq8muXB6ZVWCgSSvkz-pZncL7GcDlikfntXCT7ze2Wjo9BcgtdYcoY3qn-z2iqHE2UJlHbl3YPjqC8WZqd61s9mkIvN-YPHLz6JFmSHWp4onhb8-PdiU1nNnzk1isDvI",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 907.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (450.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "userId": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
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
    "etag": "W/\"fc-OTxa5JR1X9KFI3IKI7PSMY9NVqg\"",
    "date": "Tue, 27 May 2025 21:11:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "26cf7874-7ade-4942-9226-dc93665291a8",
    "userId": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-05-27T21:11:38.525Z",
    "updatedAt": "2025-05-27T21:11:38.525Z"
  }
}
```

**⏱️ Duration:** 450.3 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (949.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1748380298581@example.com",
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
    "etag": "W/\"5b8-A97mG7gbDipDxSuYVZWfV9I0j4c\"",
    "date": "Tue, 27 May 2025 21:11:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
      "email": "manager-user-1748380298581@example.com",
      "name": "Manager User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDI5OCwidXNlcl9pZCI6IlFPeGxEY0Y1UTFjVXlqNU1lMmMzOWUxQzhzajEiLCJzdWIiOiJRT3hsRGNGNVExY1V5ajVNZTJjMzllMUM4c2oxIiwiaWF0IjoxNzQ4MzgwMjk4LCJleHAiOjE3NDgzODM4OTgsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDgzODAyOTg1ODFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDgzODAyOTg1ODFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.M2uvuAU_pZR5tz_hCjqqvZSN5UwzqasD0mNT7sfm_2Ex8Ny75VNt7kjHko8YaskTUhA7WVpM2LT7ArbIG4CXVbFu-9tGdbTPl-wmFNypy08W_2Lrrj4Y_z7uopAyESR3UI4w7kBlj7kEYg_Y07xfHPV2N-2zZPAVAUoyU7XoDtsuzj5F-q_UoJRHIt7kaY4qROYtWzn4mG-sxBcmSKLEJq0yL49xhUGt7YuM2k7d3Yu4oXJLeKmSxOAaN5bK3HhpxRtrdCj8M0K0V1cpHfODx3xwjBu_KobWGEXSQmd3vj0IhAqSJarMY42xfJ4K087UcyPYbOsHqlT27IyTJ8HlyA",
      "refreshToken": "AMf-vBzNRTxrb4dx55D6M31TqZamqBjqV9H51uPdHQf3FIo3MTL66_0RZGFDIcFog2LpGzFF1xx4IumG8y_YY2FiBw4ykOEMq1mA6QMmdB4BhW06WVnjHcatViZ2pkqYFEm3fwJym4D00ux4q2wp9JOYw83gQPcKT5lSMhBrVZq_fDtRdbDHr8IBdeo9PgfDyGgxb_SAJc7Hjwei3L9s0b7cjuEE7ioErJ3eCRYlftqhKyR4LmaaViU",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 949.9 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (567.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "userId": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
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
    "etag": "W/\"fe-7lwPE6SyI/fTCzb4E/7ZGhLhbZA\"",
    "date": "Tue, 27 May 2025 21:11:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "8c4352c4-4379-4689-ae59-7773d7f0fd3b",
    "userId": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-05-27T21:11:40.037Z",
    "updatedAt": "2025-05-27T21:11:40.037Z"
  }
}
```

**⏱️ Duration:** 567.6 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (850.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1748380300099@example.com",
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
    "etag": "W/\"5d6-n67qSlsEtaH+JxjT5svrxynRoU0\"",
    "date": "Tue, 27 May 2025 21:11:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
      "email": "moderator-user-1748380300099@example.com",
      "name": "Moderator User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDMwMCwidXNlcl9pZCI6IlFXRXdnaXczeEpRS1JhdEdrMmMzV3F0dUhjVjIiLCJzdWIiOiJRV0V3Z2l3M3hKUUtSYXRHazJjM1dxdHVIY1YyIiwiaWF0IjoxNzQ4MzgwMzAwLCJleHAiOjE3NDgzODM5MDAsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0ODM4MDMwMDA5OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ4MzgwMzAwMDk5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.iYenRO0gyUNNBzdN7YL4nXNSuvsfEIdIDr2g_kJTd8y-N5cSS-q_UsAhQJzuJBVWMubLSXsQKla4mW2bdxj1qGwwW0Cv47IXoHKCGDMXGn1PRxyy-WiBNEosy4ANLuVEX1Hd9dyEUPKUMY9da-BrckKvUcd5l7RyNXHSW8PMiJvKtcTCKR6_R4iH9d4NxMYkRBVIl65ZlUsygEDPALPqxlzsav1arlb0dJIM4cbQDt931ic4qkcOIBNM9J2-Ad4zPbC7A9MS9_UTvhJuxtPSnqpoSGAL61ire6PJ17s-wL_I1JyWTVJLVSzVWtvh7R2vW0IAENpviMs5rtYs6qMWhw",
      "refreshToken": "AMf-vBzxiC4Vrq7wlOC6qJLowBDBE8fd_77_xXJonsxv5Dgqb1KUvj7kYHevRVVsD_G0XgI-rnx-dRNOG3JnMKF3jIK70jOilBp0RKJTXvRlXsWxIEh385MlH-gwSN1RsRsjUneUDsL4mZ2QOQXfx8964S3_o2LIFEt6emN_pWbb6Xbo3J-85OU_LmYzIffgQU_BvmEssxi4ViMCjBtK0Mt_GTIjSVG6qJooYYB-FGWuyQyl3sB1x8k_NXhR_qE1Qx2XqaIvw8MD",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 850.6 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (867.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "userId": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
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
    "etag": "W/\"100-B7/gG1HzEFmZrpFMDskKBMAEQME\"",
    "date": "Tue, 27 May 2025 21:11:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "c4a0ed2a-42b8-44ae-9932-41ea7c0e0010",
    "userId": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "role": "moderator",
    "status": "active",
    "createdAt": "2025-05-27T21:11:41.760Z",
    "updatedAt": "2025-05-27T21:11:41.760Z"
  }
}
```

**⏱️ Duration:** 867.2 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1271.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1748380301817@example.com",
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
    "etag": "W/\"5d6-R/MWH6/WfUcX106MnNFHDymTYnA\"",
    "date": "Tue, 27 May 2025 21:11:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "pWYOXREIeUVMp24IGm0N7hykbd52",
      "email": "volunteer-user-1748380301817@example.com",
      "name": "Volunteer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDMwMiwidXNlcl9pZCI6InBXWU9YUkVJZVVWTXAyNElHbTBON2h5a2JkNTIiLCJzdWIiOiJwV1lPWFJFSWVVVk1wMjRJR20wTjdoeWtiZDUyIiwiaWF0IjoxNzQ4MzgwMzAyLCJleHAiOjE3NDgzODM5MDIsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0ODM4MDMwMTgxN0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ4MzgwMzAxODE3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.tG3M2m2_GPD4sBMCB7OWYcEqxIppAAd6-3g6KZD62oIlhK5y-Ufz7uVVG_qWAeAPx_G88CuVVJokTfSP9_sGFKJ4plywp96UzvCXc8Ql1Z0YlKbjkCW2zGHjEAdPW3VheV9OvY4O4gAlgOxHEdYI6-u2JU8zbvvgfeRor4NJTr1WaDLzlOVbEnAxWbGFWz2r1KEAUSTzteekmYHa0JsqizAQgyptq-HH6NgA51_AYBM4Vc4IQJncJdgecYzhYBY5_j_5x9Z1KnyRgxpzvELHVtUpOuWwYP5mC9nKl6fVth97iynm8HniRML0RWw9oaCs1jStvtgVgh28RMX8Te0KiA",
      "refreshToken": "AMf-vByu6SoFIJJePoO0h1WEFxXVbUL_qP2YWuvcWMCId9An1_pJY-m-wrBj-_yGTgKDaH1xJqKNjlbE2y-kv6f3nNjOWY36bg2GvweL5HVR9L06gPIofVvMVDRKqi4P_JG9cskid4NBjPtyKP93orQ41zMqG6gjKTGM6KuyTuqoqzk0ifNIWeGC21M33L-w-e6pcEsgh5Gb5pEYU5mhgMigpMMt90pi_wSa2z762ISEQOH1OrF37i9yMr9tlgKLpeu7CQLrXzk2",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1271.2 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (551.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "userId": "pWYOXREIeUVMp24IGm0N7hykbd52",
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
    "etag": "W/\"100-1WgXKLDaahF2/Hydnq4rbJmMgRs\"",
    "date": "Tue, 27 May 2025 21:11:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "591f1eae-bcee-4dce-9429-895ba426f641",
    "userId": "pWYOXREIeUVMp24IGm0N7hykbd52",
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:11:43.585Z",
    "updatedAt": "2025-05-27T21:11:43.585Z"
  }
}
```

**⏱️ Duration:** 551.7 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (983.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1748380303641@example.com",
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
    "etag": "W/\"5bc-yEAr98bSMVjyGiC2zVlYx6Mvjjc\"",
    "date": "Tue, 27 May 2025 21:11:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
      "email": "observer-user-1748380303641@example.com",
      "name": "Observer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDMwNCwidXNlcl9pZCI6IlRubXlOcFNuUzdlbTlZMkg0cWtmZjdsZUw1cDIiLCJzdWIiOiJUbm15TnBTblM3ZW05WTJINHFrZmY3bGVMNXAyIiwiaWF0IjoxNzQ4MzgwMzA0LCJleHAiOjE3NDgzODM5MDQsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ4MzgwMzAzNjQxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0ODM4MDMwMzY0MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Q8cnlJ3fQAVtoTj90ridCq9STuV13L4pk8e_qlLnt8rZm2fFoUBQDAQjw6HNAWUes9aOjNUC90OFOqhYd90wzG_fCo6vVvul5nroxkN28xSXZK-Tltt1coYKOcjefHQI_2W9q7F5byuxrJNCdGI-mTb7UXsXyfhKf_9v65On_5coypc7mUJl296gS3HM49vDF_uZM_xKMPBJ0-_Cux0oCIllWSZKvaMf9XoUYtXWOiUYJbxD6AlT3AJGsGTXSiUcAFPtYEOibPoJQS6UJt9S5GxbUdOU7b-Z9lH88tvVDqqsjmT-SSbTfuxQJg1YF5_LJnBssLJhISLaaMPl9fPcCQ",
      "refreshToken": "AMf-vBynTyE2zCGx_m5XDnSdoeAIBVVr2aJvxYiFX8bz6-uLLAxthkiMxujO7p5X3zwprD3yy_GcWb6Qw5ijlOMkf2FR02taNDiQVy5_s4aifI4veihmEgeqobGb_YNSG4Emhy9puHipTrUNrIiXQ6R_OMYG2wwO2P9-OIrUhJRYDP_VGmmIlTYicvoEAKS5nZZbcttqnvqz25yCNNwNVy5cQwgRBRaemckEpK8c5uUGinHBH5E_XaA",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 983.6 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (556.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "userId": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
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
    "etag": "W/\"ff-3kdMCFpVcLsziYjzNkE7WMEvmfk\"",
    "date": "Tue, 27 May 2025 21:11:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "3b324cbf-fd34-423b-935b-c8e6a7746a0e",
    "userId": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
    "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
    "role": "observer",
    "status": "active",
    "createdAt": "2025-05-27T21:11:45.124Z",
    "updatedAt": "2025-05-27T21:11:45.124Z"
  }
}
```

**⏱️ Duration:** 556.0 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5c4b53dc-277f-42cc-b208-44ac6fbaf0f9 (599.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  }
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
    "etag": "W/\"5fd-2dJs7/GcCGlu/ibwzfYF0eGiulo\"",
    "date": "Tue, 27 May 2025 21:11:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "6709d3c7-2a3b-44b1-8df6-cf50aa03a569",
      "userId": "9e4jLRGIJOSQSEIjHTCHdCm5bOl1",
      "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
      "role": "member",
      "status": "active",
      "createdAt": "2025-05-27T21:11:35.346Z",
      "updatedAt": "2025-05-27T21:11:35.346Z"
    },
    {
      "id": "26cf7874-7ade-4942-9226-dc93665291a8",
      "userId": "2kzm3MDbOHOkRxcXN3sZgeP987t1",
      "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-05-27T21:11:38.525Z",
      "updatedAt": "2025-05-27T21:11:38.525Z"
    },
    {
      "id": "8c4352c4-4379-4689-ae59-7773d7f0fd3b",
      "userId": "QOxlDcF5Q1cUyj5Me2c39e1C8sj1",
      "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:11:40.037Z",
      "updatedAt": "2025-05-27T21:11:40.037Z"
    },
    {
      "id": "c4a0ed2a-42b8-44ae-9932-41ea7c0e0010",
      "userId": "QWEwgiw3xJQKRatGk2c3WqtuHcV2",
      "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-05-27T21:11:41.760Z",
      "updatedAt": "2025-05-27T21:11:41.760Z"
    },
    {
      "id": "591f1eae-bcee-4dce-9429-895ba426f641",
      "userId": "pWYOXREIeUVMp24IGm0N7hykbd52",
      "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:11:43.585Z",
      "updatedAt": "2025-05-27T21:11:43.585Z"
    },
    {
      "id": "3b324cbf-fd34-423b-935b-c8e6a7746a0e",
      "userId": "TnmyNpSnS7em9Y2H4qkff7leL5p2",
      "organizationId": "5c4b53dc-277f-42cc-b208-44ac6fbaf0f9",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-05-27T21:11:45.124Z",
      "updatedAt": "2025-05-27T21:11:45.124Z"
    }
  ]
}
```

**⏱️ Duration:** 599.2 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (616.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  }
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
    "date": "Tue, 27 May 2025 21:11:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 616.7 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ❌ FAILED  
**Duration:** 0.07s  
**Error:** socket hang up  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=QpHqu4ZQcbSSHk1fxolJa94vE8V2 (66.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDI5MiwidXNlcl9pZCI6IlFwSHF1NFpRY2JTU0hrMWZ4b2xKYTk0dkU4VjIiLCJzdWIiOiJRcEhxdTRaUWNiU1NIazFmeG9sSmE5NHZFOFYyIiwiaWF0IjoxNzQ4MzgwMjkyLCJleHAiOjE3NDgzODM4OTIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDI5MDYyMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwMjkwNjIwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oMv6kIxQMzyOPlUt1HSc8jNg-o1gMJX2UD5AamKjB2de-EzN94TWsc7X2ufVcyEYwy6Nl3enuH9uv-zfjuKqGLDsPhXjeMrDezrPCAuuGzD-5Q5YfJw4vKViPiyhVf_JwrRAzUBt7WKWdPsWKZE_6bQNsrTrxtbEmP8zyjgeblZoM0Tsq4Zze0G-tO1vf6weQEhnw_SmoSSB7svfrZVPgwuhguK2kv4ylTFNP5w7v3MFDYKCXVLVxSO6iyVNnyE7HVbptwGghz-52ONylniiariKgX-mGvCUf1dtJLFXU1z5tcwKG1Hi3v3QwqiHH06aTXwY52w0IlEir16eOnChfQ"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 66.3 ms  
**❌ Error:** socket hang up  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ❌ FAILED  
**Duration:** 0.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (13.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 13.9 ms  

</details>


**Console Output:**
```
❌ Network error in test: 
```

---

### Test: Regular user should fail to get other user memberships
**Status:** ❌ FAILED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDI5MiwidXNlcl9pZCI6IlFwSHF1NFpRY2JTU0hrMWZ4b2xKYTk0dkU4VjIiLCJzdWIiOiJRcEhxdTRaUWNiU1NIazFmeG9sSmE5NHZFOFYyIiwiaWF0IjoxNzQ4MzgwMjkyLCJleHAiOjE3NDgzODM4OTIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDI5MDYyMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwMjkwNjIwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oMv6kIxQMzyOPlUt1HSc8jNg-o1gMJX2UD5AamKjB2de-EzN94TWsc7X2ufVcyEYwy6Nl3enuH9uv-zfjuKqGLDsPhXjeMrDezrPCAuuGzD-5Q5YfJw4vKViPiyhVf_JwrRAzUBt7WKWdPsWKZE_6bQNsrTrxtbEmP8zyjgeblZoM0Tsq4Zze0G-tO1vf6weQEhnw_SmoSSB7svfrZVPgwuhguK2kv4ylTFNP5w7v3MFDYKCXVLVxSO6iyVNnyE7HVbptwGghz-52ONylniiariKgX-mGvCUf1dtJLFXU1z5tcwKG1Hi3v3QwqiHH06aTXwY52w0IlEir16eOnChfQ"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10.3 ms  

</details>


**Console Output:**
```
❌ Network error in test: 
```

---

### Test: Admin should get membership by ID
**Status:** ❌ FAILED  
**Duration:** 0.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/6709d3c7-2a3b-44b1-8df6-cf50aa03a569 (15.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 15.2 ms  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ❌ FAILED  
**Duration:** 0.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (11.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 11.9 ms  

</details>


**Console Output:**
```
❌ Network error in test: 
```

---

### Test: Admin should update member role successfully
**Status:** ❌ FAILED  
**Duration:** 0.02s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6709d3c7-2a3b-44b1-8df6-cf50aa03a569 (21.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "role": "manager"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 21.0 ms  

</details>


---

### Test: Should fail with invalid role
**Status:** ❌ FAILED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6709d3c7-2a3b-44b1-8df6-cf50aa03a569 (8.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMjg5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAyODksImV4cCI6MTc0ODM4Mzg4OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Y0UaeFnl1Teegdx_4KKp68z0fDInwOeQPmAbZJ5G_V8U0kbujUTJM4_uzUaiG7ii1dnp75D-8uDo9Txje5WoD6OIIdYIEmDFamaHjnsfayKQz7jjBSfT3sDp8Tz7oyiUMI-NsekhwFVxWcuMLJhz3mAQ7IFYR_b0pCBM4FEL4i2F2H3GJgiGQ_tFBBjTek1eTKNu01BJfq7cazTOeJ3Lk2r1nK4uLgUwpAwvWVzTg8WBb4LJjYxPMx82NrCdDDr4aI9P_s0O4E6CstJblxTJM0s9l0ZvygpYa4X7WXox6bJWzPhLcAvMvWclnrBSXzywzGwYRs9ePozWxSA_AloKuw"
  },
  "data": {
    "role": "invalid-role"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 8.4 ms  

</details>


**Console Output:**
```
❌ Network error in test: 
```

---

### Test: Regular user should fail to update role without permissions
**Status:** ❌ FAILED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/6709d3c7-2a3b-44b1-8df6-cf50aa03a569 (6.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDI5MiwidXNlcl9pZCI6IlFwSHF1NFpRY2JTU0hrMWZ4b2xKYTk0dkU4VjIiLCJzdWIiOiJRcEhxdTRaUWNiU1NIazFmeG9sSmE5NHZFOFYyIiwiaWF0IjoxNzQ4MzgwMjkyLCJleHAiOjE3NDgzODM4OTIsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDI5MDYyMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwMjkwNjIwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oMv6kIxQMzyOPlUt1HSc8jNg-o1gMJX2UD5AamKjB2de-EzN94TWsc7X2ufVcyEYwy6Nl3enuH9uv-zfjuKqGLDsPhXjeMrDezrPCAuuGzD-5Q5YfJw4vKViPiyhVf_JwrRAzUBt7WKWdPsWKZE_6bQNsrTrxtbEmP8zyjgeblZoM0Tsq4Zze0G-tO1vf6weQEhnw_SmoSSB7svfrZVPgwuhguK2kv4ylTFNP5w7v3MFDYKCXVLVxSO6iyVNnyE7HVbptwGghz-52ONylniiariKgX-mGvCUf1dtJLFXU1z5tcwKG1Hi3v3QwqiHH06aTXwY52w0IlEir16eOnChfQ"
  },
  "data": {
    "role": "volunteer"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 6.7 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (10.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1748380306607@example.com",
    "password": "TestPassword123!",
    "name": "User for Removal"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10.7 ms  

</details>


**Console Output:**
```
❌ Network error in test: 
```

---



---

## Legacy Format (Payloads & Responses)

### Payloads Sent


### Curl Commands


### API Responses


---

## Status & Observations



**Observations:**
- Test organization: Test Org for Memberships 1748380292595
- Total memberships created: 6
- Total test users created: 8
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
