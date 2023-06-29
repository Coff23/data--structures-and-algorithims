# Tree Intersection
This is a code challenge that involves finding the common values between two binary trees. The implementation utilizes a hashmap to efficiently store and compare values.

## Author

Joshua Coffey

## Whiteboard

![Whiteboard](../assets/challenge32.png)

## Collaborators

- Nick Mullaney: Helped with completing this assignment.
- ChatGPT: Helped with the testing.

## Approach and Algorithm

The `treeIntersection` function takes two binary trees as parameters: `tree1` and `tree2`. The implementation follows these steps:

1. Create an empty hashmap called `tree1Values` to store the values of `tree1`.
2. Use a helper function called `populateTree1Values` to populate the `tree1Values` hashmap by traversing all the nodes of `tree1`. The function recursively adds the node values to the hashmap.
3. Use another helper function called `findCommonValues` to find common values between `tree1` and `tree2`. This function recursively traverses the nodes of `tree2` and checks if each node value exists in the `tree1Values` hashmap. If a common value is found, it is added to the `commonValues` set.
4. Call the `populateTree1Values` function with `tree1` to populate the `tree1Values` hashmap.
5. Create an empty set called `commonValues` to store the common values.
6. Call the `findCommonValues` function with `tree2` and `commonValues` to find and add common values to the set.
7. Return the `commonValues` set, which contains the common values found in both trees.

## Example Usage

```javascript
const { Node, treeIntersection } = require('./your-file'); // Replace 'your-file' with the actual file path
// Create the binary trees
const tree1 = new Node(1);
tree1.left = new Node(2);
tree1.right = new Node(3);
// ...
const tree2 = new Node(2);
tree2.left = new Node(4);
tree2.right = new Node(6);
// ...
// Find the common values
const commonValues = treeIntersection(tree1, tree2);
console.log(commonValues); // Set { 2 }
```

## Complexity Analysis

The time complexity of the `treeIntersection` function is O(n + m), where n and m are the numbers of nodes in `tree1` and `tree2`, respectively. The function traverses all the nodes of both trees and performs constant-time lookups in the hashmap.
The space complexity is O(max(n, m)), as it depends on the space used to store the hashmap (`tree1Values`) and the set of common values (`commonValues`). The space required for the hashmap is proportional to the number of distinct values in `tree1`, while the space required for the set depends on the number of common values found between the trees.

## Tests

The functionality of the `treeIntersection` function can be validated using tests. Here are some examples of tests that can be written using the Jest testing framework:

```javascript
const { Node, treeIntersection } = require('./your-file'); // Replace 'your-file' with the actual file path
describe('Tree Intersection', () => {
  // Test case 1
  test('Returns the set of common values', () => {
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);
    // ...
    const tree2 = new Node(2);
    tree2.left = new Node(4);
    tree2.right = new Node(6);
    // ...
    const commonValues = treeIntersection(tree1, tree2);
    expect(commonValues).toEqual(new Set([2]));
  });
  // Test case 2
  test('Returns an empty set when either tree is null', () => {
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);
    // ...
    const commonValues1 = treeIntersection(tree1, null);
    const commonValues2 = treeIntersection(null, tree1);
    const commonValues3 = treeIntersection(null, null);
    expect(commonValues1.size).toBe(0);
    expect(commonValues2.size).toBe(0);
    expect(commonValues3.size).toBe(0);
  });
  // Add more test cases as needed
});
```

To run the tests, make sure you have Jest installed (`npm install jest`) and then execute the following command:

```
npm test
```
