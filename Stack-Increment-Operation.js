// Solve Stack With Increment Operation on leetCode

class CustomStack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
  }

  push(ele) {
    if (this.stack.length < this.maxSize) {
      this.stack.push(ele);
    }
  }

  pop() {
    if (!this.stack.length) {
      return -1;
    } else {
      return this.stack.pop();
    }
  }

  increment(k, val) {
    for (let i = 0; i < k; i++) {
      if (i == this.stack.length) {
        break;
      }
      this.stack[i] += val;
    }
  }
}

const s = new CustomStack(5);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.inc(8, 100);

console.log(s);
