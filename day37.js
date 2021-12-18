const isLeap = (year = 0) => {
  if (year % 100 === 0) {
    return year % 400 === 0;
  }
  return year % 4 === 0;
};

console.log(isLeap(2022)); // returns false
console.log(isLeap(2020)); // returns true
