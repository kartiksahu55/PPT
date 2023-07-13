function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  const concatenated = s + s;
  return concatenated.includes(goal);
}

const s = "abcde";
const goal = "cdeab";
console.log(rotateString(s, goal)); // Output: true
