// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const numOfColumn = 2 * n - 1;
    const center = Math.floor(numOfColumn / 2)
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < numOfColumn; column++) {
            if (column >= center - row && column <= center + row) {
                level += '#'
            } else {
                level += ' '
            }
        }
        console.log(level)
    }
}

module.exports = pyramid;
