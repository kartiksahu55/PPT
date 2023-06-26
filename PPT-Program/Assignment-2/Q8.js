const minScore = (nums, k) => {
  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);

  if (maxNum - minNum <= 2 * k) {
    return 0;
  }

  const candidate1 = maxNum - k;
  const candidate2 = minNum + k;

  return Math.min(candidate1 - minNum, maxNum - candidate2);
};

const nums = [1];
const k = 0;
const result = minScore(nums, k);
console.log(result); // Output: 0
