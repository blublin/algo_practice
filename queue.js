class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue = aNode => {
        if (!this.front) {
            // Empty so set both to the node passed in
            this.front = this.back = aNode;
        }
        else {
            // Point the current back node at the new node
            this.back.next = aNode;
            // Set back to the new node
            this.back = aNode;
        }
    }

    dequeue = () => {
        if (!this.front) {
            // Check if the queue is empty
            return null;
        }
        else {
            // create a temp pointer for the current front
            const temp = this.front;
            // Point front 1 behind
            this.front = temp.next;
            // Dereference temp
            temp.next = null;

            return temp;
        }
    }

    peek = () => {
        return this.front ? this.front.value : this.front;
    }

    isEmpty = () => {
        return this.front ? true : false;
    }

    read() {
        if (!this.front) {
            // Check if empty
            return null
        }

        const tempQ = new Queue();
        // Read and dequeue all nodes in the Q
        while (this.front) {
            let tempNode = this.dequeue();
            console.log(`Node Value in queue: ${tempNode.value}`);
            tempQ.enqueue(tempNode)
        }
        // Refill this Q
        // while(tempQ.front) {
        //     this.enqueue( tempQ.dequeue() );
        // }
        // OR FEWER, EXPLICIT LINES
        this.front = tempQ.front
        this.back = tempQ.back
        tempQ.back = tempQ.front = null;
    }
}

const aQueue = new Queue();
aQueue.enqueue(new Node(10))
aQueue.enqueue(new Node(20))
aQueue.enqueue(new Node(30))
aQueue.enqueue(new Node(40))
aQueue.enqueue(new Node(50))
aQueue.enqueue(new Node(60))

console.log("|--- Peek Before ---|")
console.log(aQueue.peek());
console.log("\n\n|--- Read ---|")
aQueue.read();
console.log("\n\n|--- Peek After ---|")
console.log(aQueue.peek());
console.log("\n\n|--- Read Again ---|")
aQueue.read();


const whatIf = queue => {
    // Check if queue exists and front/back are equal
    if (!queue.front || queue.front.value !== queue.back.value ) {
        return false;
    }
    
    // Instantiate string and tempQ
    let palindrome = ""
    const tempQ = new Queue();

    // Read through queue
    while (queue.front) {
        let node = queue.dequeue();
        // Build palindrome string
        palindrome += node.value;
        tempQ.enqueue(node);
    }

    // Reset queue
    queue.front = tempQ.front;
    queue.back = tempQ.back;

    for (let i = 0; i < Math.floor(palindrome.length/2); i++) {
        // Compare front to back characters of string (middle value is inherently true)
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
            return false;
        }
    }
    return true
}