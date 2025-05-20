# Reporte E2E: register-and-login

**Fecha:** 2025-05-17-1732
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747495965722@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747495965722@example.com",
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
  -d '"{"email":"e2euser_1747495965722@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747495965722@example.com","password":"test1234"}''
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
    "id": "ioYqtl4Sm2ZW9OlEkBthCYabDXP2",
    "email": "e2euser_1747495965722@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NTk2NiwidXNlcl9pZCI6ImlvWXF0bDRTbTJaVzlPbEVrQnRoQ1lhYkRYUDIiLCJzdWIiOiJpb1lxdGw0U20yWlc5T2xFa0J0aENZYWJEWFAyIiwiaWF0IjoxNzQ3NDk1OTY2LCJleHAiOjE3NDc0OTk1NjYsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk1OTY1NzIyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NTk2NTcyMkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.SQGlOuMapn4Db_itiJjd1BMsHL6NI_dcQM7zKBBLqecSDINdEyDpwpmXC608AGAC3wMtEQ0Fx2IJw8RgOiHA7F4lIyhl7FAgDfc5R-DBr_7tcnIcOizcVyIjWZIRWX2K5iC6Ga4fmrNbPY79rajsR_mMK7cE4vCYNY_9F1XoszzNPoi8DMgNDdNXBCBjEjb30A6JEk4btq5oYNpvzVUbiJTlDIIUbCIZD3xHfm-SEvBDSvUz_MMt1IwtnWJWU7vNOXGVei-q4-qKBXqTTUSMZzeADVLawHCB5q6Tq8lI9j01GQU-NP6aYkaEff8zzjFTNwKJHS2DO0u7mG3cWBWyZg",
    "refreshToken": "AMf-vByJegBFNYp3tHSI8Rv86V3sBbUCG3IKdJShRKHhFN7ImXEO-woDOlAdgiSx3iG41SJBx83N-s984rqKzF4ZH8Z7DmBl70KLjKve2aIsy9ykFAsDKROjDYjdFlS-jKczhrt2LjEtsS9sK6IxByAwEQG_tC-ZATVeLJA8Bxh0TpZ2sblR6hoRbmId6e5Q-KVhLW8-pRdjFq39bQ2ErdyKbPtSgUPewgxkIRofI72xC7gFwnfepz0",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "ioYqtl4Sm2ZW9OlEkBthCYabDXP2",
    "email": "e2euser_1747495965722@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NTk2NywidXNlcl9pZCI6ImlvWXF0bDRTbTJaVzlPbEVrQnRoQ1lhYkRYUDIiLCJzdWIiOiJpb1lxdGw0U20yWlc5T2xFa0J0aENZYWJEWFAyIiwiaWF0IjoxNzQ3NDk1OTY3LCJleHAiOjE3NDc0OTk1NjcsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk1OTY1NzIyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NTk2NTcyMkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.hoGHHmDFgrsdjfGu-xCzOU-5beYAQd1TEqqIdapTYLBTrRe0YN49LJc2DnvSufYvKd5gK0tpr11IBURzg8S8mzNs1ZC_LX_aURFw2jU119Lv9cWe9p5q4ZUaq0LKk6lujgX_bhiqe34ijICRDLD4njN3CE01FsqJWmilKk99xugSeumyZYd2GJh_MHAYtaGkC-0Zh7sENdbpWIJSd2d_xXNQpK2WDITSuEjv5V0cXRCdxZpfhoAiTY05O_T3QMecwolfBzkTeO1cM1PBSE3xXzdzyrdeFfle8MN0NFDY2gqcYZPkE13If8qBKJp3i6hWzbmPLIlb1BwGMiLKVXDh1w",
    "refreshToken": "AMf-vBzAB0fQCcemyNCGhyoxCX0qfnUhLtt4CPX5aLok3Tit5_CPPpnTSCsMrXss_BPurU9liXr1IFz2sX5Mt1t_Su8Ry91JiHapM3ThfT3RJM2svJ4sPUs_s4uddKMJsLPFZGI7AJblx37P2puidYgxTWRYPXX3sv5RVTjxVwvU8Hgek4yDau46HFgmrV9ei6xsfH8xdZ8QfwdpDdaEiHekJLWWunmn3QBXsvq88psOWJkTI8nfVaQ",
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
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NTk2OCwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NDk1OTY4LCJleHAiOjE3NDc0OTk1NjgsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.B5abspD7OxUzuoqa4kcgvNZS3dN5oz0F4nmOrU8Tbic9iupDVL9UQkLAJs2uVw92VL5d6wvMlv4nrWCUDF_5zwX-h-m90VogJrUeuiKxWcZhhQfs6VN_7JrKv-iefTeAQ-loTHSPb4WVa45iA86BxP9vnuVv4rTgmqRWoRCuUCpa0AcipGrLuzP3nkr9ToHMPAY35mJF1D-rT_Ny9rE4skYv2uaQewRzszxVOMtcLiFkwhowymNo2fIi6bC32dK9YGm1DGpncT0rXYTe2t7FUXGLRJXrs2abzBsUJlvxNvZLSO7coyzHW38okJcg69ys5rnp8cwLlSiKHJXdmKecQA",
    "refreshToken": "AMf-vBxhx4q9dWi_0Ij2gLxjSYsImTYRJ0ZvS8OpdPJE05AUZo5MDhJsfCQvrLxP-vQ4Ia1QBgyGUIk30WF3fs655HbSCGfUcU8_AwGIh-eifx7ljZ5EKjewF6N7eGf0Tb87LfxCfbxoOMro_2cGxzXOYTpIV4bI39eSKJQxQ3hyyJFcg2EqY1tyWhCxv_ec2Fx5c2T49XZYx2SbzEBC0SqgKuJBZ9TFHQ-NYB7d6j6ybbQUJtcwwH8",
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
- Email de usuario: e2euser_1747495965722@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
