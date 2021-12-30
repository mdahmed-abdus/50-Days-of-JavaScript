function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

console.log(isTriangle(1, 2, 2)); // returns true
console.log(isTriangle(7, 2, 2)); // returns false
console.log(isTriangle(7, 14, 16)); // returns true
