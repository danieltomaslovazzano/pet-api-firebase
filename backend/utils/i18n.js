const fs = require('fs');
const path = require('path');
const i18nConfig = require('../config/i18n');

/**
 * Sistema de internacionalización (i18n)
 * Maneja la carga, cache y traducción de textos
 */
class I18nManager {
  constructor() {
    this.translations = new Map(); // Cache de traducciones
    this.loadedLanguages = new Set(); // Idiomas ya cargados
    this.missingKeys = new Map(); // Registro de claves faltantes
    
    // Cargar idioma por defecto al inicializar
    this.loadLanguage(i18nConfig.defaultLanguage);
  }

  /**
   * Carga las traducciones de un idioma específico
   * @param {string} language - Código del idioma (ej: 'en', 'es')
   */
  loadLanguage(language) {
    if (this.loadedLanguages.has(language)) {
      return; // Ya está cargado
    }

    try {
      const languagePath = path.join(i18nConfig.localesPath, language);
      
      if (!fs.existsSync(languagePath)) {
        console.warn(`[i18n] Language directory not found: ${languagePath}`);
        return;
      }

      const translations = {};
      const files = fs.readdirSync(languagePath);

      // Cargar todos los archivos JSON del idioma
      files.forEach(file => {
        if (path.extname(file) === '.json') {
          const namespace = path.basename(file, '.json');
          const filePath = path.join(languagePath, file);
          
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            translations[namespace] = JSON.parse(content);
          } catch (error) {
            console.error(`[i18n] Error loading translation file: ${filePath}`, error);
          }
        }
      });

      this.translations.set(language, translations);
      this.loadedLanguages.add(language);
      
      console.log(`[i18n] Loaded language: ${language} with ${Object.keys(translations).length} namespaces`);
    } catch (error) {
      console.error(`[i18n] Error loading language: ${language}`, error);
    }
  }

  /**
   * Obtiene una traducción por clave
   * @param {string} key - Clave de traducción (ej: 'auth.login_success')
   * @param {string} language - Idioma objetivo
   * @param {Object} params - Parámetros para interpolación
   * @returns {string} Texto traducido
   */
  getTranslation(key, language, params = {}) {
    // Validate that key is a string
    if (typeof key !== 'string') {
      console.error('[i18n] translate() called with non-string key:', typeof key, 'Value:', key);
      console.error('[i18n] Stack trace:', new Error().stack);
      return key?.toString() || 'INVALID_KEY';
    }

    // Asegurar que el idioma esté cargado
    if (!this.loadedLanguages.has(language)) {
      this.loadLanguage(language);
    }

    const [namespace, ...keyParts] = key.split('.');
    const translationKey = keyParts.join('.');

    // Buscar en el idioma solicitado
    let translation = this.findTranslation(language, namespace, translationKey);

    // Fallback al idioma por defecto si no se encuentra
    if (!translation && language !== i18nConfig.fallbackLanguage) {
      if (!this.loadedLanguages.has(i18nConfig.fallbackLanguage)) {
        this.loadLanguage(i18nConfig.fallbackLanguage);
      }
      translation = this.findTranslation(i18nConfig.fallbackLanguage, namespace, translationKey);
    }

    // Si aún no se encuentra, registrar como clave faltante
    if (!translation) {
      this.registerMissingKey(key, language);
      return key; // Devolver la clave como fallback final
    }

    // Aplicar interpolación de parámetros
    return this.interpolate(translation, params);
  }

  /**
   * Busca una traducción en un idioma específico
   * @param {string} language - Idioma
   * @param {string} namespace - Namespace (archivo)
   * @param {string} key - Clave dentro del namespace
   * @returns {string|null} Traducción encontrada o null
   */
  findTranslation(language, namespace, key) {
    const languageTranslations = this.translations.get(language);
    if (!languageTranslations || !languageTranslations[namespace]) {
      return null;
    }

    // Soporte para claves anidadas (ej: 'user.profile.name')
    const keys = key.split('.');
    let translation = languageTranslations[namespace];

    for (const k of keys) {
      if (translation && typeof translation === 'object' && translation[k] !== undefined) {
        translation = translation[k];
      } else {
        return null;
      }
    }

    return typeof translation === 'string' ? translation : null;
  }

  /**
   * Aplica interpolación de parámetros en el texto
   * @param {string} text - Texto con placeholders
   * @param {Object} params - Parámetros para reemplazar
   * @returns {string} Texto con parámetros interpolados
   */
  interpolate(text, params) {
    if (!params || Object.keys(params).length === 0) {
      return text;
    }

    return text.replace(
      new RegExp(`${i18nConfig.interpolation.prefix}([^}]+)${i18nConfig.interpolation.suffix}`, 'g'),
      (match, key) => {
        const value = params[key.trim()];
        if (value !== undefined) {
          // Escapar HTML si está habilitado
          if (i18nConfig.interpolation.escapeValue && typeof value === 'string') {
            return this.escapeHtml(value);
          }
          return value;
        }
        return match; // Mantener el placeholder si no se encuentra el parámetro
      }
    );
  }

  /**
   * Escapa caracteres HTML para seguridad
   * @param {string} text - Texto a escapar
   * @returns {string} Texto escapado
   */
  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  /**
   * Registra una clave faltante para debugging
   * @param {string} key - Clave faltante
   * @param {string} language - Idioma donde falta
   */
  registerMissingKey(key, language) {
    if (!this.missingKeys.has(language)) {
      this.missingKeys.set(language, new Set());
    }
    
    this.missingKeys.get(language).add(key);

    if (i18nConfig.development.logMissingKeys) {
      console.warn(`[i18n] Missing translation key: "${key}" for language: "${language}"`);
    }
  }

  /**
   * Obtiene todas las claves faltantes registradas
   * @returns {Object} Claves faltantes por idioma
   */
  getMissingKeys() {
    const result = {};
    this.missingKeys.forEach((keys, language) => {
      result[language] = Array.from(keys);
    });
    return result;
  }

  /**
   * Limpia el cache de traducciones
   * @param {string} language - Idioma específico o undefined para limpiar todo
   */
  clearCache(language) {
    if (language) {
      this.translations.delete(language);
      this.loadedLanguages.delete(language);
    } else {
      this.translations.clear();
      this.loadedLanguages.clear();
    }
  }

  /**
   * Recarga las traducciones de un idioma
   * @param {string} language - Idioma a recargar
   */
  reloadLanguage(language) {
    this.clearCache(language);
    this.loadLanguage(language);
  }

  /**
   * Verifica si un idioma está soportado
   * @param {string} language - Código del idioma
   * @returns {boolean} True si está soportado
   */
  isLanguageSupported(language) {
    return i18nConfig.supportedLanguages.includes(language);
  }

  /**
   * Obtiene la lista de idiomas soportados
   * @returns {Array<string>} Array de códigos de idioma soportados
   */
  getSupportedLanguages() {
    return [...i18nConfig.supportedLanguages];
  }
}

// Instancia singleton del manager
const i18nManager = new I18nManager();

/**
 * Función principal de traducción
 * @param {string} key - Clave de traducción
 * @param {string} language - Idioma objetivo
 * @param {Object} params - Parámetros para interpolación
 * @returns {string} Texto traducido
 */
function translate(key, language = i18nConfig.defaultLanguage, params = {}) {
  // Validate that key is a string
  if (typeof key !== 'string') {
    console.error('[i18n] translate() called with non-string key:', typeof key, 'Value:', key);
    console.error('[i18n] Stack trace:', new Error().stack);
    return key?.toString() || 'INVALID_KEY';
  }
  return i18nManager.getTranslation(key, language, params);
}

/**
 * Función de traducción abreviada
 */
const t = translate;

module.exports = {
  translate,
  t,
  i18nManager,
  I18nManager
}; 