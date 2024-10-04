// Solve Remove Linked List Elements on leetCode

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeElements = (head, val) => {
  let dummy = new ListNode(-1, head);
  let prev = dummy;
  let current = head;

  while (current) {
    if (current.val == val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy.next;
};
