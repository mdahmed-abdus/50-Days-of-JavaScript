function findEvenIndex(arr = []) {
  for (let i = 0; i < arr.length - 1; i++) {
    const leftSum = arr.slice(0, i + 1).reduce((a, b) => a + b, 0);
    const rightSum = arr.slice(i).reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // returns 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // returns 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // returns -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // returns 3
