/**
 * @namespace data_structures
 */

/**
 * Creates a new node for the binary tree.
 * @class
 * @classdesc Represents a node in the binary tree.
 * @memberof data_structures.BinaryTree
 * @param {any} value - The value stored in the node.
 */
const Node = (value) => {
    return {
        data: value,
        left: null,
        right: null,
    };
};

/**
 * Creates a new binary tree.
 * @class
 * @classdesc Represents a binary tree.
 * @memberof data_structures
 */
const BinaryTree = () => {
    let root = null;

    /**
     * Inserts a new node into the binary tree.
     * @memberof data_structures.BinaryTree
     * @param {any} value - The value to insert.
     */
    const insert = (value) => {
        if (root === null) {
            root = Node(value);
        } else {
            insertRecursive(root, value);
        }
    };

    /**
     * Inserts a new node recursively into the binary tree.
     * @memberof data_structures.BinaryTree
     * @param {Node} node - The current node.
     * @param {any} value - The value to insert.
     */
    const insertRecursive = (node, value) => {
        if (value < node.data) {
            if (node.left === null) {
                node.left = Node(value);
            } else {
                insertRecursive(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = Node(value);
            } else {
                insertRecursive(node.right, value);
            }
        }
    };

    return {
        insert,
    };
};

// Example usage

// Create a new binary tree
const tree = BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);
