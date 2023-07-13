function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === "(" || char === "*") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.includes("(")) {
        stack.splice(stack.lastIndexOf("("), 1);
      } else if (stack.includes("*")) {
        stack.splice(stack.lastIndexOf("*"), 1);
      } else {
        return false;
      }
    }
  }

  let openCount = 0;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "(") {
      openCount++;
    } else if (openCount > 0) {
      openCount--;
    }
  }

  return openCount === 0;
}

const s = "()";
console.log(isValid(s)); // Output: true
