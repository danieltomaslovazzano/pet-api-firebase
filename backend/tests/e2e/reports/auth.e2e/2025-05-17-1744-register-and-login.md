# Reporte E2E: register-and-login

**Fecha:** 2025-05-17-1744
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747496690074@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747496690074@example.com",
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
  -d '"{"email":"e2euser_1747496690074@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747496690074@example.com","password":"test1234"}''
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
    "id": "VQMQNYLKM4MyQVDWlsh4ZL7giK02",
    "email": "e2euser_1747496690074@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjY5MCwidXNlcl9pZCI6IlZRTVFOWUxLTTRNeVFWRFdsc2g0Wkw3Z2lLMDIiLCJzdWIiOiJWUU1RTllMS000TXlRVkRXbHNoNFpMN2dpSzAyIiwiaWF0IjoxNzQ3NDk2NjkwLCJleHAiOjE3NDc1MDAyOTAsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk2NjkwMDc0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NjY5MDA3NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KxOIyO_93L-ZCstOo9aGl8HPrdcL6_hSrQYnItWdNl93XX4RjGlNYlz9d_YEHEFMzxATsgHoAzYsx0U5K9EQRCCmAx68WJ9jYuvBIVD71ZgdwtgSJBqx_wU5xEgY6FK8n4tZb3-nTRG0NmUYltL_27CG1g1GARM3TSL6bJDm91QMTKmSBSxAu3uVbx9AuFopIaikU8Rvi0hvGm1Y8KPEX9QIbJ_X-YdKg1XY1C1PMEUeASX-tz3Ykie6OaaRlSMFP4_7NkVJ9nzUo52ygOZUd1lEB8j4cvAvBNFYA5UFS5k-Heyy1nkqa8lHaMndYh7ar5OhD-WjRuw7Mb4a8uEYWw",
    "refreshToken": "AMf-vBwXOr0ZfsPcWjhBtsIrI1QVsYzbMdsdDB5FR-3u5BILQadkZW4vabQ7LHuREMlAhT1NWp0qT336Ev6_KY1GuUT315yLZAqkJQJNV1231un8ef6jIjDb2V98YZ9YiexQFmclyWFh3PbP9IRTbyt9U5etaqOkJo25vsDRHduYlt-nkNcYkE5UbuhFf7HUFP5JmAHCtZ1CawHP3e3EGZ-9pjXEvSFaz8Wixe7TzQuEqDhydVC4P7o",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "VQMQNYLKM4MyQVDWlsh4ZL7giK02",
    "email": "e2euser_1747496690074@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjY5MSwidXNlcl9pZCI6IlZRTVFOWUxLTTRNeVFWRFdsc2g0Wkw3Z2lLMDIiLCJzdWIiOiJWUU1RTllMS000TXlRVkRXbHNoNFpMN2dpSzAyIiwiaWF0IjoxNzQ3NDk2NjkxLCJleHAiOjE3NDc1MDAyOTEsImVtYWlsIjoiZTJldXNlcl8xNzQ3NDk2NjkwMDc0QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzQ5NjY5MDA3NEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fmZG4VD75HjG5rWH4iEeDxjLWd2jPggm3G9DaUkQMPkRbv_KeqfIHBB7VGo1u1g7m4shJquBBlS7FCDLDeP_rovlcewQf4lnFAG-eHuV4mrpfcb8Nl5pL-YmECuvRF06gU8SmQkeJR6z33EpEnPwKWx2nczYK59w8_lVngEARfk70aA5eEW2i0ZWun0AaRfhdLIGI76pBmiUTxrn__X3Kud1921V5b1xBxD_07akAvrmiMRTlMuDk4Wkyb_EBmE7SCsHLvUnRHG1mTj7jTdw7Opy2HS4cY9oWo8vhAVLHrspe7YzkU6k18rL8tDOd51Ov8h4qhltvNTwzbSVk3Uoeg",
    "refreshToken": "AMf-vByKRH-BDIsrWv9lwWAgNNdvQvc4oj5jkdFKaaPmawr2S-DRrlY6Fkpgln9B2v1SSjkB9tOLTkOK7Eb9Zb6cWvGkmRP6_Av7vJyvPvA8btyut5dm62oqFpLoXVKRth0LpkyMXEZbjpeNc1GAnjjybNI-xdKUwoqeqQ4hvxNejMPCgy9bitBmPYgGKfxSRVWkaWOD2vhdPLpG8WLnwsmQnzGAeZcrDLs1aUDtt6DoDU52ONZSNi4",
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
    "role": "superadmin",
    "isSuperAdmin": true
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzQ5NjY5MSwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NDk2NjkxLCJleHAiOjE3NDc1MDAyOTEsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.o6uBOdyielnYVWgTdqKGXpZl2A3bZi4TRKAMPBJILaFDbt43Dsgaals4FZLw6p7-VAGqAm__oNTPxRqv7z4Hwsu3XCKFdAP3SwafLwWG7s5E01uKV_LUhtoFv6hAUrP0-NlxxCthb2xzU5JJcaAbnzS1ooiLyGdbw3-8JNX3U3y74IaaHhhTJ8CCAnexnRYcq60zlgA57Z6dG6abJh6tZ387NTqtNWWu1BQSEfNwwXi35hKgQdlr1Smdi9-iuDai7zxGz0UPkK_6py7B6HIbQnd2hjM4g3m_93pjFOao5qnGeExaItgNsn_nTcMEUE_YHVivh1buleoAiSAlCeGryw",
    "refreshToken": "AMf-vBwvf1_5d7WBjbPkRAEe2PcKHRp2BtiTG9mY6lcCQ76BlSdjDDu5QyiTWfDswx8y4ikAbNAsSl9xPy9Ai6f_ZIQUjFyFBi1_JJPRJGd_Ismc4nI3i1kQ_icruUQg5Dg7w8Da1lULzgnlGGZvT8GkeY7lDPn7op4mElGNLun5tSgehS0DH6Ei7WRVVbb05x6GiittAL-YXulFSNexhlNYYvEpOuQ9ceVAGL2a2L66oaZOTbT_5rQ",
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
- Email de usuario: e2euser_1747496690074@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
