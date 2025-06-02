# E2E Test Report: memberships-tests

**Date:** 6/2/2025  
**Time:** 1:47:23 AM  
**Duration:** 53.26s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should invite user to organization successfully | PASSED | 0.58s | Admin should invite user to organization successfully |
| ✅ Should fail to invite same user twice | PASSED | 0.49s | Should fail to invite same user twice |
| ✅ Regular user should fail to invite without admin permissions | PASSED | 1.35s | Regular user should fail to invite without admin permissions |
| ✅ Should invite user with different roles | PASSED | 7.09s | Should invite user with different roles |
| ✅ Admin should get memberships by organization | PASSED | 0.64s | Admin should get memberships by organization |
| ✅ Admin should get memberships by user | PASSED | 0.46s | Admin should get memberships by user |
| ✅ User should get their own memberships | PASSED | 0.50s | User should get their own memberships |
| ✅ Should fail without userId or organizationId | PASSED | 0.46s | Should fail without userId or organizationId |
| ✅ Regular user should fail to get other user memberships | PASSED | 0.43s | Regular user should fail to get other user memberships |
| ✅ Admin should get membership by ID | PASSED | 0.55s | Admin should get membership by ID |
| ✅ Should fail with invalid membership ID | PASSED | 0.56s | Should fail with invalid membership ID |
| ✅ Admin should update member role successfully | PASSED | 0.62s | Admin should update member role successfully |
| ✅ Should fail with invalid role | PASSED | 0.35s | Should fail with invalid role |
| ✅ Regular user should fail to update role without permissions | PASSED | 0.56s | Regular user should fail to update role without permissions |
| ✅ Admin should remove member successfully | PASSED | 1.09s | Admin should remove member successfully |
| ✅ Regular user should fail to remove member without permissions | PASSED | 1.83s | Regular user should fail to remove member without permissions |
| ✅ User should be able to leave organization (remove own membership) | PASSED | 1.01s | User should be able to leave organization (remove own membership) |
| ✅ Organization admin should not access memberships from other organizations | PASSED | 0.45s | Organization admin should not access memberships from other organizations |
| ✅ Organization admin should not invite users to other organizations | PASSED | 1.33s | Organization admin should not invite users to other organizations |
| ✅ Super admin should access all organizations | PASSED | 1.23s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (583.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "CO1AZVIXWHM06UtARXuoqfEMWhu2",
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
    "etag": "W/\"fd-SjvyhvyL8XTLLO+p1hNdCIWWpAI\"",
    "date": "Sun, 01 Jun 2025 23:46:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0e0bbbf9-25f9-4722-bd64-6ebf93f1734c",
    "userId": "CO1AZVIXWHM06UtARXuoqfEMWhu2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-01T23:46:33.378Z",
    "updatedAt": "2025-06-01T23:46:33.378Z"
  }
}
```

**⏱️ Duration:** 583.6 ms  

</details>


---

### Test: Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (494.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "CO1AZVIXWHM06UtARXuoqfEMWhu2",
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
    "date": "Sun, 01 Jun 2025 23:46:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Error inviting user",
    "details": "User is already a member of this organization"
  }
}
```

**⏱️ Duration:** 494.1 ms  
**❌ Error:** Request failed with status code 500  

</details>


---

### Test: Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.35s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (928.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1748821593936@example.com",
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
    "etag": "W/\"5dc-teP1S4m+U/uT7ApvgvXhRJQLfV4\"",
    "date": "Sun, 01 Jun 2025 23:46:34 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "IpKkzNaC4dZjoGWl2opvwGQIV8v2",
      "email": "no-perm-invite-1748821593936@example.com",
      "name": "No Permission Invite",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5NCwidXNlcl9pZCI6IklwS2t6TmFDNGRaam9HV2wyb3B2d0dRSVY4djIiLCJzdWIiOiJJcEtrek5hQzRkWmpvR1dsMm9wdndHUUlWOHYyIiwiaWF0IjoxNzQ4ODIxNTk0LCJleHAiOjE3NDg4MjUxOTQsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0ODgyMTU5MzkzNkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ4ODIxNTkzOTM2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ObMtRPI4R1mjz5xd7OpZ5sbpgcDL8TjvXKdR91ZGUTd68p0Vzx6Wsy5H7CiXAm47-HODB6X2KHjwRtFcWrvhVCv4Y4ox8leW9LyuLZlah8wnq7RlgdPaHYkqD1GJF6Gq51ZJyUuduG40WfN-xjyUhWDoq3ZfBkOsWEy73eVQPjrloeZqIEyAqaRnePOuT2mh2wtQMGOasHuoVVQyd6jJ9FHtJHeshU7jmlQETgwgHAlh5bZbITMuO2bLVu5R6tGo9DLfvC5tg-o2aDYY4oDESqNR_oh2AzjMrNJ8nf1yu4IWOeySLLZOsGTLRn65033iFCoRVrZroEWWyjNRNHumJQ",
      "refreshToken": "AMf-vBz4DTLzi8jQMBW8UQoT4d2VFiiqTgfGmw2H4kclI4U6LeHKxfFU8gzj5inLLg-zoivK4StdrcyNlWHEj-nMhO_Er7rAhKg58mO4Ylf-CECm2Ha8-eEpRv7W3gCGRpM3HzlYH7AWIaKDqkkybdUxvvfahCVzVOgR3enVpDTcStRCOXi2QZ9aZ1iVXwKIsE0-czIhWzg2kHUkxTta-tpkzQk-28lHPhua5aiZB8WMVtJzbubooUroSPW4tG4GAvW8k3kB2_zR",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 928.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (423.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5MSwidXNlcl9pZCI6Im10Zmt6SXNEWnVnSzNQUUVXWGhxZjNoNjhNQzMiLCJzdWIiOiJtdGZreklzRFp1Z0szUFFFV1hocWYzaDY4TUMzIiwiaWF0IjoxNzQ4ODIxNTkxLCJleHAiOjE3NDg4MjUxOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMTU5MDMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIxNTkwMzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.b5zEmp9T3cm2J5e0WLPtUVeo3wAWYIw1q99b9ZWdV7Gwhc8_SvrWYD0-frndwUwEqwgpnpZ48_i15Hi9uQxVN2rzhU_UgY1G-6nKQUJdo-XUwIuJBLzE-Z3FXNgDzyPWVPNjdA5mZV7WO7277_vi0UEKfV32tMrLWiLOPJqGiG09w8QOHBF9HMirGo4vSyFnRzcGoPWyG1jtb7KSL_es7hX83ui2v5cZqMQeetDdN_fUXULBp55mpx2_U67P5jFF16r7cVpDaTDXoo6bKDhahdZEZeEKw22vR2dM9V78MRplLIDcBMVsSAjVlH2-EaAsUGbmj9LZG7p2WRPMmlnuCA"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "IpKkzNaC4dZjoGWl2opvwGQIV8v2",
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
    "date": "Sun, 01 Jun 2025 23:46:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 423.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 7.09s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (873.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1748821595290@example.com",
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
    "etag": "W/\"5ae-EQ741YGiY4Ec+5Stast4Xewp0RI\"",
    "date": "Sun, 01 Jun 2025 23:46:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "j7aFM7PkmIQCkXw8T2kKTC6t0CZ2",
      "email": "admin-user-1748821595290@example.com",
      "name": "Admin User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5NSwidXNlcl9pZCI6Imo3YUZNN1BrbUlRQ2tYdzhUMmtLVEM2dDBDWjIiLCJzdWIiOiJqN2FGTTdQa21JUUNrWHc4VDJrS1RDNnQwQ1oyIiwiaWF0IjoxNzQ4ODIxNTk1LCJleHAiOjE3NDg4MjUxOTUsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ4ODIxNTk1MjkwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0ODgyMTU5NTI5MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.b7v-BVU-Wxqkbz3FkAHkRi1SZcX4eJYu9Lgc8kHUrE5qeHsE5fYS_mkSSzXdNCl-gdxg1zmWyGwcX_tPejpUBB_tRgddPYzZYSLskUBwHL-AAtbH1i8Kof2mCTJejL6u7IAURUaLnMcaqDX5hEwCP2MzTey5GWPvu3-6nBfG_rpTMM3xSHIjKuf3yO6xoHHTcirsWlRZ5bHvzwnKPTxzlqOxmghUDZgUW3RDooPrQ2Jnvw413XBnBX17VSkI4BqYKiPhvIE0G64P6CMCwNSUwYvVuaB3zgeIRFroJdAPu283xdTiiXQMpxw_8Chzko3jHOLd1Q_7RSd-HNKURsjP-g",
      "refreshToken": "AMf-vBxIlf7OjQHFHBLRT0mfF3gx4H4jwNrlfaq7jN8gLeTmEonaita8TbcUwUVVTXZFO1eLK2wCBFQcTKhV5A-o8kruBwExrgeGyRlE3wMAZtbXs-WcBfxFinLtqoaKlQbpB-KUOVG66_eH4WY-aAZ8mFh3BO5kNDhGKcDBqo_FICMQvT0nCeJKF0aA5IcFfltPaTwrnYGVgb5F7XGVM7hk72LXq6r3pZWCe93HTnk7X3AzUGIs3JY",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 873.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (507.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "j7aFM7PkmIQCkXw8T2kKTC6t0CZ2",
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
    "etag": "W/\"fc-fWLgCa9aXUaXqgIfdfTFBMaLDFc\"",
    "date": "Sun, 01 Jun 2025 23:46:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "32ed1be1-9a10-48f8-ac2f-337455c72bb2",
    "userId": "j7aFM7PkmIQCkXw8T2kKTC6t0CZ2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-06-01T23:46:36.610Z",
    "updatedAt": "2025-06-01T23:46:36.610Z"
  }
}
```

**⏱️ Duration:** 507.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (856.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1748821596671@example.com",
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
    "etag": "W/\"5b8-tBQEbJgl0fuYxg1cQo2eUwZJ83k\"",
    "date": "Sun, 01 Jun 2025 23:46:37 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "tCZJl6o1A5QmCurE3jUqRAoxsyg2",
      "email": "manager-user-1748821596671@example.com",
      "name": "Manager User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5NywidXNlcl9pZCI6InRDWkpsNm8xQTVRbUN1ckUzalVxUkFveHN5ZzIiLCJzdWIiOiJ0Q1pKbDZvMUE1UW1DdXJFM2pVcVJBb3hzeWcyIiwiaWF0IjoxNzQ4ODIxNTk3LCJleHAiOjE3NDg4MjUxOTcsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDg4MjE1OTY2NzFAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDg4MjE1OTY2NzFAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ZYooxBOG53ywnU_ivkwmAhFr5lnJzVgLcbKKrwXPiFZHjPjrmXYfTyp5xVZe6R7TPcOstMWyEYlHwDILtfWIBRtWNPfN6RjWdvPs14ZlFvcjPxfxcp8F4JoCGzv_hGuK7GwSens8CBaRrCUhr3ZV0o_sT7f69ehKPmv-3jRL5gpOYnjxNap1qFOF4x6x-FoADqaJBaMg-z8QpXm1qG8-IJa9M_ousCSorINz-sTyCWmqro4xvf4LDGbPatT5q7fHY02raAF9K0spzdVxGUjQuK8XWfVe-LtKXKeGXX1PJszhdX9WPW98kQlH-POqmPbTwJsDJ59Ub983NSRKFCV5qA",
      "refreshToken": "AMf-vByiwi_ZbzMjkOMC2FMCaBOA76cmnKBFNz_bMFPctQrWmkWjnPtnFozYNxD_-uAklK7QViv6oDkiHnr8htlKiKUm-MnSZqfMp2F-l4k0yOFyKVFaONh4YZwwBg4mduZuABdYjHjIDlCrXdicLPePgtlwdMZ7_4ysUQN1AgC5Uy7_LLbClZgDFJfNs93jroL1vDMZmOyRFmYfGSNKJ7W0oSWuJrUTXeurPBPbgesJ8HoNQqq1m5Q",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 856.7 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (536.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "tCZJl6o1A5QmCurE3jUqRAoxsyg2",
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
    "etag": "W/\"fe-JFYrVym0JdNdO5Kk0YzRPqutM4I\"",
    "date": "Sun, 01 Jun 2025 23:46:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a852946b-26bf-467d-9692-af489d818de7",
    "userId": "tCZJl6o1A5QmCurE3jUqRAoxsyg2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-01T23:46:38.002Z",
    "updatedAt": "2025-06-01T23:46:38.002Z"
  }
}
```

**⏱️ Duration:** 536.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (895.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1748821598065@example.com",
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
    "etag": "W/\"5d6-S0R3bwaRLE75uOw88eVN9dy9+go\"",
    "date": "Sun, 01 Jun 2025 23:46:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "4pxnATX9BPXD2oBQBy5aUge2yvP2",
      "email": "moderator-user-1748821598065@example.com",
      "name": "Moderator User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5OCwidXNlcl9pZCI6IjRweG5BVFg5QlBYRDJvQlFCeTVhVWdlMnl2UDIiLCJzdWIiOiI0cHhuQVRYOUJQWEQyb0JRQnk1YVVnZTJ5dlAyIiwiaWF0IjoxNzQ4ODIxNTk4LCJleHAiOjE3NDg4MjUxOTgsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0ODgyMTU5ODA2NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ4ODIxNTk4MDY1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Jxi5IgVG6ny1IXVWkULbQTL2qZ-DHkQj4ODyXw4XnwDRaHLrGy2oxPyU9uP7JT6Vdvk9apKD8f-HdJtna2HN0fvwxORnsAuqT5pT0HQL70ecABgRG52a0tZTAhYSbz9KS1gqT8ckIDDtSZPKHj9-PEtFwJrBhz70CiUYiy6xSNXMm1ZcErIHE8O6B9Qho3vP25h7ChriAZT0So7_6wFYqJWFtLTwMe3-F7xc-lrdhdkxpWsgxbc6dLUOK30XLA8p8Uqr-gS7TfIDaQ-eNl1WZcoytIj-05G-Lv0V9cTNy0ERzolJ-uaHYnqFo00uoROXACcy5LcdPn7DSk3hiVfVxQ",
      "refreshToken": "AMf-vBx5JKqbmQidt9f2SbUVbtMFHMhxHGb6xkXjWFy2Ujniur7fxh240XeI5bp1tNAmfp3kR5OwKk7sNNUL_lmdrE32hD_xO5eO0d7M5BUawzTWF8JaKsnPMu0h6NG3K33Q6LOKGZBMFtJk_fLR05faRCoGB3ckVBRC9yu4_MY25IyuV2s52hFmKfcW1v-Q_jGBYv6w8_1kvATNBRs1s0OwnYaXz6numM3VqycXCb0esuSA4MJV_5DFhES9tlqcpd9_kbNtP77h",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 895.4 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (505.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "4pxnATX9BPXD2oBQBy5aUge2yvP2",
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
    "etag": "W/\"100-gphwQVd87+Errqy7nZVnqD7T/hs\"",
    "date": "Sun, 01 Jun 2025 23:46:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "a5e3d921-42c8-4a93-8185-ac0885f1497e",
    "userId": "4pxnATX9BPXD2oBQBy5aUge2yvP2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "moderator",
    "status": "active",
    "createdAt": "2025-06-01T23:46:39.406Z",
    "updatedAt": "2025-06-01T23:46:39.406Z"
  }
}
```

**⏱️ Duration:** 505.9 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1029.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1748821599466@example.com",
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
    "etag": "W/\"5d6-OH8bNLAQOvo3NEjvuRECqkeoi1w\"",
    "date": "Sun, 01 Jun 2025 23:46:40 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "6lIi14iGVCcfEdn630rS84m3E8M2",
      "email": "volunteer-user-1748821599466@example.com",
      "name": "Volunteer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5OSwidXNlcl9pZCI6IjZsSWkxNGlHVkNjZkVkbjYzMHJTODRtM0U4TTIiLCJzdWIiOiI2bElpMTRpR1ZDY2ZFZG42MzByUzg0bTNFOE0yIiwiaWF0IjoxNzQ4ODIxNTk5LCJleHAiOjE3NDg4MjUxOTksImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0ODgyMTU5OTQ2NkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ4ODIxNTk5NDY2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.nBLhaeCCxz-rOjwpojn-gCpemIBih2cWFnsYKXVI2XMIL2INAbb3IOU3zqQ2zz57i8TJPKLcea5msQlf0wcU038DfiEanDC2-uGUucdGQ-ung_Hwb3H4nIYNEoJVq9d5QISor2HP6XLe25Bx3OYHdG5N5SdYjwZqx26aTeYZUaRPwJ596ET0mpq4gCPvemajEprpv5x0tjR3Ph1FGRImMV2SD71MVqhBX6apOTGAz3jA4xno-OtNLFltvvdNRN2iM0M2QwjNQ83DD4U0v-Ln7t4M2XS77nzvtNvKEAqkZjwdco7C4fsN31o6wtd31izQmNhspo77IjdwtYy08y2BtQ",
      "refreshToken": "AMf-vBwW2cp9eGlEJjKu5WkHnHh8FKJ650oCPm6Oem3crdOXuKcDmlq3ei632PnF8zB9O3_wJ6Drog9AE0KbidDwQD1RS_hdwTcY3OxfA6jtFivPVj88lbd9Uxu9MPNge58VWyv11x266DxcvMmAbOeAhbFtezVge6rVrOPb5_OknYD9P7Jr9FM1XapRg8GmEr118wq2UeGsftTOrUezNMSAeNTWbr0AlUCnUy_JGEhXd0DJNA-lfqRIfy6ykNCVutxzaJ4pF7TS",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 1029.5 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (533.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "6lIi14iGVCcfEdn630rS84m3E8M2",
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
    "etag": "W/\"100-WXWNwICxqYvYvoMZAQ9I2Og9tIU\"",
    "date": "Sun, 01 Jun 2025 23:46:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "2db55341-70ab-41e5-8dc0-c7f4682a1562",
    "userId": "6lIi14iGVCcfEdn630rS84m3E8M2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-01T23:46:40.969Z",
    "updatedAt": "2025-06-01T23:46:40.969Z"
  }
}
```

**⏱️ Duration:** 533.3 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (830.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1748821601029@example.com",
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
    "etag": "W/\"5bc-TYEV30+me3J93X8rdNwQUdy4uaY\"",
    "date": "Sun, 01 Jun 2025 23:46:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "OSx4ctGYtJRVPIL2hDADLflcCXW2",
      "email": "observer-user-1748821601029@example.com",
      "name": "Observer User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYwMSwidXNlcl9pZCI6Ik9TeDRjdEdZdEpSVlBJTDJoREFETGZsY0NYVzIiLCJzdWIiOiJPU3g0Y3RHWXRKUlZQSUwyaERBRExmbGNDWFcyIiwiaWF0IjoxNzQ4ODIxNjAxLCJleHAiOjE3NDg4MjUyMDEsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ4ODIxNjAxMDI5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0ODgyMTYwMTAyOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.n0OMu12tBBsZxWpyi8qlGifilbyq38yc5tfw7j41rxv6o4EQs8Oq7Io_PfQkwXNu1My6EZpElb4XDoh7x6xROd9K5ktcTsFx75fpQ12xFD2CRbUFNdybJmYRLnViQgexv_N0VgFkMHEEZBpFS8DMb2JpmwXTJ-uqKYfH9H0mL2xW80dJEZQZ3tEI5GSuNIxpcPltFt0VvIdPaSRSJm5kqRxt40ybl_kZvb4lNsMUxlfrGehdQHmgw0r5_jSK5ShydooJRKTI78dBkoFZtfe-dxpQ6g-OjBa3AwhEma0htuhvjEInXSEDwIL731cdfXlxn5bn06EwrMf3sHOCIHGYOw",
      "refreshToken": "AMf-vBxKXR6yGKS5_BamGyHHboigD_HCpYaHQyMkTdok3gU-BR14SiIKikq9Nx1APO7rNiLZvtXHCpckLgnyJFAJJ1_XN9FKqeBUGN20-_NUEC5WnBrP36hSOog-xnVwdb6ZEqgbFAVkjtCyxGblaTV0u6fPhHwG7N_PNNMoYetsZjyItLmuWsEvrQYVMyXOg0Jico9OMr3CzoI7rUYmn3GfgmF7ub_S3YGqa2cALkbAKbsPlk35M9w",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 830.3 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (523.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "OSx4ctGYtJRVPIL2hDADLflcCXW2",
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
    "etag": "W/\"ff-442AANFzQt1lh/HZe5djZKhUQq4\"",
    "date": "Sun, 01 Jun 2025 23:46:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "f00e3267-02da-4eef-ac26-3916aaf25c39",
    "userId": "OSx4ctGYtJRVPIL2hDADLflcCXW2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "observer",
    "status": "active",
    "createdAt": "2025-06-01T23:46:42.321Z",
    "updatedAt": "2025-06-01T23:46:42.321Z"
  }
}
```

**⏱️ Duration:** 523.6 ms  

</details>


---

### Test: Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=88c342b2-a8dd-41a2-aad8-00854d61f599 (637.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "etag": "W/\"5fd-sNvWoUzG52JAUdY4CZl1UId2z48\"",
    "date": "Sun, 01 Jun 2025 23:46:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "0e0bbbf9-25f9-4722-bd64-6ebf93f1734c",
      "userId": "CO1AZVIXWHM06UtARXuoqfEMWhu2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-01T23:46:33.378Z",
      "updatedAt": "2025-06-01T23:46:33.378Z"
    },
    {
      "id": "32ed1be1-9a10-48f8-ac2f-337455c72bb2",
      "userId": "j7aFM7PkmIQCkXw8T2kKTC6t0CZ2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-01T23:46:36.610Z",
      "updatedAt": "2025-06-01T23:46:36.610Z"
    },
    {
      "id": "a852946b-26bf-467d-9692-af489d818de7",
      "userId": "tCZJl6o1A5QmCurE3jUqRAoxsyg2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-01T23:46:38.002Z",
      "updatedAt": "2025-06-01T23:46:38.002Z"
    },
    {
      "id": "a5e3d921-42c8-4a93-8185-ac0885f1497e",
      "userId": "4pxnATX9BPXD2oBQBy5aUge2yvP2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-01T23:46:39.406Z",
      "updatedAt": "2025-06-01T23:46:39.406Z"
    },
    {
      "id": "2db55341-70ab-41e5-8dc0-c7f4682a1562",
      "userId": "6lIi14iGVCcfEdn630rS84m3E8M2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-01T23:46:40.969Z",
      "updatedAt": "2025-06-01T23:46:40.969Z"
    },
    {
      "id": "f00e3267-02da-4eef-ac26-3916aaf25c39",
      "userId": "OSx4ctGYtJRVPIL2hDADLflcCXW2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-01T23:46:42.321Z",
      "updatedAt": "2025-06-01T23:46:42.321Z"
    }
  ]
}
```

**⏱️ Duration:** 637.7 ms  

</details>


---

### Test: Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (461.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:46:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 461.1 ms  

</details>


---

### Test: User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=mtfkzIsDZugK3PQEWXhqf3h68MC3 (500.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5MSwidXNlcl9pZCI6Im10Zmt6SXNEWnVnSzNQUUVXWGhxZjNoNjhNQzMiLCJzdWIiOiJtdGZreklzRFp1Z0szUFFFV1hocWYzaDY4TUMzIiwiaWF0IjoxNzQ4ODIxNTkxLCJleHAiOjE3NDg4MjUxOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMTU5MDMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIxNTkwMzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.b5zEmp9T3cm2J5e0WLPtUVeo3wAWYIw1q99b9ZWdV7Gwhc8_SvrWYD0-frndwUwEqwgpnpZ48_i15Hi9uQxVN2rzhU_UgY1G-6nKQUJdo-XUwIuJBLzE-Z3FXNgDzyPWVPNjdA5mZV7WO7277_vi0UEKfV32tMrLWiLOPJqGiG09w8QOHBF9HMirGo4vSyFnRzcGoPWyG1jtb7KSL_es7hX83ui2v5cZqMQeetDdN_fUXULBp55mpx2_U67P5jFF16r7cVpDaTDXoo6bKDhahdZEZeEKw22vR2dM9V78MRplLIDcBMVsSAjVlH2-EaAsUGbmj9LZG7p2WRPMmlnuCA"
  }
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
    "date": "Sun, 01 Jun 2025 23:46:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 500.5 ms  

</details>


---

### Test: Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (457.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
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
    "date": "Sun, 01 Jun 2025 23:46:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Either userId or organizationId must be provided"
  }
}
```

**⏱️ Duration:** 457.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.43s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (430.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5MSwidXNlcl9pZCI6Im10Zmt6SXNEWnVnSzNQUUVXWGhxZjNoNjhNQzMiLCJzdWIiOiJtdGZreklzRFp1Z0szUFFFV1hocWYzaDY4TUMzIiwiaWF0IjoxNzQ4ODIxNTkxLCJleHAiOjE3NDg4MjUxOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMTU5MDMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIxNTkwMzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.b5zEmp9T3cm2J5e0WLPtUVeo3wAWYIw1q99b9ZWdV7Gwhc8_SvrWYD0-frndwUwEqwgpnpZ48_i15Hi9uQxVN2rzhU_UgY1G-6nKQUJdo-XUwIuJBLzE-Z3FXNgDzyPWVPNjdA5mZV7WO7277_vi0UEKfV32tMrLWiLOPJqGiG09w8QOHBF9HMirGo4vSyFnRzcGoPWyG1jtb7KSL_es7hX83ui2v5cZqMQeetDdN_fUXULBp55mpx2_U67P5jFF16r7cVpDaTDXoo6bKDhahdZEZeEKw22vR2dM9V78MRplLIDcBMVsSAjVlH2-EaAsUGbmj9LZG7p2WRPMmlnuCA"
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
    "date": "Sun, 01 Jun 2025 23:46:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "You can only view your own memberships"
  }
}
```

**⏱️ Duration:** 430.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/0e0bbbf9-25f9-4722-bd64-6ebf93f1734c (547.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "etag": "W/\"fd-SjvyhvyL8XTLLO+p1hNdCIWWpAI\"",
    "date": "Sun, 01 Jun 2025 23:46:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0e0bbbf9-25f9-4722-bd64-6ebf93f1734c",
    "userId": "CO1AZVIXWHM06UtARXuoqfEMWhu2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:46:33.378Z",
    "updatedAt": "2025-06-01T23:46:33.378Z"
  }
}
```

**⏱️ Duration:** 547.6 ms  

</details>


---

### Test: Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (556.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
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
    "date": "Sun, 01 Jun 2025 23:46:45 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 556.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/0e0bbbf9-25f9-4722-bd64-6ebf93f1734c (622.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
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
    "etag": "W/\"fe-eFnfDLWoV0Tgtm+xmhMNDqJx+2s\"",
    "date": "Sun, 01 Jun 2025 23:46:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "0e0bbbf9-25f9-4722-bd64-6ebf93f1734c",
    "userId": "CO1AZVIXWHM06UtARXuoqfEMWhu2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "manager",
    "status": "active",
    "createdAt": "2025-06-01T23:46:33.378Z",
    "updatedAt": "2025-06-01T23:46:46.495Z"
  }
}
```

**⏱️ Duration:** 622.9 ms  

</details>


---

### Test: Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.35s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/0e0bbbf9-25f9-4722-bd64-6ebf93f1734c (351.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
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
    "date": "Sun, 01 Jun 2025 23:46:46 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Invalid role"
  }
}
```

**⏱️ Duration:** 351.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.56s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/0e0bbbf9-25f9-4722-bd64-6ebf93f1734c (556.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5MSwidXNlcl9pZCI6Im10Zmt6SXNEWnVnSzNQUUVXWGhxZjNoNjhNQzMiLCJzdWIiOiJtdGZreklzRFp1Z0szUFFFV1hocWYzaDY4TUMzIiwiaWF0IjoxNzQ4ODIxNTkxLCJleHAiOjE3NDg4MjUxOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMTU5MDMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIxNTkwMzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.b5zEmp9T3cm2J5e0WLPtUVeo3wAWYIw1q99b9ZWdV7Gwhc8_SvrWYD0-frndwUwEqwgpnpZ48_i15Hi9uQxVN2rzhU_UgY1G-6nKQUJdo-XUwIuJBLzE-Z3FXNgDzyPWVPNjdA5mZV7WO7277_vi0UEKfV32tMrLWiLOPJqGiG09w8QOHBF9HMirGo4vSyFnRzcGoPWyG1jtb7KSL_es7hX83ui2v5cZqMQeetDdN_fUXULBp55mpx2_U67P5jFF16r7cVpDaTDXoo6bKDhahdZEZeEKw22vR2dM9V78MRplLIDcBMVsSAjVlH2-EaAsUGbmj9LZG7p2WRPMmlnuCA"
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
    "date": "Sun, 01 Jun 2025 23:46:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can modify roles."
  }
}
```

**⏱️ Duration:** 556.9 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (916.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1748821607526@example.com",
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
    "etag": "W/\"5b8-1+m8cclCtrmIoivx18W2bbbSslY\"",
    "date": "Sun, 01 Jun 2025 23:46:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "aoJDpurgHwM5RWWFebaiQdNlAaB3",
      "email": "remove-user-1748821607526@example.com",
      "name": "User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYwNywidXNlcl9pZCI6ImFvSkRwdXJnSHdNNVJXV0ZlYmFpUWRObEFhQjMiLCJzdWIiOiJhb0pEcHVyZ0h3TTVSV1dGZWJhaVFkTmxBYUIzIiwiaWF0IjoxNzQ4ODIxNjA3LCJleHAiOjE3NDg4MjUyMDcsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0ODgyMTYwNzUyNkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ4ODIxNjA3NTI2QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Qfbk6rPPJWQTKOXq9tV6z-o7o2P6wBEMGoVE4d1GRVnyBZC98JOqGn1gulh4r7DgWoLP1Q7f6XhDUyFxSxC317vjpj0Gso5dLTgqYxGHY-v2vq-q9yIOP4TB9DMj_Qa4nmA63korfGIDabm9NvOllBObeic6aChdAWMSCcmbiqDqrjylhOpvqLKEqlBItW_UIkmMrH6HiBQMYFegVxMHdpCXtI68riaJ7Zir7K7yzDwhsedEviduTfyh4m_f3bHM5yL8LfUtYEwJ34KRXnHI5vyRLMmIoZq0yfThQO_7_SALGMWV1b4y4746O8nTBmqmWLZ0qrgex3rLayz6m5sPoQ",
      "refreshToken": "AMf-vBxNmNn0trQ0LqfyXsV0lImKxH6Dhvwf_ndLwWkWVy0lMrqZ7uzJxpgHCGUuYdkiUd-Vsdb8ac2P6P7gt5fF2eqo1ylcUbQmORcZZcX0fnjQ5OOkdmReuzed3owOCnQ6kIoAlYGA3GyfcuSSBQk9wzNanH00UAzlEsJsRdHKtjCC42vi-WIRCxtSBCgSpSg_btWHnK_6n-hVxGgh9GGsy7ocOSG0RLOFHRHX72YOX4k9rHl1mHE",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 916.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (551.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "aoJDpurgHwM5RWWFebaiQdNlAaB3",
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
    "etag": "W/\"100-oX8bXjkD60+79fFUgzgmFWE4yNc\"",
    "date": "Sun, 01 Jun 2025 23:46:48 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "9621512a-3ed9-4537-a394-facbe9e36763",
    "userId": "aoJDpurgHwM5RWWFebaiQdNlAaB3",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-01T23:46:48.928Z",
    "updatedAt": "2025-06-01T23:46:48.928Z"
  }
}
```

**⏱️ Duration:** 551.4 ms  

</details>


---

### Test: Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.09s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/9621512a-3ed9-4537-a394-facbe9e36763 (588.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:46:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 588.6 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/9621512a-3ed9-4537-a394-facbe9e36763 (502.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
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
    "date": "Sun, 01 Jun 2025 23:46:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 502.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 1.83s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (832.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1748821610088@example.com",
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
    "etag": "W/\"5f2-NnmqYCAX9uVAFDC6t+OwtDCC1Ew\"",
    "date": "Sun, 01 Jun 2025 23:46:50 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "BYLU43jG3ie9U1FYSNhVKXCw95d2",
      "email": "another-remove-user-1748821610088@example.com",
      "name": "Another User for Removal",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxMCwidXNlcl9pZCI6IkJZTFU0M2pHM2llOVUxRllTTmhWS1hDdzk1ZDIiLCJzdWIiOiJCWUxVNDNqRzNpZTlVMUZZU05oVktYQ3c5NWQyIiwiaWF0IjoxNzQ4ODIxNjEwLCJleHAiOjE3NDg4MjUyMTAsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ4ODIxNjEwMDg4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0ODgyMTYxMDA4OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.V4LoeJLcdman72ftQgDx8MzBNI-OH3fB0j6KSvXsHDXhxmX-s3OMn2y6sj5B0sDBBKAAs_t1tRwLSSP69n4L6E6r4cuogJtIZ0elDYsq8ylzwpPKYvij_HGiPrALNtGQuzCGUcLPFr-SPqSO67l1mNsFw4Dqne9KcxS5Tvqa1Z-lLLvZ8zECPfQnqDn83uTki0yVzjpLD3dkGhnvPGmDok-dMOfFbdIcjpCwyR06qN7PchC_gukjGn6xZ7dF1fV03S81RQGWfbFMchkAL4PyxSE0uQSuYEbXvMLVzuZrTsEMaeXq4_b0VhDWVZEkIAG0CpAoqFSO_9iWFKJb7UoS6A",
      "refreshToken": "AMf-vBzlMpihwJUbkri5oq7egqtKwKFVOkc3mqhyQcqK_Q7MCJjmy6uhsNcZs6UAb1iv0iCMOEn16unYL26GQwC5ZqnUZxYjEDa3-f5iwDt7v8sUWFzP-wDzlVOXC8otXgU5sYKU622w-q02f1A3GuPSozYXBSiQypZCUbfP_BHL0aImaxRCwvDTCtCrBl_8MfrB2mgG3hNgiht1SUyVmZ4NgqU-OHUZML1avvCiMsuNFBqRxturnQ5CdJ8i798YqlfSQaMWbO5V",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 832.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (547.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "BYLU43jG3ie9U1FYSNhVKXCw95d2",
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
    "etag": "W/\"100-3lCV+0Mt9Fm/Q52PTOr7ZxoC/Ck\"",
    "date": "Sun, 01 Jun 2025 23:46:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "d76e3934-8661-4fcb-869c-238811a035e5",
    "userId": "BYLU43jG3ie9U1FYSNhVKXCw95d2",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "volunteer",
    "status": "active",
    "createdAt": "2025-06-01T23:46:51.408Z",
    "updatedAt": "2025-06-01T23:46:51.408Z"
  }
}
```

**⏱️ Duration:** 547.1 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/d76e3934-8661-4fcb-869c-238811a035e5 (449.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTU5MSwidXNlcl9pZCI6Im10Zmt6SXNEWnVnSzNQUUVXWGhxZjNoNjhNQzMiLCJzdWIiOiJtdGZreklzRFp1Z0szUFFFV1hocWYzaDY4TUMzIiwiaWF0IjoxNzQ4ODIxNTkxLCJleHAiOjE3NDg4MjUxOTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0ODgyMTU5MDMxMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ4ODIxNTkwMzEwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.b5zEmp9T3cm2J5e0WLPtUVeo3wAWYIw1q99b9ZWdV7Gwhc8_SvrWYD0-frndwUwEqwgpnpZ48_i15Hi9uQxVN2rzhU_UgY1G-6nKQUJdo-XUwIuJBLzE-Z3FXNgDzyPWVPNjdA5mZV7WO7277_vi0UEKfV32tMrLWiLOPJqGiG09w8QOHBF9HMirGo4vSyFnRzcGoPWyG1jtb7KSL_es7hX83ui2v5cZqMQeetDdN_fUXULBp55mpx2_U67P5jFF16r7cVpDaTDXoo6bKDhahdZEZeEKw22vR2dM9V78MRplLIDcBMVsSAjVlH2-EaAsUGbmj9LZG7p2WRPMmlnuCA"
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
    "date": "Sun, 01 Jun 2025 23:46:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can remove members."
  }
}
```

**⏱️ Duration:** 449.5 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (903.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748821611918@example.com",
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
    "etag": "W/\"5db-DBdYTdaFOQ2GKyFK7ELuEi8158g\"",
    "date": "Sun, 01 Jun 2025 23:46:52 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "tENnUNB9aFYg9bMt3lbthua9sws1",
      "email": "self-leave-user-1748821611918@example.com",
      "name": "Self Leave User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxMiwidXNlcl9pZCI6InRFTm5VTkI5YUZZZzliTXQzbGJ0aHVhOXN3czEiLCJzdWIiOiJ0RU5uVU5COWFGWWc5Yk10M2xidGh1YTlzd3MxIiwiaWF0IjoxNzQ4ODIxNjEyLCJleHAiOjE3NDg4MjUyMTIsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjE2MTE5MThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjE2MTE5MThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.bVilkdyNH-dIjNRbet6pUTrhEcAdHM0FjPZ8UagTHYm8srp1ngIq_IaiYnnfbyPtdK-VbNDo4cYzNFfLnYKt3ktPOymT1YuG1HNn_BurtHbcCmQt8U79qRy23XzjMdoGDdh6IqN5rNUkxkC6gWh_tI42Q7L6kHFpfR_Z0upfPLK6T1iidGp2sGqUyi4mZVfuGT9zje5T82DiGa8QZn5DlokYAT0So4xRBqKsUIIzsP54ScRdKD1naVoVU9c5nWMFDEIf3iz8zmsISq6jpi4GjOvBOMxhUCgQSGi2_XmED129LjRHZVKkWB43uRP6z3nN-v9A3OvA0YmiM3eC-aCtig",
      "refreshToken": "AMf-vBz2ykFpCiISrQTtLIihJ7iGIDqL7Hb_LRHeVmcMZhXLPQ4aGeJAhHkbw7tXMPd5tYge8iI_Jhi6N2bbbAgfTlAiiG2akHtd8lEBGoCsGUeJglOB_6NTpYYLUSSClFtt7QCo4N0tNI-XOiA2zdwBMPXyGt41dR_cYbup7WELDhrFyBI-608WptJJVkdfXk49QlvWUNNDIXWUjZRtWWVrntXJojkEACUv3kDf9-7QSu5Qj-0aVZ1p0RUebDHP1XsmHlv6XMLH",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 903.1 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (242.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1748821611918@example.com",
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
    "etag": "W/\"5aa-7HG6/W3ZMPaBn5hbCNtfgH2Sq3Y\"",
    "date": "Sun, 01 Jun 2025 23:46:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "tENnUNB9aFYg9bMt3lbthua9sws1",
      "email": "self-leave-user-1748821611918@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxMiwidXNlcl9pZCI6InRFTm5VTkI5YUZZZzliTXQzbGJ0aHVhOXN3czEiLCJzdWIiOiJ0RU5uVU5COWFGWWc5Yk10M2xidGh1YTlzd3MxIiwiaWF0IjoxNzQ4ODIxNjEyLCJleHAiOjE3NDg4MjUyMTIsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjE2MTE5MThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjE2MTE5MThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.bVilkdyNH-dIjNRbet6pUTrhEcAdHM0FjPZ8UagTHYm8srp1ngIq_IaiYnnfbyPtdK-VbNDo4cYzNFfLnYKt3ktPOymT1YuG1HNn_BurtHbcCmQt8U79qRy23XzjMdoGDdh6IqN5rNUkxkC6gWh_tI42Q7L6kHFpfR_Z0upfPLK6T1iidGp2sGqUyi4mZVfuGT9zje5T82DiGa8QZn5DlokYAT0So4xRBqKsUIIzsP54ScRdKD1naVoVU9c5nWMFDEIf3iz8zmsISq6jpi4GjOvBOMxhUCgQSGi2_XmED129LjRHZVKkWB43uRP6z3nN-v9A3OvA0YmiM3eC-aCtig",
      "refreshToken": "AMf-vBzSMLycfFok3D9eF1izfir1x8VlgwYSJFnWnvFIx0NjiFtuVTsTaWRfdkGKMfyXDjz0yAo-fT9EsgYTDG-uzOx1OFGp4_zkvbxFso5SEq-_1SF_oF4A8bvx8sEDtsubzkYSj1bbgJ485CNIBkJs5NJ0A7e3bDCr9hfOwfGUHepALs3jwva5AIBtjKIPfOOezohG6ozCTSYOtexzBrynCTOO5vdz6YFfz8dRM3mu3u1CNRh4mHI-2iBXazw52yGl-MmQkAD8",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 242.8 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (518.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "tENnUNB9aFYg9bMt3lbthua9sws1",
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
    "etag": "W/\"fd-y/oBOxE8+yZspEjdLBGOalC1W4E\"",
    "date": "Sun, 01 Jun 2025 23:46:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "967d2dfc-71cd-4731-ba88-daeb4a26204a",
    "userId": "tENnUNB9aFYg9bMt3lbthua9sws1",
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "role": "member",
    "status": "active",
    "createdAt": "2025-06-01T23:46:53.523Z",
    "updatedAt": "2025-06-01T23:46:53.523Z"
  }
}
```

**⏱️ Duration:** 518.6 ms  

</details>


---

### Test: User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.01s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/967d2dfc-71cd-4731-ba88-daeb4a26204a (559.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxMiwidXNlcl9pZCI6InRFTm5VTkI5YUZZZzliTXQzbGJ0aHVhOXN3czEiLCJzdWIiOiJ0RU5uVU5COWFGWWc5Yk10M2xidGh1YTlzd3MxIiwiaWF0IjoxNzQ4ODIxNjEyLCJleHAiOjE3NDg4MjUyMTIsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjE2MTE5MThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDg4MjE2MTE5MThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.bVilkdyNH-dIjNRbet6pUTrhEcAdHM0FjPZ8UagTHYm8srp1ngIq_IaiYnnfbyPtdK-VbNDo4cYzNFfLnYKt3ktPOymT1YuG1HNn_BurtHbcCmQt8U79qRy23XzjMdoGDdh6IqN5rNUkxkC6gWh_tI42Q7L6kHFpfR_Z0upfPLK6T1iidGp2sGqUyi4mZVfuGT9zje5T82DiGa8QZn5DlokYAT0So4xRBqKsUIIzsP54ScRdKD1naVoVU9c5nWMFDEIf3iz8zmsISq6jpi4GjOvBOMxhUCgQSGi2_XmED129LjRHZVKkWB43uRP6z3nN-v9A3OvA0YmiM3eC-aCtig"
  }
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
    "date": "Sun, 01 Jun 2025 23:46:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "You have left the organization successfully"
  }
}
```

**⏱️ Duration:** 559.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/967d2dfc-71cd-4731-ba88-daeb4a26204a (452.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
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
    "date": "Sun, 01 Jun 2025 23:46:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Membership not found"
  }
}
```

**⏱️ Duration:** 452.6 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (928.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748821614598@example.com",
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
    "etag": "W/\"5db-0p60jzosxrW4JCYJncqyhOHE4Iw\"",
    "date": "Sun, 01 Jun 2025 23:46:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "XgiSXM5dPcOHwbbjsC4rOSmHfY32",
      "email": "other-org-admin-1748821614598@example.com",
      "name": "Other Org Admin",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxNCwidXNlcl9pZCI6IlhnaVNYTTVkUGNPSHdiYmpzQzRyT1NtSGZZMzIiLCJzdWIiOiJYZ2lTWE01ZFBjT0h3YmJqc0M0ck9TbUhmWTMyIiwiaWF0IjoxNzQ4ODIxNjE0LCJleHAiOjE3NDg4MjUyMTQsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VluA8VUuzKcDHFpLj0iyjkhZBoveG86iGFc6kIlY4X3ePilIPg5qEsDSLCar6Wv2lVFbmM5ec_3onX1zMxJj58CGkqwhh55psuuxweIa9210fP8vkYSpHVgya-mit7xxe3UIINBP8J5ROi8UfCq5vByP1ejeW0NPC0QsUaKIxcehKlW0m9Y6zldM8g3DHiWvDu9-1Xs7iF6TIL7CWng4EdF20_XOgGL45ow-wwzXEKGCF30JsJ30Fga5nFSpRu-rruUTXgjbMoadoauOuzW3i1M9Tx6Tr7HhikqOUJpKU1mMcKDkPOrPgZWcsgmL_zkGTsP8Pk0C6sQVQ2daKAhWZg",
      "refreshToken": "AMf-vByc7iDlCZkRN68k-6g_pjAzTilNbDyeJVJFtwwFQVp5N_gjJM-i2SWYS9I-DzqSKLJGDiazdCUbRtUhCC4BmJNBdmeGiea3YVNsR4DKmYqqvXvR_WwQMd3yHbGFE2LFoNUDrbZXRnRONdOtZDnSV1T5YFvy98qz4JxFhzMah29EnwSRpaJ2lcDoOT35xArds3uXsGYKSbiOZKeDMvMtyqHyCWWOMuvHXSLjdntC9hc9Oe0Tv9yfwYbPK2ucaceThmfWkOQH",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 928.9 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (284.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1748821614598@example.com",
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
    "etag": "W/\"5aa-em1e9Wr/5Kc36mI7vmM5WCX6l+U\"",
    "date": "Sun, 01 Jun 2025 23:46:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "user": {
      "id": "XgiSXM5dPcOHwbbjsC4rOSmHfY32",
      "email": "other-org-admin-1748821614598@example.com",
      "role": "user",
      "isSuperAdmin": false
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxNSwidXNlcl9pZCI6IlhnaVNYTTVkUGNPSHdiYmpzQzRyT1NtSGZZMzIiLCJzdWIiOiJYZ2lTWE01ZFBjT0h3YmJqc0M0ck9TbUhmWTMyIiwiaWF0IjoxNzQ4ODIxNjE1LCJleHAiOjE3NDg4MjUyMTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.obnhipPwKPn2ClGhLZi72hvmtTt6C16-yFF1iC3DITT_hqm5SdK-zAML4AOkvpO2YaXwi8iIfqFnoAZ5kUR4Klhi2p0VLGplwnCb3Zzh1OUF8QxT8gvoIZyE_8WkJQn5IClDPII6PrpD1iGGkwTLA4PY4zTANJBOLmwHi1yqqBy-FcIbucRuPynoYgH7xmtd-GwnqQIm5TDLViOHJVpGpS8S_Wk21EqOLXBG-HQsocH-YkXNUW4Md824pImJjlyNTee_JUL94uIl2QIIVw57V55V3jsKSQyo7sYPYvucJPFNOKgWqqqJNx8KACtkqx3EdM2c8hiOe8JMSguiBLqLbQ",
      "refreshToken": "AMf-vBwswnENPlspaWBjRhcI2EdiK_qTWTbp-pRty1gV6cfVrJH2Kpb4UHOFEncboPJ4koX6MlRlxGyfi5KhlEX__Dfv5kzzJNx25KWMHigZ6VcZxNx4rCNZ8XFIBukKuZL9gAgur1Sr9spZxUfkohRLJefvpRA2UWF8g6htT1p1fto2pGJqcQZEWKy2S0TF9hwhSt6_yUj2xZNd5NmIU62jMqZtMLAS6FUI8MEl5zjvIEF7x3DLMVa1IV8hDm3q0NyeTkHD4lfs",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 284.4 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (531.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxNSwidXNlcl9pZCI6IlhnaVNYTTVkUGNPSHdiYmpzQzRyT1NtSGZZMzIiLCJzdWIiOiJYZ2lTWE01ZFBjT0h3YmJqc0M0ck9TbUhmWTMyIiwiaWF0IjoxNzQ4ODIxNjE1LCJleHAiOjE3NDg4MjUyMTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.obnhipPwKPn2ClGhLZi72hvmtTt6C16-yFF1iC3DITT_hqm5SdK-zAML4AOkvpO2YaXwi8iIfqFnoAZ5kUR4Klhi2p0VLGplwnCb3Zzh1OUF8QxT8gvoIZyE_8WkJQn5IClDPII6PrpD1iGGkwTLA4PY4zTANJBOLmwHi1yqqBy-FcIbucRuPynoYgH7xmtd-GwnqQIm5TDLViOHJVpGpS8S_Wk21EqOLXBG-HQsocH-YkXNUW4Md824pImJjlyNTee_JUL94uIl2QIIVw57V55V3jsKSQyo7sYPYvucJPFNOKgWqqqJNx8KACtkqx3EdM2c8hiOe8JMSguiBLqLbQ"
  },
  "data": {
    "name": "Other Org 1748821615811",
    "description": "Other organization for cross-access test",
    "email": "other-org-1748821615811@example.com",
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
    "etag": "W/\"197-zT57eMvOwX9LHgDcSFhXWEXC6es\"",
    "date": "Sun, 01 Jun 2025 23:46:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "id": "4fd189dc-7646-4694-8c48-57338c05aa5c",
    "name": "Other Org 1748821615811",
    "type": "shelter",
    "description": "Other organization for cross-access test",
    "logo": null,
    "address": "789 Other Org Boulevard",
    "phone": "+1122334455",
    "email": "other-org-1748821615811@example.com",
    "status": "active",
    "createdBy": "XgiSXM5dPcOHwbbjsC4rOSmHfY32",
    "createdAt": "2025-06-01T23:46:56.222Z",
    "updatedAt": "2025-06-01T23:46:56.222Z"
  }
}
```

**⏱️ Duration:** 531.1 ms  

</details>


---

### Test: Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.45s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=88c342b2-a8dd-41a2-aad8-00854d61f599 (449.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxNSwidXNlcl9pZCI6IlhnaVNYTTVkUGNPSHdiYmpzQzRyT1NtSGZZMzIiLCJzdWIiOiJYZ2lTWE01ZFBjT0h3YmJqc0M0ck9TbUhmWTMyIiwiaWF0IjoxNzQ4ODIxNjE1LCJleHAiOjE3NDg4MjUyMTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.obnhipPwKPn2ClGhLZi72hvmtTt6C16-yFF1iC3DITT_hqm5SdK-zAML4AOkvpO2YaXwi8iIfqFnoAZ5kUR4Klhi2p0VLGplwnCb3Zzh1OUF8QxT8gvoIZyE_8WkJQn5IClDPII6PrpD1iGGkwTLA4PY4zTANJBOLmwHi1yqqBy-FcIbucRuPynoYgH7xmtd-GwnqQIm5TDLViOHJVpGpS8S_Wk21EqOLXBG-HQsocH-YkXNUW4Md824pImJjlyNTee_JUL94uIl2QIIVw57V55V3jsKSQyo7sYPYvucJPFNOKgWqqqJNx8KACtkqx3EdM2c8hiOe8JMSguiBLqLbQ"
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
    "date": "Sun, 01 Jun 2025 23:46:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "No tienes permisos para ver todas las membresías de la organización"
  }
}
```

**⏱️ Duration:** 449.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.33s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (839.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1748821616794@example.com",
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
    "etag": "W/\"5e4-BL1O3x7kLubTjRbQ+mMaZT1+86I\"",
    "date": "Sun, 01 Jun 2025 23:46:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Usuario registrado correctamente",
    "user": {
      "id": "0jKSdQbzoYM7wL4ElL4z6vbT2NC3",
      "email": "cross-org-invite-1748821616794@example.com",
      "name": "Cross Org Invite User",
      "role": "user"
    },
    "tokens": {
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxNywidXNlcl9pZCI6IjBqS1NkUWJ6b1lNN3dMNEVsTDR6NnZiVDJOQzMiLCJzdWIiOiIwaktTZFFiem9ZTTd3TDRFbEw0ejZ2YlQyTkMzIiwiaWF0IjoxNzQ4ODIxNjE3LCJleHAiOjE3NDg4MjUyMTcsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ4ODIxNjE2Nzk0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0ODgyMTYxNjc5NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KzKEU4i7KbXfTO__m2I_BfpfsmuUOE23wDCbPdgH27n7dY6sHref9VVSiZOFOTwS77438pZ_CFQbKZ0qiaAL6GYD45J1NCpr0K1BcF_mDt9IORmh0m-SzoqLI79G-ig3sSWJl5tu2DJ3EOwoY7e6aInSMIQ52KmapAUxW_4w5cwNJ21jjb2BuM4p3-XsKq36nj-Pqrh-mKF1g9HDbQ8LxICV9rQbdWuvB3BPixcRABq1ry10dYSew-AGR71AAygAZk2kxeIInXx3EJxMjy1GHXeuPYwGorLOTfpxDRGf-Wv7ZeE4fIKCjttbZYbq22ZQQkbiDfdmJw3krbNPzvEi0w",
      "refreshToken": "AMf-vBwVfdiKrB9MbIuyGo6_Ck_yiXwHdIpW9cLZ0gxEedFHz22_-AC5xlDxgoscCeFTDMALPjPrlnhn-10opvy_ulEtym8MyhC4KPFKi3E0S-iFdTfsdrRvoHCcyrXjr3gMgFdCOoRyWmIoXlXnU60r6nU9N5rTvzIbV0NeGi2jug-1yZBGaIaw3P32C6gaR0s9D9ddplWmnFd0BKQQWbrhGuHvA6FAP73cSkO5V7-pEQR_azrSDpXK1rwRwm18bmYbFdj96m5X",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 839.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (491.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0ODgyMTYxNSwidXNlcl9pZCI6IlhnaVNYTTVkUGNPSHdiYmpzQzRyT1NtSGZZMzIiLCJzdWIiOiJYZ2lTWE01ZFBjT0h3YmJqc0M0ck9TbUhmWTMyIiwiaWF0IjoxNzQ4ODIxNjE1LCJleHAiOjE3NDg4MjUyMTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDg4MjE2MTQ1OThAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.obnhipPwKPn2ClGhLZi72hvmtTt6C16-yFF1iC3DITT_hqm5SdK-zAML4AOkvpO2YaXwi8iIfqFnoAZ5kUR4Klhi2p0VLGplwnCb3Zzh1OUF8QxT8gvoIZyE_8WkJQn5IClDPII6PrpD1iGGkwTLA4PY4zTANJBOLmwHi1yqqBy-FcIbucRuPynoYgH7xmtd-GwnqQIm5TDLViOHJVpGpS8S_Wk21EqOLXBG-HQsocH-YkXNUW4Md824pImJjlyNTee_JUL94uIl2QIIVw57V55V3jsKSQyo7sYPYvucJPFNOKgWqqqJNx8KACtkqx3EdM2c8hiOe8JMSguiBLqLbQ"
  },
  "data": {
    "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
    "userId": "0jKSdQbzoYM7wL4ElL4z6vbT2NC3",
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
    "date": "Sun, 01 Jun 2025 23:46:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "error": "Unauthorized. Only admins can invite users."
  }
}
```

**⏱️ Duration:** 491.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.23s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=88c342b2-a8dd-41a2-aad8-00854d61f599 (617.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "etag": "W/\"6ff-4jttzdIcn4GgEHmxb85iNUasf8M\"",
    "date": "Sun, 01 Jun 2025 23:46:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": [
    {
      "id": "32ed1be1-9a10-48f8-ac2f-337455c72bb2",
      "userId": "j7aFM7PkmIQCkXw8T2kKTC6t0CZ2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-01T23:46:36.610Z",
      "updatedAt": "2025-06-01T23:46:36.610Z"
    },
    {
      "id": "a852946b-26bf-467d-9692-af489d818de7",
      "userId": "tCZJl6o1A5QmCurE3jUqRAoxsyg2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-01T23:46:38.002Z",
      "updatedAt": "2025-06-01T23:46:38.002Z"
    },
    {
      "id": "a5e3d921-42c8-4a93-8185-ac0885f1497e",
      "userId": "4pxnATX9BPXD2oBQBy5aUge2yvP2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-01T23:46:39.406Z",
      "updatedAt": "2025-06-01T23:46:39.406Z"
    },
    {
      "id": "2db55341-70ab-41e5-8dc0-c7f4682a1562",
      "userId": "6lIi14iGVCcfEdn630rS84m3E8M2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-01T23:46:40.969Z",
      "updatedAt": "2025-06-01T23:46:40.969Z"
    },
    {
      "id": "f00e3267-02da-4eef-ac26-3916aaf25c39",
      "userId": "OSx4ctGYtJRVPIL2hDADLflcCXW2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-01T23:46:42.321Z",
      "updatedAt": "2025-06-01T23:46:42.321Z"
    },
    {
      "id": "0e0bbbf9-25f9-4722-bd64-6ebf93f1734c",
      "userId": "CO1AZVIXWHM06UtARXuoqfEMWhu2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-01T23:46:33.378Z",
      "updatedAt": "2025-06-01T23:46:46.495Z"
    },
    {
      "id": "d76e3934-8661-4fcb-869c-238811a035e5",
      "userId": "BYLU43jG3ie9U1FYSNhVKXCw95d2",
      "organizationId": "88c342b2-a8dd-41a2-aad8-00854d61f599",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-01T23:46:51.408Z",
      "updatedAt": "2025-06-01T23:46:51.408Z"
    }
  ]
}
```

**⏱️ Duration:** 617.4 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=4fd189dc-7646-4694-8c48-57338c05aa5c (612.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:46:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": []
}
```

**⏱️ Duration:** 612.9 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/4fd189dc-7646-4694-8c48-57338c05aa5c (858.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 858.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/0e0bbbf9-25f9-4722-bd64-6ebf93f1734c (507.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 507.9 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/32ed1be1-9a10-48f8-ac2f-337455c72bb2 (454.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 454.4 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/a852946b-26bf-467d-9692-af489d818de7 (462.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 462.6 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/a5e3d921-42c8-4a93-8185-ac0885f1497e (461.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 461.8 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/2db55341-70ab-41e5-8dc0-c7f4682a1562 (479.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:02 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 479.9 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/f00e3267-02da-4eef-ac26-3916aaf25c39 (458.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 458.8 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/d76e3934-8661-4fcb-869c-238811a035e5 (565.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Membership removed successfully"
  }
}
```

**⏱️ Duration:** 565.1 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/88c342b2-a8dd-41a2-aad8-00854d61f599 (881.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE1OTAsImV4cCI6MTc0ODgyNTE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.glyQkrHQtVv29bWipueBYpFB4pBP4PT_HkHBjloIjvNgv1AIjwjSQ0F0t8Mo-ZPNzha8Jkdm7utnwsA-m5vXznGvmFXvQmca_tkPCtIZRNX3O1LyQPcB351_vDVZWMZgtrWeRo8GOG5C3TTcZ1z6UsPfNWrwzSF4HOOG4K0wuYikm7VE5ShdNwC5eaU-LyvaR1EOvxj93Z5wRlhNx-G-Zd4z9C9kP7xRlqclp0WqYHNtHXDwjsfMKAhqrekDbEHW9KOP6fuW-y2HCaccaf4e5YrB3O3Q06MIto4CmPB5dJKxMToV5xp5zu5PU3vPMNb3uAiTeLwePZNpXlgcuDjEng"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "Organization deleted successfully"
  }
}
```

**⏱️ Duration:** 881.4 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (237.9ms)</summary>

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
    "etag": "W/\"640-jad3mUkmN0gAFKiX3mI5pwWn040\"",
    "date": "Sun, 01 Jun 2025 23:47:04 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjI0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MjQsImV4cCI6MTc0ODgyNTIyNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i1j0AFhof0DOiDB9d3V0PYWKE8D9i7T62PO4Qm7RY7e4-jyuMfHLBHYt7rP9U804m6io8ZMRdYlSmiG-TMUFx1A-3roQ_ndfB70vUhEOqRGr2XSOQtKbw-B7kOz_atZ1vgjUAwFWZNkScmKw7o--sKq2zsDZ7-CzLzGoYia_MjHGE1DXYx7v509rW2BEzOOxAvmOgKIgIlgsTJcmpk9batlfCttsgjiR167RgEjdl76bpXFqG-GGX0BAYTfVdadBuQg52pNkWUh6eCQsASdhcMYrmKQZ4xUVeqlv6Qktc2wR8h4xuZY5umwHwB7DoGriRjtBs2ayMitmSuGS0B8WfQ",
      "refreshToken": "AMf-vBzZum_1YQWp5-r4wAcPQI0ZlWeCjV1t8G5tV1NiVE5evoDB_VS-MT68ABNJ4uxJD9OID55pB7x4lJv966SOzoJMRwaBAlet_PN28ovbgaiFfb_VW9cblmNOHLUVNbzZnMzFvOWnXXXdcQw7trRxdCwy1XkQYSbsKktPp_X6pVvzPPIjjK9ojD11y1IACJ8tIHT1_LXsGtaH46fP8UYa7eJVZHqGnZHcHeG386ld1pxvuTu7EJiHzrjlZBCUj9GPnwwcrI_E",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 237.9 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/mtfkzIsDZugK3PQEWXhqf3h68MC3 (1174.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjI0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MjQsImV4cCI6MTc0ODgyNTIyNCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.i1j0AFhof0DOiDB9d3V0PYWKE8D9i7T62PO4Qm7RY7e4-jyuMfHLBHYt7rP9U804m6io8ZMRdYlSmiG-TMUFx1A-3roQ_ndfB70vUhEOqRGr2XSOQtKbw-B7kOz_atZ1vgjUAwFWZNkScmKw7o--sKq2zsDZ7-CzLzGoYia_MjHGE1DXYx7v509rW2BEzOOxAvmOgKIgIlgsTJcmpk9batlfCttsgjiR167RgEjdl76bpXFqG-GGX0BAYTfVdadBuQg52pNkWUh6eCQsASdhcMYrmKQZ4xUVeqlv6Qktc2wR8h4xuZY5umwHwB7DoGriRjtBs2ayMitmSuGS0B8WfQ"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:05 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1174.5 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (288.7ms)</summary>

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
    "etag": "W/\"640-E4ugjLbmTjujh1Ybrq/EbJYDd8w\"",
    "date": "Sun, 01 Jun 2025 23:47:06 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjI2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MjYsImV4cCI6MTc0ODgyNTIyNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bDuTPwA_QbmiRLX0qT7RintQk_VXOqqWUaTnc2Ybx8R3pEW_YEYKHl4--gY2xjBoq-gCo5UrILPbe0SUNdpcKGRBwu6_W1YLu0icr5RAhY48Y9RH2rs23QtW8gWjIohTvbk6aZM1G29wDoZeEtgZ6WLvyhtnBlXMzdbvgN1g2zvXKE1uSGu8Q3PfrZDTxklF8op_0P8y0SVjbUUcSV6iCAgmxy2oq6NozYc50rakW298S_GxIOIuaBerMCTbnADvcS6Qo0ZOdybe7YUBH_c922a8Dp-UEzcBCw1wPOtLpYSodlPl5mOFc9M8EAZlH0geOZZ09-sl7afT0kVD_0_bNA",
      "refreshToken": "AMf-vBwfTksOULzzM6JMn18n41nzxe0A6xfK5FYLHQuSE_w-d9AQHWj__0S6y8iofArwEuorV6gmo7ZUcp8Y8qWjB7so1MerL7aw3q8eNUoTaz6MTleaXjjRSQZTDRYgyziPZCN3xrEy_eqCY-_RZqC_pwShNCEEucFuYcDZ3p5bZ29Q2nyVm6ufxgFUh3s0oGv4DTDZWqxThduRlkQk58bNC9-ne3h8n8G2NP6hkbfryO3L0gofMkmS0ZCi2JEroMskNeQ04Nqe",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 288.7 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/CO1AZVIXWHM06UtARXuoqfEMWhu2 (1854.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjI2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MjYsImV4cCI6MTc0ODgyNTIyNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bDuTPwA_QbmiRLX0qT7RintQk_VXOqqWUaTnc2Ybx8R3pEW_YEYKHl4--gY2xjBoq-gCo5UrILPbe0SUNdpcKGRBwu6_W1YLu0icr5RAhY48Y9RH2rs23QtW8gWjIohTvbk6aZM1G29wDoZeEtgZ6WLvyhtnBlXMzdbvgN1g2zvXKE1uSGu8Q3PfrZDTxklF8op_0P8y0SVjbUUcSV6iCAgmxy2oq6NozYc50rakW298S_GxIOIuaBerMCTbnADvcS6Qo0ZOdybe7YUBH_c922a8Dp-UEzcBCw1wPOtLpYSodlPl5mOFc9M8EAZlH0geOZZ09-sl7afT0kVD_0_bNA"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1854.1 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (394.8ms)</summary>

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
    "etag": "W/\"640-GdzNL2tLSX5NZJYXa8+14Ho96wA\"",
    "date": "Sun, 01 Jun 2025 23:47:08 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MjgsImV4cCI6MTc0ODgyNTIyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GgTxMWmuO9LhYhNGuwDGIuQyuTAM7_dqSmvc9ex504eTgZ7bePhJM03yQB1VXdUSTX7taaU_CRj4Dck1vhc7U66fkyu-I0j7jKEYbpYUCxU4YqzeppqHARKM88s4jiawIn3FRwAdabC2415SBWZQ2b4Wx74UmeDkYEAegUvxBNJEwfcS1-a_BgbGE6MBI2QhlJ_pfHcvpR6hXjflUJMrYLi9YVQzxAKHMa7K_F0XrGQJnth0hWAikiNNvXsC_AgXmJ-1yLm3EBxfnJb7YRk_TOCRgbRRqz04o34ZfsxtE4xdGnNNDETbGs_sqQrrdgqidgK-Xq_cVJ2OUbGpUmhKhA",
      "refreshToken": "AMf-vByxFLT5Yn6_4XZ5S-urymsx7ciPkaKD5eInVBBjJALgGoDKplADntyanGhoGktQX_uNmZPVFeqe6rCu_DkMULvExkCI1jd56RD-WqHLlA5UStA5MxtGIYh50OX6FHhRxP6Sr4niDRwGVjBwfvXAOBPN0R-zQvw6oc0L1CP-s87QbrS9kADTdJr9We2wkxfmEmEjGtbIbb9gnD9YyDe6AMgLp7wiyKVG4HsdPYUD8hLYTK-Hd5TrY2cHiC2ToyYcGISZTgFa",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 394.8 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/IpKkzNaC4dZjoGWl2opvwGQIV8v2 (1150.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjI4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MjgsImV4cCI6MTc0ODgyNTIyOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GgTxMWmuO9LhYhNGuwDGIuQyuTAM7_dqSmvc9ex504eTgZ7bePhJM03yQB1VXdUSTX7taaU_CRj4Dck1vhc7U66fkyu-I0j7jKEYbpYUCxU4YqzeppqHARKM88s4jiawIn3FRwAdabC2415SBWZQ2b4Wx74UmeDkYEAegUvxBNJEwfcS1-a_BgbGE6MBI2QhlJ_pfHcvpR6hXjflUJMrYLi9YVQzxAKHMa7K_F0XrGQJnth0hWAikiNNvXsC_AgXmJ-1yLm3EBxfnJb7YRk_TOCRgbRRqz04o34ZfsxtE4xdGnNNDETbGs_sqQrrdgqidgK-Xq_cVJ2OUbGpUmhKhA"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:09 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1150.7 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (245.3ms)</summary>

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
    "etag": "W/\"640-105RLRh5CR9iUUcChP9T6+1rxGU\"",
    "date": "Sun, 01 Jun 2025 23:47:09 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjI5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MjksImV4cCI6MTc0ODgyNTIyOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mENyJ8yKN3YN2LWFQQReIO51pUflQV9kJjNzb0BXezbDeupNA_1gpAqpD3ACppBRFkExmCEGBVM2cng03j3RMKJESwANfItPpZVaXBBcAzPbuE-D8CeNcJTLCIgKtVfqxvyzc4v3wpPvsYUV33iIWPI28Eqrz7WAjHcArSSKEPDhmhU3YO-uOHMOJsQOrEYGX_Leo6sEBJhbKliCpHh7uOtu9MUSWGrPtgcZNWMM_2zz70ztr4m4Y4KhUWVTvkDGbwBdCveNUlowZWLLjzATNQs-v_FFX0u27JorRR9IEFulEatc4Bkn5-5aLW8JhAfDs3Y0zQKhltONBW2eI96frg",
      "refreshToken": "AMf-vBy-F0kl0lvpIP37Avt20oFsaPXN4NXNHJiAl4PAmwHPeANdxD2hHDcm9FSd9eTX8tOyayoL-N-CTlKuyJXauENkhZHaYkXIVv7i8RD-HPmIdEQaiu212hu1EraRJc46Ut2Im69Ni3d1w6YtmzdsHAEYdUPDTg0m1iGDjzFXraatn78RJeb7gklHK88u8Tc-nCsySy--gGC7AoMF5G9E3g-Bux5I5EaRCUvNSg9c7IVDal7GStesLBGrFVS2PQnwyrAYGx0a",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 245.3 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/j7aFM7PkmIQCkXw8T2kKTC6t0CZ2 (1093.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjI5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MjksImV4cCI6MTc0ODgyNTIyOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mENyJ8yKN3YN2LWFQQReIO51pUflQV9kJjNzb0BXezbDeupNA_1gpAqpD3ACppBRFkExmCEGBVM2cng03j3RMKJESwANfItPpZVaXBBcAzPbuE-D8CeNcJTLCIgKtVfqxvyzc4v3wpPvsYUV33iIWPI28Eqrz7WAjHcArSSKEPDhmhU3YO-uOHMOJsQOrEYGX_Leo6sEBJhbKliCpHh7uOtu9MUSWGrPtgcZNWMM_2zz70ztr4m4Y4KhUWVTvkDGbwBdCveNUlowZWLLjzATNQs-v_FFX0u27JorRR9IEFulEatc4Bkn5-5aLW8JhAfDs3Y0zQKhltONBW2eI96frg"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1093.8 ms  

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
    "content-type": "application/json; charset=utf-8",
    "content-length": "1600",
    "etag": "W/\"640-rnIKrG7VW5k1s+iXXP4o/9rDwKg\"",
    "date": "Sun, 01 Jun 2025 23:47:11 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjMxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzEsImV4cCI6MTc0ODgyNTIzMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.USA7-Cn09UiRa0_7snBQ2yIiSSKw41jjRb02YdEZfX0wEbde3hl7EDygD2wPn0etY8Yq4IuAm_gx_R_QwuNptYMaWGtPPactGvxQn0wl9Vi8pmRcVZt6sLB8kBkO26rCrOZALpabIq1bQLYwtz9CuBB9xTdTLitTQBFu0x106xQkHh4PPhsMTf5F0PTzDy-EWRsy4_CHuLx6tKmXys3_8R8PlXl_FJI7hWsf8sjumY-Fq7omyWYoToJaqNA_k_gL-uCHb37oEGGHl2IQqGmOrddlBAX9Sj3OYcwIdtVPfBWAkyzFCK-SI5RYG7MGq8EmpDJRvqilSJeyqI2oH-vI-A",
      "refreshToken": "AMf-vBz9YIz29dNCgUtMtEOebsKNdhqfqb-1VxxGn8RwJNEB6AD8s08LtxuXoTgFB9qEqXQkFxNtgjhyjuC9d4hDM24esbCM3elDx90PoCo6PXpnO4iC7_ppKK3h_xcSwaG_qh4UCkFyIxapkdXa3oxMJD8ocu-5tOp4NvgTj7WdoewtngKBNhiv4B148vCdEFdaLhxck8MkxOX4q9BM9c2Qs4ALIY-UnhitebIoIKcUKiZEuNZhwDku3QtqOn2prCkqQ1fQYl74",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 239.7 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/tCZJl6o1A5QmCurE3jUqRAoxsyg2 (1237.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjMxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzEsImV4cCI6MTc0ODgyNTIzMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.USA7-Cn09UiRa0_7snBQ2yIiSSKw41jjRb02YdEZfX0wEbde3hl7EDygD2wPn0etY8Yq4IuAm_gx_R_QwuNptYMaWGtPPactGvxQn0wl9Vi8pmRcVZt6sLB8kBkO26rCrOZALpabIq1bQLYwtz9CuBB9xTdTLitTQBFu0x106xQkHh4PPhsMTf5F0PTzDy-EWRsy4_CHuLx6tKmXys3_8R8PlXl_FJI7hWsf8sjumY-Fq7omyWYoToJaqNA_k_gL-uCHb37oEGGHl2IQqGmOrddlBAX9Sj3OYcwIdtVPfBWAkyzFCK-SI5RYG7MGq8EmpDJRvqilSJeyqI2oH-vI-A"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1237.3 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (278.7ms)</summary>

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
    "etag": "W/\"640-AU7h1ZkBnki7SIDnfKTFu1aeyV8\"",
    "date": "Sun, 01 Jun 2025 23:47:12 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjMyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzIsImV4cCI6MTc0ODgyNTIzMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WbKuJkDh6DH3RqplFr8ARr6iI7S-UFBiABDnyeXm_Krm34xBpYX7d45fMc_yeOzliUcFAQhzeRf8BDum5lu5EPbQsPjwaiECsqioE0tYwlzq90RBMwO2OE7b-ksHlzLw2hK4OENXPod7QRVl8arL-CcDj-glSKO8VmJIh-s4jfa_BLcFUedv8Gr3_chQP48GI3XIEL-r2d1fOTok_ZeKY6N6AWHPm4RhQvYZMM7zv6vGcLAQaKZCtG827zcqRgZUmq8NQxYwoJsWIp4go5KqpXKHtYDMrYPI1CJY84xvffCBxufyYJ1iEcB-HX9-HvxmLsGca1fNu5r6m_47mQuYqA",
      "refreshToken": "AMf-vBxSHm83noAt9kYa8qRodLmqJD7dVNcaNexTEoMHdZUq424sjB9gtjMi61M2DyEGSAbwwUsQMn-ltubHRkish6H09kHn2ZZOTPs8JmoB8_92G3fdqqkPa7zHZkzV9B8CCXmViEuLy53rijVRAkwASQhI6WEjkxouqG9tPAv73AqjgLk4kskIowIVTu_fFpf5XBG9T30mZQ6ceCxjBGmIW75b2bK9hnPPuG8R1BrY_ilMPuWi5rUF4p5J0ev_ASJ6dW6NQvW8",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 278.7 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/4pxnATX9BPXD2oBQBy5aUge2yvP2 (1107.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjMyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzIsImV4cCI6MTc0ODgyNTIzMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.WbKuJkDh6DH3RqplFr8ARr6iI7S-UFBiABDnyeXm_Krm34xBpYX7d45fMc_yeOzliUcFAQhzeRf8BDum5lu5EPbQsPjwaiECsqioE0tYwlzq90RBMwO2OE7b-ksHlzLw2hK4OENXPod7QRVl8arL-CcDj-glSKO8VmJIh-s4jfa_BLcFUedv8Gr3_chQP48GI3XIEL-r2d1fOTok_ZeKY6N6AWHPm4RhQvYZMM7zv6vGcLAQaKZCtG827zcqRgZUmq8NQxYwoJsWIp4go5KqpXKHtYDMrYPI1CJY84xvffCBxufyYJ1iEcB-HX9-HvxmLsGca1fNu5r6m_47mQuYqA"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1107.6 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (238.3ms)</summary>

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
    "etag": "W/\"640-z3JQWBBJiGB6MjvhM5MOMIcLpTs\"",
    "date": "Sun, 01 Jun 2025 23:47:14 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjMzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzMsImV4cCI6MTc0ODgyNTIzMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hJYrxEJqx-SWIcc307TmR3XKcX9uDMbiWnqgrkdKeK4OU80kjFUcaBbfjWoItbOVV0crr57bYk7TohGjHy8O_IynBLBzsR8uh_0A5s8X2qHwVKti5bQtEwht1pwOIoeIlerAv1K1WJ6sJWoOaojKZBbmcq2WvdIGZ-qiM1aTA5_tmlOYSW_bSBpt-HSde-qMgMJJDo0RgKJ3hXJ5ipURBdcF1ClaZ48bT5hDCbjGB7uov4_UZuHNg4Hvak7IlBSePMrrGAasZ_6iYLHhzOxbV4jm6w3BpUAbay_A7v7XSuV0l4_x33V09vq_sVvtDut2hcP6a2VCAUaxaPc_QErJ-g",
      "refreshToken": "AMf-vBz3hJW2p57-AqQ_IJTV6gZ7wV2Daeaffou67pUOR5mXbXaP_52wnOKHfj1Y6nMrHF99qHdET5JmJ2leYC2u_D6OM9aU8wGOcromWBGMlOAySTvgg1IbIFOoWpLAf8IXMsj4noI5RE_9S3eXcm0ZvJBDqSa3TcZ6IAqF5slFJy2MiWdBeD5TzP25j4z9OZLIMw2tIDvbRnXnMtjiVD49lXB91mJvrw0A4BEIOaqHCNQP377mAoadShhm_WIJ6VIh3Y6wMjm0",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 238.3 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/6lIi14iGVCcfEdn630rS84m3E8M2 (1101.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjMzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzMsImV4cCI6MTc0ODgyNTIzMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hJYrxEJqx-SWIcc307TmR3XKcX9uDMbiWnqgrkdKeK4OU80kjFUcaBbfjWoItbOVV0crr57bYk7TohGjHy8O_IynBLBzsR8uh_0A5s8X2qHwVKti5bQtEwht1pwOIoeIlerAv1K1WJ6sJWoOaojKZBbmcq2WvdIGZ-qiM1aTA5_tmlOYSW_bSBpt-HSde-qMgMJJDo0RgKJ3hXJ5ipURBdcF1ClaZ48bT5hDCbjGB7uov4_UZuHNg4Hvak7IlBSePMrrGAasZ_6iYLHhzOxbV4jm6w3BpUAbay_A7v7XSuV0l4_x33V09vq_sVvtDut2hcP6a2VCAUaxaPc_QErJ-g"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1101.8 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (323.7ms)</summary>

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
    "etag": "W/\"640-HIT5W4FhEuD60q7wnClXNi7pNA4\"",
    "date": "Sun, 01 Jun 2025 23:47:15 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjM1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzUsImV4cCI6MTc0ODgyNTIzNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.csR_wszUQkp76v61bRlqx-QVxn28urMQI_jNx6MAlR01kPVr4v8XYZWoV_eNoR6UYKN4uqnICnrPhAqEfVxUkp_pvvAzWtI1L86QRhoMLVwLY0OZlmc5tMGgV0FmPOzcVRk2r7-717NjngBV9x5OVGbAGii8Ftq8VWlquxURpZcWZSj6vVRdPU3h1MHAJnoEaGQoyhPhwRJ6dfUqoFaYeTY0913rER6-ZmUR65gFV6dGpyOuZJbkbzhCbomJyxWZCEVO1FFpUSsPlRet5clkOO89uRpWUdIrScWgv6E5rVHZ1km-gtEdESmK6HpGxwEvACEv-BfEHzGX4coIguOEWw",
      "refreshToken": "AMf-vBzLlL1RPmJTTxunIp0TYm-rtzrCDtnC42h_-2LfoA_2jN9fjlmlDv2GdrOjQkslBgvgogpamMDPbY_AGfKV9ogruD1jn_yIXkOlLa-B1Xm_3-HyvUxl8rE_AjDi8XWrlpyATJPZ8oJPNb3vKAe223uA7wCVvyXFMP9FjxDm8GagBFaJipCjBZhWqRZTp3PB9j08P4EuQ5biFGH2v2O_8oKt-KixYglBqi9MHADqTxTRx56-OTL9XdK2kzq_029AmaAqJD_5",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 323.7 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/OSx4ctGYtJRVPIL2hDADLflcCXW2 (1071.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjM1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzUsImV4cCI6MTc0ODgyNTIzNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.csR_wszUQkp76v61bRlqx-QVxn28urMQI_jNx6MAlR01kPVr4v8XYZWoV_eNoR6UYKN4uqnICnrPhAqEfVxUkp_pvvAzWtI1L86QRhoMLVwLY0OZlmc5tMGgV0FmPOzcVRk2r7-717NjngBV9x5OVGbAGii8Ftq8VWlquxURpZcWZSj6vVRdPU3h1MHAJnoEaGQoyhPhwRJ6dfUqoFaYeTY0913rER6-ZmUR65gFV6dGpyOuZJbkbzhCbomJyxWZCEVO1FFpUSsPlRet5clkOO89uRpWUdIrScWgv6E5rVHZ1km-gtEdESmK6HpGxwEvACEv-BfEHzGX4coIguOEWw"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1071.2 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (241.8ms)</summary>

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
    "etag": "W/\"640-Aydq5kylCOOFVr3rgEs2moyjRgY\"",
    "date": "Sun, 01 Jun 2025 23:47:16 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzYsImV4cCI6MTc0ODgyNTIzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jwhG7U5yGvo81EeZ-qzzDHY0TNgehTUNlDcSamxqgxKgjVBAs-VVoBiRjFOQMabqoWPAIN3KFsDOPXmeFnYTYX51niYbUt4E90kPQ_9KQePk6rsOp-XamN4dMEZpdaxKVOou0i7c8DwAHrUPKTTtgTz4Zv5jkhJjJ3B4ys2a1Q3N0ElPEkCzt6tdLn8vXxgA_PhFVEEqOpJKkRw4DwG_xf9AIkSnYHO_JBWFQ6PrSfnKMHRdH08GooBJVTUP7M6LkxEiAWgcUMlOfJSMONdwZLenZzFXAjod7B9-7m2td54HD2ATymWZ7eJ1E01kGlSCH1goyD7FYirQC5Y55Rognw",
      "refreshToken": "AMf-vBz7ooYuOmIZ6LKsyN77xjXHp3NhHBiS3xNpM2wPD-_fhhc01wHR6nO_toMZVdDYZXWVNmZZA67JbD_GHW9K0ZdgBRWQw2oX9TmqxeqBVRhSLTvVweUUI2lZbP5R51rfHggcUXQk6Gmwoq9Mtr1OScruPsxqYATMJyxVjYSqAlUQIms6cPjmTZS2ujuqpCqqjORbiy2VRRMxkAEDRr_Mlii2DKVVWjx4B-u8sN1zHTvB0y6vWh2sHqF15c3perhG0JKq1OdN",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 241.8 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/aoJDpurgHwM5RWWFebaiQdNlAaB3 (1113.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjM2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzYsImV4cCI6MTc0ODgyNTIzNiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jwhG7U5yGvo81EeZ-qzzDHY0TNgehTUNlDcSamxqgxKgjVBAs-VVoBiRjFOQMabqoWPAIN3KFsDOPXmeFnYTYX51niYbUt4E90kPQ_9KQePk6rsOp-XamN4dMEZpdaxKVOou0i7c8DwAHrUPKTTtgTz4Zv5jkhJjJ3B4ys2a1Q3N0ElPEkCzt6tdLn8vXxgA_PhFVEEqOpJKkRw4DwG_xf9AIkSnYHO_JBWFQ6PrSfnKMHRdH08GooBJVTUP7M6LkxEiAWgcUMlOfJSMONdwZLenZzFXAjod7B9-7m2td54HD2ATymWZ7eJ1E01kGlSCH1goyD7FYirQC5Y55Rognw"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1113.9 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (238.5ms)</summary>

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
    "etag": "W/\"640-xiPtEpKCuowqKk6XSxfwWCNeYeM\"",
    "date": "Sun, 01 Jun 2025 23:47:18 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzgsImV4cCI6MTc0ODgyNTIzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MiQhaiND_d5ObhF9i3UnkU2q7mg5cwDtAeQcSMqDj-q3iwZHRh3ahpt8BlB6C4yhzOBmY0IxsZVUBe5Dv_tkWa4XcgbHxYKE86om8-NfjTi1lW_anJyBi3d4HMxssUVEqNbePBtmHg75XUiL_g5LRMa2DYCujmfq3G-5l2s3Y6EPy063QSPsbL2XJ-2yC4E6DaGwoRmB1ZSy40FpTP5Eq5bdyLURrIrJApnlXj7O5mjAlstHhNH727JzBIMJrAUQ6XmWmc1lSFUMt-Jv3RNA-hD113l6MHkJma-cLqNIpa-x-79sdEWAzqZ8ee2Q2t1zccDmnJBV-f0bLh7TmhHr3g",
      "refreshToken": "AMf-vBxjeaLvbi3hJucd2aNvmq6AQmD1cRQvpRxRHhUA2I2ovNPyxuB2uNP9y2FTMgsQr-MtdK90FHnZ5CBlJ9iJAlNonvQ_8EjkqpXyPJPSax7hljgFRsIgzZnUEaUzhYr4jCtbTfGB9fCUZUKnqF-kUBu7OHwDfk0aqodAcs_Ievg9f6Y4KhArGC-AVlarqFAgFK-DtIIrgvX0IZ8JAa5FehshZheU3D2z3ScBFnqPW2KM1DL8d4MVIAU7rQ4_Utxk8PrHb4Vg",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 238.5 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/BYLU43jG3ie9U1FYSNhVKXCw95d2 (1017.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjM4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzgsImV4cCI6MTc0ODgyNTIzOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MiQhaiND_d5ObhF9i3UnkU2q7mg5cwDtAeQcSMqDj-q3iwZHRh3ahpt8BlB6C4yhzOBmY0IxsZVUBe5Dv_tkWa4XcgbHxYKE86om8-NfjTi1lW_anJyBi3d4HMxssUVEqNbePBtmHg75XUiL_g5LRMa2DYCujmfq3G-5l2s3Y6EPy063QSPsbL2XJ-2yC4E6DaGwoRmB1ZSy40FpTP5Eq5bdyLURrIrJApnlXj7O5mjAlstHhNH727JzBIMJrAUQ6XmWmc1lSFUMt-Jv3RNA-hD113l6MHkJma-cLqNIpa-x-79sdEWAzqZ8ee2Q2t1zccDmnJBV-f0bLh7TmhHr3g"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1017.6 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (321.7ms)</summary>

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
    "etag": "W/\"640-yxtE5qvj6/CF6mXYBhe5kSWxL1c\"",
    "date": "Sun, 01 Jun 2025 23:47:19 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzksImV4cCI6MTc0ODgyNTIzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mOPXT2N0TSCukENhN2WJwNh9KXtXJ78Pb8Fe87wZupZkj50qgXeaqp2SPxgFCj4wms3_73omewcEN2LNGR1mB6DV-jZrijqZxASo-4RqqCybIF_SyHg5bJdNha-aoa7HAPDVo7k6am_SAVL1PJ4jcIxYkmywb-GDP51cvnkd6vC1-zsMJ8CfiScuZzzLzUJgva6VAqD4pP9af_oIr9K-zLNcdmFIQ7LgxubBn6gAfsC8ld-BSUVSRyKC0OFG0Wv1Fo2jj7hhlF6MjV7zZrSSfRw8qEeEFk5wBtHJ36tIOwuJ8xKwU41OAn11l3Iw8t0h2owV8CXCeu2829Yf5liHbQ",
      "refreshToken": "AMf-vBxHbLZniczCyrC6dheFHqL9yNBMBkmnJpQZ1CpeT85r4CVmpq29OPPUFXoplZylo6D5RxDCz2wnIUB6r7h11XZB0MdZPrbMZL-DF13kR-41l_oFLU9rE9PnMRtE8hHfNm704umuA9bbDhOlKr1L5quAaGi6L-86j_m4PoJiSjJRRXIsy6wrO2XUHpdZhuJq_NpZTokddpE66yB4EEDVsWKm7ELEW3hWPOdMXKzrudhA1ONGvjvi0HYvrznsvrzAW4dvQ0Uz",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 321.7 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/tENnUNB9aFYg9bMt3lbthua9sws1 (980.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjM5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2MzksImV4cCI6MTc0ODgyNTIzOSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mOPXT2N0TSCukENhN2WJwNh9KXtXJ78Pb8Fe87wZupZkj50qgXeaqp2SPxgFCj4wms3_73omewcEN2LNGR1mB6DV-jZrijqZxASo-4RqqCybIF_SyHg5bJdNha-aoa7HAPDVo7k6am_SAVL1PJ4jcIxYkmywb-GDP51cvnkd6vC1-zsMJ8CfiScuZzzLzUJgva6VAqD4pP9af_oIr9K-zLNcdmFIQ7LgxubBn6gAfsC8ld-BSUVSRyKC0OFG0Wv1Fo2jj7hhlF6MjV7zZrSSfRw8qEeEFk5wBtHJ36tIOwuJ8xKwU41OAn11l3Iw8t0h2owV8CXCeu2829Yf5liHbQ"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 980.4 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (261.4ms)</summary>

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
    "etag": "W/\"640-pOnPCJ4sGI8tQ8BRwci+QHgeXS8\"",
    "date": "Sun, 01 Jun 2025 23:47:20 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2NDAsImV4cCI6MTc0ODgyNTI0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AWHamT3i88Id0V1R4YgSVatRYcRGOVIDjY9fVLA5d8Pa5CNnQJNufQk6mAn7h6JfKA8WWAZKOYU4YpZ02MLnL9j13eGh5Hnqi8KQZrz8obKjKS5gsM_FzK6RCH0CzR5F1aPcKKQBKuL8p4jqEmU4cGq3WB649uFl5j8PJNMevPVld7DtDJcWrA3Az_mqvzmGzIt9AFj5IwmFLMjARCSnb4UZoPu2t3hXQ3ixpFoT3ULbchADa0PwrBGTZjhoSAP2s_juY4gU5Bvjnnq9WoBOJdhR9t60PCClAqkXFXTOW8Uconi6IZAB96p83xgzPXcYH17e1sx4_T01bqXgyrLnXQ",
      "refreshToken": "AMf-vByQByZJmJk_cUMcnFVpy37sAEx1XofZbpMHCmitvnpvlAJb26v4cxghamMD4IgCYzzj28aCmCjrcB4eyCi4IaZ-XOgLGQta8tadUIXZ2Nz4aUdYNzPwTwc2OEStDlRxtXeXQ4PDUHbTRR2d_C3S-GsMvyItk9U0qnoqrMP7AvXGr-dQ4pgdlOuy4epwIGJp65wguEP1e8lTV0_7AAAfDo9p-iB4JWz5vwnrC7DUOFORbVfLmfEOSFe0qUzhsN12DSlf7mqy",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 261.4 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/XgiSXM5dPcOHwbbjsC4rOSmHfY32 (1069.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjQwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2NDAsImV4cCI6MTc0ODgyNTI0MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AWHamT3i88Id0V1R4YgSVatRYcRGOVIDjY9fVLA5d8Pa5CNnQJNufQk6mAn7h6JfKA8WWAZKOYU4YpZ02MLnL9j13eGh5Hnqi8KQZrz8obKjKS5gsM_FzK6RCH0CzR5F1aPcKKQBKuL8p4jqEmU4cGq3WB649uFl5j8PJNMevPVld7DtDJcWrA3Az_mqvzmGzIt9AFj5IwmFLMjARCSnb4UZoPu2t3hXQ3ixpFoT3ULbchADa0PwrBGTZjhoSAP2s_juY4gU5Bvjnnq9WoBOJdhR9t60PCClAqkXFXTOW8Uconi6IZAB96p83xgzPXcYH17e1sx4_T01bqXgyrLnXQ"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1069.4 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (329.4ms)</summary>

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
    "etag": "W/\"640-UQdNkRWk73tcWMSGy83XDnN5AnQ\"",
    "date": "Sun, 01 Jun 2025 23:47:22 GMT",
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
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2NDEsImV4cCI6MTc0ODgyNTI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ES-gzvvJBhW5M-2nmycvmsvuB4kUiL0FJ78X0Gkmije-3TgcZct0uCsLwBnwk-zKk3ag9Nm4FSac7PatmFigy5xgP5cnkzhDjgRfAaBfUtgjeqq1h9Fe3Fu1NC7lByvF0oWVjGIF2cJWgzuOnwQXENZnKI4ahRghzFM2EmrmO8yhBh9t7McOAr4XVssDy5qm7x_9AshW1OeuP1Q-szS-gavdejYcOwpJ6-C8wC0du05ZsQ0mrKjrS_gMeSqgoTTz7wOTp3D-_Re080Cu9Z-a1fy_1xtJ6rEduuaG8s0zFFwTwdlkglnARcrdbGyp0a8qNHgPyhY4ERBn6hfyaMKGyw",
      "refreshToken": "AMf-vBxKL0mY5DjgK6Hau2Dsi-lVnv6dDaxu8H4mRhY-pQgn5JUZdoFNNvpDzpmqglck4PpwHEOWyEjvecoeNAE_SNnPGptii6hO96UWoX1zaU3WdNSP-aQDpuV6EY5OTtU-4WClEZRfLyH3ComCnAPdrXbjZbnHT4iSGOMfr5B_bpwJi8D3NmJcgoKUIVLNCnB-3pqGQKFCjsoaS0ZOLiSlvpMm8ek0ZnoLtAoF06u8kgt45wwK-3isPX9MNh9kDJsPd4RLX_Yu",
      "expiresIn": "3600"
    }
  }
}
```

**⏱️ Duration:** 329.4 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/0jKSdQbzoYM7wL4ElL4z6vbT2NC3 (1138.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4ODIxNjQxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDg4MjE2NDEsImV4cCI6MTc0ODgyNTI0MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ES-gzvvJBhW5M-2nmycvmsvuB4kUiL0FJ78X0Gkmije-3TgcZct0uCsLwBnwk-zKk3ag9Nm4FSac7PatmFigy5xgP5cnkzhDjgRfAaBfUtgjeqq1h9Fe3Fu1NC7lByvF0oWVjGIF2cJWgzuOnwQXENZnKI4ahRghzFM2EmrmO8yhBh9t7McOAr4XVssDy5qm7x_9AshW1OeuP1Q-szS-gavdejYcOwpJ6-C8wC0du05ZsQ0mrKjrS_gMeSqgoTTz7wOTp3D-_Re080Cu9Z-a1fy_1xtJ6rEduuaG8s0zFFwTwdlkglnARcrdbGyp0a8qNHgPyhY4ERBn6hfyaMKGyw"
  }
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
    "date": "Sun, 01 Jun 2025 23:47:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "message": "User and associated data deleted successfully"
  }
}
```

**⏱️ Duration:** 1138.9 ms  

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
- Test organization: Test Org for Memberships 1748821591430
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
