'use strict';

function treeIntersection(tree1, tree2) {

  const tree1Values = {};

  function populateTree1Values(root) {
    if (root === null) {
      return;
    }

    tree1Values[root.value] = true;
    populateTree1Values(root.left);
    populateTree1Values(root.right);
  }

  function findCommonValues(root, commonValues) {
    if (root === null) {
      return;
    }

    if (tree1Values[root.value]) {
      commonValues.add(root.value);
    }

    findCommonValues(root.left, commonValues);
    findCommonValues(root.right, commonValues);
  }
  populateTree1Values(tree1);

  const commonValues = new Set();

  findCommonValues(tree2, commonValues);

  // Return the set of common values
  return commonValues;
}

module.exports = treeIntersection;
