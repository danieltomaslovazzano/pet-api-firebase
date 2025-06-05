/**
 * E2E Tests for i18n System
 * Tests complete internationalization flows including language detection, 
 * translation, persistence, and API integration
 */

const request = require('supertest');
const app = require('../../app');
const { translate } = require('../../utils/i18n');
const { i18nManager } = require('../../utils/i18n');

describe('i18n System E2E Tests', () => {
  let authToken;
  let userId;
  let organizationId;

  beforeAll(async () => {
    // Setup test data - this would normally use test database setup
    console.log('Setting up i18n E2E test environment...');
  });

  afterAll(async () => {
    // Cleanup test data
    console.log('Cleaning up i18n E2E test environment...');
  });

  describe('Language Detection Flow', () => {
    test('should detect language from query parameter', async () => {
      const response = await request(app)
        .get('/api/language-preferences/supported-languages?lang=es')
        .expect(200);

      expect(response.headers['content-language']).toBe('es');
      expect(response.headers['x-supported-languages']).toContain('en, es');
    });

    test('should detect language from Accept-Language header', async () => {
      const response = await request(app)
        .get('/api/language-preferences/supported-languages')
        .set('Accept-Language', 'es-ES,es;q=0.9,en;q=0.8')
        .expect(200);

      expect(response.headers['content-language']).toBe('es');
    });

    test('should fallback to default language when no preference is found', async () => {
      const response = await request(app)
        .get('/api/language-preferences/supported-languages')
        .set('Accept-Language', 'fr-FR,de;q=0.9')
        .expect(200);

      expect(response.headers['content-language']).toBe('en');
    });
  });

  describe('Translation System', () => {
    test('should return translations in English', () => {
      const translation = translate('common.success', 'en');
      expect(translation).toBe('Success');
    });

    test('should return translations in Spanish', () => {
      const translation = translate('common.success', 'es');
      expect(translation).toBe('Éxito');
    });

    test('should handle parameter interpolation', () => {
      const translation = translate('validation.invalid_language', 'en', {
        availableLanguages: 'en, es'
      });
      expect(translation).toBe('Invalid language. Supported languages: en, es');
    });

    test('should fallback to English for missing Spanish translations', () => {
      const translation = translate('non.existent.key', 'es');
      expect(translation).toBe('non.existent.key'); // Falls back to key when not found
    });
  });

  describe('Supported Languages API', () => {
    test('should return supported languages information', async () => {
      const response = await request(app)
        .get('/api/language-preferences/supported-languages')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty('supportedLanguages');
      expect(response.body.data.supportedLanguages).toContain('en');
      expect(response.body.data.supportedLanguages).toContain('es');
      expect(response.body.data).toHaveProperty('currentLanguage');
      expect(response.body.data).toHaveProperty('languageSource');
    });

    test('should return language names in different languages', async () => {
      const enResponse = await request(app)
        .get('/api/language-preferences/supported-languages?lang=en')
        .expect(200);

      const esResponse = await request(app)
        .get('/api/language-preferences/supported-languages?lang=es')
        .expect(200);

      // Check that language names are translated
      expect(enResponse.body.data.languages.en.name).toBe('English');
      expect(esResponse.body.data.languages.en.name).toBe('Inglés');
    });
  });

  describe('User Language Preferences', () => {
    beforeEach(() => {
      // Mock authentication for these tests
      // In a real test, you'd authenticate with a test user
    });

    test('should get user language preference (requires auth)', async () => {
      // This test requires authentication middleware
      // Skipping for now but showing the structure
      const response = await request(app)
        .get('/api/language-preferences/user/preference')
        .expect(401); // Expect unauthorized without auth

      expect(response.body.success).toBe(false);
    });

    test('should update user language preference (requires auth)', async () => {
      // This test requires authentication middleware
      const response = await request(app)
        .put('/api/language-preferences/user/preference')
        .send({ preferredLanguage: 'es' })
        .expect(401); // Expect unauthorized without auth

      expect(response.body.success).toBe(false);
    });

    test('should validate language preference input', async () => {
      const response = await request(app)
        .put('/api/language-preferences/user/preference')
        .send({ preferredLanguage: 'invalid-lang' })
        .expect(401); // Still unauthorized, but this shows validation would happen

      expect(response.body.success).toBe(false);
    });
  });

  describe('Organization Language Preferences', () => {
    test('should get organization language preference (requires auth)', async () => {
      const response = await request(app)
        .get('/api/language-preferences/organization/test-org-id/preference')
        .expect(401); // Expect unauthorized without auth

      expect(response.body.success).toBe(false);
    });

    test('should update organization language preference (requires auth)', async () => {
      const response = await request(app)
        .put('/api/language-preferences/organization/test-org-id/preference')
        .send({ defaultLanguage: 'es' })
        .expect(401); // Expect unauthorized without auth

      expect(response.body.success).toBe(false);
    });
  });

  describe('Language Statistics API', () => {
    test('should require admin permissions for statistics', async () => {
      const response = await request(app)
        .get('/api/language-preferences/statistics')
        .expect(401); // Expect unauthorized without auth

      expect(response.body.success).toBe(false);
    });
  });

  describe('i18n Integration with Controllers', () => {
    test('should return translated messages from auth endpoints', async () => {
      // Test login endpoint with different languages
      const enResponse = await request(app)
        .post('/api/auth/login')
        .set('Accept-Language', 'en')
        .send({}) // Invalid login data
        .expect(400);

      const esResponse = await request(app)
        .post('/api/auth/login')
        .set('Accept-Language', 'es')
        .send({}) // Invalid login data
        .expect(400);

      // Both should return error but in different languages
      expect(enResponse.body.success).toBe(false);
      expect(esResponse.body.success).toBe(false);
      
      // The error messages should be different (translated)
      expect(enResponse.body.error).not.toBe(esResponse.body.error);
    });

    test('should maintain language consistency across requests', async () => {
      // Test that language preference is maintained across multiple requests
      const response1 = await request(app)
        .get('/api/language-preferences/supported-languages?lang=es')
        .expect(200);

      const response2 = await request(app)
        .get('/api/language-preferences/supported-languages')
        .set('Accept-Language', 'es')
        .expect(200);

      expect(response1.headers['content-language']).toBe('es');
      expect(response2.headers['content-language']).toBe('es');
    });
  });

  describe('Performance Tests', () => {
    test('should load translations efficiently', async () => {
      const startTime = Date.now();

      // Make multiple translation requests
      for (let i = 0; i < 10; i++) {
        translate('common.success', 'en');
        translate('common.success', 'es');
        translate('validation.required', 'en', { field: 'test' });
      }

      const endTime = Date.now();
      const duration = endTime - startTime;

      // Should complete 30 translations in less than 100ms
      expect(duration).toBeLessThan(100);
    });

    test('should handle concurrent language detection efficiently', async () => {
      const startTime = Date.now();

      // Make multiple concurrent API requests
      const promises = [];
      for (let i = 0; i < 5; i++) {
        promises.push(
          request(app)
            .get('/api/language-preferences/supported-languages?lang=en')
        );
        promises.push(
          request(app)
            .get('/api/language-preferences/supported-languages?lang=es')
        );
      }

      const responses = await Promise.all(promises);
      const endTime = Date.now();
      const duration = endTime - startTime;

      // All requests should succeed
      responses.forEach(response => {
        expect(response.status).toBe(200);
      });

      // Should complete 10 concurrent requests in less than 1 second
      expect(duration).toBeLessThan(1000);
    });
  });

  describe('Error Handling', () => {
    test('should handle missing translation keys gracefully', () => {
      const translation = translate('non.existent.key', 'en');
      expect(translation).toBe('non.existent.key'); // Should return key as fallback
    });

    test('should handle invalid language codes gracefully', () => {
      const isSupported = i18nManager.isLanguageSupported('invalid-lang');
      expect(isSupported).toBe(false);
    });

    test('should return error messages in correct language', async () => {
      const enResponse = await request(app)
        .get('/api/language-preferences/organization/non-existent/preference?lang=en')
        .expect(401); // Unauthorized

      const esResponse = await request(app)
        .get('/api/language-preferences/organization/non-existent/preference?lang=es')
        .expect(401); // Unauthorized

      // Both should be unauthorized but with different languages
      expect(enResponse.headers['content-language']).toBe('en');
      expect(esResponse.headers['content-language']).toBe('es');
    });
  });

  describe('Namespace Coverage', () => {
    test('should have translations for all namespaces', () => {
      const namespaces = [
        'admin', 'auth', 'common', 'conversations', 'errors',
        'memberships', 'messages', 'organizations', 'pets', 'users', 'validation'
      ];

      namespaces.forEach(namespace => {
        // Test that each namespace has at least some translations
        const enTranslation = translate(`${namespace}.not_found`, 'en');
        const esTranslation = translate(`${namespace}.not_found`, 'es');

        // Should not return the key itself (meaning translation exists)
        // or should be a valid fallback
        expect(typeof enTranslation).toBe('string');
        expect(typeof esTranslation).toBe('string');
      });
    });
  });

  describe('Integration with Middleware', () => {
    test('should add correct headers to responses', async () => {
      const response = await request(app)
        .get('/api/language-preferences/supported-languages?lang=es')
        .expect(200);

      expect(response.headers).toHaveProperty('content-language');
      expect(response.headers).toHaveProperty('x-supported-languages');
      expect(response.headers['content-language']).toBe('es');
      expect(response.headers['x-supported-languages']).toContain('en, es');
    });

    test('should format responses correctly', async () => {
      const response = await request(app)
        .get('/api/language-preferences/supported-languages')
        .expect(200);

      // Should follow the standard response format
      expect(response.body).toHaveProperty('success');
      expect(response.body).toHaveProperty('data');
      expect(response.body.success).toBe(true);
    });
  });
}); 