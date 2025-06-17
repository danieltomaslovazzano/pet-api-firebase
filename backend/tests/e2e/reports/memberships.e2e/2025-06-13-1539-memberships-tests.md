# E2E Test Report: memberships-tests

**Date:** 6/13/2025  
**Time:** 3:39:45 PM  
**Duration:** 62.57s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully | PASSED | 0.58s | Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully |
| ✅ Memberships E2E Tests Invite User to Organization Should fail to invite same user twice | PASSED | 1.03s | Memberships E2E Tests Invite User to Organization Should fail to invite same user twice |
| ✅ Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions | PASSED | 1.66s | Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions |
| ✅ Memberships E2E Tests Invite User to Organization Should invite user with different roles | PASSED | 10.62s | Memberships E2E Tests Invite User to Organization Should invite user with different roles |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by organization | PASSED | 0.65s | Memberships E2E Tests Get Memberships Admin should get memberships by organization |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by user | PASSED | 0.64s | Memberships E2E Tests Get Memberships Admin should get memberships by user |
| ✅ Memberships E2E Tests Get Memberships User should get their own memberships | PASSED | 0.50s | Memberships E2E Tests Get Memberships User should get their own memberships |
| ✅ Memberships E2E Tests Get Memberships Should fail without userId or organizationId | PASSED | 0.40s | Memberships E2E Tests Get Memberships Should fail without userId or organizationId |
| ✅ Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships | PASSED | 0.46s | Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships |
| ✅ Memberships E2E Tests Get Membership by ID Admin should get membership by ID | PASSED | 0.54s | Memberships E2E Tests Get Membership by ID Admin should get membership by ID |
| ✅ Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID | PASSED | 0.48s | Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID |
| ✅ Memberships E2E Tests Update Member Role Admin should update member role successfully | PASSED | 0.60s | Memberships E2E Tests Update Member Role Admin should update member role successfully |
| ✅ Memberships E2E Tests Update Member Role Should fail with invalid role | PASSED | 0.36s | Memberships E2E Tests Update Member Role Should fail with invalid role |
| ✅ Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions | PASSED | 0.49s | Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions |
| ✅ Memberships E2E Tests Remove Member Admin should remove member successfully | PASSED | 1.12s | Memberships E2E Tests Remove Member Admin should remove member successfully |
| ✅ Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions | PASSED | 2.53s | Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions |
| ✅ Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) | PASSED | 1.07s | Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations | PASSED | 0.44s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations | PASSED | 1.66s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations | PASSED | 1.17s | Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.58s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (571.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "bTaQSd5sVsNvaGp7jGgtr7lsUXE3",
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
    "etag": "W/\"174-z1taquF+EWHYhDeYd7JID3HJW/Q\"",
    "date": "Fri, 13 Jun 2025 13:38:47 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "037011a2-3bbf-470e-b3e8-09210050b75a",
      "userId": "bTaQSd5sVsNvaGp7jGgtr7lsUXE3",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T13:38:47.183Z",
      "updatedAt": "2025-06-13T13:38:47.183Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 571.4 ms  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 1.03s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (1028.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "bTaQSd5sVsNvaGp7jGgtr7lsUXE3",
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
    "date": "Fri, 13 Jun 2025 13:38:48 GMT",
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

**⏱️ Duration:** 1028.2 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1247.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1749821928299@example.com",
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
    "etag": "W/\"631-LPjtTzXLqy9B8RxeLOEeanuTYpM\"",
    "date": "Fri, 13 Jun 2025 13:38:49 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "JrmHvzZ8h3f2GiPR7RaVGO5qZKa2",
        "email": "no-perm-invite-1749821928299@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkyOCwidXNlcl9pZCI6IkpybUh2elo4aDNmMkdpUFI3UmFWR081cVpLYTIiLCJzdWIiOiJKcm1IdnpaOGgzZjJHaVBSN1JhVkdPNXFaS2EyIiwiaWF0IjoxNzQ5ODIxOTI4LCJleHAiOjE3NDk4MjU1MjgsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0OTgyMTkyODI5OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ5ODIxOTI4Mjk5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.W64QkN8-bLOOY5G2-TtP6csqouTP6OpfBjX7E2u9y5jGXHIwW72TxtYqs4vVloJgJhdDixs1y7UoiE0eGgY0X_2y42kHGy46wRfgZM9-RC8CMiRXzvtmFZtJ-6MK0qj-TYqrQI7sxn8zXA5rumlPbod_XhOu7NsEsPjeyDWsdbWano37IgnPZcUZmg03slgXUgCRC7juAOt8-ittm5dQphD3qEs1VSwoauUwRC69QIGCOXdGksqjRw7WE2h39Z4V_Pf6eDYIU49zquDrOnu0ecAGNgqJ4aHG6aFeY_LFmf6MVizSfzG_lBfwDiaBiqZVmc3ptYOzJ_mYWTNpKcnKkw",
        "refreshToken": "AMf-vBwJGlekYeLdeUSC1pGw4cpwedf5nBgZW4_vribTZ-sMx9PfSHcEXLlOLcRukYDhaNjZLuVgVMGFk1jDCRBPvMvB83rgDTVnIuEWYiq7yRQScXSBTpjGiXNPArc0hi3sxbE9LjZrE70vjo7S6_FqqwVBB7Hh88a-NaYPMhx9Hr0v5v1dRHxMaKVIi5gImFuRh3NarfX3vPeHoJxpUyFK06X1Z9YD4DOeRdO8WfT_wO2w87FboYfm-2y-U_d0MtWibZL4N8K1",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1247.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (407.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkyNCwidXNlcl9pZCI6InF3RHhXbHd3UHBZbWtiU3l1MjdoZURseHBJMTMiLCJzdWIiOiJxd0R4V2x3d1BwWW1rYlN5dTI3aGVEbHhwSTEzIiwiaWF0IjoxNzQ5ODIxOTI0LCJleHAiOjE3NDk4MjU1MjQsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMTkyMzIxMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIxOTIzMjExQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.hMTiq1NUcBrz0M1Oz-vSuGKLpP5Hn64ON5-Yi1KsG8vITXd-tHjqY8n6i9I7kynF8JWwcOW17pUpqSWJYjtAzltxh-R85ot9yy2Qidr4sdQGnXmApUVv1FSrJXdz54ggwgudfAdSV_BcqMedG8uUCT5LXxhXbXUtbAhNmTGn3tgELumlUTUVx24ocKaUfnksHsxps41KsuZIfTOpLBKFc7rpi1KgPQEM2cwPObh_2Uc2heUgO8JJDl_kDIaelUqBkcN-TeAZDiWc8DLEQZ7nbPkPGPRHLOB_a_JlCRylXG5CWi4wjiHP-t5vd-VJcwMmt0bcV4IRJWOFndgAPwwS3w"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "JrmHvzZ8h3f2GiPR7RaVGO5qZKa2",
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
    "date": "Fri, 13 Jun 2025 13:38:49 GMT",
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

**⏱️ Duration:** 407.7 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 10.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1301.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1749821929963@example.com",
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
    "etag": "W/\"603-lpqcVVcfggizPrM4fxEMtMcEGIk\"",
    "date": "Fri, 13 Jun 2025 13:38:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "yfiwcL7IQueGIaSDCbTvHM6OFcR2",
        "email": "admin-user-1749821929963@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkzMCwidXNlcl9pZCI6InlmaXdjTDdJUXVlR0lhU0RDYlR2SE02T0ZjUjIiLCJzdWIiOiJ5Zml3Y0w3SVF1ZUdJYVNEQ2JUdkhNNk9GY1IyIiwiaWF0IjoxNzQ5ODIxOTMwLCJleHAiOjE3NDk4MjU1MzAsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ5ODIxOTI5OTYzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0OTgyMTkyOTk2M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lm2HvquYPErE7uTqEk2R_OGbZtYlsbNBsihQ5d7-P4BoaHC0L0MnlIyz5bDtzRYr1F7UZVfyxh8hRpBPaH9xAuQ4skGInGx4gOo75uRJJryAPGOTBhI0e5ipcB-vi3uCp9odbx0KPTOhdLWAMaLTqqp6AyKKkhyqPbI7NbDq6aE4qR-yfub_bGv-0VLoG7g4KagcxSu7TNq_txm0aHnWqtNry27HSjNLFpTk_psCerFXjzIRS7hPJ10La3oFrwz6c_OmZAhsai9_7SaBX3tx3zPer9kH0ZZivIccno4XQPyRqA3NG2yld5NNb6NBlEC0Xk43B5Xq29sMe5h81ntf0g",
        "refreshToken": "AMf-vBxHf3VM7Mg0OGzaoQV_3_cabO86c5O6mWdRywHEIHM-SXuU4yClANG2MG8JYu-L4RFojz4wpN3zxgvJPBjbu-hBLdSr66lpyMrR0lPb7rsoPFI2INwxGUgmCE7u8VNpJ8oivTzqhRrLVAxU-bnZ2ikI3WyTGU0vYFKsskDNz-6hzEifzhw7VLjWkq1b6AJ_lXonOiTnLTmPpaMYaoupC8j-KN8LBNzJyLI1it-sBIKIbM4C7Ys",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1301.4 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (631.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "yfiwcL7IQueGIaSDCbTvHM6OFcR2",
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
    "etag": "W/\"173-0OVON0Ew2kUSFwU8/y5yzzh/F/4\"",
    "date": "Fri, 13 Jun 2025 13:38:51 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "784cd6c8-06f9-430e-8144-6eeee649a6e9",
      "userId": "yfiwcL7IQueGIaSDCbTvHM6OFcR2",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-13T13:38:51.828Z",
      "updatedAt": "2025-06-13T13:38:51.828Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 631.0 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1442.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1749821931895@example.com",
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
    "etag": "W/\"60d-+yWvk2XQ5GFUmFnQ8/sZwzdC7Q8\"",
    "date": "Fri, 13 Jun 2025 13:38:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "YH2Wp0bYXEWYa1XJ8FdgjGEBhla2",
        "email": "manager-user-1749821931895@example.com",
        "name": "Manager User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkzMiwidXNlcl9pZCI6IllIMldwMGJZWEVXWWExWEo4RmRnakdFQmhsYTIiLCJzdWIiOiJZSDJXcDBiWVhFV1lhMVhKOEZkZ2pHRUJobGEyIiwiaWF0IjoxNzQ5ODIxOTMyLCJleHAiOjE3NDk4MjU1MzIsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDk4MjE5MzE4OTVAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDk4MjE5MzE4OTVAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.YqBtDNUUjzaPSoRfwIlw8sbfFHHM1EJUDBDvEvKWN1RQ74aBw3TbRoxdu1eQ8HvibnDjpYRT2IVwDH5oHi_xF484Ogt95Tsmt0NVhdm2v3PD9-stm124afJoJU73lK9amlBJSaZ55RjDOUoclDGL54JCvsbJQd4nvZtWldFCwkohnK-aWMI2XFf-2ZcIUSL3egdBwZmtgG5iMqpMsYA0RnWdgtaV78xLzuJkVanJZtAKLvgFkXNJFk-Zu8MYY-zvG1TP3u2kHdz_DBmwRmlFFEDKluIV6t7e9fBfvQ9OBs_1U1ZxNbUTOLLDmEjbnkAMD4ehF5bvyGbUxpi8u1d-oA",
        "refreshToken": "AMf-vByAWdaqZmFAA5j9wMLdZfKfRQ06qynC7y6qCIf24RuRqim2Vd6PfatEbtDhNqiD6XKrG44nG-Ncr0dEBnSy5O_F2g3PXZcnLQYyeii1mRg5Mxoc3yEaFPBezHBbcKen2Ht6MLT_aIJsDhh1rHikvAtNyam1XmHYbbrPaB1zIVjvu-SW-48kdF_UjxBRVFhxGvrKHjF3sAgBnR7oBP8rDrcjZwKZmsLc90EX-QMk2xbA7i3aaJU",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1442.8 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (610.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "YH2Wp0bYXEWYa1XJ8FdgjGEBhla2",
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
    "etag": "W/\"175-aqcBeC2bmwL5kdmX46/i/CATX/g\"",
    "date": "Fri, 13 Jun 2025 13:38:53 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "ada68599-c91a-4ffe-b8ed-25fd2e3895cc",
      "userId": "YH2Wp0bYXEWYa1XJ8FdgjGEBhla2",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T13:38:53.878Z",
      "updatedAt": "2025-06-13T13:38:53.878Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 610.4 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1460.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1749821933949@example.com",
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
    "etag": "W/\"62b-eNMIH/OF6aCMwE1PJYl2Usgb4gs\"",
    "date": "Fri, 13 Jun 2025 13:38:55 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "nHxQGDC3xQdOsHWaTdtkATpWz6S2",
        "email": "moderator-user-1749821933949@example.com",
        "name": "Moderator User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkzNCwidXNlcl9pZCI6Im5IeFFHREMzeFFkT3NIV2FUZHRrQVRwV3o2UzIiLCJzdWIiOiJuSHhRR0RDM3hRZE9zSFdhVGR0a0FUcFd6NlMyIiwiaWF0IjoxNzQ5ODIxOTM0LCJleHAiOjE3NDk4MjU1MzQsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0OTgyMTkzMzk0OUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ5ODIxOTMzOTQ5QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.O2TTXxCgKEwpJo1zaZUfh8LMJ4T5DDd7c9P81alx1r2Z1ULp4eFR2vQNQocMCMvm2b0JMWVIGvr-MEqfQyANAsJWswukw-NyKgj6JJSyg3EpSi1VH9C2lanY6LnQFoi5yu9WHp1Nounl5JP1BSUmUHTIpvdr2AM9buigq5uLV6ZeORYQ02Kku-sxq-ndNqHxawwgsD6CyxBOAsz8N4tHQAs3S3ZaySWtPizVuuokQUWU_yAtaeZhWKOSg-kuJ3bRP76FIaoJQqTME3U92YQZYQfxk0_NgO2kjsXTnNsTRSBrTGEjVkeXUUKBh3NPo9oD62Ve8xDvWKEaqzLNCkIT4Q",
        "refreshToken": "AMf-vBwdGWpZqNYGOKhDl_0CB_jHK3bKBpci4UbX745i2J6cw9E3l-CyKg6FwyrWl4LyhK-ZAVb7GmkE3KEwUiBaod8_5t9yRt_sI9lhF2VadHUPGIpzU8mKPXQgajHZcBnHYPOaaQMkILNBkeXXJNkMvnPaOTiFkZPkFzezSND4LUV8M0R5Cptdy-qjw1uvhc2inEE1ixJ0rVMGO-JAXeHj34y0k1CS68kas93QA3KbXoVmPf7GXKq8QIjLURuVy-a5NsnarLuk",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1460.3 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (625.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "nHxQGDC3xQdOsHWaTdtkATpWz6S2",
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
    "etag": "W/\"177-zQ+faXrzgUrqlEPBFEtlFxBMKBs\"",
    "date": "Fri, 13 Jun 2025 13:38:56 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "1c53a7e0-eac1-4e34-b559-197dfb7db475",
      "userId": "nHxQGDC3xQdOsHWaTdtkATpWz6S2",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-13T13:38:55.971Z",
      "updatedAt": "2025-06-13T13:38:55.971Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 625.9 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1149.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1749821936035@example.com",
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
    "etag": "W/\"62b-1EhJ/BZ3bB+zVEHGe8/DpsNwn8c\"",
    "date": "Fri, 13 Jun 2025 13:38:57 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "u3nipRGaY4cl850mMnsZjnK0tqh2",
        "email": "volunteer-user-1749821936035@example.com",
        "name": "Volunteer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkzNiwidXNlcl9pZCI6InUzbmlwUkdhWTRjbDg1MG1NbnNaam5LMHRxaDIiLCJzdWIiOiJ1M25pcFJHYVk0Y2w4NTBtTW5zWmpuSzB0cWgyIiwiaWF0IjoxNzQ5ODIxOTM2LCJleHAiOjE3NDk4MjU1MzYsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0OTgyMTkzNjAzNUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ5ODIxOTM2MDM1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.dqhVpCbTdHnimfu4ncPKyDeRjr8KRbcilseOTpjIF5evc4wPokho38ffsqCDhGUm9jWstBK1SpWmQOeBH1o_q8LnZqulM2m8vbUhghXCk0MdaFUYI8HDVCrIpLe45tbAFbXsv5TpcbR_V0lxWgEKhbelwXYVtUiHAyo2OOzkEnVfLMZcgBS_vUx1irZTXpZOqOs-GsAC_3VY0PM-QfOosbXqj1JnGOGweQUEeD3GgARH3WCZmGkOgJFo3v7MppOUnkBKMVRwjSFwIeOSH7HHFokpr5lBYvi74gQ_Grz5-T4tt_GxhXSM9P6OdEF-s4UcqYlBqiVEiX-SnK87IjTi4g",
        "refreshToken": "AMf-vBwN-V9mAerkv8eW_3pm4WIth4QAOWR5M42SDCyDIUwwYfv-HaqgWTpS4nj8t4OFmyUgOOA9hno_Dy-V9IKV_vGhwL0g9pCIiklHy6rg-koBqOGacZ7RS56z3UvPXipXZ0fST5FA36QaA__Wn3kkAbYE9EypfIDHpDFMS1eaihQNlvmGHbEJR-yCq3RkeAhBuG9wVHNwK0eJFARLYgy4Q5o_4HL7Ctdjsk6VPL58GxZPtmed09aFzcrux0PdDal7UalL82e3",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1149.9 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (1062.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "u3nipRGaY4cl850mMnsZjnK0tqh2",
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
    "etag": "W/\"177-JTdRHW47dqSY4zhAGBfk5RvzUR8\"",
    "date": "Fri, 13 Jun 2025 13:38:58 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "bd2d7ef1-c9a0-4578-8bb7-418f018cbd13",
      "userId": "u3nipRGaY4cl850mMnsZjnK0tqh2",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T13:38:58.184Z",
      "updatedAt": "2025-06-13T13:38:58.184Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1062.8 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1646.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1749821938250@example.com",
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
    "etag": "W/\"611-EjqEEN07xciSf8P2BBh1yKN9Mc4\"",
    "date": "Fri, 13 Jun 2025 13:38:59 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "9RySwYRSFbPnonTAsz8YhK0TxYd2",
        "email": "observer-user-1749821938250@example.com",
        "name": "Observer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkzOCwidXNlcl9pZCI6IjlSeVN3WVJTRmJQbm9uVEFzejhZaEswVHhZZDIiLCJzdWIiOiI5UnlTd1lSU0ZiUG5vblRBc3o4WWhLMFR4WWQyIiwiaWF0IjoxNzQ5ODIxOTM4LCJleHAiOjE3NDk4MjU1MzgsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ5ODIxOTM4MjUwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0OTgyMTkzODI1MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HrdJMwLapubwe8yhjpiUR0sQ9xV6LELZpPiL4BRcn_MXqSsm5IQAlWOfre8DhEJRWZUhvvd5vZoEtz4plyij9fkgDznqXekURIg57INzw8UIGeEJBKryuoZyX3-tzKZLUa1PlO3JTUYO4o4unJIvw3vEp-aJdNDqaqoiJHXZ9nT2Q7bRgOGizY63GXt5ynQkkEieu2Iw8v4GkmhXsK3J_YelyR_EY0kfIzK8Etckmm2bF6J2iaIoU4juwed2-1rY3cP0JbTQ4R2UJ_lsgoSF_d6W_CNvXJMFKFt6jtQ7fzdrk4n-XFb6DLZBh9qRzSJlBwSNefDY2CTLAjO6LS2QbQ",
        "refreshToken": "AMf-vBzAtwTxMg0WNX0rwacTy9HtzA-GIy432gq-3xqpmFBh7qNehWXzv4t84WmqXvCcWZj_H-trE9Wp-VA9J3KpcT6CGJ9B_JqKeY9ETu1jk8MnEsO0ytU1Br1d-_iJS-GPmv0T_f48tOwB5B-c-pJeusAZQ-52gh1aCRaahSDlkxYqqfXsIsplduPssJiPKygMc4-Pe_PSWJU4caqxa6uUM4cIucEHc0W7uimXQ5CNyM3JlTURC_w",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1646.9 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (685.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "9RySwYRSFbPnonTAsz8YhK0TxYd2",
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
    "etag": "W/\"176-WFOIqRsLCeqWkbLO/IZ1s2Kkl6k\"",
    "date": "Fri, 13 Jun 2025 13:39:00 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "a2381e1f-6eac-488d-aebc-2edf0f64dc2b",
      "userId": "9RySwYRSFbPnonTAsz8YhK0TxYd2",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-13T13:39:00.518Z",
      "updatedAt": "2025-06-13T13:39:00.518Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 685.3 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.65s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5d554e5a-2a74-4971-935e-9dd1b3dfebb0 (641.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "etag": "W/\"625-x2G/dFG1wsS2Cy/PwZ54f96fGkk\"",
    "date": "Fri, 13 Jun 2025 13:39:01 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "037011a2-3bbf-470e-b3e8-09210050b75a",
        "userId": "bTaQSd5sVsNvaGp7jGgtr7lsUXE3",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-13T13:38:47.183Z",
        "updatedAt": "2025-06-13T13:38:47.183Z"
      },
      {
        "id": "784cd6c8-06f9-430e-8144-6eeee649a6e9",
        "userId": "yfiwcL7IQueGIaSDCbTvHM6OFcR2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T13:38:51.828Z",
        "updatedAt": "2025-06-13T13:38:51.828Z"
      },
      {
        "id": "ada68599-c91a-4ffe-b8ed-25fd2e3895cc",
        "userId": "YH2Wp0bYXEWYa1XJ8FdgjGEBhla2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T13:38:53.878Z",
        "updatedAt": "2025-06-13T13:38:53.878Z"
      },
      {
        "id": "1c53a7e0-eac1-4e34-b559-197dfb7db475",
        "userId": "nHxQGDC3xQdOsHWaTdtkATpWz6S2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T13:38:55.971Z",
        "updatedAt": "2025-06-13T13:38:55.971Z"
      },
      {
        "id": "bd2d7ef1-c9a0-4578-8bb7-418f018cbd13",
        "userId": "u3nipRGaY4cl850mMnsZjnK0tqh2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T13:38:58.184Z",
        "updatedAt": "2025-06-13T13:38:58.184Z"
      },
      {
        "id": "a2381e1f-6eac-488d-aebc-2edf0f64dc2b",
        "userId": "9RySwYRSFbPnonTAsz8YhK0TxYd2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T13:39:00.518Z",
        "updatedAt": "2025-06-13T13:39:00.518Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 641.3 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 0.64s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (641.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:01 GMT",
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

**⏱️ Duration:** 641.5 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.50s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=qwDxWlwwPpYmkbSyu27heDlxpI13 (494.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkyNCwidXNlcl9pZCI6InF3RHhXbHd3UHBZbWtiU3l1MjdoZURseHBJMTMiLCJzdWIiOiJxd0R4V2x3d1BwWW1rYlN5dTI3aGVEbHhwSTEzIiwiaWF0IjoxNzQ5ODIxOTI0LCJleHAiOjE3NDk4MjU1MjQsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMTkyMzIxMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIxOTIzMjExQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.hMTiq1NUcBrz0M1Oz-vSuGKLpP5Hn64ON5-Yi1KsG8vITXd-tHjqY8n6i9I7kynF8JWwcOW17pUpqSWJYjtAzltxh-R85ot9yy2Qidr4sdQGnXmApUVv1FSrJXdz54ggwgudfAdSV_BcqMedG8uUCT5LXxhXbXUtbAhNmTGn3tgELumlUTUVx24ocKaUfnksHsxps41KsuZIfTOpLBKFc7rpi1KgPQEM2cwPObh_2Uc2heUgO8JJDl_kDIaelUqBkcN-TeAZDiWc8DLEQZ7nbPkPGPRHLOB_a_JlCRylXG5CWi4wjiHP-t5vd-VJcwMmt0bcV4IRJWOFndgAPwwS3w"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:02 GMT",
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

**⏱️ Duration:** 494.3 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.40s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (394.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
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
    "date": "Fri, 13 Jun 2025 13:39:02 GMT",
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

**⏱️ Duration:** 394.3 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (456.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkyNCwidXNlcl9pZCI6InF3RHhXbHd3UHBZbWtiU3l1MjdoZURseHBJMTMiLCJzdWIiOiJxd0R4V2x3d1BwWW1rYlN5dTI3aGVEbHhwSTEzIiwiaWF0IjoxNzQ5ODIxOTI0LCJleHAiOjE3NDk4MjU1MjQsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMTkyMzIxMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIxOTIzMjExQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.hMTiq1NUcBrz0M1Oz-vSuGKLpP5Hn64ON5-Yi1KsG8vITXd-tHjqY8n6i9I7kynF8JWwcOW17pUpqSWJYjtAzltxh-R85ot9yy2Qidr4sdQGnXmApUVv1FSrJXdz54ggwgudfAdSV_BcqMedG8uUCT5LXxhXbXUtbAhNmTGn3tgELumlUTUVx24ocKaUfnksHsxps41KsuZIfTOpLBKFc7rpi1KgPQEM2cwPObh_2Uc2heUgO8JJDl_kDIaelUqBkcN-TeAZDiWc8DLEQZ7nbPkPGPRHLOB_a_JlCRylXG5CWi4wjiHP-t5vd-VJcwMmt0bcV4IRJWOFndgAPwwS3w"
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
    "date": "Fri, 13 Jun 2025 13:39:03 GMT",
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

**⏱️ Duration:** 456.6 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/037011a2-3bbf-470e-b3e8-09210050b75a (531.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "etag": "W/\"125-0XIMZG02Hn95lzfzusDmcHllNqA\"",
    "date": "Fri, 13 Jun 2025 13:39:03 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "037011a2-3bbf-470e-b3e8-09210050b75a",
      "userId": "bTaQSd5sVsNvaGp7jGgtr7lsUXE3",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T13:38:47.183Z",
      "updatedAt": "2025-06-13T13:38:47.183Z"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 531.9 ms  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.48s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (481.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
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
    "date": "Fri, 13 Jun 2025 13:39:04 GMT",
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

**⏱️ Duration:** 481.7 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Update Member Role Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.60s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/037011a2-3bbf-470e-b3e8-09210050b75a (596.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
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
    "etag": "W/\"179-ZRMWsx6godTuHnj7pFeQdLjLDKA\"",
    "date": "Fri, 13 Jun 2025 13:39:04 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member role updated to manager",
    "data": {
      "id": "037011a2-3bbf-470e-b3e8-09210050b75a",
      "userId": "bTaQSd5sVsNvaGp7jGgtr7lsUXE3",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T13:38:47.183Z",
      "updatedAt": "2025-06-13T13:39:04.757Z"
    },
    "messageKey": "memberships.role_updated",
    "language": "en"
  }
}
```

**⏱️ Duration:** 596.2 ms  

</details>


---

### Test: Memberships E2E Tests Update Member Role Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.36s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/037011a2-3bbf-470e-b3e8-09210050b75a (360.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
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
    "date": "Fri, 13 Jun 2025 13:39:05 GMT",
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

**⏱️ Duration:** 360.7 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/037011a2-3bbf-470e-b3e8-09210050b75a (492.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkyNCwidXNlcl9pZCI6InF3RHhXbHd3UHBZbWtiU3l1MjdoZURseHBJMTMiLCJzdWIiOiJxd0R4V2x3d1BwWW1rYlN5dTI3aGVEbHhwSTEzIiwiaWF0IjoxNzQ5ODIxOTI0LCJleHAiOjE3NDk4MjU1MjQsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMTkyMzIxMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIxOTIzMjExQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.hMTiq1NUcBrz0M1Oz-vSuGKLpP5Hn64ON5-Yi1KsG8vITXd-tHjqY8n6i9I7kynF8JWwcOW17pUpqSWJYjtAzltxh-R85ot9yy2Qidr4sdQGnXmApUVv1FSrJXdz54ggwgudfAdSV_BcqMedG8uUCT5LXxhXbXUtbAhNmTGn3tgELumlUTUVx24ocKaUfnksHsxps41KsuZIfTOpLBKFc7rpi1KgPQEM2cwPObh_2Uc2heUgO8JJDl_kDIaelUqBkcN-TeAZDiWc8DLEQZ7nbPkPGPRHLOB_a_JlCRylXG5CWi4wjiHP-t5vd-VJcwMmt0bcV4IRJWOFndgAPwwS3w"
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
    "date": "Fri, 13 Jun 2025 13:39:05 GMT",
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

**⏱️ Duration:** 492.6 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (1209.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1749821945747@example.com",
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
    "etag": "W/\"60d-zUCdB/XeVrlB+4aKgKmdxvz7fPg\"",
    "date": "Fri, 13 Jun 2025 13:39:06 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "JhDuIZUCmMXmsFbTJDLzKlQ5w8F2",
        "email": "remove-user-1749821945747@example.com",
        "name": "User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk0NiwidXNlcl9pZCI6IkpoRHVJWlVDbU1YbXNGYlRKREx6S2xRNXc4RjIiLCJzdWIiOiJKaER1SVpVQ21NWG1zRmJUSkRMektsUTV3OEYyIiwiaWF0IjoxNzQ5ODIxOTQ2LCJleHAiOjE3NDk4MjU1NDYsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0OTgyMTk0NTc0N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ5ODIxOTQ1NzQ3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.iuVx7kpXDPYFtfOwBvyIoi9cOJOtzEz4yF_u2KrhwhZkQyRTFtHrkdWrkxBhAjo2cc85kDmBfSjjcpNcIrb6xihzF4p95xjNc_ObQ0oMK-_M9w8T5B_TryTLCqaRimt_mHxICN_OnHTtD3qibUqHf509vRSjYcKIw1qaMH9ro-qROJSk6lyWWTqDUrJ4R96Xhr6_ZVs8-i3n3uJVTtu7riNg9eUqF69a_Ayg0jzWmmeKoVeyN6H4qrWfV1ifKmPMVZ9UTQvkflqaxpV4ZExgXazivUVHoN1WnvKbPyt7PQNopxaGPx_gd4y3SCH9f8bNdOXdP32Vzq4huoaJUxYmSw",
        "refreshToken": "AMf-vByBoyI5ZsraVKry4HEC2OPsyDMojP4TG219w9omqJLYeAhayThcUSa7L-7ebmfO7rAi5tk58kvvY3h5t8TwzXCd6SIFho0-k_6spMVJtDY4Zvoxu0J-4EHFe__1m6qAOLz_NZFLcykf6evzIpLT2l8Mmp6bgTpyNDtiy4WTLXrMtYXJ0MeEDgLrKraNcwEcpi2tKg0VrsWgsU0PA1k8P8N4ztI74xgKSN2x6SDbXX7VQyN-z_w",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1209.4 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (1048.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "JhDuIZUCmMXmsFbTJDLzKlQ5w8F2",
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
    "etag": "W/\"177-lB9yoyq/3ah84G1pL/OUaOandnw\"",
    "date": "Fri, 13 Jun 2025 13:39:08 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "c0dc7c88-7216-47bb-bfbb-7d3b4fcee28a",
      "userId": "JhDuIZUCmMXmsFbTJDLzKlQ5w8F2",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T13:39:07.938Z",
      "updatedAt": "2025-06-13T13:39:07.938Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1048.3 ms  

</details>


---

### Test: Memberships E2E Tests Remove Member Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.12s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/c0dc7c88-7216-47bb-bfbb-7d3b4fcee28a (696.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:08 GMT",
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

**⏱️ Duration:** 696.5 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/c0dc7c88-7216-47bb-bfbb-7d3b4fcee28a (421.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
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
    "date": "Fri, 13 Jun 2025 13:39:09 GMT",
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

**⏱️ Duration:** 421.4 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.53s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1306.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1749821949132@example.com",
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
    "etag": "W/\"647-cn9j5Q8XUV0GoI+8qGG9IAOiBsQ\"",
    "date": "Fri, 13 Jun 2025 13:39:10 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "OtovpqojayV2PBkpOCkzf1C9zAo1",
        "email": "another-remove-user-1749821949132@example.com",
        "name": "Another User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk0OSwidXNlcl9pZCI6Ik90b3ZwcW9qYXlWMlBCa3BPQ2t6ZjFDOXpBbzEiLCJzdWIiOiJPdG92cHFvamF5VjJQQmtwT0NremYxQzl6QW8xIiwiaWF0IjoxNzQ5ODIxOTQ5LCJleHAiOjE3NDk4MjU1NDksImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ5ODIxOTQ5MTMyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0OTgyMTk0OTEzMkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g44U0Sxgk3g0yIN6q3z_8a7y-ojhwbI3D1JuNAQNR45ByUW8hrBYhbR4PIE18Wi3Kg70krpFEdyQO816d6z2nFANsWgW3ieGJXtz_OxN0izyj32MPnlcHuc84PeSGwR22NEteMvP9tQq4IiiGByFvUX1FxGvIEVeLnP1L-rRf5K9xuyyGkYlHcW2ktyRTyG5H7SfmPXXPz_lC3YWRdlyrEryDrc82aS8OLEi_VoLBgpqEsiLzhX-MMPDlTmwu251EO-_b1nJxkEHdnL3Dig0z4nDEonoqHjVSUvGdzHRxL5bL2SGUvml1tnLrXNAdlmckdq71qTHN6hPgoKSvIGZuw",
        "refreshToken": "AMf-vByE_XMKfAtqifOxDMlueFQYTET0pY7hffNP-lSE-M5GPM4_ahYOsauWy1HMYkoynNta8pAPqWC5x8CUf7484dX3s8aCkjIpQh8JTHKqpZxNmh5ula6iJnCecxk4iNI3wrmSF0b8tENMypLeh3VVu4AZvzVYGmxmhL2p2B2-5vylV2gNTfrQi6nm2Z3GyrVcMEC7eO0rYIHSL6P6oReOVsKtNlQdoa3Tuv0cb-hgFaDjv5oueJNthyiXSLBRsDD-d_sB9RcF",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1306.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (684.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "OtovpqojayV2PBkpOCkzf1C9zAo1",
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
    "etag": "W/\"177-hSXnqjN7l11h8i9QK+9N1owSWas\"",
    "date": "Fri, 13 Jun 2025 13:39:11 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "f7ab27e1-b1d9-4e11-b3c3-47794ecaf2e4",
      "userId": "OtovpqojayV2PBkpOCkzf1C9zAo1",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T13:39:11.059Z",
      "updatedAt": "2025-06-13T13:39:11.059Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 684.7 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/f7ab27e1-b1d9-4e11-b3c3-47794ecaf2e4 (534.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTkyNCwidXNlcl9pZCI6InF3RHhXbHd3UHBZbWtiU3l1MjdoZURseHBJMTMiLCJzdWIiOiJxd0R4V2x3d1BwWW1rYlN5dTI3aGVEbHhwSTEzIiwiaWF0IjoxNzQ5ODIxOTI0LCJleHAiOjE3NDk4MjU1MjQsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyMTkyMzIxMUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODIxOTIzMjExQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.hMTiq1NUcBrz0M1Oz-vSuGKLpP5Hn64ON5-Yi1KsG8vITXd-tHjqY8n6i9I7kynF8JWwcOW17pUpqSWJYjtAzltxh-R85ot9yy2Qidr4sdQGnXmApUVv1FSrJXdz54ggwgudfAdSV_BcqMedG8uUCT5LXxhXbXUtbAhNmTGn3tgELumlUTUVx24ocKaUfnksHsxps41KsuZIfTOpLBKFc7rpi1KgPQEM2cwPObh_2Uc2heUgO8JJDl_kDIaelUqBkcN-TeAZDiWc8DLEQZ7nbPkPGPRHLOB_a_JlCRylXG5CWi4wjiHP-t5vd-VJcwMmt0bcV4IRJWOFndgAPwwS3w"
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
    "date": "Fri, 13 Jun 2025 13:39:11 GMT",
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

**⏱️ Duration:** 534.6 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (1229.4ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749821951668@example.com",
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
    "etag": "W/\"630-bBdTOxs25GAxydj9Ltc1ZXzk1O8\"",
    "date": "Fri, 13 Jun 2025 13:39:12 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "sLD3co8Z9oSa6zSeFuyUN6qNsHf2",
        "email": "self-leave-user-1749821951668@example.com",
        "name": "Self Leave User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1MiwidXNlcl9pZCI6InNMRDNjbzhaOW9TYTZ6U2VGdXlVTjZxTnNIZjIiLCJzdWIiOiJzTEQzY284WjlvU2E2elNlRnV5VU42cU5zSGYyIiwiaWF0IjoxNzQ5ODIxOTUyLCJleHAiOjE3NDk4MjU1NTIsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjE5NTE2NjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjE5NTE2NjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Ko3PwrGbKyYSrIhS64xUwjii1B4i3rbTeK8pSAnoNwIpjrew5NF6FDMQOoG2RLBJ6aTkW7A0FoeGppOZ8dMaGuvzh9EQxS82LF1zDjV2hsfbxQ9ZNOmoT0lQ4n3q-zr2cTp-dy-wKimkMkJzQX2KBys4coQghzlpR3rb4z-lyxAz94TYiJLWzaTEUH-gCn0oGNq9MrjT5yBztLklerXOygQ1yfJ-A-0pfMXYjrQkiim1KGXhwlv20_cU7bTt2QhIGkfQ6KBZopvaEjjM41z8TVZiTj6NGoHCRXczNzm5h5l6tHO-K4zYgLAflkaJNK7zNi_rd5nZG9ExlDPsESvXow",
        "refreshToken": "AMf-vBx52--8tF24Z503zjHOLehyve0fznq2_A9ocVpl48Wtcm-2U8uOYGvbFZQD5rPkobOY4SjwGvuhV_4ftAgI_RSIuTpCSQZJgcNiQG7OUlj5gyt9lRXKJKv49xs_tIy26w9wNGVBejqGezfVzdpkd7SkOfcg6jmAqP5NCV4ikx8xekx4oIG2VjopypNykgRZ_RBio5pLqkPsI1_g0d2Pgj11k-mG6B8-tfOZTpFKsoTEzL5pxo3duh2SkQUUksQIGztmhRlS",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1229.4 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (237.9ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749821951668@example.com",
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
    "etag": "W/\"614-EaBxrQroRYt0vx6p6zGPAH5m7Jg\"",
    "date": "Fri, 13 Jun 2025 13:39:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "sLD3co8Z9oSa6zSeFuyUN6qNsHf2",
        "email": "self-leave-user-1749821951668@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1MywidXNlcl9pZCI6InNMRDNjbzhaOW9TYTZ6U2VGdXlVTjZxTnNIZjIiLCJzdWIiOiJzTEQzY284WjlvU2E2elNlRnV5VU42cU5zSGYyIiwiaWF0IjoxNzQ5ODIxOTUzLCJleHAiOjE3NDk4MjU1NTMsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjE5NTE2NjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjE5NTE2NjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.FTHEtZr6gVFx5wUVEdf_PCfJm32PBMrgFkIFapeYHqWdhiPJExWRxCWrqk8LBW_iBVcRZoHrgVza3w7SXB04j22Vdg-ony9oGthfqfYBFX5aj3RcDCl68-YzyXgxMw3JBzppNYvJ14sWCgLpJnZclgc7OT28lMaG76ZdpBOVPA0XSSXyqUBflmjrBZEQPH0OAUZ8juAQTLXFVoetxy2xUluvjKMxXM6NB3bYCnRZgEkRyIaaFKvwZui_toeCca9S8G85pcON6P49pamaZaq294oufZ2SHIS2zzwxJRg_4OrNYapJR87Nf0qNpkSLoX93BrNUsO2PdIAPza1EoD2uaQ",
        "refreshToken": "AMf-vBz3W6FMoH4KBblh2YnkD33T04TQyq7kYw0YinrIyZVgAZbyoVKNHHYia5BQ13VG_oDufzPguNrRe2sYcZjZnbLfyNOO-wFXsne1VBzEYo7fb7nQRghBWuhXkT-Nk2j6VHsWS9MF4m8XMnZbN7lejM_own4FHnEzLM5ShnyVN_-2UHchpwrFooKkIMSEMg01Lr0Wu22nVBFGlXB-lI4aaQOWdtu0f368gFU7wDI6yvwIE9u7jOO4PkqQsqXzjC8zT6Zzs5Iy",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 237.9 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (616.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "sLD3co8Z9oSa6zSeFuyUN6qNsHf2",
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
    "etag": "W/\"174-oFy1q5b9TrlnVrU4skwrTGfsEsw\"",
    "date": "Fri, 13 Jun 2025 13:39:13 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "55b97dbc-3ec1-4269-9a20-98782f79acfc",
      "userId": "sLD3co8Z9oSa6zSeFuyUN6qNsHf2",
      "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T13:39:13.685Z",
      "updatedAt": "2025-06-13T13:39:13.685Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 616.4 ms  

</details>


---

### Test: Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.07s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/55b97dbc-3ec1-4269-9a20-98782f79acfc (537.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1MywidXNlcl9pZCI6InNMRDNjbzhaOW9TYTZ6U2VGdXlVTjZxTnNIZjIiLCJzdWIiOiJzTEQzY284WjlvU2E2elNlRnV5VU42cU5zSGYyIiwiaWF0IjoxNzQ5ODIxOTUzLCJleHAiOjE3NDk4MjU1NTMsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjE5NTE2NjhAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjE5NTE2NjhAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.FTHEtZr6gVFx5wUVEdf_PCfJm32PBMrgFkIFapeYHqWdhiPJExWRxCWrqk8LBW_iBVcRZoHrgVza3w7SXB04j22Vdg-ony9oGthfqfYBFX5aj3RcDCl68-YzyXgxMw3JBzppNYvJ14sWCgLpJnZclgc7OT28lMaG76ZdpBOVPA0XSSXyqUBflmjrBZEQPH0OAUZ8juAQTLXFVoetxy2xUluvjKMxXM6NB3bYCnRZgEkRyIaaFKvwZui_toeCca9S8G85pcON6P49pamaZaq294oufZ2SHIS2zzwxJRg_4OrNYapJR87Nf0qNpkSLoX93BrNUsO2PdIAPza1EoD2uaQ"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:14 GMT",
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

**⏱️ Duration:** 537.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/55b97dbc-3ec1-4269-9a20-98782f79acfc (533.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
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
    "date": "Fri, 13 Jun 2025 13:39:14 GMT",
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

**⏱️ Duration:** 533.1 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1003.3ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749821954830@example.com",
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
    "etag": "W/\"630-c5yMoynBt+QxtpXNBKxESKUU4gw\"",
    "date": "Fri, 13 Jun 2025 13:39:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "fMoKm9n37lSMMKovTd6kSPCWNjQ2",
        "email": "other-org-admin-1749821954830@example.com",
        "name": "Other Org Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1NSwidXNlcl9pZCI6ImZNb0ttOW4zN2xTTU1Lb3ZUZDZrU1BDV05qUTIiLCJzdWIiOiJmTW9LbTluMzdsU01NS292VGQ2a1NQQ1dOalEyIiwiaWF0IjoxNzQ5ODIxOTU1LCJleHAiOjE3NDk4MjU1NTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XRVlKHa-Fu5cffKXZdGxsTb5QWdFsjnxVEPGAL_JYSNUIlSybuNnqO_B70SfyHE0RXewpoaBP6fXO8Bw7Vi0z1amhVNiOKjnt4vxOY0jwwy5I0C_TvOZQfZDPnyIgVg0NzFqdDKlMBPcyWrNh6dpxP5aF5VYyL31TIS_kehgsrCgsk9Pv69-NX0-3ksADhT0GKI7F40kWgIpNjzGxnhJJ6nD-QFDU0tpEPW1XeVsvTn_0E0G6892hbumWvY5iObbBgSdDURbV3WyUOmkadUAK3NYZRRtPStaEMIrf8GWRzlWMu8vLdPYD6yvXfBJVyTOww1c-g2j49DXwwImR4j-Rw",
        "refreshToken": "AMf-vBw5qGd-w-FxXOCH3pJjg6WCvjLcjQxiWgGBD4oCYSpMo69z0KPLPYFISXbOSI-bDY2FG_kyeSj938h8XAgc7F9OBN3moYiaFGm4i6y75gvNnftqN4sSlJ5nNGPg7Ko9UlIgkzfS_reneUe1kwpIHsXQIdJhn0fJoNx-8kN91YJQ9HA47G1Rh4S-HZ4oXAnhBHQONaFGN4Vfg6qnOTUmbZNQ1GTRx_AwrQLGTUhwQ67fWpddvPNHUYWOtChExH7IKOzBwJyJ",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1003.3 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (255.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749821954830@example.com",
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
    "etag": "W/\"614-VMRzpjtrbytE4rRx7BOO9vg6OlM\"",
    "date": "Fri, 13 Jun 2025 13:39:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "fMoKm9n37lSMMKovTd6kSPCWNjQ2",
        "email": "other-org-admin-1749821954830@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1NSwidXNlcl9pZCI6ImZNb0ttOW4zN2xTTU1Lb3ZUZDZrU1BDV05qUTIiLCJzdWIiOiJmTW9LbTluMzdsU01NS292VGQ2a1NQQ1dOalEyIiwiaWF0IjoxNzQ5ODIxOTU1LCJleHAiOjE3NDk4MjU1NTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XRVlKHa-Fu5cffKXZdGxsTb5QWdFsjnxVEPGAL_JYSNUIlSybuNnqO_B70SfyHE0RXewpoaBP6fXO8Bw7Vi0z1amhVNiOKjnt4vxOY0jwwy5I0C_TvOZQfZDPnyIgVg0NzFqdDKlMBPcyWrNh6dpxP5aF5VYyL31TIS_kehgsrCgsk9Pv69-NX0-3ksADhT0GKI7F40kWgIpNjzGxnhJJ6nD-QFDU0tpEPW1XeVsvTn_0E0G6892hbumWvY5iObbBgSdDURbV3WyUOmkadUAK3NYZRRtPStaEMIrf8GWRzlWMu8vLdPYD6yvXfBJVyTOww1c-g2j49DXwwImR4j-Rw",
        "refreshToken": "AMf-vBwS0Qv4D3WSrG4esnem_h46x_kMVKXqseilr1AxxM4Q6_G7Y5M_iPHi8u_UALDyanvd4uTooJi0a9UIEOCptJGsc07DeBBK9SGYAbRHBwmgGEnJUFflagNjAVRuEP0_ExN74sWMWkGXsDmsZvTdyXcHMCkYjLz6c2F6yXLfQlV3TdW_diruDyGiRjg0mhC2qJamj1mtlWuYu_WDFgEIKEwRhPdrRH1QyW9pjdXeYFn7pb9woUm879XVWvu5o7YH34wgHRmC",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 255.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (446.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1NSwidXNlcl9pZCI6ImZNb0ttOW4zN2xTTU1Lb3ZUZDZrU1BDV05qUTIiLCJzdWIiOiJmTW9LbTluMzdsU01NS292VGQ2a1NQQ1dOalEyIiwiaWF0IjoxNzQ5ODIxOTU1LCJleHAiOjE3NDk4MjU1NTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XRVlKHa-Fu5cffKXZdGxsTb5QWdFsjnxVEPGAL_JYSNUIlSybuNnqO_B70SfyHE0RXewpoaBP6fXO8Bw7Vi0z1amhVNiOKjnt4vxOY0jwwy5I0C_TvOZQfZDPnyIgVg0NzFqdDKlMBPcyWrNh6dpxP5aF5VYyL31TIS_kehgsrCgsk9Pv69-NX0-3ksADhT0GKI7F40kWgIpNjzGxnhJJ6nD-QFDU0tpEPW1XeVsvTn_0E0G6892hbumWvY5iObbBgSdDURbV3WyUOmkadUAK3NYZRRtPStaEMIrf8GWRzlWMu8vLdPYD6yvXfBJVyTOww1c-g2j49DXwwImR4j-Rw"
  },
  "data": {
    "name": "Other Org 1749821956089",
    "description": "Other organization for cross-access test",
    "email": "other-org-1749821956089@example.com",
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
    "etag": "W/\"229-PoLYyr5QFYnefkSI1MLFp9rlalw\"",
    "date": "Fri, 13 Jun 2025 13:39:16 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "bb531e70-f7b8-4d02-86a9-152adcbd7a44",
      "name": "Other Org 1749821956089",
      "type": "shelter",
      "description": "Other organization for cross-access test",
      "logo": null,
      "address": "789 Other Org Boulevard",
      "phone": "+1122334455",
      "email": "other-org-1749821956089@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "fMoKm9n37lSMMKovTd6kSPCWNjQ2",
      "createdAt": "2025-06-13T13:39:16.435Z",
      "updatedAt": "2025-06-13T13:39:16.435Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 446.7 ms  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.44s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5d554e5a-2a74-4971-935e-9dd1b3dfebb0 (438.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1NSwidXNlcl9pZCI6ImZNb0ttOW4zN2xTTU1Lb3ZUZDZrU1BDV05qUTIiLCJzdWIiOiJmTW9LbTluMzdsU01NS292VGQ2a1NQQ1dOalEyIiwiaWF0IjoxNzQ5ODIxOTU1LCJleHAiOjE3NDk4MjU1NTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XRVlKHa-Fu5cffKXZdGxsTb5QWdFsjnxVEPGAL_JYSNUIlSybuNnqO_B70SfyHE0RXewpoaBP6fXO8Bw7Vi0z1amhVNiOKjnt4vxOY0jwwy5I0C_TvOZQfZDPnyIgVg0NzFqdDKlMBPcyWrNh6dpxP5aF5VYyL31TIS_kehgsrCgsk9Pv69-NX0-3ksADhT0GKI7F40kWgIpNjzGxnhJJ6nD-QFDU0tpEPW1XeVsvTn_0E0G6892hbumWvY5iObbBgSdDURbV3WyUOmkadUAK3NYZRRtPStaEMIrf8GWRzlWMu8vLdPYD6yvXfBJVyTOww1c-g2j49DXwwImR4j-Rw"
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
    "date": "Fri, 13 Jun 2025 13:39:16 GMT",
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

**⏱️ Duration:** 438.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.66s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1257.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1749821956981@example.com",
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
    "etag": "W/\"639-G/EWP8Y9X48bj9sf8uRQO4meW5E\"",
    "date": "Fri, 13 Jun 2025 13:39:18 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "NlgXXxRWUgVlPg5oVtg1f74Eqk33",
        "email": "cross-org-invite-1749821956981@example.com",
        "name": "Cross Org Invite User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1NywidXNlcl9pZCI6Ik5sZ1hYeFJXVWdWbFBnNW9WdGcxZjc0RXFrMzMiLCJzdWIiOiJObGdYWHhSV1VnVmxQZzVvVnRnMWY3NEVxazMzIiwiaWF0IjoxNzQ5ODIxOTU3LCJleHAiOjE3NDk4MjU1NTcsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ5ODIxOTU2OTgxQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0OTgyMTk1Njk4MUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Hys1rBa55FzW8evBrOXLmeIwFl0cNIzqO-9Og1GgoHCsuEjQcQiYFb26ntrn0JLGAuHAs7GM63QZn5OmAUM2-S0ZivsVp3tyvlsXdRAXHEsN_nYQJAHhnGNocu0nitrdKN9sX-15lC7_J2pZMV3yl83-zWQyH7ZkSI3W4XIdrEWAg-LNhCEo4w-iqJtA77Ssc85lG4DEFeYAmcPFcCk3kxJPxe107hSpIupxd5QXIN9Di1Uo7ltlR1eN5pgs7MeZYUN0DNz5et-YjRcFhr9-9HKwAq1_bkYhKByDwOl0ja9fC04ozqB5XBo1wQjRqR5FQ-vY4r2UkFpOx6RFMbEJRw",
        "refreshToken": "AMf-vBzPr6eg0p0PlhWzRyqumvCFsJh_RoNd2upiMhfebUKQZLsX79LX-2QdcQttR_8N0cXNxTsBK_PQ9m2ny5lS0RkC3zq1WFPeq1JNS9iMWGINfxwqyvW6JmYQykSWUKqh4DB3eyXS_jLP-UQl3xQMrAWyGwozHVqmrJRJCrpiG8-s3_NHXqkl5VFurDBcHAf1rWAld2tGdZNNMemNT2dfJBT0DseA8BcpTOaOQXAe1p3MfESN4aeJQR7zNliQsGBqXsn8AE3P",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1257.6 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (399.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyMTk1NSwidXNlcl9pZCI6ImZNb0ttOW4zN2xTTU1Lb3ZUZDZrU1BDV05qUTIiLCJzdWIiOiJmTW9LbTluMzdsU01NS292VGQ2a1NQQ1dOalEyIiwiaWF0IjoxNzQ5ODIxOTU1LCJleHAiOjE3NDk4MjU1NTUsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjE5NTQ4MzBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XRVlKHa-Fu5cffKXZdGxsTb5QWdFsjnxVEPGAL_JYSNUIlSybuNnqO_B70SfyHE0RXewpoaBP6fXO8Bw7Vi0z1amhVNiOKjnt4vxOY0jwwy5I0C_TvOZQfZDPnyIgVg0NzFqdDKlMBPcyWrNh6dpxP5aF5VYyL31TIS_kehgsrCgsk9Pv69-NX0-3ksADhT0GKI7F40kWgIpNjzGxnhJJ6nD-QFDU0tpEPW1XeVsvTn_0E0G6892hbumWvY5iObbBgSdDURbV3WyUOmkadUAK3NYZRRtPStaEMIrf8GWRzlWMu8vLdPYD6yvXfBJVyTOww1c-g2j49DXwwImR4j-Rw"
  },
  "data": {
    "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
    "userId": "NlgXXxRWUgVlPg5oVtg1f74Eqk33",
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
    "date": "Fri, 13 Jun 2025 13:39:18 GMT",
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

**⏱️ Duration:** 399.1 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.17s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5d554e5a-2a74-4971-935e-9dd1b3dfebb0 (695.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "etag": "W/\"727-WDkCiuvaiw67fndC8yoDmY2xECw\"",
    "date": "Fri, 13 Jun 2025 13:39:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "784cd6c8-06f9-430e-8144-6eeee649a6e9",
        "userId": "yfiwcL7IQueGIaSDCbTvHM6OFcR2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T13:38:51.828Z",
        "updatedAt": "2025-06-13T13:38:51.828Z"
      },
      {
        "id": "ada68599-c91a-4ffe-b8ed-25fd2e3895cc",
        "userId": "YH2Wp0bYXEWYa1XJ8FdgjGEBhla2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T13:38:53.878Z",
        "updatedAt": "2025-06-13T13:38:53.878Z"
      },
      {
        "id": "1c53a7e0-eac1-4e34-b559-197dfb7db475",
        "userId": "nHxQGDC3xQdOsHWaTdtkATpWz6S2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T13:38:55.971Z",
        "updatedAt": "2025-06-13T13:38:55.971Z"
      },
      {
        "id": "bd2d7ef1-c9a0-4578-8bb7-418f018cbd13",
        "userId": "u3nipRGaY4cl850mMnsZjnK0tqh2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T13:38:58.184Z",
        "updatedAt": "2025-06-13T13:38:58.184Z"
      },
      {
        "id": "a2381e1f-6eac-488d-aebc-2edf0f64dc2b",
        "userId": "9RySwYRSFbPnonTAsz8YhK0TxYd2",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T13:39:00.518Z",
        "updatedAt": "2025-06-13T13:39:00.518Z"
      },
      {
        "id": "037011a2-3bbf-470e-b3e8-09210050b75a",
        "userId": "bTaQSd5sVsNvaGp7jGgtr7lsUXE3",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T13:38:47.183Z",
        "updatedAt": "2025-06-13T13:39:04.757Z"
      },
      {
        "id": "f7ab27e1-b1d9-4e11-b3c3-47794ecaf2e4",
        "userId": "OtovpqojayV2PBkpOCkzf1C9zAo1",
        "organizationId": "5d554e5a-2a74-4971-935e-9dd1b3dfebb0",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T13:39:11.059Z",
        "updatedAt": "2025-06-13T13:39:11.059Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 695.8 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=bb531e70-f7b8-4d02-86a9-152adcbd7a44 (475.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:19 GMT",
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

**⏱️ Duration:** 475.0 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/bb531e70-f7b8-4d02-86a9-152adcbd7a44 (826.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:20 GMT",
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

**⏱️ Duration:** 826.0 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/037011a2-3bbf-470e-b3e8-09210050b75a (591.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:21 GMT",
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

**⏱️ Duration:** 591.2 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/784cd6c8-06f9-430e-8144-6eeee649a6e9 (468.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:21 GMT",
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

**⏱️ Duration:** 468.4 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/ada68599-c91a-4ffe-b8ed-25fd2e3895cc (508.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:22 GMT",
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

**⏱️ Duration:** 508.1 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/1c53a7e0-eac1-4e34-b559-197dfb7db475 (475.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:22 GMT",
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

**⏱️ Duration:** 475.7 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/bd2d7ef1-c9a0-4578-8bb7-418f018cbd13 (478.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:23 GMT",
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

**⏱️ Duration:** 478.8 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/a2381e1f-6eac-488d-aebc-2edf0f64dc2b (569.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:23 GMT",
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

**⏱️ Duration:** 569.3 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/f7ab27e1-b1d9-4e11-b3c3-47794ecaf2e4 (565.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:24 GMT",
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

**⏱️ Duration:** 565.6 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/5d554e5a-2a74-4971-935e-9dd1b3dfebb0 (903.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTIzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5MjMsImV4cCI6MTc0OTgyNTUyMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VM2morpGRoVeptBkXrsBn0nfVbsqP64qcFc1wps98eDaHVJcDF1DHXn7AqwYewtq3EaumtKx_0AE1-mi-flCApFX8FolPWz3MvQwKofX_r89O-41_-MRfOXlFyDXtwx9RI_57Wc4OZ1xAb_NF13bqvcvcLxi0QpWnGpMzfT1TUnQ1iZEMv5g26TC0x-T4WrOMxqN4v3ai0VV4IQHTQZaXfvpg7YxhIi8ItcdoXFb1eG5-4ig2Mp0TpLlyQmQb4HGYhjZ8N_ijah14Y3pLHstGiKEA_p8CA6lSAXIl5zDnLo4XylUMJ5s4sHnh4kP5DKSTNUJnc_veClsauKhDEvizw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:25 GMT",
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

**⏱️ Duration:** 903.8 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (252.6ms)</summary>

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
    "etag": "W/\"6aa-5oTK8r12aBenUM8/Xf67VxWrO80\"",
    "date": "Fri, 13 Jun 2025 13:39:25 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTY1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NjUsImV4cCI6MTc0OTgyNTU2NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxzJxI21eBGlmoBrrsCNW-bL1Itth7FnRuNTgmtgFUWlAYF4hvxqb5Aaj8ckgcAyxgoyIZVt6koOsX0y7kJ9bMD1Yhdf_RtJFHjg_vI4Y4XfLH-RucAi_wx23Ts8zbyBXRdOJeyeO4j1PAmHefuzz9fWlhQFMPDY7DopOBc-xlmAl58It9Poo7KbkLsgtx5BK-ku3Xv9yVZAM_3-JhD2D6wxICPnxIcimNuAXLjBMHY5JigM9d7BtH_naEWjv0xsn20mZB6Yj2cwyXvT9oFFB6IwV8U7ZOuTbiFY3EjaubIADiZb4vAt0bt-o4_E34P9tsUX7nfNbQuBuqRxp8r2og",
        "refreshToken": "AMf-vBw3ebsETjuOvDe8SzyiPkQVPP3sgbvEn9FerHFMacMR0WHV1z_y5iov8jKhypiC2WlOGCPoQe_Ns73itJ_vSTKPEOb31Huo_E12uwtndbtsWUQLoRiK030g-1zSDwpuI_ZCo6OjMxBv6at8xct-8kuOl77aWPhWwMGgv2k7_f4rFnCCDyn2eo1TiFUURNnopCFmvtSE3w7DqEnTjfmZ9lXQ3f4BT2dHkAs75RgfqkFboIlsZXYf0E3Of562Uvj13KHo9pQC",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 252.6 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/qwDxWlwwPpYmkbSyu27heDlxpI13 (1458.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTY1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NjUsImV4cCI6MTc0OTgyNTU2NSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TxzJxI21eBGlmoBrrsCNW-bL1Itth7FnRuNTgmtgFUWlAYF4hvxqb5Aaj8ckgcAyxgoyIZVt6koOsX0y7kJ9bMD1Yhdf_RtJFHjg_vI4Y4XfLH-RucAi_wx23Ts8zbyBXRdOJeyeO4j1PAmHefuzz9fWlhQFMPDY7DopOBc-xlmAl58It9Poo7KbkLsgtx5BK-ku3Xv9yVZAM_3-JhD2D6wxICPnxIcimNuAXLjBMHY5JigM9d7BtH_naEWjv0xsn20mZB6Yj2cwyXvT9oFFB6IwV8U7ZOuTbiFY3EjaubIADiZb4vAt0bt-o4_E34P9tsUX7nfNbQuBuqRxp8r2og"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:26 GMT",
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

**⏱️ Duration:** 1458.2 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (317.5ms)</summary>

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
    "etag": "W/\"6aa-ThmZe3z0Kebd33XnBn0vu5eoa4M\"",
    "date": "Fri, 13 Jun 2025 13:39:27 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NjcsImV4cCI6MTc0OTgyNTU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PWL3JUcE8QigKz7_2snBAaR6iowLPagyrls_e0PSye5elqwQW6H3U-stTUe3Fby1zQeH6W3QGD1GS43eFm68Ybr_mvODNUvg2H8bXOCh4u72WEcu0jANY3UUFDTeXKKRvktGhCNIxnU4vW2zkjkCujI0eWRt_6EpxJzIoXgg2mo2uHwJb6LiQRdczH7AJ6oB-PJr8Tu_Mf3hVKokSS91r-nFTIF8kQZJ22D3BxwXuTbWsy_9UTLf3okrQsL8QUSvZvd0244Se5SngYirlz1pvOofj6FAV8UBAABudgazk71iKH7XeJqgndDBetDJKEygzWk4qh7csUttdu_e_Zww4w",
        "refreshToken": "AMf-vBxH0NtHnkML1MepeNCe3aiv7k8lfIteTX2DCvtPox_evqZDKbbARswfpob81a8Db079NTiRHqfLu3FW0mGlhebTQ3uEzkYdlfq9E9Y2bcS1XoW4Xj_OyScoJido_sAfOUplvZhlVt1WhZT2DsYK_ZfuMfD2wSbgLPjLRYo3xB9ZndJFUnidcY4UwJ0eSgPwBxmKIcL0TiICGIvnB6BBraYcuhWkEuVc79g-9nYd8sAjxQfZ6fkttsUN35HSnVPSnSSc24ts",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 317.5 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/bTaQSd5sVsNvaGp7jGgtr7lsUXE3 (1223.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTY3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NjcsImV4cCI6MTc0OTgyNTU2NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PWL3JUcE8QigKz7_2snBAaR6iowLPagyrls_e0PSye5elqwQW6H3U-stTUe3Fby1zQeH6W3QGD1GS43eFm68Ybr_mvODNUvg2H8bXOCh4u72WEcu0jANY3UUFDTeXKKRvktGhCNIxnU4vW2zkjkCujI0eWRt_6EpxJzIoXgg2mo2uHwJb6LiQRdczH7AJ6oB-PJr8Tu_Mf3hVKokSS91r-nFTIF8kQZJ22D3BxwXuTbWsy_9UTLf3okrQsL8QUSvZvd0244Se5SngYirlz1pvOofj6FAV8UBAABudgazk71iKH7XeJqgndDBetDJKEygzWk4qh7csUttdu_e_Zww4w"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:28 GMT",
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

**⏱️ Duration:** 1223.7 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (252.4ms)</summary>

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
    "etag": "W/\"6aa-uP9jCBrSNzzIBxdrs8UBOlCthfE\"",
    "date": "Fri, 13 Jun 2025 13:39:28 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NjgsImV4cCI6MTc0OTgyNTU2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VVwSH8tG3pW61aPQBUExFOY4CP4801edz2ZPnpk1tkzoiXRMkE7tHBRerdhmNv5NYp9V3Hr59yReCrWyJkKzscJOYIds8IMQK_EOr0x_2UxevuCSWBKN66R6omWnqP7aR6v2rdGTV5BXIPSE8hdKu4X8cVaKMIeduKumRw0nYb3anY2OgEoHX5ARgA4kqG9-BHImcsddp3wJhEJ3HpfNI-M-1B7ICrOK3bxlKVuDGaEA6ZFjUmWiaKYvQr_XBnm4wMLJh5Kh3QToN5Xyn7O3Z6PKSnKND8ICoOkRcRPVAGbw-gCN7--SyAJblOYcBtqD_83h2ZYufufa7Ex0-gK18Q",
        "refreshToken": "AMf-vByHxFZ3pUxgPw6R6Zv9l2p_J0UJ9LJCUOIj-4gic4dGUyk8zgz4VyeAGgy98lneJBTSEaXhOAqye45rKwnYJriWiBwunVC1gbIU5s3dl4wN-bCofn-zkegeDEynrKbOzrv8PCx0STLKm6I9iAtQ_EGYza8xIdR_FEBOuoGJZAlVJ6L8q6o8rAPzdTzJXgaW3VusDAuMjnHBpqnj27D8ZX01geLBJSFzgYxV_w7nwGBqsUtB6Ewexa3jiwXZVs_W0R-pFofZ",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 252.4 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/JrmHvzZ8h3f2GiPR7RaVGO5qZKa2 (1172.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTY4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NjgsImV4cCI6MTc0OTgyNTU2OCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VVwSH8tG3pW61aPQBUExFOY4CP4801edz2ZPnpk1tkzoiXRMkE7tHBRerdhmNv5NYp9V3Hr59yReCrWyJkKzscJOYIds8IMQK_EOr0x_2UxevuCSWBKN66R6omWnqP7aR6v2rdGTV5BXIPSE8hdKu4X8cVaKMIeduKumRw0nYb3anY2OgEoHX5ARgA4kqG9-BHImcsddp3wJhEJ3HpfNI-M-1B7ICrOK3bxlKVuDGaEA6ZFjUmWiaKYvQr_XBnm4wMLJh5Kh3QToN5Xyn7O3Z6PKSnKND8ICoOkRcRPVAGbw-gCN7--SyAJblOYcBtqD_83h2ZYufufa7Ex0-gK18Q"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:29 GMT",
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

**⏱️ Duration:** 1172.1 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (227.2ms)</summary>

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
    "etag": "W/\"6aa-lMsUC3sDjFweJ3VlnBf0X6Tqp0Q\"",
    "date": "Fri, 13 Jun 2025 13:39:30 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTcwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzAsImV4cCI6MTc0OTgyNTU3MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZSLRSW54OXCF3kQDNYDDgGd6zSfApiSsO3MFltyrCKcumGekKNYaxEHzkpmBQVpY9ZQueigdP86leoxJIZKEsFLM-JnErbnn2ee_im2TF1b8OWobixB0PsWxzylULE6JXXjwUzRBPX849jPFAT3-CSes7dR71t5l-rXwqO5c7mZo96yLSoJY2vl9EQ-VT0vUGxP7S37u3Ho-RKulucsS3EYipeLYK7KTfwf_jaCuXd-6FNu3SLJbCvFFEgGHSzqV2qnjGgtfO0qVfnMLXPxYC_BMapJ0HlTJ9I4zgWSG97RVSjtkAOPcUB4mxLdf0-50NTubxOIYIQ-IZW0rsSt1hQ",
        "refreshToken": "AMf-vBwkoERtwDSPJpq0tdWnc8lBXg8wytk1FRaQAPfnVrHjKr-K6S_q4vEOEmUpIJxgsdjcZGdHmR1cFkLQuEk7Ye3yfKBVbXx3eq1Nv_zWT_r2S1eBUi6PylLVJcraycKfA8a2-haFbCfxUC6rlKY1cPBK0ds2Gx52Q7sT4N-oaT5-ixcJ8kVwQIDBEFLC7nbkl_-kl0TuC8UA7t2itUYtLPHjsnlNfd1aSvAfhSGylW4w7-II1XBiRGjNwQnbWGjYBNBrr2IB",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 227.2 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/yfiwcL7IQueGIaSDCbTvHM6OFcR2 (1243.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTcwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzAsImV4cCI6MTc0OTgyNTU3MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZSLRSW54OXCF3kQDNYDDgGd6zSfApiSsO3MFltyrCKcumGekKNYaxEHzkpmBQVpY9ZQueigdP86leoxJIZKEsFLM-JnErbnn2ee_im2TF1b8OWobixB0PsWxzylULE6JXXjwUzRBPX849jPFAT3-CSes7dR71t5l-rXwqO5c7mZo96yLSoJY2vl9EQ-VT0vUGxP7S37u3Ho-RKulucsS3EYipeLYK7KTfwf_jaCuXd-6FNu3SLJbCvFFEgGHSzqV2qnjGgtfO0qVfnMLXPxYC_BMapJ0HlTJ9I4zgWSG97RVSjtkAOPcUB4mxLdf0-50NTubxOIYIQ-IZW0rsSt1hQ"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:31 GMT",
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

**⏱️ Duration:** 1243.3 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (257.1ms)</summary>

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
    "etag": "W/\"6aa-BM45SRcDZjob7MtUBWtDLAH2GQU\"",
    "date": "Fri, 13 Jun 2025 13:39:31 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTcxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzEsImV4cCI6MTc0OTgyNTU3MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kOTTjQXuDtYU1Wjt2SUlg7WodK48yx6GDRdTMhsH_QiCPTyVwcREHLTFMfslEWz9V-71hTcWt_ch3hqthYBTitwdDIiE9t4Ndm22kQvnykkXh0XhjCxe8g_5D3V8snoztyKD36KPPXEfGIE1IA4yf_Ov389hu1SCiXBQ1yBSyLubS57RWFM5xw7qJB7vlgv-PrliXFOpDM58Q5GuVT9aNP8-9e6NAeb2o3q_s0gDQEJCqRn5qx5snjUS8cqrHPZdh9ZOMaUbL4X6KURT7hHjmGKaA-9ZqLaYDYTrj5K6dnS_k7K0M1cmGLeL1dZkfvNhK-9pOhMTm-6ZF5_y5RsR2w",
        "refreshToken": "AMf-vBwkrK2f89eyVkUDDjuJxuXly0MQaeI38xg8J8CQaQ2UMaK37LH9ZXI6yIAvNg-madgDtvbVOM0JvtSVzV7gawx1eHxlJ4jbLPoFlj9ekyqbwzEI1MjsMxeQLfPa7Wj2oLUF1SD2_yEb5IOL_V0OL7DbG6cZbTfhOdnwHe4cbJLzRe7-xiIE3WSAl7e_Q4nAqGp04zrL_6Ypb08H3nlq3LngifHZskKaA6Ndm0PAORC3Cj3Kll-G0tglTxdhd3rmSZ_WWS-Y",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 257.1 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/YH2Wp0bYXEWYa1XJ8FdgjGEBhla2 (1176.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTcxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzEsImV4cCI6MTc0OTgyNTU3MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kOTTjQXuDtYU1Wjt2SUlg7WodK48yx6GDRdTMhsH_QiCPTyVwcREHLTFMfslEWz9V-71hTcWt_ch3hqthYBTitwdDIiE9t4Ndm22kQvnykkXh0XhjCxe8g_5D3V8snoztyKD36KPPXEfGIE1IA4yf_Ov389hu1SCiXBQ1yBSyLubS57RWFM5xw7qJB7vlgv-PrliXFOpDM58Q5GuVT9aNP8-9e6NAeb2o3q_s0gDQEJCqRn5qx5snjUS8cqrHPZdh9ZOMaUbL4X6KURT7hHjmGKaA-9ZqLaYDYTrj5K6dnS_k7K0M1cmGLeL1dZkfvNhK-9pOhMTm-6ZF5_y5RsR2w"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:32 GMT",
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

**⏱️ Duration:** 1176.9 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (332.2ms)</summary>

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
    "etag": "W/\"6aa-VhlP9SDpYoaixxXL/G1Mniq0/w0\"",
    "date": "Fri, 13 Jun 2025 13:39:33 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzIsImV4cCI6MTc0OTgyNTU3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CMtev-U0WvB4pBqsCFPXPz3WP7cDDeYJDbK0Jf4X2bBWqWmecG1DJGqpmkzRdERzc0aoag-0c0cUMZMeMCJIuomKwgRXqB3pCrMkIE8yg-1RKSB8hvsmsCjgMRcu-ZK8XFRrwuhgKlz1KA_Vf8u_LvLI4EhGRd65WrOHBJAPimswevxxwekfxexFf5XQPP6j12ZDPQoRWE1uVPD_TL5jRkdtOha_hzE4kvwDvxjsHtwHZFJ-7lbHW9r1l_NpYlM8RXnnorR3r8d6g1p3Qbcbz2t30Cu8IkvIX8Gd9fr4xXMGjuDY8yPsyHXaTBsfNcIPR73TfMRracjQ7P-yoWGrMw",
        "refreshToken": "AMf-vByu2yfgMAeRgT6oKYgXh4IQ2pBU6JFSuziu-JBUaysJyzhij5MFQ1g8aDg-R32N-NzIZ2JSIbgtSNfjjEhufvBg1HjW6uWRXdUZSt6kywIAddu6K3YeB0AgLbQ2EIY0-HsMPZDNhlddiBi-oBSdQm77US3S0d_MTy-RiphGInUZGP9OsfGnl-HUrS5COvo0FJGKT74tqHbrvBqYINHMz88GToejrvFW4eZWBgb4egW_h2Nu0TQacdzHZFCCON67888oT1jX",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 332.2 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/nHxQGDC3xQdOsHWaTdtkATpWz6S2 (1356.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTcyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzIsImV4cCI6MTc0OTgyNTU3MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CMtev-U0WvB4pBqsCFPXPz3WP7cDDeYJDbK0Jf4X2bBWqWmecG1DJGqpmkzRdERzc0aoag-0c0cUMZMeMCJIuomKwgRXqB3pCrMkIE8yg-1RKSB8hvsmsCjgMRcu-ZK8XFRrwuhgKlz1KA_Vf8u_LvLI4EhGRd65WrOHBJAPimswevxxwekfxexFf5XQPP6j12ZDPQoRWE1uVPD_TL5jRkdtOha_hzE4kvwDvxjsHtwHZFJ-7lbHW9r1l_NpYlM8RXnnorR3r8d6g1p3Qbcbz2t30Cu8IkvIX8Gd9fr4xXMGjuDY8yPsyHXaTBsfNcIPR73TfMRracjQ7P-yoWGrMw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:34 GMT",
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

**⏱️ Duration:** 1356.1 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (244.7ms)</summary>

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
    "etag": "W/\"6aa-SUD1hDCWYMyE6iyDKEkCwYWZopA\"",
    "date": "Fri, 13 Jun 2025 13:39:34 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzQsImV4cCI6MTc0OTgyNTU3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eY6zFAqXq6crSCRhwz7dXHLlsPB82k34CCY7xZOhTjcGgjoraI4YvhfFMLpDOQkPqKNFPSNdxnD_X5OJgHQ0nt64_HdyH4kaZf6Z_pGwxqmKFJREPjpgY4TkqnooEwnRydHAg0ObgwaP50NQo8STejpCmI0z5zQy6mefI90pjcGCtyHyNQrT-TBS51MoP9crzk1y7KyLJDXToqadn6zYoPV4CdUVxtmOeDYYMCTuDk10wPFXCDv8ybK2dcT-9s7Db5qh0T6DLLgLDgByjS_RPuyPE9zTIaQG6dXe-_lsH1WzhsM92aPl_Nrbmz8XKy7m-Sm33awNRx8yBs6J-gdMkw",
        "refreshToken": "AMf-vByDuu5K5ZO1GbS9t1fvC0tcgGWd_RdGn952P6DNYPXO5H45dQ8GsTtlAy7AHXhEJL4OT9LpcQ3SPMN_03y0EbpnAi2eoN37rnkVudJvZjb5HF-ql4WHXVwZHVit91NfZyyn9z_ZXs4eS7a2IjjPfpZZxQWXuFuAxB1iSU4FklrhVnieGHoLW0izgoR8UIOqVnFVwRjklpYt4WyEkC3FlfALDA3hUXevuK71Ha1CI0DQd4GCEQlv0lBYDKt1z_qOQvu7Xpts",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 244.7 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/u3nipRGaY4cl850mMnsZjnK0tqh2 (1291.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTc0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzQsImV4cCI6MTc0OTgyNTU3NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eY6zFAqXq6crSCRhwz7dXHLlsPB82k34CCY7xZOhTjcGgjoraI4YvhfFMLpDOQkPqKNFPSNdxnD_X5OJgHQ0nt64_HdyH4kaZf6Z_pGwxqmKFJREPjpgY4TkqnooEwnRydHAg0ObgwaP50NQo8STejpCmI0z5zQy6mefI90pjcGCtyHyNQrT-TBS51MoP9crzk1y7KyLJDXToqadn6zYoPV4CdUVxtmOeDYYMCTuDk10wPFXCDv8ybK2dcT-9s7Db5qh0T6DLLgLDgByjS_RPuyPE9zTIaQG6dXe-_lsH1WzhsM92aPl_Nrbmz8XKy7m-Sm33awNRx8yBs6J-gdMkw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:36 GMT",
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

**⏱️ Duration:** 1291.2 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (239.4ms)</summary>

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
    "etag": "W/\"6aa-HgSbs07hH6nC2YmxczRlfJ+BKEs\"",
    "date": "Fri, 13 Jun 2025 13:39:36 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTc2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzYsImV4cCI6MTc0OTgyNTU3NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Hc27lvYPqvclqAgIBZ78ALKL2_Fm8Ik9xRJOdeIbC5etqaCcLebUKWmZzER6jSpjCu5NkZO9svOwyZgWVjiAQmjMOH4G4r5ZNe3DIr7Wzpj8VAwL9fPH8TedeS7tWQrsHy4mudhm7mkqOy1nwAo9pdwySZIaskdEeehphiRk0bgxyhbk0WCNVd0jJwcrx5xMbumspITm41nR6KsyFRRB8ojwyX0_QDlDs6s0lqtbK5rtOfS9XI-ulRRon2CoHFeUBrqfaXFDgMLsMXS0CKztQgT_R6gFcm7dzOEfm7U8mkkkwZ9Bbb0tpOhd7yFjbcMwa9Xev1njs3rJtYJsPUjzbw",
        "refreshToken": "AMf-vBz-66DVh0jQ5g3W9Ih-nbvQM7iXxyyoT2zwtuYxWUSYFdRyw3VnXPnbOY1ykG6IdqtLhaX7EZwsAoScvKdGnFE7AFKv0iiA874VyJyzeK-b0xIsy0RdoqVGw-CIaTR8R6l1NmLz3CRTpLZEty1CAAb2eZQHKWsyMSlHCBEaYS7TKDWBjrh-G5IeKt9NRYuC7VBv4TzBmqKQ87S2dfimuoMXxAMP47QI6MBei1bFmhxMjjK5diGarz-ARUcTuihrYTqjAwRo",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 239.4 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/9RySwYRSFbPnonTAsz8YhK0TxYd2 (1150.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTc2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzYsImV4cCI6MTc0OTgyNTU3NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Hc27lvYPqvclqAgIBZ78ALKL2_Fm8Ik9xRJOdeIbC5etqaCcLebUKWmZzER6jSpjCu5NkZO9svOwyZgWVjiAQmjMOH4G4r5ZNe3DIr7Wzpj8VAwL9fPH8TedeS7tWQrsHy4mudhm7mkqOy1nwAo9pdwySZIaskdEeehphiRk0bgxyhbk0WCNVd0jJwcrx5xMbumspITm41nR6KsyFRRB8ojwyX0_QDlDs6s0lqtbK5rtOfS9XI-ulRRon2CoHFeUBrqfaXFDgMLsMXS0CKztQgT_R6gFcm7dzOEfm7U8mkkkwZ9Bbb0tpOhd7yFjbcMwa9Xev1njs3rJtYJsPUjzbw"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:37 GMT",
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

**⏱️ Duration:** 1150.9 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (318.0ms)</summary>

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
    "etag": "W/\"6aa-6bYRkmp4n+uCLtSKUAw6lKzvKaw\"",
    "date": "Fri, 13 Jun 2025 13:39:37 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTc3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzcsImV4cCI6MTc0OTgyNTU3NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.f0-72RbwFOTyTSFbsWDai_67Z6sq_nU4Ib1ESX18fV3vArorSgjNJ2q_ARKnuuddoZ9Lcia7aE9y7aItxy5cOM0jgpnMPO8xnz2IL84Jg9qf3pozvym7s0G6fVam-w9bl9n0_eoU4ycOsVz8HEamV0ZDJYxFdZQkNSlXC-QfRmSOQvKB7n7GfR2iG56AlXaOs1-y29rLB9sdwpsM6xUa73T6vkJDPq1wtV2Dbl0S5eakryIH3q3k-ZVOcLwe566G_lr7dBkTFT1_OGmsS1FNs2HZ_LqO5ZKF2LY9CFXv8UssI40B-J_vW78mHSZQL184DR8xjAOCPeZKliaB5C1pHA",
        "refreshToken": "AMf-vByWSPUVaenJ3AvKdTgSw_cUV4c--Yi3Uw-pYo17X99DDbE8gNsKGUOG4YCRPIv8w0bvSOtAzahvBjfYCdKjQwXNtvL22GAvY4uzkdl9CS6JKuY0n-074G0FkRqmn-5QTOsERf-j6G7SqmnOdE6RQ5-9_7YmELvTGfm0eeTS_IlAG0Q8bYXRfts7ddIvZQcy6qh3Qps6wV9fnTQoFsmpmVDBlqglTjWpIP6ZEdPgKjq6eeYHKhXL_OtDkf99OxpSLOxbBPxc",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 318.0 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/JhDuIZUCmMXmsFbTJDLzKlQ5w8F2 (1177.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTc3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzcsImV4cCI6MTc0OTgyNTU3NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.f0-72RbwFOTyTSFbsWDai_67Z6sq_nU4Ib1ESX18fV3vArorSgjNJ2q_ARKnuuddoZ9Lcia7aE9y7aItxy5cOM0jgpnMPO8xnz2IL84Jg9qf3pozvym7s0G6fVam-w9bl9n0_eoU4ycOsVz8HEamV0ZDJYxFdZQkNSlXC-QfRmSOQvKB7n7GfR2iG56AlXaOs1-y29rLB9sdwpsM6xUa73T6vkJDPq1wtV2Dbl0S5eakryIH3q3k-ZVOcLwe566G_lr7dBkTFT1_OGmsS1FNs2HZ_LqO5ZKF2LY9CFXv8UssI40B-J_vW78mHSZQL184DR8xjAOCPeZKliaB5C1pHA"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:38 GMT",
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

**⏱️ Duration:** 1177.4 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (231.2ms)</summary>

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
    "etag": "W/\"6aa-yFumDD9a/0OqUF7EDcaQMkeWIZo\"",
    "date": "Fri, 13 Jun 2025 13:39:39 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTc5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzksImV4cCI6MTc0OTgyNTU3OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZAt-syfT60B6gGvQDyQYYFLQvt_2J7THYSvV-lDxdwOc18dthXjpTjSfYav8EqOXGz9lkZva7eKg7M3wdeLS8xoxSmtBxrye2s8NpYWOXA7CyvT81mXlZk4dUfTeo4Gsp_d34DWDVzDrR2tEVTeZcMBF095bLd7nIQfMHpvKImnL56UYsgFnSQS9_TrdVUsIVdveXTdw4h66_3E3Z146ZWU8PkNvyB325DS7GtR3sw5U6G6aoh_pzsVojmyGvpoLhNzzW3t03R_ceb1Ky-jW34_hgHc2z9WWbiSbcg_-By0Wg9V_PJqbWeWZl5AtefY1nxqIoSzElw6I3afJ0yzRfA",
        "refreshToken": "AMf-vBxJ82lphIBE9yLaP0WxpukCNsAwfoozfebSxkZDdmF8KE1hQ1bstqOk1IVoZiYQH6eHwewYYwSucZrnMvyH5wFkBjiXStmju1Kpk6hw2ISe9jSsYfP0bGfODfADL19omYWxUJIx2o3ApYpxNV4Iq2IjqM4uwc7OCAtRrnn8mJVA1YkrfhSxNxFKtXyoCGC9N8TVlJXoutkOGcrwXC3jemVP86yMRWwQY0tNpgf91U9PqJTeytvDCtvpbB2RKij35n6F8v5Q",
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

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/OtovpqojayV2PBkpOCkzf1C9zAo1 (1254.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTc5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5NzksImV4cCI6MTc0OTgyNTU3OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ZAt-syfT60B6gGvQDyQYYFLQvt_2J7THYSvV-lDxdwOc18dthXjpTjSfYav8EqOXGz9lkZva7eKg7M3wdeLS8xoxSmtBxrye2s8NpYWOXA7CyvT81mXlZk4dUfTeo4Gsp_d34DWDVzDrR2tEVTeZcMBF095bLd7nIQfMHpvKImnL56UYsgFnSQS9_TrdVUsIVdveXTdw4h66_3E3Z146ZWU8PkNvyB325DS7GtR3sw5U6G6aoh_pzsVojmyGvpoLhNzzW3t03R_ceb1Ky-jW34_hgHc2z9WWbiSbcg_-By0Wg9V_PJqbWeWZl5AtefY1nxqIoSzElw6I3afJ0yzRfA"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:40 GMT",
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

**⏱️ Duration:** 1254.3 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (304.5ms)</summary>

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
    "etag": "W/\"6aa-8IchHtbMeBL2WTr+420QNCqjEqE\"",
    "date": "Fri, 13 Jun 2025 13:39:40 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTgwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5ODAsImV4cCI6MTc0OTgyNTU4MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mw6GLeldwYDJzcJI74iQaQt0lzd-chhux5qGh693qjvsxIedUXs6G0_9X0odZoyerOo03svVj3MfegvXMQojLAIAl1v72pY-7a2Ne3JGTXK-vL4t7GO3Gb6JoFpLiUmS2f9p7VZ3EtRnkyIo4COEErSgjILNIEPd27KCY5rPt1IiCNbcvKNUnh7r_SoYwlQFIE5JIgYaQmNQ14RJzuFvtbLPXixOj5WMORzLwDh6gsbxVTvEXvyCVccIvi5YCsDNX7L-UW7j2phIdnf1qxLPlIzthl_2OA8RPdB_hiPlJzEQMztA0KmamWlHepdFY7pn_eCO6txlIKDC-NGJMzrvvQ",
        "refreshToken": "AMf-vByTeHuoK1NFgT1f77fCLfR3TjUSt0HKMjLHNqw6ZmunttWsyEY6_Li9T8nLueJbvIN9QSMt_PLgT8x76bjstZykaC6eug6nCs05Wi9E5vPmh-Es4SotDQqAfA4In68BJkNKwhyfd7bMZiyGuCYjs1_prKNXDDu212yPwxGxw652v9zQbWmsSVBWcNgFEAc14Ua2ZXRFuPwQz7nUi4Ae3Twvm04XlAjZu4YlmlhVOW0p_fcPv6cboxuAp75mjs_NauMsvg3h",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 304.5 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/sLD3co8Z9oSa6zSeFuyUN6qNsHf2 (1433.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTgwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5ODAsImV4cCI6MTc0OTgyNTU4MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mw6GLeldwYDJzcJI74iQaQt0lzd-chhux5qGh693qjvsxIedUXs6G0_9X0odZoyerOo03svVj3MfegvXMQojLAIAl1v72pY-7a2Ne3JGTXK-vL4t7GO3Gb6JoFpLiUmS2f9p7VZ3EtRnkyIo4COEErSgjILNIEPd27KCY5rPt1IiCNbcvKNUnh7r_SoYwlQFIE5JIgYaQmNQ14RJzuFvtbLPXixOj5WMORzLwDh6gsbxVTvEXvyCVccIvi5YCsDNX7L-UW7j2phIdnf1qxLPlIzthl_2OA8RPdB_hiPlJzEQMztA0KmamWlHepdFY7pn_eCO6txlIKDC-NGJMzrvvQ"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:42 GMT",
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

**⏱️ Duration:** 1433.1 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (305.2ms)</summary>

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
    "etag": "W/\"6aa-i5BqncFGRP0ofF9WI5A0uA3rYpw\"",
    "date": "Fri, 13 Jun 2025 13:39:42 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTgyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5ODIsImV4cCI6MTc0OTgyNTU4MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F36MyDq_tL8s6YoeZTXWGA4xRtA1_-Z-s0vQ1tMD7vj-BH_PajnW9M-YQUF05c0uu-LCaEbU14Cm-jb428mG_Cuxi-het4iNKbsJZR8WRieoOPB0Sj1HOsvryNzguwP13GQgqkpRq4NR6mKo86iYJTO95R1Rc61Y_sHJydcvt3Egv6Z41YeH-9yS1Ooi5VU2nND8ZwWFxtcJ8KKRKyCrSQICC43a7onMiXbvWNR2okj7Da7iWYf5ZM1g287a0Pm1GlykjjOKtp_puLgDrxAXwfdf-UFsxXxVK7AHpJ_tK5Tg_TYoWhekwwrJh_uHNetZvpntJ2CwIpUvezFg65zfZA",
        "refreshToken": "AMf-vByDrs-lfcOVZ948hC-w_wWb6sbG54x-KrSYD7OaTsmunMAuk3P8QyVwvkTxQEPS_QcTErl5BIXdtDtZYgQDGPWU6VJo_TJtt6ZW_2dxj5pIreGu_frqP6hf3OlK32hH7JteBUpv7mfxatE4RS5hjvLUbIry2R6UIqOCxZy6dNma2ed2U4BVN_OlCe6b20xKyeF9jSbaV_83YBvJjDQXiwNhSx_gJa_9i_j3vNl5LSCTUF-Kc1ILOiq7y8-qk8ekQ2Qv_TBU",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 305.2 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/fMoKm9n37lSMMKovTd6kSPCWNjQ2 (1188.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTgyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5ODIsImV4cCI6MTc0OTgyNTU4MiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F36MyDq_tL8s6YoeZTXWGA4xRtA1_-Z-s0vQ1tMD7vj-BH_PajnW9M-YQUF05c0uu-LCaEbU14Cm-jb428mG_Cuxi-het4iNKbsJZR8WRieoOPB0Sj1HOsvryNzguwP13GQgqkpRq4NR6mKo86iYJTO95R1Rc61Y_sHJydcvt3Egv6Z41YeH-9yS1Ooi5VU2nND8ZwWFxtcJ8KKRKyCrSQICC43a7onMiXbvWNR2okj7Da7iWYf5ZM1g287a0Pm1GlykjjOKtp_puLgDrxAXwfdf-UFsxXxVK7AHpJ_tK5Tg_TYoWhekwwrJh_uHNetZvpntJ2CwIpUvezFg65zfZA"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:43 GMT",
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

**⏱️ Duration:** 1188.4 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (230.7ms)</summary>

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
    "etag": "W/\"6aa-jVcB+an9pjK5SY7p98Iwb0VcfSM\"",
    "date": "Fri, 13 Jun 2025 13:39:43 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5ODMsImV4cCI6MTc0OTgyNTU4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.itTMIK4PGmCGsjm9n3bQYESPUercpauyfmHETj-9FDRlZ6tyqb4VEgmLNW93CWtvbLJCvfTQ8PohvbOrxksB_r8_AfAIXrmTsf_hCt4naSvAvF_uXz5M_QjFRipxU2_ioP0o3UwB214Y0Ub_ZZMoenE1U5mSoaN1BHJpQqmf7ESJw4CBdiU34eQOrcP-QOpx8SxvZeQE5pVUfy8kf0zddG91npThHxL8P5FTWCSPY7YhhSznP4XUdvSfgFgcWFh8L8Mv-zIX8fmsGRUHMU5rXVOXD0cX_lRa3tbQNw7iwbS-SfnRreoY7oIbQWWNvvNi89-M_7y53OtpE-wlqhFJsg",
        "refreshToken": "AMf-vBylkyhaUSUmBcdYH3dGhIQkA-VZmlHDFveE_BnADYGhD1StORe2qIC5JhStUB7pbo9O0aVmtBDEWcKD9Tym5kMrEYRvPBwiei86lZdLXX-cwBUOi2rWSxvnDmEa5Z_GJnSFUoQ8r9hb-GGllln-0GOVBJ35tPEeXIBk29d3y4Biow60X4wUUbgPYW5deL7ELyQ-Z0p0QCNJXAOPcuUwyh6tMfTNkcMqHMxtQWX3unPy9kIGL9WQ1K3eSzH4593etyLeTahg",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 230.7 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/NlgXXxRWUgVlPg5oVtg1f74Eqk33 (1389.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODIxOTgzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjE5ODMsImV4cCI6MTc0OTgyNTU4MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.itTMIK4PGmCGsjm9n3bQYESPUercpauyfmHETj-9FDRlZ6tyqb4VEgmLNW93CWtvbLJCvfTQ8PohvbOrxksB_r8_AfAIXrmTsf_hCt4naSvAvF_uXz5M_QjFRipxU2_ioP0o3UwB214Y0Ub_ZZMoenE1U5mSoaN1BHJpQqmf7ESJw4CBdiU34eQOrcP-QOpx8SxvZeQE5pVUfy8kf0zddG91npThHxL8P5FTWCSPY7YhhSznP4XUdvSfgFgcWFh8L8Mv-zIX8fmsGRUHMU5rXVOXD0cX_lRa3tbQNw7iwbS-SfnRreoY7oIbQWWNvvNi89-M_7y53OtpE-wlqhFJsg"
  }
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
    "date": "Fri, 13 Jun 2025 13:39:45 GMT",
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

**⏱️ Duration:** 1389.9 ms  

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
- Test organization: Test Org for Memberships 1749821924900
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
