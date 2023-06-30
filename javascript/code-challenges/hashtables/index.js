'use strict';

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

  repeatedWord(string) {
    // Convert the string to lowercase and remove any punctuation
    const cleanedString = string.toLowerCase().replace(/[^\w\s]/g, '');

    // Split the string into individual words
    const words = cleanedString.split(' ');

    // Create an empty hashmap to store word occurrences
    const wordOccurrences = new Map();

    // Iterate through each word in the string
    for (let word of words) {
      // If the word is already in the hashmap, it is repeated
      if (wordOccurrences.has(word)) {
        return word;
      }
      // Otherwise, add the word to the hashmap with an initial count of 1
      wordOccurrences.set(word, 1);
    }

    // If no repeated word is found, return null or an appropriate message
    return null;
  }

  leftJoin(hashmap1, hashmap2) {
    const result = [];

    for (let key in hashmap1) {
      const row = [key, hashmap1[key], hashmap2[key] || null];
      result.push(row);
    }

    return result;
  }

}

module.exports = HashTable;
