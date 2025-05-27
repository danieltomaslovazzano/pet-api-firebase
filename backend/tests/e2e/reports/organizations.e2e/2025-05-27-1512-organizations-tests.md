# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 3:12:25 PM  
**Duration:** 7.17s  
**Tests:** 1 total, 0 passed, 1 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Admin should update organization successfully | FAILED | 0.72s | Admin should update organization successfully |


---

## Detailed Execution Log

### Test: Admin should update organization successfully
**Status:** ❌ FAILED  
**Duration:** 0.72s  
**Error:** Request failed with status code 500  

**Console Output:**
```
ℹ️ 🔍 DEBUG: Update org ID: f75aa09e-61d7-4453-bec9-a405e0577174
ℹ️ 🔍 DEBUG: Update data: {
  "name": "Updated Update Test Org 1748351541622",
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
