function backspaceCompare(s, t) {
  const processedS = processString(s);
  const processedT = processString(t);

  return processedS === processedT;
}

function processString(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "#") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t)); // Output: true
