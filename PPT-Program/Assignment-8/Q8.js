function buddyStrings(s, goal) {
  if (s.length !== goal.length || s.length < 2) {
    return false;
  }

  if (s === goal) {
    const charSet = new Set(s);
    return charSet.size < s.length;
  }

  const mismatches = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatches.push([s[i], goal[i]]);
    }
    if (mismatches.length > 2) {
      return false;
    }
  }

  return (
    mismatches.length === 2 &&
    mismatches[0][0] === mismatches[1][1] &&
    mismatches[0][1] === mismatches[1][0]
  );
}

const s = "ab";
const goal = "ba";
console.log(buddyStrings(s, goal)); // Output: true
