const str = 'JavaScript is awesome';

function reverseAString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

console.log(`Reversed string is: ${reverseAString(str)}`);
