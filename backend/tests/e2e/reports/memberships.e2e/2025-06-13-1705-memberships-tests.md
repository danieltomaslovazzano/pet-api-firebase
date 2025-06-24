# E2E Test Report: memberships-tests

**Date:** 6/13/2025  
**Time:** 5:05:13 PM  
**Duration:** 63.50s  
**Tests:** 20 total, 20 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully | PASSED | 0.55s | Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully |
| ✅ Memberships E2E Tests Invite User to Organization Should fail to invite same user twice | PASSED | 0.54s | Memberships E2E Tests Invite User to Organization Should fail to invite same user twice |
| ✅ Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions | PASSED | 1.51s | Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions |
| ✅ Memberships E2E Tests Invite User to Organization Should invite user with different roles | PASSED | 10.38s | Memberships E2E Tests Invite User to Organization Should invite user with different roles |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by organization | PASSED | 0.72s | Memberships E2E Tests Get Memberships Admin should get memberships by organization |
| ✅ Memberships E2E Tests Get Memberships Admin should get memberships by user | PASSED | 1.06s | Memberships E2E Tests Get Memberships Admin should get memberships by user |
| ✅ Memberships E2E Tests Get Memberships User should get their own memberships | PASSED | 0.39s | Memberships E2E Tests Get Memberships User should get their own memberships |
| ✅ Memberships E2E Tests Get Memberships Should fail without userId or organizationId | PASSED | 0.41s | Memberships E2E Tests Get Memberships Should fail without userId or organizationId |
| ✅ Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships | PASSED | 0.33s | Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships |
| ✅ Memberships E2E Tests Get Membership by ID Admin should get membership by ID | PASSED | 0.52s | Memberships E2E Tests Get Membership by ID Admin should get membership by ID |
| ✅ Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID | PASSED | 0.61s | Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID |
| ✅ Memberships E2E Tests Update Member Role Admin should update member role successfully | PASSED | 0.62s | Memberships E2E Tests Update Member Role Admin should update member role successfully |
| ✅ Memberships E2E Tests Update Member Role Should fail with invalid role | PASSED | 0.46s | Memberships E2E Tests Update Member Role Should fail with invalid role |
| ✅ Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions | PASSED | 0.49s | Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions |
| ✅ Memberships E2E Tests Remove Member Admin should remove member successfully | PASSED | 1.14s | Memberships E2E Tests Remove Member Admin should remove member successfully |
| ✅ Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions | PASSED | 2.31s | Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions |
| ✅ Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) | PASSED | 1.05s | Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership) |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations | PASSED | 0.41s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations | PASSED | 1.57s | Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations |
| ✅ Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations | PASSED | 1.11s | Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Memberships E2E Tests Invite User to Organization Admin should invite user to organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.55s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (544.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "Kbt3YlJxNLaOzTHFok1kKbeR6uo2",
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
    "etag": "W/\"174-NIjwYZIABAzxCxIEJncXhf84QuM\"",
    "date": "Fri, 13 Jun 2025 15:04:14 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "cdde6e67-d005-4c97-8cbd-b83788bba339",
      "userId": "Kbt3YlJxNLaOzTHFok1kKbeR6uo2",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T15:04:13.946Z",
      "updatedAt": "2025-06-13T15:04:13.946Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 544.1 ms  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should fail to invite same user twice
**Status:** ✅ PASSED  
**Duration:** 0.54s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/memberships (539.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "Kbt3YlJxNLaOzTHFok1kKbeR6uo2",
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
    "date": "Fri, 13 Jun 2025 15:04:14 GMT",
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

**⏱️ Duration:** 539.6 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Regular user should fail to invite without admin permissions
**Status:** ✅ PASSED  
**Duration:** 1.51s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1091.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "no-perm-invite-1749827054563@example.com",
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
    "etag": "W/\"631-FYalWZQpgDnJNplCKeogmJxw1HY\"",
    "date": "Fri, 13 Jun 2025 15:04:15 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "e5Voc40V4GM4btNyuvkjTM762362",
        "email": "no-perm-invite-1749827054563@example.com",
        "name": "No Permission Invite",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA1NSwidXNlcl9pZCI6ImU1Vm9jNDBWNEdNNGJ0Tnl1dmtqVE03NjIzNjIiLCJzdWIiOiJlNVZvYzQwVjRHTTRidE55dXZralRNNzYyMzYyIiwiaWF0IjoxNzQ5ODI3MDU1LCJleHAiOjE3NDk4MzA2NTUsImVtYWlsIjoibm8tcGVybS1pbnZpdGUtMTc0OTgyNzA1NDU2M0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuby1wZXJtLWludml0ZS0xNzQ5ODI3MDU0NTYzQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.FJnG4x1KKN4H4yqa1mwrz_tEwn802BUFkETIDaDYRlsZOAUt3PDNq7OWr5WsmPfcZlmGKPHfQCCgTehBI4jpz1RaB1OVXijO9vFW9S1mI95qB5aGbtYgtKBRK0kn30oGHiDzXlbzh__xpi4Nu5hoP2d4icyY-la7TzrPbT5P0hXsfDX0YcteIF0L0vd4ehbXglrBuHYYYzA89w62FzS4b0D17shrFUMutZRyLfpUPUEsEaPynxLhasSzAUCQ9ZC5w_igoATik5YQt50pQq-7RFjXgAOVSgzNSg5rIWseb6p3Kt6Upo0d8a5t2Bz5GGqqdca3sX-pK7Deo97eHnbWOQ",
        "refreshToken": "AMf-vBz6Qk3cPCXHnuIEAfBIAEv03jJpTFbk4hx846rdxS0GLfKsy2bFya3Jw8x19SqFwqqoILT0qEDIx99sPIv2_SPxH-LIvSypWBm8k38SVHJu8S-RKcD69pYb9GWjkadMKGt0xvMQ3TIPrsc6l0W29V5vtzCa3QbzkQsbHy3F1NqJN5XigMV7WJolKa6cXDMXnuywlv2Q5NJSybAjfzpLUVwQJUhHbmVyiqdPe0K3uk8ppJYRJEa_o0bItYeCJNpQwIYD34fx",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1091.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (414.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA1MSwidXNlcl9pZCI6ImlDNXBZdGxGYzNZZG1EbkhyZEZacTJiRmpXMTIiLCJzdWIiOiJpQzVwWXRsRmMzWWRtRG5IcmRGWnEyYkZqVzEyIiwiaWF0IjoxNzQ5ODI3MDUxLCJleHAiOjE3NDk4MzA2NTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNzA1MDM2N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI3MDUwMzY3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S1hgAXt6BmJLuseuQMZZxNqXPwOIsUfooOasznPm02M5273Rpt5sR32YD2eEnbd_Aa0FHnN2PQd9bS3CBM5ftmdVboNAJB2xeTExDRpp4z1UoNsKwXDRsBiYvu5mxJOnayBOCA3e4qk4wgmhsh8BAKbrLgEm6leVompBheDxkxCREwHYMcpfi8_dLVhcYJk50IRLnFOyARYoTzly3hEwixnOShkNZhyyNTbpujNXf2CGcfYdaeO7OCNWZoVgtrWYLUXj7IxR7g3F2mZiMkClH6LD2osci7YFlRijz2Wz1ltMQ_M-xXwPTjIMsfw9ZV6wEoKhCH_J4kMBnY8xTgKQJw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "e5Voc40V4GM4btNyuvkjTM762362",
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
    "date": "Fri, 13 Jun 2025 15:04:16 GMT",
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

**⏱️ Duration:** 414.5 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Invite User to Organization Should invite user with different roles
**Status:** ✅ PASSED  
**Duration:** 10.38s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1172.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "admin-user-1749827056077@example.com",
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
    "etag": "W/\"603-7y7iIaAeGCKscECI/NdEkKeImKI\"",
    "date": "Fri, 13 Jun 2025 15:04:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "qw7GwmfEybNPPPwrjqrUXqQxB782",
        "email": "admin-user-1749827056077@example.com",
        "name": "Admin User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA1NiwidXNlcl9pZCI6InF3N0d3bWZFeWJOUFBQd3JqcXJVWHFReEI3ODIiLCJzdWIiOiJxdzdHd21mRXliTlBQUHdyanFyVVhxUXhCNzgyIiwiaWF0IjoxNzQ5ODI3MDU2LCJleHAiOjE3NDk4MzA2NTYsImVtYWlsIjoiYWRtaW4tdXNlci0xNzQ5ODI3MDU2MDc3QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluLXVzZXItMTc0OTgyNzA1NjA3N0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bJ2DPk9Ex5Kq65chC2Q1YovrN1vh7qYCLz3YuOU2q93iuU-QwE058gSywWMJQNO3-wtW3Ohac1e4a6eboovsZaS9wCU8P4XeWrIkLEanuNGgLqTKHW1BxCoxGHCgWx3AF5f5o2mOle11zVMF8lCDEpu0NjCiR1kmCnH3C3W97ipxFu3AQ8fq0U0rlQqFQEG5qzWsVPLToXrBgIGAfecb2SRspSJZzLPC1zBYz4FwOABTVAcLewOJuuChcCFrPD4UztxusDklVPtFMxGSEcD729J8KIK2ZKis30Olhl7K52CxPjEUxM4A-Ubk1My-AyAXVO7Sl39V_B36fbmt29X5Yg",
        "refreshToken": "AMf-vBwJMeci8Tr61n3PeYKdFyLHKC4ki5DDDsH4NvoDt3xH_yEMKTMLT5VyCwXdSUVk6oEQYWtGBcfVSzXqRxl-0DnKN0oxHv-_GEpH-PHD4X7xxeKWSnuGSGNIlNwDnwqitCv4Sk8wSqg_qlF1LKJdweicSA6gBGKYm8lnVQv_7gDoN49yjtiLrUnniI2BolGL0mDqrhxzBC_ZGnsdWCxvUufwNkRgMn_53T4hPqN_iLQA99eYTwc",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1172.8 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (626.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "qw7GwmfEybNPPPwrjqrUXqQxB782",
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
    "etag": "W/\"173-OOX++WL94Y1bYOOB56B7noYCCTQ\"",
    "date": "Fri, 13 Jun 2025 15:04:17 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "71b9ab34-babc-4a12-8c27-5f3bc2edcb1e",
      "userId": "qw7GwmfEybNPPPwrjqrUXqQxB782",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "admin",
      "status": "active",
      "createdAt": "2025-06-13T15:04:17.811Z",
      "updatedAt": "2025-06-13T15:04:17.811Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 626.1 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1355.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "manager-user-1749827057876@example.com",
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
    "etag": "W/\"60d-Cl3IxLAhAl9hPIM0s9k0hrm7S5c\"",
    "date": "Fri, 13 Jun 2025 15:04:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "vY9WxO9W1yUTCSS4pPM6UwFBawk1",
        "email": "manager-user-1749827057876@example.com",
        "name": "Manager User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA1OCwidXNlcl9pZCI6InZZOVd4TzlXMXlVVENTUzRwUE02VXdGQmF3azEiLCJzdWIiOiJ2WTlXeE85VzF5VVRDU1M0cFBNNlV3RkJhd2sxIiwiaWF0IjoxNzQ5ODI3MDU4LCJleHAiOjE3NDk4MzA2NTgsImVtYWlsIjoibWFuYWdlci11c2VyLTE3NDk4MjcwNTc4NzZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFuYWdlci11c2VyLTE3NDk4MjcwNTc4NzZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ZkamDyj6dGuzcbggWjnLEtWyx386t8Z5JfUTKjxsGiQ14eZwSV-KqXNz0GAhOASKSQqM7lCAT4Zh_AjLWrsav7iagHNVJu7mGLy8pGTDhx1UwXBX4N2SwXyM3buk3FilEE9KIDTOsUN5kwIjJCRZbMRgq6sz41VJJjIERnWp8XxCak9McgNxas5YOALHXnfQUL6U8V7TjakGmMmJJv5gNjFDgokrs5g-zjeZnQUdiOgNF0OpcYO49JZbBpwu-z-O0L2ZzOkcME23RQjzpPJmFmISUw9wdXWJYe9NBW7mzmMhlBSUS0_tsUHlWeXAlddEqnmbdoPmCJJgqID2-GfgwA",
        "refreshToken": "AMf-vBxV8y2VMxBaY5hu9OFt2p2LHJkkdB3gDr3madGTQ9T04BZHwkGAlwi5fFP7_OnSPDkEiaqFpirAsv3IiCufrfZCT_g67-5VO9rUMxdG_x06xRzYyKwX5JogvtCLsr2l8C1kTw7MFgPge62A4KKT2VpkF1f55P0VzYYoyudREEU6eQiXKEzjPG9U4u3r42Jhz4sIrtethUXFfzwaA7BhwEziv-glekYFMXB7Z8O9M-X0qY10z_Y",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1355.7 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/memberships (547.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "vY9WxO9W1yUTCSS4pPM6UwFBawk1",
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
    "etag": "W/\"175-hbvaQN1f0hN4XiYZtSgC33awlk4\"",
    "date": "Fri, 13 Jun 2025 15:04:19 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "f777fc5d-d7ee-4654-b4b6-62c88f231875",
      "userId": "vY9WxO9W1yUTCSS4pPM6UwFBawk1",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T15:04:19.721Z",
      "updatedAt": "2025-06-13T15:04:19.721Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 547.7 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/register (1170.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "moderator-user-1749827059780@example.com",
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
    "etag": "W/\"62b-yV7aAye+TUaWh709qd1KrP1CLVY\"",
    "date": "Fri, 13 Jun 2025 15:04:20 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "HN5Re96SwjRa1mwLGsVSZP1xZrq1",
        "email": "moderator-user-1749827059780@example.com",
        "name": "Moderator User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA2MCwidXNlcl9pZCI6IkhONVJlOTZTd2pSYTFtd0xHc1ZTWlAxeFpycTEiLCJzdWIiOiJITjVSZTk2U3dqUmExbXdMR3NWU1pQMXhacnExIiwiaWF0IjoxNzQ5ODI3MDYwLCJleHAiOjE3NDk4MzA2NjAsImVtYWlsIjoibW9kZXJhdG9yLXVzZXItMTc0OTgyNzA1OTc4MEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtb2RlcmF0b3ItdXNlci0xNzQ5ODI3MDU5NzgwQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.h_nUwslTpA5IB9EIeyd8hU1oTRMM2h43ac_UHJncjdFMZslLpA2tO2QXTc3X1bwP-Q0iDcwiiUXZfi6JwGumvEwUB_hrzs2YUGtNMn9KVSvBRSVqSnqhHYBFWsfj_Belv_xwvAKQzPKcwZXU9HVEwhQIDcAsjM58rx7BGwF4XPzQgWhDg1Z73fFC7TDTILugyWNwtCzOscehQE6_a0KsXosIjLw_oijj1S8ZwNoaNqQa8qYZcw6S5clozpaesMVRZG6KYPfwaHoqTBu5OOn2l7xSkxCESAEUBOL_mjk3BL7Qllj_pH74Ilck94X6hK1NSy93VhCBLtoylRRmBdShmQ",
        "refreshToken": "AMf-vBxX-YT9p_O3FN7K9cOiBz0GXelLP_yoP8JhtKJIESm9-0PhVJj8bQAfs0b42m5JNj6rV5lWHcT6qbUPJyNJxwEAcJysj7ioS88eRisJY4amlAUwriLaGFcXk3AOdh5OznwdLh6gxm5yeIz5EeG0IAvblRc5HbQzxsHGBupCLuXLU7RrxsA27cBT_rVGz3wOxK5DoZHjQ7Uo2E3c8AeZDKHPSFfQ6YjTgLUPkb-PdTz7xAdCvy5SBNMD7uR1fu-GWeWfr_ug",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1170.1 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (582.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "HN5Re96SwjRa1mwLGsVSZP1xZrq1",
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
    "etag": "W/\"177-ScoTJx8XxPpWYYo6MAeMuIqL6KA\"",
    "date": "Fri, 13 Jun 2025 15:04:21 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "6ebc0d7d-2383-435a-8304-a129162c228f",
      "userId": "HN5Re96SwjRa1mwLGsVSZP1xZrq1",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "moderator",
      "status": "active",
      "createdAt": "2025-06-13T15:04:21.469Z",
      "updatedAt": "2025-06-13T15:04:21.469Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 582.5 ms  

</details>

<details><summary>📡 Request #7: POST http://localhost:3000/api/auth/register (1507.6ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "volunteer-user-1749827061532@example.com",
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
    "etag": "W/\"62b-i/sn3exER7OfzVZXoRLVuntaifQ\"",
    "date": "Fri, 13 Jun 2025 15:04:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "DXGqcyzaEOSkyd9lrj8gmBFgxck2",
        "email": "volunteer-user-1749827061532@example.com",
        "name": "Volunteer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA2MiwidXNlcl9pZCI6IkRYR3FjeXphRU9Ta3lkOWxyajhnbUJGZ3hjazIiLCJzdWIiOiJEWEdxY3l6YUVPU2t5ZDlscmo4Z21CRmd4Y2syIiwiaWF0IjoxNzQ5ODI3MDYyLCJleHAiOjE3NDk4MzA2NjIsImVtYWlsIjoidm9sdW50ZWVyLXVzZXItMTc0OTgyNzA2MTUzMkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2b2x1bnRlZXItdXNlci0xNzQ5ODI3MDYxNTMyQGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LTARs2waVu9lQeYsfDeDcvCNLnJnWeNFVq21EC1Ozwu8v7jsSdFWkFGNhhJbDF-JGNFuZgiDjc5kNEDsE2EwO0-dRa1O_lxHMFnV28zk1QMxLkJ3-TVzsODjyjt6W0CQo4scqptamCwuMAlXG3TtFkuLKDBjmCmLIeaPlGo6KlPLr_kTmSmgyRHAFRRgDTs7GwBavFlFY0jQDUdxHFRy_vOjSkW32vyNYEEf_0hrX07Hs1aNa_Km_ABoVEXq59-eLyNR8ZmM5zr2d24ROmMDpmE1wp-0Ty_L8yIqj-e98eiGAXz6tT2kOqZVxG4_3XHlcEXxsw_WF4EOUChj4Wfmpg",
        "refreshToken": "AMf-vByOiA6vS_8Q0aKb67Untt-CfuBRwYPnZWKGmTYmdbvzl101KwV__r36mIh0vIU6spLCSf4yVOYPDbyxInaKViQF8N7BlBZHh_TWaW7cMl62O1QyHa51xzsQwso78OPvvGSgq3_VOWivnIDdc4zvrp7Mdk2BpU62R3mTbjwTpEMI_L_i8lYv5XDUu2gKJKzA9B7iMwQuWkzUR6PAdBVo2k6dRxZWDddrYzxpNY5X5cimT18XDrh4h0U3ESYeFVhYtlNBHd90",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1507.6 ms  

</details>

<details><summary>📡 Request #8: POST http://localhost:3000/api/memberships (649.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "DXGqcyzaEOSkyd9lrj8gmBFgxck2",
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
    "etag": "W/\"177-WyMH0lag4hKYR7PQ7NLFHnNxbwo\"",
    "date": "Fri, 13 Jun 2025 15:04:23 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "98e88745-0167-481d-b036-242d48e6e1a9",
      "userId": "DXGqcyzaEOSkyd9lrj8gmBFgxck2",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T15:04:23.631Z",
      "updatedAt": "2025-06-13T15:04:23.631Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 649.6 ms  

</details>

<details><summary>📡 Request #9: POST http://localhost:3000/api/auth/register (1973.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "observer-user-1749827063690@example.com",
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
    "etag": "W/\"611-+gqUrqV1MfdGLi3FawTdeAWwNWA\"",
    "date": "Fri, 13 Jun 2025 15:04:25 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "YXoAxwAFf4MMXEuHa9yln08Lghy2",
        "email": "observer-user-1749827063690@example.com",
        "name": "Observer User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA2NCwidXNlcl9pZCI6IllYb0F4d0FGZjRNTVhFdUhhOXlsbjA4TGdoeTIiLCJzdWIiOiJZWG9BeHdBRmY0TU1YRXVIYTl5bG4wOExnaHkyIiwiaWF0IjoxNzQ5ODI3MDY0LCJleHAiOjE3NDk4MzA2NjQsImVtYWlsIjoib2JzZXJ2ZXItdXNlci0xNzQ5ODI3MDYzNjkwQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm9ic2VydmVyLXVzZXItMTc0OTgyNzA2MzY5MEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.T-Ro4QG0EJ-czDvvtc62aoKzijvjIWUV_rsloSRoEhStIRI0ijZkCBOSKQEPREOkgpFP1XSCEYy1Jj_B3bD7wbPT0ypy1U9cexI1SpRlq0SA-6wXq8o9LQSuCwywM23d7125H-TNt6G9HpcisCpbU1Fk-N3BhS1O5wMe9AiY0vaAxeM4QB3VEEI1uAGdfOgBbvELXekN_2IdYq0O8yFYposaNz_XyG03vwatHH7ca0eI4-Edif8KyjXyaNE_KdLP4hyFHSkajkiMRex1qAALOmLVDMV9wrnA2Ccq-9okr1kkwAX5oCxE5t_MJCw3-0toMLQ6QkMexhKaYzsZzchrIA",
        "refreshToken": "AMf-vBz5Vz0GTsX5K2dIm-TZ4yDPePfZ3RYaZSWxTnjjnAd9of0AnFaTRGk8FcYlrMlbCo-fFeW5wQu11OiVzV3gsYKXSiAdamT_nIA97FIADwLDCrfCNT-FuO9DkNIo4xHujJKwglF9bnZtuA34EYDGmJBepYIawBuejkVCcIS61U0c2s3o9aScn9KUGj2sYjPG6NAzwktJENy2Q_Ej-LsZmkest9jnS_HJwgIo81bqXP370kM9IDs",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1973.1 ms  

</details>

<details><summary>📡 Request #10: POST http://localhost:3000/api/memberships (795.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "YXoAxwAFf4MMXEuHa9yln08Lghy2",
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
    "etag": "W/\"176-zg/22xwhTOT0SGirs9NoLLaEzGA\"",
    "date": "Fri, 13 Jun 2025 15:04:26 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "1ab7b08b-1eb3-4d95-82b3-97374f237937",
      "userId": "YXoAxwAFf4MMXEuHa9yln08Lghy2",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "observer",
      "status": "active",
      "createdAt": "2025-06-13T15:04:26.397Z",
      "updatedAt": "2025-06-13T15:04:26.397Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 795.0 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by organization
**Status:** ✅ PASSED  
**Duration:** 0.72s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5ee3e400-f47d-4a05-9b91-a17daa49948d (714.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "etag": "W/\"625-E5s3/mMw5WCCxRJ9sJLDWntsA48\"",
    "date": "Fri, 13 Jun 2025 15:04:27 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "cdde6e67-d005-4c97-8cbd-b83788bba339",
        "userId": "Kbt3YlJxNLaOzTHFok1kKbeR6uo2",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "member",
        "status": "active",
        "createdAt": "2025-06-13T15:04:13.946Z",
        "updatedAt": "2025-06-13T15:04:13.946Z"
      },
      {
        "id": "71b9ab34-babc-4a12-8c27-5f3bc2edcb1e",
        "userId": "qw7GwmfEybNPPPwrjqrUXqQxB782",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T15:04:17.811Z",
        "updatedAt": "2025-06-13T15:04:17.811Z"
      },
      {
        "id": "f777fc5d-d7ee-4654-b4b6-62c88f231875",
        "userId": "vY9WxO9W1yUTCSS4pPM6UwFBawk1",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T15:04:19.721Z",
        "updatedAt": "2025-06-13T15:04:19.721Z"
      },
      {
        "id": "6ebc0d7d-2383-435a-8304-a129162c228f",
        "userId": "HN5Re96SwjRa1mwLGsVSZP1xZrq1",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T15:04:21.469Z",
        "updatedAt": "2025-06-13T15:04:21.469Z"
      },
      {
        "id": "98e88745-0167-481d-b036-242d48e6e1a9",
        "userId": "DXGqcyzaEOSkyd9lrj8gmBFgxck2",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T15:04:23.631Z",
        "updatedAt": "2025-06-13T15:04:23.631Z"
      },
      {
        "id": "1ab7b08b-1eb3-4d95-82b3-97374f237937",
        "userId": "YXoAxwAFf4MMXEuHa9yln08Lghy2",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T15:04:26.397Z",
        "updatedAt": "2025-06-13T15:04:26.397Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 714.8 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Admin should get memberships by user
**Status:** ✅ PASSED  
**Duration:** 1.06s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (1052.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:28 GMT",
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

**⏱️ Duration:** 1052.8 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships User should get their own memberships
**Status:** ✅ PASSED  
**Duration:** 0.39s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=iC5pYtlFc3YdmDnHrdFZq2bFjW12 (384.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA1MSwidXNlcl9pZCI6ImlDNXBZdGxGYzNZZG1EbkhyZEZacTJiRmpXMTIiLCJzdWIiOiJpQzVwWXRsRmMzWWRtRG5IcmRGWnEyYkZqVzEyIiwiaWF0IjoxNzQ5ODI3MDUxLCJleHAiOjE3NDk4MzA2NTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNzA1MDM2N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI3MDUwMzY3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S1hgAXt6BmJLuseuQMZZxNqXPwOIsUfooOasznPm02M5273Rpt5sR32YD2eEnbd_Aa0FHnN2PQd9bS3CBM5ftmdVboNAJB2xeTExDRpp4z1UoNsKwXDRsBiYvu5mxJOnayBOCA3e4qk4wgmhsh8BAKbrLgEm6leVompBheDxkxCREwHYMcpfi8_dLVhcYJk50IRLnFOyARYoTzly3hEwixnOShkNZhyyNTbpujNXf2CGcfYdaeO7OCNWZoVgtrWYLUXj7IxR7g3F2mZiMkClH6LD2osci7YFlRijz2Wz1ltMQ_M-xXwPTjIMsfw9ZV6wEoKhCH_J4kMBnY8xTgKQJw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:28 GMT",
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

**⏱️ Duration:** 384.3 ms  

</details>


---

### Test: Memberships E2E Tests Get Memberships Should fail without userId or organizationId
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships (402.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
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
    "date": "Fri, 13 Jun 2025 15:04:29 GMT",
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

**⏱️ Duration:** 402.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Get Memberships Regular user should fail to get other user memberships
**Status:** ✅ PASSED  
**Duration:** 0.33s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?userId=tYFy4ecd0TY2fErw9jsp6e1XHvw1 (324.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA1MSwidXNlcl9pZCI6ImlDNXBZdGxGYzNZZG1EbkhyZEZacTJiRmpXMTIiLCJzdWIiOiJpQzVwWXRsRmMzWWRtRG5IcmRGWnEyYkZqVzEyIiwiaWF0IjoxNzQ5ODI3MDUxLCJleHAiOjE3NDk4MzA2NTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNzA1MDM2N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI3MDUwMzY3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S1hgAXt6BmJLuseuQMZZxNqXPwOIsUfooOasznPm02M5273Rpt5sR32YD2eEnbd_Aa0FHnN2PQd9bS3CBM5ftmdVboNAJB2xeTExDRpp4z1UoNsKwXDRsBiYvu5mxJOnayBOCA3e4qk4wgmhsh8BAKbrLgEm6leVompBheDxkxCREwHYMcpfi8_dLVhcYJk50IRLnFOyARYoTzly3hEwixnOShkNZhyyNTbpujNXf2CGcfYdaeO7OCNWZoVgtrWYLUXj7IxR7g3F2mZiMkClH6LD2osci7YFlRijz2Wz1ltMQ_M-xXwPTjIMsfw9ZV6wEoKhCH_J4kMBnY8xTgKQJw"
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
    "date": "Fri, 13 Jun 2025 15:04:29 GMT",
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

**⏱️ Duration:** 324.3 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Admin should get membership by ID
**Status:** ✅ PASSED  
**Duration:** 0.52s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/cdde6e67-d005-4c97-8cbd-b83788bba339 (515.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "etag": "W/\"125-R7u4HutlgdyXnCfmVonNZKHJtbM\"",
    "date": "Fri, 13 Jun 2025 15:04:29 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": {
      "id": "cdde6e67-d005-4c97-8cbd-b83788bba339",
      "userId": "Kbt3YlJxNLaOzTHFok1kKbeR6uo2",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T15:04:13.946Z",
      "updatedAt": "2025-06-13T15:04:13.946Z"
    },
    "language": "en"
  }
}
```

**⏱️ Duration:** 515.4 ms  

</details>


---

### Test: Memberships E2E Tests Get Membership by ID Should fail with invalid membership ID
**Status:** ✅ PASSED  
**Duration:** 0.61s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships/invalid-id (610.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
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
    "date": "Fri, 13 Jun 2025 15:04:30 GMT",
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

**⏱️ Duration:** 610.9 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Update Member Role Admin should update member role successfully
**Status:** ✅ PASSED  
**Duration:** 0.62s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/cdde6e67-d005-4c97-8cbd-b83788bba339 (614.8ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
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
    "etag": "W/\"179-BNq0cLEr0ef1lwupcLkOjDo3LXY\"",
    "date": "Fri, 13 Jun 2025 15:04:31 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Member role updated to manager",
    "data": {
      "id": "cdde6e67-d005-4c97-8cbd-b83788bba339",
      "userId": "Kbt3YlJxNLaOzTHFok1kKbeR6uo2",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "manager",
      "status": "active",
      "createdAt": "2025-06-13T15:04:13.946Z",
      "updatedAt": "2025-06-13T15:04:30.991Z"
    },
    "messageKey": "memberships.role_updated",
    "language": "en"
  }
}
```

**⏱️ Duration:** 614.8 ms  

</details>


---

### Test: Memberships E2E Tests Update Member Role Should fail with invalid role
**Status:** ✅ PASSED  
**Duration:** 0.46s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/cdde6e67-d005-4c97-8cbd-b83788bba339 (457.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
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
    "date": "Fri, 13 Jun 2025 15:04:31 GMT",
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

**⏱️ Duration:** 457.9 ms  
**❌ Error:** Request failed with status code 400  

</details>


---

### Test: Memberships E2E Tests Update Member Role Regular user should fail to update role without permissions
**Status:** ✅ PASSED  
**Duration:** 0.49s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: PUT http://localhost:3000/api/memberships/cdde6e67-d005-4c97-8cbd-b83788bba339 (483.4ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA1MSwidXNlcl9pZCI6ImlDNXBZdGxGYzNZZG1EbkhyZEZacTJiRmpXMTIiLCJzdWIiOiJpQzVwWXRsRmMzWWRtRG5IcmRGWnEyYkZqVzEyIiwiaWF0IjoxNzQ5ODI3MDUxLCJleHAiOjE3NDk4MzA2NTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNzA1MDM2N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI3MDUwMzY3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S1hgAXt6BmJLuseuQMZZxNqXPwOIsUfooOasznPm02M5273Rpt5sR32YD2eEnbd_Aa0FHnN2PQd9bS3CBM5ftmdVboNAJB2xeTExDRpp4z1UoNsKwXDRsBiYvu5mxJOnayBOCA3e4qk4wgmhsh8BAKbrLgEm6leVompBheDxkxCREwHYMcpfi8_dLVhcYJk50IRLnFOyARYoTzly3hEwixnOShkNZhyyNTbpujNXf2CGcfYdaeO7OCNWZoVgtrWYLUXj7IxR7g3F2mZiMkClH6LD2osci7YFlRijz2Wz1ltMQ_M-xXwPTjIMsfw9ZV6wEoKhCH_J4kMBnY8xTgKQJw"
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
    "date": "Fri, 13 Jun 2025 15:04:32 GMT",
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

**⏱️ Duration:** 483.4 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/auth/register (997.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "remove-user-1749827072085@example.com",
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
    "etag": "W/\"60d-BWwyx8etorLayO8zAEwdKzOxJf8\"",
    "date": "Fri, 13 Jun 2025 15:04:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "H0UsKoscHjUqjsBCUPk8s33TokN2",
        "email": "remove-user-1749827072085@example.com",
        "name": "User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA3MiwidXNlcl9pZCI6IkgwVXNLb3NjSGpVcWpzQkNVUGs4czMzVG9rTjIiLCJzdWIiOiJIMFVzS29zY0hqVXFqc0JDVVBrOHMzM1Rva04yIiwiaWF0IjoxNzQ5ODI3MDcyLCJleHAiOjE3NDk4MzA2NzIsImVtYWlsIjoicmVtb3ZlLXVzZXItMTc0OTgyNzA3MjA4NUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyZW1vdmUtdXNlci0xNzQ5ODI3MDcyMDg1QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.PklyaWJYBuCeab0_ztvJCOYxCT9_p822WP6wzWhjzS302YoqgKzdbD7kOFp-8mIVVsCEGaU3unt_b_b4QNMhKxSq6ws4NP2Iq_HLJ4FIsvayVZneY3casrvkFSEb6OlU-gGaC4Tke0rYj2OiVWs1tVj4MkqDvNVnM9a9WmXSOZ7_s-sMv-UjuqI94CDQCJqBWvAGfr6Bmv_3i7P5fTLFOyrYyBlnzSmCMP-N_y1hemgDODgJ_SynhykOByH3Zoh9uTUcuXMY8ZAjXeMm_zMwXnw3hDQCFmD6V5Jmr6eeZLYTuFuRnPTkgXt5sugKBfPXI7qgRAGYgogz0AHEC5sVTQ",
        "refreshToken": "AMf-vBzk_Yc_Mh5SPN4vgaSXn1eZ8KXTYdH-mCuRagLztw7gzoIlgfDqnC49azhEvg5TrkxKrOQvKWYh4x_NfROp5T6W-zVMomk311IKy22pr2Q1wJUH9d3gbRFXlKToSxSUnGIWaWVIuUAEvNgIoePLZM_PUSs7bHvYVP7zE1BmBqyR3MkQ-auEtXucUNWDLxYYEPmqbUmi9joHUKhjYNXohaenQZossRAttzkuVE-_3OK6z2xmZ98",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 997.7 ms  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/memberships (565.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "H0UsKoscHjUqjsBCUPk8s33TokN2",
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
    "etag": "W/\"177-seaOB2yCJsoTYy3AHEWvJxOltLU\"",
    "date": "Fri, 13 Jun 2025 15:04:33 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "a1b8880c-72b9-4bf2-a41d-174f281f80e4",
      "userId": "H0UsKoscHjUqjsBCUPk8s33TokN2",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T15:04:33.585Z",
      "updatedAt": "2025-06-13T15:04:33.585Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 565.1 ms  

</details>


---

### Test: Memberships E2E Tests Remove Member Admin should remove member successfully
**Status:** ✅ PASSED  
**Duration:** 1.14s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/a1b8880c-72b9-4bf2-a41d-174f281f80e4 (651.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:34 GMT",
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

**⏱️ Duration:** 651.3 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/a1b8880c-72b9-4bf2-a41d-174f281f80e4 (483.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
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
    "date": "Fri, 13 Jun 2025 15:04:34 GMT",
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

**⏱️ Duration:** 483.3 ms  
**❌ Error:** Request failed with status code 404  

</details>


---

### Test: Memberships E2E Tests Remove Member Regular user should fail to remove member without permissions
**Status:** ✅ PASSED  
**Duration:** 2.31s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1199.1ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "another-remove-user-1749827074792@example.com",
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
    "etag": "W/\"647-9nx/XCMNhGqBJ0MAX+0ZUjfX3VU\"",
    "date": "Fri, 13 Jun 2025 15:04:35 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "N2HCa1pHpjUl8iRo4qlb7EtEwdO2",
        "email": "another-remove-user-1749827074792@example.com",
        "name": "Another User for Removal",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA3NSwidXNlcl9pZCI6Ik4ySENhMXBIcGpVbDhpUm80cWxiN0V0RXdkTzIiLCJzdWIiOiJOMkhDYTFwSHBqVWw4aVJvNHFsYjdFdEV3ZE8yIiwiaWF0IjoxNzQ5ODI3MDc1LCJleHAiOjE3NDk4MzA2NzUsImVtYWlsIjoiYW5vdGhlci1yZW1vdmUtdXNlci0xNzQ5ODI3MDc0NzkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFub3RoZXItcmVtb3ZlLXVzZXItMTc0OTgyNzA3NDc5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YqDdfurftuW_PddEQDqgvv0cTw5PbfFkA9iPQ_JwGsapvvWFDzCkJxGiE-5B6UhA4PBIUo3NFnijluxbeZ0H3D1zEu3CSuaDRqmf1mdF4EW3ONK6qmT7DXJ2th7I5LT3h2JwQVrZgWdhfoFmXI1Dc4XNDBwOg98PsM7SE-xunry8SNk5sNquiI80IpK9pZHW6Inc4oYMAE-Y08yEChLdm3IDdWaV3Ris7RNJ3M7ZgjNW9lNuSQzir8H4o1mrVttUtDYO6RcFiGQMlbHVUG4xPyrkdbhmfBDxJbmhGvi9YPGoPtsEzNMmfrKMtSj-9eol_UsD9aIznbz_6HCW9VjFEw",
        "refreshToken": "AMf-vBxtSysc90gLVHDEBNdCGQottSSBW9rXkEfMdslGVrHT0zSKcSxPlkCzUXch5weIuz-R3f8W4mWtAqbKe_9-o3knLpJQhavFKeWwRn9TxEixpN6DUW0QKhaMH8dK36g3mbQ5rk6jehqnjZHMYn2Qf2-q4TZHHrEzwmAzqyu70YemOxVCvu_HXaz3x6_3878m8e6dtCs4FH3YuwyUa9lXakBAh1SNGT-8fBAjyfZP8EpUGxtoVFqvh356jlyVDCk56EIHwdMu",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1199.1 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (542.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "N2HCa1pHpjUl8iRo4qlb7EtEwdO2",
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
    "etag": "W/\"177-IwUIIQAh8noNvdLgQ7iPyPlbexQ\"",
    "date": "Fri, 13 Jun 2025 15:04:36 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "3d525af4-f8da-452e-87bd-e8d97d98b4b3",
      "userId": "N2HCa1pHpjUl8iRo4qlb7EtEwdO2",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "volunteer",
      "status": "active",
      "createdAt": "2025-06-13T15:04:36.472Z",
      "updatedAt": "2025-06-13T15:04:36.472Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 542.6 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/memberships/3d525af4-f8da-452e-87bd-e8d97d98b4b3 (561.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA1MSwidXNlcl9pZCI6ImlDNXBZdGxGYzNZZG1EbkhyZEZacTJiRmpXMTIiLCJzdWIiOiJpQzVwWXRsRmMzWWRtRG5IcmRGWnEyYkZqVzEyIiwiaWF0IjoxNzQ5ODI3MDUxLCJleHAiOjE3NDk4MzA2NTEsImVtYWlsIjoidGVzdC11c2VyLW1lbWJlcnNoaXAtMTc0OTgyNzA1MDM2N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0LXVzZXItbWVtYmVyc2hpcC0xNzQ5ODI3MDUwMzY3QGV4YW1wbGUuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.S1hgAXt6BmJLuseuQMZZxNqXPwOIsUfooOasznPm02M5273Rpt5sR32YD2eEnbd_Aa0FHnN2PQd9bS3CBM5ftmdVboNAJB2xeTExDRpp4z1UoNsKwXDRsBiYvu5mxJOnayBOCA3e4qk4wgmhsh8BAKbrLgEm6leVompBheDxkxCREwHYMcpfi8_dLVhcYJk50IRLnFOyARYoTzly3hEwixnOShkNZhyyNTbpujNXf2CGcfYdaeO7OCNWZoVgtrWYLUXj7IxR7g3F2mZiMkClH6LD2osci7YFlRijz2Wz1ltMQ_M-xXwPTjIMsfw9ZV6wEoKhCH_J4kMBnY8xTgKQJw"
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
    "date": "Fri, 13 Jun 2025 15:04:37 GMT",
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

**⏱️ Duration:** 561.6 ms  
**❌ Error:** Request failed with status code 403  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/register (1052.7ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749827077100@example.com",
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
    "etag": "W/\"630-BRwESp14bvURpSMkaF/QTiZJdBA\"",
    "date": "Fri, 13 Jun 2025 15:04:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "0EG9fomsUsdCT35aqMl7kudidPa2",
        "email": "self-leave-user-1749827077100@example.com",
        "name": "Self Leave User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA3NywidXNlcl9pZCI6IjBFRzlmb21zVXNkQ1QzNWFxTWw3a3VkaWRQYTIiLCJzdWIiOiIwRUc5Zm9tc1VzZENUMzVhcU1sN2t1ZGlkUGEyIiwiaWF0IjoxNzQ5ODI3MDc3LCJleHAiOjE3NDk4MzA2NzcsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjcwNzcxMDBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjcwNzcxMDBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XTGLaX5gRovIat0ctS-oaCfRzPRm2Xbzl_xaBrg-XL-itanb_QtwwCQzrYDOZvieY4tQQlNX60m9T4_gSLGWOAOop9k_BnR124XIQa-Rh7fEcKwWK_PvR3nPcsH8rSwieu--dk6ODE4aessx3cF_Dao-DeQ4nTRsZfPz0of_kxBqRymoaM6QTJOjTcAUSScL0DK-rJHVRAUK6y8iPMYSPUSrbNb2bjlROa-WsNOe9FB_lHr02tA4MfTYuKZUYIT4W0TnEqIBoEn5dDlyFpEUXcW2dA_ZmIbvHk7ZLY_HvqcCkRiCc1KSWu1o9aMnGkRqgsw3TrnHwZjqsmvfU8cD4Q",
        "refreshToken": "AMf-vBwb3Gcrjh9xuMaRQzmLrvXdkPsVx6fGrQ7Q1b_oEnsYS9IyNWF-ew-N7I4bzU1LSI4VY-3wkg8to3yrQsLm076B2TljlN9yxJIjNaB9qpW4j8MAlOE3X_l4eLjrhVkBwhBEmbUDyIKhGd9gHO4gCAvkkoDYosabSNAmEzgxjOC10lJ7z_ZaIih7qszX8ojfi_qqzsOsRJt5V7x9vrI5ckjt9B5FEq5iPoMuJhLJbOH3_xcKktg8Es1l1GxF5T7d_BH3Nou1",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1052.7 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/auth/login (330.8ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "self-leave-user-1749827077100@example.com",
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
    "etag": "W/\"614-ctRQzBEEhPzPacvfYiX+IhncHjk\"",
    "date": "Fri, 13 Jun 2025 15:04:38 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "0EG9fomsUsdCT35aqMl7kudidPa2",
        "email": "self-leave-user-1749827077100@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA3OCwidXNlcl9pZCI6IjBFRzlmb21zVXNkQ1QzNWFxTWw3a3VkaWRQYTIiLCJzdWIiOiIwRUc5Zm9tc1VzZENUMzVhcU1sN2t1ZGlkUGEyIiwiaWF0IjoxNzQ5ODI3MDc4LCJleHAiOjE3NDk4MzA2NzgsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjcwNzcxMDBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjcwNzcxMDBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.bLK1PMiT_1_8wGpLM36-hbl_6RtYNIxSLPqOekxumlqUCIEY_cQ6hh9AUJ_5fH3OveNo11d7_j0UOoNpZNt9mCjtwnKKXolsm_rTjvak3HKvU_m-sCe4xmRRirQx3KVmLlYOV3B38MpTcznh1GLoZYcCVWPHJjuWTSSZf8pySZbEBInZ6oEkFJSDZE7U_30R4dK5A6oG9NmRAUOathJrroNhAQKVBYr45MDFQ05HwF692SvoraewkUa7TnmmWIDuKpYtMjkN2GT_LjbryZ73q6MzGw2s7WZyB5iMbofWPxYDDFzzGZe_UXnvAcqRDc73PcFb4-SoawdKGg2hkwrTLA",
        "refreshToken": "AMf-vBzbfvqMUGGD2MY2fEZ8iG_VsSnlr99KYrovL9f_AxrT9hJxv-V_OkUnUf_vW7eyKmmDTEdmLQhK_F6pOevT1Q-hZd7qKp0KEOuH4jVSuLChfuRKZXik_lmHDOaIN9Ugp2AzN4sNwNTFVp5_FlPMWpRoORWHwbW75ZnJyWs1YoadKkGPESaUVZMnGNhIPzNATwC2SuQI_UERJN3k1v0hSPyNPGXh76jdJN91y4cJrBwMBt9goFAw33s3PFgxkWhqzGd0-Oxt",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 330.8 ms  

</details>

<details><summary>📡 Request #6: POST http://localhost:3000/api/memberships (567.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "0EG9fomsUsdCT35aqMl7kudidPa2",
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
    "etag": "W/\"174-XH1FCNKrNOcPLyBL1BMQSAS48m8\"",
    "date": "Fri, 13 Jun 2025 15:04:39 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Membership created successfully",
    "data": {
      "id": "7da13710-d4ae-4a80-9913-75a01e836dad",
      "userId": "0EG9fomsUsdCT35aqMl7kudidPa2",
      "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
      "role": "member",
      "status": "active",
      "createdAt": "2025-06-13T15:04:38.988Z",
      "updatedAt": "2025-06-13T15:04:38.988Z"
    },
    "messageKey": "memberships.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 567.7 ms  

</details>


---

### Test: Memberships E2E Tests Self-Leave Organization User should be able to leave organization (remove own membership)
**Status:** ✅ PASSED  
**Duration:** 1.05s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: DELETE http://localhost:3000/api/memberships/7da13710-d4ae-4a80-9913-75a01e836dad (522.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA3OCwidXNlcl9pZCI6IjBFRzlmb21zVXNkQ1QzNWFxTWw3a3VkaWRQYTIiLCJzdWIiOiIwRUc5Zm9tc1VzZENUMzVhcU1sN2t1ZGlkUGEyIiwiaWF0IjoxNzQ5ODI3MDc4LCJleHAiOjE3NDk4MzA2NzgsImVtYWlsIjoic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjcwNzcxMDBAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2VsZi1sZWF2ZS11c2VyLTE3NDk4MjcwNzcxMDBAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.bLK1PMiT_1_8wGpLM36-hbl_6RtYNIxSLPqOekxumlqUCIEY_cQ6hh9AUJ_5fH3OveNo11d7_j0UOoNpZNt9mCjtwnKKXolsm_rTjvak3HKvU_m-sCe4xmRRirQx3KVmLlYOV3B38MpTcznh1GLoZYcCVWPHJjuWTSSZf8pySZbEBInZ6oEkFJSDZE7U_30R4dK5A6oG9NmRAUOathJrroNhAQKVBYr45MDFQ05HwF692SvoraewkUa7TnmmWIDuKpYtMjkN2GT_LjbryZ73q6MzGw2s7WZyB5iMbofWPxYDDFzzGZe_UXnvAcqRDc73PcFb4-SoawdKGg2hkwrTLA"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:39 GMT",
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

**⏱️ Duration:** 522.2 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships/7da13710-d4ae-4a80-9913-75a01e836dad (523.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
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
    "date": "Fri, 13 Jun 2025 15:04:40 GMT",
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

**⏱️ Duration:** 523.5 ms  
**❌ Error:** Request failed with status code 404  

</details>

<details><summary>📡 Request #3: POST http://localhost:3000/api/auth/register (1316.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749827080106@example.com",
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
    "etag": "W/\"630-LnNGOvNAiGcWR7wXCsK9EiV+z10\"",
    "date": "Fri, 13 Jun 2025 15:04:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "IBFbrZWR8NaZkFFcY34eJyDCjPm2",
        "email": "other-org-admin-1749827080106@example.com",
        "name": "Other Org Admin",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA4MCwidXNlcl9pZCI6IklCRmJyWldSOE5hWmtGRmNZMzRlSnlEQ2pQbTIiLCJzdWIiOiJJQkZiclpXUjhOYVprRkZjWTM0ZUp5RENqUG0yIiwiaWF0IjoxNzQ5ODI3MDgwLCJleHAiOjE3NDk4MzA2ODAsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Np-Zq8Ea4FgAX5DHo173p3HNFPW-jI6XuyrNZmYCWxZhkPnVh_VDMAMN8fiT2Cu9LWyDnmXDy7C659M4oXu3juSLBeaVWLyeJ9N0kSlSxfVVPtd8AF6vTQAQRzfOFfrfuti5ms-xPvN8xj5aX3KujzUFCmEP9xvRimduVf-niWDW_w0yb01PjjHUnZDnDfQ0eG9TEa_9KESWZ7g-hXZLgABBwQAGxN9V7iqN58H2Qon6FsIlMGMkQu7di8XvSWVMXMe4BErkwAL8dW86tokJc7AHQFno0Swtazf81BsCrYtCpG-jSvVQ92IU5JuExElN6UgHsY9xPUqbGR_xNlEqog",
        "refreshToken": "AMf-vBwRRzvhVdH7Wg8KTqYwPiidSjlCBCZEsM2TWaOFwKjTii6bo1g3POKZVvo34X1w40N0SE-AP8S_3dtqz7O0pRuuSYOiXL4W2cvYvcmrUU5YDOp-0Md_pWT_8I49Pb5yhhMOfFkESgjjrOtKT_FfQIRd7zS_a3thYgEhaiBRy5CNmqqqb9fNtcjvc1_FPMUH51vFEaEuCyV5d_sDx69JRjOz858O_zKNlsSJ2X06gbrO6sKBjionUX6oGonGGlyn7oDxbTnl",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1316.5 ms  

</details>

<details><summary>📡 Request #4: POST http://localhost:3000/api/auth/login (268.5ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "other-org-admin-1749827080106@example.com",
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
    "etag": "W/\"614-4ioEpgHbYb8jOzfbcBQAAPdgi6s\"",
    "date": "Fri, 13 Jun 2025 15:04:41 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "IBFbrZWR8NaZkFFcY34eJyDCjPm2",
        "email": "other-org-admin-1749827080106@example.com",
        "role": "user",
        "isSuperAdmin": false
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA4MSwidXNlcl9pZCI6IklCRmJyWldSOE5hWmtGRmNZMzRlSnlEQ2pQbTIiLCJzdWIiOiJJQkZiclpXUjhOYVprRkZjWTM0ZUp5RENqUG0yIiwiaWF0IjoxNzQ5ODI3MDgxLCJleHAiOjE3NDk4MzA2ODEsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CgDCRS7NYD9aTGkdkgZf2fbODbA7TtDLrY-Bv9zQKi7h9gJhTp3T-lWjOuXwLMQa2nfAU0qWan60NcfB6mfVAWE1lXBI5hgSJ-XP4RmbIAH2FnWWmNodq3pGAbziDzrmBKbWRHlIOKFw_2u1crOFFhHKWurURtX5TuY4bjPXFAz8k6guLCH8ZGtrJHDlU0W9SBveqwDLpB7b6V89ke7ENH81qq2QZE-M5gynupcVcMpZRcRFnjQZjnZxYZClBWA2AauKGd7GTYzzzJQ5abGbNrunyPn3deRVMLL0buxUJOOFHsmo-W2RDODLcBcr8_4oMLusQY5qz95qhSN1NyrM9A",
        "refreshToken": "AMf-vBzePcPU8kN2AoSrQdUGZo8HpXNq-wqcJvHsODXLEiwLpS4YQ3CdW4DE2QGNJFcqDtscH8WY1kgsaMxMioHgJ-_bUbiJ45u0HFkQ8SLXcdLExFoCQcn1b96odxoV2RggzdAyGV_iO14VeGHPP4m_ZXOvls_UZJjDwFchP9xhc7g0dA0Dggf5LTeisnP6MKI76rdFBLwhK_kS0AWygqkqLw5lS-bJLiCfRwTl8uxYxn-fGdTs_OcEp0pgqS1IqIzbNVSKSZDh",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 268.5 ms  

</details>

<details><summary>📡 Request #5: POST http://localhost:3000/api/organizations (540.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA4MSwidXNlcl9pZCI6IklCRmJyWldSOE5hWmtGRmNZMzRlSnlEQ2pQbTIiLCJzdWIiOiJJQkZiclpXUjhOYVprRkZjWTM0ZUp5RENqUG0yIiwiaWF0IjoxNzQ5ODI3MDgxLCJleHAiOjE3NDk4MzA2ODEsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CgDCRS7NYD9aTGkdkgZf2fbODbA7TtDLrY-Bv9zQKi7h9gJhTp3T-lWjOuXwLMQa2nfAU0qWan60NcfB6mfVAWE1lXBI5hgSJ-XP4RmbIAH2FnWWmNodq3pGAbziDzrmBKbWRHlIOKFw_2u1crOFFhHKWurURtX5TuY4bjPXFAz8k6guLCH8ZGtrJHDlU0W9SBveqwDLpB7b6V89ke7ENH81qq2QZE-M5gynupcVcMpZRcRFnjQZjnZxYZClBWA2AauKGd7GTYzzzJQ5abGbNrunyPn3deRVMLL0buxUJOOFHsmo-W2RDODLcBcr8_4oMLusQY5qz95qhSN1NyrM9A"
  },
  "data": {
    "name": "Other Org 1749827081691",
    "description": "Other organization for cross-access test",
    "email": "other-org-1749827081691@example.com",
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
    "etag": "W/\"229-ceY/j8sS9I8zhQTeWRdBm8FB+Ks\"",
    "date": "Fri, 13 Jun 2025 15:04:42 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "Organization created successfully",
    "data": {
      "id": "be3055dd-83da-4a71-94bd-06f423ba4aa3",
      "name": "Other Org 1749827081691",
      "type": "shelter",
      "description": "Other organization for cross-access test",
      "logo": null,
      "address": "789 Other Org Boulevard",
      "phone": "+1122334455",
      "email": "other-org-1749827081691@example.com",
      "status": "active",
      "defaultLanguage": "en",
      "createdBy": "IBFbrZWR8NaZkFFcY34eJyDCjPm2",
      "createdAt": "2025-06-13T15:04:42.104Z",
      "updatedAt": "2025-06-13T15:04:42.104Z"
    },
    "messageKey": "organizations.created",
    "language": "en"
  }
}
```

**⏱️ Duration:** 540.9 ms  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not access memberships from other organizations
**Status:** ✅ PASSED  
**Duration:** 0.41s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5ee3e400-f47d-4a05-9b91-a17daa49948d (404.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA4MSwidXNlcl9pZCI6IklCRmJyWldSOE5hWmtGRmNZMzRlSnlEQ2pQbTIiLCJzdWIiOiJJQkZiclpXUjhOYVprRkZjWTM0ZUp5RENqUG0yIiwiaWF0IjoxNzQ5ODI3MDgxLCJleHAiOjE3NDk4MzA2ODEsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CgDCRS7NYD9aTGkdkgZf2fbODbA7TtDLrY-Bv9zQKi7h9gJhTp3T-lWjOuXwLMQa2nfAU0qWan60NcfB6mfVAWE1lXBI5hgSJ-XP4RmbIAH2FnWWmNodq3pGAbziDzrmBKbWRHlIOKFw_2u1crOFFhHKWurURtX5TuY4bjPXFAz8k6guLCH8ZGtrJHDlU0W9SBveqwDLpB7b6V89ke7ENH81qq2QZE-M5gynupcVcMpZRcRFnjQZjnZxYZClBWA2AauKGd7GTYzzzJQ5abGbNrunyPn3deRVMLL0buxUJOOFHsmo-W2RDODLcBcr8_4oMLusQY5qz95qhSN1NyrM9A"
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
    "date": "Fri, 13 Jun 2025 15:04:42 GMT",
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

**⏱️ Duration:** 404.9 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Organization admin should not invite users to other organizations
**Status:** ✅ PASSED  
**Duration:** 1.57s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: POST http://localhost:3000/api/auth/register (1023.2ms)</summary>

**📤 Request:**
```json
{
  "data": {
    "email": "cross-org-invite-1749827082643@example.com",
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
    "etag": "W/\"639-/rHyddL0JwnZX9D6ZkIru+77EMM\"",
    "date": "Fri, 13 Jun 2025 15:04:43 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "1p4DmOaNMHhHFNBu1yNred4EXrj2",
        "email": "cross-org-invite-1749827082643@example.com",
        "name": "Cross Org Invite User",
        "role": "user"
      },
      "tokens": {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA4MywidXNlcl9pZCI6IjFwNERtT2FOTUhoSEZOQnUxeU5yZWQ0RVhyajIiLCJzdWIiOiIxcDREbU9hTk1IaEhGTkJ1MXlOcmVkNEVYcmoyIiwiaWF0IjoxNzQ5ODI3MDgzLCJleHAiOjE3NDk4MzA2ODMsImVtYWlsIjoiY3Jvc3Mtb3JnLWludml0ZS0xNzQ5ODI3MDgyNjQzQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNyb3NzLW9yZy1pbnZpdGUtMTc0OTgyNzA4MjY0M0BleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.UddrvOZmw7Wa-GJdkAfzZ147q4ySYVLX-v6aGpaI622EHoCVeBkjY7Wza9wytIKXXdzhUdVmE0W_idzUCpCMjlQWztCMFA4eCSSbdVak7cuVlImwwA-fsS3HwgqTDkB5Dj_YDnneinDQ86i0uYbxA_-nTAetOCqIhe5BqnvXjMy_TkZi8B8gE7-U4lhe4UyAWe2izPWOfvKbSMiqHIpFx8evO4TfGSOsIaB29PLIaFsCIdcA30NfUYONeBIX3JMx-QpY-iva1tPLpQewJAN5X6b4GDPOEC3a-IjQntiC0SFtLU5CyIBs_6eJweA1tGOsWV0WbGxcKnJ6bt8D0iAXVA",
        "refreshToken": "AMf-vBza3_8bpXUZ-y-mMwjj5GpyON_ByCytm9AOlWakqY7IxkgOJiEpzZBrRV3tRJOYlIlwrchd-51aqkVov8RsY8UrFevlHGtWwWhkueW7pNIi84LCzJ7MQK8sJUjMg4XNVon-P6x35BUzCK8bwNoSVHTawttZ5rkR1DSUFa490MRfAvskg9qjv7AIUw6w_VopXYep925kTYJQYywAQZv50-lAyogNl5vZCxbHGcc4fA7WIJ1VUv1EI9qdXyBj3jQEvl7aMee3",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.user_registered_successfully",
    "language": "en"
  }
}
```

**⏱️ Duration:** 1023.2 ms  

</details>

<details><summary>📡 Request #2: POST http://localhost:3000/api/memberships (546.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0OTgyNzA4MSwidXNlcl9pZCI6IklCRmJyWldSOE5hWmtGRmNZMzRlSnlEQ2pQbTIiLCJzdWIiOiJJQkZiclpXUjhOYVprRkZjWTM0ZUp5RENqUG0yIiwiaWF0IjoxNzQ5ODI3MDgxLCJleHAiOjE3NDk4MzA2ODEsImVtYWlsIjoib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsib3RoZXItb3JnLWFkbWluLTE3NDk4MjcwODAxMDZAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CgDCRS7NYD9aTGkdkgZf2fbODbA7TtDLrY-Bv9zQKi7h9gJhTp3T-lWjOuXwLMQa2nfAU0qWan60NcfB6mfVAWE1lXBI5hgSJ-XP4RmbIAH2FnWWmNodq3pGAbziDzrmBKbWRHlIOKFw_2u1crOFFhHKWurURtX5TuY4bjPXFAz8k6guLCH8ZGtrJHDlU0W9SBveqwDLpB7b6V89ke7ENH81qq2QZE-M5gynupcVcMpZRcRFnjQZjnZxYZClBWA2AauKGd7GTYzzzJQ5abGbNrunyPn3deRVMLL0buxUJOOFHsmo-W2RDODLcBcr8_4oMLusQY5qz95qhSN1NyrM9A"
  },
  "data": {
    "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
    "userId": "1p4DmOaNMHhHFNBu1yNred4EXrj2",
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
    "date": "Fri, 13 Jun 2025 15:04:44 GMT",
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

**⏱️ Duration:** 546.2 ms  
**❌ Error:** Request failed with status code 403  

</details>


---

### Test: Memberships E2E Tests Cross-Organization Access Validation Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.11s  

#### 🌐 HTTP Requests & Responses

<details><summary>📡 Request #1: GET http://localhost:3000/api/memberships?organizationId=5ee3e400-f47d-4a05-9b91-a17daa49948d (548.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "etag": "W/\"727-K05tpMwmm46U2Wv+NapOmmENtqg\"",
    "date": "Fri, 13 Jun 2025 15:04:44 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "data": {
    "success": true,
    "data": [
      {
        "id": "71b9ab34-babc-4a12-8c27-5f3bc2edcb1e",
        "userId": "qw7GwmfEybNPPPwrjqrUXqQxB782",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "admin",
        "status": "active",
        "createdAt": "2025-06-13T15:04:17.811Z",
        "updatedAt": "2025-06-13T15:04:17.811Z"
      },
      {
        "id": "f777fc5d-d7ee-4654-b4b6-62c88f231875",
        "userId": "vY9WxO9W1yUTCSS4pPM6UwFBawk1",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T15:04:19.721Z",
        "updatedAt": "2025-06-13T15:04:19.721Z"
      },
      {
        "id": "6ebc0d7d-2383-435a-8304-a129162c228f",
        "userId": "HN5Re96SwjRa1mwLGsVSZP1xZrq1",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "moderator",
        "status": "active",
        "createdAt": "2025-06-13T15:04:21.469Z",
        "updatedAt": "2025-06-13T15:04:21.469Z"
      },
      {
        "id": "98e88745-0167-481d-b036-242d48e6e1a9",
        "userId": "DXGqcyzaEOSkyd9lrj8gmBFgxck2",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T15:04:23.631Z",
        "updatedAt": "2025-06-13T15:04:23.631Z"
      },
      {
        "id": "1ab7b08b-1eb3-4d95-82b3-97374f237937",
        "userId": "YXoAxwAFf4MMXEuHa9yln08Lghy2",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "observer",
        "status": "active",
        "createdAt": "2025-06-13T15:04:26.397Z",
        "updatedAt": "2025-06-13T15:04:26.397Z"
      },
      {
        "id": "cdde6e67-d005-4c97-8cbd-b83788bba339",
        "userId": "Kbt3YlJxNLaOzTHFok1kKbeR6uo2",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "manager",
        "status": "active",
        "createdAt": "2025-06-13T15:04:13.946Z",
        "updatedAt": "2025-06-13T15:04:30.991Z"
      },
      {
        "id": "3d525af4-f8da-452e-87bd-e8d97d98b4b3",
        "userId": "N2HCa1pHpjUl8iRo4qlb7EtEwdO2",
        "organizationId": "5ee3e400-f47d-4a05-9b91-a17daa49948d",
        "role": "volunteer",
        "status": "active",
        "createdAt": "2025-06-13T15:04:36.472Z",
        "updatedAt": "2025-06-13T15:04:36.472Z"
      }
    ],
    "pagination": {}
  }
}
```

**⏱️ Duration:** 548.1 ms  

</details>

<details><summary>📡 Request #2: GET http://localhost:3000/api/memberships?organizationId=be3055dd-83da-4a71-94bd-06f423ba4aa3 (562.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:45 GMT",
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

**⏱️ Duration:** 562.7 ms  

</details>

<details><summary>📡 Request #3: DELETE http://localhost:3000/api/organizations/be3055dd-83da-4a71-94bd-06f423ba4aa3 (943.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:46 GMT",
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

**⏱️ Duration:** 943.2 ms  

</details>

<details><summary>📡 Request #4: DELETE http://localhost:3000/api/memberships/cdde6e67-d005-4c97-8cbd-b83788bba339 (541.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:46 GMT",
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

**⏱️ Duration:** 541.3 ms  

</details>

<details><summary>📡 Request #5: DELETE http://localhost:3000/api/memberships/71b9ab34-babc-4a12-8c27-5f3bc2edcb1e (694.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:47 GMT",
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

**⏱️ Duration:** 694.6 ms  

</details>

<details><summary>📡 Request #6: DELETE http://localhost:3000/api/memberships/f777fc5d-d7ee-4654-b4b6-62c88f231875 (658.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:48 GMT",
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

**⏱️ Duration:** 658.0 ms  

</details>

<details><summary>📡 Request #7: DELETE http://localhost:3000/api/memberships/6ebc0d7d-2383-435a-8304-a129162c228f (652.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:48 GMT",
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

**⏱️ Duration:** 652.3 ms  

</details>

<details><summary>📡 Request #8: DELETE http://localhost:3000/api/memberships/98e88745-0167-481d-b036-242d48e6e1a9 (476.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:49 GMT",
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

**⏱️ Duration:** 476.1 ms  

</details>

<details><summary>📡 Request #9: DELETE http://localhost:3000/api/memberships/1ab7b08b-1eb3-4d95-82b3-97374f237937 (568.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:49 GMT",
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

**⏱️ Duration:** 568.3 ms  

</details>

<details><summary>📡 Request #10: DELETE http://localhost:3000/api/memberships/3d525af4-f8da-452e-87bd-e8d97d98b4b3 (601.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:50 GMT",
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

**⏱️ Duration:** 601.3 ms  

</details>

<details><summary>📡 Request #11: DELETE http://localhost:3000/api/organizations/5ee3e400-f47d-4a05-9b91-a17daa49948d (1237.2ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDUwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwNTAsImV4cCI6MTc0OTgzMDY1MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ugrfw_woZb_UWj1XQkwqAg9hw8K89TZvWmG5aIIr2Bah88E9LghBpL_DBAP6sc43Gw9TlaVMsdAWrqpoWOjaRZif_D8rsCQCWlUlVH1MlVxDYpcHOJJncZ_enVzsTTNsAc9K3_pu7ycAkiHsbY5ImmHZRC0_wpVAbXKEhgB6qQsMnW5Com6IBnir9Zwnq8KdqtnfQkstzXL8-QvkTV__Y7XtU1otQMRQB4X_Z0Ed5ZILlC9GmjZqEgKm1fzyuEl9xsW7xQhyoHPMl1fJ_hd-MTCFME99gZfpkGsjK7YNIz1XL_yH3l9pNjTJTR7NpxPjyE7HKmL1HydWvBGPt88gnw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:51 GMT",
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

**⏱️ Duration:** 1237.2 ms  

</details>

<details><summary>📡 Request #12: POST http://localhost:3000/api/auth/login (292.8ms)</summary>

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
    "etag": "W/\"6aa-xY3N0AjTzbEwTk3+s/eJEY8qhb0\"",
    "date": "Fri, 13 Jun 2025 15:04:51 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTEsImV4cCI6MTc0OTgzMDY5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kKqOPVaOdQ9RZxchqz2Jbg6irF9M0kJ_eQPEdWdx_H1yCmcW1qNypEsqnPP_6fwroAwGFfVQ1t_pkZdohwBrME4X6UxrGcPWVGajaLUEZlL-UfeOC817Y2PC-Apn1uNeUko8GXx6w9PFGQudSI8LjJfOkLbAAXimXDZKM_hauW3BPcFrZS_yLihhBSh6CNWcbPJaWm3YddW1YuFrmJH-kU7v7dVL6cH3ZetUtni8VSOSASTlMasxVnldX-axpC4_aD3b2uaQZWXjI1ChnEb0tu0JTrK082XNMUnOm4PlY-8dWof0DHhUgr83Y1gDz5h3ccgPRM0CAb8VR27NEWWAuw",
        "refreshToken": "AMf-vByAiCIw3Q_1ac5dBfI4PHaFw7K5jSN4CuLUAD7thUllbD5oJGoc54CkBKJ4ON31glBiu2WpCdY-4QDFM8NN2JKu9bdxjOCYZPrBrlwWu43tbcy_vLj7a2iEFUC4S-_8G9iAcafEXhDX6gHJy_GdHyZJSZ3glk145As-baR1oM9KslbcOiRQX-HLGCmXjl_AH3dQz5IoywgDAuiTzkDRxallNlJ1L-s03B4zuDeU1vhCJvXT3XAHY0ub06V4SvwRDT50s0sN",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 292.8 ms  

</details>

<details><summary>📡 Request #13: DELETE http://localhost:3000/api/admin/users/iC5pYtlFc3YdmDnHrdFZq2bFjW12 (1958.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTEsImV4cCI6MTc0OTgzMDY5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.kKqOPVaOdQ9RZxchqz2Jbg6irF9M0kJ_eQPEdWdx_H1yCmcW1qNypEsqnPP_6fwroAwGFfVQ1t_pkZdohwBrME4X6UxrGcPWVGajaLUEZlL-UfeOC817Y2PC-Apn1uNeUko8GXx6w9PFGQudSI8LjJfOkLbAAXimXDZKM_hauW3BPcFrZS_yLihhBSh6CNWcbPJaWm3YddW1YuFrmJH-kU7v7dVL6cH3ZetUtni8VSOSASTlMasxVnldX-axpC4_aD3b2uaQZWXjI1ChnEb0tu0JTrK082XNMUnOm4PlY-8dWof0DHhUgr83Y1gDz5h3ccgPRM0CAb8VR27NEWWAuw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:53 GMT",
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

**⏱️ Duration:** 1958.5 ms  

</details>

<details><summary>📡 Request #14: POST http://localhost:3000/api/auth/login (739.3ms)</summary>

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
    "etag": "W/\"6aa-BHOcUYMkuaHNhjgMaRxPGIFK2eY\"",
    "date": "Fri, 13 Jun 2025 15:04:54 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTQsImV4cCI6MTc0OTgzMDY5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BbLGu42jHxeiADRT2EK3txwbsxiOWZV4_55mQCyW8VvDzcbmmNjJOfnGSHV_OVXSBW0622x3tOv_kTzjTPh_X3q3fVraMUNL13jc2E-rQzYK_jZi6ITdKBGZJrzCwWgChZSepiiU7axOQDXQNm5v7tHUtqXVhGYa7o8o5ZfjhWWnTrnxSTlsc4pHB8ek8GS1gBshVN69D0wu6Fm9jpIO-2giJsN4hSeJLiyxdqRCZArASQ6qglTjb_vg3JMYqxyKkXDQgmJTxLpkWi7jTCgSIQb4exbNpMDCxBRLkVblZkmI2oMtDknJZM0VcvEurSoHLWw-seBWKsq3RoUfdKpHHw",
        "refreshToken": "AMf-vBywR7yCxeozcXvJXMlzzsSPc39nbI0cEJrgWG3P9gRjPOwbpKNMtDrKyr8ZsDD9ELaguOcx0fowmtLuhZ5L1MwO_FUEU-j2yyGcVCVnF4G1MayJ2H-5sn6ix1imav2UTt6FbZNiBAgXYLYeCypgULAecjVXwO8SH_Pl9nCBHrXMjbyYsietoGRAII0-aVODXFqpW8yWA6tp-GaK4qnPkyOHOblG_fV4ojJoz5rwU8BrdoK7exdyjj1_xsB1dFfhJszsbAYV",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 739.3 ms  

</details>

<details><summary>📡 Request #15: DELETE http://localhost:3000/api/admin/users/Kbt3YlJxNLaOzTHFok1kKbeR6uo2 (1248.1ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDk0LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTQsImV4cCI6MTc0OTgzMDY5NCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BbLGu42jHxeiADRT2EK3txwbsxiOWZV4_55mQCyW8VvDzcbmmNjJOfnGSHV_OVXSBW0622x3tOv_kTzjTPh_X3q3fVraMUNL13jc2E-rQzYK_jZi6ITdKBGZJrzCwWgChZSepiiU7axOQDXQNm5v7tHUtqXVhGYa7o8o5ZfjhWWnTrnxSTlsc4pHB8ek8GS1gBshVN69D0wu6Fm9jpIO-2giJsN4hSeJLiyxdqRCZArASQ6qglTjb_vg3JMYqxyKkXDQgmJTxLpkWi7jTCgSIQb4exbNpMDCxBRLkVblZkmI2oMtDknJZM0VcvEurSoHLWw-seBWKsq3RoUfdKpHHw"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:55 GMT",
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

**⏱️ Duration:** 1248.1 ms  

</details>

<details><summary>📡 Request #16: POST http://localhost:3000/api/auth/login (264.6ms)</summary>

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
    "etag": "W/\"6aa-ycjYaF/lKg2xKIGp5XXgkb9puXc\"",
    "date": "Fri, 13 Jun 2025 15:04:56 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTYsImV4cCI6MTc0OTgzMDY5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ClO5z-SOIVVbf6a63ZnQR8KeoysPhKH51K3T-_bsn6UgLl7IoIA6aZNHWsHel8rRyGcHqe2ejou43khBqfXN140tdqwExExIneGZCEA71v9mxekEAxBILMDPlMN_xhBZSvwmtso03mlatZA4Bui8hPgFrrEl236bxdwt1n95jcMy6FLsM3HB2ofixLOFmGbqkqHoTbuurdxSrUipSzR8_Lp1DjCIi_DDMdkSw8vAjTcwfbuvCa6mYpQaoQmLlfuHc1xN0z1d-KO6WI8hOObGsoHWBbrxl1lrAJamlJAWLlhwgkTql4OBWpdkICtYUI7ONWyRqwTxtGCFG9-J6MnuWQ",
        "refreshToken": "AMf-vBzPraqRru1qplZtRZTh37Q9Yc4CRUqfN4TqpCGI-kRIJDYS_68WNZs4o9QxiA7vK_6tsehSYU6VWB63KHVRSBDQFpw1yX_WXKqHX0alEuvCYQiORu2FDdd9IskhtsZjBrcDcn9DLLEKk0MuiN585jcoAEyzXdQ94mGu680Kpcgha2FZ7tdBLj3ApI2NfnRoNbMzAVEqoXc0wgHQj-us3NviSfStiLyPKymEx7LtANu6S2_268AqB_yLsVcVCXJ2VOH46Ggj",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 264.6 ms  

</details>

<details><summary>📡 Request #17: DELETE http://localhost:3000/api/admin/users/e5Voc40V4GM4btNyuvkjTM762362 (1219.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDk2LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTYsImV4cCI6MTc0OTgzMDY5NiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ClO5z-SOIVVbf6a63ZnQR8KeoysPhKH51K3T-_bsn6UgLl7IoIA6aZNHWsHel8rRyGcHqe2ejou43khBqfXN140tdqwExExIneGZCEA71v9mxekEAxBILMDPlMN_xhBZSvwmtso03mlatZA4Bui8hPgFrrEl236bxdwt1n95jcMy6FLsM3HB2ofixLOFmGbqkqHoTbuurdxSrUipSzR8_Lp1DjCIi_DDMdkSw8vAjTcwfbuvCa6mYpQaoQmLlfuHc1xN0z1d-KO6WI8hOObGsoHWBbrxl1lrAJamlJAWLlhwgkTql4OBWpdkICtYUI7ONWyRqwTxtGCFG9-J6MnuWQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:57 GMT",
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

**⏱️ Duration:** 1219.7 ms  

</details>

<details><summary>📡 Request #18: POST http://localhost:3000/api/auth/login (332.7ms)</summary>

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
    "etag": "W/\"6aa-9L1+SY8IZnuJbFCiZ7Ya63YRNF4\"",
    "date": "Fri, 13 Jun 2025 15:04:57 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTcsImV4cCI6MTc0OTgzMDY5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.W5iIwX83y4WuARbXl3W5hcoEVeG2PtSPY-r8clpnQhAbIoC7f5Ys3FJgVT3YhyEmd5uT6ujgCdPYavCMsnfLCj40wpfW-kQ9CYvcIC5ZNQMbsYwWfn2eza31x8jkdAN029aBazJe4Yaa43zjjQ--jPHDfwbzhMHt5ZCpPUia6HqLnZtQWXKhNMryN8WMtltHMagdsuoARoHqtyTQiWUH1lt44i4d5e7MtQpc0Dk5M6Jg6fsEl76f8YanIIdr7CJ83vlKIWbSODtT3vfwgpK1OuXfXhg9wOon4PhWSCrLQ4Pc4ypmeNOzxcRxuT0_gTauQ-Ec4tSubtCPDGJmbkdLXA",
        "refreshToken": "AMf-vBxou3xaB4YLofRo_s8ny8NFHNK_gPfcq_YmLLfNWYQ9vycl_O7lL6r29jpAmvND7Bswsn9jxKhaXJS0qppkZh-9lh3Ed-r5K1kS93Nd93mhAE_wH8myCeWaL0GdlIwlcrXYMiqCGpXvud4QHDndWZA1fRzcvCT8zUy6nQzokyeEe5pEXfZnrGiMnhpdw9aqiAomlAj_w7MAZ3EDG7hY6wz-McMrN6v1ylpBMC_KLZYzkoeaJwniXomYifMF3_Vy-_ZGcYo6",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 332.7 ms  

</details>

<details><summary>📡 Request #19: DELETE http://localhost:3000/api/admin/users/qw7GwmfEybNPPPwrjqrUXqQxB782 (1231.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDk3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTcsImV4cCI6MTc0OTgzMDY5NywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.W5iIwX83y4WuARbXl3W5hcoEVeG2PtSPY-r8clpnQhAbIoC7f5Ys3FJgVT3YhyEmd5uT6ujgCdPYavCMsnfLCj40wpfW-kQ9CYvcIC5ZNQMbsYwWfn2eza31x8jkdAN029aBazJe4Yaa43zjjQ--jPHDfwbzhMHt5ZCpPUia6HqLnZtQWXKhNMryN8WMtltHMagdsuoARoHqtyTQiWUH1lt44i4d5e7MtQpc0Dk5M6Jg6fsEl76f8YanIIdr7CJ83vlKIWbSODtT3vfwgpK1OuXfXhg9wOon4PhWSCrLQ4Pc4ypmeNOzxcRxuT0_gTauQ-Ec4tSubtCPDGJmbkdLXA"
  }
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
    "date": "Fri, 13 Jun 2025 15:04:59 GMT",
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

**⏱️ Duration:** 1231.5 ms  

</details>

<details><summary>📡 Request #20: POST http://localhost:3000/api/auth/login (295.5ms)</summary>

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
    "etag": "W/\"6aa-mGURJ8tydiz2MpsY/pm+O6HlUXU\"",
    "date": "Fri, 13 Jun 2025 15:04:59 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTksImV4cCI6MTc0OTgzMDY5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.C__-_hmHa8vA8R5agBosgbJTTYL0TSI5bXepzt2pzYfIzJNc9FBGdX7QwOpKSmQhv7d-IvB8BX68X2sTmSbLnljdt297tWcLAhgILFMmbPaFkTjP8zKjoNGEO63Od9mX_AcL4Nx9dVsJEN_-Y1iocS6wL7GRaUCUYunwTgHc8bAhIaFoHxvKCpY6JPJ-VY7ZT9QsMcedtDyOIELNPO7M3yQ_1xIXjNuRPbXhVW4I3AYdU-y_7VjBM7XBi_SNtdJ8T1iWgYuI08rUb3i89GIA_jsdD2H2p1m3rO2BVlZA69uyrFg92_wyDEa15AjgRg1P35CL60A5eIzIJuFlkpIPbA",
        "refreshToken": "AMf-vBzWb-Cu1f0RtXZsciPBDU-us5K1YGZc6_-EoCVv31HdvHhT-Q0QE3Y7a_CVWKRWkK0L1kSTP4av4cXw7ezZd-XTrP8CpwrIBNpDR_B1PmvSrZPqhh4A6W_LlVtpErhMV2NkIIXYt132JDc6zSPlq-tN55aNMHreZ4GDTLRQiuXOPttLjuDeRXaApVNCkf5xWyRtEyKoM0cF3_5UodkQHVogA5pb9i4odoAkk2GymLHdVkMZhoy1LDNFHFtG7yNwCiiZdNbJ",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 295.5 ms  

</details>

<details><summary>📡 Request #21: DELETE http://localhost:3000/api/admin/users/vY9WxO9W1yUTCSS4pPM6UwFBawk1 (1254.0ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MDk5LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcwOTksImV4cCI6MTc0OTgzMDY5OSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.C__-_hmHa8vA8R5agBosgbJTTYL0TSI5bXepzt2pzYfIzJNc9FBGdX7QwOpKSmQhv7d-IvB8BX68X2sTmSbLnljdt297tWcLAhgILFMmbPaFkTjP8zKjoNGEO63Od9mX_AcL4Nx9dVsJEN_-Y1iocS6wL7GRaUCUYunwTgHc8bAhIaFoHxvKCpY6JPJ-VY7ZT9QsMcedtDyOIELNPO7M3yQ_1xIXjNuRPbXhVW4I3AYdU-y_7VjBM7XBi_SNtdJ8T1iWgYuI08rUb3i89GIA_jsdD2H2p1m3rO2BVlZA69uyrFg92_wyDEa15AjgRg1P35CL60A5eIzIJuFlkpIPbA"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:00 GMT",
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

**⏱️ Duration:** 1254.0 ms  

</details>

<details><summary>📡 Request #22: POST http://localhost:3000/api/auth/login (222.0ms)</summary>

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
    "etag": "W/\"6aa-DbpyHONmbhIBqBM8uoLIJMSaooY\"",
    "date": "Fri, 13 Jun 2025 15:05:00 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDAsImV4cCI6MTc0OTgzMDcwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.D6qr5cvR1BhVksf3u8BkZmtrEDx5LWYPhqdFxDSIjpp6ahnGrblj9VLYDp_KgiFPdPT-ZSvbr6I3B5mjfQ7wtlEtd8jmCSC1vd7O9E9n4hk7UMWjYCMjwcEAdw2fO3a946cr70pd2N3kYxz5bHlJ48ialWBfjITrVgEYphRILRl1lDVZS5aQU5drL7EgEFsATcpba73NQU5Y382WLdJEDrbD6XS1-4pPEvOkIw8VY-jDJEJLA8q7RPbXDMRTlAMhT4dI0AGVZOde_zbmryixB6LOKdkIfH59dkP0SiYv4VcWOKNcCiumXidu6d3wXHnPmjdoNHlCZoF48AUGu9TWBQ",
        "refreshToken": "AMf-vBxkIjx-5w7I95lUOSXVH_agd3_Lb4BNoQUiRWYjZqX0Y2Lvzkp8muOlvw7PDbOsFoOubZP33UWNoOd-6TQPPR7d5jjOow79374b6iZhp-iNiMPl6SYNXhFspaj_M8kzQlTGn_fBGuijN5OV7ux-pSzGCZLHY5t3ebzKNSjB_CAQMsV5ml--976diQS7digw5IUB0iyRgji6vwML3p2QPklcNmnt6UiBVvbBSo0i79k3HeKj6Qp0hPGN8J3xc4KtG4biffNX",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 222.0 ms  

</details>

<details><summary>📡 Request #23: DELETE http://localhost:3000/api/admin/users/HN5Re96SwjRa1mwLGsVSZP1xZrq1 (1173.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTAwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDAsImV4cCI6MTc0OTgzMDcwMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.D6qr5cvR1BhVksf3u8BkZmtrEDx5LWYPhqdFxDSIjpp6ahnGrblj9VLYDp_KgiFPdPT-ZSvbr6I3B5mjfQ7wtlEtd8jmCSC1vd7O9E9n4hk7UMWjYCMjwcEAdw2fO3a946cr70pd2N3kYxz5bHlJ48ialWBfjITrVgEYphRILRl1lDVZS5aQU5drL7EgEFsATcpba73NQU5Y382WLdJEDrbD6XS1-4pPEvOkIw8VY-jDJEJLA8q7RPbXDMRTlAMhT4dI0AGVZOde_zbmryixB6LOKdkIfH59dkP0SiYv4VcWOKNcCiumXidu6d3wXHnPmjdoNHlCZoF48AUGu9TWBQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:01 GMT",
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

**⏱️ Duration:** 1173.3 ms  

</details>

<details><summary>📡 Request #24: POST http://localhost:3000/api/auth/login (303.7ms)</summary>

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
    "etag": "W/\"6aa-5DO+JZjpBwlP3hqWnk9wBFZD1oI\"",
    "date": "Fri, 13 Jun 2025 15:05:02 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDIsImV4cCI6MTc0OTgzMDcwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MgurV5oybAEGB5m98CZcoqHlnBpvMw8c3R2ol1iFlGMYwrHmyAVDZfGsdVqqNIsJ1FGNGxSqDtT-iR7Z6_nbEKLitM5Z_1Fz3Omj89bbJlvEeLq2B_zUaC2Qrs9QDMwKDbAxz3isxksd-s72nAI-PCcMR1PVsKoxmsdTdsHSZPBzX-s3H46Xok21GmEoWlZmc3SykG8ooZdZEym14PF8F88bSOrBA4Ya1S1asxugY97fD_A6g5_Lg5cKIGcPdq07ZfM8YphHR_LtpeHAPDeCsHh0g1KAxcvSvNYGlf0pKmVO5queO8m3H-i4TotI38fCZSqD0TQ89mEuCSiA6ywN6g",
        "refreshToken": "AMf-vBz6ISen73O5Zgc-TV1ylU5DnhG-Z2EvUrlFVhAxIP5-DEAF5_01gE7mLBi7daJ1WSLC7Fdfha15jlLterdP2TQ-75D3FgjYKNprkDlrAGjkvoj58aMbuw_zomwdzNEm53T7hDgmDbqyrBS5mMHr7ee0pePFqRUHBssnngiC3pWsUu35liVawMpI1y2Elk-KT7Z513_gDeH-pp0WthP87t-9AOCkuIRBRYXhvuNYArSqgG16U4Tu_U5NdzyG9iESZ49U6iTE",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 303.7 ms  

</details>

<details><summary>📡 Request #25: DELETE http://localhost:3000/api/admin/users/DXGqcyzaEOSkyd9lrj8gmBFgxck2 (1228.5ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTAyLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDIsImV4cCI6MTc0OTgzMDcwMiwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MgurV5oybAEGB5m98CZcoqHlnBpvMw8c3R2ol1iFlGMYwrHmyAVDZfGsdVqqNIsJ1FGNGxSqDtT-iR7Z6_nbEKLitM5Z_1Fz3Omj89bbJlvEeLq2B_zUaC2Qrs9QDMwKDbAxz3isxksd-s72nAI-PCcMR1PVsKoxmsdTdsHSZPBzX-s3H46Xok21GmEoWlZmc3SykG8ooZdZEym14PF8F88bSOrBA4Ya1S1asxugY97fD_A6g5_Lg5cKIGcPdq07ZfM8YphHR_LtpeHAPDeCsHh0g1KAxcvSvNYGlf0pKmVO5queO8m3H-i4TotI38fCZSqD0TQ89mEuCSiA6ywN6g"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:03 GMT",
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

**⏱️ Duration:** 1228.5 ms  

</details>

<details><summary>📡 Request #26: POST http://localhost:3000/api/auth/login (267.6ms)</summary>

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
    "etag": "W/\"6aa-MM2AGQqDgcplSlKVJREgrayq4I0\"",
    "date": "Fri, 13 Jun 2025 15:05:03 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTAzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDMsImV4cCI6MTc0OTgzMDcwMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EazgQheQU0No1uM6S8Rws9_DrpvpYOBL8Ch8wUyrezVnFS1cd0P-Vdtj3nUGIRwaRaeG7QTRfGvKfr9GRUYJ3RO17x1hbB32BEXChOd4uImYl1d6ZTK_B81lF1aMWFm_qy9yyMHkhqbIac57ReI4pnKeXS5kgNHmA_Ko3XTyS5_KxO8nrLeJ2vOsE7Zd90AkxDrGUEkRvd6w39LqS_eES27ZoST5rl6uapjQmf7e6sBYZ3yagrnPbCApUgJkIET8is1hCj2JAfiRSs79ErqnDsgZF6gygCTre4oUjKDNuumznxZ1znvYK3NikeqgO5y-3FJMkrIWVthe8OnmCGE8Tg",
        "refreshToken": "AMf-vBx8NZ411-4ZK0L5pr-DbDnNlX85WGyhLrP_dXh6Msge9Ughb6CBHZYtEwPY3M6sVUXUZcYRglZTkP0E25iFFnrJklMxZKMr2qfSbQ29Spf7sXh_r4_LEHmCjz2Z71tjGmVhBQorGj7GWfCoPKOf3wph0n5ftnNXU52of4-guoyzNHg5LF1sMf31Vf6M8Cjv65S_-dcmnX7bxBjak7RohUCNFq-J9PKVFzb8ubCMjq8k_3Wof6yqop2qqKFXgGXjsVsRRhKI",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 267.6 ms  

</details>

<details><summary>📡 Request #27: DELETE http://localhost:3000/api/admin/users/YXoAxwAFf4MMXEuHa9yln08Lghy2 (1184.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTAzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDMsImV4cCI6MTc0OTgzMDcwMywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EazgQheQU0No1uM6S8Rws9_DrpvpYOBL8Ch8wUyrezVnFS1cd0P-Vdtj3nUGIRwaRaeG7QTRfGvKfr9GRUYJ3RO17x1hbB32BEXChOd4uImYl1d6ZTK_B81lF1aMWFm_qy9yyMHkhqbIac57ReI4pnKeXS5kgNHmA_Ko3XTyS5_KxO8nrLeJ2vOsE7Zd90AkxDrGUEkRvd6w39LqS_eES27ZoST5rl6uapjQmf7e6sBYZ3yagrnPbCApUgJkIET8is1hCj2JAfiRSs79ErqnDsgZF6gygCTre4oUjKDNuumznxZ1znvYK3NikeqgO5y-3FJMkrIWVthe8OnmCGE8Tg"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:04 GMT",
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

**⏱️ Duration:** 1184.3 ms  

</details>

<details><summary>📡 Request #28: POST http://localhost:3000/api/auth/login (418.2ms)</summary>

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
    "etag": "W/\"6aa-DpuHMcRrZrky7haOXvmm1TtzPzA\"",
    "date": "Fri, 13 Jun 2025 15:05:05 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTA1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDUsImV4cCI6MTc0OTgzMDcwNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F8rRlZ8nlV5qoVdg2-moxG_Z1Q4QA6YAIP5v-Lu1epaiIISmi3PDEZusFJ2E3J0uswrIRU48VM1ca6t4g9r7JQa0dnz3KRF75_Fhvh3C5ZDjnABJlfBn9Au9SetU6GX52-FtUbhpcITyW0XktOZ8DrJgL8wcEfoAml3nWJzP0HX5n1YK4m2O-ZKU6OqLfN6qLR96X5Y7-d2p9LMqmWhVxa_G2Bvkpveo2nEz2AEf78bRXAby0kfzMvUzP9FLeCwtdeQ1Z8z1wRRedo927CeI_RnVqSD6RMYPhTGyAjU-SA_14VhZiy4DegOFQ4c4zGGau4_IIUU2qmRjffpBr3ywYQ",
        "refreshToken": "AMf-vBxpkMOv98ljDYVDsQrOuzj1QstWtHFkcCxcy93CxfxXd9Ao5MAtD6BnUoZ3WiPzBtQ56Ur99nyL2jhzODIwslIH8OhQx3md1MuytS4MEDVRo0G4sZej078yDc6-c2zj0N3-GQ-x_MUJyewExCsbQMiC1ERh4pM6XMX3JHc2ZnXUW6bYUntb1YMIKW4puCIXmOeWdt1xVq8qhx5ya35tClnf59OYgQ-RhnTFbPXIhT_yXeevp34jWmfdE0aUQH9sab1TW3hq",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 418.2 ms  

</details>

<details><summary>📡 Request #29: DELETE http://localhost:3000/api/admin/users/H0UsKoscHjUqjsBCUPk8s33TokN2 (1443.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTA1LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDUsImV4cCI6MTc0OTgzMDcwNSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.F8rRlZ8nlV5qoVdg2-moxG_Z1Q4QA6YAIP5v-Lu1epaiIISmi3PDEZusFJ2E3J0uswrIRU48VM1ca6t4g9r7JQa0dnz3KRF75_Fhvh3C5ZDjnABJlfBn9Au9SetU6GX52-FtUbhpcITyW0XktOZ8DrJgL8wcEfoAml3nWJzP0HX5n1YK4m2O-ZKU6OqLfN6qLR96X5Y7-d2p9LMqmWhVxa_G2Bvkpveo2nEz2AEf78bRXAby0kfzMvUzP9FLeCwtdeQ1Z8z1wRRedo927CeI_RnVqSD6RMYPhTGyAjU-SA_14VhZiy4DegOFQ4c4zGGau4_IIUU2qmRjffpBr3ywYQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:06 GMT",
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

**⏱️ Duration:** 1443.6 ms  

</details>

<details><summary>📡 Request #30: POST http://localhost:3000/api/auth/login (254.8ms)</summary>

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
    "etag": "W/\"6aa-yInX1aW2I8Clcu2VZXkGynQ5YPg\"",
    "date": "Fri, 13 Jun 2025 15:05:07 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTA3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDcsImV4cCI6MTc0OTgzMDcwNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.f3A_49hdP-piGUnUzz2ANj_5hv7GosbT5K16pP2JuaS_sVM9UfvbTsTIGiS_9mMPn2kBewYplH7qAAblYCGApKh4QoY6KsbzAZWN5R_1RK_IsjWZRV7fc6u32nIdH7ZyrOVqfDidZBMITkueHR8vXx-9zl9rUhcOzOE01yLIXuhyW77_7D8J0gNee03fuoC3ttcnEnbCPBW2sYydZopKVW5-h3WDfT33k52Y2NzQh8BZoGLJaLLPgfePEufkNFAeQxW7fTuaPp7wgD67OaBNxPhAZH8BZX3zIiMBJxq_1PEXnq2CLUooAp2v2LenENGFcdNal6yf1Rr8JToGW19S5w",
        "refreshToken": "AMf-vBzon9rCHjIvVre6YDYQJM2dmmgnlJbi55ephdgiX_F8JTeGRY5Ulab8zCIxD0xV-ee0TDE7rTv1TmI4mtQ9swDHzRoG-V1F1svJlB5DWGZLlhp5tmB0eEuS0Pz4mvYX5aOUQKpJaLrHXvCfiWWLDGV91hOAsi2M-Al63C5d560hY3xSMzCr9OfYuqA4xK7msGK7CnaBvm8GLHdAg4-41fjLTZB-Hou-kztHV5Mw7rVkWYK6OFZ9DYD7Vs-LLSAfI7Aha5R3",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 254.8 ms  

</details>

<details><summary>📡 Request #31: DELETE http://localhost:3000/api/admin/users/N2HCa1pHpjUl8iRo4qlb7EtEwdO2 (1224.3ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTA3LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDcsImV4cCI6MTc0OTgzMDcwNywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.f3A_49hdP-piGUnUzz2ANj_5hv7GosbT5K16pP2JuaS_sVM9UfvbTsTIGiS_9mMPn2kBewYplH7qAAblYCGApKh4QoY6KsbzAZWN5R_1RK_IsjWZRV7fc6u32nIdH7ZyrOVqfDidZBMITkueHR8vXx-9zl9rUhcOzOE01yLIXuhyW77_7D8J0gNee03fuoC3ttcnEnbCPBW2sYydZopKVW5-h3WDfT33k52Y2NzQh8BZoGLJaLLPgfePEufkNFAeQxW7fTuaPp7wgD67OaBNxPhAZH8BZX3zIiMBJxq_1PEXnq2CLUooAp2v2LenENGFcdNal6yf1Rr8JToGW19S5w"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:08 GMT",
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

**⏱️ Duration:** 1224.3 ms  

</details>

<details><summary>📡 Request #32: POST http://localhost:3000/api/auth/login (343.7ms)</summary>

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
    "etag": "W/\"6aa-sGXLpkXXRHsIMsRTqrsEdRKO1Sg\"",
    "date": "Fri, 13 Jun 2025 15:05:08 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTA4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDgsImV4cCI6MTc0OTgzMDcwOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YHogcrBZU8pRDCuAxYouBla3OymeormzwTWx1S3w0c6t4M6mAtQKk6VzsnhiUpXmj-HiPFA5BL9cY3BLt-tF2jQaqF9uWZ9NVQBPniG0gVG-NF_qwcZ_tRqd77zoof2GWnK6jmUZDDDxWYSsyBCzK5dfN4fARWS7C14CfU-2zggwpZKPgLemGFYPimzfdtY-WBJZgHJpz6Nk31bLIbZM37O1G54ig2n0btcNVsMrk4wpPxMzYNLJLhjA-sxKYCFbREkGTwoV2DB4kdPa2I8Ex1C_jK55gRVJpNKgcI54ZlKraePEAfUwMoqUYmNTcmNT-cdJ0VbBxE9tVKRcJou0Yw",
        "refreshToken": "AMf-vBwhioNcM_CgiPVQ8TZidtydMnIkGv-zihFlXifd02hRbIsrYqk0zfPHw15guwjZpWj-JSbwy9znmUuLUQGzOrlLGyHWgkgIgtq8vaJ-HHsXho5DiYYepmpEv0h7DFwF43FPbTTS6u86HT-Kesw6ipSyFT3GbQvg5AzvFoBUKISd-4Kd02Fifq3YNQ6lj7V056LPnnbTwDIS7fju0ppUb3G-_eN7bohrYOK0ey41Mlo2Zjlf34tYFwhQLizjGHOSbuMJySnK",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 343.7 ms  

</details>

<details><summary>📡 Request #33: DELETE http://localhost:3000/api/admin/users/0EG9fomsUsdCT35aqMl7kudidPa2 (1345.6ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTA4LCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMDgsImV4cCI6MTc0OTgzMDcwOCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YHogcrBZU8pRDCuAxYouBla3OymeormzwTWx1S3w0c6t4M6mAtQKk6VzsnhiUpXmj-HiPFA5BL9cY3BLt-tF2jQaqF9uWZ9NVQBPniG0gVG-NF_qwcZ_tRqd77zoof2GWnK6jmUZDDDxWYSsyBCzK5dfN4fARWS7C14CfU-2zggwpZKPgLemGFYPimzfdtY-WBJZgHJpz6Nk31bLIbZM37O1G54ig2n0btcNVsMrk4wpPxMzYNLJLhjA-sxKYCFbREkGTwoV2DB4kdPa2I8Ex1C_jK55gRVJpNKgcI54ZlKraePEAfUwMoqUYmNTcmNT-cdJ0VbBxE9tVKRcJou0Yw"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:09 GMT",
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

**⏱️ Duration:** 1345.6 ms  

</details>

<details><summary>📡 Request #34: POST http://localhost:3000/api/auth/login (363.7ms)</summary>

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
    "etag": "W/\"6aa-0nrRgMD6kFVW5YXerIG1bkF+5mI\"",
    "date": "Fri, 13 Jun 2025 15:05:10 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMTAsImV4cCI6MTc0OTgzMDcxMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GhswjdF5rvsy_yDQf49A3sX_a_ZBkq3TQiERpu9AqLEf95M5ucFKL4f38MVT5XdbojFfnjVHOkBiN5SKcDXLADXENMEP9FP5SEuEj-NXoKhkrLJryDV5Ad9q6WYGh8n6b3dXI8X797gsnDSSOp9m6thiA7Z7WCd2_w5a5SCoRnxSfPIQmYXyyrBQzwDW2ahgAVtqgUzdjsaKXCaNt3pEf_1sWbFiA9mGaytIkWYm7ODisMfV4_uzVoKzmEMhXg8CwQ_DpG67aO1y7kEoEOavsQVceBKBwZVqhrGS5Gn0AfVt1QZGXNKkc3Y2mT9-npJ6zhQykU2iY6ZeN9SInADO-w",
        "refreshToken": "AMf-vBwRedJ9G_xagPrlYQ1xphJtq8TqVkLC0lsgHWxwLtRWZpya1rHpTD2v5hfTNa-FvEJ9F8WRTchHhcwqhuvw_CjSTexwAYJ-eaqlSURV7Z4o2MPeayqBRTdyHYSjd7ULiajIV4VDhRzgVanCZgxQ2cxTaTuhVAasF0UuiwZI1tbItUJ7OJFnDnSJzBAF9rbR-_ilhpzPJp5dsV4q1tBtRKygFVcJbkka1U0RbyyHv2RHelLAPwQ7_lE17elJXQKQn4JfkdH5",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 363.7 ms  

</details>

<details><summary>📡 Request #35: DELETE http://localhost:3000/api/admin/users/IBFbrZWR8NaZkFFcY34eJyDCjPm2 (1264.7ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTEwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMTAsImV4cCI6MTc0OTgzMDcxMCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.GhswjdF5rvsy_yDQf49A3sX_a_ZBkq3TQiERpu9AqLEf95M5ucFKL4f38MVT5XdbojFfnjVHOkBiN5SKcDXLADXENMEP9FP5SEuEj-NXoKhkrLJryDV5Ad9q6WYGh8n6b3dXI8X797gsnDSSOp9m6thiA7Z7WCd2_w5a5SCoRnxSfPIQmYXyyrBQzwDW2ahgAVtqgUzdjsaKXCaNt3pEf_1sWbFiA9mGaytIkWYm7ODisMfV4_uzVoKzmEMhXg8CwQ_DpG67aO1y7kEoEOavsQVceBKBwZVqhrGS5Gn0AfVt1QZGXNKkc3Y2mT9-npJ6zhQykU2iY6ZeN9SInADO-w"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:11 GMT",
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

**⏱️ Duration:** 1264.7 ms  

</details>

<details><summary>📡 Request #36: POST http://localhost:3000/api/auth/login (300.4ms)</summary>

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
    "etag": "W/\"6aa-RYTA2PhaRUYtPQc9YJ6a6pT0Nh0\"",
    "date": "Fri, 13 Jun 2025 15:05:11 GMT",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMTEsImV4cCI6MTc0OTgzMDcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QExp-lJSFOVAXhnwkjDCUoQ5ZRKC7ZtiAqPpYrt7Dl4bfBgMyP1l8_okahdrw7aXB-M9spf-olBIMoxNmu9iWRdkrjOVn0t7IH4vsx9zJbYoghmB0zM2r98NQHcpQUHqywwv_0BLXKOde1769WPzJbK1vCQ3GhIj0cy-tHlsG6z_LfZcKYkd8y7fmYx1AXtGjmz6H3BnXyCkcn5emFvt5uNNL95jLQLI0Zwwq5LsvruLqeIz5d2Eg8yx02K9WFrsbE1uakwD8j5DvwjU_hZJyaDiFEftOyzRJz_1IPldhie0S8dfoiq21iuJt9egRLzWovFqc3yu92CDBXDDTQqdwQ",
        "refreshToken": "AMf-vBwwKPEerw3FBg7ahC1azEQ2JNtjLNGRsXaeEPsWm5eixHL_j9wyTWKwBV3PTPZ2I53VrBCXe2GFArEiPCnhKQmi-vzq742AGyB-8QyTlzXK79DAupbww6n9z5FRi2XwLlqVpqFkhCFCZGH3Q6fYoEzcbfLAh2OiqT1yypTHjeqngoa7Ja7Zqy1BeVS1AD-MM-7NRQcLq99SekdEt4iHkBeDMjQm9RSRFEOlc4Bk5fRDqoioLsza7o2F_R08fhMAg0M0lBxf",
        "expiresIn": "3600"
      }
    },
    "messageKey": "auth.login_successful",
    "language": "en"
  }
}
```

**⏱️ Duration:** 300.4 ms  

</details>

<details><summary>📡 Request #37: DELETE http://localhost:3000/api/admin/users/1p4DmOaNMHhHFNBu1yNred4EXrj2 (1347.9ms)</summary>

**📤 Request:**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0YTEwZGVjZTk4MzY2ZDZmNjNlMTY3Mjg2YWU5YjYxMWQyYmFhMjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ5ODI3MTExLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDk4MjcxMTEsImV4cCI6MTc0OTgzMDcxMSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QExp-lJSFOVAXhnwkjDCUoQ5ZRKC7ZtiAqPpYrt7Dl4bfBgMyP1l8_okahdrw7aXB-M9spf-olBIMoxNmu9iWRdkrjOVn0t7IH4vsx9zJbYoghmB0zM2r98NQHcpQUHqywwv_0BLXKOde1769WPzJbK1vCQ3GhIj0cy-tHlsG6z_LfZcKYkd8y7fmYx1AXtGjmz6H3BnXyCkcn5emFvt5uNNL95jLQLI0Zwwq5LsvruLqeIz5d2Eg8yx02K9WFrsbE1uakwD8j5DvwjU_hZJyaDiFEftOyzRJz_1IPldhie0S8dfoiq21iuJt9egRLzWovFqc3yu92CDBXDDTQqdwQ"
  }
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
    "date": "Fri, 13 Jun 2025 15:05:13 GMT",
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

**⏱️ Duration:** 1347.9 ms  

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
- Test organization: Test Org for Memberships 1749827051714
- Total memberships created: 7
- Total test users created: 13
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
