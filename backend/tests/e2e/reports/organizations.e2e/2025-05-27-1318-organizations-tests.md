# E2E Test Report: organizations-tests

**Date:** 5/27/2025  
**Time:** 1:18:39 PM  
**Duration:** 27.09s  
**Tests:** 1 total, 0 passed, 1 failed  

---

## Test Summary

| Test Case | Status | Duration | Description |
|-----------|--------|----------|-------------|
| ❌ Admin should create organization successfully | FAILED | 1.18s | Creates organization with admin permissions |


---

## Detailed Execution Log

### Test: Admin should create organization successfully
**Status:** ❌ FAILED  
**Duration:** 1.18s  
**Error:** Request failed with status code 500  

**Request 1:**
```json
POST /organizations
{
  "name": "Test Organization 1748344695608",
  "description": "Test organization for E2E testing",
  "type": "shelter",
  "address": "123 Test Street",
  "phone": "+1234567890",
  "email": "test@organization.com"
}
```

---



---

## Legacy Format (Payloads & Responses)

### Payloads Sent
### Create Organization (Admin)

```json
{
  "name": "Test Organization 1748344695608",
  "description": "Test organization for E2E testing",
  "type": "shelter",
  "address": "123 Test Street",
  "phone": "+1234567890",
  "email": "test@organization.com"
}
```



### Curl Commands
### Create Organization (Admin)

```bash
curl -X POST http://localhost:3000/api/organizations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzQ0NjkzLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNDQ2OTMsImV4cCI6MTc0ODM0ODI5MywiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.en0kEqwXkLvCVo_FdjNH2SMxq2AOwEu6l_I879vRrLvZfI1a7TeFxDVs1EbEmnirOfKIr3nm-7f4R1Z-zyDdpUigQ79Ye31mi3icxdXLbugLfsbEp9GYfIfJDSVAohpUHt7MHx6D1zaW1sj7iYXiLXIHtL5wNykOScdW82WJ69c8KPsCEQHHT1-MMVJj9cLdN8RwgMTJHlpVVhZsMthUPzgKpZLklrVrVQ4yOT5JTabtrowM7iIZ2WdpODTWI3mOrv6zl0RAIh1aTu9_uCfDT-ZisyWzEmwn8lyQekcn6wZSO0rOdgeE6ZXRG0Vz2Tat7LPaYLy5ZXM0KyvtSW0_kg" \
  -d '{"name":"Test Organization 1748344695608","description":"Test organization for E2E testing","type":"shelter","address":"123 Test Street","phone":"+1234567890","email":"test@organization.com"}'
```



### API Responses


---

## Status & Observations



**Observations:**
- Total organizations created: 6
- Total test users created: 3
- All test data cleaned up automatically

---
*Generated automatically by Enhanced E2E Reporter*
