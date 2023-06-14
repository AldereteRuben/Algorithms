/**
 * @namespace sorting
 */

/**
 * Sorts an array using the QuickSort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 * @memberof sorting
 */
const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[array.length - 1];
    let { less, greater, equal } = partition(array, pivot);

    // Recursively sorts the smaller and greater subarrays,
    // and concatenates them along with the equal subarray.
    return [...quickSort(less), ...equal, ...quickSort(greater)];
}

/**
 * Partitions an array into smaller, greater, and equal subarrays based on a pivot.
 * @param {Array} array - The array to be partitioned.
 * @param {*} pivot - The pivot used for partitioning.
 * @returns {Object} - An object containing the smaller, greater, and equal subarrays.
 * @memberof sorting.quickSort
 */
const partition = (array, pivot) => {
    let less = [];
    let greater = [];
    let equal = [];
    for (let i = 0; i < array.length; i++) {
        if (pivot > array[i]) {
            less.push(array[i]);
        } else if (pivot < array[i]) {
            greater.push(array[i]);
        } else {
            equal.push(array[i]);
        }
    }
    return { less, greater, equal };
}

// Usage example:
const array = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(quickSort(array));
