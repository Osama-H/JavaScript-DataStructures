// LIFO

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
    console.log("Item Added Successfully!");
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    if (!this.isEmpty) {
      return this.stack[this.stack.length - 1];
    }
    return "Stack is Empty";
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length ? false : true;
  }

  display() {
    console.log("Current Stack:", this.stack);
  }
}

const a = new Stack();
console.log(a.isEmpty());
a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.pop();
a.display();
