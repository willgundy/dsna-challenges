class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    addNoRecursion(node) {
        let current = this;
        while (current.right) {
            current = current.right;
        }
        current.right = node;
    }

    add(node) {
        if(!this.right) return this.right = node;
        
        return this.right.add(node);
    }

    getList() {
        let list = [];
        let current = this;
        while (current) {
            list.push(current.value);
            current = current.right;
        }
        return list.join(', ');
    }
}

test('add node', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);

    expect(B.getList()).toBe('B, A, D, C');
});

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    add(node) {
        if(!this.next) return this.next = node;
        
        return this.next.add(node);
    }

    getList() {
        let list = [];
        let current = this;
        while (current) {
            list.push(current.value);
            current = current.next;
        }
        return list.join(', ');
    }

    remove(letter) {
        if(this.next.value === letter) return this.next = this.next.next;
        
        return this.next.remove(letter);
    }
}

test('linked lists', () => {
    const root = new LinkedListNode('A');
    const nodeB = new LinkedListNode('B');
    root.add(nodeB);
    expect(root.getList()).toBe('A, B');

    const nodeC = new LinkedListNode('C');
    const nodeD = new LinkedListNode('D');
    const nodeE = new LinkedListNode('E');
    root.add(nodeC);
    root.add(nodeD);
    root.add(nodeE);
    expect(root.getList()).toBe('A, B, C, D, E');
    root.remove('B');
    expect(root.getList()).toBe('A, C, D, E');
});


class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
        if(!this.right) return this.right = node;
        
        return this.right.add(node);
    }
  
    findPerson(name) {
        if(this.value === name) return this.person;
        
        return this.right.findPerson(name);
    }
}

test('person tree', () => { 
    const John = new PersonTreeNode({name: 'John'});
    const Jacob = new PersonTreeNode({name: 'Jacob'});
    const Julie = new PersonTreeNode({name: 'Julie'});
    const Jerry = new PersonTreeNode({name: 'Jerry'});

    John.add(Jacob);
    John.add(Julie);
    John.add(Jerry);

    expect(John.findPerson('John')).toEqual({name: 'John'});
});