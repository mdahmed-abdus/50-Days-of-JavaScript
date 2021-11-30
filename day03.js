const num = 3849;

function reverseGivenInteger(num) {
  num = '' + num;
  return parseInt(num.split('').reverse().join(''));
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
