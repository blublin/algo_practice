class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    insert = (node, currentNode = undefined) => {
        // single outside check for currentNode
        if (!currentNode) {
            // First iteration, currentNode is undefined
            if (currentNode === undefined) {
                currentNode = this.root
            }
            // If BST is empty
            if (currentNode === null) {
                this.root = node;
                return;
            }
        }

        // If value is greater than current
        if (node.value > currentNode.value) {
            // If right side exists
            if (currentNode.right) {
                // recursively call insert as we need to go deeper
                return this.insert(node, currentNode.right)
            }
            else {
                // .right is null, so we found where our node goes
                currentNode.right = node
                return;
            }
        }
        // assuming no equal value to current
        else {
            // If left side exists
            if (currentNode.left) {
                return this.insert(node, currentNode.left)
            }
            else {
                currentNode.left = node;
                return;
            }
        }
    }
}