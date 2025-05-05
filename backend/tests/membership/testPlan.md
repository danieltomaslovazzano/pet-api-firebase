# Plan de Pruebas - Módulo de Membresía

## Objetivo
Este plan de pruebas tiene como objetivo verificar el correcto funcionamiento de los endpoints, modelos y servicios relacionados con las membresías en la API de mascotas. Se busca garantizar que las asignaciones de miembros a organizaciones y sus roles funcionan correctamente.

## Alcance

### Tests Unitarios
- Validación de tipos y formatos de membresías
- Funciones para comprobar permisos de roles dentro de membresías
- Funciones de transformación de datos de membresía

### Tests de Integración
- Creación de membresías (POST /api/memberships)
- Obtención de membresías (GET /api/memberships)
- Actualización de membresías (PATCH /api/memberships/:id)
- Eliminación de membresías (DELETE /api/memberships/:id)
- Gestión de roles en membresías

### Casos de Prueba Específicos

1. **Creación de Membresías**
   - Crear membresía con rol básico
   - Crear membresía con rol administrativo
   - Intentar crear membresía con datos incompletos
   - Intentar crear membresía duplicada

2. **Obtención de Membresías**
   - Obtener todas las membresías de un usuario
   - Obtener todas las membresías de una organización
   - Filtrar membresías por rol
   - Verificar que un usuario sólo puede ver sus propias membresías

3. **Actualización de Membresías**
   - Actualizar rol de una membresía
   - Verificar que sólo administradores pueden cambiar roles
   - Intentar actualizar membresía de otro usuario sin permisos

4. **Eliminación de Membresías**
   - Eliminar membresía como administrador
   - Eliminar propia membresía como miembro
   - Intentar eliminar membresía de otro usuario sin permisos

5. **Validación de Permisos**
   - Verificar que usuarios con rol 'org-admin' pueden gestionar todas las membresías de su organización
   - Verificar que usuarios con rol 'user' sólo pueden ver sus propias membresías
   - Verificar restricciones para eliminación de la última membresía administrativa

## Datos de Prueba
- Usuario con rol 'admin'
- Usuario con rol 'org-admin'
- Usuario con rol 'org-staff'
- Usuario con rol 'user'
- Organizaciones de prueba

## Validación de Permisos
Es crucial verificar que:
- Los administradores pueden gestionar todas las membresías
- Los administradores de organización pueden gestionar membresías de su organización
- Los usuarios regulares sólo pueden ver sus propias membresías
- La jerarquía de roles se respeta en operaciones de actualización

## Métricas
- Cobertura de código (objetivo: >80%)
- Tiempo de ejecución de las pruebas
- Tasa de éxito/fallo de los tests

## Informes
Los informes de las pruebas se generarán en la carpeta `tests/membership/reports/` incluyendo detalles de los casos de prueba ejecutados, su resultado y métricas de rendimiento.

## Detalle de los Endpoints para Membresías

### 1. Creación de Membresías
- `POST /api/memberships` - Crear una nueva membresía
  - Datos requeridos: userId, organizationId, role
  - Respuestas esperadas: 201 (Created), 400 (Bad Request), 403 (Forbidden), 409 (Conflict)

### 2. Obtención de Membresías
- `GET /api/memberships` - Obtener todas las membresías (filtradas por permisos)
  - Parámetros de consulta: userId, organizationId, role
  - Respuestas esperadas: 200 (OK), 403 (Forbidden)

- `GET /api/memberships/:id` - Obtener membresía por ID
  - Respuestas esperadas: 200 (OK), 404 (Not Found), 403 (Forbidden)

### 3. Actualización de Membresías
- `PATCH /api/memberships/:id` - Actualizar una membresía
  - Datos permitidos: role
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden), 404 (Not Found)

### 4. Eliminación de Membresías
- `DELETE /api/memberships/:id` - Eliminar una membresía
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found), 409 (Conflict) 