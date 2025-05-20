# Reporte E2E: register-and-login

**Fecha:** 2025-05-17-1718
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747495087176@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747495087176@example.com",
  "password": "test1234"
}
```


---

## **Curl de ejemplo**
### Registro

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747495087176@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747495087176@example.com","password":"test1234"}''
```


---

## **Respuestas**
### Registro

```json
{
  "message": "Usuario registrado correctamente",
  "user": {
    "id": "1FFY3HCSRFMAOy5t8GTQgdt0nnj2",
    "email": "e2euser_1747495087176@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NTA4NywidXNlcl9pZCI6IjFGRlkzSENTUkZNQU95NXQ4R1RRZ2R0MG5uajIiLCJzdWIiOiIxRkZZM0hDU1JGTUFPeTV0OEdUUWdkdDBubmoyIiwiaWF0IjoxNzQ3NDk1MDg3LCJleHAiOjE3NDc0OTg2ODcsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk1MDg3MTc2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NTA4NzE3NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RzuWqNr1Cs-jk3wNLfDnzP6wUyKr9BVKXJhAxILy6c8zv0O_1_ymuYUN8Mqa-ma5LAT69fCInbEt7eGGQy-AyFBSRXVwaztePbDNhEvPTJ7Jf0GSuQs1UmB7fNtndhbX0c3bG6Fl0Jl1x13cHyMKy5inVaxnFSOVMGhGYT2kWm-3lIBKnl7nDzqANV_rVwaRdEOvfNRh0aFy3aWhi7Lt1utRFD4C7rdijlaxIiVkO42RLYL4TUl535WZ6HwiPIMvtUP0Fw9MlNPZiArKyVrML9FHnQWQg1PmlF7SLl4HkoaAkvfovKKswE4ZqQrnvMeczLxKpDrGG5d0CXx5wILcPw",
    "refreshToken": "AMf-vBwxOJ_TXfovF8lEV0lrd9UixFjsF1y4M8JGs6fpJ4kEIRNiNVDbyMO7XzxFdY51Q8O8NO2XtdNyO6PV81flonON1xeEmKlViU2aZJzTEcFCUBbCysW4BbvnUbqDBZ5vBztHZ-Oz5_Jpry86Du7ve17xrp65lnO8JboZvOcEAKmWYnfHC-djZQeGKRXenK4fcpaiiEZTJ0wO1rTFI1EwDGImu3FZfdVqXZ5gHqJ2vZ50eHQ_spQ",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "1FFY3HCSRFMAOy5t8GTQgdt0nnj2",
    "email": "e2euser_1747495087176@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NTA4OCwidXNlcl9pZCI6IjFGRlkzSENTUkZNQU95NXQ4R1RRZ2R0MG5uajIiLCJzdWIiOiIxRkZZM0hDU1JGTUFPeTV0OEdUUWdkdDBubmoyIiwiaWF0IjoxNzQ3NDk1MDg4LCJleHAiOjE3NDc0OTg2ODgsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk1MDg3MTc2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NTA4NzE3NkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YigltQK8TbQixt1Z9VAEKkAA41U0Li1MBMsIxdFocQMjvo-eynYHte0L1PaeAiLIHqvKgqQMt5i879sFluDhX1oha-3fkbA8jaDQCut1n0aY3SounP8d5oDVRYscZVdgzhckrDfq17ieg-vDZw6eTv-pFNbfUtbuk_uMi-KfCR5jXHCBUbqJe2mqZ8x_VayvsYQyyG0ieTlkfdU1Mn0i9oJMJ0wDBFdNUrWcAdEF3YJc-KZLQxXWAiJ3pe0Bclsmj2NSoJIViU7l78p-n1e7e1yNuPTS1OuzzG3OdmU97e8ek_Gyyb4UtLtlokrTEhc369w2hWcZjRL8nRhVp_i9PA",
    "refreshToken": "AMf-vBwazsA6w3dy0Ijh4B-tLAZ0LeQJBPJIrPB3nGARqpe49V-ntxvCTgsFc1Rwski6fVBOmmJ2LQm6Gx-vljyO0xhq8zwNaB-7E24iuWZXBwtD123jkzi3GJKUueDvXVqPTO4FvDsnlaM9DgTKDlq6X0oVBt-So68CaKWk-2XqMrDopYoe_vfna7gCs64Jo5KwipQ_-MQukj9sL5IEWMS3GCdWIPzUZGbj9CaXHGqNreChPAEbWog",
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
- Email de usuario: e2euser_1747495087176@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
