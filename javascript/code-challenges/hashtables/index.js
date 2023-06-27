'use strict';

// const LinkedList = require('../linked-list/index');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');

    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    let position = this.hash(key);

    let data = { [key]: value };

    this.buckets[position] = data;
  }

  get(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      console.log(this.buckets[position]);

      return this.buckets[position][key];
    }
  }

  has(key){
    let position = this.hash(key);
    let result = this.buckets[position] ? true : false;
    return result;
  }

  keys(){
    let results = this.buckets.reduce((keysArr, bucket) => {
      if(bucket){
        return [...keysArr, ...Object.keys(bucket)];
      }
    }, []);
    return results;
  }

}

const table = new HashTable(1024);

console.log('table:', table);

let hashOne = table.hash('Josh');
let hashTwo = table.hash('Ksena');
console.log('hashOne', hashOne);
console.log('hashTwo', hashTwo);

table.set('Josh', 'this is my value');
table.set('Ksena', 'this is wifes value');

console.log('updated table', table);
console.log('get works!', table.get('Josh'));
console.log('has worked:', table.has('Josh')); // expect true
console.log('has worked:', table.has('Letti')); // expect false
let keys = table.keys();
console.log('keys:', keys);
