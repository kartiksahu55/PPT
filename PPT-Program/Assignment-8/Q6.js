function findAnagrams(s, p) {
  const result = [];
  const pFreq = {};
  let left = 0;
  let right = 0;
  let count = 0;

  for (let i = 0; i < p.length; i++) {
    const char = p[i];
    pFreq[char] = (pFreq[char] || 0) + 1;
  }

  while (right < s.length) {
    const rightChar = s[right];

    if (rightChar in pFreq) {
      pFreq[rightChar]--;
      if (pFreq[rightChar] >= 0) {
        count++;
      }
    }

    if (right >= p.length) {
      const leftChar = s[left];

      if (leftChar in pFreq) {
        pFreq[leftChar]++;
        if (pFreq[leftChar] > 0) {
          count--;
        }
      }

      left++;
    }

    if (count === p.length) {
      result.push(left);
    }

    right++;
  }

  return result;
}

const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]
