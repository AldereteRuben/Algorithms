/**
 * @namespace exercises
 */

/**
/**
 * Calculates the Fibonacci sequence up to the given term.
 *
 * @param {number} num - The number of terms in the sequence to calculate.
 * @returns {Array} - An array containing the Fibonacci sequence.
 * @memberof exercises
 */
const fibonacci = (num) => {
    let sequence = [];

    if (num <= 0) {
        return [];
    } else if (num === 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    } else {
        sequence = [0, 1];
        for (let i = 2; i < num; i++) {
            const temp = sequence[i - 1] + sequence[i - 2];
            sequence.push(temp);
        }
        return sequence;
    }
};

console.log(fibonacci(6));
