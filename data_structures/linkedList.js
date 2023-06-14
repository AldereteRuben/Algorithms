/**
 * Class representing a node in the linked list.
 */
class Node {
    /**
     * Creates a new node with the specified data.
     * @param {*} data - The value stored in the node.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class representing a linked list.
 */
class LinkedList {
    /**
     * Creates a new instance of the linked list.
     */
    constructor() {
        this.head = null;
    }

    /**
     * Inserts an element at the end of the list.
     * @param {*} data - The value of the element to insert.
     */
    append(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            // If the list is empty, the new node becomes the head node
            this.head = newNode;
        } else {
            // If the list is not empty, we traverse the list to the last node and link the new node at the end
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    /**
     * Traverses and displays the elements of the list.
     */
    display = () => {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage

// Create a new instance of LinkedList
const list = new LinkedList();

// Add elements to the list
list.append(10);
list.append(20);
list.append(30);

// Display the elements of the list
list.display();  // Output: 10, 20, 30
