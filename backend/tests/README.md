# Estrategia de Testing

Esta carpeta contiene la nueva suite de tests para la API, alineada con la arquitectura actual (Prisma/PostgreSQL y multitenancy).

## Estructura

- `integration/`: Tests de integración end-to-end. Validan endpoints reales, lógica multitenant y acceso a datos en Postgres/Prisma.
- `unit/`: Tests unitarios de utilidades, middlewares y servicios independientes de la base de datos.
- `setup/`: Helpers y configuración para el entorno de test (por ejemplo, setup/teardown de la base de datos, mocks de Firebase Auth/Storage).

## Principios
- Todos los tests de integración usan la base de datos de test (Postgres) y Prisma.
- Se valida el aislamiento multitenant: los datos de una organización no deben ser accesibles por usuarios de otra.
- Los tests unitarios no dependen de la base de datos.

## Próximos pasos
- Crear tests de integración para los endpoints clave (pets, users, organizations, etc.)
- Agregar tests de aislamiento multitenant y acceso de superadmin.

