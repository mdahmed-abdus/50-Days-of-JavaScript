/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = inputArray => {
  inputArray.sort((a, b) => a - b);

  let lcsLength = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i + 1] - inputArray[i] === 1) {
      lcsLength++;
    }
  }

  return lcsLength > 0 && ++lcsLength;
};

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // returns 4
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // returns 9
