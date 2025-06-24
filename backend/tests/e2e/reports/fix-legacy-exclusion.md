# Fix: Exclusión de Carpeta Legacy en Tests E2E

**Fecha**: 17 de Diciembre, 2025  
**Problema**: Los tests en la carpeta `legacy/` se estaban ejecutando cuando no deberían.

## Problema Detectado

Al verificar qué archivos de test detecta Jest, se encontró que **3 archivos legacy** estaban siendo incluidos:

```
/tests/e2e/legacy/conversations.e2e.js
/tests/e2e/legacy/memberships.e2e.js  
/tests/e2e/legacy/messages.e2e.js
```

Estos archivos son versiones legacy/backup que **NO** deben ejecutarse durante los tests normales.

## Solución Implementada

Se agregó configuración en `jest.e2e.config.js` para excluir la carpeta legacy:

```javascript
// Antes
module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/e2e/**/*.e2e.js',
    '**/tests/e2e/**/**/*.e2e.js'
  ],
  // ... resto de configuración
};

// Después
module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/e2e/**/*.e2e.js',
    '**/tests/e2e/**/**/*.e2e.js'
  ],
  testPathIgnorePatterns: [
    '/tests/e2e/legacy/'  // Exclude legacy folder
  ],
  // ... resto de configuración
};
```

## Verificación

**Antes del fix**:
- Archivos detectados: 40 (incluyendo 3 de legacy)
- Comando: `npx jest --config jest.e2e.config.js --listTests | wc -l` → **40**
- Los archivos legacy aparecían en la lista

**Después del fix**:
- Archivos detectados: 37 (sin archivos legacy)
- Comando: `npx jest --config jest.e2e.config.js --listTests | wc -l` → **37**  
- Comando: `npx jest --config jest.e2e.config.js --listTests | grep legacy` → **Sin resultados**

## Impacto

✅ **Problema resuelto**: Los archivos legacy ya no se ejecutan  
✅ **Tests organizados**: Solo se ejecutan los tests de la estructura nueva  
✅ **Compatibilidad**: Los scripts `npm run test:e2e:*` funcionan correctamente  

## Archivos Afectados

- `jest.e2e.config.js` - Agregada configuración `testPathIgnorePatterns`

## Validación Final

Los tests funcionan correctamente:
```bash
npm run test:e2e:auth  # ✅ Funciona sin archivos legacy
npm run test:e2e:all   # ✅ Solo ejecuta archivos organizados
``` 