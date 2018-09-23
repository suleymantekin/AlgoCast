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

    // My implementation
    // size() {
    //     if (!this.head) {
    //         return 0;
    //     }
    //     let counter = 1;
    //     let head = this.head;
    //     while (head.next !== null) {
    //         counter++;
    //         head = head.next;
    //     }
    //     return counter;
    // }

    // His implementation
    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
