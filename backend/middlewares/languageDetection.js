const i18nConfig = require('../config/i18n');
const { i18nManager } = require('../utils/i18n');
const { userModel, organizationModel } = require('../models/adapter');

/**
 * Middleware para detectar el idioma preferido del usuario
 * Implementa el orden de prioridad definido en la configuración
 */
const languageDetection = async (req, res, next) => {
  let detectedLanguage = null;
  const detectionOrder = i18nConfig.detection.order;

  // Asegurar que req tiene las propiedades necesarias
  req.query = req.query || {};
  req.headers = req.headers || {};

  // Función helper para validar y normalizar idioma
  const validateLanguage = (lang) => {
    if (!lang) return null;
    
    // Normalizar código de idioma (ej: 'en-US' -> 'en', 'ES' -> 'es')
    const normalizedLang = lang.toLowerCase().split('-')[0];
    
    // Verificar si está soportado
    return i18nManager.isLanguageSupported(normalizedLang) ? normalizedLang : null;
  };

  // Función para cargar preferencias del usuario desde la base de datos
  const loadUserLanguagePreference = async (userId) => {
    if (!userId) return null;
    
    try {
      const user = await userModel.getUserById(userId);
      return user?.preferredLanguage;
    } catch (error) {
      // En caso de error, continuar con la detección normal
      console.warn('[i18n] Error loading user language preference:', error.message);
      return null;
    }
  };

  // Función para cargar preferencias de la organización desde la base de datos
  const loadOrganizationLanguagePreference = async (organizationId) => {
    if (!organizationId) return null;
    
    try {
      const organization = await organizationModel.getOrganizationById(organizationId);
      return organization?.defaultLanguage;
    } catch (error) {
      // En caso de error, continuar con la detección normal
      console.warn('[i18n] Error loading organization language preference:', error.message);
      return null;
    }
  };

  // Iterar por el orden de detección configurado
  for (const method of detectionOrder) {
    switch (method) {
      case 'querystring':
        // 1. Parámetro en query string (?lang=es)
        const queryLang = req.query[i18nConfig.detection.queryParameter];
        detectedLanguage = validateLanguage(queryLang);
        if (detectedLanguage) {
          req.languageSource = 'querystring';
        }
        break;

      case 'header':
        // 2. Header Accept-Language
        if (!detectedLanguage) {
          const acceptLanguage = req.headers[i18nConfig.detection.headerName];
          if (acceptLanguage) {
            // Parsear Accept-Language header (ej: 'en-US,en;q=0.9,es;q=0.8')
            const languages = acceptLanguage
              .split(',')
              .map(lang => {
                const [code, quality] = lang.trim().split(';q=');
                return {
                  code: code.trim(),
                  quality: quality ? parseFloat(quality) : 1.0
                };
              })
              .sort((a, b) => b.quality - a.quality); // Ordenar por calidad

            // Buscar el primer idioma soportado
            for (const lang of languages) {
              const validLang = validateLanguage(lang.code);
              if (validLang) {
                detectedLanguage = validLang;
                req.languageSource = 'header';
                break;
              }
            }
          }
        }
        break;

      case 'user':
        // 3. Usuario autenticado: preferredLanguage
        if (!detectedLanguage && req.user) {
          let userLanguage = req.user.preferredLanguage;
          
          // Si no está en el objeto user, intentar cargar desde la base de datos
          if (!userLanguage && req.user.uid) {
            userLanguage = await loadUserLanguagePreference(req.user.uid);
          }
          
          detectedLanguage = validateLanguage(userLanguage);
          if (detectedLanguage) {
            req.languageSource = 'user';
          }
        }
        break;

      case 'organization':
        // 4. Organización: defaultLanguage
        if (!detectedLanguage && req.organizationId) {
          let organizationLanguage = req.organization?.defaultLanguage;
          
          // Si no está en el objeto organization, cargar desde la base de datos
          if (!organizationLanguage) {
            organizationLanguage = await loadOrganizationLanguagePreference(req.organizationId);
          }
          
          detectedLanguage = validateLanguage(organizationLanguage);
          if (detectedLanguage) {
            req.languageSource = 'organization';
          }
        }
        break;

      case 'fallback':
        // 5. Fallback al idioma por defecto
        if (!detectedLanguage) {
          detectedLanguage = i18nConfig.defaultLanguage;
          req.languageSource = 'fallback';
        }
        break;
    }

    // Si ya detectamos un idioma, salir del loop
    if (detectedLanguage) break;
  }

  // Asegurar que siempre tengamos un idioma válido
  if (!detectedLanguage) {
    detectedLanguage = i18nConfig.defaultLanguage;
    req.languageSource = 'default';
  }

  // Agregar el idioma detectado al objeto request
  req.language = detectedLanguage;

  // Agregar función de traducción al request para facilitar su uso
  req.t = (key, params = {}) => {
    const { translate } = require('../utils/i18n');
    return translate(key, req.language, params);
  };

  // Agregar función de traducción con idioma específico
  req.translate = (key, language, params = {}) => {
    const { translate } = require('../utils/i18n');
    return translate(key, language || req.language, params);
  };

  // Log de debugging en desarrollo
  if (i18nConfig.development.logMissingKeys && process.env.NODE_ENV === 'development') {
    console.log(`[i18n] Language detected: ${detectedLanguage} (source: ${req.languageSource})`);
  }

  next();
};

/**
 * Middleware específico para detectar idioma desde el contexto de organización
 * Útil cuando ya tenemos el contexto de organización cargado
 */
const detectLanguageWithOrganization = (organization) => {
  return (req, res, next) => {
    // Agregar organización al request temporalmente para la detección
    req.organization = organization;
    
    // Ejecutar detección normal
    languageDetection(req, res, next);
  };
};

/**
 * Función helper para obtener idioma desde diferentes fuentes
 * Útil para usar fuera del contexto de middleware
 */
const getLanguageFromSources = (sources = {}) => {
  const {
    queryLang,
    headerLang,
    userLang,
    orgLang
  } = sources;

  // Función de validación local
  const validateLanguage = (lang) => {
    if (!lang) return null;
    const normalizedLang = lang.toLowerCase().split('-')[0];
    return i18nManager.isLanguageSupported(normalizedLang) ? normalizedLang : null;
  };

  // Aplicar el mismo orden de prioridad
  return validateLanguage(queryLang) ||
         validateLanguage(headerLang) ||
         validateLanguage(userLang) ||
         validateLanguage(orgLang) ||
         i18nConfig.defaultLanguage;
};

/**
 * Middleware para agregar headers de idioma a las respuestas
 */
const addLanguageHeaders = (req, res, next) => {
  // Agregar header con el idioma utilizado
  res.setHeader('Content-Language', req.language);
  
  // Agregar header con idiomas soportados
  res.setHeader('X-Supported-Languages', i18nConfig.supportedLanguages.join(', '));
  
  next();
};

module.exports = {
  languageDetection,
  detectLanguageWithOrganization,
  getLanguageFromSources,
  addLanguageHeaders
}; 