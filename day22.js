let uniqueInOrder = iterable => {
  const result = [];

  [...iterable].forEach(v => {
    if (result[result.length - 1] !== v) {
      result.push(v);
    }
  });

  return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // return ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); // returns ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // returns [1,2,3]
