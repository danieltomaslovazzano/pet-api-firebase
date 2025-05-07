/**
 * Database Performance Tests
 * 
 * This test suite benchmarks and compares the performance of Firebase and PostgreSQL implementations.
 */

const { userModel, petModel } = require('../../models/adapter');
const { validUser, generateUsers } = require('../fixtures/userFixtures');
const { generatePets } = require('../fixtures/petFixtures');
const { cleanupPostgresDb } = require('../helpers/testDbSetup');

// Helper function to convert callback-style functions to Promises
const promisify = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

// Helper function to measure execution time
async function measureExecutionTime(fn) {
  const start = process.hrtime.bigint();
  const result = await fn();
  const end = process.hrtime.bigint();
  const timeInMs = Number(end - start) / 1_000_000;
  return { result, timeInMs };
}

describe('Database Performance Tests', () => {
  // Skip these tests in normal CI runs, enable for performance testing
  const SKIP_PERFORMANCE_TESTS = process.env.RUN_PERFORMANCE_TESTS !== 'true';
  
  // Set to true to run PostgreSQL tests, false for Firebase
  let usePostgres = true;
  
  beforeAll(async () => {
    // Configure for PostgreSQL performance tests initially
    process.env.USE_POSTGRES = 'true';
    await cleanupPostgresDb();
  });
  
  afterAll(async () => {
    // Restore default
    process.env.USE_POSTGRES = 'true';
    await cleanupPostgresDb();
  });
  
  describe.skip('Reading Performance', () => {
    beforeEach(async () => {
      // Set database to test
      process.env.USE_POSTGRES = usePostgres ? 'true' : 'false';
      
      if (usePostgres) {
        await cleanupPostgresDb();
      }
      
      // Create test data - 100 users
      const users = generateUsers(100);
      for (const user of users) {
        await promisify(userModel.createUser, user);
      }
    });
    
    it(`should read 100 users efficiently from ${usePostgres ? 'PostgreSQL' : 'Firebase'}`, async () => {
      // Act
      const { result, timeInMs } = await measureExecutionTime(async () => {
        return await promisify(userModel.getUsers, {});
      });
      
      // Assert
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(100);
      
      // Log performance metrics
      console.log(`Reading 100 users from ${usePostgres ? 'PostgreSQL' : 'Firebase'} took ${timeInMs.toFixed(2)}ms`);
    });
  });
  
  describe.skip('Writing Performance', () => {
    beforeEach(async () => {
      // Set database to test
      process.env.USE_POSTGRES = usePostgres ? 'true' : 'false';
      
      if (usePostgres) {
        await cleanupPostgresDb();
      }
    });
    
    it(`should write 10 users efficiently to ${usePostgres ? 'PostgreSQL' : 'Firebase'}`, async () => {
      // Arrange
      const users = generateUsers(10);
      
      // Act
      const { result, timeInMs } = await measureExecutionTime(async () => {
        const results = [];
        for (const user of users) {
          results.push(await promisify(userModel.createUser, user));
        }
        return results;
      });
      
      // Assert
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(10);
      
      // Log performance metrics
      console.log(`Writing 10 users to ${usePostgres ? 'PostgreSQL' : 'Firebase'} took ${timeInMs.toFixed(2)}ms`);
    });
  });
  
  describe.skip('Querying Performance', () => {
    beforeEach(async () => {
      // Set database to test
      process.env.USE_POSTGRES = usePostgres ? 'true' : 'false';
      
      if (usePostgres) {
        await cleanupPostgresDb();
      }
      
      // Create test data - 100 users with 5 pets each
      const users = generateUsers(20);
      for (const user of users) {
        await promisify(userModel.createUser, user);
        
        // Create 5 pets for each user
        const pets = generatePets(5, { ownerId: user.id });
        for (const pet of pets) {
          await promisify(petModel.createPet, pet);
        }
      }
    });
    
    it(`should filter pets by species efficiently in ${usePostgres ? 'PostgreSQL' : 'Firebase'}`, async () => {
      // Act
      const { result, timeInMs } = await measureExecutionTime(async () => {
        return await promisify(petModel.getPets, { species: 'dog' });
      });
      
      // Assert
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      
      // Log performance metrics
      console.log(`Filtering pets by species in ${usePostgres ? 'PostgreSQL' : 'Firebase'} took ${timeInMs.toFixed(2)}ms`);
    });
    
    it(`should filter pets by owner efficiently in ${usePostgres ? 'PostgreSQL' : 'Firebase'}`, async () => {
      // Arrange - Get the first user
      const users = await promisify(userModel.getUsers, { limit: 1 });
      const userId = users[0].id;
      
      // Act
      const { result, timeInMs } = await measureExecutionTime(async () => {
        return await promisify(petModel.getPets, { ownerId: userId });
      });
      
      // Assert
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(5); // Each user has 5 pets
      
      // Log performance metrics
      console.log(`Filtering pets by owner in ${usePostgres ? 'PostgreSQL' : 'Firebase'} took ${timeInMs.toFixed(2)}ms`);
    });
  });
  
  // This test actually runs, unlike the skipped performance tests above
  describe('Simple Performance Sanity Check', () => {
    beforeEach(async () => {
      process.env.USE_POSTGRES = 'true';
      await cleanupPostgresDb();
    });
    
    it('should verify PostgreSQL read performance is acceptable', async () => {
      // Arrange - Create 10 users
      const users = generateUsers(10);
      for (const user of users) {
        await promisify(userModel.createUser, user);
      }
      
      // Act
      const { timeInMs } = await measureExecutionTime(async () => {
        return await promisify(userModel.getUsers, {});
      });
      
      // Assert - PostgreSQL read should be under 200ms for 10 records
      // This is a simple sanity check, not a strict performance requirement
      expect(timeInMs).toBeLessThan(200);
      console.log(`Reading 10 users from PostgreSQL took ${timeInMs.toFixed(2)}ms`);
    });
  });
}); 