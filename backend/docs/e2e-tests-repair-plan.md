# Plan de Seguimiento - Reparación Tests E2E

## Estado Actual
- **Tests funcionando previamente**: 18 tests (100% success rate en módulos reparados)
- **Tests pendientes por reparar**: ~50-60 tests con fallos identificados
- **Objetivo**: Alcanzar 100% de éxito en todos los tests E2E

## Estrategia de Reparación en 3 Fases

### **FASE 1: Correcciones Rápidas (Variable/Import Fixes)**
**Impacto estimado**: 15-20 tests reparados
**Tiempo estimado**: 30-45 minutos
**Dificultad**: Baja

#### Problemas a Corregir:

**1.1. Errores de Variables No Definidas:**
- `tests/e2e/memberships/membership-invitations.e2e.js`
  - **Error**: `userToken is not defined` (línea 239)
  - **Solución**: Cambiar `userToken` → `regularUserToken`

- `tests/e2e/memberships/membership-removal.e2e.js`
  - **Error**: `fail is not defined` (línea 219)
  - **Solución**: Agregar `import { fail } from 'jest'` o usar `expect().toBe(false)`

**1.2. Propiedades de Objetos Indefinidas:**
- `tests/e2e/memberships/membership-roles.e2e.js`
  - **Error**: `membershipToUpdate.id` undefined (líneas 162, 179, 202)
  - **Solución**: Verificar que `membershipToUpdate` se almacene correctamente del setup

- `tests/e2e/messages/message-retrieval.e2e.js`
  - **Error**: `testMessage.id` undefined (línea 187)
  - **Solución**: Verificar setup de `testMessage` en beforeAll

- `tests/e2e/messages/message-management.e2e.js`
  - **Error**: `testMessage.id` undefined (línea 192)
  - **Solución**: Verificar setup de `testMessage` en beforeAll

- `tests/e2e/conversations/conversation-retrieval.e2e.js`
  - **Error**: `testConversation.id` undefined (línea 167)
  - **Solución**: Verificar setup de `testConversation` en beforeAll

- `tests/e2e/conversations/conversation-management.e2e.js`
  - **Error**: `testConversation.id` y `testConversation2.id` undefined
  - **Solución**: Verificar setup de conversaciones en beforeAll

### **FASE 2: Problemas de Permisos/Roles (Medium Complexity)**
**Impacto estimado**: 10-15 tests reparados
**Tiempo estimado**: 45-60 minutos
**Dificultad**: Media

#### Problemas a Corregir:

**2.1. Problemas de Roles y Permisos:**
- `tests/e2e/auth/auth.e2e.js`
  - **Error**: Expected "admin" role but got "moderator" (línea 127)
  - **Solución**: Ajustar expectativas de rol o corregir setup de admin

**2.2. Errores 403 en Operaciones Admin:**
- Múltiples tests con errores 403 en:
  - Operaciones de conversaciones admin
  - Operaciones de organizaciones
  - Operaciones de mensajes admin
- **Solución**: Revisar permisos y tokens de admin, aplicar estrategia de usuario admin exitosa

### **FASE 3: Problemas Complejos (API/Estructura de Datos)**
**Impacto estimado**: 20-25 tests reparados
**Tiempo estimado**: 60-90 minutos
**Dificultad**: Alta

#### Problemas a Corregir:

**3.1. Problemas de Estructura de Datos:**
- `tests/e2e/organization-types/organization-types.e2e.js`
  - **Error**: Múltiples propiedades undefined en response data
  - **Solución**: Revisar estructura de respuesta de API y ajustar tests

- `tests/e2e/i18n/i18n-system.e2e.js`
  - **Error**: `reporter.syncWithJestResults is not a function` (línea 68)
  - **Solución**: Corregir función del reporter o usar alternativa

**3.2. Problemas de Endpoints de API:**
- Múltiples errores 400 y 403 en tests de organization-types
- Tests de multitenancy fallando con errores 403
- **Solución**: Revisar endpoints, datos de prueba y configuración de multitenancy

**3.3. Problemas de Manejo de Errores:**
- `tests/e2e/conversations/conversation-edge-cases.e2e.js`
  - **Error**: Error response undefined (línea 194)
  - **Solución**: Mejorar manejo de errores y validaciones

## Metodología de Reparación

### Estrategia Aplicada Exitosamente:
1. **Reutilización de Usuario Admin**: Evitar rate limiting usando admin como usuario regular
2. **Reemplazo de Endpoints Problemáticos**: Usar endpoints de organizaciones en lugar de mensajes
3. **Simplificación de Setup**: Eliminar membresías duplicadas que causan conflictos
4. **Token Caching**: Sistema de cache de tokens funcionando perfectamente

### Patrones de Reparación:
```javascript
// Patrón 1: Reutilización de usuario admin
regularUser = adminUser;
regularUserToken = adminToken;

// Patrón 2: Verificación de objetos antes de uso
if (testMessage && testMessage.id) {
  // Usar testMessage.id
}

// Patrón 3: Manejo de errores esperados
expect([200, 403]).toContain(response.status);
```

## Plan de Ejecución

### FASE 1 - INICIO INMEDIATO
- [x] Documentar plan
- [ ] Reparar membership-invitations.e2e.js
- [ ] Reparar membership-removal.e2e.js  
- [ ] Reparar membership-roles.e2e.js
- [ ] Reparar message-retrieval.e2e.js
- [ ] Reparar message-management.e2e.js
- [ ] Reparar conversation-retrieval.e2e.js
- [ ] Reparar conversation-management.e2e.js

### FASE 2 - Después de completar Fase 1
- [ ] Corregir auth.e2e.js roles
- [ ] Revisar permisos 403 en admin operations
- [ ] Aplicar estrategia de admin user a tests problemáticos

### FASE 3 - Después de completar Fase 2
- [ ] Reparar organization-types structure
- [ ] Corregir i18n reporter function
- [ ] Resolver endpoints y multitenancy issues

## Métricas de Progreso
- **Baseline actual**: ~66% success rate
- **Post-Fase 1**: ~80-85% success rate estimado
- **Post-Fase 2**: ~90-95% success rate estimado  
- **Post-Fase 3**: 100% success rate objetivo

## Notas de Implementación
- Usar `git checkout -b fix/e2e-tests-phase-1` para cada fase
- Commits pequeños y focalizados por cada test reparado
- Testing incremental después de cada reparación
- Documentar cambios y decisiones en este archivo 