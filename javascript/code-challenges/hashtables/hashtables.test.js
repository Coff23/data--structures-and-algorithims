'use strict';

const HashTable = require('./index');

describe('HashTable testing', () => {
  it('can successfully create a hashtable', () => {
    const table = new HashTable(1024);
    expect(table.size).toEqual(1024);
  });

  it('should hash a key to an in-range value', () => {
    const table = new HashTable(1024);
    const hash = table.hash('test key');
    expect(hash).toBeLessThanOrEqual(1024);
    expect(hash).toBeGreaterThanOrEqual(0);
  });

  it('should set a key/value pair', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    const hash = table.hash('test key');
    expect(table.buckets[hash]).toBeDefined();
  });

  it('should retrieve a value from the hash table by key', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    const value = table.get('test key');
    expect(value).toEqual('test value');
  });

  it('should return null for a key that does not exist', () => {
    const table = new HashTable(1024);
    const value = table.get('test key');
    expect(value).toBeFalsy;
  });

  it('should successfully handle a collision', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    table.set('test key', 'test value');
    table.set('test key', 'test value');
    const hash = table.hash('test key');
    expect(table.buckets[hash]).toBeDefined();
  });

  it('should successfully retrieve a value from a bucket within the hash table that has a collision', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    table.set('test key', 'test value');
    const value = table.get('test key');
    expect(value).toEqual('test value');
  });

  it('Successfully returns a list of all unique keys that exist', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    table.set('test key two', 'test value two');
    table.set('test key three', 'test value three');
    const keys = table.keys();
    expect(keys).toEqual(['test key', 'test key two', 'test key three']);
  });

  it('should handle collisions with different keys', () => {
    const table = new HashTable(1024);
    table.set('key1', 'value1');
    table.set('key2', 'value2');
    const hash1 = table.hash('key1');
    const hash2 = table.hash('key2');
    expect(table.buckets[hash1]).toBeDefined();
    expect(table.buckets[hash2]).toBeDefined();
    expect(table.get('key1')).toEqual('value1');
    expect(table.get('key2')).toEqual('value2');
  });

  it('should handle collisions with the same key', () => {
    const table = new HashTable(1024);
    table.set('key', 'value1');
    table.set('key', 'value2');
    table.set('key', 'value3');
    const hash = table.hash('key');
    expect(table.buckets[hash]).toBeDefined();
    expect(table.get('key')).toEqual('value3');
  });

  it('should handle a hash table of size 1', () => {
    const table = new HashTable(1);
    table.set('key', 'value');
    expect(table.get('key')).toEqual('value');
  });

  it('should handle an empty key or value', () => {
    const table = new HashTable(1024);
    table.set('', 'empty key');
    table.set('test key', '');
    expect(table.get('')).toEqual('empty key');
    expect(table.get('test key')).toEqual('');
  });

  it('should handle special characters and numbers in the key', () => {
    const table = new HashTable(1024);
    table.set('test.key', 'special character key');
    table.set('123', 'number key');
    expect(table.get('test.key')).toEqual('special character key');
    expect(table.get('123')).toEqual('number key');
  });

  it('should handle very long keys', () => {
    const table = new HashTable(1024);
    const longKey = 'a'.repeat(10000);
    table.set(longKey, 'long key');
    expect(table.get(longKey)).toEqual('long key');
  });

  it('should return false for a non-existent key when using "has" method', () => {
    const table = new HashTable(1024);
    expect(table.has('non-existent-key')).toBe(false);
  });

  it('should return null for a non-existent key when using "get" method', () => {
    const table = new HashTable(1024);
    const value = table.get('non-existent-key');
    expect(value).toBeUndefined();
  });

  it('should find the first repeated word in a string', () => {
    const table = new HashTable(1024);
    const string = 'Hello world hello';
    const expected = 'hello';

    const result = table.repeatedWord(string);
    expect(result).toEqual(expected);
  });

  it('no string repeats should return null', () => {
    const table = new HashTable(1024);
    const string = 'Hello world yo';
    const expected = null;

    const result = table.repeatedWord(string);
    expect(result).toEqual(expected);
  });

});

describe('HashTable', () => {
  describe('leftJoin', () => {
    it('should perform a left join on two hashmaps correctly', () => {
      const hashTable = new HashTable(10);

      const hashmap1 = {
        'apple': 'fruit',
        'carrot': 'vegetable',
        'banana': 'fruit'
      };

      const hashmap2 = {
        'apple': 'red',
        'carrot': 'orange'
      };

      const expectedJoinResult = [
        ['apple', 'fruit', 'red'],
        ['carrot', 'vegetable', 'orange'],
        ['banana', 'fruit', null]
      ];

      const actualJoinResult = hashTable.leftJoin(hashmap1, hashmap2);
      expect(actualJoinResult).toEqual(expectedJoinResult);
    });

    it('should handle cases where hashmap2 has no matching keys correctly', () => {
      const hashTable = new HashTable(10);

      const hashmap1 = {
        'apple': 'fruit',
        'carrot': 'vegetable',
        'banana': 'fruit'
      };

      const hashmap2 = {};

      const expectedJoinResult = [
        ['apple', 'fruit', null],
        ['carrot', 'vegetable', null],
        ['banana', 'fruit', null]
      ];

      const actualJoinResult = hashTable.leftJoin(hashmap1, hashmap2);
      expect(actualJoinResult).toEqual(expectedJoinResult);
    });

    // Add more test cases as needed

  });
});
