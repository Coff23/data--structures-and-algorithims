'use strict';

const insert = (sorted, value) => {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
};

const insertionSort = (input) => {
  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
};

insertionSort([5, 2, 4, 6, 1, 3]);

module.exports = { insert, insertionSort };
