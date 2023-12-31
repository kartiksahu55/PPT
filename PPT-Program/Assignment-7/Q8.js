function checkStraightLine(coordinates) {
    if (coordinates.length <= 2) {
      return true; // A line can be formed with 2 or fewer points
    }
  
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = (y1 - y0) / (x1 - x0);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      const slope = (y - y0) / (x - x0);
  
      if (slope !== initialSlope) {
        return false; // Slope differs, not a straight line
      }
    }
  
    return true;
  }
  
  const coordinates = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7]
  ];
  console.log(checkStraightLine(coordinates)); // Output: true
  