const valid = string => {
  const digits = [];

  for (let i = 0, j = 0; i < string.length; i++) {
    if (string[i] != ' ') {
      digits[j] = parseInt(string[i]);
      j++;
    }
  }

  if (digits.length < 2) {
    return false;
  }

  for (let i = digits.length - 2; i >= 0; i -= 2) {
    digits[i] *= 2;
    if (digits[i] > 9) {
      digits[i] -= 9;
    }
  }

  const sum = digits.reduce((a, b) => a + b, 0);
  return sum % 10 === 0;
};

console.log(valid('4539 3195 0343 6467')); // returns true
console.log(valid('8273 1232 7352 0569')); // returns false
