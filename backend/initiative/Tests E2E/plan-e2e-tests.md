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
  - [ ] Crear organización
  - [ ] Obtener organización por ID
  - [ ] Listar organizaciones
  - [ ] Actualizar organización
  - [ ] Eliminar organización
  - [ ] Validar acceso multitenant (solo miembros pueden ver/editar)

- **memberships.e2e.js**
  - [ ] Invitar usuario a organización
  - [ ] Aceptar invitación
  - [ ] Cambiar rol en organización
  - [ ] Expulsar usuario de organización
  - [ ] Validar acceso cruzado prohibido

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
   ```

## **Seguimiento y Resultados**

- Cada test debe marcarse como:
  - [ ] Pendiente
  - [x] Implementado
  - [OK] Probado y funcionando
  - [ERR] Probado y requiere corrección (añadir comentario)
- Documentar resultados y problemas detectados tras cada ejecución.
- Los tests deben limpiar los datos que crean para no afectar el entorno de desarrollo. 