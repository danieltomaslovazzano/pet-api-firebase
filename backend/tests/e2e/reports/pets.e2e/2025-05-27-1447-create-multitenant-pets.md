# Reporte E2E: create-multitenant-pets

**Fecha:** 2025-05-27-1447
**Test:** create-multitenant-pets

---

## **Payloads enviados**
### OrgA

json
{
  "name": "Firulais",
  "species": "dog",
  "status": "available",
  "images": [
    "https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"
  ]
}


### OrgB
json
{
  "name": "Mishi",
  "species": "cat",
  "status": "available",
  "images": [
    "https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"
  ]
}


---

## **Curl de ejemplo**
### OrgA
bash
curl -X POST http://localhost:3000/api/pets \
  -H "Authorization: Bearer <TOKEN_USER_A>" \
  -H "X-Organization-Id: 82e1e643-95f4-4b33-b726-c7c80fe173f3" \
  -H "Content-Type: application/json" \
  -d '{"name":"Firulais","species":"dog","status":"available","images":["https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"]}'


### OrgB
bash
curl -X POST http://localhost:3000/api/pets \
  -H "Authorization: Bearer <TOKEN_USER_B>" \
  -H "X-Organization-Id: 21e0d6a4-077a-4670-9f1a-06ad92ba85e1" \
  -H "Content-Type: application/json" \
  -d '{"name":"Mishi","species":"cat","status":"available","images":["https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"]}'


---

## **Respuestas**
### OrgA
json
{
  "id": "af2f4926-a6d4-49f0-abfd-ad5aede68061",
  "name": "Firulais",
  "species": "dog",
  "breed": null,
  "age": null,
  "gender": null,
  "size": null,
  "color": null,
  "status": "available",
  "description": null,
  "images": [
    "https://storage.googleapis.com/pet-api-dev-35115.firebasestorage.app/1748350019851_zm23mr.jpg"
  ],
  "location": null,
  "ownerId": "06maBdjJNiZ1IsgjAodIKi3FwNA2",
  "organizationId": "82e1e643-95f4-4b33-b726-c7c80fe173f3",
  "createdAt": "2025-05-27T12:47:00.750Z",
  "updatedAt": "2025-05-27T12:47:00.750Z"
}


### OrgB
json
{
  "id": "e67b13d1-f4b3-4783-b627-28bf9eea2392",
  "name": "Mishi",
  "species": "cat",
  "breed": null,
  "age": null,
  "gender": null,
  "size": null,
  "color": null,
  "status": "available",
  "description": null,
  "images": [
    "https://storage.googleapis.com/pet-api-dev-35115.firebasestorage.app/1748350021362_fyifgy.jpg"
  ],
  "location": null,
  "ownerId": "o16KsHG4yrcFHBvvVmVwvlOl52i2",
  "organizationId": "21e0d6a4-077a-4670-9f1a-06ad92ba85e1",
  "createdAt": "2025-05-27T12:47:02.039Z",
  "updatedAt": "2025-05-27T12:47:02.039Z"
}


---

## **Status del test**

- [x] Ejecutado correctamente
- [x] Mascotas creadas en ambas organizaciones
- [x] Sin errores

**Observaciones:**
- El test es idempotente y deja la base limpia.
- Se usaron organizaciones: OrgA, OrgB.
