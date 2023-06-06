'use strict';

class Node {
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

console.log('max', maxResult);
console.log('preorder', preResults);
console.log('postOrder', postResults);
console.log('in order', results);

module.exports = { BinaryTree, Node };
