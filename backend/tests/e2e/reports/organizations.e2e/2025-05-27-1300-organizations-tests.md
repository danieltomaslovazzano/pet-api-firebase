# Reporte E2E: organizations-tests

**Fecha:** 2025-05-27-1300
**Test:** organizations-tests

---

## **Payloads enviados**
### Create Organization (Admin)

```json
{
  "name": "Test Organization 1748343593305",
  "description": "Test organization for E2E testing",
  "type": "shelter",
  "address": "123 Test Street",
  "phone": "+1234567890",
  "email": "test@organization.com"
}
```



---

## **Curl de ejemplo**
### Create Organization (Admin)

```bash
curl -X POST http://localhost:3000/api/organizations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzQzNTkwLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNDM1OTAsImV4cCI6MTc0ODM0NzE5MCwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.AQpnwHgUDFo70i0g7pnaMZjMIs1m79aVYjU8SWJyzGjBpz2uFePvXtD7HwoiwofS3Is3BhVnRGq7kCmSRcFJ18_MS4QI7OIkIburm4ZNdhtdcQpiKwvBOm3e8d1FVEmJqjagpoejgadXOt_8hs6aVsUE0QINKZXl7n2hjujWwcSoQrflzRFEJmMP2Op-qCi3SDyZxutR1_djPWjvh04ZCiMiZvFsW9PeDl9p77tN2nPNihRz3aoukMjRpUfU-tX-a61mHrJXaK3w3GmtqKUNrUwVDU8l6NyIwHFESlt2Fp7iVhXSmNapvciPXe0-8BELRK29lL6YYaJKWgRD-zqV9A" \
  -d '{"name":"Test Organization 1748343593305","description":"Test organization for E2E testing","type":"shelter","address":"123 Test Street","phone":"+1234567890","email":"test@organization.com"}'
```



---

## **Respuestas**


---

## **Status del test**

✅ All organization tests completed successfully

**Observaciones:**
- Total organizations created: 6
- Total test users created: 3
- All test data cleaned up automatically
