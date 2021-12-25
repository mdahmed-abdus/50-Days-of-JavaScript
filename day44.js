function getDivisorsCnt(num) {
  let count = 0;
  const sqrt = Math.sqrt(num);

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  count *= 2;
  sqrt % 1 === 0 && count--;

  return count;
}

console.log(getDivisorsCnt(10)); // returns 4
console.log(getDivisorsCnt(11)); // returns 2
console.log(getDivisorsCnt(54)); // returns 8
