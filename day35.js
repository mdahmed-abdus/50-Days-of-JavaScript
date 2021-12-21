function nthlargest(arr, highest) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - highest];
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // returns 89
console.log(nthlargest([10, 100, 1000, 10000], 2)); // returns 1000
