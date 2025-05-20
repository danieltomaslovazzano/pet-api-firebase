# Reporte E2E: register-and-login

**Fecha:** 2025-05-17-1750
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747497043836@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747497043836@example.com",
  "password": "test1234"
}
```

### Login Superadmin

```json
{
  "email": "daniellovazzano+2@gmail.com",
  "password": "PC.103638dl"
}
```


---

## **Curl de ejemplo**
### Registro

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747497043836@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747497043836@example.com","password":"test1234"}''
```

### Login Superadmin

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"daniellovazzano+2@gmail.com","password":"PC.103638dl"}''
```


---

## **Respuestas**
### Registro

```json
{
  "message": "Usuario registrado correctamente",
  "user": {
    "id": "H3df2bXcBReMxbJf9V0d2BHqLze2",
    "email": "e2euser_1747497043836@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NzA0NCwidXNlcl9pZCI6IkgzZGYyYlhjQlJlTXhiSmY5VjBkMkJIcUx6ZTIiLCJzdWIiOiJIM2RmMmJYY0JSZU14YkpmOVYwZDJCSHFMemUyIiwiaWF0IjoxNzQ3NDk3MDQ0LCJleHAiOjE3NDc1MDA2NDQsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk3MDQzODM2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NzA0MzgzNkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jifD4Rq4BIvUOcAyCdXv1g8wUU_GXv-TfYdzfvdXLWXrgruUE-5x0vlJtkZUC1zuQUmzagqH4ltSyZUO4wfu4Itq-yPRCUDQTi5xqCWD7fm6sx7s2GPn0JvO6KSaokM5NiEKTVGA2jGORRsd_jDMmjUJdccMbhdTwzo_QBwmVxeWVw_X2z5OKxLEuthCsxFfmUpFdvEsXjKyrY0ck3UgEzACcQq5CvbLbyOZxRx2NwnEkLRLviY0md9grqlTWnh2l8X3UYH9EVr8GfAjWNnmVnKVRgczqvT7cI-zCtboqTgaqf1sTlGovyPdEGXRyzNzfuS9-GQCPy1vncAGwDvWMQ",
    "refreshToken": "AMf-vByEn6hLUAKfp4q1HharzHn5fRFUzMJ-6XXcWFcs12fS756PjAKkPOMhrNAohTdG1lndKRpEYy_0ozldwWkqMioHxRugvVy-Gocyxj5x_jojjX-FmD59kCcdw3sim_HhHPvndZyX5QzBE_k1x556d_SGZjKVLTK4E_oiRa4vgGfLZUf-JSLosBnu1SIXHRjpJbyDBosEpuHpScCBIzZPfuXBiGD38GIbXOYUuuRJhT9pNP83ED0",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "H3df2bXcBReMxbJf9V0d2BHqLze2",
    "email": "e2euser_1747497043836@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NzA0NCwidXNlcl9pZCI6IkgzZGYyYlhjQlJlTXhiSmY5VjBkMkJIcUx6ZTIiLCJzdWIiOiJIM2RmMmJYY0JSZU14YkpmOVYwZDJCSHFMemUyIiwiaWF0IjoxNzQ3NDk3MDQ0LCJleHAiOjE3NDc1MDA2NDQsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk3MDQzODM2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NzA0MzgzNkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jifD4Rq4BIvUOcAyCdXv1g8wUU_GXv-TfYdzfvdXLWXrgruUE-5x0vlJtkZUC1zuQUmzagqH4ltSyZUO4wfu4Itq-yPRCUDQTi5xqCWD7fm6sx7s2GPn0JvO6KSaokM5NiEKTVGA2jGORRsd_jDMmjUJdccMbhdTwzo_QBwmVxeWVw_X2z5OKxLEuthCsxFfmUpFdvEsXjKyrY0ck3UgEzACcQq5CvbLbyOZxRx2NwnEkLRLviY0md9grqlTWnh2l8X3UYH9EVr8GfAjWNnmVnKVRgczqvT7cI-zCtboqTgaqf1sTlGovyPdEGXRyzNzfuS9-GQCPy1vncAGwDvWMQ",
    "refreshToken": "AMf-vBxP8GDSennDvmuvx1SMsinfXooQbTm9XSQrZLXeb5kASJ3gRjjmrqwzWi_vJro25FQQYqsrbFl2qpvVr1LOzve81O9lcFZOxRXaaiErL1rqWnM8ZGmCR6Qf0IIDrRCtM7r3DTFgR38G6h8D1msGyZVzLMwu_0ZB4WiQtzkA0CgrPZEER_bXvXZTel_4O-rsjoroGqbM5Ostf72s2kJLRW_v0Byq7kylSXuffuD0MHc_vYkP0s0",
    "expiresIn": "3600"
  }
}
```

### Login Superadmin (respuesta cruda)

```json
{
  "user": {
    "id": "ipfuAjBzv7WAGK1ASJ2dlxI0RI73",
    "email": "daniellovazzano+2@gmail.com",
    "role": "superadmin",
    "isSuperAdmin": true
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NzA0NSwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NDk3MDQ1LCJleHAiOjE3NDc1MDA2NDUsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SYf3ZmCkp4byyc6sWyrij56n5HTuszWpJBPf8t-YqExXVW0LlxLnk-kw8Ci44g8GY1Jf1hAZVZRvJNKgUrergUoWz_IHV5-4j7oztOFPX-INOoXn4HF5fcvv02QqJ5mX1K54zxD_WasDcesp0cVa8tDvJIxJrVz_hWkWhThCTQd2erSlt2JBI1EHTE3AKM6AmbM0GcNQEBxTna4J-9SVr31ScS5UtpkkUqKeBUYPp1gWWGk1YBOcxViuRG4CEz0zdkbfCLB0w6NbV0HpSIYS3Yy_jZqhd9bYqAUmnw_ubZkI5OPv8ytPoxbF9pXmKDtyD92w6ucubRL0gs2opvviUQ",
    "refreshToken": "AMf-vBx8yVRT4hcSgukT7tMDl-Oay8iAiUAHgd5K36wYVUz-lQL60GL2u5PRrWQWl2aKoS7PFBQIHaT6VVzrgg5Ek8yVxixS7sH_pGTHj7nqruz-fh2GCyT4kRz3K6v3vYN1XDh5CuSYff7c48ntXEjrNUHOXNLHEN8-3q78-IJRnRyhH-rL0Y4Lpxj7YPszlDnqRu1ghiaF2ZNjXtW8sS79K4EaTLtOPSn1V-lj3Hci5kObnFGmPIs",
    "expiresIn": "3600"
  }
}
```


---

## **Status del test**

- [x] Registro y login ejecutados correctamente
- [x] Usuario creado y autenticado
- [x] Sin errores

**Observaciones:**
- Email de usuario: e2euser_1747497043836@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
