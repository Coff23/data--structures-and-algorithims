'use strict';

const {BinaryTree, Node} = require('./index');

describe('Binary tree testing', () => {
  test('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();

    expect(tree.root).toEqual(null);
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree();

    tree.root = new Node(10);

    expect(tree.root.value).toEqual(10);
  });

  test('Can add a left or right node to tree', () => {
    const tree = new BinaryTree();

    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);

    expect(tree.root.left.value).toEqual(5);
    expect(tree.root.right.value).toEqual(15);
  });

  test('Return pre-order traversal', () => {
    const tree = new BinaryTree();

    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);

    expect(tree.preOrder).toBeTruthy;
  });

  test('Return post-order traversal', () => {
    const tree = new BinaryTree();

    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);

    expect(tree.postOrder()).toEqual([5, 15, 10]);
    expect(tree.preOrder()).toEqual([10, 5, 15]);
    expect(tree.inOrder()).toEqual([5, 10, 15]);
  });
});
