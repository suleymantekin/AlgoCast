// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Use array reverse method
// function reverse(str) {
//     const arr = str.split('');
//     return arr.reverse().join('');
// }

// Loop over the string
function reverse(str) {
    let reverse = '';
    for (let char of str) {
        reverse = char + reverse;
    }
    return reverse;
}

module.exports = reverse;
