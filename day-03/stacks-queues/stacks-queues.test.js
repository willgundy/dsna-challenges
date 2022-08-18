class Stack {
    #stack = [];

    constructor(initialStack) {
        if (initialStack) this.#stack = initialStack;
    }

    // methods
    push(item) {
        this.#stack.push(item);
    }

    pop() {
        return this.#stack.pop();
    }

    peek() {
        return this.#stack[this.#stack.length - 1];
    }

    getList() {
        let list = [];
        while (this.#stack.length) {
            list.push(this.pop());
        }
        return list.join(', ');
    }
}

test('stack', () => { 

    const stack = new Stack();
    stack.push('fox');
    stack.push('goose');
    stack.push('lizard');
    expect(stack.pop()).toBe('lizard');
    expect(stack.peek()).toBe('goose');
    expect(stack.pop()).toBe('goose');
    stack.push('llama');
    expect(stack.pop()).toBe('llama');
    expect(stack.peek()).toBe('fox');
    expect(stack.pop()).toBe('fox');
    expect(stack.pop()).toBe(undefined);
});

function checkSyntax(code) {
    const stack = new Stack();
    const openers = ['(', '[', '{'];
    const closers = [')', ']', '}'];
    code.split('').forEach(char => {
        if (openers.includes(char) || closers.includes(char)) {
            stack.peek() && stack.peek() === openers[closers.indexOf(char)] ? stack.pop() : stack.push(char);
        }
     });
    return stack.peek() ? false : true;
}

test('check syntax', () => { 
    expect(checkSyntax(`if(true) { return; }`)).toBe(true);
    expect(checkSyntax(`if(true( { return; }`)).toBe(false);
    expect(checkSyntax(`if(true) { return;`)).toBe(false);
    expect(checkSyntax(`(if(true) { return; }`)).toBe(false);
    expect(checkSyntax(`( true && { name: 'foo' } )`)).toBe(true);
    expect(checkSyntax(`( true && { name: 'foo' ) )`)).toBe(false);
    expect(checkSyntax(`( true && ( name: 'foo' } )`)).toBe(false);
    expect(checkSyntax(`((2 + 3) * (4 + 11 * (2 - 1)))`)).toBe(true);
    expect(checkSyntax(`((2 + 3) * (4 + 11 * 2 - 1)))`)).toBe(false);
    expect(checkSyntax(`((2 + 3) * (4 + 11 * (2 - 1))`)).toBe(false);
});

class Queue {
    #queue = [];

    constructor(initialQueue) {
        if (initialQueue) this.#queue = initialQueue;
    }

    //methods
    enqueue(item) {
        this.#queue.push(item);
    }

    dequeue() {
        return this.#queue.shift();
    }

    hasNext() {
        return this.#queue.length > 0;
    }
}

test('queue', () => { 
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose');
    queue.enqueue('lizard');
    expect(queue.dequeue()).toBe('fox');
    expect(queue.hasNext()).toBe(true);
    expect(queue.dequeue()).toBe('goose');
    queue.enqueue('llama');
    expect(queue.dequeue()).toBe('lizard');
    expect(queue.hasNext()).toBe(true);
    expect(queue.dequeue()).toBe('llama');
    expect(queue.hasNext()).toBe(false);
    expect(queue.dequeue()).toBe(undefined);
});