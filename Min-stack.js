// Solve MinStack on leetCode 

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(num) {
    if (this.stack.length == 0) {
      this.minStack.push(num);
    }
    this.stack.push(num);
    this.minStack[this.minStack.length - 1] < num
      ? this.minStack.push(this.minStack[this.minStack.length - 1])
      : this.minStack.push(num);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const newS = new Stack();
newS.push(-2);
newS.push(0);
newS.push(-3);
// newS.push(3);
// newS.push(-1);
// newS.push(-7)
console.log(newS.getMin());
