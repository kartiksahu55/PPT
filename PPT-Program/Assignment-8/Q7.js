function decodeString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let decoded = "";
      while (stack[stack.length - 1] !== "[") {
        decoded = stack.pop() + decoded;
      }
      stack.pop();

      let count = "";
      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        count = stack.pop() + count;
      }
      count = parseInt(count);

      const repeatedString = decoded.repeat(count);
      for (let j = 0; j < repeatedString.length; j++) {
        stack.push(repeatedString[j]);
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}

const s = "3[a]2[bc]";
console.log(decodeString(s));
