const nextPermutation = (nums) => {
  let i = nums.length - 1;

  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }

  if (i === 0) {
    reverseArray(nums, 0, nums.length - 1);
  } else {
    const pivot = i - 1;

    let j = nums.length - 1;
    while (nums[j] <= nums[pivot]) {
      j--;
    }

    swap(nums, pivot, j);

    reverseArray(nums, i, nums.length - 1);
  }

  return nums;
};

const reverseArray = (nums, start, end) => {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const nums = [1, 2, 3];
console.log(nextPermutation(nums)); // Output: [1, 3, 2]
