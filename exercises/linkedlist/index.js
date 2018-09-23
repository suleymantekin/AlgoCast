// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        if (!this.head) {
            return 0;
        }
        let counter = 1;
        let head = this.head;
        while (head.next !== null) {
            counter++;
            head = head.next;
        }
        return counter;
    }
}

module.exports = { Node, LinkedList };
