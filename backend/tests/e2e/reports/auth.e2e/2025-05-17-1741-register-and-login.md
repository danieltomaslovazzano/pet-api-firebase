# Reporte E2E: register-and-login

**Fecha:** 2025-05-17-1741
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747496487888@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747496487888@example.com",
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
  -d '"{"email":"e2euser_1747496487888@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747496487888@example.com","password":"test1234"}''
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
    "id": "2X4w8ykjxDML9gFS8hydZFrITZw2",
    "email": "e2euser_1747496487888@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjQ4OCwidXNlcl9pZCI6IjJYNHc4eWtqeERNTDlnRlM4aHlkWkZySVRadzIiLCJzdWIiOiIyWDR3OHlranhETUw5Z0ZTOGh5ZFpGcklUWncyIiwiaWF0IjoxNzQ3NDk2NDg4LCJleHAiOjE3NDc1MDAwODgsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk2NDg3ODg4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NjQ4Nzg4OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YRCvKBz56vyr_uX6R7oX1oGSCX8b6O6bRNaO8yB5XEyU91oayF_6YGGlVHVeX7VV2DwHls_zTG_oe5kyYb7K1ilTY1aqstlkmtAElv2GSbyX97vgNxxA11VupnPYHm8TH0_dmLM0WXKVrG8eg17qTU45K8Q_HUicf6FXtF0PenzseGWDWwSJpeS3TJTIbgsBRpgvK-GFM7oxAjGcKC2Q_up4QMcKLp_dCouRottvESBLuAMvCgwQAIOX7unzGNfyLE4zo3Bov1nGD-RP3SigtbVIa2pU7ZLJaZGTiKDzbtqly6ztWcfn9JluamVU7AKV-cLWJmz6cINsrZVb0Jo3Cw",
    "refreshToken": "AMf-vBzFPGXxWRJmEHLJ-AnDZN6pjxQLeXhlaTQJ4K3JpMgV1y05RXaCPyMprxhcb2M_m_PTiH1ADnsWcT360gNffEPu2ao1Rl_uP6D8wxzF6eQ6DTGLzWhTy_mb4Wrbu6zzrn5mmskScFiugZwY30P8fb9r5srXAKMBvGDyBwQh9SaNKh-miAl42RLqxLvOJ3YbMTh6io09xTgX9eW7wuJ_aXpboReEdlLVPXDsqbsflBflc6odRb4",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "2X4w8ykjxDML9gFS8hydZFrITZw2",
    "email": "e2euser_1747496487888@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjQ4OSwidXNlcl9pZCI6IjJYNHc4eWtqeERNTDlnRlM4aHlkWkZySVRadzIiLCJzdWIiOiIyWDR3OHlranhETUw5Z0ZTOGh5ZFpGcklUWncyIiwiaWF0IjoxNzQ3NDk2NDg5LCJleHAiOjE3NDc1MDAwODksImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk2NDg3ODg4QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NjQ4Nzg4OEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Ye2IAlIosWCHMA-vpfMwMbewa3hoO6czaM3Bwuaqoy9RIigMeuWPqAn-JxC-Pj64uBsGEILogJ_TdLD6dLNNMdKbK7xDR0F181buWE9iKtlqSfD9p6OZPBtTz-dTGjeYxl5ufU3OM3YJEUAyC0BFPb68OXS0bKTksofHiinTd_GdMb3KdZgWXam8dta7iDci4_5wmk83T64q3aqMQNh807UKnZUHUci1lQAVlNBsLS90w0IE6RnRV0d6jR_VowA1PN9hHiNPBt9uUlepOrgDBgB0gyiDJaMbsmD30zg4B9Jyqu0LQaRmjqi3-ClA0W42m92hwa6qzEpmMMocNohMdw",
    "refreshToken": "AMf-vBz9g5wymN7hTOcPakWwCHlSKSGiQVJ98B9g_Q1O7AYmyhz6W0AhWoqiPSuN4jnIapcsHmEVVtBDVNSUagMuIVwcAkERMEyccS9ymamG42lPUWOkg3YkZJQuIvcCX0ltRbWCBnm1Y7U7daMcsYp-DOOSxbdX1tnFxMYdMLuaaZPwA-D14Q-OYmx1f6JjkcCG-u-3OyJ1CbYKvO15qtW92wIRmMy7-zXfeSyATo37KIHkz6cK0UE",
    "expiresIn": "3600"
  }
}
```

### Login Superadmin

```json
{
  "user": {
    "id": "ipfuAjBzv7WAGK1ASJ2dlxI0RI73",
    "email": "daniellovazzano+2@gmail.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjQ5MCwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NDk2NDkwLCJleHAiOjE3NDc1MDAwOTAsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.lZazvrqxBVWL0Md2y1sS9XGaGDKI3LoycdN_LA2EXzBaLeVlxsxsoUmoAsO6slLXmk1zKoWT5bBmiAe2aBfTgaejMVNODQjWCw8zWgwWKh2dBv9us2gzyWPD5_8CLAa68J9k8QH9RQzZqHaETKuQ6WgvM6OmgnjYkUtJMB1MoXkmXsWB9eUpdq8gmZRmJtWmv1qBvjs1CCgFPfYAU2SlIoCAaP6W6HLJu_7-ObmPINUlK4FsaUEVSIhycvX0ufHkN0QIlCE16EZfJZ0psKYOAoddp9aTeWhFQuO8YLpBsMdjP2cD7PYle7v7dPJd0lhGaWIxk-N4hLkbyUXPczGEtA",
    "refreshToken": "AMf-vBxWGhMW17C9uGXQ8GRtKHmSB80atZHgAVT3Y47esE6n0Jma1tii7KuSY69uwHOWXNXaSVQoWmc1py3Sjv7pbF-CSjBJ4NH7TYQJSFZPdB8UDwx8g1S1n6mrnWa9BsvEbLmbV33ELflkj7cW5YaCXZ8ba2e69Eloy5VhHiOQjSXew9lks39L9NZq0lF7ZNF9L9mKVxVLcFdeoEjXdMft24g6CIiD-XUiWtyeI3-HhtkFt_6TRE4",
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
- Email de usuario: e2euser_1747496487888@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
