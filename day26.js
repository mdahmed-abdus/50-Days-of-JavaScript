function findOdd(arr) {
  for (const e of arr) {
    let count = 0;

    arr.forEach(n => {
      if (n === e) {
        count++;
      }
    });

    if (count % 2 != 0) {
      return e;
    }
  }

  return 0;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // returns 5
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // returns 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // returns 1
