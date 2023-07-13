function findPermutation(s) {
    const n = s.length;
    const perm = [];
    let start = 0;
    let end = 0;
  
    for (let i = 0; i <= n; i++) {
      if (i === n || s[i] === 'I') {
        for (let j = end; j >= start; j--) {
          perm.push(j);
        }
        start = i + 1;
        end = i + 1;
      } else {
        end++;
      }
    }
  
    return perm;
  }
  
  const s = "IDID";
  const perm = findPermutation(s);
  console.log(perm);
  