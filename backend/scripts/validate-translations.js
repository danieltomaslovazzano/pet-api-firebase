#!/usr/bin/env node

/**
 * Script de validación de traducciones
 * Verifica completitud, consistencia y calidad de las traducciones
 */

const fs = require('fs');
const path = require('path');
const i18nConfig = require('../config/i18n');

console.log('🔍 Validando traducciones del sistema i18n...\n');

/**
 * Carga un archivo de traducción
 */
function loadTranslationFile(language, namespace) {
  const filePath = path.join(i18nConfig.localesPath, language, `${namespace}.json`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error al cargar ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Obtiene todas las claves de un objeto de forma recursiva
 */
function getAllKeys(obj, prefix = '') {
  const keys = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      keys.push(...getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

/**
 * Obtiene todos los namespaces disponibles
 */
function getAvailableNamespaces() {
  const namespaces = new Set();
  
  for (const language of i18nConfig.supportedLanguages) {
    const languagePath = path.join(i18nConfig.localesPath, language);
    
    if (fs.existsSync(languagePath)) {
      const files = fs.readdirSync(languagePath);
      
      files.forEach(file => {
        if (path.extname(file) === '.json') {
          namespaces.add(path.basename(file, '.json'));
        }
      });
    }
  }
  
  return Array.from(namespaces);
}

/**
 * Valida la completitud de traducciones
 */
function validateCompleteness() {
  console.log('📊 1. Validando completitud de traducciones:');
  
  const namespaces = getAvailableNamespaces();
  const results = {
    total: 0,
    missing: 0,
    complete: 0,
    issues: []
  };
  
  // Usar el primer idioma como referencia
  const referenceLanguage = i18nConfig.supportedLanguages[0];
  
  for (const namespace of namespaces) {
    console.log(`\n   📁 Namespace: ${namespace}`);
    
    // Cargar archivo de referencia
    const referenceTranslations = loadTranslationFile(referenceLanguage, namespace);
    if (!referenceTranslations) {
      results.issues.push(`Archivo de referencia faltante: ${referenceLanguage}/${namespace}.json`);
      continue;
    }
    
    const referenceKeys = getAllKeys(referenceTranslations);
    results.total += referenceKeys.length;
    
    console.log(`     📝 Claves en ${referenceLanguage}: ${referenceKeys.length}`);
    
    // Validar otros idiomas
    for (const language of i18nConfig.supportedLanguages) {
      if (language === referenceLanguage) continue;
      
      const translations = loadTranslationFile(language, namespace);
      if (!translations) {
        results.issues.push(`Archivo faltante: ${language}/${namespace}.json`);
        results.missing += referenceKeys.length;
        console.log(`     ❌ ${language}: Archivo faltante`);
        continue;
      }
      
      const languageKeys = getAllKeys(translations);
      const missingKeys = referenceKeys.filter(key => !languageKeys.includes(key));
      const extraKeys = languageKeys.filter(key => !referenceKeys.includes(key));
      
      if (missingKeys.length > 0) {
        results.missing += missingKeys.length;
        results.issues.push(`Claves faltantes en ${language}/${namespace}.json: ${missingKeys.join(', ')}`);
        console.log(`     ⚠️  ${language}: ${missingKeys.length} claves faltantes`);
      }
      
      if (extraKeys.length > 0) {
        results.issues.push(`Claves extra en ${language}/${namespace}.json: ${extraKeys.join(', ')}`);
        console.log(`     ⚠️  ${language}: ${extraKeys.length} claves extra`);
      }
      
      if (missingKeys.length === 0 && extraKeys.length === 0) {
        results.complete += referenceKeys.length;
        console.log(`     ✅ ${language}: Completo (${languageKeys.length} claves)`);
      } else {
        console.log(`     ❌ ${language}: ${languageKeys.length} claves (${missingKeys.length} faltantes, ${extraKeys.length} extra)`);
      }
    }
  }
  
  return results;
}

/**
 * Valida la calidad de las traducciones
 */
function validateQuality() {
  console.log('\n🎯 2. Validando calidad de traducciones:');
  
  const namespaces = getAvailableNamespaces();
  const issues = [];
  
  for (const namespace of namespaces) {
    console.log(`\n   📁 Namespace: ${namespace}`);
    
    for (const language of i18nConfig.supportedLanguages) {
      const translations = loadTranslationFile(language, namespace);
      if (!translations) continue;
      
      const keys = getAllKeys(translations);
      let qualityIssues = 0;
      
      for (const key of keys) {
        const value = getNestedValue(translations, key);
        
        if (typeof value !== 'string') {
          issues.push(`Valor no es string en ${language}/${namespace}.json: ${key}`);
          qualityIssues++;
          continue;
        }
        
        // Verificar que no esté vacío
        if (value.trim() === '') {
          issues.push(`Valor vacío en ${language}/${namespace}.json: ${key}`);
          qualityIssues++;
        }
        
        // Verificar interpolación
        const interpolationMatches = value.match(/\{\{[^}]+\}\}/g) || [];
        for (const match of interpolationMatches) {
          const paramName = match.slice(2, -2).trim();
          if (paramName === '') {
            issues.push(`Parámetro de interpolación vacío en ${language}/${namespace}.json: ${key}`);
            qualityIssues++;
          }
        }
        
        // Verificar caracteres sospechosos
        if (value.includes('undefined') || value.includes('null')) {
          issues.push(`Valor sospechoso en ${language}/${namespace}.json: ${key} = "${value}"`);
          qualityIssues++;
        }
      }
      
      if (qualityIssues === 0) {
        console.log(`     ✅ ${language}: Sin problemas de calidad`);
      } else {
        console.log(`     ⚠️  ${language}: ${qualityIssues} problemas de calidad`);
      }
    }
  }
  
  return issues;
}

/**
 * Obtiene un valor anidado de un objeto usando notación de puntos
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

/**
 * Valida la consistencia de parámetros de interpolación
 */
function validateInterpolationConsistency() {
  console.log('\n🔧 3. Validando consistencia de interpolación:');
  
  const namespaces = getAvailableNamespaces();
  const issues = [];
  const referenceLanguage = i18nConfig.supportedLanguages[0];
  
  for (const namespace of namespaces) {
    console.log(`\n   📁 Namespace: ${namespace}`);
    
    const referenceTranslations = loadTranslationFile(referenceLanguage, namespace);
    if (!referenceTranslations) continue;
    
    const referenceKeys = getAllKeys(referenceTranslations);
    
    for (const key of referenceKeys) {
      const referenceValue = getNestedValue(referenceTranslations, key);
      if (typeof referenceValue !== 'string') continue;
      
      const referenceParams = (referenceValue.match(/\{\{([^}]+)\}\}/g) || [])
        .map(match => match.slice(2, -2).trim())
        .sort();
      
      if (referenceParams.length === 0) continue;
      
      let hasInconsistency = false;
      
      for (const language of i18nConfig.supportedLanguages) {
        if (language === referenceLanguage) continue;
        
        const translations = loadTranslationFile(language, namespace);
        if (!translations) continue;
        
        const value = getNestedValue(translations, key);
        if (typeof value !== 'string') continue;
        
        const params = (value.match(/\{\{([^}]+)\}\}/g) || [])
          .map(match => match.slice(2, -2).trim())
          .sort();
        
        if (JSON.stringify(params) !== JSON.stringify(referenceParams)) {
          issues.push(
            `Parámetros inconsistentes en ${key}:\n` +
            `  ${referenceLanguage}: [${referenceParams.join(', ')}]\n` +
            `  ${language}: [${params.join(', ')}]`
          );
          hasInconsistency = true;
        }
      }
      
      if (!hasInconsistency && referenceParams.length > 0) {
        console.log(`     ✅ ${key}: Parámetros consistentes [${referenceParams.join(', ')}]`);
      }
    }
  }
  
  return issues;
}

/**
 * Genera estadísticas generales
 */
function generateStatistics() {
  console.log('\n📈 4. Estadísticas generales:');
  
  const namespaces = getAvailableNamespaces();
  const stats = {
    namespaces: namespaces.length,
    languages: i18nConfig.supportedLanguages.length,
    totalKeys: 0,
    totalTranslations: 0,
    filesPerLanguage: {}
  };
  
  for (const language of i18nConfig.supportedLanguages) {
    stats.filesPerLanguage[language] = 0;
    
    for (const namespace of namespaces) {
      const translations = loadTranslationFile(language, namespace);
      if (translations) {
        stats.filesPerLanguage[language]++;
        const keys = getAllKeys(translations);
        
        if (language === i18nConfig.supportedLanguages[0]) {
          stats.totalKeys += keys.length;
        }
        
        stats.totalTranslations += keys.length;
      }
    }
  }
  
  console.log(`   📊 Namespaces: ${stats.namespaces}`);
  console.log(`   🌍 Idiomas: ${stats.languages}`);
  console.log(`   🔑 Total de claves únicas: ${stats.totalKeys}`);
  console.log(`   📝 Total de traducciones: ${stats.totalTranslations}`);
  console.log(`   📁 Archivos por idioma:`);
  
  for (const [language, count] of Object.entries(stats.filesPerLanguage)) {
    console.log(`     ${language}: ${count}/${namespaces.length} archivos`);
  }
  
  return stats;
}

/**
 * Función principal
 */
function main() {
  try {
    // 1. Validar completitud
    const completenessResults = validateCompleteness();
    
    // 2. Validar calidad
    const qualityIssues = validateQuality();
    
    // 3. Validar consistencia de interpolación
    const interpolationIssues = validateInterpolationConsistency();
    
    // 4. Generar estadísticas
    const stats = generateStatistics();
    
    // 5. Resumen final
    console.log('\n📋 5. Resumen de validación:');
    
    const totalIssues = completenessResults.issues.length + qualityIssues.length + interpolationIssues.length;
    
    if (totalIssues === 0) {
      console.log('   ✅ ¡Todas las validaciones pasaron exitosamente!');
      console.log(`   📊 ${stats.totalTranslations} traducciones validadas`);
      console.log(`   🎯 Cobertura: 100%`);
    } else {
      console.log(`   ⚠️  Se encontraron ${totalIssues} problemas:`);
      console.log(`     - Completitud: ${completenessResults.issues.length} problemas`);
      console.log(`     - Calidad: ${qualityIssues.length} problemas`);
      console.log(`     - Interpolación: ${interpolationIssues.length} problemas`);
      
      if (completenessResults.total > 0) {
        const coverage = ((completenessResults.total - completenessResults.missing) / completenessResults.total * 100).toFixed(1);
        console.log(`   📊 Cobertura: ${coverage}%`);
      }
    }
    
    // Mostrar problemas detallados si los hay
    if (totalIssues > 0) {
      console.log('\n🔍 Problemas detallados:');
      
      [...completenessResults.issues, ...qualityIssues, ...interpolationIssues]
        .slice(0, 10) // Mostrar solo los primeros 10
        .forEach((issue, index) => {
          console.log(`   ${index + 1}. ${issue}`);
        });
      
      if (totalIssues > 10) {
        console.log(`   ... y ${totalIssues - 10} problemas más`);
      }
    }
    
    console.log('\n🎉 Validación completada!');
    
    // Código de salida
    process.exit(totalIssues > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('\n❌ Error durante la validación:', error);
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = {
  validateCompleteness,
  validateQuality,
  validateInterpolationConsistency,
  generateStatistics
}; 