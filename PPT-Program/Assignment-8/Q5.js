function compress(chars) {
  let anchor = 0;
  let write = 0;

  for (let read = 0; read < chars.length; read++) {
    if (read + 1 === chars.length || chars[read] !== chars[read + 1]) {
      chars[write] = chars[anchor];
      write++;

      const count = read - anchor + 1;
      if (count > 1) {
        const countString = count.toString();
        for (let i = 0; i < countString.length; i++) {
          chars[write] = countString[i];
          write++;
        }
      }

      anchor = read + 1;
    }
  }

  return write;
}

const chars = ["a", "a", "b", "b", "c", "c", "c"];
const compressedLength = compress(chars);
console.log(compressedLength);
console.log(chars.slice(0, compressedLength));
