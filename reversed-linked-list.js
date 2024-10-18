// Solve reversed LinkedList on leetCode

const reverseList = (head) => {
  let prev = null;
  let current = head;
  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;

    current = next;
  }

  return prev;
};
