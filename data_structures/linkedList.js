/**
 * @namespace data_structures
 */

/**
 * Creates a new node with the specified data.
 * @param {*} data - The value stored in the node.
 * @returns {Object} The node object.
 * @memberof data_structures.linkedList
 */
const createNode = (data) => {
    return {
        data: data,
        next: null,
    };
};

/**
 * Creates a new linked list.
 * @returns {Object} The linked list object with append and display methods.
 * @memberof data_structures
 */
const linkedList = () => {
    let head = null;

    /**
     * Inserts an element at the end of the list.
     * @memberof data_structures.linkedList
     * @param {*} data - The value of the element to insert.
     */
    const append = (data) => {
        const newNode = createNode(data);

        if (head === null) {
            head = newNode;
        } else {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    };

    /**
     * Traverses and displays the elements of the list.
     * @memberof data_structures.linkedList
     */
    const display = () => {
        let current = head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    };

    return {
        append,
        display,
    };
};

// Example usage

// Create a new linked list
const list = linkedList();

// Add elements to the list
list.append(10);
list.append(20);
list.append(30);

// Display the elements of the list
list.display();  // Output: 10, 20, 30
