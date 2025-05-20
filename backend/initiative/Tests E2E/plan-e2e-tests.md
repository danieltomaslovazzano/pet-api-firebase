# Plan de Tests E2E (End-to-End)

Este documento detalla el roadmap de tests E2E a implementar, agrupados por fase y grupo de endpoints. Cada test debe ser ejecutado, su resultado documentado y, si es necesario, corregido antes de avanzar.

---

## **Fase 1: Autenticación y Usuarios**

- **auth.e2e.js**
  - [x] Registro de usuario _(automatizado, ver reporte en /tests/e2e/reports/auth.e2e/)_
  - [x] Login de usuario _(automatizado, ver reporte en /tests/e2e/reports/auth.e2e/)_
  - [ ] Login de superadmin
  - [ ] Refresco de token (si aplica)
  - [ ] Recuperación de contraseña
  - [ ] Acceso a perfil propio
  - [ ] Acceso denegado sin token

- **users.e2e.js**
  - [ ] Crear usuario (admin/superadmin)
  - [ ] Obtener usuario por ID
  - [ ] Listar usuarios (admin/superadmin)
  - [ ] Actualizar usuario
  - [ ] Eliminar usuario
  - [ ] Cambiar rol de usuario

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

> **Nota:** La generación de reportes E2E en markdown está automatizada para cada ejecución de test.

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

## **Seguimiento y Resultados**

- Cada test debe marcarse como:
  - [ ] Pendiente
  - [x] Implementado
  - [OK] Probado y funcionando
  - [ERR] Probado y requiere corrección (añadir comentario)
- Documentar resultados y problemas detectados tras cada ejecución. 