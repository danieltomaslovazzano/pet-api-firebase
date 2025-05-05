# Plan de Pruebas - Módulo de Administración

## Objetivo
Este plan de pruebas tiene como objetivo verificar el correcto funcionamiento de los endpoints, modelos y servicios relacionados con el panel de administración en la API de mascotas. Se busca garantizar que todas las operaciones administrativas funcionan correctamente y que los permisos de acceso se aplican adecuadamente.

## Alcance

### Tests Unitarios
- Validación de permisos administrativos
- Funciones de transformación de datos administrativos
- Funciones de filtrado y búsqueda en el panel administrativo

### Tests de Integración
- Gestión de usuarios (GET, PATCH, DELETE /admin/users)
- Estadísticas del sistema (GET /admin/stats)
- Operaciones batch (POST /admin/batch)
- Gestión de reportes (GET, PATCH, DELETE /admin/reports)
- Configuración del sistema (GET, PATCH /admin/settings)

### Casos de Prueba Específicos

1. **Acceso al Panel Administrativo**
   - Verificar que sólo los usuarios con rol 'admin' pueden acceder a los endpoints
   - Verificar que usuarios con otros roles reciben errores 403
   - Verificar la autenticación con tokens inválidos/expirados

2. **Gestión de Usuarios**
   - Obtener lista completa de usuarios del sistema
   - Filtrar usuarios por diferentes criterios (rol, estado, fecha)
   - Actualizar roles de usuario
   - Bloquear/desbloquear usuarios
   - Eliminar usuarios

3. **Estadísticas del Sistema**
   - Obtener métricas generales (usuarios, mascotas, reportes)
   - Obtener estadísticas por fecha
   - Obtener estadísticas por categoría

4. **Operaciones Batch**
   - Ejecutar operaciones masivas sobre usuarios
   - Ejecutar operaciones masivas sobre mascotas
   - Validar límites y throttling

5. **Gestión de Reportes**
   - Listar todos los reportes de problemas
   - Filtrar reportes por estado
   - Actualizar estado de reportes
   - Eliminar reportes

6. **Configuración del Sistema**
   - Obtener configuración actual
   - Actualizar parámetros de configuración

## Datos de Prueba
- Usuario con rol 'admin'
- Usuario con rol 'moderator'
- Usuario con rol 'user' (acceso denegado)
- Conjunto de usuarios, mascotas y reportes para probar operaciones batch

## Validación de Permisos
Es crucial verificar que:
- Los endpoints admin solo pueden ser accedidos por usuarios con rol 'admin'
- Algunas operaciones específicas pueden ser accedidas por 'moderator'
- Todos los demás roles reciben error de permisos
- La autenticación JWT funciona correctamente

## Métricas
- Cobertura de código (objetivo: >80%)
- Tiempo de ejecución de las pruebas
- Tasa de éxito/fallo de los tests

## Informes
Los informes de las pruebas se generarán en la carpeta `tests/admin/reports/` incluyendo detalles de los casos de prueba ejecutados, su resultado y métricas de rendimiento.

## Detalle del Endpoint para Admin

### 1. Gestión de Usuarios
- `GET /admin/users` - Obtener lista de usuarios
  - Parámetros de consulta: role, status, page, limit
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 401 (Unauthorized)
  
- `GET /admin/users/:id` - Obtener usuario por ID
  - Respuestas esperadas: 200 (OK), 404 (Not Found), 403 (Forbidden)
  
- `PATCH /admin/users/:id` - Actualizar usuario
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden)
  
- `DELETE /admin/users/:id` - Eliminar usuario
  - Respuestas esperadas: 200 (OK), 404 (Not Found), 403 (Forbidden)

### 2. Estadísticas
- `GET /admin/stats` - Obtener estadísticas generales
  - Parámetros de consulta: startDate, endDate, category
  - Respuestas esperadas: 200 (OK), 403 (Forbidden)

### 3. Operaciones Batch
- `POST /admin/batch/users` - Operaciones masivas en usuarios
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden)
  
- `POST /admin/batch/pets` - Operaciones masivas en mascotas
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden)

### 4. Gestión de Reportes
- `GET /admin/reports` - Obtener lista de reportes
  - Parámetros de consulta: status, type, page, limit
  - Respuestas esperadas: 200 (OK), 403 (Forbidden)
  
- `PATCH /admin/reports/:id` - Actualizar estado de reporte
  - Respuestas esperadas: 200 (OK), 404 (Not Found), 403 (Forbidden)
  
- `DELETE /admin/reports/:id` - Eliminar reporte
  - Respuestas esperadas: 200 (OK), 404 (Not Found), 403 (Forbidden)

### 5. Configuración
- `GET /admin/settings` - Obtener configuración del sistema
  - Respuestas esperadas: 200 (OK), 403 (Forbidden)
  
- `PATCH /admin/settings` - Actualizar configuración
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden) 