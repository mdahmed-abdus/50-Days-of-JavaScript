function wave(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }

    let x = '';
    let j = 0;

    while (j < str.length) {
      if (j === i) {
        x += str[j].toUpperCase();
      } else {
        x += str[j];
      }
      j++;
    }

    arr.push(x);
  }

  return arr;
}

console.log(wave('hello')); // returns `["Hello", "hEllo", "heLlo", "helLo", "hellO"]`
console.log(wave('two words')); // returns `["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]`
console.log(wave(' gap ')); // returns `[" Gap ", " gAp ", " gaP "]`
