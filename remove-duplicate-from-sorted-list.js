// Solve Remove Duplicates from Sorted List on leetCode

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const deleteDuplicates = (head) => {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
