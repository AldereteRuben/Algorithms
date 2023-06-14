/**
 * @namespace searching
 */

/**
 * Performs a binary search on a sorted array to determine if a value is present or not.
 *
 * @param {Array} array - The sorted array to perform the search on.
 * @param {*} value - The value to search for in the array.
 * @returns {boolean} Returns true if the value is present in the array, or false otherwise.
 * @memberof searching
 */
const binarySearch = (array, value) => {
    let left = 0;
    let right = array.length;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let middleElement = array[middle];
        if (middleElement === value) {
            return true;
        } else if (value < middleElement) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return false;
};

const array = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(array, 7));
