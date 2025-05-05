# Plan de Pruebas - Módulo de Conversación

## Objetivo
Este plan de pruebas tiene como objetivo verificar el correcto funcionamiento de los endpoints, modelos y servicios relacionados con las conversaciones en la API de mascotas. Se busca garantizar que la creación, gestión y acceso a conversaciones funcione correctamente y que los permisos se apliquen adecuadamente.

## Alcance

### Tests Unitarios
- Validación de esquemas de datos de conversaciones
- Funciones de transformación y formateo de conversaciones
- Funciones para verificar participantes y permisos en conversaciones

### Tests de Integración
- Creación de conversaciones (POST /api/conversations)
- Obtención de conversaciones (GET /api/conversations)
- Actualización de conversaciones (PATCH /api/conversations/:id)
- Eliminación de conversaciones (DELETE /api/conversations/:id)
- Gestión de participantes de conversaciones

### Casos de Prueba Específicos

1. **Creación de Conversaciones**
   - Crear conversación entre dos usuarios
   - Crear conversación grupal
   - Crear conversación sobre una mascota específica
   - Intentar crear conversación con datos incompletos

2. **Obtención de Conversaciones**
   - Obtener detalles de una conversación específica
   - Obtener lista de conversaciones de un usuario
   - Verificar que solo participantes pueden ver una conversación
   - Obtener conversaciones con filtros (tipo, fecha, estado)

3. **Actualización de Conversaciones**
   - Actualizar título o descripción de conversación
   - Marcar conversación como archivada/no archivada
   - Verificar que solo participantes pueden actualizar
   - Verificar validación de datos en actualizaciones

4. **Eliminación de Conversaciones**
   - Eliminar una conversación como creador
   - Verificar que se eliminan mensajes relacionados (cascada)
   - Verificar que usuarios sin permisos no pueden eliminar
   - Salir de una conversación (para conversaciones grupales)

5. **Gestión de Participantes**
   - Añadir participantes a una conversación
   - Eliminar participantes de una conversación
   - Verificar límites de participantes según tipo de conversación
   - Verificar permisos para gestionar participantes

## Datos de Prueba
- Usuario administrador
- Varios usuarios regulares
- Mascota para conversaciones relacionadas con mascotas
- Diferentes tipos de conversaciones (directa, grupal, sobre mascota)

## Validación de Permisos
Es crucial verificar que:
- Solo los participantes de una conversación pueden verla y participar
- Los creadores tienen permisos adicionales como añadir/eliminar participantes
- Los administradores pueden moderar conversaciones en caso necesario
- Usuarios sin relación no pueden acceder a conversaciones privadas

## Métricas
- Cobertura de código (objetivo: >80%)
- Tiempo de ejecución de las pruebas
- Tasa de éxito/fallo de los tests

## Informes
Los informes de las pruebas se generarán en la carpeta `tests/conversation/reports/` incluyendo detalles de los casos de prueba ejecutados, su resultado y métricas de rendimiento.

## Detalle de los Endpoints para Conversaciones

### 1. Creación de Conversaciones
- `POST /api/conversations` - Crear una nueva conversación
  - Datos requeridos: title, participantIds, type (opcional: petId para conversaciones sobre mascotas)
  - Respuestas esperadas: 201 (Created), 400 (Bad Request), 403 (Forbidden)

### 2. Obtención de Conversaciones
- `GET /api/conversations` - Obtener todas las conversaciones del usuario
  - Parámetros de consulta: type, status, petId, archived, page, limit
  - Respuestas esperadas: 200 (OK)

- `GET /api/conversations/:id` - Obtener conversación por ID
  - Respuestas esperadas: 200 (OK), 404 (Not Found), 403 (Forbidden)

### 3. Actualización de Conversaciones
- `PATCH /api/conversations/:id` - Actualizar una conversación
  - Datos permitidos: title, description, status, archived
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden), 404 (Not Found)

### 4. Eliminación de Conversaciones
- `DELETE /api/conversations/:id` - Eliminar una conversación
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found)

### 5. Gestión de Participantes
- `POST /api/conversations/:id/participants` - Añadir participantes
  - Datos requeridos: userIds (array de IDs de usuario)
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden), 404 (Not Found)

- `DELETE /api/conversations/:id/participants/:userId` - Eliminar participante
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found)

- `DELETE /api/conversations/:id/leave` - Salir de una conversación
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found) 