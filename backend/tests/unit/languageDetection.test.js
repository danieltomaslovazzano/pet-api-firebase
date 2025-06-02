const { describe, test, expect, beforeEach } = require('@jest/globals');
const { 
  languageDetection, 
  detectLanguageWithOrganization,
  getLanguageFromSources,
  addLanguageHeaders 
} = require('../../middlewares/languageDetection');

describe('Language Detection Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      query: {},
      headers: {},
      user: null,
      organization: null
    };
    res = {
      setHeader: jest.fn()
    };
    next = jest.fn();
  });

  describe('Query String Detection', () => {
    test('should detect language from query parameter', () => {
      req.query.lang = 'es';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es');
      expect(req.languageSource).toBe('querystring');
      expect(next).toHaveBeenCalled();
    });

    test('should normalize language codes from query', () => {
      req.query.lang = 'ES';
      
      languageDetection(req, res, next);
      
      // El sistema ahora normaliza ES -> es correctamente
      expect(req.language).toBe('es'); // Normalizado correctamente
      expect(req.languageSource).toBe('querystring');
    });

    test('should ignore unsupported languages in query', () => {
      req.query.lang = 'fr';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });

    test('should handle malformed query parameter', () => {
      req.query.lang = '';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });
  });

  describe('Header Detection', () => {
    test('should detect language from Accept-Language header', () => {
      req.headers['accept-language'] = 'es-ES,es;q=0.9,en;q=0.8';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es');
      expect(req.languageSource).toBe('header');
    });

    test('should parse quality values correctly', () => {
      req.headers['accept-language'] = 'en;q=0.5,es;q=0.9';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es'); // Mayor calidad
      expect(req.languageSource).toBe('header');
    });

    test('should handle header without quality values', () => {
      req.headers['accept-language'] = 'es,en';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es'); // Primer idioma soportado
      expect(req.languageSource).toBe('header');
    });

    test('should normalize language codes from header', () => {
      req.headers['accept-language'] = 'es-MX,es-ES;q=0.9,en-US;q=0.8';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es'); // Normalizado de es-MX
      expect(req.languageSource).toBe('header');
    });

    test('should ignore unsupported languages in header', () => {
      req.headers['accept-language'] = 'fr-FR,de-DE,en-US;q=0.5';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Único idioma soportado
      expect(req.languageSource).toBe('header');
    });

    test('should handle malformed Accept-Language header', () => {
      req.headers['accept-language'] = 'invalid-header-format';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });
  });

  describe('User Preference Detection', () => {
    test('should detect language from authenticated user', () => {
      req.user = { preferredLanguage: 'es' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es');
      expect(req.languageSource).toBe('user');
    });

    test('should ignore invalid user language preference', () => {
      req.user = { preferredLanguage: 'fr' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });

    test('should handle user without language preference', () => {
      req.user = { id: '123', name: 'Test User' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });

    test('should handle null user', () => {
      req.user = null;
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });
  });

  describe('Organization Detection', () => {
    test('should detect language from organization', () => {
      req.organization = { defaultLanguage: 'es' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es');
      expect(req.languageSource).toBe('organization');
    });

    test('should ignore invalid organization language', () => {
      req.organization = { defaultLanguage: 'fr' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });

    test('should handle organization without language setting', () => {
      req.organization = { id: '123', name: 'Test Org' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });
  });

  describe('Priority Order', () => {
    test('should prioritize query parameter over header', () => {
      req.query.lang = 'en';
      req.headers['accept-language'] = 'es';
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en');
      expect(req.languageSource).toBe('querystring');
    });

    test('should prioritize header over user preference', () => {
      req.headers['accept-language'] = 'es';
      req.user = { preferredLanguage: 'en' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es');
      expect(req.languageSource).toBe('header');
    });

    test('should prioritize user preference over organization', () => {
      req.user = { preferredLanguage: 'es' };
      req.organization = { defaultLanguage: 'en' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es');
      expect(req.languageSource).toBe('user');
    });

    test('should use organization when higher priorities are invalid', () => {
      req.query.lang = 'fr'; // No soportado
      req.headers['accept-language'] = 'de'; // No soportado
      req.user = { preferredLanguage: 'it' }; // No soportado
      req.organization = { defaultLanguage: 'es' }; // Soportado
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('es');
      expect(req.languageSource).toBe('organization');
    });

    test('should fallback when all sources are invalid', () => {
      req.query.lang = 'fr';
      req.headers['accept-language'] = 'de';
      req.user = { preferredLanguage: 'it' };
      req.organization = { defaultLanguage: 'pt' };
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en'); // Fallback
      expect(req.languageSource).toBe('fallback');
    });
  });

  describe('Request Enhancement', () => {
    test('should add translation function to request', () => {
      languageDetection(req, res, next);
      
      expect(typeof req.t).toBe('function');
      expect(typeof req.translate).toBe('function');
    });

    test('should use detected language in translation function', () => {
      req.query.lang = 'es';
      languageDetection(req, res, next);
      
      // Mock de la función translate
      const mockTranslate = jest.fn().mockReturnValue('Éxito');
      jest.doMock('../../utils/i18n', () => ({
        translate: mockTranslate
      }));
      
      const result = req.t('common.success');
      
      // Verificar que se llamó con el idioma correcto
      expect(mockTranslate).toHaveBeenCalledWith('common.success', 'es', {});
    });

    test('should allow override language in translate function', () => {
      req.query.lang = 'es';
      languageDetection(req, res, next);
      
      const mockTranslate = jest.fn().mockReturnValue('Success');
      jest.doMock('../../utils/i18n', () => ({
        translate: mockTranslate
      }));
      
      const result = req.translate('common.success', 'en');
      
      expect(mockTranslate).toHaveBeenCalledWith('common.success', 'en', {});
    });
  });

  describe('Helper Functions', () => {
    test('getLanguageFromSources should work with all sources', () => {
      const result = getLanguageFromSources({
        queryLang: 'es',
        headerLang: 'en',
        userLang: 'fr',
        orgLang: 'de'
      });
      
      expect(result).toBe('es'); // Primer idioma válido
    });

    test('getLanguageFromSources should fallback correctly', () => {
      const result = getLanguageFromSources({
        queryLang: 'fr',
        headerLang: 'de',
        userLang: 'it',
        orgLang: 'pt'
      });
      
      expect(result).toBe('en'); // Fallback
    });

    test('detectLanguageWithOrganization should set organization context', () => {
      const organization = { defaultLanguage: 'es' };
      const middleware = detectLanguageWithOrganization(organization);
      
      middleware(req, res, next);
      
      expect(req.organization).toBe(organization);
      expect(req.language).toBe('es');
      expect(req.languageSource).toBe('organization');
    });
  });

  describe('Language Headers', () => {
    test('addLanguageHeaders should set correct headers', () => {
      req.language = 'es';
      
      addLanguageHeaders(req, res, next);
      
      expect(res.setHeader).toHaveBeenCalledWith('Content-Language', 'es');
      expect(res.setHeader).toHaveBeenCalledWith('X-Supported-Languages', 'en, es');
      expect(next).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty request object', () => {
      const emptyReq = {};
      
      languageDetection(emptyReq, res, next);
      
      expect(emptyReq.language).toBe('en');
      expect(emptyReq.languageSource).toBe('fallback');
    });

    test('should handle undefined values gracefully', () => {
      req.query.lang = undefined;
      req.headers['accept-language'] = undefined;
      req.user = undefined;
      req.organization = undefined;
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en');
      expect(req.languageSource).toBe('fallback');
    });

    test('should handle null values gracefully', () => {
      req.query.lang = null;
      req.headers['accept-language'] = null;
      req.user = null;
      req.organization = null;
      
      languageDetection(req, res, next);
      
      expect(req.language).toBe('en');
      expect(req.languageSource).toBe('fallback');
    });
  });
}); 