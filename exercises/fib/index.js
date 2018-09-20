// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// My iterative solution
// function fib(n) {
//     result = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         result[i] = result[i - 1] + result[i - 2];
//     }
//     return result[n];
// }

// My recursive solution
function fib(n, result = [0, 1]) {
    if (n <= 1) {
        return result[n];
    }
    if (result[n]) {
        return result[n]
    }

    return result[n] = fib(n - 1, result) + fib(n - 2, result);
}

module.exports = fib;
