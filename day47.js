function isIsogram(str) {
  str = str.toLowerCase();

  const checker = [];

  for (let i = 0; i < str.length; i++) {
    if (checker.includes(str[i])) {
      return false;
    }

    checker.push(str[i]);
  }

  return true;
}

console.log(isIsogram('isogram')); // returns true
console.log(isIsogram('')); // returns true
console.log(isIsogram('moOse')); // returns false
