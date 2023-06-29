const findCommonEle = (arr1, arr2, arr3) => {
  const result = [];
  let p1 = 0,
    p2 = 0,
    p3 = 0;

  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
      p3++;
    } else {
      const smallest = Math.min(arr1[p1], arr2[p2], arr3[p3]);
      if (arr1[p1] === smallest) {
        p1++;
      } else if (arr2[p2] === smallest) {
        p2++;
      } else if (arr3[p3] === smallest) {
        p3++;
      }
    }
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
console.log(findCommonEle(arr1, arr2, arr3)); //Output: [1,5]
