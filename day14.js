/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
  const digit = digits.join('');
  const inDecimal = parseInt(digit, baseA);

  const remainders = [];

  let remainder = inDecimal % baseB;
  let quotient = Math.floor(inDecimal / baseB);
  remainders.push(remainder);
  while (quotient > 0) {
    remainder = quotient % baseB;
    quotient = Math.floor(quotient / baseB);
    remainders.push(remainder);
  }

  return remainders.reverse();
};

console.log(convertDigitsToAskedBase([5, 8], 10, 16));
