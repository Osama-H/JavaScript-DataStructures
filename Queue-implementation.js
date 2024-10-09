// Implementing Queue with objects "Not Arrays" ..

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enquque(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const deletedItem = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return deletedItem;
  }

  peek() {
    return this.items[this.head];
  }

  print() {
    for (let item in this.items) {
      console.log(this.items[item]);
    }
  }

  getSize() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}
