# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 10:16:31 PM  
**Duration:** 26.68s  
**Tests:** 16 total, 8 passed, 8 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 1.30s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.93s | Regular user should create organization successfully |
| ✅ Should fail without authentication | PASSED | 0.08s | Should fail without authentication |
| ❌ Admin should get organization by ID | FAILED | 0.55s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.62s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ❌ Admin should update organization successfully | FAILED | 0.52s | Admin should update organization successfully |
| ❌ Should fail without proper permissions | FAILED | 0.55s | Should fail without proper permissions |
| ❌ Admin should delete organization successfully | FAILED | 0.54s | Admin should delete organization successfully |
| ❌ Should fail without proper permissions | FAILED | 1.12s | Should fail without proper permissions |
| ❌ Admin should list all organizations | FAILED | 0.36s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.34s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.60s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.65s | Should fail without membership |
| ❌ Organization admin should only access their own organization | FAILED | 0.61s | Organization admin should only access their own organization |
| ❌ Super admin should access all organizations | FAILED | 0.54s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.30s  

---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.93s  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.08s  

---

### Test: Admin should get organization by ID
**Status:** ❌ FAILED  
**Duration:** 0.55s  
**Error:** Request failed with status code 404  

---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.62s  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

---

### Test: Admin should update organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.52s  
**Error:** Request failed with status code 500  

**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 8a50284d-d777-480d-b75d-9c6a5a9120f5
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748376972236",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZW
ℹ️ 🔍 DEBUG: Error response status: 500
ℹ️ 🔍 DEBUG: Error response data: {
  "error": "Error retrieving organization"
}
ℹ️ 🔍 DEBUG: Error message: Request failed with status code 500
```

---

### Test: Should fail without proper permissions
**Status:** ❌ FAILED  
**Duration:** 0.55s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m500[39m  

---

### Test: Admin should delete organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.54s  
**Error:** Request failed with status code 500  

---

### Test: Should fail without proper permissions
**Status:** ❌ FAILED  
**Duration:** 1.12s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m500[39m  

---

### Test: Admin should list all organizations
**Status:** ❌ FAILED  
**Duration:** 0.36s  
**Error:** Request failed with status code 500  

---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.34s  

---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.60s  

---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.65s  

---

### Test: Organization admin should only access their own organization
**Status:** ❌ FAILED  
**Duration:** 0.61s  
**Error:** Request failed with status code 404  

---

### Test: Super admin should access all organizations
**Status:** ❌ FAILED  
**Duration:** 0.54s  
**Error:** Request failed with status code 404  

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
