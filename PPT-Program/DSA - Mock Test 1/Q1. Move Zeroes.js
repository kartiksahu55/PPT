function moveZero(nums) {
  let right = 0;

  for (let left = 0; left < nums.length; left++) {
    if (nums[left] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right++;
    }
  }
}

const nums = [0, 1, 0, 3, 12];
moveZero(nums);
console.log(nums);  
