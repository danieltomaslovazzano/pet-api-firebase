#!/usr/bin/env node

/**
 * Performance Testing Script for i18n System
 * Tests translation performance, memory usage, and optimization effectiveness
 */

const { translate } = require('../utils/i18n');
const { i18nManager } = require('../utils/i18n');

// Performance test configuration
const TEST_CONFIG = {
  iterations: {
    small: 100,
    medium: 1000,
    large: 10000
  },
  timeouts: {
    translation: 5, // ms per translation
    startup: 1000,  // ms for system startup
    memory: 50      // MB memory limit
  }
};

class PerformanceTester {
  constructor() {
    this.results = {
      translation: {},
      memory: {},
      concurrent: {},
      caching: {}
    };
  }

  // Test translation performance
  testTranslationPerformance() {
    console.log('\n🚀 Testing Translation Performance...');
    
    const testCases = [
      { key: 'common.success', lang: 'en' },
      { key: 'common.success', lang: 'es' },
      { key: 'auth.login_successful', lang: 'en' },
      { key: 'auth.login_successful', lang: 'es' },
      { key: 'validation.required', lang: 'en', params: { field: 'Test' } },
      { key: 'validation.required', lang: 'es', params: { field: 'Test' } }
    ];

    // Warm up the translation cache
    testCases.forEach(test => {
      translate(test.key, test.lang, test.params || {});
    });

    const results = {};
    
    for (const size of Object.keys(TEST_CONFIG.iterations)) {
      const iterations = TEST_CONFIG.iterations[size];
      console.log(`\n📊 Running ${iterations} iterations (${size} test)...`);
      
      const startTime = process.hrtime.bigint();
      const startMemory = process.memoryUsage();
      
      for (let i = 0; i < iterations; i++) {
        const testCase = testCases[i % testCases.length];
        translate(testCase.key, testCase.lang, testCase.params || {});
      }
      
      const endTime = process.hrtime.bigint();
      const endMemory = process.memoryUsage();
      
      const durationMs = Number(endTime - startTime) / 1_000_000;
      const avgDuration = durationMs / iterations;
      const memoryDelta = endMemory.heapUsed - startMemory.heapUsed;
      
      results[size] = {
        iterations,
        totalTime: durationMs,
        averageTime: avgDuration,
        translationsPerSecond: (iterations / durationMs) * 1000,
        memoryDelta: memoryDelta / 1024 / 1024 // MB
      };
      
      console.log(`✅ ${size} test completed:`);
      console.log(`   Total time: ${durationMs.toFixed(2)}ms`);
      console.log(`   Average per translation: ${avgDuration.toFixed(3)}ms`);
      console.log(`   Translations/second: ${results[size].translationsPerSecond.toFixed(0)}`);
      console.log(`   Memory delta: ${results[size].memoryDelta.toFixed(2)}MB`);
      
      // Validate performance thresholds
      if (avgDuration > TEST_CONFIG.timeouts.translation) {
        console.log(`⚠️  Performance warning: ${avgDuration.toFixed(3)}ms > ${TEST_CONFIG.timeouts.translation}ms threshold`);
      } else {
        console.log(`✅ Performance OK: ${avgDuration.toFixed(3)}ms <= ${TEST_CONFIG.timeouts.translation}ms`);
      }
    }
    
    this.results.translation = results;
    return results;
  }

  // Test memory usage and cleanup
  testMemoryUsage() {
    console.log('\n💾 Testing Memory Usage...');
    
    const initialMemory = process.memoryUsage();
    console.log(`📊 Initial memory usage: ${(initialMemory.heapUsed / 1024 / 1024).toFixed(2)}MB`);
    
    // Load all translations multiple times
    const languages = ['en', 'es'];
    const namespaces = ['auth', 'common', 'validation', 'organizations', 'pets', 'users', 'conversations', 'messages', 'memberships', 'errors', 'admin'];
    
    console.log('\n🔄 Loading all translations...');
    for (let i = 0; i < 10; i++) {
      for (const lang of languages) {
        for (const namespace of namespaces) {
          // Simulate loading various translation keys
          translate(`${namespace}.not_found`, lang);
          translate(`${namespace}.created`, lang);
          translate(`${namespace}.updated`, lang);
        }
      }
    }
    
    const afterLoadMemory = process.memoryUsage();
    const memoryIncrease = (afterLoadMemory.heapUsed - initialMemory.heapUsed) / 1024 / 1024;
    
    console.log(`📊 Memory after loading: ${(afterLoadMemory.heapUsed / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📈 Memory increase: ${memoryIncrease.toFixed(2)}MB`);
    
    // Test garbage collection impact
    if (global.gc) {
      console.log('\n🗑️  Running garbage collection...');
      global.gc();
      
      const afterGCMemory = process.memoryUsage();
      const memoryReclaimed = (afterLoadMemory.heapUsed - afterGCMemory.heapUsed) / 1024 / 1024;
      
      console.log(`📊 Memory after GC: ${(afterGCMemory.heapUsed / 1024 / 1024).toFixed(2)}MB`);
      console.log(`♻️  Memory reclaimed: ${memoryReclaimed.toFixed(2)}MB`);
    }
    
    const finalMemory = process.memoryUsage();
    const totalIncrease = (finalMemory.heapUsed - initialMemory.heapUsed) / 1024 / 1024;
    
    this.results.memory = {
      initial: initialMemory.heapUsed / 1024 / 1024,
      final: finalMemory.heapUsed / 1024 / 1024,
      increase: totalIncrease
    };
    
    // Validate memory usage
    if (totalIncrease > TEST_CONFIG.timeouts.memory) {
      console.log(`⚠️  Memory warning: ${totalIncrease.toFixed(2)}MB > ${TEST_CONFIG.timeouts.memory}MB threshold`);
    } else {
      console.log(`✅ Memory usage OK: ${totalIncrease.toFixed(2)}MB <= ${TEST_CONFIG.timeouts.memory}MB`);
    }
    
    return this.results.memory;
  }

  // Test concurrent translations
  async testConcurrentPerformance() {
    console.log('\n⚡ Testing Concurrent Translation Performance...');
    
    const concurrentLevels = [1, 5, 10, 25, 50];
    const results = {};
    
    for (const concurrency of concurrentLevels) {
      console.log(`\n🔄 Testing ${concurrency} concurrent translations...`);
      
      const promises = [];
      const startTime = process.hrtime.bigint();
      
      for (let i = 0; i < concurrency; i++) {
        const promise = new Promise((resolve) => {
          const testKeys = [
            'common.success',
            'auth.login_successful', 
            'validation.required',
            'pets.created',
            'organizations.updated'
          ];
          
          const languages = ['en', 'es'];
          const translations = [];
          
          // Perform multiple translations in this worker
          for (let j = 0; j < 100; j++) {
            const key = testKeys[j % testKeys.length];
            const lang = languages[j % languages.length];
            translations.push(translate(key, lang));
          }
          
          resolve(translations);
        });
        
        promises.push(promise);
      }
      
      const allResults = await Promise.all(promises);
      const endTime = process.hrtime.bigint();
      
      const durationMs = Number(endTime - startTime) / 1_000_000;
      const totalTranslations = allResults.length * 100;
      const translationsPerSecond = (totalTranslations / durationMs) * 1000;
      
      results[concurrency] = {
        concurrency,
        totalTime: durationMs,
        totalTranslations,
        translationsPerSecond,
        averageTimePerConcurrentGroup: durationMs / concurrency
      };
      
      console.log(`✅ ${concurrency} concurrent workers completed:`);
      console.log(`   Total time: ${durationMs.toFixed(2)}ms`);
      console.log(`   Total translations: ${totalTranslations}`);
      console.log(`   Translations/second: ${translationsPerSecond.toFixed(0)}`);
      console.log(`   Avg time per worker: ${results[concurrency].averageTimePerConcurrentGroup.toFixed(2)}ms`);
    }
    
    this.results.concurrent = results;
    return results;
  }

  // Test caching effectiveness
  testCachingEffectiveness() {
    console.log('\n🗂️  Testing Translation Caching Effectiveness...');
    
    const testKey = 'common.success';
    const iterations = 10000;
    
    // Test first-time translation (cache miss)
    console.log('\n🔄 Testing cache miss performance...');
    i18nManager.clearCache(); // Clear cache
    
    const cacheMissStart = process.hrtime.bigint();
    translate(testKey, 'en');
    const cacheMissEnd = process.hrtime.bigint();
    
    const cacheMissDuration = Number(cacheMissEnd - cacheMissStart) / 1_000_000;
    
    // Test cached translations (cache hit)
    console.log('\n⚡ Testing cache hit performance...');
    
    const cacheHitStart = process.hrtime.bigint();
    for (let i = 0; i < iterations; i++) {
      translate(testKey, 'en');
    }
    const cacheHitEnd = process.hrtime.bigint();
    
    const cacheHitDuration = Number(cacheHitEnd - cacheHitStart) / 1_000_000;
    const avgCacheHitTime = cacheHitDuration / iterations;
    
    const performanceImprovement = cacheMissDuration / avgCacheHitTime;
    
    console.log(`📊 Cache miss duration: ${cacheMissDuration.toFixed(3)}ms`);
    console.log(`📊 Average cache hit: ${avgCacheHitTime.toFixed(6)}ms`);
    console.log(`📈 Performance improvement: ${performanceImprovement.toFixed(0)}x faster`);
    
    this.results.caching = {
      cacheMissDuration,
      avgCacheHitTime,
      performanceImprovement,
      cacheHitIterations: iterations
    };
    
    return this.results.caching;
  }

  // Test startup performance
  testStartupPerformance() {
    console.log('\n🚀 Testing i18n System Startup Performance...');
    
    const startTime = process.hrtime.bigint();
    
    // Simulate system startup by clearing cache and loading languages
    i18nManager.clearCache();
    i18nManager.loadLanguage('en');
    i18nManager.loadLanguage('es');
    
    // Test that basic translations work
    const testTranslations = [
      translate('common.success', 'en'),
      translate('common.success', 'es'),
      translate('auth.login_successful', 'en'),
      translate('auth.login_successful', 'es')
    ];
    
    const endTime = process.hrtime.bigint();
    const startupDuration = Number(endTime - startTime) / 1_000_000;
    
    console.log(`📊 Startup duration: ${startupDuration.toFixed(2)}ms`);
    console.log(`✅ Test translations working: ${testTranslations.every(t => t && t.length > 0)}`);
    
    // Validate startup performance
    if (startupDuration > TEST_CONFIG.timeouts.startup) {
      console.log(`⚠️  Startup warning: ${startupDuration.toFixed(2)}ms > ${TEST_CONFIG.timeouts.startup}ms threshold`);
    } else {
      console.log(`✅ Startup performance OK: ${startupDuration.toFixed(2)}ms <= ${TEST_CONFIG.timeouts.startup}ms`);
    }
    
    return { startupDuration, validTranslations: testTranslations.length };
  }

  // Generate comprehensive performance report
  generateReport() {
    console.log('\n📋 Performance Test Report');
    console.log('='.repeat(50));
    
    // Translation Performance Summary
    console.log('\n🚀 Translation Performance:');
    Object.entries(this.results.translation).forEach(([size, data]) => {
      console.log(`   ${size}: ${data.averageTime.toFixed(3)}ms avg, ${data.translationsPerSecond.toFixed(0)} t/s`);
    });
    
    // Memory Usage Summary
    console.log('\n💾 Memory Usage:');
    console.log(`   Memory increase: ${this.results.memory.increase.toFixed(2)}MB`);
    console.log(`   Final usage: ${this.results.memory.final.toFixed(2)}MB`);
    
    // Concurrent Performance Summary
    console.log('\n⚡ Concurrent Performance:');
    Object.entries(this.results.concurrent).forEach(([concurrency, data]) => {
      console.log(`   ${concurrency} workers: ${data.translationsPerSecond.toFixed(0)} t/s`);
    });
    
    // Caching Effectiveness Summary
    console.log('\n🗂️  Caching Effectiveness:');
    console.log(`   Performance improvement: ${this.results.caching.performanceImprovement.toFixed(0)}x faster`);
    console.log(`   Cache hit time: ${(this.results.caching.avgCacheHitTime * 1000).toFixed(3)}μs`);
    
    // Overall Assessment
    console.log('\n🎯 Overall Assessment:');
    
    const avgTranslationTime = this.results.translation.medium?.averageTime || 0;
    const memoryIncrease = this.results.memory.increase || 0;
    const maxConcurrentThroughput = Math.max(...Object.values(this.results.concurrent).map(r => r.translationsPerSecond));
    
    console.log(`   ✅ Average translation time: ${avgTranslationTime.toFixed(3)}ms`);
    console.log(`   ✅ Memory efficiency: ${memoryIncrease.toFixed(2)}MB increase`);
    console.log(`   ✅ Max concurrent throughput: ${maxConcurrentThroughput.toFixed(0)} t/s`);
    console.log(`   ✅ Caching provides ${this.results.caching.performanceImprovement.toFixed(0)}x performance boost`);
    
    // Performance Recommendations
    console.log('\n💡 Recommendations:');
    
    if (avgTranslationTime > 1) {
      console.log('   ⚠️  Consider optimizing translation lookup algorithm');
    }
    
    if (memoryIncrease > 30) {
      console.log('   ⚠️  Consider implementing lazy loading for large translation sets');
    }
    
    if (maxConcurrentThroughput < 1000) {
      console.log('   ⚠️  Consider adding more aggressive caching for high-concurrency scenarios');
    }
    
    console.log('\n🎉 Performance testing completed successfully!');
  }

  // Run all performance tests
  async runAllTests() {
    console.log('🔥 Starting Comprehensive i18n Performance Testing\n');
    
    try {
      this.testStartupPerformance();
      this.testTranslationPerformance();
      this.testMemoryUsage();
      this.testCachingEffectiveness();
      await this.testConcurrentPerformance();
      
      this.generateReport();
      
      return true;
    } catch (error) {
      console.error('❌ Performance testing failed:', error);
      return false;
    }
  }
}

// Run performance tests if called directly
if (require.main === module) {
  const tester = new PerformanceTester();
  
  tester.runAllTests()
    .then(success => {
      console.log('\n🏁 Performance testing completed');
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('❌ Performance testing crashed:', error);
      process.exit(1);
    });
}

module.exports = PerformanceTester; 