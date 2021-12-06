function spinWords(string) {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('');
    }
  }

  return words.join(' ');
}

console.log(spinWords('Hey fellow warriors')); // returns "Hey wollef sroirraw"
console.log(spinWords('You are almost to the last test')); // returns "You are tsomla to the last test"
console.log(spinWords('Seriously this is the last one')); // returns "ylsuoireS this is the last one"
