class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    pop = () => {
        if (this.isEmpty()) {
            return this.top;
        }
        else {
            let node = this.top;
            this.top = this.top.next;
            node.next = null;
            return node;
        }
    }

    push = (node) => {
        node.next = this.top;
        this.top = node;
    }

    isEmpty = () => {
        return !this.top ? true : false
    }

    peak = () => {
        return this.top
    }

    read = () => {
        if (this.isEmpty()) {
            return null;
        }
        const tempStack = new Stack();
        while (this.peak()) {
            let node = this.pop();
            console.log(node.value)
            tempStack.push(node)
        }
        while (tempStack.top) {
            this.push( tempStack.pop() )
        }
    }

    copy = () => {
        if (this.isEmpty()) {
            return null;
        }
        const middleStack = new Stack();
        const copyStack = new Stack();
        while (this.top) {
            middleStack.push( this.pop() )
        }
        while (middleStack.top) {
            let node = middleStack.pop()
            this.push( new Node(node.value) )
            copyStack.push( new Node(node.value) )
        }
        return copyStack
    }

    reverse = () => {
        if (this.isEmpty()) {
            return null;
        }
        const tempStack = this.copy();
        this.push(null);
        while (!tempStack.isEmpty()) {
            this.push( tempStack.pop() )
        }
    }
}

const isStackSorted = stack => {
    if (!stack.top) return false

    let newStack = new Stack()
    newStack.push( stack.pop() )

    let isSorted = true;

    while(stack.top) {
        if (stack.top.value > newStack.top.value) {
            isSorted = false;
            break;
        }
        else {
            newStack.push( stack.pop() )
        }
        
        while(newStack.top) {
            stack.push( newStack.pop() )
        }
        return isSorted;
    }
}

const stackA = new Stack();
stackA.push(new Node(10))
stackA.push(new Node(20))
stackA.push(new Node(30))
stackA.push(new Node(40))
stackA.push(new Node(50))

console.log("\n|--- Stack A Output ----|")
stackA.read();
console.log(`\nisEmpty -- ${stackA.isEmpty()}`)
const stackB = stackA.copy();
console.log("\n|--- Stack B Output After Copy ----|")
stackB.read();

stackB.push(new Node(60));
console.log("\n|--- Stack A Output After B Push ----|")
stackA.read();
console.log("\n|--- Stack B Output After B Push ----|")
stackB.read();

stackA.pop();
console.log("\n|--- Stack A Output after A Pop ----|")
stackA.read();
console.log("\n|--- Stack B Output after A Pop ----|")
stackB.read();