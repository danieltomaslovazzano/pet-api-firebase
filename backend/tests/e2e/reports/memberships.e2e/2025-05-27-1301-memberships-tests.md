# Reporte E2E: memberships-tests

**Fecha:** 2025-05-27-1301
**Test:** memberships-tests

---

## **Payloads enviados**
### Create Membership (Invite User)

```json
{
  "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
  "userId": "nDnRbSGUnvfgo7QAfXc123Sr1kL2",
  "role": "member"
}
```



---

## **Curl de ejemplo**
### Create Membership (Invite User)

```bash
curl -X POST http://localhost:3000/api/memberships \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZlNjVjY2I4ZWFkMGJhZWY1ZmQzNjE5NWQ2NTI4YTA1NGZiYjc2ZjMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZGFuaWVsIGxvdmF6emFubyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLNDZpaXVjc3NRRF9aR1pWNUVFc1VtTXduTUlhYVE0eWxnMlc2TDdzMkJoWjE4R1B0U3R3PXM5Ni1jIiwicm9sZSI6Im1vZGVyYXRvciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wZXQtYXBpLWRldi0zNTExNSIsImF1ZCI6InBldC1hcGktZGV2LTM1MTE1IiwiYXV0aF90aW1lIjoxNzQ4MzQzNjkxLCJ1c2VyX2lkIjoidFlGeTRlY2QwVFkyZkVydzlqc3A2ZTFYSHZ3MSIsInN1YiI6InRZRnk0ZWNkMFRZMmZFcnc5anNwNmUxWEh2dzEiLCJpYXQiOjE3NDgzNDM2OTEsImV4cCI6MTc0ODM0NzI5MSwiZW1haWwiOiJkYW5pZWxsb3Zhenphbm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGFuaWVsbG92YXp6YW5vQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lDjTu9fkPw6bA9QogwL2tVRAun4KitgulCTrVCA3q4_Fy2a5h8KG1Gs9sf-xN_73nUhOogaSpSWtFvB4CWKlMfs1KbXibeGJdqBBQb6WIdBiUJRDqXHMUZ6vTj0qWh4FcO0xJ1j4nt9Tg53xFmNxjNrukiWJobHT0fsGn1m0ATGrrOrnGtvEOeObzRRxmpwwbyOZx4CjYFYM7t0PAJyITalaWl00hkA_vZxJFl7-p9LjYk7gj4HODSkvZMlIZv7I95ch9Kr8W4wjcA4HjJ5GgFxdGfw1P4CzUH1tt93x2xMcHntYqQJH_9pZ0yYQ01rkmWTK_PF2Xc2FUqQtHr2UxQ" \
  -d '{"organizationId":"4791d2ab-8c13-4cc0-a7e8-905224fbd2ff","userId":"nDnRbSGUnvfgo7QAfXc123Sr1kL2","role":"member"}'
```



---

## **Respuestas**
### Create Membership (Invite User)

```json
{
  "id": "571d0fdb-c97f-438e-b5b0-69e06dad4f81",
  "userId": "nDnRbSGUnvfgo7QAfXc123Sr1kL2",
  "organizationId": "4791d2ab-8c13-4cc0-a7e8-905224fbd2ff",
  "role": "member",
  "status": "active",
  "createdAt": "2025-05-27T11:01:36.267Z",
  "updatedAt": "2025-05-27T11:01:36.267Z"
}
```



---

## **Status del test**

✅ All membership tests completed successfully

**Observaciones:**
- Test organization: Test Org for Memberships 1748343693654
- Total memberships created: 6
- Total test users created: 8
- All test data cleaned up automatically
