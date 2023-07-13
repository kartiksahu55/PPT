function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const original = [];
    const set = new Set(changed);
  
    for (let num of changed) {
      const doubled = num * 2;
  
      if (set.has(doubled)) {
        original.push(num);
        set.delete(doubled);
      }
    }
  
    return original.length === changed.length / 2 ? original : [];
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const result = findOriginalArray(changed);
  console.log(result); // Output: [1, 3, 4]
  