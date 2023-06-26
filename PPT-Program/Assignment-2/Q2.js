const candiesDistribute = (candyType) => {
  const uniqueCandies = new Set(candyType);
  const maxCandies = candyType.length / 2;

  return Math.min(uniqueCandies.size, maxCandies);
};

const candyType = [1, 1, 2, 2, 3, 3];
const result = candiesDistribute(candyType);
console.log(result); // Output: 3
