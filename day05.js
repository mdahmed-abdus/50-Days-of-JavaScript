const str = 'XeroX';

function getTheGapX(str) {
  const firstXIndex = str.indexOf('X');
  const lastXIndex = str.lastIndexOf('X');

  if (firstXIndex === -1) {
    return -1;
  }
  if (lastXIndex === -1) {
    return 0;
  }
  return lastXIndex - firstXIndex;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
