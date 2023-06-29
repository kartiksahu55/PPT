const plusOne = (digits) => {
  const n = digits.length;
  let carry = 1;

  for (let i = n - 1; i >= 0; i--) {
    if (carry === 0) {
      break;
    }

    const sum = digits[i] + carry;
    digits[i] = sum % 10;

    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
};

const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4]
