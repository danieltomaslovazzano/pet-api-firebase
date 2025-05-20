# Reporte E2E: register-and-login

**Fecha:** 2025-05-20-1207
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747735626019@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```

### Login

```json
{
  "email": "e2euser_1747735626019@example.com",
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
  -d '"{"email":"e2euser_1747735626019@example.com","password":"test1234","name":"E2E User"}''
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747735626019@example.com","password":"test1234"}''
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
    "id": "sMICOShiqcaHh9BY61u6F1Sr0R73",
    "email": "e2euser_1747735626019@example.com",
    "name": "E2E User",
    "role": "user"
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzczNTYyNiwidXNlcl9pZCI6InNNSUNPU2hpcWNhSGg5Qlk2MXU2RjFTcjBSNzMiLCJzdWIiOiJzTUlDT1NoaXFjYUhoOUJZNjF1NkYxU3IwUjczIiwiaWF0IjoxNzQ3NzM1NjI2LCJleHAiOjE3NDc3MzkyMjYsImVtYWlsIjoiZTJldXNlcl8xNzQ3NzM1NjI2MDE5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzczNTYyNjAxOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g_8DqOSUwE8TOXRFHTqMpwXphVOmVp2ZyWzSvjZDUUqYWcq_1PQwU6VjE77FMvaGQeRAZ_f2RLEGR0rNK176vCKaWp8HfPnTfKnUYYRbFSvXtCU1WHUXVSaK_tU418XvD27wOQhYmLtNmVEWxyttTbsQQ2OVsgmJFhXYmzWP2UfyCuE3Xgj-DI9eHFyYJlQSKWS8u6F-GNj6q2mFiqDV71eKVqFTU8yzOjNV8AMd154fu4Ldg1bNXjUUN3duc6u7mo7x_ZiyCIdF2470v-xb2v_Uh_fra2ZvRhIodOS60flLyk9KcuhUIuB6z-tXuBuko2AULtzeG4My1oH1TAk6Ig",
    "refreshToken": "AMf-vBzw7d0dTVzPTPR9Ex2xU2Ib3bxhQx7ZMUrmuNqObfa0_jEy-MLWzNglXPFZq7ipvyhW84kg4luuaUebegszZ0U-Jn8LgpqT93jZPBauBpGOEl3QfcYgt3gFw1_5UXxb8jdWsazX9_RMYqRAnYQ-FS3-vf2JQYNi6OPz8SrF7Up84vDUNgjY4aOeMJbZxIW5_KZWhchDkJYLOLRzh1DYV6B1CcphlATatpsoudx5c-v4qJdPqGk",
    "expiresIn": "3600"
  }
}
```

### Login

```json
{
  "user": {
    "id": "sMICOShiqcaHh9BY61u6F1Sr0R73",
    "email": "e2euser_1747735626019@example.com",
    "role": "user",
    "isSuperAdmin": false
  },
  "tokens": {
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzczNTYyNywidXNlcl9pZCI6InNNSUNPU2hpcWNhSGg5Qlk2MXU2RjFTcjBSNzMiLCJzdWIiOiJzTUlDT1NoaXFjYUhoOUJZNjF1NkYxU3IwUjczIiwiaWF0IjoxNzQ3NzM1NjI3LCJleHAiOjE3NDc3MzkyMjcsImVtYWlsIjoiZTJldXNlcl8xNzQ3NzM1NjI2MDE5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImUyZXVzZXJfMTc0NzczNTYyNjAxOUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RApqknyFicGXtcoIEbYWirN12urg5H7O_GwzINeasHlxjK-lbLnekoyIrVcjq8QiY9_bpdk9RxMthK8Gqvm_VmH1D1mUc1TyuS1OXKa-t8v04w2XpKUcEzBqwhS1eC6pww3iv9pemz64dpd9X-zaGXBeXF5JqRVMXHD0ALRXA_FkDjIkbbrjZjxpCaB3Hxnzb-Czsdm8iY2g2mGHr1U6BKn4IdI8EwgQGYDn3Wc4Wq9BYv9_rVvbMyxr6UhSrqKu5zCaN090Udh1-g-zASBOCjqTAQI1i-LiNQ-2IgqMDTjO_91hBuyrjnSQRWDQpMjyGhFKjzPO6bMGIob8Nqbj5A",
    "refreshToken": "AMf-vBxywzVd0g1PcKmBzAeufd8Vk0aGOgy_Gh3EehSkwWLUGTuY_xzihI1SPPYjMK2NU5VApccFrQyDfhEYRCoHOGYoPNnqbIMjXoTUqFPhj0IB3Kr0gl42-_1nfV0LQwUgLowB0zom3wqKho7X94X1_3Z2GQunNRSWULd9KVVMMcH6TJ6ewcGNpKE50USXETVH15-WVQAIyYM7wwU9ROCB2WsorH4Prm7v_XVfmMRoeOBu_sj87Ms",
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
    "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGV0LWFwaS1kZXYtMzUxMTUiLCJhdWQiOiJwZXQtYXBpLWRldi0zNTExNSIsImF1dGhfdGltZSI6MTc0NzczNTYyNywidXNlcl9pZCI6ImlwZnVBakJ6djdXQUdLMUFTSjJkbHhJMFJJNzMiLCJzdWIiOiJpcGZ1QWpCenY3V0FHSzFBU0oyZGx4STBSSTczIiwiaWF0IjoxNzQ3NzM1NjI3LCJleHAiOjE3NDc3MzkyMjcsImVtYWlsIjoiZGFuaWVsbG92YXp6YW5vKzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRhbmllbGxvdmF6emFubysyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VwMRWWeKMURFE_B7jIfhHk3n50VP39ZZxWggDwcn0OIAn6jvb7UPeunp1wX9er1W5q_HAAgaJX215er46sjE79t3AGeE3JKbAvZJiMsG4Gg5EO5Y4Y_fCmNHCe1yrPWrcsdammrjxr5CN8nGqNzUvgi-tO_EVavgw0XP94ZuIGqvxTjpF2m1X_5w8lfcq8_Bg_DDf6OKXrKxp5YAgRnr1CH102ds7YwhHF_pnX59_EQV1aAJG-FYLfCtmFBcV5ocpQ4lMevitgWfhB54AF-14PU8tBnoLdNvS1oBMVuSEkIABc-haoSM3Lt1QEmHESTLRl7VTr8UxzI02nBS3zABuA",
    "refreshToken": "AMf-vBykF_5qmrGprFagKu2o3VmGEGV3ZpbIsIFSICWGzYQOvCD72R4-lWzq4sdz-nezxXW7yILDlhG4Ma-frsZwLwtBlAvje8TSWO79HkR4vYAX52svBaiGGCDVpAH4E4V1gtoMT0f6wBCQgtX2c4XM7mTBrZhUfrQE1uUcgRwWQFif0ECaXtpB6Mxw5q_cDIEfFmWN1M_G1_LX27G_IVhwJHisdDFxYU9oa2ZiJ5vblEXzZLseJsg",
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
- Email de usuario: e2euser_1747735626019@example.com
- El usuario puede ser eliminado manualmente tras el test si se desea.
