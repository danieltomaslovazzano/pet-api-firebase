# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 3:05:40 PM  
**Duration:** 7.98s  
**Tests:** 1 total, 0 passed, 1 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Admin should update organization successfully | FAILED | 0.70s | Admin should update organization successfully |


---

## Detailed Execution Log

### Test: Admin should update organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.70s  
**Error:** Request failed with status code 500  

**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: 6db29d0d-a420-4861-9ede-e06d55e9f365
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748351136093",
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



---

## Legacy Format (Payloads & Responses)

### Payloads Sent


### Curl Commands


### API Responses


---

## Status & Observations



**Observations:**
- Total organizations created: 1
- Total test users created: 1
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
