# Reporte E2E: register-and-login

**Fecha:** 2025-05-17-1747
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747496835862@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747496835862@example.com",
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
  -d '"{"email":"e2euser_1747496835862@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747496835862@example.com","password":"test1234"}''
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
    "id": "KBVJa1eH6xfEzpE1mCUzTReyFsu2",
    "email": "e2euser_1747496835862@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjgzNiwidXNlcl9pZCI6IktCVkphMWVINnhmRXpwRTFtQ1V6VFJleUZzdTIiLCJzdWIiOiJLQlZKYTFlSDZ4ZkV6cEUxbUNVelRSZXlGc3UyIiwiaWF0IjoxNzQ3NDk2ODM2LCJleHAiOjE3NDc1MDA0MzYsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk2ODM1ODYyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NjgzNTg2MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RNJDkYYjkhd8uEdbla0-5EGWur8TXe86_OvjRCcoPevVTARvGLiCUZGih8MYJTtSZZ7Ol2F2Mtt4o5pQjuwdjXcEvSu2zCaPt_y7UVU-z4UFmCt6ILP93mlv2Lbj1Admwb38BqXf6de_HiQVn0NwWPBgd_tmGuVL0o1o0a42p7g89dV8uVTi_C2zMdZOmG1hqMbIZDHAAo7Yvx7bNNUCawNt3PlqE4aJWJOcbsyfKPk8A-OQ9L4PyvATQh4UhJkwFnLke3jByx4dlOuUPVKxbngRjUotYrRBXDWQgkNTcEZFv5VfTx3BRBGURhGAAhd3hGQdutaK-qUK7P8aaY49GA",
    "refreshToken": "AMf-vBxdcCG6gpRRkwVA4TeKp6uc4yh3cF8VwFd5YHQIbs5OZUmFWB84GZJlo5xZfgb1Jg44azw0nJW3CKLgjMTbYuFTG8JUpar3dTWXHzQT_VUjsy4_xyMX29DVoMoDIaNnMzqjGvuaXS6eLilYrrRJFQYy-TVG1BkW5H8mBgY40sQPOIc-d_yE37ePn8u3Y2m6GVQHTPSnd4EFf4YWCkWbLEwJXsPci3sSpf8U3LaVtA5pwZ7V7TQ",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "KBVJa1eH6xfEzpE1mCUzTReyFsu2",
    "email": "e2euser_1747496835862@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjgzNywidXNlcl9pZCI6IktCVkphMWVINnhmRXpwRTFtQ1V6VFJleUZzdTIiLCJzdWIiOiJLQlZKYTFlSDZ4ZkV6cEUxbUNVelRSZXlGc3UyIiwiaWF0IjoxNzQ3NDk2ODM3LCJleHAiOjE3NDc1MDA0MzcsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk2ODM1ODYyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NjgzNTg2MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.b6O9POPJk4P3DY59x20LZTaJzA5QQkb3zaMahFF_SXLVLXhhe14UI9kraJaznxrWJonVpE2JXOIcNYM7sDzOuvxLnyVIBsMtGTEniVMF9gBGwuPze4lJjE3_pB-ZGP7f1MtInpx7x_ds6FNg2dpsV6zUDhZZJJVsJHREgzRuHFdpJ07DMf-tNMkz9sz5CDUhbxCKISIFy5lqKu2bCb9G08GLbdqANNsR1-Tixj0h97sBsGDdwkmteCFoGj_3qWKItb2aKGIsVPeS68-2NtYYoF-EPU8GS3g1_tItXB87pQ9v0YdQLSaLvu1-5yIqkryPd2LFgsDZd8-XAlB0LIa6ZQ",
    "refreshToken": "AMf-vBzFU2nTgmdq37Tx7DvrwbyzRzerQWfftflwWSmrCdEtOvYlLyYP6VtcRC0aUTQz-urakb2WFJDdvZ5I29dQofsDEVGaHfPvq1lX6sWG_lvx07W8hNeFzJr4d9-4Defx7X_i_pgIL_M8d00Why33mMAov9ytq-JviS8CkTES4B-6QcOodlEmvTqzlK0rRdQ2wUmBP_nrOa10-Evtl31DdHiItkwSUW56ggsL6RzSm4gKXBGF4lo",
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
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjgzOCwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NDk2ODM4LCJleHAiOjE3NDc1MDA0MzgsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.B2D2GQQsFkE_dsciwLWaK26IjtV1pB6k9wZbLRsPdb-uYuDJ1-8eoIK0aR5yLJztGRMOXab2KsAXzDGVb7o36yTMQgk_iB2QVKclYa08EVCR93bV5y60uu-AoPLq-JKGu4Ldu2ythtnEeu4Ir2hdVL9ekdRkXYgUn0fVrWVOFd2MCez1rDfJlmty2_ffaCDvu3sBuCNFUZPDk9N8I6cpVwgLevs3uuEJ3n5t6dUaoc-fXSX-ZloDljrmvbrILx7jwC5L2z3--LVpfkfQ8Hl5IZOyJJxw3eB3VhnoJ_we2T1KgmlZxuLPkt9GRUfrSE7WNcUTeLXcqgqvaE-8Q3mAfw",
    "refreshToken": "AMf-vBwIpkkvTkqIebO8VsaQurZkWoxCB1DMJGGSt23m7y3c0UYXSgmc97JIG2qIUtHhLPjP0huXbWTr1TPY2pGhtkE9Wkswx1EjC_tfFd2CLHvryeFwrQ0jfs49GEWKAoWVypjra3hK-8NP147iM23lbS4Alp0CJZYSbbA_Y89TKLdohWrSOY0OyFjfsMqnf4TLe8epmQYq2nLVWhIS51rxmllNsdJvrS9h5pHgbkL7gi_65dAqktE",
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
- Email de usuario: e2euser_1747496835862@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
