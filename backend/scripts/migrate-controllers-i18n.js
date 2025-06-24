#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script para migrar controladores al sistema i18n
 * Identifica mensajes hardcodeados y sugiere claves de traducción
 */

const controllersDir = path.join(__dirname, '../controllers');
const outputFile = path.join(__dirname, '../initiative/i18n/controller-migration-report.md');

// Patrones para identificar mensajes hardcodeados
const patterns = [
  // res.status().json() con mensajes
  /res\.status\(\d+\)\.json\(\s*{\s*error:\s*['"`]([^'"`]+)['"`]/g,
  /res\.status\(\d+\)\.json\(\s*{\s*message:\s*['"`]([^'"`]+)['"`]/g,
  
  // res.json() directo con mensajes
  /res\.json\(\s*{\s*error:\s*['"`]([^'"`]+)['"`]/g,
  /res\.json\(\s*{\s*message:\s*['"`]([^'"`]+)['"`]/g,
  
  // return res.status().json()
  /return\s+res\.status\(\d+\)\.json\(\s*{\s*error:\s*['"`]([^'"`]+)['"`]/g,
  /return\s+res\.status\(\d+\)\.json\(\s*{\s*message:\s*['"`]([^'"`]+)['"`]/g,
];

// Mapeo de mensajes comunes a claves de traducción
const messageMapping = {
  // Errores comunes
  'Error creating': 'common.error_creating',
  'Error updating': 'common.error_updating',
  'Error deleting': 'common.error_deleting',
  'Error retrieving': 'common.error_retrieving',
  'Not found': 'common.not_found',
  'Forbidden': 'common.forbidden',
  'Unauthorized': 'common.unauthorized',
  'Validation failed': 'validation.failed',
  'Invalid': 'validation.invalid',
  'Required': 'validation.required',
  
  // Autenticación
  'Usuario registrado correctamente': 'auth.user_registered_successfully',
  'El email ya está registrado': 'auth.email_already_exists',
  'Formato de email inválido': 'auth.invalid_email_format',
  'La contraseña es demasiado débil': 'auth.weak_password',
  'Error en el registro': 'auth.registration_error',
  'Error de autenticación': 'auth.authentication_error',
  'Usuario no encontrado': 'auth.user_not_found',
  'Se requiere el token de verificación': 'auth.verification_token_required',
  'Email verificado correctamente': 'auth.email_verified_successfully',
  'Token de verificación inválido': 'auth.invalid_verification_token',
  'Token de verificación expirado': 'auth.expired_verification_token',
  'Correo de recuperación enviado correctamente': 'auth.password_reset_email_sent',
  'Email no encontrado': 'auth.email_not_found',
  'Sesión cerrada correctamente': 'auth.logout_successful',
  'Token no proporcionado': 'auth.token_not_provided',
  'Token inválido': 'auth.invalid_token',
  
  // Mascotas
  'Pet not found': 'pets.not_found',
  'Pet created successfully': 'pets.created',
  'Pet updated successfully': 'pets.updated',
  'Pet deleted': 'pets.deleted',
  'Pet hidden successfully': 'pets.hidden',
  'Pet is now visible': 'pets.visible',
  'Pet is now featured': 'pets.featured',
  'Error creating pet': 'pets.error_creating',
  'Error updating pet': 'pets.error_updating',
  'Error deleting pet': 'pets.error_deleting',
  
  // Organizaciones
  'Organization not found': 'organizations.not_found',
  'Organization created successfully': 'organizations.created',
  'Organization updated successfully': 'organizations.updated',
  'Organization deleted successfully': 'organizations.deleted',
  
  // Usuarios
  'User created successfully': 'users.created',
  'User updated successfully': 'users.updated',
  'User not found': 'users.not_found',
  'Error creating user': 'users.error_creating',
  
  // Conversaciones
  'Conversation not found': 'conversations.not_found',
  'Conversation created successfully': 'conversations.created',
  'Error creating conversation': 'conversations.error_creating',
  
  // Mensajes
  'Message not found': 'messages.not_found',
  'Error creating message': 'messages.error_creating',
  'Error retrieving messages': 'messages.error_retrieving',
  
  // Membresías
  'Membership not found': 'memberships.not_found',
  'Membership created successfully': 'memberships.created',
  'Membership updated successfully': 'memberships.updated'
};

function findHardcodedMessages(content, filename) {
  const findings = [];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const message = match[1];
      const line = content.substring(0, match.index).split('\n').length;
      
      // Buscar clave de traducción sugerida
      let suggestedKey = null;
      for (const [text, key] of Object.entries(messageMapping)) {
        if (message.includes(text) || text.includes(message)) {
          suggestedKey = key;
          break;
        }
      }
      
      findings.push({
        file: filename,
        line,
        message,
        suggestedKey,
        context: match[0]
      });
    }
  });
  
  return findings;
}

function generateMigrationSuggestions(findings) {
  const suggestions = [];
  
  findings.forEach(finding => {
    const before = finding.context;
    let after;
    
    if (finding.suggestedKey) {
      // Reemplazar con la clave sugerida
      if (before.includes('error:')) {
        after = before.replace(/error:\s*['"`][^'"`]+['"`]/, `error: req.t('${finding.suggestedKey}')`);
      } else if (before.includes('message:')) {
        after = before.replace(/message:\s*['"`][^'"`]+['"`]/, `message: req.t('${finding.suggestedKey}')`);
      }
    } else {
      // Generar clave basada en el contexto
      const namespace = getNamespaceFromFilename(finding.file);
      const keyName = generateKeyName(finding.message);
      const generatedKey = `${namespace}.${keyName}`;
      
      if (before.includes('error:')) {
        after = before.replace(/error:\s*['"`][^'"`]+['"`]/, `error: req.t('${generatedKey}')`);
      } else if (before.includes('message:')) {
        after = before.replace(/message:\s*['"`][^'"`]+['"`]/, `message: req.t('${generatedKey}')`);
      }
      
      finding.suggestedKey = generatedKey;
    }
    
    suggestions.push({
      ...finding,
      before,
      after
    });
  });
  
  return suggestions;
}

function getNamespaceFromFilename(filename) {
  const base = path.basename(filename, '.js');
  if (base.includes('auth')) return 'auth';
  if (base.includes('pet')) return 'pets';
  if (base.includes('user')) return 'users';
  if (base.includes('organization')) return 'organizations';
  if (base.includes('conversation')) return 'conversations';
  if (base.includes('message')) return 'messages';
  if (base.includes('membership')) return 'memberships';
  if (base.includes('admin')) return 'admin';
  return 'common';
}

function generateKeyName(message) {
  return message
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 50);
}

function generateReport(suggestions) {
  let report = `# 📋 Reporte de Migración i18n - Controladores

## 📊 Resumen
- **Archivos analizados**: ${new Set(suggestions.map(s => s.file)).size}
- **Mensajes encontrados**: ${suggestions.length}
- **Claves sugeridas**: ${suggestions.filter(s => s.suggestedKey).length}

## 🔍 Mensajes Hardcodeados Encontrados

`;

  // Agrupar por archivo
  const byFile = suggestions.reduce((acc, suggestion) => {
    if (!acc[suggestion.file]) acc[suggestion.file] = [];
    acc[suggestion.file].push(suggestion);
    return acc;
  }, {});

  Object.entries(byFile).forEach(([filename, fileSuggestions]) => {
    report += `### 📄 ${filename}\n\n`;
    
    fileSuggestions.forEach((suggestion, index) => {
      report += `#### ${index + 1}. Línea ${suggestion.line}\n\n`;
      report += `**Mensaje actual:**\n\`\`\`javascript\n${suggestion.message}\n\`\`\`\n\n`;
      report += `**Contexto:**\n\`\`\`javascript\n${suggestion.before}\n\`\`\`\n\n`;
      report += `**Sugerencia:**\n\`\`\`javascript\n${suggestion.after}\n\`\`\`\n\n`;
      report += `**Clave de traducción:** \`${suggestion.suggestedKey}\`\n\n`;
      report += `---\n\n`;
    });
  });

  // Generar lista de claves nuevas necesarias
  const newKeys = suggestions
    .filter(s => !Object.values(messageMapping).includes(s.suggestedKey))
    .map(s => ({ key: s.suggestedKey, message: s.message }));

  if (newKeys.length > 0) {
    report += `## 🆕 Nuevas Claves de Traducción Necesarias\n\n`;
    
    const byNamespace = newKeys.reduce((acc, item) => {
      const namespace = item.key.split('.')[0];
      if (!acc[namespace]) acc[namespace] = [];
      acc[namespace].push(item);
      return acc;
    }, {});

    Object.entries(byNamespace).forEach(([namespace, keys]) => {
      report += `### ${namespace}.json\n\n`;
      report += `\`\`\`json\n`;
      keys.forEach(item => {
        const keyName = item.key.split('.').slice(1).join('.');
        report += `"${keyName}": "${item.message}",\n`;
      });
      report += `\`\`\`\n\n`;
    });
  }

  // Instrucciones de migración
  report += `## 🚀 Instrucciones de Migración

### 1. Actualizar app.js
Agregar los middlewares de i18n:

\`\`\`javascript
const { languageDetection } = require('./middlewares/languageDetection');
const { responseFormatter } = require('./middlewares/responseFormatter');

// Después de los middlewares de autenticación
app.use(languageDetection);
app.use(responseFormatter);
\`\`\`

### 2. Migrar controladores
Para cada controlador, reemplazar los mensajes hardcodeados con las claves sugeridas.

### 3. Usar métodos helper
Aprovechar los nuevos métodos del middleware responseFormatter:

\`\`\`javascript
// Antes
res.status(400).json({ error: 'Validation failed' });

// Después
res.error('validation.failed', 400);

// O usar métodos específicos
res.validationError([
  { field: 'email', messageKey: 'validation.invalid_email' }
]);
\`\`\`

### 4. Agregar traducciones faltantes
Agregar las nuevas claves identificadas a los archivos de traducción correspondientes.

### 5. Testing
Probar cada endpoint con diferentes idiomas usando el parámetro \`?lang=es\` o \`?lang=en\`.

## ✅ Checklist de Migración

- [ ] Actualizar app.js con middlewares i18n
- [ ] Migrar authController.js
- [ ] Migrar petController.js
- [ ] Migrar userController.js
- [ ] Migrar organizationController.js
- [ ] Migrar conversationController.js
- [ ] Migrar messageController.js
- [ ] Migrar membershipController.js
- [ ] Migrar adminController.js
- [ ] Agregar traducciones faltantes
- [ ] Ejecutar tests de integración
- [ ] Validar respuestas en ambos idiomas

---

**Generado el:** ${new Date().toISOString()}
**Script:** migrate-controllers-i18n.js
`;

  return report;
}

async function main() {
  console.log('🔍 Analizando controladores para migración i18n...');
  
  try {
    const files = fs.readdirSync(controllersDir)
      .filter(file => file.endsWith('.js'))
      .map(file => path.join(controllersDir, file));

    let allFindings = [];

    for (const file of files) {
      console.log(`📄 Analizando ${path.basename(file)}...`);
      const content = fs.readFileSync(file, 'utf8');
      const findings = findHardcodedMessages(content, path.basename(file));
      allFindings = allFindings.concat(findings);
    }

    console.log(`📊 Encontrados ${allFindings.length} mensajes hardcodeados`);

    const suggestions = generateMigrationSuggestions(allFindings);
    const report = generateReport(suggestions);

    // Crear directorio si no existe
    const reportDir = path.dirname(outputFile);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, report);
    console.log(`📋 Reporte generado: ${outputFile}`);
    console.log(`✅ Migración lista para comenzar!`);

  } catch (error) {
    console.error('❌ Error durante el análisis:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  findHardcodedMessages,
  generateMigrationSuggestions,
  generateReport
}; 