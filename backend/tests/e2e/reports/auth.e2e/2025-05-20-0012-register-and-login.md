# Reporte E2E: register-and-login

**Fecha:** 2025-05-20-0012
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747692717392@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747692717392@example.com",
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

### Acceso denegado sin token
Sin Authorization

---

## **Curl de ejemplo**
### Registro

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747692717392@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747692717392@example.com","password":"test1234"}''
```

### Login Superadmin

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"daniellovazzano+2@gmail.com","password":"PC.103638dl"}''
```

### Acceso denegado sin token
```bash
curl -X GET http://localhost:3000/api/admin/users
```


---

## **Respuestas**
### Registro

```json
{
  "message": "Usuario registrado correctamente",
  "user": {
    "id": "tSiFlOKXcbQsmvwZ98qC4o5HLr13",
    "email": "e2euser_1747692717392@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzY5MjcxNywidXNlcl9pZCI6InRTaUZsT0tYY2JRc212d1o5OHFDNG81SExyMTMiLCJzdWIiOiJ0U2lGbE9LWGNiUXNtdndaOThxQzRvNUhMcjEzIiwiaWF0IjoxNzQ3NjkyNzE3LCJleHAiOjE3NDc2OTYzMTcsImVtYWlsIjoiZTJldXNlcl8xNzQ3NjkyNzE3MzkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzY5MjcxNzM5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.mpDRWh-4WhokgxL_NoAIy0hHshT7EHO0H7PTNNqT2v92PeQjDOt3Hi120BRRmDLmEKIBq2ziRoGLRlhWdkLjx7jUQVlSml0sd5wPeRGmlxnHn-GacqaATxOY8-Htip564lwPtMUnOhHPYXbhJq8NdFInGrrsSnq-Mug-rVBXImHfs3Nk065lQrMQd7LZVbtn8QjVt09LpO2SzbOg9HeSFHseJRqMBcSSXwfH0Ep4sKC8Gfzbtl8eN1UUfQmuBDncboeTFwXCHyXaIzvvyBuV2_QpXg4r0_DCJ3qSUlHaVVn6ww76tKnnD-Ajz1AY45LFoZH9SGBswa8wGkLzklUXcw",
    "refreshToken": "AMf-vBwXHGtqXxWwNO7mwTSMap1cn5qQluH3jOxZe72IZ-A0PMqRWXPKIG_bqfx0OFLhFn4iAGFCPXfCeBba1QK8WJ3PJNudwdxo0StngdclsfmmFeEaCWWl0PGTIo7I59R_g2RJdotDJap-yEpkB-MW6_cBwJsw7o4l9p4DtDQ_oqDWJTpBgOyz6d8GJj5qEnPZxpzwLOyY4jPZiK9J2WQ6gqv7yYgKQZNdCHWw-QbZsn-BVrx8754",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "tSiFlOKXcbQsmvwZ98qC4o5HLr13",
    "email": "e2euser_1747692717392@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzY5MjcxOSwidXNlcl9pZCI6InRTaUZsT0tYY2JRc212d1o5OHFDNG81SExyMTMiLCJzdWIiOiJ0U2lGbE9LWGNiUXNtdndaOThxQzRvNUhMcjEzIiwiaWF0IjoxNzQ3NjkyNzE5LCJleHAiOjE3NDc2OTYzMTksImVtYWlsIjoiZTJldXNlcl8xNzQ3NjkyNzE3MzkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzY5MjcxNzM5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VDlplcge8dfB0zh6MOCNpXFJBo7dfLDgcQvNULFVYvpyvnkwtKX0DLr3MLNpJ3rXD6BwxK0Gdq5wQa1wGjGPuTO7ivf4H-fcVMVu7crTKtimW2utS1Q5hsU8HEVwsks6SprlqbPkKXro44mqdZmkYHGD6kGSQBZ0ifK9JarbDF65Lb8C00LdX_1b0dzIipw9N7DbQtL8rBrmb5wbEJVjFz6QPAK1O9Fz0iheB5EPs0-6ocANLWeITD23lL3-rbB4fjqNz5kxnj841_MKn3B_DJG_qCJcph0qhYuZapjwpER4At0JSxX5QboDaAC5WfX0Y1Vvtq2eoFPSuiy1tDiUog",
    "refreshToken": "AMf-vBzKuWockezxGtjLx0Cwf70YniLu6oWYsvuFh7Juc8sqU7GWNYAduA-uCdmy56S1knAYU6wHe6ClUDdcOXzaDkd_cPnF79yoLhck9u6PGEiFXaAcra6t7OFBH57jQkS7qF2fzjvLFa1fkKan7iSsR-WKuQxPMbqPwjZ8LZSlH1Mpb5NAghq0L6A9i9BZ4yFpgyl9NpM3Nkj2K_z1mYHplEu9OgUNbRbSs17vw98vCZH9JqOeQpk",
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
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzY5MjcyMCwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NjkyNzIwLCJleHAiOjE3NDc2OTYzMjAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LxTm24qfVvTgXDNaWu-FXl_g050REoGDXeinTTE0O7bah3yWmQBnG-YuEThl0jcSBeDc5cvW65pcSYK_IqQy0S3eFSXUuv9hhy5dS9NNFO533Qd_6pDa1dgXSodsffFTSbWO5q1MSvnBUwoest_V2pE3U3NLzUqEF2reeZZRMhOUJ7OTQiVxaXfZ5YWXHoQpZoOTjBYKKPrOK2N-0L4gKYdPeI2bg7DqFqi49b_Wu4FAJbX56_A7KvNXL0K5Pxunpx1D5xGybMTjhRf3rOqj4RVyIE59bA5lYDXZMtMTjonei8XcaBCZ9Qgd59rIeBaG2WNrrtJe3Wt5KThK2Se_zQ",
    "refreshToken": "AMf-vBwv80Lf6ZjIv5eAdLF9_TpXy0YhN0Y23c_-7CpRS10A-0fBugJaBGiXY3iWsSEg-I_fe1tkABkYhXGx2CZuCvlkaAcV9H2iFxgvklfBfV7iUEH-9cLUAf6tAjgiW4K2YUljkhZlB4Ii1Dqj8oi0Igj11oRjGsKGLZEPUPSaCS-FkHWJbDkU1jK-xSxKF0L1n-p1B_7jMQzqQX5Nfm5KcdFzgSwhjIvnyRWb84yXRcqaV2VgkpY",
    "expiresIn": "3600"
  }
}
```

### Listado de usuarios (admin)

```json
[
  {
    "id": "tYFy4ecd0TY2fErw9jsp6e1XHvw1",
    "name": "daniel",
    "email": "daniellovazzano@gmail.com",
    "role": "admin",
    "phone": null,
    "status": "active",
    "emailVerified": false,
    "lastLoginAt": null,
    "createdAt": "2025-05-17T19:43:00.000Z",
    "updatedAt": "2025-05-17T19:43:00.000Z",
    "origin": "email",
    "isBlocked": false
  },
  {
    "id": "ipfuAjBzv7WAGK1ASJ2dlxI0RI73",
    "name": "daniel",
    "email": "daniellovazzano+2@gmail.com",
    "role": "superadmin",
    "phone": null,
    "status": "active",
    "emailVerified": false,
    "lastLoginAt": null,
    "createdAt": "2025-05-17T17:43:00.000Z",
    "updatedAt": "2025-05-17T17:43:00.000Z",
    "origin": "email",
    "isBlocked": false
  },
  {
    "id": "koJ5EOp5aJNQbj0eJUp8bXXaU912",
    "name": "romino",
    "email": "superadmin@example.com",
    "role": "superadmin",
    "phone": null,
    "status": "active",
    "emailVerified": false,
    "lastLoginAt": null,
    "createdAt": "2025-05-17T14:22:00.356Z",
    "updatedAt": "2025-05-17T16:13:28.251Z",
    "origin": "email",
    "isBlocked": false
  },
  {
    "id": "o16KsHG4yrcFHBvvVmVwvlOl52i2",
    "name": "paco",
    "email": "userB@example.com",
    "role": "user",
    "phone": null,
    "status": "active",
    "emailVerified": false,
    "lastLoginAt": null,
    "createdAt": "2025-05-17T14:21:58.165Z",
    "updatedAt": "2025-05-17T16:13:28.251Z",
    "origin": "email",
    "isBlocked": false
  },
  {
    "id": "06maBdjJNiZ1IsgjAodIKi3FwNA2",
    "name": "pep",
    "email": "userA@example.com",
    "role": "user",
    "phone": null,
    "status": "active",
    "emailVerified": false,
    "lastLoginAt": null,
    "createdAt": "2025-05-17T14:21:56.549Z",
    "updatedAt": "2025-05-17T16:13:28.251Z",
    "origin": "email",
    "isBlocked": false
  }
]
```

### Acceso denegado sin token
```json
{
  "error": "Token no proporcionado"
}
```


---

## **Status del test**

- [x] Registro y login ejecutados correctamente
- [x] Usuario creado y autenticado
- [x] Sin errores

**Observaciones:**
- Email de usuario: e2euser_1747692717392@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
