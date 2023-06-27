'use strict';

const HashTable = require('./index');

describe('HashTable testing', () => {
  it('can successfully create a hashtable', () => {
    const table = new HashTable();

    expect(table).toBeTruthy;
  });
});
