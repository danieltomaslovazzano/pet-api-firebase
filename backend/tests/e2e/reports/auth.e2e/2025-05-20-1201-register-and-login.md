# Reporte E2E: register-and-login

**Fecha:** 2025-05-20-1201
**Test:** register-and-login

---

## **Payloads enviados**
### Registro

```json
{
  "email": "e2euser_1747735268934@example.com",
  "password": "test1234",
  "name": "E2E User"
}
```


---

## **Curl de ejemplo**
### Registro

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '"{"email":"e2euser_1747735268934@example.com","password":"test1234","name":"E2E User"}''
```


---

## **Respuestas**


---

## **Status del test**

- [ERR] Falló el test

**Observaciones:**

