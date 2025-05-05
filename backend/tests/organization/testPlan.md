# Plan de Pruebas - Módulo de Organización

## Objetivo
Este plan de pruebas tiene como objetivo verificar el correcto funcionamiento de los endpoints, modelos y servicios relacionados con las organizaciones en la API de mascotas. Se busca garantizar que la creación, gestión y acceso a organizaciones funcione correctamente y que los permisos se apliquen adecuadamente.

## Alcance

### Tests Unitarios
- Validación de esquemas de datos de organizaciones
- Funciones de transformación de datos de organizaciones
- Funciones para comprobar pertenencia y roles en organizaciones

### Tests de Integración
- Creación de organizaciones (POST /api/organizations)
- Obtención de organizaciones (GET /api/organizations)
- Actualización de organizaciones (PATCH /api/organizations/:id)
- Eliminación de organizaciones (DELETE /api/organizations/:id)
- Gestión de recursos específicos de organizaciones

### Casos de Prueba Específicos

1. **Creación de Organizaciones**
   - Crear organización con datos completos
   - Crear organización con datos mínimos requeridos
   - Intentar crear organización con datos incompletos
   - Verificar que el creador se convierte automáticamente en administrador

2. **Obtención de Organizaciones**
   - Obtener detalles de una organización específica
   - Obtener lista de organizaciones filtradas por permisos
   - Verificar que usuarios externos no pueden ver organizaciones privadas
   - Obtener organizaciones con filtros (nombre, tipo, estado)

3. **Actualización de Organizaciones**
   - Actualizar información básica de la organización
   - Actualizar configuración y preferencias
   - Verificar que sólo administradores pueden actualizar
   - Verificar validación de datos en actualizaciones

4. **Eliminación de Organizaciones**
   - Eliminar una organización como propietario/admin
   - Verificar que se eliminan recursos relacionados (cascada)
   - Verificar que usuarios sin permisos no pueden eliminar
   - Verificar protección contra eliminación accidental

5. **Gestión de Recursos de Organización**
   - Acceso a recursos compartidos de la organización
   - Gestión de configuraciones específicas de organización
   - Verificar límites de recursos por tipo de organización
   - Verificar acceso a estadísticas de la organización

## Datos de Prueba
- Usuario con rol 'admin' (sistema)
- Usuario con rol 'org-admin'
- Usuario con rol 'org-staff'
- Usuario con rol 'user'
- Organizaciones de diferentes tipos (empresa, refugio, clínica)

## Validación de Permisos
Es crucial verificar que:
- Los administradores del sistema pueden gestionar todas las organizaciones
- Los administradores de organización sólo pueden gestionar su propia organización
- Los miembros regulares pueden ver pero no modificar información organizacional
- Los usuarios externos no pueden acceder a organizaciones privadas

## Métricas
- Cobertura de código (objetivo: >80%)
- Tiempo de ejecución de las pruebas
- Tasa de éxito/fallo de los tests

## Informes
Los informes de las pruebas se generarán en la carpeta `tests/organization/reports/` incluyendo detalles de los casos de prueba ejecutados, su resultado y métricas de rendimiento.

## Detalle de los Endpoints para Organizaciones

### 1. Creación de Organizaciones
- `POST /api/organizations` - Crear una nueva organización
  - Datos requeridos: name, type, description, isPublic
  - Respuestas esperadas: 201 (Created), 400 (Bad Request), 403 (Forbidden)

### 2. Obtención de Organizaciones
- `GET /api/organizations` - Obtener todas las organizaciones (filtradas por permisos)
  - Parámetros de consulta: name, type, isPublic, page, limit
  - Respuestas esperadas: 200 (OK)

- `GET /api/organizations/:id` - Obtener organización por ID
  - Respuestas esperadas: 200 (OK), 404 (Not Found), 403 (Forbidden)

### 3. Actualización de Organizaciones
- `PATCH /api/organizations/:id` - Actualizar una organización
  - Datos permitidos: name, description, type, isPublic, settings
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden), 404 (Not Found)

### 4. Eliminación de Organizaciones
- `DELETE /api/organizations/:id` - Eliminar una organización
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found)

### 5. Recursos de Organización
- `GET /api/organizations/:id/stats` - Obtener estadísticas de la organización
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found)

- `GET /api/organizations/:id/pets` - Obtener mascotas de la organización
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found)

- `GET /api/organizations/:id/members` - Obtener miembros de la organización
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found) 