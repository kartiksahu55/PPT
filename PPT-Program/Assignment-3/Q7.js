const findMissingRanges = (nums, lower, upper) => {
  const result = [];
  let next = lower;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > next) {
      result.push(getRange(next, nums[i] - 1));
    }
    next = nums[i] + 1;
  }

  if (next <= upper) {
    result.push(getRange(next, upper));
  }

  return result;
};

const getRange = (start, end) => {
  return start === end ? `${start}` : `${start}->${end}`;
};

const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
console.log(findMissingRanges(nums, lower, upper));
// Output: [[2,2],[4,49],[51,74],[76,99]]
