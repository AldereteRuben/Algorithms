/**
 * @namespace exercises
 */

/**
/**
 * Calculates the factorial of a given number.
 *
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} - The factorial of the given number.
 * @memberof exercises
 */
const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};

console.log(factorial(5)); // Output: 120
