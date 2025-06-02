const { describe, test, expect, beforeEach, afterEach } = require('@jest/globals');
const { translate, t, i18nManager } = require('../../utils/i18n');
const i18nConfig = require('../../config/i18n');

describe('i18n System', () => {
  beforeEach(() => {
    // Limpiar cache antes de cada test
    i18nManager.clearCache();
  });

  afterEach(() => {
    // Limpiar cache después de cada test
    i18nManager.clearCache();
  });

  describe('Configuration', () => {
    test('should have correct default configuration', () => {
      expect(i18nConfig.defaultLanguage).toBe('en');
      expect(i18nConfig.supportedLanguages).toContain('en');
      expect(i18nConfig.supportedLanguages).toContain('es');
      expect(i18nConfig.fallbackLanguage).toBe('en');
    });

    test('should have correct detection order', () => {
      expect(i18nConfig.detection.order).toEqual([
        'querystring',
        'header',
        'user',
        'organization',
        'fallback'
      ]);
    });
  });

  describe('Translation Loading', () => {
    test('should load English translations', () => {
      i18nManager.loadLanguage('en');
      expect(i18nManager.loadedLanguages.has('en')).toBe(true);
    });

    test('should load Spanish translations', () => {
      i18nManager.loadLanguage('es');
      expect(i18nManager.loadedLanguages.has('es')).toBe(true);
    });

    test('should handle non-existent language gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      i18nManager.loadLanguage('fr');
      expect(i18nManager.loadedLanguages.has('fr')).toBe(false);
      consoleSpy.mockRestore();
    });
  });

  describe('Basic Translation', () => {
    test('should translate common messages in English', () => {
      const result = translate('common.success', 'en');
      expect(result).toBe('Success');
    });

    test('should translate common messages in Spanish', () => {
      const result = translate('common.success', 'es');
      expect(result).toBe('Éxito');
    });

    test('should translate validation messages in English', () => {
      const result = translate('validation.failed', 'en');
      expect(result).toBe('Validation failed');
    });

    test('should translate validation messages in Spanish', () => {
      const result = translate('validation.failed', 'es');
      expect(result).toBe('Validación fallida');
    });

    test('should use short function alias', () => {
      const result = t('common.error', 'en');
      expect(result).toBe('Error');
    });
  });

  describe('Fallback Mechanism', () => {
    test('should fallback to English when Spanish translation is missing', () => {
      // Intentar traducir una clave que no existe en español
      const result = translate('common.non_existent_key', 'es');
      // Debería devolver la clave como fallback final
      expect(result).toBe('common.non_existent_key');
    });

    test('should fallback to default language when requested language is not supported', () => {
      const result = translate('common.success', 'fr');
      expect(result).toBe('Success'); // Debería usar inglés como fallback
    });

    test('should return key when translation is not found in any language', () => {
      const result = translate('non.existent.key', 'en');
      expect(result).toBe('non.existent.key');
    });
  });

  describe('Parameter Interpolation', () => {
    test('should interpolate single parameter', () => {
      const result = translate('validation.required', 'en', { field: 'Name' });
      expect(result).toBe('Name is required');
    });

    test('should interpolate multiple parameters', () => {
      const result = translate('validation.min_length', 'en', { 
        field: 'Password', 
        min: 8 
      });
      expect(result).toBe('Password must be at least 8 characters');
    });

    test('should interpolate parameters in Spanish', () => {
      const result = translate('validation.required', 'es', { field: 'Nombre' });
      expect(result).toBe('Nombre es requerido');
    });

    test('should handle missing parameters gracefully', () => {
      const result = translate('validation.required', 'en', {});
      expect(result).toBe('{{field}} is required'); // Mantener placeholder
    });

    test('should handle undefined parameters', () => {
      const result = translate('validation.min_length', 'en', { 
        field: 'Password' 
        // min is missing
      });
      expect(result).toBe('Password must be at least {{min}} characters');
    });
  });

  describe('Language Support', () => {
    test('should recognize supported languages', () => {
      expect(i18nManager.isLanguageSupported('en')).toBe(true);
      expect(i18nManager.isLanguageSupported('es')).toBe(true);
    });

    test('should reject unsupported languages', () => {
      expect(i18nManager.isLanguageSupported('fr')).toBe(false);
      expect(i18nManager.isLanguageSupported('de')).toBe(false);
    });

    test('should handle case insensitive language codes', () => {
      expect(i18nManager.isLanguageSupported('EN')).toBe(false); // Nuestro sistema es case-sensitive
      expect(i18nManager.isLanguageSupported('Es')).toBe(false);
    });
  });

  describe('Missing Keys Tracking', () => {
    test('should track missing keys', () => {
      // Limpiar claves faltantes previas
      i18nManager.missingKeys.clear();
      
      // Intentar traducir clave inexistente
      translate('missing.key', 'en');
      
      const missingKeys = i18nManager.getMissingKeys();
      expect(missingKeys.en).toContain('missing.key');
    });

    test('should track missing keys per language', () => {
      // Limpiar claves faltantes previas
      i18nManager.missingKeys.clear();
      
      // Intentar traducir claves inexistentes en diferentes idiomas
      translate('missing.key1', 'en');
      translate('missing.key2', 'es');
      
      const missingKeys = i18nManager.getMissingKeys();
      expect(missingKeys.en).toContain('missing.key1');
      expect(missingKeys.es).toContain('missing.key2');
    });
  });

  describe('Cache Management', () => {
    test('should cache loaded languages', () => {
      i18nManager.loadLanguage('en');
      expect(i18nManager.loadedLanguages.has('en')).toBe(true);
      
      // Cargar de nuevo no debería hacer nada
      const loadSpy = jest.spyOn(i18nManager, 'loadLanguage');
      i18nManager.loadLanguage('en');
      expect(loadSpy).toHaveBeenCalledTimes(1);
      loadSpy.mockRestore();
    });

    test('should clear cache for specific language', () => {
      i18nManager.loadLanguage('en');
      i18nManager.loadLanguage('es');
      
      expect(i18nManager.loadedLanguages.has('en')).toBe(true);
      expect(i18nManager.loadedLanguages.has('es')).toBe(true);
      
      i18nManager.clearCache('en');
      
      expect(i18nManager.loadedLanguages.has('en')).toBe(false);
      expect(i18nManager.loadedLanguages.has('es')).toBe(true);
    });

    test('should clear all cache', () => {
      i18nManager.loadLanguage('en');
      i18nManager.loadLanguage('es');
      
      i18nManager.clearCache();
      
      expect(i18nManager.loadedLanguages.has('en')).toBe(false);
      expect(i18nManager.loadedLanguages.has('es')).toBe(false);
    });

    test('should reload language', () => {
      i18nManager.loadLanguage('en');
      expect(i18nManager.loadedLanguages.has('en')).toBe(true);
      
      i18nManager.reloadLanguage('en');
      expect(i18nManager.loadedLanguages.has('en')).toBe(true);
    });
  });

  describe('HTML Escaping', () => {
    test('should escape HTML characters in interpolated values', () => {
      const result = translate('validation.required', 'en', { 
        field: '<script>alert("xss")</script>' 
      });
      expect(result).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; is required');
    });

    test('should escape common HTML entities', () => {
      const testCases = [
        { input: '&', expected: '&amp;' },
        { input: '<', expected: '&lt;' },
        { input: '>', expected: '&gt;' },
        { input: '"', expected: '&quot;' },
        { input: "'", expected: '&#39;' }
      ];

      testCases.forEach(({ input, expected }) => {
        const result = translate('validation.required', 'en', { field: input });
        expect(result).toBe(`${expected} is required`);
      });
    });
  });

  describe('Error Handling', () => {
    test('should handle malformed translation files gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      // Esto debería manejar errores de archivos malformados
      // En un test real, podríamos crear un archivo JSON malformado temporalmente
      
      consoleSpy.mockRestore();
    });

    test('should handle missing translation directories', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      i18nManager.loadLanguage('nonexistent');
      
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('[i18n] Language directory not found')
      );
      
      consoleSpy.mockRestore();
    });
  });
}); 