'use strict';

const { insertionSort } = require('./insertion');

describe('insertionSort', () => {
  it('sort an array in ascending order', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('sort an array with duplicate values', () => {
    const input = [3, 1, 2, 1, 3, 2];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it('sort an array with negative values', () => {
    const input = [-5, -2, 4, -6, 1, 0];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([-6, -5, -2, 0, 1, 4]);
  });

  it('return an empty array when input is empty', () => {
    const input = [];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([undefined]);
  });

  it('return the input array with a single element', () => {
    const input = [42];
    const sorted = insertionSort(input);
    expect(sorted).toEqual([42]);
  });
});
