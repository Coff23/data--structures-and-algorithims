'use strict';

class Node {
  constructor(value) {
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

  insertBefore(value, target) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (this.head.value === target) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (currentNode.value === target) {
        node.next = currentNode;
        prevNode.next = node;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = node;
  }

  insertAfter(value, target) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === target) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  traversal() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  toStr() {
    let result = '';
    let current = this.head;
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';

    return result;
  }

  kthFromEnd(k) {
    let p1 = this.head;
    let p2 = this.head;

    for(let i = 0; i < k; i++) {
      if(p2 === null) return null;
      p2 = p2.next;
    }
    while(p2 !== null && p2.next !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1.value;
  }
}

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));

module.exports = LinkedList;
