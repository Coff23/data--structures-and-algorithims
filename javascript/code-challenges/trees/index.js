'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const results = [];

    const traverse = (node) => {
      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  postOrder(node = this.root) {
    const results = [];

    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        traverse(node.right);
        results.push(node.value);
      }
    };

    traverse(node);
    return results;
  }

  inOrder(node = this.root) {
    if (node === null) {
      return [];
    }

    const leftTraversal = this.inOrder(node.left);
    const currentNode = [node.value];
    const rightTraversal = this.inOrder(node.right);

    return [...leftTraversal, ...currentNode, ...rightTraversal];
  }

  findMax(node = this.root) {
    if (node === null)
      return Number.MIN_VALUE;

    let curr = node.value;
    let leftTraversal = this.findMax(node.left);
    let rightTraversal = this.findMax(node.right);

    if (leftTraversal > curr)
      curr = leftTraversal;
    if (rightTraversal > curr)
      curr = rightTraversal;
    return curr;
  }

  breadthFirst() {
    if (!this.root) {
      return [];
    }

    const queue = [this.root];
    const results = [];

    while (queue.length > 0) {
      const node = queue.shift();
      results.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return results;
  }

  fizzBuzzTree(node) {
    if (!node) { // Base case: empty node
      return null;
    }

    const newTree = new TreeNode(); // Create a new tree node

    // Check if the value of the current node is divisible by 3, 5, or both
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      newTree.value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      newTree.value = 'Fizz';
    } else if (node.value % 5 === 0) {
      newTree.value = 'Buzz';
    } else {
      newTree.value = node.value.toString(); // Convert the number to a string
    }

    // Recursively process the children of the current node
    newTree.left = this.fizzBuzzTree(node.left);
    newTree.right = this.fizzBuzzTree(node.right);

    return newTree;
  }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

let preResults = tree.preOrder();
let postResults = tree.postOrder(tree.root);
let results = tree.inOrder();
let maxResult = tree.findMax();
let bfs = tree.breadthFirst();
let fizz = tree.fizzBuzzTree(tree.root);


console.log('fizz', fizz);
console.log('bfs', bfs);
console.log('max', maxResult);
console.log('preorder', preResults);
console.log('postOrder', postResults);
console.log('in order', results);

module.exports = { BinaryTree, Node };
