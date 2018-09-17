// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//My solution
function anagrams(stringA, stringB) {
    const map1 = buildCharMap(stringA);
    const map2 = buildCharMap(stringB);

    if (map1.size !== map2.size) {
        return false;
    }

    for (let [key, val] of map1) {
        if (val !== map2.get(key)) {
            return false
        }
    }
    return true;
}

function buildCharMap(string) {
    const map = new Map();
    for (let char of string.replace(/[^\w]/g).toLowerCase()) {
        map.set(char, map.get(char) + 1 || 1);
    }
    return map;
}

module.exports = anagrams;
