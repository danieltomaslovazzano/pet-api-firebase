# Documentación de API - PetConnect

Esta documentación detalla todos los endpoints disponibles en la API de PetConnect, incluyendo ejemplos de solicitudes CURL para facilitar las pruebas.

## Tabla de Contenidos

- [Usuarios](#usuarios)
- [Autenticación](#autenticación)
- [Organizaciones](#organizaciones)
- [Membresías](#membresías)
- [Mascotas](#mascotas)
- [Conversaciones](#conversaciones)
- [Mensajes](#mensajes)

## Base URL

Todas las URLs de los endpoints están prefijadas con:

```
http://localhost:3000/api
```

Para entornos de producción, será la URL correspondiente al servidor donde esté desplegada la aplicación.

## Autenticación

La mayoría de los endpoints requieren un token de autenticación. Para incluirlo en las solicitudes CURL, usa la opción `-H "Authorization: Bearer TU_TOKEN"`.

### Registro de Usuario

```
POST /auth/register
```

**Ejemplo CURL:**
```bash
curl -X POST \
  http://localhost:3000/api/auth/register \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "contraseña123",
    "name": "Nombre Usuario",
    "phone": "+1234567890"
  }'
```

### Inicio de Sesión

```
POST /auth/login
```

**Ejemplo CURL:**
```bash
curl -X POST \
  http://localhost:3000/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
  }'
```

**Respuesta:**
```json
{
  "idToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "AOEOulbHRnxKGN9...",
  "expiresIn": "3600",
  "user": {
    "uid": "user123",
    "email": "usuario@ejemplo.com",
    "name": "Nombre Usuario"
  }
}
```

### Cierre de Sesión

```
POST /auth/logout
```

**Ejemplo CURL:**
```bash
curl -X POST \
  http://localhost:3000/api/auth/logout \
  -H 'Authorization: Bearer TU_TOKEN'
```

## Usuarios

### Obtener Perfil de Usuario

```
GET /users/:id
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/users/user123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Actualizar Usuario

```
PUT /users/:id
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/users/user123 \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Nuevo Nombre",
    "phone": "+0987654321",
    "address": {
      "street": "Calle Ejemplo 123",
      "city": "Ciudad Ejemplo"
    }
  }'
```

### Obtener Organizaciones del Usuario

```
GET /users/:id/organizations
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/users/user123/organizations \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Bloquear Usuario

```
PUT /users/:id/block
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/users/user123/block \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "blockedUserId": "user456"
  }'
```

### Desbloquear Usuario

```
PUT /users/:id/unblock
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/users/user123/unblock \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "blockedUserId": "user456"
  }'
```

## Organizaciones

### Crear Organización

```
POST /organizations
```

**Ejemplo CURL:**
```bash
curl -X POST \
  http://localhost:3000/api/organizations \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Refugio Patitas Felices",
    "description": "Organización dedicada al rescate y adopción de mascotas",
    "address": {
      "street": "Av. Mascotas 123",
      "city": "Ciudad Ejemplo",
      "state": "Estado Ejemplo",
      "zipCode": "12345",
      "country": "País Ejemplo"
    },
    "contactInfo": {
      "email": "contacto@patitasfelices.org",
      "phone": "+1234567890",
      "website": "https://patitasfelices.org"
    }
  }'
```

### Obtener Organización

```
GET /organizations/:id
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/organizations/org123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Actualizar Organización

```
PUT /organizations/:id
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/organizations/org123 \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Refugio Patitas Contentas",
    "description": "Nueva descripción de la organización",
    "contactInfo": {
      "email": "nuevo@patitasfelices.org"
    }
  }'
```

### Eliminar Organización

```
DELETE /organizations/:id
```

**Ejemplo CURL:**
```bash
curl -X DELETE \
  http://localhost:3000/api/organizations/org123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Obtener Miembros de una Organización

```
GET /organizations/:id/members
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/organizations/org123/members \
  -H 'Authorization: Bearer TU_TOKEN'
```

## Membresías

### Invitar Usuario a Organización

```
POST /organizations/memberships
```

**Ejemplo CURL:**
```bash
curl -X POST \
  http://localhost:3000/api/organizations/memberships \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "organizationId": "org123",
    "userId": "user456",
    "role": "volunteer"
  }'
```

### Actualizar Rol de Miembro

```
PUT /organizations/memberships/:id
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/organizations/memberships/mem123 \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "role": "manager"
  }'
```

### Eliminar Miembro de Organización

```
DELETE /organizations/memberships/:id
```

**Ejemplo CURL:**
```bash
curl -X DELETE \
  http://localhost:3000/api/organizations/memberships/mem123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

## Mascotas

### Listar Mascotas

```
GET /pets
```

**Parámetros opcionales:**
- `limit`: Número máximo de resultados (default: 10)
- `page`: Página de resultados (default: 1)
- `species`: Filtrar por especie (perro, gato, etc.)
- `status`: Filtrar por estado (disponible, adoptado, etc.)

**Ejemplo CURL:**
```bash
curl -X GET \
  'http://localhost:3000/api/pets?species=perro&status=disponible&limit=5&page=1' \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Obtener Mascota por ID

```
GET /pets/:id
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/pets/pet123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Crear Mascota

```
POST /pets
```

**Ejemplo CURL:**
```bash
curl -X POST \
  http://localhost:3000/api/pets \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Rocky",
    "species": "perro",
    "breed": "Labrador Retriever",
    "age": 2,
    "description": "Perro amigable y juguetón",
    "status": "disponible",
    "images": ["url1", "url2"],
    "ownerId": "user123",
    "organizationId": "org123"
  }'
```

### Actualizar Mascota

```
PUT /pets/:id
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/pets/pet123 \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Rocky",
    "age": 3,
    "description": "Perro muy amigable y juguetón, le encanta nadar",
    "status": "adoptado"
  }'
```

### Eliminar Mascota

```
DELETE /pets/:id
```

**Ejemplo CURL:**
```bash
curl -X DELETE \
  http://localhost:3000/api/pets/pet123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Subir Imagen de Mascota

```
PUT /pets/:id/image
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/pets/pet123/image \
  -H 'Authorization: Bearer TU_TOKEN' \
  -F 'image=@/ruta/a/imagen.jpg'
```

### Subir Múltiples Imágenes

```
PUT /pets/:id/images/multiple
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/pets/pet123/images/multiple \
  -H 'Authorization: Bearer TU_TOKEN' \
  -F 'images=@/ruta/a/imagen1.jpg' \
  -F 'images=@/ruta/a/imagen2.jpg' \
  -F 'images=@/ruta/a/imagen3.jpg'
```

### Eliminar Imagen de Mascota

```
DELETE /pets/:id/images
```

**Ejemplo CURL:**
```bash
curl -X DELETE \
  http://localhost:3000/api/pets/pet123/images \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "imageUrl": "https://storage.example.com/image1.jpg"
  }'
```

## Conversaciones

### Crear Conversación

```
POST /conversations
```

**Ejemplo CURL:**
```bash
curl -X POST \
  http://localhost:3000/api/conversations \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "participants": ["user123", "user456"]
  }'
```

### Obtener Conversación por ID

```
GET /conversations/:id
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/conversations/conv123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Obtener Conversaciones de un Usuario

```
GET /conversations/user/:userId
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/conversations/user/user123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Marcar Conversación como Eliminada (Soft Delete)

```
PUT /conversations/:id/soft-delete
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/conversations/conv123/soft-delete \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "user123"
  }'
```

### Eliminar Conversación Permanentemente

```
DELETE /conversations/:id
```

**Ejemplo CURL:**
```bash
curl -X DELETE \
  http://localhost:3000/api/conversations/conv123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Ocultar Conversación

```
PUT /conversations/:id/hide
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/conversations/conv123/hide \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "user123"
  }'
```

### Mostrar Conversación Oculta

```
PUT /conversations/:id/unhide
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/conversations/conv123/unhide \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "user123"
  }'
```

### Bloquear Conversación

```
PUT /conversations/:id/block
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/conversations/conv123/block \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "user123"
  }'
```

### Desbloquear Conversación

```
PUT /conversations/:id/unblock
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/conversations/conv123/unblock \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "user123"
  }'
```

## Mensajes

### Crear Mensaje

```
POST /messages
```

**Ejemplo CURL:**
```bash
curl -X POST \
  http://localhost:3000/api/messages \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "conversationId": "conv123",
    "senderId": "user123",
    "text": "Hola, estoy interesado en adoptar a Rocky"
  }'
```

### Obtener Mensajes de una Conversación

```
GET /messages/:conversationId
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/messages/conv123 \
  -H 'Authorization: Bearer TU_TOKEN'
```

## Funciones Administrativas

### Actualizar Rol de Usuario

```
PUT /admin/roles/:id
```

**Ejemplo CURL:**
```bash
curl -X PUT \
  http://localhost:3000/api/admin/roles/user123 \
  -H 'Authorization: Bearer TU_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "role": "moderator"
  }'
```

### Listar Todos los Usuarios (Admin)

```
GET /admin/users
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/admin/users \
  -H 'Authorization: Bearer TU_TOKEN'
```

### Listar Todas las Mascotas (Admin)

```
GET /admin/pets
```

**Ejemplo CURL:**
```bash
curl -X GET \
  http://localhost:3000/api/admin/pets \
  -H 'Authorization: Bearer TU_TOKEN'
```

---

## Códigos de Estado

- **200**: Solicitud exitosa
- **201**: Recurso creado exitosamente
- **400**: Solicitud incorrecta (datos inválidos)
- **401**: No autorizado (autenticación requerida)
- **403**: Prohibido (no tiene permisos)
- **404**: Recurso no encontrado
- **500**: Error interno del servidor

## Manejo de Errores

Todas las respuestas de error siguen este formato:

```json
{
  "error": "Descripción del error",
  "details": "Detalles específicos (opcional)"
}
```

## Notas para Testing

1. Primero debe registrarse/iniciar sesión para obtener un token válido
2. El token debe incluirse en todas las solicitudes autenticadas
3. Reemplace los IDs de ejemplo (`user123`, `org123`, etc.) con IDs reales
4. Algunos endpoints requieren roles específicos (admin, moderator, etc.)
