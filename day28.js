function toWeirdCase(string) {
  const x = string.split('');

  x.forEach((c, i) => {
    if (i % 2 == 0) {
      x[i] = c.toUpperCase();
    } else {
      x[i] = c.toLowerCase();
    }
  });

  return x.join('');
}

console.log(
  `The weird case of ${'A test case'} is ${toWeirdCase('A test case')}`
);
console.log(toWeirdCase('This')); // returns 'ThIs'
console.log(toWeirdCase('This is a test')); // returns 'ThIs iS A TeSt'
console.log(toWeirdCase('A test case')); // returns 'A TeSt cAsE'
