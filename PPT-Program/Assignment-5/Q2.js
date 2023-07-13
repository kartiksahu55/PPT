function completeStaircaseRows(n) {
    let k = 0;
    while ((k * (k + 1)) / 2 <= n) {
      k++;
    }
    return k - 1;
  }
  
  const n = 5;
  const result = completeStaircaseRows(n);
  console.log(result); // Output: 2
  