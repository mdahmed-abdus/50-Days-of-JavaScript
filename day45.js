function findOutlier(integers) {
  const isEvenArray = integers[0] % 2 === 0 && integers[1] % 2 === 0;

  for (const i of integers) {
    if (isEvenArray && i % 2 !== 0) {
      return i;
    } else if (!isEvenArray && i % 2 === 0) {
      return i;
    }
  }
}

console.log(findOutlier([2, 6, 8, 10, 3])); // returns 3
console.log(findOutlier([0, 0, 3, 0, 0])); // returns 3
console.log(findOutlier([1, 1, 0, 1, 1])); // returns 0
