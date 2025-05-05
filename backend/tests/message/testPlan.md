# Plan de Pruebas - Módulo de Mensaje

## Objetivo
Este plan de pruebas tiene como objetivo verificar el correcto funcionamiento de los endpoints, modelos y servicios relacionados con los mensajes en la API de mascotas. Se busca garantizar que el envío, recepción, actualización y eliminación de mensajes funcionen correctamente y que los permisos se apliquen adecuadamente.

## Alcance

### Tests Unitarios
- Validación de esquemas de datos de mensajes
- Funciones de transformación y formateo de mensajes
- Funciones para verificar permisos sobre mensajes

### Tests de Integración
- Envío de mensajes (POST /api/messages)
- Obtención de mensajes (GET /api/messages)
- Actualización de mensajes (PATCH /api/messages/:id)
- Eliminación de mensajes (DELETE /api/messages/:id)
- Notificaciones de mensajes nuevos

### Casos de Prueba Específicos

1. **Envío de Mensajes**
   - Enviar mensaje de texto simple
   - Enviar mensaje con archivos adjuntos
   - Enviar mensaje con menciones a usuarios
   - Intentar enviar mensaje en conversación donde no se es participante

2. **Obtención de Mensajes**
   - Obtener todos los mensajes de una conversación
   - Obtener mensajes con paginación
   - Obtener mensajes con filtros (fecha, tipo)
   - Verificar que solo participantes pueden ver los mensajes

3. **Actualización de Mensajes**
   - Editar contenido de un mensaje propio
   - Verificar que solo el autor puede editar un mensaje
   - Verificar límites de tiempo para edición de mensajes
   - Verificar validación de datos en actualizaciones

4. **Eliminación de Mensajes**
   - Eliminar un mensaje propio
   - Verificar que solo el autor o administrador puede eliminar
   - Verificar comportamiento cuando se eliminan mensajes con adjuntos
   - Verificar límites de tiempo para eliminación de mensajes

5. **Notificaciones y Estado de Mensajes**
   - Verificar marcado de mensajes como leídos
   - Verificar recepción de notificaciones de nuevos mensajes
   - Verificar estado de entrega de mensajes
   - Verificar comportamiento con mensajes programados

## Datos de Prueba
- Usuario administrador
- Varios usuarios regulares como participantes
- Conversaciones de diferentes tipos
- Mensajes con diferentes tipos de contenido

## Validación de Permisos
Es crucial verificar que:
- Solo los participantes de una conversación pueden enviar y ver mensajes
- Solo el autor de un mensaje puede editarlo o eliminarlo
- Los administradores pueden moderar mensajes en caso necesario
- Los límites de tiempo para edición/eliminación se aplican correctamente

## Métricas
- Cobertura de código (objetivo: >80%)
- Tiempo de ejecución de las pruebas
- Tasa de éxito/fallo de los tests

## Informes
Los informes de las pruebas se generarán en la carpeta `tests/message/reports/` incluyendo detalles de los casos de prueba ejecutados, su resultado y métricas de rendimiento.

## Detalle de los Endpoints para Mensajes

### 1. Envío de Mensajes
- `POST /api/messages` - Enviar un nuevo mensaje
  - Datos requeridos: conversationId, content, type
  - Datos opcionales: attachments, mentionedUserIds
  - Respuestas esperadas: 201 (Created), 400 (Bad Request), 403 (Forbidden)

### 2. Obtención de Mensajes
- `GET /api/messages` - Obtener mensajes (filtrados por conversación)
  - Parámetros de consulta: conversationId, page, limit, after, before, type
  - Respuestas esperadas: 200 (OK), 403 (Forbidden)

- `GET /api/messages/:id` - Obtener mensaje por ID
  - Respuestas esperadas: 200 (OK), 404 (Not Found), 403 (Forbidden)

### 3. Actualización de Mensajes
- `PATCH /api/messages/:id` - Actualizar un mensaje
  - Datos permitidos: content
  - Respuestas esperadas: 200 (OK), 400 (Bad Request), 403 (Forbidden), 404 (Not Found)

### 4. Eliminación de Mensajes
- `DELETE /api/messages/:id` - Eliminar un mensaje
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found)

### 5. Estado de Mensajes
- `PATCH /api/messages/:id/read` - Marcar mensaje como leído
  - Respuestas esperadas: 200 (OK), 403 (Forbidden), 404 (Not Found)

- `GET /api/messages/unread` - Obtener conteo de mensajes no leídos
  - Parámetros de consulta: conversationId (opcional)
  - Respuestas esperadas: 200 (OK) 