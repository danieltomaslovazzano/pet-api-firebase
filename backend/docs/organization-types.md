# Organization Types

Esta funcionalidad permite categorizar organizaciones por tipo, comenzando con "shelter" (protectoras) y diseñada para ser fácilmente extensible a futuro.

## Arquitectura

### Configuración Centralizada
Todos los tipos de organización están definidos en `config/organizationTypes.js`, lo que permite:
- Fácil adición de nuevos tipos
- Configuración de permisos específicos por tipo
- Validaciones personalizadas por tipo
- Definición de características (features) por tipo

### Estructura de un Tipo de Organización

```javascript
{
  id: 'shelter',
  name: 'Protectora de Animales',
  description: 'Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas',
  features: [
    'pet_adoption',
    'pet_rescue',
    'volunteer_management',
    'donation_tracking',
    'medical_records',
    'foster_care_coordination'
  ],
  permissions: {
    pets: {
      create: true,
      read: true,
      update: true,
      delete: true,
      manage_adoption_status: true
    },
    adoptions: {
      process_applications: true,
      conduct_interviews: true,
      approve_adoptions: true
    }
  },
  validation: {
    requiredFields: ['name', 'email', 'address', 'phone'],
    optionalFields: ['description', 'logo']
  }
}
```

## API Endpoints

### Obtener Tipos de Organización Disponibles
```http
GET /api/organizations/types
```

**Respuesta:**
```json
{
  "shelter": {
    "id": "shelter",
    "name": "Protectora de Animales",
    "description": "Organizaciones dedicadas al rescate, cuidado temporal y adopción de mascotas",
    "features": ["pet_adoption", "pet_rescue", "volunteer_management"],
    "permissions": { ... },
    "validation": { ... }
  }
}
```

### Obtener Información de un Tipo Específico
```http
GET /api/organizations/types/shelter
```

### Crear Organización con Tipo
```http
POST /api/organizations
Content-Type: application/json

{
  "name": "Protectora San Francisco",
  "type": "shelter",
  "email": "info@protectorasf.org",
  "address": "Calle Principal 123",
  "phone": "+1234567890",
  "description": "Protectora dedicada al rescate de perros y gatos"
}
```

### Filtrar Organizaciones por Tipo
```http
GET /api/organizations?type=shelter
```

## Base de Datos

### Migración
La migración `20250601224354_add_organization_type` agrega:
- Campo `type` con valor por defecto "shelter"
- Índice en el campo `type` para optimizar consultas

### Modelo Prisma
```prisma
model Organization {
  id           String        @id @default(uuid())
  name         String
  type         String        @default("shelter")  // Nuevo campo
  description  String?
  // ... otros campos
  
  @@index([type])  // Índice para consultas eficientes
}
```

## Validaciones

### Validación de Tipo
- Solo se aceptan tipos definidos en la configuración
- Validación automática en creación y actualización
- Mensajes de error descriptivos con tipos válidos

### Validación por Tipo
Cada tipo puede tener validaciones específicas:
- Campos requeridos diferentes según el tipo
- Reglas de negocio específicas
- Validaciones personalizadas

## Cómo Agregar un Nuevo Tipo

### 1. Definir el Tipo en la Configuración

Editar `config/organizationTypes.js`:

```javascript
const ORGANIZATION_TYPES = {
  shelter: { /* configuración existente */ },
  
  // Nuevo tipo
  veterinary_clinic: {
    id: 'veterinary_clinic',
    name: 'Clínica Veterinaria',
    description: 'Centros médicos especializados en atención veterinaria',
    features: [
      'medical_consultations',
      'surgery',
      'emergency_care',
      'vaccination_programs',
      'medical_records',
      'appointment_scheduling'
    ],
    permissions: {
      pets: {
        create: false,  // No crean mascotas, solo las atienden
        read: true,
        update: true,   // Pueden actualizar info médica
        delete: false,
        manage_medical_records: true
      },
      medical: {
        create_records: true,
        prescribe_medication: true,
        schedule_surgeries: true
      }
    },
    validation: {
      requiredFields: ['name', 'email', 'address', 'phone', 'license_number'],
      optionalFields: ['description', 'logo', 'specialties']
    }
  }
};
```

### 2. Actualizar Tests (Opcional)

Agregar tests específicos para el nuevo tipo en `tests/unit/organizationTypes.test.js`.

### 3. Documentar el Nuevo Tipo

Actualizar esta documentación con:
- Descripción del nuevo tipo
- Características específicas
- Casos de uso
- Ejemplos de API

## Casos de Uso

### Shelter (Protectora)
- Gestión de adopciones
- Coordinación de voluntarios
- Seguimiento de donaciones
- Historiales médicos básicos
- Red de hogares temporales

### Futuros Tipos Sugeridos

#### Veterinary Clinic (Clínica Veterinaria)
- Consultas médicas
- Cirugías
- Atención de emergencias
- Programas de vacunación
- Historiales médicos detallados

#### Rescue Organization (Organización de Rescate)
- Rescates especializados
- Rehabilitación
- Coordinación con protectoras
- Transporte de animales

#### Training Center (Centro de Entrenamiento)
- Programas de entrenamiento
- Evaluaciones de comportamiento
- Certificaciones
- Seguimiento de progreso

## Beneficios de la Arquitectura

### Escalabilidad
- Agregar nuevos tipos es simple y no requiere cambios en el código base
- Configuración centralizada facilita el mantenimiento
- Validaciones automáticas para todos los tipos

### Flexibilidad
- Cada tipo puede tener permisos específicos
- Validaciones personalizadas por tipo
- Características modulares

### Mantenibilidad
- Código limpio y organizado
- Separación de responsabilidades
- Fácil testing y debugging

## Consideraciones Técnicas

### Performance
- Índice en el campo `type` para consultas eficientes
- Validaciones en memoria (no requieren consultas a BD)
- Configuración cargada una sola vez

### Seguridad
- Validación estricta de tipos
- Permisos específicos por tipo de organización
- Sanitización de datos de entrada

### Compatibilidad
- Valor por defecto "shelter" para organizaciones existentes
- Migración automática sin pérdida de datos
- API backward-compatible 