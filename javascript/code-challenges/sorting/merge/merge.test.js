'use strict';

const { mergeSort } = require('./merge');

describe('merge sort testing', () => {
  it('should sort an array', () => {
    const arr = [7, 3, 6, 7, 9, 2, 10];
    mergeSort(arr);
    expect(arr).toEqual([2, 3, 6, 7, 7, 9, 10]);
  });
});
