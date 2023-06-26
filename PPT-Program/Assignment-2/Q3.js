const findingLHS = (nums) => {
  const frequencyMap = new Map();

  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let maxLen = 0;

  for (const [num, freq] of frequencyMap.entries()) {
    if (frequencyMap.has(num + 1)) {
      const currLen = freq + frequencyMap.get(num + 1);
      maxLen = Math.max(maxLen, currLen);
    }
  }

  return maxLen;
};

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = findingLHS(nums);
console.log(result); // Output: 5
