/**
 * Basic Test Suite
 * 
 * A simple test suite to demonstrate the testing approach without dependencies.
 */

describe('Basic Tests', () => {
  it('should properly support arithmetic operations', () => {
    expect(1 + 1).toBe(2);
    expect(10 - 5).toBe(5);
    expect(3 * 4).toBe(12);
    expect(10 / 2).toBe(5);
  });
  
  it('should support array operations', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.length).toBe(5);
    expect(arr.map(x => x * 2)).toEqual([2, 4, 6, 8, 10]);
    expect(arr.filter(x => x % 2 === 0)).toEqual([2, 4]);
  });
  
  it('should support object operations', () => {
    const obj = { name: 'Test', value: 42 };
    expect(obj.name).toBe('Test');
    expect(obj.value).toBe(42);
    
    // Update property
    obj.name = 'Updated';
    expect(obj.name).toBe('Updated');
    
    // Add property
    obj.newProp = true;
    expect(obj.newProp).toBe(true);
  });
  
  it('should support async operations with promises', async () => {
    const asyncFunc = () => Promise.resolve('success');
    const result = await asyncFunc();
    expect(result).toBe('success');
  });
}); 