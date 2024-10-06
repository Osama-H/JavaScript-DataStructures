// solve Delete Node in a Linked List on leetCode

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};
