const path = require('path');

/**
 * Configuración del sistema de internacionalización (i18n)
 */
const i18nConfig = {
  // Idioma por defecto del sistema
  defaultLanguage: 'en',
  
  // Idiomas soportados por la aplicación
  supportedLanguages: ['en', 'es'],
  
  // Idioma de respaldo cuando no se encuentra una traducción
  fallbackLanguage: 'en',
  
  // Ruta donde se encuentran los archivos de traducción
  localesPath: path.join(__dirname, '../locales'),
  
  // Configuración de detección de idioma
  detection: {
    // Orden de prioridad para detectar el idioma preferido
    order: [
      'querystring',    // ?lang=es
      'header',         // Accept-Language header
      'user',          // Usuario autenticado: preferredLanguage
      'organization',   // Organización: defaultLanguage
      'fallback'       // Fallback al idioma por defecto
    ],
    
    // Nombre del parámetro en query string
    queryParameter: 'lang',
    
    // Nombre del header HTTP
    headerName: 'accept-language',
    
    // Cache del idioma detectado en la request
    cacheUserLanguage: true
  },
  
  // Configuración de interpolación de variables
  interpolation: {
    // Prefijo y sufijo para variables: {{variable}}
    prefix: '{{',
    suffix: '}}',
    
    // Escapar HTML por seguridad
    escapeValue: true
  },
  
  // Configuración de cache
  cache: {
    // Habilitar cache de traducciones en memoria
    enabled: true,
    
    // Tiempo de vida del cache en milisegundos (1 hora)
    ttl: 60 * 60 * 1000,
    
    // Máximo número de entradas en cache
    maxSize: 1000
  },
  
  // Configuración de desarrollo
  development: {
    // Mostrar claves faltantes en logs
    logMissingKeys: true,
    
    // Mostrar warnings por traducciones faltantes
    showMissingKeyWarnings: true,
    
    // Recargar traducciones automáticamente en desarrollo
    autoReload: process.env.NODE_ENV === 'development'
  }
};

module.exports = i18nConfig; 