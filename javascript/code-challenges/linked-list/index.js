'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  traversal() {
    let current = this.head;

    while(current){
      console.log(current.value);
      current = current.next;
    }
  }

  find(value) {
    let current = this.head;

    while(current) {
      if(current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  toStr(){
    let result = '';
    let current = this.head;
    while(current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';

    return result;
  }
}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));

module.exports = LinkedList;
