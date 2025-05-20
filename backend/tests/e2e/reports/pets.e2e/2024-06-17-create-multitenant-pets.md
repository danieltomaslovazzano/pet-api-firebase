# Reporte E2E: Creación de mascotas multitenant

**Fecha:** 2024-06-17
**Test:** Crear mascotas en dos organizaciones distintas (multitenant)

---

## **Payloads enviados**

### OrgA
```json
{
  "name": "Firulais",
  "species": "dog",
  "status": "available",
  "images": ["https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"]
}
```

### OrgB
```json
{
  "name": "Mishi",
  "species": "cat",
  "status": "available",
  "images": ["https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"]
}
```

---

## **Curl de ejemplo**

### OrgA
```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Authorization: Bearer <TOKEN_USER_A>" \
  -H "X-Organization-Id: <ORG_A_ID>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Firulais",
    "species": "dog",
    "status": "available",
    "images": ["https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"]
  }'
```

### OrgB
```bash
curl -X POST http://localhost:3000/api/pets \
  -H "Authorization: Bearer <TOKEN_USER_B>" \
  -H "X-Organization-Id: <ORG_B_ID>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mishi",
    "species": "cat",
    "status": "available",
    "images": ["https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg"]
  }'
```

---

## **Respuestas**

### OrgA
```json
{
  "name": "Firulais",
  "id": "9978da94-bba3-48b2-ace8-9e836d1b7c69",
  ...
}
```

### OrgB
```json
{
  "name": "Mishi",
  "id": "1a64559e-e583-40ba-8266-bdac20a50e93",
  ...
}
```

---

## **Status del test**

- [x] Ejecutado correctamente
- [x] Mascotas creadas en ambas organizaciones
- [x] Sin errores

**Observaciones:**
- El test es idempotente y deja la base limpia.
- Se usaron organizaciones existentes: OrgA, OrgB. 