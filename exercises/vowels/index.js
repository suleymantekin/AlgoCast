// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// My solution
// function vowels(str) {
//     const vowels = 'aeiou';
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (vowels.indexOf(char) != -1) {
//             count++;
//         }
//     }
//     return count;
// }

// Iterative solution
function vowels(str) {
    const checker = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }
    return count;
}

module.exports = vowels;
