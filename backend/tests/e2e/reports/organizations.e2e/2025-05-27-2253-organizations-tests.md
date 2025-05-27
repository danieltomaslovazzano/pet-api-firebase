# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 10:53:15 PM  
**Duration:** 35.35s  
**Tests:** 16 total, 16 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 1.27s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.68s | Regular user should create organization successfully |
| ✅ Should fail without authentication | PASSED | 0.14s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.80s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.57s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.02s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.83s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.72s | Should fail without proper permissions |
| ✅ Admin should delete organization successfully | PASSED | 1.65s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.33s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.75s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.41s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.66s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.78s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 1.30s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 1.42s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.27s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] POST http://localhost:3000/api/organizations - Test: Organizations E2E Tests Create Organization Admin should create organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 4
ℹ️ [REQUEST WRAPPER] Logged successful request: POST http://localhost:3000/api/organizations -> 201
```

---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.68s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] POST http://localhost:3000/api/organizations - Test: Organizations E2E Tests Create Organization Regular user should create organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 5
ℹ️ [REQUEST WRAPPER] Logged successful request: POST http://localhost:3000/api/organizations -> 201
```

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.14s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] POST http://localhost:3000/api/organizations - Test: Organizations E2E Tests Create Organization Should fail without authentication
ℹ️ [REQUEST WRAPPER] Total logs stored: 6
ℹ️ [REQUEST WRAPPER] Logged failed request: POST http://localhost:3000/api/organizations -> 401
```

---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.80s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/0d5a1105-43a3-4b57-be89-ba05b75a48a1 - Test: Organizations E2E Tests Get Organization by ID Admin should get organization by ID
ℹ️ [REQUEST WRAPPER] Total logs stored: 8
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/0d5a1105-43a3-4b57-be89-ba05b75a48a1 -> 200
```

---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.57s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/invalid-id - Test: Organizations E2E Tests Get Organization by ID Should fail with invalid organization ID
ℹ️ [REQUEST WRAPPER] Total logs stored: 9
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/organizations/invalid-id -> 404
```

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.02s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/0d5a1105-43a3-4b57-be89-ba05b75a48a1 - Test: Organizations E2E Tests Get Organization by ID Should fail without authentication
ℹ️ [REQUEST WRAPPER] Total logs stored: 10
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/organizations/0d5a1105-43a3-4b57-be89-ba05b75a48a1 -> 401
```

---

### Test: Admin should update organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.83s  

**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 80ccf1a5-f1f1-4643-8bb2-20fec23bfca5
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748379167140",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZW
ℹ️ [REQUEST WRAPPER] PUT http://localhost:3000/api/organizations/80ccf1a5-f1f1-4643-8bb2-20fec23bfca5 - Test: Organizations E2E Tests Update Organization Admin should update organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 12
ℹ️ [REQUEST WRAPPER] Logged successful request: PUT http://localhost:3000/api/organizations/80ccf1a5-f1f1-4643-8bb2-20fec23bfca5 -> 200
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.72s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] PUT http://localhost:3000/api/organizations/80ccf1a5-f1f1-4643-8bb2-20fec23bfca5 - Test: Organizations E2E Tests Update Organization Should fail without proper permissions
ℹ️ [REQUEST WRAPPER] Total logs stored: 13
ℹ️ [REQUEST WRAPPER] Logged failed request: PUT http://localhost:3000/api/organizations/80ccf1a5-f1f1-4643-8bb2-20fec23bfca5 -> 403
```

---

### Test: Admin should delete organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.65s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] DELETE http://localhost:3000/api/organizations/d02142db-d690-405c-9c84-6a015dfb2041 - Test: Organizations E2E Tests Delete Organization Admin should delete organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 15
ℹ️ [REQUEST WRAPPER] Logged successful request: DELETE http://localhost:3000/api/organizations/d02142db-d690-405c-9c84-6a015dfb2041 -> 200
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/d02142db-d690-405c-9c84-6a015dfb2041 - Test: Organizations E2E Tests Delete Organization Admin should delete organization successfully
ℹ️ [REQUEST WRAPPER] Total logs stored: 16
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/organizations/d02142db-d690-405c-9c84-6a015dfb2041 -> 404
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.33s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] POST http://localhost:3000/api/organizations - Test: Organizations E2E Tests Delete Organization Should fail without proper permissions
ℹ️ [REQUEST WRAPPER] Total logs stored: 17
ℹ️ [REQUEST WRAPPER] Logged successful request: POST http://localhost:3000/api/organizations -> 201
ℹ️ [REQUEST WRAPPER] DELETE http://localhost:3000/api/organizations/0691f2bb-919d-48d2-af67-fa987e83cd72 - Test: Organizations E2E Tests Delete Organization Should fail without proper permissions
ℹ️ [REQUEST WRAPPER] Total logs stored: 18
ℹ️ [REQUEST WRAPPER] Logged failed request: DELETE http://localhost:3000/api/organizations/0691f2bb-919d-48d2-af67-fa987e83cd72 -> 403
```

---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.75s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/admin/organizations - Test: Organizations E2E Tests List Organizations Admin should list all organizations
ℹ️ [REQUEST WRAPPER] Total logs stored: 19
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/admin/organizations -> 200
```

---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.41s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/admin/organizations - Test: Organizations E2E Tests List Organizations Should fail without admin permissions
ℹ️ [REQUEST WRAPPER] Total logs stored: 20
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/admin/organizations -> 403
```

---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.66s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/7670c1ad-10ad-4b16-9133-8776a028797b/members - Test: Organizations E2E Tests Get Organization Members Admin should get organization members
ℹ️ [REQUEST WRAPPER] Total logs stored: 22
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/7670c1ad-10ad-4b16-9133-8776a028797b/members -> 200
```

---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.78s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/7670c1ad-10ad-4b16-9133-8776a028797b/members - Test: Organizations E2E Tests Get Organization Members Should fail without membership
ℹ️ [REQUEST WRAPPER] Total logs stored: 23
ℹ️ [REQUEST WRAPPER] Logged failed request: GET http://localhost:3000/api/organizations/7670c1ad-10ad-4b16-9133-8776a028797b/members -> 403
```

---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 1.30s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/9d78c51b-d51c-42dc-974b-692df8807dd1 - Test: Organizations E2E Tests Multitenancy Validation Organization admin should only access their own organization
ℹ️ [REQUEST WRAPPER] Total logs stored: 30
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/9d78c51b-d51c-42dc-974b-692df8807dd1 -> 200
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/24eb8d9f-6c8a-432c-826b-4e1852ad5984 - Test: Organizations E2E Tests Multitenancy Validation Organization admin should only access their own organization
ℹ️ [REQUEST WRAPPER] Total logs stored: 31
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/24eb8d9f-6c8a-432c-826b-4e1852ad5984 -> 200
```

---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.42s  

**Console Output:**
```
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/9d78c51b-d51c-42dc-974b-692df8807dd1 - Test: Organizations E2E Tests Multitenancy Validation Super admin should access all organizations
ℹ️ [REQUEST WRAPPER] Total logs stored: 32
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/9d78c51b-d51c-42dc-974b-692df8807dd1 -> 200
ℹ️ [REQUEST WRAPPER] GET http://localhost:3000/api/organizations/24eb8d9f-6c8a-432c-826b-4e1852ad5984 - Test: Organizations E2E Tests Multitenancy Validation Super admin should access all organizations
ℹ️ [REQUEST WRAPPER] Total logs stored: 33
ℹ️ [REQUEST WRAPPER] Logged successful request: GET http://localhost:3000/api/organizations/24eb8d9f-6c8a-432c-826b-4e1852ad5984 -> 200
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
- Total organizations created: 8
- Total test users created: 3
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
