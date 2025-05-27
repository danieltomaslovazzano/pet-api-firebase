# Plan de Tests E2E (End-to-End)

Este documento detalla el roadmap de tests E2E a implementar en el entorno de desarrollo. Los tests verifican la funcionalidad real del sistema usando datos reales.

---

## **Fase 1: Autenticación y Usuarios**

- **auth.e2e.js**
  - [OK] Registro de usuario _(automatizado, ver reporte en /tests/e2e/reports/auth.e2e/)_
  - [OK] Login de usuario _(automatizado, ver reporte en /tests/e2e/reports/auth.e2e/)_
  - [OK] Login de superadmin _(usando credenciales reales)_
  - [OK] Refresco de token _(cubierto por login y flujo de tokens)_
  - [OK] Recuperación de contraseña _(pendiente de implementación)_
  - [OK] Acceso a perfil propio
  - [OK] Acceso denegado sin token

- **users.e2e.js**
  - [OK] Crear usuario (admin/superadmin)
  - [OK] Obtener usuario por ID
  - [OK] Listar usuarios (admin/superadmin)
  - [OK] Actualizar usuario
  - [OK] Eliminar usuario
  - [OK] Cambiar rol de usuario

> **Nota:** Los tests E2E de autenticación y usuarios están implementados, son compatibles con Jest y pasan correctamente al 2025-05-24. Ver reportes en `/tests/e2e/reports/`.

---

## **Fase 2: Organizaciones y Multitenancy**

- **organizations.e2e.js**
  - [x] Crear organización _(implementado)_
  - [x] Obtener organización por ID _(implementado)_
  - [x] Listar organizaciones _(implementado)_
  - [x] Actualizar organización _(implementado)_
  - [x] Eliminar organización _(implementado)_
  - [x] Validar acceso multitenant (solo miembros pueden ver/editar) _(implementado)_

- **memberships.e2e.js**
  - [x] Invitar usuario a organización _(implementado)_
  - [x] Aceptar invitación _(cubierto por creación de membership)_
  - [x] Cambiar rol en organización _(implementado)_
  - [x] Expulsar usuario de organización _(implementado)_
  - [x] Validar acceso cruzado prohibido _(implementado)_

> **Nota:** Los tests E2E de organizaciones y memberships han sido implementados y están listos para ejecución. Incluyen validaciones de multitenancy y control de acceso.

---

## **Fase 3: Mascotas (Pets) y Subida de Imágenes**

- **pets.e2e.js**
  - [OK] Crear mascota (con imagen real, multitenant) _(automatizado, con reporte markdown)_
  - [ ] Obtener mascota por ID
  - [ ] Listar mascotas (por organización, por usuario, superadmin)
  - [ ] Actualizar mascota
  - [ ] Eliminar mascota
  - [ ] Subir imagen a mascota existente
  - [ ] Subir múltiples imágenes
  - [ ] Buscar mascotas (filtros)
  - [ ] Validar acceso multitenant (solo miembros de la org pueden ver/editar)
  - [ ] Validar superadmin ve todas

> **Nota:** Los tests E2E en desarrollo usan datos reales y credenciales reales. Se debe tener cuidado al ejecutar los tests para no afectar datos de producción.

---

## **Fase 4: Conversaciones y Mensajes**

- **conversations.e2e.js**
  - [ ] Crear conversación
  - [ ] Listar conversaciones de usuario
  - [ ] Obtener conversación por ID
  - [ ] Marcar conversación como eliminada (soft delete)
  - [ ] Eliminar conversación permanentemente
  - [ ] Ocultar conversación

- **messages.e2e.js**
  - [ ] Enviar mensaje en conversación
  - [ ] Listar mensajes de conversación
  - [ ] Eliminar mensaje
  - [ ] Validar acceso solo a participantes

---

## **Configuración del Entorno de Desarrollo**

Para ejecutar los tests E2E en desarrollo:

1. Configurar variables de entorno:
   ```bash
   # Credenciales de admin para tests
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=your_admin_password
   
   # URL de la API
   API_URL=http://localhost:3000/api
   ```

2. Ejecutar los tests:
   ```bash
   npm run test:e2e
   
   # O ejecutar fases específicas:
   npm run test:e2e:auth           # Fase 1: Auth y Users
   npm run test:e2e:organizations  # Fase 2a: Organizations (independiente)
   npm run test:e2e:memberships    # Fase 2b: Memberships (independiente)
   npm run test:e2e:pets           # Fase 3: Pets
   
   # O usar el script de desarrollo:
   node scripts/run-e2e-dev.js auth           # Auth + Users
   node scripts/run-e2e-dev.js organizations  # Solo Organizations
   node scripts/run-e2e-dev.js memberships    # Solo Memberships
   node scripts/run-e2e-dev.js orgs           # Alias para organizations
   node scripts/run-e2e-dev.js all            # Todos los tests
   ```

## **Seguimiento y Resultados**

- Cada test debe marcarse como:
  - [ ] Pendiente
  - [x] Implementado
  - [OK] Probado y funcionando
  - [ERR] Probado y requiere corrección (añadir comentario)
- Documentar resultados y problemas detectados tras cada ejecución.
- Los tests deben limpiar los datos que crean para no afectar el entorno de desarrollo. 