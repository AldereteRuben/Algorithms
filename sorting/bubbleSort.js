/**
 * Sorts an array using the Bubble Sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array in ascending order.
 */
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Usage example:
const array = [5, 3, 1, 2, 4, 6, 7, 8];
console.log(bubbleSort(array));
