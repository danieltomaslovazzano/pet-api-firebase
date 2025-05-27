# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 10:35:28 PM  
**Duration:** 34.25s  
**Tests:** 16 total, 14 passed, 2 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ✅ Admin should create organization successfully | PASSED | 1.28s | Admin should create organization successfully |
| ✅ Regular user should create organization successfully | PASSED | 0.84s | Regular user should create organization successfully |
| ✅ Should fail without authentication | PASSED | 0.08s | Should fail without authentication |
| ✅ Admin should get organization by ID | PASSED | 0.86s | Admin should get organization by ID |
| ❌ Should fail with invalid organization ID | FAILED | 0.59s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ✅ Admin should update organization successfully | PASSED | 0.83s | Admin should update organization successfully |
| ✅ Should fail without proper permissions | PASSED | 0.65s | Should fail without proper permissions |
| ❌ Admin should delete organization successfully | FAILED | 1.08s | Admin should delete organization successfully |
| ✅ Should fail without proper permissions | PASSED | 1.24s | Should fail without proper permissions |
| ✅ Admin should list all organizations | PASSED | 0.79s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.35s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.67s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 0.65s | Should fail without membership |
| ✅ Organization admin should only access their own organization | PASSED | 1.36s | Organization admin should only access their own organization |
| ✅ Super admin should access all organizations | PASSED | 1.29s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 1.28s  

---

### Test: Regular user should create organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.84s  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.08s  

---

### Test: Admin should get organization by ID
**Status:** ✅ PASSED  
**Duration:** 0.86s  

---

### Test: Should fail with invalid organization ID
**Status:** ❌ FAILED  
**Duration:** 0.59s  
**Error:** Cannot read properties of undefined (reading 'status')  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

---

### Test: Admin should update organization successfully
**Status:** ✅ PASSED  
**Duration:** 0.83s  

**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: ebc9ef50-2ef7-4065-b672-e81aac3dafa3
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748378101352",
  "description": "Updated description",
  "phone": "+9876543210"
}
ℹ️ 🔍 DEBUG: Admin token length: 1154
ℹ️ 🔍 DEBUG: Admin token start: eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZW
```

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 0.65s  

---

### Test: Admin should delete organization successfully
**Status:** ❌ FAILED  
**Duration:** 1.08s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoHaveProperty[2m([22m[32mpath[39m[2m)[22m

Expected path: [32m"message"[39m
Received path: [31m[][39m

Received value: [31mtrue[39m  

---

### Test: Should fail without proper permissions
**Status:** ✅ PASSED  
**Duration:** 1.24s  

---

### Test: Admin should list all organizations
**Status:** ✅ PASSED  
**Duration:** 0.79s  

---

### Test: Should fail without admin permissions
**Status:** ✅ PASSED  
**Duration:** 0.35s  

---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.67s  

---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 0.65s  

---

### Test: Organization admin should only access their own organization
**Status:** ✅ PASSED  
**Duration:** 1.36s  

---

### Test: Super admin should access all organizations
**Status:** ✅ PASSED  
**Duration:** 1.29s  

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
