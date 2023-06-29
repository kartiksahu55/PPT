const findDistinctInt = (nums1, nums2) => {
  const distinctNums1 = new Set(nums1);
  const distinctNums2 = new Set(nums2);

  const result = [
    Array.from(distinctNums1).filter((num) => !distinctNums2.has(num)),
    Array.from(distinctNums2).filter((num) => !distinctNums1.has(num)),
  ];

  return result;
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
console.log(findDistinctInt(nums1, nums2)); //output = [[1, 3], [4, 6]]
