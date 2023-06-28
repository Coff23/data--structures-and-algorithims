const { Node, treeIntersection } = require('./treeIntersection'); // Replace 'your-file' with the actual file path
const { Node } = require('../code-challenges/')

describe('Tree Intersection', () => {
  // Create the binary trees for testing
  const tree1 = new Node(1);
  tree1.left = new Node(2);
  tree1.right = new Node(3);
  tree1.left.left = new Node(4);
  tree1.left.right = new Node(5);
  tree1.right.left = new Node(6);
  tree1.right.right = new Node(7);
  const tree2 = new Node(2);
  tree2.left = new Node(4);
  tree2.right = new Node(6);
  tree2.left.left = new Node(8);
  tree2.left.right = new Node(9);
  tree2.right.left = new Node(10);
  tree2.right.right = new Node(11);
  test('Returns the set of common values', () => {
    const commonValues = treeIntersection(tree1, tree2);
    const expectedSet = new Set([2, 4, 6]);
    expect(commonValues).toEqual(expectedSet);
  });
  test('Returns an empty set when either tree is null', () => {
    const commonValues1 = treeIntersection(tree1, null);
    const commonValues2 = treeIntersection(null, tree2);
    const commonValues3 = treeIntersection(null, null);
    expect(commonValues1.size).toBe(0);
    expect(commonValues2.size).toBe(0);
    expect(commonValues3.size).toBe(0);
  });
  // Add more test cases as needed
});
