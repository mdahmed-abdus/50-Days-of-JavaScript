const sayNumberInEnglish = n => {
  if (n.length === 0) {
    return;
  }

  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const sep = [
    '',
    ' thousand ',
    ' million ',
    ' billion ',
    ' trillion ',
    ' quadrillion ',
    ' quintillion ',
    ' sextillion ',
  ];

  const arr = [];
  let str = '';
  let i = 0;

  n = parseInt(n, 10);

  while (n) {
    arr.push(n % 1000);
    n = parseInt(n / 1000, 10);
  }

  while (arr.length) {
    const a = arr.shift();

    const x = Math.floor(a / 100);
    const y = Math.floor(a / 10) % 10;
    const z = a % 10;

    str =
      (x > 0 ? ones[x] + ' hundred ' : '') +
      (y >= 2 ? tens[y] + '-' + ones[z] : ones[10 * y + z]) +
      sep[i++] +
      str;
  }

  return str;
};

console.log(sayNumberInEnglish(14)); // returns "fourteen"
console.log(sayNumberInEnglish(1323)); // returns "one thousand three hundred twenty-three"
