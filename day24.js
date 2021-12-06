function expandedForm(num) {
  num = num.toString();

  let result = '';
  let zerosToAdd = num.length - 1;

  for (let i = 0; i < num.length - 1; i++) {
    let temp = num[i];

    for (let j = 0; j < zerosToAdd; j++) {
      temp = temp + '0';
    }

    result = result + temp + '+';
    zerosToAdd--;
  }

  return result + num[num.length - 1];
}

console.log(expandedForm(12)); // returns '10+2'
console.log(expandedForm(42)); // returns '40+2'
console.log(expandedForm(734)); // returns '700+30+4'
