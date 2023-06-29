const maxCount = (m, n, ops) => {
  let minA = m;
  let minB = n;

  for (const [a, b] of ops) {
    minA = Math.min(minA, a);
    minB = Math.min(minB, b);
  }

  return minA * minB;
};

const m = 3;
const n = 3;
const ops = [
  [2, 2],
  [3, 3],
];
console.log(maxCount(m, n, ops)); //Output: 4
