// FIFO

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty) {
      return this.queue.shift();
    }
    return "Queue is Empty!";
  }

  isEmpty() {
    return this.queue.length ? false : true;
  }

  display() {
    return this.queue;
  }
}

const b = new Queue();
b.enqueue(10);
b.enqueue(20);
b.enqueue(30);
b.dequeue();
b.dequeue();
console.log(b.isEmpty())
console.log(b.display());
