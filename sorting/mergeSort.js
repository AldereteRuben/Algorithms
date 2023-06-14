/**
 * @namespace sorting
 */

/**
 * Sorts an array using the Merge Sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array in ascending order.
 * @memberof sorting
 */
const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Combines and sorts two arrays into a single one.
 *
 * @param {Array} left - The first array to combine.
 * @param {Array} right - The second array to combine.
 * @returns {Array} - The combined and sorted array in ascending order.
 * @memberof sorting.mergeSort
 */
const merge = (left, right) => {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }

    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }

    return merged;
}

// Usage example:
const array = [5, 6, 1, 3, 2, 4];
console.log(mergeSort(array));
