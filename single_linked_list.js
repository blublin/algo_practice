class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SingleLinkedList {
    constructor () {
        this.head = null;
    }

    addToFront( node ) {
        node.next = this.head;
        this.head = node;
    }

    size = () => {
        let count = 0;
        let runner = this.head;

        while (runner) {
            count++;
            runner = runner.next();
        }
        return count;
    }

    findNthLink = n => {
        let runner = this.head;
        let frontRunner = this.head;
        for (let i = 0; i < n; i++) {
            if (frontRunner){
                frontRunner = frontRunner.next;
            }
            else {
                // Linked list isn't n long
                return frontRunner.value
            }
        }
        while(frontRunner.next !== null){
            frontRunner = frontRunner.next;
            runner = runner.next;
        }
        return runner.value;
    }

    reverseSLL = () => {
        let back = null;
        let runner = this.head;
        let front = null;

        while (runner) {
        front = runner.next;
        runner.next = back;
        back = runner;
        runner = front;
        }
        this.head = back;
    }

    deleteNode(val) {
        let runner = this.head;
        if (runner) {
            if (runner.value === val) {
                let rtnNode = runner;
                this.head = runner.next;
                rtnNode.next = null;
                return rtnNode;
            }
        }

        while (runner) {
            if (runner.next.value === val) {
                let rtnNode = runner.next;
                runner.next = runner.next.next;
                rtnNode.next = null;
                return rtnNode;
            }
            runner = runner.next;
        }
        return null;
    }
}

let aSLL = new SingleLinkedList();
aSLL.addToFront(new Node(10));
aSLL.addToFront(new Node(20));
aSLL.addToFront(new Node(30));

console.log(aSLL);
aSLL.deleteNode(20);
console.log(aSLL);