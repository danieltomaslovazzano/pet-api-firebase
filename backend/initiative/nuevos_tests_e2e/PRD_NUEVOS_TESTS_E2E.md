# PRD: Nuevos Tests E2E - Pet API Backend

**Versión**: 1.0  
**Fecha**: Diciembre 2025  
**Autor**: Equipo Backend  
**Estado**: 📋 **READY FOR IMPLEMENTATION**

---

## 📋 **EXECUTIVE SUMMARY**

### **Objetivo**
Implementar una nueva suite de tests E2E completamente rediseñada para reemplazar el sistema actual inmantenible (40 archivos, 25.41% success rate) con una arquitectura moderna, simple y confiable.

### **Problema a Resolver**
- Tests E2E actuales con arquitectura sobrecompleja
- Success rate crítico (25.41%) en ejecución masiva
- Debugging imposible y mantenimiento prohibitivo
- Performance inaceptable (timeouts, rate limiting)

### **Resultados Esperados**
- ✅ Success rate >95% consistente
- ✅ Ejecución completa <5 minutos
- ✅ Arquitectura simple y mantenible
- ✅ Debugging fácil y eficiente

---

## 🎯 **OBJETIVOS DEL PROYECTO**

### **Objetivos Primarios**
1. **Performance**: Ejecución completa de tests <5 minutos
2. **Confiabilidad**: Success rate >95% en cualquier escenario
3. **Simplicidad**: Arquitectura entendible por cualquier desarrollador
4. **Mantenibilidad**: Tiempo de debugging <30 minutos para cualquier issue

### **Objetivos Secundarios**
1. **Escalabilidad**: Fácil agregar nuevos tests
2. **CI/CD Ready**: Integración simple con pipelines
3. **Documentation**: Auto-documentación clara
4. **Developer Experience**: Onboarding <1 hora

---

## 🏗️ **ARQUITECTURA Y ESTRUCTURA**

### **Estructura de Directorios**
```
tests/e2e-new/
├── config/
│   ├── jest.config.js          # Configuración Jest simplificada
│   └── test.env                # Variables de entorno
├── fixtures/
│   ├── users.json             # Datos de usuarios de prueba
│   ├── organizations.json     # Datos de organizaciones
│   └── pets.json              # Datos de mascotas
├── helpers/
│   ├── api.js                 # HTTP client wrapper (~50 líneas)
│   ├── auth.js                # Gestión de autenticación (~100 líneas)
│   ├── data.js                # Gestión de datos de prueba (~50 líneas)
│   └── cleanup.js             # Limpieza de datos (~30 líneas)
├── tests/
│   ├── 01-auth.test.js        # Tests de autenticación
│   ├── 02-organizations.test.js # Tests de organizaciones
│   ├── 03-memberships.test.js # Tests de membresías
│   ├── 04-pets.test.js        # Tests de mascotas
│   ├── 05-conversations.test.js # Tests de conversaciones
│   ├── 06-messages.test.js    # Tests de mensajes
│   └── 99-integration.test.js # Tests de integración
├── setup.js                   # Setup global simple
└── README.md                  # Documentación
```

### **Principios de Diseño**
1. **Single Responsibility**: Cada archivo tiene una función específica
2. **No Shared State**: Cada test es completamente independiente
3. **Fail Fast**: Detección temprana de errores
4. **Clean Setup/Teardown**: Limpieza automática garantizada
5. **Minimal Dependencies**: Solo las librerías esenciales

---

## 🔧 **ESPECIFICACIONES TÉCNICAS**

### **Stack Tecnológico**
```json
{
  "testing": "Jest 29.7.0",
  "http": "Axios 1.8.3",
  "assertions": "Jest expect nativo",
  "reporting": "Jest reporters + simple HTML",
  "fixtures": "JSON estático",
  "cleanup": "Automático per-test"
}
```

### **Configuración Jest Simplificada**
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/setup.js'],
  testTimeout: 10000,
  maxWorkers: 1, // Secuencial para evitar concurrencia
  verbose: true,
  bail: false,
  reporters: ['default', 'jest-html-reporter']
};
```

### **Variables de Entorno Requeridas**
```env
# API Configuration
API_URL=http://localhost:3000/api
NODE_ENV=test

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/petapi_test

# Authentication
ADMIN_EMAIL=admin@test.com
ADMIN_PASSWORD=TestAdmin123!
```

---

## 🧪 **ESPECIFICACIÓN DE TESTS**

### **1. Auth Tests (01-auth.test.js)**
```javascript
describe('Authentication E2E', () => {
  // Casos críticos únicamente
  test('Admin login success')
  test('Invalid credentials fail') 
  test('Token validation works')
  test('Logout clears session')
});
```

### **2. Organizations Tests (02-organizations.test.js)**
```javascript
describe('Organizations E2E', () => {
  test('Create organization as admin')
  test('Get organization details')
  test('Update organization')
  test('Delete organization')
  test('Non-admin cannot create organization')
});
```

### **3. Memberships Tests (03-memberships.test.js)**
```javascript
describe('Memberships E2E', () => {
  test('Add member to organization')
  test('Update member role')
  test('Get organization members')
  test('Remove member from organization')
  test('Cross-organization access denied')
});
```

### **4. Pets Tests (04-pets.test.js)**
```javascript
describe('Pets E2E', () => {
  test('Create pet in organization')
  test('Get pets list with filters')
  test('Update pet details')
  test('Set pet visibility')
  test('Delete pet')
});
```

### **5. Conversations Tests (05-conversations.test.js)**
```javascript
describe('Conversations E2E', () => {
  test('Create conversation between members')
  test('Get conversation history')
  test('Add participant to conversation')
  test('Leave conversation')
});
```

### **6. Messages Tests (06-messages.test.js)**
```javascript
describe('Messages E2E', () => {
  test('Send message in conversation')
  test('Get messages with pagination')
  test('Edit message')
  test('Delete message')
});
```

### **7. Integration Tests (99-integration.test.js)**
```javascript
describe('Integration Scenarios', () => {
  test('Complete workflow: Create org → Add members → Create pets')
  test('Complete workflow: Start conversation → Send messages')
  test('Multi-tenant isolation')
});
```

---

## 🛠️ **ESPECIFICACIÓN DE HELPERS**

### **API Helper (helpers/api.js)**
```javascript
// Wrapper simple para axios
class ApiClient {
  constructor(baseURL) { /* config */ }
  setAuth(token) { /* set header */ }
  async get(url, options) { /* wrapper */ }
  async post(url, data, options) { /* wrapper */ }
  async put(url, data, options) { /* wrapper */ }
  async delete(url, options) { /* wrapper */ }
}

// Funciones de utilidad
function expectSuccess(response) { /* validation */ }
function expectError(response, status) { /* validation */ }
```

### **Auth Helper (helpers/auth.js)**
```javascript
// Gestión simple de autenticación
class AuthManager {
  async loginAdmin() { /* admin login */ }
  async loginUser(userData) { /* user login */ }
  async createTestUser(userData) { /* create user */ }
  getAuthHeaders(token) { /* headers */ }
}

// Sin pooling complejo, sin rate limiting, sin estado global
```

### **Data Helper (helpers/data.js)**
```javascript
// Gestión de datos de prueba
class TestDataManager {
  createOrganization(overrides) { /* fixture + overrides */ }
  createUser(overrides) { /* fixture + overrides */ }
  createPet(overrides) { /* fixture + overrides */ }
  generateUniqueEmail() { /* unique email */ }
}

// Fixtures estáticos, no generación dinámica compleja
```

### **Cleanup Helper (helpers/cleanup.js)**
```javascript
// Limpieza automática
class CleanupManager {
  constructor() { this.resources = []; }
  track(type, id) { /* track resource */ }
  async cleanupAll() { /* delete all tracked */ }
}

// Automático, confiable, sin dependencias externas
```

---

## 📊 **CRITERIOS DE ACEPTACIÓN**

### **Criterios Funcionales**
✅ **MUST HAVE**
- [ ] All tests pass consistently (>95% success rate)
- [ ] Complete test suite runs in <5 minutes
- [ ] Zero flaky tests
- [ ] All core API endpoints covered
- [ ] Cross-organization isolation validated

✅ **SHOULD HAVE**
- [ ] Test data cleanup automatic and reliable
- [ ] Clear error messages for failed tests
- [ ] Simple debugging process
- [ ] Coverage report generation

✅ **NICE TO HAVE**
- [ ] HTML report generation
- [ ] Test execution metrics
- [ ] Parallel execution support (if stable)

### **Criterios No Funcionales**
✅ **Performance**
- [ ] Individual test execution <30 seconds
- [ ] Suite setup time <30 seconds
- [ ] Memory usage <100MB during execution

✅ **Maintainability**
- [ ] New developer can understand structure in <1 hour
- [ ] Adding new test takes <30 minutes
- [ ] Debugging failed test takes <30 minutes

✅ **Reliability**
- [ ] Tests pass 100 consecutive runs locally
- [ ] Tests pass in CI environment
- [ ] No random failures or race conditions

---

## 🚀 **PLAN DE IMPLEMENTACIÓN**

### **Fase 1: Foundation (Día 1-2)**
**Objetivos:**
- [ ] Setup estructura de directorios
- [ ] Implementar helpers básicos
- [ ] Configurar Jest y environment
- [ ] Implementar auth tests básicos

**Entregables:**
- [ ] Estructura completa de directorios
- [ ] Helpers: api.js, auth.js implementados
- [ ] Jest configuración funcionando
- [ ] 4 auth tests pasando

### **Fase 2: Core Tests (Día 2-4)**
**Objetivos:**
- [ ] Implementar tests de organizations
- [ ] Implementar tests de memberships
- [ ] Implementar tests de pets
- [ ] Sistema de cleanup automático

**Entregables:**
- [ ] 15+ tests core pasando
- [ ] Cleanup automático funcionando
- [ ] Data fixtures implementados
- [ ] Success rate >90%

### **Fase 3: Advanced Tests (Día 4-5)**
**Objetivos:**
- [ ] Implementar conversations tests
- [ ] Implementar messages tests
- [ ] Implementar integration tests
- [ ] Optimizar performance

**Entregables:**
- [ ] 25+ tests total pasando
- [ ] Integration scenarios cubiertos
- [ ] Performance <5 minutos
- [ ] Success rate >95%

### **Fase 4: Validation & Documentation (Día 5-6)**
**Objetivos:**
- [ ] Validar estabilidad (100 runs)
- [ ] Documentar arquitectura
- [ ] Setup CI/CD integration
- [ ] Migration de tests críticos

**Entregables:**
- [ ] Documentación completa
- [ ] CI/CD configurado
- [ ] Tests antiguos deprecados
- [ ] Handover completo

---

## 📈 **MÉTRICAS DE ÉXITO**

### **Métricas Primarias**
| Métrica | Target | Medición |
|---------|--------|----------|
| **Success Rate** | >95% | Jest reports |
| **Execution Time** | <5 min | CI/CD logs |
| **Flaky Tests** | 0 | 100 consecutive runs |
| **Coverage** | >80% | Jest coverage |

### **Métricas Secundarias**
| Métrica | Target | Medición |
|---------|--------|----------|
| **Setup Time** | <30s | Manual timing |
| **Memory Usage** | <100MB | Process monitoring |
| **Debug Time** | <30 min | Developer feedback |
| **New Test Time** | <30 min | Developer feedback |

### **Métricas de Calidad**
- **Code Complexity**: Mantenible (no helpers >100 líneas)
- **Dependencies**: Mínimas (solo Jest + Axios)
- **Documentation**: Completa y actualizada
- **Developer Experience**: Positive feedback

---

## 🛡️ **CONSIDERACIONES DE RIESGO**

### **Riesgos Técnicos**
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| **Database concurrency** | Media | Alto | Tests secuenciales |
| **Firebase rate limiting** | Baja | Medio | Cache de tokens |
| **CI environment differences** | Media | Medio | Docker containers |
| **Flaky network requests** | Baja | Alto | Retry logic simple |

### **Riesgos de Proyecto**
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| **Timeline overrun** | Baja | Medio | Scope prioritizado |
| **Performance requirements** | Baja | Alto | Early validation |
| **Team adoption** | Baja | Medio | Training session |

---

## 📚 **ANEXOS**

### **Anexo A: Comparative Analysis**
```
CURRENT vs NEW ARCHITECTURE:

Current:
- 40 files, 11,486 lines
- 25.41% success rate
- Complex helpers (727 lines auth.js)
- Rate limiting issues
- Debugging nightmare

New:
- 8 files, ~1,500 lines
- >95% success rate
- Simple helpers (~200 lines total)
- No concurrency issues
- Easy debugging
```

### **Anexo B: Migration Strategy**
```
MIGRATION PHASES:

Phase 1: Parallel Development
- Develop new tests in tests/e2e-new/
- Keep old tests running
- No disruption to current workflow

Phase 2: Validation
- Run both systems in parallel
- Validate new system stability
- Performance benchmarking

Phase 3: Cutover
- Switch CI to new tests
- Deprecate old tests
- Move to tests/e2e/
- Archive old in tests/e2e-legacy/
```

### **Anexo C: Success Criteria Validation**
```
VALIDATION CHECKLIST:

□ 100 consecutive successful runs locally
□ 50 consecutive successful runs in CI
□ All core workflows covered
□ Zero flaky tests observed
□ Developer onboarding <1 hour
□ Performance benchmarks met
□ Documentation complete
□ Team approval received
```

---

## ✅ **APROBACIÓN Y SIGN-OFF**

### **Stakeholders**
- [ ] **Tech Lead**: Architecture approval
- [ ] **QA Lead**: Test coverage approval  
- [ ] **DevOps**: CI/CD integration approval
- [ ] **Product Owner**: Business requirements approval

### **Próximos Pasos**
1. **Aprobación PRD**: Review y approval de stakeholders
2. **Resource Allocation**: Asignar desarrollador para implementación
3. **Kickoff Meeting**: Alinear expectativas y timeline
4. **Implementation Start**: Comenzar Fase 1 inmediatamente

---

**Prepared by**: Backend Team  
**Review Date**: [TBD]  
**Approval Date**: [TBD]  
**Implementation Start**: [TBD] 