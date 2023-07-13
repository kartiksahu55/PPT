function searchMatrix(matrix, target) {
    const m = matrix.length; // Number of rows
    const n = matrix[0].length; // Number of columns
  
    let left = 0;
    let right = m * n - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const num = matrix[Math.floor(mid / n)][mid % n];
  
      if (num === target) {
        return true;
      } else if (num < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  
  // Example usage:
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 3;
  
  const result = searchMatrix(matrix, target);
  console.log(result);
  