# 🌍 i18n System Contribution Guide

## Overview

This guide provides comprehensive instructions for contributing to, maintaining, and extending the internationalization (i18n) system of the Pet API backend.

---

## 🎯 Quick Start for Contributors

### Prerequisites
- Node.js 16+ and npm
- Basic understanding of JSON structure
- Familiarity with the Pet API codebase
- Access to translation tools (optional)

### Setup Development Environment
```bash
# Clone and setup
git clone <repository>
cd backend
npm install

# Verify i18n system
node scripts/run-i18n-e2e-tests.js --full
```

---

## 📝 Adding New Translations

### 1. Adding New Translation Keys

#### For Existing Languages (EN/ES)

**Step 1: Identify the Namespace**
Determine which namespace your translation belongs to:
- `auth` - Authentication and authorization
- `common` - General UI messages
- `validation` - Form validation messages
- `organizations` - Organization management
- `pets` - Pet management
- `users` - User management
- `conversations` - Messaging system
- `messages` - Message content
- `memberships` - Organization membership
- `errors` - System errors
- `admin` - Admin functions

**Step 2: Add to Translation Files**
```bash
# Edit English translations
vim locales/en/[namespace].json

# Edit Spanish translations  
vim locales/es/[namespace].json
```

**Example: Adding a new pet status message**
```json
// locales/en/pets.json
{
  "status_adopted": "Pet has been adopted",
  "status_available": "Pet is available for adoption",
  "status_pending": "Adoption pending approval"
}

// locales/es/pets.json
{
  "status_adopted": "La mascota ha sido adoptada",
  "status_available": "La mascota está disponible para adopción", 
  "status_pending": "Adopción pendiente de aprobación"
}
```

**Step 3: Validate Translations**
```bash
# Run validation script
node scripts/validate-translations.js

# Test the new keys
node -e "
const { translate } = require('./utils/i18n');
console.log('EN:', translate('pets.status_adopted', 'en'));
console.log('ES:', translate('pets.status_adopted', 'es'));
"
```

**Step 4: Use in Controllers**
```javascript
// In petController.js
exports.updatePetStatus = async (req, res) => {
  // ... logic ...
  res.success('pets.status_adopted', { pet: updatedPet });
};
```

### 2. Adding Translation Keys with Parameters

**Example with Interpolation:**
```json
// locales/en/pets.json
{
  "adoption_scheduled": "Adoption scheduled for {{date}} with {{adopter}}"
}

// locales/es/pets.json
{
  "adoption_scheduled": "Adopción programada para {{date}} con {{adopter}}"
}
```

**Usage in Code:**
```javascript
res.success('pets.adoption_scheduled', {
  pet: petData,
  date: '2025-01-15',
  adopter: 'John Doe'
});
```

---

## 🌐 Adding New Languages

### Step-by-Step Process

#### 1. Create Language Directory Structure
```bash
# Create new language directory (example: French)
mkdir locales/fr

# Copy all files from English as templates
cp locales/en/*.json locales/fr/
```

#### 2. Update Configuration
```javascript
// config/i18n.js
const i18nConfig = {
  supportedLanguages: ['en', 'es', 'fr'], // Add new language
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  // ... rest of config
};
```

#### 3. Add Language Names
```json
// locales/en/common.json
{
  "language_fr": "French"
}

// locales/es/common.json  
{
  "language_fr": "Francés"
}

// locales/fr/common.json
{
  "language_fr": "Français"
}
```

#### 4. Translate All Files
For each namespace file in `locales/fr/`:
```json
// locales/fr/auth.json
{
  "login_successful": "Connexion réussie",
  "logout_successful": "Déconnexion réussie",
  "invalid_credentials": "Identifiants invalides"
}
```

#### 5. Validate New Language
```bash
# Validate completeness
node scripts/validate-translations.js

# Test the new language
node -e "
const { translate } = require('./utils/i18n');
console.log('FR:', translate('auth.login_successful', 'fr'));
"
```

#### 6. Update Database Schema (if needed)
If adding language support to database defaults:
```sql
-- Update enum constraints if using ENUMs
-- Or ensure validation allows new language codes
```

#### 7. Test Integration
```bash
# Test language detection
curl -H "Accept-Language: fr" \
     http://localhost:3000/api/language-preferences/supported-languages

# Test API responses
curl -H "Accept-Language: fr" \
     http://localhost:3000/api/auth/login \
     -d '{}' -H "Content-Type: application/json"
```

---

## 🔧 Modifying Controller Integration

### Adding i18n to New Controllers

#### 1. Import Response Formatter
```javascript
// controllers/newController.js
// Response formatter is automatically available via middleware
// Use res.success(), res.error(), etc.
```

#### 2. Replace Hardcoded Messages
**Before:**
```javascript
res.status(200).json({
  success: true,
  message: 'Operation completed successfully',
  data: result
});
```

**After:**
```javascript
res.success('common.operation_successful', result);
```

#### 3. Handle Validation Errors
**Before:**
```javascript
if (!email) {
  return res.status(400).json({
    error: 'Email is required'
  });
}
```

**After:**
```javascript
if (!email) {
  return res.error('validation.required', 400, { field: 'Email' });
}
```

#### 4. Add Translation Keys
```json
// locales/en/[namespace].json
{
  "operation_successful": "Operation completed successfully",
  "operation_failed": "Operation failed"
}
```

### Testing Controller Changes

#### Create Test Script
```javascript
// scripts/test-new-controller-i18n.js
const { translate } = require('../utils/i18n');

function testControllerTranslations() {
  const tests = [
    { key: 'namespace.operation_successful', en: 'Expected English', es: 'Expected Spanish' }
  ];
  
  // Test each translation...
}
```

---

## 📊 Quality Assurance

### Translation Quality Checklist

#### ✅ Content Quality
- [ ] Accurate translation of meaning
- [ ] Appropriate cultural context
- [ ] Consistent terminology across the application
- [ ] Proper grammar and spelling
- [ ] Native language review completed

#### ✅ Technical Quality  
- [ ] Valid JSON syntax
- [ ] All parameter placeholders preserved ({{field}})
- [ ] Key naming follows convention
- [ ] No hardcoded strings in code
- [ ] All languages have same key structure

#### ✅ Testing Quality
- [ ] All translation keys tested in both languages
- [ ] Parameter interpolation works correctly
- [ ] Fallback system functions properly
- [ ] API responses return correct language
- [ ] Performance impact measured

### Validation Scripts

#### Run Complete Validation
```bash
# Check translation completeness
node scripts/validate-translations.js

# Test specific controller
node scripts/test-[controller]-controller-i18n.js

# Run full system validation
node scripts/run-i18n-e2e-tests.js --full
```

#### Automated Quality Checks
```bash
# Check for missing translations
node -e "
const fs = require('fs');
const enKeys = Object.keys(require('./locales/en/common.json'));
const esKeys = Object.keys(require('./locales/es/common.json'));
const missing = enKeys.filter(key => !esKeys.includes(key));
console.log('Missing Spanish translations:', missing);
"
```

---

## 🎨 Best Practices

### Translation Key Naming

#### ✅ Good Examples
```json
{
  "auth_login_successful": "Login successful",
  "pet_created_successfully": "Pet created successfully", 
  "validation_email_required": "Email is required",
  "error_not_found": "Resource not found"
}
```

#### ❌ Bad Examples
```json
{
  "msg1": "Some message",
  "error": "Error",
  "text_field_1": "Field value"
}
```

#### Naming Convention
- Use `snake_case` for keys
- Start with namespace/context: `auth_`, `pet_`, `validation_`
- Be descriptive: `user_profile_updated` not `user_updated`
- Use consistent verbs: `created`, `updated`, `deleted`

### Parameter Interpolation

#### ✅ Recommended Patterns
```json
{
  "welcome_message": "Welcome, {{name}}!",
  "items_count": "Found {{count}} items",
  "deadline_reminder": "Deadline: {{date}} at {{time}}"
}
```

#### ✅ Complex Interpolation
```json
{
  "adoption_summary": "{{petName}} ({{species}}) adopted by {{adopter}} on {{date}}"
}
```

#### Usage in Controllers
```javascript
res.success('pets.adoption_summary', {
  petName: pet.name,
  species: pet.species,
  adopter: adoption.adopter.name,
  date: adoption.adoptionDate
});
```

### Error Handling

#### Consistent Error Structure
```javascript
// Standard error response
res.error('validation.required', 400, { 
  field: 'email',
  provided: req.body.email 
});

// With context for debugging
res.error('pets.not_found', 404, {
  petId: req.params.id,
  organizationId: req.organizationId
});
```

---

## 🔍 Performance Optimization

### Translation Loading

#### Optimize for Production
```javascript
// config/i18n.js - Production optimizations
const i18nConfig = {
  // Cache translations in memory
  caching: {
    enabled: process.env.NODE_ENV === 'production',
    ttl: 3600000 // 1 hour
  },
  
  // Minimize translation loading
  lazyLoading: {
    enabled: true,
    loadOnDemand: ['admin', 'statistics'] // Large namespaces
  }
};
```

#### Monitor Performance
```javascript
// Add performance monitoring
const startTime = Date.now();
const translation = translate('key', 'en');
const duration = Date.now() - startTime;

if (duration > 10) {
  console.warn(`Slow translation: ${duration}ms for key: ${key}`);
}
```

### Database Query Optimization

#### Cache User Language Preferences
```javascript
// In languageDetection middleware
const userLanguageCache = new Map();

const getCachedUserLanguage = async (userId) => {
  if (userLanguageCache.has(userId)) {
    return userLanguageCache.get(userId);
  }
  
  const userLang = await userModel.getUserLanguage(userId);
  userLanguageCache.set(userId, userLang);
  return userLang;
};
```

---

## 🚨 Common Issues and Solutions

### Translation Issues

#### Problem: Missing Translation Keys
**Symptoms:** API returns translation key instead of translated text
**Solution:**
```bash
# Find missing keys
node scripts/validate-translations.js

# Add missing translations
vim locales/[language]/[namespace].json
```

#### Problem: Parameter Interpolation Not Working
**Symptoms:** Messages show `{{parameter}}` instead of actual values
**Solution:**
```javascript
// Check parameter passing
res.success('message.key', { parameter: value });

// Verify translation has correct placeholder
"message_key": "Hello {{name}}"
```

#### Problem: Wrong Language Detected
**Symptoms:** API returns wrong language despite correct headers
**Solution:**
```javascript
// Check detection order in middleware
// Verify Accept-Language header format
// Check user preferences in database
```

### Development Issues

#### Problem: Tests Failing After Adding Translations
**Solution:**
```bash
# Update test expectations
# Verify all translation files updated
# Check for JSON syntax errors
node scripts/validate-translations.js
```

#### Problem: Performance Degradation
**Solution:**
```javascript
// Check translation cache
// Monitor database queries
// Profile translation lookup times
```

---

## 📚 Reference Materials

### Translation Resources

#### Online Translation Tools
- **DeepL Translator** - High quality translations
- **Google Translate** - Quick translations (verify accuracy)
- **Linguee** - Context-based translations
- **WordReference** - Dictionary and context

#### Spanish Translation Guidelines
- Use formal address (`usted`) for user interfaces
- Consistent terminology for technical terms
- Follow RAE (Real Academia Española) standards
- Consider Latin American vs. European Spanish differences

### Code Examples

#### Complete Controller Migration Example
```javascript
// Before migration
exports.createPet = async (req, res) => {
  try {
    const pet = await petModel.createPet(req.body);
    res.status(201).json({
      success: true,
      message: 'Pet created successfully',
      data: pet
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create pet'
    });
  }
};

// After migration
exports.createPet = async (req, res) => {
  try {
    const pet = await petModel.createPet(req.body);
    res.created('pets.created_successfully', pet);
  } catch (error) {
    console.error('Pet creation error:', error);
    res.serverError('pets.creation_failed', { error: error.message });
  }
};
```

### Testing Examples

#### Complete Test Suite for New Language
```javascript
// tests/i18n/french.test.js
describe('French Language Support', () => {
  test('should translate basic messages', () => {
    expect(translate('common.success', 'fr')).toBe('Succès');
    expect(translate('auth.login_successful', 'fr')).toBe('Connexion réussie');
  });
  
  test('should handle parameter interpolation', () => {
    const result = translate('validation.required', 'fr', { field: 'Email' });
    expect(result).toBe('Email est requis');
  });
  
  test('should fallback to English for missing keys', () => {
    const result = translate('non.existent.key', 'fr');
    expect(result).toBe('non.existent.key');
  });
});
```

---

## 🔄 Release Process

### Pre-Release Checklist

#### ✅ Translation Validation
- [ ] All translations tested with native speakers
- [ ] Parameter interpolation verified
- [ ] Cultural appropriateness reviewed
- [ ] Technical terminology consistency checked

#### ✅ Code Quality
- [ ] All controllers migrated to i18n
- [ ] No hardcoded strings remain
- [ ] Error handling uses translation keys
- [ ] Performance impact measured and acceptable

#### ✅ Testing
- [ ] Unit tests pass for all languages
- [ ] Integration tests cover language detection
- [ ] E2E tests validate complete user flows
- [ ] Performance tests show acceptable metrics

### Deployment

#### Database Migration
```bash
# Apply language preference fields
npx prisma migrate deploy

# Verify schema changes
npx prisma db pull
```

#### Feature Rollout
```javascript
// Gradual rollout with feature flags
const i18nEnabled = process.env.I18N_ENABLED === 'true';

if (i18nEnabled) {
  app.use(languageDetection);
  app.use(responseFormatter);
}
```

---

## 📞 Support and Community

### Getting Help

#### 🆘 Internal Support
1. Check existing translation files in `locales/`
2. Run validation scripts for specific issues
3. Review this contribution guide
4. Check API documentation

#### 🐛 Reporting Issues
When reporting i18n-related issues, include:
- Affected language(s)
- Translation key(s) involved
- Expected vs. actual behavior
- Browser/client language settings
- Request headers and response

#### 💡 Suggesting Improvements
- Performance optimizations
- New language support requests
- Translation quality improvements
- Developer experience enhancements

### Contributing Guidelines

#### 📝 Pull Request Process
1. Create feature branch: `feat/i18n-french-support`
2. Add translations and tests
3. Run validation scripts
4. Update documentation if needed
5. Submit pull request with clear description

#### 🎯 Review Criteria
- Translation accuracy and cultural appropriateness
- Code quality and performance impact  
- Test coverage and validation
- Documentation updates
- Backward compatibility

---

## 🔮 Future Roadmap

### Planned Enhancements
- **Advanced Pluralization** - ICU message format support
- **Right-to-Left Languages** - Arabic, Hebrew support
- **Translation Management** - Admin interface for translations
- **Context-Aware Translations** - Different translations based on user role
- **Automated Translation** - Integration with translation services for draft translations

### Contribution Opportunities
- Adding new language support
- Improving translation quality
- Performance optimizations
- Developer tooling enhancements
- Documentation improvements

---

**Last Updated:** January 2025  
**Contributors:** Pet API Development Team  
**Version:** 1.0 