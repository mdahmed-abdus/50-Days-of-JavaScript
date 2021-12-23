function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // returns 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // returns 6
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // returns 24
