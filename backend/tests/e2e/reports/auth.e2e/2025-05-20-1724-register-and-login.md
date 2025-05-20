# Reporte E2E: register-and-login

**Fecha:** 2025-05-20-1724
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747754671594@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747754671594@example.com",
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
  -d '"{"email":"e2euser_1747754671594@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747754671594@example.com","password":"test1234"}''
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
    "id": "55OWnG6y0chtK7y50vOCw7ALjmu2",
    "email": "e2euser_1747754671594@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0Nzc1NDY3MiwidXNlcl9pZCI6IjU1T1duRzZ5MGNodEs3eTUwdk9DdzdBTGptdTIiLCJzdWIiOiI1NU9Xbkc2eTBjaHRLN3k1MHZPQ3c3QUxqbXUyIiwiaWF0IjoxNzQ3NzU0NjcyLCJleHAiOjE3NDc3NTgyNzIsImVtYWlsIjoiZTJldXNlcl8xNzQ3NzU0NjcxNTk0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0Nzc1NDY3MTU5NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Qsj1qwGEQyido8BtyYIV09ooP_s1t364maPu9Gs-mdx7XgNZyGSZGZ4923k7g4WNGSP_79BdJAL3ix2Zs0XLUXWQU_vxE9k6o5-X-TVAmTrdxHsufyfEMKivtjvtWUu6nR1d_qUAcvyTogntiPlmj_1QEF93RG5wuIZ_XsO2Mj8safzE0rkNmemorQUqtL8tjRNjFEPQDvamOC66azQnTsXB2lf5jYHHI6mLr47CNPADGt6mHilpVlOsfrSrRhC0ZYs1PCBriqZsVdMwtKZh53_vtSb0QgBRmSHfYUQVWloEK7F1UjFQeGJZSRZuawIwQdA6kcVqjiuE4pqxZuvhcg",
    "refreshToken": "AMf-vBwrC9hg3vA14Bff_SU1iqoJV2iQMiHAJvady4bdBL5jIAJOXfJrjqJBT0fXzm2cHGqQS0-kwFAIEUkPkrSqyGL5DCZeDBeXB7-bvHyvJ4Ujpg1d9PGfkbI4KHOnKafUCcMn5Soddw07QXuMXQlMigQ05eaeAxI7d7iJ8I4Q3W8k8ws3VJeQ0j7aFlvZFEgTooqi0vmRY7YGyky_Pg6MPA49rzA4mQRMKtYNHfRLkZSEFLTft3A",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "55OWnG6y0chtK7y50vOCw7ALjmu2",
    "email": "e2euser_1747754671594@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0Nzc1NDY3MywidXNlcl9pZCI6IjU1T1duRzZ5MGNodEs3eTUwdk9DdzdBTGptdTIiLCJzdWIiOiI1NU9Xbkc2eTBjaHRLN3k1MHZPQ3c3QUxqbXUyIiwiaWF0IjoxNzQ3NzU0NjczLCJleHAiOjE3NDc3NTgyNzMsImVtYWlsIjoiZTJldXNlcl8xNzQ3NzU0NjcxNTk0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0Nzc1NDY3MTU5NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.e2rczw45lXd8mSfuYZwgq1M3iKcCCqs3c_3hfOAVQm1ziDOyrXpdgaGpOKBwRQpa7EUzRCdy9DlJAouVGC4_kU4iEnWz8wy9PAjX_vq1tYn5OoneUe26J7oLJrjOXS1HLYeC-jhEmthnnK8qworj2jyE-WrqdJrtC7s6uJn-uNA7GkaWkeftSt2UiMJpogsY_rr6IwmZEYjypOzFkY7-P6ppIyBF0ln3KgYwhsbFhwCYfTM5BMj4D3cEVynLptNgqQCWM6Kjx_mwGEv1Vw16j7K0-TV91FXHhFsXTPKE-i74D2i1XPVZctgWPc7kMQdgR4W0P9mqHkjhDpuRn7Gtzg",
    "refreshToken": "AMf-vBwhqcykMf-Ps0ok8U1tGkTKENikKTm3jWkVlMTQW0_E09ipB1K4MdwV-g9x-XyVDVj7dpiX5SDdHqIvUk0cxCWxKJEZEtgmKJVeq3m5jlg-srzBDeDvhtArqx3zZHFIULvJj2BzjAMmuGgcWik-3i2SJ25ceZH3pjB_85cD4-YS-PF08bFtLdgQW7znQc3_UcnVvflCKVZYMGSBgzu5MKva6aoSqbY-hn1cii5SyS31dDs3p5o",
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
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0Nzc1NDY3NCwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NzU0Njc0LCJleHAiOjE3NDc3NTgyNzQsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HCs7Omwv3UsSE34afGf1BzzyKKHAciglca3r9uB4AsWC8c_aNY4rZ5GPxAsimvdP8ZNtlGLWYRZEjTG0F4B7oteHtOIX1jPEgMT4pzmrhk4FGBx7viu57KiOtpoOXTi3NkNpB8EligSlVzcen_j5CSCnuuGcCrcDAY4nuPpPVO7fY6wqUAshyyIcXBOY-chLgH5pZ6mM5JpiNyt3lEMWk5KE1NcRnNK6DbXNsFyJCdL--SP-hNy3x1iUYdzbvzEL6ZAfbU1bMmiD_fVIcuamCQ743uImR4tm19iISuy3COzA-n2EG-ouIFa-ry-ARZPfHWdEGSys9iwrx9aQvW_osw",
    "refreshToken": "AMf-vBxlDTABe56Km0euI3yewBsW9xE7vWtPdcDnE167Q4i526Qm1MnZe3qnrhK0pZV160oEtZMY15Ijb8SuhlxaCdYcp9PPH_jkOq8auQd9lyA_J5AdKWZkoHk4g1k_ZyGZmh010Q4IusrVwRd2lHoVqGAAjWqkjyYv2vW-G9siabRF46JAOVJGHrzj2fNI1HgM2l04_HBXgYvvQRDcMMd9GKq6uXs8P2rtfgXHIARIr82XE_ctLEY",
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


---

## **Status del test**

- [x] Registro y login ejecutados correctamente
- [x] Usuario creado y autenticado
- [x] Sin errores

**Observaciones:**
- Email de usuario: e2euser_1747754671594@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
