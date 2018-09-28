// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let children = [root, 's'];
    let result = [0];
    while (children.length > 1) {
        let element = children.shift();
        if (element === 's') {
            result.push(0);
            children.push('s');
        } else {
            children.push(...element.children);
            result[result.length - 1]++;
        }
    }

    return result;
}

module.exports = levelWidth;
