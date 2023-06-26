const maxProduct = (nums) => {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const maxProduct1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const maxProduct2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(maxProduct1, maxProduct2);
};

const nums = [1, 2, 3];
const result = maxProduct(nums);
console.log(result); // Output: 6
