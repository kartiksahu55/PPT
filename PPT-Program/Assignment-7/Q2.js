function isStrobogrammatic(num) {
  const map = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const leftChar = num[left];
    const rightChar = num[right];

    if (!map.has(leftChar) || map.get(leftChar) !== rightChar) {
      return false; // Invalid mapping
    }

    left++;
    right--;
  }

  return true;
}

const num = "69";
console.log(isStrobogrammatic(num)); // Output: true
