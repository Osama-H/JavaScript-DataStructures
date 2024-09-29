// solve valid-parentheses on leetCode
const isValid = (s) => {
  let stack = [];

  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (para of s) {
    if (obj[para]) {
      stack.push(obj[para]);
    } else if (stack.pop() !== para) {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};

console.log(isValid("()[]{}"));
