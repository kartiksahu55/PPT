const transposeMatrix = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposedMatrix = [];

  for (let j = 0; j < cols; j++) {
    transposedMatrix[j] = [];
    for (let i = 0; i < rows; i++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transposeMatrix(matrix)); //Output: [[1,4,7],[2,5,8],[3,6,9]]
