/**
 * Creates a new stack.
 * @returns {Object} The stack object with push, pop, peek, isEmpty, and size methods.
 * @memberof DataStructures
 */
const createStack = () => {
    const stack = [];

    /**
     * Adds an element to the top of the stack.
     * @param {*} element - The element to be added to the stack.
     */
    const push = (element) => stack.push(element);

    /**
     * Removes and returns the element at the top of the stack.
     * @returns {*} The element removed from the top of the stack, or null if the stack is empty.
     */
    const pop = () => (isEmpty() ? null : stack.pop());

    /**
     * Returns the element at the top of the stack without removing it.
     * @returns {*} The element at the top of the stack, or null if the stack is empty.
     */
    const peek = () => (isEmpty() ? null : stack[stack.length - 1]);

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    const isEmpty = () => stack.length === 0;

    /**
     * Returns the number of elements in the stack.
     * @returns {number} The number of elements in the stack.
     */
    const size = () => stack.length;

    return { push, pop, peek, isEmpty, size };
};

// Example usage

// Create a new stack
const stack = createStack();

// Add elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // Output: 30

console.log(stack.pop());   // Output: 30

console.log(stack.size());  // Output: 2

console.log(stack.isEmpty());  // Output: false
