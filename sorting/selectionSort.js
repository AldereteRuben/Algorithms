/**
 * Sorts an array using the Selection Sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array in ascending order.
 */
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

// Usage example:
const array = [7, 3, 5, 1, 9, 2];
console.log(selectionSort(array));
