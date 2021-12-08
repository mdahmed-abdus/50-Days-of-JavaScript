function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(getCount('abracadabra')); // returns 5
console.log(getCount('THe Strings are SOO COOL')); // returns 8
console.log(getCount('There exists only 5 vowels')); // returns 7
