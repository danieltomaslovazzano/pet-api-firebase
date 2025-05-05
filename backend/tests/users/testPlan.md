# Plan de Pruebas - Módulo de Usuarios

## Objetivo
Este plan de pruebas tiene como objetivo verificar el correcto funcionamiento de los endpoints, modelos y servicios relacionados con la gestión de usuarios en la API de mascotas. Se busca garantizar que todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios funcionan correctamente y que los permisos de acceso se aplican adecuadamente.

## Alcance

### Tests Unitarios
- Validación de campos requeridos en el modelo de usuario
- Función de transformación de datos de usuario
- Funciones de filtrado y búsqueda de usuarios

### Tests de Integración
- Creación de usuario (POST /users)
- Obtención de usuarios (GET /users)
- Obtención de usuario por ID (GET /users/:id)
- Actualización de usuario (PUT /users/:id)
- Eliminación de usuario (DELETE /users/:id)
- Operaciones de bloqueo y desbloqueo de usuarios
- Obtención de organizaciones de un usuario

### Casos de Prueba Específicos
1. **Creación de Usuario**
   - Crear usuario con datos válidos
   - Intentar crear usuario con datos inválidos o incompletos
   - Verificar que el rol por defecto es "user"

2. **Obtención de Usuarios**
   - Obtener lista completa de usuarios
   - Filtrar usuarios por rol
   - Buscar usuarios por términos específicos
   - Verificar paginación y límites de resultados

3. **Operaciones por ID**
   - Obtener, actualizar y eliminar un usuario existente
   - Intentar operaciones con ID inexistentes
   - Verificar permisos (solo propietario o administrador)

4. **Bloqueo de Usuarios**
   - Bloquear y desbloquear usuarios
   - Verificar que un usuario bloqueado no puede interactuar con el bloqueador
   - Verificar que los administradores pueden gestionar todos los bloqueos

5. **Organizaciones de Usuario**
   - Obtener organizaciones a las que pertenece un usuario
   - Verificar roles dentro de las organizaciones
   - Probar acceso con permisos insuficientes

## Datos de Prueba
- Usuarios con diferentes roles (user, moderator, admin)
- Usuarios pertenecientes a diferentes organizaciones
- Datos incompletos y malformados para pruebas negativas

## Métricas
- Cobertura de código (objetivo: >80%)
- Tiempo de ejecución de las pruebas
- Tasa de éxito/fallo de los tests

## Informes
Los informes de las pruebas se generarán en la carpeta `tests/users/reports` incluyendo detalles de los casos de prueba ejecutados, su resultado y métricas de rendimiento. 