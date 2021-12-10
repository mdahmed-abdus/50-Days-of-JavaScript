function accum(s = '') {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();

    for (let j = 0; j < i; j++) {
      result += s[i].toLowerCase();
    }

    if (i != s.length - 1) {
      result += '-';
    }
  }

  return result;
}

console.log(accum('ZpglnRxqenU')); // returns "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum('NyffsGeyylB')); // returns "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum('MjtkuBovqrU')); // returns "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
