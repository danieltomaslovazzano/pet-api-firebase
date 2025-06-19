# Pet API Documentation

## 🚀 **NUEVA ESTRUCTURA DE RESPUESTAS UNIFICADAS** (v2.0)

A partir de la versión 2.0, **TODAS** las respuestas de la API siguen una estructura unificada y consistente.

### **📋 Estructura Estándar de Respuesta**

```json
{
  "success": boolean,
  "data": any,
  "message": "string",
  "meta": {
    "language": "string",
    "timestamp": "ISO 8601 string", 
    "messageKey": "string",
    "count": number,      // Para listas
    "page": number,       // Para paginación
    "limit": number,      // Para paginación
    "total": number       // Para paginación
  }
}
```

### **✅ Respuestas de Éxito**

#### **Respuesta Simple**
```json
{
  "success": true,
  "data": {
    "id": "123",
    "name": "Max",
    "species": "perro"
  },
  "message": "pets.get.success",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "messageKey": "pets.get.success"
  }
}
```

#### **Lista de Recursos**
```json
{
  "success": true,
  "data": [
    {"id": "1", "name": "Max"},
    {"id": "2", "name": "Luna"}
  ],
  "message": "pets.list.success",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "messageKey": "pets.list.success",
    "count": 2,
    "page": 1,
    "limit": 10,
    "total": 2
  }
}
```

#### **Creación de Recurso (201)**
```json
{
  "success": true,
  "data": {
    "id": "123",
    "name": "Max",
    "createdAt": "2025-06-19T13:16:14.771Z"
  },
  "message": "pets.create.success",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "messageKey": "pets.create.success"
  }
}
```

### **❌ Respuestas de Error**

#### **Error de Validación (400)**
```json
{
  "success": false,
  "error": "Validation failed",
  "errors": [
    {
      "field": "name",
      "code": "REQUIRED",
      "message": "pets.validation.name.required"
    }
  ],
  "message": "pets.validation.failed",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "messageKey": "pets.validation.failed"
  }
}
```

#### **No Autorizado (401)**
```json
{
  "success": false,
  "error": "Token not provided",
  "message": "auth.token_not_provided",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "messageKey": "auth.token_not_provided"
  }
}
```

#### **Prohibido (403)**
```json
{
  "success": false,
  "error": "Insufficient permissions",
  "message": "auth.insufficient_permissions",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "messageKey": "auth.insufficient_permissions"
  }
}
```

#### **No Encontrado (404)**
```json
{
  "success": false,
  "error": "Resource not found",
  "message": "pets.not_found",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "messageKey": "pets.not_found"
  }
}
```

---

## **🔐 Autenticación**

### **Login**
- **URL**: `POST /api/auth/login`
- **Body**: `{ "email": "string", "password": "string" }`
- **Respuesta**:
```json
{
  "success": true,
  "data": {
    "tokens": {
      "idToken": "jwt-token-here",
      "refreshToken": "refresh-token-here"
    },
    "user": {
      "id": "user-id",
      "email": "user@example.com",
      "name": "User Name"
    }
  },
  "message": "auth.login.success",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "messageKey": "auth.login.success"
  }
}
```

### **Registro**
- **URL**: `POST /api/auth/register`
- **Body**: `{ "email": "string", "password": "string", "name": "string" }`
- **Respuesta**: Estructura unificada con `data.user`

---

## **🏢 Organizaciones**

### **Obtener Tipos de Organización** (Público)
- **URL**: `GET /api/organizations/types`
- **Autenticación**: ❌ No requerida
- **Respuesta**:
```json
{
  "success": true,
  "data": {
    "shelter": {
      "id": "shelter",
      "name": "Protectora de Animales",
      "description": "...",
      "features": ["pet_adoption", "pet_rescue"],
      "permissions": {...},
      "validation": {...}
    }
  },
  "message": "organizations.types.success",
  "meta": {
    "language": "en",
    "timestamp": "2025-06-19T13:16:14.771Z",
    "count": 1,
    "messageKey": "organizations.types.success"
  }
}
```

### **Obtener Organizaciones**
- **URL**: `GET /api/organizations`
- **Autenticación**: ✅ Requerida
- **Respuesta**: Lista unificada con metadatos de paginación

### **Crear Organización**
- **URL**: `POST /api/organizations`
- **Body**: `{ "name": "string", "type": "shelter", "description": "string" }`
- **Respuesta**: Estructura unificada (201)

---

## **🐕 Mascotas**

### **Listar Mascotas**
- **URL**: `GET /api/pets`
- **Query params**: `?page=1&limit=10&species=perro&status=available`
- **Respuesta**: Lista unificada con paginación

### **Obtener Mascota**
- **URL**: `GET /api/pets/:id`
- **Respuesta**: Estructura unificada con `data.pet`

### **Crear Mascota**
- **URL**: `POST /api/pets`
- **Body**: `{ "name": "string", "species": "string", "description": "string" }`
- **Respuesta**: Estructura unificada (201)

---

## **👥 Usuarios**

### **Perfil del Usuario**
- **URL**: `GET /api/users/me`
- **Respuesta**: Estructura unificada con `data.user`

### **Listar Usuarios** (Admin)
- **URL**: `GET /api/admin/users`
- **Respuesta**: Lista unificada con metadatos

---

## **💬 Conversaciones y Mensajes**

### **Crear Conversación**
- **URL**: `POST /api/conversations`
- **Respuesta**: Estructura unificada con `data.conversation`

### **Enviar Mensaje**
- **URL**: `POST /api/messages`
- **Respuesta**: Estructura unificada con `data.message`

---

## **📊 Códigos de Estado HTTP**

| Código | Descripción | Estructura |
|--------|-------------|------------|
| **200** | OK | `success: true, data: {...}` |
| **201** | Created | `success: true, data: {...}` |
| **400** | Bad Request | `success: false, errors: [...]` |
| **401** | Unauthorized | `success: false, error: "string"` |
| **403** | Forbidden | `success: false, error: "string"` |
| **404** | Not Found | `success: false, error: "string"` |
| **500** | Server Error | `success: false, error: "string"` |

---

## **🌐 Internacionalización**

- Todas las respuestas incluyen `meta.language` y `meta.messageKey`
- Los mensajes son localizables usando las claves de mensaje
- Idiomas soportados: `"en"`, `"es"`

---

## **🔄 Migración desde v1.x**

### **Cambios Importantes**

#### **Antes (v1.x) - Inconsistente**:
```json
// Auth
{ "data": { "data": { "tokens": {...} } } }

// Users  
{ "data": { "email": "..." } }

// Organization Types
{ "data": { "shelter": {...} } }
```

#### **Ahora (v2.0) - Unificado**:
```json
// TODAS las respuestas
{
  "success": boolean,
  "data": any,
  "message": "string",
  "meta": { "language": "string", "timestamp": "string" }
}
```

### **Guía de Migración del Cliente**

1. **Actualizar parsers de respuesta**: Acceder siempre a `response.data.data`
2. **Manejar el campo `success`**: Verificar `response.data.success` 
3. **Usar metadatos**: Aprovechar `response.data.meta` para timestamp, idioma, etc.
4. **Manejo de errores uniforme**: Todos los errores tienen `success: false`

---

## **🧪 Testing**

Para validar la estructura unificada:

```bash
# Test endpoint público
curl http://localhost:3000/api/organizations/types

# Test con autenticación
curl -H "Authorization: Bearer TOKEN" http://localhost:3000/api/users/me
```

**Todas las respuestas deben seguir la estructura unificada.**

---

**🎉 Esta documentación refleja la implementación completa de respuestas unificadas en Pet API v2.0** 