/**
 * Sorts an array using the Insertion Sort algorithm.
 *
 * @returns {Array} The sorted array in ascending order.
 * @memberof sorting
 */
let insertionSort = () => {
    let array = [5, 2, 4, 6, 1, 3];

    /**
     * Iterates through the array and places each element in its correct position.
     * @returns {Array} The sorted array in ascending order.
     */
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        /**
         * Shifts the larger elements to the right to make space
         * for the current element and inserts it at the correct position.
         */
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j -= 1;
        }

        array[j + 1] = temp;
    }

    return array;
};

// Executes the Insertion Sort algorithm and displays the result.
console.log(insertionSort());
