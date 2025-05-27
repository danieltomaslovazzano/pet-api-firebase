# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 10:39:48 PM  
**Duration:** 32.93s  
**Tests:** 16 total, 16 passed, 0 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 1.25s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.61s | Regular user should create organization successfully |
| ✅ Should fail without authentication | PASSED | 0.08s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.73s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.57s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.85s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.70s | Should fail without proper permissions |
| ✅ Admin should delete organization successfully | PASSED | 1.55s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.21s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.78s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.42s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.60s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.59s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 1.36s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 1.25s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.25s  

---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.61s  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.08s  

---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.73s  

---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.57s  

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
ℹ️ 🔍 DEBUG: Update org ID: 64e4a6ee-2a76-42bf-a875-2caa4b9aa441
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748378362274",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZW
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.70s  

---

### Test: Admin should delete organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.55s  

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.21s  

---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.78s  

---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.42s  

---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.60s  

---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.59s  

---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 1.36s  

---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.25s  

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
