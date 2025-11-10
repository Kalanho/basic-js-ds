const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = this._addNode(this._root, data);
  }

  _addNode(node, data) {
    if (node === null) {
      return new Node(data);
    }
    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._addNode(node.right, data);
    }
    // If data is equal, do not add duplicates, or handle duplicates as needed
    return node;
  }

  find(data) {
    return this._findNode(this._root, data);
  }

  _findNode(node, data) {
    if (node === null) return null;
    if (data === node.data) return node;
    if (data < node.data) return this._findNode(node.left, data);
    return this._findNode(node.right, data);
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) return null;
    if (data === node.data) {
      // Node with only one child or no child
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      let minNode = this._minNode(node.right);
      node.data = minNode.data;
      node.right = this._removeNode(node.right, minNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  min() {
    if (this._root === null) return null;
    return this._minNode(this._root).data;
  }

  _minNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max() {
    if (this._root === null) return null;
    return this._maxNode(this._root).data;
  }

  _maxNode(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree
};