# Seguimiento de Reparación de Tests

## Resumen
Este documento registra el estado actual de los tests, los principales grupos de errores detectados, el plan de reparación y el progreso incremental hasta alcanzar un ratio aceptable de tests exitosos.

---

## Foto Original (Estado Inicial)

- **Total de tests:** 274
- **Tests pasados:** 160
- **Tests fallados:** 110
- **Tests saltados:** 4
- **Suites totales:** 31
- **Suites fallidas:** 23
- **Suites exitosas:** 8

### Estado por sección (estimado)

| Sección / Archivo principal                  | Tests totales | Pasan | Fallan | Skipped |
|----------------------------------------------|--------------|-------|--------|---------|
| Auth (tests/auth/auth.test.js)               |     16       |   0   |   16   |    0    |
| Pets (tests/pets/pets.test.js)               |     18       |   0   |   18   |    0    |
| Users (tests/users/users.test.js)            |      6       |   0   |    6   |    0    |
| Organization (tests/organization/...)        |     12       |   0   |   12   |    0    |
| Permissions (tests/permissions*.js)          |      8       |   0   |    8   |    0    |
| Membership (tests/membership/membership.test.js) |   32   |  32   |    0   |    0    |
| Message (tests/message/message.test.js)      |     20       |  20   |    0   |    0    |
| Conversation (tests/conversation/conversation.test.js) | 12 |  12   |    0   |    0    |
| Performance (tests/performance/...)          |      2       |   0   |    2   |    0    |
| Unit (tests/unit/*.test.js)                  |      6       |   0   |    6   |    0    |
| Models (tests/models/prisma/...)             |     10       |   0   |   10   |    0    |
| Integration (tests/integration/*.test.js)    |     32       |   0   |   32   |    0    |
| Otros (básicos, admin, etc.)                 |     10       |  10   |    0   |    4    |

> **Nota:** Los números son aproximados y deben ser ajustados a medida que se avanza y se obtiene información más precisa.

---

## Grupos de Errores Detectados

1. **Errores de setup/mocks y dependencias eliminadas**
   - Módulos eliminados o mocks faltantes (`petModel.js`, `mockFirebase`, etc.)
   - Mocks incompletos de Firestore/Firebase
   - Variables o helpers de test no inicializados (`testDataStore`, `generateOrganizations`)

2. **Errores de lógica y aserciones**
   - Espera de llamadas a métodos mockeados que no ocurren
   - Aserciones que esperan valores incorrectos
   - Métodos no definidos o mal importados (`evaluateCondition`)

3. **Errores de integración/configuración**
   - Inicialización de Firebase fallida en tests de integración
   - Problemas con rutas de importación tras la migración

4. **Errores de datos de prueba**
   - Fallos al crear usuarios/pets de prueba
   - Datos de test inconsistentes o no generados

5. **Otros**
   - Tests obsoletos tras la migración
   - Dependencias cruzadas entre tests

---

## Plan de Reparación (Checklist)

- [ ] **Mocks y helpers:**
  - [ ] Restaurar o mockear helpers eliminados (`testDataStore`, `generateOrganizations`, etc.)
  - [ ] Completar mocks de Firebase y Firestore para cubrir todos los métodos usados
  - [ ] Eliminar o actualizar imports de módulos eliminados

- [ ] **Ajuste de lógica de tests:**
  - [ ] Revisar aserciones y expectativas de mocks
  - [ ] Corregir imports y referencias a funciones/métodos

- [ ] **Integración y configuración:**
  - [ ] Asegurar que los tests de integración usen los mocks correctos o estén debidamente aislados
  - [ ] Revisar inicialización de Firebase en tests de integración

- [ ] **Datos de prueba:**
  - [ ] Corregir generación y limpieza de datos de test
  - [ ] Unificar helpers de creación de usuarios/pets

- [ ] **Depuración incremental:**
  - [ ] Abordar los tests por grupo/sección, validando tras cada cambio
  - [ ] Actualizar la tabla de estado tras cada mejora

---

## Registro de Avances Incrementales

| Fecha       | Sección/Grupo abordado         | Tests totales | Pasan | Fallan | Skipped | Notas/resumen de cambios |
|-------------|-------------------------------|---------------|-------|--------|---------|-------------------------|
| (inicial)   | Todos                         |     274       |  160  |  110   |    4    | Foto original           |
|             |                               |               |       |        |         |                         |
| 2024-05-16  | Pets & Auth (mock makeRequest) |     35       |   0   |   35   |    0    | Mock local de makeRequest implementado, pero persisten errores de creación de usuario (el mock no es suficiente para sortear la lógica de validación interna de los tests). |

> Actualizar esta tabla tras cada avance significativo.

---

## Notas adicionales
- El log completo de la corrida inicial está en `test-run-initial.log` en esta misma carpeta.
- Completar los números exactos y detalles a medida que se avanza. 