const isMonotonic = (nums) => {
  const n = nums.length;
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
};

const nums = [1, 2, 2, 3];
const result = isMonotonic(nums);
console.log(result); // Output: true
