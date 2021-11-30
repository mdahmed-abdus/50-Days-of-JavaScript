const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  str = str.split(' ');

  let truncatedStr = '';
  for (let i = 0; i < wordLimit; i++) {
    truncatedStr += str[i] + ' ';
  }

  return truncatedStr.trim();
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
