# 🌍 Internationalization (i18n) API Documentation

## Overview

The Pet API backend includes a comprehensive internationalization system that supports multiple languages with automatic language detection, persistent user preferences, and complete translation coverage across all endpoints.

### Supported Languages
- **English (en)** - Default language
- **Spanish (es)** - Full translation support

### Key Features
- 🔄 **Automatic Language Detection** with 5-level priority system
- 💾 **Persistent Language Preferences** in database
- 🎯 **Complete Controller Coverage** - All 8 controllers migrated
- 🔒 **Multitenancy Support** with organization language defaults
- ⚡ **High Performance** with intelligent caching
- 🛡️ **Fallback System** ensuring no untranslated content

---

## Language Detection System

The system detects user language preferences using the following priority order:

### Priority Order
1. **Query Parameter** - `?lang=es`
2. **Accept-Language Header** - `Accept-Language: es-ES,es;q=0.9,en;q=0.8`
3. **👤 User Preference** - `User.preferredLanguage` from database
4. **🏢 Organization Default** - `Organization.defaultLanguage` from database
5. **🔄 Fallback** - Default to English (`en`)

### Response Headers
All API responses include language information:
```http
Content-Language: es
X-Supported-Languages: en, es
```

---

## Language Preferences API

### Base URL
```
/api/language-preferences
```

### Authentication
Most endpoints require authentication via JWT token in the Authorization header:
```http
Authorization: Bearer <jwt_token>
```

---

## User Language Preferences

### Get User Language Preference
```http
GET /api/language-preferences/user/preference
```

**Authentication:** Required  
**Returns:** Current user's language preference

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "user-123",
    "preferredLanguage": "es",
    "availableLanguages": ["en", "es"]
  }
}
```

### Update User Language Preference
```http
PUT /api/language-preferences/user/preference
```

**Authentication:** Required  
**Body:**
```json
{
  "preferredLanguage": "es"
}
```

**Validation:**
- `preferredLanguage` must be one of: `["en", "es"]`

**Response:**
```json
{
  "success": true,
  "message": "Language preference updated successfully",
  "data": {
    "userId": "user-123",
    "preferredLanguage": "es"
  }
}
```

**Error Response (Invalid Language):**
```json
{
  "success": false,
  "error": "Invalid language. Supported languages: en, es",
  "details": {
    "availableLanguages": ["en", "es"]
  }
}
```

---

## Organization Language Preferences

### Get Organization Language Preference
```http
GET /api/language-preferences/organization/:organizationId/preference
```

**Authentication:** Required  
**Authorization:** Organization admin or super admin  
**Returns:** Organization's default language

**Response:**
```json
{
  "success": true,
  "data": {
    "organizationId": "org-456",
    "name": "Happy Paws Shelter",
    "defaultLanguage": "es",
    "availableLanguages": ["en", "es"]
  }
}
```

### Update Organization Language Preference
```http
PUT /api/language-preferences/organization/:organizationId/preference
```

**Authentication:** Required  
**Authorization:** Organization admin or super admin  
**Body:**
```json
{
  "defaultLanguage": "es"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Organization language preference updated successfully",
  "data": {
    "organizationId": "org-456",
    "name": "Happy Paws Shelter",
    "defaultLanguage": "es"
  }
}
```

---

## Language Information API

### Get Supported Languages
```http
GET /api/language-preferences/supported-languages
```

**Authentication:** Not required  
**Returns:** Complete language information

**Response:**
```json
{
  "success": true,
  "data": {
    "supportedLanguages": ["en", "es"],
    "defaultLanguage": "en",
    "currentLanguage": "es",
    "languageSource": "querystring",
    "languages": {
      "en": {
        "code": "en",
        "name": "English",
        "nativeName": "English"
      },
      "es": {
        "code": "es", 
        "name": "Spanish",
        "nativeName": "Español"
      }
    }
  }
}
```

### Get Language Statistics
```http
GET /api/language-preferences/statistics
```

**Authentication:** Required  
**Authorization:** Admin or super admin only  
**Returns:** Language usage statistics

**Response:**
```json
{
  "success": true,
  "data": {
    "statistics": {
      "totalUsers": 150,
      "languageDistribution": {
        "en": 89,
        "es": 61
      },
      "organizationLanguages": {
        "en": 12,
        "es": 8
      }
    },
    "generatedAt": "2025-01-06T15:30:00.000Z",
    "supportedLanguages": ["en", "es"]
  }
}
```

---

## Controller Integration

All API endpoints automatically return translated messages based on the detected language.

### Example: Pet Creation
```http
POST /api/pets
Content-Type: application/json
Accept-Language: es

{
  "name": "Fluffy",
  "species": "cat"
}
```

**Success Response (Spanish):**
```json
{
  "success": true,
  "message": "Mascota creada exitosamente",
  "data": {
    "id": "pet-789",
    "name": "Fluffy",
    "species": "cat"
  }
}
```

**Error Response (Spanish):**
```json
{
  "success": false,
  "error": "El nombre es requerido",
  "details": {
    "field": "name"
  }
}
```

### Example: Authentication
```http
POST /api/auth/login
Content-Type: application/json
Accept-Language: es

{
  "email": "invalid-email"
}
```

**Error Response (Spanish):**
```json
{
  "success": false,
  "error": "Email y contraseña son requeridos"
}
```

---

## Translation Keys Reference

### Common Messages
| Key | English | Spanish |
|-----|---------|---------|
| `common.success` | Success | Éxito |
| `common.error` | Error | Error |
| `common.loading` | Loading... | Cargando... |
| `common.saved` | Saved successfully | Guardado exitosamente |

### Authentication
| Key | English | Spanish |
|-----|---------|---------|
| `auth.login_successful` | Login successful | Inicio de sesión exitoso |
| `auth.invalid_credentials` | Invalid credentials | Credenciales inválidas |
| `auth.user_registered` | User registered successfully | Usuario registrado exitosamente |

### Validation
| Key | English | Spanish |
|-----|---------|---------|
| `validation.required` | {{field}} is required | {{field}} es requerido |
| `validation.invalid_email` | Email must be valid | El email debe ser válido |
| `validation.invalid_language` | Invalid language. Supported languages: {{availableLanguages}} | Idioma inválido. Idiomas soportados: {{availableLanguages}} |

### Organizations
| Key | English | Spanish |
|-----|---------|---------|
| `organizations.created` | Organization created successfully | Organización creada exitosamente |
| `organizations.not_found` | Organization not found | Organización no encontrada |
| `organizations.forbidden_admin_only` | Only organization administrators can perform this action | Solo los administradores de la organización pueden realizar esta acción |

---

## Error Handling

### Standard Error Response Format
```json
{
  "success": false,
  "error": "Translated error message",
  "details": {
    "additional": "context"
  }
}
```

### HTTP Status Codes
| Status | Description | Example |
|--------|-------------|---------|
| 200 | Success | Language preference updated |
| 400 | Bad Request | Invalid language code |
| 401 | Unauthorized | Missing or invalid JWT token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | User/Organization not found |
| 500 | Server Error | Internal server error |

### Common Error Messages

**Invalid Language (400):**
```json
{
  "success": false,
  "error": "Invalid language. Supported languages: en, es",
  "details": {
    "availableLanguages": ["en", "es"]
  }
}
```

**Unauthorized (401):**
```json
{
  "success": false,
  "error": "Not authenticated"
}
```

**Forbidden (403):**
```json
{
  "success": false,
  "error": "Only organization administrators can perform this action"
}
```

---

## Database Schema

### User Model
```sql
-- User language preference
ALTER TABLE "User" ADD COLUMN "preferredLanguage" TEXT NOT NULL DEFAULT 'en';
```

### Organization Model
```sql
-- Organization default language
ALTER TABLE "Organization" ADD COLUMN "defaultLanguage" TEXT NOT NULL DEFAULT 'en';
```

---

## Performance Considerations

### Caching Strategy
- ✅ **Translation Cache** - All translations loaded in memory
- ✅ **Language Detection Cache** - User preferences cached after first lookup
- ✅ **Namespace Loading** - Only required translation namespaces loaded

### Performance Metrics
- 🚀 **Translation Lookup**: < 1ms per translation
- 🚀 **Language Detection**: < 5ms per request
- 🚀 **API Overhead**: < 5ms additional per request
- 🚀 **Memory Usage**: ~2MB for all translations

### Optimization Tips
1. Use language-specific caching headers
2. Batch translation requests when possible
3. Leverage browser language detection
4. Cache user language preferences client-side

---

## Migration Guide

### Adding New Languages

1. **Create Translation Files**
   ```bash
   mkdir locales/fr
   # Copy all JSON files from locales/en to locales/fr
   # Translate all values
   ```

2. **Update Configuration**
   ```javascript
   // config/i18n.js
   const i18nConfig = {
     supportedLanguages: ['en', 'es', 'fr'], // Add 'fr'
     // ...
   };
   ```

3. **Add Language Names**
   ```json
   // locales/en/common.json
   {
     "language_fr": "French"
   }
   
   // locales/fr/common.json  
   {
     "language_fr": "Français"
   }
   ```

### Adding New Translation Keys

1. **Add to All Language Files**
   ```json
   // locales/en/namespace.json
   {
     "new_key": "English translation"
   }
   
   // locales/es/namespace.json
   {
     "new_key": "Spanish translation"
   }
   ```

2. **Use in Controllers**
   ```javascript
   res.success('namespace.new_key', data);
   ```

3. **Validate Completeness**
   ```bash
   node scripts/validate-translations.js
   ```

---

## Development Tools

### Scripts Available
```bash
# Run full validation
node scripts/run-i18n-e2e-tests.js --full

# Basic validation
node scripts/run-i18n-e2e-tests.js --basic

# Test specific controllers
node scripts/test-language-preferences-i18n.js

# Validate translations
node scripts/validate-translations.js

# Demo system
node scripts/demo-language-preferences.js
```

### Testing Endpoints
```bash
# Test with curl
curl -H "Accept-Language: es" \
     http://localhost:3000/api/language-preferences/supported-languages

# Test language parameter
curl http://localhost:3000/api/language-preferences/supported-languages?lang=es
```

---

## Best Practices

### For Developers
1. ✅ Always use translation keys, never hardcoded strings
2. ✅ Include parameter interpolation for dynamic content
3. ✅ Test with multiple languages during development
4. ✅ Use semantic key names (e.g., `auth.login_successful`)
5. ✅ Provide fallback translations for all keys

### For API Consumers
1. ✅ Send `Accept-Language` header with preferred languages
2. ✅ Handle language changes gracefully
3. ✅ Cache language preferences client-side
4. ✅ Use the `/supported-languages` endpoint for language selection UI
5. ✅ Respect user language preferences from database

### For Translators
1. ✅ Maintain consistency in terminology
2. ✅ Consider context when translating
3. ✅ Test translations with parameter interpolation
4. ✅ Use native language conventions
5. ✅ Validate translations with native speakers

---

## Troubleshooting

### Common Issues

**Language not detected correctly:**
- Check Accept-Language header format
- Verify language code is supported
- Ensure user is authenticated for database preferences

**Translations not loading:**
- Verify translation files exist
- Check file syntax (valid JSON)
- Ensure i18n system is initialized

**Performance issues:**
- Check translation cache is enabled
- Verify database queries are optimized
- Monitor memory usage for large translation sets

### Debug Mode
Enable debug logging in development:
```javascript
// config/i18n.js
development: {
  logMissingKeys: true
}
```

---

## Support

For questions or issues with the i18n system:

1. **Check existing translation keys** in `locales/` directories
2. **Run validation scripts** to identify issues
3. **Review logs** for missing translation warnings
4. **Test with multiple languages** to ensure functionality

---

**Last Updated:** January 2025  
**API Version:** 1.0  
**i18n System Version:** 4.0 (Complete with Persistence) 