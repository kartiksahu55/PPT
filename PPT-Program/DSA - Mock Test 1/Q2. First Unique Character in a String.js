function firstUniqChar(s) {
  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    charCount.set(ch, (charCount.get(ch) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (charCount.get(ch) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
