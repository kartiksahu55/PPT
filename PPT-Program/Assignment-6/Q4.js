function findMaxLength(nums) {
    const n = nums.length;
    const countMap = new Map(); // Map to store the count of 0s and 1s
    let count = 0; // Difference between the count of 0s and 1s
    let maxLength = 0;
  
    countMap.set(0, -1);
  
    for (let i = 0; i < n; i++) {
      count += nums[i] === 1 ? 1 : -1;
  
      if (countMap.has(count)) {
        maxLength = Math.max(maxLength, i - countMap.get(count));
      } else {
        countMap.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);
  