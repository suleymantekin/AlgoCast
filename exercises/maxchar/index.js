// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = new Map();
    for (let char of str) {
        map.set(char, map.get(char) + 1 || 1);
    }

    let max = str[0];
    for (let [key, val] of map) {
        if (val > map.get(max)) {
            max = key;
        }
    }
    return max;
}

module.exports = maxChar;
