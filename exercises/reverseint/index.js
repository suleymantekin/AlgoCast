// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const flag = n < 0;
    if (flag) {
        n = Math.abs(n)
    }
    let res = 0;
    while (n > 0) {
        res = res * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return flag ? res * (-1) : res;
}

module.exports = reverseInt;
