function findOriginalArray(changed) {
  const n = changed.length;

  if (n % 2 !== 0) {
    return [];
  }

  const original = [];
  const countMap = new Map();

  for (const num of changed) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const num of changed) {
    if (countMap.get(num) === 0) {
      continue;
    }

    const halfNum = num / 2;

    if (countMap.get(halfNum) === 0) {
      return [];
    }

    original.push(halfNum);
    countMap.set(halfNum, countMap.get(halfNum) - 1);
    countMap.set(num, countMap.get(num) - 1);
  }

  return original;
}

const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);
