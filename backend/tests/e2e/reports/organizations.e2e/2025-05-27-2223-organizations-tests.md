# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 10:23:15 PM  
**Duration:** 33.76s  
**Tests:** 16 total, 13 passed, 3 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 1.42s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.65s | Regular user should create organization successfully |
| ✅ Should fail without authentication | PASSED | 0.09s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.76s | Admin should get organization by ID |
| ❌ Should fail with invalid organization ID | FAILED | 0.69s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.85s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.66s | Should fail without proper permissions |
| ❌ Admin should delete organization successfully | FAILED | 1.04s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.22s | Should fail without proper permissions |
| ❌ Admin should list all organizations | FAILED | 0.39s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.38s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.63s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.73s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 1.36s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 1.45s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.42s  

---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.65s  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.09s  

---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.76s  

---

### Test: Should fail with invalid organization ID
**Status:** ❌ FAILED  
**Duration:** 0.69s  
**Error:** Cannot read properties of undefined (reading 'status')  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

---

### Test: Admin should update organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.85s  

**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 5b940bfb-3b8a-454a-a982-2a44654e615c
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748377368626",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZW
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.66s  

---

### Test: Admin should delete organization successfully
**Status:** ❌ FAILED  
**Duration:** 1.04s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoHaveProperty[2m([22m[32mpath[39m[2m)[22m

Expected path: [32m"message"[39m
Received path: [31m[][39m

Received value: [31mtrue[39m  

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.22s  

---

### Test: Admin should list all organizations
**Status:** ❌ FAILED  
**Duration:** 0.39s  
**Error:** Request failed with status code 500  

---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.38s  

---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.63s  

---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.73s  

---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 1.36s  

---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.45s  

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
