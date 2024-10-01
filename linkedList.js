class Node {
  constructor(data, next = null) {
    this.next = next;
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add First
  addFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  addLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  getData() {
    let current = this.head;
    let arr = [];

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  addAtIndex(data, index) {
    if (index < 0 || index > this.size) {
      return "U CAnnot Dot that";
    }

    if (index == 0) {
      return this.addFirst(data);
    }

    if (index == this.size - 1) {
      return this.addLast(data);
    }

    const node = new Node(data);
    let prev;
    let current = this.head;
    let count = 0;

    while (count < index) {
      prev = current;

      count++;

      current = current.next;
    }

    node.next = current;
    prev.next = node;
    this.size++;
  }
}

const lk = new LinkedList();

lk.addFirst(1200);
lk.addFirst(1300);
lk.addFirst(1400);

lk.addAtIndex(230, 2);

console.log(lk.getData());
console.log(lk);
