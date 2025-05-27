# E2E Test Report: memberships-tests

**Date:** 5/27/2025  
**Time:** 11:08:52 PM  
**Duration:** 16.78s  
**Tests:** 14 total, 6 passed, 8 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.70s | Admin should invite user to organization successfully |
| ✅ Should fail to invite same user twice | PASSED | 0.52s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.56s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 8.07s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.58s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.48s | Admin should get memberships by user |
| ❌ User should get their own memberships | FAILED | 0.08s | User should get their own memberships |
| ❌ Should fail without userId or organizationId | FAILED | 0.01s | Should fail without userId or organizationId |
| ❌ Regular user should fail to get other user memberships | FAILED | 0.01s | Regular user should fail to get other user memberships |
| ❌ Admin should get membership by ID | FAILED | 0.01s | Admin should get membership by ID |
| ❌ Should fail with invalid membership ID | FAILED | 0.01s | Should fail with invalid membership ID |
| ❌ Admin should update member role successfully | FAILED | 0.01s | Admin should update member role successfully |
| ❌ Should fail with invalid role | FAILED | 0.01s | Should fail with invalid role |
| ❌ Regular user should fail to update role without permissions | FAILED | 0.01s | Regular user should fail to update role without permissions |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.70s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (697.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  },
  "data": {
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "userId": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
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
    "etag": "W/\"fd-m6i0vfa+6nxwEwGJfBy0luHr5qQ\"",
    "date": "Tue, 27 May 2025 21:08:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f26294f1-8234-4a38-97b9-d15ffb862468",
    "userId": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "role": "member",
    "status": "active",
    "createdAt": "2025-05-27T21:08:40.889Z",
    "updatedAt": "2025-05-27T21:08:40.889Z"
  }
}
```

**⏱️ Duration:** 697.4 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (514.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  },
  "data": {
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "userId": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
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
    "date": "Tue, 27 May 2025 21:08:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error inviting user",
    "details": "User is already a member of this organization"
  }
}
```

**⏱️ Duration:** 514.3 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1029.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1748380121530@example.com",
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
    "etag": "W/\"5dc-Zxtcr2huQoGdi8n2Lu5uxYjnJ0c\"",
    "date": "Tue, 27 May 2025 21:08:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "cWp32EMc5pXcQYnOvj8CA1K3fss1",
      "email": "no-perm-invite-1748380121530@example.com",
      "name": "No Permission Invite",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDEyMSwidXNlcl9pZCI6ImNXcDMyRU1jNXBYY1FZbk92ajhDQTFLM2ZzczEiLCJzdWIiOiJjV3AzMkVNYzVwWGNRWW5Pdmo4Q0ExSzNmc3MxIiwiaWF0IjoxNzQ4MzgwMTIxLCJleHAiOjE3NDgzODM3MjEsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0ODM4MDEyMTUzMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ4MzgwMTIxNTMwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.mKqsEfva_5K4nuHyFmOqTzhYRW62HNTcvLwX3eB4WHaSKfhMyw_gDpmsQPHOiW9f0yeOdOLaUbn48UevJqrvhkLt1RAnHAZP6nwdwhtSJcKq7PZ9OFJ3C_K6ol7D3YZZhc12azPXlLAoInIsWR8dwHkl_tZltncBQyg4C645KsBdW7PYr_SL8bZgm_WAFfigX6OwbajDKF0cNa-60a4JszHvAYIvajAKQYCiEvCuysbVwDXYjORZ3t2M-0TuQNpKon1EtbMq_-4f6mdfn9jgfp-96Z2xLbOCUXuQ4aCooMRThaG_KPsxceWb0Xv2wkUJ52kr-rIEXSQZemQihbKcxA",
      "refreshToken": "AMf-vBziw855xki2fHFtLKBNiY1IHfryIDnmht2re8p9MVVga4orus2MhNg4oxlLhT5zyyGLCnI8ckAAwWaiEQ1Zcv68T9stzchZMuHIQJQbPNnt0zMutNZVhH2ctVb2bKeXpLFp9nhS0quIGvEWAOf2WcURmb3bHiYPFJ7iNxA0Agr6m7aVr6B7_zakW9lIZutkt59h2vk3jVEp_A0m0VtNGXJpRzfclm5VBkMOE8CmvZB5k5Gp346OWtL-67VlR68V3fsgIoDf",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1029.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (527.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDExNywidXNlcl9pZCI6InpCeDRzUVdBWDlmVUl0MEVuQlRGSHRkTFVUNzIiLCJzdWIiOiJ6Qng0c1FXQVg5ZlVJdDBFbkJURkh0ZExVVDcyIiwiaWF0IjoxNzQ4MzgwMTE3LCJleHAiOjE3NDgzODM3MTcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDExNjQyMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwMTE2NDIwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.IwJ5HBycEyzkn3WEK260x5qqBEfPphhPL-8QjPXTkMiURQZjo9fZerr6Cy9AHWBh2vDtkd6ZsaTPSOH1AHVLqsZGv7uoQ8loiLJkVG55SYwW_FGKWVJatTf-u3L-dxcMyDKBttuaFJC4LIPdYYhVVMiLvadGCIsk1BYBIg4hx6Fho2qbZf1eP9qNWa0VEtluhxuioj1DYskfPQbeSu60BN2FpLH57FTVKp8WIkNfMEc1zwBDsJGNeTXrCUCTqSB-Gd0NYSlCrCxtRbob4qoAKYW0cEuxxH7nxMhtRiMLftfIbikwwO8k9Ita-6ouiscHm-PXP9NhT3FDZab4P4wBdw"
  },
  "data": {
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "userId": "cWp32EMc5pXcQYnOvj8CA1K3fss1",
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
    "date": "Tue, 27 May 2025 21:08:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 527.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 8.07s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1007.0ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1748380123090@example.com",
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
    "etag": "W/\"5ae-1aFHwwSijIIml1RkaVdGdaysf+I\"",
    "date": "Tue, 27 May 2025 21:08:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
      "email": "admin-user-1748380123090@example.com",
      "name": "Admin User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDEyMywidXNlcl9pZCI6IlhJSFhJR3Q3YUFSUTJvVkFqVW9ySEprZ3JWMjMiLCJzdWIiOiJYSUhYSUd0N2FBUlEyb1ZBalVvckhKa2dyVjIzIiwiaWF0IjoxNzQ4MzgwMTIzLCJleHAiOjE3NDgzODM3MjMsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ4MzgwMTIzMDkwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0ODM4MDEyMzA5MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.N0P3_RoqdtCCfDGSsctg51z2IaV7udv8zVFgVLsxaiho7CeZc_OTffA3xpNMesBMchrHGDpA6j9RiCcfEbMfbiKEDyBOJNNts9nUfMeszRbm7GBINirCFFhxq8l47hsIAyxtK4kU_k0iVUOok_aQEBAC9hbEPBcTiWPBkMf1-15sosio11oIbKHkdhalt-IGQhlcX-rf2ArFE1Yr4vII8vVSfHIgNEnLXX98jCHxS19oyhU9P3Fx7W1P_69MZCt_5_fXI1_3mVf9Iymqqen8MqYIBU0X7zEFLcA9Ng6nfi_uZVvdtk7ew0nWXsXmpD1J9sqz256kxEo-3vHsr_FB_w",
      "refreshToken": "AMf-vByOLPiYqA5Og7rm7-UhQ91VrK7mYintwA5FtFVX2NrPadol9oqiMkkGn1fkG9-sIQ6tOyyVZX9L9TDV7PMz1e_Xo2pj1b9VJZC4d3d7SFsgFFjUjj6MGKgnzr8BdcdLfgmJi3gci_y3SddYDBF4fMHYSCUbeYcR0r5l9Y2FVIs8ozCPZwDYbCGtN2tBwjr-ws59KOUVmTX_IVcjU7x2_u7zlh7BBkSAowhsoEVtWjLK8jfgdLQ",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1007.0 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (585.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  },
  "data": {
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "userId": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
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
    "etag": "W/\"fc-6kIgaJciDv3nkcdABxhJTigy/GA\"",
    "date": "Tue, 27 May 2025 21:08:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "1132d807-d4b6-41f7-bd2e-08b182d662bb",
    "userId": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-05-27T21:08:44.619Z",
    "updatedAt": "2025-05-27T21:08:44.619Z"
  }
}
```

**⏱️ Duration:** 585.5 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1051.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1748380124683@example.com",
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
    "etag": "W/\"5b8-QQyiG6sfA+8fwwHFBn9oHJinR88\"",
    "date": "Tue, 27 May 2025 21:08:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
      "email": "manager-user-1748380124683@example.com",
      "name": "Manager User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDEyNSwidXNlcl9pZCI6ImJxbkNmRTA3bEpjQWVDNFVjYXdQN3R6SzFRVTIiLCJzdWIiOiJicW5DZkUwN2xKY0FlQzRVY2F3UDd0eksxUVUyIiwiaWF0IjoxNzQ4MzgwMTI1LCJleHAiOjE3NDgzODM3MjUsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDgzODAxMjQ2ODNAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDgzODAxMjQ2ODNAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fBG2oOmT4wsQjiwtEE94nng6XyB3lYUiQCeBNtNFQJQLog8U5usqrIS98FXhAdoVzCoXsBujo5N7LC-3hyRO3fkPwmpszGXmzuleYzCt7KiagqkzFA0k9OBybH1c6NTjjjbCGhEz4I6bKQCVSP5tzm_ijT7brcDhNbaLDBKpWr68mxBj_sAEpeYR9d1G4qiW_onrQBUQ_gAg5sKjyafuhhWORhNTAsOoaJwzRpUGxb8Z7_rxNVZzUzdDfFlCYhHYEm4a8R1GUNe4VnHJZOkzqce9FLjxCfqA-9MIB3X5NBilPOUZyt2XrA9NIHrKw6giYMzbhcn-HznWjYMcgkGjtA",
      "refreshToken": "AMf-vByRd6qr2AQn-_eP3FPP3NLIrUitpBFN1sbTnHd70PVpbTNNpc2KjRV-Ogxji4AMLFyZ7ipxL5SpFaeODNYqPYxNFj0H6FFxWVBPqiB7VRH9MY6YaXQCHU1mpiUqf3lk0Ds4kznezPnSzLhhuz2hciMD0uNvEMsBuOKxLrQcsiJJx__edmM8tk3pmYsDejf6noQJVeZvctWSZv7yfWNbu3wGU_7yJjuaArd8Ik0ULgbEmERGS8Q",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1051.4 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (478.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  },
  "data": {
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "userId": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
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
    "etag": "W/\"fe-KFq7UQ2BSAAJ1Pd1vJ3odw5ySl8\"",
    "date": "Tue, 27 May 2025 21:08:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "e88af3ac-8993-4b57-9e24-3ec70bdcad71",
    "userId": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-05-27T21:08:46.151Z",
    "updatedAt": "2025-05-27T21:08:46.151Z"
  }
}
```

**⏱️ Duration:** 478.9 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1159.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1748380126214@example.com",
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
    "etag": "W/\"5d6-cwtaSf4iyqMN6ecSU8jp04my8W4\"",
    "date": "Tue, 27 May 2025 21:08:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
      "email": "moderator-user-1748380126214@example.com",
      "name": "Moderator User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDEyNiwidXNlcl9pZCI6ImJPdVlnaExUbDFPTmZXNDJkOTRoR01lN0ZzejIiLCJzdWIiOiJiT3VZZ2hMVGwxT05mVzQyZDk0aEdNZTdGc3oyIiwiaWF0IjoxNzQ4MzgwMTI2LCJleHAiOjE3NDgzODM3MjYsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0ODM4MDEyNjIxNEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ4MzgwMTI2MjE0QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BtEMxiQLtigDVtMqV4Ynt_E9xjgEysHOxTSE6o0rk7-e_CH9J4zTJ86kxi6AkddnwhlNlDO0QI_KvraTdz9C1y50Nu1IUIczyd1KQ8L8Zl0D831Mh7Au7WmKEUaaDoyiJt14ugCuKQy8bDQBgviiJSD3L1md8mhBacMTBxdAsyFvmB80B6vUQ52T158bhK9nyZkqs8hSqIi47NGSboCsz0wz2USpR6PXXC3BfbEO18xR_f_k0Hcs5GcRruBbNSpX2jVkHsqXQGAUxoge-TSk61kdW6i2yigOB4gQuaTbTb7mpu4L1jgcAACbnJNr0ouuGZNBnc6BvmxsE98raSwvdQ",
      "refreshToken": "AMf-vBw6po2SWlDM7UCGY8sil7FpouzM1k6ZBKNAFdc_4CAtY3Cy5QHoEt9SPBFNRb60DChmdg8XJrHeRmHAZXXCJyjkHSypSEB6RObm7FEQ046ELnuvt-LqgQIs0bukeQCYrPxjYpXs4qP9M29c_GrQXkcG64P-Eu1XsZZjDbiUme2m1AtTrBEWsxOG9mTZo8M-GQ9tCx5_stBJ8VsT1e55q9NnvXFZyufpvh-PKIcKYZ3ONaroE4vCprEoMauVG3b1Jj4DTkmR",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1159.2 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (475.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  },
  "data": {
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "userId": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
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
    "etag": "W/\"100-NF7Gjjq6fPeI60pe3CLoW9esYDA\"",
    "date": "Tue, 27 May 2025 21:08:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4c0bb516-10ef-421a-9289-a07ee70e0a35",
    "userId": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "role": "moderator",
    "status": "active",
    "createdAt": "2025-05-27T21:08:47.786Z",
    "updatedAt": "2025-05-27T21:08:47.786Z"
  }
}
```

**⏱️ Duration:** 475.4 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (958.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1748380127849@example.com",
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
    "etag": "W/\"5d6-JoWvGTH0/+8vr4O9lJWY9bs7mpM\"",
    "date": "Tue, 27 May 2025 21:08:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
      "email": "volunteer-user-1748380127849@example.com",
      "name": "Volunteer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDEyOCwidXNlcl9pZCI6ImJOUmtYajZsMm9WanZCVzl2SGZJWFdmUzl0ZjIiLCJzdWIiOiJiTlJrWGo2bDJvVmp2Qlc5dkhmSVhXZlM5dGYyIiwiaWF0IjoxNzQ4MzgwMTI4LCJleHAiOjE3NDgzODM3MjgsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0ODM4MDEyNzg0OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ4MzgwMTI3ODQ5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.MRZN14uTde_PyO3VjUXzB1Gh-fjXmghfOYsnfrV5xJHR8GKGE5TnxdflkhMQSP8TYl6dPrRuvNUG2HwQ3ZdA1SucMlizx_ebDBXGBTdiSZypcIkktkREyL4-9MNNfM81XowAdD4DprYzmEi-ejrGQJIms9FsSsO_EGW7u3wdMadqdr-Z9NsAtLzwpzDbTTHVhiLobTpofjuebJg9GODric4RxEdA9-XHWp-FvosvJUTCECmQPvGFe2Tga1hUf-aSzyTXm0ho__x-7wBM6Y5ly_17ojgHsPXVLcNM7NyN6po67gTpGuHwxUfkWIBPtrd9A_KQMJ9OLW5l36j2m5X22g",
      "refreshToken": "AMf-vBy3MujgTBFEcXFWo0iedlfaSP8jik7WyRcVRk8nEHPpUd2OZCvFKICVIOPlEyCmf6QBkW7ULY2CkUQRGp4NKDjVepHfktyNeAA7PpdLwHP3PKR8sRzLiaLw0agDTFRGsBf210_31GYtk7yHeR8-Wf3wIJ3qDx24OuEgc35epuQdY0fhtItUy3QBvKH1G6CU1k_Ii5Cc181KKHio1uBdSJhvLoERbYmAD_gZz7MloQ-EmZORqWDIdSwY4meAceZebAC61Nb3",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 958.6 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (584.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  },
  "data": {
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "userId": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
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
    "etag": "W/\"100-AlDf66WhkXLp43voRzpYcEKn4QY\"",
    "date": "Tue, 27 May 2025 21:08:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "bad8e4c0-1046-4faa-b9d0-fda80231fa2b",
    "userId": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-05-27T21:08:49.329Z",
    "updatedAt": "2025-05-27T21:08:49.329Z"
  }
}
```

**⏱️ Duration:** 584.1 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1155.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1748380129392@example.com",
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
    "etag": "W/\"5bc-CZ8AsNpkf3gwsPx6KuTc6TvGyqU\"",
    "date": "Tue, 27 May 2025 21:08:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
      "email": "observer-user-1748380129392@example.com",
      "name": "Observer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDEyOSwidXNlcl9pZCI6IlVNMHhWRkFiTDVRUXlUZFNmRXpTS3dLQ1JWbTEiLCJzdWIiOiJVTTB4VkZBYkw1UVF5VGRTZkV6U0t3S0NSVm0xIiwiaWF0IjoxNzQ4MzgwMTI5LCJleHAiOjE3NDgzODM3MjksImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ4MzgwMTI5MzkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0ODM4MDEyOTM5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XGg2d-l0b_Tk7eKJCvGEtuFbmLA3Oe4Zc5K01atY1Q7VkjLq9zjhzgmYYl7z8GPIsXdp8tif-ZYMYeOFsK0JDIfDU2vrfa7EfjuoxfTOQlyy5t_JK8hxSUxzyyDqhxpkpC__iWobUh0U0eIg4T7uCe2I3OpJzcZyBkkCw-wYtgV7pG2ZCbJLmYjfrOL4_UKpmOOXIPJp8x2Wz2eo4zn03lQU9ALQsp80Gx57MFsq-3ccQWYjCUMaBp-s-T2HP_wGjWv3ESBcImdXg85We7w3L6jd3_yhs0Idqi4y7Y87hsbTfynZMrkVMuTDjR11W996QS5btQkzv7CUFfXcoHca-g",
      "refreshToken": "AMf-vBxQG5-V65eldqc5wBPo4wwL7mWXTL6fo4MSRsHGgMA6shpEwmXBwOeAY1u6hCUNPFlsMWPHBVjBpJeDVUpv5mcKLl9-NAHigZXddHKFITypHPPb4WoTxUUjpii_5PF9GUD7md501nIt6zqI1tdHdq1-m5_hcrwQjjrpqwpmMjEe_l4wMOEmsbtPKGk-qV9DCY9zFJxFqO9toer_k3YjqDQvRysjHcVvToEvMBJ2SZa1-tB46TE",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1155.4 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (609.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  },
  "data": {
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "userId": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
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
    "etag": "W/\"ff-F2nARaxDp4uXzDgTdaBhasziMWo\"",
    "date": "Tue, 27 May 2025 21:08:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "55093882-0eba-4452-a65e-6f20f29a2a40",
    "userId": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
    "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
    "role": "observer",
    "status": "active",
    "createdAt": "2025-05-27T21:08:51.096Z",
    "updatedAt": "2025-05-27T21:08:51.096Z"
  }
}
```

**⏱️ Duration:** 609.6 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=4d452f40-f14e-4d3a-af5e-1f85347c56fc (583.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  }
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
    "etag": "W/\"5fd-3a/zkoJEbIQMJp8/pm4bjEiRODk\"",
    "date": "Tue, 27 May 2025 21:08:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "f26294f1-8234-4a38-97b9-d15ffb862468",
      "userId": "fhUD8XDGOsgc2eJYSjSC0hV9Xz03",
      "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
      "role": "member",
      "status": "active",
      "createdAt": "2025-05-27T21:08:40.889Z",
      "updatedAt": "2025-05-27T21:08:40.889Z"
    },
    {
      "id": "1132d807-d4b6-41f7-bd2e-08b182d662bb",
      "userId": "XIHXIGt7aARQ2oVAjUorHJkgrV23",
      "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-05-27T21:08:44.619Z",
      "updatedAt": "2025-05-27T21:08:44.619Z"
    },
    {
      "id": "e88af3ac-8993-4b57-9e24-3ec70bdcad71",
      "userId": "bqnCfE07lJcAeC4UcawP7tzK1QU2",
      "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-05-27T21:08:46.151Z",
      "updatedAt": "2025-05-27T21:08:46.151Z"
    },
    {
      "id": "4c0bb516-10ef-421a-9289-a07ee70e0a35",
      "userId": "bOuYghLTl1ONfW42d94hGMe7Fsz2",
      "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-05-27T21:08:47.786Z",
      "updatedAt": "2025-05-27T21:08:47.786Z"
    },
    {
      "id": "bad8e4c0-1046-4faa-b9d0-fda80231fa2b",
      "userId": "bNRkXj6l2oVjvBW9vHfIXWfS9tf2",
      "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-05-27T21:08:49.329Z",
      "updatedAt": "2025-05-27T21:08:49.329Z"
    },
    {
      "id": "55093882-0eba-4452-a65e-6f20f29a2a40",
      "userId": "UM0xVFAbL5QQyTdSfEzSKwKCRVm1",
      "organizationId": "4d452f40-f14e-4d3a-af5e-1f85347c56fc",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-05-27T21:08:51.096Z",
      "updatedAt": "2025-05-27T21:08:51.096Z"
    }
  ]
}
```

**⏱️ Duration:** 583.6 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (478.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  }
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
    "date": "Tue, 27 May 2025 21:08:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 478.2 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ❌ FAILED  
**Duration:** 0.08s  
**Error:** socket hang up  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=zBx4sQWAX9fUIt0EnBTFHtdLUT72 (76.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDExNywidXNlcl9pZCI6InpCeDRzUVdBWDlmVUl0MEVuQlRGSHRkTFVUNzIiLCJzdWIiOiJ6Qng0c1FXQVg5ZlVJdDBFbkJURkh0ZExVVDcyIiwiaWF0IjoxNzQ4MzgwMTE3LCJleHAiOjE3NDgzODM3MTcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDExNjQyMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwMTE2NDIwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.IwJ5HBycEyzkn3WEK260x5qqBEfPphhPL-8QjPXTkMiURQZjo9fZerr6Cy9AHWBh2vDtkd6ZsaTPSOH1AHVLqsZGv7uoQ8loiLJkVG55SYwW_FGKWVJatTf-u3L-dxcMyDKBttuaFJC4LIPdYYhVVMiLvadGCIsk1BYBIg4hx6Fho2qbZf1eP9qNWa0VEtluhxuioj1DYskfPQbeSu60BN2FpLH57FTVKp8WIkNfMEc1zwBDsJGNeTXrCUCTqSB-Gd0NYSlCrCxtRbob4qoAKYW0cEuxxH7nxMhtRiMLftfIbikwwO8k9Ita-6ouiscHm-PXP9NhT3FDZab4P4wBdw"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 76.0 ms  
**❌ Error:** socket hang up  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ❌ FAILED  
**Duration:** 0.01s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (9.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 9.9 ms  

</details>


---

### Test: Regular user should fail to get other user memberships
**Status:** ❌ FAILED  
**Duration:** 0.01s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (10.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDExNywidXNlcl9pZCI6InpCeDRzUVdBWDlmVUl0MEVuQlRGSHRkTFVUNzIiLCJzdWIiOiJ6Qng0c1FXQVg5ZlVJdDBFbkJURkh0ZExVVDcyIiwiaWF0IjoxNzQ4MzgwMTE3LCJleHAiOjE3NDgzODM3MTcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDExNjQyMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwMTE2NDIwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.IwJ5HBycEyzkn3WEK260x5qqBEfPphhPL-8QjPXTkMiURQZjo9fZerr6Cy9AHWBh2vDtkd6ZsaTPSOH1AHVLqsZGv7uoQ8loiLJkVG55SYwW_FGKWVJatTf-u3L-dxcMyDKBttuaFJC4LIPdYYhVVMiLvadGCIsk1BYBIg4hx6Fho2qbZf1eP9qNWa0VEtluhxuioj1DYskfPQbeSu60BN2FpLH57FTVKp8WIkNfMEc1zwBDsJGNeTXrCUCTqSB-Gd0NYSlCrCxtRbob4qoAKYW0cEuxxH7nxMhtRiMLftfIbikwwO8k9Ita-6ouiscHm-PXP9NhT3FDZab4P4wBdw"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10.9 ms  

</details>


---

### Test: Admin should get membership by ID
**Status:** ❌ FAILED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/f26294f1-8234-4a38-97b9-d15ffb862468 (14.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 14.1 ms  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ❌ FAILED  
**Duration:** 0.01s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (8.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 8.0 ms  

</details>


---

### Test: Admin should update member role successfully
**Status:** ❌ FAILED  
**Duration:** 0.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/f26294f1-8234-4a38-97b9-d15ffb862468 (7.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
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

**⏱️ Duration:** 7.9 ms  

</details>


---

### Test: Should fail with invalid role
**Status:** ❌ FAILED  
**Duration:** 0.01s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/f26294f1-8234-4a38-97b9-d15ffb862468 (7.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzgwMTE2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzODAxMTYsImV4cCI6MTc0ODM4MzcxNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bGAOnh-BuihxKx7b7ce-MjHL6SQYWkCfePvk5dE3CeLr7Y-hX8xaIeTsdm7CyhN-WDiDJa-jhCwOrU0Tf0wqNbHzLdPTBTHlxNzRaMbEArHarcnOasRK8fp8vmvzhpMNCYYbNzWfAnOfkF4vPlmBbuKIWvo9szpw4jdQ_8VktyEiki6rhkPb6CA6Wo3W-H9So99Fsdz2_gYQ8vlyETVWOT8hUjynVZ70-GkGr2pnK3zqa2wOkmv5qMVk6uJkz39PE2SqEMaBKtwRaUlGBOBk4fuanE7ZtCgUXGnpBP29WWWX1wjHiwx2TWn6CjKZbtC5Z2Tz1txCVvn1yF7bHi1Q1g"
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

**⏱️ Duration:** 7.7 ms  

</details>


---

### Test: Regular user should fail to update role without permissions
**Status:** ❌ FAILED  
**Duration:** 0.01s  
**Error:** Cannot read properties of undefined (reading 'status')  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/f26294f1-8234-4a38-97b9-d15ffb862468 (12.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODM4MDExNywidXNlcl9pZCI6InpCeDRzUVdBWDlmVUl0MEVuQlRGSHRkTFVUNzIiLCJzdWIiOiJ6Qng0c1FXQVg5ZlVJdDBFbkJURkh0ZExVVDcyIiwiaWF0IjoxNzQ4MzgwMTE3LCJleHAiOjE3NDgzODM3MTcsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODM4MDExNjQyMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4MzgwMTE2NDIwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.IwJ5HBycEyzkn3WEK260x5qqBEfPphhPL-8QjPXTkMiURQZjo9fZerr6Cy9AHWBh2vDtkd6ZsaTPSOH1AHVLqsZGv7uoQ8loiLJkVG55SYwW_FGKWVJatTf-u3L-dxcMyDKBttuaFJC4LIPdYYhVVMiLvadGCIsk1BYBIg4hx6Fho2qbZf1eP9qNWa0VEtluhxuioj1DYskfPQbeSu60BN2FpLH57FTVKp8WIkNfMEc1zwBDsJGNeTXrCUCTqSB-Gd0NYSlCrCxtRbob4qoAKYW0cEuxxH7nxMhtRiMLftfIbikwwO8k9Ita-6ouiscHm-PXP9NhT3FDZab4P4wBdw"
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

**⏱️ Duration:** 12.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (10.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1748380132393@example.com",
    "password": "TestPassword123!",
    "name": "User for Removal"
  }
}
```

**📥 Response:**
```json
No response
```

**⏱️ Duration:** 10.1 ms  

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
- Test organization: Test Org for Memberships 1748380117908
- Total memberships created: 6
- Total test users created: 8
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
