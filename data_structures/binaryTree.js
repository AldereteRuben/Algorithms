// Definición de la clase Node
class Node {
    /**
     * Constructor de la clase Node.
     * @param {any} value - Valor del nodo.
     */
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

// Definición de la clase BinaryTree
class BinaryTree {
    /**
     * Constructor de la clase BinaryTree.
     */
    constructor() {
        this.root = null;
    }

    /**
     * Inserta un nuevo nodo en el árbol binario.
     * @param {any} value - Valor a insertar.
     */
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this.insertRecursive(this.root, value);
        }
    }

    /**
     * Inserta un nuevo nodo de manera recursiva en el árbol binario.
     * @param {Node} node - Nodo actual.
     * @param {any} value - Valor a insertar.
     */
    insertRecursive(node, value) {
        if (value < node.data) {
            if (node.left === null) {
                node.left = new Node(value);
            } else {
                this.insertRecursive(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(value);
            } else {
                this.insertRecursive(node.right, value);
            }
        }
    }


}

// Ejemplo de uso
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);

