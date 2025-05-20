# Reporte E2E: register-and-login

**Fecha:** 2025-05-20-1740
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747755632359@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747755632359@example.com",
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
  -d '"{"email":"e2euser_1747755632359@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747755632359@example.com","password":"test1234"}''
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
    "id": "8zeUROM62cPwMOjQiKodo2VU1Io2",
    "email": "e2euser_1747755632359@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0Nzc1NTYzMywidXNlcl9pZCI6Ijh6ZVVST002MmNQd01PalFpS29kbzJWVTFJbzIiLCJzdWIiOiI4emVVUk9NNjJjUHdNT2pRaUtvZG8yVlUxSW8yIiwiaWF0IjoxNzQ3NzU1NjMzLCJleHAiOjE3NDc3NTkyMzMsImVtYWlsIjoiZTJldXNlcl8xNzQ3NzU1NjMyMzU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0Nzc1NTYzMjM1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Mwqvg2m9_ghue17EZJevK00OBmeqYBuGvfNQsBGQi_1u9b_rxxIo4O0XD4AauaHtIi9naPMM0PcihZdYp5FXebBbVClJfKYunHfpSIS5ebMxAanZr6EHB4dULDnhc2GzhPE147nlguQp8bWodgTnfjz4GTAPB5PJgsHq5bA68cRgo-YZ-UqkbdmIsy5_CitUSnlotUtSMltqeUzG0xY3Bd5fpVcgl4f0eYdUM-QVTYi03SIogbsAxY5Fp5mYE-lhmzhDwhE_GuOXwriMkRQ4X6_Uk09P9b6j2-J8PRRLwOq-jmLDy2338SKWQgiT7s2Bz1yYzgdCMOc9OKv10j3H9w",
    "refreshToken": "AMf-vBy2ul1rE27_1uyCGi-sAR_qU9dmFiIZSrz_k0YO0qfgN5s13dCbijcNBR-VvlHvX0OXi6HABOy9eI-5Xnxp3U32AD_UPIOoqiY3ouUL_T7J4AuYbmSREVLcc12lLYH7a-yKTN6zKElNqCplQRMuUdjJU42pUHprHwO40fvd84er6_fP7ULmLwqlUmjeav2hpv7lQX15FUCnBQ5F6yI_l5P72dkZvYMaDeb1TOnkWdBFM3ZrtyI",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "8zeUROM62cPwMOjQiKodo2VU1Io2",
    "email": "e2euser_1747755632359@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0Nzc1NTYzNSwidXNlcl9pZCI6Ijh6ZVVST002MmNQd01PalFpS29kbzJWVTFJbzIiLCJzdWIiOiI4emVVUk9NNjJjUHdNT2pRaUtvZG8yVlUxSW8yIiwiaWF0IjoxNzQ3NzU1NjM1LCJleHAiOjE3NDc3NTkyMzUsImVtYWlsIjoiZTJldXNlcl8xNzQ3NzU1NjMyMzU5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0Nzc1NTYzMjM1OUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ksLZnla717LaY0dFj3Dnhgui1Qe_plb3CqlUm6fzWkn1gNaR8K2hhid2hRdxIZJir8Xv6Yyu65q3CqPhDRcW5SebwqP3eGhXD6C7S0pp7tUUHWiAbSWAQkckbeu_3t_skRSLbqLW1cgiwdcRNh1UQGzUscsxth7VlFV4AWBSgUbMDnRwyFItO2hq8fbp1jVTMzM-u_dyrQK0hpIx48VTnwAmeEXvYmsDU1gIyNipLLI-nduszWUG5EZ9zQqV-dfa4wWljpJKQESsR3UWiCBtjEBn8VPx5NF0_qsf7OFCLQK1W3r_70OxMtT9SR75n_ha3w9Va5XgJqeWE536OidI8Q",
    "refreshToken": "AMf-vBxxLYmvCvNzMVSClTY9JV5_wiBUSmM5StEAnXskdhZdu_mE-kO3ntupH94nlpATXAzzazShCgk_gF4LhpfNdypd19L7KylQS6t8iBmQzrhKFkvuudUjO51theHxO-J7J4K-Gd3YWgv8JURadsbFAMWUAL5N6KL63cjQdawvt-N4Uvbt73WGSy-h3w7IClJ5w9AFrbu3ndYjgfxklp0ns0N2YfbWL8ClA8R2wJUUeuj2kihNjUc",
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
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0Nzc1NTYzNSwidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NzU1NjM1LCJleHAiOjE3NDc3NTkyMzUsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.nb3HX494TlCQN1PwcZcGPrJgcn1X5eD2ai7XkY8_uV3tlllB2klfHb4_8WMMskpuOU81tASfDYSa5l-fiwI-aqTnLWVoPf8-AR-MEWtC6mFoUlHpmNqd2zEBlXSR4KFDri_1XnPdj-PVlfNRwwwob3S-YA_Fh3mgqiwSD3A9-nr-ahZMFJ-cHKQL_KHUTEohL8V5sGdUV_rRkr-uN8QmVUvLBqdYDkLVjfebltzyrUNj2WcPdhxq_Fa3tzdL5meGl7vShTo-eyfoBvSWfE-RaL9ZnjqFiufyWcD-9ILHyK4H7o2IPJs7k7NpA8QleEgA1xDFs8jA54TOg87TmL3zeA",
    "refreshToken": "AMf-vBwV-OV1y7kVXaNailNO7fsaNZ1vS1G1ZnWVmyK7yv9cN_Slg9DhrKxyS7uRJE6Mdb3DvIMy2wSFuhsmdT9GfJ1YpRN3glVeYNKWsRZ6rJyvcaBVnLgtiMGnssPBNib4-V3VKAw-YU8RV9-8E-jVupQFh7XctisezSLEZA_UlCI29o53CVJ8nHvCR3rE4vgGu1A1obbdTSbC68dE9QoGBF-Z3ht2M2VsDHRuOuP_JTmFr7R04Ps",
    "expiresIn": "3600"
  }
}
```

### Listado de usuarios (admin)

```json
[
  {
    "id": "8zeUROM62cPwMOjQiKodo2VU1Io2",
    "name": "E2E User",
    "email": "e2euser_1747755632359@example.com",
    "role": "user",
    "phone": null,
    "status": "active",
    "emailVerified": false,
    "lastLoginAt": null,
    "createdAt": "2025-05-20T15:40:34.700Z",
    "updatedAt": "2025-05-20T15:40:34.700Z",
    "origin": "email",
    "isBlocked": false
  },
  {
    "id": "73FVxVjUIPX0ORtgjyP8mbIr8Pu1",
    "name": "Test User",
    "email": "test_1747755632468@example.com",
    "role": "user",
    "phone": null,
    "status": "active",
    "emailVerified": false,
    "lastLoginAt": null,
    "createdAt": "2025-05-20T15:40:34.172Z",
    "updatedAt": "2025-05-20T15:40:34.172Z",
    "origin": "email",
    "isBlocked": false
  },
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
- Email de usuario: e2euser_1747755632359@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
