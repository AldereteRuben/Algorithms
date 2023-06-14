/**
 * Creates a new queue.
 * @returns {Object} The queue object with enqueue, dequeue, front, isEmpty, and size methods.
 * @memberof DataStructures
 */
const Queue = () => {
    const queue = [];

    /**
     * Adds an element to the end of the queue.
     * @param {*} element - The element to be added to the queue.
     */
    const enqueue = (element) => {
        queue.push(element);
    };

    /**
     * Removes and returns the element at the front of the queue.
     * @returns {*} The element removed from the front of the queue, or null if the queue is empty.
     */
    const dequeue = () => {
        if (isEmpty()) {
            return null;
        }
        return queue.shift();
    };

    /**
     * Returns the element at the front of the queue without removing it.
     * @returns {*} The element at the front of the queue, or null if the queue is empty.
     */
    const front = () => {
        if (isEmpty()) {
            return null;
        }
        return queue[0];
    };

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue is empty, false otherwise.
     */
    const isEmpty = () => {
        return queue.length === 0;
    };

    /**
     * Returns the number of elements in the queue.
     * @returns {number} The number of elements in the queue.
     */
    const size = () => {
        return queue.length;
    };

    return {
        enqueue,
        dequeue,
        front,
        isEmpty,
        size,
    };
};

// Example usage

// Create a new queue
const queue = Queue();

// Add elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front());  // Output: 10

console.log(queue.dequeue());   // Output: 10

console.log(queue.size());  // Output: 2

console.log(queue.isEmpty());  // Output: false
