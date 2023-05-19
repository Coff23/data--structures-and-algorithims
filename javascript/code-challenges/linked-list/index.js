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
      this.head =node;
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
}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(list);

module.exports = {
  LinkedList
};
