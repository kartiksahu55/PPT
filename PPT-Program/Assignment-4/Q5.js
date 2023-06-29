const arrangeCoins = (n) => {
  let left = 0;
  let right = n;

  for (
    let k = Math.floor((left + right) / 2);
    left <= right;
    k = Math.floor((left + right) / 2)
  ) {
    let curr = (k * (k + 1)) / 2;

    if (curr === n) {
      return k;
    } else if (curr < n) {
      left = k + 1;
    } else {
      right = k - 1;
    }
  }

  return right;
};

const n = 5;
console.log(arrangeCoins(n)); //Output: 2
