function high(x) {
  x = x.split(' ');
  let maxScore = 0;
  let maxWord = '';

  for (const word of x) {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96;
    }

    if (maxScore < score) {
      maxScore = score;
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(high('man i need a taxi up to ubud')); // returns 'taxi'
console.log(high('what time are we climbing up the volcano')); // returns 'volcano'
