# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 1:25:22 PM  
**Duration:** 27.98s  
**Tests:** 16 total, 6 passed, 10 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Admin should create organization successfully | FAILED | 1.18s | Admin should create organization successfully |
| ❌ Regular user should create organization successfully | FAILED | 0.59s | Regular user should create organization successfully |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ❌ Admin should get organization by ID | FAILED | 0.95s | Admin should get organization by ID |
| ✅ Should fail with invalid organization ID | PASSED | 0.58s | Should fail with invalid organization ID |
| ✅ Should fail without authentication | PASSED | 0.01s | Should fail without authentication |
| ❌ Admin should update organization successfully | FAILED | 0.57s | Admin should update organization successfully |
| ❌ Should fail without proper permissions | FAILED | 0.48s | Should fail without proper permissions |
| ❌ Admin should delete organization successfully | FAILED | 0.60s | Admin should delete organization successfully |
| ❌ Should fail without proper permissions | FAILED | 1.12s | Should fail without proper permissions |
| ❌ Admin should list all organizations | FAILED | 0.36s | Admin should list all organizations |
| ✅ Should fail without admin permissions | PASSED | 0.41s | Should fail without admin permissions |
| ✅ Admin should get organization members | PASSED | 0.59s | Admin should get organization members |
| ✅ Should fail without membership | PASSED | 1.06s | Should fail without membership |
| ❌ Organization admin should only access their own organization | FAILED | 0.61s | Organization admin should only access their own organization |
| ❌ Super admin should access all organizations | FAILED | 0.56s | Super admin should access all organizations |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ❌ FAILED  
**Duration:** 1.18s  
**Error:** Request failed with status code 500  

---

### Test: Regular user should create organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.59s  
**Error:** Request failed with status code 500  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

---

### Test: Admin should get organization by ID
**Status:** ❌ FAILED  
**Duration:** 0.95s  
**Error:** Request failed with status code 404  

---

### Test: Should fail with invalid organization ID
**Status:** ✅ PASSED  
**Duration:** 0.58s  

---

### Test: Should fail without authentication
**Status:** ✅ PASSED  
**Duration:** 0.01s  

---

### Test: Admin should update organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.57s  
**Error:** Request failed with status code 500  

---

### Test: Should fail without proper permissions
**Status:** ❌ FAILED  
**Duration:** 0.48s  
**Error:** [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m403[39m
Received: [31m500[39m  

---

### Test: Admin should delete organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.60s  
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
**Duration:** 0.41s  

---

### Test: Admin should get organization members
**Status:** ✅ PASSED  
**Duration:** 0.59s  

---

### Test: Should fail without membership
**Status:** ✅ PASSED  
**Duration:** 1.06s  

---

### Test: Organization admin should only access their own organization
**Status:** ❌ FAILED  
**Duration:** 0.61s  
**Error:** Request failed with status code 404  

---

### Test: Super admin should access all organizations
**Status:** ❌ FAILED  
**Duration:** 0.56s  
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
- Total organizations created: 6
- Total test users created: 3
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
