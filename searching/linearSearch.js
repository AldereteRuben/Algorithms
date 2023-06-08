/**
 * Performs a linear search in an array to find a specific element.
 * @param {Array} array - The array in which the search will be performed.
 * @param {*} target - The element to be found in the array.
 * @returns {boolean} - Returns true if the element is found in the array, otherwise returns false.
 */
const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return true;
        }
    }
    return false;
}

// Usage example
const array = [1, 4, 6, 2, 3];
console.log(linearSearch(array, 6));
