# Reporte E2E: register-and-login

**Fecha:** 2025-05-19-2010
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747678204826@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747678204826@example.com",
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
  -d '"{"email":"e2euser_1747678204826@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747678204826@example.com","password":"test1234"}''
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
    "id": "RoNksFv5A5Rh5Wfj7XOfstxpvQ53",
    "email": "e2euser_1747678204826@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzY3ODIwNSwidXNlcl9pZCI6IlJvTmtzRnY1QTVSaDVXZmo3WE9mc3R4cHZRNTMiLCJzdWIiOiJSb05rc0Z2NUE1Umg1V2ZqN1hPZnN0eHB2UTUzIiwiaWF0IjoxNzQ3Njc4MjA1LCJleHAiOjE3NDc2ODE4MDUsImVtYWlsIjoiZTJldXNlcl8xNzQ3Njc4MjA0ODI2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzY3ODIwNDgyNkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PByCKhP7KHl0mdoci7sXxqtiBTUMW07PDZnIDByBmZfXZd1yobx36POdTS-JIU0kHfWfcvtJlLmVDnuNRr3ERx2TmKfL8UgQMI0eFI92JzbroU0TorjC3-j-Q3KM75Qfe6XBpysO5jnqPRlqEShnG4bRX5ZYtD-pyV2D4vxQSA2aBxTMmkKDbuWRHWq664JN8y_innM4gLvj5dgHoVi4bruHfQbi_LxijyAGhu07k6R7zHUwHzgZimNilQdxo6FOn9qna0EX_5t6dlh0PVIFzsHu8rrbUbUlAOzW1cHD9rGBD4TfEL5EYQGfrDn0d6hiRbYMBtj_zDFqp1mtVRkc5w",
    "refreshToken": "AMf-vBzZTY3MzUwwQTcFXbOgUrCKFMiPUDnNRssnMlQuZ0VSuA1MNITVx2-Y_Nk_cT6ryTz6U31LEsxLeMitCdjdHIOy48BKBmYASE8BQ9TtEIPrHo1Ox7Vt2NCST9IhF3ANR8J4bSw1y0df-Gm1rDEksitUxPzIOfCjUySDfbpuJji9rDX1XJfnyhHLuPNe6LkmzHd8mSQnCG2PIiEfLb-VZ_txoy9d45IcgIrAQrh1DqZeAvM0XZY",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "RoNksFv5A5Rh5Wfj7XOfstxpvQ53",
    "email": "e2euser_1747678204826@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzY3ODIwNiwidXNlcl9pZCI6IlJvTmtzRnY1QTVSaDVXZmo3WE9mc3R4cHZRNTMiLCJzdWIiOiJSb05rc0Z2NUE1Umg1V2ZqN1hPZnN0eHB2UTUzIiwiaWF0IjoxNzQ3Njc4MjA2LCJleHAiOjE3NDc2ODE4MDYsImVtYWlsIjoiZTJldXNlcl8xNzQ3Njc4MjA0ODI2QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzY3ODIwNDgyNkBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.h-AuvkZlHTTdRsVYqHSpbhaHFBxKQlpyvQ8S2L6v7ds79BjJ8UKJXVWgkrEpjqyiCPCq3Eyklk5UTFGrKCrpdjlzZ-WngNqo7rM4LZ-idNDIukFb0nuGeolHZhkU_dgbv_NFAubwb3TofvIzo7PHdhERcUvaJXmy_JmNcf3ba7UDiCbpFULvYIYfkveoj4ZjnPl8mgRApbXLacMLE01xyd8qxUxlZ22F8v0HRK6mGmZmbEI_MfVr5_Deum3j9TgdhO9f5rAu2R9D4peTigEWD03TfWzOHsqsciltMs5GptdyVc2I8GNDvyivot0eQ9AErgn_NKhL_ihunaMvqXjd6A",
    "refreshToken": "AMf-vBxpjdE5Ukj-gZyBs_Hf5KhNxTEcDl6MjZ6bvIvt5o9_PJOak4aIHI3zYPOPlKbCE0IfHbEmS_7xNbkljOF04s5ELHZe3FA4nTZqBhE9-n2D-_OctxEOxInLGVANHTnVywSp7V6NLp_SIWbQnflFCS05TvjsKdzrAt-GHGriMjrweeuGW6GYREKkZOA4-EDyEg3vW-loL4G58Zmwq4zPfEp1qbVAUBoBQQz64oIChflUrrlE4BI",
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
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzY3ODIwNywidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3Njc4MjA3LCJleHAiOjE3NDc2ODE4MDcsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.e5Y9f6UIapkNDprZ43MDRKmJnsfvHNrQimUYxsfvik-eZAb8A9c0bJ-F7LaIBxlbEtw0VPcYLU-6HvbgmALlsufCYVpJMKHZv4gdQJLIxp61HyGkbXp7oQayJoIje4QqEsdW-2v8B8lmSnHPrh4lf7dxjNXB93JtC-zhJz3zlV_LPkU4tQ1OcDmuye9u9CI44MdIEu8FBmE9xdNRru5xWLOrQ2812STGBOnIQX7bW7NCjYTLOmTUG9gBI3JUUQBe8Rs4JiLiTGfTBw6GstJQFzjl8m6fET_7MY_8JezVRWSC8m-QPoO7TbZtSIAxgC9WR22n5BTXAT3EbQtTvNDhQw",
    "refreshToken": "AMf-vBx5SL_miS9QlJCpoKQcCsTRnuPfkltoroJ3o2vT6eXQJUHL5HDNYUhsypK7RHHQKlcIiOloX30jnMJ_9tXcYEl-vv_kTmN9r4LvHGU0-jLvf7_eDP76EWZ4PyVYvUrnm6zTSr__5HAHQNX-7UsY_BkGpIDDcit7K7kzdRCdRWC-h8VlPevyEdAac2fc1SRiVdgNYTKgn3WvUfzMj2yB0C92KIUwjn2O10py-GjJdQQSSvCJbc4",
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
- Email de usuario: e2euser_1747678204826@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
