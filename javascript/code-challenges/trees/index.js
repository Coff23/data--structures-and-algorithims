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

      if(node.left) {
        traverse(node.left);
      }
      if(node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

let results = tree.preOrder();
console.log('preorder', results);
