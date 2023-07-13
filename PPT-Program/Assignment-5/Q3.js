function sortedSquares(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    
    for (let i = nums.length - 1; i >= 0; i--) {
      const squaredLeft = nums[left] * nums[left];
      const squaredRight = nums[right] * nums[right];
      
      if (squaredLeft > squaredRight) {
        result[i] = squaredLeft;
        left++;
      } else {
        result[i] = squaredRight;
        right--;
      }
    }
    
    return result;
  }
  
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result); // Output: [0, 1, 9, 16, 100]
  