# Reporte E2E: register-and-login

**Fecha:** 2025-05-17-1746
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747496765192@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747496765192@example.com",
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
  -d '"{"email":"e2euser_1747496765192@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747496765192@example.com","password":"test1234"}''
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
    "id": "9zDiQoie5mh7Epy9aRO216a5QCD3",
    "email": "e2euser_1747496765192@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5Njc2NSwidXNlcl9pZCI6Ijl6RGlRb2llNW1oN0VweTlhUk8yMTZhNVFDRDMiLCJzdWIiOiI5ekRpUW9pZTVtaDdFcHk5YVJPMjE2YTVRQ0QzIiwiaWF0IjoxNzQ3NDk2NzY1LCJleHAiOjE3NDc1MDAzNjUsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk2NzY1MTkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5Njc2NTE5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ENyzE8B8NByDIx6aN_8_rpl5PC2aoOgrWTHBiwnRpnjslFeKs02aIebLcoKTY5-QwR30-8lofZjWGcg-DlTs1zzojFSy-158om82h_kYIcgKddibH-CUAgP1f1jH2wtgIX2NrGNcVYoEpCQG35QMtpk4ObAso3XVwKCgb0IMd4eBlyfl-9An6vE58_JoJalFd0k3LTchG7MiIA4u6heVAY3fysRgkuWeVyIl9ThGoYvC1WyewzPnGRzpNh7micmNxKLx4IduVzgfIcy3Hm9xu2GRf7pBMas7z86o70Xiz65lxC1WaHP6vRq_-U2_ZSuUZ4qxam2npDtrwgVzBXRcnw",
    "refreshToken": "AMf-vByhuqLpNrPdkP6OtEN1AaufxBy4l_JQEesnNRY2yIL-ilXDn_2Xq4hpqaP_Tn6o5IQEAmgGYZ0ICggUFeC8GLmH74GzDxOBDpgBKhKQg_tVCpPK8xIrogyKg6-ogtwIVpqBr0bafvhJLylU2g1aml6yYssPwe6jss9FLPMHV2rtBsLwXcq1w2INco0e6IEpUL_aZrWD0PhnUG7GmNWj9AvDEsoZhShFf0sqMR-Xy42JNNkP3nQ",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "9zDiQoie5mh7Epy9aRO216a5QCD3",
    "email": "e2euser_1747496765192@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5Njc2NiwidXNlcl9pZCI6Ijl6RGlRb2llNW1oN0VweTlhUk8yMTZhNVFDRDMiLCJzdWIiOiI5ekRpUW9pZTVtaDdFcHk5YVJPMjE2YTVRQ0QzIiwiaWF0IjoxNzQ3NDk2NzY2LCJleHAiOjE3NDc1MDAzNjYsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk2NzY1MTkyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5Njc2NTE5MkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.X6mkYmhf7GbcYrfjZhro4WzrdyAOTBJicMjd8l8bmWySZcblhM8pzA53HriTmW5hsh6iadIWUxuUJ7SbcKsaph9RcDdhIymYy6BbCa9AldivDHB81uM7fO2m68pgqpQpwp9FLAgDrUHgqrM3xduQbkBfTfQuJDo8HYuq8kOWX9ouySmfgdJQCbA-x9uJu9oMbOdVicUyShwz46jTdiVleGBCLKPSmf33dFrCQhNC7pwcAiVs_rKuxgWJVP_Sv0Kur-WxapD_rLqxpSLmBR23MjYrtBs9Tzy4tLxYV-IUYSobFhaA9dnivxlv2XoAnsbW49CF9u4Olg5vabvuvZrBGQ",
    "refreshToken": "AMf-vBwryO_PJw-Vnd-drSVgXRfb83Gj4kLKnhzHzGjvS7oWiP-ie1HlCqkkYD7bTge4XwHeenoNl4xoejFLCmZfIB1uxCjU0XXxQD-SYR0iFSEwbnBob95ERnaxn3AYuJ_-fUp4VOJ15CbwVMIflJaJOMfL0DO6OD74P_LHjteQeGrsfJWPdF72kX97PdJ_lFAVio_r-l_rxKPhP1dDLmdBSaodolyFw3zTwdSIlSIsLXgadCOEMCs",
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
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5Njc2OCwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NDk2NzY4LCJleHAiOjE3NDc1MDAzNjgsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.LUf14kHZFjwqSziION987LGk3kwL0mnfCtHZGU3hbpwKckRqdYms9AeVhNlaLPhcYpnID8fCFnO4V6nZZzCuDMLESd5kDvoYicHKFV0N4ZlRxhIMzXrmZG42xMUS5SkMnbmI2aQr47P200cu5oneJzDbwhMv623W4xb7QFwhg65LMFP_QxFVpXhqJHfDU9Zyp7wXZxRHQBxjyjOu6pgtgRqd5_2QEHxcUMTNO15x_HDn6uzQmVV_8wakwn-m3rgqXkLhcwAVPLDbxrICqmSxxZVzDCqC2bvxvwIv9KyrnvU4WcouheNsXK6crHJ57WByFvb6BgTJvWbuhj9YlcdqVg",
    "refreshToken": "AMf-vBwFlpwa98BvWTRzD7_pXGGyEczdtHBYn5m2X3lkRIUkWi6ST85WiOu8hpHTOcEpSyQorHQYvZEY3MN6aEVT5fLXX1xMhqxbDu7DWwukyWu20szzC-qsZvfnn5X8fs7Rxwwv3ONjxdzwaVt9KSRmttVtflBXNKKOvm8TXQ8I3mHEnILaFmn0nXc-eaR2LYKOmnCzRExd2b8quZd5UyyWUF-k6SzWIz59XTCFzU8d_8F7mQnJ48Q",
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
- Email de usuario: e2euser_1747496765192@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
