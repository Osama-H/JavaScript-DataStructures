// Solve Delete Middle Node In leetcode

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const deleteMiddle = (head) => {
  let slow = head;
  let fast = head;

  let current = head;
  let dummy = new ListNode(-1, head);
  let prev = dummy;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let middleNode = slow;

  while (current) {
    if (current == middleNode) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy.next;
};
