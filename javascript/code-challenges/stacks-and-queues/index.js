'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let removedValue = null;
    if (this.top) {
      removedValue = this.top.value;
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      if (this.front === this.back) {
        this.back = null;
      }
      this.front = this.front.next;
    }
    return removedValue;
  }

  peek() {
    if (this.front !== null) {
      return this.front.value;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueueAnimal(species, name) {
    let newNode = new Node(species, name);
    if (this.front) {
      this.back = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeueAnimal(pref) {
    let wantedAnimal = null;
    let currentAnimal = this.front;

    // if (currentAnimal.species === pref) {
    //   wantedAnimal = currentAnimal.name;
    //   this.front = currentAnimal.next;
    //   if (!this.front) {
    //     this.back = null;
    //   }
    // } else {
    while (currentAnimal.next) {
      if (currentAnimal.next.species === pref) {
        wantedAnimal = currentAnimal.next.name;
        currentAnimal.next = currentAnimal.next.next;
        if (!currentAnimal.next) {
          this.back = currentAnimal;
        }
        break;
      }
      currentAnimal = currentAnimal.next;
    }
    return wantedAnimal;
  }

  // }

  peek() {
    if (this.front !== null) {
      return this.front.value;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  Stack,
  Queue,
  AnimalShelter,
};
